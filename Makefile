.PHONY: start install build test check clean

start: install ## Start the development server
	@printf "\033[32;1mStarting the dev server...\033[0m\n"
	npx astro dev

install: ## Install dependencies
	@printf "\033[32;1mInstalling dependencies...\033[0m\n"
	npm install

build: clean install ## Build the application
	@printf "\033[32;1mBuilding Astro project...\033[0m\n"
	npx astro build

test: build  ## Execute the test suite
	@printf "\033[32;1mExecuting tests...\033[0m\n"
	npx playwright test

check: ## Run CI build checks locally
	@printf "\033[32;1mRunning format checks...\033[0m\n"
	npm run format
	@printf "\033[32;1mRunning lint checks...\033[0m\n"
	npm run lint:js
	npm run lint:md
	@printf "\033[32;1mRunning type checks...\033[0m\n"
	npm run typecheck

clean: ## Remove temporary artifacts
	@printf "\033[32;1mRemoving artifacts...\033[0m\n"
	bin/clean
