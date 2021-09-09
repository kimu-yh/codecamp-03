export default function TypescriptPage() {

  //문자타입 - 타입 추론
  let aaa: string = "안녕하세요"
  aaa = "straw"

  //문자타입
  let bbb: string;
  bbb = "반갑습니다"
  bbb = "rose"

  //숫자타입
  let ccc: number = 5
  ccc = 6

  //배열타입
  let ddd: number[] = [1, 2, 3, 4, 5] //배열안의 요소가 숫자만 가능
  let eee: (number | string)[] = ["one", 2, 3, 4, 5]// 배열안의 요소가 숫자이거나 문자가 가능
  let fff: (number[] | string[]) = [1, 2, 3, 4, 5, 6] //배열의 전체요소가 숫자이거나 전체요소가 문자가 가능

  //객체타입
  interface IProfile {
    school: string,
    age: number
  }

  let profile: IProfile = {
    school: "다람쥐 초등학교",
    age: 13
  }

  profile.age = 15

  return <div>타입스크립트 페이지입니다</div>
}