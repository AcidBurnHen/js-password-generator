const characterAmmountRange = document.getElementById('characterAmmountRange');
const characterAmmountNumber = document.getElementById(
  'characterAmmountNumber'
);
const includeUpperCaseElement = document.getElementById('includeUppercase');
const includeNumberElement = document.getElementById('includeNumber');
const includeSymbolElement = document.getElementById('includeSymbols');
const form = document.getElementById('generatePasswordForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmmountNumber.addEventListener('input', syncCharacterAmmount);
characterAmmountRange.addEventListener('input', syncCharacterAmmount);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmmount = characterAmmountNumber.value;
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumberElement.checked;
  const includeSymbols = includeSymbolElement.checked;
  const password = generatePassword(
    characterAmmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

function syncCharacterAmmount(e) {
  const value = e.target.value;
  characterAmmountNumber.value = value;
  characterAmmountRange.value = value;
}

function generatePassword(
  characterAmmount,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowercaseCharCodes;

  if (includeUpperCase) charCodes = charcodes.concat(uppercaseCharCodes);
  if (includeNumbers) charCodes = charcodes.concat(numberCharCodes);
  if (includeSymbols) charcodes = charcodes.concat(symbolCharCodes);

  let passwordCharacters = [];

  for (let i = 0; i < characterAmmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    const characterString = String.fromCharCode(characterCode);
    passwordCharacters.push(characterString);
  }

  return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
}
