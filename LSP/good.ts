// ✅ GOOD Code: Respecting the substitution principle

class Bird {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class FlyingBird extends Bird {
    fly(): void {
        console.log(`${this.name} is flying!`);
    }
}

class SwimmingBird extends Bird {
    swim(): void {
        console.log(`${this.name} is swimming!`);
    }
}

class Sparrow extends FlyingBird {
    constructor() { super('Sparrow'); }
}

class Penguin extends SwimmingBird {
    constructor() { super('Penguin'); }
}

// Client code relies on specific capabilities
function makeBirdFly(bird: FlyingBird) {
    bird.fly();
}

function makeBirdSwim(bird: SwimmingBird) {
    bird.swim();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(sparrow); // Works
// makeBirdFly(penguin); // 🛑 Compile Error: Penguin is not a FlyingBird (Safer!)

makeBirdSwim(penguin); // Works
