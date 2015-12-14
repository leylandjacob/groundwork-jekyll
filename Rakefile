namespace :assets do
  task :precompile do
    puts `JEKYLL_ENV=production bundle exec jekyll build && cd public npm install &&  cd public/javacripts node r.js -o include=requireLib build.js`
  end
end