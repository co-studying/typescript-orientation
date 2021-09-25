
// JS String
// var color = 'blue';

// JS Number
// var decimal = 6;
// var hex = 0xf00d;
// var binary = 0b1010;
// var octal = 0o744;

// JS Boolean
// var isDone = false;

// TS String
let color: string = 'blue';

// TS Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// TS Boolean
let isDone: boolean = false;

// Template String
let fullName: string = `Julio Kim`;
let age: number = 20;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

// JS Array
// var list = [1, 2, 3];

// JavaScript에서는 유효
// var list3 = [1, 2, 'Hi'];

// TS Array
let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

// TypeScript 에서는 에러
let list3: number[] = [1, 2, 'Hi'];

// TS Tuple
let x: [string, number];
// 초기화
x = ["hello", 10];
// 잘못된 초기화
x = [10, "hello"]; 

console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.

x[3] = "world"; // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.
console.log(x[5].toString()); // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.

// JS Object
// var obj = {};
// var person = {
// 	name: 'Julio',
// 	age: 20
// };

// TS Object
let obj: object = {};
let person: { name: string, age: number } = {
	name: 'Julio',
	age: 20
}