---
title: 'Docker Containers'
type: 'Docker'
isDraft: false
---

## [Containers](#containers)

_Create and run a container from an image._

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

_List containers._

```sh
docker ps # List running containers

# Options
-a, --all       # List all containers (running & stopped)
-l, --latest    # List latest created container
-q, --quiet     # Only display container IDs
-s, --size      # Display total file sizes
```

_Start an existing container._

```sh
docker start <container_name_or_id>

# Options
-a, --attach    # Attach STDOUT and forward signals
```

_Stop a running container._

```sh
docker stop <container_name_or_id>
```

_Accessing containers._

```sh
docker attach <container_name>       # Attach to a detached container so it runs in foreground
docker logs <container_name>         # Fetch and trail the logs of a container
docker exec -it <container_name> sh  # Open a shell (sh/bash/etc.) inside a running container
```

_Copying files from host machine to container._

```sh
docker cp local/test.txt <container_name>:/app
```

_Removing containers._

```sh
docker rm <container_name>  # Remove a single (stopped) container
docker container prune      # Remove all stopped containers
```
