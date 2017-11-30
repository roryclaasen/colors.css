#!/bin/bash
now=$(date)
if [ "$TRAVIS_BRANCH" == "$GIT_BRANCH" ]; then
	set -o errexit

	git config --global user.email "${GIT_EMAIL}"
	git config --global user.name "${GIT_NAME}"
    git config --global push.default simple

	git add dist
    git add readme.md
	git commit -m "[ci skip] Built colors.css (Build: $TRAVIS_BUILD_NUMBER at $$(date))"
	git push --quiet "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git" HEAD:$GIT_BRANCH
else
	echo "Branch is not $GIT_BRANCH. Skipping deploy!"
fi
