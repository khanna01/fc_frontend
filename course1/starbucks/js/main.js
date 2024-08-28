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

const badgeEl = document.querySelector('header .badges')

// 스크롤시 배지 나타나게/사라지게
window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeEl.style.display = 'none'
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      })
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block'
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      })
    }
  }, 300),
)

const fadeEls = document.querySelectorAll('.visual .fade-in')
// 순차적으로 애니메이션 적용하면서 나타나게
fadeEls.forEach((fade, index) => {
  gsap.to(fade, 1, {
    // 처음 요소 : 0.7초 후 적용, 두 번째 요소 : 1.4초 후 적용, ...
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
})
