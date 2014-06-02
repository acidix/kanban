require 'sinatra/base'
require 'erb'
require 'sass'

class MySinatraApp < Sinatra::Base

  set :root, File.dirname(__FILE__)

  get '/css/:stylesheet.css' do |stylesheet|
    scss :"scss/#{stylesheet}"
  end

  #Starting actual application
  get '/' do
    erb :index
  end

end
