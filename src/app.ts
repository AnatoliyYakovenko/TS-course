// TASK 1

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// TASK 2

let age = 50;
let name1 = 'Maxx';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a:number):number => { return 100 + a };

let anything: any;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';
let str: string;
if(typeof some === 'string'){
  str = some;
}

let person:[string,number]
 person = ['Max', 21];

 enum Load {LOADING,READY}
 const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
  console.log('Сторінка завантажена');
}

 let val: string | number;

 let literal: 'enable' | 'disable';

 function showMessage(message:string): void {
  console.log(message);
}


function calc(num1:number, num2:number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type PageDate={
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}


const page1: PageDate = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: PageDate = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}


