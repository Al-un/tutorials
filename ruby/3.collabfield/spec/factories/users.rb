FactoryBot.define do
    factory :user do
        sequence(:name) { |n| "test#{n}" }
        sequence(:email) { |n| "test#{n}@test.com" }
        # avoid static string 
        # https://robots.thoughtbot.com/deprecating-static-attributes-in-factory_bot-4-11
        password { '123456' }
        password_confirmation { '123456'}
    end
end