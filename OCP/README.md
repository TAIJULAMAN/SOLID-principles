# Open/Closed Principle (OCP)

> **"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."**

## Explanation
The Open/Closed Principle states that you should be able to extend the behavior of a system without modifying existing code. This allows you to add new features or functionality by adding new classes or modules, rather than changing valid, tested code.

## Violating OCP (The "Bad" Way)
In the [bad example](./bad.ts), we have a `processPayment` function that checks the type of payment method using `if/else` or `switch` statements.
If we want to add a new payment method (e.g., Bitcoin), we have to modify the `processPayment` function. This violates OCP because we are modifying existing code to add new functionality.

## Following OCP (The "Good" Way)
In the [good example](./good.ts), we define a `PaymentMethod` interface.
-   `CreditCard` implements `PaymentMethod`.
-   `PayPal` implements `PaymentMethod`.

The `PaymentProcessor` class simply calls the `pay` method on the interface. To add Bitcoin, we just create a `Bitcoin` class that implements `PaymentMethod`. We **do not** touch the `PaymentProcessor`. It is closed for modification but open for extension.
