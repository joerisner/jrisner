---
title: 'printf Color Output'
type: 'Bash/Shell'
isDraft: false
---

## [Colors](#colors)

```sh
printf "\033[0;30mDevelopers!\033[0m\n"   # black
printf "\033[0;31mDevelopers!\033[0m\n"   # red
printf "\033[0;32mDevelopers!\033[0m\n"   # green
printf "\033[0;33mDevelopers!\033[0m\n"   # yellow
printf "\033[0;34mDevelopers!\033[0m\n"   # blue
printf "\033[0;35mDevelopers!\033[0m\n"   # pink
printf "\033[0;36mDevelopers!\033[0m\n"   # teal
printf "\033[0;37mDevelopers!\033[0m\n"   # white
```

## [Bold](#bold)

```sh
printf "\033[30;1mDevelopers!\033[0m\n"   # black
printf "\033[31;1mDevelopers!\033[0m\n"   # red
printf "\033[32;1mDevelopers!\033[0m\n"   # green
printf "\033[33;1mDevelopers!\033[0m\n"   # yellow
printf "\033[34;1mDevelopers!\033[0m\n"   # blue
printf "\033[35;1mDevelopers!\033[0m\n"   # pink
printf "\033[36;1mDevelopers!\033[0m\n"   # teal
printf "\033[37;1mDevelopers!\033[0m\n"   # white
```

## [Text effects](#text-effects)

Patterns listed below are for **red** text. To use the same effects for other colors, change `31` to one of the other color values as demonstrated in the [colors](#colors) section above.

```sh
printf "\033[31;2mDevelopers!\033[0m\n"   # faint
printf "\033[31;3mDevelopers!\033[0m\n"   # normal
printf "\033[31;4mDevelopers!\033[0m\n"   # underline
printf "\033[31;5mDevelopers!\033[0m\n"   # blink
printf "\033[31;7mDevelopers!\033[0m\n"   # negative
```
