# Groundwork Jekyll
This is a starter project for Jekyll sites.

### Required
`brew install node`  
`brew install heroku-toolbelt`  
`gem install jekyll bundler`  
`bundle install`  
`bundle exec jekyll server --watch`  
`bundle exec guard` (livereload)  

### Deploy to Direct to Heroku
`heroku create siteName`  

Then commit, and then push it up!

`git add .`  
`git commit -m 'first commit'`  
`git push heroku master`  
`heroku open`  

### Clone, Clear and Push

Step 1: Clone
`git clone https://github.com/leylandjacob/groundwork-jekyll.git folderName`  

Step 2: Remove History  

`rm -rf .git`  

Step 3: Initial Commit

`git init`  
`git add .`  
`git commit -m "Initial commit"`  

Step 4: Push to GitHub.

`git remote add origin <github-uri>`  
`git push -u --force origin master`  


# TODO
- Update for Prose.io to handle blogging and uploads to S3
- Add JSON api support