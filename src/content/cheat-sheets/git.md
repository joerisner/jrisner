---
title: 'Git'
type: 'Git'
isDraft: false
---

## [Commits](#commits)

### [`reset`](#reset)

_Resets the current branch HEAD to a given state. Use with caution._

```sh
git reset <commit>    # Reset to a specific commit

# Options
--hard      # Unstage changes and delete changes from the working directory
--soft      # Keep unstaged and working directory changes

# Example: Reset HEAD to origin/main
git fetch origin
git reset --hard origin/main
```

### [`revert`](#revert)

_Creates a new commit at HEAD that reverts all changes from the commit passed to `revert`._

```sh
git revert <commit>

# Options
--no-edit   # Use the original commit message, prepended w/ the word "Revert"
```

### [`rev-parse`](#rev-parse)

_Fetch the current HEAD commit SHA._

```sh
git rev-parse HEAD
```

### [`--amend`](#--amend)

_Amends the most recent commit. Commonly used to change the commit message, but it can also be used to add additional (staged) changes to the most recent commit. Changes the commit SHA._

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
git branch --unset-upstream <branch>
```

### [`rev-parse (for branch)`](#rev-parse-for-branch)

_Fetch the current HEAD branch name._

```sh
git rev-parse --abbrev-ref HEAD
```

## [Logs](#logs)

### `--pretty=short --graph`

_Minimizes the commit details and displays a text-based graphical representation of the git history in the output._

```sh
git log --pretty=short --graph
```
