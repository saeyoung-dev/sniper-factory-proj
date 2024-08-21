{
  /**
   * Union Type | (or)
   * 피연산자 중에서 truthy한 값을 만족할 경우
   */
  let strAndNum: number | string = 10;
  strAndNum;
  let user = {
    name: 'ellie',
    money: 0,
  };
  const arr: (number | string)[] = [1, 'effy'];

  /**
   * Intersection Type && (and)
   * 모든 피연산자가 truthy 조건을 만족한 경우
   */
  const intership: { isStudent: boolean } & { isWorking: boolean } = {
    isStudent: true,
    isWorking: true,
  };
}

{
  /**
   * interface 규격 사항
   * 객체의 타입을 지정할 때 사용 (X)
   * 나만의 타입 룰을 사용한다
   */

  // 1.1 병합
  // 1.2 상속
  // 1.3 readonly
  // 1.4 optional property

  interface User {
    readonly name: string;
    readonly age: number;
  }
  // interface 병합 : 똑같은 식별자의 인터페이스를 하나로 합쳐주는 것을 의미
  const user: User = {
    name: 'effy',
    age: 20,
    email: 'email@email.com',
  };
  // 아래에 위치하더라도 적용이 됨! 컴파일 과정을 거치는 정적 언어이므로 전체 내용을 검증하게됨
  interface User {
    email: string;
  }

  // Index Signature
  interface Car {
    [key: string]: string | number;
  }
  const car: Car = {
    name: 'Mercedez',
    color: 'Black',
  };
}
