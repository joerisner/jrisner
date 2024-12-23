---
title: 'uv python'
type: 'Python'
isDraft: false
---

## [Configuration](#configuration)

_I set the following ENV vars in my shell's dotfile to have more control over `uv`'s Python version management on my system._

```sh
UV_CACHE_DIR=$HOME/.uv/cache                     # Cache everything in ~/.uv
UV_CONFIG_FILE=$HOME/.uv/uv.toml                 # Path to uv config file
UV_PYTHON_INSTALL_DIR=$HOME/.uv/python/versions  # Path to Python installations
UV_PYTHON_DOWNLOADS=manual                       # Do not automatically download managed Python installations
UV_PYTHON_PREFERENCE=only-managed                # Only use managed Python installations; never use system Python installations
```

## [Commands](#commands)

### [`install`](#install)

_Install Python versions. Python versions are installed into the `uv` Python directory, which can be retrieved by `uv python dir` (see <u>[below](#dir))</u>. If no version is supplied, `uv` will install the version found in the `.python-version` file. If that file is not found, `uv` checks if it has installed any versions, and if it hasn't, it installs the latest stable version of Python._

```sh
uv python install  # Optionally supply a version to install. Example: uv python install 3.12

# Options
--default          # Use as the default Python version
-i, --install-dir  # The directory to store the Python version in
-r, --reinstall    # Reinstall the version requested, if it's already been installed
-f, --force        # Replace existing Python executables during installation. Implies --reinstall.
```

### [`list`](#list)

_List installed Python versions. By default, downloads for other platforms and old patch versions are hidden._

```sh
uv python list

# Options
--all-versions     # Include old patch versions for your platform in the list
--all-platforms    # Include other platforms in the list
--only-installed   # Only show installed Python versions
--only-downloads   # Only show Python downloads, exclude installed distros
```

### [`dir`](#dir)

_Show the `uv` Python installation directory. Defaults to `~/.local/share/uv/python`._

```sh
uv python dir

# Options
--bin              # Show the directory into which `uv python` will install Python executables
```

### [`find`](#find)

_Find an installed Python version. By default, this will display the path to the first available Python executable, including Python versions from virtual environments._

```sh
uv python find     # Optionally supply a version to find. Example: uv python find 3.12

# Options
--system           # Only find system Python interpreters (no virtual environment Pythons)
```

### [`pin`](#pin)

_Pin the current project to use a specific Python version. This creates a `.python-version` file in the working directory, unless one already exists._

```sh
uv python pin <version>
```

### [`uninstall`](#uninstall)

_Uninstall a `uv` managed Python version._

```sh
uv python uninstall <version>

# Options
-i, --install-dir  # The directory where the Python was installed.
--all              # Uninstall all managed Python versions
```
