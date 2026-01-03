# Dependency Inversion Principle (DIP)

> **"Depend on abstractions, not on concretions."**

## Explanation
The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Also, abstractions should not depend on details; details should depend on abstractions.

## Violating DIP (The "Bad" Way)
In the [bad example](./bad.ts), the `LightSwitch` class (High Level) directly depends on the `LightBulb` class (Low Level).
If we want to switch a fan instead of a light bulb, we have to modify the `LightSwitch` class. This violates DIP because the high-level module depends on the details of the low-level module.

## Following DIP (The "Good" Way)
In the [good example](./good.ts), we introduce an interface `Switchable`.
-   `LightBulb` implements `Switchable`.
-   `Fan` implements `Switchable`.

The `ElectricPowerSwitch` depends on `Switchable` (an abstraction). It doesn't care if it's a light bulb or a fan.
Now, the high-level module (`ElectricPowerSwitch`) and low-level modules (`LightBulb`, `Fan`) both depend on the abstraction (`Switchable`).
