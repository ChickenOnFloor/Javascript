const textBox = document.querySelector('#textbox');
const copyBtn = document.querySelector('.copy-btn');

const generatePassword = ()=> {
    const length = 10;
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var password = '';
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    textBox.value = password;
}

copyBtn.addEventListener("click", () => {
    let textToCopy = document.querySelector('#textbox').value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.className = "ri-check-line copy-btn"; 
        setTimeout(() => {
            copyBtn.className = "ri-file-2-line copy-btn"; 
        }, 1000);
    })
});