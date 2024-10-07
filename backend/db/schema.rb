# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_07_194051) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bets", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_bets_on_user_id"
  end

  create_table "competitions", force: :cascade do |t|
    t.string "name"
    t.bigint "country_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_competitions_on_country_id"
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.bigint "competition_id", null: false
    t.bigint "home_team_id", null: false
    t.bigint "guest_team_id", null: false
    t.bigint "sport_id", null: false
    t.bigint "forecast_id", null: false
    t.bigint "bet_id", null: false
    t.integer "coefficient"
    t.boolean "status"
    t.boolean "is_pre_match"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bet_id"], name: "index_events_on_bet_id"
    t.index ["competition_id"], name: "index_events_on_competition_id"
    t.index ["forecast_id"], name: "index_events_on_forecast_id"
    t.index ["guest_team_id"], name: "index_events_on_guest_team_id"
    t.index ["home_team_id"], name: "index_events_on_home_team_id"
    t.index ["sport_id"], name: "index_events_on_sport_id"
  end

  create_table "forecasts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "country_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_teams_on_country_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bets", "users"
  add_foreign_key "competitions", "countries"
  add_foreign_key "events", "bets"
  add_foreign_key "events", "competitions"
  add_foreign_key "events", "forecasts"
  add_foreign_key "events", "sports"
  add_foreign_key "events", "teams", column: "guest_team_id"
  add_foreign_key "events", "teams", column: "home_team_id"
  add_foreign_key "teams", "countries"
end
