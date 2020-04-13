rm -Rf ./dist
npm run build
git checkout gh-pages
git add dist -f
git commit -m "gh-pages"
git subtree push --prefix dist origin gh-pages
git co master
