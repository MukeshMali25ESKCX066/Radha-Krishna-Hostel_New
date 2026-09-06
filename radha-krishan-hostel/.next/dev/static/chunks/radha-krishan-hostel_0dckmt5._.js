(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/radha-krishan-hostel/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const mapsUrl = 'https://www.google.com/maps/@26.8248812,75.869886,14.95z?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D';
function Home() {
    _s();
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fallbackFloors);
    const [selectedFloor, setSelectedFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Basement');
    const whatsapp = '917427824942';
    const message = encodeURIComponent('Hello, I would like to know about room availability at Radha Krishan Hostel.');
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetch('/api/rooms').then({
                "Home.useEffect": (response)=>{
                    if (!response.ok) throw new Error('Room API unavailable');
                    return response.json();
                }
            }["Home.useEffect"]).then({
                "Home.useEffect": ({ rooms })=>{
                    const grouped = fallbackFloors.map({
                        "Home.useEffect.grouped": (floor)=>({
                                name: floor.name,
                                rooms: []
                            })
                    }["Home.useEffect.grouped"]);
                    rooms.forEach({
                        "Home.useEffect": (room)=>{
                            const floor = grouped.find({
                                "Home.useEffect.floor": (item)=>item.name === room.block
                            }["Home.useEffect.floor"]);
                            if (floor) floor.rooms.push(room);
                        }
                    }["Home.useEffect"]);
                    setFloors(grouped);
                    setSelectedFloor(grouped[0]?.name || 'Basement');
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": ()=>setFloors(fallbackFloors)
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    const totalRooms = floors.reduce((count, floor)=>count + floor.rooms.length, 0);
    const occupiedRooms = floors.reduce((count, floor)=>count + floor.rooms.filter((room)=>room.occupants >= room.capacity || room.status !== 'available').length, 0);
    const availableRooms = Math.max(totalRooms - occupiedRooms, 0);
    const selected = floors.find((floor)=>floor.name === selectedFloor) || floors[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "logo",
                            href: "#home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/hostel-logo.png",
                                    alt: "Radha Krishan Hostel logo"
                                }, void 0, false, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 67
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Radha Krishan Hostel"
                                        }, void 0, false, {
                                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                                            lineNumber: 44,
                                            columnNumber: 142
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "राधा कृष्ण हॉस्टल"
                                        }, void 0, false, {
                                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                                            lineNumber: 44,
                                            columnNumber: 169
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 136
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                            lineNumber: 44,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: [
                                'Home',
                                'Rooms',
                                'Availability',
                                'Floor Plan',
                                'Facilities',
                                'Gallery',
                                'Location',
                                'Contact'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${item.toLowerCase().replace(' ', '-')}`,
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 328
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                            lineNumber: 44,
                            columnNumber: 212
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portal-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/student-login",
                                    children: "Student Login"
                                }, void 0, false, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 440
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/register",
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 482
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/admin-login",
                                    children: "Admin Login"
                                }, void 0, false, {
                                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                                    lineNumber: 44,
                                    columnNumber: 514
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                            lineNumber: 44,
                            columnNumber: 410
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "wa-nav",
                            href: whatsappUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                            lineNumber: 44,
                            columnNumber: 558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                    lineNumber: 44,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shade"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 45,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "STUDENT & PARENT FRIENDLY HOSTEL"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 45,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "Your Comfortable",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 45,
                                        columnNumber: 160
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Home Away From Home"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 45,
                                        columnNumber: 166
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 45,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Welcome to Radha Krishan Hostel, Jaipur — a comfortable, convenient and student-friendly place to stay."
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 45,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn primary",
                                        href: "#rooms",
                                        children: "View Rooms →"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 45,
                                        columnNumber: 314
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn secondary",
                                        href: "/student-login",
                                        children: "Student Login"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 45,
                                        columnNumber: 371
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 45,
                                columnNumber: 309
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "📍 Ramnagariya, Jaipur, Rajasthan"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 45,
                                columnNumber: 445
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 45,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "WELCOME TO RADHA KRISHAN HOSTEL"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 46,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "A Comfortable Place for Students"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 46,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "A clean, comfortable and study-friendly living environment while giving parents confidence and clear hostel information."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 46,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: card[0]
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 46,
                                        columnNumber: 560
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: card[1]
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 46,
                                        columnNumber: 578
                                    }, this)
                                ]
                            }, card[0], true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 46,
                                columnNumber: 537
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 46,
                        columnNumber: 272
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 46,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portal",
                className: "section portal-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "HOSTEL ROOM TRACKER"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Manage Your Hostel Stay"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "desc",
                                children: "The same home page also connects you to room requests, student services, and hostel administration."
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 47,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portal-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/student-login",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Student Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 339
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Login to view your room request, attendance, fees, complaints, and laundry services."
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 370
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Student Login →"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 467
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 290
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/register",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "New Student"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 537
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Submit your details and request a room at Radha Krishan Hostel."
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 565
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Register Now →"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 641
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 493
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "portal-card",
                                href: "/admin-login",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Admin Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 713
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Review student requests and manage rooms from the administration dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 742
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Admin Login →"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 47,
                                        columnNumber: 830
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 47,
                                columnNumber: 666
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 47,
                        columnNumber: 261
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "availability",
                className: "section beige",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "ROOM AVAILABILITY"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 48,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Check Room Availability"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 48,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Live room status and capacity managed by the hostel administration."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 48,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: totalRooms
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Total Rooms"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 274
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 48,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "green",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: availableRooms
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Available Rooms"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 370
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 48,
                                columnNumber: 310
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "red",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: occupiedRooms
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 435
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Full / Unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 467
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 48,
                                columnNumber: 410
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 48,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floor-cards",
                        children: floors.map((floor)=>{
                            const full = floor.rooms.filter((room)=>room.occupants >= room.capacity || room.status !== 'available').length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: floor.name
                                            }, void 0, false, {
                                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                                lineNumber: 48,
                                                columnNumber: 722
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    floor.rooms.length,
                                                    " Rooms"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                                lineNumber: 48,
                                                columnNumber: 743
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 717
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            style: {
                                                width: `${floor.rooms.length ? full / floor.rooms.length * 100 : 0}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/radha-krishan-hostel/app/page.js",
                                            lineNumber: 48,
                                            columnNumber: 811
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 790
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "🟢 ",
                                            floor.rooms.length - full,
                                            " Available   🔴 ",
                                            full,
                                            " Full / Unavailable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 48,
                                        columnNumber: 904
                                    }, this)
                                ]
                            }, floor.name, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 48,
                                columnNumber: 691
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 48,
                        columnNumber: 516
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "rooms",
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "OUR ROOMS"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 49,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Find Your Room"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 49,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Select a floor to view room capacity and availability."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 49,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabs",
                        children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: selected.name === floor.name ? 'active' : '',
                                onClick: ()=>setSelectedFloor(floor.name),
                                children: floor.name
                            }, floor.name, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 49,
                                columnNumber: 215
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 49,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rooms",
                        children: selected.rooms.map((room)=>{
                            const isAvailable = room.status === 'available' && room.occupants < room.capacity;
                            const remaining = Math.max(room.capacity - room.occupants, 0);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: isAvailable ? 'room free' : 'room occ',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: room.room
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 49,
                                        columnNumber: 655
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAvailable ? '🟢 Available' : '🔴 Full / Unavailable'
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 49,
                                        columnNumber: 683
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            remaining,
                                            " of ",
                                            room.capacity,
                                            " beds available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 49,
                                        columnNumber: 752
                                    }, this)
                                ]
                            }, room.room, true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 49,
                                columnNumber: 579
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 49,
                        columnNumber: 371
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 49,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "floor-plan",
                className: "section dark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "FLOOR PLAN"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 50,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Explore Our Floors"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 50,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Room capacity and approved occupancy from the hostel management system."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 50,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabs",
                        children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: selected.name === floor.name ? 'active' : '',
                                onClick: ()=>setSelectedFloor(floor.name),
                                children: floor.name
                            }, floor.name, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 50,
                                columnNumber: 247
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 50,
                        columnNumber: 202
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: selected.name
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 50,
                                columnNumber: 425
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plan-grid",
                                children: selected.rooms.map((room)=>{
                                    const isAvailable = room.status === 'available' && room.occupants < room.capacity;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isAvailable ? 'p-room p-green' : 'p-room p-red',
                                        children: [
                                            "🚪",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: room.room
                                            }, void 0, false, {
                                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                                lineNumber: 50,
                                                columnNumber: 681
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    room.occupants,
                                                    "/",
                                                    room.capacity,
                                                    " occupied"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                                lineNumber: 50,
                                                columnNumber: 699
                                            }, this)
                                        ]
                                    }, room.room, true, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 50,
                                        columnNumber: 598
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 50,
                                columnNumber: 449
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 50,
                        columnNumber: 403
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "facilities",
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "HOSTEL FACILITIES"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 51,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Comfortable Everyday Living"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 51,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Everything you need for a peaceful and practical stay."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 51,
                        columnNumber: 125
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "facility-grid",
                        children: facilities.map((facility)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: facility[0]
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 51,
                                        columnNumber: 291
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: facility[1]
                                    }, void 0, false, {
                                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                                        lineNumber: 51,
                                        columnNumber: 313
                                    }, this)
                                ]
                            }, facility[0], true, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 51,
                                columnNumber: 264
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 51,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 51,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery",
                className: "section beige center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "HOSTEL GALLERY"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 52,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Take a Look Around"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 52,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "A comfortable, clean and welcoming place to stay in Jaipur."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 52,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/hostel-exterior.jpg",
                                alt: "Radha Krishan Hostel exterior"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 52,
                                columnNumber: 224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/hostel-room.jpg",
                                alt: "Hostel room"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 52,
                                columnNumber: 301
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/hostel-facility.jpg",
                                alt: "Hostel facility"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 52,
                                columnNumber: 356
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 52,
                        columnNumber: 199
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 52,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "location",
                className: "section location",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "OUR LOCATION"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 53,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Find Us in Ramnagariya"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 53,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "desc",
                                children: "Radha Krishan Hostel is conveniently located in Ramnagariya, Jaipur."
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 53,
                                columnNumber: 120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn primary",
                                href: mapsUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Open in Google Maps ↗"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 53,
                                columnNumber: 212
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 53,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "Radha Krishan Hostel location map",
                        src: "https://www.google.com/maps?q=26.8248812,75.869886&z=15&output=embed",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 53,
                        columnNumber: 318
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "section center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "CONTACT US"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 54,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Have Questions?"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 54,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "desc",
                        children: "Contact Radha Krishan Hostel directly through WhatsApp."
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 54,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Radha Krishan Hostel"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 54,
                                columnNumber: 207
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "📍 RVH8+JM9, Unnamed Road, Ramnagariya, Jaipur, Rajasthan 303012"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 54,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "📞 +91 7427 824 942"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 54,
                                columnNumber: 307
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✉️ radhakrishnahostel@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/radha-krishan-hostel/app/page.js",
                                lineNumber: 54,
                                columnNumber: 333
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 54,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "big-wa",
                        href: whatsappUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "🟢 Chat With Us on WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 54,
                        columnNumber: 377
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Radha Krishan Hostel"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "राधा कृष्ण हॉस्टल · Ramnagariya, Jaipur · © 2026"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 55,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "float-wa",
                href: whatsappUrl,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Chat with Radha Krishan Hostel on WhatsApp",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.5-5.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.7.8c-.1.1-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.8c0 1.1.8 2.1.9 2.3.1.2 1.5 2.4 3.7 3.4 1.4.6 1.9.7 2.6.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.3Z"
                    }, void 0, false, {
                        fileName: "[project]/radha-krishan-hostel/app/page.js",
                        lineNumber: 55,
                        columnNumber: 286
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/radha-krishan-hostel/app/page.js",
                    lineNumber: 55,
                    columnNumber: 242
                }, this)
            }, void 0, false, {
                fileName: "[project]/radha-krishan-hostel/app/page.js",
                lineNumber: 55,
                columnNumber: 110
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/radha-krishan-hostel/app/page.js",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s(Home, "4yZgMAhwAxetJDA7qM71MkGgtDg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/radha-krishan-hostel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$radha$2d$krishan$2d$hostel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/radha-krishan-hostel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/radha-krishan-hostel/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=radha-krishan-hostel_0dckmt5._.js.map