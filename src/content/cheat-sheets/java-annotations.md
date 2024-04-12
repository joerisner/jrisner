---
title: 'Java Annotations'
type: 'Java'
isDraft: false
---

## [Core Java](#core-java)

### [`@Override`](#override)

_Indicate that a method within a subclass **overrides** the inherited method from its superclass. This helps prevent method **overloading** by using the compiler to ensure the method signature matches its inherited signature._

```java
public class Parent {
  public void show(int num) {
    return num + 5;
  }
}

public class Child extends Parent {
  @Override
  public void show(int num) {
    return num + 10;
  }
}
```

### [`@Deprecated`](#deprecated)

_Communicates that an element (class, method, attribute, etc.) should no longer be used._

```java
public class Example {
  @Deprecated(since = "2.0", forRemoval = true)
  public void calculateTax(double cost) {
    return cost * 0.06;
  }
}
```

### [`@FunctionalInterface`](#functionalinterface)

_Indicates that an interface has a Single Abstract Method (SAM)._

```java
@FunctionalInterface
interface Example {
  void calculate(int num1, int num2);
}
```
