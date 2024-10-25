Here's the README content with the steps described in text format, as requested:

---

# **SMS Management System**

## **Overview**
This project is a web-based application designed to manage and monitor SMS services across multiple country-operator pairs. It allows for dynamic control of SMS sending processes, viewing SMS performance, and managing country-operator pairs, with secure access via JWT authentication.

---

## **Features**
- Process Management: Start, stop, and restart SMS programs dynamically using screen sessions.
- Country-Operator Management: Add, view, and manage country-operator pairs.
- Simulated SMS Sending: Mimics SMS sending to demonstrate functionality.
- JWT Authentication: Protects routes with token-based authentication.

---

## **Prerequisites**

Before running the application, ensure the following are installed: Python 3.6 or above, Git, and Virtual Environment tools (venv or virtualenv).

---

## **Setup and Execution**

### **Step 1: Clone the Repository**
Clone the project to your local machine by running `git clone https://github.com/divyajegan110/sms-management-backend.git` and navigate into the project directory with `cd sms-management-backend`.

### **Step 2: Set Up a Virtual Environment**
Create a virtual environment to manage project dependencies by running `python3 -m venv venv`. To activate the virtual environment, run `venv\Scripts\activate` on Windows or `source venv/bin/activate` on macOS/Linux.

### **Step 3: Install Project Dependencies**
With the virtual environment activated, install the required packages by running `pip install -r requirements.txt`.

### **Step 4: Configure Environment Variables**
Create a `.env` file in the project root to securely store configuration details and add the line `JWT_SECRET_KEY=your_jwt_secret_key`, replacing `your_jwt_secret_key` with a secure string of your choice. This key is used to encode JWT tokens for secure access.

### **Step 5: Start the Flask Application**
Run the Flask application with `python app.py`. The app will start at `http://127.0.0.1:5000` by default.

---

## **Using the Application**

### **1. Home Route**
Open your browser and go to `http://127.0.0.1:5000/`. You should see a message confirming that the system is running.

### **2. API Endpoints**

#### **Country-Operator Pair Management**
To add a new country-operator pair to the list, visit `http://127.0.0.1:5000/add_pair/<country>/<operator>` (for example, `http://127.0.0.1:5000/add_pair/India/Airtel`). To retrieve the list of all country-operator pairs, go to `http://127.0.0.1:5000/get_pairs`.

#### **Process Management**
To start an SMS program in a screen session, visit `http://127.0.0.1:5000/start/<program>` (e.g., `http://127.0.0.1:5000/start/program1`). To stop the program, visit `http://127.0.0.1:5000/stop/<program>` (e.g., `http://127.0.0.1:5000/stop/program1`). To restart a program, visit `http://127.0.0.1:5000/restart/<program>` (e.g., `http://127.0.0.1:5000/restart/program1`).

#### **Simulated SMS Sending**
To simulate sending an SMS, visit `http://127.0.0.1:5000/send_sms/<phone_number>`, replacing `<phone_number>` with a sample phone number (e.g., `http://127.0.0.1:5000/send_sms/1234567890`).

#### **JWT Authentication**
To login and get a JWT token, use a tool like Postman or similar to send a POST request to `http://127.0.0.1:5000/login` with a JSON body containing `"username": "admin"` and `"password": "password"`. You’ll receive an `access_token` to use for authenticated routes.

To access protected routes, use the `access_token` by adding it to the `Authorization` header as `Bearer <your_token>`. For example, to access `/protected`, send a GET request to `http://127.0.0.1:5000/protected` with the token included in the header.

---

### **Shutting Down the Virtual Environment**
When you’re finished, deactivate the virtual environment by running `deactivate`.

---

## **Conclusion**
The SMS Management System is now set up and ready for use. You can start, stop, and manage SMS processes, add country-operator pairs, and securely access protected routes with JWT authentication.

---

This README provides a clear guide on running the program, describing all steps without separate code blocks. Let me know if you need further assistance!
