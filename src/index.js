function convertFirstLetter() {
  var sentence = document.getElementById("inputText").value;

  if (sentence.length > 0) {
    var firstChar = sentence.charAt(0);
    var restOfSentence = sentence.slice(1);

    if (firstChar >= "a" && firstChar <= "z") {
      firstChar = String.fromCharCode(firstChar.charCodeAt(0) - 32);
    }

    var capitalizedSentence = firstChar + restOfSentence;
    document.getElementById("result").innerText = capitalizedSentence;
  } else {
    document.getElementById("result").innerText = "Please Enter Your Sentence";
  }
}
