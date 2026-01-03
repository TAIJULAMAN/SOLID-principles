// ✅ GOOD Code: Separating responsibilities into distinct classes

// 1. Data Representation
class UserEntity {
    constructor(
        public email: string,
        public password: string
    ) { }
}

// 2. Responsibility: Validation
class UserValidator {
    static isValid(user: UserEntity): boolean {
        return user.email.includes('@');
    }
}

// 3. Responsibility: Database Operations
class UserRepository {
    save(user: UserEntity): void {
        console.log(`Saving user ${user.email} to database...`);
    }
}

// 4. Responsibility: Notifications
class EmailService {
    sendWelcomeEmail(user: UserEntity): void {
        console.log(`Sending welcome email to ${user.email}...`);
    }
}

// Usage Orchestration
// The orchestration logic binds the single responsibilities together
const newUser = new UserEntity('john@example.com', 'password123');

if (UserValidator.isValid(newUser)) {
    const repository = new UserRepository();
    const emailService = new EmailService();

    repository.save(newUser);
    emailService.sendWelcomeEmail(newUser);
}
