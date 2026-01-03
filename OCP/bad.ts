// ❌ BAD Code: Modifying existing class to add new features

class CreditCard {
    constructor(public code: string) { }
}

class PayPal {
    constructor(public email: string) { }
}

class PaymentProcessor {
    processPayment(paymentMethod: any, amount: number) {
        if (paymentMethod instanceof CreditCard) {
            console.log(`Processing credit card payment of $${amount}`);
        } else if (paymentMethod instanceof PayPal) {
            console.log(`Processing PayPal payment of $${amount}`);
        } else {
            throw new Error('Unknown payment method');
        }
    }
}

// Problem: If we want to add "Bitcoin", we MUST modify PaymentProcessor.
