---
layout: '../../layouts/CheatSheet.astro'
feature: 'JPA Annotations'
---

## Classes

### [`@Entity`](#entity)

_Specifies that the class is an Entity. Defaults to the name of the entity class, but can be overridden using the optional `name` element._

```java
@Entity
public class Student {
}

// Override the name of the entity
@Entity(name = "Customer")
public class Person {
}
```

### [`@Table`](#table)

_Specifies the db table associated with the entity class. The table name defaults to the name of the entity, but can be overridden using `name`._

```java
@Entity
@Table(name = "students")
public class Student {
}
```

## [Properties](#properties)

### [`@Id`](#id)

_Specifies the primary key of an entity._

```java
@Entity
public class Student {
  @Id
  private Long id;
}
```

### [`@Column`](#column)

_Specifies the mapped column for a **persistent** property or field. Optional elements include `name`, `nullable`, `unique`, `length` and more._

```java
@Entity
public class Student {
  @Column(name = "first_name", length = 55)
  private String firstName;

  @Column(nullable = false, unique = true)
  private String email;
}
```

### [`@Transient`](#transient)

_Specifies that the property or field is not persistent._

```java
@Entity
public class Student {
  private Long id;
  private String email;

  @Transient
  private Integer age;
}
```

### [`@GeneratedValue`](#generatedvalue)

_Specifies the generation strategies for the values of primary keys. Should be used in conjunction with the `@Id` annotation and usually paired with `@SequenceGenerator`._

```java
@Entity
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUSTOM_SEQUENCE")
  private Long id;
}
```

### [`@SequenceGenerator`](#sequencegenerator)

_Defines a primary key generator that may be referenced by `name` when a generator element is specified for the `@GeneratedValue` annotation. May be specified on the entity class instead of a property._

```java
@Entity
public class Student {
  @Id
  @SequenceGenerator(name = "stud_seq", sequenceName = "student_sequence", initialValue = 1, allocationSize = 10)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stud_seq")
  private Long id;
}
```
