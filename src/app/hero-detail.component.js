"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_model_1 = require("./data-model");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(fb) {
        this.fb = fb;
        this.states = data_model_1.states;
        this.createForm();
    }
    HeroDetailComponent.prototype.ngOnChanges = function () {
        this.heroForm.reset({
            name: this.hero.name
        });
        this.setAddresses(this.hero.addresses);
    };
    HeroDetailComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: '',
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: '',
        });
    };
    HeroDetailComponent.prototype.setAddresses = function (addresses) {
        var _this = this;
        var addressFGs = addresses.map(function (address) { return _this.fb.group(address); });
        var addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    };
    Object.defineProperty(HeroDetailComponent.prototype, "secretLairs", {
        get: function () {
            return this.heroForm.get('secretLairs');
        },
        enumerable: true,
        configurable: true
    });
    ;
    HeroDetailComponent.prototype.addLair = function () {
        this.secretLairs.push(this.fb.group(new data_model_1.Address()));
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", data_model_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map