all:
	docker pull python:3
	echo build
	docker-compose build

run:
	echo run

clean:
	docker-compose stop
	docker-compose rm -fv