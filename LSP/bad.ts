// ❌ BAD Code: Violating LSP by breaking parent contract

class Bird {
    fly(): void {
        console.log('Flying high!');
    }
}

class Sparrow extends Bird {
    // Inherits fly and it works fine
}

class Penguin extends Bird {
    // ⚠️ PROBLEM: Penguins can't fly!
    fly(): void {
        throw new Error('I cannot fly!');
    }
}

// Client code
function makeBirdFly(bird: Bird) {
    bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(sparrow); // Works
makeBirdFly(penguin); // 💥 CRASH: Error: I cannot fly!
