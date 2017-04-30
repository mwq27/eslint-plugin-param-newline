/**
 * @fileoverview Ensure function parameters are defined on new lines
 * @author Marques Woodson
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
function checkArgumentAlignment(context, node) {
  if (node.params.length === 0) {
    return;
  }
  var msg = '';
  let prev;

  node.params.forEach((argument) => {
    if (prev && prev.loc.end.line === argument.loc.start.line) {
      msg = 'Params need to be on new lines';
    }
    prev = argument;
  });

  if (msg) {
    context.report(node, msg);
  }
}

module.exports = function(context) {
  return {
    'FunctionDeclaration': (node) => checkArgumentAlignment(context, node)
  };
};