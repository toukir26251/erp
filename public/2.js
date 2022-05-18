(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_requisitions_ApproveButtonComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/requisitions/ApproveButtonComponent */ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue");
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
  name: "receive",
  data: function data() {
    return {
      data_table_columns: [{
        label: 'SL',
        name: 'id',
        orderable: true
      }, {
        label: 'Date',
        name: 'date',
        orderable: true
      }, {
        label: 'Reference',
        name: 'receive_ref',
        orderable: true
      }, {
        label: 'Items',
        name: 'items',
        orderable: true
      }, {
        label: 'Total',
        name: 'total_price',
        orderable: true
      }, {
        label: 'Status',
        name: 'status',
        orderable: true
      }, {
        label: 'Action',
        name: 'Edit',
        filterable: false,
        component: _buttons_requisitions_ApproveButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        event: "click",
        handler: this.alertMe,
        classes: {
          'btn': true,
          'btn-primary': true,
          'btn-sm': true
        }
      }],
      received: [],
      auth: {
        Authorization: "Bearer ".concat(localStorage.getItem('token'))
      }
    };
  },
  mounted: function mounted() {// this.getReceive()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type: ""
    };
  },
  props: {
    data: {},
    name: {},
    click: {},
    classes: {}
  },
  created: function created() {
    this.settype();
  },
  methods: {
    settype: function settype() {
      this.type = localStorage.getItem('role');
    },
    approve: function approve(id, action) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                swal({
                  title: "Ok!",
                  text: "Do you want to make this requisition " + action + "?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    _this.axios.put("/api/store/".concat(id), {
                      status: action,
                      user: localStorage.getItem('user')
                    }, {
                      headers: {
                        Authorization: "Bearer ".concat(localStorage.getItem('token'))
                      }
                    }).then(function (response) {
                      _this.$router.push({
                        name: "pendingrequisitions"
                      });

                      swal("Done! This requisition is " + action + "!", {
                        icon: "success"
                      });
                    });
                  } else {
                    swal("Not Done !");
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    done: function done(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                swal({
                  title: "Ok!",
                  text: "Do you want to make Done this requisition?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    _this2.axios.put("/api/store/".concat(id), {
                      status: "done",
                      user: localStorage.getItem('user')
                    }, {
                      headers: {
                        Authorization: "Bearer ".concat(localStorage.getItem('token'))
                      }
                    }).then(function (response) {
                      _this2.$router.push({
                        name: "pendingrequisitions"
                      });

                      swal("Done! This requisition is Done!", {
                        icon: "success"
                      });
                    });
                  } else {
                    swal("Not Done !");
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "storeReceive" }, title: "Add New" },
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
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("data-table", {
              attrs: {
                columns: _vm.data_table_columns,
                url: "/api/pendingrequisition",
                headers: _vm.auth,
              },
            }),
          ],
          1
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
    return _c("div", { staticClass: "float-left" }, [
      _c("h4", [_vm._v("Pending Requisitions")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.type === "admin"
      ? _c(
          "button",
          {
            staticClass: "btn btn-outline-danger",
            attrs: { type: "button", title: "Reject" },
            on: {
              click: function ($event) {
                return _vm.approve(_vm.data.id, "rejected")
              },
            },
          },
          [
            _c("i", {
              staticClass: "fa fa-times",
              attrs: { "aria-hidden": "true" },
            }),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.type === "admin"
      ? _c(
          "button",
          {
            staticClass: "btn btn-outline-success",
            attrs: { type: "button", title: "Approve" },
            on: {
              click: function ($event) {
                return _vm.approve(_vm.data.id, "approved")
              },
            },
          },
          [
            _c("i", {
              staticClass: "fa fa-check-square-o",
              attrs: { "aria-hidden": "true" },
            }),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.type === "store_executive"
      ? _c(
          "button",
          {
            staticClass: "btn btn-outline-success",
            attrs: { type: "button", title: "Make Done" },
            on: {
              click: function ($event) {
                return _vm.done(_vm.data.id)
              },
            },
          },
          [
            _c("i", {
              staticClass: "fa fa-check-square-o",
              attrs: { "aria-hidden": "true" },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PendingRequisition.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/PendingRequisition.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingRequisition.vue?vue&type=template&id=225479b0& */ "./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0&");
/* harmony import */ var _PendingRequisition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingRequisition.vue?vue&type=script&lang=js& */ "./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PendingRequisition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PendingRequisition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequisition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PendingRequisition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PendingRequisition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequisition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PendingRequisition.vue?vue&type=template&id=225479b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PendingRequisition.vue?vue&type=template&id=225479b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequisition_vue_vue_type_template_id_225479b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6& */ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6&");
/* harmony import */ var _ApproveButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApproveButtonComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApproveButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/buttons/requisitions/ApproveButtonComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApproveButtonComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/buttons/requisitions/ApproveButtonComponent.vue?vue&type=template&id=b3b7ffa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveButtonComponent_vue_vue_type_template_id_b3b7ffa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);