import { tiger } from "./lib/index.js";

const URL = 'https://jsonplaceholder.typicode.com/users';

const response = await fetch(URL);
const data = await tiger.get(URL);

console.log(data);
console.log(response);

//then 방식
// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })


// xhr.get('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
  
// })
// .catch((err)=>{
//   err
// })



// console.log(xhrPromise({url:'https://jsonplaceholder.typicode.com/users'}));



// async - 함수가 promise 객체를 반환 하도록
//       - await 사용 

// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기 






// 라면끓이기()


