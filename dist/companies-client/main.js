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

/***/ "./src/app/add-company/add-company.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-company/add-company.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-company/add-company.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-company/add-company.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Company</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Company name:</label>\n      <input type=\"name\" formControlName=\"name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" id=\"name\">\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">Company name is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"address\">Address:</label>\n      <input type=\"address\" formControlName=\"address\" placeholder=\"Address\" name=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" id=\"address\">\n      <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.address.errors.required\">Company address is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"city\">City:</label>\n      <input formControlName=\"city\" placeholder=\"City\" name=\"city\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" id=\"city\">\n      <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.city.errors.required\">Company city is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <input formControlName=\"country\" placeholder=\"Country\" name=\"country\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" id=\"country\">\n      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.country.errors.required\">Company country is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone number:</label>\n      <input formControlName=\"phone\" placeholder=\"Phone\" name=\"phone\" class=\"form-control\" id=\"phone\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"owners_string\">Comma-separated Beneficial Owners:</label>\n      <input formControlName=\"owners_string\" placeholder=\"Beneficial Owners\" name=\"owners_string\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.owners_string.errors }\" id=\"owners_string\">\n      <div *ngIf=\"submitted && f.owners_string.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.owners_string.errors.required\">Company beneficial owners are required</div>\n      </div>\n    </div>\n\n    <button class=\"btn btn-success\">Create</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-company/add-company.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-company/add-company.component.ts ***!
  \******************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(formBuilder, router, companyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.companyService = companyService;
        this.submitted = false;
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            company_id: [uuidv4()],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            phone: [''],
            owners_string: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            beneficial_owners: [['']]
        });
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    };
    Object.defineProperty(AddCompanyComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.companyService.createCompany(this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-company']);
        }, function (error) {
            alert(error);
        });
    };
    AddCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! ./add-company.component.html */ "./src/app/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/add-company/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/add-owner/add-owner.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-owner/add-owner.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-owner/add-owner.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-owner/add-owner.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Beneficial Owner</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label for=\"owner_name\">Beneficial Owner:</label>\n      <input formControlName=\"owner_name\" placeholder=\"Beneficial Owner\" name=\"owner_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.owner_name.errors }\" id=\"owner_name\">\n      <div *ngIf=\"submitted && f.owner_name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.owner_name.errors.required\">Company beneficial owner name is required</div>\n      </div>\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-owner/add-owner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-owner/add-owner.component.ts ***!
  \**************************************************/
/*! exports provided: AddOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOwnerComponent", function() { return AddOwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddOwnerComponent = /** @class */ (function () {
    function AddOwnerComponent(formBuilder, router, companyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.companyService = companyService;
        this.submitted = false;
    }
    AddOwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyId = localStorage.getItem('addOwnerCompanyId');
        if (!this.companyId) {
            alert('Invalid action.');
            this.router.navigate(['list-company']);
            return;
        }
        this.addForm = this.formBuilder.group({
            company_id: [],
            owner_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.companyService.getCompanyById(this.companyId)
            .subscribe(function (data) {
            _this.addForm.setValue({ company_id: _this.companyId, owner_name: '' });
        });
    };
    Object.defineProperty(AddOwnerComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddOwnerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.companyService.addOwner(this.companyId, this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-company']);
        }, function (error) {
            alert(error);
        });
    };
    AddOwnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-owner',
            template: __webpack_require__(/*! ./add-owner.component.html */ "./src/app/add-owner/add-owner.component.html"),
            styles: [__webpack_require__(/*! ./add-owner.component.css */ "./src/app/add-owner/add-owner.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], AddOwnerComponent);
    return AddOwnerComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/edit-company/edit-company.component.ts");
/* harmony import */ var _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-company/list-company.component */ "./src/app/list-company/list-company.component.ts");
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _add_owner_add_owner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-owner/add-owner.component */ "./src/app/add-owner/add-owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_8__["ListCompanyComponent"],
                _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"],
                _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_7__["EditCompanyComponent"],
                _add_owner_add_owner_component__WEBPACK_IMPORTED_MODULE_10__["AddOwnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_service_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-company/list-company.component */ "./src/app/list-company/list-company.component.ts");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/edit-company/edit-company.component.ts");
/* harmony import */ var _add_owner_add_owner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-owner/add-owner.component */ "./src/app/add-owner/add-owner.component.ts");





var routes = [
    { path: 'add-company', component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_1__["AddCompanyComponent"] },
    { path: 'list-company', component: _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_2__["ListCompanyComponent"] },
    { path: 'edit-company', component: _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_3__["EditCompanyComponent"] },
    { path: 'add-owner', component: _add_owner_add_owner_component__WEBPACK_IMPORTED_MODULE_4__["AddOwnerComponent"] },
    { path: '', component: _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_2__["ListCompanyComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/edit-company/edit-company.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-company/edit-company.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-company/edit-company.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-company/edit-company.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Edit Company</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Company name:</label>\n      <input type=\"name\" formControlName=\"name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" id=\"name\">\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">Company name is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"address\">Address:</label>\n      <input type=\"address\" formControlName=\"address\" placeholder=\"Address\" name=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" id=\"address\">\n      <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.address.errors.required\">Company address is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"city\">City:</label>\n      <input formControlName=\"city\" placeholder=\"City\" name=\"city\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" id=\"city\">\n      <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.city.errors.required\">Company city is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <input formControlName=\"country\" placeholder=\"Country\" name=\"country\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" id=\"country\">\n      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.country.errors.required\">Company country is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone number:</label>\n      <input formControlName=\"phone\" placeholder=\"Phone\" name=\"phone\" class=\"form-control\" id=\"phone\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"owners_string\">Comma-separated Beneficial Owners:</label>\n      <input formControlName=\"owners_string\" placeholder=\"Beneficial Owners\" name=\"owners_string\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.owners_string.errors }\" id=\"owners_string\">\n      <div *ngIf=\"submitted && f.owners_string.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.owners_string.errors.required\">Company beneficial owners are required</div>\n      </div>\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-company/edit-company.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-company/edit-company.component.ts ***!
  \********************************************************/
/*! exports provided: EditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function() { return EditCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCompanyComponent = /** @class */ (function () {
    function EditCompanyComponent(formBuilder, router, companyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.companyService = companyService;
        this.submitted = false;
    }
    EditCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var companyId = localStorage.getItem('editCompanyId');
        if (!companyId) {
            alert('Invalid action.');
            this.router.navigate(['list-company']);
            return;
        }
        this.editForm = this.formBuilder.group({
            company_id: [],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [''],
            phone: [''],
            owners_string: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            beneficial_owners: [[]]
        });
        this.companyService.getCompanyById(companyId)
            .subscribe(function (data) {
            data.owners_string = data.beneficial_owners.join(',');
            _this.editForm.setValue(data);
        });
    };
    Object.defineProperty(EditCompanyComponent.prototype, "f", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.invalid) {
            return;
        }
        this.companyService.updateCompany(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['list-company']);
        }, function (error) {
            alert(error);
        });
    };
    EditCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-company',
            template: __webpack_require__(/*! ./edit-company.component.html */ "./src/app/edit-company/edit-company.component.html"),
            styles: [__webpack_require__(/*! ./edit-company.component.css */ "./src/app/edit-company/edit-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]])
    ], EditCompanyComponent);
    return EditCompanyComponent;
}());



/***/ }),

/***/ "./src/app/list-company/list-company.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-company/list-company.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-company/list-company.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-company/list-company.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2> Company Details</h2>\n  <button class=\"btn btn-danger\" (click)=\"addCompany()\"> Add Company</button>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Company Id</th>\n      <th>Name</th>\n      <th>Address</th>\n      <th>City</th>\n      <th>Country</th>\n      <th>Email</th>\n      <th>Phone</th>\n      <th>Beneficial Owners</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let company of companys\">\n      <td class=\"hidden\">{{company.company_id}}</td>\n      <td>{{company.name}}</td>\n      <td>{{company.address}}</td>\n      <td>{{company.city}}</td>\n      <td>{{company.country}}</td>\n      <td>{{company.email}}</td>\n      <td>{{company.phone}}</td>\n      <td>{{company.beneficial_owners.join(\",\")}}</td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"deleteCompany(company)\"> Delete</button>\n        <button class=\"btn btn-danger\" (click)=\"editCompany(company)\" style=\"margin-left: 20px;\"> Edit</button>\n        <button class=\"btn btn-danger\" (click)=\"addOwner(company)\" style=\"margin-left: 20px;\"> Add Owner</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/list-company/list-company.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-company/list-company.component.ts ***!
  \********************************************************/
/*! exports provided: ListCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCompanyComponent", function() { return ListCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/company.service */ "./src/app/service/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListCompanyComponent = /** @class */ (function () {
    function ListCompanyComponent(router, companyService) {
        this.router = router;
        this.companyService = companyService;
    }
    ListCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (data) {
            _this.companys = data;
        });
    };
    ListCompanyComponent.prototype.deleteCompany = function (company) {
        var _this = this;
        this.companyService.deleteCompany(company.company_id)
            .subscribe(function (data) {
            _this.companys = _this.companys.filter(function (u) { return u !== company; });
        });
    };
    ListCompanyComponent.prototype.editCompany = function (company) {
        localStorage.removeItem('editCompanyId');
        localStorage.setItem('editCompanyId', company.company_id);
        this.router.navigate(['edit-company']);
    };
    ListCompanyComponent.prototype.addCompany = function () {
        this.router.navigate(['add-company']);
    };
    ListCompanyComponent.prototype.addOwner = function (company) {
        localStorage.setItem('addOwnerCompanyId', company.company_id);
        this.router.navigate(['add-owner']);
    };
    ListCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-company',
            template: __webpack_require__(/*! ./list-company.component.html */ "./src/app/list-company/list-company.component.html"),
            styles: [__webpack_require__(/*! ./list-company.component.css */ "./src/app/list-company/list-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], ListCompanyComponent);
    return ListCompanyComponent;
}());



/***/ }),

/***/ "./src/app/service/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/v1/companies';
    }
    CompanyService.prototype.getCompanies = function () {
        /*  let fakeCompanies = [{company_id: '4ee3a8d8-ca7b-4290-a52c-dd5b6165ec11', name: 'Envisionworld Ltd.',
            address: '1 Canada Square, Canary Wharf', city: 'London', country: 'United Kingdom',
            email: 'roman.szarowski@gmail.com', phone: '+420123456789', beneficial_owners: [owner_name: 'Roman Szarowski']}];
         return Observable.of(fakeCompanies).delay(5000); */
        return this.http.get(this.baseUrl);
    };
    CompanyService.prototype.getCompanyById = function (company_id) {
        return this.http.get(this.baseUrl + '/' + company_id);
    };
    CompanyService.prototype.createCompany = function (company) {
        company.beneficial_owners = company.owners_string.split(',');
        return this.http.post(this.baseUrl, company);
    };
    CompanyService.prototype.updateCompany = function (company) {
        company.beneficial_owners = company.owners_string.split(',');
        return this.http.put(this.baseUrl + '/' + company.company_id, company);
    };
    CompanyService.prototype.deleteCompany = function (company_id) {
        return this.http.delete(this.baseUrl + '/' + company_id);
    };
    CompanyService.prototype.addOwner = function (company_id, owner) {
        return this.http.put(this.baseUrl + '/' + company_id + '/add_beneficial_owner', owner);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rszarowski/viabill/companies-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map