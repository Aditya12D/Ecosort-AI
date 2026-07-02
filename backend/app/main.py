from fastapi import FastAPI, File, UploadFile,HTTPException
from app.predictor import predict
from pathlib import Path
import shutil
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="EcosortAi",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ecosort-ai-brown.vercel.app/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent

UPLOAD_DIR = BASE_DIR / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@app.get("/")
def home():
    return{
        "message": "Welcome to EcosortAI"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}

    
@app.post("/predict")
async def predict_image(file: UploadFile=File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload an image."
        )

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    print(file_path)
    print(file_path.exists())

    try:
        result = predict(file_path)
    finally:
        if file_path.exists():
            file_path.unlink()

    return result