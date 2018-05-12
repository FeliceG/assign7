webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CSCI-31 Researcher Roster';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__researcher_service__ = __webpack_require__("./src/app/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__roster_roster_component__ = __webpack_require__("./src/app/roster/roster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__researcher_researcher_component__ = __webpack_require__("./src/app/researcher/researcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__researcherdetail_researcherdetail_component__ = __webpack_require__("./src/app/researcherdetail/researcherdetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/researcher', pathMatch: 'full' },
    { path: 'researcher', component: __WEBPACK_IMPORTED_MODULE_7__roster_roster_component__["a" /* RosterComponent */] },
    { path: 'researcher/:id', component: __WEBPACK_IMPORTED_MODULE_9__researcherdetail_researcherdetail_component__["a" /* ResearcherdetailComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__roster_roster_component__["a" /* RosterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__researcher_researcher_component__["a" /* ResearcherComponent */],
                __WEBPACK_IMPORTED_MODULE_9__researcherdetail_researcherdetail_component__["a" /* ResearcherdetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__researcher_service__["a" /* ResearcherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/researcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearcherService = /** @class */ (function () {
    function ResearcherService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    //basic list method
    ResearcherService.prototype.listResearchers = function () {
        return this.http.get(this.apiurl + 'researcher');
        //      return this.researcherList;
    };
    //"getOne" method, returns item from the array with _id == id
    ResearcherService.prototype.getResearcher = function (id) {
        return this.http.get(this.apiurl + 'researcher/' + id);
        //      return this.researcherList.find((el)=> {return el._id == id});
    };
    ResearcherService.prototype.updateResearcher = function (id, data) {
        return this.http.put(this.apiurl + 'researcher/' + id, data);
    };
    ResearcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ResearcherService);
    return ResearcherService;
}());



/***/ }),

/***/ "./src/app/researcher/researcher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/researcher/researcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"researcher\">\n  <div class=\"researcher-header\">\n    {{ researcher.first }}  {{ researcher.last }}\n  </div>\n  <div class=\"researcher-actions\">\n    <a routerLink=\"/researcher/{{ researcher._id }}\">View Details</a><br>\n    <button name=\"edit\" (click)=\"edit($event, researcher)\">Edit</button><br>\n  </div>\n  <br>\n<div>\n"

/***/ }),

/***/ "./src/app/researcher/researcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__researcher_service__ = __webpack_require__("./src/app/researcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearcherComponent = /** @class */ (function () {
    function ResearcherComponent(route, router, researcherService) {
        this.route = route;
        this.router = router;
        this.researcherService = researcherService;
        this.researcherEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hideDetails = true;
    }
    ResearcherComponent.prototype.viewResearcher = function (evt, researcher) {
        console.log("view researcher", evt, researcher);
        this.hideDetails = false;
    };
    ResearcherComponent.prototype.edit = function (evt, researcher) {
        console.log("view contact:", researcher.first, researcher.registered);
        this.researcher.registered = false;
    };
    ResearcherComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ResearcherComponent.prototype, "researcher", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ResearcherComponent.prototype, "researcherEvent", void 0);
    ResearcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-researcher',
            template: __webpack_require__("./src/app/researcher/researcher.component.html"),
            styles: [__webpack_require__("./src/app/researcher/researcher.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__researcher_service__["a" /* ResearcherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__researcher_service__["a" /* ResearcherService */]])
    ], ResearcherComponent);
    return ResearcherComponent;
}());



/***/ }),

/***/ "./src/app/researcherdetail/researcherdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/researcherdetail/researcherdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"researcher\">\n  <h3>Researcher Details:</h3>\n  <div class=\"researcherdetail\">\n    <ul>\n      <li>First:  {{ researcher.first }}</li>\n      <li>Last:  {{ researcher.last }}</li>\n      <li>Address: {{ researcher.address }}</li>\n      <li>City: {{ researcher.city }}</li>\n      <li>State: {{ researcher.state }}</li>\n    </ul>\n    <a routerLink=\"/researcher/\">back to roster</a>\n  </div>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"updateResearcher(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"first\">First</label>\n      <input #first name=\"first\" class=\"form-control\" [ngModel]=\"researcher.first\">\n      <br>\n      <label for=\"last\">Last</label>\n      <input #last name=\"last\" class=\"form-control\" [ngModel]=\"researcher.last\">\n      <br>\n      <label for=\"address\">Address</label>\n      <input #address name=\"address\" class=\"form-control\" [ngModel]=\"researcher.address\">\n      <br>\n      <label for=\"city\">City</label>\n      <input #city name=\"city\" class=\"form-control\" [ngModel]=\"researcher.city\">\n      <br>\n      <label for=\"state\">State</label>\n      <input #state name=\"state\" class=\"form-control\" [ngModel]=\"researcher.state\">\n      <br>\n    </div>\n    <button type=\"submit\">SAVE</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/researcherdetail/researcherdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearcherdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__researcher_service__ = __webpack_require__("./src/app/researcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearcherdetailComponent = /** @class */ (function () {
    function ResearcherdetailComponent(route, router, researcherService) {
        this.route = route;
        this.router = router;
        this.researcherService = researcherService;
    }
    ResearcherdetailComponent.prototype.getResearcher = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        console.log("calling getResearcher() in ResearchDetail component: " + param);
        this.researcherService.getResearcher(param)
            .subscribe(function (researcher) {
            console.log("got researcher: ", researcher);
            _this.researcher = researcher;
        });
        //      const researcher = this.researcherService.getResearcher(param);
        //      console.log("researcher is: ");
        //      return this.researcher = this.researcherService.getResearcher(param);
    };
    ResearcherdetailComponent.prototype.updateResearcher = function (obj) {
        console.log('updateResearcher with updates', obj.first, obj.last, obj.address);
        this.researcher.first = obj.first;
        this.researcher.last = obj.last;
        this.researcher.address = obj.address;
        this.researcher.city = obj.city;
        this.researcher.state = obj.state;
        this.researcherService.updateResearcher(this.researcher._id, this.researcher)
            .subscribe(function (results) {
            location.reload();
        });
    };
    ResearcherdetailComponent.prototype.ngOnInit = function () {
        this.getResearcher();
    };
    ResearcherdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-researcherdetail',
            template: __webpack_require__("./src/app/researcherdetail/researcherdetail.component.html"),
            styles: [__webpack_require__("./src/app/researcherdetail/researcherdetail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__researcher_service__["a" /* ResearcherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__researcher_service__["a" /* ResearcherService */]])
    ], ResearcherdetailComponent);
    return ResearcherdetailComponent;
}());



/***/ }),

/***/ "./src/app/roster/roster.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roster/roster.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Roster</h2>\n\n<div class=\"researchers\">\n  <h2>App Researcher Information</h2>\n  <h3>Here are the students currently registered for this course: </h3>\n  <p><app-researcher *ngFor='let researcher of researcherList'\n      [researcher]='researcher'\n        (editEvent)=\"handleEdit($event)\"> </app-researcher></p>\n  <app-newresearcher></app-newresearcher>\n</div>\n"

/***/ }),

/***/ "./src/app/roster/roster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__researcher_service__ = __webpack_require__("./src/app/researcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RosterComponent = /** @class */ (function () {
    function RosterComponent(researcherService) {
        this.researcherService = researcherService;
        this.researcherList = [];
    }
    RosterComponent.prototype.ngOnInit = function () {
        console.log('in roster ngOnInit');
        //    this.researcherService.listResearchers()
        //      .subscribe((researchers)=> {
        //        console.log('got researchers ', researchers);
        //        this.researcherList = researchers;
        this.researcherList = this.researcherService.listResearchers();
        //    });
    };
    RosterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-roster',
            template: __webpack_require__("./src/app/roster/roster.component.html"),
            styles: [__webpack_require__("./src/app/roster/roster.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__researcher_service__["a" /* ResearcherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__researcher_service__["a" /* ResearcherService */]])
    ], RosterComponent);
    return RosterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: 'http://localhost:8080/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map