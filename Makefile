current_dir = $(shell pwd)

build:
	podman build -t best-of-backstage backstage

run-local:
	podman run --rm -it -p 3000:3000 \
		-v $(current_dir)/backstage/app-config.yaml:/app/app-config.yaml:z \
		-v $(current_dir)/backstage/app-config.production.yaml:/app/app-config.production.yaml:z \
		best-of-backstage \
		node packages/backend \
		--config app-config.yaml \
		--config app-config.production.yaml
