(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\ERP\\resources\\js\\components\\RequisitionAdd.vue: Unexpected token, expected \",\" (93:8)\n\n\u001b[0m \u001b[90m 91 |\u001b[39m             })\u001b[0m\n\u001b[0m \u001b[90m 92 |\u001b[39m         }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 93 |\u001b[39m         setPriceAndUnit(item_id\u001b[33m,\u001b[39mkey){\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 94 |\u001b[39m             \u001b[36mvar\u001b[39m selected \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mallItems\u001b[33m.\u001b[39mfind((item) \u001b[33m=>\u001b[39m item\u001b[33m.\u001b[39mid \u001b[33m==\u001b[39m item_id)\u001b[0m\n\u001b[0m \u001b[90m 95 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mitems\u001b[33m.\u001b[39munit[key] \u001b[33m=\u001b[39m selected\u001b[33m.\u001b[39munit\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 96 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mitems\u001b[33m.\u001b[39mprice[key] \u001b[33m=\u001b[39m selected\u001b[33m.\u001b[39mprice\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Parser.raise (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:3335:19)\n    at Parser.unexpected (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:3373:16)\n    at Parser.expect (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:4002:28)\n    at Parser.parseObjectLike (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:13486:14)\n    at Parser.parseExprAtom (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12890:23)\n    at Parser.parseExprSubscripts (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12540:23)\n    at Parser.parseUpdate (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12519:21)\n    at Parser.parseMaybeUnary (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12490:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12284:61)\n    at Parser.parseExprOps (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12291:23)\n    at Parser.parseMaybeConditional (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12261:23)\n    at Parser.parseMaybeAssign (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12214:21)\n    at D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12172:39\n    at Parser.allowInAnd (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:14242:12)\n    at Parser.parseMaybeAssignAllowIn (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12172:17)\n    at Parser.parseObjectProperty (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:13659:101)\n    at Parser.parseObjPropValue (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:13692:100)\n    at Parser.parsePropertyDefinition (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:13609:10)\n    at Parser.parseObjectLike (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:13499:21)\n    at Parser.parseExprAtom (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12890:23)\n    at Parser.parseExprSubscripts (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12540:23)\n    at Parser.parseUpdate (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12519:21)\n    at Parser.parseMaybeUnary (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12490:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12284:61)\n    at Parser.parseExprOps (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12291:23)\n    at Parser.parseMaybeConditional (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12261:23)\n    at Parser.parseMaybeAssign (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12214:21)\n    at D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12172:39\n    at Parser.allowInAnd (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:14236:16)\n    at Parser.parseMaybeAssignAllowIn (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:12172:17)\n    at Parser.parseExportDefaultExpression (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:15907:22)\n    at Parser.parseExport (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:15795:31)\n    at Parser.parseStatementContent (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:14649:27)\n    at Parser.parseStatement (D:\\ERP\\node_modules\\@babel\\parser\\lib\\index.js:14533:17)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _vm._l(_vm.items.qnt, function (ind, key) {
              return _c("div", [
                _c(
                  "div",
                  { staticClass: "row", attrs: { id: "item_add_body" } },
                  [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Item")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.items.itemid[key],
                                expression: "items.itemid[key]",
                              },
                            ],
                            staticClass: "form-control select2",
                            attrs: { id: "item_select_" + key },
                            on: {
                              change: [
                                function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.items.itemid,
                                    key,
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function ($event) {
                                  return _vm.setPriceAndUnit(
                                    _vm.items.itemid[key],
                                    key
                                  )
                                },
                              ],
                            },
                          },
                          _vm._l(_vm.allItems, function (item) {
                            return _c(
                              "option",
                              { domProps: { value: item.id } },
                              [_vm._v(_vm._s(item.item_name))]
                            )
                          }),
                          0
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3 mb-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Qnt")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.items.qnt[key],
                              expression: "items.qnt[key]",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.items.qnt[key] },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.items.qnt, key, $event.target.value)
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3 mt-5" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.items.unit[key]) +
                          "\n                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3 mt-5" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.items.price[key]
                              ? _vm.items.price[key] +
                                  " BDT / " +
                                  _vm.items.unit[key]
                              : ""
                          ) +
                          "\n                        "
                      ),
                    ]),
                  ]
                ),
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 mb-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: {
                      click: function ($event) {
                        return _vm.addMoreItem()
                      },
                    },
                  },
                  [_vm._v("Add More")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success",
                    on: {
                      click: function ($event) {
                        return _vm.submitReceive()
                      },
                    },
                  },
                  [_vm._v("Submit")]
                ),
              ]),
            ]),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "float-left" }, [
        _c("h4", [_vm._v("Create Requisition")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/RequisitionAdd.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/RequisitionAdd.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequisitionAdd.vue?vue&type=template&id=6a3169e0& */ "./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0&");
/* harmony import */ var _RequisitionAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequisitionAdd.vue?vue&type=script&lang=js& */ "./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequisitionAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RequisitionAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisitionAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RequisitionAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RequisitionAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisitionAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RequisitionAdd.vue?vue&type=template&id=6a3169e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RequisitionAdd.vue?vue&type=template&id=6a3169e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisitionAdd_vue_vue_type_template_id_6a3169e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);