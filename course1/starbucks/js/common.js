const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

// 검색버튼 클릭하면 검색 입력창에 포커스 줌
searchEl.addEventListener('click', (e) => {
  searchInputEl.focus()
})

// 검색아이콘 누르면 검색 입력창이 나타남
searchInputEl.addEventListener('focus', (e) => {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

// 검색 입력창 블러
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
