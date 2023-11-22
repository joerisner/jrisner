---
layout: '../../layouts/CheatSheet.astro'
feature: 'Docker'
---

## [Images](#images)

### _Build image from a Dockerfile_

```sh
docker build -t <image_name>
docker build -t <image_name> . --no-cache # Build the image without a cache
```

### _List local images_

```sh
docker images
```

### _Delete an image_

```sh
docker rmi <image_name>
```

### _Remove all unused images_

```sh
docker image prune
```

### _Pull an image from Docker Hub_

```sh
docker pull <image_name>
```

## [Containers](#containers)

### _Create and run a container from an image_

```sh
docker run <image_name>

# Options
-d, --detach    # Run the container in detached mode
-it             # Interactive + TTY - Open a shell in the new container
--name          # Assign a name to the container
-p, --publish   # Expose container ports to host ports
--rm            # Automatically remove the container on exit
-v, --volume    # Mount (create) a named volume for data persistence beyond container lifecycle
```

### _List containers_

```sh
docker ps # List running containers

# Options
-a, --all       # List all containers (running & stopped)
-l, --latest    # List latest created container
-q, --quiet     # Only display container IDs
-s, --size      # Display total file sizes
```

### _Start an existing container_

```sh
docker start <container_name_or_id>

# Options
-a, --attach    # Attach STDOUT and forward signals
```

### _Stop a running container_

```sh
docker stop <container_name_or_id>
```

### _Accessing containers_

```sh
docker attach <container_name>       # Attach to a detached container so it runs in foreground
docker logs <container_name>         # Fetch and follow the logs of a container
docker exec -it <container_name> sh  # Open a shell (sh/bash/etc.) inside a running container
```

### _Copying files from host machine to container_

```sh
docker cp local/test.txt <container_name>:/app
```

### _Removing containers_

```sh
docker rm <container_name>  # Remove a single (stopped) container
docker container prune      # Remove all stopped containers
```
