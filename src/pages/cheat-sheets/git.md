---
layout: '../../layouts/CheatSheet.astro'
feature: 'Git'
---

## [Commits](#commits)

`reset`

_Resets the current branch HEAD to a given state, unstages any changes, and deletes any changes from the working directory. Use with caution._

```bash
# Reset to a specific commit
git reset --hard [<commit>]

# Reset HEAD to origin (master branch in this example)
git fetch origin
git reset --hard origin/master
```

`revert`

_Creates a new commit at HEAD that reverts all changes from the commit passed to `revert`. With the `--no-edit` option, we can skip opening the commit message editor and, instead, use the original commit message prepended with the word "Revert"._

```bash
git revert --no-edit [<commit>]
```

`--amend`

_Amends the most recent commit. Most commonly, this is used to change the commit message, but it can also be used to add additional (staged) changes to the most recent commit. Changes the commit SHA._

```bash
# Amend commit message for most recent commit
git commit --amend -m "<new_message>"

# Amend the latest commit without changing the commit message
git commit --amend --no-edit
```

## [Branches](#branches)

`--unset-upstream`

_Removes upstream tracking of a branch. If no branch is specified it defaults to the current branch._

```bash
git branch --unset-upstream [<branch>]
```

## [Logs](#logs)

`--pretty=short --graph`

_Minimizes the commit details and displays a text-based graphical representation of the git history in the output._

```bash
git log --pretty=short --graph
```
