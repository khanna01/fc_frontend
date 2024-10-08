const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

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

      // 상단 이동 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      })
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block'
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      })

      // 상단 이동 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      })
    }
  }, 300),
)

// 상단 이동 버튼을 누르면 화면 맨 위로 이동하도록
toTopEl.addEventListener('click', (e) => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in')
// 순차적으로 애니메이션 적용하면서 나타나게
fadeEls.forEach((fade, index) => {
  gsap.to(fade, 1, {
    // 처음 요소 : 0.7초 후 적용, 두 번째 요소 : 1.4초 후 적용, ...
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
})

// new Swiper(선택자, 옵션) : 선택자는 적용할 요소

// Swiper Vertical Slides
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
})

// Swiper horizontal Slides
new Swiper('.promotion .swiper', {
  // 한 번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백 (픽셀)
  spaceBetween: 10,
  // 1번 슬라이드가 가운데 보이도록
  centeredSlides: true,
  // 5초마다 다음 슬라이드로
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 클릭하여 제어가 가능하도록
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
})

new Swiper('.awards .swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

// 버튼을 누르면 프로모션 부분이 보이게
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김
    promotionEl.classList.add('hide')
  } else {
    // 보임
    promotionEl.classList.remove('hide')
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 애니메이션 적용 함수
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    // 무한반복하도록
    repeat: -1,
    // 재생한 애니메이션을 뒤로 재생
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section')
spyEls.forEach((el) => {
  new ScrollMagic.Scene({
    // 보여짐 여부를 감시할 요소
    triggerElement: el,
    // 뷰포트 어느 지점에서 요소가 나타나면 트리거 될 것인지 설정
    // 해당 지점에서 요소가 나타나면 setClassToggle 함수 실행
    triggerHook: 0.8,
  })
    .setClassToggle(el, 'show')
    .addTo(new ScrollMagic.Controller())
})
