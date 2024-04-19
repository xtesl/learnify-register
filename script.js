
var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});


const url = 'https://learnify-api-kps0.onrender.com/api/v1/auth/login/'; // Replace with your API endpoint

const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = {
    email: email.trim(),
    password: password.trim()
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Add any other headers you need, such as authorization headers
    },
    body: JSON.stringify(data)
  };
 loginMessage.style.display = 'block';
  submit.disabled = true;
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
    })
    .then(data => {
      window.location.href = "https://learnify-home.onrender.com?login=true";
      window.alert('Login successful');
      // Handle the response data here
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error);
      // Handle errors here
    }) .finally(() => {
      // Hide the login message and enable the submit button
      loginMessage.style.display = 'none';
      submit.disabled = false;
    });
});


