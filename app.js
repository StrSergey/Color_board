const board = document.querySelector('#board')
//создаем массив с цветами
const colors = ['#B2D732', '#66B032', '#347C98', '#0247FE', '#4424D6', '#8601AF']
const SQUARE_NUMBER = 460

//проходимся по массиву
for (let i = 0; i < SQUARE_NUMBER; i++) {
  //создаем при прохождении блоки
  const square = document.createElement('div')
  square.classList.add('square')

  //добавляем слушателя события для каждого квадратика ПРИ НАВЕДЕНИИ, с выполнением функции
  square.addEventListener('mouseover', () => setColor(square))

  //добавляем слушателя события для каждого квадратика ПРИ УБИРАНИИ, с выполнением функции
  square.addEventListener('mouseleave', () => removeColor(square))

  //добавляем в html созданный блок
  board.append(square)

}

//создаем функцию для изменениея цвета
function setColor (element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  //добавим объема =)
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

//функция сдля случайного выбора цвета
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}