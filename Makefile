# BASE MAKEFILE

BASE_DIR=$(shell pwd)

first:
	echo some text

setup:
	docker pull python:3
	echo build
	docker-compose build

run:
	echo run

clean:
	docker-compose stop
	docker-compose rm -fv
	docker rm $(docker ps -a | awk '{print $1}' | grep \d)
	docker rmi $(docker images | grep '^<none>' | awk '{print $3}')

help:
	@make run
