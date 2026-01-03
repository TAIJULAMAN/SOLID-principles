// ✅ GOOD Code: Open for extension, closed for modification

// 1. Abstraction
interface PaymentMethod {
    pay(amount: number): void;
}

// 2. Concrete Implementations
class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

// We can add new methods WITHOUT touching PaymentProcessor
class BitcoinPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Processing Bitcoin payment of $${amount}`);
    }
}

// 3. The Processor (Closed for Modification)
class PaymentProcessorOCP {
    process(paymentMethod: PaymentMethod, amount: number) {
        paymentMethod.pay(amount);
    }
}

// Usage
const processor = new PaymentProcessorOCP();
processor.process(new CreditCardPayment(), 100);
processor.process(new BitcoinPayment(), 500); // Works without changing Processor!
