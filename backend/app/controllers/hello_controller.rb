class HelloController < ApplicationController
  def index
    @data = { hello: "keyy" }
    render json: @data
  end
end
