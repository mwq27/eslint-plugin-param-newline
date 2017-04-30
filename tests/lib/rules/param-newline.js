var rule = require("../../../lib/rules/param-newline");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("param-newline", rule, {
    valid: [
        "function test(\nfirstA, \nsecondA,\nlastA){}",
        "var func = (\nfirst,\nsecond,\nthird) => {}"
    ],

    invalid: [
        {
            code: "function test(first1,second1,\nlast3){}",
            errors: [ { message: "Params need to be on new lines" } ]
        },
        {
            code: "function test(\nfirst2,second2,\nlast3){}",
            errors: [ { message: "Params need to be on new lines" } ]
        },
        {
            code: "function test(first2, \nsecond2, last3){}",
            errors: [ { message: "Params need to be on new lines" } ]
        }
    ]
});