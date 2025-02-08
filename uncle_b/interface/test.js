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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EglfgcHMBK/AAAMAAAA4PMhK/AAAg");
	this.shape.setTransform(240,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFE7DA").s().p("EglfAcIMAAAg4PMBK/AAAMAAAA4Pg");
	this.shape_1.setTransform(240,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.video_location, new cjs.Rectangle(-2,-2,484,364), null);


(lib.no_face_message = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgmBoQgLgGgHgKQgHgLgDgOQgDgOAAgPQAAgTAEgPQAEgOAIgKQAHgLAMgFQALgGAPAAQALAAAJAFQAKAFAJAJIAAhMIABgCQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAGgCIAKAAIAJAAIAGACIADACIABACIAADMIgBADQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgFABIgIABIgIgBIgFgBIgDgCIgBgDIAAgPQgLAMgMAGQgMAGgNAAQgQAAgLgGgAgNgJQgGAEgDAGQgEAGgBAIQgCAIAAAIQAAAJABAIQACAIADAHQADAGAGAEQAFAEAIAAQADAAAEgBIAIgEIAIgHIAJgKIAAgvQgIgJgIgGQgIgGgHAAQgIAAgFAEg");
	this.shape.setTransform(84.425,0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAmBNIgHgBIgDgCIgBgDIAAhPQAAgKgBgGQgCgFgCgEQgDgFgFgCQgEgCgGAAQgHAAgHAFQgIAGgIAKIAABcIgBADIgDACIgGABIgKAAIgJAAIgGgBIgEgCIgBgDIAAiKIABgDIADgCIAFgBIAIgBIAJABIAFABIACACIABADIAAAQQAMgNAMgGQALgGAMAAQAPAAAKAEQAJAFAGAIQAGAIADALQADALAAAPIAABVIgBADIgDACIgGABIgKAAIgJAAg");
	this.shape_1.setTransform(67.725,3.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgnBJQgKgFgGgIQgGgIgCgLQgCgLgBgQIAAhUIABgDIAEgCIAFgBIAKAAIAJAAIAGABIADACIACADIAABOQAAALABAGQABAFADAFQADAEAFACQAEACAGAAQAHAAAHgFQAIgGAJgKIAAhcIABgDIACgCIAHgBIAJAAIAKAAIAGABIADACIAAADIAACKIAAADIgDACIgFABIgJABIgIgBIgFgBIgDgCIAAgDIAAgQQgMANgLAGQgLAGgNAAQgPAAgKgEg");
	this.shape_2.setTransform(50.5,3.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AghBKQgOgFgJgLQgJgJgFgPQgDgOAAgTQgBgQAFgPQAFgPAKgKQAJgLAOgGQAPgFARgBQAUAAANAGQAOAFAJAJQAJALAFANQADAPAAATQABARgFAOQgEAPgLAKQgJALgOAGQgOAGgTAAQgSgBgOgEgAgOgrQgHADgEAGQgEAGgCAJQgCAJgBAKQAAAKACAJQACAJAEAGQAEAGAGAEQAHADAJAAQAJAAAGgDQAHgDAEgGQAEgHACgIQACgJAAgLQAAgJgBgIQgCgKgEgGQgEgGgGgEQgHgDgKAAQgIAAgGADg");
	this.shape_3.setTransform(33.35,3.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgPBtIgHgBIgCgCIgBgDIAAhvIgSAAQgDAAgCgEQgBgEAAgIIAAgIIABgFQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIACgBIASAAIAAgMQgBgOADgLQADgLAGgHQAGgHAJgDQAIgEANAAIAMABIAIACIAFACIABADIABAFIABAIIgBAHIgBAFIgBACIgBAAIgDAAIgDgCIgFgBIgGAAIgIABQgCABgCADQgDADgBAFIgBALIAAANIAaAAIACABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIACAFIAAAIQAAAIgCAEQgBAEgDAAIgaAAIAABvIgBADIgCACIgGABIgJABIgJgBg");
	this.shape_4.setTransform(20,0.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgaBKQgNgFgKgKQgJgJgFgOQgEgPAAgUQAAgRAEgPQAFgPAKgKQAIgKAOgGQANgFAPgBQASAAANAGQAMAEAIAKQAIAJADANQAFAMAAAPIAAAGQAAAGgEAEQgDADgGAAIhUAAQABAJACAIQACAGAEAFQAFAFAHADQAHADAJAAQALAAAIgCIAOgDIAJgDIAGgCIACABIACACIABAEIAAAHIAAAFIAAAFIgBACIgCACIgGAEIgLADIgRADIgTACQgSAAgOgFgAgKgvQgGADgDAEQgEAGgCAGQgCAHgBAGIA7AAQAAgQgHgJQgHgKgQAAQgGAAgFADg");
	this.shape_5.setTransform(-0.75,3.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgSBKQgNgFgIgKQgIgKgFgOQgEgOAAgTQAAgTAFgQQAFgOAKgLQAJgJANgFQANgGAOAAIANABIALAEIAJAEIAGAEIACADIACADIAAAFIAAAGQAAAJgBAEQgCAEgCgBQgDAAgDgCIgHgFIgKgEQgFgCgIAAQgPAAgIALQgIAMAAAWQAAALACAJQACAJAEAFQAEAGAFADQAGACAIABQAIAAAGgCIALgGIAHgGQADgCACAAIACABIACADIABAFIAAAIIAAAIIgBAEIgBADIgCADIgHAFIgKAEIgNADQgGACgIAAQgPgBgMgEg");
	this.shape_6.setTransform(-15.325,3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AggBMQgKgDgGgGQgHgGgEgIQgEgJAAgKQAAgNAFgJQAFgJAJgEQAKgHAOgCQAOgDASAAIANAAIAAgJQAAgGgBgFQgCgFgDgEQgDgDgFgBQgFgCgGAAQgKABgIACQgIACgGACIgJAFQgEACgDAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgCgDIgCgFIAAgHIABgHIADgFQACgDAFgCIANgFIAQgEQAJgBAIgBQARAAALADQAMAEAHAHQAIAGADAKQAEALAAAOIAABdQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQgBABgEAAIgKABIgKgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgLQgIAKgLAFQgLAEgNABQgLAAgJgDgAgFAMQgHACgEACQgEADgCAEQgCAEAAAFQAAAJAFAFQAGAFAKAAQAHAAAHgFQAHgDAHgJIAAgYIgPAAQgJABgGABg");
	this.shape_7.setTransform(-30.475,3.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgQBtIgFgBIgEgCIgBgDIAAhvIgRAAQgDAAgBgEQgCgEAAgIIABgIIABgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIACgBIARAAIAAgMQABgOACgLQADgLAGgHQAGgHAIgDQAKgEANAAIALABIAJACIADACIACADIACAFIAAAIIAAAHIgCAFIgBACIgCAAIgCAAIgDgCIgFgBIgGAAIgIABQgDABgBADIgDAIIgCALIAAANIAaAAIADABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABABAAIABAFIAAAIQAAAIgBAEQgCAEgDAAIgaAAIAABvIgBADIgDACIgGABIgIABIgKgBg");
	this.shape_8.setTransform(-42.7,0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AghBKQgOgFgJgLQgJgJgFgPQgDgOAAgTQgBgQAFgPQAFgPAKgKQAJgLAOgGQAPgFARgBQAUAAANAGQAOAFAJAJQAJALAFANQADAPAAATQABARgFAOQgEAPgLAKQgJALgOAGQgOAGgTAAQgSgBgOgEgAgOgrQgHADgEAGQgEAGgCAJQgCAJgBAKQAAAKACAJQACAJAEAGQAEAGAGAEQAHADAJAAQAJAAAGgDQAHgDAEgGQAEgHACgIQACgJAAgLQAAgJgBgIQgCgKgEgGQgEgGgGgEQgHgDgKAAQgIAAgGADg");
	this.shape_9.setTransform(-63.95,3.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhJBlIgGgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgDIAAi1QAAgHAEgEQAEgDAHAAIAVAAIAKABIAIADQADADADAEIAFAKIAnBKIAGAMIAHANIAGANIAGAMIgBgXIAAgWIAAheIABgDIAEgCIAFgBIAJgBIAJABIAGABIACACIABADIAAC1QAAADgBADQgBADgCACIgGACIgFABIgRAAQgGABgEgCQgEgBgDgCQgEgEgDgEIgHgOIgxhdIgJgSIgIgTIAAAWIAAAYIAABoIAAADIgDACIgGABIgJABIgJgBg");
	this.shape_10.setTransform(-83.1,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.no_face_message, new cjs.Rectangle(-95.6,-21.5,191.2,43.1), null);


(lib.mouse_mccopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#002626").ss(4,1,1).p("AAAjsID9HZIj9i4Ij8C4g");
	this.shape.setTransform(0.025,23.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#95C623").s().p("AAAA1Ij8C4ID8nZID9HZg");
	this.shape_1.setTransform(0.025,23.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouse_mccopy, new cjs.Rectangle(-27.3,-2,54.7,51.4), null);


(lib.mouse_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAAjsID9HZIj9i4Ij8C4g");
	this.shape.setTransform(0.025,23.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E55812").s().p("AAAA1Ij8C4ID8nZID9HZg");
	this.shape_1.setTransform(0.025,23.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouse_mc, new cjs.Rectangle(-27.3,-2,54.7,51.4), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.dot_cover = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot_cover, new cjs.Rectangle(-15,-15,30,30), null);


(lib.red_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.cvr = new lib.dot_cover();
	this.cvr.name = "cvr";
	this.cvr.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cvr).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red_dot, new cjs.Rectangle(-17,-17,34,34), null);


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
	this.shape.graphics.f("#002626").s().p("ABoCfIgHgBIgEgDIgCgDIgbhNIiCAAIgaBMIgCAEIgEADIgGABIgLABIgMgBQgFgBgBgCQgCgBAAgDIACgJIBqklQABgDACgBIAEgCIAIgCIAMgBIAMABIAIACIAFADIADADIBqElIACAJQAAADgCACQgCABgEABIgMABIgMgBgAg4AqIBtAAIg2idg");
	this.shape.setTransform(25.095,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002626").s().p("AhYCeQgFAAgFgEQgFgDAAgKIAAkZQAAgJAFgEQAFgEAFAAIBIAAQAbAAATAFQASAGAMAKQAMAKAGAPQAGAPAAATQAAALgCALQgDAKgGAJQgFAIgHAHQgJAHgKAEQANADALAGQALAGAJAKQAJAJAFAOQAEANAAARQAAAPgEAMQgDAMgHAKQgHALgKAHQgKAHgLAFQgNAGgNACQgOADgRAAgAg+B8IA+AAQANgBALgDQAKgEAJgGQAIgHAEgKQAFgKAAgNQAAgPgFgKQgEgLgIgHQgKgHgNgEQgMgEgTAAIgzAAgAg+gUIAwAAQAQAAAJgFQALgEAGgHQAHgIADgJQADgKAAgKQAAgMgDgIQgEgKgGgGQgHgHgLgDQgKgEgSAAIgsAAg");
	this.shape_1.setTransform(26.05,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002626").s().p("AgjCYQgZgLgRgTQgSgVgJgdQgKgeAAgmQAAgmALgfQAKgeASgWQASgVAagMQAZgLAeAAQAOAAANADIAYAGQALAEAIAFIAMAJIAFAFIABAEIABAFIAAAIIAAAIIgBAGIgDADIgDACQgEgBgGgFIgPgKQgKgFgOgFQgOgFgTAAQgVAAgRAIQgRAJgMAQQgNARgGAXQgHAYAAAdQAAAeAGAXQAHAXAMAPQAMAQASAIQARAIAWAAQATAAAOgFQAOgEAKgGIAQgLQAHgEADAAIADABIACACIABAGIABAKIgBAGIAAAFIgCAEIgDAFIgLAHQgHAFgMAFQgMAEgPAEQgPADgSAAQgdAAgZgKg");
	this.shape_2.setTransform(25.575,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002626").s().p("AhpCeQgGAAgFgEQgEgDgBgKIAAkZQABgJAEgEQAFgEAGAAIBHAAQAoAAAdALQAdALASATQAUAUAJAcQAKAdAAAkQABAogLAeQgLAegTAVQgVAUgdAKQgdAKgoAAgAhPB7IAsAAQAeAAAUgHQAUgJAOgPQAOgPAIgYQAGgXAAggQAAgagGgWQgGgVgOgRQgOgQgUgJQgUgJghAAIgrAAg");
	this.shape_3.setTransform(26.05,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002626").s().p("AhHCeQgGAAgFgEQgFgDAAgKIAAkZQAAgJAFgEQAFgEAGAAICUAAIAEABIADADIABAGIABAIIgBAHIgBAGIgDADIgEABIh6AAIAABjIBpAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABIACADIACAEIAAAIIAAAHIgCAGIgCACIgEABIhpAAIAABxIB8AAIAEABIACADIACAGIABAIIgBAIIgCAFIgCADIgEABg");
	this.shape_4.setTransform(25.85,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002626").s().p("AhHCeIgGgBIgEgDIgBgDIAAkkQAAgJAFgEQAFgEAGAAICNAAIADABIADADIACAGIAAAIIAAAIIgCAGIgDADIgDABIhzAAIAABrIBsAAIAEABIADADIABAFIAAAIIAAAIIgBAFIgDADIgEABIhsAAIAACEIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_5.setTransform(26.1,24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002626").s().p("AgmCXQgdgMgUgVQgUgUgKgdQgLgeAAgkQAAgkAMgfQALgfAVgVQAUgWAdgMQAdgMAiABQATAAAPADQAQADANAEQAMAFAIAEQAJAFADAEQADADABAEQACAEAAAIIgBAIIgBAGIgDADIgDABQgDAAgHgEIgSgKQgMgGgPgFQgRgEgWgBQgaAAgTAKQgVAJgPASQgOARgIAWQgHAYAAAaQAAAeAIAXQAJAYAOAQQAPAQAVAIQAUAJAYAAQAPAAAPgDQAPgFANgHIAAhcIhJAAQgFAAgCgDQgCgFAAgJIABgHIABgEIADgEIAEgBIBkAAIAFABIAFADIAEAFIABAHIAAB5QAAAGgCAFQgDAEgHAEIgSAIIgXAGIgYAFIgZABQgjAAgdgLg");
	this.shape_6.setTransform(24.375,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002626").s().p("ABTCfIgHgBQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgDIAAiNIiPAAIAACNIgBADIgDADIgHABIgKABIgKgBIgGgBIgEgDIgBgDIAAkvIABgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAGgCIAKgBIAKABIAHACQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABADIAAB/ICPAAIAAh/IABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAHgCIAKgBIAKABIAGACQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABADIAAEvIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_7.setTransform(25.075,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002626").s().p("AgJCfIgHgBIgDgDIgBgDIAAkvIABgDQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIAHgCIAIgBIAKABIAHACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIAAEvIgBADIgDADIgHABIgKABIgJgBg");
	this.shape_8.setTransform(25.05,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002626").s().p("AgZCgIgMgDIgKgEIgFgEIgCgDIgCgDIgBgFIAAgIIAAgJIACgFIACgDIADgBIAFACIAIAEIAKAEQAFACAIAAQAIAAAGgCQAFgCAEgGQAEgGABgJQACgLAAgPIAAjhIABgEIAEgCIAGgBIAKgBIAKABIAHABIADACIABAEIAADlQAAASgDAQQgDAQgJALQgIALgNAGQgOAGgTAAIgOgBg");
	this.shape_9.setTransform(23.075,24.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002626").s().p("ABDCfQgEgBgEgCIgEgEIhzieIAACeIgBADIgEADIgGABIgKABIgKgBIgGgBIgEgDIgBgDIAAkvIABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAIAGgCIAKgBIAKABIAGACQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIAACNIBviNIADgDIAFgCIAHgCIAKgBIAKABIAHACIADADIAAACIgBAHIgGAJIhnB9IBvCUIAGAJIAAAEIAAAEIgEADIgGABIgLABIgPgBg");
	this.shape_10.setTransform(26.55,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002626").s().p("AhBCfQgGAAgFgEQgFgEAAgJIAAkkIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAHgCIAKgBIAKABIAHACQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAEQIBwAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADADIABAFIABAIIgBAJIgBAFIgDAEIgEABg");
	this.shape_11.setTransform(26.95,24.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002626").s().p("ACNCeIgHgBIgDgDIgBgDIAAkSIgBAAIhvETIgCADIgEACIgGABIgIABIgIgBIgGgBIgEgCIgCgDIhrkTIAAESIgBADIgDADIgHABIgKABIgKgBIgHgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgDIAAkiQAAgKAGgEQAFgFAHAAIAaAAQAIAAAGACQAFABAFADQAEAEADAEIAGAMIBaDkIAAAAIBejjIAGgNQADgFAEgDQAEgDAFgBQAEgCAHAAIAbAAIAHACQADABACACIAEAGQACADAAAFIAAEiIgBADIgEADIgGABIgKABIgKgBg");
	this.shape_12.setTransform(25.075,24.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002626").s().p("AhsCeIgGgBIgDgCIgBgEIAAkiQgBgKAGgFQAGgEAGAAIAVAAQAHABAFABQAFABAEADQAEADADAFIAIAMIBJCKIAOAZIAMAYIALAWIAMAYIgBgpIAAgoIAAiqIABgEIAEgCIAHgCIAKAAIAKAAIAGACIADACIABAEIAAEiQAAAFgBADQgCAEgDACIgFADIgHABIgOAAIgMgBQgEgCgFgDQgEgDgFgHQgEgGgFgJIhgizIgOgdIgPgeIgBAAIABAkIAAAkIAAC+IgBAEIgDACIgHABIgKABIgKgBg");
	this.shape_13.setTransform(25.05,24.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002626").s().p("Ag/CYQgbgKgQgVQgRgUgJgeQgIgeAAgnQAAglAJgeQAJgeASgWQASgVAbgMQAbgLAjAAQAjgBAaALQAaAKARAVQASATAIAeQAIAeAAAnQAAAkgJAfQgJAfgRAWQgTAVgbAMQgbALgjAAQgkAAgZgKgAgsh0QgSALgMARQgMARgFAXQgFAXAAAZQAAAaAFAYQAFAYALAQQALARASAKQASAJAcAAQAbAAASgKQATgKAMgRQALgSAFgXQAFgXAAgZQAAgbgFgXQgFgWgLgRQgLgSgSgJQgTgKgbAAQgaAAgTAKg");
	this.shape_14.setTransform(25.025,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002626").s().p("AhVCeIgGgBIgEgDIgBgDIAAkjQAAgJAFgFQAFgEAGAAIBEAAIATABIAWAEQANADANAHQANAIAKALQAJALAFAPQAFAPAAASQAAAYgHATQgJATgOAMQgOANgWAIQgVAHgcAAIgkAAIAAByIgBADIgEADIgGABIgKABIgKgBgAg2ADIAmAAQASAAANgEQAMgFAJgJQAIgIAEgMQAFgNAAgOQAAgTgHgNQgIgNgKgGQgKgHgMgBIgVgCIgnAAg");
	this.shape_15.setTransform(26.05,24.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002626").s().p("ACJCzQgLgEgOgHIgegTQgRgLgPgPQgMAIgSAGQgSAEgXAAQgkAAgagKQgagKgRgUQgRgVgIgeQgJgeAAgmQAAgmAJgeQAJgeATgWQASgVAbgMQAbgLAkAAQAhgBAaALQAZAKASAVQARATAJAeQAJAeAAAmQAAAUgCARQgDASgFAQQgFAQgHAOQgIANgKAMQASAOANAIIAWANIAOAGQAFACACACQADACABAEIABAMIgBAKIgCAFIgCADIgDABQgFAAgLgFgAg/iJQgTAKgLASQgMARgFAXQgFAXAAAZQAAAaAEAYQAFAYALAQQALARATAKQASAJAcAAQAaAAATgKQATgKALgRQAMgSAFgXQAFgYAAgYQAAgbgFgXQgFgWgLgRQgLgSgTgJQgSgKgaAAQgcAAgSAKg");
	this.shape_16.setTransform(26.725,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002626").s().p("ABJCeIgHgBIgEgDIgCgFIgdhLIgLgXQgFgLgIgHQgHgIgKgEQgKgFgOAAIgcAAIAACHIgBADIgEADIgGABIgKABIgKgBIgHgBIgDgDIgBgDIAAkkQAAgJAFgEQAFgEAFAAIBEAAIAUABIANABQASADAOAHQAOAHAKALQAJAKAFAOQAFANAAARQAAAPgFANQgEANgIAJQgIAKgLAHQgLAHgOAEQAHADAHAGQAGAFAGAHQAFAHAFAKIAKAWIAcBFIAEANIABAFIAAADIgDADIgHABIgMABIgKgBgAg+gRIApAAQAQAAAMgDQAMgFAIgHQAIgHAEgKQADgKAAgLQAAgTgIgMQgIgNgUgGQgGgCgHAAIgUgBIgjAAg");
	this.shape_17.setTransform(26.225,24.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002626").s().p("AgnCgQgNgDgKgEQgMgDgGgFQgIgEgCgDQgEgDgBgEQgBgEAAgJIAAgIIACgGIACgDIAEgBQADAAAHAFIAQAJQAJAEAOAFQAOAEASAAQAMAAAMgEQALgDAJgHQAHgHAFgKQAEgJAAgNQAAgNgGgKQgGgJgKgHQgKgIgMgGIgagMIgagNQgNgIgKgJQgKgLgGgNQgGgPAAgTQAAgUAHgPQAHgPANgLQAMgKASgGQASgFAUAAQAKAAALABQAKACAKAEQAJACAIAEIAJAGIADAEIACAEIAAAEIABAIIgBAHIgBAHIgCADIgDABQgDAAgFgEIgPgHQgIgFgLgDQgMgDgOAAQgMAAgKADQgJAEgHAFQgHAGgDAIQgCAIAAAKQAAANAFAJQAHAJAKAIQAKAHANAHIAZALIAbAPQANAFAJALQALAKAGAOQAGANAAAUQAAAVgIASQgIASgPALQgOAMgUAGQgUAHgVgBQgQABgOgDg");
	this.shape_18.setTransform(25.05,24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002626").s().p("AgJCeIgHgBIgDgDIgBgDIAAkRIhZAAIgDgBIgDgDIgBgGIgBgIIABgIIABgGIADgDIADgBIDbAAIAEABIACADIACAGIAAAIIAAAIIgCAGIgCADIgEABIhZAAIAAERIgBADIgDADIgHABIgKABIgJgBg");
	this.shape_19.setTransform(25.075,24.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002626").s().p("AgxCaQgWgIgPgPQgPgPgIgWQgJgWAAgdIAAjDIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAgBIAHgBIAKgBIAKABIAHABQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAAC+QAAAWAFAQQAGAQAKALQAKALAOAGQAPAGAQAAQATAAAOgGQAOgFAKgLQAKgLAFgQQAGgQgBgVIAAjAIACgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABgBIAHgBIAKgBIAKABIAGABQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAADAQAAAcgJAYQgIAWgQAPQgPAQgXAIQgWAIgbAAQgbAAgVgHg");
	this.shape_20.setTransform(25.05,24.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002626").s().p("AgHCgIgIgBIgEgBIgEgCIgCgCIgCgDIhnklIgCgJQAAgDACgBQACgCAFgBIANgBIALABIAGACIAEACIABAEIBaEJIBYkJIACgEIAEgCIAGgCIAMgBIAMABQAEABACACQACACgBACIgCAJIhnElIgDAEQgBACgDABIgIABIgMABIgIAAg");
	this.shape_21.setTransform(25.0813,24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002626").s().p("ABQCfIgIgBQgEgCgBgCIgDgFIhBjuIgBAAIg9DuIgCAFQgCACgDACIgIABIgNABIgOgBIgIgBQgEgCgBgCIgDgFIhUkjIgBgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQACgCAEgBIANgBIAMABIAHACIADACIABAEIBHEIIBEkHQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAHgCIALgBIALABIAGACQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIACAEIBIEHIABAAIBFkIIACgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAGgCIAMgBIALABQAFABABACQACACAAACIgBAJIhUEjIgDAFQgCACgDACIgIABIgNABIgNgBg");
	this.shape_22.setTransform(25.025,24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002626").s().p("ABTCfIgHgBIgEgDIgCgDIhGh+IhHB+IgCADIgEADIgHABIgMABIgNgBIgGgDQgCgCABgCQAAgEADgFIBXiQIhTiNQgDgFAAgEQgBgCACgCQACgCAEgBIAOgBIAMABIAHACQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIADADIBDB2IBDh2IACgDQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAGgCIAMgBIAMABQAFABACACQACACgBACQAAAEgDAFIhSCMIBVCRQAEAFAAAEQABACgCACIgHADIgOABIgMgBg");
	this.shape_23.setTransform(25.0633,24.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#002626").s().p("AgJCfIgHgBIgDgDIgBgDIAAh1IhaixIgDgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQABgCAFgBIANgBIAMABIAHACIAEACIACAEIAsBaIAMAcIAMAdIAAAAIAMgcIAMgcIAshbIACgEIAEgCIAGgCIAKgBIAOABQAFABACACQACACAAACIgEAJIhZCxIAAB1IgBADIgEADIgGABIgKABIgJgBg");
	this.shape_24.setTransform(25.075,24.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002626").s().p("AhaCeQgGAAgDgEQgEgEgBgIIAAgJIABgGIACgGIADgGIAFgJICRjkIiPAAIgFgBIgCgDIgBgFIgBgIIABgIIABgGIACgDIAFgBICuAAQAHAAAEAEQAEAEAAAHIAAAKIAAAHIgCAGIgEAHIgFAIIiQDjICZAAQAEgBACAFQADAEAAAKIgBAIIgCAFIgCADIgEABg");
	this.shape_25.setTransform(25.25,24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#002626").ss(3,1,1).p("ACahdIAACFIkzAAIA9g1AiZAoIA9A2");
	this.shape_26.setTransform(25.175,27.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("ABMCfIgKgBQgEgCgBgCIgDgEIg7hyIg7ByIgDAEQgCACgDACIgLABIgSABIgTgBQgHgBgDgDQgCgCABgGIAGgNIBMiJIhGiCIgGgNQgCgGADgCQADgDAHgBIAWgBIASABIALACIAFADIADAEIA3BpIA2hpIADgEIAFgDQADgBAHgBIARgBIATABQAHABADADQACACgBAGIgFANIhHCBIBLCKIAGANQABAGgDACQgDADgHABIgWABIgSgBg");
	this.shape_27.setTransform(25.0844,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// Layer_3
	this.hl = new lib.highlight();
	this.hl.name = "hl";
	this.hl.setTransform(25,25,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.hl, 0, 1, 2, false, new lib.highlight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(29));

	// Layer_2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#002626").ss(1,1,1).p("AiVj5IErAAQBkAAAABkIAAErQAABkhkAAIkrAAQhkAAAAhkIAAkrQAAhkBkAAg");
	this.shape_28.setTransform(25,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#95C623").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape_29.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-9,52,65.1);


// stage content:
(lib.test = function(mode,startPosition,loop,reversed) {
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
		//this works, it can predict the next letter pretty well
		this.btn_width = 30.75;
		this.btns_width = 978.55;
		this.btns = [];
		this.btn_row_num = 5;
		this.btn_vals = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_','new','del'];
		this.start_x = 22.25;
		this.levels_y = [75,270,410,520,603,660,670];
		this.levels_scale = [3.5,2.5,2,1.5,1,0.75];
		this.arrange_btns = [];
		this.btn_move_duration = 1000;
		
		this.growButtons = function() {
			for(i=0; i<this.arrange_btns.length; i++) {
				for(j=0; j<this.arrange_btns[i].length; j++) {
					createjs.Tween.get(this['ltr_'+this.arrange_btns[i][j]]).to({y:50+this.levels_y[i],x:this.start_x+(j*(this.btns_width/this.btn_row_num)),scale:this.levels_scale[i]},this.btn_move_duration,createjs.Ease.sineOut);
				}
			}
		}
		
		this.tryNext = function() {
			this.arrange_btns.push(this.arrange_btns.shift());
			//console.log(this.arrange_btns);
			this.growButtons();
		}
		
		this.writeIt = function() {
			//console.log(this.ltr,this.parent.single_ltrs[this.ltr]);
			this.parent.outpt.text = this.parent.outpt.text.replaceAll("_"," ");
			if(this.ltr == 'del') {
				this.parent.outpt.text = this.parent.outpt.text.slice(0,-1);
			}else if(this.ltr == 'new') {
				this.parent.outpt.text = '';//'+= "\n";
			}else{
				this.parent.outpt.text += this.ltr;
			}
			this.parent.arrangeBtns();
		}
		
		this.setup_keys = function() {
			for(l=0; l<this.single_ltrs; l++) {
				console.log(this.single_ltrs[l]);
			}
			this.dn.addEventListener('click',this.tryNext.bind(this));
			for(i=0; i<29; i++) {
				this.btns.push(i);
				ltr_mc = this['ltr_'+i];
				ltr_mc.gotoAndStop(i);
				ltr_mc.ltr = this.btn_vals[i];
				ltr_mc.hl.addEventListener('click',this.writeIt.bind(ltr_mc));
			}
			this.arrangeBtns();
		}
		this.all_ltrs = {'a': [13,19,17,11,18,26,2,12,3,8,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'b': [4,0,14,24,11,20,17,27,28,8,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'c': [14,7,4,0,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'d': [26,4,8,0,14,20,18,17,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'e': [26,17,13,3,18,0,11,2,19,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'f': [26,14,8,17,4,0,5,19,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'g': [26,4,7,0,17,8,14,20,13,11,27,28,18,24,19,6,3,12,1,22,5,15,2,10,9,25,21,23,16],'h': [4,26,0,8,14,19,17,20,24,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'i': [26,13,18,19,14,2,11,4,0,17,21,12,3,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'j': [14,20,0,27,28,4,8,26,17,15,18,10,3,13,19,2,12,7,9,11,5,1,21,24,6,22,25,23,16],'k': [26,4,8,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'l': [4,26,8,0,11,14,24,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'m': [4,0,26,14,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'n': [26,3,19,6,4,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'o': [13,17,5,26,20,12,11,19,22,18,15,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'p': [4,17,14,0,11,26,8,20,15,7,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'q': [20,27,28,26,8,0,18,19,17,11,14,1,4,13,2,16,21,5,7,12,15,22,3,23,6,25,9,10,24],'r': [4,26,8,14,0,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'s': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'t': [7,26,4,8,14,0,17,18,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'u': [18,13,17,19,11,2,12,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'v': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'w': [0,8,4,7,14,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'x': [26,15,19,8,27,28,0,4,2,20,14,7,24,5,12,18,23,11,1,21,17,22,13,3,6,9,10,16,25],'y': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'z': [4,0,27,28,8,26,14,25,20,7,24,11,18,19,1,12,13,10,3,22,17,6,2,21,5,15,16,23,9],'_': [19,0,14,18,8,2,22,1,15,5,12,7,17,3,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'new': [19,0,14,18,8,2,22,1,15,5,12,7,17,3,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'my': [26,18,4,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'y_': [0,19,18,2,12,3,7,14,11,22,5,8,15,6,1,4,13,10,20,17,9,24,26,21,16,25,23,27,28],' h': [4,0,14,8,20,26,19,17,24,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'he': [26,17,0,11,13,24,3,8,12,18,2,19,4,21,15,23,6,5,22,14,1,7,20,16,10,25,27,28,9],'ea': [11,17,19,18,12,3,2,13,26,6,21,8,24,15,1,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'al': [26,11,19,18,24,8,4,12,14,10,15,20,22,0,3,5,21,1,2,27,28,6,17,7,13,9,25,16,23],'lt': [7,26,0,8,20,4,14,17,18,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'th': [4,0,26,8,12,17,14,11,2,18,24,19,20,13,22,1,3,5,15,27,28,7,10,21,6,16,25,9,23],'h_': [2,0,18,12,19,8,14,11,10,1,4,13,20,24,22,3,6,7,17,9,15,5,26,21,16,25,23,27,28],' j': [14,0,20,27,28,4,8,26,17,15,18,10,3,13,19,2,12,7,9,11,5,1,21,24,6,22,25,23,16],'jo': [24,20,13,17,5,26,12,11,19,22,18,15,21,14,3,2,6,1,8,0,10,4,27,28,7,23,9,25,16],'ou': [17,26,19,11,6,18,13,1,3,15,2,12,4,0,8,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'ur': [26,4,18,19,8,0,17,21,15,13,6,2,14,24,3,12,20,11,10,1,27,28,5,7,22,25,16,9,23],'rn': [26,8,18,4,12,0,3,19,6,2,14,13,20,24,5,11,10,21,1,7,17,22,9,27,28,15,25,16,23],'ne': [24,26,4,18,22,3,15,19,2,13,17,21,0,11,12,8,23,6,5,14,1,7,20,16,10,25,27,28,9],'ey': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],' b': [4,0,17,20,24,8,14,11,27,28,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'be': [26,2,17,8,3,19,11,4,6,18,5,13,0,12,21,15,23,22,24,14,1,7,20,16,10,25,27,28,9],'eg': [0,8,17,6,20,26,4,7,14,13,11,27,28,18,24,19,3,12,1,22,5,15,2,10,9,25,21,23,16],'ga': [8,13,21,17,6,12,19,18,11,26,2,3,24,15,1,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'an': [3,26,19,18,6,2,0,24,8,13,10,4,20,14,5,11,21,12,1,7,17,22,9,27,28,15,25,16,23],'n_': [19,0,8,12,14,3,22,24,15,1,4,7,11,5,17,20,13,2,18,6,26,9,21,10,16,25,23,27,28],' i': [13,26,19,18,12,11,5,14,2,4,0,17,21,3,6,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'in': [6,26,2,19,8,21,0,5,4,3,20,14,18,11,10,13,7,24,12,1,17,22,9,27,28,15,25,16,23],' a': [13,26,18,11,17,1,19,2,5,3,12,6,22,15,21,8,20,24,10,7,4,25,9,23,0,27,28,14,16],'at': [26,8,4,12,19,7,2,14,18,17,20,0,24,11,22,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'t_': [8,19,0,22,12,14,18,2,7,5,15,4,17,24,1,3,13,11,10,20,6,26,21,9,16,25,23,27,28],' t': [7,14,17,8,4,0,22,24,21,26,18,20,19,11,2,12,1,13,5,25,15,3,6,10,9,27,28,23,16],'e_': [19,0,8,14,22,12,18,3,13,1,2,5,7,15,11,17,4,6,24,20,9,21,10,26,16,25,23,27,28],'ag': [4,8,13,14,0,17,6,26,7,20,11,27,28,18,24,19,3,12,1,22,5,15,2,10,9,25,21,23,16],'ge': [26,18,19,3,17,13,11,12,0,2,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],' o': [5,13,20,17,19,21,15,1,2,22,10,26,12,11,18,14,3,6,8,0,24,4,27,28,7,23,9,25,16],'of': [26,5,4,19,14,8,17,0,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'f_': [19,12,0,15,18,14,6,2,24,22,7,4,8,1,3,5,11,17,26,13,20,21,9,10,16,25,23,27,28],'nd': [26,4,8,18,0,17,20,14,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'d_': [19,0,22,8,12,18,14,1,7,15,5,3,4,2,13,17,24,11,6,20,10,21,26,9,16,25,23,27,28],' n': [14,4,20,7,8,0,26,3,19,6,18,2,13,24,5,11,10,21,12,1,17,22,9,27,28,15,25,16,23],'no': [19,22,18,26,15,20,17,13,5,12,11,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'ot': [26,7,8,4,0,18,14,17,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'hi': [18,13,11,2,6,4,15,5,26,19,14,0,17,21,12,3,1,25,10,20,23,8,16,9,27,28,7,22,24],'ng': [26,4,19,18,8,20,11,0,7,17,14,13,27,28,24,6,3,12,1,22,5,15,2,10,9,25,21,23,16],'g_': [19,0,8,14,18,3,5,22,1,15,4,12,2,11,6,7,20,24,10,13,21,17,26,9,16,25,23,27,28],' c': [14,0,7,20,11,17,8,4,19,26,10,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'co': [13,12,11,6,20,21,17,15,5,26,19,22,18,14,3,2,1,8,0,10,24,4,27,28,7,23,9,25,16],'ul': [19,26,3,0,4,11,24,12,8,14,18,20,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ld': [26,8,4,0,14,20,18,17,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'ha': [19,21,13,11,3,17,18,15,20,10,1,12,26,2,8,6,24,5,22,7,4,25,9,23,0,27,28,14,16],'av': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'ve': [26,17,18,11,3,13,8,0,12,24,2,19,4,21,15,23,6,5,22,14,1,7,20,16,10,25,27,28,9],' p': [0,17,14,4,18,11,20,7,8,26,15,19,27,28,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'pr': [4,14,0,8,26,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'re': [26,0,18,2,13,3,4,15,12,11,19,6,9,16,21,5,17,22,8,23,24,14,1,7,20,10,25,27,28],'ep': [4,14,18,0,7,8,19,17,26,11,20,15,27,28,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'pa': [19,17,8,2,18,11,15,13,26,12,3,6,24,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'ar': [4,19,18,13,26,3,11,24,14,0,15,17,8,2,12,20,6,10,21,1,27,28,5,7,22,25,16,9,23],'ed': [26,8,18,6,11,4,20,14,0,17,3,24,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],' m': [24,4,14,0,20,8,15,26,1,12,18,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'me': [26,13,18,3,12,11,19,17,0,4,2,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],' f': [14,0,4,8,17,20,11,26,5,19,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'fo': [17,20,11,13,5,26,12,19,22,18,15,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'or': [26,19,4,10,3,24,18,0,17,6,11,12,14,22,8,15,13,2,20,21,1,27,28,5,7,25,16,9,23],'r_': [19,0,15,11,2,12,18,8,7,5,1,22,24,14,20,3,4,10,17,13,26,6,21,9,16,25,23,27,28],'ll': [26,4,24,14,13,0,18,20,8,21,11,3,19,12,5,1,15,10,2,27,28,22,6,17,7,9,25,16,23],'l_': [19,0,2,18,12,8,15,7,11,22,1,3,17,4,14,13,5,6,9,10,21,20,26,24,16,25,23,27,28],'as': [26,4,19,18,8,15,2,20,14,7,0,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'s_': [0,19,8,22,14,18,1,12,17,2,15,5,7,20,13,11,3,6,24,4,9,21,26,10,16,25,23,27,28],'ap': [15,19,4,24,8,17,14,0,11,26,20,7,27,28,18,12,10,2,3,13,6,1,5,22,21,9,25,23,16],'pp': [14,4,17,0,11,26,8,20,15,7,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'pe': [17,14,13,26,2,3,0,4,18,11,19,12,21,8,15,23,6,5,22,24,1,7,20,16,10,25,27,28,9],'en': [19,26,2,6,3,0,18,14,8,7,4,17,21,13,20,24,5,11,10,12,1,22,9,27,28,15,25,16,23],'to': [26,17,12,14,15,11,3,13,5,20,19,22,18,21,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'o_': [0,18,12,17,7,19,1,3,8,10,2,4,11,14,22,6,24,15,5,13,20,21,9,26,16,25,23,27,28],'bo': [20,3,17,13,5,26,12,11,19,22,18,15,21,14,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'od': [24,26,0,4,20,6,8,14,18,17,3,11,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'dy': [26,13,4,18,14,0,19,8,15,27,28,11,12,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'mi': [11,18,19,13,4,2,6,26,14,0,17,21,12,3,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],' l': [8,4,14,0,20,26,11,24,3,18,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'li': [5,19,13,18,4,21,10,12,6,0,15,14,2,26,11,17,3,1,25,20,23,8,16,9,27,28,7,22,24],'if': [4,5,26,8,19,14,17,0,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'fe': [26,4,17,18,2,11,19,22,21,13,3,0,12,8,15,23,6,5,24,14,1,7,20,16,10,25,27,28,9],'it': [7,26,8,24,0,18,4,20,19,13,14,17,11,22,2,12,1,5,21,25,15,3,6,10,9,27,28,23,16],'is': [26,19,4,8,18,12,14,2,0,7,20,15,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'da': [24,8,15,19,20,17,12,22,13,11,18,26,2,3,6,1,21,10,5,7,4,25,9,23,0,27,28,14,16],'ay': [26,18,8,4,14,0,19,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],' s': [19,4,14,20,7,8,0,15,24,12,2,11,26,10,13,18,22,1,5,17,3,27,28,16,6,21,9,25,23],'st': [26,0,17,7,8,4,14,18,24,20,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'ta': [13,19,11,8,5,1,10,17,6,24,2,18,26,12,3,15,21,20,22,7,4,25,9,23,0,27,28,14,16],'rt': [26,0,7,8,4,20,18,12,15,14,17,24,19,11,22,2,1,13,5,21,25,3,6,10,9,27,28,23,16],'te': [17,26,3,0,18,13,11,5,4,15,12,2,23,19,21,8,6,22,24,14,1,7,20,16,10,25,27,28,9],' w': [0,8,7,4,14,17,26,13,18,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'wi': [19,11,13,5,26,18,14,2,4,0,17,21,12,3,6,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'ty': [26,15,11,4,18,14,0,19,8,27,28,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'yp': [4,7,17,14,0,11,26,8,20,15,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'ph': [24,8,17,14,0,26,4,19,20,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'ho': [18,22,26,20,11,19,17,15,12,2,3,8,13,5,21,14,6,1,0,10,24,4,27,28,7,23,9,25,16],'oi': [13,3,2,26,18,19,14,11,4,0,17,21,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'id': [13,26,4,8,18,20,0,14,17,3,24,11,6,19,12,21,22,27,28,7,2,1,5,15,9,16,10,25,23],'ev': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'er': [26,8,18,4,13,12,24,14,19,0,5,17,21,2,6,1,11,3,20,10,15,27,28,7,22,25,16,9,23],'wh': [14,4,8,0,26,19,17,20,24,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'ic': [0,26,7,20,4,18,19,24,14,8,11,17,10,2,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'ch': [0,26,14,17,8,4,13,19,20,24,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'so': [26,2,12,13,20,3,14,17,11,5,19,22,18,15,21,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'oo': [26,10,3,13,17,11,12,6,5,20,19,22,18,15,21,14,2,1,8,0,24,4,27,28,7,23,9,25,16],'on': [26,18,4,6,0,3,2,19,8,11,5,13,14,21,20,24,10,12,1,7,17,22,9,27,28,15,25,16,23],'mo': [17,18,19,13,21,10,3,5,26,20,12,11,22,15,14,2,6,1,8,0,24,4,27,28,7,23,9,25,16],'rp': [26,17,14,7,4,0,11,8,20,15,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'nt': [26,18,8,4,0,11,17,14,7,2,20,12,24,19,22,1,13,5,21,25,15,3,6,10,9,27,28,23,16],' d': [8,4,14,0,20,17,24,26,18,3,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'de': [18,17,26,3,15,21,13,19,11,2,6,0,5,4,12,1,8,23,22,24,14,7,20,16,10,25,27,28,9],'eb': [8,17,4,0,14,24,11,20,27,28,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'bi': [11,14,13,6,19,26,18,2,4,0,17,21,12,3,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'il': [11,24,8,4,20,26,3,18,0,14,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ti': [14,13,4,21,12,2,11,0,1,19,3,17,6,5,26,18,15,25,10,20,23,8,16,9,27,28,7,22,24],'ig': [7,13,0,6,4,20,17,26,8,14,11,27,28,18,24,19,3,12,1,22,5,15,2,10,9,25,21,23,16],'gr': [0,4,14,26,8,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'ra': [19,13,11,2,3,8,15,21,6,20,24,25,9,5,17,18,26,12,1,10,22,7,4,23,0,27,28,14,16],'ai': [13,11,19,18,3,26,14,2,4,0,17,21,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'es': [26,18,19,15,2,4,14,20,13,8,7,0,12,11,24,10,22,1,5,17,3,27,28,16,6,21,9,25,23],'a_': [18,17,22,2,11,1,19,12,15,6,3,5,21,13,0,10,8,7,24,14,26,4,20,9,16,25,23,27,28],' y': [14,4,26,18,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'ye': [0,19,18,26,17,13,3,11,2,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'la': [13,19,17,24,12,1,2,20,26,11,18,3,8,6,15,21,10,5,22,7,4,25,9,23,0,27,28,14,16],'af': [19,5,4,26,14,8,17,0,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'ft': [4,26,18,7,8,14,0,17,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'se': [26,3,11,18,2,4,13,0,17,15,21,19,5,12,8,23,6,22,24,14,1,7,20,16,10,25,27,28,9],'ri': [4,13,1,14,19,0,18,2,6,21,12,26,11,17,3,5,15,25,10,20,23,8,16,9,27,28,7,22,24],'ie': [13,21,18,5,26,19,17,3,0,11,2,12,4,8,15,23,6,22,24,14,1,7,20,16,10,25,27,28,9],'di': [0,18,13,2,19,5,3,1,21,25,11,4,15,17,12,26,14,6,10,20,23,8,16,9,27,28,7,22,24],'ca': [17,11,13,12,20,19,18,15,26,2,3,8,6,24,1,21,10,5,22,7,4,25,9,23,0,27,28,14,16],'ss': [26,8,4,14,20,0,19,18,7,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'ps': [24,26,8,19,4,14,18,7,20,0,15,2,12,11,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'ni': [2,13,14,19,18,5,6,16,12,4,21,26,11,0,17,3,15,1,25,10,20,23,8,9,27,28,7,22,24],'ia': [11,19,6,26,25,1,13,17,18,2,12,3,8,24,15,21,20,10,5,22,7,4,9,23,0,27,28,14,16],'i_': [22,7,0,3,5,18,12,1,17,6,10,13,11,4,2,19,14,8,15,26,20,21,9,24,16,25,23,27,28],' e': [23,13,21,12,5,0,14,18,15,3,8,16,11,26,17,2,19,4,6,22,24,1,7,20,10,25,27,28,9],' u': [13,18,15,10,17,19,11,2,12,4,0,6,3,8,1,26,27,28,5,14,23,21,24,25,7,9,20,22,16],'up': [15,26,14,19,4,17,0,11,8,20,7,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'p_': [0,12,20,22,19,7,24,2,15,18,4,10,13,8,14,5,1,17,3,26,11,6,21,9,16,25,23,27,28],'ds': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],' r': [4,20,0,14,8,13,26,18,19,24,3,12,2,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'na': [11,19,6,17,1,26,12,13,18,2,3,8,24,15,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'fa': [12,8,2,17,13,19,11,18,26,3,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'lu': [17,13,3,18,0,2,19,8,11,12,4,6,15,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'iv': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'ly': [26,18,4,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'ys': [8,26,4,19,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'si': [18,14,13,19,6,2,21,3,23,12,20,1,26,11,4,0,17,5,15,25,10,8,16,9,27,28,7,22,24],'fr': [14,8,4,20,26,0,18,19,24,3,13,12,2,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'ro': [13,20,12,21,11,5,22,8,2,3,14,0,17,26,19,18,15,6,1,10,24,4,27,28,7,23,9,25,16],'om': [4,26,18,12,8,15,24,0,14,1,20,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'m_': [7,19,2,5,8,0,14,18,22,1,11,3,17,20,4,24,15,12,26,13,6,21,9,10,16,25,23,27,28],'du': [17,0,2,11,18,13,19,12,4,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'io': [13,17,11,19,20,3,5,26,12,22,18,15,21,14,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'do': [26,13,2,4,6,15,12,20,22,18,17,5,11,19,21,14,3,1,8,0,10,24,27,28,7,23,9,25,16],'em': [4,1,15,26,14,0,8,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'mb': [4,17,0,14,24,11,20,27,28,8,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'vi': [13,3,18,19,21,2,4,0,11,26,14,17,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'nv': [4,14,0,8,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'rs': [26,4,19,8,7,14,20,0,18,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'sa': [5,21,15,22,11,13,24,19,17,18,26,2,12,3,8,6,1,20,10,7,4,25,9,23,0,27,28,14,16],'ny': [26,14,4,18,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'yo': [20,13,17,5,26,12,11,19,22,18,15,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'ab': [11,14,8,4,0,24,20,17,27,28,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'ut': [26,4,8,17,2,7,14,0,18,20,24,19,11,22,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'wa': [18,8,24,19,17,13,11,26,2,12,3,6,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'ol': [14,3,11,4,21,18,20,8,26,0,24,19,12,5,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ee': [3,11,26,13,10,15,19,12,2,17,18,0,4,21,8,23,6,5,22,24,14,1,7,20,16,25,27,28,9],'sh': [0,4,14,12,8,26,19,17,20,24,13,18,11,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'ow': [26,4,18,11,13,8,0,7,14,17,27,28,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'we': [26,17,11,13,21,4,3,1,18,0,2,19,12,8,15,23,6,5,22,24,14,7,20,16,10,25,27,28,9],'ac': [10,19,7,4,2,20,8,14,0,26,11,17,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'aw': [0,26,13,8,4,7,14,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'wn': [26,4,3,19,6,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'sy': [2,12,26,4,18,14,0,19,8,15,27,28,11,13,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'yc': [7,4,14,0,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'lo': [13,6,22,14,15,18,24,21,2,20,17,5,26,12,11,19,3,1,8,0,10,4,27,28,7,23,9,25,16],'og': [8,13,24,26,11,4,7,0,17,14,20,27,28,18,19,6,3,12,1,22,5,15,2,10,9,25,21,23,16],'gi': [2,13,21,18,17,12,26,19,14,11,4,0,3,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'su': [15,17,11,5,1,2,0,8,18,13,19,12,4,6,3,26,27,28,10,14,23,21,24,25,7,9,20,22,16],'po': [17,18,22,8,13,19,15,14,11,5,26,20,12,21,3,2,6,1,0,10,24,4,27,28,7,23,9,25,16],'u_': [0,2,7,18,19,8,21,17,13,10,12,3,5,14,22,1,15,26,4,11,6,20,9,24,16,25,23,27,28],'dn': [4,19,26,3,6,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],' k': [8,13,4,26,18,0,27,28,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'kn': [14,4,26,3,19,6,18,0,8,2,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'w_': [0,19,22,8,1,18,7,12,5,17,20,2,13,4,14,15,3,26,11,6,21,9,10,24,16,25,23,27,28],'ug': [7,6,4,26,0,17,8,14,20,13,11,27,28,18,24,19,3,12,1,22,5,15,2,10,9,25,21,23,16],'gh': [26,19,8,11,4,0,14,17,20,24,13,18,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'ce': [26,17,18,13,8,15,3,11,0,2,19,12,4,21,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'nl': [24,4,26,8,0,11,14,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ew': [26,18,0,8,4,7,14,13,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'ts': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'mp': [14,19,11,17,0,26,8,4,20,15,7,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'pl': [0,4,8,14,24,26,11,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'le': [26,0,13,3,18,21,19,5,17,12,6,7,1,2,23,11,4,8,15,22,24,14,20,16,10,25,27,28,9],'ex': [15,19,0,2,4,8,26,27,28,20,14,7,24,5,12,18,23,11,1,21,17,22,13,3,6,9,10,16,25],'xi': [12,19,26,13,18,14,2,11,4,0,17,21,3,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'sp': [8,11,4,14,17,7,0,26,20,15,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'pi': [19,17,13,18,21,3,14,11,26,2,4,0,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'ir': [0,26,18,4,2,8,11,14,19,24,3,13,12,20,17,6,10,21,15,1,27,28,5,7,22,25,16,9,23],'nn': [14,4,24,8,26,3,19,6,18,0,2,13,20,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'hu': [6,17,18,13,19,11,2,12,4,0,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'hy': [18,26,4,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'hr': [14,4,8,26,0,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'im': [4,15,8,26,0,12,20,14,1,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'ek': [26,8,4,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'k_': [14,0,8,19,24,5,13,4,7,18,1,3,2,22,15,12,17,26,11,6,20,21,9,10,16,25,23,27,28],'dr': [14,4,0,26,8,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'et': [26,19,8,4,24,22,18,17,2,7,14,0,20,11,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'gu': [0,8,13,17,18,19,11,2,12,4,6,15,3,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'ua': [11,6,1,17,13,19,18,26,2,12,3,8,24,15,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'xp': [4,11,17,14,0,26,8,20,15,7,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'ma': [26,13,19,10,24,17,6,23,11,3,8,2,18,12,15,1,21,20,5,22,7,4,25,9,0,27,28,14,16],'ok': [26,4,0,8,18,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'ba': [2,19,3,18,6,13,17,11,26,12,8,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'ck': [26,18,13,8,11,4,0,27,28,14,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'ei': [13,17,21,6,26,18,19,14,2,11,4,0,12,3,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],' g': [17,14,0,4,8,20,15,26,7,13,11,27,28,18,24,19,6,3,12,1,22,5,2,10,9,25,21,23,16],'ef': [5,20,19,26,14,4,8,11,17,0,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'fu': [11,13,17,19,18,12,2,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'ns': [26,15,20,8,19,22,4,14,18,7,0,2,12,11,24,10,1,5,13,17,3,27,28,16,6,21,9,25,23],'ls': [14,26,19,4,8,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'ru': [11,6,2,18,15,13,17,19,12,4,0,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'us': [26,4,19,20,7,8,14,18,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'tr': [4,0,20,14,8,24,26,18,19,3,13,12,2,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'el': [8,15,24,5,26,11,14,19,18,21,4,0,20,3,12,1,10,2,27,28,22,6,17,7,13,9,25,16,23],'ik': [4,26,8,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'ke': [26,4,24,3,17,13,18,0,11,2,19,12,21,8,15,23,6,5,22,14,1,7,20,16,10,25,27,28,9],'ec': [14,19,0,8,4,7,17,26,11,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'ct': [8,14,26,0,18,4,11,7,17,20,24,19,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'ry': [26,1,8,19,4,18,14,0,15,27,28,11,12,13,2,17,3,22,7,20,5,6,25,10,21,9,24,23,16],'tc': [7,4,14,0,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'by': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'ad': [26,0,3,12,8,4,20,14,7,2,18,17,24,11,6,19,21,22,27,28,13,1,5,15,9,16,10,25,23],'ov': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'un': [3,8,19,6,0,2,5,22,13,26,10,14,4,18,20,24,11,21,12,1,7,17,9,27,28,15,25,16,23],'nf': [14,11,20,26,8,17,4,0,5,19,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'rm': [26,0,4,14,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'sn': [19,0,26,3,6,4,18,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'rl': [24,3,18,4,26,8,0,11,14,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'mu': [12,2,18,13,11,17,19,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'uc': [7,19,0,8,10,2,14,4,26,11,17,20,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'um': [18,26,4,1,0,14,8,15,20,12,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'fi': [2,17,21,13,14,6,26,18,19,11,4,0,12,3,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'nc': [4,17,11,8,19,24,14,0,7,26,10,20,2,18,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'oc': [8,19,10,2,4,26,14,7,0,11,17,20,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'yt': [7,26,4,8,14,0,17,18,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'bl': [4,14,24,8,26,0,11,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'cl': [20,4,8,14,26,0,11,24,3,18,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'os': [8,14,4,19,15,18,20,26,7,0,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],' v': [4,8,14,0,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'lp': [26,18,5,11,4,17,14,0,8,20,15,7,19,27,28,12,24,10,2,3,13,6,1,22,21,9,25,23,16],'pf': [20,26,14,8,17,4,0,5,19,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'go': [26,8,21,19,14,0,13,17,5,20,12,11,22,18,15,3,2,6,1,10,24,4,27,28,7,23,9,25,16],'gs': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'oa': [11,2,13,19,17,18,26,12,3,8,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'am': [26,4,8,12,13,15,0,14,1,20,18,24,19,2,27,28,3,11,17,7,5,22,6,10,21,9,23,25,16],'rv': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'cr': [8,4,0,20,26,14,18,19,24,3,13,12,2,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'ib': [4,11,8,0,14,24,20,17,27,28,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'yi': [13,26,18,19,14,2,11,4,0,17,21,12,3,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'rg': [0,4,26,7,17,8,14,20,13,11,27,28,18,24,19,6,3,12,1,22,5,15,2,10,9,25,21,23,16],'cu': [11,17,12,19,18,13,2,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'ej': [4,14,20,0,27,28,8,26,17,15,18,10,3,13,19,2,12,7,9,11,5,1,21,24,6,22,25,23,16],'je': [2,26,17,13,3,18,0,11,19,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'vo': [11,8,19,20,2,13,17,5,26,12,22,18,15,21,14,3,6,1,0,10,24,4,27,28,7,23,9,25,16],'c_': [8,11,0,14,7,15,10,12,19,18,2,22,1,5,17,3,26,4,13,6,20,21,9,24,16,25,23,27,28],'wo': [17,20,26,13,5,12,11,19,22,18,15,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'mm': [4,0,20,14,26,8,15,1,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'ks': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'ff': [4,8,26,14,17,0,5,19,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'br': [4,8,0,26,14,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'ki': [3,13,11,26,18,19,14,2,4,0,17,21,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'va': [19,18,11,8,13,17,26,2,12,3,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'tt': [4,0,11,8,7,26,14,17,18,20,24,19,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'tl': [24,4,26,8,0,11,14,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'gg': [11,4,26,0,7,17,8,14,20,13,27,28,18,24,19,6,3,12,1,22,5,15,2,10,9,25,21,23,16],'lf': [26,2,14,8,17,4,0,5,19,20,11,18,24,27,28,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'rd': [26,8,18,4,0,14,20,17,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'sl': [8,20,4,26,0,11,14,24,3,18,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ip': [26,11,4,17,14,0,8,20,15,7,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'lw': [0,8,4,7,14,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'gn': [8,14,18,4,26,3,19,6,0,2,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'ak': [4,8,26,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'ju': [18,11,13,17,19,2,12,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'pt': [14,0,4,20,26,8,7,17,18,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'op': [11,15,8,4,26,7,20,19,17,14,0,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'hs': [26,18,19,4,8,14,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'ci': [0,13,17,18,3,11,15,6,4,26,19,14,2,21,12,5,1,25,10,20,23,8,16,9,27,28,7,22,24],'tu': [17,0,13,3,19,18,11,2,12,4,6,15,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'rk': [26,8,4,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'ja': [13,19,17,11,18,26,2,12,3,8,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'nu': [12,17,8,4,14,0,18,13,19,11,2,6,15,3,1,26,27,28,10,5,23,21,24,25,7,9,20,22,16],'fl': [0,20,4,26,8,11,14,24,3,18,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'rr': [4,24,14,8,0,26,18,19,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'rc': [20,4,8,7,14,0,19,26,11,17,10,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'ms': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'pu': [11,19,18,17,13,2,12,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'yn': [0,26,3,19,6,4,18,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'cs': [26,19,4,8,14,18,7,20,0,15,2,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'gt': [4,7,26,8,14,0,17,18,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'ln': [4,26,3,19,6,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'nh': [18,0,4,26,8,14,19,17,20,24,13,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'ub': [19,18,4,0,14,24,11,20,17,27,28,8,26,1,9,2,12,13,3,7,21,5,22,15,6,10,25,23,16],'bs': [19,2,26,4,8,14,18,7,20,0,15,12,11,24,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'sc': [17,0,8,14,7,20,4,19,26,11,10,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'hc': [0,14,7,4,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'lv': [4,8,0,14,26,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'gp': [26,4,17,14,0,11,8,20,15,7,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'tm': [4,0,26,14,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'au': [18,6,13,12,17,19,11,2,4,0,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'tn': [4,26,3,19,6,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'gl': [4,24,8,26,0,11,14,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'nr': [8,4,26,14,0,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'ud': [4,8,26,0,14,20,18,17,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'cy': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'uk': [26,4,8,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'lk': [8,4,26,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'eo': [15,18,13,17,5,26,20,12,11,19,22,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'cc': [14,4,0,8,7,19,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'dm': [8,4,0,26,14,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'gy': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'dc': [4,14,7,0,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'tp': [7,4,17,14,0,11,26,8,20,15,19,27,28,18,12,24,10,2,3,13,6,1,5,22,21,9,25,23,16],'dd': [8,26,4,0,14,20,18,17,3,24,11,6,19,12,21,22,27,28,7,2,13,1,5,15,9,16,10,25,23],'ws': [26,24,19,4,8,14,18,7,20,0,15,2,12,11,10,22,1,5,13,17,3,27,28,16,6,21,9,25,23],'dg': [4,10,26,7,0,17,8,14,20,13,11,27,28,18,24,19,6,3,12,1,22,5,15,2,9,25,21,23,16],'gk': [8,26,4,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],' _': [18,19,0,14,8,2,22,1,15,5,12,7,17,3,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'bu': [19,8,2,18,13,17,11,12,4,0,6,15,3,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'ui': [3,19,11,17,13,26,18,14,2,4,0,21,12,6,5,15,1,25,10,20,23,8,16,9,27,28,7,22,24],'ht': [26,4,8,7,14,0,17,18,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'xt': [17,26,7,4,8,14,0,18,20,24,19,11,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'oy': [2,26,18,4,14,0,19,8,15,27,28,11,12,13,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'aj': [4,14,20,0,27,28,8,26,17,15,18,10,3,13,19,2,12,7,9,11,5,1,21,24,6,22,25,23,16],'ue': [18,26,17,13,3,0,11,2,19,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'kl': [4,26,8,0,11,14,24,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'hm': [0,4,26,14,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'ym': [15,4,0,26,14,8,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'fc': [0,14,7,4,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'dh': [4,26,0,8,14,19,17,20,24,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'iu': [12,18,13,17,19,11,2,4,0,6,15,3,8,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'eq': [20,27,28,26,8,0,18,19,17,11,14,1,4,13,2,16,21,5,7,12,15,22,3,23,6,25,9,10,24],'qu': [4,8,0,18,13,17,19,11,2,12,6,15,3,1,26,27,28,10,5,14,23,21,24,25,7,9,20,22,16],'xe': [17,26,13,3,18,0,11,2,19,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'hn': [8,26,3,19,6,4,18,0,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'iq': [20,27,28,26,8,0,18,19,17,11,14,1,4,13,2,16,21,5,7,12,15,22,3,23,6,25,9,10,24],'az': [26,24,4,0,27,28,8,14,25,20,7,11,18,19,1,12,13,10,3,22,17,6,2,21,5,15,16,23,9],'zy': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'bt': [0,11,26,7,4,8,14,17,18,20,24,19,22,2,12,1,13,5,21,25,15,3,6,10,9,27,28,23,16],'tw': [14,0,8,4,7,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'uo': [20,13,17,5,26,12,11,19,22,18,15,21,14,3,2,6,1,8,0,10,24,4,27,28,7,23,9,25,16],'yl': [4,26,8,0,11,14,24,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'sk': [8,26,4,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'xc': [7,14,4,0,19,8,26,11,17,10,20,2,18,24,27,28,3,16,12,1,15,13,25,5,6,22,21,9,23],'wl': [4,26,8,0,11,14,24,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'ka': [24,13,19,17,11,18,26,2,12,3,8,6,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'sm': [8,14,4,0,26,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'yb': [14,4,0,24,11,20,17,27,28,8,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'mn': [26,3,19,6,4,18,0,8,2,14,13,20,24,5,11,10,21,12,1,7,17,22,9,27,28,15,25,16,23],'nk': [26,4,8,18,0,27,28,13,14,11,24,7,20,17,19,12,22,1,6,10,5,15,3,2,21,9,23,25,16],'sw': [4,0,8,7,14,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'z_': [8,19,0,14,18,2,22,1,15,5,12,7,17,3,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'xa': [2,13,19,17,11,18,26,12,3,8,6,24,15,1,21,20,10,5,22,7,4,25,9,23,0,27,28,14,16],'rb': [0,4,14,24,11,20,17,27,28,8,18,26,1,9,2,19,12,13,3,7,21,5,22,15,6,10,25,23,16],'rf': [20,26,14,8,17,4,0,5,19,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'ax': [8,26,15,19,27,28,0,4,2,20,14,7,24,5,12,18,23,11,1,21,17,22,13,3,6,9,10,16,25],'hl': [4,8,26,0,11,14,24,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'lm': [14,4,0,26,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'ob': [19,18,4,0,14,24,11,20,17,27,28,8,26,1,9,2,12,13,3,7,21,5,22,15,6,10,25,23,16],'nm': [4,0,26,14,8,15,1,20,12,18,24,19,2,27,28,13,3,11,17,7,5,22,6,10,21,9,23,25,16],'uf': [5,26,14,8,17,4,0,19,20,11,18,24,27,28,2,12,6,3,1,15,7,22,13,9,10,23,21,25,16],'oe': [18,26,17,13,3,0,11,2,19,12,4,21,8,15,23,6,5,22,24,14,1,7,20,16,10,25,27,28,9],'nw': [4,0,8,7,14,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'ix': [26,15,19,8,27,28,0,4,2,20,14,7,24,5,12,18,23,11,1,21,17,22,13,3,6,9,10,16,25],'x_': [3,19,0,14,18,8,2,22,1,15,5,12,7,17,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'dl': [24,4,26,8,0,11,14,3,18,20,19,12,5,21,1,15,10,2,27,28,22,6,17,7,13,9,25,16,23],'rw': [0,8,4,7,14,26,13,18,17,27,28,11,19,24,3,22,1,10,2,5,12,20,15,6,21,9,25,23,16],'eh': [4,26,0,8,14,19,17,20,24,13,18,11,12,22,1,3,2,5,15,27,28,7,10,21,6,16,25,9,23],'py': [26,4,18,14,0,19,8,15,27,28,11,12,13,2,17,3,1,22,7,20,5,6,25,10,21,9,24,23,16],'wr': [14,4,26,8,0,18,19,24,3,13,12,2,20,17,6,11,10,21,15,1,27,28,5,7,22,25,16,9,23],'tv': [26,4,8,0,14,24,27,28,18,20,3,17,11,19,2,13,15,6,7,12,5,1,21,10,22,23,9,25,16],'v_': [8,19,0,14,18,2,22,1,15,5,12,7,17,3,26,4,11,13,6,20,21,9,10,24,16,25,23,27,28],'iz': [25,4,0,27,28,8,26,14,20,7,24,11,18,19,1,12,13,10,3,22,17,6,2,21,5,15,16,23,9],'zz': [24,4,0,27,28,8,26,14,25,20,7,11,18,19,1,12,13,10,3,22,17,6,2,21,5,15,16,23,9]};
		
		this.arrangeBtns = function() {
			if(this.outpt.text.length == 0) {
				last_bit = 'new';
			}else{
				last_bit = this.outpt.text.slice(-1).replace(" ","_");
			}
			if(this.outpt.text.length > 1) {
				checkString = this.outpt.text.slice(-2,-1) + this.outpt.text.slice(-1).replace(" ","_")
				if(checkString in this.all_ltrs) {
					last_bit = checkString;
				}
			}
			this.arrange_btns = [];
			for(i=0; i<6; i++) {
				this.arrange_btns.push(this.all_ltrs[last_bit].slice(i*this.btn_row_num,(i*this.btn_row_num)+this.btn_row_num));
			}
			this.growButtons();
		}	
		
		this.setup_keys();
		this.isSetup = false;
		this.canvas_width = 1024;
		this.canvas_height = 768;
		this.line = new createjs.Shape();
		this.line.graphics.setStrokeStyle(1);
		this.faceOval = [10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109];
		this.outerLips = [61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185];//,185,40//,39,37,0,267,269,270,409,291];
		this.innerLips = [95,88,178,87,14,317,402,318,324,308,415,310,311,312,13,82,81,80,191,78];//,191,80,81,82,13,312,311,310,415,308];
		this.i_score_count = 0;
		this.i_score_arr = [];//not currently used
		this.i_score_arr_length = 2001;//not currently used
		this.i_score_length = 1001;//not currently used
		this.i_score_thresh = 0.1;
		this.i_score_duratn = 20;
		this.clicked = false;
		this.ms_count = [0,100];//first number is the count, the second is the duration that the 'mouse' stays on the button - not milliseconds
		this.ms_pos_ind = 0;
		this.ms_pos_ind_seld = 0;
		this.clickEvent = new Event('click');
		
		this.setup = function() {
			console.log('setup');
			this.isSetup = true;
			this.video_frame.addChild(this.line);
			this.ms.x = this.start_x + 120;
			this.ms.y = 300;
		}
		this.posMs = function() {
			for(i=0; i<this.btn_vals.length; i++) {
				this['ltr_'+i].hl.alpha = 1;
			}
			if(this.ms_pos_ind < this.btn_row_num) {
				this.ms.x = this.start_x + 120 + (this.ms_pos_ind * (this.btns_width/this.btn_row_num));
				this.ms.y = 300;
				this['ltr_'+this.arrange_btns[0][this.ms_pos_ind]].hl.alpha=0.01;
			}else{
				this.ms.x = 990;
				this.ms.y = 370;
			}
		}
		this.drawLandMarker = function(reslt,shp) {
			this.line.graphics.beginStroke("red");
			this.line.graphics.moveTo(reslt.faceLandmarks[0][shp[shp.length-1]].x*(this.canvas_width/2),reslt.faceLandmarks[0][shp[shp.length-1]].y*(this.canvas_height/2));
			for(i=0; i<shp.length; i++) {
				this.line.graphics.lineTo(reslt.faceLandmarks[0][shp[i]].x*(this.canvas_width/2),reslt.faceLandmarks[0][shp[i]].y*(this.canvas_height/2));
			}
			this.line.graphics.endStroke();
		}
		this.useVision = function(reslt,fm_Map) {
			if(reslt.faceLandmarks.length > 0) {
				this.no_face.visible = false;
				i_score = reslt.faceBlendshapes[0]['categories'][25]['score'];
				this.dot.scale = 0.5 + (9.5 * i_score);//makes sure the dot is visible when mouth is closed. Sets upper limit of scale at 10
				if(i_score > this.i_score_thresh) {//want to make this adustable or settable
					if(this.i_score_count == 0) {
						this.ms_pos_ind_seld = this.ms_pos_ind;
					}
					if(this.clicked == false) {//stops the click from occurring until the mouth has closed again - is that a good thing?
						this.i_score_count ++;//can stop random fluctuations from having effect, but with the close-swtich, doesn't need to be that long?
						this.dot.cvr.alpha = 1;
					}else{
						this.dot.cvr.alpha = 0.5;
					}
				}else{
					this.i_score_count = 0;
					this.dot.cvr.alpha = 0;
					this.clicked = false;
				}
				this.i_score_arr.push(i_score);
				if(this.i_score_count > this.i_score_duratn) {
					if(this.ms_pos_ind < this.btn_row_num) {
						this['ltr_'+this.arrange_btns[0][this.ms_pos_ind_seld]].hl.dispatchEvent(this.clickEvent);
						this.ms_pos_ind = 0;//sets it back to the first letter of the row
					}else{
						this.dn.dispatchEvent(this.clickEvent);
						this.ms_pos_ind = this.btn_row_num;//keeps it on the next button
					}
					this.clicked = true;//part of preventing a new click until the mouth has closed
					this.i_score_count = 0;
					this.ms_count[0] = -1*this.ms_count[1];//keeps it waiting till buttons have settled
					this.posMs();
				}
				this.line.graphics.clear();
				this.drawLandMarker(reslt,this.faceOval);
				this.drawLandMarker(reslt,this.innerLips);
				this.drawLandMarker(reslt,this.outerLips);
				if(this.ms_count[0] == this.ms_count[1]-1) {
					this.ms_pos_ind = (this.ms_pos_ind + 1)%(this.btn_row_num+1);
					this.posMs();
				}
				this.ms_count[0] = (this.ms_count[0]+1)%this.ms_count[1];
			}else{
				this.line.graphics.clear();
				this.no_face.visible = true;
			}
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTBsQgFgBgCgDQgDgDgBgEIgBgLIABgLQABgEADgDQACgDAFgBIAKgBIAKABQAEABADADQACADABAEIABALIgBALQgBAEgCADQgDADgEABIgKABIgKgBgAgSAvIgFgBIgDgCIgBgCIgCglIABgHQAAgEACgBQABgBAAAAQABgBAAAAQAAAAABAAQABgBAAAAIAGgBIACAAQAJAAAFgCQAGgDAEgEQADgFACgGQACgGAAgGQAAgIgCgGQgCgGgEgFQgFgEgFgDQgHgCgJAAQgHAAgHABIgKAEIgHADIgFACIgCgBIgBgDIgBgFIgBgJIABgIIACgEIAGgDIAKgEIAOgDIAPgBQASAAANAFQANAFAIAIQAJAJAEALQAEALAAAMQAAANgEALQgEAKgGAHQgHAHgJAEQgKAFgLABIgBAfQAAACgFACQgDABgIAAIgJAAg");
	this.shape.setTransform(1361.925,409.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAmBNIgHgBIgDgCIgBgDIAAhPQAAgKgBgGQgCgFgCgEQgDgFgFgCQgEgCgGAAQgHAAgHAFQgIAGgIAKIAABcIgBADIgDACIgGABIgKAAIgJAAIgGgBIgEgCIgBgDIAAiKIABgDIADgCIAFgBIAIgBIAJABIAFABIACACIABADIAAAQQAMgNAMgGQALgGAMAAQAPAAAKAEQAJAFAGAIQAGAIADALQADALAAAPIAABVIgBADIgDACIgGABIgKAAIgJAAg");
	this.shape_1.setTransform(1345.725,412.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgaBKQgNgFgKgKQgJgJgFgOQgEgPAAgTQAAgSAEgPQAGgPAJgKQAIgLAOgFQANgFAPgBQASAAANAGQAMAEAIAKQAIAJADANQAFAMAAAPIAAAGQAAAGgEADQgDAEgGAAIhTAAQgBAJADAIQACAHAEAEQAFAFAHAEQAHACAJAAQALAAAIgBIAOgEIAJgDIAGgCIACABIACACIABAEIAAAHIAAAFIAAAFIgBACIgCACIgGAEIgLADIgRADIgTABQgSABgOgFgAgKgvQgGADgDAEQgEAGgCAGQgCAGAAAHIA6AAQAAgQgHgJQgIgKgPAAQgGAAgFADg");
	this.shape_2.setTransform(1329,412.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgxBpIgKAAIgGgBIgDgDIgBgDIAAjBIABgDIADgCIAFgBIAIAAIAIAAIAFABIACACIABADIAAAQIAMgLQAGgFAGgDQAGgDAGgBQAGgCAIAAQAPAAALAGQAKAGAHAKQAHALADAOQADAOAAAPQAAATgEAOQgEAPgHALQgIAKgLAFQgMAGgPAAIgKgBQgFgBgEgDIgKgFIgKgJIAABBIgBADIgDADIgGABIgJAAgAgFhFQgEABgDADQgFACgEAFIgJAKIAAAuQAJAKAHAFQAIAFAHAAQAHABAGgEQAFgEAEgGQADgGACgIQABgHAAgJIgBgRQgBgIgDgGQgEgHgFgDQgFgFgIAAIgHACg");
	this.shape_3.setTransform(1312.825,415.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AghBKQgOgFgJgLQgJgKgFgOQgDgOAAgSQgBgRAFgPQAFgPAJgLQAKgKAOgGQAPgFARgBQATAAAOAGQAOAEAJAKQAJALAEAOQAEAOAAATQABARgFAOQgFAPgKAKQgJALgOAGQgOAGgTgBQgSAAgOgEgAgOgrQgHADgEAGQgEAGgCAJQgDAJAAAKQAAAKADAJQABAJAEAGQAEAGAGAEQAHADAJAAQAJAAAGgDQAHgDAEgGQAEgHACgIQACgIAAgMQAAgJgBgIQgCgJgEgHQgEgGgGgEQgHgEgKAAQgIAAgGAEg");
	this.shape_4.setTransform(1295.25,412.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAmBtIgHgBIgDgCIgBgDIAAhQQAAgKgBgGQgCgFgCgDQgDgFgFgCQgEgCgGAAQgHAAgHAFQgIAFgIAKIAABdIgBADIgDACIgGABIgKAAIgJAAIgGgBIgEgCIgBgDIAAjNIABgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAGgCIAJAAIAKAAIAGACIADACIABACIAABOQAKgKALgFQAJgFALAAQAPAAAKAEQAJAFAGAIQAGAIADALQADAKAAAPIAABWIgBADIgDACIgGABIgKAAIgJAAg");
	this.shape_5.setTransform(1270.875,409.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAABcQgJgDgFgGQgGgGgDgJQgCgKAAgMIAAhHIgRAAQgDAAgCgDQgBgEAAgJIAAgHIABgFIACgDIADgBIARAAIAAgfIABgDIADgCIAGgBIAJAAIAJAAIAGABIADACIABADIAAAfIAeAAIADABIACADIABAFIAAAHQAAAJgBAEQgCADgDAAIgeAAIAABBQAAALADAGQAEAFAJAAIAGAAIAEgBIAEgCIACAAIACAAIABADIABAEIAAAHIAAALIgDAFIgEADIgGACIgIABIgJAAQgMAAgHgDg");
	this.shape_6.setTransform(1256.425,411.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgnBJQgKgFgGgIQgGgIgCgLQgCgLgBgQIAAhUIABgDIAEgCIAFgBIAKAAIAJAAIAGABIADACIACADIAABOQAAALABAGQABAFADAFQADAEAFACQAEACAGAAQAGAAAIgFQAHgGAKgKIAAhcIABgDIACgCIAHgBIAJAAIAKAAIAGABIADACIAAADIAACKIAAADIgDACIgFABIgJABIgIgBIgFgBIgDgCIAAgDIAAgQQgMANgLAGQgLAGgNAAQgPAAgKgEg");
	this.shape_7.setTransform(1242.55,412.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AghBKQgOgFgJgLQgJgKgFgOQgDgOAAgSQgBgRAFgPQAFgPAKgLQAJgKAOgGQAPgFARgBQAUAAANAGQAOAEAJAKQAJALAFAOQADAOAAATQABARgFAOQgEAPgLAKQgJALgOAGQgOAGgTgBQgSAAgOgEgAgOgrQgHADgEAGQgEAGgCAJQgCAJgBAKQAAAKACAJQACAJAEAGQAEAGAGAEQAHADAJAAQAJAAAGgDQAHgDAEgGQAEgHACgIQACgIAAgMQAAgJgBgIQgCgJgEgHQgEgGgGgEQgHgEgKAAQgIAAgGAEg");
	this.shape_8.setTransform(1225.4,412.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABRBNIgFgBIgEgCIgBgDIAAhSIAAgNQgCgFgDgEQgDgFgDgCQgFgCgFAAQgIAAgHAFQgHAGgJAKIAABcIgBADIgCACIgHABIgJAAIgJAAIgGgBIgDgCIAAgDIAAhSQgBgHgBgGQgBgFgDgEQgCgFgEgCQgFgCgGAAQgHAAgHAFQgHAGgJAKIAABcIgBADIgCACIgGABIgKAAIgJAAIgHgBIgDgCIgBgDIAAiKIABgDIADgCIAFgBIAIgBIAJABIAEABIADACIABADIAAAQQAMgNALgGQALgGANAAQAJAAAGACQAHABAGAEQAEADAEAFQAEAEADAGQAFgHAHgEQAGgFAFgDIANgFQAFgBAGAAQAOAAAJAEQAKAFAGAIQAGAIACALQADALAAAMIAABYIgBADIgDACIgGABIgKAAIgKAAg");
	this.shape_9.setTransform(1203.8,412.725);

	this.no_face = new lib.no_face_message();
	this.no_face.name = "no_face";
	this.no_face.setTransform(1280.15,192,2.2279,2.2279);

	this.ms = new lib.mouse_mc();
	this.ms.name = "ms";
	this.ms.setTransform(666.65,454.65,1,1,0,0,0,0,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ms},{t:this.no_face},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_6
	this.dot = new lib.red_dot();
	this.dot.name = "dot";
	this.dot.setTransform(1280,576);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_7
	this.ltr_28 = new lib.buttons();
	this.ltr_28.name = "ltr_28";
	this.ltr_28.setTransform(970.05,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_27 = new lib.buttons();
	this.ltr_27.name = "ltr_27";
	this.ltr_27.setTransform(936.2,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_26 = new lib.buttons();
	this.ltr_26.name = "ltr_26";
	this.ltr_26.setTransform(902.4,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_24 = new lib.buttons();
	this.ltr_24.name = "ltr_24";
	this.ltr_24.setTransform(834.7,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_23 = new lib.buttons();
	this.ltr_23.name = "ltr_23";
	this.ltr_23.setTransform(800.85,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_22 = new lib.buttons();
	this.ltr_22.name = "ltr_22";
	this.ltr_22.setTransform(767,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_25 = new lib.buttons();
	this.ltr_25.name = "ltr_25";
	this.ltr_25.setTransform(868.5,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_20 = new lib.buttons();
	this.ltr_20.name = "ltr_20";
	this.ltr_20.setTransform(699.3,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_19 = new lib.buttons();
	this.ltr_19.name = "ltr_19";
	this.ltr_19.setTransform(665.45,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_18 = new lib.buttons();
	this.ltr_18.name = "ltr_18";
	this.ltr_18.setTransform(631.6,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_21 = new lib.buttons();
	this.ltr_21.name = "ltr_21";
	this.ltr_21.setTransform(733.15,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_16 = new lib.buttons();
	this.ltr_16.name = "ltr_16";
	this.ltr_16.setTransform(563.85,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_17 = new lib.buttons();
	this.ltr_17.name = "ltr_17";
	this.ltr_17.setTransform(597.7,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_14 = new lib.buttons();
	this.ltr_14.name = "ltr_14";
	this.ltr_14.setTransform(496.2,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_13 = new lib.buttons();
	this.ltr_13.name = "ltr_13";
	this.ltr_13.setTransform(462.35,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_12 = new lib.buttons();
	this.ltr_12.name = "ltr_12";
	this.ltr_12.setTransform(428.5,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_15 = new lib.buttons();
	this.ltr_15.name = "ltr_15";
	this.ltr_15.setTransform(530,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_10 = new lib.buttons();
	this.ltr_10.name = "ltr_10";
	this.ltr_10.setTransform(360.8,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_9 = new lib.buttons();
	this.ltr_9.name = "ltr_9";
	this.ltr_9.setTransform(326.95,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_8 = new lib.buttons();
	this.ltr_8.name = "ltr_8";
	this.ltr_8.setTransform(293.1,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_11 = new lib.buttons();
	this.ltr_11.name = "ltr_11";
	this.ltr_11.setTransform(394.65,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_6 = new lib.buttons();
	this.ltr_6.name = "ltr_6";
	this.ltr_6.setTransform(225.35,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_5 = new lib.buttons();
	this.ltr_5.name = "ltr_5";
	this.ltr_5.setTransform(191.5,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_4 = new lib.buttons();
	this.ltr_4.name = "ltr_4";
	this.ltr_4.setTransform(157.7,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_7 = new lib.buttons();
	this.ltr_7.name = "ltr_7";
	this.ltr_7.setTransform(259.2,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_2 = new lib.buttons();
	this.ltr_2.name = "ltr_2";
	this.ltr_2.setTransform(89.95,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_1 = new lib.buttons();
	this.ltr_1.name = "ltr_1";
	this.ltr_1.setTransform(56.1,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.ltr_0 = new lib.buttons();
	this.ltr_0.name = "ltr_0";
	this.ltr_0.setTransform(22.3,705.15,0.6149,0.6149,0,0,0,0.1,-1.7);

	this.ltr_3 = new lib.buttons();
	this.ltr_3.name = "ltr_3";
	this.ltr_3.setTransform(123.8,705.15,0.6149,0.6149,0,0,0,0,-1.7);

	this.outpt = new cjs.Text("", "bold 32px 'Calibri'");
	this.outpt.name = "outpt";
	this.outpt.lineHeight = 39;
	this.outpt.lineWidth = 976;
	this.outpt.parent = this;
	this.outpt.setTransform(24.25,18.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(3,1,1).p("EhM3gHLMCZvAAAIAAOXMiZvAAAg");
	this.shape_10.setTransform(511.9937,59.6,0.9999,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EhM3AHMIAAuXMCZvAAAIAAOXg");
	this.shape_11.setTransform(511.9937,59.6,0.9999,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#002626").ss(3,1,1).p("EhM3gPYMCZvAAAQBkAAAABkIAAbpQAABkhkAAMiZvAAAQhkAAAAhkIAA7pQAAhkBkAAg");
	this.shape_12.setTransform(512,217.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0E4749").s().p("EhM3APZQhkAAAAhkIAA7pQAAhkBkAAMCZvAAAQBkAAAABkIAAbpQAABkhkAAg");
	this.shape_13.setTransform(512,217.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.outpt},{t:this.ltr_3},{t:this.ltr_0},{t:this.ltr_1},{t:this.ltr_2},{t:this.ltr_7},{t:this.ltr_4},{t:this.ltr_5},{t:this.ltr_6},{t:this.ltr_11},{t:this.ltr_8},{t:this.ltr_9},{t:this.ltr_10},{t:this.ltr_15},{t:this.ltr_12},{t:this.ltr_13},{t:this.ltr_14},{t:this.ltr_17},{t:this.ltr_16},{t:this.ltr_21},{t:this.ltr_18},{t:this.ltr_19},{t:this.ltr_20},{t:this.ltr_25},{t:this.ltr_22},{t:this.ltr_23},{t:this.ltr_24},{t:this.ltr_26},{t:this.ltr_27},{t:this.ltr_28}]}).wait(1));

	// Layer_4
	this.dn = new lib.mouse_mccopy();
	this.dn.name = "dn";
	this.dn.setTransform(988.7,345.6,1,1,180,0,0,0,23.7);

	this.input_frame = new lib.video_location();
	this.input_frame.name = "input_frame";
	this.input_frame.setTransform(1280.1,576,1.0667,1.0667,0,0,0,240.1,180);

	this.video_frame = new lib.video_location();
	this.video_frame.name = "video_frame";
	this.video_frame.setTransform(1280,192,1.0667,1.0667,0,0,180,240.1,180);

	this.big_frame = new lib.video_location();
	this.big_frame.name = "big_frame";
	this.big_frame.setTransform(512,384,2.1333,2.1333,0,0,0,240,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.big_frame},{t:this.video_frame},{t:this.input_frame},{t:this.dn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(763.8,379.8,774.5,392.49999999999994);
// library properties:
lib.properties = {
	id: '4F1B2A25036DD54F998192245E0ABD42',
	width: 1536,
	height: 768,
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
an.compositions['4F1B2A25036DD54F998192245E0ABD42'] = {
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