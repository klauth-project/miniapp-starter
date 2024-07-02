#!/usr/bin/env sh

if [ $# != 3 ]; then
  echo "Usage: $0 <project> <module> <port>"
  exit 0
else 
  _project=$1
  _module=$2
  _port=$3
  _pwd=$PWD
fi

if [ -d "$_module" ]; then
  echo "ERROR! - Module '${_module}' already exists"
  exit 0
fi

rm -rf .temp
mkdir .temp
cd .temp

echo '--- Cloning miniapp-starter ---'
echo 'Source repository: https://github.com/klauth-project/miniapp-starter.git'
git clone https://github.com/klauth-project/miniapp-starter.git
cd miniapp-starter

grep -rl __PROJECT__ . | xargs sed -i "" -e 's/__PROJECT__/'$_project'/g'
grep -rl __MODULE__ . | xargs sed -i "" -e 's/__MODULE__/'$_module'/g'
grep -rl __PORT__ . | xargs sed -i "" -e 's/__PORT__/'$_port'/g'


echo '--- Installing dependencies ---'
cd package
yarn install

echo '--- Finalizing ---'
cd ..
mv package $_pwd/$_module
rm -rf .temp

echo 'DONE.'
