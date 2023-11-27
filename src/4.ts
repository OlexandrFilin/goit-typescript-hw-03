class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean=false;
  tenants:Person[]=[];
  keyHouse: Key;
  constructor( key: Key) {
       this.keyHouse = key;
  }
  comeIn(person:Person){
    if(this.door && !this.tenants.includes(person)){
        this.tenants.push(person);
    } else {
        alert('WARNING. This person is already at home');
    }
  }
  abstract openDoor(key:Key):void;
}

class MyHouse extends House {
    openDoor(key: Key) {
        if(key.getSignature()===this.keyHouse.getSignature()){
            this.door = true;
            alert('The door is open');
        } else {
            alert('The key does not fit the lock');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
