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

  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: 'effy',
    age: 20,
  };
}
