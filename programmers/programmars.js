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
