import React from 'react';
import DropZone from './dropzone';
import { useRef } from 'react';

function HeroSection() {

    const dropZoneRef = useRef();

    return (
        <div className="
            w-full
            max-w-7xl
            mx-auto
            px-6
            
            /* Setting up the flex row layout */
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            
            h-[80dvh]
            overflow-hidden
        ">
            {/* Left Section */}
            <div
                className="
                    w-full
                    md:w-3/5

                    flex
                    flex-col
                    justify-center

                    gap-8
                "
            >
                {/* Badge */}
                <div>
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2

                            px-4
                            py-2

                            rounded-full

                            bg-white/10
                            backdrop-blur-xl
                            border border-white/15

                            text-white/90
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                        "
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        AI Powered Waste Sorting
                    </div>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                    <h1
                        className="
                            text-5xl
                            md:text-7xl

                            font-black

                            leading-[1.05]

                            text-white
                        "
                    >
                        Smarter Sorting.
                    </h1>

                    <h1
                        className="
                            text-5xl
                            md:text-7xl

                            font-black

                            leading-[1.05]
                        "
                    >
                        <span className="text-emerald-400">
                            Cleaner Planet.
                        </span>
                    </h1>
                </div>

                {/* Subtitle */}
                <p
                    className="
                        max-w-xl

                        text-lg
                        md:text-xl

                        leading-8

                        text-white/75
                    "
                >
                    Upload a waste image and let our AI instantly identify its
                    category, recommend the correct recycling bin, and provide
                    eco-friendly disposal guidance in seconds.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-5">
                    {/* Primary Translucent Glass Button to match reference UI */}
                    <button
                        className="
                            px-7
                            py-4

                            rounded-full

                            bg-emerald-500/20
                            backdrop-blur-md
                            border border-emerald-400/30

                            text-white
                            font-semibold

                            hover:scale-105
                            hover:bg-emerald-500/30
                            hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]

                            transition-all
                            duration-300
                        "
                        onClick={() => dropZoneRef.current.openFileDialog()}
                    >
                        Upload Image
                    </button>

                    <button
                        className="
                            px-7
                            py-4

                            rounded-full

                            bg-white/10
                            backdrop-blur-xl

                            border border-white/20

                            text-white

                            hover:bg-white/20

                            transition-all
                            duration-300
                        "
                    >
                        Learn More
                    </button>
                </div>

                {/* Small Trust Line */}
                <div
                    className="
                        flex
                        items-center
                        gap-6

                        pt-2

                        text-white/70
                        text-sm
                    "
                >
                    <span>✓ 9 Waste Categories</span>
                    <span>✓ AI Powered</span>
                    <span>✓ Instant Results</span>
                </div>
            </div>

            {/* Right Section (40% width on Desktop) */}
            <div className="w-full md:w-2/5 flex items-center justify-center">
                <DropZone ref={dropZoneRef}/>
            </div>
        </div>
    );
}

export default HeroSection;