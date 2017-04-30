# eslint-plugin-param-newline

Ensures function parameters are on a new line by themselves.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-param-newline`:

```
$ npm install eslint-plugin-param-newline --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-param-newline` globally.

## Usage

Add `param-newline` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "param-newline"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "param-newline/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





