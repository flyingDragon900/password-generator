// Creating all the varialbles
const display = document.querySelector("#display");
const num = document.querySelector("#num");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const char = document.querySelector("#character");
const length = document.querySelector("#length");
const generatePasswordBtn = document.querySelector("#generate-password-btn");

// Creating all the options to choose from
const charNum = '1234567890'
const charAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charaz = 'abcdefghijklmnpoqrstuvwxyz'
const charSf = '`~!@#$%^&*()-_=+[]{}\|"";:/?><.,'

// Adding a click event listner
generatePasswordBtn.addEventListener('click', () => {
    let passwordCharacter = ''
    let len = length.value

    // Mapping to the checkbox
    if (num.checked) {
        passwordCharacter += charNum
    }
    if (uppercase.checked) {
        passwordCharacter += charAZ
    }
    if (lowercase.checked) {
        passwordCharacter += charaz
    }
    if (char.checked) {
        passwordCharacter += charSf
    }

    // Validating if atleast one of the optiion is checked
    if (!num.checked && !uppercase.checked && !lowercase.checked && !char.checked) {
        display.innerHTML = "Select atleast one field"
    }

    let password = generatePassword(passwordCharacter, len)
    display.innerHTML = password
})

// Generating a password function
function generatePassword(passwordCharacter, len) {
    let password = ''
    for (let i = 0; i < len; i++) {
        password += passwordCharacter[(Math.floor(Math.random() * passwordCharacter.length))]
    }
    return password
}
