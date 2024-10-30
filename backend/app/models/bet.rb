class Bet < ApplicationRecord
  belongs_to :user
  has_many :events

  enum :status, [ :win, :lose, :return, :waiting ]
end
