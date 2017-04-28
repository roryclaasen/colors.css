#!/bin/bash
BRANCH="master"
now=$(date)
if [ "$TRAVIS_BRANCH" == "$BRANCH" ]; then
	set -o errexit

	git config --global user.email "travis@travis-ci.org"
	git config --global user.name "Travis CI"
    git config --global push.default simple

	git add dist
    git add readme.md
	git commit -m "[ci skip] Built colors.css by Travis CI (Build: $TRAVIS_BUILD_NUMBER at $now)"
	git push --quiet "https://${GH_TOKEN}@github.com/${GH_REPO}.git" HEAD:master
else
	echo "Branch is not $BRANCH. Skipping deploy!"
fi
