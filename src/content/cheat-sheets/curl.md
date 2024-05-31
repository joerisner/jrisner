---
title: 'cURL'
type: 'Bash/Shell'
isDraft: false
---

## [Basic Usage](#basic-usage)

_Get only the response status code from a request_

```sh
curl -s -o /dev/null -w "%{http_code}\n" http://example.com  #=> 200

# Description
-s                   # Silent mode. Don't show download progress.
-o /dev/null         # Suppress the response body
-w "%{http_code}\n"  # Write-out the numerical response code (+ newline)
```

## [Download to File](#download-to-file)

_Write output to a local file instead of stdout_

```sh
curl http://example.com/some-file.txt -o ./myfile.txt
```

_Write output to a local file named like the remote file_

```sh
curl -O http://example.com/some-file.txt
```
