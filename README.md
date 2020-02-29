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

## Callback
## Promise
* `then` 키워드에 대해서 __체이닝__ 이 가능하다.
## vuex
* Compoent <-> Vuex <-> API
* 컴포넌트 레벨이 깊어지거나 관계가 복잡해졌을 때 사용하면 유용
* actions 에서 mutations 에 접근할 수 있도록 인자값 `context` 가 제공된다.
```javascript
FOO(context) {
  // ...
  context.commit('blahblah', response.data);
}
```

## 객체 디스트럭처링 (Destructuring) : 구조 분해 할당
```javascript
// ES6 Destructuring
const obj = { firstName: 'Ungmo', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee
```
* ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트로 할당한다. 이때 할당기준은 프로터티 키이다.

## mapState
> vuex 의 store 값을 헬퍼함수를 통해서 획득한다.   
> mapState 보단, vuex 의 `getters` 를 이용하기도 한다.

