#!/bin/bash

set -o errexit
now=$(date)

if [ "$TRAVIS_BRANCH" == "$GIT_BRANCH" ]; then
	git remote set-url origin https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git

    git config --global user.email "${GIT_EMAIL}"
    git config --global user.name "${GIT_NAME}"
    git config --global push.default simple

	git fetch --tags

    git add readme.md
    git stash
	git checkout $GIT_BRANCH
    git stash apply

    if git diff-index --quiet HEAD --; then
        echo "No changes"
    else
		git commit -m "[ci skip] Build $TRAVIS_BUILD_NUMBER at $now"

		version=$(npm version patch)
		git reset --soft HEAD~2
		git commit -m "[ci skip] $version (Build $TRAVIS_BUILD_NUMBER at $now)"
		git tag -fa $version -m $version

		git push -f --quiet origin $version
		git push --quiet origin $GIT_BRANCH
	fi
else echo "Branch is not $GIT_BRANCH. Skipping deploy!"; fi
