"use strict";
class A {
    constructor() {
        this.someProperty = "str";
    }
}
class B extends A {
    showProperty() {
        console.log(this.someProperty);
    }
}
const a = new A();
const b = new B();
b.showProperty();
//# sourceMappingURL=app.js.map