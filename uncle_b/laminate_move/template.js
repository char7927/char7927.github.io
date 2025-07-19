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


(lib.selector = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC3300").s().p("EgK7Aj8MAAAhH3IV3AAMAAABH3g");
	this.shape.setTransform(70,230);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.selector, new cjs.Rectangle(0,0,140,460), null);


(lib.fullcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eh8/g+fMD5/AAAMAAAB8/Mj5/AAAg");
	this.shape.setTransform(800,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fullcopy, new cjs.Rectangle(-1,-1,1602,802), null);


(lib.full = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eh8/A+gMAAAh8/MD5/AAAMAAAB8/g");
	this.shape.setTransform(800,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.full, new cjs.Rectangle(0,0,1600,800), null);


(lib.calSquare = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#6699FF").ss(5,1,1).p("AXcAAI3cAAIAAPoAAAAAI3bAAAAAvnIAAPn");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.calSquare, new cjs.Rectangle(-152.5,-102.5,305,205), null);


(lib.cal_ball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag5A6QgYgYAAgiQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQghAAgYgYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGQAAQAACmh1B1Qh1B1imAAQilAAh1h1Qh1h1AAimQAAilB1h1QB1h1ClAAQCmAAB1B1QB1B1AAClg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCFF").s().p("AkaEbQh1h1AAimQAAilB1h1QB1h1ClAAQCmAAB1B1QB1B1AAClQAACmh1B1Qh1B1imAAQilAAh1h1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cal_ball, new cjs.Rectangle(-41,-41,82,82), null);


(lib.button_square = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmPmPIMfAAIAAMfIsfAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPGQIAAsfIMfAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_square, new cjs.Rectangle(-41,-41,82,82), null);


(lib.letter_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ACnECIgKgCQgEgCgCgCIgDgGIgth9IjTAAIgqB7IgDAHIgFAEQgFACgGAAIgSABIgTgBQgHgBgEgDQgDgCAAgGQABgFADgJICrnaQACgFADgCQADgDAFgCQAEgBAIgBIATAAIAVAAIANACQAFACADADQADADABAEICsHbQADAIAAAGQAAAFgDADQgDADgHAAIgUABIgUAAgAhbBDICxAAIhZj+IAAAAg");
	this.shape.setTransform(0,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiOEAQgKAAgHgGQgJgGAAgQIAAnHQAAgPAJgHQAHgGAKAAIB0AAQAtAAAdAJQAdAIAUARQATARAKAYQAKAYAAAfQAAARgEASQgEAQgJAOQgIAOgNALQgNALgRAIQAVADASALQATAJANAQQAOARAIAWQAIAVAAAbQAAAYgGAUQgHAUgLAQQgLAQgPANQgQAMgTAIQgUAJgWAEQgXAEgcAAgAhkDIIBjAAQAWAAARgGQASgFANgLQANgLAIgQQAHgRAAgVQAAgWgHgSQgIgRgNgMQgPgMgVgGQgVgGgfgBIhRAAgAhkgiIBNAAQAaABAQgIQAQgGALgMQAKgMAFgQQAFgPAAgQQAAgUgFgOQgFgPgLgLQgLgLgSgFQgRgGgdABIhGAAg");
	this.shape_1.setTransform(1.625,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5D1QgpgQgcghQgcgggPgvQgPgwAAg+QAAg/AQgyQAQgyAegiQAdgjAqgSQApgSAyAAQAVAAAWAEQAVAEASAGQARAHAOAIQAOAIAGAGIAGAIIADAGIACAJIAAAMIgBAOIgDAJQgBAEgDACQgBABgEAAQgFAAgKgHQgKgIgPgJQgQgKgXgHQgXgIgfAAQgiAAgbAOQgcANgUAbQgUAagLAnQgLAmABAwQAAAwAKAmQAKAlAUAZQAUAZAdANQAbANAkAAQAfAAAXgIQAWgHAQgJQARgKAKgHQAKgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQACABACADIABAJIABAPIAAALIgCAJIgCAGIgGAHQgEAEgNAIQgNAIgSAIQgTAHgYAGQgYAFgdAAQgyAAgngRg");
	this.shape_2.setTransform(0.8,2.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiqEAQgKAAgHgGQgJgGAAgQIAAnHQAAgPAJgHQAHgGAKAAIBzAAQBCAAAuARQAuASAfAgQAfAgAQAuQAQAuAAA6QAABBgRAyQgRAxghAhQggAhgwAQQgvAQhBAAgAiADHIBGAAQAxAAAhgMQAigMAWgaQAXgZALgmQALgnAAgzQAAgpgKgkQgKgkgWgaQgWgagigPQgggOg1AAIhGAAg");
	this.shape_3.setTransform(1.525,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBSQgCAAgDgCQgCgCAAgFIAAiRQAAgFACgCQADgCACAAIBNAAIACAAIABACIACADIAAAEIAAAEIgCADIgBACIgCAAIg/AAIAAA0IA2AAIACAAIABACIACADIAAAEIAAADIgCACIgBACIgCAAIg2AAIAAA7IBAAAIACABIACABIABADIAAAEIAAAEIgBADIgCACIgCAAg");
	this.shape_4.setTransform(27.55,0.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSBPQgNgFgJgLQgJgKgEgPQgGgQAAgUQAAgTAGgQQAFgQAJgLQAKgLANgGQANgGAPAAIAPABIAMAEIAKAEIAGAFIACACIABACIABADIAAAEIgBAFIAAADIgCABIgBABQgCAAgDgDIgIgFIgMgFQgIgDgKAAQgKAAgJAEQgJAFgGAIQgHAJgDAMQgEAMABAPQgBAQAEAMQADAMAGAIQAHAIAJAEQAJAEALAAQAJAAAIgCIAMgGIAJgFIAFgDIABABIACABIAAADIAAAFIAAAEIAAACIgBACIgCACIgFAEIgKAFIgOAFQgHABgKAAQgPAAgNgFg");
	this.shape_5.setTransform(14.15,0.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA2BTIgEgBIgBgBIgCgCIgOgoIhDAAIgNAnIgBADIgCABIgEABIgGAAIgFAAIgEgCIgBgDIABgEIA3iYIACgCIACgBIAEgBIAGAAIAGAAIAFABIACACIACABIA3CYIABAFIgBADIgEABIgGAAIgGAAgAgdAVIA5AAIgchRg");
	this.shape_6.setTransform(-0.575,0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsBSIgEgBIgBgBIgBgCIAAiWQABgFACgCQACgDAEAAIAjAAIAJABIAMACQAGABAIAEQAGAEAFAGQAFAGADAIQACAHAAAKQABAMgFAKQgEAKgIAGQgHAHgLADQgLAEgOAAIgTAAIAAA7IgBACIgBABIgDABIgGABIgFgBgAgcABIAUAAQAJAAAGgBQAHgDAFgEQAEgFACgGQADgGAAgIQAAgKgFgGQgDgHgGgDQgFgEgGgBIgKAAIgVAAg");
	this.shape_7.setTransform(-14.3,0.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUBTIgMgDIgJgFIgGgDIgBgEIgBgGIAAgFIABgDIABgBIABgBIAGACIAIAFIAMAFQAHACAKAAQAGAAAGgCQAFgCAFgEQAEgDACgFQACgFAAgGQAAgIgDgEQgDgGgFgDQgFgEgGgDIgOgHIgNgGQgGgEgFgFQgGgGgDgHQgDgHgBgKQAAgKAFgIQADgIAHgFQAHgGAJgDQAJgDAKAAIAKABQAGABAFACIAIADIAGADIABADIABACIAAACIAAAEIAAAEIAAADIgBACIgCAAIgFgCIgHgEQgEgCgGgBQgGgDgHAAQgGAAgFADQgGABgDADQgDADgBAFQgCAEAAAFQAAAGADAFQADAFAFAEIAMAHIANAHIAOAGIAMAIQAFAGAEAHQACAHAAAKQAAALgDAJQgFAKgIAGQgHAGgKADQgKADgLAAQgIABgIgCg");
	this.shape_8.setTransform(-27.55,0.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAmBSIgEgBIgCgBIgBgDIgPgmIgGgMQgCgGgEgEQgEgEgFgCQgFgDgHAAIgPAAIAABGIgBACIgBABIgEABIgFABIgFgBIgEgBIgBgBIgBgCIAAiXQAAgFADgBQACgDADAAIAjAAIALABIAGAAQAJACAIAEQAHADAFAGQAFAFACAHQADAHAAAJQAAAIgCAHQgDAGgEAFQgEAFgGAEIgNAFQAEACADADIAHAGIAFAJIAFALIAPAkIACAHIABACIgBACIgBABIgEABIgGABIgFgBgAgggIIAVAAQAJAAAFgCQAGgCAFgEQAEgEACgFQACgFAAgGQAAgKgFgGQgEgHgKgDIgGgBIgLAAIgSAAg");
	this.shape_9.setTransform(22.925,16.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBSQgEAAgCgCQgDgCABgFIAAiRQgBgFADgCQACgCAEAAIBMAAIADAAIABACIABADIAAAEIAAAEIgBADIgBACIgDAAIg/AAIAAA0IA2AAIACAAIACACIABADIAAAEIAAADIgBACIgCACIgCAAIg2AAIAAA7IBAAAIACABIACABIABADIAAAEIAAAEIgBADIgCACIgCAAg");
	this.shape_10.setTransform(9.3,16.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDBTIgEAAIgDgBIgCgBIgBgBIgBgCIg1iYIgBgEQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIADgBIAHAAIAGAAIADABIACABIABADIAuCIIAuiIIABgDIACgBIADgBIAGAAIAHAAIADABIAAADIgBAEIg2CYIgBACIgCACIgEABIgHAAIgDAAg");
	this.shape_11.setTransform(-4.825,16.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggBPQgOgGgJgKQgJgKgEgRQgEgPgBgUQAAgSAGgQQAEgRAJgKQAKgMAOgFQAOgHASAAQASABANAFQAOAFAJALQAIAKAFAPQAFAQAAAUQAAATgFAQQgFAQgJALQgKAMgNAFQgPAHgSAAQgSgBgNgFgAgWg7QgKAFgGAIQgGAKgDAMQgDALABANQgBAOADAMQADAMAFAJQAGAJAKAEQAJAFAOABQAOAAAJgGQAKgFAHgJQAFgKADgMQACgLAAgNQAAgOgCgMQgDgLgFgJQgGgJgKgFQgKgFgOAAQgNAAgJAGg");
	this.shape_12.setTransform(-20.8,16.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEBSIgEgBIgCgBIAAgCIAAiNIgvAAIgBAAIgBgCIgBgDIAAgEIAAgEIABgDIABgCIABgBIByAAIACABIABACIABADIAAAEIAAAEIgBADIgBACIgCAAIguAAIAACNIAAACIgDABIgDABIgFABIgEgBg");
	this.shape_13.setTransform(26.9,-15.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAmBSIgEgBIgCgBIgBgDIgPgmIgGgMQgCgGgEgEQgEgEgFgCQgFgDgHAAIgPAAIAABGIgBACIgBABIgEABIgFABIgFgBIgEgBIgBgBIgBgCIAAiXQAAgFADgBQACgDADAAIAjAAIALABIAGAAQAJACAIAEQAHADAFAGQAFAFACAHQADAHAAAJQAAAIgCAHQgDAGgEAFQgEAFgGAEIgNAFQAEACADADIAHAGIAFAJIAFALIAPAkIACAHIABACIgBACIgBABIgEABIgGABIgFgBgAgggIIAVAAQAJAAAFgCQAGgCAFgEQAEgEACgFQACgFAAgGQAAgKgFgGQgEgHgKgDIgGgBIgLAAIgSAAg");
	this.shape_14.setTransform(14.125,-15.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA2BTIgEgBIgBgBIgCgCIgOgoIhDAAIgNAnIgBADIgCABIgEABIgGAAIgFAAIgEgCQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgEIA3iXIACgDIACgBIAEgBIAGAAIAGAAIAFABIACACIACACIA3CYIABAEIgBADIgEABIgGAAIgGAAgAgdAVIA5AAIgchQg");
	this.shape_15.setTransform(-1.075,-15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFBSIgDgBIgBgBIgBgCIAAiNIguAAIgCAAIgCgCIAAgDIgBgEIABgEIAAgDIACgCIACgBIBxAAIACABIACACIAAADIABAEIgBAEIAAADIgCACIgCAAIguAAIAACNIgBACIgBABIgEABIgFABIgFgBg");
	this.shape_16.setTransform(-14.9,-15.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUBTIgMgEIgKgEIgFgDIgCgEIgBgHIABgEIAAgDIACgCIACAAIAEACIAJAFIAMAFQAIACAIAAQAHAAAGgCQAGgCAEgEQAEgDADgFQACgFAAgGQAAgIgEgEQgDgGgFgDQgFgEgHgDIgMgHIgOgGQgHgEgEgFQgGgGgDgGQgDgIAAgKQAAgKADgIQAEgIAHgGQAGgFAKgDQAJgCAJgBIALABQAGABAFACIAIADIAFADIACADIABACIAAACIAAAEIAAAEIgBADIgBABIgBABIgFgCIgHgDQgEgDgGgCQgGgCgIAAQgFAAgFACQgFACgDADQgEADgCAFQgBADAAAGQAAAGADAFQADAFAFAEIAMAHIANAHIAOAGIAMAIQAFAGADAHQADAHAAAKQAAALgDAKQgFAJgHAGQgIAGgKADQgLADgLAAQgHAAgIgBg");
	this.shape_17.setTransform(-27.25,-15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah0EAQgJAAgIgGQgJgGABgQIAAnHQgBgPAJgHQAIgGAJAAIDxAAQAEAAACACQADABABAEIAEAJIAAANIAAAMIgEAJQgBADgDACQgCACgEAAIjHAAIAAChICrAAQADAAADACIAEAEIADAJIABANIgBALIgDAIIgEAFQgDACgDAAIirAAIAAC2IDLAAIAFACQADACACADQACADAAAGIABANIgBANIgCAJQgCADgDABIgFACg");
	this.shape_18.setTransform(1.25,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhzEAIgLgCQgFgCgBgCIgBgGIAAnYQAAgQAIgGQAIgGAJAAIDlAAQADAAADACQACABACAEQACADABAGIABANIgBANQgBAGgCADQgCAEgCABQgDACgDAAIi7AAIAACuICwAAIAHABQACABABAEQACADACAFIAAANIAAANQgCAFgCAEIgDAFIgHABIiwAAIAADVIgBAGQgBACgEACIgLACIgQABIgQgBg");
	this.shape_19.setTransform(1.65,2.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag+D1QgvgTgggiQggghgRgwQgRgwAAg6QAAg8ASgyQATgxAhgiQAhgkAvgSQAvgUA4AAQAdAAAaAFQAaAFAUAIQAUAGAOAIQANAIAFAGQAFAEACAHQACAHAAANIgBAOIgCAJIgEAFQgCABgDAAQgFABgLgIQgLgIgTgIQgSgKgagHQgagIgkAAQgqAAggAQQgiAPgXAcQgYAagMAmQgNAmAAArQAAAxAOAlQAOAmAYAbQAYAaAhANQAhAOAoAAQAXAAAZgFQAYgHAVgLIAAiWIh3AAQgGABgEgHQgDgGAAgPIABgLQAAgGACgDIAEgGQADgBADAAICjAAIAJABQAEACAEAEQADADACAFQACAGAAAFIAADEQAAAKgEAIQgDAHgMAGQgLAGgSAGQgSAHgUAEQgTAFgUADQgUACgTAAQg6AAgvgSg");
	this.shape_20.setTransform(-1.125,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACGEBIgKgCQgEgCgCgCQgBgCAAgEIAAjjIjoAAIAADjQAAAEgCACQgBACgEACIgLACIgQABIgQgBIgLgCQgEgCgCgCQgBgCAAgEIAAnqQAAgDABgCQACgDAEgBIALgCIAQgBIAQABIALACQAEABABADQACACAAADIAADNIDoAAIAAjNQAAgDABgCQACgDAEgBIAKgCIARgBIAQABIAKACQAEABACADQABACAAADIAAHqQAAAEgBACQgCACgEACIgKACIgQABIgRgBg");
	this.shape_21.setTransform(-0.025,2.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2BSQgDAAgCgCQgDgCAAgFIAAiRQAAgFADgCQACgCADAAIAlAAQAUAAAPAGQAPAFAKAKQAKALAFAOQAFAPAAATQAAAUgFAQQgGAQgKAKQgKALgQAFQgPAFgVAAgAgoBAIAWAAQAQAAAJgEQAMgEAGgIQAIgIADgMQAEgNAAgPQAAgOgDgLQgDgMgIgIQgGgIgMgFQgJgFgRAAIgWAAg");
	this.shape_22.setTransform(27.7,16.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggBPQgOgGgJgKQgJgKgEgRQgFgPAAgUQABgSAEgQQAFgRAKgKQAJgMAOgFQAOgHASAAQASABANAFQAOAFAJALQAIAKAFAPQAEAQABAUQgBATgEAQQgFAQgJALQgJAMgPAFQgOAHgSAAQgSgBgNgFgAgXg7QgJAFgGAIQgGAKgDAMQgCALgBANQABAOACAMQACAMAGAJQAGAJAKAEQAJAFAOABQAOAAAJgGQALgFAFgJQAGgKADgMQADgLgBgNQABgOgDgMQgDgLgGgJQgFgJgKgFQgJgFgOAAQgOAAgKAGg");
	this.shape_23.setTransform(-3.5,16.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAqBTIgFgCIgDgBIgBgDIghh7IgBAAIgfB7IgCADIgCABIgEACIgHAAIgHAAIgFgCIgCgBIgCgDIgriXIgBgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAEgBIAGAAIAGAAIAEABIABABIABADIAlCIIAjiIIABgDIACgBIAEgBIAFAAIAFAAIAEABIACABIABADIAlCIIABAAIAkiIIAAgDIACgBIAEgBIAFAAIAGAAIAEABIABADIgBAEIgsCXIgBADIgDABIgEACIgHAAIgGAAg");
	this.shape_24.setTransform(-23.6812,16.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgkBSQgDAAgDgCQgCgCAAgFIAAiRQAAgFACgCQADgCADAAIBNAAIACAAIABACIAAADIAAAEIAAAEIAAADIgBACIgCAAIhAAAIAAA0IA3AAIABAAIACACIABADIAAAEIAAADIgBACIgCACIgBAAIg3AAIAAA7IBBAAIABABIABABIABADIAAAEIAAAEIgBADIgBACIgBAAg");
	this.shape_25.setTransform(32.9,-15.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFBSIgDgBIgBgBIgBgCIAAiNIguAAIgCAAIgCgCIAAgDIgBgEIABgEIAAgDIACgCIACgBIBxAAIACABIACACIAAADIABAEIgBAEIAAADIgCACIgCAAIguAAIAACNIgBACIgCABIgDABIgFABIgFgBg");
	this.shape_26.setTransform(19.85,-15.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglBSQgDAAgCgCQgDgCAAgFIAAiRQAAgFADgCQACgCADAAIBOAAIABAAIABACIABADIAAAEIAAAEIgBADIgBACIgBAAIhAAAIAAA0IA3AAIABAAIABACIABADIAAAEIAAADIgBACIgBACIgBAAIg3AAIAAA7IBAAAIACABIABABIABADIAAAEIAAAEIgBADIgBACIgCAAg");
	this.shape_27.setTransform(7.55,-15.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghBSQgDAAgDgCQgCgBAAgGIAAiXIAAgCIACgBIADAAIAGAAIAEAAIAEAAIABABIABACIAACNIA6AAIACABIABACIABADIAAAEIAAAFIgBACIgBACIgCAAg");
	this.shape_28.setTransform(-3.7,-15.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag2BSQgDAAgCgCQgDgCAAgFIAAiRQAAgFADgCQACgCADAAIAlAAQAUAAAPAGQAPAFAKAKQAKALAFAOQAFAPAAATQAAAUgFAQQgGAQgKAKQgKALgQAFQgPAFgVAAgAgoBAIAWAAQAQAAAJgEQAMgEAGgIQAIgIADgMQAEgNAAgPQAAgOgDgLQgDgMgIgIQgGgIgMgFQgJgFgRAAIgWAAg");
	this.shape_29.setTransform(-30.35,-15.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglBSQgDAAgCgCQgCgCgBgFIAAiRQABgFACgCQACgCADAAIBOAAIABAAIABACIABADIAAAEIAAAEIgBADIgBACIgBAAIhAAAIAAA0IA3AAIABAAIABACIABADIAAAEIAAADIgBACIgBACIgBAAIg3AAIAAA7IBBAAIABABIABABIABADIAAAEIAAAEIgBADIgBACIgBAAg");
	this.shape_30.setTransform(17.8,16.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEBSIgEgBIgCgBIAAgCIAAiNIguAAIgCAAIgBgCIgBgDIgBgEIABgEIABgDIABgCIACgBIBxAAIACABIACACIAAADIAAAEIAAAEIAAADIgCACIgCAAIguAAIAACNIgBACIgCABIgDABIgFABIgEgBg");
	this.shape_31.setTransform(4.75,16.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFBSIgDgBIgBgBIgBgCIAAiNIgvAAIgBAAIgCgCIAAgDIAAgEIAAgEIAAgDIACgCIABgBIByAAIACABIABACIABADIABAEIgBAEIgBADIgBACIgCAAIguAAIAACNIAAACIgCABIgEABIgFABIgFgBg");
	this.shape_32.setTransform(-7.9,16.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkBSQgDAAgDgCQgCgCgBgFIAAiRQABgFACgCQADgCADAAIBNAAIACAAIABACIAAADIAAAEIAAAEIAAADIgBACIgCAAIhAAAIAAA0IA3AAIABAAIACACIAAADIAAAEIAAADIAAACIgCACIgBAAIg3AAIAAA7IBBAAIABABIABABIABADIAAAEIAAAEIgBADIgBACIgBAAg");
	this.shape_33.setTransform(-20.2,16.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiBTQgDgBgCgBQgDgDAAgEIAAiYIABgBIACgBIADgBIAGAAIAEAAIAEABIACABIAAABIAACOIA6AAIACAAIACACIABACIAAAFIAAAEIgBADIgCACIgCABg");
	this.shape_34.setTransform(-31.45,16.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgPEBIgLgCQgEgCgBgCQgCgCAAgEIAAnqQAAgDACgCQACgDAEgBIALgCIAOgBIAQABIALACQAEABABADQACACAAADIAAHqQAAAEgCACQgBACgEACIgLACIgQABIgPgBg");
	this.shape_35.setTransform(0,2.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgpEDIgUgEIgQgHQgHgEgCgCIgDgEIgDgHIgBgIIAAgMIAAgOQABgGABgDQACgDACgCQACgCADABQAEAAAFACIAMAHIAPAHQAJADANAAQANAAAKgDQAIgEAGgKQAHgJADgPQADgQAAgaIAAluIACgFQABgCAEgCIALgCIAQAAIAQAAIALACQAEACACACIABAFIAAF0QAAAfgFAaQgGAZgNARQgOASgWAKQgWAKgfAAQgLAAgLgCg");
	this.shape_36.setTransform(-3.225,2.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABuEBQgJgBgFgDQgEgEgCgEIi8j+IAAD+IgBAGQgCACgEACIgKACIgRABIgQgBIgLgCQgEgCgCgCIgBgGIAAnqQAAgDABgCQACgDAEgBIALgCIAQgBIARABIAKACQAEABACADQABACAAADIAADkIC0jkIAFgGQAEgCAEgBIAMgDIAQAAIARABIAKACQAEACACACIAAAFQABAFgDAGIgJAOIipDLIC1DyIAIAOIACAGIgCAGIgFAEIgLACIgRABQgOAAgIgBg");
	this.shape_37.setTransform(2.45,2.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhqEBQgKAAgHgGQgJgGAAgQIAAnYQAAgDACgDQABgCAEgBIALgDIAQgBIARABIAKADQAEABACACQABADAAADIAAG5IC3AAQADAAADACQADACABADQACAEABAFIABAOIgBANQgBAFgCAEQgBADgDACQgDACgDAAg");
	this.shape_38.setTransform(3.025,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ADkEAIgLgCQgEgCgBgCQgCgCAAgEIAAm8IgBAAIi0G+IgDAFIgGAEIgKACIgNAAIgOgBIgKgCIgGgDQgDgCAAgDIitm+IAAAAIAAG8QAAAEgCACQgBACgFACIgKACIgRABIgQgBIgKgCQgEgCgCgCQgBgCAAgEIAAnVQAAgRAIgHQAKgHAKAAIAqAAQANAAAKACQAJADAHAFQAHAFAGAIQAEAIAEAKICSFyIABAAICYlwQAFgMAFgIQAGgJAFgFQAHgFAHgCQAIgCAKAAIAsAAQAGAAAFACQAGACAEADQAEAEACAGQACAGAAAIIAAHVQAAAEgBACQgCACgEACIgLACIgQABIgQgBg");
	this.shape_39.setTransform(-0.025,2.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AivEBIgKgDQgFgBgBgCIgCgGIAAnXQAAgQAJgHQAKgHAKAAIAiAAQAMAAAHACQAIACAHAFQAGAFAGAIQAGAIAGAMIB4DgIAUAoIAUAmIATAmIATAlIABAAIgChBIAAhBIAAkVIACgFQABgDAEgBQAFgCAGgBIARgBIAQABQAGABAEACQAEABACADIACAFIAAHXQgBAIgCAGQgDAFgEAEQgEADgGACQgFABgFAAIgXAAQgKAAgJgCQgIgCgHgFQgHgGgHgKQgHgKgIgQIibkiIgZgvIgXgwIgBAAIABA6IABA7IAAE0IgCAGQgBACgEABIgLADIgRABIgQgBg");
	this.shape_40.setTransform(0,2.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhnD2QgrgRgcggQgbgigNgwQgOgxAAg/QAAg8APgxQAOgxAegjQAdgiAsgTQAsgUA5ABQA5AAAqAQQAqASAcAgQAbAhAOAwQAOAwAAA+QAAA9gPAyQgOAygeAjQgcAjgtATQgrASg6AAQg6AAgpgRgAhIi7QgeAQgTAcQgSAbgJAlQgIAmAAAoQAAAsAIAmQAHAmASAcQASAbAdAQQAeAPAtAAQAsgBAfgQQAegQASgcQATgdAIgmQAIgkAAgpQAAgrgIgmQgHgmgTgaQgRgdgegOQgfgQgrAAQgsAAgeARg");
	this.shape_41.setTransform(0,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiKEAIgLgCQgEgCgCgCQgBgCAAgEIAAnXQAAgQAIgGQAIgHALAAIBtAAQARAAAOACQAPABAVAEQAVAFAWAMQAVANAPASQAPASAIAYQAIAYAAAdQAAAmgMAfQgNAfgXAVQgYAVgiAMQgjAMguAAIg6AAIAAC4QAAAEgCACIgFAEIgLACIgQABIgQgBgAhYAEIA9AAQAeAAAVgHQAUgHAOgOQANgPAIgTQAHgUAAgXQAAgfgMgVQgMgVgRgKQgRgKgSgDQgSgDgRAAIg/AAg");
	this.shape_42.setTransform(1.625,2.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ADeEjQgSgGgXgNQgXgNgagRQgagSgYgYQgUAMgdAJQgeAIgmAAQg6AAgqgRQgqgRgcggQgbghgOgxQgNgxAAg+QAAg9APgxQAOgxAdgjQAegiAsgTQAsgUA6ABQA2AAAqAQQApASAdAgQAcAhAOAwQAPAwAAA+QAAAggEAcQgEAegIAZQgIAbgMAVQgNAXgQASQAdAYAVANQAWANAOAGIAWAKQAIAEAEADQAEAEACAHQABAGAAAMIAAAQIgEAJIgEAFIgFABQgIAAgRgHgAhnjdQgeAQgTAcQgTAcgIAkQgIAlAAApQAAAsAHAmQAIAmASAbQASAcAeAQQAdAPAtAAQAsgBAegQQAfgQATgcQASgdAIgmQAIglAAgoQAAgsgIglQgIgmgRgaQgSgdgfgOQgegQgrAAQgsAAgeARg");
	this.shape_43.setTransform(2.675,5.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AB2EAQgHAAgEgCQgEgCgCgDIgEgIIgvh5QgIgUgJgRQgJgSgMgMQgMgNgQgGQgRgHgXAAIguAAIAADZQAAAEgBACIgGAEIgKACIgRABIgQgBIgLgCQgEgCgBgCQgCgCAAgEIAAnYQAAgQAJgGQAHgGAKAAIBsAAQAUAAANABIAWACQAdAFAXALQAXALAPARQAQARAIAXQAHAVAAAbQAAAagHAUQgHAUgNAQQgNAQgSALQgSALgXAHQANAGAKAJQAKAIAKAMQAIAMAIAPQAIAPAIAUIAuBxIAHAUIACAIQAAAEgCACQgBACgEACQgEACgHAAIgTABIgQgBgAhmgbIBDAAQAbAAASgHQAUgGANgMQANgMAGgQQAGgPAAgTQAAgegNgVQgOgVgfgJQgKgDgMgBIgggBIg6AAg");
	this.shape_44.setTransform(1.925,2.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag/EDQgWgEgRgHQgRgGgMgHQgMgGgFgFQgEgFgCgHQgDgIAAgMIACgOIACgJQABgEACgBQADgCADABQAGAAAKAGQAKAHAQAHQAQAIAWAIQAXAGAcABQAWgBATgGQARgGAOgKQANgLAHgQQAHgQAAgUQAAgWgKgPQgJgQgRgLQgQgMgVgJIgpgVQgWgJgVgMQgUgMgQgQQgQgRgLgXQgKgWAAgfQAAghAMgYQAMgZAVgSQAUgQAdgJQAdgKAfABQARAAASADQARADAQAFQAPAFAMAGQALAGAEADIAFAHIACAFIABAIIAAANIAAAMIgCAJQgBAEgCACIgFACQgFgBgIgFIgYgMQgNgIgSgFQgTgFgWAAQgVAAgQAFQgQAFgKAKQgKAJgGAOQgEANAAAPQAAAVAKAPQAJAPARANQAQAMAVAJIApAVQAXAJAUANQAWAKAQARQAQAQAKAXQAKAWAAAeQAAAkgNAcQgNAdgXAUQgYASggAKQggALgkgBQgZAAgWgEg");
	this.shape_45.setTransform(-0.05,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQEAIgKgCQgEgCgCgCQgBgCAAgEIAAm6IiQAAQgDAAgCgCQgEgBgBgEIgCgJIgBgNIABgNIACgJQABgEAEgBQACgCADAAIFjAAQADAAADACIAEAFIACAJIABANIgBANIgCAJIgEAFIgGACIiQAAIAAG6QAAAEgBACIgGAEIgKACIgRABIgQgBg");
	this.shape_46.setTransform(0.05,2.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhQD5QgjgNgZgXQgZgZgOgkQgNgkAAgvIAAk8QAAgDACgDQABgCAEgBIALgDIAQgBIAQABIALADQADABACACQACADAAADIAAE0QAAAkAIAaQAKAbAQARQAQASAXAJQAXAJAcAAQAeAAAXgJQAXgJAQgRQAQgSAJgZQAIgaAAgiIAAk4QAAgDACgDQABgCAFgBIAKgDIAQgBIARABIAKADQADABACACQACADAAADIAAE3QAAAvgNAlQgOAkgZAZQgaAagkANQglANgtAAQgrAAgigMg");
	this.shape_47.setTransform(0.05,2.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNECIgLgBIgIgCIgGgCIgEgEIgCgGIionaQgDgJAAgFQAAgFADgDQAEgDAIgBIAVAAIASAAQAGABAEABQADACACADIADAGICSGuIABAAICOmtIADgHQACgDAEgCQAEgBAHgBIATAAIATABQAHABADACQACADAAAGQgBAFgDAIIinHbQgBAEgDADQgDADgFABIgMADIgUAAIgOAAg");
	this.shape_48.setTransform(0.0269,2.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ACCEBQgJAAgFgCQgGgCgCgDQgDgEgCgFIhqmCIgBAAIhjGCQgBAFgDAEQgCADgFACQgGACgHAAIgVABIgWgBQgJAAgFgCQgGgCgDgDQgDgEgBgFIiHnYQgDgJAAgFQAAgFADgDQAEgDAHgBIAUAAIAUAAQAHABAEABQADACACADQABACABAFIBzGsIAAAAIBumrQABgFACgCQABgEAEgBIAMgDIASAAIARAAIALADQAEABACAEIACAHIB2GrIABAAIBwmsIADgGQABgEAEgBIALgDIASAAIATABQAHABADACQADADAAAFIgDAOIiHHYQgCAFgDAEQgDADgGACQgFACgIAAIgUABIgVgBg");
	this.shape_49.setTransform(0.0219,2.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ACGECIgLgDQgEgBgCgCIgEgGIhxjMIhzDMIgEAGQgDACgEACIgLACIgTAAIgVgBQgHgBgDgDQgDgDABgFQABgFAFgJICLjqIiFjkQgFgIgBgFQgBgGADgDQADgDAIgBIAWAAIATAAQAIABAEABQAEACACACIAFAGIBtC/IBti/IAEgGQACgCAEgCQADgBAHgBIASAAIAUABQAIABADACQADADAAAGQgBAFgFAIIiFDiICLDsQAFAJABAFQABAFgEADQgDADgIABIgWABIgUAAg");
	this.shape_50.setTransform(0.0156,2.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQEBIgKgCQgEgCgCgCQgBgCAAgEIAAi8IiRkgIgFgOQgBgFADgDQADgDAHgBIAVAAIATAAIAMADQAEABADADIAEAGIBGCTIAUAsIATAuIABAAIATgsIATgtIBHiUQABgEADgCQACgDAEgBIAKgDIARAAIAXABQAHABAEACQADADgBAFIgGAOIiQEgIAAC8QAAAEgCACQgBACgEACIgLACIgQABIgQgBg");
	this.shape_51.setTransform(0.0161,2.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AiSEAQgKAAgHgGQgFgHAAgOIAAgOIAAgJIADgJIAFgMIAIgOIDslxIjoAAQgFAAgCgBQgDgCgBgDQgDgEgBgFIAAgMIAAgOQABgGADgDQABgEADgBQACgCAFAAIEbAAQALAAAGAGQAGAHAAAMIAAAQIAAALIgDAKIgFALIgKAOIjpFvID5AAQAGgBAEAIQADAGAAAPIgBAOIgCAJIgEAEQgDACgDAAg");
	this.shape_52.setTransform(0.35,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:27.55,y:0.625}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:22.925}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_29},{t:this.shape_4,p:{x:-16.1,y:-15.225}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_9,p:{x:12.775}},{t:this.shape_22,p:{x:27.7,y:16.525}}]},1).to({state:[{t:this.shape_22,p:{x:-30.35,y:-15.225}},{t:this.shape_4,p:{x:-16.1,y:-15.225}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_9,p:{x:31.425}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(1));

	// Layer_1
	this.instance = new lib.button_square();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-51.4,81.9,102.9);


// stage content:
(lib.template = function(mode,startPosition,loop,reversed) {
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
		this.blendshapes = {browDownLeft: 1,browDownRight: 2,browInnerUp: 3,browOuterUpLeft: 4,browOuterUpRight: 5,cheekPuff: 6,cheekSquintLeft: 7,cheekSquintRight: 8,eyeBlinkLeft: 9,eyeBlinkRight: 10,eyeLookDownLeft: 11,eyeLookDownRight: 12,eyeLookInLeft: 13,eyeLookInRight: 14,eyeLookOutLeft: 15,eyeLookOutRight: 16,eyeLookUpLeft: 17,eyeLookUpRight: 18,eyeSquintLeft: 19,eyeSquintRight: 20,eyeWideLeft: 21,eyeWideRight: 22,jawForward: 23,jawLeft: 24,jawOpen: 25,jawRight: 26,mouthClose: 27,mouthDimpleLeft: 28,mouthDimpleRight: 29,mouthFrownLeft: 30,mouthFrownRight: 31,mouthFunnel: 32,mouthLeft: 33,mouthLowerDownLeft: 34,mouthLowerDownRight: 35,mouthPressLeft: 36,mouthPressRight: 37,mouthPucker: 38,mouthRight: 39,mouthRollLower: 40,mouthRollUpper: 41,mouthShrugLower: 42,mouthShrugUpper: 43,mouthSmileLeft: 44,mouthSmileRight: 45,mouthStretchLeft: 46,mouthStretchRight: 47,mouthUpperUpLeft: 48,mouthUpperUpRight: 49,noseSneerLeft: 50,noseSneerRight: 51};
		//go to line 80
		this.isSetup = false;
		this.ltrs = ['A','B','C','D',' ','START OVER','E','F','G','H','DELETE WORD','DELETE LETTER','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		this.canvas_width = 1600;
		this.canvas_height = 800;
		this.btnxs = [];
		this.btnys = [];
		this.btnrows = [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4];
		this.btncols = [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5];
		this.rowpos = [[20/80,300],[85/80,372.5],[135/80,500],[85/80,627.5],[20/80,700]];
		this.colpos = [[80/80,550],[110/80,660],[130/80,800],[1,920],[50/80,1000],[20/80,1050]];
		this.line = new createjs.Shape();
		this.line.graphics.setStrokeStyle(10);
		this.allLandmarks = null;
		this.reslt = null;
		this.resltSetInterval = null;
		this.calInterval = null;
		this.waitInterval = null;
		this.calStage = 0;
		this.calScores = {};
		this.cal_square_pos = [[650,950],[400,600]];
		this.calBounds = [0];
		this.use_mcs_x = [];//these will contain first the best overall, and then the spec for top, right, bottom, left
		this.use_mcs_y = [];//contains little arrays of the score, the slope and the intercept
		this.lastPos = [(this.cal_square_pos[0][0]+this.cal_square_pos[0][1])/2,(this.cal_square_pos[1][0]+this.cal_square_pos[1][1])/2];
		this.calWaitr = [0,30];
		this.selectrs = [this.row_1,this.row1,this.col_1,this.col1,this.centr];
		
		this.writeIt = function(ind) {
			if(ind == 5) {
				this.txt_out.text = '';
			}else if(ind == 10) {
				this.txt_out.text = (this.txt_out.text).slice(0,-5);
			}else if(ind == 11) {
				this.txt_out.text = (this.txt_out.text).slice(0,-1);
			}else{
				this.txt_out.text += this.ltrs[ind];
			}
		}
		
		this.drawLandmarker = function() {
			//console.log('called');
			//console.log(this.use_mcs_x);
			var ubx = 0;
			var uby = 0;
			//console.log(this.use_mcs_x[ubx][0]);
			var bluntx = (-1*Math.log10(this.reslt.faceBlendshapes[0]['categories'][this.use_mcs_x[ubx][0]]['score'])-this.use_mcs_x[ubx][2])/this.use_mcs_x[ubx][1];
			var blunty = (-1*Math.log10(this.reslt.faceBlendshapes[0]['categories'][this.use_mcs_y[uby][0]]['score'])-this.use_mcs_y[uby][2])/this.use_mcs_y[uby][1];
			var smoothx = this.lastPos[0] + ((bluntx-this.lastPos[0])/6);
			var smoothy = this.lastPos[1] + ((blunty-this.lastPos[1])/6);
			this.lastPos = [smoothx,smoothy];
			var diffs = [715 - smoothx, smoothx - 880, 415 - smoothy, smoothy - 585];
			var diff_ind = diffs.indexOf(math.max(diffs));
			var sel_ind = -1;
			if(diff_ind < 2) {
				if(smoothx < 705) {
					sel_ind = 2;//this.col_1
				}else if(smoothx > 890) {
					sel_ind = 3;
				}else{
					sel_ind = 4;
				}
			}else if(diff_ind >= 2) {
				if(smoothy <405) {
					sel_ind = 0;
				}else if(smoothy > 595) {
					sel_ind = 1;
				}else{
					sel_ind = 4;
				}
			}
			for(var j=0; j<this.selectrs.length; j++) {
				if(sel_ind != j) {
					this.selectrs[j].alpha = Math.max(0, this.selectrs[j].alpha - 0.02);
				}else{
					this.selectrs[j].alpha += 0.01;
					if(this.selectrs[j].alpha >= 1) {
						for(var k=0; k<this.selectrs.length; k++) {
							this.selectrs[k].alpha = 0;
						}
						//console.log('selected');
						if(sel_ind == 4) {
							for(n=0; n<this.btnrows.length; n++) {
								if(this.btnrows[n] == 2 && this.btncols[n] == 2) {
									this.writeIt(n);
								}
							}
						}else if(sel_ind == 0) {
							for(var m = 0; m<this.btnrows.length; m++) {
								this.btnrows[m] = (this.btnrows[m] + 1)%5;
							}
						}else if(sel_ind == 1) {
							for(var m=0; m<this.btnrows.length; m++) {
								this.btnrows[m] = (this.btnrows[m] + 4)%5;
							}
						}else if(sel_ind == 2) {
							for(var m=0; m<this.btncols.length; m++) {
								this.btncols[m] = (this.btncols[m] + 1)%6;
							}
						}else if(sel_ind == 3) {
							for(var m=0; m<this.btncols.length; m++) {
								this.btncols[m] = (this.btncols[m] + 5)%6;
							}
						}
					}
				}
			}
			for(var i=0; i<this.btncols.length; i++) {
				//console.log(i);
				createjs.Tween.get(this['btn_'+i]).to({x: this.colpos[this.btncols[i]][1], y: this.rowpos[this.btnrows[i]][1], scaleX: this.colpos[this.btncols[i]][0], scaleY: this.rowpos[this.btnrows[i]][0]},500);
				//this['btn_'+i].scaleX = this.colpos[this.btncols[i]][0];
				//this['btn_'+i].x = this.colpos[this.btncols[i]][1];
				//this['btn_'+i].scaleY = this.rowpos[this.btnrows[i]][0];
				//this['btn_'+i].y = this.rowpos[this.btnrows[i]][1];
			}
			this.line.graphics.clear();
			this.line.graphics.beginFill('yellow').drawCircle(smoothx,smoothy,10);
			this.line.graphics.endFill();
			//console.log(this.reslt);
			/*this.line.graphics.clear();
			this.line.graphics.beginStroke("black");
			this.line.graphics.moveTo(this.reslt.faceBlendshapes[0]['categories'][14]['score']*(this.canvas_width),200);
			this.line.graphics.lineTo(this.reslt.faceLandmarks[0][14].x*(this.canvas_width),200);
			this.line.graphics.endStroke();*/
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
		
		this.useCalData = function() {
			this.cal_ball.visible = false;
			this.cal_square.visible = false;
			this.scrn.visible = false;
			//var xs = [13,14,15,16];
			//var ys = [11,12,17,18];
			var cs = [13,14,15,16,11,12,17,18];
			var cals_x = {};
			var cals_y = {};
			var linreg_x = {};
			var linreg_y = {};
			var x_r2s = [];
			var y_r2s = [];
			for(var i=0; i<cs.length; i++) {
				cals_x[cs[i]] = [];
				cals_y[cs[i]] = [];
				linreg_x[cs[i]] = [];
				linreg_y[cs[i]] = [];
				for(var j=0; j<this.calScores[cs[i]].length; j++) {
					cals_x[cs[i]].push([this.calScores['x'][j],-1*Math.log10(this.calScores[cs[i]][j])]);
					cals_y[cs[i]].push([this.calScores['y'][j],-1*Math.log10(this.calScores[cs[i]][j])]);
				}
				var rgx = regression.linear(cals_x[cs[i]].slice(this.calBounds[0],this.calBounds[1]),{precision:20});
				var rgy = regression.linear(cals_y[cs[i]].slice(this.calBounds[1],this.calBounds[2]),{precision:20});
				linreg_x[cs[i]].push(rgx);
				linreg_y[cs[i]].push(rgy);
				x_r2s.push(rgx.r2);
				y_r2s.push(rgy.r2);
			}
			var bx_ind = x_r2s.indexOf(math.max(x_r2s));
			var by_ind = y_r2s.indexOf(math.max(y_r2s));
			this.use_mcs_x.push([cs[bx_ind],linreg_x[cs[bx_ind]][0].equation[0],linreg_x[cs[bx_ind]][0].equation[1]]);
			this.use_mcs_y.push([cs[by_ind],linreg_y[cs[by_ind]][0].equation[0],linreg_y[cs[by_ind]][0].equation[1]]);
			/*var best_tot_x_ind = tot_x_r2s.indexOf(math.max(tot_x_r2s));
			var best_tot_y_ind = tot_y_r2s.indexOf(math.max(tot_y_r2s));
			var best_x_inds = [];
			var best_y_inds = [];
			this.use_mcs_x.push([xs[best_tot_x_ind],tot_lin_x[best_tot_x_ind].equation[0],tot_lin_x[best_tot_x_ind].equation[1]]);
			this.use_mcs_y.push([ys[best_tot_y_ind],tot_lin_y[best_tot_y_ind].equation[0],tot_lin_y[best_tot_y_ind].equation[1]]);
			for(var m=0; m<x_r2s.length; m++) {
				bx = x_r2s[m].indexOf(math.max(x_r2s[m]));
				by = y_r2s[m].indexOf(math.max(y_r2s[m]));
				this.use_mcs_x.push([xs[bx],linreg_x[xs[bx]][m].equation[0],linreg_x[xs[bx]][m].equation[1]]);
				this.use_mcs_y.push([ys[by],linreg_y[ys[by]][m].equation[0],linreg_y[ys[by]][m].equation[1]]);
			}
			console.log(this.use_mcs_x);
			console.log(this.use_mcs_y);*/
		}
		
		this.calibrateIt = function() {
			console.log('calibrating',this.calWaitr);
			var spd = 2;
			if(this.calWaitr[0] == 0) {
			if(this.calStage == 0) {
				if(this.cal_ball.x < this.cal_square_pos[0][1]) {
					this.cal_ball.y = this.cal_square.y;
					this.cal_ball.x += spd;
				}else{
					this.calWaitr[0] = 1;
					//this.calBounds.push(this.calScores['x'].length);
					this.calStage += 1;
				}
			}else if(this.calStage == 1) {
				if(this.cal_ball.x > this.cal_square_pos[0][0]) {
					this.cal_ball.y = this.cal_square.y;
					this.cal_ball.x -= spd;
				}else{
					this.cal_ball.x = this.cal_square.x;
					this.cal_ball.y = this.cal_square_pos[1][0];
					this.calWaitr[0] = 1;
					this.calBounds.push(this.calScores['x'].length);
					this.calStage += 1;
				}
			}else if(this.calStage == 2) {
				if(this.cal_ball.y < this.cal_square_pos[1][1]) {
					this.cal_ball.x = this.cal_square.x;
					this.cal_ball.y += spd;
				}else{
					this.calWaitr[0] = 1;
					//this.calBounds.push(this.calScores['x'].length);
					this.calStage += 1;
				}
			}else{
				if(this.cal_ball.y > this.cal_square_pos[1][0]) {
					this.cal_ball.x = this.cal_square.x;
					this.cal_ball.y -= spd;
				}else{
					this.calScores['x'].push(this.cal_ball.x);
					this.calScores['y'].push(this.cal_ball.y);
					for(var i=11; i<19; i++) {
						this.calScores[i].push(this.reslt.faceBlendshapes[0]['categories'][i]['score']);
					}
					console.log('cal_data = '+JSON.stringify(this.calScores));
					this.calBounds.push(this.calScores['x'].length);
					//console.log(this.calBounds);	
					clearInterval(this.calInterval);
					console.log(this.calBounds);
					this.useCalData();
					this.resltSetInterval = setInterval(function() {
						this.drawLandmarker();
					}.bind(this),20);
				}
			}
			this.calScores['x'].push(this.cal_ball.x);
			this.calScores['y'].push(this.cal_ball.y);
			for(var i=11; i<19; i++) {
				this.calScores[i].push(this.reslt.faceBlendshapes[0]['categories'][i]['score']);
			}
			}else{
				this.calWaitr[0] = this.calWaitr[0]+1;
				if(this.calWaitr[0] >= this.calWaitr[1]) {
					this.calWaitr[0] = 0;
				}
			}
		}
		
		this.setup = function() {
			for(var k=0; k<this.selectrs.length; k++) {
				this.selectrs[k].alpha = 0;
			}
			for(var j=0; j<30; j++) {
				this['btn_'+j].gotoAndStop(j);
			}
			this.btnxs = [this.btn_0.x,this.btn_1.x,this.btn_2.x,this.btn_3.x,this.btn_4.x,this.btn_5.x];
			this.btnys = [this.btn_0.y,this.btn_6.y,this.btn_12.y,this.btn_18.y,this.btn_24.y];
			this.video_frame.addChild(this.line);
			for(var i=11; i<19; i++) {
				this.calScores[i] = [];
			}
			this.calScores['x'] = [];
			this.calScores['y'] = [];
			this.waitInterval = setInterval(function() {
				console.log('waiting');
				if(this.reslt !== null) {
					clearInterval(this.waitInterval);
					this.calInterval = setInterval(function() {
						this.calibrateIt();
					}.bind(this),40);
				}
			}.bind(this),20);	
			this.isSetup = true;
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.cal_ball = new lib.cal_ball();
	this.cal_ball.name = "cal_ball";
	this.cal_ball.setTransform(650,500);

	this.cal_square = new lib.calSquare();
	this.cal_square.name = "cal_square";
	this.cal_square.setTransform(800,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cal_square},{t:this.cal_ball}]}).wait(1));

	// Layer_4
	this.video_frame = new lib.fullcopy();
	this.video_frame.name = "video_frame";
	this.video_frame.setTransform(800,400,1,1,0,0,0,800,400);

	this.timeline.addTween(cjs.Tween.get(this.video_frame).wait(1));

	// Layer_7
	this.scrn = new lib.full();
	this.scrn.name = "scrn";
	this.scrn.setTransform(800,400,1,1,0,0,0,800,400);

	this.timeline.addTween(cjs.Tween.get(this.scrn).wait(1));

	// Layer_5
	this.txt_out = new cjs.Text("", "36px 'Calibri'");
	this.txt_out.name = "txt_out";
	this.txt_out.lineHeight = 46;
	this.txt_out.lineWidth = 1524;
	this.txt_out.parent = this;
	this.txt_out.setTransform(37.8,43.25);

	this.btn_29 = new lib.letter_button();
	this.btn_29.name = "btn_29";
	this.btn_29.setTransform(1050,700);

	this.btn_28 = new lib.letter_button();
	this.btn_28.name = "btn_28";
	this.btn_28.setTransform(950,700);

	this.btn_27 = new lib.letter_button();
	this.btn_27.name = "btn_27";
	this.btn_27.setTransform(850,700);

	this.btn_26 = new lib.letter_button();
	this.btn_26.name = "btn_26";
	this.btn_26.setTransform(750,700);

	this.btn_25 = new lib.letter_button();
	this.btn_25.name = "btn_25";
	this.btn_25.setTransform(650,700);

	this.btn_24 = new lib.letter_button();
	this.btn_24.name = "btn_24";
	this.btn_24.setTransform(550,700);

	this.btn_23 = new lib.letter_button();
	this.btn_23.name = "btn_23";
	this.btn_23.setTransform(1050,600);

	this.btn_22 = new lib.letter_button();
	this.btn_22.name = "btn_22";
	this.btn_22.setTransform(950,600);

	this.btn_21 = new lib.letter_button();
	this.btn_21.name = "btn_21";
	this.btn_21.setTransform(850,600);

	this.btn_20 = new lib.letter_button();
	this.btn_20.name = "btn_20";
	this.btn_20.setTransform(750,600);

	this.btn_19 = new lib.letter_button();
	this.btn_19.name = "btn_19";
	this.btn_19.setTransform(650,600);

	this.btn_18 = new lib.letter_button();
	this.btn_18.name = "btn_18";
	this.btn_18.setTransform(550,600);

	this.btn_17 = new lib.letter_button();
	this.btn_17.name = "btn_17";
	this.btn_17.setTransform(1050,500);

	this.btn_16 = new lib.letter_button();
	this.btn_16.name = "btn_16";
	this.btn_16.setTransform(950,500);

	this.btn_15 = new lib.letter_button();
	this.btn_15.name = "btn_15";
	this.btn_15.setTransform(850,500);

	this.btn_14 = new lib.letter_button();
	this.btn_14.name = "btn_14";
	this.btn_14.setTransform(750,500,1,0.9995);

	this.btn_13 = new lib.letter_button();
	this.btn_13.name = "btn_13";
	this.btn_13.setTransform(650,500.05,1,0.9995,0,0,0,0,0.1);

	this.btn_12 = new lib.letter_button();
	this.btn_12.name = "btn_12";
	this.btn_12.setTransform(550,500.1,1,0.9995,0,0,0,0,0.1);

	this.btn_11 = new lib.letter_button();
	this.btn_11.name = "btn_11";
	this.btn_11.setTransform(1050,400);

	this.btn_10 = new lib.letter_button();
	this.btn_10.name = "btn_10";
	this.btn_10.setTransform(950,400);

	this.btn_9 = new lib.letter_button();
	this.btn_9.name = "btn_9";
	this.btn_9.setTransform(850,400);

	this.btn_8 = new lib.letter_button();
	this.btn_8.name = "btn_8";
	this.btn_8.setTransform(750,400);

	this.btn_7 = new lib.letter_button();
	this.btn_7.name = "btn_7";
	this.btn_7.setTransform(650,400);

	this.btn_6 = new lib.letter_button();
	this.btn_6.name = "btn_6";
	this.btn_6.setTransform(550,400);

	this.btn_5 = new lib.letter_button();
	this.btn_5.name = "btn_5";
	this.btn_5.setTransform(1050,300);

	this.btn_4 = new lib.letter_button();
	this.btn_4.name = "btn_4";
	this.btn_4.setTransform(950,300);

	this.btn_3 = new lib.letter_button();
	this.btn_3.name = "btn_3";
	this.btn_3.setTransform(850,300);

	this.btn_2 = new lib.letter_button();
	this.btn_2.name = "btn_2";
	this.btn_2.setTransform(750,300);

	this.btn_1 = new lib.letter_button();
	this.btn_1.name = "btn_1";
	this.btn_1.setTransform(650,300);

	this.btn_0 = new lib.letter_button();
	this.btn_0.name = "btn_0";
	this.btn_0.setTransform(550,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_0},{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.btn_5},{t:this.btn_6},{t:this.btn_7},{t:this.btn_8},{t:this.btn_9},{t:this.btn_10},{t:this.btn_11},{t:this.btn_12},{t:this.btn_13},{t:this.btn_14},{t:this.btn_15},{t:this.btn_16},{t:this.btn_17},{t:this.btn_18},{t:this.btn_19},{t:this.btn_20},{t:this.btn_21},{t:this.btn_22},{t:this.btn_23},{t:this.btn_24},{t:this.btn_25},{t:this.btn_26},{t:this.btn_27},{t:this.btn_28},{t:this.btn_29},{t:this.txt_out}]}).wait(1));

	// Layer_1
	this.centr = new lib.selector();
	this.centr.name = "centr";
	this.centr.setTransform(797.5,500,1.1786,0.3695,0,0,0,70,230);

	this.row1 = new lib.selector();
	this.row1.name = "row1";
	this.row1.setTransform(785,627.5,4.2143,0.2717,0,0,0,70,230);

	this.row_1 = new lib.selector();
	this.row_1.name = "row_1";
	this.row_1.setTransform(785,372.5,4.2143,0.2717,0,0,0,70,230);

	this.col1 = new lib.selector();
	this.col1.name = "col1";
	this.col1.setTransform(920,500,0.7857,1,0,0,0,70,230);

	this.col_1 = new lib.selector();
	this.col_1.name = "col_1";
	this.col_1.setTransform(660,500,1,1,0,0,0,70,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.col_1},{t:this.col1},{t:this.row_1},{t:this.row1},{t:this.centr}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(799.5,399.5,801,401);
// library properties:
lib.properties = {
	id: '764566CA18CFE44FBE1DD9A53BBB14D8',
	width: 1600,
	height: 800,
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
an.compositions['764566CA18CFE44FBE1DD9A53BBB14D8'] = {
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