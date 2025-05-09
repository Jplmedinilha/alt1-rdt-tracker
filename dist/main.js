(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["sharp", "canvas", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["TestApp"] = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["TestApp"] = factory(root["sharp"], root["canvas"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@socket.io/component-emitter/lib/esm/index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@socket.io/component-emitter/lib/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Emitter: () => (/* binding */ Emitter)
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "../node_modules/alt1/dist/ability/index.js":
/*!**************************************************!*\
  !*** ../node_modules/alt1/dist/ability/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ability/actionbarimgs/dren.data.png":
/*!*************************************************!*\
  !*** ./src/ability/actionbarimgs/dren.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_909__) => {

module.exports=(__nested_webpack_require_909__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAJJSURBVChTJZDfS1NRAMfPuefe3bO2ufmL6dzMpKY0nducMEYSVCZTCyKmSSyIIvojeuglEqlQevGhRyN68FHoFw3BJc3KrYlam6t0tB/ldre29st7bucSfDmch+/5fL/fA0OhsKmra/HJvCk/Z7cpGQag/0KAQTyE4MWauLBUKZRE5J32Rb9+uXBpMhjDws6q0cgyEDIMlE9E76D3KLKZUeAzQKmf+2dGPNQ9dvFyLK+LrLypQvxbgBqVhHkWyW+Avplp0THo3lRhcXnH7R6Oxr7Zzk6Hk7rHC/7ILn75niUStByTm9AaZhOD7lzTsDi9tLzbb3Nl9mL206NYrfsQ8Ct5bvs7AABajwM6QN5wa0Jj0gIgJJ++3uuzWA72492nzikR3gi+Uym5WAJ43ADzMhjdHFfToDLh3q5lgltx19BQOZU42TfA8qrwp3XKphMdPYA2Rjc8akkCB3+YeOpIKZsOhjZdLjchpMdizRM+tvnxR5J79gpSoeueBkrlFXA9qsI8Lgq5YCjidAxSt33AJhSymURCoeDKNYk5FOEhgSwCzhNVuqK1US3mU3Pzj9KlGqgXR8enCpXi30ppcHgM+c43SASI1bqhsUbxaYFVYr4oZAOra01tpm6TXtPW63A4LHYXfHC709pZIRIQCaQqVphkjqVRv3KSf6vc3OmcnZmhaVeu+pDEGjqaRDWm3QAhkH6KChOek5Q8JITTtvfrDcbnKxu5fBZ1tGrjaZWCAy0aUWZL1CHjMwVYb5+Y9Hrv3p/FiDwcMf8DoSn35z60AhIAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/ability/actionbarimgs/drenretal.data.png":
/*!******************************************************!*\
  !*** ./src/ability/actionbarimgs/drenretal.data.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_2252__) => {

module.exports=(__nested_webpack_require_2252__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAJlSURBVChTAVoCpf0B0NDRHSAgrKGRI/WQNDIKAQEAAgIAAQEAAQEAAQIHyMz32wdpVF5u4+DgAu3x9MPCw1Rfb90Od8jH+gEBAAD/AAEAAAEAAMnK7tsKcVRebsPCw+3x9APv6+M/Q0nb2tlJTVPX7hDbxLwQEAb29gG+2Pn2HYFMU2LDwsMNDxGek30Dk1/xn7LYODk929zfMENZz+cQvbK9y9X9BCqBP1BnzMO+DQoFm5WGYk3QA4llDgcJ6Kez3SwvOOri3C49R+D5EuP2D1djb9vLwAAAAKGcj2g51T4uDQNxUwwgEAEG9OeiueIpKSvt494mO0T77u7Cwb8ZExChnphWPM9JOgwBAQAC/f0A/P0AJiAGHPzSlZqYAAAA7dDHNzU1FAkEh4eFHPzSHgcOAQEAAQEAA2tODP7+APP1AtHdAvkGGs7Q0jEwMP7+/iUoK/799fbl1fr3BcnNAMbK/wNSPQwMCAHn6QDkCkIoMj/p6uq6wcM1Ly3+/v4sLjTi6+75690KBgLw9vwDLjpS693awdsDQlV6DAgG9/j02NPT0dHMJDE5EggAGR4qtrWsAf79DCpTA2pyhvIGJgQbPyIdF9Tb4LewqzMU8Q//77i+yQ4WHiIdFwMTKh8pNSQtOgEvNjihmpkAAAB2eHgN8cVNNAwNCf79/gDm7QGx0PkFFzeKiIgAAABcXVwDIi0w5fYDFAkD6OXjMxbhKx77BwX/BAMACggAAP4FBhQvFhocqcHP8PHtA7h2WbvV3cW+umdnZubv9AHv4gkH/v3+AefvAuoSUFJUVYSIiQgD/YtFJyQrDVak1lyKAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/ability/actionbarimgs/lifepoints.data.png":
/*!*******************************************************!*\
  !*** ./src/ability/actionbarimgs/lifepoints.data.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_3635__) => {

module.exports=(__nested_webpack_require_3635__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAFKSURBVChThZE9T8NADIZtX9I2AdokVEwIWoJYEEKMjCAx8A/4BaysLAjEwN9hQYhPMbMyI5aqHRCpQiu1iXq9w+mVqHyJV5Fj+318d8mhPNggBKPHSJ89tV+7xPncjDpcCzarY09pQLW/Cp2BqaFspwq2HyIf8HwrsHlkwkK1t8KJfh9gxTbNl1bSXQrWk54p2eLILg5367E0TfCsLJoZQ0xaGO3UOeul0i2OwB/KrREaJz3nd87I7UvwSmQ2/VfZAbKzviVcdKQ23W8qW+jjUM9OZb/Qq5ZM9y8xx5Eu2im/eI6nR/0vMktywph4pul5Wy4HrtNPNRFfQa5868t2ctoCUat4dx21wDRoB3VO5+tdJcPjJhTREou+R4A3saxXKPykizTmrpFOGrpANhGJMPD5ywXSfSxrHoU6o/lh7hbpqKEsURBEqOEDcNuAKOescgUAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/ability/actionbarimgs/lifepointspoison.data.png":
/*!*************************************************************!*\
  !*** ./src/ability/actionbarimgs/lifepointspoison.data.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_4666__) => {

module.exports=(__nested_webpack_require_4666__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAEzSURBVChTjZI9SwNBEIbfyXnnXZJLIggKRjCFCHb5Hf4IO/+FINjbWmlhZWdhJVyhNtYiRKOIqMUhOcyHkPu+cZc9ziSF5GGK+Xhnd4ZdugsMIii87sLZsW+ZHKVIY9rZ1bbaJVViBl25hgoUaYKTgzjLsHeol7Q8qSDnpeKNIxUsl2Xb22csrtlY14U/WaLze308kBOUG6yyMxRVOr2ZGuAf6OhyXmm+4DzQ/sXfnsaPXGWSyI5zrzhViEYDeGk8YyJZ9Jc6T3JxkVWxwB9JK1AlIdOWDAQVNJsUBlKRhEogHWH6ImoNPHbZvWVts43+MwIbtSr1fA4Yk2ab9PrO7jWbNmutbdna6zCtEk2/pGA4xIeTVeriE0Bba4EJhoGvB8YKWVYuEnz34TpZtY6MkYT4BQQSkh1bM5DyAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/ability/actionbarimgs/prayer.data.png":
/*!***************************************************!*\
  !*** ./src/ability/actionbarimgs/prayer.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_5625__) => {

module.exports=(__nested_webpack_require_5625__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAHxSURBVChTXZFLaxNhFIa/28x8mYmxjc2NtM1giNhEam2zEnXhykjBjSCCuy78Af4Df4F0VbeCgiu1duFCFNRQFDeWoITaJG3SlF4cp2YymczV06YE8SwOh/d9OO93+PD8vYXd77sKG+NiWKDcdnvTNy4Xb81/fbWy9mZVZNzxLMs2uu4BPc3SwMl8NCRFEMJyIjxbup6IjGJFaq3XAgtLoowxxT4hA46LCqMiol72UkFNq8IpN5PO5OYugEIJAxcYIrIQTCjApnU4NpW4VirFotIIU+JRDjMovX4HXGDoOfUKQoHjm8np9O2F+/EzHCE0EiaWHSgyU6dmttpVfWc/CBAdT+ZDsXD+6tzNO3eHHHQu4iM6xDLnL5qeqWl7+MHDJ9nZGXVchcQhNyzd8KHvaVaj1cDP1w4jAYE74H3/cYMCWne7TofRTCqPFR6RopAFiZB7ghzXYGtH9+utBsW/hc1q1TCN+ERWkYV/6ZP0X713K8ufXr6mZyeKTtdqr29sbf/MForD3QNuX7OePV788eGLY/TpZKpACCOIHmy2mjsbR/Tx7sG+p0uP6p8r8OEIfiwVyxGMMaGYEG27bWMvOZlzhP4f3X+7/KLyvswYB9/zbOJSw3YsmALfCzxUWS3XmjW4t96sfSt/BAV0cG3H+gvHq+CsjxcGZQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/ability/actionbarimgs/prayeron.data.png":
/*!*****************************************************!*\
  !*** ./src/ability/actionbarimgs/prayeron.data.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_6848__) => {

module.exports=(__nested_webpack_require_6848__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAHYSURBVChTXc9NaxNBGAfwnZnNzuxmd5OUbJNN0uiKCrah2EtVPLTQi+DNozc/ime/hHjTgwcPRQrtxR5EUVAEEdTQhrhtYvc1a/ctOz6aUkKfw7D8/z/mmUWPtnYy/tEyr9bKusQqYeSjHrK21vu778SviDEtjX03Cvr2d9KzVsBV1K6uGQTJkRIs3uoaqj5l2B14FdSkTBcEWaYENxrL4FSlSdDCJD0Vl2jbbJW0vN1sSZdk9zSGHFowWJcWETUEQXEmnlc/Wt1YM2q0KpaNBbq6cTNq2JBDCwYjXC0yNAp/uUb/zoO7IARBqKoYTviGBHJowZC16w8jeqLcSG/fX593TEJxysuyWLdaR5MD9yREj5/smb3OkmnOu/PxJgWcYycZ2DZ6/tnXOYb/gPddcLMB7eVRFopk+fIml4lGq7ALNsLeM/J/ZreGPj8cDskV6Z79w/bDca3VvqBnbuQkb3f2v+3+xIyqxFcO3xxvP3s5dpNzcfZKN4EcWjA4yQOOU0o090v86umLkRPP3fcvgRxaMORaZxNjxIVpqcSCYyfMvHqnm5WSwCv2t/fsDyNJVKDNpwnpNFYQwpgQgRdFwX3/t24ZOqsdDAefXr/HCRWxmBfpn9j9C/Fr4hM9D4PKAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/ability/actionbarimgs/sumpoints.data.png":
/*!******************************************************!*\
  !*** ./src/ability/actionbarimgs/sumpoints.data.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_8039__) => {

module.exports=(__nested_webpack_require_8039__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAJfSURBVChTDZHda9NgFMaTN23TdUm7ds3SpG36tdaum7IxmQNl4gc4v7Z5OdCJt4J388YL8U/YbkQQREGGV0OFgUNwDJUJbk7xe3UptaySreva9CtN3uT1vTs85/dwznMOmTl+2mg1zkxOf1pb4YToifFx1QQeN+OnbY/uzxt624mshq5rmkYJsV4LGgflPaeLAQDZnEwx+7NUVhmpd3R4bH31lWZCRJA2QFLdQsjt8zf2d8OJjBRPRo4MLs3fW11cqO0Wfan00LlJPhQ121qzWiZHxicxd3X2Lp7bKCn7B6qUTMoba3wk3unnCYJo1dUOxp1OpyhRDE7N3I73Sh/evFZyslYpO2m7QTlbWttB2+0OujsUpTtZjhVs2Kfs5ZbuzDVbrWCqP31sTIwnsFhV6zhcTBrAdVC0B4CDCkZiRfk36WKbpd3RqemJS5eR3c6ybCiQ9Hp6MFSrWW6WqiMTYMgbjmNrlxQTeC4nKxvv3iYkvpuxNFjW1HZV2Vl8sTx7/Ro1MXOzXms065WglBwYGvzy+ePeTmE7K2dl2c8EvF7m5bPHywsPTYSokfNXPCz7r5Dri4Y2N78qBdnUTdOCv9bfP38yR9Adq0uLDpcLAECdvXGrh/PtK6VKo21alofjXXzY2+UpFQvqQXX7x3eCJJGFTAhBxMcghBJDw3hdKRYXDvVzAh+OSIdPXUCWRdlsJAC4ZUId5L5trjx9kEklIn0ZnosFRBEfnOx0D/YdpSkAdfxX3dI1aJhUuVrLbm2dvDghCIIBoN8tFpUCw7JdPd5K/k8+/5cgSAgNCxr/AZQMC0FN97E9AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/ability/imgs/actionbarnumbers.data.png":
/*!****************************************************!*\
  !*** ./src/ability/imgs/actionbarnumbers.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9402__) => {

module.exports=(__nested_webpack_require_9402__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAIIAAAAICAMAAAAC9tdxAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAMUExURQAAAA8UFrN6LwAAAMHCSL8AAAAEdFJOU////wBAKqn0AAAACW5vUEUAAAAAAAAAAAChinLVAAAA90lEQVQ4T4WS2xLDIBBCXf3/fy4se9POtD7EExSCSdY5x2ybGeDY3sCHMISQIErL1aERbsKV5p1kRa3tzQpwrAi0tRTYpG2euDhc47JWoXjIt1ex3Jrk49Gw12N4R7NhVuAgbMM6yD35kCCluFaOIMXSG4SpqDV3axvNkCIQkCQfiGeICkV0xPugdlXw2HHBVISR2lsBKRndr5Xr1PjSpRW1A3NqbPinwijzVGBeRFMlMQ/nuzXsErV3aijzuwIgtaeCNwiiSvKz+z/TGvfHapUeGgDBvHVHXijHLU1BXqGOOai/rFv1IVobxKBX4yMiDGaNgots7w/2HAa69Wye5gAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/ability/imgs/settingscog.data.png":
/*!***********************************************!*\
  !*** ./src/ability/imgs/settingscog.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_10321__) => {

module.exports=(__nested_webpack_require_10321__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAADHSURBVChTY7y2O+y/NAcjw7ajbxgMNYUZpIQZGUDgyct3DIxPNzj/Z+JhBQuAwJev/8A0DzcTA9OhCx8Z/n/9zfD+3WeGs1feMaj47WQE4XNANuPJ+Y7/JQW+M1x68I/Bu+AkxEwoYAJJ/PnCgCEBAkzf3nyCMjEB041nDAy/fnxiOD3D7D9UDA6YXr58DmbwsXxFUXBmpvl/xkuTlP9DLPsGxFxgFgywnL/7joGV5T/DjUcMDKoy3xnE+FkZBHkZGG4++c0AAHRPSyvaocp9AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/ability/imgs/smallbarnumber.data.png":
/*!**************************************************!*\
  !*** ./src/ability/imgs/smallbarnumber.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11132__) => {

module.exports=(__nested_webpack_require_11132__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAMAAAAVv241AAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAASUExURQ8UFqBnC8qCDkc1FAAAAAAAAGC4B/sAAAAGdFJOU///////ALO/pL8AAAAJbm9QRQAAAAAAAAAAAKGKctUAAAA+SURBVBhXlY4xEgAgCMNoOf7/ZalwiqNZSBmgJsANyl3DeT1TeRTTw+htifHsP8I8ALYletqq8NR5iyoJYgHlIAI/8NoYcAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/ability/actionbar.ts":
/*!**********************************!*\
  !*** ./src/ability/actionbar.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_11771__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const a1lib = __importStar(__nested_webpack_require_11771__(/*! alt1/base */ "alt1/base"));
const base_1 = __nested_webpack_require_11771__(/*! alt1/base */ "alt1/base");
const OCR = __importStar(__nested_webpack_require_11771__(/*! alt1/ocr */ "alt1/ocr"));
var chatfont = __nested_webpack_require_11771__(/*! ../fonts/aa_8px.fontmeta.json */ "./src/fonts/aa_8px.fontmeta.json");
var imgs = (0, base_1.webpackImages)({
    dren: __nested_webpack_require_11771__(/*! ./actionbarimgs/dren.data.png */ "./src/ability/actionbarimgs/dren.data.png"),
    drenretal: __nested_webpack_require_11771__(/*! ./actionbarimgs/drenretal.data.png */ "./src/ability/actionbarimgs/drenretal.data.png"),
    lifepoints: __nested_webpack_require_11771__(/*! ./actionbarimgs/lifepoints.data.png */ "./src/ability/actionbarimgs/lifepoints.data.png"),
    lifepointspoison: __nested_webpack_require_11771__(/*! ./actionbarimgs/lifepointspoison.data.png */ "./src/ability/actionbarimgs/lifepointspoison.data.png"),
    prayer: __nested_webpack_require_11771__(/*! ./actionbarimgs/prayer.data.png */ "./src/ability/actionbarimgs/prayer.data.png"),
    prayeron: __nested_webpack_require_11771__(/*! ./actionbarimgs/prayeron.data.png */ "./src/ability/actionbarimgs/prayeron.data.png"),
    sumpoints: __nested_webpack_require_11771__(/*! ./actionbarimgs/sumpoints.data.png */ "./src/ability/actionbarimgs/sumpoints.data.png"),
});
class ActionbarReader {
    constructor() {
        this.pos = null;
    }
    find(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        if (!img) {
            return false;
        }
        var sumpos = img.findSubimage(imgs.sumpoints);
        if (sumpos.length == 0) {
            return false;
        }
        var hppos = img.findSubimage(imgs.lifepoints);
        if (hppos.length == 0) {
            hppos = img.findSubimage(imgs.lifepointspoison);
        }
        if (hppos.length == 0) {
            return false;
        }
        var layout = null;
        for (var a in ActionbarReader.layouts) {
            var l = ActionbarReader.layouts[a];
            if (sumpos[0].x - hppos[0].x == l.sum.x - l.hp.x && sumpos[0].y - hppos[0].y == l.sum.y - l.hp.y) {
                layout = l;
                break;
            }
        }
        if (!layout) {
            return false;
        }
        this.pos = {
            x: hppos[0].x - layout.hp.x,
            y: hppos[0].y - layout.hp.y,
            layout: layout
        };
        return true;
    }
    read(buffer, bufx, bufy) {
        if (!this.pos) {
            throw new Error("interface is not found yet");
        }
        if (!buffer) {
            //TODO fix the capture dimensions!!!
            let fixoffset = 10;
            buffer = a1lib.capture(this.pos.x, this.pos.y - fixoffset, this.pos.layout.width, this.pos.layout.height + fixoffset);
            bufx = this.pos.x;
            bufy = this.pos.y - fixoffset;
        }
        var dx = this.pos.x - bufx;
        var dy = this.pos.y - bufy;
        var hptext = this.readBarNumber(buffer, this.pos.layout.hp.x + dx, this.pos.layout.hp.y + dy, this.pos.layout.hor);
        var drentext = this.readBarNumber(buffer, this.pos.layout.dren.x + dx, this.pos.layout.dren.y + dy, this.pos.layout.hor);
        var sumtext = this.readBarNumber(buffer, this.pos.layout.sum.x + dx, this.pos.layout.sum.y + dy, this.pos.layout.hor);
        var praytext = this.readBarNumber(buffer, this.pos.layout.pray.x + dx, this.pos.layout.pray.y + dy, this.pos.layout.hor);
        var hpbar = this.readBar(buffer, this.pos.layout.hp.x + dx, this.pos.layout.hp.y + dy, this.pos.layout.hor);
        var drenbar = this.readBar(buffer, this.pos.layout.dren.x + dx, this.pos.layout.dren.y + dy, this.pos.layout.hor);
        var praybar = this.readBar(buffer, this.pos.layout.pray.x + dx, this.pos.layout.pray.y + dy, this.pos.layout.hor);
        var sumbar = this.readBar(buffer, this.pos.layout.sum.x + dx, this.pos.layout.sum.y + dy, this.pos.layout.hor);
        return {
            hp: (hptext ? hptext.cur / hptext.max : hpbar),
            dren: (drentext ? drentext.cur / drentext.max : drenbar),
            sum: (sumtext ? sumtext.cur / sumtext.max : sumbar),
            pray: (praytext ? praytext.cur / praytext.max : praybar),
            exacthp: hptext,
            exactdren: drentext,
            exactpray: praytext,
            exactsum: sumtext
        };
    }
    readBarNumber(buffer, x, y, hor) {
        if (hor) {
            var line = OCR.readLine(buffer, chatfont, [255, 255, 255], x + 22, y + 5, true, false);
            var m = line.text.match(/^(\d+)(\/(\d+)|%)$/);
            if (m) {
                return { cur: +m[1], max: (m[2] == "%" ? 100 : +m[3]) };
            }
        }
        return null;
    }
    readBar(buffer, x, y, hor) {
        if (!this.pos) {
            throw new Error("interface not found yet");
        }
        if (hor) {
            x += 25;
            y += 11;
        }
        else {
            x += 7;
            y += 26;
        }
        var width = this.pos.layout.barlength;
        for (var b = 0; b < width; b++) {
            var i = buffer.pixelOffset(x + (hor ? b : 0), y + (hor ? 0 : b));
            if (a1lib.ImageDetect.coldif(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], 25, 31, 34, 255) < 20) {
                break;
            }
        }
        return b / width;
    }
    static getCurrentLayoutData(img) {
        img !== null && img !== void 0 ? img : (img = a1lib.captureHoldFullRs());
        var matches = {
            hp: a1lib.findSubimage(img, imgs.lifepoints)[0],
            dren: a1lib.findSubimage(img, imgs.dren)[0],
            pray: a1lib.findSubimage(img, imgs.prayer)[0],
            sum: a1lib.findSubimage(img, imgs.sumpoints)[0]
        };
        var layout = {
            hp: { x: matches.hp.x - matches.hp.x, y: matches.hp.y - matches.hp.y },
            dren: { x: matches.dren.x - matches.hp.x, y: matches.dren.y - matches.hp.y },
            pray: { x: matches.pray.x - matches.hp.x, y: matches.pray.y - matches.hp.y },
            sum: { x: matches.sum.x - matches.hp.x, y: matches.sum.y - matches.hp.y }
        };
        return JSON.stringify(layout);
    }
}
ActionbarReader.layouts = {
    mainflat: { hp: { x: 0, y: 0 }, dren: { x: 119, y: 0 }, pray: { x: 238, y: 0 }, sum: { x: 357, y: 0 }, width: 470, height: 25, hor: true, barlength: 80, type: "mainflat" },
    mainhor: { hp: { x: 0, y: 0 }, dren: { x: 102, y: 0 }, pray: { x: 16, y: 22 }, sum: { x: 118, y: 22 }, width: 210, height: 45, hor: true, barlength: 62, type: "mainhor" },
    mainver: { hp: { x: 0, y: 0 }, dren: { x: 0, y: 100 }, pray: { x: 22, y: 16 }, sum: { x: 22, y: 116 }, width: 35, height: 210, hor: false, barlength: 62, type: "mainver" },
    maintower: { hp: { x: 0, y: 0 }, dren: { x: 0, y: 119 }, pray: { x: 0, y: 238 }, sum: { x: 0, y: 357 }, width: 20, height: 465, hor: false, barlength: 80, type: "maintower" }
};
exports["default"] = ActionbarReader;


/***/ }),

/***/ "./src/ability/index.ts":
/*!******************************!*\
  !*** ./src/ability/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_20009__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbilityState = exports.ActionbarReader = void 0;
const a1lib = __importStar(__nested_webpack_require_20009__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_20009__(/*! alt1/ocr */ "alt1/ocr"));
const actionbar_1 = __importDefault(__nested_webpack_require_20009__(/*! ./actionbar */ "./src/ability/actionbar.ts"));
const base_1 = __nested_webpack_require_20009__(/*! alt1/base */ "alt1/base");
var actionbar_2 = __nested_webpack_require_20009__(/*! ./actionbar */ "./src/ability/actionbar.ts");
Object.defineProperty(exports, "ActionbarReader", ({ enumerable: true, get: function () { return __importDefault(actionbar_2).default; } }));
;
var cdfont = __nested_webpack_require_20009__(/*! ../fonts/pixel_8px_digits.fontmeta.json */ "./src/fonts/pixel_8px_digits.fontmeta.json");
var hotkeyfont = __nested_webpack_require_20009__(/*! ../fonts/aa_8px.fontmeta.json */ "./src/fonts/aa_8px.fontmeta.json");
var imgs = (0, base_1.webpackImages)({
    settingscog: __nested_webpack_require_20009__(/*! ./imgs/settingscog.data.png */ "./src/ability/imgs/settingscog.data.png"),
    smallbarnumber: __nested_webpack_require_20009__(/*! ./imgs/smallbarnumber.data.png */ "./src/ability/imgs/smallbarnumber.data.png"),
    actionbarnumbers: __nested_webpack_require_20009__(/*! ./imgs/actionbarnumbers.data.png */ "./src/ability/imgs/actionbarnumbers.data.png")
});
var barnumimgs = null;
var barnummap = {};
imgs.promise.then(() => {
    barnumimgs = base_1.ImageDetect.ImageDataSet.fromFilmStrip(imgs.actionbarnumbers, 10);
    for (let a = 0; a < 13; a++) {
        barnummap[a] = (a + 1) + "";
    }
});
class AbilityReader {
    constructor(abilityimgs) {
        this.bars = [];
        this.mainbar = null;
        this.barstates = {};
        this.captureRect = null;
        this.actionbarReader = new actionbar_1.default();
        this.abilityimgs = null;
        this.lifestate = null;
        //event when ocluded bar is visible again, before any further reading happens
        this.hooks = {
            onbarshown: null
        };
        this.abilityimgs = abilityimgs;
    }
    find(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        this.bars = [];
        var locs = img.findSubimage(imgs.smallbarnumber);
        var cog = imgs.settingscog;
        for (var loc of locs) {
            for (var key in AbilityBar.types) {
                var t = AbilityBar.types[key];
                if (!t.cog) {
                    continue;
                }
                var rect = new base_1.Rect(loc.x - t.detect.x + t.cog.x, loc.y - t.detect.y + t.cog.y, cog.width, cog.height);
                if (base_1.Rect.fromArgs(img).contains(rect)) {
                    var buf = img.read(loc.x - t.detect.x + t.cog.x, loc.y - t.detect.y + t.cog.y, cog.width, cog.height);
                    if (buf.pixelCompare(cog) < 10) {
                        var bar = new AbilityBar(this, loc.x - t.detect.x, loc.y - t.detect.y, t, this.barstates);
                        bar.overlay();
                        this.bars.push(bar);
                        break;
                    }
                }
            }
        }
        this.actionbarReader.find(img);
        if (this.actionbarReader.pos) {
            var mainpos = this.actionbarReader.pos;
            var t = AbilityBar.types[mainpos.layout.type];
            var bar = new AbilityBar(this, mainpos.x - t.action.x, mainpos.y - t.action.y, AbilityBar.types[mainpos.layout.type], this.barstates);
            bar.overlay();
            this.bars.unshift(bar);
            this.mainbar = bar;
        }
        if (this.bars.length == 0) {
            return null;
        }
        this.captureRect = a1lib.Rect.fromArgs(this.bars[0].bounds);
        for (var i = 1; i < this.bars.length; i++) {
            this.captureRect.union(this.bars[i].bounds);
        }
        return this.bars.length;
    }
    getCaptAreas() {
        var r = {};
        for (var b in this.bars) {
            r["bar" + b] = this.bars[b].bounds;
        }
        return r;
    }
    /**
     * @deprecated kinda needs rewrite to be efficient, use readallslotsinner manually instead
     * @param img
     */
    readAllSlots(img) {
        var data;
        if (!this.captureRect) {
            throw new Error("no capturerect set ");
        }
        if (img instanceof base_1.ImgRef) {
            data = img.toData(this.captureRect.x, this.captureRect.y, this.captureRect.width, this.captureRect.height);
        }
        else {
            data = a1lib.capture(this.captureRect.x, this.captureRect.y, this.captureRect.width, this.captureRect.height);
        }
        var capts = {};
        var captareas = {};
        for (var a in this.bars) {
            capts["bar" + a] = data;
            captareas["bar" + a] = this.captureRect;
        }
        return this.readAllSlotsInner(capts, captareas);
    }
    readAllSlotsInner(capts, captareas) {
        var visiblebars = [];
        for (var b in this.bars) {
            var bar = this.bars[b];
            var capt = capts["bar" + b];
            var captarea = captareas["bar" + b];
            var nr = bar.readBarNr(capt, captarea.x, captarea.y);
            if (!nr) {
                continue;
            }
            var state = this.barstates[nr];
            visiblebars.push(state);
            if (!state.visible && this.hooks.onbarshown) {
                this.hooks.onbarshown(state);
            }
            for (var a = 0; a < bar.slots.length; a++) {
                state.slots[a].readAbility(capt, bar.slots[a].x - captarea.x, bar.slots[a].y - captarea.y);
            }
        }
        for (var id in this.barstates) {
            var barstate = this.barstates[id];
            barstate.visible = visiblebars.indexOf(this.barstates[id]) != -1;
        }
    }
    finishTick() {
        for (var b in this.barstates) {
            var bar = this.barstates[b];
            for (var slot of bar.slots) {
                slot.lastcooldown = slot.cooldown;
                slot.lasttickcooldown = slot.tickcooldown;
            }
        }
    }
    readLife(buffer, bufx, bufy) {
        if (this.actionbarReader.pos == null) {
            return null;
        }
        this.lifestate = this.actionbarReader.read(buffer, bufx, bufy);
        return this.lifestate;
    }
    overlayState() {
        alt1.overLaySetGroup("abildebug");
        alt1.overLayFreezeGroup("abildebug");
        alt1.overLayClearGroup("abildebug");
        for (var bar of this.bars) {
            var state = this.barstates[bar.barid];
            if (state) {
                for (var a = 0; a < bar.slots.length; a++) {
                    state.slots[a].overlayState(bar.slots[a].x, bar.slots[a].y);
                }
            }
        }
        alt1.overLayRefreshGroup("abildebug");
    }
    *visibleAbilities() {
        for (var bar of this.bars) {
            if (bar.barid) {
                yield* this.barstates[bar.barid].slots;
            }
        }
    }
    *allAbilities() {
        for (var barid in this.barstates) {
            var bar = this.barstates[barid];
            yield* bar.slots;
        }
    }
    *mainbarAbilities() {
        if (this.mainbar) {
            var bar = this.barstates[this.mainbar.barid];
            if (bar) {
                yield* bar.slots;
            }
        }
    }
    *allslots() {
        for (var bar of this.bars) {
            yield* bar.slots;
        }
    }
}
AbilityReader.imgs = {
    smallbarnumber: null,
    settingscog: null
};
exports["default"] = AbilityReader;
;
class AbilityBarSlot {
    constructor(x, y, index, bar) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.bar = bar;
    }
    getState() {
        return this.bar.barstates[this.bar.barid].slots[this.index];
    }
}
class AbilityBar {
    constructor(reader, x, y, layout, barstates) {
        this.barid = ""; //TODO find out when and where this is assigned, currently no proper initialization
        this.slots = [];
        this.reader = reader;
        this.layout = layout;
        this.barstates = barstates;
        this.x = x;
        this.y = y;
        var bounds = new base_1.Rect(this.x + layout.num.x, this.y + layout.num.y, 10, 15);
        var cx = x;
        var cy = y;
        for (var a = 0; a < layout.length; a++) {
            this.slots.push(new AbilityBarSlot(cx, cy, a, this));
            bounds.union(new base_1.Rect(cx, cy, AbilityState.iconwidth, AbilityState.iconheight));
            cx += layout.step.x;
            cy += layout.step.y;
            if ((a + 1) % layout.rowlen == 0) {
                cx += layout.rowstep.x - layout.rowlen * layout.step.x;
                cy += layout.rowstep.y - layout.rowlen * layout.step.y;
            }
        }
        if (layout.action) {
            var mainlayout = actionbar_1.default.layouts[layout.id];
            var mainrect = new a1lib.Rect(x + layout.action.x, y + layout.action.y, mainlayout.width, mainlayout.height);
            mainrect.inflate(10, 10);
            bounds.union(mainrect);
        }
        this.bounds = bounds;
    }
    readBarNr(buffer, bufx, bufy) {
        let match = barnumimgs.matchBest(buffer, this.x + this.layout.num.x - bufx, this.y + this.layout.num.y - bufy);
        //1st secondary ability bar has one pixel offset!!@#!@#
        match = match || barnumimgs.matchBest(buffer, this.x + this.layout.num.x - bufx, this.y + this.layout.num.y - bufy - 1);
        if (!match) {
            return "";
        }
        this.barid = barnummap[match.index];
        if (!this.barstates[this.barid]) {
            this.barstates[this.barid] = { barid: this.barid, slots: [], visible: false };
            for (var b = 0; b < this.layout.length; b++) {
                this.barstates[this.barid].slots[b] = new AbilityState(this.reader);
            }
        }
        return this.barid;
    }
    overlay() {
        if (a1lib.hasAlt1) {
            alt1.overLayRect(a1lib.mixColor(255, 255, 255), this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height, 3000, 2);
        }
    }
}
AbilityBar.types = {
    flat: { id: "flat", sec: true, step: { x: 36, y: 0 }, rowstep: { x: 0, y: 0 }, rowlen: 14, length: 14, cog: { x: 504, y: 17 }, detect: { x: 501, y: -2 }, num: { x: 503, y: 2 } },
    hor: { id: "hor", sec: true, step: { x: 35, y: 0 }, rowstep: { x: 0, y: 35 }, rowlen: 7, length: 14, cog: { x: 245, y: 54 }, detect: { x: 242, y: -1 }, num: { x: 244, y: 3 } },
    ver: { id: "ver", sec: true, step: { x: 0, y: 35 }, rowstep: { x: 35, y: 0 }, rowlen: 7, length: 14, cog: { x: 56, y: 245 }, detect: { x: -3, y: 242 }, num: { x: -1, y: 246 } },
    tower: { id: "tower", sec: true, step: { x: 0, y: 36 }, rowstep: { x: 0, y: 0 }, rowlen: 14, length: 14, cog: { x: 20, y: 504 }, detect: { x: -3, y: 501 }, num: { x: -1, y: 505 } },
    mainflat: { id: "mainflat", sec: false, step: { x: 36, y: 0 }, rowstep: { x: 0, y: 0 }, rowlen: 14, length: 14, detect: { x: 12, y: -29 }, action: { x: 54, y: -31 }, num: { x: 14, y: -25 } },
    mainhor: { id: "mainhor", sec: false, step: { x: 36, y: 0 }, rowstep: { x: 0, y: 36 }, rowlen: 7, length: 14, detect: { x: 10, y: -45 }, action: { x: 43, y: -47 }, num: { x: 12, y: -41 } },
    mainver: { id: "mainver", sec: false, step: { x: 0, y: 35 }, rowstep: { x: 35, y: 0 }, rowlen: 7, length: 14, detect: { x: 84, y: 232 }, action: { x: 75, y: 10 }, num: { x: 86, y: 236 } },
    maintower: { id: "maintower", sec: false, step: { x: 0, y: 36 }, rowstep: { x: 0, y: 0 }, rowlen: 14, length: 14, detect: { x: 40, y: 15 }, action: { x: 43, y: 45 }, num: { x: 42, y: 19 } },
};
class AbilityState {
    constructor(reader) {
        //internal
        this.nextdetecttry = 0; //timestamp of next ability read attempt
        //stateful
        this.lastcooldown = -1; //cooldown at last confirmed tick
        this.lasttickcooldown = -1; //number of ticks cooldown on last comfirmed read
        this.tickcooldown = 0; //number of ticks left on cooldown
        this.cdchange = 0; //cd change since last tick
        this.gcd = true; //current cooldown is coused by global cooldown and is 1.8sec
        this.donetime = 0; //timestamp of when cd will be done
        this.hadcd = false; //has been on cooldown in the last minute
        //only function of pixel
        this.cooldown = 0; //current visible cooldown (whole sec)
        this.available = false; //false if the ability can't be used even when off cd (wrong weapon)
        this.cdfraction = -1; //fraction of cooldown completed as read by darker pixel clock
        this.ability = null; //the detected ability 
        this.hotkey = ""; //hotkey text of ability
        this.reader = null;
        this.debug = null;
        this.reader = reader;
    }
    readAbility(data, x, y) {
        var res = OCR.readLine(data, cdfont, [206, 213, 135], x + 31, y + 8, false, true);
        var t = 0;
        if (res.text == "") {
            //don't trust a failed read as "0", only read it as 0 if we have a pixel match on the icon in the cd area
            var allow = this.cooldown <= 1 || this.ability && this.confirmCdArea(data, x, y);
            t = (allow ? 0 : Math.ceil((this.lasttickcooldown - 1) * 0.6));
        }
        else if (res.text.endsWith("m")) {
            t = 60 * +res.text.slice(0, -1);
        }
        else {
            t = +res.text;
        }
        var now = Date.now();
        this.cdchange = (this.lastcooldown != -1 ? t - this.lastcooldown : 0);
        this.cooldown = t;
        if (this.cdchange >= 1) {
            this.gcd = this.cooldown <= 2;
        }
        if (this.cooldown != Math.ceil((this.lasttickcooldown - 1) * 0.6)) {
            var tickcd = Math.floor(this.cooldown / 0.6);
            //detect 2nd tick in same second
            if (this.cooldown != 0 && this.cdchange == 0 && Math.ceil(tickcd * 0.6) == Math.ceil((tickcd - 1) * 0.6)) {
                tickcd--;
            }
            this.tickcooldown = tickcd;
        }
        else {
            this.tickcooldown--;
        }
        if (this.cooldown != 0) {
            this.donetime = now + this.cooldown * 1000;
        }
        this.hadcd = this.donetime - now > -60 * 1000;
        this.cdfraction = -1;
        this.debug = null;
        if (!this.ability && this.nextdetecttry < now) {
            this.ability = this.getAbility(data, x, y);
            this.nextdetecttry = now + 1000 * 20 * (1 + Math.random()); //5-10 sec delay to spread load
        }
        if (this.ability) {
            this.readClock(data, x, y);
            if (!this.hotkey && this.available) {
                this.readhotkey(data, x, y);
            }
        }
        //if (this.ability && this.ability.id == "immortality") { console.log(this.tickcooldown, this.cooldown, this.cdchange); }
    }
    confirmCdArea(buffer, x, y) {
        var icon = this.ability.icon;
        for (var dy = 1; dy < 10; dy++) {
            for (var dx = 24; dx < 30; dx++) {
                var i1 = (x + dx) * 4 + (y + dy) * 4 * buffer.width;
                var i2 = dx * 4 + dy * 4 * icon.width;
                //calculate portion of icon color vs pure white per channel
                var gradr = (255 - buffer.data[i1]) / (255 - icon.data[i2]);
                var gradg = (255 - buffer.data[i1 + 1]) / (255 - icon.data[i2 + 1]);
                var gradb = (255 - buffer.data[i1 + 2]) / (255 - icon.data[i2 + 2]);
                //if it's a pure mix of white and the icon, all channels will have the same portion of white
                var d = Math.max(gradr, gradg, gradb) - Math.min(gradr, gradg, gradb);
                if (d > 0.25) {
                    return false;
                }
            }
        }
        return true;
    }
    readClock(buf, abilx, abily) {
        var alpha = 0.20;
        var size = 30;
        var template = this.ability.icon;
        var dirs = [
            { n: size / 2, ox: size / 2, oy: 0, sx: 1, sy: 0 },
            { n: size, ox: size - 1, oy: 1, sx: 0, sy: 1 },
            { n: size, ox: size - 1, oy: size - 1, sx: -1, sy: 0 },
            { n: size, ox: 0, oy: size - 1, sx: 0, sy: -1 },
            { n: size / 2, ox: 0, oy: 0, sx: 1, sy: 0 }
        ];
        var pixels = 0;
        var nbright = 0;
        var nmatch = 0;
        var lastbright = 0;
        var streak = 10;
        var lumpixels = 0;
        var lummatch = 0;
        var nwhite = 0;
        if (AbilityState.overlayState) {
            this.debug = new ImageData(30, 30);
        }
        for (var dir of dirs) {
            for (var a = 0; a < dir.n; a++) {
                var x = dir.ox + a * dir.sx;
                var y = dir.oy + a * dir.sy;
                var i1 = (abilx + x) * 4 + (abily + y) * buf.width * 4;
                var i2 = x * 4 + y * template.width * 4;
                var lum = template.data[i2] + template.data[i2 + 1] + template.data[i2 + 2];
                var imglum = buf.data[i1] + buf.data[i1 + 1] + buf.data[i1 + 2];
                var d1 = Math.abs(buf.data[i1] - template.data[i2]) + Math.abs(buf.data[i1 + 1] - template.data[i2 + 1]) + Math.abs(buf.data[i1 + 2] - template.data[i2 + 2]);
                var d2 = Math.abs(buf.data[i1] - template.data[i2] * alpha) + Math.abs(buf.data[i1 + 1] - template.data[i2 + 1] * alpha) + Math.abs(buf.data[i1 + 2] - template.data[i2 + 2] * alpha);
                var match = d1 < 5 || d2 < 5;
                if (match) {
                    if (d1 < d2) {
                        if (d2 >= 5) {
                            streak++;
                            nbright++;
                        }
                        if (streak > 5) {
                            lastbright = pixels;
                        }
                    }
                    else {
                        streak = 0;
                    }
                    nmatch++;
                }
                if (lum > 30) {
                    if (match) {
                        lummatch++;
                    }
                    lumpixels++;
                }
                if (imglum > 70 * 3) {
                    nwhite++;
                }
                //this.debug.setPixel(x, y, [d1, d2, 0, 255]);
                if (AbilityState.overlayState) {
                    this.debug.setPixel(x, y, (d1 < 5 || d2 < 5 ? (d1 < d2 ? [255, 255, 255, 255] : [128, 128, 128, 255]) : [255, 0, 0, 255]));
                }
                pixels++;
            }
        }
        lastbright = Math.max(lastbright, nbright);
        this.cdfraction = -1;
        outer: for (var dir of dirs) {
            if (lastbright > dir.n) {
                lastbright -= dir.n;
            }
            else {
                var x = dir.ox + dir.sx * lastbright - size / 2;
                var y = dir.oy + dir.sy * lastbright - size / 2;
                if (AbilityState.overlayState) {
                    this.debug.setPixel(x + size / 2, y + size / 2, [0, 255, 255, 255]);
                }
                var angle = Math.atan2(y, x);
                this.cdfraction = (1.25 + angle / Math.PI / 2) % 1;
                break outer;
            }
        }
        var avail = false;
        if (lummatch / lumpixels > 0.5) {
            if (this.cooldown == 2 && this.cdchange != 0) {
                avail = true;
            }
            else if (this.cdfraction > 0.2) {
                avail = true;
            }
            else if (this.gcd && this.cooldown > 2) {
                avail = true;
            }
            else if (!this.gcd && this.cooldown > this.ability.cooldown * 0.6) {
                avail = true;
            }
        }
        if (avail) {
            this.available = true;
        }
        else if (nwhite / pixels < 0.7) {
            this.available = false;
        } //keep old value if the icon is flashed white
    }
    readhotkey(buf, abilx, abily) {
        var col = [255, 255, 255];
        var line1 = OCR.readLine(buf, hotkeyfont, col, abilx + 2, abily + 26, true, false);
        if (line1.text) {
            var line2 = OCR.readLine(buf, hotkeyfont, col, abilx + 2, abily + 15, true, false);
            if (line2.text) {
                this.hotkey = line2.text + " " + line1.text;
            }
            else {
                this.hotkey = line1.text;
            }
        }
    }
    overlayState(x, y) {
        if (this.available) {
            var angle = (0.75 + this.cdfraction) * Math.PI * 2;
            alt1.overLayLine(a1lib.mixColor(255, 0, 0), 1, x + 15, y + 15, x + 15 + Math.round(Math.cos(angle) * 15), y + 15 + Math.round(Math.sin(angle) * 15), 600);
        }
        if (!this.available) {
            alt1.overLayRect((this.ability ? a1lib.mixColor(255, 0, 0) : a1lib.mixColor(1, 1, 1)), x - 1, y - 1, 32, 32, 600, 1);
        }
        alt1.overLayText(this.tickcooldown + "", a1lib.mixColor(255, 255, 0), 7, x, y, 600);
        //alt1.overLayText(this.matchpercent.toFixed(2), a1lib.mixColor(255, 255, 0), 7, x, y, 600);
        //alt1.overLayText(this.cdfraction.toFixed(2), a1lib.mixColor(255, 255, 0), 7, x, y + 15, 600);
        //if (this.cooldown != 0 && this.gcd) { alt1.overLayText("gcd", a1lib.mixColor(255, 255, 0), 8, x, y, 600); }
        //alt1.overLayText(this.hotkey || "?", a1lib.mixColor(255, 255, 255), 11, x + 12, y + 12, 600);
        //if (this.debug) { alt1.overLayImage(x, y, a1lib.encodeImageString(this.debug), this.debug.width, 600); }
    }
    getAbility(buf, abilx, abily) {
        var a = 0.20;
        var best = null;
        var bestscore = 30 * 30 * 10;
        for (var abil of this.reader.abilityimgs) {
            var icon = abil.icon;
            var score = 0;
            for (var x = 0; x < 30; x++) {
                for (var y = 0; y < 30; y++) {
                    var i1 = (x + abilx) * 4 + (y + abily) * 4 * buf.width;
                    var i2 = x * 4 + y * 4 * icon.width;
                    var d1 = Math.abs(buf.data[i1] - icon.data[i2]) + Math.abs(buf.data[i1 + 1] - icon.data[i2 + 1]) + Math.abs(buf.data[i1 + 2] - icon.data[i2 + 2]);
                    var d2 = Math.abs(buf.data[i1] - icon.data[i2] * a) + Math.abs(buf.data[i1 + 1] - icon.data[i2 + 1] * a) + Math.abs(buf.data[i1 + 2] - icon.data[i2 + 2] * a);
                    var d = Math.min(d1, d2, 20);
                    score += d;
                }
            }
            if (score < bestscore) {
                bestscore = score;
                best = abil;
            }
        }
        return best;
    }
}
exports.AbilityState = AbilityState;
AbilityState.iconwidth = 30 + 1; //the cooldown text overlays the box by one pixel
AbilityState.iconheight = 30 + 1; //also need one extra px here to read the hotkey
AbilityState.overlayState = false;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/aa_8px.fontmeta.json":
/*!****************************************!*\
  !*** ./src/fonts/aa_8px.fontmeta.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":140,"chr":"a","pixels":[0,7,187,255,1,3,221,255,1,6,169,255,1,7,164,132,1,8,255,255,2,3,255,255,2,4,221,0,2,5,196,243,2,7,170,0,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,5,255,255,3,6,187,0,3,8,221,255,3,9,255,0,4,4,254,239,4,5,255,255,4,6,254,204,4,7,255,255,4,8,240,253,4,9,221,0,5,5,240,36,5,6,255,34,5,7,211,41,5,8,255,34,5,9,238,0],"secondary":false},{"width":7,"bonus":175,"chr":"b","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,248,209,1,4,243,178,1,5,230,75,1,6,230,75,1,7,243,178,1,8,246,194,1,9,204,0,2,3,255,255,2,4,204,0,2,5,170,0,2,8,255,255,2,9,187,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,169,255,4,4,254,171,4,7,169,255,4,9,255,0,5,4,204,128,5,5,232,205,5,6,205,233,5,8,170,0,6,6,187,0,6,7,187,0],"secondary":false},{"width":7,"bonus":95,"chr":"c","pixels":[0,5,169,255,0,6,187,255,1,4,187,255,1,6,193,90,1,7,237,201,1,8,164,185,2,3,255,255,2,5,187,0,2,8,255,255,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,221,255,4,4,255,34,4,8,221,255,4,9,255,0,5,4,226,39,5,9,221,0],"secondary":false},{"width":7,"bonus":180,"chr":"d","pixels":[0,5,187,255,0,6,187,255,1,4,169,255,1,6,205,85,1,7,232,187,1,8,203,213,2,3,255,255,2,5,170,0,2,8,255,255,2,9,170,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,203,255,4,4,254,171,4,7,169,255,4,8,187,255,4,9,255,0,5,1,203,255,5,2,225,251,5,3,225,251,5,4,248,227,5,5,244,231,5,6,230,245,5,7,230,245,5,8,237,219,5,9,187,0,6,2,204,0,6,3,221,0,6,4,221,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":7,"bonus":135,"chr":"e","pixels":[0,5,187,255,0,6,169,255,1,4,187,255,1,5,255,255,1,6,209,104,1,7,237,219,2,3,255,255,2,5,255,255,2,6,255,0,2,8,255,255,3,3,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,3,187,255,4,4,255,119,4,5,255,255,4,6,255,0,4,8,221,255,4,9,255,0,5,4,224,155,5,5,227,229,5,6,255,0,5,9,221,0,6,6,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"f","pixels":[0,3,203,255,1,2,221,255,1,3,255,255,1,4,248,227,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,2,1,255,255,2,3,255,255,2,4,255,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0,3,2,255,0,3,4,255,0],"secondary":false},{"width":7,"bonus":200,"chr":"g","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,232,187,1,8,184,189,1,11,153,255,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,11,245,247,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,3,11,221,255,4,3,221,255,4,4,255,136,4,7,153,255,4,8,221,255,4,9,255,85,4,10,203,255,5,3,203,255,5,4,250,226,5,5,239,236,5,6,230,245,5,7,230,245,5,8,241,234,5,9,243,178,5,11,204,0,6,4,204,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,221,0,6,10,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"h","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,243,178,1,4,248,209,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,170,0,2,5,204,0,3,3,255,255,3,4,255,0,4,3,169,255,4,4,255,221,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,175,25,5,5,226,39,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0],"secondary":false},{"width":3,"bonus":70,"chr":"i","pixels":[0,1,237,255,0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,238,0,1,4,211,41,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"j","pixels":[0,11,153,255,1,11,169,255,2,1,203,255,2,3,203,255,2,4,225,251,2,5,225,251,2,6,225,251,2,7,225,251,2,8,225,251,2,9,225,251,3,2,204,0,3,4,204,0,3,5,221,0,3,6,221,0,3,7,221,0,3,8,221,0,3,9,221,0,3,10,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"k","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,166,235,2,5,255,255,2,6,255,221,3,3,203,255,3,5,153,0,3,6,255,51,3,7,250,226,3,8,160,217,4,4,204,0,4,8,239,145],"secondary":false},{"width":3,"bonus":75,"chr":"l","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,2,9,255,0],"secondary":false},{"width":10,"bonus":210,"chr":"m","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,153,255,4,4,255,255,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,228,209,5,5,255,68,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0,6,3,255,255,6,5,187,0,7,3,237,255,7,4,255,85,8,4,249,174,8,5,232,243,8,6,225,251,8,7,225,251,8,8,210,247,9,5,170,0,9,6,221,0,9,7,221,0,9,8,221,0,9,9,204,0],"secondary":false},{"width":7,"bonus":140,"chr":"n","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,237,255,4,4,255,85,5,4,249,174,5,5,232,243,5,6,225,251,5,7,225,251,5,8,210,247,6,5,170,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":8,"bonus":120,"chr":"o","pixels":[0,5,187,255,0,6,169,255,1,4,203,255,1,6,209,104,1,7,244,231,2,3,237,255,2,5,204,0,2,8,252,241,3,3,255,255,3,4,238,0,3,8,255,255,3,9,238,0,4,3,237,255,4,4,255,0,4,8,255,255,4,9,255,0,5,4,251,207,5,7,221,255,5,9,255,0,6,5,237,183,6,6,192,225,6,8,221,0,7,6,170,0,7,7,170,0],"secondary":false},{"width":6,"bonus":170,"chr":"p","pixels":[0,3,237,255,0,4,255,255,0,5,187,255,0,6,203,255,0,7,255,255,0,8,221,255,0,9,221,255,0,10,221,255,1,3,255,255,1,4,240,36,1,5,255,0,1,6,187,0,1,7,211,41,1,8,254,239,1,9,221,0,1,10,221,0,1,11,221,0,2,3,255,255,2,4,255,0,2,8,255,255,2,9,238,0,3,3,237,255,3,4,255,34,3,8,237,255,3,9,255,0,4,4,253,240,4,5,255,255,4,6,255,255,4,7,237,255,4,9,238,0,5,5,239,18,5,6,255,17,5,7,255,0,5,8,238,0],"secondary":false},{"width":7,"bonus":165,"chr":"q","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,228,171,1,8,209,207,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,9,170,0,3,3,237,255,3,4,255,17,3,8,237,255,3,9,255,0,4,3,255,255,4,4,255,255,4,5,191,250,4,6,187,255,4,7,255,255,4,8,239,254,4,9,253,223,4,10,221,255,5,4,255,34,5,5,255,34,5,6,196,45,5,7,196,45,5,8,255,34,5,9,240,36,5,10,226,39,5,11,221,0],"secondary":false},{"width":4,"bonus":85,"chr":"r","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,3,187,255,1,4,244,213,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,187,0,2,5,204,0,3,4,255,0],"secondary":false},{"width":6,"bonus":100,"chr":"s","pixels":[0,4,187,255,1,3,255,255,1,5,250,243,1,8,255,255,2,3,255,255,2,4,255,0,2,5,155,196,2,6,246,123,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,6,245,247,3,7,164,132,3,8,255,255,3,9,255,0,4,4,255,17,4,7,250,191,4,9,255,0,5,8,187,0],"secondary":false},{"width":5,"bonus":80,"chr":"t","pixels":[1,2,221,255,1,3,255,255,1,4,235,240,1,5,221,255,1,6,221,255,1,7,169,255,2,3,255,255,2,4,255,34,2,5,226,39,2,6,226,39,2,7,232,93,2,8,249,243,3,4,255,0,3,8,187,209,3,9,238,0,4,9,153,0],"secondary":false},{"width":6,"bonus":135,"chr":"u","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,169,255,1,4,211,41,1,5,226,39,1,6,226,39,1,7,232,93,1,8,249,243,2,8,255,255,2,9,238,0,3,8,203,255,3,9,255,0,4,3,203,255,4,4,221,255,4,5,221,255,4,6,203,255,4,7,255,255,4,8,228,247,4,9,204,0,5,4,211,41,5,5,226,39,5,6,226,39,5,7,211,41,5,8,255,34,5,9,221,0],"secondary":false},{"width":6,"bonus":95,"chr":"v","pixels":[0,3,237,255,1,4,247,141,1,5,245,247,1,6,203,255,2,6,241,54,2,7,255,255,2,8,255,255,3,5,153,255,3,6,255,255,3,7,173,226,3,8,255,51,3,9,255,0,4,3,237,255,4,4,203,255,4,6,153,0,4,7,255,0,4,8,153,0,5,4,238,0,5,5,204,0],"secondary":false},{"width":10,"bonus":170,"chr":"w","pixels":[1,3,153,255,1,4,243,249,1,5,187,255,2,4,153,0,2,5,243,71,2,6,228,171,2,7,243,249,2,8,187,255,3,6,217,239,3,7,248,244,3,8,248,157,3,9,187,0,4,3,169,255,4,4,255,255,4,7,204,0,4,8,238,0,4,9,153,0,5,4,244,231,5,5,255,221,5,6,191,159,6,5,223,19,6,6,237,128,6,7,255,255,6,8,223,253,7,6,239,254,7,7,227,229,7,8,255,119,7,9,221,0,8,3,237,255,8,4,203,255,8,7,238,0,8,8,204,0,9,4,238,0,9,5,204,0],"secondary":false},{"width":6,"bonus":95,"chr":"x","pixels":[0,8,169,255,1,3,169,255,1,4,224,232,1,7,221,255,1,9,170,0,2,4,193,90,2,5,255,255,2,6,240,253,2,8,221,0,3,4,255,255,3,5,155,196,3,6,255,187,3,7,250,191,4,3,221,255,4,5,255,0,4,7,209,104,4,8,255,255,5,4,221,0,5,9,255,0],"secondary":false},{"width":6,"bonus":110,"chr":"y","pixels":[0,3,255,255,0,4,153,255,0,11,221,255,1,4,255,85,1,5,234,222,1,6,228,247,1,11,196,243,2,6,207,21,2,7,246,194,2,8,255,255,2,9,237,255,3,6,237,255,3,7,191,250,3,8,205,85,3,9,255,0,3,10,238,0,4,3,203,255,4,4,221,255,4,7,238,0,4,8,187,0,5,4,204,0,5,5,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"z","pixels":[0,3,153,255,0,8,203,255,1,3,255,255,1,4,153,0,1,7,221,255,1,8,255,255,1,9,204,0,2,3,255,255,2,4,255,0,2,6,255,255,2,8,255,255,2,9,255,0,3,3,255,255,3,4,254,171,3,5,169,255,3,7,255,0,3,8,255,255,3,9,255,0,4,3,255,255,4,4,255,119,4,5,170,0,4,6,170,0,4,8,255,255,4,9,255,0,5,4,255,0,5,9,255,0],"secondary":false},{"width":8,"bonus":155,"chr":"A","pixels":[0,8,153,255,1,6,221,255,1,7,237,255,1,9,153,0,2,3,169,255,2,4,255,255,2,5,187,255,2,6,255,255,2,7,221,0,2,8,238,0,3,1,255,255,3,2,255,255,3,4,170,0,3,5,255,0,3,6,255,255,3,7,255,0,4,2,255,255,4,3,254,239,4,4,184,189,4,6,255,255,4,7,255,0,5,3,255,34,5,4,247,141,5,5,255,255,5,6,255,255,5,7,255,102,6,6,255,85,6,7,255,187,6,8,255,255,7,8,187,0,7,9,255,0],"secondary":false},{"width":7,"bonus":225,"chr":"B","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,4,255,255,2,5,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,1,221,255,4,2,255,85,4,4,255,255,4,5,254,171,4,8,203,255,4,9,255,0,5,2,243,178,5,3,198,219,5,5,255,102,5,6,232,205,5,7,180,217,5,9,204,0,6,3,170,0,6,4,170,0,6,7,187,0,6,8,153,0],"secondary":false},{"width":9,"bonus":155,"chr":"C","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,3,153,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,224,232,2,1,169,255,2,3,221,0,2,4,153,0,2,7,194,135,2,8,237,183,3,1,255,255,3,2,170,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,169,255,6,2,255,102,6,8,169,255,6,9,255,0,7,2,181,48,7,9,170,0],"secondary":false},{"width":8,"bonus":200,"chr":"D","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,8,255,255,3,9,255,0,4,1,203,255,4,2,255,68,4,8,203,255,4,9,255,0,5,2,248,227,5,3,168,207,5,7,221,255,5,9,204,0,6,3,237,128,6,4,223,214,6,5,205,233,6,6,155,196,6,8,221,0,7,5,187,0,7,6,187,0],"secondary":false},{"width":6,"bonus":180,"chr":"E","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,1,153,255,4,2,255,0,4,6,255,0,4,8,221,255,4,9,255,0,5,2,153,0,5,9,221,0],"secondary":false},{"width":6,"bonus":135,"chr":"F","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,2,255,0,4,6,255,0],"secondary":false},{"width":9,"bonus":200,"chr":"G","pixels":[0,4,169,255,0,5,187,255,1,2,203,255,1,3,153,255,1,5,193,90,1,6,224,155,1,7,237,238,2,1,169,255,2,3,204,0,2,4,153,0,2,7,175,124,2,8,246,194,3,1,255,255,3,2,170,0,3,8,255,255,3,9,187,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,237,255,5,9,255,0,6,1,169,255,6,2,255,85,6,5,255,255,6,7,153,255,6,8,169,255,6,9,238,0,7,2,175,25,7,5,153,255,7,6,255,221,7,7,225,251,7,8,234,222,7,9,170,0,8,6,153,0,8,7,221,0,8,8,221,0,8,9,204,0],"secondary":false},{"width":8,"bonus":200,"chr":"H","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,5,255,255,2,6,255,0,3,5,255,255,3,6,255,0,4,5,255,255,4,6,255,0,5,5,255,255,5,6,255,34,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,255,221,6,7,225,251,6,8,210,247,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":4,"bonus":110,"chr":"I","pixels":[0,1,191,255,0,8,191,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,191,0,2,1,191,255,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,0,2,8,255,191,2,9,255,0,3,2,192,0,3,9,191,0],"secondary":false},{"width":6,"bonus":130,"chr":"J","pixels":[0,6,153,255,0,7,153,255,1,7,194,135,1,8,234,222,2,1,221,255,2,8,255,255,2,9,204,0,3,1,255,255,3,2,226,39,3,8,203,255,3,9,255,0,4,1,203,255,4,2,255,221,4,3,225,251,4,4,225,251,4,5,225,251,4,6,225,251,4,7,166,235,4,9,204,0,5,2,204,0,5,3,221,0,5,4,221,0,5,5,221,0,5,6,221,0,5,7,221,0,5,8,153,0],"secondary":false},{"width":7,"bonus":155,"chr":"K","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,255,255,2,5,255,102,3,3,221,255,3,5,254,171,3,6,224,232,4,1,203,255,4,2,153,255,4,4,221,0,4,6,193,90,4,7,251,242,4,8,173,226,5,2,204,0,5,3,153,0,5,8,247,141,5,9,153,0],"secondary":false},{"width":6,"bonus":115,"chr":"L","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,8,255,255,2,9,255,0,3,8,255,255,3,9,255,0,4,8,255,255,4,9,255,0,5,9,255,0],"secondary":false},{"width":9,"bonus":240,"chr":"M","pixels":[0,1,245,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,255,1,2,251,173,1,3,255,225,1,4,255,85,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,1,9,255,0,2,3,191,83,2,4,249,212,2,5,212,229,3,5,226,119,3,6,249,237,3,7,165,227,4,6,241,245,4,7,245,155,4,8,155,32,5,4,207,255,5,5,191,254,5,7,232,0,6,2,169,255,6,3,223,255,6,5,207,0,6,6,190,0,7,1,245,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,8,2,245,0,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"N","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,255,255,1,3,235,111,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,221,2,4,163,160,3,4,246,194,3,5,214,223,4,5,214,122,4,6,246,229,5,6,163,160,5,7,255,255,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,225,251,6,7,235,240,6,8,254,204,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":10,"bonus":200,"chr":"O","pixels":[0,4,187,255,0,5,169,255,1,2,203,255,1,3,153,255,1,5,205,85,1,6,226,192,1,7,224,232,2,1,153,255,2,3,204,0,2,4,153,0,2,7,209,145,2,8,234,167,3,1,255,255,3,2,153,0,3,8,255,255,3,9,153,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,153,255,6,2,255,102,6,8,153,255,6,9,255,0,7,2,234,222,7,3,194,201,7,6,169,255,7,7,203,255,7,9,153,0,8,3,225,116,8,4,228,209,8,5,192,225,8,7,170,0,8,8,204,0,9,5,187,0,9,6,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"P","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,1,187,255,4,2,255,136,4,5,187,255,4,6,255,0,5,2,224,155,5,3,239,236,5,6,187,0,6,4,221,0],"secondary":false},{"width":9,"bonus":185,"chr":"Q","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,235,240,2,1,187,255,2,3,221,0,2,7,187,116,2,8,243,178,3,1,255,255,3,2,187,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,237,255,5,2,255,0,5,8,237,255,5,9,255,0,6,2,251,207,6,7,255,255,6,9,238,0,7,3,255,255,7,4,203,255,7,5,221,255,7,6,255,255,7,7,155,196,7,8,254,204,8,4,255,17,8,5,207,21,8,6,221,0,8,7,255,0,8,9,204,0],"secondary":false},{"width":7,"bonus":180,"chr":"R","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,187,4,2,254,239,4,3,203,255,4,4,255,255,4,6,255,68,4,7,250,243,4,8,181,239,5,3,239,18,5,4,204,0,5,5,255,0,5,8,245,107,5,9,170,0],"secondary":false},{"width":6,"bonus":130,"chr":"S","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,1,255,255,2,2,204,0,2,4,198,219,2,5,232,93,2,8,255,255,2,9,238,0,3,1,255,255,3,2,255,0,3,5,255,255,3,8,255,255,3,9,255,0,4,1,169,255,4,2,255,68,4,5,160,217,4,6,255,221,4,7,237,255,4,9,255,0,5,2,170,0,5,7,223,19,5,8,238,0],"secondary":false},{"width":8,"bonus":125,"chr":"T","pixels":[0,1,255,255,1,1,255,255,1,2,255,0,2,1,255,255,2,2,255,34,3,1,255,255,3,2,255,221,3,3,225,251,3,4,225,251,3,5,225,251,3,6,225,251,3,7,225,251,3,8,210,247,4,1,255,255,4,2,255,0,4,3,221,0,4,4,221,0,4,5,221,0,4,6,221,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,255,255,5,2,255,0,6,2,255,0],"secondary":false},{"width":8,"bonus":165,"chr":"U","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,187,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,230,75,1,7,232,187,1,8,184,189,2,8,255,255,3,8,255,255,3,9,255,0,4,8,221,255,4,9,255,0,5,1,203,255,5,2,221,255,5,3,221,255,5,4,221,255,5,5,221,255,5,6,255,255,5,7,237,255,5,9,221,0,6,2,211,41,6,3,226,39,6,4,226,39,6,5,226,39,6,6,223,19,6,7,255,0,6,8,238,0],"secondary":false},{"width":7,"bonus":125,"chr":"V","pixels":[0,1,255,255,0,2,187,255,1,2,255,68,1,3,228,171,1,4,255,255,1,5,153,255,2,4,153,0,2,5,255,85,2,6,228,209,2,7,242,251,3,6,164,185,3,7,255,255,3,8,251,207,4,4,203,255,4,5,237,255,4,8,255,0,4,9,204,0,5,1,169,255,5,2,255,255,5,3,153,255,5,5,204,0,5,6,238,0,6,2,170,0,6,3,255,0,6,4,153,0],"secondary":false},{"width":10,"bonus":245,"chr":"W","pixels":[0,1,255,255,0,2,221,255,1,2,255,17,1,3,237,128,1,4,223,214,1,5,255,255,1,6,203,255,2,5,191,23,2,6,255,136,2,7,255,255,2,8,255,255,3,3,153,255,3,4,237,255,3,5,221,255,3,7,168,103,3,8,255,0,3,9,255,0,4,1,255,255,4,2,255,255,4,3,187,209,4,4,153,0,4,5,238,0,4,6,221,0,5,2,255,102,5,3,254,171,5,4,248,244,5,5,203,255,6,4,170,0,6,5,241,54,6,6,231,150,6,7,255,255,6,8,255,255,7,4,153,255,7,5,237,255,7,6,241,252,7,7,207,188,7,8,255,85,7,9,255,0,8,1,237,255,8,2,237,255,8,3,153,255,8,4,153,171,8,5,153,0,8,6,238,0,8,7,238,0,8,8,153,0,9,2,238,0,9,3,238,0,9,4,153,0],"secondary":false},{"width":7,"bonus":130,"chr":"X","pixels":[0,8,169,255,1,1,187,255,1,2,220,236,1,7,237,255,1,9,170,0,2,2,205,85,2,3,248,227,2,4,166,235,2,5,255,255,2,6,153,255,2,8,238,0,3,3,155,196,3,4,255,255,3,5,248,244,3,6,255,51,3,7,153,0,4,2,237,255,4,5,255,51,4,6,251,207,4,7,186,233,5,1,203,255,5,3,238,0,5,7,225,116,5,8,255,255,6,2,204,0,6,9,255,0],"secondary":false},{"width":7,"bonus":90,"chr":"Y","pixels":[0,1,169,255,1,2,249,243,2,3,248,157,2,4,255,255,3,4,241,234,3,5,254,204,3,6,232,243,3,7,225,251,3,8,210,247,4,3,255,255,4,5,221,0,4,6,204,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,237,255,5,4,255,0,6,2,238,0],"secondary":false},{"width":7,"bonus":140,"chr":"Z","pixels":[0,8,187,255,1,1,255,255,1,7,221,255,1,8,255,255,1,9,187,0,2,1,255,255,2,2,255,0,2,5,203,255,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,203,255,3,6,204,0,3,8,255,255,3,9,255,0,4,1,255,255,4,2,255,221,4,5,204,0,4,8,255,255,4,9,255,0,5,1,187,255,5,2,255,34,5,3,221,0,5,8,153,255,5,9,255,0,6,2,187,0,6,9,153,0],"secondary":false},{"width":7,"bonus":170,"chr":"0","pixels":[0,2,153,255,0,3,221,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,169,255,1,1,187,255,1,3,153,0,1,4,221,0,1,5,255,0,1,6,255,0,1,7,243,71,1,8,237,219,2,1,187,255,2,2,187,0,2,8,205,233,2,9,211,41,3,1,221,255,3,2,205,85,3,8,203,255,3,9,187,0,4,2,243,178,4,3,255,255,4,4,187,255,4,5,187,255,4,6,237,255,4,7,169,255,4,9,204,0,5,3,170,0,5,4,255,0,5,5,187,0,5,6,187,0,5,7,238,0,5,8,170,0],"secondary":false},{"width":7,"bonus":100,"chr":"1","pixels":[1,8,187,255,2,1,203,255,2,2,224,232,2,3,219,218,2,4,187,255,2,5,187,255,2,6,187,255,2,7,187,255,2,8,237,255,2,9,187,0,3,2,218,80,3,3,218,80,3,4,205,85,3,5,205,85,3,6,205,85,3,7,205,85,3,8,241,215,3,9,238,0,4,8,168,207,4,9,204,0],"secondary":false},{"width":7,"bonus":105,"chr":"2","pixels":[1,8,255,255,2,1,187,255,2,6,153,255,2,8,223,214,2,9,255,0,3,1,203,255,3,2,187,0,3,5,153,255,3,7,153,0,3,8,219,218,3,9,187,0,4,1,187,255,4,2,234,167,4,4,203,255,4,6,153,0,4,8,187,255,4,9,187,0,5,2,214,122,5,3,200,152,5,5,204,0,5,9,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"3","pixels":[0,8,203,255,1,1,187,255,1,8,191,250,1,9,204,0,2,1,187,255,2,2,196,45,2,4,187,255,2,5,174,150,2,8,203,255,2,9,187,0,3,2,246,229,3,3,210,247,3,5,241,215,3,6,173,175,3,7,169,255,3,9,204,0,4,3,227,57,4,4,204,0,4,6,228,133,4,7,174,150,4,8,170,0],"secondary":false},{"width":7,"bonus":150,"chr":"4","pixels":[0,6,237,255,1,4,187,255,1,6,219,218,1,7,238,0,2,3,169,255,2,5,187,0,2,6,219,218,2,7,187,0,3,1,187,255,3,2,153,255,3,3,155,112,3,4,193,90,3,6,203,255,3,7,205,85,4,1,187,255,4,2,237,201,4,3,228,209,4,4,205,233,4,5,205,233,4,6,242,251,4,7,241,198,4,8,205,233,5,2,187,0,5,3,187,0,5,4,187,0,5,5,187,0,5,6,224,155,5,7,238,0,5,8,187,0,5,9,187,0],"secondary":false},{"width":7,"bonus":130,"chr":"5","pixels":[1,1,237,255,1,2,187,255,1,3,187,255,1,4,187,255,1,8,207,251,2,1,187,255,2,2,238,0,2,3,187,0,2,4,237,201,2,5,187,0,2,8,187,255,2,9,204,0,3,1,187,255,3,2,187,0,3,4,203,255,3,5,191,23,3,8,203,255,3,9,187,0,4,2,187,0,4,5,251,242,4,6,191,250,4,7,221,255,4,9,204,0,5,6,243,71,5,7,191,23,5,8,221,0],"secondary":false},{"width":7,"bonus":150,"chr":"6","pixels":[0,3,169,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,153,255,1,2,187,255,1,4,209,145,1,5,255,68,1,6,255,0,1,7,246,123,1,8,228,209,2,1,203,255,2,3,187,0,2,4,200,238,2,8,219,218,2,9,187,0,3,1,187,255,3,2,204,0,3,4,203,255,3,5,205,85,3,8,187,255,3,9,187,0,4,2,187,0,4,5,248,227,4,6,255,255,4,7,187,255,4,9,187,0,5,6,221,0,5,7,255,0,5,8,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"7","pixels":[0,1,187,255,1,1,187,255,1,2,187,0,1,8,203,255,2,1,187,255,2,2,187,0,2,6,237,255,2,7,153,255,2,9,204,0,3,1,187,255,3,2,205,85,3,3,153,255,3,4,221,255,3,7,238,0,3,8,153,0,4,1,255,255,4,2,237,201,4,4,153,0,4,5,221,0,5,2,255,0,5,3,187,0],"secondary":false},{"width":7,"bonus":165,"chr":"8","pixels":[1,2,237,255,1,3,221,255,1,6,203,255,1,7,228,247,2,1,203,255,2,3,241,54,2,4,248,209,2,5,186,233,2,7,207,21,2,8,250,226,3,1,187,255,3,2,204,0,3,4,186,233,3,5,221,98,3,6,170,0,3,8,191,250,3,9,221,0,4,1,221,255,4,2,209,104,4,4,169,255,4,5,237,219,4,8,187,255,4,9,187,0,5,2,243,178,5,3,187,209,5,5,204,128,5,6,251,242,5,7,240,253,5,9,187,0,6,3,170,0,6,4,153,0,6,7,238,0,6,8,238,0],"secondary":false},{"width":7,"bonus":160,"chr":"9","pixels":[1,2,221,255,1,3,191,250,1,4,242,251,1,8,153,255,2,1,203,255,2,3,221,0,2,4,191,23,2,5,253,223,2,8,191,250,2,9,153,0,3,1,187,255,3,2,204,0,3,5,191,250,3,6,221,0,3,8,203,255,3,9,187,0,4,1,187,255,4,2,218,139,4,6,200,65,4,7,169,255,4,9,204,0,5,2,228,171,5,3,245,247,5,4,255,255,5,5,255,255,5,6,223,214,5,8,170,0,6,3,153,0,6,4,238,0,6,5,255,0,6,6,255,0,6,7,187,0],"secondary":false},{"width":8,"bonus":130,"chr":"%","pixels":[0,3,255,255,0,8,255,255,1,2,255,255,1,4,255,255,1,7,255,255,1,9,255,0,2,3,255,255,2,5,255,41,2,6,255,255,2,8,255,0,3,4,255,41,3,5,255,255,3,7,255,0,4,4,255,255,4,6,255,92,4,7,255,255,5,3,255,255,5,5,255,0,5,6,255,255,5,8,255,255,6,2,255,255,6,4,255,0,6,7,255,255,6,9,255,0,7,3,255,0,7,8,255,0],"secondary":false},{"width":4,"bonus":80,"chr":"/","pixels":[0,7,153,255,0,8,237,255,0,9,221,255,1,4,187,255,1,5,237,255,1,6,169,255,1,8,153,0,1,9,238,0,1,10,221,0,2,1,221,255,2,2,221,255,2,5,187,0,2,6,238,0,2,7,170,0,3,2,221,0,3,3,221,0],"secondary":false},{"width":7,"bonus":110,"chr":"+","pixels":[0,5,221,255,1,5,255,255,1,6,221,0,2,5,255,255,2,6,255,34,3,2,153,255,3,3,223,253,3,4,225,251,3,5,255,255,3,6,255,221,3,7,225,251,3,8,210,247,4,3,153,0,4,4,221,0,4,5,255,255,4,6,255,0,4,7,221,0,4,8,221,0,4,9,204,0,5,5,255,255,5,6,255,0,6,6,255,0],"secondary":false},{"width":5,"bonus":75,"chr":"?","pixels":[0,1,169,255,1,1,255,255,1,2,170,0,1,6,221,255,1,8,255,255,2,1,255,255,2,2,255,0,2,5,169,255,2,7,221,0,2,9,255,0,3,2,255,255,3,3,221,255,3,6,170,0,4,3,255,17,4,4,221,0],"secondary":false},{"width":2,"bonus":70,"chr":"!","pixels":[0,1,169,255,0,2,187,255,0,3,187,255,0,4,187,255,0,5,187,255,0,6,169,255,0,8,255,255,1,2,181,48,1,3,196,45,1,4,196,45,1,5,196,45,1,6,196,45,1,7,170,0,1,9,255,0],"secondary":false},{"width":8,"bonus":230,"chr":"@","pixels":[0,4,255,255,0,5,255,255,0,6,221,255,0,7,255,255,0,8,187,255,1,3,221,255,1,5,255,0,1,6,255,34,1,7,221,0,1,8,255,68,1,9,250,243,2,2,221,255,2,4,232,93,2,5,255,255,2,6,237,255,2,7,255,255,2,10,248,157,3,2,255,255,3,3,221,0,3,4,255,255,3,6,255,0,3,7,241,54,3,8,254,204,3,10,214,223,3,11,153,0,4,2,237,255,4,3,255,0,4,4,255,255,4,5,255,0,4,8,255,255,4,9,204,0,4,11,187,0,5,3,253,240,5,4,255,255,5,5,255,221,5,6,221,255,5,7,221,255,5,8,237,255,5,9,255,0,6,4,240,36,6,5,255,34,6,6,226,39,6,7,226,39,6,8,250,226,6,9,238,0,7,9,221,0],"secondary":false},{"width":8,"bonus":200,"chr":"#","pixels":[0,6,255,255,1,3,255,255,1,6,255,255,1,7,254,171,1,8,237,255,2,1,169,255,2,2,237,255,2,3,255,255,2,4,255,221,2,5,175,247,2,6,255,255,2,7,255,85,2,8,170,0,2,9,238,0,3,2,170,0,3,3,255,255,3,4,255,0,3,5,221,0,3,6,255,255,3,7,255,0,4,3,255,255,4,4,255,153,4,5,203,255,4,6,255,255,4,7,254,239,4,8,187,255,5,1,255,255,5,2,187,255,5,3,255,255,5,4,255,85,5,5,159,27,5,6,255,255,5,7,255,0,5,8,238,0,5,9,187,0,6,2,255,0,6,3,255,255,6,4,255,0,6,7,255,0,7,4,255,0],"secondary":false},{"width":6,"bonus":130,"chr":"$","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,0,203,255,2,1,237,255,2,2,204,0,2,4,176,197,2,5,237,128,2,8,240,253,2,9,251,207,3,1,251,242,3,2,239,18,3,5,247,245,3,6,164,132,3,8,255,255,3,9,240,36,3,10,204,0,4,2,240,36,4,6,249,174,4,7,198,219,4,9,255,0,5,7,170,0,5,8,170,0],"secondary":false},{"width":6,"bonus":75,"chr":"^","pixels":[0,4,153,255,0,5,237,255,1,2,203,255,1,3,221,255,1,5,153,0,1,6,238,0,2,1,221,255,2,2,230,245,2,3,218,80,2,4,221,0,3,2,227,57,3,3,246,194,3,4,230,245,4,4,187,0,4,5,239,145],"secondary":false},{"width":6,"bonus":35,"chr":"~","pixels":[1,5,255,255,2,5,221,255,2,6,255,51,3,6,250,226,4,5,203,255,4,7,221,0,5,6,204,0],"secondary":false},{"width":7,"bonus":175,"chr":"&","pixels":[0,6,187,255,1,2,237,255,1,3,255,255,1,4,191,250,1,5,187,255,1,7,224,155,1,8,223,214,2,1,255,255,2,3,238,0,2,4,255,255,2,5,191,23,2,6,187,0,2,8,255,255,2,9,187,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,2,255,0,4,4,255,255,4,5,255,34,4,8,187,255,4,9,255,0,5,3,203,255,5,4,255,255,5,5,255,221,5,6,196,243,5,7,155,196,5,9,187,0,6,4,234,167,6,5,255,0,6,6,221,0,6,7,187,0],"secondary":false},{"width":6,"bonus":70,"chr":"*","pixels":[0,2,169,255,1,2,169,255,1,3,237,219,1,4,255,255,2,1,203,255,2,2,240,253,2,3,255,255,2,4,228,133,2,5,255,0,3,2,237,183,3,3,245,107,3,4,255,153,4,3,170,0,4,5,153,0],"secondary":false},{"width":4,"bonus":100,"chr":"(","pixels":[0,3,173,255,0,4,239,255,0,5,253,255,0,6,229,255,0,7,171,255,1,1,193,255,1,2,203,255,1,4,188,64,1,5,241,25,1,6,252,46,1,7,240,112,1,8,238,218,1,9,210,232,2,0,209,255,2,2,194,2,2,3,204,0,2,9,223,111,2,10,245,224,3,1,210,0,3,11,216,0],"secondary":false},{"width":4,"bonus":75,"chr":")","pixels":[1,0,211,255,1,10,215,255,2,1,244,203,2,2,222,234,2,8,203,255,2,9,191,255,2,11,216,0,3,2,213,94,3,3,238,186,3,4,246,248,3,5,253,255,3,6,231,253,3,7,186,234,3,9,203,1,3,10,191,0],"secondary":false},{"width":7,"bonus":60,"chr":"_","pixels":[0,9,153,255,1,9,255,255,1,10,153,0,2,9,255,255,2,10,255,0,3,9,255,255,3,10,255,0,4,9,255,255,4,10,255,0,5,9,255,255,5,10,255,0,6,10,255,0],"secondary":false},{"width":4,"bonus":30,"chr":"-","pixels":[0,5,255,255,1,5,255,255,1,6,255,0,2,5,255,255,2,6,255,0,3,6,255,0],"secondary":true},{"width":8,"bonus":100,"chr":"=","pixels":[0,4,255,255,0,6,255,255,1,4,255,255,1,5,255,0,1,6,255,255,1,7,255,0,2,4,255,255,2,5,255,0,2,6,255,255,2,7,255,0,3,4,255,255,3,5,255,0,3,6,255,255,3,7,255,0,4,4,255,255,4,5,255,0,4,6,255,255,4,7,255,0,5,5,255,0,5,7,255,0],"secondary":false},{"width":3,"bonus":105,"chr":"[","pixels":[0,0,203,255,0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,0,237,255,1,1,211,41,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,252,241,1,9,204,0,2,1,238,0,2,9,238,0],"secondary":false},{"width":3,"bonus":105,"chr":"]","pixels":[0,0,237,255,0,8,237,255,1,0,203,255,1,1,253,223,1,2,225,251,1,3,225,251,1,4,225,251,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,1,9,238,0,2,1,204,0,2,2,221,0,2,3,221,0,2,4,221,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0],"secondary":false},{"width":5,"bonus":90,"chr":"{","pixels":[0,5,153,255,1,2,169,255,1,3,221,255,1,4,221,255,1,5,203,255,1,6,255,255,1,7,221,255,1,8,169,255,2,1,237,255,2,3,181,48,2,4,223,19,2,5,221,0,2,6,207,21,2,7,255,34,2,8,232,93,2,9,249,243,3,2,238,0,3,10,238,0],"secondary":false},{"width":5,"bonus":90,"chr":"}","pixels":[1,1,237,255,1,9,237,255,2,2,249,174,2,3,232,243,2,4,225,251,2,5,207,251,2,6,255,255,2,7,223,253,2,8,181,239,2,10,238,0,3,3,170,0,3,4,221,0,3,5,241,162,3,6,204,0,3,7,255,0,3,8,221,0,3,9,170,0,4,6,153,0],"secondary":false},{"width":3,"bonus":20,"chr":":","pixels":[1,3,255,255,1,7,255,255,2,4,255,0,2,8,255,0],"secondary":true},{"width":3,"bonus":40,"chr":";","pixels":[0,9,201,255,1,3,255,255,1,7,241,255,1,8,255,255,1,10,201,0,2,4,255,0,2,8,241,0,2,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":"\\"","pixels":[0,1,255,255,0,2,255,255,1,2,255,0,1,3,255,0,2,1,255,255,2,2,255,255],"secondary":true},{"width":2,"bonus":20,"chr":"\'","pixels":[0,1,255,255,0,2,177,255,1,2,255,30,1,3,177,0],"secondary":true},{"width":7,"bonus":70,"chr":"<","pixels":[0,5,203,255,1,5,255,255,1,6,228,133,2,4,237,255,2,6,254,239,3,4,169,255,3,5,238,0,3,6,175,247,3,7,243,89,4,3,221,255,4,5,170,0,4,7,244,231,5,4,221,0,5,8,221,0],"secondary":false},{"width":7,"bonus":80,"chr":">","pixels":[0,3,203,255,0,7,203,255,1,4,228,133,1,7,187,255,1,8,204,0,2,4,247,245,2,6,255,255,2,8,187,0,3,4,175,247,3,5,248,157,3,6,203,255,3,7,255,0,4,5,255,255,4,6,173,75,4,7,204,0,5,6,255,0],"secondary":false},{"width":5,"bonus":70,"chr":"\\\\","pixels":[1,1,153,255,1,2,255,255,1,3,203,255,2,2,153,0,2,3,255,51,2,4,231,150,2,5,255,255,2,6,203,255,3,6,255,34,3,7,231,150,3,8,255,255,3,9,207,251,4,9,255,0,4,10,204,0],"secondary":false},{"width":2,"bonus":10,"chr":".","pixels":[0,8,255,255,1,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":",","pixels":[0,9,205,255,1,7,205,255,1,8,255,255,1,10,205,0,2,8,205,0,2,9,255,0],"secondary":true},{"width":3,"bonus":100,"chr":"|","pixels":[0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,221,255,0,9,221,255,0,10,203,255,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,226,39,1,10,226,39,1,11,204,0],"secondary":false}],"width":10,"spacewidth":3,"shadow":true,"height":12,"basey":8}');

/***/ }),

/***/ "./src/fonts/pixel_8px_digits.fontmeta.json":
/*!**************************************************!*\
  !*** ./src/fonts/pixel_8px_digits.fontmeta.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":120,"chr":"0","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,255,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,255,2,0,255,255,2,2,255,0,2,7,255,255,3,1,255,255,3,6,255,255,3,8,255,0,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,7,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0],"secondary":false},{"width":4,"bonus":95,"chr":"1","pixels":[0,1,255,255,0,7,255,255,1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,0,2,1,255,0,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,255,2,8,255,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[0,1,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,5,255,255,1,7,255,255,1,8,255,0,2,0,255,255,2,1,255,0,2,4,255,255,2,6,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,5,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,0,4,7,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,8,255,0],"secondary":false},{"width":6,"bonus":115,"chr":"3","pixels":[0,1,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,1,255,255,3,2,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,2,255,0,4,3,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"4","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,0,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,255,1,6,255,0,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,7,255,0,3,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"5","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,6,255,255,1,0,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,1,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":7,"bonus":160,"chr":"6","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,1,255,255,1,3,255,0,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,2,255,0,2,3,255,255,2,5,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":6,"bonus":105,"chr":"7","pixels":[0,0,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,1,255,0,1,4,255,255,1,5,255,255,1,7,255,0,1,8,255,0,2,0,255,255,2,1,255,0,2,2,255,255,2,3,255,255,2,5,255,0,2,6,255,0,3,0,255,255,3,1,255,255,3,3,255,0,3,4,255,0,4,1,255,0,4,2,255,0],"secondary":false},{"width":7,"bonus":170,"chr":"8","pixels":[0,1,255,255,0,2,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"9","pixels":[0,1,255,255,0,2,255,255,1,0,255,255,1,2,255,0,1,3,255,255,2,0,255,255,2,1,255,0,2,4,255,255,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"m","pixels":[0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,3,255,255,3,5,255,0,3,6,255,0,3,7,255,0,3,8,255,0,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":3,"bonus":80,"chr":"(","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,255,2,1,255,0],"secondary":false},{"width":2,"bonus":70,"chr":")","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"h","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,4,255,0,2,5,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0],"secondary":false},{"width":5,"bonus":65,"chr":"r","pixels":[0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,5,255,0,3,4,255,0],"secondary":false}],"width":7,"spacewidth":3,"shadow":true,"height":9,"basey":7}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_82646__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_82646__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_82646__("./src/ability/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    let res = new exports.ImageData(rect.width, rect.height);
    this.copyTo(res, rect.x, rect.y, rect.width, rect.height, 0, 0);
    return res;
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_12931__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_12931__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_12931__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_12931__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_12931__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData.
* Cleans sRGB headers from downloaded png images. Assumes that data url's are already cleaned from sRGB and other headers
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    var hdr = "data:image/png;base64,";
    var isdataurl = url.startsWith(hdr);
    if (typeof Image != "undefined") {
        if (isdataurl) {
            return loadImageDataFromUrl(url);
        }
        else {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error("failed to load image: " + url);
            }
            let file = new Uint8Array(await res.arrayBuffer());
            return imageDataFromFileBuffer(file);
        }
    }
    else {
        if (isdataurl) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
function loadImageDataFromUrl(url) {
    if (typeof Image == "undefined") {
        throw new Error("Browser environment expected");
    }
    return new Promise((done, fail) => {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        img.onload = function () { done(new imgref_1.ImgRefCtx(img).toData()); };
        img.onerror = fail;
        img.src = url;
    });
}
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    if (isPngBuffer(data)) {
        clearPngColorspace(data);
    }
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await loadImageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_29896__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_29896__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            if (img instanceof HTMLCanvasElement) {
                this.ctx = img.getContext("2d", { willReadFrequently: true });
            }
            else {
                var cnv = document.createElement("canvas");
                cnv.width = img.width;
                cnv.height = img.height;
                this.ctx = cnv.getContext("2d", { willReadFrequently: true });
                this.ctx.drawImage(img, 0, 0);
            }
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_33868__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromUrl = exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_33868__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_33868__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_33868__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_33868__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_33868__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_33868__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_33868__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));
Object.defineProperty(exports, "imageDataFromUrl", ({ enumerable: true, get: function () { return imagedetect_1.imageDataFromUrl; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_37680__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_37680__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_37680__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_43872__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_43872__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_43872__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    triggerPaste(new index_1.ImgRefCtx(img));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        var bloburl = URL.createObjectURL(blob);
        img.onerror = () => {
            URL.revokeObjectURL(bloburl);
            error("invalidfile", "The file you uploaded could not be opened as an image.");
        };
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () {
                pasted(img);
                URL.revokeObjectURL(bloburl);
            };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_55275__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_55275__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_55275__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_55275__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_55275__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer. You generally never have to do this yourself
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_78005__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_78005__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_78005__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_78005__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/buffs/index.js":
/*!************************************************!*\
  !*** ../node_modules/alt1/dist/buffs/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buffs/imgs/buffborder.data.png":
/*!********************************************!*\
  !*** ./src/buffs/imgs/buffborder.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_885__) => {

module.exports=(__nested_webpack_require_885__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABCSURBVEhL7daxDQAgDANBwxasxmCsS4jECE8K5JdcX+s219iqKrGTXi+dfs2SjCEZQzKGZAzJGJIxJGNI/2KFj1gK6ntTCO2Nfp8AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/imgs/debuffborder.data.png":
/*!**********************************************!*\
  !*** ./src/buffs/imgs/debuffborder.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1504__) => {

module.exports=(__nested_webpack_require_1504__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABFSURBVEhL7daxDQAgDANBm5XYfwOYyUgoI5gUyFc51bfhAoQmNzYl1v3MJjVqt0jMIjGLxCwSs0jMIjGLxCz+jTV+xMAB3/oJlYh5IBUAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/index.ts":
/*!****************************!*\
  !*** ./src/buffs/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2063__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuffInfo = exports.Buff = void 0;
const a1lib = __importStar(__nested_webpack_require_2063__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_2063__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_2063__(/*! alt1/base */ "alt1/base");
var imgs = (0, base_1.webpackImages)({
    buff: __nested_webpack_require_2063__(/*! ./imgs/buffborder.data.png */ "./src/buffs/imgs/buffborder.data.png"),
    debuff: __nested_webpack_require_2063__(/*! ./imgs/debuffborder.data.png */ "./src/buffs/imgs/debuffborder.data.png"),
});
var font = __nested_webpack_require_2063__(/*! ../fonts/pixel_8px_digits.fontmeta.json */ "./src/fonts/pixel_8px_digits.fontmeta.json");
function negmod(a, b) {
    return ((a % b) + b) % b;
}
class Buff {
    constructor(buffer, x, y, isdebuff) {
        this.buffer = buffer;
        this.bufferx = x;
        this.buffery = y;
        this.isdebuff = isdebuff;
    }
    readArg(type) {
        return BuffReader.readArg(this.buffer, this.bufferx + 2, this.buffery + 23, type);
    }
    readTime() {
        return BuffReader.readTime(this.buffer, this.bufferx + 2, this.buffery + 23);
    }
    compareBuffer(img) {
        return BuffReader.compareBuffer(this.buffer, this.bufferx + 1, this.buffery + 1, img);
    }
    countMatch(img, aggressive) {
        return BuffReader.countMatch(this.buffer, this.bufferx + 1, this.buffery + 1, img, aggressive);
    }
}
exports.Buff = Buff;
class BuffReader {
    constructor() {
        this.pos = null;
        this.debuffs = false;
    }
    find(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        if (!img) {
            return null;
        }
        var poslist = img.findSubimage(this.debuffs ? imgs.debuff : imgs.buff);
        if (poslist.length == 0) {
            return null;
        }
        var grids = [];
        for (var a in poslist) {
            var ongrid = false;
            for (var b in grids) {
                if (negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0 && negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0) {
                    grids[b].x = Math.min(grids[b].x, poslist[a].x);
                    grids[b].y = Math.min(grids[b].y, poslist[a].y);
                    grids[b].n++;
                    ongrid = true;
                    break;
                }
            }
            if (!ongrid) {
                grids.push({ x: poslist[a].x, y: poslist[a].y, n: 1 });
            }
        }
        var max = 0;
        var above2 = 0;
        var best = null;
        for (var a in grids) {
            console.log("buff grid [" + grids[a].x + "," + grids[a].y + "], n:" + grids[a].n);
            if (grids[a].n > max) {
                max = grids[a].n;
                best = grids[a];
            }
            if (grids[a].n >= 2) {
                above2++;
            }
        }
        if (above2 > 1) {
            console.log("Warning, more than one possible buff bar location");
        }
        if (!best) {
            return null;
        }
        this.pos = { x: best.x, y: best.y, maxhor: 5, maxver: 1 };
        return true;
    }
    getCaptRect() {
        if (!this.pos) {
            return null;
        }
        return new a1lib.Rect(this.pos.x, this.pos.y, (this.pos.maxhor + 1) * BuffReader.gridsize, (this.pos.maxver + 1) * BuffReader.gridsize);
    }
    read(buffer) {
        if (!this.pos) {
            throw new Error("no pos");
        }
        var r = [];
        var rect = this.getCaptRect();
        if (!rect) {
            return null;
        }
        if (!buffer) {
            buffer = a1lib.capture(rect.x, rect.y, rect.width, rect.height);
        }
        var maxhor = 0;
        var maxver = 0;
        for (var ix = 0; ix <= this.pos.maxhor; ix++) {
            for (var iy = 0; iy <= this.pos.maxver; iy++) {
                var x = ix * BuffReader.gridsize;
                var y = iy * BuffReader.gridsize;
                //Have to require exact match here as we get transparency bs otherwise
                var match = buffer.pixelCompare((this.debuffs ? imgs.debuff : imgs.buff), x, y) == 0;
                if (!match) {
                    break;
                }
                r.push(new Buff(buffer, x, y, this.debuffs));
                maxhor = Math.max(maxhor, ix);
                maxver = Math.max(maxver, iy);
            }
        }
        this.pos.maxhor = Math.max(5, maxhor + 2);
        this.pos.maxver = Math.max(1, maxver + 1);
        return r;
    }
    static compareBuffer(buffer, ox, oy, buffimg) {
        var r = BuffReader.countMatch(buffer, ox, oy, buffimg, true);
        if (r.failed > 0) {
            return false;
        }
        if (r.tested < 50) {
            return false;
        }
        return true;
    }
    static countMatch(buffer, ox, oy, buffimg, agressive) {
        var r = { tested: 0, failed: 0, skipped: 0, passed: 0 };
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    r.skipped++;
                    continue;
                } //transparent buff pixel
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255) {
                    r.skipped++;
                    continue;
                } //white pixel - part of buff time text
                if (data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    r.skipped++;
                    continue;
                } //black pixel - part of buff time text
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                r.tested++;
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 35) {
                    //qw(pixelschecked); debug.show();
                    r.failed++;
                    if (agressive) {
                        return r;
                    }
                }
                else {
                    r.passed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        return r;
    }
    static isolateBuffer(buffer, ox, oy, buffimg) {
        var count = BuffReader.countMatch(buffer, ox, oy, buffimg);
        if (count.passed < 50) {
            return;
        }
        var removed = 0;
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    continue;
                } //transparent buff pixel
                //==== new buffer has text on it ====
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255 || data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    continue;
                }
                //==== old buf has text on it, use the new one ====
                if (data2[i2] == 255 && data2[i2 + 1] == 255 && data2[i2 + 2] == 255 || data2[i2] == 0 && data2[i2 + 1] == 0 && data2[i2 + 2] == 0) {
                    data2[i2 + 0] = data1[i1 + 0];
                    data2[i2 + 1] = data1[i1 + 1];
                    data2[i2 + 2] = data1[i1 + 2];
                    data2[i2 + 3] = data1[i1 + 3];
                    removed++;
                }
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 5) {
                    //qw(pixelschecked); debug.show();
                    data2[i2 + 0] = data2[i2 + 1] = data2[i2 + 2] = data2[i2 + 3] = 0;
                    removed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        if (removed > 0) {
            console.log(removed + " pixels remove from buff template image");
        }
    }
    static readArg(buffer, ox, oy, type) {
        var lines = [];
        for (var dy = -10; dy < 10; dy += 10) { //the timer can be spread to a second line at certain times (229m)
            var result = OCR.readLine(buffer, font, [255, 255, 255], ox, oy + dy, true);
            if (result.text) {
                lines.push(result.text);
            }
        }
        var r = { time: 0, arg: "" };
        if (type == "timearg" && lines.length > 1) {
            r.arg = lines.pop();
        }
        var str = lines.join("");
        if (type == "arg") {
            r.arg = str;
        }
        else {
            var m;
            if (m = str.match(/^(\d+)hr($|\s?\()/i)) {
                r.time = +m[1] * 60 * 60;
            }
            else if (m = str.match(/^(\d+)m($|\s?\()/i)) {
                r.time = +m[1] * 60;
            }
            else if (m = str.match(/^(\d+)($|\s?\()/)) {
                r.time = +m[1];
            }
        }
        return r;
    }
    static readTime(buffer, ox, oy) {
        return this.readArg(buffer, ox, oy, "time").time;
    }
    static matchBuff(state, buffimg) {
        for (var a in state) {
            if (state[a].compareBuffer(buffimg)) {
                return state[a];
            }
        }
        return null;
    }
    static matchBuffMulti(state, buffinfo) {
        if (buffinfo.final) { //cheap way if we known exactly what we're searching for
            return BuffReader.matchBuff(state, buffinfo.imgdata);
        }
        else { //expensive way if we are not sure the template is final
            var bestindex = -1;
            var bestscore = 0;
            if (buffinfo.imgdata) {
                for (var a = 0; a < state.length; a++) {
                    var count = BuffReader.countMatch(state[a].buffer, state[a].bufferx + 1, state[a].buffery + 1, buffinfo.imgdata, false);
                    if (count.passed > bestscore) {
                        bestscore = count.passed;
                        bestindex = a;
                    }
                }
            }
            if (bestscore < 50) {
                return null;
            }
            //update the isolated buff
            if (buffinfo.canimprove) {
                BuffReader.isolateBuffer(state[bestindex].buffer, state[bestindex].bufferx + 1, state[bestindex].buffery + 1, buffinfo.imgdata);
            }
            return state[bestindex];
        }
    }
}
BuffReader.buffsize = 27;
BuffReader.gridsize = 30;
exports["default"] = BuffReader;
class BuffInfo {
    constructor(imgdata, debuff, id, canimprove) {
        this.imgdata = imgdata;
        this.isdebuff = debuff;
        this.buffid = id;
        this.final = !!id && !canimprove;
        this.canimprove = canimprove;
    }
}
exports.BuffInfo = BuffInfo;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/pixel_8px_digits.fontmeta.json":
/*!**************************************************!*\
  !*** ./src/fonts/pixel_8px_digits.fontmeta.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":120,"chr":"0","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,255,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,255,2,0,255,255,2,2,255,0,2,7,255,255,3,1,255,255,3,6,255,255,3,8,255,0,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,7,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0],"secondary":false},{"width":4,"bonus":95,"chr":"1","pixels":[0,1,255,255,0,7,255,255,1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,0,2,1,255,0,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,255,2,8,255,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[0,1,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,5,255,255,1,7,255,255,1,8,255,0,2,0,255,255,2,1,255,0,2,4,255,255,2,6,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,5,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,0,4,7,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,8,255,0],"secondary":false},{"width":6,"bonus":115,"chr":"3","pixels":[0,1,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,1,255,255,3,2,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,2,255,0,4,3,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"4","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,0,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,255,1,6,255,0,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,7,255,0,3,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"5","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,6,255,255,1,0,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,1,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":7,"bonus":160,"chr":"6","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,1,255,255,1,3,255,0,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,2,255,0,2,3,255,255,2,5,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":6,"bonus":105,"chr":"7","pixels":[0,0,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,1,255,0,1,4,255,255,1,5,255,255,1,7,255,0,1,8,255,0,2,0,255,255,2,1,255,0,2,2,255,255,2,3,255,255,2,5,255,0,2,6,255,0,3,0,255,255,3,1,255,255,3,3,255,0,3,4,255,0,4,1,255,0,4,2,255,0],"secondary":false},{"width":7,"bonus":170,"chr":"8","pixels":[0,1,255,255,0,2,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"9","pixels":[0,1,255,255,0,2,255,255,1,0,255,255,1,2,255,0,1,3,255,255,2,0,255,255,2,1,255,0,2,4,255,255,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"m","pixels":[0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,3,255,255,3,5,255,0,3,6,255,0,3,7,255,0,3,8,255,0,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":3,"bonus":80,"chr":"(","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,255,2,1,255,0],"secondary":false},{"width":2,"bonus":70,"chr":")","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"h","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,4,255,0,2,5,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0],"secondary":false},{"width":5,"bonus":65,"chr":"r","pixels":[0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,5,255,0,3,4,255,0],"secondary":false}],"width":7,"spacewidth":3,"shadow":true,"height":9,"basey":7}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_21006__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_21006__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_21006__("./src/buffs/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/chatbox/index.js":
/*!**************************************************!*\
  !*** ../node_modules/alt1/dist/chatbox/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chatbox/imgs/badge_broadcast_bronze.data.png":
/*!**********************************************************!*\
  !*** ./src/chatbox/imgs/badge_broadcast_bronze.data.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_945__) => {

module.exports=(__nested_webpack_require_945__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACW5vUEUAAAAAAAAAAAChinLVAAAA/UlEQVQYlZ2Qv0vDUBDHPy81cMgDpyZIhiB0skPGQkqXSmdXNzfRxcHFqf+EDopOboJQFzcR0cnRpSIi2A6lrToYyPAkkOegKfXH5G3H3efL505Za/lXaRGrRX7RarqplH17vLkOwMrOPo8vY/VjUdmt5YjIjxk9dSdgN+vTuRmRGqMcLWKP1jaI/JjVgz1UvYWqt9g+v6bqhrQbNbSIdQq6c3UGQLOU0SxlAJz0HibpM6kxavfy1AaOS6XssbgQfPl6BI7L4e09qTFKFZe2GzXGswmvyRvJMGdu3iEZ5lz0nz8dp8UjP+Zu8M4gz6i64d/v0SJ2KfS+DYs0gA/Ek1ie1JEnzAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/badge_broadcast_death.data.png":
/*!*********************************************************!*\
  !*** ./src/chatbox/imgs/badge_broadcast_death.data.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1820__) => {

module.exports=(__nested_webpack_require_1820__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAABJQTFRFAAAAXkAg/////+bFAAAB26VSQcM5ewAAAAZ0Uk5TAP//////enng/gAAAExJREFUeJxjZBBkYPj/gZFRUZDh33lGYX4g9y6jsOF7Rv6zjKL67xkFTzOKOjxgUNjNyBj08L/cekYGYQWGux+AFAPDXwTFKMDwngEAJCwVTOO24P0AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/badge_broadcast_gold.data.png":
/*!********************************************************!*\
  !*** ./src/chatbox/imgs/badge_broadcast_gold.data.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_2535__) => {

module.exports=(__nested_webpack_require_2535__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABG5vUEUAAAAAQSCOIgAACktub1BFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM0mDyUAAAAgbm9QRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxDpOEwAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAQpJREFUGJWNkDtLwwAUhb8rSiN0ElOpWJEqaHErLmYScZQ6uamTLg4iOPkLnERw0MGtDg6dBH9A6RCXIJniW2iG0vgiSMGC0OsQU5rNA5d74X7DOUdUlf9I4iNtGHp2sJ54bu2f02q3pQcUvTja5Np+wXY9wrBDycoyPjrA7qkDqAiI7qwuYrseAHvbywAcnlwRhh2s2UHK1Tr9APNWnnjPZT4AWFsa4+b2jWLBjMC0kSJ4cDmuOOSHvyCTI2g+4Tf6KFfrf/5TkceNhQkFKBZMAPzGDwDPd58AXN77IgBT5oiWrCw1L+gmjv1VXlt8e+/SrQdEV6ZzTM4MAVDzApzHJqA9TLJajSapX1xkW1Tn4drcAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/badge_broadcast_silver.data.png":
/*!**********************************************************!*\
  !*** ./src/chatbox/imgs/badge_broadcast_silver.data.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_7038__) => {

module.exports=(__nested_webpack_require_7038__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABG5vUEUAAAAAQSCOIgAACktub1BFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM0mDyUAAAAgbm9QRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxDpOEwAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAPJJREFUGJWdj71KA1EQhb8RwStcBWG1E3YrNQoq+hQGTCOxEV9AsLZUsLL29v6QcluDWOwb2AvqKooBDSTsXuN2Y+MuprFwmlPMOTPnE1XlX2ONUWvM3+kwitQ5p845DaNoyCw/opv1OjOzYbXIen3u39+4TRJABRDdPzjSOI7VGlNdBNGTw2Ntbu8oiI5aMwZA+ybhvNViaW2Vjs9x7pTrq/bw68Xask4GFoCzi0s6PmevuQvA51fGU5qKlKQbjS0ACt/nI+8xPTHF62BQdRz5Tba+MM9D+kLW9RVYWU1K03gt0JVgjqzrq+Dz4x2+KATgGwttYvJ5rvvrAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/badgegim.data.png":
/*!********************************************!*\
  !*** ./src/chatbox/imgs/badgegim.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11453__) => {

module.exports=(__nested_webpack_require_11453__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAACW5vUEUAAAAAAAAAAAChinLVAAAA+klEQVQYlWWQMUsCYRiAn/dUaDCuJaNCkHDpPyT+ixpaHJocxMGchbaaaq4/ETgFDVnjTS1eZ3J4kNbV4Qd2SFKfQ3eG1wMvPMMD78srRBTXN3TsPf8tMi0AEgcFM0+5VkX1OwyGMwKri6s8ev6rGHFwc3eO6nd4cnwAyrUqBTMPiBYQrV/uOT69XAQAK9k1ppMx1+02KZDW5/cPZ80jnr9ybBd3yRrvmKspPoIQ23FIA5g7JWRrjyT7B4cAGACPD7ecXFwtBY16helk/Bclw0a9snSfARBY3X+rAEJ7BEAatLjK01igNjMADIYzQnuEq7zFQyNE/07SYQ5ojWXiETiVvgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/badgehcim.data.png":
/*!*********************************************!*\
  !*** ./src/chatbox/imgs/badgehcim.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_12276__) => {

module.exports=(__nested_webpack_require_12276__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACW5vUEUAAAAAAAAAAAChinLVAAAAdklEQVQYlY2R0Q2AIAxEX4nLsJOuwCcfrqMz4Tj1g9Y0IomXXOCacnBUMKygTHCCEBsVVGvpNN2MbrSsoMfEMQMXsHepjyuIgjyusebuCTv9B8k3DaV5xlrGWgzoYfz6r4DjjwS+GxMvbGHNszf/gUTxNcU4vRugtlCi8k6MwAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/badgeironman.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/badgeironman.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_12935__) => {

module.exports=(__nested_webpack_require_12935__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAACW5vUEUAAAAAAAAAAAChinLVAAAAtElEQVQYlWP8//8/A6mAiWQdMBAWHvPfRFXyf1h4DFZrw8Jj/sPUwG3Kqi3Fayi6PAsDA+P/yqwsBik1Y6gQ438/b2+4gk1btzJMa+5mePz8PkTN7a3/WbCZvGnrVrw2szAwMDA8f/yMgUGWgUGWR4CBgYGBQVtLD67g6rVLcPala1dhmv4zMjAw/P/94TcDgyQDAwPDf8ar1y6iGw6RhzAZ4c578/k1w5tTr7E659Spoyh8AJR3PqIS2PMJAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/badgepmod.data.png":
/*!*********************************************!*\
  !*** ./src/chatbox/imgs/badgepmod.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_13662__) => {

module.exports=(__nested_webpack_require_13662__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAMAAACTbPdTAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAASUExURZaWlgAAAODg4KKiogAAAQAAAJ/NAioAAAAGdFJOU///////ALO/pL8AAAAJbm9QRQAAAAAAAAAAAKGKctUAAAA3SURBVBhXbYxJDgAwCAKJy/+/XMT20FYwZOYikJW9sAJz7WcEc9e+JuyAz26jRtQR29TJcJK5AISjAaw7YIwNAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/badgepmodvip.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/badgepmodvip.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_14337__) => {

module.exports=(__nested_webpack_require_14337__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAMAAACTbPdTAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAPUExURQAAAJaWlq2trQAAAQAAAIuYQeUAAAAFdFJOU/////8A+7YOUwAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAEJJREFUGFc1jYkNADEIwzB0/5kvjy5FFIsA8yL6ldhiCFFwiETWuHHnUFtOEOzZ6zkuz3Ndsl0Tp+qiSVWT6L/M8j52yAF52AYCBwAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/badgergim.data.png":
/*!*********************************************!*\
  !*** ./src/chatbox/imgs/badgergim.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_15012__) => {

module.exports=(__nested_webpack_require_15012__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACW5vUEUAAAAAAAAAAAChinLVAAABWUlEQVQokW2SP0tCYRTGfzeEoCEXowgMkaBNGrpbIugHaMkaWhpabsRFyvoCNRnCTQIX6wsUfYHIQXNKh2rxz+UiOigZ0g0Ro+FtqPvirR544T3w/HjOORz4kXgIC0NTxeLMrHygCFCEoaniPh0SjldxgLPLEefXLQJePxF9F9sq0up80q9Uadpt9tYXWFn8YPXgSZm4T4dEqWBL4LZwhm0VqTd6AET0XQJeP4lsmbI5iaGpwuNEmr0XGo83HKZyEhgN3ngu5ZlamgMTKQ9A2ZwE4DCV4/Roh5PrGgC2VQSg3vg2W6/TBH3veBiTNxhGmV/ltzY2t1z1xHjxXMpznLlwGZKJbUaDNzfktPYfmExsy/kcWa/T7qR+pfqnNYBhretOSmQfFAA9HqVpt+lXqnIBrc4nw1qXpt1Gj0cJ+t7JXN0pkjY0VejxmLyC/bVl+dfjMWFoqryIL5m9mkOjusTLAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/badgevip.data.png":
/*!********************************************!*\
  !*** ./src/chatbox/imgs/badgevip.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_15955__) => {

module.exports=(__nested_webpack_require_15955__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACW5vUEUAAAAAAAAAAAChinLVAAAAaElEQVQokXWQURXAMAgDw5ysJmatEmoNE6uU7YuWAskvHLkHQHKP92OziwLKwQTFxQoUqqEAnlpPjmtaLwH7wOxNJGlUoANWUwILPQMA8r3VRnQXlPSsRbPF2eSA2ZtE0LK/p245JM5/n7U13r3PcvMAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/chatLegacyBorder.data.png":
/*!****************************************************!*\
  !*** ./src/chatbox/imgs/chatLegacyBorder.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_16610__) => {

module.exports=(__nested_webpack_require_16610__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAIAAABMVPnqAAAAIUlEQVQYV2P4jwRAnNk92RA0mDjzJuRCOUAWlAMF//8DAJmOfBu3Ydq7AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/chat_link.data.png":
/*!*********************************************!*\
  !*** ./src/chatbox/imgs/chat_link.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_17113__) => {

module.exports=(__nested_webpack_require_17113__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAPUExURT08PFI0UU1MTG49QAAAAF99wrkAAAAFdFJOU/////8A+7YOUwAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAD5JREFUGFc1zQEOwDAIAkCg/P/NA3UmNZcWLbyF4AwSZ9Fmn+r3m1TZDADldBbJimm5nN6hdbLjXX2eL1P2B1fHAVK6b6twAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/chatbubble.data.png":
/*!**********************************************!*\
  !*** ./src/chatbox/imgs/chatbubble.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_17784__) => {

module.exports=(__nested_webpack_require_17784__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACW5vUEUAAAAAAAAAAAChinLVAAAAfklEQVQYlX2Quw2AUAhFD0ZnsbEwcQFXcTIncgALo50DaGu0AcUP3oIE3uHyQEBQ7cQSDQKw99PwSc3rQl2UACIgv6CpLkqSaK4HTZ/wExyz7YLndTmBCAS3YNt30Y9o8gp0Qaudp7NGhdQUUmcgvsncuAO33E94PUSne4EABza8K521cSgfAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/clan.data.png":
/*!****************************************!*\
  !*** ./src/chatbox/imgs/clan.data.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_18419__) => {

module.exports=(__nested_webpack_require_18419__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAJCAYAAADDylfFAAAACW5vUEUAAAAAAAAAAAChinLVAAAAnklEQVQoka1TwQ3EIAxzTh0BvgzBm3GuD3bpO52KJfgyhO9FhShUujss5RNbJIqNkESP8zyvZoxRboJfQXJYAAiAIQTONN/W3w+oKlV1ulDLrdkY4HEc04Hee773ndsKK1T1kU8pCQC8VgyLMUrOGdbae9oaLBkGAM45lFKekzu6dTV9ZHzb6zXGmMfkyuifAYCIXARJ6bnaq7peM8IHaltXKPxAmD0AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/entertochat.data.png":
/*!***********************************************!*\
  !*** ./src/chatbox/imgs/entertochat.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_19126__) => {

module.exports=(__nested_webpack_require_19126__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABgAAAAJCAYAAAAo/ezGAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAB5SURBVDhPY5w2bdp/BijIyspihDKpDkCW/LexsYFbRjcA8iGyL5EBLjl8enCB/01NTbg0/O/p6cGQExERAYmRZAlWQI5rSQYVFRX/oS7GAExQmiIgJyfH8ObNG6wpkOxkCtMH0wPyATZLYALI3iPaEiCA6cOhh4EBAK3yO+ASYtdMAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/filterbutton.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/filterbutton.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_19825__) => {

module.exports=(__nested_webpack_require_19825__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAAaElEQVQ4T9XLsQ2AMAxEUc+BxBysySTsQcEI7EF36JAcORdHoUMUv8jFz65jgXZuU2lf5zQD0OARonkg4+Eb6PcFMgc9GG8ryHpQ76qHp1D/WTOwCPXPS8fvINM/Lx1/CHWPpeMIAbAba/5W9dGOZAMAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/friends.data.png":
/*!*******************************************!*\
  !*** ./src/chatbox/imgs/friends.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_20416__) => {

module.exports=(__nested_webpack_require_20416__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAACkAAAAJCAYAAACvzAXAAAAACW5vUEUAAAAAAAAAAAChinLVAAAAk0lEQVQ4jc1TyQ3AIAxz+mQchmASPgzDO+O6jwqU0qKWHhKW8sDGkpVDSKJAVesjpSSYBGJDAoCIVILkFEGXliAppSxvu9xCVXmlj/gKXzWSt2v73tdCCF3de3+qAWCM8aABIAA657gb95OdbDvxxy5/spPWM+K7i0PIGbHknF+nvDqcUV97OJ91sox8dNQ9n12hFbcv1iTAIoVRAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/gameall.data.png":
/*!*******************************************!*\
  !*** ./src/chatbox/imgs/gameall.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_21091__) => {

module.exports=(__nested_webpack_require_21091__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVQ4T6XMsQkCQRAF0KnA5DA0MDG3A2uwlQuN7cVY07vgAkPBTA3FAixA5esXvuyeC+O6Cw+Gv/PH7oc5Hsf/sGupjxx2289Ar2c51LNrNwX1FzzqRQc0e6ID580YxFCzJ9y1y3oIYphDPTutBiCGmj3hbvmB3XICYphDveiA5hQVRfnXge1i9KY8/A9p7zP0FzzqlR9o6wolrEmEv2rqCk/yGcSB9N78JQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/gamefilter.data.png":
/*!**********************************************!*\
  !*** ./src/chatbox/imgs/gamefilter.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_21774__) => {

module.exports=(__nested_webpack_require_21774__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4T63MsQrCQBAE0P1LSzs7Sy3tBEvtFDFNwMYurVhY2lgKfkHyBXbJ6AQm3AnHcaeBB3ubnbGiaVE0XZZD3cI2jxd+MRR8Pkvxv4LVrQa5yxjeKucVaI7xChaXJ4jLFMp5BZpjvIJ5dQdxqTnGvbXZ6QriMoVyNi3PIC41E3+6bwVFe69gsq8QoqAMBaGDGOVsvD5mFzDbF7jUHPJ9b6PlDvm2eAMxAQErxoTm+QAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/gameoff.data.png":
/*!*******************************************!*\
  !*** ./src/chatbox/imgs/gameoff.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_22453__) => {

module.exports=(__nested_webpack_require_22453__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVQ4T62MsQrAIAxE/bwOhS7tkMHBLi79/zVthAvaCjZq4MFx5J6jePEI8wTPOQsq2M/YJcAuBQHlH/LfuQILVQFyi0Kw+cCClMgt8t9CYEEFK3kVINfAEKBPI0FK5BoYAvSFwIIKloNYeD+0+Ah6GRQQ30BWZJSYN2VIAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/group.data.png":
/*!*****************************************!*\
  !*** ./src/chatbox/imgs/group.data.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_23052__) => {

module.exports=(__nested_webpack_require_23052__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAEEAAAAJCAYAAABt/EFEAAAACW5vUEUAAAAAAAAAAAChinLVAAAA6ElEQVRIib1VORKEMAyTt6U1H6HmQ34CLbShhf/xEW2zYWCTcAY840bElidyhJDEf4zjOINmJsGBl+PxeUhGEwABsKoqps68mX6euq6zz3OpaBiGYJAYttfjbM2VXqlvS/yWMkewrUsEQFWlc+7yZTRNM/dq2zbaB0CUQ1UJ4JrqOXJ5YU9x7G2Dz8+eZ5iZdF0Xuud9L1oZXFEU2Tl8mJlM04SyLOMcTyqQ2qqYKjj4lO5yR7cy9lbOmpZzjqka1/crXFW5rDmzznfN13MvZyMJ+akQhIh4eQ7/l7dqRIRn8FTvnDP5+AIifJTAV+ThlQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/groupironman.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/groupironman.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_23863__) => {

module.exports=(__nested_webpack_require_23863__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAACW5vUEUAAAAAAAAAAAChinLVAAABMklEQVRIicVVq5aEMAxN1mKLHY3mm3ZEHT+Aqq1uvwqNx+Kxd8VuOV3oc4aZuefE5NGbpknKAOgIa+2ulFLyyeFNsNbik/zVABAUIgIRoe97xHxeLcYY/Kb4Gf5a+UoUmQHwNE2nzvA7N6VLwVqL2phHuVN23xbzy+W62x59BQp0TEgX6zjnL4SA1joYF+vMUp1SatelJszl4/y+7/fg+bE8XVzxxa8W//IxjneOedd1SR5jDHK1iI65g5SSlVLV45gDgH/ro2mayzlqMM9z8qOTUvKyLNS2bTTPbDGJiMZxvORHdbvluH+klLxt2xUUL8XtdqN1XeO1CO2Bkpb2RWuNVIyvF0LAj8mN1jAMSZ8c97NyPNvlHxL+218nMLNbbMVdmYphZtToS+3P5FuK0rN/AOEVJJ5y5tKyAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/guestclan.data.png":
/*!*********************************************!*\
  !*** ./src/chatbox/imgs/guestclan.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_24758__) => {

module.exports=(__nested_webpack_require_24758__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAD4AAAAJCAYAAABqvp9RAAAACW5vUEUAAAAAAAAAAAChinLVAAAA7ElEQVRIicWUPQ6DMAyFn6VOzDlJZmbukhswM9OO5lSchEO8DiVVCnGKKBRLXvynF39JhCSWNgzDOxhCkFXBn+0UPSSzDoAA6L2nVfNPj3rquj5Ej+SI77VIZknFImbVn6EhzYcQ5BQyTdOsqGAmVlXVR845RwCH3ioA7PvenOm9523LBrcQiZtW1VXu/niQZHbGNE2H/yE5DamN47iNeNd1m4hgphr9yj+hbVs650wNPw1X1UsP94s25N6CqrLUmObSrVp9Mb53UaX+NLasKRE3f3URed1d422KCHM5qy/GSzNLVupPtXzTHe0JdtDHDLnNhzQAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/legacyreport.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/legacyreport.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_25573__) => {

module.exports=(__nested_webpack_require_25573__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAACEAAAALCAYAAADx0+Q/AAAAlElEQVQ4T72OCQ4AIQgD/f+nXYuUgGLiukeTQVq8Sp2F7FdQWi2GKmz6CEh6Mfq4DQf/FfaO1EFt1ocKRX+SQ35lD/ErPcOafICfgp7kEGe9tF6gwYKiK/GaLrjbOx/mwSiQ9Ty8uuCgJ5YFo0zeKc0W+30+3kkgmYyXpJ5oZt5lRpZn+4DszQYbpI+fkoY7vPeJWi767hYjK0Ud6gAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/minusbutton.data.png":
/*!***********************************************!*\
  !*** ./src/chatbox/imgs/minusbutton.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_26240__) => {

module.exports=(__nested_webpack_require_26240__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAABL0lEQVQoU2PIzMk01hbUVGDDg4AKgMoYgFRLCPOOOtbdLWxAtLeTHYIgXKA4EAEVAJUxaMizbilju75E9u4mNUx0Y7UqUGp3MzdQGYOKLCuQ9XCH7qPdxg+2Gt3aYgQkgWw4AqoGKgAqQ1EKVIep9NY2LRSlt5ZrXV6tc3axNgRdXgbiQhDQ1J1VfDClNcJAuSBTJjjy1GNy1WSyUWI0kWa8PE8JRem9VcaYirRFGIAIaOHmIhEUpQ9X2D1e74WGgIK3ZhluzRWFKt1VKXNvjgYE3exVujNZFYiQGViUQuSudCkD0bkGJSAJVAckUZQC+demaMBJoDpktClVEqRUVY6jOYRvR5HsznoVILklUxpIQhCQDUE1LtxAZQw6JgZAHfKSLLLi2BFQCqhAx8QAACI62b/ivxHFAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/plusbutton.data.png":
/*!**********************************************!*\
  !*** ./src/chatbox/imgs/plusbutton.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_27107__) => {

module.exports=(__nested_webpack_require_27107__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAABT0lEQVQoU2PIzMk01hbUVGDDg4AKgMoYgFRLCPOOOtbdLWxAtLeTHYIgXKA4EAEVAJUxaMizbilju75E9u4mNSC6sVoVguBcoNTuZm6gMgYVWVYg6+EO3Ue7jYHo3irjIFOmYAumWztBXCC6tVwLqACoDEXprS1GQARUCkQQdSDBbahKgVovr9Y5u1j78jItTz0mIAJyIQjohp1VfDClNcJwFa6a6OjyPCUUpUAnAkUd1BiByEYJBQEt3FwkgqL04Qq7x+u9gCRQ2kKOEc69NcsQoXRXpcy9ORoQdKVL2USaEYhu9irdmawKREDG1lxRdKVACaAZ2iIMQHS1UweoDYJQlAL516aAjAQqvTLJBogutBmca1CCoE2pkiClqnIczSF8O4pkd9arAMktmdJAEoKAKoBcIKpx4QYqY9AxMQDqkJdkkRXHjoBSQAU6JgYAwvDKbZkKUHAAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/private.data.png":
/*!*******************************************!*\
  !*** ./src/chatbox/imgs/private.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_28006__) => {

module.exports=(__nested_webpack_require_28006__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAACgAAAAJCAYAAABADm7+AAAACW5vUEUAAAAAAAAAAAChinLVAAAAwElEQVQ4jc2SwQ2DMAxFX6qOEM5sw5k1sgFDAEdnSIb4vTRVUqAlCKn9kg9xbP/v5DtJJMQYX4cQguMfIKkIQID6vtf73S+iqtjMqkWbmbb6jubrN4JqkYDGcVz1ee+1NQ9Q13WSxD3/7iMelFTtTTPbzC/LUsxK/EX9ngfPvNQnCwzDIO/915k5P3CdmZO4vcXO+FcSt2maxEVo21a5BWKMSt8WQnBN0xRc0zyvuPMeAPfc+hI45wqBKQd13s17HtIubhmwKYH7AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/chatbox/imgs/privateRecent.data.png":
/*!*************************************************!*\
  !*** ./src/chatbox/imgs/privateRecent.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_28765__) => {

module.exports=(__nested_webpack_require_28765__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAACW5vUEUAAAAAAAAAAAChinLVAAAAUElEQVQokb2QuQ3AMAwDj15F+6+kFTQCUzhKZRd2EQJqBPCVbbOGNn8ABiBJRASZiaS+neBU3Rsu4U4yTlhvOt84fjh1/JFYVWaOc9exx3kAqNgZ4Q1XRz4AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/chatbox/imgs/public.data.png":
/*!******************************************!*\
  !*** ./src/chatbox/imgs/public.data.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_29348__) => {

module.exports=(__nested_webpack_require_29348__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAACEAAAAJCAYAAAC8G0U0AAAACW5vUEUAAAAAAAAAAAChinLVAAAAi0lEQVQ4jcWTwQ3EIAwEd68GF0YRfOiFN5S7eRkBIdJxSnIr+YHXlswYKAmuWms7pJSItyRpCAACoBCCZu+pYE/iVznBHXpDz123AaAY4xY9ADIzDST+9SZO6yDZEpJeGeQzJyTR46qpJ3aLcs5f77GU0mrNTH2+91b1K8/97d9BUitKvsbZu6rvew6661SBlfK4XgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/imgs/reportbutton.data.png":
/*!************************************************!*\
  !*** ./src/chatbox/imgs/reportbutton.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_30035__) => {

module.exports=(__nested_webpack_require_30035__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABAElEQVQ4T6WSvwtBURTHj0V+FknyB6AMZCH8ATbxByijwb9gsFsMBrvJaFAGu00sJilltlp0+N7Xua7rySuvPr1z7z2f77m9Ht0PdQbPR9cm2P8G3TZlBli4yUCabd5kqUG/W+FmI+8aJtB1lWUAWWrIvXaSS8WsCpHA9cg5E1xlQQJOi5y6RToVVQHST8d5nAEWUguXpSNDAoOOswc+5P0sxgL2MNkUzV4lo3E7DaoNvAWIkbCfC5moYtIL6OCfcqsWUqDGVATZAVqwZbAeJ/QbVyfy8WyYesnm5G+gBwG4gUwG+iPZgs3OkATPshuEHwDYB16g86LKwD7wwh8y0wNntoLFjD8QsQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/chatbox/index.ts":
/*!******************************!*\
  !*** ./src/chatbox/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_30786__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultcolors = void 0;
const a1lib = __importStar(__nested_webpack_require_30786__(/*! alt1/base */ "alt1/base"));
const base_1 = __nested_webpack_require_30786__(/*! alt1/base */ "alt1/base");
const OCR = __importStar(__nested_webpack_require_30786__(/*! alt1/ocr */ "alt1/ocr"));
const base_2 = __nested_webpack_require_30786__(/*! alt1/base */ "alt1/base");
let chatfont = __nested_webpack_require_30786__(/*! ../fonts/aa_8px.fontmeta.json */ "./src/fonts/aa_8px.fontmeta.json");
let fonts = [
    { name: "10pt", lineheight: 14, badgey: -9, dy: 2, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/10pt.fontmeta.json */ "./src/fonts/chatbox/10pt.fontmeta.json") },
    { name: "12pt", lineheight: 16, badgey: -9, dy: -1, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/12pt.fontmeta.json */ "./src/fonts/chatbox/12pt.fontmeta.json") },
    { name: "14pt", lineheight: 18, badgey: -10, dy: -3, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/14pt.fontmeta.json */ "./src/fonts/chatbox/14pt.fontmeta.json") },
    { name: "16pt", lineheight: 21, badgey: -10, dy: -6, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/16pt.fontmeta.json */ "./src/fonts/chatbox/16pt.fontmeta.json") },
    { name: "18pt", lineheight: 23, badgey: -11, dy: -8, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/18pt.fontmeta.json */ "./src/fonts/chatbox/18pt.fontmeta.json") },
    { name: "20pt", lineheight: 25, badgey: -11, dy: -11, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/20pt.fontmeta.json */ "./src/fonts/chatbox/20pt.fontmeta.json") },
    { name: "22pt", lineheight: 27, badgey: -12, dy: -13, def: __nested_webpack_require_30786__(/*! ../fonts/chatbox/22pt.fontmeta.json */ "./src/fonts/chatbox/22pt.fontmeta.json") },
];
const imgs = (0, base_2.webpackImages)({
    plusbutton: __nested_webpack_require_30786__(/*! ./imgs/plusbutton.data.png */ "./src/chatbox/imgs/plusbutton.data.png"),
    minusbutton: __nested_webpack_require_30786__(/*! ./imgs/minusbutton.data.png */ "./src/chatbox/imgs/minusbutton.data.png"),
    filterbutton: __nested_webpack_require_30786__(/*! ./imgs/filterbutton.data.png */ "./src/chatbox/imgs/filterbutton.data.png"),
    chatbubble: __nested_webpack_require_30786__(/*! ./imgs/chatbubble.data.png */ "./src/chatbox/imgs/chatbubble.data.png"),
    chatLegacyBorder: __nested_webpack_require_30786__(/*! ./imgs/chatLegacyBorder.data.png */ "./src/chatbox/imgs/chatLegacyBorder.data.png"),
    entertochat: __nested_webpack_require_30786__(/*! ./imgs/entertochat.data.png */ "./src/chatbox/imgs/entertochat.data.png"),
    gameoff: __nested_webpack_require_30786__(/*! ./imgs/gameoff.data.png */ "./src/chatbox/imgs/gameoff.data.png"),
    gamefilter: __nested_webpack_require_30786__(/*! ./imgs/gamefilter.data.png */ "./src/chatbox/imgs/gamefilter.data.png"),
    gameall: __nested_webpack_require_30786__(/*! ./imgs/gameall.data.png */ "./src/chatbox/imgs/gameall.data.png"),
    legacyreport: __nested_webpack_require_30786__(/*! ./imgs/legacyreport.data.png */ "./src/chatbox/imgs/legacyreport.data.png"),
    reportbutton: __nested_webpack_require_30786__(/*! ./imgs/reportbutton.data.png */ "./src/chatbox/imgs/reportbutton.data.png"),
});
const chatimgs = (0, base_2.webpackImages)({
    public: __nested_webpack_require_30786__(/*! ./imgs/public.data.png */ "./src/chatbox/imgs/public.data.png"),
    private: __nested_webpack_require_30786__(/*! ./imgs/private.data.png */ "./src/chatbox/imgs/private.data.png"),
    privateRecent: __nested_webpack_require_30786__(/*! ./imgs/privateRecent.data.png */ "./src/chatbox/imgs/privateRecent.data.png"),
    clan: __nested_webpack_require_30786__(/*! ./imgs/clan.data.png */ "./src/chatbox/imgs/clan.data.png"),
    guestclan: __nested_webpack_require_30786__(/*! ./imgs/guestclan.data.png */ "./src/chatbox/imgs/guestclan.data.png"),
    friends: __nested_webpack_require_30786__(/*! ./imgs/friends.data.png */ "./src/chatbox/imgs/friends.data.png"),
    group: __nested_webpack_require_30786__(/*! ./imgs/group.data.png */ "./src/chatbox/imgs/group.data.png"),
    groupironman: __nested_webpack_require_30786__(/*! ./imgs/groupironman.data.png */ "./src/chatbox/imgs/groupironman.data.png"),
});
const chatmap = {
    public: "main",
    private: "pc",
    clan: "cc",
    guestclan: "gcc",
    friends: "fc",
    group: "gc",
    groupironman: "gimc",
    privateRecent: "pc", // needs to be last to not mess with the buf
};
const chatbadges = (0, base_2.webpackImages)({
    vip: __nested_webpack_require_30786__(/*! ./imgs/badgevip.data.png */ "./src/chatbox/imgs/badgevip.data.png"),
    pmod: __nested_webpack_require_30786__(/*! ./imgs/badgepmod.data.png */ "./src/chatbox/imgs/badgepmod.data.png"),
    pmodvip: __nested_webpack_require_30786__(/*! ./imgs/badgepmodvip.data.png */ "./src/chatbox/imgs/badgepmodvip.data.png"),
    broadcast_gold: __nested_webpack_require_30786__(/*! ./imgs/badge_broadcast_gold.data.png */ "./src/chatbox/imgs/badge_broadcast_gold.data.png"),
    broadcast_silver: __nested_webpack_require_30786__(/*! ./imgs/badge_broadcast_silver.data.png */ "./src/chatbox/imgs/badge_broadcast_silver.data.png"),
    broadcast_bronze: __nested_webpack_require_30786__(/*! ./imgs/badge_broadcast_bronze.data.png */ "./src/chatbox/imgs/badge_broadcast_bronze.data.png"),
    broadcast_death: __nested_webpack_require_30786__(/*! ./imgs/badge_broadcast_death.data.png */ "./src/chatbox/imgs/badge_broadcast_death.data.png"),
    ironman: __nested_webpack_require_30786__(/*! ./imgs/badgeironman.data.png */ "./src/chatbox/imgs/badgeironman.data.png"),
    hcim: __nested_webpack_require_30786__(/*! ./imgs/badgehcim.data.png */ "./src/chatbox/imgs/badgehcim.data.png"),
    rgim: __nested_webpack_require_30786__(/*! ./imgs/badgergim.data.png */ "./src/chatbox/imgs/badgergim.data.png"),
    gim: __nested_webpack_require_30786__(/*! ./imgs/badgegim.data.png */ "./src/chatbox/imgs/badgegim.data.png"),
    chatlink: __nested_webpack_require_30786__(/*! ./imgs/chat_link.data.png */ "./src/chatbox/imgs/chat_link.data.png"),
});
const badgemap = {
    vip: "\u2730",
    pmod: "\u2655",
    pmodvip: "\u2655",
    broadcast_gold: "\u2746",
    broadcast_silver: "\u2746",
    broadcast_bronze: "\u2746",
    broadcast_death: "\u{1F480}",
    ironman: "\u26AF",
    hcim: "\u{1F480}",
    rgim: "\u328F",
    gim: "\u3289",
    chatlink: "\u{1F517}", //LINK SYMBOL
};
exports.defaultcolors = [
    [0, 255, 0],
    [0, 255, 255],
    [0, 175, 255],
    [0, 0, 255],
    [255, 82, 86],
    [159, 255, 159],
    [0, 111, 0],
    [255, 143, 143],
    [255, 152, 31],
    [255, 111, 0],
    [255, 255, 0],
    //[239, 0, 0],//messes up broadcast detection [255,0,0]
    [239, 0, 175],
    [255, 79, 255],
    [175, 127, 255],
    //[48, 48, 48],//fuck this color, its unlegible for computers and people alike
    [191, 191, 191],
    [127, 255, 255],
    [128, 0, 0],
    [255, 255, 255],
    [127, 169, 255],
    [255, 140, 56],
    [255, 0, 0],
    [69, 178, 71],
    [164, 153, 125],
    [215, 195, 119],
    [255, 255, 176], //gim exclusive?
];
class ChatBoxReader {
    constructor() {
        //settings
        this.readargs = {
            colors: exports.defaultcolors.map(c => a1lib.mixColor(c[0], c[1], c[2]))
        };
        this.minoverlap = 2;
        this.diffRead = true;
        this.diffReadUseTimestamps = true;
        this.forwardnudges = defaultforwardnudges.slice();
        this.backwardnudges = defaultbackwardnudges.slice();
        //state
        this.pos = null;
        this.debug = null;
        this.overlaplines = [];
        this.lastTimestamp = -1;
        this.lastTimestampUpdate = 0;
        this.addedLastread = false;
        this.font = null;
        this.lastReadBuffer = null;
    }
    readChatLine(box, imgdata, imgx, imgy, font, ocrcolors, linenr) {
        var liney = box.line0y - linenr * font.lineheight + font.dy;
        let ctx = {
            badgedy: font.badgey,
            baseliney: liney + box.rect.y - imgy,
            colors: ocrcolors,
            font: font.def,
            forward: true,
            imgdata,
            leftx: box.line0x + box.rect.x - imgx,
            rightx: box.line0x + box.rect.x - imgx,
            text: "",
            fragments: [],
            addfrag(frag) {
                if (this.forward) {
                    this.fragments.push(frag);
                    this.text += frag.text;
                    this.rightx = frag.xend;
                }
                else {
                    this.fragments.unshift(frag);
                    this.text = frag.text + this.text;
                    this.leftx = frag.xstart;
                }
            }
        };
        if (!box.leftfound) {
            let col = OCR.getChatColor(imgdata, { x: ctx.rightx - 5, y: ctx.baseliney - 10, width: 10, height: 10 }, ocrcolors);
            if (!col) {
                return { text: "", fragments: [], basey: liney };
            }
            let pos = OCR.findChar(imgdata, font.def, col, ctx.rightx - 5, ctx.baseliney, font.def.width, 1);
            if (!pos) {
                return { text: "", fragments: [], basey: liney };
            }
            ctx.rightx = pos.x;
            ctx.leftx = pos.x;
        }
        for (let dirforward of [false, true]) {
            if (box.leftfound && !dirforward) {
                continue;
            }
            ctx.forward = dirforward;
            let nudges = (dirforward ? this.forwardnudges : this.backwardnudges);
            retryloop: while (true) {
                for (let nudge of nudges) {
                    let m = ctx.text.match(nudge.match);
                    if (m) {
                        if (nudge.fn(ctx, m)) {
                            continue retryloop;
                        }
                    }
                }
                break;
            }
        }
        ctx.fragments.forEach(f => { f.xstart += imgx; f.xend += imgx; });
        if (!box.leftfound) {
            let found = false;
            let extraoffset = 0;
            //ignore lines with news in them since the preceeding news icon often doesn't match in backward reads
            if (ctx.text.match(/^(\[\w)/i) && ctx.text.indexOf("News") == -1) {
                found = true;
            }
            if (found) {
                let dx = ctx.fragments[0].xstart - box.rect.x - extraoffset;
                box.rect.x += dx;
                box.rect.width -= dx;
                box.leftfound = true;
                console.log("found box left because of chat contents", ctx.text);
            }
        }
        return { text: ctx.text, fragments: ctx.fragments, basey: ctx.baseliney + imgy };
    }
    read(img) {
        if (!this.pos) {
            return null;
        }
        var box = this.pos.mainbox;
        var leftmargin = (box.leftfound ? 0 : 300);
        let imgx = box.rect.x - leftmargin;
        let imgy = box.rect.y;
        let imgdata;
        if (img) {
            imgdata = img.toData(imgx, imgy, box.rect.width + leftmargin, box.rect.height);
        }
        else {
            imgdata = a1lib.capture(imgx, imgy, box.rect.width + leftmargin, box.rect.height);
        }
        this.lastReadBuffer = new base_1.ImgRefData(imgdata, imgx, imgy);
        //add timestamp colors if needed
        //TODO
        if (true) {
            var cols = [a1lib.mixColor(127, 169, 255), a1lib.mixColor(255, 255, 255)];
            for (var a in cols) {
                if (this.readargs.colors.indexOf(cols[a]) == -1) {
                    this.readargs.colors.push(cols[a]);
                }
            }
        }
        var ocrcolors = this.readargs.colors.map(c => a1lib.unmixColor(c));
        if (!this.font) {
            for (let font of fonts) {
                let line1 = this.readChatLine(box, imgdata, imgx, imgy, font, ocrcolors, 0);
                let line2 = this.readChatLine(box, imgdata, imgx, imgy, font, ocrcolors, 1);
                let m = (line1.text + line2.text).match(/\w/g);
                if (m && m.length > 10) {
                    this.font = font;
                    break;
                }
            }
        }
        if (!this.font) {
            return null;
        }
        var readlines = [];
        var newlines = [];
        let hadtimestampless = false;
        for (var line = 0; true; line++) {
            var liney = box.line0y - line * this.font.lineheight + this.font.dy;
            if (liney - this.font.lineheight < 0) {
                newlines = readlines;
                break;
            }
            let newline = this.readChatLine(box, imgdata, imgx, imgy, this.font, ocrcolors, line);
            readlines.unshift(newline);
            //combine with previous reads
            if (this.diffRead) {
                let time = ChatBoxReader.getMessageTime(newline.text);
                if (this.diffReadUseTimestamps && !this.addedLastread && !hadtimestampless && time != -1 && this.lastTimestamp != -1) {
                    //don't block messages in the same second as last update
                    if (Date.now() > this.lastTimestampUpdate + 1000) {
                        const maxtime = 24 * 60 * 60;
                        let diff = time - this.lastTimestamp;
                        //wrap around at 00:00:00
                        if (diff < -maxtime / 2) {
                            diff += maxtime;
                        }
                        //don't accept messages with older timestamp
                        if (diff <= 0) {
                            newlines = readlines.slice(1);
                            break;
                        }
                    }
                }
                else {
                    //can not use timestamps if there is a msg without timestamp in the same batch
                    hadtimestampless = true;
                }
                if (readlines.length >= this.overlaplines.length && this.overlaplines.length >= this.minoverlap) {
                    var matched = true;
                    for (let a = 0; a < this.overlaplines.length; a++) {
                        if (!this.matchLines(this.overlaplines[a].text, readlines[a].text)) {
                            matched = false;
                            break;
                        }
                    }
                    if (matched) {
                        newlines = readlines.slice(this.overlaplines.length, readlines.length);
                        break;
                    }
                }
            }
        }
        //update the last message timestamp
        this.addedLastread = newlines.length != 0;
        for (let a = newlines.length - 1; a >= 0; a--) {
            let time = ChatBoxReader.getMessageTime(newlines[a].text);
            if (time != -1) {
                this.lastTimestamp = time;
                this.lastTimestampUpdate = Date.now();
                break;
            }
        }
        //add new lines
        this.overlaplines = this.overlaplines.concat(newlines);
        if (this.overlaplines.length > this.minoverlap) {
            this.overlaplines.splice(0, this.overlaplines.length - this.minoverlap);
        }
        //console.log("Read chat attempt time: " + (Date.now() - t));
        //for (let a = 0; a < newlines.length; a++) { console.log(newlines[a]); }
        return newlines;
    }
    //convert some similar characters to prevent problems when a character is slightly misread
    simplifyLine(str) {
        str = str.replace(/[\[\]\.\':;,_ ]/g, "");
        str = str.replace(/[|!lIji]/g, "l");
        return str;
    }
    matchLines(line1, line2) {
        return this.simplifyLine(line1) == this.simplifyLine(line2);
    }
    checkLegacyBG(buf, x, y) {
        return buf.getColorDifference(x, y, 155, 140, 107) < 20;
    }
    find(imgornull) {
        if (!imgornull) {
            imgornull = a1lib.captureHoldFullRs();
        }
        if (!imgornull) {
            return null;
        }
        var img = imgornull;
        var toprights = [];
        img.findSubimage(imgs.plusbutton).forEach(loc => toprights.push({ x: loc.x + 5, y: loc.y + 21, type: "hidden" }));
        img.findSubimage(imgs.filterbutton).forEach(loc => toprights.push({ x: loc.x + 19, y: loc.y + 19, type: "hidden" }));
        img.findSubimage(imgs.minusbutton).forEach(loc => toprights.push({ x: loc.x + 5, y: loc.y + 21, type: "full" }));
        var botlefts = [];
        img.findSubimage(imgs.chatbubble).forEach(loc => {
            //107,2 press enter to chat
            //102,2 click here to chat
            // biggest chat size is 83 + 4 pixels
            var data = img.toData(loc.x + 19, loc.y, 87 + (107 - 102), 10);
            for (let chat in chatimgs.raw) {
                let cimg = chatimgs.raw[chat];
                if (data.pixelCompare(cimg, 0, 1) != Infinity || data.pixelCompare(cimg, (107 - 102), 1) != Infinity) {
                    botlefts.push(loc);
                }
                //i don't even know anymore some times the bubble is 1px higher (i think it might be java related)
                else if (data.pixelCompare(cimg, 0, 0) != Infinity || data.pixelCompare(cimg, (107 - 102), 0) != Infinity) {
                    loc.y -= 1;
                    botlefts.push(loc);
                }
                //active chat
                else {
                    var pixel = img.toData(loc.x, loc.y - 5, 1, 1);
                    var pixel2 = img.toData(loc.x, loc.y - 4, 1, 1);
                    if (pixel.data[0] == 255 && pixel.data[1] == 255 && pixel.data[2] == 255) {
                        botlefts.push(loc);
                    }
                    //the weird offset again
                    else if (pixel2.data[0] == 255 && pixel2.data[1] == 255 && pixel2.data[2] == 255) {
                        loc.y -= 1;
                        botlefts.push(loc);
                    }
                    else {
                        //console.log("unlinked quickchat bubble " + JSON.stringify(loc));
                    }
                }
            }
        });
        img.findSubimage(imgs.chatLegacyBorder).forEach(loc => {
            botlefts.push({ x: loc.x, y: loc.y - 1 });
        });
        // previously activated private chat showing "To"
        img.findSubimage(chatimgs.privateRecent).forEach(loc => {
            botlefts.push({ x: loc.x, y: loc.y - 1 });
        });
        //check if we're in full-on legacy
        if (botlefts.length == 1 && toprights.length == 0) {
            //cheat in a topright without knowing it's actual height
            var pos = img.findSubimage(imgs.legacyreport);
            if (pos.length == 1) {
                toprights.push({ x: pos[0].x + 32, y: pos[0].y - 170, type: "legacy" });
            }
        }
        var groups = [];
        var groupcorners = function () {
            var done = true;
            for (var a in toprights) {
                if (groups.find(q => q.topright == toprights[a])) {
                    continue;
                }
                done = false;
                for (var b in botlefts) {
                    if (groups.find(q => q.botleft == botlefts[b])) {
                        continue;
                    }
                    var group = {
                        timestamp: false,
                        type: "main",
                        leftfound: false,
                        topright: toprights[a],
                        botleft: botlefts[b],
                        rect: new a1lib.Rect(botlefts[b].x, toprights[a].y, toprights[a].x - botlefts[b].x, botlefts[b].y - toprights[a].y),
                        line0x: 0,
                        line0y: 0
                    };
                    if (groups.find(q => q.rect.overlaps(group.rect))) {
                        continue;
                    }
                    groups[groups.length] = group;
                    if (groupcorners()) {
                        return true;
                    }
                    groups.splice(groups.length - 1, 1);
                }
            }
            return done;
        };
        if (!groupcorners()) {
            return null;
        }
        var mainbox = null;
        groups.forEach(group => {
            // rect.x + 21 is the offset after chat bubble
            // buff & comp needs to be different for recent private chat as it doesn't have the chat bubble
            let buf = img.toData(group.rect.x + 19, group.rect.y + group.rect.height, 150, 10);
            let pbuf = img.toData(group.rect.x, group.rect.y + group.rect.height, 150, 10);
            for (let chat in chatmap) {
                let cimg = chatimgs.raw[chat];
                let comp = buf.pixelCompare(cimg, 0, 1);
                let pcomp = pbuf.pixelCompare(cimg, 0, 1);
                if (comp != Infinity || pcomp != Infinity) {
                    group.type = chatmap[chat];
                    break;
                }
            }
            if (!group.leftfound && group.topright.type == "full") {
                var pos = [];
                if (pos.length == 0) {
                    pos = img.findSubimage(imgs.gameall, Math.max(0, group.rect.x - 300), group.rect.y - 22, 310, 16);
                }
                if (pos.length == 0) {
                    pos = img.findSubimage(imgs.gamefilter, Math.max(0, group.rect.x - 300), group.rect.y - 22, 310, 16);
                }
                if (pos.length == 0) {
                    pos = img.findSubimage(imgs.gameoff, Math.max(0, group.rect.x - 300), group.rect.y - 22, 310, 16);
                }
                if (pos.length != 0) {
                    group.leftfound = true;
                    var d = group.rect.x - pos[0].x;
                    group.rect.x -= d;
                    group.rect.width += d;
                }
            }
            //alt1.overLayRect(a1lib.mixcolor(255, 255, 255), group.rect.x, group.rect.y, group.rect.width, group.rect.height, 10000, 2);
            //alt1.overLayTextEx(group.type, a1lib.mixcolor(255, 255, 255), 20, group.rect.x + group.rect.width / 2 | 0, group.rect.y + group.rect.height / 2 | 0, 10000, "", true, true);
            group.line0x = 0;
            group.line0y = group.rect.height - 16; //15;//12;//- 15;//-11//- 9;//-10 before mobile interface update
            if (group.leftfound) {
                group.timestamp = this.checkTimestamp(img, group);
            }
            if (mainbox == null || group.type == "main") {
                mainbox = group;
            }
        });
        if (groups.length == 0 || !mainbox) {
            return null;
        }
        var res = {
            mainbox: mainbox,
            boxes: groups
        };
        this.pos = res;
        return res;
    }
    checkTimestamp(img, pos) {
        //TODO replace this
        return false;
    }
    static getMessageTime(str) {
        let m = str.match(/^\[(\d{2}):(\d{2}):(\d{2})\]/);
        if (!m) {
            return -1;
        }
        return (+m[1]) * 60 * 60 + (+m[2]) * 60 + (+m[3]);
    }
    static getFontColor(buffer, x, y, w, h) {
        var bestscore = -Infinity;
        var bestx = 0, besty = 0;
        var data = buffer.data;
        for (var cx = x; cx < x + w - 1; cx++) {
            for (var cy = y; cy < y + h - 1; cy++) {
                var i1 = 4 * cx + 4 * buffer.width * cy;
                var i2 = 4 * (cx + 1) + 4 * buffer.width * (cy + 1);
                var colorness = data[i1] + data[i1 + 1] + data[i1 + 2];
                var blackness = data[i2] + data[i2 + 1] + data[i2 + 2];
                var score = Math.min(255, 255 + 20 - blackness) * colorness;
                if (score > bestscore) {
                    bestscore = score;
                    bestx = cx;
                    besty = cy;
                }
            }
        }
        return buffer.getPixel(bestx, besty);
    }
}
exports["default"] = ChatBoxReader;
let checkchatbadge = (ctx) => {
    let addspace = ctx.forward && ctx.text.length != 0 && ctx.text[ctx.text.length - 1] != " ";
    for (let badge in chatbadges.raw) {
        let bimg = chatbadges.raw[badge];
        let badgeleft = (ctx.forward ? ctx.rightx + (addspace ? ctx.font.spacewidth : 0) : ctx.leftx - bimg.width);
        let d = ctx.imgdata.pixelCompare(bimg, badgeleft, ctx.baseliney + ctx.badgedy);
        if (d < Infinity) {
            if (addspace) {
                ctx.addfrag({ color: [255, 255, 255], index: -1, xstart: ctx.rightx, xend: badgeleft, text: " " });
            }
            ctx.addfrag({ color: [255, 255, 255], index: -1, text: badgemap[badge], xstart: badgeleft, xend: badgeleft + bimg.width });
            return true;
        }
    }
};
let defaultforwardnudges = [
    {
        //fix for "[" first char
        match: /^$/,
        name: "timestampopen", fn: (ctx) => {
            let timestampopen = OCR.readChar(ctx.imgdata, ctx.font, [255, 255, 255], ctx.rightx, ctx.baseliney, false, false);
            if ((timestampopen === null || timestampopen === void 0 ? void 0 : timestampopen.chr) == "[") {
                ctx.addfrag({ color: [255, 255, 255], index: -1, text: "[", xstart: ctx.rightx, xend: ctx.rightx + timestampopen.basechar.width });
                return true;
            }
        }
    },
    {
        match: /(\] ?|news: ?|^)$/i,
        name: "badge", fn: checkchatbadge
    },
    {
        match: /.*/,
        name: "body", fn: ctx => {
            var data = OCR.readLine(ctx.imgdata, ctx.font, ctx.colors, ctx.rightx, ctx.baseliney, true, false);
            if (data.text) {
                data.fragments.forEach(f => ctx.addfrag(f));
                return true;
            }
        }
    },
    {
        match: /\[[\w: ]+$/,
        name: "timestampclose", fn: ctx => {
            let closebracket = OCR.readChar(ctx.imgdata, ctx.font, [255, 255, 255], ctx.rightx, ctx.baseliney, false, false);
            if ((closebracket === null || closebracket === void 0 ? void 0 : closebracket.chr) == "]") {
                ctx.addfrag({ color: [255, 255, 255], text: "] ", index: -1, xstart: ctx.rightx, xend: ctx.rightx + closebracket.basechar.width + ctx.font.spacewidth });
                return true;
            }
        }
    },
    {
        match: /(^|\]|:)( ?)$/i,
        name: "startline", fn: (ctx, match) => {
            let addspace = !match[2];
            let x = ctx.rightx + (addspace ? ctx.font.spacewidth : 0);
            let best = null;
            let bestcolor = null;
            for (let col of ctx.colors) {
                let chr = OCR.readChar(ctx.imgdata, ctx.font, col, x, ctx.baseliney, false, false);
                if (chr && (!best || chr.sizescore < best.sizescore)) {
                    best = chr;
                    bestcolor = col;
                }
            }
            if (bestcolor) {
                var data = OCR.readLine(ctx.imgdata, ctx.font, bestcolor, x, ctx.baseliney, true, false);
                if (data.text) {
                    if (addspace) {
                        ctx.addfrag({ color: [255, 255, 255], index: -1, text: " ", xstart: ctx.rightx, xend: x });
                    }
                    //console.log("hardrecol", text, data.text);
                    data.fragments.forEach(f => ctx.addfrag(f));
                    return true;
                }
            }
        }
    },
    {
        match: /\w$/,
        name: "whitecolon", fn: ctx => {
            let startx = ctx.rightx;
            let colonchar = OCR.readChar(ctx.imgdata, ctx.font, [255, 255, 255], startx, ctx.baseliney, false, true);
            if ((colonchar === null || colonchar === void 0 ? void 0 : colonchar.chr) == ":") {
                ctx.addfrag({ color: [255, 255, 255], index: -1, text: ": ", xstart: startx, xend: startx + colonchar.basechar.width + ctx.font.spacewidth });
                return true;
            }
        }
    }
];
let defaultbackwardnudges = [
    {
        match: /^(news: |[\w\-_]{1,12}: )/i,
        name: "badge", fn: checkchatbadge
    },
    {
        match: /.*/,
        name: "body", fn: ctx => {
            var data = OCR.readLine(ctx.imgdata, ctx.font, ctx.colors, ctx.leftx, ctx.baseliney, false, true);
            if (data.text) {
                data.fragments.reverse().forEach(f => ctx.addfrag(f));
                return true;
            }
        }
    },
    {
        match: /^\w/,
        name: "whitecolon", fn: ctx => {
            let startx = ctx.leftx - ctx.font.spacewidth;
            let colonchar = OCR.readChar(ctx.imgdata, ctx.font, [255, 255, 255], startx, ctx.baseliney, false, true);
            if ((colonchar === null || colonchar === void 0 ? void 0 : colonchar.chr) == ":") {
                startx -= colonchar.basechar.width;
                ctx.addfrag({ color: [255, 255, 255], index: -1, text: ": ", xstart: startx, xend: startx + colonchar.basechar.width + ctx.font.spacewidth });
                return true;
            }
        }
    }
];


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/aa_8px.fontmeta.json":
/*!****************************************!*\
  !*** ./src/fonts/aa_8px.fontmeta.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":140,"chr":"a","pixels":[0,7,187,255,1,3,221,255,1,6,169,255,1,7,164,132,1,8,255,255,2,3,255,255,2,4,221,0,2,5,196,243,2,7,170,0,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,5,255,255,3,6,187,0,3,8,221,255,3,9,255,0,4,4,254,239,4,5,255,255,4,6,254,204,4,7,255,255,4,8,240,253,4,9,221,0,5,5,240,36,5,6,255,34,5,7,211,41,5,8,255,34,5,9,238,0],"secondary":false},{"width":7,"bonus":175,"chr":"b","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,248,209,1,4,243,178,1,5,230,75,1,6,230,75,1,7,243,178,1,8,246,194,1,9,204,0,2,3,255,255,2,4,204,0,2,5,170,0,2,8,255,255,2,9,187,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,169,255,4,4,254,171,4,7,169,255,4,9,255,0,5,4,204,128,5,5,232,205,5,6,205,233,5,8,170,0,6,6,187,0,6,7,187,0],"secondary":false},{"width":7,"bonus":95,"chr":"c","pixels":[0,5,169,255,0,6,187,255,1,4,187,255,1,6,193,90,1,7,237,201,1,8,164,185,2,3,255,255,2,5,187,0,2,8,255,255,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,221,255,4,4,255,34,4,8,221,255,4,9,255,0,5,4,226,39,5,9,221,0],"secondary":false},{"width":7,"bonus":180,"chr":"d","pixels":[0,5,187,255,0,6,187,255,1,4,169,255,1,6,205,85,1,7,232,187,1,8,203,213,2,3,255,255,2,5,170,0,2,8,255,255,2,9,170,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,203,255,4,4,254,171,4,7,169,255,4,8,187,255,4,9,255,0,5,1,203,255,5,2,225,251,5,3,225,251,5,4,248,227,5,5,244,231,5,6,230,245,5,7,230,245,5,8,237,219,5,9,187,0,6,2,204,0,6,3,221,0,6,4,221,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":7,"bonus":135,"chr":"e","pixels":[0,5,187,255,0,6,169,255,1,4,187,255,1,5,255,255,1,6,209,104,1,7,237,219,2,3,255,255,2,5,255,255,2,6,255,0,2,8,255,255,3,3,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,3,187,255,4,4,255,119,4,5,255,255,4,6,255,0,4,8,221,255,4,9,255,0,5,4,224,155,5,5,227,229,5,6,255,0,5,9,221,0,6,6,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"f","pixels":[0,3,203,255,1,2,221,255,1,3,255,255,1,4,248,227,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,2,1,255,255,2,3,255,255,2,4,255,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0,3,2,255,0,3,4,255,0],"secondary":false},{"width":7,"bonus":200,"chr":"g","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,232,187,1,8,184,189,1,11,153,255,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,11,245,247,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,3,11,221,255,4,3,221,255,4,4,255,136,4,7,153,255,4,8,221,255,4,9,255,85,4,10,203,255,5,3,203,255,5,4,250,226,5,5,239,236,5,6,230,245,5,7,230,245,5,8,241,234,5,9,243,178,5,11,204,0,6,4,204,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,221,0,6,10,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"h","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,243,178,1,4,248,209,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,170,0,2,5,204,0,3,3,255,255,3,4,255,0,4,3,169,255,4,4,255,221,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,175,25,5,5,226,39,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0],"secondary":false},{"width":3,"bonus":70,"chr":"i","pixels":[0,1,237,255,0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,238,0,1,4,211,41,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"j","pixels":[0,11,153,255,1,11,169,255,2,1,203,255,2,3,203,255,2,4,225,251,2,5,225,251,2,6,225,251,2,7,225,251,2,8,225,251,2,9,225,251,3,2,204,0,3,4,204,0,3,5,221,0,3,6,221,0,3,7,221,0,3,8,221,0,3,9,221,0,3,10,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"k","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,166,235,2,5,255,255,2,6,255,221,3,3,203,255,3,5,153,0,3,6,255,51,3,7,250,226,3,8,160,217,4,4,204,0,4,8,239,145],"secondary":false},{"width":3,"bonus":75,"chr":"l","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,2,9,255,0],"secondary":false},{"width":10,"bonus":210,"chr":"m","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,153,255,4,4,255,255,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,228,209,5,5,255,68,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0,6,3,255,255,6,5,187,0,7,3,237,255,7,4,255,85,8,4,249,174,8,5,232,243,8,6,225,251,8,7,225,251,8,8,210,247,9,5,170,0,9,6,221,0,9,7,221,0,9,8,221,0,9,9,204,0],"secondary":false},{"width":7,"bonus":140,"chr":"n","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,237,255,4,4,255,85,5,4,249,174,5,5,232,243,5,6,225,251,5,7,225,251,5,8,210,247,6,5,170,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":8,"bonus":120,"chr":"o","pixels":[0,5,187,255,0,6,169,255,1,4,203,255,1,6,209,104,1,7,244,231,2,3,237,255,2,5,204,0,2,8,252,241,3,3,255,255,3,4,238,0,3,8,255,255,3,9,238,0,4,3,237,255,4,4,255,0,4,8,255,255,4,9,255,0,5,4,251,207,5,7,221,255,5,9,255,0,6,5,237,183,6,6,192,225,6,8,221,0,7,6,170,0,7,7,170,0],"secondary":false},{"width":6,"bonus":170,"chr":"p","pixels":[0,3,237,255,0,4,255,255,0,5,187,255,0,6,203,255,0,7,255,255,0,8,221,255,0,9,221,255,0,10,221,255,1,3,255,255,1,4,240,36,1,5,255,0,1,6,187,0,1,7,211,41,1,8,254,239,1,9,221,0,1,10,221,0,1,11,221,0,2,3,255,255,2,4,255,0,2,8,255,255,2,9,238,0,3,3,237,255,3,4,255,34,3,8,237,255,3,9,255,0,4,4,253,240,4,5,255,255,4,6,255,255,4,7,237,255,4,9,238,0,5,5,239,18,5,6,255,17,5,7,255,0,5,8,238,0],"secondary":false},{"width":7,"bonus":165,"chr":"q","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,228,171,1,8,209,207,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,9,170,0,3,3,237,255,3,4,255,17,3,8,237,255,3,9,255,0,4,3,255,255,4,4,255,255,4,5,191,250,4,6,187,255,4,7,255,255,4,8,239,254,4,9,253,223,4,10,221,255,5,4,255,34,5,5,255,34,5,6,196,45,5,7,196,45,5,8,255,34,5,9,240,36,5,10,226,39,5,11,221,0],"secondary":false},{"width":4,"bonus":85,"chr":"r","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,3,187,255,1,4,244,213,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,187,0,2,5,204,0,3,4,255,0],"secondary":false},{"width":6,"bonus":100,"chr":"s","pixels":[0,4,187,255,1,3,255,255,1,5,250,243,1,8,255,255,2,3,255,255,2,4,255,0,2,5,155,196,2,6,246,123,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,6,245,247,3,7,164,132,3,8,255,255,3,9,255,0,4,4,255,17,4,7,250,191,4,9,255,0,5,8,187,0],"secondary":false},{"width":5,"bonus":80,"chr":"t","pixels":[1,2,221,255,1,3,255,255,1,4,235,240,1,5,221,255,1,6,221,255,1,7,169,255,2,3,255,255,2,4,255,34,2,5,226,39,2,6,226,39,2,7,232,93,2,8,249,243,3,4,255,0,3,8,187,209,3,9,238,0,4,9,153,0],"secondary":false},{"width":6,"bonus":135,"chr":"u","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,169,255,1,4,211,41,1,5,226,39,1,6,226,39,1,7,232,93,1,8,249,243,2,8,255,255,2,9,238,0,3,8,203,255,3,9,255,0,4,3,203,255,4,4,221,255,4,5,221,255,4,6,203,255,4,7,255,255,4,8,228,247,4,9,204,0,5,4,211,41,5,5,226,39,5,6,226,39,5,7,211,41,5,8,255,34,5,9,221,0],"secondary":false},{"width":6,"bonus":95,"chr":"v","pixels":[0,3,237,255,1,4,247,141,1,5,245,247,1,6,203,255,2,6,241,54,2,7,255,255,2,8,255,255,3,5,153,255,3,6,255,255,3,7,173,226,3,8,255,51,3,9,255,0,4,3,237,255,4,4,203,255,4,6,153,0,4,7,255,0,4,8,153,0,5,4,238,0,5,5,204,0],"secondary":false},{"width":10,"bonus":170,"chr":"w","pixels":[1,3,153,255,1,4,243,249,1,5,187,255,2,4,153,0,2,5,243,71,2,6,228,171,2,7,243,249,2,8,187,255,3,6,217,239,3,7,248,244,3,8,248,157,3,9,187,0,4,3,169,255,4,4,255,255,4,7,204,0,4,8,238,0,4,9,153,0,5,4,244,231,5,5,255,221,5,6,191,159,6,5,223,19,6,6,237,128,6,7,255,255,6,8,223,253,7,6,239,254,7,7,227,229,7,8,255,119,7,9,221,0,8,3,237,255,8,4,203,255,8,7,238,0,8,8,204,0,9,4,238,0,9,5,204,0],"secondary":false},{"width":6,"bonus":95,"chr":"x","pixels":[0,8,169,255,1,3,169,255,1,4,224,232,1,7,221,255,1,9,170,0,2,4,193,90,2,5,255,255,2,6,240,253,2,8,221,0,3,4,255,255,3,5,155,196,3,6,255,187,3,7,250,191,4,3,221,255,4,5,255,0,4,7,209,104,4,8,255,255,5,4,221,0,5,9,255,0],"secondary":false},{"width":6,"bonus":110,"chr":"y","pixels":[0,3,255,255,0,4,153,255,0,11,221,255,1,4,255,85,1,5,234,222,1,6,228,247,1,11,196,243,2,6,207,21,2,7,246,194,2,8,255,255,2,9,237,255,3,6,237,255,3,7,191,250,3,8,205,85,3,9,255,0,3,10,238,0,4,3,203,255,4,4,221,255,4,7,238,0,4,8,187,0,5,4,204,0,5,5,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"z","pixels":[0,3,153,255,0,8,203,255,1,3,255,255,1,4,153,0,1,7,221,255,1,8,255,255,1,9,204,0,2,3,255,255,2,4,255,0,2,6,255,255,2,8,255,255,2,9,255,0,3,3,255,255,3,4,254,171,3,5,169,255,3,7,255,0,3,8,255,255,3,9,255,0,4,3,255,255,4,4,255,119,4,5,170,0,4,6,170,0,4,8,255,255,4,9,255,0,5,4,255,0,5,9,255,0],"secondary":false},{"width":8,"bonus":155,"chr":"A","pixels":[0,8,153,255,1,6,221,255,1,7,237,255,1,9,153,0,2,3,169,255,2,4,255,255,2,5,187,255,2,6,255,255,2,7,221,0,2,8,238,0,3,1,255,255,3,2,255,255,3,4,170,0,3,5,255,0,3,6,255,255,3,7,255,0,4,2,255,255,4,3,254,239,4,4,184,189,4,6,255,255,4,7,255,0,5,3,255,34,5,4,247,141,5,5,255,255,5,6,255,255,5,7,255,102,6,6,255,85,6,7,255,187,6,8,255,255,7,8,187,0,7,9,255,0],"secondary":false},{"width":7,"bonus":225,"chr":"B","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,4,255,255,2,5,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,1,221,255,4,2,255,85,4,4,255,255,4,5,254,171,4,8,203,255,4,9,255,0,5,2,243,178,5,3,198,219,5,5,255,102,5,6,232,205,5,7,180,217,5,9,204,0,6,3,170,0,6,4,170,0,6,7,187,0,6,8,153,0],"secondary":false},{"width":9,"bonus":155,"chr":"C","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,3,153,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,224,232,2,1,169,255,2,3,221,0,2,4,153,0,2,7,194,135,2,8,237,183,3,1,255,255,3,2,170,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,169,255,6,2,255,102,6,8,169,255,6,9,255,0,7,2,181,48,7,9,170,0],"secondary":false},{"width":8,"bonus":200,"chr":"D","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,8,255,255,3,9,255,0,4,1,203,255,4,2,255,68,4,8,203,255,4,9,255,0,5,2,248,227,5,3,168,207,5,7,221,255,5,9,204,0,6,3,237,128,6,4,223,214,6,5,205,233,6,6,155,196,6,8,221,0,7,5,187,0,7,6,187,0],"secondary":false},{"width":6,"bonus":180,"chr":"E","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,1,153,255,4,2,255,0,4,6,255,0,4,8,221,255,4,9,255,0,5,2,153,0,5,9,221,0],"secondary":false},{"width":6,"bonus":135,"chr":"F","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,2,255,0,4,6,255,0],"secondary":false},{"width":9,"bonus":200,"chr":"G","pixels":[0,4,169,255,0,5,187,255,1,2,203,255,1,3,153,255,1,5,193,90,1,6,224,155,1,7,237,238,2,1,169,255,2,3,204,0,2,4,153,0,2,7,175,124,2,8,246,194,3,1,255,255,3,2,170,0,3,8,255,255,3,9,187,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,237,255,5,9,255,0,6,1,169,255,6,2,255,85,6,5,255,255,6,7,153,255,6,8,169,255,6,9,238,0,7,2,175,25,7,5,153,255,7,6,255,221,7,7,225,251,7,8,234,222,7,9,170,0,8,6,153,0,8,7,221,0,8,8,221,0,8,9,204,0],"secondary":false},{"width":8,"bonus":200,"chr":"H","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,5,255,255,2,6,255,0,3,5,255,255,3,6,255,0,4,5,255,255,4,6,255,0,5,5,255,255,5,6,255,34,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,255,221,6,7,225,251,6,8,210,247,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":4,"bonus":110,"chr":"I","pixels":[0,1,191,255,0,8,191,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,191,0,2,1,191,255,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,0,2,8,255,191,2,9,255,0,3,2,192,0,3,9,191,0],"secondary":false},{"width":6,"bonus":130,"chr":"J","pixels":[0,6,153,255,0,7,153,255,1,7,194,135,1,8,234,222,2,1,221,255,2,8,255,255,2,9,204,0,3,1,255,255,3,2,226,39,3,8,203,255,3,9,255,0,4,1,203,255,4,2,255,221,4,3,225,251,4,4,225,251,4,5,225,251,4,6,225,251,4,7,166,235,4,9,204,0,5,2,204,0,5,3,221,0,5,4,221,0,5,5,221,0,5,6,221,0,5,7,221,0,5,8,153,0],"secondary":false},{"width":7,"bonus":155,"chr":"K","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,255,255,2,5,255,102,3,3,221,255,3,5,254,171,3,6,224,232,4,1,203,255,4,2,153,255,4,4,221,0,4,6,193,90,4,7,251,242,4,8,173,226,5,2,204,0,5,3,153,0,5,8,247,141,5,9,153,0],"secondary":false},{"width":6,"bonus":115,"chr":"L","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,8,255,255,2,9,255,0,3,8,255,255,3,9,255,0,4,8,255,255,4,9,255,0,5,9,255,0],"secondary":false},{"width":9,"bonus":240,"chr":"M","pixels":[0,1,245,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,255,1,2,251,173,1,3,255,225,1,4,255,85,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,1,9,255,0,2,3,191,83,2,4,249,212,2,5,212,229,3,5,226,119,3,6,249,237,3,7,165,227,4,6,241,245,4,7,245,155,4,8,155,32,5,4,207,255,5,5,191,254,5,7,232,0,6,2,169,255,6,3,223,255,6,5,207,0,6,6,190,0,7,1,245,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,8,2,245,0,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"N","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,255,255,1,3,235,111,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,221,2,4,163,160,3,4,246,194,3,5,214,223,4,5,214,122,4,6,246,229,5,6,163,160,5,7,255,255,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,225,251,6,7,235,240,6,8,254,204,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":10,"bonus":200,"chr":"O","pixels":[0,4,187,255,0,5,169,255,1,2,203,255,1,3,153,255,1,5,205,85,1,6,226,192,1,7,224,232,2,1,153,255,2,3,204,0,2,4,153,0,2,7,209,145,2,8,234,167,3,1,255,255,3,2,153,0,3,8,255,255,3,9,153,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,153,255,6,2,255,102,6,8,153,255,6,9,255,0,7,2,234,222,7,3,194,201,7,6,169,255,7,7,203,255,7,9,153,0,8,3,225,116,8,4,228,209,8,5,192,225,8,7,170,0,8,8,204,0,9,5,187,0,9,6,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"P","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,1,187,255,4,2,255,136,4,5,187,255,4,6,255,0,5,2,224,155,5,3,239,236,5,6,187,0,6,4,221,0],"secondary":false},{"width":9,"bonus":185,"chr":"Q","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,235,240,2,1,187,255,2,3,221,0,2,7,187,116,2,8,243,178,3,1,255,255,3,2,187,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,237,255,5,2,255,0,5,8,237,255,5,9,255,0,6,2,251,207,6,7,255,255,6,9,238,0,7,3,255,255,7,4,203,255,7,5,221,255,7,6,255,255,7,7,155,196,7,8,254,204,8,4,255,17,8,5,207,21,8,6,221,0,8,7,255,0,8,9,204,0],"secondary":false},{"width":7,"bonus":180,"chr":"R","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,187,4,2,254,239,4,3,203,255,4,4,255,255,4,6,255,68,4,7,250,243,4,8,181,239,5,3,239,18,5,4,204,0,5,5,255,0,5,8,245,107,5,9,170,0],"secondary":false},{"width":6,"bonus":130,"chr":"S","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,1,255,255,2,2,204,0,2,4,198,219,2,5,232,93,2,8,255,255,2,9,238,0,3,1,255,255,3,2,255,0,3,5,255,255,3,8,255,255,3,9,255,0,4,1,169,255,4,2,255,68,4,5,160,217,4,6,255,221,4,7,237,255,4,9,255,0,5,2,170,0,5,7,223,19,5,8,238,0],"secondary":false},{"width":8,"bonus":125,"chr":"T","pixels":[0,1,255,255,1,1,255,255,1,2,255,0,2,1,255,255,2,2,255,34,3,1,255,255,3,2,255,221,3,3,225,251,3,4,225,251,3,5,225,251,3,6,225,251,3,7,225,251,3,8,210,247,4,1,255,255,4,2,255,0,4,3,221,0,4,4,221,0,4,5,221,0,4,6,221,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,255,255,5,2,255,0,6,2,255,0],"secondary":false},{"width":8,"bonus":165,"chr":"U","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,187,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,230,75,1,7,232,187,1,8,184,189,2,8,255,255,3,8,255,255,3,9,255,0,4,8,221,255,4,9,255,0,5,1,203,255,5,2,221,255,5,3,221,255,5,4,221,255,5,5,221,255,5,6,255,255,5,7,237,255,5,9,221,0,6,2,211,41,6,3,226,39,6,4,226,39,6,5,226,39,6,6,223,19,6,7,255,0,6,8,238,0],"secondary":false},{"width":7,"bonus":125,"chr":"V","pixels":[0,1,255,255,0,2,187,255,1,2,255,68,1,3,228,171,1,4,255,255,1,5,153,255,2,4,153,0,2,5,255,85,2,6,228,209,2,7,242,251,3,6,164,185,3,7,255,255,3,8,251,207,4,4,203,255,4,5,237,255,4,8,255,0,4,9,204,0,5,1,169,255,5,2,255,255,5,3,153,255,5,5,204,0,5,6,238,0,6,2,170,0,6,3,255,0,6,4,153,0],"secondary":false},{"width":10,"bonus":245,"chr":"W","pixels":[0,1,255,255,0,2,221,255,1,2,255,17,1,3,237,128,1,4,223,214,1,5,255,255,1,6,203,255,2,5,191,23,2,6,255,136,2,7,255,255,2,8,255,255,3,3,153,255,3,4,237,255,3,5,221,255,3,7,168,103,3,8,255,0,3,9,255,0,4,1,255,255,4,2,255,255,4,3,187,209,4,4,153,0,4,5,238,0,4,6,221,0,5,2,255,102,5,3,254,171,5,4,248,244,5,5,203,255,6,4,170,0,6,5,241,54,6,6,231,150,6,7,255,255,6,8,255,255,7,4,153,255,7,5,237,255,7,6,241,252,7,7,207,188,7,8,255,85,7,9,255,0,8,1,237,255,8,2,237,255,8,3,153,255,8,4,153,171,8,5,153,0,8,6,238,0,8,7,238,0,8,8,153,0,9,2,238,0,9,3,238,0,9,4,153,0],"secondary":false},{"width":7,"bonus":130,"chr":"X","pixels":[0,8,169,255,1,1,187,255,1,2,220,236,1,7,237,255,1,9,170,0,2,2,205,85,2,3,248,227,2,4,166,235,2,5,255,255,2,6,153,255,2,8,238,0,3,3,155,196,3,4,255,255,3,5,248,244,3,6,255,51,3,7,153,0,4,2,237,255,4,5,255,51,4,6,251,207,4,7,186,233,5,1,203,255,5,3,238,0,5,7,225,116,5,8,255,255,6,2,204,0,6,9,255,0],"secondary":false},{"width":7,"bonus":90,"chr":"Y","pixels":[0,1,169,255,1,2,249,243,2,3,248,157,2,4,255,255,3,4,241,234,3,5,254,204,3,6,232,243,3,7,225,251,3,8,210,247,4,3,255,255,4,5,221,0,4,6,204,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,237,255,5,4,255,0,6,2,238,0],"secondary":false},{"width":7,"bonus":140,"chr":"Z","pixels":[0,8,187,255,1,1,255,255,1,7,221,255,1,8,255,255,1,9,187,0,2,1,255,255,2,2,255,0,2,5,203,255,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,203,255,3,6,204,0,3,8,255,255,3,9,255,0,4,1,255,255,4,2,255,221,4,5,204,0,4,8,255,255,4,9,255,0,5,1,187,255,5,2,255,34,5,3,221,0,5,8,153,255,5,9,255,0,6,2,187,0,6,9,153,0],"secondary":false},{"width":7,"bonus":170,"chr":"0","pixels":[0,2,153,255,0,3,221,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,169,255,1,1,187,255,1,3,153,0,1,4,221,0,1,5,255,0,1,6,255,0,1,7,243,71,1,8,237,219,2,1,187,255,2,2,187,0,2,8,205,233,2,9,211,41,3,1,221,255,3,2,205,85,3,8,203,255,3,9,187,0,4,2,243,178,4,3,255,255,4,4,187,255,4,5,187,255,4,6,237,255,4,7,169,255,4,9,204,0,5,3,170,0,5,4,255,0,5,5,187,0,5,6,187,0,5,7,238,0,5,8,170,0],"secondary":false},{"width":7,"bonus":100,"chr":"1","pixels":[1,8,187,255,2,1,203,255,2,2,224,232,2,3,219,218,2,4,187,255,2,5,187,255,2,6,187,255,2,7,187,255,2,8,237,255,2,9,187,0,3,2,218,80,3,3,218,80,3,4,205,85,3,5,205,85,3,6,205,85,3,7,205,85,3,8,241,215,3,9,238,0,4,8,168,207,4,9,204,0],"secondary":false},{"width":7,"bonus":105,"chr":"2","pixels":[1,8,255,255,2,1,187,255,2,6,153,255,2,8,223,214,2,9,255,0,3,1,203,255,3,2,187,0,3,5,153,255,3,7,153,0,3,8,219,218,3,9,187,0,4,1,187,255,4,2,234,167,4,4,203,255,4,6,153,0,4,8,187,255,4,9,187,0,5,2,214,122,5,3,200,152,5,5,204,0,5,9,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"3","pixels":[0,8,203,255,1,1,187,255,1,8,191,250,1,9,204,0,2,1,187,255,2,2,196,45,2,4,187,255,2,5,174,150,2,8,203,255,2,9,187,0,3,2,246,229,3,3,210,247,3,5,241,215,3,6,173,175,3,7,169,255,3,9,204,0,4,3,227,57,4,4,204,0,4,6,228,133,4,7,174,150,4,8,170,0],"secondary":false},{"width":7,"bonus":150,"chr":"4","pixels":[0,6,237,255,1,4,187,255,1,6,219,218,1,7,238,0,2,3,169,255,2,5,187,0,2,6,219,218,2,7,187,0,3,1,187,255,3,2,153,255,3,3,155,112,3,4,193,90,3,6,203,255,3,7,205,85,4,1,187,255,4,2,237,201,4,3,228,209,4,4,205,233,4,5,205,233,4,6,242,251,4,7,241,198,4,8,205,233,5,2,187,0,5,3,187,0,5,4,187,0,5,5,187,0,5,6,224,155,5,7,238,0,5,8,187,0,5,9,187,0],"secondary":false},{"width":7,"bonus":130,"chr":"5","pixels":[1,1,237,255,1,2,187,255,1,3,187,255,1,4,187,255,1,8,207,251,2,1,187,255,2,2,238,0,2,3,187,0,2,4,237,201,2,5,187,0,2,8,187,255,2,9,204,0,3,1,187,255,3,2,187,0,3,4,203,255,3,5,191,23,3,8,203,255,3,9,187,0,4,2,187,0,4,5,251,242,4,6,191,250,4,7,221,255,4,9,204,0,5,6,243,71,5,7,191,23,5,8,221,0],"secondary":false},{"width":7,"bonus":150,"chr":"6","pixels":[0,3,169,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,153,255,1,2,187,255,1,4,209,145,1,5,255,68,1,6,255,0,1,7,246,123,1,8,228,209,2,1,203,255,2,3,187,0,2,4,200,238,2,8,219,218,2,9,187,0,3,1,187,255,3,2,204,0,3,4,203,255,3,5,205,85,3,8,187,255,3,9,187,0,4,2,187,0,4,5,248,227,4,6,255,255,4,7,187,255,4,9,187,0,5,6,221,0,5,7,255,0,5,8,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"7","pixels":[0,1,187,255,1,1,187,255,1,2,187,0,1,8,203,255,2,1,187,255,2,2,187,0,2,6,237,255,2,7,153,255,2,9,204,0,3,1,187,255,3,2,205,85,3,3,153,255,3,4,221,255,3,7,238,0,3,8,153,0,4,1,255,255,4,2,237,201,4,4,153,0,4,5,221,0,5,2,255,0,5,3,187,0],"secondary":false},{"width":7,"bonus":165,"chr":"8","pixels":[1,2,237,255,1,3,221,255,1,6,203,255,1,7,228,247,2,1,203,255,2,3,241,54,2,4,248,209,2,5,186,233,2,7,207,21,2,8,250,226,3,1,187,255,3,2,204,0,3,4,186,233,3,5,221,98,3,6,170,0,3,8,191,250,3,9,221,0,4,1,221,255,4,2,209,104,4,4,169,255,4,5,237,219,4,8,187,255,4,9,187,0,5,2,243,178,5,3,187,209,5,5,204,128,5,6,251,242,5,7,240,253,5,9,187,0,6,3,170,0,6,4,153,0,6,7,238,0,6,8,238,0],"secondary":false},{"width":7,"bonus":160,"chr":"9","pixels":[1,2,221,255,1,3,191,250,1,4,242,251,1,8,153,255,2,1,203,255,2,3,221,0,2,4,191,23,2,5,253,223,2,8,191,250,2,9,153,0,3,1,187,255,3,2,204,0,3,5,191,250,3,6,221,0,3,8,203,255,3,9,187,0,4,1,187,255,4,2,218,139,4,6,200,65,4,7,169,255,4,9,204,0,5,2,228,171,5,3,245,247,5,4,255,255,5,5,255,255,5,6,223,214,5,8,170,0,6,3,153,0,6,4,238,0,6,5,255,0,6,6,255,0,6,7,187,0],"secondary":false},{"width":8,"bonus":130,"chr":"%","pixels":[0,3,255,255,0,8,255,255,1,2,255,255,1,4,255,255,1,7,255,255,1,9,255,0,2,3,255,255,2,5,255,41,2,6,255,255,2,8,255,0,3,4,255,41,3,5,255,255,3,7,255,0,4,4,255,255,4,6,255,92,4,7,255,255,5,3,255,255,5,5,255,0,5,6,255,255,5,8,255,255,6,2,255,255,6,4,255,0,6,7,255,255,6,9,255,0,7,3,255,0,7,8,255,0],"secondary":false},{"width":4,"bonus":80,"chr":"/","pixels":[0,7,153,255,0,8,237,255,0,9,221,255,1,4,187,255,1,5,237,255,1,6,169,255,1,8,153,0,1,9,238,0,1,10,221,0,2,1,221,255,2,2,221,255,2,5,187,0,2,6,238,0,2,7,170,0,3,2,221,0,3,3,221,0],"secondary":false},{"width":7,"bonus":110,"chr":"+","pixels":[0,5,221,255,1,5,255,255,1,6,221,0,2,5,255,255,2,6,255,34,3,2,153,255,3,3,223,253,3,4,225,251,3,5,255,255,3,6,255,221,3,7,225,251,3,8,210,247,4,3,153,0,4,4,221,0,4,5,255,255,4,6,255,0,4,7,221,0,4,8,221,0,4,9,204,0,5,5,255,255,5,6,255,0,6,6,255,0],"secondary":false},{"width":5,"bonus":75,"chr":"?","pixels":[0,1,169,255,1,1,255,255,1,2,170,0,1,6,221,255,1,8,255,255,2,1,255,255,2,2,255,0,2,5,169,255,2,7,221,0,2,9,255,0,3,2,255,255,3,3,221,255,3,6,170,0,4,3,255,17,4,4,221,0],"secondary":false},{"width":2,"bonus":70,"chr":"!","pixels":[0,1,169,255,0,2,187,255,0,3,187,255,0,4,187,255,0,5,187,255,0,6,169,255,0,8,255,255,1,2,181,48,1,3,196,45,1,4,196,45,1,5,196,45,1,6,196,45,1,7,170,0,1,9,255,0],"secondary":false},{"width":8,"bonus":230,"chr":"@","pixels":[0,4,255,255,0,5,255,255,0,6,221,255,0,7,255,255,0,8,187,255,1,3,221,255,1,5,255,0,1,6,255,34,1,7,221,0,1,8,255,68,1,9,250,243,2,2,221,255,2,4,232,93,2,5,255,255,2,6,237,255,2,7,255,255,2,10,248,157,3,2,255,255,3,3,221,0,3,4,255,255,3,6,255,0,3,7,241,54,3,8,254,204,3,10,214,223,3,11,153,0,4,2,237,255,4,3,255,0,4,4,255,255,4,5,255,0,4,8,255,255,4,9,204,0,4,11,187,0,5,3,253,240,5,4,255,255,5,5,255,221,5,6,221,255,5,7,221,255,5,8,237,255,5,9,255,0,6,4,240,36,6,5,255,34,6,6,226,39,6,7,226,39,6,8,250,226,6,9,238,0,7,9,221,0],"secondary":false},{"width":8,"bonus":200,"chr":"#","pixels":[0,6,255,255,1,3,255,255,1,6,255,255,1,7,254,171,1,8,237,255,2,1,169,255,2,2,237,255,2,3,255,255,2,4,255,221,2,5,175,247,2,6,255,255,2,7,255,85,2,8,170,0,2,9,238,0,3,2,170,0,3,3,255,255,3,4,255,0,3,5,221,0,3,6,255,255,3,7,255,0,4,3,255,255,4,4,255,153,4,5,203,255,4,6,255,255,4,7,254,239,4,8,187,255,5,1,255,255,5,2,187,255,5,3,255,255,5,4,255,85,5,5,159,27,5,6,255,255,5,7,255,0,5,8,238,0,5,9,187,0,6,2,255,0,6,3,255,255,6,4,255,0,6,7,255,0,7,4,255,0],"secondary":false},{"width":6,"bonus":130,"chr":"$","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,0,203,255,2,1,237,255,2,2,204,0,2,4,176,197,2,5,237,128,2,8,240,253,2,9,251,207,3,1,251,242,3,2,239,18,3,5,247,245,3,6,164,132,3,8,255,255,3,9,240,36,3,10,204,0,4,2,240,36,4,6,249,174,4,7,198,219,4,9,255,0,5,7,170,0,5,8,170,0],"secondary":false},{"width":6,"bonus":75,"chr":"^","pixels":[0,4,153,255,0,5,237,255,1,2,203,255,1,3,221,255,1,5,153,0,1,6,238,0,2,1,221,255,2,2,230,245,2,3,218,80,2,4,221,0,3,2,227,57,3,3,246,194,3,4,230,245,4,4,187,0,4,5,239,145],"secondary":false},{"width":6,"bonus":35,"chr":"~","pixels":[1,5,255,255,2,5,221,255,2,6,255,51,3,6,250,226,4,5,203,255,4,7,221,0,5,6,204,0],"secondary":false},{"width":7,"bonus":175,"chr":"&","pixels":[0,6,187,255,1,2,237,255,1,3,255,255,1,4,191,250,1,5,187,255,1,7,224,155,1,8,223,214,2,1,255,255,2,3,238,0,2,4,255,255,2,5,191,23,2,6,187,0,2,8,255,255,2,9,187,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,2,255,0,4,4,255,255,4,5,255,34,4,8,187,255,4,9,255,0,5,3,203,255,5,4,255,255,5,5,255,221,5,6,196,243,5,7,155,196,5,9,187,0,6,4,234,167,6,5,255,0,6,6,221,0,6,7,187,0],"secondary":false},{"width":6,"bonus":70,"chr":"*","pixels":[0,2,169,255,1,2,169,255,1,3,237,219,1,4,255,255,2,1,203,255,2,2,240,253,2,3,255,255,2,4,228,133,2,5,255,0,3,2,237,183,3,3,245,107,3,4,255,153,4,3,170,0,4,5,153,0],"secondary":false},{"width":4,"bonus":100,"chr":"(","pixels":[0,3,173,255,0,4,239,255,0,5,253,255,0,6,229,255,0,7,171,255,1,1,193,255,1,2,203,255,1,4,188,64,1,5,241,25,1,6,252,46,1,7,240,112,1,8,238,218,1,9,210,232,2,0,209,255,2,2,194,2,2,3,204,0,2,9,223,111,2,10,245,224,3,1,210,0,3,11,216,0],"secondary":false},{"width":4,"bonus":75,"chr":")","pixels":[1,0,211,255,1,10,215,255,2,1,244,203,2,2,222,234,2,8,203,255,2,9,191,255,2,11,216,0,3,2,213,94,3,3,238,186,3,4,246,248,3,5,253,255,3,6,231,253,3,7,186,234,3,9,203,1,3,10,191,0],"secondary":false},{"width":7,"bonus":60,"chr":"_","pixels":[0,9,153,255,1,9,255,255,1,10,153,0,2,9,255,255,2,10,255,0,3,9,255,255,3,10,255,0,4,9,255,255,4,10,255,0,5,9,255,255,5,10,255,0,6,10,255,0],"secondary":false},{"width":4,"bonus":30,"chr":"-","pixels":[0,5,255,255,1,5,255,255,1,6,255,0,2,5,255,255,2,6,255,0,3,6,255,0],"secondary":true},{"width":8,"bonus":100,"chr":"=","pixels":[0,4,255,255,0,6,255,255,1,4,255,255,1,5,255,0,1,6,255,255,1,7,255,0,2,4,255,255,2,5,255,0,2,6,255,255,2,7,255,0,3,4,255,255,3,5,255,0,3,6,255,255,3,7,255,0,4,4,255,255,4,5,255,0,4,6,255,255,4,7,255,0,5,5,255,0,5,7,255,0],"secondary":false},{"width":3,"bonus":105,"chr":"[","pixels":[0,0,203,255,0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,0,237,255,1,1,211,41,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,252,241,1,9,204,0,2,1,238,0,2,9,238,0],"secondary":false},{"width":3,"bonus":105,"chr":"]","pixels":[0,0,237,255,0,8,237,255,1,0,203,255,1,1,253,223,1,2,225,251,1,3,225,251,1,4,225,251,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,1,9,238,0,2,1,204,0,2,2,221,0,2,3,221,0,2,4,221,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0],"secondary":false},{"width":5,"bonus":90,"chr":"{","pixels":[0,5,153,255,1,2,169,255,1,3,221,255,1,4,221,255,1,5,203,255,1,6,255,255,1,7,221,255,1,8,169,255,2,1,237,255,2,3,181,48,2,4,223,19,2,5,221,0,2,6,207,21,2,7,255,34,2,8,232,93,2,9,249,243,3,2,238,0,3,10,238,0],"secondary":false},{"width":5,"bonus":90,"chr":"}","pixels":[1,1,237,255,1,9,237,255,2,2,249,174,2,3,232,243,2,4,225,251,2,5,207,251,2,6,255,255,2,7,223,253,2,8,181,239,2,10,238,0,3,3,170,0,3,4,221,0,3,5,241,162,3,6,204,0,3,7,255,0,3,8,221,0,3,9,170,0,4,6,153,0],"secondary":false},{"width":3,"bonus":20,"chr":":","pixels":[1,3,255,255,1,7,255,255,2,4,255,0,2,8,255,0],"secondary":true},{"width":3,"bonus":40,"chr":";","pixels":[0,9,201,255,1,3,255,255,1,7,241,255,1,8,255,255,1,10,201,0,2,4,255,0,2,8,241,0,2,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":"\\"","pixels":[0,1,255,255,0,2,255,255,1,2,255,0,1,3,255,0,2,1,255,255,2,2,255,255],"secondary":true},{"width":2,"bonus":20,"chr":"\'","pixels":[0,1,255,255,0,2,177,255,1,2,255,30,1,3,177,0],"secondary":true},{"width":7,"bonus":70,"chr":"<","pixels":[0,5,203,255,1,5,255,255,1,6,228,133,2,4,237,255,2,6,254,239,3,4,169,255,3,5,238,0,3,6,175,247,3,7,243,89,4,3,221,255,4,5,170,0,4,7,244,231,5,4,221,0,5,8,221,0],"secondary":false},{"width":7,"bonus":80,"chr":">","pixels":[0,3,203,255,0,7,203,255,1,4,228,133,1,7,187,255,1,8,204,0,2,4,247,245,2,6,255,255,2,8,187,0,3,4,175,247,3,5,248,157,3,6,203,255,3,7,255,0,4,5,255,255,4,6,173,75,4,7,204,0,5,6,255,0],"secondary":false},{"width":5,"bonus":70,"chr":"\\\\","pixels":[1,1,153,255,1,2,255,255,1,3,203,255,2,2,153,0,2,3,255,51,2,4,231,150,2,5,255,255,2,6,203,255,3,6,255,34,3,7,231,150,3,8,255,255,3,9,207,251,4,9,255,0,4,10,204,0],"secondary":false},{"width":2,"bonus":10,"chr":".","pixels":[0,8,255,255,1,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":",","pixels":[0,9,205,255,1,7,205,255,1,8,255,255,1,10,205,0,2,8,205,0,2,9,255,0],"secondary":true},{"width":3,"bonus":100,"chr":"|","pixels":[0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,221,255,0,9,221,255,0,10,203,255,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,226,39,1,10,226,39,1,11,204,0],"secondary":false}],"width":10,"spacewidth":3,"shadow":true,"height":12,"basey":8}');

/***/ }),

/***/ "./src/fonts/chatbox/10pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/10pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":5,"bonus":115,"chr":"a","pixels":[0,5,217,255,0,6,227,255,1,2,197,255,1,4,200,254,1,6,219,17,1,7,250,220,2,2,223,255,2,3,199,13,2,4,209,255,2,5,199,0,2,7,158,246,2,8,216,0,3,3,250,226,3,4,242,254,3,5,251,239,3,6,243,255,3,7,208,239,3,8,152,0,4,4,222,0,4,5,241,0,4,6,236,0,4,7,244,0,4,8,195,0],"secondary":false},{"width":7,"bonus":165,"chr":"b","pixels":[1,0,231,255,1,1,231,255,1,2,225,255,1,3,243,255,1,4,239,255,1,5,239,255,1,6,243,255,1,7,197,255,2,1,232,0,2,2,244,150,2,3,233,76,2,4,244,1,2,5,240,2,2,6,244,78,2,7,250,150,2,8,198,0,3,2,203,255,3,3,144,0,3,7,218,238,3,8,147,0,4,2,197,255,4,3,220,93,4,7,197,255,4,8,204,0,5,3,236,187,5,4,234,245,5,5,225,255,5,6,174,254,5,8,197,0,6,4,173,0,6,5,225,0,6,6,225,0,6,7,173,0],"secondary":false},{"width":5,"bonus":95,"chr":"c","pixels":[0,3,163,255,0,4,223,255,0,5,223,255,0,6,167,255,1,2,179,255,1,4,165,6,1,5,224,5,1,6,235,99,1,7,231,203,2,2,207,255,2,3,179,0,2,7,225,236,2,8,184,0,3,2,207,255,3,3,207,4,3,7,208,255,3,8,208,0,4,3,207,0,4,8,208,0],"secondary":false},{"width":6,"bonus":170,"chr":"d","pixels":[0,3,173,255,0,4,225,255,0,5,227,255,0,6,175,255,1,2,197,255,1,4,175,6,1,5,226,3,1,6,236,91,1,7,237,213,2,2,205,255,2,3,198,0,2,7,220,236,2,8,198,0,3,2,145,255,3,3,221,92,3,7,143,255,3,8,203,0,4,0,231,255,4,1,231,255,4,2,229,255,4,3,250,249,4,4,245,251,4,5,239,255,4,6,244,255,4,7,221,241,4,8,144,0,5,1,232,0,5,2,232,0,5,3,229,0,5,4,244,0,5,5,241,0,5,6,239,0,5,7,244,0,5,8,208,0],"secondary":false},{"width":5,"bonus":130,"chr":"e","pixels":[0,3,158,255,0,4,223,255,0,5,225,255,0,6,159,255,1,2,175,255,1,4,238,223,1,5,225,9,1,6,238,121,1,7,223,196,2,2,203,255,2,3,175,0,2,4,219,243,2,5,208,0,2,7,229,233,2,8,171,0,3,2,197,255,3,3,211,47,3,4,208,255,3,5,208,0,3,7,211,255,3,8,209,0,4,3,242,207,4,4,221,249,4,5,208,0,4,7,136,255,4,8,211,0],"secondary":false},{"width":3,"bonus":80,"chr":"f","pixels":[0,2,147,255,1,1,229,255,1,2,251,255,1,3,245,241,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,0,221,255,2,2,251,212,2,3,251,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0],"secondary":false},{"width":6,"bonus":195,"chr":"g","pixels":[0,3,169,255,0,4,225,255,0,5,225,255,0,6,175,255,1,2,195,255,1,4,171,6,1,5,225,3,1,6,235,87,1,7,237,213,1,10,222,249,2,2,203,255,2,3,195,0,2,7,219,236,2,8,198,0,2,10,210,254,2,11,217,0,3,2,141,255,3,3,220,93,3,7,137,255,3,8,202,2,3,10,199,255,3,11,210,0,4,2,208,255,4,3,250,249,4,4,245,251,4,5,238,255,4,6,244,255,4,7,239,249,4,8,244,241,4,9,191,254,4,11,200,0,5,3,208,0,5,4,244,0,5,5,241,0,5,6,238,0,5,7,244,0,5,8,233,0,5,9,231,0,5,10,190,0],"secondary":false},{"width":7,"bonus":150,"chr":"h","pixels":[1,0,231,255,1,1,231,255,1,2,227,255,1,3,243,255,1,4,239,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,232,0,2,2,244,141,2,3,237,91,2,4,244,3,2,5,240,0,2,6,232,0,2,7,232,0,2,8,232,0,3,2,199,255,3,3,135,0,4,2,215,255,4,3,208,46,5,3,249,222,5,4,235,251,5,5,231,255,5,6,231,255,5,7,231,255,6,4,217,0,6,5,232,0,6,6,232,0,6,7,232,0,6,8,232,0],"secondary":false},{"width":3,"bonus":70,"chr":"i","pixels":[1,0,133,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,133,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0],"secondary":false},{"width":3,"bonus":105,"chr":"j","pixels":[0,10,221,255,1,0,133,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,1,8,231,255,1,9,227,255,1,10,131,245,1,11,221,0,2,1,133,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0,2,9,232,0,2,10,228,0],"secondary":false},{"width":6,"bonus":130,"chr":"k","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,233,255,1,5,241,255,1,6,231,255,1,7,231,255,2,1,232,0,2,2,232,0,2,3,233,23,2,4,249,190,2,5,244,134,2,6,241,0,2,7,232,0,2,8,232,0,3,3,203,255,3,5,240,211,3,6,202,187,4,2,201,255,4,4,203,0,4,6,225,137,4,7,237,230,5,3,201,0,5,7,144,78,5,8,214,0],"secondary":false},{"width":3,"bonus":80,"chr":"l","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,232,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0],"secondary":false},{"width":9,"bonus":195,"chr":"m","pixels":[1,2,205,255,1,3,243,255,1,4,239,255,1,5,231,255,1,6,231,255,1,7,231,255,2,2,148,255,2,3,215,61,2,4,244,0,2,5,239,0,2,6,232,0,2,7,232,0,2,8,232,0,3,2,213,255,3,3,157,36,4,3,255,255,4,4,239,254,4,5,231,255,4,6,231,255,4,7,231,255,5,2,165,255,5,3,135,92,5,4,255,0,5,5,238,0,5,6,232,0,5,7,232,0,5,8,232,0,6,2,221,255,6,3,172,31,7,3,251,227,7,4,233,254,7,5,231,255,7,6,231,255,7,7,231,255,8,4,223,0,8,5,232,0,8,6,232,0,8,7,232,0,8,8,232,0],"secondary":false},{"width":7,"bonus":135,"chr":"n","pixels":[1,2,205,255,1,3,243,255,1,4,239,255,1,5,231,255,1,6,231,255,1,7,231,255,2,2,131,255,2,3,221,94,2,4,244,3,2,5,240,0,2,6,232,0,2,7,232,0,2,8,232,0,3,2,199,255,3,3,132,0,4,2,215,255,4,3,207,46,5,3,249,222,5,4,235,251,5,5,231,255,5,6,231,255,5,7,231,255,6,4,217,0,6,5,232,0,6,6,232,0,6,7,232,0,6,8,232,0],"secondary":false},{"width":5,"bonus":110,"chr":"o","pixels":[0,3,169,255,0,4,223,255,0,5,229,255,0,6,167,255,1,2,187,255,1,4,171,4,1,5,224,5,1,6,238,93,1,7,233,208,2,2,208,255,2,3,187,0,2,7,225,237,2,8,190,0,3,2,184,255,3,3,224,96,3,7,185,255,3,8,210,0,4,3,229,181,4,4,233,244,4,5,224,255,4,6,166,254,4,8,185,0],"secondary":false},{"width":7,"bonus":180,"chr":"p","pixels":[1,2,209,255,1,3,243,255,1,4,237,255,1,5,241,255,1,6,243,255,1,7,225,255,1,8,231,255,1,9,231,255,1,10,231,255,2,2,148,255,2,3,221,80,2,4,244,1,2,5,238,3,2,6,245,80,2,7,250,150,2,8,225,0,2,9,231,0,2,10,232,0,2,11,232,0,3,2,203,255,3,3,148,0,3,7,220,238,3,8,147,0,4,2,197,255,4,3,221,99,4,7,197,255,4,8,205,0,5,3,237,186,5,4,235,244,5,5,225,255,5,6,172,254,5,8,197,0,6,4,173,0,6,5,225,0,6,6,225,0,6,7,171,0],"secondary":false},{"width":6,"bonus":175,"chr":"q","pixels":[0,3,172,255,0,4,225,255,0,5,227,255,0,6,175,255,1,2,195,255,1,4,173,6,1,5,225,3,1,6,236,90,1,7,238,215,2,2,203,255,2,3,195,0,2,7,220,236,2,8,201,0,3,2,143,255,3,3,220,93,3,7,137,255,3,8,203,0,4,2,203,255,4,3,250,249,4,4,245,251,4,5,238,255,4,6,244,255,4,7,236,248,4,8,244,242,4,9,231,255,4,10,231,255,5,3,204,0,5,4,244,0,5,5,241,0,5,6,238,0,5,7,244,0,5,8,229,0,5,9,232,0,5,10,232,0,5,11,232,0],"secondary":false},{"width":4,"bonus":75,"chr":"r","pixels":[1,2,202,255,1,3,241,255,1,4,239,255,1,5,231,255,1,6,231,255,1,7,231,255,2,2,136,255,2,3,223,118,2,4,241,8,2,5,240,0,2,6,232,0,2,7,232,0,2,8,232,0,3,2,209,255,3,3,136,0],"secondary":false},{"width":4,"bonus":85,"chr":"s","pixels":[0,3,229,255,0,7,185,255,1,2,217,255,1,4,249,204,1,5,142,62,1,7,213,251,1,8,185,0,2,2,211,255,2,3,218,0,2,5,234,176,2,7,209,255,2,8,210,0,3,2,137,255,3,3,214,14,3,5,191,215,3,6,244,236,3,8,210,0],"secondary":false},{"width":4,"bonus":70,"chr":"t","pixels":[1,1,203,255,1,2,251,255,1,3,243,243,1,4,231,255,1,5,231,255,1,6,229,255,2,2,246,216,2,3,251,0,2,4,232,0,2,5,232,0,2,6,233,18,2,7,251,221,3,3,208,0,3,8,217,0],"secondary":false},{"width":7,"bonus":135,"chr":"u","pixels":[1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,219,255,2,3,232,0,2,4,232,0,2,5,232,0,2,6,235,36,2,7,250,221,3,7,207,246,3,8,217,0,4,7,137,255,4,8,200,0,5,2,231,255,5,3,231,255,5,4,231,255,5,5,239,255,5,6,244,255,5,7,224,239,5,8,138,0,6,3,232,0,6,4,232,0,6,5,232,0,6,6,240,0,6,7,244,0,6,8,210,0],"secondary":false},{"width":5,"bonus":85,"chr":"v","pixels":[0,2,211,255,1,3,229,119,1,4,222,219,1,5,213,245,2,5,197,37,2,6,236,177,2,7,254,254,3,4,171,255,3,5,215,255,3,6,153,235,3,7,183,76,3,8,253,0,4,2,221,255,4,3,150,246,4,5,171,2,4,6,215,0,4,7,141,0],"secondary":false},{"width":8,"bonus":195,"chr":"w","pixels":[0,2,197,255,0,3,134,255,1,3,218,109,1,4,205,188,1,5,219,240,1,6,202,251,1,7,139,255,2,4,131,118,2,5,204,164,2,6,242,202,2,7,240,196,2,8,139,0,3,2,173,255,3,3,193,255,3,4,148,253,3,6,136,19,3,7,192,0,3,8,184,0,4,2,142,255,4,3,237,214,4,4,238,197,4,5,196,151,5,3,142,0,5,4,205,32,5,5,211,117,5,6,223,226,5,7,234,250,6,3,130,255,6,4,190,255,6,5,218,250,6,6,197,209,6,7,219,115,6,8,230,0,7,2,159,255,7,3,140,176,7,4,146,58,7,5,190,0,7,6,214,0,7,7,162,0],"secondary":false},{"width":5,"bonus":75,"chr":"x","pixels":[1,2,146,255,1,3,221,227,1,6,205,255,2,3,170,86,2,4,251,243,2,5,234,250,2,7,205,0,3,3,205,255,3,4,143,198,3,5,247,135,3,6,249,202,4,2,178,255,4,4,206,0,4,6,152,74,4,7,242,207],"secondary":false},{"width":5,"bonus":125,"chr":"y","pixels":[0,2,207,255,0,10,181,255,1,3,228,125,1,4,223,223,1,5,204,247,1,10,203,255,1,11,182,0,2,5,201,33,2,6,230,166,2,7,250,252,2,8,224,252,2,9,156,254,2,11,204,0,3,4,157,255,3,5,215,255,3,6,169,240,3,7,181,106,3,8,247,6,3,9,221,0,3,10,155,0,4,2,223,255,4,3,158,249,4,5,158,8,4,6,215,0,4,7,159,0],"secondary":false},{"width":6,"bonus":110,"chr":"z","pixels":[1,2,172,255,1,7,247,255,2,2,208,255,2,3,172,0,2,5,196,255,2,6,130,253,2,7,233,233,2,8,248,0,3,2,211,255,3,3,230,131,3,4,202,255,3,6,196,0,3,7,232,229,3,8,213,0,4,2,251,255,4,3,233,144,4,5,202,0,4,7,208,255,4,8,208,0,5,3,251,0,5,4,132,0,5,8,208,0],"secondary":false},{"width":6,"bonus":150,"chr":"A","pixels":[0,7,209,255,1,4,201,255,1,5,251,255,1,6,151,228,1,7,139,57,1,8,209,0,2,1,190,255,2,2,213,255,2,3,149,235,2,4,145,103,2,5,249,230,2,6,251,0,2,7,135,0,3,0,195,255,3,1,225,233,3,2,220,136,3,3,219,45,3,4,138,0,3,5,231,247,3,6,225,0,4,1,202,38,4,2,228,131,4,3,228,230,4,4,221,249,4,5,241,255,4,6,229,49,5,4,214,48,5,5,236,139,5,6,253,219,5,7,204,241],"secondary":false},{"width":6,"bonus":175,"chr":"B","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,241,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,241,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,251,212,2,4,241,0,2,5,232,0,2,6,232,0,2,7,251,212,2,8,241,0,3,0,205,255,3,1,208,0,3,3,219,255,3,4,208,0,3,7,209,255,3,8,208,0,4,0,207,255,4,1,212,40,4,3,231,255,4,4,231,90,4,7,199,255,4,8,209,0,5,1,249,229,5,2,207,246,5,4,248,193,5,5,239,246,5,6,195,255,5,8,199,0],"secondary":false},{"width":7,"bonus":115,"chr":"C","pixels":[1,2,189,255,1,3,229,255,1,4,225,255,1,5,191,255,2,1,199,255,2,3,190,7,2,4,230,5,2,5,231,57,2,6,239,206,2,7,165,185,3,0,211,255,3,2,200,0,3,7,246,230,4,0,211,255,4,1,211,0,4,7,214,252,4,8,222,0,5,0,211,255,5,1,213,20,5,7,208,255,5,8,211,0,6,1,213,7,6,8,208,0],"secondary":false},{"width":8,"bonus":190,"chr":"D","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,241,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,251,212,2,8,241,0,3,0,215,255,3,1,208,0,3,7,219,255,3,8,208,0,4,0,209,255,4,1,220,33,4,7,202,255,4,8,219,0,5,1,246,211,5,6,209,255,5,8,202,0,6,1,132,128,6,2,240,197,6,3,232,247,6,4,220,255,6,5,181,253,6,7,210,0,7,3,186,0,7,4,225,0,7,5,220,0,7,6,179,0],"secondary":false},{"width":6,"bonus":160,"chr":"E","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,241,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,241,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,251,212,2,4,241,0,2,5,232,0,2,6,232,0,2,7,251,212,2,8,241,0,3,0,208,255,3,1,208,0,3,3,208,255,3,4,208,0,3,7,208,255,3,8,208,0,4,0,208,255,4,1,208,0,4,3,178,255,4,4,208,0,4,7,208,255,4,8,208,0,5,1,208,0,5,4,178,0,5,8,208,0],"secondary":false},{"width":5,"bonus":125,"chr":"F","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,241,255,1,5,231,255,1,6,231,255,1,7,231,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,232,0,2,4,251,212,2,5,241,0,2,6,232,0,2,7,232,0,2,8,232,0,3,0,208,255,3,1,208,0,3,4,208,255,3,5,208,0,4,0,208,255,4,1,208,0,4,4,175,255,4,5,208,0],"secondary":false},{"width":8,"bonus":170,"chr":"G","pixels":[1,2,184,255,1,3,229,255,1,4,225,255,1,5,187,255,2,1,209,255,2,3,185,10,2,4,230,7,2,5,231,61,2,6,240,212,2,7,151,180,3,0,199,255,3,2,209,0,3,7,247,226,4,0,211,255,4,1,200,0,4,7,217,251,4,8,219,0,5,0,219,255,5,1,212,4,5,4,208,255,5,7,215,255,5,8,214,0,6,0,137,255,6,1,224,36,6,4,219,255,6,5,250,236,6,6,231,255,6,7,178,255,6,8,215,0,7,1,137,0,7,5,220,0,7,6,232,0,7,7,232,0,7,8,178,0],"secondary":false},{"width":8,"bonus":190,"chr":"H","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,241,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,232,0,2,2,232,0,2,3,251,212,2,4,241,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0,3,3,208,255,3,4,208,0,4,3,208,255,4,4,208,0,5,3,208,255,5,4,208,0,6,0,231,255,6,1,231,255,6,2,231,255,6,3,241,255,6,4,250,236,6,5,231,255,6,6,231,255,6,7,231,255,7,1,232,0,7,2,232,0,7,3,232,0,7,4,241,0,7,5,232,0,7,6,232,0,7,7,232,0,7,8,232,0],"secondary":false},{"width":3,"bonus":100,"chr":"I","pixels":[0,0,136,255,0,7,135,255,1,0,249,255,1,1,244,242,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,249,255,1,8,135,0,2,0,139,255,2,1,250,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,244,144,2,8,250,0],"secondary":false},{"width":3,"bonus":105,"chr":"J","pixels":[0,9,203,255,0,10,133,0,1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,1,8,209,255,1,10,203,0,2,1,232,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,231,0,2,9,209,0],"secondary":false},{"width":6,"bonus":145,"chr":"K","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,233,255,1,4,241,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,232,0,2,2,233,15,2,3,248,182,2,4,244,131,2,5,242,0,2,6,232,0,2,7,232,0,2,8,232,0,3,2,203,255,3,3,137,243,3,4,245,233,3,5,184,162,4,1,205,255,4,3,203,0,4,4,139,35,4,5,244,170,4,6,225,226,5,0,185,255,5,2,206,0,5,6,190,99,5,7,246,226],"secondary":false},{"width":5,"bonus":100,"chr":"L","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,241,255,2,1,232,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,252,226,2,8,242,0,3,7,223,255,3,8,224,0,4,7,223,255,4,8,224,0],"secondary":false},{"width":9,"bonus":255,"chr":"M","pixels":[1,0,243,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,0,155,255,2,1,252,206,2,2,245,153,2,3,238,73,2,4,232,5,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0,3,1,156,3,3,2,215,70,3,3,206,172,3,4,215,238,3,5,165,253,4,4,139,0,4,5,217,87,4,6,244,233,4,7,242,248,5,4,181,255,5,5,153,255,5,7,223,8,5,8,235,0,6,0,141,255,6,1,179,255,6,2,136,255,6,5,182,0,6,6,153,0,7,0,243,255,7,1,244,242,7,2,248,238,7,3,244,242,7,4,237,249,7,5,232,255,7,6,231,255,7,7,231,255,8,1,244,0,8,2,232,0,8,3,232,0,8,4,232,0,8,5,232,0,8,6,232,0,8,7,232,0,8,8,232,0],"secondary":false},{"width":8,"bonus":205,"chr":"N","pixels":[1,0,243,255,1,1,235,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,2,1,253,223,2,2,243,103,2,3,232,1,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0,3,1,139,55,3,2,244,179,3,3,223,233,4,3,193,88,4,4,246,220,4,5,184,227,5,5,231,125,5,6,246,238,5,7,136,229,6,0,231,255,6,1,231,255,6,2,231,255,6,3,231,255,6,4,231,255,6,5,232,255,6,6,245,247,6,7,253,246,7,1,232,0,7,2,232,0,7,3,232,0,7,4,232,0,7,5,232,0,7,6,232,0,7,7,237,0,7,8,244,0],"secondary":false},{"width":9,"bonus":170,"chr":"O","pixels":[1,2,189,255,1,3,225,255,1,4,225,255,1,5,187,255,2,1,193,255,2,3,190,7,2,4,225,5,2,5,230,57,2,6,238,208,2,7,150,179,3,0,213,255,3,2,194,0,3,7,245,224,4,0,213,255,4,1,214,0,4,7,216,252,4,8,215,0,5,0,213,255,5,1,217,19,5,7,213,255,5,8,214,0,6,1,244,200,6,6,191,255,6,8,213,0,7,1,143,126,7,2,237,200,7,3,229,248,7,4,224,254,7,5,187,253,7,7,192,0,8,3,186,0,8,4,223,0,8,5,223,0,8,6,186,0],"secondary":false},{"width":6,"bonus":145,"chr":"P","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,241,255,1,5,231,255,1,6,231,255,1,7,231,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,232,0,2,4,251,212,2,5,241,0,2,6,232,0,2,7,232,0,2,8,232,0,3,0,209,255,3,1,208,0,3,4,203,255,3,5,208,0,4,0,191,255,4,1,223,86,4,4,144,253,4,5,203,0,5,1,240,210,5,2,235,247,5,3,166,254,5,5,143,0],"secondary":false},{"width":9,"bonus":185,"chr":"Q","pixels":[1,2,189,255,1,3,225,255,1,4,223,255,1,5,187,255,2,1,193,255,2,3,190,7,2,4,225,5,2,5,229,58,2,6,238,208,2,7,147,178,3,0,213,255,3,2,194,0,3,7,245,222,4,0,213,255,4,1,214,0,4,7,218,252,4,8,215,9,5,0,211,255,5,1,217,19,5,7,241,255,5,8,248,214,6,1,244,200,6,6,191,255,6,8,247,100,6,9,251,239,7,1,139,127,7,2,238,198,7,3,229,248,7,4,227,255,7,5,189,253,7,7,192,0,7,9,131,107,7,10,235,0,8,3,185,0,8,4,223,0,8,5,227,0,8,6,188,0],"secondary":false},{"width":7,"bonus":185,"chr":"R","pixels":[1,0,241,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,241,255,1,5,231,255,1,6,231,255,1,7,231,255,2,0,208,255,2,1,241,0,2,2,232,0,2,3,232,0,2,4,251,212,2,5,241,0,2,6,232,0,2,7,232,0,2,8,232,0,3,0,208,255,3,1,208,0,3,4,229,255,3,5,214,36,4,0,193,255,4,1,220,77,4,4,199,255,4,5,251,227,4,6,135,225,5,1,241,209,5,2,237,249,5,3,179,254,5,5,202,21,5,6,242,156,5,7,230,232,6,2,198,0,6,3,231,0,6,4,178,0,6,7,167,72,6,8,209,0],"secondary":false},{"width":6,"bonus":125,"chr":"S","pixels":[1,1,211,255,1,2,219,255,1,7,203,255,2,0,195,255,2,2,218,44,2,3,251,231,2,7,221,251,2,8,203,0,3,0,207,255,3,1,195,0,3,3,159,228,3,4,241,125,3,7,203,255,3,8,217,0,4,0,217,255,4,1,207,2,4,4,242,240,4,5,134,57,4,7,185,255,4,8,204,0,5,1,220,26,5,4,128,209,5,5,252,226,5,6,205,248,5,8,186,0],"secondary":false},{"width":5,"bonus":110,"chr":"T","pixels":[0,0,208,255,1,0,208,255,1,1,208,0,2,0,251,255,2,1,250,236,2,2,231,255,2,3,231,255,2,4,231,255,2,5,231,255,2,6,231,255,2,7,231,255,3,0,208,255,3,1,251,0,3,2,232,0,3,3,232,0,3,4,232,0,3,5,232,0,3,6,232,0,3,7,232,0,3,8,232,0,4,0,208,255,4,1,208,0],"secondary":false},{"width":8,"bonus":175,"chr":"U","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,223,255,1,6,159,255,2,1,232,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,5,2,6,237,119,2,7,221,190,3,7,229,233,3,8,165,0,4,7,205,255,4,8,209,0,5,7,159,255,5,8,206,0,6,0,231,255,6,1,231,255,6,2,231,255,6,3,231,255,6,4,231,255,6,5,223,255,6,6,157,253,6,8,159,0,7,1,232,0,7,2,232,0,7,3,232,0,7,4,232,0,7,5,232,0,7,6,223,0,7,7,156,0],"secondary":false},{"width":6,"bonus":140,"chr":"V","pixels":[0,0,213,255,0,1,134,255,1,1,230,115,1,2,222,212,1,3,227,247,1,4,146,255,2,3,188,20,2,4,232,98,2,5,215,194,2,6,220,243,2,7,158,253,3,5,199,216,3,6,240,226,3,7,236,168,3,8,157,0,4,2,189,255,4,3,219,255,4,4,151,242,4,5,133,121,4,6,170,4,4,7,213,0,4,8,156,0,5,0,213,255,5,1,147,230,5,2,138,94,5,3,189,0,5,4,220,0,5,5,144,0],"secondary":false},{"width":9,"bonus":240,"chr":"W","pixels":[0,0,193,255,0,1,134,255,1,1,218,120,1,2,210,196,1,3,227,242,1,4,210,251,1,5,148,255,2,3,161,0,2,4,221,37,2,5,231,145,2,6,242,237,2,7,253,253,3,3,193,255,3,4,205,255,3,5,159,232,3,6,170,118,3,7,227,18,3,8,252,0,4,0,243,255,4,1,224,254,4,2,145,196,4,3,138,41,4,4,193,0,4,5,205,0,4,6,145,0,5,1,250,125,5,2,247,197,5,3,229,232,5,4,156,240,6,3,193,14,6,4,221,84,6,5,205,171,6,6,233,244,6,7,201,251,7,3,143,255,7,4,203,253,7,5,225,241,7,6,211,192,7,7,235,106,7,8,198,0,8,0,223,255,8,1,207,255,8,2,158,236,8,3,142,152,8,4,154,42,8,5,201,0,8,6,213,0,8,7,158,0],"secondary":false},{"width":6,"bonus":130,"chr":"X","pixels":[0,0,134,255,0,7,171,255,1,1,235,232,1,5,137,255,1,6,199,255,1,8,171,0,2,1,129,39,2,2,238,159,2,3,221,232,2,4,209,255,2,6,138,2,2,7,199,0,3,2,184,247,3,3,216,192,3,4,244,213,3,5,235,157,4,0,148,255,4,1,193,255,4,3,178,0,4,4,164,3,4,5,224,117,4,6,238,233,4,7,133,235,5,1,148,2,5,2,194,0,5,7,237,148],"secondary":false},{"width":5,"bonus":105,"chr":"Y","pixels":[0,0,217,255,0,1,166,238,1,1,230,104,1,2,237,225,1,3,177,238,2,3,238,173,2,4,253,253,2,5,235,251,2,6,231,255,2,7,231,255,3,2,209,255,3,3,161,254,3,4,176,57,3,5,252,0,3,6,232,0,3,7,232,0,3,8,232,0,4,0,215,255,4,1,154,253,4,3,209,0,4,4,160,0],"secondary":false},{"width":7,"bonus":160,"chr":"Z","pixels":[1,0,181,255,1,6,131,255,1,7,247,255,2,0,208,255,2,1,182,0,2,5,219,255,2,6,141,247,2,7,236,233,2,8,248,0,3,0,208,255,3,1,208,0,3,3,185,255,3,4,185,255,3,6,219,0,3,7,233,228,3,8,216,0,4,0,215,255,4,1,233,150,4,2,219,255,4,4,185,0,4,5,185,0,4,7,208,255,4,8,208,0,5,0,247,255,5,1,236,142,5,2,142,18,5,3,219,0,5,7,208,255,5,8,208,0,6,1,248,0,6,2,131,0,6,8,208,0],"secondary":false},{"width":6,"bonus":165,"chr":"0","pixels":[0,1,141,255,0,2,211,255,0,3,229,255,0,4,227,255,0,5,208,255,0,6,135,255,1,0,185,255,1,2,149,31,1,3,211,0,1,4,229,0,1,5,230,20,1,6,228,122,1,7,222,212,2,0,217,255,2,1,186,0,2,7,234,239,2,8,184,0,3,0,175,255,3,1,234,122,3,7,185,255,3,8,219,0,4,1,214,149,4,2,226,230,4,3,229,253,4,4,227,255,4,5,208,255,4,6,145,236,4,8,185,0,5,3,204,0,5,4,227,0,5,5,228,0,5,6,208,0,5,7,134,0],"secondary":false},{"width":6,"bonus":85,"chr":"1","pixels":[2,1,154,255,3,0,241,255,3,1,241,245,3,2,245,241,3,3,232,255,3,4,231,255,3,5,231,255,3,6,231,255,3,7,231,255,4,1,241,0,4,2,232,0,4,3,232,0,4,4,232,0,4,5,232,0,4,6,232,0,4,7,232,0,4,8,232,0],"secondary":false},{"width":6,"bonus":120,"chr":"2","pixels":[1,0,171,255,1,6,193,255,1,7,246,254,2,0,217,255,2,1,171,0,2,5,209,255,2,7,244,218,2,8,246,0,3,0,207,255,3,1,224,43,3,4,213,255,3,6,209,0,3,7,224,237,3,8,208,0,4,1,246,217,4,2,229,251,4,3,156,252,4,5,214,0,4,7,208,255,4,8,208,0,5,2,210,0,5,3,225,0,5,4,154,0,5,8,208,0],"secondary":false},{"width":6,"bonus":120,"chr":"3","pixels":[1,0,187,255,1,7,220,249,2,0,213,255,2,1,187,0,2,3,221,255,2,7,210,253,2,8,215,0,3,0,209,255,3,1,217,28,3,3,219,255,3,4,232,93,3,7,191,255,3,8,208,0,4,1,250,230,4,2,192,246,4,4,245,192,4,5,239,246,4,6,189,255,4,8,192,0,5,2,225,0,5,3,186,0,5,5,184,0,5,6,231,0,5,7,189,0],"secondary":false},{"width":6,"bonus":125,"chr":"4","pixels":[1,4,193,255,1,5,234,252,2,2,173,255,2,5,247,231,2,6,231,0,3,1,178,255,3,3,173,0,3,5,224,255,3,6,224,0,4,0,243,255,4,1,240,246,4,2,248,238,4,3,236,250,4,4,231,255,4,5,253,255,4,6,252,235,4,7,231,255,5,1,243,0,5,2,232,0,5,3,232,0,5,4,232,0,5,5,252,226,5,6,253,0,5,7,232,0,5,8,232,0],"secondary":false},{"width":6,"bonus":130,"chr":"5","pixels":[1,0,237,255,1,1,201,255,1,2,183,253,1,3,235,253,1,7,215,251,2,0,208,255,2,1,238,0,2,2,201,0,2,3,242,221,2,4,233,0,2,7,206,255,2,8,212,0,3,0,208,255,3,1,208,0,3,3,187,255,3,4,224,94,3,7,191,255,3,8,206,0,4,1,208,0,4,4,238,204,4,5,236,246,4,6,185,254,4,8,191,0,5,5,190,0,5,6,228,0,5,7,184,0],"secondary":false},{"width":6,"bonus":150,"chr":"6","pixels":[0,2,179,255,0,3,223,255,0,4,237,255,0,5,211,255,0,6,142,255,1,1,189,255,1,3,215,143,1,4,235,98,1,5,238,4,1,6,228,108,1,7,218,200,2,0,203,255,2,2,189,0,2,3,219,243,2,7,226,236,2,8,171,0,3,0,208,255,3,1,204,0,3,3,187,255,3,4,220,80,3,7,196,255,3,8,209,0,4,1,208,0,4,4,239,206,4,5,236,248,4,6,186,254,4,8,196,0,5,5,193,0,5,6,229,0,5,7,186,0],"secondary":false},{"width":6,"bonus":100,"chr":"7","pixels":[1,0,208,255,2,0,208,255,2,1,208,0,2,5,179,255,2,6,209,255,2,7,132,230,3,0,208,255,3,1,216,51,3,2,142,255,3,3,215,255,3,4,151,252,3,6,180,0,3,7,210,0,4,0,249,255,4,1,241,190,4,3,145,13,4,4,216,0,4,5,149,0,5,1,249,0,5,2,179,0],"secondary":false},{"width":6,"bonus":150,"chr":"8","pixels":[0,1,221,255,0,2,209,255,0,5,225,255,0,6,211,255,1,0,211,255,1,2,225,33,1,3,247,223,1,4,177,220,1,5,132,29,1,6,230,42,1,7,246,210,2,0,211,255,2,1,214,24,2,3,215,249,2,4,233,122,2,5,152,0,2,7,215,247,2,8,202,0,3,1,249,226,3,2,212,251,3,4,243,193,3,7,199,255,3,8,208,0,4,2,221,0,4,3,208,0,4,5,242,221,4,6,211,248,4,8,199,0,5,6,210,0,5,7,205,0],"secondary":false},{"width":6,"bonus":150,"chr":"9","pixels":[0,1,187,255,0,2,229,255,0,3,195,255,1,0,196,255,1,2,187,2,1,3,235,76,1,4,239,202,1,7,207,255,2,0,208,255,2,1,196,0,2,4,222,241,2,5,189,0,2,7,203,255,2,8,207,0,3,0,167,255,3,1,225,108,3,5,217,61,3,6,191,255,3,8,203,0,4,1,215,165,4,2,226,235,4,3,237,255,4,4,234,243,4,5,216,212,4,7,192,0,5,2,139,0,5,3,208,0,5,4,237,0,5,5,223,0,5,6,180,0],"secondary":false},{"width":9,"bonus":135,"chr":"%","pixels":[1,2,227,255,1,3,225,255,2,1,211,255,2,3,230,22,2,4,249,217,3,2,249,229,3,3,226,252,3,5,224,86,3,6,145,255,4,3,230,62,4,4,241,153,4,5,147,125,4,7,145,0,5,2,141,255,5,4,131,189,5,5,240,235,5,6,234,246,6,3,141,0,6,4,210,225,6,6,223,15,6,7,251,225,7,5,245,228,7,6,229,253,7,7,132,243,7,8,221,0,8,6,219,0,8,7,228,0],"secondary":false},{"width":4,"bonus":90,"chr":"/","pixels":[1,5,129,255,1,6,189,255,1,7,205,255,1,8,157,252,1,9,129,185,2,1,141,255,2,2,199,255,2,3,199,255,2,4,148,246,2,6,140,41,2,7,189,0,2,8,206,0,2,9,155,0,3,0,140,239,3,2,146,23,3,3,199,0,3,4,200,0,3,5,143,0],"secondary":false},{"width":5,"bonus":75,"chr":"+","pixels":[0,4,175,255,1,4,208,255,1,5,175,0,2,2,231,255,2,3,231,255,2,4,251,255,2,5,250,236,2,6,231,255,3,3,232,0,3,4,251,212,3,5,251,0,3,6,232,0,3,7,232,0,4,4,175,255,4,5,208,0],"secondary":false},{"width":5,"bonus":65,"chr":"?","pixels":[1,0,208,255,2,0,211,255,2,1,210,12,2,3,187,255,2,6,181,231,2,7,209,244,3,1,249,227,3,2,213,253,3,4,187,0,3,7,164,0,3,8,200,0,4,2,222,0,4,3,211,0],"secondary":false},{"width":4,"bonus":70,"chr":"!","pixels":[2,0,231,255,2,1,231,255,2,2,231,255,2,3,231,255,2,4,231,255,2,5,231,255,2,7,186,204,3,1,232,0,3,2,232,0,3,3,232,0,3,4,232,0,3,5,232,0,3,6,232,0,3,8,149,0],"secondary":false},{"width":10,"bonus":290,"chr":"@","pixels":[1,3,202,255,1,4,229,255,1,5,229,255,1,6,173,255,2,1,201,255,2,2,129,247,2,3,133,55,2,4,202,0,2,5,231,15,2,6,238,90,2,7,244,232,3,0,146,255,3,2,210,49,3,3,220,218,3,4,234,253,3,5,211,255,3,7,130,136,3,8,244,181,4,0,208,255,4,1,147,3,4,2,219,233,4,4,188,2,4,5,235,39,4,6,247,216,4,8,226,243,4,9,174,0,5,0,208,255,5,1,208,0,5,2,213,255,5,3,200,0,5,6,178,236,5,7,209,0,5,8,204,254,5,9,216,0,6,0,195,255,6,1,214,39,6,2,199,255,6,3,251,235,6,4,235,255,6,5,245,255,6,7,176,44,6,8,163,255,6,9,204,0,7,1,244,219,7,3,199,4,7,4,232,0,7,5,239,55,7,6,253,213,7,9,164,0,8,2,240,186,8,3,233,246,8,4,222,254,8,5,183,255,8,7,211,0,9,3,175,0,9,4,225,0,9,5,222,0,9,6,183,0],"secondary":false},{"width":7,"bonus":165,"chr":"#","pixels":[0,5,136,255,1,3,184,255,1,5,223,255,1,6,196,167,1,7,166,255,2,1,155,255,2,2,179,255,2,3,233,255,2,4,223,164,2,5,229,251,2,6,230,57,2,7,133,20,2,8,166,0,3,2,156,0,3,3,234,201,3,4,235,15,3,5,239,234,3,6,237,113,3,7,168,223,4,1,128,255,4,2,174,244,4,3,233,255,4,4,228,181,4,5,230,254,4,6,229,80,4,8,147,0,5,2,133,20,5,3,231,203,5,4,233,0,5,5,226,197,5,6,229,0,6,4,184,0,6,6,175,0],"secondary":false},{"width":6,"bonus":145,"chr":"$","pixels":[1,2,225,255,1,3,187,255,1,7,179,254,2,1,213,255,2,3,240,134,2,4,224,156,2,7,219,247,2,8,178,0,3,0,231,255,3,1,249,255,3,2,251,235,3,3,235,253,3,4,253,253,3,5,245,243,3,6,231,255,3,7,251,255,3,8,251,235,4,1,245,151,4,2,250,3,4,3,232,0,4,4,243,109,4,5,254,222,4,6,252,224,4,7,242,115,4,8,251,0,4,9,232,0,5,2,145,0,5,6,222,0,5,7,221,0],"secondary":false},{"width":6,"bonus":65,"chr":"^","pixels":[1,2,149,255,1,3,173,255,2,0,178,255,2,1,160,255,2,3,149,0,2,4,173,0,3,1,227,184,3,2,217,180,4,2,176,50,4,3,210,173,4,4,199,238,5,4,147,23,5,5,186,0],"secondary":false},{"width":7,"bonus":40,"chr":"~","pixels":[1,3,147,255,2,3,211,255,2,4,149,12,3,3,145,255,3,4,233,139,4,4,240,235,5,4,147,220,5,5,221,0],"secondary":false},{"width":7,"bonus":180,"chr":"&","pixels":[0,5,225,255,0,6,215,255,1,1,229,255,1,2,197,255,1,4,187,255,1,6,232,65,1,7,248,222,2,0,229,255,2,1,133,32,2,2,238,87,2,3,249,237,2,4,180,203,2,5,187,4,2,7,217,242,2,8,216,0,3,0,131,255,3,1,253,233,3,2,197,250,3,4,241,106,3,5,228,216,3,7,167,255,3,8,206,0,4,1,132,0,4,2,231,0,4,3,193,0,4,5,196,207,4,6,255,255,4,7,148,122,4,8,168,0,5,4,217,255,5,5,139,248,5,6,182,88,5,7,255,219,6,5,217,0,6,6,135,0,6,8,219,0],"secondary":false},{"width":6,"bonus":65,"chr":"*","pixels":[1,2,164,244,2,2,224,241,2,3,232,214,3,0,134,255,3,1,165,170,3,2,233,245,3,3,243,193,3,4,212,91,4,1,163,95,4,2,201,203,4,3,229,45,4,4,217,139,5,3,160,0],"secondary":false},{"width":4,"bonus":105,"chr":"(","pixels":[1,1,145,255,1,2,201,255,1,3,229,255,1,4,231,255,1,5,229,255,1,6,197,255,1,7,141,255,2,0,173,255,2,1,128,180,2,2,161,57,2,3,202,5,2,4,230,0,2,5,232,5,2,6,232,41,2,7,218,106,2,8,218,203,2,9,199,235,3,0,183,0,3,1,174,0,3,9,185,50,3,10,183,0],"secondary":false},{"width":4,"bonus":105,"chr":")","pixels":[1,0,184,241,1,8,173,255,1,9,184,255,2,0,196,69,2,1,219,163,2,2,216,229,2,3,230,250,2,4,232,255,2,5,227,255,2,6,198,254,2,7,162,231,2,8,128,117,2,9,173,0,2,10,184,0,3,2,140,0,3,3,194,0,3,4,226,0,3,5,232,0,3,6,227,0,3,7,198,0,3,8,146,0],"secondary":false},{"width":4,"bonus":35,"chr":"_","pixels":[0,9,208,255,1,9,208,255,1,10,208,0,2,9,208,255,2,10,208,0,3,9,208,255,3,10,208,0],"secondary":false},{"width":3,"bonus":15,"chr":"-","pixels":[1,4,208,255,2,4,187,255,2,5,208,0],"secondary":true},{"width":6,"bonus":80,"chr":"=","pixels":[1,3,208,255,1,5,208,255,2,3,208,255,2,4,208,0,2,5,208,255,2,6,208,0,3,3,208,255,3,4,208,0,3,5,208,255,3,6,208,0,4,3,208,255,4,4,208,0,4,5,208,255,4,6,208,0,5,4,208,0,5,6,208,0],"secondary":false},{"width":4,"bonus":115,"chr":"[","pixels":[1,0,231,255,1,1,231,255,1,2,231,255,1,3,231,255,1,4,231,255,1,5,231,255,1,6,231,255,1,7,231,255,1,8,231,255,1,9,219,255,2,0,220,0,2,1,232,0,2,2,232,0,2,3,232,0,2,4,232,0,2,5,232,0,2,6,232,0,2,7,232,0,2,8,232,0,2,9,251,212,2,10,220,0,3,0,208,0,3,10,208,0],"secondary":false},{"width":4,"bonus":115,"chr":"]","pixels":[1,9,208,255,2,0,250,236,2,1,231,255,2,2,231,255,2,3,231,255,2,4,231,255,2,5,231,255,2,6,231,255,2,7,231,255,2,8,231,255,2,9,219,255,2,10,208,0,3,0,220,0,3,1,232,0,3,2,232,0,3,3,232,0,3,4,232,0,3,5,232,0,3,6,232,0,3,7,232,0,3,8,232,0,3,9,232,0,3,10,220,0],"secondary":false},{"width":4,"bonus":85,"chr":"{","pixels":[1,4,239,255,2,0,229,255,2,1,231,255,2,2,231,255,2,3,221,255,2,5,253,225,2,6,234,253,2,7,231,255,2,8,229,255,3,1,230,0,3,2,232,0,3,3,232,0,3,4,221,0,3,6,223,0,3,7,232,0,3,8,233,12,3,9,247,185],"secondary":false},{"width":3,"bonus":90,"chr":"}","pixels":[0,9,179,255,1,0,247,237,1,1,232,255,1,2,231,255,1,3,221,255,1,5,223,255,1,6,231,255,1,7,231,255,1,8,229,255,1,10,179,0,2,1,229,0,2,2,232,0,2,3,234,26,2,4,252,241,2,6,224,0,2,7,232,0,2,8,232,0,2,9,229,0],"secondary":false},{"width":3,"bonus":30,"chr":":","pixels":[1,2,239,255,1,6,190,255,1,7,231,254,2,3,239,0,2,7,192,12,2,8,230,0],"secondary":true},{"width":3,"bonus":30,"chr":";","pixels":[1,2,239,255,1,6,193,255,1,7,172,241,2,3,239,0,2,7,194,0,2,8,163,0],"secondary":true},{"width":5,"bonus":60,"chr":"\\"","pixels":[1,0,209,255,1,1,185,255,1,2,139,255,2,1,214,34,2,2,187,10,2,3,139,0,3,0,247,255,3,1,225,244,3,2,159,236,4,1,248,0,4,2,215,0,4,3,147,0],"secondary":true},{"width":3,"bonus":30,"chr":"\'","pixels":[1,0,209,255,1,1,185,255,1,2,139,255,2,1,214,34,2,2,187,10,2,3,139,0],"secondary":true},{"width":6,"bonus":65,"chr":"<","pixels":[1,4,227,255,2,3,135,255,2,5,244,168,3,3,172,255,3,4,135,0,3,5,203,211,3,6,175,57,4,2,169,255,4,4,172,0,4,6,225,188,5,3,169,0,5,6,131,200,5,7,168,9],"secondary":false},{"width":6,"bonus":50,"chr":">","pixels":[1,2,196,255,1,6,201,255,2,3,222,127,2,7,201,0,3,3,212,223,3,5,193,255,4,4,243,222,4,6,194,0,5,4,138,185,5,5,212,5],"secondary":false},{"width":4,"bonus":80,"chr":"\\\\","pixels":[1,0,199,193,1,1,214,241,1,2,190,254,1,3,129,255,2,1,151,0,2,2,205,24,2,3,210,97,2,4,198,182,2,5,213,237,2,6,200,252,2,7,141,255,3,5,141,0,3,6,201,15,3,7,213,83,3,8,199,168,3,9,211,231],"secondary":false},{"width":3,"bonus":20,"chr":".","pixels":[1,6,172,255,1,7,217,248,2,7,172,0,2,8,211,0],"secondary":true},{"width":3,"bonus":35,"chr":",","pixels":[0,8,153,255,1,6,163,255,1,7,157,210,1,8,133,84,1,9,153,0,2,7,164,0,2,8,129,0],"secondary":true},{"width":5,"bonus":105,"chr":"|","pixels":[2,0,231,255,2,1,231,255,2,2,231,255,2,3,231,255,2,4,231,255,2,5,231,255,2,6,231,255,2,7,231,255,2,8,231,255,2,9,231,255,3,0,232,0,3,1,232,0,3,2,232,0,3,3,232,0,3,4,232,0,3,5,232,0,3,6,232,0,3,7,232,0,3,8,232,0,3,9,232,0,3,10,232,0],"secondary":false}],"width":10,"spacewidth":3,"shadow":true,"height":12,"basey":7}');

/***/ }),

/***/ "./src/fonts/chatbox/12pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/12pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":145,"chr":"a","pixels":[1,7,249,255,1,8,252,254,2,3,196,255,2,6,203,255,2,8,249,36,2,9,255,241,3,3,239,255,3,4,196,2,3,6,237,255,3,7,203,4,3,9,223,249,3,10,241,0,4,3,221,255,4,4,246,115,4,6,241,255,4,7,240,45,4,10,218,0,5,4,249,217,5,5,247,250,5,6,245,254,5,7,254,245,5,8,245,254,5,9,244,241,6,5,212,0,6,6,242,0,6,7,244,0,6,8,244,0,6,9,244,0,6,10,231,0],"secondary":false},{"width":8,"bonus":195,"chr":"b","pixels":[1,0,243,255,1,1,245,254,1,2,243,254,1,3,236,252,1,4,255,255,1,5,255,255,1,6,250,254,1,7,255,255,1,8,255,255,1,9,202,244,2,1,244,0,2,2,244,0,2,3,249,127,2,4,245,143,2,5,255,15,2,6,255,0,2,7,249,17,2,8,255,141,2,9,255,116,2,10,193,0,3,3,231,255,3,9,241,236,4,3,233,255,4,4,232,16,4,9,233,255,4,10,223,0,5,4,249,192,5,8,189,255,5,9,157,245,5,10,233,0,6,4,203,159,6,5,243,222,6,6,240,250,6,7,217,246,6,8,161,199,6,9,191,11,7,6,211,0,7,7,235,0,7,8,210,0],"secondary":false},{"width":6,"bonus":105,"chr":"c","pixels":[1,4,173,255,1,5,251,255,1,6,250,255,1,7,254,255,1,8,181,253,2,3,171,255,2,5,179,26,2,6,252,0,2,7,250,20,2,8,255,142,2,9,232,197,3,3,233,255,3,4,172,7,3,9,247,245,3,10,179,0,4,3,231,255,4,4,235,18,4,9,230,255,4,10,237,0,5,4,232,13,5,10,230,0],"secondary":false},{"width":8,"bonus":220,"chr":"d","pixels":[1,4,173,255,1,5,253,255,1,6,250,255,1,7,253,255,1,8,180,253,2,3,175,255,2,4,167,243,2,5,181,35,2,6,253,0,2,7,250,21,2,8,254,153,2,9,232,197,3,3,237,255,3,4,178,11,3,5,159,0,3,9,248,244,3,10,179,0,4,3,223,255,4,4,238,19,4,9,222,254,4,10,238,0,5,4,246,194,5,8,173,255,5,10,222,0,6,0,243,255,6,1,245,254,6,2,245,254,6,3,245,254,6,4,248,251,6,5,252,247,6,6,246,253,6,7,245,254,6,8,246,253,6,9,250,244,7,1,244,0,7,2,244,0,7,3,244,0,7,4,244,0,7,5,244,0,7,6,244,0,7,7,244,0,7,8,244,0,7,9,244,0,7,10,239,0],"secondary":false},{"width":7,"bonus":150,"chr":"e","pixels":[1,4,173,255,1,5,251,255,1,6,255,255,1,7,251,255,1,8,175,253,2,3,184,255,2,5,177,22,2,6,254,240,2,7,255,8,2,8,253,132,2,9,229,195,3,3,237,255,3,4,184,4,3,6,240,254,3,7,240,0,3,9,245,245,3,10,175,0,4,3,179,255,4,4,246,149,4,6,241,255,4,7,240,0,4,9,232,255,4,10,236,0,5,4,224,170,5,5,239,234,5,6,239,251,5,7,241,0,5,10,232,0,6,6,219,0,6,7,235,0],"secondary":false},{"width":4,"bonus":115,"chr":"f","pixels":[0,3,213,255,1,1,245,255,1,2,246,254,1,3,255,255,1,4,253,246,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,0,231,255,2,2,245,0,2,3,254,240,2,4,255,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,0,227,255,3,1,233,11,3,4,240,0],"secondary":false},{"width":8,"bonus":260,"chr":"g","pixels":[1,4,173,255,1,5,253,255,1,6,250,255,1,7,253,255,1,8,180,253,2,3,175,255,2,4,163,243,2,5,181,34,2,6,253,0,2,7,250,21,2,8,253,151,2,9,232,197,2,12,229,247,3,3,237,255,3,4,177,10,3,5,156,0,3,9,247,245,3,10,179,0,3,12,243,254,3,13,222,0,4,3,221,255,4,4,238,19,4,9,222,254,4,10,238,0,4,12,232,255,4,13,242,0,5,4,245,193,5,8,175,255,5,10,228,59,5,11,173,255,5,12,171,248,5,13,232,0,6,3,239,255,6,4,247,252,6,5,252,247,6,6,246,253,6,7,245,254,6,8,246,253,6,9,251,248,6,10,238,241,6,11,180,228,6,12,180,28,6,13,166,0,7,4,240,0,7,5,244,0,7,6,244,0,7,7,244,0,7,8,244,0,7,9,244,0,7,10,244,0,7,11,225,0,7,12,161,0],"secondary":false},{"width":7,"bonus":175,"chr":"h","pixels":[1,0,243,255,1,1,245,254,1,2,245,254,1,3,238,253,1,4,254,255,1,5,255,255,1,6,247,253,1,7,245,254,1,8,245,254,1,9,245,254,2,1,244,0,2,2,244,0,2,3,249,126,2,4,244,125,2,5,254,12,2,6,255,0,2,7,246,0,2,8,244,0,2,9,244,0,2,10,244,0,3,3,237,255,4,3,221,255,4,4,245,118,5,4,248,211,5,5,246,248,5,6,245,254,5,7,245,254,5,8,245,254,5,9,245,254,6,5,205,0,6,6,240,0,6,7,244,0,6,8,244,0,6,9,244,0,6,10,244,0],"secondary":false},{"width":3,"bonus":80,"chr":"i","pixels":[1,0,181,255,1,3,243,255,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,182,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0],"secondary":false},{"width":3,"bonus":115,"chr":"j","pixels":[0,12,236,255,0,13,186,0,1,0,181,255,1,3,243,255,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,1,10,245,253,1,11,227,251,1,13,236,0,2,1,182,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,2,11,243,0,2,12,223,0],"secondary":false},{"width":6,"bonus":155,"chr":"k","pixels":[1,0,243,255,1,1,245,254,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,252,254,1,7,248,255,1,8,245,254,1,9,245,254,2,1,244,0,2,2,244,0,2,3,244,0,2,4,244,0,2,5,247,90,2,6,253,228,2,7,251,23,2,8,248,0,2,9,244,0,2,10,244,0,3,5,201,255,3,6,213,229,3,7,248,203,4,3,165,255,4,4,177,255,4,6,201,2,4,7,221,134,4,8,251,242,5,4,166,3,5,5,177,0,5,9,252,211],"secondary":false},{"width":3,"bonus":100,"chr":"l","pixels":[1,0,243,255,1,1,245,254,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,244,0,2,2,244,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0],"secondary":false},{"width":11,"bonus":225,"chr":"m","pixels":[1,3,208,255,1,4,254,255,1,5,255,255,1,6,246,254,1,7,245,254,1,8,245,254,1,9,245,254,2,4,229,134,2,5,254,12,2,6,255,0,2,7,245,0,2,8,244,0,2,9,244,0,2,10,244,0,3,3,237,255,4,3,227,255,4,4,245,116,5,4,254,251,5,5,255,255,5,6,245,254,5,7,245,254,5,8,245,254,5,9,245,254,6,4,158,191,6,5,250,8,6,6,255,0,6,7,244,0,6,8,244,0,6,9,244,0,6,10,244,0,7,3,237,255,8,3,223,255,8,4,246,116,9,4,249,210,9,5,246,248,9,6,245,254,9,7,245,254,9,8,245,254,9,9,245,254,10,5,205,0,10,6,239,0,10,7,244,0,10,8,244,0,10,9,244,0,10,10,244,0],"secondary":false},{"width":7,"bonus":145,"chr":"n","pixels":[1,3,208,255,1,4,254,255,1,5,255,255,1,6,246,254,1,7,245,254,1,8,245,254,1,9,245,254,2,4,229,134,2,5,254,12,2,6,255,0,2,7,245,0,2,8,244,0,2,9,244,0,2,10,244,0,3,3,237,255,4,3,223,255,4,4,245,118,5,4,249,210,5,5,246,248,5,6,245,254,5,7,245,254,5,8,245,254,5,9,245,254,6,5,205,0,6,6,239,0,6,7,244,0,6,8,244,0,6,9,244,0,6,10,244,0],"secondary":false},{"width":8,"bonus":160,"chr":"o","pixels":[1,4,167,255,1,5,251,255,1,6,250,255,1,7,250,255,1,8,168,250,2,3,163,255,2,4,159,245,2,5,175,31,2,6,252,0,2,7,250,23,2,8,253,156,2,9,223,189,3,3,231,255,3,4,165,11,3,9,249,245,3,10,165,0,4,3,225,255,4,4,232,21,4,9,226,255,4,10,239,0,5,4,248,198,5,8,195,255,5,10,226,0,6,4,188,155,6,5,244,218,6,6,239,249,6,7,215,246,6,8,155,191,6,9,196,6,7,6,208,0,7,7,234,0,7,8,207,0],"secondary":false},{"width":8,"bonus":195,"chr":"p","pixels":[1,3,211,255,1,4,255,255,1,5,255,255,1,6,248,255,1,7,255,255,1,8,255,255,1,9,236,252,1,10,245,253,1,11,245,254,1,12,245,254,2,4,235,149,2,5,255,12,2,6,255,0,2,7,249,18,2,8,255,146,2,9,255,114,2,10,234,0,2,11,243,0,2,12,244,0,2,13,244,0,3,3,219,255,3,9,240,235,4,3,233,255,4,4,221,22,4,9,234,254,4,10,222,0,5,4,250,199,5,8,199,255,5,9,159,242,5,10,233,0,6,4,203,159,6,5,245,220,6,6,241,249,6,7,217,246,6,8,163,197,6,9,201,10,7,6,211,0,7,7,235,0,7,8,210,0],"secondary":false},{"width":8,"bonus":220,"chr":"q","pixels":[1,4,173,255,1,5,253,255,1,6,250,255,1,7,253,255,1,8,181,253,2,3,175,255,2,4,163,243,2,5,182,34,2,6,253,0,2,7,250,21,2,8,254,153,2,9,232,197,3,3,237,255,3,4,177,10,3,5,155,0,3,9,249,245,3,10,179,0,4,3,223,255,4,4,238,19,4,9,222,254,4,10,239,0,5,4,246,192,5,8,173,255,5,10,227,41,6,3,237,255,6,4,247,252,6,5,252,247,6,6,246,253,6,7,245,254,6,8,246,253,6,9,251,248,6,10,248,251,6,11,245,254,6,12,245,254,7,4,238,0,7,5,244,0,7,6,244,0,7,7,244,0,7,8,244,0,7,9,244,0,7,10,244,0,7,11,244,0,7,12,244,0,7,13,244,0],"secondary":false},{"width":5,"bonus":85,"chr":"r","pixels":[1,3,205,255,1,4,247,253,1,5,255,255,1,6,246,254,1,7,245,254,1,8,245,254,1,9,245,254,2,4,238,180,2,5,247,29,2,6,255,0,2,7,245,0,2,8,244,0,2,9,244,0,2,10,244,0,3,3,231,255,3,5,168,0,4,4,231,0],"secondary":false},{"width":7,"bonus":125,"chr":"s","pixels":[1,4,251,255,1,5,225,253,1,9,198,251,2,3,219,255,2,5,253,139,2,6,240,146,2,9,243,251,2,10,195,0,3,3,239,255,3,4,219,0,3,6,243,241,3,9,237,255,3,10,240,0,4,3,229,255,4,4,241,25,4,6,184,245,4,7,243,139,4,9,197,255,4,10,237,0,5,4,233,43,5,7,239,217,5,8,236,233,5,10,198,0,6,8,203,0,6,9,215,0],"secondary":false},{"width":4,"bonus":95,"chr":"t","pixels":[0,3,211,255,1,2,233,255,1,3,255,255,1,4,253,246,1,5,245,254,1,6,245,254,1,7,245,254,1,8,253,255,2,3,253,241,2,4,255,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,245,36,2,9,255,239,3,3,195,255,3,4,240,0,3,9,201,245,3,10,239,0],"secondary":false},{"width":7,"bonus":150,"chr":"u","pixels":[1,3,243,255,1,4,245,254,1,5,245,254,1,6,245,254,1,7,248,255,1,8,248,254,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,249,60,2,9,254,236,3,9,237,249,3,10,235,0,4,8,165,255,4,10,231,0,5,3,243,255,5,4,245,254,5,5,245,254,5,6,245,254,5,7,245,254,5,8,246,253,5,9,249,245,6,4,244,0,6,5,244,0,6,6,244,0,6,7,244,0,6,8,244,0,6,9,244,0,6,10,240,0],"secondary":false},{"width":6,"bonus":120,"chr":"v","pixels":[0,3,211,255,1,4,238,170,1,5,246,246,1,6,207,246,2,5,160,8,2,6,243,78,2,7,234,171,2,8,239,242,2,9,195,247,3,7,168,202,3,8,237,225,3,9,250,216,3,10,189,0,4,5,219,255,4,6,223,255,4,7,158,217,4,8,154,74,4,9,209,0,4,10,212,0,5,3,231,255,5,4,167,221,5,5,162,88,5,6,220,0,5,7,223,0],"secondary":false},{"width":9,"bonus":200,"chr":"w","pixels":[0,3,187,255,1,4,227,164,1,5,229,229,1,6,244,252,1,7,187,253,2,6,208,16,2,7,246,105,2,8,244,223,2,9,255,255,3,6,217,255,3,7,213,253,3,8,183,190,3,9,223,70,3,10,255,0,4,3,245,255,4,4,212,254,4,6,158,50,4,7,218,0,4,8,211,0,5,4,252,185,5,5,251,237,5,6,210,218,6,5,185,11,6,6,239,76,6,7,220,161,6,8,232,237,6,9,224,250,7,6,163,251,7,7,229,245,7,8,242,240,7,9,240,174,7,10,220,0,8,3,231,255,8,4,233,255,8,5,180,237,8,6,162,162,8,7,174,56,8,8,220,0,8,9,228,0,8,10,164,0],"secondary":false},{"width":6,"bonus":105,"chr":"x","pixels":[1,3,209,255,1,4,206,222,1,8,202,255,1,9,186,254,2,4,230,133,2,5,248,238,2,6,169,240,2,7,229,255,2,9,202,0,2,10,185,0,3,5,225,227,3,6,254,240,3,7,224,198,3,8,231,22,4,4,231,255,4,6,201,8,4,7,247,132,4,8,247,237,5,3,177,255,5,5,231,0,5,9,250,207],"secondary":false},{"width":6,"bonus":150,"chr":"y","pixels":[0,3,205,255,0,12,201,255,1,4,238,183,1,5,247,249,1,6,179,247,1,12,231,255,1,13,201,0,2,5,176,20,2,6,246,100,2,7,231,201,2,8,233,245,2,10,155,255,2,11,237,255,2,13,231,0,3,7,178,187,3,8,242,222,3,9,249,215,3,10,194,156,3,11,165,34,3,12,237,0,4,5,217,255,4,6,225,255,4,7,159,219,4,9,211,0,4,10,210,0,5,3,235,255,5,4,170,226,5,5,162,96,5,6,218,1,5,7,225,0],"secondary":false},{"width":6,"bonus":115,"chr":"z","pixels":[1,3,191,255,1,9,251,255,2,3,239,255,2,4,191,0,2,7,217,255,2,9,250,248,2,10,252,0,3,3,239,255,3,4,241,19,3,5,161,255,3,6,208,255,3,8,218,0,3,9,248,246,3,10,243,0,4,3,249,255,4,4,253,227,4,6,162,7,4,7,208,0,4,9,239,255,4,10,240,0,5,4,251,39,5,5,225,0,5,10,240,0],"secondary":false},{"width":8,"bonus":175,"chr":"A","pixels":[0,9,208,255,1,6,179,255,1,7,235,255,1,8,165,242,1,10,208,0,2,4,231,255,2,5,177,252,2,6,247,251,2,7,187,39,2,8,235,0,2,9,157,0,3,1,215,255,3,2,202,255,3,4,158,32,3,5,232,0,3,6,247,239,3,7,244,25,4,2,249,223,4,3,242,203,4,4,165,156,4,6,231,255,4,7,234,26,5,3,226,69,5,4,230,173,5,5,242,246,5,6,251,255,5,7,241,105,6,5,159,14,6,6,241,96,6,7,254,186,6,8,245,249,6,9,164,251,7,8,192,36,7,9,246,124,7,10,161,0],"secondary":false},{"width":8,"bonus":260,"chr":"B","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,255,255,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,254,240,2,10,255,0,3,1,241,255,3,2,240,0,3,5,241,255,3,6,240,0,3,9,239,255,3,10,240,0,4,1,237,255,4,2,242,13,4,5,255,255,4,6,243,19,4,9,235,255,4,10,240,0,5,1,181,255,5,2,247,150,5,5,201,251,5,6,255,152,5,9,176,251,5,10,236,0,6,2,237,209,6,3,245,241,6,4,173,227,6,5,155,27,6,6,237,190,6,7,246,242,6,8,195,238,6,9,160,43,6,10,173,0,7,3,194,0,7,4,232,0,7,5,154,0,7,7,177,0,7,8,233,0,7,9,182,0],"secondary":false},{"width":8,"bonus":140,"chr":"C","pixels":[1,3,199,255,1,4,253,255,1,5,251,255,1,6,252,254,1,7,206,255,2,2,235,255,2,4,203,25,2,5,254,0,2,6,251,19,2,7,253,99,2,8,251,239,3,1,191,255,3,3,235,0,3,9,251,215,4,1,237,255,4,2,193,9,4,9,248,252,4,10,212,0,5,1,237,255,5,2,238,10,5,9,240,254,5,10,245,0,6,1,189,255,6,2,241,69,6,9,170,255,6,10,240,0,7,2,189,0,7,10,170,0],"secondary":false},{"width":9,"bonus":240,"chr":"D","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,255,255,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,254,240,2,10,255,0,3,1,243,255,3,2,240,0,3,9,245,255,3,10,240,0,4,1,233,255,4,2,244,25,4,9,227,255,4,10,245,0,5,1,165,255,5,2,244,138,5,9,167,236,5,10,227,0,6,2,248,242,6,3,207,192,6,7,167,255,6,8,229,255,6,9,160,43,6,10,154,0,7,3,248,163,7,4,242,233,7,5,242,251,7,6,222,248,7,7,179,209,7,8,176,36,7,9,229,0,8,4,158,0,8,5,222,0,8,6,238,0,8,7,216,0],"secondary":false},{"width":6,"bonus":180,"chr":"E","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,255,255,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,254,240,2,10,255,0,3,1,239,255,3,2,240,0,3,5,239,255,3,6,240,0,3,9,239,255,3,10,240,0,4,1,239,255,4,2,240,0,4,5,239,255,4,6,240,0,4,9,239,255,4,10,240,0,5,1,157,255,5,2,240,0,5,6,240,0,5,9,157,255,5,10,240,0],"secondary":false},{"width":6,"bonus":150,"chr":"F","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,1,239,255,3,2,240,0,3,5,239,255,3,6,240,0,4,1,239,255,4,2,240,0,4,5,239,255,4,6,240,0,5,1,157,255,5,2,240,0,5,6,240,0],"secondary":false},{"width":9,"bonus":210,"chr":"G","pixels":[1,3,190,255,1,4,253,255,1,5,251,255,1,6,255,255,1,7,211,252,2,2,235,255,2,4,196,31,2,5,254,0,2,6,251,23,2,7,255,106,2,8,252,242,3,1,171,255,3,3,236,0,3,8,161,150,3,9,251,201,4,1,233,255,4,2,176,23,4,9,249,251,4,10,198,0,5,1,241,255,5,2,233,0,5,5,239,255,5,9,240,254,5,10,245,0,6,1,221,255,6,2,243,34,6,5,241,255,6,6,242,38,6,9,225,255,6,10,240,0,7,2,226,52,7,5,235,255,7,6,254,245,7,7,245,254,7,8,245,254,7,9,186,226,7,10,225,0,8,6,236,0,8,7,244,0,8,8,244,0,8,9,244,0,8,10,165,0],"secondary":false},{"width":8,"bonus":210,"chr":"H","pixels":[1,1,243,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,2,244,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,5,239,255,3,6,240,0,4,5,239,255,4,6,240,0,5,5,241,255,5,6,242,38,6,1,243,255,6,2,245,254,6,3,245,254,6,4,245,254,6,5,245,254,6,6,254,245,6,7,245,254,6,8,245,254,6,9,245,254,7,2,244,0,7,3,244,0,7,4,244,0,7,5,244,0,7,6,244,0,7,7,244,0,7,8,244,0,7,9,244,0,7,10,244,0],"secondary":false},{"width":4,"bonus":110,"chr":"I","pixels":[1,1,211,255,1,9,209,255,2,1,253,255,2,2,253,246,2,3,245,254,2,4,245,254,2,5,245,254,2,6,245,254,2,7,245,254,2,8,245,254,2,9,254,255,2,10,209,0,3,1,191,255,3,2,254,0,3,3,244,0,3,4,244,0,3,5,244,0,3,6,244,0,3,7,244,0,3,8,244,0,3,9,253,192,3,10,254,0],"secondary":false},{"width":3,"bonus":125,"chr":"J","pixels":[0,12,206,254,0,13,232,0,1,1,243,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,1,10,238,253,1,11,198,242,1,13,205,0,2,2,244,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,2,11,236,0,2,12,188,0],"secondary":false},{"width":7,"bonus":170,"chr":"K","pixels":[1,1,243,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,252,254,1,6,250,254,1,7,245,254,1,8,245,254,1,9,245,254,2,2,244,0,2,3,244,0,2,4,247,69,2,5,253,221,2,6,252,30,2,7,249,0,2,8,244,0,2,9,244,0,2,10,244,0,3,4,221,255,3,5,239,249,3,6,241,165,4,3,203,255,4,5,224,26,4,6,249,184,4,7,241,232,5,1,175,255,5,2,177,255,5,4,203,0,5,7,210,124,5,8,252,242,5,9,153,210,6,2,176,3,6,3,177,0,6,9,251,201],"secondary":false},{"width":6,"bonus":120,"chr":"L","pixels":[1,1,243,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,255,255,2,2,244,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,8,2,9,255,255,2,10,255,0,3,9,255,255,3,10,255,0,4,9,255,255,4,10,255,0,5,9,178,252,5,10,255,0],"secondary":false},{"width":10,"bonus":295,"chr":"M","pixels":[1,1,255,255,1,2,247,253,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,175,255,2,2,254,225,2,3,251,155,2,4,247,73,2,5,244,5,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,2,179,15,3,3,234,92,3,4,220,194,3,5,233,246,3,6,163,252,4,5,170,11,4,6,234,84,4,7,219,185,4,8,237,247,4,9,172,250,5,7,212,232,5,8,231,211,5,9,240,120,5,10,169,0,6,4,196,255,6,5,184,255,6,8,193,0,6,9,192,0,7,1,205,255,7,2,213,255,7,5,204,45,7,6,194,47,8,1,243,255,8,2,252,247,8,3,253,246,8,4,249,250,8,5,246,253,8,6,245,254,8,7,245,254,8,8,245,254,8,9,245,254,9,2,244,0,9,3,244,0,9,4,244,0,9,5,244,0,9,6,244,0,9,7,244,0,9,8,244,0,9,9,244,0,9,10,244,0],"secondary":false},{"width":9,"bonus":240,"chr":"N","pixels":[1,1,255,255,1,2,250,255,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,2,255,239,2,3,252,116,2,4,244,4,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,2,161,70,3,3,251,196,3,4,230,231,4,4,215,110,4,5,250,234,4,6,173,222,5,6,245,152,5,7,244,240,6,7,182,118,6,8,251,227,6,9,211,226,7,1,243,255,7,2,245,254,7,3,245,254,7,4,245,254,7,5,245,254,7,6,245,254,7,7,245,254,7,8,247,252,7,9,253,246,7,10,187,0,8,2,244,0,8,3,244,0,8,4,244,0,8,5,244,0,8,6,244,0,8,7,244,0,8,8,244,0,8,9,244,0,8,10,244,0],"secondary":false},{"width":10,"bonus":210,"chr":"O","pixels":[1,3,211,255,1,4,255,255,1,5,251,255,1,6,255,255,1,7,212,252,2,2,233,255,2,4,214,21,2,5,255,0,2,6,251,19,2,7,255,96,2,8,251,237,3,1,199,255,3,3,233,0,3,9,251,206,4,1,243,255,4,2,201,9,4,9,247,252,4,10,202,0,5,1,239,255,5,2,243,11,5,9,241,255,5,10,244,0,6,1,181,255,6,2,246,105,6,9,185,251,6,10,241,0,7,2,248,240,7,3,186,193,7,8,233,255,7,10,182,0,8,3,247,164,8,4,240,235,8,5,243,251,8,6,227,248,8,7,183,219,8,8,158,58,8,9,234,0,9,4,158,0,9,5,221,0,9,6,239,0,9,7,221,0,9,8,157,0],"secondary":false},{"width":7,"bonus":175,"chr":"P","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,1,235,255,3,2,240,5,3,5,227,255,3,6,240,0,4,1,185,255,4,2,246,141,4,5,166,248,4,6,227,0,5,2,238,208,5,3,244,241,5,4,188,235,5,5,158,34,5,6,161,0,6,3,194,0,6,4,231,0,6,5,173,0],"secondary":false},{"width":10,"bonus":220,"chr":"Q","pixels":[1,3,211,255,1,4,255,255,1,5,251,255,1,6,255,255,1,7,212,252,2,2,233,255,2,4,214,21,2,5,255,0,2,6,251,19,2,7,255,96,2,8,251,237,3,1,199,255,3,3,233,0,3,9,251,206,4,1,243,255,4,2,201,9,4,9,247,252,4,10,202,0,5,1,239,255,5,2,243,11,5,9,254,255,5,10,247,90,6,1,181,255,6,2,246,105,6,9,211,253,6,10,254,237,6,11,165,184,7,2,248,240,7,3,186,193,7,8,231,255,7,10,217,53,7,11,253,234,8,3,247,164,8,4,240,235,8,5,242,251,8,6,222,248,8,7,179,217,8,8,158,60,8,9,232,0,8,12,232,0,9,4,158,0,9,5,221,0,9,6,238,0,9,7,216,0],"secondary":false},{"width":7,"bonus":200,"chr":"R","pixels":[1,1,255,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,255,255,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,2,1,239,255,2,2,255,0,2,3,244,0,2,4,244,0,2,5,254,240,2,6,255,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,3,1,235,255,3,2,240,3,3,5,249,255,3,6,244,80,4,1,189,255,4,2,246,133,4,5,178,252,4,6,254,196,4,7,224,240,5,2,239,208,5,3,244,244,5,4,188,235,5,6,176,0,5,7,212,87,5,8,246,211,5,9,235,242,6,3,195,0,6,4,234,0,6,5,173,0,6,9,219,94,6,10,223,0],"secondary":false},{"width":7,"bonus":150,"chr":"S","pixels":[1,2,241,255,1,3,253,255,1,4,210,250,1,9,214,250,2,1,209,255,2,3,241,8,2,4,254,172,2,5,237,170,2,9,244,252,2,10,210,0,3,1,239,255,3,2,210,0,3,5,252,248,3,6,169,43,3,9,235,255,3,10,241,0,4,1,225,255,4,2,241,29,4,5,172,240,4,6,252,190,4,9,177,253,4,10,235,0,5,2,231,46,5,6,224,195,5,7,248,236,5,8,198,236,5,10,176,0,6,7,171,0,6,8,230,0,6,9,183,0],"secondary":false},{"width":8,"bonus":135,"chr":"T","pixels":[1,1,239,255,2,1,239,255,2,2,240,0,3,1,241,255,3,2,242,38,4,1,255,255,4,2,254,245,4,3,245,254,4,4,245,254,4,5,245,254,4,6,245,254,4,7,245,254,4,8,245,254,4,9,245,254,5,1,239,255,5,2,255,0,5,3,244,0,5,4,244,0,5,5,244,0,5,6,244,0,5,7,244,0,5,8,244,0,5,9,244,0,5,10,244,0,6,1,239,255,6,2,240,0,7,2,240,0],"secondary":false},{"width":9,"bonus":190,"chr":"U","pixels":[1,1,243,255,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,252,254,1,8,164,251,2,2,244,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,245,21,2,8,254,172,2,9,213,168,3,9,244,233,4,9,240,254,4,10,223,0,5,9,211,255,5,10,239,0,6,8,205,255,6,10,212,0,7,1,243,255,7,2,245,254,7,3,245,254,7,4,245,254,7,5,245,254,7,6,243,254,7,7,216,247,7,9,205,1,8,2,244,0,8,3,244,0,8,4,244,0,8,5,244,0,8,6,244,0,8,7,242,0,8,8,209,0],"secondary":false},{"width":7,"bonus":155,"chr":"V","pixels":[0,1,211,255,1,2,239,172,1,3,247,247,1,4,214,247,2,3,163,9,2,4,244,80,2,5,238,175,2,6,247,247,2,7,209,247,3,6,165,11,3,7,245,94,3,8,247,227,3,9,254,255,4,6,199,255,4,7,242,255,4,8,198,214,4,9,230,87,4,10,254,0,5,3,199,255,5,4,245,255,5,5,180,242,5,6,161,134,5,7,200,11,5,8,242,0,5,9,166,0,6,1,247,255,6,2,184,244,6,3,162,140,6,4,202,15,6,5,245,0,6,6,171,0],"secondary":false},{"width":11,"bonus":295,"chr":"W","pixels":[0,1,187,255,1,2,230,179,1,3,238,240,1,4,246,253,1,5,186,253,2,3,161,0,2,4,228,34,2,5,248,96,2,6,227,173,2,7,227,229,2,8,238,250,2,9,180,254,3,6,180,195,3,7,230,214,3,8,248,225,3,9,247,168,3,10,180,0,4,3,183,255,4,4,239,255,4,5,192,253,4,6,156,194,4,7,160,77,4,8,193,2,4,9,219,0,4,10,163,0,5,1,255,255,5,2,236,252,5,3,182,174,5,4,187,19,5,5,240,0,5,6,190,0,6,2,255,134,6,3,251,212,6,4,244,244,6,5,168,247,7,4,213,32,7,5,242,105,7,6,225,194,7,7,236,244,7,8,205,250,8,6,168,170,8,7,227,190,8,8,252,239,8,9,246,223,9,3,185,255,9,4,241,255,9,5,219,255,9,6,175,225,9,7,162,140,9,8,177,36,9,9,236,0,9,10,216,0,10,1,223,255,10,2,182,222,10,3,171,139,10,4,193,37,10,5,242,0,10,6,219,0,10,7,154,0],"secondary":false},{"width":7,"bonus":150,"chr":"X","pixels":[0,9,166,255,1,1,187,255,1,2,231,233,1,8,231,255,1,10,166,0,2,2,209,101,2,3,249,229,2,4,178,223,2,6,208,255,2,7,170,255,2,9,231,0,3,4,249,217,3,5,255,255,3,6,167,203,3,7,208,0,3,8,170,0,4,3,211,255,4,4,160,247,4,5,225,89,4,6,254,215,4,7,217,206,5,1,169,255,5,2,211,255,5,4,211,0,5,5,155,0,5,7,233,130,5,8,249,243,6,2,170,7,6,3,212,0,6,9,249,178],"secondary":false},{"width":7,"bonus":115,"chr":"Y","pixels":[0,1,190,255,1,2,248,234,1,3,200,233,2,3,238,115,2,4,247,235,2,5,191,235,3,5,251,227,3,6,253,251,3,7,246,253,3,8,245,254,3,9,245,254,4,4,231,255,4,6,225,12,4,7,249,0,4,8,244,0,4,9,244,0,4,10,244,0,5,1,155,255,5,2,237,255,5,4,158,26,5,5,232,0,6,2,164,33,6,3,237,0],"secondary":false},{"width":8,"bonus":190,"chr":"Z","pixels":[1,1,239,255,1,9,251,255,2,1,239,255,2,2,240,0,2,7,221,255,2,8,182,252,2,9,251,249,2,10,252,0,3,1,239,255,3,2,240,0,3,5,161,255,3,6,233,255,3,8,222,0,3,9,250,244,3,10,245,0,4,1,239,255,4,2,240,0,4,4,233,255,4,5,167,245,4,6,168,27,4,7,233,0,4,9,239,255,4,10,240,0,5,1,245,255,5,2,250,183,5,3,221,255,5,5,233,0,5,6,160,0,5,9,239,255,5,10,240,0,6,1,251,255,6,2,251,143,6,3,183,14,6,4,222,0,6,9,239,255,6,10,240,0,7,2,252,0,7,10,240,0],"secondary":false},{"width":7,"bonus":190,"chr":"0","pixels":[1,2,173,255,1,3,245,255,1,4,254,255,1,5,248,254,1,6,254,255,1,7,238,254,1,8,157,255,2,1,203,255,2,3,184,46,2,4,245,1,2,5,254,0,2,6,247,1,2,7,254,33,2,8,247,139,2,9,233,218,3,1,243,255,3,2,206,13,3,9,250,250,3,10,199,0,4,1,169,255,4,2,251,185,4,8,181,255,4,9,181,251,4,10,245,0,5,2,208,141,5,3,237,209,5,4,232,243,5,5,241,252,5,6,228,250,5,7,206,240,5,8,161,182,5,9,184,14,5,10,178,0,6,4,194,0,6,5,222,0,6,6,238,0,6,7,224,0,6,8,194,0],"secondary":false},{"width":7,"bonus":105,"chr":"1","pixels":[1,2,191,255,2,2,165,253,2,3,201,46,3,1,243,255,3,2,250,249,3,3,251,248,3,4,245,254,3,5,245,254,3,6,245,254,3,7,245,254,3,8,245,254,3,9,245,254,4,2,244,0,4,3,244,0,4,4,244,0,4,5,244,0,4,6,244,0,4,7,244,0,4,8,244,0,4,9,244,0,4,10,244,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[1,9,253,255,2,1,203,255,2,8,191,255,2,9,248,251,2,10,253,0,3,1,241,255,3,2,203,2,3,6,181,255,3,7,170,253,3,9,251,243,3,10,244,0,4,1,201,255,4,2,247,124,4,5,219,255,4,7,181,2,4,8,169,0,4,9,240,254,4,10,240,0,5,2,241,203,5,3,243,245,5,4,199,241,5,6,220,0,5,9,239,255,5,10,240,0,6,3,192,0,6,4,233,0,6,5,188,0,6,10,240,0],"secondary":false},{"width":7,"bonus":160,"chr":"3","pixels":[1,9,197,250,2,1,221,255,2,5,205,255,2,9,243,251,2,10,193,0,3,1,239,255,3,2,221,1,3,5,255,255,3,6,209,17,3,9,235,255,3,10,239,0,4,1,199,255,4,2,247,126,4,4,169,255,4,5,187,248,4,6,255,148,4,9,177,252,4,10,235,0,5,2,242,211,5,3,241,243,5,4,159,219,5,5,173,18,5,6,233,195,5,7,245,241,5,8,193,237,5,9,157,44,5,10,175,0,6,3,200,0,6,4,230,0,6,7,178,0,6,8,232,0,6,9,179,0],"secondary":false},{"width":7,"bonus":160,"chr":"4","pixels":[1,6,157,255,1,7,253,255,2,5,211,255,2,7,247,243,2,8,254,28,3,3,189,255,3,6,212,0,3,7,242,248,3,8,238,30,4,2,203,255,4,4,198,46,4,5,163,56,4,7,237,255,4,8,241,64,5,1,243,255,5,2,249,250,5,3,252,247,5,4,247,252,5,5,245,254,5,6,245,254,5,7,255,255,5,8,254,246,5,9,246,253,6,2,244,0,6,3,244,0,6,4,244,0,6,5,244,0,6,6,244,0,6,7,254,237,6,8,255,28,6,9,245,0,6,10,244,0],"secondary":false},{"width":7,"bonus":170,"chr":"5","pixels":[1,1,175,255,1,2,197,255,1,3,219,255,1,4,231,255,1,9,203,251,2,1,243,255,2,2,191,69,2,3,203,32,2,4,252,234,2,5,232,2,2,9,243,251,2,10,200,0,3,1,239,255,3,2,244,0,3,4,236,252,3,5,233,22,3,9,229,255,3,10,240,0,4,1,239,255,4,2,240,0,4,4,163,255,4,5,248,185,4,8,173,255,4,9,154,247,4,10,229,0,5,2,240,0,5,5,221,183,5,6,247,235,5,7,225,246,5,8,165,215,5,9,177,16,6,6,159,0,6,7,227,0,6,8,217,0],"secondary":false},{"width":7,"bonus":175,"chr":"6","pixels":[1,3,205,255,1,4,251,255,1,5,255,255,1,6,251,255,1,7,250,254,1,8,166,251,2,2,202,255,2,4,228,134,2,5,253,120,2,6,255,4,2,7,251,18,2,8,252,139,2,9,228,202,3,1,217,255,3,3,202,0,3,4,238,250,3,9,247,245,3,10,181,0,4,1,241,255,4,2,218,0,4,4,196,255,4,5,246,152,4,9,184,254,4,10,238,0,5,2,242,2,5,5,236,190,5,6,245,240,5,7,228,248,5,8,178,225,5,9,161,35,5,10,183,0,6,6,176,0,6,7,231,0,6,8,222,0,6,9,157,0],"secondary":false},{"width":7,"bonus":135,"chr":"7","pixels":[1,1,239,255,2,1,239,255,2,2,240,0,3,1,239,255,3,2,240,0,3,7,171,255,3,8,247,255,3,9,181,241,4,1,239,255,4,2,240,0,4,5,199,255,4,6,237,255,4,7,162,215,4,8,180,41,4,9,248,0,4,10,171,0,5,1,243,255,5,2,246,117,5,3,223,255,5,4,212,255,5,5,153,171,5,6,201,13,5,7,237,0,6,1,253,255,6,2,251,182,6,4,223,0,6,5,212,0],"secondary":false},{"width":7,"bonus":190,"chr":"8","pixels":[1,2,245,255,1,3,251,255,1,4,160,243,1,6,217,255,1,7,251,255,1,8,242,254,2,1,215,255,2,3,246,12,2,4,254,185,2,5,247,243,2,7,217,1,2,8,252,66,2,9,253,219,3,1,239,255,3,2,216,0,3,5,247,235,3,6,235,8,3,9,243,251,3,10,217,0,4,1,201,255,4,2,246,113,4,4,209,255,4,5,210,230,4,6,246,177,4,9,195,255,4,10,239,0,5,2,244,215,5,3,237,241,5,5,210,11,5,6,230,176,5,7,247,238,5,8,201,240,5,10,195,0,6,3,206,0,6,4,224,0,6,7,159,0,6,8,231,0,6,9,189,0],"secondary":false},{"width":7,"bonus":155,"chr":"9","pixels":[1,2,229,255,1,3,251,255,1,4,243,254,2,1,211,255,2,3,229,0,2,4,252,72,2,5,253,221,2,9,241,255,3,1,233,255,3,2,211,6,3,5,235,247,3,6,220,0,3,9,209,255,3,10,241,0,4,2,246,161,4,6,236,80,4,8,241,255,4,10,209,0,5,2,195,147,5,3,237,224,5,4,241,252,5,5,245,245,5,6,233,231,5,7,184,215,5,8,163,78,5,9,242,0,6,4,208,0,6,5,238,0,6,6,235,0,6,7,211,0,6,8,155,0],"secondary":false},{"width":11,"bonus":220,"chr":"%","pixels":[1,3,251,255,1,4,253,255,2,2,229,255,2,4,253,41,2,5,254,233,3,2,219,255,3,3,237,83,3,5,228,250,3,6,232,0,3,9,217,255,4,3,250,226,4,4,231,245,4,6,235,99,4,7,217,255,4,10,218,0,5,4,229,62,5,5,248,205,5,6,200,220,5,8,217,6,6,3,166,255,6,4,197,255,6,5,170,220,6,6,252,247,6,7,252,251,6,8,247,253,7,2,209,255,7,4,166,2,7,5,244,214,7,6,161,57,7,7,244,0,7,8,249,40,7,9,254,234,8,3,210,0,8,5,197,254,8,6,222,102,8,9,230,250,8,10,234,0,9,6,242,210,9,7,242,248,9,8,213,245,9,10,226,0,10,7,199,0,10,8,235,0,10,9,205,0],"secondary":false},{"width":5,"bonus":125,"chr":"/","pixels":[1,8,167,255,1,9,227,255,1,10,219,255,1,11,172,235,2,4,173,255,2,5,233,255,2,6,212,255,2,7,167,228,2,8,156,143,2,9,176,38,2,10,228,0,2,11,220,0,2,12,158,0,3,0,181,255,3,1,237,255,3,2,203,255,3,3,163,221,3,4,156,129,3,5,180,27,3,6,233,0,3,7,212,0,4,0,157,115,4,1,185,18,4,2,237,0,4,3,203,0],"secondary":false},{"width":7,"bonus":90,"chr":"+","pixels":[1,6,239,255,2,6,241,255,2,7,242,38,3,3,243,255,3,4,245,254,3,5,245,254,3,6,255,255,3,7,254,245,3,8,245,254,4,4,244,0,4,5,244,0,4,6,254,240,4,7,255,0,4,8,244,0,4,9,244,0,5,6,239,255,5,7,240,0,6,7,240,0],"secondary":false},{"width":6,"bonus":100,"chr":"?","pixels":[1,1,209,255,2,1,239,255,2,2,209,0,2,5,177,255,2,6,191,255,2,8,182,252,2,9,219,255,3,1,207,255,3,2,246,110,3,4,175,255,3,6,177,0,3,7,192,0,3,9,207,113,3,10,219,0,4,2,245,214,4,3,241,245,4,4,158,217,4,5,177,3,5,3,206,0,5,4,232,0],"secondary":false},{"width":5,"bonus":80,"chr":"!","pixels":[2,1,243,255,2,2,245,254,2,3,245,254,2,4,245,254,2,5,245,254,2,6,245,254,2,8,199,255,2,9,241,253,3,2,244,0,3,3,244,0,3,4,244,0,3,5,244,0,3,6,244,0,3,7,244,0,3,9,206,41,3,10,239,0],"secondary":false},{"width":11,"bonus":365,"chr":"@","pixels":[1,4,219,255,1,5,255,255,1,6,251,255,1,7,252,254,1,8,191,252,2,2,187,255,2,3,186,254,2,5,222,26,2,6,255,28,2,7,251,34,2,8,254,137,2,9,250,243,3,2,175,253,3,3,194,29,3,4,234,195,3,5,253,255,3,6,251,255,3,7,232,252,3,9,199,172,3,10,249,165,4,1,209,255,4,3,229,192,4,4,161,242,4,5,184,23,4,6,253,1,4,7,252,88,4,8,251,219,4,10,241,238,4,11,161,0,5,1,237,255,5,2,209,1,5,3,242,252,5,4,174,10,5,8,239,246,5,9,215,2,5,10,241,253,5,11,225,0,6,1,229,255,6,2,239,17,6,3,238,255,6,4,241,43,6,7,155,255,6,9,232,9,6,10,220,255,6,11,239,0,7,1,154,255,7,2,243,142,7,3,189,249,7,4,254,245,7,5,245,254,7,6,245,254,7,7,238,250,7,8,197,141,7,10,160,250,7,11,220,0,8,2,240,231,8,3,214,201,8,4,204,91,8,5,245,43,8,6,246,49,8,7,249,105,8,8,252,226,8,11,157,0,9,3,236,137,9,4,239,221,9,5,241,249,9,6,222,248,9,7,185,233,9,9,224,0,10,5,207,0,10,6,235,0,10,7,216,0,10,8,169,0],"secondary":false},{"width":8,"bonus":185,"chr":"#","pixels":[1,4,208,255,1,7,239,255,1,8,164,78,2,4,231,255,2,5,239,185,2,6,211,255,2,7,251,255,2,8,249,168,3,2,179,255,3,4,234,244,3,5,235,44,3,6,175,6,3,7,252,242,3,8,252,0,3,9,164,0,4,3,179,0,4,4,233,229,4,5,229,50,4,7,248,255,4,8,250,178,4,9,213,255,5,2,153,255,5,3,199,255,5,4,245,255,5,5,240,182,5,7,248,252,5,8,249,38,5,9,175,2,5,10,213,0,6,3,157,18,6,4,245,217,6,5,246,0,6,6,171,0,6,7,247,247,6,8,245,0,7,5,208,0,7,8,240,0],"secondary":false},{"width":7,"bonus":180,"chr":"$","pixels":[1,2,245,255,1,3,253,255,1,4,155,242,1,8,205,249,2,1,205,255,2,3,247,62,2,4,255,235,2,5,181,114,2,8,243,251,2,9,208,44,3,0,243,255,3,1,254,255,3,2,252,247,3,3,248,251,3,4,249,254,3,5,254,252,3,6,247,252,3,7,245,254,3,8,254,255,3,9,254,245,4,1,252,212,4,2,254,26,4,3,244,0,4,4,246,46,4,5,254,234,4,6,252,70,4,7,249,120,4,8,252,196,4,9,254,0,4,10,244,0,5,2,217,54,5,6,252,228,5,7,218,240,5,9,194,0,6,7,225,0,6,8,205,0],"secondary":false},{"width":7,"bonus":80,"chr":"^","pixels":[1,5,213,255,2,2,160,255,2,3,197,255,2,6,214,0,3,1,217,255,3,2,203,241,3,3,173,53,3,4,197,0,4,2,228,84,4,3,238,198,4,4,194,242,5,4,197,57,5,5,227,174,5,6,228,241,6,6,163,31,6,7,216,0],"secondary":false},{"width":7,"bonus":30,"chr":"~","pixels":[2,5,235,255,2,6,155,22,3,6,246,142,4,6,246,244,5,6,154,238,5,7,235,0],"secondary":false},{"width":9,"bonus":225,"chr":"&","pixels":[1,6,237,255,1,7,252,254,1,8,231,253,2,2,253,255,2,3,227,253,2,5,217,255,2,7,238,2,2,8,253,106,2,9,250,209,3,1,235,255,3,3,253,55,3,4,254,246,3,5,162,185,3,6,218,0,3,9,247,250,3,10,205,0,4,1,233,255,4,2,241,77,4,4,189,231,4,5,254,222,4,6,178,161,4,9,228,254,4,10,242,0,5,2,252,232,5,3,196,225,5,5,179,38,5,6,249,216,5,7,201,201,5,8,175,255,5,9,153,231,5,10,228,0,6,3,230,0,6,4,173,0,6,7,253,247,6,8,253,251,6,9,183,36,7,5,187,255,7,6,239,255,7,7,155,224,7,8,252,173,7,9,254,212,8,6,191,18,8,7,239,0,8,9,218,167,8,10,211,0],"secondary":false},{"width":7,"bonus":90,"chr":"*","pixels":[1,2,253,255,2,2,208,250,2,3,254,74,2,4,214,254,3,0,219,255,3,1,193,255,3,2,223,255,3,3,250,236,3,5,213,0,4,1,224,39,4,2,237,195,4,3,243,170,4,4,252,226,5,2,245,253,5,3,184,18,5,4,185,89,5,5,232,78,6,3,243,0],"secondary":false},{"width":4,"bonus":115,"chr":"(","pixels":[1,2,205,255,1,3,249,255,1,4,255,255,1,5,248,254,1,6,255,255,1,7,248,254,1,8,203,254,2,0,225,255,2,1,160,228,2,2,170,111,2,3,211,33,2,4,249,3,2,5,255,0,2,6,247,4,2,7,255,29,2,8,249,77,2,9,232,159,2,10,241,240,2,11,170,233,3,0,160,7,3,1,226,0,3,11,238,110,3,12,156,0],"secondary":false},{"width":5,"bonus":110,"chr":")","pixels":[2,0,246,242,2,1,200,247,2,9,191,255,2,10,237,255,3,1,241,91,3,2,231,172,3,3,227,226,3,4,235,247,3,5,242,252,3,6,233,251,3,7,215,244,3,8,189,216,3,9,171,137,3,10,193,14,3,11,237,0,4,3,156,0,4,4,201,0,4,5,227,0,4,6,239,0,4,7,229,0,4,8,206,0,4,9,160,0],"secondary":false},{"width":5,"bonus":45,"chr":"_","pixels":[0,11,239,255,1,11,239,255,1,12,240,0,2,11,239,255,2,12,240,0,3,11,239,255,3,12,240,0,4,11,227,255,4,12,240,0],"secondary":false},{"width":4,"bonus":25,"chr":"-","pixels":[1,6,239,255,2,6,239,255,2,7,240,0,3,6,217,255,3,7,240,0],"secondary":true},{"width":7,"bonus":100,"chr":"=","pixels":[1,4,239,255,1,7,239,255,2,4,239,255,2,5,240,0,2,7,239,255,2,8,240,0,3,4,239,255,3,5,240,0,3,7,239,255,3,8,240,0,4,4,239,255,4,5,240,0,4,7,239,255,4,8,240,0,5,4,239,255,5,5,240,0,5,7,239,255,5,8,240,0,6,5,240,0,6,8,240,0],"secondary":false},{"width":4,"bonus":135,"chr":"[","pixels":[1,0,245,254,1,1,245,254,1,2,245,254,1,3,245,254,1,4,245,254,1,5,245,254,1,6,245,254,1,7,245,254,1,8,245,254,1,9,245,254,1,10,245,254,1,11,248,254,2,0,247,0,2,1,244,0,2,2,244,0,2,3,244,0,2,4,244,0,2,5,244,0,2,6,244,0,2,7,244,0,2,8,244,0,2,9,244,0,2,10,244,0,2,11,254,240,2,12,247,0,3,0,240,0,3,12,240,0],"secondary":false},{"width":4,"bonus":135,"chr":"]","pixels":[1,11,241,255,2,0,254,245,2,1,245,254,2,2,245,254,2,3,245,254,2,4,245,254,2,5,245,254,2,6,245,254,2,7,245,254,2,8,245,254,2,9,245,254,2,10,245,254,2,11,238,253,2,12,241,0,3,0,236,0,3,1,244,0,3,2,244,0,3,3,244,0,3,4,244,0,3,5,244,0,3,6,244,0,3,7,244,0,3,8,244,0,3,9,244,0,3,10,244,0,3,11,244,0,3,12,236,0],"secondary":false},{"width":5,"bonus":125,"chr":"{","pixels":[0,5,153,255,1,5,233,255,1,6,194,135,2,0,253,255,2,1,244,255,2,2,245,254,2,3,245,253,2,4,214,247,2,6,251,210,2,7,248,250,2,8,245,254,2,9,245,254,2,10,253,255,3,1,253,0,3,2,244,0,3,3,244,0,3,4,243,0,3,5,207,0,3,7,207,0,3,8,243,0,3,9,244,0,3,10,245,30,3,11,255,229,4,0,228,0,4,12,229,0],"secondary":false},{"width":5,"bonus":115,"chr":"}","pixels":[1,11,217,255,2,0,251,229,2,1,247,252,2,2,245,254,2,3,245,254,2,4,245,253,2,6,243,255,2,7,244,255,2,8,245,254,2,9,245,254,2,10,227,251,2,12,218,0,3,1,225,0,3,2,244,0,3,3,244,0,3,4,246,57,3,5,255,247,3,7,243,0,3,8,244,0,3,9,244,0,3,10,244,0,3,11,223,0,4,6,247,0],"secondary":false},{"width":4,"bonus":40,"chr":":","pixels":[1,3,215,255,1,4,175,255,1,8,175,255,1,9,213,255,2,4,227,86,2,5,176,0,2,9,206,120,2,10,214,0],"secondary":true},{"width":4,"bonus":45,"chr":";","pixels":[1,3,215,255,1,4,175,255,1,9,243,255,1,10,234,254,1,11,155,228,2,4,227,86,2,5,176,0,2,10,243,4,2,11,234,0],"secondary":true},{"width":6,"bonus":50,"chr":"\\"","pixels":[2,1,166,255,2,2,207,174,2,3,183,162,3,2,198,116,3,3,170,97,4,1,193,255,4,2,208,207,4,3,182,201,5,2,194,0,5,3,169,0],"secondary":true},{"width":4,"bonus":20,"chr":"\'","pixels":[2,1,166,255,2,2,207,174,2,3,183,162,3,2,166,0],"secondary":true},{"width":7,"bonus":80,"chr":"<","pixels":[1,6,154,255,2,5,195,255,2,6,234,226,2,7,165,44,3,4,166,255,3,6,218,113,3,7,234,158,4,4,190,255,4,5,166,0,4,7,233,240,4,8,155,37,5,3,191,255,5,5,190,0,5,8,238,147,6,4,191,0,6,8,179,163],"secondary":false},{"width":7,"bonus":80,"chr":">","pixels":[1,3,219,255,1,8,197,255,2,4,237,134,2,7,175,255,2,9,198,0,3,4,232,232,3,7,203,255,3,8,176,0,4,5,234,147,4,6,162,245,4,8,204,0,5,5,219,230,5,6,231,227,5,7,156,2,6,6,211,74,6,7,206,0],"secondary":false},{"width":5,"bonus":95,"chr":"\\\\","pixels":[1,0,231,240,1,1,231,251,1,2,167,255,2,0,154,0,2,1,220,27,2,2,237,91,2,3,218,172,2,4,228,234,2,5,237,251,2,6,174,254,3,5,212,20,3,6,240,83,3,7,219,163,3,8,226,228,3,9,239,251,3,10,182,255,4,9,205,15,4,10,240,74,4,11,219,153],"secondary":false},{"width":3,"bonus":20,"chr":".","pixels":[1,8,197,255,1,9,236,255,2,9,210,68,2,10,236,0],"secondary":true},{"width":3,"bonus":20,"chr":",","pixels":[1,9,255,255,1,10,204,247,2,10,255,0,2,11,198,0],"secondary":true},{"width":7,"bonus":125,"chr":"|","pixels":[3,0,245,254,3,1,245,254,3,2,245,254,3,3,245,254,3,4,245,254,3,5,245,254,3,6,245,254,3,7,245,254,3,8,245,254,3,9,245,254,3,10,245,254,3,11,245,254,4,0,244,0,4,1,244,0,4,2,244,0,4,3,244,0,4,4,244,0,4,5,244,0,4,6,244,0,4,7,244,0,4,8,244,0,4,9,244,0,4,10,244,0,4,11,244,0,4,12,244,0],"secondary":false}],"width":11,"spacewidth":3,"shadow":true,"height":14,"basey":9}');

/***/ }),

/***/ "./src/fonts/chatbox/14pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/14pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":8,"bonus":210,"chr":"a","pixels":[1,7,229,255,1,8,255,255,1,9,249,254,2,3,169,255,2,6,161,255,2,7,187,240,2,8,232,28,2,9,255,113,2,10,254,226,3,3,229,255,3,4,183,60,3,6,215,255,3,7,184,86,3,8,176,0,3,10,251,252,3,11,225,0,4,3,245,255,4,4,232,35,4,6,237,255,4,7,221,42,4,10,201,247,4,11,248,0,5,3,199,255,5,4,251,172,5,6,243,255,5,7,242,85,5,9,209,255,5,11,195,0,6,4,245,218,6,5,253,253,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,254,250,7,5,209,4,7,6,252,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,249,0],"secondary":false},{"width":8,"bonus":230,"chr":"b","pixels":[1,0,255,255,1,1,255,255,1,2,255,255,1,3,254,255,1,4,254,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,253,255,1,10,216,242,2,1,255,12,2,2,255,11,2,3,255,93,2,4,255,184,2,5,254,56,2,6,255,21,2,7,255,22,2,8,255,59,2,9,255,190,2,10,253,94,2,11,205,0,3,3,229,253,3,5,184,0,3,10,248,234,4,3,245,255,4,4,234,61,4,10,247,253,4,11,228,0,5,3,160,255,5,4,254,226,5,9,225,255,5,10,180,225,5,11,245,0,6,4,205,150,6,5,250,220,6,6,250,253,6,7,249,254,6,8,226,243,6,9,178,172,6,10,226,8,6,11,159,0,7,6,216,1,7,7,248,0,7,8,248,0,7,9,216,0],"secondary":false},{"width":7,"bonus":125,"chr":"c","pixels":[1,5,245,255,1,6,255,255,1,7,255,255,1,8,250,254,2,4,222,254,2,5,171,118,2,6,247,27,2,7,255,25,2,8,255,77,2,9,254,220,2,10,207,178,3,3,229,255,3,4,167,104,3,5,221,0,3,10,252,236,4,3,249,255,4,4,232,32,4,10,250,254,4,11,233,0,5,3,219,255,5,4,250,77,5,10,220,250,5,11,249,0,6,4,221,13,6,11,216,0],"secondary":false},{"width":8,"bonus":240,"chr":"d","pixels":[1,4,169,255,1,5,251,255,1,6,255,255,1,7,255,255,1,8,253,255,1,9,177,250,2,3,185,255,2,4,207,249,2,5,192,90,2,6,252,23,2,7,255,22,2,8,255,63,2,9,254,198,2,10,234,206,3,3,247,255,3,4,197,55,3,5,202,0,3,10,254,250,3,11,189,0,4,3,213,255,4,4,250,61,4,10,220,248,4,11,249,0,5,4,248,222,5,9,209,255,5,11,214,0,6,0,255,255,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,1,255,8,7,2,255,8,7,3,255,8,7,4,255,8,7,5,255,8,7,6,255,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,0],"secondary":false},{"width":8,"bonus":175,"chr":"e","pixels":[1,5,245,255,1,6,255,255,1,7,255,255,1,8,249,254,2,4,199,253,2,5,161,82,2,6,254,242,2,7,255,54,2,8,255,77,2,9,254,222,2,10,201,176,3,3,239,255,3,4,168,69,3,5,198,0,3,6,243,251,3,7,243,34,3,10,251,235,4,3,231,255,4,4,242,46,4,6,239,255,4,7,242,34,4,10,251,253,4,11,232,0,5,4,249,205,5,6,243,255,5,7,242,34,5,10,226,252,5,11,249,0,6,4,206,172,6,5,249,235,6,6,255,255,6,7,245,33,6,11,223,0,7,6,230,5,7,7,255,1],"secondary":false},{"width":5,"bonus":135,"chr":"f","pixels":[1,3,233,255,2,1,249,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,0,229,255,3,1,165,161,3,2,249,17,3,3,255,255,3,4,255,31,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,0,245,255,4,1,233,38,4,3,203,251,4,4,255,15],"secondary":false},{"width":8,"bonus":265,"chr":"g","pixels":[1,4,167,255,1,5,251,255,1,6,255,255,1,7,255,255,1,8,252,254,1,9,175,249,2,3,184,255,2,4,207,249,2,5,190,90,2,6,251,23,2,7,255,22,2,8,255,63,2,9,255,196,2,10,232,206,2,14,232,237,3,3,247,255,3,4,196,55,3,5,202,0,3,10,254,250,3,11,188,0,3,14,248,252,4,3,209,255,4,4,250,63,4,10,217,246,4,11,249,0,4,14,234,252,5,4,248,223,5,9,211,255,5,11,221,73,5,13,227,255,5,14,180,220,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,254,255,6,12,235,249,6,13,193,194,6,14,230,15,7,4,255,8,7,5,255,8,7,6,255,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,4,7,12,254,0,7,13,229,0],"secondary":false},{"width":8,"bonus":210,"chr":"h","pixels":[1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,254,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,1,255,12,2,2,255,12,2,3,255,83,2,4,255,197,2,5,254,65,2,6,255,22,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0,3,3,219,254,3,5,197,0,4,3,245,255,4,4,223,40,5,3,197,255,5,4,253,186,6,4,242,211,6,5,253,251,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,5,200,2,7,6,249,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,0],"secondary":false},{"width":3,"bonus":90,"chr":"i","pixels":[1,1,223,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,2,223,0,2,4,255,12,2,5,255,12,2,6,255,12,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0],"secondary":false},{"width":4,"bonus":135,"chr":"j","pixels":[0,14,238,255,1,14,231,251,2,1,223,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,233,249,2,14,170,118,3,2,223,0,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,12,3,12,255,8,3,13,255,0,3,14,227,0],"secondary":false},{"width":7,"bonus":200,"chr":"k","pixels":[1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,1,255,12,2,2,255,12,2,3,255,12,2,4,255,12,2,5,255,22,2,6,255,171,2,7,255,165,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0,3,5,207,253,3,6,237,253,3,7,244,234,3,8,187,86,4,4,223,255,4,5,154,238,4,6,206,7,4,7,245,135,4,8,254,251,4,9,167,212,5,3,237,255,5,5,224,0,5,8,159,94,5,9,254,222,5,10,234,228,6,4,237,0,6,10,243,169,6,11,210,0],"secondary":false},{"width":3,"bonus":110,"chr":"l","pixels":[1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,1,255,12,2,2,255,12,2,3,255,12,2,4,255,12,2,5,255,12,2,6,255,12,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0],"secondary":false},{"width":13,"bonus":285,"chr":"m","pixels":[1,3,223,255,1,4,254,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,4,247,201,2,5,254,63,2,6,255,22,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0,3,3,215,255,3,5,195,0,4,3,247,255,4,4,222,41,5,3,205,255,5,4,252,188,6,4,250,238,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,4,209,241,7,5,239,58,7,6,255,14,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,0,8,3,219,255,8,5,198,0,9,3,245,255,9,4,225,41,10,3,199,255,10,4,252,187,11,4,243,209,11,5,253,250,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,12,5,199,1,12,6,248,8,12,7,255,8,12,8,255,8,12,9,255,8,12,10,255,8,12,11,255,0],"secondary":false},{"width":8,"bonus":180,"chr":"n","pixels":[1,3,223,255,1,4,254,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,4,247,201,2,5,254,63,2,6,255,22,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0,3,3,213,255,3,5,195,0,4,3,245,255,4,4,219,41,5,3,199,255,5,4,253,186,6,4,243,209,6,5,253,251,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,5,199,1,7,6,249,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,0],"secondary":false},{"width":9,"bonus":190,"chr":"o","pixels":[1,5,245,255,1,6,255,255,1,7,255,255,1,8,245,253,2,4,222,254,2,5,169,119,2,6,246,26,2,7,255,27,2,8,255,83,2,9,254,226,2,10,190,162,3,3,225,255,3,4,164,108,3,5,222,0,3,10,251,227,4,3,249,255,4,4,230,35,4,10,251,253,4,11,224,0,5,3,215,255,5,4,250,96,5,10,220,249,5,11,249,0,6,4,252,245,6,5,174,186,6,9,243,255,6,10,155,159,6,11,215,0,7,5,252,201,7,6,249,249,7,7,247,252,7,8,217,238,7,9,168,120,7,10,243,0,8,6,199,0,8,7,243,0,8,8,244,0,8,9,202,0],"secondary":false},{"width":8,"bonus":235,"chr":"p","pixels":[1,3,227,255,1,4,254,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,254,255,1,10,254,255,1,11,255,255,1,12,255,255,1,13,255,255,1,14,255,255,2,4,246,186,2,5,253,52,2,6,255,18,2,7,255,23,2,8,255,61,2,9,254,192,2,10,254,91,2,11,254,11,2,12,255,12,2,13,255,12,2,14,255,12,3,3,225,255,3,5,180,0,3,10,248,234,4,3,245,255,4,4,232,67,4,10,247,253,4,11,227,0,5,3,161,255,5,4,253,232,5,9,229,255,5,10,183,223,5,11,245,0,6,4,206,153,6,5,251,221,6,6,251,252,6,7,249,254,6,8,226,243,6,9,182,169,6,10,230,8,6,11,160,0,7,6,217,1,7,7,248,0,7,8,248,0,7,9,216,0],"secondary":false},{"width":8,"bonus":245,"chr":"q","pixels":[1,4,167,255,1,5,251,255,1,6,255,255,1,7,255,255,1,8,252,254,1,9,177,250,2,3,183,255,2,4,207,251,2,5,191,92,2,6,251,23,2,7,255,22,2,8,255,65,2,9,254,200,2,10,235,207,3,3,247,255,3,4,195,56,3,5,203,0,3,10,254,250,3,11,190,0,4,3,211,255,4,4,249,62,4,10,218,247,4,11,249,0,5,4,248,221,5,9,208,255,5,11,221,65,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,7,4,255,8,7,5,255,8,7,6,255,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,8,7,12,255,8,7,13,255,8,7,14,255,8],"secondary":false},{"width":5,"bonus":100,"chr":"r","pixels":[1,3,223,255,1,4,250,254,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,4,249,210,2,5,251,81,2,6,255,19,2,7,255,12,2,8,255,12,2,9,255,12,2,10,255,12,2,11,255,0,3,3,209,255,3,5,205,0,4,3,247,255,4,4,214,37],"secondary":false},{"width":7,"bonus":150,"chr":"s","pixels":[1,4,253,255,1,5,255,255,1,10,200,244,2,3,217,255,2,4,154,160,2,5,253,73,2,6,254,249,2,10,247,249,2,11,192,0,3,3,247,255,3,4,221,31,3,6,201,227,3,7,251,140,3,10,245,253,3,11,241,0,4,3,225,255,4,4,249,65,4,7,252,248,4,8,178,125,4,9,154,255,4,10,201,245,4,11,243,0,5,4,232,77,5,7,161,207,5,8,255,245,5,9,230,241,5,10,173,72,5,11,193,0,6,9,245,0,6,10,217,0],"secondary":false},{"width":5,"bonus":125,"chr":"t","pixels":[0,3,237,255,1,1,215,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,252,254,2,2,217,14,2,3,255,255,2,4,255,31,2,5,255,12,2,6,255,12,2,7,255,12,2,8,255,15,2,9,255,103,2,10,255,235,3,3,255,255,3,4,255,20,3,10,247,250,3,11,235,0,4,4,255,5,4,11,242,0],"secondary":false},{"width":8,"bonus":180,"chr":"u","pixels":[1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,242,252,2,4,255,12,2,5,255,12,2,6,255,12,2,7,255,12,2,8,255,26,2,9,255,146,2,10,252,218,3,10,251,252,3,11,216,0,4,10,211,248,4,11,248,0,5,9,221,255,5,11,205,0,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,4,255,8,7,5,255,8,7,6,255,8,7,7,255,8,7,8,255,8,7,9,255,8,7,10,255,8,7,11,255,0],"secondary":false},{"width":7,"bonus":145,"chr":"v","pixels":[0,3,211,255,1,4,247,216,1,5,254,255,1,6,201,246,2,5,216,48,2,6,254,127,2,7,245,222,2,8,251,253,2,9,182,248,3,8,222,66,3,9,253,202,3,10,255,255,4,7,185,255,4,8,251,255,4,9,215,241,4,10,224,129,4,11,255,0,5,4,181,255,5,5,249,255,5,6,222,252,5,7,178,185,5,8,196,51,5,9,251,0,5,10,203,0,6,3,233,255,6,4,187,200,6,5,197,71,6,6,250,0,6,7,220,0],"secondary":false},{"width":11,"bonus":295,"chr":"w","pixels":[0,3,184,255,1,4,239,213,1,5,253,253,1,6,241,252,1,7,176,255,2,5,202,14,2,6,252,70,2,7,246,136,2,8,235,207,2,9,245,247,2,10,235,251,3,7,158,197,3,8,222,216,3,9,250,243,3,10,250,198,3,11,232,0,4,4,153,255,4,5,227,255,4,6,239,255,4,7,184,232,4,8,169,137,4,9,193,24,4,10,238,0,4,11,194,0,5,3,255,255,5,4,234,246,5,5,198,144,5,6,228,9,5,7,239,0,5,8,168,0,6,4,255,158,6,5,252,232,6,6,247,250,6,7,177,252,7,5,158,2,7,6,234,53,7,7,248,124,7,8,234,204,7,9,247,250,7,10,214,250,8,7,158,218,8,8,221,221,8,9,250,244,8,10,254,230,8,11,209,0,9,4,201,255,9,5,251,255,9,6,236,255,9,7,196,224,9,8,184,146,9,9,201,49,9,10,240,0,9,11,229,0,10,3,181,255,10,4,190,154,10,5,211,59,10,6,251,2,10,7,236,0,10,8,172,0],"secondary":false},{"width":7,"bonus":150,"chr":"x","pixels":[1,3,245,255,1,4,189,218,1,9,191,255,1,10,230,255,2,4,252,191,2,5,245,239,2,8,243,255,2,9,170,235,2,10,195,21,2,11,230,0,3,5,218,132,3,6,255,255,3,7,251,254,3,9,244,0,3,10,157,0,4,5,229,255,4,6,212,214,4,7,254,204,4,8,254,210,5,3,177,255,5,4,237,255,5,6,229,0,5,7,179,6,5,8,229,138,5,9,254,248,5,10,170,220,6,3,175,255,6,4,184,32,6,5,237,0,6,10,253,207],"secondary":false},{"width":7,"bonus":200,"chr":"y","pixels":[0,3,237,255,0,4,156,250,0,14,239,255,1,4,250,178,1,5,252,251,1,6,231,246,1,14,236,252,2,5,179,20,2,6,250,97,2,7,245,189,2,8,252,252,2,9,211,246,2,13,243,255,2,14,153,187,3,8,194,55,3,9,253,178,3,10,255,255,3,11,253,253,3,12,198,234,3,13,170,100,3,14,244,0,4,7,205,255,4,8,253,255,4,9,203,242,4,10,209,128,4,11,255,22,4,12,252,0,4,13,182,0,5,4,213,255,5,5,255,255,5,6,208,245,5,7,181,159,5,8,210,33,5,9,253,0,5,10,193,0,6,3,207,255,6,4,188,163,6,5,218,39,6,6,255,0,6,7,200,0],"secondary":false},{"width":7,"bonus":160,"chr":"z","pixels":[1,3,255,255,1,9,163,255,1,10,255,255,2,3,255,255,2,4,255,20,2,8,235,255,2,9,169,243,2,10,255,255,2,11,255,0,3,3,255,255,3,4,255,20,3,6,193,255,3,7,209,254,3,9,237,21,3,10,255,255,3,11,255,0,4,3,255,255,4,4,255,147,4,5,240,254,4,7,195,5,4,8,208,0,4,10,255,255,4,11,255,0,5,3,255,255,5,4,254,183,5,5,161,51,5,6,239,0,5,10,255,255,5,11,255,0,6,4,255,0,6,5,182,0,6,11,255,0],"secondary":false},{"width":9,"bonus":220,"chr":"A","pixels":[0,10,205,255,1,7,163,255,1,8,245,255,1,9,229,253,1,10,178,175,1,11,206,0,2,5,217,255,2,6,251,255,2,7,255,255,2,8,201,133,2,9,246,4,2,10,227,0,3,2,175,255,3,3,249,255,3,4,208,249,3,5,178,159,3,6,220,27,3,7,254,252,3,8,255,44,4,1,255,255,4,2,232,245,4,3,200,104,4,4,250,0,4,5,203,0,4,7,252,254,4,8,253,44,5,2,255,157,5,3,253,246,5,4,231,242,5,7,251,255,5,8,253,44,6,3,162,21,6,4,248,104,6,5,247,208,6,6,255,255,6,7,255,255,6,8,253,130,7,6,210,55,7,7,255,145,7,8,255,237,7,9,249,250,7,10,155,246,8,9,243,93,8,10,252,191],"secondary":false},{"width":10,"bonus":285,"chr":"B","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,254,240,3,6,255,42,3,7,255,12,3,8,255,12,3,9,255,31,3,10,255,255,3,11,255,0,4,1,253,255,4,2,255,22,4,5,240,254,4,6,242,34,4,10,255,255,4,11,255,0,5,1,237,255,5,2,254,48,5,5,253,255,5,6,242,43,5,10,250,255,5,11,255,0,6,1,185,255,6,2,250,185,6,5,201,252,6,6,253,88,6,10,225,251,6,11,250,0,7,2,243,222,7,3,254,252,7,4,199,229,7,5,164,54,7,6,246,223,7,9,217,255,7,10,167,203,7,11,221,0,8,3,211,1,8,4,251,0,8,5,178,0,8,7,252,240,8,8,244,250,8,9,188,209,8,10,219,10,9,8,237,0,9,9,240,0,9,10,154,0],"secondary":false},{"width":9,"bonus":190,"chr":"C","pixels":[1,3,178,255,1,4,251,255,1,5,255,255,1,6,255,255,1,7,254,255,1,8,200,251,2,2,233,255,2,3,201,245,2,4,200,92,2,5,251,29,2,6,255,28,2,7,255,67,2,8,254,180,2,9,253,249,3,1,154,255,3,2,182,243,3,3,234,1,3,4,193,0,3,9,227,180,3,10,252,182,4,1,227,255,4,2,175,79,4,3,173,0,4,10,249,245,4,11,180,0,5,1,249,255,5,2,230,30,5,10,252,254,5,11,239,0,6,1,229,255,6,2,250,60,6,10,234,253,6,11,251,0,7,1,166,255,7,2,240,114,7,10,163,223,7,11,232,0,8,2,166,0],"secondary":false},{"width":11,"bonus":270,"chr":"D","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,31,3,10,255,255,3,11,255,0,4,1,255,255,4,2,255,20,4,10,255,255,4,11,255,0,5,1,245,255,5,2,254,46,5,10,243,254,5,11,255,0,6,1,209,255,6,2,248,96,6,10,208,245,6,11,242,0,7,2,249,226,7,9,221,255,7,10,168,169,7,11,200,0,8,2,228,228,8,3,251,233,8,8,225,255,8,9,197,250,8,10,222,6,9,3,231,148,9,4,251,225,9,5,254,254,9,6,252,254,9,7,224,242,9,8,183,172,9,9,226,8,9,10,193,0,10,5,221,2,10,6,253,0,10,7,251,0,10,8,213,0],"secondary":false},{"width":8,"bonus":210,"chr":"E","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,254,240,3,6,255,42,3,7,255,12,3,8,255,12,3,9,255,31,3,10,255,255,3,11,255,0,4,1,255,255,4,2,255,20,4,5,240,254,4,6,242,34,4,10,255,255,4,11,255,0,5,1,255,255,5,2,255,20,5,5,239,255,5,6,242,34,5,10,255,255,5,11,255,0,6,1,255,255,6,2,255,20,6,5,239,255,6,6,242,34,6,10,255,255,6,11,255,0,7,2,255,7,7,6,240,3,7,11,255,0],"secondary":false},{"width":8,"bonus":175,"chr":"F","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,254,240,3,6,255,42,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,1,255,255,4,2,255,20,4,5,240,254,4,6,242,34,5,1,255,255,5,2,255,20,5,5,239,255,5,6,242,34,6,1,255,255,6,2,255,20,6,5,239,255,6,6,242,34,7,2,255,7,7,6,240,3],"secondary":false},{"width":10,"bonus":265,"chr":"G","pixels":[1,3,165,255,1,4,247,255,1,5,255,255,1,6,255,255,1,7,253,255,1,8,191,250,2,2,217,255,2,3,212,251,2,4,193,104,2,5,248,32,2,6,255,29,2,7,255,71,2,8,254,192,2,9,251,243,3,2,199,252,3,3,218,6,3,4,208,0,3,9,240,205,3,10,248,166,4,1,211,255,4,2,164,113,4,3,196,0,4,10,249,237,4,11,162,0,5,1,243,255,5,2,215,32,5,10,252,254,5,11,231,0,6,1,241,255,6,2,245,36,6,5,239,255,6,10,247,253,6,11,252,0,7,1,209,255,7,2,246,77,7,5,239,255,7,6,244,85,7,10,220,250,7,11,246,0,8,2,222,79,8,5,239,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,199,201,8,11,216,0,9,6,240,8,9,7,255,8,9,8,255,8,9,9,255,8,9,10,255,3,9,11,157,0],"secondary":false},{"width":10,"bonus":240,"chr":"H","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,2,255,12,3,3,255,12,3,4,255,12,3,5,254,240,3,6,255,42,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,5,240,254,4,6,242,34,5,5,239,255,5,6,242,34,6,5,239,255,6,6,242,34,7,5,243,255,7,6,244,85,8,1,255,255,8,2,255,255,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,9,2,255,8,9,3,255,8,9,4,255,8,9,5,255,8,9,6,255,8,9,7,255,8,9,8,255,8,9,9,255,8,9,10,255,8,9,11,255,0],"secondary":false},{"width":5,"bonus":130,"chr":"I","pixels":[1,1,237,255,1,10,233,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,234,0,3,1,227,255,3,2,255,12,3,3,255,12,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,225,3,11,255,0,4,2,228,0,4,11,225,0],"secondary":false},{"width":4,"bonus":150,"chr":"J","pixels":[0,13,249,255,0,14,187,27,1,13,223,255,1,14,249,0,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,252,254,2,12,216,240,2,13,167,81,2,14,223,0,3,2,255,12,3,3,255,12,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,4,3,12,252,0,3,13,204,0],"secondary":false},{"width":9,"bonus":230,"chr":"K","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,2,255,12,3,3,255,12,3,4,255,13,3,5,255,154,3,6,254,180,3,7,255,14,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,4,171,249,4,5,255,255,4,6,227,208,4,7,187,30,5,3,189,255,5,4,187,253,5,5,182,63,5,6,255,199,5,7,248,236,6,2,208,255,6,3,172,248,6,4,190,7,6,5,186,0,6,7,229,152,6,8,255,251,6,9,161,204,7,1,223,255,7,2,157,238,7,3,208,1,7,4,167,0,7,8,168,105,7,9,255,231,7,10,223,219,8,2,224,0,8,10,249,189,8,11,192,0],"secondary":false},{"width":8,"bonus":135,"chr":"L","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,2,255,12,3,3,255,12,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,53,3,10,255,255,3,11,255,0,4,10,255,255,4,11,255,0,5,10,255,255,5,11,255,0,6,10,255,255,6,11,255,0,7,11,255,0],"secondary":false},{"width":13,"bonus":375,"chr":"M","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,241,255,3,2,255,227,3,3,255,133,3,4,255,39,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,2,246,97,4,3,248,196,4,4,253,253,4,5,194,241,5,4,198,43,5,5,253,130,5,6,246,232,5,7,243,249,6,7,232,73,6,8,248,168,6,9,252,253,6,10,218,244,7,8,212,236,7,9,249,245,7,10,253,154,7,11,208,0,8,5,155,255,8,6,241,255,8,7,190,252,8,8,154,150,8,9,198,12,8,10,240,0,9,3,213,255,9,4,223,255,9,5,156,207,9,6,168,47,9,7,241,0,9,8,188,0,10,1,249,255,10,2,222,252,10,3,182,169,10,4,223,65,10,5,230,62,10,6,155,92,11,1,255,255,11,2,255,255,11,3,255,255,11,4,255,255,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,12,2,255,8,12,3,255,8,12,4,255,8,12,5,255,8,12,6,255,8,12,7,255,8,12,8,255,8,12,9,255,8,12,10,255,8,12,11,255,0],"secondary":false},{"width":11,"bonus":275,"chr":"N","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,181,255,3,2,254,249,3,3,255,124,3,4,255,14,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,2,205,103,4,3,254,228,4,4,225,224,5,4,243,150,5,5,253,247,6,5,164,76,6,6,253,203,6,7,231,231,7,7,223,120,7,8,251,239,7,9,161,218,8,9,252,216,8,10,237,234,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,218,0,10,2,255,8,10,3,255,8,10,4,255,8,10,5,255,8,10,6,255,8,10,7,255,8,10,8,255,8,10,9,255,8,10,10,255,8,10,11,255,0],"secondary":false},{"width":11,"bonus":270,"chr":"O","pixels":[1,3,191,255,1,4,253,255,1,5,255,255,1,6,255,255,1,7,254,255,1,8,194,250,2,2,241,255,2,3,190,235,2,4,207,80,2,5,254,27,2,6,255,28,2,7,255,65,2,8,254,177,2,9,251,246,3,1,169,255,3,2,181,236,3,3,242,0,3,4,175,0,3,9,228,187,3,10,250,172,4,1,233,255,4,2,189,82,4,3,168,0,4,10,247,241,4,11,169,0,5,1,249,255,5,2,236,34,5,10,251,254,5,11,234,0,6,1,225,255,6,2,251,68,6,10,229,251,6,11,250,0,7,2,248,198,7,9,193,255,7,10,176,213,7,11,226,0,8,2,239,232,8,3,244,223,8,8,213,255,8,9,218,255,8,10,198,25,9,3,237,148,9,4,249,225,9,5,253,253,9,6,252,254,9,7,229,244,9,8,187,187,9,9,217,19,9,10,218,0,10,5,220,1,10,6,252,1,10,7,252,0,10,8,219,0],"secondary":false},{"width":9,"bonus":210,"chr":"P","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,255,12,3,6,254,240,3,7,255,42,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,1,249,255,4,2,255,27,4,6,250,255,4,7,241,22,5,1,221,255,5,2,250,72,5,6,242,255,5,7,250,0,6,2,249,221,6,5,203,255,6,6,164,228,6,7,242,0,7,2,215,196,7,3,253,243,7,4,250,252,7,5,194,219,7,6,205,16,8,3,165,2,8,4,241,0,8,5,247,0,8,6,166,0],"secondary":false},{"width":11,"bonus":295,"chr":"Q","pixels":[1,3,191,255,1,4,253,255,1,5,255,255,1,6,255,255,1,7,254,255,1,8,194,250,2,2,241,255,2,3,190,235,2,4,207,80,2,5,254,27,2,6,255,28,2,7,255,65,2,8,254,177,2,9,251,246,3,1,169,255,3,2,181,236,3,3,242,0,3,4,175,0,3,9,228,187,3,10,250,172,4,1,233,255,4,2,189,82,4,3,168,0,4,10,247,241,4,11,169,0,5,1,249,255,5,2,236,34,5,10,254,255,5,11,234,8,6,1,225,255,6,2,251,68,6,10,255,255,6,11,255,202,7,2,248,198,7,9,193,255,7,10,186,222,7,11,255,195,7,12,250,238,8,2,239,232,8,3,244,223,8,8,213,255,8,9,213,255,8,10,199,27,8,11,164,11,8,12,234,185,8,13,245,133,9,3,237,148,9,4,249,225,9,5,254,254,9,6,249,254,9,7,227,242,9,8,184,180,9,9,217,19,9,10,213,0,9,13,184,58,10,5,220,1,10,6,253,0,10,7,248,0,10,8,216,0],"secondary":false},{"width":9,"bonus":250,"chr":"R","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,3,1,255,255,3,2,255,31,3,3,255,12,3,4,255,12,3,5,255,12,3,6,254,240,3,7,255,42,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,0,4,1,251,255,4,2,255,24,4,6,244,255,4,7,242,34,5,1,223,255,5,2,252,63,5,6,255,255,5,7,252,202,6,2,249,214,6,5,193,255,6,6,166,238,6,7,255,143,6,8,254,250,6,9,169,224,7,2,218,196,7,3,252,245,7,4,248,252,7,5,188,217,7,6,196,12,7,7,155,0,7,8,165,79,7,9,253,208,7,10,246,242,8,3,168,0,8,4,242,0,8,5,245,0,8,6,160,0,8,10,228,128,8,11,233,0],"secondary":false},{"width":8,"bonus":185,"chr":"S","pixels":[1,2,233,255,1,3,255,255,1,4,243,253,1,10,200,244,2,1,184,255,2,2,169,226,2,3,236,28,2,4,255,128,2,5,253,235,2,10,245,247,2,11,192,0,3,1,239,255,3,2,193,46,3,5,234,232,3,6,242,105,3,10,250,254,3,11,237,0,4,1,243,255,4,2,241,37,4,6,247,212,4,10,227,251,4,11,249,0,5,1,211,255,5,2,247,84,5,6,246,248,5,7,233,157,5,9,195,255,5,10,166,220,5,11,224,0,6,2,224,82,6,7,253,231,6,8,251,249,6,9,193,224,6,10,198,18,7,8,229,1,7,9,246,0,7,10,170,0],"secondary":false},{"width":9,"bonus":155,"chr":"T","pixels":[1,1,255,255,2,1,255,255,2,2,255,20,3,1,255,255,3,2,255,71,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,5,1,255,255,5,2,255,27,5,3,255,8,5,4,255,8,5,5,255,8,5,6,255,8,5,7,255,8,5,8,255,8,5,9,255,8,5,10,255,8,5,11,255,0,6,1,255,255,6,2,255,20,7,1,255,255,7,2,255,20,8,2,255,0],"secondary":false},{"width":9,"bonus":215,"chr":"U","pixels":[1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,254,255,1,9,160,247,2,2,255,12,2,3,255,12,2,4,255,12,2,5,255,12,2,6,255,12,2,7,255,18,2,8,255,65,2,9,255,215,2,10,208,165,3,10,250,226,4,10,248,252,4,11,221,0,5,10,215,249,5,11,245,0,6,9,235,255,6,11,210,0,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,252,254,7,8,225,244,7,9,168,153,7,10,236,0,8,2,255,8,8,3,255,8,8,4,255,8,8,5,255,8,8,6,255,8,8,7,255,3,8,8,252,0,8,9,216,0],"secondary":false},{"width":8,"bonus":185,"chr":"V","pixels":[0,1,209,255,1,2,247,221,1,3,254,255,1,4,200,246,2,3,222,55,2,4,254,138,2,5,248,231,2,6,251,253,2,7,180,248,3,6,232,67,3,7,252,151,3,8,247,238,3,9,244,250,3,10,161,251,4,8,203,165,4,9,253,235,4,10,254,246,4,11,158,0,5,6,219,255,5,7,251,255,5,8,199,236,5,9,177,134,5,10,234,13,5,11,245,0,6,3,208,255,6,4,255,255,6,5,211,246,6,6,185,153,6,7,222,26,6,8,252,0,6,9,184,0,7,1,253,255,7,2,225,251,7,3,189,176,7,4,215,46,7,5,255,0,7,6,203,0],"secondary":false},{"width":13,"bonus":365,"chr":"W","pixels":[0,1,179,255,1,1,155,255,1,2,244,230,1,3,255,255,1,4,234,250,1,5,163,255,2,2,155,0,2,3,224,33,2,4,254,94,2,5,245,165,2,6,243,235,2,7,255,255,2,8,221,251,3,6,159,0,3,7,229,49,3,8,254,150,3,9,253,245,3,10,255,255,4,6,203,255,4,7,253,255,4,8,217,245,4,9,205,167,4,10,246,62,4,11,255,0,5,2,160,255,5,3,233,255,5,4,241,255,5,5,190,232,5,6,178,142,5,7,209,32,5,8,253,0,5,9,208,0,6,1,255,255,6,2,246,250,6,3,211,166,6,4,234,18,6,5,241,0,6,6,173,0,7,2,254,144,7,3,253,223,7,4,252,252,7,5,191,250,8,4,226,48,8,5,252,122,8,6,239,211,8,7,254,254,8,8,220,249,9,7,207,53,9,8,254,156,9,9,253,246,9,10,255,255,10,5,157,255,10,6,221,255,10,7,255,255,10,8,220,248,10,9,213,175,10,10,248,80,10,11,255,0,11,1,153,255,11,2,217,255,11,3,255,255,11,4,233,253,11,5,196,212,11,6,193,125,11,7,225,31,11,8,255,0,11,9,214,0,12,1,181,255,12,2,198,145,12,3,224,50,12,4,255,0,12,5,231,0,12,6,163,0],"secondary":false},{"width":8,"bonus":200,"chr":"X","pixels":[0,10,159,255,1,1,233,255,1,2,218,226,1,9,233,255,1,10,184,248,1,11,159,0,2,2,247,159,2,3,253,247,2,7,183,255,2,8,227,255,2,10,234,0,2,11,179,0,3,3,176,84,3,4,253,213,3,5,231,233,3,6,240,254,3,7,156,233,3,8,186,16,3,9,227,0,4,4,184,227,4,5,252,245,4,6,252,242,4,7,246,109,5,3,235,255,5,4,168,245,5,5,170,27,5,6,245,74,5,7,253,225,5,8,224,232,6,1,187,255,6,2,225,255,6,4,235,0,6,5,162,0,6,8,241,150,6,9,253,252,6,10,171,223,7,2,191,16,7,3,225,0,7,9,165,82,7,10,254,210],"secondary":false},{"width":8,"bonus":155,"chr":"Y","pixels":[1,1,247,255,1,2,207,233,2,2,252,150,2,3,253,249,2,4,186,231,3,3,160,45,3,4,251,152,3,5,251,248,3,6,164,232,4,5,188,126,4,6,254,252,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,5,4,191,255,5,5,227,255,5,6,155,161,5,7,252,13,5,8,255,12,5,9,255,12,5,10,255,12,5,11,255,0,6,2,189,255,6,3,239,255,6,5,193,12,6,6,228,0,7,1,249,255,7,2,169,215,7,3,193,25,7,4,240,0],"secondary":false},{"width":9,"bonus":235,"chr":"Z","pixels":[1,1,255,255,1,9,153,255,1,10,255,255,2,1,255,255,2,2,255,20,2,8,223,255,2,9,223,253,2,10,255,255,2,11,255,0,3,1,255,255,3,2,255,20,3,7,251,255,3,8,166,210,3,9,226,30,3,10,255,255,3,11,255,0,4,1,255,255,4,2,255,20,4,5,217,255,4,6,219,254,4,7,170,86,4,8,251,0,4,10,255,255,4,11,255,0,5,1,255,255,5,2,255,27,5,4,251,255,5,5,169,219,5,6,219,12,5,7,218,0,5,10,255,255,5,11,255,0,6,1,255,255,6,2,254,222,6,3,226,252,6,4,166,98,6,5,251,0,6,10,255,255,6,11,255,0,7,1,255,255,7,2,255,152,7,3,224,14,7,4,223,0,7,10,255,255,7,11,255,0,8,2,255,0,8,11,255,0],"secondary":false},{"width":8,"bonus":225,"chr":"0","pixels":[1,3,239,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,237,253,2,1,161,255,2,2,211,253,2,3,185,122,2,4,241,36,2,5,255,18,2,6,255,18,2,7,255,34,2,8,255,89,2,9,251,217,2,10,209,188,3,1,243,255,3,2,180,71,3,3,209,0,3,10,253,245,3,11,154,0,4,1,231,255,4,2,246,72,4,10,239,251,4,11,243,0,5,2,253,240,5,3,172,208,5,9,241,255,5,10,163,202,5,11,235,0,6,2,162,130,6,3,250,189,6,4,242,239,6,5,251,254,6,6,252,254,6,7,237,249,6,8,213,231,6,9,183,135,6,10,242,0,7,4,185,0,7,5,227,1,7,6,250,1,7,7,252,0,7,8,232,0,7,9,193,0],"secondary":false},{"width":8,"bonus":120,"chr":"1","pixels":[2,2,213,255,3,1,167,255,3,2,193,252,3,3,222,64,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,5,2,255,12,5,3,255,12,5,4,255,12,5,5,255,12,5,6,255,12,5,7,255,12,5,8,255,12,5,9,255,12,5,10,255,12,5,11,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"2","pixels":[1,10,255,255,2,1,167,255,2,2,162,231,2,9,233,255,2,10,255,255,2,11,255,0,3,1,237,255,3,2,181,58,3,8,221,255,3,9,159,82,3,10,255,255,3,11,255,0,4,1,237,255,4,2,240,41,4,6,157,255,4,7,215,255,4,8,154,45,4,9,224,23,4,10,255,255,4,11,255,0,5,1,173,255,5,2,250,193,5,5,205,255,5,6,196,254,5,7,164,30,5,8,215,0,5,10,255,255,5,11,255,0,6,2,233,202,6,3,253,250,6,4,230,246,6,5,168,179,6,6,206,5,6,7,195,0,6,10,255,255,6,11,255,0,7,3,184,2,7,4,248,0,7,5,222,0,7,11,255,0],"secondary":false},{"width":8,"bonus":180,"chr":"3","pixels":[1,1,166,255,1,10,237,240,2,1,235,255,2,2,182,66,2,5,241,255,2,10,251,253,2,11,223,0,3,1,243,255,3,2,237,38,3,5,253,255,3,6,245,76,3,10,229,251,3,11,249,0,4,1,191,255,4,2,251,174,4,4,184,255,4,5,164,242,4,6,255,213,4,9,211,255,4,10,173,220,4,11,226,0,5,2,246,225,5,3,253,252,5,4,185,219,5,5,185,3,5,6,211,172,5,7,253,247,5,8,244,250,5,9,190,213,5,10,214,17,6,3,217,2,6,4,250,0,6,5,158,0,6,8,245,0,6,9,240,0,6,10,159,0],"secondary":false},{"width":8,"bonus":195,"chr":"4","pixels":[1,7,255,255,2,5,197,255,2,6,167,252,2,7,255,255,2,8,255,48,3,4,225,255,3,6,198,0,3,7,255,255,3,8,255,48,4,3,215,255,4,5,225,0,4,7,255,255,4,8,255,48,5,1,173,255,5,2,197,255,5,3,155,115,5,4,225,63,5,7,255,255,5,8,255,93,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,7,2,255,8,7,3,255,8,7,4,255,8,7,5,255,8,7,6,255,8,7,7,255,255,7,8,255,54,7,9,255,8,7,10,255,8,7,11,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"5","pixels":[1,1,166,255,1,2,191,255,1,3,219,255,1,4,243,255,1,10,201,243,2,1,255,255,2,2,212,157,2,3,213,104,2,4,250,230,2,5,245,52,2,10,247,250,2,11,191,0,3,1,255,255,3,2,255,20,3,4,240,248,3,5,230,45,3,10,247,253,3,11,242,0,4,1,255,255,4,2,255,20,4,4,208,255,4,5,241,102,4,10,214,249,4,11,246,0,5,1,255,255,5,2,255,20,5,5,252,240,5,6,163,167,5,9,235,255,5,11,208,0,6,2,255,6,6,5,184,176,6,6,253,241,6,7,253,253,6,8,227,244,6,9,167,154,6,10,235,0,7,7,240,4,7,8,252,0,7,9,217,0],"secondary":false},{"width":8,"bonus":205,"chr":"6","pixels":[1,3,175,255,1,4,247,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,245,254,2,2,237,255,2,4,205,118,2,5,254,197,2,6,255,51,2,7,255,24,2,8,254,82,2,9,253,223,2,10,208,182,3,1,179,255,3,3,237,0,3,4,228,230,3,6,196,0,3,10,251,233,4,1,231,255,4,2,191,52,4,4,223,255,4,5,218,73,4,10,236,250,4,11,230,0,5,1,251,255,5,2,234,28,5,5,250,222,5,9,221,255,5,10,166,220,5,11,231,0,6,2,251,10,6,5,210,178,6,6,251,235,6,7,253,253,6,8,229,246,6,9,176,182,6,10,222,7,7,7,231,1,7,8,252,0,7,9,221,0],"secondary":false},{"width":8,"bonus":160,"chr":"7","pixels":[1,1,255,255,2,1,255,255,2,2,255,20,3,1,255,255,3,2,255,20,3,8,197,255,3,9,247,255,3,10,182,233,4,1,255,255,4,2,255,20,4,6,237,255,4,7,211,253,4,8,164,171,4,9,202,23,4,10,247,0,4,11,166,0,5,1,255,255,5,2,255,108,5,3,200,249,5,4,241,255,5,5,171,230,5,6,168,82,5,7,238,0,5,8,210,0,6,1,255,255,6,2,255,199,6,3,165,153,6,4,198,15,6,5,242,0,6,6,154,0,7,2,255,0,7,3,199,0],"secondary":false},{"width":8,"bonus":265,"chr":"8","pixels":[1,2,239,255,1,3,255,255,1,4,222,247,1,7,247,255,1,8,255,255,1,9,237,251,2,1,185,255,2,2,164,219,2,3,241,22,2,4,255,149,2,5,249,222,2,6,237,253,2,8,248,24,2,9,255,151,2,10,249,196,3,1,241,255,3,2,195,42,3,5,245,241,3,6,232,113,3,7,235,0,3,10,249,248,3,11,192,0,4,1,235,255,4,2,243,45,4,5,242,255,4,6,247,177,4,10,238,252,4,11,242,0,5,1,171,255,5,2,249,183,5,4,187,255,5,5,158,243,5,6,254,236,5,7,216,162,5,9,191,255,5,10,181,232,5,11,235,0,6,2,238,217,6,3,253,251,6,4,191,222,6,5,188,7,6,6,171,77,6,7,251,213,6,8,251,251,6,9,200,229,6,10,197,29,6,11,165,0,7,3,202,1,7,4,249,0,7,5,166,0,7,8,210,1,7,9,247,0,7,10,180,0],"secondary":false},{"width":8,"bonus":230,"chr":"9","pixels":[1,2,199,255,1,3,255,255,1,4,255,255,1,5,238,252,2,1,178,255,2,2,190,243,2,3,207,47,2,4,255,24,2,5,255,135,2,6,252,232,2,10,253,255,3,1,241,255,3,2,189,53,3,3,181,0,3,6,252,253,3,7,232,24,3,10,232,252,3,11,253,0,4,1,229,255,4,2,244,72,4,6,235,255,4,7,250,6,4,9,171,255,4,10,181,232,4,11,229,0,5,2,252,235,5,5,189,255,5,7,244,113,5,8,202,254,5,9,225,255,5,10,182,45,5,11,165,0,6,2,164,141,6,3,249,202,6,4,250,253,6,5,255,255,6,6,252,247,6,7,230,226,6,8,182,181,6,9,205,25,6,10,225,0,7,4,198,0,7,5,248,3,7,6,255,0,7,7,244,0,7,8,204,0],"secondary":false},{"width":12,"bonus":290,"chr":"%","pixels":[1,2,239,255,1,3,255,255,1,4,255,255,1,5,247,253,2,1,217,255,2,2,159,178,2,3,240,24,2,4,255,18,2,5,255,71,2,6,254,251,3,1,202,255,3,2,240,162,3,6,248,252,3,7,250,6,3,10,207,255,4,2,241,203,4,3,251,249,4,4,252,254,4,5,222,242,4,6,162,128,4,7,249,94,4,8,210,253,4,11,207,0,5,3,192,0,5,4,246,1,5,5,252,63,5,6,245,205,5,7,178,205,5,9,208,0,6,4,175,255,6,5,173,255,6,7,201,24,6,8,164,75,7,3,197,255,7,5,175,0,7,6,208,133,7,7,250,255,7,8,255,255,7,9,252,254,8,1,196,255,8,4,197,0,8,6,223,255,8,8,250,12,8,9,254,82,8,10,255,237,9,2,196,0,9,6,211,255,9,7,237,117,9,10,236,245,9,11,237,0,10,7,249,222,10,8,254,254,10,9,231,247,10,10,170,120,10,11,227,0,11,8,217,1,11,9,253,0,11,10,224,0],"secondary":false},{"width":6,"bonus":150,"chr":"/","pixels":[1,10,197,255,1,11,251,255,1,12,225,254,2,6,195,255,2,7,249,255,2,8,228,254,2,9,186,222,2,10,179,138,2,11,205,40,2,12,251,0,2,13,224,0,3,2,191,255,3,3,247,255,3,4,230,255,3,5,188,224,3,6,179,143,3,7,204,45,3,8,249,0,3,9,227,0,3,10,162,0,4,0,233,255,4,1,190,227,4,2,179,148,4,3,200,50,4,4,248,0,4,5,230,0,4,6,165,0,5,0,246,0,5,1,233,0,5,2,169,0],"secondary":false},{"width":8,"bonus":110,"chr":"+","pixels":[1,6,239,255,2,6,239,255,2,7,242,34,3,6,243,255,3,7,244,85,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,5,4,255,8,5,5,255,8,5,6,254,240,5,7,255,39,5,8,255,8,5,9,255,8,5,10,255,0,6,6,240,254,6,7,242,34,7,7,240,0],"secondary":false},{"width":7,"bonus":125,"chr":"?","pixels":[1,1,167,255,2,1,227,255,2,2,183,64,2,7,167,255,3,1,243,255,3,2,231,38,3,6,211,255,3,7,158,131,3,8,168,0,3,9,223,255,3,10,240,239,4,1,189,255,4,2,251,174,4,5,227,255,4,7,211,0,4,10,224,5,4,11,225,0,5,2,243,220,5,3,254,254,5,4,214,238,5,5,156,62,5,6,227,0,6,3,209,4,6,4,253,0,6,5,200,0],"secondary":false},{"width":6,"bonus":105,"chr":"!","pixels":[2,9,199,255,2,10,201,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,9,153,255,3,10,233,169,3,11,201,0,4,2,255,12,4,3,255,12,4,4,255,12,4,5,255,12,4,6,255,12,4,7,255,12,4,8,255,0,4,10,153,0,4,11,154,0],"secondary":false},{"width":13,"bonus":430,"chr":"@","pixels":[1,4,179,255,1,5,251,255,1,6,255,255,1,7,255,255,1,8,252,254,1,9,179,249,2,3,247,255,2,4,175,227,2,5,198,80,2,6,252,23,2,7,255,21,2,8,255,71,2,9,253,193,2,10,246,236,3,2,243,255,3,4,247,0,3,5,167,43,3,10,238,201,3,11,244,158,4,2,174,235,4,3,244,22,4,4,209,229,4,5,255,255,4,6,255,255,4,7,248,254,4,11,250,240,5,1,215,255,5,2,172,98,5,3,223,194,5,4,190,247,5,5,199,54,5,6,255,15,5,7,255,91,5,8,254,251,5,11,252,254,5,12,236,21,6,1,243,255,6,2,221,35,6,3,246,253,6,4,183,53,6,5,184,0,6,8,250,253,6,9,250,17,6,11,246,254,6,12,252,24,7,1,237,255,7,2,245,39,7,3,239,254,7,4,247,91,7,7,161,255,7,9,248,0,7,11,251,255,7,12,246,3,8,1,195,255,8,2,245,104,8,3,197,243,8,4,255,255,8,5,255,255,8,6,255,255,8,7,245,252,8,8,203,144,8,11,198,251,8,12,252,0,9,2,247,231,9,4,190,11,9,5,255,8,9,6,255,8,9,7,255,39,9,8,254,252,9,12,195,0,10,2,208,220,10,3,251,227,10,7,160,250,10,8,226,250,10,9,252,3,11,3,214,138,11,4,250,219,11,5,253,253,11,6,246,253,11,7,197,225,11,8,170,52,11,9,222,0,12,5,215,2,12,6,251,0,12,7,244,0,12,8,174,0],"secondary":false},{"width":9,"bonus":245,"chr":"#","pixels":[1,4,239,255,1,7,239,255,2,4,241,255,2,5,244,75,2,7,249,255,2,8,252,224,2,9,244,254,2,10,210,254,3,2,187,255,3,3,235,255,3,4,253,255,3,5,251,180,3,6,163,198,3,7,250,250,3,8,250,65,3,9,222,3,3,10,243,0,3,11,209,0,4,3,193,26,4,4,253,241,4,5,254,0,4,6,177,0,4,7,247,247,4,8,247,33,5,4,242,255,5,5,245,95,5,7,249,255,5,8,254,238,5,9,232,252,5,10,192,249,6,2,199,255,6,3,239,255,6,4,252,254,6,5,250,160,6,6,160,170,6,7,250,250,6,8,251,45,6,9,237,0,6,10,229,0,6,11,188,0,7,3,201,8,7,4,254,240,7,5,252,0,7,6,157,0,7,7,246,248,7,8,246,33,8,4,159,252,8,5,240,0,8,8,240,5],"secondary":false},{"width":8,"bonus":245,"chr":"$","pixels":[1,2,235,255,1,3,255,255,1,4,246,253,1,9,240,253,2,1,179,255,2,2,195,238,2,3,242,85,2,4,255,169,2,5,253,234,2,9,252,254,2,10,243,76,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,4,1,255,179,4,2,255,86,4,3,255,8,4,4,255,8,4,5,255,172,4,6,255,149,4,7,255,8,4,8,255,33,4,9,255,243,4,10,255,10,4,11,255,8,4,12,255,0,5,2,216,149,5,6,250,247,5,7,182,114,5,8,164,251,5,9,182,240,5,10,243,0,6,2,192,140,6,6,175,211,6,7,255,251,6,8,219,236,6,9,172,45,6,10,171,0,7,8,251,0,7,9,202,0],"secondary":false},{"width":8,"bonus":100,"chr":"^","pixels":[1,5,219,255,1,6,191,254,2,3,221,255,2,4,171,252,2,6,219,0,2,7,190,0,3,1,227,255,3,4,222,0,3,5,169,0,4,1,203,230,4,2,249,211,4,3,187,127,5,2,197,62,5,3,238,179,5,4,236,243,6,4,179,49,6,5,243,158,6,6,244,246,7,6,161,38,7,7,235,0],"secondary":false},{"width":8,"bonus":55,"chr":"~","pixels":[1,6,159,255,2,5,225,255,2,7,159,0,3,5,191,255,3,6,239,122,4,6,250,240,5,6,251,254,5,7,236,21,6,6,169,255,6,7,250,0,7,7,169,0],"secondary":false},{"width":11,"bonus":280,"chr":"&","pixels":[1,7,249,255,1,8,255,255,1,9,232,250,2,2,251,255,2,3,255,255,2,4,200,244,2,6,239,255,2,8,249,28,2,9,255,173,2,10,247,188,3,1,217,255,3,2,159,171,3,3,252,35,3,4,255,172,3,5,255,255,3,7,239,0,3,10,249,243,3,11,182,0,4,1,247,255,4,2,221,33,4,5,255,255,4,6,254,201,4,10,249,254,4,11,238,0,5,1,211,255,5,2,251,147,5,4,227,255,5,6,255,205,5,7,239,190,5,10,217,248,5,11,248,0,6,2,251,235,6,3,249,247,6,4,154,180,6,5,227,0,6,7,248,226,6,8,225,176,6,9,207,255,6,10,164,185,6,11,211,0,7,3,231,1,7,4,241,0,7,8,254,251,7,9,245,239,7,10,208,9,8,7,213,255,8,8,213,245,8,9,255,235,8,10,243,151,9,6,202,255,9,7,173,158,9,8,215,5,9,9,213,54,9,10,253,235,10,7,202,0,10,11,234,0],"secondary":false},{"width":9,"bonus":125,"chr":"*","pixels":[1,2,187,255,2,3,223,154,2,5,190,255,3,3,235,225,3,4,245,243,3,5,178,242,3,6,202,61,4,0,241,255,4,1,228,239,4,2,217,241,4,3,255,255,4,4,237,173,4,5,235,25,4,6,169,0,5,1,241,0,5,2,231,117,5,3,236,175,5,4,255,167,5,5,252,250,6,2,179,255,6,3,180,180,6,4,162,0,6,5,199,120,6,6,248,25,7,3,197,82],"secondary":false},{"width":5,"bonus":135,"chr":"(","pixels":[1,1,153,255,1,2,219,255,1,3,253,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,239,254,1,9,185,255,2,0,247,255,2,1,193,232,2,2,196,142,2,3,226,65,2,4,254,31,2,5,255,16,2,6,255,24,2,7,255,43,2,8,255,86,2,9,248,144,2,10,246,229,2,11,244,248,3,0,188,20,3,1,248,0,3,2,176,0,3,11,229,70,3,12,251,196,4,13,193,0],"secondary":false},{"width":5,"bonus":135,"chr":")","pixels":[1,12,227,255,2,0,252,250,2,1,229,247,2,2,155,255,2,9,181,255,2,10,249,255,2,11,212,252,2,13,228,0,3,1,250,100,3,2,244,174,3,3,240,231,3,4,250,252,3,5,255,255,3,6,254,255,3,7,243,251,3,8,217,232,3,9,199,183,3,10,198,74,3,11,249,0,3,12,210,0,4,3,166,0,4,4,218,0,4,5,247,6,4,6,255,2,4,7,254,0,4,8,239,0,4,9,198,0],"secondary":false},{"width":6,"bonus":55,"chr":"_","pixels":[0,12,243,255,1,12,243,255,1,13,245,33,2,12,243,255,2,13,245,33,3,12,243,255,3,13,245,33,4,12,243,255,4,13,245,33,5,12,243,255,5,13,245,33],"secondary":false},{"width":5,"bonus":30,"chr":"-","pixels":[1,6,243,255,2,6,243,255,2,7,245,33,3,6,243,255,3,7,245,33,4,7,244,0],"secondary":true},{"width":8,"bonus":120,"chr":"=","pixels":[1,4,239,255,1,7,243,255,2,4,239,255,2,5,242,34,2,7,243,255,2,8,245,33,3,4,239,255,3,5,242,34,3,7,243,255,3,8,245,33,4,4,239,255,4,5,242,34,4,7,243,255,4,8,245,33,5,4,239,255,5,5,242,34,5,7,243,255,5,8,245,33,6,4,239,255,6,5,242,34,6,7,243,255,6,8,245,33,7,5,240,0,7,8,244,0],"secondary":false},{"width":5,"bonus":145,"chr":"[","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,0,255,12,3,1,255,12,3,2,255,12,3,3,255,12,3,4,255,12,3,5,255,12,3,6,255,12,3,7,255,12,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,12,3,12,254,245,3,13,255,32,4,12,157,248,4,13,245,21],"secondary":false},{"width":6,"bonus":155,"chr":"]","pixels":[1,12,193,255,2,12,245,255,2,13,202,40,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,247,33,4,0,255,12,4,1,255,12,4,2,255,12,4,3,255,12,4,4,255,12,4,5,255,12,4,6,255,12,4,7,255,12,4,8,255,12,4,9,255,12,4,10,255,12,4,11,255,12,4,12,255,12,4,13,255,1],"secondary":false},{"width":5,"bonus":135,"chr":"{","pixels":[0,5,179,255,1,5,223,255,1,6,227,183,2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,230,247,2,6,247,201,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,3,0,252,13,3,1,255,12,3,2,255,12,3,3,255,10,3,4,255,0,3,5,223,0,3,7,197,10,3,8,255,12,3,9,255,12,3,10,255,12,3,11,255,56,3,12,255,249,4,13,249,7],"secondary":false},{"width":5,"bonus":145,"chr":"}","pixels":[1,12,247,255,2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,249,253,2,6,227,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,246,252,2,12,162,171,2,13,247,0,3,0,233,12,3,1,255,12,3,2,255,12,3,3,255,14,3,4,255,93,3,5,254,237,3,6,170,206,3,7,228,19,3,8,255,12,3,9,255,12,3,10,255,11,3,11,255,1,3,12,243,0,4,5,215,229,4,6,238,35],"secondary":false},{"width":4,"bonus":70,"chr":":","pixels":[1,3,161,255,1,4,161,255,1,9,161,255,1,10,161,255,2,3,193,255,2,4,231,211,2,5,161,0,2,9,191,255,2,10,232,212,2,11,162,0,3,4,193,0,3,5,192,0,3,10,192,0,3,11,193,0],"secondary":true},{"width":4,"bonus":85,"chr":";","pixels":[1,3,161,255,1,4,161,255,1,9,193,255,1,10,233,255,1,11,253,255,1,12,196,248,2,3,193,255,2,4,231,211,2,5,161,0,2,9,171,255,2,10,218,122,2,11,235,28,2,12,253,0,2,13,190,0,3,4,193,0,3,5,192,0,3,10,171,0],"secondary":true},{"width":7,"bonus":60,"chr":"\\"","pixels":[2,1,255,255,2,2,251,253,2,3,229,247,3,2,255,1,3,3,249,0,3,4,222,0,4,1,221,255,4,2,197,248,4,3,163,255,5,2,236,122,5,3,212,100,5,4,163,0],"secondary":true},{"width":5,"bonus":30,"chr":"\'","pixels":[2,1,255,255,2,2,251,253,2,3,229,247,3,2,255,1,3,3,249,0,3,4,222,0],"secondary":true},{"width":8,"bonus":100,"chr":"<","pixels":[1,6,245,255,2,5,173,255,2,6,210,244,2,7,251,141,3,5,209,255,3,6,182,34,3,7,250,238,4,4,189,255,4,6,210,0,4,7,165,240,4,8,244,128,5,4,208,255,5,5,189,2,5,8,246,240,6,3,203,255,6,5,208,0,6,8,197,240,6,9,241,111,7,4,203,1,7,9,211,117],"secondary":false},{"width":8,"bonus":100,"chr":">","pixels":[1,3,237,255,1,9,163,255,2,4,248,150,2,8,233,255,2,10,164,0,3,4,244,241,3,5,157,44,3,8,184,252,3,9,233,0,4,5,245,154,4,7,213,255,4,9,182,0,5,5,238,240,5,6,189,134,5,7,199,255,5,8,213,0,6,6,254,252,6,8,199,0,7,6,176,171,7,7,252,1],"secondary":false},{"width":6,"bonus":120,"chr":"\\\\","pixels":[1,0,233,251,1,1,166,255,2,0,248,63,2,1,242,133,2,2,233,209,2,3,250,253,2,4,231,251,2,5,161,255,3,3,193,10,3,4,250,68,3,5,241,139,3,6,234,214,3,7,251,254,3,8,227,251,3,9,159,255,4,7,198,14,4,8,251,71,4,9,240,143,4,10,234,218,4,11,252,254,4,12,223,251,5,11,202,17,5,12,252,76,5,13,220,0],"secondary":false},{"width":4,"bonus":20,"chr":".","pixels":[1,9,211,255,1,10,211,255,2,10,235,156,2,11,212,0],"secondary":true},{"width":4,"bonus":35,"chr":",","pixels":[1,9,243,255,1,10,255,255,1,11,232,252,1,12,174,209,2,10,246,58,2,11,255,2,2,12,229,0],"secondary":true},{"width":7,"bonus":135,"chr":"|","pixels":[3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,4,0,255,12,4,1,255,12,4,2,255,12,4,3,255,12,4,4,255,12,4,5,255,12,4,6,255,12,4,7,255,12,4,8,255,12,4,9,255,12,4,10,255,12,4,11,255,12,4,12,255,12,4,13,255,0],"secondary":false}],"width":13,"spacewidth":4,"shadow":true,"height":15,"basey":10}');

/***/ }),

/***/ "./src/fonts/chatbox/16pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/16pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":9,"bonus":265,"chr":"a","pixels":[1,8,215,255,1,9,255,255,1,10,255,255,1,11,240,250,2,5,153,238,2,8,235,253,2,9,228,88,2,10,254,52,2,11,254,192,2,12,251,207,3,4,211,255,3,5,178,126,3,7,217,255,3,8,196,149,3,9,233,0,3,12,253,249,3,13,203,0,4,4,243,255,4,5,221,69,4,7,247,255,4,8,228,74,4,12,237,249,4,13,247,0,5,4,233,255,5,5,247,79,5,7,255,255,5,8,249,49,5,11,167,255,5,12,178,210,5,13,232,0,6,4,173,255,6,5,250,210,6,7,255,255,6,8,255,113,6,10,178,255,6,11,213,255,6,12,175,29,7,5,239,216,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,253,8,6,204,16,8,7,255,32,8,8,255,32,8,9,255,32,8,10,255,32,8,11,255,32,8,12,255,32,8,13,253,0],"secondary":false},{"width":10,"bonus":275,"chr":"b","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,229,242,3,2,255,36,3,3,255,35,3,4,254,70,3,5,254,225,3,6,255,108,3,7,255,50,3,8,255,39,3,9,254,58,3,10,254,120,3,11,255,225,3,12,255,48,3,13,218,0,4,4,203,245,4,6,224,0,4,11,178,158,4,12,248,203,5,4,247,255,5,5,209,78,5,12,251,252,5,13,197,0,6,4,227,255,6,5,251,137,6,12,234,248,6,13,248,0,7,5,254,255,7,6,215,203,7,10,175,255,7,11,255,255,7,12,191,158,7,13,228,0,8,5,169,143,8,6,254,210,8,7,254,252,8,8,255,255,8,9,253,253,8,10,228,234,8,11,204,117,8,12,255,0,9,7,211,5,9,8,252,24,9,9,255,4,9,10,252,0,9,11,210,0],"secondary":false},{"width":7,"bonus":145,"chr":"c","pixels":[1,6,243,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,245,253,2,5,251,255,2,6,196,178,2,7,247,64,2,8,255,42,2,9,255,62,2,10,255,136,2,11,254,251,2,12,189,168,3,4,217,255,3,5,184,176,3,6,251,0,3,11,193,162,3,12,254,224,4,4,249,255,4,5,227,71,4,12,252,253,4,13,223,0,5,4,231,255,5,5,251,90,5,12,235,249,5,13,250,0,6,5,237,81,6,12,163,183,6,13,229,0],"secondary":false},{"width":9,"bonus":290,"chr":"d","pixels":[1,6,243,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,249,253,1,11,154,246,2,5,250,255,2,6,202,172,2,7,247,64,2,8,255,42,2,9,255,60,2,10,255,130,2,11,255,247,2,12,212,184,3,4,235,255,3,5,196,151,3,6,250,0,3,11,184,154,3,12,254,240,3,13,153,0,4,4,243,255,4,5,241,70,4,12,248,251,4,13,239,0,5,4,172,255,5,5,250,140,5,12,193,228,5,13,244,0,6,5,248,242,6,6,211,195,6,10,158,255,6,11,231,255,6,12,153,85,6,13,172,0,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,8,2,255,32,8,3,255,32,8,4,255,32,8,5,255,32,8,6,255,32,8,7,255,32,8,8,255,32,8,9,255,32,8,10,255,32,8,11,255,32,8,12,255,32,8,13,255,0],"secondary":false},{"width":9,"bonus":235,"chr":"e","pixels":[1,6,239,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,244,252,2,5,251,255,2,6,195,191,2,7,243,68,2,8,255,255,2,9,255,90,2,10,255,118,2,11,255,247,2,12,164,143,3,4,217,255,3,5,182,182,3,6,252,0,3,8,255,255,3,9,255,48,3,11,188,178,3,12,253,207,4,4,249,255,4,5,226,72,4,8,255,255,4,9,255,48,4,12,251,252,4,13,205,0,5,4,219,255,5,5,252,126,5,8,255,255,5,9,255,48,5,12,246,252,5,13,248,0,6,5,254,252,6,6,203,194,6,8,255,255,6,9,255,48,6,12,220,243,6,13,243,0,7,6,254,212,7,7,254,254,7,8,255,255,7,9,255,48,7,12,162,168,7,13,210,0,8,7,212,9,8,8,253,30,8,9,255,6],"secondary":false},{"width":6,"bonus":170,"chr":"f","pixels":[1,4,239,255,1,5,189,155,2,2,251,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,221,255,3,2,194,206,3,3,253,42,3,4,255,255,3,5,255,80,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,1,247,255,4,2,229,68,4,3,157,0,4,4,255,255,4,5,254,52,5,1,207,255,5,2,249,65,5,5,255,9],"secondary":false},{"width":9,"bonus":315,"chr":"g","pixels":[1,6,241,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,247,253,2,5,249,255,2,6,198,173,2,7,245,63,2,8,255,42,2,9,255,60,2,10,255,130,2,11,255,247,2,12,211,184,2,16,229,224,3,4,235,255,3,5,193,149,3,6,249,0,3,11,184,153,3,12,254,240,3,16,246,246,4,4,243,255,4,5,241,70,4,12,248,251,4,13,239,0,4,16,252,254,5,4,167,255,5,5,249,142,5,12,189,226,5,13,244,0,5,16,232,247,6,5,247,241,6,6,218,202,6,10,158,255,6,11,233,255,6,12,177,140,6,13,200,117,6,14,155,255,6,15,253,255,6,16,197,174,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,7,13,255,255,7,14,244,248,7,15,206,160,7,16,253,6,8,5,255,32,8,6,255,32,8,7,255,32,8,8,255,32,8,9,255,32,8,10,255,32,8,11,255,32,8,12,255,32,8,13,255,18,8,14,255,0,8,15,238,0],"secondary":false},{"width":10,"bonus":250,"chr":"h","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,65,3,5,255,225,3,6,255,129,3,7,255,60,3,8,255,38,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,4,190,241,4,5,158,201,4,6,225,0,5,4,243,255,5,5,198,82,6,4,233,255,6,5,248,93,7,4,173,255,7,5,253,234,7,6,165,177,8,5,234,208,8,6,254,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,9,6,192,10,9,7,254,30,9,8,255,32,9,9,255,32,9,10,255,32,9,11,255,32,9,12,255,32,9,13,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"i","pixels":[2,1,225,255,2,2,199,237,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,226,5,3,3,185,0,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0],"secondary":false},{"width":5,"bonus":160,"chr":"j","pixels":[0,16,241,253,1,15,175,255,1,16,234,248,2,1,225,255,2,2,199,237,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,243,249,2,16,201,108,3,2,226,5,3,3,185,0,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,36,3,14,255,28,3,15,255,3,3,16,238,0],"secondary":false},{"width":9,"bonus":220,"chr":"k","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,254,82,3,8,255,235,3,9,255,104,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,7,247,253,4,8,250,252,4,9,242,102,5,6,249,255,5,8,251,143,5,9,254,255,5,10,204,215,6,5,245,255,6,7,249,0,6,9,171,104,6,10,255,231,6,11,246,236,7,4,237,255,7,5,164,90,7,6,246,0,7,11,248,186,7,12,254,255,8,5,238,0,8,12,213,133,8,13,254,0],"secondary":false},{"width":5,"bonus":120,"chr":"l","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0],"secondary":false},{"width":14,"bonus":315,"chr":"m","pixels":[2,4,239,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,5,252,216,3,6,255,108,3,7,255,54,3,8,255,37,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,4,203,255,4,6,214,0,5,4,247,255,5,5,219,84,6,4,205,255,6,5,253,221,7,5,248,228,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,8,5,226,247,8,6,234,106,8,7,254,46,8,8,255,32,8,9,255,32,8,10,255,32,8,11,255,32,8,12,255,32,8,13,255,0,9,4,211,255,9,6,219,0,10,4,245,255,10,5,223,83,11,4,199,255,11,5,253,221,12,5,244,215,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,13,6,208,12,13,7,255,31,13,8,255,32,13,9,255,32,13,10,255,32,13,11,255,32,13,12,255,32,13,13,255,0],"secondary":false},{"width":10,"bonus":215,"chr":"n","pixels":[2,4,239,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,5,253,225,3,6,255,127,3,7,255,59,3,8,255,38,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,4,175,255,4,6,223,0,5,4,243,255,5,5,195,83,6,4,235,255,6,5,247,94,7,4,173,255,7,5,253,234,7,6,165,177,8,5,233,206,8,6,255,253,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,9,6,189,10,9,7,253,30,9,8,255,32,9,9,255,32,9,10,255,32,9,11,255,32,9,12,255,32,9,13,255,0],"secondary":false},{"width":9,"bonus":220,"chr":"o","pixels":[1,6,241,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,244,253,2,5,247,255,2,6,190,173,2,7,244,63,2,8,255,42,2,9,255,61,2,10,255,133,2,11,255,249,2,12,180,159,3,4,225,255,3,5,183,160,3,6,247,0,3,11,189,157,3,12,254,222,4,4,249,255,4,5,233,72,4,12,252,252,4,13,221,0,5,4,211,255,5,5,253,143,5,12,222,243,5,13,249,0,6,5,254,255,6,6,220,205,6,10,179,255,6,11,255,255,6,12,180,124,6,13,212,0,7,6,255,199,7,7,253,252,7,8,255,255,7,9,251,254,7,10,223,230,7,11,201,92,7,12,255,0,8,7,199,4,8,8,250,23,8,9,255,3,8,10,250,0,8,11,201,0],"secondary":false},{"width":10,"bonus":280,"chr":"p","pixels":[2,4,241,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,5,253,221,3,6,255,112,3,7,255,53,3,8,255,39,3,9,255,59,3,10,255,123,3,11,255,229,3,12,255,71,3,13,255,35,3,14,255,36,3,15,255,36,3,16,255,36,4,4,191,255,4,6,219,0,4,11,180,158,4,12,249,200,5,4,247,255,5,5,208,80,5,12,251,252,5,13,195,0,6,4,227,255,6,5,251,146,6,12,234,248,6,13,248,0,7,5,255,255,7,6,223,207,7,10,187,255,7,11,255,255,7,12,196,152,7,13,228,0,8,5,168,142,8,6,255,211,8,7,254,252,8,8,255,255,8,9,253,253,8,10,229,233,8,11,211,110,8,12,255,0,9,7,212,5,9,8,252,24,9,9,255,4,9,10,252,0,9,11,209,0],"secondary":false},{"width":9,"bonus":295,"chr":"q","pixels":[1,6,243,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,249,253,1,11,155,245,2,5,250,255,2,6,202,172,2,7,247,64,2,8,255,42,2,9,255,59,2,10,255,128,2,11,255,247,2,12,213,185,3,4,235,255,3,5,195,150,3,6,250,0,3,11,183,155,3,12,254,240,3,13,154,0,4,4,243,255,4,5,240,69,4,12,248,251,4,13,240,0,5,4,171,255,5,5,250,139,5,12,190,228,5,13,244,0,6,5,246,238,6,6,211,195,6,10,154,255,6,11,229,255,6,12,174,141,6,13,197,104,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,7,13,255,255,7,14,255,255,7,15,255,255,7,16,255,255,8,5,255,32,8,6,255,32,8,7,255,32,8,8,255,32,8,9,255,32,8,10,255,32,8,11,255,32,8,12,255,32,8,13,255,32,8,14,255,32,8,15,255,32,8,16,255,32],"secondary":false},{"width":7,"bonus":130,"chr":"r","pixels":[2,4,235,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,5,251,200,3,6,255,154,3,7,255,59,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,4,169,255,4,5,154,243,4,6,196,0,4,7,154,0,5,4,245,255,5,5,190,83,6,4,165,255,6,5,246,44],"secondary":false},{"width":8,"bonus":205,"chr":"s","pixels":[1,5,249,255,1,6,255,255,1,7,223,244,1,11,154,255,1,12,200,231,2,4,195,255,2,5,188,222,2,6,250,64,2,7,254,237,2,8,232,126,2,12,245,241,2,13,181,0,3,4,239,255,3,5,209,78,3,6,164,0,3,7,155,203,3,8,252,220,3,12,251,253,3,13,232,0,4,4,243,255,4,5,244,71,4,8,253,253,4,9,228,81,4,12,235,249,4,13,249,0,5,4,211,255,5,5,249,119,5,8,175,242,5,9,254,222,5,11,209,255,5,12,192,216,5,13,229,0,6,5,230,119,6,9,241,228,6,10,255,255,6,11,227,237,6,12,215,36,6,13,163,0,7,10,218,19,7,11,255,0,7,12,211,0],"secondary":false},{"width":6,"bonus":150,"chr":"t","pixels":[1,4,241,255,1,5,161,182,2,2,221,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,252,254,3,3,227,41,3,4,255,255,3,5,255,80,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,45,3,11,255,167,3,12,254,226,4,4,255,255,4,5,254,52,4,12,252,251,4,13,225,0,5,4,175,255,5,5,255,35,5,12,182,228,5,13,248,0],"secondary":false},{"width":10,"bonus":220,"chr":"u","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,235,249,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,37,3,10,255,69,3,11,255,209,3,12,249,198,4,12,252,245,4,13,193,0,5,12,244,250,5,13,242,0,6,12,189,223,6,13,239,0,7,10,173,255,7,11,235,255,7,12,170,81,7,13,165,0,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,9,5,255,32,9,6,255,32,9,7,255,32,9,8,255,32,9,9,255,32,9,10,255,32,9,11,255,32,9,12,255,32,9,13,255,0],"secondary":false},{"width":8,"bonus":190,"chr":"v","pixels":[0,4,209,255,1,4,175,255,1,5,253,250,1,6,254,254,1,7,196,246,2,5,179,20,2,6,250,96,2,7,254,182,2,8,253,252,2,9,249,251,2,10,171,249,3,8,186,25,3,9,252,99,3,10,252,182,3,11,251,247,3,12,239,249,4,10,189,200,4,11,246,234,4,12,254,251,4,13,233,0,5,8,233,255,5,9,255,255,5,10,212,238,5,11,193,140,5,12,228,21,5,13,250,0,6,5,227,255,6,6,255,255,6,7,228,245,6,8,202,160,6,9,236,38,6,10,255,0,6,11,198,0,7,4,235,255,7,5,207,184,7,6,233,61,7,7,255,0,7,8,219,0],"secondary":false},{"width":13,"bonus":365,"chr":"w","pixels":[0,4,175,255,1,4,193,255,1,5,252,251,1,6,255,255,1,7,234,250,1,8,163,255,2,5,196,10,2,6,249,65,2,7,254,126,2,8,248,194,2,9,251,249,2,10,255,255,2,11,224,250,2,12,153,255,3,9,197,39,3,10,250,142,3,11,254,237,3,12,255,255,3,13,153,0,4,8,209,255,4,9,255,255,4,10,230,252,4,11,207,184,4,12,241,75,4,13,255,0,5,4,155,255,5,5,229,255,5,6,253,255,5,7,214,241,5,8,193,170,5,9,218,58,5,10,255,0,5,11,227,0,6,4,255,255,6,5,247,243,6,6,243,139,6,7,253,55,6,8,202,2,7,5,255,131,7,6,251,208,7,7,254,255,7,8,240,250,7,9,164,254,8,7,209,31,8,8,255,98,8,9,248,175,8,10,248,242,8,11,253,253,8,12,201,250,9,9,161,163,9,10,223,185,9,11,253,240,9,12,255,255,9,13,197,0,10,6,169,255,10,7,231,255,10,8,255,255,10,9,240,253,10,10,206,214,10,11,200,134,10,12,240,40,10,13,255,0,11,4,255,255,11,5,249,254,11,6,216,223,11,7,210,147,11,8,236,57,11,9,255,2,11,10,238,0,11,11,173,0,12,5,255,9,12,6,248,0,12,7,189,0],"secondary":false},{"width":8,"bonus":195,"chr":"x","pixels":[1,4,253,255,1,5,169,216,1,11,177,255,1,12,253,255,2,5,254,237,2,6,238,233,2,10,235,255,2,11,217,251,2,12,193,72,2,13,253,0,3,6,248,175,3,7,255,253,3,8,212,240,3,9,251,255,3,10,176,195,3,11,236,8,3,12,214,0,4,7,246,238,4,8,255,255,4,9,243,211,4,10,252,26,5,6,251,255,5,7,187,233,5,8,236,65,5,9,255,202,5,10,251,243,6,4,217,255,6,5,236,254,6,6,176,125,6,7,251,0,6,8,171,0,6,10,228,139,6,11,254,251,6,12,216,225,7,4,173,255,7,5,221,26,7,6,235,0,7,12,254,210,7,13,190,0],"secondary":false},{"width":8,"bonus":250,"chr":"y","pixels":[0,4,241,255,0,5,157,249,0,16,235,255,1,5,253,225,1,6,255,255,1,7,221,245,1,16,244,252,2,6,232,68,2,7,255,155,2,8,252,242,2,9,252,253,2,10,182,245,2,15,229,255,2,16,192,215,3,8,157,12,3,9,244,84,3,10,252,164,3,11,248,240,3,12,237,247,3,13,227,255,3,14,254,255,3,15,191,219,3,16,230,13,4,10,207,227,4,11,252,251,4,12,252,230,4,13,243,144,4,14,231,43,4,15,254,0,4,16,164,0,5,7,189,255,5,8,251,255,5,9,243,254,5,10,198,205,5,11,203,83,5,12,248,2,5,13,228,0,6,4,184,255,6,5,251,255,6,6,251,255,6,7,209,219,6,8,211,106,6,9,252,9,6,10,242,0,6,11,159,0,7,4,201,255,7,5,214,130,7,6,251,21,7,7,251,0,7,8,180,0],"secondary":false},{"width":8,"bonus":205,"chr":"z","pixels":[1,4,255,255,1,11,177,255,1,12,255,255,2,4,255,255,2,5,254,52,2,10,239,255,2,11,192,246,2,12,255,255,2,13,255,0,3,4,255,255,3,5,254,52,3,8,185,255,3,9,229,255,3,11,241,55,3,12,255,255,3,13,255,0,4,4,255,255,4,5,255,53,4,7,243,255,4,8,181,241,4,9,191,26,4,10,230,0,4,12,255,255,4,13,255,0,5,4,255,255,5,5,254,221,5,6,244,252,5,7,162,147,5,8,244,0,5,9,171,0,5,12,255,255,5,13,255,0,6,4,255,255,6,5,254,192,6,6,224,36,6,7,241,0,6,12,255,255,6,13,255,0,7,5,255,0,7,6,192,0,7,13,255,0],"secondary":false},{"width":10,"bonus":275,"chr":"A","pixels":[0,12,208,255,1,9,179,255,1,10,251,255,1,11,244,254,1,12,203,203,1,13,208,0,2,7,237,255,2,8,255,255,2,9,213,231,2,10,206,112,2,11,251,11,2,12,243,0,2,13,162,0,3,4,213,255,3,5,255,255,3,6,217,243,3,7,202,160,3,8,255,255,3,9,254,64,3,10,193,0,4,1,184,255,4,2,251,255,4,3,214,250,4,4,190,178,4,5,220,50,4,6,255,0,4,7,210,20,4,8,255,255,4,9,254,64,5,1,235,255,5,2,251,245,5,3,254,158,5,4,223,85,5,8,255,255,5,9,254,64,6,2,242,85,6,3,250,179,6,4,253,252,6,5,241,249,6,8,255,255,6,9,254,64,7,4,182,29,7,5,252,111,7,6,251,208,7,7,255,255,7,8,255,255,7,9,255,163,8,7,214,52,8,8,255,139,8,9,255,231,8,10,255,255,8,11,220,246,9,10,238,78,9,11,254,168,9,12,254,248],"secondary":false},{"width":10,"bonus":345,"chr":"B","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,255,3,7,255,77,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,80,3,12,255,255,3,13,255,0,4,1,255,255,4,2,254,52,4,6,255,255,4,7,255,48,4,12,255,255,4,13,255,0,5,1,247,255,5,2,254,64,5,6,255,255,5,7,255,60,5,12,250,254,5,13,255,0,6,1,221,255,6,2,251,114,6,6,255,255,6,7,255,119,6,12,224,245,6,13,249,0,7,2,252,241,7,3,174,163,7,5,211,255,7,6,165,220,7,7,254,246,7,8,188,175,7,11,247,255,7,12,184,164,7,13,215,0,8,2,227,211,8,3,254,255,8,4,254,254,8,5,192,203,8,6,212,1,8,7,196,160,8,8,255,245,8,9,255,255,8,10,247,252,8,11,200,171,8,12,248,4,9,3,191,18,9,4,254,10,9,5,253,0,9,9,246,23,9,10,255,1,9,11,244,0],"secondary":false},{"width":10,"bonus":215,"chr":"C","pixels":[1,4,229,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,244,253,2,2,178,255,2,3,251,255,2,4,202,195,2,5,236,82,2,6,255,43,2,7,255,42,2,8,255,72,2,9,255,145,2,10,255,247,2,11,235,227,3,2,245,255,3,3,195,77,3,4,251,0,3,5,154,0,3,10,164,71,3,11,254,240,3,12,233,145,4,1,197,255,4,2,179,187,4,3,245,0,4,12,253,219,5,1,239,255,5,2,212,78,5,12,251,252,5,13,217,0,6,1,243,255,6,2,243,71,6,12,248,252,6,13,248,0,7,1,217,255,7,2,249,122,7,12,227,245,7,13,246,0,8,2,240,163,8,12,168,174,8,13,218,0,9,3,153,0],"secondary":false},{"width":12,"bonus":345,"chr":"D","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,80,3,12,255,255,3,13,255,0,4,1,255,255,4,2,254,52,4,12,255,255,4,13,255,0,5,1,251,255,5,2,255,59,5,12,249,253,5,13,255,0,6,1,229,255,6,2,252,92,6,12,228,246,6,13,247,0,7,1,171,255,7,2,246,182,7,11,197,255,7,12,197,203,7,13,220,0,8,2,254,255,8,3,210,132,8,11,251,255,8,12,208,59,8,13,157,0,9,2,156,204,9,3,255,255,9,4,221,228,9,9,209,255,9,10,253,255,9,11,184,147,9,12,252,0,10,3,163,116,10,4,255,191,10,5,254,250,10,6,255,255,10,7,255,255,10,8,247,251,10,9,216,212,10,10,221,69,10,11,253,0,11,5,192,6,11,6,250,25,11,7,255,20,11,8,255,2,11,9,243,0,11,10,179,0],"secondary":false},{"width":9,"bonus":260,"chr":"E","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,255,3,7,255,77,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,80,3,12,255,255,3,13,255,0,4,1,255,255,4,2,254,52,4,6,255,255,4,7,255,48,4,12,255,255,4,13,255,0,5,1,255,255,5,2,254,52,5,6,255,255,5,7,255,48,5,12,255,255,5,13,255,0,6,1,255,255,6,2,254,52,6,6,255,255,6,7,255,48,6,12,255,255,6,13,255,0,7,1,255,255,7,2,254,52,7,6,203,255,7,7,255,38,7,12,255,255,7,13,255,0,8,2,255,4,8,7,204,0,8,13,255,0],"secondary":false},{"width":8,"bonus":205,"chr":"F","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,255,3,8,255,77,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,1,255,255,4,2,254,52,4,7,255,255,4,8,255,48,5,1,255,255,5,2,254,52,5,7,255,255,5,8,255,48,6,1,255,255,6,2,254,52,6,7,255,255,6,8,255,48,7,1,255,255,7,2,254,52,7,7,199,255,7,8,255,37],"secondary":false},{"width":11,"bonus":315,"chr":"G","pixels":[1,4,217,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,240,252,2,3,253,255,2,4,199,211,2,5,229,88,2,6,255,43,2,7,255,43,2,8,255,74,2,9,255,151,2,10,254,251,2,11,223,216,3,2,251,255,3,3,177,118,3,4,254,0,3,5,165,0,3,10,175,89,3,11,254,249,3,12,218,129,4,1,172,255,4,2,186,220,4,3,252,0,4,11,172,217,4,12,254,203,5,1,225,255,5,2,197,102,5,3,160,0,5,12,250,249,5,13,202,0,6,1,249,255,6,2,232,65,6,7,208,255,6,12,254,254,6,13,244,0,7,1,233,255,7,2,251,86,7,7,255,255,7,8,217,57,7,12,243,251,7,13,253,0,8,1,199,255,8,2,246,159,8,7,255,255,8,8,255,113,8,12,219,240,8,13,240,0,9,2,230,156,9,3,153,0,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,212,179,9,13,206,0,10,8,255,32,10,9,255,32,10,10,255,32,10,11,255,32,10,12,255,14],"secondary":false},{"width":12,"bonus":290,"chr":"H","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,255,3,7,255,77,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,6,255,255,4,7,255,48,5,6,255,255,5,7,255,48,6,6,255,255,6,7,255,48,7,6,255,255,7,7,255,48,8,6,255,255,8,7,255,113,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,10,2,255,32,10,3,255,32,10,4,255,32,10,5,255,32,10,6,255,32,10,7,255,32,10,8,255,32,10,9,255,32,10,10,255,32,10,11,255,32,10,12,255,32,10,13,255,0],"secondary":false},{"width":6,"bonus":170,"chr":"I","pixels":[1,1,245,255,1,12,245,255,2,1,255,255,2,2,249,107,2,12,255,255,2,13,245,0,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,0,4,1,249,255,4,2,254,46,4,3,255,32,4,4,255,32,4,5,255,32,4,6,255,32,4,7,255,32,4,8,255,32,4,9,255,32,4,10,255,32,4,11,255,44,4,12,254,251,4,13,255,0,5,2,250,0,5,13,250,0],"secondary":false},{"width":5,"bonus":175,"chr":"J","pixels":[0,15,255,255,0,16,214,43,1,14,187,255,1,15,231,253,1,16,255,2,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,226,235,2,15,202,68,2,16,229,0,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,35,3,13,255,13,3,14,255,0,3,15,208,0],"secondary":false},{"width":10,"bonus":285,"chr":"K","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,254,162,3,7,255,227,3,8,254,52,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,5,174,237,4,6,255,255,4,7,221,186,4,8,228,7,5,4,193,255,5,5,226,254,5,6,216,173,5,7,255,253,5,8,236,223,6,3,219,255,6,4,207,251,6,5,200,32,6,6,225,0,6,7,171,88,6,8,254,222,6,9,253,247,7,2,237,255,7,3,190,241,7,4,221,13,7,5,204,0,7,9,242,165,7,10,255,255,7,11,210,218,8,1,249,255,8,2,175,214,8,3,238,3,8,4,179,0,8,10,187,108,8,11,254,234,8,12,248,238,9,2,250,0,9,12,249,183,9,13,232,0],"secondary":false},{"width":9,"bonus":165,"chr":"L","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,104,3,12,255,255,3,13,255,0,4,12,255,255,4,13,255,0,5,12,255,255,5,13,255,0,6,12,255,255,6,13,255,0,7,12,255,255,7,13,255,0,8,13,255,0],"secondary":false},{"width":15,"bonus":460,"chr":"M","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,254,245,3,3,255,165,3,4,254,76,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,2,255,129,4,3,253,219,4,4,255,255,4,5,221,239,5,4,225,58,5,5,255,140,5,6,250,232,5,7,254,255,5,8,200,247,6,7,234,68,6,8,255,152,6,9,250,240,6,10,253,253,6,11,187,248,7,9,162,40,7,10,249,185,7,11,255,255,7,12,255,255,8,8,179,255,8,9,249,255,8,10,217,251,8,11,217,147,8,12,255,37,8,13,255,0,9,5,161,255,9,6,243,255,9,7,225,254,9,8,178,195,9,9,193,62,9,10,250,0,9,11,214,0,10,3,231,255,10,4,233,255,10,5,178,212,10,6,182,81,10,7,243,1,10,8,224,0,11,1,255,255,11,2,239,251,11,3,209,183,11,4,239,88,11,5,240,85,11,6,182,112,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,13,2,255,32,13,3,255,32,13,4,255,32,13,5,255,32,13,6,255,32,13,7,255,32,13,8,255,32,13,9,255,32,13,10,255,32,13,11,255,32,13,12,255,32,13,13,255,0],"secondary":false},{"width":13,"bonus":345,"chr":"N","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,213,255,3,2,255,255,3,3,255,181,3,4,255,50,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,2,234,137,4,3,254,249,4,4,247,237,5,4,254,191,5,5,255,255,5,6,207,225,6,5,214,113,6,6,255,235,6,7,253,249,7,7,248,165,7,8,255,255,7,9,234,234,8,8,183,89,8,9,254,216,8,10,255,255,8,11,185,223,9,10,247,209,9,11,255,255,9,12,248,244,10,1,255,255,10,2,255,255,10,3,255,255,10,4,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,237,0,11,2,255,32,11,3,255,32,11,4,255,32,11,5,255,32,11,6,255,32,11,7,255,32,11,8,255,32,11,9,255,32,11,10,255,32,11,11,255,32,11,12,255,32,11,13,255,0],"secondary":false},{"width":12,"bonus":330,"chr":"O","pixels":[1,4,241,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,244,252,2,2,207,255,2,3,242,255,2,4,203,173,2,5,245,72,2,6,255,42,2,7,255,42,2,8,254,70,2,9,255,139,2,10,254,244,2,11,232,224,3,2,236,254,3,3,214,44,3,4,242,0,3,10,155,61,3,11,253,235,3,12,228,141,4,1,211,255,4,2,186,162,4,3,235,0,4,12,251,215,5,1,245,255,5,2,223,71,5,12,251,251,5,13,212,0,6,1,241,255,6,2,248,68,6,12,246,252,6,13,247,0,7,1,197,255,7,2,248,135,7,12,212,238,7,13,243,0,8,2,253,247,8,3,161,100,8,11,245,255,8,12,178,138,8,13,198,0,9,2,194,206,9,3,255,253,9,4,198,231,9,9,181,255,9,10,253,255,9,11,182,220,9,12,245,1,10,3,190,116,10,4,254,195,10,5,253,251,10,6,255,255,10,7,255,255,10,8,251,253,10,9,221,223,10,10,205,106,10,11,254,0,10,12,157,0,11,5,195,6,11,6,249,23,11,7,255,23,11,8,255,4,11,9,249,0,11,10,193,0],"secondary":false},{"width":10,"bonus":255,"chr":"P","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,255,3,8,255,77,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,1,255,255,4,2,255,53,4,7,255,255,4,8,255,43,5,1,243,255,5,2,254,76,5,7,255,255,5,8,255,16,6,1,205,255,6,2,251,151,6,7,229,251,6,8,255,0,7,2,254,255,7,3,209,179,7,6,247,255,7,7,171,164,7,8,226,0,8,2,193,191,8,3,254,249,8,4,255,255,8,5,247,252,8,6,198,176,8,7,248,2,9,4,248,26,9,5,255,5,9,6,244,0],"secondary":false},{"width":12,"bonus":350,"chr":"Q","pixels":[1,4,241,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,244,252,2,2,207,255,2,3,242,255,2,4,203,173,2,5,245,72,2,6,255,42,2,7,255,42,2,8,254,70,2,9,255,139,2,10,254,244,2,11,232,224,3,2,236,254,3,3,214,44,3,4,242,0,3,10,155,61,3,11,253,235,3,12,229,138,4,1,211,255,4,2,186,162,4,3,235,0,4,12,251,214,5,1,245,255,5,2,223,71,5,12,251,251,5,13,211,0,6,1,241,255,6,2,248,68,6,12,255,255,6,13,249,66,7,1,197,255,7,2,248,135,7,12,252,254,7,13,255,249,8,2,253,247,8,3,161,100,8,11,245,255,8,12,179,141,8,13,253,157,8,14,254,255,9,2,194,206,9,3,255,253,9,4,198,231,9,9,181,255,9,10,253,255,9,11,184,220,9,12,245,1,9,14,214,178,9,15,255,128,10,3,190,116,10,4,254,195,10,5,253,251,10,6,255,255,10,7,255,255,10,8,250,252,10,9,218,220,10,10,206,107,10,11,254,0,10,12,159,0,10,15,166,62,11,5,195,6,11,6,249,23,11,7,255,18,11,8,255,0,11,9,247,0,11,10,188,0],"secondary":false},{"width":10,"bonus":300,"chr":"R","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,3,1,255,255,3,2,255,80,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,255,3,8,255,77,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,0,4,1,255,255,4,2,254,52,4,7,255,255,4,8,255,48,5,1,245,255,5,2,255,71,5,7,255,255,5,8,255,102,6,1,209,255,6,2,251,136,6,7,250,255,6,8,255,255,6,9,214,223,7,2,254,251,7,3,200,177,7,6,241,255,7,7,162,181,7,8,251,72,7,9,255,217,7,10,254,252,7,11,163,227,8,2,198,192,8,3,254,249,8,4,255,255,8,5,249,251,8,6,194,175,8,7,241,1,8,10,235,131,8,11,254,245,8,12,245,243,9,4,248,26,9,5,255,3,9,6,245,0,9,12,251,174,9,13,234,0],"secondary":false},{"width":9,"bonus":240,"chr":"S","pixels":[1,2,213,255,1,3,255,255,1,4,255,255,1,5,234,248,1,11,167,255,1,12,202,231,2,2,220,252,2,3,224,71,2,4,255,72,2,5,255,219,2,6,251,222,2,12,246,238,2,13,183,0,3,1,221,255,3,2,183,127,3,3,217,0,3,6,255,255,3,7,231,95,3,12,250,253,3,13,230,0,4,1,247,255,4,2,228,66,4,6,221,242,4,7,255,190,4,12,242,251,4,13,248,0,5,1,233,255,5,2,249,84,5,7,255,255,5,8,203,66,5,12,215,238,5,13,238,0,6,1,197,255,6,2,246,148,6,7,239,243,6,8,254,222,6,11,245,255,6,12,172,144,6,13,201,0,7,2,224,130,7,8,251,223,7,9,255,255,7,10,252,252,7,11,195,187,7,12,245,2,8,9,223,26,8,10,255,9,8,11,249,0],"secondary":false},{"width":11,"bonus":195,"chr":"T","pixels":[1,1,255,255,2,1,255,255,2,2,254,52,3,1,255,255,3,2,254,52,4,1,255,255,4,2,255,115,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,6,1,255,255,6,2,255,77,6,3,255,32,6,4,255,32,6,5,255,32,6,6,255,32,6,7,255,32,6,8,255,32,6,9,255,32,6,10,255,32,6,11,255,32,6,12,255,32,6,13,255,0,7,1,255,255,7,2,254,52,8,1,255,255,8,2,254,52,9,1,255,255,9,2,254,52,10,2,255,0],"secondary":false},{"width":12,"bonus":280,"chr":"U","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,246,252,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,37,3,9,255,61,3,10,255,143,3,11,255,253,3,12,169,146,4,11,206,178,4,12,255,208,5,12,251,252,5,13,208,0,6,12,246,252,6,13,248,0,7,11,169,255,7,12,207,230,7,13,243,0,8,10,190,255,8,11,251,255,8,12,190,81,8,13,187,0,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,254,255,9,10,225,231,9,11,207,82,9,12,251,0,10,2,255,32,10,3,255,32,10,4,255,32,10,5,255,32,10,6,255,32,10,7,255,32,10,8,255,30,10,9,255,13,10,10,254,0,10,11,204,0],"secondary":false},{"width":10,"bonus":265,"chr":"V","pixels":[0,1,213,255,1,1,173,255,1,2,254,248,1,3,255,255,1,4,216,246,2,2,178,17,2,3,249,90,2,4,255,173,2,5,253,247,2,6,255,255,2,7,210,247,3,5,177,17,3,6,249,89,3,7,255,173,3,8,253,247,3,9,254,255,3,10,204,247,4,8,176,16,4,9,248,84,4,10,254,164,4,11,253,252,4,12,254,254,5,9,188,251,5,10,250,253,5,11,253,251,5,12,253,181,5,13,253,0,6,6,191,255,6,7,253,255,6,8,251,255,6,9,213,219,6,10,212,116,6,11,248,17,6,12,249,0,6,13,179,0,7,3,191,255,7,4,253,255,7,5,252,254,7,6,215,223,7,7,216,119,7,8,253,19,7,9,251,0,7,10,183,0,8,1,253,255,8,2,254,255,8,3,219,225,8,4,218,124,8,5,253,23,8,6,252,0,8,7,188,0,9,2,253,27,9,3,254,0,9,4,193,0],"secondary":false},{"width":15,"bonus":480,"chr":"W","pixels":[0,1,172,255,1,1,209,255,1,2,254,255,1,3,255,255,1,4,237,251,1,5,171,255,2,2,213,20,2,3,254,79,2,4,255,139,2,5,250,205,2,6,254,252,2,7,255,255,2,8,237,251,2,9,169,255,3,6,203,14,3,7,252,69,3,8,255,127,3,9,248,181,3,10,245,234,3,11,255,255,3,12,235,251,4,9,214,206,4,10,244,232,4,11,255,253,4,12,255,207,4,13,231,0,5,5,157,255,5,6,227,255,5,7,255,255,5,8,235,251,5,9,202,204,5,10,203,116,5,11,225,26,5,12,253,0,5,13,207,0,6,2,199,255,6,3,251,255,6,4,248,255,6,5,211,228,6,6,203,148,6,7,232,53,6,8,255,1,6,9,232,0,6,10,162,0,7,1,255,255,7,2,254,254,7,3,238,192,7,4,252,64,7,5,248,3,7,6,189,0,8,2,255,142,8,3,255,217,8,4,255,255,8,5,241,251,8,6,168,254,9,4,222,40,9,5,255,109,9,6,250,187,9,7,252,250,9,8,254,255,9,9,210,250,10,7,185,12,10,8,248,72,10,9,254,126,10,10,243,201,10,11,254,255,10,12,243,251,11,8,165,250,11,9,228,244,11,10,254,255,11,11,253,252,11,12,255,196,11,13,240,0,12,4,173,255,12,5,233,255,12,6,255,255,12,7,252,254,12,8,220,229,12,9,210,161,12,10,228,77,12,11,254,10,12,12,250,0,12,13,196,0,13,1,239,255,13,2,255,255,13,3,252,254,13,4,224,229,13,5,217,160,13,6,239,76,13,7,255,12,13,8,251,0,13,9,198,0,14,2,244,77,14,3,255,13,14,4,252,0,14,5,201,0],"secondary":false},{"width":9,"bonus":275,"chr":"X","pixels":[0,12,161,255,1,1,253,255,1,2,217,228,1,11,239,255,1,12,223,251,1,13,162,0,2,2,255,202,2,3,253,252,2,4,156,223,2,9,203,255,2,10,244,255,2,11,177,174,2,12,239,8,2,13,220,0,3,3,223,114,3,4,255,235,3,5,240,237,3,7,153,255,3,8,253,255,3,9,184,229,3,10,209,33,3,11,244,0,4,5,249,187,4,6,255,255,4,7,250,253,4,8,181,100,4,9,253,0,4,10,165,0,5,5,252,254,5,6,234,194,5,7,254,234,5,8,254,227,6,3,233,255,6,4,220,252,6,5,176,99,6,6,252,0,6,7,183,23,6,8,246,156,6,9,255,253,6,10,216,230,7,1,196,255,7,2,248,255,7,3,176,186,7,4,233,8,7,5,218,0,7,9,171,77,7,10,255,202,7,11,255,253,7,12,174,226,8,1,187,255,8,2,205,47,8,3,248,0,8,11,223,118,8,12,255,237,8,13,154,0],"secondary":false},{"width":9,"bonus":215,"chr":"Y","pixels":[0,1,217,255,1,1,179,255,1,2,255,255,1,3,227,238,2,2,197,73,2,3,254,186,2,4,255,255,2,5,221,238,3,4,202,77,3,5,254,192,3,6,255,255,3,7,216,235,4,6,235,190,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,5,5,229,255,5,6,249,255,5,7,221,170,5,8,255,43,5,9,255,36,5,10,255,36,5,11,255,36,5,12,255,36,5,13,255,0,6,3,221,255,6,4,252,254,6,5,197,203,6,6,232,34,6,7,249,0,7,1,215,255,7,2,254,255,7,3,200,213,7,4,227,43,7,5,252,0,7,6,157,0,8,1,177,255,8,2,221,53,8,3,254,0,8,4,167,0],"secondary":false},{"width":10,"bonus":305,"chr":"Z","pixels":[1,1,255,255,1,11,177,255,1,12,255,255,2,1,255,255,2,2,254,52,2,10,241,255,2,11,248,254,2,12,255,255,2,13,255,0,3,1,255,255,3,2,254,52,3,8,199,255,3,9,255,255,3,10,200,202,3,11,245,73,3,12,255,255,3,13,255,0,4,1,255,255,4,2,254,52,4,7,249,255,4,8,224,248,4,9,214,77,4,10,255,0,4,11,177,74,4,12,255,255,4,13,255,0,5,1,255,255,5,2,254,52,5,5,217,255,5,6,250,255,5,7,197,172,5,8,250,8,5,9,218,0,5,12,255,255,5,13,255,0,6,1,255,255,6,2,254,70,6,3,178,228,6,4,255,255,6,5,214,238,6,6,224,51,6,7,250,0,6,12,255,255,6,13,255,0,7,1,255,255,7,2,255,247,7,3,245,252,7,4,200,138,7,5,255,2,7,6,200,0,7,12,255,255,7,13,255,0,8,1,255,255,8,2,255,177,8,3,248,29,8,4,242,0,8,12,255,255,8,13,255,0,9,2,255,0,9,3,177,0,9,13,255,0],"secondary":false},{"width":9,"bonus":280,"chr":"0","pixels":[1,3,213,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,254,255,1,10,205,250,2,2,253,255,2,3,195,210,2,4,227,95,2,5,255,50,2,6,255,39,2,7,255,38,2,8,255,50,2,9,255,83,2,10,254,160,2,11,254,252,3,1,223,255,3,2,177,170,3,3,253,0,3,4,160,0,3,11,203,147,3,12,254,221,4,1,247,255,4,2,231,66,4,12,251,252,4,13,220,0,5,1,203,255,5,2,252,157,5,11,155,255,5,12,220,243,5,13,248,0,6,2,253,247,6,3,237,225,6,10,208,255,6,11,250,255,6,12,184,103,6,13,209,0,7,3,251,155,7,4,250,230,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,241,247,7,10,212,202,7,11,217,59,7,12,250,0,8,5,226,11,8,6,255,26,8,7,255,26,8,8,255,12,8,9,255,0,8,10,233,0,8,11,168,0],"secondary":false},{"width":9,"bonus":160,"chr":"1","pixels":[2,3,225,255,3,2,211,255,3,3,184,240,3,4,226,2,4,1,175,255,4,2,231,254,4,3,226,99,4,4,199,103,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,6,2,255,36,6,3,255,36,6,4,255,36,6,5,255,36,6,6,255,36,6,7,255,36,6,8,255,36,6,9,255,36,6,10,255,36,6,11,255,36,6,12,255,36,6,13,255,0],"secondary":false},{"width":9,"bonus":275,"chr":"2","pixels":[1,2,155,255,1,11,160,255,1,12,255,255,2,2,236,255,2,3,164,35,2,10,173,255,2,11,254,255,2,12,255,255,2,13,255,0,3,1,215,255,3,2,184,159,3,3,236,0,3,9,185,255,3,10,238,255,3,11,208,133,3,12,255,255,3,13,255,0,4,1,247,255,4,2,225,68,4,8,196,255,4,9,232,255,4,10,197,59,4,11,241,55,4,12,255,255,4,13,255,0,5,1,219,255,5,2,250,104,5,7,209,255,5,8,223,253,5,9,204,46,5,10,232,0,5,12,255,255,5,13,255,0,6,2,253,241,6,3,173,174,6,6,245,255,6,7,204,246,6,8,214,29,6,9,222,0,6,12,255,255,6,13,255,0,7,2,207,191,7,3,254,249,7,4,255,255,7,5,236,244,7,6,196,147,7,7,246,4,7,8,196,0,7,12,255,255,7,13,255,0,8,3,157,7,8,4,249,18,8,5,255,0,8,6,226,0,8,13,255,0],"secondary":false},{"width":9,"bonus":240,"chr":"3","pixels":[0,11,173,255,1,2,215,251,1,12,241,224,2,1,219,255,2,2,186,137,2,3,212,0,2,6,255,255,2,12,249,250,2,13,212,0,3,1,247,255,3,2,227,66,3,6,255,255,3,7,254,64,3,12,251,253,3,13,244,0,4,1,223,255,4,2,250,97,4,6,244,254,4,7,255,129,4,12,222,242,4,13,249,0,5,1,153,255,5,2,251,233,5,3,159,165,5,5,239,255,5,6,156,174,5,7,254,251,5,8,196,178,5,11,251,255,5,12,187,150,5,13,211,0,6,2,230,214,6,3,255,255,6,4,252,253,6,5,183,170,6,6,239,0,6,7,172,166,6,8,254,245,6,9,255,255,6,10,245,249,6,11,203,167,6,12,251,1,7,3,197,25,7,4,255,7,7,5,250,0,7,9,244,22,7,10,255,0,7,11,239,0],"secondary":false},{"width":9,"bonus":270,"chr":"4","pixels":[1,8,169,255,1,9,255,255,2,7,227,255,2,8,212,252,2,9,255,255,2,10,255,68,3,6,247,255,3,7,155,197,3,8,230,25,3,9,255,255,3,10,255,68,4,4,211,255,4,5,210,253,4,6,162,71,4,7,247,0,4,9,255,255,4,10,255,68,5,3,245,255,5,4,154,218,5,5,212,6,5,6,208,0,5,9,255,255,5,10,255,68,6,1,191,255,6,2,235,255,6,3,183,172,6,4,248,82,6,5,171,119,6,9,255,255,6,10,254,126,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,8,2,255,32,8,3,255,32,8,4,255,32,8,5,255,32,8,6,255,32,8,7,255,32,8,8,255,49,8,9,255,255,8,10,255,91,8,11,255,32,8,12,255,32,8,13,255,0],"secondary":false},{"width":9,"bonus":230,"chr":"5","pixels":[2,1,255,255,2,2,255,255,2,3,254,255,2,4,244,250,2,5,233,240,2,6,252,252,2,7,175,123,2,12,238,231,3,1,255,255,3,2,255,67,3,3,255,3,3,4,254,0,3,5,239,0,3,6,252,240,3,7,250,57,3,12,252,253,3,13,215,0,4,1,255,255,4,2,254,52,4,6,247,255,4,7,241,69,4,12,242,251,4,13,250,0,5,1,255,255,5,2,254,52,5,6,215,255,5,7,251,135,5,12,212,238,5,13,238,0,6,1,255,255,6,2,254,52,6,7,254,252,6,8,199,178,6,11,251,255,6,12,176,126,6,13,198,0,7,2,255,16,7,7,197,190,7,8,254,252,7,9,255,255,7,10,246,250,7,11,199,159,7,12,252,0,8,9,252,29,8,10,255,4,8,11,241,0],"secondary":false},{"width":9,"bonus":290,"chr":"6","pixels":[1,4,225,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,226,250,2,2,196,255,2,3,226,254,2,4,180,159,2,5,235,92,2,6,254,225,2,7,255,116,2,8,254,46,2,9,255,69,2,10,254,164,2,11,255,255,3,2,222,254,3,3,201,25,3,4,225,0,3,5,216,219,3,6,167,188,3,7,224,0,3,11,213,164,3,12,255,213,4,1,215,255,4,2,176,157,4,3,221,0,4,5,245,255,4,6,201,77,4,12,252,253,4,13,213,0,5,1,249,255,5,2,224,72,5,5,219,255,5,6,249,120,5,12,229,246,5,13,250,0,6,1,247,255,6,2,250,65,6,6,254,250,6,7,196,191,6,10,163,255,6,11,253,255,6,12,175,136,6,13,221,0,7,2,248,20,7,6,188,170,7,7,255,237,7,8,255,255,7,9,254,255,7,10,231,238,7,11,197,119,7,12,253,0,8,8,238,21,8,9,255,8,8,10,254,0,8,11,216,0],"secondary":false},{"width":9,"bonus":205,"chr":"7","pixels":[1,1,255,255,2,1,255,255,2,2,254,52,3,1,255,255,3,2,254,52,3,10,155,255,3,11,243,255,3,12,249,255,4,1,255,255,4,2,254,52,4,8,213,255,4,9,255,255,4,10,216,242,4,11,198,140,4,12,244,19,4,13,249,0,5,1,255,255,5,2,254,52,5,5,171,255,5,6,249,255,5,7,235,253,5,8,193,189,5,9,220,53,5,10,255,0,5,11,205,0,6,1,255,255,6,2,255,163,6,3,231,249,6,4,251,255,6,5,199,227,6,6,198,103,6,7,249,5,6,8,234,0,7,1,255,255,7,2,255,211,7,3,204,143,7,4,229,25,7,5,251,0,7,6,177,0,8,2,255,0,8,3,211,0],"secondary":false},{"width":9,"bonus":315,"chr":"8","pixels":[1,2,227,255,1,3,255,255,1,4,255,255,1,5,203,240,1,8,243,255,1,9,255,255,1,10,255,255,1,11,215,244,2,1,179,255,2,2,205,243,2,3,233,53,2,4,255,68,2,5,255,217,2,6,241,213,2,7,249,255,2,8,177,189,2,9,246,50,2,10,255,69,2,11,255,219,2,12,235,169,3,1,239,255,3,2,199,87,3,3,195,0,3,6,255,253,3,7,227,140,3,8,249,0,3,12,250,228,3,13,156,0,4,1,231,255,4,2,243,86,4,6,255,255,4,7,254,164,4,12,249,251,4,13,224,0,5,1,160,255,5,2,251,225,5,5,239,255,5,6,164,204,5,7,254,246,5,8,180,66,5,12,224,245,5,13,246,0,6,2,232,212,6,3,255,255,6,4,251,253,6,5,187,176,6,6,239,0,6,7,199,180,6,8,253,229,6,11,243,255,6,12,179,171,6,13,215,0,7,3,198,27,7,4,255,7,7,5,249,0,7,8,212,194,7,9,255,255,7,10,253,253,7,11,199,190,7,12,243,5,8,9,168,29,8,10,255,12,8,11,252,0],"secondary":false},{"width":9,"bonus":290,"chr":"9","pixels":[1,2,165,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,228,247,2,2,236,255,2,3,200,128,2,4,254,46,2,5,255,67,2,6,255,202,2,7,249,217,2,12,253,255,3,1,231,255,3,2,183,141,3,3,236,0,3,7,255,255,3,8,216,30,3,12,249,253,3,13,253,0,4,1,247,255,4,2,238,73,4,7,255,255,4,8,255,36,4,12,219,241,4,13,247,0,5,1,197,255,5,2,253,161,5,7,214,253,5,8,255,1,5,11,247,255,5,12,178,139,5,13,207,0,6,2,253,249,6,3,228,205,6,6,231,255,6,7,171,194,6,8,233,137,6,9,203,255,6,10,255,255,6,11,183,219,6,12,247,2,7,3,252,175,7,4,251,246,7,5,255,255,7,6,255,255,7,7,255,255,7,8,245,245,7,9,216,211,7,10,218,88,7,11,255,0,7,12,157,0,8,4,174,3,8,5,243,22,8,6,255,27,8,7,255,14,8,8,255,0,8,9,235,0,8,10,178,0],"secondary":false},{"width":13,"bonus":350,"chr":"%","pixels":[1,3,249,255,1,4,255,255,1,5,255,255,1,6,254,255,1,7,158,234,2,2,233,255,2,3,185,185,2,4,250,46,2,5,255,41,2,6,255,95,2,7,255,255,2,8,156,42,3,2,217,255,3,3,247,179,3,4,177,131,3,6,162,228,3,7,254,255,3,8,255,17,3,12,189,255,4,3,249,222,4,4,255,255,4,5,255,255,4,6,242,248,4,7,188,137,4,8,254,0,4,10,185,255,4,13,189,0,5,4,219,17,5,5,255,21,5,6,255,1,5,7,237,19,5,8,191,200,5,9,158,255,5,11,185,0,6,7,188,255,6,10,158,0,7,5,184,255,7,8,193,28,8,4,157,255,8,6,184,0,8,7,162,147,8,8,248,255,8,9,255,255,8,10,255,255,8,11,251,254,9,2,187,255,9,5,157,0,9,7,213,255,9,8,166,176,9,9,249,39,9,10,255,40,9,11,254,132,9,12,254,234,10,3,187,0,10,7,202,255,10,8,240,171,10,9,162,137,10,11,187,238,10,12,239,239,10,13,234,0,11,8,246,223,11,9,255,255,11,10,255,255,11,11,237,244,11,12,198,94,11,13,224,0,12,9,218,19,12,10,255,19,12,11,255,0,12,12,227,0],"secondary":false},{"width":7,"bonus":200,"chr":"/","pixels":[1,13,177,255,1,14,239,255,1,15,255,255,2,9,171,255,2,10,233,255,2,11,255,255,2,12,232,250,2,13,202,204,2,14,206,120,2,15,241,34,2,16,255,0,3,5,165,255,3,6,229,255,3,7,255,255,3,8,235,251,3,9,203,210,3,10,205,127,3,11,237,40,3,12,255,0,3,13,227,0,3,14,162,0,4,1,159,255,4,2,223,255,4,3,255,255,4,4,238,253,4,5,205,214,4,6,202,135,4,7,234,45,4,8,255,0,4,9,232,0,4,10,167,0,5,0,240,254,5,1,206,219,5,2,201,141,5,3,229,51,5,4,255,1,5,5,236,0,5,6,172,0,6,1,239,0,6,2,177,0],"secondary":false},{"width":9,"bonus":120,"chr":"+","pixels":[1,7,255,255,2,7,255,255,2,8,255,48,3,7,255,255,3,8,255,113,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,5,5,255,32,5,6,255,32,5,7,255,255,5,8,255,74,5,9,255,32,5,10,255,32,5,11,255,0,6,7,255,255,6,8,255,48,7,7,255,255,7,8,255,48,8,8,255,0],"secondary":false},{"width":8,"bonus":160,"chr":"?","pixels":[2,1,190,255,2,2,174,198,3,1,235,255,3,2,208,89,3,7,159,255,3,8,225,255,3,11,249,255,3,12,237,249,4,1,235,255,4,2,242,85,4,6,190,255,4,7,190,251,4,8,163,17,4,9,226,0,4,12,250,12,4,13,231,0,5,1,167,255,5,2,253,227,5,5,205,255,5,6,213,254,5,7,193,20,5,8,187,0,6,2,231,206,6,3,254,255,6,4,255,255,6,5,212,223,6,6,210,29,6,7,212,0,7,3,190,16,7,4,254,14,7,5,255,0,7,6,186,0],"secondary":false},{"width":6,"bonus":100,"chr":"!","pixels":[3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,11,249,255,3,12,237,249,4,2,255,32,4,3,255,32,4,4,255,32,4,5,255,32,4,6,255,32,4,7,255,32,4,8,255,32,4,9,255,0,4,12,250,12,4,13,231,0],"secondary":false},{"width":14,"bonus":545,"chr":"@","pixels":[1,5,221,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,239,251,2,3,209,255,2,4,244,255,2,5,202,192,2,6,231,87,2,7,255,49,2,8,255,42,2,9,255,74,2,10,255,152,2,11,254,251,2,12,217,213,3,2,197,255,3,3,213,250,3,4,215,39,3,5,244,0,3,6,160,33,3,11,176,87,3,12,255,247,3,13,212,129,4,2,239,255,4,3,203,35,4,4,208,2,4,5,158,232,4,6,251,255,4,7,255,255,4,8,255,255,4,9,243,251,4,12,160,208,4,13,253,215,5,1,185,255,5,2,181,199,5,3,239,0,5,5,244,255,5,6,193,149,5,7,251,48,5,8,255,49,5,9,255,166,5,10,254,243,5,13,255,255,5,14,216,20,6,1,227,255,6,2,208,98,6,4,219,255,6,5,177,163,6,6,244,0,6,10,255,255,6,11,244,40,6,13,255,255,6,14,255,40,7,1,247,255,7,2,234,66,7,4,249,255,7,5,229,69,7,10,244,254,7,11,255,11,7,13,255,255,7,14,255,33,8,1,223,255,8,2,250,95,8,4,231,255,8,5,252,139,8,9,211,255,8,11,243,0,8,13,253,255,8,14,255,7,9,1,155,255,9,2,246,199,9,4,181,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,244,246,9,10,233,136,9,13,202,245,9,14,253,0,10,2,252,251,10,3,227,160,10,5,190,43,10,6,255,32,10,7,255,32,10,8,255,33,10,9,255,77,10,10,255,255,10,14,194,0,11,3,255,249,11,4,238,233,11,9,201,245,11,10,235,247,11,11,255,8,12,4,253,166,12,5,253,244,12,6,255,255,12,7,255,255,12,8,246,251,12,9,206,207,12,10,201,41,12,11,227,0,13,5,165,0,13,6,243,19,13,7,255,22,13,8,255,2,13,9,242,0,13,10,167,0],"secondary":false},{"width":11,"bonus":310,"chr":"#","pixels":[1,5,239,255,1,9,255,255,2,5,239,255,2,6,242,34,2,9,255,255,2,10,255,159,2,11,196,238,2,12,233,255,3,5,247,255,3,6,252,209,3,7,244,254,3,8,255,255,3,9,255,255,3,10,254,192,3,11,207,159,3,12,204,94,3,13,234,0,4,3,255,255,4,4,228,250,4,5,253,253,4,6,250,134,4,7,219,81,4,8,244,24,4,9,255,255,4,10,255,48,4,11,192,0,5,4,255,0,5,5,253,241,5,6,252,32,5,9,255,255,5,10,255,48,6,5,239,255,6,6,243,59,6,9,255,255,6,10,255,225,6,11,254,255,6,12,244,254,7,4,171,255,7,5,251,255,7,6,255,255,7,7,241,252,7,8,211,234,7,9,255,255,7,10,255,121,7,11,230,47,7,12,254,2,7,13,243,0,8,3,204,246,8,4,188,186,8,5,252,248,8,6,252,54,8,7,255,0,8,8,238,0,8,9,255,255,8,10,255,48,9,4,196,0,9,5,248,246,9,6,247,33,9,9,255,255,9,10,255,48,10,6,240,0,10,10,255,0],"secondary":false},{"width":9,"bonus":315,"chr":"$","pixels":[1,4,255,255,1,5,255,255,1,6,242,250,1,12,244,250,2,3,253,255,2,4,185,152,2,5,254,52,2,6,255,199,2,7,252,224,2,12,255,255,2,13,241,25,3,3,235,251,3,4,254,80,3,5,156,131,3,7,255,255,3,8,238,134,3,12,255,255,3,13,255,108,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,182,180,5,2,254,126,5,3,254,213,5,4,255,32,5,5,255,32,5,6,255,32,5,7,255,152,5,8,254,240,5,9,255,40,5,10,255,32,5,11,255,78,5,12,255,251,5,13,255,39,5,14,255,16,6,3,250,250,6,4,214,12,6,8,253,251,6,9,250,179,6,11,209,247,6,12,202,227,6,13,251,0,7,3,205,230,7,4,247,34,7,9,255,245,7,10,255,255,7,11,220,233,7,12,208,35,7,13,180,0,8,4,185,0,8,10,246,19,8,11,255,0,8,12,201,0],"secondary":false},{"width":9,"bonus":135,"chr":"^","pixels":[1,7,207,255,1,8,235,255,2,5,215,255,2,6,220,255,2,7,156,174,2,8,209,12,2,9,236,0,3,3,223,255,3,4,200,255,3,6,216,2,3,7,220,0,4,2,255,255,4,3,193,196,4,4,224,5,4,5,200,0,5,2,163,128,5,3,255,201,5,4,242,238,6,4,214,76,6,5,247,189,6,6,247,250,6,7,153,244,7,6,196,61,7,7,250,168,7,8,252,252,8,8,176,46,8,9,249,0],"secondary":false},{"width":9,"bonus":70,"chr":"~","pixels":[1,8,189,255,2,7,233,255,2,8,158,103,2,9,189,0,3,7,233,255,3,8,241,94,4,8,250,201,5,8,255,255,5,9,204,39,6,8,255,255,6,9,255,26,7,8,179,247,7,9,255,0,8,9,173,0],"secondary":false},{"width":11,"bonus":365,"chr":"&","pixels":[1,8,245,255,1,9,255,255,1,10,255,255,1,11,220,246,2,2,247,255,2,3,255,255,2,4,252,254,2,5,156,235,2,7,251,255,2,8,181,199,2,9,246,49,2,10,255,75,2,11,254,222,2,12,241,181,3,1,213,255,3,2,191,217,3,3,248,45,3,4,255,95,3,5,254,228,3,6,253,253,3,7,169,217,3,8,251,0,3,12,252,236,3,13,171,0,4,1,245,255,4,2,223,73,4,3,163,0,4,5,185,198,4,6,254,255,4,7,254,214,4,8,155,44,4,12,250,252,4,13,233,0,5,1,205,255,5,2,252,196,5,4,153,255,5,5,245,255,5,6,168,88,5,7,255,197,5,8,249,229,5,12,220,243,5,13,247,0,6,2,250,234,6,3,255,255,6,4,236,244,6,5,179,95,6,6,246,0,6,8,241,205,6,9,252,236,6,11,231,255,6,12,179,167,6,13,209,0,7,3,231,23,7,4,255,1,7,5,226,0,7,9,239,204,7,10,255,255,7,11,220,239,7,12,232,8,8,9,236,255,8,10,252,248,8,11,254,243,8,12,218,74,9,7,255,255,9,8,244,254,9,9,190,184,9,10,237,19,9,11,252,182,9,12,254,246,10,8,255,12,10,9,243,0,10,12,231,190,10,13,246,0],"secondary":false},{"width":10,"bonus":170,"chr":"*","pixels":[1,4,167,255,2,4,244,248,2,5,168,0,3,4,254,254,3,5,241,64,3,6,223,255,3,7,249,255,3,8,160,91,4,1,211,255,4,2,185,255,4,3,158,255,4,4,244,254,4,5,254,234,4,6,156,204,4,7,227,25,4,8,249,0,5,1,169,255,5,2,235,156,5,3,217,138,5,4,250,248,5,5,254,240,5,6,247,175,6,2,170,0,6,3,160,59,6,4,253,253,6,5,244,34,6,6,252,201,6,7,255,255,7,4,238,252,7,5,252,0,7,7,221,116,7,8,255,0,8,4,188,187,8,5,235,0],"secondary":false},{"width":5,"bonus":175,"chr":"(","pixels":[1,3,199,255,1,4,247,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,1,11,223,253,1,12,153,255,2,1,247,255,2,2,246,254,2,3,211,211,2,4,226,138,2,5,249,78,2,6,255,55,2,7,255,40,2,8,255,49,2,9,255,65,2,10,255,101,2,11,255,151,2,12,250,221,2,13,255,255,2,14,214,240,3,0,217,253,3,1,179,137,3,2,248,12,3,3,245,0,3,4,175,0,3,13,225,57,3,14,254,156,3,15,253,252,4,1,216,0,4,15,170,56,4,16,250,0],"secondary":false},{"width":6,"bonus":185,"chr":")","pixels":[2,0,247,253,2,1,153,238,2,14,197,255,2,15,241,255,3,0,157,133,3,1,254,220,3,2,255,255,3,3,233,249,3,4,173,255,3,11,195,255,3,12,247,255,3,13,252,254,3,14,196,210,3,15,203,30,3,16,241,0,4,2,228,69,4,3,255,148,4,4,249,206,4,5,252,251,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,242,246,4,11,222,209,4,12,223,133,4,13,247,26,4,14,252,0,4,15,162,0,5,5,201,1,5,6,248,14,5,7,255,29,5,8,255,25,5,9,255,9,5,10,255,0,5,11,234,0,5,12,182,0],"secondary":false},{"width":7,"bonus":65,"chr":"_","pixels":[0,14,255,255,1,14,255,255,1,15,255,48,2,14,255,255,2,15,255,48,3,14,255,255,3,15,255,48,4,14,255,255,4,15,255,48,5,14,255,255,5,15,255,48,6,14,255,255,6,15,255,48],"secondary":false},{"width":6,"bonus":40,"chr":"-","pixels":[1,8,255,255,2,8,255,255,2,9,255,48,3,8,255,255,3,9,255,48,4,8,255,255,4,9,255,48,5,9,255,0],"secondary":true},{"width":9,"bonus":140,"chr":"=","pixels":[1,6,255,255,1,9,255,255,2,6,255,255,2,7,255,48,2,9,255,255,2,10,255,48,3,6,255,255,3,7,255,48,3,9,255,255,3,10,255,48,4,6,255,255,4,7,255,48,4,9,255,255,4,10,255,48,5,6,255,255,5,7,255,48,5,9,255,255,5,10,255,48,6,6,255,255,6,7,255,48,6,9,255,255,6,10,255,48,7,6,255,255,7,7,255,48,7,9,255,255,7,10,255,48,8,7,255,0,8,10,255,0],"secondary":false},{"width":6,"bonus":195,"chr":"[","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,3,0,255,255,3,1,255,77,3,2,255,36,3,3,255,36,3,4,255,36,3,5,255,36,3,6,255,36,3,7,255,36,3,8,255,36,3,9,255,36,3,10,255,36,3,11,255,36,3,12,255,36,3,13,255,36,3,14,255,39,3,15,255,255,3,16,255,48,4,0,243,255,4,1,255,45,4,15,245,254,4,16,255,45,5,1,244,0,5,16,244,0],"secondary":false},{"width":6,"bonus":195,"chr":"]","pixels":[1,0,255,255,1,15,255,255,2,0,255,255,2,1,255,113,2,15,255,255,2,16,255,48,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,48,4,1,255,36,4,2,255,36,4,3,255,36,4,4,255,36,4,5,255,36,4,6,255,36,4,7,255,36,4,8,255,36,4,9,255,36,4,10,255,36,4,11,255,36,4,12,255,36,4,13,255,36,4,14,255,36,4,15,255,36,4,16,255,6],"secondary":false},{"width":6,"bonus":185,"chr":"{","pixels":[1,7,255,255,2,6,175,255,2,7,206,249,2,8,255,213,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,239,247,3,7,186,48,3,8,240,200,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,174,228,4,0,231,255,4,1,187,169,4,2,255,37,4,3,255,36,4,4,255,36,4,5,255,34,4,6,255,6,4,7,232,0,4,9,195,34,4,10,255,36,4,11,255,36,4,12,255,36,4,13,255,37,4,14,255,90,4,15,255,255,4,16,165,34,5,1,231,10,5,16,255,8],"secondary":false},{"width":7,"bonus":200,"chr":"}","pixels":[1,0,197,255,1,15,208,255,2,0,203,255,2,1,238,191,2,14,153,255,2,15,240,254,2,16,209,9,3,1,253,247,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,251,253,3,8,219,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,250,252,3,15,190,126,3,16,239,0,4,2,246,36,4,3,255,36,4,4,255,36,4,5,255,39,4,6,254,138,4,7,254,222,4,8,203,236,4,9,227,54,4,10,255,36,4,11,255,36,4,12,255,36,4,13,255,34,4,14,255,5,4,15,247,0,5,7,255,255,5,8,231,76,5,9,188,0,6,8,255,9],"secondary":false},{"width":5,"bonus":40,"chr":":","pixels":[2,4,231,255,2,5,252,254,2,11,249,255,2,12,237,249,3,5,234,20,3,6,251,0,3,12,250,12,3,13,231,0],"secondary":true},{"width":5,"bonus":65,"chr":";","pixels":[1,13,167,255,1,14,219,255,2,4,231,255,2,5,252,254,2,11,241,255,2,12,203,228,2,13,178,162,2,14,180,54,2,15,220,0,3,5,234,20,3,6,251,0,3,12,241,0,3,13,182,0],"secondary":true},{"width":8,"bonus":85,"chr":"\\"","pixels":[2,1,255,255,2,2,254,255,2,3,234,254,2,4,209,255,3,2,255,117,3,3,255,92,3,4,240,72,3,5,209,0,4,2,164,78,5,1,255,255,5,2,255,255,5,3,255,255,5,4,251,255,6,2,255,69,6,3,255,44,6,4,255,20,6,5,251,0],"secondary":true},{"width":5,"bonus":40,"chr":"\'","pixels":[2,1,255,255,2,2,254,255,2,3,234,254,2,4,209,255,3,2,255,117,3,3,255,92,3,4,240,72,3,5,209,0],"secondary":true},{"width":9,"bonus":120,"chr":"<","pixels":[1,7,197,255,2,7,219,255,2,8,252,246,2,9,156,39,3,6,219,255,3,8,242,177,3,9,250,143,4,6,195,253,4,7,220,0,4,9,251,247,5,5,235,255,5,7,194,0,5,9,199,238,5,10,249,136,6,5,186,249,6,6,236,0,6,10,251,245,7,4,247,255,7,5,161,76,7,6,182,0,7,10,216,239,7,11,247,130,8,5,247,0,8,11,202,0],"secondary":false},{"width":9,"bonus":130,"chr":">","pixels":[1,4,247,255,1,10,203,255,2,4,153,231,2,5,252,184,2,10,239,255,2,11,206,20,3,5,246,244,3,6,199,77,3,9,185,255,3,10,164,207,3,11,240,0,4,6,250,197,4,9,243,255,4,10,190,26,5,6,235,238,5,7,211,87,5,8,167,255,5,9,162,221,5,10,243,0,6,7,250,221,6,8,246,252,6,9,175,35,7,7,216,233,7,8,239,157,7,9,243,0,8,8,197,0],"secondary":false},{"width":7,"bonus":145,"chr":"\\\\","pixels":[1,0,254,255,1,1,213,251,2,0,157,99,2,1,254,126,2,2,243,201,2,3,251,252,2,4,254,254,2,5,206,252,3,3,194,10,3,4,250,68,3,5,253,133,3,6,243,207,3,7,252,253,3,8,252,254,3,9,200,252,4,7,200,15,4,8,252,73,4,9,252,139,4,10,243,213,4,11,254,254,4,12,249,254,4,13,193,253,5,11,206,20,5,12,254,79,5,13,251,146,5,14,244,219,5,15,254,255,6,15,213,24,6,16,254,0],"secondary":false},{"width":3,"bonus":20,"chr":".","pixels":[1,11,249,255,1,12,237,249,2,12,250,12,2,13,231,0],"secondary":true},{"width":4,"bonus":50,"chr":",","pixels":[1,11,205,255,1,12,247,255,1,13,255,255,1,14,210,244,2,11,215,255,2,12,233,154,2,13,248,48,2,14,255,0,2,15,201,0,3,12,216,0],"secondary":true},{"width":9,"bonus":160,"chr":"|","pixels":[4,0,255,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,5,1,255,36,5,2,255,36,5,3,255,36,5,4,255,36,5,5,255,36,5,6,255,36,5,7,255,36,5,8,255,36,5,9,255,36,5,10,255,36,5,11,255,36,5,12,255,36,5,13,255,36,5,14,255,36,5,15,255,36,5,16,255,0],"secondary":false}],"width":15,"spacewidth":4,"shadow":true,"height":17,"basey":12}');

/***/ }),

/***/ "./src/fonts/chatbox/18pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/18pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":10,"bonus":330,"chr":"a","pixels":[1,10,239,255,1,11,235,255,1,12,161,255,2,5,165,255,2,9,255,255,2,10,235,225,2,11,251,187,2,12,254,255,2,13,220,184,3,4,173,255,3,5,198,225,3,6,165,0,3,8,211,255,3,9,219,219,3,10,255,1,3,11,207,0,3,12,224,162,3,13,255,233,3,14,158,0,4,4,223,255,4,5,211,144,4,6,175,0,4,8,251,255,4,9,229,112,4,10,188,0,4,13,251,251,4,14,233,0,5,4,247,255,5,5,235,106,5,8,255,255,5,9,252,77,5,13,222,233,5,14,247,0,6,4,221,255,6,5,251,166,6,8,255,255,6,9,255,68,6,12,229,255,6,13,163,108,6,14,202,0,7,5,255,255,7,6,237,222,7,7,173,255,7,8,255,255,7,9,254,189,7,10,202,231,7,11,243,255,7,12,203,245,7,13,237,88,8,5,204,181,8,6,255,225,8,7,254,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,9,7,225,0,9,8,254,0,9,9,255,0,9,10,255,0,9,11,255,0,9,12,255,0,9,13,255,0,9,14,255,0],"secondary":false},{"width":12,"bonus":395,"chr":"b","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,0,163,255,3,1,254,164,3,2,254,164,3,3,254,162,3,4,255,151,3,5,255,223,3,6,254,251,3,7,255,196,3,8,254,168,3,9,255,169,3,10,254,198,3,11,255,251,3,12,255,215,3,13,255,75,3,14,255,0,4,1,164,0,4,2,164,0,4,3,164,0,4,4,197,125,4,5,245,241,4,6,227,36,4,7,250,0,4,8,196,0,4,9,168,0,4,10,169,0,4,11,205,43,4,12,254,234,4,13,231,110,5,4,213,255,5,5,174,185,5,6,232,0,5,13,251,217,6,4,249,255,6,5,230,111,6,13,252,252,6,14,214,0,7,4,229,255,7,5,252,164,7,12,161,255,7,13,239,245,7,14,249,0,8,5,255,255,8,6,216,173,8,12,255,255,8,13,213,169,8,14,230,0,9,5,220,205,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,222,203,9,13,255,9,10,6,194,76,10,7,255,127,10,8,254,156,10,9,255,155,10,10,255,127,10,11,254,58,10,12,255,0,10,13,177,0,11,9,156,0,11,10,155,0],"secondary":false},{"width":9,"bonus":215,"chr":"c","pixels":[1,7,213,255,1,8,247,255,1,9,247,255,1,10,217,255,2,5,219,255,2,6,255,255,2,7,235,232,2,8,243,187,2,9,252,179,2,10,253,215,2,11,255,255,2,12,243,239,3,5,248,254,3,6,229,78,3,7,255,0,3,8,214,0,3,9,178,0,3,10,177,0,3,11,224,79,3,12,254,246,3,13,245,165,4,4,225,255,4,5,207,174,4,6,247,0,4,12,169,208,4,13,254,232,4,14,159,0,5,4,249,255,5,5,237,104,5,13,252,253,5,14,231,0,6,4,231,255,6,5,252,122,6,13,239,245,6,14,250,0,7,4,179,255,7,5,245,156,7,12,187,255,7,13,208,205,7,14,230,0,8,5,179,0,8,13,188,0,8,14,167,0],"secondary":false},{"width":11,"bonus":430,"chr":"d","pixels":[1,7,219,255,1,8,249,255,1,9,249,255,1,10,221,255,1,11,154,255,2,5,237,255,2,6,255,255,2,7,238,231,2,8,244,186,2,9,253,176,2,10,254,209,2,11,255,255,2,12,249,248,3,4,181,255,3,5,244,253,3,6,241,71,3,7,255,0,3,8,215,0,3,9,178,0,3,10,175,0,3,11,218,63,3,12,254,239,3,13,251,189,4,4,243,255,4,5,219,150,4,6,242,0,4,12,153,210,4,13,254,246,4,14,186,0,5,4,241,255,5,5,248,106,5,13,248,249,5,14,245,0,6,4,178,255,6,5,251,169,6,12,155,255,6,13,209,218,6,14,242,0,7,5,248,238,7,6,213,161,7,12,225,255,7,13,169,53,7,14,178,0,8,0,255,255,8,1,255,255,8,2,255,255,8,3,255,255,8,4,247,255,8,5,246,254,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,248,248,8,13,248,202,9,0,163,255,9,1,254,164,9,2,254,164,9,3,254,164,9,4,254,164,9,5,251,166,9,6,251,166,9,7,254,164,9,8,254,164,9,9,254,164,9,10,254,164,9,11,254,164,9,12,254,164,9,13,249,168,9,14,196,0,10,1,164,0,10,2,164,0,10,3,164,0,10,4,164,0,10,5,164,0,10,6,164,0,10,7,164,0,10,8,164,0,10,9,164,0,10,10,164,0,10,11,164,0,10,12,164,0,10,13,164,0,10,14,164,0],"secondary":false},{"width":10,"bonus":290,"chr":"e","pixels":[1,7,213,255,1,8,247,255,1,9,247,255,1,10,215,255,2,5,223,255,2,6,249,255,2,7,229,222,2,8,255,255,2,9,253,199,2,10,254,209,2,11,255,255,2,12,237,234,3,4,167,255,3,5,232,252,3,6,228,42,3,7,250,20,3,8,255,255,3,9,255,68,3,10,197,0,3,11,220,77,3,12,255,247,3,13,239,160,4,4,237,255,4,5,208,145,4,6,229,0,4,8,255,255,4,9,255,68,4,12,172,211,4,13,254,228,5,4,247,255,5,5,245,109,5,8,255,255,5,9,255,68,5,13,253,253,5,14,228,0,6,4,193,255,6,5,253,205,6,8,255,255,6,9,255,68,6,13,241,247,6,14,251,0,7,5,254,250,7,6,250,238,7,7,188,251,7,8,255,255,7,9,255,68,7,12,167,255,7,13,215,220,7,14,234,0,8,6,254,179,8,7,253,240,8,8,255,255,8,9,255,68,8,13,190,93,8,14,186,0,9,7,178,0,9,8,238,0,9,9,255,0],"secondary":false},{"width":8,"bonus":265,"chr":"f","pixels":[1,4,173,255,2,3,161,255,2,4,251,255,2,5,236,211,2,6,195,214,2,7,163,255,2,8,163,255,2,9,163,255,2,10,163,255,2,11,163,255,2,12,163,255,2,13,163,255,3,1,251,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,164,0,4,0,201,255,4,1,221,239,4,2,253,41,4,3,255,2,4,4,255,255,4,5,254,88,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,5,0,241,255,5,1,223,117,5,2,207,0,5,4,255,255,5,5,254,88,6,0,243,255,6,1,248,115,6,4,255,255,6,5,254,88,7,0,178,255,7,1,247,97,7,5,255,0],"secondary":false},{"width":11,"bonus":475,"chr":"g","pixels":[1,7,217,255,1,8,249,255,1,9,249,255,1,10,221,255,1,11,153,255,2,5,235,255,2,6,255,255,2,7,237,229,2,8,244,185,2,9,252,178,2,10,254,210,2,11,255,255,2,12,249,248,2,16,203,255,2,17,179,220,3,4,181,255,3,5,242,252,3,6,240,65,3,7,255,0,3,8,213,0,3,9,177,0,3,10,176,0,3,11,218,62,3,12,255,237,3,13,251,190,3,17,247,224,3,18,154,0,4,4,243,255,4,5,218,148,4,6,240,0,4,13,254,246,4,14,187,0,4,17,248,248,4,18,217,0,5,4,241,255,5,5,248,106,5,13,248,248,5,14,245,0,5,17,253,253,5,18,241,0,6,4,175,255,6,5,250,171,6,12,155,255,6,13,205,215,6,14,241,0,6,16,153,255,6,17,238,243,6,18,251,0,7,5,246,235,7,6,214,162,7,12,215,255,7,13,167,44,7,14,179,28,7,16,251,255,7,17,215,185,7,18,227,0,8,4,197,255,8,5,243,254,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,8,14,255,255,8,15,255,255,8,16,236,239,8,17,252,26,8,18,156,0,9,4,163,255,9,5,234,178,9,6,250,167,9,7,254,164,9,8,254,164,9,9,254,164,9,10,254,164,9,11,254,164,9,12,254,164,9,13,255,163,9,14,254,150,9,15,255,100,9,16,255,11,9,17,221,0,10,5,164,0,10,6,164,0,10,7,164,0,10,8,164,0,10,9,164,0,10,10,164,0,10,11,164,0,10,12,164,0,10,13,164,0,10,14,163,0],"secondary":false},{"width":11,"bonus":385,"chr":"h","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,0,163,255,3,1,254,164,3,2,254,164,3,3,254,164,3,4,255,157,3,5,255,217,3,6,255,251,3,7,255,196,3,8,254,168,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,164,0,4,2,164,0,4,3,164,0,4,4,195,116,4,5,246,240,4,6,222,39,4,7,251,0,4,8,196,0,4,9,168,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,4,211,255,5,5,170,186,5,6,232,0,6,4,247,255,6,5,228,112,7,4,221,255,7,5,253,180,8,5,255,255,8,6,244,230,8,7,172,254,8,8,163,255,8,9,163,255,8,10,163,255,8,11,163,255,8,12,163,255,8,13,163,255,9,5,200,179,9,6,255,227,9,7,255,253,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,164,0,10,7,227,0,10,8,253,0,10,9,255,0,10,10,255,0,10,11,255,0,10,12,255,0,10,13,255,0,10,14,255,0],"secondary":false},{"width":5,"bonus":175,"chr":"i","pixels":[2,0,205,255,2,1,215,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,229,137,3,2,215,0,3,4,163,255,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0],"secondary":false},{"width":5,"bonus":240,"chr":"j","pixels":[0,17,249,254,1,16,165,255,1,17,241,247,1,18,248,0,2,0,205,255,2,1,215,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,215,167,2,18,233,0,3,1,229,137,3,2,215,0,3,4,163,255,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,254,164,3,15,255,149,3,16,255,91,3,17,255,2,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,4,15,164,0],"secondary":false},{"width":10,"bonus":335,"chr":"k","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,0,163,255,3,1,254,164,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,192,3,9,255,255,3,10,255,179,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,164,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,188,94,4,8,249,243,4,9,231,178,4,10,255,0,4,11,179,0,4,12,164,0,4,13,164,0,4,14,164,0,5,7,251,255,5,8,248,252,5,9,254,249,5,10,202,140,6,6,255,255,6,7,179,191,6,8,251,23,6,9,252,185,6,10,255,255,6,11,213,217,7,5,253,255,7,6,180,159,7,7,255,0,7,10,216,137,7,11,254,251,7,12,248,238,8,4,249,255,8,5,185,125,8,6,254,0,8,12,254,220,8,13,254,255,9,5,250,0,9,13,241,171,9,14,254,0],"secondary":false},{"width":5,"bonus":215,"chr":"l","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,0,163,255,3,1,254,164,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,164,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0],"secondary":false},{"width":17,"bonus":490,"chr":"m","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,5,254,215,3,6,255,247,3,7,255,193,3,8,254,168,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,5,235,240,4,6,218,29,4,7,247,0,4,8,193,0,4,9,168,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,4,215,255,5,5,168,178,5,6,222,0,6,4,247,255,6,5,232,116,7,4,215,255,7,5,253,219,8,5,254,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,9,5,202,216,9,6,255,249,9,7,254,192,9,8,255,167,9,9,254,164,9,10,254,164,9,11,254,164,9,12,254,164,9,13,254,164,9,14,255,0,10,5,222,254,10,6,179,38,10,7,249,0,10,8,192,0,10,9,167,0,10,10,164,0,10,11,164,0,10,12,164,0,10,13,164,0,10,14,164,0,11,4,219,255,11,5,177,167,11,6,222,0,12,4,245,255,12,5,234,115,13,4,211,255,13,5,253,219,14,5,255,255,14,6,255,255,14,7,255,255,14,8,255,255,14,9,255,255,14,10,255,255,14,11,255,255,14,12,255,255,14,13,255,255,15,6,255,137,15,7,255,160,15,8,254,164,15,9,254,164,15,10,254,164,15,11,254,164,15,12,254,164,15,13,254,164,15,14,255,0,16,8,160,0,16,9,164,0,16,10,164,0,16,11,164,0,16,12,164,0,16,13,164,0,16,14,164,0],"secondary":false},{"width":11,"bonus":320,"chr":"n","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,5,254,213,3,6,254,251,3,7,255,196,3,8,254,168,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,5,241,245,4,6,218,40,4,7,250,0,4,8,196,0,4,9,168,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,4,209,255,5,5,169,187,5,6,232,0,6,4,247,255,6,5,227,112,7,4,221,255,7,5,253,180,8,5,255,255,8,6,244,230,8,7,172,254,8,8,163,255,8,9,163,255,8,10,163,255,8,11,163,255,8,12,163,255,8,13,163,255,9,5,196,169,9,6,254,219,9,7,254,250,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,164,0,10,7,218,0,10,8,249,0,10,9,255,0,10,10,255,0,10,11,255,0,10,12,255,0,10,13,255,0,10,14,255,0],"secondary":false},{"width":11,"bonus":300,"chr":"o","pixels":[1,7,215,255,1,8,247,255,1,9,243,255,1,10,208,255,2,5,221,255,2,6,255,255,2,7,235,230,2,8,243,186,2,9,253,180,2,10,253,217,2,11,255,255,2,12,231,231,3,5,246,254,3,6,230,74,3,7,255,0,3,8,212,0,3,9,177,0,3,10,178,0,3,11,227,82,3,12,254,249,3,13,234,154,4,4,227,255,4,5,207,170,4,6,246,0,4,12,173,208,4,13,254,225,5,4,249,255,5,5,239,107,5,13,252,252,5,14,224,0,6,4,227,255,6,5,253,142,6,13,238,243,6,14,249,0,7,5,254,248,7,6,172,105,7,12,247,255,7,13,207,184,7,14,227,0,8,5,236,228,8,6,255,255,8,7,225,242,8,8,178,255,8,9,179,255,8,10,217,255,8,11,255,255,8,12,229,242,8,13,249,20,9,6,233,140,9,7,255,211,9,8,253,247,9,9,252,248,9,10,243,224,9,11,237,143,9,12,255,15,9,13,218,0,10,8,211,0,10,9,246,0,10,10,246,0,10,11,213,0],"secondary":false},{"width":12,"bonus":400,"chr":"p","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,3,5,255,213,3,6,254,252,3,7,255,197,3,8,254,171,3,9,255,169,3,10,254,201,3,11,254,252,3,12,254,225,3,13,255,155,3,14,255,163,3,15,254,164,3,16,254,164,3,17,254,164,3,18,255,0,4,5,241,244,4,6,219,43,4,7,252,0,4,8,197,0,4,9,170,0,4,10,169,0,4,11,208,48,4,12,254,237,4,13,235,100,4,14,155,0,4,15,163,0,4,16,164,0,4,17,164,0,4,18,164,0,5,4,209,255,5,5,169,189,5,6,231,0,5,13,251,215,6,4,247,255,6,5,228,113,6,13,252,252,6,14,212,0,7,4,229,255,7,5,253,172,7,12,171,255,7,13,239,245,7,14,249,0,8,5,255,255,8,6,223,181,8,11,163,255,8,12,255,255,8,13,217,165,8,14,229,0,9,5,220,205,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,225,197,9,13,255,8,10,6,194,76,10,7,255,127,10,8,254,156,10,9,255,155,10,10,254,126,10,11,255,56,10,12,255,0,10,13,174,0,11,9,156,0,11,10,155,0],"secondary":false},{"width":11,"bonus":425,"chr":"q","pixels":[1,7,217,255,1,8,249,255,1,9,249,255,1,10,221,255,2,5,235,255,2,6,255,255,2,7,237,230,2,8,244,186,2,9,253,176,2,10,254,210,2,11,255,255,2,12,249,247,3,4,179,255,3,5,243,253,3,6,240,68,3,7,255,0,3,8,214,0,3,9,178,0,3,10,175,0,3,11,219,66,3,12,255,239,3,13,251,190,4,4,241,255,4,5,218,151,4,6,241,0,4,12,157,208,4,13,254,246,4,14,187,0,5,4,241,255,5,5,247,106,5,13,248,248,5,14,245,0,6,4,175,255,6,5,250,168,6,12,154,255,6,13,206,216,6,14,241,0,7,5,245,235,7,6,213,161,7,12,221,255,7,13,167,50,7,14,175,0,8,4,189,255,8,5,239,253,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,251,251,8,13,254,252,8,14,255,255,8,15,255,255,8,16,255,255,8,17,255,255,9,4,163,255,9,5,231,181,9,6,248,168,9,7,254,164,9,8,254,164,9,9,254,164,9,10,254,164,9,11,254,164,9,12,254,164,9,13,251,166,9,14,253,165,9,15,254,164,9,16,254,164,9,17,254,164,9,18,255,0,10,5,164,0,10,6,164,0,10,7,164,0,10,8,164,0,10,9,164,0,10,10,164,0,10,11,164,0,10,12,164,0,10,13,164,0,10,14,164,0,10,15,164,0,10,16,164,0,10,17,164,0,10,18,164,0],"secondary":false},{"width":8,"bonus":180,"chr":"r","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,5,255,169,3,6,255,255,3,7,254,213,3,8,255,169,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,5,245,249,4,6,198,111,4,7,255,0,4,8,212,0,4,9,169,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,4,199,255,5,5,170,220,5,6,240,0,6,4,247,255,6,5,220,112,7,5,250,61],"secondary":false},{"width":9,"bonus":235,"chr":"s","pixels":[1,5,173,255,1,6,241,255,1,7,193,255,1,12,231,255,2,5,250,255,2,6,231,198,2,7,255,247,2,8,238,199,2,13,251,217,3,4,221,255,3,5,201,174,3,6,250,0,3,7,208,119,3,8,255,255,3,9,199,62,3,13,249,248,3,14,214,0,4,4,247,255,4,5,233,104,4,8,238,243,4,9,254,156,4,13,248,251,4,14,242,0,5,4,233,255,5,5,251,119,5,9,254,248,5,10,170,54,5,12,155,255,5,13,229,237,5,14,244,0,6,4,191,255,6,5,249,189,6,9,249,249,6,10,254,231,6,11,195,242,6,12,255,255,6,13,203,154,6,14,213,0,7,5,216,118,7,6,184,0,7,10,253,225,7,11,254,246,7,12,229,180,7,13,255,7,8,11,223,0,8,12,245,0,8,13,162,0],"secondary":false},{"width":8,"bonus":205,"chr":"t","pixels":[1,4,187,255,2,4,255,255,2,5,239,208,2,6,195,214,2,7,163,255,2,8,163,255,2,9,163,255,2,10,163,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,164,190,4,3,255,0,4,4,255,255,4,5,254,88,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,24,4,12,255,187,4,13,254,225,5,4,255,255,5,5,254,88,5,13,253,250,5,14,224,0,6,4,255,255,6,5,254,88,6,13,231,242,6,14,248,0,7,5,255,0,7,14,219,0],"secondary":false},{"width":11,"bonus":320,"chr":"u","pixels":[1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,253,255,1,11,231,255,2,4,163,255,2,5,254,164,2,6,254,164,2,7,254,164,2,8,254,164,2,9,254,164,2,10,254,171,2,11,254,219,2,12,255,255,2,13,206,172,3,5,164,0,3,6,164,0,3,7,164,0,3,8,164,0,3,9,164,0,3,10,164,0,3,11,170,2,3,12,243,184,3,13,254,225,4,13,252,251,4,14,224,0,5,13,229,237,5,14,248,0,6,12,231,255,6,13,172,141,6,14,213,0,7,4,163,255,7,5,163,255,7,6,163,255,7,7,163,255,7,8,163,255,7,9,167,255,7,10,197,255,7,11,251,255,7,12,223,249,7,13,242,114,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,9,5,255,0,9,6,255,0,9,7,255,0,9,8,255,0,9,9,255,0,9,10,255,0,9,11,255,0,9,12,255,0,9,13,255,0,9,14,255,0],"secondary":false},{"width":9,"bonus":230,"chr":"v","pixels":[0,4,209,255,1,4,221,255,1,5,255,255,1,6,253,253,1,7,192,246,2,5,229,62,2,6,255,145,2,7,255,231,2,8,255,255,2,9,247,251,2,10,164,249,3,8,237,71,3,9,255,155,3,10,254,237,3,11,255,255,3,12,233,247,4,10,156,5,4,11,243,98,4,12,255,227,4,13,255,255,5,10,203,255,5,11,255,255,5,12,249,251,5,13,246,172,5,14,255,0,6,7,197,255,6,8,253,255,6,9,254,255,6,10,221,221,6,11,224,112,6,12,255,14,6,13,246,0,6,14,166,0,7,4,185,255,7,5,251,255,7,6,255,255,7,7,233,238,7,8,225,141,7,9,254,32,7,10,254,0,7,11,192,0,8,4,237,255,8,5,225,170,8,6,253,56,8,7,255,0,8,8,218,0],"secondary":false},{"width":14,"bonus":430,"chr":"w","pixels":[0,4,171,255,1,4,241,255,1,5,255,255,1,6,255,255,1,7,227,251,1,8,155,255,2,5,244,55,2,6,255,116,2,7,255,179,2,8,253,241,2,9,255,255,2,10,254,255,2,11,213,251,3,8,180,3,3,9,243,51,3,10,255,110,3,11,254,170,3,12,252,247,3,13,255,255,4,10,198,237,4,11,247,250,4,12,254,255,4,13,253,205,4,14,255,0,5,7,213,255,5,8,255,255,5,9,250,254,5,10,214,218,5,11,213,125,5,12,243,28,5,13,254,0,5,14,203,0,6,4,233,255,6,5,254,255,6,6,224,245,6,7,208,191,6,8,227,95,6,9,255,13,6,10,249,0,6,11,183,0,7,4,253,255,7,5,254,248,7,6,254,186,7,7,234,133,7,8,176,72,8,5,255,100,8,6,252,177,8,7,252,246,8,8,255,255,8,9,234,250,8,10,157,255,9,7,177,9,9,8,246,72,9,9,254,144,9,10,251,219,9,11,255,255,9,12,251,254,9,13,192,251,10,10,176,110,10,11,239,165,10,12,254,245,10,13,255,255,10,14,189,0,11,8,207,255,11,9,253,255,11,10,255,255,11,11,242,250,11,12,221,196,11,13,249,105,11,14,255,0,12,4,205,255,12,5,253,255,12,6,255,255,12,7,250,253,12,8,226,213,12,9,230,134,12,10,253,52,12,11,255,2,12,12,237,0,12,13,170,0,13,4,209,255,13,5,233,154,13,6,253,71,13,7,255,10,13,8,248,0,13,9,189,0],"secondary":false},{"width":10,"bonus":260,"chr":"x","pixels":[1,4,249,255,1,12,166,255,1,13,255,255,2,4,155,255,2,5,255,255,2,6,229,227,2,11,229,255,2,12,246,254,2,13,205,140,2,14,255,0,3,5,182,97,3,6,254,225,3,7,253,250,3,9,155,255,3,10,255,255,3,11,213,235,3,12,232,41,3,13,246,0,4,7,244,177,4,8,255,255,4,9,255,255,4,10,204,155,4,11,255,2,4,12,196,0,5,7,242,255,5,8,246,238,5,9,255,245,5,10,254,222,5,11,157,105,6,5,190,255,6,6,255,255,6,7,199,207,6,8,243,17,6,9,233,41,6,10,253,201,6,11,254,255,6,12,177,217,7,4,245,255,7,5,236,252,7,6,211,97,7,7,255,0,7,8,162,0,7,11,226,139,7,12,254,251,7,13,242,236,8,4,172,255,8,5,245,22,8,6,233,0,8,13,254,212,8,14,224,0,9,5,172,0,9,14,211,0],"secondary":false},{"width":9,"bonus":310,"chr":"y","pixels":[0,4,241,255,0,5,154,248,0,17,231,255,1,4,179,255,1,5,254,252,1,6,255,255,1,7,210,243,1,17,249,251,1,18,231,0,2,5,186,35,2,6,254,119,2,7,255,215,2,8,255,255,2,9,245,249,2,16,219,255,2,17,218,224,2,18,245,0,3,8,224,64,3,9,255,152,3,10,253,238,3,11,255,255,3,12,207,243,3,14,158,255,3,15,247,255,3,16,236,252,3,17,227,54,3,18,192,0,4,10,160,33,4,11,248,159,4,12,255,253,4,13,255,255,4,14,248,251,4,15,213,173,4,16,249,27,4,17,234,0,5,9,179,255,5,10,249,255,5,11,255,255,5,12,230,214,5,13,254,97,5,14,255,12,5,15,244,0,6,6,161,255,6,7,241,255,6,8,255,255,6,9,235,244,6,10,218,152,6,11,250,36,6,12,255,0,6,13,193,0,7,4,231,255,7,5,255,255,7,6,248,252,7,7,222,190,7,8,246,71,7,9,255,2,7,10,225,0,8,4,199,255,8,5,241,108,8,6,255,15,8,7,246,0,8,8,165,0],"secondary":false},{"width":9,"bonus":260,"chr":"z","pixels":[1,4,255,255,1,12,193,255,1,13,255,255,2,4,255,255,2,5,254,88,2,11,241,255,2,12,230,252,2,13,255,255,2,14,255,0,3,4,255,255,3,5,254,88,3,9,179,255,3,10,249,255,3,11,168,171,3,12,246,92,3,13,255,255,3,14,255,0,4,4,255,255,4,5,254,88,4,8,235,255,4,9,222,252,4,10,194,67,4,11,249,0,4,12,161,139,4,13,255,255,4,14,255,0,5,4,255,255,5,5,255,104,5,6,195,214,5,7,255,255,5,8,194,217,5,9,236,14,5,10,219,0,5,13,255,255,5,14,255,0,6,4,255,255,6,5,255,251,6,6,248,251,6,7,198,125,6,8,255,0,6,9,165,0,6,13,255,255,6,14,255,0,7,4,255,255,7,5,255,209,7,6,252,41,7,7,244,0,7,13,255,255,7,14,255,0,8,5,255,0,8,6,209,0,8,14,255,0],"secondary":false},{"width":12,"bonus":345,"chr":"A","pixels":[0,13,207,255,1,10,166,255,1,11,247,255,1,12,255,255,1,13,232,237,1,14,207,0,2,8,223,255,2,9,255,255,2,10,252,254,2,11,226,196,2,12,249,68,2,13,255,0,2,14,216,0,3,5,185,255,3,6,253,255,3,7,255,255,3,8,239,239,3,9,255,255,3,10,255,93,3,11,252,0,3,12,174,0,4,3,235,255,4,4,255,255,4,5,238,246,4,6,224,160,4,7,253,49,4,8,255,36,4,9,255,255,4,10,255,84,5,1,255,255,5,2,252,254,5,3,209,181,5,4,240,65,5,5,255,2,5,6,229,0,5,9,255,255,5,10,255,84,6,1,172,255,6,2,254,251,6,3,255,251,6,4,226,212,6,9,255,255,6,10,255,84,7,2,178,30,7,3,252,114,7,4,254,213,7,5,255,255,7,6,251,254,7,7,184,248,7,9,255,255,7,10,255,84,8,5,221,62,8,6,255,153,8,7,255,241,8,8,255,255,8,9,255,255,8,10,254,186,9,7,157,17,9,8,245,97,9,9,254,192,9,10,254,255,9,11,255,255,9,12,220,243,10,10,200,44,10,11,254,133,10,12,254,228,10,13,255,255,11,13,236,80,11,14,255,0],"secondary":false},{"width":12,"bonus":475,"chr":"B","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,255,171,3,7,255,255,3,8,254,189,3,9,254,164,3,10,254,164,3,11,254,164,3,12,255,195,3,13,255,255,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,171,30,4,7,255,255,4,8,255,68,4,9,188,0,4,10,164,0,4,11,164,0,4,12,195,115,4,13,255,255,4,14,255,0,5,1,255,255,5,2,254,88,5,7,255,255,5,8,255,68,5,13,255,255,5,14,255,0,6,1,245,255,6,2,255,105,6,7,255,255,6,8,254,76,6,13,253,253,6,14,255,0,7,1,219,255,7,2,251,152,7,7,255,255,7,8,255,108,7,13,236,244,7,14,252,0,8,1,158,255,8,2,253,246,8,3,181,108,8,6,207,255,8,7,205,231,8,8,255,205,8,12,219,255,8,13,215,210,8,14,226,0,9,2,250,246,9,3,255,255,9,4,255,255,9,5,255,255,9,6,221,246,9,7,212,32,9,8,250,240,9,9,248,228,9,10,180,251,9,11,231,255,9,12,254,255,9,13,227,65,9,14,177,0,10,3,248,135,10,4,255,155,10,5,255,115,10,6,255,15,10,7,214,0,10,9,251,208,10,10,254,248,10,11,242,227,10,12,238,94,10,13,254,0,11,5,155,0,11,10,205,0,11,11,247,0,11,12,216,0],"secondary":false},{"width":11,"bonus":290,"chr":"C","pixels":[1,5,191,255,1,6,231,255,1,7,251,255,1,8,239,255,1,9,202,255,2,3,217,255,2,4,255,255,2,5,241,244,2,6,236,196,2,7,247,173,2,8,254,182,2,9,253,229,2,10,255,255,2,11,248,248,3,2,221,255,3,3,235,251,3,4,229,89,3,5,255,1,3,6,231,0,3,7,182,0,3,8,167,0,3,9,181,0,3,10,234,72,3,11,254,221,3,12,255,247,4,2,247,255,4,3,227,45,4,4,231,0,4,12,253,243,4,13,252,159,5,1,205,255,5,2,200,195,5,3,247,0,5,12,159,235,5,13,253,225,5,14,157,0,6,1,239,255,6,2,225,113,6,3,153,0,6,13,252,252,6,14,224,0,7,1,243,255,7,2,246,108,7,13,248,251,7,14,249,0,8,1,219,255,8,2,251,151,8,13,233,240,8,14,244,0,9,1,158,255,9,2,251,231,9,12,185,255,9,13,208,198,9,14,220,0,10,2,171,52,10,3,228,0,10,13,185,0,10,14,161,0],"secondary":false},{"width":13,"bonus":445,"chr":"D","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,255,195,3,13,255,255,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,195,115,4,13,255,255,4,14,255,0,5,1,255,255,5,2,255,89,5,13,254,254,5,14,255,0,6,1,241,255,6,2,255,105,6,13,243,249,6,14,253,0,7,1,209,255,7,2,250,162,7,12,175,255,7,13,220,225,7,14,237,0,8,2,253,247,8,3,171,51,8,12,251,255,8,13,211,138,8,14,194,0,9,2,244,244,9,3,254,224,9,11,233,255,9,12,226,248,9,13,252,12,10,3,253,234,10,4,255,255,10,5,233,246,10,6,179,255,10,7,167,255,10,8,184,255,10,9,233,255,10,10,255,255,10,11,231,242,10,12,237,43,10,13,220,0,11,4,243,132,11,5,255,201,11,6,253,241,11,7,253,252,11,8,247,241,11,9,237,205,11,10,242,117,11,11,255,11,11,12,219,0,12,6,201,0,12,7,239,0,12,8,250,0,12,9,234,0,12,10,190,0],"secondary":false},{"width":10,"bonus":340,"chr":"E","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,255,171,3,7,255,255,3,8,254,189,3,9,254,164,3,10,254,164,3,11,254,164,3,12,255,195,3,13,255,255,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,171,30,4,7,255,255,4,8,255,68,4,9,188,0,4,10,164,0,4,11,164,0,4,12,195,115,4,13,255,255,4,14,255,0,5,1,255,255,5,2,254,88,5,7,255,255,5,8,255,68,5,13,255,255,5,14,255,0,6,1,255,255,6,2,254,88,6,7,255,255,6,8,255,68,6,13,255,255,6,14,255,0,7,1,255,255,7,2,254,88,7,7,255,255,7,8,255,68,7,13,255,255,7,14,255,0,8,1,255,255,8,2,254,88,8,7,230,252,8,8,255,60,8,13,255,255,8,14,255,0,9,2,255,19,9,8,228,0,9,14,255,0],"secondary":false},{"width":10,"bonus":295,"chr":"F","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,255,171,3,7,255,255,3,8,254,189,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,171,30,4,7,255,255,4,8,255,68,4,9,188,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,1,255,255,5,2,254,88,5,7,255,255,5,8,255,68,6,1,255,255,6,2,254,88,6,7,255,255,6,8,255,68,7,1,255,255,7,2,254,88,7,7,255,255,7,8,255,68,8,1,255,255,8,2,254,88,8,7,226,252,8,8,255,59,9,2,255,19,9,8,224,0],"secondary":false},{"width":13,"bonus":415,"chr":"G","pixels":[1,5,185,255,1,6,227,255,1,7,249,255,1,8,239,255,1,9,199,255,2,3,195,255,2,4,255,255,2,5,244,248,2,6,236,199,2,7,246,173,2,8,253,182,2,9,253,232,2,10,255,255,2,11,243,243,3,2,191,255,3,3,245,254,3,4,218,118,3,5,255,4,3,6,237,0,3,7,184,0,3,8,167,0,3,9,181,2,3,10,238,84,3,11,255,231,3,12,253,238,4,2,255,255,4,3,209,86,4,4,244,0,4,12,255,251,4,13,246,140,5,1,179,255,5,2,207,225,5,3,255,0,5,12,185,233,5,13,254,210,6,1,223,255,6,2,213,137,6,3,183,0,6,13,251,248,6,14,210,0,7,1,247,255,7,2,235,102,7,7,208,255,7,13,254,254,7,14,244,0,8,1,235,255,8,2,251,117,8,7,255,255,8,8,221,78,8,13,247,251,8,14,253,0,9,1,208,255,9,2,247,166,9,7,255,255,9,8,255,68,9,13,231,238,9,14,243,0,10,2,250,236,10,3,161,2,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,215,191,10,14,215,0,11,2,157,49,11,3,232,0,11,7,170,246,11,8,254,164,11,9,254,164,11,10,254,164,11,11,254,164,11,12,254,164,11,13,255,71,11,14,161,0,12,8,164,0,12,9,164,0,12,10,164,0,12,11,164,0,12,12,164,0,12,13,164,0],"secondary":false},{"width":14,"bonus":450,"chr":"H","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,163,255,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,255,171,3,7,255,255,3,8,254,189,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,171,30,4,7,255,255,4,8,255,68,4,9,188,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,7,255,255,5,8,255,68,6,7,255,255,6,8,255,68,7,7,255,255,7,8,255,68,8,7,255,255,8,8,255,68,9,7,255,255,9,8,255,68,10,1,163,255,10,2,163,255,10,3,163,255,10,4,163,255,10,5,163,255,10,6,171,255,10,7,255,255,10,8,254,189,10,9,188,222,10,10,163,255,10,11,163,255,10,12,163,255,10,13,163,255,11,1,255,255,11,2,255,255,11,3,255,255,11,4,255,255,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,164,0,12,2,255,0,12,3,255,0,12,4,255,0,12,5,255,0,12,6,255,0,12,7,255,0,12,8,255,0,12,9,255,0,12,10,255,0,12,11,255,0,12,12,255,0,12,13,255,0,12,14,255,0],"secondary":false},{"width":7,"bonus":250,"chr":"I","pixels":[1,1,253,255,1,13,253,255,2,1,255,255,2,2,254,189,2,3,171,244,2,4,163,255,2,5,163,255,2,6,163,255,2,7,163,255,2,8,163,255,2,9,163,255,2,10,163,255,2,11,163,255,2,12,185,255,2,13,255,255,2,14,254,0,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,0,4,1,255,255,4,2,255,56,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,254,52,4,13,255,255,4,14,255,0,5,1,253,255,5,2,255,10,5,13,253,255,5,14,255,0,6,2,253,0,6,14,253,0],"secondary":false},{"width":5,"bonus":255,"chr":"J","pixels":[0,16,255,255,0,17,255,57,1,15,159,255,1,16,251,255,1,17,255,17,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,206,156,2,17,251,0,3,1,163,255,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,255,161,3,14,255,133,3,15,255,61,3,16,255,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,161,0],"secondary":false},{"width":11,"bonus":385,"chr":"K","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,163,255,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,237,3,8,255,237,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,2,4,6,213,166,4,7,252,250,4,8,239,62,4,9,237,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,5,166,255,5,6,255,255,5,7,254,255,5,8,252,138,6,4,190,255,6,5,246,254,6,6,200,124,6,7,254,186,6,8,255,255,6,9,229,222,7,3,211,255,7,4,238,254,7,5,204,72,7,6,246,0,7,8,217,138,7,9,254,251,7,10,251,243,8,2,227,255,8,3,227,251,8,4,218,47,8,5,237,0,8,10,254,219,8,11,255,255,8,12,185,208,9,1,239,255,9,2,217,246,9,3,230,29,9,4,224,0,9,11,241,168,9,12,255,255,9,13,236,226,10,1,190,255,10,2,241,15,10,3,209,0,10,12,191,116,10,13,255,239,10,14,209,0],"secondary":false},{"width":10,"bonus":250,"chr":"L","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,163,255,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,255,207,3,13,255,255,3,14,255,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,206,148,4,13,255,255,4,14,255,0,5,13,255,255,5,14,255,0,6,13,255,255,6,14,255,0,7,13,255,255,7,14,255,0,8,13,255,255,8,14,255,0,9,13,156,111,9,14,255,0],"secondary":false},{"width":17,"bonus":640,"chr":"M","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,254,249,3,3,255,179,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,197,255,4,2,255,255,4,3,255,247,4,4,229,188,4,5,190,101,4,6,165,6,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,2,206,45,5,3,255,130,5,4,253,223,5,5,255,255,5,6,238,248,6,5,230,69,6,6,254,156,6,7,253,241,6,8,255,255,6,9,219,246,7,7,159,13,7,8,245,91,7,9,255,181,7,10,254,252,7,11,253,253,7,12,192,246,8,10,192,48,8,11,254,204,8,12,255,255,8,13,255,255,9,9,163,255,9,10,245,255,9,11,248,255,9,12,239,184,9,13,255,78,9,14,255,0,10,7,225,255,10,8,255,255,10,9,212,236,10,10,200,131,10,11,246,17,10,12,248,0,10,13,172,0,11,4,197,255,11,5,255,255,11,6,225,249,11,7,194,167,11,8,230,39,11,9,255,0,11,10,196,0,12,1,167,255,12,2,247,255,12,3,238,255,12,4,194,200,12,5,210,70,12,6,255,0,12,7,220,0,13,1,255,255,13,2,250,246,13,3,252,173,13,4,248,168,13,5,218,192,13,6,184,227,13,7,163,255,13,8,163,255,13,9,163,255,13,10,163,255,13,11,163,255,13,12,163,255,13,13,163,255,14,1,255,255,14,2,255,255,14,3,255,255,14,4,255,255,14,5,255,255,14,6,255,255,14,7,255,255,14,8,255,255,14,9,255,255,14,10,255,255,14,11,255,255,14,12,255,255,14,13,255,255,14,14,164,0,15,2,255,0,15,3,255,0,15,4,255,0,15,5,255,0,15,6,255,0,15,7,255,0,15,8,255,0,15,9,255,0,15,10,255,0,15,11,255,0,15,12,255,0,15,13,255,0,15,14,255,0],"secondary":false},{"width":14,"bonus":480,"chr":"N","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,255,3,3,254,210,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,2,255,225,4,3,255,253,4,4,237,166,4,5,171,30,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,3,240,135,5,4,255,245,5,5,249,245,6,5,251,170,6,6,255,255,6,7,230,234,7,6,188,82,7,7,255,205,7,8,255,255,7,9,194,226,8,8,225,113,8,9,255,233,8,10,252,248,9,10,245,145,9,11,255,249,9,12,239,239,10,1,163,255,10,2,163,255,10,3,163,255,10,4,163,255,10,5,163,255,10,6,163,255,10,7,163,255,10,8,163,255,10,9,163,255,10,10,168,248,10,11,229,223,10,12,255,255,10,13,255,255,11,1,255,255,11,2,255,255,11,3,255,255,11,4,255,255,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,0,12,2,255,0,12,3,255,0,12,4,255,0,12,5,255,0,12,6,255,0,12,7,255,0,12,8,255,0,12,9,255,0,12,10,255,0,12,11,255,0,12,12,255,0,12,13,255,0,12,14,255,0],"secondary":false},{"width":14,"bonus":405,"chr":"O","pixels":[1,5,201,255,1,6,239,255,1,7,251,255,1,8,239,255,1,9,199,255,2,3,235,255,2,4,255,255,2,5,239,239,2,6,239,191,2,7,249,171,2,8,253,181,2,9,253,227,2,10,255,255,2,11,245,245,3,2,239,255,3,3,225,244,3,4,239,65,3,5,255,0,3,6,224,0,3,7,179,0,3,8,167,0,3,9,180,0,3,10,232,69,3,11,254,219,3,12,253,241,4,2,241,253,4,3,242,27,4,4,216,0,4,12,253,243,4,13,249,146,5,1,213,255,5,2,207,180,5,3,240,0,5,12,158,236,5,13,253,217,6,1,243,255,6,2,230,110,6,13,251,249,6,14,215,0,7,1,245,255,7,2,248,101,7,13,249,251,7,14,246,0,8,1,213,255,8,2,250,144,8,13,230,239,8,14,246,0,9,2,252,240,9,12,237,255,9,13,204,175,9,14,215,0,10,2,247,245,10,3,251,215,10,11,213,255,10,12,237,254,10,13,240,26,11,3,253,233,11,4,255,255,11,5,230,247,11,6,179,255,11,7,167,255,11,8,181,255,11,9,223,255,11,10,255,255,11,11,235,249,11,12,222,63,11,13,236,0,12,4,243,128,12,5,255,197,12,6,253,239,12,7,254,252,12,8,249,243,12,9,238,210,12,10,238,129,12,11,255,16,12,12,229,0,13,6,197,0,13,7,237,0,13,8,251,0,13,9,237,0,13,10,196,0],"secondary":false},{"width":11,"bonus":360,"chr":"P","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,255,171,3,8,255,255,3,9,254,189,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,171,30,4,8,255,255,4,9,255,68,4,10,188,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,1,251,255,5,2,255,97,5,8,255,255,5,9,255,61,6,1,231,255,6,2,253,136,6,8,255,255,6,9,255,33,7,1,173,255,7,2,253,237,7,7,193,255,7,8,227,244,7,9,255,0,8,2,254,252,8,3,254,245,8,4,195,244,8,5,181,255,8,6,235,255,8,7,253,255,8,8,211,93,8,9,217,0,9,3,254,197,9,4,254,246,9,5,252,247,9,6,237,209,9,7,240,74,9,8,253,0,10,4,196,0,10,5,246,0,10,6,244,0,10,7,194,0],"secondary":false},{"width":14,"bonus":440,"chr":"Q","pixels":[1,5,201,255,1,6,239,255,1,7,251,255,1,8,239,255,1,9,199,255,2,3,235,255,2,4,255,255,2,5,239,239,2,6,239,191,2,7,249,171,2,8,253,181,2,9,253,227,2,10,255,255,2,11,245,245,3,2,239,255,3,3,225,244,3,4,239,65,3,5,255,0,3,6,224,0,3,7,179,0,3,8,167,0,3,9,180,0,3,10,232,69,3,11,254,219,3,12,254,240,4,2,241,253,4,3,242,27,4,4,216,0,4,12,253,243,4,13,248,146,5,1,213,255,5,2,207,180,5,3,240,0,5,12,158,236,5,13,253,217,6,1,243,255,6,2,230,110,6,13,251,249,6,14,215,0,7,1,245,255,7,2,248,101,7,13,255,255,7,14,248,43,8,1,213,255,8,2,250,144,8,13,255,255,8,14,254,240,9,2,252,240,9,12,237,255,9,13,219,202,9,14,255,227,9,15,254,251,10,2,247,245,10,3,251,215,10,11,213,255,10,12,242,254,10,13,240,24,10,14,183,43,10,15,251,222,10,16,255,255,11,3,253,233,11,4,255,255,11,5,230,247,11,6,179,255,11,7,167,255,11,8,181,255,11,9,223,255,11,10,255,255,11,11,237,249,11,12,222,59,11,13,241,0,11,16,248,215,11,17,255,0,12,4,243,128,12,5,255,197,12,6,253,239,12,7,253,252,12,8,245,236,12,9,237,210,12,10,238,118,12,11,255,16,12,12,232,0,12,17,210,0,13,6,197,0,13,7,237,0,13,8,250,0,13,9,227,0,13,10,195,0],"secondary":false},{"width":11,"bonus":410,"chr":"R","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,3,1,255,255,3,2,255,195,3,3,254,164,3,4,254,164,3,5,254,164,3,6,255,171,3,7,255,255,3,8,254,189,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,255,0,4,1,255,255,4,2,254,88,4,3,195,0,4,4,164,0,4,5,164,0,4,6,171,30,4,7,255,255,4,8,255,68,4,9,188,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,5,1,253,255,5,2,255,92,5,7,255,255,5,8,255,68,6,1,237,255,6,2,254,119,6,7,255,255,6,8,255,202,7,1,191,255,7,2,252,214,7,6,157,255,7,7,226,248,7,8,254,219,7,9,255,255,7,10,208,233,8,2,255,255,8,3,249,231,8,4,178,251,8,5,211,255,8,6,255,255,8,7,188,109,8,8,220,6,8,9,234,121,8,10,255,237,8,11,255,255,8,12,196,234,9,2,155,173,9,3,254,221,9,4,254,249,9,5,242,225,9,6,228,103,9,7,255,0,9,11,247,146,9,12,255,249,9,13,254,255,10,4,220,0,10,5,248,0,10,6,214,0,10,12,156,57,10,13,253,174,10,14,254,0],"secondary":false},{"width":10,"bonus":310,"chr":"S","pixels":[1,3,227,255,1,4,243,255,1,5,193,255,1,12,233,255,1,13,154,255,2,2,255,255,2,3,228,234,2,4,248,190,2,5,255,245,2,6,253,247,2,12,156,254,2,13,251,219,2,14,154,0,3,1,190,255,3,2,209,232,3,3,255,3,3,4,210,0,3,5,198,67,3,6,255,251,3,7,251,170,3,13,251,249,3,14,216,0,4,1,233,255,4,2,217,125,4,3,190,0,4,6,180,227,4,7,254,251,4,8,176,32,4,13,252,253,4,14,245,0,5,1,245,255,5,2,242,106,5,7,255,255,5,8,252,122,5,13,235,243,5,14,250,0,6,1,223,255,6,2,251,137,6,7,217,243,6,8,255,237,6,12,211,255,6,13,211,208,6,14,224,0,7,1,171,255,7,2,249,214,7,8,254,255,7,9,253,235,7,10,182,243,7,11,223,255,7,12,252,254,7,13,221,58,7,14,172,0,8,2,202,120,8,3,209,0,8,9,254,221,8,10,254,250,8,11,241,223,8,12,234,85,8,13,252,0,9,10,220,0,9,11,249,0,9,12,211,0],"secondary":false},{"width":12,"bonus":275,"chr":"T","pixels":[1,1,255,255,2,1,255,255,2,2,254,88,3,1,255,255,3,2,254,88,4,1,255,255,4,2,254,88,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,6,1,255,255,6,2,255,195,6,3,254,164,6,4,254,164,6,5,254,164,6,6,254,164,6,7,254,164,6,8,254,164,6,9,254,164,6,10,254,164,6,11,254,164,6,12,254,164,6,13,254,164,6,14,255,0,7,1,255,255,7,2,254,88,7,3,195,0,7,4,164,0,7,5,164,0,7,6,164,0,7,7,164,0,7,8,164,0,7,9,164,0,7,10,164,0,7,11,164,0,7,12,164,0,7,13,164,0,7,14,164,0,8,1,255,255,8,2,254,88,9,1,255,255,9,2,254,88,10,1,255,255,10,2,254,88,11,2,255,0],"secondary":false},{"width":14,"bonus":410,"chr":"U","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,249,255,2,10,219,255,3,1,163,255,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,255,171,3,10,254,212,3,11,255,255,3,12,234,228,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,171,0,4,11,224,93,4,12,255,253,4,13,233,144,5,12,191,215,5,13,255,215,6,13,252,251,6,14,215,0,7,13,249,251,7,14,248,0,8,12,161,255,8,13,228,234,8,14,246,0,9,12,253,255,9,13,207,154,9,14,209,0,10,1,163,255,10,2,163,255,10,3,163,255,10,4,163,255,10,5,163,255,10,6,163,255,10,7,163,255,10,8,163,255,10,9,172,255,10,10,211,255,10,11,255,255,10,12,222,236,10,13,253,9,11,1,255,255,11,2,255,255,11,3,255,255,11,4,255,255,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,253,252,11,10,243,231,11,11,235,146,11,12,255,13,11,13,205,0,12,2,255,0,12,3,255,0,12,4,255,0,12,5,255,0,12,6,255,0,12,7,255,0,12,8,255,0,12,9,255,0,12,10,250,0,12,11,220,0],"secondary":false},{"width":11,"bonus":300,"chr":"V","pixels":[0,1,211,255,1,1,223,255,1,2,255,255,1,3,254,255,1,4,204,246,2,2,230,62,2,3,255,145,2,4,255,231,2,5,255,255,2,6,252,253,2,7,185,247,3,5,237,72,3,6,254,156,3,7,254,239,3,8,255,255,3,9,247,252,3,10,169,249,4,7,158,10,4,8,243,81,4,9,254,164,4,10,254,240,4,11,255,255,4,12,241,249,5,10,181,68,5,11,250,176,5,12,254,255,5,13,255,255,6,9,215,255,6,10,255,255,6,11,253,255,6,12,234,208,6,13,254,101,6,14,255,0,7,6,208,255,7,7,255,255,7,8,255,255,7,9,230,227,7,10,233,126,7,11,255,27,7,12,253,0,7,13,191,0,8,3,197,255,8,4,253,255,8,5,255,255,8,6,236,237,8,7,232,142,8,8,255,39,8,9,255,0,8,10,205,0,9,1,251,255,9,2,255,255,9,3,241,244,9,4,229,160,9,5,254,54,9,6,255,0,9,7,219,0,10,1,158,255,10,2,253,69,10,3,255,3,10,4,231,0],"secondary":false},{"width":17,"bonus":545,"chr":"W","pixels":[0,1,167,255,1,1,251,255,1,2,255,255,1,3,255,255,1,4,225,251,1,5,154,255,2,2,252,73,2,3,255,137,2,4,255,201,2,5,254,252,2,6,255,255,2,7,254,255,2,8,213,251,3,5,204,17,3,6,253,76,3,7,255,139,3,8,254,204,3,9,254,252,3,10,255,255,3,11,252,254,3,12,200,252,4,9,206,15,4,10,253,107,4,11,255,205,4,12,255,255,4,13,255,255,5,8,179,255,5,9,241,255,5,10,255,255,5,11,247,250,5,12,238,186,5,13,255,100,5,14,255,0,6,5,213,255,6,6,255,255,6,7,255,255,6,8,230,236,6,9,220,161,6,10,245,68,6,11,255,5,6,12,242,0,6,13,174,0,7,1,173,255,7,2,241,255,7,3,255,255,7,4,245,251,7,5,220,205,7,6,231,115,7,7,255,30,7,8,255,0,7,9,213,0,8,1,255,255,8,2,255,255,8,3,252,197,8,4,254,88,8,5,241,16,8,6,177,0,9,2,254,150,9,3,254,227,9,4,255,255,9,5,252,254,9,6,195,250,10,4,231,52,10,5,255,124,10,6,254,201,10,7,254,255,10,8,255,255,10,9,227,249,11,7,205,28,11,8,254,97,11,9,254,162,11,10,250,223,11,11,255,255,11,12,248,252,11,13,180,253,12,10,212,164,12,11,248,209,12,12,255,255,12,13,255,255,12,14,178,0,13,7,209,255,13,8,253,255,13,9,255,255,13,10,250,253,13,11,225,217,13,12,229,138,13,13,255,57,13,14,255,0,14,3,209,255,14,4,253,255,14,5,255,255,14,6,254,254,14,7,233,223,14,8,234,148,14,9,254,69,14,10,255,9,14,11,248,0,14,12,191,0,15,1,255,255,15,2,255,255,15,3,238,231,15,4,236,160,15,5,254,81,15,6,255,17,15,7,253,0,15,8,203,0,16,2,255,27,16,3,255,0,16,4,215,0],"secondary":false},{"width":11,"bonus":325,"chr":"X","pixels":[0,13,155,255,1,1,255,255,1,2,203,222,1,12,231,255,1,13,246,254,1,14,155,0,2,2,255,243,2,3,251,245,2,10,184,255,2,11,255,255,2,12,205,222,2,13,235,35,2,14,246,0,3,3,251,179,3,4,255,255,3,5,218,226,3,9,245,255,3,10,229,251,3,11,206,98,3,12,255,0,3,13,178,0,4,4,200,100,4,5,255,225,4,6,253,250,4,7,221,249,4,8,250,255,4,9,191,182,4,10,245,11,4,11,225,0,5,6,254,255,5,7,255,255,5,8,246,205,5,9,251,31,6,4,181,255,6,5,255,255,6,6,198,211,6,7,254,107,6,8,255,239,6,9,253,247,7,3,245,255,7,4,229,251,7,5,203,92,7,6,255,0,7,7,164,0,7,9,249,171,7,10,255,255,7,11,234,235,8,1,211,255,8,2,253,255,8,3,196,188,8,4,245,13,8,5,225,0,8,10,192,96,8,11,255,223,8,12,255,255,8,13,192,224,9,1,211,255,9,2,220,64,9,3,253,0,9,12,240,146,9,13,255,251,9,14,169,0,10,2,211,0,10,13,159,75,10,14,251,0],"secondary":false},{"width":10,"bonus":270,"chr":"Y","pixels":[0,1,241,255,1,1,189,255,1,2,255,255,1,3,243,242,2,2,206,82,2,3,254,198,2,4,255,255,2,5,234,239,3,4,214,89,3,5,254,207,3,6,255,255,3,7,224,236,4,6,222,95,4,7,254,231,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,5,6,179,255,5,7,255,255,5,8,252,224,5,9,254,164,5,10,254,164,5,11,254,164,5,12,254,164,5,13,254,164,5,14,255,0,6,4,166,255,6,5,253,255,6,6,237,251,6,7,211,131,6,8,255,5,6,9,221,0,6,10,164,0,6,11,164,0,6,12,164,0,6,13,164,0,6,14,164,0,7,2,154,255,7,3,251,255,7,4,245,253,7,5,210,154,7,6,253,12,7,7,233,0,8,1,247,255,8,2,250,255,8,3,212,177,8,4,251,23,8,5,243,0,9,1,166,255,9,2,248,36,9,3,250,0],"secondary":false},{"width":11,"bonus":350,"chr":"Z","pixels":[1,1,255,255,1,12,193,255,1,13,255,255,2,1,255,255,2,2,254,88,2,11,245,255,2,12,255,255,2,13,255,255,2,14,255,0,3,1,255,255,3,2,254,88,3,9,193,255,3,10,255,255,3,11,222,227,3,12,250,129,3,13,255,255,3,14,255,0,4,1,255,255,4,2,254,88,4,8,245,255,4,9,247,253,4,10,221,132,4,11,255,2,4,12,216,103,4,13,255,255,4,14,255,0,5,1,255,255,5,2,254,88,5,6,196,255,5,7,255,255,5,8,223,225,5,9,247,38,5,10,246,0,5,13,255,255,5,14,255,0,6,1,255,255,6,2,254,88,6,5,245,255,6,6,246,254,6,7,222,129,6,8,255,2,6,9,196,0,6,13,255,255,6,14,255,0,7,1,255,255,7,2,255,127,7,3,217,232,7,4,255,255,7,5,221,224,7,6,247,37,7,7,245,0,7,13,255,255,7,14,255,0,8,1,255,255,8,2,255,255,8,3,250,250,8,4,223,126,8,5,255,1,8,6,194,0,8,13,255,255,8,14,255,0,9,1,255,255,9,2,255,193,9,3,255,35,9,4,245,0,9,13,255,255,9,14,255,0,10,2,255,0,10,3,193,0,10,14,255,0],"secondary":false},{"width":10,"bonus":385,"chr":"0","pixels":[1,4,181,255,1,5,223,255,1,6,245,255,1,7,253,255,1,8,245,255,1,9,221,255,1,10,177,255,2,2,221,255,2,3,255,255,2,4,241,244,2,5,237,205,2,6,245,178,2,7,252,167,2,8,254,172,2,9,253,192,2,10,252,234,2,11,255,255,2,12,229,237,3,1,178,255,3,2,233,251,3,3,230,70,3,4,255,0,3,5,231,0,3,6,190,0,3,7,171,0,3,8,165,0,3,9,171,0,3,10,190,0,3,11,237,67,3,12,255,229,3,13,240,180,4,1,241,255,4,2,211,134,4,3,230,0,4,13,254,242,4,14,170,0,5,1,239,255,5,2,248,118,5,13,247,249,5,14,241,0,6,1,166,255,6,2,253,235,6,3,153,118,6,12,233,255,6,13,209,212,6,14,241,0,7,2,238,222,7,3,255,255,7,4,239,249,7,5,191,254,7,6,171,255,7,7,166,255,7,8,171,255,7,9,190,255,7,10,233,255,7,11,255,255,7,12,228,244,7,13,235,31,7,14,174,0,8,3,224,105,8,4,255,172,8,5,252,222,8,6,252,247,8,7,254,254,8,8,251,249,8,9,244,234,8,10,236,196,8,11,242,112,8,12,255,10,8,13,218,0,9,5,172,0,9,6,219,0,9,7,244,0,9,8,253,0,9,9,246,0,9,10,224,0,9,11,182,0],"secondary":false},{"width":10,"bonus":235,"chr":"1","pixels":[2,3,209,255,3,2,167,255,3,3,236,255,3,4,216,41,4,2,243,255,4,3,187,79,4,4,236,0,5,1,251,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,6,1,163,255,6,2,253,165,6,3,254,164,6,4,254,164,6,5,254,164,6,6,254,164,6,7,254,164,6,8,254,164,6,9,254,164,6,10,254,164,6,11,254,164,6,12,254,164,6,13,254,164,6,14,255,0,7,2,164,0,7,3,164,0,7,4,164,0,7,5,164,0,7,6,164,0,7,7,164,0,7,8,164,0,7,9,164,0,7,10,164,0,7,11,164,0,7,12,164,0,7,13,164,0,7,14,164,0],"secondary":false},{"width":10,"bonus":305,"chr":"2","pixels":[1,12,185,255,1,13,255,255,2,2,254,255,2,3,177,95,2,11,199,255,2,12,255,255,2,13,255,255,2,14,255,0,3,1,197,255,3,2,201,211,3,3,254,0,3,10,209,255,3,11,238,254,3,12,230,156,3,13,255,255,3,14,255,0,4,1,243,255,4,2,219,115,4,3,166,0,4,9,221,255,4,10,234,253,4,11,218,53,4,12,242,92,4,13,255,255,4,14,255,0,5,1,231,255,5,2,248,124,5,8,233,255,5,9,228,250,5,10,226,42,5,11,232,0,5,13,255,255,5,14,255,0,6,1,173,255,6,2,252,236,6,3,155,107,6,7,251,255,6,8,217,241,6,9,235,27,6,10,224,0,6,13,255,255,6,14,255,0,7,2,249,241,7,3,255,255,7,4,255,255,7,5,255,255,7,6,253,255,7,7,209,183,7,8,251,8,7,9,205,0,7,13,255,255,7,14,255,0,8,3,245,133,8,4,255,155,8,5,255,121,8,6,255,38,8,7,253,0,8,13,255,255,8,14,255,0,9,5,155,0,9,14,255,0],"secondary":false},{"width":10,"bonus":295,"chr":"3","pixels":[1,2,173,255,1,12,249,255,2,2,230,252,2,3,174,7,2,12,178,243,2,13,254,208,3,1,213,255,3,2,201,179,3,3,228,0,3,6,255,255,3,13,250,244,3,14,207,0,4,1,245,255,4,2,230,114,4,6,255,255,4,7,255,81,4,13,253,253,4,14,239,0,5,1,233,255,5,2,250,114,5,6,252,254,5,7,255,123,5,13,239,245,5,14,251,0,6,1,185,255,6,2,251,219,6,5,211,255,6,6,185,213,6,7,254,227,6,12,239,255,6,13,211,198,6,14,230,0,7,2,254,252,7,3,255,255,7,4,255,255,7,5,215,247,7,6,214,17,7,7,240,231,7,8,253,241,7,9,188,245,7,10,191,255,7,11,249,255,7,12,245,253,7,13,242,42,7,14,164,0,8,3,253,145,8,4,255,124,8,5,255,16,8,6,208,0,8,8,243,188,8,9,254,240,8,10,250,244,8,11,236,194,8,12,250,46,8,13,243,0,9,9,180,0,9,10,240,0,9,11,240,0,9,12,179,0],"secondary":false},{"width":10,"bonus":355,"chr":"4","pixels":[1,9,184,255,1,10,255,255,2,8,241,255,2,9,223,251,2,10,255,255,2,11,255,84,3,6,187,255,3,7,246,254,3,8,172,172,3,9,244,41,3,10,255,255,3,11,255,84,4,5,243,255,4,6,199,244,4,7,197,45,4,8,246,0,4,10,255,255,4,11,255,84,5,3,193,255,5,4,240,254,5,5,166,154,5,6,244,1,5,7,190,0,5,10,255,255,5,11,255,84,6,2,235,255,6,3,163,233,6,4,199,31,6,5,240,0,6,10,255,255,6,11,255,84,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,7,13,255,255,8,1,163,255,8,2,254,164,8,3,254,164,8,4,254,164,8,5,254,164,8,6,254,164,8,7,254,164,8,8,254,164,8,9,254,177,8,10,255,255,8,11,254,195,8,12,254,164,8,13,254,164,8,14,255,0,9,2,164,0,9,3,164,0,9,4,164,0,9,5,164,0,9,6,164,0,9,7,164,0,9,8,164,0,9,9,177,52,9,10,255,255,9,11,255,84,9,12,194,0,9,13,164,0,9,14,164,0],"secondary":false},{"width":10,"bonus":290,"chr":"5","pixels":[1,5,159,255,1,6,178,255,1,12,227,255,2,1,255,255,2,2,255,255,2,3,254,254,2,4,243,245,2,5,234,228,2,6,253,253,2,7,210,130,2,13,251,221,3,1,255,255,3,2,255,101,3,3,255,3,3,4,253,0,3,5,233,3,3,6,254,252,3,7,252,78,3,13,252,253,3,14,218,0,4,1,255,255,4,2,254,88,4,6,255,255,4,7,253,84,4,13,251,253,4,14,250,0,5,1,255,255,5,2,254,88,5,6,238,255,5,7,255,142,5,12,159,255,5,13,231,238,5,14,249,0,6,1,255,255,6,2,254,88,6,6,163,255,6,7,254,249,6,8,186,135,6,12,253,255,6,13,207,159,6,14,215,0,7,1,179,255,7,2,255,61,7,7,245,239,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,221,221,7,13,253,8,8,2,180,0,8,8,241,124,8,9,255,157,8,10,255,145,8,11,255,80,8,12,255,2,8,13,192,0,9,10,157,0],"secondary":false},{"width":10,"bonus":365,"chr":"6","pixels":[1,5,185,255,1,6,227,255,1,7,245,255,1,8,251,255,1,9,239,255,1,10,197,255,2,3,241,255,2,4,255,255,2,5,235,238,2,6,234,195,2,7,251,227,2,8,254,234,2,9,254,176,2,10,251,207,2,11,255,255,2,12,232,235,3,2,251,255,3,3,211,234,3,4,244,46,3,5,255,0,3,6,233,113,3,7,242,225,3,8,226,20,3,9,233,0,3,10,175,0,3,11,215,65,3,12,254,239,3,13,240,171,4,1,167,255,4,2,226,250,4,3,251,7,4,4,194,0,4,6,235,255,4,7,163,158,4,8,214,0,4,13,254,238,4,14,161,0,5,1,233,255,5,2,210,153,5,3,222,0,5,6,255,255,5,7,241,92,5,13,251,251,5,14,237,0,6,1,253,255,6,2,240,100,6,6,234,254,6,7,254,189,6,12,213,255,6,13,221,228,6,14,247,0,7,1,229,255,7,2,254,109,7,7,255,255,7,8,248,236,7,9,177,252,7,10,187,255,7,11,243,255,7,12,251,255,7,13,221,60,7,14,197,0,8,2,230,0,8,7,156,145,8,8,255,211,8,9,254,250,8,10,250,244,8,11,235,193,8,12,244,48,8,13,251,0,9,9,211,0,9,10,249,0,9,11,239,0,9,12,178,0],"secondary":false},{"width":10,"bonus":240,"chr":"7","pixels":[1,1,255,255,2,1,255,255,2,2,254,88,3,1,255,255,3,2,254,88,3,12,193,255,3,13,255,255,4,1,255,255,4,2,254,88,4,10,233,255,4,11,255,255,4,12,234,243,4,13,223,141,4,14,255,0,5,1,255,255,5,2,254,88,5,7,179,255,5,8,253,255,5,9,251,255,5,10,216,204,5,11,239,76,5,12,255,1,5,13,223,0,6,1,255,255,6,2,254,88,6,5,221,255,6,6,255,255,6,7,231,244,6,8,215,143,6,9,253,24,6,10,251,0,6,11,173,0,7,1,255,255,7,2,255,208,7,3,250,253,7,4,250,255,7,5,211,208,7,6,231,76,7,7,255,1,7,8,221,0,8,1,255,255,8,2,254,221,8,3,229,134,8,4,248,24,8,5,250,0,8,6,172,0,9,2,255,0,9,3,220,0],"secondary":false},{"width":10,"bonus":375,"chr":"8","pixels":[1,9,199,255,1,10,247,255,1,11,225,255,2,2,247,255,2,3,255,255,2,4,255,255,2,5,255,255,2,8,247,255,2,9,233,247,2,10,237,186,2,11,254,216,2,12,255,255,2,13,157,150,3,1,187,255,3,2,221,245,3,3,248,37,3,4,255,17,3,5,255,143,3,6,255,253,3,7,235,238,3,8,190,232,3,9,248,6,3,10,226,0,3,11,173,4,3,12,244,195,3,13,255,203,4,1,237,255,4,2,215,126,4,3,212,0,4,6,229,219,4,7,254,240,4,8,222,17,4,9,173,0,4,13,250,244,4,14,203,0,5,1,237,255,5,2,245,111,5,6,194,255,5,7,254,255,5,8,243,55,5,13,244,248,5,14,240,0,6,1,185,255,6,2,252,215,6,6,239,255,6,7,241,206,6,8,255,213,6,12,197,255,6,13,219,225,6,14,238,0,7,2,252,248,7,3,255,255,7,4,255,255,7,5,254,255,7,6,185,125,7,7,241,37,7,8,250,240,7,9,251,237,7,10,181,248,7,11,223,255,7,12,255,255,7,13,214,86,7,14,193,0,8,3,250,148,8,4,255,142,8,5,255,57,8,6,254,0,8,9,251,193,8,10,254,246,8,11,243,228,8,12,233,88,8,13,255,0,9,10,190,0,9,11,245,0,9,12,217,0],"secondary":false},{"width":10,"bonus":375,"chr":"9","pixels":[1,3,172,255,1,4,237,255,1,5,245,255,1,6,211,255,2,2,249,255,2,3,245,254,2,4,233,206,2,5,249,177,2,6,254,220,2,7,255,255,2,8,200,195,2,13,231,255,3,1,195,255,3,2,223,244,3,3,250,23,3,4,244,0,3,5,188,0,3,6,173,2,3,7,239,153,3,8,255,255,3,9,164,44,3,13,254,254,3,14,232,0,4,1,247,255,4,2,221,125,4,3,214,0,4,8,255,255,4,9,255,61,4,13,241,247,4,14,253,0,5,1,235,255,5,2,250,121,5,8,254,255,5,9,255,28,5,12,213,255,5,13,209,207,5,14,234,0,6,1,157,255,6,2,254,243,6,3,154,110,6,7,181,255,6,8,171,221,6,9,254,0,6,11,181,255,6,12,252,254,6,13,220,49,6,14,170,0,7,2,237,225,7,3,255,255,7,4,221,242,7,5,173,255,7,6,225,255,7,7,238,255,7,8,235,201,7,9,237,229,7,10,253,255,7,11,243,253,7,12,203,95,7,13,252,0,8,3,229,121,8,4,254,192,8,5,252,240,8,6,254,252,8,7,254,244,8,8,252,226,8,9,234,196,8,10,232,123,8,11,254,18,8,12,241,0,9,5,192,0,9,6,237,0,9,7,251,0,9,8,243,0,9,9,224,0,9,10,180,0],"secondary":false},{"width":15,"bonus":500,"chr":"%","pixels":[1,3,155,255,1,4,227,255,1,5,249,255,1,6,229,255,1,7,167,255,2,2,187,255,2,3,250,255,2,4,230,212,2,5,245,174,2,6,253,183,2,7,253,244,2,8,244,233,3,2,251,255,3,3,214,120,3,4,250,0,3,5,191,0,3,6,168,0,3,7,196,67,3,8,255,255,3,9,229,56,4,2,237,255,4,3,253,168,4,8,255,255,4,9,255,33,4,12,169,255,4,13,239,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,211,203,5,9,255,15,5,11,243,255,5,12,162,235,5,13,176,30,5,14,240,0,6,4,255,129,6,5,255,155,6,6,255,137,6,7,255,80,6,8,255,108,6,9,247,241,6,10,185,249,6,11,157,68,6,12,244,0,7,6,184,103,7,7,235,231,7,8,223,239,7,10,234,0,7,11,181,0,8,5,185,255,8,6,231,255,8,8,223,72,8,9,233,150,8,10,182,218,9,3,155,255,9,4,241,255,9,6,189,16,9,7,241,113,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,10,2,241,255,10,3,169,243,10,4,165,42,10,5,242,0,10,7,219,253,10,8,187,189,10,9,255,20,10,10,255,4,10,11,255,28,10,12,255,172,10,13,254,225,11,3,241,0,11,4,161,0,11,7,231,255,11,8,229,89,11,13,250,244,11,14,224,0,12,7,155,255,12,8,254,249,12,9,208,230,12,10,169,255,12,11,197,255,12,12,253,255,12,13,209,204,12,14,239,0,13,8,209,169,13,9,254,222,13,10,253,250,13,11,245,237,13,12,231,167,13,13,253,16,13,14,168,0,14,10,222,0,14,11,248,0,14,12,228,0],"secondary":false},{"width":8,"bonus":225,"chr":"/","pixels":[1,14,155,255,1,15,221,255,1,16,255,255,2,11,215,255,2,12,255,255,2,13,255,255,2,14,236,244,2,15,218,188,2,16,235,105,2,17,255,0,3,7,208,255,3,8,253,255,3,9,255,255,3,10,239,246,3,11,218,194,3,12,231,111,3,13,255,36,3,14,255,0,3,15,226,0,3,16,161,0,4,3,201,255,4,4,251,255,4,5,255,255,4,6,241,249,4,7,218,200,4,8,228,119,4,9,254,41,4,10,255,0,4,11,231,0,4,12,166,0,5,0,249,255,5,1,255,255,5,2,243,251,5,3,218,207,5,4,224,127,5,5,252,46,5,6,255,1,5,7,235,0,5,8,171,0,6,0,222,135,6,1,250,52,6,2,255,2,6,3,239,0,6,4,177,0,7,0,182,0],"secondary":false},{"width":10,"bonus":175,"chr":"+","pixels":[1,7,255,255,2,7,255,255,2,8,255,68,3,7,255,255,3,8,255,68,4,4,163,255,4,5,163,255,4,6,171,255,4,7,255,255,4,8,254,189,4,9,188,222,4,10,163,255,4,11,163,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,164,0,6,5,255,0,6,6,255,20,6,7,255,255,6,8,255,68,6,9,255,0,6,10,255,0,6,11,255,0,6,12,255,0,7,7,255,255,7,8,255,68,8,7,255,255,8,8,255,68,9,8,255,0],"secondary":false},{"width":9,"bonus":185,"chr":"?","pixels":[2,1,159,255,2,2,213,242,3,1,217,255,3,2,206,156,3,3,202,0,3,11,159,255,3,12,249,255,3,13,196,255,4,1,245,255,4,2,232,109,4,7,235,255,4,8,159,235,4,9,161,74,4,12,218,184,4,13,251,109,4,14,196,0,5,1,215,255,5,2,252,169,5,6,221,255,5,7,168,232,5,8,235,0,5,13,157,0,6,2,255,255,6,3,236,217,6,4,177,255,6,5,243,255,6,6,207,248,6,7,222,8,7,2,193,180,7,3,255,227,7,4,251,243,7,5,227,183,7,6,244,17,7,7,201,0,8,4,227,0,8,5,240,0,8,6,163,0],"secondary":false},{"width":7,"bonus":175,"chr":"!","pixels":[3,1,163,255,3,2,163,255,3,3,163,255,3,4,163,255,3,5,163,255,3,6,163,255,3,7,163,255,3,8,163,255,3,9,163,255,3,12,247,255,3,13,184,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,164,0,4,12,252,250,4,13,253,186,4,14,184,0,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,13,247,0,5,14,184,0],"secondary":false},{"width":16,"bonus":695,"chr":"@","pixels":[1,6,181,255,1,7,221,255,1,8,247,255,1,9,241,255,1,10,205,255,2,4,219,255,2,5,255,255,2,6,242,248,2,7,236,207,2,8,243,178,2,9,253,181,2,10,253,225,2,11,255,255,2,12,247,247,3,3,249,255,3,4,226,247,3,5,230,83,3,6,255,4,3,7,236,0,3,8,192,0,3,9,170,0,3,10,179,0,3,11,231,70,3,12,254,221,3,13,254,246,4,2,223,255,4,3,212,242,4,4,249,11,4,5,219,0,4,8,157,255,4,13,252,236,4,14,252,173,5,2,250,255,5,3,228,34,5,4,203,10,5,5,185,251,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,174,215,5,14,254,248,5,15,173,11,6,1,185,255,6,2,204,215,6,3,250,0,6,4,154,233,6,5,250,255,6,6,215,138,6,7,255,30,6,8,255,6,6,9,255,30,6,10,254,162,6,11,255,255,6,12,159,46,6,14,255,255,6,15,248,47,7,1,223,255,7,2,218,138,7,3,172,0,7,4,229,255,7,5,201,170,7,6,250,0,7,11,255,255,7,12,255,55,7,14,255,255,7,15,255,62,8,1,247,255,8,2,235,103,8,4,245,255,8,5,240,111,8,11,229,251,8,12,255,7,8,14,255,255,8,15,255,45,9,1,227,255,9,2,251,120,9,4,219,255,9,5,253,213,9,6,200,209,9,7,163,255,9,8,175,255,9,9,215,255,9,10,209,255,9,12,225,0,9,14,254,255,9,15,255,16,10,1,183,255,10,2,248,199,10,4,158,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,239,177,10,14,207,239,10,15,254,0,11,2,255,255,11,3,214,100,11,5,158,0,11,6,255,0,11,7,255,0,11,8,255,0,11,9,255,5,11,10,254,88,11,11,255,255,11,12,183,71,11,15,194,0,12,2,208,226,12,3,255,247,12,4,161,181,12,11,255,255,12,12,255,34,13,3,233,197,13,4,255,255,13,5,248,250,13,6,193,253,13,7,169,255,13,8,181,255,13,9,229,255,13,10,255,255,13,11,196,193,13,12,255,0,14,4,203,99,14,5,254,174,14,6,253,225,14,7,253,250,14,8,249,243,14,9,235,201,14,10,238,93,14,11,255,0,15,6,174,0,15,7,223,0,15,8,248,0,15,9,237,0,15,10,186,0],"secondary":false},{"width":13,"bonus":350,"chr":"#","pixels":[1,10,255,255,2,6,255,255,2,10,255,255,2,11,255,68,3,6,255,255,3,7,255,48,3,10,255,255,3,11,255,167,3,12,201,230,3,13,233,255,4,6,255,255,4,7,254,210,4,8,245,253,4,9,255,255,4,10,255,255,4,11,255,199,4,12,212,158,4,13,202,95,4,14,233,0,5,3,255,255,5,4,250,255,5,5,223,244,5,6,255,255,5,7,255,141,5,8,221,80,5,9,245,42,5,10,255,255,5,11,255,68,5,12,199,0,6,4,255,4,6,5,250,0,6,6,255,255,6,7,255,48,6,10,255,255,6,11,255,68,7,6,255,255,7,7,254,70,7,10,255,255,7,11,255,227,7,12,254,254,7,13,244,255,8,5,181,255,8,6,255,255,8,7,255,255,8,8,242,251,8,9,213,237,8,10,255,255,8,11,255,135,8,12,232,49,8,13,253,3,8,14,244,0,9,3,217,249,9,4,200,214,9,5,196,163,9,6,255,255,9,7,255,67,9,8,255,0,9,9,239,21,9,10,255,255,9,11,255,68,10,4,212,0,10,5,168,0,10,6,255,255,10,7,255,48,10,10,255,255,10,11,255,68,11,6,255,255,11,7,255,48,11,11,255,0,12,7,255,0],"secondary":false},{"width":10,"bonus":420,"chr":"$","pixels":[1,3,184,255,1,4,243,255,1,5,211,255,1,11,171,255,1,12,213,255,2,2,197,255,2,3,245,254,2,4,233,191,2,5,253,232,2,6,254,252,2,12,255,255,2,13,217,27,3,2,255,255,3,3,213,87,3,4,244,0,3,5,183,38,3,6,253,244,3,7,253,177,3,12,255,255,3,13,255,50,4,0,163,255,4,1,193,255,4,2,255,255,4,3,255,166,4,4,189,221,4,5,163,255,4,6,230,252,4,7,255,251,4,8,226,185,4,9,163,255,4,10,163,255,4,11,173,255,4,12,255,255,4,13,255,187,4,14,181,231,5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,164,0,6,1,254,76,6,2,255,253,6,3,255,12,6,4,255,0,6,5,255,0,6,6,255,11,6,7,254,239,6,8,255,183,6,9,255,2,6,10,255,0,6,11,255,95,6,12,255,251,6,13,255,15,6,14,255,0,6,15,255,0,7,2,255,255,7,3,253,82,7,8,255,255,7,9,241,218,7,10,177,255,7,11,247,255,7,12,199,213,7,13,251,0,8,3,255,49,8,8,190,180,8,9,254,237,8,10,252,240,8,11,226,179,8,12,248,15,8,13,166,0,9,10,236,0,9,11,237,0,9,12,158,0],"secondary":false},{"width":10,"bonus":165,"chr":"^","pixels":[1,7,193,255,1,8,253,255,2,5,205,255,2,6,249,255,2,7,186,217,2,8,204,53,2,9,254,0,3,3,217,255,3,4,239,255,3,5,175,197,3,6,210,31,3,7,249,0,3,8,158,0,4,1,227,255,4,2,224,255,4,3,168,170,4,4,219,14,4,5,239,0,5,1,235,247,5,2,251,223,5,3,237,120,6,2,238,103,6,3,249,219,6,4,247,249,7,4,227,88,7,5,252,199,7,6,254,254,7,7,186,241,8,6,209,72,8,7,254,178,8,8,254,255,9,8,189,55,9,9,254,0],"secondary":false},{"width":10,"bonus":95,"chr":"~","pixels":[1,8,213,255,2,7,241,255,2,8,177,135,2,9,213,0,3,7,255,255,3,8,246,91,4,7,215,253,4,8,254,168,5,8,254,250,5,9,173,25,6,8,255,255,6,9,251,63,7,8,255,255,7,9,255,37,8,7,175,255,8,8,194,238,8,9,255,0,9,8,176,0,9,9,181,0],"secondary":false},{"width":13,"bonus":445,"chr":"&","pixels":[1,9,227,255,1,10,249,255,1,11,213,255,2,2,178,255,2,3,241,255,2,4,195,255,2,7,185,255,2,8,254,255,2,9,228,221,2,10,246,182,2,11,254,234,2,12,255,255,3,2,252,254,3,3,232,197,3,4,253,225,3,5,252,248,3,6,186,231,3,7,248,255,3,8,205,91,3,9,254,0,3,10,197,0,3,11,181,24,3,12,251,219,3,13,255,193,4,1,227,255,4,2,207,169,4,3,252,0,4,4,181,11,4,5,245,184,4,6,255,255,4,7,215,163,4,8,248,0,4,13,252,240,4,14,193,0,5,1,247,255,5,2,237,104,5,6,255,255,5,7,254,245,5,8,168,101,5,13,249,251,5,14,237,0,6,1,217,255,6,2,253,186,6,5,249,255,6,6,176,125,6,7,255,209,6,8,254,246,6,13,230,239,6,14,246,0,7,2,255,255,7,3,255,255,7,4,255,255,7,5,182,205,7,6,250,0,7,8,246,217,7,9,254,249,7,12,237,255,7,13,204,174,7,14,215,0,8,2,165,142,8,3,255,151,8,4,254,94,8,5,255,1,8,9,247,218,8,10,254,251,8,11,223,239,8,12,241,253,8,13,240,28,9,10,255,253,9,11,255,255,9,12,236,158,9,13,240,0,10,8,163,255,10,9,247,255,10,10,243,251,10,11,254,210,10,12,254,255,10,13,192,145,11,7,255,255,11,8,244,250,11,9,217,174,11,10,248,28,11,11,241,13,11,12,244,199,11,13,255,255,12,8,255,7,12,9,240,0,12,13,236,193,12,14,255,0],"secondary":false},{"width":11,"bonus":190,"chr":"*","pixels":[2,3,255,255,2,4,184,121,3,3,237,251,3,4,255,107,3,6,208,255,3,7,234,254,4,3,163,255,4,4,249,202,4,5,249,251,4,6,227,249,4,7,229,127,4,8,233,12,5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,232,171,5,6,245,3,5,7,222,0,6,1,254,70,6,2,255,43,6,3,255,167,6,4,254,207,6,5,254,251,6,6,236,224,7,3,232,250,7,4,204,136,7,5,216,64,7,6,254,222,7,7,252,245,8,3,255,255,8,4,236,96,8,7,231,83,8,8,242,0,9,3,187,236,9,4,255,55,10,4,173,0],"secondary":false},{"width":6,"bonus":225,"chr":"(","pixels":[1,4,181,255,1,5,221,255,1,6,237,255,1,7,251,255,1,8,243,255,1,9,227,255,1,10,199,255,2,1,221,255,2,2,255,255,2,3,255,255,2,4,248,248,2,5,238,214,2,6,245,190,2,7,249,172,2,8,253,177,2,9,252,195,2,10,251,225,2,11,255,255,2,12,255,255,2,13,250,253,2,14,176,248,3,0,254,255,3,1,222,223,3,2,235,113,3,3,255,38,3,4,255,1,3,5,241,0,3,6,200,0,3,7,183,0,3,8,168,0,3,9,176,0,3,10,193,0,3,11,223,19,3,12,255,69,3,13,254,150,3,14,254,236,3,15,254,254,3,16,170,226,4,0,225,42,4,1,254,0,4,2,194,0,4,15,243,105,4,16,255,227,5,0,166,0,5,17,227,0],"secondary":false},{"width":7,"bonus":200,"chr":")","pixels":[2,15,190,255,2,16,255,255,3,0,254,249,3,1,255,255,3,2,207,246,3,12,157,255,3,13,235,255,3,14,255,255,3,15,223,240,3,16,205,76,3,17,255,0,4,1,252,126,4,2,254,219,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,253,253,4,13,226,203,4,14,242,89,4,15,255,4,4,16,210,0,5,3,222,32,5,4,255,79,5,5,255,121,5,6,255,140,5,7,255,157,5,8,255,152,5,9,255,134,5,10,255,110,5,11,255,61,5,12,255,12,5,13,252,0,5,14,180,0,6,8,157,0],"secondary":false},{"width":7,"bonus":65,"chr":"_","pixels":[0,16,255,255,1,16,255,255,1,17,255,68,2,16,255,255,2,17,255,68,3,16,255,255,3,17,255,68,4,16,255,255,4,17,255,68,5,16,255,255,5,17,255,68,6,16,255,255,6,17,255,68],"secondary":false},{"width":6,"bonus":40,"chr":"-","pixels":[1,8,255,255,2,8,255,255,2,9,255,68,3,8,255,255,3,9,255,68,4,8,255,255,4,9,255,68,5,9,255,0],"secondary":true},{"width":10,"bonus":160,"chr":"=","pixels":[1,5,255,255,1,9,255,255,2,5,255,255,2,6,255,68,2,9,255,255,2,10,255,68,3,5,255,255,3,6,255,68,3,9,255,255,3,10,255,68,4,5,255,255,4,6,255,68,4,9,255,255,4,10,255,68,5,5,255,255,5,6,255,68,5,9,255,255,5,10,255,68,6,5,255,255,6,6,255,68,6,9,255,255,6,10,255,68,7,5,255,255,7,6,255,68,7,9,255,255,7,10,255,68,8,5,255,255,8,6,255,68,8,9,255,255,8,10,255,68,9,6,255,0,9,10,255,0],"secondary":false},{"width":7,"bonus":290,"chr":"[","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,0,254,189,3,1,254,164,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,164,3,7,254,164,3,8,254,164,3,9,254,164,3,10,254,164,3,11,254,164,3,12,254,164,3,13,254,164,3,14,254,164,3,15,255,171,3,16,255,255,3,17,255,68,4,0,255,68,4,1,188,0,4,2,164,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,164,0,4,8,164,0,4,9,164,0,4,10,164,0,4,11,164,0,4,12,164,0,4,13,164,0,4,14,164,0,4,15,171,30,4,16,255,255,4,17,255,68,5,0,254,46,5,16,182,246,5,17,254,46,6,0,176,0,6,17,176,0],"secondary":false},{"width":7,"bonus":290,"chr":"]","pixels":[1,16,255,255,2,0,255,68,2,16,255,255,2,17,255,68,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,68,4,0,254,164,4,1,254,164,4,2,254,164,4,3,254,164,4,4,254,164,4,5,254,164,4,6,254,164,4,7,254,164,4,8,254,164,4,9,254,164,4,10,254,164,4,11,254,164,4,12,254,164,4,13,254,164,4,14,254,164,4,15,254,164,4,16,254,164,4,17,255,43,5,0,164,0,5,1,164,0,5,2,164,0,5,3,164,0,5,4,164,0,5,5,164,0,5,6,164,0,5,7,164,0,5,8,164,0,5,9,164,0,5,10,164,0,5,11,164,0,5,12,164,0,5,13,164,0,5,14,164,0,5,15,164,0,5,16,164,0,5,17,164,0],"secondary":false},{"width":7,"bonus":255,"chr":"{","pixels":[1,8,255,255,2,8,236,252,2,9,254,183,3,0,191,255,3,1,245,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,252,254,3,8,181,106,3,9,254,245,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,223,255,4,0,243,253,4,1,235,188,4,2,251,166,4,3,254,164,4,4,254,164,4,5,254,164,4,6,255,151,4,7,255,68,4,8,252,0,4,10,250,156,4,11,254,164,4,12,254,164,4,13,254,164,4,14,255,166,4,15,255,221,4,16,253,244,5,0,216,111,5,1,241,0,5,2,173,0,5,3,164,0,5,4,164,0,5,5,164,0,5,6,164,0,5,11,153,0,5,12,164,0,5,13,164,0,5,14,164,0,5,15,179,56,5,16,255,255,5,17,244,57,6,0,253,0,6,17,255,0],"secondary":false},{"width":6,"bonus":255,"chr":"}","pixels":[1,0,204,191,1,16,255,255,2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,243,255,2,7,157,255,2,10,245,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,220,232,2,17,255,0,3,0,178,132,3,1,255,152,3,2,254,164,3,3,254,164,3,4,254,164,3,5,254,164,3,6,254,177,3,7,254,245,3,8,213,173,3,9,251,255,3,10,221,207,3,11,251,166,3,12,254,164,3,13,254,164,3,14,255,163,3,15,255,125,3,16,255,17,3,17,200,0,4,3,164,0,4,4,164,0,4,5,164,0,4,6,164,0,4,7,199,96,4,8,255,255,4,9,196,155,4,10,251,0,4,11,179,0,4,12,164,0,4,13,164,0,4,14,164,0,4,15,163,0,5,8,166,197,5,9,255,37],"secondary":false},{"width":5,"bonus":55,"chr":":","pixels":[2,4,211,255,2,5,229,255,2,11,159,255,2,12,249,255,2,13,196,255,3,5,234,150,3,6,230,5,3,12,218,184,3,13,251,109,3,14,196,0,4,13,157,0],"secondary":true},{"width":5,"bonus":65,"chr":";","pixels":[1,15,155,255,2,4,211,255,2,5,229,255,2,12,247,255,2,13,255,255,2,14,223,249,2,15,177,190,2,16,156,0,3,5,234,150,3,6,230,5,3,13,248,40,3,14,255,0,3,15,218,0],"secondary":true},{"width":9,"bonus":130,"chr":"\\"","pixels":[2,1,229,255,2,2,205,255,2,3,181,255,2,4,159,255,3,1,253,255,3,2,253,238,3,3,247,220,3,4,237,205,3,5,222,192,4,2,254,0,4,3,236,0,4,4,213,0,4,5,190,0,4,6,167,0,5,1,185,255,5,2,163,252,6,1,255,255,6,2,255,255,6,3,254,254,6,4,245,243,6,5,231,233,7,2,255,22,7,3,255,2,7,4,253,0,7,5,233,0,7,6,211,0],"secondary":true},{"width":6,"bonus":70,"chr":"\'","pixels":[2,1,229,255,2,2,205,255,2,3,181,255,2,4,159,255,3,1,253,255,3,2,253,238,3,3,247,220,3,4,237,205,3,5,222,192,4,2,254,0,4,3,236,0,4,4,213,0,4,5,190,0,4,6,167,0],"secondary":true},{"width":10,"bonus":155,"chr":"<","pixels":[1,8,243,255,2,7,225,255,2,8,245,249,2,9,249,134,3,7,213,254,3,8,236,93,3,9,254,240,4,6,237,255,4,7,161,134,4,8,212,2,4,9,232,243,4,10,247,122,5,6,210,251,5,7,237,1,5,10,252,234,6,5,245,255,6,6,170,115,6,7,207,0,6,10,245,247,6,11,241,111,7,4,153,255,7,5,205,249,7,6,245,0,7,11,252,224,8,4,251,255,8,5,180,99,8,6,200,0,8,11,251,252,8,12,234,100,9,5,251,0,9,12,248,0],"secondary":false},{"width":10,"bonus":145,"chr":">","pixels":[1,4,251,255,1,11,249,255,2,4,168,232,2,5,254,201,2,11,225,251,2,12,249,3,3,5,251,249,3,6,216,89,3,10,237,255,3,11,182,147,3,12,222,0,4,6,252,208,4,10,232,254,4,11,237,8,5,6,246,246,5,7,221,94,5,9,219,255,5,10,176,171,5,11,231,0,6,7,252,214,6,9,238,255,6,10,221,15,7,7,238,241,7,8,252,241,7,9,172,194,7,10,238,0,8,8,254,246,8,9,239,20,9,9,245,0],"secondary":false},{"width":8,"bonus":180,"chr":"\\\\","pixels":[1,0,191,252,2,0,253,192,2,1,253,249,2,2,255,255,2,3,246,252,2,4,183,253,3,1,192,10,3,2,249,66,3,3,255,131,3,4,253,198,3,5,253,252,3,6,255,255,3,7,241,252,3,8,175,255,4,5,198,14,4,6,251,72,4,7,255,137,4,8,252,205,4,9,254,252,4,10,255,255,4,11,235,251,4,12,167,255,5,9,205,19,5,10,253,77,5,11,255,143,5,12,251,212,5,13,254,255,5,14,255,255,5,15,230,250,5,16,161,255,6,13,212,24,6,14,254,83,6,15,255,149,6,16,250,219,6,17,161,0,7,17,215,0],"secondary":false},{"width":4,"bonus":35,"chr":".","pixels":[1,11,161,255,1,12,249,255,1,13,197,255,2,12,218,181,2,13,251,105,2,14,198,0,3,13,155,0],"secondary":true},{"width":5,"bonus":55,"chr":",","pixels":[1,12,167,255,1,13,219,255,1,14,255,255,1,15,242,254,2,12,255,255,2,13,242,231,2,14,236,126,2,15,255,14,2,16,241,0,3,13,255,1,3,14,220,0],"secondary":true},{"width":10,"bonus":265,"chr":"|","pixels":[4,0,255,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,5,0,254,164,5,1,254,164,5,2,254,164,5,3,254,164,5,4,254,164,5,5,254,164,5,6,254,164,5,7,254,164,5,8,254,164,5,9,254,164,5,10,254,164,5,11,254,164,5,12,254,164,5,13,254,164,5,14,254,164,5,15,254,164,5,16,254,164,5,17,255,0,6,0,164,0,6,1,164,0,6,2,164,0,6,3,164,0,6,4,164,0,6,5,164,0,6,6,164,0,6,7,164,0,6,8,164,0,6,9,164,0,6,10,164,0,6,11,164,0,6,12,164,0,6,13,164,0,6,14,164,0,6,15,164,0,6,16,164,0,6,17,164,0],"secondary":false}],"width":17,"spacewidth":5,"shadow":true,"height":19,"basey":13}');

/***/ }),

/***/ "./src/fonts/chatbox/20pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/20pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":11,"bonus":380,"chr":"a","pixels":[1,10,221,255,1,11,247,255,1,12,215,255,2,9,255,255,2,10,254,255,2,11,250,226,2,12,254,245,2,13,255,255,2,14,180,167,3,5,225,249,3,8,199,255,3,9,244,250,3,10,255,47,3,11,254,0,3,12,223,19,3,13,253,215,3,14,255,219,4,4,209,255,4,5,214,192,4,6,220,0,4,8,251,255,4,9,232,164,4,10,240,0,4,14,254,250,4,15,219,0,5,4,241,255,5,5,233,142,5,6,161,0,5,8,255,255,5,9,253,105,5,14,240,239,5,15,249,0,6,4,245,255,6,5,249,147,6,8,255,255,6,9,255,85,6,13,223,255,6,14,205,171,6,15,225,0,7,4,203,255,7,5,254,234,7,6,167,81,7,8,255,255,7,9,255,84,7,12,187,255,7,13,189,252,7,14,224,10,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,245,226,8,14,230,179,9,6,255,175,9,7,254,204,9,8,255,208,9,9,255,208,9,10,255,208,9,11,255,208,9,12,255,208,9,13,255,208,9,14,248,214,9,15,162,0,10,7,175,0,10,8,204,0,10,9,208,0,10,10,208,0,10,11,208,0,10,12,208,0,10,13,208,0,10,14,208,0,10,15,208,0],"secondary":false},{"width":13,"bonus":460,"chr":"b","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,0,208,255,3,1,255,208,3,2,255,208,3,3,254,207,3,4,255,196,3,5,254,219,3,6,255,255,3,7,255,251,3,8,254,221,3,9,254,210,3,10,254,222,3,11,255,253,3,12,255,255,3,13,255,205,3,14,255,108,3,15,255,0,4,1,208,0,4,2,208,0,4,3,208,0,4,4,213,47,4,5,251,241,4,6,238,144,4,7,255,14,4,8,251,0,4,9,220,0,4,10,210,0,4,11,224,19,4,12,254,141,4,13,254,240,4,14,213,49,5,4,172,255,5,5,205,244,5,6,237,0,5,13,230,222,5,14,250,177,6,4,235,255,6,5,216,162,6,6,196,0,6,14,251,241,6,15,174,0,7,4,247,255,7,5,247,151,7,14,252,252,7,15,237,0,8,4,211,255,8,5,254,220,8,13,213,255,8,14,235,231,8,15,249,0,9,5,255,255,9,6,247,205,9,12,203,255,9,13,255,255,9,14,232,123,9,15,213,0,10,5,198,197,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,234,167,10,14,255,2,11,6,175,84,11,7,255,146,11,8,255,190,11,9,255,203,11,10,255,189,11,11,255,146,11,12,254,58,11,13,255,0,11,14,153,0,12,9,190,0,12,10,203,0,12,11,189,0],"secondary":false},{"width":9,"bonus":240,"chr":"c","pixels":[1,7,190,255,1,8,237,255,1,9,251,255,1,10,239,255,1,11,195,255,2,5,179,255,2,6,255,255,2,7,255,255,2,8,250,240,2,9,252,216,2,10,255,235,2,11,255,255,2,12,255,255,2,13,217,225,3,5,255,255,3,6,226,179,3,7,255,33,3,8,255,0,3,9,235,0,3,10,214,0,3,11,238,34,3,12,255,158,3,13,255,255,3,14,222,145,4,4,208,255,4,5,223,226,4,6,255,0,4,7,159,0,4,13,231,214,4,14,255,215,5,4,245,255,5,5,232,142,5,6,197,0,5,14,254,250,5,15,215,0,6,4,239,255,6,5,251,141,6,14,247,247,6,15,249,0,7,4,207,255,7,5,252,201,7,13,191,255,7,14,229,220,7,15,239,0,8,5,222,90,8,6,199,0,8,14,207,82,8,15,197,0],"secondary":false},{"width":13,"bonus":475,"chr":"d","pixels":[1,7,193,255,1,8,237,255,1,9,251,255,1,10,239,255,1,11,196,255,2,5,197,255,2,6,255,255,2,7,255,255,2,8,251,241,2,9,252,216,2,10,254,234,2,11,255,255,2,12,255,255,2,13,225,229,3,5,255,255,3,6,235,182,3,7,255,38,3,8,255,0,3,9,237,0,3,10,214,0,3,11,236,34,3,12,255,163,3,13,255,255,3,14,231,156,4,4,223,255,4,5,229,222,4,6,255,1,4,7,168,0,4,13,236,219,4,14,255,225,5,4,249,255,5,5,239,138,5,6,199,0,5,14,253,252,5,15,225,0,6,4,227,255,6,5,252,151,6,14,242,240,6,15,250,0,7,5,251,225,7,6,154,18,7,13,215,255,7,14,209,179,7,15,228,0,8,5,236,229,8,6,247,197,8,12,173,255,8,13,210,253,8,14,217,20,9,0,255,255,9,1,255,255,9,2,255,255,9,3,255,255,9,4,249,255,9,5,242,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,248,240,9,14,242,196,10,0,208,255,10,1,255,208,10,2,255,208,10,3,255,208,10,4,255,208,10,5,254,209,10,6,253,210,10,7,255,208,10,8,255,208,10,9,255,208,10,10,255,208,10,11,255,208,10,12,255,208,10,13,255,208,10,14,252,211,10,15,186,0,11,1,208,0,11,2,208,0,11,3,208,0,11,4,208,0,11,5,208,0,11,6,208,0,11,7,208,0,11,8,208,0,11,9,208,0,11,10,208,0,11,11,208,0,11,12,208,0,11,13,208,0,11,14,208,0,11,15,208,0],"secondary":false},{"width":11,"bonus":345,"chr":"e","pixels":[1,7,185,255,1,8,235,255,1,9,251,255,1,10,237,255,1,11,189,255,2,5,175,255,2,6,255,255,2,7,246,251,2,8,255,255,2,9,253,232,2,10,255,243,2,11,255,255,2,12,255,255,2,13,197,214,3,5,254,255,3,6,208,126,3,7,255,38,3,8,255,255,3,9,255,84,3,10,230,0,3,11,245,53,3,12,255,189,3,13,255,255,3,14,201,130,4,4,215,255,4,5,215,211,4,6,254,0,4,8,255,255,4,9,255,84,4,13,245,227,4,14,255,201,5,4,249,255,5,5,236,141,5,6,178,0,5,8,255,255,5,9,255,84,5,14,254,246,5,15,201,0,6,4,233,255,6,5,252,157,6,8,255,255,6,9,255,84,6,14,253,253,6,15,245,0,7,4,165,255,7,5,254,246,7,6,176,79,7,8,255,255,7,9,255,84,7,13,155,255,7,14,242,242,7,15,251,0,8,5,248,242,8,6,254,255,8,7,235,249,8,8,255,255,8,9,255,84,8,13,221,255,8,14,220,193,8,15,229,0,9,6,247,169,9,7,254,234,9,8,254,255,9,9,255,84,9,14,229,60,9,15,166,0,10,7,164,0,10,8,234,0,10,9,254,0],"secondary":false},{"width":8,"bonus":270,"chr":"f","pixels":[2,4,225,255,2,5,195,157,3,2,225,255,3,3,253,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,4,1,255,255,4,2,248,246,4,3,249,215,4,4,255,255,4,5,254,231,4,6,255,208,4,7,255,208,4,8,255,208,4,9,255,208,4,10,255,208,4,11,255,208,4,12,255,208,4,13,255,208,4,14,255,208,4,15,255,0,5,0,227,255,5,1,226,209,5,2,255,5,5,3,239,0,5,4,255,255,5,5,254,120,5,6,230,0,5,7,208,0,5,8,208,0,5,9,208,0,5,10,208,0,5,11,208,0,5,12,208,0,5,13,208,0,5,14,208,0,5,15,208,0,6,0,245,255,6,1,242,140,6,2,186,0,6,4,255,255,6,5,254,120,7,0,199,255,7,1,251,130,7,5,255,0],"secondary":false},{"width":13,"bonus":530,"chr":"g","pixels":[1,7,191,255,1,8,237,255,1,9,251,255,1,10,239,255,1,11,196,255,2,5,191,255,2,6,255,255,2,7,255,255,2,8,250,240,2,9,252,216,2,10,255,235,2,11,255,255,2,12,255,255,2,13,225,229,2,18,255,255,3,5,255,255,3,6,233,183,3,7,255,37,3,8,255,0,3,9,236,0,3,10,214,0,3,11,238,34,3,12,255,158,3,13,255,255,3,14,231,156,3,18,208,245,3,19,255,199,4,4,223,255,4,5,227,222,4,6,255,0,4,7,167,0,4,13,231,214,4,14,254,227,4,18,157,255,4,19,249,235,5,4,249,255,5,5,239,137,5,6,197,0,5,14,253,252,5,15,226,0,5,19,253,251,6,4,225,255,6,5,253,154,6,14,241,240,6,15,250,0,6,19,250,250,7,5,251,227,7,6,157,21,7,13,215,255,7,14,206,174,7,15,227,0,7,18,219,255,7,19,235,227,8,5,234,226,8,6,248,200,8,12,173,255,8,13,198,253,8,14,217,15,8,17,189,255,8,18,255,255,8,19,237,139,9,4,187,255,9,5,235,253,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,255,255,9,16,255,255,9,17,255,255,9,18,241,215,9,19,255,11,10,4,208,255,10,5,243,219,10,6,252,211,10,7,255,208,10,8,255,208,10,9,255,208,10,10,255,208,10,11,255,208,10,12,255,208,10,13,255,208,10,14,255,208,10,15,255,202,10,16,255,175,10,17,255,104,10,18,255,8,10,19,203,0,11,5,208,0,11,6,208,0,11,7,208,0,11,8,208,0,11,9,208,0,11,10,208,0,11,11,208,0,11,12,208,0,11,13,208,0,11,14,208,0,11,15,208,0,11,16,202,0,11,17,175,0],"secondary":false},{"width":13,"bonus":435,"chr":"h","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,0,208,255,3,1,255,208,3,2,255,208,3,3,255,208,3,4,255,203,3,5,255,215,3,6,255,255,3,7,255,251,3,8,254,221,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,208,0,4,2,208,0,4,3,208,0,4,4,215,43,4,5,250,238,4,6,236,148,4,7,255,14,4,8,251,0,4,9,220,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,4,172,255,5,5,203,245,5,6,233,0,6,4,237,255,6,5,216,162,6,6,195,0,7,4,241,255,7,5,248,150,8,4,203,255,8,5,254,240,8,6,167,75,9,5,255,255,9,6,254,255,9,7,231,249,9,8,208,255,9,9,208,255,9,10,208,255,9,11,208,255,9,12,208,255,9,13,208,255,9,14,208,255,10,5,160,169,10,6,255,211,10,7,254,249,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,208,0,11,7,211,0,11,8,248,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0],"secondary":false},{"width":6,"bonus":205,"chr":"i","pixels":[2,0,205,255,2,1,229,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,0,155,255,3,1,240,190,3,2,230,9,3,4,208,255,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,156,0,4,2,179,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0],"secondary":false},{"width":6,"bonus":280,"chr":"j","pixels":[0,19,253,251,1,18,208,255,1,19,239,238,2,0,205,255,2,1,229,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,231,137,3,0,155,255,3,1,240,190,3,2,230,9,3,4,208,255,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,208,3,16,254,207,3,17,255,178,3,18,255,99,3,19,255,2,4,1,156,0,4,2,179,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,4,16,208,0,4,17,206,0,4,18,178,0],"secondary":false},{"width":11,"bonus":400,"chr":"k","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,0,208,255,3,1,255,208,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,241,3,10,254,251,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,208,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,230,134,4,9,254,252,4,10,246,94,4,11,250,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,7,163,255,5,8,255,255,5,9,254,254,5,10,252,133,6,6,184,255,6,7,254,255,6,8,208,154,6,9,254,204,6,10,255,255,6,11,227,222,7,5,202,255,7,6,250,255,7,7,209,110,7,8,254,0,7,10,233,156,7,11,255,255,7,12,251,243,8,4,217,255,8,5,246,254,8,6,218,87,8,7,250,0,8,11,175,109,8,12,254,237,8,13,255,255,8,14,190,211,9,4,239,255,9,5,226,66,9,6,246,0,9,13,250,197,9,14,255,255,9,15,157,0,10,5,239,0,10,14,224,147,10,15,255,0],"secondary":false},{"width":6,"bonus":230,"chr":"l","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,0,208,255,3,1,255,208,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,208,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0],"secondary":false},{"width":19,"bonus":580,"chr":"m","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,5,255,205,3,6,255,255,3,7,255,251,3,8,254,221,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,5,245,243,4,6,231,144,4,7,255,12,4,8,251,0,4,9,220,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,4,172,255,5,5,198,243,5,6,233,0,6,4,239,255,6,5,216,159,6,6,189,0,7,4,245,255,7,5,249,159,8,4,203,255,8,5,254,249,8,6,190,121,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,10,5,167,190,10,6,255,255,10,7,254,251,10,8,255,223,10,9,255,208,10,10,255,208,10,11,255,208,10,12,255,208,10,13,255,208,10,14,255,208,10,15,255,0,11,5,249,255,11,6,191,174,11,7,255,11,11,8,250,0,11,9,223,0,11,10,208,0,11,11,208,0,11,12,208,0,11,13,208,0,11,14,208,0,11,15,208,0,12,4,181,255,12,5,201,238,12,6,249,0,13,4,239,255,13,5,219,155,13,6,188,0,14,4,239,255,14,5,249,159,15,4,197,255,15,5,254,249,15,6,191,123,16,5,254,255,16,6,255,255,16,7,255,255,16,8,255,255,16,9,255,255,16,10,255,255,16,11,255,255,16,12,255,255,16,13,255,255,16,14,255,255,17,6,254,164,17,7,254,201,17,8,255,208,17,9,255,208,17,10,255,208,17,11,255,208,17,12,255,208,17,13,255,208,17,14,255,208,17,15,255,0,18,7,164,0,18,8,200,0,18,9,208,0,18,10,208,0,18,11,208,0,18,12,208,0,18,13,208,0,18,14,208,0,18,15,208,0],"secondary":false},{"width":13,"bonus":370,"chr":"n","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,5,255,205,3,6,255,255,3,7,255,251,3,8,254,221,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,5,245,243,4,6,232,148,4,7,255,13,4,8,251,0,4,9,220,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,4,167,255,5,5,202,245,5,6,233,0,6,4,235,255,6,5,215,163,6,6,194,0,7,4,241,255,7,5,247,151,8,4,205,255,8,5,254,240,8,6,167,75,9,5,255,255,9,6,254,255,9,7,231,249,9,8,208,255,9,9,208,255,9,10,208,255,9,11,208,255,9,12,208,255,9,13,208,255,9,14,208,255,10,5,159,167,10,6,255,209,10,7,254,249,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,208,0,11,7,209,0,11,8,248,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0],"secondary":false},{"width":12,"bonus":370,"chr":"o","pixels":[1,7,189,255,1,8,237,255,1,9,249,255,1,10,231,255,1,11,177,255,2,5,172,255,2,6,255,255,2,7,255,255,2,8,250,240,2,9,252,218,2,10,254,239,2,11,255,255,2,12,255,255,2,13,183,213,3,5,255,255,3,6,227,190,3,7,255,32,3,8,255,0,3,9,235,0,3,10,215,0,3,11,241,43,3,12,254,174,3,13,255,255,3,14,189,126,4,4,203,255,4,5,228,233,4,6,255,4,4,7,169,0,4,13,240,220,4,14,255,199,5,4,243,255,5,5,232,155,5,6,208,0,5,14,252,245,5,15,199,0,6,4,245,255,6,5,250,137,6,14,250,250,6,15,242,0,7,4,201,255,7,5,253,211,7,13,209,255,7,14,230,224,7,15,245,0,8,5,255,255,8,6,240,186,8,12,177,255,8,13,255,255,8,14,227,113,8,15,202,0,9,5,194,204,9,6,255,255,9,7,255,255,9,8,240,253,9,9,215,255,9,10,239,255,9,11,255,255,9,12,255,255,9,13,226,182,9,14,255,1,10,6,186,111,10,7,255,184,10,8,254,237,10,9,255,251,10,10,252,238,10,11,251,188,10,12,255,85,10,13,255,0,10,14,161,0,11,8,184,0,11,9,236,0,11,10,251,0,11,11,235,0,11,12,185,0],"secondary":false},{"width":13,"bonus":460,"chr":"p","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,255,255,3,5,255,207,3,6,255,255,3,7,255,249,3,8,254,216,3,9,255,209,3,10,254,225,3,11,255,253,3,12,255,255,3,13,254,221,3,14,255,196,3,15,255,207,3,16,255,208,3,17,255,208,3,18,255,208,3,19,255,208,4,5,244,241,4,6,232,143,4,7,255,10,4,8,249,0,4,9,216,0,4,10,209,0,4,11,226,22,4,12,254,149,4,13,255,239,4,14,225,44,4,15,196,0,4,16,207,0,4,17,208,0,4,18,208,0,4,19,208,0,5,4,165,255,5,5,202,246,5,6,231,0,5,13,233,223,5,14,250,176,6,4,235,255,6,5,213,165,6,6,195,0,6,14,251,241,6,15,172,0,7,4,247,255,7,5,246,142,7,14,252,252,7,15,237,0,8,4,213,255,8,5,254,222,8,13,221,255,8,14,235,231,8,15,249,0,9,5,255,255,9,6,249,214,9,12,213,255,9,13,255,255,9,14,236,119,9,15,213,0,10,5,201,199,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,237,161,10,14,255,2,11,6,179,84,11,7,255,147,11,8,255,190,11,9,255,203,11,10,255,189,11,11,254,144,11,12,255,55,11,13,255,0,12,9,190,0,12,10,203,0,12,11,189,0],"secondary":false},{"width":13,"bonus":480,"chr":"q","pixels":[1,7,193,255,1,8,237,255,1,9,251,255,1,10,239,255,1,11,196,255,2,5,193,255,2,6,255,255,2,7,255,255,2,8,251,241,2,9,252,216,2,10,254,234,2,11,255,255,2,12,255,255,2,13,226,229,3,5,255,255,3,6,234,185,3,7,255,40,3,8,255,0,3,9,237,0,3,10,214,0,3,11,237,34,3,12,255,160,3,13,255,255,3,14,232,157,4,4,221,255,4,5,229,222,4,6,255,1,4,7,170,0,4,13,233,215,4,14,255,227,5,4,249,255,5,5,238,138,5,6,199,0,5,14,253,252,5,15,227,0,6,4,227,255,6,5,252,153,6,14,240,240,6,15,250,0,7,5,251,225,7,6,156,20,7,13,213,255,7,14,206,177,7,15,226,0,8,5,233,224,8,6,246,199,8,12,169,255,8,13,204,254,8,14,215,18,9,4,181,255,9,5,231,254,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,252,248,9,14,254,252,9,15,255,255,9,16,255,255,9,17,255,255,9,18,255,255,9,19,255,255,10,4,208,255,10,5,242,220,10,6,251,212,10,7,255,208,10,8,255,208,10,9,255,208,10,10,255,208,10,11,255,208,10,12,255,208,10,13,255,208,10,14,254,209,10,15,255,208,10,16,255,208,10,17,255,208,10,18,255,208,10,19,255,208,11,5,208,0,11,6,208,0,11,7,208,0,11,8,208,0,11,9,208,0,11,10,208,0,11,11,208,0,11,12,208,0,11,13,208,0,11,14,208,0,11,15,208,0,11,16,208,0,11,17,208,0,11,18,208,0,11,19,208,0],"secondary":false},{"width":9,"bonus":210,"chr":"r","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,5,255,169,3,6,255,255,3,7,255,255,3,8,255,225,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,5,231,224,4,6,234,210,4,7,255,40,4,8,255,0,4,9,225,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,5,225,253,5,6,205,13,5,7,193,0,6,4,235,255,6,5,207,169,6,6,223,0,7,4,245,255,7,5,246,142,8,5,245,24],"secondary":false},{"width":10,"bonus":280,"chr":"s","pixels":[1,5,154,255,1,6,245,255,1,7,227,255,1,13,255,255,2,5,255,255,2,6,245,239,2,7,254,249,2,8,254,249,2,13,205,246,2,14,255,203,3,4,203,255,3,5,225,229,3,6,255,3,3,7,234,58,3,8,255,253,3,9,251,152,3,14,250,238,3,15,203,0,4,4,237,255,4,5,229,147,4,6,202,0,4,8,190,232,4,9,255,243,4,10,155,22,4,14,252,252,4,15,234,0,5,4,245,255,5,5,247,139,5,9,255,255,5,10,248,112,5,14,240,240,5,15,249,0,6,4,217,255,6,5,252,177,6,9,229,245,6,10,255,233,6,13,235,255,6,14,222,202,6,15,226,0,7,4,158,255,7,5,254,246,7,6,178,11,7,10,255,255,7,11,255,255,7,12,255,255,7,13,253,255,7,14,240,65,7,15,176,0,8,5,179,82,8,6,245,0,8,11,254,195,8,12,255,185,8,13,255,78,8,14,253,0,9,12,194,0,9,13,185,0],"secondary":false},{"width":8,"bonus":230,"chr":"t","pixels":[1,4,181,255,2,3,158,255,2,4,255,255,2,5,247,237,2,6,231,230,2,7,208,255,2,8,208,255,2,9,208,255,2,10,208,255,2,11,205,255,2,12,181,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,182,184,4,3,255,0,4,4,255,255,4,5,254,120,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,2,4,12,255,43,4,13,254,216,4,14,255,225,5,4,255,255,5,5,254,120,5,14,253,250,5,15,225,0,6,4,255,255,6,5,254,120,6,14,235,234,6,15,248,0,7,5,255,0,7,15,216,0],"secondary":false},{"width":13,"bonus":370,"chr":"u","pixels":[2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,249,255,2,12,213,255,3,4,208,255,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,254,225,3,12,254,255,3,13,255,255,3,14,164,150,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,229,50,4,13,254,237,4,14,254,207,5,13,163,225,5,14,254,244,5,15,206,0,6,14,247,245,6,15,243,0,7,13,193,255,7,14,217,206,7,15,238,0,8,13,235,255,8,14,204,50,8,15,175,0,9,4,208,255,9,5,208,255,9,6,208,255,9,7,208,255,9,8,208,255,9,9,208,255,9,10,221,255,9,11,251,255,9,12,255,255,9,13,235,229,9,14,247,150,10,4,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,11,5,255,0,11,6,255,0,11,7,255,0,11,8,255,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0],"secondary":false},{"width":10,"bonus":275,"chr":"v","pixels":[0,4,209,255,1,4,251,255,1,5,255,255,1,6,253,253,1,7,188,245,2,5,252,106,2,6,255,195,2,7,254,255,2,8,255,255,2,9,244,250,2,10,157,251,3,7,202,38,3,8,255,118,3,9,255,207,3,10,255,255,3,11,255,255,3,12,228,246,4,10,215,48,4,11,255,123,4,12,255,201,4,13,254,252,4,14,254,255,5,12,209,204,5,13,252,244,5,14,255,255,5,15,254,0,6,9,167,255,6,10,245,255,6,11,255,255,6,12,247,252,6,13,223,184,6,14,244,70,6,15,255,0,7,6,154,255,7,7,237,255,7,8,255,255,7,9,254,255,7,10,233,208,7,11,248,98,7,12,255,12,7,13,244,0,7,14,161,0,8,4,227,255,8,5,255,255,8,6,255,255,8,7,241,232,8,8,246,129,8,9,255,31,8,10,254,0,8,11,190,0,9,4,239,255,9,5,244,160,9,6,254,58,9,7,255,0,9,8,219,0],"secondary":false},{"width":16,"bonus":500,"chr":"w","pixels":[0,4,166,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,220,250,2,5,255,107,2,6,255,171,2,7,254,234,2,8,255,255,2,9,255,255,2,10,252,254,2,11,200,252,3,7,171,2,3,8,238,47,3,9,255,108,3,10,255,172,3,11,254,233,3,12,255,255,3,13,255,255,3,14,244,252,4,11,200,107,4,12,247,177,4,13,255,251,4,14,255,255,4,15,241,0,5,9,197,255,5,10,253,255,5,11,255,255,5,12,242,248,5,13,223,182,5,14,252,80,5,15,255,0,6,6,217,255,6,7,255,255,6,8,255,255,6,9,237,238,6,10,230,158,6,11,254,62,6,12,255,3,6,13,235,0,6,14,159,0,7,4,255,255,7,5,253,255,7,6,217,204,7,7,234,120,7,8,255,42,7,9,255,0,7,10,222,0,8,4,245,255,8,5,255,255,8,6,255,245,8,7,233,206,8,8,177,171,9,5,248,76,9,6,254,150,9,7,254,226,9,8,255,255,9,9,255,255,9,10,229,249,10,8,230,52,10,9,255,123,10,10,255,197,10,11,255,251,10,12,255,255,10,13,248,252,10,14,181,251,11,11,211,73,11,12,254,173,11,13,255,251,11,14,255,255,11,15,178,0,12,9,179,255,12,10,239,255,12,11,255,255,12,12,255,255,12,13,248,240,12,14,254,167,12,15,255,0,13,5,173,255,13,6,237,255,13,7,255,255,13,8,255,255,13,9,251,252,13,10,234,205,13,11,247,122,13,12,255,49,13,13,255,1,13,14,234,0,13,15,166,0,14,4,255,255,14,5,255,255,14,6,240,223,14,7,247,145,14,8,255,71,14,9,255,9,14,10,248,0,14,11,188,0,15,5,255,24,15,6,255,0,15,7,210,0],"secondary":false},{"width":11,"bonus":300,"chr":"x","pixels":[1,4,247,255,1,13,155,255,1,14,255,255,2,4,215,255,2,5,255,255,2,6,218,221,2,12,221,255,2,13,255,255,2,14,223,199,2,15,255,0,3,5,237,149,3,6,254,252,3,7,251,243,3,11,253,255,3,12,241,251,3,13,234,98,3,14,255,0,3,15,174,0,4,6,164,85,4,7,254,215,4,8,255,255,4,9,242,248,4,10,255,255,4,11,220,207,4,12,253,24,4,13,237,0,5,8,254,252,5,9,255,255,5,10,253,231,5,11,255,38,5,12,178,0,6,6,159,255,6,7,255,255,6,8,232,243,6,9,253,128,6,10,254,245,6,11,254,246,7,5,229,255,7,6,255,255,7,7,217,181,7,8,255,12,7,9,221,0,7,11,252,200,7,12,255,255,7,13,223,226,8,4,255,255,8,5,238,248,8,6,236,81,8,7,255,0,8,8,154,0,8,12,225,140,8,13,254,251,8,14,252,248,9,4,171,255,9,5,255,19,9,6,231,0,9,14,254,215,9,15,246,0,10,5,171,0,10,15,214,0],"secondary":false},{"width":10,"bonus":350,"chr":"y","pixels":[0,4,243,255,0,5,164,247,0,19,227,255,1,4,221,255,1,5,255,255,1,6,255,255,1,7,224,245,1,19,251,251,2,5,229,68,2,6,255,155,2,7,254,240,2,8,255,255,2,9,252,253,2,10,179,246,2,18,221,255,2,19,233,229,3,7,158,13,3,8,245,91,3,9,255,181,3,10,255,251,3,11,255,255,3,12,234,246,3,17,225,255,3,18,255,255,3,19,233,94,4,10,187,29,4,11,253,105,4,12,255,181,4,13,254,246,4,14,254,254,4,15,248,254,4,16,255,255,4,17,242,246,4,18,237,99,4,19,255,0,5,12,224,232,5,13,254,254,5,14,254,255,5,15,254,194,5,16,250,99,5,17,255,10,5,18,234,0,6,9,211,255,6,10,255,255,6,11,255,255,6,12,236,235,6,13,228,140,6,14,253,32,6,15,254,0,6,16,193,0,7,6,202,255,7,7,255,255,7,8,255,255,7,9,246,246,7,10,238,163,7,11,255,57,7,12,255,0,7,13,218,0,8,4,253,255,8,5,255,255,8,6,253,253,8,7,239,190,8,8,255,84,8,9,255,7,8,10,238,0,9,4,203,255,9,5,254,111,9,6,255,21,9,7,251,0,9,8,178,0],"secondary":false},{"width":10,"bonus":305,"chr":"z","pixels":[1,13,202,255,1,14,255,255,2,4,255,255,2,12,239,255,2,13,255,255,2,14,255,255,2,15,255,0,3,4,255,255,3,5,254,120,3,11,255,255,3,12,255,255,3,13,253,225,3,14,255,255,3,15,255,0,4,4,255,255,4,5,254,120,4,9,207,255,4,10,255,255,4,11,243,238,4,12,255,72,4,13,254,120,4,14,255,255,4,15,255,0,5,4,255,255,5,5,254,120,5,8,243,255,5,9,255,255,5,10,236,168,5,11,255,15,5,12,227,0,5,13,157,195,5,14,255,255,5,15,255,0,6,4,255,255,6,5,255,129,6,6,203,197,6,7,255,255,6,8,237,244,6,9,247,75,6,10,255,0,6,11,156,0,6,14,255,255,6,15,255,0,7,4,255,255,7,5,255,251,7,6,255,255,7,7,216,184,7,8,255,15,7,9,227,0,7,14,255,255,7,15,255,0,8,4,255,255,8,5,255,227,8,6,252,73,8,7,255,0,8,8,156,0,8,14,255,255,8,15,255,0,9,5,255,0,9,6,227,0,9,15,255,0],"secondary":false},{"width":13,"bonus":415,"chr":"A","pixels":[0,14,205,255,1,11,155,255,1,12,243,255,1,13,255,255,1,14,248,251,1,15,205,0,2,9,207,255,2,10,255,255,2,11,255,255,2,12,233,218,2,13,248,103,2,14,255,13,2,15,244,0,3,6,158,255,3,7,243,255,3,8,255,255,3,9,255,255,3,10,244,208,3,11,255,43,3,12,255,0,3,13,199,0,4,4,209,255,4,5,255,255,4,6,252,254,4,7,227,203,4,8,247,84,4,9,255,255,4,10,254,156,4,11,199,0,5,1,160,255,5,2,245,255,5,3,255,255,5,4,232,237,5,5,232,136,5,6,255,28,5,7,252,0,5,8,181,0,5,9,255,255,5,10,254,156,5,11,156,0,6,1,255,255,6,2,253,253,6,3,251,143,6,4,255,20,6,5,216,0,6,9,255,255,6,10,254,156,6,11,156,0,7,2,254,204,7,3,255,255,7,4,253,253,7,5,185,247,7,9,255,255,7,10,254,156,7,11,156,0,8,3,214,60,8,4,255,151,8,5,255,241,8,6,255,255,8,7,240,248,8,9,255,255,8,10,254,156,8,11,156,0,9,5,155,18,9,6,246,103,9,7,254,201,9,8,255,255,9,9,255,255,9,10,255,229,9,11,202,150,10,8,209,56,10,9,255,148,10,10,254,240,10,11,255,255,10,12,253,253,10,13,182,245,11,11,245,99,11,12,255,197,11,13,255,255,11,14,255,255,12,13,206,53,12,14,255,145,12,15,255,0],"secondary":false},{"width":13,"bonus":540,"chr":"B","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,254,215,3,7,255,255,3,8,255,223,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,254,231,3,14,255,255,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,215,43,4,7,255,255,4,8,255,84,4,9,223,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,229,134,4,14,255,255,4,15,255,0,5,1,255,255,5,2,254,120,5,7,255,255,5,8,255,84,5,14,255,255,5,15,255,0,6,1,251,255,6,2,255,122,6,7,255,255,6,8,255,85,6,14,255,255,6,15,255,0,7,1,239,255,7,2,253,138,7,7,255,255,7,8,255,107,7,14,252,252,7,15,255,0,8,1,209,255,8,2,251,192,8,7,255,255,8,8,255,160,8,13,193,255,8,14,239,234,8,15,249,0,9,2,254,255,9,3,216,123,9,6,223,255,9,7,202,210,9,8,255,247,9,9,185,91,9,13,255,255,9,14,229,167,9,15,220,0,10,2,252,250,10,3,255,255,10,4,255,255,10,5,255,255,10,6,225,247,10,7,226,20,10,8,242,231,10,9,255,255,10,10,234,248,10,11,237,255,10,12,255,255,10,13,244,248,10,14,255,29,11,3,252,175,11,4,254,198,11,5,255,151,11,6,255,27,11,7,218,0,11,9,244,188,11,10,255,239,11,11,253,244,11,12,249,184,11,13,255,42,11,14,237,0,12,4,173,0,12,5,198,0,12,10,180,0,12,11,239,0,12,12,242,0,12,13,180,0],"secondary":false},{"width":13,"bonus":345,"chr":"C","pixels":[1,5,155,255,1,6,215,255,1,7,243,255,1,8,247,255,1,9,225,255,1,10,173,255,2,4,255,255,2,5,255,255,2,6,250,249,2,7,249,222,2,8,253,217,2,9,254,243,2,10,255,255,2,11,255,255,2,12,213,232,3,3,255,255,3,4,231,218,3,5,255,66,3,6,255,3,3,7,244,0,3,8,217,0,3,9,215,2,3,10,245,58,3,11,254,183,3,12,255,255,3,13,241,211,4,2,255,255,4,3,220,201,4,4,255,4,4,5,198,0,4,12,226,174,4,13,255,255,4,14,219,108,5,2,244,252,5,3,255,18,5,4,173,0,5,13,247,243,5,14,254,183,6,1,213,255,6,2,219,195,6,3,241,0,6,13,165,250,6,14,253,234,6,15,182,0,7,1,241,255,7,2,235,141,7,3,168,0,7,14,254,252,7,15,232,0,8,1,243,255,8,2,249,139,8,14,252,253,8,15,251,0,9,1,221,255,9,2,251,172,9,13,155,255,9,14,243,242,9,15,250,0,10,1,179,255,10,2,253,239,10,3,170,6,10,13,203,255,10,14,226,204,10,15,231,0,11,2,231,193,11,3,238,17,11,14,217,79,11,15,181,0,12,3,175,0],"secondary":false},{"width":14,"bonus":520,"chr":"D","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,254,231,3,14,255,255,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,229,134,4,14,255,255,4,15,255,0,5,1,255,255,5,2,254,120,5,14,255,255,5,15,255,0,6,1,249,255,6,2,255,129,6,14,249,250,6,15,255,0,7,1,229,255,7,2,253,161,7,13,173,255,7,14,238,235,7,15,244,0,8,1,178,255,8,2,252,232,8,3,162,9,8,13,241,255,8,14,225,183,8,15,220,0,9,2,255,255,9,3,243,142,9,12,161,255,9,13,255,255,9,14,245,69,9,15,162,0,10,2,214,230,10,3,255,255,10,4,213,199,10,11,184,255,10,12,255,255,10,13,223,194,10,14,255,0,11,3,239,204,11,4,255,255,11,5,255,255,11,6,242,252,11,7,215,255,11,8,217,255,11,9,243,255,11,10,255,255,11,11,255,255,11,12,231,189,11,13,255,11,11,14,170,0,12,4,213,102,12,5,255,175,12,6,255,227,12,7,254,249,12,8,253,246,12,9,249,225,12,10,250,165,12,11,255,66,12,12,255,0,12,13,171,0,13,6,175,0,13,7,227,0,13,8,248,0,13,9,244,0,13,10,220,0,13,11,162,0],"secondary":false},{"width":11,"bonus":375,"chr":"E","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,254,215,3,7,255,255,3,8,255,223,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,254,231,3,14,255,255,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,215,43,4,7,255,255,4,8,255,84,4,9,223,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,229,134,4,14,255,255,4,15,255,0,5,1,255,255,5,2,254,120,5,7,255,255,5,8,255,84,5,14,255,255,5,15,255,0,6,1,255,255,6,2,254,120,6,7,255,255,6,8,255,84,6,14,255,255,6,15,255,0,7,1,255,255,7,2,254,120,7,7,255,255,7,8,255,84,7,14,255,255,7,15,255,0,8,1,255,255,8,2,254,120,8,7,255,255,8,8,255,84,8,14,255,255,8,15,255,0,9,1,255,255,9,2,254,120,9,8,255,42,9,14,255,255,9,15,255,0,10,2,255,0,10,15,255,0],"secondary":false},{"width":11,"bonus":320,"chr":"F","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,254,215,3,8,255,255,3,9,255,223,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,215,43,4,8,255,255,4,9,255,84,4,10,223,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,1,255,255,5,2,254,120,5,8,255,255,5,9,255,84,6,1,255,255,6,2,254,120,6,8,255,255,6,9,255,84,7,1,255,255,7,2,254,120,7,8,255,255,7,9,255,84,8,1,255,255,8,2,254,120,8,8,255,255,8,9,255,84,9,1,255,255,9,2,254,120,9,9,255,42,10,2,255,0],"secondary":false},{"width":14,"bonus":475,"chr":"G","pixels":[1,6,213,255,1,7,241,255,1,8,247,255,1,9,225,255,1,10,169,255,2,4,253,255,2,5,255,255,2,6,251,249,2,7,249,222,2,8,252,218,2,9,254,243,2,10,255,255,2,11,255,255,2,12,204,229,3,3,255,255,3,4,230,227,3,5,253,70,3,6,255,4,3,7,245,0,3,8,217,0,3,9,216,2,3,10,244,60,3,11,254,186,3,12,255,255,3,13,236,202,4,2,251,255,4,3,220,217,4,4,255,7,4,5,205,0,4,12,230,181,4,13,255,255,4,14,209,101,5,2,248,254,5,3,251,26,5,4,187,0,5,13,250,246,5,14,254,177,6,1,205,255,6,2,219,209,6,3,247,0,6,13,176,248,6,14,254,230,6,15,176,0,7,1,233,255,7,2,232,148,7,3,179,0,7,14,253,251,7,15,229,0,8,1,249,255,8,2,244,133,8,7,255,255,8,14,253,253,8,15,249,0,9,1,229,255,9,2,252,151,9,7,255,255,9,8,255,84,9,14,246,246,9,15,251,0,10,1,202,255,10,2,248,199,10,7,255,255,10,8,255,84,10,13,191,255,10,14,235,226,10,15,238,0,11,2,253,252,11,3,196,13,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,230,172,11,15,208,0,12,2,166,95,12,3,250,0,12,7,215,247,12,8,255,208,12,9,255,208,12,10,255,208,12,11,255,208,12,12,255,208,12,13,255,208,12,14,255,84,12,15,155,0,13,8,208,0,13,9,208,0,13,10,208,0,13,11,208,0,13,12,208,0,13,13,208,0,13,14,208,0],"secondary":false},{"width":15,"bonus":490,"chr":"H","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,208,255,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,254,215,3,7,255,255,3,8,255,223,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,215,43,4,7,255,255,4,8,255,84,4,9,223,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,7,255,255,5,8,255,84,6,7,255,255,6,8,255,84,7,7,255,255,7,8,255,84,8,7,255,255,8,8,255,84,9,7,255,255,9,8,255,84,10,7,255,255,10,8,255,84,11,1,208,255,11,2,208,255,11,3,208,255,11,4,208,255,11,5,208,255,11,6,213,255,11,7,255,255,11,8,255,223,11,9,224,237,11,10,208,255,11,11,208,255,11,12,208,255,11,13,208,255,11,14,208,255,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,12,13,255,255,12,14,255,255,12,15,208,0,13,2,255,0,13,3,255,0,13,4,255,0,13,5,255,0,13,6,255,0,13,7,255,0,13,8,255,0,13,9,255,0,13,10,255,0,13,11,255,0,13,12,255,0,13,13,255,0,13,14,255,0,13,15,255,0],"secondary":false},{"width":7,"bonus":265,"chr":"I","pixels":[1,1,255,255,1,14,255,255,2,1,255,255,2,2,255,80,2,14,255,255,2,15,255,0,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,0,4,1,255,255,4,2,254,227,4,3,255,208,4,4,255,208,4,5,255,208,4,6,255,208,4,7,255,208,4,8,255,208,4,9,255,208,4,10,255,208,4,11,255,208,4,12,255,208,4,13,255,225,4,14,255,255,4,15,255,0,5,1,255,255,5,2,255,47,5,3,226,0,5,4,208,0,5,5,208,0,5,6,208,0,5,7,208,0,5,8,208,0,5,9,208,0,5,10,208,0,5,11,208,0,5,12,208,0,5,13,216,51,5,14,255,255,5,15,255,0,6,2,255,0,6,15,255,0],"secondary":false},{"width":6,"bonus":290,"chr":"J","pixels":[0,18,255,255,0,19,255,74,1,17,196,255,1,18,252,254,1,19,255,24,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,226,149,2,19,252,0,3,1,208,255,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,197,3,16,254,162,3,17,255,68,3,18,255,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,4,16,197,0,4,17,162,0],"secondary":false},{"width":12,"bonus":435,"chr":"K","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,208,255,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,217,3,8,255,255,3,9,255,231,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,211,20,4,7,244,206,4,8,250,230,4,9,255,25,4,10,231,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,6,211,255,5,7,255,255,5,8,235,183,5,9,227,7,6,5,223,255,6,6,241,253,6,7,248,222,6,8,255,255,6,9,237,219,7,4,233,255,7,5,236,252,7,6,230,53,7,7,241,11,7,8,240,169,7,9,255,255,7,10,252,242,8,3,241,255,8,4,230,248,8,5,237,40,8,6,233,0,8,9,194,123,8,10,254,245,8,11,255,255,8,12,176,204,9,2,247,255,9,3,224,243,9,4,243,30,9,5,224,0,9,11,252,212,9,12,255,255,9,13,229,220,10,1,253,255,10,2,220,235,10,3,248,20,10,4,214,0,10,12,237,166,10,13,255,255,10,14,250,240,11,1,189,255,11,2,253,12,11,3,202,0,11,13,189,120,11,14,254,243,11,15,236,0],"secondary":false},{"width":11,"bonus":300,"chr":"L","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,208,255,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,237,3,14,255,255,3,15,255,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,236,168,4,14,255,255,4,15,255,0,5,13,155,255,5,14,255,255,5,15,255,0,6,13,155,255,6,14,255,255,6,15,255,0,7,13,155,255,7,14,255,255,7,15,255,0,8,13,155,255,8,14,255,255,8,15,255,0,9,13,155,255,9,14,255,255,9,15,255,0,10,14,156,0,10,15,255,0],"secondary":false},{"width":18,"bonus":715,"chr":"M","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,252,3,3,254,210,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,245,255,4,2,255,255,4,3,254,228,4,4,234,150,4,5,216,53,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,2,248,98,5,3,254,189,5,4,255,253,5,5,255,255,5,6,217,245,6,4,195,35,6,5,254,119,6,6,255,211,6,7,255,255,6,8,253,253,6,9,191,246,7,7,219,56,7,8,255,141,7,9,255,231,7,10,255,255,7,11,247,251,7,12,165,249,8,10,238,77,8,11,255,165,8,12,255,245,8,13,255,255,8,14,235,247,9,11,176,210,9,12,248,242,9,13,255,255,9,14,254,219,9,15,228,0,10,9,211,255,10,10,255,255,10,11,239,251,10,12,208,180,10,13,240,58,10,14,255,0,10,15,218,0,11,6,184,255,11,7,251,255,11,8,248,254,11,9,208,207,11,10,223,87,11,11,255,5,11,12,235,0,12,3,157,255,12,4,241,255,12,5,254,255,12,6,213,229,12,7,211,120,12,8,252,15,12,9,247,0,12,10,169,0,13,1,221,255,13,2,255,255,13,3,223,244,13,4,203,152,13,5,243,32,13,6,254,0,13,7,191,0,14,1,255,255,14,2,254,249,14,3,255,208,14,4,248,214,14,5,231,230,14,6,214,249,14,7,208,255,14,8,208,255,14,9,208,255,14,10,208,255,14,11,208,255,14,12,208,255,14,13,208,255,14,14,208,255,15,1,255,255,15,2,255,255,15,3,255,255,15,4,255,255,15,5,255,255,15,6,255,255,15,7,255,255,15,8,255,255,15,9,255,255,15,10,255,255,15,11,255,255,15,12,255,255,15,13,255,255,15,14,255,255,15,15,208,0,16,2,255,0,16,3,255,0,16,4,255,0,16,5,255,0,16,6,255,0,16,7,255,0,16,8,255,0,16,9,255,0,16,10,255,0,16,11,255,0,16,12,255,0,16,13,255,0,16,14,255,0,16,15,255,0],"secondary":false},{"width":16,"bonus":555,"chr":"N","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,255,255,3,3,254,233,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,165,255,4,2,255,255,4,3,254,246,4,4,242,119,4,5,208,2,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,2,190,98,5,3,255,225,5,4,255,255,5,5,223,226,6,4,242,154,6,5,255,253,6,6,253,249,7,5,170,84,7,6,255,213,7,7,255,255,7,8,225,226,8,7,234,138,8,8,255,249,8,9,253,250,9,9,254,198,9,10,255,255,9,11,227,227,10,10,221,122,10,11,255,241,10,12,254,250,11,12,250,179,11,13,255,255,11,14,228,228,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,254,255,12,13,255,255,12,14,255,255,12,15,204,0,13,1,208,255,13,2,255,208,13,3,255,208,13,4,255,208,13,5,255,208,13,6,255,208,13,7,255,208,13,8,255,208,13,9,255,208,13,10,255,208,13,11,255,208,13,12,255,208,13,13,255,208,13,14,255,208,13,15,255,0,14,2,208,0,14,3,208,0,14,4,208,0,14,5,208,0,14,6,208,0,14,7,208,0,14,8,208,0,14,9,208,0,14,10,208,0,14,11,208,0,14,12,208,0,14,13,208,0,14,14,208,0,14,15,208,0],"secondary":false},{"width":15,"bonus":485,"chr":"O","pixels":[1,5,175,255,1,6,227,255,1,7,247,255,1,8,247,255,1,9,225,255,1,10,173,255,2,3,199,255,2,4,255,255,2,5,255,255,2,6,250,244,2,7,250,218,2,8,254,216,2,9,254,240,2,10,255,255,2,11,255,255,2,12,216,233,3,2,207,255,3,3,255,255,3,4,233,170,3,5,255,43,3,6,255,0,3,7,239,0,3,8,214,0,3,9,215,0,3,10,241,48,3,11,255,159,3,12,255,255,3,13,243,216,4,2,255,255,4,3,229,127,4,4,255,0,4,5,156,0,4,12,203,146,4,13,255,255,4,14,225,117,5,1,187,255,5,2,231,238,5,3,255,1,5,13,233,236,5,14,255,190,6,1,233,255,6,2,227,164,6,3,216,0,6,14,252,238,6,15,190,0,7,1,249,255,7,2,244,131,7,14,253,253,7,15,235,0,8,1,235,255,8,2,252,145,8,14,245,245,8,15,251,0,9,1,189,255,9,2,251,215,9,13,211,255,9,14,226,213,9,15,236,0,10,2,255,255,10,3,230,119,10,13,255,255,10,14,229,111,10,15,189,0,11,2,222,231,11,3,254,255,11,4,193,198,11,12,253,255,11,13,222,230,11,14,255,4,12,3,241,203,12,4,255,255,12,5,255,255,12,6,240,253,12,7,215,255,12,8,215,255,12,9,239,255,12,10,255,255,12,11,255,255,12,12,228,211,12,13,254,20,12,14,200,0,13,4,212,98,13,5,255,171,13,6,254,225,13,7,254,246,13,8,253,247,13,9,250,228,13,10,249,174,13,11,255,78,13,12,255,1,13,13,189,0,14,6,171,0,14,7,224,0,14,8,246,0,14,9,246,0,14,10,224,0,14,11,170,0],"secondary":false},{"width":12,"bonus":395,"chr":"P","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,254,215,3,8,255,255,3,9,255,223,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,215,43,4,8,255,255,4,9,255,84,4,10,223,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,1,255,255,5,2,255,122,5,8,255,255,5,9,255,81,6,1,245,255,6,2,254,144,6,8,255,255,6,9,255,67,7,1,215,255,7,2,253,199,7,8,255,255,7,9,255,25,8,2,255,255,8,3,220,119,8,7,233,255,8,8,224,227,8,9,255,0,9,2,249,248,9,3,255,255,9,4,243,247,9,5,227,255,9,6,255,255,9,7,249,254,9,8,238,62,9,9,199,0,10,3,251,190,10,4,254,245,10,5,254,244,10,6,248,194,10,7,254,58,10,8,248,0,11,4,187,0,11,5,244,0,11,6,243,0,11,7,189,0],"secondary":false},{"width":15,"bonus":530,"chr":"Q","pixels":[1,5,175,255,1,6,227,255,1,7,247,255,1,8,247,255,1,9,225,255,1,10,173,255,2,3,199,255,2,4,255,255,2,5,255,255,2,6,250,244,2,7,250,218,2,8,254,216,2,9,254,240,2,10,255,255,2,11,255,255,2,12,216,233,3,2,207,255,3,3,255,255,3,4,233,170,3,5,255,43,3,6,255,0,3,7,239,0,3,8,214,0,3,9,215,0,3,10,241,48,3,11,255,159,3,12,255,255,3,13,243,216,4,2,255,255,4,3,229,127,4,4,255,0,4,5,156,0,4,12,203,146,4,13,255,255,4,14,225,117,5,1,187,255,5,2,231,238,5,3,255,1,5,13,233,236,5,14,255,190,6,1,233,255,6,2,227,164,6,3,216,0,6,14,252,238,6,15,190,0,7,1,249,255,7,2,244,131,7,14,254,254,7,15,235,0,8,1,235,255,8,2,252,145,8,14,255,255,8,15,254,135,9,1,189,255,9,2,251,215,9,13,211,255,9,14,255,255,9,15,255,255,9,16,208,190,10,2,255,255,10,3,230,119,10,13,255,255,10,14,232,130,10,15,255,187,10,16,255,255,10,17,223,199,11,2,222,231,11,3,254,255,11,4,193,198,11,12,253,255,11,13,227,233,11,14,255,6,11,16,237,203,11,17,255,255,11,18,174,0,12,3,241,203,12,4,255,255,12,5,255,255,12,6,240,253,12,7,215,255,12,8,215,255,12,9,239,255,12,10,255,255,12,11,255,255,12,12,232,216,12,13,254,23,12,14,207,0,12,17,238,205,12,18,255,0,13,4,212,98,13,5,255,171,13,6,254,225,13,7,254,246,13,8,253,250,13,9,250,230,13,10,249,178,13,11,255,84,13,12,255,1,13,13,196,0,13,18,191,0,14,6,171,0,14,7,224,0,14,8,246,0,14,9,248,0,14,10,226,0,14,11,174,0],"secondary":false},{"width":12,"bonus":460,"chr":"R","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,3,1,255,255,3,2,254,231,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,254,215,3,8,255,255,3,9,255,223,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,0,4,1,255,255,4,2,254,120,4,3,230,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,215,43,4,8,255,255,4,9,255,84,4,10,223,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,5,1,255,255,5,2,254,120,5,8,255,255,5,9,255,84,6,1,247,255,6,2,255,139,6,8,255,255,6,9,255,119,7,1,221,255,7,2,253,186,7,8,255,255,7,9,255,255,7,10,215,215,8,1,160,255,8,2,254,255,8,3,208,103,8,7,225,255,8,8,213,222,8,9,255,157,8,10,254,255,8,11,252,251,9,2,252,250,9,3,255,255,9,4,240,248,9,5,225,255,9,6,253,255,9,7,244,253,9,8,231,49,9,9,185,0,9,10,181,87,9,11,255,215,9,12,255,255,9,13,239,239,10,3,253,193,10,4,254,245,10,5,254,240,10,6,247,190,10,7,254,51,10,8,242,0,10,12,234,137,10,13,254,249,10,14,255,255,11,4,191,0,11,5,244,0,11,6,239,0,11,7,184,0,11,14,254,191,11,15,255,0],"secondary":false},{"width":11,"bonus":355,"chr":"S","pixels":[1,3,211,255,1,4,247,255,1,5,211,255,1,13,255,255,2,2,249,255,2,3,252,254,2,4,248,224,2,5,255,249,2,6,255,255,2,7,161,167,2,13,214,249,2,14,254,204,3,1,159,255,3,2,245,254,3,3,250,44,3,4,251,0,3,5,222,36,3,6,254,230,3,7,254,240,3,13,158,255,3,14,251,242,3,15,204,0,4,1,217,255,4,2,219,185,4,3,244,0,4,7,255,255,4,8,246,110,4,14,253,253,4,15,238,0,5,1,247,255,5,2,236,137,5,3,159,0,5,7,245,249,5,8,255,202,5,14,251,252,5,15,252,0,6,1,235,255,6,2,252,148,6,7,153,249,6,8,255,255,6,9,213,66,6,13,178,255,6,14,237,234,6,15,248,0,7,1,211,255,7,2,249,190,7,8,254,255,7,9,254,204,7,13,251,255,7,14,222,169,7,15,217,0,8,2,254,250,8,3,189,18,8,8,173,229,8,9,255,255,8,10,253,245,8,11,223,253,8,12,255,255,8,13,242,251,8,14,252,29,9,2,188,126,9,3,249,6,9,9,211,172,9,10,254,234,9,11,254,246,9,12,246,195,9,13,255,45,9,14,238,0,10,11,234,0,10,12,246,0,10,13,188,0],"secondary":false},{"width":13,"bonus":300,"chr":"T","pixels":[1,1,255,255,2,1,255,255,2,2,254,120,3,1,255,255,3,2,254,120,4,1,255,255,4,2,254,120,5,1,255,255,5,2,254,231,5,3,231,230,5,4,208,255,5,5,208,255,5,6,208,255,5,7,208,255,5,8,208,255,5,9,208,255,5,10,208,255,5,11,208,255,5,12,208,255,5,13,208,255,5,14,208,255,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,208,0,7,1,255,255,7,2,254,120,7,3,255,0,7,4,255,0,7,5,255,0,7,6,255,0,7,7,255,0,7,8,255,0,7,9,255,0,7,10,255,0,7,11,255,0,7,12,255,0,7,13,255,0,7,14,255,0,7,15,255,0,8,1,255,255,8,2,254,120,9,1,255,255,9,2,254,120,10,1,255,255,10,2,254,120,11,1,255,255,11,2,254,120,12,2,255,0],"secondary":false},{"width":15,"bonus":465,"chr":"U","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,243,255,2,11,201,255,3,1,208,255,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,254,228,3,11,255,255,3,12,255,255,3,13,202,212,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,231,31,4,12,255,179,4,13,255,255,4,14,199,119,5,13,246,236,5,14,255,190,6,13,161,248,6,14,253,241,6,15,190,0,7,14,253,253,7,15,239,0,8,13,155,255,8,14,245,245,8,15,251,0,9,13,229,255,9,14,228,206,9,15,235,0,10,12,184,255,10,13,255,255,10,14,237,91,10,15,184,0,11,1,208,255,11,2,208,255,11,3,208,255,11,4,208,255,11,5,208,255,11,6,208,255,11,7,208,255,11,8,208,255,11,9,208,255,11,10,229,255,11,11,255,255,11,12,255,255,11,13,229,179,11,14,255,0,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,253,245,12,11,249,205,12,12,255,99,12,13,255,1,12,14,161,0,13,2,255,0,13,3,255,0,13,4,255,0,13,5,255,0,13,6,255,0,13,7,255,0,13,8,255,0,13,9,255,0,13,10,255,0,13,11,243,0,13,12,200,0],"secondary":false},{"width":12,"bonus":345,"chr":"V","pixels":[0,1,209,255,1,1,251,255,1,2,255,255,1,3,254,254,1,4,192,246,2,2,253,109,2,3,254,201,2,4,255,255,2,5,255,255,2,6,247,252,2,7,167,249,3,4,208,44,3,5,255,127,3,6,254,219,3,7,255,255,3,8,255,255,3,9,236,248,4,7,225,60,4,8,255,145,4,9,255,233,4,10,255,255,4,11,255,255,4,12,217,246,5,10,239,73,5,11,255,152,5,12,254,221,5,13,255,255,5,14,253,253,6,11,181,217,6,12,242,235,6,13,255,255,6,14,254,252,6,15,252,0,7,9,235,255,7,10,255,255,7,11,255,255,7,12,237,224,7,13,237,124,7,14,255,25,7,15,252,0,8,6,221,255,8,7,255,255,8,8,255,255,8,9,244,240,8,10,245,143,8,11,255,45,8,12,255,0,8,13,208,0,9,3,203,255,9,4,255,255,9,5,255,255,9,6,249,250,9,7,242,170,9,8,255,68,9,9,255,2,9,10,229,0,10,1,251,255,10,2,255,255,10,3,254,254,10,4,241,196,10,5,255,92,10,6,255,11,10,7,244,0,10,8,162,0,11,1,208,255,11,2,253,116,11,3,255,25,11,4,253,0,11,5,185,0],"secondary":false},{"width":19,"bonus":655,"chr":"W","pixels":[0,1,158,255,1,1,255,255,1,2,255,255,1,3,254,255,1,4,209,251,2,2,255,131,2,3,255,197,2,4,255,251,2,5,255,255,2,6,255,255,2,7,248,252,2,8,188,252,3,4,200,15,3,5,252,75,3,6,255,140,3,7,254,207,3,8,254,255,3,9,255,255,3,10,255,255,3,11,237,251,3,12,165,255,4,8,209,23,4,9,253,82,4,10,255,136,4,11,255,187,4,12,253,240,4,13,255,255,4,14,255,255,5,10,167,192,5,11,222,213,5,12,249,239,5,13,255,255,5,14,255,245,5,15,255,0,6,7,163,255,6,8,235,255,6,9,255,255,6,10,255,255,6,11,239,238,6,12,226,167,6,13,240,77,6,14,255,8,6,15,245,0,7,4,191,255,7,5,251,255,7,6,255,255,7,7,253,253,7,8,233,212,7,9,245,124,7,10,255,43,7,11,255,0,7,12,223,0,8,1,217,255,8,2,255,255,8,3,255,255,8,4,243,245,8,5,232,179,8,6,252,90,8,7,255,17,8,8,252,0,8,9,194,0,9,1,255,255,9,2,255,255,9,3,254,210,9,4,255,113,9,5,237,43,9,6,163,0,10,2,255,157,10,3,254,234,10,4,255,255,10,5,255,255,10,6,225,249,11,3,158,3,11,4,238,63,11,5,254,138,11,6,255,217,11,7,255,255,11,8,255,255,11,9,242,251,11,10,168,252,12,7,223,46,12,8,255,119,12,9,255,196,12,10,255,249,12,11,255,255,12,12,251,254,12,13,193,250,13,10,199,15,13,11,251,113,13,12,255,215,13,13,255,255,13,14,255,255,14,9,184,255,14,10,243,255,14,11,255,255,14,12,255,255,14,13,252,242,14,14,254,174,14,15,255,0,15,5,177,255,15,6,239,255,15,7,255,255,15,8,255,255,15,9,253,253,15,10,239,210,15,11,248,130,15,12,255,57,15,13,255,3,15,14,240,0,15,15,174,0,16,1,169,255,16,2,233,255,16,3,255,255,16,4,255,255,16,5,255,255,16,6,243,228,16,7,249,152,16,8,255,78,16,9,255,14,16,10,251,0,16,11,196,0,17,1,255,255,17,2,249,243,17,3,247,175,17,4,255,100,17,5,255,31,17,6,255,0,17,7,217,0,18,2,255,2,18,3,237,0,18,4,170,0],"secondary":false},{"width":12,"bonus":385,"chr":"X","pixels":[0,14,153,255,1,1,255,255,1,2,188,219,1,13,227,255,1,14,255,255,1,15,153,0,2,1,179,255,2,2,255,255,2,3,245,239,2,11,165,255,2,12,255,255,2,13,234,246,2,14,234,82,2,15,255,0,3,2,205,108,3,3,254,233,3,4,255,255,3,5,191,217,3,10,233,255,3,11,253,255,3,12,215,170,3,13,255,12,3,14,226,0,4,4,245,162,4,5,255,255,4,6,246,239,4,8,175,255,4,9,255,255,4,10,225,236,4,11,238,57,4,12,253,0,5,5,180,90,5,6,254,225,5,7,255,255,5,8,255,255,5,9,213,145,5,10,255,4,5,11,208,0,6,6,250,254,6,7,255,251,6,8,255,255,6,9,255,205,7,4,211,255,7,5,255,255,7,6,211,204,7,7,249,23,7,8,252,110,7,9,255,243,7,10,255,253,7,11,169,222,8,3,253,255,8,4,236,250,8,5,224,93,8,6,255,0,8,7,169,0,8,10,252,187,8,11,255,255,8,12,244,240,9,1,223,255,9,2,255,255,9,3,214,195,9,4,253,19,9,5,232,0,9,11,210,115,9,12,255,237,9,13,255,255,9,14,207,225,10,1,229,255,10,2,233,86,10,3,255,0,10,4,164,0,10,13,249,175,10,14,255,255,10,15,183,0,11,2,230,0,11,14,197,105,11,15,255,0],"secondary":false},{"width":12,"bonus":305,"chr":"Y","pixels":[1,1,255,255,1,2,240,241,2,2,255,239,2,3,255,255,2,4,226,236,3,3,247,139,3,4,255,245,3,5,255,255,3,6,205,231,4,5,251,149,4,6,255,249,4,7,254,254,4,8,178,231,5,6,161,51,5,7,253,161,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,6,7,206,246,6,8,255,255,6,9,255,227,6,10,255,208,6,11,255,208,6,12,255,208,6,13,255,208,6,14,255,208,6,15,255,0,7,5,187,255,7,6,255,255,7,7,239,249,7,8,222,120,7,9,255,3,7,10,227,0,7,11,208,0,7,12,208,0,7,13,208,0,7,14,208,0,7,15,208,0,8,3,173,255,8,4,255,255,8,5,247,253,8,6,221,152,8,7,255,13,8,8,233,0,9,1,160,255,9,2,251,255,9,3,253,255,9,4,224,181,9,5,255,27,9,6,246,0,10,1,255,255,10,2,230,207,10,3,252,47,10,4,253,0,10,5,159,0,11,2,255,0,11,3,187,0],"secondary":false},{"width":12,"bonus":405,"chr":"Z","pixels":[1,1,255,255,1,13,205,255,1,14,255,255,2,1,255,255,2,2,254,120,2,12,247,255,2,13,255,255,2,14,255,255,2,15,255,0,3,1,255,255,3,2,254,120,3,10,193,255,3,11,255,255,3,12,240,242,3,13,253,180,3,14,255,255,3,15,255,0,4,1,255,255,4,2,254,120,4,9,243,255,4,10,255,255,4,11,233,181,4,12,255,16,4,13,240,127,4,14,255,255,4,15,255,0,5,1,255,255,5,2,254,120,5,7,179,255,5,8,255,255,5,9,243,247,5,10,247,88,5,11,255,0,5,12,165,0,5,14,255,255,5,15,255,0,6,1,255,255,6,2,254,120,6,6,235,255,6,7,255,255,6,8,232,197,6,9,255,24,6,10,236,0,6,14,255,255,6,15,255,0,7,1,255,255,7,2,254,120,7,4,166,255,7,5,255,255,7,6,246,251,7,7,244,105,7,8,255,0,7,9,180,0,7,14,255,255,7,15,255,0,8,1,255,255,8,2,255,178,8,3,240,242,8,4,255,255,8,5,233,212,8,6,255,33,8,7,242,0,8,14,255,255,8,15,255,0,9,1,255,255,9,2,255,255,9,3,252,251,9,4,241,123,9,5,255,2,9,6,194,0,9,14,255,255,9,15,255,0,10,1,255,255,10,2,254,207,10,3,255,43,10,4,248,0,10,14,255,255,10,15,255,0,11,2,255,0,11,3,206,0,11,15,255,0],"secondary":false},{"width":11,"bonus":425,"chr":"0","pixels":[1,4,155,255,1,5,207,255,1,6,237,255,1,7,251,255,1,8,249,255,1,9,235,255,1,10,201,255,2,2,177,255,2,3,255,255,2,4,255,255,2,5,252,250,2,6,248,228,2,7,252,214,2,8,254,210,2,9,254,222,2,10,254,248,2,11,255,255,2,12,255,255,2,13,174,226,3,2,255,255,3,3,226,182,3,4,255,49,3,5,255,2,3,6,247,0,3,7,222,0,3,8,211,0,3,9,210,0,3,10,222,2,3,11,248,50,3,12,255,161,3,13,255,255,3,14,202,156,4,1,225,255,4,2,220,211,4,3,255,0,4,4,161,0,4,13,228,202,4,14,254,222,5,1,247,255,5,2,240,136,5,3,182,0,5,14,253,251,5,15,222,0,6,1,219,255,6,2,253,188,6,13,187,255,6,14,239,239,6,15,249,0,7,2,255,255,7,3,232,186,7,12,169,255,7,13,255,255,7,14,221,152,7,15,224,0,8,2,200,194,8,3,255,255,8,4,255,255,8,5,250,254,8,6,224,255,8,7,211,255,8,8,211,255,8,9,223,255,8,10,249,255,8,11,255,255,8,12,255,255,8,13,227,194,8,14,255,6,9,3,172,74,9,4,255,142,9,5,255,201,9,6,254,237,9,7,254,251,9,8,254,251,9,9,252,240,9,10,248,212,9,11,253,154,9,12,254,64,9,13,255,0,9,14,172,0,10,6,201,0,10,7,236,0,10,8,250,0,10,9,250,0,10,10,237,0,10,11,206,0],"secondary":false},{"width":11,"bonus":260,"chr":"1","pixels":[2,3,221,255,2,4,212,245,3,2,173,255,3,3,247,255,3,4,227,57,3,5,204,0,4,2,251,255,4,3,199,104,4,4,247,0,5,1,249,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,6,1,208,255,6,2,254,209,6,3,255,208,6,4,255,208,6,5,255,208,6,6,255,208,6,7,255,208,6,8,255,208,6,9,255,208,6,10,255,208,6,11,255,208,6,12,255,208,6,13,255,208,6,14,255,208,6,15,255,0,7,2,208,0,7,3,208,0,7,4,208,0,7,5,208,0,7,6,208,0,7,7,208,0,7,8,208,0,7,9,208,0,7,10,208,0,7,11,208,0,7,12,208,0,7,13,208,0,7,14,208,0,7,15,208,0],"secondary":false},{"width":11,"bonus":345,"chr":"2","pixels":[1,13,207,255,1,14,255,255,2,2,255,255,2,3,195,161,2,12,223,255,2,13,255,255,2,14,255,255,2,15,255,0,3,1,187,255,3,2,225,240,3,3,255,3,3,11,237,255,3,12,232,250,3,13,243,169,3,14,255,255,3,15,255,0,4,1,239,255,4,2,223,154,4,3,212,0,4,10,247,255,4,11,226,246,4,12,239,33,4,13,240,127,4,14,255,255,4,15,255,0,5,1,247,255,5,2,248,147,5,9,253,255,5,10,221,237,5,11,248,23,5,12,218,0,5,14,255,255,5,15,255,0,6,1,197,255,6,2,254,240,6,3,162,72,6,7,183,255,6,8,255,255,6,9,217,217,6,10,253,12,6,11,205,0,6,14,255,255,6,15,255,0,7,2,255,255,7,3,255,253,7,4,227,248,7,5,235,255,7,6,255,255,7,7,253,255,7,8,220,152,7,9,255,3,7,10,184,0,7,14,255,255,7,15,255,0,8,3,255,205,8,4,254,249,8,5,250,228,8,6,248,167,8,7,254,46,8,8,253,0,8,14,255,255,8,15,255,0,9,4,205,0,9,5,248,0,9,6,224,0,9,7,163,0,9,14,255,255,9,15,255,0,10,15,255,0],"secondary":false},{"width":11,"bonus":365,"chr":"3","pixels":[1,2,167,255,1,13,255,255,2,2,255,255,2,3,192,97,2,13,220,246,2,14,255,187,3,1,181,255,3,2,226,236,3,3,255,0,3,7,187,255,3,13,159,255,3,14,251,233,3,15,187,0,4,1,231,255,4,2,223,164,4,3,209,0,4,7,255,255,4,8,211,104,4,14,253,251,4,15,229,0,5,1,251,255,5,2,243,133,5,7,255,255,5,8,255,107,5,14,250,250,5,15,249,0,6,1,233,255,6,2,253,168,6,7,247,253,6,8,254,164,6,13,199,255,6,14,235,227,6,15,245,0,7,1,172,255,7,2,254,250,7,3,194,107,7,6,245,255,7,7,195,168,7,8,254,249,7,9,188,94,7,13,255,255,7,14,227,148,7,15,209,0,8,2,252,251,8,3,255,255,8,4,255,255,8,5,255,255,8,6,212,225,8,7,246,7,8,8,233,231,8,9,255,255,8,10,235,247,8,11,239,255,8,12,255,255,8,13,238,242,8,14,255,18,9,3,253,176,9,4,254,195,9,5,254,132,9,6,255,11,9,7,187,0,9,9,241,187,9,10,254,240,9,11,253,239,9,12,249,169,9,13,255,29,9,14,226,0,10,4,175,0,10,5,194,0,10,10,177,0,10,11,240,0,10,12,237,0,10,13,165,0],"secondary":false},{"width":11,"bonus":420,"chr":"4","pixels":[1,9,160,255,1,10,255,255,1,11,163,255,2,8,227,255,2,9,229,253,2,10,255,255,2,11,254,164,2,12,164,0,3,6,157,255,3,7,253,255,3,8,183,217,3,9,228,17,3,10,255,255,3,11,254,164,3,12,164,0,4,5,225,255,4,6,225,254,4,7,183,96,4,8,254,0,4,9,156,0,4,10,255,255,4,11,254,164,4,12,164,0,5,3,154,255,5,4,253,255,5,5,177,215,5,6,227,14,5,7,224,0,5,10,255,255,5,11,254,164,5,12,164,0,6,2,223,255,6,3,202,252,6,4,178,87,6,5,253,0,6,10,255,255,6,11,254,164,6,12,164,0,7,1,253,255,7,2,249,253,7,3,250,213,7,4,245,217,7,5,220,242,7,6,208,255,7,7,208,255,7,8,208,255,7,9,208,255,7,10,255,255,7,11,254,239,7,12,239,222,7,13,208,255,7,14,208,255,8,1,255,255,8,2,255,255,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,8,14,255,255,8,15,208,0,9,2,255,0,9,3,255,0,9,4,255,0,9,5,255,0,9,6,255,0,9,7,255,0,9,8,255,0,9,9,255,0,9,10,255,255,9,11,254,164,9,12,255,0,9,13,255,0,9,14,255,0,9,15,255,0,10,10,255,255,10,11,254,164,10,12,164,0],"secondary":false},{"width":11,"bonus":350,"chr":"5","pixels":[1,6,163,255,1,13,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,212,162,2,13,213,243,2,14,254,198,3,1,255,255,3,2,255,177,3,3,255,87,3,4,255,59,3,5,255,38,3,6,254,255,3,7,255,103,3,14,252,242,3,15,198,0,4,1,255,255,4,2,254,120,4,3,177,0,4,6,255,255,4,7,254,89,4,14,253,253,4,15,239,0,5,1,255,255,5,2,254,120,5,6,255,255,5,7,255,116,5,14,246,246,5,15,252,0,6,1,255,255,6,2,254,120,6,6,245,254,6,7,255,197,6,13,223,255,6,14,226,209,6,15,237,0,7,1,255,255,7,2,254,120,7,6,162,254,7,7,255,255,7,8,232,170,7,12,185,255,7,13,255,255,7,14,234,92,7,15,186,0,8,1,199,255,8,2,255,93,8,7,242,233,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,227,172,8,14,255,0,9,2,200,0,9,8,239,139,9,9,254,192,9,10,255,199,9,11,254,164,9,12,254,76,9,13,255,0,9,14,153,0,10,10,192,0,10,11,199,0,10,12,164,0],"secondary":false},{"width":11,"bonus":430,"chr":"6","pixels":[1,5,154,255,1,6,205,255,1,7,237,255,1,8,249,255,1,9,247,255,1,10,225,255,1,11,169,255,2,3,193,255,2,4,255,255,2,5,255,255,2,6,244,238,2,7,250,236,2,8,255,255,2,9,254,232,2,10,254,228,2,11,254,255,2,12,255,255,2,13,187,220,3,2,215,255,3,3,248,254,3,4,223,140,3,5,255,24,3,6,255,53,3,7,252,235,3,8,239,99,3,9,255,0,3,10,231,0,3,11,231,36,3,12,255,172,3,13,255,255,3,14,204,144,4,2,255,255,4,3,227,83,4,4,247,0,4,6,217,250,4,7,178,227,4,8,232,0,4,13,236,212,4,14,254,215,5,1,205,255,5,2,221,225,5,3,255,0,5,6,255,255,5,7,229,109,5,8,158,0,5,14,254,250,5,15,214,0,6,1,243,255,6,2,233,157,6,3,195,0,6,6,255,255,6,7,255,127,6,13,171,255,6,14,244,244,6,15,249,0,7,1,253,255,7,2,249,128,7,6,222,252,7,7,255,241,7,8,160,106,7,13,253,255,7,14,224,182,7,15,234,0,8,1,203,255,8,2,254,129,8,7,255,253,8,8,255,255,8,9,239,249,8,10,217,255,8,11,247,255,8,12,255,255,8,13,238,242,8,14,254,26,8,15,160,0,9,2,203,0,9,8,254,186,9,9,255,241,9,10,254,250,9,11,249,225,9,12,251,146,9,13,255,22,9,14,226,0,10,9,185,0,10,10,241,0,10,11,249,0,10,12,220,0],"secondary":false},{"width":11,"bonus":280,"chr":"7","pixels":[1,1,255,255,2,1,255,255,2,2,254,120,3,1,255,255,3,2,254,120,3,14,235,255,4,1,255,255,4,2,254,120,4,11,171,255,4,12,251,255,4,13,255,255,4,14,241,239,4,15,236,0,5,1,255,255,5,2,254,120,5,9,205,255,5,10,255,255,5,11,254,255,5,12,232,204,5,13,252,80,5,14,255,3,5,15,226,0,6,1,255,255,6,2,254,120,6,7,233,255,6,8,255,255,6,9,245,249,6,10,233,157,6,11,255,39,6,12,254,0,6,13,186,0,7,1,255,255,7,2,254,120,7,4,167,255,7,5,249,255,7,6,255,255,7,7,233,229,7,8,243,107,7,9,255,11,7,10,240,0,8,1,255,255,8,2,255,241,8,3,255,255,8,4,251,254,8,5,225,189,8,6,251,61,8,7,255,0,8,8,209,0,9,1,255,255,9,2,254,228,9,3,248,129,9,4,255,24,9,5,250,0,9,6,167,0,10,2,255,0,10,3,228,0],"secondary":false},{"width":11,"bonus":470,"chr":"8","pixels":[1,3,177,255,1,4,195,255,1,10,221,255,1,11,247,255,1,12,208,255,2,2,241,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,234,231,2,9,255,255,2,10,248,248,2,11,250,224,2,12,254,252,2,13,255,253,3,1,161,255,3,2,247,253,3,3,246,75,3,4,255,12,3,5,255,92,3,6,255,251,3,7,245,205,3,8,255,255,3,9,208,174,3,10,255,6,3,11,241,0,3,12,227,54,3,13,255,243,3,14,254,174,4,1,223,255,4,2,221,185,4,3,246,0,4,6,179,196,4,7,255,255,4,8,239,200,4,9,255,0,4,13,174,227,4,14,253,225,4,15,173,0,5,1,247,255,5,2,240,136,5,3,160,0,5,7,255,255,5,8,255,124,5,9,188,0,5,14,253,252,5,15,223,0,6,1,223,255,6,2,252,163,6,7,255,255,6,8,255,237,6,13,161,255,6,14,243,243,6,15,250,0,7,1,163,255,7,2,253,247,7,3,188,98,7,6,251,255,7,7,202,178,7,8,254,251,7,9,250,192,7,13,249,255,7,14,223,191,7,15,232,0,8,2,250,246,8,3,255,255,8,4,255,255,8,5,255,255,8,6,213,224,8,7,251,3,8,8,193,154,8,9,255,255,8,10,253,249,8,11,225,254,8,12,255,255,8,13,248,252,8,14,250,45,8,15,167,0,9,3,250,177,9,4,255,193,9,5,254,126,9,6,255,9,9,7,187,0,9,9,171,149,9,10,254,216,9,11,255,247,9,12,248,203,9,13,255,57,9,14,246,0,10,4,174,0,10,5,193,0,10,11,216,0,10,12,247,0,10,13,197,0],"secondary":false},{"width":11,"bonus":415,"chr":"9","pixels":[1,3,158,255,1,4,233,255,1,5,249,255,1,6,221,255,2,2,235,255,2,3,255,255,2,4,247,243,2,5,251,221,2,6,255,249,2,7,255,255,2,8,188,187,2,14,202,255,3,1,163,255,3,2,252,254,3,3,242,89,3,4,255,0,3,5,235,0,3,6,221,29,3,7,253,205,3,8,254,251,3,14,255,255,3,15,202,0,4,1,233,255,4,2,222,187,4,3,251,0,4,8,255,255,4,9,251,64,4,14,249,250,4,15,255,0,5,1,249,255,5,2,244,134,5,3,163,0,5,8,255,255,5,9,254,70,5,13,199,255,5,14,232,225,5,15,244,0,6,1,211,255,6,2,253,190,6,8,247,253,6,9,255,17,6,13,255,255,6,14,227,137,6,15,205,0,7,2,255,255,7,3,228,166,7,7,219,255,7,8,153,146,7,9,245,2,7,11,155,255,7,12,253,255,7,13,233,240,7,14,255,12,8,2,198,200,8,3,255,255,8,4,252,251,8,5,221,253,8,6,251,255,8,7,242,252,8,8,251,233,8,9,252,254,8,10,255,255,8,11,255,255,8,12,230,212,8,13,254,21,8,14,219,0,9,3,181,93,9,4,255,165,9,5,254,222,9,6,253,247,9,7,254,249,9,8,253,235,9,9,249,205,9,10,253,148,9,11,254,58,9,12,255,0,9,13,192,0,10,5,165,0,10,6,222,0,10,7,246,0,10,8,248,0,10,9,234,0,10,10,200,0],"secondary":false},{"width":17,"bonus":600,"chr":"%","pixels":[1,3,153,255,1,4,225,255,1,5,247,255,1,6,227,255,1,7,165,255,2,2,189,255,2,3,255,255,2,4,247,243,2,5,249,217,2,6,254,228,2,7,255,255,2,8,243,232,3,2,253,255,3,3,225,157,3,4,255,1,3,5,235,0,3,6,212,0,3,7,237,99,3,8,255,255,3,9,229,67,4,2,253,255,4,3,255,148,4,8,255,255,4,9,255,59,4,14,239,255,5,2,182,250,5,3,255,255,5,4,247,245,5,5,213,255,5,6,231,255,5,7,255,255,5,8,236,241,5,9,255,10,5,12,213,255,5,13,212,255,5,15,239,0,6,3,221,164,6,4,254,222,6,5,254,248,6,6,250,232,6,7,247,172,6,8,255,37,6,9,227,37,6,10,178,252,6,11,243,255,6,12,154,194,6,13,213,6,6,14,212,0,7,5,222,0,7,6,247,0,7,7,228,12,7,8,212,160,7,9,249,254,7,10,183,241,7,11,185,40,7,12,244,0,8,7,227,255,8,8,221,253,8,9,168,111,8,10,248,0,8,11,173,0,9,5,195,255,9,6,247,255,9,7,173,189,9,8,228,11,9,9,232,102,9,10,199,227,9,11,199,255,9,12,172,255,10,3,153,255,10,4,253,255,10,5,198,237,10,6,204,45,10,7,248,0,10,8,187,161,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,11,2,239,255,11,3,229,253,11,4,187,115,11,5,253,0,11,6,184,0,11,8,223,255,11,9,208,205,11,10,255,27,11,11,255,5,11,12,255,42,11,13,255,211,11,14,254,213,12,3,240,13,12,4,227,0,12,8,251,255,12,9,232,76,12,10,168,0,12,14,253,247,12,15,212,0,13,8,221,255,13,9,253,175,13,13,215,255,13,14,235,231,13,15,245,0,14,9,255,255,14,10,255,255,14,11,255,255,14,12,255,255,14,13,255,255,14,14,232,114,14,15,213,0,15,9,157,137,15,10,255,173,15,11,255,199,15,12,254,174,15,13,255,83,15,14,255,0,16,11,173,0,16,12,199,0,16,13,174,0],"secondary":false},{"width":9,"bonus":255,"chr":"/","pixels":[1,16,195,255,1,17,249,255,2,12,181,255,2,13,243,255,2,14,255,255,2,15,255,255,2,16,241,241,2,17,233,176,2,18,250,0,3,8,167,255,3,9,233,255,3,10,255,255,3,11,255,255,3,12,245,247,3,13,231,191,3,14,248,109,3,15,255,39,3,16,255,0,3,17,228,0,3,18,161,0,4,4,154,255,4,5,221,255,4,6,255,255,4,7,255,255,4,8,249,251,4,9,231,205,4,10,244,124,4,11,254,52,4,12,255,2,4,13,238,0,4,14,173,0,5,1,208,255,5,2,253,255,5,3,255,255,5,4,253,253,5,5,233,218,5,6,238,141,5,7,255,65,5,8,255,7,5,9,246,0,5,10,186,0,6,0,255,255,6,1,235,230,6,2,235,157,6,3,254,77,6,4,255,14,6,5,252,0,6,6,199,0,7,0,255,24,7,1,255,0,7,2,212,0],"secondary":false},{"width":11,"bonus":200,"chr":"+","pixels":[1,8,255,255,2,8,255,255,2,9,255,84,3,8,255,255,3,9,255,84,4,4,208,255,4,5,208,255,4,6,208,255,4,7,213,255,4,8,255,255,4,9,255,223,4,10,224,237,4,11,208,255,4,12,208,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,208,0,6,5,255,0,6,6,255,0,6,7,255,36,6,8,255,255,6,9,255,84,6,10,255,0,6,11,255,0,6,12,255,0,6,13,255,0,7,8,255,255,7,9,255,84,8,8,255,255,8,9,255,84,9,8,255,255,9,9,255,84,10,9,255,0],"secondary":false},{"width":10,"bonus":245,"chr":"?","pixels":[1,2,167,255,2,2,241,251,2,3,169,9,3,1,219,255,3,2,220,197,3,3,237,0,3,13,247,255,3,14,181,255,4,1,249,255,4,2,237,142,4,3,170,0,4,8,245,255,4,9,216,247,4,10,182,146,4,12,173,255,4,13,255,255,4,14,253,214,4,15,181,0,5,1,229,255,5,2,252,155,5,7,239,255,5,8,196,228,5,9,245,4,5,10,209,0,5,13,183,42,5,14,255,5,5,15,212,0,6,1,179,255,6,2,254,246,6,3,182,101,6,6,223,255,6,7,222,249,6,8,239,14,6,9,175,0,7,2,252,251,7,3,255,255,7,4,255,255,7,5,255,255,7,6,240,250,7,7,229,49,7,8,217,0,8,3,252,176,8,4,254,198,8,5,255,153,8,6,255,33,8,7,236,0,9,4,174,0,9,5,198,0,9,6,153,0],"secondary":false},{"width":7,"bonus":200,"chr":"!","pixels":[3,1,208,255,3,2,208,255,3,3,208,255,3,4,208,255,3,5,208,255,3,6,208,255,3,7,208,255,3,8,208,255,3,9,208,255,3,10,208,255,3,13,247,255,3,14,181,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,208,0,4,12,173,255,4,13,255,255,4,14,253,214,4,15,181,0,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,11,255,0,5,13,183,42,5,14,255,5,5,15,212,0],"secondary":false},{"width":18,"bonus":760,"chr":"@","pixels":[1,7,211,255,1,8,243,255,1,9,249,255,1,10,231,255,1,11,181,255,2,5,255,255,2,6,255,255,2,7,253,253,2,8,250,230,2,9,253,215,2,10,254,237,2,11,255,255,2,12,255,255,2,13,226,235,3,3,193,255,3,4,255,255,3,5,228,213,3,6,255,78,3,7,255,5,3,8,251,0,3,9,226,0,3,10,214,0,3,11,239,46,3,12,255,160,3,13,255,255,3,14,248,223,4,3,255,255,4,4,223,141,4,5,255,1,4,6,190,0,4,13,203,146,4,14,255,255,4,15,236,142,5,2,253,255,5,3,211,194,5,4,255,0,5,6,153,255,5,7,225,255,5,8,249,255,5,9,225,255,5,10,155,255,5,14,223,226,5,15,254,233,6,2,252,254,6,3,253,25,6,4,173,51,6,5,235,255,6,6,255,255,6,7,249,245,6,8,250,218,6,9,255,237,6,10,255,255,6,11,239,227,6,15,255,255,6,16,235,42,7,1,202,255,7,2,223,214,7,3,252,0,7,4,177,243,7,5,248,254,7,6,242,89,7,7,255,1,7,8,239,0,7,9,214,4,7,10,246,140,7,11,255,255,7,12,222,66,7,15,255,255,7,16,255,69,8,1,239,255,8,2,233,162,8,3,187,0,8,4,237,255,8,5,219,174,8,6,247,0,8,11,255,255,8,12,254,64,8,15,255,255,8,16,255,77,9,1,251,255,9,2,247,131,9,4,245,255,9,5,247,146,9,10,158,255,9,11,218,245,9,12,255,4,9,15,255,255,9,16,255,55,10,1,231,255,10,2,253,148,10,4,215,255,10,5,254,239,10,6,234,227,10,7,208,255,10,8,219,255,10,9,247,255,10,10,200,252,10,11,166,31,10,12,209,0,10,15,255,255,10,16,255,23,11,1,197,255,11,2,250,206,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,236,187,11,14,163,255,11,15,222,234,11,16,255,0,12,2,255,255,12,3,212,61,12,6,255,0,12,7,255,0,12,8,255,0,12,9,255,8,12,10,255,119,12,11,255,255,12,12,192,78,12,15,191,105,12,16,203,0,13,2,248,248,13,3,255,213,13,11,255,255,13,12,255,67,14,3,255,255,14,4,251,233,14,10,225,255,14,11,242,251,14,12,255,13,15,4,255,245,15,5,255,255,15,6,255,255,15,7,255,255,15,8,255,255,15,9,255,255,15,10,248,252,15,11,234,82,15,12,238,0,16,5,249,116,16,6,254,171,16,7,255,199,16,8,255,187,16,9,255,130,16,10,255,29,16,11,245,0,17,7,170,0,17,8,199,0,17,9,187,0],"secondary":false},{"width":14,"bonus":445,"chr":"#","pixels":[1,10,255,255,2,6,255,255,2,10,255,255,2,11,255,84,3,6,255,255,3,7,254,64,3,10,255,255,3,11,255,142,3,12,166,189,3,13,167,255,3,14,209,255,4,6,255,255,4,7,254,164,4,8,202,234,4,9,239,255,4,10,255,255,4,11,255,255,4,12,242,238,4,13,216,212,4,14,214,160,4,15,210,0,5,3,193,255,5,4,239,255,5,5,255,255,5,6,255,255,5,7,254,225,5,8,222,188,5,9,220,153,5,10,255,255,5,11,255,90,5,12,255,0,5,13,226,0,5,14,180,0,6,3,186,213,6,4,219,126,6,5,244,77,6,6,255,255,6,7,254,64,6,8,224,0,6,9,177,52,6,10,255,255,6,11,255,84,7,4,156,0,7,6,255,255,7,7,254,64,7,10,255,255,7,11,255,127,7,12,153,171,7,14,197,255,8,6,255,255,8,7,255,151,8,8,187,225,8,9,221,255,8,10,255,255,8,11,255,255,8,12,248,248,8,13,220,228,8,14,211,181,8,15,197,0,9,3,165,255,9,4,213,255,9,5,251,255,9,6,255,255,9,7,254,234,9,8,224,204,9,9,218,173,9,10,255,255,9,11,255,100,9,12,255,0,9,13,241,0,9,14,196,0,10,3,198,230,10,4,210,157,10,5,229,104,10,6,255,255,10,7,254,64,10,8,234,0,10,9,191,48,10,10,255,255,10,11,255,84,11,4,178,0,11,6,255,255,11,7,254,64,11,10,255,255,11,11,255,84,12,6,255,255,12,7,254,64,12,11,255,0,13,7,255,0],"secondary":false},{"width":11,"bonus":490,"chr":"$","pixels":[1,3,153,255,1,4,235,255,1,5,235,255,1,6,161,255,1,12,195,255,1,13,221,255,2,2,161,255,2,3,255,255,2,4,243,237,2,5,253,233,2,6,255,255,2,7,234,215,2,13,255,255,2,14,226,43,3,2,251,255,3,3,215,174,3,4,255,0,3,5,226,1,3,6,245,153,3,7,255,255,3,8,217,102,3,13,255,255,3,14,255,67,4,0,208,255,4,1,217,255,4,2,255,255,4,3,254,221,4,4,235,226,4,5,208,255,4,6,215,255,4,7,255,255,4,8,255,237,4,9,224,237,4,10,208,255,4,11,208,255,4,12,215,255,4,13,255,255,4,14,255,223,4,15,221,241,5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,232,141,6,1,255,43,6,2,255,255,6,3,255,67,6,4,255,0,6,5,255,0,6,6,255,0,6,7,255,121,6,8,255,255,6,9,255,69,6,10,255,0,6,11,255,0,6,12,255,90,6,13,255,255,6,14,255,35,6,15,255,0,6,16,255,0,7,2,255,255,7,3,255,109,7,8,253,253,7,9,255,196,7,12,197,255,7,13,237,245,7,14,255,0,8,2,221,253,8,3,254,180,8,8,161,237,8,9,255,255,8,10,250,240,8,11,236,254,8,12,255,255,8,13,220,119,8,14,228,0,9,3,229,80,9,4,180,0,9,9,214,185,9,10,255,243,9,11,253,235,9,12,245,130,9,13,255,1,10,10,156,0,10,11,243,0,10,12,233,0],"secondary":false},{"width":11,"bonus":200,"chr":"^","pixels":[1,8,169,255,1,9,253,255,2,6,171,255,2,7,253,255,2,8,225,248,2,9,203,126,2,10,253,0,3,4,173,255,3,5,253,255,3,6,217,246,3,7,199,112,3,8,254,3,3,9,219,0,4,2,175,255,4,3,253,255,4,4,208,242,4,5,197,98,4,6,254,0,4,7,209,0,5,1,255,255,5,2,253,255,5,3,207,123,5,4,254,0,5,5,198,0,6,2,255,202,6,3,255,253,6,4,205,215,7,3,216,82,7,4,254,196,7,5,255,255,7,6,206,239,8,5,209,77,8,6,254,189,8,7,255,255,8,8,224,240,9,7,203,70,9,8,255,181,9,9,255,255,10,9,196,65,10,10,255,0],"secondary":false},{"width":11,"bonus":105,"chr":"~","pixels":[1,8,231,255,2,7,247,255,2,8,195,160,2,9,231,0,3,7,255,255,3,8,250,94,4,7,250,254,4,8,255,146,5,7,186,253,5,8,254,234,6,8,255,255,6,9,238,58,7,8,255,255,7,9,255,78,8,8,255,255,8,9,255,43,9,7,199,255,9,8,207,230,9,9,255,0,10,8,200,0,10,9,187,0],"secondary":false},{"width":15,"bonus":550,"chr":"&","pixels":[1,10,227,255,1,11,247,255,1,12,203,255,2,3,191,255,2,4,187,255,2,8,179,255,2,9,255,255,2,10,246,246,2,11,252,228,2,12,255,255,2,13,253,252,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,206,218,3,8,255,255,3,9,221,162,3,10,255,5,3,11,237,0,3,12,233,80,3,13,254,252,3,14,252,164,4,1,195,255,4,2,238,248,4,3,255,40,4,4,255,25,4,5,255,158,4,6,255,255,4,7,255,255,4,8,217,221,4,9,255,0,4,13,196,224,4,14,255,219,4,15,162,0,5,1,235,255,5,2,228,157,5,3,231,0,5,6,226,201,5,7,255,255,5,8,255,158,5,9,188,0,5,14,252,251,5,15,219,0,6,1,241,255,6,2,246,141,6,6,235,255,6,7,252,248,6,8,255,255,6,9,203,149,6,14,247,247,6,15,248,0,7,1,205,255,7,2,253,229,7,3,154,65,7,5,187,255,7,6,242,255,7,7,238,44,7,8,254,209,7,9,254,255,7,10,165,133,7,13,185,255,7,14,231,224,7,15,240,0,8,2,255,255,8,3,255,255,8,4,255,255,8,5,254,255,8,6,211,105,8,7,242,0,8,9,249,231,8,10,255,247,8,13,251,255,8,14,221,148,8,15,202,0,9,2,154,157,9,3,255,184,9,4,254,180,9,5,255,69,9,6,254,0,9,10,253,241,9,11,254,236,9,12,210,240,9,13,243,254,9,14,252,23,10,4,184,0,10,5,180,0,10,11,255,255,10,12,255,255,10,13,222,130,10,14,242,0,11,10,213,255,11,11,255,255,11,12,255,255,11,13,255,221,12,8,239,255,12,9,255,255,12,10,247,252,12,11,231,120,12,12,255,91,12,13,255,253,12,14,251,229,13,8,211,255,13,9,247,131,13,10,255,23,13,11,244,0,13,14,255,253,13,15,225,0,14,9,212,0,14,15,253,0],"secondary":false},{"width":12,"bonus":250,"chr":"*","pixels":[2,3,247,255,2,4,215,229,3,3,187,253,3,4,253,214,3,5,193,0,3,7,189,255,4,4,248,238,4,5,224,82,4,6,233,255,4,7,255,255,4,8,240,212,5,0,207,255,5,1,179,255,5,3,154,255,5,4,254,255,5,5,254,252,5,6,200,229,5,7,239,71,5,8,255,0,5,9,200,0,6,0,255,255,6,1,254,252,6,2,246,234,6,3,236,226,6,4,255,255,6,5,254,237,6,6,253,114,6,7,182,14,7,1,255,2,7,2,251,0,7,3,236,98,7,4,252,242,7,5,255,148,7,6,255,255,7,7,243,245,8,3,161,255,8,4,230,241,8,5,239,0,8,6,182,116,8,7,254,240,8,8,249,191,9,3,231,255,9,4,234,217,9,5,218,0,9,8,243,44,9,9,187,0,10,3,180,254,10,4,245,153,10,5,199,0,11,4,180,0],"secondary":false},{"width":7,"bonus":245,"chr":"(","pixels":[1,4,175,255,1,5,215,255,1,6,233,255,1,7,249,255,1,8,247,255,1,9,231,255,1,10,211,255,1,11,167,255,2,1,221,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,252,251,2,6,251,235,2,7,252,218,2,8,254,218,2,9,254,234,2,10,254,251,2,11,255,255,2,12,255,255,2,13,255,255,2,14,222,245,3,0,255,255,3,1,246,246,3,2,242,161,3,3,255,89,3,4,255,37,3,5,255,1,3,6,248,0,3,7,231,0,3,8,215,0,3,9,217,0,3,10,233,2,3,11,250,42,3,12,255,92,3,13,255,154,3,14,254,239,3,15,255,255,3,16,238,240,4,0,235,89,4,1,255,6,4,2,237,0,4,14,156,10,4,15,243,87,4,16,255,207,4,17,255,255,5,0,205,0,5,17,224,107,5,18,255,0],"secondary":false},{"width":7,"bonus":245,"chr":")","pixels":[2,16,239,255,2,17,248,255,3,0,255,255,3,1,255,255,3,2,216,246,3,13,203,255,3,14,255,255,3,15,255,255,3,16,223,215,3,17,242,40,3,18,248,0,4,0,202,82,4,1,254,162,4,2,254,245,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,252,252,4,14,237,183,4,15,255,71,4,16,255,0,4,17,188,0,5,2,166,16,5,3,247,64,5,4,255,115,5,5,255,160,5,6,254,180,5,7,255,197,5,8,254,201,5,9,254,183,5,10,254,164,5,11,255,123,5,12,255,69,5,13,255,15,5,14,249,0,5,15,170,0,6,6,160,0,6,7,180,0,6,8,197,0,6,9,200,0,6,10,182,0,6,11,164,0],"secondary":false},{"width":8,"bonus":75,"chr":"_","pixels":[0,17,255,255,1,17,255,255,1,18,255,84,2,17,255,255,2,18,255,84,3,17,255,255,3,18,255,84,4,17,255,255,4,18,255,84,5,17,255,255,5,18,255,84,6,17,255,255,6,18,255,84,7,17,255,255,7,18,255,84],"secondary":false},{"width":7,"bonus":50,"chr":"-","pixels":[1,8,255,255,2,8,255,255,2,9,255,84,3,8,255,255,3,9,255,84,4,8,255,255,4,9,255,84,5,8,255,255,5,9,255,84,6,9,255,0],"secondary":true},{"width":11,"bonus":180,"chr":"=","pixels":[1,6,255,255,1,10,255,255,2,6,255,255,2,7,255,84,2,10,255,255,2,11,255,84,3,6,255,255,3,7,255,84,3,10,255,255,3,11,255,84,4,6,255,255,4,7,255,84,4,10,255,255,4,11,255,84,5,6,255,255,5,7,255,84,5,10,255,255,5,11,255,84,6,6,255,255,6,7,255,84,6,10,255,255,6,11,255,84,7,6,255,255,7,7,255,84,7,10,255,255,7,11,255,84,8,6,255,255,8,7,255,84,8,10,255,255,8,11,255,84,9,6,255,255,9,7,255,84,9,10,255,255,9,11,255,84,10,7,255,0,10,11,255,0],"secondary":false},{"width":7,"bonus":295,"chr":"[","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,3,0,255,208,3,1,255,208,3,2,255,208,3,3,255,208,3,4,255,208,3,5,255,208,3,6,255,208,3,7,255,208,3,8,255,208,3,9,255,208,3,10,255,208,3,11,255,208,3,12,255,208,3,13,255,208,3,14,255,208,3,15,255,208,3,16,254,215,3,17,255,255,3,18,255,84,4,0,223,0,4,1,208,0,4,2,208,0,4,3,208,0,4,4,208,0,4,5,208,0,4,6,208,0,4,7,208,0,4,8,208,0,4,9,208,0,4,10,208,0,4,11,208,0,4,12,208,0,4,13,208,0,4,14,208,0,4,15,208,0,4,16,215,43,4,17,255,255,4,18,255,84,5,17,255,255,5,18,255,84,6,18,255,6],"secondary":false},{"width":7,"bonus":300,"chr":"]","pixels":[1,17,255,255,2,17,255,255,2,18,255,84,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,255,3,18,255,84,4,0,255,208,4,1,255,208,4,2,255,208,4,3,255,208,4,4,255,208,4,5,255,208,4,6,255,208,4,7,255,208,4,8,255,208,4,9,255,208,4,10,255,208,4,11,255,208,4,12,255,208,4,13,255,208,4,14,255,208,4,15,255,208,4,16,255,208,4,17,255,208,4,18,255,68,5,0,208,0,5,1,208,0,5,2,208,0,5,3,208,0,5,4,208,0,5,5,208,0,5,6,208,0,5,7,208,0,5,8,208,0,5,9,208,0,5,10,208,0,5,11,208,0,5,12,208,0,5,13,208,0,5,14,208,0,5,15,208,0,5,16,208,0,5,17,208,0,5,18,208,0],"secondary":false},{"width":8,"bonus":285,"chr":"{","pixels":[1,8,255,255,1,9,184,156,2,7,191,255,2,8,232,246,2,9,255,215,3,0,245,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,252,254,3,8,208,81,3,9,253,244,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,253,255,3,16,213,255,4,0,244,234,4,1,254,209,4,2,255,208,4,3,255,208,4,4,255,208,4,5,255,207,4,6,254,186,4,7,255,78,4,8,252,0,4,10,251,191,4,11,255,208,4,12,255,208,4,13,255,208,4,14,255,208,4,15,254,215,4,16,255,251,4,17,250,232,5,0,255,0,5,1,224,0,5,2,208,0,5,3,208,0,5,4,208,0,5,5,208,0,5,6,207,0,5,7,186,0,5,11,188,0,5,12,208,0,5,13,208,0,5,14,208,0,5,15,208,0,5,16,229,103,5,17,255,255,5,18,233,60,6,17,174,188,6,18,255,38],"secondary":false},{"width":8,"bonus":295,"chr":"}","pixels":[1,17,255,255,2,17,255,255,2,18,255,34,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,235,255,3,10,235,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,226,215,3,18,255,0,4,0,255,197,4,1,255,208,4,2,255,208,4,3,255,208,4,4,255,208,4,5,255,208,4,6,254,233,4,7,255,255,4,8,180,146,4,9,251,255,4,10,242,246,4,11,252,211,4,12,255,208,4,13,255,208,4,14,255,208,4,15,255,205,4,16,255,161,4,17,255,17,4,18,190,0,5,1,197,0,5,2,208,0,5,3,208,0,5,4,208,0,5,5,208,0,5,6,208,1,5,7,246,154,5,8,254,245,5,9,211,219,5,10,252,3,5,11,234,0,5,12,208,0,5,13,208,0,5,14,208,0,5,15,208,0,5,16,205,0,5,17,161,0,6,8,255,255,6,9,248,100,6,10,181,0,7,9,255,0],"secondary":false},{"width":6,"bonus":85,"chr":":","pixels":[2,4,183,255,2,5,247,255,2,13,247,255,2,14,181,255,3,4,215,255,3,5,255,255,3,6,252,176,3,12,175,255,3,13,255,255,3,14,254,214,3,15,181,0,4,5,219,36,4,6,255,3,4,7,174,0,4,13,184,43,4,14,255,6,4,15,213,0],"secondary":true},{"width":6,"bonus":115,"chr":";","pixels":[1,17,181,255,2,4,183,255,2,5,247,255,2,13,239,255,2,14,255,255,2,15,255,255,2,16,248,252,2,17,209,200,2,18,181,0,3,4,215,255,3,5,255,255,3,6,252,176,3,13,223,255,3,14,250,162,3,15,255,83,3,16,255,11,3,17,245,0,3,18,164,0,4,5,219,36,4,6,255,3,4,7,174,0,4,14,223,0,4,15,158,0],"secondary":true},{"width":10,"bonus":130,"chr":"\\"","pixels":[2,1,167,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,4,2,255,93,4,3,255,67,4,4,255,42,4,5,255,16,4,6,255,0,6,1,255,255,6,2,255,255,6,3,238,255,6,4,213,255,6,5,187,255,7,1,249,255,7,2,255,225,7,3,255,199,7,4,249,178,7,5,238,159,7,6,188,0,8,2,249,0,8,3,225,0,8,4,199,0,8,5,174,0],"secondary":true},{"width":7,"bonus":55,"chr":"\'","pixels":[2,1,167,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,4,2,255,93,4,3,255,67,4,4,255,42,4,5,255,16,4,6,255,0],"secondary":true},{"width":11,"bonus":190,"chr":"<","pixels":[1,8,235,255,2,8,253,255,2,9,253,240,3,7,243,255,3,8,184,154,3,9,254,243,3,10,245,118,4,7,222,252,4,8,243,4,4,9,192,190,4,10,253,228,5,6,247,255,5,7,185,134,5,8,220,0,5,10,253,253,5,11,236,101,6,5,155,255,6,6,223,251,6,7,248,4,6,10,183,240,6,11,254,212,7,5,251,255,7,6,193,128,7,7,220,0,7,11,255,255,7,12,223,87,8,4,169,255,8,5,225,249,8,6,252,4,8,11,213,241,8,12,254,195,9,4,253,255,9,5,201,123,9,6,220,0,9,12,255,255,9,13,207,70,10,5,254,0,10,13,255,0],"secondary":false},{"width":11,"bonus":190,"chr":">","pixels":[1,4,253,255,1,12,255,255,2,4,185,233,2,5,254,221,2,11,201,255,2,12,214,231,2,13,255,0,3,5,253,253,3,6,233,105,3,11,255,255,3,12,216,89,3,13,194,0,4,5,170,233,4,6,255,219,4,10,171,255,4,11,221,244,4,12,255,1,5,6,252,251,5,7,232,104,5,10,251,255,5,11,201,119,5,12,211,0,6,6,155,234,6,7,254,220,6,10,229,251,6,11,252,5,7,7,250,248,7,8,234,119,7,9,241,255,7,10,192,150,7,11,226,0,8,8,254,252,8,9,245,247,8,10,242,13,9,8,245,245,9,9,253,133,9,10,238,0,10,9,236,0],"secondary":false},{"width":9,"bonus":205,"chr":"\\\\","pixels":[2,0,255,255,2,1,255,255,2,2,246,252,2,3,183,253,3,0,228,40,3,1,255,103,3,2,254,171,3,3,254,237,3,4,255,255,3,5,255,255,3,6,237,251,3,7,168,254,4,3,170,2,4,4,239,52,4,5,255,117,4,6,255,184,4,7,254,246,4,8,255,255,4,9,255,255,4,10,226,250,4,11,154,255,5,7,186,8,5,8,247,65,5,9,255,130,5,10,254,198,5,11,254,252,5,12,255,255,5,13,254,255,5,14,212,251,6,11,200,17,6,12,251,77,6,13,254,144,6,14,255,211,6,15,255,255,6,16,255,255,6,17,251,254,7,15,215,29,7,16,255,90,7,17,255,158,7,18,250,0,8,18,158,0],"secondary":false},{"width":5,"bonus":45,"chr":".","pixels":[1,13,247,255,1,14,181,255,2,12,173,255,2,13,255,255,2,14,253,214,2,15,181,0,3,13,183,42,3,14,255,5,3,15,212,0],"secondary":true},{"width":5,"bonus":65,"chr":",","pixels":[1,14,165,255,1,15,215,255,1,16,253,255,1,17,255,255,2,13,255,255,2,14,255,255,2,15,249,245,2,16,238,160,2,17,254,45,2,18,255,0,3,14,255,80,3,15,255,7,3,16,240,0],"secondary":true},{"width":12,"bonus":280,"chr":"|","pixels":[5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,255,255,5,17,255,255,6,0,255,208,6,1,255,208,6,2,255,208,6,3,255,208,6,4,255,208,6,5,255,208,6,6,255,208,6,7,255,208,6,8,255,208,6,9,255,208,6,10,255,208,6,11,255,208,6,12,255,208,6,13,255,208,6,14,255,208,6,15,255,208,6,16,255,208,6,17,255,208,6,18,255,0,7,0,208,0,7,1,208,0,7,2,208,0,7,3,208,0,7,4,208,0,7,5,208,0,7,6,208,0,7,7,208,0,7,8,208,0,7,9,208,0,7,10,208,0,7,11,208,0,7,12,208,0,7,13,208,0,7,14,208,0,7,15,208,0,7,16,208,0,7,17,208,0,7,18,208,0],"secondary":false}],"width":19,"spacewidth":5,"shadow":true,"height":20,"basey":14}');

/***/ }),

/***/ "./src/fonts/chatbox/22pt.fontmeta.json":
/*!**********************************************!*\
  !*** ./src/fonts/chatbox/22pt.fontmeta.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":13,"bonus":455,"chr":"a","pixels":[1,12,233,255,1,13,249,255,1,14,211,255,2,10,157,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,3,6,255,255,3,10,253,255,3,11,247,241,3,12,254,64,3,13,255,12,3,14,255,87,3,15,255,253,3,16,254,198,4,5,187,255,4,6,236,241,4,7,255,0,4,10,255,255,4,11,253,98,4,12,233,0,4,15,210,227,4,16,254,240,4,17,198,0,5,5,233,255,5,6,236,201,5,7,223,0,5,10,255,255,5,11,255,32,5,15,165,255,5,16,252,247,5,17,240,0,6,5,251,255,6,6,247,169,6,7,186,0,6,10,255,255,6,11,255,6,6,15,199,255,6,16,237,219,6,17,244,0,7,5,237,255,7,6,254,198,7,7,164,0,7,9,155,255,7,10,255,255,7,11,255,0,7,15,253,255,7,16,220,112,7,17,203,0,8,5,189,255,8,6,255,255,8,7,221,121,8,9,155,255,8,10,255,255,8,11,255,0,8,14,227,255,8,15,168,223,8,16,254,0,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,250,209,9,16,211,182,10,7,255,205,10,8,255,247,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,11,8,205,0,11,9,247,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0,11,16,255,0,11,17,255,0],"secondary":false},{"width":13,"bonus":515,"chr":"b","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,254,255,3,5,255,243,3,6,254,239,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,213,3,16,255,143,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,254,13,4,6,253,198,4,7,252,207,4,8,255,77,4,9,255,23,4,10,255,4,4,11,255,4,4,12,255,25,4,13,255,81,4,14,255,209,4,15,255,199,4,16,215,16,5,6,238,254,5,7,201,28,5,8,205,0,5,15,251,242,5,16,230,156,6,5,227,255,6,6,222,209,6,7,237,0,6,15,188,247,6,16,253,229,7,5,249,255,7,6,245,176,7,7,182,0,7,15,167,255,7,16,253,251,7,17,227,0,8,5,219,255,8,6,255,237,8,7,176,29,8,15,237,255,8,16,242,231,8,17,249,0,9,6,255,255,9,7,252,222,9,14,221,255,9,15,255,255,9,16,246,130,9,17,220,0,10,6,214,209,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,244,183,10,16,255,6,11,7,201,103,11,8,255,175,11,9,254,227,11,10,254,249,11,11,254,249,11,12,254,227,11,13,254,174,11,14,255,80,11,15,255,0,11,16,175,0,12,9,175,0,12,10,226,0,12,11,248,0,12,12,248,0,12,13,226,0,12,14,174,0],"secondary":false},{"width":10,"bonus":300,"chr":"c","pixels":[1,8,158,255,1,9,219,255,1,10,247,255,1,11,247,255,1,12,225,255,1,13,167,255,2,7,251,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,156,206,3,6,253,255,3,7,244,246,3,8,254,113,3,9,255,36,3,10,255,6,3,11,255,13,3,12,255,43,3,13,255,125,3,14,255,237,3,15,255,255,3,16,163,113,4,5,173,255,4,6,252,254,4,7,254,47,4,8,236,0,4,15,254,251,4,16,254,183,5,5,231,255,5,6,234,206,5,7,251,0,5,15,198,239,5,16,254,237,5,17,182,0,6,5,249,255,6,6,246,168,6,7,189,0,6,15,161,255,6,16,253,252,6,17,236,0,7,5,231,255,7,6,254,188,7,7,162,0,7,15,185,255,7,16,246,239,7,17,250,0,8,5,196,255,8,6,253,246,8,7,188,10,8,15,239,255,8,16,235,199,8,17,231,0,9,6,216,103,9,7,244,4,9,16,243,63,9,17,183,0],"secondary":false},{"width":13,"bonus":520,"chr":"d","pixels":[1,8,175,255,1,9,225,255,1,10,249,255,1,11,249,255,1,12,227,255,1,13,178,255,2,6,177,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,206,225,3,6,255,255,3,7,246,235,3,8,255,104,3,9,255,34,3,10,255,6,3,11,255,4,3,12,255,28,3,13,255,93,3,14,255,219,3,15,255,255,3,16,219,152,4,5,219,255,4,6,247,247,4,7,255,27,4,8,227,0,4,15,252,240,4,16,254,222,5,5,249,255,5,6,243,177,5,7,239,0,5,15,174,245,5,16,255,249,5,17,222,0,6,5,225,255,6,6,252,176,6,7,169,0,6,15,181,255,6,16,244,236,6,17,249,0,7,6,253,241,7,7,181,31,7,15,237,255,7,16,220,160,7,17,226,0,8,6,225,217,8,7,252,220,8,14,203,255,8,15,195,247,8,16,238,11,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,251,255,9,6,238,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,248,229,9,16,235,192,10,1,255,255,10,2,255,255,10,3,255,255,10,4,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,10,17,177,0,11,2,255,0,11,3,255,0,11,4,255,0,11,5,255,0,11,6,255,0,11,7,255,0,11,8,255,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0,11,16,255,0,11,17,255,0],"secondary":false},{"width":12,"bonus":435,"chr":"e","pixels":[1,8,153,255,1,9,217,255,1,10,245,255,1,11,247,255,1,12,221,255,1,13,157,255,2,7,251,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,253,252,3,6,255,255,3,7,228,234,3,8,252,69,3,9,254,162,3,10,255,255,3,11,255,7,3,12,255,41,3,13,255,129,3,14,255,247,3,15,254,252,4,5,185,255,4,6,245,252,4,7,255,23,4,8,210,0,4,9,182,218,4,10,255,255,4,11,255,0,4,14,166,114,4,15,255,255,4,16,254,168,5,5,239,255,5,6,235,197,5,7,242,0,5,9,155,255,5,10,255,255,5,11,255,0,5,15,218,237,5,16,255,229,5,17,167,0,6,5,247,255,6,6,250,172,6,7,182,0,6,9,155,255,6,10,255,255,6,11,255,0,6,15,161,255,6,16,254,252,6,17,229,0,7,5,211,255,7,6,254,225,7,7,171,9,7,9,155,255,7,10,255,255,7,11,255,0,7,15,175,255,7,16,251,249,7,17,251,0,8,6,255,255,8,7,244,177,8,9,159,255,8,10,255,255,8,11,255,0,8,15,209,255,8,16,242,225,8,17,246,0,9,6,223,221,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,0,9,15,253,255,9,16,235,154,9,17,214,0,10,7,221,138,10,8,254,210,10,9,255,247,10,10,255,255,10,11,255,0,10,16,254,38,11,9,210,0,11,10,247,0,11,11,255,0],"secondary":false},{"width":9,"bonus":340,"chr":"f","pixels":[1,6,155,255,2,5,221,255,2,6,208,191,2,7,156,0,3,3,219,255,3,4,251,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,4,17,255,0,5,1,209,255,5,2,248,250,5,3,255,59,5,4,255,3,5,5,255,255,5,6,254,156,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,11,255,0,5,12,255,0,5,13,255,0,5,14,255,0,5,15,255,0,5,16,255,0,5,17,255,0,6,1,241,255,6,2,240,182,6,3,243,0,6,5,255,255,6,6,254,156,6,7,156,0,7,1,241,255,7,2,251,178,7,3,171,0,7,5,255,255,7,6,254,156,7,7,156,0,8,1,197,255,8,2,250,173,8,3,175,0,8,6,255,0,8,7,156,0],"secondary":false},{"width":13,"bonus":585,"chr":"g","pixels":[1,8,172,255,1,9,225,255,1,10,249,255,1,11,249,255,1,12,227,255,1,13,178,255,2,6,171,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,206,225,2,20,255,255,3,6,255,255,3,7,244,234,3,8,255,111,3,9,255,38,3,10,255,12,3,11,255,4,3,12,255,30,3,13,254,94,3,14,254,219,3,15,255,255,3,16,219,153,3,20,240,248,3,21,254,189,4,5,221,255,4,6,246,246,4,7,255,23,4,8,224,0,4,15,252,239,4,16,255,223,4,20,194,255,4,21,252,228,5,5,249,255,5,6,243,175,5,7,237,0,5,15,173,246,5,16,254,251,5,17,223,0,5,20,167,255,5,21,252,248,6,5,221,255,6,6,252,176,6,7,167,0,6,15,181,255,6,16,244,234,6,17,250,0,6,20,179,255,6,21,252,250,7,6,253,241,7,7,181,31,7,15,237,255,7,16,219,153,7,17,224,0,7,20,239,255,7,21,243,226,8,6,221,214,8,7,253,219,8,14,205,255,8,15,180,244,8,16,238,6,8,19,208,255,8,20,255,255,8,21,248,145,9,5,181,255,9,6,226,254,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,255,255,9,16,255,255,9,17,255,255,9,18,255,255,9,19,255,255,9,20,249,226,9,21,255,20,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,10,17,255,245,10,18,255,213,10,19,255,136,10,20,255,18,10,21,221,0,11,6,255,0,11,7,255,0,11,8,255,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0,11,16,255,0,11,17,255,0,11,18,245,0,11,19,213,0],"secondary":false},{"width":14,"bonus":480,"chr":"h","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,254,255,3,6,255,243,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,5,4,6,255,179,4,7,253,223,4,8,255,91,4,9,255,27,4,10,255,4,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,6,247,255,5,7,191,55,5,8,222,0,6,5,213,255,6,6,222,223,6,7,247,0,7,5,247,255,7,6,241,176,7,7,194,0,8,5,239,255,8,6,253,211,8,7,166,2,9,5,187,255,9,6,255,255,9,7,236,161,10,6,254,254,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,11,7,255,190,11,8,254,240,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,255,11,15,255,255,11,16,255,255,11,17,255,0,12,8,190,0,12,9,240,0,12,10,255,0,12,11,255,0,12,12,255,0,12,13,255,0,12,14,255,0,12,15,255,0,12,16,255,0,12,17,255,0],"secondary":false},{"width":6,"bonus":220,"chr":"i","pixels":[2,1,199,255,2,2,225,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,197,255,3,2,248,230,3,3,227,9,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,198,0,4,3,224,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0],"secondary":false},{"width":6,"bonus":300,"chr":"j","pixels":[0,20,166,255,0,21,253,252,1,20,231,255,1,21,244,235,2,1,199,255,2,2,225,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,255,255,2,20,255,255,2,21,244,143,3,1,197,255,3,2,248,230,3,3,227,9,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,255,3,18,255,251,3,19,254,221,3,20,255,131,3,21,255,8,4,2,198,0,4,3,224,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,4,18,255,0,4,19,251,0,4,20,220,0],"secondary":false},{"width":12,"bonus":445,"chr":"k","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,13,4,10,255,173,4,11,255,243,4,12,255,50,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,9,213,255,5,10,255,255,5,11,233,202,5,12,243,8,6,8,229,255,6,9,250,254,6,10,250,232,6,11,255,255,6,12,242,221,7,7,237,255,7,8,247,253,7,9,235,76,7,10,249,17,7,11,246,181,7,12,255,255,7,13,253,247,8,6,245,255,8,7,241,252,8,8,241,60,8,9,245,0,8,12,210,134,8,13,255,249,8,14,255,255,8,15,203,212,9,5,251,255,9,6,238,248,9,7,247,46,9,8,238,0,9,14,254,220,9,15,255,255,9,16,243,232,10,5,221,255,10,6,251,35,10,7,231,0,10,15,243,174,10,16,255,255,10,17,222,0,11,6,222,0,11,16,201,128,11,17,255,0],"secondary":false},{"width":6,"bonus":245,"chr":"l","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0],"secondary":false},{"width":20,"bonus":650,"chr":"m","pixels":[2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,5,175,255,3,6,254,222,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,6,235,208,4,7,248,207,4,8,255,74,4,9,255,22,4,10,255,3,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,6,233,254,5,7,195,21,5,8,201,0,6,5,229,255,6,6,219,202,6,7,232,0,7,5,247,255,7,6,249,195,7,7,174,0,8,5,209,255,8,6,255,255,8,7,222,143,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,255,255,9,16,255,255,10,6,159,164,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,10,17,255,0,11,6,223,255,11,7,220,229,11,8,255,67,11,9,255,16,11,10,255,1,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0,11,16,255,0,11,17,255,0,12,5,157,255,12,6,233,253,12,7,224,17,12,8,197,0,13,5,231,255,13,6,223,199,13,7,231,0,14,5,249,255,14,6,250,194,14,7,174,0,15,5,213,255,15,6,255,255,15,7,222,144,16,6,255,255,16,7,255,255,16,8,255,255,16,9,255,255,16,10,255,255,16,11,255,255,16,12,255,255,16,13,255,255,16,14,255,255,16,15,255,255,16,16,255,255,17,6,157,151,17,7,254,198,17,8,254,243,17,9,255,255,17,10,255,255,17,11,255,255,17,12,255,255,17,13,255,255,17,14,255,255,17,15,255,255,17,16,255,255,17,17,255,0,18,8,198,0,18,9,242,0,18,10,255,0,18,11,255,0,18,12,255,0,18,13,255,0,18,14,255,0,18,15,255,0,18,16,255,0,18,17,255,0],"secondary":false},{"width":14,"bonus":420,"chr":"n","pixels":[2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,5,175,255,3,6,254,222,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,6,231,198,4,7,251,225,4,8,255,90,4,9,255,27,4,10,255,4,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,6,247,255,5,7,192,54,5,8,221,0,6,5,213,255,6,6,222,223,6,7,247,0,7,5,247,255,7,6,241,176,7,7,194,0,8,5,241,255,8,6,253,211,8,7,166,2,9,5,191,255,9,6,255,255,9,7,236,161,10,6,254,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,11,7,255,189,11,8,254,240,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,255,11,15,255,255,11,16,255,255,11,17,255,0,12,8,189,0,12,9,240,0,12,10,255,0,12,11,255,0,12,12,255,0,12,13,255,0,12,14,255,0,12,15,255,0,12,16,255,0,12,17,255,0],"secondary":false},{"width":13,"bonus":410,"chr":"o","pixels":[1,8,159,255,1,9,221,255,1,10,247,255,1,11,243,255,1,12,213,255,2,7,251,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,251,249,3,6,253,255,3,7,244,246,3,8,254,111,3,9,255,34,3,10,255,5,3,11,255,7,3,12,255,38,3,13,255,118,3,14,255,241,3,15,255,249,4,5,173,255,4,6,252,254,4,7,254,47,4,8,236,0,4,15,255,253,4,16,252,166,5,5,231,255,5,6,233,206,5,7,251,0,5,15,205,238,5,16,255,227,5,17,164,0,6,5,249,255,6,6,246,167,6,7,188,0,6,15,161,255,6,16,253,252,6,17,227,0,7,5,231,255,7,6,253,193,7,7,161,0,7,15,191,255,7,16,246,240,7,17,250,0,8,5,169,255,8,6,255,253,8,7,206,71,8,15,253,255,8,16,234,186,8,17,232,0,9,6,253,253,9,7,255,241,9,14,241,255,9,15,252,254,9,16,254,54,9,17,171,0,10,7,255,249,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,252,253,10,15,247,101,10,16,252,0,11,8,253,154,11,9,254,219,11,10,254,246,11,11,254,246,11,12,254,219,11,13,255,154,11,14,255,43,11,15,250,0,12,10,218,0,12,11,246,0,12,12,246,0,12,13,218,0,12,14,154,0],"secondary":false},{"width":13,"bonus":525,"chr":"p","pixels":[2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,255,255,2,20,255,255,2,21,255,255,3,5,181,255,3,6,255,223,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,239,3,16,254,246,3,17,255,255,3,18,255,255,3,19,255,255,3,20,255,255,3,21,255,255,4,6,235,203,4,7,249,207,4,8,255,71,4,9,255,18,4,10,255,1,4,11,255,5,4,12,255,27,4,13,255,87,4,14,254,213,4,15,255,197,4,16,239,14,4,17,246,0,4,18,255,0,4,19,255,0,4,20,255,0,4,21,255,0,5,6,236,255,5,7,192,26,5,8,202,0,5,15,252,241,5,16,229,157,6,5,225,255,6,6,221,209,6,7,236,0,6,15,177,246,6,16,253,229,7,5,249,255,7,6,244,177,7,7,181,0,7,15,169,255,7,16,253,251,7,17,228,0,8,5,221,255,8,6,255,241,8,7,179,41,8,15,241,255,8,16,243,231,8,17,249,0,9,6,255,255,9,7,253,232,9,14,231,255,9,15,255,255,9,16,248,129,9,17,220,0,10,6,217,210,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,247,179,10,16,255,6,11,7,203,104,11,8,254,177,11,9,255,227,11,10,254,249,11,11,255,247,11,12,255,225,11,13,255,173,11,14,255,78,11,15,255,0,11,16,173,0,12,9,176,0,12,10,227,0,12,11,248,0,12,12,247,0,12,13,225,0,12,14,173,0],"secondary":false},{"width":13,"bonus":525,"chr":"q","pixels":[1,8,173,255,1,9,225,255,1,10,249,255,1,11,249,255,1,12,227,255,1,13,175,255,2,6,173,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,204,224,3,6,255,255,3,7,245,235,3,8,255,113,3,9,255,39,3,10,255,13,3,11,255,10,3,12,255,36,3,13,255,106,3,14,255,221,3,15,255,255,3,16,218,153,4,5,219,255,4,6,246,246,4,7,255,25,4,8,226,0,4,15,253,239,4,16,255,223,5,5,247,255,5,6,242,177,5,7,238,0,5,15,174,246,5,16,254,251,5,17,223,0,6,5,223,255,6,6,253,175,6,7,168,0,6,15,179,255,6,16,245,234,6,17,250,0,7,6,253,241,7,7,179,30,7,15,235,255,7,16,219,157,7,17,225,0,8,6,222,213,8,7,252,218,8,14,197,255,8,15,190,249,8,16,235,10,9,5,173,255,9,6,222,254,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,252,245,9,16,254,254,9,17,255,255,9,18,255,255,9,19,255,255,9,20,255,255,9,21,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,255,255,10,16,255,255,10,17,255,255,10,18,255,255,10,19,255,255,10,20,255,255,10,21,255,255,11,6,255,0,11,7,255,0,11,8,255,0,11,9,255,0,11,10,255,0,11,11,255,0,11,12,255,0,11,13,255,0,11,14,255,0,11,15,255,0,11,16,255,0,11,17,255,0,11,18,255,0,11,19,255,0,11,20,255,0,11,21,255,0],"secondary":false},{"width":9,"bonus":245,"chr":"r","pixels":[2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,5,175,255,3,6,255,201,3,7,255,247,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,6,214,146,4,7,253,249,4,8,252,138,4,9,255,39,4,10,255,5,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,6,255,255,5,7,166,130,5,8,247,0,6,5,208,255,6,6,222,234,6,7,255,0,7,5,247,255,7,6,238,176,7,7,204,0,8,5,209,255,8,6,252,145,8,7,164,0],"secondary":false},{"width":10,"bonus":325,"chr":"s","pixels":[1,7,237,255,1,8,243,255,1,9,158,255,1,15,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,215,176,2,15,241,249,2,16,255,196,3,5,196,255,3,6,247,251,3,7,254,46,3,8,255,38,3,9,254,225,3,10,255,251,3,11,160,46,3,15,189,253,3,16,253,233,3,17,196,0,4,5,235,255,4,6,236,189,4,7,243,0,4,10,255,255,4,11,253,141,4,15,163,255,4,16,253,251,4,17,231,0,5,5,245,255,5,6,248,172,5,7,175,0,5,10,239,245,5,11,255,241,5,15,189,255,5,16,245,237,5,17,249,0,6,5,217,255,6,6,253,209,6,7,168,0,6,11,255,255,6,12,250,177,6,15,253,255,6,16,235,197,6,17,228,0,7,5,159,255,7,6,255,255,7,7,214,43,7,11,240,242,7,12,255,255,7,13,255,255,7,14,255,255,7,15,255,255,7,16,253,70,7,17,182,0,8,6,198,135,8,7,255,8,8,12,249,206,8,13,255,249,8,14,254,222,8,15,255,102,8,16,255,0,9,13,201,0,9,14,249,0,9,15,222,0],"secondary":false},{"width":9,"bonus":290,"chr":"t","pixels":[1,6,155,255,2,5,235,255,2,6,211,188,2,7,156,0,3,4,231,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,249,255,3,14,219,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,203,182,5,4,255,0,5,5,255,255,5,6,254,156,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,11,255,0,5,12,255,0,5,13,255,6,5,14,255,61,5,15,255,235,5,16,254,228,6,5,255,255,6,6,254,156,6,7,156,0,6,15,182,222,6,16,254,246,6,17,228,0,7,5,255,255,7,6,254,156,7,7,156,0,7,15,179,255,7,16,237,223,7,17,246,0,8,6,255,0,8,7,156,0,8,16,180,0,8,17,207,0],"secondary":false},{"width":14,"bonus":420,"chr":"u","pixels":[2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,241,255,2,14,191,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,254,255,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,2,4,13,255,30,4,14,255,142,4,15,255,255,4,16,255,191,5,15,235,226,5,16,254,243,5,17,191,0,6,15,165,255,6,16,254,250,6,17,242,0,7,15,193,255,7,16,241,230,7,17,249,0,8,15,247,255,8,16,225,146,8,17,218,0,9,14,223,255,9,15,198,241,9,16,247,8,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,255,10,13,255,255,10,14,255,255,10,15,251,231,10,16,236,199,11,5,255,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,255,11,15,255,255,11,16,255,255,11,17,184,0,12,6,255,0,12,7,255,0,12,8,255,0,12,9,255,0,12,10,255,0,12,11,255,0,12,12,255,0,12,13,255,0,12,14,255,0,12,15,255,0,12,16,255,0,12,17,255,0],"secondary":false},{"width":11,"bonus":320,"chr":"v","pixels":[0,5,208,255,1,5,255,255,1,6,255,255,1,7,253,253,1,8,185,247,2,6,255,155,2,7,255,239,2,8,255,255,2,9,255,255,2,10,243,249,3,7,157,10,3,8,244,84,3,9,255,171,3,10,255,247,3,11,255,255,3,12,255,255,3,13,222,245,4,10,176,20,4,11,250,98,4,12,255,184,4,13,254,251,4,14,255,255,4,15,253,253,4,16,192,245,5,13,188,23,5,14,252,133,5,15,254,246,5,16,255,255,5,17,184,0,6,13,221,255,6,14,255,255,6,15,255,255,6,16,253,223,6,17,255,0,7,10,217,255,7,11,255,255,7,12,255,255,7,13,250,248,7,14,243,166,7,15,255,63,7,16,255,1,7,17,222,0,8,7,199,255,8,8,255,255,8,9,255,255,8,10,254,255,8,11,245,197,8,12,254,94,8,13,255,11,8,14,243,0,8,15,158,0,9,5,251,255,9,6,255,255,9,7,255,255,9,8,247,227,9,9,255,125,9,10,255,31,9,11,254,0,9,12,189,0,10,5,241,255,10,6,253,157,10,7,255,60,10,8,255,0,10,9,220,0],"secondary":false},{"width":17,"bonus":595,"chr":"w","pixels":[0,5,158,255,1,5,255,255,1,6,255,255,1,7,254,255,1,8,211,250,2,6,255,159,2,7,255,223,2,8,255,255,2,9,255,255,2,10,255,255,2,11,249,253,2,12,189,252,3,7,159,0,3,8,227,36,3,9,255,96,3,10,255,160,3,11,254,225,3,12,255,255,3,13,255,255,3,14,255,255,3,15,237,251,3,16,167,255,4,11,160,0,4,12,228,36,4,13,254,94,4,14,254,186,4,15,255,255,4,16,255,255,4,17,167,0,5,12,177,255,5,13,241,253,5,14,255,255,5,15,255,255,5,16,254,213,5,17,255,0,6,9,202,255,6,10,253,255,6,11,255,255,6,12,254,254,6,13,237,211,6,14,247,120,6,15,255,36,6,16,255,0,6,17,212,0,7,6,219,255,7,7,255,255,7,8,255,255,7,9,251,251,7,10,239,192,7,11,255,100,7,12,255,22,7,13,253,0,7,14,196,0,8,5,255,255,8,6,255,255,8,7,244,190,8,8,255,71,8,9,255,8,8,10,247,0,8,11,180,0,9,5,221,255,9,6,255,255,9,7,255,255,9,8,252,248,9,9,206,231,10,6,227,47,10,7,255,119,10,8,255,196,10,9,255,253,10,10,255,255,10,11,255,255,10,12,221,249,11,9,201,25,11,10,253,94,11,11,255,171,11,12,254,240,11,13,255,255,11,14,255,255,11,15,242,251,11,16,168,252,12,12,172,6,12,13,245,81,12,14,255,187,12,15,255,255,12,16,255,255,12,17,166,0,13,11,154,255,13,12,217,255,13,13,255,255,13,14,255,255,13,15,255,255,13,16,254,231,13,17,255,0,14,8,211,255,14,9,255,255,14,10,255,255,14,11,255,255,14,12,251,249,14,13,245,192,14,14,255,114,14,15,255,44,14,16,255,0,14,17,230,0,15,5,253,255,15,6,255,255,15,7,255,255,15,8,254,255,15,9,247,215,15,10,254,138,15,11,255,68,15,12,255,8,15,13,246,0,15,14,184,0,16,5,231,255,16,6,254,162,16,7,255,92,16,8,255,23,16,9,254,0,16,10,208,0],"secondary":false},{"width":12,"bonus":345,"chr":"x","pixels":[1,5,241,255,1,16,253,255,2,5,247,255,2,6,255,255,2,7,203,218,2,14,213,255,2,15,255,255,2,16,240,235,2,17,254,0,3,6,253,203,3,7,255,255,3,8,247,239,3,13,249,255,3,14,255,255,3,15,238,164,3,16,255,12,3,17,222,0,4,7,226,134,4,8,254,249,4,9,255,255,4,10,186,215,4,11,196,255,4,12,255,255,4,13,240,242,4,14,251,72,4,15,255,0,4,16,153,0,5,9,253,215,5,10,255,255,5,11,255,255,5,12,236,188,5,13,255,16,5,14,228,0,6,9,250,254,6,10,255,255,6,11,255,255,6,12,254,233,6,13,199,101,7,7,205,255,7,8,255,255,7,9,237,236,7,10,250,58,7,11,255,100,7,12,255,243,7,13,255,255,7,14,191,217,8,6,249,255,8,7,255,255,8,8,234,164,8,9,255,11,8,10,219,0,8,13,252,201,8,14,255,255,8,15,246,238,9,5,255,255,9,6,242,242,9,7,250,74,9,8,255,0,9,14,226,142,9,15,255,251,9,16,255,255,10,5,171,255,10,6,255,19,10,7,230,0,10,15,153,90,10,16,254,219,10,17,255,0,11,6,171,0,11,17,218,0],"secondary":false},{"width":11,"bonus":420,"chr":"y","pixels":[0,5,247,255,0,6,167,246,0,20,175,255,0,21,223,255,1,5,247,255,1,6,255,255,1,7,255,255,1,8,220,243,1,20,166,255,1,21,252,250,2,6,251,108,2,7,254,204,2,8,255,255,2,9,255,255,2,10,248,251,2,11,161,246,2,20,229,255,2,21,243,232,3,8,212,55,3,9,254,144,3,10,255,235,3,11,255,255,3,12,255,255,3,13,215,243,3,19,197,255,3,20,255,255,3,21,242,136,4,11,242,89,4,12,254,177,4,13,254,249,4,14,255,255,4,15,247,250,4,16,161,248,4,17,197,255,4,18,255,255,4,19,255,255,4,20,238,194,4,21,255,9,5,13,190,63,5,14,253,188,5,15,255,255,5,16,255,255,5,17,255,255,5,18,245,220,5,19,255,92,5,20,255,1,5,21,181,0,6,12,205,255,6,13,255,255,6,14,255,255,6,15,250,244,6,16,255,152,6,17,255,55,6,18,255,0,6,19,211,0,7,9,191,255,7,10,253,255,7,11,255,255,7,12,254,255,7,13,241,199,7,14,255,91,7,15,255,9,7,16,240,0,8,6,171,255,8,7,247,255,8,8,255,255,8,9,255,255,8,10,247,230,8,11,254,127,8,12,255,31,8,13,254,0,8,14,188,0,9,5,255,255,9,6,255,255,9,7,252,248,9,8,252,165,9,9,255,65,9,10,255,1,9,11,223,0,10,5,197,255,10,6,255,101,10,7,255,14,10,8,246,0,10,9,163,0],"secondary":false},{"width":10,"bonus":370,"chr":"z","pixels":[1,5,255,255,1,6,155,255,1,15,223,255,1,16,255,255,2,5,255,255,2,6,254,156,2,7,156,0,2,13,157,255,2,14,255,255,2,15,251,254,2,16,255,255,2,17,255,0,3,5,255,255,3,6,254,156,3,7,156,0,3,12,229,255,3,13,248,255,3,14,201,145,3,15,255,157,3,16,255,255,3,17,255,0,4,5,255,255,4,6,254,156,4,7,156,0,4,10,167,255,4,11,255,255,4,12,223,239,4,13,233,49,4,14,248,0,4,15,200,198,4,16,255,255,4,17,255,0,5,5,255,255,5,6,254,156,5,7,156,0,5,9,233,255,5,10,253,255,5,11,214,164,5,12,255,6,5,13,209,0,5,15,155,255,5,16,255,255,5,17,255,0,6,5,255,255,6,6,255,179,6,7,225,201,6,8,255,255,6,9,235,244,6,10,239,67,6,11,253,0,6,15,155,255,6,16,255,255,6,17,255,0,7,5,255,255,7,6,255,255,7,7,255,255,7,8,226,182,7,9,255,15,7,10,225,0,7,15,155,255,7,16,255,255,7,17,255,0,8,5,255,255,8,6,255,237,8,7,255,85,8,8,255,0,8,9,162,0,8,15,155,255,8,16,255,255,8,17,255,0,9,6,255,0,9,7,237,0,9,16,156,0,9,17,255,0],"secondary":false},{"width":14,"bonus":480,"chr":"A","pixels":[0,16,207,255,1,13,169,255,1,14,247,255,1,15,255,255,1,16,255,255,1,17,207,0,2,11,225,255,2,12,255,255,2,13,255,255,2,14,247,241,2,15,252,145,2,16,255,47,2,17,255,0,3,8,189,255,3,9,253,255,3,10,255,255,3,11,255,255,3,12,245,182,3,13,255,79,3,14,255,5,3,15,234,0,4,6,239,255,4,7,255,255,4,8,255,255,4,9,242,217,4,10,254,228,4,11,255,255,4,12,255,0,4,13,175,0,5,3,209,255,5,4,255,255,5,5,255,255,5,6,245,240,5,7,248,144,5,8,255,45,5,9,255,0,5,10,242,202,5,11,255,255,5,12,255,0,6,1,249,255,6,2,255,255,6,3,237,240,6,4,236,161,6,5,255,71,6,6,255,3,6,7,231,0,6,10,191,255,6,11,255,255,6,12,255,0,7,1,253,255,7,2,255,255,7,3,254,221,7,4,241,148,7,5,172,85,7,10,191,255,7,11,255,255,7,12,255,0,8,2,253,127,8,3,254,222,8,4,255,255,8,5,255,255,8,6,227,247,8,10,191,255,8,11,255,255,8,12,255,0,9,4,231,73,9,5,254,164,9,6,254,246,9,7,255,255,9,8,255,255,9,9,205,246,9,10,227,255,9,11,255,255,9,12,255,0,10,6,169,23,10,7,250,106,10,8,255,202,10,9,255,255,10,10,255,255,10,11,255,255,10,12,255,184,11,9,211,53,11,10,255,142,11,11,254,234,11,12,255,255,11,13,255,255,11,14,243,249,12,12,240,87,12,13,254,180,12,14,254,252,12,15,255,255,12,16,255,255,13,14,188,35,13,15,253,121,13,16,255,217,13,17,255,0],"secondary":false},{"width":14,"bonus":670,"chr":"B","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,255,4,9,254,156,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,254,156,4,16,255,255,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,8,255,255,5,9,254,156,5,10,156,0,5,15,155,255,5,16,255,255,5,17,255,0,6,1,251,255,6,2,255,157,6,3,156,0,6,8,255,255,6,9,254,156,6,10,156,0,6,15,155,255,6,16,255,255,6,17,255,0,7,1,239,255,7,2,254,176,7,3,157,0,7,8,255,255,7,9,255,167,7,10,156,0,7,15,163,255,7,16,254,255,7,17,255,0,8,1,208,255,8,2,254,232,8,3,176,7,8,8,255,255,8,9,254,195,8,10,167,0,8,15,191,255,8,16,249,245,8,17,254,0,9,2,255,255,9,3,247,173,9,7,219,255,9,8,197,224,9,9,254,251,9,10,200,32,9,15,249,255,9,16,241,209,9,17,240,0,10,2,249,248,10,3,255,255,10,4,255,255,10,5,255,255,10,6,255,255,10,7,243,251,10,8,223,38,10,9,243,230,10,10,254,200,10,14,203,255,10,15,255,255,10,16,251,113,10,17,197,0,11,3,251,190,11,4,254,243,11,5,255,239,11,6,255,184,11,7,255,49,11,8,239,0,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,255,11,15,244,213,11,16,255,6,12,4,187,0,12,5,242,0,12,6,239,0,12,7,184,0,12,11,255,209,12,12,254,246,12,13,254,227,12,14,255,143,12,15,255,15,12,16,203,0,13,12,209,0,13,13,246,0,13,14,226,0],"secondary":false},{"width":14,"bonus":410,"chr":"C","pixels":[1,6,175,255,1,7,217,255,1,8,243,255,1,9,247,255,1,10,229,255,1,11,185,255,2,4,219,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,249,250,3,3,249,255,3,4,255,255,3,5,246,198,3,6,255,90,3,7,255,32,3,8,255,8,3,9,255,7,3,10,255,29,3,11,254,82,3,12,255,177,3,13,255,255,3,14,255,255,3,15,164,166,4,2,225,255,4,3,253,255,4,4,252,104,4,5,255,0,4,6,191,0,4,13,201,99,4,14,254,249,4,15,255,249,5,2,255,255,5,3,240,135,5,4,253,0,5,15,255,255,5,16,252,139,6,1,184,255,6,2,247,251,6,3,255,9,6,15,245,247,6,16,255,207,7,1,221,255,7,2,235,201,7,3,243,0,7,15,182,253,7,16,254,240,7,17,207,0,8,1,247,255,8,2,242,170,8,3,185,0,8,15,161,255,8,16,254,254,8,17,239,0,9,1,237,255,9,2,253,184,9,3,162,0,9,15,175,255,9,16,251,249,9,17,253,0,10,1,213,255,10,2,252,224,10,3,183,0,10,15,202,255,10,16,243,231,10,17,246,0,11,1,165,255,11,2,255,255,11,3,228,55,11,15,249,255,11,16,236,178,11,17,220,0,12,2,237,218,12,3,255,47,12,16,250,60,12,17,165,0,13,3,202,0],"secondary":false},{"width":16,"bonus":640,"chr":"D","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,254,156,4,16,255,255,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,15,155,255,5,16,255,255,5,17,255,0,6,1,255,255,6,2,254,156,6,3,156,0,6,15,160,255,6,16,254,255,6,17,255,0,7,1,245,255,7,2,254,171,7,3,156,0,7,15,175,255,7,16,249,245,7,17,254,0,8,1,225,255,8,2,253,203,8,3,170,0,8,15,217,255,8,16,242,227,8,17,239,0,9,1,177,255,9,2,254,251,9,3,205,22,9,15,255,255,9,16,241,170,9,17,215,0,10,2,255,255,10,3,252,134,10,14,161,255,10,15,255,255,10,16,255,79,10,17,160,0,11,2,239,245,11,3,255,253,11,4,177,133,11,14,255,255,11,15,239,225,11,16,255,2,12,3,255,251,12,4,255,255,12,5,208,222,12,12,197,255,12,13,255,255,12,14,249,249,12,15,255,44,12,16,211,0,13,4,255,233,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,246,225,13,14,254,46,13,15,243,0,14,5,242,115,14,6,255,183,14,7,255,229,14,8,254,249,14,9,254,243,14,10,255,221,14,11,255,169,14,12,255,91,14,13,255,3,14,14,217,0,15,7,183,0,15,8,229,0,15,9,248,0,15,10,242,0,15,11,221,0,15,12,169,0],"secondary":false},{"width":12,"bonus":535,"chr":"E","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,255,4,9,254,156,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,254,156,4,16,255,255,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,8,255,255,5,9,254,156,5,10,156,0,5,15,155,255,5,16,255,255,5,17,255,0,6,1,255,255,6,2,254,156,6,3,156,0,6,8,255,255,6,9,254,156,6,10,156,0,6,15,155,255,6,16,255,255,6,17,255,0,7,1,255,255,7,2,254,156,7,3,156,0,7,8,255,255,7,9,254,156,7,10,156,0,7,15,155,255,7,16,255,255,7,17,255,0,8,1,255,255,8,2,254,156,8,3,156,0,8,8,255,255,8,9,254,156,8,10,156,0,8,15,155,255,8,16,255,255,8,17,255,0,9,1,255,255,9,2,254,156,9,3,156,0,9,8,255,255,9,9,254,156,9,10,156,0,9,15,155,255,9,16,255,255,9,17,255,0,10,1,255,255,10,2,254,156,10,3,156,0,10,9,255,78,10,10,156,0,10,15,155,255,10,16,255,255,10,17,255,0,11,2,255,0,11,3,156,0,11,16,156,0,11,17,255,0],"secondary":false},{"width":12,"bonus":435,"chr":"F","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,254,156,4,9,255,255,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,8,155,255,5,9,255,255,5,10,255,0,6,1,255,255,6,2,254,156,6,3,156,0,6,8,155,255,6,9,255,255,6,10,255,0,7,1,255,255,7,2,254,156,7,3,156,0,7,8,155,255,7,9,255,255,7,10,255,0,8,1,255,255,8,2,254,156,8,3,156,0,8,8,155,255,8,9,255,255,8,10,255,0,9,1,255,255,9,2,254,156,9,3,156,0,9,8,155,255,9,9,255,255,9,10,255,0,10,1,255,255,10,2,254,156,10,3,156,0,10,9,206,159,10,10,255,0,11,2,255,0,11,3,156,0],"secondary":false},{"width":16,"bonus":580,"chr":"G","pixels":[1,6,171,255,1,7,215,255,1,8,241,255,1,9,247,255,1,10,229,255,1,11,183,255,2,4,208,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,246,248,3,3,241,255,3,4,255,255,3,5,244,209,3,6,254,94,3,7,255,33,3,8,255,8,3,9,255,8,3,10,255,30,3,11,255,84,3,12,255,181,3,13,255,255,3,14,255,255,4,2,205,255,4,3,255,255,4,4,247,124,4,5,255,1,4,6,200,0,4,13,206,108,4,14,255,251,4,15,255,245,5,2,255,255,5,3,234,162,5,4,255,0,5,14,168,187,5,15,255,255,5,16,250,133,6,1,165,255,6,2,251,254,6,3,255,19,6,15,250,250,6,16,255,201,7,1,211,255,7,2,234,215,7,3,250,0,7,15,193,252,7,16,254,238,7,17,201,0,8,1,239,255,8,2,240,177,8,3,197,0,8,15,163,255,8,16,254,254,8,17,237,0,9,1,245,255,9,2,250,174,9,3,166,0,9,8,155,255,9,9,255,255,9,15,165,255,9,16,253,251,9,17,253,0,10,1,223,255,10,2,252,202,10,3,171,0,10,8,155,255,10,9,255,255,10,10,255,0,10,15,185,255,10,16,247,241,10,17,249,0,11,1,196,255,11,2,253,247,11,3,202,14,11,8,155,255,11,9,255,255,11,10,255,0,11,15,233,255,11,16,241,214,11,17,233,0,12,2,255,255,12,3,249,87,12,8,155,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,12,13,255,255,12,14,255,255,12,15,255,255,12,16,246,154,12,17,202,0,13,2,190,165,13,3,255,16,13,8,155,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,255,255,13,14,255,255,13,15,255,255,13,16,255,90,14,9,156,0,14,10,255,0,14,11,255,0,14,12,255,0,14,13,255,0,14,14,255,0,14,15,255,0,14,16,255,0],"secondary":false},{"width":16,"bonus":595,"chr":"H","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,255,4,9,254,156,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,8,255,255,5,9,254,156,5,10,156,0,6,8,255,255,6,9,254,156,6,10,156,0,7,8,255,255,7,9,254,156,7,10,156,0,8,8,255,255,8,9,254,156,8,10,156,0,9,8,255,255,9,9,254,156,9,10,156,0,10,8,255,255,10,9,254,156,10,10,156,0,11,8,255,255,11,9,254,156,11,10,156,0,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,12,13,255,255,12,14,255,255,12,15,255,255,12,16,255,255,13,1,255,255,13,2,255,255,13,3,255,255,13,4,255,255,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,255,255,13,14,255,255,13,15,255,255,13,16,255,255,13,17,255,0,14,2,255,0,14,3,255,0,14,4,255,0,14,5,255,0,14,6,255,0,14,7,255,0,14,8,255,0,14,9,255,0,14,10,255,0,14,11,255,0,14,12,255,0,14,13,255,0,14,14,255,0,14,15,255,0,14,16,255,0,14,17,255,0],"secondary":false},{"width":8,"bonus":315,"chr":"I","pixels":[1,1,255,255,1,16,255,255,2,1,255,255,2,2,255,128,2,16,255,255,2,17,255,0,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,4,17,255,0,5,1,255,255,5,2,255,127,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,11,255,0,5,12,255,0,5,13,255,0,5,14,255,0,5,15,255,123,5,16,255,255,5,17,255,0,6,1,255,255,6,2,254,70,6,16,255,255,6,17,255,0,7,2,255,0,7,17,255,0],"secondary":false},{"width":6,"bonus":310,"chr":"J","pixels":[0,19,255,255,0,20,255,147,1,18,177,255,1,19,255,255,1,20,255,99,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,242,225,2,20,255,9,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,251,3,17,255,223,3,18,255,146,3,19,255,19,3,20,214,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,251,0,4,18,223,0],"secondary":false},{"width":14,"bonus":515,"chr":"K","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,5,4,8,255,165,4,9,254,255,4,10,255,90,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,7,187,255,5,8,255,255,5,9,222,185,5,10,254,0,6,6,209,255,6,7,255,255,6,8,255,255,6,9,254,255,6,10,213,171,7,5,227,255,7,6,254,255,7,7,230,132,7,8,255,109,7,9,255,247,7,10,255,255,7,11,233,224,8,4,239,255,8,5,250,255,8,6,237,99,8,7,254,0,8,10,254,212,8,11,255,255,8,12,253,245,9,3,249,255,9,4,245,252,9,5,244,72,9,6,250,0,9,11,236,159,9,12,255,255,9,13,255,255,9,14,197,211,10,2,255,255,10,3,240,245,10,4,251,50,10,5,242,0,10,12,178,108,10,13,254,234,10,14,255,255,10,15,242,231,11,1,255,255,11,2,236,235,11,3,255,33,11,4,231,0,11,14,249,187,11,15,255,255,11,16,254,250,12,1,199,255,12,2,255,20,12,3,217,0,12,15,215,133,12,16,254,249,12,17,249,0,13,2,199,0,13,17,248,0],"secondary":false},{"width":12,"bonus":345,"chr":"L","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,196,4,16,255,255,4,17,255,0,5,15,196,255,5,16,255,255,5,17,255,0,6,15,196,255,6,16,255,255,6,17,255,0,7,15,196,255,7,16,255,255,7,17,255,0,8,15,196,255,8,16,255,255,8,17,255,0,9,15,196,255,9,16,255,255,9,17,255,0,10,15,196,255,10,16,255,255,10,17,255,0,11,16,196,0,11,17,255,0],"secondary":false},{"width":20,"bonus":855,"chr":"M","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,255,255,4,3,254,207,4,4,255,112,4,5,255,22,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,2,255,185,5,3,255,253,5,4,255,255,5,5,253,253,5,6,186,246,6,3,192,34,6,4,254,118,6,5,254,213,6,6,255,255,6,7,255,255,6,8,244,250,6,9,157,251,7,6,221,58,7,7,254,144,7,8,255,233,7,9,255,255,7,10,255,255,7,11,228,246,8,9,239,82,8,10,255,171,8,11,254,249,8,12,255,255,8,13,255,255,8,14,204,246,9,11,176,24,9,12,251,106,9,13,254,198,9,14,255,255,9,15,255,255,9,16,250,252,10,13,210,217,10,14,255,253,10,15,255,255,10,16,255,239,10,17,247,0,11,11,235,255,11,12,255,255,11,13,252,254,11,14,232,196,11,15,254,85,11,16,255,7,11,17,239,0,12,8,209,255,12,9,255,255,12,10,255,255,12,11,233,223,12,12,244,115,12,13,255,21,12,14,251,0,12,15,178,0,13,5,179,255,13,6,251,255,13,7,255,255,13,8,240,241,13,9,234,148,13,10,255,42,13,11,255,0,13,12,204,0,14,3,237,255,14,4,255,255,14,5,247,252,14,6,227,181,14,7,252,68,14,8,255,2,14,9,227,0,15,1,255,255,15,2,255,255,15,3,226,211,15,4,243,98,15,5,255,11,15,6,244,0,15,7,161,0,16,1,255,255,16,2,255,255,16,3,255,255,16,4,255,255,16,5,255,255,16,6,255,255,16,7,255,255,16,8,255,255,16,9,255,255,16,10,255,255,16,11,255,255,16,12,255,255,16,13,255,255,16,14,255,255,16,15,255,255,16,16,255,255,17,1,255,255,17,2,255,255,17,3,255,255,17,4,255,255,17,5,255,255,17,6,255,255,17,7,255,255,17,8,255,255,17,9,255,255,17,10,255,255,17,11,255,255,17,12,255,255,17,13,255,255,17,14,255,255,17,15,255,255,17,16,255,255,17,17,255,0,18,2,255,0,18,3,255,0,18,4,255,0,18,5,255,0,18,6,255,0,18,7,255,0,18,8,255,0,18,9,255,0,18,10,255,0,18,11,255,0,18,12,255,0,18,13,255,0,18,14,255,0,18,15,255,0,18,16,255,0,18,17,255,0],"secondary":false},{"width":17,"bonus":665,"chr":"N","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,215,255,4,2,255,255,4,3,255,249,4,4,255,129,4,5,255,6,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,2,236,144,5,3,255,251,5,4,255,255,5,5,234,233,6,3,155,77,6,4,254,204,6,5,255,255,6,6,254,255,6,7,175,220,7,5,227,132,7,6,254,246,7,7,255,255,7,8,244,240,8,7,253,193,8,8,255,255,8,9,255,255,8,10,199,222,9,8,217,120,9,9,254,240,9,10,255,255,9,11,250,244,10,10,250,179,10,11,255,255,10,12,255,255,10,13,218,227,11,11,202,107,11,12,254,233,11,13,255,255,11,14,253,250,12,13,247,165,12,14,255,255,12,15,255,255,12,16,232,232,13,1,255,255,13,2,255,255,13,3,255,255,13,4,255,255,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,254,255,13,14,255,255,13,15,255,255,13,16,255,255,13,17,211,0,14,1,255,255,14,2,255,255,14,3,255,255,14,4,255,255,14,5,255,255,14,6,255,255,14,7,255,255,14,8,255,255,14,9,255,255,14,10,255,255,14,11,255,255,14,12,255,255,14,13,255,255,14,14,255,255,14,15,255,255,14,16,255,255,14,17,255,0,15,2,255,0,15,3,255,0,15,4,255,0,15,5,255,0,15,6,255,0,15,7,255,0,15,8,255,0,15,9,255,0,15,10,255,0,15,11,255,0,15,12,255,0,15,13,255,0,15,14,255,0,15,15,255,0,15,16,255,0,15,17,255,0],"secondary":false},{"width":16,"bonus":575,"chr":"O","pixels":[1,6,190,255,1,7,231,255,1,8,247,255,1,9,247,255,1,10,229,255,1,11,187,255,2,4,249,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,251,252,3,3,255,255,3,4,251,252,3,5,252,151,3,6,255,69,3,7,255,24,3,8,255,6,3,9,255,6,3,10,255,25,3,11,255,71,3,12,255,153,3,13,255,249,3,14,255,255,3,15,187,178,4,2,253,255,4,3,241,239,4,4,255,40,4,5,248,0,4,13,170,63,4,14,254,228,4,15,254,255,4,16,154,80,5,1,155,255,5,2,255,255,5,3,254,59,5,4,226,0,5,15,255,255,5,16,254,156,6,1,217,255,6,2,238,226,6,3,255,0,6,15,220,243,6,16,255,219,6,17,155,0,7,1,243,255,7,2,242,177,7,3,211,0,7,15,167,255,7,16,253,247,7,17,219,0,8,1,245,255,8,2,251,169,8,3,168,0,8,15,166,255,8,16,252,248,8,17,245,0,9,1,219,255,9,2,253,209,9,3,166,0,9,15,207,255,9,16,242,231,9,17,245,0,10,1,153,255,10,2,255,255,10,3,217,62,10,15,255,255,10,16,236,165,10,17,219,0,11,2,254,254,11,3,254,222,11,14,223,255,11,15,252,254,11,16,255,44,11,17,153,0,12,3,255,255,12,4,253,247,12,5,162,231,12,13,247,255,12,14,255,255,12,15,238,130,12,16,252,0,13,3,176,152,13,4,255,245,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,251,249,13,14,250,107,13,15,255,0,14,5,250,120,14,6,255,185,14,7,255,229,14,8,255,247,14,9,255,247,14,10,255,229,14,11,255,184,14,12,255,117,14,13,255,20,14,14,245,0,15,7,185,0,15,8,229,0,15,9,247,0,15,10,247,0,15,11,229,0,15,12,184,0],"secondary":false},{"width":13,"bonus":500,"chr":"P","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,254,156,4,10,255,255,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,9,157,255,5,10,255,255,5,11,255,0,6,1,249,255,6,2,255,163,6,3,156,0,6,9,167,255,6,10,251,249,6,11,255,0,7,1,231,255,7,2,254,198,7,3,163,0,7,9,208,255,7,10,242,229,7,11,245,0,8,1,185,255,8,2,254,252,8,3,205,43,8,9,255,255,8,10,237,170,8,11,218,0,9,2,255,255,9,3,254,222,9,8,223,255,9,9,254,255,9,10,255,55,9,11,158,0,10,2,217,227,10,3,255,255,10,4,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,255,10,9,239,140,10,10,254,0,11,3,224,146,11,4,255,215,11,5,254,249,11,6,254,240,11,7,255,191,11,8,255,84,11,9,255,0,12,5,215,0,12,6,248,0,12,7,240,0,12,8,191,0],"secondary":false},{"width":16,"bonus":610,"chr":"Q","pixels":[1,6,190,255,1,7,231,255,1,8,247,255,1,9,247,255,1,10,229,255,1,11,187,255,2,4,249,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,251,252,3,3,255,255,3,4,251,252,3,5,252,151,3,6,255,69,3,7,255,24,3,8,255,6,3,9,255,6,3,10,255,25,3,11,255,71,3,12,255,153,3,13,255,249,3,14,255,255,3,15,187,178,4,2,253,255,4,3,241,239,4,4,255,40,4,5,248,0,4,13,170,63,4,14,254,228,4,15,254,255,4,16,154,80,5,1,155,255,5,2,255,255,5,3,254,59,5,4,226,0,5,15,255,255,5,16,254,156,6,1,217,255,6,2,238,226,6,3,255,0,6,15,220,243,6,16,255,219,6,17,155,0,7,1,243,255,7,2,242,177,7,3,211,0,7,15,167,255,7,16,253,247,7,17,219,0,8,1,245,255,8,2,251,169,8,3,168,0,8,15,166,255,8,16,255,255,8,17,246,32,9,1,219,255,9,2,253,209,9,3,166,0,9,15,207,255,9,16,255,255,9,17,255,233,10,1,153,255,10,2,255,255,10,3,217,62,10,15,255,255,10,16,249,229,10,17,255,255,10,18,254,249,11,2,254,254,11,3,254,222,11,14,223,255,11,15,254,255,11,16,255,55,11,17,237,110,11,18,255,253,11,19,255,255,12,3,255,255,12,4,253,247,12,5,162,231,12,13,247,255,12,14,255,255,12,15,240,139,12,16,254,0,12,18,154,145,12,19,255,251,12,20,255,128,13,3,176,152,13,4,254,245,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,255,13,12,255,255,13,13,251,249,13,14,250,113,13,15,255,0,13,20,253,120,14,5,249,120,14,6,255,184,14,7,254,228,14,8,254,246,14,9,255,249,14,10,254,231,14,11,255,189,14,12,255,118,14,13,255,22,14,14,245,0,15,7,184,0,15,8,228,0,15,9,246,0,15,10,249,0,15,11,230,0,15,12,189,0],"secondary":false},{"width":14,"bonus":575,"chr":"R","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,255,4,10,254,156,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,9,255,255,5,10,254,156,5,11,156,0,6,1,251,255,6,2,255,159,6,3,156,0,6,9,255,255,6,10,254,156,6,11,156,0,7,1,237,255,7,2,254,184,7,3,159,0,7,9,255,255,7,10,255,233,7,11,192,124,8,1,196,255,8,2,254,244,8,3,188,22,8,9,255,255,8,10,255,253,8,11,255,255,8,12,218,231,9,2,255,255,9,3,252,202,9,8,245,255,9,9,222,227,9,10,254,46,9,11,254,198,9,12,255,255,9,13,255,253,9,14,173,226,10,2,231,233,10,3,255,255,10,4,255,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,246,248,10,9,247,50,10,10,197,0,10,12,220,117,10,13,255,237,10,14,255,255,10,15,248,244,11,3,235,156,11,4,255,223,11,5,255,249,11,6,254,228,11,7,255,165,11,8,255,40,11,9,239,0,11,14,248,166,11,15,255,255,11,16,255,255,12,5,223,0,12,6,249,0,12,7,228,0,12,8,165,0,12,15,184,87,12,16,254,215,12,17,255,0,13,17,214,0],"secondary":false},{"width":12,"bonus":440,"chr":"S","pixels":[1,3,175,255,1,4,243,255,1,5,235,255,1,6,184,255,1,15,255,255,2,2,225,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,254,252,2,15,254,254,2,16,255,191,3,2,255,255,3,3,244,159,3,4,255,21,3,5,255,22,3,6,255,155,3,7,255,255,3,8,254,224,3,15,215,250,3,16,254,231,3,17,191,0,4,1,209,255,4,2,241,241,4,3,255,5,4,7,237,224,4,8,255,255,4,9,235,103,4,15,181,255,4,16,254,250,4,17,230,0,5,1,245,255,5,2,240,184,5,3,228,0,5,8,255,255,5,9,255,195,5,15,161,255,5,16,254,252,5,17,249,0,6,1,247,255,6,2,251,170,6,3,174,0,6,8,243,249,6,9,255,255,6,10,204,50,6,15,185,255,6,16,248,242,6,17,252,0,7,1,225,255,7,2,254,197,7,3,168,0,7,9,255,255,7,10,255,163,7,15,243,255,7,16,238,204,7,17,236,0,8,1,196,255,8,2,253,246,8,3,198,10,8,9,252,252,8,10,255,255,8,11,204,143,8,14,181,255,8,15,255,255,8,16,248,105,8,17,190,0,9,2,255,255,9,3,247,79,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,238,210,9,16,255,4,10,2,175,134,10,3,255,9,10,10,175,150,10,11,255,215,10,12,255,249,10,13,255,227,10,14,255,141,10,15,255,13,10,16,196,0,11,12,215,0,11,13,249,0,11,14,227,0],"secondary":false},{"width":14,"bonus":390,"chr":"T","pixels":[1,1,255,255,1,2,155,255,2,1,255,255,2,2,254,156,2,3,156,0,3,1,255,255,3,2,254,156,3,3,156,0,4,1,255,255,4,2,254,156,4,3,156,0,5,1,255,255,5,2,254,156,5,3,156,0,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,255,6,16,255,255,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,7,13,255,255,7,14,255,255,7,15,255,255,7,16,255,255,7,17,255,0,8,1,255,255,8,2,254,156,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0,8,10,255,0,8,11,255,0,8,12,255,0,8,13,255,0,8,14,255,0,8,15,255,0,8,16,255,0,8,17,255,0,9,1,255,255,9,2,254,156,9,3,156,0,10,1,255,255,10,2,254,156,10,3,156,0,11,1,255,255,11,2,254,156,11,3,156,0,12,1,255,255,12,2,254,156,12,3,156,0,13,2,255,0,13,3,156,0],"secondary":false},{"width":16,"bonus":530,"chr":"U","pixels":[2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,249,255,2,12,223,255,2,13,158,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,253,251,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,8,4,12,255,43,4,13,254,132,4,14,255,247,4,15,255,249,5,14,168,112,5,15,255,255,5,16,252,158,6,15,222,241,6,16,255,221,6,17,156,0,7,15,165,255,7,16,253,250,7,17,221,0,8,15,163,255,8,16,251,249,8,17,248,0,9,15,211,255,9,16,241,228,9,17,246,0,10,15,255,255,10,16,237,158,10,17,216,0,11,14,247,255,11,15,248,252,11,16,255,35,12,1,255,255,12,2,255,255,12,3,255,255,12,4,255,255,12,5,255,255,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,12,13,255,255,12,14,251,251,12,15,249,84,12,16,246,0,13,1,255,255,13,2,255,255,13,3,255,255,13,4,255,255,13,5,255,255,13,6,255,255,13,7,255,255,13,8,255,255,13,9,255,255,13,10,255,255,13,11,255,249,13,12,255,223,13,13,254,156,13,14,255,40,13,15,247,0,14,2,255,0,14,3,255,0,14,4,255,0,14,5,255,0,14,6,255,0,14,7,255,0,14,8,255,0,14,9,255,0,14,10,255,0,14,11,255,0,14,12,249,0,14,13,223,0,14,14,156,0],"secondary":false},{"width":13,"bonus":430,"chr":"V","pixels":[0,1,211,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,205,246,2,2,255,152,2,3,255,235,2,4,255,255,2,5,255,255,2,6,253,253,2,7,191,247,3,3,154,7,3,4,241,76,3,5,255,160,3,6,254,240,3,7,255,255,3,8,255,255,3,9,250,252,3,10,177,248,4,6,162,11,4,7,245,83,4,8,254,168,4,9,255,245,4,10,255,255,4,11,255,255,4,12,244,250,4,13,161,252,5,9,171,16,5,10,248,90,5,11,254,174,5,12,255,245,5,13,255,255,5,14,255,255,5,15,237,249,6,12,176,13,6,13,249,102,6,14,255,221,6,15,255,255,6,16,255,255,7,12,207,255,7,13,255,255,7,14,255,255,7,15,254,255,7,16,255,196,7,17,255,0,8,9,209,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,246,217,8,14,254,120,8,15,255,31,8,16,254,0,8,17,196,0,9,6,201,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,248,228,9,11,255,133,9,12,255,43,9,13,255,0,9,14,209,0,10,3,193,255,10,4,253,255,10,5,255,255,10,6,255,255,10,7,250,236,10,8,255,146,10,9,255,56,10,10,255,0,10,11,222,0,11,1,251,255,11,2,255,255,11,3,255,255,11,4,252,244,11,5,254,160,11,6,254,70,11,7,255,3,11,8,232,0,12,1,247,255,12,2,254,174,12,3,255,83,12,4,255,8,12,5,241,0,12,6,159,0],"secondary":false},{"width":20,"bonus":785,"chr":"W","pixels":[0,1,155,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,215,251,2,2,255,179,2,3,254,240,2,4,255,255,2,5,255,255,2,6,255,255,2,7,252,254,2,8,206,251,3,3,180,3,3,4,243,54,3,5,255,115,3,6,255,179,3,7,254,240,3,8,255,255,3,9,255,255,3,10,255,255,3,11,249,254,3,12,194,252,4,7,180,3,4,8,243,54,4,9,255,115,4,10,255,178,4,11,254,233,4,12,255,255,4,13,255,255,4,14,255,255,4,15,246,252,4,16,182,253,5,11,178,0,5,12,236,55,5,13,255,152,5,14,255,239,5,15,255,255,5,16,255,255,5,17,181,0,6,11,217,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,252,218,6,16,254,144,6,17,255,0,7,7,189,255,7,8,249,255,7,9,255,255,7,10,255,255,7,11,251,249,7,12,244,187,7,13,255,106,7,14,255,34,7,15,255,0,7,16,216,0,8,4,223,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,245,224,8,9,253,143,8,10,255,69,8,11,255,7,8,12,245,0,8,13,179,0,9,1,249,255,9,2,255,255,9,3,255,255,9,4,247,243,9,5,245,180,9,6,255,104,9,7,255,32,9,8,255,0,9,9,215,0,10,1,255,255,10,2,255,255,10,3,255,235,10,4,254,156,10,5,242,94,10,6,179,27,11,2,255,158,11,3,254,233,11,4,255,255,11,5,255,255,11,6,254,254,11,7,203,250,12,3,158,2,12,4,237,58,12,5,255,130,12,6,254,207,12,7,255,255,12,8,255,255,12,9,255,255,12,10,234,250,12,11,155,255,13,7,211,31,13,8,255,102,13,9,255,178,13,10,255,245,13,11,255,255,13,12,255,255,13,13,251,253,13,14,190,251,14,10,180,11,14,11,248,68,14,12,254,132,14,13,255,184,14,14,255,241,14,15,255,255,14,16,255,255,15,12,201,232,15,13,243,242,15,14,255,255,15,15,255,255,15,16,255,255,15,17,255,0,16,8,193,255,16,9,247,255,16,10,255,255,16,11,255,255,16,12,255,255,16,13,248,238,16,14,247,172,16,15,255,99,16,16,255,33,16,17,255,0,17,4,195,255,17,5,249,255,17,6,255,255,17,7,255,255,17,8,255,255,17,9,251,243,17,10,253,178,17,11,255,110,17,12,255,43,17,13,255,0,17,14,232,0,17,15,166,0,18,1,249,255,18,2,255,255,18,3,255,255,18,4,255,255,18,5,253,249,18,6,253,189,18,7,255,121,18,8,255,54,18,9,255,3,18,10,240,0,18,11,177,0,19,1,251,255,19,2,254,200,19,3,254,132,19,4,255,65,19,5,255,7,19,6,247,0,19,7,188,0],"secondary":false},{"width":13,"bonus":450,"chr":"X","pixels":[1,1,255,255,1,2,184,220,1,15,231,255,1,16,255,255,2,1,225,255,2,2,255,255,2,3,247,241,2,13,183,255,2,14,255,255,2,15,250,252,2,16,243,131,2,17,255,0,3,2,242,146,3,3,255,251,3,4,255,255,3,5,205,223,3,12,245,255,3,13,255,255,3,14,233,197,3,15,255,33,3,16,247,0,4,3,159,72,4,4,254,197,4,5,255,255,4,6,251,247,4,10,209,255,4,11,255,255,4,12,238,240,4,13,248,81,4,14,255,0,4,15,180,0,5,5,219,114,5,6,254,237,5,7,255,255,5,8,233,238,5,9,254,255,5,10,250,254,5,11,233,145,5,12,255,10,5,13,224,0,6,7,254,245,6,8,255,255,6,9,255,255,6,10,255,122,6,11,249,0,7,6,241,255,7,7,255,255,7,8,253,192,7,9,255,249,7,10,255,255,7,11,218,217,8,4,205,255,8,5,255,255,8,6,237,241,8,7,245,76,8,8,255,0,8,9,200,51,8,10,253,193,8,11,255,255,8,12,253,251,8,13,154,226,9,3,253,255,9,4,252,254,9,5,234,155,9,6,255,11,9,7,224,0,9,11,216,114,9,12,254,237,9,13,255,255,9,14,242,239,10,1,231,255,10,2,255,255,10,3,236,225,10,4,253,52,10,5,252,0,10,13,248,165,10,14,255,255,10,15,255,255,10,16,210,228,11,1,245,255,11,2,242,125,11,3,255,4,11,4,208,0,11,14,183,89,11,15,254,216,11,16,255,255,11,17,188,0,12,2,246,0,12,16,236,139,12,17,255,0],"secondary":false},{"width":12,"bonus":370,"chr":"Y","pixels":[0,1,235,255,1,1,253,255,1,2,255,255,1,3,238,241,2,2,254,183,2,3,255,255,2,4,255,255,2,5,229,238,3,3,199,78,3,4,255,196,3,5,255,255,3,6,255,255,3,7,218,235,4,5,213,91,4,6,255,209,4,7,255,255,4,8,255,255,4,9,204,234,5,7,225,102,5,8,254,221,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,255,255,6,8,233,242,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,255,6,16,255,255,6,17,255,0,7,6,207,255,7,7,255,255,7,8,255,255,7,9,244,184,7,10,255,43,7,11,255,0,7,12,255,0,7,13,255,0,7,14,255,0,7,15,255,0,7,16,255,0,7,17,255,0,8,4,191,255,8,5,255,255,8,6,255,255,8,7,243,203,8,8,254,58,8,9,255,0,8,10,176,0,9,2,177,255,9,3,255,255,9,4,255,255,9,5,243,220,9,6,255,75,9,7,255,0,9,8,194,0,10,1,253,255,10,2,255,255,10,3,245,232,10,4,255,92,10,5,255,2,10,6,210,0,11,1,233,255,11,2,254,111,11,3,255,6,11,4,223,0],"secondary":false},{"width":12,"bonus":500,"chr":"Z","pixels":[1,1,255,255,1,2,155,255,1,15,225,255,1,16,255,255,2,1,255,255,2,2,254,156,2,3,156,0,2,13,187,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,0,3,1,255,255,3,2,254,156,3,3,156,0,3,12,251,255,3,13,253,255,3,14,227,169,3,15,255,172,3,16,255,255,3,17,255,0,4,1,255,255,4,2,254,156,4,3,156,0,4,10,231,255,4,11,255,255,4,12,232,224,4,13,251,54,4,14,253,0,4,15,214,185,4,16,255,255,4,17,255,0,5,1,255,255,5,2,254,156,5,3,156,0,5,8,197,255,5,9,255,255,5,10,245,249,5,11,241,113,5,12,255,2,5,13,204,0,5,15,155,255,5,16,255,255,5,17,255,0,6,1,255,255,6,2,254,156,6,3,156,0,6,6,153,255,6,7,253,255,6,8,255,255,6,9,234,178,6,10,255,23,6,11,240,0,6,15,155,255,6,16,255,255,6,17,255,0,7,1,255,255,7,2,254,156,7,3,157,5,7,5,237,255,7,6,255,255,7,7,238,229,7,8,253,64,7,9,255,0,7,10,164,0,7,15,155,255,7,16,255,255,7,17,255,0,8,1,255,255,8,2,255,197,8,3,236,224,8,4,255,255,8,5,249,251,8,6,245,125,8,7,255,5,8,8,214,0,8,15,155,255,8,16,255,255,8,17,255,0,9,1,255,255,9,2,255,255,9,3,255,255,9,4,240,188,9,5,255,31,9,6,245,0,9,15,155,255,9,16,255,255,9,17,255,0,10,1,255,255,10,2,255,223,10,3,255,77,10,4,255,0,10,5,177,0,10,15,155,255,10,16,255,255,10,17,255,0,11,2,255,0,11,3,223,0,11,16,156,0,11,17,255,0],"secondary":false},{"width":12,"bonus":500,"chr":"0","pixels":[1,5,177,255,1,6,217,255,1,7,241,255,1,8,251,255,1,9,249,255,1,10,237,255,1,11,209,255,1,12,163,255,2,3,245,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,241,247,3,2,255,255,3,3,248,251,3,4,251,144,3,5,255,72,3,6,255,33,3,7,255,11,3,8,255,3,3,9,255,3,3,10,255,11,3,11,255,33,3,12,255,73,3,13,255,143,3,14,254,245,3,15,254,252,4,1,195,255,4,2,248,252,4,3,255,41,4,4,244,0,4,14,162,66,4,15,255,245,4,16,255,190,5,1,241,255,5,2,236,187,5,3,245,0,5,15,186,237,5,16,254,243,5,17,190,0,6,1,239,255,6,2,251,180,6,3,173,0,6,15,175,255,6,16,250,247,6,17,242,0,7,1,185,255,7,2,254,249,7,3,192,66,7,15,247,255,7,16,235,210,7,17,242,0,8,2,254,252,8,3,254,249,8,4,172,226,8,14,247,255,8,15,254,255,8,16,250,76,8,17,194,0,9,3,255,231,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,250,248,9,15,251,98,9,16,254,0,10,4,240,98,10,5,254,164,10,6,255,209,10,7,254,239,10,8,254,251,10,9,254,251,10,10,255,239,10,11,255,213,10,12,255,172,10,13,255,105,10,14,255,16,10,15,243,0,11,6,164,0,11,7,209,0,11,8,238,0,11,9,250,0,11,10,250,0,11,11,239,0,11,12,213,0,11,13,172,0],"secondary":false},{"width":12,"bonus":300,"chr":"1","pixels":[2,4,163,255,3,3,203,255,3,4,254,255,3,5,192,104,4,2,158,255,4,3,255,255,4,4,229,136,4,5,254,0,5,2,255,255,5,3,215,176,5,4,255,0,6,1,249,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,255,6,16,255,255,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,7,13,255,255,7,14,255,255,7,15,255,255,7,16,255,255,7,17,255,0,8,2,255,0,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0,8,10,255,0,8,11,255,0,8,12,255,0,8,13,255,0,8,14,255,0,8,15,255,0,8,16,255,0,8,17,255,0],"secondary":false},{"width":12,"bonus":450,"chr":"2","pixels":[1,15,225,255,1,16,255,255,2,2,251,255,2,3,234,239,2,14,241,255,2,15,255,255,2,16,255,255,2,17,255,0,3,2,254,255,3,3,252,58,3,4,220,0,3,13,249,255,3,14,245,251,3,15,252,208,3,16,255,255,3,17,255,0,4,1,223,255,4,2,231,218,4,3,254,0,4,12,255,255,4,13,240,245,4,14,251,49,4,15,249,159,4,16,255,255,4,17,255,0,5,1,249,255,5,2,244,172,5,3,197,0,5,10,163,255,5,11,255,255,5,12,237,236,5,13,255,34,5,14,231,0,5,15,174,228,5,16,255,255,5,17,255,0,6,1,233,255,6,2,254,212,6,3,165,2,6,9,201,255,6,10,255,255,6,11,235,218,6,12,255,22,6,13,219,0,6,15,155,255,6,16,255,255,6,17,255,0,7,1,163,255,7,2,255,255,7,3,237,167,7,8,243,255,7,9,255,255,7,10,238,185,7,11,255,9,7,12,201,0,7,15,155,255,7,16,255,255,7,17,255,0,8,2,249,245,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,250,250,8,9,249,109,8,10,255,0,8,11,172,0,8,15,155,255,8,16,255,255,8,17,255,0,9,3,249,172,9,4,255,235,9,5,254,251,9,6,254,219,9,7,255,133,9,8,255,24,9,9,246,0,9,15,155,255,9,16,255,255,9,17,255,0,10,4,168,0,10,5,235,0,10,6,250,0,10,7,218,0,10,15,155,255,10,16,255,255,10,17,255,0,11,16,156,0,11,17,255,0],"secondary":false},{"width":12,"bonus":450,"chr":"3","pixels":[1,2,241,255,1,3,183,233,1,15,255,255,1,16,202,188,2,2,255,255,2,3,247,106,2,4,167,0,2,15,230,247,2,16,255,211,3,1,199,255,3,2,243,242,3,3,255,3,3,8,255,255,3,9,163,243,3,15,173,255,3,16,252,239,3,17,211,0,4,1,237,255,4,2,237,187,4,3,231,0,4,8,255,255,4,9,254,164,4,10,156,0,4,15,160,255,4,16,254,252,4,17,236,0,5,1,249,255,5,2,249,170,5,3,174,0,5,8,255,255,5,9,255,193,5,10,164,0,5,15,184,255,5,16,249,245,5,17,251,0,6,1,225,255,6,2,254,218,6,3,167,3,6,8,240,253,6,9,254,251,6,10,198,29,6,15,247,255,6,16,238,209,6,17,239,0,7,1,157,255,7,2,255,255,7,3,239,159,7,7,249,255,7,8,186,151,7,9,254,249,7,10,254,198,7,14,207,255,7,15,255,255,7,16,251,110,7,17,195,0,8,2,250,248,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,230,232,8,8,250,8,8,9,188,185,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,8,14,255,255,8,15,244,206,8,16,255,5,9,3,251,189,9,4,255,245,9,5,255,229,9,6,255,159,9,7,255,22,9,8,210,0,9,10,191,160,9,11,255,219,9,12,254,249,9,13,254,221,9,14,254,132,9,15,255,10,9,16,197,0,10,4,186,0,10,5,245,0,10,6,229,0,10,7,159,0,10,12,219,0,10,13,248,0,10,14,220,0],"secondary":false},{"width":12,"bonus":495,"chr":"4","pixels":[1,11,163,255,1,12,255,255,1,13,199,255,2,10,237,255,2,11,250,255,2,12,255,255,2,13,254,201,2,14,200,0,3,8,197,255,3,9,255,255,3,10,217,225,3,11,241,45,3,12,255,255,3,13,254,201,3,14,200,0,4,7,251,255,4,8,235,251,4,9,218,106,4,10,255,0,4,11,192,0,4,12,255,255,4,13,254,201,4,14,200,0,5,5,223,255,5,6,252,254,5,7,204,181,5,8,251,15,5,9,231,0,5,12,255,255,5,13,254,201,5,14,200,0,6,3,173,255,6,4,255,255,6,5,214,235,6,6,230,53,6,7,252,0,6,12,255,255,6,13,254,201,6,14,200,0,7,2,241,255,7,3,205,248,7,4,201,109,7,5,255,1,7,6,198,0,7,12,255,255,7,13,254,201,7,14,200,0,8,1,255,255,8,2,255,255,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,255,8,14,255,255,8,15,255,255,8,16,255,255,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,255,255,9,16,255,255,9,17,255,0,10,2,255,0,10,3,255,0,10,4,255,0,10,5,255,0,10,6,255,0,10,7,255,0,10,8,255,0,10,9,255,0,10,10,255,0,10,11,255,0,10,12,255,255,10,13,254,201,10,14,255,0,10,15,255,0,10,16,255,0,10,17,255,0,11,12,255,255,11,13,254,201,11,14,200,0],"secondary":false},{"width":12,"bonus":465,"chr":"5","pixels":[2,1,159,255,2,2,179,255,2,3,199,255,2,4,221,255,2,5,241,255,2,6,255,255,2,7,255,255,2,8,187,243,2,15,255,255,2,16,204,191,3,1,255,255,3,2,255,255,3,3,255,255,3,4,252,246,3,5,250,223,3,6,252,199,3,7,254,243,3,8,254,201,3,9,178,0,3,15,223,248,3,16,254,215,4,1,255,255,4,2,255,166,4,3,255,10,4,4,255,0,4,5,243,0,4,6,219,0,4,7,249,235,4,8,250,171,4,9,200,0,4,15,172,255,4,16,253,247,4,17,214,0,5,1,255,255,5,2,254,156,5,3,166,0,5,7,247,255,5,8,246,171,5,9,168,0,5,15,163,255,5,16,254,252,5,17,246,0,6,1,255,255,6,2,254,156,6,3,156,0,6,7,245,255,6,8,253,199,6,9,165,0,6,15,193,255,6,16,246,240,6,17,251,0,7,1,255,255,7,2,254,156,7,3,156,0,7,7,202,255,7,8,254,252,7,9,207,53,7,15,251,255,7,16,237,192,7,17,232,0,8,1,255,255,8,2,254,156,8,3,156,0,8,8,255,255,8,9,254,222,8,14,225,255,8,15,255,255,8,16,252,75,8,17,178,0,9,1,219,255,9,2,255,134,9,3,156,0,9,8,222,226,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,242,153,9,16,255,0,10,2,220,0,10,9,226,145,10,10,254,219,10,11,255,249,10,12,254,239,10,13,255,187,10,14,255,83,10,15,255,0,11,11,218,0,11,12,249,0,11,13,238,0,11,14,187,0],"secondary":false},{"width":12,"bonus":515,"chr":"6","pixels":[1,6,161,255,1,7,209,255,1,8,235,255,1,9,247,255,1,10,249,255,1,11,233,255,1,12,190,255,2,4,235,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,245,247,3,3,255,255,3,4,246,251,3,5,247,145,3,6,255,66,3,7,255,24,3,8,255,158,3,9,255,215,3,10,255,62,3,11,255,10,3,12,255,37,3,13,255,123,3,14,254,240,3,15,254,251,4,2,255,255,4,3,235,234,4,4,255,29,4,5,242,0,4,7,155,199,4,8,248,254,4,9,171,52,4,10,215,0,4,15,255,249,4,16,253,178,5,1,161,255,5,2,255,255,5,3,254,52,5,4,216,0,5,7,219,255,5,8,220,219,5,9,247,0,5,15,196,233,5,16,254,239,5,17,177,0,6,1,223,255,6,2,238,223,6,3,255,0,6,7,249,255,6,8,243,182,6,9,189,0,6,15,173,255,6,16,252,251,6,17,238,0,7,1,247,255,7,2,244,179,7,3,208,0,7,7,227,255,7,8,254,231,7,9,176,16,7,15,235,255,7,16,241,224,7,17,248,0,8,1,251,255,8,2,252,167,8,3,171,0,8,8,255,255,8,9,248,194,8,14,207,255,8,15,255,255,8,16,244,123,8,17,212,0,9,1,171,255,9,2,254,150,9,3,165,0,9,8,240,233,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,242,195,9,16,255,5,10,2,171,0,10,9,239,150,10,10,254,221,10,11,255,249,10,12,255,241,10,13,255,195,10,14,255,102,10,15,255,3,10,16,185,0,11,11,220,0,11,12,249,0,11,13,241,0,11,14,195,0],"secondary":false},{"width":12,"bonus":375,"chr":"7","pixels":[1,1,255,255,1,2,155,255,2,1,255,255,2,2,254,156,2,3,156,0,3,1,255,255,3,2,254,156,3,3,156,0,3,16,195,255,4,1,255,255,4,2,254,156,4,3,156,0,4,14,231,255,4,15,255,255,4,16,255,255,4,17,195,0,5,1,255,255,5,2,254,156,5,3,156,0,5,11,175,255,5,12,251,255,5,13,255,255,5,14,254,254,5,15,248,184,5,16,255,75,5,17,255,0,6,1,255,255,6,2,254,156,6,3,156,0,6,9,215,255,6,10,255,255,6,11,255,255,6,12,247,237,6,13,254,131,6,14,255,29,6,15,253,0,6,16,179,0,7,1,255,255,7,2,254,156,7,3,156,0,7,6,154,255,7,7,245,255,7,8,255,255,7,9,254,255,7,10,244,194,7,11,255,81,7,12,255,4,7,13,229,0,8,1,255,255,8,2,254,162,8,3,191,121,8,4,197,255,8,5,255,255,8,6,255,255,8,7,246,242,8,8,251,138,8,9,255,34,8,10,254,0,8,11,185,0,9,1,255,255,9,2,255,255,9,3,255,255,9,4,255,255,9,5,241,202,9,6,255,87,9,7,255,6,9,8,233,0,10,1,255,255,10,2,255,237,10,3,255,142,10,4,255,39,10,5,255,0,10,6,191,0,11,2,255,0,11,3,237,0],"secondary":false},{"width":12,"bonus":565,"chr":"8","pixels":[1,3,197,255,1,4,247,255,1,5,225,255,1,11,201,255,1,12,243,255,1,13,239,255,1,14,171,255,2,2,241,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,228,221,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,248,240,3,1,154,255,3,2,255,255,3,3,248,119,3,4,255,15,3,5,255,33,3,6,255,166,3,7,255,255,3,8,241,202,3,9,255,255,3,10,233,229,3,11,255,67,3,12,255,11,3,13,255,28,3,14,254,156,3,15,255,255,3,16,245,151,4,1,217,255,4,2,234,219,4,3,255,0,4,7,235,216,4,8,255,255,4,9,245,227,4,10,255,14,4,11,209,0,4,15,242,236,4,16,254,219,5,1,245,255,5,2,242,174,5,3,201,0,5,8,255,255,5,9,255,139,5,10,218,0,5,15,174,253,5,16,254,249,5,17,218,0,6,1,217,255,6,2,254,203,6,3,165,0,6,7,197,255,6,8,255,255,6,9,255,239,6,15,175,255,6,16,252,250,6,17,248,0,7,1,154,255,7,2,255,255,7,3,226,131,7,6,169,255,7,7,255,255,7,8,230,156,7,9,255,255,7,10,247,148,7,15,231,255,7,16,241,223,7,17,247,0,8,2,249,247,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,223,185,8,8,255,0,8,9,221,207,8,10,254,255,8,11,198,160,8,14,173,255,8,15,255,255,8,16,243,133,8,17,211,0,9,3,252,197,9,4,254,246,9,5,255,219,9,6,255,123,9,7,255,5,9,8,162,0,9,10,248,238,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,242,227,9,16,255,12,10,4,195,0,10,5,246,0,10,6,219,0,10,11,249,189,10,12,255,247,10,13,254,233,10,14,255,152,10,15,255,20,10,16,215,0,11,12,184,0,11,13,247,0,11,14,232,0],"secondary":false},{"width":12,"bonus":520,"chr":"9","pixels":[1,4,197,255,1,5,241,255,1,6,249,255,1,7,223,255,2,2,185,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,242,238,2,16,172,255,3,2,255,255,3,3,241,217,3,4,254,70,3,5,255,12,3,6,255,10,3,7,255,53,3,8,255,185,3,9,255,255,3,10,244,159,3,15,165,255,3,16,254,255,3,17,172,0,4,1,211,255,4,2,244,246,4,3,255,19,4,4,205,0,4,9,247,235,4,10,254,228,4,15,166,255,4,16,252,251,4,17,254,0,5,1,247,255,5,2,241,184,5,3,235,0,5,9,174,251,5,10,254,250,5,11,228,0,5,15,201,255,5,16,244,234,5,17,248,0,6,1,237,255,6,2,252,184,6,3,174,0,6,9,189,255,6,10,244,231,6,11,249,0,6,15,253,255,6,16,235,175,6,17,224,0,7,1,175,255,7,2,255,251,7,3,199,82,7,9,247,255,7,10,221,142,7,11,221,0,7,14,209,255,7,15,254,255,7,16,254,55,7,17,162,0,8,2,254,252,8,3,255,243,8,4,162,205,8,8,217,255,8,9,174,235,8,10,248,39,8,11,156,106,8,13,239,255,8,14,255,255,8,15,234,148,8,16,254,0,9,3,254,239,9,4,255,255,9,5,255,255,9,6,255,255,9,7,255,255,9,8,255,255,9,9,255,255,9,10,255,255,9,11,255,255,9,12,255,255,9,13,246,244,9,14,246,114,9,15,255,0,10,4,246,122,10,5,255,189,10,6,255,233,10,7,255,249,10,8,254,246,10,9,254,233,10,10,254,204,10,11,255,157,10,12,255,92,10,13,255,8,10,14,236,0,11,6,189,0,11,7,233,0,11,8,249,0,11,9,246,0,11,10,232,0,11,11,204,0,11,12,157,0],"secondary":false},{"width":18,"bonus":705,"chr":"%","pixels":[1,5,205,255,1,6,241,255,1,7,239,255,1,8,199,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,154,166,3,3,225,255,3,4,245,245,3,5,255,67,3,6,255,10,3,7,255,10,3,8,255,65,3,9,255,235,3,10,254,225,4,3,249,255,4,4,244,177,4,5,235,0,4,9,191,227,4,10,255,251,4,11,224,0,4,16,155,255,5,3,221,255,5,4,254,239,5,5,194,95,5,9,237,255,5,10,244,234,5,11,251,0,5,15,239,255,5,16,235,253,5,17,156,0,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,245,108,6,11,224,0,6,13,211,255,6,14,252,254,6,15,192,192,6,16,240,17,6,17,234,0,7,4,163,142,7,5,255,202,7,6,255,239,7,7,255,239,7,8,255,202,7,9,255,95,7,10,255,29,7,11,204,211,7,12,255,255,7,13,207,236,7,14,219,51,7,15,252,0,8,6,202,0,8,7,239,0,8,8,239,8,8,9,227,138,8,10,248,251,8,11,229,251,8,12,198,111,8,13,255,0,8,14,191,0,9,8,219,255,9,9,248,255,9,10,191,176,9,11,244,11,9,12,226,0,10,6,181,255,10,7,255,255,10,8,200,226,10,9,225,43,10,10,251,113,10,11,233,229,10,12,242,255,10,13,237,255,10,14,197,255,11,5,249,255,11,6,222,249,11,7,202,92,11,8,255,0,11,9,217,153,11,10,255,255,11,11,255,255,11,12,255,255,11,13,255,255,11,14,255,255,11,15,255,255,12,3,227,255,12,4,243,255,12,5,191,158,12,6,249,6,12,7,217,0,12,9,243,255,12,10,223,216,12,11,255,42,12,12,255,6,12,13,255,13,12,14,255,72,12,15,254,237,12,16,254,222,13,3,163,255,13,4,231,29,13,5,243,0,13,9,255,255,13,10,247,90,13,11,189,0,13,15,195,224,13,16,255,251,13,17,222,0,14,4,164,0,14,9,242,254,14,10,255,195,14,15,239,255,14,16,244,233,14,17,251,0,15,10,255,255,15,11,255,255,15,12,255,255,15,13,255,255,15,14,255,255,15,15,255,255,15,16,245,107,15,17,223,0,16,10,172,148,16,11,255,205,16,12,255,241,16,13,254,239,16,14,255,202,16,15,255,95,16,16,255,0,17,12,205,0,17,13,241,0,17,14,238,0,17,15,202,0],"secondary":false},{"width":9,"bonus":310,"chr":"/","pixels":[1,19,175,255,1,20,239,255,2,15,161,255,2,16,227,255,2,17,255,255,2,18,255,255,2,19,255,255,2,20,246,233,2,21,239,0,3,12,215,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,248,242,3,17,245,177,3,18,255,103,3,19,255,36,3,20,255,0,3,21,225,0,4,8,201,255,4,9,251,255,4,10,255,255,4,11,255,255,4,12,250,249,4,13,243,191,4,14,255,115,4,15,255,48,4,16,255,1,4,17,235,0,4,18,170,0,5,4,187,255,5,5,245,255,5,6,255,255,5,7,255,255,5,8,252,253,5,9,242,205,5,10,253,128,5,11,255,60,5,12,255,5,5,13,244,0,5,14,182,0,6,0,173,255,6,1,237,255,6,2,255,255,6,3,255,255,6,4,254,255,6,5,242,218,6,6,251,143,6,7,255,73,6,8,255,12,6,9,250,0,6,10,195,0,7,0,255,255,7,1,243,230,7,2,248,157,7,3,255,85,7,4,255,20,7,5,254,0,7,6,207,0,8,0,255,31,8,1,255,0,8,2,219,0],"secondary":false},{"width":12,"bonus":265,"chr":"+","pixels":[1,9,155,255,1,10,255,255,2,9,155,255,2,10,255,255,2,11,255,0,3,9,155,255,3,10,255,255,3,11,255,0,4,9,155,255,4,10,255,255,4,11,255,0,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,0,7,6,255,0,7,7,255,0,7,8,255,0,7,9,254,156,7,10,255,255,7,11,255,0,7,12,255,0,7,13,255,0,7,14,255,0,7,15,255,0,8,9,155,255,8,10,255,255,8,11,255,0,9,9,155,255,9,10,255,255,9,11,255,0,10,9,155,255,10,10,255,255,10,11,255,0,11,10,156,0,11,11,255,0],"secondary":false},{"width":12,"bonus":285,"chr":"?","pixels":[2,2,223,255,3,1,154,255,3,2,253,255,3,3,227,37,4,1,221,255,4,2,232,216,4,3,253,0,4,14,155,255,4,15,245,255,4,16,157,255,5,1,249,255,5,2,243,171,5,3,196,0,5,9,221,255,5,10,255,255,5,11,255,255,5,14,243,255,5,15,255,255,5,16,254,246,5,17,157,0,6,1,239,255,6,2,253,199,6,3,163,0,6,8,235,255,6,9,253,255,6,10,238,141,6,11,255,37,6,12,255,6,6,15,252,206,6,16,255,117,6,17,246,0,7,1,179,255,7,2,255,255,7,3,224,137,7,7,239,255,7,8,254,255,7,9,244,105,7,10,253,0,7,16,204,0,8,2,253,252,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,254,254,8,8,246,108,8,9,254,0,9,3,254,194,9,4,254,246,9,5,255,239,9,6,255,187,9,7,255,63,9,8,253,0,10,4,193,0,10,5,246,0,10,6,239,0,10,7,187,0],"secondary":false},{"width":8,"bonus":225,"chr":"!","pixels":[3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,14,155,255,3,15,245,255,3,16,157,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,0,4,14,243,255,4,15,255,255,4,16,254,246,4,17,157,0,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0,5,9,255,0,5,10,255,0,5,11,255,0,5,12,255,0,5,15,252,206,5,16,255,117,5,17,246,0,6,16,204,0],"secondary":false},{"width":19,"bonus":910,"chr":"@","pixels":[1,8,209,255,1,9,241,255,1,10,251,255,1,11,239,255,1,12,209,255,2,5,199,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,181,231,3,4,243,255,3,5,255,255,3,6,244,215,3,7,255,117,3,8,255,49,3,9,255,22,3,10,255,4,3,11,255,17,3,12,254,58,3,13,255,133,3,14,255,237,3,15,255,255,3,16,233,212,4,3,243,255,4,4,247,251,4,5,248,106,4,6,255,0,4,7,206,0,4,15,250,202,4,16,255,255,4,17,225,148,5,2,211,255,5,3,252,254,5,4,246,72,5,5,243,0,5,8,191,255,5,9,237,255,5,10,245,255,5,11,215,255,5,16,249,237,5,17,255,241,6,2,255,255,6,3,234,149,6,4,252,0,6,6,175,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,243,238,6,17,255,255,6,18,245,78,7,1,165,255,7,2,252,254,7,3,255,29,7,6,255,255,7,7,239,216,7,8,255,74,7,9,255,21,7,10,255,7,7,11,255,43,7,12,255,179,7,13,255,255,7,14,240,126,7,17,255,255,7,18,254,126,8,1,217,255,8,2,237,222,8,3,252,0,8,5,211,255,8,6,239,243,8,7,255,14,8,8,202,0,8,13,255,255,8,14,255,148,8,17,255,255,8,18,255,146,9,1,243,255,9,2,243,185,9,3,206,0,9,5,247,255,9,6,240,179,9,7,228,0,9,13,255,255,9,14,255,103,9,17,255,255,9,18,255,143,10,1,245,255,10,2,251,170,10,3,176,0,10,5,235,255,10,6,253,197,10,7,169,0,10,12,205,255,10,13,210,246,10,14,255,9,10,17,255,255,10,18,255,116,11,1,217,255,11,2,253,201,11,3,167,0,11,5,202,255,11,6,255,255,11,7,255,255,11,8,255,255,11,9,255,255,11,10,255,255,11,11,255,255,11,12,217,239,11,13,209,27,11,14,202,0,11,17,255,255,11,18,255,79,12,1,172,255,12,2,254,252,12,3,205,35,12,6,255,255,12,7,255,255,12,8,255,255,12,9,255,255,12,10,255,255,12,11,255,255,12,12,255,255,12,13,249,230,12,17,246,252,12,18,255,9,13,2,255,255,13,3,254,159,13,7,255,0,13,8,255,0,13,9,255,0,13,10,255,0,13,11,255,9,13,12,255,98,13,13,255,255,13,14,241,138,13,17,181,153,13,18,243,0,14,2,218,238,14,3,255,255,14,4,207,159,14,13,255,255,14,14,255,137,15,3,251,241,15,4,255,255,15,5,230,228,15,12,217,255,15,13,255,255,15,14,254,58,16,4,250,202,16,5,255,255,16,6,255,255,16,7,255,255,16,8,255,255,16,9,255,255,16,10,255,255,16,11,255,255,16,12,254,255,16,13,235,128,16,14,255,0,17,5,214,84,17,6,254,164,17,7,255,213,17,8,255,241,17,9,255,245,17,10,255,217,17,11,255,152,17,12,255,45,17,13,254,0,18,7,164,0,18,8,213,0,18,9,241,0,18,10,245,0,18,11,217,0],"secondary":false},{"width":15,"bonus":540,"chr":"#","pixels":[1,11,155,255,1,12,255,255,2,7,255,255,2,11,155,255,2,12,255,255,2,13,255,0,3,7,255,255,3,8,255,80,3,11,155,255,3,12,255,255,3,13,255,51,3,16,181,255,4,7,255,255,4,8,255,125,4,9,156,182,4,10,165,255,4,11,233,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,246,250,4,16,228,218,4,17,182,0,5,5,175,255,5,6,223,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,235,238,5,11,245,236,5,12,255,255,5,13,255,79,5,14,255,32,5,15,255,0,5,16,241,0,5,17,195,0,6,3,255,255,6,4,252,254,6,5,233,231,6,6,231,198,6,7,255,255,6,8,255,122,6,9,255,17,6,10,255,0,6,11,240,165,6,12,255,255,6,13,255,0,7,4,255,6,7,5,251,0,7,6,217,38,7,7,255,255,7,8,255,80,7,11,155,255,7,12,255,255,7,13,255,0,8,7,255,255,8,8,255,80,8,11,185,255,8,12,255,255,8,13,255,181,8,14,229,255,8,15,255,255,8,16,255,255,9,7,255,255,9,8,254,219,9,9,247,251,9,10,255,255,9,11,255,255,9,12,255,255,9,13,254,201,9,14,226,174,9,15,240,115,9,16,255,62,9,17,255,0,10,3,203,255,10,4,247,255,10,5,255,255,10,6,255,255,10,7,255,255,10,8,255,202,10,9,237,145,10,10,247,87,10,11,255,175,10,12,255,255,10,13,255,0,10,14,200,0,10,15,154,0,11,3,175,255,11,4,230,142,11,5,249,83,11,6,255,63,11,7,255,255,11,8,255,80,11,9,202,0,11,11,188,211,11,12,255,255,11,13,255,0,12,4,175,0,12,7,255,255,12,8,255,80,12,11,155,255,12,12,255,255,12,13,255,0,13,7,255,255,13,8,255,80,13,12,156,0,13,13,255,0,14,8,255,0],"secondary":false},{"width":12,"bonus":555,"chr":"$","pixels":[1,5,219,255,1,6,245,255,1,7,202,255,1,14,187,255,1,15,249,255,2,4,253,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,253,2,15,255,255,2,16,252,91,3,3,181,255,3,4,252,254,3,5,254,77,3,6,255,11,3,7,255,109,3,8,255,255,3,9,255,211,3,15,255,255,3,16,255,124,4,3,243,255,4,4,230,184,4,5,251,0,4,8,215,220,4,9,255,255,4,10,221,73,4,15,255,255,4,16,255,146,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,255,255,5,17,255,255,5,18,255,255,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,255,6,16,255,255,6,17,255,255,6,18,255,255,6,19,255,0,7,2,255,4,7,3,255,253,7,4,255,141,7,5,255,0,7,6,255,0,7,7,255,0,7,8,255,0,7,9,255,209,7,10,255,251,7,11,255,33,7,12,255,0,7,13,255,0,7,14,255,60,7,15,255,255,7,16,255,100,7,17,255,0,7,18,255,0,7,19,255,0,8,3,231,255,8,4,254,188,8,10,255,255,8,11,254,191,8,14,196,255,8,15,253,255,8,16,255,32,9,3,169,255,9,4,254,251,9,5,191,23,9,10,228,234,9,11,255,255,9,12,255,255,9,13,255,255,9,14,255,255,9,15,230,165,9,16,253,0,10,4,200,116,10,5,250,6,10,11,240,187,10,12,254,245,10,13,255,235,10,14,255,142,10,15,255,6,11,12,176,0,11,13,244,0,11,14,235,0],"secondary":false},{"width":12,"bonus":235,"chr":"^","pixels":[1,9,159,255,1,10,251,255,2,7,161,255,2,8,251,255,2,9,250,254,2,10,217,183,2,11,251,0,3,5,165,255,3,6,251,255,3,7,245,253,3,8,213,169,3,9,252,27,3,10,249,0,3,11,156,0,4,3,167,255,4,4,253,255,4,5,238,253,4,6,209,154,4,7,252,18,4,8,243,0,5,1,172,255,5,2,253,255,5,3,232,250,5,4,206,139,5,5,253,11,5,6,236,0,6,1,225,255,6,2,255,255,6,3,254,177,6,4,233,59,7,2,237,107,7,3,255,219,7,4,255,255,7,5,206,240,8,4,231,98,8,5,255,211,8,6,255,255,8,7,227,242,9,6,225,89,9,7,255,201,9,8,255,255,9,9,240,245,10,8,216,80,10,9,255,191,10,10,255,255,11,10,205,72,11,11,255,0],"secondary":false},{"width":12,"bonus":140,"chr":"~","pixels":[1,9,245,255,2,8,197,255,2,9,230,248,2,10,246,5,3,8,247,255,3,9,234,178,3,10,224,0,4,8,235,255,4,9,254,206,4,10,164,0,5,8,158,255,5,9,255,255,5,10,215,63,6,9,255,255,6,10,255,163,7,9,215,243,7,10,254,239,7,11,163,0,8,9,163,255,8,10,254,250,8,11,238,0,9,9,221,255,9,10,234,215,9,11,249,0,10,9,246,254,10,10,229,62,10,11,198,0,11,10,246,0],"secondary":false},{"width":16,"bonus":660,"chr":"&","pixels":[1,11,209,255,1,12,247,255,1,13,237,255,1,14,169,255,2,3,223,255,2,4,245,255,2,5,201,255,2,9,169,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,248,242,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,182,206,3,9,255,255,3,10,238,221,3,11,255,59,3,12,255,9,3,13,255,37,3,14,255,175,3,15,255,255,3,16,247,158,4,1,193,255,4,2,252,254,4,3,254,76,4,4,255,9,4,5,255,68,4,6,255,215,4,7,255,255,4,8,255,255,4,9,234,233,4,10,255,13,4,11,206,0,4,15,246,235,4,16,254,225,4,17,153,0,5,1,233,255,5,2,236,194,5,3,251,0,5,7,250,232,5,8,255,255,5,9,254,177,5,10,214,4,5,15,172,252,5,16,254,251,5,17,224,0,6,1,241,255,6,2,248,180,6,3,179,0,6,7,255,255,6,8,254,246,6,9,255,255,6,10,226,182,6,15,169,255,6,16,250,247,6,17,250,0,7,1,202,255,7,2,255,249,7,3,198,94,7,6,241,255,7,7,235,247,7,8,255,33,7,9,253,211,7,10,255,255,7,11,218,181,7,15,219,255,7,16,240,222,7,17,242,0,8,2,255,255,8,3,255,255,8,4,255,255,8,5,255,255,8,6,248,252,8,7,245,65,8,8,228,0,8,10,248,224,8,11,255,255,8,12,212,177,8,15,255,255,8,16,239,148,8,17,209,0,9,2,164,179,9,3,255,225,9,4,255,245,9,5,254,192,9,6,255,55,9,7,246,0,9,11,251,229,9,12,255,255,9,13,210,180,9,14,223,255,9,15,249,254,9,16,255,29,10,4,225,0,10,5,245,0,10,6,192,0,10,12,252,234,10,13,255,255,10,14,255,255,10,15,238,118,10,16,248,0,11,12,224,250,11,13,255,255,11,14,255,255,11,15,254,132,12,10,208,255,12,11,255,255,12,12,254,255,12,13,241,160,12,14,254,234,12,15,255,255,12,16,200,179,13,9,255,255,13,10,255,255,13,11,243,201,13,12,255,60,13,13,254,0,13,14,168,65,13,15,253,235,13,16,255,255,14,10,255,37,14,11,255,0,14,12,191,0,14,16,252,235,14,17,255,0,15,17,232,0],"secondary":false},{"width":13,"bonus":285,"chr":"*","pixels":[2,4,205,255,2,5,255,255,3,5,255,255,3,6,255,60,3,9,166,255,4,5,255,255,4,6,255,79,4,8,221,255,4,9,255,255,4,10,224,190,5,5,243,251,5,6,255,187,5,7,251,253,5,8,251,254,5,9,242,173,5,10,255,51,5,11,167,0,6,1,255,255,6,2,255,255,6,3,255,255,6,4,244,255,6,5,250,255,6,6,255,255,6,7,230,179,6,8,249,28,6,9,250,0,6,10,164,0,7,1,205,255,7,2,255,178,7,3,255,151,7,4,255,123,7,5,254,236,7,6,255,253,7,7,254,249,7,8,216,176,8,2,205,0,8,3,178,0,8,4,160,36,8,5,254,255,8,6,243,114,8,7,254,183,8,8,255,255,8,9,252,252,9,5,255,255,9,6,253,70,9,8,216,142,9,9,255,251,9,10,251,115,10,4,163,255,10,5,255,255,10,6,255,51,10,10,251,6,11,4,166,255,11,5,243,232,11,6,255,31,12,5,166,0,12,6,222,0],"secondary":false},{"width":7,"bonus":310,"chr":"(","pixels":[1,6,185,255,1,7,217,255,1,8,233,255,1,9,249,255,1,10,247,255,1,11,231,255,1,12,213,255,1,13,178,255,2,2,155,255,2,3,243,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,242,250,3,0,161,255,3,1,255,255,3,2,255,255,3,3,250,249,3,4,252,180,3,5,254,126,3,6,255,74,3,7,255,39,3,8,255,23,3,9,255,6,3,10,255,9,3,11,255,26,3,12,255,43,3,13,254,82,3,14,255,134,3,15,255,187,3,16,255,249,3,17,255,255,3,18,254,255,3,19,173,229,4,0,255,255,4,1,232,212,4,2,255,95,4,3,255,12,4,4,244,0,4,5,178,0,4,16,191,23,4,17,251,103,4,18,255,197,4,19,255,255,4,20,248,244,5,0,242,73,5,1,255,0,5,2,193,0,5,19,213,87,5,20,255,208,5,21,237,0,6,0,205,0,6,21,208,0],"secondary":false},{"width":8,"bonus":310,"chr":")","pixels":[1,20,205,255,2,0,255,255,2,1,213,236,2,18,197,255,2,19,255,255,2,20,242,250,2,21,206,0,3,0,247,160,3,1,254,255,3,2,255,255,3,3,250,253,3,4,190,249,3,15,183,255,3,16,245,255,3,17,255,255,3,18,255,255,3,19,233,176,3,20,255,21,3,21,237,0,4,1,172,67,4,2,254,145,4,3,255,235,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,251,245,4,17,252,156,4,18,254,52,4,19,255,0,4,20,161,0,5,4,240,69,5,5,255,119,5,6,255,172,5,7,254,210,5,8,254,228,5,9,255,245,5,10,254,249,5,11,255,231,5,12,254,215,5,13,254,183,5,14,255,127,5,15,255,73,5,16,255,10,5,17,241,0,5,18,154,0,6,7,172,0,6,8,210,0,6,9,228,0,6,10,245,0,6,11,248,0,6,12,231,0,6,13,214,0,6,14,182,0],"secondary":false},{"width":9,"bonus":130,"chr":"_","pixels":[0,18,155,255,0,19,255,255,1,18,155,255,1,19,255,255,1,20,255,0,2,18,155,255,2,19,255,255,2,20,255,0,3,18,155,255,3,19,255,255,3,20,255,0,4,18,155,255,4,19,255,255,4,20,255,0,5,18,155,255,5,19,255,255,5,20,255,0,6,18,155,255,6,19,255,255,6,20,255,0,7,18,155,255,7,19,255,255,7,20,255,0,8,18,155,255,8,19,255,255,8,20,255,0],"secondary":false},{"width":7,"bonus":80,"chr":"-","pixels":[1,9,155,255,1,10,255,255,2,9,155,255,2,10,255,255,2,11,255,0,3,9,155,255,3,10,255,255,3,11,255,0,4,9,155,255,4,10,255,255,4,11,255,0,5,9,155,255,5,10,255,255,5,11,255,0,6,10,156,0,6,11,255,0],"secondary":true},{"width":12,"bonus":310,"chr":"=","pixels":[1,7,255,255,1,8,155,255,1,11,155,255,1,12,255,255,2,7,255,255,2,8,254,156,2,9,156,0,2,11,155,255,2,12,255,255,2,13,255,0,3,7,255,255,3,8,254,156,3,9,156,0,3,11,155,255,3,12,255,255,3,13,255,0,4,7,255,255,4,8,254,156,4,9,156,0,4,11,155,255,4,12,255,255,4,13,255,0,5,7,255,255,5,8,254,156,5,9,156,0,5,11,155,255,5,12,255,255,5,13,255,0,6,7,255,255,6,8,254,156,6,9,156,0,6,11,155,255,6,12,255,255,6,13,255,0,7,7,255,255,7,8,254,156,7,9,156,0,7,11,155,255,7,12,255,255,7,13,255,0,8,7,255,255,8,8,254,156,8,9,156,0,8,11,155,255,8,12,255,255,8,13,255,0,9,7,255,255,9,8,254,156,9,9,156,0,9,11,155,255,9,12,255,255,9,13,255,0,10,7,255,255,10,8,254,156,10,9,156,0,10,11,155,255,10,12,255,255,10,13,255,0,11,8,255,0,11,9,156,0,11,12,156,0,11,13,255,0],"secondary":false},{"width":8,"bonus":370,"chr":"[","pixels":[2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,255,2,11,255,255,2,12,255,255,2,13,255,255,2,14,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,255,255,2,20,255,255,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,255,3,18,255,255,3,19,255,255,3,20,255,255,3,21,255,0,4,0,254,156,4,1,255,0,4,2,255,0,4,3,255,0,4,4,255,0,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0,4,9,255,0,4,10,255,0,4,11,255,0,4,12,255,0,4,13,255,0,4,14,255,0,4,15,255,0,4,16,255,0,4,17,255,0,4,18,255,0,4,19,254,156,4,20,255,255,4,21,255,0,5,0,254,156,5,1,156,0,5,19,155,255,5,20,255,255,5,21,255,0,6,0,255,78,6,1,156,0,6,20,206,159,6,21,255,0],"secondary":false},{"width":8,"bonus":370,"chr":"]","pixels":[2,0,205,194,2,19,155,255,2,20,255,255,3,0,254,156,3,1,156,0,3,19,155,255,3,20,255,255,3,21,255,0,4,0,255,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,4,17,255,255,4,18,255,255,4,19,255,255,4,20,255,255,4,21,255,0,5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,255,255,5,17,255,255,5,18,255,255,5,19,255,255,5,20,255,255,5,21,255,0,6,0,255,0,6,1,255,0,6,2,255,0,6,3,255,0,6,4,255,0,6,5,255,0,6,6,255,0,6,7,255,0,6,8,255,0,6,9,255,0,6,10,255,0,6,11,255,0,6,12,255,0,6,13,255,0,6,14,255,0,6,15,255,0,6,16,255,0,6,17,255,0,6,18,255,0,6,19,255,0,6,20,255,0,6,21,255,0],"secondary":false},{"width":8,"bonus":360,"chr":"{","pixels":[1,9,190,255,1,10,255,255,2,9,253,255,2,10,246,228,2,11,255,167,3,1,235,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,222,237,3,10,254,103,3,11,255,255,3,12,255,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,255,3,18,239,255,4,0,255,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,254,251,4,8,254,198,4,9,255,41,4,10,206,4,4,11,195,202,4,12,255,241,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,4,17,255,255,4,18,255,255,4,19,255,255,4,20,188,149,5,0,244,248,5,1,254,46,5,2,255,1,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,250,0,5,9,198,0,5,12,154,0,5,13,241,0,5,14,255,0,5,15,255,0,5,16,255,0,5,17,255,1,5,18,255,42,5,19,254,234,5,20,255,208,6,0,237,182,6,1,237,0,6,19,181,234,6,20,253,244,6,21,208,0,7,0,240,0,7,1,169,0,7,20,166,0,7,21,242,0],"secondary":false},{"width":8,"bonus":360,"chr":"}","pixels":[1,0,167,255,1,19,166,255,1,20,241,255,2,0,254,238,2,1,184,68,2,19,233,255,2,20,238,222,2,21,242,0,3,0,255,255,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,249,255,3,8,199,255,3,11,157,255,3,12,241,255,3,13,255,255,3,14,255,255,3,15,255,255,3,16,255,255,3,17,255,255,3,18,255,255,3,19,255,255,3,20,243,114,3,21,207,0,4,0,176,179,4,1,255,235,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,245,215,4,11,255,255,4,12,255,255,4,13,255,255,4,14,255,255,4,15,255,255,4,16,255,255,4,17,255,255,4,18,255,239,4,19,255,137,4,20,255,1,5,2,235,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,8,5,8,255,83,5,9,254,252,5,10,249,226,5,11,202,208,5,12,255,20,5,13,255,0,5,14,255,0,5,15,255,0,5,16,255,0,5,17,255,0,5,18,255,0,5,19,239,0,6,9,210,230,6,10,255,255,6,11,226,39,6,12,165,0,7,10,222,147,7,11,255,3],"secondary":false},{"width":7,"bonus":100,"chr":":","pixels":[2,5,160,255,2,6,245,255,2,14,155,255,2,15,245,255,2,16,157,255,3,5,245,255,3,6,255,255,3,7,254,243,3,14,243,255,3,15,255,255,3,16,254,246,3,17,157,0,4,6,253,205,4,7,255,113,4,8,242,0,4,15,252,206,4,16,255,117,4,17,246,0,5,7,203,0,5,16,204,0],"secondary":true},{"width":7,"bonus":125,"chr":";","pixels":[1,19,196,255,2,5,160,255,2,6,245,255,2,15,231,255,2,16,255,255,2,17,255,255,2,18,255,255,2,19,237,234,2,20,196,0,3,5,245,255,3,6,255,255,3,7,254,243,3,15,255,255,3,16,255,255,3,17,255,193,3,18,255,85,3,19,255,3,3,20,217,0,4,6,253,205,4,7,255,113,4,8,242,0,4,16,255,38,4,17,255,0,4,18,193,0,5,7,203,0],"secondary":true},{"width":11,"bonus":165,"chr":"\\"","pixels":[3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,247,255,4,1,235,255,4,2,254,213,4,3,255,189,4,4,255,165,4,5,255,142,4,6,255,119,4,7,247,0,5,2,235,0,5,3,212,0,5,4,189,0,5,5,165,0,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,8,1,199,255,8,2,254,177,8,3,255,153,8,4,255,129,8,5,255,106,8,6,255,83,8,7,255,0,9,2,199,0,9,3,176,0,9,4,153,0],"secondary":true},{"width":7,"bonus":85,"chr":"\'","pixels":[3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,247,255,4,1,235,255,4,2,254,213,4,3,255,189,4,4,255,165,4,5,255,142,4,6,255,119,4,7,247,0,5,2,235,0,5,3,212,0,5,4,189,0,5,5,165,0],"secondary":true},{"width":12,"bonus":235,"chr":"<","pixels":[1,10,239,255,2,9,249,255,2,10,255,255,2,11,246,119,3,8,157,255,3,9,231,251,3,10,252,178,3,11,254,227,4,8,251,255,4,9,199,141,4,10,233,63,4,11,255,255,4,12,237,99,5,7,165,255,5,8,234,252,5,9,252,8,5,11,214,241,5,12,255,207,6,7,253,255,6,8,205,142,6,9,231,0,6,12,255,255,6,13,220,80,7,6,173,255,7,7,237,251,7,8,253,10,7,12,238,246,7,13,255,185,8,6,253,255,8,7,211,144,8,8,233,0,8,13,255,255,8,14,197,59,9,5,181,255,9,6,239,251,9,7,254,12,9,13,251,252,9,14,254,162,10,5,255,255,10,6,216,145,10,7,236,0,10,13,167,243,10,14,254,251,10,15,171,40,11,6,255,0,11,14,159,0,11,15,250,0],"secondary":false},{"width":12,"bonus":230,"chr":">","pixels":[1,5,255,255,1,13,159,255,1,14,249,255,2,5,198,233,2,6,254,237,2,13,247,255,2,14,219,188,2,15,250,0,3,6,254,255,3,7,245,123,3,13,255,255,3,14,249,46,3,15,162,0,4,6,189,234,4,7,255,233,4,12,229,255,4,13,219,216,4,14,255,0,5,7,254,254,5,8,242,119,5,12,255,255,5,13,236,75,5,14,185,0,6,7,180,234,6,8,254,231,6,11,201,255,6,12,224,236,6,13,255,0,7,8,254,252,7,9,241,115,7,11,255,255,7,12,221,106,7,13,207,0,8,8,171,234,8,9,255,227,8,10,208,213,8,11,232,248,8,12,255,4,9,9,253,251,9,10,255,255,9,11,210,139,9,12,226,0,10,9,162,235,10,10,254,240,10,11,255,13,11,11,240,0],"secondary":false},{"width":9,"bonus":250,"chr":"\\\\","pixels":[1,0,176,253,2,0,255,255,2,1,255,255,2,2,255,255,2,3,232,250,2,4,161,255,3,0,225,36,3,1,255,99,3,2,255,167,3,3,255,233,3,4,255,255,3,5,255,255,3,6,255,255,3,7,219,251,4,3,167,2,4,4,236,49,4,5,255,112,4,6,254,180,4,7,254,243,4,8,255,255,4,9,255,255,4,10,252,254,4,11,204,251,5,7,181,6,5,8,244,60,5,9,255,125,5,10,255,193,5,11,255,249,5,12,255,255,5,13,255,255,5,14,248,252,5,15,189,252,6,11,195,13,6,12,250,72,6,13,255,139,6,14,254,207,6,15,254,255,6,16,255,255,6,17,255,255,6,18,241,252,6,19,173,255,7,15,209,23,7,16,254,85,7,17,255,152,7,18,255,219,7,19,255,255,7,20,255,255,8,19,223,34,8,20,255,98,8,21,255,0],"secondary":false},{"width":6,"bonus":55,"chr":".","pixels":[2,14,155,255,2,15,245,255,2,16,157,255,3,14,243,255,3,15,255,255,3,16,254,246,3,17,157,0,4,15,252,206,4,16,255,117,4,17,246,0,5,16,204,0],"secondary":true},{"width":6,"bonus":80,"chr":",","pixels":[1,17,185,255,1,18,239,255,1,19,255,255,2,15,255,255,2,16,255,255,2,17,255,255,2,18,243,224,2,19,246,102,2,20,255,0,3,15,237,255,3,16,254,162,3,17,255,65,3,18,255,0,3,19,213,0,4,16,237,0,4,17,162,0],"secondary":true},{"width":12,"bonus":325,"chr":"|","pixels":[5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,255,5,4,255,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,255,5,9,255,255,5,10,255,255,5,11,255,255,5,12,255,255,5,13,255,255,5,14,255,255,5,15,255,255,5,16,255,255,5,17,255,255,5,18,255,255,5,19,255,255,5,20,255,255,6,0,255,255,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,255,6,13,255,255,6,14,255,255,6,15,255,255,6,16,255,255,6,17,255,255,6,18,255,255,6,19,255,255,6,20,255,255,6,21,255,0,7,0,255,0,7,1,255,0,7,2,255,0,7,3,255,0,7,4,255,0,7,5,255,0,7,6,255,0,7,7,255,0,7,8,255,0,7,9,255,0,7,10,255,0,7,11,255,0,7,12,255,0,7,13,255,0,7,14,255,0,7,15,255,0,7,16,255,0,7,17,255,0,7,18,255,0,7,19,255,0,7,20,255,0,7,21,255,0],"secondary":false}],"width":20,"spacewidth":6,"shadow":true,"height":22,"basey":16}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_517563__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_517563__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_517563__("./src/chatbox/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/ocr/index.js":
/*!**********************************************!*\
  !*** ../node_modules/alt1/dist/ocr/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ocr/index.ts":
/*!**************************!*\
  !*** ./src/ocr/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_728__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateFont = exports.loadFontImage = exports.readChar = exports.readSmallCapsBackwards = exports.readLine = exports.getChatColor = exports.getChatColorMono = exports.findReadLine = exports.findChar = exports.decompose3col = exports.decomposeblack = exports.decompose2col = exports.canblend = exports.unblendTrans = exports.unblendKnownBg = exports.unblendBlackBackground = exports.debugFont = exports.debugout = exports.debug = void 0;
const base_1 = __nested_webpack_require_728__(/*! alt1/base */ "alt1/base");
exports.debug = {
    printcharscores: false,
    trackread: false
};
exports.debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new base_1.ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
exports.debugFont = debugFont;
function unblendBlackBackground(img, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
        rimg.data[i + 0] = col[0] * 255;
        rimg.data[i + 1] = rimg.data[i + 0];
        rimg.data[i + 2] = rimg.data[i + 0];
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendBlackBackground = unblendBlackBackground;
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new base_1.ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendKnownBg = unblendKnownBg;
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendTrans = unblendTrans;
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param rm resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the portion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(0, -r, -g, -b, r - 255, g - 255, b - 255);
}
exports.canblend = canblend;
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
exports.decompose2col = decompose2col;
/**
 * decomposes a pixel in a given color component and black and returns what proportion of the second color it contains
 * this is not as formal as decompose 2/3 and only give a "good enough" number
 */
function decomposeblack(rp, gp, bp, r1, g1, b1) {
    var dr = Math.abs(rp - r1);
    var dg = Math.abs(gp - g1);
    var db = Math.abs(bp - b1);
    var maxdif = Math.max(dr, dg, db);
    return [1 - maxdif / 255];
}
exports.decomposeblack = decomposeblack;
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
exports.decompose3col = decompose3col;
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
exports.findChar = findChar;
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        //TODO use getChatColor() instead for non-mono?
        var sorted = getChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { debugArea: { x, y, w, h }, text: "", fragments: [] };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
exports.findReadLine = findReadLine;
function getChatColorMono(buf, rect, colors) {
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return colormap;
    }
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap.sort((a, b) => b.score - a.score);
}
exports.getChatColorMono = getChatColorMono;
function unblend(r, g, b, R, G, B) {
    var m = Math.sqrt(r * r + g * g + b * b);
    var n = Math.sqrt(R * R + G * G + B * B);
    var x = (r * R + g * G + b * B) / n;
    var y = Math.sqrt(Math.max(0, m * m - x * x));
    var r1 = Math.max(0, (63.75 - y) * 4);
    var r2 = x / n * 255;
    if (r2 > 255) //brighter than refcol
     {
        r1 = Math.max(0, r1 - r2 + 255);
        r2 = 255;
    }
    return [r1, r2];
}
function getChatColor(buf, rect, colors) {
    var bestscore = -1.0;
    var best = null;
    var b2 = 0.0;
    var data = buf.data;
    for (let col of colors) {
        var score = 0.0;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                if (x < 0 || x + 1 >= buf.width) {
                    continue;
                }
                if (y < 0 || y + 1 >= buf.width) {
                    continue;
                }
                let i1 = buf.pixelOffset(x, y);
                let i2 = buf.pixelOffset(x + 1, y + 1);
                var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                //TODO this is from c# can simplify a bit
                var s = (pixel1[0] / 255 * pixel1[1] / 255) * (pixel2[0] / 255 * (255.0 - pixel2[1]) / 255);
                score += s;
            }
        }
        if (score > bestscore) {
            b2 = bestscore;
            bestscore = score;
            best = col;
        }
        else if (score > b2) {
            b2 = score;
        }
    }
    //Console.WriteLine("color: " + bestcol + " - " + (bestscore - b2));
    //bestscore /= rect.width * rect.height;
    return best;
}
exports.getChatColor = getChatColor;
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (sx, sy, backward) {
        var w = Math.floor(font.width * 1.5);
        if (backward) {
            sx -= w;
        }
        sy -= font.basey;
        return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
    };
    var fragments = [];
    var x1 = x;
    var x2 = x;
    var maxspaces = (typeof font.maxspaces == "number" ? font.maxspaces : 1);
    let fragtext = "";
    let fraghadprimary = false;
    var lastcol = null;
    let addfrag = (forward) => {
        if (!fragtext) {
            return;
        }
        let frag = {
            text: fragtext,
            color: lastcol,
            index: 0,
            xstart: x + (forward ? fragstartdx : fragenddx),
            xend: x + (forward ? fragenddx : fragstartdx)
        };
        if (forward) {
            fragments.push(frag);
        }
        else {
            fragments.unshift(frag);
        }
        fragtext = "";
        fragstartdx = dx;
        fraghadprimary = false;
    };
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var fragstartdx = dx;
        var fragenddx = dx;
        var triedspaces = 0;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (col == null || chr == null) {
                if (triedspaces < maxspaces) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedspaces++;
                    continue;
                }
                if (multicol && !triedrecol && fraghadprimary) {
                    dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                    triedspaces = 0;
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                    addfrag(dirforward);
                }
                var spaces = "";
                for (var a = 0; a < triedspaces; a++) {
                    spaces += " ";
                }
                if (dirforward) {
                    fragtext += spaces + chr.chr;
                }
                else {
                    fragtext = chr.chr + spaces + fragtext;
                }
                if (!chr.basechar.secondary) {
                    fraghadprimary = true;
                }
                triedspaces = 0;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
                fragenddx = dx;
                lastcol = col;
            }
        }
        if (lastcol && fraghadprimary) {
            addfrag(dirforward);
        }
    }
    fragments.forEach((f, i) => f.index = i);
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: fragments.map(f => f.text).join(""),
        fragments
    };
}
exports.readLine = readLine;
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : getChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
}
exports.readSmallCapsBackwards = readSmallCapsBackwards;
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (exports.debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!exports.debugout[name]) {
            exports.debugout[name] = [];
        }
        debugobj = exports.debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    charloop: for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        const scoreobj = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (exports.debug.trackread) {
            debugimg = new base_1.ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scoreobj.score += penalty;
            // Short circuit the loop as soon as the penalty threshold (400) is reached
            if (!debugobj && scoreobj.score > 400) {
                continue charloop;
            }
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scoreobj.sizescore = scoreobj.score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scoreobj.sizescore, rawscore: scoreobj.score, img: debugimg });
        }
        scores.push(scoreobj);
    }
    if (exports.debug.printcharscores) {
        scores.sort((a, b) => a.sizescore - b.sizescore);
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    let winchr = null;
    for (const chrscore of scores) {
        if (!winchr || (chrscore && chrscore.sizescore < winchr.sizescore))
            winchr = chrscore;
    }
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
exports.readChar = readChar;
function loadFontImage(img, meta) {
    var bg = null;
    var pxheight = img.height - 1;
    if (meta.unblendmode == "removebg") {
        pxheight /= 2;
    }
    var inimg = img.clone({ x: 0, y: 0, width: img.width, height: pxheight });
    var outimg;
    if (meta.unblendmode == "removebg") {
        bg = img.clone({ x: 0, y: pxheight + 1, width: img.width, height: pxheight });
        outimg = unblendKnownBg(inimg, bg, meta.shadow, meta.color[0], meta.color[1], meta.color[2]);
    }
    else if (meta.unblendmode == "raw") {
        outimg = unblendTrans(inimg, meta.shadow, meta.color[0], meta.color[1], meta.color[2]);
    }
    else if (meta.unblendmode == "blackbg") {
        outimg = unblendBlackBackground(inimg, meta.color[0], meta.color[1], meta.color[2]);
    }
    else {
        throw new Error("no unblend mode");
    }
    var unblended = new base_1.ImageData(img.width, pxheight + 1);
    outimg.copyTo(unblended, 0, 0, outimg.width, outimg.height, 0, 0);
    img.copyTo(unblended, 0, pxheight, img.width, 1, 0, pxheight);
    return generateFont(unblended, meta.chars, meta.seconds, meta.bonus || {}, meta.basey, meta.spacewidth, meta.treshold, meta.shadow);
}
exports.loadFontImage = loadFontImage;
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more likely to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generateFont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
    }
    return font;
}
exports.generateFont = generateFont;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_27782__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27782__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_27782__("./src/ocr/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: #0e0e12;
  color: #f0f0f0;
}

.container {
  max-width: 700px;
  padding: 20px;
  background: #1e1e28;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
}

h1 {
  text-align: center;
  color: #ffcc00;
  margin-bottom: 30px;
}

.loot-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.loot-table th,
.loot-table td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid #333;
}

.loot-table th {
  background: #2a2a3b;
  color: #ffcc00;
}

.loot-table tr:hover {
  background-color: #2c2f40;
}

.progress-container {
  background: #2a2a3b;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  position: relative;
}

label {
  display: block;
  font-size: 0.95em;
  margin-bottom: 8px;
  color: #cccccc;
}

progress {
  width: 100%;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
}

progress::-webkit-progress-bar {
  background-color: #3a3a4d;
  border-radius: 10px;
}

progress::-webkit-progress-value {
  background-color: #00c853;
  border-radius: 10px;
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 8px;
  color: #fff;
  font-weight: bold;
  cursor: help;
}

.tooltip-wrapper:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.tooltip {
  visibility: hidden;
  opacity: 0;
  width: 280px;
  background-color: #333;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 12px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s;
  font-size: 0.85em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.tooltip ul {
  padding-left: 16px;
  margin: 6px 0 0 0;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border-width: 6px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.progress-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.button-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.button-group button {
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.button-group button.green {
  background-color: #a5d6a7;
}
.button-group button.red {
  background-color: #d6a5a5;
}
.button-group button.blue {
  background-color: #a5bed6;
}

.button-group svg {
  width: 16px;
  height: 16px;
  fill: #333;
}

button {
  padding: 10px 18px;
  font-size: 14px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

button:hover {
  background-color: #666;
}

button.green {
  background-color: #28a745;
}

button.green:hover {
  background-color: #218838;
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  width: 300px;
  color: black;
  text-align: center;
  border-radius: 8px;
  margin: 2px solid black;
}
.modal-content button {
  margin: 10px;
}

/* Table */

.tab-container {
  margin: 5px 0;
}

.tab-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 3px;
  cursor: pointer;
  border: none;
  background-color: #eee;
  border-radius: 6px;
  margin-right: 10px;
  font-family: sans-serif;
}

.tab-button img {
  width: 16px;
  height: 16px;
}

.tab-buttons button {
  padding: 8px 16px;
  border: none;
  color: black;
  border-bottom: 3px solid transparent;
  background: #ffffff;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s ease;
}

.tab-buttons button.active {
  border-color: #007bff;
  background: #0460ff;
}

.dropTable {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.dropTable th,
.dropTable td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.table-wrapper {
  max-width: 400px;
  overflow-x: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  scrollbar-width: thin;
  scrollbar-color: #888 #f0f0f0;
}

.table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: #f0f0f0;
}

.dropTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  min-width: 300px;
}

.dropTable th,
.dropTable td {
  padding: 4px 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.dev-msg small {
  font-size: 10px;
  color: #888;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/contrib/has-cors.js":
/*!**********************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/contrib/has-cors.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCORS: () => (/* binding */ hasCORS)
/* harmony export */ });
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/contrib/parseqs.js":
/*!*********************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/contrib/parseqs.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/contrib/parseuri.js":
/*!**********************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/contrib/parseuri.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/globals.js":
/*!*************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/globals.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCookieJar: () => (/* binding */ createCookieJar),
/* harmony export */   defaultBinaryType: () => (/* binding */ defaultBinaryType),
/* harmony export */   globalThisShim: () => (/* binding */ globalThisShim),
/* harmony export */   nextTick: () => (/* binding */ nextTick)
/* harmony export */ });
const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() { }


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fetch: () => (/* reexport safe */ _transports_polling_fetch_js__WEBPACK_IMPORTED_MODULE_6__.Fetch),
/* harmony export */   NodeWebSocket: () => (/* reexport safe */ _transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__.WS),
/* harmony export */   NodeXHR: () => (/* reexport safe */ _transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__.XHR),
/* harmony export */   Socket: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket),
/* harmony export */   SocketWithUpgrade: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.SocketWithUpgrade),
/* harmony export */   SocketWithoutUpgrade: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.SocketWithoutUpgrade),
/* harmony export */   Transport: () => (/* reexport safe */ _transport_js__WEBPACK_IMPORTED_MODULE_1__.Transport),
/* harmony export */   TransportError: () => (/* reexport safe */ _transport_js__WEBPACK_IMPORTED_MODULE_1__.TransportError),
/* harmony export */   WebSocket: () => (/* reexport safe */ _transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__.WS),
/* harmony export */   WebTransport: () => (/* reexport safe */ _transports_webtransport_js__WEBPACK_IMPORTED_MODULE_9__.WT),
/* harmony export */   XHR: () => (/* reexport safe */ _transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__.XHR),
/* harmony export */   installTimerFunctions: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.installTimerFunctions),
/* harmony export */   nextTick: () => (/* reexport safe */ _globals_node_js__WEBPACK_IMPORTED_MODULE_5__.nextTick),
/* harmony export */   parse: () => (/* reexport safe */ _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__.parse),
/* harmony export */   protocol: () => (/* binding */ protocol),
/* harmony export */   transports: () => (/* reexport safe */ _transports_index_js__WEBPACK_IMPORTED_MODULE_2__.transports)
/* harmony export */ });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ "../node_modules/engine.io-client/build/esm/socket.js");
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.js */ "../node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */ "../node_modules/engine.io-client/build/esm/transports/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/parseuri.js */ "../node_modules/engine.io-client/build/esm/contrib/parseuri.js");
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");
/* harmony import */ var _transports_polling_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transports/polling-fetch.js */ "../node_modules/engine.io-client/build/esm/transports/polling-fetch.js");
/* harmony import */ var _transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/polling-xhr.js */ "../node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
/* harmony import */ var _transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transports/websocket.js */ "../node_modules/engine.io-client/build/esm/transports/websocket.js");
/* harmony import */ var _transports_webtransport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transports/webtransport.js */ "../node_modules/engine.io-client/build/esm/transports/webtransport.js");



const protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket.protocol;













/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/socket.js":
/*!************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/socket.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Socket: () => (/* binding */ Socket),
/* harmony export */   SocketWithUpgrade: () => (/* binding */ SocketWithUpgrade),
/* harmony export */   SocketWithoutUpgrade: () => (/* binding */ SocketWithoutUpgrade)
/* harmony export */ });
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports/index.js */ "../node_modules/engine.io-client/build/esm/transports/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrib/parseqs.js */ "../node_modules/engine.io-client/build/esm/contrib/parseqs.js");
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseuri.js */ "../node_modules/engine.io-client/build/esm/contrib/parseuri.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ "../node_modules/engine.io-parser/build/esm/index.js");
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");







const withEventListeners = typeof addEventListener === "function" &&
    typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", () => {
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
    }, false);
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
class SocketWithoutUpgrade extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts) {
        super();
        this.binaryType = _globals_node_js__WEBPACK_IMPORTED_MODULE_6__.defaultBinaryType;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(uri);
            opts.hostname = parsedUri.host;
            opts.secure =
                parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query)
                opts.query = parsedUri.query;
        }
        else if (opts.host) {
            opts.hostname = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(opts.host).host;
        }
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.installTimerFunctions)(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t) => {
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__.decode)(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_6__.createCookieJar)();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade &&
            SocketWithoutUpgrade.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
            ? "websocket"
            : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this._onDrain.bind(this))
            .on("packet", this._onPacket.bind(this))
            .on("error", this._onError.bind(this))
            .on("close", (reason) => this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess =
            "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.byteLength)(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_6__.nextTick)(() => {
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports &&
            this.transports.length > 1 &&
            this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor() {
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for (let i = 0; i < this._upgrades.length; i++) {
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    SocketWithoutUpgrade.priorWebsocketSuccess =
                        "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}) {
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports ||
            (o.transports && typeof o.transports[0] === "string")) {
            o.transports = (o.transports || ["polling", "websocket", "webtransport"])
                .map((transportName) => _transports_index_js__WEBPACK_IMPORTED_MODULE_0__.transports[transportName])
                .filter((t) => !!t);
        }
        super(uri, o);
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transport.js":
/*!***************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transport.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transport: () => (/* binding */ Transport),
/* harmony export */   TransportError: () => (/* binding */ TransportError)
/* harmony export */ });
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-parser */ "../node_modules/engine.io-parser/build/esm/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseqs.js */ "../node_modules/engine.io-client/build/esm/contrib/parseqs.js");




class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_0__.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__.encode)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/index.js":
/*!**********************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transports: () => (/* binding */ transports)
/* harmony export */ });
/* harmony import */ var _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling-xhr.node.js */ "../node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
/* harmony import */ var _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.node.js */ "../node_modules/engine.io-client/build/esm/transports/websocket.js");
/* harmony import */ var _webtransport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webtransport.js */ "../node_modules/engine.io-client/build/esm/transports/webtransport.js");



const transports = {
    websocket: _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__.WS,
    webtransport: _webtransport_js__WEBPACK_IMPORTED_MODULE_2__.WT,
    polling: _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__.XHR,
};


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/polling-fetch.js":
/*!******************************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/polling-fetch.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fetch: () => (/* binding */ Fetch)
/* harmony export */ });
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */ "../node_modules/engine.io-client/build/esm/transports/polling.js");

/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */
class Fetch extends _polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling {
    doPoll() {
        this._fetch()
            .then((res) => {
            if (!res.ok) {
                return this.onError("fetch read error", res.status, res);
            }
            res.text().then((data) => this.onData(data));
        })
            .catch((err) => {
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data)
            .then((res) => {
            if (!res.ok) {
                return this.onError("fetch write error", res.status, res);
            }
            callback();
        })
            .catch((err) => {
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
        }
        (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit",
        }).then((res) => {
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/polling-xhr.js":
/*!****************************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/polling-xhr.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseXHR: () => (/* binding */ BaseXHR),
/* harmony export */   Request: () => (/* binding */ Request),
/* harmony export */   XHR: () => (/* binding */ XHR)
/* harmony export */ });
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */ "../node_modules/engine.io-client/build/esm/transports/polling.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");
/* harmony import */ var _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contrib/has-cors.js */ "../node_modules/engine.io-client/build/esm/contrib/has-cors.js");





function empty() { }
class BaseXHR extends _polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(createRequest, uri, opts) {
        super();
        this.createRequest = createRequest;
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
        var _a;
        const opts = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = (this._xhr = this.createRequest(opts));
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this._opts.extraHeaders) {
                        if (this._opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this._method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
                    // @ts-ignore
                    xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this._onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this._data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this._xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this._index];
        }
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}
const hasXHR2 = (function () {
    const xhr = newRequest({
        xdomain: false,
    });
    return xhr && xhr.responseType !== null;
})();
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
class XHR extends BaseXHR {
    constructor(opts) {
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__.hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/polling.js":
/*!************************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/polling.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polling: () => (/* binding */ Polling)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ "../node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */ "../node_modules/engine.io-parser/build/esm/index.js");



class Polling extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
    constructor() {
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            }
            else {
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.encodePayload)(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.randomString)();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/websocket.js":
/*!**************************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/websocket.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWS: () => (/* binding */ BaseWS),
/* harmony export */   WS: () => (/* binding */ WS)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ "../node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "../node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */ "../node_modules/engine.io-parser/build/esm/index.js");
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");




// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class BaseWS extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.encodePacket)(packet, this.supportsBinary, (data) => {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_3__.nextTick)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => { };
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.randomString)();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim.WebSocket || _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim.MozWebSocket;
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative
            ? protocols
                ? new WebSocketCtor(uri, protocols)
                : new WebSocketCtor(uri)
            : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/transports/webtransport.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/transports/webtransport.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WT: () => (/* binding */ WT)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ "../node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */ "../node_modules/engine.io-parser/build/esm/index.js");



/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */
class WT extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed
            .then(() => {
            this.onClose();
        })
            .catch((err) => {
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((stream) => {
                const decoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = () => {
                    reader
                        .read()
                        .then(({ done, value }) => {
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    })
                        .catch((err) => {
                    });
                };
                read();
                const packet = { type: "open" };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(packet).then(() => this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(() => {
                if (lastPacket) {
                    (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}


/***/ }),

/***/ "../node_modules/engine.io-client/build/esm/util.js":
/*!**********************************************************!*\
  !*** ../node_modules/engine.io-client/build/esm/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   byteLength: () => (/* binding */ byteLength),
/* harmony export */   installTimerFunctions: () => (/* binding */ installTimerFunctions),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   randomString: () => (/* binding */ randomString)
/* harmony export */ });
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.node.js */ "../node_modules/engine.io-client/build/esm/globals.js");

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    }
    else {
        obj.setTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
        obj.clearTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
/**
 * Generates a random 8-characters string.
 */
function randomString() {
    return (Date.now().toString(36).substring(3) +
        Math.random().toString(36).substring(2, 5));
}


/***/ }),

/***/ "../node_modules/engine.io-parser/build/esm/commons.js":
/*!*************************************************************!*\
  !*** ../node_modules/engine.io-parser/build/esm/commons.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_PACKET: () => (/* binding */ ERROR_PACKET),
/* harmony export */   PACKET_TYPES: () => (/* binding */ PACKET_TYPES),
/* harmony export */   PACKET_TYPES_REVERSE: () => (/* binding */ PACKET_TYPES_REVERSE)
/* harmony export */ });
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };



/***/ }),

/***/ "../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js":
/*!********************************************************************************!*\
  !*** ../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer) => {
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
const decode = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};


/***/ }),

/***/ "../node_modules/engine.io-parser/build/esm/decodePacket.browser.js":
/*!**************************************************************************!*\
  !*** ../node_modules/engine.io-parser/build/esm/decodePacket.browser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodePacket: () => (/* binding */ decodePacket)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ "../node_modules/engine.io-parser/build/esm/commons.js");
/* harmony import */ var _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrib/base64-arraybuffer.js */ "../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");


const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer) {
        const decoded = (0,_contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__.decode)(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};


/***/ }),

/***/ "../node_modules/engine.io-parser/build/esm/encodePacket.browser.js":
/*!**************************************************************************!*\
  !*** ../node_modules/engine.io-parser/build/esm/encodePacket.browser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodePacket: () => (/* binding */ encodePacket),
/* harmony export */   encodePacketToBinary: () => (/* binding */ encodePacketToBinary)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ "../node_modules/engine.io-parser/build/esm/commons.js");

const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer &&
        (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer &&
        (packet.data instanceof ArrayBuffer || isView(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}



/***/ }),

/***/ "../node_modules/engine.io-parser/build/esm/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/engine.io-parser/build/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPacketDecoderStream: () => (/* binding */ createPacketDecoderStream),
/* harmony export */   createPacketEncoderStream: () => (/* binding */ createPacketEncoderStream),
/* harmony export */   decodePacket: () => (/* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket),
/* harmony export */   decodePayload: () => (/* binding */ decodePayload),
/* harmony export */   encodePacket: () => (/* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket),
/* harmony export */   encodePayload: () => (/* binding */ encodePayload),
/* harmony export */   protocol: () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ "../node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ "../node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons.js */ "../node_modules/engine.io-parser/build/esm/commons.js");



const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket)(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacketToBinary)(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
                    break;
                }
            }
        },
    });
}
const protocol = 4;



/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/contrib/backo2.js":
/*!********************************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/contrib/backo2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backoff: () => (/* binding */ Backoff)
/* harmony export */ });
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};


/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fetch: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.Fetch),
/* harmony export */   Manager: () => (/* reexport safe */ _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager),
/* harmony export */   NodeWebSocket: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.NodeWebSocket),
/* harmony export */   NodeXHR: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.NodeXHR),
/* harmony export */   Socket: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket),
/* harmony export */   WebSocket: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.WebSocket),
/* harmony export */   WebTransport: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.WebTransport),
/* harmony export */   XHR: () => (/* reexport safe */ engine_io_client__WEBPACK_IMPORTED_MODULE_4__.XHR),
/* harmony export */   connect: () => (/* binding */ lookup),
/* harmony export */   "default": () => (/* binding */ lookup),
/* harmony export */   io: () => (/* binding */ lookup),
/* harmony export */   protocol: () => (/* reexport safe */ socket_io_parser__WEBPACK_IMPORTED_MODULE_3__.protocol)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "../node_modules/socket.io-client/build/esm/url.js");
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.js */ "../node_modules/socket.io-client/build/esm/manager.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ "../node_modules/socket.io-client/build/esm/socket.js");
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-parser */ "../node_modules/socket.io-parser/build/esm/index.js");
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine.io-client */ "../node_modules/engine.io-client/build/esm/index.js");



/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0,_url_js__WEBPACK_IMPORTED_MODULE_0__.url)(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager,
    Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */

/**
 * Expose constructors for standalone build.
 *
 * @public
 */




/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/manager.js":
/*!*************************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/manager.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manager: () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ "../node_modules/engine.io-client/build/esm/index.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "../node_modules/socket.io-client/build/esm/socket.js");
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-parser */ "../node_modules/socket.io-parser/build/esm/index.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on.js */ "../node_modules/socket.io-client/build/esm/on.js");
/* harmony import */ var _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/backo2.js */ "../node_modules/socket.io-client/build/esm/contrib/backo2.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");






class Manager extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__.Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.installTimerFunctions)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "ping", this.onping.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "data", this.ondata.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "close", this.onclose.bind(this)), 
        // @ts-ignore
        (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}


/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/on.js":
/*!********************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/on.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   on: () => (/* binding */ on)
/* harmony export */ });
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}


/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/socket.js":
/*!************************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/socket.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Socket: () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-parser */ "../node_modules/socket.io-parser/build/esm/index.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on.js */ "../node_modules/socket.io-client/build/esm/on.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");



/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__.Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "open", this.onopen.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "packet", this.onpacket.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "error", this.onerror.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) {
        }
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT:
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK:
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}


/***/ }),

/***/ "../node_modules/socket.io-client/build/esm/url.js":
/*!*********************************************************!*\
  !*** ../node_modules/socket.io-client/build/esm/url.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ "../node_modules/engine.io-client/build/esm/index.js");

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.parse)(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}


/***/ }),

/***/ "../node_modules/socket.io-parser/build/esm/binary.js":
/*!************************************************************!*\
  !*** ../node_modules/socket.io-parser/build/esm/binary.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deconstructPacket: () => (/* binding */ deconstructPacket),
/* harmony export */   reconstructPacket: () => (/* binding */ reconstructPacket)
/* harmony export */ });
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-binary.js */ "../node_modules/socket.io-parser/build/esm/is-binary.js");

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_0__.isBinary)(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ "../node_modules/socket.io-parser/build/esm/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/socket.io-parser/build/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decoder: () => (/* binding */ Decoder),
/* harmony export */   Encoder: () => (/* binding */ Encoder),
/* harmony export */   PacketType: () => (/* binding */ PacketType),
/* harmony export */   protocol: () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @socket.io/component-emitter */ "../node_modules/@socket.io/component-emitter/lib/esm/index.js");
/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary.js */ "../node_modules/socket.io-parser/build/esm/binary.js");
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-binary.js */ "../node_modules/socket.io-parser/build/esm/is-binary.js");



/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.hasBinary)(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.isBinary)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),

/***/ "../node_modules/socket.io-parser/build/esm/is-binary.js":
/*!***************************************************************!*\
  !*** ../node_modules/socket.io-parser/build/esm/is-binary.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBinary: () => (/* binding */ hasBinary),
/* harmony export */   isBinary: () => (/* binding */ isBinary)
/* harmony export */ });
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "../node_modules/string-similarity/src/index.js":
/*!******************************************************!*\
  !*** ../node_modules/string-similarity/src/index.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {
	compareTwoStrings:compareTwoStrings,
	findBestMatch:findBestMatch
};

function compareTwoStrings(first, second) {
	first = first.replace(/\s+/g, '')
	second = second.replace(/\s+/g, '')

	if (first === second) return 1; // identical or empty
	if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

	let firstBigrams = new Map();
	for (let i = 0; i < first.length - 1; i++) {
		const bigram = first.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram) + 1
			: 1;

		firstBigrams.set(bigram, count);
	};

	let intersectionSize = 0;
	for (let i = 0; i < second.length - 1; i++) {
		const bigram = second.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram)
			: 0;

		if (count > 0) {
			firstBigrams.set(bigram, count - 1);
			intersectionSize++;
		}
	}

	return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

function findBestMatch(mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	
	const ratings = [];
	let bestMatchIndex = 0;

	for (let i = 0; i < targetStrings.length; i++) {
		const currentTargetString = targetStrings[i];
		const currentRating = compareTwoStrings(mainString, currentTargetString)
		ratings.push({target: currentTargetString, rating: currentRating})
		if (currentRating > ratings[bestMatchIndex].rating) {
			bestMatchIndex = i
		}
	}
	
	
	const bestMatch = ratings[bestMatchIndex]
	
	return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
}

function areArgsValid(mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find( function (s) { return typeof s !== 'string'})) return false;
	return true;
}


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./icon.png":
/*!******************!*\
  !*** ./icon.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./img/Aura-noborder.data.png":
/*!************************************!*\
  !*** ./img/Aura-noborder.data.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAPFBMVEUAAAFrUh+qizeQcjRjLRLDmjmDDiiJVBAUFx9oCAYyKz1PNQ8zPjYjJS9vPRmzJSA4QERPFyovLjAYIy7OChkYAAAA7klEQVR4Xm3S2W6FMAxFUZ9jOyN0/P9/rZ2k0233QxAsmUgEmdPs6SuRdTGbU2Y+l10VVYmWyQJ3aCQKKMikJUI4grAWgi4pCbQe1LLQ5+5S43FCsc5712jWO2QLrBg5ruwmS6G7hFQBEfCyGkF0IEUAbSPhUAOgS1TRroRD7+1b9KdcISp17fMg+boj7r/krTVfIup/ZtzPPu1R9MwAbfwrAMhvGiSA/Q2I1550ZYO9U/YMUax3v3fs6y5ngkoxbydaMfiWKjQ69MQCSA7YIgIKEdF92nWfdlIESBUkB6TMoLAa+rns/+r8b4+ZzQ99MROBbEHrQgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./img/Bonfire_Boost-noborder.data.png":
/*!*********************************************!*\
  !*** ./img/Bonfire_Boost-noborder.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAFuklEQVR4Xm1VSY9cVxW+87tvHmvo6qoeqqu6hu5qd7ctmzhtkwWILCOWKFkhZRuJJQs2bIAd/4AdQrBiZxYoLHAiAgKCCAl2guMePLXbXVWu4Q33Xm51S+AITpX0nt797ve+c8537gPwlUAIAQAwIc2N9muvH9w6uLW/t9/v9Tvdfq/X393dv3Hz4ObNg+ZGS2M0UuNf3f4VLr28XF957fXb/e2BH4aYYEyQRlicArBYtSmxg6i3Pbh5cFsjL+n+P1e3v31l96ppWRBjYPCVwG74Tqvs77Uqgee+1UzeWY1qtsEwMi37yt41jUcIf4VLc18QDdbXNxY5co4dN/Kc22X3auK900ve3Sp/p+bfuV7dLnnvNvxm5AGDa6QuxdZg97I8C67LGq1tbNYbq/qGOA60LE30diP6UTv+QTv5ya3Gj3drv+jEP79R71Tin27G7634WphGanxjZW2t2b5MFkkpo7gEgTo6/BI5DpLCpfSN2P52RA44WHfJVsAqFmoF6P2MPCfWKgFDQCSihpLUcQ4PH0AAwjjRPAhj4gfh4eFDYpocyAqj+75x3YIDKlOtOrHLTPmqMEPDiII6RXUk/wyM2DJqDAkpMTePjh4GQYQxRq4fjMfDQgqFkI/RvkvLBH+sDAKhR1A1sIkBV5tVGgcxzd92MkDgMoFvuvAl4RIiHbkUL8cj1w+Rwfl4PEKUKgUKZvQMsG3IDwX6gNOoRCswt7w4utqZ1JPrJN2xxX1mfJfPPYweIWPdpFApSOloNNQ8SEmZ5QVEkGA8AhQw+rUQrLngTy+hqES5Z7NkiWxegZZdcyls8JQbMVIOAg0DGxjnEGGEMqHFCZTnOUCaHRgQYAhOTewQuEEKG4s0qvjLK7C1IoNlyymBOnpKeEllhZA9nA84QJQt/AW0NiSEIIUoAFz8JEDLFswImCHQBgJJycWE2E27NYCYFJGLChc9eYRD49dnrAumLZjPsfySwDQDEIKsKBAlRCmlycSFaZuBejBWz1O4VaaKz7hrml5CGaEuTGqNrXqdzODfqa3BMZLUBJnSsoBmoPjCXxeTqHK1yNG2YeLweQ5KDBS2jcoUEoZNZkUlEK5bBea2/KY7WTcQxWoMMQWL0DI0HcKIQH2v9BN5MlWBq1ba/K1+STFEIZaGqYoUYshrLTxJ8yozq/61so27nJdhRCRUUl3MPcYEIYwX7geAKDGcyV/eQ15lHHdC/8ZVSjOKC2RpXS5UAgXUWWsS1/dr1tTKPsXk/cdqJsTFAGGkuaQU3OBKylwoJdLffCK/9wGcyHtku1/5+pvYtIACiHCFDV7r2OMMhMaxM/zZp/DOKZnlOZKL4NyQosBKST+ItF1DCt+ommsBezHmx3N6OoFuY6e60kD2MmIu1qmefHZ8Pv/k9PzufXD3XjZ7PMyKTAKghEjCZDR8geazGVAq9gOZp3NZxDZs2inIjbNHL84ennDTZlRCZj05Lz6fhp/Btbt/mbLT9BvOtAoneZEXReG5niacz6YEAvD82ZMoDkNOmlolKfzEGaw59ZIvjv75w+//brNd3/T4nX88NrlRd1Tkzk+Gx4rD3dhqc/G3qRi73tOTI80DdSilaoHpGqTjItsksc+mGTgvRBixX/3++L1v9aN0+sdp+vmpvJYAIzBD23x4OgzO8keP57+dFtNcno3nmgdrOkZxYNPxXEAGl8vGeYbP8uL4Zf6H+5PEZeMs/+uzOU7zj74Yfvwkn8yEwZSYZKVMffgiO0fAY3g4ywEABEJQCPl8ks1Tsd/gCJN/jeSD4+EsKyjDz0aAYZRLdZIJhFBagI++GJ+cp1v1kBdpWojRXGYYXjhMgf98gRCEiUVdTpdqta1up9NcXUpCzyTdJevautMsm6bBquVSa31VL1ZqNd+iHieXe///Nw1cXBhj1aXaZqfbabf2Br2dfm9v0L2ys7O9PdDP9SpYxELOq/FvLckunazIg4oAAAAASUVORK5CYII=")

/***/ }),

/***/ "./img/Darkness-noborder.data.png":
/*!****************************************!*\
  !*** ./img/Darkness-noborder.data.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAYAAACJOyb4AAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAKuSURBVDhPVZLvSxNxHMcPhN02N52bu92v7dx2d9va3Tl1U1s5k2VLUCFKarkgSJ/0oHyYFEYoRFAR+KQgIkF6EEH/Rf0DpRiC2Q8KAkNC6Nk7vp/9SB+8+Xw/n8/7/freHcdJoRyU7mFo4TL0yBQsZRYj+i2IfA4V5RWqyY+oJj806gYuUz0q5mP+U8ZdpKXz0IQxqOEiODHkIBo+gR5hHI56FZX0YzLOmVu4Zm5iztykmmg/i2ggj4xeQjRQoP7wfs7Yolw5vYKscglxoQIuGi4SPCPP4HT6PhnmjXe4kf5EupnZhtrZj2PmKKknPNQ6S34HC5ntlnfeeE/58fQDWHINXDxcQUo6hxF9kRa9gSoWs9ukO9YuFP8AMkYJaf0kJG8Ofq9GNaHlYSSGaX/b2m1lcoEqcUrGErikMIGCdh0i30fDZeczlp0dUtw7ioQ2gKhs0wUM3BR7ck11aM98zQzLMw7jcbo4ibK5QoNC8Aoe9n8hPRn4AaXbhipZSPYMIuhOHYGz3kwUEVNsJJUi+R81soVgjXicrV5EoqNMzergN6wOfSfFvSUoYhaqlIXs7TsCbkr29iMqW4jJNvlXh/7nCX48vtB4jRyejf7E01JdEVcvwbXuAnyeGPwera5DcJ83hmiIfTaL/M0s4xB8zLhHhwjv4MWZX6S1yh7kUBaqaMPn1uDzaFRbFzT65jwRK0ARbLys7LUYjMeVU8t1uMvB+vRvrE/v4fnEV4jBLAJuHaprEnbbGiR+uA5riPVsrrqmEHAbkMMW5ViecQQGHzOXWvDXF/ZJb2b+QPTZ6PKYEHgb+ba/yLdtoNOjE5hV1rM52wc9KfrnWY4YM/vE48qp+p8S4XvxtnZQ1+wBIu0WOtrjBGM7gc+g02M04Ab1bM76ro4kwVv52gHt/gHjl+aC7eQxQAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./img/Elder_Overload-noborder.data.png":
/*!**********************************************!*\
  !*** ./img/Elder_Overload-noborder.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAACW0lEQVR4nLXUXU/aUBgHcDKZiG5wgNoWocIUwjullNeKoDhQRkEEURkbKkSXbHFbFi+WbNkn2C73NfYV/ztQLr1ApE/y5JyepM+v5zwnNRhmjH+/C3j96QbR7AFmfefRoeaT+PsrBSnj1w/xyTWUL09hCUk6It3PcLeuYQnqhPjECnzf/sB9MoS7/UEfxC9W4Wzdgi2pcNbeUuhm8ZA3R4u/GcC4ZAIbzMJ1fI01s22xkHf4He7GFUwvHfCUunDW3y0e2ZaP4Fb7EE5v4Ol/gdm1tfjjCog1eEc/sH37E9ZQUp/GBzJNCL2vk9tljaQXj4RjhxDOPoKrnOO51UGbfqXDzRrcY6M1BKMcYdnOwtO7A3fYWxzkK7ThfX8PoTOCXdrF8uYWPBd3cKkD2BKFp0NCfQC+NQJfvwRf7cIm5mB8FcTG2R345ghsvgLLU/vD0UKcegmu2gdX7sAYy4JrDLW1gw7YUhNEKmIpEJ8fchQbWD+4AHt4TqEuzGEZvHoFZ70/6Qm3dwJHrgoSz2GFFR4PkXQZRC6BJIqwyWUwuw0w5TaY0jGdq2B26mCyFdjFIlZ9Igzr7ByIvA+SokmLkCRNUaEjRSNZkLiiPUczIKEUlja2YeBc8x0ZSe9PdkJSJa2wVASJ5emaomWUgiGZIl4YGH5OJLlHAZrjUdqZIooGidMMJjXEwc2HsOL+FKHFJUWbR3JTRJkcFQlMkaeE1Z/QdjAumt7Tvn7cl2ge1oCEVX8cz+xzNP2hMLFumJybIOHUpA8kKGN5KwyDxa7PH9m4ZsE4V14wMwP/AQrLFqu9Xs6/AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./img/Prayer_Renew_Active-noborder.data.png":
/*!***************************************************!*\
  !*** ./img/Prayer_Renew_Active-noborder.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAABZVBMVEUAAAAAAACSw+RCVWtcdpBejKubwdycxeOkzurE5Pnd8v7i9P79/v9BXnlhfZR6tNuKutxdeZRdg6IzQ1NggZ02S2NqhJxuqc1zpMVBSFx8steDstSGqsWKrsojLUKRtdApNkaTs82TvNqWyemayupLbIVOXG1SbYSn0O212vS43PS94fhacovV7v1bboNbfpvp9v/r+P8sPlVwj6xkeI9lmb9oe409U2hrncNrpclsj6hslLRum7hAQ0omMkJwp88oNEl0k693mLR5m7kbIzN7lax7pMFCW3V9qciApcOBn7mBr9GDrc5DVWeEt9uFutxETmOGv+KJvOBFZH5JU2iLsc6Nw+WOtdAfIy4tOEpPaH0tQlNSdpWYvNmavNVTfpRTfphVcISgyeVZhqkxNUmo0u6p1vIyRFgfKTg1TF6+4PXA4PU1T1fJ5/rN6PoYHirZ7/03WWk8SmA9UWdhf5jz+/9il7cKt0LjAAAAAXRSTlMAQObYZgAAARZJREFUeF5t0GVvxDAMBuA5ZTpmZuYbMzMzMzP//klrc0u68xdbfvTKkjvIArBUAfCCApdgK7UjcKG6sn3WXhR5xU4KAOiNRTY7AAkVTJZPGvZ3bjDRMOPjL97xigQtkcqj8bt/BFlfSq4/rQ1mzVSJCoUvVc4dzftNp6DnO/ksFwOnMYBf8CwZBMBMrOcCY6MGOKP9ty1qDCQO9zA4+NmNyF8qhKGzOiIGu0r+FmUMaDiukCSeh7VHTAa4OW+yXFPurd70EPVXT5wXpZqqlvN8fCpDCtNctF0rqiqh4Bx7SQrETvrEh1epaOXeXoB+4QG7ZS2g5bB7ErBgWtV6hQWO2cRAUCR9PP2BEzQNhyy7GEzU7dThB1pnInoOZsa8AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./img/Soul_Split-noborder.data.png":
/*!******************************************!*\
  !*** ./img/Soul_Split-noborder.data.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAHfklEQVQYGQWAW4xcZQGAv/8//7nMmTOzc9nZW3e3sJe2tNsL0FYqQAVSQIIWa6IlFoiPiokB3jSKiYny4JNvxvikGnkxwReUaGy5E1tCm9pqSy+73XZ2d2Y61zPnzLn9RgAAAALQAMDK0vTuk7OFxeNlpzSvhTRNQxkF6RijNCIWGQIzRSdpmqZxK2isrXauvH29ceXPwEUAQAAaQAAAAtCAWS1Uv33/9OHXJwqzB1xzjG7YYZB1GQR3MeZnyWdFRjevkS+NE8URrpnHNGzSNKLlb5z/rP7xrzr91ltADAhAG4AANOCVneoPjywc+/l8acfCem+NIB5qzyoSEkHLF8VTz2F9aQ/JPz7DKBZBZzpMfKJkgB8NRCU/M1Urzh0dxE3th4PzQAQIqdEAzlRl9tUnlp97I2d51fXgambakMlYgBaOdIVbHMe+9z6y5W0khTyB30JniXDtcTGKh8JSkk64ldnSrD68/dk3ZirzrwIOgAQo2GMnD8w8+lolP55zZC4j1dISFhV7km7Up9dvEu4oo3auYMfzOLNTBElEKDVR7OPmJjCMHHm7JlOdZtIwc/tnHnmtYLsnQSMFYs+R7UdfLzv50o3B9cyPOlKRxzXGaQR3ECWDdraBc9/DTM4VKIcRQpj0RIjl5pFmRBB3kcIjI0HKWAZRN/OsQmnX7EOvg9gjF2q7Xhj3plY6o44mS2SYJbimRz1tkklJPBihi1XUE49TacFsOeWL1gaoDNEPGCYxbRUSp23INGEUozFkb9TRc/m5lXuqSy+oxcqu4541Rifuk7dygGKQtCBJaJkjaG/h7TmIPT/NVBZRKXoEcQMDQVP3CYVJLVXEUcBIjhjLTZHqhDQLsUyXxeru47KQG5tvBA3IQvIyR6xHtFKfHBrZ3KLbqzN59OvIjqBaEOSkIEoDRlGLdnIbu7tJwaqB7SGlJEsDbMMACcOkj+eW52WcRioRQ5xcTWRS0Q99+p0GDWKK+45w8Ke/5cRLjzPnhNgFk97Ni2z99wL7jj3PoZ/8jtzKY9wRm2x214nDEGkLgixCCENkWQIYSrx48AejrXDNop0hcjZieQJr/0OIg49T2D5HFsHStgEnajmaG01+9OIpGnd9nnnzD8RzCzQl6MYt0vfPEPz7E8LVNbyuwizkSG2DonIj8fID3082yqYx/uQ+jNkljMMHGKNIJU2YtFNqjiZUcKBoU79yjWsXP+fBY89zRyiGYUDow6a22TQkjTRkdOUs2c3rdP71OcHlC0y496YqJQFloiZrZNNllOkhBpqimTJtaaQpEKmk7yes3LfI4f1L3OwlaD+kaBvkyRiGCVuJhdQOObOMX3KxnBkcq4VnuigpbfTqNTbfuIEoTWAd3EZjx2Gu7z7C6WqZqoLZasDilGJrGDPogmNJWn7Gx02LRipJO33k5dNw6Sz+2YvITkjesxnaI/zERkVpkMZCGuWpGkhN8/QZsg9Ps+3Rhyjc/1WYmGTv/ALv3U6YLBq4lmCtkzBXdlAXblBZW2f4xRluvXsGFQiqk3MwWyTOQqxUUxa51FiefvDHWkeqO9yi3emwuLCb4688w7GnDnL32qf87Te/JJ49zB1njqViionmzG2LS5dv8Mkvvsu+CcHx54+yc+8Bwo029XYbRzvIOEPHKUKqWEZJEDlKYsiyPryyg1MvHWDn1Bjd9U3+c+kOx596GnOrSSsSMEwxhindRBKv3uHJY0f54laH1kaL7VNlTp46xMryLCI2qY/WtWEo0FlklPPVl/NqanxywuQbT+0QkpQhcOF/t7h//y4OH/kyn55+B7+2k+p4mQGCy+tDrI9+zze/9TQLk1WuXrpCsSiIdcpy2WCj1aPbgZnCjPDjzVX57AMlOTum0u88Mi3KjmRsNMJrNzm0a4qlSY/mVp2b75/FPvsh9Uxwwzdwzn/E6rsfUL9ep1Yrs2/vAm7QptZoMp4zOfFYjbmSoafGB7xyzPONN5849Ot7txtZzlRSpynKdVGJZhRk5IXP398+R7s3QsoR7lceJ5aK3l/fIr55m86dDQ7sdNFhRPluH8MwiAd95LDP/nty7J3QQvW6Q+N7i0s/U0qI0FaCOCWNRlheniSO+OcHW5z7dJWxYonO6i2sexYQ0YDmH/+E53o0GxH9uxnLFQvDMBBxyKjdIsPAFAFqrSnU7buxSn0fOfSR8ZCkNoMVC4J2g3fPDTl/tUPOswmGAXKQMWxcJjU8oo0u5nSNfM7i4sVbyJHg6SN5CAZoQEcdjHoHGQSIKJOKXqhtz9Zqo0+iWgxKU/qd94byYt1HGYEWlIiTHqathfhwlYGOqc5NoMwinWETw430hat1kr6nv3bIEY4VIVabuK2uHkYZTkampEAE/UDIQh6r41NIN0ROjFJllgzHqIk48bGUSex6BFevoUVKbCUIv0nOsAkDLWpumbInhWPEqLVNRJgwjDJhaojIbAU0XCGzIOhKmRSGuup0Txyp3D73l89v1wcTD4y5leWSWVSx1kpYUiiU8KOhNlWmkSp1MjPyw1v1h3cWw+LVhtdr+G4qY6MiLB2BNIS4+3/10ZSRRlEpWQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./img/corruption.data.png":
/*!*********************************!*\
  !*** ./img/corruption.data.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAYAAACJOyb4AAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAALJSURBVDhPbY9NbxtVGIXnZ0CbOB7fmXvnTmLj2nUSt57PpE6cisSm+U7cNgp1i4AoouomFY0EXRTotn8BiQULduyQ2MMGaAUt0KRR4V881dxJoqrq4ui9955znnfG8t4R6Hcd9BkXfVahhzR62EcXxtAjFeqLk3R/Cln5PWD1t4CV19T7OaS+0kQXK+jhMfTwqOn7ZxX+GYmVQz38E2Chgi5W8Yo1PLuO5zSQ5YDg/jT9PwKjzccB0TfTqPcCPGc8zxVrpmf6GWfIx8rAZusxVNt1dKmBJybwRBPlXEC5Ldygw9aTkK0ngZEbzKFky/iemMzzpUbeH8mXWLpQPoV6dgadRIkcqNwQqWKkSnGCeW7+GTI4lhPOm3cpY5NTboAn8kXZx+liHctskePULrXw5EUTUsdA6U0j9QyuP4OIrvDx05BPMv0VIuJFpD+L1JfynEpRx4s82aI+08LS9nlUNWb3aYRbn0XpKZRum6I7Ooc79j5ueR6RrrP7LGL378hMkW7glBdyf/Qy0u+g/Lbpu+c7JmNlvyLHZ7jzT8Tad7M4yRJOnGkNkWwgkk1K6VXs7oA7/0ansnsD8y6SPiJZx4lWcaJl3HSJ/g9tw7M8N0BOXGbvecTe85i7Zp4oZu8gP2fvuRe/PXuQZU+8XJaSCW5zgf3DmP0XMfcO3i7jH8Zs/dg9Pe+/mXkte+8wxpJqGqfZ48sXMd1HH1AK+5TCa9jRNsX4JoW5HW7/0uH+UUz/+0WG0h0zs/tnv3aMn+Xs6EPs4Dql8CrdR1cMz5JeG3eixxfPUkrNdUR1ldK5TezadYrNARvfLvPgZcznj9sMR59SGL9lZnZ/8DIx/kjzBnbtmumZ/uS64VmunsWtzFNJezjVJUR1LYc3tqht3+Dh/wlfH03hLOxQmPiIQuOWmWJhh6+Opnj4X0Jte2DypXN90xfVZcppj1dJvBR5apeGQwAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var alt1_chatbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! alt1/chatbox */ "../node_modules/alt1/dist/chatbox/index.js");
/* harmony import */ var alt1_chatbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt1_chatbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var alt1_ability__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! alt1/ability */ "../node_modules/alt1/dist/ability/index.js");
/* harmony import */ var alt1_ability__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(alt1_ability__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! alt1/buffs */ "../node_modules/alt1/dist/buffs/index.js");
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(alt1_buffs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-similarity */ "../node_modules/string-similarity/src/index.js");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_similarity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "../node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.png */ "./icon.png");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};











var rdtMaster = [
    { id: 1, name: "Uncut dragonstone", img: "1.png", ge_id: 1631 },
    { id: 2, name: "Loop half of a key", img: "2.png", ge_id: 987 },
    { id: 3, name: "Tooth half of a key", img: "3.png", ge_id: 985 },
    { id: 4, name: "Huge plated rune salvage", img: "4.png", ge_id: 47316 },
    { id: 5, name: "Magic logs", img: "5.png", ge_id: 1513 },
    { id: 6, name: "Rune arrowheads", img: "6.png", ge_id: 44 },
    { id: 7, name: "Soft clay", img: "7.png", ge_id: 1761 },
    { id: 8, name: "Small bladed orikalkum salvage", img: "8.png", ge_id: 52945 },
    { id: 9, name: "Catalytic anima stone", img: "9.png", ge_id: 54019 },
    { id: 10, name: "Teak plank", img: "10.png", ge_id: 8780 },
    { id: 11, name: "Dragon bones", img: "11.png", ge_id: 536 },
    { id: 12, name: "Dragon helm", img: "12.png", ge_id: 1149 },
    { id: 13, name: "Dragon longsword", img: "13.png", ge_id: 1305 },
    { id: 14, name: "Off-hand dragon longsword", img: "14.png", ge_id: 25740 },
    { id: 15, name: "Molten glass", img: "15.png", ge_id: 1775 },
    { id: 16, name: "Runite stone spirit", img: "16.png", ge_id: 44808 },
    { id: 17, name: "Raw lobster", img: "17.png", ge_id: 377 },
    { id: 18, name: "Shield left half", img: "18.png", ge_id: 2366 },
    { id: 19, name: "Dragon spear", img: "19.png", ge_id: 1249 },
    { id: 20, name: "Yew logs", img: "20.png", ge_id: 1515 },
    { id: 21, name: "Super restore (4)", img: "21.png", ge_id: 3024 },
    { id: 22, name: "Prayer potion (4)", img: "22.png", ge_id: 2434 },
    { id: 23, name: "Raw rocktail", img: "23.png", ge_id: 15270 },
    { id: 24, name: "Mahogany plank", img: "24.png", ge_id: 8782 },
    { id: 25, name: "Magic seed", img: "25.png", ge_id: 5316 },
    { id: 26, name: "Water talisman", img: "26.png", ge_id: 1444 },
    { id: 27, name: "Battlestaff", img: "27.png", ge_id: 1391 },
    { id: 28, name: "Hardened dragon bones", img: "28.png", ge_id: 4834 },
    { id: 29, name: "Onyx bolt tips", img: "29.png", ge_id: 9185 },
    { id: 30, name: "Ciku seed", img: "30.png", ge_id: 48769 },
    { id: 31, name: "Golden dragonfruit seed", img: "31.png", ge_id: 48764 },
    { id: 32, name: "Uncut diamond", img: "32.png", ge_id: 1617 },
    { id: 33, name: "Soul rune", img: "33.png", ge_id: 566 },
    { id: 34, name: "Light animica stone spirit", img: "34.png", ge_id: 44810 },
    { id: 35, name: "Dark animica stone spirit", img: "35.png", ge_id: 44811 },
    { id: 36, name: "Primal stone spirit", img: "36.png", ge_id: 57174 },
    { id: 37, name: "Crystal key", img: "37.png", ge_id: 989 },
    { id: 38, name: "White berries", img: "38.png", ge_id: 239 },
    { id: 39, name: "Ectoplasm", img: "39.png", ge_id: 55336 },
    {
        id: 40,
        name: "Medium spiky orikalkum salvage",
        img: "40.png",
        ge_id: 51103,
    },
    {
        id: 41,
        name: "Large blunt necronium salvage",
        img: "41.png",
        ge_id: 53507,
    },
    { id: 42, name: "Wine of Saradomin", img: "42.png", ge_id: 592 },
    { id: 43, name: "Aura refresh", img: "43.png", ge_id: 0 },
    {
        id: 44,
        name: "Distraction & Diversion reset token (daily)",
        img: "44.png",
        ge_id: 0,
    },
    {
        id: 45,
        name: "Distraction & Diversion reset token (weekly)",
        img: "45.png",
        ge_id: 0,
    },
    {
        id: 46,
        name: "Distraction & Diversion reset token (monthly)",
        img: "46.png",
        ge_id: 0,
    },
    { id: 47, name: "Vecna skull", img: "47.png", ge_id: 20667 },
    { id: 48, name: "Cheese+tom batta", img: "48.png", ge_id: 2259 },
    { id: 49, name: "Blurberry Special", img: "49.png", ge_id: 2064 },
    { id: 50, name: "Hazelmere's signet ring", img: "hsr.png", ge_id: 39814 },
];
var method;
if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
}
else {
    var addappurl = "alt1://addapp/".concat(new URL("./appconfig.json", document.location.href).href);
    document.querySelector("body").innerHTML = "Alt1 not detected, click <a href='".concat(addappurl, "'>here</a> to add this app to Alt1");
}
var currData = {
    elderOverload: false,
    darkness: false,
    aura: false,
    bonfireBoost: false,
    prayerRenewActive: false,
    soulSplit: false,
    corruption: false,
};
// ################# Chatbox reader area #################
var chatBoxColor = alt1__WEBPACK_IMPORTED_MODULE_6__.mixColor(105, 105, 105);
var reader = new (alt1_chatbox__WEBPACK_IMPORTED_MODULE_7___default())();
reader.readargs = {
    colors: [
        alt1__WEBPACK_IMPORTED_MODULE_6__.mixColor(255, 111, 0), // LOTD
        alt1__WEBPACK_IMPORTED_MODULE_6__.mixColor(0, 255, 255), // seren spirit
    ],
};
var findChat = setInterval(function () {
    if (!window.alt1) {
        clearInterval(findChat);
        return;
    }
    if (reader.pos === null)
        reader.find();
    else {
        clearInterval(findChat);
        alt1.overLayRect(chatBoxColor, reader.pos.mainbox.rect.x, reader.pos.mainbox.rect.y, reader.pos.mainbox.rect.width, reader.pos.mainbox.rect.height, 2000, 3);
        loadStorageData();
        loadEvents();
        connectWebSocket();
        setInterval(function () {
            readChat();
        }, 600);
    }
}, 1000);
function addItem(time, itemName, quantity, method) {
    if (time.length < 9) {
        time =
            new Date().toISOString().replace(/[:]/g, "-").split("T")[0] + " " + time;
    }
    var names = rdtMaster.map(function (item) { return item.name; });
    var match = string_similarity__WEBPACK_IMPORTED_MODULE_0___default().findBestMatch(itemName, names);
    var bestMatch = match.bestMatch;
    if (bestMatch.rating > 0.5) {
        var foundItem = rdtMaster.find(function (item) { return item.name === bestMatch.target; });
        if (!foundItem)
            return;
        var id_1 = foundItem.id;
        var dropData = loadDropData();
        var master = rdtMaster.find(function (item) { return item.id === id_1; });
        if (!master)
            return;
        console.log("Item: ".concat(itemName, " found in master data as ").concat(master.name));
        if (!dropData.log)
            dropData.log = [];
        dropData.log.push({ time: time, itemName: itemName, quantity: quantity, method: method });
        var rightNm = master.name;
        var target = method === "Slayer" ? (dropData.slayer || (dropData.slayer = {})) : (dropData.seren || (dropData.seren = {}));
        if (!target[rightNm]) {
            target[rightNm] = {
                id: master.id.toString(),
                hits: 0,
                qty: 0,
                img: master.img,
            };
        }
        target[rightNm].hits += 1;
        target[rightNm].qty += quantity;
        saveDropData(dropData);
        updateDropTable(dropData);
        pushToWS(dropData);
    }
    else {
        console.log("Item semelhante a \"".concat(itemName, "\" n\u00E3o encontrado."));
    }
}
function readChat() {
    var opts = reader.read() || [];
    for (var i = 0; i < opts.length; i++) {
        var chat = opts[i].text;
        if (chat.charAt(0) !== "[" && i > 0) {
            chat = opts[i - 1].text + " " + chat;
        }
        if (chat.trim().length > 0) {
            var match = void 0;
            if ((match = chat.match(/\[(.*?)\].*?receive:\s(\d+)\s+x\s+(.*)\./))) {
                method = "Slayer";
            }
            else if ((match = chat.match(/\[(.*?)\].*?Seren spirit gifts you:\s(\d+)\s+x\s+(.*)/))) {
                method = "Seren";
            }
            if (match) {
                var _ = match[0], time = match[1], qtyStr = match[2], itemName = match[3];
                var quantity = parseInt(qtyStr, 10);
                if (method)
                    addItem(time, itemName, quantity, method);
            }
        }
    }
}
// ################# actionbar reader area #################
var actionBarColor = alt1__WEBPACK_IMPORTED_MODULE_6__.mixColor(157, 173, 251);
var actionbar = new alt1_ability__WEBPACK_IMPORTED_MODULE_8__.ActionbarReader();
var findBar = setInterval(function () {
    if (!window.alt1) {
        clearInterval(findBar);
        return;
    }
    if (actionbar.pos === null)
        actionbar.find();
    else {
        clearInterval(findBar);
        alt1.overLayRect(actionBarColor, actionbar.pos.x, actionbar.pos.y, 400, 30, 2000, 3);
        setInterval(function () {
            readBar();
        }, 600);
    }
}, 1000);
function readBar() {
    // pushActionBar(actionbar.read());
    var data = __assign(__assign({}, actionbar.read()), { buffs: currData });
    pushActionBar(data);
}
// ################# buffs reader area #################
var buffBarColor = alt1__WEBPACK_IMPORTED_MODULE_6__.mixColor(4, 192, 0);
var buffs = new (alt1_buffs__WEBPACK_IMPORTED_MODULE_9___default())();
buffs.debuffs = false;
var buffImages = alt1__WEBPACK_IMPORTED_MODULE_6__.webpackImages({
    elderOverload: __webpack_require__(/*! ./img/Elder_Overload-noborder.data.png */ "./img/Elder_Overload-noborder.data.png"),
    darkness: __webpack_require__(/*! ./img/Darkness-noborder.data.png */ "./img/Darkness-noborder.data.png"),
    aura: __webpack_require__(/*! ./img/Aura-noborder.data.png */ "./img/Aura-noborder.data.png"),
    bonfireBoost: __webpack_require__(/*! ./img/Bonfire_Boost-noborder.data.png */ "./img/Bonfire_Boost-noborder.data.png"),
    prayerRenewActive: __webpack_require__(/*! ./img/Prayer_Renew_Active-noborder.data.png */ "./img/Prayer_Renew_Active-noborder.data.png"),
    soulSplit: __webpack_require__(/*! ./img/Soul_Split-noborder.data.png */ "./img/Soul_Split-noborder.data.png"),
    corruption: __webpack_require__(/*! ./img/corruption.data.png */ "./img/corruption.data.png"),
});
var findBuffs = setInterval(function () {
    if (!window.alt1) {
        clearInterval(findBuffs);
        return;
    }
    if (buffs.pos === null)
        buffs.find();
    else {
        clearInterval(findBuffs);
        alt1.overLayRect(buffBarColor, buffs.pos.x, buffs.pos.y, 300, 80, 2000, 2);
        setInterval(function () {
            readBuffs();
        }, 1000);
    }
}, 1000);
function readBuffs() {
    var buffsReader = buffs.read();
    var threshold = 100;
    for (var testid in buffImages) {
        var img = new alt1__WEBPACK_IMPORTED_MODULE_6__.ImgRefData(buffImages[testid]);
        var imgdata = img.toData();
        imgdata.show();
        var found = false;
        for (var _i = 0, buffsReader_1 = buffsReader; _i < buffsReader_1.length; _i++) {
            var buff = buffsReader_1[_i];
            var result = buff.countMatch(imgdata, false);
            if (result.passed > threshold) {
                found = true;
                currData[testid] = true;
                // console.log(`✅ '${testid}'`);
                break;
            }
        }
        if (!found) {
            currData[testid] = false;
            // console.log(`❌ '${testid}'`);
        }
    }
}
// ######### localStorage #########
var STORAGE_KEY = "rdtDrops";
function loadDropData() {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}
function saveDropData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function loadStorageData() {
    var data = loadDropData();
    var log = data.log, rest = __rest(data, ["log"]);
    updateDropTable(rest);
}
// ######### HTML #########
function updateDropTable(data) {
    var tbody_slayer = document.getElementById("lootTableBodySlayer");
    var tbody_seren = document.getElementById("lootTableBodySeren");
    var progress = document.getElementById("progress");
    var label = document.getElementById("progressLabel");
    tbody_slayer.innerHTML = "";
    tbody_seren.innerHTML = "";
    var totalRdtRolls = 0;
    var fillTable = function (tbody, tableData) {
        if (!tableData)
            return;
        for (var _i = 0, _a = Object.entries(tableData); _i < _a.length; _i++) {
            var _b = _a[_i], item = _b[0], _c = _b[1], hits = _c.hits, qty = _c.qty;
            var row = document.createElement("tr");
            row.innerHTML = "<td>".concat(item, "</td><td>").concat(hits, "</td><td>").concat(qty, "</td>");
            tbody.appendChild(row);
            totalRdtRolls += hits;
        }
    };
    fillTable(tbody_slayer, data.slayer);
    fillTable(tbody_seren, data.seren);
    if (progress && label) {
        progress.value = totalRdtRolls;
        label.textContent = "".concat(totalRdtRolls.toLocaleString(), " / 16,000");
    }
}
function loadEvents() {
    var _a;
    var modal = document.getElementById("confirmModal");
    document.getElementById("resetButton").addEventListener("click", function () {
        modal.style.display = "block";
    });
    document.getElementById("refreshButton").addEventListener("click", function () {
        pushToWS(loadDropData());
        loadStorageData();
    });
    document.getElementById("confirmReset").addEventListener("click", function () {
        modal.style.display = "none";
        var data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            localStorage.setItem(STORAGE_KEY + "_bkp", data);
        }
        localStorage.removeItem(STORAGE_KEY);
        loadStorageData();
        pushToWS(loadDropData());
    });
    document.getElementById("cancelReset").addEventListener("click", function () {
        modal.style.display = "none";
    });
    // data export button
    document.getElementById("exportButton").addEventListener("click", function () {
        var data = loadDropData();
        var log = data.log;
        if (!log || log.length === 0) {
            console.warn("No data to export.");
            return;
        }
        var headers = Object.keys(log[0]);
        var csvRows = [];
        csvRows.push(headers.join(","));
        log.forEach(function (entry) {
            var values = headers.map(function (header) {
                var val = entry[header];
                return "".concat(String(val).replace(/"/g, '""'));
            });
            csvRows.push(values.join(","));
        });
        var csvString = csvRows.join("\n");
        var blob = new Blob([csvString], { type: "text/csv" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        var isoString = new Date().toISOString().replace(/[:]/g, "-");
        a.download = "rdt_tracker_".concat(isoString.slice(0, 19), ".csv");
        a.click();
        URL.revokeObjectURL(url);
    });
    // data import button
    (_a = document.getElementById("importButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = ".csv";
        input.addEventListener("change", function (event) {
            var _a;
            var target = event.target;
            var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!file)
                return;
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var result = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                if (typeof result !== "string")
                    return;
                var lines = result.trim().split("\n");
                var headers = lines[0]
                    .split(",")
                    .map(function (h) { return h.trim().replace(/^"|"$/g, ""); });
                var _loop_1 = function (i) {
                    var values = lines[i]
                        .split(",")
                        .map(function (v) { return v.trim().replace(/^"|"$/g, ""); });
                    var entry = {};
                    headers.forEach(function (key, index) {
                        entry[key] = values[index];
                    });
                    var time = entry["time"];
                    var itemName = entry["itemName"];
                    var quantity = parseInt(entry["quantity"]);
                    var method_1 = entry["method"];
                    if (!time ||
                        !itemName ||
                        isNaN(quantity) ||
                        !["Slayer", "Seren"].includes(method_1)) {
                        console.warn("Linha inválida ignorada:", entry);
                        return "continue";
                    }
                    addItem(time, itemName, quantity, method_1);
                };
                for (var i = 1; i < lines.length; i++) {
                    _loop_1(i);
                }
            };
            reader.readAsText(file);
        });
        input.click();
    });
    document.querySelectorAll(".tab-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var tab = button.getAttribute("data-tab");
            document
                .querySelectorAll(".tab-btn")
                .forEach(function (btn) { return btn.classList.toggle("active", btn === button); });
            document
                .querySelectorAll(".tab-content")
                .forEach(function (content) {
                return content.classList.toggle("active", content.id === tab);
            });
        });
    });
}
// ######### Websocket #########
var socket;
var token = "meu_token_secreto";
function connectWebSocket() {
    var ws_url = "https://rdt-tracker-server.onrender.com";
    // const ws_url = "http://localhost:3000";
    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(ws_url, {
        query: { token: token },
    });
    socket.on("connect", function () {
        console.log("Conectado. Validando token...");
    });
    socket.on("disconnect", function () {
        console.log("Desconectado.");
    });
}
function pushToWS(data) {
    if (!socket || socket.disconnected) {
        connectWebSocket();
    }
    socket.emit("updateInventory", data);
}
function pushActionBar(data) {
    if (!socket || socket.disconnected) {
        connectWebSocket();
    }
    socket.emit("updateCurrentStats", data);
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});