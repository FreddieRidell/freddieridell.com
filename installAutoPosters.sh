#!/bin/bash

cd autoPosters
for x in * ; do
	pushd $x
		yarn 
		yarn deploy
	popd;
done
