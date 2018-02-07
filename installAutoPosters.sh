#!/bin/bash

for x in autoPosters/* ; do
	pushd $x
		yarn install ;
		yarn deploy ;
	popd;
done
