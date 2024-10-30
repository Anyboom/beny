class Event < ApplicationRecord
  belongs_to :competition
  belongs_to :guest_team
  belongs_to :home_team
  belongs_to :sport
  belongs_to :forecast
  belongs_to :bet

  enum :status, [ :win, :lose, :return, :waiting ]
end
