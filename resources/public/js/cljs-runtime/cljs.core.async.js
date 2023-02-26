goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13952 = (function (f,blockable,meta13953){
this.f = f;
this.blockable = blockable;
this.meta13953 = meta13953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13954,meta13953__$1){
var self__ = this;
var _13954__$1 = this;
return (new cljs.core.async.t_cljs$core$async13952(self__.f,self__.blockable,meta13953__$1));
}));

(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13954){
var self__ = this;
var _13954__$1 = this;
return self__.meta13953;
}));

(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13953","meta13953",1656697092,null)], null);
}));

(cljs.core.async.t_cljs$core$async13952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13952");

(cljs.core.async.t_cljs$core$async13952.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13952.
 */
cljs.core.async.__GT_t_cljs$core$async13952 = (function cljs$core$async$__GT_t_cljs$core$async13952(f,blockable,meta13953){
return (new cljs.core.async.t_cljs$core$async13952(f,blockable,meta13953));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13951 = arguments.length;
switch (G__13951) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13952(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13961 = arguments.length;
switch (G__13961) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13964 = arguments.length;
switch (G__13964) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13966 = arguments.length;
switch (G__13966) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15784 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15784) : fn1.call(null,val_15784));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15784) : fn1.call(null,val_15784));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13968 = arguments.length;
switch (G__13968) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15786 = n;
var x_15787 = (0);
while(true){
if((x_15787 < n__5636__auto___15786)){
(a[x_15787] = x_15787);

var G__15788 = (x_15787 + (1));
x_15787 = G__15788;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13972 = (function (flag,meta13973){
this.flag = flag;
this.meta13973 = meta13973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13974,meta13973__$1){
var self__ = this;
var _13974__$1 = this;
return (new cljs.core.async.t_cljs$core$async13972(self__.flag,meta13973__$1));
}));

(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13974){
var self__ = this;
var _13974__$1 = this;
return self__.meta13973;
}));

(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13973","meta13973",-1306114200,null)], null);
}));

(cljs.core.async.t_cljs$core$async13972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13972");

(cljs.core.async.t_cljs$core$async13972.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13972.
 */
cljs.core.async.__GT_t_cljs$core$async13972 = (function cljs$core$async$__GT_t_cljs$core$async13972(flag,meta13973){
return (new cljs.core.async.t_cljs$core$async13972(flag,meta13973));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13972(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13978 = (function (flag,cb,meta13979){
this.flag = flag;
this.cb = cb;
this.meta13979 = meta13979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13980,meta13979__$1){
var self__ = this;
var _13980__$1 = this;
return (new cljs.core.async.t_cljs$core$async13978(self__.flag,self__.cb,meta13979__$1));
}));

(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13980){
var self__ = this;
var _13980__$1 = this;
return self__.meta13979;
}));

(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13979","meta13979",-1696220687,null)], null);
}));

(cljs.core.async.t_cljs$core$async13978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13978");

(cljs.core.async.t_cljs$core$async13978.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13978.
 */
cljs.core.async.__GT_t_cljs$core$async13978 = (function cljs$core$async$__GT_t_cljs$core$async13978(flag,cb,meta13979){
return (new cljs.core.async.t_cljs$core$async13978(flag,cb,meta13979));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13978(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13982_SHARP_){
var G__13984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13982_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13984) : fret.call(null,G__13984));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13983_SHARP_){
var G__13985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13983_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13985) : fret.call(null,G__13985));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15789 = (i + (1));
i = G__15789;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15790 = arguments.length;
var i__5770__auto___15791 = (0);
while(true){
if((i__5770__auto___15791 < len__5769__auto___15790)){
args__5775__auto__.push((arguments[i__5770__auto___15791]));

var G__15792 = (i__5770__auto___15791 + (1));
i__5770__auto___15791 = G__15792;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13989){
var map__13990 = p__13989;
var map__13990__$1 = cljs.core.__destructure_map(map__13990);
var opts = map__13990__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13986){
var G__13987 = cljs.core.first(seq13986);
var seq13986__$1 = cljs.core.next(seq13986);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13987,seq13986__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13992 = arguments.length;
switch (G__13992) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13884__auto___15794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14029){
var state_val_14030 = (state_14029[(1)]);
if((state_val_14030 === (7))){
var inst_14025 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14031_15795 = state_14029__$1;
(statearr_14031_15795[(2)] = inst_14025);

(statearr_14031_15795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (1))){
var state_14029__$1 = state_14029;
var statearr_14032_15796 = state_14029__$1;
(statearr_14032_15796[(2)] = null);

(statearr_14032_15796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (4))){
var inst_14008 = (state_14029[(7)]);
var inst_14008__$1 = (state_14029[(2)]);
var inst_14009 = (inst_14008__$1 == null);
var state_14029__$1 = (function (){var statearr_14036 = state_14029;
(statearr_14036[(7)] = inst_14008__$1);

return statearr_14036;
})();
if(cljs.core.truth_(inst_14009)){
var statearr_14037_15797 = state_14029__$1;
(statearr_14037_15797[(1)] = (5));

} else {
var statearr_14038_15798 = state_14029__$1;
(statearr_14038_15798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (13))){
var state_14029__$1 = state_14029;
var statearr_14039_15799 = state_14029__$1;
(statearr_14039_15799[(2)] = null);

(statearr_14039_15799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (6))){
var inst_14008 = (state_14029[(7)]);
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14029__$1,(11),to,inst_14008);
} else {
if((state_val_14030 === (3))){
var inst_14027 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14029__$1,inst_14027);
} else {
if((state_val_14030 === (12))){
var state_14029__$1 = state_14029;
var statearr_14049_15800 = state_14029__$1;
(statearr_14049_15800[(2)] = null);

(statearr_14049_15800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (2))){
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14029__$1,(4),from);
} else {
if((state_val_14030 === (11))){
var inst_14018 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
if(cljs.core.truth_(inst_14018)){
var statearr_14050_15801 = state_14029__$1;
(statearr_14050_15801[(1)] = (12));

} else {
var statearr_14051_15802 = state_14029__$1;
(statearr_14051_15802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (9))){
var state_14029__$1 = state_14029;
var statearr_14052_15803 = state_14029__$1;
(statearr_14052_15803[(2)] = null);

(statearr_14052_15803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (5))){
var state_14029__$1 = state_14029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14053_15804 = state_14029__$1;
(statearr_14053_15804[(1)] = (8));

} else {
var statearr_14057_15805 = state_14029__$1;
(statearr_14057_15805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (14))){
var inst_14023 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14070_15806 = state_14029__$1;
(statearr_14070_15806[(2)] = inst_14023);

(statearr_14070_15806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (10))){
var inst_14015 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14071_15807 = state_14029__$1;
(statearr_14071_15807[(2)] = inst_14015);

(statearr_14071_15807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (8))){
var inst_14012 = cljs.core.async.close_BANG_(to);
var state_14029__$1 = state_14029;
var statearr_14072_15808 = state_14029__$1;
(statearr_14072_15808[(2)] = inst_14012);

(statearr_14072_15808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_14073 = [null,null,null,null,null,null,null,null];
(statearr_14073[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_14073[(1)] = (1));

return statearr_14073;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_14029){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14029);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14074){var ex__13827__auto__ = e14074;
var statearr_14075_15809 = state_14029;
(statearr_14075_15809[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14029[(4)]))){
var statearr_14076_15810 = state_14029;
(statearr_14076_15810[(1)] = cljs.core.first((state_14029[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15811 = state_14029;
state_14029 = G__15811;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_14029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_14029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14077 = f__13885__auto__();
(statearr_14077[(6)] = c__13884__auto___15794);

return statearr_14077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14087){
var vec__14088 = p__14087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(1),null);
var job = vec__14088;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13884__auto___15812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14095){
var state_val_14096 = (state_14095[(1)]);
if((state_val_14096 === (1))){
var state_14095__$1 = state_14095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14095__$1,(2),res,v);
} else {
if((state_val_14096 === (2))){
var inst_14092 = (state_14095[(2)]);
var inst_14093 = cljs.core.async.close_BANG_(res);
var state_14095__$1 = (function (){var statearr_14097 = state_14095;
(statearr_14097[(7)] = inst_14092);

return statearr_14097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14095__$1,inst_14093);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_14098 = [null,null,null,null,null,null,null,null];
(statearr_14098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__);

(statearr_14098[(1)] = (1));

return statearr_14098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1 = (function (state_14095){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14095);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14099){var ex__13827__auto__ = e14099;
var statearr_14100_15813 = state_14095;
(statearr_14100_15813[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14095[(4)]))){
var statearr_14101_15814 = state_14095;
(statearr_14101_15814[(1)] = cljs.core.first((state_14095[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15815 = state_14095;
state_14095 = G__15815;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = function(state_14095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1.call(this,state_14095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14102 = f__13885__auto__();
(statearr_14102[(6)] = c__13884__auto___15812);

return statearr_14102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14103){
var vec__14104 = p__14103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
var job = vec__14104;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15816 = n;
var __15817 = (0);
while(true){
if((__15817 < n__5636__auto___15816)){
var G__14107_15818 = type;
var G__14107_15819__$1 = (((G__14107_15818 instanceof cljs.core.Keyword))?G__14107_15818.fqn:null);
switch (G__14107_15819__$1) {
case "compute":
var c__13884__auto___15821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15817,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = ((function (__15817,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function (state_14120){
var state_val_14121 = (state_14120[(1)]);
if((state_val_14121 === (1))){
var state_14120__$1 = state_14120;
var statearr_14122_15822 = state_14120__$1;
(statearr_14122_15822[(2)] = null);

(statearr_14122_15822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (2))){
var state_14120__$1 = state_14120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14120__$1,(4),jobs);
} else {
if((state_val_14121 === (3))){
var inst_14118 = (state_14120[(2)]);
var state_14120__$1 = state_14120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14120__$1,inst_14118);
} else {
if((state_val_14121 === (4))){
var inst_14110 = (state_14120[(2)]);
var inst_14111 = process__$1(inst_14110);
var state_14120__$1 = state_14120;
if(cljs.core.truth_(inst_14111)){
var statearr_14124_15823 = state_14120__$1;
(statearr_14124_15823[(1)] = (5));

} else {
var statearr_14125_15824 = state_14120__$1;
(statearr_14125_15824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (5))){
var state_14120__$1 = state_14120;
var statearr_14126_15825 = state_14120__$1;
(statearr_14126_15825[(2)] = null);

(statearr_14126_15825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (6))){
var state_14120__$1 = state_14120;
var statearr_14127_15826 = state_14120__$1;
(statearr_14127_15826[(2)] = null);

(statearr_14127_15826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (7))){
var inst_14116 = (state_14120[(2)]);
var state_14120__$1 = state_14120;
var statearr_14129_15827 = state_14120__$1;
(statearr_14129_15827[(2)] = inst_14116);

(statearr_14129_15827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15817,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
;
return ((function (__15817,switch__13823__auto__,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_14130 = [null,null,null,null,null,null,null];
(statearr_14130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__);

(statearr_14130[(1)] = (1));

return statearr_14130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1 = (function (state_14120){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14120);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14131){var ex__13827__auto__ = e14131;
var statearr_14132_15828 = state_14120;
(statearr_14132_15828[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14120[(4)]))){
var statearr_14133_15829 = state_14120;
(statearr_14133_15829[(1)] = cljs.core.first((state_14120[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15830 = state_14120;
state_14120 = G__15830;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = function(state_14120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1.call(this,state_14120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__;
})()
;})(__15817,switch__13823__auto__,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
})();
var state__13886__auto__ = (function (){var statearr_14134 = f__13885__auto__();
(statearr_14134[(6)] = c__13884__auto___15821);

return statearr_14134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
});})(__15817,c__13884__auto___15821,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
);


break;
case "async":
var c__13884__auto___15831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15817,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = ((function (__15817,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function (state_14147){
var state_val_14148 = (state_14147[(1)]);
if((state_val_14148 === (1))){
var state_14147__$1 = state_14147;
var statearr_14149_15832 = state_14147__$1;
(statearr_14149_15832[(2)] = null);

(statearr_14149_15832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14148 === (2))){
var state_14147__$1 = state_14147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14147__$1,(4),jobs);
} else {
if((state_val_14148 === (3))){
var inst_14145 = (state_14147[(2)]);
var state_14147__$1 = state_14147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14147__$1,inst_14145);
} else {
if((state_val_14148 === (4))){
var inst_14137 = (state_14147[(2)]);
var inst_14138 = async(inst_14137);
var state_14147__$1 = state_14147;
if(cljs.core.truth_(inst_14138)){
var statearr_14150_15833 = state_14147__$1;
(statearr_14150_15833[(1)] = (5));

} else {
var statearr_14151_15834 = state_14147__$1;
(statearr_14151_15834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14148 === (5))){
var state_14147__$1 = state_14147;
var statearr_14152_15835 = state_14147__$1;
(statearr_14152_15835[(2)] = null);

(statearr_14152_15835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14148 === (6))){
var state_14147__$1 = state_14147;
var statearr_14153_15836 = state_14147__$1;
(statearr_14153_15836[(2)] = null);

(statearr_14153_15836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14148 === (7))){
var inst_14143 = (state_14147[(2)]);
var state_14147__$1 = state_14147;
var statearr_14154_15837 = state_14147__$1;
(statearr_14154_15837[(2)] = inst_14143);

(statearr_14154_15837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15817,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
;
return ((function (__15817,switch__13823__auto__,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_14155 = [null,null,null,null,null,null,null];
(statearr_14155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__);

(statearr_14155[(1)] = (1));

return statearr_14155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1 = (function (state_14147){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14147);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14156){var ex__13827__auto__ = e14156;
var statearr_14157_15838 = state_14147;
(statearr_14157_15838[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14147[(4)]))){
var statearr_14158_15839 = state_14147;
(statearr_14158_15839[(1)] = cljs.core.first((state_14147[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15840 = state_14147;
state_14147 = G__15840;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = function(state_14147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1.call(this,state_14147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__;
})()
;})(__15817,switch__13823__auto__,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
})();
var state__13886__auto__ = (function (){var statearr_14159 = f__13885__auto__();
(statearr_14159[(6)] = c__13884__auto___15831);

return statearr_14159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
});})(__15817,c__13884__auto___15831,G__14107_15818,G__14107_15819__$1,n__5636__auto___15816,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14107_15819__$1)].join('')));

}

var G__15841 = (__15817 + (1));
__15817 = G__15841;
continue;
} else {
}
break;
}

var c__13884__auto___15842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14181){
var state_val_14182 = (state_14181[(1)]);
if((state_val_14182 === (7))){
var inst_14177 = (state_14181[(2)]);
var state_14181__$1 = state_14181;
var statearr_14189_15843 = state_14181__$1;
(statearr_14189_15843[(2)] = inst_14177);

(statearr_14189_15843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (1))){
var state_14181__$1 = state_14181;
var statearr_14190_15844 = state_14181__$1;
(statearr_14190_15844[(2)] = null);

(statearr_14190_15844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (4))){
var inst_14162 = (state_14181[(7)]);
var inst_14162__$1 = (state_14181[(2)]);
var inst_14163 = (inst_14162__$1 == null);
var state_14181__$1 = (function (){var statearr_14191 = state_14181;
(statearr_14191[(7)] = inst_14162__$1);

return statearr_14191;
})();
if(cljs.core.truth_(inst_14163)){
var statearr_14192_15845 = state_14181__$1;
(statearr_14192_15845[(1)] = (5));

} else {
var statearr_14193_15846 = state_14181__$1;
(statearr_14193_15846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (6))){
var inst_14167 = (state_14181[(8)]);
var inst_14162 = (state_14181[(7)]);
var inst_14167__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14169 = [inst_14162,inst_14167__$1];
var inst_14170 = (new cljs.core.PersistentVector(null,2,(5),inst_14168,inst_14169,null));
var state_14181__$1 = (function (){var statearr_14194 = state_14181;
(statearr_14194[(8)] = inst_14167__$1);

return statearr_14194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14181__$1,(8),jobs,inst_14170);
} else {
if((state_val_14182 === (3))){
var inst_14179 = (state_14181[(2)]);
var state_14181__$1 = state_14181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14181__$1,inst_14179);
} else {
if((state_val_14182 === (2))){
var state_14181__$1 = state_14181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14181__$1,(4),from);
} else {
if((state_val_14182 === (9))){
var inst_14174 = (state_14181[(2)]);
var state_14181__$1 = (function (){var statearr_14197 = state_14181;
(statearr_14197[(9)] = inst_14174);

return statearr_14197;
})();
var statearr_14198_15847 = state_14181__$1;
(statearr_14198_15847[(2)] = null);

(statearr_14198_15847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (5))){
var inst_14165 = cljs.core.async.close_BANG_(jobs);
var state_14181__$1 = state_14181;
var statearr_14199_15848 = state_14181__$1;
(statearr_14199_15848[(2)] = inst_14165);

(statearr_14199_15848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (8))){
var inst_14167 = (state_14181[(8)]);
var inst_14172 = (state_14181[(2)]);
var state_14181__$1 = (function (){var statearr_14200 = state_14181;
(statearr_14200[(10)] = inst_14172);

return statearr_14200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14181__$1,(9),results,inst_14167);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_14201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__);

(statearr_14201[(1)] = (1));

return statearr_14201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1 = (function (state_14181){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14181);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14202){var ex__13827__auto__ = e14202;
var statearr_14203_15849 = state_14181;
(statearr_14203_15849[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14181[(4)]))){
var statearr_14204_15850 = state_14181;
(statearr_14204_15850[(1)] = cljs.core.first((state_14181[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15851 = state_14181;
state_14181 = G__15851;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = function(state_14181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1.call(this,state_14181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14205 = f__13885__auto__();
(statearr_14205[(6)] = c__13884__auto___15842);

return statearr_14205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


var c__13884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14243){
var state_val_14244 = (state_14243[(1)]);
if((state_val_14244 === (7))){
var inst_14239 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14245_15852 = state_14243__$1;
(statearr_14245_15852[(2)] = inst_14239);

(statearr_14245_15852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (20))){
var state_14243__$1 = state_14243;
var statearr_14250_15853 = state_14243__$1;
(statearr_14250_15853[(2)] = null);

(statearr_14250_15853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (1))){
var state_14243__$1 = state_14243;
var statearr_14255_15854 = state_14243__$1;
(statearr_14255_15854[(2)] = null);

(statearr_14255_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (4))){
var inst_14208 = (state_14243[(7)]);
var inst_14208__$1 = (state_14243[(2)]);
var inst_14209 = (inst_14208__$1 == null);
var state_14243__$1 = (function (){var statearr_14260 = state_14243;
(statearr_14260[(7)] = inst_14208__$1);

return statearr_14260;
})();
if(cljs.core.truth_(inst_14209)){
var statearr_14261_15855 = state_14243__$1;
(statearr_14261_15855[(1)] = (5));

} else {
var statearr_14262_15856 = state_14243__$1;
(statearr_14262_15856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (15))){
var inst_14221 = (state_14243[(8)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14243__$1,(18),to,inst_14221);
} else {
if((state_val_14244 === (21))){
var inst_14234 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14263_15857 = state_14243__$1;
(statearr_14263_15857[(2)] = inst_14234);

(statearr_14263_15857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (13))){
var inst_14236 = (state_14243[(2)]);
var state_14243__$1 = (function (){var statearr_14264 = state_14243;
(statearr_14264[(9)] = inst_14236);

return statearr_14264;
})();
var statearr_14265_15858 = state_14243__$1;
(statearr_14265_15858[(2)] = null);

(statearr_14265_15858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (6))){
var inst_14208 = (state_14243[(7)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14243__$1,(11),inst_14208);
} else {
if((state_val_14244 === (17))){
var inst_14229 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
if(cljs.core.truth_(inst_14229)){
var statearr_14266_15859 = state_14243__$1;
(statearr_14266_15859[(1)] = (19));

} else {
var statearr_14267_15860 = state_14243__$1;
(statearr_14267_15860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (3))){
var inst_14241 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14243__$1,inst_14241);
} else {
if((state_val_14244 === (12))){
var inst_14218 = (state_14243[(10)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14243__$1,(14),inst_14218);
} else {
if((state_val_14244 === (2))){
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14243__$1,(4),results);
} else {
if((state_val_14244 === (19))){
var state_14243__$1 = state_14243;
var statearr_14268_15861 = state_14243__$1;
(statearr_14268_15861[(2)] = null);

(statearr_14268_15861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (11))){
var inst_14218 = (state_14243[(2)]);
var state_14243__$1 = (function (){var statearr_14269 = state_14243;
(statearr_14269[(10)] = inst_14218);

return statearr_14269;
})();
var statearr_14270_15862 = state_14243__$1;
(statearr_14270_15862[(2)] = null);

(statearr_14270_15862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (9))){
var state_14243__$1 = state_14243;
var statearr_14271_15863 = state_14243__$1;
(statearr_14271_15863[(2)] = null);

(statearr_14271_15863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (5))){
var state_14243__$1 = state_14243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14272_15864 = state_14243__$1;
(statearr_14272_15864[(1)] = (8));

} else {
var statearr_14273_15865 = state_14243__$1;
(statearr_14273_15865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (14))){
var inst_14223 = (state_14243[(11)]);
var inst_14221 = (state_14243[(8)]);
var inst_14221__$1 = (state_14243[(2)]);
var inst_14222 = (inst_14221__$1 == null);
var inst_14223__$1 = cljs.core.not(inst_14222);
var state_14243__$1 = (function (){var statearr_14274 = state_14243;
(statearr_14274[(11)] = inst_14223__$1);

(statearr_14274[(8)] = inst_14221__$1);

return statearr_14274;
})();
if(inst_14223__$1){
var statearr_14275_15866 = state_14243__$1;
(statearr_14275_15866[(1)] = (15));

} else {
var statearr_14276_15867 = state_14243__$1;
(statearr_14276_15867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (16))){
var inst_14223 = (state_14243[(11)]);
var state_14243__$1 = state_14243;
var statearr_14277_15868 = state_14243__$1;
(statearr_14277_15868[(2)] = inst_14223);

(statearr_14277_15868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (10))){
var inst_14215 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14278_15869 = state_14243__$1;
(statearr_14278_15869[(2)] = inst_14215);

(statearr_14278_15869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (18))){
var inst_14226 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14280_15870 = state_14243__$1;
(statearr_14280_15870[(2)] = inst_14226);

(statearr_14280_15870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (8))){
var inst_14212 = cljs.core.async.close_BANG_(to);
var state_14243__$1 = state_14243;
var statearr_14281_15871 = state_14243__$1;
(statearr_14281_15871[(2)] = inst_14212);

(statearr_14281_15871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_14282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__);

(statearr_14282[(1)] = (1));

return statearr_14282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1 = (function (state_14243){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14243);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14283){var ex__13827__auto__ = e14283;
var statearr_14284_15872 = state_14243;
(statearr_14284_15872[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14243[(4)]))){
var statearr_14285_15873 = state_14243;
(statearr_14285_15873[(1)] = cljs.core.first((state_14243[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15874 = state_14243;
state_14243 = G__15874;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__ = function(state_14243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1.call(this,state_14243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14286 = f__13885__auto__();
(statearr_14286[(6)] = c__13884__auto__);

return statearr_14286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

return c__13884__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14288 = arguments.length;
switch (G__14288) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14292 = arguments.length;
switch (G__14292) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14298 = arguments.length;
switch (G__14298) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13884__auto___15878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14328){
var state_val_14329 = (state_14328[(1)]);
if((state_val_14329 === (7))){
var inst_14324 = (state_14328[(2)]);
var state_14328__$1 = state_14328;
var statearr_14331_15879 = state_14328__$1;
(statearr_14331_15879[(2)] = inst_14324);

(statearr_14331_15879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (1))){
var state_14328__$1 = state_14328;
var statearr_14332_15880 = state_14328__$1;
(statearr_14332_15880[(2)] = null);

(statearr_14332_15880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (4))){
var inst_14305 = (state_14328[(7)]);
var inst_14305__$1 = (state_14328[(2)]);
var inst_14306 = (inst_14305__$1 == null);
var state_14328__$1 = (function (){var statearr_14333 = state_14328;
(statearr_14333[(7)] = inst_14305__$1);

return statearr_14333;
})();
if(cljs.core.truth_(inst_14306)){
var statearr_14334_15881 = state_14328__$1;
(statearr_14334_15881[(1)] = (5));

} else {
var statearr_14335_15882 = state_14328__$1;
(statearr_14335_15882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (13))){
var state_14328__$1 = state_14328;
var statearr_14336_15883 = state_14328__$1;
(statearr_14336_15883[(2)] = null);

(statearr_14336_15883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (6))){
var inst_14305 = (state_14328[(7)]);
var inst_14311 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14305) : p.call(null,inst_14305));
var state_14328__$1 = state_14328;
if(cljs.core.truth_(inst_14311)){
var statearr_14337_15884 = state_14328__$1;
(statearr_14337_15884[(1)] = (9));

} else {
var statearr_14338_15885 = state_14328__$1;
(statearr_14338_15885[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (3))){
var inst_14326 = (state_14328[(2)]);
var state_14328__$1 = state_14328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14328__$1,inst_14326);
} else {
if((state_val_14329 === (12))){
var state_14328__$1 = state_14328;
var statearr_14339_15886 = state_14328__$1;
(statearr_14339_15886[(2)] = null);

(statearr_14339_15886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (2))){
var state_14328__$1 = state_14328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14328__$1,(4),ch);
} else {
if((state_val_14329 === (11))){
var inst_14305 = (state_14328[(7)]);
var inst_14315 = (state_14328[(2)]);
var state_14328__$1 = state_14328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14328__$1,(8),inst_14315,inst_14305);
} else {
if((state_val_14329 === (9))){
var state_14328__$1 = state_14328;
var statearr_14340_15887 = state_14328__$1;
(statearr_14340_15887[(2)] = tc);

(statearr_14340_15887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (5))){
var inst_14308 = cljs.core.async.close_BANG_(tc);
var inst_14309 = cljs.core.async.close_BANG_(fc);
var state_14328__$1 = (function (){var statearr_14341 = state_14328;
(statearr_14341[(8)] = inst_14308);

return statearr_14341;
})();
var statearr_14342_15888 = state_14328__$1;
(statearr_14342_15888[(2)] = inst_14309);

(statearr_14342_15888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (14))){
var inst_14322 = (state_14328[(2)]);
var state_14328__$1 = state_14328;
var statearr_14343_15889 = state_14328__$1;
(statearr_14343_15889[(2)] = inst_14322);

(statearr_14343_15889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (10))){
var state_14328__$1 = state_14328;
var statearr_14344_15890 = state_14328__$1;
(statearr_14344_15890[(2)] = fc);

(statearr_14344_15890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14329 === (8))){
var inst_14317 = (state_14328[(2)]);
var state_14328__$1 = state_14328;
if(cljs.core.truth_(inst_14317)){
var statearr_14345_15891 = state_14328__$1;
(statearr_14345_15891[(1)] = (12));

} else {
var statearr_14346_15892 = state_14328__$1;
(statearr_14346_15892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_14347 = [null,null,null,null,null,null,null,null,null];
(statearr_14347[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_14347[(1)] = (1));

return statearr_14347;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_14328){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14328);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14348){var ex__13827__auto__ = e14348;
var statearr_14349_15893 = state_14328;
(statearr_14349_15893[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14328[(4)]))){
var statearr_14350_15894 = state_14328;
(statearr_14350_15894[(1)] = cljs.core.first((state_14328[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15895 = state_14328;
state_14328 = G__15895;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_14328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_14328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14351 = f__13885__auto__();
(statearr_14351[(6)] = c__13884__auto___15878);

return statearr_14351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14385){
var state_val_14386 = (state_14385[(1)]);
if((state_val_14386 === (7))){
var inst_14381 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14387_15896 = state_14385__$1;
(statearr_14387_15896[(2)] = inst_14381);

(statearr_14387_15896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (1))){
var inst_14360 = init;
var inst_14361 = inst_14360;
var state_14385__$1 = (function (){var statearr_14388 = state_14385;
(statearr_14388[(7)] = inst_14361);

return statearr_14388;
})();
var statearr_14389_15897 = state_14385__$1;
(statearr_14389_15897[(2)] = null);

(statearr_14389_15897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (4))){
var inst_14364 = (state_14385[(8)]);
var inst_14364__$1 = (state_14385[(2)]);
var inst_14365 = (inst_14364__$1 == null);
var state_14385__$1 = (function (){var statearr_14390 = state_14385;
(statearr_14390[(8)] = inst_14364__$1);

return statearr_14390;
})();
if(cljs.core.truth_(inst_14365)){
var statearr_14391_15898 = state_14385__$1;
(statearr_14391_15898[(1)] = (5));

} else {
var statearr_14392_15899 = state_14385__$1;
(statearr_14392_15899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (6))){
var inst_14372 = (state_14385[(9)]);
var inst_14364 = (state_14385[(8)]);
var inst_14361 = (state_14385[(7)]);
var inst_14372__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14361,inst_14364) : f.call(null,inst_14361,inst_14364));
var inst_14373 = cljs.core.reduced_QMARK_(inst_14372__$1);
var state_14385__$1 = (function (){var statearr_14393 = state_14385;
(statearr_14393[(9)] = inst_14372__$1);

return statearr_14393;
})();
if(inst_14373){
var statearr_14394_15900 = state_14385__$1;
(statearr_14394_15900[(1)] = (8));

} else {
var statearr_14395_15901 = state_14385__$1;
(statearr_14395_15901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (3))){
var inst_14383 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14385__$1,inst_14383);
} else {
if((state_val_14386 === (2))){
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14385__$1,(4),ch);
} else {
if((state_val_14386 === (9))){
var inst_14372 = (state_14385[(9)]);
var inst_14361 = inst_14372;
var state_14385__$1 = (function (){var statearr_14396 = state_14385;
(statearr_14396[(7)] = inst_14361);

return statearr_14396;
})();
var statearr_14397_15902 = state_14385__$1;
(statearr_14397_15902[(2)] = null);

(statearr_14397_15902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (5))){
var inst_14361 = (state_14385[(7)]);
var state_14385__$1 = state_14385;
var statearr_14399_15903 = state_14385__$1;
(statearr_14399_15903[(2)] = inst_14361);

(statearr_14399_15903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (10))){
var inst_14379 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14400_15904 = state_14385__$1;
(statearr_14400_15904[(2)] = inst_14379);

(statearr_14400_15904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (8))){
var inst_14372 = (state_14385[(9)]);
var inst_14375 = cljs.core.deref(inst_14372);
var state_14385__$1 = state_14385;
var statearr_14401_15905 = state_14385__$1;
(statearr_14401_15905[(2)] = inst_14375);

(statearr_14401_15905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13824__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13824__auto____0 = (function (){
var statearr_14402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14402[(0)] = cljs$core$async$reduce_$_state_machine__13824__auto__);

(statearr_14402[(1)] = (1));

return statearr_14402;
});
var cljs$core$async$reduce_$_state_machine__13824__auto____1 = (function (state_14385){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14385);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14403){var ex__13827__auto__ = e14403;
var statearr_14404_15906 = state_14385;
(statearr_14404_15906[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14385[(4)]))){
var statearr_14405_15907 = state_14385;
(statearr_14405_15907[(1)] = cljs.core.first((state_14385[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15908 = state_14385;
state_14385 = G__15908;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13824__auto__ = function(state_14385){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13824__auto____1.call(this,state_14385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13824__auto____0;
cljs$core$async$reduce_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13824__auto____1;
return cljs$core$async$reduce_$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14406 = f__13885__auto__();
(statearr_14406[(6)] = c__13884__auto__);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

return c__13884__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14412){
var state_val_14413 = (state_14412[(1)]);
if((state_val_14413 === (1))){
var inst_14407 = cljs.core.async.reduce(f__$1,init,ch);
var state_14412__$1 = state_14412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14412__$1,(2),inst_14407);
} else {
if((state_val_14413 === (2))){
var inst_14409 = (state_14412[(2)]);
var inst_14410 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14409) : f__$1.call(null,inst_14409));
var state_14412__$1 = state_14412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14412__$1,inst_14410);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13824__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13824__auto____0 = (function (){
var statearr_14414 = [null,null,null,null,null,null,null];
(statearr_14414[(0)] = cljs$core$async$transduce_$_state_machine__13824__auto__);

(statearr_14414[(1)] = (1));

return statearr_14414;
});
var cljs$core$async$transduce_$_state_machine__13824__auto____1 = (function (state_14412){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14412);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14415){var ex__13827__auto__ = e14415;
var statearr_14416_15909 = state_14412;
(statearr_14416_15909[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14412[(4)]))){
var statearr_14417_15910 = state_14412;
(statearr_14417_15910[(1)] = cljs.core.first((state_14412[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15911 = state_14412;
state_14412 = G__15911;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13824__auto__ = function(state_14412){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13824__auto____1.call(this,state_14412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13824__auto____0;
cljs$core$async$transduce_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13824__auto____1;
return cljs$core$async$transduce_$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14418 = f__13885__auto__();
(statearr_14418[(6)] = c__13884__auto__);

return statearr_14418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

return c__13884__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14422 = arguments.length;
switch (G__14422) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14456){
var state_val_14457 = (state_14456[(1)]);
if((state_val_14457 === (7))){
var inst_14438 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14461_15913 = state_14456__$1;
(statearr_14461_15913[(2)] = inst_14438);

(statearr_14461_15913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (1))){
var inst_14430 = cljs.core.seq(coll);
var inst_14432 = inst_14430;
var state_14456__$1 = (function (){var statearr_14462 = state_14456;
(statearr_14462[(7)] = inst_14432);

return statearr_14462;
})();
var statearr_14463_15914 = state_14456__$1;
(statearr_14463_15914[(2)] = null);

(statearr_14463_15914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (4))){
var inst_14432 = (state_14456[(7)]);
var inst_14436 = cljs.core.first(inst_14432);
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14456__$1,(7),ch,inst_14436);
} else {
if((state_val_14457 === (13))){
var inst_14450 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14465_15915 = state_14456__$1;
(statearr_14465_15915[(2)] = inst_14450);

(statearr_14465_15915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (6))){
var inst_14441 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
if(cljs.core.truth_(inst_14441)){
var statearr_14466_15916 = state_14456__$1;
(statearr_14466_15916[(1)] = (8));

} else {
var statearr_14467_15917 = state_14456__$1;
(statearr_14467_15917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (3))){
var inst_14454 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14456__$1,inst_14454);
} else {
if((state_val_14457 === (12))){
var state_14456__$1 = state_14456;
var statearr_14468_15918 = state_14456__$1;
(statearr_14468_15918[(2)] = null);

(statearr_14468_15918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (2))){
var inst_14432 = (state_14456[(7)]);
var state_14456__$1 = state_14456;
if(cljs.core.truth_(inst_14432)){
var statearr_14469_15919 = state_14456__$1;
(statearr_14469_15919[(1)] = (4));

} else {
var statearr_14470_15920 = state_14456__$1;
(statearr_14470_15920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (11))){
var inst_14447 = cljs.core.async.close_BANG_(ch);
var state_14456__$1 = state_14456;
var statearr_14471_15921 = state_14456__$1;
(statearr_14471_15921[(2)] = inst_14447);

(statearr_14471_15921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (9))){
var state_14456__$1 = state_14456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14472_15922 = state_14456__$1;
(statearr_14472_15922[(1)] = (11));

} else {
var statearr_14473_15923 = state_14456__$1;
(statearr_14473_15923[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (5))){
var inst_14432 = (state_14456[(7)]);
var state_14456__$1 = state_14456;
var statearr_14474_15924 = state_14456__$1;
(statearr_14474_15924[(2)] = inst_14432);

(statearr_14474_15924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (10))){
var inst_14452 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14475_15925 = state_14456__$1;
(statearr_14475_15925[(2)] = inst_14452);

(statearr_14475_15925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (8))){
var inst_14432 = (state_14456[(7)]);
var inst_14443 = cljs.core.next(inst_14432);
var inst_14432__$1 = inst_14443;
var state_14456__$1 = (function (){var statearr_14476 = state_14456;
(statearr_14476[(7)] = inst_14432__$1);

return statearr_14476;
})();
var statearr_14477_15926 = state_14456__$1;
(statearr_14477_15926[(2)] = null);

(statearr_14477_15926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_14479 = [null,null,null,null,null,null,null,null];
(statearr_14479[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_14479[(1)] = (1));

return statearr_14479;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_14456){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14456);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14481){var ex__13827__auto__ = e14481;
var statearr_14482_15927 = state_14456;
(statearr_14482_15927[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14456[(4)]))){
var statearr_14483_15928 = state_14456;
(statearr_14483_15928[(1)] = cljs.core.first((state_14456[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15929 = state_14456;
state_14456 = G__15929;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14486 = f__13885__auto__();
(statearr_14486[(6)] = c__13884__auto__);

return statearr_14486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

return c__13884__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15931 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15931(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15932 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15932(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15933 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15933(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15934 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15934(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14508 = (function (ch,cs,meta14509){
this.ch = ch;
this.cs = cs;
this.meta14509 = meta14509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14510,meta14509__$1){
var self__ = this;
var _14510__$1 = this;
return (new cljs.core.async.t_cljs$core$async14508(self__.ch,self__.cs,meta14509__$1));
}));

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14510){
var self__ = this;
var _14510__$1 = this;
return self__.meta14509;
}));

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14508.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14509","meta14509",-1504122535,null)], null);
}));

(cljs.core.async.t_cljs$core$async14508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14508");

(cljs.core.async.t_cljs$core$async14508.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14508.
 */
cljs.core.async.__GT_t_cljs$core$async14508 = (function cljs$core$async$__GT_t_cljs$core$async14508(ch,cs,meta14509){
return (new cljs.core.async.t_cljs$core$async14508(ch,cs,meta14509));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14508(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13884__auto___15935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14647){
var state_val_14648 = (state_14647[(1)]);
if((state_val_14648 === (7))){
var inst_14643 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14651_15936 = state_14647__$1;
(statearr_14651_15936[(2)] = inst_14643);

(statearr_14651_15936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (20))){
var inst_14546 = (state_14647[(7)]);
var inst_14558 = cljs.core.first(inst_14546);
var inst_14559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14558,(0),null);
var inst_14560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14558,(1),null);
var state_14647__$1 = (function (){var statearr_14652 = state_14647;
(statearr_14652[(8)] = inst_14559);

return statearr_14652;
})();
if(cljs.core.truth_(inst_14560)){
var statearr_14653_15937 = state_14647__$1;
(statearr_14653_15937[(1)] = (22));

} else {
var statearr_14654_15938 = state_14647__$1;
(statearr_14654_15938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (27))){
var inst_14588 = (state_14647[(9)]);
var inst_14595 = (state_14647[(10)]);
var inst_14515 = (state_14647[(11)]);
var inst_14590 = (state_14647[(12)]);
var inst_14595__$1 = cljs.core._nth(inst_14588,inst_14590);
var inst_14596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14595__$1,inst_14515,done);
var state_14647__$1 = (function (){var statearr_14657 = state_14647;
(statearr_14657[(10)] = inst_14595__$1);

return statearr_14657;
})();
if(cljs.core.truth_(inst_14596)){
var statearr_14658_15939 = state_14647__$1;
(statearr_14658_15939[(1)] = (30));

} else {
var statearr_14659_15940 = state_14647__$1;
(statearr_14659_15940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (1))){
var state_14647__$1 = state_14647;
var statearr_14660_15941 = state_14647__$1;
(statearr_14660_15941[(2)] = null);

(statearr_14660_15941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (24))){
var inst_14546 = (state_14647[(7)]);
var inst_14565 = (state_14647[(2)]);
var inst_14566 = cljs.core.next(inst_14546);
var inst_14524 = inst_14566;
var inst_14525 = null;
var inst_14526 = (0);
var inst_14527 = (0);
var state_14647__$1 = (function (){var statearr_14661 = state_14647;
(statearr_14661[(13)] = inst_14565);

(statearr_14661[(14)] = inst_14525);

(statearr_14661[(15)] = inst_14524);

(statearr_14661[(16)] = inst_14526);

(statearr_14661[(17)] = inst_14527);

return statearr_14661;
})();
var statearr_14664_15942 = state_14647__$1;
(statearr_14664_15942[(2)] = null);

(statearr_14664_15942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (39))){
var state_14647__$1 = state_14647;
var statearr_14668_15943 = state_14647__$1;
(statearr_14668_15943[(2)] = null);

(statearr_14668_15943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (4))){
var inst_14515 = (state_14647[(11)]);
var inst_14515__$1 = (state_14647[(2)]);
var inst_14516 = (inst_14515__$1 == null);
var state_14647__$1 = (function (){var statearr_14669 = state_14647;
(statearr_14669[(11)] = inst_14515__$1);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14516)){
var statearr_14670_15944 = state_14647__$1;
(statearr_14670_15944[(1)] = (5));

} else {
var statearr_14671_15945 = state_14647__$1;
(statearr_14671_15945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (15))){
var inst_14525 = (state_14647[(14)]);
var inst_14524 = (state_14647[(15)]);
var inst_14526 = (state_14647[(16)]);
var inst_14527 = (state_14647[(17)]);
var inst_14542 = (state_14647[(2)]);
var inst_14543 = (inst_14527 + (1));
var tmp14665 = inst_14525;
var tmp14666 = inst_14524;
var tmp14667 = inst_14526;
var inst_14524__$1 = tmp14666;
var inst_14525__$1 = tmp14665;
var inst_14526__$1 = tmp14667;
var inst_14527__$1 = inst_14543;
var state_14647__$1 = (function (){var statearr_14672 = state_14647;
(statearr_14672[(14)] = inst_14525__$1);

(statearr_14672[(15)] = inst_14524__$1);

(statearr_14672[(16)] = inst_14526__$1);

(statearr_14672[(18)] = inst_14542);

(statearr_14672[(17)] = inst_14527__$1);

return statearr_14672;
})();
var statearr_14673_15946 = state_14647__$1;
(statearr_14673_15946[(2)] = null);

(statearr_14673_15946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (21))){
var inst_14569 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14677_15947 = state_14647__$1;
(statearr_14677_15947[(2)] = inst_14569);

(statearr_14677_15947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (31))){
var inst_14595 = (state_14647[(10)]);
var inst_14599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14595);
var state_14647__$1 = state_14647;
var statearr_14678_15948 = state_14647__$1;
(statearr_14678_15948[(2)] = inst_14599);

(statearr_14678_15948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (32))){
var inst_14589 = (state_14647[(19)]);
var inst_14588 = (state_14647[(9)]);
var inst_14587 = (state_14647[(20)]);
var inst_14590 = (state_14647[(12)]);
var inst_14601 = (state_14647[(2)]);
var inst_14604 = (inst_14590 + (1));
var tmp14674 = inst_14589;
var tmp14675 = inst_14588;
var tmp14676 = inst_14587;
var inst_14587__$1 = tmp14676;
var inst_14588__$1 = tmp14675;
var inst_14589__$1 = tmp14674;
var inst_14590__$1 = inst_14604;
var state_14647__$1 = (function (){var statearr_14679 = state_14647;
(statearr_14679[(19)] = inst_14589__$1);

(statearr_14679[(9)] = inst_14588__$1);

(statearr_14679[(21)] = inst_14601);

(statearr_14679[(20)] = inst_14587__$1);

(statearr_14679[(12)] = inst_14590__$1);

return statearr_14679;
})();
var statearr_14683_15949 = state_14647__$1;
(statearr_14683_15949[(2)] = null);

(statearr_14683_15949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (40))){
var inst_14616 = (state_14647[(22)]);
var inst_14620 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14616);
var state_14647__$1 = state_14647;
var statearr_14684_15950 = state_14647__$1;
(statearr_14684_15950[(2)] = inst_14620);

(statearr_14684_15950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (33))){
var inst_14607 = (state_14647[(23)]);
var inst_14609 = cljs.core.chunked_seq_QMARK_(inst_14607);
var state_14647__$1 = state_14647;
if(inst_14609){
var statearr_14686_15951 = state_14647__$1;
(statearr_14686_15951[(1)] = (36));

} else {
var statearr_14687_15952 = state_14647__$1;
(statearr_14687_15952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (13))){
var inst_14536 = (state_14647[(24)]);
var inst_14539 = cljs.core.async.close_BANG_(inst_14536);
var state_14647__$1 = state_14647;
var statearr_14689_15953 = state_14647__$1;
(statearr_14689_15953[(2)] = inst_14539);

(statearr_14689_15953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (22))){
var inst_14559 = (state_14647[(8)]);
var inst_14562 = cljs.core.async.close_BANG_(inst_14559);
var state_14647__$1 = state_14647;
var statearr_14690_15954 = state_14647__$1;
(statearr_14690_15954[(2)] = inst_14562);

(statearr_14690_15954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (36))){
var inst_14607 = (state_14647[(23)]);
var inst_14611 = cljs.core.chunk_first(inst_14607);
var inst_14612 = cljs.core.chunk_rest(inst_14607);
var inst_14613 = cljs.core.count(inst_14611);
var inst_14587 = inst_14612;
var inst_14588 = inst_14611;
var inst_14589 = inst_14613;
var inst_14590 = (0);
var state_14647__$1 = (function (){var statearr_14691 = state_14647;
(statearr_14691[(19)] = inst_14589);

(statearr_14691[(9)] = inst_14588);

(statearr_14691[(20)] = inst_14587);

(statearr_14691[(12)] = inst_14590);

return statearr_14691;
})();
var statearr_14692_15955 = state_14647__$1;
(statearr_14692_15955[(2)] = null);

(statearr_14692_15955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (41))){
var inst_14607 = (state_14647[(23)]);
var inst_14622 = (state_14647[(2)]);
var inst_14623 = cljs.core.next(inst_14607);
var inst_14587 = inst_14623;
var inst_14588 = null;
var inst_14589 = (0);
var inst_14590 = (0);
var state_14647__$1 = (function (){var statearr_14694 = state_14647;
(statearr_14694[(19)] = inst_14589);

(statearr_14694[(25)] = inst_14622);

(statearr_14694[(9)] = inst_14588);

(statearr_14694[(20)] = inst_14587);

(statearr_14694[(12)] = inst_14590);

return statearr_14694;
})();
var statearr_14695_15956 = state_14647__$1;
(statearr_14695_15956[(2)] = null);

(statearr_14695_15956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (43))){
var state_14647__$1 = state_14647;
var statearr_14700_15957 = state_14647__$1;
(statearr_14700_15957[(2)] = null);

(statearr_14700_15957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (29))){
var inst_14631 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14701_15958 = state_14647__$1;
(statearr_14701_15958[(2)] = inst_14631);

(statearr_14701_15958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (44))){
var inst_14640 = (state_14647[(2)]);
var state_14647__$1 = (function (){var statearr_14702 = state_14647;
(statearr_14702[(26)] = inst_14640);

return statearr_14702;
})();
var statearr_14703_15959 = state_14647__$1;
(statearr_14703_15959[(2)] = null);

(statearr_14703_15959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (6))){
var inst_14579 = (state_14647[(27)]);
var inst_14578 = cljs.core.deref(cs);
var inst_14579__$1 = cljs.core.keys(inst_14578);
var inst_14580 = cljs.core.count(inst_14579__$1);
var inst_14581 = cljs.core.reset_BANG_(dctr,inst_14580);
var inst_14586 = cljs.core.seq(inst_14579__$1);
var inst_14587 = inst_14586;
var inst_14588 = null;
var inst_14589 = (0);
var inst_14590 = (0);
var state_14647__$1 = (function (){var statearr_14704 = state_14647;
(statearr_14704[(19)] = inst_14589);

(statearr_14704[(9)] = inst_14588);

(statearr_14704[(20)] = inst_14587);

(statearr_14704[(12)] = inst_14590);

(statearr_14704[(28)] = inst_14581);

(statearr_14704[(27)] = inst_14579__$1);

return statearr_14704;
})();
var statearr_14705_15960 = state_14647__$1;
(statearr_14705_15960[(2)] = null);

(statearr_14705_15960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (28))){
var inst_14607 = (state_14647[(23)]);
var inst_14587 = (state_14647[(20)]);
var inst_14607__$1 = cljs.core.seq(inst_14587);
var state_14647__$1 = (function (){var statearr_14710 = state_14647;
(statearr_14710[(23)] = inst_14607__$1);

return statearr_14710;
})();
if(inst_14607__$1){
var statearr_14713_15961 = state_14647__$1;
(statearr_14713_15961[(1)] = (33));

} else {
var statearr_14714_15962 = state_14647__$1;
(statearr_14714_15962[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (25))){
var inst_14589 = (state_14647[(19)]);
var inst_14590 = (state_14647[(12)]);
var inst_14592 = (inst_14590 < inst_14589);
var inst_14593 = inst_14592;
var state_14647__$1 = state_14647;
if(cljs.core.truth_(inst_14593)){
var statearr_14721_15963 = state_14647__$1;
(statearr_14721_15963[(1)] = (27));

} else {
var statearr_14722_15964 = state_14647__$1;
(statearr_14722_15964[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (34))){
var state_14647__$1 = state_14647;
var statearr_14724_15965 = state_14647__$1;
(statearr_14724_15965[(2)] = null);

(statearr_14724_15965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (17))){
var state_14647__$1 = state_14647;
var statearr_14725_15966 = state_14647__$1;
(statearr_14725_15966[(2)] = null);

(statearr_14725_15966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (3))){
var inst_14645 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14647__$1,inst_14645);
} else {
if((state_val_14648 === (12))){
var inst_14574 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14729_15967 = state_14647__$1;
(statearr_14729_15967[(2)] = inst_14574);

(statearr_14729_15967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (2))){
var state_14647__$1 = state_14647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14647__$1,(4),ch);
} else {
if((state_val_14648 === (23))){
var state_14647__$1 = state_14647;
var statearr_14738_15968 = state_14647__$1;
(statearr_14738_15968[(2)] = null);

(statearr_14738_15968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (35))){
var inst_14629 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14744_15969 = state_14647__$1;
(statearr_14744_15969[(2)] = inst_14629);

(statearr_14744_15969[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (19))){
var inst_14546 = (state_14647[(7)]);
var inst_14550 = cljs.core.chunk_first(inst_14546);
var inst_14551 = cljs.core.chunk_rest(inst_14546);
var inst_14552 = cljs.core.count(inst_14550);
var inst_14524 = inst_14551;
var inst_14525 = inst_14550;
var inst_14526 = inst_14552;
var inst_14527 = (0);
var state_14647__$1 = (function (){var statearr_14745 = state_14647;
(statearr_14745[(14)] = inst_14525);

(statearr_14745[(15)] = inst_14524);

(statearr_14745[(16)] = inst_14526);

(statearr_14745[(17)] = inst_14527);

return statearr_14745;
})();
var statearr_14746_15970 = state_14647__$1;
(statearr_14746_15970[(2)] = null);

(statearr_14746_15970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (11))){
var inst_14524 = (state_14647[(15)]);
var inst_14546 = (state_14647[(7)]);
var inst_14546__$1 = cljs.core.seq(inst_14524);
var state_14647__$1 = (function (){var statearr_14747 = state_14647;
(statearr_14747[(7)] = inst_14546__$1);

return statearr_14747;
})();
if(inst_14546__$1){
var statearr_14748_15971 = state_14647__$1;
(statearr_14748_15971[(1)] = (16));

} else {
var statearr_14749_15972 = state_14647__$1;
(statearr_14749_15972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (9))){
var inst_14576 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14762_15973 = state_14647__$1;
(statearr_14762_15973[(2)] = inst_14576);

(statearr_14762_15973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (5))){
var inst_14522 = cljs.core.deref(cs);
var inst_14523 = cljs.core.seq(inst_14522);
var inst_14524 = inst_14523;
var inst_14525 = null;
var inst_14526 = (0);
var inst_14527 = (0);
var state_14647__$1 = (function (){var statearr_14764 = state_14647;
(statearr_14764[(14)] = inst_14525);

(statearr_14764[(15)] = inst_14524);

(statearr_14764[(16)] = inst_14526);

(statearr_14764[(17)] = inst_14527);

return statearr_14764;
})();
var statearr_14769_15974 = state_14647__$1;
(statearr_14769_15974[(2)] = null);

(statearr_14769_15974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (14))){
var state_14647__$1 = state_14647;
var statearr_14778_15975 = state_14647__$1;
(statearr_14778_15975[(2)] = null);

(statearr_14778_15975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (45))){
var inst_14637 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14779_15976 = state_14647__$1;
(statearr_14779_15976[(2)] = inst_14637);

(statearr_14779_15976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (26))){
var inst_14579 = (state_14647[(27)]);
var inst_14633 = (state_14647[(2)]);
var inst_14634 = cljs.core.seq(inst_14579);
var state_14647__$1 = (function (){var statearr_14780 = state_14647;
(statearr_14780[(29)] = inst_14633);

return statearr_14780;
})();
if(inst_14634){
var statearr_14781_15977 = state_14647__$1;
(statearr_14781_15977[(1)] = (42));

} else {
var statearr_14782_15978 = state_14647__$1;
(statearr_14782_15978[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (16))){
var inst_14546 = (state_14647[(7)]);
var inst_14548 = cljs.core.chunked_seq_QMARK_(inst_14546);
var state_14647__$1 = state_14647;
if(inst_14548){
var statearr_14786_15979 = state_14647__$1;
(statearr_14786_15979[(1)] = (19));

} else {
var statearr_14787_15980 = state_14647__$1;
(statearr_14787_15980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (38))){
var inst_14626 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14789_15981 = state_14647__$1;
(statearr_14789_15981[(2)] = inst_14626);

(statearr_14789_15981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (30))){
var state_14647__$1 = state_14647;
var statearr_14790_15982 = state_14647__$1;
(statearr_14790_15982[(2)] = null);

(statearr_14790_15982[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (10))){
var inst_14525 = (state_14647[(14)]);
var inst_14527 = (state_14647[(17)]);
var inst_14535 = cljs.core._nth(inst_14525,inst_14527);
var inst_14536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14535,(0),null);
var inst_14537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14535,(1),null);
var state_14647__$1 = (function (){var statearr_14795 = state_14647;
(statearr_14795[(24)] = inst_14536);

return statearr_14795;
})();
if(cljs.core.truth_(inst_14537)){
var statearr_14796_15983 = state_14647__$1;
(statearr_14796_15983[(1)] = (13));

} else {
var statearr_14805_15984 = state_14647__$1;
(statearr_14805_15984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (18))){
var inst_14572 = (state_14647[(2)]);
var state_14647__$1 = state_14647;
var statearr_14806_15985 = state_14647__$1;
(statearr_14806_15985[(2)] = inst_14572);

(statearr_14806_15985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (42))){
var state_14647__$1 = state_14647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14647__$1,(45),dchan);
} else {
if((state_val_14648 === (37))){
var inst_14607 = (state_14647[(23)]);
var inst_14515 = (state_14647[(11)]);
var inst_14616 = (state_14647[(22)]);
var inst_14616__$1 = cljs.core.first(inst_14607);
var inst_14617 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14616__$1,inst_14515,done);
var state_14647__$1 = (function (){var statearr_14814 = state_14647;
(statearr_14814[(22)] = inst_14616__$1);

return statearr_14814;
})();
if(cljs.core.truth_(inst_14617)){
var statearr_14817_15986 = state_14647__$1;
(statearr_14817_15986[(1)] = (39));

} else {
var statearr_14819_15987 = state_14647__$1;
(statearr_14819_15987[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14648 === (8))){
var inst_14526 = (state_14647[(16)]);
var inst_14527 = (state_14647[(17)]);
var inst_14529 = (inst_14527 < inst_14526);
var inst_14530 = inst_14529;
var state_14647__$1 = state_14647;
if(cljs.core.truth_(inst_14530)){
var statearr_14820_15988 = state_14647__$1;
(statearr_14820_15988[(1)] = (10));

} else {
var statearr_14821_15989 = state_14647__$1;
(statearr_14821_15989[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13824__auto__ = null;
var cljs$core$async$mult_$_state_machine__13824__auto____0 = (function (){
var statearr_14836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14836[(0)] = cljs$core$async$mult_$_state_machine__13824__auto__);

(statearr_14836[(1)] = (1));

return statearr_14836;
});
var cljs$core$async$mult_$_state_machine__13824__auto____1 = (function (state_14647){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14647);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14837){var ex__13827__auto__ = e14837;
var statearr_14838_15990 = state_14647;
(statearr_14838_15990[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14647[(4)]))){
var statearr_14839_15991 = state_14647;
(statearr_14839_15991[(1)] = cljs.core.first((state_14647[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15992 = state_14647;
state_14647 = G__15992;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13824__auto__ = function(state_14647){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13824__auto____1.call(this,state_14647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13824__auto____0;
cljs$core$async$mult_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13824__auto____1;
return cljs$core$async$mult_$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14840 = f__13885__auto__();
(statearr_14840[(6)] = c__13884__auto___15935);

return statearr_14840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14842 = arguments.length;
switch (G__14842) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_15994 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_15994(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15995 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_15995(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15996 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15996(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15997 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_15997(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15998 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15998(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15999 = arguments.length;
var i__5770__auto___16000 = (0);
while(true){
if((i__5770__auto___16000 < len__5769__auto___15999)){
args__5775__auto__.push((arguments[i__5770__auto___16000]));

var G__16001 = (i__5770__auto___16000 + (1));
i__5770__auto___16000 = G__16001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14856){
var map__14857 = p__14856;
var map__14857__$1 = cljs.core.__destructure_map(map__14857);
var opts = map__14857__$1;
var statearr_14858_16002 = state;
(statearr_14858_16002[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14859_16003 = state;
(statearr_14859_16003[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14860_16004 = state;
(statearr_14860_16004[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14852){
var G__14853 = cljs.core.first(seq14852);
var seq14852__$1 = cljs.core.next(seq14852);
var G__14854 = cljs.core.first(seq14852__$1);
var seq14852__$2 = cljs.core.next(seq14852__$1);
var G__14855 = cljs.core.first(seq14852__$2);
var seq14852__$3 = cljs.core.next(seq14852__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14853,G__14854,G__14855,seq14852__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14861 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14862){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14862 = meta14862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14863,meta14862__$1){
var self__ = this;
var _14863__$1 = this;
return (new cljs.core.async.t_cljs$core$async14861(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14862__$1));
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14863){
var self__ = this;
var _14863__$1 = this;
return self__.meta14862;
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14862","meta14862",-2076853571,null)], null);
}));

(cljs.core.async.t_cljs$core$async14861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14861");

(cljs.core.async.t_cljs$core$async14861.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14861.
 */
cljs.core.async.__GT_t_cljs$core$async14861 = (function cljs$core$async$__GT_t_cljs$core$async14861(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14862){
return (new cljs.core.async.t_cljs$core$async14861(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14862));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14861(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13884__auto___16005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_14931){
var state_val_14932 = (state_14931[(1)]);
if((state_val_14932 === (7))){
var inst_14891 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14891)){
var statearr_14933_16006 = state_14931__$1;
(statearr_14933_16006[(1)] = (8));

} else {
var statearr_14934_16007 = state_14931__$1;
(statearr_14934_16007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (20))){
var inst_14884 = (state_14931[(7)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14931__$1,(23),out,inst_14884);
} else {
if((state_val_14932 === (1))){
var inst_14867 = calc_state();
var inst_14868 = cljs.core.__destructure_map(inst_14867);
var inst_14869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14868,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14868,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14868,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14872 = inst_14867;
var state_14931__$1 = (function (){var statearr_14935 = state_14931;
(statearr_14935[(8)] = inst_14872);

(statearr_14935[(9)] = inst_14869);

(statearr_14935[(10)] = inst_14870);

(statearr_14935[(11)] = inst_14871);

return statearr_14935;
})();
var statearr_14936_16008 = state_14931__$1;
(statearr_14936_16008[(2)] = null);

(statearr_14936_16008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (24))){
var inst_14875 = (state_14931[(12)]);
var inst_14872 = inst_14875;
var state_14931__$1 = (function (){var statearr_14937 = state_14931;
(statearr_14937[(8)] = inst_14872);

return statearr_14937;
})();
var statearr_14938_16009 = state_14931__$1;
(statearr_14938_16009[(2)] = null);

(statearr_14938_16009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (4))){
var inst_14886 = (state_14931[(13)]);
var inst_14884 = (state_14931[(7)]);
var inst_14883 = (state_14931[(2)]);
var inst_14884__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14883,(0),null);
var inst_14885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14883,(1),null);
var inst_14886__$1 = (inst_14884__$1 == null);
var state_14931__$1 = (function (){var statearr_14939 = state_14931;
(statearr_14939[(13)] = inst_14886__$1);

(statearr_14939[(7)] = inst_14884__$1);

(statearr_14939[(14)] = inst_14885);

return statearr_14939;
})();
if(cljs.core.truth_(inst_14886__$1)){
var statearr_14940_16010 = state_14931__$1;
(statearr_14940_16010[(1)] = (5));

} else {
var statearr_14941_16011 = state_14931__$1;
(statearr_14941_16011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (15))){
var inst_14905 = (state_14931[(15)]);
var inst_14876 = (state_14931[(16)]);
var inst_14905__$1 = cljs.core.empty_QMARK_(inst_14876);
var state_14931__$1 = (function (){var statearr_14942 = state_14931;
(statearr_14942[(15)] = inst_14905__$1);

return statearr_14942;
})();
if(inst_14905__$1){
var statearr_14943_16012 = state_14931__$1;
(statearr_14943_16012[(1)] = (17));

} else {
var statearr_14944_16013 = state_14931__$1;
(statearr_14944_16013[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (21))){
var inst_14875 = (state_14931[(12)]);
var inst_14872 = inst_14875;
var state_14931__$1 = (function (){var statearr_14945 = state_14931;
(statearr_14945[(8)] = inst_14872);

return statearr_14945;
})();
var statearr_14946_16014 = state_14931__$1;
(statearr_14946_16014[(2)] = null);

(statearr_14946_16014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (13))){
var inst_14898 = (state_14931[(2)]);
var inst_14899 = calc_state();
var inst_14872 = inst_14899;
var state_14931__$1 = (function (){var statearr_14947 = state_14931;
(statearr_14947[(17)] = inst_14898);

(statearr_14947[(8)] = inst_14872);

return statearr_14947;
})();
var statearr_14948_16015 = state_14931__$1;
(statearr_14948_16015[(2)] = null);

(statearr_14948_16015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (22))){
var inst_14925 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14949_16016 = state_14931__$1;
(statearr_14949_16016[(2)] = inst_14925);

(statearr_14949_16016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (6))){
var inst_14885 = (state_14931[(14)]);
var inst_14889 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14885,change);
var state_14931__$1 = state_14931;
var statearr_14950_16017 = state_14931__$1;
(statearr_14950_16017[(2)] = inst_14889);

(statearr_14950_16017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (25))){
var state_14931__$1 = state_14931;
var statearr_14951_16018 = state_14931__$1;
(statearr_14951_16018[(2)] = null);

(statearr_14951_16018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (17))){
var inst_14885 = (state_14931[(14)]);
var inst_14877 = (state_14931[(18)]);
var inst_14907 = (inst_14877.cljs$core$IFn$_invoke$arity$1 ? inst_14877.cljs$core$IFn$_invoke$arity$1(inst_14885) : inst_14877.call(null,inst_14885));
var inst_14908 = cljs.core.not(inst_14907);
var state_14931__$1 = state_14931;
var statearr_14952_16019 = state_14931__$1;
(statearr_14952_16019[(2)] = inst_14908);

(statearr_14952_16019[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (3))){
var inst_14929 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14931__$1,inst_14929);
} else {
if((state_val_14932 === (12))){
var state_14931__$1 = state_14931;
var statearr_14953_16020 = state_14931__$1;
(statearr_14953_16020[(2)] = null);

(statearr_14953_16020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (2))){
var inst_14872 = (state_14931[(8)]);
var inst_14875 = (state_14931[(12)]);
var inst_14875__$1 = cljs.core.__destructure_map(inst_14872);
var inst_14876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14875__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14875__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14875__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14931__$1 = (function (){var statearr_14954 = state_14931;
(statearr_14954[(12)] = inst_14875__$1);

(statearr_14954[(18)] = inst_14877);

(statearr_14954[(16)] = inst_14876);

return statearr_14954;
})();
return cljs.core.async.ioc_alts_BANG_(state_14931__$1,(4),inst_14878);
} else {
if((state_val_14932 === (23))){
var inst_14916 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14916)){
var statearr_14955_16021 = state_14931__$1;
(statearr_14955_16021[(1)] = (24));

} else {
var statearr_14956_16022 = state_14931__$1;
(statearr_14956_16022[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (19))){
var inst_14911 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14957_16023 = state_14931__$1;
(statearr_14957_16023[(2)] = inst_14911);

(statearr_14957_16023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (11))){
var inst_14885 = (state_14931[(14)]);
var inst_14895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14885);
var state_14931__$1 = state_14931;
var statearr_14958_16024 = state_14931__$1;
(statearr_14958_16024[(2)] = inst_14895);

(statearr_14958_16024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (9))){
var inst_14902 = (state_14931[(19)]);
var inst_14885 = (state_14931[(14)]);
var inst_14876 = (state_14931[(16)]);
var inst_14902__$1 = (inst_14876.cljs$core$IFn$_invoke$arity$1 ? inst_14876.cljs$core$IFn$_invoke$arity$1(inst_14885) : inst_14876.call(null,inst_14885));
var state_14931__$1 = (function (){var statearr_14959 = state_14931;
(statearr_14959[(19)] = inst_14902__$1);

return statearr_14959;
})();
if(cljs.core.truth_(inst_14902__$1)){
var statearr_14960_16025 = state_14931__$1;
(statearr_14960_16025[(1)] = (14));

} else {
var statearr_14961_16026 = state_14931__$1;
(statearr_14961_16026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (5))){
var inst_14886 = (state_14931[(13)]);
var state_14931__$1 = state_14931;
var statearr_14962_16027 = state_14931__$1;
(statearr_14962_16027[(2)] = inst_14886);

(statearr_14962_16027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (14))){
var inst_14902 = (state_14931[(19)]);
var state_14931__$1 = state_14931;
var statearr_14963_16028 = state_14931__$1;
(statearr_14963_16028[(2)] = inst_14902);

(statearr_14963_16028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (26))){
var inst_14921 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14964_16029 = state_14931__$1;
(statearr_14964_16029[(2)] = inst_14921);

(statearr_14964_16029[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (16))){
var inst_14913 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14913)){
var statearr_14965_16030 = state_14931__$1;
(statearr_14965_16030[(1)] = (20));

} else {
var statearr_14966_16031 = state_14931__$1;
(statearr_14966_16031[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (10))){
var inst_14927 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14967_16032 = state_14931__$1;
(statearr_14967_16032[(2)] = inst_14927);

(statearr_14967_16032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (18))){
var inst_14905 = (state_14931[(15)]);
var state_14931__$1 = state_14931;
var statearr_14968_16033 = state_14931__$1;
(statearr_14968_16033[(2)] = inst_14905);

(statearr_14968_16033[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (8))){
var inst_14884 = (state_14931[(7)]);
var inst_14893 = (inst_14884 == null);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14893)){
var statearr_14969_16034 = state_14931__$1;
(statearr_14969_16034[(1)] = (11));

} else {
var statearr_14970_16035 = state_14931__$1;
(statearr_14970_16035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13824__auto__ = null;
var cljs$core$async$mix_$_state_machine__13824__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$mix_$_state_machine__13824__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$mix_$_state_machine__13824__auto____1 = (function (state_14931){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_14931);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e14972){var ex__13827__auto__ = e14972;
var statearr_14973_16036 = state_14931;
(statearr_14973_16036[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_14931[(4)]))){
var statearr_14974_16037 = state_14931;
(statearr_14974_16037[(1)] = cljs.core.first((state_14931[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16038 = state_14931;
state_14931 = G__16038;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13824__auto__ = function(state_14931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13824__auto____1.call(this,state_14931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13824__auto____0;
cljs$core$async$mix_$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13824__auto____1;
return cljs$core$async$mix_$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_14975 = f__13885__auto__();
(statearr_14975[(6)] = c__13884__auto___16005);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16039 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16039(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16040 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16040(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16041 = (function() {
var G__16042 = null;
var G__16042__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16042__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16042 = function(p,v){
switch(arguments.length){
case 1:
return G__16042__1.call(this,p);
case 2:
return G__16042__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16042.cljs$core$IFn$_invoke$arity$1 = G__16042__1;
G__16042.cljs$core$IFn$_invoke$arity$2 = G__16042__2;
return G__16042;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14981 = arguments.length;
switch (G__14981) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16041(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16041(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14986 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14987){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14987 = meta14987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14988,meta14987__$1){
var self__ = this;
var _14988__$1 = this;
return (new cljs.core.async.t_cljs$core$async14986(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14987__$1));
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14988){
var self__ = this;
var _14988__$1 = this;
return self__.meta14987;
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14986.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14987","meta14987",-1833897128,null)], null);
}));

(cljs.core.async.t_cljs$core$async14986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14986");

(cljs.core.async.t_cljs$core$async14986.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14986.
 */
cljs.core.async.__GT_t_cljs$core$async14986 = (function cljs$core$async$__GT_t_cljs$core$async14986(ch,topic_fn,buf_fn,mults,ensure_mult,meta14987){
return (new cljs.core.async.t_cljs$core$async14986(ch,topic_fn,buf_fn,mults,ensure_mult,meta14987));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14985 = arguments.length;
switch (G__14985) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14982_SHARP_){
if(cljs.core.truth_((p1__14982_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14982_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14982_SHARP_.call(null,topic)))){
return p1__14982_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14982_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14986(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13884__auto___16045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15065){
var state_val_15066 = (state_15065[(1)]);
if((state_val_15066 === (7))){
var inst_15061 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15067_16046 = state_15065__$1;
(statearr_15067_16046[(2)] = inst_15061);

(statearr_15067_16046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (20))){
var state_15065__$1 = state_15065;
var statearr_15068_16047 = state_15065__$1;
(statearr_15068_16047[(2)] = null);

(statearr_15068_16047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (1))){
var state_15065__$1 = state_15065;
var statearr_15069_16048 = state_15065__$1;
(statearr_15069_16048[(2)] = null);

(statearr_15069_16048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (24))){
var inst_15044 = (state_15065[(7)]);
var inst_15053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15044);
var state_15065__$1 = state_15065;
var statearr_15071_16049 = state_15065__$1;
(statearr_15071_16049[(2)] = inst_15053);

(statearr_15071_16049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (4))){
var inst_14995 = (state_15065[(8)]);
var inst_14995__$1 = (state_15065[(2)]);
var inst_14996 = (inst_14995__$1 == null);
var state_15065__$1 = (function (){var statearr_15072 = state_15065;
(statearr_15072[(8)] = inst_14995__$1);

return statearr_15072;
})();
if(cljs.core.truth_(inst_14996)){
var statearr_15073_16050 = state_15065__$1;
(statearr_15073_16050[(1)] = (5));

} else {
var statearr_15074_16051 = state_15065__$1;
(statearr_15074_16051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (15))){
var inst_15038 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15075_16052 = state_15065__$1;
(statearr_15075_16052[(2)] = inst_15038);

(statearr_15075_16052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (21))){
var inst_15058 = (state_15065[(2)]);
var state_15065__$1 = (function (){var statearr_15077 = state_15065;
(statearr_15077[(9)] = inst_15058);

return statearr_15077;
})();
var statearr_15078_16053 = state_15065__$1;
(statearr_15078_16053[(2)] = null);

(statearr_15078_16053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (13))){
var inst_15020 = (state_15065[(10)]);
var inst_15022 = cljs.core.chunked_seq_QMARK_(inst_15020);
var state_15065__$1 = state_15065;
if(inst_15022){
var statearr_15079_16054 = state_15065__$1;
(statearr_15079_16054[(1)] = (16));

} else {
var statearr_15080_16055 = state_15065__$1;
(statearr_15080_16055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (22))){
var inst_15050 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
if(cljs.core.truth_(inst_15050)){
var statearr_15081_16056 = state_15065__$1;
(statearr_15081_16056[(1)] = (23));

} else {
var statearr_15082_16057 = state_15065__$1;
(statearr_15082_16057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (6))){
var inst_14995 = (state_15065[(8)]);
var inst_15046 = (state_15065[(11)]);
var inst_15044 = (state_15065[(7)]);
var inst_15044__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14995) : topic_fn.call(null,inst_14995));
var inst_15045 = cljs.core.deref(mults);
var inst_15046__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15045,inst_15044__$1);
var state_15065__$1 = (function (){var statearr_15083 = state_15065;
(statearr_15083[(11)] = inst_15046__$1);

(statearr_15083[(7)] = inst_15044__$1);

return statearr_15083;
})();
if(cljs.core.truth_(inst_15046__$1)){
var statearr_15084_16058 = state_15065__$1;
(statearr_15084_16058[(1)] = (19));

} else {
var statearr_15085_16059 = state_15065__$1;
(statearr_15085_16059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (25))){
var inst_15055 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15086_16060 = state_15065__$1;
(statearr_15086_16060[(2)] = inst_15055);

(statearr_15086_16060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (17))){
var inst_15020 = (state_15065[(10)]);
var inst_15029 = cljs.core.first(inst_15020);
var inst_15030 = cljs.core.async.muxch_STAR_(inst_15029);
var inst_15031 = cljs.core.async.close_BANG_(inst_15030);
var inst_15032 = cljs.core.next(inst_15020);
var inst_15005 = inst_15032;
var inst_15006 = null;
var inst_15007 = (0);
var inst_15008 = (0);
var state_15065__$1 = (function (){var statearr_15087 = state_15065;
(statearr_15087[(12)] = inst_15005);

(statearr_15087[(13)] = inst_15007);

(statearr_15087[(14)] = inst_15006);

(statearr_15087[(15)] = inst_15008);

(statearr_15087[(16)] = inst_15031);

return statearr_15087;
})();
var statearr_15088_16061 = state_15065__$1;
(statearr_15088_16061[(2)] = null);

(statearr_15088_16061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (3))){
var inst_15063 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15065__$1,inst_15063);
} else {
if((state_val_15066 === (12))){
var inst_15040 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15089_16062 = state_15065__$1;
(statearr_15089_16062[(2)] = inst_15040);

(statearr_15089_16062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (2))){
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(4),ch);
} else {
if((state_val_15066 === (23))){
var state_15065__$1 = state_15065;
var statearr_15093_16063 = state_15065__$1;
(statearr_15093_16063[(2)] = null);

(statearr_15093_16063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (19))){
var inst_14995 = (state_15065[(8)]);
var inst_15046 = (state_15065[(11)]);
var inst_15048 = cljs.core.async.muxch_STAR_(inst_15046);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15065__$1,(22),inst_15048,inst_14995);
} else {
if((state_val_15066 === (11))){
var inst_15020 = (state_15065[(10)]);
var inst_15005 = (state_15065[(12)]);
var inst_15020__$1 = cljs.core.seq(inst_15005);
var state_15065__$1 = (function (){var statearr_15096 = state_15065;
(statearr_15096[(10)] = inst_15020__$1);

return statearr_15096;
})();
if(inst_15020__$1){
var statearr_15097_16064 = state_15065__$1;
(statearr_15097_16064[(1)] = (13));

} else {
var statearr_15098_16065 = state_15065__$1;
(statearr_15098_16065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (9))){
var inst_15042 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15099_16066 = state_15065__$1;
(statearr_15099_16066[(2)] = inst_15042);

(statearr_15099_16066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (5))){
var inst_15002 = cljs.core.deref(mults);
var inst_15003 = cljs.core.vals(inst_15002);
var inst_15004 = cljs.core.seq(inst_15003);
var inst_15005 = inst_15004;
var inst_15006 = null;
var inst_15007 = (0);
var inst_15008 = (0);
var state_15065__$1 = (function (){var statearr_15104 = state_15065;
(statearr_15104[(12)] = inst_15005);

(statearr_15104[(13)] = inst_15007);

(statearr_15104[(14)] = inst_15006);

(statearr_15104[(15)] = inst_15008);

return statearr_15104;
})();
var statearr_15106_16067 = state_15065__$1;
(statearr_15106_16067[(2)] = null);

(statearr_15106_16067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (14))){
var state_15065__$1 = state_15065;
var statearr_15111_16068 = state_15065__$1;
(statearr_15111_16068[(2)] = null);

(statearr_15111_16068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (16))){
var inst_15020 = (state_15065[(10)]);
var inst_15024 = cljs.core.chunk_first(inst_15020);
var inst_15025 = cljs.core.chunk_rest(inst_15020);
var inst_15026 = cljs.core.count(inst_15024);
var inst_15005 = inst_15025;
var inst_15006 = inst_15024;
var inst_15007 = inst_15026;
var inst_15008 = (0);
var state_15065__$1 = (function (){var statearr_15161 = state_15065;
(statearr_15161[(12)] = inst_15005);

(statearr_15161[(13)] = inst_15007);

(statearr_15161[(14)] = inst_15006);

(statearr_15161[(15)] = inst_15008);

return statearr_15161;
})();
var statearr_15163_16069 = state_15065__$1;
(statearr_15163_16069[(2)] = null);

(statearr_15163_16069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (10))){
var inst_15005 = (state_15065[(12)]);
var inst_15007 = (state_15065[(13)]);
var inst_15006 = (state_15065[(14)]);
var inst_15008 = (state_15065[(15)]);
var inst_15014 = cljs.core._nth(inst_15006,inst_15008);
var inst_15015 = cljs.core.async.muxch_STAR_(inst_15014);
var inst_15016 = cljs.core.async.close_BANG_(inst_15015);
var inst_15017 = (inst_15008 + (1));
var tmp15107 = inst_15005;
var tmp15108 = inst_15007;
var tmp15109 = inst_15006;
var inst_15005__$1 = tmp15107;
var inst_15006__$1 = tmp15109;
var inst_15007__$1 = tmp15108;
var inst_15008__$1 = inst_15017;
var state_15065__$1 = (function (){var statearr_15167 = state_15065;
(statearr_15167[(17)] = inst_15016);

(statearr_15167[(12)] = inst_15005__$1);

(statearr_15167[(13)] = inst_15007__$1);

(statearr_15167[(14)] = inst_15006__$1);

(statearr_15167[(15)] = inst_15008__$1);

return statearr_15167;
})();
var statearr_15169_16070 = state_15065__$1;
(statearr_15169_16070[(2)] = null);

(statearr_15169_16070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (18))){
var inst_15035 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15170_16071 = state_15065__$1;
(statearr_15170_16071[(2)] = inst_15035);

(statearr_15170_16071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (8))){
var inst_15007 = (state_15065[(13)]);
var inst_15008 = (state_15065[(15)]);
var inst_15010 = (inst_15008 < inst_15007);
var inst_15011 = inst_15010;
var state_15065__$1 = state_15065;
if(cljs.core.truth_(inst_15011)){
var statearr_15171_16072 = state_15065__$1;
(statearr_15171_16072[(1)] = (10));

} else {
var statearr_15172_16073 = state_15065__$1;
(statearr_15172_16073[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15173[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15173[(1)] = (1));

return statearr_15173;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15065){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15065);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15174){var ex__13827__auto__ = e15174;
var statearr_15175_16074 = state_15065;
(statearr_15175_16074[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15065[(4)]))){
var statearr_15177_16075 = state_15065;
(statearr_15177_16075[(1)] = cljs.core.first((state_15065[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16076 = state_15065;
state_15065 = G__16076;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15186 = f__13885__auto__();
(statearr_15186[(6)] = c__13884__auto___16045);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15192 = arguments.length;
switch (G__15192) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15201 = arguments.length;
switch (G__15201) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15205 = arguments.length;
switch (G__15205) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13884__auto___16080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15258){
var state_val_15259 = (state_15258[(1)]);
if((state_val_15259 === (7))){
var state_15258__$1 = state_15258;
var statearr_15260_16081 = state_15258__$1;
(statearr_15260_16081[(2)] = null);

(statearr_15260_16081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (1))){
var state_15258__$1 = state_15258;
var statearr_15261_16082 = state_15258__$1;
(statearr_15261_16082[(2)] = null);

(statearr_15261_16082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (4))){
var inst_15216 = (state_15258[(7)]);
var inst_15217 = (state_15258[(8)]);
var inst_15219 = (inst_15217 < inst_15216);
var state_15258__$1 = state_15258;
if(cljs.core.truth_(inst_15219)){
var statearr_15262_16083 = state_15258__$1;
(statearr_15262_16083[(1)] = (6));

} else {
var statearr_15263_16084 = state_15258__$1;
(statearr_15263_16084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (15))){
var inst_15244 = (state_15258[(9)]);
var inst_15249 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15244);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15258__$1,(17),out,inst_15249);
} else {
if((state_val_15259 === (13))){
var inst_15244 = (state_15258[(9)]);
var inst_15244__$1 = (state_15258[(2)]);
var inst_15245 = cljs.core.some(cljs.core.nil_QMARK_,inst_15244__$1);
var state_15258__$1 = (function (){var statearr_15264 = state_15258;
(statearr_15264[(9)] = inst_15244__$1);

return statearr_15264;
})();
if(cljs.core.truth_(inst_15245)){
var statearr_15265_16085 = state_15258__$1;
(statearr_15265_16085[(1)] = (14));

} else {
var statearr_15266_16086 = state_15258__$1;
(statearr_15266_16086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (6))){
var state_15258__$1 = state_15258;
var statearr_15267_16087 = state_15258__$1;
(statearr_15267_16087[(2)] = null);

(statearr_15267_16087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (17))){
var inst_15251 = (state_15258[(2)]);
var state_15258__$1 = (function (){var statearr_15269 = state_15258;
(statearr_15269[(10)] = inst_15251);

return statearr_15269;
})();
var statearr_15270_16088 = state_15258__$1;
(statearr_15270_16088[(2)] = null);

(statearr_15270_16088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (3))){
var inst_15256 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15258__$1,inst_15256);
} else {
if((state_val_15259 === (12))){
var _ = (function (){var statearr_15271 = state_15258;
(statearr_15271[(4)] = cljs.core.rest((state_15258[(4)])));

return statearr_15271;
})();
var state_15258__$1 = state_15258;
var ex15268 = (state_15258__$1[(2)]);
var statearr_15272_16089 = state_15258__$1;
(statearr_15272_16089[(5)] = ex15268);


if((ex15268 instanceof Object)){
var statearr_15273_16090 = state_15258__$1;
(statearr_15273_16090[(1)] = (11));

(statearr_15273_16090[(5)] = null);

} else {
throw ex15268;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (2))){
var inst_15215 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15216 = cnt;
var inst_15217 = (0);
var state_15258__$1 = (function (){var statearr_15274 = state_15258;
(statearr_15274[(7)] = inst_15216);

(statearr_15274[(11)] = inst_15215);

(statearr_15274[(8)] = inst_15217);

return statearr_15274;
})();
var statearr_15275_16091 = state_15258__$1;
(statearr_15275_16091[(2)] = null);

(statearr_15275_16091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (11))){
var inst_15223 = (state_15258[(2)]);
var inst_15224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15258__$1 = (function (){var statearr_15276 = state_15258;
(statearr_15276[(12)] = inst_15223);

return statearr_15276;
})();
var statearr_15277_16092 = state_15258__$1;
(statearr_15277_16092[(2)] = inst_15224);

(statearr_15277_16092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (9))){
var inst_15217 = (state_15258[(8)]);
var _ = (function (){var statearr_15278 = state_15258;
(statearr_15278[(4)] = cljs.core.cons((12),(state_15258[(4)])));

return statearr_15278;
})();
var inst_15230 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15217) : chs__$1.call(null,inst_15217));
var inst_15231 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15217) : done.call(null,inst_15217));
var inst_15232 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15230,inst_15231);
var ___$1 = (function (){var statearr_15279 = state_15258;
(statearr_15279[(4)] = cljs.core.rest((state_15258[(4)])));

return statearr_15279;
})();
var state_15258__$1 = state_15258;
var statearr_15280_16093 = state_15258__$1;
(statearr_15280_16093[(2)] = inst_15232);

(statearr_15280_16093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (5))){
var inst_15242 = (state_15258[(2)]);
var state_15258__$1 = (function (){var statearr_15281 = state_15258;
(statearr_15281[(13)] = inst_15242);

return statearr_15281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15258__$1,(13),dchan);
} else {
if((state_val_15259 === (14))){
var inst_15247 = cljs.core.async.close_BANG_(out);
var state_15258__$1 = state_15258;
var statearr_15282_16094 = state_15258__$1;
(statearr_15282_16094[(2)] = inst_15247);

(statearr_15282_16094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (16))){
var inst_15254 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15283_16095 = state_15258__$1;
(statearr_15283_16095[(2)] = inst_15254);

(statearr_15283_16095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (10))){
var inst_15217 = (state_15258[(8)]);
var inst_15235 = (state_15258[(2)]);
var inst_15236 = (inst_15217 + (1));
var inst_15217__$1 = inst_15236;
var state_15258__$1 = (function (){var statearr_15284 = state_15258;
(statearr_15284[(8)] = inst_15217__$1);

(statearr_15284[(14)] = inst_15235);

return statearr_15284;
})();
var statearr_15285_16096 = state_15258__$1;
(statearr_15285_16096[(2)] = null);

(statearr_15285_16096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (8))){
var inst_15240 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15286_16097 = state_15258__$1;
(statearr_15286_16097[(2)] = inst_15240);

(statearr_15286_16097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15287[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15287[(1)] = (1));

return statearr_15287;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15258){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15258);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15288){var ex__13827__auto__ = e15288;
var statearr_15289_16098 = state_15258;
(statearr_15289_16098[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15258[(4)]))){
var statearr_15290_16099 = state_15258;
(statearr_15290_16099[(1)] = cljs.core.first((state_15258[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16100 = state_15258;
state_15258 = G__16100;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15291 = f__13885__auto__();
(statearr_15291[(6)] = c__13884__auto___16080);

return statearr_15291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15294 = arguments.length;
switch (G__15294) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15326){
var state_val_15327 = (state_15326[(1)]);
if((state_val_15327 === (7))){
var inst_15305 = (state_15326[(7)]);
var inst_15306 = (state_15326[(8)]);
var inst_15305__$1 = (state_15326[(2)]);
var inst_15306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15305__$1,(0),null);
var inst_15307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15305__$1,(1),null);
var inst_15308 = (inst_15306__$1 == null);
var state_15326__$1 = (function (){var statearr_15328 = state_15326;
(statearr_15328[(9)] = inst_15307);

(statearr_15328[(7)] = inst_15305__$1);

(statearr_15328[(8)] = inst_15306__$1);

return statearr_15328;
})();
if(cljs.core.truth_(inst_15308)){
var statearr_15329_16103 = state_15326__$1;
(statearr_15329_16103[(1)] = (8));

} else {
var statearr_15330_16104 = state_15326__$1;
(statearr_15330_16104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (1))){
var inst_15295 = cljs.core.vec(chs);
var inst_15296 = inst_15295;
var state_15326__$1 = (function (){var statearr_15331 = state_15326;
(statearr_15331[(10)] = inst_15296);

return statearr_15331;
})();
var statearr_15332_16105 = state_15326__$1;
(statearr_15332_16105[(2)] = null);

(statearr_15332_16105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (4))){
var inst_15296 = (state_15326[(10)]);
var state_15326__$1 = state_15326;
return cljs.core.async.ioc_alts_BANG_(state_15326__$1,(7),inst_15296);
} else {
if((state_val_15327 === (6))){
var inst_15322 = (state_15326[(2)]);
var state_15326__$1 = state_15326;
var statearr_15333_16106 = state_15326__$1;
(statearr_15333_16106[(2)] = inst_15322);

(statearr_15333_16106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (3))){
var inst_15324 = (state_15326[(2)]);
var state_15326__$1 = state_15326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15326__$1,inst_15324);
} else {
if((state_val_15327 === (2))){
var inst_15296 = (state_15326[(10)]);
var inst_15298 = cljs.core.count(inst_15296);
var inst_15299 = (inst_15298 > (0));
var state_15326__$1 = state_15326;
if(cljs.core.truth_(inst_15299)){
var statearr_15335_16107 = state_15326__$1;
(statearr_15335_16107[(1)] = (4));

} else {
var statearr_15336_16108 = state_15326__$1;
(statearr_15336_16108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (11))){
var inst_15296 = (state_15326[(10)]);
var inst_15315 = (state_15326[(2)]);
var tmp15334 = inst_15296;
var inst_15296__$1 = tmp15334;
var state_15326__$1 = (function (){var statearr_15337 = state_15326;
(statearr_15337[(11)] = inst_15315);

(statearr_15337[(10)] = inst_15296__$1);

return statearr_15337;
})();
var statearr_15338_16109 = state_15326__$1;
(statearr_15338_16109[(2)] = null);

(statearr_15338_16109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (9))){
var inst_15306 = (state_15326[(8)]);
var state_15326__$1 = state_15326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15326__$1,(11),out,inst_15306);
} else {
if((state_val_15327 === (5))){
var inst_15320 = cljs.core.async.close_BANG_(out);
var state_15326__$1 = state_15326;
var statearr_15339_16110 = state_15326__$1;
(statearr_15339_16110[(2)] = inst_15320);

(statearr_15339_16110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (10))){
var inst_15318 = (state_15326[(2)]);
var state_15326__$1 = state_15326;
var statearr_15340_16111 = state_15326__$1;
(statearr_15340_16111[(2)] = inst_15318);

(statearr_15340_16111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15327 === (8))){
var inst_15307 = (state_15326[(9)]);
var inst_15305 = (state_15326[(7)]);
var inst_15306 = (state_15326[(8)]);
var inst_15296 = (state_15326[(10)]);
var inst_15310 = (function (){var cs = inst_15296;
var vec__15301 = inst_15305;
var v = inst_15306;
var c = inst_15307;
return (function (p1__15292_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15292_SHARP_);
});
})();
var inst_15311 = cljs.core.filterv(inst_15310,inst_15296);
var inst_15296__$1 = inst_15311;
var state_15326__$1 = (function (){var statearr_15341 = state_15326;
(statearr_15341[(10)] = inst_15296__$1);

return statearr_15341;
})();
var statearr_15342_16112 = state_15326__$1;
(statearr_15342_16112[(2)] = null);

(statearr_15342_16112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15343[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15343[(1)] = (1));

return statearr_15343;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15326){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15326);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15344){var ex__13827__auto__ = e15344;
var statearr_15345_16113 = state_15326;
(statearr_15345_16113[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15326[(4)]))){
var statearr_15346_16114 = state_15326;
(statearr_15346_16114[(1)] = cljs.core.first((state_15326[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16115 = state_15326;
state_15326 = G__16115;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15347 = f__13885__auto__();
(statearr_15347[(6)] = c__13884__auto___16102);

return statearr_15347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15350 = arguments.length;
switch (G__15350) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15375){
var state_val_15376 = (state_15375[(1)]);
if((state_val_15376 === (7))){
var inst_15357 = (state_15375[(7)]);
var inst_15357__$1 = (state_15375[(2)]);
var inst_15358 = (inst_15357__$1 == null);
var inst_15359 = cljs.core.not(inst_15358);
var state_15375__$1 = (function (){var statearr_15377 = state_15375;
(statearr_15377[(7)] = inst_15357__$1);

return statearr_15377;
})();
if(inst_15359){
var statearr_15378_16118 = state_15375__$1;
(statearr_15378_16118[(1)] = (8));

} else {
var statearr_15379_16119 = state_15375__$1;
(statearr_15379_16119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (1))){
var inst_15352 = (0);
var state_15375__$1 = (function (){var statearr_15382 = state_15375;
(statearr_15382[(8)] = inst_15352);

return statearr_15382;
})();
var statearr_15383_16120 = state_15375__$1;
(statearr_15383_16120[(2)] = null);

(statearr_15383_16120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (4))){
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15375__$1,(7),ch);
} else {
if((state_val_15376 === (6))){
var inst_15370 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15387_16121 = state_15375__$1;
(statearr_15387_16121[(2)] = inst_15370);

(statearr_15387_16121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (3))){
var inst_15372 = (state_15375[(2)]);
var inst_15373 = cljs.core.async.close_BANG_(out);
var state_15375__$1 = (function (){var statearr_15389 = state_15375;
(statearr_15389[(9)] = inst_15372);

return statearr_15389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15375__$1,inst_15373);
} else {
if((state_val_15376 === (2))){
var inst_15352 = (state_15375[(8)]);
var inst_15354 = (inst_15352 < n);
var state_15375__$1 = state_15375;
if(cljs.core.truth_(inst_15354)){
var statearr_15392_16122 = state_15375__$1;
(statearr_15392_16122[(1)] = (4));

} else {
var statearr_15393_16123 = state_15375__$1;
(statearr_15393_16123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (11))){
var inst_15352 = (state_15375[(8)]);
var inst_15362 = (state_15375[(2)]);
var inst_15363 = (inst_15352 + (1));
var inst_15352__$1 = inst_15363;
var state_15375__$1 = (function (){var statearr_15394 = state_15375;
(statearr_15394[(10)] = inst_15362);

(statearr_15394[(8)] = inst_15352__$1);

return statearr_15394;
})();
var statearr_15395_16124 = state_15375__$1;
(statearr_15395_16124[(2)] = null);

(statearr_15395_16124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (9))){
var state_15375__$1 = state_15375;
var statearr_15396_16125 = state_15375__$1;
(statearr_15396_16125[(2)] = null);

(statearr_15396_16125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (5))){
var state_15375__$1 = state_15375;
var statearr_15397_16126 = state_15375__$1;
(statearr_15397_16126[(2)] = null);

(statearr_15397_16126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (10))){
var inst_15367 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15398_16127 = state_15375__$1;
(statearr_15398_16127[(2)] = inst_15367);

(statearr_15398_16127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (8))){
var inst_15357 = (state_15375[(7)]);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15375__$1,(11),out,inst_15357);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15413[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15413[(1)] = (1));

return statearr_15413;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15375){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15375);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15414){var ex__13827__auto__ = e15414;
var statearr_15415_16128 = state_15375;
(statearr_15415_16128[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15375[(4)]))){
var statearr_15416_16129 = state_15375;
(statearr_15416_16129[(1)] = cljs.core.first((state_15375[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16130 = state_15375;
state_15375 = G__16130;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15417 = f__13885__auto__();
(statearr_15417[(6)] = c__13884__auto___16117);

return statearr_15417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15422 = (function (f,ch,meta15420,_,fn1,meta15423){
this.f = f;
this.ch = ch;
this.meta15420 = meta15420;
this._ = _;
this.fn1 = fn1;
this.meta15423 = meta15423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15424,meta15423__$1){
var self__ = this;
var _15424__$1 = this;
return (new cljs.core.async.t_cljs$core$async15422(self__.f,self__.ch,self__.meta15420,self__._,self__.fn1,meta15423__$1));
}));

(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15424){
var self__ = this;
var _15424__$1 = this;
return self__.meta15423;
}));

(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15418_SHARP_){
var G__15428 = (((p1__15418_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15418_SHARP_) : self__.f.call(null,p1__15418_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15428) : f1.call(null,G__15428));
});
}));

(cljs.core.async.t_cljs$core$async15422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15420","meta15420",2055448712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15419","cljs.core.async/t_cljs$core$async15419",-1560540099,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15423","meta15423",-496360225,null)], null);
}));

(cljs.core.async.t_cljs$core$async15422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15422");

(cljs.core.async.t_cljs$core$async15422.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15422.
 */
cljs.core.async.__GT_t_cljs$core$async15422 = (function cljs$core$async$__GT_t_cljs$core$async15422(f,ch,meta15420,_,fn1,meta15423){
return (new cljs.core.async.t_cljs$core$async15422(f,ch,meta15420,_,fn1,meta15423));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15419 = (function (f,ch,meta15420){
this.f = f;
this.ch = ch;
this.meta15420 = meta15420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15421,meta15420__$1){
var self__ = this;
var _15421__$1 = this;
return (new cljs.core.async.t_cljs$core$async15419(self__.f,self__.ch,meta15420__$1));
}));

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15421){
var self__ = this;
var _15421__$1 = this;
return self__.meta15420;
}));

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15422(self__.f,self__.ch,self__.meta15420,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15431 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15431) : self__.f.call(null,G__15431));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15420","meta15420",2055448712,null)], null);
}));

(cljs.core.async.t_cljs$core$async15419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15419");

(cljs.core.async.t_cljs$core$async15419.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15419.
 */
cljs.core.async.__GT_t_cljs$core$async15419 = (function cljs$core$async$__GT_t_cljs$core$async15419(f,ch,meta15420){
return (new cljs.core.async.t_cljs$core$async15419(f,ch,meta15420));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15419(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15432 = (function (f,ch,meta15433){
this.f = f;
this.ch = ch;
this.meta15433 = meta15433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15434,meta15433__$1){
var self__ = this;
var _15434__$1 = this;
return (new cljs.core.async.t_cljs$core$async15432(self__.f,self__.ch,meta15433__$1));
}));

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15434){
var self__ = this;
var _15434__$1 = this;
return self__.meta15433;
}));

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15433","meta15433",-213105309,null)], null);
}));

(cljs.core.async.t_cljs$core$async15432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15432");

(cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15432.
 */
cljs.core.async.__GT_t_cljs$core$async15432 = (function cljs$core$async$__GT_t_cljs$core$async15432(f,ch,meta15433){
return (new cljs.core.async.t_cljs$core$async15432(f,ch,meta15433));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15435 = (function (p,ch,meta15436){
this.p = p;
this.ch = ch;
this.meta15436 = meta15436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15437,meta15436__$1){
var self__ = this;
var _15437__$1 = this;
return (new cljs.core.async.t_cljs$core$async15435(self__.p,self__.ch,meta15436__$1));
}));

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15437){
var self__ = this;
var _15437__$1 = this;
return self__.meta15436;
}));

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15436","meta15436",-831172099,null)], null);
}));

(cljs.core.async.t_cljs$core$async15435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15435");

(cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15435.
 */
cljs.core.async.__GT_t_cljs$core$async15435 = (function cljs$core$async$__GT_t_cljs$core$async15435(p,ch,meta15436){
return (new cljs.core.async.t_cljs$core$async15435(p,ch,meta15436));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15435(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15439 = arguments.length;
switch (G__15439) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15460){
var state_val_15461 = (state_15460[(1)]);
if((state_val_15461 === (7))){
var inst_15456 = (state_15460[(2)]);
var state_15460__$1 = state_15460;
var statearr_15462_16133 = state_15460__$1;
(statearr_15462_16133[(2)] = inst_15456);

(statearr_15462_16133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (1))){
var state_15460__$1 = state_15460;
var statearr_15463_16134 = state_15460__$1;
(statearr_15463_16134[(2)] = null);

(statearr_15463_16134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (4))){
var inst_15442 = (state_15460[(7)]);
var inst_15442__$1 = (state_15460[(2)]);
var inst_15443 = (inst_15442__$1 == null);
var state_15460__$1 = (function (){var statearr_15464 = state_15460;
(statearr_15464[(7)] = inst_15442__$1);

return statearr_15464;
})();
if(cljs.core.truth_(inst_15443)){
var statearr_15465_16135 = state_15460__$1;
(statearr_15465_16135[(1)] = (5));

} else {
var statearr_15466_16136 = state_15460__$1;
(statearr_15466_16136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (6))){
var inst_15442 = (state_15460[(7)]);
var inst_15447 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15442) : p.call(null,inst_15442));
var state_15460__$1 = state_15460;
if(cljs.core.truth_(inst_15447)){
var statearr_15467_16137 = state_15460__$1;
(statearr_15467_16137[(1)] = (8));

} else {
var statearr_15468_16138 = state_15460__$1;
(statearr_15468_16138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (3))){
var inst_15458 = (state_15460[(2)]);
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15460__$1,inst_15458);
} else {
if((state_val_15461 === (2))){
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15460__$1,(4),ch);
} else {
if((state_val_15461 === (11))){
var inst_15450 = (state_15460[(2)]);
var state_15460__$1 = state_15460;
var statearr_15469_16139 = state_15460__$1;
(statearr_15469_16139[(2)] = inst_15450);

(statearr_15469_16139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (9))){
var state_15460__$1 = state_15460;
var statearr_15470_16140 = state_15460__$1;
(statearr_15470_16140[(2)] = null);

(statearr_15470_16140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (5))){
var inst_15445 = cljs.core.async.close_BANG_(out);
var state_15460__$1 = state_15460;
var statearr_15471_16141 = state_15460__$1;
(statearr_15471_16141[(2)] = inst_15445);

(statearr_15471_16141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (10))){
var inst_15453 = (state_15460[(2)]);
var state_15460__$1 = (function (){var statearr_15472 = state_15460;
(statearr_15472[(8)] = inst_15453);

return statearr_15472;
})();
var statearr_15473_16142 = state_15460__$1;
(statearr_15473_16142[(2)] = null);

(statearr_15473_16142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (8))){
var inst_15442 = (state_15460[(7)]);
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15460__$1,(11),out,inst_15442);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15474 = [null,null,null,null,null,null,null,null,null];
(statearr_15474[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15474[(1)] = (1));

return statearr_15474;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15460){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15460);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15475){var ex__13827__auto__ = e15475;
var statearr_15476_16143 = state_15460;
(statearr_15476_16143[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15460[(4)]))){
var statearr_15477_16144 = state_15460;
(statearr_15477_16144[(1)] = cljs.core.first((state_15460[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16145 = state_15460;
state_15460 = G__16145;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15478 = f__13885__auto__();
(statearr_15478[(6)] = c__13884__auto___16132);

return statearr_15478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15480 = arguments.length;
switch (G__15480) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15544_16147 = state_15542__$1;
(statearr_15544_16147[(2)] = inst_15538);

(statearr_15544_16147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (20))){
var inst_15508 = (state_15542[(7)]);
var inst_15519 = (state_15542[(2)]);
var inst_15520 = cljs.core.next(inst_15508);
var inst_15494 = inst_15520;
var inst_15495 = null;
var inst_15496 = (0);
var inst_15497 = (0);
var state_15542__$1 = (function (){var statearr_15545 = state_15542;
(statearr_15545[(8)] = inst_15497);

(statearr_15545[(9)] = inst_15519);

(statearr_15545[(10)] = inst_15496);

(statearr_15545[(11)] = inst_15495);

(statearr_15545[(12)] = inst_15494);

return statearr_15545;
})();
var statearr_15546_16148 = state_15542__$1;
(statearr_15546_16148[(2)] = null);

(statearr_15546_16148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (1))){
var state_15542__$1 = state_15542;
var statearr_15547_16149 = state_15542__$1;
(statearr_15547_16149[(2)] = null);

(statearr_15547_16149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (4))){
var inst_15483 = (state_15542[(13)]);
var inst_15483__$1 = (state_15542[(2)]);
var inst_15484 = (inst_15483__$1 == null);
var state_15542__$1 = (function (){var statearr_15548 = state_15542;
(statearr_15548[(13)] = inst_15483__$1);

return statearr_15548;
})();
if(cljs.core.truth_(inst_15484)){
var statearr_15549_16150 = state_15542__$1;
(statearr_15549_16150[(1)] = (5));

} else {
var statearr_15550_16151 = state_15542__$1;
(statearr_15550_16151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (15))){
var state_15542__$1 = state_15542;
var statearr_15554_16152 = state_15542__$1;
(statearr_15554_16152[(2)] = null);

(statearr_15554_16152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (21))){
var state_15542__$1 = state_15542;
var statearr_15555_16153 = state_15542__$1;
(statearr_15555_16153[(2)] = null);

(statearr_15555_16153[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (13))){
var inst_15497 = (state_15542[(8)]);
var inst_15496 = (state_15542[(10)]);
var inst_15495 = (state_15542[(11)]);
var inst_15494 = (state_15542[(12)]);
var inst_15504 = (state_15542[(2)]);
var inst_15505 = (inst_15497 + (1));
var tmp15551 = inst_15496;
var tmp15552 = inst_15495;
var tmp15553 = inst_15494;
var inst_15494__$1 = tmp15553;
var inst_15495__$1 = tmp15552;
var inst_15496__$1 = tmp15551;
var inst_15497__$1 = inst_15505;
var state_15542__$1 = (function (){var statearr_15556 = state_15542;
(statearr_15556[(8)] = inst_15497__$1);

(statearr_15556[(10)] = inst_15496__$1);

(statearr_15556[(11)] = inst_15495__$1);

(statearr_15556[(14)] = inst_15504);

(statearr_15556[(12)] = inst_15494__$1);

return statearr_15556;
})();
var statearr_15557_16154 = state_15542__$1;
(statearr_15557_16154[(2)] = null);

(statearr_15557_16154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (22))){
var state_15542__$1 = state_15542;
var statearr_15558_16155 = state_15542__$1;
(statearr_15558_16155[(2)] = null);

(statearr_15558_16155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (6))){
var inst_15483 = (state_15542[(13)]);
var inst_15492 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15483) : f.call(null,inst_15483));
var inst_15493 = cljs.core.seq(inst_15492);
var inst_15494 = inst_15493;
var inst_15495 = null;
var inst_15496 = (0);
var inst_15497 = (0);
var state_15542__$1 = (function (){var statearr_15559 = state_15542;
(statearr_15559[(8)] = inst_15497);

(statearr_15559[(10)] = inst_15496);

(statearr_15559[(11)] = inst_15495);

(statearr_15559[(12)] = inst_15494);

return statearr_15559;
})();
var statearr_15560_16156 = state_15542__$1;
(statearr_15560_16156[(2)] = null);

(statearr_15560_16156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (17))){
var inst_15508 = (state_15542[(7)]);
var inst_15512 = cljs.core.chunk_first(inst_15508);
var inst_15513 = cljs.core.chunk_rest(inst_15508);
var inst_15514 = cljs.core.count(inst_15512);
var inst_15494 = inst_15513;
var inst_15495 = inst_15512;
var inst_15496 = inst_15514;
var inst_15497 = (0);
var state_15542__$1 = (function (){var statearr_15561 = state_15542;
(statearr_15561[(8)] = inst_15497);

(statearr_15561[(10)] = inst_15496);

(statearr_15561[(11)] = inst_15495);

(statearr_15561[(12)] = inst_15494);

return statearr_15561;
})();
var statearr_15562_16157 = state_15542__$1;
(statearr_15562_16157[(2)] = null);

(statearr_15562_16157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (12))){
var inst_15528 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15563_16158 = state_15542__$1;
(statearr_15563_16158[(2)] = inst_15528);

(statearr_15563_16158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (2))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(4),in$);
} else {
if((state_val_15543 === (23))){
var inst_15536 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15564_16159 = state_15542__$1;
(statearr_15564_16159[(2)] = inst_15536);

(statearr_15564_16159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (19))){
var inst_15523 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15565_16160 = state_15542__$1;
(statearr_15565_16160[(2)] = inst_15523);

(statearr_15565_16160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (11))){
var inst_15494 = (state_15542[(12)]);
var inst_15508 = (state_15542[(7)]);
var inst_15508__$1 = cljs.core.seq(inst_15494);
var state_15542__$1 = (function (){var statearr_15566 = state_15542;
(statearr_15566[(7)] = inst_15508__$1);

return statearr_15566;
})();
if(inst_15508__$1){
var statearr_15567_16161 = state_15542__$1;
(statearr_15567_16161[(1)] = (14));

} else {
var statearr_15568_16162 = state_15542__$1;
(statearr_15568_16162[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (9))){
var inst_15530 = (state_15542[(2)]);
var inst_15531 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15542__$1 = (function (){var statearr_15569 = state_15542;
(statearr_15569[(15)] = inst_15530);

return statearr_15569;
})();
if(cljs.core.truth_(inst_15531)){
var statearr_15570_16163 = state_15542__$1;
(statearr_15570_16163[(1)] = (21));

} else {
var statearr_15571_16164 = state_15542__$1;
(statearr_15571_16164[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (5))){
var inst_15486 = cljs.core.async.close_BANG_(out);
var state_15542__$1 = state_15542;
var statearr_15572_16165 = state_15542__$1;
(statearr_15572_16165[(2)] = inst_15486);

(statearr_15572_16165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (14))){
var inst_15508 = (state_15542[(7)]);
var inst_15510 = cljs.core.chunked_seq_QMARK_(inst_15508);
var state_15542__$1 = state_15542;
if(inst_15510){
var statearr_15573_16166 = state_15542__$1;
(statearr_15573_16166[(1)] = (17));

} else {
var statearr_15574_16167 = state_15542__$1;
(statearr_15574_16167[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (16))){
var inst_15526 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15575_16168 = state_15542__$1;
(statearr_15575_16168[(2)] = inst_15526);

(statearr_15575_16168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (10))){
var inst_15497 = (state_15542[(8)]);
var inst_15495 = (state_15542[(11)]);
var inst_15502 = cljs.core._nth(inst_15495,inst_15497);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15542__$1,(13),out,inst_15502);
} else {
if((state_val_15543 === (18))){
var inst_15508 = (state_15542[(7)]);
var inst_15517 = cljs.core.first(inst_15508);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15542__$1,(20),out,inst_15517);
} else {
if((state_val_15543 === (8))){
var inst_15497 = (state_15542[(8)]);
var inst_15496 = (state_15542[(10)]);
var inst_15499 = (inst_15497 < inst_15496);
var inst_15500 = inst_15499;
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15500)){
var statearr_15576_16169 = state_15542__$1;
(statearr_15576_16169[(1)] = (10));

} else {
var statearr_15577_16170 = state_15542__$1;
(statearr_15577_16170[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____0 = (function (){
var statearr_15578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__);

(statearr_15578[(1)] = (1));

return statearr_15578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____1 = (function (state_15542){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15579){var ex__13827__auto__ = e15579;
var statearr_15580_16171 = state_15542;
(statearr_15580_16171[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15542[(4)]))){
var statearr_15581_16172 = state_15542;
(statearr_15581_16172[(1)] = cljs.core.first((state_15542[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16173 = state_15542;
state_15542 = G__16173;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13824__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15582 = f__13885__auto__();
(statearr_15582[(6)] = c__13884__auto__);

return statearr_15582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));

return c__13884__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15584 = arguments.length;
switch (G__15584) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15586 = arguments.length;
switch (G__15586) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15588 = arguments.length;
switch (G__15588) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15612){
var state_val_15613 = (state_15612[(1)]);
if((state_val_15613 === (7))){
var inst_15607 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15614_16178 = state_15612__$1;
(statearr_15614_16178[(2)] = inst_15607);

(statearr_15614_16178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (1))){
var inst_15589 = null;
var state_15612__$1 = (function (){var statearr_15615 = state_15612;
(statearr_15615[(7)] = inst_15589);

return statearr_15615;
})();
var statearr_15616_16179 = state_15612__$1;
(statearr_15616_16179[(2)] = null);

(statearr_15616_16179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (4))){
var inst_15592 = (state_15612[(8)]);
var inst_15592__$1 = (state_15612[(2)]);
var inst_15593 = (inst_15592__$1 == null);
var inst_15594 = cljs.core.not(inst_15593);
var state_15612__$1 = (function (){var statearr_15617 = state_15612;
(statearr_15617[(8)] = inst_15592__$1);

return statearr_15617;
})();
if(inst_15594){
var statearr_15618_16180 = state_15612__$1;
(statearr_15618_16180[(1)] = (5));

} else {
var statearr_15619_16181 = state_15612__$1;
(statearr_15619_16181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (6))){
var state_15612__$1 = state_15612;
var statearr_15620_16182 = state_15612__$1;
(statearr_15620_16182[(2)] = null);

(statearr_15620_16182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (3))){
var inst_15609 = (state_15612[(2)]);
var inst_15610 = cljs.core.async.close_BANG_(out);
var state_15612__$1 = (function (){var statearr_15621 = state_15612;
(statearr_15621[(9)] = inst_15609);

return statearr_15621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15612__$1,inst_15610);
} else {
if((state_val_15613 === (2))){
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15612__$1,(4),ch);
} else {
if((state_val_15613 === (11))){
var inst_15592 = (state_15612[(8)]);
var inst_15601 = (state_15612[(2)]);
var inst_15589 = inst_15592;
var state_15612__$1 = (function (){var statearr_15622 = state_15612;
(statearr_15622[(7)] = inst_15589);

(statearr_15622[(10)] = inst_15601);

return statearr_15622;
})();
var statearr_15623_16183 = state_15612__$1;
(statearr_15623_16183[(2)] = null);

(statearr_15623_16183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (9))){
var inst_15592 = (state_15612[(8)]);
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15612__$1,(11),out,inst_15592);
} else {
if((state_val_15613 === (5))){
var inst_15592 = (state_15612[(8)]);
var inst_15589 = (state_15612[(7)]);
var inst_15596 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15592,inst_15589);
var state_15612__$1 = state_15612;
if(inst_15596){
var statearr_15625_16184 = state_15612__$1;
(statearr_15625_16184[(1)] = (8));

} else {
var statearr_15626_16185 = state_15612__$1;
(statearr_15626_16185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (10))){
var inst_15604 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15627_16186 = state_15612__$1;
(statearr_15627_16186[(2)] = inst_15604);

(statearr_15627_16186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (8))){
var inst_15589 = (state_15612[(7)]);
var tmp15624 = inst_15589;
var inst_15589__$1 = tmp15624;
var state_15612__$1 = (function (){var statearr_15628 = state_15612;
(statearr_15628[(7)] = inst_15589__$1);

return statearr_15628;
})();
var statearr_15629_16187 = state_15612__$1;
(statearr_15629_16187[(2)] = null);

(statearr_15629_16187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15630[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15630[(1)] = (1));

return statearr_15630;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15612){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15612);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15631){var ex__13827__auto__ = e15631;
var statearr_15632_16188 = state_15612;
(statearr_15632_16188[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15612[(4)]))){
var statearr_15633_16189 = state_15612;
(statearr_15633_16189[(1)] = cljs.core.first((state_15612[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16190 = state_15612;
state_15612 = G__16190;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15634 = f__13885__auto__();
(statearr_15634[(6)] = c__13884__auto___16177);

return statearr_15634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15636 = arguments.length;
switch (G__15636) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15674){
var state_val_15675 = (state_15674[(1)]);
if((state_val_15675 === (7))){
var inst_15670 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15676_16193 = state_15674__$1;
(statearr_15676_16193[(2)] = inst_15670);

(statearr_15676_16193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (1))){
var inst_15637 = (new Array(n));
var inst_15638 = inst_15637;
var inst_15639 = (0);
var state_15674__$1 = (function (){var statearr_15677 = state_15674;
(statearr_15677[(7)] = inst_15639);

(statearr_15677[(8)] = inst_15638);

return statearr_15677;
})();
var statearr_15678_16194 = state_15674__$1;
(statearr_15678_16194[(2)] = null);

(statearr_15678_16194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (4))){
var inst_15642 = (state_15674[(9)]);
var inst_15642__$1 = (state_15674[(2)]);
var inst_15643 = (inst_15642__$1 == null);
var inst_15644 = cljs.core.not(inst_15643);
var state_15674__$1 = (function (){var statearr_15679 = state_15674;
(statearr_15679[(9)] = inst_15642__$1);

return statearr_15679;
})();
if(inst_15644){
var statearr_15680_16195 = state_15674__$1;
(statearr_15680_16195[(1)] = (5));

} else {
var statearr_15681_16196 = state_15674__$1;
(statearr_15681_16196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (15))){
var inst_15664 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15682_16197 = state_15674__$1;
(statearr_15682_16197[(2)] = inst_15664);

(statearr_15682_16197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (13))){
var state_15674__$1 = state_15674;
var statearr_15683_16198 = state_15674__$1;
(statearr_15683_16198[(2)] = null);

(statearr_15683_16198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (6))){
var inst_15639 = (state_15674[(7)]);
var inst_15660 = (inst_15639 > (0));
var state_15674__$1 = state_15674;
if(cljs.core.truth_(inst_15660)){
var statearr_15684_16199 = state_15674__$1;
(statearr_15684_16199[(1)] = (12));

} else {
var statearr_15685_16200 = state_15674__$1;
(statearr_15685_16200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (3))){
var inst_15672 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15674__$1,inst_15672);
} else {
if((state_val_15675 === (12))){
var inst_15638 = (state_15674[(8)]);
var inst_15662 = cljs.core.vec(inst_15638);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15674__$1,(15),out,inst_15662);
} else {
if((state_val_15675 === (2))){
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15674__$1,(4),ch);
} else {
if((state_val_15675 === (11))){
var inst_15654 = (state_15674[(2)]);
var inst_15655 = (new Array(n));
var inst_15638 = inst_15655;
var inst_15639 = (0);
var state_15674__$1 = (function (){var statearr_15686 = state_15674;
(statearr_15686[(10)] = inst_15654);

(statearr_15686[(7)] = inst_15639);

(statearr_15686[(8)] = inst_15638);

return statearr_15686;
})();
var statearr_15687_16201 = state_15674__$1;
(statearr_15687_16201[(2)] = null);

(statearr_15687_16201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (9))){
var inst_15638 = (state_15674[(8)]);
var inst_15652 = cljs.core.vec(inst_15638);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15674__$1,(11),out,inst_15652);
} else {
if((state_val_15675 === (5))){
var inst_15647 = (state_15674[(11)]);
var inst_15639 = (state_15674[(7)]);
var inst_15638 = (state_15674[(8)]);
var inst_15642 = (state_15674[(9)]);
var inst_15646 = (inst_15638[inst_15639] = inst_15642);
var inst_15647__$1 = (inst_15639 + (1));
var inst_15648 = (inst_15647__$1 < n);
var state_15674__$1 = (function (){var statearr_15688 = state_15674;
(statearr_15688[(12)] = inst_15646);

(statearr_15688[(11)] = inst_15647__$1);

return statearr_15688;
})();
if(cljs.core.truth_(inst_15648)){
var statearr_15689_16202 = state_15674__$1;
(statearr_15689_16202[(1)] = (8));

} else {
var statearr_15690_16203 = state_15674__$1;
(statearr_15690_16203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (14))){
var inst_15667 = (state_15674[(2)]);
var inst_15668 = cljs.core.async.close_BANG_(out);
var state_15674__$1 = (function (){var statearr_15692 = state_15674;
(statearr_15692[(13)] = inst_15667);

return statearr_15692;
})();
var statearr_15693_16204 = state_15674__$1;
(statearr_15693_16204[(2)] = inst_15668);

(statearr_15693_16204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (10))){
var inst_15658 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15694_16205 = state_15674__$1;
(statearr_15694_16205[(2)] = inst_15658);

(statearr_15694_16205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (8))){
var inst_15647 = (state_15674[(11)]);
var inst_15638 = (state_15674[(8)]);
var tmp15691 = inst_15638;
var inst_15638__$1 = tmp15691;
var inst_15639 = inst_15647;
var state_15674__$1 = (function (){var statearr_15695 = state_15674;
(statearr_15695[(7)] = inst_15639);

(statearr_15695[(8)] = inst_15638__$1);

return statearr_15695;
})();
var statearr_15696_16206 = state_15674__$1;
(statearr_15696_16206[(2)] = null);

(statearr_15696_16206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15697[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15697[(1)] = (1));

return statearr_15697;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15674){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15674);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15698){var ex__13827__auto__ = e15698;
var statearr_15699_16207 = state_15674;
(statearr_15699_16207[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15674[(4)]))){
var statearr_15700_16208 = state_15674;
(statearr_15700_16208[(1)] = cljs.core.first((state_15674[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16209 = state_15674;
state_15674 = G__16209;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15701 = f__13885__auto__();
(statearr_15701[(6)] = c__13884__auto___16192);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15703 = arguments.length;
switch (G__15703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13884__auto___16211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13885__auto__ = (function (){var switch__13823__auto__ = (function (state_15748){
var state_val_15749 = (state_15748[(1)]);
if((state_val_15749 === (7))){
var inst_15744 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15750_16212 = state_15748__$1;
(statearr_15750_16212[(2)] = inst_15744);

(statearr_15750_16212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (1))){
var inst_15704 = [];
var inst_15705 = inst_15704;
var inst_15706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15748__$1 = (function (){var statearr_15751 = state_15748;
(statearr_15751[(7)] = inst_15706);

(statearr_15751[(8)] = inst_15705);

return statearr_15751;
})();
var statearr_15752_16213 = state_15748__$1;
(statearr_15752_16213[(2)] = null);

(statearr_15752_16213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (4))){
var inst_15709 = (state_15748[(9)]);
var inst_15709__$1 = (state_15748[(2)]);
var inst_15710 = (inst_15709__$1 == null);
var inst_15711 = cljs.core.not(inst_15710);
var state_15748__$1 = (function (){var statearr_15753 = state_15748;
(statearr_15753[(9)] = inst_15709__$1);

return statearr_15753;
})();
if(inst_15711){
var statearr_15754_16214 = state_15748__$1;
(statearr_15754_16214[(1)] = (5));

} else {
var statearr_15755_16215 = state_15748__$1;
(statearr_15755_16215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (15))){
var inst_15705 = (state_15748[(8)]);
var inst_15736 = cljs.core.vec(inst_15705);
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15748__$1,(18),out,inst_15736);
} else {
if((state_val_15749 === (13))){
var inst_15731 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15756_16216 = state_15748__$1;
(statearr_15756_16216[(2)] = inst_15731);

(statearr_15756_16216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (6))){
var inst_15705 = (state_15748[(8)]);
var inst_15733 = inst_15705.length;
var inst_15734 = (inst_15733 > (0));
var state_15748__$1 = state_15748;
if(cljs.core.truth_(inst_15734)){
var statearr_15757_16217 = state_15748__$1;
(statearr_15757_16217[(1)] = (15));

} else {
var statearr_15758_16218 = state_15748__$1;
(statearr_15758_16218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (17))){
var inst_15741 = (state_15748[(2)]);
var inst_15742 = cljs.core.async.close_BANG_(out);
var state_15748__$1 = (function (){var statearr_15759 = state_15748;
(statearr_15759[(10)] = inst_15741);

return statearr_15759;
})();
var statearr_15760_16219 = state_15748__$1;
(statearr_15760_16219[(2)] = inst_15742);

(statearr_15760_16219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (3))){
var inst_15746 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15748__$1,inst_15746);
} else {
if((state_val_15749 === (12))){
var inst_15705 = (state_15748[(8)]);
var inst_15724 = cljs.core.vec(inst_15705);
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15748__$1,(14),out,inst_15724);
} else {
if((state_val_15749 === (2))){
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15748__$1,(4),ch);
} else {
if((state_val_15749 === (11))){
var inst_15713 = (state_15748[(11)]);
var inst_15705 = (state_15748[(8)]);
var inst_15709 = (state_15748[(9)]);
var inst_15721 = inst_15705.push(inst_15709);
var tmp15761 = inst_15705;
var inst_15705__$1 = tmp15761;
var inst_15706 = inst_15713;
var state_15748__$1 = (function (){var statearr_15762 = state_15748;
(statearr_15762[(12)] = inst_15721);

(statearr_15762[(7)] = inst_15706);

(statearr_15762[(8)] = inst_15705__$1);

return statearr_15762;
})();
var statearr_15763_16220 = state_15748__$1;
(statearr_15763_16220[(2)] = null);

(statearr_15763_16220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (9))){
var inst_15706 = (state_15748[(7)]);
var inst_15717 = cljs.core.keyword_identical_QMARK_(inst_15706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15748__$1 = state_15748;
var statearr_15764_16221 = state_15748__$1;
(statearr_15764_16221[(2)] = inst_15717);

(statearr_15764_16221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (5))){
var inst_15714 = (state_15748[(13)]);
var inst_15706 = (state_15748[(7)]);
var inst_15713 = (state_15748[(11)]);
var inst_15709 = (state_15748[(9)]);
var inst_15713__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15709) : f.call(null,inst_15709));
var inst_15714__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15713__$1,inst_15706);
var state_15748__$1 = (function (){var statearr_15765 = state_15748;
(statearr_15765[(13)] = inst_15714__$1);

(statearr_15765[(11)] = inst_15713__$1);

return statearr_15765;
})();
if(inst_15714__$1){
var statearr_15766_16222 = state_15748__$1;
(statearr_15766_16222[(1)] = (8));

} else {
var statearr_15767_16223 = state_15748__$1;
(statearr_15767_16223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (14))){
var inst_15713 = (state_15748[(11)]);
var inst_15709 = (state_15748[(9)]);
var inst_15726 = (state_15748[(2)]);
var inst_15727 = [];
var inst_15728 = inst_15727.push(inst_15709);
var inst_15705 = inst_15727;
var inst_15706 = inst_15713;
var state_15748__$1 = (function (){var statearr_15768 = state_15748;
(statearr_15768[(14)] = inst_15726);

(statearr_15768[(15)] = inst_15728);

(statearr_15768[(7)] = inst_15706);

(statearr_15768[(8)] = inst_15705);

return statearr_15768;
})();
var statearr_15769_16224 = state_15748__$1;
(statearr_15769_16224[(2)] = null);

(statearr_15769_16224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (16))){
var state_15748__$1 = state_15748;
var statearr_15770_16225 = state_15748__$1;
(statearr_15770_16225[(2)] = null);

(statearr_15770_16225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (10))){
var inst_15719 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
if(cljs.core.truth_(inst_15719)){
var statearr_15771_16226 = state_15748__$1;
(statearr_15771_16226[(1)] = (11));

} else {
var statearr_15772_16227 = state_15748__$1;
(statearr_15772_16227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (18))){
var inst_15738 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15773_16228 = state_15748__$1;
(statearr_15773_16228[(2)] = inst_15738);

(statearr_15773_16228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15749 === (8))){
var inst_15714 = (state_15748[(13)]);
var state_15748__$1 = state_15748;
var statearr_15774_16229 = state_15748__$1;
(statearr_15774_16229[(2)] = inst_15714);

(statearr_15774_16229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13824__auto__ = null;
var cljs$core$async$state_machine__13824__auto____0 = (function (){
var statearr_15775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15775[(0)] = cljs$core$async$state_machine__13824__auto__);

(statearr_15775[(1)] = (1));

return statearr_15775;
});
var cljs$core$async$state_machine__13824__auto____1 = (function (state_15748){
while(true){
var ret_value__13825__auto__ = (function (){try{while(true){
var result__13826__auto__ = switch__13823__auto__(state_15748);
if(cljs.core.keyword_identical_QMARK_(result__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13826__auto__;
}
break;
}
}catch (e15776){var ex__13827__auto__ = e15776;
var statearr_15777_16230 = state_15748;
(statearr_15777_16230[(2)] = ex__13827__auto__);


if(cljs.core.seq((state_15748[(4)]))){
var statearr_15778_16231 = state_15748;
(statearr_15778_16231[(1)] = cljs.core.first((state_15748[(4)])));

} else {
throw ex__13827__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16232 = state_15748;
state_15748 = G__16232;
continue;
} else {
return ret_value__13825__auto__;
}
break;
}
});
cljs$core$async$state_machine__13824__auto__ = function(state_15748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13824__auto____1.call(this,state_15748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13824__auto____0;
cljs$core$async$state_machine__13824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13824__auto____1;
return cljs$core$async$state_machine__13824__auto__;
})()
})();
var state__13886__auto__ = (function (){var statearr_15779 = f__13885__auto__();
(statearr_15779[(6)] = c__13884__auto___16211);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13886__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
