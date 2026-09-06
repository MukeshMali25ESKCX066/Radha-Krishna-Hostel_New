'use client';
import { useEffect, useState } from 'react';

const fallbackFloors = [
  { name: 'Basement', rooms: ['B-01', 'B-02', 'B-03', 'B-04', 'B-05', 'B-06', 'B-07'].map((room) => ({ room, capacity: 1, occupants: 0, status: 'available' })) },
  { name: '1st Floor', rooms: ['101', '102', '103', '104', '105', '106', '107', '108'].map((room) => ({ room, capacity: 1, occupants: 0, status: 'available' })) },
  { name: '2nd Floor', rooms: ['201', '202', '203', '204', '205', '206', '207', '208'].map((room) => ({ room, capacity: 1, occupants: 0, status: 'available' })) },
  { name: '3rd Floor', rooms: ['301', '302', '303', '304', '305', '306', '307', '308'].map((room) => ({ room, capacity: 1, occupants: 0, status: 'available' })) },
];
const facilities = [['Wi-Fi', 'Stay connected with reliable internet access.'], ['Safe & Secure', 'A comfortable environment for students and parents.'], ['Power Backup', 'Backup power for essential services.'], ['24×7 Water', 'Regular water availability for everyday needs.'], ['Clean Environment', 'Clean and well-maintained surroundings.'], ['Study Friendly', 'A peaceful environment suitable for studying.'], ['Parking', 'Convenient parking facility.'], ['Clean Bathrooms', 'Well-maintained bathroom facilities.']];
const galleryImages = [
  { src: '/images/IMG_5093.jpg', alt: 'Radha Krishan Hostel photo 1' },
  { src: '/images/IMG_5246.jpg', alt: 'Radha Krishan Hostel photo 2' },
  { src: '/images/IMG_5249.jpg', alt: 'Radha Krishan Hostel photo 3' },
  { src: '/images/IMG_5253.jpg', alt: 'Radha Krishan Hostel photo 4' },
  { src: '/images/Screenshot 2025-03-07 122042.png', alt: 'Radha Krishan Hostel facilities screenshot' },
  { src: '/images/WhatsApp Image 2026-09-05 at 10.11.38.jpeg', alt: 'Radha Krishan Hostel photo from WhatsApp' },
  { src: '/images/WhatsApp Image 2026-09-05 at 10.11.39.jpeg', alt: 'Radha Krishan Hostel photo from WhatsApp' },
  { src: '/images/IMG_5091.jpg', alt: 'Radha Krishan Hostel photo 8' },
  { src: '/images/IMG_5092.jpg', alt: 'Radha Krishan Hostel photo 9' },
];
const mapsUrl = 'https://www.google.com/maps/@26.8248812,75.869886,14.95z?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D';

export default function Home() {
  const [floors, setFloors] = useState(fallbackFloors);
  const [selectedFloor, setSelectedFloor] = useState('Basement');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const whatsapp = '917427824942';
  const message = encodeURIComponent('Hello, I would like to know about room availability at Radha Krishan Hostel.');
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setGalleryIndex((current) => (current + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(sliderTimer);
  }, []);

  useEffect(() => {
    const fetchRooms = () => {
      fetch('/api/rooms')
        .then((response) => {
          if (!response.ok) throw new Error('Room API unavailable');
          return response.json();
        })
        .then(({ rooms }) => {
          const grouped = fallbackFloors.map((floor) => ({ name: floor.name, rooms: [] }));
          rooms.forEach((room) => {
            const floor = grouped.find((item) => item.name === room.block);
            if (floor) floor.rooms.push(room);
          });
          setFloors(grouped);
          setSelectedFloor((current) => current && grouped.some((floor) => floor.name === current) ? current : grouped[0]?.name || 'Basement');
        })
        .catch(() => setFloors(fallbackFloors));
    };

    fetchRooms();
    const intervalId = setInterval(fetchRooms, 15000);
    const handleFocus = () => fetchRooms();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const totalRooms = floors.reduce((count, floor) => count + floor.rooms.length, 0);
  const occupiedRooms = floors.reduce((count, floor) => count + floor.rooms.filter((room) => room.occupants >= room.capacity || room.status !== 'available').length, 0);
  const availableRooms = Math.max(totalRooms - occupiedRooms, 0);
  const totalSeats = floors.reduce((count, floor) => count + floor.rooms.reduce((sum, room) => sum + (Number(room.capacity) || 0), 0), 0);
  const occupiedSeats = floors.reduce((count, floor) => count + floor.rooms.reduce((sum, room) => sum + Math.min(Number(room.occupants) || 0, Number(room.capacity) || 0), 0), 0);
  const availableSeats = Math.max(totalSeats - occupiedSeats, 0);
  const selected = floors.find((floor) => floor.name === selectedFloor) || floors[0];
  const currentGalleryImage = galleryImages[galleryIndex];

  return <main>
    <header><div className="nav"><a className="logo" href="#home"><span><b>Radha Krishan Hostel</b><small>राधा कृष्ण हॉस्टल</small></span></a><nav>{['Home', 'Rooms', 'Seats', 'Availability', 'Floor Plan', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><div className="portal-links"><a href="/student-login">Student Login</a><a href="/register">Register</a><a href="/admin-login">Admin Login</a></div><a className="wa-nav" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></header>
    <section id="home" className="hero"><div className="shade" /><div className="hero-text"><label>STUDENT & PARENT FRIENDLY HOSTEL</label><h1>Radha Krishan Hostel</h1><p>Your comfortable home away from home in Jaipur — a clean, secure and student-friendly stay with easy room availability and trusted support.</p><div><a className="btn primary" href="#rooms">View Rooms →</a><a className="btn secondary" href="/student-login">Student Login</a></div><small>📍 Ramnagariya, Jaipur, Rajasthan</small></div></section>
    <section className="section center"><label>WELCOME TO RADHA KRISHAN HOSTEL</label><h2>A Comfortable Place for Students</h2><p className="desc">A clean, comfortable and study-friendly living environment while giving parents confidence and clear hostel information.</p><div className="cards">{[['For Students', 'Comfortable rooms, useful facilities and a peaceful environment.'], ['For Parents', 'Clear room availability and easy WhatsApp communication.'], ['Jaipur Location', 'Ramnagariya, Jaipur, Rajasthan 303012.']].map((card) => <article key={card[0]}><h3>{card[0]}</h3><p>{card[1]}</p></article>)}</div></section>
    <section id="portal" className="section portal-section"><div><label>HOSTEL ROOM TRACKER</label><h2>Manage Your Hostel Stay</h2><p className="desc">The same home page also connects you to room requests, student services, and hostel administration.</p></div><div className="portal-grid"><a className="portal-card" href="/student-login"><strong>Student Portal</strong><span>Login to view your room request, attendance, fees, complaints, and laundry services.</span><b>Student Login →</b></a><a className="portal-card" href="/register"><strong>New Student</strong><span>Submit your details and request a room at Radha Krishan Hostel.</span><b>Register Now →</b></a><a className="portal-card" href="/admin-login"><strong>Admin Portal</strong><span>Review student requests and manage rooms from the administration dashboard.</span><b>Admin Login →</b></a></div></section>
    <section id="availability" className="section beige"><label>ROOM AVAILABILITY</label><h2>Check Room Availability</h2><p className="desc">Live room status and capacity managed by the hostel administration.</p><div className="stats"><article><strong>{totalRooms}</strong><small>Total Rooms</small></article><article className="green"><strong>{availableRooms}</strong><small>Available Rooms</small></article><article className="red"><strong>{occupiedRooms}</strong><small>Full / Unavailable</small></article><article><strong>{totalSeats}</strong><small>Total Seats</small></article><article className="green"><strong>{availableSeats}</strong><small>Open Seats</small></article><article className="red"><strong>{occupiedSeats}</strong><small>Booked Seats</small></article></div><div className="floor-cards">{floors.map((floor) => { const full = floor.rooms.filter((room) => room.occupants >= room.capacity || room.status !== 'available').length; return <article key={floor.name}><div><h3>{floor.name}</h3><small>{floor.rooms.length} Rooms</small></div><div className="bar"><i style={{ width: `${floor.rooms.length ? full / floor.rooms.length * 100 : 0}%` }} /></div><p>🟢 {floor.rooms.length - full} Available &nbsp; 🔴 {full} Full / Unavailable</p></article>; })}</div></section>
    <section id="rooms" className="section"><label>OUR ROOMS</label><h2>Find Your Room</h2><p className="desc">Select a floor to view room capacity and availability.</p><div className="tabs">{floors.map((floor) => <button className={selected.name === floor.name ? 'active' : ''} onClick={() => setSelectedFloor(floor.name)} key={floor.name}>{floor.name}</button>)}</div><div className="rooms">{selected.rooms.map((room) => { const isAvailable = room.status === 'available' && room.occupants < room.capacity; const remaining = Math.max(room.capacity - room.occupants, 0); return <article className={isAvailable ? 'room free' : 'room occ'} key={room.room}><strong>{room.room}</strong><span>{isAvailable ? '🟢 Available' : '🔴 Full / Unavailable'}</span><small>{remaining} of {room.capacity} beds available</small></article>; })}</div></section>
    <section id="floor-plan" className="section dark"><label>FLOOR PLAN</label><h2>Explore Our Floors</h2><p className="desc">Room capacity and approved occupancy from the hostel management system.</p><div className="tabs">{floors.map((floor) => <button className={selected.name === floor.name ? 'active' : ''} onClick={() => setSelectedFloor(floor.name)} key={floor.name}>{floor.name}</button>)}</div><div className="plan"><h3>{selected.name}</h3><div className="plan-grid">{selected.rooms.map((room) => { const isAvailable = room.status === 'available' && room.occupants < room.capacity; return <div className={isAvailable ? 'p-room p-green' : 'p-room p-red'} key={room.room}>🚪<b>{room.room}</b><small>{room.occupants}/{room.capacity} occupied</small></div>; })}</div></div></section>
    <section id="facilities" className="section center"><label>HOSTEL FACILITIES</label><h2>Comfortable Everyday Living</h2><p className="desc">Everything you need for a peaceful and practical stay.</p><div className="facility-grid">{facilities.map((facility) => <article key={facility[0]}><h3>{facility[0]}</h3><p>{facility[1]}</p></article>)}</div></section>
    <section id="gallery" className="section gallery-slider-wrap"><div className="gallery-slider"><div className="gallery-copy"><label>HOSTEL GALLERY</label><h2>Take a Look Around</h2><p className="desc">A comfortable, clean and welcoming place to stay in Jaipur.</p></div><div className="slider-stage"><button className="slider-btn" onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)} aria-label="Previous image">‹</button><div className="slider-frame"><img src={currentGalleryImage.src} alt={currentGalleryImage.alt} loading="eager" /><div className="slider-overlay"><span>{galleryIndex + 1} / {galleryImages.length}</span></div></div><button className="slider-btn" onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)} aria-label="Next image">›</button></div><div className="gallery-thumb-row">{galleryImages.map((image, index) => <button key={image.src} className={index === galleryIndex ? 'thumb active' : 'thumb'} onClick={() => setGalleryIndex(index)}><img src={image.src} alt={image.alt} /></button>)}</div></div></section>
    <section id="location" className="section location"><div><label>OUR LOCATION</label><h2>Find Us in Ramnagariya</h2><p className="desc">Radha Krishan Hostel is conveniently located in Ramnagariya, Jaipur.</p><a className="btn primary" href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div><iframe title="Radha Krishan Hostel location map" src="https://www.google.com/maps?q=26.8248812,75.869886&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
    <section id="contact" className="section center"><label>CONTACT US</label><h2>Have Questions?</h2><p className="desc">Contact Radha Krishan Hostel directly through WhatsApp.</p><div className="contact"><h3>Radha Krishan Hostel</h3><p>📍 RVH8+JM9, Unnamed Road, Ramnagariya, Jaipur, Rajasthan 303012</p><p>📞 +91 7427 824 942</p><p>✉️ radhakrishnahostel@gmail.com</p></div><a className="big-wa" href={whatsappUrl} target="_blank" rel="noreferrer">🟢 Chat With Us on WhatsApp</a></section>
    <footer><b>Radha Krishan Hostel</b><span>राधा कृष्ण हॉस्टल · Ramnagariya, Jaipur · © 2026</span></footer><a className="float-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Radha Krishan Hostel on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.5-5.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.7.8c-.1.1-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.8c0 1.1.8 2.1.9 2.3.1.2 1.5 2.4 3.7 3.4 1.4.6 1.9.7 2.6.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.3Z" /></svg></a>
  </main>;
}