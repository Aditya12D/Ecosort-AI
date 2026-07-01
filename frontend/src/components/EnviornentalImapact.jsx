import React from "react";
import { Trash2, TrendingUp, Droplets, Sparkles } from "lucide-react";

function EnvironmentalImpact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      
      {/* Header Container */}
      <div className="mb-16 space-y-4 max-w-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
          🌍 Why It Matters
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight leading-[1.1]">
          The Power of Making <br />
          <span className="text-emerald-400">The Right Choice.</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Every item sorted correctly keeps our ecosystems safe and pushes our community closer toward a circular lifestyle economy.
        </p>
      </div>

      {/* Grid Display for the 4 pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1: Reduces Landfill Waste */}
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
            <Trash2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white text-base font-bold">Reduces Landfill Waste</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Prevents recyclable items from being buried permanently under thousands of tons of municipal household refuse.
            </p>
          </div>
        </div>

        {/* Pillar 2: Improves Efficiency */}
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white text-base font-bold">Improves Efficiency</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Improves recycling efficiency by reducing contamination and helping recyclable materials return to production.
            </p>
          </div>
        </div>

        {/* Pillar 3: Protects Ecosystems */}
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white text-base font-bold">Protects Ecosystems</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Keeps dangerous microplastics and chemical leakage compounds from seeping directly into natural soil networks.
            </p>
          </div>
        </div>

        {/* Pillar 4: Sustainable Habits */}
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4">
          <div className="p-4 bg-emerald-500/10 border border-white/5 rounded-2xl text-emerald-400 w-fit">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white text-base font-bold">Sustainable Habits</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Encourages small daily habits that collectively create a cleaner and more sustainable future.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EnvironmentalImpact;