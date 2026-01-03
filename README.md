# 🏛️ SOLID Principles

> A comprehensive approach to writing clean, maintainable, and scalable code.

## Introduction

**SOLID** is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as Uncle Bob). These principles establish practices that led to developing software with considerations for maintaining and extending as the project grows.

Adopting these practices can also contribute to avoiding code smells, refactoring code, and Agile or Adaptive software development.

## Table of Contents

| Acronym | Principle | Description |
|:---:|:---|:---|
| **[S](#single-responsibility-principle-srp)** | [Single Responsibility](#single-responsibility-principle-srp) | A class should have one, and only one, reason to change. |
| **[O](#open-closed-principle-ocp)** | [Open/Closed](#open-closed-principle-ocp) | You should be able to extend a class's behavior, without modifying it. |
| **[L](#liskov-substitution-principle-lsp)** | [Liskov Substitution](#liskov-substitution-principle-lsp) | Derived classes must be substitutable for their base classes. |
| **[I](#interface-segregation-principle-isp)** | [Interface Segregation](#interface-segregation-principle-isp) | Make fine grained interfaces that are client specific. |
| **[D](#dependency-inversion-principle-dip)** | [Dependency Inversion](#dependency-inversion-principle-dip) | Depend on abstractions, not on concretions. |

---

## <a name="single-responsibility-principle-srp"></a>1. Single Responsibility Principle (SRP)

> **"A class should have one, and only one, reason to change."**

Every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.

 [View Code Examples](./SRP/)

---

## <a name="open-closed-principle-ocp"></a>2. Open/Closed Principle (OCP)

> **"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."**

This promotes a system that is easy to extend without risking the integrity of existing code. We can add new features by adding new code, rather than changing valid code that is already working.

 [View Code Examples](./OCP/)

---

## <a name="liskov-substitution-principle-lsp"></a>3. Liskov Substitution Principle (LSP)

> **"Derived classes must be substitutable for their base classes."**

This principle simply means that if you have a parent class and a child class, you should be able to use the child class wherever the parent class is used without breaking the application.

 [View Code Examples](./LSP/)

---

## <a name="interface-segregation-principle-isp"></a>4. Interface Segregation Principle (ISP)

> **"Clients should not be forced to depend upon interfaces that they do not use."**

This means that a class should not implement an interface if it doesn't use all the methods defined in it. Instead of one fat interface, many small interfaces are preferred based on groups of methods, each one serving one submodule.

 [View Code Examples](./ISP/)

---

## <a name="dependency-inversion-principle-dip"></a>5. Dependency Inversion Principle (DIP)

> **"Depend on abstractions, not on concretions."**

A. High-level modules should not depend on low-level modules. Both should depend on abstractions.
B. Abstractions should not depend on details. Details should depend on abstractions.

 [View Code Examples](./DIP/)

---

## License

This project is licensed under the MIT License.
