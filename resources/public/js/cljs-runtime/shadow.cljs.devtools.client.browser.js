goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20817 = arguments.length;
var i__5770__auto___20818 = (0);
while(true){
if((i__5770__auto___20818 < len__5769__auto___20817)){
args__5775__auto__.push((arguments[i__5770__auto___20818]));

var G__20819 = (i__5770__auto___20818 + (1));
i__5770__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20537){
var G__20538 = cljs.core.first(seq20537);
var seq20537__$1 = cljs.core.next(seq20537);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20538,seq20537__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20539 = cljs.core.seq(sources);
var chunk__20540 = null;
var count__20541 = (0);
var i__20542 = (0);
while(true){
if((i__20542 < count__20541)){
var map__20547 = chunk__20540.cljs$core$IIndexed$_nth$arity$2(null,i__20542);
var map__20547__$1 = cljs.core.__destructure_map(map__20547);
var src = map__20547__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20548){var e_20820 = e20548;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20820);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20820.message)].join('')));
}

var G__20821 = seq__20539;
var G__20822 = chunk__20540;
var G__20823 = count__20541;
var G__20824 = (i__20542 + (1));
seq__20539 = G__20821;
chunk__20540 = G__20822;
count__20541 = G__20823;
i__20542 = G__20824;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20539);
if(temp__5804__auto__){
var seq__20539__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20539__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20539__$1);
var G__20825 = cljs.core.chunk_rest(seq__20539__$1);
var G__20826 = c__5568__auto__;
var G__20827 = cljs.core.count(c__5568__auto__);
var G__20828 = (0);
seq__20539 = G__20825;
chunk__20540 = G__20826;
count__20541 = G__20827;
i__20542 = G__20828;
continue;
} else {
var map__20549 = cljs.core.first(seq__20539__$1);
var map__20549__$1 = cljs.core.__destructure_map(map__20549);
var src = map__20549__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20550){var e_20829 = e20550;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20829);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20829.message)].join('')));
}

var G__20830 = cljs.core.next(seq__20539__$1);
var G__20831 = null;
var G__20832 = (0);
var G__20833 = (0);
seq__20539 = G__20830;
chunk__20540 = G__20831;
count__20541 = G__20832;
i__20542 = G__20833;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20551 = cljs.core.seq(js_requires);
var chunk__20552 = null;
var count__20553 = (0);
var i__20554 = (0);
while(true){
if((i__20554 < count__20553)){
var js_ns = chunk__20552.cljs$core$IIndexed$_nth$arity$2(null,i__20554);
var require_str_20834 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20834);


var G__20835 = seq__20551;
var G__20836 = chunk__20552;
var G__20837 = count__20553;
var G__20838 = (i__20554 + (1));
seq__20551 = G__20835;
chunk__20552 = G__20836;
count__20553 = G__20837;
i__20554 = G__20838;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20551);
if(temp__5804__auto__){
var seq__20551__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20551__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20551__$1);
var G__20839 = cljs.core.chunk_rest(seq__20551__$1);
var G__20840 = c__5568__auto__;
var G__20841 = cljs.core.count(c__5568__auto__);
var G__20842 = (0);
seq__20551 = G__20839;
chunk__20552 = G__20840;
count__20553 = G__20841;
i__20554 = G__20842;
continue;
} else {
var js_ns = cljs.core.first(seq__20551__$1);
var require_str_20843 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20843);


var G__20844 = cljs.core.next(seq__20551__$1);
var G__20845 = null;
var G__20846 = (0);
var G__20847 = (0);
seq__20551 = G__20844;
chunk__20552 = G__20845;
count__20553 = G__20846;
i__20554 = G__20847;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20556){
var map__20557 = p__20556;
var map__20557__$1 = cljs.core.__destructure_map(map__20557);
var msg = map__20557__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20558(s__20559){
return (new cljs.core.LazySeq(null,(function (){
var s__20559__$1 = s__20559;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20559__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20564 = cljs.core.first(xs__6360__auto__);
var map__20564__$1 = cljs.core.__destructure_map(map__20564);
var src = map__20564__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20564__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20564__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20559__$1,map__20564,map__20564__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20557,map__20557__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20558_$_iter__20560(s__20561){
return (new cljs.core.LazySeq(null,((function (s__20559__$1,map__20564,map__20564__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20557,map__20557__$1,msg,info,reload_info){
return (function (){
var s__20561__$1 = s__20561;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20561__$1);
if(temp__5804__auto____$1){
var s__20561__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20561__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20561__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20563 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20562 = (0);
while(true){
if((i__20562 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20562);
cljs.core.chunk_append(b__20563,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20848 = (i__20562 + (1));
i__20562 = G__20848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20563),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20558_$_iter__20560(cljs.core.chunk_rest(s__20561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20563),null);
}
} else {
var warning = cljs.core.first(s__20561__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20558_$_iter__20560(cljs.core.rest(s__20561__$2)));
}
} else {
return null;
}
break;
}
});})(s__20559__$1,map__20564,map__20564__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20557,map__20557__$1,msg,info,reload_info))
,null,null));
});})(s__20559__$1,map__20564,map__20564__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20557,map__20557__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20558(cljs.core.rest(s__20559__$1)));
} else {
var G__20849 = cljs.core.rest(s__20559__$1);
s__20559__$1 = G__20849;
continue;
}
} else {
var G__20850 = cljs.core.rest(s__20559__$1);
s__20559__$1 = G__20850;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20565_20851 = cljs.core.seq(warnings);
var chunk__20566_20852 = null;
var count__20567_20853 = (0);
var i__20568_20854 = (0);
while(true){
if((i__20568_20854 < count__20567_20853)){
var map__20571_20855 = chunk__20566_20852.cljs$core$IIndexed$_nth$arity$2(null,i__20568_20854);
var map__20571_20856__$1 = cljs.core.__destructure_map(map__20571_20855);
var w_20857 = map__20571_20856__$1;
var msg_20858__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20856__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20856__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20856__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20861)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20859),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20860),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20858__$1)].join(''));


var G__20862 = seq__20565_20851;
var G__20863 = chunk__20566_20852;
var G__20864 = count__20567_20853;
var G__20865 = (i__20568_20854 + (1));
seq__20565_20851 = G__20862;
chunk__20566_20852 = G__20863;
count__20567_20853 = G__20864;
i__20568_20854 = G__20865;
continue;
} else {
var temp__5804__auto___20866 = cljs.core.seq(seq__20565_20851);
if(temp__5804__auto___20866){
var seq__20565_20867__$1 = temp__5804__auto___20866;
if(cljs.core.chunked_seq_QMARK_(seq__20565_20867__$1)){
var c__5568__auto___20868 = cljs.core.chunk_first(seq__20565_20867__$1);
var G__20869 = cljs.core.chunk_rest(seq__20565_20867__$1);
var G__20870 = c__5568__auto___20868;
var G__20871 = cljs.core.count(c__5568__auto___20868);
var G__20872 = (0);
seq__20565_20851 = G__20869;
chunk__20566_20852 = G__20870;
count__20567_20853 = G__20871;
i__20568_20854 = G__20872;
continue;
} else {
var map__20572_20873 = cljs.core.first(seq__20565_20867__$1);
var map__20572_20874__$1 = cljs.core.__destructure_map(map__20572_20873);
var w_20875 = map__20572_20874__$1;
var msg_20876__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572_20874__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572_20874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572_20874__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572_20874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20879)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20877),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20878),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20876__$1)].join(''));


var G__20880 = cljs.core.next(seq__20565_20867__$1);
var G__20881 = null;
var G__20882 = (0);
var G__20883 = (0);
seq__20565_20851 = G__20880;
chunk__20566_20852 = G__20881;
count__20567_20853 = G__20882;
i__20568_20854 = G__20883;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20555_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20555_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20573){
var map__20574 = p__20573;
var map__20574__$1 = cljs.core.__destructure_map(map__20574);
var msg = map__20574__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20575 = cljs.core.seq(updates);
var chunk__20577 = null;
var count__20578 = (0);
var i__20579 = (0);
while(true){
if((i__20579 < count__20578)){
var path = chunk__20577.cljs$core$IIndexed$_nth$arity$2(null,i__20579);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20689_20884 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20693_20885 = null;
var count__20694_20886 = (0);
var i__20695_20887 = (0);
while(true){
if((i__20695_20887 < count__20694_20886)){
var node_20888 = chunk__20693_20885.cljs$core$IIndexed$_nth$arity$2(null,i__20695_20887);
if(cljs.core.not(node_20888.shadow$old)){
var path_match_20889 = shadow.cljs.devtools.client.browser.match_paths(node_20888.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20889)){
var new_link_20890 = (function (){var G__20721 = node_20888.cloneNode(true);
G__20721.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20889),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20721;
})();
(node_20888.shadow$old = true);

(new_link_20890.onload = ((function (seq__20689_20884,chunk__20693_20885,count__20694_20886,i__20695_20887,seq__20575,chunk__20577,count__20578,i__20579,new_link_20890,path_match_20889,node_20888,path,map__20574,map__20574__$1,msg,updates,reload_info){
return (function (e){
var seq__20722_20891 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20724_20892 = null;
var count__20725_20893 = (0);
var i__20726_20894 = (0);
while(true){
if((i__20726_20894 < count__20725_20893)){
var map__20730_20895 = chunk__20724_20892.cljs$core$IIndexed$_nth$arity$2(null,i__20726_20894);
var map__20730_20896__$1 = cljs.core.__destructure_map(map__20730_20895);
var task_20897 = map__20730_20896__$1;
var fn_str_20898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730_20896__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730_20896__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20900 = goog.getObjectByName(fn_str_20898,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20899)].join(''));

(fn_obj_20900.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20900.cljs$core$IFn$_invoke$arity$2(path,new_link_20890) : fn_obj_20900.call(null,path,new_link_20890));


var G__20901 = seq__20722_20891;
var G__20902 = chunk__20724_20892;
var G__20903 = count__20725_20893;
var G__20904 = (i__20726_20894 + (1));
seq__20722_20891 = G__20901;
chunk__20724_20892 = G__20902;
count__20725_20893 = G__20903;
i__20726_20894 = G__20904;
continue;
} else {
var temp__5804__auto___20905 = cljs.core.seq(seq__20722_20891);
if(temp__5804__auto___20905){
var seq__20722_20906__$1 = temp__5804__auto___20905;
if(cljs.core.chunked_seq_QMARK_(seq__20722_20906__$1)){
var c__5568__auto___20907 = cljs.core.chunk_first(seq__20722_20906__$1);
var G__20908 = cljs.core.chunk_rest(seq__20722_20906__$1);
var G__20909 = c__5568__auto___20907;
var G__20910 = cljs.core.count(c__5568__auto___20907);
var G__20911 = (0);
seq__20722_20891 = G__20908;
chunk__20724_20892 = G__20909;
count__20725_20893 = G__20910;
i__20726_20894 = G__20911;
continue;
} else {
var map__20731_20912 = cljs.core.first(seq__20722_20906__$1);
var map__20731_20913__$1 = cljs.core.__destructure_map(map__20731_20912);
var task_20914 = map__20731_20913__$1;
var fn_str_20915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_20913__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_20913__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20917 = goog.getObjectByName(fn_str_20915,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20916)].join(''));

(fn_obj_20917.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20917.cljs$core$IFn$_invoke$arity$2(path,new_link_20890) : fn_obj_20917.call(null,path,new_link_20890));


var G__20918 = cljs.core.next(seq__20722_20906__$1);
var G__20919 = null;
var G__20920 = (0);
var G__20921 = (0);
seq__20722_20891 = G__20918;
chunk__20724_20892 = G__20919;
count__20725_20893 = G__20920;
i__20726_20894 = G__20921;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20888);
});})(seq__20689_20884,chunk__20693_20885,count__20694_20886,i__20695_20887,seq__20575,chunk__20577,count__20578,i__20579,new_link_20890,path_match_20889,node_20888,path,map__20574,map__20574__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20889], 0));

goog.dom.insertSiblingAfter(new_link_20890,node_20888);


var G__20922 = seq__20689_20884;
var G__20923 = chunk__20693_20885;
var G__20924 = count__20694_20886;
var G__20925 = (i__20695_20887 + (1));
seq__20689_20884 = G__20922;
chunk__20693_20885 = G__20923;
count__20694_20886 = G__20924;
i__20695_20887 = G__20925;
continue;
} else {
var G__20926 = seq__20689_20884;
var G__20927 = chunk__20693_20885;
var G__20928 = count__20694_20886;
var G__20929 = (i__20695_20887 + (1));
seq__20689_20884 = G__20926;
chunk__20693_20885 = G__20927;
count__20694_20886 = G__20928;
i__20695_20887 = G__20929;
continue;
}
} else {
var G__20930 = seq__20689_20884;
var G__20931 = chunk__20693_20885;
var G__20932 = count__20694_20886;
var G__20933 = (i__20695_20887 + (1));
seq__20689_20884 = G__20930;
chunk__20693_20885 = G__20931;
count__20694_20886 = G__20932;
i__20695_20887 = G__20933;
continue;
}
} else {
var temp__5804__auto___20934 = cljs.core.seq(seq__20689_20884);
if(temp__5804__auto___20934){
var seq__20689_20935__$1 = temp__5804__auto___20934;
if(cljs.core.chunked_seq_QMARK_(seq__20689_20935__$1)){
var c__5568__auto___20936 = cljs.core.chunk_first(seq__20689_20935__$1);
var G__20937 = cljs.core.chunk_rest(seq__20689_20935__$1);
var G__20938 = c__5568__auto___20936;
var G__20939 = cljs.core.count(c__5568__auto___20936);
var G__20940 = (0);
seq__20689_20884 = G__20937;
chunk__20693_20885 = G__20938;
count__20694_20886 = G__20939;
i__20695_20887 = G__20940;
continue;
} else {
var node_20941 = cljs.core.first(seq__20689_20935__$1);
if(cljs.core.not(node_20941.shadow$old)){
var path_match_20942 = shadow.cljs.devtools.client.browser.match_paths(node_20941.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20942)){
var new_link_20943 = (function (){var G__20732 = node_20941.cloneNode(true);
G__20732.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20942),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20732;
})();
(node_20941.shadow$old = true);

(new_link_20943.onload = ((function (seq__20689_20884,chunk__20693_20885,count__20694_20886,i__20695_20887,seq__20575,chunk__20577,count__20578,i__20579,new_link_20943,path_match_20942,node_20941,seq__20689_20935__$1,temp__5804__auto___20934,path,map__20574,map__20574__$1,msg,updates,reload_info){
return (function (e){
var seq__20733_20944 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20735_20945 = null;
var count__20736_20946 = (0);
var i__20737_20947 = (0);
while(true){
if((i__20737_20947 < count__20736_20946)){
var map__20741_20948 = chunk__20735_20945.cljs$core$IIndexed$_nth$arity$2(null,i__20737_20947);
var map__20741_20949__$1 = cljs.core.__destructure_map(map__20741_20948);
var task_20950 = map__20741_20949__$1;
var fn_str_20951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20741_20949__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20741_20949__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20953 = goog.getObjectByName(fn_str_20951,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20952)].join(''));

(fn_obj_20953.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20953.cljs$core$IFn$_invoke$arity$2(path,new_link_20943) : fn_obj_20953.call(null,path,new_link_20943));


var G__20954 = seq__20733_20944;
var G__20955 = chunk__20735_20945;
var G__20956 = count__20736_20946;
var G__20957 = (i__20737_20947 + (1));
seq__20733_20944 = G__20954;
chunk__20735_20945 = G__20955;
count__20736_20946 = G__20956;
i__20737_20947 = G__20957;
continue;
} else {
var temp__5804__auto___20958__$1 = cljs.core.seq(seq__20733_20944);
if(temp__5804__auto___20958__$1){
var seq__20733_20959__$1 = temp__5804__auto___20958__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20733_20959__$1)){
var c__5568__auto___20960 = cljs.core.chunk_first(seq__20733_20959__$1);
var G__20961 = cljs.core.chunk_rest(seq__20733_20959__$1);
var G__20962 = c__5568__auto___20960;
var G__20963 = cljs.core.count(c__5568__auto___20960);
var G__20964 = (0);
seq__20733_20944 = G__20961;
chunk__20735_20945 = G__20962;
count__20736_20946 = G__20963;
i__20737_20947 = G__20964;
continue;
} else {
var map__20742_20965 = cljs.core.first(seq__20733_20959__$1);
var map__20742_20966__$1 = cljs.core.__destructure_map(map__20742_20965);
var task_20967 = map__20742_20966__$1;
var fn_str_20968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742_20966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742_20966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20970 = goog.getObjectByName(fn_str_20968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20969)].join(''));

(fn_obj_20970.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20970.cljs$core$IFn$_invoke$arity$2(path,new_link_20943) : fn_obj_20970.call(null,path,new_link_20943));


var G__20971 = cljs.core.next(seq__20733_20959__$1);
var G__20972 = null;
var G__20973 = (0);
var G__20974 = (0);
seq__20733_20944 = G__20971;
chunk__20735_20945 = G__20972;
count__20736_20946 = G__20973;
i__20737_20947 = G__20974;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20941);
});})(seq__20689_20884,chunk__20693_20885,count__20694_20886,i__20695_20887,seq__20575,chunk__20577,count__20578,i__20579,new_link_20943,path_match_20942,node_20941,seq__20689_20935__$1,temp__5804__auto___20934,path,map__20574,map__20574__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20942], 0));

goog.dom.insertSiblingAfter(new_link_20943,node_20941);


var G__20975 = cljs.core.next(seq__20689_20935__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20689_20884 = G__20975;
chunk__20693_20885 = G__20976;
count__20694_20886 = G__20977;
i__20695_20887 = G__20978;
continue;
} else {
var G__20979 = cljs.core.next(seq__20689_20935__$1);
var G__20980 = null;
var G__20981 = (0);
var G__20982 = (0);
seq__20689_20884 = G__20979;
chunk__20693_20885 = G__20980;
count__20694_20886 = G__20981;
i__20695_20887 = G__20982;
continue;
}
} else {
var G__20983 = cljs.core.next(seq__20689_20935__$1);
var G__20984 = null;
var G__20985 = (0);
var G__20986 = (0);
seq__20689_20884 = G__20983;
chunk__20693_20885 = G__20984;
count__20694_20886 = G__20985;
i__20695_20887 = G__20986;
continue;
}
}
} else {
}
}
break;
}


var G__20987 = seq__20575;
var G__20988 = chunk__20577;
var G__20989 = count__20578;
var G__20990 = (i__20579 + (1));
seq__20575 = G__20987;
chunk__20577 = G__20988;
count__20578 = G__20989;
i__20579 = G__20990;
continue;
} else {
var G__20991 = seq__20575;
var G__20992 = chunk__20577;
var G__20993 = count__20578;
var G__20994 = (i__20579 + (1));
seq__20575 = G__20991;
chunk__20577 = G__20992;
count__20578 = G__20993;
i__20579 = G__20994;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20575);
if(temp__5804__auto__){
var seq__20575__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20575__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20575__$1);
var G__20995 = cljs.core.chunk_rest(seq__20575__$1);
var G__20996 = c__5568__auto__;
var G__20997 = cljs.core.count(c__5568__auto__);
var G__20998 = (0);
seq__20575 = G__20995;
chunk__20577 = G__20996;
count__20578 = G__20997;
i__20579 = G__20998;
continue;
} else {
var path = cljs.core.first(seq__20575__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20743_20999 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20747_21000 = null;
var count__20748_21001 = (0);
var i__20749_21002 = (0);
while(true){
if((i__20749_21002 < count__20748_21001)){
var node_21003 = chunk__20747_21000.cljs$core$IIndexed$_nth$arity$2(null,i__20749_21002);
if(cljs.core.not(node_21003.shadow$old)){
var path_match_21004 = shadow.cljs.devtools.client.browser.match_paths(node_21003.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21004)){
var new_link_21005 = (function (){var G__20775 = node_21003.cloneNode(true);
G__20775.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21004),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20775;
})();
(node_21003.shadow$old = true);

(new_link_21005.onload = ((function (seq__20743_20999,chunk__20747_21000,count__20748_21001,i__20749_21002,seq__20575,chunk__20577,count__20578,i__20579,new_link_21005,path_match_21004,node_21003,path,seq__20575__$1,temp__5804__auto__,map__20574,map__20574__$1,msg,updates,reload_info){
return (function (e){
var seq__20776_21006 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20778_21007 = null;
var count__20779_21008 = (0);
var i__20780_21009 = (0);
while(true){
if((i__20780_21009 < count__20779_21008)){
var map__20784_21010 = chunk__20778_21007.cljs$core$IIndexed$_nth$arity$2(null,i__20780_21009);
var map__20784_21011__$1 = cljs.core.__destructure_map(map__20784_21010);
var task_21012 = map__20784_21011__$1;
var fn_str_21013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21011__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21011__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21015 = goog.getObjectByName(fn_str_21013,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21014)].join(''));

(fn_obj_21015.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21015.cljs$core$IFn$_invoke$arity$2(path,new_link_21005) : fn_obj_21015.call(null,path,new_link_21005));


var G__21016 = seq__20776_21006;
var G__21017 = chunk__20778_21007;
var G__21018 = count__20779_21008;
var G__21019 = (i__20780_21009 + (1));
seq__20776_21006 = G__21016;
chunk__20778_21007 = G__21017;
count__20779_21008 = G__21018;
i__20780_21009 = G__21019;
continue;
} else {
var temp__5804__auto___21020__$1 = cljs.core.seq(seq__20776_21006);
if(temp__5804__auto___21020__$1){
var seq__20776_21021__$1 = temp__5804__auto___21020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20776_21021__$1)){
var c__5568__auto___21022 = cljs.core.chunk_first(seq__20776_21021__$1);
var G__21023 = cljs.core.chunk_rest(seq__20776_21021__$1);
var G__21024 = c__5568__auto___21022;
var G__21025 = cljs.core.count(c__5568__auto___21022);
var G__21026 = (0);
seq__20776_21006 = G__21023;
chunk__20778_21007 = G__21024;
count__20779_21008 = G__21025;
i__20780_21009 = G__21026;
continue;
} else {
var map__20785_21027 = cljs.core.first(seq__20776_21021__$1);
var map__20785_21028__$1 = cljs.core.__destructure_map(map__20785_21027);
var task_21029 = map__20785_21028__$1;
var fn_str_21030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21028__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21028__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21032 = goog.getObjectByName(fn_str_21030,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21031)].join(''));

(fn_obj_21032.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21032.cljs$core$IFn$_invoke$arity$2(path,new_link_21005) : fn_obj_21032.call(null,path,new_link_21005));


var G__21033 = cljs.core.next(seq__20776_21021__$1);
var G__21034 = null;
var G__21035 = (0);
var G__21036 = (0);
seq__20776_21006 = G__21033;
chunk__20778_21007 = G__21034;
count__20779_21008 = G__21035;
i__20780_21009 = G__21036;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21003);
});})(seq__20743_20999,chunk__20747_21000,count__20748_21001,i__20749_21002,seq__20575,chunk__20577,count__20578,i__20579,new_link_21005,path_match_21004,node_21003,path,seq__20575__$1,temp__5804__auto__,map__20574,map__20574__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21004], 0));

goog.dom.insertSiblingAfter(new_link_21005,node_21003);


var G__21037 = seq__20743_20999;
var G__21038 = chunk__20747_21000;
var G__21039 = count__20748_21001;
var G__21040 = (i__20749_21002 + (1));
seq__20743_20999 = G__21037;
chunk__20747_21000 = G__21038;
count__20748_21001 = G__21039;
i__20749_21002 = G__21040;
continue;
} else {
var G__21041 = seq__20743_20999;
var G__21042 = chunk__20747_21000;
var G__21043 = count__20748_21001;
var G__21044 = (i__20749_21002 + (1));
seq__20743_20999 = G__21041;
chunk__20747_21000 = G__21042;
count__20748_21001 = G__21043;
i__20749_21002 = G__21044;
continue;
}
} else {
var G__21045 = seq__20743_20999;
var G__21046 = chunk__20747_21000;
var G__21047 = count__20748_21001;
var G__21048 = (i__20749_21002 + (1));
seq__20743_20999 = G__21045;
chunk__20747_21000 = G__21046;
count__20748_21001 = G__21047;
i__20749_21002 = G__21048;
continue;
}
} else {
var temp__5804__auto___21049__$1 = cljs.core.seq(seq__20743_20999);
if(temp__5804__auto___21049__$1){
var seq__20743_21050__$1 = temp__5804__auto___21049__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20743_21050__$1)){
var c__5568__auto___21051 = cljs.core.chunk_first(seq__20743_21050__$1);
var G__21052 = cljs.core.chunk_rest(seq__20743_21050__$1);
var G__21053 = c__5568__auto___21051;
var G__21054 = cljs.core.count(c__5568__auto___21051);
var G__21055 = (0);
seq__20743_20999 = G__21052;
chunk__20747_21000 = G__21053;
count__20748_21001 = G__21054;
i__20749_21002 = G__21055;
continue;
} else {
var node_21056 = cljs.core.first(seq__20743_21050__$1);
if(cljs.core.not(node_21056.shadow$old)){
var path_match_21057 = shadow.cljs.devtools.client.browser.match_paths(node_21056.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21057)){
var new_link_21058 = (function (){var G__20786 = node_21056.cloneNode(true);
G__20786.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21057),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20786;
})();
(node_21056.shadow$old = true);

(new_link_21058.onload = ((function (seq__20743_20999,chunk__20747_21000,count__20748_21001,i__20749_21002,seq__20575,chunk__20577,count__20578,i__20579,new_link_21058,path_match_21057,node_21056,seq__20743_21050__$1,temp__5804__auto___21049__$1,path,seq__20575__$1,temp__5804__auto__,map__20574,map__20574__$1,msg,updates,reload_info){
return (function (e){
var seq__20787_21059 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20789_21060 = null;
var count__20790_21061 = (0);
var i__20791_21062 = (0);
while(true){
if((i__20791_21062 < count__20790_21061)){
var map__20795_21063 = chunk__20789_21060.cljs$core$IIndexed$_nth$arity$2(null,i__20791_21062);
var map__20795_21064__$1 = cljs.core.__destructure_map(map__20795_21063);
var task_21065 = map__20795_21064__$1;
var fn_str_21066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795_21064__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795_21064__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21068 = goog.getObjectByName(fn_str_21066,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21067)].join(''));

(fn_obj_21068.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21068.cljs$core$IFn$_invoke$arity$2(path,new_link_21058) : fn_obj_21068.call(null,path,new_link_21058));


var G__21069 = seq__20787_21059;
var G__21070 = chunk__20789_21060;
var G__21071 = count__20790_21061;
var G__21072 = (i__20791_21062 + (1));
seq__20787_21059 = G__21069;
chunk__20789_21060 = G__21070;
count__20790_21061 = G__21071;
i__20791_21062 = G__21072;
continue;
} else {
var temp__5804__auto___21073__$2 = cljs.core.seq(seq__20787_21059);
if(temp__5804__auto___21073__$2){
var seq__20787_21074__$1 = temp__5804__auto___21073__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20787_21074__$1)){
var c__5568__auto___21075 = cljs.core.chunk_first(seq__20787_21074__$1);
var G__21076 = cljs.core.chunk_rest(seq__20787_21074__$1);
var G__21077 = c__5568__auto___21075;
var G__21078 = cljs.core.count(c__5568__auto___21075);
var G__21079 = (0);
seq__20787_21059 = G__21076;
chunk__20789_21060 = G__21077;
count__20790_21061 = G__21078;
i__20791_21062 = G__21079;
continue;
} else {
var map__20796_21080 = cljs.core.first(seq__20787_21074__$1);
var map__20796_21081__$1 = cljs.core.__destructure_map(map__20796_21080);
var task_21082 = map__20796_21081__$1;
var fn_str_21083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_21081__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_21081__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21085 = goog.getObjectByName(fn_str_21083,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21084)].join(''));

(fn_obj_21085.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21085.cljs$core$IFn$_invoke$arity$2(path,new_link_21058) : fn_obj_21085.call(null,path,new_link_21058));


var G__21086 = cljs.core.next(seq__20787_21074__$1);
var G__21087 = null;
var G__21088 = (0);
var G__21089 = (0);
seq__20787_21059 = G__21086;
chunk__20789_21060 = G__21087;
count__20790_21061 = G__21088;
i__20791_21062 = G__21089;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21056);
});})(seq__20743_20999,chunk__20747_21000,count__20748_21001,i__20749_21002,seq__20575,chunk__20577,count__20578,i__20579,new_link_21058,path_match_21057,node_21056,seq__20743_21050__$1,temp__5804__auto___21049__$1,path,seq__20575__$1,temp__5804__auto__,map__20574,map__20574__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21057], 0));

goog.dom.insertSiblingAfter(new_link_21058,node_21056);


var G__21090 = cljs.core.next(seq__20743_21050__$1);
var G__21091 = null;
var G__21092 = (0);
var G__21093 = (0);
seq__20743_20999 = G__21090;
chunk__20747_21000 = G__21091;
count__20748_21001 = G__21092;
i__20749_21002 = G__21093;
continue;
} else {
var G__21094 = cljs.core.next(seq__20743_21050__$1);
var G__21095 = null;
var G__21096 = (0);
var G__21097 = (0);
seq__20743_20999 = G__21094;
chunk__20747_21000 = G__21095;
count__20748_21001 = G__21096;
i__20749_21002 = G__21097;
continue;
}
} else {
var G__21098 = cljs.core.next(seq__20743_21050__$1);
var G__21099 = null;
var G__21100 = (0);
var G__21101 = (0);
seq__20743_20999 = G__21098;
chunk__20747_21000 = G__21099;
count__20748_21001 = G__21100;
i__20749_21002 = G__21101;
continue;
}
}
} else {
}
}
break;
}


var G__21102 = cljs.core.next(seq__20575__$1);
var G__21103 = null;
var G__21104 = (0);
var G__21105 = (0);
seq__20575 = G__21102;
chunk__20577 = G__21103;
count__20578 = G__21104;
i__20579 = G__21105;
continue;
} else {
var G__21106 = cljs.core.next(seq__20575__$1);
var G__21107 = null;
var G__21108 = (0);
var G__21109 = (0);
seq__20575 = G__21106;
chunk__20577 = G__21107;
count__20578 = G__21108;
i__20579 = G__21109;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__20797){
var map__20798 = p__20797;
var map__20798__$1 = cljs.core.__destructure_map(map__20798);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__20799){
var map__20800 = p__20799;
var map__20800__$1 = cljs.core.__destructure_map(map__20800);
var _ = map__20800__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20801,done,error){
var map__20802 = p__20801;
var map__20802__$1 = cljs.core.__destructure_map(map__20802);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20802__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20803,done,error){
var map__20804 = p__20803;
var map__20804__$1 = cljs.core.__destructure_map(map__20804);
var msg = map__20804__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20804__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20804__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20804__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20805){
var map__20806 = p__20805;
var map__20806__$1 = cljs.core.__destructure_map(map__20806);
var src = map__20806__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20806__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20807 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20807) : done.call(null,G__20807));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20808){
var map__20809 = p__20808;
var map__20809__$1 = cljs.core.__destructure_map(map__20809);
var msg__$1 = map__20809__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20809__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20810){var ex = e20810;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20811){
var map__20812 = p__20811;
var map__20812__$1 = cljs.core.__destructure_map(map__20812);
var env = map__20812__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20813){
var map__20814 = p__20813;
var map__20814__$1 = cljs.core.__destructure_map(map__20814);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20815){
var map__20816 = p__20815;
var map__20816__$1 = cljs.core.__destructure_map(map__20816);
var svc = map__20816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
