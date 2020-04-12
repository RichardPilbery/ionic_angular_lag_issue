(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Calculate Score\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <form [formGroup]=\"batsForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <!-- Inputs with labels -->\n      <ion-item>\n        <ion-label position=\"fixed\">Age </ion-label>\n        <ion-input formControlName=\"age\" type=\"number\" pattern=\"[0-9]*\" placeholder=\"Enter age\" ></ion-input>\n        <ion-select formControlName=\"period\" value=\"years\" okText=\"Select\" cancelText=\"Cancel\">\n          <ion-select-option value=\"years\">Years</ion-select-option>\n          <ion-select-option value=\"months\">Months</ion-select-option>\n        </ion-select>\n        <!-- <ion-input (click)=\"showPicker()\" value=\"{{ age }} {{ period }}\"></ion-input> -->\n      </ion-item>\n      <ion-item *ngIf=\"batsForm.get('age').dirty && errorControl.age.invalid\">\n        <ion-text color=\"danger\" *ngIf=\"batsForm.get('age').dirty && errorControl.age.errors?.min\">\n          Age must be greater than 0\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"batsForm.get('age').dirty && errorControl.age.errors?.max\">\n          Age must be less than 116\n        </ion-text>\n        <ion-text color=\"danger\"*ngIf=\"batsForm.get('age').dirty && errorControl.age.errors?.required\">\n          An age value is required\n        </ion-text>\n      </ion-item>\n\n\n      <ion-radio-group formControlName=\"penetrating\" >\n        <ion-list-header>\n          <ion-label>Penetrating injury</ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"start\" value=\"no\" checked></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n  \n      <ion-radio-group formControlName=\"velocity\" >\n        <ion-list-header>\n          <ion-label>High velocity trauma</ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"start\" value=\"no\" checked></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n\n    <ion-item>\n      <ion-label position=\"fixed\">Systolic BP</ion-label>\n      <ion-input formControlName=\"bp\" type=\"number\" pattern=\"[0-9]*\"  min=\"0\" max=\"240\" required debounce=\"1000\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('bp').dirty && errorControl.bp.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('bp').dirty && errorControl.bp.errors?.min\">\n        BP must be greater than 0mmHg\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('bp').dirty  && errorControl.bp.errors?.max\">\n        BP must be less than 240mmHg\n      </ion-text>\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('bp').dirty && errorControl.bp.errors?.required\">\n        Blood pressure value is required\n      </ion-text>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">GCS</ion-label>\n      <ion-input formControlName=\"gcs\" type=\"number\" pattern=\"[0-9]*\" min=\"3\" max=\"15\" required debounce=\"1000\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('gcs').dirty && errorControl.gcs.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('gcs').dirty && errorControl.gcs.errors?.min\">\n        GCS must be 3 or more\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('gcs').dirty  && errorControl.gcs.errors?.max\">\n        GCS must be 15 or less\n      </ion-text>\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('gcs').dirty && errorControl.gcs.errors?.required\">\n        A GCS is required\n      </ion-text>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">Resp Rate</ion-label>\n      <ion-input formControlName=\"rr\" type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"60\" required></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('rr').dirty && errorControl.rr.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('rr').dirty && errorControl.rr.errors?.min\">\n        Resp rate must be greater than 0\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('rr').dirty  && errorControl.rr.errors?.max\">\n        Resp rate must be less than 60\n      </ion-text>\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('rr').dirty && errorControl.rr.errors?.required\">\n        A respiratory rate is required\n      </ion-text>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"fixed\">SpO2 on air</ion-label>\n      <ion-input formControlName=\"spo2\" type=\"number\" pattern=\"[0-9]*\" min=\"50\" max=\"100\" required debounce=\"1000\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('spo2').dirty && errorControl.spo2.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('spo2').dirty && errorControl.spo2.errors?.min\">\n        SpO2 be greater than 50%\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('spo2').dirty  && errorControl.spo2.errors?.max\">\n        SpO2 must be 100% or less\n      </ion-text>\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('spo2').dirty && errorControl.spo2.errors?.required\">\n        SpO2 is required when a respiratory rate is not provided\n      </ion-text>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">Heart Rate </ion-label>\n      <ion-input formControlName=\"hr\" type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"180\" id=\"hr\" required></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('hr').dirty && errorControl.hr.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('hr').dirty && errorControl.hr.errors?.min\">\n        Heart rate must be greater than 0\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"batsForm.get('hr').dirty && errorControl.hr.errors?.max\">\n        Heart rate must be less than 180\n      </ion-text>\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('hr').dirty && errorControl.hr.errors?.required\">\n        Heart rate value is required\n      </ion-text>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">Callsign</ion-label>\n      <ion-input formControlName=\"callsign\" type=\"number\" pattern=\"[0-9]*\" required placeholder=\"Enter vehicle callsign\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"batsForm.get('callsign').dirty && errorControl.callsign.invalid\">\n      <ion-text color=\"danger\"*ngIf=\"batsForm.get('callsign').dirty && errorControl.callsign.errors?.required\">\n        Your vehicle callsign is required\n      </ion-text>\n    </ion-item>\n    \n    <div class=\"ion-padding\">\n      <ion-button  expand=\"full\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!batsForm.valid\" >Calculate Score</ion-button>\n    </div>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmlja3k5OTkvRG9jdW1lbnRzL0lvbmljLTIwMTkvZm9ybXRlc3Qvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let Tab1Page = class Tab1Page {
    constructor(loadingCtrl, formBuilder, router) {
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.thenumbers = new Array(100);
        this.show = true;
        this.spinner = false;
        this.loading = null;
        this.isSubmitted = false;
        this.startGCS = 15;
        this.nextID = 1;
    }
    ngOnInit() {
        this.batsForm = this.formBuilder.group({
            bp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(240)]],
            gcs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(15)]],
            rr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(60)]],
            spo2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]],
            hr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(180)]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(115)]],
            period: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            penetrating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            velocity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            callsign: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.batsForm.controls.period.setValue('years');
        this.formControlValueChanged();
    }
    ionViewDidEnter() {
        this.nextID = 1;
    }
    get errorControl() {
        return this.batsForm.controls;
    }
    // tslint:disable-next-line: max-line-length
    // https://www.infragistics.com/community/blogs/b/infragistics/posts/how-to-do-conditional-validation-on-valuechanges-method-in-angular-reactive-forms-
    // https://stackoverflow.com/questions/47821809/rangeerror-maximum-call-stack-size-exceeded-when-using-valuechanges-subscribe
    formControlValueChanged() {
        const spo2Control = this.batsForm.get('spo2');
        const rrControl = this.batsForm.get('rr');
        this.batsForm.get('rr').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe((rr) => {
            // console.log(rr);
            if (rr !== null && (rr > 0 || rr < 50)) {
                spo2Control.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]);
            }
            else {
                spo2Control.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]);
            }
            spo2Control.updateValueAndValidity();
        });
        this.batsForm.get('spo2').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe((spo2) => {
            // console.log(spo2);
            if (spo2 !== null && (spo2 > 50 || spo2 < 101)) {
                rrControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(60)]);
            }
            else {
                rrControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(60)]);
            }
            rrControl.updateValueAndValidity();
        });
    }
    submitForm() {
        console.log('Form submitted');
        console.log(this.batsForm.value);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map