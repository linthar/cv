#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Testacular Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

testacular $BASE_DIR/../config/testacular.conf.js $*

## se elimino el start
# testacular start $BASE_DIR/../config/testacular.conf.js $*
