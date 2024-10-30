class CreateEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :events do |t|
      t.belongs_to :competition, null: false, foreign_key: true
      t.belongs_to :home_team, null: false, foreign_key: { to_table: :teams }
      t.belongs_to :guest_team, null: false, foreign_key: { to_table: :teams }
      t.belongs_to :sport, null: false, foreign_key: true
      t.belongs_to :forecast, null: false, foreign_key: true
      t.belongs_to :bet, null: false, foreign_key: true
      t.integer :coefficient, null: false, default: 1
      t.integer :status, null: false, default: 0
      t.boolean :is_pre_match, null: false, default: false

      t.timestamps
    end
  end
end
