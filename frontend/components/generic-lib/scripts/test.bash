#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

#  get project name from package.json
PROJECT_NAME=$(node -p "require('../package.json').name")

yarn --cwd .. jest --verbose --coverage

rm -rfv ../../../../package/coverage/$PROJECT_NAME
mkdir -p ../../../../package/coverage/$PROJECT_NAME
cp -rfv ../coverage/* ../../../../package/coverage/$PROJECT_NAME