install: 
	npm ci
brain-games:
	node bin/games/brain-games.js
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin//gamesbrain-calc.js
brain-progression:
	node bin/games/brain-progression.js
brain-prime:
	node bin/games/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
