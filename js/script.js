const imgEye = document.querySelector('#eye');
const inputPass = document.querySelector('#pass')

imgEye.addEventListener('click', () => {
    if (inputPass.type === 'password') {
        inputPass.type = 'text'
        imgEye.src = 'img/hidden.png'
    } else {
        inputPass.type = 'password'
        imgEye.src = 'img/eye.png'
    }
})
