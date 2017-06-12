FROM python:3

ARG BASE_DIR
RUN mkdir -p $BASE_DIR
WORKDIR $BASE_DIR
ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt
#ADD ./ $BASE_DIR # uncommit if don't use composer
