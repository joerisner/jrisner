---
description: 'How I migrated from pyenv to uv for managing Python versions.'
heroImage: '/images/starry-night.webp'
isDraft: false
publishDate: '2024-12-27'
tags: ['python']
title: 'Managing Python versions with uv'
---

## Why use a tool for managing Python versions?

When working across multiple Python projects, you'll often find that they require different versions of Python. For example, a legacy project may require Python 3.6 while a newer project uses a more recent version like 3.13. You _could_ install these different versions directly to your system by downloading from [python.org](https://www.python.org/), but it wouldn't be long before you'd probably want to reach for a tool to manage Python versions for you.

For years, [pyenv](https://github.com/pyenv/pyenv) has been the Python community's de facto tool for managing Python installations and was my go-to as well. However, with the rise of [uv](https://docs.astral.sh/uv/) and its ability to not only manage project dependencies, but now Python itself, I decided to ditch pyenv altogether. These are the steps are took to migrate from pyenv to uv.

## Steps

### Removing pyenv

The first thing I did was removed all references to pyenv from my machine. I started by removing the `~/.pyenv` directory. This removed all pyenv-managed Python installations.

```sh
rm -rf $(pyenv root)
```

Next, I removed all pyenv initialization scripts that I had configured in my `.zshrc` file. Lastly, since I use [Homebrew](https://brew.sh/) for managing system packages, I used that to remove pyenv completely.

```sh
brew uninstall pyenv
```

### Installing uv

Once I confirmed pyenv was uninstalled, it was time to install uv. There are several [installation methods](https://docs.astral.sh/uv/getting-started/installation/) available, but as mentioned earlier, I generally reach for Homebrew as often as possible.

```sh
brew update && brew install uv
```

### Configuring uv

Once uv was installed, I added some configuration preferences prior to installing Python versions. One of the things I like about pyenv is that it places everything in a single, easily identifiable `.pyenv` directory in my `HOME` directory. Rather than having binaries and configurations spread across my system, I know that all things pyenv-related can be found in that directory. I wanted to replicate that behavior with uv as much as possible by creating a single `~/.uv` directory. To that aim, I set the following ENV vars in my `.zshrc`.

```sh
export UV_DIR="${HOME}/.uv"
export UV_CACHE_DIR="${UV_DIR}/cache"
export UV_CONFIG_FILE="${UV_DIR}/uv.toml"
export UV_PYTHON_INSTALL_DIR="${UV_DIR}/python/versions"
export UV_PYTHON_BIN_DIR="${UV_DIR}/python/bin"
export UV_TOOL_DIR="${UV_DIR}/tools"
export UV_TOOL_BIN_DIR="${UV_DIR}/tools/bin"
export PATH="${UV_PYTHON_BIN_DIR}:${UV_TOOL_BIN_DIR}:${PATH}"
```

- `UV_CACHE_DIR`: Store cache under `$HOME/.uv/cache`.
- `UV_CONFIG_FILE`: Use `$HOME/.uv/uv.toml` as a configuration file for uv.
- `UV_PYTHON_INSTALL_DIR`: Install all Python versions in `$HOME/.uv/python/versions`.
- `UV_PYTHON_BIN_DIR`: Use `$HOME/.uv/python/bin` as the directory for symlinks to Python executables.
- `UV_TOOL_DIR`: Install all uv tools in `$HOME/.uv/tools`.
- `UV_TOOL_BIN_DIR`: Use `$HOME/.uv/tools/bin` as the directory for symlinks to uv tool executables.
- `PATH`: Prepend `UV_PYTHON_BIN_DIR` and `UV_TOOL_BIN_DIR` to my `PATH` to enable `python` and tool executables.

After configuring the `.uv` directory, I added the following preferences as ENV vars.

```sh
export UV_PYTHON_DOWNLOADS=manual
export UV_PYTHON_PREFERENCE=only-managed
```

- `UV_PYTHON_DOWNLOADS`: By default, uv will automatically download Python versions when needed. I prefer to be in complete control of when Python is installed on my system, so setting this to `manual` allows Python to be installed _only_ during `uv python install`.
- `UV_PYTHON_PREFERENCE`: Configure uv to _only_ use uv-managed Python installations, not system Python installations.

Once I had all of the configuration I wanted set as ENV vars, I sourced my `.zshrc` file. Alternatively, you could just restart your terminal to have the same effect.

```sh
source ~/.zshrc
```

### Installing Python

Prior to installing a Python version, I created the `~/.uv/python` directory to store everything `uv python`-related, and a `uv.toml` file for configuring uv. Currently, this file is empty but will be used in the future for configuring uv tools and projects.

```sh
mkdir -p ${UV_DIR}/python && touch ${UV_DIR}/uv.toml
```

Finally, I installed Python version `3.12`. I also like to have a `python` executable in addition to something like `python3` or `python3.12`, so I added the `--default` option in order to create those symlinks in the `~/.uv/python/bin` directory as well.

```sh
uv python install 3.12 --default
```

Now, running `uv python list` shows the version I installed and `which python` confirms my `PATH` now includes the uv-managed Python executable. Now I can run `python` anywhere in my shell and be sure that I'm executing _only_ uv-managed Python installations.

## Summary

Overall, the switch from pyenv to uv was painless and, even though uv still has yet to release its first major release, the configuration it allows is pretty impressive. I plan on using uv for project dependencies and management as well, so aligning around a single tool for Python projects and installations is a huge gain in developer happiness, at least for me.

There are some caveats to using uv to be aware of, however. For example, it uses [pre-built Python distributables](https://docs.astral.sh/uv/concepts/python-versions/#cpython-distributions) instead of building Python from source, like pyenv. I actually prefer that because it means I don’t need to worry about pre-installing or managing system dependencies specific to building CPython from source. The performance gain, for me, is a worthy trade-off for reproducibility in builds but might not work for all teams or projects.
