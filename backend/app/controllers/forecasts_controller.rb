class ForecastsController < ApplicationController
  render json: Forecast.all
end
