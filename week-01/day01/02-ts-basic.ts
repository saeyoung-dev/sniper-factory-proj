/**
 * TypeScript
 * js의 슈퍼셋 언어, 정적 언어
 * js는 런타임 시 타입 지정, ts는 컴파일 시 타입 확인, 컴파일 에러 추적 가능
 * 값에 타입 지정 -> 원시값(기본 자료형), 객체값(참조 자료형)
 */

// 기본 자료형 : number, string, boolean, null, undefined, Symbol, BigInt
{
  let username: string = 'effy';
  let age: number = 10;
  let boal: boolean = true;
  let isNull: null = null;
  let isUndefined: undefined = undefined;
  let isSymbol: symbol = Symbol('key');
}

// 참조 자료형 : object, array, function
{
  let user: {
    name: string;
    age: number;
    job: string;
    isActive: boolean;
  } = {
    name: 'effy',
    age: 29,
    job: 'develper',
    isActive: true,
  };
  console.log(user.name);

  interface Animal {
    name: string;
    owner: string;
    age: number;
  }

  const cherry: Animal = {
    name: 'cherry',
    owner: 'effy',
    age: 20,
  };

  let obj1: { name: string; numberArr: number[] } = {
    name: 'effy',
    numberArr: [1, 2],
  };
}

// 배열의 타입
{
  let numberArr: Array<number> = [1, 2, 3];
  let strArr: string[] = ['a', 'b', 'c'];
  // strArr.push(1); !!ERROR : string only!!
  let objArr: { name: string; age: number }[] = [
    { name: 'effy', age: 29 },
    { name: 'chang', age: 30 },
  ];
  // Tuple 타입과 길이를 고정
  let tupleArr: [number, string] = [1, 'hello'];
  // tupleArr.push(true); !!ERROR!!
}

// 함수의 타입
// 매개변수 + 반환 값에 타입을 지정해주는것
// function name(n1: 매개변수타입): 반환타입 {}

// 함수 표현식
// 1. 함수 선언문처럼 매개변수와 반환값의 타입을 지정하는법
// 2. 변수에 타입을 지정하는 법
{
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  console.log(add(1, 2));
  // const substraction1: (n1: number, n2: number) => number = (n1, n2) => n1 - n2;
  const substraction2 = (n1: number, n2: number): number => n1 - n2;
  console.log(substraction2(10, 3));

  // void
  function printHello(): void {
    console.log('hello');
  }
}

// QUIZ
// 다음 함수들을 타입스크립트로 작성하고 타입을 정의해 보세요.

// - 두 숫자를 더하고 결과를 반환하는 함수
const add = (a: number, b: number) => a + b;
console.log(add(1, 2));

// - 문자열을 받아서 문자열을 반환하는 함수
const concat = (a: string, b: string) => {
  if (a.trim() === '' || b.trim() === '') {
    throw new Error('❌ Empty string');
  }
  return a + b;
};
console.log(concat('hello', 'world'));

// - 불리언 값을 인자로 받아서 아무것도 반환하지 않는 함수 (void 반환)
const getState = (state: boolean): void => {
  console.log(state);
};
getState(true);

// - 문자열에서 가장 긴 단어를 반환하는 함수
const getLongestWord = (word: string) => {
  const converted = word.split(' ').map((item) => item.replace('/[^ws]/g', ''));
  const longest = converted.reduce((longest, current) =>
    longest.length > current.length ? longest : current
  );
  return longest;
};
const inputWord = `Hello, good to see you!`;
console.log(getLongestWord(inputWord));

// Better Version
const getLongString = (str: string): string =>
  str.split(' ').sort((a, b) => b.length - a.length)[0];

// [연습문제 - 암스트롱 수 구하기]
// 100부터 999까지 암스트롱 수를 구하세요

// 암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다.
// 예를 들어 1 5 3 = 1 + 125 + 27 입니다.

const isAmstrongNumber = (num: number): boolean => {
  const numStr = num.toString();
  const numDigits = numStr.length;

  const sumOfPowers = numStr
    .split('')
    .map((digit) => parseInt(digit, 10))
    .reduce((sum, digit) => sum + Math.pow(digit, numDigits), 0);

  return sumOfPowers === num;
};

const printAmstrongNumber = (): void => {
  for (let i = 100; i <= 999; i++) {
    if (isAmstrongNumber(i)) {
      console.log(i);
    }
  }
};

printAmstrongNumber();
