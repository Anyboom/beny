class Sport < ApplicationRecord
  has_one :event

  attr_accessor :name
end
