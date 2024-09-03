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

