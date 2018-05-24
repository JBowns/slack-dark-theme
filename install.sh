#!/bin/bash

apppath=$(find /Applications -name 'Slack.app')
resourcespath="$apppath/Contents/Resources/app.asar.unpacked/src/static"
interoppath="$resourcespath/ssb-interop.js"

cp -r css $resourcespath

cat apply-theme.js >> $interoppath
