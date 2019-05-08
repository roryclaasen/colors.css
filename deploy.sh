#!/bin/bash
now=$(date)
if [ "$TRAVIS_BRANCH" == "$GIT_BRANCH" ]; then
	set -o errexit

	git config --global user.email "${GIT_EMAIL}"
	git config --global user.name "${GIT_NAME}"
    git config --global push.default simple

	git remote set-url origin https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
	git checkout $GIT_BRANCH
	git fetch --tags

    git add readme.md

	if git diff-index --quiet HEAD --; then
		git commit -m "[ci skip] Build $TRAVIS_BUILD_NUMBER at $now"

		version=$(npm version patch)
		git reset --soft HEAD~2
		git commit -m "[ci skip] $version (Build $TRAVIS_BUILD_NUMBER at $now)"
		git tag -fa $version -m $version

		git push -f --quiet origin $version
		git push --quiet origin $GIT_BRANCH
	fi
else echo "Branch is not $GIT_BRANCH. Skipping deploy!"; fi
