---
title: 'Bash String Test Operators'
type: 'Bash/Shell'
isDraft: false
---

## String test operators

### `=`, `==`

_Return true if strings are equal. Prefer `=` over `==` when portability is a concern._

```sh
if [[ "str1" = "str2" ]]; then echo "Strings are equal"; fi
```

### `-z`

_Return true if string is null (has a zero length). [Always quote](https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST) the tested string._

```sh
STR=""
if [[ -z "$STR" ]]; then echo "String is null"; fi
```

### `-n`

_Return true if string is **not** null. [Always quote](https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST) the tested string._

```sh
STR="foo"
if [[ -n "$STR" ]]; then echo "String is not null"; fi
```
