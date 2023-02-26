goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20020){
var map__20021 = p__20020;
var map__20021__$1 = cljs.core.__destructure_map(map__20021);
var m = map__20021__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20021__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20022_20118 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20023_20119 = null;
var count__20024_20120 = (0);
var i__20025_20121 = (0);
while(true){
if((i__20025_20121 < count__20024_20120)){
var f_20122 = chunk__20023_20119.cljs$core$IIndexed$_nth$arity$2(null,i__20025_20121);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20122], 0));


var G__20123 = seq__20022_20118;
var G__20124 = chunk__20023_20119;
var G__20125 = count__20024_20120;
var G__20126 = (i__20025_20121 + (1));
seq__20022_20118 = G__20123;
chunk__20023_20119 = G__20124;
count__20024_20120 = G__20125;
i__20025_20121 = G__20126;
continue;
} else {
var temp__5804__auto___20127 = cljs.core.seq(seq__20022_20118);
if(temp__5804__auto___20127){
var seq__20022_20128__$1 = temp__5804__auto___20127;
if(cljs.core.chunked_seq_QMARK_(seq__20022_20128__$1)){
var c__5568__auto___20129 = cljs.core.chunk_first(seq__20022_20128__$1);
var G__20130 = cljs.core.chunk_rest(seq__20022_20128__$1);
var G__20131 = c__5568__auto___20129;
var G__20132 = cljs.core.count(c__5568__auto___20129);
var G__20133 = (0);
seq__20022_20118 = G__20130;
chunk__20023_20119 = G__20131;
count__20024_20120 = G__20132;
i__20025_20121 = G__20133;
continue;
} else {
var f_20134 = cljs.core.first(seq__20022_20128__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20134], 0));


var G__20135 = cljs.core.next(seq__20022_20128__$1);
var G__20136 = null;
var G__20137 = (0);
var G__20138 = (0);
seq__20022_20118 = G__20135;
chunk__20023_20119 = G__20136;
count__20024_20120 = G__20137;
i__20025_20121 = G__20138;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20139 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20139], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20139)))?cljs.core.second(arglists_20139):arglists_20139)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20026_20140 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20027_20141 = null;
var count__20028_20142 = (0);
var i__20029_20143 = (0);
while(true){
if((i__20029_20143 < count__20028_20142)){
var vec__20038_20144 = chunk__20027_20141.cljs$core$IIndexed$_nth$arity$2(null,i__20029_20143);
var name_20145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038_20144,(0),null);
var map__20041_20146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038_20144,(1),null);
var map__20041_20147__$1 = cljs.core.__destructure_map(map__20041_20146);
var doc_20148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20041_20147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20041_20147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20145], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20149], 0));

if(cljs.core.truth_(doc_20148)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20148], 0));
} else {
}


var G__20150 = seq__20026_20140;
var G__20151 = chunk__20027_20141;
var G__20152 = count__20028_20142;
var G__20153 = (i__20029_20143 + (1));
seq__20026_20140 = G__20150;
chunk__20027_20141 = G__20151;
count__20028_20142 = G__20152;
i__20029_20143 = G__20153;
continue;
} else {
var temp__5804__auto___20154 = cljs.core.seq(seq__20026_20140);
if(temp__5804__auto___20154){
var seq__20026_20155__$1 = temp__5804__auto___20154;
if(cljs.core.chunked_seq_QMARK_(seq__20026_20155__$1)){
var c__5568__auto___20156 = cljs.core.chunk_first(seq__20026_20155__$1);
var G__20157 = cljs.core.chunk_rest(seq__20026_20155__$1);
var G__20158 = c__5568__auto___20156;
var G__20159 = cljs.core.count(c__5568__auto___20156);
var G__20160 = (0);
seq__20026_20140 = G__20157;
chunk__20027_20141 = G__20158;
count__20028_20142 = G__20159;
i__20029_20143 = G__20160;
continue;
} else {
var vec__20042_20161 = cljs.core.first(seq__20026_20155__$1);
var name_20162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042_20161,(0),null);
var map__20045_20163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042_20161,(1),null);
var map__20045_20164__$1 = cljs.core.__destructure_map(map__20045_20163);
var doc_20165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045_20164__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045_20164__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20162], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20166], 0));

if(cljs.core.truth_(doc_20165)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20165], 0));
} else {
}


var G__20168 = cljs.core.next(seq__20026_20155__$1);
var G__20169 = null;
var G__20170 = (0);
var G__20171 = (0);
seq__20026_20140 = G__20168;
chunk__20027_20141 = G__20169;
count__20028_20142 = G__20170;
i__20029_20143 = G__20171;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20046 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20047 = null;
var count__20048 = (0);
var i__20049 = (0);
while(true){
if((i__20049 < count__20048)){
var role = chunk__20047.cljs$core$IIndexed$_nth$arity$2(null,i__20049);
var temp__5804__auto___20175__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20175__$1)){
var spec_20176 = temp__5804__auto___20175__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20176)], 0));
} else {
}


var G__20177 = seq__20046;
var G__20178 = chunk__20047;
var G__20179 = count__20048;
var G__20180 = (i__20049 + (1));
seq__20046 = G__20177;
chunk__20047 = G__20178;
count__20048 = G__20179;
i__20049 = G__20180;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20046);
if(temp__5804__auto____$1){
var seq__20046__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20046__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20046__$1);
var G__20181 = cljs.core.chunk_rest(seq__20046__$1);
var G__20182 = c__5568__auto__;
var G__20183 = cljs.core.count(c__5568__auto__);
var G__20184 = (0);
seq__20046 = G__20181;
chunk__20047 = G__20182;
count__20048 = G__20183;
i__20049 = G__20184;
continue;
} else {
var role = cljs.core.first(seq__20046__$1);
var temp__5804__auto___20185__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20185__$2)){
var spec_20186 = temp__5804__auto___20185__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20186)], 0));
} else {
}


var G__20187 = cljs.core.next(seq__20046__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__20046 = G__20187;
chunk__20047 = G__20188;
count__20048 = G__20189;
i__20049 = G__20190;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20192 = cljs.core.ex_cause(t);
via = G__20191;
t = G__20192;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20052 = datafied_throwable;
var map__20052__$1 = cljs.core.__destructure_map(map__20052);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20052__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20053 = cljs.core.last(via);
var map__20053__$1 = cljs.core.__destructure_map(map__20053);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20054 = data;
var map__20054__$1 = cljs.core.__destructure_map(map__20054);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20055 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20055__$1 = cljs.core.__destructure_map(map__20055);
var top_data = map__20055__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20056 = phase;
var G__20056__$1 = (((G__20056 instanceof cljs.core.Keyword))?G__20056.fqn:null);
switch (G__20056__$1) {
case "read-source":
var map__20057 = data;
var map__20057__$1 = cljs.core.__destructure_map(map__20057);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20057__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20057__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20058 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20058__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20058,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20058);
var G__20058__$2 = (cljs.core.truth_((function (){var fexpr__20059 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20059.cljs$core$IFn$_invoke$arity$1 ? fexpr__20059.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20059.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20058__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20058__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20058__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20058__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20060 = top_data;
var G__20060__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20060,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20060);
var G__20060__$2 = (cljs.core.truth_((function (){var fexpr__20061 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20061.cljs$core$IFn$_invoke$arity$1 ? fexpr__20061.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20061.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20060__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20060__$1);
var G__20060__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20060__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20060__$2);
var G__20060__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20060__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20060__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20060__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20060__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20062 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062,(3),null);
var G__20065 = top_data;
var G__20065__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20065,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20065);
var G__20065__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20065__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20065__$1);
var G__20065__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20065__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20065__$2);
var G__20065__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20065__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20065__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20065__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20065__$4;
}

break;
case "execution":
var vec__20066 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20051_SHARP_){
var or__5045__auto__ = (p1__20051_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20069 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20069.cljs$core$IFn$_invoke$arity$1 ? fexpr__20069.cljs$core$IFn$_invoke$arity$1(p1__20051_SHARP_) : fexpr__20069.call(null,p1__20051_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20070 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20070__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20070,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20070);
var G__20070__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20070__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20070__$1);
var G__20070__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20070__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20070__$2);
var G__20070__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20070__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20070__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20070__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20070__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20056__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20073){
var map__20074 = p__20073;
var map__20074__$1 = cljs.core.__destructure_map(map__20074);
var triage_data = map__20074__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20075 = phase;
var G__20075__$1 = (((G__20075 instanceof cljs.core.Keyword))?G__20075.fqn:null);
switch (G__20075__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20076 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20077 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20078 = loc;
var G__20079 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20080_20195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20081_20196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20082_20197 = true;
var _STAR_print_fn_STAR__temp_val__20083_20198 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20082_20197);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20083_20198);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20071_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20071_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20081_20196);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20080_20195);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20076,G__20077,G__20078,G__20079) : format.call(null,G__20076,G__20077,G__20078,G__20079));

break;
case "macroexpansion":
var G__20084 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20085 = cause_type;
var G__20086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20087 = loc;
var G__20088 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20084,G__20085,G__20086,G__20087,G__20088) : format.call(null,G__20084,G__20085,G__20086,G__20087,G__20088));

break;
case "compile-syntax-check":
var G__20089 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20090 = cause_type;
var G__20091 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20092 = loc;
var G__20093 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20089,G__20090,G__20091,G__20092,G__20093) : format.call(null,G__20089,G__20090,G__20091,G__20092,G__20093));

break;
case "compilation":
var G__20094 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20095 = cause_type;
var G__20096 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20097 = loc;
var G__20098 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20094,G__20095,G__20096,G__20097,G__20098) : format.call(null,G__20094,G__20095,G__20096,G__20097,G__20098));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20099 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20100 = symbol;
var G__20101 = loc;
var G__20102 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20103_20200 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20104_20201 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20105_20202 = true;
var _STAR_print_fn_STAR__temp_val__20106_20203 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20105_20202);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20106_20203);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20072_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20072_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20104_20201);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20103_20200);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20099,G__20100,G__20101,G__20102) : format.call(null,G__20099,G__20100,G__20101,G__20102));
} else {
var G__20107 = "Execution error%s at %s(%s).\n%s\n";
var G__20108 = cause_type;
var G__20109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20110 = loc;
var G__20111 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20107,G__20108,G__20109,G__20110,G__20111) : format.call(null,G__20107,G__20108,G__20109,G__20110,G__20111));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20075__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
