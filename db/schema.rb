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

ActiveRecord::Schema.define(version: 20160210032502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"
  enable_extension "fuzzystrmatch"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"

  create_table "comments", force: :cascade do |t|
    t.string   "content",          null: false
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.integer  "user_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "conferences", force: :cascade do |t|
    t.date     "end_date",   null: false
    t.string   "location",   null: false
    t.string   "name",       null: false
    t.date     "start_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "email",                        null: false
    t.string   "first_name",                   null: false
    t.boolean  "is_primary",   default: false, null: false
    t.string   "last_name",                    null: false
    t.string   "phone_number",                 null: false
    t.string   "title",                        null: false
    t.integer  "school_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "contacts", ["school_id"], name: "index_contacts_on_school_id", using: :btree

  create_table "emails", force: :cascade do |t|
    t.string   "content",                        null: false
    t.string   "from",                           null: false
    t.boolean  "is_draft",       default: false, null: false
    t.boolean  "is_sent",        default: false, null: false
    t.boolean  "is_unread",      default: true,  null: false
    t.string   "sender",                         null: false
    t.string   "subject",                        null: false
    t.string   "recipient",                      null: false
    t.string   "to",                             null: false
    t.integer  "emailable_id"
    t.string   "emailable_type"
    t.integer  "user_id"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "emails", ["emailable_type", "emailable_id"], name: "index_emails_on_emailable_type_and_emailable_id", using: :btree
  add_index "emails", ["user_id"], name: "index_emails_on_user_id", using: :btree

  create_table "feedbacks", force: :cascade do |t|
    t.text     "content",    null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "feedbacks", ["user_id"], name: "index_feedbacks_on_user_id", using: :btree

  create_table "forms", force: :cascade do |t|
    t.integer  "target",     null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groups", force: :cascade do |t|
    t.string   "letter",        null: false
    t.integer  "conference_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "groups", ["conference_id"], name: "index_groups_on_conference_id", using: :btree

  create_table "leaderships", force: :cascade do |t|
    t.integer  "style",      default: 0, null: false
    t.integer  "group_id"
    t.integer  "user_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "leaderships", ["group_id"], name: "index_leaderships_on_group_id", using: :btree
  add_index "leaderships", ["user_id"], name: "index_leaderships_on_user_id", using: :btree

  create_table "pages", force: :cascade do |t|
    t.text     "description",                 null: false
    t.boolean  "is_last",     default: false, null: false
    t.integer  "number",                      null: false
    t.string   "title",                       null: false
    t.integer  "form_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "pages", ["form_id"], name: "index_pages_on_form_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.boolean  "is_required", default: true, null: false
    t.string   "key",                        null: false
    t.string   "options",     default: [],   null: false, array: true
    t.string   "placeholder", default: "",   null: false
    t.integer  "style",                      null: false
    t.string   "title",                      null: false
    t.integer  "page_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "questions", ["page_id"], name: "index_questions_on_page_id", using: :btree

  create_table "rooms", force: :cascade do |t|
    t.string   "building",      null: false
    t.integer  "capacity",      null: false
    t.integer  "gender",        null: false
    t.integer  "number",        null: false
    t.integer  "conference_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "rooms", ["conference_id"], name: "index_rooms_on_conference_id", using: :btree

  create_table "schools", force: :cascade do |t|
    t.string   "address_city",               null: false
    t.string   "address_one",                null: false
    t.string   "address_state",              null: false
    t.string   "address_two",   default: "", null: false
    t.string   "address_zip",                null: false
    t.string   "name",                       null: false
    t.string   "website",       default: "", null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "student_submissions", force: :cascade do |t|
    t.string  "address_city"
    t.string  "address_one"
    t.string  "address_state"
    t.string  "address_two"
    t.string  "address_zip"
    t.date    "birthday"
    t.string  "cell_phone"
    t.integer "current_page",          default: 0,                    null: false
    t.string  "email"
    t.string  "first_name"
    t.integer "gender"
    t.string  "guardian_email"
    t.string  "guardian_employer"
    t.string  "guardian_first_name"
    t.string  "guardian_job_title"
    t.string  "guardian_last_name"
    t.string  "guardian_phone_number"
    t.integer "guardian_phone_type"
    t.integer "guardian_relationship"
    t.string  "home_phone"
    t.boolean "is_draft",              default: true,                 null: false
    t.string  "last_name"
    t.string  "preferred_name"
    t.integer "registration_status"
    t.integer "shirt_size"
    t.uuid    "uuid",                  default: "uuid_generate_v4()"
  end

  create_table "students", force: :cascade do |t|
    t.string   "address_city",                       null: false
    t.string   "address_one",                        null: false
    t.string   "address_state",                      null: false
    t.string   "address_two",           default: "", null: false
    t.string   "address_zip",                        null: false
    t.date     "birthday"
    t.string   "cell_phone",                         null: false
    t.string   "email",                              null: false
    t.string   "first_name",                         null: false
    t.integer  "gender"
    t.string   "guardian_email",                     null: false
    t.string   "guardian_employer",     default: "", null: false
    t.string   "guardian_first_name",                null: false
    t.string   "guardian_job_title",    default: "", null: false
    t.string   "guardian_last_name",                 null: false
    t.string   "guardian_phone_number",              null: false
    t.integer  "guardian_phone_type",                null: false
    t.integer  "guardian_relationship",              null: false
    t.string   "home_phone",                         null: false
    t.boolean  "is_flagged",                         null: false
    t.boolean  "is_primary",                         null: false
    t.string   "last_name",                          null: false
    t.string   "preferred_name",        default: "", null: false
    t.integer  "registration_status",                null: false
    t.integer  "shirt_size",                         null: false
    t.integer  "group_id"
    t.integer  "room_id"
    t.integer  "school_id"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "students", ["group_id"], name: "index_students_on_group_id", using: :btree
  add_index "students", ["room_id"], name: "index_students_on_room_id", using: :btree
  add_index "students", ["school_id"], name: "index_students_on_school_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "current_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "first_name",                             null: false
    t.boolean  "has_sidebar",            default: true,  null: false
    t.boolean  "is_admin",               default: false, null: false
    t.string   "last_name",                              null: false
    t.datetime "last_sign_in_at"
    t.inet     "last_sign_in_ip"
    t.datetime "remember_created_at"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer  "sign_in_count",          default: 0,     null: false
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
