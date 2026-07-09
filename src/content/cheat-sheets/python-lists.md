---
title: 'Python Lists'
type: 'Python'
isDraft: false
---

## [Return a single item](#return-a-single-item)

_Return the item at a specific index. Negative integers count back from the last item in the list._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
my_list[2]  # Schmidt
my_list[-1] # Winston (-1 always returns the last item)
```

_Return the first item that satisfies the provided predicate._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston", "Winnie"]
next((item for item in my_list if item.startswith("Wins")), None) # Winston
```

## [Return a new list](#return-a-new-list)

_Returns a new list with the results of calling a provided function on every item in the list._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
my_upper_list = [item.upper() for item in my_list] # ["NICK", "JESS", "SCHMIDT", "WINSTON"]
```

_Returns a new, filtered list with all items that satisfy the condition._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
my_filtered_list = [item for item in my_list if len(item) > 4] # ["Schmidt", "Winston"]
```

_Merges two or more lists or values into a single list and returns it._

```python
my_list_1 = ["Nick", "Jess", "Schmidt", "Winston"]
my_list_2 = ["Cici", "Coach"]

# `+` operator
final_list = my_list_1 + my_list_2    # ["Nick", "Jess", "Schmidt", "Winston", "Cici", "Coach"]

# Extend (mutates `my_list_1` in place)
my_list_1 += my_list_2                # ["Nick", "Jess", "Schmidt", "Winston", "Cici", "Coach"]
my_list_1.extend(my_list_2)           # same thing

# Unpacking (similar to JS spread operator(...))
final_list = [*my_list_1, *my_list_2] # ["Nick", "Jess", "Schmidt", "Winston", "Cici", "Coach"]
```

_Return a sorted list._

```python
my_list = [3,1,2,6,4,5]
sorted(list, reverse=True) # [6, 5, 4, 3, 2, 1]
```

## [Return a string](#return-a-string)

_Concatenates all items in the list into a single string._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
no_delimeter = "".join(my_list)    # "NickJessSchmidtWinston"
dash_delimited = "-".join(my_list) # "Nick-Jess-Schmidt-Winston"
```

## [Return a boolean](#return-a-boolean)

_Returns a boolean value for an item's presence in a list._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
"Winston" in my_list # True
"Coach" in my_list   # False
```

_Returns True if at least one item in the list passes the condition._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
any(item.startswith("J") for item in my_list) # True
```

_Returns True if every item in the list passes the condition._

```python
my_list = ["Nick", "Jess", "Schmidt", "Winston"]
all(len(item) > 3 for item in my_list) # True
```

## [Modifying lists](#modifying-lists)

_Add a new item at the end._

```python
my_list = [1,2,3]
my_list.append(4) # [1, 2, 3, 4]
```

_Insert an item at a specific index._

```python
my_list = [1,2,3]
my_list.insert(0, 99) # [99, 1, 2, 3]
```

_Remove a particular item._

```python
my_list = [1,2,3]
my_list.remove(3) # [1, 2]
```
