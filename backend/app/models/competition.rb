class Competition < ApplicationRecord
  belongs_to :country
  has_one :event
end
