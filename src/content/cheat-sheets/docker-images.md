---
title: 'Docker Images'
type: 'Docker'
isDraft: false
---

## [Images](#images)

_Build image from a Dockerfile._

```sh
docker build .

# Options
-t, --tag      # Build the image with a tag
--no-cache     # Build the image without using a cache
--build-arg    # Build the image with a build argument
```

_List local images._

```sh
docker images
```

_Remove images._

```sh
docker rm <image_name>   # Remove a single image
docker image prune       # Remove all unused images
```

_Pull an image from Docker Hub._

```sh
docker pull <repository>:<tag>  # Docker engine will pull the latest version if tag is omitted
```
