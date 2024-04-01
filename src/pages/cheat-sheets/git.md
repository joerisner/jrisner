---
layout: '../../layouts/CheatSheet.astro'
feature: 'Git'
---

## [Commits](#commits)

### [`reset`](#reset)

_Resets the current branch HEAD to a given state. Use with caution._

```sh
# Reset to a specific commit, unstage changes, and delete changes from the working directory
git reset --hard [<commit>]

# Reset to a specific commit, but keep unstaged & working directory changes
git reset --soft [<commit>]

# Reset HEAD to origin (main branch in this example)
git fetch origin
git reset --hard origin/main
```

### [`revert`](#revert)

_Creates a new commit at HEAD that reverts all changes from the commit passed to `revert`. With the `--no-edit` option, we can skip opening the commit message editor and, instead, use the original commit message prepended with the word "Revert"._

```sh
git revert --no-edit [<commit>]
```

### [`--amend`](#--amend)

_Amends the most recent commit. Most commonly, this is used to change the commit message, but it can also be used to add additional (staged) changes to the most recent commit. Changes the commit SHA._

```sh
# Amend commit message for most recent commit
git commit --amend -m "<new_message>"

# Amend the latest commit without changing the commit message
git commit --amend --no-edit
```

## [Branches](#branches)

### [`--unset-upstream`](#--unset-upstream)

_Removes upstream tracking of a branch. If no branch is specified it defaults to the current branch._

```sh
git branch --unset-upstream [<branch>]
```

### [`fetch --prune`](#fetch---prune)

_Remove references to remote branches that no longer exist. I prefer to setting `fetch.prune` to `true` in my .gitconfig over this, though._

```sh
git fetch --prune
```

## [Logs](#logs)

### `--pretty=short --graph`

_Minimizes the commit details and displays a text-based graphical representation of the git history in the output._

```sh
git log --pretty=short --graph
```

### `rev-parse`

_Fetch the current HEAD commit SHA._

```sh
git rev-parse HEAD
```

_Fetch the current HEAD branch name._

```sh
git rev-parse --abbrev-ref HEAD
```
