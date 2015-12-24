EDGE Youth Leadership Web Application
==========

### Setup

First, copy over the `application.yml` file from `config/samples/application.yml` to `config/application.yml`:

    cp config/samples/application.yml config/application.yml

Configure `config/application.yml` with the appropriate secret keys. You can generate a secret key with the command:

    rake secret

Second, copy over the `database.yml` file from `config/sample/database.yml` to `config/database.yml`:

    cp config/samples/database.yml config/database.yml

Configure `config/database.yml` with the appropriate database names (remove `sample_` from the names at the very least).

Third, create the databases:

    rake db:create

Fourth, migrate the databases:

    rake db:migrate

Fifth, start the server:

    rails server

Happy developing!

### Development

##### Component Style Guide

    Setup,
    Props,
    State,
    Styles,
    Lifecycle,
    Handlers,
    Helpers,
    Render,

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
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textDecoration,
    textOverflow,
    whiteSpace,
    outline,
    overflow,
    boxShadow,
    boxSizing,
    transition,

### Powered by Blueprint
![bp](https://raw.githubusercontent.com/calblueprint/calblueprint.org.old/master/app/assets/images/banner-facebook.png "Blueprint Banner")
**[Blueprint](http://www.calblueprint.org/)** is a student-run UC Berkeley
organization devoted to matching the skills of its members to our desire to see
social good enacted in our community. Each semester, teams of 4-5 students work
closely with a non-profit to bring technological solutions to the problems they
face every day.
