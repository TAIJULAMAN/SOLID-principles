# Interface Segregation Principle (ISP)

> **"Clients should not be forced to depend upon interfaces that they do not use."**

## Explanation
The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. Instead of one "fat" interface, we should create multiple smaller fields (interfaces) that are specific to the client.

## Violating ISP (The "Bad" Way)
In the [bad example](./bad.ts), we have a `Machine` interface with `print`, `scan`, and `fax`.
A `MultiFunctionPrinter` implements everything fine.
However, a `OldFashionedPrinter` can only print. It is still forced to implement `scan` and `fax`, often throwing errors or doing nothing. This is confusing and bad design.

## Following ISP (The "Good" Way)
In the [good example](./good.ts), we break the interface down:
-   `Printer` interface (print)
-   `Scanner` interface (scan)
-   `Fax` interface (fax)

Now:
-   `OldFashionedPrinter` only implements `Printer`.
-   `MultiFunctionPrinter` implements `Printer`, `Scanner`, and `Fax`.

We don't force any class to implement empty methods anymore.
