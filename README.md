# 뷰 실무 강의 공부 By 인프런

## VSCODE 플러그인 추천
* VSCode 플러그인 리스트
* Atom Keymap : 아톰의 키 설정을 불러오는 플러그인
* Vetur : Vue.js 플러그인
* Night Owl : 코드 하이라이팅 플러그인
* Material Dark Syntax : 코드 하이라이팅 플러그인
* Google Material Icon Theme : 폴더 아이콘 테마
* ESLint : 자바스크립트 문법 검사 플러그인
* TSLint : 타입스크립트 문법 검사 플러그인
* Auto Close tag : HTML 태그 자동 닫기 플러그인
* Live Server : 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인

## Vue 스타일 가이드
* https://vuejs.org/v2/style-guide/

## CLI 2.x vs CLI 3.x
* 명령어
  * 2.x : vue init {프로젝트 템플릿 이름} {파일 위치}
  * 3.x : vue create {프로젝트 이름}
* 웹팩설정 여부
  * 2.x : 노출 X
  * 3.x : 노출 O
* 프로젝트 구성
  * 2.x : 깃헙의 템플릿 다운로드
  * 3.x : 플러그인 기반으로 기능 추가, 원하는 기능들을 중간에 추가할 수 있다.
* ES6 이해도
  * 2.x : 필요 X
  * 3.x : 필요 O

## CLI 3.x
* preset : 플러그인 구성을 설정을 의미
  * ex) default(babel, eslint)

## Vue LintOnSave
* https://cli.vuejs.org/config/#transpiledependencies

## 수행
* router/index.js
* views/**/*.vue 위치
  * vetur 이용, `vue` 명령어를 통한 뷰 디폴트 코드 자동완성

## This 키워드
* javascript 에서 `this` 키워드는 전역을 가리키고, 이런것들 방지하게 위해 es6 에서 `use strict` 가 있다.
* `this` 에서 전역으로 가리키는 경우가 있고, 생성자 함수를 가리키는 경우가 있다.
```javascript
function sum(a, b){
  console.debug(this);  // window
  return a + b;
}

function vue(el){
  console.debug(this);  // vue {}
  this.el = el;
}
```
* 비동기통신시 `this` 는 `undefined` 를 가리키지만, es6 부터는 화살표 함수를 이용한다면, `this` 는 실제 객체를 가리킬 수 있다.
  * 결과적으로 __화살표 함수__ 를 지향하는 것이 좋다.