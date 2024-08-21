/**
 * Type Inference 타입 추론
 * 할당된 값을 보고 타입을 자동으로 추론해주는 특징
 */

{
  let str = 'A';
  str = 'B';

  function printHello() {
    console.log('hello');
  }
  function num(n1: number, n2: number) {
    return n1 + n2;
  }
}
