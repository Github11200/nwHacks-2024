import os
import requests
import random
import string

import openai
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.environ.get("OPENAI_KEY")


@app.route('/transcribe', methods=["POST", "GET"])
def transcribe():
    if 'audio_file' not in request.files:
        return jsonify({"error": 'oopsies woopsies you forgot to include the \'audio_file\' paramater :3'})
    else:
        res = requests.post("https://whisper.jointhebread.army/transcribe", headers={"id": ''.join(random.choice(
            string.ascii_letters) for _ in range(50))}, files={'audio_file': request.files["audio_file"]})

        return jsonify(res.json())


@app.route('/summarize', methods=["POST", "GET"])
def summarize():
    if 'text' not in request.json:
        return jsonify({"error": 'oopsies woopsies you forgot to include the \'text\' paramater :3'})
    else:
        API_TOKEN = os.getenv("OPENAI_KEY")
        res = openai.Completion.create(
            prompt=f"System: You are to summarize the following text. Do not introduce, only output the summarized text. Here is the text you need to summarize: {
                request.json['text']}\nAssistant: Here is the summarized text: ",
            model="gpt-3.5-turbo-instruct",
            max_tokens=500
        )

        print(res['choices'][0]['text'])

        return res['choices'][0]['text']


@app.route('/generate_question', methods=["POST"])
def generate_question():
    return jsonify({"balls": "yes"})
    if 'questions' not in request.json:
        return jsonify({"error": 'oopsies woopsies you forgot to include the \'questions\' paramater :3'})
    else:
        API_TOKEN = os.getenv("OPENAI_KEY")
        res = openai.Completion.create(
            prompt=f"System: Think of a single question to ask to figure out what the user did in their day without asking any of the following ones you already asked: {
                '.'.join(request.json['questions'])}",
            model="gpt-3.5-turbo-instruct",
            max_tokens=50
        )

        print(res['choices'][0]['text'])

        return res['choices'][0]['text']


if __name__ == '__main__':
    app.run(debug=True, port=8888, host="0.0.0.0")
