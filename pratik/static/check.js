function check() {
    if (document.form.getElementById('pass').value ==
      document.form.getElementById('cnfpass').value) {
      document.form.getElementById('message').style.color = 'green';
      document.form.getElementById('message').innerHTML = 'matching';
    } else {
      document.form.getElementById('message').style.color = 'red';
      document.form.getElementById('message').innerHTML = 'not matching';
    }
  }
