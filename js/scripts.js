
var vowels = ["a", "e", "i", "o", "u"];

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var translate = function(english) {
  english = english.toLowerCase();
  var englishArray = english.split("");
  var wordConsonants = [];
  var nonLetters = [];

  for (i = 0; i < englishArray.length; i++) {
    if (!vowels.includes(englishArray[i]) &&  !consonants.includes(englishArray[i])) {
      nonLetters.push(englishArray[i]);
    }
  }

  for (i = englishArray.length; i >= 0; i--) {
    if (nonLetters.includes(englishArray[i])) {
      englishArray.splice(i, 1);
    } else {
    }
  }

  for (i = 0; i < englishArray.length; i++) {
    if (consonants.includes(englishArray[i])) {
      wordConsonants.push(englishArray[i]);
    } else if (englishArray[i] === "u" && englishArray[i - 1] === "q") {
      wordConsonants.push(englishArray[i]);
    } else {
      break;
    }
  }

  if (vowels.includes(englishArray[0])) {
    pigLatin = englishArray.join("");
    return pigLatin + "way";
  } else if (wordConsonants && consonants.includes(englishArray[0])) {
    englishArray = englishArray.concat(wordConsonants);
    englishArray.splice(0, wordConsonants.length);
    pigLatin = englishArray.join("");
    return pigLatin + "ay";
  } else {
    return english;
  }
}


  $(document).ready(function() {
    $("form#english").submit(function(event) {
      event.preventDefault();
      var input = $("#inputText").val();
      var output = translate(input);
      $("#translated").text(output);
    });
  });
