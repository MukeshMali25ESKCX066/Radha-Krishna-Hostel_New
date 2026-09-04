import os
import re
import calendar
from pathlib import Path
from datetime import datetime, timedelta

from flask import Flask, render_template, request, redirect, session, send_file, flash
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

BASE_DIR = Path(__file__).resolve().parent

app = Flask(__name__, template_folder=str(BASE_DIR), static_folder=str(BASE_DIR))

app.secret_key = "hostel_secret_key"
app.config["SESSION_TYPE"] = "filesystem"
HOSTEL_FEE = 114000.00


def get_db_connection():
    import mysql.connector

    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
    )
    connection.cursor().execute("CREATE DATABASE IF NOT EXISTS hostel_tracker")
    connection.commit()
    connection.close()

    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="hostel_tracker",
    )


def find_admin(cursor, value: str):
    cursor.execute(
        "SELECT * FROM `admin` WHERE LOWER(email)=%s OR LOWER(`admin id`)=%s OR LOWER(`neme`)=%s",
        (value, value, value),
    )
    return cursor.fetchone()


def initialize_database():
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS students (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100),
                phone VARCHAR(20),
                hostel VARCHAR(100),
                block VARCHAR(100),
                room VARCHAR(20),
                password VARCHAR(255),
                status VARCHAR(20) NOT NULL DEFAULT 'pending',
                rent_paid VARCHAR(10) NOT NULL DEFAULT 'no',
                rent_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
                rent_paid_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
                college VARCHAR(150),
                course VARCHAR(100),
                aadhaar VARCHAR(20),
                guardian_name VARCHAR(100),
                guardian_phone VARCHAR(20),
                emergency_contact VARCHAR(100),
                photo_url VARCHAR(255),
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'pending'
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN rent_paid VARCHAR(10) NOT NULL DEFAULT 'no'
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN rent_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN rent_paid_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN college VARCHAR(150)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN course VARCHAR(100)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN aadhaar VARCHAR(20)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN guardian_name VARCHAR(100)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN guardian_phone VARCHAR(20)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN emergency_contact VARCHAR(100)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN photo_url VARCHAR(255)
                """
            )
        except Exception:
            pass
        try:
            cursor.execute(
                """
                ALTER TABLE students
                ADD COLUMN created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                """
            )
        except Exception:
            pass
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS `admin` (
                id INT AUTO_INCREMENT PRIMARY KEY,
                `neme` VARCHAR(100),
                `email` VARCHAR(100) UNIQUE,
                `admin id` VARCHAR(100) UNIQUE,
                `password` VARCHAR(255)
            )
            """
        )
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS rooms (
                id INT AUTO_INCREMENT PRIMARY KEY,
                hostel VARCHAR(100),
                block VARCHAR(100),
                room VARCHAR(20),
                capacity INT NOT NULL DEFAULT 1,
                status VARCHAR(20) NOT NULL DEFAULT 'available',
                maintenance_notes VARCHAR(255),
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS complaints (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT NOT NULL,
                category VARCHAR(50),
                subject VARCHAR(150),
                description TEXT,
                status VARCHAR(20) NOT NULL DEFAULT 'pending',
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS laundry_tokens (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT NOT NULL,
                token_no VARCHAR(50),
                token_date VARCHAR(50),
                token_time VARCHAR(50),
                status VARCHAR(20) NOT NULL DEFAULT 'active',
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS attendance (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT NOT NULL,
                attendance_date VARCHAR(50),
                status VARCHAR(20) NOT NULL DEFAULT 'present',
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        for column_sql in [
            "ALTER TABLE students ADD COLUMN department VARCHAR(100)",
            "ALTER TABLE students ADD COLUMN year_semester VARCHAR(100)",
            "ALTER TABLE students ADD COLUMN bed_number VARCHAR(20)",
            "ALTER TABLE students ADD COLUMN blood_group VARCHAR(10)",
            "ALTER TABLE students ADD COLUMN college_id_url VARCHAR(255)",
            "ALTER TABLE students ADD COLUMN valid_until VARCHAR(50)",
            "ALTER TABLE laundry_tokens ADD COLUMN valid_until VARCHAR(50)",
        ]:
            try:
                cursor.execute(column_sql)
            except Exception:
                pass
        cursor.execute(
            """
            INSERT INTO `admin` (`neme`, `email`, `admin id`, `password`)
            VALUES ('Hostel admin', 'admin@gmail.com', 'admin@gmail.com', %s)
            ON DUPLICATE KEY UPDATE
                `neme` = VALUES(`neme`),
                `email` = VALUES(`email`),
                `admin id` = VALUES(`admin id`),
                `password` = VALUES(`password`)
            """,
            (hash_password("admin123"),),
        )
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Database initialization skipped:", exc)


def hash_password(password: str) -> str:
    return generate_password_hash(password)


def verify_password(password: str, hashed_password: str) -> bool:
    return check_password_hash(hashed_password, password)


def send_otp_email(email: str, otp: str) -> bool:
    try:
        host = os.environ.get("SMTP_HOST")
        if not host:
            print(f"OTP for {email}: {otp}")
            return False
        import smtplib
        from email.message import EmailMessage

        port = int(os.environ.get("SMTP_PORT", "587"))
        username = os.environ.get("SMTP_USERNAME")
        password = os.environ.get("SMTP_PASSWORD")
        if not username or not password:
            print(f"OTP for {email}: {otp}")
            return False

        message = EmailMessage()
        message["Subject"] = "Hostel Password Reset OTP"
        message["From"] = username
        message["To"] = email
        message.set_content(f"Your OTP for password reset is: {otp}")

        with smtplib.SMTP(host, port) as server:
            server.starttls()
            server.login(username, password)
            server.send_message(message)
        return True
    except Exception as exc:
        print("OTP email failed:", exc)
        return False


def write_simple_pdf(path: str, lines: list[str]):
    escaped_lines = []
    for line in lines:
        escaped_lines.append(str(line).replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)"))
    content = []
    y_position = 760
    for line in escaped_lines:
        content.append(f"BT /F1 12 Tf 50 {y_position} Td ({line}) Tj ET")
        y_position -= 14
    stream = "\n".join(content)
    objects = [
        "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
        "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
        f"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n",
        f"4 0 obj\n<< /Length {len(stream.encode('latin-1'))} >>\nstream\n{stream}\nendstream\nendobj\n",
        "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    ]
    pdf = ["%PDF-1.4\n"]
    offsets = [0]
    for obj in objects:
        offsets.append(len("".join(pdf).encode("latin-1")))
        pdf.append(obj)
    xref_offset = len("".join(pdf).encode("latin-1"))
    pdf.append(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n")
    for offset in offsets[1:]:
        pdf.append(f"{offset:010d} 00000 n \n")
    pdf.append(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n")
    with open(path, "wb") as fh:
        fh.write("".join(pdf).encode("latin-1"))


def get_server_config() -> tuple[str, int, bool]:
    port = int(os.environ.get("PORT", 5000))
    host = os.environ.get("HOST", "127.0.0.1")
    debug = os.environ.get("FLASK_DEBUG", "0") not in {"", "0", "false", "False", "no", "No"}
    return host, port, debug


database_initialized = False


def can_access_student_dashboard(student):
    if not student:
        return False, "Please sign in again."

    status = str(student.get("status", "pending") or "pending").strip().lower()
    if status == "approved":
        return True, ""

    return False, "Please sign in again."


def build_attendance_calendar(attendance_records=None):
    records = attendance_records or []
    month_start = datetime.now().replace(day=1)
    days_in_month = calendar.monthrange(month_start.year, month_start.month)[1]
    calendar_days = []
    for day in range(1, days_in_month + 1):
        current_day = datetime(month_start.year, month_start.month, day)
        day_key = current_day.strftime("%Y-%m-%d")
        day_display = current_day.strftime("%d %b %Y")
        status = "Absent"
        for record in records:
            record_date = str(record.get("attendance_date") or record.get("date") or "")
            if record_date in {day_key, day_display} or record_date.startswith(day_key):
                status = str(record.get("status") or "Present").capitalize()
                break
        calendar_days.append({"date": day_display, "day": current_day.strftime("%d"), "status": status})
    return calendar_days


def get_student_fee_summary(student):
    student_data = student or {}
    rent_amount = float(student_data.get("rent_amount") or 0)
    rent_paid_amount = float(student_data.get("rent_paid_amount") or 0)
    pending_amount = max(rent_amount - rent_paid_amount, 0.0)
    return {
        "rent_amount": rent_amount,
        "rent_paid_amount": rent_paid_amount,
        "pending_amount": pending_amount,
        "status": "Fully Paid" if pending_amount <= 0 else "Partially Paid" if rent_paid_amount > 0 else "Pending",
    }


def generate_laundry_token_number(cursor):
    cursor.execute("SELECT token_no FROM laundry_tokens ORDER BY id DESC LIMIT 1")
    last_token = cursor.fetchone()
    last_number = 0
    if last_token and last_token[0]:
        match = re.search(r"(\d+)$", str(last_token[0]))
        if match:
            last_number = int(match.group(1))
    next_number = last_number + 1
    return f"S.R.{next_number:04d}"


def build_student_dashboard_context(student, complaints=None, laundry_token=None, attendance_records=None, fee_summary=None, college_id_url=None):
    student_data = student or {}
    student_id = student_data.get("id") or student_data.get("student_id") or "N/A"
    full_name = student_data.get("name") or "Student"
    hostel_name = student_data.get("hostel") or "Assigned Hostel"
    room_no = student_data.get("room") or "Pending"
    college_name = student_data.get("college") or "ABC University"
    course = student_data.get("course") or "Not provided"
    department = student_data.get("department") or "Department"
    year_semester = student_data.get("year_semester") or "Not provided"
    mobile = student_data.get("phone") or "-"
    email = student_data.get("email") or "-"
    admission_date = student_data.get("created_at") or datetime.now().strftime("%d %b %Y")
    bed_number = student_data.get("bed_number") or "Pending"
    blood_group = student_data.get("blood_group") or "B+"
    fee_summary = fee_summary or get_student_fee_summary(student_data)

    return {
        "profile": {
            "full_name": full_name,
            "student_id": student_id,
            "college": college_name,
            "course": course,
            "department": department,
            "year_semester": year_semester,
            "mobile": mobile,
            "email": email,
            "hostel_name": hostel_name,
            "room_number": room_no,
            "bed_number": bed_number,
            "admission_date": admission_date,
            "guardian_name": student_data.get("guardian_name") or "-",
            "guardian_phone": student_data.get("guardian_phone") or "-",
            "emergency_contact": student_data.get("emergency_contact") or "-",
            "aadhaar": student_data.get("aadhaar") or "-",
            "blood_group": blood_group,
        },
        "hostel_id_card": {
            "hostel_id": f"HST{student_id if str(student_id).isdigit() else '000'}",
            "name": full_name,
            "hostel": hostel_name,
            "room_no": room_no,
            "blood_group": blood_group,
            "mobile": mobile,
            "valid_till": (datetime.now() + timedelta(days=365)).strftime("%d %b %Y"),
        },
        "college_id_card": {
            "college": college_name,
            "course": course,
            "department": department,
            "student_id": student_id,
            "college_id_url": college_id_url or student_data.get("college_id_url") or "",
        },
        "profile_photo": student_data.get("photo_url") or "/uploads/default-avatar.png",
        "attendance": attendance_records or [
            {"attendance_date": datetime.now().strftime("%Y-%m-%d"), "status": "Present"},
        ],
        "attendance_calendar": build_attendance_calendar(attendance_records),
        "fee_receipts": [
            {
                "receipt_no": f"HR{student_id:03d}",
                "amount": f"₹{fee_summary['rent_amount']:,.0f}",
                "date": datetime.now().strftime("%d %b %Y"),
                "status": fee_summary["status"],
            }
        ],
        "fee_summary": fee_summary,
        "complaint_categories": [
            "Electrical",
            "Plumbing",
            "Wi-Fi",
            "Furniture",
            "Cleaning",
            "Mess Food",
            "Security",
            "Other",
        ],
        "complaints": complaints or [
            {"category": "Wi-Fi", "subject": "Internet issue", "status": "Pending", "date": datetime.now().strftime("%d %b %Y")},
            {"category": "Fan Repair", "subject": "AC not working", "status": "Completed", "date": (datetime.now() - timedelta(days=3)).strftime("%d %b %Y")},
        ],
        "laundry_token": laundry_token or {
            "token_no": "S.R.0001",
            "date": datetime.now().strftime("%d %b %Y"),
            "time": datetime.now().strftime("%I:%M %p"),
            "status": "Active",
            "valid_until": (datetime.now() + timedelta(days=7)).strftime("%d %b %Y"),
        },
        "notifications": [
            "Profile photo updated successfully.",
            "Laundry token generated for the next week.",
            "Complaint updated.",
            "Fee summary refreshed.",
        ],
        "hostel_info": {
            "hostel_name": hostel_name,
            "room_number": room_no,
            "floor": "2nd Floor",
            "warden_name": "Ms. Priya Nair",
            "warden_contact": "+91 98765 43210",
            "emergency_contact": "+91 99999 00000",
        },
    }


def seed_admin_user():
    initialize_database()


@app.before_request
def ensure_database_seeded():
    global database_initialized
    if not database_initialized:
        seed_admin_user()
        database_initialized = True


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True, buffered=True)

            admin = find_admin(cursor, email)
            if admin:
                stored_admin_password = admin.get("password", "")
                if verify_password(password, stored_admin_password) or stored_admin_password == password:
                    session["user_type"] = "admin"
                    session["user_id"] = admin["id"]
                    cursor.close()
                    connection.close()
                    return redirect("/admin-dashboard")

            cursor.execute("SELECT * FROM students WHERE LOWER(email)=%s", (email,))
            student = cursor.fetchone()
            cursor.close()
            connection.close()

            stored_student_password = student.get("password", "") if student else ""
            if student and (
                verify_password(password, stored_student_password)
                or stored_student_password == password
            ):
                session["user_type"] = "student"
                session["user_id"] = student["id"]
                if str(student.get("status", "pending") or "pending").lower() == "approved":
                    return redirect("/student-dashboard")
                return redirect("/student-pending")
        except Exception as exc:
            print("Login failed:", exc)

        return render_template("login.html", error="Invalid email or password"), 401

    return render_template("login.html")


@app.route("/student-login", methods=["GET", "POST"])
def student_login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True, buffered=True)
            cursor.execute("SELECT * FROM students WHERE LOWER(email)=%s", (email,))
            student = cursor.fetchone()
            cursor.close()
            connection.close()

            stored_student_password = student.get("password", "") if student else ""
            if student and (
                verify_password(password, stored_student_password)
                or stored_student_password == password
            ):
                session["user_type"] = "student"
                session["user_id"] = student["id"]
                if str(student.get("status", "pending") or "pending").lower() == "approved":
                    session["show_approval_message"] = True
                    return redirect("/student-approved")
                return redirect("/student-pending")
        except Exception as exc:
            print("Student login failed:", exc)

        return render_template("student_login.html", error="Invalid student email or password"), 401

    return render_template("student_login.html")


@app.route("/admin-login", methods=["GET", "POST"])
def admin_login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True, buffered=True)
            admin = find_admin(cursor, email)
            cursor.close()
            connection.close()

            stored_admin_password = admin.get("password", "") if admin else ""
            if admin and (
                verify_password(password, stored_admin_password)
                or stored_admin_password == password
            ):
                session["user_type"] = "admin"
                session["user_id"] = admin["id"]
                return redirect("/admin-dashboard")
        except Exception as exc:
            print("Admin login failed:", exc)

        return render_template("admin_login.html", error="Invalid admin email or password"), 401

    return render_template("admin_login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        try:
            import mysql.connector

            connection = mysql.connector.connect(
                host="localhost",
                user="root",
                password="",
                database="hostel_tracker",
            )
            cursor = connection.cursor()
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    email VARCHAR(100),
                    phone VARCHAR(20),
                    hostel VARCHAR(100),
                    block VARCHAR(100),
                    room VARCHAR(20),
                    password VARCHAR(255),
                    status VARCHAR(20) NOT NULL DEFAULT 'pending',
                    rent_paid VARCHAR(10) NOT NULL DEFAULT 'no',
                    rent_amount DECIMAL(10,2) NOT NULL DEFAULT 114000.00,
                    rent_paid_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00
                )
                """
            )
            try:
                cursor.execute(
                    """
                    ALTER TABLE students
                    ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'pending'
                    """
                )
            except Exception:
                pass
            try:
                cursor.execute(
                    """
                    ALTER TABLE students
                    ADD COLUMN rent_paid VARCHAR(10) NOT NULL DEFAULT 'no'
                    """
                )
            except Exception:
                pass
            try:
                cursor.execute(
                    """
                    ALTER TABLE students
                    ADD COLUMN rent_amount DECIMAL(10,2) NOT NULL DEFAULT 114000.00
                    """
                )
            except Exception:
                pass
            try:
                cursor.execute(
                    """
                    ALTER TABLE students
                    ADD COLUMN rent_paid_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00
                    """
                )
            except Exception:
                pass
            cursor.execute(
                """
                INSERT INTO students (name, email, phone, hostel, block, room, password, rent_paid, rent_amount, rent_paid_amount)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (
                    request.form.get("name", ""),
                    request.form.get("email", ""),
                    request.form.get("phone", ""),
                    request.form.get("hostel", ""),
                    request.form.get("block", ""),
                    request.form.get("room", ""),
                    hash_password(request.form.get("password", "")),
                    "no",
                    HOSTEL_FEE,
                    "0.00",
                ),
            )
            connection.commit()
            cursor.close()
            connection.close()
            return redirect("/student-login")
        except Exception as exc:
            print("Registration failed:", exc)
            return render_template("registration.html", error="Registration failed. Please try again."), 400

    return render_template("registration.html")


@app.route("/student-pending")
def student_pending():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True, buffered=True)
        cursor.execute("SELECT * FROM students WHERE id=%s", (session.get("user_id"),))
        student = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Student pending page load failed:", exc)
        student = None

    can_access, message = can_access_student_dashboard(student)
    if can_access:
        return redirect("/student-dashboard")

    return render_template("student_pending.html", student=student, message=message)


@app.route("/student-approved")
def student_approved():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True, buffered=True)
        cursor.execute("SELECT * FROM students WHERE id=%s", (session.get("user_id"),))
        student = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Student approved page load failed:", exc)
        student = None

    if not student or str(student.get("status", "pending") or "pending").lower() != "approved":
        return redirect("/student-pending")

    return render_template("student_approved.html", student=student)


@app.route("/student-dashboard")
def student_dashboard():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True, buffered=True)
        cursor.execute("SELECT * FROM students WHERE id=%s", (session.get("user_id"),))
        student = cursor.fetchone()
        if student:
            cursor.execute("SELECT category, subject, description, status, created_at FROM complaints WHERE student_id=%s ORDER BY created_at DESC", (student["id"],))
            complaints = cursor.fetchall()
            cursor.execute("SELECT token_no, token_date, token_time, status, valid_until FROM laundry_tokens WHERE student_id=%s ORDER BY created_at DESC LIMIT 1", (student["id"],))
            laundry_token = cursor.fetchone()
            cursor.execute("SELECT attendance_date, status FROM attendance WHERE student_id=%s ORDER BY id DESC LIMIT 10", (student["id"],))
            attendance_records = cursor.fetchall()
        else:
            complaints = []
            laundry_token = None
            attendance_records = []
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Student dashboard load failed:", exc)
        student = None
        complaints = []
        laundry_token = None
        attendance_records = []

    can_access, message = can_access_student_dashboard(student)
    if not can_access:
        return render_template("student_pending.html", student=student, message=message)

    fee_summary = get_student_fee_summary(student)
    dashboard_context = build_student_dashboard_context(
        student,
        complaints=complaints,
        laundry_token=laundry_token,
        attendance_records=attendance_records,
        fee_summary=fee_summary,
        college_id_url=student.get("college_id_url") if student else "",
    )
    dashboard_context["attendance"] = attendance_records if attendance_records else dashboard_context.get("attendance", [])
    return render_template("student_dashboard.html", student=student, dashboard_context=dashboard_context)


@app.route("/student-complaint", methods=["POST"])
def student_complaint():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO complaints (student_id, category, subject, description, status) VALUES (%s, %s, %s, %s, %s)",
            (
                session.get("user_id"),
                request.form.get("category", "Other"),
                request.form.get("subject", "General issue"),
                request.form.get("description", ""),
                "pending",
            ),
        )
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Complaint submission failed:", exc)

    return redirect("/student-dashboard")


@app.route("/mark-attendance", methods=["POST"])
def mark_attendance():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        today = datetime.now().strftime("%Y-%m-%d")
        cursor.execute("SELECT id FROM attendance WHERE student_id=%s AND attendance_date=%s", (session.get("user_id"), today))
        existing = cursor.fetchone()
        if not existing:
            cursor.execute("INSERT INTO attendance (student_id, attendance_date, status) VALUES (%s, %s, %s)", (session.get("user_id"), today, "present"))
            connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Attendance marking failed:", exc)

    return redirect("/student-dashboard")


@app.route("/edit-profile", methods=["POST"])
def edit_profile():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            UPDATE students
            SET name=%s, phone=%s, hostel=%s, block=%s, room=%s, college=%s, course=%s, department=%s,
                year_semester=%s, guardian_name=%s, guardian_phone=%s, emergency_contact=%s, aadhaar=%s,
                bed_number=%s, blood_group=%s
            WHERE id=%s
            """,
            (
                request.form.get("name", ""),
                request.form.get("phone", ""),
                request.form.get("hostel", ""),
                request.form.get("block", ""),
                request.form.get("room", ""),
                request.form.get("college", ""),
                request.form.get("course", ""),
                request.form.get("department", ""),
                request.form.get("year_semester", ""),
                request.form.get("guardian_name", ""),
                request.form.get("guardian_phone", ""),
                request.form.get("emergency_contact", ""),
                request.form.get("aadhaar", ""),
                request.form.get("bed_number", ""),
                request.form.get("blood_group", ""),
                session.get("user_id"),
            ),
        )
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Profile update failed:", exc)

    return redirect("/student-dashboard")


@app.route("/upload-profile-photo", methods=["POST"])
def upload_profile_photo():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        import mysql.connector

        if 'photo' in request.files:
            photo = request.files['photo']
            if photo.filename:
                upload_dir = os.path.join(BASE_DIR, 'uploads')
                os.makedirs(upload_dir, exist_ok=True)
                filename = secure_filename(photo.filename)
                photo_path = os.path.join(upload_dir, f"student_{session.get('user_id')}_{filename}")
                photo.save(photo_path)
                relative_path = f"/uploads/student_{session.get('user_id')}_{filename}"
                connection = mysql.connector.connect(host='localhost', user='root', password='', database='hostel_tracker')
                cursor = connection.cursor()
                cursor.execute("UPDATE students SET photo_url=%s WHERE id=%s", (relative_path, session.get('user_id')))
                connection.commit()
                cursor.close()
                connection.close()
    except Exception as exc:
        print("Profile photo upload failed:", exc)

    return redirect("/student-dashboard")


@app.route("/upload-college-id", methods=["POST"])
def upload_college_id():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        import mysql.connector

        if 'college_id' in request.files:
            uploaded_file = request.files['college_id']
            if uploaded_file.filename:
                upload_dir = os.path.join(BASE_DIR, 'uploads')
                os.makedirs(upload_dir, exist_ok=True)
                filename = secure_filename(uploaded_file.filename)
                save_path = os.path.join(upload_dir, f"college_id_{session.get('user_id')}_{filename}")
                uploaded_file.save(save_path)
                relative_path = f"/uploads/college_id_{session.get('user_id')}_{filename}"
                connection = mysql.connector.connect(host='localhost', user='root', password='', database='hostel_tracker')
                cursor = connection.cursor()
                cursor.execute("UPDATE students SET college_id_url=%s WHERE id=%s", (relative_path, session.get('user_id')))
                connection.commit()
                cursor.close()
                connection.close()
    except Exception as exc:
        print("College ID upload failed:", exc)

    return redirect("/student-dashboard")


@app.route("/download-fee-receipt")
def download_fee_receipt():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM students WHERE id=%s", (session.get("user_id"),))
        student = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Fee receipt lookup failed:", exc)
        student = None

    fee_summary = get_student_fee_summary(student)
    receipt_lines = [
        "Hostel Fee Receipt",
        f"Student Name: {student.get('name') if student else 'Student'}",
        f"Student ID: {session.get('user_id')}",
        f"Total Fee: ₹{fee_summary['rent_amount']:,.0f}",
        f"Paid Amount: ₹{fee_summary['rent_paid_amount']:,.0f}",
        f"Pending Amount: ₹{fee_summary['pending_amount']:,.0f}",
        f"Status: {fee_summary['status']}",
        f"Generated: {datetime.now().strftime('%d %b %Y %I:%M %p')}",
    ]
    receipt_path = os.path.join(BASE_DIR, 'temp_receipt.pdf')
    write_simple_pdf(receipt_path, receipt_lines)
    return send_file(receipt_path, as_attachment=True, download_name='fee_receipt.pdf')


@app.route("/download-college-id-card")
def download_college_id_card():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM students WHERE id=%s", (session.get("user_id"),))
        student = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("College ID lookup failed:", exc)
        student = None

    if student and student.get("college_id_url"):
        file_path = os.path.join(BASE_DIR, student.get("college_id_url").lstrip("/"))
        if os.path.exists(file_path):
            return send_file(file_path, as_attachment=True, download_name='college_id_card.pdf')

    card_lines = [
        "College ID Card",
        f"Student Name: {student.get('name') if student else 'Student'}",
        f"College: {student.get('college') if student else 'ABC University'}",
        f"Course: {student.get('course') if student else '-'}",
        f"Department: {student.get('department') if student else '-'}",
        f"Student ID: {session.get('user_id')}",
    ]
    receipt_path = os.path.join(BASE_DIR, 'college_id_card.pdf')
    write_simple_pdf(receipt_path, card_lines)
    return send_file(receipt_path, as_attachment=True, download_name='college_id_card.pdf')


@app.route("/generate-laundry-token", methods=["POST"])
def generate_laundry_token():
    if session.get("user_type") != "student":
        return redirect("/student-login")

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        student_id = session.get("user_id")
        token_no = generate_laundry_token_number(cursor)
        now = datetime.now()
        cursor.execute(
            "INSERT INTO laundry_tokens (student_id, token_no, token_date, token_time, status, valid_until) VALUES (%s, %s, %s, %s, %s, %s)",
            (
                student_id,
                token_no,
                now.strftime("%d %b %Y"),
                now.strftime("%I:%M %p"),
                "active",
                (now + timedelta(days=7)).strftime("%Y-%m-%d"),
            ),
        )
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Laundry token generation failed:", exc)

    return redirect("/student-dashboard")


@app.route("/forgot-password", methods=["GET", "POST"])
def forgot_password():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        otp = str(abs(hash(datetime.now().strftime("%Y%m%d%H%M%S"))) % 1000000).zfill(6)
        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True, buffered=True)
            cursor.execute("SELECT id FROM students WHERE LOWER(email)=LOWER(%s)", (email,))
            student = cursor.fetchone()
            cursor.close()
            connection.close()
        except Exception as exc:
            print("Password reset lookup failed:", exc)
            student = None

        if student:
            session["password_reset_email"] = email
            session["password_reset_otp"] = otp
            session["password_reset_time"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            send_otp_email(email, otp)
            return render_template("forgot_password.html", sent=True, email=email)

        return render_template("forgot_password.html", error="No student account found for that email."), 404

    return render_template("forgot_password.html")


@app.route("/reset-password", methods=["POST"])
def reset_password():
    email = request.form.get("email", "").strip().lower()
    otp = request.form.get("otp", "")
    new_password = request.form.get("password", "")
    stored_email = session.get("password_reset_email", "")
    stored_otp = session.get("password_reset_otp", "")

    if email != stored_email or otp != stored_otp:
        return render_template("forgot_password.html", error="Invalid OTP. Please try again."), 400

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("UPDATE students SET password=%s WHERE LOWER(email)=LOWER(%s)", (hash_password(new_password), email))
        connection.commit()
        cursor.close()
        connection.close()
        session.pop("password_reset_email", None)
        session.pop("password_reset_otp", None)
    except Exception as exc:
        print("Password reset failed:", exc)
        return render_template("forgot_password.html", error="Password could not be changed."), 400

    return render_template("forgot_password.html", success="Password changed successfully. You can now sign in.")


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/admin-dashboard")
def admin_dashboard():
    if session.get("user_type") != "admin":
        return redirect("/admin-login")

    search_query = request.args.get("search", "").strip().lower()
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True, buffered=True)
        cursor.execute("SELECT COUNT(*) AS count FROM students")
        student_count = cursor.fetchone()["count"]
        cursor.execute("SELECT COUNT(*) AS count FROM students WHERE status='pending'")
        pending_count = cursor.fetchone()["count"]
        cursor.execute("SELECT COUNT(*) AS count FROM students WHERE status='approved'")
        approved_count = cursor.fetchone()["count"]
        cursor.execute("SELECT COUNT(*) AS count FROM students WHERE status='rejected'")
        rejected_count = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COUNT(*) AS count FROM rooms"
        )
        room_count = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COUNT(DISTINCT CONCAT(hostel, '|', block, '|', room)) AS count FROM students"
        )
        total_rooms = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COUNT(DISTINCT CONCAT(hostel, '|', block, '|', room)) AS count FROM students WHERE status='approved'"
        )
        occupied_rooms = cursor.fetchone()["count"]
        available_rooms = max(total_rooms - occupied_rooms, 0)
        cursor.execute(
            "SELECT COUNT(*) AS count FROM students WHERE status='approved' AND rent_paid='no'"
        )
        pending_rent_payments = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COALESCE(SUM(rent_amount), 0) AS total_expected, COALESCE(SUM(rent_paid_amount), 0) AS total_paid, COALESCE(SUM(GREATEST(rent_amount - rent_paid_amount, 0)), 0) AS total_pending FROM students"
        )
        rent_totals = cursor.fetchone()
        cursor.execute(
            "SELECT COUNT(*) AS count FROM students WHERE rent_paid='yes'"
        )
        fully_paid_students = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COUNT(*) AS count FROM students WHERE rent_paid='no' AND rent_paid_amount > 0"
        )
        partially_paid_students = cursor.fetchone()["count"]
        cursor.execute(
            "SELECT COUNT(*) AS count FROM students WHERE rent_paid='no' AND rent_paid_amount = 0"
        )
        unpaid_students = cursor.fetchone()["count"]
        total_rent_paid = float(rent_totals["total_paid"] or 0)
        total_rent_pending = float(rent_totals["total_pending"] or 0)
        total_expected_fee = float(rent_totals["total_expected"] or 0)
        cursor.execute(
            "SELECT MONTH(created_at) AS month, COUNT(*) AS count FROM students WHERE YEAR(created_at)=YEAR(CURDATE()) GROUP BY MONTH(created_at)"
        )
        raw_monthly_requests = cursor.fetchall()
        month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        monthly_requests = [
            {"label": month_names[row["month"] - 1], "count": row["count"]}
            for row in raw_monthly_requests
        ]
        cursor.execute(
            "SELECT * FROM rooms ORDER BY hostel, block, room"
        )
        rooms = cursor.fetchall()
        cursor.execute(
            "SELECT hostel, block, room, COUNT(*) AS occupants FROM students WHERE status='approved' GROUP BY hostel, block, room ORDER BY occupants DESC"
        )
        occupancy_by_room = cursor.fetchall()
        cursor.execute(
            "SELECT c.id, c.student_id, c.category, c.subject, c.description, c.status, c.created_at, s.name, s.email FROM complaints c JOIN students s ON s.id = c.student_id ORDER BY c.created_at DESC"
        )
        complaints = cursor.fetchall()
        cursor.execute(
            "SELECT l.id, l.student_id, l.token_no, l.token_date, l.token_time, l.status, l.created_at, s.name, s.email FROM laundry_tokens l JOIN students s ON s.id = l.student_id ORDER BY l.created_at DESC"
        )
        laundry_requests = cursor.fetchall()
        student_filter_sql = ""
        params = []
        if search_query:
            student_filter_sql = "WHERE LOWER(CONCAT(IFNULL(name, ''), ' ', IFNULL(email, ''), ' ', IFNULL(phone, ''), ' ', IFNULL(hostel, ''), ' ', IFNULL(block, ''), ' ', IFNULL(room, ''))) LIKE %s"
            params.append(f"%{search_query}%")
        cursor.execute(
            f"SELECT id, name, email, phone, hostel, block, room, status, rent_paid, rent_amount, rent_paid_amount FROM students {student_filter_sql} ORDER BY created_at DESC",
            params,
        )
        students = cursor.fetchall()
        cursor.execute(
            "SELECT id, name, email, phone, hostel, block, room, status FROM students WHERE status='pending' ORDER BY created_at DESC"
        )
        pending_students = cursor.fetchall()
        cursor.execute(
            "SELECT id, name, email, phone, hostel, block, room, status, rent_paid, rent_amount, rent_paid_amount FROM students WHERE status='approved'"
        )
        approved_students = cursor.fetchall()
        room_student_map = {}
        for student in approved_students:
            room_key = f"{student['hostel']}|{student['block']}|{student['room']}"
            room_student_map.setdefault(room_key, []).append(student)
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Admin dashboard load failed:", exc)
        student_count = 0
        pending_count = 0
        approved_count = 0
        rejected_count = 0
        room_count = 0
        occupied_rooms = 0
        total_rooms = 0
        available_rooms = 0
        pending_rent_payments = 0
        total_rent_paid = 0.0
        total_rent_pending = 0.0
        total_expected_fee = 0.0
        fully_paid_students = 0
        partially_paid_students = 0
        unpaid_students = 0
        monthly_requests = []
        rooms = []
        occupancy_by_room = []
        complaints = []
        laundry_requests = []
        pending_students = []
        approved_students = []
        students = []
        room_student_map = {}

    total_rooms = total_rooms if 'total_rooms' in locals() else 0
    available_rooms = available_rooms if 'available_rooms' in locals() else 0
    pending_rent_payments = pending_rent_payments if 'pending_rent_payments' in locals() else 0
    total_rent_paid = total_rent_paid if 'total_rent_paid' in locals() else 0.0
    total_rent_pending = total_rent_pending if 'total_rent_pending' in locals() else 0.0
    total_expected_fee = total_expected_fee if 'total_expected_fee' in locals() else 0.0
    fully_paid_students = fully_paid_students if 'fully_paid_students' in locals() else 0
    partially_paid_students = partially_paid_students if 'partially_paid_students' in locals() else 0
    unpaid_students = unpaid_students if 'unpaid_students' in locals() else 0
    room_count = room_count if 'room_count' in locals() else 0
    search_query = request.args.get("search", "")

    return render_template(
        "admin_dashboard.html",
        student_count=student_count,
        room_count=room_count,
        total_rooms=total_rooms,
        available_rooms=available_rooms,
        occupied_rooms=occupied_rooms,
        pending_count=pending_count,
        approved_count=approved_count,
        rejected_count=rejected_count,
        pending_rent_payments=pending_rent_payments,
        total_rent_paid=total_rent_paid,
        total_rent_pending=total_rent_pending,
        total_expected_fee=total_expected_fee,
        fully_paid_students=fully_paid_students,
        partially_paid_students=partially_paid_students,
        unpaid_students=unpaid_students,
        monthly_requests=monthly_requests,
        rooms=rooms,
        occupancy_by_room=occupancy_by_room,
        complaints=complaints,
        laundry_requests=laundry_requests,
        pending_students=pending_students,
        approved_students=approved_students,
        students=students,
        room_student_map=room_student_map,
        search_query=search_query,
        hostel_fee=HOSTEL_FEE,
    )


@app.route("/admin-action", methods=["POST"])
def admin_action():
    if session.get("user_type") != "admin":
        return redirect("/admin-login")

    student_id = request.form.get("student_id")
    action = request.form.get("action")
    if not student_id or action not in {"approve", "reject", "mark_paid", "record_payment", "update_complaint", "update_laundry"}:
        return redirect("/admin-dashboard")

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        if action in {"approve", "reject"}:
            status = "approved" if action == "approve" else "rejected"
            cursor.execute(
                "UPDATE students SET status=%s WHERE id=%s",
                (status, student_id),
            )
        elif action == "mark_paid":
            cursor.execute(
                "UPDATE students SET rent_paid=%s, rent_paid_amount = rent_amount WHERE id=%s",
                ("yes", student_id),
            )
        elif action == "record_payment":
            amount_str = request.form.get("payment_amount", "0")
            try:
                payment_amount = float(amount_str)
            except ValueError:
                payment_amount = 0.0
            cursor.execute(
                "SELECT rent_amount, rent_paid_amount FROM students WHERE id=%s",
                (student_id,),
            )
            current = cursor.fetchone()
            if current:
                rent_amount = float(current["rent_amount"])
                rent_paid_amount = float(current["rent_paid_amount"])
                new_paid_total = min(rent_amount, rent_paid_amount + payment_amount)
                rent_paid = "yes" if new_paid_total >= rent_amount and rent_amount > 0 else "no"
                cursor.execute(
                    "UPDATE students SET rent_paid_amount=%s, rent_paid=%s WHERE id=%s",
                    (new_paid_total, rent_paid, student_id),
                )
        elif action == "update_complaint":
            complaint_id = request.form.get("complaint_id")
            status = request.form.get("status", "pending")
            if complaint_id:
                cursor.execute(
                    "UPDATE complaints SET status=%s WHERE id=%s",
                    (status, complaint_id),
                )
        elif action == "update_laundry":
            laundry_id = request.form.get("laundry_id")
            status = request.form.get("status", "active")
            if laundry_id:
                cursor.execute(
                    "UPDATE laundry_tokens SET status=%s WHERE id=%s",
                    (status, laundry_id),
                )
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as exc:
        print("Admin action failed:", exc)

    return redirect("/admin-dashboard")


if __name__ == "__main__":
    seed_admin_user()

    host, port, debug = get_server_config()
    app.run(host=host, port=port, debug=debug)