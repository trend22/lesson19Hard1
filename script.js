const inputText = document.querySelector('#inputText')
const result = document.querySelector('#result')

const getInputText = () => {
  console.log(inputText.value)
  result.textContent = inputText.value
}

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer)
    }
    this.lastCallTimer = setTimeout(() => f(args), t)
  }
}

console.dir(result)

inputText.addEventListener('input', debounce(getInputText, 300))
