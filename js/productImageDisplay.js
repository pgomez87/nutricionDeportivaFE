var productImg = document.getElementById('productImg')
var smallImgs = document.getElementsByClassName('small-img')

smallImgs[0].onclick = () => {
  productImg.src = smallImgs[0].src
}
smallImgs[1].onclick = () => {
  productImg.src = smallImgs[1].src
}
smallImgs[2].onclick = () => {
  productImg.src = smallImgs[2].src
}
smallImgs[3].onclick = () => {
  productImg.src = smallImgs[3].src
}

console.log('heyy')
