class Key {
    private signature:number
    constructor(){
        this.signature = Math.random()
    }

    getSignature ():number {
        return this.signature
    }
}
class Person {
    constructor(private key:Key) {};
    getKey ():Key {
        return this.key
    }
}
abstract class House {
    public door:boolean;
    protected key:Key;
    public tenants: Person[]
    constructor( key:Key) {
        this.tenants = []
        this.key = key;
    }
    public comeIn (person:Person):void {
        if (this.door) {
            this.tenants.push(person)
        }
    }
    public showTenants ():void {
        console.log(this.tenants)
    }
    public abstract openDoor (key:Key):void;
}
class MyHouse extends House {
   
    constructor(key:Key) {
        super (key); 
    }

    public openDoor(key: Key): void {
        if(this.key == key){
            this.door = true;
        } else {console.log ("Bad key")}
        

    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
house.showTenants()

