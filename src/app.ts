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

// let age = 50;
// let name1 = 'Maxx';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a:number):number => { return 100 + a };

// let anything: any;
// anything = 'Text';
// anything = {};

// let some:unknown;
// some = 'Text';
// let str: string;
// if(typeof some === 'string'){
//   str = some;
// }

// let person:[string,number]
//  person = ['Max', 21];

//  enum Load {LOADING,READY}
//  const page = {
//   load: Load.READY
// }

// if (page.load === Load.LOADING) {
//   console.log('Сторінка завантажується');
// }
// if (page.load === Load.READY) {
//   console.log('Сторінка завантажена');
// }

//  let val: string | number;

//  let literal: 'enable' | 'disable';

//  function showMessage(message:string): void {
//   console.log(message);
// }


// function calc(num1:number, num2:number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }

// type PageDate={
//   title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open' | 'close',
//   details?: {
//     createAt: Date,
//     updateAt: Date,
//   }
// }


// const page1: PageDate = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2: PageDate = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

// class A{
//   protected someProperty ="str"
// }

// class B extends A{
//   showProperty(){
//     console.log(this.someProperty);
    
//   }
// }
// const a = new A();
// const b = new B();

// b.showProperty();

// class House{
//   private street : string;
//   private tenants: string[]=[];

//   constructor(n: string) {
//     this.street=n;
//   }
//   public showAddress(this: House){
//   console.log('Address:' +this.street);
//   }
//   public addTenants(tenant: string){
//     this.tenants.push(tenant);
//   }
//   public showTenants(){
//     console.log(this.tenants);
//   }
// }
// const house = new House('Malyshko');
// house.addTenants('Anatoliy');
// house.addTenants('Juliya');

// house.showTenants();
// house.showAddress();

// ********** readonly && short initialization ***********

// class House {
//   constructor (private readonly type: string, private street: string) {
//   }
//   changeType(type: string){
//     this.type = type;
//   }
// }
class House{
  private tenants: string[]=[];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House){
  console.log('Address:' +this.street);
  }
  public showType(this: House){
    console.log('House Type:' + this.type);
  }
  public addTenant(tenant: string){
    this.tenants.push(tenant);
  }
  public showTenants(){

    console.log(this.tenants);
  }
}

class StoneHouse extends House{
 private chargeOfTheHouse: string;

 constructor(street: string, generalTalent: string){
   super('stone', street);
   this.chargeOfTheHouse = generalTalent;
   this.addTenant(generalTalent);
 }
public showTenants(): void {
  console.log('General:' + this.chargeOfTheHouse);
  super.showTenants();
}
}
const stoneHouse = new StoneHouse('Stone-world', 'Max');

stoneHouse.addTenant("Alina");

stoneHouse.addTenant("Tolya");

stoneHouse.addTenant("Juliya");


stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();







