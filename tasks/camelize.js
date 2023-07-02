// my poor version

let string = "-webkit-transition";
console.log(camelize(string));
console.log(camelize1(string));

function camelize(str) {
    if (str.charAt(0) === '-') {
        str.charAt(1).toUpperCase();
    }
    let words = str.split("-");
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}

//Author's version

function camelize1(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }