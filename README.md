EDGE Youth Leadership Web Application
==========

### Setup

First, make a file for your environment variables:

    touch config/initializers/_environment_variables.rb

Note that this project uses Devise so you should set `Devise.secret_key` in `_environment_variables.rb`.

Second, copy over the `database.yml` file from `config/sample/database.yml` to `config/database.yml`:

    cp config/sample/database.yml config/database.yml

Third, create the database:

    rake db:create

Fourth, migrate the database:

    rake db:migrate

Fifth, start the server:

    rails server -p <port-number>

Happy developing!

### Development

##### CSS Style Guide

    display,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    flex,
    alignSelf,
    position,
    top,
    left,
    zIndex,
    width,
    height,
    padding,
    margin,
    backgroundColor,
    border,
    borderColor,
    borderRadius,
    color,
    font,
    boxSizing,
    transition,

### Powered by Blueprint
![bp](https://raw.githubusercontent.com/calblueprint/calblueprint.org.old/master/app/assets/images/banner-facebook.png "Blueprint Banner")
**[Blueprint](http://www.calblueprint.org/)** is a student-run UC Berkeley
organization devoted to matching the skills of its members to our desire to see
social good enacted in our community. Each semester, teams of 4-5 students work
closely with a non-profit to bring technological solutions to the problems they
face every day.
