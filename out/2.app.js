webpackJsonp([2],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./select.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./select.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n * ui-select\n * http://github.com/angular-ui/ui-select\n * Version: 0.18.1 - 2016-07-10T00:18:11.107Z\n * License: MIT\n */.ui-select-highlight{font-weight:700}.ui-select-offscreen{clip:rect(0 0 0 0)!important;width:1px!important;height:1px!important;border:0!important;margin:0!important;padding:0!important;overflow:hidden!important;position:absolute!important;outline:0!important;left:0!important;top:0!important}.ui-select-choices-row:hover{background-color:#f5f5f5}.ng-dirty.ng-invalid>a.select2-choice{border-color:#D44950}.select2-result-single{padding-left:0}.select-locked>.ui-select-match-close,.select2-locked>.select2-search-choice-close{display:none}body>.select2-container.open{z-index:9999}.ui-select-container.select2.direction-up .ui-select-match,.ui-select-container[theme=select2].direction-up .ui-select-match{border-radius:0 0 4px 4px}.ui-select-container.select2.direction-up .ui-select-dropdown,.ui-select-container[theme=select2].direction-up .ui-select-dropdown{border-radius:4px 4px 0 0;border-top-width:1px;border-top-style:solid;box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-4px}.ui-select-container.select2.direction-up .ui-select-dropdown .select2-search,.ui-select-container[theme=select2].direction-up .ui-select-dropdown .select2-search{margin-top:4px}.ui-select-container.select2.direction-up.select2-dropdown-open .ui-select-match,.ui-select-container[theme=select2].direction-up.select2-dropdown-open .ui-select-match{border-bottom-color:#5897fb}.selectize-input.selectize-focus{border-color:#007FBB!important}.selectize-control>.selectize-dropdown,.selectize-control>.selectize-input>input{width:100%}.ng-dirty.ng-invalid>div.selectize-input{border-color:#D44950}.ui-select-container[theme=selectize].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-2px}.btn-default-focus{color:#333;background-color:#EBEBEB;border-color:#ADADAD;text-decoration:none;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.ui-select-bootstrap .ui-select-toggle{position:relative}.ui-select-bootstrap .ui-select-toggle>.caret{position:absolute;height:10px;top:50%;right:10px;margin-top:-2px}.input-group>.ui-select-bootstrap.dropdown{position:static}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control{border-radius:4px 0 0 4px}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control.direction-up{border-radius:4px 0 0 4px!important}.ui-select-bootstrap>.ui-select-match>.btn{text-align:left!important}.ui-select-bootstrap>.ui-select-match>.caret{position:absolute;top:45%;right:15px}.ui-select-bootstrap>.ui-select-choices,.ui-select-bootstrap>.ui-select-no-choice{width:100%;height:auto;max-height:200px;overflow-x:hidden;margin-top:-1px}body>.ui-select-bootstrap.open{z-index:1000}.ui-select-multiple.ui-select-bootstrap{height:auto;padding:3px 3px 0}.ui-select-multiple.ui-select-bootstrap input.ui-select-search{background-color:transparent!important;border:none;outline:0;height:1.666666em;margin-bottom:3px}.ui-select-multiple.ui-select-bootstrap .ui-select-match .close{font-size:1.6em;line-height:.75}.ui-select-multiple.ui-select-bootstrap .ui-select-match-item{outline:0;margin:0 3px 3px 0}.ui-select-multiple .ui-select-match-item{position:relative}.ui-select-multiple .ui-select-match-item.dropping .ui-select-match-close{pointer-events:none}.ui-select-multiple:hover .ui-select-match-item.dropping-before:before{content:\"\";position:absolute;top:0;right:100%;height:100%;margin-right:2px;border-left:1px solid #428bca}.ui-select-multiple:hover .ui-select-match-item.dropping-after:after{content:\"\";position:absolute;top:0;left:100%;height:100%;margin-left:2px;border-right:1px solid #428bca}.ui-select-bootstrap .ui-select-choices-row>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.ui-select-bootstrap .ui-select-choices-row>a:focus,.ui-select-bootstrap .ui-select-choices-row>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.ui-select-bootstrap .ui-select-choices-row.active>a{color:#fff;text-decoration:none;outline:0;background-color:#428bca}.ui-select-bootstrap .ui-select-choices-row.active.disabled>a,.ui-select-bootstrap .ui-select-choices-row.disabled>a{color:#777;cursor:not-allowed;background-color:#fff}.ui-select-match.ng-hide-add,.ui-select-search.ng-hide-add{display:none!important}.ui-select-bootstrap.ng-dirty.ng-invalid>button.btn.ui-select-match{border-color:#D44950}.ui-select-container[theme=bootstrap].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25)}\n/*# sourceMappingURL=select.min.css.map */\n", ""]);

	// exports


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Apple on 16/8/23.
	 */
	let mainController = __webpack_require__(25);
	let mainFactory = __webpack_require__(26);
	let mainModule = angular.module('main', []).factory('mainFactory', mainFactory).controller('mainController', ["$scope", "mainFactory", mainController]);

	module.exports = mainModule;

/***/ },

/***/ 25:
/***/ function(module, exports) {

	/**
	 * Created by Apple on 16/8/22.
	 */
	function main($scope, mainFactory) {
	  $scope.main = "This is main page";
	  mainFactory.say();
	}

	module.exports = main;

/***/ },

/***/ 26:
/***/ function(module, exports) {

	/**
	 * Created by Apple on 16/8/23.
	 */
	function mainFactory() {
	    return {
	        "say": function () {
	            console.log("Main Hello World!!!");
	        }
	    };
	}

	module.exports = mainFactory;

/***/ }

});