class Bird {
    name: string; 
    canFly: boolean;
    hasFeathers: boolean = true; 

    constructor(name:string, canFly: boolean) {
        this.name = name;
        this.canFly= canFly; 
    }
    //adding a method to a class is easy `methodName(){}`
    flapWings() {
        if (this.canFly)
        console.log(`${this.name}, can infact flap its wings and fly`);
        else
        console.log(
            `${this.name} is a flightless bird dont rub it in`
        );
    }
}

let birds: Array<Bird> = [
    new Bird("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Pigeon", true),
    new Bird("Emu", false)
];

birds.forEach((item:Bird) => {
    item.flapWings()
})