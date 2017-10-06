#!/bin/bash

echo "module.exports = [$( find ../build -name "*index.html" | sed -e "s/\.\.\/build/\"/g" -e "s/index\.html/\",/g" )];" > pages.js
