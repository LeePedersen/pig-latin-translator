
var vowels = ["a", "e", "i", "o", "u"];

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var translate = function(english) {
  english = english.toLowerCase();
  var sentenceArray = english.split(" ");
  var pigLatinTranslated = [];

  for (j = 0; j < sentenceArray.length; j++) {
    var wordArray = sentenceArray[j].split("");
    var wordConsonants = [];
    var nonLetters = [];
    console.log(wordArray);

    for (i = 0; i < wordArray.length; i++) {
      if (!vowels.includes(wordArray[i]) &&  !consonants.includes(wordArray[i])) {
        nonLetters.push(wordArray[i]);
        console.log(nonLetters);
      } else {
        console.log(wordArray);
      }
    }

    for (i = wordArray.length; i >= 0; i--) {
      if (nonLetters.includes(wordArray[i])) {
        wordArray.splice(i, 1);
      } else {
      }
    }

    for (i = 0; i < wordArray.length; i++) {
      if (consonants.includes(wordArray[i])) {
        wordConsonants.push(wordArray[i]);
      } else if (wordArray[i] === "u" && wordArray[i - 1] === "q") {
        wordConsonants.push(wordArray[i]);
      } else {
        break;
      }
    }

    if (vowels.includes(wordArray[0])) {
      pigLatin = wordArray.join("") + "way";
    } else if (wordConsonants && consonants.includes(wordArray[0])) {
      wordArray = wordArray.concat(wordConsonants);
      wordArray.splice(0, wordConsonants.length);
      pigLatin = wordArray.join("") + "ay";
    } else {
      pigLatin = nonLetters.join('');
    }
    pigLatinTranslated.push(pigLatin);
  }
  return pigLatinTranslated.join(' ');
}

$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();
    var input = $("#inputText").val();
    var output = translate(input);
    $("#translated").text(output);
  });
});
