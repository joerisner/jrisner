---
title: 'DNF and MicroDNF'
type: 'Shell'
isDraft: false
---

## [Update packages to latest versions](#update-packages-to-latest-versions)

**dnf**

```sh
dnf upgrade

# Options
-y, --assumeyes    # Answer yes for all questions
```

**microdnf**

```sh
microdnf upgrade

# Options
-y, --assumeyes    # Answer yes for all questions
```

## [Install packages](#install-packages)

**dnf**

```sh
dnf install <package_name>
dnf install ruby-3.2.2 # Install a specific version of a package by appending -<version>

# Options
-y, --assumeyes    # Answer yes for all questions
--nodocs           # Skip installing documentation
```

**microdnf**

```sh
microdnf install <package_name>
microdnf install ruby-3.2.2 # Install a specific version of a package by appending -<version>

# Options
-y, --assumeyes    # Answer yes for all questions
--nodocs           # Skip installing documentation
```

## [List packages](#list-packages)

**dnf**

```sh
dnf list                   # List all packages (available and installed)
dnf list <package_name>    # List all packages by name

# Options
--all               # List all packages (default)
--available         # List available packages
--installed         # List installed packages
--showduplicates    # Show duplicate packages in repositories
```
