const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', (e) => {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', (e) => {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})
