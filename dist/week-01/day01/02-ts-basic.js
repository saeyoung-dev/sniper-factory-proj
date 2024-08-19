"use strict";
/**
 * TypeScript
 * js의 슈퍼셋 언어, 정적 언어
 * js는 런타임 시 타입 지정, ts는 컴파일 시 타입 확인, 컴파일 에러 추적 가능
 * 값에 타입 지정 -> 원시값(기본 자료형), 객체값(참조 자료형)
 */
// 기본 자료형 : number, string, boolean, null, undefined, Symbol, BigInt
{
    let username = 'effy';
    let age = 10;
    let boal = true;
    let isNull = null;
    let isUndefined = undefined;
    let isSymbol = Symbol('key');
}
// 참조 자료형 : object, array, function
{
    let user = {
        name: 'effy',
        age: 29,
        job: 'develper',
        isActive: true,
    };
    console.log(user.name);
    const cherry = {
        name: 'cherry',
        owner: 'effy',
        age: 20,
    };
    let obj1 = {
        name: 'effy',
        numberArr: [1, 2],
    };
}
// 배열의 타입
{
    let numberArr = [1, 2, 3];
    let strArr = ['a', 'b', 'c'];
    // strArr.push(1); !!ERROR : string only!!
    let objArr = [
        { name: 'effy', age: 29 },
        { name: 'chang', age: 30 },
    ];
    // Tuple 타입과 길이를 고정
    let tupleArr = [1, 'hello'];
    // tupleArr.push(true); !!ERROR!!
}
// 함수의 타입
// 매개변수 + 반환 값에 타입을 지정해주는것
// function name(n1: 매개변수타입): 반환타입 {}
// 함수 표현식
// 1. 함수 선언문처럼 매개변수와 반환값의 타입을 지정하는법
// 2. 변수에 타입을 지정하는 법
{
    function add(n1, n2) {
        return n1 + n2;
    }
    console.log(add(1, 2));
    // const substraction1: (n1: number, n2: number) => number = (n1, n2) => n1 - n2;
    const substraction2 = (n1, n2) => n1 - n2;
    console.log(substraction2(10, 3));
    // void
    function printHello() {
        console.log('hello');
    }
}
// QUIZ
// 다음 함수들을 타입스크립트로 작성하고 타입을 정의해 보세요.
// - 두 숫자를 더하고 결과를 반환하는 함수
const add = (a, b) => a + b;
console.log(add(1, 2));
// - 문자열을 받아서 문자열을 반환하는 함수
const concat = (a, b) => {
    if (a.trim() !== '' && b.trim() !== '') {
        return a + b;
    }
};
console.log(concat('effy', 'chang'));
// - 불리언 값을 인자로 받아서 아무것도 반환하지 않는 함수 (void 반환)
const getState = (state) => {
    console.log(state);
};
getState(true);
// - 문자열에서 가장 긴 단어를 반환하는 함수
const inputWord = `Hello i am effy, Good to see you!`;
const getLongestWord = (word) => {
    const converted = word.split(' ').map((item) => item.replace('/-,.!?/g', ''));
    const longest = converted.reduce((longest, current) => longest.length > current.length ? longest : current);
    return longest;
};
console.log(getLongestWord(inputWord));
// [연습문제 - 암스트롱 수 구하기]
// 100부터 999까지 암스트롱 수를 구하세요
// 암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다.
// 예를 들어 1 5 3 = 1 + 125 + 27 입니다.
// 이와 같은 수를 암스트롱의 수라고 말합니다.
const getAmstrong = (num) => {
    const splited = num.toString().split('');
    console.log(splited);
};
getAmstrong(123);
