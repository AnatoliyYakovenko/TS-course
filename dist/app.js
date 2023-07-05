"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log('Address:' + this.street);
    }
    showType() {
        console.log('House Type:' + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTalent) {
        super('stone', street);
        this.chargeOfTheHouse = generalTalent;
        this.addTenant(generalTalent);
    }
    showTenants() {
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
//# sourceMappingURL=app.js.map