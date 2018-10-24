# frozen_string_literal: true

class AddMissingFieldToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.string :title
      t.text :content
      t.belongs_to :category, index: true
      t.belongs_to :user, index: true
    end
  end
end
