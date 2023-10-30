#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

#  get project name from package.json
PROJECT_NAME=$(node -p "require('../package.json').name.split('/').pop()")
echo "📦  Package $PROJECT_NAME"

if [[ -d "../../../../package/coverage/$PROJECT_NAME" ]]; then
  rm -rfv ../../../../package/coverage/$PROJECT_NAME
fi

if [[ -d "../coverage" ]]; then
  mkdir -p ../../../../package/coverage/$PROJECT_NAME
  cp -rfv ../coverage/* ../../../../package/coverage/$PROJECT_NAME
fi