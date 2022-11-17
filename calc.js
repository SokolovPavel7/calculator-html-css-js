let a = ''; // first number
let b = ''; // second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = ''; // first number and result
  b = ''; // second number
  sign = ''; // знак
  finish = false;
  out.textContent = 0; //  Свойство textContent хранит в себе текстовое содержимое элемента.
}
// Метод querySelector позволяет получить элемент страницы по произвольному селектору CSS
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  // Нажата не кнопка: если поле содержит  класс btn, то это кнопка. Если не содержит (!), то выходим и ничего не делаем
  if (!event.target.classList.contains('btn')) return;
  // Нажата кнопка clearAll: Так как кнопка ас уже прописана, глушим ее
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  // получаю нажатую кнопку: считываю нажатую кнопку и заношу ее в переменную key
  const key = event.target.textContent;

  // Если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  //Если нажата клавиша + - X /
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }
  // Нажата кнопка =
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case '+':
        a = +a + +b;
        break;
      case '-':
        a = a - b;
        break;
      case 'X':
        a = a * b;
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Ошибка!';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};
