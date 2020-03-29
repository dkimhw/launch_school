
### ESlint

#### What is ESLint?

* Static code analyzer
* It analyzes your code and offers advice about style, formatting, coding practices, and possible errors.

#### Linting

* Linters inspect your code for potential errors and adherence to the best practices.
* It is not foolproof but it can serve as the first line of defense against some of the most common pitfalls in a language.
* Some of the best practices are function length and complexity. If functions are too lengthy or complex, it can make it hard to understand, maintain, and update
    * If ESLint complains most likely there is room to improve your function's logic

#### ESlint Installation

Global:

```
npm install -g eslint eslint-cli babel-eslint
```

Non-Global:
* One downside of local installation is that you must intall it in every project where you di

```
npm install eslint eslint-cli babel-eslint --save-dev
```

What would you do one or the other?

* With a global installation, you can run ESLint from any directory. With a local installation, you must reinstall ESLint every time you want to run with a project that doesn't have its own local installation.
* Global installations let you run ESLint from the command line as `eslint`. Local installations require the awkward ./node_modules/.bin/eslin command.
* Local installations however give you the freedom to use different versions of ESLint depending on your project (more customizable).
* For LS purpose: global installation is simplest


#### Debugging

If ESLint is not working properly - it might be due to versions. You can fix it this way:

```
npm uninstall -g eslint             # Omit -g if local install
npm install -g eslint@5.12.1        # Omit -g if local install
```

Check version:

```
# global
eslint -v

# local
./node_modules/.bin/eslint -v
```

#### How to Use?

Takes a JS file as an argument

```
# Global installation
$ eslint test.js

# Local installation
$ ./node_modules/.bin/eslint test.js
```

#### Configuring ESLint

* Using YAML configuration format 
* Create a file name `.eslintrc.yml`
    * Put this file in a directory that contains all of your Launch School code as subdirectories.
* When you run ESLint, it looks for this file in the current directory or the closest parent directory that contains a usable config file - but it does not look in the user's home directory.
