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

	git add dist
    git add readme.md

	changed=false

	if ! git diff-index --quiet HEAD --; then
		changed=true
	fi

	git commit -m "[ci skip] Built colors.css (Build: $TRAVIS_BUILD_NUMBER at $now)"

	if [ "$changed" = true ] ; then
		version=$(npm version patch)
		git commit --amend -m "[ci skip] Build $TRAVIS_BUILD_NUMBER version update $version"
		git push --quiet origin $version
	fi
	
	git push --quiet origin $GIT_BRANCH
else echo "Branch is not $GIT_BRANCH. Skipping deploy!"; fi
