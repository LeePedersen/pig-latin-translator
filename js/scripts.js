
var vowels = ["a", "e", "i", "o", "u"];

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var translate = function(english) {
  english = english.toLowerCase();
  var englishArray = english.split("");

  if (vowels.includes(englishArray[0])) {
     pigLatin = englishArray.join("");
     console.log(pigLatin);
    return pigLatin + "way";
  } else if (consonants.includes(englishArray[0])) {
    englishArray.push(englishArray[0]);
    englishArray.shift();
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
