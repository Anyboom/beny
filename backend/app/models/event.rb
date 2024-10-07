class Event < ApplicationRecord
  belongs_to :competition
  belongs_to :GuestTeam
  belongs_to :HomeTeam
  belongs_to :Sport
  belongs_to :Forecast
  belongs_to :Bet
end
