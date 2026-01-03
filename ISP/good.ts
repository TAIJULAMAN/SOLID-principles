// ✅ GOOD Code: Segregating interfaces

interface Printer {
    print(doc: Document): void;
}

interface Scanner {
    scan(doc: Document): void;
}

interface Fax {
    fax(doc: Document): void;
}

// Client 1: Simple Printer
class SimplePrinter implements Printer {
    print(doc: Document) {
        console.log('Printing...');
    }
}

// Client 2: Smart Machine
class SmartMachine implements Printer, Scanner, Fax {
    print(doc: Document) {
        console.log('Printing...');
    }

    scan(doc: Document) {
        console.log('Scanning...');
    }

    fax(doc: Document) {
        console.log('Faxing...');
    }
}
