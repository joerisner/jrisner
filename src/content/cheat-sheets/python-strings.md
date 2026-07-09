---
title: 'Python Strings'
type: 'Python'
isDraft: false
---

## [Strings](#strings)

_Slice._

```python
my_str = "Hello"
sliced_str = my_string[1:3] # "el"
```

_Concatenate._

```python
my_str = "Hello"
concatenated_str = my_string + ", world!" # "Hello, world!"
```

_Repeat._

```python
my_str = "Hello"
repeated_str = my_string * 2 # "HelloHello"
```

_Split._

```python
# Split by whitespace (default).
my_str = "Hello World!"
split_by_whitespace = my_str.split() # ["Hello", "World"]

# Split by delimiter.
my_str = "alpha,beta,gamma"
split_by_delimeter = my_str.split(",") # ["alpha", "beta", "gamma"]

# Break a single word into a list.
my_word = "Hello"
my_list = list(my_word) # ["H", "e", "l", "l", "o"]

# Split by newlines.
my_str = "line 1\nline 2\nline 3"
multiline_list = my_str.splitlines() # ["line 1", "line 2", "line 3"]
```

_Find the first occurrence (i.e. index) of a character in a string._

```python
my_str = "Hello"

# Check existence first.
found_in_str = "l" in my_str.lower() # True
index = my_str.index("l") if found_in_str else -1 # Returns: 2
```
