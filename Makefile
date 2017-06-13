# BASE MAKEFILE

BASE_DIR=${CURDIR}
CLEAN_STR=docker-compose stop && docker-compose rm -fv
TEST_DIR=$(BASE_DIR)/etc/test/etc/
PROD_DIR=$(BASE_DIR)/etc/prod/etc/
DEV_DIR=$(BASE_DIR)/etc/dev/etc/

first:
	echo some text

setup:
	@docker pull python:3
	@docker pull nginx
	@echo build

clean:
	@cd $(TEST_DIR) && $(CLEAN_STR)
	@cd $(PROD_DIR) && $(CLEAN_STR)
	@cd $(DEV_DIR) && $(CLEAN_STR)

clean_all:
	@docker rm $(docker ps -a | awk '{print $1}' | grep "\d")
	@docker rmi $(docker images | grep '^<none>' | awk '{print $3}')

prod:
	@make clean
	@cd $(PROD_DIR) && docker-compose build && docker-compose up

dev:
	@make clean
	@cd $(DEV_DIR) && docker-compose build && docker-compose up

run:
	@make dev

help:
	@make run
