# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_11_171015) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alphabets", force: :cascade do |t|
    t.string "word"
    t.string "wordUrl"
    t.string "wordSpanish"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "answers", force: :cascade do |t|
    t.integer "question_id"
    t.string "answer"
    t.boolean "is_correct"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "languages", force: :cascade do |t|
    t.string "language"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "phrases", force: :cascade do |t|
    t.string "sentence"
    t.string "senteUrl"
    t.string "sentenceSpanish"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string "question"
    t.integer "test_question_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "results", force: :cascade do |t|
    t.bigint "test_id", null: false
    t.bigint "user_id", null: false
    t.integer "no_correct"
    t.integer "no_incorrect"
    t.integer "no_unanswered"
    t.integer "score"
    t.integer "rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["test_id"], name: "index_results_on_test_id"
    t.index ["user_id"], name: "index_results_on_user_id"
  end

  create_table "test_questions", force: :cascade do |t|
    t.integer "test_id"
    t.integer "question_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tests", force: :cascade do |t|
    t.string "name"
    t.datetime "date_from"
    t.datetime "date_to"
    t.integer "timing"
    t.integer "test_questions_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_answers", force: :cascade do |t|
    t.bigint "test_question_id", null: false
    t.bigint "answer_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["answer_id"], name: "index_user_answers_on_answer_id"
    t.index ["test_question_id"], name: "index_user_answers_on_test_question_id"
    t.index ["user_id"], name: "index_user_answers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "language_id"
    t.integer "user_quizzes_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vocabs", force: :cascade do |t|
    t.string "word"
    t.string "wordUrl"
    t.string "wordSpanish"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vowels", force: :cascade do |t|
    t.string "word"
    t.string "wordUrl"
    t.string "wordSpanish"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "results", "tests"
  add_foreign_key "results", "users"
  add_foreign_key "user_answers", "answers"
  add_foreign_key "user_answers", "test_questions"
  add_foreign_key "user_answers", "users"
end
