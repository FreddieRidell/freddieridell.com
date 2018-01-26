#!/bin/bash

for x in autoPosters/* ; do
	pushd $x
		../../node_modules/.bin/serverless deploy 
	popd;
done
