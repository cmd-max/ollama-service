# your_api_wrapper.py
from flask import Flask, request, jsonify
import ollama

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.get_json()
    prompt = data['prompt']
    response = ollama.generate(prompt)
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
