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

//8일차 서울에서 김서방 찾기
function solution(seoul) {
	return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

//8일차 문자열 다루기 기본
function solution(s) {
	return s.length === 4 || s.length === 6 ? s.split('').filter(e => isNaN(e) === true).length === 0 ?
			true : false : false 
	/*
	if (s.length !== 4 && s.length !== 6) {
		return false;
	}
		const answer = s.split('').filter(str => isNaN(str) === true).length === 0
		return answer
	*/
 }


 //8일차 약수의 합
 function solution(n) {
	let sum = 0
	for (let i = 0; i <= Math.floor(n/2); i++) {
			if (n%i === 0) {
					sum += i
			}
	}
	return sum + n;
	/* 
	  let answer = 0;
    const array = new Array(n)
					.fill(1)
					.forEach((num, index) => {
						n % (num + index) === 0
							? answer += (num + index)
							: null
					})
    return answer;
	*/
}
 
//9일차 자릿수 더하기
function solution(n) {
	let answer = 0;
	n = String(n);
	n.split('').forEach(e => answer += Number(e));
	return answer;
}

//9일차 x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
	let arr = [x]
	for (let i = 1; i < n; i++) {
			arr[i] = x + x*i
	}
	return arr
}

/*
function solution(x, n) {
	const array =  new Array(n).fill(x).map((number, index) => {
		return number * (index + 1)
	})
	return array;
}
*/

//10일차: 문자열 내림차순으로 배치하기
function solution(s) {
	let answer = s.split('').sort().reverse().join('');
	return answer;
}
/* 	문자열 배열 오름차순 정렬
			arr.sort()

		문자열 배열 내림차순 정렬 (또는 위 식에서 .reverse() 추가)
			arr.sort((a, b) => {
			return a > b? -1: 1
			})
	  
		숫자 배열 오름차순 정렬
			arr.sort((a, b) => a - b )

	  숫자 배열 내림차순 정렬
			arr.sort((a, b) => b - a)
*/

//10일차: K번째수
function solution(array, commands) {
	let answer = [];
	commands.forEach(e => answer.push(array.slice(e[0]-1, e[1])
																		.sort((a, b) => a - b)[e[2]-1]))
	return answer;
}

//11일차: 문자열 내 p와 y의 개수
function solution(s){
	s = s.toLowerCase();
		 return  [...s].filter(e => e === 'p').length === [...s].filter(e => e === 'y').length
}
/*
	const check = { p: 0, y: 0}
	s = s.toLowerCAse()
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'p' || s[i] === 'y') {
			check[s[i]] += 1
		}
	}
	return check.p === check.y
*/

/*
	const check = {}
	const result = s.toLowerCase().split('').forEach(str => {
		check[str] === undefined ? check[str] = 1 : check[str] += 1
	})
	return check.p === check.y
*/

//11일차: 이상한 문자 만들기
function solution(s) {
	let arr = s.split(' ');
	let answer = []
	let word = ''
	for (let i = 0; i < arr.length; i++) {
			
			for (let j = 0; j < arr[i].length; j++) {
			 word +=  j % 2 === 0
					?  arr[i][j].toUpperCase()
					:  arr[i][j].toLowerCase()
			}
			answer.push(word);
			word = '';
	}
	 return answer.join(' ')
}
/* 단어 별로 인덱스 값을 판단하는 변수
let idx = 0;
for (let i = 0; i < s.length; i++) {
	if ( s[i] === " ") {
		idx = 0;
		answer += " "
	} else {
		answer = answer + ( idx % 2 === 0
			? s[i].toUpperCase() : s[i].toLowerCase() 
			)
			idx += 1
	}
}
return answer
*/

/*
const answer = s.split(" ").map( str => {
	return str.split("").map(letter, i) => {
		return i % 2 === 0
		? letter.toUpperCase()
		: letter.toLowerCase()
	}).join("")
}).join(" ")
*/

//12일차 자연수 뒤집어 배열로 만들기
function solution(n) {
	return String(n).split('').reverse().map(e => Number(e))
}

//12일차 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
	let answer = []
	let result = arr.filter(e => e % divisor === 0)
	result.length === 0 
			? answer.push(-1)
			: answer.push(...result)
	return answer.sort((a, b) => a - b)
} 

//13일차 콜라츠 추측
function solution(num) {
	let i = 0
			while(i < 500) {
					if (num === 1) return i;
					num = num % 2 === 0 
					? num/2
					: num*3 + 1
					i++;
			}
	return -1
}
/*
for (let i = 0; i < 500; i++) {
	if (num === 1) {
		count = i;
		break;
	} 
	if (num % 2 === 0) {
		num = num / 2
	} else {
		num = num * 3 + 1
	}
}
return count;
}
*/
/* 
let count =  0
while (num !== 1) {
	if (count >= 500) {
		return -1
	}
	count += 1
	if (num % 2 === 0) {
		num = num / 2
	}  else {
		num =  num * 3 + 1
	}
	return count;
}
*/

//14일차 두 개 뽑아서 더하기
function solution(numbers) {
	let answer = []
	for (let i = 0; i < numbers.length; i++) {
			for(let j = 0; j < numbers.length; j++) {
					if (i !== j && !answer.includes(numbers[i] + numbers[j])) {
							answer.push(numbers[i] + numbers[j])
					}
			}
	}
 return answer.sort((a, b) => a - b)
}
/*
	let answer = []
	numbers.forEach((num, i) => {
		numbers.slice(i + 1).forEach(num2 =>
			const sum = num1 + num2;
			if (answer.includes(sum) ===  false) {
				answer.push(sum)
			})
	})
	return answer.sort((a, b) => a - b)
*/

// 15일차 정수 제곱근 판별
function solution(n) {
	let answer = -1
	for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
		 if (i**2 === n)  {
				 answer = i; 
					break;   
			}
	}
return answer !== -1 ? (answer + 1)**2 : -1
}
/* for문
	for(let i = 1; i * i <= n; i++) {
		if (i * i === n) {
			return (i + 1)**2
		}
	} 
	return -1
*/
/* while문
	let num = 1;
	while ( num * num < n) {
		num++
	}
	return num * num === n
		? (num + 1)**2 : -1
*/
/* method: 매스 스퀘어루트 사용하기
	let sqrt = Math.sqrt(n) 
	return Number.isInteger(sqrt) // 괄호안의 숫자의 정수 여부를 true/false로 리턴
  ? (sqrt + 1)**2
	: -1
*/


//16일차 하샤드 수
function solution(x) {
	return x % String(x).split('').map(a => Number(a)).reduce((a, b) => a + b) === 0
}

//17일차 내적
function solution(a, b) {
  let arr = []
  for(let i = 0; i < a.length; i++) {
      arr[i] = a[i]*b[i]
  }
    return arr.reduce((a, b) => a + b)
}
/*
function solution(a, b) {
 return a.map((a, i)=> a * b[i]).reduce((a, b)=> a + b)
}
*/

//17일차 제일 작은 수 제거하기
function solution(arr) {
	let answer = arr.filter(e => e !== Math.min(...arr));
	return answer.length === 0 ? [-1] : answer
}

//18일차 행렬의 덧셈
function solution(arr1, arr2) {
	let N = arr1.length;
	let answer = new Array(N).fill(0).map(e => new Array(arr1[0].length).fill(0))
	for (let i = 0; i < N; i++) {
			for (let j = 0; j < arr1[i].length; j++) {
					answer[i][j] = arr1[i][j] + arr2[i][j]
			}
	}
	return answer
}
/*
function solution(arr1, arr2) {
    return arr1.map((e, i) =>  e.map((l, j) => l + arr2[i][j]))
}
*/

//19일차 2016년
function solution(a, b) {
	let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
	if (a === 2 || a === 8) {
			return week[b % 7]
	} else if (a === 3 || a === 11) {
			return week[(b + 1) % 7]
	} else if (a === 6) {
			return week[(b + 2) % 7]
	} else if (a === 9 || a === 12) {
			return week[(b + 3)% 7]
	} else if (a === 1 || a === 4 || a === 7) {
			return week[(b + 4) % 7]
	} else if (a === 10) {
			return week[(b + 5) % 7]
	} else if (a === 5) {
			return week[(b + 6) % 7]
	}
}
 // 1일이 월요일: 2월, 8월
 // 1일이 화요일: 3월, 11월
 // 1일이 수요일: 6월
 // 1일이 목요일: 9월, 12월
 // 1일이 금요일: 1월, 4월, 7월, 
 // 1일이 토요일: 10월
 // 1일이 일요일: 5월

 /*
 const month = {
    1 : 31,
    2 : 29,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}
 let week = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]

function solution(a, b) {
    let answer = ''
    let days = 0;
    for (let i = 1; i < a; i++) {
        days += month[i]
    }
    days += (b-1)
    answer = week[days % 7]
    return answer;
}
*/

/* month와 week은 위에서 선언한대로.
 function solution(a, b) {
   const days = new Array(a).fill(1).reduce((acc, cur, i) => {
       const mn = cur + i;
       return acc + (mn !== a
                   ? month[mn]
                   : b - 1
                   )
   }, 0)
   return week[days % 7]
}
*/

/* new Date().getDay()를 이용한 방법 => get Day는 일요일을 기준으로 인덱스 값을 리턴
	month	입력시 5 넣으면 6월 리턴하므로, 실제 월 - 1로 리턴
let week = ["SUN", "MON", "TUE", "WED", "THU",  "FRI", "SAT"]
function solution(a, b) {
   const days = new Date(2016, a - 1, b).getDay()
   return week[days]
}
*/


// 20일차 최대공약수와 최소공배수
function solution(n, m) {
	let result = [];
	let arr = []
	for (let i = 1; i <= Math.min(n, m); i++) {
			if (n % i === 0 && m % i === 0) arr.push(i)
	}
	result.push(Math.max(...arr))
	if (result[0] === 1) result.push(n * m);
	else {
		result.push(result[0]*(m/result[0])*(n/result[0]))
	}
	return result
}
/*
최소공배수 구하기: m이 더 큰 수가 들어온다고 가정

for (let l = m; l <= n * m; l += m) {
	if( l % n === 0) {
		result[1] = l;
		break;
	}
}
*/
/* 유클리드 호제법 
a가 b보다 큰 수 일 경우
a를 b로 나눴을 때 나머지 값이 0이 되면 작은 수가 최대공약수가 된다
0이 되지 않으면 작은 수가 큰 수가 되고 나머지 값이 작은 수가 된다
반복했을 때에 0이 나오면, 작은 수가 최대공약수가 된다.
최소공배수는 두 수를 곱한 값에 최대공약수를 나눈 값

let = [ a, b, r] = [Math.max(n, m), Math.min(n, m), 0] 
while (a % b > 0) {
	r = a % b;
	a = b; // 큰 수에 작은 수를 할당
	b = r; // 작은 수에 나머지값 할당
}
return [ b, (n * m)/b ]
*/

// 22일차 완주하지 못한 선수
function solution(participant, completion) {
	participant.sort(); 
	completion.sort(); 
	for(let i = 0; i < participant.length; i++) {
			if (participant[i] !== completion[i]) {
			return participant[i]
			}
	}
}