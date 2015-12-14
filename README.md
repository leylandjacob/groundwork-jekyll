# Groundwork Jekyll
This is a starter project for Jekyll sites.

### Required
`brew install node`
`brew install heroku-toolbelt`
`gem install jekyll bundler`
`bundle install`
`bundle exec jekyll server --watch`
`bundle exec guard` (livereload)

### Deploy to Heroku
`heroku create siteName`
Then commit, and then push it up!

`git add .
 git commit -m 'first commit'
 git push heroku master
 heroku open`


# TODO
- Fix Bootstrap tether.js issue
- Add error and maintenance pages for S3
- Add pretty Prose.io config
- Update for Prose.io to handle blogging and uploads to S3