// ❌ BAD Code: Forcing clients to depend on methods they don't use

interface Machine {
    print(doc: Document): void;
    scan(doc: Document): void;
    fax(doc: Document): void;
}

class MultiFunctionPrinter implements Machine {
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

class OldFashionedPrinter implements Machine {
    print(doc: Document) {
        console.log('Printing...');
    }

    // ⚠️ PROBLEM: Forced to implement scan and fax
    scan(doc: Document) {
        throw new Error('Not supported');
    }

    fax(doc: Document) {
        throw new Error('Not supported');
    }
}
