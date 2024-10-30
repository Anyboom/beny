class CompetitionsController < ApplicationController
  def index
    render json: Competition.includes(:country)
  end
end
