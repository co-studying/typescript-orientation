# TypeScript Orientation

## 다음의 조건들에 맞춰 예제를 풀어봅시다

### Step I. DOM을 핸들링하여 사용자 정보를 렌더링
```javascript
// TODO: 이름, 이메일, 주소 표시하기
username.innerText = user.name;
email.innerText = user.email;
address.innerText = user.address.street;
```

### Step II. JSDoc의 @typedef 이용해 타입을 추가해 봅시다.

```javascript
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} zipcode
 */ 

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address

/**
 * @returns {Promise<User>}
 */ 
function fetchUser () {
    return axios.get(url);
}
```
| JSDoc: https://devdocs.io/jsdoc/

### Step III. JS vs TS
```javascript
// sample-js.js
function sum (a, b) {
    return a + b;
}

var result = sum(10, '20');
result.tolocalestring();
```

```typescript
// sample-ts.ts
function sum (a: number, b: number): number {
    return a + b;
}

var result = sum(10, 20);
result.toLocaleString();
```

| Intellisense: https://code.visualstudio.com/docs/editor/intellisense

### Step IV. @ts-check를 사용한 타입 체크

```javascript
// sample-js.js
// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number}
 */
function sum (a, b) {
    return a + b;
}

sum(10, 20);
```