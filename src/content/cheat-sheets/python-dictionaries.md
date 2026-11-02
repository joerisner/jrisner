---
title: 'Python Dictionaries'
type: 'Python'
isDraft: false
---

## Rules, constraints, properties

- Keys must be unique
- Keys must be hashable (immutable): strings, integers, floats, booleans, tuples
- Dicts maintain the precise insertion order of their keys
- Highly efficient O(1) average time complexity for lookups, insertions, deletions

## [Search in a dictionary](#search-in-a-dictionary)

_Return the value associated with the specified key._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

my_dict["make"]               # toyota
my_dict["trim"]               # raises KeyError since "trim" is not in dict
my_dict.get("trim")           # None
my_dict.get("trim", "turbo")  # turbo (default value)
```

## [Add and delete values in a dictionary](#add-and-delete-values-in-a-dictionary)

_Add a new key pair._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

my_dict["trim"] = "turbo" # {"make": "toyota", "model": "supra", "year": 1997, "trim": "turbo"}
```

_Update a value._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

my_dict["year"] = 1996 # my_dict = {"make": "toyota", "model": "supra", "year": 1996}
```

_Delete a key/value pair._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

del my_dict["make"] # {"model": "supra", "year": 1997}
```

_Delete all key/value pairs._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

my_dict.clear() # {}
```

## [Looping through dictionaries](#looping-through-dictionaries)

_Iterate over key/value pairs._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

for key, value in my_dict.items():
    print(f"The value of {key} is {value}")
```

_Retrieve an iterable list of keys or values._

```python
my_dict = {"make": "toyota", "model": "supra", "year": 1997}

my_dict.keys()   # dict_keys(['make', 'model', 'year'])
my_dict.values() # dict_values(['toyota', 'supra', 1997])
```
