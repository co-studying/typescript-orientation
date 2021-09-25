// JS
// function sum (a, b) {
// 	return a + b;
// }

// sum(10, 20); // 유효
// sum(10, 20 ,30); // 유효

// TS
function sum (a: number, b: number): number {
	return a + b;
}

sum(10, 20); // 유효
sum(10, 20, 30); // 에러

// TS Optional Parameter
function hello (name: string, age?: number): string {
	if (age) {
		return `Hello World, ${name}(${age})`;
	} else {
		return `Hello World, ${name}`; 
	}
}

hello('Julio'); // 유효
hello('Julio', 20); // 유효