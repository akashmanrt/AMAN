const captcha = document.getElementById('captcha');
const ctx = captcha.getContext('2d');
const input = document.getElementById('captchaInput');
const submit = document.getElementById('submit');
const output = document.getElementById('output');
const refresh = document.getElementById('refresh');

const alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let captchaStr = '';

function generateCaptcha() {
    ctx.clearRect(0, 0, captcha.width, captcha.height);
    captchaStr = '';
    for (let i = 1; i <= 5; i++) {
        captchaStr += alphaNums[Math.floor(Math.random() * alphaNums.length)];
        ctx.font = `${Math.floor(Math.random() * 30) + 20}px Arial`;
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.8 + 0.2})`;
        ctx.fillText(alphaNums[Math.floor(Math.random() * alphaNums.length)], i * 50, 50);
    }
    output.classList.remove('incorrect');
    output.textContent = '';
    input.value = '';
}

generateCaptcha();

submit.addEventListener('click', () => {
    if (input.value === captchaStr) {
        output.textContent = 'Correct!';
    } else {
        output.classList.add('incorrect');
        output.textContent = 'Incorrect! Try again.';
    }
});

refresh.addEventListener('click', generateCaptcha);
