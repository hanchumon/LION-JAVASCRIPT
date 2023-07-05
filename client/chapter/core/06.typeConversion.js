/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); //명시적 형변환
console.log(typeof (YEAR + '')) //암시적 형변환
// undefined, null
console.log(typeof String(null)); //명시적 형변환
console.log(typeof (null + '')) //암시적 형변환
console.log(typeof String(undefined)); //명시적 형변환
console.log(typeof (undefined + '')) //암시적 형변환

// boolean
let isClicked = true;
console.log(typeof String(isClicked)); //명시적 형변환
console.log(typeof (isClicked + '')) //암시적 형변환



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(typeof Number(friend));

// null
let bankbook = null;
console.log(typeof Number(bankbook));

// boolean
let cutie = false;
console.log(typeof Number(cutie));

// string
let num = '250';
console.log(typeof Number(num));
console.log(typeof +num);
console.log(typeof (num*1));
console.log(typeof (num/1));

// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseFloat(width, 10);
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

console.log(typeof Boolean(isClicked)); //명시적 형변환
console.log(typeof !!isClicked) //암시적 형변환

console.log( Boolean(friend));
console.log( Boolean(bankbook));
console.log( Boolean(0));
console.log( Boolean(NaN));
console.log( Boolean(''));
console.log( Boolean(1));
console.log( Boolean(0));
// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 