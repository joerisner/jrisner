---
description: 'Fundamentals of the `uv` package and project manager.'
heroImage: '/images/starry-night.webp'
isDraft: false
publishDate: '2024-12-16'
tags: ['python']
title: 'Python Project Management with uv'
---

Taking the time to form development environment that you enjoy working in can make a substantial difference in your projects. For me, much like in my natural work environment, working in a cumbersome, bloated, or disorganized development environment has a direct effect on my productivity, and even my desire to open a project.

## What I used to do

```sh
# Use `pyenv` to install a specific Python version
pyenv install <python_version>
# Create a virtual environment using the `venv` module
python3 -m venv .venv
# Activate the virtual environment
source ./.venv/bin/activate
# Install dependencies in the virtual environment
pip install -r requirements.txt
# Run the Flask application
flask run
```

## What I do now

For managing system packages, I use the Homebrew package manager. Install `uv` by running:

```sh
brew update && brew install uv
```

Create a `.python-version` file in the project. Run `uv python pin` to create the file. This ensures that `uv` uses that version [when making requests](https://docs.astral.sh/uv/concepts/python-versions/#python-version-files).
One thing to note, is that `uv` uses pre-built Python distributables instead of building Python from source, like `pyenv`. I actually prefer that because it means I don't need to worry about preinstalling or managing system dependencies specific to building CPython. The performance gain, for me, is a worthy tradeoff for reproducibility in builds but might not work for all teams or projects. https://docs.astral.sh/uv/concepts/python-versions/#cpython-distributions.

Where does uv install Pythons? https://docs.astral.sh/uv/concepts/python-versions/#discovery-of-python-versions (`UV_PYTHON_INSTALL_DIR`)

```sh
# Install Python version found in `.python-version` file
uv python install
uv sync
```

## Configuring uv at the user level

https://docs.astral.sh/uv/configuration/files/

- disable auto-downloading of Python versions: https://docs.astral.sh/uv/concepts/python-versions/#disabling-automatic-python-downloads
- Configure managed Python versions only: https://docs.astral.sh/uv/concepts/python-versions/#adjusting-python-version-preferences
