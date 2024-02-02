# Install Lesli core
Lesli is a Ruby on Rails gem designed to seamlessly integrate with your application. It ensures complete isolation of code, database, and assets, preventing any interference with your main RoR application.

### Install the Lesli core gem

Add Lesli gem to your Rails app

```shell
bundle add lesli
```

Lesli include a Rake task to start the database:

```shell
# This task is going to migrate, seed and initialize our database.
rake lesli:db:setup
```

Mount Lesli in your main Rails application

```ruby
Rails.application.routes.draw do
    mount Lesli::Engine => "/lesli"
end
```


### Logging into your new Lesli application
The seeders comes with default users with different roles and privileges, to see Lesli in action use the owner user:

__username:__ hello@lesli.tech 
__password:__ tardis2023$ 

::: info
It is possible to add development users, roles, privileges and more; we will explore this options later in the documentation.
:::
