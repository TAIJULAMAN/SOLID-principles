# Single Responsibility Principle (SRP)

> **"A class should have one, and only one, reason to change."**

## Explanation
The Single Responsibility Principle (SRP) states that a class or module should have one, and only one, reason to change. This means that a class should not be "loaded" with multiple responsibilities. If a class handles too many things, changing one part of the code could affect other parts, making the system fragile and hard to maintain.

## Violating SRP (The "Bad" Way)
In the [bad example](./bad.ts), we have a `UserService` class that:
1.  Manages user properties.
2.  Validates user data.
3.  Saves the user to a database.
4.  Sends a welcome email.

If we want to change how we validate users, we modify the class. If we change the database? We modify the class. If we change the email provider? We modify the class. This is bad.

## Following SRP (The "Good" Way)
In the [good example](./good.ts), we separate concerns:
-   `User`: Represents the data.
-   `UserValidator`: Handles validation.
-   `UserRepository`: Handles database operations.
-   `EmailService`: Handles sending emails.

Now, each class has a single responsibility and a single reason to change.
