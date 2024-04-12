---
title: 'Java Access Modifiers'
type: 'Java'
isDraft: false
---

## [Classes, Attributes and Methods](#classes-attributes-and-methods)

### `public`

_Accessible by any other class._

```java
// Class
public class Example {}

// Attribute
public String access = "Public";

// Method
public void printStr(String str) {
  System.out.println(str);
}
```

### `private`

_Accessible only within the same **class**. Available on members of a class only, not on the class itself. Best practice: make members private as much as possible._

```java
// Attribute
private String access = "Private";

// Method
private void printStr(String str) {
  System.out.println(str);
}
```

### `protected`

_Accessible only within the same **package** AND **subclasses** that may be in a different package. Available on members of a class only, not on the class itself._

```java
// Attribute
protected String access = "Protected";

// Method
protected void printStr(String str) {
  System.out.println(str);
}
```

### `default`

_Accessible only by classes in the same **package**. This is used when an explicit access modifier is not specified. Best practice: avoid using default access._

```java
// Class
class Example {}

// Attribute
String access = "Default";

// Method
void printStr(String str) {
  System.out.println(str);
}
```
