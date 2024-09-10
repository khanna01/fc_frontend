# 애플 아이패드 강의 예제 메모
<hr>
word-break : 단어 단위로 줄바꿈 처리 설정
영어는 단어 단위로 줄바꿈 처리가 됨
한국어도 단어 단위로 줄바꿈 처리하려면 word-break: keep-all;

<hr>

background-position: 좌우 | 상하;

<hr>

img태그 사용 시 alt 속성을 통해 대체 텍스트를 제공
웹 접근성을 위해 img 태그가 아닌 div 등의 태그에서는 글자를 작성하고 화면에서 보이지 않도록 할 것  
css의 text-indent 들여쓰기를 통해 text-indent: -9999px; 을 사용하여 배경이미지를 사용하면서 대체 텍스트를 작성하고 화면에서 보이지 않도록 함

<hr>

transition 적용 대상에 display는 없음 -> 요소가 나타나고 사라질 때 자연스러운 애니메이션을 적용하고 싶다면 display 속성을 사용하면 안됨  
=> visibility 속성으로 적용. transition 속성에 영향을 받아 **애니메이션 처리가 가능**
- 나타나게
  - visibility: hidden;
  - opacity: 0;

- 사라지게
  - visibility: visible;
  - opacity: 1;

<hr>

HTML 
html요소: document.documentElement
body요소: document.body

<hr>

position: sticky;
부모 요소 안에서만 동작

<hr>

블러처리
- 해당 요소를 블러 처리: filter: blur();
- 요소 배경을 블러 처리: backdrop-filter: blur();

<hr>

요소 박스에 그림자 적용
box-shadow: x축 | y축 | blur | spread | 색

<hr>

사이트에서 가장 먼저 보이는 영역을 hero 콘텐츠라고 함  

<hr>

글자 드래그하여 선택하는 거 방지 : user-select: none;
이미지 드래그 선택 방지도 가능 -> 이미지는 글자로 취급되기 때문  
이미지 드래그 방지(드래그하면 이미지 자체가 선택되어 마우스를 따라 움직임) : -webkit-user-drag: none; (일부 브라우저에서만)

<hr>

**CSS Vendor Prefixes (공급업체 접두사)**  
-webkit- (Chrome, Safari, iOS Safari / iOS WebView, Android, Edge)   
-moz- (Firefox)  
-ms- (Edge, Internet Explorer)  
-o- (Opera, Opera Mini)  

<hr>

z-index는 position이 static이 아니거나 position이 있어야 적용됨. 

<hr>

**CSS 변수**  
--변수명: 값;

사용 예시)
```css
.container {
  --red: red;
  --w: 100px;
  background-color: var(--red);
  width: var(--w);
}
```
CSS 변수 유효 범위 : 선언된 요소와 후손 요소

<hr>

margin을 이용한 가로 정렬  
\*너비가 지정되어 있어야 함\*
- 왼쪽 정렬(오른쪽 마진을 자동으로 할당) : margin-right: auto
- 가운데 정렬 : 0 auto
- 오른쪽 정렬(왼쪽 마진을 자동으로 할당) : margin-left: auto

<hr>

내부 그림자 생성하려면 box-shadow에 inset 키워드 사용.  
예) box-shadow: inset 1px 1px 3px rbga(0, 0, 0, .1);

<hr>

천 단위 컴마 숫자 표시 방법  
toLocaleString() 함수 이용 - 매개변수로 'en-US', 'ko-KR' 등으로 작성
```javascript
  const price = 999000;
  console.log(price.toLocaleString('ko-KR')) 
  // '999,000'
```

<hr>

ol 태그에서 각 li 태그에 10진수 숫자 표시 : list-style: decimal;

<hr>

윗첨자 요소 : <sup>

<hr>

반응형 레이아웃을 위한 CSS @media 
@media - 규칙
타입 and (기능) - 미디어 쿼리
```css
@media 타입 and (기능) {
  스타일
}
```
타입 : screen, tv, all ...
all : 모든 타입 (기본값)
all and는 생략이 가능하여 @media (기능) { 스타일 } 로 작성이 가능함  

기능
- orientation: portrait -> 가로 너비 x보다 세로 높이 y가 더 큰 경우
- orientation: landscape -> 가로 너비 x가 세로 높이 y보다 더 큰 경우

하나의 CSS파일이 아닌 기능별로 파일을 관리할 수도 있음.
```html
...
<link rel="stylesheet" href="./main.css" />
<!-- 중단점 max-width:1200px일 때 적용할 스타일을 작성한 파일과 연결-->
<link rel="stylesheet" href="./main.medium.css" media="타입 and (max-width:1200px)" />
<!-- 중단점 max-width:800px일 때 적용할 스타일을 작성한 파일과 연결-->
<link rel="stylesheet" href="./main.small.css" media="타입 and (max-width:800px)" />
```

<hr>

// html 요소
document.documentElement

<hr>

