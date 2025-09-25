from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder="./")

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Assure la livraison des fichiers statiques
@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('.', path)

if __name__ == "__main__":
    app.run(debug=True)
