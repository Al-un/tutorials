# Tutorial

This tutorial follows https://medium.freecodecamp.org/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f. 
His repository is https://github.com/domagude/collabfield. This repository
is not a cloned but followed the tutorial.

# Windows

I am running Windows and so far, not all the errors are really fun. Most of the time,
my rails commands are refused due to permission or whatever. In this case, I simple
run PowerShell as an administrator.

# Notable points 

Some points regarding the linked tutorial:

**1. [1-Create a new app] Database initialisation**

 After creating the application with `rails new collabfield --database=postgresql`, 
starting the server with `rails server` would end up with an error stating that
database does not exist. So `config\database.yml` file has to be updated 
accordingly (database name, PostgreSQL user and password) and then initialise
the database with `rake db:setup`. By the way, it seems that under Rails 5, `rake`
and `rails` commands are harmonised so that `rails db:setup` can be called instead

**2. [3-Authentication] server restart after adding a gem**

After installing the Devise gem by adding `gem 'devise'` and call `bundle install`,
I did not understand why the route `users/sign_in` was not defined. I forgot to 
restart the server with `Ctrl+C` and then `rails server`

**3. [3-Testing] FactoryBot replaces Factory Girl**

Following the disparition of the female presence of Factory, I use FactoryBot
instead of FactoryGirl. I started with FactoryGirl as defined in the tutorial
and followed the guide https://github.com/thoughtbot/factory_bot/blob/4-9-0-stable/UPGRADE_FROM_FACTORY_GIRL.md

Make sure that `factory_bot_rails` is used instead of `factory_bot`. With the
latter, `Factory not registered: :{factory name}` error may be encountered.

Source: 
- https://mikewilliamson.wordpress.com/2013/09/17/factory-not-registered/
- https://semaphoreci.com/community/tutorials/working-effectively-with-data-factories-using-factorybot

**4. [3-Testing] Test web page: based on ID instead of tag text**

For some reasons, I do not like rely on a link text to find if it is present in
the page. Consequently, I changed to following test from

```ruby
expect(page).to have_selector('nav a', text: 'Login')
```

into

```ruby
expect(page).to have_selector('nav a', id: 'login_link')
```

In this situation, I do not need to care about the login text. I am new to Rails
so I do not know how localisation is handled but I guess that this test does
not test the localisation.

**5. [3-Main feed] Posts and Categories creation: this order requires an additional migration file**

When I call the model generation:

```shell
rails generate model post
rails generate model category
```

It generates two migration files where the `post` migration file is executed before
the `category` migration file. Consequently, from a pure PostgreSQL point of view,
it is normal that there is an error: `post` table has a column referring to `category`
table but this table does not exist yet resulting into a failure of creating `post`
table. To fix it, I left the initial migration file unchanged and create an update
migration file:

```ruby
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
```

**6. [3-Main feed] Duplicate on testing `post` model**

[File on the repository](https://github.com/domagude/collabfield/blob/master/spec/models/post_spec.rb)
contains a duplicate testing on `:user` relationship instead of testing `:user` and `:category`

**7. [3-Main feed] JavaScript `application.js`: put `//= require_tree .` at the end**

When starting *Styling with JavaScript*, I had an error in my JavaScript console claiming 
that `'$' is undefined`. Consequently, jQuery was undefined. I later realised that in my
`application.js`, I had the *require* in this order:

```javascript
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
```

I changed into

```javascript
//= require rails-ujs
//= require activestorage
//= require jquery
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
```

Basically, order is important, do not forget to check that.

**8. [3-Main feed] Adding `@import "partials/posts/*";` in application.scss**

When introducing modal, a small CSS refactoring happened. At that moment, `post` related
CSS were moved to `app/assets/stylesheets/partials/posts`. Just add `@import "partials/posts/*";`
in your `application.scss` to have it taking effect.

**9. [All factories files] Removing static values**

Following the warning 

```
DEPRECATION WARNING: Static attributes will be removed in FactoryBot 5.0. Please use dynamic
attributes instead by wrapping the attribute value in a block:

password { "123456" }

To automatically update from static attributes to dynamic ones,
install rubocop-rspec and run:

rubocop \
  --require rubocop-rspec \
  --only FactoryBot/AttributeDefinedStatically \
  --auto-correct
```
and link https://robots.thoughtbot.com/deprecating-static-attributes-in-factory_bot-4-11,
static values are removed

**10. [3-Single post] Using PhantomJS 2.1.1 (Windows)**

[Poltergeist documentation](https://github.com/teampoltergeist/poltergeist) links to 
a PhantomJS 1.9.8 for Windows. When proceeding to the test `visit_single_post_spec.rb`:

```ruby
require "rails_helper"

RSpec.feature "Visit single post", :type => :feature do
  let(:user) { create(:user) }
  let(:post) { create(:post) }

  scenario "User goes to a single post from the home page", js: true do
    post
    visit root_path
    page.find(".single-post-card").click
    expect(page).to have_selector('body .modal')
    page.find('.interested a').click
    expect(page).to have_selector('#single-post-content p', text: post.content)
  end

end
```
the line `expect(page).to have_selector('body .modal')` fails. I then tried to use the latest
version of PhantomJS (2.1.1) but for some E%"é^$e%µ%µ¨£ù"$é& reasons, PhantomJS needs to comply 
following:

- The [`phantomjs gem`](https://github.com/colszowka/phantomjs-gem) did not work. The 
`:require => 'phantomjs/poltergeist` triggers an error
- The path of the executable `phantomjs.exe` must be added to PATH environment variables
- this path *may not* accept capital letters (*phantomjs* instead of *PhantomJS*)  
- The folder must be *phantomjs-{version}-windows*. Having my folder named *phantomjs/{version}-windows/*
did not work.

**11. [3-specific branches] server restart not required after search implementation**

**12. [4-Private conversation] I don't understand variable scope T_T**

For some reasons, in the partial `app/views/layouts/application/_private_conversations_windows.html.erb`, 
the variable `private_conversations_windows` is not local. So I have to use the instance variable: 
`@private_conversations_windows`. I tried to put it back as local (`private_conversations_windows`)
and in `app/views/layouts/application.html.erb`, using a local:
`<%= render 'layouts/application/private_conversations_windows', locals { private_conversations_windows: @private_conversations_windows } %>`
without success

**TODO: to analyse**

**13. [4-Private conversation] missing partial**

In the commit `git commit -m "Render messages with AJAX [...]"`, I have a conversation panel opened (get
in touch with an user) but I have the error `ActionView::Template::Error (Missing partial private/conversations/_messages with {:locale=>[:en], :formats=>[:js, :html], :variants=>[], :handlers=>[:raw, :erb, :html, :builder, :ruby, :coffee, :jbuilder]}. Searched in:`
requested by `view/shared/load_more_messages/window/_append_messages.js.erb`

Same thing for `private/messages/load_more_messages/window/replace_link_to_messages` requested by 
`replace_link_to_private_messages_partial_path` in `Private::MessagesHelper`

Files are retrieved from the GitHub repository

**13. [4-Private conversation] incorrect partial names**

When loading conversation, following was required to be added to the helper:
```ruby
# return a conversation header partial's path
def conversation_header_partial_path(conversation)
  if conversation.class == Private::Conversation
    'layouts/navigation/header/dropdowns/conversations/private_conversation'
  else
    'layouts/navigation/header/dropdowns/conversations/group_conversation'
  end  
end
```
however, the corresponding partials in the GitHub are `layouts/navigation/header/dropdowns/conversations/_private.html.erb`
and  `layouts/navigation/header/dropdowns/conversations/_group.html.erb`. Helper method is updated accordingly (as it is
defined in the GitHub repository by the way)

**14. [4-Group] typo in `private/conversations/conversation/_heading.html.erb`**

When defining `<%= render create_group_conv_partial_path, conversation: conversation %>`
, argument `@contact` is missing 
`<%= render create_group_conv_partial_path(@contact), conversation: conversation %>`

**14. [4-Group] typo in `helper/group/conversations_helper.rb`**

In the tutorial:

```ruby
def load_group_messages_partial_path(conversation)
  if conversation.messages.count > 0
    'group/conversations/conversation/messages_list/load_messages'
  else
    'shared/empty_partial'
  end
end
```

In the repository:

```ruby
def load_group_messages_partial_path(conversation)
  if conversation.messages.count > 0
    'group/conversations/conversation/messages_list/link_to_previous_messages'
  else
    'shared/empty_partial'
  end
end
```

Repository version is the correct one (comparing the name of the partial)