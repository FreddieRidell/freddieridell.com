#!/bin/bash

pushd public/assets
	for r in 48 96 16 32 96 120 180 152 167 192 ; do
		echo "generating favicon@$r.png";
		convert favicon.png -resize "$rx$r" "favicon@$r.png" ;
	done
popd
