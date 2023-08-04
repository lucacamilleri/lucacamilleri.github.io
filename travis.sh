#!/usr/bin/env bash
set -e # halt script on error

echo 'Testing travis...'
bundle exec jekyll build
bundle exec htmlproofer ./_site --only-4xx --url-ignore 'http://scholar.google.com/citations?user=cLlRcPYAAAAJ'
