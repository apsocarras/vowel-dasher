// Business Logic

function vowelDasher(sentence) {

  let dashedSentence = [];

  for (let i = 0; i < sentence.length; i += 1) {

    if (["a","e","i","o","u"].includes(sentence[i])) {
      dashedSentence.push("-");
    } else {
      dashedSentence.push(sentence[i])
    }
  }

  return dashedSentence.join("");
}

// UI Logic 

window.addEventListener("load", function() {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const sentenceInput = document.getElementById("sentenceInput").value;
    const outputDiv = document.querySelector("div");
    const outputParagraph = document.createElement("p");

    outputDiv.append(outputParagraph);
    outputParagraph.append(vowelDasher(sentenceInput));

  });

});


