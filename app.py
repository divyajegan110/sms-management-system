from flask import Flask, jsonify, request
import os
app = Flask(__name__)

country_operator_pairs = []

@app.route('/add_pair/<country>/<operator>')
def add_pair(country, operator):
    pair = {"country": country, "operator": operator}
    country_operator_pairs.append(pair)
    return jsonify({"pairs": country_operator_pairs})

@app.route('/get_pairs')
def get_pairs():
    return jsonify({"pairs": country_operator_pairs})

@app.route('/start/<program>')
def start_program(program):
    os.system(f'screen -dmS {program}')
    return jsonify({"status": f"{program} started"})

@app.route('/stop/<program>')
def stop_program(program):
    os.system(f'screen -S {program} -X quit')
    return jsonify({"status": f"{program} stopped"})

@app.route('/restart/<program>')
def restart_program(program):
    os.system(f'screen -S {program} -X quit')
    os.system(f'screen -dmS {program}')
    return jsonify({"status": f"{program} restarted"})
class SendSMS:
    def __init__(self, phone_number, proxy):
        self.phone_number = phone_number
        self.proxy = proxy

    def send_otp(self):
        # Simulate sending SMS
        return "sent successfully"

@app.route('/send_sms/<phone_number>')
def send_sms(phone_number):
    sms = SendSMS(phone_number, "proxy_placeholder")
    status = sms.send_otp()
    return jsonify({"status": status})

from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app.config['JWT_SECRET_KEY'] = 'super-secret'
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if username != 'admin' or password != 'password':
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@app.route('/protected')
@jwt_required()
def protected():
    return jsonify({"msg": "This is a protected route"})

@app.route('/')
def home():
    return jsonify({"message": "SMS Management System Running"})

if __name__ == '__main__':
    app.run(debug=True)
