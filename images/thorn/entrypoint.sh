#!/bin/sh
yarn add --dev '@sugarcrm/thorn' && yarn -s install
exec "$@"
