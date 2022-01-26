

// 기존 js문자열 선언 var 사용.
// var str = "hello";


 // ts문자열 선언
let str: string = 'hello';

// Ts 숫자
let number:number = 124;

// TS 배열
let arr: Array<number>;

let heroes : Array<string>;
heroes.push('Capt','hulk','Thor');
let items: number[];
items.push(1);

// eslint 깔면, 오류사항 볼 수 있음.


// 리스트는 가변하지만 튜플은 불변한다.
// 튜플은 key-map사용이 가능하지만 리스트는 불가.
// 왜냐하면 딕셔너리의 키값은 불변한 값만 올 수 있기 떄문이다.


//ts튜플 모든 인덱스의 타입이 정해져있는 배열
let address2: [string, number] = ['pangyo', 100];


// Ts 객체
let obj: object ={};

// let person : object ={
//     name: 'r',
//     age: 100
// }

let person : {name: string, age: number} = {
    name : 'r',
    age :100
}

let youtube:{id: string, password: number}
youtube.id = 'ryoong';

// ts 진위값.

let show : boolean = true;
