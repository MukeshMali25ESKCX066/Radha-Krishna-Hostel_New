import importlib
import sys
import types
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


class AuthFeatureTests(unittest.TestCase):
    def test_password_hashing_and_verification(self):
        fake_mysql_module = types.ModuleType("mysql")
        fake_connector_module = types.ModuleType("mysql.connector")

        class FakeCursor:
            def execute(self, *args, **kwargs):
                return None

            def close(self):
                return None

        class FakeConnection:
            def cursor(self, dictionary=False):
                return FakeCursor()

            def commit(self):
                return None

            def close(self):
                return None

        def fake_connect(**kwargs):
            return FakeConnection()

        fake_connector_module.connect = fake_connect
        fake_mysql_module.connector = fake_connector_module
        sys.modules["mysql"] = fake_mysql_module
        sys.modules["mysql.connector"] = fake_connector_module

        sys.modules.pop("app", None)
        app_module = importlib.import_module("app")

        hashed = app_module.hash_password("secret123")
        self.assertTrue(app_module.verify_password("secret123", hashed))
        self.assertFalse(app_module.verify_password("wrong", hashed))

    def test_student_dashboard_access_requires_approval(self):
        fake_mysql_module = types.ModuleType("mysql")
        fake_connector_module = types.ModuleType("mysql.connector")

        class FakeCursor:
            def execute(self, *args, **kwargs):
                return None

            def close(self):
                return None

        class FakeConnection:
            def cursor(self, dictionary=False):
                return FakeCursor()

            def commit(self):
                return None

            def close(self):
                return None

        def fake_connect(**kwargs):
            return FakeConnection()

        fake_connector_module.connect = fake_connect
        fake_mysql_module.connector = fake_connector_module
        sys.modules["mysql"] = fake_mysql_module
        sys.modules["mysql.connector"] = fake_connector_module

        sys.modules.pop("app", None)
        app_module = importlib.import_module("app")

        self.assertFalse(app_module.can_access_student_dashboard({"status": "pending"})[0])
        self.assertTrue(app_module.can_access_student_dashboard({"status": "approved"})[0])

    def test_student_dashboard_context_contains_feature_sections(self):
        fake_mysql_module = types.ModuleType("mysql")
        fake_connector_module = types.ModuleType("mysql.connector")

        class FakeCursor:
            def execute(self, *args, **kwargs):
                return None

            def close(self):
                return None

        class FakeConnection:
            def cursor(self, dictionary=False):
                return FakeCursor()

            def commit(self):
                return None

            def close(self):
                return None

        def fake_connect(**kwargs):
            return FakeConnection()

        fake_connector_module.connect = fake_connect
        fake_mysql_module.connector = fake_connector_module
        sys.modules["mysql"] = fake_mysql_module
        sys.modules["mysql.connector"] = fake_connector_module

        sys.modules.pop("app", None)
        app_module = importlib.import_module("app")

        student = {
            "id": 7,
            "name": "Asha",
            "email": "asha@example.com",
            "phone": "1234567890",
            "hostel": "Boys Hostel A",
            "block": "Block B",
            "room": "A-203",
            "college": "ABC University",
            "course": "Computer Science",
            "status": "approved",
        }

        context = app_module.build_student_dashboard_context(student)
        self.assertIn("profile", context)
        self.assertIn("hostel_id_card", context)
        self.assertIn("complaint_categories", context)
        self.assertIn("notifications", context)
        self.assertIn("hostel_info", context)
        self.assertIn("laundry_token", context)
        self.assertIn("fee_receipts", context)
        self.assertIn("attendance", context)
        self.assertIn("profile_photo", context)

    def test_send_otp_email_uses_smtp_configuration(self):
        fake_mysql_module = types.ModuleType("mysql")
        fake_connector_module = types.ModuleType("mysql.connector")

        class FakeCursor:
            def execute(self, *args, **kwargs):
                return None

            def close(self):
                return None

        class FakeConnection:
            def cursor(self, dictionary=False):
                return FakeCursor()

            def commit(self):
                return None

            def close(self):
                return None

        def fake_connect(**kwargs):
            return FakeConnection()

        fake_connector_module.connect = fake_connect
        fake_mysql_module.connector = fake_connector_module
        sys.modules["mysql"] = fake_mysql_module
        sys.modules["mysql.connector"] = fake_connector_module

        sys.modules.pop("app", None)
        app_module = importlib.import_module("app")

        class FakeSMTP:
            def __init__(self, host, port):
                self.host = host
                self.port = port

            def starttls(self):
                return None

            def login(self, username, password):
                self.username = username
                self.password = password

            def send_message(self, message):
                self.message = message

            def __enter__(self):
                return self

            def __exit__(self, exc_type, exc, tb):
                return False

        import os
        os.environ["SMTP_HOST"] = "smtp.example.com"
        os.environ["SMTP_PORT"] = "587"
        os.environ["SMTP_USERNAME"] = "hostel@example.com"
        os.environ["SMTP_PASSWORD"] = "secret"

        original_smtplib = sys.modules.get("smtplib")
        sys.modules["smtplib"] = types.SimpleNamespace(SMTP=FakeSMTP)
        try:
            sent = app_module.send_otp_email("student@example.com", "123456")
        finally:
            if original_smtplib is None:
                sys.modules.pop("smtplib", None)
            else:
                sys.modules["smtplib"] = original_smtplib

        self.assertTrue(sent)


if __name__ == "__main__":
    unittest.main()
