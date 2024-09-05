// 장바구니
const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', (event) => {
  event.stopPropagation()
  if (basketEl.classList.contains('show')) {
    hideBasket()
  } else {
    showBasket()
  }
})

basketEl.addEventListener('click', (event) => {
  event.stopPropagation()
})

window.addEventListener('click', () => {
  hideBasket()
})

// 장바구니 드롭다운 메뉴 보이기
function showBasket() {
  basketEl.classList.add('show')
}

// 장바구니 드롭다운 메뉴 숨기기
function hideBasket() {
  basketEl.classList.remove('show')
}

// 검색
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', showSearch)

searchCloserEl.addEventListener('click', hideSearch)

searchShadowEl.addEventListener('click', hideSearch)

// 검색창 보이기
function showSearch() {
  headerEl.classList.add('searching')
  // html 요소
  document.documentElement.classList.add('fixed')
  headerMenuEls.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / searchDelayEls.length + 's'
  })
  setTimeout(() => {
    searchInputEl.focus()
  }, 600)
}

// 검색창 숨기기
function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuEls.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
  searchInputEl.value = ''
}

// 요소 가시성 관찰
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // entry.target.classList.remove('show')
      return
    }
    entry.target.classList.add('show')
  })
})
const infoEls = document.querySelectorAll('.info')
infoEls.forEach((infoEl) => {
  io.observe(infoEl)
})

// 비디오 재생
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', (e) => {
  // 비디오 재생
  video.play()
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
})

pauseBtn.addEventListener('click', (e) => {
  // 비디오 멈춤
  video.pause()
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
})
