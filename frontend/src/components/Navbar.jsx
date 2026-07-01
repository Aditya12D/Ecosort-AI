import { Recycle, ScanLine } from 'lucide-react'
import React, { useEffect, useState } from "react";

function Navbar() {
    const [active, setActive] = useState("home");

    const navClass = (section) =>
        `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active===section
            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`;
    useEffect(() => {

    const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }

                });

            },

            {
                threshold: 0.5
            }

        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();

    }, []);
    return (
        <nav
            className="
                fixed
                top-8
                left-1/2
                -translate-x-1/2

                z-50

                w-[95%]
                max-w-7xl
                flex items-center justify-between
                mx-auto
                px-6 py-3

                rounded-full

                bg-slate-950/20
                backdrop-blur-xl

                border border-white/10

                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]

                transition-all duration-300
            ">
            {/* left */}
            <div className="flex items-center gap-2">
                <span
                    className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full

                        bg-emerald-500/10
                        border border-emerald-500/20

                        text-emerald-400
                    "
                >
                    <Recycle className="w-5 h-5"/>
                </span>
                <span className='text-white font-semibold text-lg'>
                    Ecosort <span className='text-emerald-400'>AI</span>
                </span>
            </div>

            {/* center */}
            <div 
                className="
                    hidden md:flex
                    items-center
                    gap-6
                "
            >
                <a
                    href="#home"
                    className={navClass("home")}
                >
                    Home
                </a>

                <a
                    href="#about"
                    className={navClass("about")}
                >
                    About
                </a>

                <a
                    href="#features"
                    className={navClass("features")}
                >
                    Features
                </a>
                <a href="#impact" className={navClass("impact")}>
                    Impact
                </a>
            </div>

            {/* right */}
            <div className="flex items-center">
                <button
                    className="
                        flex items-center gap-2

                        px-5 py-2

                        rounded-full

                        bg-emerald-500/20
                        hover:bg-emerald-500/30
                        text-white
                        font-medium
                        text-sm

                        border border-emerald-400/30
                        backdrop-blur-sm

                        transition-all duration-300
                    "
                >
                    <ScanLine className="w-4 h-4 text-emerald-400" />
                    Scan waste
                </button>
            </div>
        </nav>
    );
}

export default Navbar;