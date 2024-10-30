class CreateBets < ActiveRecord::Migration[7.2]
  def change
    create_table :bets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
