require "rack/jekyll"

# Middleware
use Rack::ShowExceptions  # Nice looking errors

run Rack::Jekyll.new