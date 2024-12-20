"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sanity-plugin-markdown";
exports.ids = ["vendor-chunks/sanity-plugin-markdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/sanity-plugin-markdown/lib/_chunks-es/plugin.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/sanity-plugin-markdown/lib/_chunks-es/plugin.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownInput: () => (/* binding */ MarkdownInput),\n/* harmony export */   defaultMdeTools: () => (/* binding */ defaultMdeTools),\n/* harmony export */   markdownSchema: () => (/* binding */ markdownSchema),\n/* harmony export */   markdownSchemaType: () => (/* binding */ markdownSchemaType)\n/* harmony export */ });\n/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sanity */ \"(ssr)/./node_modules/sanity/lib/index.mjs\");\n/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sanity */ \"(ssr)/./node_modules/@sanity/types/lib/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _sanity_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/ui */ \"(ssr)/./node_modules/@sanity/ui/dist/index.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(ssr)/./node_modules/styled-components/dist/styled-components.esm.js\");\n\n\n\n\n\nconst MarkdownInputStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.styled)((0,_sanity_ui__WEBPACK_IMPORTED_MODULE_3__.Box))`\n  & .CodeMirror.CodeMirror {\n    color: ${({ theme }) => theme.sanity.color.card.enabled.fg};\n    border-color: ${({ theme }) => theme.sanity.color.card.enabled.border};\n    background-color: inherit;\n  }\n\n  & .cm-s-easymde .CodeMirror-cursor {\n    border-color: ${({ theme }) => theme.sanity.color.card.enabled.fg};\n  }\n\n  & .editor-toolbar,\n  .editor-preview-side {\n    border-color: ${({ theme }) => theme.sanity.color.card.enabled.border};\n  }\n\n  & .CodeMirror-focused .CodeMirror-selected.CodeMirror-selected.CodeMirror-selected {\n    background-color: ${({ theme }) => theme.sanity.color.selectable?.primary?.hovered?.bg};\n  }\n\n  & .CodeMirror-selected.CodeMirror-selected.CodeMirror-selected {\n    background-color: ${({ theme }) => theme.sanity.color.card.enabled.bg};\n  }\n\n  & .editor-toolbar > * {\n    color: ${({ theme }) => theme.sanity.color.card.enabled.fg};\n  }\n\n  & .editor-toolbar > .active,\n  .editor-toolbar > button:hover,\n  .editor-preview pre,\n  .cm-s-easymde .cm-comment {\n    background-color: ${({ theme }) => theme.sanity.color.card.enabled.bg};\n  }\n\n  & .editor-preview {\n    background-color: ${({ theme }) => theme.sanity.color.card.enabled.bg};\n\n    & h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      font-size: revert;\n    }\n\n    & ul,\n    li {\n      list-style: revert;\n      padding: revert;\n    }\n\n    & a {\n      text-decoration: revert;\n    }\n  }\n`, SimpleMdeReact = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/easymde\"), __webpack_require__.e(\"vendor-chunks/sanity-plugin-markdown\"), __webpack_require__.e(\"vendor-chunks/marked\"), __webpack_require__.e(\"vendor-chunks/typo-js\"), __webpack_require__.e(\"vendor-chunks/codemirror-spell-checker\")]).then(__webpack_require__.bind(__webpack_require__, /*! react-simplemde-editor */ \"(ssr)/./node_modules/sanity-plugin-markdown/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs\"))), defaultMdeTools = [\n  \"heading\",\n  \"bold\",\n  \"italic\",\n  \"|\",\n  \"quote\",\n  \"unordered-list\",\n  \"ordered-list\",\n  \"|\",\n  \"link\",\n  \"image\",\n  \"code\",\n  \"|\",\n  \"preview\",\n  \"side-by-side\"\n];\nfunction MarkdownInput(props) {\n  const {\n    value = \"\",\n    onChange,\n    elementProps: { onBlur, onFocus, ref },\n    reactMdeProps: { options: mdeCustomOptions, ...reactMdeProps } = {},\n    schemaType\n  } = props, client = (0,sanity__WEBPACK_IMPORTED_MODULE_4__.useClient)({ apiVersion: \"2022-01-01\" }), { imageUrl } = schemaType.options ?? {}, imageUpload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(\n    (file, onSuccess, onError) => {\n      client.assets.upload(\"image\", file).then((doc) => onSuccess(imageUrl ? imageUrl(doc) : `${doc.url}?w=450`)).catch((e) => {\n        console.error(e), onError(e.message);\n      });\n    },\n    [client, imageUrl]\n  ), mdeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n    autofocus: !1,\n    spellChecker: !1,\n    sideBySideFullscreen: !1,\n    uploadImage: !0,\n    imageUploadFunction: imageUpload,\n    toolbar: defaultMdeTools,\n    status: !1,\n    ...mdeCustomOptions\n  }), [imageUpload, mdeCustomOptions]), handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(\n    (newValue) => {\n      onChange(sanity__WEBPACK_IMPORTED_MODULE_4__.PatchEvent.from(newValue ? (0,sanity__WEBPACK_IMPORTED_MODULE_4__.set)(newValue) : (0,sanity__WEBPACK_IMPORTED_MODULE_4__.unset)()));\n    },\n    [onChange]\n  );\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)(\n    noop,\n    () => !0,\n    () => !1\n  ) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MarkdownInputStyles, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n    SimpleMdeReact,\n    {\n      ...reactMdeProps,\n      ref,\n      value,\n      onChange: handleChange,\n      onBlur,\n      onFocus,\n      options: mdeOptions,\n      spellCheck: !1\n    }\n  ) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MarkdownInputStyles, { children: fallback });\n}\nconst noop = () => () => {\n}, fallback = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sanity_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { padding: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sanity_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { children: \"Loading editor...\" }) }), markdownTypeName = \"markdown\", markdownSchemaType = (0,sanity__WEBPACK_IMPORTED_MODULE_5__.defineType)({\n  type: \"string\",\n  name: markdownTypeName,\n  title: \"Markdown\",\n  components: { input: MarkdownInput }\n}), markdownSchema = (0,sanity__WEBPACK_IMPORTED_MODULE_4__.definePlugin)((config) => ({\n  name: \"markdown-editor\",\n  schema: {\n    types: [\n      config && config.input ? { ...markdownSchemaType, components: { input: config.input } } : markdownSchemaType\n    ]\n  }\n}));\n\n//# sourceMappingURL=plugin.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FuaXR5LXBsdWdpbi1tYXJrZG93bi9saWIvX2NodW5rcy1lcy9wbHVnaW4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUY7QUFDN0M7QUFDMkM7QUFDNUM7QUFDSTtBQUMzQyw0QkFBNEIseURBQU0sQ0FBQywrQ0FBRztBQUN0QztBQUNBLGFBQWEsR0FBRyxPQUFPO0FBQ3ZCLG9CQUFvQixHQUFHLE9BQU87QUFDOUI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixHQUFHLE9BQU87QUFDOUI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixHQUFHLE9BQU87QUFDOUI7O0FBRUE7QUFDQSx3QkFBd0IsR0FBRyxPQUFPO0FBQ2xDOztBQUVBO0FBQ0Esd0JBQXdCLEdBQUcsT0FBTztBQUNsQzs7QUFFQTtBQUNBLGFBQWEsR0FBRyxPQUFPO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsT0FBTztBQUNsQzs7QUFFQTtBQUNBLHdCQUF3QixHQUFHLE9BQU87O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBSSxPQUFPLHdlQUFnQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUMscUJBQXFCLDhDQUE4QyxJQUFJO0FBQ3ZFO0FBQ0EsSUFBSSxrQkFBa0IsaURBQVMsR0FBRywwQkFBMEIsS0FBSyxXQUFXLDBCQUEwQixnQkFBZ0Isa0RBQVc7QUFDakk7QUFDQSxnR0FBZ0csUUFBUTtBQUN4RztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsOENBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsb0RBQW9ELGtEQUFXO0FBQ2xFO0FBQ0EsZUFBZSw4Q0FBVSxpQkFBaUIsMkNBQUcsYUFBYSw2Q0FBSztBQUMvRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVMsMkRBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBRyx3QkFBd0IsMEJBQTBCLHNEQUFHLENBQUMsMkNBQVEsSUFBSSxvQ0FBb0Msc0RBQUc7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRyxvQkFBb0Isc0RBQUcsd0JBQXdCLG9CQUFvQjtBQUMzRTtBQUNBO0FBQ0EsQ0FBQyw2QkFBNkIsc0RBQUcsQ0FBQywyQ0FBRyxJQUFJLHNDQUFzQyxzREFBRyxDQUFDLDRDQUFJLElBQUksK0JBQStCLEdBQUcsdURBQXVELGtEQUFVO0FBQzlMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixDQUFDLG9CQUFvQixvREFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUNBQXFDLHdCQUF3QjtBQUM5RjtBQUNBO0FBQ0EsQ0FBQztBQU1DO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0NyYWNrZWQvRnJvbnQtZW5kL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhbml0eS1wbHVnaW4tbWFya2Rvd24vbGliL19jaHVua3MtZXMvcGx1Z2luLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDbGllbnQsIFBhdGNoRXZlbnQsIHNldCwgdW5zZXQsIGRlZmluZVR5cGUsIGRlZmluZVBsdWdpbiB9IGZyb20gXCJzYW5pdHlcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbGF6eSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBzYW5pdHkvdWlcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuY29uc3QgTWFya2Rvd25JbnB1dFN0eWxlcyA9IHN0eWxlZChCb3gpYFxuICAmIC5Db2RlTWlycm9yLkNvZGVNaXJyb3Ige1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNhbml0eS5jb2xvci5jYXJkLmVuYWJsZWQuZmd9O1xuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zYW5pdHkuY29sb3IuY2FyZC5lbmFibGVkLmJvcmRlcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICYgLmNtLXMtZWFzeW1kZSAuQ29kZU1pcnJvci1jdXJzb3Ige1xuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zYW5pdHkuY29sb3IuY2FyZC5lbmFibGVkLmZnfTtcbiAgfVxuXG4gICYgLmVkaXRvci10b29sYmFyLFxuICAuZWRpdG9yLXByZXZpZXctc2lkZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNhbml0eS5jb2xvci5jYXJkLmVuYWJsZWQuYm9yZGVyfTtcbiAgfVxuXG4gICYgLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1zZWxlY3RlZC5Db2RlTWlycm9yLXNlbGVjdGVkLkNvZGVNaXJyb3Itc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2FuaXR5LmNvbG9yLnNlbGVjdGFibGU/LnByaW1hcnk/LmhvdmVyZWQ/LmJnfTtcbiAgfVxuXG4gICYgLkNvZGVNaXJyb3Itc2VsZWN0ZWQuQ29kZU1pcnJvci1zZWxlY3RlZC5Db2RlTWlycm9yLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNhbml0eS5jb2xvci5jYXJkLmVuYWJsZWQuYmd9O1xuICB9XG5cbiAgJiAuZWRpdG9yLXRvb2xiYXIgPiAqIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zYW5pdHkuY29sb3IuY2FyZC5lbmFibGVkLmZnfTtcbiAgfVxuXG4gICYgLmVkaXRvci10b29sYmFyID4gLmFjdGl2ZSxcbiAgLmVkaXRvci10b29sYmFyID4gYnV0dG9uOmhvdmVyLFxuICAuZWRpdG9yLXByZXZpZXcgcHJlLFxuICAuY20tcy1lYXN5bWRlIC5jbS1jb21tZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNhbml0eS5jb2xvci5jYXJkLmVuYWJsZWQuYmd9O1xuICB9XG5cbiAgJiAuZWRpdG9yLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2FuaXR5LmNvbG9yLmNhcmQuZW5hYmxlZC5iZ307XG5cbiAgICAmIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0LFxuICAgIGg1LFxuICAgIGg2IHtcbiAgICAgIGZvbnQtc2l6ZTogcmV2ZXJ0O1xuICAgIH1cblxuICAgICYgdWwsXG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogcmV2ZXJ0O1xuICAgICAgcGFkZGluZzogcmV2ZXJ0O1xuICAgIH1cblxuICAgICYgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHJldmVydDtcbiAgICB9XG4gIH1cbmAsIFNpbXBsZU1kZVJlYWN0ID0gbGF6eSgoKSA9PiBpbXBvcnQoXCJyZWFjdC1zaW1wbGVtZGUtZWRpdG9yXCIpKSwgZGVmYXVsdE1kZVRvb2xzID0gW1xuICBcImhlYWRpbmdcIixcbiAgXCJib2xkXCIsXG4gIFwiaXRhbGljXCIsXG4gIFwifFwiLFxuICBcInF1b3RlXCIsXG4gIFwidW5vcmRlcmVkLWxpc3RcIixcbiAgXCJvcmRlcmVkLWxpc3RcIixcbiAgXCJ8XCIsXG4gIFwibGlua1wiLFxuICBcImltYWdlXCIsXG4gIFwiY29kZVwiLFxuICBcInxcIixcbiAgXCJwcmV2aWV3XCIsXG4gIFwic2lkZS1ieS1zaWRlXCJcbl07XG5mdW5jdGlvbiBNYXJrZG93bklucHV0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSA9IFwiXCIsXG4gICAgb25DaGFuZ2UsXG4gICAgZWxlbWVudFByb3BzOiB7IG9uQmx1ciwgb25Gb2N1cywgcmVmIH0sXG4gICAgcmVhY3RNZGVQcm9wczogeyBvcHRpb25zOiBtZGVDdXN0b21PcHRpb25zLCAuLi5yZWFjdE1kZVByb3BzIH0gPSB7fSxcbiAgICBzY2hlbWFUeXBlXG4gIH0gPSBwcm9wcywgY2xpZW50ID0gdXNlQ2xpZW50KHsgYXBpVmVyc2lvbjogXCIyMDIyLTAxLTAxXCIgfSksIHsgaW1hZ2VVcmwgfSA9IHNjaGVtYVR5cGUub3B0aW9ucyA/PyB7fSwgaW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZmlsZSwgb25TdWNjZXNzLCBvbkVycm9yKSA9PiB7XG4gICAgICBjbGllbnQuYXNzZXRzLnVwbG9hZChcImltYWdlXCIsIGZpbGUpLnRoZW4oKGRvYykgPT4gb25TdWNjZXNzKGltYWdlVXJsID8gaW1hZ2VVcmwoZG9jKSA6IGAke2RvYy51cmx9P3c9NDUwYCkpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSksIG9uRXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2NsaWVudCwgaW1hZ2VVcmxdXG4gICksIG1kZU9wdGlvbnMgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgYXV0b2ZvY3VzOiAhMSxcbiAgICBzcGVsbENoZWNrZXI6ICExLFxuICAgIHNpZGVCeVNpZGVGdWxsc2NyZWVuOiAhMSxcbiAgICB1cGxvYWRJbWFnZTogITAsXG4gICAgaW1hZ2VVcGxvYWRGdW5jdGlvbjogaW1hZ2VVcGxvYWQsXG4gICAgdG9vbGJhcjogZGVmYXVsdE1kZVRvb2xzLFxuICAgIHN0YXR1czogITEsXG4gICAgLi4ubWRlQ3VzdG9tT3B0aW9uc1xuICB9KSwgW2ltYWdlVXBsb2FkLCBtZGVDdXN0b21PcHRpb25zXSksIGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgb25DaGFuZ2UoUGF0Y2hFdmVudC5mcm9tKG5ld1ZhbHVlID8gc2V0KG5ld1ZhbHVlKSA6IHVuc2V0KCkpKTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZV1cbiAgKTtcbiAgcmV0dXJuIHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgIG5vb3AsXG4gICAgKCkgPT4gITAsXG4gICAgKCkgPT4gITFcbiAgKSA/IC8qIEBfX1BVUkVfXyAqLyBqc3goTWFya2Rvd25JbnB1dFN0eWxlcywgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChTdXNwZW5zZSwgeyBmYWxsYmFjaywgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgU2ltcGxlTWRlUmVhY3QsXG4gICAge1xuICAgICAgLi4ucmVhY3RNZGVQcm9wcyxcbiAgICAgIHJlZixcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uRm9jdXMsXG4gICAgICBvcHRpb25zOiBtZGVPcHRpb25zLFxuICAgICAgc3BlbGxDaGVjazogITFcbiAgICB9XG4gICkgfSkgfSkgOiAvKiBAX19QVVJFX18gKi8ganN4KE1hcmtkb3duSW5wdXRTdHlsZXMsIHsgY2hpbGRyZW46IGZhbGxiYWNrIH0pO1xufVxuY29uc3Qgbm9vcCA9ICgpID0+ICgpID0+IHtcbn0sIGZhbGxiYWNrID0gLyogQF9fUFVSRV9fICovIGpzeChCb3gsIHsgcGFkZGluZzogMywgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goVGV4dCwgeyBjaGlsZHJlbjogXCJMb2FkaW5nIGVkaXRvci4uLlwiIH0pIH0pLCBtYXJrZG93blR5cGVOYW1lID0gXCJtYXJrZG93blwiLCBtYXJrZG93blNjaGVtYVR5cGUgPSBkZWZpbmVUeXBlKHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgbmFtZTogbWFya2Rvd25UeXBlTmFtZSxcbiAgdGl0bGU6IFwiTWFya2Rvd25cIixcbiAgY29tcG9uZW50czogeyBpbnB1dDogTWFya2Rvd25JbnB1dCB9XG59KSwgbWFya2Rvd25TY2hlbWEgPSBkZWZpbmVQbHVnaW4oKGNvbmZpZykgPT4gKHtcbiAgbmFtZTogXCJtYXJrZG93bi1lZGl0b3JcIixcbiAgc2NoZW1hOiB7XG4gICAgdHlwZXM6IFtcbiAgICAgIGNvbmZpZyAmJiBjb25maWcuaW5wdXQgPyB7IC4uLm1hcmtkb3duU2NoZW1hVHlwZSwgY29tcG9uZW50czogeyBpbnB1dDogY29uZmlnLmlucHV0IH0gfSA6IG1hcmtkb3duU2NoZW1hVHlwZVxuICAgIF1cbiAgfVxufSkpO1xuZXhwb3J0IHtcbiAgTWFya2Rvd25JbnB1dCxcbiAgZGVmYXVsdE1kZVRvb2xzLFxuICBtYXJrZG93blNjaGVtYSxcbiAgbWFya2Rvd25TY2hlbWFUeXBlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGx1Z2luLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sanity-plugin-markdown/lib/_chunks-es/plugin.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/sanity-plugin-markdown/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/sanity-plugin-markdown/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SimpleMdeReact: () => (/* binding */ SimpleMdeReact),\n/* harmony export */   \"default\": () => (/* binding */ SimpleMdeReact_default)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! easymde */ \"(ssr)/./node_modules/easymde/src/js/easymde.js\");\n// src/SimpleMdeReact.tsx\n\n\nvar _id = 0;\nvar generateId = () => `simplemde-editor-${++_id}`;\nvar useHandleEditorInstanceLifecycle = ({\n  options,\n  id,\n  currentValueRef,\n  textRef\n}) => {\n  const [editor, setEditor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const imageUploadCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (file, onSuccess, onError) => {\n      const imageUpload = options == null ? void 0 : options.imageUploadFunction;\n      if (imageUpload) {\n        const _onSuccess = (url) => {\n          onSuccess(url);\n        };\n        imageUpload(file, _onSuccess, onError);\n      }\n    },\n    [options == null ? void 0 : options.imageUploadFunction]\n  );\n  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(editor);\n  editorRef.current = editor;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let editor2;\n    if (textRef) {\n      const initialOptions = {\n        element: textRef,\n        initialValue: currentValueRef.current\n      };\n      const imageUploadFunction = (options == null ? void 0 : options.imageUploadFunction) ? imageUploadCallback : void 0;\n      editor2 = new easymde__WEBPACK_IMPORTED_MODULE_1__(\n        Object.assign({}, initialOptions, options, {\n          imageUploadFunction\n        })\n      );\n      setEditor(editor2);\n    }\n    return () => {\n      editor2 == null ? void 0 : editor2.toTextArea();\n      editor2 == null ? void 0 : editor2.cleanup();\n    };\n  }, [textRef, currentValueRef, id, imageUploadCallback, options]);\n  const codemirror = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    return editor == null ? void 0 : editor.codemirror;\n  }, [editor == null ? void 0 : editor.codemirror]);\n  return { editor, codemirror };\n};\nvar SimpleMdeReact = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {\n  const {\n    events,\n    value,\n    options,\n    children,\n    extraKeys,\n    getLineAndCursor,\n    getMdeInstance,\n    getCodemirrorInstance,\n    onChange,\n    id: anId,\n    placeholder,\n    textareaProps,\n    ...rest\n  } = props;\n  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => anId ?? generateId(), [anId]);\n  const elementWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const nonEventChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n  const currentValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);\n  currentValueRef.current = value;\n  const [textRef, setTextRef] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const { editor, codemirror } = useHandleEditorInstanceLifecycle({\n    options,\n    id,\n    currentValueRef,\n    textRef\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (nonEventChangeRef.current) {\n      editor == null ? void 0 : editor.value(value ?? \"\");\n    }\n    nonEventChangeRef.current = true;\n  }, [editor, value]);\n  const onCodemirrorChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (_, changeObject) => {\n      if ((editor == null ? void 0 : editor.value()) !== currentValueRef.current) {\n        nonEventChangeRef.current = false;\n        onChange == null ? void 0 : onChange((editor == null ? void 0 : editor.value()) ?? \"\", changeObject);\n      }\n    },\n    [editor, onChange]\n  );\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (options == null ? void 0 : options.autofocus) {\n      codemirror == null ? void 0 : codemirror.focus();\n      codemirror == null ? void 0 : codemirror.setCursor(codemirror == null ? void 0 : codemirror.lineCount(), 0);\n    }\n  }, [codemirror, options == null ? void 0 : options.autofocus]);\n  const getCursorCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    codemirror && (getLineAndCursor == null ? void 0 : getLineAndCursor(codemirror.getDoc().getCursor()));\n  }, [codemirror, getLineAndCursor]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getCursorCallback();\n  }, [getCursorCallback]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    editor && (getMdeInstance == null ? void 0 : getMdeInstance(editor));\n  }, [editor, getMdeInstance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    codemirror && (getCodemirrorInstance == null ? void 0 : getCodemirrorInstance(codemirror));\n  }, [codemirror, getCodemirrorInstance, getMdeInstance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (extraKeys && codemirror) {\n      codemirror.setOption(\n        \"extraKeys\",\n        Object.assign({}, codemirror.getOption(\"extraKeys\"), extraKeys)\n      );\n    }\n  }, [codemirror, extraKeys]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    var _a;\n    const toolbarNode = (_a = elementWrapperRef.current) == null ? void 0 : _a.getElementsByClassName(\n      \"editor-toolbarNode\"\n    )[0];\n    const handler = codemirror && onCodemirrorChangeHandler;\n    if (handler) {\n      toolbarNode == null ? void 0 : toolbarNode.addEventListener(\"click\", handler);\n      return () => {\n        toolbarNode == null ? void 0 : toolbarNode.removeEventListener(\"click\", handler);\n      };\n    }\n    return () => {\n    };\n  }, [codemirror, onCodemirrorChangeHandler]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    codemirror == null ? void 0 : codemirror.on(\"change\", onCodemirrorChangeHandler);\n    codemirror == null ? void 0 : codemirror.on(\"cursorActivity\", getCursorCallback);\n    return () => {\n      codemirror == null ? void 0 : codemirror.off(\"change\", onCodemirrorChangeHandler);\n      codemirror == null ? void 0 : codemirror.off(\"cursorActivity\", getCursorCallback);\n    };\n  }, [codemirror, getCursorCallback, onCodemirrorChangeHandler]);\n  const prevEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(events);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const isNotFirstEffectRun = events !== prevEvents.current;\n    isNotFirstEffectRun && prevEvents.current && Object.entries(prevEvents.current).forEach(([event, handler]) => {\n      handler && (codemirror == null ? void 0 : codemirror.off(event, handler));\n    });\n    events && Object.entries(events).forEach(([event, handler]) => {\n      handler && (codemirror == null ? void 0 : codemirror.on(event, handler));\n    });\n    prevEvents.current = events;\n    return () => {\n      events && Object.entries(events).forEach(([event, handler]) => {\n        handler && (codemirror == null ? void 0 : codemirror.off(event, handler));\n      });\n    };\n  }, [codemirror, events]);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: `${id}-wrapper`,\n    ...rest,\n    ref: (aRef) => {\n      if (typeof ref === \"function\") {\n        ref(aRef);\n      } else if (ref) {\n        ref.current = aRef;\n      }\n      elementWrapperRef.current = aRef;\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    ...textareaProps,\n    id,\n    placeholder,\n    ref: setTextRef,\n    style: { display: \"none\" }\n  }));\n});\nSimpleMdeReact.displayName = \"SimpleMdeReact\";\nvar SimpleMdeReact_default = SimpleMdeReact;\n\n//# sourceMappingURL=SimpleMdeReact.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FuaXR5LXBsdWdpbi1tYXJrZG93bi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlbWRlLWVkaXRvci9kaXN0L1NpbXBsZU1kZVJlYWN0Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFPZTtBQUNpQjtBQUNoQztBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOEJBQThCLCtDQUFRO0FBQ3RDLDhCQUE4QixrREFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQU07QUFDMUI7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQVM7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQiw4Q0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSCxXQUFXO0FBQ1g7QUFDQSxxQkFBcUIsNkNBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osYUFBYSw4Q0FBTztBQUNwQiw0QkFBNEIsNkNBQU07QUFDbEMsNEJBQTRCLDZDQUFNO0FBQ2xDLDBCQUEwQiw2Q0FBTTtBQUNoQztBQUNBLGdDQUFnQywrQ0FBUTtBQUN4QyxVQUFVLHFCQUFxQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0NBQW9DLGtEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0QkFBNEIsa0RBQVc7QUFDdkM7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWDtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQiw2Q0FBTTtBQUMzQixFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLGdEQUFtQjtBQUM1QyxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsa0JBQWtCLGdEQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy9DcmFja2VkL0Zyb250LWVuZC9zdGFydHVwL25vZGVfbW9kdWxlcy9zYW5pdHktcGx1Z2luLW1hcmtkb3duL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGVtZGUtZWRpdG9yL2Rpc3QvU2ltcGxlTWRlUmVhY3QubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9TaW1wbGVNZGVSZWFjdC50c3hcbmltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpbXBsZU1ERSBmcm9tIFwiZWFzeW1kZVwiO1xudmFyIF9pZCA9IDA7XG52YXIgZ2VuZXJhdGVJZCA9ICgpID0+IGBzaW1wbGVtZGUtZWRpdG9yLSR7KytfaWR9YDtcbnZhciB1c2VIYW5kbGVFZGl0b3JJbnN0YW5jZUxpZmVjeWNsZSA9ICh7XG4gIG9wdGlvbnMsXG4gIGlkLFxuICBjdXJyZW50VmFsdWVSZWYsXG4gIHRleHRSZWZcbn0pID0+IHtcbiAgY29uc3QgW2VkaXRvciwgc2V0RWRpdG9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBpbWFnZVVwbG9hZENhbGxiYWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGZpbGUsIG9uU3VjY2Vzcywgb25FcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VVcGxvYWQgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmltYWdlVXBsb2FkRnVuY3Rpb247XG4gICAgICBpZiAoaW1hZ2VVcGxvYWQpIHtcbiAgICAgICAgY29uc3QgX29uU3VjY2VzcyA9ICh1cmwpID0+IHtcbiAgICAgICAgICBvblN1Y2Nlc3ModXJsKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2VVcGxvYWQoZmlsZSwgX29uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZVVwbG9hZEZ1bmN0aW9uXVxuICApO1xuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoZWRpdG9yKTtcbiAgZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGVkaXRvcjI7XG4gICAgaWYgKHRleHRSZWYpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxPcHRpb25zID0ge1xuICAgICAgICBlbGVtZW50OiB0ZXh0UmVmLFxuICAgICAgICBpbml0aWFsVmFsdWU6IGN1cnJlbnRWYWx1ZVJlZi5jdXJyZW50XG4gICAgICB9O1xuICAgICAgY29uc3QgaW1hZ2VVcGxvYWRGdW5jdGlvbiA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmltYWdlVXBsb2FkRnVuY3Rpb24pID8gaW1hZ2VVcGxvYWRDYWxsYmFjayA6IHZvaWQgMDtcbiAgICAgIGVkaXRvcjIgPSBuZXcgU2ltcGxlTURFKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsT3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICAgIGltYWdlVXBsb2FkRnVuY3Rpb25cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBzZXRFZGl0b3IoZWRpdG9yMik7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlZGl0b3IyID09IG51bGwgPyB2b2lkIDAgOiBlZGl0b3IyLnRvVGV4dEFyZWEoKTtcbiAgICAgIGVkaXRvcjIgPT0gbnVsbCA/IHZvaWQgMCA6IGVkaXRvcjIuY2xlYW51cCgpO1xuICAgIH07XG4gIH0sIFt0ZXh0UmVmLCBjdXJyZW50VmFsdWVSZWYsIGlkLCBpbWFnZVVwbG9hZENhbGxiYWNrLCBvcHRpb25zXSk7XG4gIGNvbnN0IGNvZGVtaXJyb3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gZWRpdG9yID09IG51bGwgPyB2b2lkIDAgOiBlZGl0b3IuY29kZW1pcnJvcjtcbiAgfSwgW2VkaXRvciA9PSBudWxsID8gdm9pZCAwIDogZWRpdG9yLmNvZGVtaXJyb3JdKTtcbiAgcmV0dXJuIHsgZWRpdG9yLCBjb2RlbWlycm9yIH07XG59O1xudmFyIFNpbXBsZU1kZVJlYWN0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgZXZlbnRzLFxuICAgIHZhbHVlLFxuICAgIG9wdGlvbnMsXG4gICAgY2hpbGRyZW4sXG4gICAgZXh0cmFLZXlzLFxuICAgIGdldExpbmVBbmRDdXJzb3IsXG4gICAgZ2V0TWRlSW5zdGFuY2UsXG4gICAgZ2V0Q29kZW1pcnJvckluc3RhbmNlLFxuICAgIG9uQ2hhbmdlLFxuICAgIGlkOiBhbklkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHRleHRhcmVhUHJvcHMsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGlkID0gdXNlTWVtbygoKSA9PiBhbklkID8/IGdlbmVyYXRlSWQoKSwgW2FuSWRdKTtcbiAgY29uc3QgZWxlbWVudFdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5vbkV2ZW50Q2hhbmdlUmVmID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBjdXJyZW50VmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICBjdXJyZW50VmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICBjb25zdCBbdGV4dFJlZiwgc2V0VGV4dFJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBlZGl0b3IsIGNvZGVtaXJyb3IgfSA9IHVzZUhhbmRsZUVkaXRvckluc3RhbmNlTGlmZWN5Y2xlKHtcbiAgICBvcHRpb25zLFxuICAgIGlkLFxuICAgIGN1cnJlbnRWYWx1ZVJlZixcbiAgICB0ZXh0UmVmXG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub25FdmVudENoYW5nZVJlZi5jdXJyZW50KSB7XG4gICAgICBlZGl0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVkaXRvci52YWx1ZSh2YWx1ZSA/PyBcIlwiKTtcbiAgICB9XG4gICAgbm9uRXZlbnRDaGFuZ2VSZWYuY3VycmVudCA9IHRydWU7XG4gIH0sIFtlZGl0b3IsIHZhbHVlXSk7XG4gIGNvbnN0IG9uQ29kZW1pcnJvckNoYW5nZUhhbmRsZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoXywgY2hhbmdlT2JqZWN0KSA9PiB7XG4gICAgICBpZiAoKGVkaXRvciA9PSBudWxsID8gdm9pZCAwIDogZWRpdG9yLnZhbHVlKCkpICE9PSBjdXJyZW50VmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICBub25FdmVudENoYW5nZVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIG9uQ2hhbmdlID09IG51bGwgPyB2b2lkIDAgOiBvbkNoYW5nZSgoZWRpdG9yID09IG51bGwgPyB2b2lkIDAgOiBlZGl0b3IudmFsdWUoKSkgPz8gXCJcIiwgY2hhbmdlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtlZGl0b3IsIG9uQ2hhbmdlXVxuICApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmF1dG9mb2N1cykge1xuICAgICAgY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5mb2N1cygpO1xuICAgICAgY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5zZXRDdXJzb3IoY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5saW5lQ291bnQoKSwgMCk7XG4gICAgfVxuICB9LCBbY29kZW1pcnJvciwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5hdXRvZm9jdXNdKTtcbiAgY29uc3QgZ2V0Q3Vyc29yQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29kZW1pcnJvciAmJiAoZ2V0TGluZUFuZEN1cnNvciA9PSBudWxsID8gdm9pZCAwIDogZ2V0TGluZUFuZEN1cnNvcihjb2RlbWlycm9yLmdldERvYygpLmdldEN1cnNvcigpKSk7XG4gIH0sIFtjb2RlbWlycm9yLCBnZXRMaW5lQW5kQ3Vyc29yXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q3Vyc29yQ2FsbGJhY2soKTtcbiAgfSwgW2dldEN1cnNvckNhbGxiYWNrXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZWRpdG9yICYmIChnZXRNZGVJbnN0YW5jZSA9PSBudWxsID8gdm9pZCAwIDogZ2V0TWRlSW5zdGFuY2UoZWRpdG9yKSk7XG4gIH0sIFtlZGl0b3IsIGdldE1kZUluc3RhbmNlXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29kZW1pcnJvciAmJiAoZ2V0Q29kZW1pcnJvckluc3RhbmNlID09IG51bGwgPyB2b2lkIDAgOiBnZXRDb2RlbWlycm9ySW5zdGFuY2UoY29kZW1pcnJvcikpO1xuICB9LCBbY29kZW1pcnJvciwgZ2V0Q29kZW1pcnJvckluc3RhbmNlLCBnZXRNZGVJbnN0YW5jZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHRyYUtleXMgJiYgY29kZW1pcnJvcikge1xuICAgICAgY29kZW1pcnJvci5zZXRPcHRpb24oXG4gICAgICAgIFwiZXh0cmFLZXlzXCIsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGNvZGVtaXJyb3IuZ2V0T3B0aW9uKFwiZXh0cmFLZXlzXCIpLCBleHRyYUtleXMpXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2NvZGVtaXJyb3IsIGV4dHJhS2V5c10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB0b29sYmFyTm9kZSA9IChfYSA9IGVsZW1lbnRXcmFwcGVyUmVmLmN1cnJlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgXCJlZGl0b3ItdG9vbGJhck5vZGVcIlxuICAgIClbMF07XG4gICAgY29uc3QgaGFuZGxlciA9IGNvZGVtaXJyb3IgJiYgb25Db2RlbWlycm9yQ2hhbmdlSGFuZGxlcjtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgdG9vbGJhck5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IHRvb2xiYXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRvb2xiYXJOb2RlID09IG51bGwgPyB2b2lkIDAgOiB0b29sYmFyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIH0sIFtjb2RlbWlycm9yLCBvbkNvZGVtaXJyb3JDaGFuZ2VIYW5kbGVyXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCBvbkNvZGVtaXJyb3JDaGFuZ2VIYW5kbGVyKTtcbiAgICBjb2RlbWlycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb2RlbWlycm9yLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgZ2V0Q3Vyc29yQ2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb2RlbWlycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCBvbkNvZGVtaXJyb3JDaGFuZ2VIYW5kbGVyKTtcbiAgICAgIGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3Iub2ZmKFwiY3Vyc29yQWN0aXZpdHlcIiwgZ2V0Q3Vyc29yQ2FsbGJhY2spO1xuICAgIH07XG4gIH0sIFtjb2RlbWlycm9yLCBnZXRDdXJzb3JDYWxsYmFjaywgb25Db2RlbWlycm9yQ2hhbmdlSGFuZGxlcl0pO1xuICBjb25zdCBwcmV2RXZlbnRzID0gdXNlUmVmKGV2ZW50cyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNOb3RGaXJzdEVmZmVjdFJ1biA9IGV2ZW50cyAhPT0gcHJldkV2ZW50cy5jdXJyZW50O1xuICAgIGlzTm90Rmlyc3RFZmZlY3RSdW4gJiYgcHJldkV2ZW50cy5jdXJyZW50ICYmIE9iamVjdC5lbnRyaWVzKHByZXZFdmVudHMuY3VycmVudCkuZm9yRWFjaCgoW2V2ZW50LCBoYW5kbGVyXSkgPT4ge1xuICAgICAgaGFuZGxlciAmJiAoY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5vZmYoZXZlbnQsIGhhbmRsZXIpKTtcbiAgICB9KTtcbiAgICBldmVudHMgJiYgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5mb3JFYWNoKChbZXZlbnQsIGhhbmRsZXJdKSA9PiB7XG4gICAgICBoYW5kbGVyICYmIChjb2RlbWlycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb2RlbWlycm9yLm9uKGV2ZW50LCBoYW5kbGVyKSk7XG4gICAgfSk7XG4gICAgcHJldkV2ZW50cy5jdXJyZW50ID0gZXZlbnRzO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBldmVudHMgJiYgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5mb3JFYWNoKChbZXZlbnQsIGhhbmRsZXJdKSA9PiB7XG4gICAgICAgIGhhbmRsZXIgJiYgKGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3Iub2ZmKGV2ZW50LCBoYW5kbGVyKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbY29kZW1pcnJvciwgZXZlbnRzXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IGAke2lkfS13cmFwcGVyYCxcbiAgICAuLi5yZXN0LFxuICAgIHJlZjogKGFSZWYpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGFSZWYpO1xuICAgICAgfSBlbHNlIGlmIChyZWYpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBhUmVmO1xuICAgICAgfVxuICAgICAgZWxlbWVudFdyYXBwZXJSZWYuY3VycmVudCA9IGFSZWY7XG4gICAgfVxuICB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHtcbiAgICAuLi50ZXh0YXJlYVByb3BzLFxuICAgIGlkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHJlZjogc2V0VGV4dFJlZixcbiAgICBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9XG4gIH0pKTtcbn0pO1xuU2ltcGxlTWRlUmVhY3QuZGlzcGxheU5hbWUgPSBcIlNpbXBsZU1kZVJlYWN0XCI7XG52YXIgU2ltcGxlTWRlUmVhY3RfZGVmYXVsdCA9IFNpbXBsZU1kZVJlYWN0O1xuZXhwb3J0IHtcbiAgU2ltcGxlTWRlUmVhY3QsXG4gIFNpbXBsZU1kZVJlYWN0X2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpbXBsZU1kZVJlYWN0Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sanity-plugin-markdown/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs\n");

/***/ })

};
;