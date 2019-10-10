(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='column'>\r\n  <app-nav-bar></app-nav-bar>\r\n  <div class=\"mainContainer\" fxLayout='row' fxLayoutGap='15px' fxLayoutGap.lt-md='0'>\r\n    <div class=\"main\" fxFlex>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"sidebar\" fxFlex fxHide.lt-md>\r\n      <router-outlet name=\"sidebar\"></router-outlet>\r\n    </div>\r\n  </div>\r\n  <!-- <app-footer-bar></app-footer-bar> -->\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 4vh;\n  min-height: 60px !important;\n  color: primary; }\n\n.mainContainer {\n  height: 90vh; }\n\n.main {\n  min-width: 300px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px; }\n\n.sidebar {\n  min-width: 300px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _markers_add_marker_add_marker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./markers/add-marker/add-marker.component */ "./src/app/markers/add-marker/add-marker.component.ts");
/* harmony import */ var _markers_marker_item_marker_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./markers/marker-item/marker-item.component */ "./src/app/markers/marker-item/marker-item.component.ts");
/* harmony import */ var _markers_marker_list_marker_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./markers/marker-list/marker-list.component */ "./src/app/markers/marker-list/marker-list.component.ts");
/* harmony import */ var _markers_marker_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./markers/marker.service */ "./src/app/markers/marker.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/footer-bar/footer-bar.component */ "./src/app/shared/footer-bar/footer-bar.component.ts");
/* harmony import */ var _shared_intro_intro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/intro/intro.component */ "./src/app/shared/intro/intro.component.ts");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "./src/app/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3___default.a);
var appRoutes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    },
    {
        path: "markers",
        component: _markers_marker_list_marker_list_component__WEBPACK_IMPORTED_MODULE_16__["MarkerListComponent"]
    },
    {
        path: "markers/:id",
        component: _markers_marker_item_marker_item_component__WEBPACK_IMPORTED_MODULE_15__["MarkerItemComponent"]
    },
    {
        path: "settings",
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"]
    },
    {
        path: "showmarker/:id",
        component: _markers_marker_item_marker_item_component__WEBPACK_IMPORTED_MODULE_15__["MarkerItemComponent"],
        outlet: "sidebar"
    },
    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _markers_marker_list_marker_list_component__WEBPACK_IMPORTED_MODULE_16__["MarkerListComponent"],
                _markers_marker_item_marker_item_component__WEBPACK_IMPORTED_MODULE_15__["MarkerItemComponent"],
                _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__["NavBarComponent"],
                _shared_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_19__["FooterBarComponent"],
                _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                _markers_add_marker_add_marker_component__WEBPACK_IMPORTED_MODULE_14__["AddMarkerComponent"],
                _shared_intro_intro_component__WEBPACK_IMPORTED_MODULE_20__["IntroComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["Ng2Webstorage"],
                _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleApiKey
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_9__["AgmDirectionModule"]
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: "de-DE" }, _markers_marker_service__WEBPACK_IMPORTED_MODULE_17__["MarkerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-marker-list></app-marker-list>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/markers/add-marker/add-marker.component.html":
/*!**************************************************************!*\
  !*** ./src/app/markers/add-marker/add-marker.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-marker works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/markers/add-marker/add-marker.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/markers/add-marker/add-marker.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/markers/add-marker/add-marker.component.ts":
/*!************************************************************!*\
  !*** ./src/app/markers/add-marker/add-marker.component.ts ***!
  \************************************************************/
/*! exports provided: AddMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarkerComponent", function() { return AddMarkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddMarkerComponent = /** @class */ (function () {
    function AddMarkerComponent() {
    }
    AddMarkerComponent.prototype.ngOnInit = function () {
    };
    AddMarkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-marker',
            template: __webpack_require__(/*! ./add-marker.component.html */ "./src/app/markers/add-marker/add-marker.component.html"),
            styles: [__webpack_require__(/*! ./add-marker.component.scss */ "./src/app/markers/add-marker/add-marker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMarkerComponent);
    return AddMarkerComponent;
}());



/***/ }),

/***/ "./src/app/markers/marker-item/marker-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/markers/marker-item/marker-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n\r\n  <!-- Marker-Card -->\r\n\r\n  <mat-card class=\"card\">\r\n    <mat-card-header fxLayout=\"row\">\r\n      <!-- Title & Subtitle -->\r\n      <mat-card-title-group>\r\n        <mat-card-title *ngIf=\"!editMode\">{{marker.lable}}</mat-card-title>\r\n        <mat-card-title *ngIf=\"editMode\">\r\n          <mat-form-field class=\"form-container\" form-field>\r\n            <input matInput placeholder=\"Label\" [(ngModel)]=\"marker.lable\">\r\n          </mat-form-field>\r\n        </mat-card-title>\r\n        <mat-card-subtitle *ngIf=\"!editMode\" [innerText]='getMarkerType(marker.type)'></mat-card-subtitle>\r\n        <mat-card-subtitle *ngIf=\"editMode\">\r\n          <mat-label>Type</mat-label>\r\n          <mat-select [(value)]=\"marker.type\">\r\n            <mat-option [value]=0>Unclassified</mat-option>\r\n            <mat-option [value]=1>Beeren</mat-option>\r\n            <mat-option [value]=2>Holler</mat-option>\r\n            <mat-option [value]=3>Schwammerl</mat-option>\r\n          </mat-select>\r\n        </mat-card-subtitle>\r\n      </mat-card-title-group>\r\n    </mat-card-header>\r\n    <mat-divider class=\"bMargin\"></mat-divider>\r\n    <mat-card-content class=\"card\">\r\n      <!-- Image -->\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"15px\">\r\n        <img class=\"imgMain\" [src]=\"marker.imgURL\" [style.height.px]=\"imgHeight\" />\r\n        <button mat-mini-fab (click)=\"takePicture()\" *ngIf=\"editMode\">\r\n          <mat-icon>camera_enhance</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <!-- Remark -->\r\n\r\n  <mat-card class=\"card\">\r\n    <mat-card-content>\r\n      <mat-card-subtitle>Anmerkung</mat-card-subtitle>\r\n      <div *ngIf=\"!editMode\">{{marker.remark}}</div>\r\n      <div *ngIf=\"editMode\" class=\"form-container\">\r\n        <textarea matInput rows=\"3\" [(ngModel)]=\"marker.remark\"></textarea>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <!-- Map -->\r\n\r\n  <mat-card class=\"card\">\r\n    <mat-card-content>\r\n      <mat-card-title-group fxLayout=\"row nowrap\" fxLayoutAlign=\"center center\" fxLayoutGap='20px' class=\"bMargin\">\r\n\r\n        <div *ngIf=\"marker.hasCoords\" fxFlex=\"2 1 70%\" fxLayout=\"row nowrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"1rem\" fxLayoutGap.lt-sm=\"0.5rem\"\r\n          class=\"leftCell\">\r\n          <span>Position:</span>\r\n          <span>Long: {{marker.lng}}</span>\r\n          <span>Lat: {{marker.lat}}</span>\r\n        </div>\r\n\r\n        <div class=\"rightCell\" fxFlex=\"1 1 30%\">\r\n          <button mat-mini-fab (click)=\"setMarkerLocation()\" *ngIf=\"editMode\">\r\n            <mat-icon>not_listed_location</mat-icon>\r\n          </button>\r\n        </div>\r\n      </mat-card-title-group>\r\n\r\n      <agm-map *ngIf=\"marker.hasCoords && editMode==false\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\">\r\n        <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\"></agm-marker>\r\n        <agm-direction *ngIf=\"showDirections\" [origin]=\"directions.origin\" [destination]=\"directions.destination\"></agm-direction>\r\n      </agm-map>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <!-- Weather -->\r\n\r\n  <mat-card *ngIf=\"showWeather && marker.hasCoords && !editMode\" class=\"card\">\r\n    <div style=\"background-image: url('/assets/images/wetter.png'); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 100%; height: 100px;\"></div>\r\n  </mat-card>\r\n\r\n  <!-- Commands -->\r\n\r\n  <mat-card class=\"card\">\r\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap='20px'>\r\n\r\n      <mat-slide-toggle *ngIf=\"marker.hasCoords && !editMode\" [(ngModel)]=\"showWeather\">Show Weather</mat-slide-toggle>\r\n      <button mat-mini-fab (click)=\"navigateTo()\" *ngIf=\"marker.hasCoords && !editMode\">\r\n        <mat-icon>navigation</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab (click)=\"shareMarker()\" *ngIf=\"!editMode\">\r\n        <mat-icon>share</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab (click)=\"toggleEdit()\" *ngIf=\"!editMode\">\r\n        <mat-icon>edit</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab (click)=\"saveMarker()\" *ngIf=\"editMode\">\r\n        <mat-icon>save</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab (click)=\"saveMarker()\" *ngIf=\"editMode\">\r\n        <mat-icon>cancel</mat-icon>\r\n      </button>\r\n    </mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "./src/app/markers/marker-item/marker-item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/markers/marker-item/marker-item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 250px; }\n\n.mat-card-header-text {\n  margin: 0; }\n\ntextarea {\n  border-style: dotted;\n  border-width: 1px;\n  border-color: #6d4c41; }\n\n.form-container {\n  display: flex;\n  flex-direction: column; }\n\n.form-container > * {\n  width: 100%; }\n\n.imgMain {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n\n.bMargin {\n  margin-bottom: 20px; }\n\n.leftCell {\n  text-align: left; }\n\n.rightCell {\n  text-align: right;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/markers/marker-item/marker-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/markers/marker-item/marker-item.component.ts ***!
  \**************************************************************/
/*! exports provided: MarkerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerItemComponent", function() { return MarkerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-cordova/plugin/geolocation */ "./node_modules/angular-cordova/plugin/geolocation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marker.service */ "./src/app/markers/marker.service.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model.ts");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/consts */ "./src/app/shared/consts.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MarkerItemComponent = /** @class */ (function () {
    function MarkerItemComponent(route, ms, geolocationService, media) {
        this.route = route;
        this.ms = ms;
        this.geolocationService = geolocationService;
        this.media = media;
        this.marker = null;
        this.editMode = false;
        this.showDirections = false;
        this.showWeather = false;
        this.getGeoSubs = null;
        this.mediaSubs = null;
        this.directions = {
            origin: { lat: 0, lng: 0 },
            destination: { lat: 0, lng: 0 }
        };
    }
    MarkerItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMarker();
        this.media.subscribe(function (change) {
            _this.imgHeight = change.mqAlias == "xs" ? 100 : 250;
        });
        this.getCurrentPosition();
    };
    MarkerItemComponent.prototype.ngOnDestroy = function () {
        if (this.getGeoSubs != null)
            this.getGeoSubs.unsubscribe();
        if (this.mediaSubs != null)
            this.mediaSubs.unsubscribe();
    };
    MarkerItemComponent.prototype.getMarkerType = function (type) {
        return _shared_model__WEBPACK_IMPORTED_MODULE_4__["markerType"][type];
    };
    //Edit Mode
    MarkerItemComponent.prototype.toggleEdit = function () {
        this.editMode = !this.editMode;
    };
    //Marker CRUD
    MarkerItemComponent.prototype.getMarker = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"] == null ? 1000 : +params["id"];
            _this.ms.getMarker(id).subscribe(function (m) {
                if (m != null) {
                    _this.marker = __assign({}, m);
                }
                else {
                    _this.marker = _this.getNewMarker();
                    _this.editMode = true;
                }
                _this.setMarkerAsDestination(_this.marker.lat, _this.marker.lng);
            });
        });
    };
    MarkerItemComponent.prototype.getNewMarker = function () {
        var _this = this;
        var marker = new _shared_model__WEBPACK_IMPORTED_MODULE_4__["Marker"]();
        marker.imgURL = _shared_consts__WEBPACK_IMPORTED_MODULE_5__["BLANK_MARKER"];
        marker.type = 0;
        this.getGeoSubs = this.geolocationService
            .getCurrentPosition()
            .subscribe(function (res) {
            _this.copyCoordsToMarker(_this.marker, res.coords.latitude, res.coords.longitude);
        });
        return marker;
    };
    MarkerItemComponent.prototype.saveMarker = function () {
        this.ms.saveMarker(this.marker);
        this.toggleEdit();
    };
    //Marker GPS
    MarkerItemComponent.prototype.setMarkerAsDestination = function (lat, lng) {
        if (lat != 0 && lng != 0) {
            this.directions.destination.lat = lat;
            this.directions.destination.lng = lng;
            this.marker.hasCoords = true;
        }
    };
    MarkerItemComponent.prototype.copyCoordsToMarker = function (marker, lat, lng) {
        marker.lat = lat;
        marker.lng = lng;
        marker.hasCoords = true;
    };
    MarkerItemComponent.prototype.setMarkerLocation = function () {
        var _this = this;
        this.getGeoSubs = this.geolocationService
            .getCurrentPosition()
            .subscribe(function (res) {
            _this.copyCoordsToMarker(_this.marker, res.coords.latitude, res.coords.longitude);
        });
    };
    MarkerItemComponent.prototype.navigateTo = function () {
        this.directions.destination.lat = this.marker.lat;
        this.directions.destination.lng = this.marker.lng;
        this.showDirections = true;
    };
    MarkerItemComponent.prototype.getCurrentPosition = function () {
        var _this = this;
        this.getGeoSubs = this.geolocationService
            .getCurrentPosition()
            .subscribe(function (res) {
            _this.directions.origin.lat = res.coords.latitude;
            _this.directions.origin.lng = res.coords.longitude;
        });
    };
    //Camera
    MarkerItemComponent.prototype.takePicture = function () {
        var m = this.marker;
        // var si = this.safeImg;
        // var san = this.sanitization;
        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: 0,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true
        };
        navigator.camera.getPicture(function cameraSuccess(imageUri) {
            // You may choose to copy the picture, save it somewhere, or upload.
            m.imgURL = imageUri;
            // si = san.bypassSecurityTrustStyle(`url(${m.imgURL})`);
        }, function cameraError(error) {
            console.debug("Unable to obtain picture: " + error, "app");
        }, options);
    };
    //Sharing
    MarkerItemComponent.prototype.shareMarker = function () { };
    MarkerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-marker-item",
            template: __webpack_require__(/*! ./marker-item.component.html */ "./src/app/markers/marker-item/marker-item.component.html"),
            styles: [__webpack_require__(/*! ./marker-item.component.scss */ "./src/app/markers/marker-item/marker-item.component.scss")],
            providers: [angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_1__["GeolocationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"],
            angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_1__["GeolocationService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["ObservableMedia"]])
    ], MarkerItemComponent);
    return MarkerItemComponent;
}());



/***/ }),

/***/ "./src/app/markers/marker-list/marker-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/markers/marker-list/marker-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='column'>\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let m of markers\" class=\"mat-card mat-bottom\">\r\n      <img mat-list-avatar [src]=\"m.imgURL\" />\r\n      <h4 mat-line>{{m.lable}}</h4>\r\n      <h6 mat-line> {{getMarkerType(m.type)}}</h6>\r\n      <button mat-mini-fab (click)=\"deleteMarker(m)\">\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab (click)=\"showMarker(m)\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>"

/***/ }),

/***/ "./src/app/markers/marker-list/marker-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/markers/marker-list/marker-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-divider {\n  margin: 5px 0; }\n\nbutton {\n  margin: 0 10px; }\n\n.mat-icon {\n  cursor: pointer; }\n\n.mat-bottom {\n  margin-bottom: 20px !important; }\n"

/***/ }),

/***/ "./src/app/markers/marker-list/marker-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/markers/marker-list/marker-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MarkerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerListComponent", function() { return MarkerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model.ts");
/* harmony import */ var _marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marker.service */ "./src/app/markers/marker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkerListComponent = /** @class */ (function () {
    function MarkerListComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.markers = null;
    }
    MarkerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getMarkers().subscribe(function (data) { return (_this.markers = data); });
    };
    MarkerListComponent.prototype.getMarkerType = function (type) {
        return _shared_model__WEBPACK_IMPORTED_MODULE_2__["markerType"][type];
    };
    MarkerListComponent.prototype.showMarker = function (m) {
        this.ms.showMarker(m.id);
    };
    MarkerListComponent.prototype.deleteMarker = function (m) {
        this.ms.removeMarker(m);
    };
    MarkerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-marker-list",
            template: __webpack_require__(/*! ./marker-list.component.html */ "./src/app/markers/marker-list/marker-list.component.html"),
            styles: [__webpack_require__(/*! ./marker-list.component.scss */ "./src/app/markers/marker-list/marker-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MarkerListComponent);
    return MarkerListComponent;
}());



/***/ }),

/***/ "./src/app/markers/marker.service.ts":
/*!*******************************************!*\
  !*** ./src/app/markers/marker.service.ts ***!
  \*******************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarkerService = /** @class */ (function () {
    function MarkerService(router, obsMedia, ls) {
        this.router = router;
        this.obsMedia = obsMedia;
        this.ls = ls;
        //Marker Data initialization & operations
        this.keyMARKERS = "keyMARKERS";
        this.arrMarkers = [];
        this.markers = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.arrMarkers);
        this.subscribeScreen();
        this.initMarkers();
    }
    MarkerService.prototype.initMarkers = function () {
        var persistedMarkers = this.ls.retrieve(this.keyMARKERS);
        if (persistedMarkers == undefined) {
            this.arrMarkers = [
                {
                    id: 1000,
                    imgURL: "assets/images/beeren.png",
                    lable: "Waldviertel",
                    type: 1,
                    lat: 48.5839237,
                    lng: 15.4276355,
                    remark: "Mittelmäßige Vorkommen - Dafür 100% Bio",
                    picture: null
                },
                {
                    id: 1001,
                    imgURL: "assets/images/schwammerl.png",
                    lable: "Steiermark",
                    type: 3,
                    lat: 47.5308866,
                    lng: 15.9476211,
                    remark: "Eierschwammerl & Steinpilze - so weit das Auge reicht",
                    picture: null
                },
                {
                    id: 1002,
                    imgURL: "assets/images/holler.png",
                    lable: "Neuwaldegg",
                    type: 2,
                    lat: 48.234201,
                    lng: 16.277753,
                    remark: "Mittelmäßige Vorkommen - Tendenziell eher auf Marwiesenseite",
                    picture: null
                }
            ];
            this.ls.store(this.keyMARKERS, this.arrMarkers);
            console.log("Initialized markers");
        }
        else {
            this.arrMarkers = persistedMarkers;
            console.log("Markers taken from lokal storage");
        }
        this.markers.next(this.arrMarkers);
    };
    MarkerService.prototype.resetMarkers = function () {
        this.initMarkers();
        this.router.navigateByUrl("/");
    };
    MarkerService.prototype.makersPersistAndBroadcast = function () {
        this.ls.store(this.keyMARKERS, this.arrMarkers);
        this.markers.next(this.arrMarkers);
    };
    MarkerService.prototype.getMarkers = function () {
        return this.markers;
    };
    MarkerService.prototype.getMarker = function (id) {
        return this.markers.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (m) { return m.find(function (m) { return m.id == id; }); }));
    };
    MarkerService.prototype.saveMarker = function (m) {
        if (m.id == undefined) {
            this.addMarker(m);
        }
        else {
            this.updateMarker(m);
        }
        this.makersPersistAndBroadcast();
    };
    MarkerService.prototype.updateMarker = function (m) {
        var old = this.arrMarkers.find(function (m) { return m.id == m.id; });
        var idx = this.arrMarkers.indexOf(old);
        this.arrMarkers.splice(idx, 1, m);
    };
    MarkerService.prototype.addMarker = function (m) {
        this.arrMarkers.push(m);
    };
    MarkerService.prototype.removeMarker = function (m) {
        var idx = this.arrMarkers.indexOf(m);
        if (idx !== -1) {
            this.arrMarkers.splice(idx, 1);
        }
        this.markers.next(this.arrMarkers);
        this.makersPersistAndBroadcast();
    };
    MarkerService.prototype.subscribeScreen = function () {
        var _this = this;
        this.watcher = this.obsMedia.subscribe(function (change) {
            _this.currentMQ = change.mqAlias;
            switch (_this.currentMQ) {
                case "xs":
                    _this.ScreenGtSmall = false;
                    break;
                case "sm":
                    _this.ScreenGtSmall = false;
                    break;
                default:
                    _this.ScreenGtSmall = true;
                    break;
            }
        });
    };
    //Responsive Routing
    MarkerService.prototype.showMarker = function (id) {
        if (this.ScreenGtSmall) {
            this.router.navigate(["", { outlets: { sidebar: ["showmarker", id] } }]);
        }
        else {
            this.router.navigate(["", { outlets: { sidebar: null } }]);
            this.router.navigateByUrl("/markers/" + id);
        }
    };
    MarkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], MarkerService);
    return MarkerService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var mods = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: mods,
            declarations: [],
            exports: mods
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-title>\r\n    <span>Device Infos</span>\r\n  </mat-card-title>\r\n  <mat-card-content fxLayout=\"column\">\r\n    <label>Platform: {{platform}}</label>\r\n    <label>Is virtual Device: {{isVirtual}}</label>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"card\">\r\n  <mat-card-title>\r\n    <span>Reset Markers</span>\r\n  </mat-card-title>\r\n  <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button mat-mini-fab (click)=\"resetMarkers()\">\r\n      <mat-icon>undo</mat-icon>\r\n    </button>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _markers_marker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markers/marker.service */ "./src/app/markers/marker.service.ts");
/* harmony import */ var angular_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-cordova/plugin */ "./node_modules/angular-cordova/plugin/index.ts");
/* harmony import */ var angular_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-cordova */ "./node_modules/angular-cordova/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(ms, ds) {
        this.ms = ms;
        this.ds = ds;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.isVirtual().subscribe(function (data) { return (_this.isVirtual = data); });
        this.ds.platform().subscribe(function (data) { return (_this.platform = data); });
        angular_cordova__WEBPACK_IMPORTED_MODULE_3__["Cordova"].deviceready.subscribe(function () { });
    };
    SettingsComponent.prototype.resetMarkers = function () {
        this.ms.resetMarkers();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")],
            providers: [angular_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]]
        }),
        __metadata("design:paramtypes", [_markers_marker_service__WEBPACK_IMPORTED_MODULE_1__["MarkerService"], angular_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/consts.ts":
/*!**********************************!*\
  !*** ./src/app/shared/consts.ts ***!
  \**********************************/
/*! exports provided: BLANK_MARKER, IN_SYNC, NOT_SYNCED, SYNCING, OFFLINE, ONLINE, SHARE, KEY_MARKERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANK_MARKER", function() { return BLANK_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IN_SYNC", function() { return IN_SYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_SYNCED", function() { return NOT_SYNCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNCING", function() { return SYNCING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFLINE", function() { return OFFLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONLINE", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE", function() { return SHARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_MARKERS", function() { return KEY_MARKERS; });
//Pictures
var BLANK_MARKER = "assets/images/camera.png";
//Icons
var IN_SYNC = "sync";
var NOT_SYNCED = "sync_disabled";
var SYNCING = "swap_horiz";
var OFFLINE = "cloud_off";
var ONLINE = "cloud_queue";
var SHARE = "share";
//Keys
var KEY_MARKERS = "keyMARKERS";


/***/ }),

/***/ "./src/app/shared/footer-bar/footer-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer-bar/footer-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row fxLayoutAlign=\"center center\" fxLayoutGap='20px'>\r\n    <button mat-raised-button color=\"accent\" routerLink=\"{{'/'}}\" routerLinkActive=\"navLink-active\" [routerLinkActiveOptions]=\"{ exact: true }\">Marker List</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"addMarker()\">Add Marker</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/footer-bar/footer-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer-bar/footer-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer-bar/footer-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/footer-bar/footer-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _markers_marker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../markers/marker.service */ "./src/app/markers/marker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent(ms) {
        this.ms = ms;
    }
    FooterBarComponent.prototype.ngOnInit = function () { };
    FooterBarComponent.prototype.addMarker = function () {
        this.ms.showMarker(0);
    };
    FooterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer-bar",
            template: __webpack_require__(/*! ./footer-bar.component.html */ "./src/app/shared/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./footer-bar.component.scss */ "./src/app/shared/footer-bar/footer-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_markers_marker_service__WEBPACK_IMPORTED_MODULE_1__["MarkerService"]])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/intro/intro.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/intro/intro.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  intro works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/intro/intro.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/intro/intro.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/intro/intro.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/intro/intro.component.ts ***!
  \*************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/shared/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/shared/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/shared/model.ts":
/*!*********************************!*\
  !*** ./src/app/shared/model.ts ***!
  \*********************************/
/*! exports provided: markerType, BLANK_MARKER, Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerType", function() { return markerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANK_MARKER", function() { return BLANK_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
var markerType;
(function (markerType) {
    markerType[markerType["Beeren"] = 1] = "Beeren";
    markerType[markerType["Holler"] = 2] = "Holler";
    markerType[markerType["Schwammerl"] = 3] = "Schwammerl";
})(markerType || (markerType = {}));
var BLANK_MARKER = "assets/images/camera.png";
var Marker = /** @class */ (function () {
    function Marker() {
    }
    Marker.getMarkerLabel = function (type) {
        return markerType[type];
    };
    return Marker;
}());



/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navMenu\" fxLayout=\"row\">\r\n  <div fxLayoutAlign=\"start center\" fxLayoutGap='20px' fxFlex>\r\n    <img class=\"navLogo\" src=\"assets/images/smartDwarf.png\" />\r\n    <a [routerLink]=\"['','/']\">{{appName}}</a>\r\n  </div>\r\n  <div class=\"navMenu\" fxLayoutAlign=\"end center\" fxLayoutGap='20px' class=\"navbar-right\" fxFlex>\r\n    <mat-icon fxShow.lt-md [routerLink]=\"['/settings']\">settings</mat-icon>\r\n    <mat-icon fxShow.lt-md (click)=\"addMarker()\">add_circle</mat-icon>\r\n    <mat-icon fxShow.lt-md [routerLink]=\"['','/']\">home</mat-icon>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navMenu a {\n  color: white;\n  text-decoration: none; }\n  .navMenu a:hover {\n    text-decoration: underline; }\n  .navbar-right {\n  float: right; }\n  .navLogo {\n  height: 55px; }\n  mat-icon {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _markers_marker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../markers/marker.service */ "./src/app/markers/marker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(ms) {
        this.ms = ms;
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName;
        this.links = [{ Title: "Marker List", Link: "markers" }];
    }
    NavBarComponent.prototype.ngOnInit = function () { };
    NavBarComponent.prototype.addMarker = function () {
        this.ms.showMarker(0);
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nav-bar",
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/shared/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/shared/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_markers_marker_service__WEBPACK_IMPORTED_MODULE_2__["MarkerService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/shared/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Werbung</div>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    googleApiKey: "AIzaSyDu1TiJaGinxTX7pI9daPqTqwNJ8d4fQk0",
    appName: "smart Sammler"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\mobileOverview\03 Device Access\Cordova\smartSammlerNgCordova\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map