class CreateEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :events do |t|
      t.belongs_to :competition, null: false, foreign_key: true
      t.belongs_to :home_team, null: false, foreign_key: { to_table: :teams }
      t.belongs_to :guest_team, null: false, foreign_key: { to_table: :teams }
      t.belongs_to :sport, null: false, foreign_key: true
      t.belongs_to :forecast, null: false, foreign_key: true
      t.belongs_to :bet, null: false, foreign_key: true
      t.integer :coefficient
      t.boolean :status
      t.boolean :is_pre_match

      t.timestamps
    end
  end
end
