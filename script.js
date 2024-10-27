// URL for backend (adjust if needed)
const baseURL = 'http://127.0.0.1:5000';

// Add Country-Operator Pair
document.getElementById('addPairForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    const country = document.getElementById('country').value;
    const operator = document.getElementById('operator').value;

    try {
        const response = await fetch(`${baseURL}/add_pair/${country}/${operator}`, {
            method: 'POST' // Use POST method
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('addPairResult').innerText = `Pair added: ${JSON.stringify(data.pairs)}`;

        // Reset the form fields
        document.getElementById('country').value = '';
        document.getElementById('operator').value = '';
    } catch (error) {
        console.error('Error adding pair:', error); // Log error details
        document.getElementById('addPairResult').innerText = 'Error adding pair';
    }
});

// Start Program
async function startProgram() {
    const program = document.getElementById('programName').value;
    try {
        const response = await fetch(`${baseURL}/start/${program}`, {
            method: 'POST' // Use POST method
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('programResult').innerText = data.status;
    } catch (error) {
        console.error('Error starting program:', error); // Log error details
        document.getElementById('programResult').innerText = 'Error starting program';
    }
}

// Stop Program
async function stopProgram() {
    const program = document.getElementById('programName').value;
    try {
        const response = await fetch(`${baseURL}/stop/${program}`, {
            method: 'POST' // Use POST method
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('programResult').innerText = data.status;
    } catch (error) {
        console.error('Error stopping program:', error); // Log error details
        document.getElementById('programResult').innerText = 'Error stopping program';
    }
}

// Restart Program
async function restartProgram() {
    const program = document.getElementById('programName').value;
    try {
        const response = await fetch(`${baseURL}/restart/${program}`, {
            method: 'POST' // Use POST method
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('programResult').innerText = data.status;
    } catch (error) {
        console.error('Error restarting program:', error); // Log error details
        document.getElementById('programResult').innerText = 'Error restarting program';
    }
}

// Send SMS
document.getElementById('sendSmsForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    const phoneNumber = document.getElementById('phoneNumber').value;

    try {
        const response = await fetch(`${baseURL}/send_sms/${phoneNumber}`, {
            method: 'POST' // Use POST method
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('smsResult').innerText = `SMS status: ${data.status}`;

        // Reset the phone number field
        document.getElementById('phoneNumber').value = '';
    } catch (error) {
        console.error('Error sending SMS:', error); // Log error details
        document.getElementById('smsResult').innerText = 'Error sending SMS';
    }
});
