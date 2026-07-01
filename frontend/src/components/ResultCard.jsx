import React from "react";
import { CheckCircle2, Recycle, Trash2, RotateCcw } from "lucide-react";

function ResultCard({ result, onReset }) {
  const confidence = Math.round(result.confidence);

  return (
    <div
      className="
        w-full
        max-w-md

        p-8

        bg-white/10
        backdrop-blur-2xl
        backdrop-saturate-150

        border border-white/15

        rounded-[32px]

        shadow-2xl
      "
    >
      {/* Header */}

      <div className="text-center mb-8">

        <div
          className="
            w-16 h-16
            mx-auto

            flex items-center justify-center

            rounded-full

            bg-emerald-500/20

            text-emerald-400
          "
        >
          <CheckCircle2 size={32} />
        </div>

        <h2 className="text-2xl font-bold text-white mt-4">
          Prediction Complete
        </h2>

        <p className="text-white/60 mt-2">
          AI has analyzed your waste image.
        </p>

      </div>

      {/* Prediction */}

      <div className="space-y-5">

        <InfoRow
          label="Prediction"
          value={capitalize(result.class)}
        />

        <InfoRow
          label="Category"
          value={result.category}
        />

        <InfoRow
          label="Bin"
          value={result.bin}
        />

        <div className="flex justify-between items-center">

          <span className="text-white/70">
            Recyclable
          </span>

          <span
            className={`
              flex items-center gap-2
              font-semibold
              ${
                result.recyclable
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            `}
          >
            {result.recyclable ? (
              <>
                <Recycle size={18} />
                Yes
              </>
            ) : (
              <>
                <Trash2 size={18} />
                No
              </>
            )}
          </span>

        </div>

        <div className="border-t border-white/10 pt-5">

          <h3 className="text-white font-semibold mb-2">
            Disposal Guide
          </h3>

          <p className="text-white/70 leading-7">
            {result.disposal}
          </p>

        </div>

        <div className="border-t border-white/10 pt-5">

          <h3 className="text-white font-semibold mb-2">
            Eco Tip 🌿
          </h3>

          <p className="text-white/70 leading-7">
            {result.eco_tip}
          </p>

        </div>

      </div>

      {/* Button */}

      <button
        onClick={onReset}
        className="
          mt-8
          w-full

          flex items-center justify-center gap-2

          py-3

          rounded-full

          bg-emerald-500

          text-white
          font-semibold

          hover:bg-emerald-400

          transition-all
          duration-300
        "
      >
        <RotateCcw size={18} />

        Analyze Another
      </button>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">

      <span className="text-white/60">
        {label}
      </span>

      <span className="text-white font-semibold text-right">
        {value}
      </span>

    </div>
  );
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default ResultCard;