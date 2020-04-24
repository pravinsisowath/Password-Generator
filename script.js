// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  const passLength = parseInt(prompt("Length?"))
  
  if(passLength < 8 || passLength > 128) {
    alert('Length must be between 8 and 128')
    return
  }
  const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChar = '123456789'
  const specialChar = '!@#$%^&*()'
  const lowC = confirm('Lower case?')
  const upC = confirm('Upper case?')
  const numC = confirm('Number case?')
  const specC = confirm('Special case?')
  let passHolder = ''
  let newPass = ''
    
  if(!lowC && !upC && !numC && !specC) {
    alert('No character set selected')
    return
  }

  if(lowC) {
    passHolder += lowerChar;
    }
    if(upC) {
    passHolder += upperChar;
    }
    if(numC) {
    passHolder += numberChar;
    }
    if(specC) {
    passHolder += specialChar;
    }

    for(let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
    }
  return newPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
