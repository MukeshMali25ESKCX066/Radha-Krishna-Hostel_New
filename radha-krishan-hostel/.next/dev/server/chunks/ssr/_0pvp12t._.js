module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const fallbackFloors = [
    {
        name: 'Basement',
        rooms: [
            'B-01',
            'B-02',
            'B-03',
            'B-04',
            'B-05',
            'B-06',
            'B-07'
        ].map((room)=>({
                room,
                capacity: 1,
                occupants: 0,
                status: 'available'
            }))
    },
    {
        name: '1st Floor',
        rooms: [
            '101',
            '102',
            '103',
            '104',
            '105',
            '106',
            '107',
            '108'
        ].map((room)=>({
                room,
                capacity: 1,
                occupants: 0,
                status: 'available'
            }))
    },
    {
        name: '2nd Floor',
        rooms: [
            '201',
            '202',
            '203',
            '204',
            '205',
            '206',
            '207',
            '208'
        ].map((room)=>({
                room,
                capacity: 1,
                occupants: 0,
                status: 'available'
            }))
    },
    {
        name: '3rd Floor',
        rooms: [
            '301',
            '302',
            '303',
            '304',
            '305',
            '306',
            '307',
            '308'
        ].map((room)=>({
                room,
                capacity: 1,
                occupants: 0,
                status: 'available'
            }))
    }
];
const facilities = [
    [
        'Wi-Fi',
        'Stay connected with reliable internet access.'
    ],
    [
        'Safe & Secure',
        'A comfortable environment for students and parents.'
    ],
    [
        'Power Backup',
        'Backup power for essential services.'
    ],
    [
        '24×7 Water',
        'Regular water availability for everyday needs.'
    ],
    [
        'Clean Environment',
        'Clean and well-maintained surroundings.'
    ],
    [
        'Study Friendly',
        'A peaceful environment suitable for studying.'
    ],
    [
        'Parking',
        'Convenient parking facility.'
    ],
    [
        'Clean Bathrooms',
        'Well-maintained bathroom facilities.'
    ]
];
const galleryImages = [
    {
        src: '/images/IMG_5093.jpg',
        alt: 'Radha Krishan Hostel photo 1'
    },
    {
        src: '/images/IMG_5246.jpg',
        alt: 'Radha Krishan Hostel photo 2'
    },
    {
        src: '/images/IMG_5249.jpg',
        alt: 'Radha Krishan Hostel photo 3'
    },
    {
        src: '/images/IMG_5253.jpg',
        alt: 'Radha Krishan Hostel photo 4'
    },
    {
        src: '/images/Screenshot 2025-03-07 122042.png',
        alt: 'Radha Krishan Hostel facilities screenshot'
    },
    {
        src: '/images/WhatsApp Image 2026-09-05 at 10.11.38.jpeg',
        alt: 'Radha Krishan Hostel photo from WhatsApp'
    },
    {
        src: '/images/WhatsApp Image 2026-09-05 at 10.11.39.jpeg',
        alt: 'Radha Krishan Hostel photo from WhatsApp'
    },
    {
        src: '/images/IMG_5091.jpg',
        alt: 'Radha Krishan Hostel photo 8'
    },
    {
        src: '/images/IMG_5092.jpg',
        alt: 'Radha Krishan Hostel photo 9'
    }
];
const mapsUrl = 'https://www.google.com/maps/@26.8248812,75.869886,14.95z?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D';
function Home() {
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fallbackFloors);
    const [selectedFloor, setSelectedFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Basement');
    const [galleryIndex, setGalleryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const whatsapp = '917427824942';
    const message = encodeURIComponent('Hello, I would like to know about room availability at Radha Krishan Hostel.');
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sliderTimer = setInterval(()=>{
            setGalleryIndex((current)=>(current + 1) % galleryImages.length);
        }, 3500);
        return ()=>clearInterval(sliderTimer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchRooms = ()=>{
            fetch('/api/rooms').then((response)=>{
                if (!response.ok) throw new Error('Room API unavailable');
                return response.json();
            }).then(({ rooms })=>{
                const grouped = fallbackFloors.map((floor)=>({
                        name: floor.name,
                        rooms: []
                    }));
                rooms.forEach((room)=>{
                    const floor = grouped.find((item)=>item.name === room.block);
                    if (floor) floor.rooms.push(room);
                });
                setFloors(grouped);
                setSelectedFloor((current)=>current && grouped.some((floor)=>floor.name === current) ? current : grouped[0]?.name || 'Basement');
            }).catch(()=>setFloors(fallbackFloors));
        };
        fetchRooms();
        const intervalId = setInterval(fetchRooms, 15000);
        const handleFocus = ()=>fetchRooms();
        window.addEventListener('focus', handleFocus);
        return ()=>{
            clearInterval(intervalId);
            window.removeEventListener('focus', handleFocus);
        };
    }, []);
    const totalRooms = floors.reduce((count, floor)=>count + floor.rooms.length, 0);
    const occupiedRooms = floors.reduce((count, floor)=>count + floor.rooms.filter((room)=>room.occupants >= room.capacity || room.status !== 'available').length, 0);
    const availableRooms = Math.max(totalRooms - occupiedRooms, 0);
    const totalSeats = floors.reduce((count, floor)=>count + floor.rooms.reduce((sum, room)=>sum + (Number(room.capacity) || 0), 0), 0);
    const occupiedSeats = floors.reduce((count, floor)=>count + floor.rooms.reduce((sum, room)=>sum + Math.min(Number(room.occupants) || 0, Number(room.capacity) || 0), 0), 0);
    const availableSeats = Math.max(totalSeats - occupiedSeats, 0);
    const selected = floors.find((floor)=>floor.name === selectedFloor) || floors[0];
    const currentGalleryImage = galleryImages[galleryIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "logo",
                            href: "#home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Radha Krishan Hostel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 80,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "राधा कृष्ण हॉस्टल"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 80,
                                        columnNumber: 100
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 80,
                                columnNumber: 67
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 80,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: [
                                'Home',
                                'Rooms',
                                'Seats',
                                'Availability',
                                'Floor Plan',
                                'Facilities',
                                'Gallery',
                                'Location',
                                'Contact'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${item.toLowerCase()}`,
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 80,
                                    columnNumber: 268
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 80,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portal-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/student-login",
                                    children: "Student Login"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 80,
                                    columnNumber: 362
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/register",
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 80,
                                    columnNumber: 404
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/admin-login",
                                    children: "Admin Login"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 80,
                                    columnNumber: 436
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 80,
                            columnNumber: 332
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "wa-nav",
                            href: whatsappUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 80,
                            columnNumber: 480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 80,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 80,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shade"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 81,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "STUDENT & PARENT FRIENDLY HOSTEL"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 81,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Radha Krishan Hostel"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 81,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Your comfortable home away from home in Jaipur — a clean, secure and student-friendly stay with easy room availability and trusted support."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 81,
                                columnNumber: 169
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn primary",
                                        href: "#rooms",
                                        children: "View Rooms →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 81,
                                        columnNumber: 320
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn secondary",
                                        href: "/student-login",
                                        children: "Student Login"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 81,
                                        columnNumber: 377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 81,
                                columnNumber: 315
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "📍 Ramnagariya, Jaipur, Rajasthan"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 81,
                                columnNumber: 451
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 81,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 81,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "WELCOME TO RADHA KRISHAN HOSTEL"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 82,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "A Comfortable Place for Students"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 82,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "A clean, comfortable and study-friendly living environment while giving parents confidence and clear hostel information."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 82,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cards",
                        children: [
                            [
                                'For Students',
                                'Comfortable rooms, useful facilities and a peaceful environment.'
                            ],
                            [
                                'For Parents',
                                'Clear room availability and easy WhatsApp communication.'
                            ],
                            [
                                'Jaipur Location',
                                'Ramnagariya, Jaipur, Rajasthan 303012.'
                            ]
                        ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: card[0]
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 82,
                                        columnNumber: 560
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: card[1]
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 82,
                                        columnNumber: 578
                                    }, this)
                                ]
                            }, card[0], true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 82,
                                columnNumber: 537
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 82,
                        columnNumber: 272
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 82,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portal",
                className: "section portal-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "HOSTEL ROOM TRACKER"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Manage Your Hostel Stay"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "desc",
                                children: "The same home page also connects you to room requests, student services, and hostel administration."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 83,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portal-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/student-login",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Student Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 339
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Login to view your room request, attendance, fees, complaints, and laundry services."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 370
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Student Login →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 467
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 290
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/register",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "New Student"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 537
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Submit your details and request a room at Radha Krishan Hostel."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 565
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Register Now →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 641
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 493
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/admin-login",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Admin Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 713
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Review student requests and manage rooms from the administration dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 742
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Admin Login →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 830
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 83,
                                columnNumber: 666
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 83,
                        columnNumber: 261
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 83,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "availability",
                className: "section beige",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "ROOM AVAILABILITY"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Check Room Availability"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Live room status and capacity managed by the hostel administration."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: totalRooms
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Total Rooms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 274
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "green",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: availableRooms
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Available Rooms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 370
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 310
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "red",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: occupiedRooms
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 435
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Full / Unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 467
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 410
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: totalSeats
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 519
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Total Seats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 548
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 510
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "green",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: availableSeats
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 611
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Open Seats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 644
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 584
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "red",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: occupiedSeats
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 704
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Booked Seats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 736
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 679
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floor-cards",
                        children: floors.map((floor)=>{
                            const full = floor.rooms.filter((room)=>room.occupants >= room.capacity || room.status !== 'available').length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: floor.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 985
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    floor.rooms.length,
                                                    " Rooms"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 1006
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 980
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            style: {
                                                width: `${floor.rooms.length ? full / floor.rooms.length * 100 : 0}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 84,
                                            columnNumber: 1074
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 1053
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "🟢 ",
                                            floor.rooms.length - full,
                                            " Available   🔴 ",
                                            full,
                                            " Full / Unavailable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 1167
                                    }, this)
                                ]
                            }, floor.name, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 954
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 779
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 84,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "rooms",
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "OUR ROOMS"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 85,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Find Your Room"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 85,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Select a floor to view room capacity and availability."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 85,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabs",
                        children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: selected.name === floor.name ? 'active' : '',
                                onClick: ()=>setSelectedFloor(floor.name),
                                children: floor.name
                            }, floor.name, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 85,
                                columnNumber: 215
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 85,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rooms",
                        children: selected.rooms.map((room)=>{
                            const isAvailable = room.status === 'available' && room.occupants < room.capacity;
                            const remaining = Math.max(room.capacity - room.occupants, 0);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: isAvailable ? 'room free' : 'room occ',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: room.room
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 85,
                                        columnNumber: 655
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAvailable ? '🟢 Available' : '🔴 Full / Unavailable'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 85,
                                        columnNumber: 683
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            remaining,
                                            " of ",
                                            room.capacity,
                                            " beds available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 85,
                                        columnNumber: 752
                                    }, this)
                                ]
                            }, room.room, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 85,
                                columnNumber: 579
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 85,
                        columnNumber: 371
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 85,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "floor-plan",
                className: "section dark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "FLOOR PLAN"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 86,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Explore Our Floors"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 86,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Room capacity and approved occupancy from the hostel management system."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 86,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabs",
                        children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: selected.name === floor.name ? 'active' : '',
                                onClick: ()=>setSelectedFloor(floor.name),
                                children: floor.name
                            }, floor.name, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 86,
                                columnNumber: 247
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 86,
                        columnNumber: 202
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: selected.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 86,
                                columnNumber: 425
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plan-grid",
                                children: selected.rooms.map((room)=>{
                                    const isAvailable = room.status === 'available' && room.occupants < room.capacity;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isAvailable ? 'p-room p-green' : 'p-room p-red',
                                        children: [
                                            "🚪",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: room.room
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 681
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    room.occupants,
                                                    "/",
                                                    room.capacity,
                                                    " occupied"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 699
                                            }, this)
                                        ]
                                    }, room.room, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 86,
                                        columnNumber: 598
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 86,
                                columnNumber: 449
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 86,
                        columnNumber: 403
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 86,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "facilities",
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "HOSTEL FACILITIES"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 87,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Comfortable Everyday Living"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 87,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Everything you need for a peaceful and practical stay."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 87,
                        columnNumber: 125
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "facility-grid",
                        children: facilities.map((facility)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: facility[0]
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 87,
                                        columnNumber: 291
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: facility[1]
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 87,
                                        columnNumber: 313
                                    }, this)
                                ]
                            }, facility[0], true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 87,
                                columnNumber: 264
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 87,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 87,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery",
                className: "section gallery-slider-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gallery-slider",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gallery-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "HOSTEL GALLERY"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 129
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Take a Look Around"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 158
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "desc",
                                    children: "A comfortable, clean and welcoming place to stay in Jaipur."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 185
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 88,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-stage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "slider-btn",
                                    onClick: ()=>setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length),
                                    "aria-label": "Previous image",
                                    children: "‹"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 304
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slider-frame",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: currentGalleryImage.src,
                                            alt: currentGalleryImage.alt,
                                            loading: "eager"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 88,
                                            columnNumber: 501
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "slider-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    galleryIndex + 1,
                                                    " / ",
                                                    galleryImages.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 88,
                                                columnNumber: 616
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 88,
                                            columnNumber: 584
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 471
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "slider-btn",
                                    onClick: ()=>setGalleryIndex((galleryIndex + 1) % galleryImages.length),
                                    "aria-label": "Next image",
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 684
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 88,
                            columnNumber: 274
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gallery-thumb-row",
                            children: galleryImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: index === galleryIndex ? 'thumb active' : 'thumb',
                                    onClick: ()=>setGalleryIndex(index),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image.src,
                                        alt: image.alt
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 88,
                                        columnNumber: 1027
                                    }, this)
                                }, image.src, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 902
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 88,
                            columnNumber: 830
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 88,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 88,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "location",
                className: "section location",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "OUR LOCATION"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 89,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Find Us in Ramnagariya"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 89,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "desc",
                                children: "Radha Krishan Hostel is conveniently located in Ramnagariya, Jaipur."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 89,
                                columnNumber: 120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn primary",
                                href: mapsUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Open in Google Maps ↗"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 89,
                                columnNumber: 212
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 89,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "Radha Krishan Hostel location map",
                        src: "https://www.google.com/maps?q=26.8248812,75.869886&z=15&output=embed",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 89,
                        columnNumber: 318
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 89,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "CONTACT US"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Have Questions?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Contact Radha Krishan Hostel directly through WhatsApp."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Radha Krishan Hostel"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 207
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "📍 RVH8+JM9, Unnamed Road, Ramnagariya, Jaipur, Rajasthan 303012"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "📞 +91 7427 824 942"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 307
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✉️ radhakrishnahostel@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 333
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "big-wa",
                        href: whatsappUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "🟢 Chat With Us on WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 377
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 90,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Radha Krishan Hostel"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "राधा कृष्ण हॉस्टल · Ramnagariya, Jaipur · © 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 91,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 91,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "float-wa",
                href: whatsappUrl,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Chat with Radha Krishan Hostel on WhatsApp",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.5-5.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.7.8c-.1.1-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.8c0 1.1.8 2.1.9 2.3.1.2 1.5 2.4 3.7 3.4 1.4.6 1.9.7 2.6.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.3Z"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 91,
                        columnNumber: 286
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 91,
                    columnNumber: 242
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 91,
                columnNumber: 110
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0pvp12t._.js.map