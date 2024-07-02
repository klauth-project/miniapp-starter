#!/usr/bin/env sh

if [ $# != 3 ]; then
  echo "Usage: $0 <project> <module> <port>"
  exit 0
else 
  _project=$1
  _module=$2
  _port=$3
fi

rm -rf .temp
mkdir .temp
cd .temp

git clone https://github.com/TeamXFintech/mfe-starter.git
cd mfe-starter

grep -rl __PROJECT__ . | xargs sed -i "" -e 's/__PROJECT__/'$_project'/g'
grep -rl __MODULE__ . | xargs sed -i "" -e 's/__MODULE__/'$_module'/g'
grep -rl __PORT__ . | xargs sed -i "" -e 's/__PORT__/'$_port'/g'

mv package ../../$_module
cd ../../
rm -rf .temp

echo 'DONE.'
