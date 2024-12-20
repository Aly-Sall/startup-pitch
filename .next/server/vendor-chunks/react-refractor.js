"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-refractor";
exports.ids = ["vendor-chunks/react-refractor"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-refractor/lib/Refractor.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-refractor/lib/Refractor.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\nvar fract = __webpack_require__(/*! refractor/core.js */ \"(ssr)/./node_modules/refractor/core.js\");\nvar mapChildren = __webpack_require__(/*! ./mapChildren */ \"(ssr)/./node_modules/react-refractor/lib/mapChildren.js\");\nvar addMarkers = __webpack_require__(/*! ./addMarkers */ \"(ssr)/./node_modules/react-refractor/lib/addMarkers.js\");\n\n// eslint-disable-next-line id-length\nvar h = React.createElement;\nfunction Refractor(props) {\n  if (true) {\n    if (!fract.registered(props.language)) {\n      // eslint-disable-next-line no-console\n      console.warn(\"No language definitions for \\\"\".concat(props.language, \"\\\" seems to be registered, did you forget to call `Refractor.registerLanguage()`?\"));\n    }\n  }\n  var langClassName = \"language-\".concat(props.language);\n  var codeProps = {\n    className: langClassName\n  };\n  var preProps = {\n    className: [props.className || 'refractor', langClassName].filter(Boolean).join(' ')\n  };\n  if (props.inline) {\n    codeProps.style = {\n      display: 'inline'\n    };\n    codeProps.className = props.className || 'refractor';\n  }\n  var ast = fract.highlight(props.value, props.language);\n  if (props.markers && props.markers.length > 0) {\n    ast = addMarkers(ast, {\n      markers: props.markers\n    });\n  }\n  var value = ast.length === 0 ? props.value : ast.map(mapChildren.depth(0));\n  var code = h('code', codeProps, value);\n  return props.inline ? code : h('pre', preProps, code);\n}\nRefractor.registerLanguage = function (lang) {\n  return fract.register(lang);\n};\nRefractor.hasLanguage = function (lang) {\n  return fract.registered(lang);\n};\nmodule.exports = Refractor;\n//# sourceMappingURL=Refractor.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9SZWZyYWN0b3IuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGlHQUFPO0FBQzNCLFlBQVksbUJBQU8sQ0FBQyxpRUFBbUI7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsOEVBQWU7QUFDekMsaUJBQWlCLG1CQUFPLENBQUMsNEVBQWM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0NyYWNrZWQvRnJvbnQtZW5kL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJhY3Rvci9saWIvUmVmcmFjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZyYWN0ID0gcmVxdWlyZSgncmVmcmFjdG9yL2NvcmUuanMnKTtcbnZhciBtYXBDaGlsZHJlbiA9IHJlcXVpcmUoJy4vbWFwQ2hpbGRyZW4nKTtcbnZhciBhZGRNYXJrZXJzID0gcmVxdWlyZSgnLi9hZGRNYXJrZXJzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpZC1sZW5ndGhcbnZhciBoID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbmZ1bmN0aW9uIFJlZnJhY3Rvcihwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghZnJhY3QucmVnaXN0ZXJlZChwcm9wcy5sYW5ndWFnZSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJObyBsYW5ndWFnZSBkZWZpbml0aW9ucyBmb3IgXFxcIlwiLmNvbmNhdChwcm9wcy5sYW5ndWFnZSwgXCJcXFwiIHNlZW1zIHRvIGJlIHJlZ2lzdGVyZWQsIGRpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYFJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKClgP1wiKSk7XG4gICAgfVxuICB9XG4gIHZhciBsYW5nQ2xhc3NOYW1lID0gXCJsYW5ndWFnZS1cIi5jb25jYXQocHJvcHMubGFuZ3VhZ2UpO1xuICB2YXIgY29kZVByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogbGFuZ0NsYXNzTmFtZVxuICB9O1xuICB2YXIgcHJlUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBbcHJvcHMuY2xhc3NOYW1lIHx8ICdyZWZyYWN0b3InLCBsYW5nQ2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG4gIH07XG4gIGlmIChwcm9wcy5pbmxpbmUpIHtcbiAgICBjb2RlUHJvcHMuc3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lJ1xuICAgIH07XG4gICAgY29kZVByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSB8fCAncmVmcmFjdG9yJztcbiAgfVxuICB2YXIgYXN0ID0gZnJhY3QuaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSk7XG4gIGlmIChwcm9wcy5tYXJrZXJzICYmIHByb3BzLm1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgIGFzdCA9IGFkZE1hcmtlcnMoYXN0LCB7XG4gICAgICBtYXJrZXJzOiBwcm9wcy5tYXJrZXJzXG4gICAgfSk7XG4gIH1cbiAgdmFyIHZhbHVlID0gYXN0Lmxlbmd0aCA9PT0gMCA/IHByb3BzLnZhbHVlIDogYXN0Lm1hcChtYXBDaGlsZHJlbi5kZXB0aCgwKSk7XG4gIHZhciBjb2RlID0gaCgnY29kZScsIGNvZGVQcm9wcywgdmFsdWUpO1xuICByZXR1cm4gcHJvcHMuaW5saW5lID8gY29kZSA6IGgoJ3ByZScsIHByZVByb3BzLCBjb2RlKTtcbn1cblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgcmV0dXJuIGZyYWN0LnJlZ2lzdGVyKGxhbmcpO1xufTtcblJlZnJhY3Rvci5oYXNMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gIHJldHVybiBmcmFjdC5yZWdpc3RlcmVkKGxhbmcpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gUmVmcmFjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVmcmFjdG9yLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/Refractor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/addMarkers.js":
/*!********************************************************!*\
  !*** ./node_modules/react-refractor/lib/addMarkers.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar filter = __webpack_require__(/*! unist-util-filter */ \"(ssr)/./node_modules/unist-util-filter/index.js\");\nvar visit = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/index.js\");\nvar NodeMap = __webpack_require__(/*! ./map */ \"(ssr)/./node_modules/react-refractor/lib/map.js\");\nfunction lineNumberify(ast) {\n  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    lineNumber: 1\n  };\n  return ast.reduce(function (result, node) {\n    var lineStart = context.lineNumber;\n    if (node.type === 'text') {\n      if (node.value.indexOf('\\n') === -1) {\n        node.lineStart = lineStart;\n        node.lineEnd = lineStart;\n        result.nodes.push(node);\n        return result;\n      }\n      var lines = node.value.split('\\n');\n      for (var i = 0; i < lines.length; i++) {\n        var lineNum = i === 0 ? context.lineNumber : ++context.lineNumber;\n        result.nodes.push({\n          type: 'text',\n          value: i === lines.length - 1 ? lines[i] : \"\".concat(lines[i], \"\\n\"),\n          lineStart: lineNum,\n          lineEnd: lineNum\n        });\n      }\n      result.lineNumber = context.lineNumber;\n      return result;\n    }\n    if (node.children) {\n      var processed = lineNumberify(node.children, context);\n      var firstChild = processed.nodes[0];\n      var lastChild = processed.nodes[processed.nodes.length - 1];\n      node.lineStart = firstChild ? firstChild.lineStart : lineStart;\n      node.lineEnd = lastChild ? lastChild.lineEnd : lineStart;\n      node.children = processed.nodes;\n      result.lineNumber = processed.lineNumber;\n      result.nodes.push(node);\n      return result;\n    }\n    result.nodes.push(node);\n    return result;\n  }, {\n    nodes: [],\n    lineNumber: context.lineNumber\n  });\n}\nfunction unwrapLine(markerLine, nodes) {\n  var tree = {\n    type: 'root',\n    children: nodes\n  };\n  var headMap = new NodeMap();\n  var lineMap = new NodeMap();\n  var tailMap = new NodeMap();\n  var cloned = [];\n  function addCopy(map, node, ancestors) {\n    cloned.push(node);\n    ancestors.forEach(function (ancestor) {\n      if (!map.has(ancestor)) {\n        map.set(ancestor, Object.assign({}, ancestor, {\n          children: []\n        }));\n        if (ancestor !== tree) {\n          cloned.push(ancestor);\n        }\n      }\n    });\n    var i = ancestors.length;\n    while (i--) {\n      var ancestor = map.get(ancestors[i]);\n      var child = ancestors[i + 1];\n      var leaf = map.get(child) || node;\n      if (ancestor.children.indexOf(leaf) === -1) {\n        ancestor.children.push(leaf);\n      }\n    }\n  }\n  visit(tree, function (node, ancestors) {\n    if (node.children) {\n      return;\n    }\n\n    // These nodes are on previous lines, but nested within the same structure\n    if (node.lineStart < markerLine) {\n      addCopy(headMap, node, ancestors);\n      return;\n    }\n\n    // These nodes are on the target line\n    if (node.lineStart === markerLine) {\n      addCopy(lineMap, node, ancestors);\n      return;\n    }\n\n    // If we have shared ancestors with some of the cloned elements,\n    // create another tree of the remaining nodes\n    if (node.lineEnd > markerLine && cloned.some(function (clone) {\n      return ancestors.indexOf(clone) !== -1;\n    })) {\n      addCopy(tailMap, node, ancestors);\n    }\n  });\n\n  // Get the remaining nodes - the ones who were not part of the same tree\n  var filtered = filter(tree, function (node) {\n    return cloned.indexOf(node) === -1;\n  });\n  var getChildren = function getChildren(map) {\n    var rootNode = map.get(tree);\n    if (!rootNode) {\n      return [];\n    }\n    visit(rootNode, function (leaf, ancestors) {\n      if (leaf.children) {\n        leaf.lineStart = 0;\n        leaf.lineEnd = 0;\n        return;\n      }\n      ancestors.forEach(function (ancestor) {\n        ancestor.lineStart = Math.max(ancestor.lineStart, leaf.lineStart);\n        ancestor.lineEnd = Math.max(ancestor.lineEnd, leaf.lineEnd);\n      });\n    });\n    return rootNode.children;\n  };\n  var merged = [].concat(getChildren(headMap), getChildren(lineMap), getChildren(tailMap), filtered ? filtered.children : []);\n  headMap.clear();\n  lineMap.clear();\n  tailMap.clear();\n  return merged;\n}\nfunction wrapBatch(children, marker, options) {\n  var className = marker.className || 'refractor-marker';\n  return {\n    type: 'element',\n    tagName: marker.component || 'div',\n    properties: marker.component ? Object.assign({}, options, {\n      className: className\n    }) : {\n      className: className\n    },\n    children: children,\n    lineStart: marker.line,\n    lineEnd: children[children.length - 1].lineEnd,\n    isMarker: true\n  };\n}\nfunction wrapLines(treeNodes, markers, options) {\n  if (markers.length === 0 || treeNodes.length === 0) {\n    return treeNodes;\n  }\n  var ast = markers.reduce(function (acc, marker) {\n    return unwrapLine(marker.line, acc);\n  }, treeNodes);\n\n  // Container for the new AST\n  var wrapped = [];\n\n  // Note: Markers are already sorted by line number (ascending)\n  var astIndex = 0;\n  for (var m = 0; m < markers.length; m++) {\n    var marker = markers[m];\n\n    // Start by eating all AST nodes with line numbers up to the given marker\n    for (var node = ast[astIndex]; node && node.lineEnd < marker.line; node = ast[++astIndex]) {\n      wrapped.push(node);\n    }\n\n    // Now proceed to find all _contiguous_ nodes on the same line\n    var batch = [];\n    for (var _node = ast[astIndex]; _node && _node.lineEnd === marker.line; _node = ast[++astIndex]) {\n      batch.push(_node);\n    }\n\n    // Now add that batch, if we have anything\n    if (batch.length > 0) {\n      wrapped.push(wrapBatch(batch, marker, options));\n    }\n  }\n\n  // Now add the remaining AST nodes\n  while (astIndex < ast.length) {\n    wrapped.push(ast[astIndex++]);\n  }\n  return wrapped;\n}\nfunction addMarkers(ast, options) {\n  var markers = options.markers.map(function (marker) {\n    return marker.line ? marker : {\n      line: marker\n    };\n  }).sort(function (nodeA, nodeB) {\n    return nodeA.line - nodeB.line;\n  });\n  var numbered = lineNumberify(ast).nodes;\n  return wrapLines(numbered, markers, options);\n}\nmodule.exports = addMarkers;\n//# sourceMappingURL=addMarkers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9hZGRNYXJrZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywwRUFBbUI7QUFDeEMsWUFBWSxtQkFBTyxDQUFDLHdGQUEwQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsOERBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7O0FBRUE7QUFDQSxtQ0FBbUMsb0NBQW9DO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyx3Q0FBd0M7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvQ3JhY2tlZC9Gcm9udC1lbmQvc3RhcnR1cC9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9hZGRNYXJrZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZmlsdGVyID0gcmVxdWlyZSgndW5pc3QtdXRpbC1maWx0ZXInKTtcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpO1xudmFyIE5vZGVNYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuZnVuY3Rpb24gbGluZU51bWJlcmlmeShhc3QpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICBsaW5lTnVtYmVyOiAxXG4gIH07XG4gIHJldHVybiBhc3QucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG5vZGUpIHtcbiAgICB2YXIgbGluZVN0YXJ0ID0gY29udGV4dC5saW5lTnVtYmVyO1xuICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKG5vZGUudmFsdWUuaW5kZXhPZignXFxuJykgPT09IC0xKSB7XG4gICAgICAgIG5vZGUubGluZVN0YXJ0ID0gbGluZVN0YXJ0O1xuICAgICAgICBub2RlLmxpbmVFbmQgPSBsaW5lU3RhcnQ7XG4gICAgICAgIHJlc3VsdC5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgdmFyIGxpbmVzID0gbm9kZS52YWx1ZS5zcGxpdCgnXFxuJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsaW5lTnVtID0gaSA9PT0gMCA/IGNvbnRleHQubGluZU51bWJlciA6ICsrY29udGV4dC5saW5lTnVtYmVyO1xuICAgICAgICByZXN1bHQubm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gbGluZXNbaV0gOiBcIlwiLmNvbmNhdChsaW5lc1tpXSwgXCJcXG5cIiksXG4gICAgICAgICAgbGluZVN0YXJ0OiBsaW5lTnVtLFxuICAgICAgICAgIGxpbmVFbmQ6IGxpbmVOdW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQubGluZU51bWJlciA9IGNvbnRleHQubGluZU51bWJlcjtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgcHJvY2Vzc2VkID0gbGluZU51bWJlcmlmeShub2RlLmNoaWxkcmVuLCBjb250ZXh0KTtcbiAgICAgIHZhciBmaXJzdENoaWxkID0gcHJvY2Vzc2VkLm5vZGVzWzBdO1xuICAgICAgdmFyIGxhc3RDaGlsZCA9IHByb2Nlc3NlZC5ub2Rlc1twcm9jZXNzZWQubm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICBub2RlLmxpbmVTdGFydCA9IGZpcnN0Q2hpbGQgPyBmaXJzdENoaWxkLmxpbmVTdGFydCA6IGxpbmVTdGFydDtcbiAgICAgIG5vZGUubGluZUVuZCA9IGxhc3RDaGlsZCA/IGxhc3RDaGlsZC5saW5lRW5kIDogbGluZVN0YXJ0O1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IHByb2Nlc3NlZC5ub2RlcztcbiAgICAgIHJlc3VsdC5saW5lTnVtYmVyID0gcHJvY2Vzc2VkLmxpbmVOdW1iZXI7XG4gICAgICByZXN1bHQubm9kZXMucHVzaChub2RlKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJlc3VsdC5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHtcbiAgICBub2RlczogW10sXG4gICAgbGluZU51bWJlcjogY29udGV4dC5saW5lTnVtYmVyXG4gIH0pO1xufVxuZnVuY3Rpb24gdW53cmFwTGluZShtYXJrZXJMaW5lLCBub2Rlcykge1xuICB2YXIgdHJlZSA9IHtcbiAgICB0eXBlOiAncm9vdCcsXG4gICAgY2hpbGRyZW46IG5vZGVzXG4gIH07XG4gIHZhciBoZWFkTWFwID0gbmV3IE5vZGVNYXAoKTtcbiAgdmFyIGxpbmVNYXAgPSBuZXcgTm9kZU1hcCgpO1xuICB2YXIgdGFpbE1hcCA9IG5ldyBOb2RlTWFwKCk7XG4gIHZhciBjbG9uZWQgPSBbXTtcbiAgZnVuY3Rpb24gYWRkQ29weShtYXAsIG5vZGUsIGFuY2VzdG9ycykge1xuICAgIGNsb25lZC5wdXNoKG5vZGUpO1xuICAgIGFuY2VzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgaWYgKCFtYXAuaGFzKGFuY2VzdG9yKSkge1xuICAgICAgICBtYXAuc2V0KGFuY2VzdG9yLCBPYmplY3QuYXNzaWduKHt9LCBhbmNlc3Rvciwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChhbmNlc3RvciAhPT0gdHJlZSkge1xuICAgICAgICAgIGNsb25lZC5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBpID0gYW5jZXN0b3JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgYW5jZXN0b3IgPSBtYXAuZ2V0KGFuY2VzdG9yc1tpXSk7XG4gICAgICB2YXIgY2hpbGQgPSBhbmNlc3RvcnNbaSArIDFdO1xuICAgICAgdmFyIGxlYWYgPSBtYXAuZ2V0KGNoaWxkKSB8fCBub2RlO1xuICAgICAgaWYgKGFuY2VzdG9yLmNoaWxkcmVuLmluZGV4T2YobGVhZikgPT09IC0xKSB7XG4gICAgICAgIGFuY2VzdG9yLmNoaWxkcmVuLnB1c2gobGVhZik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZpc2l0KHRyZWUsIGZ1bmN0aW9uIChub2RlLCBhbmNlc3RvcnMpIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBvbiBwcmV2aW91cyBsaW5lcywgYnV0IG5lc3RlZCB3aXRoaW4gdGhlIHNhbWUgc3RydWN0dXJlXG4gICAgaWYgKG5vZGUubGluZVN0YXJ0IDwgbWFya2VyTGluZSkge1xuICAgICAgYWRkQ29weShoZWFkTWFwLCBub2RlLCBhbmNlc3RvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBvbiB0aGUgdGFyZ2V0IGxpbmVcbiAgICBpZiAobm9kZS5saW5lU3RhcnQgPT09IG1hcmtlckxpbmUpIHtcbiAgICAgIGFkZENvcHkobGluZU1hcCwgbm9kZSwgYW5jZXN0b3JzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHNoYXJlZCBhbmNlc3RvcnMgd2l0aCBzb21lIG9mIHRoZSBjbG9uZWQgZWxlbWVudHMsXG4gICAgLy8gY3JlYXRlIGFub3RoZXIgdHJlZSBvZiB0aGUgcmVtYWluaW5nIG5vZGVzXG4gICAgaWYgKG5vZGUubGluZUVuZCA+IG1hcmtlckxpbmUgJiYgY2xvbmVkLnNvbWUoZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICByZXR1cm4gYW5jZXN0b3JzLmluZGV4T2YoY2xvbmUpICE9PSAtMTtcbiAgICB9KSkge1xuICAgICAgYWRkQ29weSh0YWlsTWFwLCBub2RlLCBhbmNlc3RvcnMpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gR2V0IHRoZSByZW1haW5pbmcgbm9kZXMgLSB0aGUgb25lcyB3aG8gd2VyZSBub3QgcGFydCBvZiB0aGUgc2FtZSB0cmVlXG4gIHZhciBmaWx0ZXJlZCA9IGZpbHRlcih0cmVlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBjbG9uZWQuaW5kZXhPZihub2RlKSA9PT0gLTE7XG4gIH0pO1xuICB2YXIgZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihtYXApIHtcbiAgICB2YXIgcm9vdE5vZGUgPSBtYXAuZ2V0KHRyZWUpO1xuICAgIGlmICghcm9vdE5vZGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmlzaXQocm9vdE5vZGUsIGZ1bmN0aW9uIChsZWFmLCBhbmNlc3RvcnMpIHtcbiAgICAgIGlmIChsZWFmLmNoaWxkcmVuKSB7XG4gICAgICAgIGxlYWYubGluZVN0YXJ0ID0gMDtcbiAgICAgICAgbGVhZi5saW5lRW5kID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYW5jZXN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGFuY2VzdG9yKSB7XG4gICAgICAgIGFuY2VzdG9yLmxpbmVTdGFydCA9IE1hdGgubWF4KGFuY2VzdG9yLmxpbmVTdGFydCwgbGVhZi5saW5lU3RhcnQpO1xuICAgICAgICBhbmNlc3Rvci5saW5lRW5kID0gTWF0aC5tYXgoYW5jZXN0b3IubGluZUVuZCwgbGVhZi5saW5lRW5kKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByb290Tm9kZS5jaGlsZHJlbjtcbiAgfTtcbiAgdmFyIG1lcmdlZCA9IFtdLmNvbmNhdChnZXRDaGlsZHJlbihoZWFkTWFwKSwgZ2V0Q2hpbGRyZW4obGluZU1hcCksIGdldENoaWxkcmVuKHRhaWxNYXApLCBmaWx0ZXJlZCA/IGZpbHRlcmVkLmNoaWxkcmVuIDogW10pO1xuICBoZWFkTWFwLmNsZWFyKCk7XG4gIGxpbmVNYXAuY2xlYXIoKTtcbiAgdGFpbE1hcC5jbGVhcigpO1xuICByZXR1cm4gbWVyZ2VkO1xufVxuZnVuY3Rpb24gd3JhcEJhdGNoKGNoaWxkcmVuLCBtYXJrZXIsIG9wdGlvbnMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IG1hcmtlci5jbGFzc05hbWUgfHwgJ3JlZnJhY3Rvci1tYXJrZXInO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB0YWdOYW1lOiBtYXJrZXIuY29tcG9uZW50IHx8ICdkaXYnLFxuICAgIHByb3BlcnRpZXM6IG1hcmtlci5jb21wb25lbnQgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pIDoge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsaW5lU3RhcnQ6IG1hcmtlci5saW5lLFxuICAgIGxpbmVFbmQ6IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLmxpbmVFbmQsXG4gICAgaXNNYXJrZXI6IHRydWVcbiAgfTtcbn1cbmZ1bmN0aW9uIHdyYXBMaW5lcyh0cmVlTm9kZXMsIG1hcmtlcnMsIG9wdGlvbnMpIHtcbiAgaWYgKG1hcmtlcnMubGVuZ3RoID09PSAwIHx8IHRyZWVOb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJlZU5vZGVzO1xuICB9XG4gIHZhciBhc3QgPSBtYXJrZXJzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtYXJrZXIpIHtcbiAgICByZXR1cm4gdW53cmFwTGluZShtYXJrZXIubGluZSwgYWNjKTtcbiAgfSwgdHJlZU5vZGVzKTtcblxuICAvLyBDb250YWluZXIgZm9yIHRoZSBuZXcgQVNUXG4gIHZhciB3cmFwcGVkID0gW107XG5cbiAgLy8gTm90ZTogTWFya2VycyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgbGluZSBudW1iZXIgKGFzY2VuZGluZylcbiAgdmFyIGFzdEluZGV4ID0gMDtcbiAgZm9yICh2YXIgbSA9IDA7IG0gPCBtYXJrZXJzLmxlbmd0aDsgbSsrKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbbV07XG5cbiAgICAvLyBTdGFydCBieSBlYXRpbmcgYWxsIEFTVCBub2RlcyB3aXRoIGxpbmUgbnVtYmVycyB1cCB0byB0aGUgZ2l2ZW4gbWFya2VyXG4gICAgZm9yICh2YXIgbm9kZSA9IGFzdFthc3RJbmRleF07IG5vZGUgJiYgbm9kZS5saW5lRW5kIDwgbWFya2VyLmxpbmU7IG5vZGUgPSBhc3RbKythc3RJbmRleF0pIHtcbiAgICAgIHdyYXBwZWQucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgcHJvY2VlZCB0byBmaW5kIGFsbCBfY29udGlndW91c18gbm9kZXMgb24gdGhlIHNhbWUgbGluZVxuICAgIHZhciBiYXRjaCA9IFtdO1xuICAgIGZvciAodmFyIF9ub2RlID0gYXN0W2FzdEluZGV4XTsgX25vZGUgJiYgX25vZGUubGluZUVuZCA9PT0gbWFya2VyLmxpbmU7IF9ub2RlID0gYXN0WysrYXN0SW5kZXhdKSB7XG4gICAgICBiYXRjaC5wdXNoKF9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgYWRkIHRoYXQgYmF0Y2gsIGlmIHdlIGhhdmUgYW55dGhpbmdcbiAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgd3JhcHBlZC5wdXNoKHdyYXBCYXRjaChiYXRjaCwgbWFya2VyLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IGFkZCB0aGUgcmVtYWluaW5nIEFTVCBub2Rlc1xuICB3aGlsZSAoYXN0SW5kZXggPCBhc3QubGVuZ3RoKSB7XG4gICAgd3JhcHBlZC5wdXNoKGFzdFthc3RJbmRleCsrXSk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5mdW5jdGlvbiBhZGRNYXJrZXJzKGFzdCwgb3B0aW9ucykge1xuICB2YXIgbWFya2VycyA9IG9wdGlvbnMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIHJldHVybiBtYXJrZXIubGluZSA/IG1hcmtlciA6IHtcbiAgICAgIGxpbmU6IG1hcmtlclxuICAgIH07XG4gIH0pLnNvcnQoZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICAgIHJldHVybiBub2RlQS5saW5lIC0gbm9kZUIubGluZTtcbiAgfSk7XG4gIHZhciBudW1iZXJlZCA9IGxpbmVOdW1iZXJpZnkoYXN0KS5ub2RlcztcbiAgcmV0dXJuIHdyYXBMaW5lcyhudW1iZXJlZCwgbWFya2Vycywgb3B0aW9ucyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcmtlcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGRNYXJrZXJzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/addMarkers.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/map.js":
/*!*************************************************!*\
  !*** ./node_modules/react-refractor/lib/map.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Weird \"map\" polyfill, that's weak if possible\n */\nmodule.exports = typeof WeakMap === 'function' ? HappyMap : SadMap;\n\n// Happy path! Fakes a `clear()` if possible (noop)\nfunction HappyMap() {\n  this.map = new WeakMap();\n}\nHappyMap.prototype.has = function (key) {\n  return this.map.has(key);\n};\nHappyMap.prototype.set = function (key, value) {\n  this.map.set(key, value);\n  return this;\n};\nHappyMap.prototype.get = function (key) {\n  return this.map.get(key);\n};\nHappyMap.prototype.clear = function () {\n  // intentional noop, since we dont need to/cant clear\n};\n\n// Sad path! Use less stylish approach\nfunction SadMap() {\n  this.keys = [];\n  this.values = [];\n}\nSadMap.prototype.has = function (key) {\n  return this.keys.indexOf(key) !== -1;\n};\nSadMap.prototype.set = function (key, value) {\n  var index = this.keys.indexOf(key);\n  if (index === -1) {\n    this.keys.push(key);\n    this.values.push(value);\n  } else {\n    this.values[index] = value;\n  }\n  return this;\n};\nSadMap.prototype.get = function (key) {\n  var index = this.keys.indexOf(key);\n  return index === -1 ? undefined : this.values[index];\n};\nSadMap.prototype.clear = function () {\n  this.keys = [];\n  this.values = [];\n};\n//# sourceMappingURL=map.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9tYXAuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvQ3JhY2tlZC9Gcm9udC1lbmQvc3RhcnR1cC9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogV2VpcmQgXCJtYXBcIiBwb2x5ZmlsbCwgdGhhdCdzIHdlYWsgaWYgcG9zc2libGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IEhhcHB5TWFwIDogU2FkTWFwO1xuXG4vLyBIYXBweSBwYXRoISBGYWtlcyBhIGBjbGVhcigpYCBpZiBwb3NzaWJsZSAobm9vcClcbmZ1bmN0aW9uIEhhcHB5TWFwKCkge1xuICB0aGlzLm1hcCA9IG5ldyBXZWFrTWFwKCk7XG59XG5IYXBweU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG59O1xuSGFwcHlNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRoaXMubWFwLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuSGFwcHlNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xufTtcbkhhcHB5TWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaW50ZW50aW9uYWwgbm9vcCwgc2luY2Ugd2UgZG9udCBuZWVkIHRvL2NhbnQgY2xlYXJcbn07XG5cbi8vIFNhZCBwYXRoISBVc2UgbGVzcyBzdHlsaXNoIGFwcHJvYWNoXG5mdW5jdGlvbiBTYWRNYXAoKSB7XG4gIHRoaXMua2V5cyA9IFtdO1xuICB0aGlzLnZhbHVlcyA9IFtdO1xufVxuU2FkTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLmtleXMuaW5kZXhPZihrZXkpICE9PSAtMTtcbn07XG5TYWRNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IHRoaXMua2V5cy5pbmRleE9mKGtleSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblNhZE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgaW5kZXggPSB0aGlzLmtleXMuaW5kZXhPZihrZXkpO1xuICByZXR1cm4gaW5kZXggPT09IC0xID8gdW5kZWZpbmVkIDogdGhpcy52YWx1ZXNbaW5kZXhdO1xufTtcblNhZE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMua2V5cyA9IFtdO1xuICB0aGlzLnZhbHVlcyA9IFtdO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/map.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/mapChildren.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-refractor/lib/mapChildren.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\nfunction mapChild(child, i, depth) {\n  if (child.tagName) {\n    var className = child.properties && Array.isArray(child.properties.className) ? child.properties.className.join(' ') : child.properties.className;\n    return React.createElement(child.tagName, Object.assign({\n      key: \"fract-\".concat(depth, \"-\").concat(i)\n    }, child.properties, {\n      className: className\n    }), child.children && child.children.map(mapWithDepth(depth + 1)));\n  }\n  return child.value;\n}\nfunction mapWithDepth(depth) {\n  return function mapChildrenWithDepth(child, i) {\n    return mapChild(child, i, depth);\n  };\n}\nexports.depth = mapWithDepth;\n//# sourceMappingURL=mapChildren.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9tYXBDaGlsZHJlbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsaUdBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy9DcmFja2VkL0Zyb250LWVuZC9zdGFydHVwL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyYWN0b3IvbGliL21hcENoaWxkcmVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuZnVuY3Rpb24gbWFwQ2hpbGQoY2hpbGQsIGksIGRlcHRoKSB7XG4gIGlmIChjaGlsZC50YWdOYW1lKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNoaWxkLnByb3BlcnRpZXMgJiYgQXJyYXkuaXNBcnJheShjaGlsZC5wcm9wZXJ0aWVzLmNsYXNzTmFtZSkgPyBjaGlsZC5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5qb2luKCcgJykgOiBjaGlsZC5wcm9wZXJ0aWVzLmNsYXNzTmFtZTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjaGlsZC50YWdOYW1lLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogXCJmcmFjdC1cIi5jb25jYXQoZGVwdGgsIFwiLVwiKS5jb25jYXQoaSlcbiAgICB9LCBjaGlsZC5wcm9wZXJ0aWVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pLCBjaGlsZC5jaGlsZHJlbiAmJiBjaGlsZC5jaGlsZHJlbi5tYXAobWFwV2l0aERlcHRoKGRlcHRoICsgMSkpKTtcbiAgfVxuICByZXR1cm4gY2hpbGQudmFsdWU7XG59XG5mdW5jdGlvbiBtYXBXaXRoRGVwdGgoZGVwdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1hcENoaWxkcmVuV2l0aERlcHRoKGNoaWxkLCBpKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkKGNoaWxkLCBpLCBkZXB0aCk7XG4gIH07XG59XG5leHBvcnRzLmRlcHRoID0gbWFwV2l0aERlcHRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwQ2hpbGRyZW4uanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/mapChildren.js\n");

/***/ })

};
;