/**
 * ES6+ JavaScript
 */

// 1. let, const (💩 and var)
// 재할당이 가능하면 let
// 재할당이 필요없으면 const
// let -> 변수, const -> 상수 ? -> 잘못배운것! arr, obj는 얕은 참조 가능

let reassign = 'assign';
reassign = 'hello';

const nickname = 'effy';
// nickname = 'chang'; // !!ERROR!!

// 2. arrow function
// 2-1. 함수 선언문
function printHello1() {
  console.log('Hello');
}

// 2-2. 함수 표현식 -> 표현식 ? -> 값으로 평가될 수 있는 식
// 10 + 20 = 30
// 기명 함수 -> 권장 -> 디버깅이 쉬워서
// 익명 함수
const printHello2 = function printHello2() {
  console.log('Hello');
}; // ✅ 무기명 함수로 작성해도 동일하게 동작하는 이유!
printHello2(); // ✅ 호출되는 함수는 뒤에 아님! 외부에서는 파악할 수 없기에 변수(방)의 이름으로 호출되는 것. 방이라고 생각!!!!

// 2-3. 화살표 함수
// 함수의 매개변수로 이용되도록
function func(callback) {
  callback();
}
const arrowFunc = () => {
  console.log('hello');
};
arrowFunc();

// 3. Destructuring
// 배열과 객체의 값을 비구조화해서 할당
const [a, b, c] = ['apple', 'banana', 'cherry'];
console.log(a); // apple
console.log(b); // banana
console.log(c); // cherry

const user = {
  name: 'effy',
  age: 29,
  gender: 'femail',
};
// 객체의 키 값과 키워드가 일치해야함
// 선택적으로 담아줄 수도 있음
const { username, age, gender } = {
  username: 'effy',
  age: 29,
  gender: 'femail',
};
console.log(username); // effy
console.log(age); // 29

// 4. Spread Oprator (...)
let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num1); // 20
console.log(num2); // 10 원시값은 값을 담게 됨

// Shallow Copy <-> 깊은 복사
// 복사한 배열이 원본 배열과 같이 변경되는 형태로 복사되는것을 얕은 복사라 일컫는다
// 주소값이 복사되어져 해당 주소값을 가르키고 있음 = 참조값
const arr1 = [1, 2, 3];
const arr2 = arr1; // 참조값을 복사 '얕은 복사'
const arr3 = [...arr2]; // 새로운 배열을 생성하여(만들었기 때문에) arr1을 '깊은 복사'

arr1.push(4);
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

const numbers1 = [1, 2];
const numbers2 = [3, 4];
const combined = [numbers1, numbers2];
console.log(combined); // [[1, 2], [3, 4]]
const combinedSpread = [...numbers1, ...numbers2]; // 전개 구문
console.log(combinedSpread); // [1, 2, 3, 4]

const user1 = {
  name: 'effy',
};
const user2 = { ...user1 };
user1.name = 'chang';
console.log(user1);
console.log(user2); // 깊은 복사

// 병합
// 동일한 속성명이 겹치면 뒤에 추가된 값으로 덮여짐
const juniorDeveloper = {
  name: 'bob',
  age: 20,
};
const techStack = {
  name: 'effy',
  typeScript: 'high',
  javaScript: 'high',
};
const combinedObj = { ...juniorDeveloper, ...techStack };
console.log(combinedObj);

// 나머지 매개변수
function add(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const sum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum); // 55
