import React from "react";
import { BrainCircuit, Leaf, ShieldCheck } from "lucide-react";

function AboutSection() {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Main 60/40 Split Container using simple responsive classes */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: About Text (approx. 40% width on desktop) */}
        <div className="w-full lg:w-2/5 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-wider w-fit">
            Our Mission
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Bridging Technology & <br />
            <span className="text-emerald-400">Sustainability.</span>
          </h2>
          
          <p className="text-gray-300 text-base leading-relaxed">
           Incorrect waste segregation reduces recycling efficiency and increases environmental pollution. EcoSort AI combines computer vision with intelligent disposal guidance to help users identify waste correctly and make sustainable disposal decisions within seconds.
          </p>
        </div>

        {/* Right Side: Feature Boxes (approx. 60% width on desktop) */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          
          {/* Card 1: AI Capabilities */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col md:flex-row gap-5 items-start">
            <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 shrink-0">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">Advanced Computer Vision</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">Built using deep learning and trained on a diverse waste classification dataset, EcoSort AI accurately identifies common recyclable and non-recyclable waste in seconds.</p>
            </div>
          </div>

          {/* Bottom row boxes container */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            
            {/* Card 2: Eco Impact */}
            <div className="flex-1 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
              <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-base font-bold">Circular Economy</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Correct waste segregation improves recycling efficiency, reduces landfill waste, and supports a cleaner, more sustainable environment.
                </p>
              </div>
            </div>

            {/* Card 3: Privacy */}
            <div className="flex-1 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
              <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-base font-bold">Privacy First Processing</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Uploaded images are processed only for prediction and removed after analysis, ensuring your data is not retained unnecessarily.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;