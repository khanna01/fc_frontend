# 스타벅스 예제 강의 메모장
<hr>

인라인 요소 -> 글자 취급 요소. 글자가 baseline을 기준으로 놓이기 때문에 baseline 아래 하단 부분이 있음

img 태그도 인라인 요소이기 때문에 하단 부분 여백이 생김 -> display: block; 으로 설정하여 해결

<hr>

a태그 링크가 준비되어 있지 않다면 임시로 작성하는 방법 2가지
1. 해시(\#)
2. (권장) javascript:void(0) - 자바스크립트 동작이 아무것도 일어나지 않는다

```html
<a href="#"></a>
<a href="javascript:void(0)"></a>
```

<hr>

HTML 클래스 속성의 작명법 - **BEM** (Block Element Modifier)
- 요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분 표시
- 요소--상태 : Hyphen(Dash) 기호로 요소의 상태 표시

<hr> 

lodash 라이브러리의 _.throttle 함수 : 일정 시간마다 함수가 한 번 호출되도록 함
```javascript
_.throttle(실행할 함수, 시간)
```
사용 예시) 스크롤 이벤트 발생시마다 함수를 호출할 때 함수가 과다 호출되는 것을 방지

<hr>

gsap 애니메이션 처리 라이브러리
- to 함수
```javascript
gsap.to(요소, 지속시간, 옵션)
```

<hr>