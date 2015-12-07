# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151130013648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"
  enable_extension "fuzzystrmatch"
  enable_extension "unaccent"

  create_table "comments", force: :cascade do |t|
    t.text     "content",    null: false
    t.integer  "student_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["student_id"], name: "index_comments_on_student_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "conferences", force: :cascade do |t|
    t.date     "end_date",   null: false
    t.string   "location",   null: false
    t.date     "start_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "forms", force: :cascade do |t|
    t.integer  "target",     null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",             null: false
    t.string   "primary_leader",   null: false
    t.string   "secondary_leader", null: false
    t.integer  "conference_id",    null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "groups", ["conference_id"], name: "index_groups_on_conference_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "key",         null: false
    t.string   "placeholder", null: false
    t.integer  "style",       null: false
    t.string   "title",       null: false
    t.integer  "section_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "questions", ["section_id"], name: "index_questions_on_section_id", using: :btree

  create_table "responsibilities", force: :cascade do |t|
    t.integer  "status",     null: false
    t.integer  "student_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "responsibilities", ["student_id"], name: "index_responsibilities_on_student_id", using: :btree
  add_index "responsibilities", ["user_id"], name: "index_responsibilities_on_user_id", using: :btree

  create_table "schools", force: :cascade do |t|
    t.string   "address",         null: false
    t.string   "counselor_email", null: false
    t.string   "counselor_name",  null: false
    t.string   "name",            null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "sections", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "form_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sections", ["form_id"], name: "index_sections_on_form_id", using: :btree

  create_table "students", force: :cascade do |t|
    t.date     "birthday",            null: false
    t.integer  "gender",              null: false
    t.integer  "registration_status", null: false
    t.integer  "shirt_size",          null: false
    t.string   "cell_phone",          null: false
    t.string   "email",               null: false
    t.string   "first_name",          null: false
    t.string   "guardian_one_name",   null: false
    t.string   "guardian_one_phone",  null: false
    t.string   "guardian_one_email",  null: false
    t.string   "guardian_two_name",   null: false
    t.string   "guardian_two_phone",  null: false
    t.string   "guardian_two_email",  null: false
    t.string   "home_address",        null: false
    t.string   "home_phone",          null: false
    t.boolean  "is_flagged",          null: false
    t.boolean  "is_primary",          null: false
    t.string   "last_name",           null: false
    t.integer  "group_id"
    t.integer  "school_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "students", ["group_id"], name: "index_students_on_group_id", using: :btree
  add_index "students", ["school_id"], name: "index_students_on_school_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                                  null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "first_name",                             null: false
    t.string   "last_name",                              null: false
    t.boolean  "has_sidebar",            default: true,  null: false
    t.boolean  "is_admin",               default: false, null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "visits", force: :cascade do |t|
    t.integer  "visitable_id"
    t.string   "visitable_type"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "visits", ["user_id"], name: "index_visits_on_user_id", using: :btree
  add_index "visits", ["visitable_type", "visitable_id"], name: "index_visits_on_visitable_type_and_visitable_id", using: :btree

end
