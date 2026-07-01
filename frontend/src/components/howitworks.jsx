import React from "react";
import { UploadCloud, BrainCircuit, ArrowUpRight } from "lucide-react";

function HowItWorks() {
  return (
    <div id="how-it-works" className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Section Header */}
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
          How EcoSort Works
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">
          How It <span className="text-emerald-400">Works</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-sm">
          Get real-time eco-friendly disposal guidelines in three simple steps.
        </p>
      </div>

      {/* 3-Step Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Step 1: Upload */}
        <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4">
          <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold flex items-center justify-center">
            1
          </div>
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 mt-2">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">Upload Image</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Drop a photo or select an image file of your waste item from your mobile or desktop browser.
            </p>
          </div>
        </div>

        {/* Step 2: AI Analysis */}
        <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4">
          <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold flex items-center justify-center">
            2
          </div>
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 mt-2">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">AI Analysis</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Our AI analyzes the uploaded image,
identifies the waste category, and
predicts the most suitable disposal method.
            </p>
          </div>
        </div>

        {/* Step 3: Disposal Guide */}
        <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4">
          <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold flex items-center justify-center">
            3
          </div>
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 mt-2">
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">Disposal Guide</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Get the correct disposal bin,
recyclability status, and practical
eco-friendly disposal recommendations.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;