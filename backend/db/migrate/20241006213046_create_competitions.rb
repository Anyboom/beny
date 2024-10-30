class CreateCompetitions < ActiveRecord::Migration[7.2]
  def change
    create_table :competitions do |t|
      t.string :name, null: false
      t.belongs_to :country, null: false, foreign_key: true
    end
  end
end
