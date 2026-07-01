import numpy as np
import tensorflow as tf

from pathlib import Path
from PIL import Image
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from app.disposal import WASTE_INFO


BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "model" / "ecosort_model.keras"

model = tf.keras.models.load_model(MODEL_PATH)

CLASS_NAMES = [
    "battery",
    "biological",
    "brown-glass",
    "cardboard",
    "clothes",
    "green-glass",
    "metal",
    "paper",
    "plastic",
    "shoes",
    "trash",
    "white-glass"
]

def preprocess_image(image_path):

    image = Image.open(image_path)

    image = image.convert("RGB")

    image = image.resize((224, 224))

    image = np.array(image)

    image = np.expand_dims(image, axis=0)

    image = preprocess_input(image)

    return image


def predict(image_path):

    image = preprocess_image(image_path)

    predictions = model.predict(image, verbose=0)
    predictions = model.predict(image, verbose=0)

    print(predictions.shape)
    print(predictions)

    predicted_index = np.argmax(predictions[0])

    predicted_class = CLASS_NAMES[predicted_index]

    confidence = float(predictions[0][predicted_index] * 100)
    info = WASTE_INFO[predicted_class]

    return {
        "class": predicted_class,
        "confidence": round(confidence, 2),
        **info
    }