(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      role: ""
    };
  },
  created: function created() {
    this.setRole();
  },
  methods: {
    setRole: function setRole() {
      this.role = localStorage.getItem('role');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm.auth
    ? _c("nav", { attrs: { id: "sidebar" } }, [
        _c("ul", { staticClass: "list-unstyled components" }, [
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { "exact-active-class": "active", to: "/home" },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-home",
                        attrs: { "aria-hidden": "true" },
                      }),
                      _vm._v(" Home"),
                    ]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c("li", [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "collapse list-unstyled",
                    attrs: { id: "pageSubmenu" },
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/additem",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-plus-circle",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v(" Add Items"),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/itemlist",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-list",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v("\n                        All Items"),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c("li", [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "collapse list-unstyled",
                    attrs: { id: "pageSubmenu1" },
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/storereceive",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-plus-circle",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v(" Receive Items"),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/storereceivetrans",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-list",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v("\n                        All Receives"),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c("li", [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "collapse list-unstyled",
                    attrs: { id: "pageSubmenu2" },
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/requisitionadd",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-plus-circle",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v(" Requisition Create"),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/requisitionlist",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-list",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v(
                              "\n                        All Requisitions"
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-item nav-link",
                            attrs: {
                              "exact-active-class": "active",
                              to: "/pendingrequisitions",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-tasks",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v(
                              "\n                        Pending Requisitions"
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { "exact-active-class": "active", to: "/stock" },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-database",
                        attrs: { "aria-hidden": "true" },
                      }),
                      _vm._v(" Stock"),
                    ]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "admin" || "store_executive" || "employee"
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { role: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.logout.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-sign-out",
                      attrs: { "aria-hidden": "true" },
                    }),
                    _vm._v(" Logout"),
                  ]
                ),
              ])
            : _vm._e(),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: {
          href: "#pageSubmenu",
          "data-toggle": "collapse",
          "aria-expanded": "false",
        },
      },
      [
        _c("i", { staticClass: "fa fa-th", attrs: { "aria-hidden": "true" } }),
        _vm._v(" Items"),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: {
          href: "#pageSubmenu1",
          "data-toggle": "collapse",
          "aria-expanded": "false",
        },
      },
      [
        _c("i", {
          staticClass: "fa fa-cart-plus",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v(" Store"),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: {
          href: "#pageSubmenu2",
          "data-toggle": "collapse",
          "aria-expanded": "false",
        },
      },
      [
        _c("i", {
          staticClass: "fa fa-hand-paper-o",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v(" Requisition"),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=54bfa98a& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=54bfa98a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);