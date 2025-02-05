# Подтяжка зависимостей
install:
	npm ci
#Пред.Запуск
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
#Линтинг
make lint:
	npx eslint .
