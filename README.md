DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|Email|text|null: false, unique: true|
|password|text|null: false|

### Association
- has_many :groups,through::users_groups
- has_many :users_groups
- has_many :users_messages
  
# messgagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users,through::users_groups
- has_many :users_groups
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user