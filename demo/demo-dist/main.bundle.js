webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sub-title {\n  margin-left: 20px;\n}\n\n.fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.button-row {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 5px;\n}\n\n.songs {\n  margin-left: -200px;\n}\n\n.song-title-btn {\n  text-align: right;\n  width: 300px;\n}\n\n.play-btns {\n  margin-top: 20px;\n}\n\n.playlist-title {\n  margin-top: 20px;\n}\n\n.playlist {\n  padding-bottom: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <a href=\"https://github.com/lfarran/ngx-soundmanager2\">ngx-soundmanager2</a>\n  <small class=\"sub-title\">An Audio Player for Angular</small>\n\n  <span class=\"fill-space\"></span>\n\n  <!-- https://buttons.github.io/ -->\n  <span class=\"github\">\n    <!-- Place this tag where you want the button to render. -->\n    <a class=\"github-button\"\n       href=\"https://github.com/lfarran/ngx-soundmanager2\"\n       data-icon=\"octicon-star\"\n       data-show-count=\"true\"\n       aria-label=\"Star lfarran/ngx-soundmanager2 on GitHub\">\n      Star\n    </a>\n\n    <!-- Place this tag where you want the button to render. -->\n    <a class=\"github-button\"\n       href=\"https://github.com/lfarran/ngx-soundmanager2/fork\"\n       data-icon=\"octicon-repo-forked\"\n       data-show-count=\"true\"\n       aria-label=\"Fork lfarran/ngx-soundmanager2 on GitHub\">\n      Fork\n    </a>\n  </span>\n</mat-toolbar>\n\n<div style=\"text-align:center; margin: 8px;\">\n  <h1 class=\"mat-h1\">\n    Welcome to {{ title }}!\n  </h1>\n\n  <div>\n    <h5 class=\"mat-title\">Songs</h5>\n    <div *ngFor=\"let song of songs\" class=\"songs\">\n      <div class=\"button-row\">\n        <button mat-button color=\"primary\" class=\"song-title-btn\" [musicPlayer]=\"'play'\" [song]=\"song\">\n          {{ song.title }}\n        </button>\n        <button mat-mini-fab color=\"accent\" musicPlayer [song]=\"song\">+</button>\n      </div>\n    </div>\n\n    <div class=\"button-row play-btns\">\n      <button mat-raised-button color=\"primary\" playAll [songs]=\"songs\">Play all</button>\n      <button mat-raised-button color=\"accent\" playAll [songs]=\"songs\" [play]=\"false\">Add all</button>\n    </div>\n  </div>\n\n  <hr />\n\n  <div>\n    <p *ngIf=\"currentPlaying\" class=\"mat-body\">\n      Currently Playing: {{ currentPlaying.title }} by {{ currentPlaying.artist }} ({{ currentTrackPostion | humanTime }} / {{ currentTrackDuration | humanTime }})\n    </p>\n\n    <div class=\"progress\" style=\"height: 20px; width: 100%;\">\n      <div class=\"progress-bar progress-bar-success\"\n           role=\"progressbar\"\n           [ngStyle]=\"{width : progress }\">\n        <span class=\"sr-only\"></span>\n      </div>\n    </div>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" playMusic>\n        <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-raised-button color=\"accent\" pauseMusic>\n        <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-raised-button color=\"warn\" stopMusic>\n        <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-raised-button repeatMusic>Repeat</button>\n    </div>\n\n    <h5 class=\"mat-body\">Volume: {{ volume }}</h5>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" increaseVolume>+</button>\n      <button mat-raised-button color=\"accent\" decreaseVolume>-</button>\n      <button mat-raised-button muteMusic>Mute ({{ mute }})</button>\n    </div>\n\n    <div class=\"button-row\">\n      <button mat-icon-button color=\"primary\" previousTrack>\n        <i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-icon-button color=\"primary\" nextTrack>\n        <i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-raised-button color=\"primary\" clearPlaylist>Clear Playlist</button>\n    </div>\n\n    <h5 class=\"mat-title playlist-title\">Playlist:</h5>\n\n    <div class=\"playlist\">\n      <div *ngFor=\"let song of playlist; index as i;\">\n        <a playFromPlaylist [song]=\"song\">{{ song.title }}</a>\n        <a removeFromPlaylist [song]=\"song\" [index]=\"i\">\n          <small>(remove)</small>\n        </a>\n        <span *ngIf=\"currentPlaying && currentPlaying.id == song.id\"> - (current)</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_soundmanager2__ = __webpack_require__("../../../../ngx-soundmanager2/ngx-soundmanager2.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
        this.title = 'the ngx-soundmanager2 demo';
        this.songs = [
            {
                id: 'one',
                title: 'Kick It',
                artist: 'Raised On Zenith',
                url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=10442536bc89f9881e8da2eb81ecd5fb&id=120877506&stream=1&ts=1502502685.0'
            },
            {
                id: 'two',
                title: 'How Long',
                artist: 'Raised On Zenith',
                url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=468f1ed20aae2aba824fb4e6923ff850&id=470307233&stream=1&ts=1502595994.0'
            },
            {
                id: 'three',
                title: 'Details and Structures',
                artist: 'Air This Side of Caution',
                url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/02_Details%26Structures.mp3'
            },
            {
                id: 'four',
                title: 'Here We Go',
                artist: 'Air This Side of Caution',
                url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/03_HereWeGo.mp3'
            },
            {
                id: 'five',
                title: 'Without You',
                artist: 'The Assembly',
                url: 'http://lukefarran.com/music/TheAssembly/TheFutureHasBeenSold_LukeMaster/07_WithoutYou.mp3'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe for mute changes to update bindings
        this.mute = this._musicPlayerService.getMuteStatus();
        this._musicPlayerMuteSubscription = this._musicPlayerService.musicPlayerMuteEventEmitter
            .subscribe(function (event) {
            _this.mute = event.data;
        });
        // Subscribe for track changes
        this.currentPlaying = this._musicPlayerService.currentTrackData();
        this._musicPlayerTrackIdSubscription = this._musicPlayerService.musicPlayerTrackEventEmitter
            .subscribe(function (event) {
            _this.currentPlaying = _this._musicPlayerService.currentTrackData();
            _this.currentTrackPostion = event.data.trackPosition;
            _this.currentTrackDuration = event.data.trackDuration;
            _this.currentTrackProgress = event.data.trackProgress;
        });
        // subscribe for volume changes
        this.volume = this._musicPlayerService.getVolume();
        this._musicPlayerVolumeSubscription = this._musicPlayerService.musicPlayerVolumeEventEmitter
            .subscribe(function (event) {
            _this.volume = event.data;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._musicPlayerMuteSubscription.unsubscribe();
        this._musicPlayerTrackIdSubscription.unsubscribe();
        this._musicPlayerVolumeSubscription.unsubscribe();
    };
    Object.defineProperty(AppComponent.prototype, "progress", {
        get: function () {
            return this.currentTrackProgress ? (this.currentTrackProgress.toString() + '%') : '0%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "playlist", {
        get: function () {
            return this._musicPlayerService.getPlaylist();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_soundmanager2__["a" /* MusicPlayerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_soundmanager2__ = __webpack_require__("../../../../ngx-soundmanager2/ngx-soundmanager2.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_soundmanager2__["b" /* NgxSoundmanager2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map