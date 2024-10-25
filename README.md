Overview
This project is a web-based application designed to manage and monitor SMS services across multiple country-operator pairs. It allows for dynamic control of SMS sending processes, viewing SMS performance, and managing country-operator pairs, with secure access via JWT authentication.

Features
Process Management: Start, stop, and restart SMS programs dynamically using screen sessions.
Country-Operator Management: Add, view, and manage country-operator pairs.
Simulated SMS Sending: Mimics SMS sending to demonstrate functionality.
JWT Authentication: Protects routes with token-based authentication.
Prerequisites
Ensure the following are installed:

Python 3.6+
Git
Virtual Environment tools (venv or virtualenv)
Setup and Execution
Step 1: Clone the Repository
Clone the project to your local machine:

bash
Copy code
git clone https://github.com/divyajegan110/sms-management-backend.git
cd sms-management-backend
Step 2: Set Up a Virtual Environment
Create a virtual environment to manage project dependencies:

bash
Copy code
python3 -m venv venv
Activate the virtual environment:

On Windows:
bash
Copy code
venv\Scripts\activate
On macOS/Linux:
bash
Copy code
source venv/bin/activate
Step 3: Install Project Dependencies
With the virtual environment activated, install the required packages:

bash
Copy code
pip install -r requirements.txt
Step 4: Configure Environment Variables
Create a .env file in the project root to securely store configuration details:

plaintext
Copy code
JWT_SECRET_KEY=your_jwt_secret_key
Replace your_jwt_secret_key with a secure string of your choice. This key is used to encode JWT tokens for secure access.

Step 5: Start the Flask Application
Run the Flask application:

bash
Copy code
python app.py
The app will start at http://127.0.0.1:5000 by default.

Using the Application
1. Home Route
Open your browser and go to http://127.0.0.1:5000/. You should see:

json
Copy code
{
    "message": "SMS Management System Running"
}
2. API Endpoints
Country-Operator Pair Management
Add a Country-Operator Pair: Add a new country-operator pair to the list.

php
Copy code
GET http://127.0.0.1:5000/add_pair/<country>/<operator>
Example: http://127.0.0.1:5000/add_pair/India/Airtel

Retrieve All Pairs: Get a list of all country-operator pairs.

arduino
Copy code
GET http://127.0.0.1:5000/get_pairs
Process Management
Start a Program: Start an SMS program in a screen session.

sql
Copy code
GET http://127.0.0.1:5000/start/<program>
Example: http://127.0.0.1:5000/start/program1

Stop a Program: Stop an SMS program.

vbnet
Copy code
GET http://127.0.0.1:5000/stop/<program>
Example: http://127.0.0.1:5000/stop/program1

Restart a Program: Restart an SMS program.

arduino
Copy code
GET http://127.0.0.1:5000/restart/<program>
Example: http://127.0.0.1:5000/restart/program1

Simulated SMS Sending
Send SMS: Simulate sending an SMS.
arduino
Copy code
GET http://127.0.0.1:5000/send_sms/<phone_number>
Example: http://127.0.0.1:5000/send_sms/1234567890
JWT Authentication
Login and Get Token: Use Postman or a similar tool to send a POST request to:

arduino
Copy code
POST http://127.0.0.1:5000/login
Request Body (JSON):

json
Copy code
{
    "username": "admin",
    "password": "password"
}
You’ll receive an access_token to use for authenticated routes.

Access Protected Route: Use the access_token to access protected routes. For example, to access /protected:

Add an Authorization header: Bearer <your_token>
Send a GET request to:
vbnet
Copy code
GET http://127.0.0.1:5000/protected
Shutting Down the Virtual Environment
When you’re finished, deactivate the virtual environment:

bash
Copy code
deactivate
Conclusion
The SMS Management System is now set up and ready for use. You can start, stop, and manage SMS processes, add country-operator pairs, and securely access protected routes with JWT authentication.
