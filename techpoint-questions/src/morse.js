const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

Object.freeze(MORSE_CODE);

/**
 * This is the entry point to the program.
 *
 * @param {string} morseCode The string to decode.
 */
decodeMorse = function(morseCode){
  var str = arguments[0];
  str = str.trim();
 
  var arr = str.split('   ');
   
  for(var j = 0; j < arr.length; j++){
       arr[j] = arr[j].split(' ');
      } 
  for(var k = 0; k < arr.length; k++){  
       for(var i = 0; i < arr[k].length; i++){
           arr[k][i] = MORSE_CODE[arr[k][i]];
     }
   }  
   for (var l = 0; l < arr.length; l++){
     arr[l] = arr[l].join('');
   }  
   return arr.join(' ');
 } 
 console.log("Decoded Morse: " + decodeMorse('.... . -.--   .--- ..- -.. . -.-.-- -.--.-'));

module.exports = decodeMorse;
