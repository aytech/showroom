#!/usr/bin/env bash

rm --force showroom.zip &&
  (cd ui/app && PUBLIC_URL=/static BUILD_PATH=../dist yarn build) &&
  zip -r \
    --exclude=*.git* \
    --exclude=*.idea* \
    --exclude=*.venv* \
    --exclude=*.env* \
    --exclude=*.gitignore* \
    --exclude=*.pytest_cache* \
    --exclude=*__pycache__* \
    --exclude=*showroom/asgi.py* \
    --exclude=*showroom/wsgi.py* \
    --exclude=*showroom/logs* \
    --exclude=*showroom/media* \
    --exclude=*showroom/static* \
    --exclude=*tests* \
    --exclude=*ui/app* \
    --exclude=*build.sh* \
    --exclude=*db.sqlite3* \
    --exclude=*docker-compose.yml* \
    --exclude=*Dockerfile* \
    --exclude=*manage.py* \
    showroom.zip .