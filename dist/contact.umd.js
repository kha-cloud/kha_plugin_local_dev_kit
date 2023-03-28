(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["contact"] = factory(require("vue"));
	else
		root["contact"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/contact.vue?vue&type=template&id=58172678&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"testoo"},[_vm._v("hello "+_vm._s(_vm.name)+" ("+_vm._s(_vm.counter)+")")]),_c('button',{on:{"click":function($event){_vm.counter++}}},[_vm._v("test")])])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/contact.vue?vue&type=script&lang=js&

/* harmony default export */ const contactvue_type_script_lang_js_ = ({
  name: 'compiled-contact',
  data() {
    return {
      name: "",
      counter: 0,
    }
  },
  mounted() {
    this.name = "world";
    console.log("Component mounted XXXXXXX");
  },
});

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ const pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/contact.vue?vue&type=style&index=0&id=58172678&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/contact.vue?vue&type=style&index=0&id=58172678&prod&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/contact.vue



;


/* normalize component */

var component = normalizeComponent(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const contact = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/hello.vue?vue&type=template&id=b4e6bc94&
var hellovue_type_template_id_b4e6bc94_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"testoo"},[_vm._v("hello "+_vm._s(_vm.name)+" ("+_vm._s(_vm.counter)+")")]),_c('button',{on:{"click":function($event){_vm.counter++}}},[_vm._v("test")])])
}
var hellovue_type_template_id_b4e6bc94_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/hello.vue?vue&type=script&lang=js&

/* harmony default export */ const hellovue_type_script_lang_js_ = ({
  name: 'compiled-contact',
  data() {
    return {
      name: "",
      counter: 0,
    }
  },
  mounted() {
    this.name = "world";
    console.log("Component mounted XXXXXXX");
  },
});

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/hello.vue?vue&type=script&lang=js&
 /* harmony default export */ const pages_hellovue_type_script_lang_js_ = (hellovue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/contact/adminUi/pages/hello.vue?vue&type=style&index=0&id=b4e6bc94&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/hello.vue?vue&type=style&index=0&id=b4e6bc94&prod&lang=css&

;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/hello.vue



;


/* normalize component */

var hello_component = normalizeComponent(
  pages_hellovue_type_script_lang_js_,
  hellovue_type_template_id_b4e6bc94_render,
  hellovue_type_template_id_b4e6bc94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const hello = (hello_component.exports);
;// CONCATENATED MODULE: ./plugins/contact/adminUi/pages/entry.js

  
  


  const Components = {
    contact: contact,
hello: hello
  };

  Object.keys(Components).forEach(name=>{
    $nuxt.$vue_instance_for_plugins.component('contact-'+Components[name].name,Components[name])
    console.log("Component "+'contact-'+Components[name].name+" is ready");
  })

  $nuxt.$store.dispatch('plugins/pluginLoaded', { key: 'contact' });

  /* harmony default export */ const entry = (Components);
  
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (entry);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=contact.umd.js.map