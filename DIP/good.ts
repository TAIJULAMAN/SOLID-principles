// ✅ GOOD Code: Depending on abstractions

// 1. Abstraction
interface Switchable {
    turnOn(): void;
    turnOff(): void;
}

// 2. Low-level modules implement the abstraction
class LightBulb implements Switchable {
    turnOn() {
        console.log('LightBulb: Bulb on...');
    }
    turnOff() {
        console.log('LightBulb: Bulb off...');
    }
}

class Fan implements Switchable {
    turnOn() {
        console.log('Fan: Fan spinning...');
    }
    turnOff() {
        console.log('Fan: Fan stopping...');
    }
}

// 3. High-level module depends on the abstraction
class ElectricPowerSwitch {
    constructor(private device: Switchable) { }

    press() {
        this.device.turnOn();
    }
}

// Usage
const bulb = new LightBulb();
const switch1 = new ElectricPowerSwitch(bulb);
switch1.press();

const fan = new Fan();
const switch2 = new ElectricPowerSwitch(fan);
switch2.press();
