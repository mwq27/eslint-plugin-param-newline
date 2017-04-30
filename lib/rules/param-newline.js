/**
 * @fileoverview Ensure function parameters are defined on new lines
 * @author Marques Woodson
 */
'use strict';
var util = require('util');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
function checkArgumentAlignment(context, node) {
  // console.dir(node, {showHidden: false, depth: 6});
  if (node.params.length === 0)
    return;
  const sourceCode = context.getSourceCode();
  var msg = '';
  const first = node.params[0];
  var currentLine = first.loc.start.line;
  const firstline = first.loc.start.line;
  const paramCount = node.params.length;
  let prev;

  node.params.forEach((argument) => {
    if (prev && prev.loc.end.line === argument.loc.start.line) {
      msg = 'Function called with argument on line ' +
                `${argument.name} - ${argument.loc.start.line}, expected on ${currentLine + 1}`;
    }
    prev = argument;
  });

  if (msg)
    context.report(node, false);
}

module.exports = function(context) {
  return {
    'FunctionDeclaration': (node) => checkArgumentAlignment(context, node)
  };
};