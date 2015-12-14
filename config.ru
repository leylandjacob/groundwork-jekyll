require "rack/jekyll"
require 'yaml'

# Middlewarerequire
use Rack::ShowExceptions  # Nice looking errors

run Rack::Jekyll.new