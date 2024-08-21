/**
 * Type Alias
 * type에 별칭을 지정, 나만의 타입을 생성
 */

// 1. type alias는 자동 병합이 되지 않음
// 2. type alias는 상속 기능 불가
{
  type TUser = {
    name: string;
    age: number;
  };
  type TJob = {
    job: string;
  };
  type TUserAndJob = TUser & TJob; // intersection 병합

  const user: TUserAndJob = {
    name: 'bob',
    age: 20,
    job: 'sw developer',
  }; // 안내 문구가 출력

  interface IUser {
    [key: string]: string | number;
  }
  const user2: IUser = {
    name: 'effy',
    age: 20,
  };
}
