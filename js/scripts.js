// UI Logic 

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