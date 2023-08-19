(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"coupling_atlas_1", frames: [[498,783,74,57],[236,844,129,83],[486,724,79,57],[355,746,129,83],[498,842,74,57],[367,916,94,83],[432,496,49,57],[463,916,76,83],[460,665,84,57],[236,929,129,83],[387,606,109,57],[367,831,129,83],[498,437,26,192],[230,410,155,334],[432,437,53,57],[387,665,71,71],[0,844,120,167],[0,410,228,332],[122,844,112,167],[429,0,228,435],[387,437,43,167],[0,0,427,408],[0,746,353,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_24 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["coupling_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.parent.pump();
	}
	this.frame_25 = function() {
		this.parent.coes();
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("A9+HhQgXgHgMgWQgMgWAIgYQBGjpD+ijQDtiXGjidQFyjTGJAqQFwAnFEgqQFhguDRB3QC9BlJqgIIABAAIABAAIAJABQBSgFARCmQALBsgQDSQgCAZgTAQQgTAQgZgBQgYgCgRgTQgQgTACgZQAPjEgKhkQgFgvAKgIQqTAIjJh0Qi2hjkzAoQlQAsmAgpQlkgklQC+QgFAEgHACQmYCajlCRQjVCJg+DBQgHAYgWAMQgOAHgOAAQgJAAgJgDg");
	this.shape.setTransform(7.4585,-13.8748);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("A/RHzQgUgPgDgYQgEgZAPgUQBWh0CGAOQBSAGBZg9IAAAAQBohHBFhCIAAAAQBIhFCEh2QCbiMBBAFQAYgNBFh/IABgBIABgCIAEgHIABAAIABgCQCOi5CmAqQByAaBUgbQB3grChBjIAAAAQB3BICzgDQDkgDA0AnQAkASBigHQBqgHA2ghIAAAAQBIg0DhAaIAAAAQCSASAqg1IABAAQAthWBxAkQBHAVBvBeQATARACAYQACAZgQATQgQATgZACQgZACgSgQQhXhKg2gTQgOgEgGACQg+B5jzgdIAAAAQilgTg1AbIAAAAQhIAxiRAKQiZALg3gpQgogTisACQjbAEiQhbIAAAAQhohAhLAUQhvAmiXgiQhhgQhYBxQh0DShNgJQgmAIhrBfQiCB2hHBEIAAAAQhLBIhxBNIAAAAQiBBYh5gNQhEgFgtA8QgPAUgYADIgKABQgTAAgQgMgAeqCgQgZgCgQgSQhWhlgRhDQgbhnBPgyIABAAQAegbgRgyQg5gHgXgMQgRgIgLgKQgsAOhEAXQgYAIgWgLQgWgLgIgXQgJgYAMgWQAKgWAYgJQB3goAwgMQAugLAMAIQAlAJAFAbQAEAGACAIIAZACQAIAAAIACIADABIAAAAQAIACAGAEIAHAFQAHAGAFAHIAEAJQBcCxiGBRQgHAIAEAOQAPAwA/BJQAQATgCAYQgCAZgTAQQgRAPgVAAIgFgBg");
	this.shape_1.setTransform(0.0242,-6.7664);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},5).wait(2).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.6,-62.2,406.2,106.6);


(lib.ADP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-19.75,-14.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(-32.2,-20.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_24();
	this.instance_2.setTransform(-18.4,-14.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_28();
	this.instance_3.setTransform(-32.2,-20.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-20.8,64.5,41.5);


(lib.O2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-12.15,-14.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(-18.95,-20.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(-18.45,-14.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_17();
	this.instance_3.setTransform(-23.35,-20.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-20.8,47,41.5);


(lib.NADH = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-27.3,-14.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_25();
	this.instance_1.setTransform(-32.2,-20.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(-21,-14.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_26();
	this.instance_3.setTransform(-32.2,-20.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-20.8,64.5,41.5);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336600").ss(1,0,1).p("ADoAAQAACEhEBdQhEBehgAAQhfAAhEheQhEhdAAiEQAAiDBEheQBEhdBfAAQBgAABEBdQBEBeAACDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AijDhQhEhdAAiEQAAiDBEheQBEhcBfgBQBgABBEBcQBEBeAACDQAACEhEBdQhEBehgAAQhfAAhEheg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-24.2,-32.8,48.4,65.69999999999999), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,0,1).p("AgasnIA1AAQApAAAeAdQAdAdAAAqIAAWHQAAAqgdAdQgeAdgpAAIg1AAQgqAAgdgdQgdgdAAgqIAA2HQAAgqAdgdQAdgdAqAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgaMoQgqAAgdgdQgdgdAAgqIAA2HQAAgqAdgdQAegdApAAIA1AAQApAAAeAdQAdAdAAAqIAAWHQAAAqgdAdQgeAdgpAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-13.7,-81.8,27.4,163.7), null);


(lib.Proton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-13.35,-14.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-17.75,-17.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Proton, new cjs.Rectangle(-17.7,-17.7,35.5,35.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-10.75,-47.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-106.6,-82.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-28.1,-47.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(-57.05,-82.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-30,-47.55,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(-57.05,-82.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.6,-82.9,213.5,217.5);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.parent.atp_syn();
	}
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0099").ss(1,0,1).p("AlOq0IKdAAQBkAAAABkIAAShQAABkhkAAIqdAAQhkAAAAhkIAAyhQAAhkBkAAg");
	this.shape.setTransform(-46.85,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF66CC").s().p("AlOK1QhkAAAAhkIAAyhQAAhkBkAAIKdAAQBkAAAABkIAAShQAABkhkAAg");
	this.shape_1.setTransform(-46.85,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(25));

	// Symbol_4
	this.instance = new lib.Symbol4();
	var instanceFilter_1 = new cjs.ColorFilter(0.64,0.64,0.64,1,91.8,18.36,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1.05},0).to({x:-25.4},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23).wait(1));

	// Symbol_4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(25.4,0);
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:24.35},0).to({x:0},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(1).to(new cjs.ColorFilter(0.64,0.64,0.64,1,91.8,18.36,0,0), 23).wait(1));

	// Symbol_4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(37,0);
	var instance_2Filter_3 = new cjs.ColorFilter(0.53,0.53,0.53,1,47.94,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:36.5},0).to({x:25.4},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23).wait(1));

	// Symbol_4
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(-25.4,0);
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-25.9},0).to({x:-37},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(1).to(new cjs.ColorFilter(0.53,0.53,0.53,1,47.94,0,0,0), 23).wait(1));

	// Symbol_4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(-37,0);
	var instance_4Filter_5 = new cjs.ColorFilter(0.53,0.53,0.53,1,47.94,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-36.5},0).to({x:-25.4},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23).wait(1));

	// Symbol_4
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(25.4,0);
	var instance_5Filter_6 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-16,-84,31,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:24.35},0).to({x:37},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(1).to(new cjs.ColorFilter(0.53,0.53,0.53,1,47.94,0,0,0), 23).wait(1));

	// Layer_9
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(0,171.95);

	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(-32,171.95);
	var instance_7Filter_7 = new cjs.ColorFilter(0.38,0.38,0.38,1,0,31.62,63.24,0);
	this.instance_7.filters = [instance_7Filter_7];
	this.instance_7.cache(-26,-35,52,70);

	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(32,171.95);
	var instance_8Filter_8 = new cjs.ColorFilter(0.38,0.38,0.38,1,0,31.62,63.24,0);
	this.instance_8.filters = [instance_8Filter_8];
	this.instance_8.cache(-26,-35,52,70);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(-6.5,68.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_9();
	this.instance_10.setTransform(-96.9,46.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(25));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_7).wait(25));
	this.timeline.addTween(cjs.Tween.get(instance_8Filter_8).wait(25));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_3, startFrame:1, endFrame:1, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_3, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_4, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:1, x:-16, y:-84, w:31, h:168});
	this.filterCacheList.push({instance: this.instance_5, startFrame:2, endFrame:24, x:-16, y:-84, w:31, h:168});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-81.8,152.60000000000002,295.7);


// stage content:
(lib.coupling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		this.uppr = 250/768;
		this.lowr = [610/768,150/768];
		this.out_protons = [];
		this.in_protons = [];
		this.nadhs = [];
		this.oxys = [];
		this.ADPs = [];
		this.comp1 = false;
		this.comp4 = false;
		this.as = false;
		this.fadeTime = 1000;
		this.etc_can = false;
		
		this.randx = function() {
			return(Math.random()*stage.canvas.width);
		}
		this.randy_l = function() {
			return(this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height);
		}
		this.randy_u = function() {
			return(Math.random()*this.uppr*stage.canvas.height);
		}
		this.setUp = function() {
			for(i=0; i<20; i++) {
				this.p = new lib.Proton();
				this.p.x = Math.random()*stage.canvas.width;
				this.p.y = Math.random()*this.uppr*stage.canvas.height;
				this.addChild(this.p);
				this.out_protons.push(this.p);
			}
			for(i=0; i<2; i++) {
				this.p = new lib.Proton();
				this.p.x = Math.random()*stage.canvas.width;
				this.p.y = (this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height);
				this.addChild(this.p);
				this.in_protons.push(this.p);
			}
			for(i=0; i<5; i++) {
				this.n = new lib.NADH();
				this.n.addEventListener('click',this.n.ck = this.goto1.bind(this.n));
				this.n.x = Math.random()*stage.canvas.width;
				this.n.y = (this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height);
				this.addChild(this.n);
				this.nadhs.push(this.n);
			}
			for(i=0; i<5; i++) {
				this.o = new lib.O2();
				this.o.addEventListener('click',this.o.ck = this.goto4.bind(this.o));
				this.o.x = Math.random()*stage.canvas.width;
				this.o.y = (this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height);
				this.addChild(this.o);
				this.oxys.push(this.o);
			}
			for(i=0; i<5; i++) {
				this.o = new lib.ADP();
				this.o.addEventListener('click',this.o.ck = this.gotoA.bind(this.o));
				this.o.x = Math.random()*stage.canvas.width;
				this.o.y = (this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height);
				this.addChild(this.o);
				this.ADPs.push(this.o);
			}
		}
		this.goto1 = function(nh) {
			if(this.parent.comp1 == false) {
				this.parent.comp1 = this;
				this.x = 60;
				this.y = 485;
			}
			if(this.parent.comp4 != false) {
				this.parent.etc();
			}
		}
		this.goto4 = function(o) {
			if(this.parent.comp4 == false) {
				this.parent.comp4 = this;
				this.x = 460;
				this.y = 460;
			}
			if(this.parent.comp1 != false) {
				this.parent.etc();
			}
		}
		this.gotoA = function(o) {
			this.parent.as = this;
			this.x = 910;
			this.y = 570;
			if(this.parent.etc_can == false) {
				this.parent.atpenz.play();
			}else{
				this.parent.atpLeave();
			}
		}
		this.atpLeave = function() {
			createjs.Tween.get(this.as).wait(this.fadeTime).to({x:this.randx(),y:this.randy_l()},this.fadeTime/2);
			this.as = false;
		}
		this.atp_syn = function() {
			pind = Math.floor(Math.random()*this.out_protons.length);
			p = this.out_protons[pind];
			createjs.Tween.get(p).to({x:835,y:300},this.fadeTime/2).to({y:445}).to({x:this.randx(),y:this.randy_l()},this.fadeTime/2);
			this.in_protons.push(p);
			this.out_protons.splice(pind,1);
			this.as.gotoAndStop(1);
			createjs.Tween.get(this.as).to({alpha:0,x:810,y:670},this.fadeTime);
			this.etc_can = true;
		}
		this.pump = function(){
			pind = Math.floor(Math.random()*this.in_protons.length);
			p = this.in_protons[pind];
			createjs.Tween.get(p).to({x:200,y:455},this.fadeTime/2).to({y:280}).to({x:this.randx(),y:this.randy_u()},this.fadeTime/2);
			this.out_protons.push(p);
			this.in_protons.splice(pind,1);
			this.etc_can = false;
		}
		this.etc = function() {
			if(this.etc_can == true) {
				this.etc_anim.play();
			}else{
				this.no_etc();
			}
		}
		this.no_etc = function() {
			createjs.Tween.get(this.comp1).wait(this.fadeTime).to({x:Math.random()*stage.canvas.width,y:(this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height)},this.fadeTime);
			createjs.Tween.get(this.comp4).wait(this.fadeTime).to({x:Math.random()*stage.canvas.width,y:(this.lowr[0]*stage.canvas.height)+(Math.random()*this.lowr[1]*stage.canvas.height)},this.fadeTime);
			this.comp1 = false;
			this.comp4 = false;
		}
		this.coes = function() {
			this.comp1.gotoAndStop(1);
			createjs.Tween.get(this.comp1).to({alpha:0,x:200,y:585},this.fadeTime/2);
			this.comp4.gotoAndStop(1);
			createjs.Tween.get(this.comp4).to({alpha:0,x:560,y:660},this.fadeTime+2);
			this.comp1 = false;
			this.comp4 = false;
		}
		
		this.setUp();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_5
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(22,14.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_4
	this.etc_anim = new lib.Symbol7();
	this.etc_anim.name = "etc_anim";
	this.etc_anim.setTransform(263.55,427.4);
	this.etc_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.etc_anim).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.atpenz = new lib.Symbol3();
	this.atpenz.name = "atpenz";
	this.atpenz.setTransform(906.5,372.9);

	this.instance_1 = new lib.Symbol1("synched",2);
	this.instance_1.setTransform(483.7,368);

	this.instance_2 = new lib.Symbol1("synched",1);
	this.instance_2.setTransform(336.7,368);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(141.3,368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.atpenz}]},1).wait(1));
	this.atpenz.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6633FF").ss(14,0,1).p("EBQAAJqMif/AAAEhP/gJpMCf/AAA");
	this.shape.setTransform(512,368.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("EhP/AJqIAAzTMCf/AAAIAATTg");
	this.shape_1.setTransform(512,368.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(505,398.7,526,188.09999999999997);
// library properties:
lib.properties = {
	id: '82EB1A6E6D0E294C91B42011721A0E6F',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/coupling_atlas_1.png", id:"coupling_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['82EB1A6E6D0E294C91B42011721A0E6F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;