"use strict";

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var path = require("path");
// const printAST = require('ast-pretty-print')

var _require = require("babel-plugin-macros"),
  createMacro = _require.createMacro;

var glob = require("glob");

module.exports = createMacro(prevalMacros);

function prevalMacros(_ref) {
  var references = _ref.references,
    state = _ref.state,
    babel = _ref.babel;

  references.default.forEach(function (referencePath) {
    if (referencePath.parentPath.type === "CallExpression") {
      syncVersion({ referencePath, state, babel });
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the import-all.macro documentation`
      );
    }
  });
}

function syncVersion(_ref2) {
  var _program$node$body;

  var referencePath = _ref2.referencePath,
    state = _ref2.state,
    babel = _ref2.babel;
  var t = babel.types;
  var filename = state.file.opts.filename;

  var exportSources = getExportSources(
    referencePath.parentPath,
    path.dirname(filename)
  );

  var exportNodes = exportSources
    .map(function (source) {
      return t.exportAllDeclaration(t.stringLiteral(source));
    })
    .filter(function (exportNode) {
      return (
        path.resolve(path.dirname(filename), exportNode.source.value) !==
        filename
      );
    });

  var program = state.file.path;
  (_program$node$body = program.node.body).unshift.apply(
    _program$node$body,
    _toConsumableArray(exportNodes)
  );
  referencePath.parentPath.parentPath.remove();
}

function getExportSources(callExpressionPath, cwd) {
  try {
    var value = glob.sync(
      callExpressionPath.get("arguments")[0].evaluate().value,
      { cwd }
    );

    if (value && value.length > 0) {
      return value;
    }
    throw new Error("invalid length");
  } catch (error) {
    // ignore the error
    // add a console.log here if you need to know more specifically what's up...
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`
    );
  }
}
