const menuItems = document.getElementById('MenuItems')

menuItems.style.maxHeight = '0px'

menuToggle = () => {
  if (menuItems.style.maxHeight == '0px') {
    menuItems.style.maxHeight = '200px'
  } else {
    menuItems.style.maxHeight = '0px'
  }
}
