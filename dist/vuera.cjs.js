'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _ErrorTypeStrings;
var _deprecationData;/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return!!map[val.toLowerCase()];}:function(val){return!!map[val];};}var GLOBALS_WHITE_LISTED='Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,'+'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,'+'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';var isGloballyWhitelisted=/*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */var specialBooleanAttrs='itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly';var isSpecialBooleanAttr=/*#__PURE__*/makeMap(specialBooleanAttrs);/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */function includeBooleanAttr(value){return!!value||value==='';}function normalizeStyle(value){if(isArray(value)){var res={};for(var i=0;i<value.length;i++){var item=value[i];var normalized=isString(item)?parseStringStyle(item):normalizeStyle(item);if(normalized){for(var key in normalized){res[key]=normalized[key];}}}return res;}else if(isString(value)){return value;}else if(isObject(value)){return value;}}var listDelimiterRE=/;(?![^(]*\))/g;var propertyDelimiterRE=/:(.+)/;function parseStringStyle(cssText){var ret={};cssText.split(listDelimiterRE).forEach(function(item){if(item){var tmp=item.split(propertyDelimiterRE);tmp.length>1&&(ret[tmp[0].trim()]=tmp[1].trim());}});return ret;}function normalizeClass(value){var res='';if(isString(value)){res=value;}else if(isArray(value)){for(var i=0;i<value.length;i++){var normalized=normalizeClass(value[i]);if(normalized){res+=normalized+' ';}}}else if(isObject(value)){for(var name in value){if(value[name]){res+=name+' ';}}}return res.trim();}function normalizeProps(props){if(!props)return null;var klass=props.class,style=props.style;if(klass&&!isString(klass)){props.class=normalizeClass(klass);}if(style){props.style=normalizeStyle(style);}return props;}// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
var HTML_TAGS='html,body,base,head,link,meta,style,title,address,article,aside,footer,'+'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,'+'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,'+'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,'+'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,'+'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,'+'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,'+'option,output,progress,select,textarea,details,dialog,menu,'+'summary,template,blockquote,iframe,tfoot';// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
var SVG_TAGS='svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,'+'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,'+'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,'+'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,'+'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,'+'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,'+'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,'+'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,'+'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,'+'text,textPath,title,tspan,unknown,use,view';/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */var isHTMLTag=/*#__PURE__*/makeMap(HTML_TAGS);/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */var isSVGTag=/*#__PURE__*/makeMap(SVG_TAGS);function looseCompareArrays(a,b){if(a.length!==b.length)return false;var equal=true;for(var i=0;equal&&i<a.length;i++){equal=looseEqual(a[i],b[i]);}return equal;}function looseEqual(a,b){if(a===b)return true;var aValidType=isDate(a);var bValidType=isDate(b);if(aValidType||bValidType){return aValidType&&bValidType?a.getTime()===b.getTime():false;}aValidType=isArray(a);bValidType=isArray(b);if(aValidType||bValidType){return aValidType&&bValidType?looseCompareArrays(a,b):false;}aValidType=isObject(a);bValidType=isObject(b);if(aValidType||bValidType){/* istanbul ignore if: this if will probably never be called */if(!aValidType||!bValidType){return false;}var aKeysCount=Object.keys(a).length;var bKeysCount=Object.keys(b).length;if(aKeysCount!==bKeysCount){return false;}for(var key in a){var aHasKey=a.hasOwnProperty(key);var bHasKey=b.hasOwnProperty(key);if(aHasKey&&!bHasKey||!aHasKey&&bHasKey||!looseEqual(a[key],b[key])){return false;}}}return String(a)===String(b);}function looseIndexOf(arr,val){return arr.findIndex(function(item){return looseEqual(item,val);});}/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */var toDisplayString=function toDisplayString(val){return isString(val)?val:val==null?'':isArray(val)||isObject(val)&&(val.toString===objectToString||!isFunction(val.toString))?JSON.stringify(val,replacer,2):String(val);};var replacer=function replacer(_key,val){// can't use isRef here since @vue/shared has no deps
if(val&&val.__v_isRef){return replacer(_key,val.value);}else if(isMap(val)){return defineProperty({},'Map('+val.size+')',[].concat(toConsumableArray(val.entries())).reduce(function(entries,_ref){var _ref2=slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];entries[key+' =>']=val;return entries;},{}));}else if(isSet(val)){return defineProperty({},'Set('+val.size+')',[].concat(toConsumableArray(val.values())));}else if(isObject(val)&&!isArray(val)&&!isPlainObject(val)){return String(val);}return val;};var EMPTY_OBJ=process.env.NODE_ENV!=='production'?Object.freeze({}):{};var EMPTY_ARR=process.env.NODE_ENV!=='production'?Object.freeze([]):[];var NOOP=function NOOP(){};/**
 * Always return false.
 */var NO=function NO(){return false;};var onRE=/^on[^a-z]/;var isOn=function isOn(key){return onRE.test(key);};var isModelListener=function isModelListener(key){return key.startsWith('onUpdate:');};var extend=Object.assign;var remove=function remove(arr,el){var i=arr.indexOf(el);if(i>-1){arr.splice(i,1);}};var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function hasOwn(val,key){return hasOwnProperty.call(val,key);};var isArray=Array.isArray;var isMap=function isMap(val){return toTypeString(val)==='[object Map]';};var isSet=function isSet(val){return toTypeString(val)==='[object Set]';};var isDate=function isDate(val){return val instanceof Date;};var isFunction=function isFunction(val){return typeof val==='function';};var isString=function isString(val){return typeof val==='string';};var isSymbol=function isSymbol(val){return(typeof val==='undefined'?'undefined':_typeof(val))==='symbol';};var isObject=function isObject(val){return val!==null&&(typeof val==='undefined'?'undefined':_typeof(val))==='object';};var isPromise=function isPromise(val){return isObject(val)&&isFunction(val.then)&&isFunction(val.catch);};var objectToString=Object.prototype.toString;var toTypeString=function toTypeString(value){return objectToString.call(value);};var toRawType=function toRawType(value){// extract "RawType" from strings like "[object RawType]"
return toTypeString(value).slice(8,-1);};var isPlainObject=function isPlainObject(val){return toTypeString(val)==='[object Object]';};var isIntegerKey=function isIntegerKey(key){return isString(key)&&key!=='NaN'&&key[0]!=='-'&&''+parseInt(key,10)===key;};var isReservedProp=/*#__PURE__*/makeMap(// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,'+'onVnodeBeforeMount,onVnodeMounted,'+'onVnodeBeforeUpdate,onVnodeUpdated,'+'onVnodeBeforeUnmount,onVnodeUnmounted');var isBuiltInDirective=/*#__PURE__*/makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');var cacheStringFunction=function cacheStringFunction(fn){var cache=Object.create(null);return function(str){var hit=cache[str];return hit||(cache[str]=fn(str));};};var camelizeRE=/-(\w)/g;/**
 * @private
 */var camelize=cacheStringFunction(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});var hyphenateRE=/\B([A-Z])/g;/**
 * @private
 */var hyphenate=cacheStringFunction(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase();});/**
 * @private
 */var capitalize=cacheStringFunction(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
 * @private
 */var toHandlerKey=cacheStringFunction(function(str){return str?'on'+capitalize(str):'';});// compare whether a value has changed, accounting for NaN.
var hasChanged=function hasChanged(value,oldValue){return!Object.is(value,oldValue);};var invokeArrayFns=function invokeArrayFns(fns,arg){for(var i=0;i<fns.length;i++){fns[i](arg);}};var def=function def(obj,key,value){Object.defineProperty(obj,key,{configurable:true,enumerable:false,value:value});};var toNumber=function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n;};var _globalThis=void 0;var getGlobalThis=function getGlobalThis(){return _globalThis||(_globalThis=typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:typeof window!=='undefined'?window:typeof global!=='undefined'?global:{});};function warn(msg){var _console;for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key2=1;_key2<_len;_key2++){args[_key2-1]=arguments[_key2];}(_console=console).warn.apply(_console,['[Vue warn] '+msg].concat(args));}var activeEffectScope=void 0;var EffectScope=function(){function EffectScope(){var detached=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;classCallCheck(this,EffectScope);this.active=true;this.effects=[];this.cleanups=[];if(!detached&&activeEffectScope){this.parent=activeEffectScope;this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1;}}createClass(EffectScope,[{key:'run',value:function run(fn){if(this.active){try{activeEffectScope=this;return fn();}finally{activeEffectScope=this.parent;}}else if(process.env.NODE_ENV!=='production'){warn('cannot run an inactive effect scope.');}}},{key:'on',value:function on(){activeEffectScope=this;}},{key:'off',value:function off(){activeEffectScope=this.parent;}},{key:'stop',value:function stop(fromParent){if(this.active){var i=void 0,l=void 0;for(i=0, l=this.effects.length;i<l;i++){this.effects[i].stop();}for(i=0, l=this.cleanups.length;i<l;i++){this.cleanups[i]();}if(this.scopes){for(i=0, l=this.scopes.length;i<l;i++){this.scopes[i].stop(true);}}// nested scope, dereference from parent to avoid memory leaks
if(this.parent&&!fromParent){// optimized O(1) removal
var last=this.parent.scopes.pop();if(last&&last!==this){this.parent.scopes[this.index]=last;last.index=this.index;}}this.active=false;}}}]);return EffectScope;}();function effectScope(detached){return new EffectScope(detached);}function recordEffectScope(effect){var scope=arguments.length>1&&arguments[1]!==undefined?arguments[1]:activeEffectScope;if(scope&&scope.active){scope.effects.push(effect);}}function getCurrentScope(){return activeEffectScope;}function onScopeDispose(fn){if(activeEffectScope){activeEffectScope.cleanups.push(fn);}else if(process.env.NODE_ENV!=='production'){warn('onScopeDispose() is called when there is no active effect scope'+' to be associated with.');}}var createDep=function createDep(effects){var dep=new Set(effects);dep.w=0;dep.n=0;return dep;};var wasTracked=function wasTracked(dep){return(dep.w&trackOpBit)>0;};var newTracked=function newTracked(dep){return(dep.n&trackOpBit)>0;};var initDepMarkers=function initDepMarkers(_ref5){var deps=_ref5.deps;if(deps.length){for(var i=0;i<deps.length;i++){deps[i].w|=trackOpBit;// set was tracked
}}};var finalizeDepMarkers=function finalizeDepMarkers(effect){var deps=effect.deps;if(deps.length){var ptr=0;for(var i=0;i<deps.length;i++){var dep=deps[i];if(wasTracked(dep)&&!newTracked(dep)){dep.delete(effect);}else{deps[ptr++]=dep;}// clear bits
dep.w&=~trackOpBit;dep.n&=~trackOpBit;}deps.length=ptr;}};var targetMap=new WeakMap();// The number of effects currently being tracked recursively.
var effectTrackDepth=0;var trackOpBit=1;/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */var maxMarkerBits=30;var activeEffect=void 0;var ITERATE_KEY=Symbol(process.env.NODE_ENV!=='production'?'iterate':'');var MAP_KEY_ITERATE_KEY=Symbol(process.env.NODE_ENV!=='production'?'Map key iterate':'');var ReactiveEffect=function(){function ReactiveEffect(fn){var scheduler=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var scope=arguments[2];classCallCheck(this,ReactiveEffect);this.fn=fn;this.scheduler=scheduler;this.active=true;this.deps=[];this.parent=undefined;recordEffectScope(this,scope);}createClass(ReactiveEffect,[{key:'run',value:function run(){if(!this.active){return this.fn();}var parent=activeEffect;var lastShouldTrack=shouldTrack;while(parent){if(parent===this){return;}parent=parent.parent;}try{this.parent=activeEffect;activeEffect=this;shouldTrack=true;trackOpBit=1<<++effectTrackDepth;if(effectTrackDepth<=maxMarkerBits){initDepMarkers(this);}else{cleanupEffect(this);}return this.fn();}finally{if(effectTrackDepth<=maxMarkerBits){finalizeDepMarkers(this);}trackOpBit=1<<--effectTrackDepth;activeEffect=this.parent;shouldTrack=lastShouldTrack;this.parent=undefined;}}},{key:'stop',value:function stop(){if(this.active){cleanupEffect(this);if(this.onStop){this.onStop();}this.active=false;}}}]);return ReactiveEffect;}();function cleanupEffect(effect){var deps=effect.deps;if(deps.length){for(var i=0;i<deps.length;i++){deps[i].delete(effect);}deps.length=0;}}function effect(fn,options){if(fn.effect){fn=fn.effect.fn;}var _effect=new ReactiveEffect(fn);if(options){extend(_effect,options);if(options.scope)recordEffectScope(_effect,options.scope);}if(!options||!options.lazy){_effect.run();}var runner=_effect.run.bind(_effect);runner.effect=_effect;return runner;}function stop(runner){runner.effect.stop();}var shouldTrack=true;var trackStack=[];function pauseTracking(){trackStack.push(shouldTrack);shouldTrack=false;}function resetTracking(){var last=trackStack.pop();shouldTrack=last===undefined?true:last;}function track(target,type,key){if(shouldTrack&&activeEffect){var depsMap=targetMap.get(target);if(!depsMap){targetMap.set(target,depsMap=new Map());}var dep=depsMap.get(key);if(!dep){depsMap.set(key,dep=createDep());}var eventInfo=process.env.NODE_ENV!=='production'?{effect:activeEffect,target:target,type:type,key:key}:undefined;trackEffects(dep,eventInfo);}}function trackEffects(dep,debuggerEventExtraInfo){var shouldTrack=false;if(effectTrackDepth<=maxMarkerBits){if(!newTracked(dep)){dep.n|=trackOpBit;// set newly tracked
shouldTrack=!wasTracked(dep);}}else{// Full cleanup mode.
shouldTrack=!dep.has(activeEffect);}if(shouldTrack){dep.add(activeEffect);activeEffect.deps.push(dep);if(process.env.NODE_ENV!=='production'&&activeEffect.onTrack){activeEffect.onTrack(Object.assign({effect:activeEffect},debuggerEventExtraInfo));}}}function trigger(target,type,key,newValue,oldValue,oldTarget){var depsMap=targetMap.get(target);if(!depsMap){// never been tracked
return;}var deps=[];if(type==="clear"/* CLEAR */){// collection being cleared
// trigger all effects for target
deps=[].concat(toConsumableArray(depsMap.values()));}else if(key==='length'&&isArray(target)){depsMap.forEach(function(dep,key){if(key==='length'||key>=newValue){deps.push(dep);}});}else{// schedule runs for SET | ADD | DELETE
if(key!==void 0){deps.push(depsMap.get(key));}// also run for iteration key on ADD | DELETE | Map.SET
switch(type){case"add"/* ADD */:if(!isArray(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}else if(isIntegerKey(key)){// new index added to array -> length changes
deps.push(depsMap.get('length'));}break;case"delete"/* DELETE */:if(!isArray(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}break;case"set"/* SET */:if(isMap(target)){deps.push(depsMap.get(ITERATE_KEY));}break;}}var eventInfo=process.env.NODE_ENV!=='production'?{target:target,type:type,key:key,newValue:newValue,oldValue:oldValue,oldTarget:oldTarget}:undefined;if(deps.length===1){if(deps[0]){if(process.env.NODE_ENV!=='production'){triggerEffects(deps[0],eventInfo);}else{triggerEffects(deps[0]);}}}else{var effects=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=deps[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var dep=_step.value;if(dep){effects.push.apply(effects,toConsumableArray(dep));}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}if(process.env.NODE_ENV!=='production'){triggerEffects(createDep(effects),eventInfo);}else{triggerEffects(createDep(effects));}}}function triggerEffects(dep,debuggerEventExtraInfo){// spread into array for stabilization
var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(isArray(dep)?dep:[].concat(toConsumableArray(dep)))[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _effect2=_step2.value;if(_effect2!==activeEffect||_effect2.allowRecurse){if(process.env.NODE_ENV!=='production'&&_effect2.onTrigger){_effect2.onTrigger(extend({effect:_effect2},debuggerEventExtraInfo));}if(_effect2.scheduler){_effect2.scheduler();}else{_effect2.run();}}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}var isNonTrackableKeys=/*#__PURE__*/makeMap('__proto__,__v_isRef,__isVue');var builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).map(function(key){return Symbol[key];}).filter(isSymbol));var get=/*#__PURE__*/createGetter();var shallowGet=/*#__PURE__*/createGetter(false,true);var readonlyGet=/*#__PURE__*/createGetter(true);var shallowReadonlyGet=/*#__PURE__*/createGetter(true,true);var arrayInstrumentations=/*#__PURE__*/createArrayInstrumentations();function createArrayInstrumentations(){var instrumentations={};['includes','indexOf','lastIndexOf'].forEach(function(key){instrumentations[key]=function(){var arr=toRaw(this);for(var i=0,l=this.length;i<l;i++){track(arr,"get"/* GET */,i+'');}// we run the method using the original args first (which may be reactive)
for(var _len2=arguments.length,args=Array(_len2),_key3=0;_key3<_len2;_key3++){args[_key3]=arguments[_key3];}var res=arr[key].apply(arr,args);if(res===-1||res===false){// if that didn't work, run it again using raw values.
return arr[key].apply(arr,toConsumableArray(args.map(toRaw)));}else{return res;}};});['push','pop','shift','unshift','splice'].forEach(function(key){instrumentations[key]=function(){pauseTracking();for(var _len3=arguments.length,args=Array(_len3),_key4=0;_key4<_len3;_key4++){args[_key4]=arguments[_key4];}var res=toRaw(this)[key].apply(this,args);resetTracking();return res;};});return instrumentations;}function createGetter(){var isReadonly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var shallow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function get(target,key,receiver){if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_isShallow"/* IS_SHALLOW */){return shallow;}else if(key==="__v_raw"/* RAW */&&receiver===(isReadonly?shallow?shallowReadonlyMap:readonlyMap:shallow?shallowReactiveMap:reactiveMap).get(target)){return target;}var targetIsArray=isArray(target);if(!isReadonly&&targetIsArray&&hasOwn(arrayInstrumentations,key)){return Reflect.get(arrayInstrumentations,key,receiver);}var res=Reflect.get(target,key,receiver);if(isSymbol(key)?builtInSymbols.has(key):isNonTrackableKeys(key)){return res;}if(!isReadonly){track(target,"get"/* GET */,key);}if(shallow){return res;}if(isRef(res)){// ref unwrapping - does not apply for Array + integer key.
var shouldUnwrap=!targetIsArray||!isIntegerKey(key);return shouldUnwrap?res.value:res;}if(isObject(res)){// Convert returned value into a proxy as well. we do the isObject check
// here to avoid invalid value warning. Also need to lazy access readonly
// and reactive here to avoid circular dependency.
return isReadonly?readonly(res):reactive(res);}return res;};}var set=/*#__PURE__*/createSetter();var shallowSet=/*#__PURE__*/createSetter(true);function createSetter(){var shallow=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return function set(target,key,value,receiver){var oldValue=target[key];if(isReadonly(oldValue)&&isRef(oldValue)&&!isRef(value)){return false;}if(!shallow&&!isReadonly(value)){if(!isShallow(value)){value=toRaw(value);oldValue=toRaw(oldValue);}if(!isArray(target)&&isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}}var hadKey=isArray(target)&&isIntegerKey(key)?Number(key)<target.length:hasOwn(target,key);var result=Reflect.set(target,key,value,receiver);// don't trigger if target is something up in the prototype chain of original
if(target===toRaw(receiver)){if(!hadKey){trigger(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger(target,"set"/* SET */,key,value,oldValue);}}return result;};}function deleteProperty(target,key){var hadKey=hasOwn(target,key);var oldValue=target[key];var result=Reflect.deleteProperty(target,key);if(result&&hadKey){trigger(target,"delete"/* DELETE */,key,undefined,oldValue);}return result;}function has(target,key){var result=Reflect.has(target,key);if(!isSymbol(key)||!builtInSymbols.has(key)){track(target,"has"/* HAS */,key);}return result;}function ownKeys(target){track(target,"iterate"/* ITERATE */,isArray(target)?'length':ITERATE_KEY);return Reflect.ownKeys(target);}var mutableHandlers={get:get,set:set,deleteProperty:deleteProperty,has:has,ownKeys:ownKeys};var readonlyHandlers={get:readonlyGet,set:function set(target,key){if(process.env.NODE_ENV!=='production'){console.warn('Set operation on key "'+String(key)+'" failed: target is readonly.',target);}return true;},deleteProperty:function deleteProperty(target,key){if(process.env.NODE_ENV!=='production'){console.warn('Delete operation on key "'+String(key)+'" failed: target is readonly.',target);}return true;}};var shallowReactiveHandlers=/*#__PURE__*/extend({},mutableHandlers,{get:shallowGet,set:shallowSet});// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
var shallowReadonlyHandlers=/*#__PURE__*/extend({},readonlyHandlers,{get:shallowReadonlyGet});var toShallow=function toShallow(value){return value;};var getProto=function getProto(v){return Reflect.getPrototypeOf(v);};function get$1(target,key){var isReadonly=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isShallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
target=target["__v_raw"/* RAW */];var rawTarget=toRaw(target);var rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"get"/* GET */,key);}!isReadonly&&track(rawTarget,"get"/* GET */,rawKey);var _getProto=getProto(rawTarget),has=_getProto.has;var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;if(has.call(rawTarget,key)){return wrap(target.get(key));}else if(has.call(rawTarget,rawKey)){return wrap(target.get(rawKey));}else if(target!==rawTarget){// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
target.get(key);}}function has$1(key){var isReadonly=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var target=this["__v_raw"/* RAW */];var rawTarget=toRaw(target);var rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"has"/* HAS */,key);}!isReadonly&&track(rawTarget,"has"/* HAS */,rawKey);return key===rawKey?target.has(key):target.has(key)||target.has(rawKey);}function size(target){var isReadonly=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;target=target["__v_raw"/* RAW */];!isReadonly&&track(toRaw(target),"iterate"/* ITERATE */,ITERATE_KEY);return Reflect.get(target,'size',target);}function add(value){value=toRaw(value);var target=toRaw(this);var proto=getProto(target);var hadKey=proto.has.call(target,value);if(!hadKey){target.add(value);trigger(target,"add"/* ADD */,value,value);}return this;}function set$1(key,value){value=toRaw(value);var target=toRaw(this);var _getProto2=getProto(target),has=_getProto2.has,get=_getProto2.get;var hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}else if(process.env.NODE_ENV!=='production'){checkIdentityKeys(target,has,key);}var oldValue=get.call(target,key);target.set(key,value);if(!hadKey){trigger(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger(target,"set"/* SET */,key,value,oldValue);}return this;}function deleteEntry(key){var target=toRaw(this);var _getProto3=getProto(target),has=_getProto3.has,get=_getProto3.get;var hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}else if(process.env.NODE_ENV!=='production'){checkIdentityKeys(target,has,key);}var oldValue=get?get.call(target,key):undefined;// forward the operation before queueing reactions
var result=target.delete(key);if(hadKey){trigger(target,"delete"/* DELETE */,key,undefined,oldValue);}return result;}function clear(){var target=toRaw(this);var hadItems=target.size!==0;var oldTarget=process.env.NODE_ENV!=='production'?isMap(target)?new Map(target):new Set(target):undefined;// forward the operation before queueing reactions
var result=target.clear();if(hadItems){trigger(target,"clear"/* CLEAR */,undefined,undefined,oldTarget);}return result;}function createForEach(isReadonly,isShallow){return function forEach(callback,thisArg){var observed=this;var target=observed["__v_raw"/* RAW */];var rawTarget=toRaw(target);var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,ITERATE_KEY);return target.forEach(function(value,key){// important: make sure the callback is
// 1. invoked with the reactive map as `this` and 3rd arg
// 2. the value received should be a corresponding reactive/readonly.
return callback.call(thisArg,wrap(value),wrap(key),observed);});};}function createIterableMethod(method,isReadonly,isShallow){return function(){var target=this["__v_raw"/* RAW */];var rawTarget=toRaw(target);var targetIsMap=isMap(rawTarget);var isPair=method==='entries'||method===Symbol.iterator&&targetIsMap;var isKeyOnly=method==='keys'&&targetIsMap;var innerIterator=target[method].apply(target,arguments);var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,isKeyOnly?MAP_KEY_ITERATE_KEY:ITERATE_KEY);// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return defineProperty({// iterator protocol
next:function next(){var _innerIterator$next=innerIterator.next(),value=_innerIterator$next.value,done=_innerIterator$next.done;return done?{value:value,done:done}:{value:isPair?[wrap(value[0]),wrap(value[1])]:wrap(value),done:done};}},Symbol.iterator,function(){return this;});};}function createReadonlyMethod(type){return function(){if(process.env.NODE_ENV!=='production'){var key=(arguments.length<=0?undefined:arguments[0])?'on key "'+(arguments.length<=0?undefined:arguments[0])+'" ':'';console.warn(capitalize(type)+' operation '+key+'failed: target is readonly.',toRaw(this));}return type==="delete"/* DELETE */?false:this;};}function createInstrumentations(){var mutableInstrumentations={get:function get(key){return get$1(this,key);},get size(){return size(this);},has:has$1,add:add,set:set$1,delete:deleteEntry,clear:clear,forEach:createForEach(false,false)};var shallowInstrumentations={get:function get(key){return get$1(this,key,false,true);},get size(){return size(this);},has:has$1,add:add,set:set$1,delete:deleteEntry,clear:clear,forEach:createForEach(false,true)};var readonlyInstrumentations={get:function get(key){return get$1(this,key,true);},get size(){return size(this,true);},has:function has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,false)};var shallowReadonlyInstrumentations={get:function get(key){return get$1(this,key,true,true);},get size(){return size(this,true);},has:function has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,true)};var iteratorMethods=['keys','values','entries',Symbol.iterator];iteratorMethods.forEach(function(method){mutableInstrumentations[method]=createIterableMethod(method,false,false);readonlyInstrumentations[method]=createIterableMethod(method,true,false);shallowInstrumentations[method]=createIterableMethod(method,false,true);shallowReadonlyInstrumentations[method]=createIterableMethod(method,true,true);});return[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations];}var _createInstrumentatio=/* #__PURE__*/createInstrumentations(); var _createInstrumentatio2=slicedToArray(_createInstrumentatio,4); var mutableInstrumentations=_createInstrumentatio2[0]; var readonlyInstrumentations=_createInstrumentatio2[1]; var shallowInstrumentations=_createInstrumentatio2[2]; var shallowReadonlyInstrumentations=_createInstrumentatio2[3];function createInstrumentationGetter(isReadonly,shallow){var instrumentations=shallow?isReadonly?shallowReadonlyInstrumentations:shallowInstrumentations:isReadonly?readonlyInstrumentations:mutableInstrumentations;return function(target,key,receiver){if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_raw"/* RAW */){return target;}return Reflect.get(hasOwn(instrumentations,key)&&key in target?instrumentations:target,key,receiver);};}var mutableCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,false)};var shallowCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,true)};var readonlyCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(true,false)};var shallowReadonlyCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(true,true)};function checkIdentityKeys(target,has,key){var rawKey=toRaw(key);if(rawKey!==key&&has.call(target,rawKey)){var type=toRawType(target);console.warn('Reactive '+type+' contains both the raw and reactive '+('versions of the same object'+(type==='Map'?' as keys':'')+', ')+'which can lead to inconsistencies. '+'Avoid differentiating between the raw and reactive versions '+'of an object and only use the reactive version if possible.');}}var reactiveMap=new WeakMap();var shallowReactiveMap=new WeakMap();var readonlyMap=new WeakMap();var shallowReadonlyMap=new WeakMap();function targetTypeMap(rawType){switch(rawType){case'Object':case'Array':return 1/* COMMON */;case'Map':case'Set':case'WeakMap':case'WeakSet':return 2/* COLLECTION */;default:return 0/* INVALID */;}}function getTargetType(value){return value["__v_skip"/* SKIP */]||!Object.isExtensible(value)?0/* INVALID */:targetTypeMap(toRawType(value));}function reactive(target){// if trying to observe a readonly proxy, return the readonly version.
if(isReadonly(target)){return target;}return createReactiveObject(target,false,mutableHandlers,mutableCollectionHandlers,reactiveMap);}/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */function shallowReactive(target){return createReactiveObject(target,false,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap);}/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */function readonly(target){return createReactiveObject(target,true,readonlyHandlers,readonlyCollectionHandlers,readonlyMap);}/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */function shallowReadonly(target){return createReactiveObject(target,true,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap);}function createReactiveObject(target,isReadonly,baseHandlers,collectionHandlers,proxyMap){if(!isObject(target)){if(process.env.NODE_ENV!=='production'){console.warn('value cannot be made reactive: '+String(target));}return target;}// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(target["__v_raw"/* RAW */]&&!(isReadonly&&target["__v_isReactive"/* IS_REACTIVE */])){return target;}// target already has corresponding Proxy
var existingProxy=proxyMap.get(target);if(existingProxy){return existingProxy;}// only a whitelist of value types can be observed.
var targetType=getTargetType(target);if(targetType===0/* INVALID */){return target;}var proxy=new Proxy(target,targetType===2/* COLLECTION */?collectionHandlers:baseHandlers);proxyMap.set(target,proxy);return proxy;}function isReactive(value){if(isReadonly(value)){return isReactive(value["__v_raw"/* RAW */]);}return!!(value&&value["__v_isReactive"/* IS_REACTIVE */]);}function isReadonly(value){return!!(value&&value["__v_isReadonly"/* IS_READONLY */]);}function isShallow(value){return!!(value&&value["__v_isShallow"/* IS_SHALLOW */]);}function isProxy(value){return isReactive(value)||isReadonly(value);}function toRaw(observed){var raw=observed&&observed["__v_raw"/* RAW */];return raw?toRaw(raw):observed;}function markRaw(value){def(value,"__v_skip"/* SKIP */,true);return value;}var toReactive=function toReactive(value){return isObject(value)?reactive(value):value;};var toReadonly=function toReadonly(value){return isObject(value)?readonly(value):value;};function trackRefValue(ref){if(shouldTrack&&activeEffect){ref=toRaw(ref);if(process.env.NODE_ENV!=='production'){trackEffects(ref.dep||(ref.dep=createDep()),{target:ref,type:"get"/* GET */,key:'value'});}else{trackEffects(ref.dep||(ref.dep=createDep()));}}}function triggerRefValue(ref,newVal){ref=toRaw(ref);if(ref.dep){if(process.env.NODE_ENV!=='production'){triggerEffects(ref.dep,{target:ref,type:"set"/* SET */,key:'value',newValue:newVal});}else{triggerEffects(ref.dep);}}}function isRef(r){return!!(r&&r.__v_isRef===true);}function ref(value){return createRef(value,false);}function shallowRef(value){return createRef(value,true);}function createRef(rawValue,shallow){if(isRef(rawValue)){return rawValue;}return new RefImpl(rawValue,shallow);}var RefImpl=function(){function RefImpl(value,__v_isShallow){classCallCheck(this,RefImpl);this.__v_isShallow=__v_isShallow;this.dep=undefined;this.__v_isRef=true;this._rawValue=__v_isShallow?value:toRaw(value);this._value=__v_isShallow?value:toReactive(value);}createClass(RefImpl,[{key:'value',get:function get(){trackRefValue(this);return this._value;},set:function set(newVal){newVal=this.__v_isShallow?newVal:toRaw(newVal);if(hasChanged(newVal,this._rawValue)){this._rawValue=newVal;this._value=this.__v_isShallow?newVal:toReactive(newVal);triggerRefValue(this,newVal);}}}]);return RefImpl;}();function triggerRef(ref){triggerRefValue(ref,process.env.NODE_ENV!=='production'?ref.value:void 0);}function unref(ref){return isRef(ref)?ref.value:ref;}var shallowUnwrapHandlers={get:function get(target,key,receiver){return unref(Reflect.get(target,key,receiver));},set:function set(target,key,value,receiver){var oldValue=target[key];if(isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}else{return Reflect.set(target,key,value,receiver);}}};function proxyRefs(objectWithRefs){return isReactive(objectWithRefs)?objectWithRefs:new Proxy(objectWithRefs,shallowUnwrapHandlers);}var CustomRefImpl=function(){function CustomRefImpl(factory){var _this=this;classCallCheck(this,CustomRefImpl);this.dep=undefined;this.__v_isRef=true;var _factory=factory(function(){return trackRefValue(_this);},function(){return triggerRefValue(_this);}),get=_factory.get,set=_factory.set;this._get=get;this._set=set;}createClass(CustomRefImpl,[{key:'value',get:function get(){return this._get();},set:function set(newVal){this._set(newVal);}}]);return CustomRefImpl;}();function customRef(factory){return new CustomRefImpl(factory);}function toRefs(object){if(process.env.NODE_ENV!=='production'&&!isProxy(object)){console.warn('toRefs() expects a reactive object but received a plain one.');}var ret=isArray(object)?new Array(object.length):{};for(var key in object){ret[key]=toRef(object,key);}return ret;}var ObjectRefImpl=function(){function ObjectRefImpl(_object,_key,_defaultValue){classCallCheck(this,ObjectRefImpl);this._object=_object;this._key=_key;this._defaultValue=_defaultValue;this.__v_isRef=true;}createClass(ObjectRefImpl,[{key:'value',get:function get(){var val=this._object[this._key];return val===undefined?this._defaultValue:val;},set:function set(newVal){this._object[this._key]=newVal;}}]);return ObjectRefImpl;}();function toRef(object,key,defaultValue){var val=object[key];return isRef(val)?val:new ObjectRefImpl(object,key,defaultValue);}var ComputedRefImpl=function(){function ComputedRefImpl(getter,_setter,isReadonly,isSSR){var _this2=this;classCallCheck(this,ComputedRefImpl);this._setter=_setter;this.dep=undefined;this.__v_isRef=true;this._dirty=true;this.effect=new ReactiveEffect(getter,function(){if(!_this2._dirty){_this2._dirty=true;triggerRefValue(_this2);}});this.effect.computed=this;this.effect.active=this._cacheable=!isSSR;this["__v_isReadonly"/* IS_READONLY */]=isReadonly;}createClass(ComputedRefImpl,[{key:'value',get:function get(){// the computed ref may get wrapped by other proxies e.g. readonly() #3376
var self=toRaw(this);trackRefValue(self);if(self._dirty||!self._cacheable){self._dirty=false;self._value=self.effect.run();}return self._value;},set:function set(newValue){this._setter(newValue);}}]);return ComputedRefImpl;}();function computed(getterOrOptions,debugOptions){var isSSR=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var getter=void 0;var setter=void 0;var onlyGetter=isFunction(getterOrOptions);if(onlyGetter){getter=getterOrOptions;setter=process.env.NODE_ENV!=='production'?function(){console.warn('Write operation failed: computed value is readonly');}:NOOP;}else{getter=getterOrOptions.get;setter=getterOrOptions.set;}var cRef=new ComputedRefImpl(getter,setter,onlyGetter||!setter,isSSR);if(process.env.NODE_ENV!=='production'&&debugOptions&&!isSSR){cRef.effect.onTrack=debugOptions.onTrack;cRef.effect.onTrigger=debugOptions.onTrigger;}return cRef;}var stack=[];function pushWarningContext(vnode){stack.push(vnode);}function popWarningContext(){stack.pop();}function warn$1(msg){// avoid props formatting or warn handler tracking deps that might be mutated
// during patch, leading to infinite recursion.
pauseTracking();var instance=stack.length?stack[stack.length-1].component:null;var appWarnHandler=instance&&instance.appContext.config.warnHandler;var trace=getComponentTrace();for(var _len4=arguments.length,args=Array(_len4>1?_len4-1:0),_key5=1;_key5<_len4;_key5++){args[_key5-1]=arguments[_key5];}if(appWarnHandler){callWithErrorHandling(appWarnHandler,instance,11/* APP_WARN_HANDLER */,[msg+args.join(''),instance&&instance.proxy,trace.map(function(_ref7){var vnode=_ref7.vnode;return'at <'+formatComponentName(instance,vnode.type)+'>';}).join('\n'),trace]);}else{var _console2;var warnArgs=['[Vue warn]: '+msg].concat(args);/* istanbul ignore if */if(trace.length&&// avoid spamming console during tests
!false){warnArgs.push.apply(warnArgs,['\n'].concat(toConsumableArray(formatTrace(trace))));}(_console2=console).warn.apply(_console2,toConsumableArray(warnArgs));}resetTracking();}function getComponentTrace(){var currentVNode=stack[stack.length-1];if(!currentVNode){return[];}// we can't just use the stack because it will be incomplete during updates
// that did not start from the root. Re-construct the parent chain using
// instance parent pointers.
var normalizedStack=[];while(currentVNode){var last=normalizedStack[0];if(last&&last.vnode===currentVNode){last.recurseCount++;}else{normalizedStack.push({vnode:currentVNode,recurseCount:0});}var parentInstance=currentVNode.component&&currentVNode.component.parent;currentVNode=parentInstance&&parentInstance.vnode;}return normalizedStack;}/* istanbul ignore next */function formatTrace(trace){var logs=[];trace.forEach(function(entry,i){logs.push.apply(logs,toConsumableArray(i===0?[]:['\n']).concat(toConsumableArray(formatTraceEntry(entry))));});return logs;}function formatTraceEntry(_ref8){var vnode=_ref8.vnode,recurseCount=_ref8.recurseCount;var postfix=recurseCount>0?'... ('+recurseCount+' recursive calls)':'';var isRoot=vnode.component?vnode.component.parent==null:false;var open=' at <'+formatComponentName(vnode.component,vnode.type,isRoot);var close='>'+postfix;return vnode.props?[open].concat(toConsumableArray(formatProps(vnode.props)),[close]):[open+close];}/* istanbul ignore next */function formatProps(props){var res=[];var keys=Object.keys(props);keys.slice(0,3).forEach(function(key){res.push.apply(res,toConsumableArray(formatProp(key,props[key])));});if(keys.length>3){res.push(' ...');}return res;}/* istanbul ignore next */function formatProp(key,value,raw){if(isString(value)){value=JSON.stringify(value);return raw?value:[key+'='+value];}else if(typeof value==='number'||typeof value==='boolean'||value==null){return raw?value:[key+'='+value];}else if(isRef(value)){value=formatProp(key,toRaw(value.value),true);return raw?value:[key+'=Ref<',value,'>'];}else if(isFunction(value)){return[key+'=fn'+(value.name?'<'+value.name+'>':'')];}else{value=toRaw(value);return raw?value:[key+'=',value];}}var ErrorTypeStrings=(_ErrorTypeStrings={}, defineProperty(_ErrorTypeStrings,"sp"/* SERVER_PREFETCH */,'serverPrefetch hook'), defineProperty(_ErrorTypeStrings,"bc"/* BEFORE_CREATE */,'beforeCreate hook'), defineProperty(_ErrorTypeStrings,"c"/* CREATED */,'created hook'), defineProperty(_ErrorTypeStrings,"bm"/* BEFORE_MOUNT */,'beforeMount hook'), defineProperty(_ErrorTypeStrings,"m"/* MOUNTED */,'mounted hook'), defineProperty(_ErrorTypeStrings,"bu"/* BEFORE_UPDATE */,'beforeUpdate hook'), defineProperty(_ErrorTypeStrings,"u"/* UPDATED */,'updated'), defineProperty(_ErrorTypeStrings,"bum"/* BEFORE_UNMOUNT */,'beforeUnmount hook'), defineProperty(_ErrorTypeStrings,"um"/* UNMOUNTED */,'unmounted hook'), defineProperty(_ErrorTypeStrings,"a"/* ACTIVATED */,'activated hook'), defineProperty(_ErrorTypeStrings,"da"/* DEACTIVATED */,'deactivated hook'), defineProperty(_ErrorTypeStrings,"ec"/* ERROR_CAPTURED */,'errorCaptured hook'), defineProperty(_ErrorTypeStrings,"rtc"/* RENDER_TRACKED */,'renderTracked hook'), defineProperty(_ErrorTypeStrings,"rtg"/* RENDER_TRIGGERED */,'renderTriggered hook'), defineProperty(_ErrorTypeStrings,0/* SETUP_FUNCTION */,'setup function'), defineProperty(_ErrorTypeStrings,1/* RENDER_FUNCTION */,'render function'), defineProperty(_ErrorTypeStrings,2/* WATCH_GETTER */,'watcher getter'), defineProperty(_ErrorTypeStrings,3/* WATCH_CALLBACK */,'watcher callback'), defineProperty(_ErrorTypeStrings,4/* WATCH_CLEANUP */,'watcher cleanup function'), defineProperty(_ErrorTypeStrings,5/* NATIVE_EVENT_HANDLER */,'native event handler'), defineProperty(_ErrorTypeStrings,6/* COMPONENT_EVENT_HANDLER */,'component event handler'), defineProperty(_ErrorTypeStrings,7/* VNODE_HOOK */,'vnode hook'), defineProperty(_ErrorTypeStrings,8/* DIRECTIVE_HOOK */,'directive hook'), defineProperty(_ErrorTypeStrings,9/* TRANSITION_HOOK */,'transition hook'), defineProperty(_ErrorTypeStrings,10/* APP_ERROR_HANDLER */,'app errorHandler'), defineProperty(_ErrorTypeStrings,11/* APP_WARN_HANDLER */,'app warnHandler'), defineProperty(_ErrorTypeStrings,12/* FUNCTION_REF */,'ref function'), defineProperty(_ErrorTypeStrings,13/* ASYNC_COMPONENT_LOADER */,'async component loader'), defineProperty(_ErrorTypeStrings,14/* SCHEDULER */,'scheduler flush. This is likely a Vue internals bug. '+'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'), _ErrorTypeStrings);function callWithErrorHandling(fn,instance,type,args){var res=void 0;try{res=args?fn.apply(undefined,toConsumableArray(args)):fn();}catch(err){handleError(err,instance,type);}return res;}function callWithAsyncErrorHandling(fn,instance,type,args){if(isFunction(fn)){var res=callWithErrorHandling(fn,instance,type,args);if(res&&isPromise(res)){res.catch(function(err){handleError(err,instance,type);});}return res;}var values=[];for(var i=0;i<fn.length;i++){values.push(callWithAsyncErrorHandling(fn[i],instance,type,args));}return values;}function handleError(err,instance,type){var throwInDev=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var contextVNode=instance?instance.vnode:null;if(instance){var cur=instance.parent;// the exposed instance is the render proxy to keep it consistent with 2.x
var exposedInstance=instance.proxy;// in production the hook receives only the error code
var errorInfo=process.env.NODE_ENV!=='production'?ErrorTypeStrings[type]:type;while(cur){var errorCapturedHooks=cur.ec;if(errorCapturedHooks){for(var i=0;i<errorCapturedHooks.length;i++){if(errorCapturedHooks[i](err,exposedInstance,errorInfo)===false){return;}}}cur=cur.parent;}// app-level handling
var appErrorHandler=instance.appContext.config.errorHandler;if(appErrorHandler){callWithErrorHandling(appErrorHandler,null,10/* APP_ERROR_HANDLER */,[err,exposedInstance,errorInfo]);return;}}logError(err,type,contextVNode,throwInDev);}function logError(err,type,contextVNode){var throwInDev=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;if(process.env.NODE_ENV!=='production'){var info=ErrorTypeStrings[type];if(contextVNode){pushWarningContext(contextVNode);}warn$1('Unhandled error'+(info?' during execution of '+info:''));if(contextVNode){popWarningContext();}// crash in dev by default so it's more noticeable
if(throwInDev){throw err;}else{console.error(err);}}else{// recover in prod to reduce the impact on end-user
console.error(err);}}var isFlushing=false;var isFlushPending=false;var queue=[];var flushIndex=0;var pendingPreFlushCbs=[];var activePreFlushCbs=null;var preFlushIndex=0;var pendingPostFlushCbs=[];var activePostFlushCbs=null;var postFlushIndex=0;var resolvedPromise=Promise.resolve();var currentFlushPromise=null;var currentPreFlushParentJob=null;var RECURSION_LIMIT=100;function nextTick(fn){var p=currentFlushPromise||resolvedPromise;return fn?p.then(this?fn.bind(this):fn):p;}// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id){// the start index should be `flushIndex + 1`
var start=flushIndex+1;var end=queue.length;while(start<end){var middle=start+end>>>1;var middleJobId=getId(queue[middle]);middleJobId<id?start=middle+1:end=middle;}return start;}function queueJob(job){// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
if((!queue.length||!queue.includes(job,isFlushing&&job.allowRecurse?flushIndex+1:flushIndex))&&job!==currentPreFlushParentJob){if(job.id==null){queue.push(job);}else{queue.splice(findInsertionIndex(job.id),0,job);}queueFlush();}}function queueFlush(){if(!isFlushing&&!isFlushPending){isFlushPending=true;currentFlushPromise=resolvedPromise.then(flushJobs);}}function invalidateJob(job){var i=queue.indexOf(job);if(i>flushIndex){queue.splice(i,1);}}function queueCb(cb,activeQueue,pendingQueue,index){if(!isArray(cb)){if(!activeQueue||!activeQueue.includes(cb,cb.allowRecurse?index+1:index)){pendingQueue.push(cb);}}else{// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
pendingQueue.push.apply(pendingQueue,toConsumableArray(cb));}queueFlush();}function queuePreFlushCb(cb){queueCb(cb,activePreFlushCbs,pendingPreFlushCbs,preFlushIndex);}function queuePostFlushCb(cb){queueCb(cb,activePostFlushCbs,pendingPostFlushCbs,postFlushIndex);}function flushPreFlushCbs(seen){var parentJob=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(pendingPreFlushCbs.length){currentPreFlushParentJob=parentJob;activePreFlushCbs=[].concat(toConsumableArray(new Set(pendingPreFlushCbs)));pendingPreFlushCbs.length=0;if(process.env.NODE_ENV!=='production'){seen=seen||new Map();}for(preFlushIndex=0;preFlushIndex<activePreFlushCbs.length;preFlushIndex++){if(process.env.NODE_ENV!=='production'&&checkRecursiveUpdates(seen,activePreFlushCbs[preFlushIndex])){continue;}activePreFlushCbs[preFlushIndex]();}activePreFlushCbs=null;preFlushIndex=0;currentPreFlushParentJob=null;// recursively flush until it drains
flushPreFlushCbs(seen,parentJob);}}function flushPostFlushCbs(seen){if(pendingPostFlushCbs.length){var deduped=[].concat(toConsumableArray(new Set(pendingPostFlushCbs)));pendingPostFlushCbs.length=0;// #1947 already has active queue, nested flushPostFlushCbs call
if(activePostFlushCbs){var _activePostFlushCbs;(_activePostFlushCbs=activePostFlushCbs).push.apply(_activePostFlushCbs,toConsumableArray(deduped));return;}activePostFlushCbs=deduped;if(process.env.NODE_ENV!=='production'){seen=seen||new Map();}activePostFlushCbs.sort(function(a,b){return getId(a)-getId(b);});for(postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){if(process.env.NODE_ENV!=='production'&&checkRecursiveUpdates(seen,activePostFlushCbs[postFlushIndex])){continue;}activePostFlushCbs[postFlushIndex]();}activePostFlushCbs=null;postFlushIndex=0;}}var getId=function getId(job){return job.id==null?Infinity:job.id;};function flushJobs(seen){isFlushPending=false;isFlushing=true;if(process.env.NODE_ENV!=='production'){seen=seen||new Map();}flushPreFlushCbs(seen);// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
queue.sort(function(a,b){return getId(a)-getId(b);});// conditional usage of checkRecursiveUpdate must be determined out of
// try ... catch block since Rollup by default de-optimizes treeshaking
// inside try-catch. This can leave all warning code unshaked. Although
// they would get eventually shaken by a minifier like terser, some minifiers
// would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
var check=process.env.NODE_ENV!=='production'?function(job){return checkRecursiveUpdates(seen,job);}:NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){var job=queue[flushIndex];if(job&&job.active!==false){if(process.env.NODE_ENV!=='production'&&check(job)){continue;}// console.log(`running:`, job.id)
callWithErrorHandling(job,null,14/* SCHEDULER */);}}}finally{flushIndex=0;queue.length=0;flushPostFlushCbs(seen);isFlushing=false;currentFlushPromise=null;// some postFlushCb queued jobs!
// keep flushing until it drains.
if(queue.length||pendingPreFlushCbs.length||pendingPostFlushCbs.length){flushJobs(seen);}}}function checkRecursiveUpdates(seen,fn){if(!seen.has(fn)){seen.set(fn,1);}else{var count=seen.get(fn);if(count>RECURSION_LIMIT){var instance=fn.ownerInstance;var componentName=instance&&getComponentName(instance.type);warn$1('Maximum recursive updates exceeded'+(componentName?' in component <'+componentName+'>':'')+'. '+'This means you have a reactive effect that is mutating its own '+'dependencies and thus recursively triggering itself. Possible sources '+'include component template, render function, updated hook or '+'watcher source function.');return true;}else{seen.set(fn,count+1);}}}/* eslint-disable no-restricted-globals */var isHmrUpdating=false;var hmrDirtyComponents=new Set();// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if(process.env.NODE_ENV!=='production'){getGlobalThis().__VUE_HMR_RUNTIME__={createRecord:tryWrap(createRecord),rerender:tryWrap(rerender),reload:tryWrap(reload)};}var map=new Map();function registerHMR(instance){var id=instance.type.__hmrId;var record=map.get(id);if(!record){createRecord(id,instance.type);record=map.get(id);}record.instances.add(instance);}function unregisterHMR(instance){map.get(instance.type.__hmrId).instances.delete(instance);}function createRecord(id,initialDef){if(map.has(id)){return false;}map.set(id,{initialDef:normalizeClassComponent(initialDef),instances:new Set()});return true;}function normalizeClassComponent(component){return isClassComponent(component)?component.__vccOpts:component;}function rerender(id,newRender){var record=map.get(id);if(!record){return;}// update initial record (for not-yet-rendered component)
record.initialDef.render=newRender;[].concat(toConsumableArray(record.instances)).forEach(function(instance){if(newRender){instance.render=newRender;normalizeClassComponent(instance.type).render=newRender;}instance.renderCache=[];// this flag forces child components with slot content to update
isHmrUpdating=true;instance.update();isHmrUpdating=false;});}function reload(id,newComp){var record=map.get(id);if(!record)return;newComp=normalizeClassComponent(newComp);// update initial def (for not-yet-rendered components)
updateComponentDef(record.initialDef,newComp);// create a snapshot which avoids the set being mutated during updates
var instances=[].concat(toConsumableArray(record.instances));var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=instances[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var instance=_step3.value;var oldComp=normalizeClassComponent(instance.type);if(!hmrDirtyComponents.has(oldComp)){// 1. Update existing comp definition to match new one
if(oldComp!==record.initialDef){updateComponentDef(oldComp,newComp);}// 2. mark definition dirty. This forces the renderer to replace the
// component on patch.
hmrDirtyComponents.add(oldComp);}// 3. invalidate options resolution cache
instance.appContext.optionsCache.delete(instance.type);// 4. actually update
if(instance.ceReload){// custom element
hmrDirtyComponents.add(oldComp);instance.ceReload(newComp.styles);hmrDirtyComponents.delete(oldComp);}else if(instance.parent){// 4. Force the parent instance to re-render. This will cause all updated
// components to be unmounted and re-mounted. Queue the update so that we
// don't end up forcing the same parent to re-render multiple times.
queueJob(instance.parent.update);// instance is the inner component of an async custom element
// invoke to reset styles
if(instance.parent.type.__asyncLoader&&instance.parent.ceReload){instance.parent.ceReload(newComp.styles);}}else if(instance.appContext.reload){// root instance mounted via createApp() has a reload method
instance.appContext.reload();}else if(typeof window!=='undefined'){// root instance inside tree created via raw render(). Force reload.
window.location.reload();}else{console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');}}// 5. make sure to cleanup dirty hmr components after update
}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}queuePostFlushCb(function(){var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=instances[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var instance=_step4.value;hmrDirtyComponents.delete(normalizeClassComponent(instance.type));}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}});}function updateComponentDef(oldComp,newComp){extend(oldComp,newComp);for(var key in oldComp){if(key!=='__file'&&!(key in newComp)){delete oldComp[key];}}}function tryWrap(fn){return function(id,arg){try{return fn(id,arg);}catch(e){console.error(e);console.warn('[HMR] Something went wrong during Vue component hot-reload. '+'Full reload required.');}};}var devtools=void 0;var buffer=[];var devtoolsNotInstalled=false;function emit(event){for(var _len5=arguments.length,args=Array(_len5>1?_len5-1:0),_key6=1;_key6<_len5;_key6++){args[_key6-1]=arguments[_key6];}if(devtools){var _devtools;(_devtools=devtools).emit.apply(_devtools,[event].concat(args));}else if(!devtoolsNotInstalled){buffer.push({event:event,args:args});}}function setDevtoolsHook(hook,target){var _a,_b;devtools=hook;if(devtools){devtools.enabled=true;buffer.forEach(function(_ref9){var _devtools2;var event=_ref9.event,args=_ref9.args;return(_devtools2=devtools).emit.apply(_devtools2,[event].concat(toConsumableArray(args)));});buffer=[];}else if(// handle late devtools injection - only do this if we are in an actual
// browser environment to avoid the timer handle stalling test runner exit
// (#4815)
// eslint-disable-next-line no-restricted-globals
typeof window!=='undefined'&&// some envs mock window but not fully
window.HTMLElement&&// also exclude jsdom
!((_b=(_a=window.navigator)===null||_a===void 0?void 0:_a.userAgent)===null||_b===void 0?void 0:_b.includes('jsdom'))){var replay=target.__VUE_DEVTOOLS_HOOK_REPLAY__=target.__VUE_DEVTOOLS_HOOK_REPLAY__||[];replay.push(function(newHook){setDevtoolsHook(newHook,target);});// clear buffer after 3s - the user probably doesn't have devtools installed
// at all, and keeping the buffer will cause memory leaks (#4738)
setTimeout(function(){if(!devtools){target.__VUE_DEVTOOLS_HOOK_REPLAY__=null;devtoolsNotInstalled=true;buffer=[];}},3000);}else{// non-browser env, assume not installed
devtoolsNotInstalled=true;buffer=[];}}function devtoolsInitApp(app,version){emit("app:init"/* APP_INIT */,app,version,{Fragment:Fragment,Text:Text,Comment:Comment,Static:Static});}function devtoolsUnmountApp(app){emit("app:unmount"/* APP_UNMOUNT */,app);}var devtoolsComponentAdded=/*#__PURE__*/createDevtoolsComponentHook("component:added"/* COMPONENT_ADDED */);var devtoolsComponentUpdated=/*#__PURE__*/createDevtoolsComponentHook("component:updated"/* COMPONENT_UPDATED */);var devtoolsComponentRemoved=/*#__PURE__*/createDevtoolsComponentHook("component:removed"/* COMPONENT_REMOVED */);function createDevtoolsComponentHook(hook){return function(component){emit(hook,component.appContext.app,component.uid,component.parent?component.parent.uid:undefined,component);};}var devtoolsPerfStart=/*#__PURE__*/createDevtoolsPerformanceHook("perf:start"/* PERFORMANCE_START */);var devtoolsPerfEnd=/*#__PURE__*/createDevtoolsPerformanceHook("perf:end"/* PERFORMANCE_END */);function createDevtoolsPerformanceHook(hook){return function(component,type,time){emit(hook,component.appContext.app,component.uid,component,type,time);};}function devtoolsComponentEmit(component,event,params){emit("component:emit"/* COMPONENT_EMIT */,component.appContext.app,component,event,params);}var deprecationData=(_deprecationData={}, defineProperty(_deprecationData,"GLOBAL_MOUNT"/* GLOBAL_MOUNT */,{message:'The global app bootstrapping API has changed: vm.$mount() and the "el" '+'option have been removed. Use createApp(RootComponent).mount() instead.',link:'https://v3-migration.vuejs.org/breaking-changes/global-api.html#mounting-app-instance'}), defineProperty(_deprecationData,"GLOBAL_MOUNT_CONTAINER"/* GLOBAL_MOUNT_CONTAINER */,{message:'Vue detected directives on the mount container. '+'In Vue 3, the container is no longer considered part of the template '+'and will not be processed/replaced.',link:'https://v3-migration.vuejs.org/breaking-changes/mount-changes.html'}), defineProperty(_deprecationData,"GLOBAL_EXTEND"/* GLOBAL_EXTEND */,{message:'Vue.extend() has been removed in Vue 3. '+'Use defineComponent() instead.',link:'https://vuejs.org/api/general.html#definecomponent'}), defineProperty(_deprecationData,"GLOBAL_PROTOTYPE"/* GLOBAL_PROTOTYPE */,{message:'Vue.prototype is no longer available in Vue 3. '+'Use app.config.globalProperties instead.',link:'https://v3-migration.vuejs.org/breaking-changes/global-api.html#vue-prototype-replaced-by-config-globalproperties'}), defineProperty(_deprecationData,"GLOBAL_SET"/* GLOBAL_SET */,{message:'Vue.set() has been removed as it is no longer needed in Vue 3. '+'Simply use native JavaScript mutations.'}), defineProperty(_deprecationData,"GLOBAL_DELETE"/* GLOBAL_DELETE */,{message:'Vue.delete() has been removed as it is no longer needed in Vue 3. '+'Simply use native JavaScript mutations.'}), defineProperty(_deprecationData,"GLOBAL_OBSERVABLE"/* GLOBAL_OBSERVABLE */,{message:'Vue.observable() has been removed. '+'Use `import { reactive } from "vue"` from Composition API instead.',link:'https://vuejs.org/api/reactivity-core.html#reactive'}), defineProperty(_deprecationData,"GLOBAL_PRIVATE_UTIL"/* GLOBAL_PRIVATE_UTIL */,{message:'Vue.util has been removed. Please refactor to avoid its usage '+'since it was an internal API even in Vue 2.'}), defineProperty(_deprecationData,"CONFIG_SILENT"/* CONFIG_SILENT */,{message:'config.silent has been removed because it is not good practice to '+'intentionally suppress warnings. You can use your browser console\'s '+'filter features to focus on relevant messages.'}), defineProperty(_deprecationData,"CONFIG_DEVTOOLS"/* CONFIG_DEVTOOLS */,{message:'config.devtools has been removed. To enable devtools for '+'production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.',link:'https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags'}), defineProperty(_deprecationData,"CONFIG_KEY_CODES"/* CONFIG_KEY_CODES */,{message:'config.keyCodes has been removed. '+'In Vue 3, you can directly use the kebab-case key names as v-on modifiers.',link:'https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html'}), defineProperty(_deprecationData,"CONFIG_PRODUCTION_TIP"/* CONFIG_PRODUCTION_TIP */,{message:'config.productionTip has been removed.',link:'https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed'}), defineProperty(_deprecationData,"CONFIG_IGNORED_ELEMENTS"/* CONFIG_IGNORED_ELEMENTS */,{message:function message(){var msg='config.ignoredElements has been removed.';if(isRuntimeOnly()){msg+=' Pass the "isCustomElement" option to @vue/compiler-dom instead.';}else{msg+=' Use config.isCustomElement instead.';}return msg;},link:'https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement'}), defineProperty(_deprecationData,"CONFIG_WHITESPACE"/* CONFIG_WHITESPACE */,{// this warning is only relevant in the full build when using runtime
// compilation, so it's put in the runtime compatConfig list.
message:'Vue 3 compiler\'s whitespace option will default to "condense" instead of '+'"preserve". To suppress this warning, provide an explicit value for '+'`config.compilerOptions.whitespace`.'}), defineProperty(_deprecationData,"CONFIG_OPTION_MERGE_STRATS"/* CONFIG_OPTION_MERGE_STRATS */,{message:'config.optionMergeStrategies no longer exposes internal strategies. '+'Use custom merge functions instead.'}), defineProperty(_deprecationData,"INSTANCE_SET"/* INSTANCE_SET */,{message:'vm.$set() has been removed as it is no longer needed in Vue 3. '+'Simply use native JavaScript mutations.'}), defineProperty(_deprecationData,"INSTANCE_DELETE"/* INSTANCE_DELETE */,{message:'vm.$delete() has been removed as it is no longer needed in Vue 3. '+'Simply use native JavaScript mutations.'}), defineProperty(_deprecationData,"INSTANCE_DESTROY"/* INSTANCE_DESTROY */,{message:'vm.$destroy() has been removed. Use app.unmount() instead.',link:'https://vuejs.org/api/application.html#app-unmount'}), defineProperty(_deprecationData,"INSTANCE_EVENT_EMITTER"/* INSTANCE_EVENT_EMITTER */,{message:'vm.$on/$once/$off() have been removed. '+'Use an external event emitter library instead.',link:'https://v3-migration.vuejs.org/breaking-changes/events-api.html'}), defineProperty(_deprecationData,"INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,{message:function message(event){return'"'+event+'" lifecycle events are no longer supported. From templates, '+('use the "vnode" prefix instead of "hook:". For example, @'+event+' ')+('should be changed to @vnode-'+event.slice(5)+'. ')+'From JavaScript, use Composition API to dynamically register lifecycle '+'hooks.';},link:'https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html'}), defineProperty(_deprecationData,"INSTANCE_CHILDREN"/* INSTANCE_CHILDREN */,{message:'vm.$children has been removed. Consider refactoring your logic '+'to avoid relying on direct access to child components.',link:'https://v3-migration.vuejs.org/breaking-changes/children.html'}), defineProperty(_deprecationData,"INSTANCE_LISTENERS"/* INSTANCE_LISTENERS */,{message:'vm.$listeners has been removed. In Vue 3, parent v-on listeners are '+'included in vm.$attrs and it is no longer necessary to separately use '+'v-on="$listeners" if you are already using v-bind="$attrs". '+'(Note: the Vue 3 behavior only applies if this compat config is disabled)',link:'https://v3-migration.vuejs.org/breaking-changes/listeners-removed.html'}), defineProperty(_deprecationData,"INSTANCE_SCOPED_SLOTS"/* INSTANCE_SCOPED_SLOTS */,{message:'vm.$scopedSlots has been removed. Use vm.$slots instead.',link:'https://v3-migration.vuejs.org/breaking-changes/slots-unification.html'}), defineProperty(_deprecationData,"INSTANCE_ATTRS_CLASS_STYLE"/* INSTANCE_ATTRS_CLASS_STYLE */,{message:function message(componentName){return'Component <'+(componentName||'Anonymous')+'> has `inheritAttrs: false` but is '+'relying on class/style fallthrough from parent. In Vue 3, class/style '+'are now included in $attrs and will no longer fallthrough when '+'inheritAttrs is false. If you are already using v-bind="$attrs" on '+'component root it should render the same end result. '+'If you are binding $attrs to a non-root element and expecting '+'class/style to fallthrough on root, you will need to now manually bind '+'them on root via :class="$attrs.class".';},link:'https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html'}), defineProperty(_deprecationData,"OPTIONS_DATA_FN"/* OPTIONS_DATA_FN */,{message:'The "data" option can no longer be a plain object. '+'Always use a function.',link:'https://v3-migration.vuejs.org/breaking-changes/data-option.html'}), defineProperty(_deprecationData,"OPTIONS_DATA_MERGE"/* OPTIONS_DATA_MERGE */,{message:function message(key){return'Detected conflicting key "'+key+'" when merging data option values. '+'In Vue 3, data keys are merged shallowly and will override one another.';},link:'https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change'}), defineProperty(_deprecationData,"OPTIONS_BEFORE_DESTROY"/* OPTIONS_BEFORE_DESTROY */,{message:'`beforeDestroy` has been renamed to `beforeUnmount`.'}), defineProperty(_deprecationData,"OPTIONS_DESTROYED"/* OPTIONS_DESTROYED */,{message:'`destroyed` has been renamed to `unmounted`.'}), defineProperty(_deprecationData,"WATCH_ARRAY"/* WATCH_ARRAY */,{message:'"watch" option or vm.$watch on an array value will no longer '+'trigger on array mutation unless the "deep" option is specified. '+'If current usage is intended, you can disable the compat behavior and '+'suppress this warning with:'+('\n\n  configureCompat({ '+"WATCH_ARRAY"/* WATCH_ARRAY */+': false })\n'),link:'https://v3-migration.vuejs.org/breaking-changes/watch.html'}), defineProperty(_deprecationData,"PROPS_DEFAULT_THIS"/* PROPS_DEFAULT_THIS */,{message:function message(key){return'props default value function no longer has access to "this". The compat '+'build only offers access to this.$options.'+('(found in prop "'+key+'")');},link:'https://v3-migration.vuejs.org/breaking-changes/props-default-this.html'}), defineProperty(_deprecationData,"CUSTOM_DIR"/* CUSTOM_DIR */,{message:function message(legacyHook,newHook){return'Custom directive hook "'+legacyHook+'" has been removed. '+('Use "'+newHook+'" instead.');},link:'https://v3-migration.vuejs.org/breaking-changes/custom-directives.html'}), defineProperty(_deprecationData,"V_ON_KEYCODE_MODIFIER"/* V_ON_KEYCODE_MODIFIER */,{message:'Using keyCode as v-on modifier is no longer supported. '+'Use kebab-case key name modifiers instead.',link:'https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html'}), defineProperty(_deprecationData,"ATTR_FALSE_VALUE"/* ATTR_FALSE_VALUE */,{message:function message(name){return'Attribute "'+name+'" with v-bind value `false` will render '+(name+'="false" instead of removing it in Vue 3. To remove the attribute, ')+'use `null` or `undefined` instead. If the usage is intended, '+'you can disable the compat behavior and suppress this warning with:'+('\n\n  configureCompat({ '+"ATTR_FALSE_VALUE"/* ATTR_FALSE_VALUE */+': false })\n');},link:'https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html'}), defineProperty(_deprecationData,"ATTR_ENUMERATED_COERCION"/* ATTR_ENUMERATED_COERCION */,{message:function message(name,value,coerced){return'Enumerated attribute "'+name+'" with v-bind value `'+value+'` will '+((value===null?'be removed':'render the value as-is')+' instead of coercing the value to "'+coerced+'" in Vue 3. ')+'Always use explicit "true" or "false" values for enumerated attributes. '+'If the usage is intended, '+'you can disable the compat behavior and suppress this warning with:'+('\n\n  configureCompat({ '+"ATTR_ENUMERATED_COERCION"/* ATTR_ENUMERATED_COERCION */+': false })\n');},link:'https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html'}), defineProperty(_deprecationData,"TRANSITION_CLASSES"/* TRANSITION_CLASSES */,{message:''// this feature cannot be runtime-detected
}), defineProperty(_deprecationData,"TRANSITION_GROUP_ROOT"/* TRANSITION_GROUP_ROOT */,{message:'<TransitionGroup> no longer renders a root <span> element by '+'default if no "tag" prop is specified. If you do not rely on the span '+'for styling, you can disable the compat behavior and suppress this '+'warning with:'+('\n\n  configureCompat({ '+"TRANSITION_GROUP_ROOT"/* TRANSITION_GROUP_ROOT */+': false })\n'),link:'https://v3-migration.vuejs.org/breaking-changes/transition-group.html'}), defineProperty(_deprecationData,"COMPONENT_ASYNC"/* COMPONENT_ASYNC */,{message:function message(comp){var name=getComponentName(comp);return'Async component'+(name?' <'+name+'>':'s')+' should be explicitly created via `defineAsyncComponent()` '+'in Vue 3. Plain functions will be treated as functional components in '+'non-compat build. If you have already migrated all async component '+'usage and intend to use plain functions for functional components, '+'you can disable the compat behavior and suppress this '+'warning with:'+('\n\n  configureCompat({ '+"COMPONENT_ASYNC"/* COMPONENT_ASYNC */+': false })\n');},link:'https://v3-migration.vuejs.org/breaking-changes/async-components.html'}), defineProperty(_deprecationData,"COMPONENT_FUNCTIONAL"/* COMPONENT_FUNCTIONAL */,{message:function message(comp){var name=getComponentName(comp);return'Functional component'+(name?' <'+name+'>':'s')+' should be defined as a plain function in Vue 3. The "functional" '+'option has been removed. NOTE: Before migrating to use plain '+'functions for functional components, first make sure that all async '+'components usage have been migrated and its compat behavior has '+'been disabled.';},link:'https://v3-migration.vuejs.org/breaking-changes/functional-components.html'}), defineProperty(_deprecationData,"COMPONENT_V_MODEL"/* COMPONENT_V_MODEL */,{message:function message(comp){var configMsg='opt-in to '+('Vue 3 behavior on a per-component basis with `compatConfig: { '+"COMPONENT_V_MODEL"/* COMPONENT_V_MODEL */+': false }`.');if(comp.props&&(isArray(comp.props)?comp.props.includes('modelValue'):hasOwn(comp.props,'modelValue'))){return'Component declares "modelValue" prop, which is Vue 3 usage, but '+('is running under Vue 2 compat v-model behavior. You can '+configMsg);}return'v-model usage on component has changed in Vue 3. Component that expects '+'to work with v-model should now use the "modelValue" prop and emit the '+('"update:modelValue" event. You can update the usage and then '+configMsg);},link:'https://v3-migration.vuejs.org/breaking-changes/v-model.html'}), defineProperty(_deprecationData,"RENDER_FUNCTION"/* RENDER_FUNCTION */,{message:'Vue 3\'s render function API has changed. '+'You can opt-in to the new API with:'+('\n\n  configureCompat({ '+"RENDER_FUNCTION"/* RENDER_FUNCTION */+': false })\n')+'\n  (This can also be done per-component via the "compatConfig" option.)',link:'https://v3-migration.vuejs.org/breaking-changes/render-function-api.html'}), defineProperty(_deprecationData,"FILTERS"/* FILTERS */,{message:'filters have been removed in Vue 3. '+'The "|" symbol will be treated as native JavaScript bitwise OR operator. '+'Use method calls or computed properties instead.',link:'https://v3-migration.vuejs.org/breaking-changes/filters.html'}), defineProperty(_deprecationData,"PRIVATE_APIS"/* PRIVATE_APIS */,{message:function message(name){return'"'+name+'" is a Vue 2 private API that no longer exists in Vue 3. '+'If you are seeing this warning only due to a dependency, you can '+'suppress this warning via { PRIVATE_APIS: \'suppress-warning\' }.';}}), _deprecationData);var instanceWarned=Object.create(null);var warnCount=Object.create(null);function warnDeprecation(key,instance){if(!(process.env.NODE_ENV!=='production')){return;}instance=instance||getCurrentInstance();// check user config
var config=getCompatConfigForKey(key,instance);if(config==='suppress-warning'){return;}for(var _len6=arguments.length,args=Array(_len6>2?_len6-2:0),_key7=2;_key7<_len6;_key7++){args[_key7-2]=arguments[_key7];}var dupKey=key+args.join('');var compId=instance&&formatComponentName(instance,instance.type);if(compId==='Anonymous'&&instance){compId=instance.uid;}// skip if the same warning is emitted for the same component type
var componentDupKey=dupKey+compId;if(componentDupKey in instanceWarned){return;}instanceWarned[componentDupKey]=true;// same warning, but different component. skip the long message and just
// log the key and count.
if(dupKey in warnCount){warn$1('(deprecation '+key+') ('+(++warnCount[dupKey]+1)+')');return;}warnCount[dupKey]=0;var _deprecationData$key=deprecationData[key],message=_deprecationData$key.message,link=_deprecationData$key.link;warn$1('(deprecation '+key+') '+(typeof message==='function'?message.apply(undefined,args):message)+(link?'\n  Details: '+link:''));if(!isCompatEnabled(key,instance,true)){console.error('^ The above deprecation\'s compat behavior is disabled and will likely '+'lead to runtime errors.');}}var globalCompatConfig={MODE:2};function configureCompat(config){if(process.env.NODE_ENV!=='production'){validateCompatConfig(config);}extend(globalCompatConfig,config);}var seenConfigObjects=/*#__PURE__*/new WeakSet();var warnedInvalidKeys={};// dev only
function validateCompatConfig(config,instance){if(seenConfigObjects.has(config)){return;}seenConfigObjects.add(config);var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=Object.keys(config)[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var key=_step5.value;if(key!=='MODE'&&!(key in deprecationData)&&!(key in warnedInvalidKeys)){if(key.startsWith('COMPILER_')){if(isRuntimeOnly()){warn$1('Deprecation config "'+key+'" is compiler-specific and you are '+'running a runtime-only build of Vue. This deprecation should be '+'configured via compiler options in your build setup instead.\n'+'Details: https://v3-migration.vuejs.org/breaking-changes/migration-build.html');}}else{warn$1('Invalid deprecation config "'+key+'".');}warnedInvalidKeys[key]=true;}}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}if(instance&&config["OPTIONS_DATA_MERGE"/* OPTIONS_DATA_MERGE */]!=null){warn$1('Deprecation config "'+"OPTIONS_DATA_MERGE"/* OPTIONS_DATA_MERGE */+'" can only be configured globally.');}}function getCompatConfigForKey(key,instance){var instanceConfig=instance&&instance.type.compatConfig;if(instanceConfig&&key in instanceConfig){return instanceConfig[key];}return globalCompatConfig[key];}function isCompatEnabled(key,instance){var enableForBuiltIn=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// skip compat for built-in components
if(!enableForBuiltIn&&instance&&instance.type.__isBuiltIn){return false;}var rawMode=getCompatConfigForKey('MODE',instance)||2;var val=getCompatConfigForKey(key,instance);var mode=isFunction(rawMode)?rawMode(instance&&instance.type):rawMode;if(mode===2){return val!==false;}else{return val===true||val==='suppress-warning';}}/**
 * Use this for features that are completely removed in non-compat build.
 */function assertCompatEnabled(key,instance){if(!isCompatEnabled(key,instance)){throw new Error(key+' compat has been disabled.');}else if(process.env.NODE_ENV!=='production'){for(var _len7=arguments.length,args=Array(_len7>2?_len7-2:0),_key8=2;_key8<_len7;_key8++){args[_key8-2]=arguments[_key8];}warnDeprecation.apply(undefined,[key,instance].concat(args));}}/**
 * Use this for features where legacy usage is still possible, but will likely
 * lead to runtime error if compat is disabled. (warn in all cases)
 */function softAssertCompatEnabled(key,instance){if(process.env.NODE_ENV!=='production'){for(var _len8=arguments.length,args=Array(_len8>2?_len8-2:0),_key9=2;_key9<_len8;_key9++){args[_key9-2]=arguments[_key9];}warnDeprecation.apply(undefined,[key,instance].concat(args));}return isCompatEnabled(key,instance);}/**
 * Use this for features with the same syntax but with mutually exclusive
 * behavior in 2 vs 3. Only warn if compat is enabled.
 * e.g. render function
 */function checkCompatEnabled(key,instance){var enabled=isCompatEnabled(key,instance);if(process.env.NODE_ENV!=='production'&&enabled){for(var _len9=arguments.length,args=Array(_len9>2?_len9-2:0),_key10=2;_key10<_len9;_key10++){args[_key10-2]=arguments[_key10];}warnDeprecation.apply(undefined,[key,instance].concat(args));}return enabled;}var eventRegistryMap=/*#__PURE__*/new WeakMap();function getRegistry(instance){var events=eventRegistryMap.get(instance);if(!events){eventRegistryMap.set(instance,events=Object.create(null));}return events;}function on(instance,event,fn){if(isArray(event)){event.forEach(function(e){return on(instance,e,fn);});}else{if(event.startsWith('hook:')){assertCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance,event);}else{assertCompatEnabled("INSTANCE_EVENT_EMITTER"/* INSTANCE_EVENT_EMITTER */,instance);}var events=getRegistry(instance);(events[event]||(events[event]=[])).push(fn);}return instance.proxy;}function once(instance,event,fn){var wrapped=function wrapped(){for(var _len10=arguments.length,args=Array(_len10),_key11=0;_key11<_len10;_key11++){args[_key11]=arguments[_key11];}off(instance,event,wrapped);fn.call.apply(fn,[instance.proxy].concat(args));};wrapped.fn=fn;on(instance,event,wrapped);return instance.proxy;}function off(instance,event,fn){assertCompatEnabled("INSTANCE_EVENT_EMITTER"/* INSTANCE_EVENT_EMITTER */,instance);var vm=instance.proxy;// all
if(!event){eventRegistryMap.set(instance,Object.create(null));return vm;}// array of events
if(isArray(event)){event.forEach(function(e){return off(instance,e,fn);});return vm;}// specific event
var events=getRegistry(instance);var cbs=events[event];if(!cbs){return vm;}if(!fn){events[event]=undefined;return vm;}events[event]=cbs.filter(function(cb){return!(cb===fn||cb.fn===fn);});return vm;}function emit$1(instance,event,args){var cbs=getRegistry(instance)[event];if(cbs){callWithAsyncErrorHandling(cbs.map(function(cb){return cb.bind(instance.proxy);}),instance,6/* COMPONENT_EVENT_HANDLER */,args);}return instance.proxy;}var compatModelEventPrefix='onModelCompat:';var warnedTypes=new WeakSet();function convertLegacyVModelProps(vnode){var type=vnode.type,shapeFlag=vnode.shapeFlag,props=vnode.props,dynamicProps=vnode.dynamicProps;var comp=type;if(shapeFlag&6/* COMPONENT */&&props&&'modelValue'in props){if(!isCompatEnabled("COMPONENT_V_MODEL"/* COMPONENT_V_MODEL */,// this is a special case where we want to use the vnode component's
// compat config instead of the current rendering instance (which is the
// parent of the component that exposes v-model)
{type:type})){return;}if(process.env.NODE_ENV!=='production'&&!warnedTypes.has(comp)){pushWarningContext(vnode);warnDeprecation("COMPONENT_V_MODEL"/* COMPONENT_V_MODEL */,{type:type},comp);popWarningContext();warnedTypes.add(comp);}// v3 compiled model code -> v2 compat props
// modelValue -> value
// onUpdate:modelValue -> onModelCompat:input
var model=comp.model||{};applyModelFromMixins(model,comp.mixins);var _model$prop=model.prop,prop=_model$prop===undefined?'value':_model$prop,_model$event=model.event,event=_model$event===undefined?'input':_model$event;if(prop!=='modelValue'){props[prop]=props.modelValue;delete props.modelValue;}// important: update dynamic props
if(dynamicProps){dynamicProps[dynamicProps.indexOf('modelValue')]=prop;}props[compatModelEventPrefix+event]=props['onUpdate:modelValue'];delete props['onUpdate:modelValue'];}}function applyModelFromMixins(model,mixins){if(mixins){mixins.forEach(function(m){if(m.model)extend(model,m.model);if(m.mixins)applyModelFromMixins(model,m.mixins);});}}function compatModelEmit(instance,event,args){if(!isCompatEnabled("COMPONENT_V_MODEL"/* COMPONENT_V_MODEL */,instance)){return;}var props=instance.vnode.props;var modelHandler=props&&props[compatModelEventPrefix+event];if(modelHandler){callWithErrorHandling(modelHandler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}}function emit$2(instance,event){var props=instance.vnode.props||EMPTY_OBJ;for(var _len11=arguments.length,rawArgs=Array(_len11>2?_len11-2:0),_key12=2;_key12<_len11;_key12++){rawArgs[_key12-2]=arguments[_key12];}if(process.env.NODE_ENV!=='production'){var emitsOptions=instance.emitsOptions,_instance$propsOption=slicedToArray(instance.propsOptions,1),propsOptions=_instance$propsOption[0];if(emitsOptions){if(!(event in emitsOptions)&&!(event.startsWith('hook:')||event.startsWith(compatModelEventPrefix))){if(!propsOptions||!(toHandlerKey(event)in propsOptions)){warn$1('Component emitted event "'+event+'" but it is neither declared in '+('the emits option nor as an "'+toHandlerKey(event)+'" prop.'));}}else{var validator=emitsOptions[event];if(isFunction(validator)){var isValid=validator.apply(undefined,rawArgs);if(!isValid){warn$1('Invalid event arguments: event validation failed for event "'+event+'".');}}}}}var args=rawArgs;var isModelListener=event.startsWith('update:');// for v-model update:xxx events, apply modifiers on args
var modelArg=isModelListener&&event.slice(7);if(modelArg&&modelArg in props){var modifiersKey=(modelArg==='modelValue'?'model':modelArg)+'Modifiers';var _ref10=props[modifiersKey]||EMPTY_OBJ,number=_ref10.number,trim=_ref10.trim;if(trim){args=rawArgs.map(function(a){return a.trim();});}else if(number){args=rawArgs.map(toNumber);}}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsComponentEmit(instance,event,args);}if(process.env.NODE_ENV!=='production'){var lowerCaseEvent=event.toLowerCase();if(lowerCaseEvent!==event&&props[toHandlerKey(lowerCaseEvent)]){warn$1('Event "'+lowerCaseEvent+'" is emitted in component '+(formatComponentName(instance,instance.type)+' but the handler is registered for "'+event+'". ')+'Note that HTML attributes are case-insensitive and you cannot use '+'v-on to listen to camelCase events when using in-DOM templates. '+('You should probably use "'+hyphenate(event)+'" instead of "'+event+'".'));}}var handlerName=void 0;var handler=props[handlerName=toHandlerKey(event)]||// also try camelCase event handler (#2249)
props[handlerName=toHandlerKey(camelize(event))];// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
if(!handler&&isModelListener){handler=props[handlerName=toHandlerKey(hyphenate(event))];}if(handler){callWithAsyncErrorHandling(handler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}var onceHandler=props[handlerName+'Once'];if(onceHandler){if(!instance.emitted){instance.emitted={};}else if(instance.emitted[handlerName]){return;}instance.emitted[handlerName]=true;callWithAsyncErrorHandling(onceHandler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}{compatModelEmit(instance,event,args);return emit$1(instance,event,args);}}function normalizeEmitsOptions(comp,appContext){var asMixin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var cache=appContext.emitsCache;var cached=cache.get(comp);if(cached!==undefined){return cached;}var raw=comp.emits;var normalized={};// apply mixin/extends props
var hasExtends=false;if(__VUE_OPTIONS_API__&&!isFunction(comp)){var extendEmits=function extendEmits(raw){var normalizedFromExtend=normalizeEmitsOptions(raw,appContext,true);if(normalizedFromExtend){hasExtends=true;extend(normalized,normalizedFromExtend);}};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendEmits);}if(comp.extends){extendEmits(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendEmits);}}if(!raw&&!hasExtends){cache.set(comp,null);return null;}if(isArray(raw)){raw.forEach(function(key){return normalized[key]=null;});}else{extend(normalized,raw);}cache.set(comp,normalized);return normalized;}// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options,key){if(!options||!isOn(key)){return false;}if(key.startsWith(compatModelEventPrefix)){return true;}key=key.slice(2).replace(/Once$/,'');return hasOwn(options,key[0].toLowerCase()+key.slice(1))||hasOwn(options,hyphenate(key))||hasOwn(options,key);}/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */var currentRenderingInstance=null;var currentScopeId=null;/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */function setCurrentRenderingInstance(instance){var prev=currentRenderingInstance;currentRenderingInstance=instance;currentScopeId=instance&&instance.type.__scopeId||null;// v2 pre-compiled components uses _scopeId instead of __scopeId
if(!currentScopeId){currentScopeId=instance&&instance.type._scopeId||null;}return prev;}/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */function pushScopeId(id){currentScopeId=id;}/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */function popScopeId(){currentScopeId=null;}/**
 * Only for backwards compat
 * @private
 */var withScopeId=function withScopeId(_id){return withCtx;};/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */function withCtx(fn)// true only
{var ctx=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentRenderingInstance;var isNonScopedSlot=arguments[2];if(!ctx)return fn;// already normalized
if(fn._n){return fn;}var renderFnWithContext=function renderFnWithContext(){// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
if(renderFnWithContext._d){setBlockTracking(-1);}var prevInstance=setCurrentRenderingInstance(ctx);var res=fn.apply(undefined,arguments);setCurrentRenderingInstance(prevInstance);if(renderFnWithContext._d){setBlockTracking(1);}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsComponentUpdated(ctx);}return res;};// mark normalized to avoid duplicated wrapping
renderFnWithContext._n=true;// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
renderFnWithContext._c=true;// disable block tracking by default
renderFnWithContext._d=true;// compat build only flag to distinguish scoped slots from non-scoped ones
if(isNonScopedSlot){renderFnWithContext._ns=true;}return renderFnWithContext;}/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */var accessedAttrs=false;function markAttrsAccessed(){accessedAttrs=true;}function renderComponentRoot(instance){var Component=instance.type,vnode=instance.vnode,proxy=instance.proxy,withProxy=instance.withProxy,props=instance.props,_instance$propsOption2=slicedToArray(instance.propsOptions,1),propsOptions=_instance$propsOption2[0],slots=instance.slots,attrs=instance.attrs,emit=instance.emit,render=instance.render,renderCache=instance.renderCache,data=instance.data,setupState=instance.setupState,ctx=instance.ctx,inheritAttrs=instance.inheritAttrs;var result=void 0;var fallthroughAttrs=void 0;var prev=setCurrentRenderingInstance(instance);if(process.env.NODE_ENV!=='production'){accessedAttrs=false;}try{if(vnode.shapeFlag&4/* STATEFUL_COMPONENT */){// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
var proxyToUse=withProxy||proxy;result=normalizeVNode(render.call(proxyToUse,proxyToUse,renderCache,props,setupState,data,ctx));fallthroughAttrs=attrs;}else{// functional
var _render=Component;// in dev, mark attrs accessed if optional props (attrs === props)
if(process.env.NODE_ENV!=='production'&&attrs===props){markAttrsAccessed();}result=normalizeVNode(_render.length>1?_render(props,process.env.NODE_ENV!=='production'?{get attrs(){markAttrsAccessed();return attrs;},slots:slots,emit:emit}:{attrs:attrs,slots:slots,emit:emit}):_render(props,null/* we know it doesn't need it */));fallthroughAttrs=Component.props?attrs:getFunctionalFallthrough(attrs);}}catch(err){blockStack.length=0;handleError(err,instance,1/* RENDER_FUNCTION */);result=createVNode(Comment);}// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
var root=result;var setRoot=undefined;if(process.env.NODE_ENV!=='production'&&result.patchFlag>0&&result.patchFlag&2048/* DEV_ROOT_FRAGMENT */){var _getChildRoot=getChildRoot(result);var _getChildRoot2=slicedToArray(_getChildRoot,2);root=_getChildRoot2[0];setRoot=_getChildRoot2[1];}if(fallthroughAttrs&&inheritAttrs!==false){var keys=Object.keys(fallthroughAttrs);var _root=root,shapeFlag=_root.shapeFlag;if(keys.length){if(shapeFlag&(1/* ELEMENT */|6/* COMPONENT */)){if(propsOptions&&keys.some(isModelListener)){// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
fallthroughAttrs=filterModelListeners(fallthroughAttrs,propsOptions);}root=cloneVNode(root,fallthroughAttrs);}else if(process.env.NODE_ENV!=='production'&&!accessedAttrs&&root.type!==Comment){var allAttrs=Object.keys(attrs);var eventAttrs=[];var extraAttrs=[];for(var i=0,l=allAttrs.length;i<l;i++){var key=allAttrs[i];if(isOn(key)){// ignore v-model handlers when they fail to fallthrough
if(!isModelListener(key)){// remove `on`, lowercase first letter to reflect event casing
// accurately
eventAttrs.push(key[2].toLowerCase()+key.slice(3));}}else{extraAttrs.push(key);}}if(extraAttrs.length){warn$1('Extraneous non-props attributes ('+(extraAttrs.join(', ')+') ')+'were passed to component but could not be automatically inherited '+'because component renders fragment or text root nodes.');}if(eventAttrs.length){warn$1('Extraneous non-emits event listeners ('+(eventAttrs.join(', ')+') ')+'were passed to component but could not be automatically inherited '+'because component renders fragment or text root nodes. '+'If the listener is intended to be a component custom event listener only, '+'declare it using the "emits" option.');}}}}if(isCompatEnabled("INSTANCE_ATTRS_CLASS_STYLE"/* INSTANCE_ATTRS_CLASS_STYLE */,instance)&&vnode.shapeFlag&4/* STATEFUL_COMPONENT */&&root.shapeFlag&(1/* ELEMENT */|6/* COMPONENT */)){var _ref11=vnode.props||{},cls=_ref11.class,style=_ref11.style;if(cls||style){if(process.env.NODE_ENV!=='production'&&inheritAttrs===false){warnDeprecation("INSTANCE_ATTRS_CLASS_STYLE"/* INSTANCE_ATTRS_CLASS_STYLE */,instance,getComponentName(instance.type));}root=cloneVNode(root,{class:cls,style:style});}}// inherit directives
if(vnode.dirs){if(process.env.NODE_ENV!=='production'&&!isElementRoot(root)){warn$1('Runtime directive used on component with non-element root node. '+'The directives will not function as intended.');}root.dirs=root.dirs?root.dirs.concat(vnode.dirs):vnode.dirs;}// inherit transition data
if(vnode.transition){if(process.env.NODE_ENV!=='production'&&!isElementRoot(root)){warn$1('Component inside <Transition> renders non-element root node '+'that cannot be animated.');}root.transition=vnode.transition;}if(process.env.NODE_ENV!=='production'&&setRoot){setRoot(root);}else{result=root;}setCurrentRenderingInstance(prev);return result;}/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */var getChildRoot=function getChildRoot(vnode){var rawChildren=vnode.children;var dynamicChildren=vnode.dynamicChildren;var childRoot=filterSingleRoot(rawChildren);if(!childRoot){return[vnode,undefined];}var index=rawChildren.indexOf(childRoot);var dynamicIndex=dynamicChildren?dynamicChildren.indexOf(childRoot):-1;var setRoot=function setRoot(updatedRoot){rawChildren[index]=updatedRoot;if(dynamicChildren){if(dynamicIndex>-1){dynamicChildren[dynamicIndex]=updatedRoot;}else if(updatedRoot.patchFlag>0){vnode.dynamicChildren=[].concat(toConsumableArray(dynamicChildren),[updatedRoot]);}}};return[normalizeVNode(childRoot),setRoot];};function filterSingleRoot(children){var singleRoot=void 0;for(var i=0;i<children.length;i++){var child=children[i];if(isVNode(child)){// ignore user comment
if(child.type!==Comment||child.children==='v-if'){if(singleRoot){// has more than 1 non-comment child, return now
return;}else{singleRoot=child;}}}else{return;}}return singleRoot;}var getFunctionalFallthrough=function getFunctionalFallthrough(attrs){var res=void 0;for(var key in attrs){if(key==='class'||key==='style'||isOn(key)){(res||(res={}))[key]=attrs[key];}}return res;};var filterModelListeners=function filterModelListeners(attrs,props){var res={};for(var key in attrs){if(!isModelListener(key)||!(key.slice(9)in props)){res[key]=attrs[key];}}return res;};var isElementRoot=function isElementRoot(vnode){return vnode.shapeFlag&(6/* COMPONENT */|1/* ELEMENT */)||vnode.type===Comment// potential v-if branch switch
;};function shouldUpdateComponent(prevVNode,nextVNode,optimized){var prevProps=prevVNode.props,prevChildren=prevVNode.children,component=prevVNode.component;var nextProps=nextVNode.props,nextChildren=nextVNode.children,patchFlag=nextVNode.patchFlag;var emits=component.emitsOptions;// Parent component's render function was hot-updated. Since this may have
// caused the child component's slots content to have changed, we need to
// force the child to update as well.
if(process.env.NODE_ENV!=='production'&&(prevChildren||nextChildren)&&isHmrUpdating){return true;}// force child update for runtime directive or transition on component vnode.
if(nextVNode.dirs||nextVNode.transition){return true;}if(optimized&&patchFlag>=0){if(patchFlag&1024/* DYNAMIC_SLOTS */){// slot content that references values that might have changed,
// e.g. in a v-for
return true;}if(patchFlag&16/* FULL_PROPS */){if(!prevProps){return!!nextProps;}// presence of this flag indicates props are always non-null
return hasPropsChanged(prevProps,nextProps,emits);}else if(patchFlag&8/* PROPS */){var dynamicProps=nextVNode.dynamicProps;for(var i=0;i<dynamicProps.length;i++){var key=dynamicProps[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emits,key)){return true;}}}}else{// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
if(prevChildren||nextChildren){if(!nextChildren||!nextChildren.$stable){return true;}}if(prevProps===nextProps){return false;}if(!prevProps){return!!nextProps;}if(!nextProps){return true;}return hasPropsChanged(prevProps,nextProps,emits);}return false;}function hasPropsChanged(prevProps,nextProps,emitsOptions){var nextKeys=Object.keys(nextProps);if(nextKeys.length!==Object.keys(prevProps).length){return true;}for(var i=0;i<nextKeys.length;i++){var key=nextKeys[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emitsOptions,key)){return true;}}return false;}function updateHOCHostEl(_ref12,el// HostNode
){var vnode=_ref12.vnode,parent=_ref12.parent;while(parent&&parent.subTree===vnode){(vnode=parent.vnode).el=el;parent=parent.parent;}}var isSuspense=function isSuspense(type){return type.__isSuspense;};// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
var SuspenseImpl={name:'Suspense',// In order to make Suspense tree-shakable, we need to avoid importing it
// directly in the renderer. The renderer checks for the __isSuspense flag
// on a vnode's type and calls the `process` method, passing in renderer
// internals.
__isSuspense:true,process:function process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,// platform-specific impl passed from renderer
rendererInternals){if(n1==null){mountSuspense(n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals);}else{patchSuspense(n1,n2,container,anchor,parentComponent,isSVG,slotScopeIds,optimized,rendererInternals);}},hydrate:hydrateSuspense,create:createSuspenseBoundary,normalize:normalizeSuspenseChildren};// Force-casted public typing for h and TSX props inference
var Suspense=SuspenseImpl;function triggerEvent(vnode,name){var eventListener=vnode.props&&vnode.props[name];if(isFunction(eventListener)){eventListener();}}function mountSuspense(vnode,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals){var patch=rendererInternals.p,createElement=rendererInternals.o.createElement;var hiddenContainer=createElement('div');var suspense=vnode.suspense=createSuspenseBoundary(vnode,parentSuspense,parentComponent,container,hiddenContainer,anchor,isSVG,slotScopeIds,optimized,rendererInternals);// start mounting the content subtree in an off-dom container
patch(null,suspense.pendingBranch=vnode.ssContent,hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds);// now check if we have encountered any async deps
if(suspense.deps>0){// has async
// invoke @fallback event
triggerEvent(vnode,'onPending');triggerEvent(vnode,'onFallback');// mount the fallback tree
patch(null,vnode.ssFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds);setActiveBranch(suspense,vnode.ssFallback);}else{// Suspense has no async deps. Just resolve.
suspense.resolve();}}function patchSuspense(n1,n2,container,anchor,parentComponent,isSVG,slotScopeIds,optimized,_ref13){var patch=_ref13.p,unmount=_ref13.um,createElement=_ref13.o.createElement;var suspense=n2.suspense=n1.suspense;suspense.vnode=n2;n2.el=n1.el;var newBranch=n2.ssContent;var newFallback=n2.ssFallback;var activeBranch=suspense.activeBranch,pendingBranch=suspense.pendingBranch,isInFallback=suspense.isInFallback,isHydrating=suspense.isHydrating;if(pendingBranch){suspense.pendingBranch=newBranch;if(isSameVNodeType(newBranch,pendingBranch)){// same root type but content may have changed.
patch(pendingBranch,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}else if(isInFallback){patch(activeBranch,newFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newFallback);}}else{// toggled before pending tree is resolved
suspense.pendingId++;if(isHydrating){// if toggled before hydration is finished, the current DOM tree is
// no longer valid. set it as the active branch so it will be unmounted
// when resolved
suspense.isHydrating=false;suspense.activeBranch=pendingBranch;}else{unmount(pendingBranch,parentComponent,suspense);}// increment pending ID. this is used to invalidate async callbacks
// reset suspense state
suspense.deps=0;// discard effects from pending branch
suspense.effects.length=0;// discard previous container
suspense.hiddenContainer=createElement('div');if(isInFallback){// already in fallback state
patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}else{patch(activeBranch,newFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newFallback);}}else if(activeBranch&&isSameVNodeType(newBranch,activeBranch)){// toggled "back" to current active branch
patch(activeBranch,newBranch,container,anchor,parentComponent,suspense,isSVG,slotScopeIds,optimized);// force resolve
suspense.resolve(true);}else{// switched to a 3rd branch
patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}}}}else{if(activeBranch&&isSameVNodeType(newBranch,activeBranch)){// root did not change, just normal patch
patch(activeBranch,newBranch,container,anchor,parentComponent,suspense,isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newBranch);}else{// root node toggled
// invoke @pending event
triggerEvent(n2,'onPending');// mount pending branch in off-dom container
suspense.pendingBranch=newBranch;suspense.pendingId++;patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){// incoming branch has no async deps, resolve now.
suspense.resolve();}else{var timeout=suspense.timeout,pendingId=suspense.pendingId;if(timeout>0){setTimeout(function(){if(suspense.pendingId===pendingId){suspense.fallback(newFallback);}},timeout);}else if(timeout===0){suspense.fallback(newFallback);}}}}}var hasWarned=false;function createSuspenseBoundary(vnode,parent,parentComponent,container,hiddenContainer,anchor,isSVG,slotScopeIds,optimized,rendererInternals){var isHydrating=arguments.length>10&&arguments[10]!==undefined?arguments[10]:false;/* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&!false&&!hasWarned){hasWarned=true;// @ts-ignore `console.info` cannot be null error
console[console.info?'info':'log']('<Suspense> is an experimental feature and its API will likely change.');}var patch=rendererInternals.p,_move=rendererInternals.m,_unmount2=rendererInternals.um,_next=rendererInternals.n,_rendererInternals$o=rendererInternals.o,parentNode=_rendererInternals$o.parentNode,remove=_rendererInternals$o.remove;var timeout=toNumber(vnode.props&&vnode.props.timeout);var suspense={vnode:vnode,parent:parent,parentComponent:parentComponent,isSVG:isSVG,container:container,hiddenContainer:hiddenContainer,anchor:anchor,deps:0,pendingId:0,timeout:typeof timeout==='number'?timeout:-1,activeBranch:null,pendingBranch:null,isInFallback:true,isHydrating:isHydrating,isUnmounted:false,effects:[],resolve:function resolve(){var resume=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(process.env.NODE_ENV!=='production'){if(!resume&&!suspense.pendingBranch){throw new Error('suspense.resolve() is called without a pending branch.');}if(suspense.isUnmounted){throw new Error('suspense.resolve() is called on an already unmounted suspense boundary.');}}var vnode=suspense.vnode,activeBranch=suspense.activeBranch,pendingBranch=suspense.pendingBranch,pendingId=suspense.pendingId,effects=suspense.effects,parentComponent=suspense.parentComponent,container=suspense.container;if(suspense.isHydrating){suspense.isHydrating=false;}else if(!resume){var delayEnter=activeBranch&&pendingBranch.transition&&pendingBranch.transition.mode==='out-in';if(delayEnter){activeBranch.transition.afterLeave=function(){if(pendingId===suspense.pendingId){_move(pendingBranch,container,_anchor,0/* ENTER */);}};}// this is initial anchor on mount
var _anchor=suspense.anchor;// unmount current active tree
if(activeBranch){// if the fallback tree was mounted, it may have been moved
// as part of a parent suspense. get the latest anchor for insertion
_anchor=_next(activeBranch);_unmount2(activeBranch,parentComponent,suspense,true);}if(!delayEnter){// move content from off-dom container to actual container
_move(pendingBranch,container,_anchor,0/* ENTER */);}}setActiveBranch(suspense,pendingBranch);suspense.pendingBranch=null;suspense.isInFallback=false;// flush buffered effects
// check if there is a pending parent suspense
var parent=suspense.parent;var hasUnresolvedAncestor=false;while(parent){if(parent.pendingBranch){var _parent$effects;// found a pending parent suspense, merge buffered post jobs
// into that parent
(_parent$effects=parent.effects).push.apply(_parent$effects,toConsumableArray(effects));hasUnresolvedAncestor=true;break;}parent=parent.parent;}// no pending parent suspense, flush all jobs
if(!hasUnresolvedAncestor){queuePostFlushCb(effects);}suspense.effects=[];// invoke @resolve event
triggerEvent(vnode,'onResolve');},fallback:function fallback(fallbackVNode){if(!suspense.pendingBranch){return;}var vnode=suspense.vnode,activeBranch=suspense.activeBranch,parentComponent=suspense.parentComponent,container=suspense.container,isSVG=suspense.isSVG;// invoke @fallback event
triggerEvent(vnode,'onFallback');var anchor=_next(activeBranch);var mountFallback=function mountFallback(){if(!suspense.isInFallback){return;}// mount the fallback tree
patch(null,fallbackVNode,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,fallbackVNode);};var delayEnter=fallbackVNode.transition&&fallbackVNode.transition.mode==='out-in';if(delayEnter){activeBranch.transition.afterLeave=mountFallback;}suspense.isInFallback=true;// unmount current active branch
_unmount2(activeBranch,parentComponent,null,// no suspense so unmount hooks fire now
true// shouldRemove
);if(!delayEnter){mountFallback();}},move:function move(container,anchor,type){suspense.activeBranch&&_move(suspense.activeBranch,container,anchor,type);suspense.container=container;},next:function next(){return suspense.activeBranch&&_next(suspense.activeBranch);},registerDep:function registerDep(instance,setupRenderEffect){var isInPendingSuspense=!!suspense.pendingBranch;if(isInPendingSuspense){suspense.deps++;}var hydratedEl=instance.vnode.el;instance.asyncDep.catch(function(err){handleError(err,instance,0/* SETUP_FUNCTION */);}).then(function(asyncSetupResult){// retry when the setup() promise resolves.
// component may have been unmounted before resolve.
if(instance.isUnmounted||suspense.isUnmounted||suspense.pendingId!==instance.suspenseId){return;}// retry from this component
instance.asyncResolved=true;var vnode=instance.vnode;if(process.env.NODE_ENV!=='production'){pushWarningContext(vnode);}handleSetupResult(instance,asyncSetupResult,false);if(hydratedEl){// vnode may have been replaced if an update happened before the
// async dep is resolved.
vnode.el=hydratedEl;}var placeholder=!hydratedEl&&instance.subTree.el;setupRenderEffect(instance,vnode,// component may have been moved before resolve.
// if this is not a hydration, instance.subTree will be the comment
// placeholder.
parentNode(hydratedEl||instance.subTree.el),// anchor will not be used if this is hydration, so only need to
// consider the comment placeholder case.
hydratedEl?null:_next(instance.subTree),suspense,isSVG,optimized);if(placeholder){remove(placeholder);}updateHOCHostEl(instance,vnode.el);if(process.env.NODE_ENV!=='production'){popWarningContext();}// only decrease deps count if suspense is not already resolved
if(isInPendingSuspense&&--suspense.deps===0){suspense.resolve();}});},unmount:function unmount(parentSuspense,doRemove){suspense.isUnmounted=true;if(suspense.activeBranch){_unmount2(suspense.activeBranch,parentComponent,parentSuspense,doRemove);}if(suspense.pendingBranch){_unmount2(suspense.pendingBranch,parentComponent,parentSuspense,doRemove);}}};return suspense;}function hydrateSuspense(node,vnode,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals,hydrateNode){/* eslint-disable no-restricted-globals */var suspense=vnode.suspense=createSuspenseBoundary(vnode,parentSuspense,parentComponent,node.parentNode,document.createElement('div'),null,isSVG,slotScopeIds,optimized,rendererInternals,true/* hydrating */);// there are two possible scenarios for server-rendered suspense:
// - success: ssr content should be fully resolved
// - failure: ssr content should be the fallback branch.
// however, on the client we don't really know if it has failed or not
// attempt to hydrate the DOM assuming it has succeeded, but we still
// need to construct a suspense boundary first
var result=hydrateNode(node,suspense.pendingBranch=vnode.ssContent,parentComponent,suspense,slotScopeIds,optimized);if(suspense.deps===0){suspense.resolve();}return result;/* eslint-enable no-restricted-globals */}function normalizeSuspenseChildren(vnode){var shapeFlag=vnode.shapeFlag,children=vnode.children;var isSlotChildren=shapeFlag&32;vnode.ssContent=normalizeSuspenseSlot(isSlotChildren?children.default:children);vnode.ssFallback=isSlotChildren?normalizeSuspenseSlot(children.fallback):createVNode(Comment);}function normalizeSuspenseSlot(s){var block=void 0;if(isFunction(s)){var trackBlock=isBlockTreeEnabled&&s._c;if(trackBlock){// disableTracking: false
// allow block tracking for compiled slots
// (see ./componentRenderContext.ts)
s._d=false;openBlock();}s=s();if(trackBlock){s._d=true;block=currentBlock;closeBlock();}}if(isArray(s)){var singleChild=filterSingleRoot(s);if(process.env.NODE_ENV!=='production'&&!singleChild){warn$1('<Suspense> slots expect a single root node.');}s=singleChild;}s=normalizeVNode(s);if(block&&!s.dynamicChildren){s.dynamicChildren=block.filter(function(c){return c!==s;});}return s;}function queueEffectWithSuspense(fn,suspense){if(suspense&&suspense.pendingBranch){if(isArray(fn)){var _suspense$effects;(_suspense$effects=suspense.effects).push.apply(_suspense$effects,toConsumableArray(fn));}else{suspense.effects.push(fn);}}else{queuePostFlushCb(fn);}}function setActiveBranch(suspense,branch){suspense.activeBranch=branch;var vnode=suspense.vnode,parentComponent=suspense.parentComponent;var el=vnode.el=branch.el;// in case suspense is the root node of a component,
// recursively update the HOC el
if(parentComponent&&parentComponent.subTree===vnode){parentComponent.vnode.el=el;updateHOCHostEl(parentComponent,el);}}function provide(key,value){if(!currentInstance){if(process.env.NODE_ENV!=='production'){warn$1('provide() can only be used inside setup().');}}else{var provides=currentInstance.provides;// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
var parentProvides=currentInstance.parent&&currentInstance.parent.provides;if(parentProvides===provides){provides=currentInstance.provides=Object.create(parentProvides);}// TS doesn't allow symbol as index type
provides[key]=value;}}function inject(key,defaultValue){var treatDefaultAsFactory=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
var instance=currentInstance||currentRenderingInstance;if(instance){// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the instance is at root
var provides=instance.parent==null?instance.vnode.appContext&&instance.vnode.appContext.provides:instance.parent.provides;if(provides&&key in provides){// TS doesn't allow symbol as index type
return provides[key];}else if(arguments.length>1){return treatDefaultAsFactory&&isFunction(defaultValue)?defaultValue.call(instance.proxy):defaultValue;}else if(process.env.NODE_ENV!=='production'){warn$1('injection "'+String(key)+'" not found.');}}else if(process.env.NODE_ENV!=='production'){warn$1('inject() can only be used inside setup() or functional components.');}}// Simple effect.
function watchEffect(effect,options){return doWatch(effect,null,options);}function watchPostEffect(effect,options){return doWatch(effect,null,process.env.NODE_ENV!=='production'?Object.assign(options||{},{flush:'post'}):{flush:'post'});}function watchSyncEffect(effect,options){return doWatch(effect,null,process.env.NODE_ENV!=='production'?Object.assign(options||{},{flush:'sync'}):{flush:'sync'});}// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE={};// implementation
function watch(source,cb,options){if(process.env.NODE_ENV!=='production'&&!isFunction(cb)){warn$1('`watch(fn, options?)` signature has been moved to a separate API. '+'Use `watchEffect(fn, options?)` instead. `watch` now only '+'supports `watch(source, cb, options?) signature.');}return doWatch(source,cb,options);}function doWatch(source,cb){var _ref14=arguments.length>2&&arguments[2]!==undefined?arguments[2]:EMPTY_OBJ,immediate=_ref14.immediate,deep=_ref14.deep,flush=_ref14.flush,onTrack=_ref14.onTrack,onTrigger=_ref14.onTrigger;if(process.env.NODE_ENV!=='production'&&!cb){if(immediate!==undefined){warn$1('watch() "immediate" option is only respected when using the '+'watch(source, callback, options?) signature.');}if(deep!==undefined){warn$1('watch() "deep" option is only respected when using the '+'watch(source, callback, options?) signature.');}}var warnInvalidSource=function warnInvalidSource(s){warn$1('Invalid watch source: ',s,'A watch source can only be a getter/effect function, a ref, '+'a reactive object, or an array of these types.');};var instance=currentInstance;var getter=void 0;var forceTrigger=false;var isMultiSource=false;if(isRef(source)){getter=function getter(){return source.value;};forceTrigger=isShallow(source);}else if(isReactive(source)){getter=function getter(){return source;};deep=true;}else if(isArray(source)){isMultiSource=true;forceTrigger=source.some(isReactive);getter=function getter(){return source.map(function(s){if(isRef(s)){return s.value;}else if(isReactive(s)){return traverse(s);}else if(isFunction(s)){return callWithErrorHandling(s,instance,2/* WATCH_GETTER */);}else{process.env.NODE_ENV!=='production'&&warnInvalidSource(s);}});};}else if(isFunction(source)){if(cb){// getter with cb
getter=function getter(){return callWithErrorHandling(source,instance,2/* WATCH_GETTER */);};}else{// no cb -> simple effect
getter=function getter(){if(instance&&instance.isUnmounted){return;}if(cleanup){cleanup();}return callWithAsyncErrorHandling(source,instance,3/* WATCH_CALLBACK */,[onCleanup]);};}}else{getter=NOOP;process.env.NODE_ENV!=='production'&&warnInvalidSource(source);}// 2.x array mutation watch compat
if(cb&&!deep){var baseGetter=getter;getter=function getter(){var val=baseGetter();if(isArray(val)&&checkCompatEnabled("WATCH_ARRAY"/* WATCH_ARRAY */,instance)){traverse(val);}return val;};}if(cb&&deep){var _baseGetter=getter;getter=function getter(){return traverse(_baseGetter());};}var cleanup=void 0;var onCleanup=function onCleanup(fn){cleanup=effect.onStop=function(){callWithErrorHandling(fn,instance,4/* WATCH_CLEANUP */);};};// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager
if(isInSSRComponentSetup){// we will also not call the invalidate callback (+ runner is not set up)
onCleanup=NOOP;if(!cb){getter();}else if(immediate){callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[getter(),isMultiSource?[]:undefined,onCleanup]);}return NOOP;}var oldValue=isMultiSource?[]:INITIAL_WATCHER_VALUE;var job=function job(){if(!effect.active){return;}if(cb){// watch(source, cb)
var newValue=effect.run();if(deep||forceTrigger||(isMultiSource?newValue.some(function(v,i){return hasChanged(v,oldValue[i]);}):hasChanged(newValue,oldValue))||isArray(newValue)&&isCompatEnabled("WATCH_ARRAY"/* WATCH_ARRAY */,instance)){// cleanup before running cb again
if(cleanup){cleanup();}callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[newValue,// pass undefined as the old value when it's changed for the first time
oldValue===INITIAL_WATCHER_VALUE?undefined:oldValue,onCleanup]);oldValue=newValue;}}else{// watchEffect
effect.run();}};// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
job.allowRecurse=!!cb;var scheduler=void 0;if(flush==='sync'){scheduler=job;// the scheduler function gets called directly
}else if(flush==='post'){scheduler=function scheduler(){return queuePostRenderEffect(job,instance&&instance.suspense);};}else{// default: 'pre'
scheduler=function scheduler(){if(!instance||instance.isMounted){queuePreFlushCb(job);}else{// with 'pre' option, the first call must happen before
// the component is mounted so it is called synchronously.
job();}};}var effect=new ReactiveEffect(getter,scheduler);if(process.env.NODE_ENV!=='production'){effect.onTrack=onTrack;effect.onTrigger=onTrigger;}// initial run
if(cb){if(immediate){job();}else{oldValue=effect.run();}}else if(flush==='post'){queuePostRenderEffect(effect.run.bind(effect),instance&&instance.suspense);}else{effect.run();}return function(){effect.stop();if(instance&&instance.scope){remove(instance.scope.effects,effect);}};}// this.$watch
function instanceWatch(source,value,options){var publicThis=this.proxy;var getter=isString(source)?source.includes('.')?createPathGetter(publicThis,source):function(){return publicThis[source];}:source.bind(publicThis,publicThis);var cb=void 0;if(isFunction(value)){cb=value;}else{cb=value.handler;options=value;}var cur=currentInstance;setCurrentInstance(this);var res=doWatch(getter,cb.bind(publicThis),options);if(cur){setCurrentInstance(cur);}else{unsetCurrentInstance();}return res;}function createPathGetter(ctx,path){var segments=path.split('.');return function(){var cur=ctx;for(var i=0;i<segments.length&&cur;i++){cur=cur[segments[i]];}return cur;};}function traverse(value,seen){if(!isObject(value)||value["__v_skip"/* SKIP */]){return value;}seen=seen||new Set();if(seen.has(value)){return value;}seen.add(value);if(isRef(value)){traverse(value.value,seen);}else if(isArray(value)){for(var i=0;i<value.length;i++){traverse(value[i],seen);}}else if(isSet(value)||isMap(value)){value.forEach(function(v){traverse(v,seen);});}else if(isPlainObject(value)){for(var key in value){traverse(value[key],seen);}}return value;}function useTransitionState(){var state={isMounted:false,isLeaving:false,isUnmounting:false,leavingVNodes:new Map()};onMounted(function(){state.isMounted=true;});onBeforeUnmount(function(){state.isUnmounting=true;});return state;}var TransitionHookValidator=[Function,Array];var BaseTransitionImpl={name:'BaseTransition',props:{mode:String,appear:Boolean,persisted:Boolean,// enter
onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,// leave
onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,// appear
onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup:function setup(props,_ref15){var slots=_ref15.slots;var instance=getCurrentInstance();var state=useTransitionState();var prevTransitionKey=void 0;return function(){var children=slots.default&&getTransitionRawChildren(slots.default(),true);if(!children||!children.length){return;}// warn multiple elements
if(process.env.NODE_ENV!=='production'&&children.length>1){warn$1('<transition> can only be used on a single element or component. Use '+'<transition-group> for lists.');}// there's no need to track reactivity for these props so use the raw
// props for a bit better perf
var rawProps=toRaw(props);var mode=rawProps.mode;// check mode
if(process.env.NODE_ENV!=='production'&&mode&&mode!=='in-out'&&mode!=='out-in'&&mode!=='default'){warn$1('invalid <transition> mode: '+mode);}// at this point children has a guaranteed length of 1.
var child=children[0];if(state.isLeaving){return emptyPlaceholder(child);}// in the case of <transition><keep-alive/></transition>, we need to
// compare the type of the kept-alive children.
var innerChild=getKeepAliveChild(child);if(!innerChild){return emptyPlaceholder(child);}var enterHooks=resolveTransitionHooks(innerChild,rawProps,state,instance);setTransitionHooks(innerChild,enterHooks);var oldChild=instance.subTree;var oldInnerChild=oldChild&&getKeepAliveChild(oldChild);var transitionKeyChanged=false;var getTransitionKey=innerChild.type.getTransitionKey;if(getTransitionKey){var key=getTransitionKey();if(prevTransitionKey===undefined){prevTransitionKey=key;}else if(key!==prevTransitionKey){prevTransitionKey=key;transitionKeyChanged=true;}}// handle mode
if(oldInnerChild&&oldInnerChild.type!==Comment&&(!isSameVNodeType(innerChild,oldInnerChild)||transitionKeyChanged)){var leavingHooks=resolveTransitionHooks(oldInnerChild,rawProps,state,instance);// update old tree's hooks in case of dynamic transition
setTransitionHooks(oldInnerChild,leavingHooks);// switching between different views
if(mode==='out-in'){state.isLeaving=true;// return placeholder node and queue update when leave finishes
leavingHooks.afterLeave=function(){state.isLeaving=false;instance.update();};return emptyPlaceholder(child);}else if(mode==='in-out'&&innerChild.type!==Comment){leavingHooks.delayLeave=function(el,earlyRemove,delayedLeave){var leavingVNodesCache=getLeavingNodesForType(state,oldInnerChild);leavingVNodesCache[String(oldInnerChild.key)]=oldInnerChild;// early removal callback
el._leaveCb=function(){earlyRemove();el._leaveCb=undefined;delete enterHooks.delayedLeave;};enterHooks.delayedLeave=delayedLeave;};}}return child;};}};{BaseTransitionImpl.__isBuiltIn=true;}// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
var BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(state,vnode){var leavingVNodes=state.leavingVNodes;var leavingVNodesCache=leavingVNodes.get(vnode.type);if(!leavingVNodesCache){leavingVNodesCache=Object.create(null);leavingVNodes.set(vnode.type,leavingVNodesCache);}return leavingVNodesCache;}// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode,props,state,instance){var appear=props.appear,mode=props.mode,_props$persisted=props.persisted,persisted=_props$persisted===undefined?false:_props$persisted,onBeforeEnter=props.onBeforeEnter,onEnter=props.onEnter,onAfterEnter=props.onAfterEnter,onEnterCancelled=props.onEnterCancelled,onBeforeLeave=props.onBeforeLeave,onLeave=props.onLeave,onAfterLeave=props.onAfterLeave,onLeaveCancelled=props.onLeaveCancelled,onBeforeAppear=props.onBeforeAppear,onAppear=props.onAppear,onAfterAppear=props.onAfterAppear,onAppearCancelled=props.onAppearCancelled;var key=String(vnode.key);var leavingVNodesCache=getLeavingNodesForType(state,vnode);var callHook=function callHook(hook,args){hook&&callWithAsyncErrorHandling(hook,instance,9/* TRANSITION_HOOK */,args);};var hooks={mode:mode,persisted:persisted,beforeEnter:function beforeEnter(el){var hook=onBeforeEnter;if(!state.isMounted){if(appear){hook=onBeforeAppear||onBeforeEnter;}else{return;}}// for same element (v-show)
if(el._leaveCb){el._leaveCb(true/* cancelled */);}// for toggled element with same key (v-if)
var leavingVNode=leavingVNodesCache[key];if(leavingVNode&&isSameVNodeType(vnode,leavingVNode)&&leavingVNode.el._leaveCb){// force early removal (not cancelled)
leavingVNode.el._leaveCb();}callHook(hook,[el]);},enter:function enter(el){var hook=onEnter;var afterHook=onAfterEnter;var cancelHook=onEnterCancelled;if(!state.isMounted){if(appear){hook=onAppear||onEnter;afterHook=onAfterAppear||onAfterEnter;cancelHook=onAppearCancelled||onEnterCancelled;}else{return;}}var called=false;var done=el._enterCb=function(cancelled){if(called)return;called=true;if(cancelled){callHook(cancelHook,[el]);}else{callHook(afterHook,[el]);}if(hooks.delayedLeave){hooks.delayedLeave();}el._enterCb=undefined;};if(hook){hook(el,done);if(hook.length<=1){done();}}else{done();}},leave:function leave(el,remove){var key=String(vnode.key);if(el._enterCb){el._enterCb(true/* cancelled */);}if(state.isUnmounting){return remove();}callHook(onBeforeLeave,[el]);var called=false;var done=el._leaveCb=function(cancelled){if(called)return;called=true;remove();if(cancelled){callHook(onLeaveCancelled,[el]);}else{callHook(onAfterLeave,[el]);}el._leaveCb=undefined;if(leavingVNodesCache[key]===vnode){delete leavingVNodesCache[key];}};leavingVNodesCache[key]=vnode;if(onLeave){onLeave(el,done);if(onLeave.length<=1){done();}}else{done();}},clone:function clone(vnode){return resolveTransitionHooks(vnode,props,state,instance);}};return hooks;}// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode){if(isKeepAlive(vnode)){vnode=cloneVNode(vnode);vnode.children=null;return vnode;}}function getKeepAliveChild(vnode){return isKeepAlive(vnode)?vnode.children?vnode.children[0]:undefined:vnode;}function setTransitionHooks(vnode,hooks){if(vnode.shapeFlag&6/* COMPONENT */&&vnode.component){setTransitionHooks(vnode.component.subTree,hooks);}else if(vnode.shapeFlag&128/* SUSPENSE */){vnode.ssContent.transition=hooks.clone(vnode.ssContent);vnode.ssFallback.transition=hooks.clone(vnode.ssFallback);}else{vnode.transition=hooks;}}function getTransitionRawChildren(children){var keepComment=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var ret=[];var keyedFragmentCount=0;for(var i=0;i<children.length;i++){var child=children[i];// handle fragment children case, e.g. v-for
if(child.type===Fragment){if(child.patchFlag&128/* KEYED_FRAGMENT */)keyedFragmentCount++;ret=ret.concat(getTransitionRawChildren(child.children,keepComment));}// comment placeholders should be skipped, e.g. v-if
else if(keepComment||child.type!==Comment){ret.push(child);}}// #1126 if a transition children list contains multiple sub fragments, these
// fragments will be merged into a flat children array. Since each v-for
// fragment may contain different static bindings inside, we need to de-op
// these children to force full diffs to ensure correct behavior.
if(keyedFragmentCount>1){for(var _i=0;_i<ret.length;_i++){ret[_i].patchFlag=-2/* BAIL */;}}return ret;}// implementation, close to no-op
function defineComponent(options){return isFunction(options)?{setup:options,name:options.name}:options;}var isAsyncWrapper=function isAsyncWrapper(i){return!!i.type.__asyncLoader;};function defineAsyncComponent(source){if(isFunction(source)){source={loader:source};}var _source=source,loader=_source.loader,loadingComponent=_source.loadingComponent,errorComponent=_source.errorComponent,_source$delay=_source.delay,delay=_source$delay===undefined?200:_source$delay,timeout=_source.timeout,_source$suspensible=_source.suspensible,suspensible=_source$suspensible===undefined?true:_source$suspensible,userOnError=_source.onError;var pendingRequest=null;var resolvedComp=void 0;var retries=0;var retry=function retry(){retries++;pendingRequest=null;return load();};var load=function load(){var thisRequest=void 0;return pendingRequest||(thisRequest=pendingRequest=loader().catch(function(err){err=err instanceof Error?err:new Error(String(err));if(userOnError){return new Promise(function(resolve,reject){var userRetry=function userRetry(){return resolve(retry());};var userFail=function userFail(){return reject(err);};userOnError(err,userRetry,userFail,retries+1);});}else{throw err;}}).then(function(comp){if(thisRequest!==pendingRequest&&pendingRequest){return pendingRequest;}if(process.env.NODE_ENV!=='production'&&!comp){warn$1('Async component loader resolved to undefined. '+'If you are using retry(), make sure to return its return value.');}// interop module default
if(comp&&(comp.__esModule||comp[Symbol.toStringTag]==='Module')){comp=comp.default;}if(process.env.NODE_ENV!=='production'&&comp&&!isObject(comp)&&!isFunction(comp)){throw new Error('Invalid async component load result: '+comp);}resolvedComp=comp;return comp;}));};return defineComponent({name:'AsyncComponentWrapper',__asyncLoader:load,get __asyncResolved(){return resolvedComp;},setup:function setup(){var instance=currentInstance;// already resolved
if(resolvedComp){return function(){return createInnerComp(resolvedComp,instance);};}var onError=function onError(err){pendingRequest=null;handleError(err,instance,13/* ASYNC_COMPONENT_LOADER */,!errorComponent/* do not throw in dev if user provided error component */);};// suspense-controlled or SSR.
if(suspensible&&instance.suspense||isInSSRComponentSetup){return load().then(function(comp){return function(){return createInnerComp(comp,instance);};}).catch(function(err){onError(err);return function(){return errorComponent?createVNode(errorComponent,{error:err}):null;};});}var loaded=ref(false);var error=ref();var delayed=ref(!!delay);if(delay){setTimeout(function(){delayed.value=false;},delay);}if(timeout!=null){setTimeout(function(){if(!loaded.value&&!error.value){var err=new Error('Async component timed out after '+timeout+'ms.');onError(err);error.value=err;}},timeout);}load().then(function(){loaded.value=true;if(instance.parent&&isKeepAlive(instance.parent.vnode)){// parent is keep-alive, force update so the loaded component's
// name is taken into account
queueJob(instance.parent.update);}}).catch(function(err){onError(err);error.value=err;});return function(){if(loaded.value&&resolvedComp){return createInnerComp(resolvedComp,instance);}else if(error.value&&errorComponent){return createVNode(errorComponent,{error:error.value});}else if(loadingComponent&&!delayed.value){return createVNode(loadingComponent);}};}});}function createInnerComp(comp,_ref16){var _ref16$vnode=_ref16.vnode,ref=_ref16$vnode.ref,props=_ref16$vnode.props,children=_ref16$vnode.children;var vnode=createVNode(comp,props,children);// ensure inner component inherits the async wrapper's ref owner
vnode.ref=ref;return vnode;}var isKeepAlive=function isKeepAlive(vnode){return vnode.type.__isKeepAlive;};var KeepAliveImpl={name:'KeepAlive',// Marker for special handling inside the renderer. We are not using a ===
// check directly on KeepAlive in the renderer, because importing it directly
// would prevent it from being tree-shaken.
__isKeepAlive:true,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup:function setup(props,_ref17){var slots=_ref17.slots;var instance=getCurrentInstance();// KeepAlive communicates with the instantiated renderer via the
// ctx where the renderer passes in its internals,
// and the KeepAlive instance exposes activate/deactivate implementations.
// The whole point of this is to avoid importing KeepAlive directly in the
// renderer to facilitate tree-shaking.
var sharedContext=instance.ctx;// if the internal renderer is not registered, it indicates that this is server-side rendering,
// for KeepAlive, we just need to render its children
if(!sharedContext.renderer){return slots.default;}var cache=new Map();var keys=new Set();var current=null;if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){instance.__v_cache=cache;}var parentSuspense=instance.suspense;var _sharedContext$render=sharedContext.renderer,patch=_sharedContext$render.p,move=_sharedContext$render.m,_unmount=_sharedContext$render.um,createElement=_sharedContext$render.o.createElement;var storageContainer=createElement('div');sharedContext.activate=function(vnode,container,anchor,isSVG,optimized){var instance=vnode.component;move(vnode,container,anchor,0/* ENTER */,parentSuspense);// in case props have changed
patch(instance.vnode,vnode,container,anchor,instance,parentSuspense,isSVG,vnode.slotScopeIds,optimized);queuePostRenderEffect(function(){instance.isDeactivated=false;if(instance.a){invokeArrayFns(instance.a);}var vnodeHook=vnode.props&&vnode.props.onVnodeMounted;if(vnodeHook){invokeVNodeHook(vnodeHook,instance.parent,vnode);}},parentSuspense);if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){// Update components tree
devtoolsComponentAdded(instance);}};sharedContext.deactivate=function(vnode){var instance=vnode.component;move(vnode,storageContainer,null,1/* LEAVE */,parentSuspense);queuePostRenderEffect(function(){if(instance.da){invokeArrayFns(instance.da);}var vnodeHook=vnode.props&&vnode.props.onVnodeUnmounted;if(vnodeHook){invokeVNodeHook(vnodeHook,instance.parent,vnode);}instance.isDeactivated=true;},parentSuspense);if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){// Update components tree
devtoolsComponentAdded(instance);}};function unmount(vnode){// reset the shapeFlag so it can be properly unmounted
resetShapeFlag(vnode);_unmount(vnode,instance,parentSuspense,true);}function pruneCache(filter){cache.forEach(function(vnode,key){var name=getComponentName(vnode.type);if(name&&(!filter||!filter(name))){pruneCacheEntry(key);}});}function pruneCacheEntry(key){var cached=cache.get(key);if(!current||cached.type!==current.type){unmount(cached);}else if(current){// current active instance should no longer be kept-alive.
// we can't unmount it now but it might be later, so reset its flag now.
resetShapeFlag(current);}cache.delete(key);keys.delete(key);}// prune cache on include/exclude prop change
watch(function(){return[props.include,props.exclude];},function(_ref18){var _ref19=slicedToArray(_ref18,2),include=_ref19[0],exclude=_ref19[1];include&&pruneCache(function(name){return matches(include,name);});exclude&&pruneCache(function(name){return!matches(exclude,name);});},// prune post-render after `current` has been updated
{flush:'post',deep:true});// cache sub tree after render
var pendingCacheKey=null;var cacheSubtree=function cacheSubtree(){// fix #1621, the pendingCacheKey could be 0
if(pendingCacheKey!=null){cache.set(pendingCacheKey,getInnerChild(instance.subTree));}};onMounted(cacheSubtree);onUpdated(cacheSubtree);onBeforeUnmount(function(){cache.forEach(function(cached){var subTree=instance.subTree,suspense=instance.suspense;var vnode=getInnerChild(subTree);if(cached.type===vnode.type){// current instance will be unmounted as part of keep-alive's unmount
resetShapeFlag(vnode);// but invoke its deactivated hook here
var da=vnode.component.da;da&&queuePostRenderEffect(da,suspense);return;}unmount(cached);});});return function(){pendingCacheKey=null;if(!slots.default){return null;}var children=slots.default();var rawVNode=children[0];if(children.length>1){if(process.env.NODE_ENV!=='production'){warn$1('KeepAlive should contain exactly one component child.');}current=null;return children;}else if(!isVNode(rawVNode)||!(rawVNode.shapeFlag&4/* STATEFUL_COMPONENT */)&&!(rawVNode.shapeFlag&128/* SUSPENSE */)){current=null;return rawVNode;}var vnode=getInnerChild(rawVNode);var comp=vnode.type;// for async components, name check should be based in its loaded
// inner component if available
var name=getComponentName(isAsyncWrapper(vnode)?vnode.type.__asyncResolved||{}:comp);var include=props.include,exclude=props.exclude,max=props.max;if(include&&(!name||!matches(include,name))||exclude&&name&&matches(exclude,name)){current=vnode;return rawVNode;}var key=vnode.key==null?comp:vnode.key;var cachedVNode=cache.get(key);// clone vnode if it's reused because we are going to mutate it
if(vnode.el){vnode=cloneVNode(vnode);if(rawVNode.shapeFlag&128/* SUSPENSE */){rawVNode.ssContent=vnode;}}// #1513 it's possible for the returned vnode to be cloned due to attr
// fallthrough or scopeId, so the vnode here may not be the final vnode
// that is mounted. Instead of caching it directly, we store the pending
// key and cache `instance.subTree` (the normalized vnode) in
// beforeMount/beforeUpdate hooks.
pendingCacheKey=key;if(cachedVNode){// copy over mounted state
vnode.el=cachedVNode.el;vnode.component=cachedVNode.component;if(vnode.transition){// recursively update transition hooks on subTree
setTransitionHooks(vnode,vnode.transition);}// avoid vnode being mounted as fresh
vnode.shapeFlag|=512/* COMPONENT_KEPT_ALIVE */;// make this key the freshest
keys.delete(key);keys.add(key);}else{keys.add(key);// prune oldest entry
if(max&&keys.size>parseInt(max,10)){pruneCacheEntry(keys.values().next().value);}}// avoid vnode being unmounted
vnode.shapeFlag|=256/* COMPONENT_SHOULD_KEEP_ALIVE */;current=vnode;return rawVNode;};}};{KeepAliveImpl.__isBuildIn=true;}// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
var KeepAlive=KeepAliveImpl;function matches(pattern,name){if(isArray(pattern)){return pattern.some(function(p){return matches(p,name);});}else if(isString(pattern)){return pattern.split(',').includes(name);}else if(pattern.test){return pattern.test(name);}/* istanbul ignore next */return false;}function onActivated(hook,target){registerKeepAliveHook(hook,"a"/* ACTIVATED */,target);}function onDeactivated(hook,target){registerKeepAliveHook(hook,"da"/* DEACTIVATED */,target);}function registerKeepAliveHook(hook,type){var target=arguments.length>2&&arguments[2]!==undefined?arguments[2]:currentInstance;// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
var wrappedHook=hook.__wdc||(hook.__wdc=function(){// only fire the hook if the target instance is NOT in a deactivated branch.
var current=target;while(current){if(current.isDeactivated){return;}current=current.parent;}return hook();});injectHook(type,wrappedHook,target);// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(target){var current=target.parent;while(current&&current.parent){if(isKeepAlive(current.parent.vnode)){injectToKeepAliveRoot(wrappedHook,type,target,current);}current=current.parent;}}}function injectToKeepAliveRoot(hook,type,target,keepAliveRoot){// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
var injected=injectHook(type,hook,keepAliveRoot,true/* prepend */);onUnmounted(function(){remove(keepAliveRoot[type],injected);},target);}function resetShapeFlag(vnode){var shapeFlag=vnode.shapeFlag;if(shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){shapeFlag-=256/* COMPONENT_SHOULD_KEEP_ALIVE */;}if(shapeFlag&512/* COMPONENT_KEPT_ALIVE */){shapeFlag-=512/* COMPONENT_KEPT_ALIVE */;}vnode.shapeFlag=shapeFlag;}function getInnerChild(vnode){return vnode.shapeFlag&128/* SUSPENSE */?vnode.ssContent:vnode;}function injectHook(type,hook){var target=arguments.length>2&&arguments[2]!==undefined?arguments[2]:currentInstance;var prepend=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(target){var hooks=target[type]||(target[type]=[]);// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
var wrappedHook=hook.__weh||(hook.__weh=function(){for(var _len12=arguments.length,args=Array(_len12),_key13=0;_key13<_len12;_key13++){args[_key13]=arguments[_key13];}if(target.isUnmounted){return;}// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
setCurrentInstance(target);var res=callWithAsyncErrorHandling(hook,target,type,args);unsetCurrentInstance();resetTracking();return res;});if(prepend){hooks.unshift(wrappedHook);}else{hooks.push(wrappedHook);}return wrappedHook;}else if(process.env.NODE_ENV!=='production'){var apiName=toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/,''));warn$1(apiName+' is called when there is no active component instance to be '+'associated with. '+'Lifecycle injection APIs can only be used during execution of setup().'+(' If you are using async setup(), make sure to register lifecycle '+'hooks before the first await statement.'));}}var createHook=function createHook(lifecycle){return function(hook){var target=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentInstance;return(// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup||lifecycle==="sp"/* SERVER_PREFETCH */)&&injectHook(lifecycle,hook,target));};};var onBeforeMount=createHook("bm"/* BEFORE_MOUNT */);var onMounted=createHook("m"/* MOUNTED */);var onBeforeUpdate=createHook("bu"/* BEFORE_UPDATE */);var onUpdated=createHook("u"/* UPDATED */);var onBeforeUnmount=createHook("bum"/* BEFORE_UNMOUNT */);var onUnmounted=createHook("um"/* UNMOUNTED */);var onServerPrefetch=createHook("sp"/* SERVER_PREFETCH */);var onRenderTriggered=createHook("rtg"/* RENDER_TRIGGERED */);var onRenderTracked=createHook("rtc"/* RENDER_TRACKED */);function onErrorCaptured(hook){var target=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentInstance;injectHook("ec"/* ERROR_CAPTURED */,hook,target);}function deepMergeData(to,from){for(var key in from){var toVal=to[key];var fromVal=from[key];if(key in to&&isPlainObject(toVal)&&isPlainObject(fromVal)){process.env.NODE_ENV!=='production'&&warnDeprecation("OPTIONS_DATA_MERGE"/* OPTIONS_DATA_MERGE */,null,key);deepMergeData(toVal,fromVal);}else{to[key]=fromVal;}}return to;}function createDuplicateChecker(){var cache=Object.create(null);return function(type,key){if(cache[key]){warn$1(type+' property "'+key+'" is already defined in '+cache[key]+'.');}else{cache[key]=type;}};}var shouldCacheAccess=true;function applyOptions(instance){var options=resolveMergedOptions(instance);var publicThis=instance.proxy;var ctx=instance.ctx;// do not cache property access on public proxy during state initialization
shouldCacheAccess=false;// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
if(options.beforeCreate){callHook(options.beforeCreate,instance,"bc"/* BEFORE_CREATE */);}var dataOptions=options.data,computedOptions=options.computed,methods=options.methods,watchOptions=options.watch,provideOptions=options.provide,injectOptions=options.inject,created=options.created,beforeMount=options.beforeMount,mounted=options.mounted,beforeUpdate=options.beforeUpdate,updated=options.updated,activated=options.activated,deactivated=options.deactivated,beforeDestroy=options.beforeDestroy,beforeUnmount=options.beforeUnmount,destroyed=options.destroyed,unmounted=options.unmounted,render=options.render,renderTracked=options.renderTracked,renderTriggered=options.renderTriggered,errorCaptured=options.errorCaptured,serverPrefetch=options.serverPrefetch,expose=options.expose,inheritAttrs=options.inheritAttrs,components=options.components,directives=options.directives,filters=options.filters;var checkDuplicateProperties=process.env.NODE_ENV!=='production'?createDuplicateChecker():null;if(process.env.NODE_ENV!=='production'){var _instance$propsOption3=slicedToArray(instance.propsOptions,1),propsOptions=_instance$propsOption3[0];if(propsOptions){for(var key in propsOptions){checkDuplicateProperties("Props"/* PROPS */,key);}}}// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
if(injectOptions){resolveInjections(injectOptions,ctx,checkDuplicateProperties,instance.appContext.config.unwrapInjectedRef);}if(methods){for(var _key14 in methods){var methodHandler=methods[_key14];if(isFunction(methodHandler)){// In dev mode, we use the `createRenderContext` function to define
// methods to the proxy target, and those are read-only but
// reconfigurable, so it needs to be redefined here
if(process.env.NODE_ENV!=='production'){Object.defineProperty(ctx,_key14,{value:methodHandler.bind(publicThis),configurable:true,enumerable:true,writable:true});}else{ctx[_key14]=methodHandler.bind(publicThis);}if(process.env.NODE_ENV!=='production'){checkDuplicateProperties("Methods"/* METHODS */,_key14);}}else if(process.env.NODE_ENV!=='production'){warn$1('Method "'+_key14+'" has type "'+(typeof methodHandler==='undefined'?'undefined':_typeof(methodHandler))+'" in the component definition. '+'Did you reference the function correctly?');}}}if(dataOptions){(function(){if(process.env.NODE_ENV!=='production'&&!isFunction(dataOptions)){warn$1('The data option must be a function. '+'Plain object usage is no longer supported.');}var data=dataOptions.call(publicThis,publicThis);if(process.env.NODE_ENV!=='production'&&isPromise(data)){warn$1('data() returned a Promise - note data() cannot be async; If you '+'intend to perform data fetching before component renders, use '+'async setup() + <Suspense>.');}if(!isObject(data)){process.env.NODE_ENV!=='production'&&warn$1('data() should return an object.');}else{instance.data=reactive(data);if(process.env.NODE_ENV!=='production'){var _loop=function _loop(_key15){checkDuplicateProperties("Data"/* DATA */,_key15);// expose data on ctx during dev
if(_key15[0]!=='$'&&_key15[0]!=='_'){Object.defineProperty(ctx,_key15,{configurable:true,enumerable:true,get:function get(){return data[_key15];},set:NOOP});}};for(var _key15 in data){_loop(_key15);}}}})();}// state initialization complete at this point - start caching access
shouldCacheAccess=true;if(computedOptions){var _loop2=function _loop2(_key16){var opt=computedOptions[_key16];var get=isFunction(opt)?opt.bind(publicThis,publicThis):isFunction(opt.get)?opt.get.bind(publicThis,publicThis):NOOP;if(process.env.NODE_ENV!=='production'&&get===NOOP){warn$1('Computed property "'+_key16+'" has no getter.');}var set=!isFunction(opt)&&isFunction(opt.set)?opt.set.bind(publicThis):process.env.NODE_ENV!=='production'?function(){warn$1('Write operation failed: computed property "'+_key16+'" is readonly.');}:NOOP;var c=computed$1({get:get,set:set});Object.defineProperty(ctx,_key16,{enumerable:true,configurable:true,get:function get(){return c.value;},set:function set(v){return c.value=v;}});if(process.env.NODE_ENV!=='production'){checkDuplicateProperties("Computed"/* COMPUTED */,_key16);}};for(var _key16 in computedOptions){_loop2(_key16);}}if(watchOptions){for(var _key17 in watchOptions){createWatcher(watchOptions[_key17],ctx,publicThis,_key17);}}if(provideOptions){var provides=isFunction(provideOptions)?provideOptions.call(publicThis):provideOptions;Reflect.ownKeys(provides).forEach(function(key){provide(key,provides[key]);});}if(created){callHook(created,instance,"c"/* CREATED */);}function registerLifecycleHook(register,hook){if(isArray(hook)){hook.forEach(function(_hook){return register(_hook.bind(publicThis));});}else if(hook){register(hook.bind(publicThis));}}registerLifecycleHook(onBeforeMount,beforeMount);registerLifecycleHook(onMounted,mounted);registerLifecycleHook(onBeforeUpdate,beforeUpdate);registerLifecycleHook(onUpdated,updated);registerLifecycleHook(onActivated,activated);registerLifecycleHook(onDeactivated,deactivated);registerLifecycleHook(onErrorCaptured,errorCaptured);registerLifecycleHook(onRenderTracked,renderTracked);registerLifecycleHook(onRenderTriggered,renderTriggered);registerLifecycleHook(onBeforeUnmount,beforeUnmount);registerLifecycleHook(onUnmounted,unmounted);registerLifecycleHook(onServerPrefetch,serverPrefetch);{if(beforeDestroy&&softAssertCompatEnabled("OPTIONS_BEFORE_DESTROY"/* OPTIONS_BEFORE_DESTROY */,instance)){registerLifecycleHook(onBeforeUnmount,beforeDestroy);}if(destroyed&&softAssertCompatEnabled("OPTIONS_DESTROYED"/* OPTIONS_DESTROYED */,instance)){registerLifecycleHook(onUnmounted,destroyed);}}if(isArray(expose)){if(expose.length){var exposed=instance.exposed||(instance.exposed={});expose.forEach(function(key){Object.defineProperty(exposed,key,{get:function get(){return publicThis[key];},set:function set(val){return publicThis[key]=val;}});});}else if(!instance.exposed){instance.exposed={};}}// options that are handled when creating the instance but also need to be
// applied from mixins
if(render&&instance.render===NOOP){instance.render=render;}if(inheritAttrs!=null){instance.inheritAttrs=inheritAttrs;}// asset options.
if(components)instance.components=components;if(directives)instance.directives=directives;if(filters&&isCompatEnabled("FILTERS"/* FILTERS */,instance)){instance.filters=filters;}}function resolveInjections(injectOptions,ctx){var checkDuplicateProperties=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NOOP;var unwrapRef=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(isArray(injectOptions)){injectOptions=normalizeInject(injectOptions);}var _loop3=function _loop3(key){var opt=injectOptions[key];var injected=void 0;if(isObject(opt)){if('default'in opt){injected=inject(opt.from||key,opt.default,true/* treat default function as factory */);}else{injected=inject(opt.from||key);}}else{injected=inject(opt);}if(isRef(injected)){// TODO remove the check in 3.3
if(unwrapRef){Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:function get(){return injected.value;},set:function set(v){return injected.value=v;}});}else{if(process.env.NODE_ENV!=='production'){warn$1('injected property "'+key+'" is a ref and will be auto-unwrapped '+'and no longer needs `.value` in the next minor release. '+'To opt-in to the new behavior now, '+'set `app.config.unwrapInjectedRef = true` (this config is '+'temporary and will not be needed in the future.)');}ctx[key]=injected;}}else{ctx[key]=injected;}if(process.env.NODE_ENV!=='production'){checkDuplicateProperties("Inject"/* INJECT */,key);}};for(var key in injectOptions){_loop3(key);}}function callHook(hook,instance,type){callWithAsyncErrorHandling(isArray(hook)?hook.map(function(h){return h.bind(instance.proxy);}):hook.bind(instance.proxy),instance,type);}function createWatcher(raw,ctx,publicThis,key){var getter=key.includes('.')?createPathGetter(publicThis,key):function(){return publicThis[key];};if(isString(raw)){var handler=ctx[raw];if(isFunction(handler)){watch(getter,handler);}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid watch handler specified by key "'+raw+'"',handler);}}else if(isFunction(raw)){watch(getter,raw.bind(publicThis));}else if(isObject(raw)){if(isArray(raw)){raw.forEach(function(r){return createWatcher(r,ctx,publicThis,key);});}else{var _handler=isFunction(raw.handler)?raw.handler.bind(publicThis):ctx[raw.handler];if(isFunction(_handler)){watch(getter,_handler,raw);}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid watch handler specified by key "'+raw.handler+'"',_handler);}}}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid watch option: "'+key+'"',raw);}}/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */function resolveMergedOptions(instance){var base=instance.type;var mixins=base.mixins,extendsOptions=base.extends;var _instance$appContext=instance.appContext,globalMixins=_instance$appContext.mixins,cache=_instance$appContext.optionsCache,optionMergeStrategies=_instance$appContext.config.optionMergeStrategies;var cached=cache.get(base);var resolved=void 0;if(cached){resolved=cached;}else if(!globalMixins.length&&!mixins&&!extendsOptions){if(isCompatEnabled("PRIVATE_APIS"/* PRIVATE_APIS */,instance)){resolved=extend({},base);resolved.parent=instance.parent&&instance.parent.proxy;resolved.propsData=instance.vnode.props;}else{resolved=base;}}else{resolved={};if(globalMixins.length){globalMixins.forEach(function(m){return _mergeOptions(resolved,m,optionMergeStrategies,true);});}_mergeOptions(resolved,base,optionMergeStrategies);}cache.set(base,resolved);return resolved;}function _mergeOptions(to,from,strats){var asMixin=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(isFunction(from)){from=from.options;}var _from=from,mixins=_from.mixins,extendsOptions=_from.extends;if(extendsOptions){_mergeOptions(to,extendsOptions,strats,true);}if(mixins){mixins.forEach(function(m){return _mergeOptions(to,m,strats,true);});}for(var key in from){if(asMixin&&key==='expose'){process.env.NODE_ENV!=='production'&&warn$1('"expose" option is ignored when declared in mixins or extends. '+'It should only be declared in the base component itself.');}else{var strat=internalOptionMergeStrats[key]||strats&&strats[key];to[key]=strat?strat(to[key],from[key]):from[key];}}return to;}var internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,// objects
methods:mergeObjectOptions,computed:mergeObjectOptions,// lifecycle
beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,// assets
components:mergeObjectOptions,directives:mergeObjectOptions,// watch
watch:mergeWatchOptions,// provide / inject
provide:mergeDataFn,inject:mergeInject};{internalOptionMergeStrats.filters=mergeObjectOptions;}function mergeDataFn(to,from){if(!from){return to;}if(!to){return from;}return function mergedDataFn(){return(isCompatEnabled("OPTIONS_DATA_MERGE"/* OPTIONS_DATA_MERGE */,null)?deepMergeData:extend)(isFunction(to)?to.call(this,this):to,isFunction(from)?from.call(this,this):from);};}function mergeInject(to,from){return mergeObjectOptions(normalizeInject(to),normalizeInject(from));}function normalizeInject(raw){if(isArray(raw)){var res={};for(var i=0;i<raw.length;i++){res[raw[i]]=raw[i];}return res;}return raw;}function mergeAsArray(to,from){return to?[].concat(toConsumableArray(new Set([].concat(to,from)))):from;}function mergeObjectOptions(to,from){return to?extend(extend(Object.create(null),to),from):from;}function mergeWatchOptions(to,from){if(!to)return from;if(!from)return to;var merged=extend(Object.create(null),to);for(var key in from){merged[key]=mergeAsArray(to[key],from[key]);}return merged;}function createPropsDefaultThis(instance,rawProps,propKey){return new Proxy({},{get:function get(_,key){process.env.NODE_ENV!=='production'&&warnDeprecation("PROPS_DEFAULT_THIS"/* PROPS_DEFAULT_THIS */,null,propKey);// $options
if(key==='$options'){return resolveMergedOptions(instance);}// props
if(key in rawProps){return rawProps[key];}// injections
var injections=instance.type.inject;if(injections){if(isArray(injections)){if(injections.includes(key)){return inject(key);}}else if(key in injections){return inject(key);}}}});}function shouldSkipAttr(key,instance){if(key==='is'){return true;}if((key==='class'||key==='style')&&isCompatEnabled("INSTANCE_ATTRS_CLASS_STYLE"/* INSTANCE_ATTRS_CLASS_STYLE */,instance)){return true;}if(isOn(key)&&isCompatEnabled("INSTANCE_LISTENERS"/* INSTANCE_LISTENERS */,instance)){return true;}// vue-router
if(key.startsWith('routerView')||key==='registerRouteInstance'){return true;}return false;}function initProps(instance,rawProps,isStateful){var isSSR=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var props={};var attrs={};def(attrs,InternalObjectKey,1);instance.propsDefaults=Object.create(null);setFullProps(instance,rawProps,props,attrs);// ensure all declared prop keys are present
for(var key in instance.propsOptions[0]){if(!(key in props)){props[key]=undefined;}}// validation
if(process.env.NODE_ENV!=='production'){validateProps(rawProps||{},props,instance);}if(isStateful){// stateful
instance.props=isSSR?props:shallowReactive(props);}else{if(!instance.type.props){// functional w/ optional props, props === attrs
instance.props=attrs;}else{// functional w/ declared props
instance.props=props;}}instance.attrs=attrs;}function updateProps(instance,rawProps,rawPrevProps,optimized){var props=instance.props,attrs=instance.attrs,patchFlag=instance.vnode.patchFlag;var rawCurrentProps=toRaw(props);var _instance$propsOption4=slicedToArray(instance.propsOptions,1),options=_instance$propsOption4[0];var hasAttrsChanged=false;if(// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
!(process.env.NODE_ENV!=='production'&&(instance.type.__hmrId||instance.parent&&instance.parent.type.__hmrId))&&(optimized||patchFlag>0)&&!(patchFlag&16/* FULL_PROPS */)){if(patchFlag&8/* PROPS */){// Compiler-generated props & no keys change, just set the updated
// the props.
var propsToUpdate=instance.vnode.dynamicProps;for(var i=0;i<propsToUpdate.length;i++){var key=propsToUpdate[i];// PROPS flag guarantees rawProps to be non-null
var value=rawProps[key];if(options){// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(hasOwn(attrs,key)){if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}else{var camelizedKey=camelize(key);props[camelizedKey]=resolvePropValue(options,rawCurrentProps,camelizedKey,value,instance,false/* isAbsent */);}}else{{if(isOn(key)&&key.endsWith('Native')){key=key.slice(0,-6);// remove Native postfix
}else if(shouldSkipAttr(key,instance)){continue;}}if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}}else{// full props update.
if(setFullProps(instance,rawProps,props,attrs)){hasAttrsChanged=true;}// in case of dynamic props, check if we need to delete keys from
// the props object
var kebabKey=void 0;for(var _key18 in rawCurrentProps){if(!rawProps||// for camelCase
!hasOwn(rawProps,_key18)&&(// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(kebabKey=hyphenate(_key18))===_key18||!hasOwn(rawProps,kebabKey))){if(options){if(rawPrevProps&&(// for camelCase
rawPrevProps[_key18]!==undefined||// for kebab-case
rawPrevProps[kebabKey]!==undefined)){props[_key18]=resolvePropValue(options,rawCurrentProps,_key18,undefined,instance,true/* isAbsent */);}}else{delete props[_key18];}}}// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(attrs!==rawCurrentProps){for(var _key19 in attrs){if(!rawProps||!hasOwn(rawProps,_key19)&&!hasOwn(rawProps,_key19+'Native')){delete attrs[_key19];hasAttrsChanged=true;}}}}// trigger updates for $attrs in case it's used in component slots
if(hasAttrsChanged){trigger(instance,"set"/* SET */,'$attrs');}if(process.env.NODE_ENV!=='production'){validateProps(rawProps||{},props,instance);}}function setFullProps(instance,rawProps,props,attrs){var _instance$propsOption5=slicedToArray(instance.propsOptions,2),options=_instance$propsOption5[0],needCastKeys=_instance$propsOption5[1];var hasAttrsChanged=false;var rawCastValues=void 0;if(rawProps){for(var key in rawProps){// key, ref are reserved and never passed down
if(isReservedProp(key)){continue;}{if(key.startsWith('onHook:')){softAssertCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance,key.slice(2).toLowerCase());}if(key==='inline-template'){continue;}}var value=rawProps[key];// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
var camelKey=void 0;if(options&&hasOwn(options,camelKey=camelize(key))){if(!needCastKeys||!needCastKeys.includes(camelKey)){props[camelKey]=value;}else{(rawCastValues||(rawCastValues={}))[camelKey]=value;}}else if(!isEmitListener(instance.emitsOptions,key)){// Any non-declared (either as a prop or an emitted event) props are put
// into a separate `attrs` object for spreading. Make sure to preserve
// original key casing
{if(isOn(key)&&key.endsWith('Native')){key=key.slice(0,-6);// remove Native postfix
}else if(shouldSkipAttr(key,instance)){continue;}}if(!(key in attrs)||value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}if(needCastKeys){var rawCurrentProps=toRaw(props);var castValues=rawCastValues||EMPTY_OBJ;for(var i=0;i<needCastKeys.length;i++){var _key20=needCastKeys[i];props[_key20]=resolvePropValue(options,rawCurrentProps,_key20,castValues[_key20],instance,!hasOwn(castValues,_key20));}}return hasAttrsChanged;}function resolvePropValue(options,props,key,value,instance,isAbsent){var opt=options[key];if(opt!=null){var hasDefault=hasOwn(opt,'default');// default values
if(hasDefault&&value===undefined){var defaultValue=opt.default;if(opt.type!==Function&&isFunction(defaultValue)){var propsDefaults=instance.propsDefaults;if(key in propsDefaults){value=propsDefaults[key];}else{setCurrentInstance(instance);value=propsDefaults[key]=defaultValue.call(isCompatEnabled("PROPS_DEFAULT_THIS"/* PROPS_DEFAULT_THIS */,instance)?createPropsDefaultThis(instance,props,key):null,props);unsetCurrentInstance();}}else{value=defaultValue;}}// boolean casting
if(opt[0/* shouldCast */]){if(isAbsent&&!hasDefault){value=false;}else if(opt[1/* shouldCastTrue */]&&(value===''||value===hyphenate(key))){value=true;}}}return value;}function normalizePropsOptions(comp,appContext){var asMixin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var cache=appContext.propsCache;var cached=cache.get(comp);if(cached){return cached;}var raw=comp.props;var normalized={};var needCastKeys=[];// apply mixin/extends props
var hasExtends=false;if(__VUE_OPTIONS_API__&&!isFunction(comp)){var extendProps=function extendProps(raw){if(isFunction(raw)){raw=raw.options;}hasExtends=true;var _normalizePropsOption=normalizePropsOptions(raw,appContext,true),_normalizePropsOption2=slicedToArray(_normalizePropsOption,2),props=_normalizePropsOption2[0],keys=_normalizePropsOption2[1];extend(normalized,props);if(keys)needCastKeys.push.apply(needCastKeys,toConsumableArray(keys));};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendProps);}if(comp.extends){extendProps(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendProps);}}if(!raw&&!hasExtends){cache.set(comp,EMPTY_ARR);return EMPTY_ARR;}if(isArray(raw)){for(var i=0;i<raw.length;i++){if(process.env.NODE_ENV!=='production'&&!isString(raw[i])){warn$1('props must be strings when using array syntax.',raw[i]);}var normalizedKey=camelize(raw[i]);if(validatePropName(normalizedKey)){normalized[normalizedKey]=EMPTY_OBJ;}}}else if(raw){if(process.env.NODE_ENV!=='production'&&!isObject(raw)){warn$1('invalid props options',raw);}for(var key in raw){var _normalizedKey=camelize(key);if(validatePropName(_normalizedKey)){var _opt=raw[key];var prop=normalized[_normalizedKey]=isArray(_opt)||isFunction(_opt)?{type:_opt}:_opt;if(prop){var booleanIndex=getTypeIndex(Boolean,prop.type);var stringIndex=getTypeIndex(String,prop.type);prop[0/* shouldCast */]=booleanIndex>-1;prop[1/* shouldCastTrue */]=stringIndex<0||booleanIndex<stringIndex;// if the prop needs boolean casting or default value
if(booleanIndex>-1||hasOwn(prop,'default')){needCastKeys.push(_normalizedKey);}}}}}var res=[normalized,needCastKeys];cache.set(comp,res);return res;}function validatePropName(key){if(key[0]!=='$'){return true;}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid prop name: "'+key+'" is a reserved property.');}return false;}// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor){var match=ctor&&ctor.toString().match(/^\s*function (\w+)/);return match?match[1]:ctor===null?'null':'';}function isSameType(a,b){return getType(a)===getType(b);}function getTypeIndex(type,expectedTypes){if(isArray(expectedTypes)){return expectedTypes.findIndex(function(t){return isSameType(t,type);});}else if(isFunction(expectedTypes)){return isSameType(expectedTypes,type)?0:-1;}return-1;}/**
 * dev only
 */function validateProps(rawProps,props,instance){var resolvedValues=toRaw(props);var options=instance.propsOptions[0];for(var key in options){var _opt2=options[key];if(_opt2==null)continue;validateProp(key,resolvedValues[key],_opt2,!hasOwn(rawProps,key)&&!hasOwn(rawProps,hyphenate(key)));}}/**
 * dev only
 */function validateProp(name,value,prop,isAbsent){var type=prop.type,required=prop.required,validator=prop.validator;// required!
if(required&&isAbsent){warn$1('Missing required prop: "'+name+'"');return;}// missing but optional
if(value==null&&!prop.required){return;}// type check
if(type!=null&&type!==true){var isValid=false;var types=isArray(type)?type:[type];var expectedTypes=[];// value is valid as long as one of the specified types match
for(var i=0;i<types.length&&!isValid;i++){var _assertType=assertType(value,types[i]),valid=_assertType.valid,expectedType=_assertType.expectedType;expectedTypes.push(expectedType||'');isValid=valid;}if(!isValid){warn$1(getInvalidTypeMessage(name,value,expectedTypes));return;}}// custom validator
if(validator&&!validator(value)){warn$1('Invalid prop: custom validator check failed for prop "'+name+'".');}}var isSimpleType=/*#__PURE__*/makeMap('String,Number,Boolean,Function,Symbol,BigInt');/**
 * dev only
 */function assertType(value,type){var valid=void 0;var expectedType=getType(type);if(isSimpleType(expectedType)){var t=typeof value==='undefined'?'undefined':_typeof(value);valid=t===expectedType.toLowerCase();// for primitive wrapper objects
if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isObject(value);}else if(expectedType==='Array'){valid=isArray(value);}else if(expectedType==='null'){valid=value===null;}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
 * dev only
 */function getInvalidTypeMessage(name,value,expectedTypes){var message='Invalid prop: type check failed for prop "'+name+'".'+(' Expected '+expectedTypes.map(capitalize).join(' | '));var expectedType=expectedTypes[0];var receivedType=toRawType(value);var expectedValue=styleValue(value,expectedType);var receivedValue=styleValue(value,receivedType);// check if we need to specify expected value
if(expectedTypes.length===1&&isExplicable(expectedType)&&!isBoolean(expectedType,receivedType)){message+=' with value '+expectedValue;}message+=', got '+receivedType+' ';// check if we need to specify received value
if(isExplicable(receivedType)){message+='with value '+receivedValue+'.';}return message;}/**
 * dev only
 */function styleValue(value,type){if(type==='String'){return'"'+value+'"';}else if(type==='Number'){return''+Number(value);}else{return''+value;}}/**
 * dev only
 */function isExplicable(type){var explicitTypes=['string','number','boolean'];return explicitTypes.some(function(elem){return type.toLowerCase()===elem;});}/**
 * dev only
 */function isBoolean(){for(var _len13=arguments.length,args=Array(_len13),_key21=0;_key21<_len13;_key21++){args[_key21]=arguments[_key21];}return args.some(function(elem){return elem.toLowerCase()==='boolean';});}var isInternalKey=function isInternalKey(key){return key[0]==='_'||key==='$stable';};var normalizeSlotValue=function normalizeSlotValue(value){return isArray(value)?value.map(normalizeVNode):[normalizeVNode(value)];};var normalizeSlot=function normalizeSlot(key,rawSlot,ctx){var normalized=withCtx(function(){if(process.env.NODE_ENV!=='production'&&currentInstance){warn$1('Slot "'+key+'" invoked outside of the render function: '+'this will not track dependencies used in the slot. '+'Invoke the slot function inside the render function instead.');}return normalizeSlotValue(rawSlot.apply(undefined,arguments));},ctx);normalized._c=false;return normalized;};var normalizeObjectSlots=function normalizeObjectSlots(rawSlots,slots,instance){var ctx=rawSlots._ctx;for(var key in rawSlots){if(isInternalKey(key))continue;var value=rawSlots[key];if(isFunction(value)){slots[key]=normalizeSlot(key,value,ctx);}else if(value!=null){(function(){if(process.env.NODE_ENV!=='production'&&!isCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,instance)){warn$1('Non-function value encountered for slot "'+key+'". '+'Prefer function slots for better performance.');}var normalized=normalizeSlotValue(value);slots[key]=function(){return normalized;};})();}}};var normalizeVNodeSlots=function normalizeVNodeSlots(instance,children){if(process.env.NODE_ENV!=='production'&&!isKeepAlive(instance.vnode)&&!isCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,instance)){warn$1('Non-function value encountered for default slot. '+'Prefer function slots for better performance.');}var normalized=normalizeSlotValue(children);instance.slots.default=function(){return normalized;};};var initSlots=function initSlots(instance,children){if(instance.vnode.shapeFlag&32/* SLOTS_CHILDREN */){var type=children._;if(type){// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
instance.slots=toRaw(children);// make compiler marker non-enumerable
def(children,'_',type);}else{normalizeObjectSlots(children,instance.slots={},instance);}}else{instance.slots={};if(children){normalizeVNodeSlots(instance,children);}}def(instance.slots,InternalObjectKey,1);};var updateSlots=function updateSlots(instance,children,optimized){var vnode=instance.vnode,slots=instance.slots;var needDeletionCheck=true;var deletionComparisonTarget=EMPTY_OBJ;if(vnode.shapeFlag&32/* SLOTS_CHILDREN */){var type=children._;if(type){// compiled slots.
if(process.env.NODE_ENV!=='production'&&isHmrUpdating){// Parent was HMR updated so slot content may have changed.
// force update slots and mark instance for hmr as well
extend(slots,children);}else if(optimized&&type===1/* STABLE */){// compiled AND stable.
// no need to update, and skip stale slots removal.
needDeletionCheck=false;}else{// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
extend(slots,children);// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
if(!optimized&&type===1/* STABLE */){delete slots._;}}}else{needDeletionCheck=!children.$stable;normalizeObjectSlots(children,slots,instance);}deletionComparisonTarget=children;}else if(children){// non slot object children (direct value) passed to a component
normalizeVNodeSlots(instance,children);deletionComparisonTarget={default:1};}// delete stale slots
if(needDeletionCheck){for(var key in slots){if(!isInternalKey(key)&&!(key in deletionComparisonTarget)){delete slots[key];}}}};var legacyDirectiveHookMap={beforeMount:'bind',mounted:'inserted',updated:['update','componentUpdated'],unmounted:'unbind'};function mapCompatDirectiveHook(name,dir,instance){var mappedName=legacyDirectiveHookMap[name];if(mappedName){if(isArray(mappedName)){var hook=[];mappedName.forEach(function(mapped){var mappedHook=dir[mapped];if(mappedHook){softAssertCompatEnabled("CUSTOM_DIR"/* CUSTOM_DIR */,instance,mapped,name);hook.push(mappedHook);}});return hook.length?hook:undefined;}else{if(dir[mappedName]){softAssertCompatEnabled("CUSTOM_DIR"/* CUSTOM_DIR */,instance,mappedName,name);}return dir[mappedName];}}}/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/function validateDirectiveName(name){if(isBuiltInDirective(name)){warn$1('Do not use built-in directive ids as custom directive id: '+name);}}/**
 * Adds directives to a VNode.
 */function withDirectives(vnode,directives){var internalInstance=currentRenderingInstance;if(internalInstance===null){process.env.NODE_ENV!=='production'&&warn$1('withDirectives can only be used inside render functions.');return vnode;}var instance=internalInstance.proxy;var bindings=vnode.dirs||(vnode.dirs=[]);for(var i=0;i<directives.length;i++){var _directives$i=slicedToArray(directives[i],4),dir=_directives$i[0],value=_directives$i[1],arg=_directives$i[2],_directives$i$=_directives$i[3],modifiers=_directives$i$===undefined?EMPTY_OBJ:_directives$i$;if(isFunction(dir)){dir={mounted:dir,updated:dir};}if(dir.deep){traverse(value);}bindings.push({dir:dir,instance:instance,value:value,oldValue:void 0,arg:arg,modifiers:modifiers});}return vnode;}function invokeDirectiveHook(vnode,prevVNode,instance,name){var bindings=vnode.dirs;var oldBindings=prevVNode&&prevVNode.dirs;for(var i=0;i<bindings.length;i++){var binding=bindings[i];if(oldBindings){binding.oldValue=oldBindings[i].value;}var hook=binding.dir[name];if(!hook){hook=mapCompatDirectiveHook(name,binding.dir,instance);}if(hook){// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();callWithAsyncErrorHandling(hook,instance,8/* DIRECTIVE_HOOK */,[vnode.el,binding,vnode,prevVNode]);resetTracking();}}}// dev only
function installLegacyConfigWarnings(config){var legacyConfigOptions={silent:"CONFIG_SILENT"/* CONFIG_SILENT */,devtools:"CONFIG_DEVTOOLS"/* CONFIG_DEVTOOLS */,ignoredElements:"CONFIG_IGNORED_ELEMENTS"/* CONFIG_IGNORED_ELEMENTS */,keyCodes:"CONFIG_KEY_CODES"/* CONFIG_KEY_CODES */,productionTip:"CONFIG_PRODUCTION_TIP"/* CONFIG_PRODUCTION_TIP */};Object.keys(legacyConfigOptions).forEach(function(key){var val=config[key];Object.defineProperty(config,key,{enumerable:true,get:function get(){return val;},set:function set(newVal){if(!isCopyingConfig){warnDeprecation(legacyConfigOptions[key],null);}val=newVal;}});});}function installLegacyOptionMergeStrats(config){config.optionMergeStrategies=new Proxy({},{get:function get(target,key){if(key in target){return target[key];}if(key in internalOptionMergeStrats&&softAssertCompatEnabled("CONFIG_OPTION_MERGE_STRATS"/* CONFIG_OPTION_MERGE_STRATS */,null)){return internalOptionMergeStrats[key];}}});}var isCopyingConfig=false;// exported only for test
var singletonApp=void 0;var singletonCtor=void 0;// Legacy global Vue constructor
function createCompatVue(createApp,createSingletonApp){singletonApp=createSingletonApp({});var Vue=singletonCtor=function Vue(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return createCompatApp(options,Vue);};function createCompatApp(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var Ctor=arguments[1];assertCompatEnabled("GLOBAL_MOUNT"/* GLOBAL_MOUNT */,null);var data=options.data;if(data&&!isFunction(data)&&softAssertCompatEnabled("OPTIONS_DATA_FN"/* OPTIONS_DATA_FN */,null)){options.data=function(){return data;};}var app=createApp(options);if(Ctor!==Vue){applySingletonPrototype(app,Ctor);}var vm=app._createRoot(options);if(options.el){return vm.$mount(options.el);}else{return vm;}}Vue.version='2.6.14-compat:'+"3.2.31";Vue.config=singletonApp.config;Vue.use=function(p){for(var _len14=arguments.length,options=Array(_len14>1?_len14-1:0),_key22=1;_key22<_len14;_key22++){options[_key22-1]=arguments[_key22];}if(p&&isFunction(p.install)){p.install.apply(p,[Vue].concat(options));}else if(isFunction(p)){p.apply(undefined,[Vue].concat(options));}return Vue;};Vue.mixin=function(m){singletonApp.mixin(m);return Vue;};Vue.component=function(name,comp){if(comp){singletonApp.component(name,comp);return Vue;}else{return singletonApp.component(name);}};Vue.directive=function(name,dir){if(dir){singletonApp.directive(name,dir);return Vue;}else{return singletonApp.directive(name);}};Vue.options={_base:Vue};var cid=1;Vue.cid=cid;Vue.nextTick=nextTick;var extendCache=new WeakMap();function extendCtor(){var extendOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};assertCompatEnabled("GLOBAL_EXTEND"/* GLOBAL_EXTEND */,null);if(isFunction(extendOptions)){extendOptions=extendOptions.options;}if(extendCache.has(extendOptions)){return extendCache.get(extendOptions);}var Super=this;function SubVue(inlineOptions){if(!inlineOptions){return createCompatApp(SubVue.options,SubVue);}else{return createCompatApp(_mergeOptions(extend({},SubVue.options),inlineOptions,internalOptionMergeStrats),SubVue);}}SubVue.super=Super;SubVue.prototype=Object.create(Vue.prototype);SubVue.prototype.constructor=SubVue;// clone non-primitive base option values for edge case of mutating
// extended options
var mergeBase={};for(var key in Super.options){var superValue=Super.options[key];mergeBase[key]=isArray(superValue)?superValue.slice():isObject(superValue)?extend(Object.create(null),superValue):superValue;}SubVue.options=_mergeOptions(mergeBase,extendOptions,internalOptionMergeStrats);SubVue.options._base=SubVue;SubVue.extend=extendCtor.bind(SubVue);SubVue.mixin=Super.mixin;SubVue.use=Super.use;SubVue.cid=++cid;extendCache.set(extendOptions,SubVue);return SubVue;}Vue.extend=extendCtor.bind(Vue);Vue.set=function(target,key,value){assertCompatEnabled("GLOBAL_SET"/* GLOBAL_SET */,null);target[key]=value;};Vue.delete=function(target,key){assertCompatEnabled("GLOBAL_DELETE"/* GLOBAL_DELETE */,null);delete target[key];};Vue.observable=function(target){assertCompatEnabled("GLOBAL_OBSERVABLE"/* GLOBAL_OBSERVABLE */,null);return reactive(target);};Vue.filter=function(name,filter){if(filter){singletonApp.filter(name,filter);return Vue;}else{return singletonApp.filter(name);}};// internal utils - these are technically internal but some plugins use it.
var util={warn:process.env.NODE_ENV!=='production'?warn$1:NOOP,extend:extend,mergeOptions:function mergeOptions(parent,child,vm){return _mergeOptions(parent,child,vm?undefined:internalOptionMergeStrats);},defineReactive:defineReactive};Object.defineProperty(Vue,'util',{get:function get(){assertCompatEnabled("GLOBAL_PRIVATE_UTIL"/* GLOBAL_PRIVATE_UTIL */,null);return util;}});Vue.configureCompat=configureCompat;return Vue;}function installAppCompatProperties(app,context,render){installFilterMethod(app,context);installLegacyOptionMergeStrats(app.config);if(!singletonApp){// this is the call of creating the singleton itself so the rest is
// unnecessary
return;}installCompatMount(app,context,render);installLegacyAPIs(app);applySingletonAppMutations(app);if(process.env.NODE_ENV!=='production')installLegacyConfigWarnings(app.config);}function installFilterMethod(app,context){context.filters={};app.filter=function(name,filter){assertCompatEnabled("FILTERS"/* FILTERS */,null);if(!filter){return context.filters[name];}if(process.env.NODE_ENV!=='production'&&context.filters[name]){warn$1('Filter "'+name+'" has already been registered.');}context.filters[name]=filter;return app;};}function installLegacyAPIs(app){// expose global API on app instance for legacy plugins
Object.defineProperties(app,{// so that app.use() can work with legacy plugins that extend prototypes
prototype:{get:function get(){process.env.NODE_ENV!=='production'&&warnDeprecation("GLOBAL_PROTOTYPE"/* GLOBAL_PROTOTYPE */,null);return app.config.globalProperties;}},nextTick:{value:nextTick},extend:{value:singletonCtor.extend},set:{value:singletonCtor.set},delete:{value:singletonCtor.delete},observable:{value:singletonCtor.observable},util:{get:function get(){return singletonCtor.util;}}});}function applySingletonAppMutations(app){['mixins','components','directives','filters','deopt'].forEach(function(key){// @ts-ignore
app._context[key]=singletonApp._context[key];});// copy over global config mutations
isCopyingConfig=true;var _loop4=function _loop4(key){if(key==='isNativeTag')return'continue';if(isRuntimeOnly()&&(key==='isCustomElement'||key==='compilerOptions')){return'continue';}var val=singletonApp.config[key];// @ts-ignore
app.config[key]=val;// compat for runtime ignoredElements -> isCustomElement
if(key==='ignoredElements'&&isCompatEnabled("CONFIG_IGNORED_ELEMENTS"/* CONFIG_IGNORED_ELEMENTS */,null)&&!isRuntimeOnly()&&isArray(val)){app.config.compilerOptions.isCustomElement=function(tag){return val.some(function(v){return isString(v)?v===tag:v.test(tag);});};}};for(var key in singletonApp.config){var _ret6=_loop4(key);if(_ret6==='continue')continue;}isCopyingConfig=false;applySingletonPrototype(app,singletonCtor);}function applySingletonPrototype(app,Ctor){// copy prototype augmentations as config.globalProperties
var enabled=isCompatEnabled("GLOBAL_PROTOTYPE"/* GLOBAL_PROTOTYPE */,null);if(enabled){app.config.globalProperties=Object.create(Ctor.prototype);}var hasPrototypeAugmentations=false;var descriptors=Object.getOwnPropertyDescriptors(Ctor.prototype);for(var key in descriptors){if(key!=='constructor'){hasPrototypeAugmentations=true;if(enabled){Object.defineProperty(app.config.globalProperties,key,descriptors[key]);}}}if(process.env.NODE_ENV!=='production'&&hasPrototypeAugmentations){warnDeprecation("GLOBAL_PROTOTYPE"/* GLOBAL_PROTOTYPE */,null);}}function installCompatMount(app,context,render){var isMounted=false;/**
     * Vue 2 supports the behavior of creating a component instance but not
     * mounting it, which is no longer possible in Vue 3 - this internal
     * function simulates that behavior.
     */app._createRoot=function(options){var component=app._component;var vnode=createVNode(component,options.propsData||null);vnode.appContext=context;var hasNoRender=!isFunction(component)&&!component.render&&!component.template;var emptyRender=function emptyRender(){};// create root instance
var instance=createComponentInstance(vnode,null,null);// suppress "missing render fn" warning since it can't be determined
// until $mount is called
if(hasNoRender){instance.render=emptyRender;}setupComponent(instance);vnode.component=instance;vnode.isCompatRoot=true;// $mount & $destroy
// these are defined on ctx and picked up by the $mount/$destroy
// public property getters on the instance proxy.
// Note: the following assumes DOM environment since the compat build
// only targets web. It essentially includes logic for app.mount from
// both runtime-core AND runtime-dom.
instance.ctx._compat_mount=function(selectorOrEl){if(isMounted){process.env.NODE_ENV!=='production'&&warn$1('Root instance is already mounted.');return;}var container=void 0;if(typeof selectorOrEl==='string'){// eslint-disable-next-line
var result=document.querySelector(selectorOrEl);if(!result){process.env.NODE_ENV!=='production'&&warn$1('Failed to mount root instance: selector "'+selectorOrEl+'" returned null.');return;}container=result;}else{// eslint-disable-next-line
container=selectorOrEl||document.createElement('div');}var isSVG=container instanceof SVGElement;// HMR root reload
if(process.env.NODE_ENV!=='production'){context.reload=function(){var cloned=cloneVNode(vnode);// compat mode will use instance if not reset to null
cloned.component=null;render(cloned,container,isSVG);};}// resolve in-DOM template if component did not provide render
// and no setup/mixin render functions are provided (by checking
// that the instance is still using the placeholder render fn)
if(hasNoRender&&instance.render===emptyRender){// root directives check
if(process.env.NODE_ENV!=='production'){for(var i=0;i<container.attributes.length;i++){var attr=container.attributes[i];if(attr.name!=='v-cloak'&&/^(v-|:|@)/.test(attr.name)){warnDeprecation("GLOBAL_MOUNT_CONTAINER"/* GLOBAL_MOUNT_CONTAINER */,null);break;}}}instance.render=null;component.template=container.innerHTML;finishComponentSetup(instance,false,true/* skip options */);}// clear content before mounting
container.innerHTML='';// TODO hydration
render(vnode,container,isSVG);if(container instanceof Element){container.removeAttribute('v-cloak');container.setAttribute('data-v-app','');}isMounted=true;app._container=container;container.__vue_app__=app;if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsInitApp(app,version);}return instance.proxy;};instance.ctx._compat_destroy=function(){if(isMounted){render(null,app._container);if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsUnmountApp(app);}delete app._container.__vue_app__;}else{var bum=instance.bum,scope=instance.scope,um=instance.um;// beforeDestroy hooks
if(bum){invokeArrayFns(bum);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){instance.emit('hook:beforeDestroy');}// stop effects
if(scope){scope.stop();}// unmounted hook
if(um){invokeArrayFns(um);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){instance.emit('hook:destroyed');}}};return instance.proxy;};}var methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse'];var patched=new WeakSet();function defineReactive(obj,key,val){// it's possible for the original object to be mutated after being defined
// and expecting reactivity... we are covering it here because this seems to
// be a bit more common.
if(isObject(val)&&!isReactive(val)&&!patched.has(val)){var reactiveVal=reactive(val);if(isArray(val)){methodsToPatch.forEach(function(m){// @ts-ignore
val[m]=function(){var _Array$prototype$m;for(var _len15=arguments.length,args=Array(_len15),_key23=0;_key23<_len15;_key23++){args[_key23]=arguments[_key23];}// @ts-ignore
(_Array$prototype$m=Array.prototype[m]).call.apply(_Array$prototype$m,[reactiveVal].concat(args));};});}else{Object.keys(val).forEach(function(key){try{defineReactiveSimple(val,key,val[key]);}catch(e){}});}}var i=obj.$;if(i&&obj===i.proxy){// target is a Vue instance - define on instance.ctx
defineReactiveSimple(i.ctx,key,val);i.accessCache=Object.create(null);}else if(isReactive(obj)){obj[key]=val;}else{defineReactiveSimple(obj,key,val);}}function defineReactiveSimple(obj,key,val){val=isObject(val)?reactive(val):val;Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function get(){track(obj,"get"/* GET */,key);return val;},set:function set(newVal){val=isObject(newVal)?reactive(newVal):newVal;trigger(obj,"set"/* SET */,key,newVal);}});}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:false,globalProperties:{},optionMergeStrategies:{},errorHandler:undefined,warnHandler:undefined,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap(),propsCache:new WeakMap(),emitsCache:new WeakMap()};}var uid=0;function createAppAPI(render,hydrate){return function createApp(rootComponent){var rootProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(rootProps!=null&&!isObject(rootProps)){process.env.NODE_ENV!=='production'&&warn$1('root props passed to app.mount() must be an object.');rootProps=null;}var context=createAppContext();var installedPlugins=new Set();var isMounted=false;var app=context.app={_uid:uid++,_component:rootComponent,_props:rootProps,_container:null,_context:context,_instance:null,version:version,get config(){return context.config;},set config(v){if(process.env.NODE_ENV!=='production'){warn$1('app.config cannot be replaced. Modify individual options instead.');}},use:function use(plugin){for(var _len16=arguments.length,options=Array(_len16>1?_len16-1:0),_key24=1;_key24<_len16;_key24++){options[_key24-1]=arguments[_key24];}if(installedPlugins.has(plugin)){process.env.NODE_ENV!=='production'&&warn$1('Plugin has already been applied to target app.');}else if(plugin&&isFunction(plugin.install)){installedPlugins.add(plugin);plugin.install.apply(plugin,[app].concat(options));}else if(isFunction(plugin)){installedPlugins.add(plugin);plugin.apply(undefined,[app].concat(options));}else if(process.env.NODE_ENV!=='production'){warn$1('A plugin must either be a function or an object with an "install" '+'function.');}return app;},mixin:function mixin(_mixin){if(__VUE_OPTIONS_API__){if(!context.mixins.includes(_mixin)){context.mixins.push(_mixin);}else if(process.env.NODE_ENV!=='production'){warn$1('Mixin has already been applied to target app'+(_mixin.name?': '+_mixin.name:''));}}else if(process.env.NODE_ENV!=='production'){warn$1('Mixins are only available in builds supporting Options API');}return app;},component:function component(name,_component){if(process.env.NODE_ENV!=='production'){validateComponentName(name,context.config);}if(!_component){return context.components[name];}if(process.env.NODE_ENV!=='production'&&context.components[name]){warn$1('Component "'+name+'" has already been registered in target app.');}context.components[name]=_component;return app;},directive:function directive(name,_directive){if(process.env.NODE_ENV!=='production'){validateDirectiveName(name);}if(!_directive){return context.directives[name];}if(process.env.NODE_ENV!=='production'&&context.directives[name]){warn$1('Directive "'+name+'" has already been registered in target app.');}context.directives[name]=_directive;return app;},mount:function mount(rootContainer,isHydrate,isSVG){if(!isMounted){var vnode=createVNode(rootComponent,rootProps);// store app context on the root VNode.
// this will be set on the root instance on initial mount.
vnode.appContext=context;// HMR root reload
if(process.env.NODE_ENV!=='production'){context.reload=function(){render(cloneVNode(vnode),rootContainer,isSVG);};}if(isHydrate&&hydrate){hydrate(vnode,rootContainer);}else{render(vnode,rootContainer,isSVG);}isMounted=true;app._container=rootContainer;rootContainer.__vue_app__=app;if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){app._instance=vnode.component;devtoolsInitApp(app,version);}return getExposeProxy(vnode.component)||vnode.component.proxy;}else if(process.env.NODE_ENV!=='production'){warn$1('App has already been mounted.\n'+'If you want to remount the same app, move your app creation logic '+'into a factory function and create fresh app instances for each '+'mount - e.g. `const createMyApp = () => createApp(App)`');}},unmount:function unmount(){if(isMounted){render(null,app._container);if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){app._instance=null;devtoolsUnmountApp(app);}delete app._container.__vue_app__;}else if(process.env.NODE_ENV!=='production'){warn$1('Cannot unmount an app that is not mounted.');}},provide:function provide(key,value){if(process.env.NODE_ENV!=='production'&&key in context.provides){warn$1('App already provides property with key "'+String(key)+'". '+'It will be overwritten with the new value.');}// TypeScript doesn't allow symbols as index type
// https://github.com/Microsoft/TypeScript/issues/24587
context.provides[key]=value;return app;}};{installAppCompatProperties(app,context,render);}return app;};}/**
 * Function for handling a template ref
 */function setRef(rawRef,oldRawRef,parentSuspense,vnode){var isUnmount=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;if(isArray(rawRef)){rawRef.forEach(function(r,i){return setRef(r,oldRawRef&&(isArray(oldRawRef)?oldRawRef[i]:oldRawRef),parentSuspense,vnode,isUnmount);});return;}if(isAsyncWrapper(vnode)&&!isUnmount){// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;}var refValue=vnode.shapeFlag&4/* STATEFUL_COMPONENT */?getExposeProxy(vnode.component)||vnode.component.proxy:vnode.el;var value=isUnmount?null:refValue;var owner=rawRef.i,ref=rawRef.r;if(process.env.NODE_ENV!=='production'&&!owner){warn$1('Missing ref owner context. ref cannot be used on hoisted vnodes. '+'A vnode with ref must be created inside the render function.');return;}var oldRef=oldRawRef&&oldRawRef.r;var refs=owner.refs===EMPTY_OBJ?owner.refs={}:owner.refs;var setupState=owner.setupState;// dynamic ref changed. unset old ref
if(oldRef!=null&&oldRef!==ref){if(isString(oldRef)){refs[oldRef]=null;if(hasOwn(setupState,oldRef)){setupState[oldRef]=null;}}else if(isRef(oldRef)){oldRef.value=null;}}if(isFunction(ref)){callWithErrorHandling(ref,owner,12/* FUNCTION_REF */,[value,refs]);}else{var _isString=isString(ref);var _isRef=isRef(ref);if(_isString||_isRef){var doSet=function doSet(){if(rawRef.f){var existing=_isString?refs[ref]:ref.value;if(isUnmount){isArray(existing)&&remove(existing,refValue);}else{if(!isArray(existing)){if(_isString){refs[ref]=[refValue];}else{ref.value=[refValue];if(rawRef.k)refs[rawRef.k]=ref.value;}}else if(!existing.includes(refValue)){existing.push(refValue);}}}else if(_isString){refs[ref]=value;if(hasOwn(setupState,ref)){setupState[ref]=value;}}else if(isRef(ref)){ref.value=value;if(rawRef.k)refs[rawRef.k]=value;}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid template ref type:',ref,'('+(typeof ref==='undefined'?'undefined':_typeof(ref))+')');}};if(value){doSet.id=-1;queuePostRenderEffect(doSet,parentSuspense);}else{doSet();}}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid template ref type:',ref,'('+(typeof ref==='undefined'?'undefined':_typeof(ref))+')');}}}var hasMismatch=false;var isSVGContainer=function isSVGContainer(container){return /svg/.test(container.namespaceURI)&&container.tagName!=='foreignObject';};var isComment=function isComment(node){return node.nodeType===8;};// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals){var mountComponent=rendererInternals.mt,patch=rendererInternals.p,_rendererInternals$o2=rendererInternals.o,patchProp=_rendererInternals$o2.patchProp,nextSibling=_rendererInternals$o2.nextSibling,parentNode=_rendererInternals$o2.parentNode,remove=_rendererInternals$o2.remove,insert=_rendererInternals$o2.insert,createComment=_rendererInternals$o2.createComment;var hydrate=function hydrate(vnode,container){if(!container.hasChildNodes()){process.env.NODE_ENV!=='production'&&warn$1('Attempting to hydrate existing markup but container is empty. '+'Performing full mount instead.');patch(null,vnode,container);flushPostFlushCbs();return;}hasMismatch=false;hydrateNode(container.firstChild,vnode,null,null,null);flushPostFlushCbs();if(hasMismatch&&!false){// this error should show up in production
console.error('Hydration completed but contains mismatches.');}};var hydrateNode=function hydrateNode(node,vnode,parentComponent,parentSuspense,slotScopeIds){var optimized=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;var isFragmentStart=isComment(node)&&node.data==='[';var onMismatch=function onMismatch(){return handleMismatch(node,vnode,parentComponent,parentSuspense,slotScopeIds,isFragmentStart);};var type=vnode.type,ref=vnode.ref,shapeFlag=vnode.shapeFlag;var domType=node.nodeType;vnode.el=node;var nextNode=null;switch(type){case Text:if(domType!==3/* TEXT */){nextNode=onMismatch();}else{if(node.data!==vnode.children){hasMismatch=true;process.env.NODE_ENV!=='production'&&warn$1('Hydration text mismatch:'+('\n- Client: '+JSON.stringify(node.data))+('\n- Server: '+JSON.stringify(vnode.children)));node.data=vnode.children;}nextNode=nextSibling(node);}break;case Comment:if(domType!==8/* COMMENT */||isFragmentStart){nextNode=onMismatch();}else{nextNode=nextSibling(node);}break;case Static:if(domType!==1/* ELEMENT */){nextNode=onMismatch();}else{// determine anchor, adopt content
nextNode=node;// if the static vnode has its content stripped during build,
// adopt it from the server-rendered HTML.
var needToAdoptContent=!vnode.children.length;for(var i=0;i<vnode.staticCount;i++){if(needToAdoptContent)vnode.children+=nextNode.outerHTML;if(i===vnode.staticCount-1){vnode.anchor=nextNode;}nextNode=nextSibling(nextNode);}return nextNode;}break;case Fragment:if(!isFragmentStart){nextNode=onMismatch();}else{nextNode=hydrateFragment(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized);}break;default:if(shapeFlag&1/* ELEMENT */){if(domType!==1/* ELEMENT */||vnode.type.toLowerCase()!==node.tagName.toLowerCase()){nextNode=onMismatch();}else{nextNode=hydrateElement(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized);}}else if(shapeFlag&6/* COMPONENT */){// when setting up the render effect, if the initial vnode already
// has .el set, the component will perform hydration instead of mount
// on its sub-tree.
vnode.slotScopeIds=slotScopeIds;var container=parentNode(node);mountComponent(vnode,container,null,parentComponent,parentSuspense,isSVGContainer(container),optimized);// component may be async, so in the case of fragments we cannot rely
// on component's rendered output to determine the end of the fragment
// instead, we do a lookahead to find the end anchor node.
nextNode=isFragmentStart?locateClosingAsyncAnchor(node):nextSibling(node);// #3787
// if component is async, it may get moved / unmounted before its
// inner component is loaded, so we need to give it a placeholder
// vnode that matches its adopted DOM.
if(isAsyncWrapper(vnode)){var subTree=void 0;if(isFragmentStart){subTree=createVNode(Fragment);subTree.anchor=nextNode?nextNode.previousSibling:container.lastChild;}else{subTree=node.nodeType===3?createTextVNode(''):createVNode('div');}subTree.el=node;vnode.component.subTree=subTree;}}else if(shapeFlag&64/* TELEPORT */){if(domType!==8/* COMMENT */){nextNode=onMismatch();}else{nextNode=vnode.type.hydrate(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized,rendererInternals,hydrateChildren);}}else if(shapeFlag&128/* SUSPENSE */){nextNode=vnode.type.hydrate(node,vnode,parentComponent,parentSuspense,isSVGContainer(parentNode(node)),slotScopeIds,optimized,rendererInternals,hydrateNode);}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid HostVNode type:',type,'('+(typeof type==='undefined'?'undefined':_typeof(type))+')');}}if(ref!=null){setRef(ref,null,parentSuspense,vnode);}return nextNode;};var hydrateElement=function hydrateElement(el,vnode,parentComponent,parentSuspense,slotScopeIds,optimized){optimized=optimized||!!vnode.dynamicChildren;var type=vnode.type,props=vnode.props,patchFlag=vnode.patchFlag,shapeFlag=vnode.shapeFlag,dirs=vnode.dirs;// #4006 for form elements with non-string v-model value bindings
// e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
var forcePatchValue=type==='input'&&dirs||type==='option';// skip props & children if this is hoisted static nodes
// #5405 in dev, always hydrate children for HMR
if(process.env.NODE_ENV!=='production'||forcePatchValue||patchFlag!==-1/* HOISTED */){if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'created');}// props
if(props){if(forcePatchValue||!optimized||patchFlag&(16/* FULL_PROPS */|32/* HYDRATE_EVENTS */)){for(var key in props){if(forcePatchValue&&key.endsWith('value')||isOn(key)&&!isReservedProp(key)){patchProp(el,key,null,props[key],false,undefined,parentComponent);}}}else if(props.onClick){// Fast path for click listeners (which is most often) to avoid
// iterating through props.
patchProp(el,'onClick',null,props.onClick,false,undefined,parentComponent);}}// vnode / directive hooks
var vnodeHooks=void 0;if(vnodeHooks=props&&props.onVnodeBeforeMount){invokeVNodeHook(vnodeHooks,parentComponent,vnode);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeMount');}if((vnodeHooks=props&&props.onVnodeMounted)||dirs){queueEffectWithSuspense(function(){vnodeHooks&&invokeVNodeHook(vnodeHooks,parentComponent,vnode);dirs&&invokeDirectiveHook(vnode,null,parentComponent,'mounted');},parentSuspense);}// children
if(shapeFlag&16/* ARRAY_CHILDREN */&&// skip if element has innerHTML / textContent
!(props&&(props.innerHTML||props.textContent))){var next=hydrateChildren(el.firstChild,vnode,el,parentComponent,parentSuspense,slotScopeIds,optimized);var _hasWarned=false;while(next){hasMismatch=true;if(process.env.NODE_ENV!=='production'&&!_hasWarned){warn$1('Hydration children mismatch in <'+vnode.type+'>: '+'server rendered element contains more child nodes than client vdom.');_hasWarned=true;}// The SSRed DOM contains more nodes than it should. Remove them.
var cur=next;next=next.nextSibling;remove(cur);}}else if(shapeFlag&8/* TEXT_CHILDREN */){if(el.textContent!==vnode.children){hasMismatch=true;process.env.NODE_ENV!=='production'&&warn$1('Hydration text content mismatch in <'+vnode.type+'>:\n'+('- Client: '+el.textContent+'\n')+('- Server: '+vnode.children));el.textContent=vnode.children;}}}return el.nextSibling;};var hydrateChildren=function hydrateChildren(node,parentVNode,container,parentComponent,parentSuspense,slotScopeIds,optimized){optimized=optimized||!!parentVNode.dynamicChildren;var children=parentVNode.children;var l=children.length;var hasWarned=false;for(var i=0;i<l;i++){var vnode=optimized?children[i]:children[i]=normalizeVNode(children[i]);if(node){node=hydrateNode(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized);}else if(vnode.type===Text&&!vnode.children){continue;}else{hasMismatch=true;if(process.env.NODE_ENV!=='production'&&!hasWarned){warn$1('Hydration children mismatch in <'+container.tagName.toLowerCase()+'>: '+'server rendered element contains fewer child nodes than client vdom.');hasWarned=true;}// the SSRed DOM didn't contain enough nodes. Mount the missing ones.
patch(null,vnode,container,null,parentComponent,parentSuspense,isSVGContainer(container),slotScopeIds);}}return node;};var hydrateFragment=function hydrateFragment(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized){var fragmentSlotScopeIds=vnode.slotScopeIds;if(fragmentSlotScopeIds){slotScopeIds=slotScopeIds?slotScopeIds.concat(fragmentSlotScopeIds):fragmentSlotScopeIds;}var container=parentNode(node);var next=hydrateChildren(nextSibling(node),vnode,container,parentComponent,parentSuspense,slotScopeIds,optimized);if(next&&isComment(next)&&next.data===']'){return nextSibling(vnode.anchor=next);}else{// fragment didn't hydrate successfully, since we didn't get a end anchor
// back. This should have led to node/children mismatch warnings.
hasMismatch=true;// since the anchor is missing, we need to create one and insert it
insert(vnode.anchor=createComment(']'),container,next);return next;}};var handleMismatch=function handleMismatch(node,vnode,parentComponent,parentSuspense,slotScopeIds,isFragment){hasMismatch=true;process.env.NODE_ENV!=='production'&&warn$1('Hydration node mismatch:\n- Client vnode:',vnode.type,'\n- Server rendered DOM:',node,node.nodeType===3/* TEXT */?'(text)':isComment(node)&&node.data==='['?'(start of fragment)':'');vnode.el=null;if(isFragment){// remove excessive fragment nodes
var end=locateClosingAsyncAnchor(node);while(true){var _next2=nextSibling(node);if(_next2&&_next2!==end){remove(_next2);}else{break;}}}var next=nextSibling(node);var container=parentNode(node);remove(node);patch(null,vnode,container,next,parentComponent,parentSuspense,isSVGContainer(container),slotScopeIds);return next;};var locateClosingAsyncAnchor=function locateClosingAsyncAnchor(node){var match=0;while(node){node=nextSibling(node);if(node&&isComment(node)){if(node.data==='[')match++;if(node.data===']'){if(match===0){return nextSibling(node);}else{match--;}}}}return node;};return[hydrate,hydrateNode];}/* eslint-disable no-restricted-globals */var supported=void 0;var perf=void 0;function startMeasure(instance,type){if(instance.appContext.config.performance&&isSupported()){perf.mark('vue-'+type+'-'+instance.uid);}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsPerfStart(instance,type,supported?perf.now():Date.now());}}function endMeasure(instance,type){if(instance.appContext.config.performance&&isSupported()){var startTag='vue-'+type+'-'+instance.uid;var endTag=startTag+':end';perf.mark(endTag);perf.measure('<'+formatComponentName(instance,instance.type)+'> '+type,startTag,endTag);perf.clearMarks(startTag);perf.clearMarks(endTag);}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsPerfEnd(instance,type,supported?perf.now():Date.now());}}function isSupported(){if(supported!==undefined){return supported;}if(typeof window!=='undefined'&&window.performance){supported=true;perf=window.performance;}else{supported=false;}return supported;}/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */function initFeatureFlags(){var needWarn=[];if(typeof __VUE_OPTIONS_API__!=='boolean'){process.env.NODE_ENV!=='production'&&needWarn.push('__VUE_OPTIONS_API__');getGlobalThis().__VUE_OPTIONS_API__=true;}if(typeof __VUE_PROD_DEVTOOLS__!=='boolean'){process.env.NODE_ENV!=='production'&&needWarn.push('__VUE_PROD_DEVTOOLS__');getGlobalThis().__VUE_PROD_DEVTOOLS__=false;}if(process.env.NODE_ENV!=='production'&&needWarn.length){var multi=needWarn.length>1;console.warn('Feature flag'+(multi?'s':'')+' '+needWarn.join(', ')+' '+(multi?'are':'is')+' not explicitly defined. You are running the esm-bundler build of Vue, '+'which expects these compile-time feature flags to be globally injected '+'via the bundler config in order to get better tree-shaking in the '+'production bundle.\n\n'+'For more details, see https://link.vuejs.org/feature-flags.');}}var queuePostRenderEffect=queueEffectWithSuspense;/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */function createRenderer(options){return baseCreateRenderer(options);}// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options){return baseCreateRenderer(options,createHydrationFunctions);}// implementation
function baseCreateRenderer(options,createHydrationFns){// compile-time feature flags check
{initFeatureFlags();}var target=getGlobalThis();target.__VUE__=true;if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__,target);}var hostInsert=options.insert,hostRemove=options.remove,hostPatchProp=options.patchProp,hostCreateElement=options.createElement,hostCreateText=options.createText,hostCreateComment=options.createComment,hostSetText=options.setText,hostSetElementText=options.setElementText,hostParentNode=options.parentNode,hostNextSibling=options.nextSibling,_options$setScopeId=options.setScopeId,hostSetScopeId=_options$setScopeId===undefined?NOOP:_options$setScopeId,hostCloneNode=options.cloneNode,hostInsertStaticContent=options.insertStaticContent;// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
var patch=function patch(n1,n2,container){var anchor=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var parentComponent=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var parentSuspense=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;var isSVG=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;var slotScopeIds=arguments.length>7&&arguments[7]!==undefined?arguments[7]:null;var optimized=arguments.length>8&&arguments[8]!==undefined?arguments[8]:process.env.NODE_ENV!=='production'&&isHmrUpdating?false:!!n2.dynamicChildren;if(n1===n2){return;}// patching & not same type, unmount old tree
if(n1&&!isSameVNodeType(n1,n2)){anchor=getNextHostNode(n1);unmount(n1,parentComponent,parentSuspense,true);n1=null;}if(n2.patchFlag===-2/* BAIL */){optimized=false;n2.dynamicChildren=null;}var type=n2.type,ref=n2.ref,shapeFlag=n2.shapeFlag;switch(type){case Text:processText(n1,n2,container,anchor);break;case Comment:processCommentNode(n1,n2,container,anchor);break;case Static:if(n1==null){mountStaticNode(n2,container,anchor,isSVG);}else if(process.env.NODE_ENV!=='production'){patchStaticNode(n1,n2,container,isSVG);}break;case Fragment:processFragment(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);break;default:if(shapeFlag&1/* ELEMENT */){processElement(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&6/* COMPONENT */){processComponent(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&64/* TELEPORT */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else if(shapeFlag&128/* SUSPENSE */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid VNode type:',type,'('+(typeof type==='undefined'?'undefined':_typeof(type))+')');}}// set ref
if(ref!=null&&parentComponent){setRef(ref,n1&&n1.ref,parentSuspense,n2||n1,!n2);}};var processText=function processText(n1,n2,container,anchor){if(n1==null){hostInsert(n2.el=hostCreateText(n2.children),container,anchor);}else{var el=n2.el=n1.el;if(n2.children!==n1.children){hostSetText(el,n2.children);}}};var processCommentNode=function processCommentNode(n1,n2,container,anchor){if(n1==null){hostInsert(n2.el=hostCreateComment(n2.children||''),container,anchor);}else{// there's no support for dynamic comments
n2.el=n1.el;}};var mountStaticNode=function mountStaticNode(n2,container,anchor,isSVG){var _hostInsertStaticCont=hostInsertStaticContent(n2.children,container,anchor,isSVG,n2.el,n2.anchor);var _hostInsertStaticCont2=slicedToArray(_hostInsertStaticCont,2);n2.el=_hostInsertStaticCont2[0];n2.anchor=_hostInsertStaticCont2[1];};/**
     * Dev / HMR only
     */var patchStaticNode=function patchStaticNode(n1,n2,container,isSVG){// static nodes are only patched during dev for HMR
if(n2.children!==n1.children){var anchor=hostNextSibling(n1.anchor);// remove existing
removeStaticNode(n1);var _hostInsertStaticCont3=hostInsertStaticContent(n2.children,container,anchor,isSVG);var _hostInsertStaticCont4=slicedToArray(_hostInsertStaticCont3,2);n2.el=_hostInsertStaticCont4[0];n2.anchor=_hostInsertStaticCont4[1];}else{n2.el=n1.el;n2.anchor=n1.anchor;}};var moveStaticNode=function moveStaticNode(_ref20,container,nextSibling){var el=_ref20.el,anchor=_ref20.anchor;var next=void 0;while(el&&el!==anchor){next=hostNextSibling(el);hostInsert(el,container,nextSibling);el=next;}hostInsert(anchor,container,nextSibling);};var removeStaticNode=function removeStaticNode(_ref21){var el=_ref21.el,anchor=_ref21.anchor;var next=void 0;while(el&&el!==anchor){next=hostNextSibling(el);hostRemove(el);el=next;}hostRemove(anchor);};var processElement=function processElement(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){isSVG=isSVG||n2.type==='svg';if(n1==null){mountElement(n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};var mountElement=function mountElement(vnode,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var el=void 0;var vnodeHook=void 0;var type=vnode.type,props=vnode.props,shapeFlag=vnode.shapeFlag,transition=vnode.transition,patchFlag=vnode.patchFlag,dirs=vnode.dirs;if(!(process.env.NODE_ENV!=='production')&&vnode.el&&hostCloneNode!==undefined&&patchFlag===-1/* HOISTED */){// If a vnode has non-null el, it means it's being reused.
// Only static vnodes can be reused, so its mounted DOM nodes should be
// exactly the same, and we can simply do a clone here.
// only do this in production since cloned trees cannot be HMR updated.
el=vnode.el=hostCloneNode(vnode.el);}else{el=vnode.el=hostCreateElement(vnode.type,isSVG,props&&props.is,props);// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
if(shapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(el,vnode.children);}else if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(vnode.children,el,null,parentComponent,parentSuspense,isSVG&&type!=='foreignObject',slotScopeIds,optimized);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'created');}// props
if(props){for(var key in props){if(key!=='value'&&!isReservedProp(key)){hostPatchProp(el,key,null,props[key],isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}/**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */if('value'in props){hostPatchProp(el,'value',null,props.value);}if(vnodeHook=props.onVnodeBeforeMount){invokeVNodeHook(vnodeHook,parentComponent,vnode);}}// scopeId
setScopeId(el,vnode,vnode.scopeId,slotScopeIds,parentComponent);}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){Object.defineProperty(el,'__vnode',{value:vnode,enumerable:false});Object.defineProperty(el,'__vueParentComponent',{value:parentComponent,enumerable:false});}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeMount');}// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
var needCallTransitionHooks=(!parentSuspense||parentSuspense&&!parentSuspense.pendingBranch)&&transition&&!transition.persisted;if(needCallTransitionHooks){transition.beforeEnter(el);}hostInsert(el,container,anchor);if((vnodeHook=props&&props.onVnodeMounted)||needCallTransitionHooks||dirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);needCallTransitionHooks&&transition.enter(el);dirs&&invokeDirectiveHook(vnode,null,parentComponent,'mounted');},parentSuspense);}};var setScopeId=function setScopeId(el,vnode,scopeId,slotScopeIds,parentComponent){if(scopeId){hostSetScopeId(el,scopeId);}if(slotScopeIds){for(var i=0;i<slotScopeIds.length;i++){hostSetScopeId(el,slotScopeIds[i]);}}if(parentComponent){var subTree=parentComponent.subTree;if(process.env.NODE_ENV!=='production'&&subTree.patchFlag>0&&subTree.patchFlag&2048/* DEV_ROOT_FRAGMENT */){subTree=filterSingleRoot(subTree.children)||subTree;}if(vnode===subTree){var parentVNode=parentComponent.vnode;setScopeId(el,parentVNode,parentVNode.scopeId,parentVNode.slotScopeIds,parentComponent.parent);}}};var mountChildren=function mountChildren(children,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var start=arguments.length>8&&arguments[8]!==undefined?arguments[8]:0;for(var i=start;i<children.length;i++){var child=children[i]=optimized?cloneIfMounted(children[i]):normalizeVNode(children[i]);patch(null,child,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};var patchElement=function patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var el=n2.el=n1.el;var patchFlag=n2.patchFlag,dynamicChildren=n2.dynamicChildren,dirs=n2.dirs;// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
patchFlag|=n1.patchFlag&16/* FULL_PROPS */;var oldProps=n1.props||EMPTY_OBJ;var newProps=n2.props||EMPTY_OBJ;var vnodeHook=void 0;// disable recurse in beforeUpdate hooks
parentComponent&&toggleRecurse(parentComponent,false);if(vnodeHook=newProps.onVnodeBeforeUpdate){invokeVNodeHook(vnodeHook,parentComponent,n2,n1);}if(dirs){invokeDirectiveHook(n2,n1,parentComponent,'beforeUpdate');}parentComponent&&toggleRecurse(parentComponent,true);if(process.env.NODE_ENV!=='production'&&isHmrUpdating){// HMR updated, force full diff
patchFlag=0;optimized=false;dynamicChildren=null;}var areChildrenSVG=isSVG&&n2.type!=='foreignObject';if(dynamicChildren){patchBlockChildren(n1.dynamicChildren,dynamicChildren,el,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds);if(process.env.NODE_ENV!=='production'&&parentComponent&&parentComponent.type.__hmrId){traverseStaticChildren(n1,n2);}}else if(!optimized){// full diff
patchChildren(n1,n2,el,null,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds,false);}if(patchFlag>0){// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(patchFlag&16/* FULL_PROPS */){// element props contain dynamic keys, full diff needed
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}else{// class
// this flag is matched when the element has dynamic class bindings.
if(patchFlag&2/* CLASS */){if(oldProps.class!==newProps.class){hostPatchProp(el,'class',null,newProps.class,isSVG);}}// style
// this flag is matched when the element has dynamic style bindings
if(patchFlag&4/* STYLE */){hostPatchProp(el,'style',oldProps.style,newProps.style,isSVG);}// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(patchFlag&8/* PROPS */){// if the flag is present then dynamicProps must be non-null
var propsToUpdate=n2.dynamicProps;for(var i=0;i<propsToUpdate.length;i++){var key=propsToUpdate[i];var prev=oldProps[key];var next=newProps[key];// #1471 force patch value
if(next!==prev||key==='value'){hostPatchProp(el,key,prev,next,isSVG,n1.children,parentComponent,parentSuspense,unmountChildren);}}}}// text
// This flag is matched when the element has only dynamic text children.
if(patchFlag&1/* TEXT */){if(n1.children!==n2.children){hostSetElementText(el,n2.children);}}}else if(!optimized&&dynamicChildren==null){// unoptimized, full diff
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}if((vnodeHook=newProps.onVnodeUpdated)||dirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,n2,n1);dirs&&invokeDirectiveHook(n2,n1,parentComponent,'updated');},parentSuspense);}};// The fast path for blocks.
var patchBlockChildren=function patchBlockChildren(oldChildren,newChildren,fallbackContainer,parentComponent,parentSuspense,isSVG,slotScopeIds){for(var i=0;i<newChildren.length;i++){var oldVNode=oldChildren[i];var newVNode=newChildren[i];// Determine the container (parent element) for the patch.
var container=// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
oldVNode.el&&(// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
oldVNode.type===Fragment||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!isSameVNodeType(oldVNode,newVNode)||// - In the case of a component, it could contain anything.
oldVNode.shapeFlag&(6/* COMPONENT */|64/* TELEPORT */))?hostParentNode(oldVNode.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
fallbackContainer;patch(oldVNode,newVNode,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,true);}};var patchProps=function patchProps(el,vnode,oldProps,newProps,parentComponent,parentSuspense,isSVG){if(oldProps!==newProps){for(var key in newProps){// empty string is not valid prop
if(isReservedProp(key))continue;var next=newProps[key];var prev=oldProps[key];// defer patching value
if(next!==prev&&key!=='value'){hostPatchProp(el,key,prev,next,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}if(oldProps!==EMPTY_OBJ){for(var _key25 in oldProps){if(!isReservedProp(_key25)&&!(_key25 in newProps)){hostPatchProp(el,_key25,oldProps[_key25],null,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}}if('value'in newProps){hostPatchProp(el,'value',oldProps.value,newProps.value);}}};var processFragment=function processFragment(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var fragmentStartAnchor=n2.el=n1?n1.el:hostCreateText('');var fragmentEndAnchor=n2.anchor=n1?n1.anchor:hostCreateText('');var patchFlag=n2.patchFlag,dynamicChildren=n2.dynamicChildren,fragmentSlotScopeIds=n2.slotScopeIds;if(process.env.NODE_ENV!=='production'&&isHmrUpdating){// HMR updated, force full diff
patchFlag=0;optimized=false;dynamicChildren=null;}// check if this is a slot fragment with :slotted scope ids
if(fragmentSlotScopeIds){slotScopeIds=slotScopeIds?slotScopeIds.concat(fragmentSlotScopeIds):fragmentSlotScopeIds;}if(n1==null){hostInsert(fragmentStartAnchor,container,anchor);hostInsert(fragmentEndAnchor,container,anchor);// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
mountChildren(n2.children,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{if(patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */&&dynamicChildren&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
n1.dynamicChildren){// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
patchBlockChildren(n1.dynamicChildren,dynamicChildren,container,parentComponent,parentSuspense,isSVG,slotScopeIds);if(process.env.NODE_ENV!=='production'&&parentComponent&&parentComponent.type.__hmrId){traverseStaticChildren(n1,n2);}else if(// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
n2.key!=null||parentComponent&&n2===parentComponent.subTree){traverseStaticChildren(n1,n2,true/* shallow */);}}else{// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
patchChildren(n1,n2,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}};var processComponent=function processComponent(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){n2.slotScopeIds=slotScopeIds;if(n1==null){if(n2.shapeFlag&512/* COMPONENT_KEPT_ALIVE */){parentComponent.ctx.activate(n2,container,anchor,isSVG,optimized);}else{mountComponent(n2,container,anchor,parentComponent,parentSuspense,isSVG,optimized);}}else{updateComponent(n1,n2,optimized);}};var mountComponent=function mountComponent(initialVNode,container,anchor,parentComponent,parentSuspense,isSVG,optimized){// 2.x compat may pre-create the component instance before actually
// mounting
var compatMountInstance=initialVNode.isCompatRoot&&initialVNode.component;var instance=compatMountInstance||(initialVNode.component=createComponentInstance(initialVNode,parentComponent,parentSuspense));if(process.env.NODE_ENV!=='production'&&instance.type.__hmrId){registerHMR(instance);}if(process.env.NODE_ENV!=='production'){pushWarningContext(initialVNode);startMeasure(instance,'mount');}// inject renderer internals for keepAlive
if(isKeepAlive(initialVNode)){instance.ctx.renderer=internals;}// resolve props and slots for setup context
if(!compatMountInstance){if(process.env.NODE_ENV!=='production'){startMeasure(instance,'init');}setupComponent(instance);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'init');}}// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(instance.asyncDep){parentSuspense&&parentSuspense.registerDep(instance,setupRenderEffect);// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(!initialVNode.el){var placeholder=instance.subTree=createVNode(Comment);processCommentNode(null,placeholder,container,anchor);}return;}setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized);if(process.env.NODE_ENV!=='production'){popWarningContext();endMeasure(instance,'mount');}};var updateComponent=function updateComponent(n1,n2,optimized){var instance=n2.component=n1.component;if(shouldUpdateComponent(n1,n2,optimized)){if(instance.asyncDep&&!instance.asyncResolved){// async & still pending - just update props and slots
// since the component's reactive effect for render isn't set-up yet
if(process.env.NODE_ENV!=='production'){pushWarningContext(n2);}updateComponentPreRender(instance,n2,optimized);if(process.env.NODE_ENV!=='production'){popWarningContext();}return;}else{// normal update
instance.next=n2;// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
invalidateJob(instance.update);// instance.update is the reactive effect.
instance.update();}}else{// no update needed. just copy over properties
n2.component=n1.component;n2.el=n1.el;instance.vnode=n2;}};var setupRenderEffect=function setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized){var componentUpdateFn=function componentUpdateFn(){if(!instance.isMounted){var vnodeHook=void 0;var _initialVNode=initialVNode,el=_initialVNode.el,props=_initialVNode.props;var bm=instance.bm,m=instance.m,parent=instance.parent;var isAsyncWrapperVNode=isAsyncWrapper(initialVNode);toggleRecurse(instance,false);// beforeMount hook
if(bm){invokeArrayFns(bm);}// onVnodeBeforeMount
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeBeforeMount)){invokeVNodeHook(vnodeHook,parent,initialVNode);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){instance.emit('hook:beforeMount');}toggleRecurse(instance,true);if(el&&hydrateNode){// vnode has adopted host node - perform hydration instead of mount.
var hydrateSubTree=function hydrateSubTree(){if(process.env.NODE_ENV!=='production'){startMeasure(instance,'render');}instance.subTree=renderComponentRoot(instance);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'render');}if(process.env.NODE_ENV!=='production'){startMeasure(instance,'hydrate');}hydrateNode(el,instance.subTree,instance,parentSuspense,null);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'hydrate');}};if(isAsyncWrapperVNode){initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
function(){return!instance.isUnmounted&&hydrateSubTree();});}else{hydrateSubTree();}}else{if(process.env.NODE_ENV!=='production'){startMeasure(instance,'render');}var subTree=instance.subTree=renderComponentRoot(instance);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'render');}if(process.env.NODE_ENV!=='production'){startMeasure(instance,'patch');}patch(null,subTree,container,anchor,instance,parentSuspense,isSVG);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'patch');}initialVNode.el=subTree.el;}// mounted hook
if(m){queuePostRenderEffect(m,parentSuspense);}// onVnodeMounted
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeMounted)){var scopedInitialVNode=initialVNode;queuePostRenderEffect(function(){return invokeVNodeHook(vnodeHook,parent,scopedInitialVNode);},parentSuspense);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){queuePostRenderEffect(function(){return instance.emit('hook:mounted');},parentSuspense);}// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
if(initialVNode.shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){instance.a&&queuePostRenderEffect(instance.a,parentSuspense);if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){queuePostRenderEffect(function(){return instance.emit('hook:activated');},parentSuspense);}}instance.isMounted=true;if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsComponentAdded(instance);}// #2458: deference mount-only object parameters to prevent memleaks
initialVNode=container=anchor=null;}else{// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
var next=instance.next,bu=instance.bu,u=instance.u,_parent=instance.parent,vnode=instance.vnode;var originNext=next;var _vnodeHook=void 0;if(process.env.NODE_ENV!=='production'){pushWarningContext(next||instance.vnode);}// Disallow component effect recursion during pre-lifecycle hooks.
toggleRecurse(instance,false);if(next){next.el=vnode.el;updateComponentPreRender(instance,next,optimized);}else{next=vnode;}// beforeUpdate hook
if(bu){invokeArrayFns(bu);}// onVnodeBeforeUpdate
if(_vnodeHook=next.props&&next.props.onVnodeBeforeUpdate){invokeVNodeHook(_vnodeHook,_parent,next,vnode);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){instance.emit('hook:beforeUpdate');}toggleRecurse(instance,true);// render
if(process.env.NODE_ENV!=='production'){startMeasure(instance,'render');}var nextTree=renderComponentRoot(instance);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'render');}var prevTree=instance.subTree;instance.subTree=nextTree;if(process.env.NODE_ENV!=='production'){startMeasure(instance,'patch');}patch(prevTree,nextTree,// parent may have changed if it's in a teleport
hostParentNode(prevTree.el),// anchor may have changed if it's in a fragment
getNextHostNode(prevTree),instance,parentSuspense,isSVG);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'patch');}next.el=nextTree.el;if(originNext===null){// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
updateHOCHostEl(instance,nextTree.el);}// updated hook
if(u){queuePostRenderEffect(u,parentSuspense);}// onVnodeUpdated
if(_vnodeHook=next.props&&next.props.onVnodeUpdated){queuePostRenderEffect(function(){return invokeVNodeHook(_vnodeHook,_parent,next,vnode);},parentSuspense);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){queuePostRenderEffect(function(){return instance.emit('hook:updated');},parentSuspense);}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsComponentUpdated(instance);}if(process.env.NODE_ENV!=='production'){popWarningContext();}}};// create reactive effect for rendering
var effect=instance.effect=new ReactiveEffect(componentUpdateFn,function(){return queueJob(instance.update);},instance.scope// track it in component's effect scope
);var update=instance.update=effect.run.bind(effect);update.id=instance.uid;// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
toggleRecurse(instance,true);if(process.env.NODE_ENV!=='production'){effect.onTrack=instance.rtc?function(e){return invokeArrayFns(instance.rtc,e);}:void 0;effect.onTrigger=instance.rtg?function(e){return invokeArrayFns(instance.rtg,e);}:void 0;// @ts-ignore (for scheduler)
update.ownerInstance=instance;}update();};var updateComponentPreRender=function updateComponentPreRender(instance,nextVNode,optimized){nextVNode.component=instance;var prevProps=instance.vnode.props;instance.vnode=nextVNode;instance.next=null;updateProps(instance,nextVNode.props,prevProps,optimized);updateSlots(instance,nextVNode.children,optimized);pauseTracking();// props update may have triggered pre-flush watchers.
// flush them before the render update.
flushPreFlushCbs(undefined,instance.update);resetTracking();};var patchChildren=function patchChildren(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds){var optimized=arguments.length>8&&arguments[8]!==undefined?arguments[8]:false;var c1=n1&&n1.children;var prevShapeFlag=n1?n1.shapeFlag:0;var c2=n2.children;var patchFlag=n2.patchFlag,shapeFlag=n2.shapeFlag;// fast path
if(patchFlag>0){if(patchFlag&128/* KEYED_FRAGMENT */){// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}else if(patchFlag&256/* UNKEYED_FRAGMENT */){// unkeyed
patchUnkeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}}// children has 3 possibilities: text, array or no children.
if(shapeFlag&8/* TEXT_CHILDREN */){// text children fast path
if(prevShapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(c1,parentComponent,parentSuspense);}if(c2!==c1){hostSetElementText(container,c2);}}else{if(prevShapeFlag&16/* ARRAY_CHILDREN */){// prev children was array
if(shapeFlag&16/* ARRAY_CHILDREN */){// two arrays, cannot assume anything, do full diff
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{// no new children, just unmount old
unmountChildren(c1,parentComponent,parentSuspense,true);}}else{// prev children was text OR null
// new children is array OR null
if(prevShapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(container,'');}// mount new if array
if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}}};var patchUnkeyedChildren=function patchUnkeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){c1=c1||EMPTY_ARR;c2=c2||EMPTY_ARR;var oldLength=c1.length;var newLength=c2.length;var commonLength=Math.min(oldLength,newLength);var i=void 0;for(i=0;i<commonLength;i++){var nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);patch(c1[i],nextChild,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}if(oldLength>newLength){// remove old
unmountChildren(c1,parentComponent,parentSuspense,true,false,commonLength);}else{// mount new
mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,commonLength);}};// can be all-keyed or mixed
var patchKeyedChildren=function patchKeyedChildren(c1,c2,container,parentAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var i=0;var l2=c2.length;var e1=c1.length-1;// prev ending index
var e2=l2-1;// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
while(i<=e1&&i<=e2){var n1=c1[i];var n2=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(isSameVNodeType(n1,n2)){patch(n1,n2,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}i++;}// 2. sync from end
// a (b c)
// d e (b c)
while(i<=e1&&i<=e2){var _n=c1[e1];var _n2=c2[e2]=optimized?cloneIfMounted(c2[e2]):normalizeVNode(c2[e2]);if(isSameVNodeType(_n,_n2)){patch(_n,_n2,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}e1--;e2--;}// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(i>e1){if(i<=e2){var nextPos=e2+1;var anchor=nextPos<l2?c2[nextPos].el:parentAnchor;while(i<=e2){patch(null,c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]),container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);i++;}}}// 4. common sequence + unmount
// (a b) c
// (a b)
// i = 2, e1 = 2, e2 = 1
// a (b c)
// (b c)
// i = 0, e1 = 0, e2 = -1
else if(i>e2){while(i<=e1){unmount(c1[i],parentComponent,parentSuspense,true);i++;}}// 5. unknown sequence
// [i ... e1 + 1]: a b [c d e] f g
// [i ... e2 + 1]: a b [e d c h] f g
// i = 2, e1 = 4, e2 = 5
else{var s1=i;// prev starting index
var s2=i;// next starting index
// 5.1 build key:index map for newChildren
var keyToNewIndexMap=new Map();for(i=s2;i<=e2;i++){var nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(nextChild.key!=null){if(process.env.NODE_ENV!=='production'&&keyToNewIndexMap.has(nextChild.key)){warn$1('Duplicate keys found during update:',JSON.stringify(nextChild.key),'Make sure keys are unique.');}keyToNewIndexMap.set(nextChild.key,i);}}// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
var j=void 0;var _patched=0;var toBePatched=e2-s2+1;var moved=false;// used to track whether any node has moved
var maxNewIndexSoFar=0;// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
var newIndexToOldIndexMap=new Array(toBePatched);for(i=0;i<toBePatched;i++){newIndexToOldIndexMap[i]=0;}for(i=s1;i<=e1;i++){var prevChild=c1[i];if(_patched>=toBePatched){// all new children have been patched so this can only be a removal
unmount(prevChild,parentComponent,parentSuspense,true);continue;}var newIndex=void 0;if(prevChild.key!=null){newIndex=keyToNewIndexMap.get(prevChild.key);}else{// key-less node, try to locate a key-less node of the same type
for(j=s2;j<=e2;j++){if(newIndexToOldIndexMap[j-s2]===0&&isSameVNodeType(prevChild,c2[j])){newIndex=j;break;}}}if(newIndex===undefined){unmount(prevChild,parentComponent,parentSuspense,true);}else{newIndexToOldIndexMap[newIndex-s2]=i+1;if(newIndex>=maxNewIndexSoFar){maxNewIndexSoFar=newIndex;}else{moved=true;}patch(prevChild,c2[newIndex],container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);_patched++;}}// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
var increasingNewIndexSequence=moved?getSequence(newIndexToOldIndexMap):EMPTY_ARR;j=increasingNewIndexSequence.length-1;// looping backwards so that we can use last patched node as anchor
for(i=toBePatched-1;i>=0;i--){var nextIndex=s2+i;var _nextChild=c2[nextIndex];var _anchor2=nextIndex+1<l2?c2[nextIndex+1].el:parentAnchor;if(newIndexToOldIndexMap[i]===0){// mount new
patch(null,_nextChild,container,_anchor2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(moved){// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
if(j<0||i!==increasingNewIndexSequence[j]){move(_nextChild,container,_anchor2,2/* REORDER */);}else{j--;}}}}};var move=function move(vnode,container,anchor,moveType){var parentSuspense=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var el=vnode.el,type=vnode.type,transition=vnode.transition,children=vnode.children,shapeFlag=vnode.shapeFlag;if(shapeFlag&6/* COMPONENT */){move(vnode.component.subTree,container,anchor,moveType);return;}if(shapeFlag&128/* SUSPENSE */){vnode.suspense.move(container,anchor,moveType);return;}if(shapeFlag&64/* TELEPORT */){type.move(vnode,container,anchor,internals);return;}if(type===Fragment){hostInsert(el,container,anchor);for(var i=0;i<children.length;i++){move(children[i],container,anchor,moveType);}hostInsert(vnode.anchor,container,anchor);return;}if(type===Static){moveStaticNode(vnode,container,anchor);return;}// single nodes
var needTransition=moveType!==2/* REORDER */&&shapeFlag&1/* ELEMENT */&&transition;if(needTransition){if(moveType===0/* ENTER */){transition.beforeEnter(el);hostInsert(el,container,anchor);queuePostRenderEffect(function(){return transition.enter(el);},parentSuspense);}else{var leave=transition.leave,delayLeave=transition.delayLeave,afterLeave=transition.afterLeave;var _remove=function _remove(){return hostInsert(el,container,anchor);};var performLeave=function performLeave(){leave(el,function(){_remove();afterLeave&&afterLeave();});};if(delayLeave){delayLeave(el,_remove,performLeave);}else{performLeave();}}}else{hostInsert(el,container,anchor);}};var unmount=function unmount(vnode,parentComponent,parentSuspense){var doRemove=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var optimized=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var type=vnode.type,props=vnode.props,ref=vnode.ref,children=vnode.children,dynamicChildren=vnode.dynamicChildren,shapeFlag=vnode.shapeFlag,patchFlag=vnode.patchFlag,dirs=vnode.dirs;// unset ref
if(ref!=null){setRef(ref,null,parentSuspense,vnode,true);}if(shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){parentComponent.ctx.deactivate(vnode);return;}var shouldInvokeDirs=shapeFlag&1/* ELEMENT */&&dirs;var shouldInvokeVnodeHook=!isAsyncWrapper(vnode);var vnodeHook=void 0;if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeBeforeUnmount)){invokeVNodeHook(vnodeHook,parentComponent,vnode);}if(shapeFlag&6/* COMPONENT */){unmountComponent(vnode.component,parentSuspense,doRemove);}else{if(shapeFlag&128/* SUSPENSE */){vnode.suspense.unmount(parentSuspense,doRemove);return;}if(shouldInvokeDirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeUnmount');}if(shapeFlag&64/* TELEPORT */){vnode.type.remove(vnode,parentComponent,parentSuspense,optimized,internals,doRemove);}else if(dynamicChildren&&(// #1153: fast path should not be taken for non-stable (v-for) fragments
type!==Fragment||patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */)){// fast path for block nodes: only need to unmount dynamic children.
unmountChildren(dynamicChildren,parentComponent,parentSuspense,false,true);}else if(type===Fragment&&patchFlag&(128/* KEYED_FRAGMENT */|256/* UNKEYED_FRAGMENT */)||!optimized&&shapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(children,parentComponent,parentSuspense);}if(doRemove){remove(vnode);}}if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeUnmounted)||shouldInvokeDirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);shouldInvokeDirs&&invokeDirectiveHook(vnode,null,parentComponent,'unmounted');},parentSuspense);}};var remove=function remove(vnode){var type=vnode.type,el=vnode.el,anchor=vnode.anchor,transition=vnode.transition;if(type===Fragment){removeFragment(el,anchor);return;}if(type===Static){removeStaticNode(vnode);return;}var performRemove=function performRemove(){hostRemove(el);if(transition&&!transition.persisted&&transition.afterLeave){transition.afterLeave();}};if(vnode.shapeFlag&1/* ELEMENT */&&transition&&!transition.persisted){var leave=transition.leave,delayLeave=transition.delayLeave;var performLeave=function performLeave(){return leave(el,performRemove);};if(delayLeave){delayLeave(vnode.el,performRemove,performLeave);}else{performLeave();}}else{performRemove();}};var removeFragment=function removeFragment(cur,end){// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
var next=void 0;while(cur!==end){next=hostNextSibling(cur);hostRemove(cur);cur=next;}hostRemove(end);};var unmountComponent=function unmountComponent(instance,parentSuspense,doRemove){if(process.env.NODE_ENV!=='production'&&instance.type.__hmrId){unregisterHMR(instance);}var bum=instance.bum,scope=instance.scope,update=instance.update,subTree=instance.subTree,um=instance.um;// beforeUnmount hook
if(bum){invokeArrayFns(bum);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){instance.emit('hook:beforeDestroy');}// stop effects in component scope
scope.stop();// update may be null if a component is unmounted before its async
// setup has resolved.
if(update){// so that scheduler will no longer invoke it
update.active=false;unmount(subTree,instance,parentSuspense,doRemove);}// unmounted hook
if(um){queuePostRenderEffect(um,parentSuspense);}if(isCompatEnabled("INSTANCE_EVENT_HOOKS"/* INSTANCE_EVENT_HOOKS */,instance)){queuePostRenderEffect(function(){return instance.emit('hook:destroyed');},parentSuspense);}queuePostRenderEffect(function(){instance.isUnmounted=true;},parentSuspense);// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
if(parentSuspense&&parentSuspense.pendingBranch&&!parentSuspense.isUnmounted&&instance.asyncDep&&!instance.asyncResolved&&instance.suspenseId===parentSuspense.pendingId){parentSuspense.deps--;if(parentSuspense.deps===0){parentSuspense.resolve();}}if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){devtoolsComponentRemoved(instance);}};var unmountChildren=function unmountChildren(children,parentComponent,parentSuspense){var doRemove=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var optimized=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var start=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;for(var i=start;i<children.length;i++){unmount(children[i],parentComponent,parentSuspense,doRemove,optimized);}};var getNextHostNode=function getNextHostNode(vnode){if(vnode.shapeFlag&6/* COMPONENT */){return getNextHostNode(vnode.component.subTree);}if(vnode.shapeFlag&128/* SUSPENSE */){return vnode.suspense.next();}return hostNextSibling(vnode.anchor||vnode.el);};var render=function render(vnode,container,isSVG){if(vnode==null){if(container._vnode){unmount(container._vnode,null,null,true);}}else{patch(container._vnode||null,vnode,container,null,null,null,isSVG);}flushPostFlushCbs();container._vnode=vnode;};var internals={p:patch,um:unmount,m:move,r:remove,mt:mountComponent,mc:mountChildren,pc:patchChildren,pbc:patchBlockChildren,n:getNextHostNode,o:options};var hydrate=void 0;var hydrateNode=void 0;if(createHydrationFns){var _createHydrationFns=createHydrationFns(internals);var _createHydrationFns2=slicedToArray(_createHydrationFns,2);hydrate=_createHydrationFns2[0];hydrateNode=_createHydrationFns2[1];}return{render:render,hydrate:hydrate,createApp:createAppAPI(render,hydrate)};}function toggleRecurse(_ref22,allowed){var effect=_ref22.effect,update=_ref22.update;effect.allowRecurse=update.allowRecurse=allowed;}/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */function traverseStaticChildren(n1,n2){var shallow=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var ch1=n1.children;var ch2=n2.children;if(isArray(ch1)&&isArray(ch2)){for(var i=0;i<ch1.length;i++){// this is only called in the optimized path so array children are
// guaranteed to be vnodes
var c1=ch1[i];var c2=ch2[i];if(c2.shapeFlag&1/* ELEMENT */&&!c2.dynamicChildren){if(c2.patchFlag<=0||c2.patchFlag===32/* HYDRATE_EVENTS */){c2=ch2[i]=cloneIfMounted(ch2[i]);c2.el=c1.el;}if(!shallow)traverseStaticChildren(c1,c2);}// also inherit for comment nodes, but not placeholders (e.g. v-if which
// would have received .el during block patch)
if(process.env.NODE_ENV!=='production'&&c2.type===Comment&&!c2.el){c2.el=c1.el;}}}}// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr){var p=arr.slice();var result=[0];var i=void 0,j=void 0,u=void 0,v=void 0,c=void 0;var len=arr.length;for(i=0;i<len;i++){var arrI=arr[i];if(arrI!==0){j=result[result.length-1];if(arr[j]<arrI){p[i]=j;result.push(i);continue;}u=0;v=result.length-1;while(u<v){c=u+v>>1;if(arr[result[c]]<arrI){u=c+1;}else{v=c;}}if(arrI<arr[result[u]]){if(u>0){p[i]=result[u-1];}result[u]=i;}}}u=result.length;v=result[u-1];while(u-->0){result[u]=v;v=p[v];}return result;}var isTeleport=function isTeleport(type){return type.__isTeleport;};var isTeleportDisabled=function isTeleportDisabled(props){return props&&(props.disabled||props.disabled==='');};var isTargetSVG=function isTargetSVG(target){return typeof SVGElement!=='undefined'&&target instanceof SVGElement;};var resolveTarget=function resolveTarget(props,select){var targetSelector=props&&props.to;if(isString(targetSelector)){if(!select){process.env.NODE_ENV!=='production'&&warn$1('Current renderer does not support string target for Teleports. '+'(missing querySelector renderer option)');return null;}else{var target=select(targetSelector);if(!target){process.env.NODE_ENV!=='production'&&warn$1('Failed to locate Teleport target with selector "'+targetSelector+'". '+'Note the target element must exist before the component is mounted - '+'i.e. the target cannot be rendered by the component itself, and '+'ideally should be outside of the entire Vue component tree.');}return target;}}else{if(process.env.NODE_ENV!=='production'&&!targetSelector&&!isTeleportDisabled(props)){warn$1('Invalid Teleport target: '+targetSelector);}return targetSelector;}};var TeleportImpl={__isTeleport:true,process:function(_process){function process(_x54,_x55,_x56,_x57,_x58,_x59,_x60,_x61,_x62,_x63){return _process.apply(this,arguments);}process.toString=function(){return _process.toString();};return process;}(function(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals){var mountChildren=internals.mc,patchChildren=internals.pc,patchBlockChildren=internals.pbc,_internals$o=internals.o,insert=_internals$o.insert,querySelector=_internals$o.querySelector,createText=_internals$o.createText,createComment=_internals$o.createComment;var disabled=isTeleportDisabled(n2.props);var shapeFlag=n2.shapeFlag,children=n2.children,dynamicChildren=n2.dynamicChildren;// #3302
// HMR updated, force full diff
if(process.env.NODE_ENV!=='production'&&isHmrUpdating){optimized=false;dynamicChildren=null;}if(n1==null){// insert anchors in the main view
var placeholder=n2.el=process.env.NODE_ENV!=='production'?createComment('teleport start'):createText('');var mainAnchor=n2.anchor=process.env.NODE_ENV!=='production'?createComment('teleport end'):createText('');insert(placeholder,container,anchor);insert(mainAnchor,container,anchor);var target=n2.target=resolveTarget(n2.props,querySelector);var targetAnchor=n2.targetAnchor=createText('');if(target){insert(targetAnchor,target);// #2652 we could be teleporting from a non-SVG tree into an SVG tree
isSVG=isSVG||isTargetSVG(target);}else if(process.env.NODE_ENV!=='production'&&!disabled){warn$1('Invalid Teleport target on mount:',target,'('+(typeof target==='undefined'?'undefined':_typeof(target))+')');}var mount=function mount(container,anchor){// Teleport *always* has Array children. This is enforced in both the
// compiler and vnode children normalization.
if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(children,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};if(disabled){mount(container,mainAnchor);}else if(target){mount(target,targetAnchor);}}else{// update content
n2.el=n1.el;var _mainAnchor=n2.anchor=n1.anchor;var _target=n2.target=n1.target;var _targetAnchor=n2.targetAnchor=n1.targetAnchor;var wasDisabled=isTeleportDisabled(n1.props);var currentContainer=wasDisabled?container:_target;var currentAnchor=wasDisabled?_mainAnchor:_targetAnchor;isSVG=isSVG||isTargetSVG(_target);if(dynamicChildren){// fast path when the teleport happens to be a block root
patchBlockChildren(n1.dynamicChildren,dynamicChildren,currentContainer,parentComponent,parentSuspense,isSVG,slotScopeIds);// even in block tree mode we need to make sure all root-level nodes
// in the teleport inherit previous DOM references so that they can
// be moved in future patches.
traverseStaticChildren(n1,n2,true);}else if(!optimized){patchChildren(n1,n2,currentContainer,currentAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,false);}if(disabled){if(!wasDisabled){// enabled -> disabled
// move into main container
moveTeleport(n2,container,_mainAnchor,internals,1/* TOGGLE */);}}else{// target changed
if((n2.props&&n2.props.to)!==(n1.props&&n1.props.to)){var nextTarget=n2.target=resolveTarget(n2.props,querySelector);if(nextTarget){moveTeleport(n2,nextTarget,null,internals,0/* TARGET_CHANGE */);}else if(process.env.NODE_ENV!=='production'){warn$1('Invalid Teleport target on update:',_target,'('+(typeof _target==='undefined'?'undefined':_typeof(_target))+')');}}else if(wasDisabled){// disabled -> enabled
// move into teleport target
moveTeleport(n2,_target,_targetAnchor,internals,1/* TOGGLE */);}}}}),remove:function remove(vnode,parentComponent,parentSuspense,optimized,_ref23,doRemove){var unmount=_ref23.um,hostRemove=_ref23.o.remove;var shapeFlag=vnode.shapeFlag,children=vnode.children,anchor=vnode.anchor,targetAnchor=vnode.targetAnchor,target=vnode.target,props=vnode.props;if(target){hostRemove(targetAnchor);}// an unmounted teleport should always remove its children if not disabled
if(doRemove||!isTeleportDisabled(props)){hostRemove(anchor);if(shapeFlag&16/* ARRAY_CHILDREN */){for(var i=0;i<children.length;i++){var child=children[i];unmount(child,parentComponent,parentSuspense,true,!!child.dynamicChildren);}}}},move:moveTeleport,hydrate:hydrateTeleport};function moveTeleport(vnode,container,parentAnchor,_ref24)/* REORDER */{var insert=_ref24.o.insert,move=_ref24.m;var moveType=arguments.length>4&&arguments[4]!==undefined?arguments[4]:2;// move target anchor if this is a target change.
if(moveType===0/* TARGET_CHANGE */){insert(vnode.targetAnchor,container,parentAnchor);}var el=vnode.el,anchor=vnode.anchor,shapeFlag=vnode.shapeFlag,children=vnode.children,props=vnode.props;var isReorder=moveType===2;// move main view anchor if this is a re-order.
if(isReorder){insert(el,container,parentAnchor);}// if this is a re-order and teleport is enabled (content is in target)
// do not move children. So the opposite is: only move children if this
// is not a reorder, or the teleport is disabled
if(!isReorder||isTeleportDisabled(props)){// Teleport has either Array children or no children.
if(shapeFlag&16/* ARRAY_CHILDREN */){for(var i=0;i<children.length;i++){move(children[i],container,parentAnchor,2/* REORDER */);}}}// move main view anchor if this is a re-order.
if(isReorder){insert(anchor,container,parentAnchor);}}function hydrateTeleport(node,vnode,parentComponent,parentSuspense,slotScopeIds,optimized,_ref25,hydrateChildren){var _ref25$o=_ref25.o,nextSibling=_ref25$o.nextSibling,parentNode=_ref25$o.parentNode,querySelector=_ref25$o.querySelector;var target=vnode.target=resolveTarget(vnode.props,querySelector);if(target){// if multiple teleports rendered to the same target element, we need to
// pick up from where the last teleport finished instead of the first node
var targetNode=target._lpa||target.firstChild;if(vnode.shapeFlag&16/* ARRAY_CHILDREN */){if(isTeleportDisabled(vnode.props)){vnode.anchor=hydrateChildren(nextSibling(node),vnode,parentNode(node),parentComponent,parentSuspense,slotScopeIds,optimized);vnode.targetAnchor=targetNode;}else{vnode.anchor=nextSibling(node);vnode.targetAnchor=hydrateChildren(targetNode,vnode,target,parentComponent,parentSuspense,slotScopeIds,optimized);}target._lpa=vnode.targetAnchor&&nextSibling(vnode.targetAnchor);}}return vnode.anchor&&nextSibling(vnode.anchor);}// Force-casted public typing for h and TSX props inference
var Teleport=TeleportImpl;var COMPONENTS='components';var DIRECTIVES='directives';var FILTERS='filters';/**
 * @private
 */function resolveComponent(name,maybeSelfReference){return resolveAsset(COMPONENTS,name,true,maybeSelfReference)||name;}var NULL_DYNAMIC_COMPONENT=Symbol();/**
 * @private
 */function resolveDynamicComponent(component){if(isString(component)){return resolveAsset(COMPONENTS,component,false)||component;}else{// invalid types will fallthrough to createVNode and raise warning
return component||NULL_DYNAMIC_COMPONENT;}}/**
 * @private
 */function resolveDirective(name){return resolveAsset(DIRECTIVES,name);}/**
 * v2 compat only
 * @internal
 */function resolveFilter(name){return resolveAsset(FILTERS,name);}// implementation
function resolveAsset(type,name){var warnMissing=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var maybeSelfReference=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var instance=currentRenderingInstance||currentInstance;if(instance){var Component=instance.type;// explicit self name has highest priority
if(type===COMPONENTS){var selfName=getComponentName(Component);if(selfName&&(selfName===name||selfName===camelize(name)||selfName===capitalize(camelize(name)))){return Component;}}var res=// local registration
// check instance[type] first which is resolved for options API
resolve(instance[type]||Component[type],name)||// global registration
resolve(instance.appContext[type],name);if(!res&&maybeSelfReference){// fallback to implicit self-reference
return Component;}if(process.env.NODE_ENV!=='production'&&warnMissing&&!res){var extra=type===COMPONENTS?'\nIf this is a native custom element, make sure to exclude it from '+'component resolution via compilerOptions.isCustomElement.':'';warn$1('Failed to resolve '+type.slice(0,-1)+': '+name+extra);}return res;}else if(process.env.NODE_ENV!=='production'){warn$1('resolve'+capitalize(type.slice(0,-1))+' '+'can only be used in render() or setup().');}}function resolve(registry,name){return registry&&(registry[name]||registry[camelize(name)]||registry[capitalize(camelize(name))]);}var normalizedAsyncComponentMap=new Map();function convertLegacyAsyncComponent(comp){if(normalizedAsyncComponentMap.has(comp)){return normalizedAsyncComponentMap.get(comp);}// we have to call the function here due to how v2's API won't expose the
// options until we call it
var resolve=void 0;var reject=void 0;var fallbackPromise=new Promise(function(r,rj){resolve=r, reject=rj;});var res=comp(resolve,reject);var converted=void 0;if(isPromise(res)){converted=defineAsyncComponent(function(){return res;});}else if(isObject(res)&&!isVNode(res)&&!isArray(res)){converted=defineAsyncComponent({loader:function loader(){return res.component;},loadingComponent:res.loading,errorComponent:res.error,delay:res.delay,timeout:res.timeout});}else if(res==null){converted=defineAsyncComponent(function(){return fallbackPromise;});}else{converted=comp;// probably a v3 functional comp
}normalizedAsyncComponentMap.set(comp,converted);return converted;}function getCompatListeners(instance){assertCompatEnabled("INSTANCE_LISTENERS"/* INSTANCE_LISTENERS */,instance);var listeners={};var rawProps=instance.vnode.props;if(!rawProps){return listeners;}for(var key in rawProps){if(isOn(key)){listeners[key[2].toLowerCase()+key.slice(3)]=rawProps[key];}}return listeners;}function convertLegacyRenderFn(instance){var Component=instance.type;var render=Component.render;// v3 runtime compiled, or already checked / wrapped
if(!render||render._rc||render._compatChecked||render._compatWrapped){return;}if(render.length>=2){// v3 pre-compiled function, since v2 render functions never need more than
// 2 arguments, and v2 functional render functions would have already been
// normalized into v3 functional components
render._compatChecked=true;return;}// v2 render function, try to provide compat
if(checkCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,instance)){var wrapped=Component.render=function compatRender(){// @ts-ignore
return render.call(this,compatH);};// @ts-ignore
wrapped._compatWrapped=true;}}function compatH(type,propsOrChildren,children){if(!type){type=Comment;}// to support v2 string component name look!up
if(typeof type==='string'){var t=hyphenate(type);if(t==='transition'||t==='transition-group'||t==='keep-alive'){// since transition and transition-group are runtime-dom-specific,
// we cannot import them directly here. Instead they are registered using
// special keys in @vue/compat entry.
type='__compat__'+t;}type=resolveDynamicComponent(type);}var l=arguments.length;var is2ndArgArrayChildren=isArray(propsOrChildren);if(l===2||is2ndArgArrayChildren){if(isObject(propsOrChildren)&&!is2ndArgArrayChildren){// single vnode without props
if(isVNode(propsOrChildren)){return convertLegacySlots(createVNode(type,null,[propsOrChildren]));}// props without children
return convertLegacySlots(convertLegacyDirectives(createVNode(type,convertLegacyProps(propsOrChildren,type)),propsOrChildren));}else{// omit props
return convertLegacySlots(createVNode(type,null,propsOrChildren));}}else{if(isVNode(children)){children=[children];}return convertLegacySlots(convertLegacyDirectives(createVNode(type,convertLegacyProps(propsOrChildren,type),children),propsOrChildren));}}var skipLegacyRootLevelProps=/*#__PURE__*/makeMap('staticStyle,staticClass,directives,model,hook');function convertLegacyProps(legacyProps,type){if(!legacyProps){return null;}var converted={};for(var key in legacyProps){if(key==='attrs'||key==='domProps'||key==='props'){extend(converted,legacyProps[key]);}else if(key==='on'||key==='nativeOn'){var listeners=legacyProps[key];for(var event in listeners){var handlerKey=convertLegacyEventKey(event);if(key==='nativeOn')handlerKey+='Native';var existing=converted[handlerKey];var incoming=listeners[event];if(existing!==incoming){if(existing){converted[handlerKey]=[].concat(existing,incoming);}else{converted[handlerKey]=incoming;}}}}else if(!skipLegacyRootLevelProps(key)){converted[key]=legacyProps[key];}}if(legacyProps.staticClass){converted.class=normalizeClass([legacyProps.staticClass,converted.class]);}if(legacyProps.staticStyle){converted.style=normalizeStyle([legacyProps.staticStyle,converted.style]);}if(legacyProps.model&&isObject(type)){// v2 compiled component v-model
var _ref26=type.model||{},_ref26$prop=_ref26.prop,prop=_ref26$prop===undefined?'value':_ref26$prop,_ref26$event=_ref26.event,_event=_ref26$event===undefined?'input':_ref26$event;converted[prop]=legacyProps.model.value;converted[compatModelEventPrefix+_event]=legacyProps.model.callback;}return converted;}function convertLegacyEventKey(event){// normalize v2 event prefixes
if(event[0]==='&'){event=event.slice(1)+'Passive';}if(event[0]==='~'){event=event.slice(1)+'Once';}if(event[0]==='!'){event=event.slice(1)+'Capture';}return toHandlerKey(event);}function convertLegacyDirectives(vnode,props){if(props&&props.directives){return withDirectives(vnode,props.directives.map(function(_ref27){var name=_ref27.name,value=_ref27.value,arg=_ref27.arg,modifiers=_ref27.modifiers;return[resolveDirective(name),value,arg,modifiers];}));}return vnode;}function convertLegacySlots(vnode){var props=vnode.props,children=vnode.children;var slots=void 0;if(vnode.shapeFlag&6/* COMPONENT */&&isArray(children)){slots={};// check "slot" property on vnodes and turn them into v3 function slots
for(var i=0;i<children.length;i++){var child=children[i];var slotName=isVNode(child)&&child.props&&child.props.slot||'default';var slot=slots[slotName]||(slots[slotName]=[]);if(isVNode(child)&&child.type==='template'){slot.push(child.children);}else{slot.push(child);}}if(slots){var _loop5=function _loop5(key){var slotChildren=slots[key];slots[key]=function(){return slotChildren;};slots[key]._ns=true;/* non-scoped slot */};for(var key in slots){_loop5(key);}}}var scopedSlots=props&&props.scopedSlots;if(scopedSlots){delete props.scopedSlots;if(slots){extend(slots,scopedSlots);}else{slots=scopedSlots;}}if(slots){normalizeChildren(vnode,slots);}return vnode;}function defineLegacyVNodeProperties(vnode){/* istanbul ignore if */if(isCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,currentRenderingInstance,true/* enable for built-ins */)&&isCompatEnabled("PRIVATE_APIS"/* PRIVATE_APIS */,currentRenderingInstance,true/* enable for built-ins */)){var context=currentRenderingInstance;var getInstance=function getInstance(){return vnode.component&&vnode.component.proxy;};var componentOptions=void 0;Object.defineProperties(vnode,{tag:{get:function get(){return vnode.type;}},data:{get:function get(){return vnode.props||{};},set:function set(p){return vnode.props=p;}},elm:{get:function get(){return vnode.el;}},componentInstance:{get:getInstance},child:{get:getInstance},text:{get:function get(){return isString(vnode.children)?vnode.children:null;}},context:{get:function get(){return context&&context.proxy;}},componentOptions:{get:function get(){if(vnode.shapeFlag&4/* STATEFUL_COMPONENT */){if(componentOptions){return componentOptions;}return componentOptions={Ctor:vnode.type,propsData:vnode.props,children:vnode.children};}}}});}}var normalizedFunctionalComponentMap=new Map();var legacySlotProxyHandlers={get:function get(target,key){var slot=target[key];return slot&&slot();}};function convertLegacyFunctionalComponent(comp){if(normalizedFunctionalComponentMap.has(comp)){return normalizedFunctionalComponentMap.get(comp);}var legacyFn=comp.render;var Func=function Func(props,ctx){var instance=getCurrentInstance();var legacyCtx={props:props,children:instance.vnode.children||[],data:instance.vnode.props||{},scopedSlots:ctx.slots,parent:instance.parent&&instance.parent.proxy,slots:function slots(){return new Proxy(ctx.slots,legacySlotProxyHandlers);},get listeners(){return getCompatListeners(instance);},get injections(){if(comp.inject){var injections={};resolveInjections(comp.inject,injections);return injections;}return{};}};return legacyFn(compatH,legacyCtx);};Func.props=comp.props;Func.displayName=comp.name;Func.compatConfig=comp.compatConfig;// v2 functional components do not inherit attrs
Func.inheritAttrs=false;normalizedFunctionalComponentMap.set(comp,Func);return Func;}function convertLegacyComponent(comp,instance){if(comp.__isBuiltIn){return comp;}// 2.x constructor
if(isFunction(comp)&&comp.cid){comp=comp.options;}// 2.x async component
if(isFunction(comp)&&checkCompatEnabled("COMPONENT_ASYNC"/* COMPONENT_ASYNC */,instance,comp)){// since after disabling this, plain functions are still valid usage, do not
// use softAssert here.
return convertLegacyAsyncComponent(comp);}// 2.x functional component
if(isObject(comp)&&comp.functional&&softAssertCompatEnabled("COMPONENT_FUNCTIONAL"/* COMPONENT_FUNCTIONAL */,instance,comp)){return convertLegacyFunctionalComponent(comp);}return comp;}var Fragment=Symbol(process.env.NODE_ENV!=='production'?'Fragment':undefined);var Text=Symbol(process.env.NODE_ENV!=='production'?'Text':undefined);var Comment=Symbol(process.env.NODE_ENV!=='production'?'Comment':undefined);var Static=Symbol(process.env.NODE_ENV!=='production'?'Static':undefined);// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
var blockStack=[];var currentBlock=null;/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */function openBlock(){var disableTracking=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;blockStack.push(currentBlock=disableTracking?null:[]);}function closeBlock(){blockStack.pop();currentBlock=blockStack[blockStack.length-1]||null;}// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
var isBlockTreeEnabled=1;/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */function setBlockTracking(value){isBlockTreeEnabled+=value;}function setupBlock(vnode){// save current block children on the block vnode
vnode.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null;// close block
closeBlock();// a block is always going to be patched, so track it as a child of its
// parent block
if(isBlockTreeEnabled>0&&currentBlock){currentBlock.push(vnode);}return vnode;}/**
 * @private
 */function createElementBlock(type,props,children,patchFlag,dynamicProps,shapeFlag){return setupBlock(createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,true/* isBlock */));}/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */function createBlock(type,props,children,patchFlag,dynamicProps){return setupBlock(createVNode(type,props,children,patchFlag,dynamicProps,true/* isBlock: prevent a block from tracking itself */));}function isVNode(value){return value?value.__v_isVNode===true:false;}function isSameVNodeType(n1,n2){if(process.env.NODE_ENV!=='production'&&n2.shapeFlag&6/* COMPONENT */&&hmrDirtyComponents.has(n2.type)){// HMR only: if the component has been hot-updated, force a reload.
return false;}return n1.type===n2.type&&n1.key===n2.key;}var vnodeArgsTransformer=void 0;/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */function transformVNodeArgs(transformer){vnodeArgsTransformer=transformer;}var createVNodeWithArgsTransform=function createVNodeWithArgsTransform(){for(var _len17=arguments.length,args=Array(_len17),_key26=0;_key26<_len17;_key26++){args[_key26]=arguments[_key26];}return _createVNode.apply(undefined,toConsumableArray(vnodeArgsTransformer?vnodeArgsTransformer(args,currentRenderingInstance):args));};var InternalObjectKey='__vInternal';var normalizeKey=function normalizeKey(_ref28){var key=_ref28.key;return key!=null?key:null;};var normalizeRef=function normalizeRef(_ref29){var ref=_ref29.ref,ref_key=_ref29.ref_key,ref_for=_ref29.ref_for;return ref!=null?isString(ref)||isRef(ref)||isFunction(ref)?{i:currentRenderingInstance,r:ref,k:ref_key,f:!!ref_for}:ref:null;};function createBaseVNode(type){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var patchFlag=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var dynamicProps=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var shapeFlag=arguments.length>5&&arguments[5]!==undefined?arguments[5]:type===Fragment?0:1;var isBlockNode=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;var needFullChildrenNormalization=arguments.length>7&&arguments[7]!==undefined?arguments[7]:false;var vnode={__v_isVNode:true,__v_skip:true,type:type,props:props,key:props&&normalizeKey(props),ref:props&&normalizeRef(props),scopeId:currentScopeId,slotScopeIds:null,children:children,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:shapeFlag,patchFlag:patchFlag,dynamicProps:dynamicProps,dynamicChildren:null,appContext:null};if(needFullChildrenNormalization){normalizeChildren(vnode,children);// normalize suspense children
if(shapeFlag&128/* SUSPENSE */){type.normalize(vnode);}}else if(children){// compiled element vnode - if children is passed, only possible types are
// string or Array.
vnode.shapeFlag|=isString(children)?8/* TEXT_CHILDREN */:16/* ARRAY_CHILDREN */;}// validate key
if(process.env.NODE_ENV!=='production'&&vnode.key!==vnode.key){warn$1('VNode created with invalid key (NaN). VNode type:',vnode.type);}// track vnode for block tree
if(isBlockTreeEnabled>0&&// avoid a block node from tracking itself
!isBlockNode&&// has current parent block
currentBlock&&(// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
vnode.patchFlag>0||shapeFlag&6/* COMPONENT */)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
vnode.patchFlag!==32/* HYDRATE_EVENTS */){currentBlock.push(vnode);}{convertLegacyVModelProps(vnode);defineLegacyVNodeProperties(vnode);}return vnode;}var createVNode=process.env.NODE_ENV!=='production'?createVNodeWithArgsTransform:_createVNode;function _createVNode(type){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var patchFlag=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var dynamicProps=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var isBlockNode=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;if(!type||type===NULL_DYNAMIC_COMPONENT){if(process.env.NODE_ENV!=='production'&&!type){warn$1('Invalid vnode type when creating vnode: '+type+'.');}type=Comment;}if(isVNode(type)){// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
var cloned=cloneVNode(type,props,true/* mergeRef: true */);if(children){normalizeChildren(cloned,children);}return cloned;}// class component normalization.
if(isClassComponent(type)){type=type.__vccOpts;}// 2.x async/functional component compat
{type=convertLegacyComponent(type,currentRenderingInstance);}// class & style normalization.
if(props){// for reactive or proxy objects, we need to clone it to enable mutation.
props=guardReactiveProps(props);var _props2=props,klass=_props2.class,style=_props2.style;if(klass&&!isString(klass)){props.class=normalizeClass(klass);}if(isObject(style)){// reactive state objects need to be cloned since they are likely to be
// mutated
if(isProxy(style)&&!isArray(style)){style=extend({},style);}props.style=normalizeStyle(style);}}// encode the vnode type information into a bitmap
var shapeFlag=isString(type)?1/* ELEMENT */:isSuspense(type)?128/* SUSPENSE */:isTeleport(type)?64/* TELEPORT */:isObject(type)?4/* STATEFUL_COMPONENT */:isFunction(type)?2/* FUNCTIONAL_COMPONENT */:0;if(process.env.NODE_ENV!=='production'&&shapeFlag&4/* STATEFUL_COMPONENT */&&isProxy(type)){type=toRaw(type);warn$1('Vue received a Component which was made a reactive object. This can '+'lead to unnecessary performance overhead, and should be avoided by '+'marking the component with `markRaw` or using `shallowRef` '+'instead of `ref`.','\nComponent that was made reactive: ',type);}return createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,isBlockNode,true);}function guardReactiveProps(props){if(!props)return null;return isProxy(props)||InternalObjectKey in props?extend({},props):props;}function cloneVNode(vnode,extraProps){var mergeRef=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
var props=vnode.props,ref=vnode.ref,patchFlag=vnode.patchFlag,children=vnode.children;var mergedProps=extraProps?mergeProps(props||{},extraProps):props;var cloned={__v_isVNode:true,__v_skip:true,type:vnode.type,props:mergedProps,key:mergedProps&&normalizeKey(mergedProps),ref:extraProps&&extraProps.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
mergeRef&&ref?isArray(ref)?ref.concat(normalizeRef(extraProps)):[ref,normalizeRef(extraProps)]:normalizeRef(extraProps):ref,scopeId:vnode.scopeId,slotScopeIds:vnode.slotScopeIds,children:process.env.NODE_ENV!=='production'&&patchFlag===-1/* HOISTED */&&isArray(children)?children.map(deepCloneVNode):children,target:vnode.target,targetAnchor:vnode.targetAnchor,staticCount:vnode.staticCount,shapeFlag:vnode.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:extraProps&&vnode.type!==Fragment?patchFlag===-1// hoisted node
?16/* FULL_PROPS */:patchFlag|16/* FULL_PROPS */:patchFlag,dynamicProps:vnode.dynamicProps,dynamicChildren:vnode.dynamicChildren,appContext:vnode.appContext,dirs:vnode.dirs,transition:vnode.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:vnode.component,suspense:vnode.suspense,ssContent:vnode.ssContent&&cloneVNode(vnode.ssContent),ssFallback:vnode.ssFallback&&cloneVNode(vnode.ssFallback),el:vnode.el,anchor:vnode.anchor};{defineLegacyVNodeProperties(cloned);}return cloned;}/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */function deepCloneVNode(vnode){var cloned=cloneVNode(vnode);if(isArray(vnode.children)){cloned.children=vnode.children.map(deepCloneVNode);}return cloned;}/**
 * @private
 */function createTextVNode(){var text=arguments.length>0&&arguments[0]!==undefined?arguments[0]:' ';var flag=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return createVNode(Text,null,text,flag);}/**
 * @private
 */function createStaticVNode(content,numberOfNodes){// A static vnode can contain multiple stringified elements, and the number
// of elements is necessary for hydration.
var vnode=createVNode(Static,null,content);vnode.staticCount=numberOfNodes;return vnode;}/**
 * @private
 */function createCommentVNode(){var text=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var asBlock=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return asBlock?(openBlock(), createBlock(Comment,null,text)):createVNode(Comment,null,text);}function normalizeVNode(child){if(child==null||typeof child==='boolean'){// empty placeholder
return createVNode(Comment);}else if(isArray(child)){// fragment
return createVNode(Fragment,null,// #3666, avoid reference pollution when reusing vnode
child.slice());}else if((typeof child==='undefined'?'undefined':_typeof(child))==='object'){// already vnode, this should be the most common since compiled templates
// always produce all-vnode children arrays
return cloneIfMounted(child);}else{// strings and numbers
return createVNode(Text,null,String(child));}}// optimized normalization for template-compiled render fns
function cloneIfMounted(child){return child.el===null||child.memo?child:cloneVNode(child);}function normalizeChildren(vnode,children){var type=0;var shapeFlag=vnode.shapeFlag;if(children==null){children=null;}else if(isArray(children)){type=16/* ARRAY_CHILDREN */;}else if((typeof children==='undefined'?'undefined':_typeof(children))==='object'){if(shapeFlag&(1/* ELEMENT */|64/* TELEPORT */)){// Normalize slot to plain children for plain element and Teleport
var slot=children.default;if(slot){// _c marker is added by withCtx() indicating this is a compiled slot
slot._c&&(slot._d=false);normalizeChildren(vnode,slot());slot._c&&(slot._d=true);}return;}else{type=32/* SLOTS_CHILDREN */;var slotFlag=children._;if(!slotFlag&&!(InternalObjectKey in children)){children._ctx=currentRenderingInstance;}else if(slotFlag===3/* FORWARDED */&&currentRenderingInstance){// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
if(currentRenderingInstance.slots._===1/* STABLE */){children._=1/* STABLE */;}else{children._=2/* DYNAMIC */;vnode.patchFlag|=1024/* DYNAMIC_SLOTS */;}}}}else if(isFunction(children)){children={default:children,_ctx:currentRenderingInstance};type=32/* SLOTS_CHILDREN */;}else{children=String(children);// force teleport children to array so it can be moved around
if(shapeFlag&64/* TELEPORT */){type=16/* ARRAY_CHILDREN */;children=[createTextVNode(children)];}else{type=8/* TEXT_CHILDREN */;}}vnode.children=children;vnode.shapeFlag|=type;}function mergeProps(){var ret={};for(var _len18=arguments.length,args=Array(_len18),_key27=0;_key27<_len18;_key27++){args[_key27]=arguments[_key27];}for(var i=0;i<args.length;i++){var toMerge=args[i];for(var key in toMerge){if(key==='class'){if(ret.class!==toMerge.class){ret.class=normalizeClass([ret.class,toMerge.class]);}}else if(key==='style'){ret.style=normalizeStyle([ret.style,toMerge.style]);}else if(isOn(key)){var existing=ret[key];var incoming=toMerge[key];if(incoming&&existing!==incoming&&!(isArray(existing)&&existing.includes(incoming))){ret[key]=existing?[].concat(existing,incoming):incoming;}}else if(key!==''){ret[key]=toMerge[key];}}}return ret;}function invokeVNodeHook(hook,instance,vnode){var prevVNode=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;callWithAsyncErrorHandling(hook,instance,7/* VNODE_HOOK */,[vnode,prevVNode]);}function getCompatChildren(instance){assertCompatEnabled("INSTANCE_CHILDREN"/* INSTANCE_CHILDREN */,instance);var root=instance.subTree;var children=[];if(root){walk(root,children);}return children;}function walk(vnode,children){if(vnode.component){children.push(vnode.component.proxy);}else if(vnode.shapeFlag&16/* ARRAY_CHILDREN */){var vnodes=vnode.children;for(var i=0;i<vnodes.length;i++){walk(vnodes[i],children);}}}/**
 * Actual implementation
 */function renderList(source,renderItem,cache,index){var ret=void 0;var cached=cache&&cache[index];if(isArray(source)||isString(source)){ret=new Array(source.length);for(var i=0,l=source.length;i<l;i++){ret[i]=renderItem(source[i],i,undefined,cached&&cached[i]);}}else if(typeof source==='number'){if(process.env.NODE_ENV!=='production'&&!Number.isInteger(source)){warn$1('The v-for range expect an integer value but got '+source+'.');return[];}ret=new Array(source);for(var _i2=0;_i2<source;_i2++){ret[_i2]=renderItem(_i2+1,_i2,undefined,cached&&cached[_i2]);}}else if(isObject(source)){if(source[Symbol.iterator]){ret=Array.from(source,function(item,i){return renderItem(item,i,undefined,cached&&cached[i]);});}else{var keys=Object.keys(source);ret=new Array(keys.length);for(var _i3=0,_l=keys.length;_i3<_l;_i3++){var key=keys[_i3];ret[_i3]=renderItem(source[key],key,_i3,cached&&cached[_i3]);}}}else{ret=[];}if(cache){cache[index]=ret;}return ret;}/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */function createSlots(slots,dynamicSlots){for(var i=0;i<dynamicSlots.length;i++){var slot=dynamicSlots[i];// array of dynamic slot generated by <template v-for="..." #[...]>
if(isArray(slot)){for(var j=0;j<slot.length;j++){slots[slot[j].name]=slot[j].fn;}}else if(slot){// conditional single slot generated by <template v-if="..." #foo>
slots[slot.name]=slot.fn;}}return slots;}/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */function renderSlot(slots,name){var props=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var// this is not a user-facing function, so the fallback is always generated by
fallback=arguments[3];var noSlotted=arguments[4];if(currentRenderingInstance.isCE){return createVNode('slot',name==='default'?null:{name:name},fallback&&fallback());}var slot=slots[name];if(process.env.NODE_ENV!=='production'&&slot&&slot.length>1){warn$1('SSR-optimized slot function detected in a non-SSR-optimized render '+'function. You need to mark this component with $dynamic-slots in the '+'parent template.');slot=function slot(){return[];};}// a compiled slot disables block tracking by default to avoid manual
// invocation interfering with template-based block tracking, but in
// `renderSlot` we can be sure that it's template-based so we can force
// enable it.
if(slot&&slot._c){slot._d=false;}openBlock();var validSlotContent=slot&&ensureValidVNode(slot(props));var rendered=createBlock(Fragment,{key:props.key||'_'+name},validSlotContent||(fallback?fallback():[]),validSlotContent&&slots._===1/* STABLE */?64/* STABLE_FRAGMENT */:-2/* BAIL */);if(!noSlotted&&rendered.scopeId){rendered.slotScopeIds=[rendered.scopeId+'-s'];}if(slot&&slot._c){slot._d=true;}return rendered;}function ensureValidVNode(vnodes){return vnodes.some(function(child){if(!isVNode(child))return true;if(child.type===Comment)return false;if(child.type===Fragment&&!ensureValidVNode(child.children))return false;return true;})?vnodes:null;}/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */function toHandlers(obj){var ret={};if(process.env.NODE_ENV!=='production'&&!isObject(obj)){warn$1('v-on with no argument expects an object value.');return ret;}for(var key in obj){ret[toHandlerKey(key)]=obj[key];}return ret;}function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}function legacyBindObjectProps(data,_tag,value,_asProp,isSync){if(value&&isObject(value)){if(isArray(value)){value=toObject(value);}var _loop6=function _loop6(key){if(isReservedProp(key)){data[key]=value[key];}else if(key==='class'){data.class=normalizeClass([data.class,value.class]);}else if(key==='style'){data.style=normalizeClass([data.style,value.style]);}else{var attrs=data.attrs||(data.attrs={});var camelizedKey=camelize(key);var hyphenatedKey=hyphenate(key);if(!(camelizedKey in attrs)&&!(hyphenatedKey in attrs)){attrs[key]=value[key];if(isSync){var _on=data.on||(data.on={});_on['update:'+key]=function($event){value[key]=$event;};}}}};for(var key in value){_loop6(key);}}return data;}function legacyBindObjectListeners(props,listeners){return mergeProps(props,toHandlers(listeners));}function legacyRenderSlot(instance,name,fallback,props,bindObject){if(bindObject){props=mergeProps(props,bindObject);}return renderSlot(instance.slots,name,props,fallback&&function(){return fallback;});}function legacyresolveScopedSlots(fns,raw,// the following are added in 2.6
hasDynamicKeys){// v2 default slot doesn't have name
return createSlots(raw||{$stable:!hasDynamicKeys},mapKeyToName(fns));}function mapKeyToName(slots){for(var i=0;i<slots.length;i++){var fn=slots[i];if(fn){if(isArray(fn)){mapKeyToName(fn);}else{fn.name=fn.key||'default';}}}return slots;}var staticCacheMap=/*#__PURE__*/new WeakMap();function legacyRenderStatic(instance,index){var cache=staticCacheMap.get(instance);if(!cache){staticCacheMap.set(instance,cache=[]);}if(cache[index]){return cache[index];}var fn=instance.type.staticRenderFns[index];var ctx=instance.proxy;return cache[index]=fn.call(ctx,null,ctx);}function legacyCheckKeyCodes(instance,eventKeyCode,key,builtInKeyCode,eventKeyName,builtInKeyName){var config=instance.appContext.config;var configKeyCodes=config.keyCodes||{};var mappedKeyCode=configKeyCodes[key]||builtInKeyCode;if(builtInKeyName&&eventKeyName&&!configKeyCodes[key]){return isKeyNotMatch(builtInKeyName,eventKeyName);}else if(mappedKeyCode){return isKeyNotMatch(mappedKeyCode,eventKeyCode);}else if(eventKeyName){return hyphenate(eventKeyName)!==key;}}function isKeyNotMatch(expect,actual){if(isArray(expect)){return!expect.includes(actual);}else{return expect!==actual;}}function legacyMarkOnce(tree){return tree;}function legacyBindDynamicKeys(props,values){for(var i=0;i<values.length;i+=2){var key=values[i];if(typeof key==='string'&&key){props[values[i]]=values[i+1];}}return props;}function legacyPrependModifier(value,symbol){return typeof value==='string'?symbol+value:value;}function installCompatInstanceProperties(map){var set=function set(target,key,val){target[key]=val;};var del=function del(target,key){delete target[key];};extend(map,{$set:function $set(i){assertCompatEnabled("INSTANCE_SET"/* INSTANCE_SET */,i);return set;},$delete:function $delete(i){assertCompatEnabled("INSTANCE_DELETE"/* INSTANCE_DELETE */,i);return del;},$mount:function $mount(i){assertCompatEnabled("GLOBAL_MOUNT"/* GLOBAL_MOUNT */,null/* this warning is global */);// root mount override from ./global.ts in installCompatMount
return i.ctx._compat_mount||NOOP;},$destroy:function $destroy(i){assertCompatEnabled("INSTANCE_DESTROY"/* INSTANCE_DESTROY */,i);// root destroy override from ./global.ts in installCompatMount
return i.ctx._compat_destroy||NOOP;},// overrides existing accessor
$slots:function $slots(i){if(isCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,i)&&i.render&&i.render._compatWrapped){return new Proxy(i.slots,legacySlotProxyHandlers);}return process.env.NODE_ENV!=='production'?shallowReadonly(i.slots):i.slots;},$scopedSlots:function $scopedSlots(i){assertCompatEnabled("INSTANCE_SCOPED_SLOTS"/* INSTANCE_SCOPED_SLOTS */,i);var res={};for(var key in i.slots){var fn=i.slots[key];if(!fn._ns/* non-scoped slot */){res[key]=fn;}}return res;},$on:function $on(i){return on.bind(null,i);},$once:function $once(i){return once.bind(null,i);},$off:function $off(i){return off.bind(null,i);},$children:getCompatChildren,$listeners:getCompatListeners});/* istanbul ignore if */if(isCompatEnabled("PRIVATE_APIS"/* PRIVATE_APIS */,null)){extend(map,{// needed by many libs / render fns
$vnode:function $vnode(i){return i.vnode;},// inject additional properties into $options for compat
// e.g. vuex needs this.$options.parent
$options:function $options(i){var res=extend({},resolveMergedOptions(i));res.parent=i.proxy.$parent;res.propsData=i.vnode.props;return res;},// some private properties that are likely accessed...
_self:function _self(i){return i.proxy;},_uid:function _uid(i){return i.uid;},_data:function _data(i){return i.data;},_isMounted:function _isMounted(i){return i.isMounted;},_isDestroyed:function _isDestroyed(i){return i.isUnmounted;},// v2 render helpers
$createElement:function $createElement(){return compatH;},_c:function _c(){return compatH;},_o:function _o(){return legacyMarkOnce;},_n:function _n(){return toNumber;},_s:function _s(){return toDisplayString;},_l:function _l(){return renderList;},_t:function _t(i){return legacyRenderSlot.bind(null,i);},_q:function _q(){return looseEqual;},_i:function _i(){return looseIndexOf;},_m:function _m(i){return legacyRenderStatic.bind(null,i);},_f:function _f(){return resolveFilter;},_k:function _k(i){return legacyCheckKeyCodes.bind(null,i);},_b:function _b(){return legacyBindObjectProps;},_v:function _v(){return createTextVNode;},_e:function _e(){return createCommentVNode;},_u:function _u(){return legacyresolveScopedSlots;},_g:function _g(){return legacyBindObjectListeners;},_d:function _d(){return legacyBindDynamicKeys;},_p:function _p(){return legacyPrependModifier;}});}}/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */var getPublicInstance=function getPublicInstance(i){if(!i)return null;if(isStatefulComponent(i))return getExposeProxy(i)||i.proxy;return getPublicInstance(i.parent);};var publicPropertiesMap=extend(Object.create(null),{$:function $(i){return i;},$el:function $el(i){return i.vnode.el;},$data:function $data(i){return i.data;},$props:function $props(i){return process.env.NODE_ENV!=='production'?shallowReadonly(i.props):i.props;},$attrs:function $attrs(i){return process.env.NODE_ENV!=='production'?shallowReadonly(i.attrs):i.attrs;},$slots:function $slots(i){return process.env.NODE_ENV!=='production'?shallowReadonly(i.slots):i.slots;},$refs:function $refs(i){return process.env.NODE_ENV!=='production'?shallowReadonly(i.refs):i.refs;},$parent:function $parent(i){return getPublicInstance(i.parent);},$root:function $root(i){return getPublicInstance(i.root);},$emit:function $emit(i){return i.emit;},$options:function $options(i){return __VUE_OPTIONS_API__?resolveMergedOptions(i):i.type;},$forceUpdate:function $forceUpdate(i){return function(){return queueJob(i.update);};},$nextTick:function $nextTick(i){return nextTick.bind(i.proxy);},$watch:function $watch(i){return __VUE_OPTIONS_API__?instanceWatch.bind(i):NOOP;}});{installCompatInstanceProperties(publicPropertiesMap);}var PublicInstanceProxyHandlers={get:function get(_ref30,key){var instance=_ref30._;var ctx=instance.ctx,setupState=instance.setupState,data=instance.data,props=instance.props,accessCache=instance.accessCache,type=instance.type,appContext=instance.appContext;// for internal formatters to know that this is a Vue instance
if(process.env.NODE_ENV!=='production'&&key==='__isVue'){return true;}// prioritize <script setup> bindings during dev.
// this allows even properties that start with _ or $ to be used - so that
// it aligns with the production behavior where the render fn is inlined and
// indeed has access to all declared variables.
if(process.env.NODE_ENV!=='production'&&setupState!==EMPTY_OBJ&&setupState.__isScriptSetup&&hasOwn(setupState,key)){return setupState[key];}// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
var normalizedProps=void 0;if(key[0]!=='$'){var n=accessCache[key];if(n!==undefined){switch(n){case 1/* SETUP */:return setupState[key];case 2/* DATA */:return data[key];case 4/* CONTEXT */:return ctx[key];case 3/* PROPS */:return props[key];// default: just fallthrough
}}else if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){accessCache[key]=1/* SETUP */;return setupState[key];}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){accessCache[key]=2/* DATA */;return data[key];}else if(// only cache other properties when instance has declared (thus stable)
// props
(normalizedProps=instance.propsOptions[0])&&hasOwn(normalizedProps,key)){accessCache[key]=3/* PROPS */;return props[key];}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){accessCache[key]=4/* CONTEXT */;return ctx[key];}else if(!__VUE_OPTIONS_API__||shouldCacheAccess){accessCache[key]=0/* OTHER */;}}var publicGetter=publicPropertiesMap[key];var cssModule=void 0,globalProperties=void 0;// public $xxx properties
if(publicGetter){if(key==='$attrs'){track(instance,"get"/* GET */,key);process.env.NODE_ENV!=='production'&&markAttrsAccessed();}return publicGetter(instance);}else if(// css module (injected by vue-loader)
(cssModule=type.__cssModules)&&(cssModule=cssModule[key])){return cssModule;}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){// user may set custom properties to `this` that start with `$`
accessCache[key]=4/* CONTEXT */;return ctx[key];}else if(// global properties
globalProperties=appContext.config.globalProperties, hasOwn(globalProperties,key)){{var desc=Object.getOwnPropertyDescriptor(globalProperties,key);if(desc.get){return desc.get.call(instance.proxy);}else{var _val=globalProperties[key];return isFunction(_val)?_val.bind(instance.proxy):_val;}}}else if(process.env.NODE_ENV!=='production'&&currentRenderingInstance&&(!isString(key)||// #1091 avoid internal isRef/isVNode checks on component instance leading
// to infinite warning loop
key.indexOf('__v')!==0)){if(data!==EMPTY_OBJ&&(key[0]==='$'||key[0]==='_')&&hasOwn(data,key)){warn$1('Property '+JSON.stringify(key)+' must be accessed via $data because it starts with a reserved '+'character ("$" or "_") and is not proxied on the render context.');}else if(instance===currentRenderingInstance){warn$1('Property '+JSON.stringify(key)+' was accessed during render '+'but is not defined on instance.');}}},set:function set(_ref31,key,value){var instance=_ref31._;var data=instance.data,setupState=instance.setupState,ctx=instance.ctx;if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){setupState[key]=value;return true;}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){data[key]=value;return true;}else if(hasOwn(instance.props,key)){process.env.NODE_ENV!=='production'&&warn$1('Attempting to mutate prop "'+key+'". Props are readonly.',instance);return false;}if(key[0]==='$'&&key.slice(1)in instance){process.env.NODE_ENV!=='production'&&warn$1('Attempting to mutate public property "'+key+'". '+'Properties starting with $ are reserved and readonly.',instance);return false;}else{if(process.env.NODE_ENV!=='production'&&key in instance.appContext.config.globalProperties){Object.defineProperty(ctx,key,{enumerable:true,configurable:true,value:value});}else{ctx[key]=value;}}return true;},has:function has(_ref32,key){var _ref32$_=_ref32._,data=_ref32$_.data,setupState=_ref32$_.setupState,accessCache=_ref32$_.accessCache,ctx=_ref32$_.ctx,appContext=_ref32$_.appContext,propsOptions=_ref32$_.propsOptions;var normalizedProps=void 0;return!!accessCache[key]||data!==EMPTY_OBJ&&hasOwn(data,key)||setupState!==EMPTY_OBJ&&hasOwn(setupState,key)||(normalizedProps=propsOptions[0])&&hasOwn(normalizedProps,key)||hasOwn(ctx,key)||hasOwn(publicPropertiesMap,key)||hasOwn(appContext.config.globalProperties,key);},defineProperty:function defineProperty$$1(target,key,descriptor){if(descriptor.get!=null){this.set(target,key,descriptor.get(),null);}else if(descriptor.value!=null){this.set(target,key,descriptor.value,null);}return Reflect.defineProperty(target,key,descriptor);}};if(process.env.NODE_ENV!=='production'&&!false){PublicInstanceProxyHandlers.ownKeys=function(target){warn$1('Avoid app logic that relies on enumerating keys on a component instance. '+'The keys will be empty in production mode to avoid performance overhead.');return Reflect.ownKeys(target);};}var RuntimeCompiledPublicInstanceProxyHandlers=/*#__PURE__*/extend({},PublicInstanceProxyHandlers,{get:function get(target,key){// fast path for unscopables when using `with` block
if(key===Symbol.unscopables){return;}return PublicInstanceProxyHandlers.get(target,key,target);},has:function has(_,key){var has=key[0]!=='_'&&!isGloballyWhitelisted(key);if(process.env.NODE_ENV!=='production'&&!has&&PublicInstanceProxyHandlers.has(_,key)){warn$1('Property '+JSON.stringify(key)+' should not start with _ which is a reserved prefix for Vue internals.');}return has;}});// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance){var target={};// expose internal instance for proxy handlers
Object.defineProperty(target,'_',{configurable:true,enumerable:false,get:function get(){return instance;}});// expose public properties
Object.keys(publicPropertiesMap).forEach(function(key){Object.defineProperty(target,key,{configurable:true,enumerable:false,get:function get(){return publicPropertiesMap[key](instance);},// intercepted by the proxy so no need for implementation,
// but needed to prevent set errors
set:NOOP});});return target;}// dev only
function exposePropsOnRenderContext(instance){var ctx=instance.ctx,_instance$propsOption6=slicedToArray(instance.propsOptions,1),propsOptions=_instance$propsOption6[0];if(propsOptions){Object.keys(propsOptions).forEach(function(key){Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:function get(){return instance.props[key];},set:NOOP});});}}// dev only
function exposeSetupStateOnRenderContext(instance){var ctx=instance.ctx,setupState=instance.setupState;Object.keys(toRaw(setupState)).forEach(function(key){if(!setupState.__isScriptSetup){if(key[0]==='$'||key[0]==='_'){warn$1('setup() return property '+JSON.stringify(key)+' should not start with "$" or "_" '+'which are reserved prefixes for Vue internals.');return;}Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:function get(){return setupState[key];},set:NOOP});}});}var emptyAppContext=createAppContext();var uid$1=0;function createComponentInstance(vnode,parent,suspense){var type=vnode.type;// inherit parent app context - or - if root, adopt from root vnode
var appContext=(parent?parent.appContext:vnode.appContext)||emptyAppContext;var instance={uid:uid$1++,vnode:vnode,type:type,parent:parent,appContext:appContext,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(true/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:parent?parent.provides:Object.create(appContext.provides),accessCache:null,renderCache:[],// local resovled assets
components:null,directives:null,// resolved props and emits options
propsOptions:normalizePropsOptions(type,appContext),emitsOptions:normalizeEmitsOptions(type,appContext),// emit
emit:null,emitted:null,// props default value
propsDefaults:EMPTY_OBJ,// inheritAttrs
inheritAttrs:type.inheritAttrs,// state
ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,// suspense related
suspense:suspense,suspenseId:suspense?suspense.pendingId:0,asyncDep:null,asyncResolved:false,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:false,isUnmounted:false,isDeactivated:false,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};if(process.env.NODE_ENV!=='production'){instance.ctx=createDevRenderContext(instance);}else{instance.ctx={_:instance};}instance.root=parent?parent.root:instance;instance.emit=emit$2.bind(null,instance);// apply custom element special handling
if(vnode.ce){vnode.ce(instance);}return instance;}var currentInstance=null;var getCurrentInstance=function getCurrentInstance(){return currentInstance||currentRenderingInstance;};var setCurrentInstance=function setCurrentInstance(instance){currentInstance=instance;instance.scope.on();};var unsetCurrentInstance=function unsetCurrentInstance(){currentInstance&&currentInstance.scope.off();currentInstance=null;};var isBuiltInTag=/*#__PURE__*/makeMap('slot,component');function validateComponentName(name,config){var appIsNativeTag=config.isNativeTag||NO;if(isBuiltInTag(name)||appIsNativeTag(name)){warn$1('Do not use built-in or reserved HTML elements as component id: '+name);}}function isStatefulComponent(instance){return instance.vnode.shapeFlag&4/* STATEFUL_COMPONENT */;}var isInSSRComponentSetup=false;function setupComponent(instance){var isSSR=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;isInSSRComponentSetup=isSSR;var _instance$vnode=instance.vnode,props=_instance$vnode.props,children=_instance$vnode.children;var isStateful=isStatefulComponent(instance);initProps(instance,props,isStateful,isSSR);initSlots(instance,children);var setupResult=isStateful?setupStatefulComponent(instance,isSSR):undefined;isInSSRComponentSetup=false;return setupResult;}function setupStatefulComponent(instance,isSSR){var Component=instance.type;if(process.env.NODE_ENV!=='production'){if(Component.name){validateComponentName(Component.name,instance.appContext.config);}if(Component.components){var names=Object.keys(Component.components);for(var i=0;i<names.length;i++){validateComponentName(names[i],instance.appContext.config);}}if(Component.directives){var _names=Object.keys(Component.directives);for(var _i4=0;_i4<_names.length;_i4++){validateDirectiveName(_names[_i4]);}}if(Component.compilerOptions&&isRuntimeOnly()){warn$1('"compilerOptions" is only supported when using a build of Vue that '+'includes the runtime compiler. Since you are using a runtime-only '+'build, the options should be passed via your build tool config instead.');}}// 0. create render proxy property access cache
instance.accessCache=Object.create(null);// 1. create public instance / render proxy
// also mark it raw so it's never observed
instance.proxy=markRaw(new Proxy(instance.ctx,PublicInstanceProxyHandlers));if(process.env.NODE_ENV!=='production'){exposePropsOnRenderContext(instance);}// 2. call setup()
var setup=Component.setup;if(setup){var setupContext=instance.setupContext=setup.length>1?createSetupContext(instance):null;setCurrentInstance(instance);pauseTracking();var setupResult=callWithErrorHandling(setup,instance,0/* SETUP_FUNCTION */,[process.env.NODE_ENV!=='production'?shallowReadonly(instance.props):instance.props,setupContext]);resetTracking();unsetCurrentInstance();if(isPromise(setupResult)){setupResult.then(unsetCurrentInstance,unsetCurrentInstance);if(isSSR){// return the promise so server-renderer can wait on it
return setupResult.then(function(resolvedResult){handleSetupResult(instance,resolvedResult,isSSR);}).catch(function(e){handleError(e,instance,0/* SETUP_FUNCTION */);});}else{// async setup returned Promise.
// bail here and wait for re-entry.
instance.asyncDep=setupResult;}}else{handleSetupResult(instance,setupResult,isSSR);}}else{finishComponentSetup(instance,isSSR);}}function handleSetupResult(instance,setupResult,isSSR){if(isFunction(setupResult)){// setup returned an inline render function
if(instance.type.__ssrInlineRender){// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
instance.ssrRender=setupResult;}else{instance.render=setupResult;}}else if(isObject(setupResult)){if(process.env.NODE_ENV!=='production'&&isVNode(setupResult)){warn$1('setup() should not return VNodes directly - '+'return a render function instead.');}// setup returned bindings.
// assuming a render function compiled from template is present.
if(process.env.NODE_ENV!=='production'||__VUE_PROD_DEVTOOLS__){instance.devtoolsRawSetupState=setupResult;}instance.setupState=proxyRefs(setupResult);if(process.env.NODE_ENV!=='production'){exposeSetupStateOnRenderContext(instance);}}else if(process.env.NODE_ENV!=='production'&&setupResult!==undefined){warn$1('setup() should return an object. Received: '+(setupResult===null?'null':typeof setupResult==='undefined'?'undefined':_typeof(setupResult)));}finishComponentSetup(instance,isSSR);}var compile=void 0;var installWithProxy=void 0;/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */function registerRuntimeCompiler(_compile){compile=_compile;installWithProxy=function installWithProxy(i){if(i.render._rc){i.withProxy=new Proxy(i.ctx,RuntimeCompiledPublicInstanceProxyHandlers);}};}// dev only
var isRuntimeOnly=function isRuntimeOnly(){return!compile;};function finishComponentSetup(instance,isSSR,skipOptions){var Component=instance.type;{convertLegacyRenderFn(instance);if(process.env.NODE_ENV!=='production'&&Component.compatConfig){validateCompatConfig(Component.compatConfig);}}// template / render function normalization
// could be already set when returned from setup()
if(!instance.render){// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
// is done by server-renderer
if(!isSSR&&compile&&!Component.render){var template=instance.vnode.props&&instance.vnode.props['inline-template']||Component.template;if(template){if(process.env.NODE_ENV!=='production'){startMeasure(instance,'compile');}var _instance$appContext$=instance.appContext.config,isCustomElement=_instance$appContext$.isCustomElement,compilerOptions=_instance$appContext$.compilerOptions;var delimiters=Component.delimiters,componentCompilerOptions=Component.compilerOptions;var finalCompilerOptions=extend(extend({isCustomElement:isCustomElement,delimiters:delimiters},compilerOptions),componentCompilerOptions);{// pass runtime compat config into the compiler
finalCompilerOptions.compatConfig=Object.create(globalCompatConfig);if(Component.compatConfig){extend(finalCompilerOptions.compatConfig,Component.compatConfig);}}Component.render=compile(template,finalCompilerOptions);if(process.env.NODE_ENV!=='production'){endMeasure(instance,'compile');}}}instance.render=Component.render||NOOP;// for runtime-compiled render functions using `with` blocks, the render
// proxy used needs a different `has` handler which is more performant and
// also only allows a whitelist of globals to fallthrough.
if(installWithProxy){installWithProxy(instance);}}// support for 2.x options
if(__VUE_OPTIONS_API__&&!skipOptions){setCurrentInstance(instance);pauseTracking();applyOptions(instance);resetTracking();unsetCurrentInstance();}// warn missing template/render
// the runtime compilation of template in SSR is done by server-render
if(process.env.NODE_ENV!=='production'&&!Component.render&&instance.render===NOOP&&!isSSR){/* istanbul ignore if */if(!compile&&Component.template){warn$1('Component provided template option but '+'runtime compilation is not supported in this build of Vue.'+' Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'/* should not happen */);}else{warn$1('Component is missing template or render function.');}}}function createAttrsProxy(instance){return new Proxy(instance.attrs,process.env.NODE_ENV!=='production'?{get:function get(target,key){markAttrsAccessed();track(instance,"get"/* GET */,'$attrs');return target[key];},set:function set(){warn$1('setupContext.attrs is readonly.');return false;},deleteProperty:function deleteProperty(){warn$1('setupContext.attrs is readonly.');return false;}}:{get:function get(target,key){track(instance,"get"/* GET */,'$attrs');return target[key];}});}function createSetupContext(instance){var expose=function expose(exposed){if(process.env.NODE_ENV!=='production'&&instance.exposed){warn$1('expose() should be called only once per setup().');}instance.exposed=exposed||{};};var attrs=void 0;if(process.env.NODE_ENV!=='production'){// We use getters in dev in case libs like test-utils overwrite instance
// properties (overwrites should not be done in prod)
return Object.freeze({get attrs(){return attrs||(attrs=createAttrsProxy(instance));},get slots(){return shallowReadonly(instance.slots);},get emit(){return function(event){for(var _len19=arguments.length,args=Array(_len19>1?_len19-1:0),_key28=1;_key28<_len19;_key28++){args[_key28-1]=arguments[_key28];}return instance.emit.apply(instance,[event].concat(args));};},expose:expose});}else{return{get attrs(){return attrs||(attrs=createAttrsProxy(instance));},slots:instance.slots,emit:instance.emit,expose:expose};}}function getExposeProxy(instance){if(instance.exposed){return instance.exposeProxy||(instance.exposeProxy=new Proxy(proxyRefs(markRaw(instance.exposed)),{get:function get(target,key){if(key in target){return target[key];}else if(key in publicPropertiesMap){return publicPropertiesMap[key](instance);}}}));}}var classifyRE=/(?:^|[-_])(\w)/g;var classify=function classify(str){return str.replace(classifyRE,function(c){return c.toUpperCase();}).replace(/[-_]/g,'');};function getComponentName(Component){return isFunction(Component)?Component.displayName||Component.name:Component.name;}/* istanbul ignore next */function formatComponentName(instance,Component){var isRoot=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var name=getComponentName(Component);if(!name&&Component.__file){var match=Component.__file.match(/([^/\\]+)\.\w+$/);if(match){name=match[1];}}if(!name&&instance&&instance.parent){// try to infer the name based on reverse resolution
var inferFromRegistry=function inferFromRegistry(registry){for(var key in registry){if(registry[key]===Component){return key;}}};name=inferFromRegistry(instance.components||instance.parent.type.components)||inferFromRegistry(instance.appContext.components);}return name?classify(name):isRoot?'App':'Anonymous';}function isClassComponent(value){return isFunction(value)&&'__vccOpts'in value;}var computed$1=function computed$1(getterOrOptions,debugOptions){// @ts-ignore
return computed(getterOrOptions,debugOptions,isInSSRComponentSetup);};// dev only
var warnRuntimeUsage=function warnRuntimeUsage(method){return warn$1(method+'() is a compiler-hint helper that is only usable inside '+'<script setup> of a single file component. Its arguments should be '+'compiled away and passing it at runtime has no effect.');};// implementation
function defineProps(){if(process.env.NODE_ENV!=='production'){warnRuntimeUsage('defineProps');}return null;}// implementation
function defineEmits(){if(process.env.NODE_ENV!=='production'){warnRuntimeUsage('defineEmits');}return null;}/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */function defineExpose(exposed){if(process.env.NODE_ENV!=='production'){warnRuntimeUsage('defineExpose');}}/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */function withDefaults(props,defaults$$1){if(process.env.NODE_ENV!=='production'){warnRuntimeUsage('withDefaults');}return null;}function useSlots(){return getContext().slots;}function useAttrs(){return getContext().attrs;}function getContext(){var i=getCurrentInstance();if(process.env.NODE_ENV!=='production'&&!i){warn$1('useContext() called without active instance.');}return i.setupContext||(i.setupContext=createSetupContext(i));}/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */function mergeDefaults(raw,defaults$$1){var props=isArray(raw)?raw.reduce(function(normalized,p){return normalized[p]={}, normalized;},{}):raw;for(var key in defaults$$1){var _opt3=props[key];if(_opt3){if(isArray(_opt3)||isFunction(_opt3)){props[key]={type:_opt3,default:defaults$$1[key]};}else{_opt3.default=defaults$$1[key];}}else if(_opt3===null){props[key]={default:defaults$$1[key]};}else if(process.env.NODE_ENV!=='production'){warn$1('props default key "'+key+'" has no corresponding declaration.');}}return props;}/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */function createPropsRestProxy(props,excludedKeys){var ret={};var _loop7=function _loop7(key){if(!excludedKeys.includes(key)){Object.defineProperty(ret,key,{enumerable:true,get:function get(){return props[key];}});}};for(var key in props){_loop7(key);}return ret;}/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */function withAsyncContext(getAwaitable){var ctx=getCurrentInstance();if(process.env.NODE_ENV!=='production'&&!ctx){warn$1('withAsyncContext called without active current instance. '+'This is likely a bug.');}var awaitable=getAwaitable();unsetCurrentInstance();if(isPromise(awaitable)){awaitable=awaitable.catch(function(e){setCurrentInstance(ctx);throw e;});}return[awaitable,function(){return setCurrentInstance(ctx);}];}// Actual implementation
function h(type,propsOrChildren,children){var l=arguments.length;if(l===2){if(isObject(propsOrChildren)&&!isArray(propsOrChildren)){// single vnode without props
if(isVNode(propsOrChildren)){return createVNode(type,null,[propsOrChildren]);}// props without children
return createVNode(type,propsOrChildren);}else{// omit props
return createVNode(type,null,propsOrChildren);}}else{if(l>3){children=Array.prototype.slice.call(arguments,2);}else if(l===3&&isVNode(children)){children=[children];}return createVNode(type,propsOrChildren,children);}}var ssrContextKey=Symbol(process.env.NODE_ENV!=='production'?'ssrContext':'');var useSSRContext=function useSSRContext(){{var ctx=inject(ssrContextKey);if(!ctx){warn$1('Server rendering context not provided. Make sure to only call '+'useSSRContext() conditionally in the server build.');}return ctx;}};function initCustomFormatter(){/* eslint-disable no-restricted-globals */if(!(process.env.NODE_ENV!=='production')||typeof window==='undefined'){return;}var vueStyle={style:'color:#3ba776'};var numberStyle={style:'color:#0b1bc9'};var stringStyle={style:'color:#b62e24'};var keywordStyle={style:'color:#9d288c'};// custom formatter for Chrome
// https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
var formatter={header:function header(obj){// TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
if(!isObject(obj)){return null;}if(obj.__isVue){return['div',vueStyle,'VueInstance'];}else if(isRef(obj)){return['div',{},['span',vueStyle,genRefFlag(obj)],'<',formatValue(obj.value),'>'];}else if(isReactive(obj)){return['div',{},['span',vueStyle,isShallow(obj)?'ShallowReactive':'Reactive'],'<',formatValue(obj),'>'+(isReadonly(obj)?' (readonly)':'')];}else if(isReadonly(obj)){return['div',{},['span',vueStyle,isShallow(obj)?'ShallowReadonly':'Readonly'],'<',formatValue(obj),'>'];}return null;},hasBody:function hasBody(obj){return obj&&obj.__isVue;},body:function body(obj){if(obj&&obj.__isVue){return['div',{}].concat(toConsumableArray(formatInstance(obj.$)));}}};function formatInstance(instance){var blocks=[];if(instance.type.props&&instance.props){blocks.push(createInstanceBlock('props',toRaw(instance.props)));}if(instance.setupState!==EMPTY_OBJ){blocks.push(createInstanceBlock('setup',instance.setupState));}if(instance.data!==EMPTY_OBJ){blocks.push(createInstanceBlock('data',toRaw(instance.data)));}var computed=extractKeys(instance,'computed');if(computed){blocks.push(createInstanceBlock('computed',computed));}var injected=extractKeys(instance,'inject');if(injected){blocks.push(createInstanceBlock('injected',injected));}blocks.push(['div',{},['span',{style:keywordStyle.style+';opacity:0.66'},'$ (internal): '],['object',{object:instance}]]);return blocks;}function createInstanceBlock(type,target){target=extend({},target);if(!Object.keys(target).length){return['span',{}];}return['div',{style:'line-height:1.25em;margin-bottom:0.6em'},['div',{style:'color:#476582'},type],['div',{style:'padding-left:1.25em'}].concat(toConsumableArray(Object.keys(target).map(function(key){return['div',{},['span',keywordStyle,key+': '],formatValue(target[key],false)];})))];}function formatValue(v){var asRaw=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(typeof v==='number'){return['span',numberStyle,v];}else if(typeof v==='string'){return['span',stringStyle,JSON.stringify(v)];}else if(typeof v==='boolean'){return['span',keywordStyle,v];}else if(isObject(v)){return['object',{object:asRaw?toRaw(v):v}];}else{return['span',stringStyle,String(v)];}}function extractKeys(instance,type){var Comp=instance.type;if(isFunction(Comp)){return;}var extracted={};for(var key in instance.ctx){if(isKeyOfType(Comp,key,type)){extracted[key]=instance.ctx[key];}}return extracted;}function isKeyOfType(Comp,key,type){var opts=Comp[type];if(isArray(opts)&&opts.includes(key)||isObject(opts)&&key in opts){return true;}if(Comp.extends&&isKeyOfType(Comp.extends,key,type)){return true;}if(Comp.mixins&&Comp.mixins.some(function(m){return isKeyOfType(m,key,type);})){return true;}}function genRefFlag(v){if(isShallow(v)){return'ShallowRef';}if(v.effect){return'ComputedRef';}return'Ref';}if(window.devtoolsFormatters){window.devtoolsFormatters.push(formatter);}else{window.devtoolsFormatters=[formatter];}}function withMemo(memo,render,cache,index){var cached=cache[index];if(cached&&isMemoSame(cached,memo)){return cached;}var ret=render();// shallow clone
ret.memo=memo.slice();return cache[index]=ret;}function isMemoSame(cached,memo){var prev=cached.memo;if(prev.length!=memo.length){return false;}for(var i=0;i<prev.length;i++){if(prev[i]!==memo[i]){return false;}}// make sure to let parent block track it when returning cached
if(isBlockTreeEnabled>0&&currentBlock){currentBlock.push(cached);}return true;}// Core API ------------------------------------------------------------------
var version="3.2.31";var _ssrUtils={createComponentInstance:createComponentInstance,setupComponent:setupComponent,renderComponentRoot:renderComponentRoot,setCurrentRenderingInstance:setCurrentRenderingInstance,isVNode:isVNode,normalizeVNode:normalizeVNode};/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */var ssrUtils=_ssrUtils;/**
 * @internal only exposed in compat builds
 */var resolveFilter$1=resolveFilter;var _compatUtils={warnDeprecation:warnDeprecation,createCompatVue:createCompatVue,isCompatEnabled:isCompatEnabled,checkCompatEnabled:checkCompatEnabled,softAssertCompatEnabled:softAssertCompatEnabled};/**
 * @internal only exposed in compat builds.
 */var compatUtils=_compatUtils;var svgNS='http://www.w3.org/2000/svg';var doc=typeof document!=='undefined'?document:null;var templateContainer=doc&&doc.createElement('template');var nodeOps={insert:function insert(child,parent,anchor){parent.insertBefore(child,anchor||null);},remove:function remove(child){var parent=child.parentNode;if(parent){parent.removeChild(child);}},createElement:function createElement(tag,isSVG,is,props){var el=isSVG?doc.createElementNS(svgNS,tag):doc.createElement(tag,is?{is:is}:undefined);if(tag==='select'&&props&&props.multiple!=null){el.setAttribute('multiple',props.multiple);}return el;},createText:function createText(text){return doc.createTextNode(text);},createComment:function createComment(text){return doc.createComment(text);},setText:function setText(node,text){node.nodeValue=text;},setElementText:function setElementText(el,text){el.textContent=text;},parentNode:function parentNode(node){return node.parentNode;},nextSibling:function nextSibling(node){return node.nextSibling;},querySelector:function querySelector(selector){return doc.querySelector(selector);},setScopeId:function setScopeId(el,id){el.setAttribute(id,'');},cloneNode:function cloneNode(el){var cloned=el.cloneNode(true);// #3072
// - in `patchDOMProp`, we store the actual value in the `el._value` property.
// - normally, elements using `:value` bindings will not be hoisted, but if
//   the bound value is a constant, e.g. `:value="true"` - they do get
//   hoisted.
// - in production, hoisted nodes are cloned when subsequent inserts, but
//   cloneNode() does not copy the custom property we attached.
// - This may need to account for other custom DOM properties we attach to
//   elements in addition to `_value` in the future.
if('_value'in el){cloned._value=el._value;}return cloned;},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent:function insertStaticContent(content,parent,anchor,isSVG,start,end){// <parent> before | first ... last | anchor </parent>
var before=anchor?anchor.previousSibling:parent.lastChild;// #5308 can only take cached path if:
// - has a single root node
// - nextSibling info is still available
if(start&&(start===end||start.nextSibling)){// cached
while(true){parent.insertBefore(start.cloneNode(true),anchor);if(start===end||!(start=start.nextSibling))break;}}else{// fresh insert
templateContainer.innerHTML=isSVG?'<svg>'+content+'</svg>':content;var template=templateContainer.content;if(isSVG){// remove outer svg wrapper
var wrapper=template.firstChild;while(wrapper.firstChild){template.appendChild(wrapper.firstChild);}template.removeChild(wrapper);}parent.insertBefore(template,anchor);}return[// first
before?before.nextSibling:parent.firstChild,// last
anchor?anchor.previousSibling:parent.lastChild];}};// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el,value,isSVG){// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
var transitionClasses=el._vtc;if(transitionClasses){value=(value?[value].concat(toConsumableArray(transitionClasses)):[].concat(toConsumableArray(transitionClasses))).join(' ');}if(value==null){el.removeAttribute('class');}else if(isSVG){el.setAttribute('class',value);}else{el.className=value;}}function patchStyle(el,prev,next){var style=el.style;var isCssString=isString(next);if(next&&!isCssString){for(var key in next){setStyle(style,key,next[key]);}if(prev&&!isString(prev)){for(var _key29 in prev){if(next[_key29]==null){setStyle(style,_key29,'');}}}}else{var currentDisplay=style.display;if(isCssString){if(prev!==next){style.cssText=next;}}else if(prev){el.removeAttribute('style');}// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style`
// value, thus handing over control to `v-show`.
if('_vod'in el){style.display=currentDisplay;}}}var importantRE=/\s*!important$/;function setStyle(style,name,val){if(isArray(val)){val.forEach(function(v){return setStyle(style,name,v);});}else{if(name.startsWith('--')){// custom property definition
style.setProperty(name,val);}else{var prefixed=autoPrefix(style,name);if(importantRE.test(val)){// !important
style.setProperty(hyphenate(prefixed),val.replace(importantRE,''),'important');}else{style[prefixed]=val;}}}}var prefixes=['Webkit','Moz','ms'];var prefixCache={};function autoPrefix(style,rawName){var cached=prefixCache[rawName];if(cached){return cached;}var name=camelize(rawName);if(name!=='filter'&&name in style){return prefixCache[rawName]=name;}name=capitalize(name);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+name;if(prefixed in style){return prefixCache[rawName]=prefixed;}}return rawName;}var xlinkNS='http://www.w3.org/1999/xlink';function patchAttr(el,key,value,isSVG,instance){if(isSVG&&key.startsWith('xlink:')){if(value==null){el.removeAttributeNS(xlinkNS,key.slice(6,key.length));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(compatCoerceAttr(el,key,value,instance)){return;}// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
var _isBoolean=isSpecialBooleanAttr(key);if(value==null||_isBoolean&&!includeBooleanAttr(value)){el.removeAttribute(key);}else{el.setAttribute(key,_isBoolean?'':value);}}}// 2.x compat
var isEnumeratedAttr=/*#__PURE__*/makeMap('contenteditable,draggable,spellcheck');function compatCoerceAttr(el,key,value){var instance=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;if(isEnumeratedAttr(key)){var v2CocercedValue=value===null?'false':typeof value!=='boolean'&&value!==undefined?'true':null;if(v2CocercedValue&&compatUtils.softAssertCompatEnabled("ATTR_ENUMERATED_COERCION"/* ATTR_ENUMERATED_COERCION */,instance,key,value,v2CocercedValue)){el.setAttribute(key,v2CocercedValue);return true;}}else if(value===false&&!isSpecialBooleanAttr(key)&&compatUtils.softAssertCompatEnabled("ATTR_FALSE_VALUE"/* ATTR_FALSE_VALUE */,instance,key)){el.removeAttribute(key);return true;}return false;}// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el,key,value,// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
prevChildren,parentComponent,parentSuspense,unmountChildren){if(key==='innerHTML'||key==='textContent'){if(prevChildren){unmountChildren(prevChildren,parentComponent,parentSuspense);}el[key]=value==null?'':value;return;}if(key==='value'&&el.tagName!=='PROGRESS'&&// custom elements may use _value internally
!el.tagName.includes('-')){// store value as _value as well since
// non-string values will be stringified.
el._value=value;var newValue=value==null?'':value;if(el.value!==newValue||// #4956: always set for OPTION elements because its value falls back to
// textContent if no value attribute is present. And setting .value for
// OPTION has no side effect
el.tagName==='OPTION'){el.value=newValue;}if(value==null){el.removeAttribute(key);}return;}if(value===''||value==null){var type=_typeof(el[key]);if(type==='boolean'){// e.g. <select multiple> compiles to { multiple: '' }
el[key]=includeBooleanAttr(value);return;}else if(value==null&&type==='string'){// e.g. <div :id="null">
el[key]='';el.removeAttribute(key);return;}else if(type==='number'){// e.g. <img :width="null">
// the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
try{el[key]=0;}catch(_a){}el.removeAttribute(key);return;}}if(value===false&&compatUtils.isCompatEnabled("ATTR_FALSE_VALUE"/* ATTR_FALSE_VALUE */,parentComponent)){var _type=_typeof(el[key]);if(_type==='string'||_type==='number'){process.env.NODE_ENV!=='production'&&compatUtils.warnDeprecation("ATTR_FALSE_VALUE"/* ATTR_FALSE_VALUE */,parentComponent,key);el[key]=_type==='number'?0:'';el.removeAttribute(key);return;}}// some properties perform value validation and throw
try{el[key]=value;}catch(e){if(process.env.NODE_ENV!=='production'){warn$1('Failed setting prop "'+key+'" on <'+el.tagName.toLowerCase()+'>: '+('value '+value+' is invalid.'),e);}}}// Async edge case fix requires storing an event listener's attach timestamp.
var _getNow=Date.now;var skipTimestampCheck=false;if(typeof window!=='undefined'){// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if(_getNow()>document.createEvent('Event').timeStamp){// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
_getNow=function _getNow(){return performance.now();};}// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
var ffMatch=navigator.userAgent.match(/firefox\/(\d+)/i);skipTimestampCheck=!!(ffMatch&&Number(ffMatch[1])<=53);}// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
var cachedNow=0;var p=Promise.resolve();var reset=function reset(){cachedNow=0;};var getNow=function getNow(){return cachedNow||(p.then(reset), cachedNow=_getNow());};function addEventListener(el,event,handler,options){el.addEventListener(event,handler,options);}function removeEventListener(el,event,handler,options){el.removeEventListener(event,handler,options);}function patchEvent(el,rawName,prevValue,nextValue){var instance=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;// vei = vue event invokers
var invokers=el._vei||(el._vei={});var existingInvoker=invokers[rawName];if(nextValue&&existingInvoker){// patch
existingInvoker.value=nextValue;}else{var _parseName=parseName(rawName),_parseName2=slicedToArray(_parseName,2),name=_parseName2[0],options=_parseName2[1];if(nextValue){// add
var invoker=invokers[rawName]=createInvoker(nextValue,instance);addEventListener(el,name,invoker,options);}else if(existingInvoker){// remove
removeEventListener(el,name,existingInvoker,options);invokers[rawName]=undefined;}}}var optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(name){var options=void 0;if(optionsModifierRE.test(name)){options={};var m=void 0;while(m=name.match(optionsModifierRE)){name=name.slice(0,name.length-m[0].length);options[m[0].toLowerCase()]=true;}}return[hyphenate(name.slice(2)),options];}function createInvoker(initialValue,instance){var invoker=function invoker(e){// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
var timeStamp=e.timeStamp||_getNow();if(skipTimestampCheck||timeStamp>=invoker.attached-1){callWithAsyncErrorHandling(patchStopImmediatePropagation(e,invoker.value),instance,5/* NATIVE_EVENT_HANDLER */,[e]);}};invoker.value=initialValue;invoker.attached=getNow();return invoker;}function patchStopImmediatePropagation(e,value){if(isArray(value)){var originalStop=e.stopImmediatePropagation;e.stopImmediatePropagation=function(){originalStop.call(e);e._stopped=true;};return value.map(function(fn){return function(e){return!e._stopped&&fn&&fn(e);};});}else{return value;}}var nativeOnRE=/^on[a-z]/;var patchProp=function patchProp(el,key,prevValue,nextValue){var isSVG=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var prevChildren=arguments[5];var parentComponent=arguments[6];var parentSuspense=arguments[7];var unmountChildren=arguments[8];if(key==='class'){patchClass(el,nextValue,isSVG);}else if(key==='style'){patchStyle(el,prevValue,nextValue);}else if(isOn(key)){// ignore v-model listeners
if(!isModelListener(key)){patchEvent(el,key,prevValue,nextValue,parentComponent);}}else if(key[0]==='.'?(key=key.slice(1), true):key[0]==='^'?(key=key.slice(1), false):shouldSetAsProp(el,key,nextValue,isSVG)){patchDOMProp(el,key,nextValue,prevChildren,parentComponent,parentSuspense,unmountChildren);}else{// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
if(key==='true-value'){el._trueValue=nextValue;}else if(key==='false-value'){el._falseValue=nextValue;}patchAttr(el,key,nextValue,isSVG,parentComponent);}};function shouldSetAsProp(el,key,value,isSVG){if(isSVG){// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
if(key==='innerHTML'||key==='textContent'){return true;}// or native onclick with function values
if(key in el&&nativeOnRE.test(key)&&isFunction(value)){return true;}return false;}// spellcheck and draggable are numerated attrs, however their
// corresponding DOM properties are actually booleans - this leads to
// setting it with a string "false" value leading it to be coerced to
// `true`, so we need to always treat them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
if(key==='spellcheck'||key==='draggable'){return false;}// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
if(key==='form'){return false;}// #1526 <input list> must be set as attribute
if(key==='list'&&el.tagName==='INPUT'){return false;}// #2766 <textarea type> must be set as attribute
if(key==='type'&&el.tagName==='TEXTAREA'){return false;}// native onclick with string value, must be set as attribute
if(nativeOnRE.test(key)&&isString(value)){return false;}return key in el;}function defineCustomElement(options,hydate){var Comp=defineComponent(options);var VueCustomElement=function(_VueElement){inherits(VueCustomElement,_VueElement);function VueCustomElement(initialProps){classCallCheck(this,VueCustomElement);return possibleConstructorReturn(this,(VueCustomElement.__proto__||Object.getPrototypeOf(VueCustomElement)).call(this,Comp,initialProps,hydate));}return VueCustomElement;}(VueElement);VueCustomElement.def=Comp;return VueCustomElement;}var defineSSRCustomElement=function defineSSRCustomElement(options){// @ts-ignore
return defineCustomElement(options,hydrate);};var BaseClass=typeof HTMLElement!=='undefined'?HTMLElement:function(){function _class(){classCallCheck(this,_class);}return _class;}();var VueElement=function(_BaseClass){inherits(VueElement,_BaseClass);function VueElement(_def){var _props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var hydrate=arguments[2];classCallCheck(this,VueElement);var _this4=possibleConstructorReturn(this,(VueElement.__proto__||Object.getPrototypeOf(VueElement)).call(this));_this4._def=_def;_this4._props=_props;/**
         * @internal
         */_this4._instance=null;_this4._connected=false;_this4._resolved=false;_this4._numberProps=null;if(_this4.shadowRoot&&hydrate){hydrate(_this4._createVNode(),_this4.shadowRoot);}else{if(process.env.NODE_ENV!=='production'&&_this4.shadowRoot){warn$1('Custom element has pre-rendered declarative shadow root but is not '+'defined as hydratable. Use `defineSSRCustomElement`.');}_this4.attachShadow({mode:'open'});}return _this4;}createClass(VueElement,[{key:'connectedCallback',value:function connectedCallback(){this._connected=true;if(!this._instance){this._resolveDef();}}},{key:'disconnectedCallback',value:function disconnectedCallback(){var _this5=this;this._connected=false;nextTick(function(){if(!_this5._connected){render(null,_this5.shadowRoot);_this5._instance=null;}});}/**
     * resolve inner component definition (handle possible async component)
     */},{key:'_resolveDef',value:function _resolveDef(){var _this6=this;if(this._resolved){return;}this._resolved=true;// set initial attrs
for(var i=0;i<this.attributes.length;i++){this._setAttr(this.attributes[i].name);}// watch future attr changes
new MutationObserver(function(mutations){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=mutations[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var m=_step6.value;_this6._setAttr(m.attributeName);}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}}).observe(this,{attributes:true});var resolve=function resolve(def){var props=def.props,styles=def.styles;var hasOptions=!isArray(props);var rawKeys=props?hasOptions?Object.keys(props):props:[];// cast Number-type props set before resolve
var numberProps=void 0;if(hasOptions){for(var key in _this6._props){var _opt4=props[key];if(_opt4===Number||_opt4&&_opt4.type===Number){_this6._props[key]=toNumber(_this6._props[key]);(numberProps||(numberProps=Object.create(null)))[key]=true;}}}_this6._numberProps=numberProps;// check if there are props set pre-upgrade or connect
var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=Object.keys(_this6)[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var _key30=_step7.value;if(_key30[0]!=='_'){_this6._setProp(_key30,_this6[_key30],true,false);}}// defining getter/setters on prototype
}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{var _loop8=function _loop8(){var key=_step8.value;Object.defineProperty(_this6,key,{get:function get(){return this._getProp(key);},set:function set(val){this._setProp(key,val);}});};for(var _iterator8=rawKeys.map(camelize)[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){_loop8();}// apply CSS
}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}_this6._applyStyles(styles);// initial render
_this6._update();};var asyncDef=this._def.__asyncLoader;if(asyncDef){asyncDef().then(resolve);}else{resolve(this._def);}}},{key:'_setAttr',value:function _setAttr(key){var value=this.getAttribute(key);if(this._numberProps&&this._numberProps[key]){value=toNumber(value);}this._setProp(camelize(key),value,false);}/**
     * @internal
     */},{key:'_getProp',value:function _getProp(key){return this._props[key];}/**
     * @internal
     */},{key:'_setProp',value:function _setProp(key,val){var shouldReflect=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var shouldUpdate=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;if(val!==this._props[key]){this._props[key]=val;if(shouldUpdate&&this._instance){this._update();}// reflect
if(shouldReflect){if(val===true){this.setAttribute(hyphenate(key),'');}else if(typeof val==='string'||typeof val==='number'){this.setAttribute(hyphenate(key),val+'');}else if(!val){this.removeAttribute(hyphenate(key));}}}}},{key:'_update',value:function _update(){render(this._createVNode(),this.shadowRoot);}},{key:'_createVNode',value:function _createVNode(){var _this7=this;var vnode=createVNode(this._def,extend({},this._props));if(!this._instance){vnode.ce=function(instance){_this7._instance=instance;instance.isCE=true;// HMR
if(process.env.NODE_ENV!=='production'){instance.ceReload=function(newStyles){// always reset styles
if(_this7._styles){_this7._styles.forEach(function(s){return _this7.shadowRoot.removeChild(s);});_this7._styles.length=0;}_this7._applyStyles(newStyles);// if this is an async component, ceReload is called from the inner
// component so no need to reload the async wrapper
if(!_this7._def.__asyncLoader){// reload
_this7._instance=null;_this7._update();}};}// intercept emit
instance.emit=function(event){for(var _len20=arguments.length,args=Array(_len20>1?_len20-1:0),_key31=1;_key31<_len20;_key31++){args[_key31-1]=arguments[_key31];}_this7.dispatchEvent(new CustomEvent(event,{detail:args}));};// locate nearest Vue custom element parent for provide/inject
var parent=_this7;while(parent=parent&&(parent.parentNode||parent.host)){if(parent instanceof VueElement){instance.parent=parent._instance;break;}}};}return vnode;}},{key:'_applyStyles',value:function _applyStyles(styles){var _this8=this;if(styles){styles.forEach(function(css){var s=document.createElement('style');s.textContent=css;_this8.shadowRoot.appendChild(s);// record for HMR
if(process.env.NODE_ENV!=='production'){(_this8._styles||(_this8._styles=[])).push(s);}});}}}]);return VueElement;}(BaseClass);function useCssModule(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'$style';/* istanbul ignore else */{var instance=getCurrentInstance();if(!instance){process.env.NODE_ENV!=='production'&&warn$1('useCssModule must be called inside setup()');return EMPTY_OBJ;}var modules=instance.type.__cssModules;if(!modules){process.env.NODE_ENV!=='production'&&warn$1('Current instance does not have CSS modules injected.');return EMPTY_OBJ;}var mod=modules[name];if(!mod){process.env.NODE_ENV!=='production'&&warn$1('Current instance does not have CSS module named "'+name+'".');return EMPTY_OBJ;}return mod;}}/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */function useCssVars(getter){var instance=getCurrentInstance();/* istanbul ignore next */if(!instance){process.env.NODE_ENV!=='production'&&warn$1('useCssVars is called without current active component instance.');return;}var setVars=function setVars(){return setVarsOnVNode(instance.subTree,getter(instance.proxy));};watchPostEffect(setVars);onMounted(function(){var ob=new MutationObserver(setVars);ob.observe(instance.subTree.el.parentNode,{childList:true});onUnmounted(function(){return ob.disconnect();});});}function setVarsOnVNode(vnode,vars){if(vnode.shapeFlag&128/* SUSPENSE */){var suspense=vnode.suspense;vnode=suspense.activeBranch;if(suspense.pendingBranch&&!suspense.isHydrating){suspense.effects.push(function(){setVarsOnVNode(suspense.activeBranch,vars);});}}// drill down HOCs until it's a non-component vnode
while(vnode.component){vnode=vnode.component.subTree;}if(vnode.shapeFlag&1/* ELEMENT */&&vnode.el){setVarsOnNode(vnode.el,vars);}else if(vnode.type===Fragment){vnode.children.forEach(function(c){return setVarsOnVNode(c,vars);});}else if(vnode.type===Static){var _vnode=vnode,el=_vnode.el,anchor=_vnode.anchor;while(el){setVarsOnNode(el,vars);if(el===anchor)break;el=el.nextSibling;}}}function setVarsOnNode(el,vars){if(el.nodeType===1){var style=el.style;for(var key in vars){style.setProperty('--'+key,vars[key]);}}}var TRANSITION='transition';var ANIMATION='animation';// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
var Transition=function Transition(props,_ref33){var slots=_ref33.slots;return h(BaseTransition,resolveTransitionProps(props),slots);};Transition.displayName='Transition';{Transition.__isBuiltIn=true;}var DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:true},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};var TransitionPropsValidators=Transition.props=/*#__PURE__*/extend({},BaseTransition.props,DOMTransitionPropsValidators);/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */var callHook$1=function callHook$1(hook){var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(isArray(hook)){hook.forEach(function(h){return h.apply(undefined,toConsumableArray(args));});}else if(hook){hook.apply(undefined,toConsumableArray(args));}};/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */var hasExplicitCallback=function hasExplicitCallback(hook){return hook?isArray(hook)?hook.some(function(h){return h.length>1;}):hook.length>1:false;};function resolveTransitionProps(rawProps){var baseProps={};for(var key in rawProps){if(!(key in DOMTransitionPropsValidators)){baseProps[key]=rawProps[key];}}if(rawProps.css===false){return baseProps;}var _rawProps$name=rawProps.name,name=_rawProps$name===undefined?'v':_rawProps$name,type=rawProps.type,duration=rawProps.duration,_rawProps$enterFromCl=rawProps.enterFromClass,enterFromClass=_rawProps$enterFromCl===undefined?name+'-enter-from':_rawProps$enterFromCl,_rawProps$enterActive=rawProps.enterActiveClass,enterActiveClass=_rawProps$enterActive===undefined?name+'-enter-active':_rawProps$enterActive,_rawProps$enterToClas=rawProps.enterToClass,enterToClass=_rawProps$enterToClas===undefined?name+'-enter-to':_rawProps$enterToClas,_rawProps$appearFromC=rawProps.appearFromClass,appearFromClass=_rawProps$appearFromC===undefined?enterFromClass:_rawProps$appearFromC,_rawProps$appearActiv=rawProps.appearActiveClass,appearActiveClass=_rawProps$appearActiv===undefined?enterActiveClass:_rawProps$appearActiv,_rawProps$appearToCla=rawProps.appearToClass,appearToClass=_rawProps$appearToCla===undefined?enterToClass:_rawProps$appearToCla,_rawProps$leaveFromCl=rawProps.leaveFromClass,leaveFromClass=_rawProps$leaveFromCl===undefined?name+'-leave-from':_rawProps$leaveFromCl,_rawProps$leaveActive=rawProps.leaveActiveClass,leaveActiveClass=_rawProps$leaveActive===undefined?name+'-leave-active':_rawProps$leaveActive,_rawProps$leaveToClas=rawProps.leaveToClass,leaveToClass=_rawProps$leaveToClas===undefined?name+'-leave-to':_rawProps$leaveToClas;// legacy transition class compat
var legacyClassEnabled=compatUtils.isCompatEnabled("TRANSITION_CLASSES"/* TRANSITION_CLASSES */,null);var legacyEnterFromClass=void 0;var legacyAppearFromClass=void 0;var legacyLeaveFromClass=void 0;if(legacyClassEnabled){var toLegacyClass=function toLegacyClass(cls){return cls.replace(/-from$/,'');};if(!rawProps.enterFromClass){legacyEnterFromClass=toLegacyClass(enterFromClass);}if(!rawProps.appearFromClass){legacyAppearFromClass=toLegacyClass(appearFromClass);}if(!rawProps.leaveFromClass){legacyLeaveFromClass=toLegacyClass(leaveFromClass);}}var durations=normalizeDuration(duration);var enterDuration=durations&&durations[0];var leaveDuration=durations&&durations[1];var _onBeforeEnter=baseProps.onBeforeEnter,onEnter=baseProps.onEnter,_onEnterCancelled=baseProps.onEnterCancelled,_onLeave=baseProps.onLeave,_onLeaveCancelled=baseProps.onLeaveCancelled,_baseProps$onBeforeAp=baseProps.onBeforeAppear,_onBeforeAppear=_baseProps$onBeforeAp===undefined?_onBeforeEnter:_baseProps$onBeforeAp,_baseProps$onAppear=baseProps.onAppear,onAppear=_baseProps$onAppear===undefined?onEnter:_baseProps$onAppear,_baseProps$onAppearCa=baseProps.onAppearCancelled,_onAppearCancelled=_baseProps$onAppearCa===undefined?_onEnterCancelled:_baseProps$onAppearCa;var finishEnter=function finishEnter(el,isAppear,done){removeTransitionClass(el,isAppear?appearToClass:enterToClass);removeTransitionClass(el,isAppear?appearActiveClass:enterActiveClass);done&&done();};var finishLeave=function finishLeave(el,done){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);done&&done();};var makeEnterHook=function makeEnterHook(isAppear){return function(el,done){var hook=isAppear?onAppear:onEnter;var resolve=function resolve(){return finishEnter(el,isAppear,done);};callHook$1(hook,[el,resolve]);nextFrame(function(){removeTransitionClass(el,isAppear?appearFromClass:enterFromClass);if(legacyClassEnabled){removeTransitionClass(el,isAppear?legacyAppearFromClass:legacyEnterFromClass);}addTransitionClass(el,isAppear?appearToClass:enterToClass);if(!hasExplicitCallback(hook)){whenTransitionEnds(el,type,enterDuration,resolve);}});};};return extend(baseProps,{onBeforeEnter:function onBeforeEnter(el){callHook$1(_onBeforeEnter,[el]);addTransitionClass(el,enterFromClass);if(legacyClassEnabled){addTransitionClass(el,legacyEnterFromClass);}addTransitionClass(el,enterActiveClass);},onBeforeAppear:function onBeforeAppear(el){callHook$1(_onBeforeAppear,[el]);addTransitionClass(el,appearFromClass);if(legacyClassEnabled){addTransitionClass(el,legacyAppearFromClass);}addTransitionClass(el,appearActiveClass);},onEnter:makeEnterHook(false),onAppear:makeEnterHook(true),onLeave:function onLeave(el,done){var resolve=function resolve(){return finishLeave(el,done);};addTransitionClass(el,leaveFromClass);if(legacyClassEnabled){addTransitionClass(el,legacyLeaveFromClass);}// force reflow so *-leave-from classes immediately take effect (#2593)
forceReflow();addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveFromClass);if(legacyClassEnabled){removeTransitionClass(el,legacyLeaveFromClass);}addTransitionClass(el,leaveToClass);if(!hasExplicitCallback(_onLeave)){whenTransitionEnds(el,type,leaveDuration,resolve);}});callHook$1(_onLeave,[el,resolve]);},onEnterCancelled:function onEnterCancelled(el){finishEnter(el,false);callHook$1(_onEnterCancelled,[el]);},onAppearCancelled:function onAppearCancelled(el){finishEnter(el,true);callHook$1(_onAppearCancelled,[el]);},onLeaveCancelled:function onLeaveCancelled(el){finishLeave(el);callHook$1(_onLeaveCancelled,[el]);}});}function normalizeDuration(duration){if(duration==null){return null;}else if(isObject(duration)){return[NumberOf(duration.enter),NumberOf(duration.leave)];}else{var n=NumberOf(duration);return[n,n];}}function NumberOf(val){var res=toNumber(val);if(process.env.NODE_ENV!=='production')validateDuration(res);return res;}function validateDuration(val){if(typeof val!=='number'){warn$1('<transition> explicit duration is not a valid number - '+('got '+JSON.stringify(val)+'.'));}else if(isNaN(val)){warn$1('<transition> explicit duration is NaN - '+'the duration expression might be incorrect.');}}function addTransitionClass(el,cls){cls.split(/\s+/).forEach(function(c){return c&&el.classList.add(c);});(el._vtc||(el._vtc=new Set())).add(cls);}function removeTransitionClass(el,cls){cls.split(/\s+/).forEach(function(c){return c&&el.classList.remove(c);});var _vtc=el._vtc;if(_vtc){_vtc.delete(cls);if(!_vtc.size){el._vtc=undefined;}}}function nextFrame(cb){requestAnimationFrame(function(){requestAnimationFrame(cb);});}var endId=0;function whenTransitionEnds(el,expectedType,explicitTimeout,resolve){var id=el._endId=++endId;var resolveIfNotStale=function resolveIfNotStale(){if(id===el._endId){resolve();}};if(explicitTimeout){return setTimeout(resolveIfNotStale,explicitTimeout);}var _getTransitionInfo=getTransitionInfo(el,expectedType),type=_getTransitionInfo.type,timeout=_getTransitionInfo.timeout,propCount=_getTransitionInfo.propCount;if(!type){return resolve();}var endEvent=type+'end';var ended=0;var end=function end(){el.removeEventListener(endEvent,onEnd);resolveIfNotStale();};var onEnd=function onEnd(e){if(e.target===el&&++ended>=propCount){end();}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(endEvent,onEnd);}function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);// JSDOM may return undefined for transition properties
var getStyleProperties=function getStyleProperties(key){return(styles[key]||'').split(', ');};var transitionDelays=getStyleProperties(TRANSITION+'Delay');var transitionDurations=getStyleProperties(TRANSITION+'Duration');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=getStyleProperties(ANIMATION+'Delay');var animationDurations=getStyleProperties(ANIMATION+'Duration');var animationTimeout=getTimeout(animationDelays,animationDurations);var type=null;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&/\b(transform|all)(,|$)/.test(styles[TRANSITION+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){while(delays.length<durations.length){delays=delays.concat(delays);}return Math.max.apply(Math,toConsumableArray(durations.map(function(d,i){return toMs(d)+toMs(delays[i]);})));}// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s){return Number(s.slice(0,-1).replace(',','.'))*1000;}// synchronously force layout to put elements into a certain state
function forceReflow(){return document.body.offsetHeight;}var positionMap=new WeakMap();var newPositionMap=new WeakMap();var TransitionGroupImpl={name:'TransitionGroup',props:/*#__PURE__*/extend({},TransitionPropsValidators,{tag:String,moveClass:String}),setup:function setup(props,_ref34){var slots=_ref34.slots;var instance=getCurrentInstance();var state=useTransitionState();var prevChildren=void 0;var children=void 0;onUpdated(function(){// children is guaranteed to exist after initial render
if(!prevChildren.length){return;}var moveClass=props.moveClass||(props.name||'v')+'-move';if(!hasCSSTransform(prevChildren[0].el,instance.vnode.el,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
prevChildren.forEach(callPendingCbs);prevChildren.forEach(recordPosition);var movedChildren=prevChildren.filter(applyTranslation);// force reflow to put everything in position
forceReflow();movedChildren.forEach(function(c){var el=c.el;var style=el.style;addTransitionClass(el,moveClass);style.transform=style.webkitTransform=style.transitionDuration='';var cb=el._moveCb=function(e){if(e&&e.target!==el){return;}if(!e||/transform$/.test(e.propertyName)){el.removeEventListener('transitionend',cb);el._moveCb=null;removeTransitionClass(el,moveClass);}};el.addEventListener('transitionend',cb);});});return function(){var rawProps=toRaw(props);var cssTransitionProps=resolveTransitionProps(rawProps);var tag=rawProps.tag||Fragment;if(!rawProps.tag&&compatUtils.checkCompatEnabled("TRANSITION_GROUP_ROOT"/* TRANSITION_GROUP_ROOT */,instance.parent)){tag='span';}prevChildren=children;children=slots.default?getTransitionRawChildren(slots.default()):[];for(var i=0;i<children.length;i++){var child=children[i];if(child.key!=null){setTransitionHooks(child,resolveTransitionHooks(child,cssTransitionProps,state,instance));}else if(process.env.NODE_ENV!=='production'){warn$1('<TransitionGroup> children must be keyed.');}}if(prevChildren){for(var _i5=0;_i5<prevChildren.length;_i5++){var _child=prevChildren[_i5];setTransitionHooks(_child,resolveTransitionHooks(_child,cssTransitionProps,state,instance));positionMap.set(_child,_child.el.getBoundingClientRect());}}return createVNode(tag,null,children);};}};{TransitionGroupImpl.__isBuiltIn=true;}var TransitionGroup=TransitionGroupImpl;function callPendingCbs(c){var el=c.el;if(el._moveCb){el._moveCb();}if(el._enterCb){el._enterCb();}}function recordPosition(c){newPositionMap.set(c,c.el.getBoundingClientRect());}function applyTranslation(c){var oldPos=positionMap.get(c);var newPos=newPositionMap.get(c);var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){var s=c.el.style;s.transform=s.webkitTransform='translate('+dx+'px,'+dy+'px)';s.transitionDuration='0s';return c;}}function hasCSSTransform(el,root,moveClass){// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
var clone=el.cloneNode();if(el._vtc){el._vtc.forEach(function(cls){cls.split(/\s+/).forEach(function(c){return c&&clone.classList.remove(c);});});}moveClass.split(/\s+/).forEach(function(c){return c&&clone.classList.add(c);});clone.style.display='none';var container=root.nodeType===1?root:root.parentNode;container.appendChild(clone);var _getTransitionInfo2=getTransitionInfo(clone),hasTransform=_getTransitionInfo2.hasTransform;container.removeChild(clone);return hasTransform;}var getModelAssigner=function getModelAssigner(vnode){var fn=vnode.props['onUpdate:modelValue'];return isArray(fn)?function(value){return invokeArrayFns(fn,value);}:fn;};function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){var target=e.target;if(target.composing){target.composing=false;trigger$1(target,'input');}}function trigger$1(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
var vModelText={created:function created(el,_ref35,vnode){var _ref35$modifiers=_ref35.modifiers,lazy=_ref35$modifiers.lazy,trim=_ref35$modifiers.trim,number=_ref35$modifiers.number;el._assign=getModelAssigner(vnode);var castToNumber=number||vnode.props&&vnode.props.type==='number';addEventListener(el,lazy?'change':'input',function(e){if(e.target.composing)return;var domValue=el.value;if(trim){domValue=domValue.trim();}else if(castToNumber){domValue=toNumber(domValue);}el._assign(domValue);});if(trim){addEventListener(el,'change',function(){el.value=el.value.trim();});}if(!lazy){addEventListener(el,'compositionstart',onCompositionStart);addEventListener(el,'compositionend',onCompositionEnd);// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
addEventListener(el,'change',onCompositionEnd);}},// set value on mounted so it's after min/max for type="range"
mounted:function mounted(el,_ref36){var value=_ref36.value;el.value=value==null?'':value;},beforeUpdate:function beforeUpdate(el,_ref37,vnode){var value=_ref37.value,_ref37$modifiers=_ref37.modifiers,lazy=_ref37$modifiers.lazy,trim=_ref37$modifiers.trim,number=_ref37$modifiers.number;el._assign=getModelAssigner(vnode);// avoid clearing unresolved text. #2302
if(el.composing)return;if(document.activeElement===el){if(lazy){return;}if(trim&&el.value.trim()===value){return;}if((number||el.type==='number')&&toNumber(el.value)===value){return;}}var newValue=value==null?'':value;if(el.value!==newValue){el.value=newValue;}}};var vModelCheckbox={// #4096 array checkboxes need to be deep traversed
deep:true,created:function created(el,_,vnode){el._assign=getModelAssigner(vnode);addEventListener(el,'change',function(){var modelValue=el._modelValue;var elementValue=getValue(el);var checked=el.checked;var assign=el._assign;if(isArray(modelValue)){var index=looseIndexOf(modelValue,elementValue);var found=index!==-1;if(checked&&!found){assign(modelValue.concat(elementValue));}else if(!checked&&found){var filtered=[].concat(toConsumableArray(modelValue));filtered.splice(index,1);assign(filtered);}}else if(isSet(modelValue)){var cloned=new Set(modelValue);if(checked){cloned.add(elementValue);}else{cloned.delete(elementValue);}assign(cloned);}else{assign(getCheckboxValue(el,checked));}});},// set initial checked on mount to wait for true-value/false-value
mounted:setChecked,beforeUpdate:function beforeUpdate(el,binding,vnode){el._assign=getModelAssigner(vnode);setChecked(el,binding,vnode);}};function setChecked(el,_ref38,vnode){var value=_ref38.value,oldValue=_ref38.oldValue;el._modelValue=value;if(isArray(value)){el.checked=looseIndexOf(value,vnode.props.value)>-1;}else if(isSet(value)){el.checked=value.has(vnode.props.value);}else if(value!==oldValue){el.checked=looseEqual(value,getCheckboxValue(el,true));}}var vModelRadio={created:function created(el,_ref39,vnode){var value=_ref39.value;el.checked=looseEqual(value,vnode.props.value);el._assign=getModelAssigner(vnode);addEventListener(el,'change',function(){el._assign(getValue(el));});},beforeUpdate:function beforeUpdate(el,_ref40,vnode){var value=_ref40.value,oldValue=_ref40.oldValue;el._assign=getModelAssigner(vnode);if(value!==oldValue){el.checked=looseEqual(value,vnode.props.value);}}};var vModelSelect={// <select multiple> value need to be deep traversed
deep:true,created:function created(el,_ref41,vnode){var value=_ref41.value,number=_ref41.modifiers.number;var isSetModel=isSet(value);addEventListener(el,'change',function(){var selectedVal=Array.prototype.filter.call(el.options,function(o){return o.selected;}).map(function(o){return number?toNumber(getValue(o)):getValue(o);});el._assign(el.multiple?isSetModel?new Set(selectedVal):selectedVal:selectedVal[0]);});el._assign=getModelAssigner(vnode);},// set value in mounted & updated because <select> relies on its children
// <option>s.
mounted:function mounted(el,_ref42){var value=_ref42.value;setSelected(el,value);},beforeUpdate:function beforeUpdate(el,_binding,vnode){el._assign=getModelAssigner(vnode);},updated:function updated(el,_ref43){var value=_ref43.value;setSelected(el,value);}};function setSelected(el,value){var isMultiple=el.multiple;if(isMultiple&&!isArray(value)&&!isSet(value)){process.env.NODE_ENV!=='production'&&warn$1('<select multiple v-model> expects an Array or Set value for its binding, '+('but got '+Object.prototype.toString.call(value).slice(8,-1)+'.'));return;}for(var i=0,l=el.options.length;i<l;i++){var option=el.options[i];var optionValue=getValue(option);if(isMultiple){if(isArray(value)){option.selected=looseIndexOf(value,optionValue)>-1;}else{option.selected=value.has(optionValue);}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i)el.selectedIndex=i;return;}}}if(!isMultiple&&el.selectedIndex!==-1){el.selectedIndex=-1;}}// retrieve raw value set via :value bindings
function getValue(el){return'_value'in el?el._value:el.value;}// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el,checked){var key=checked?'_trueValue':'_falseValue';return key in el?el[key]:checked;}var vModelDynamic={created:function created(el,binding,vnode){callModelHook(el,binding,vnode,null,'created');},mounted:function mounted(el,binding,vnode){callModelHook(el,binding,vnode,null,'mounted');},beforeUpdate:function beforeUpdate(el,binding,vnode,prevVNode){callModelHook(el,binding,vnode,prevVNode,'beforeUpdate');},updated:function updated(el,binding,vnode,prevVNode){callModelHook(el,binding,vnode,prevVNode,'updated');}};function callModelHook(el,binding,vnode,prevVNode,hook){var modelToUse=void 0;switch(el.tagName){case'SELECT':modelToUse=vModelSelect;break;case'TEXTAREA':modelToUse=vModelText;break;default:switch(vnode.props&&vnode.props.type){case'checkbox':modelToUse=vModelCheckbox;break;case'radio':modelToUse=vModelRadio;break;default:modelToUse=vModelText;}}var fn=modelToUse[hook];fn&&fn(el,binding,vnode,prevVNode);}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR(){vModelText.getSSRProps=function(_ref44){var value=_ref44.value;return{value:value};};vModelRadio.getSSRProps=function(_ref45,vnode){var value=_ref45.value;if(vnode.props&&looseEqual(vnode.props.value,value)){return{checked:true};}};vModelCheckbox.getSSRProps=function(_ref46,vnode){var value=_ref46.value;if(isArray(value)){if(vnode.props&&looseIndexOf(value,vnode.props.value)>-1){return{checked:true};}}else if(isSet(value)){if(vnode.props&&value.has(vnode.props.value)){return{checked:true};}}else if(value){return{checked:true};}};}var systemModifiers=['ctrl','shift','alt','meta'];var modifierGuards={stop:function stop(e){return e.stopPropagation();},prevent:function prevent(e){return e.preventDefault();},self:function self(e){return e.target!==e.currentTarget;},ctrl:function ctrl(e){return!e.ctrlKey;},shift:function shift(e){return!e.shiftKey;},alt:function alt(e){return!e.altKey;},meta:function meta(e){return!e.metaKey;},left:function left(e){return'button'in e&&e.button!==0;},middle:function middle(e){return'button'in e&&e.button!==1;},right:function right(e){return'button'in e&&e.button!==2;},exact:function exact(e,modifiers){return systemModifiers.some(function(m){return e[m+'Key']&&!modifiers.includes(m);});}};/**
 * @private
 */var withModifiers=function withModifiers(fn,modifiers){return function(event){for(var _len21=arguments.length,args=Array(_len21>1?_len21-1:0),_key32=1;_key32<_len21;_key32++){args[_key32-1]=arguments[_key32];}for(var i=0;i<modifiers.length;i++){var guard=modifierGuards[modifiers[i]];if(guard&&guard(event,modifiers))return;}return fn.apply(undefined,[event].concat(args));};};// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
var keyNames={esc:'escape',space:' ',up:'arrow-up',left:'arrow-left',right:'arrow-right',down:'arrow-down',delete:'backspace'};/**
 * @private
 */var withKeys=function withKeys(fn,modifiers){var globalKeyCodes=void 0;var instance=null;{instance=getCurrentInstance();if(compatUtils.isCompatEnabled("CONFIG_KEY_CODES"/* CONFIG_KEY_CODES */,instance)){if(instance){globalKeyCodes=instance.appContext.config.keyCodes;}}if(process.env.NODE_ENV!=='production'&&modifiers.some(function(m){return /^\d+$/.test(m);})){compatUtils.warnDeprecation("V_ON_KEYCODE_MODIFIER"/* V_ON_KEYCODE_MODIFIER */,instance);}}return function(event){if(!('key'in event)){return;}var eventKey=hyphenate(event.key);if(modifiers.some(function(k){return k===eventKey||keyNames[k]===eventKey;})){return fn(event);}{var _ret11=function(){var keyCode=String(event.keyCode);if(compatUtils.isCompatEnabled("V_ON_KEYCODE_MODIFIER"/* V_ON_KEYCODE_MODIFIER */,instance)&&modifiers.some(function(mod){return mod==keyCode;})){return{v:fn(event)};}if(globalKeyCodes){var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=modifiers[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var mod=_step9.value;var codes=globalKeyCodes[mod];if(codes){var _matches=isArray(codes)?codes.some(function(code){return String(code)===keyCode;}):String(codes)===keyCode;if(_matches){return{v:fn(event)};}}}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}}}();if((typeof _ret11==='undefined'?'undefined':_typeof(_ret11))==="object")return _ret11.v;}};};var vShow={beforeMount:function beforeMount(el,_ref47,_ref48){var value=_ref47.value;var transition=_ref48.transition;el._vod=el.style.display==='none'?'':el.style.display;if(transition&&value){transition.beforeEnter(el);}else{setDisplay(el,value);}},mounted:function mounted(el,_ref49,_ref50){var value=_ref49.value;var transition=_ref50.transition;if(transition&&value){transition.enter(el);}},updated:function updated(el,_ref51,_ref52){var value=_ref51.value,oldValue=_ref51.oldValue;var transition=_ref52.transition;if(!value===!oldValue)return;if(transition){if(value){transition.beforeEnter(el);setDisplay(el,true);transition.enter(el);}else{transition.leave(el,function(){setDisplay(el,false);});}}else{setDisplay(el,value);}},beforeUnmount:function beforeUnmount(el,_ref53){var value=_ref53.value;setDisplay(el,value);}};function setDisplay(el,value){el.style.display=value?el._vod:'none';}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR(){vShow.getSSRProps=function(_ref54){var value=_ref54.value;if(!value){return{style:{display:'none'}};}};}var rendererOptions=extend({patchProp:patchProp},nodeOps);// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
var renderer=void 0;var enabledHydration=false;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions));}function ensureHydrationRenderer(){renderer=enabledHydration?renderer:createHydrationRenderer(rendererOptions);enabledHydration=true;return renderer;}// use explicit type casts here to avoid import() calls in rolled-up d.ts
var render=function render(){var _ensureRenderer;(_ensureRenderer=ensureRenderer()).render.apply(_ensureRenderer,arguments);};var hydrate=function hydrate(){var _ensureHydrationRende;(_ensureHydrationRende=ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende,arguments);};var createApp=function createApp(){var _ensureRenderer2;var app=(_ensureRenderer2=ensureRenderer()).createApp.apply(_ensureRenderer2,arguments);if(process.env.NODE_ENV!=='production'){injectNativeTagCheck(app);injectCompilerOptionsCheck(app);}var mount=app.mount;app.mount=function(containerOrSelector){var container=normalizeContainer(containerOrSelector);if(!container)return;var component=app._component;if(!isFunction(component)&&!component.render&&!component.template){// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
component.template=container.innerHTML;// 2.x compat check
if(process.env.NODE_ENV!=='production'){for(var i=0;i<container.attributes.length;i++){var attr=container.attributes[i];if(attr.name!=='v-cloak'&&/^(v-|:|@)/.test(attr.name)){compatUtils.warnDeprecation("GLOBAL_MOUNT_CONTAINER"/* GLOBAL_MOUNT_CONTAINER */,null);break;}}}}// clear content before mounting
container.innerHTML='';var proxy=mount(container,false,container instanceof SVGElement);if(container instanceof Element){container.removeAttribute('v-cloak');container.setAttribute('data-v-app','');}return proxy;};return app;};var createSSRApp=function createSSRApp(){var _ensureHydrationRende2;var app=(_ensureHydrationRende2=ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2,arguments);if(process.env.NODE_ENV!=='production'){injectNativeTagCheck(app);injectCompilerOptionsCheck(app);}var mount=app.mount;app.mount=function(containerOrSelector){var container=normalizeContainer(containerOrSelector);if(container){return mount(container,true,container instanceof SVGElement);}};return app;};function injectNativeTagCheck(app){// Inject `isNativeTag`
// this is used for component name validation (dev only)
Object.defineProperty(app.config,'isNativeTag',{value:function value(tag){return isHTMLTag(tag)||isSVGTag(tag);},writable:false});}// dev only
function injectCompilerOptionsCheck(app){if(isRuntimeOnly()){var isCustomElement=app.config.isCustomElement;Object.defineProperty(app.config,'isCustomElement',{get:function get(){return isCustomElement;},set:function set(){warn$1('The `isCustomElement` config option is deprecated. Use '+'`compilerOptions.isCustomElement` instead.');}});var compilerOptions=app.config.compilerOptions;var msg='The `compilerOptions` config option is only respected when using '+'a build of Vue.js that includes the runtime compiler (aka "full build"). '+'Since you are using the runtime-only build, `compilerOptions` '+'must be passed to `@vue/compiler-dom` in the build setup instead.\n'+'- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n'+'- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n'+'- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(app.config,'compilerOptions',{get:function get(){warn$1(msg);return compilerOptions;},set:function set(){warn$1(msg);}});}}function normalizeContainer(container){if(isString(container)){var res=document.querySelector(container);if(process.env.NODE_ENV!=='production'&&!res){warn$1('Failed to mount app: mount target selector "'+container+'" returned null.');}return res;}if(process.env.NODE_ENV!=='production'&&window.ShadowRoot&&container instanceof window.ShadowRoot&&container.mode==='closed'){warn$1('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs');}return container;}var ssrDirectiveInitialized=false;/**
 * @internal
 */var initDirectivesForSSR=function initDirectivesForSSR(){if(!ssrDirectiveInitialized){ssrDirectiveInitialized=true;initVModelForSSR();initVShowForSSR();}};var runtimeDom=/*#__PURE__*/Object.freeze({__proto__:null,render:render,hydrate:hydrate,createApp:createApp,createSSRApp:createSSRApp,initDirectivesForSSR:initDirectivesForSSR,defineCustomElement:defineCustomElement,defineSSRCustomElement:defineSSRCustomElement,VueElement:VueElement,useCssModule:useCssModule,useCssVars:useCssVars,Transition:Transition,TransitionGroup:TransitionGroup,vModelText:vModelText,vModelCheckbox:vModelCheckbox,vModelRadio:vModelRadio,vModelSelect:vModelSelect,vModelDynamic:vModelDynamic,withModifiers:withModifiers,withKeys:withKeys,vShow:vShow,reactive:reactive,ref:ref,readonly:readonly,unref:unref,proxyRefs:proxyRefs,isRef:isRef,toRef:toRef,toRefs:toRefs,isProxy:isProxy,isReactive:isReactive,isReadonly:isReadonly,isShallow:isShallow,customRef:customRef,triggerRef:triggerRef,shallowRef:shallowRef,shallowReactive:shallowReactive,shallowReadonly:shallowReadonly,markRaw:markRaw,toRaw:toRaw,effect:effect,stop:stop,ReactiveEffect:ReactiveEffect,effectScope:effectScope,EffectScope:EffectScope,getCurrentScope:getCurrentScope,onScopeDispose:onScopeDispose,computed:computed$1,watch:watch,watchEffect:watchEffect,watchPostEffect:watchPostEffect,watchSyncEffect:watchSyncEffect,onBeforeMount:onBeforeMount,onMounted:onMounted,onBeforeUpdate:onBeforeUpdate,onUpdated:onUpdated,onBeforeUnmount:onBeforeUnmount,onUnmounted:onUnmounted,onActivated:onActivated,onDeactivated:onDeactivated,onRenderTracked:onRenderTracked,onRenderTriggered:onRenderTriggered,onErrorCaptured:onErrorCaptured,onServerPrefetch:onServerPrefetch,provide:provide,inject:inject,nextTick:nextTick,defineComponent:defineComponent,defineAsyncComponent:defineAsyncComponent,useAttrs:useAttrs,useSlots:useSlots,defineProps:defineProps,defineEmits:defineEmits,defineExpose:defineExpose,withDefaults:withDefaults,mergeDefaults:mergeDefaults,createPropsRestProxy:createPropsRestProxy,withAsyncContext:withAsyncContext,getCurrentInstance:getCurrentInstance,h:h,createVNode:createVNode,cloneVNode:cloneVNode,mergeProps:mergeProps,isVNode:isVNode,Fragment:Fragment,Text:Text,Comment:Comment,Static:Static,Teleport:Teleport,Suspense:Suspense,KeepAlive:KeepAlive,BaseTransition:BaseTransition,withDirectives:withDirectives,useSSRContext:useSSRContext,ssrContextKey:ssrContextKey,createRenderer:createRenderer,createHydrationRenderer:createHydrationRenderer,queuePostFlushCb:queuePostFlushCb,warn:warn$1,handleError:handleError,callWithErrorHandling:callWithErrorHandling,callWithAsyncErrorHandling:callWithAsyncErrorHandling,resolveComponent:resolveComponent,resolveDirective:resolveDirective,resolveDynamicComponent:resolveDynamicComponent,registerRuntimeCompiler:registerRuntimeCompiler,isRuntimeOnly:isRuntimeOnly,useTransitionState:useTransitionState,resolveTransitionHooks:resolveTransitionHooks,setTransitionHooks:setTransitionHooks,getTransitionRawChildren:getTransitionRawChildren,initCustomFormatter:initCustomFormatter,get devtools(){return devtools;},setDevtoolsHook:setDevtoolsHook,withCtx:withCtx,pushScopeId:pushScopeId,popScopeId:popScopeId,withScopeId:withScopeId,renderList:renderList,toHandlers:toHandlers,renderSlot:renderSlot,createSlots:createSlots,withMemo:withMemo,isMemoSame:isMemoSame,openBlock:openBlock,createBlock:createBlock,setBlockTracking:setBlockTracking,createTextVNode:createTextVNode,createCommentVNode:createCommentVNode,createStaticVNode:createStaticVNode,createElementVNode:createBaseVNode,createElementBlock:createElementBlock,guardReactiveProps:guardReactiveProps,toDisplayString:toDisplayString,camelize:camelize,capitalize:capitalize,toHandlerKey:toHandlerKey,normalizeProps:normalizeProps,normalizeClass:normalizeClass,normalizeStyle:normalizeStyle,transformVNodeArgs:transformVNodeArgs,version:version,ssrUtils:ssrUtils,resolveFilter:resolveFilter$1,compatUtils:compatUtils});function initDev(){{initCustomFormatter();}}// This entry exports the runtime only, and is built as
if(process.env.NODE_ENV!=='production'){initDev();}function wrappedCreateApp(){// @ts-ignore
var app=createApp.apply(undefined,arguments);if(compatUtils.isCompatEnabled("RENDER_FUNCTION"/* RENDER_FUNCTION */,null)){// register built-in components so that they can be resolved via strings
// in the legacy h() call. The __compat__ prefix is to ensure that v3 h()
// doesn't get affected.
app.component('__compat__transition',Transition);app.component('__compat__transition-group',TransitionGroup);app.component('__compat__keep-alive',KeepAlive);// built-in directives. No need for prefix since there's no render fn API
// for resolving directives via string in v3.
app._context.directives.show=vShow;app._context.directives.model=vModelDynamic;}return app;}function createCompatVue$1(){var Vue=compatUtils.createCompatVue(createApp,wrappedCreateApp);extend(Vue,runtimeDom);return Vue;}// This entry exports the runtime only, and is built as
var Vue=createCompatVue$1();Vue.compile=function(){if(process.env.NODE_ENV!=='production'){warn$1('Runtime compilation is not supported in this build of Vue.'+' Configure your bundler to alias "vue" to "@vue/compat/dist/vue.esm-bundler.js".'/* should not happen */);}};var configureCompat$1=Vue.configureCompat;

var VUE_COMPONENT_NAME = 'vuera-internal-component-name';

var wrapReactChildren = function wrapReactChildren(createElement, children) {
  return createElement('vuera-internal-react-wrapper', {
    props: {
      component: function component() {
        return React.createElement(
          'div',
          null,
          children
        );
      }
    }
  });
};

var VueContainer = function (_React$Component) {
  inherits(VueContainer, _React$Component);

  function VueContainer(props) {
    classCallCheck(this, VueContainer);

    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */
    var _this = possibleConstructorReturn(this, (VueContainer.__proto__ || Object.getPrototypeOf(VueContainer)).call(this, props));

    _this.currentVueComponent = props.component;

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    var createVueInstance = _this.createVueInstance;
    var self = _this;
    _this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent);
    };
    return _this;
  }

  createClass(VueContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var component = nextProps.component,
          props = objectWithoutProperties(nextProps, ['component']);


      if (this.currentVueComponent !== component) {
        this.updateVueComponent(this.props.component, component);
      }
      /**
       * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
       * function for deep object comparison. I don't know if this hurts performance a lot, maybe
       * we do need to compare those objects.
       */
      Object.assign(this.vueInstance.$data, props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.vueInstance.$destroy();
    }

    /**
     * Creates and mounts the Vue instance.
     * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
     * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
     * pass VueContainer's binding explicitly.
     * @param {HTMLElement} targetElement - element to attact the Vue instance to
     * @param {ReactInstance} reactThisBinding - current instance of VueContainer
     */

  }, {
    key: 'createVueInstance',
    value: function createVueInstance(targetElement, reactThisBinding) {
      var _components;

      var _reactThisBinding$pro = reactThisBinding.props,
          component = _reactThisBinding$pro.component,
          on = _reactThisBinding$pro.on,
          props = objectWithoutProperties(_reactThisBinding$pro, ['component', 'on']);

      // `this` refers to Vue instance in the constructor

      reactThisBinding.vueInstance = new Vue(_extends({
        el: targetElement,
        data: props
      }, config.vueInstanceOptions, {
        render: function render$$1(createElement) {
          return createElement(VUE_COMPONENT_NAME, {
            props: this.$data,
            on: on
          }, [wrapReactChildren(createElement, this.children)]);
        },

        components: (_components = {}, defineProperty(_components, VUE_COMPONENT_NAME, component), defineProperty(_components, 'vuera-internal-react-wrapper', ReactWrapper), _components)
      }));
    }
  }, {
    key: 'updateVueComponent',
    value: function updateVueComponent(prevComponent, nextComponent) {
      this.currentVueComponent = nextComponent;

      /**
       * Replace the component in the Vue instance and update it.
       */
      this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
      this.vueInstance.$forceUpdate();
    }
  }, {
    key: 'render',
    value: function render$$1() {
      return React.createElement('div', { ref: this.createVueInstance });
    }
  }]);
  return VueContainer;
}(React.Component);

var makeReactContainer = function makeReactContainer(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(ReactInVue, _React$Component);

    function ReactInVue(props) {
      classCallCheck(this, ReactInVue);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      var _this = possibleConstructorReturn(this, (ReactInVue.__proto__ || Object.getPrototypeOf(ReactInVue)).call(this, props));

      _this.state = _extends({}, props);
      return _this;
    }

    createClass(ReactInVue, [{
      key: 'wrapVueChildren',
      value: function wrapVueChildren(children) {
        return {
          render: function render(createElement) {
            return createElement('div', children);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            children = _state.children,
            _invoker = _state[''],
            rest = objectWithoutProperties(_state, ['children', '']);

        var wrappedChildren = this.wrapVueChildren(children);

        return React.createElement(
          Component,
          rest,
          children && React.createElement(VueContainer, { component: wrappedChildren })
        );
      }
    }]);
    return ReactInVue;
  }(React.Component), _class.displayName = 'ReactInVue' + (Component.displayName || Component.name || 'Component'), _temp;
};

var ReactWrapper = {
  props: ['component', 'passedProps'],
  render: function render(createElement) {
    return createElement('div', { ref: 'react' });
  },

  methods: {
    mountReactComponent: function mountReactComponent(component) {
      var _this2 = this;

      var Component = makeReactContainer(component);
      var children = this.$slots.default !== undefined ? { children: this.$slots.default } : {};
      ReactDOM.render(React.createElement(Component, _extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
        ref: function ref(_ref) {
          return _this2.reactComponentRef = _ref;
        }
      })), this.$refs.react);
    }
  },
  mounted: function mounted() {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy: function beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },
  updated: function updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({ children: this.$slots.default });
    } else {
      this.reactComponentRef.setState({ children: null });
    }
  },

  inheritAttrs: false,
  watch: {
    $attrs: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$attrs));
      },

      deep: true
    },
    '$props.component': {
      handler: function handler(newValue) {
        this.mountReactComponent(newValue);
      }
    },
    $listeners: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$listeners));
      },

      deep: true
    },
    '$props.passedProps': {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$props.passedProps));
      },

      deep: true
    }
  }
};

function isReactComponent(component) {
  if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && !isReactForwardReference(component)) {
    return false;
  }

  return !(typeof component === 'function' && component.prototype && (component.prototype.constructor.super && component.prototype.constructor.super.isVue || component.prototype instanceof Vue));
}

function isReactForwardReference(component) {
  return component.$$typeof && component.$$typeof.toString() === 'Symbol(react.forward_ref)';
}

function VueResolver$$1(component) {
  return {
    components: { ReactWrapper: ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    render: function render(createElement) {
      return createElement('react-wrapper', {
        props: {
          component: component,
          passedProps: this.$props.passedProps
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }
  };
}

/**
 * This mixin automatically wraps all React components into Vue.
 */
var VuePlugin = {
  install: function install(Vue, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    var originalComponentsMergeStrategy = Vue.config.optionMergeStrategies.components;
    Vue.config.optionMergeStrategies.components = function (parent) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var mergedValue = originalComponentsMergeStrategy.apply(undefined, [parent].concat(args));
      var wrappedComponents = mergedValue ? Object.entries(mergedValue).reduce(function (acc, _ref) {
        var _ref2 = slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return _extends({}, acc, defineProperty({}, k, isReactComponent(v) ? VueResolver$$1(v) : v));
      }, {}) : mergedValue;
      return Object.assign(mergedValue, wrappedComponents);
    };
    Vue.prototype.constructor.isVue = true;
  }
};

/* eslint-disable prefer-object-spread/prefer-object-spread */
function ReactResolver$$1(component) {
  return isReactComponent(component) ? component : function (props) {
    return React.createElement(VueContainer, _extends({}, props, { component: component }));
  };
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
function babelReactResolver$$1(component, props, children) {
  return isReactComponent(component) ? React.createElement(component, props, children) : React.createElement(VueContainer, Object.assign({ component: component }, props), children);
}

function defaultConfig() {
  return {
    vueInstanceOptions: {}
  };
}

var config = defaultConfig();

exports.ReactWrapper = ReactWrapper;
exports.VueWrapper = VueContainer;
exports.__vueraReactResolver = babelReactResolver$$1;
exports.VuePlugin = VuePlugin;
exports.VueInReact = ReactResolver$$1;
exports.ReactInVue = VueResolver$$1;
exports.config = config;
