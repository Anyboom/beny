class CreateTeams < ActiveRecord::Migration[7.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.belongs_to :country, null: false, foreign_key: true
    end
  end
end
