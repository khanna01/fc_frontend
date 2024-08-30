# Git, GitHub
<hr>

### `git init`

현재 프로젝트에서 변경사항 추적(버전 관리)을 시작

### `git add <특정파일>`

변경사항을 추적할 특정 파일을 지정 -> staged 상태가 됨

### `git add . ` ` git add -A`

모든 파일의 변경사항을 추적하도록 지정 -> 새로 생성된 파일, 수정된 파일, 삭제된 파일이 staged 상태가 됨

Git 저장소의 루트 디렉토리에서 실행할 때, 두 명령어는 완전히 동일하게 작동

**차이점:**

서브디렉토리에서 실행할 때 약간의 차이가 있을 수 있음

- git add .는 현재 디렉토리와 그 하위 디렉토리의 변경사항만 스테이징

- git add -A는 항상 저장소 전체의 변경사항을 스테이징

### `git commit -m '커밋메세지'`

메세지와 함께 버전을 생성

### `git remote add origin <원격 저장소 주소>`

origin이란 별칭으로 원격 저장소를 연결

### `git push origin master`

origin이란 별칭의 원격 저장소로 버전 내역 전송

### `git clone <저장소 주소>`

원격 저장소를 로컬에 복제

<hr>

## 버전 되돌리기 (Reset)

`git reset --hard HEAD~<되돌릴만큼의 버전 수>`

HEAD : 최신 버전을 가리킴
git reset --hard HEAD~1 이면 최신버전에서 한 버전 되돌리는 것

`git reset --hard ORIG_HEAD`

ORIG_HEAD : 기존의 헤드(되돌리기 전 헤드) 
한 번은 되돌릴 수 있음

<hr>

**원격 저장소에 올렸던 파일을 다시 .gitignore로 포함하는 방법**
1. .gitignore 생성, 작성
2. git rm -r --cached .
3. git add,commit,push 진행

<hr>

## Git 브랜치 전략 - Git Flow

브랜치 관리
- main(master) : 기본/메인/제품 브랜치
- dev(develop) : 다음 제품 출시를 위해 여러 기능을 병합하는 브랜치
- feature/* : 각 기능 개발을 위한 브랜치
- release : 이번 제품 출시 직전 최종 테스트(QA)를 위한 브랜치
- hotfix : 제품에 버그가 확인되었을 때 긴급 수정을 위한 브랜치
