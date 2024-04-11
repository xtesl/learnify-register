const url = 'https://learnify-api-kps0.onrender.com/api/v1/auth/login/'; // Replace with your API endpoint


const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

const data = {
  email: email.value,
  password: password.value
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    // Add any other headers you need, such as authorization headers
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    window.alert('Login successful');
    // Handle the response data here
  })
  .catch(error => {
    console.error('There was a problem with the POST request:', error);
    // Handle errors here
  });
