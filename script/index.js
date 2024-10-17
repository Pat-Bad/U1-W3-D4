const lancio = function () {
  return Math.floor(Math.random() * 76) + 1
}

document.getElementById('lanciaDadi')
lanciaDadi.addEventListener('click', function () {
  document.getElementById('numeroEstratto')
  numeroEstratto.innerText = lancio()

  const allCells = document.getElementsByClassName('cellaSingola')
  for (let i = 0; i < allCells.length; i++) {
    if (numeroEstratto.innerText == allCells[i].innerText) {
      allCells[i].style.backgroundColor = 'red'
    }
  }
})
const tabellone = document.getElementById('tabellone')

const createCells = function () {
  for (let i = 0; i < 76; i++) {
    const singleCell = document.createElement('div')
    singleCell.className = 'cellaSingola'
    singleCell.innerText = i + 1
    tabellone.appendChild(singleCell)
  }
}

createCells()
