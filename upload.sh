#!/bin/bash

rsync -vrl -e 'ssh -p 12322' --exclude 'upload.sh' * gleng@192.168.0.20:/var/www/tigerking/
