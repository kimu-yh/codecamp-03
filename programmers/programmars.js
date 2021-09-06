//연습문제
//1.
let name = '김여현';

//2.
name = '철수';

//3.
fruits = ["사과", "바나나", "파인애플"]

//4.
let lastIndex = fruits.length - 1;
newFruits.push(fruit[lastIndex]);

//5.
let newArray = students.slice(0, 3);

//6.
fruits = fruits.map(x => "맛있는 " + x);

//7. 
const number = "01012345678";

let head = number.slice(0, 3);
let body = number.slice(3, 7);
let tail = number.slice(7);

let cellPhoneNumber = [head, body, tail];

//8. 
student.name = "철수";

//9. 
student.school = school;

//10.
delete student.drink;

//11.
classmates[1].school = "다람쥐초등학교";

//12. 문제가 없음

//13.
typeof str 
typeof number 

//14.
Array.isArray(array)
Array.isArray(object)

//15.
str = String(num);

//16.
1 + "1" //"11"

1 - "1" // 0

"1" + "1" //"11"

1 * "1" // 1

3 * "A" //NaN

1 + 1 + '1' //"21"

'1' + 1 + 1 //"111"

"11" - 1 // 10

"11" + 1 //"111"

"홍" + "길동" //"홍길동"

20 === "20" //false

20 == "20" //true

!true //false

//17.
(20 >= 10) && (20 === 10) //false

(20 === 10) || (10 === 10) //true

//18.
function boolean(input1, input2) {
	return input1 || input2 ? "true" : "false";
}

//19.
function evenOdd(num){
  if (num === 0) {
  return "Zero";
  } else if (num % 2 === 0) {
	return "Even";
	} else {
	return "Odd"
  }
}

//20.
function temperature(num){
  if (num <= 18) {
  return "조금 춥네요"
  } else if (num >= 19 && num <= 23) {
  return "날씨가 좋네요" 
  } else {
  return "조금 덥습니다"
  }
}

//21.
function days(month){
	if (month === 2) {
	return 28
	} else if (month === 4 || month === 6 || 
    month === 9 || month === 11) {
  return 30
  } else {
  return 31
	}
}

//22.
function calculator(num1, num2, operator){
	if (operator === "+") {
		return num1 + num2;
	} else if(operator === "-") {
		return num1 - num2;
	} else if (operator === "*") {
		return num1 * num2;
  } else if (operator === "/") {
		return num1 / num2;
	} else {
		return "올바른 입력이 아닙니다."
	}
}

//23.
function sum(num) {
	let count = 0;
  for (let i = 1; i <= num; i = i + 1) {
		count = count + i;

		// 1번 : 0 + i = 1;
    // 2번 : 1 + 2 = 3;
		// 3번 : 3 + 3 = 6;
    // 4번 : 6 + 4 = 10;
    // 5번 : 10 + 5 = 15;
  }
  
 return count;
}

//24.
function countLetter(str) {
	let count = 0;
	str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
		if (str[i] === "a") {
		count += 1;
		}
  }
return count;
}

//25.
function makeNumber(num) {
	let numString = '';
	for (let i = 1; i <= num; i++) {
		numString += i + "-";
  }
return numString.slice(0, -1);
}

//26.
function makeOdd(num) {
	let result = '';
	for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
    result += i;
    } 
	}
	return result;
}

//27.
function bigNum(str) {
	let biggest = 0;
  for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) >= biggest) {
		biggest = Number(str[i]);
	  } 
	}
return biggest;
}

//28.
function random() {
  let number = 50;
	let random = Math.random()*100;
	return random >= number ? "Win" : "Lose";
}

//29.
//function declaration
function divide(num1, num2) {
	return num1/num2
}

//function expression
let divide = function(num1, num2) {
	return num1/num2
}

//arrow function
let divide = (num1, num2) => num1/num2

//30.
let validation = (pw1, pw2) => {
	let message = true;
	if (pw1 !== pw2) {
	   message = "비밀번호를 다시 확인해주세요" 
  } else {
	  if (pw1.length < 8 || pw1.length > 16) {
		message = "비밀번호는 8~16 자리여야 합니다"
		}	
	}
return message;
}

//3일차 업로드 (2021. 9.2 오전 진행분)
//반복문: 숫자 더하기 23.
let sum = (num) => {
	let result = 0;
	for (let i = 1; i <= num; i++) {
		result += i
	}
	return result;
}

//반복문: 특정 문자열 세기 24.
let countLetter = (str) => {
	let count = 0;
	str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
		if (str[i] === "a") {
		count += 1;
		}
  }
return count;
}

//반복문: 문자열 삽입 25.
let makeNumber = (num) => {
	let result = 1;
	for (let i = 2; i <= num; i++) {
		result += '-' + i
	}
	return result;
}

//반복문: 홀수 문자열 26.
let makeOdd = (num) => {
	let result = '1';
	for (let i = 2; i <= num; i++) {
		if (i % 2 === 1) {
			result += i
		}
	}
	return result
}

//반복문: 가장 큰 수 찾기 27.
function bigNum(str) {
	let biggest = 0;
  for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) >= biggest) {
		biggest = Number(str[i]);
	  } 
	}
return biggest;
}

//조건문: 점수에 따른 등급 41.
function grade(score) {
	let result = "";
  if (score < 0 || score > 100 ) {
		result = "잘못된 점수입니다"
	} else if (score >= 90) {
		result = "A"
	} else if (score >= 80) {
		result = "B"
	} else if (score >= 70) {
		result = "C"
	} else if (score >= 60) {
		result = "D"
	} else {
		result = "F"
	}
	return result
}

//반복문: 마이페이지 43.
const myShopping = [
	{ category: "과일", price: 12000　},
	{ category: "의류", price:10000　 },
	{ category: "의류", price: 20000　},
	{ category: "장난감", price: 9000 },
	{ category: "과일", price: 5000　 },
	{ category: "의류", price: 10000  },
	{ category: "과일", price: 8000　　},
	{ category: "의류", price: 7000　　},
	{ category: "장난감", price: 5000  },
	{ category: "의류", price: 10000　 },
]
/*  해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
		"의류"를 구매한 횟수에 따라 등급을 나타내세요.

		등급표
		"0~2"  ⇒ Bronze
		"3~4" ⇒ Silver
		5이상 ⇒ Gold 
*/

// 구매한 횟수를 담아주는 변수
// 구매한 총 금액을 담아주는 변수
// 구매한 횟수에 따라 결정되는 등급을 담아주는 변수
let count = 0;
let price = 0;
let grade = "";
let result = '';

for(let i = 0; i < myShopping.length; i = i + 1) {
	if(myShopping[i].category === "의류") {
		count = count + 1;
		price = price + myShopping[i].price;

		if(count >= 0 && count <= 2) {
			grade = "Bronze";
		} else if(count >= 3 && count <= 4) {
			grade = "Sliver";
		} else if(count >= 5) {
			grade = "Gold";
		}
	}
	result = `의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 등급은 ${grade}입니다.`
	console.log(result)
	return result
}

//2주차 1일. 문자열을 정수로 바꾸기
function solution(s) {
	// return s/1
	return Number(s)
}

//2주차 1일. 같은 숫자는 싫어
function solution(arr)
{ let answer = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== arr[i+1] && answer.push(arr[i])
    }
 return answer
}

//2주차 1일. 핸드폰 번호 가리기
function solution(phone_number) {
	let answer = '';
	for (let i = 0; i < phone_number.length; i++) {
			if (i < phone_number.length - 4) {
					answer += '*'
			} else {
					answer += phone_number[i]
			}
	}
	return asnswer;
}

//7일차 (2주차 2일) 짝수와 홀수
function solution(num) {
	let answer = num % 2 === 0? "Even": "Odd";
	return answer;
}

//7일차 평균 구하기
function solution(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
	} 
	return sum/arr.length;
}

//7일차 가운데 글자 가져오기
function solution(s) {
	let mid = s.length/2;
	if (s.length%2 === 0) {
	 return s.slice(Math.floor(mid - 0.5), Math.floor(mid - 0.5) + 2)
	} else {
	 return s.slice(mid, mid + 1)
	}
}

//7일차 서울에서 김서방 찾기
function solution(seoul) {
	return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}