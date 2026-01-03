// ❌ BAD Code: High-level module depending on low-level module

class LightBulb {
    turnOn() {
        console.log('LightBulb: Bulb on...');
    }

    turnOff() {
        console.log('LightBulb: Bulb off...');
    }
}

class LightSwitch {
    private bulb: LightBulb;

    constructor() {
        this.bulb = new LightBulb(); // ⚠️ Direct dependency!
    }

    operate() {
        this.bulb.turnOn();
    }
}
