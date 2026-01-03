# Liskov Substitution Principle (LSP)

> **"Derived classes must be substitutable for their base classes."**

## Explanation
The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. In other words, a subclass should not remove behavior from the superclass or violate its contract.

## Violating LSP (The "Bad" Way)
In the [bad example](./bad.ts), we have a `Bird` class with a `fly` method.
`Penguin` extends `Bird`, but since penguins can't fly, it throws an error.
If we have a function that takes a `Bird` and calls `fly`, it will crash when receiving a `Penguin`. This violates LSP because `Penguin` is not a proper substitute for `Bird`.

## Following LSP (The "Good" Way)
In the [good example](./good.ts), we restructure our hierarchy.
-   `Bird` is the base class.
-   `FlyingBird` extends `Bird` and adds `fly`.
-   `SwimmingBird` extends `Bird` and adds `swim`.
-   `Penguin` extends `SwimmingBird`.
-   `Sparrow` extends `FlyingBird`.

Now, if a function needs a bird that can fly, it asks for `FlyingBird`, not just `Bird`. We rely on the capabilities (interfaces or specific base classes) rather than a wrong inheritance structure.
