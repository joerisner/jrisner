---
title: 'uv Dependency Management'
type: 'Python'
isDraft: false
---

## [Add dependencies](#add-dependencies)

### [`add`](#add)

_Add dependencies to the project._

```sh
uv add <packages>

# Options
--dev               # Add dependency to dev dependency group (alias for --group dev)
--directory         # Change to the given directory prior to running the command
--frozen            # Add dependency but skip updating the uv.lock file
--group             # Add dependency to a specified dependency group
--locked            # Assert that the uv.lock will remain unchanged
-n, --no-cache      # Avoid reading from or writing to the cache
-q, --quiet         # Do not print any output
-r, --requirements  # Add all packages listed in the given requirements.txt file(s)
```

- Installs the dependency into the virtual environment (generates `.venv` if it doesn't exist).
- Adds the dependency to the `pyproject.toml`'s `project.dependencies` table, or `dependency-groups` table when specifying `--group`.
- Syncs `uv.lock` file (generates file if it doesn't exist).
- Installs the most recent, compatible version if version constraint isn't provided.

## [Sync project dependencies](#sync-project-dependencies)

### [`sync`](#sync)

_Update the project's environment. Syncing ensures that all project dependencies are installed and up-to-date with the lockfile._

```sh
uv sync

# Options
--frozen        # Sync without updating the uv.lock file
--group         # Include dependencies from the specified dependency group
--locked        # Assert that the uv.lock will remain unchanged
-n, --no-cache  # Avoid reading from or writing to the cache
--no-dev        # Omit the dev dependency group
--no-progress   # Hide all progress outputs
--only-dev      # Only include the dev dependency group
--only-group    # Only include dependencies from the specified dependency group
-q, --quiet     # Do not print any output
--refresh       # Refresh all cached data
--reinstall     # Reinstall all packages, regardless of whether they're already installed
```

- Installs project dependencies (defined in the `pyproject.toml`) into the virtual environment (generates `.venv` if it doesn't exist).
- Removes packages that are not declared as dependencies of the project.

## [Remove dependencies](#remove-dependencies)

### [`remove`](#remove)

_Remove dependencies from the project._

```sh
uv remove <packages>

# Options
--dev     # Remove the packages from the dev dependency group
--frozen  # Remove dependencies without re-locking the project
--group   # Remove the packages from the specified dependency group
--locked  # Assert that the uv.lock will remain unchanged
```

- Removes dependencies from the project's `pyproject.toml` file.
- If multiple entries are given for a given dependency, all of the entries will be removed.

## [Viewing the dependency tree](#viewing-the-dependency-tree)

_Show project dependency relationships._

### [`tree`](#tree)

```sh
uv tree

# Options
-d, --depth  # Maximum display depth of the dependency tree
--group      # Include dependencies from the specified group only
--no-dev     # Omit the development dependency group
--only-dev   # Only include the development dependency group
--outdated   # Show the latest available version of each package in the tree
--universal  # Show a platform-independent dependency tree
```

## [Update the project lockfile](#update-the-project-lockfile)

_Creating and maintaining the project's `uv.lock` file._

### [`lock`](#lock)

```sh
uv lock

# Options
--check                # Check if the lockfile is up-to-date
--dry-run              # Perform a dry run, without writing the lockfile
-U, --upgrade          # Allow package upgrades, ignoring pinned versions in any existing output file
-P, --upgrade-package  # Allow upgrades for a specific package
```

- If the `uv.lock` does not exist, running `uv lock` generates the file at the root of the project.
