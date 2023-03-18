---
title: "The power of docker's MICRO images, a Golang journey Vol.1"
date: "2019-09-15"
author: Jorge
categories:
- code
- golang
- pipeline
- microservice
- golang-journey 
tags:
- code
- golang
- pipeline
- microservice
- golang-journey
toc: true
summary: |
  A Golang journey is a series of articles about golang as microservice.
  It is a complementary set for the platform journey series.
  In this first volume we will cover the docker images and CI/CD pipeline.
---


I know, It might be difficult sometimes, the process of **building your images** with any kind of constrain (monetary, computational, size...) was always kept me awake at night.

After all building a **super small image** is always a good idea. It doesn't matter the outcome, your client might be happier spending less resources, you might be happier to have more space to deploy more services in the same instance or cluster...

Docker has been around for some time now and you probably know already the goodies of it (check [_the platform journey series_](/tag/platform-journey/) to see how **ECS** can handle your containers).

In this article we are going to work with **Docker's multistage builds** as well as some tricks and hacks for **scratch images**. Here we will set the entry point for the _Golang journey_ series.

```docker
FROM golang:latest

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["app"]
```

> **FROM** scratch

Most Dockerfiles start from a parent image. The _scratch_ image is the most minimal image in Docker. This is the base ancestor for all other images.

There are some reasons to go for an image from scratch beside the size of the resulting size image.

Attack surface is less provable because  we reduce the dependencies (layers) on other images, meaning what's really needed to execute your application is in the image. Handling the required dependencies ourselves for our application is the price we pay for  the goodies of a base image.

## How does a [pipeline](https://travis-ci.com/jorgechato/api.jorgechato.com) looks like?

<img src="/img/2019/09/ecr.png">

Let's assume our pipeline involves upload and tag an image into **AWS ECR**. After I commit my changes into a repository I get all the feedback about my code analysis and tests in a production like environment.

A basic _[travis](https://travis-ci.com)_ pipeline would looks like the following:

```yaml
dist: trusty
sudo: true
language: go
go:
- 1.12.x
services:
- docker
env:
  global:
  - IMAGE_NAME=api-jorgechato-com
  - secure: cHNC4ysYBXJdVyod42z3chXLH0V7n231fPeLjDjpYiW2OekAYKcIxIa+egSnXT9VdFQZt/vCNw4t9d5/6d/9zyn3sdBj7ll+zpB+OFdFzd2wey4e8U1ZTa2DLHcWs/CERnbsP1YWw0NHi/FQ771OavskGoDa8CM6K3TtquVMGyefB6V80XC3OJNHZXcCgfA+qbhGOdHQIbcIhU7d0vbJDveuye4Saq+MVltxPeaXRQbUlZmQisvlzSgabtfvDC0nQWy5v+9YJUGIGTWj15/q0aDpVkiE2ehqlj5G5d8Tl3RpqXEb15Dzrh93K9mBP0LnmlGs1eNZ+rJZ1H067yeE76+Fgkp14aD/WZxjZ0sY41W+eS0ySx6Gv1UoDm5658O2PTpTgRcX4W+k56YNsUBL6dUyVlDaKKtkRT3GnGkX7D+yjgFsGIRl0qec9OK9gOHyhh2x2RfbupO/aCghuBAf3I94LvOk0wpYUmL6jS5B5mBGCRz0YYFdSeAda/nq1KpRAwV67etALPuHAT9FXHV2EAJxIoe5zkCwvI2Bo4NhiIzSCWAt7VWoUJdXJ0nodCLDoFXMITid+ADvl8YcT756mGmqFlomh0QB6LRy8F+4XUNpOJ0RFf+Ndv3SYUDBtN4CJC+Y7ocwBoGxxRDlrDBgHCK3o92DXKSBNUO4UEYJ1Es=
  - secure: cQlLnVPRU8WhrRuWRbQrCV0ipWC5gG1JzxIOSiKDSbnAe5YoJJOAaW6js2RdRxbCn7u+vBBpNt6dF3qNeP4WRs9wrjy5zL/sbrlOtySZ0GWPawT1RxGYcEJYVv9LpcPGXPr3AkjNHoC51T7pwOf86pHCAzNJpW5JpgQpEuuCTvsQyMXzdG7jjIYH4Yx0sFoG49VDHEb5Vbz8qjHU3lc9fLVlmWyrjVWVWU3lcGJrmZIkUS3k1zTLSIDYIu8NIwXQteE3TLwSryBl/CROTW/ex9u3F9SMXO8xTVWNUIUl/SfUmowegCfh5plojoG3ZslaJVgtdSRT6x/LNgvGYcIFgYscWrZAMFBzTPrWIEbaovO3ewSv3/IakMklhN7pUKPZxEe+ISIKJOZjXGCzWhrmQ1nPXbblbYhtRwCSoFfOe2Q5ugQqribgu1OelQgifBPl+8QBGHQuknI0dJGjU7Z19HxXRD9WLeYPeud83PMWL0mbvzJ2qdvRfqE7Qpuo+ZhAPPTSYxJjB7YYaUhXtlUp4PqX42o0Oc8UM2Y5OuyxvnHNQBZ4kWBRSWlbvF4myryy3ESEknG6ME9bYe55xnxw+XgiQZvp1X2S9u25cwUzFJJcEyZbcRWk8ZYNadrABTHVRfqjpMyl+Wi1DiMOd2eaI2BGFAP/gh6lDnjkeXgzsZg=
  - secure: z2eIMvTcbRTya9iSNRkEvlodrgbL2bVXCpa2WryboqkEcjSG8MBolvr7hHQF21PHWPtvziFxqdg+BoJBGHHZ4X4qxxnTFjB+Bd2PLVNlXlBwtJm+jw4Ew0UbegV8P/H7G3lOhWChCewaLunWGTW4YMkwHwDr+5gGNFxtn+KBRWFYtmbsdU+FjSsNljmzs/f3vqkvmy5BOJgbYy9KhaoJ+YButYyRpgb+qcdGgK/0r6lQ9cuuwNEv1VSYv0HCR1M8btPZQ2lQ31VoSXoDwbleu0g9+WCOII68jDKqr6TYoK7YMAz6D36Gygz2VTRU+IjhztNGyjLCDOPCtvg1dW1qyUczjG4uv622RjLBMVddwtob+r2UbjqmbBMyfOF0/L9gxRVHe6DlB6JAiJ4g7AkNflFJF0YUBud8eWewLJMJGRwPkUEifRhaKzvpM7mz5fbfL8qpEazhKkXBCOE2C5HPPrNQkgyxSB5N+jwQyvXoyQQMJjwM0gyUuuJwwhapxjc2NobT9op+gJP6cwC/nTaTUA36drsoRah0BJXP81yFp5EnY/uZAO/dOL2B0G4mC5z0Tb0ChhFk9QnqvgMBRar2cBYRk55N7JUVyCHfdDmokYEhYxk88aqZNmVstqVCuq41/vcnInfx0Yz4UPcME2DGEEXr9TOt2uBLveM9sSl+GOg=
  - secure: TFX7gkzru36X2diSYve7ynCVMKHiK0Ob4PV9SJ3e1FUK6OcFjQyARjGtD8ZJG0hTjxGgmyX4toO7yB5vRV4U4T3tFttQSXC7kEaIVCkrhDNvVF22TAh8qMVOCz78sexd8dT/gklX2SyjJFeTGu0NW2juI1TEESqhkMHo8k/qLl9xFEmtMXeoB0UdRGq19OCfPuSxXZKxLb+QFlmgcqS9F9GRzfuM4UYvRXp6aGhsUikCiAvaoOgM2wrZDdCADqMjipe5k1SCcqN5LmqbLUblOANwAPKnr9S1S0kPpndX3u4PIRIIlGq670KjsaT9UDW49VMwjx6LppE6H+429lmQ6GTlEAe3Ks1+VAgdo8Baio8PLrlnWNwORUc6Um2z3qsiATalvf//N/o2ailXM772Dwkqgp3XH3jl0OkKnpiLO77svE6Y18fXw59bctacd4Ujz/P/FEs6LOecEHWSzSsNfJ3iwaiHu8GoigWLxtkiry8uBLeYLmjF5JneMZC4knEpuDGAnMo7VvI8IMBZAGL57aaHOQ3wG+gXGk15YJTiDYpB0SXWvco5c3zcMT0bvwmqLUihUMJiRNqnP3pu99rRAD7dnA65NARQjM99Gd4VASpMKESUutTCfVTeN2JjwVA9cdOMPW9u2ZwxHhaluFMvm4X4A2KyJaLmwRP6tyWSdQs=

before_install:
- pip install --user awscli
- export PATH=$PATH:$HOME/.local/bin
install:
- go mod download
- go mod verify

script:
- go test -race -cover -v -coverprofile=coverage.out ./... > test.output
after_success:
- docker build --pull --cache-from ${IMAGE_NAME} --tag ${IMAGE_NAME} .

deploy:
  provider: script
  script: bash lazy.sh
  target-branch: master
  on:
    branch: master
after_script:
- docker images
```

Where the lazy.sh is nothing but a registry tag and upload.

```bash
#!/bin/bash -e

REGISTRY_URL=${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

aws configure set default.region ${AWS_REGION}

$(aws ecr get-login --no-include-email)

docker tag ${IMAGE_NAME} ${REGISTRY_URL}/${IMAGE_NAME}:latest

docker push ${REGISTRY_URL}/${IMAGE_NAME}:latest
```

If we dive into the _Dockerfile_ we will find two **FROM** statement in a single file.

```Docker
FROM golang:1.12-alpine as builder

RUN apk add -U --no-cache git ca-certificates tzdata

COPY . /app
WORKDIR /app

RUN go mod download
RUN go mod verify

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="${LDFLAGS}" -o server server.go


FROM scratch as final

ENV GIN_MODE=release

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /app/server /opt/server

ENTRYPOINT ["/opt/server"]
```

```bash
$ docker images
REPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE
api-jorgechato-com            latest              6ce8bbe28d7e        19 seconds ago      21.2MB
<none>                        <none>              d39b7d2094c1        20 seconds ago      567MB
golang                        1.12-alpine         e0d646523991        5 days ago          350MB

```

Having a look at the images created, **golang:1.12-alpine** is the base image that we used to build or service. The residual image is tag as **<none>** and comparing the size of it with the service image **api-jorgechato-com,** the difference is huge.

Since the **scratch** image is dependences free you might end up with errors you have never experience in a development environment. There is a need to be extra cautious about what your service required, SSL request (ca-certificates), current time (zoneinfo)... At the end you are building your environment from _SCRATCH_.

