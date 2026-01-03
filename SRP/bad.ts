// ❌ BAD Code: Single class handling multiple responsibilities

class User {
    constructor(
        public email: string, 
        public password: string
    ) {}

    // Responsibility 1: Validation logic
    isValid(): boolean {
        return this.email.includes('@');
    }

    // Responsibility 2: Database logic
    save(): void {
        console.log(`Saving user ${this.email} to database...`);
        // Actual DB logic would go here
    }

    // Responsibility 3: Notification logic
    sendWelcomeEmail(): void {
        console.log(`Sending welcome email to ${this.email}...`);
        // Actual email logic would go here
    }
}

// Usage
const user = new User('john@example.com', 'password123');
if (user.isValid()) {
    user.save();
    user.sendWelcomeEmail();
}
