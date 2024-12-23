---
title: 'Bash File Test Operators'
type: 'Bash/Shell'
isDraft: false
---

## File test operators

### `-e`

_Return true if file (or directory) exists._

```sh
if [[ -e /path/to/file ]]; then echo "File or dir exists"; fi
```

### `-f`

_Return true if file exists and is a **regular file** (not a directory)._

```sh
if [[ -f /path/to/file ]]; then echo "File exists"; fi
```

### `-d`

_Return true if file exists and is a **directory**._

```sh
if [[ -d /path/to/file ]]; then echo "Directory exists"; fi
```

### `-s`

_Return true if file is **not** zero size._

```sh
if [[ -s /path/to/file ]]; then echo "File is not empty"; fi
```

### `-N`

_Return true if file has been modified since it was last read._

```sh
if [[ -N /path/to/file ]]; then echo "File has been modified"; fi
```

### `-nt`

_Return true if file1 is newer (more recent modification time) than file2._

```sh
if [[ $file1 -nt $file2 ]]; then echo "File 1 is newer"; fi
```

### `-ot`

_Return true if file1 is older than file2._

```sh
if [[ $file1 -ot $file2 ]]; then echo "File 1 is older"; fi
```
