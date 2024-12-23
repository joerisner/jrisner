---
title: 'cURL'
type: 'Bash/Shell'
isDraft: false
---

## [Basic usage](#basic-usage)

_Get only the response status code from a request._

```sh
curl -s -o /dev/null -w "%{http_code}\n" http://example.com  #=> 200

# Description
-s                   # Silent mode. Don't show download progress.
-o /dev/null         # Suppress the response body
-w "%{http_code}\n"  # Write-out the numerical response code (+ newline)
```

_Pretty-print JSON response body using `jq` (must have jq installed already)._

```sh
curl -s https://official-joke-api.appspot.com/random_joke | jq .
```

## [Download to file](#download-to-file)

_Write output to a local file instead of stdout._

```sh
curl http://example.com/some-file.txt -o ./myfile.txt
```

_Write output to a local file named like the remote file._

```sh
curl -O http://example.com/some-file.txt
```
