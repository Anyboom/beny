class SportsController < ApplicationController
  def index
    render json: Sport.all
  end
end
