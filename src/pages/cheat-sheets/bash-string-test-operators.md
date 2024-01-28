---
layout: '../../layouts/CheatSheet.astro'
feature: 'Bash String Test Operators'
---

## String Test Operators

### `=`, `==`

_Return true if strings are equal. Double-equals is bash-specific and not supported in other shells._

```sh
if [[ "str1" = "str2" ]]; then echo "Strings are equal"; fi
```

### `-z`

_Return true if string is null (has a zero length). <ins>**[Always quote](https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST)**</ins> the tested string._

```sh
STR=""
if [[ -z "$STR" ]]; then echo "String is null"; fi
```

### `-n`

_Return true if string is **not** null. <ins>**[Always quote](https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST)**</ins> the tested string._

```sh
STR="foo"
if [[ -n "$STR" ]]; then echo "String is not null"; fi
```
