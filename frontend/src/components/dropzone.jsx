import React, { useRef, useState } from "react";
import { Loader, UploadCloud } from "lucide-react";
import axios from "axios"
import ResultCard from "./ResultCard";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

const DropZone = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
      openFileDialog() {
          fileInputRef.current.click();
      }
  }));


  const API_URL = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleOnChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a JPG, PNG or WebP image.");
      return;
    }

    const MAX_SIZE = 10 * 1024 * 1024;

    if (file.size > MAX_SIZE) {
      alert("Image size should be less than 10 MB.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

 const handleAnalyze = async () => {

      if (!image) return;

      setLoading(true);

      const formData = new FormData();

      formData.append("file", image);

      try {

          const response = await axios.post(
              `${API_URL}/predict`,
              formData,
              {
                  headers: {
                      "Content-Type": "multipart/form-data"
                  }
              }
          );

          console.log(response.data);

          setResult(response.data);

      }
      catch(error){

          console.error(error);

          alert("Prediction failed.");

      }
      finally{

          setLoading(false);

      }
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    fileInputRef.current.value = "";
  };

  if (result) {
      return (
        <ResultCard
          result={result}
          onReset={handleReset}
        />
      );
    }
  return (
    <div className="w-full max-w-md">

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept="image/png,image/jpeg,image/webp"
        onChange={handleOnChange}
      />

      {!image ? (
        <div
          onClick={handleClick}
          className="
            group
            p-8

            bg-white/10
            backdrop-blur-2xl

            border border-white/15

            rounded-[32px]

            shadow-2xl

            text-center

            cursor-pointer

            transition-all duration-300

            hover:border-emerald-400/50
            hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]
          "
        >
          <div
            className="
              border-2
              border-dashed
              border-white/20

              rounded-2xl

              py-14
              px-8

              flex
              flex-col
              items-center

              gap-5

              transition-all duration-300

              group-hover:border-emerald-400/50
            "
          >
            <div
              className="
                p-5

                rounded-full

                bg-emerald-500/10

                border border-white/10

                text-emerald-400

                transition-all duration-300

                group-hover:scale-110
              "
            >
              <UploadCloud className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">
                Upload Waste Image
              </h3>

              <p className="text-white/70 mt-2">
                Click Anywhere
              </p>
            </div>

            <p className="text-xs text-white/50">
              JPG • PNG • WEBP • Max 10 MB
            </p>
          </div>
        </div>
      ) : (
        <div
          className="
            p-8

            bg-white/10
            backdrop-blur-2xl

            border border-white/15

            rounded-[32px]

            shadow-2xl

            flex
            flex-col

            items-center

            gap-6
          "
        >
          <img
            src={preview}
            alt="Preview"
            className="
              w-full
              h-60

              object-cover

              rounded-2xl
            "
          />

          <p className="text-white text-sm text-center break-all">
            {image.name}
          </p>

          <div className="flex gap-4 w-full">

            <button
              onClick={handleAnalyze}
              className="
                flex-1

                py-3

                rounded-full

                bg-emerald-500

                text-white

                font-semibold

                hover:bg-emerald-400

                transition-all duration-300
              "
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>

            <button
              onClick={handleReset}
              className="
                flex-1

                py-3

                rounded-full

                bg-white/10

                border border-white/20

                text-white

                hover:bg-white/20

                transition-all duration-300
              "
              disabled={loading}
            >
              Change Image
            </button>

          </div>
        </div>
      )}
    </div>
  );
});

export default DropZone;