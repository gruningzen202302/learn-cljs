goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16505 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16505(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16506 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16506(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16252 = coll;
var G__16253 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16252,G__16253) : shadow.dom.lazy_native_coll_seq.call(null,G__16252,G__16253));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16256 = arguments.length;
switch (G__16256) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16258 = arguments.length;
switch (G__16258) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16260 = arguments.length;
switch (G__16260) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16262 = arguments.length;
switch (G__16262) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16264 = arguments.length;
switch (G__16264) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16266 = arguments.length;
switch (G__16266) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16267){if((e16267 instanceof Object)){
var e = e16267;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16267;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16268 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16269 = null;
var count__16270 = (0);
var i__16271 = (0);
while(true){
if((i__16271 < count__16270)){
var el = chunk__16269.cljs$core$IIndexed$_nth$arity$2(null,i__16271);
var handler_16513__$1 = ((function (seq__16268,chunk__16269,count__16270,i__16271,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16268,chunk__16269,count__16270,i__16271,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16513__$1);


var G__16514 = seq__16268;
var G__16515 = chunk__16269;
var G__16516 = count__16270;
var G__16517 = (i__16271 + (1));
seq__16268 = G__16514;
chunk__16269 = G__16515;
count__16270 = G__16516;
i__16271 = G__16517;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16268);
if(temp__5804__auto__){
var seq__16268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16268__$1);
var G__16518 = cljs.core.chunk_rest(seq__16268__$1);
var G__16519 = c__5568__auto__;
var G__16520 = cljs.core.count(c__5568__auto__);
var G__16521 = (0);
seq__16268 = G__16518;
chunk__16269 = G__16519;
count__16270 = G__16520;
i__16271 = G__16521;
continue;
} else {
var el = cljs.core.first(seq__16268__$1);
var handler_16522__$1 = ((function (seq__16268,chunk__16269,count__16270,i__16271,el,seq__16268__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16268,chunk__16269,count__16270,i__16271,el,seq__16268__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16522__$1);


var G__16523 = cljs.core.next(seq__16268__$1);
var G__16524 = null;
var G__16525 = (0);
var G__16526 = (0);
seq__16268 = G__16523;
chunk__16269 = G__16524;
count__16270 = G__16525;
i__16271 = G__16526;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16273 = arguments.length;
switch (G__16273) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16274 = cljs.core.seq(events);
var chunk__16275 = null;
var count__16276 = (0);
var i__16277 = (0);
while(true){
if((i__16277 < count__16276)){
var vec__16284 = chunk__16275.cljs$core$IIndexed$_nth$arity$2(null,i__16277);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16528 = seq__16274;
var G__16529 = chunk__16275;
var G__16530 = count__16276;
var G__16531 = (i__16277 + (1));
seq__16274 = G__16528;
chunk__16275 = G__16529;
count__16276 = G__16530;
i__16277 = G__16531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16274);
if(temp__5804__auto__){
var seq__16274__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16274__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16274__$1);
var G__16532 = cljs.core.chunk_rest(seq__16274__$1);
var G__16533 = c__5568__auto__;
var G__16534 = cljs.core.count(c__5568__auto__);
var G__16535 = (0);
seq__16274 = G__16532;
chunk__16275 = G__16533;
count__16276 = G__16534;
i__16277 = G__16535;
continue;
} else {
var vec__16287 = cljs.core.first(seq__16274__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16536 = cljs.core.next(seq__16274__$1);
var G__16537 = null;
var G__16538 = (0);
var G__16539 = (0);
seq__16274 = G__16536;
chunk__16275 = G__16537;
count__16276 = G__16538;
i__16277 = G__16539;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16290 = cljs.core.seq(styles);
var chunk__16291 = null;
var count__16292 = (0);
var i__16293 = (0);
while(true){
if((i__16293 < count__16292)){
var vec__16300 = chunk__16291.cljs$core$IIndexed$_nth$arity$2(null,i__16293);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16540 = seq__16290;
var G__16541 = chunk__16291;
var G__16542 = count__16292;
var G__16543 = (i__16293 + (1));
seq__16290 = G__16540;
chunk__16291 = G__16541;
count__16292 = G__16542;
i__16293 = G__16543;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16290);
if(temp__5804__auto__){
var seq__16290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16290__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16290__$1);
var G__16544 = cljs.core.chunk_rest(seq__16290__$1);
var G__16545 = c__5568__auto__;
var G__16546 = cljs.core.count(c__5568__auto__);
var G__16547 = (0);
seq__16290 = G__16544;
chunk__16291 = G__16545;
count__16292 = G__16546;
i__16293 = G__16547;
continue;
} else {
var vec__16303 = cljs.core.first(seq__16290__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16303,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16548 = cljs.core.next(seq__16290__$1);
var G__16549 = null;
var G__16550 = (0);
var G__16551 = (0);
seq__16290 = G__16548;
chunk__16291 = G__16549;
count__16292 = G__16550;
i__16293 = G__16551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16306_16552 = key;
var G__16306_16553__$1 = (((G__16306_16552 instanceof cljs.core.Keyword))?G__16306_16552.fqn:null);
switch (G__16306_16553__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16555 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16555,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16555,"aria-");
}
})())){
el.setAttribute(ks_16555,value);
} else {
(el[ks_16555] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16307){
var map__16308 = p__16307;
var map__16308__$1 = cljs.core.__destructure_map(map__16308);
var props = map__16308__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16308__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16309 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16309,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16309,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16309,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16312 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16312,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16312;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16314 = arguments.length;
switch (G__16314) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16315){
var vec__16316 = p__16315;
var seq__16317 = cljs.core.seq(vec__16316);
var first__16318 = cljs.core.first(seq__16317);
var seq__16317__$1 = cljs.core.next(seq__16317);
var nn = first__16318;
var first__16318__$1 = cljs.core.first(seq__16317__$1);
var seq__16317__$2 = cljs.core.next(seq__16317__$1);
var np = first__16318__$1;
var nc = seq__16317__$2;
var node = vec__16316;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16319 = nn;
var G__16320 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16319,G__16320) : create_fn.call(null,G__16319,G__16320));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16321 = nn;
var G__16322 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16321,G__16322) : create_fn.call(null,G__16321,G__16322));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16323 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(1),null);
var seq__16326_16557 = cljs.core.seq(node_children);
var chunk__16327_16558 = null;
var count__16328_16559 = (0);
var i__16329_16560 = (0);
while(true){
if((i__16329_16560 < count__16328_16559)){
var child_struct_16561 = chunk__16327_16558.cljs$core$IIndexed$_nth$arity$2(null,i__16329_16560);
var children_16562 = shadow.dom.dom_node(child_struct_16561);
if(cljs.core.seq_QMARK_(children_16562)){
var seq__16342_16563 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16562));
var chunk__16344_16564 = null;
var count__16345_16565 = (0);
var i__16346_16566 = (0);
while(true){
if((i__16346_16566 < count__16345_16565)){
var child_16567 = chunk__16344_16564.cljs$core$IIndexed$_nth$arity$2(null,i__16346_16566);
if(cljs.core.truth_(child_16567)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16567);


var G__16568 = seq__16342_16563;
var G__16569 = chunk__16344_16564;
var G__16570 = count__16345_16565;
var G__16571 = (i__16346_16566 + (1));
seq__16342_16563 = G__16568;
chunk__16344_16564 = G__16569;
count__16345_16565 = G__16570;
i__16346_16566 = G__16571;
continue;
} else {
var G__16572 = seq__16342_16563;
var G__16573 = chunk__16344_16564;
var G__16574 = count__16345_16565;
var G__16575 = (i__16346_16566 + (1));
seq__16342_16563 = G__16572;
chunk__16344_16564 = G__16573;
count__16345_16565 = G__16574;
i__16346_16566 = G__16575;
continue;
}
} else {
var temp__5804__auto___16576 = cljs.core.seq(seq__16342_16563);
if(temp__5804__auto___16576){
var seq__16342_16577__$1 = temp__5804__auto___16576;
if(cljs.core.chunked_seq_QMARK_(seq__16342_16577__$1)){
var c__5568__auto___16578 = cljs.core.chunk_first(seq__16342_16577__$1);
var G__16579 = cljs.core.chunk_rest(seq__16342_16577__$1);
var G__16580 = c__5568__auto___16578;
var G__16581 = cljs.core.count(c__5568__auto___16578);
var G__16582 = (0);
seq__16342_16563 = G__16579;
chunk__16344_16564 = G__16580;
count__16345_16565 = G__16581;
i__16346_16566 = G__16582;
continue;
} else {
var child_16583 = cljs.core.first(seq__16342_16577__$1);
if(cljs.core.truth_(child_16583)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16583);


var G__16584 = cljs.core.next(seq__16342_16577__$1);
var G__16585 = null;
var G__16586 = (0);
var G__16587 = (0);
seq__16342_16563 = G__16584;
chunk__16344_16564 = G__16585;
count__16345_16565 = G__16586;
i__16346_16566 = G__16587;
continue;
} else {
var G__16588 = cljs.core.next(seq__16342_16577__$1);
var G__16589 = null;
var G__16590 = (0);
var G__16591 = (0);
seq__16342_16563 = G__16588;
chunk__16344_16564 = G__16589;
count__16345_16565 = G__16590;
i__16346_16566 = G__16591;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16562);
}


var G__16592 = seq__16326_16557;
var G__16593 = chunk__16327_16558;
var G__16594 = count__16328_16559;
var G__16595 = (i__16329_16560 + (1));
seq__16326_16557 = G__16592;
chunk__16327_16558 = G__16593;
count__16328_16559 = G__16594;
i__16329_16560 = G__16595;
continue;
} else {
var temp__5804__auto___16596 = cljs.core.seq(seq__16326_16557);
if(temp__5804__auto___16596){
var seq__16326_16597__$1 = temp__5804__auto___16596;
if(cljs.core.chunked_seq_QMARK_(seq__16326_16597__$1)){
var c__5568__auto___16598 = cljs.core.chunk_first(seq__16326_16597__$1);
var G__16599 = cljs.core.chunk_rest(seq__16326_16597__$1);
var G__16600 = c__5568__auto___16598;
var G__16601 = cljs.core.count(c__5568__auto___16598);
var G__16602 = (0);
seq__16326_16557 = G__16599;
chunk__16327_16558 = G__16600;
count__16328_16559 = G__16601;
i__16329_16560 = G__16602;
continue;
} else {
var child_struct_16603 = cljs.core.first(seq__16326_16597__$1);
var children_16604 = shadow.dom.dom_node(child_struct_16603);
if(cljs.core.seq_QMARK_(children_16604)){
var seq__16348_16605 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16604));
var chunk__16350_16606 = null;
var count__16351_16607 = (0);
var i__16352_16608 = (0);
while(true){
if((i__16352_16608 < count__16351_16607)){
var child_16609 = chunk__16350_16606.cljs$core$IIndexed$_nth$arity$2(null,i__16352_16608);
if(cljs.core.truth_(child_16609)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16609);


var G__16610 = seq__16348_16605;
var G__16611 = chunk__16350_16606;
var G__16612 = count__16351_16607;
var G__16613 = (i__16352_16608 + (1));
seq__16348_16605 = G__16610;
chunk__16350_16606 = G__16611;
count__16351_16607 = G__16612;
i__16352_16608 = G__16613;
continue;
} else {
var G__16614 = seq__16348_16605;
var G__16615 = chunk__16350_16606;
var G__16616 = count__16351_16607;
var G__16617 = (i__16352_16608 + (1));
seq__16348_16605 = G__16614;
chunk__16350_16606 = G__16615;
count__16351_16607 = G__16616;
i__16352_16608 = G__16617;
continue;
}
} else {
var temp__5804__auto___16618__$1 = cljs.core.seq(seq__16348_16605);
if(temp__5804__auto___16618__$1){
var seq__16348_16619__$1 = temp__5804__auto___16618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16348_16619__$1)){
var c__5568__auto___16620 = cljs.core.chunk_first(seq__16348_16619__$1);
var G__16621 = cljs.core.chunk_rest(seq__16348_16619__$1);
var G__16622 = c__5568__auto___16620;
var G__16623 = cljs.core.count(c__5568__auto___16620);
var G__16624 = (0);
seq__16348_16605 = G__16621;
chunk__16350_16606 = G__16622;
count__16351_16607 = G__16623;
i__16352_16608 = G__16624;
continue;
} else {
var child_16625 = cljs.core.first(seq__16348_16619__$1);
if(cljs.core.truth_(child_16625)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16625);


var G__16626 = cljs.core.next(seq__16348_16619__$1);
var G__16627 = null;
var G__16628 = (0);
var G__16629 = (0);
seq__16348_16605 = G__16626;
chunk__16350_16606 = G__16627;
count__16351_16607 = G__16628;
i__16352_16608 = G__16629;
continue;
} else {
var G__16630 = cljs.core.next(seq__16348_16619__$1);
var G__16631 = null;
var G__16632 = (0);
var G__16633 = (0);
seq__16348_16605 = G__16630;
chunk__16350_16606 = G__16631;
count__16351_16607 = G__16632;
i__16352_16608 = G__16633;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16604);
}


var G__16634 = cljs.core.next(seq__16326_16597__$1);
var G__16635 = null;
var G__16636 = (0);
var G__16637 = (0);
seq__16326_16557 = G__16634;
chunk__16327_16558 = G__16635;
count__16328_16559 = G__16636;
i__16329_16560 = G__16637;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16355 = cljs.core.seq(node);
var chunk__16356 = null;
var count__16357 = (0);
var i__16358 = (0);
while(true){
if((i__16358 < count__16357)){
var n = chunk__16356.cljs$core$IIndexed$_nth$arity$2(null,i__16358);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16638 = seq__16355;
var G__16639 = chunk__16356;
var G__16640 = count__16357;
var G__16641 = (i__16358 + (1));
seq__16355 = G__16638;
chunk__16356 = G__16639;
count__16357 = G__16640;
i__16358 = G__16641;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16355);
if(temp__5804__auto__){
var seq__16355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16355__$1);
var G__16642 = cljs.core.chunk_rest(seq__16355__$1);
var G__16643 = c__5568__auto__;
var G__16644 = cljs.core.count(c__5568__auto__);
var G__16645 = (0);
seq__16355 = G__16642;
chunk__16356 = G__16643;
count__16357 = G__16644;
i__16358 = G__16645;
continue;
} else {
var n = cljs.core.first(seq__16355__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16646 = cljs.core.next(seq__16355__$1);
var G__16647 = null;
var G__16648 = (0);
var G__16649 = (0);
seq__16355 = G__16646;
chunk__16356 = G__16647;
count__16357 = G__16648;
i__16358 = G__16649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16360 = arguments.length;
switch (G__16360) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16362 = arguments.length;
switch (G__16362) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16364 = arguments.length;
switch (G__16364) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16653 = arguments.length;
var i__5770__auto___16654 = (0);
while(true){
if((i__5770__auto___16654 < len__5769__auto___16653)){
args__5775__auto__.push((arguments[i__5770__auto___16654]));

var G__16655 = (i__5770__auto___16654 + (1));
i__5770__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16366_16656 = cljs.core.seq(nodes);
var chunk__16367_16657 = null;
var count__16368_16658 = (0);
var i__16369_16659 = (0);
while(true){
if((i__16369_16659 < count__16368_16658)){
var node_16660 = chunk__16367_16657.cljs$core$IIndexed$_nth$arity$2(null,i__16369_16659);
fragment.appendChild(shadow.dom._to_dom(node_16660));


var G__16661 = seq__16366_16656;
var G__16662 = chunk__16367_16657;
var G__16663 = count__16368_16658;
var G__16664 = (i__16369_16659 + (1));
seq__16366_16656 = G__16661;
chunk__16367_16657 = G__16662;
count__16368_16658 = G__16663;
i__16369_16659 = G__16664;
continue;
} else {
var temp__5804__auto___16665 = cljs.core.seq(seq__16366_16656);
if(temp__5804__auto___16665){
var seq__16366_16666__$1 = temp__5804__auto___16665;
if(cljs.core.chunked_seq_QMARK_(seq__16366_16666__$1)){
var c__5568__auto___16667 = cljs.core.chunk_first(seq__16366_16666__$1);
var G__16668 = cljs.core.chunk_rest(seq__16366_16666__$1);
var G__16669 = c__5568__auto___16667;
var G__16670 = cljs.core.count(c__5568__auto___16667);
var G__16671 = (0);
seq__16366_16656 = G__16668;
chunk__16367_16657 = G__16669;
count__16368_16658 = G__16670;
i__16369_16659 = G__16671;
continue;
} else {
var node_16672 = cljs.core.first(seq__16366_16666__$1);
fragment.appendChild(shadow.dom._to_dom(node_16672));


var G__16673 = cljs.core.next(seq__16366_16666__$1);
var G__16674 = null;
var G__16675 = (0);
var G__16676 = (0);
seq__16366_16656 = G__16673;
chunk__16367_16657 = G__16674;
count__16368_16658 = G__16675;
i__16369_16659 = G__16676;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16365){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16365));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16370_16677 = cljs.core.seq(scripts);
var chunk__16371_16678 = null;
var count__16372_16679 = (0);
var i__16373_16680 = (0);
while(true){
if((i__16373_16680 < count__16372_16679)){
var vec__16380_16681 = chunk__16371_16678.cljs$core$IIndexed$_nth$arity$2(null,i__16373_16680);
var script_tag_16682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380_16681,(0),null);
var script_body_16683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380_16681,(1),null);
eval(script_body_16683);


var G__16684 = seq__16370_16677;
var G__16685 = chunk__16371_16678;
var G__16686 = count__16372_16679;
var G__16687 = (i__16373_16680 + (1));
seq__16370_16677 = G__16684;
chunk__16371_16678 = G__16685;
count__16372_16679 = G__16686;
i__16373_16680 = G__16687;
continue;
} else {
var temp__5804__auto___16688 = cljs.core.seq(seq__16370_16677);
if(temp__5804__auto___16688){
var seq__16370_16689__$1 = temp__5804__auto___16688;
if(cljs.core.chunked_seq_QMARK_(seq__16370_16689__$1)){
var c__5568__auto___16690 = cljs.core.chunk_first(seq__16370_16689__$1);
var G__16691 = cljs.core.chunk_rest(seq__16370_16689__$1);
var G__16692 = c__5568__auto___16690;
var G__16693 = cljs.core.count(c__5568__auto___16690);
var G__16694 = (0);
seq__16370_16677 = G__16691;
chunk__16371_16678 = G__16692;
count__16372_16679 = G__16693;
i__16373_16680 = G__16694;
continue;
} else {
var vec__16383_16695 = cljs.core.first(seq__16370_16689__$1);
var script_tag_16696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383_16695,(0),null);
var script_body_16697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383_16695,(1),null);
eval(script_body_16697);


var G__16698 = cljs.core.next(seq__16370_16689__$1);
var G__16699 = null;
var G__16700 = (0);
var G__16701 = (0);
seq__16370_16677 = G__16698;
chunk__16371_16678 = G__16699;
count__16372_16679 = G__16700;
i__16373_16680 = G__16701;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16386){
var vec__16387 = p__16386;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16391 = arguments.length;
switch (G__16391) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16392 = cljs.core.seq(style_keys);
var chunk__16393 = null;
var count__16394 = (0);
var i__16395 = (0);
while(true){
if((i__16395 < count__16394)){
var it = chunk__16393.cljs$core$IIndexed$_nth$arity$2(null,i__16395);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16703 = seq__16392;
var G__16704 = chunk__16393;
var G__16705 = count__16394;
var G__16706 = (i__16395 + (1));
seq__16392 = G__16703;
chunk__16393 = G__16704;
count__16394 = G__16705;
i__16395 = G__16706;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16392);
if(temp__5804__auto__){
var seq__16392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16392__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16392__$1);
var G__16707 = cljs.core.chunk_rest(seq__16392__$1);
var G__16708 = c__5568__auto__;
var G__16709 = cljs.core.count(c__5568__auto__);
var G__16710 = (0);
seq__16392 = G__16707;
chunk__16393 = G__16708;
count__16394 = G__16709;
i__16395 = G__16710;
continue;
} else {
var it = cljs.core.first(seq__16392__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16711 = cljs.core.next(seq__16392__$1);
var G__16712 = null;
var G__16713 = (0);
var G__16714 = (0);
seq__16392 = G__16711;
chunk__16393 = G__16712;
count__16394 = G__16713;
i__16395 = G__16714;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16397,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16401 = k16397;
var G__16401__$1 = (((G__16401 instanceof cljs.core.Keyword))?G__16401.fqn:null);
switch (G__16401__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16397,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16402){
var vec__16403 = p__16402;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16396){
var self__ = this;
var G__16396__$1 = this;
return (new cljs.core.RecordIter((0),G__16396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16398,other16399){
var self__ = this;
var this16398__$1 = this;
return (((!((other16399 == null)))) && ((((this16398__$1.constructor === other16399.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16398__$1.x,other16399.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16398__$1.y,other16399.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16398__$1.__extmap,other16399.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16397){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16406 = k16397;
var G__16406__$1 = (((G__16406 instanceof cljs.core.Keyword))?G__16406.fqn:null);
switch (G__16406__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16397);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16396){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16407 = cljs.core.keyword_identical_QMARK_;
var expr__16408 = k__5352__auto__;
if(cljs.core.truth_((pred__16407.cljs$core$IFn$_invoke$arity$2 ? pred__16407.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16408) : pred__16407.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16408)))){
return (new shadow.dom.Coordinate(G__16396,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16407.cljs$core$IFn$_invoke$arity$2 ? pred__16407.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16408) : pred__16407.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16408)))){
return (new shadow.dom.Coordinate(self__.x,G__16396,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16396),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16396){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16396,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16400){
var extmap__5385__auto__ = (function (){var G__16410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16400,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16400)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16410);
} else {
return G__16410;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16400),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16400),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16412,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16416 = k16412;
var G__16416__$1 = (((G__16416 instanceof cljs.core.Keyword))?G__16416.fqn:null);
switch (G__16416__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16412,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16417){
var vec__16418 = p__16417;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16411){
var self__ = this;
var G__16411__$1 = this;
return (new cljs.core.RecordIter((0),G__16411__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16413,other16414){
var self__ = this;
var this16413__$1 = this;
return (((!((other16414 == null)))) && ((((this16413__$1.constructor === other16414.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16413__$1.w,other16414.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16413__$1.h,other16414.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16413__$1.__extmap,other16414.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16412){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16421 = k16412;
var G__16421__$1 = (((G__16421 instanceof cljs.core.Keyword))?G__16421.fqn:null);
switch (G__16421__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16412);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16411){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16422 = cljs.core.keyword_identical_QMARK_;
var expr__16423 = k__5352__auto__;
if(cljs.core.truth_((pred__16422.cljs$core$IFn$_invoke$arity$2 ? pred__16422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16423) : pred__16422.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16423)))){
return (new shadow.dom.Size(G__16411,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16422.cljs$core$IFn$_invoke$arity$2 ? pred__16422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16423) : pred__16422.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16423)))){
return (new shadow.dom.Size(self__.w,G__16411,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16411),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16411){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16411,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16415){
var extmap__5385__auto__ = (function (){var G__16425 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16415,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16415)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16425);
} else {
return G__16425;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16415),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16415),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16719 = (i + (1));
var G__16720 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16719;
ret = G__16720;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16430){
var vec__16431 = p__16430;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16435 = arguments.length;
switch (G__16435) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16722 = ps;
var G__16723 = (i + (1));
el__$1 = G__16722;
i = G__16723;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16436 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16439_16724 = cljs.core.seq(props);
var chunk__16440_16725 = null;
var count__16441_16726 = (0);
var i__16442_16727 = (0);
while(true){
if((i__16442_16727 < count__16441_16726)){
var vec__16449_16728 = chunk__16440_16725.cljs$core$IIndexed$_nth$arity$2(null,i__16442_16727);
var k_16729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16449_16728,(0),null);
var v_16730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16449_16728,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16729);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16729),v_16730);


var G__16731 = seq__16439_16724;
var G__16732 = chunk__16440_16725;
var G__16733 = count__16441_16726;
var G__16734 = (i__16442_16727 + (1));
seq__16439_16724 = G__16731;
chunk__16440_16725 = G__16732;
count__16441_16726 = G__16733;
i__16442_16727 = G__16734;
continue;
} else {
var temp__5804__auto___16735 = cljs.core.seq(seq__16439_16724);
if(temp__5804__auto___16735){
var seq__16439_16736__$1 = temp__5804__auto___16735;
if(cljs.core.chunked_seq_QMARK_(seq__16439_16736__$1)){
var c__5568__auto___16737 = cljs.core.chunk_first(seq__16439_16736__$1);
var G__16738 = cljs.core.chunk_rest(seq__16439_16736__$1);
var G__16739 = c__5568__auto___16737;
var G__16740 = cljs.core.count(c__5568__auto___16737);
var G__16741 = (0);
seq__16439_16724 = G__16738;
chunk__16440_16725 = G__16739;
count__16441_16726 = G__16740;
i__16442_16727 = G__16741;
continue;
} else {
var vec__16452_16742 = cljs.core.first(seq__16439_16736__$1);
var k_16743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16452_16742,(0),null);
var v_16744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16452_16742,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16743);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16743),v_16744);


var G__16745 = cljs.core.next(seq__16439_16736__$1);
var G__16746 = null;
var G__16747 = (0);
var G__16748 = (0);
seq__16439_16724 = G__16745;
chunk__16440_16725 = G__16746;
count__16441_16726 = G__16747;
i__16442_16727 = G__16748;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16456 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456,(1),null);
var seq__16459_16749 = cljs.core.seq(node_children);
var chunk__16461_16750 = null;
var count__16462_16751 = (0);
var i__16463_16752 = (0);
while(true){
if((i__16463_16752 < count__16462_16751)){
var child_struct_16753 = chunk__16461_16750.cljs$core$IIndexed$_nth$arity$2(null,i__16463_16752);
if((!((child_struct_16753 == null)))){
if(typeof child_struct_16753 === 'string'){
var text_16754 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16754),child_struct_16753].join(''));
} else {
var children_16755 = shadow.dom.svg_node(child_struct_16753);
if(cljs.core.seq_QMARK_(children_16755)){
var seq__16477_16756 = cljs.core.seq(children_16755);
var chunk__16479_16757 = null;
var count__16480_16758 = (0);
var i__16481_16759 = (0);
while(true){
if((i__16481_16759 < count__16480_16758)){
var child_16760 = chunk__16479_16757.cljs$core$IIndexed$_nth$arity$2(null,i__16481_16759);
if(cljs.core.truth_(child_16760)){
node.appendChild(child_16760);


var G__16761 = seq__16477_16756;
var G__16762 = chunk__16479_16757;
var G__16763 = count__16480_16758;
var G__16764 = (i__16481_16759 + (1));
seq__16477_16756 = G__16761;
chunk__16479_16757 = G__16762;
count__16480_16758 = G__16763;
i__16481_16759 = G__16764;
continue;
} else {
var G__16765 = seq__16477_16756;
var G__16766 = chunk__16479_16757;
var G__16767 = count__16480_16758;
var G__16768 = (i__16481_16759 + (1));
seq__16477_16756 = G__16765;
chunk__16479_16757 = G__16766;
count__16480_16758 = G__16767;
i__16481_16759 = G__16768;
continue;
}
} else {
var temp__5804__auto___16769 = cljs.core.seq(seq__16477_16756);
if(temp__5804__auto___16769){
var seq__16477_16770__$1 = temp__5804__auto___16769;
if(cljs.core.chunked_seq_QMARK_(seq__16477_16770__$1)){
var c__5568__auto___16771 = cljs.core.chunk_first(seq__16477_16770__$1);
var G__16772 = cljs.core.chunk_rest(seq__16477_16770__$1);
var G__16773 = c__5568__auto___16771;
var G__16774 = cljs.core.count(c__5568__auto___16771);
var G__16775 = (0);
seq__16477_16756 = G__16772;
chunk__16479_16757 = G__16773;
count__16480_16758 = G__16774;
i__16481_16759 = G__16775;
continue;
} else {
var child_16776 = cljs.core.first(seq__16477_16770__$1);
if(cljs.core.truth_(child_16776)){
node.appendChild(child_16776);


var G__16777 = cljs.core.next(seq__16477_16770__$1);
var G__16778 = null;
var G__16779 = (0);
var G__16780 = (0);
seq__16477_16756 = G__16777;
chunk__16479_16757 = G__16778;
count__16480_16758 = G__16779;
i__16481_16759 = G__16780;
continue;
} else {
var G__16781 = cljs.core.next(seq__16477_16770__$1);
var G__16782 = null;
var G__16783 = (0);
var G__16784 = (0);
seq__16477_16756 = G__16781;
chunk__16479_16757 = G__16782;
count__16480_16758 = G__16783;
i__16481_16759 = G__16784;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16755);
}
}


var G__16785 = seq__16459_16749;
var G__16786 = chunk__16461_16750;
var G__16787 = count__16462_16751;
var G__16788 = (i__16463_16752 + (1));
seq__16459_16749 = G__16785;
chunk__16461_16750 = G__16786;
count__16462_16751 = G__16787;
i__16463_16752 = G__16788;
continue;
} else {
var G__16789 = seq__16459_16749;
var G__16790 = chunk__16461_16750;
var G__16791 = count__16462_16751;
var G__16792 = (i__16463_16752 + (1));
seq__16459_16749 = G__16789;
chunk__16461_16750 = G__16790;
count__16462_16751 = G__16791;
i__16463_16752 = G__16792;
continue;
}
} else {
var temp__5804__auto___16793 = cljs.core.seq(seq__16459_16749);
if(temp__5804__auto___16793){
var seq__16459_16794__$1 = temp__5804__auto___16793;
if(cljs.core.chunked_seq_QMARK_(seq__16459_16794__$1)){
var c__5568__auto___16795 = cljs.core.chunk_first(seq__16459_16794__$1);
var G__16796 = cljs.core.chunk_rest(seq__16459_16794__$1);
var G__16797 = c__5568__auto___16795;
var G__16798 = cljs.core.count(c__5568__auto___16795);
var G__16799 = (0);
seq__16459_16749 = G__16796;
chunk__16461_16750 = G__16797;
count__16462_16751 = G__16798;
i__16463_16752 = G__16799;
continue;
} else {
var child_struct_16800 = cljs.core.first(seq__16459_16794__$1);
if((!((child_struct_16800 == null)))){
if(typeof child_struct_16800 === 'string'){
var text_16801 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16801),child_struct_16800].join(''));
} else {
var children_16802 = shadow.dom.svg_node(child_struct_16800);
if(cljs.core.seq_QMARK_(children_16802)){
var seq__16483_16803 = cljs.core.seq(children_16802);
var chunk__16485_16804 = null;
var count__16486_16805 = (0);
var i__16487_16806 = (0);
while(true){
if((i__16487_16806 < count__16486_16805)){
var child_16807 = chunk__16485_16804.cljs$core$IIndexed$_nth$arity$2(null,i__16487_16806);
if(cljs.core.truth_(child_16807)){
node.appendChild(child_16807);


var G__16808 = seq__16483_16803;
var G__16809 = chunk__16485_16804;
var G__16810 = count__16486_16805;
var G__16811 = (i__16487_16806 + (1));
seq__16483_16803 = G__16808;
chunk__16485_16804 = G__16809;
count__16486_16805 = G__16810;
i__16487_16806 = G__16811;
continue;
} else {
var G__16812 = seq__16483_16803;
var G__16813 = chunk__16485_16804;
var G__16814 = count__16486_16805;
var G__16815 = (i__16487_16806 + (1));
seq__16483_16803 = G__16812;
chunk__16485_16804 = G__16813;
count__16486_16805 = G__16814;
i__16487_16806 = G__16815;
continue;
}
} else {
var temp__5804__auto___16816__$1 = cljs.core.seq(seq__16483_16803);
if(temp__5804__auto___16816__$1){
var seq__16483_16817__$1 = temp__5804__auto___16816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16483_16817__$1)){
var c__5568__auto___16818 = cljs.core.chunk_first(seq__16483_16817__$1);
var G__16819 = cljs.core.chunk_rest(seq__16483_16817__$1);
var G__16820 = c__5568__auto___16818;
var G__16821 = cljs.core.count(c__5568__auto___16818);
var G__16822 = (0);
seq__16483_16803 = G__16819;
chunk__16485_16804 = G__16820;
count__16486_16805 = G__16821;
i__16487_16806 = G__16822;
continue;
} else {
var child_16823 = cljs.core.first(seq__16483_16817__$1);
if(cljs.core.truth_(child_16823)){
node.appendChild(child_16823);


var G__16824 = cljs.core.next(seq__16483_16817__$1);
var G__16825 = null;
var G__16826 = (0);
var G__16827 = (0);
seq__16483_16803 = G__16824;
chunk__16485_16804 = G__16825;
count__16486_16805 = G__16826;
i__16487_16806 = G__16827;
continue;
} else {
var G__16828 = cljs.core.next(seq__16483_16817__$1);
var G__16829 = null;
var G__16830 = (0);
var G__16831 = (0);
seq__16483_16803 = G__16828;
chunk__16485_16804 = G__16829;
count__16486_16805 = G__16830;
i__16487_16806 = G__16831;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16802);
}
}


var G__16832 = cljs.core.next(seq__16459_16794__$1);
var G__16833 = null;
var G__16834 = (0);
var G__16835 = (0);
seq__16459_16749 = G__16832;
chunk__16461_16750 = G__16833;
count__16462_16751 = G__16834;
i__16463_16752 = G__16835;
continue;
} else {
var G__16836 = cljs.core.next(seq__16459_16794__$1);
var G__16837 = null;
var G__16838 = (0);
var G__16839 = (0);
seq__16459_16749 = G__16836;
chunk__16461_16750 = G__16837;
count__16462_16751 = G__16838;
i__16463_16752 = G__16839;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16840 = arguments.length;
var i__5770__auto___16841 = (0);
while(true){
if((i__5770__auto___16841 < len__5769__auto___16840)){
args__5775__auto__.push((arguments[i__5770__auto___16841]));

var G__16842 = (i__5770__auto___16841 + (1));
i__5770__auto___16841 = G__16842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16489){
var G__16490 = cljs.core.first(seq16489);
var seq16489__$1 = cljs.core.next(seq16489);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16490,seq16489__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16492 = arguments.length;
switch (G__16492) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13884__auto___16844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_16497){
var state_val_16498 = (state_16497[(1)]);
if((state_val_16498 === (1))){
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16497__$1,(2),once_or_cleanup);
} else {
if((state_val_16498 === (2))){
var inst_16494 = (state_16497[(2)]);
var inst_16495 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16497__$1 = (function (){var statearr_16499 = state_16497;
(statearr_16499[(7)] = inst_16494);

return statearr_16499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16497__$1,inst_16495);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13824__auto__ = null;
var shadow$dom$state_machine__13824__auto____0 = (function (){
var statearr_16500 = [null,null,null,null,null,null,null,null];
(statearr_16500[(0)] = shadow$dom$state_machine__13824__auto__);

(statearr_16500[(1)] = (1));

return statearr_16500;
});
var shadow$dom$state_machine__13824__auto____1 = (function (state_16497){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_16497);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e16501){var ex__13827__auto__ = e16501;
var statearr_16502_16845 = state_16497;
(statearr_16502_16845[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_16497[(4)]))){
var statearr_16503_16846 = state_16497;
(statearr_16503_16846[(1)] = cljs.core.first((state_16497[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16847 = state_16497;
state_16497 = G__16847;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
shadow$dom$state_machine__13824__auto__ = function(state_16497){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13824__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13824__auto____1.call(this,state_16497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13824__auto____0;
shadow$dom$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13824__auto____1;
return shadow$dom$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_16504 = f__13885__auto__();
(statearr_16504[(6)] = c__13884__auto___16844);

return statearr_16504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
