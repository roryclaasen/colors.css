#!/bin/bash
BRANCH="project"

now=`date`

if [ "$TRAVIS_BRANCH" == "$BRANCH" ]; then
	set -o errexit

	git config --global user.email "travis@travis-ci.org"
	git config --global user.name "Travis CI"

	git add dist
	git commit -m "Built colors.css by Travis CI, Build $TRAVIS_BUILD_NUMBER ($now)"
	git push --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"
else
	echo "Branch is not $BRANCH. Skipping deploy!"
fi
