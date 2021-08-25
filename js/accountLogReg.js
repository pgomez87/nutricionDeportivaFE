var loginForm = document.getElementById('loginForm')
var regForm = document.getElementById('regForm')
var indicator = document.getElementById('indicator')

register = () => {
  regForm.style.transform = 'translateX(0px)'
  loginForm.style.transform = 'translateX(0px)'
  indicator.style.transform = 'translateX(112px)'
}

login = () => {
  regForm.style.transform = 'translateX(300px)'
  loginForm.style.transform = 'translateX(300px)'
  indicator.style.transform = 'translateX(0px)'
}
