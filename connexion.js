function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  if (password === 'PARISSAINTGERMAIN') {
    window.location.href = 'accueil.html';
  } 
  else {
    alert('Mot de passe incorrect');
  }
}