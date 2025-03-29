(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.video_location = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhPrAtAQgIAAgGgFQgGgHAAgIMAAAhZXQAAgIAGgGQAGgGAIAAMCfXAAAQAIAAAHAGQAFAGAAAIMAAABZXQAAAIgFAHQgHAFgIAAgEhPXAsYMCevAAAMAAAhYvMievAAAg");
	this.shape.setTransform(512,288);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFE7DA").s().p("EhP/AtAMAAAhZ/MCf/AAAMAAABZ/g");
	this.shape_1.setTransform(512,288);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.video_location, new cjs.Rectangle(0,0,1024,576), null);


(lib.selector_box = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("EgxAgF6MBiBAAAIAAL1MhiBAAAg");
	this.shape.setTransform(313.65,37.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.selector_box, new cjs.Rectangle(-2.5,-2.5,632.3,80.7), null);


(lib.ready_btn = function(mode,startPosition,loop,reversed) {
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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBsQgEgBgBgDIgDgFIgBgIIABgJQABgEACgCQABgCAEAAIAIgBIAIABQACAAACACQACACAAAEIABAJIgBAIQAAADgCACIgEAEIgIAAIgIAAgAgPA1IgDAAIgCgDIgBgCIgBgrQAAgEABgBIACgEIADgCIAFAAIAEAAQAJAAAHgDQAHgEAFgEQAEgGACgHQACgIAAgHQAAgJgCgHQgDgIgFgFQgFgFgHgDQgHgEgKAAQgJAAgHACIgMAFIgIAEIgFACIgCAAIgBgDIgBgDIAAgGIAAgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAGgEIALgFIAOgDIAPgBQAQAAAMAEQAMAGAIAIQAIAHAEAMQADALAAALQAAAOgEALQgDAKgHAIQgIAHgJAEQgKAEgMABIgBAlQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAIgJABIgGAAg");
	this.shape.setTransform(40.275,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBnIgEgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIABgEIATgxIgCgCIgCgDIgyiFIgBgFIABgDIAEgCIAIAAIAHAAIAEABIACACIACADIAnBwIABAAIAmhxIACgDIAFgCIAHAAIAHAAIAFACQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgBAEIgzCLIgSA0QAAACgEACQgEABgIAAIgGAAg");
	this.shape_1.setTransform(25.3,6.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghBoQgLgGgHgKQgGgLgEgOQgDgNAAgQQAAgRAEgPQAEgOAIgKQAHgLAMgFQALgGAPAAQALAAALAGQAKAFAKALIAAhSIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAADPIgBADIgCABIgDAAIgGABIgFgBIgEAAIgCgBIAAgDIAAgSQgLALgMAIQgMAGgOAAQgPAAgLgGgAgSgRQgHAFgEAIQgEAGgCAKQgCAKAAAKQAAAKACAKQABALAEAHQAEAIAHAGQAHAEAKAAQAEAAAFgBIAKgFIAKgJIAMgNIAAg4QgLgMgJgGQgKgIgKABQgKAAgHAEg");
	this.shape_2.setTransform(9.225,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_3.setTransform(-6.875,3.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_4.setTransform(-22.075,3.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvBlIgFgBIgCgCIgCgDIgSgvIgHgQQgDgGgFgFQgFgFgGgDQgGgCgKAAIgRAAIAABVIgBACIgCACIgEABIgHABIgGgBIgFgBIgCgCIAAgCIAAi6QAAgGADgCQADgCAEgBIArAAIAMABIAIAAQAMACAJAFQAJAEAGAHQAGAHADAIQADAJAAAKQAAALgCAIQgDAIgFAGQgFAGgIAFQgHAEgJADQAFACAEADIAIAIIAHALIAGANIASAtIADAIIAAADIAAACIgCACIgEABIgIABIgGgBgAgngLIAaAAQAKABAHgDQAIgDAFgEQAFgFADgGQACgGAAgIQAAgLgFgJQgGgIgMgDIgIgCIgNAAIgWAAg");
	this.shape_5.setTransform(-37.975,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQBsQgEgBgBgDIgDgFIgBgIIABgJQABgEACgCQABgCAEAAIAIgBIAIABQACAAACACQACACAAAEIABAJIgBAIQAAADgCACIgEAEIgIAAIgIAAgAgPA1IgDAAIgCgDIgBgCIgBgrQAAgEABgBIACgEIADgCIAFAAIAEAAQAJAAAHgDQAHgEAFgEQAEgGACgHQACgIAAgHQAAgJgCgHQgDgIgFgFQgFgFgHgDQgHgEgKAAQgJAAgHACIgMAFIgIAEIgFACIgCAAIgBgDIgBgDIAAgGIAAgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgEIALgFIAOgDIAPgBQAQAAAMAEQAMAGAIAIQAIAHAEAMQADALAAALQAAAOgEALQgDAKgHAIQgIAHgJAEQgKAEgMABIgBAlQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAIgJABIgGAAg");
	this.shape_6.setTransform(38.825,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_7.setTransform(8.925,3.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghBIQgKgFgGgIQgFgIgDgLQgDgLAAgPIAAhUIABgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAEgBIAGAAIAHAAIAEABIACACIAAACIAABRQAAAMACAHQACAIAEAFQADAFAGADQAGADAHAAQAJAAAJgHQAKgHALgNIAAhhIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAACLIgBADIgCABIgDABIgGAAIgGAAIgDgBIgCgBIgBgDIAAgSQgMANgMAGQgLAGgLAAQgOAAgKgEg");
	this.shape_8.setTransform(-5.725,3.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2BlIgEgBIgDgCIAAgCIAAi5QAAgGADgDQADgCAFgBIArAAIAMABIANADQAJABAIAFQAJAFAGAHQAGAHADAKQADAJAAAMQAAAOgFANQgFAMgJAHQgKAKgNAEQgOAEgRAAIgXAAIAABJIgBACIgCACIgEABIgGABIgHgBgAgiACIAYAAQALAAAIgDQAIgDAGgFQAFgGADgHQADgIAAgKQAAgLgEgJQgGgIgGgEQgHgEgHgBIgOgBIgYAAg");
	this.shape_9.setTransform(-37.1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:-22.075}},{t:this.shape_3,p:{x:-6.875}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3,p:{x:-22.225}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_4,p:{x:23.125}},{t:this.shape_6}]},1).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AqbjTIU3AAIAAGnI03AAg");
	this.shape_10.setTransform(0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC00").s().p("AqbDTIAAmmIU3AAIAAGmg");
	this.shape_11.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-22.1,135.5,44.3);


(lib.highlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AiVj5IErAAQBkAAAABkIAAErQAABkhkAAIkrAAQhkAAAAhkIAAkrQAAhkBkAAg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.highlight, new cjs.Rectangle(-2.5,-2.5,55,55), null);


(lib.drggr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AnzAAIPnAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBGQgegdAAgpQAAgoAegdQAdgeAoAAQApAAAdAeQAeAdAAAoQAAApgeAdQgdAegpAAQgoAAgdgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drggr, new cjs.Rectangle(-52,-10,104,20), null);


(lib.circle_half = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#006600").s().p("AkLoWQDeAACbCcQCeCegBDcQABDdieCdQibCdjeAAg");
	this.shape.setTransform(26.75,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_half, new cjs.Rectangle(0,-53.5,53.5,107), null);


(lib.Calibrator = function(mode,startPosition,loop,reversed) {
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
	this.thrsh = new cjs.Text("", "bold 32px 'Calibri'");
	this.thrsh.name = "thrsh";
	this.thrsh.textAlign = "right";
	this.thrsh.lineHeight = 41;
	this.thrsh.lineWidth = 143;
	this.thrsh.parent = this;
	this.thrsh.setTransform(-74.95,-19.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#002626").ss(3,1,1).p("AG+AAQAAhnBJhJQBJhJBoAAQBnAABKBJQBJBJAABnQAABohJBJQhKBJhnAAQhoAAhJhJQhJhJAAhogAuxAAIVvAA");
	this.shape.setTransform(25,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD0200").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBnAABKBJQBJBJAABnQAABohJBIQhKBKhnAAQhnAAhJhKg");
	this.shape_1.setTransform(94.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.thrsh}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Calibrator, new cjs.Rectangle(-220,-26.5,341.1,53), null);


(lib.background_box = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFE7DA").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_box, new cjs.Rectangle(0,0,50,50), null);


(lib.trigger_mc = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Layer_1
	this.instance = new lib.circle_half();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:2.2225,scaleY:2.2225},3).to({scaleX:2.9561,scaleY:2.9561,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-158.1,158.2,316.29999999999995);


(lib.buttons = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABoCfIgHgBIgEgDIgCgDIgbhNIiCAAIgaBMIgCAEIgEADIgGABIgLABIgMgBQgFgBgBgCQgCgBAAgDIACgJIBqklQABgDACgBIAEgCIAIgCIAMgBIAMABIAIACIAFADIADADIBqElIACAJQAAADgCACQgCABgEABIgMABIgMgBgAg4AqIBtAAIg2idg");
	this.shape.setTransform(25.095,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhYCeQgFAAgFgEQgFgDAAgKIAAkZQAAgJAFgEQAFgEAFAAIBIAAQAbAAATAFQASAGAMAKQAMAKAGAPQAGAPAAATQAAALgCALQgDAKgGAJQgFAIgHAHQgJAHgKAEQANADALAGQALAGAJAKQAJAJAFAOQAEANAAARQAAAPgEAMQgDAMgHAKQgHALgKAHQgKAHgLAFQgNAGgNACQgOADgRAAgAg+B8IA+AAQANgBALgDQAKgEAJgGQAIgHAEgKQAFgKAAgNQAAgPgFgKQgEgLgIgHQgKgHgNgEQgMgEgTAAIgzAAgAg+gUIAwAAQAQAAAJgFQALgEAGgHQAHgIADgJQADgKAAgKQAAgMgDgIQgEgKgGgGQgHgHgLgDQgKgEgSAAIgsAAg");
	this.shape_1.setTransform(26.05,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjCYQgZgLgRgTQgSgVgJgdQgKgeAAgmQAAgmALgfQAKgeASgWQASgVAagMQAZgLAeAAQAOAAANADIAYAGQALAEAIAFIAMAJIAFAFIABAEIABAFIAAAIIAAAIIgBAGIgDADIgDACQgEgBgGgFIgPgKQgKgFgOgFQgOgFgTAAQgVAAgRAIQgRAJgMAQQgNARgGAXQgHAYAAAdQAAAeAGAXQAHAXAMAPQAMAQASAIQARAIAWAAQATAAAOgFQAOgEAKgGIAQgLQAHgEADAAIADABIACACIABAGIABAKIgBAGIAAAFIgCAEIgDAFIgLAHQgHAFgMAFQgMAEgPAEQgPADgSAAQgdAAgZgKg");
	this.shape_2.setTransform(25.575,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhpCeQgGAAgFgEQgEgDgBgKIAAkZQABgJAEgEQAFgEAGAAIBHAAQAoAAAdALQAdALASATQAUAUAJAcQAKAdAAAkQABAogLAeQgLAegTAVQgVAUgdAKQgdAKgoAAgAhPB7IAsAAQAeAAAUgHQAUgJAOgPQAOgPAIgYQAGgXAAggQAAgagGgWQgGgVgOgRQgOgQgUgJQgUgJghAAIgrAAg");
	this.shape_3.setTransform(26.05,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHCeQgGAAgFgEQgFgDAAgKIAAkZQAAgJAFgEQAFgEAGAAICUAAIAEABIADADIABAGIABAIIgBAHIgBAGIgDADIgEABIh6AAIAABjIBpAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABIACADIACAEIAAAIIAAAHIgCAGIgCACIgEABIhpAAIAABxIB8AAIAEABIACADIACAGIABAIIgBAIIgCAFIgCADIgEABg");
	this.shape_4.setTransform(25.85,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhHCeIgGgBIgEgDIgBgDIAAkkQAAgJAFgEQAFgEAGAAICNAAIADABIADADIACAGIAAAIIAAAIIgCAGIgDADIgDABIhzAAIAABrIBsAAIAEABIADADIABAFIAAAIIAAAIIgBAFIgDADIgEABIhsAAIAACEIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_5.setTransform(26.1,24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmCXQgdgMgUgVQgUgUgKgdQgLgeAAgkQAAgkAMgfQALgfAVgVQAUgWAdgMQAdgMAiABQATAAAPADQAQADANAEQAMAFAIAEQAJAFADAEQADADABAEQACAEAAAIIgBAIIgBAGIgDADIgDABQgDAAgHgEIgSgKQgMgGgPgFQgRgEgWgBQgaAAgTAKQgVAJgPASQgOARgIAWQgHAYAAAaQAAAeAIAXQAJAYAOAQQAPAQAVAIQAUAJAYAAQAPAAAPgDQAPgFANgHIAAhcIhJAAQgFAAgCgDQgCgFAAgJIABgHIABgEIADgEIAEgBIBkAAIAFABIAFADIAEAFIABAHIAAB5QAAAGgCAFQgDAEgHAEIgSAIIgXAGIgYAFIgZABQgjAAgdgLg");
	this.shape_6.setTransform(24.375,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABTCfIgHgBQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgDIAAiNIiPAAIAACNIgBADIgDADIgHABIgKABIgKgBIgGgBIgEgDIgBgDIAAkvIABgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAGgCIAKgBIAKABIAHACQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABADIAAB/ICPAAIAAh/IABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAHgCIAKgBIAKABIAGACQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABADIAAEvIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_7.setTransform(25.075,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJCfIgHgBIgDgDIgBgDIAAkvIABgDQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIAHgCIAIgBIAKABIAHACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIAAEvIgBADIgDADIgHABIgKABIgJgBg");
	this.shape_8.setTransform(25.05,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZCgIgMgDIgKgEIgFgEIgCgDIgCgDIgBgFIAAgIIAAgJIACgFIACgDIADgBIAFACIAIAEIAKAEQAFACAIAAQAIAAAGgCQAFgCAEgGQAEgGABgJQACgLAAgPIAAjhIABgEIAEgCIAGgBIAKgBIAKABIAHABIADACIABAEIAADlQAAASgDAQQgDAQgJALQgIALgNAGQgOAGgTAAIgOgBg");
	this.shape_9.setTransform(23.075,24.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABDCfQgEgBgEgCIgEgEIhzieIAACeIgBADIgEADIgGABIgKABIgKgBIgGgBIgEgDIgBgDIAAkvIABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAIAGgCIAKgBIAKABIAGACQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIAACNIBviNIADgDIAFgCIAHgCIAKgBIAKABIAHACIADADIAAACIgBAHIgGAJIhnB9IBvCUIAGAJIAAAEIAAAEIgEADIgGABIgLABIgPgBg");
	this.shape_10.setTransform(26.55,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhBCfQgGAAgFgEQgFgEAAgJIAAkkIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAHgCIAKgBIAKABIAHACQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAEQIBwAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADADIABAFIABAIIgBAJIgBAFIgDAEIgEABg");
	this.shape_11.setTransform(26.95,24.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACNCeIgHgBIgDgDIgBgDIAAkSIgBAAIhvETIgCADIgEACIgGABIgIABIgIgBIgGgBIgEgCIgCgDIhrkTIAAESIgBADIgDADIgHABIgKABIgKgBIgHgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgDIAAkiQAAgKAGgEQAFgFAHAAIAaAAQAIAAAGACQAFABAFADQAEAEADAEIAGAMIBaDkIAAAAIBejjIAGgNQADgFAEgDQAEgDAFgBQAEgCAHAAIAbAAIAHACQADABACACIAEAGQACADAAAFIAAEiIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_12.setTransform(25.075,24.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhsCeIgGgBIgDgCIgBgEIAAkiQgBgKAGgFQAGgEAGAAIAVAAQAHABAFABQAFABAEADQAEADADAFIAIAMIBJCKIAOAZIAMAYIALAWIAMAYIgBgpIAAgoIAAiqIABgEIAEgCIAHgCIAKAAIAKAAIAGACIADACIABAEIAAEiQAAAFgBADQgCAEgDACIgFADIgHABIgOAAIgMgBQgEgCgFgDQgEgDgFgHQgEgGgFgJIhgizIgOgdIgPgeIgBAAIABAkIAAAkIAAC+IgBAEIgDACIgHABIgKABIgKgBg");
	this.shape_13.setTransform(25.05,24.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag/CYQgbgKgQgVQgRgUgJgeQgIgeAAgnQAAglAJgeQAJgeASgWQASgVAbgMQAbgLAjAAQAjgBAaALQAaAKARAVQASATAIAeQAIAeAAAnQAAAkgJAfQgJAfgRAWQgTAVgbAMQgbALgjAAQgkAAgZgKgAgsh0QgSALgMARQgMARgFAXQgFAXAAAZQAAAaAFAYQAFAYALAQQALARASAKQASAJAcAAQAbAAASgKQATgKAMgRQALgSAFgXQAFgXAAgZQAAgbgFgXQgFgWgLgRQgLgSgSgJQgTgKgbAAQgaAAgTAKg");
	this.shape_14.setTransform(25.025,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhVCeIgGgBIgEgDIgBgDIAAkjQAAgJAFgFQAFgEAGAAIBEAAIATABIAWAEQANADANAHQANAIAKALQAJALAFAPQAFAPAAASQAAAYgHATQgJATgOAMQgOANgWAIQgVAHgcAAIgkAAIAAByIgBADIgEADIgGABIgKABIgKgBgAg2ADIAmAAQASAAANgEQAMgFAJgJQAIgIAEgMQAFgNAAgOQAAgTgHgNQgIgNgKgGQgKgHgMgBIgVgCIgnAAg");
	this.shape_15.setTransform(26.05,24.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ACJCzQgLgEgOgHIgegTQgRgLgPgPQgMAIgSAGQgSAEgXAAQgkAAgagKQgagKgRgUQgRgVgIgeQgJgeAAgmQAAgmAJgeQAJgeATgWQASgVAbgMQAbgLAkAAQAhgBAaALQAZAKASAVQARATAJAeQAJAeAAAmQAAAUgCARQgDASgFAQQgFAQgHAOQgIANgKAMQASAOANAIIAWANIAOAGQAFACACACQADACABAEIABAMIgBAKIgCAFIgCADIgDABQgFAAgLgFgAg/iJQgTAKgLASQgMARgFAXQgFAXAAAZQAAAaAEAYQAFAYALAQQALARATAKQASAJAcAAQAaAAATgKQATgKALgRQAMgSAFgXQAFgYAAgYQAAgbgFgXQgFgWgLgRQgLgSgTgJQgSgKgaAAQgcAAgSAKg");
	this.shape_16.setTransform(26.725,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABJCeIgHgBIgEgDIgCgFIgdhLIgLgXQgFgLgIgHQgHgIgKgEQgKgFgOAAIgcAAIAACHIgBADIgEADIgGABIgKABIgKgBIgHgBIgDgDIgBgDIAAkkQAAgJAFgEQAFgEAFAAIBEAAIAUABIANABQASADAOAHQAOAHAKALQAJAKAFAOQAFANAAARQAAAPgFANQgEANgIAJQgIAKgLAHQgLAHgOAEQAHADAHAGQAGAFAGAHQAFAHAFAKIAKAWIAcBFIAEANIABAFIAAADIgDADIgHABIgMABIgKgBgAg+gRIApAAQAQAAAMgDQAMgFAIgHQAIgHAEgKQADgKAAgLQAAgTgIgMQgIgNgUgGQgGgCgHAAIgUgBIgjAAg");
	this.shape_17.setTransform(26.225,24.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnCgQgNgDgKgEQgMgDgGgFQgIgEgCgDQgEgDgBgEQgBgEAAgJIAAgIIACgGIACgDIAEgBQADAAAHAFIAQAJQAJAEAOAFQAOAEASAAQAMAAAMgEQALgDAJgHQAHgHAFgKQAEgJAAgNQAAgNgGgKQgGgJgKgHQgKgIgMgGIgagMIgagNQgNgIgKgJQgKgLgGgNQgGgPAAgTQAAgUAHgPQAHgPANgLQAMgKASgGQASgFAUAAQAKAAALABQAKACAKAEQAJACAIAEIAJAGIADAEIACAEIAAAEIABAIIgBAHIgBAHIgCADIgDABQgDAAgFgEIgPgHQgIgFgLgDQgMgDgOAAQgMAAgKADQgJAEgHAFQgHAGgDAIQgCAIAAAKQAAANAFAJQAHAJAKAIQAKAHANAHIAZALIAbAPQANAFAJALQALAKAGAOQAGANAAAUQAAAVgIASQgIASgPALQgOAMgUAGQgUAHgVgBQgQABgOgDg");
	this.shape_18.setTransform(25.05,24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJCeIgHgBIgDgDIgBgDIAAkRIhZAAIgDgBIgDgDIgBgGIgBgIIABgIIABgGIADgDIADgBIDbAAIAEABIACADIACAGIAAAIIAAAIIgCAGIgCADIgEABIhZAAIAAERIgBADIgDADIgHABIgKABIgJgBg");
	this.shape_19.setTransform(25.075,24.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxCaQgWgIgPgPQgPgPgIgWQgJgWAAgdIAAjDIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAgBIAHgBIAKgBIAKABIAHABQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAAC+QAAAWAFAQQAGAQAKALQAKALAOAGQAPAGAQAAQATAAAOgGQAOgFAKgLQAKgLAFgQQAGgQgBgVIAAjAIACgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABgBIAHgBIAKgBIAKABIAGABQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAADAQAAAcgJAYQgIAWgQAPQgPAQgXAIQgWAIgbAAQgbAAgVgHg");
	this.shape_20.setTransform(25.05,24.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHCgIgIgBIgEgBIgEgCIgCgCIgCgDIhnklIgCgJQAAgDACgBQACgCAFgBIANgBIALABIAGACIAEACIABAEIBaEJIBYkJIACgEIAEgCIAGgCIAMgBIAMABQAEABACACQACACgBACIgCAJIhnElIgDAEQgBACgDABIgIABIgMABIgIAAg");
	this.shape_21.setTransform(25.0813,24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABQCfIgIgBQgEgCgBgCIgDgFIhBjuIgBAAIg9DuIgCAFQgCACgDACIgIABIgNABIgOgBIgIgBQgEgCgBgCIgDgFIhUkjIgBgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQACgCAEgBIANgBIAMABIAHACIADACIABAEIBHEIIBEkHQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAHgCIALgBIALABIAGACQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIACAEIBIEHIABAAIBFkIIACgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAGgCIAMgBIALABQAFABABACQACACAAACIgBAJIhUEjIgDAFQgCACgDACIgIABIgNABIgNgBg");
	this.shape_22.setTransform(25.025,24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABTCfIgHgBIgEgDIgCgDIhGh+IhHB+IgCADIgEADIgHABIgMABIgNgBIgGgDQgCgCABgCQAAgEADgFIBXiQIhTiNQgDgFAAgEQgBgCACgCQACgCAEgBIAOgBIAMABIAHACQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIADADIBDB2IBDh2IACgDQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAGgCIAMgBIAMABQAFABACACQACACgBACQAAAEgDAFIhSCMIBVCRQAEAFAAAEQABACgCACIgHADIgOABIgMgBg");
	this.shape_23.setTransform(25.0633,24.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJCfIgHgBIgDgDIgBgDIAAh1IhaixIgDgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQABgCAFgBIANgBIAMABIAHACIAEACIACAEIAsBaIAMAcIAMAdIAAAAIAMgcIAMgcIAshbIACgEIAEgCIAGgCIAKgBIAOABQAFABACACQACACAAACIgEAJIhZCxIAAB1IgBADIgEADIgGABIgKABIgJgBg");
	this.shape_24.setTransform(25.075,24.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhaCeQgGAAgDgEQgEgEgBgIIAAgJIABgGIACgGIADgGIAFgJICRjkIiPAAIgFgBIgCgDIgBgFIgBgIIABgIIABgGIACgDIAFgBICuAAQAHAAAEAEQAEAEAAAHIAAAKIAAAHIgCAGIgEAHIgFAIIiQDjICZAAQAEgBACAFQADAEAAAKIgBAIIgCAFIgCADIgEABg");
	this.shape_25.setTransform(25.25,24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFBmIgDgBIgDgBIAAgCIAAjDIAAgCIADgBIADgBIAFAAIAGAAIAEABIABABIABACIAADDIgBACIgBABIgEABIgGAAIgFAAg");
	this.shape_26.setTransform(40.25,23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBEQgMgFgJgIQgIgJgEgOQgFgNAAgSQAAgRAFgNQAEgNAJgKQAIgKALgFQAMgEAOgBQAPABALAEQALAFAHAJQAHAIADAMQAEALAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAALADAIQACAJAFAHQAFAGAIAEQAJACAKAAQAKAAAHgBIANgDIAJgEIAFgCIACABIABABIABAEIAAAEIAAAEIAAACIgBACIgBABIgFADIgKAEIgPADQgIACgKAAQgPgBgMgEgAgNgxQgHADgFAGQgEAFgDAHQgCAIgBAIIBHAAQABgTgJgLQgJgLgSABQgIAAgGADg");
	this.shape_27.setTransform(29.275,27);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfBhQgKgFgGgKQgHgJgDgNQgDgNAAgPQAAgRAEgNQAEgNAHgKQAHgJALgGQAKgFAOAAQALAAAJAFQAKAFAJAKIAAhNIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAADDIgBACIgCABIgDABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgSQgKALgLAHQgMAGgMAAQgPAAgKgGgAgQgQQgHAFgEAHQgEAGgCAJQgCAJAAAKQAAAKACAJQABAKAEAHQAEAHAGAFQAHAEAJAAIAJgBIAJgEIAJgIIALgMIAAg1QgKgLgJgHQgJgGgJAAQgJAAgGAEg");
	this.shape_28.setTransform(13.575,23.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAXQgFgGAAgRQAAgQAFgGQAGgFAOAAQAPAAAFAFQAGAGAAAQQAAARgGAGQgFAFgPAAQgOAAgGgFg");
	this.shape_29.setTransform(25.175,37.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("ABMCfIgKgBQgEgCgBgCIgDgEIg7hyIg7ByIgDAEQgCACgDACIgLABIgSABIgTgBQgHgBgDgDQgCgCABgGIAGgNIBMiJIhGiCIgGgNQgCgGADgCQADgDAHgBIAWgBIASABIALACIAFADIADAEIA3BpIA2hpIADgEIAFgDQADgBAHgBIARgBIATABQAHABADADQACACgBAGIgFANIhHCBIBLCKIAGANQABAGgDACQgDADgHABIgWABIgSgBg");
	this.shape_30.setTransform(25.0844,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer_3
	this.hl = new lib.highlight();
	this.hl.name = "hl";
	this.hl.setTransform(25,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(30));

	// Layer_2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#003366").ss(1,1,1).p("AiVj5IErAAQBkAAAABkIAAErQAABkhkAAIkrAAQhkAAAAhkIAAkrQAAhkBkAAg");
	this.shape_31.setTransform(25,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#99CCFF").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape_32.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-9,55,65.1);


// stage content:
(lib.look_and_click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.ltr_poss = [[0,1,2,3,4,5],[6,7,8,9,10,11],[12,13,14,15,16,17],[18,19,20,21,22,23],[24,25,26,27,28,29]];
		this.seld = [0,0];
		
		this.rightButton = function() {//choose next
			if(this.rowSelect) {
				this['box_'+this.seld[0]].alpha = 0;
				this.seld[0] = (this.seld[0]+1)%5;
				this['box_'+this.seld[0]].alpha = 1;
			}else{
				this['ltr_'+this.ltr_poss[this.seld[0]][this.seld[1]]].hl.alpha = 0;
				this.seld[1] = (this.seld[1]+1)%this.ltr_poss[this.seld[0]].length;
				this['ltr_'+this.ltr_poss[this.seld[0]][this.seld[1]]].hl.alpha = 1;
			}
		}
		this.leftButton = function() {//select this
			if(this.rowSelect) {
				this.rowSelect = false;
				this['box_'+this.seld[0]].alpha = 0;
				this['ltr_'+this.ltr_poss[this.seld[0]][0]].hl.alpha = 1;
			}else{
				this.rowSelect = true;
				var ltr = this['ltr_'+this.ltr_poss[this.seld[0]][this.seld[1]]];
				if(ltr.val == "!") {
					this.outpt_txt.text = '';
				}else if(ltr.val == '-') {
					this.outpt_txt.text = this.outpt_txt.text.slice(0,this.outpt_txt.text.length-1);
				}else{
					this.outpt_txt.text = this.outpt_txt.text + ltr.val;
				}
				ltr.hl.alpha = 0;
				this.seld = [0,0];
				this.box_0.alpha = 1;
			}
		}
		/*this.lineResponse = function() {
			if(this.cal_dur) {
				this.rline_big.graphics.clear();
				if(this.cal_data[this.eye_bss[0]].length < 500) {
					pt = [30,30];
				}else if(this.cal_data[this.eye_bss[0]].length < 1000) {
					pt = [this.canvas_width - 30, this.canvas_height - 30];
				}else{
					navigator.clipboard.writeText(JSON.stringify(this.cal_data));
					this.cal_dur = false;
					this.processData();
					return;
				}
				this.rline_big.graphics.beginFill("red");
				this.rline_big.graphics.drawCircle(pt[0],pt[1],20);
				this.rline_big.graphics.endFill();
				this.rline_big.graphics.beginFill("black");
				this.rline_big.graphics.drawCircle(pt[0],pt[1],5);
				this.rline_big.graphics.endFill();
				for(i=0; i<this.eye_bss.length; i++) {
					this.cal_data[this.eye_bss[i]].push(Math.log(this.reslt.faceBlendshapes[0]['categories'][this.eye_bss[i]]['score']));
				}
			}else if(this.procssd) {
				h_dst = [];
				v_dst = [];
				for(i=0; i<this.eye_bss.length; i++) {
					sc = Math.log(this.reslt.faceBlendshapes[0]['categories'][this.eye_bss[i]]['score']);
					if(i < this.eye_bss.length/2) {
						h_dst.push(((sc-this.cald[i][0])/(this.cald[i][1]-this.cald[i][0])*(this.canvas_width-60))+30);
					}else{
						v_dst.push(((sc-this.cald[i][0])/(this.cald[i][1]-this.cald[i][0])*(this.canvas_height-60))+30);
					}
				}
				tg = [this.mean_nums(h_dst),this.mean_nums(v_dst)];
				lp = this.last_pos;
				pt = [lp[0] + (tg[0]-lp[0])/10,lp[1] + (tg[1]-lp[1])/10];
				console.log(tg[0],tg[1]);
				this.last_pos[0] = pt[0];
				this.last_pos[1] = pt[1];
				this.rline_big.graphics.clear();
				this.rline_big.graphics.beginFill("red");
				this.rline_big.graphics.drawCircle(pt[0],pt[1],20);
				this.rline_big.graphics.endFill();
			}
		}*/
		this.calibrtLeft = function(e) {
			this.calibratng = true;
			var posx = Math.max(this.canvas_width + this.cal_dims[0][0]/2,Math.min(this.drggr_right.x,e.stageX/stage.scale));
			this.drggr_left.x = posx;
			this.rline_vals[0] = ((this.input_frame.x - posx)/((this.cal_dims[0][1]-this.cal_dims[0][0])/4))*this.maxLook[0];
			this.cal_left.text = (this.rline_vals[0]).toFixed(5);
		}
		this.calibrtRight = function(e) {
			this.calibratng = true;
			var posx = Math.min(this.canvas_width*1.5 - this.cal_dims[0][0]/2,Math.max(this.drggr_left.x,e.stageX/stage.scale));
			this.drggr_right.x = posx;
			//this.rline_vals[1] = ((this.input_frame.x - this.drggr_left.x)/((this.cal_dims[0][1]-this.cal_dims[0][0])/4))*this.maxLook[0];
			this.rline_vals[1] = ((this.drggr_right.x - this.input_frame.x)/((this.cal_dims[0][1]-this.cal_dims[0][0])/4))*this.maxLook[1];
			this.cal_right.text = (this.rline_vals[1]).toFixed(5);
		}
		this.calibrtEnd = function() {
			console.log('end');
			if(this.kd !== null) {
				document.removeEventListener("keydown",this.kd);
				this.kd = null;
				this.calibratng_text = '';
			}
			this.calib_info.thrsh_left = this.rline_vals[0];
			this.calib_info.thrsh_right = this.rline_vals[1];
			this.calib_info.duratn = this.rline_vals[2];
			/*cookie_obj = new Object();
			cookie_obj['thrsh_bs_910'] = this.calib_info.thrsh;
			cookie_obj['duratn_bs_910'] = this.calib_info.duratn;
			document.cookie = JSON.stringify(cookie_obj);*/
			this.calibratng = false;
			this.cal_dur = false;
		}
		this.calibrtText = function(e) {
			console.log(e);
			if(this.parent.calibratng == false) {
				this.parent.calibratng = true;
				this.parent.cal_type = this.typ;
				if(this.parent.kd === null) {
					document.addEventListener("keydown",this.parent.kd = this.parent.handleKeyPress.bind(this.parent));
				}
			}else{
				this.parent.calibrtEnd();
			}
		}
		this.calibrtDur = function(e) {
			/*console.log('duratn');
			if(this.calibratng == false) {
				this.cal_dur = true;
				this.calibrtText(e);
			}else{
				this.calibrtEnd();
			}*/
		}
		this.handleKeyPress = function(e) {
			console.log(e);
			if(isNaN(e.key) == false || e.key == '.') {
				this.calibratng_text += e.key;
				if(this.cal_type == 0) {
					this.cal_left.text = this.calibratng_text;
				}else if(this.cal_type == 1) {
					this.cal_right.text = this.calibratng_text;
				}else{
					this.dur_txt.text = this.calibratng_text;
				}
				this.rline_vals[this.cal_type] = Number(this.calibratng_text);
			}else if(e.key == 'Enter') {
				this.calibrtEnd();
			}
		}
		//gonna use looking left and right and up and blinking I guess?
		this.blendshapes = {browDownLeft: 1,browDownRight: 2,browInnerUp: 3,browOuterUpLeft: 4,browOuterUpRight: 5,cheekPuff: 6,cheekSquintLeft: 7,cheekSquintRight: 8,eyeBlinkLeft: 9,eyeBlinkRight: 10,eyeLookDownLeft: 11,eyeLookDownRight: 12,eyeLookInLeft: 13,eyeLookInRight: 14,eyeLookOutLeft: 15,eyeLookOutRight: 16,eyeLookUpLeft: 17,eyeLookUpRight: 18,eyeSquintLeft: 19,eyeSquintRight: 20,eyeWideLeft: 21,eyeWideRight: 22,jawForward: 23,jawLeft: 24,jawOpen: 25,jawRight: 26,mouthClose: 27,mouthDimpleLeft: 28,mouthDimpleRight: 29,mouthFrownLeft: 30,mouthFrownRight: 31,mouthFunnel: 32,mouthLeft: 33,mouthLowerDownLeft: 34,mouthLowerDownRight: 35,mouthPressLeft: 36,mouthPressRight: 37,mouthPucker: 38,mouthRight: 39,mouthRollLower: 40,mouthRollUpper: 41,mouthShrugLower: 42,mouthShrugUpper: 43,mouthSmileLeft: 44,mouthSmileRight: 45,mouthStretchLeft: 46,mouthStretchRight: 47,mouthUpperUpLeft: 48,mouthUpperUpRight: 49,noseSneerLeft: 50,noseSneerRight: 51};
		this.isSetup = false;
		this.canvas_width = 1024;
		this.canvas_height = 576;
		this.calibratng = false;
		this.calibratng_text = '';
		this.calib_default = {thrsh_left:5,thrsh_right:5,duratn:20};
		this.calib_info = null;
		this.line = new createjs.Shape();
		this.line.graphics.setStrokeStyle(10);
		this.rline = new createjs.Shape();
		this.rline.graphics.setStrokeStyle(400);
		this.rline_big = new createjs.Shape();
		this.rline_big.graphics.setStrokeStyle(10);
		this.rline_vals = [this.calib_default.thrsh_left,this.calib_default.thrsh_right,this.calib_default.duratn,0,0];//[default pixel size,min,max,threshhld,duratn,count]
		this.allLandmarks = null;
		this.reslt = null;
		this.reslts = [];
		this.resltSetInterval = null;
		this.kd = null;
		this.cal_type = -1;
		this.cal_poss = [[50,358,666,974],[50,209,367,526],0,[49,49]];
		this.cal_dims = [[52,972],[144,524]];
		this.eye_bss = [11,12,13,14,15,16,17,18];
		this.cal_data = {};
		this.cald = new Object();
		//this.cald = [];
		this.lookLeft = [];
		this.lookRight = [];
		this.maxLook = [5,5];
		this.procssd = false;
		this.last_pos = [994,546];
		this.landmark_list = ['FACE_LANDMARKS_LIPS','FACE_LANDMARKS_RIGHT_EYE','FACE_LANDMARKS_LEFT_EYE','FACE_LANDMARKS_FACE_OVAL','FACE_LANDMARKS_RIGHT_IRIS','FACE_LANDMARKS_LEFT_IRIS'];
		this.pointList = [468,473];
		this.ready = false;
		this.rowSelect = true;
		this.click_sound = null;
		this.beep_sound = null;
		
		
		
		this.drawLandmarker = function() {
			this.line.graphics.clear();
			for(j=0; j<this.landmark_list.length; j++) {
				shp = this.allLandmarks[this.landmark_list[j]];
				this.line.graphics.beginStroke("black");
				for(i=0; i<shp.length; i++) {
					this.line.graphics.moveTo(this.reslt.faceLandmarks[0][shp[i].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[i].start].y*(this.canvas_height));
					this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[i].end].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[i].end].y*(this.canvas_height));
				}
				this.line.graphics.endStroke();
			}
			for(k=0; k<this.pointList.length; k++) {
				this.line.graphics.beginFill("red");
				this.line.graphics.drawCircle(this.reslt.faceLandmarks[0][this.pointList[k]].x*(this.canvas_width),this.reslt.faceLandmarks[0][this.pointList[k]].y*(this.canvas_height),5);
				this.line.graphics.endFill();
			}
		}
		//https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker for link to list of blendshapes
		this.drawResponse = function() {
			var s_rds = [this.reslt.faceBlendshapes[0]['categories'][13]['score'],this.reslt.faceBlendshapes[0]['categories'][14]['score'],this.reslt.faceBlendshapes[0]['categories'][15]['score'],this.reslt.faceBlendshapes[0]['categories'][16]['score']];
			var rds = [Math.log(s_rds[0])*-1,Math.log(s_rds[1])*-1,Math.log(s_rds[2])*-1,Math.log(s_rds[3])*-1];
			var left_sc = rds[0]+rds[3] - rds[1] - rds[2];
			var right_sc = rds[1]+rds[2] - rds[0] - rds[3];
			if(left_sc > this.rline_vals[0]) {
				this.rline_vals[3] += 1;
				this.rline_vals[4] = 0;
				if(this.rline_vals[3] == this.rline_vals[2]) {
					console.log('trigger left');
					if(this.ready) {
						this.trigger_left.play();
						this.beep_sound.play();
						this.leftButton();
					}
				}
			}else if(right_sc > this.rline_vals[1]) {
				this.rline_vals[4] += 1;
				this.rline_vals[3] = 0;
				if(this.rline_vals[4] == this.rline_vals[2]) {
					console.log('trigger right');
					if(this.ready) {
						this.trigger_right.play();
						this.click_sound.play();
						this.rightButton();
					}
				}
			}else{
				this.rline_vals[3] = 0;
				this.rline_vals[4] = 0;
			}
			this.lookLeft.push(left_sc);
			this.lookRight.push(right_sc);
			this.lookLeft = this.lookLeft.slice(-190);
			this.maxLook = [Math.max(left_sc,this.maxLook[0]),Math.max(right_sc,this.maxLook[1])];
			this.lookRight = this.lookRight.slice(-190);
			this.rline.graphics.clear();
			this.rline.graphics.setStrokeStyle(5);
			this.rline.graphics.beginStroke('black');
			var midline = this.cal_dims[0][0]+((this.maxLook[0]/(this.maxLook[0] + this.maxLook[1]))*(this.cal_dims[0][1]-this.cal_dims[0][0]));
			this.rline.graphics.moveTo(midline,this.cal_dims[1][0]);
			this.rline.graphics.lineTo(midline,this.cal_dims[1][1]);
			this.rline.graphics.endStroke();
			var x1;
			var x2;
			var cntLeft = 0;
			var cntRight = 0;
			for(var i=1; i<this.lookLeft.length; i++) {
				x1 = this.cal_dims[0][0]+(((this.maxLook[0]-this.lookLeft[i-1])/(this.maxLook[0]+this.maxLook[1]))*(this.cal_dims[0][1]-this.cal_dims[0][0]));
				x2 = this.cal_dims[0][0]+(((this.maxLook[0]-this.lookLeft[i])/(this.maxLook[0]+this.maxLook[1]))*(this.cal_dims[0][1]-this.cal_dims[0][0]));
				if(this.lookLeft[i-1] > this.rline_vals[0] && this.lookLeft[i] > this.rline_vals[0]) {
					cntLeft += 1;
					cntRight = 0;
					if(cntLeft == this.rline_vals[2]) {
						this.rline.graphics.beginStroke('black');
					}else if(cntLeft > this.rline_vals[2]) {
						this.rline.graphics.beginStroke('black');
					}else{
						this.rline.graphics.beginStroke('green');
					}
				}else if(this.lookRight[i-1] > this.rline_vals[1] && this.lookRight[i] > this.rline_vals[1]){
					cntRight += 1;
					cntLeft = 0;
					if(cntRight == this.rline_vals[2]) {
						this.rline.graphics.beginStroke('black');
					}else if(cntRight > this.rline_vals[2]) {
						this.rline.graphics.beginStroke('black');
					}else{
						this.rline.graphics.beginStroke('green');
					}
				}else{
					cntLeft = 0;
					cntRight = 0;
					this.rline.graphics.beginStroke('red');
				}
				this.rline.graphics.moveTo(x1,this.cal_dims[1][0]+(i-1));
				this.rline.graphics.lineTo(x2,this.cal_dims[1][0]+i);
				this.rline.graphics.endStroke();
			}
			this.drggr_left.x = this.input_frame.x - ((this.calib_info.thrsh_left/this.maxLook[0])*((this.cal_dims[0][1]-this.cal_dims[0][0])/4));
			this.drggr_right.x = this.input_frame.x + ((this.calib_info.thrsh_right/this.maxLook[1])*((this.cal_dims[0][1]-this.cal_dims[0][0])/4));
			this.cal_left.text = (this.rline_vals[0]).toFixed(5);
			this.cal_right.text = (this.rline_vals[1]).toFixed(5);
			this.dur_txt.text = (this.rline_vals[2]).toFixed(0);
		}
		this.lineResponse = function() {
			tm = 250;
			if(this.cal_dur2) {
				this.rline_big.graphics.clear();
				this.rline_big.graphics.beginStroke('black');
				this.rline_big.graphics.moveTo(this.cal_sequence[0][0],this.cal_sequence[0][1]);
				for(var p=1; p<this.cal_sequence.length; p++) {
					this.rline_big.graphics.lineTo(this.cal_sequence[p][0],this.cal_sequence[p][1]);
				}
				this.rline_big.graphics.endStroke();
				console.log(this.cal_poss[3][0] == this.cal_sequence[this.cal_poss[2]][0],this.cal_poss[3][1] == this.cal_sequence[this.cal_poss[2]][1]);
				if(this.cal_poss[3][0] == this.cal_sequence[this.cal_poss[2]][0] && this.cal_poss[3][1] == this.cal_sequence[this.cal_poss[2]][1]) {
					this.cal_poss[2] += 1;
					if(this.cal_poss[2] >= this.cal_sequence.length) {
						this.rline_big.graphics.clear();
						navigator.clipboard.writeText(JSON.stringify(this.cal_data));
						this.cal_dur2 = false;
						this.processData();
						return;
					}
				}
				this.cal_poss[3][0] = this.getP(this.cal_poss[3][0],0);
				this.cal_poss[3][1] = this.getP(this.cal_poss[3][1],1);
				this.rline_big.graphics.beginFill("red");
				this.rline_big.graphics.drawCircle(this.cal_poss[3][0],this.cal_poss[3][1],20);
				this.rline_big.graphics.endFill();
				this.rline_big.graphics.beginFill("black");
				this.rline_big.graphics.drawCircle(this.cal_poss[3][0],this.cal_poss[3][1],5);
				this.rline_big.graphics.endFill();
				for(i=0; i<this.eye_bss.length; i++) {
					this.cal_data[this.eye_bss[i]].push(Math.log(this.reslt.faceBlendshapes[0]['categories'][this.eye_bss[i]]['score']));
				}
				/*if(this.cal_data[this.eye_bss[0]].length >= tm*this.cal_sequence.length) {
					this.rline_big.graphics.clear();
					navigator.clipboard.writeText(JSON.stringify(this.cal_data));
					this.cal_dur2 = false;
					this.processData();
					return;
				}*/
				//}*/
			}else if(this.procssd) {
				var sc,prop,prop_d,targ,dir;
				var w = (this.canvas_width-100)/2;
				var h = (this.canvas_height-100)/2;
				var hor = [false,false,true,true,true,true,false,false];
				var hir = [1,1,1,-1,-1,1,-1,-1];
				var cols = ["red","orange","red","orange","yellow","green","blue","green","blue"];
				offs = [510,520,270,280,290,300,530,540];
				this.rline_big.graphics.clear();
				for(var i=0; i<this.eye_bss.length; i++) {
					this.rline_big.graphics.beginFill(cols[i]);
					sc = Math.log(this.reslt.faceBlendshapes[0]['categories'][this.eye_bss[i]]['score']);
					console.log(this.eye_bss[i], sc);
					if(this.eye_bss[i] == 13 || this.eye_bss[i] == 16) {
						if(sc > this.cald[this.eye_bss[i]].mid) { 
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].right-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.min(w+prop_d,974);
						}else{
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].left-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.max(w-prop_d,50);
						}
						this.rline_big.graphics.drawCircle(targ,offs[i],50);
					}else if(this.eye_bss[i] == 14 || this.eye_bss[i] == 15) {
						if(sc < this.cald[this.eye_bss[i]].mid) {
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].right-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.min(w+prop_d,974);
						}else{
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].left-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.max(w-prop_d,50);
						}
						this.rline_big.graphics.drawCircle(targ,offs[i],50);
					}else if(this.eye_bss[i] == 11 || this.eye_bss[i] == 12) {
						if(sc > this.cald[this.eye_bss[i]].mid) { 
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].down-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*h;
							targ = Math.min(h+prop_d,526);
						}else{
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].up-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.max(50,w-prop_d);
						}
						this.rline_big.graphics.drawCircle(offs[i],targ,50);
					}else if(this.eye_bss[i] == 17 || this.eye_bss[i] == 18) {
						if(sc < this.cald[this.eye_bss[i]].mid) { 
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].down-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*h;
							targ = Math.min(h+prop_d,526);
						}else{
							prop = Math.abs(sc-this.cald[this.eye_bss[i]].mid)/Math.abs(this.cald[this.eye_bss[i]].up-this.cald[this.eye_bss[i]].mid);
							prop_d = prop*w;
							targ = Math.max(50,w-prop_d);
						}
						this.rline_big.graphics.drawCircle(offs[i],targ,50);
					}
					this.rline_big.graphics.endFill();
				}
			}
		}
		this.holdLandmarks = function(FLm) {
			this.allLandmarks = FLm;
		}
		this.useVision = function(reslt) {	
			if(this.isSetup) {
				if(reslt.faceLandmarks.length > 0) {
					this.reslt = reslt;
				}
			}
		}
		this.readyState = function() {
			if(this.ready_btn.currentFrame == 0) {
				this.ready = true;
				this.ready_btn.gotoAndStop(1);
			}else{
				this.ready = false;
				this.ready_btn.gotoAndStop(0);
			}
		}
		this.setup = function() {
			this.video_frame.addChild(this.line);
			this.big_frame.addChild(this.rline_big);
			this.input_frame.addChild(this.rline);
			this.drggr_left.addEventListener('pressmove',this.calibrtLeft.bind(this));
			this.drggr_left.addEventListener('pressup', this.calibrtEnd.bind(this));
			this.drggr_right.addEventListener('pressmove',this.calibrtRight.bind(this));
			this.drggr_right.addEventListener('pressup', this.calibrtEnd.bind(this));
			this.cal_btn_left.typ = 0;
			this.cal_btn_right.typ = 1;
			this.dur_btn.typ = 2;
			this.cal_btn_left.addEventListener('click',this.calibrtText.bind(this.cal_btn_left));
			this.cal_btn_right.addEventListener('click',this.calibrtText.bind(this.cal_btn_right));
			this.dur_btn.addEventListener('click', this.calibrtText.bind(this.dur_btn));
			this.dur_txt.mouseEnabled = this.cal_left.mouseEnabled = this.cal_right.mouseEnabled = false;
			this.ready_btn.addEventListener('click',this.readyState.bind(this));
			//gotQuery = window.location.search;
			//console.log(gotQuery);
			//gotQueryParams = new URLSearchParams(window.location.search);
			//console.log(gotQueryParams);
			/*if(gotQueryParams.get('typ') == 'bs') {
				this.calib_default.typ = 'bs';
				this.calib_default.id = gotQueryParams.get('id');
			}*/
			this.calib_info = JSON.parse(JSON.stringify(this.calib_default));
			/*if(document.cookie != '') {//check if cookie property exists , need to also check if right cookie
				gotCookie = JSON.parse(document.cookie);
				console.log(gotCookie);
				if('duratn_bs_910' in gotCookie) {
					console.log('found cookie',gotCookie);
					this.rline_vals[3] = this.calib_info.thrsh = gotCookie["thrsh_bs_910"];
					this.rline_vals[4] = this.calib_info.duratn = gotCookie["duratn_bs_910"];
				}
			}*/
			var ltrs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_','-','. ','!'];
			for(var i=0; i<30; i++) {
				this['ltr_'+i].gotoAndStop(i);
				this['ltr_'+i].hl.alpha = 0;
				this['ltr_'+i].val = ltrs[i];
			}
			for(var j=1; j<5; j++) {
				this['box_'+j].alpha = 0;
			}
			this.trigger_left.addEventListener('click',this.leftButton.bind(this));
			this.trigger_right.addEventListener('click',this.rightButton.bind(this));
			this.resltSetInterval = setInterval(function() {
				if(this.reslt !== null) {
					this.drawLandmarker();
					this.lineResponse();
					if(this.calibratng == false) {
						this.drawResponse();
					}
				}
			}.bind(this),20);
			this.click_sound = document.createElement("audio");
			this.click_sound.src = "myClick.wav";
			this.click_sound.setAttribute("preload", "auto");
			this.click_sound.setAttribute("controls", "none");
			this.click_sound.style.display = "none";
			document.body.appendChild(this.click_sound);
			this.beep_sound = document.createElement("audio");
			this.beep_sound.src = "myBeep.wav";
			this.beep_sound.setAttribute("preload", "auto");
			this.beep_sound.setAttribute("controls", "none");
			this.beep_sound.style.display = "none";
			document.body.appendChild(this.beep_sound);
			this.isSetup = true;
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.trigger_right = new lib.trigger_mc();
	this.trigger_right.name = "trigger_right";
	this.trigger_right.setTransform(1020.9,288,1,1,0,0,180);

	this.trigger_left = new lib.trigger_mc();
	this.trigger_left.name = "trigger_left";
	this.trigger_left.setTransform(3.1,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.trigger_left},{t:this.trigger_right}]}).wait(1));

	// Layer_2
	this.ltr_29 = new lib.buttons();
	this.ltr_29.name = "ltr_29";
	this.ltr_29.setTransform(778.5,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.box_4 = new lib.selector_box();
	this.box_4.name = "box_4";
	this.box_4.setTransform(512.05,526.1,1,1,0,0,0,313.7,37.9);

	this.box_3 = new lib.selector_box();
	this.box_3.name = "box_3";
	this.box_3.setTransform(512.05,452.6,1,1,0,0,0,313.7,37.9);

	this.box_2 = new lib.selector_box();
	this.box_2.name = "box_2";
	this.box_2.setTransform(512.05,379.1,1,1,0,0,0,313.7,37.9);

	this.box_1 = new lib.selector_box();
	this.box_1.name = "box_1";
	this.box_1.setTransform(512.05,305.6,1,1,0,0,0,313.7,37.9);

	this.box_0 = new lib.selector_box();
	this.box_0.name = "box_0";
	this.box_0.setTransform(512.05,232.1,1,1,0,0,0,313.7,37.9);

	this.ltr_5 = new lib.buttons();
	this.ltr_5.name = "ltr_5";
	this.ltr_5.setTransform(778.3,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_4 = new lib.buttons();
	this.ltr_4.name = "ltr_4";
	this.ltr_4.setTransform(671.75,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.outpt_txt = new cjs.Text("", "38px 'Calibri'");
	this.outpt_txt.name = "outpt_txt";
	this.outpt_txt.lineHeight = 48;
	this.outpt_txt.lineWidth = 978;
	this.outpt_txt.parent = this;
	this.outpt_txt.setTransform(23.05,23.45);

	this.ltr_3 = new lib.buttons();
	this.ltr_3.name = "ltr_3";
	this.ltr_3.setTransform(565.3,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_2 = new lib.buttons();
	this.ltr_2.name = "ltr_2";
	this.ltr_2.setTransform(458.8,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_1 = new lib.buttons();
	this.ltr_1.name = "ltr_1";
	this.ltr_1.setTransform(352.25,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_0 = new lib.buttons();
	this.ltr_0.name = "ltr_0";
	this.ltr_0.setTransform(245.75,231.95,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_28 = new lib.buttons();
	this.ltr_28.name = "ltr_28";
	this.ltr_28.setTransform(671.75,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_27 = new lib.buttons();
	this.ltr_27.name = "ltr_27";
	this.ltr_27.setTransform(565.3,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_26 = new lib.buttons();
	this.ltr_26.name = "ltr_26";
	this.ltr_26.setTransform(458.8,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_25 = new lib.buttons();
	this.ltr_25.name = "ltr_25";
	this.ltr_25.setTransform(352.25,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_24 = new lib.buttons();
	this.ltr_24.name = "ltr_24";
	this.ltr_24.setTransform(245.75,523.55,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_23 = new lib.buttons();
	this.ltr_23.name = "ltr_23";
	this.ltr_23.setTransform(778.5,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_22 = new lib.buttons();
	this.ltr_22.name = "ltr_22";
	this.ltr_22.setTransform(671.75,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_21 = new lib.buttons();
	this.ltr_21.name = "ltr_21";
	this.ltr_21.setTransform(565.3,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_20 = new lib.buttons();
	this.ltr_20.name = "ltr_20";
	this.ltr_20.setTransform(458.8,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_19 = new lib.buttons();
	this.ltr_19.name = "ltr_19";
	this.ltr_19.setTransform(352.25,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_18 = new lib.buttons();
	this.ltr_18.name = "ltr_18";
	this.ltr_18.setTransform(245.75,450.65,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_17 = new lib.buttons();
	this.ltr_17.name = "ltr_17";
	this.ltr_17.setTransform(778.5,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_16 = new lib.buttons();
	this.ltr_16.name = "ltr_16";
	this.ltr_16.setTransform(671.75,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_15 = new lib.buttons();
	this.ltr_15.name = "ltr_15";
	this.ltr_15.setTransform(565.3,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_14 = new lib.buttons();
	this.ltr_14.name = "ltr_14";
	this.ltr_14.setTransform(458.8,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_13 = new lib.buttons();
	this.ltr_13.name = "ltr_13";
	this.ltr_13.setTransform(352.25,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_12 = new lib.buttons();
	this.ltr_12.name = "ltr_12";
	this.ltr_12.setTransform(245.75,377.75,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_11 = new lib.buttons();
	this.ltr_11.name = "ltr_11";
	this.ltr_11.setTransform(778.5,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_10 = new lib.buttons();
	this.ltr_10.name = "ltr_10";
	this.ltr_10.setTransform(671.75,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_9 = new lib.buttons();
	this.ltr_9.name = "ltr_9";
	this.ltr_9.setTransform(565.3,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_8 = new lib.buttons();
	this.ltr_8.name = "ltr_8";
	this.ltr_8.setTransform(458.8,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_7 = new lib.buttons();
	this.ltr_7.name = "ltr_7";
	this.ltr_7.setTransform(352.25,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.ltr_6 = new lib.buttons();
	this.ltr_6.name = "ltr_6";
	this.ltr_6.setTransform(245.75,304.85,1.3594,1.3589,0,0,0,25.1,23.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhMtgNFMCZbAAAIAAaLMiZbAAAg");
	this.shape.setTransform(512.025,105.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhMtANGIAA6LMCZbAAAIAAaLg");
	this.shape_1.setTransform(512.025,105.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.ltr_6},{t:this.ltr_7},{t:this.ltr_8},{t:this.ltr_9},{t:this.ltr_10},{t:this.ltr_11},{t:this.ltr_12},{t:this.ltr_13},{t:this.ltr_14},{t:this.ltr_15},{t:this.ltr_16},{t:this.ltr_17},{t:this.ltr_18},{t:this.ltr_19},{t:this.ltr_20},{t:this.ltr_21},{t:this.ltr_22},{t:this.ltr_23},{t:this.ltr_24},{t:this.ltr_25},{t:this.ltr_26},{t:this.ltr_27},{t:this.ltr_28},{t:this.ltr_0},{t:this.ltr_1},{t:this.ltr_2},{t:this.ltr_3},{t:this.outpt_txt},{t:this.ltr_4},{t:this.ltr_5},{t:this.box_0},{t:this.box_1},{t:this.box_2},{t:this.box_3},{t:this.box_4},{t:this.ltr_29}]}).wait(1));

	// calibration_and_response_mcs
	this.ready_btn = new lib.ready_btn();
	this.ready_btn.name = "ready_btn";
	this.ready_btn.setTransform(1093.85,263.95);

	this.drggr_left = new lib.drggr();
	this.drggr_left.name = "drggr_left";
	this.drggr_left.setTransform(1050,455,1,1,90);

	this.drggr_right = new lib.drggr();
	this.drggr_right.name = "drggr_right";
	this.drggr_right.setTransform(1510,455,1,1,90);
	var drggr_rightFilter_1 = new cjs.ColorFilter(0,0,0,1,153,0,0,0);
	this.drggr_right.filters = [drggr_rightFilter_1];
	this.drggr_right.cache(-54,-12,108,24);

	this.cal_right = new cjs.Text("", "32px 'Calibri'", "#990000");
	this.cal_right.name = "cal_right";
	this.cal_right.textAlign = "right";
	this.cal_right.lineHeight = 41;
	this.cal_right.lineWidth = 123;
	this.cal_right.parent = this;
	this.cal_right.setTransform(1518.65,300.65);

	this.cal_btn_right = new lib.background_box();
	this.cal_btn_right.name = "cal_btn_right";
	this.cal_btn_right.setTransform(1453.25,320.15,2.6158,1,0,0,0,24.2,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_2.setTransform(1329.375,317.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABVBMIgEgBIgCgBIgBgDIAAhUQAAgJgBgHQgCgIgDgFQgEgFgFgDQgFgDgHAAQgJAAgJAHQgJAHgLANIAABhIgBADIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgDIAAhUQAAgJgCgHQgBgIgEgFQgDgFgFgDQgGgDgHAAQgJAAgJAHQgJAHgLANIAABhIAAADIgCABIgEABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIABACIABACIAAASQAMgNALgGQALgGAMAAQAIAAAHACQAHACAGAEQAFADADAFQADAFADAHQAHgIAGgFIAMgJIAMgFIALgBQAOAAAJAFQAJAEAGAIQAFAIADALQACALAAALIAABYIAAADIgCABIgEABIgHAAIgGAAg");
	this.shape_3.setTransform(1310.425,316.975);

	this.dur_txt = new cjs.Text("", "32px 'Calibri'");
	this.dur_txt.name = "dur_txt";
	this.dur_txt.textAlign = "right";
	this.dur_txt.lineHeight = 41;
	this.dur_txt.lineWidth = 63;
	this.dur_txt.parent = this;
	this.dur_txt.setTransform(1293.1,300.65);

	this.cal_left = new cjs.Text("", "32px 'Calibri'");
	this.cal_left.name = "cal_left";
	this.cal_left.lineHeight = 41;
	this.cal_left.lineWidth = 123;
	this.cal_left.parent = this;
	this.cal_left.setTransform(1038.75,300.65);

	this.dur_btn = new lib.background_box();
	this.dur_btn.name = "dur_btn";
	this.dur_btn.setTransform(1258.5,315.95,1.423,1,0,0,0,24.2,25);

	this.cal_btn_left = new lib.background_box();
	this.cal_btn_left.name = "cal_btn_left";
	this.cal_btn_left.setTransform(1096.25,320.15,2.6158,1,0,0,0,24.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cal_btn_left},{t:this.dur_btn},{t:this.cal_left},{t:this.dur_txt},{t:this.shape_3},{t:this.shape_2},{t:this.cal_btn_right},{t:this.cal_right},{t:this.drggr_right},{t:this.drggr_left},{t:this.ready_btn}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(drggr_rightFilter_1).wait(1));

	// background
	this.video_frame = new lib.video_location();
	this.video_frame.name = "video_frame";
	this.video_frame.setTransform(1280.05,144,0.5,0.5,0,0,180,512.1,288);

	this.big_frame = new lib.video_location();
	this.big_frame.name = "big_frame";
	this.big_frame.setTransform(512,288,1,1,0,0,0,512,288);

	this.input_frame = new lib.video_location();
	this.input_frame.name = "input_frame";
	this.input_frame.setTransform(1280.05,432,0.5,0.5,0,0,0,512.1,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.input_frame},{t:this.big_frame},{t:this.video_frame}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(768,288,768.0999999999999,288);
// library properties:
lib.properties = {
	id: 'A5DAF1077428514688E1025C51996AE9',
	width: 1536,
	height: 576,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['A5DAF1077428514688E1025C51996AE9'] = {
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