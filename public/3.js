(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "additem",
  data: function data() {
    return {
      item: {
        itemname: '',
        itemcode: '',
        itemdetails: '',
        itemprice: '',
        itemunit: ''
      },
      error: {
        itemname: '',
        itemcode: '',
        itemdetails: '',
        itemprice: '',
        itemunit: ''
      }
    };
  },
  methods: {
    validate: function validate(data_to_check, error_show, type) {
      console.log(data_to_check);

      if (type === "string") {
        if (data_to_check == "") {
          if (error_show == 'itemname') {
            this.error.itemname = "This field is required";
          }

          if (error_show == 'itemcode') {
            this.error.itemcode = "This field is required";
          }

          if (error_show == 'itemunit') {
            this.error.itemunit = "This field is required";
          }

          return false;
        } else {
          if (error_show == 'itemname') {
            this.error.itemname = "";
          }

          if (error_show == 'itemcode') {
            this.error.itemcode = "";
          }

          if (error_show == 'itemunit') {
            this.error.itemunit = "";
          }

          return true;
        }
      }

      if (type === "number") {
        if (data_to_check == "") {
          if (error_show == 'itemprice') {
            this.error.itemprice = "This field is required";
          }

          return false;
        } else if (data_to_check < 1) {
          if (error_show == 'itemprice') {
            this.error.itemprice = "Minimum value 1";
          }

          return false;
        } else {
          if (error_show == 'itemprice') {
            this.error.itemprice = "";
          }

          return true;
        }
      }
    },
    create: function create() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.validate(_this.item.itemname, "itemname", "string") && _this.validate(_this.item.itemcode, "itemcode", "string") && _this.validate(_this.item.itemprice, "itemprice", "number") && _this.validate(_this.item.itemunit, "itemunit", "string"))) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.axios.post('/api/items', _this.item, {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                }).then(function (response) {
                  _this.$router.push({
                    name: "itemList"
                  });

                  swal("Added!", "Item saved!", "success");
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.create.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.itemname,
                          expression: "item.itemname",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.item.itemname },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "itemname", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.error.itemname)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Code")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.itemcode,
                          expression: "item.itemcode",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.item.itemcode },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "itemcode", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.error.itemcode)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.itemdetails,
                          expression: "item.itemdetails",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.item.itemdetails },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "itemdetails", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Price")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.itemprice,
                          expression: "item.itemprice",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.item.itemprice },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "itemprice", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.error.itemprice)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Unit")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.itemunit,
                          expression: "item.itemunit",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.item.itemunit },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "itemunit", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.error.itemunit)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(1),
              ]),
            ]
          ),
        ]),
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
      _c("div", { staticClass: "float-left" }, [_c("h4", [_vm._v("Items")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AddItem.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddItem.vue?vue&type=template&id=38cae28e& */ "./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&");
/* harmony import */ var _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddItem.vue?vue&type=script&lang=js& */ "./resources/js/components/AddItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AddItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddItem.vue?vue&type=template&id=38cae28e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);