function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./firebase.service */
    "./src/app/firebase.service.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(afService) {
        _classCallCheck(this, AppComponent);

        this.afService = afService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.afService.getInterpreter().subscribe(function (value) {
            _this.afService.readers = Object.values(value).toString();
            console.log(_this.afService.readers);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chips/chips.component */
    "./src/app/chips/chips.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./patient-detail/patient-detail.component */
    "./src/app/patient-detail/patient-detail.component.ts");
    /* harmony import */


    var _study_detail_study_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./study-detail/study-detail.component */
    "./src/app/study-detail/study-detail.component.ts");
    /* harmony import */


    var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./patient-list/patient-list.component */
    "./src/app/patient-list/patient-list.component.ts");
    /* harmony import */


    var _study_edit_study_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./study-edit/study-edit.component */
    "./src/app/study-edit/study-edit.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts"); // angular material


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: '',
<<<<<<< HEAD
        component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"]
      }, {
        path: 'new',
=======
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
        component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"]
      }, {
        path: 'patient-list',
        component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"]
      }, {
        path: 'study-detail/:Id',
        component: _study_detail_study_detail_component__WEBPACK_IMPORTED_MODULE_28__["StudyDetailComponent"]
      }, {
        path: 'study-edit/:Id',
        component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"], _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_27__["PatientDetailComponent"], _study_detail_study_detail_component__WEBPACK_IMPORTED_MODULE_28__["StudyDetailComponent"], _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"], _study_edit_study_edit_component__WEBPACK_IMPORTED_MODULE_30__["StudyEditComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogContentExampleDialog"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsDialog"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: '',
<<<<<<< HEAD
            component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"]
          }, {
            path: 'new',
=======
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
            component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"]
          }, {
            path: 'patient-list',
            component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"]
          }, {
            path: 'study-detail/:Id',
            component: _study_detail_study_detail_component__WEBPACK_IMPORTED_MODULE_28__["StudyDetailComponent"]
          }, {
            path: 'study-edit/:Id',
            component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"]
          }])],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"], _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_27__["PatientDetailComponent"], _study_detail_study_detail_component__WEBPACK_IMPORTED_MODULE_28__["StudyDetailComponent"], _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientListComponent"], _study_edit_study_edit_component__WEBPACK_IMPORTED_MODULE_30__["StudyEditComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogContentExampleDialog"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsDialog"]],
          entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DialogContentExampleDialog"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsDialog"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chips/chips.component.ts":
  /*!******************************************!*\
    !*** ./src/app/chips/chips.component.ts ***!
    \******************************************/

  /*! exports provided: ChipsComponent, ChipsDialog */

  /***/
  function srcAppChipsChipsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipsComponent", function () {
      return ChipsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipsDialog", function () {
      return ChipsDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
=======
    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


<<<<<<< HEAD
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
=======
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! ../firebase.service */
    "./src/app/firebase.service.ts");
    /* harmony import */


<<<<<<< HEAD
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
=======
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
=======
    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
=======
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
=======
    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
=======
    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
=======
    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
=======
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
=======
    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
=======
    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
=======
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
=======
    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
    /* harmony import */


<<<<<<< HEAD
    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
=======
    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js"); // import { RouterModule, Routes } from '@angular/router';


    function ChipsComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 56);
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 49);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var reader_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", reader_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", reader_r3, " ");
      }
    }

    function ChipsComponent_button_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 57);
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 50);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChipsComponent_button_35_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r4.openDialog("delete");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u522A\u9664\u8CC7\u6599 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ChipsDialog_button_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " SAVE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", "save");
      }
    }

    function ChipsDialog_button_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " DELETE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", "delete");
      }
    }

    var ChipsComponent =
    /*#__PURE__*/
    function () {
      function ChipsComponent(formBuilder, afService, route, dialog, router) {
        _classCallCheck(this, ChipsComponent);

        this.formBuilder = formBuilder;
        this.afService = afService;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
<<<<<<< HEAD
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.checkoutForm = this.formBuilder.group({
          reader: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          study_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          hisnum: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          accessnum: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          A_RT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          A_LT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          A_RT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          A_LT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_RT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_LT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_RT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_LT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_RT_Cingulate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          B_LT_Cingulate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_RT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_LT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_RT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_LT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_RT_Cingulate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          C_LT_Cingulate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          D_RT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          D_LT_ANT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          D_RT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          D_LT_POST: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)],
          MTA_RT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(4)],
          MTA_LT: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(4)]
=======
        this.checkoutForm = this.formBuilder.group({
          reader: "",
          study_date: "",
          hisnum: "",
          accessnum: "",
          A_RT_ANT: 0,
          A_LT_ANT: 0,
          A_RT_POST: 0,
          A_LT_POST: 0,
          B_RT_ANT: 0,
          B_LT_ANT: 0,
          B_RT_POST: 0,
          B_LT_POST: 0,
          B_RT_Cingulate: 0,
          B_LT_Cingulate: 0,
          C_RT_ANT: 0,
          C_LT_ANT: 0,
          C_RT_POST: 0,
          C_LT_POST: 0,
          C_RT_Cingulate: 0,
          C_LT_Cingulate: 0,
          D_RT_ANT: 0,
          D_LT_ANT: 0,
          D_RT_POST: 0,
          D_LT_POST: 0,
          MTA_RT: 0,
          MTA_LT: 0
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
        });
      }

      _createClass(ChipsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // console.log(this.totalprice);
<<<<<<< HEAD
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (params) {
=======
          this.route.paramMap.subscribe(function (params) {
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
            _this2.reader = params.get("Id");
            console.log(_this2.reader);

            if (_this2.reader) {
              _this2.getStudyByReader(_this2.reader);

              console.log(_this2.reader);
            } else {
              console.log("null");
            } // this.getStudy(this.hisnum)

          });
          this.interpreter$ = this.afService.getInterpreter();
        }
      }, {
<<<<<<< HEAD
        key: "openDialog",
        value: function openDialog(action) {
          var _this3 = this;
=======
        key: "openDialogDelete",
        value: function openDialogDelete() {
          var _this3 = this;

          var dialogRef = this.dialog.open(ChipsDialog, {
            data: {
              reader: this.reader
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this3.delete(); // console.log(`Dialog result: ${result}`);

          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(action) {
          var _this4 = this;
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          var dialogRef = this.dialog.open(ChipsDialog, {
            data: {
              action: action
            }
          });
<<<<<<< HEAD
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (result) {
            console.log(result);

            if (result == "save") {
              _this3.onSubmit();
            } else if (result == "delete") {
              _this3.delete();
=======
          dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);

            if (result == "save") {
              _this4.onSubmit();
            } else if (result == "delete") {
              _this4.delete();
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
            }
          });
        }
      }, {
        key: "getStudyByReader",
        value: function getStudyByReader(reader) {
<<<<<<< HEAD
          var _this4 = this;

          this.afService.getStudyByReader(reader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (value) {
            if (value) {
              _this4.data = value;

              _this4.checkoutForm.setValue({
                reader: _this4.data.reader,
                study_date: _this4.data.date,
                hisnum: _this4.data.hisnum,
                accessnum: _this4.data.accessnum,
                A_RT_ANT: _this4.data.A_RT_ANT,
                A_LT_ANT: _this4.data.A_LT_ANT,
                A_RT_POST: _this4.data.A_RT_POST,
                A_LT_POST: _this4.data.A_LT_POST,
                B_RT_ANT: _this4.data.B_RT_ANT,
                B_LT_ANT: _this4.data.B_LT_ANT,
                B_RT_POST: _this4.data.B_RT_POST,
                B_LT_POST: _this4.data.B_LT_POST,
                B_RT_Cingulate: _this4.data.B_RT_Cingulate,
                B_LT_Cingulate: _this4.data.B_LT_Cingulate,
                C_RT_ANT: _this4.data.C_RT_ANT,
                C_LT_ANT: _this4.data.C_LT_ANT,
                C_RT_POST: _this4.data.C_RT_POST,
                C_LT_POST: _this4.data.C_LT_POST,
                C_RT_Cingulate: _this4.data.C_RT_Cingulate,
                C_LT_Cingulate: _this4.data.C_LT_Cingulate,
                D_RT_ANT: _this4.data.D_RT_ANT,
                D_LT_ANT: _this4.data.D_LT_ANT,
                D_RT_POST: _this4.data.D_RT_POST,
                D_LT_POST: _this4.data.D_LT_POST,
                MTA_RT: _this4.data.MTA_RT,
                MTA_LT: _this4.data.MTA_LT
=======
          var _this5 = this;

          this.afService.getStudyByReader(reader).subscribe(function (value) {
            if (value) {
              _this5.data = value;

              _this5.checkoutForm.setValue({
                reader: _this5.data.reader,
                study_date: _this5.data.date,
                hisnum: _this5.data.hisnum,
                accessnum: _this5.data.accessnum,
                A_RT_ANT: _this5.data.A_RT_ANT,
                A_LT_ANT: _this5.data.A_LT_ANT,
                A_RT_POST: _this5.data.A_RT_POST,
                A_LT_POST: _this5.data.A_LT_POST,
                B_RT_ANT: _this5.data.B_RT_ANT,
                B_LT_ANT: _this5.data.B_LT_ANT,
                B_RT_POST: _this5.data.B_RT_POST,
                B_LT_POST: _this5.data.B_LT_POST,
                B_RT_Cingulate: _this5.data.B_RT_Cingulate,
                B_LT_Cingulate: _this5.data.B_LT_Cingulate,
                C_RT_ANT: _this5.data.C_RT_ANT,
                C_LT_ANT: _this5.data.C_LT_ANT,
                C_RT_POST: _this5.data.C_RT_POST,
                C_LT_POST: _this5.data.C_LT_POST,
                C_RT_Cingulate: _this5.data.C_RT_Cingulate,
                C_LT_Cingulate: _this5.data.C_LT_Cingulate,
                D_RT_ANT: _this5.data.D_RT_ANT,
                D_LT_ANT: _this5.data.D_LT_ANT,
                D_RT_POST: _this5.data.D_RT_POST,
                D_LT_POST: _this5.data.D_LT_POST,
                MTA_RT: _this5.data.MTA_RT,
                MTA_LT: _this5.data.MTA_LT
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
              });
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var customerData = this.checkoutForm.value; // Process checkout data here

          customerData["A_subtotal"] = (Number(customerData.A_LT_ANT) + Number(customerData.A_RT_ANT) + Number(customerData.A_LT_POST) + Number(customerData.A_RT_POST)) * 1;
          customerData["B_subtotal"] = (Number(customerData.B_LT_ANT) + Number(customerData.B_RT_ANT) + Number(customerData.B_LT_POST) + Number(customerData.B_RT_POST) + Number(customerData.B_LT_Cingulate) + Number(customerData.B_RT_Cingulate)) * 2;
          customerData["C_subtotal"] = (Number(customerData.C_LT_ANT) + Number(customerData.C_RT_ANT) + Number(customerData.C_LT_POST) + Number(customerData.C_RT_POST) + Number(customerData.C_LT_Cingulate) + Number(customerData.C_RT_Cingulate)) * 3;
          customerData["D_subtotal"] = (Number(customerData.D_LT_ANT) + Number(customerData.D_RT_ANT) + Number(customerData.D_LT_POST) + Number(customerData.D_RT_POST)) * 4;
          customerData["CHIPS"] = customerData["A_subtotal"] + customerData["B_subtotal"] + customerData["C_subtotal"] + customerData["D_subtotal"];
          customerData["MTA"] = Number(customerData["MTA_RT"]) + Number(customerData["MTA_LT"]);
          var unixTimestamp = Date.parse(customerData.study_date); // convert datepicker data into unix timestamp and save on database

          var date = new Date(customerData.study_date);
          customerData["date"] = date.toISOString();
          customerData["study_date"] = unixTimestamp;
<<<<<<< HEAD
          var hxNumber = this.checkoutForm.value.hisnum;
          this.router.navigate(["study-detail/" + hxNumber]);
=======
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
          this.afService.add(customerData); // this.checkoutForm.reset();
        }
      }, {
        key: "delete",
        value: function _delete() {
<<<<<<< HEAD
          var _this5 = this;

          var hxNumber = this.checkoutForm.value.hisnum;
          var oldString = this.reader;
          var arr = oldString.split("/");
          arr.pop();
          var pushString = this.checkoutForm.value.accessnum + "_" + this.checkoutForm.value.reader;
          arr.push(pushString);
          var reader = arr.join("/");
          this.afService.getMRIbyHx(hxNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            console.log(data.length);

            if (data.length === 1) {
              _this5.router.navigate(["study-detail/" + hxNumber]);

              var route = "DEMENTIA/studies/" + hxNumber;
              console.log(route);

              _this5.afService.deleteByReader(route);
            } else {
              _this5.router.navigate(["study-detail/" + hxNumber]);

              var _route = "DEMENTIA/studies/" + reader;

              console.log(_route);

              _this5.afService.deleteByReader(_route);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          console.log("????Destroyed");
=======
          // console.log(this.reader)
          var oldString = this.reader;
          var arr = oldString.split('/');
          arr.pop();
          var pushString = this.checkoutForm.value.accessnum + '_' + this.checkoutForm.value.reader;
          arr.push(pushString);
          var reader = arr.join('/');
          var id = String(reader).substring(0, reader.indexOf('/'));
          console.log(id);
          this.router.navigate(["study-detail/" + id]);
          console.log(reader);
          this.afService.deleteByReader(reader);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
        }
      }]);

      return ChipsComponent;
    }();

    ChipsComponent.??fac = function ChipsComponent_Factory(t) {
<<<<<<< HEAD
      return new (t || ChipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
=======
      return new (t || ChipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    };

    ChipsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ChipsComponent,
      selectors: [["app-chips"]],
<<<<<<< HEAD
      decls: 251,
      vars: 14,
      consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayout.xs", "column"], ["appearance", "outline", "fxFlex", "23"], ["formControlName", "reader"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", ""], ["matInput", "", "placeholder", "\u6AA2\u67E5\u65E5\u671F", "formControlName", "study_date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "\u75C5\u4F8B\u865F", "formControlName", "hisnum"], ["matInput", "", "placeholder", "\u6AA2\u67E5\u55AE\u865F", "formControlName", "accessnum"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around none", "fxLayout.xs", "column"], [1, "example-card"], ["mat-card-image", "", "src", "../../assets/central_semiovale.png", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/centrum semiovale-diagram.png", "alt", "Photo of a Shiba Inu"], ["cols", "2", "rowHeight", "2:1"], ["appearance", "outline", "fxFill", ""], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "A_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "A_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "A_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "A_LT_POST"], ["mat-card-image", "", "src", "../../assets/corona_radiata.png", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/corona radiata-diagram.png", "alt", "Photo of a Shiba Inu"], [1, "test"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "B_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "B_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "B_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "B_LT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_Cingulate", "formControlName", "B_RT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_Cingulate", "formControlName", "B_LT_Cingulate"], ["mat-card-image", "", "src", "../../assets/high_external_capsule.png", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/high external capsule-diagram.png", "alt", "Photo of a Shiba Inu"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_Cingulate", "formControlName", "C_RT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_Cingular", "formControlName", "C_LT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "C_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "C_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "C_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "C_LT_POST"], ["mat-card-image", "", "src", "../../assets/low_external_capsule.png", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/low external capsule-diagram.png", "alt", "Photo of a Shiba Inu"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "D_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "D_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "D_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "D_LT_POST"], ["fxLayout", "row", "fxLayoutAlign", "space-around start", "fxLayout.xs", "column"], ["fxFlex", "50"], ["mat-card-image", "", "src", "../../assets/MTA.png", "width", "auto", 1, "test"], ["fxFlex", "40"], ["mat-card-image", "", "src", "../../assets/hippocampus.png", "width", "auto", 1, "test"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["appearance", "outline", "fxFlex", "40"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "MTA_RT", "formControlName", "MTA_RT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "MTA_LT", "formControlName", "MTA_LT"], [3, "value"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"]],
=======
      decls: 245,
      vars: 13,
      consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayout.xs", "column"], ["appearance", "outline", "fxFlex", "23"], ["formControlName", "reader"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", ""], ["matInput", "", "placeholder", "\u6AA2\u67E5\u65E5\u671F", "formControlName", "study_date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "\u75C5\u4F8B\u865F", "formControlName", "hisnum"], ["matInput", "", "placeholder", "\u6AA2\u67E5\u55AE\u865F", "formControlName", "accessnum"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around none", "fxLayout.xs", "column"], [1, "example-card"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/central_semiovale.png?alt=media&token=b1139333-a45f-4d90-9d77-7000f4e96eef", "alt", "Photo of a Shiba Inu"], ["cols", "2", "rowHeight", "2:1"], ["appearance", "outline", "fxFill", ""], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "A_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "A_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "A_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "A_LT_POST"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/corona_radiata.png?alt=media&token=c8319c85-87f7-4bd2-96ea-4e49d3ec7d7f", "alt", "Photo of a Shiba Inu"], [1, "test"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "B_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "B_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "B_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "B_LT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_Cingulate", "formControlName", "B_RT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_Cingulate", "formControlName", "B_LT_Cingulate"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/high_external_capsule.png?alt=media&token=321fc53a-03fe-4fbe-94e9-b0ef296b031d", "alt", "Photo of a Shiba Inu"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_Cingulate", "formControlName", "C_RT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_Cingular", "formControlName", "C_LT_Cingulate"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "C_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "C_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "C_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "C_LT_POST"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/low_external_capsule.png?alt=media&token=3c6c91d3-b612-4d23-bad0-bea30253fbbc", "alt", "Photo of a Shiba Inu"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_ANT", "formControlName", "D_RT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_ANT", "formControlName", "D_LT_ANT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "RT_POST", "formControlName", "D_RT_POST"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "LT_POST", "formControlName", "D_LT_POST"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/MTA.png?alt=media&token=5d9431d2-0f1b-4883-8e74-3a1db61212b2", "width", "auto", 1, "test"], ["mat-card-image", "", "src", "https://firebasestorage.googleapis.com/v0/b/radiology-8a1e7.appspot.com/o/hippocampus.png?alt=media&token=4e34f7f9-7312-4cd2-8ce7-6a3abdbdad7a", "width", "auto", 1, "test"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["appearance", "outline", "fxFlex", "40"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "MTA_RT", "formControlName", "MTA_RT"], ["type", "number", "pattern", "[0-9]*", "inputmode", "numeric", "matInput", "", "placeholder", "MTA_LT", "formControlName", "MTA_LT"], [3, "value"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"]],
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
      template: function ChipsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ChipsComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u57FA\u672C\u8CC7\u6599");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\u5224\u8B80\u8005");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ChipsComponent_mat_option_11_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "sentiment_very_satisfied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\u6AA2\u67E5\u65E5\u671F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "mat-datepicker-toggle", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-datepicker", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\u75C5\u4F8B\u865F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "sentiment_very_satisfied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\u6AA2\u67E5\u55AE\u865F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "sentiment_very_satisfied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ChipsComponent_button_35_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChipsComponent_Template_button_click_36_listener($event) {
            return ctx.openDialog("save");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " \u5132\u5B58\u8CC7\u6599 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-card-subtitle");

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "0: normal, 1: mild(less than 50% of region involved) and 2: moderate to severe(greater than 50% of region involved)");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "0: normal, 1: mild, and 2: moderate to severe");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Centrum Semiovale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 16);

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-grid-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-grid-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Corona Radiata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "mat-grid-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "mat-grid-tile", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Corona Radiata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "mat-grid-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "mat-grid-tile", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "RT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "RT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "LT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "LT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Upper External Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "mat-grid-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "RT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Upper External Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "mat-grid-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "RT_Cingulate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "LT_Cingular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "LT_Cingular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Low External Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "mat-grid-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Low External Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "mat-grid-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "RT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "LT_ANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](205, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "RT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "LT_POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229);
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Medial Temporal Atrophy Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "mat-card-content", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "MTA_RT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Medial Temporal Atrophy Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "mat-card-content", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "MTA_RT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](236, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "MTA_LT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "sentiment_very_satisfied");
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "MTA_LT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "sentiment_very_satisfied");
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.checkoutForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 12, ctx.interpreter$));
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, ctx.interpreter$));
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.reader);

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.checkoutForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("CHIPS: ", (ctx.checkoutForm.value.A_RT_ANT - 0 + (ctx.checkoutForm.value.A_LT_ANT - 0) + (ctx.checkoutForm.value.A_RT_POST - 0) + (ctx.checkoutForm.value.A_LT_POST - 0)) * 1 + (ctx.checkoutForm.value.B_RT_ANT - 0 + (ctx.checkoutForm.value.B_LT_ANT - 0) + (ctx.checkoutForm.value.B_RT_POST - 0) + (ctx.checkoutForm.value.B_LT_POST - 0) + (ctx.checkoutForm.value.B_RT_Cingulate - 0) + (ctx.checkoutForm.value.B_LT_Cingulate - 0)) * 2 + (ctx.checkoutForm.value.C_RT_ANT - 0 + (ctx.checkoutForm.value.C_LT_ANT - 0) + (ctx.checkoutForm.value.C_RT_POST - 0) + (ctx.checkoutForm.value.C_LT_POST - 0) + (ctx.checkoutForm.value.C_RT_Cingulate - 0) + (ctx.checkoutForm.value.C_LT_Cingulate - 0)) * 3 + (ctx.checkoutForm.value.D_RT_ANT - 0 + (ctx.checkoutForm.value.D_LT_ANT - 0) + (ctx.checkoutForm.value.D_RT_POST - 0) + (ctx.checkoutForm.value.D_LT_POST - 0)) * 4, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("A: ", (ctx.checkoutForm.value.A_RT_ANT - 0 + (ctx.checkoutForm.value.A_LT_ANT - 0) + (ctx.checkoutForm.value.A_RT_POST - 0) + (ctx.checkoutForm.value.A_LT_POST - 0)) * 1, "");

<<<<<<< HEAD
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("B: ", (ctx.checkoutForm.value.B_RT_ANT - 0 + (ctx.checkoutForm.value.B_LT_ANT - 0) + (ctx.checkoutForm.value.B_RT_POST - 0) + (ctx.checkoutForm.value.B_LT_POST - 0) + (ctx.checkoutForm.value.B_RT_Cingulate - 0) + (ctx.checkoutForm.value.B_LT_Cingulate - 0)) * 2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("C: ", (ctx.checkoutForm.value.C_RT_ANT - 0 + (ctx.checkoutForm.value.C_LT_ANT - 0) + (ctx.checkoutForm.value.C_RT_POST - 0) + (ctx.checkoutForm.value.C_LT_POST - 0) + (ctx.checkoutForm.value.C_RT_Cingulate - 0) + (ctx.checkoutForm.value.C_LT_Cingulate - 0)) * 3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("D: ", (ctx.checkoutForm.value.D_RT_ANT - 0 + (ctx.checkoutForm.value.D_LT_ANT - 0) + (ctx.checkoutForm.value.D_RT_POST - 0) + (ctx.checkoutForm.value.D_LT_POST - 0)) * 4, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);
=======
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("B: ", (ctx.checkoutForm.value.B_RT_ANT - 0 + (ctx.checkoutForm.value.B_LT_ANT - 0) + (ctx.checkoutForm.value.B_RT_POST - 0) + (ctx.checkoutForm.value.B_LT_POST - 0) + (ctx.checkoutForm.value.B_RT_Cingulate - 0) + (ctx.checkoutForm.value.B_LT_Cingulate - 0)) * 2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("C: ", (ctx.checkoutForm.value.C_RT_ANT - 0 + (ctx.checkoutForm.value.C_LT_ANT - 0) + (ctx.checkoutForm.value.C_RT_POST - 0) + (ctx.checkoutForm.value.C_LT_POST - 0) + (ctx.checkoutForm.value.C_RT_Cingulate - 0) + (ctx.checkoutForm.value.C_LT_Cingulate - 0)) * 3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("D: ", (ctx.checkoutForm.value.D_RT_ANT - 0 + (ctx.checkoutForm.value.D_LT_ANT - 0) + (ctx.checkoutForm.value.D_RT_POST - 0) + (ctx.checkoutForm.value.D_LT_POST - 0)) * 4, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("MTA: ", ctx.checkoutForm.value.MTA_RT - 0 + (ctx.checkoutForm.value.MTA_LT - 0), "");
        }
      },
<<<<<<< HEAD
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridTile"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
=======
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTile"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n\n\n\n\n\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpcHMvY2hpcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0dBR0c7O0FBRUg7OztHQUdHOztBQUVIOzs7Ozs7Ozs7R0FTRzs7QUFHSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2hpcHMvY2hpcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIC5tYXQtY2FyZC1pbWFnZSAge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDMwMHB4O1xufSAqL1xuXG4vKiAudGVzdCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufSAqL1xuXG4vKiAuY29udGFpbmVyXzIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufSAqL1xuXG5cbi8qIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0gKi9cblxubWF0LWNhcmQge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chips",
          templateUrl: "./chips.component.html",
          styleUrls: ["./chips.component.css"]
        }]
      }], function () {
        return [{
<<<<<<< HEAD
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
=======
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
        }];
      }, null);
    })();

    var ChipsDialog =
    /*#__PURE__*/
    function () {
      function ChipsDialog(data, dialogRef) {
        _classCallCheck(this, ChipsDialog);

        this.data = data;
        this.dialogRef = dialogRef;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ChipsDialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close("cancel");
        }
      }]);

      return ChipsDialog;
    }();

    ChipsDialog.??fac = function ChipsDialog_Factory(t) {
<<<<<<< HEAD
      return new (t || ChipsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
=======
      return new (t || ChipsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    };

    ChipsDialog.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ChipsDialog,
      selectors: [["chips-dialog"]],
      outputs: {
        save: "save"
      },
      decls: 8,
      vars: 3,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close"]],
      template: function ChipsDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-actions", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChipsDialog_button_4_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChipsDialog_button_5_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChipsDialog_Template_button_click_6_listener($event) {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Are you sure to ", ctx.data.action, " this study?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data.action == "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data.action == "delete");
        }
      },
<<<<<<< HEAD
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
=======
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChipsDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "chips-dialog",
          templateUrl: "chips-dialog.html"
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
<<<<<<< HEAD
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
=======
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
        }];
      }, {
        save: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent, DialogContentExampleDialog */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function () {
      return DialogContentExampleDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../firebase.service */
    "./src/app/firebase.service.ts");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(dialog) {
        _classCallCheck(this, DialogComponent);

        this.dialog = dialog;
      }

      _createClass(DialogComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(DialogContentExampleDialog);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.??fac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    DialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 2,
      vars: 0,
      consts: [["mat-button", "", 3, "click"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogComponent_Template_button_click_0_listener($event) {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Open dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();

    var DialogContentExampleDialog =
    /*#__PURE__*/
    function () {
      function DialogContentExampleDialog(afService) {
        _classCallCheck(this, DialogContentExampleDialog);

        this.afService = afService;
      }

      _createClass(DialogContentExampleDialog, [{
        key: "delete",
        value: function _delete() {
          console.log('detel');
        }
      }]);

      return DialogContentExampleDialog;
    }();

    DialogContentExampleDialog.??fac = function DialogContentExampleDialog_Factory(t) {
      return new (t || DialogContentExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]));
    };

    DialogContentExampleDialog.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DialogContentExampleDialog,
      selectors: [["dialog-content-example-dialog"]],
      decls: 8,
      vars: 1,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function DialogContentExampleDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Are you sure to delete this study?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-actions", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogContentExampleDialog_Template_button_click_4_listener($event) {
            return ctx.delete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Install");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dialog-content-example-dialog',
          templateUrl: 'dialog-content-example-dialog.html'
        }]
      }], function () {
        return [{
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/firebase.service.ts":
  /*!*************************************!*\
    !*** ./src/app/firebase.service.ts ***!
    \*************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js"); // import { AngularFireAuth } from '@angular/fire/auth';
    // import * as firebase from 'firebase-admin';
    // import * as serviceAccount from '../serviceAccountKey.json';


    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(router, db, dbr) {
        _classCallCheck(this, FirebaseService);

        this.router = router;
        this.db = db;
        this.dbr = dbr;
      }

      _createClass(FirebaseService, [{
        key: "add",
        value: function add(data) {
          var addTime = Date.now(); //
          // data.updateTime = addTime;

          this.dbr.object('DEMENTIA/studies/' + data.hisnum + '/MRI/' + data.accessnum + '_' + data.reader) // this.dbr.object('studies/' + data.hisnum + '/MRI/' + data.accessnum + '_' + data.reader)
          .set(data).then(function () {
            return console.log("Add new record OK");
          }).catch(function (err) {
            return console.log(err);
          });
          this.dbr.object('DEMENTIA/studies/' + data.hisnum + '/updateTime') // this.dbr.object('studies/' + data.hisnum + '/updateTime')
          .set(addTime).then(function () {
            return console.log("Renew updateTime!");
          }).catch(function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "deleteByReader",
<<<<<<< HEAD
        value: function deleteByReader(route) {
          return this.dbr.object(route) // return this.dbr.object('studies/' + reader)
=======
        value: function deleteByReader(reader) {
          return this.dbr.object('DEMENTIA/studies/' + reader) // return this.dbr.object('studies/' + reader)
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
          .remove().then(function () {
            return console.log("delete OK");
          }).catch(function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.dbr.object('DEMENTIA/studies/' + id) // return this.dbr.object('studies/' + id)
          .update(data).then(function () {
            return console.log("update OK");
          }).catch(function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "getInterpreter",
        value: function getInterpreter() {
          return this.dbr.object('DEMENTIA/interpreter') // return this.dbr.object('interpreter')
          .valueChanges();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.dbr.list('DEMENTIA/studies') // return this.dbr.list('studies')
          .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (docArray) {
            return docArray.map(function (doc) {
              return Object.assign({
                id: doc.key
              }, doc.payload.val());
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        }
      }, {
        key: "getStudyByReader",
        value: function getStudyByReader(reader) {
          return this.dbr.object('DEMENTIA/studies/' + reader) // return this.dbr.object('studies/' + reader)
          .valueChanges();
        }
      }, {
        key: "getMRIbyHx",
        value: function getMRIbyHx(HxNum) {
          return this.dbr.list('DEMENTIA/studies/' + HxNum + '/MRI') // return this.dbr.list('studies/' + HxNum + '/MRI')
          .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (docArray) {
            return docArray.map(function (doc) {
              return Object.assign({
                id: doc.key
              }, doc.payload.val());
            });
          }));
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.??fac = function FirebaseService_Factory(t) {
      return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
    };

    FirebaseService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: FirebaseService,
      factory: FirebaseService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient-detail/patient-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/patient-detail/patient-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: PatientDetailComponent */

  /***/
  function srcAppPatientDetailPatientDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDetailComponent", function () {
      return PatientDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientDetailComponent =
    /*#__PURE__*/
    function () {
      function PatientDetailComponent() {
        _classCallCheck(this, PatientDetailComponent);
      }

      _createClass(PatientDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientDetailComponent;
    }();

    PatientDetailComponent.??fac = function PatientDetailComponent_Factory(t) {
      return new (t || PatientDetailComponent)();
    };

    PatientDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PatientDetailComponent,
      selectors: [["app-patient-detail"]],
      decls: 2,
      vars: 0,
      template: function PatientDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "patient-detail works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtZGV0YWlsL3BhdGllbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PatientDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-detail',
          templateUrl: './patient-detail.component.html',
          styleUrls: ['./patient-detail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient-list/patient-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/patient-list/patient-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PatientListComponent */

  /***/
  function srcAppPatientListPatientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListComponent", function () {
      return PatientListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../firebase.service */
    "./src/app/firebase.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PatientListComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u75C5\u4F8B\u865F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function PatientListComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var row_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r34 == null ? null : row_r34.id, " ");
      }
    }

    function PatientListComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u66F4\u65B0\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function PatientListComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var row_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, row_r35 == null ? null : row_r35.updateTime, "yyyy/MM/dd:hh:mm:ss aa"), " ");
      }
    }

    function PatientListComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " MRI ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/study-detail", a1];
    };

    function PatientListComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "account_balance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var row_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, row_r36 == null ? null : row_r36.id));
      }
    }

    function PatientListComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 17);
      }
    }

    function PatientListComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 18);
      }
    }

    function PatientListComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("No data matching the filter \"", _r24.value, "\"");
      }
    }

    var _c1 = function _c1() {
      return [50, 100];
    };

    var PatientListComponent =
    /*#__PURE__*/
    function () {
      function PatientListComponent(afService) {
        _classCallCheck(this, PatientListComponent);

        this.afService = afService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.displayedColumns = ["Hx", "time", "MRI"];
      }

      _createClass(PatientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.afService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            _this6.subject$.next(data); // this.dataSource = data;
            // console.log(data);

          });
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (customers) {
            console.log(customers);
            _this6.dataSource.data = customers;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          console.log("????Destroyed");
        }
      }]);

      return PatientListComponent;
    }();

    PatientListComponent.??fac = function PatientListComponent_Factory(t) {
      return new (t || PatientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]));
    };

    PatientListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PatientListComponent,
      selectors: [["app-patient-list"]],
      viewQuery: function PatientListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 20,
      vars: 6,
      consts: [["appearance", "standard"], ["matInput", "", "placeholder", "\u8ACB\u8F38\u5165\u67E5\u8A62\u8CC7\u6599", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Hx"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "time"], ["matColumnDef", "MRI"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
      template: function PatientListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u67E5\u8A62");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function PatientListComponent_Template_input_keyup_3_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, PatientListComponent_th_8_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PatientListComponent_td_9_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, PatientListComponent_th_11_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PatientListComponent_td_12_Template, 3, 4, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PatientListComponent_th_14_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PatientListComponent_td_15_Template, 4, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, PatientListComponent_tr_16_Template, 1, 0, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, PatientListComponent_tr_17_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PatientListComponent_tr_18_Template, 3, 1, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "mat-paginator", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1))("pageSize", 50);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1saXN0L3BhdGllbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC1saXN0L3BhdGllbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PatientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-patient-list",
          templateUrl: "./patient-list.component.html",
          styleUrls: ["./patient-list.component.css"]
        }]
      }], function () {
        return [{
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/study-detail/study-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/study-detail/study-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: StudyDetailComponent */

  /***/
  function srcAppStudyDetailStudyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudyDetailComponent", function () {
      return StudyDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../firebase.service */
    "./src/app/firebase.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudyDetailComponent_mat_grid_tile_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-grid-tile", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var tile_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleSanitizer"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", tile_r10.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("colspan", tile_r10.cols)("rowspan", tile_r10.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tile_r10.text, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/study-edit", a1];
    };

    function StudyDetailComponent_div_6_mat_grid_tile_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, item_r12[item_r12.length - 1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r12[i_r15], " ");
      }
    }

    function StudyDetailComponent_div_6_mat_grid_tile_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
      }

      if (rf & 2) {
        var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r12[i_r15], " ");
      }
    }

    function StudyDetailComponent_div_6_mat_grid_tile_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-grid-tile", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, StudyDetailComponent_div_6_mat_grid_tile_2_ng_container_1_Template, 3, 4, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, StudyDetailComponent_div_6_mat_grid_tile_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var tile_r14 = ctx.$implicit;
        var i_r15 = ctx.index;

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleSanitizer"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", tile_r14.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("colspan", tile_r14.cols)("rowspan", tile_r14.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.readers.includes(item_r12[i_r15]))("ngIfElse", _r17);
      }
    }

    function StudyDetailComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-grid-list", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, StudyDetailComponent_div_6_mat_grid_tile_2_Template, 4, 5, "mat-grid-tile", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r9.data);
      }
    }

    var StudyDetailComponent =
    /*#__PURE__*/
    function () {
      function StudyDetailComponent(route, afService) {
        _classCallCheck(this, StudyDetailComponent);

        this.route = route;
        this.afService = afService;
        this.items = [];
        this.tiles = [{
          text: '',
          cols: 2,
          rows: 2,
          color: 'white'
        }, {
          text: 'A',
          cols: 2,
          rows: 1,
          color: '#0288ee'
        }, {
          text: 'B',
          cols: 2,
          rows: 1,
          color: '#0288ee'
        }, {
          text: 'C',
          cols: 2,
          rows: 1,
          color: '#0288ee'
        }, {
          text: 'D',
          cols: 2,
          rows: 1,
          color: '#0288ee'
        }, {
          text: 'MTA',
          cols: 2,
          rows: 1,
          color: '#0288ee'
        }, {
          text: 'R',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'L',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'R',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'L',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'R',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'L',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'R',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'L',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'R',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'L',
          cols: 1,
          rows: 1,
          color: '#36a5fd'
        }];
        this.data = [{
          text: 'reader',
          cols: 2,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'C',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'C',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'M',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'M',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'CHIPS',
          cols: 2,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'C',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'C',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'MTA',
          cols: 2,
          rows: 1,
          color: '#36a5fd'
        }, {
          text: 'rating',
          cols: 2,
          rows: 1,
          color: '#ee0288'
        }, {
          text: 'A',
          cols: 2,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'A',
          cols: 1,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'C',
          cols: 2,
          rows: 1,
          color: '#e3f2fe'
        }, {
          text: 'rating',
          cols: 2,
          rows: 1,
          color: '#ee0288'
        }];
      }

      _createClass(StudyDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.subscribe(function (params) {
            _this7.hisnum = params.get("Id");

            _this7.getStudy(_this7.hisnum);
          });
          this.readers = this.afService.readers;
        }
      }, {
        key: "getStudy",
        value: function getStudy(HxNum) {
          var _this8 = this;

          this.afService.getMRIbyHx(HxNum).subscribe(function (data) {
            var newdata = [];
            data.forEach(function (value, index) {
              // console.log(data);
              newdata.push(_this8.reArrangeData(value));
            });
            _this8.items = newdata;
          });
        }
      }, {
        key: "reArrangeData",
        value: function reArrangeData(value) {
          var arr = [];
          arr.push(value.reader);
          arr.push(value.A_RT_ANT);
          arr.push(value.A_LT_ANT);
          arr.push(value.B_RT_ANT);
          arr.push(value.B_LT_ANT);
          arr.push(value.C_RT_Cingulate);
          arr.push(value.C_LT_Cingulate);
          arr.push(value.D_RT_ANT);
          arr.push(value.D_LT_ANT);
          arr.push(value.MTA_RT);
          arr.push(value.MTA_LT);
          arr.push('CHIPS');
          arr.push(value.A_RT_POST);
          arr.push(value.A_LT_POST);
          arr.push(value.B_RT_POST);
          arr.push(value.B_LT_POST);
          arr.push(value.C_RT_ANT);
          arr.push(value.C_LT_ANT);
          arr.push(value.D_RT_POST);
          arr.push(value.D_LT_POST);
          arr.push('MTA');
          arr.push(value.CHIPS);
          arr.push('');
          arr.push(value.B_RT_Cingulate);
          arr.push(value.B_LT_Cingulate);
          arr.push(value.C_RT_POST);
          arr.push(value.C_LT_POST);
          arr.push('');
          arr.push(value.MTA);
          arr.push(value.hisnum + '/MRI/' + value.id);
          return arr;
        }
      }]);

      return StudyDetailComponent;
    }();

    StudyDetailComponent.??fac = function StudyDetailComponent_Factory(t) {
      return new (t || StudyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]));
    };

    StudyDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StudyDetailComponent,
      selectors: [["app-study-detail"]],
      decls: 7,
      vars: 3,
      consts: [["cols", "12", "rowHeight", "30px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], ["cols", "12", "rowHeight", "25px"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "routerLink"]],
      template: function StudyDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-grid-tile-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, StudyDetailComponent_mat_grid_tile_5_Template, 2, 4, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, StudyDetailComponent_div_6_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u75C5\u4F8B\u865F\uFF1A", ctx.hisnum, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".test[_ngcontent-%COMP%] {\n    background: lightblue;\n  }\n\n  a[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: white;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHktZGV0YWlsL3N0dWR5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdHVkeS1kZXRhaWwvc3R1ZHktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StudyDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-study-detail',
          templateUrl: './study-detail.component.html',
          styleUrls: ['./study-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/study-edit/study-edit.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/study-edit/study-edit.component.ts ***!
    \****************************************************/

  /*! exports provided: StudyEditComponent */

  /***/
  function srcAppStudyEditStudyEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudyEditComponent", function () {
      return StudyEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StudyEditComponent =
    /*#__PURE__*/
    function () {
      function StudyEditComponent() {
        _classCallCheck(this, StudyEditComponent);
      }

      _createClass(StudyEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudyEditComponent;
    }();

    StudyEditComponent.??fac = function StudyEditComponent_Factory(t) {
      return new (t || StudyEditComponent)();
    };

    StudyEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StudyEditComponent,
      selectors: [["app-study-edit"]],
      decls: 2,
      vars: 0,
      template: function StudyEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "study-edit works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWVkaXQvc3R1ZHktZWRpdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StudyEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-study-edit',
          templateUrl: './study-edit.component.html',
          styleUrls: ['./study-edit.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");

    var _c0 = function _c0() {
<<<<<<< HEAD
      return ["/new"];
=======
      return ["/"];
>>>>>>> f5a02c9c53ad47d0ce0fe44db45494d97d7213bb
    };

    var _c1 = function _c1() {
      return ["/patient-list"];
    };

    var TopBarComponent =
    /*#__PURE__*/
    function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.??fac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 7,
      vars: 4,
      consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], [3, "routerLink"], ["mat-raised-button", "", "color", "primary"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u65B0\u589E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u6E05\u55AE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background-color:#0288ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjg4ZWU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAdZYElWsfO2YO4MJt7OzePbXZsPSo3pig",
        authDomain: "radiology-8a1e7.firebaseapp.com",
        databaseURL: "https://radiology-8a1e7.firebaseio.com",
        projectId: "radiology-8a1e7",
        storageBucket: "radiology-8a1e7.appspot.com",
        messagingSenderId: "968552037684",
        appId: "1:968552037684:web:47ccc9bbef3598eaa7b961",
        measurementId: "G-P5KT61D9SS"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\cheng\Documents\coding\NG-V9\chips\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map