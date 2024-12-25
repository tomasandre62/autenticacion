from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Esto habilita CORS para todas las rutas

# Lista simulada de usuarios
users = [{'email': 'test@example.com', 'password': 'password123'}]

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    users.append({'email': email, 'password': password})
    return jsonify({'message': 'Usuario registrado'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Verificar si el usuario existe en la lista de usuarios
    for user in users:
        if user['email'] == email and user['password'] == password:
            return jsonify({'message': 'Inicio de sesión exitoso'}), 200
    return jsonify({'message': 'Correo o contraseña incorrectos'}), 401

if __name__ == '__main__':
    app.run(debug=True)
