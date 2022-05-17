(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/List.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "categories",
  data: function data() {
    return {
      items: []
    };
  },
  mounted: function mounted() {
    this.getItems();
  },
  methods: {
    getItems: function getItems() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get('/api/items').then(function (response) {
                  _this.items = response.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this.items = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteItem: function deleteItem(id) {
      var _this2 = this;

      swal({
        title: "Are you sure?",
        text: "This item will be deleted permanently",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          _this2.axios["delete"]("/api/items/".concat(id)).then(function (response) {
            _this2.getItems();

            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success"
            });
          });
        } else {
          swal("Item is safe!");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=template&id=1856aeee&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/List.vue?vue&type=template&id=1856aeee& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "float-right" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-outline-primary",
                  attrs: { to: { name: "additem" }, title: "Add New" },
                },
                [
                  _c("i", {
                    staticClass: "fa fa-plus",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(1),
              _vm._v(" "),
              _vm.items.length > 0
                ? _c(
                    "tbody",
                    _vm._l(_vm.items, function (item, key) {
                      return _c("tr", { key: key }, [
                        _c("td", [_vm._v(_vm._s(item.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.item_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.item_code))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.price))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.item_details))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-outline-success",
                                attrs: {
                                  to: {
                                    name: "editItem",
                                    params: { id: item.id },
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-pencil-square-o",
                                  attrs: { "aria-hidden": "true" },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteItem(item.id)
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-trash-o",
                                  attrs: { "aria-hidden": "true" },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ])
                    }),
                    0
                  )
                : _c("tbody", [_vm._m(2)]),
            ]),
          ]),
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
    return _c("div", { staticClass: "float-left" }, [
      _c("h4", [_vm._v("Items")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4", align: "center" } }, [
        _vm._v("No Data Found."),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/List.vue":
/*!******************************************!*\
  !*** ./resources/js/components/List.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=1856aeee& */ "./resources/js/components/List.vue?vue&type=template&id=1856aeee&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/List.vue?vue&type=template&id=1856aeee&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/List.vue?vue&type=template&id=1856aeee& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=1856aeee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=template&id=1856aeee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);