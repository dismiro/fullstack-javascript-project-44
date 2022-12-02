
install: install-deps publish

install-deps:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
	sudo npm link
lint:
	npx eslint .
