---
title: 'Docker Images'
type: 'Docker'
isDraft: false
---

## [Images](#images)

### _Build image from a Dockerfile_

```sh
docker build .

# Options
-t, --tag      # Build the image with a tag
--no-cache     # Build the image without using a cache
--build-arg    # Build the image with a build argument
```

### _List local images_

```sh
docker images
```

### _Delete an image_

```sh
docker rm <image_name>
```

### _Remove all unused images_

```sh
docker image prune
```

### _Pull an image from Docker Hub_

```sh
docker pull <image_name>
```
