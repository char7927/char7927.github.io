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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape.setTransform(198.325,27.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgKgFgRQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANAAQALAAAJgBIAPgFIALgEIAGgBIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAFQgKABgLAAQgSAAgPgGgAgQg8QgIAFgGAHQgGAGgDAJQgCAJgBAJIBVAAQABgWgLgOQgKgNgVABQgKAAgIADg");
	this.shape_1.setTransform(182.025,27.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA0BUIgJAAIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgDIgghyIAAgBIgBABIgeByIgCADIgEACIgFABIgJAAIgJAAIgGgBIgDgCIgCgDIguiVIgBgEIAAgEIAAgCIADgBIAEgBIAHAAIAIAAIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIABADIAmCCIAAABIABgBIAjiCIABgDIACgBIAFgBIAGAAIAHAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIAmCDIAAABIABgBIAliCIACgDIACgBIAFgBIAHAAIAHAAIAEABIACABIAAACIAAAEIgBAEIgvCVIgBADIgDACIgGABIgJAAg");
	this.shape_2.setTransform(160.525,27.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVBWIgOgEIgKgEIgGgEQgCgCgBgDIgBgIIAAgGIABgEIACgCIACgBQACAAAEADIAJAFQAFADAJADQAHABAKAAQAGABAGgCQAGgBAEgEQAFgDACgEQACgFAAgHQAAgGgDgFQgEgFgFgDQgGgEgGgCIgOgGIgPgHQgHgCgFgGQgGgFgEgIQgDgHAAgLQAAgKAEgIQAEgJAGgGQAHgGALgEQALgEAOAAIAMABIAMADIAJADIAFAEIADACIABACIAAADIAAAFIAAAGIgBADIgCACIgCAAIgEgBIgHgEIgMgFQgGgBgIAAQgHAAgFABQgGACgDADQgEADgCAEQgCAEAAAFQAAAHADAFQAEAFAFADIANAGIAOAGIAPAHQAHACAFAGQAHAFADAHQADAIAAAKQAAAMgEAJQgFAKgIAGQgJAHgKADQgMAEgNAAQgIAAgIgBg");
	this.shape_3.setTransform(140.75,27.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBVIgFgBIgCgBIgBgDIAAhbQAAgOgCgIQgCgIgEgGQgEgGgHgDQgGgEgJAAQgJAAgLAIQgLAIgMAPIAABtIgBADIgCABIgEABIgHABIgIgBIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAFgBIAGAAIAGAAIAFABIACACIAAACIAAAVQAOgPANgHQANgHANAAQAQAAAKAGQALAFAHAJQAGAJADAMQADAMAAARIAABfIgBADIgCABIgFABIgGABIgHgBg");
	this.shape_4.setTransform(124.4,27.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfBTQgKgDgIgGQgHgGgEgJQgEgJAAgMQAAgMAGgKQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgFgHgCQgHgCgKAAQgJAAgJACQgIACgHAEIgLAGQgEACgCAAIgDgBIgCgCIgBgEIAAgEIAAgHQABgDADgCIAHgFIAOgGIARgEQAIgCAJAAQAQAAANAEQALAEAIAHQAHAIADAKQAEAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgIAAIgGAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgKAMgNAGQgNAGgNAAQgMAAgKgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgFQAJgHALgLIAAgiIgYAAQgMAAgJACg");
	this.shape_5.setTransform(105.75,27.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqB7IgFgBIgEgCIgCgDIhChXIAABXIgBADIgCACIgEABIgHAAIgIAAIgEgBIgDgCIAAgDIAAjpIAAgDQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEgBIAIgBIAHABIAEABIACABIABADIAACOIA6hBIADgCIAFgDIAEgBIAIAAIAHAAIAFABIADACIAAACIAAAEIgFAGIg4A3IA/BUIAEAFIABADIgBADIgCACIgFABIgIAAIgHAAg");
	this.shape_6.setTransform(82.35,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVBRQgNgFgJgLQgJgLgFgQQgEgQAAgUQAAgWAFgRQAGgRAKgKQAKgMANgFQAOgFAOAAQAIAAAHACIANADQAGACAFAEIAHAEIADAEIABADIAAADIABAGQAAAHgCADQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQgCAAgEgCIgJgHQgFgEgHgDQgIgDgKAAQgUAAgLARQgLAQAAAdQAAAPADAMQADAMAFAHQAGAIAIAEQAHADALABQAKAAAHgDQAIgEAGgDIAJgHQAEgEACABIACABIABACIABAEIAAAGIAAAGIAAADIgBACIgDAEIgIAFIgMAGIgOAFIgQABQgQAAgNgGg");
	this.shape_7.setTransform(65.775,27.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgKgFgRQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANAAQALAAAJgBIAPgFIALgEIAGgBIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAFQgKABgLAAQgSAAgPgGgAgQg8QgIAFgGAHQgGAGgDAJQgCAJgBAJIBVAAQABgWgLgOQgKgNgVABQgKAAgIADg");
	this.shape_8.setTransform(48.975,27.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvB7IgFgBIgCgCIgBgDIAAhcQAAgNgCgJQgCgHgEgGQgEgGgGgDQgHgEgJABQgKAAgKAIQgLAHgMAOIAABuIgBADIgCACIgFABIgGAAIgHAAIgFgBIgDgCIAAgDIAAjpIAAgDQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAFgBIAHgBIAGABIAFABIACABIABADIAABfQANgNAMgHQAMgGANAAQAQAAAKAFQALAFAHAJQAGAJAEAMQACALAAASIAABfIgBADIgCACIgFABIgGAAIgHAAg");
	this.shape_9.setTransform(30.7,24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBtQgSgHgNgPQgMgOgGgVQgIgVAAgcQABgbAHgWQAHgXANgPQAOgPASgIQASgJAVAAQALAAAIACIASAFIAOAGIAJAHIACADIACADIAAAEIAAAFIAAAGIgBAFIgCACIgBABQgDAAgFgEIgLgHQgHgEgKgEQgKgDgOAAQgPAAgMAGQgMAGgJAMQgJAMgFARQgEAQAAAVQAAAWAEARQAFAQAJALQAIALANAGQAMAGAQAAQANAAALgDQAKgEAHgEIAMgHQAEgEADAAIACABIABACIABAEIAAAHIAAAFIAAADIgCADIgCADIgHAFIgOAHQgJAEgKACQgLADgNAAQgVAAgSgIg");
	this.shape_10.setTransform(11.95,24.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgFgHgDgKQgDgKAAgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgCgDAAgGIABgGIABgEIACgCIADAAIAVAAIAAgmIABgCIACgCIAEgBIAIgBIAHABIADABIADACIABACIAAAmIAoAAIACAAIADACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQgBAQAFAJQAFAIAMAAIAIgBIAFgCIAFgBIACgBIADABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgEADIgHACIgIABIgHABQgNAAgJgDg");
	this.shape_11.setTransform(310.55,25.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfBTQgLgDgGgGQgIgGgEgJQgEgJAAgMQAAgMAGgKQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgFgHgCQgHgCgKAAQgKAAgIACQgIACgHAEIgLAGQgEACgCAAIgDgBIgCgCIgBgEIAAgEIAAgHQABgDACgCIAIgFIAOgGIARgEQAIgCAJAAQAQAAANAEQAMAEAHAHQAHAIADAKQAEAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDACIgIAAIgHAAIgEgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgKAMgNAGQgMAGgOAAQgNAAgJgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAHAHAPAAQAKAAAKgFQAJgHALgLIAAgiIgYAAQgMAAgJACg");
	this.shape_12.setTransform(296,27.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdB0IgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgEIAVg3IgDgCIgBgEIg5iWIgCgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgCIAIAAIAIAAIAFABIADADIABADIAtB9IAAAAIAsh+IACgEIAEgCIAJAAIAIAAIAFACQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIgCAEIg4CdIgVA6QgBADgEACQgFABgIAAIgIAAg");
	this.shape_13.setTransform(246.25,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape_14.setTransform(232.675,27.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggBTQgJgDgIgGQgHgGgEgJQgEgJAAgMQAAgMAFgKQAGgKALgGQAKgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgBgIQgDgGgEgFQgEgFgHgCQgHgCgKAAQgKAAgIACQgJACgGAEIgLAGQgEACgCAAIgDgBIgBgCIgCgEIAAgEIAAgHQABgDADgCIAIgFIANgGIAQgEQAKgCAHAAQARAAAMAEQAMAEAIAHQAHAIAEAKQADAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgHAAIgHAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgLAMgMAGQgNAGgNAAQgMAAgLgEgAgIAJQgJACgGAEQgGAEgDAGQgCAFAAAHQAAAMAIAIQAIAHANAAQALAAAKgFQAJgHALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_15.setTransform(216.2,27.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAuBVIgEgBIgCgBIgBgDIAAhbQAAgOgCgIQgCgIgEgGQgEgGgHgDQgGgEgJAAQgJAAgLAIQgLAIgMAPIAABtIgBADIgCABIgEABIgHABIgIgBIgEgBIgDgBIAAgDIAAidIAAgCIADgCIADgBIAHAAIAGAAIAFABIABACIABACIAAAVQAOgPANgHQANgHAMAAQAQAAALAGQALAFAHAJQAHAJACAMQADAMAAARIAABfIgBADIgCABIgEABIgHABIgIgBg");
	this.shape_16.setTransform(198.75,27.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGB1IgEgBIgDgCIAAgCIAAidIAAgDIADgBIAEgBIAGgBIAHABIAFABIACABIABADIAACdIgBACIgCACIgFABIgHAAIgGAAgAgNhVQgEgDAAgKQAAgLAEgDQAEgEAJAAQAKAAAEAEQAEADAAAKQAAAKgEAEQgEAEgKAAQgJAAgEgEg");
	this.shape_17.setTransform(185.125,24.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglB1QgNgHgHgLQgIgMgDgPQgEgQAAgRQAAgVAFgQQAEgQAJgLQAIgMANgGQANgGAQAAQANAAAMAGQALAGALAMIAAhcIABgDIACgBIAFgBIAHgBIAHABIAFABIACABIABADIAADpIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAgVQgNANgNAIQgOAIgPAAQgRAAgMgHgAgUgTQgIAFgEAJQgFAHgDALQgCALAAAMQAAALACAMQACALAEAJQAFAJAIAGQAHAFAMAAIAKgCQAFgBAGgEQAFgEAGgGQAHgGAGgIIAAg/QgLgOgLgIQgLgHgLAAQgLAAgIAFg");
	this.shape_18.setTransform(171.125,24.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape_19.setTransform(157.425,27.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjBRQgPgGgJgLQgJgLgGgQQgEgPAAgVQAAgSAFgQQAFgQAKgMQAKgMAPgHQAQgGATAAQATAAAPAGQAOAFAJAMQALALAFAQQAEAQAAATQAAATgFAQQgFAQgKAMQgKALgQAIQgPAGgTAAQgTAAgPgGgAgVg5QgJAEgGAJQgGAIgDALQgDAMAAANQAAAMADAMQACAMAFAIQAGAJAJAEQAJAGAOAAQANgBAJgEQAJgFAGgIQAHgIACgLQADgMAAgOQAAgLgCgMQgDgMgGgIQgFgJgJgEQgKgGgNAAQgNABgJAEg");
	this.shape_20.setTransform(140.6,27.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABgBVIgFgBIgCgBIgBgDIAAhfQAAgKgCgIQgBgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgNAPIAABtIAAADIgDABIgEABIgHABIgGgBIgFgBIgCgBIgBgDIAAhfQAAgKgBgIQgCgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgMAPIAABtIgBADIgCABIgFABIgHABIgHgBIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAVQANgPANgHQAMgHANAAQAKAAAIADQAIACAGAEQAGAEADAGQAEAGADAHIAPgPQAHgGAHgEQAGgDAHgCQAGgCAGAAQAPAAALAGQAKAFAHAJQAGAJADAMQACAMAAANIAABjIAAADIgDABIgEABIgHABIgHgBg");
	this.shape_21.setTransform(108.625,27.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjBRQgPgGgJgLQgJgLgGgQQgEgPAAgVQAAgSAFgQQAFgQAKgMQAKgMAPgHQAPgGAUAAQATAAAPAGQAOAFAJAMQALALAFAQQAEAQAAATQAAATgFAQQgFAQgKAMQgLALgPAIQgPAGgTAAQgUAAgOgGgAgVg5QgJAEgGAJQgGAIgDALQgDAMAAANQAAAMACAMQADAMAFAIQAGAJAJAEQAKAGANAAQANgBAJgEQAJgFAGgIQAHgIACgLQADgMAAgOQAAgLgCgMQgDgMgFgIQgGgJgJgEQgJgGgOAAQgNABgJAEg");
	this.shape_22.setTransform(84.7,27.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape_23.setTransform(70.575,27.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRB7IgFgBIgCgCIAAgCIAAiKIgXAAQgCAAgCgDQgCgCABgHIAAgFIABgEIABgCIADAAIAXAAIAAgRQAAgQACgMQADgMAHgIQAGgHAJgEQAJgDAOgBIAMABIAJADIADADIADACIABAEIAAAGIgBAGIAAACIgCACIgCAAIgCAAIgFgCIgGgBIgIgBQgHAAgEACQgGABgCAGQgDAEgBAHQgBAHgBAKIAAASIAkAAIACAAIACACIACAEIAAAFQAAAHgCACQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgkAAIAACKIAAACIgCACIgEABIgHAAIgHAAg");
	this.shape_24.setTransform(58.25,24.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGByIgFgBIgCgBIgBgDIAAjZIABgDIADgBIAEgBIAGgBIAHABIAFABIADABIAAADIAADZIAAADIgDABIgFABIgHABIgGgBg");
	this.shape_25.setTransform(6.525,24.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AABBoQgIgEgFgGQgGgHgCgKQgCgKgBgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgBgDgBgGIABgGIABgEIACgCIADAAIAVAAIAAgmIABgCIACgCIAFgBIAHgBIAHABIADABIACACIABACIAAAmIApAAIACAAIACACIACAEIAAAGQAAAGgCADQgBADgDAAIgpAAIAABXQAAAQAFAJQAFAIANAAIAHgBIAFgCIAFgBIACgBIACABIABABIACADIAAAGIgBAIQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_26.setTransform(349.5,25.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfBTQgLgDgGgGQgIgGgEgJQgEgJAAgMQAAgMAGgKQAFgKAKgGQAKgGAPgDQAPgEASAAIAVAAIAAgMQAAgJgCgIQgCgGgEgFQgEgFgHgCQgHgCgKAAQgKAAgIACQgJACgGAEIgLAGQgEACgDAAIgCgBIgCgCIAAgEIgBgEIABgHQAAgDACgCIAIgFIAOgGIAQgEQAKgCAHAAQASAAAMAEQAMAEAHAHQAIAIADAKQADAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDACIgIAAIgHAAIgDgCQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgLAMgMAGQgMAGgOAAQgNAAgJgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAHAHAPAAQAKAAAKgFQAKgHAKgLIAAgiIgZAAQgLAAgJACg");
	this.shape_27.setTransform(334.95,27.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgGgHgCgKQgDgKAAgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgCgDAAgGIABgGIABgEIACgCIACAAIAWAAIAAgmIABgCIACgCIAEgBIAIgBIAHABIADABIADACIABACIAAAmIAoAAIACAAIADACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQgBAQAFAJQAFAIAMAAIAIgBIAFgCIAEgBIADgBIADABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgFADIgGACIgIABIgHABQgNAAgJgDg");
	this.shape_28.setTransform(250.7,25.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfBTQgLgDgGgGQgIgGgEgJQgEgJAAgMQAAgMAGgKQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgFgHgCQgHgCgKAAQgKAAgIACQgIACgHAEIgLAGQgEACgCAAIgDgBIgCgCIgBgEIAAgEIAAgHQABgDACgCIAIgFIAOgGIARgEQAIgCAJAAQAQAAANAEQAMAEAHAHQAHAIADAKQAEAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDACIgIAAIgHAAIgDgCQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgKAMgNAGQgMAGgOAAQgMAAgKgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAHAHAPAAQAKAAAKgFQAJgHALgLIAAgiIgYAAQgMAAgJACg");
	this.shape_29.setTransform(236.15,27.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgKgFgRQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANAAQALAAAJgBIAPgFIALgEIAGgBIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAFQgKABgLAAQgSAAgPgGgAgQg8QgIAFgGAHQgGAGgDAJQgCAJgBAJIBVAAQABgWgLgOQgKgNgVABQgKAAgIADg");
	this.shape_30.setTransform(207.275,27.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AABBoQgIgEgFgGQgGgHgCgKQgCgKgBgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgBgDgBgGIABgGIABgEIACgCIADAAIAVAAIAAgmIABgCIACgCIAFgBIAHgBIAHABIADABIACACIABACIAAAmIApAAIACAAIACACIACAEIAAAGQAAAGgCADQgBADgDAAIgpAAIAABXQAAAQAFAJQAFAIANAAIAHgBIAFgCIAFgBIACgBIACABIABABIACADIAAAGIgBAIQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_31.setTransform(192.45,25.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglBQQgLgFgHgJQgGgJgDgMQgDgMAAgRIAAhfIAAgDIADgBIAEgBIAHgBIAHABIAFABIACABIABADIAABbQAAAOACAIQACAIAEAGQAEAGAHADQAGAEAIAAQAKAAALgIQALgIAMgPIAAhtIABgDIACgBIAFgBIAHgBIAHABIAEABIACABIABADIAACdIAAACIgDACIgEABIgGAAIgHAAIgEgBIgCgCIAAgCIAAgVQgOAPgNAHQgNAHgNAAQgPAAgLgGg");
	this.shape_32.setTransform(177.275,28.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgKgFgRQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANAAQALAAAJgBIAPgFIALgEIAGgBIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAFQgKABgLAAQgSAAgPgGgAgQg8QgIAFgGAHQgGAGgDAJQgCAJgBAJIBVAAQABgWgLgOQgKgNgVABQgKAAgIADg");
	this.shape_33.setTransform(158.875,27.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglB1QgNgHgHgLQgIgMgDgPQgEgQAAgRQAAgVAFgQQAEgQAJgLQAIgMANgGQANgGAQAAQANAAAMAGQALAGALAMIAAhcIABgDIACgBIAFgBIAHgBIAHABIAFABIACABIABADIAADpIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAgVQgNANgNAIQgOAIgPAAQgRAAgMgHgAgUgTQgIAFgEAJQgFAHgDALQgCALAAAMQAAALACAMQACALAEAJQAFAJAIAGQAHAFAMAAIAKgCQAFgBAGgEQAFgEAGgGQAHgGAGgIIAAg/QgLgOgLgIQgLgHgLAAQgLAAgIAFg");
	this.shape_34.setTransform(140.075,24.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgKgFgRQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANAAQALAAAJgBIAPgFIALgEIAGgBIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAFQgKABgLAAQgSAAgPgGgAgQg8QgIAFgGAHQgGAGgDAJQgCAJgBAJIBVAAQABgWgLgOQgKgNgVABQgKAAgIADg");
	this.shape_35.setTransform(35.125,27.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgFgHgDgKQgCgKAAgOIAAhbIgXAAQgDAAgBgDQgCgDAAgGIABgGIABgEIACgCIACAAIAXAAIAAgmIAAgCIACgCIAEgBIAHgBIAIABIADABIADACIABACIAAAmIAoAAIADAAIACACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQgBAQAFAJQAFAIAMAAIAHgBIAGgCIAEgBIADgBIADABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgFADIgGACIgHABIgIABQgNAAgJgDg");
	this.shape_36.setTransform(305.7,25.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgMQAAgMAGgKQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgFgHgCQgHgCgKAAQgJAAgJACQgIACgHAEIgLAGQgEACgCAAIgDgBIgCgCIgBgEIAAgEIAAgHQABgDADgCIAHgFIAOgGIARgEQAIgCAJAAQAQAAAMAEQAMAEAIAHQAHAIADAKQAEAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgIAAIgGAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgKAMgNAGQgNAGgNAAQgMAAgKgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgFQAJgHALgLIAAgiIgYAAQgMAAgJACg");
	this.shape_37.setTransform(291.15,27.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AACBoQgIgEgGgGQgFgHgDgKQgDgKABgOIAAhbIgXAAQgDAAgBgDQgBgDAAgGIAAgGIABgEIACgCIACAAIAXAAIAAgmIAAgCIACgCIAFgBIAGgBIAIABIAEABIACACIAAACIAAAmIApAAIADAAIABACIABAEIAAAGQABAGgCADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgpAAIAABXQABAQAEAJQAFAIAMAAIAHgBIAGgCIAEgBIAEgBIACABIAAABIABADIAAAGIAAAIQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgFACIgIABIgIABQgNAAgIgDg");
	this.shape_38.setTransform(206.9,25.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggBTQgKgDgHgGQgHgGgEgJQgEgJAAgMQAAgMAFgKQAGgKALgGQAKgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgBgIQgDgGgEgFQgEgFgHgCQgHgCgKAAQgKAAgIACQgJACgGAEIgLAGQgEACgDAAIgCgBIgBgCIgCgEIAAgEIAAgHQABgDADgCIAIgFIANgGIARgEQAIgCAIAAQARAAAMAEQAMAEAIAHQAHAIAEAKQADAMAAAOIAABrQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgHAAIgHAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgRQgKAMgNAGQgNAGgNAAQgMAAgLgEgAgIAJQgJACgGAEQgGAEgDAGQgCAFAAAHQAAAMAIAIQAIAHANAAQALAAAKgFQAJgHALgLIAAgiIgYAAQgMAAgIACg");
	this.shape_39.setTransform(192.35,27.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGB1IgEgBIgDgCIAAgCIAAidIAAgDIADgBIAEgBIAGgBIAHABIAFABIACABIABADIAACdIgBACIgCACIgFABIgHAAIgGAAgAgNhVQgEgDAAgKQAAgLAEgDQAEgEAJAAQAKAAAEAEQAEADAAAKQAAAKgEAEQgEAEgKAAQgJAAgEgEg");
	this.shape_40.setTransform(159.825,24.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgGgHgCgKQgDgKAAgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgCgDAAgGIABgGIABgEIACgCIADAAIAVAAIAAgmIABgCIACgCIAEgBIAHgBIAIABIADABIADACIABACIAAAmIAoAAIACAAIADACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQgBAQAFAJQAFAIAMAAIAIgBIAFgCIAFgBIACgBIADABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgEADIgHACIgIABIgHABQgNAAgJgDg");
	this.shape_41.setTransform(136.85,25.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:48.975}},{t:this.shape_7,p:{x:65.775}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:160.525}},{t:this.shape_1,p:{x:182.025}},{t:this.shape,p:{x:198.325}}]}).to({state:[{t:this.shape_25},{t:this.shape_7,p:{x:18.825}},{t:this.shape_8,p:{x:35.125}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:157.425}},{t:this.shape_18,p:{x:171.125}},{t:this.shape_17,p:{x:185.125}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:232.675}},{t:this.shape_13},{t:this.shape_2,p:{x:275.425}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1,p:{x:325.375}},{t:this.shape,p:{x:341.675}}]},1).to({state:[{t:this.shape_25},{t:this.shape_7,p:{x:18.825}},{t:this.shape_35},{t:this.shape_24},{t:this.shape_19,p:{x:70.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:207.275}},{t:this.shape_14,p:{x:223.575}},{t:this.shape_29},{t:this.shape_28,p:{x:250.7}},{t:this.shape_8,p:{x:265.525}},{t:this.shape_18,p:{x:283.475}},{t:this.shape_2,p:{x:314.375}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_1,p:{x:364.325}},{t:this.shape,p:{x:380.625}}]},1).to({state:[{t:this.shape_25},{t:this.shape_7,p:{x:18.825}},{t:this.shape_30,p:{x:35.125}},{t:this.shape_24},{t:this.shape_19,p:{x:70.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_41},{t:this.shape_14,p:{x:150.475}},{t:this.shape_40},{t:this.shape_28,p:{x:169.7}},{t:this.shape_17,p:{x:180.125}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_8,p:{x:221.725}},{t:this.shape_18,p:{x:239.675}},{t:this.shape_2,p:{x:270.575}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_1,p:{x:320.525}},{t:this.shape,p:{x:336.825}}]},1).wait(1));

	// Layer_2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AwTkIMAgnAAAQBkAAAABkIAAFJQAABkhkAAMggnAAAQhkAAAAhkIAAlJQAAhkBkAAg");
	this.shape_42.setTransform(104.275,26.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AwTEJQhkAAAAhkIAAlJQAAhkBkAAMAgnAAAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_43.setTransform(104.275,26.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-1,399.20000000000005,55);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0099CC").ss(0.5,1,1).p("AkqllQEMA1FJg1QBkAAAABkQgyFvAyCEQAABkhkAAQjLAgmKggQhkAAAAhkQAem0geg/QAAhkBkAAg");
	this.shape.setTransform(39.875,35.7875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(149,234,255,0.4)","rgba(115,171,227,0.647)"],[0,1],-39.8,-0.7,39.9,-0.7).s().p("AkqFWQhkAAAAhkQAem0geg/QAAhkBkAAQEMA1FJg1QBkAAAABkQgyFvAyCEQAABkhkAAQhmAQiVAAQiUAAjGgQg");
	this.shape_1.setTransform(39.875,35.7875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,81.8,73.6), null);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.typ = 'i';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.408)").s().p("AlkGJQgFgBgCgGQgCgGACgFQADgHANgIQAtgeAzgnQAmgdAYgWQAkgiAzg7IBThfQAYgbAjggQAxgvApgNQAKgDAFABQAKABABAIQADALgVAIQglAOglAgQgXAVgnArIhYBkQg5BAgaAYQgkAig7ArQghAYgtAfQgHAFgFAAIgCgBgAFgE+QgGgBgDgFQgBgEAAgGQAAgIACgEIAGgGIAFgIQAFgHAAgEIABgOQAAgHAEgKIAGgRQADgJgBgOIgBgMQgCgLAAgDQABgHAGgCQAGgDAGADQAGADACAIQADAHAAALQAAAPgCAPIgDAPIgGANIgBAMIgBAMQgBAFgHAOIgLATQgDAGgDACQgDADgEAAIgDgBgAmLChQgFgGABgGQACgLAPgJQAQgIAHgGQAEgDAGgHIAIgNQAFgGAJgIIAPgPQAKgKAMgUIAUgfIAUgZIAVgZIAmgyQAWgfATgQIASgOQALgJAFgHQAKgMAFgEQAFgDAFAAQAGAAAEAEQAIAKgPAPQgIAJgQANIgYAWQgSARgXAfIgnAzIgSAWIgSAWIgMAVQgHANgFAHQgHAIgPAPIgVAXIgKANQgFAIgGAEQgEAEgLAGQgKAFgEAEIgHAIQgEAEgEABIgCAAQgFAAgEgFgAFRgRQgGgCgDgFQgEgIABgPQABgbAMg2QADgJAAgIIACgUIAFgTQADgLAAgWIAAgqIgBgVIgDgNQAAgIAEgEQAFgEAHABQAGACAEAFQAEAGABASIAAA0QABAdgEAQIgGATIgCASQgBAOgEASIgHAiQgEAUACAPQABATgGAFQgDACgDAAIgFgBgABpkqQgFgCgEgFQgDgFACgFQADgJARgCIAagGIArgMIApgMQAXgIARgJQAcgQAIgCQALgDAHADQAEABADAEQADAFgBAEQgCAIgMADIgRAFIgNAKQgFADgHADIgrAQIhmAdQgJADgHAAIgGgBgAjYlQIgUgFIgUgEQgJgBgDgCIgDgDIgFAAIgbAAIgIABIgKADQgEABgEgDQgEgDgBgEQgEgJAIgHQAGgGATAAIAhAAQAJAAADADIAEADQAQAAAeAKQAQAEAagBIBLgDQALgBAFAEQAFADABAGQAAAHgEAEQgFAEgNABIgwACIgZAAQggAAgSgEg");
	this.shape.setTransform(53.8159,43.315);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099CC").ss(0.5,1,1).p("AjFmhQELA1FKg1QBkAAAABkQgyFvAyCEQAAA4gfAZQgBAAgCABQgEAEgFACQhbBRiRBDQAkgYAAg8QgGgRgFgVQggiNArlAQAAhkhkAAQjsAmjNgRQhQgGhLgPQgkAAgYANQBjhNCIhGQAZgSAqAAg");
	this.shape_1.setTransform(54.0375,41.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(149,234,255,0.4)","rgba(115,171,227,0.647)"],[0,1],-49.9,0,50,0).s().p("AEBFOQgGgRgFgVQggiNArlAQAAhkhkAAQjsAmjNgRQhQgGhLgPQgkAAgYANQBjhNCIhGQAZgSAqAAQELA1FKg1QBkAAAABkQgyFvAyCEQAAA4gfAYIgDACIgJAGQhbBRiRBDQAkgYAAg8g");
	this.shape_2.setTransform(54.0375,41.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(39.9,50.95,1,1,0,0,0,39.9,35.8);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(64.15,35.8,1,1,0,0,0,39.9,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.2,-1,105.2,88), null);


(lib.glass = function(mode,startPosition,loop,reversed) {
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
		this.typ = 'g';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#666666","#FFFFFF","#666666"],[0,0.545,1],-140,-2,-68.1,122.4).ss(2,1,1).p("AzsAAQADh1FuhSQFyhTIJAAQIKAAFxBTQFyBTAAB0QAAAEAAADQgLBxlnBQQlxBToKAAQoJAAlyhTQluhSgDh0");
	this.shape.setTransform(0,-83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("ATs04QBfJ3ARJfQADBlABBkQgFCwglCaQgFAVgGAWQh1Gwl4D/QgGBKjtA2QjzA2lYAAQlXAAjzg2Qjxg3gChMIAAgCQl2j9h2mtQgGgWgFgVQgmicgFizQABhXAChXQAQprBgqGIAAgD");
	this.shape_1.setTransform(0.025,50.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(152,152,152,0.498)","rgba(196,196,196,0.29)","rgba(215,215,215,0)","rgba(215,215,215,0)","rgba(196,196,196,0.29)","rgba(152,152,152,0.498)"],[0,0.196,0.408,0.651,0.835,1],-137.2,-46.8,137.3,-46.8).s().p("ApKUJQjxg3gChMIAAgCQl2j9h2mtIgLgrQgmicgFizQABhXAChXQAQprBgqFQADBzFuBTQFyBTIJAAQIKAAFxhTQFmhRALhwQBfJ3ARJeIAEDJQgFCwglCaIgLArQh1Gwl4D/QgGBKjtA2QjzA2lYAAQlXAAjzg2g");
	this.shape_2.setTransform(0.025,50.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(102,102,102,0)","rgba(102,102,102,0.478)"],[0.973,1],-0.3,-73.5,0,-0.3,-73.5,139.8).s().p("ApKKbQjxg2gChMIAAgCQl2j9h2msIgLgsQgmibgFizQABhYAChXIAZBzIA2D5QAnCwAKANQEpF0ErDCQKEGgKImiQEsjCEtlyQAJgNArjOIA1j5IAWhrIAEDKQgFCwglCZIgLAsQh1Gvl4D+QgGBLjtA1QjzA3lYAAQlXAAjzg3g");
	this.shape_3.setTransform(0.025,112.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,204,255,0.4)","rgba(0,102,204,0.647)"],[0.004,1],-72.2,2.7,112.1,-4.7).s().p("AoPEZQjggZi5gqQlQhNgthoQgGgPgBgPIAAgFQAEh7GAhYQC5grDggYIHigVIIPAVQD6AVDNAuQGABYAEB7IAAACQAAB9mEBZQjNAvj6AUIoPAVg");
	this.shape_4.setTransform(0,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(0,204,255,0.4)","rgba(0,102,204,0.647)"],[0.004,1],2.6,-8.6,0,2.6,-8.6,156.4).s().p("ApbMKQj8hcg0g0Qn7lqBaxzIAAAFQAAAPAHAPQAtBpFQBMQC5ArDfAYIHjAWIIPgWQD6gUDMgvQGFhYAAh+IAAgCQBaRzn7FqQg0A0jdBaQjdBbl/ABIgJAAQl3AAj6hag");
	this.shape_5.setTransform(0.0064,91.0757);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(0,204,255,0.4)","rgba(0,102,204,0.647)"],[0.004,1],2.6,-5.5,0,2.6,-5.5,156.4).s().p("ApbMpQj8hbg0g0QnvlhBKxFIABgLIANhnIAAADQAAAIACAHQAGAfAiAcQBWBHEBA3QGBBTIgAAQIgAAGBhTQFphNAXhsQACgHAAgIIgBgIQALAxACArQBSRbn1FmQg0A0jdBaQjdBbl/ABIgJAAQl3AAj6hbg");
	this.shape_6.setTransform(0.0125,87.9007);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,204,255,0.4)","rgba(0,102,204,0.647)"],[0.004,1],-72.2,8.4,112.1,1.1).s().p("AuhDIQkBg4hWhGQgigcgGgfQgCgHAAgIIAAgDIAAgDIACgKQAbhqFkhNQGBhTIgAAQIgAAGCBTQFzBQAOBwIAAAHQAAAIgCAHQgXBrloBOQmCBTogAAQogAAmBhTg");
	this.shape_7.setTransform(0,-1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},2).wait(1));

	// Layer_6
	this.instance = new lib.Symbol3();
	this.instance.setTransform(-5.05,27.05,1,1,0,0,0,52,43.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({y:126.6},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(2,1,1).p("As9BaQABhCC0gwQAdgIAhgHQDzg3FXAAQFYAADzA3QAeAHAbAHQC6AxAABDQAAACAAAC");
	this.shape_8.setTransform(0.025,157.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(2,1,1).p("AAAABIAAgB");
	this.shape_9.setTransform(-83,166.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BDBDBD","#F7F7F7","#F7F7F7","#BDBDBD"],[0,0.106,0.894,1],-137.5,14.3,137.6,14.3).s().p("AM+VvQAAhEi6gyIg5gOQjzg3lYAAQlXAAjzA3QghAHgdAJQi0AxgBBCQl2j9h2mtIgLgsQgmibgFizQABhYAChXQAQpqBgqGIAAgDQADh0FuhSQFyhUIJAAQIKAAFxBUQFxBSAAB2IAAAHQBfJ2ARJeIAEDKQgFCwglCZIgLAsQh1Gwl4D+IAAgDg");
	this.shape_10.setTransform(0.025,27.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#D1D1D1"],[0.792,1],-1.2,0.3,0,-1.2,0.3,82.9).s().p("ApKCEQjxg2gChNIAAgBQABhCC0gxQAdgIAhgHQDzg3FXAAQFYAADzA3IA5ANQC6AzAABCIAAAEQgGBKjtA2QjzA2lYAAQlXAAjzg2g");
	this.shape_11.setTransform(0.025,166.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,-113.2,277.1,299.2);


// stage content:
(lib.ice_cube_isotopes = function(mode,startPosition,loop,reversed) {
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
		/*this.btn.addEventListener('click',moveIt);
		
		function moveIt() {
			console.log('what');
		}*/
		/*this.moveIt = function() {
			this.x += 5;
		}
		
		this.btn.addEventListener('click',this.moveIt.bind(this.btn));*/
		//this.rand = 2;// Math.floor(Math.random() * 3);
		
		this.valAlpha = 0.7;
		this.seld_G = null;
		this.seld_I = null;
		this.iceTyp = Math.floor(Math.random() * 3);
		this.setUp = false
		this.selIt_G = function() {
			if(this.parent.setUp == false) {
				this.parent.setUp_F();
			}
			if(this.currentFrame == 0) {
				if(this.parent.seld_G != null) {
					this.parent.seld_G.alpha = this.parent.valAlpha;
				}
				this.alpha = 1;
				this.parent.seld_G = this;
				this.parent.checkResponse();
			}
		}
		this.selIt_I = function() {
			if(this.parent.setUp == false) {
				this.parent.setUp_F();
			}
			if(this.parent.seld_I != null) {
				this.parent.seld_I.alpha = this.parent.valAlpha;
			}
			this.alpha = 1;
			this.parent.seld_I = this;
			this.parent.checkResponse();
		}
		this.checkResponse = function(){
			console.log('checking');
			if(this.seld_G != null && this.seld_I != null) {
				if(this.iceTyp > this.seld_G.num) {
					this.seld_G.gotoAndStop(2);
				}else{
					this.seld_G.gotoAndStop(1);
				}
				this.seld_I.visible = false;
				this.seld_I = null;
				this.seld_G = null;
			}
		}
		this.setUp_F = function() {
			//console.log('calling');
			for(i=0; i<3; i++) {
				this['glass_'+i].num = i;
				this['i_'+i].num = i;
			}
			this.setUp = true;
		}
		this.checkAnswer = function() {
			this.ch_btn.gotoAndStop(this.iceTyp + 1);
		}
		this.glass_0.addEventListener('click',this.selIt_G.bind(this.glass_0));
		this.glass_1.addEventListener('click',this.selIt_G.bind(this.glass_1));
		this.glass_2.addEventListener('click',this.selIt_G.bind(this.glass_2));
		this.i_0.addEventListener('click',this.selIt_I.bind(this.i_0));
		this.i_1.addEventListener('click',this.selIt_I.bind(this.i_1));
		this.i_2.addEventListener('click',this.selIt_I.bind(this.i_2));
		this.ch_btn.addEventListener('click',this.checkAnswer.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJQgCgCgBgHQABgGACgCQACgCAFgBQAHABABACQACACABAGQgBAHgCACQgCADgGAAQgFAAgCgDg");
	this.shape.setTransform(436.4,585.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAJQgCgCgBgHQABgGACgCQADgCAEgBQAHABABACQACACAAAGQAAAHgCACQgCADgGAAQgFAAgCgDg");
	this.shape_1.setTransform(431.35,585.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAJQgCgCgBgHQABgGACgCQADgCAEgBQAHABABACQACACAAAGQAAAHgCACQgCADgGAAQgFAAgCgDg");
	this.shape_2.setTransform(426.3,585.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgJACIgNABQgKAAgIgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_3.setTransform(418.8,582.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAtQgIgDgEgGQgGgGgCgJQgDgJAAgLQABgMADgJQADgKAFgGQAGgGAHgCQAHgDAIAAIAJAAIAHACIAFADIAFADIABACIABACIAAACIAAADIAAAFQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgEIgHgDQgEgCgGAAQgKAAgGAJQgHAJAAAQQAAAJABAGQADAGADAFQACAEAFACQAEACAFAAQAGAAAEgCIAIgDIAFgEIADgCIABAAIABACIAAACIAAADIAAADIAAACIAAACIgCACIgEADIgGADIgIACIgJABQgJAAgHgDg");
	this.shape_4.setTransform(409.75,582.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAABBIgDAAIgCAAIgBgCIgBgBIAAhXIABgBIABgBIACgBIADAAIAEAAIACABIABABIABABIAABXIgBABIgBACIgCAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_5.setTransform(403.1,580.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_6.setTransform(390.825,580.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgDgJAAgMQAAgKADgJQACgJAGgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAHADAGAGQAEAFACAIQADAIAAAIIAAADQAAADgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgMABQgKAAgJgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQABgMgHgIQgFgHgMAAQgFAAgFACg");
	this.shape_7.setTransform(380.85,582.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_8.setTransform(372.575,581.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAuQgFgCgFgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgFgEIgKgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAKgCIAJgBQAJAAAGACQAHACAFAEQADAEACAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgGAGgHAEQgIADgGAAQgIAAgFgCgAgEAFIgJADQgCACgCAEQgCADAAAEQAAAGAFAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_9.setTransform(364.5,582.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABBIgDAAIgDAAIgBgCIAAgBIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIABABIAAABIAABXIAAABIgBACIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQADgCAEAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_10.setTransform(357.7,580.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_11.setTransform(351.875,581.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAABBIgDAAIgCAAIgBgCIgBgBIAAhXIABgBIABgBIACgBIADAAIAEAAIACABIABABIABABIAABXIgBABIgBACIgCAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_12.setTransform(346.4,580.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAvIgEAAIgCAAIgBgBIgBgBIAAhYIAAAAIACgBIACgBIAEAAIADAAIACABIABABIABAAIAAANQADgFAEgDIAFgFQACgCADgBIAGAAIADAAIADAAIADABIACABIABABIAAABIABACIAAAEIgBADIAAACIgBABIgBABIgCgBIgCAAIgDgBIgEgBIgFABIgFAEIgEAFIgHAJIAAA6IAAABIgBABIgDAAIgEAAg");
	this.shape_13.setTransform(341.225,582.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_14.setTransform(333.625,581.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBEIgEAAIgCAAIgCgBIAAgBIAAhNIgNAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBgFIABgEIAAgBIABgBIABgBIANAAIAAgJQAAgJACgHQABgHAEgDQADgFAFgCQAFgBAHAAIAHAAIAFABIACABIABACIABADIAAADIAAACIgBADIAAABIgBAAIgCgBIgDgBIgDgBIgFgBQgDAAgDACQgCABgCADQgCACAAAEIgBAKIAAAJIAUAAIABABIABABIABABIAAAEIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgUAAIAABNIAAABIgCABIgBAAIgEAAg");
	this.shape_15.setTransform(323.175,580.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAtQgIgDgFgGQgGgHgCgIQgDgJAAgLQAAgKADgJQADgJAFgHQAGgGAIgEQAJgDAKAAQALAAAIADQAIADAFAGQAGAGACAJQADAJAAALQAAAKgDAJQgDAJgFAGQgGAHgIADQgJAEgKAAQgLAAgIgDgAgLgfQgFACgEAFQgDAEgCAHQgBAGAAAHQAAAHABAGQABAGAEAFQADAFAFADQAFADAHAAQAHAAAFgDQAFgDAEgEQADgFACgGQABgGAAgIQAAgGgBgHQgBgGgEgFQgDgEgFgDQgFgDgIAAQgGAAgFADg");
	this.shape_16.setTransform(314.625,582.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBAIgDAAIgBgCIABgDIAMgeIgCgBIgBgCIgfhTIgBgEIABgBIACgBIAFAAIAFAAIACABIACABIABABIAYBGIAAAAIAYhGIACgCIACgBIAFAAIAEAAIADABIABABIgBADIgfBXIgLAhIgDACIgHAAIgEAAg");
	this.shape_17.setTransform(300.325,583.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_18.setTransform(292.275,581.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAABBIgDAAIgDAAIgBgCIAAgBIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIAAABIABABIAABXIgBABIAAACIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_19.setTransform(286.8,580.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAvIgIgBIgGgDIgDgCIgBgDIgBgFIAAgDIABgCIAAgBIABAAIAEABIAFADIAIADQADABAGAAIAHgBIAFgCQACgCACgDIABgGQAAgEgBgCIgGgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAGACIAGACIACABIABACIABABIAAACIAAACIAAADIAAACIgBABIgBABIgCgBIgFgDIgGgCIgIgBIgGABQgDABgDACIgCAEIgBAFQAAAEABACIAGAFIAFADIAJADIAIAEIAHAEQADADADAEQABAEAAAGQAAAHgDAFQgCAFgEAEQgFADgHACQgGACgGAAIgJgBg");
	this.shape_20.setTransform(280.6,582.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAeAvIgEAAIgDAAIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA9IAAABIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgBIAAhYIAAAAIACgBIACgBIAEAAIADAAIACABIABABIABAAIAAAMQAHgIAIgEQAHgDAGAAQAJAAAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCAAIgEAAg");
	this.shape_21.setTransform(271.525,582.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAHADQAHADAGAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQAAgMgGgIQgFgHgMAAQgFAAgFACg");
	this.shape_22.setTransform(261.25,582.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_23.setTransform(250.825,580.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAABEIgDAAIgCAAIgBgBIgBgCIAAiBIABgCIABgBIACAAIADAAIAEAAIACAAIABABIABACIAACBIgBACIgBABIgCAAIgEAAg");
	this.shape_24.setTransform(239.05,580.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAuQgGgCgEgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgGgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAJgCIAKgBQAJAAAGACQAHACAFAEQAEAEABAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_25.setTransform(231.65,582.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_26.setTransform(221.925,582.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_27.setTransform(213.175,581.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLAtQgIgDgEgGQgGgGgCgJQgDgJAAgLQABgMADgJQADgKAFgGQAGgGAHgCQAHgDAJAAIAIAAIAHACIAFADIAFADIABACIABACIAAACIAAADIAAAFQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgEIgHgDQgEgCgGAAQgKAAgGAJQgHAJAAAQQAAAJABAGQADAGADAFQACAEAFACQAEACAGAAQAFAAAEgCIAIgDIAFgEIADgCIABAAIABACIAAACIAAADIAAADIAAACIAAACIgCACIgEADIgGADIgIACIgJABQgJAAgHgDg");
	this.shape_28.setTransform(205.9,582.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgRAuQgFgCgFgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIACgDIAEgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEABAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_29.setTransform(196.45,582.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAtQgIgDgFgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAFgHAIgDQAIgDAJAAQAKAAAIADQAGADAFAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAGgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgMABQgJAAgJgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_30.setTransform(182.45,582.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAeBEIgEAAIgDAAIgBgBIAAgCIAAgzIgBgMIgEgHIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAHIAAA9IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgCIAAiBIABgCIABgBIACAAIAEAAIAEAAIADAAIABABIAAACIAAA0QAHgHAHgDQAHgEAGAAQAJAAAGADQAGADAEAFQAEAFABAHQACAFAAAKIAAA1IgBACIgBABIgCAAIgEAAg");
	this.shape_31.setTransform(172.325,580.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_32.setTransform(163.525,581.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_33.setTransform(150.375,580.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAeAvIgEAAIgDAAIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA9IAAABIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgBIAAhYIAAAAIACgBIACgBIAEAAIADAAIACABIABABIABAAIAAAMQAHgIAIgEQAHgDAGAAQAJAAAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCAAIgEAAg");
	this.shape_34.setTransform(140.225,582.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAABBIgDAAIgCAAIgBgCIgBgBIAAhXIABgBIABgBIACgBIADAAIAEAAIACABIABABIABABIAABXIgBABIgBACIgCAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_35.setTransform(132.65,580.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFBEIgEAAIgCAAIgCgBIAAgBIAAhNIgNAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBgFIABgEIAAgBIABgBIABgBIANAAIAAgJQAAgJACgHQABgHAEgDQADgFAFgCQAFgBAHAAIAHAAIAFABIACABIABACIABADIAAADIAAACIgBADIAAABIgBAAIgCgBIgDgBIgDgBIgFgBQgDAAgDACQgCABgCADQgCACAAAEIgBAKIAAAJIAUAAIABABIABABIABABIAAAEIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgUAAIAABNIAAABIgCABIgBAAIgEAAg");
	this.shape_36.setTransform(127.575,580.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_37.setTransform(116.225,581.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAaIgCAAIgCgBIgBgBIAAgBIgDgtIABgBIABgBIAEAAIACgBIAEABIADAAIABABIAAABIgBAtIgBABIgBABIgCABIgDAAg");
	this.shape_38.setTransform(110.85,575.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAeAvIgEAAIgDAAIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA9IAAABIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgBIAAhYIAAAAIACgBIACgBIAEAAIADAAIACABIABABIABAAIAAAMQAHgIAIgEQAHgDAGAAQAJAAAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCAAIgEAAg");
	this.shape_39.setTransform(103.475,582.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_40.setTransform(92.725,580.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAABEIgDAAIgDAAIgBgBIAAgCIAAiBIAAgCIABgBIADAAIADAAIAEAAIADAAIABABIAAACIAACBIAAACIgBABIgDAAIgEAAg");
	this.shape_41.setTransform(85.45,580.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_42.setTransform(77.925,582.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAtQgIgDgFgGQgGgHgCgIQgDgJAAgLQAAgKADgJQADgJAFgHQAGgGAIgEQAJgDAKAAQALAAAIADQAIADAFAGQAGAGACAJQADAJAAALQAAAKgDAJQgDAJgFAGQgGAHgIADQgJAEgKAAQgLAAgIgDgAgLgfQgFACgEAFQgDAEgCAHQgBAGAAAHQAAAHABAGQABAGAEAFQADAFAFADQAFADAHAAQAHAAAFgDQAFgDAEgEQADgFACgGQABgGAAgIQAAgGgBgHQgBgGgEgFQgDgEgFgDQgFgDgIAAQgGAAgFADg");
	this.shape_43.setTransform(67.475,582.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMAtQgHgDgFgGQgEgGgDgJQgDgJABgLQAAgMACgJQADgKAGgGQAGgGAHgCQAIgDAHAAIAIAAIAHACIAHADIADADIACACIAAACIABACIAAADIgBAFQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFgEIgHgDQgEgCgGAAQgKAAgHAJQgGAJAAAQQAAAJACAGQABAGADAFQADAEAFACQADACAGAAQAGAAAFgCIAGgDIAGgEIADgCIABAAIABACIABACIAAADIAAADIgBACIgBACIgBACIgEADIgHADIgIACIgJABQgIAAgIgDg");
	this.shape_44.setTransform(58.25,582.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_45.setTransform(46.875,580.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAkQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIACgZIgUAPIgDAAIgEgFIgCgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAYgKIgYgJQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIACgFQACgEACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAUAPIgCgZQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAFgBIAGABQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAZIAWgPQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABACAEIADAFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgXAJIAXAKQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgDAFIgDAFIgCAAIgWgPIADAZQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgGABIgFgBg");
	this.shape_46.setTransform(39.35,576.675);

	this.ch_btn = new lib.Symbol4();
	this.ch_btn.name = "ch_btn";
	this.ch_btn.setTransform(78.3,527.05,1,1,0,0,0,45.9,23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVB8IgDgBIgBgBIABgDQANgdAHgeQAFgeAAgeQAAgegFgdQgHgfgNgcIgBgCIABgCIAEgBIAFgBIAFABIADAAIACABIABABQANAdAIAeQAJAfAAAfQAAAQgCAQQgCAPgEAPQgEAQgGAPQgGAOgGAPIgCABIgCABIgDAAIgEABIgGgBg");
	this.shape_47.setTransform(642.675,473.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAiBjIgFgBIgCgBIgCgCIg1hHIAABHIAAACIgDABIgDABIgGAAIgFAAIgEgBIgCgBIgBgCIAAi8IABgCIACgCIAEgBIAFAAIAGAAIADABIADACIAAACIAAByIAvg0IACgCIAEgCIAEgBIAGAAIAFAAIAFABIACABIAAACIAAAEIgEADIgtAuIAzBDIADAEIABADIgBACIgCABIgEABIgGAAIgGAAg");
	this.shape_48.setTransform(632.55,471.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRBBQgLgEgGgJQgIgJgEgMQgDgNAAgQQAAgSAEgOQAFgNAIgJQAIgJALgEQAKgEAMAAIAMABIAKADQAFACAEACIAGAEIACADIABADIAAADIAAAEIAAAIQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQgDAAgDgDIgHgFQgEgDgGgCQgGgCgIAAQgQAAgJANQgJANAAAXQAAANADAJQACAJAFAGQAEAHAHADQAFADAJAAQAIAAAFgDIALgFIAIgGIAFgCIABAAIABACIABADIAAAFIAAAFIgBADIAAACIgCACIgHAFIgJAEIgLAEIgOABQgMAAgLgFg");
	this.shape_49.setTransform(619.2,474.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFBeIgDgBIgCgBIgBgCIAAh+IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAB+IgBACIgCABIgDABIgGAAIgFAAgAgKhEQgDgDAAgIQAAgJADgCQADgDAHgBQAIABADADQADACAAAIQAAAJgDACQgDADgIABQgHAAgDgDg");
	this.shape_50.setTransform(609.575,472);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFBjIgDgBIgCgBIgBgCIAAi8IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAC8IgBACIgCABIgDABIgGAAIgFAAg");
	this.shape_51.setTransform(602.925,471.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRBBQgLgEgGgJQgIgJgEgMQgEgNAAgQQAAgSAGgOQAEgNAIgJQAIgJALgEQAKgEAMAAIAMABIAKADQAFACAEACIAGAEIACADIABADIAAADIAAAEIgBAIQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQgDAAgDgDIgHgFQgEgDgGgCQgGgCgIAAQgQAAgJANQgJANAAAXQAAANACAJQADAJAFAGQAEAHAGADQAGADAJAAQAHAAAGgDIALgFIAIgGIAFgCIABAAIABACIABADIAAAFIAAAFIgBADIAAACIgCACIgHAFIgJAEIgLAEIgOABQgMAAgLgFg");
	this.shape_52.setTransform(593.65,474.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAMB8IgDAAIgCgBIgCgBQgGgPgGgOQgGgPgEgQQgEgPgCgPQgCgQAAgQQAAgPACgPQACgQAFgQQAEgPAFgPIAMgdIABgBIACgBIADAAIAFgBIAFABIADABIACACIgBACQgNAcgHAfQgFAdAAAeQAAAeAGAeQAGAdANAeIABADIgBABIgDABIgGABIgEgBg");
	this.shape_53.setTransform(583.025,473.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgLANQgDgDAAgKQAAgJADgDQADgEAIAAQAJAAADAEQADADAAAJQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_54.setTransform(574.975,479.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLANQgDgDAAgKQAAgJADgDQADgEAIAAQAJAAADAEQADADAAAJQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_55.setTransform(567.725,479.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgLANQgDgDAAgKQAAgJADgDQADgEAIAAQAJAAADAEQADADAAAJQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_56.setTransform(560.475,479.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAmBjIgEgBIgCgBIgBgCIAAhLQABgLgCgGQgCgGgDgFQgDgFgFgCQgGgDgHAAQgIAAgIAGQgJAHgKALIAABZIAAACIgCABIgDABIgGAAIgGAAIgDgBIgCgBIgBgCIAAi8IABgCIACgCIADgBIAGAAIAGAAIADABIACACIAAACIAABMQAKgLALgFQAKgFAKAAQAMAAAJAEQAIAFAGAHQAFAHADAKQACAIAAAOIAABOIAAACIgCABIgEABIgFAAIgGAAg");
	this.shape_57.setTransform(549.2,471.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRBBQgLgEgGgJQgIgJgEgMQgEgNAAgQQAAgSAGgOQAEgNAIgJQAIgJALgEQAKgEAMAAIAMABIAKADQAFACAEACIAGAEIACADIABADIAAADIAAAEIAAAIQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQgDAAgDgDIgHgFQgEgDgGgCQgGgCgIAAQgQAAgJANQgJANAAAXQAAANADAJQACAJAFAGQAEAHAGADQAGADAJAAQAHAAAGgDIALgFIAIgGIAFgCIABAAIABACIABADIAAAFIAAAFIgBADIAAACIgCACIgHAFIgJAEIgLAEIgOABQgMAAgLgFg");
	this.shape_58.setTransform(535.6,474.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFBeIgDgBIgCgBIgBgCIAAh+IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAB+IgBACIgCABIgDABIgGAAIgFAAgAgKhEQgDgDAAgIQAAgJADgCQADgDAHgBQAIABADADQADACAAAIQAAAJgDACQgDADgIABQgHAAgDgDg");
	this.shape_59.setTransform(525.975,472);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAlBjIgDgBIgCgBIAAgCIAAhLQgBgLgBgGQgCgGgDgFQgEgFgFgCQgFgDgGAAQgJAAgIAGQgJAHgJALIAABZIgBACIgCABIgEABIgFAAIgGAAIgEgBIgCgBIAAgCIAAi8IAAgCIACgCIAEgBIAGAAIAFAAIAEABIACACIABACIAABMQAJgLALgFQAKgFAJAAQANAAAJAEQAIAFAGAHQAFAHACAKQADAIAAAOIAABOIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_60.setTransform(515.05,471.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAjBEIgFgBIgDgCIgBgCIgahbIAAgCIAAACIgZBbIgBADIgDABIgFABIgHAAIgHAAIgFgBIgCgCIgCgCIglh4IgBgEIAAgCIAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAfBoIAAACIABgCIAchoIABgCIACgBIADgBIAFAAIAFAAIAEABIACABIABACIAeBoIAAACIAAgCIAfhoIABgCIACgBIADgBIAGAAIAGAAIADABIACABIAAACIAAACIgBAEIgmB4IgBADIgCABIgFABIgHAAIgHAAg");
	this.shape_61.setTransform(497.025,474.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AABBTQgGgCgEgGQgFgFgCgIQgCgIAAgLIAAhKIgSAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgCgCAAgGIABgEIABgDIABgCIACAAIASAAIAAgeIABgCIABgBIAEgBIAGgBIAFABIADABIACABIAAACIAAAeIAhAAIACAAIACACIAAADIABAEQAAAGgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIghAAIAABGQAAANAEAIQAEAGAKAAIAGgBIAEgBIAEgBIACgBIACABIABAAIAAADIABAFIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDADIgFABIgGACIgHAAQgKAAgHgDg");
	this.shape_62.setTransform(475.025,473);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeBBQgIgFgGgGQgGgIgCgJQgCgLAAgNIAAhMIAAgCIACgCIAEgBIAFAAIAGAAIAEABIACACIABACIAABIQAAAMABAGQACAHADAFQADAFAFACQAGADAHAAQAHAAAJgGQAJgGAKgMIAAhYIAAgCIACgCIADgBIAGAAIAGAAIAEABIABACIABACIAAB+IgBACIgBABIgDABIgGAAIgFAAIgEgBIgBgBIAAgCIAAgRQgLAMgLAFQgLAGgKAAQgMAAgJgEg");
	this.shape_63.setTransform(462.75,474.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcBBQgLgEgIgJQgIgJgEgNQgEgNAAgQQAAgOAFgNQAEgOAIgJQAIgKAMgEQAMgGAPAAQAQAAAMAFQAMAEAHAJQAIAKAEAMQAEANAAAQQAAAOgEAOQgEAMgIAKQgJAKgMAFQgMAFgPAAQgQAAgMgFgAgQgtQgIADgFAHQgFAHgCAJQgCAJAAAKQAAAKACAJQACAKAEAHQAFAGAHAEQAIAEAKAAQAKAAAIgDQAHgEAFgGQAFgHACgKQADgJAAgKQAAgKgCgJQgCgJgFgHQgEgHgIgEQgHgEgLgBQgKAAgHAFg");
	this.shape_64.setTransform(447.475,474.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgeBfQgKgGgGgJQgGgKgDgMQgDgNAAgNQAAgRAEgOQADgMAHgJQAHgKALgFQAKgEANAAQAKAAAKAEQAJAFAJAKIAAhKIABgCIABgCIAEgBIAGAAIAGAAIADABIACACIABACIAAC7IgBADIgCABIgDABIgFAAIgFAAIgDgBIgCgBIAAgDIAAgQQgKAKgLAGQgLAHgMgBQgOAAgKgEgAgQgPQgGAFgEAGQgEAGgCAJQgBAJAAAIQAAALABAIQACAKADAHQAEAHAGAEQAGAFAJAAIAIgBIAJgFIAKgIIAKgLIAAgzQgJgLgJgGQgJgGgJAAQgJAAgGAEg");
	this.shape_65.setTransform(425.275,471.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAlBFIgDgBIgCgBIAAgCIAAhKQAAgLgCgGQgCgHgDgFQgEgFgEgCQgFgDgHAAQgIAAgJAGQgJAHgJAMIAABYIgBACIgCABIgDABIgGAAIgGAAIgEgBIgBgBIgBgCIAAh/IABgCIABgBIAEgBIAFAAIAFAAIADABIACABIAAACIAAARQALgMALgFQAKgGAKAAQANAAAJAEQAJAFAFAHQAFAHADAKQACAJAAAOIAABNIgBACIgBABIgEABIgFAAIgHAAg");
	this.shape_66.setTransform(410.45,474.525);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgFBeIgDgBIgCgBIgBgCIAAh+IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAB+IgBACIgCABIgDABIgGAAIgFAAgAgKhEQgDgDAAgIQAAgJADgCQADgDAHgBQAIABADADQADACAAAIQAAAJgDACQgDADgIABQgHAAgDgDg");
	this.shape_67.setTransform(399.475,472);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgNBjIgEgBIgCgBIAAgCIAAhvIgSAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgBgCAAgGIAAgEIABgDIACgCIACAAIASAAIAAgNQAAgNACgKQACgKAGgGQAFgGAGgDQAIgDALAAIAJABIAHACIAEACIABACIABADIAAAFIAAAEIgBADIgBACIgBAAIgCgBIgEgBIgFgBIgHgCQgFABgEACQgDABgDADQgCAEgBAGIgBAOIAAAOIAcAAIACAAIACACIABADIAAAEQAAAGgBACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgcAAIAABvIgBACIgBABIgDABIgGAAIgFAAg");
	this.shape_68.setTransform(392.125,471.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgcBBQgLgEgIgJQgIgJgEgNQgEgNAAgQQAAgOAFgNQAEgOAIgJQAIgKAMgEQAMgGAPAAQAQAAAMAFQAMAEAHAJQAIAKAEAMQAEANAAAQQAAAOgEAOQgEAMgIAKQgJAKgMAFQgMAFgPAAQgQAAgMgFgAgQgtQgIADgFAHQgFAHgCAJQgCAJAAAKQAAAKACAJQACAKAEAHQAFAGAHAEQAIAEAKAAQAKAAAIgDQAHgEAFgGQAFgHACgKQADgJAAgKQAAgKgCgJQgCgJgFgHQgEgHgIgEQgHgEgLgBQgKAAgHAFg");
	this.shape_69.setTransform(373.075,474.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AABBTQgGgCgEgGQgFgFgCgIQgCgIAAgLIAAhKIgSAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgCgCAAgGIABgEIABgDIABgCIACAAIASAAIAAgeIABgCIABgBIAEgBIAGgBIAFABIADABIACABIAAACIAAAeIAhAAIACAAIACACIAAADIABAEQAAAGgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIghAAIAABGQAAANAEAIQAEAGAKAAIAGgBIAEgBIAEgBIACgBIACABIABAAIAAADIABAFIgBAGQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgDADIgFABIgGACIgHAAQgKAAgHgDg");
	this.shape_70.setTransform(360.675,473);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRBFIgKgDIgJgDIgFgDIgDgEIAAgHIAAgEIABgEIABgBIACgBIAEACIAIAFIAKADQAGACAJABQAEAAAGgCQAEgBAEgDQAEgCABgEQACgDAAgGQAAgGgDgDIgHgGIgKgGIgLgEIgLgFQgHgCgEgFQgFgFgCgFQgDgHAAgIQAAgIADgGQADgHAGgGQAGgEAIgEQAJgDALAAIAKABIAJACIAHADIAEACIACACIABACIAAADIAAAEIAAAEIAAADIgCABIgBABIgDgCIgHgDIgJgDQgFgBgHgBIgJABQgFACgCADQgEACgBADQgCAEABADQAAAGACAEQADAEAEADQAFACAFACIAMAGIAMAFQAGACAEAEQAFAEADAGQACAGAAAIQAAAKgDAHQgEAJgGAEQgIAGgIACQgKADgKAAIgNgBg");
	this.shape_71.setTransform(343.85,474.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgVBCQgMgFgIgIQgIgJgEgNQgFgNAAgRQAAgPAFgNQAEgOAIgJQAIgJALgFQAMgFANAAQAPAAAKAFQALAFAGAIQAHAIAEALQADALAAANIAAADQAAAFgDACQgDADgDAAIhTAAQAAAKACAJQACAJAFAFQAFAGAIAEQAIADAKAAIARgBIAMgEIAIgDIAFgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBACIgFADIgKADIgOADIgRABQgPAAgLgEgAgNgwQgGAEgFAFQgEAGgDAHQgCAHAAAIIBEAAQABgSgJgLQgJgLgRAAQgHAAgHADg");
	this.shape_72.setTransform(330.925,474.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgQBFIgLgDIgJgDIgFgDIgDgEIAAgHIAAgEIABgEIABgBIACgBIAFACIAHAFIALADQAFACAIABQAFAAAGgCQAEgBAEgDQAEgCABgEQACgDAAgGQAAgGgDgDIgHgGIgKgGIgLgEIgLgFQgHgCgEgFQgEgFgDgFQgDgHAAgIQAAgIADgGQADgHAGgGQAGgEAIgEQAJgDAKAAIALABIAJACIAHADIAFACIABACIABACIAAADIAAAEIAAAEIAAADIgCABIgBABIgEgCIgGgDIgJgDQgFgBgHgBIgJABQgFACgDADQgCACgCADQgCAEABADQAAAGACAEQADAEAFADQAEACAFACIAMAGIAMAFQAGACAEAEQAEAEAEAGQACAGAAAIQAAAKgDAHQgEAJgHAEQgHAGgIACQgKADgKAAIgMgBg");
	this.shape_73.setTransform(318.1,474.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgRBFIgLgDIgIgDIgFgDIgDgEIAAgHIAAgEIABgEIABgBIACgBIAEACIAIAFIAKADQAGACAJABQAEAAAFgCQAFgBADgDQAEgCACgEQACgDAAgGQAAgGgCgDIgIgGIgKgGIgLgEIgMgFQgFgCgFgFQgEgFgDgFQgDgHAAgIQAAgIADgGQADgHAFgGQAGgEAKgEQAIgDALAAIAJABIAKACIAHADIAEACIADACIAAACIABADIAAAEIAAAEIgBADIgCABIgBABIgDgCIgHgDIgJgDQgFgBgHgBIgJABQgFACgCADQgDACgCADQgBAEgBADQAAAGAEAEQACAEAEADQAFACAFACIAMAGIAMAFQAFACAFAEQAEAEADAGQADAGAAAIQAAAKgEAHQgDAJgGAEQgIAGgJACQgJADgKAAIgNgBg");
	this.shape_74.setTransform(306.8,474.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZBDQgIgCgGgFQgGgFgDgHQgDgIAAgJQAAgKAEgJQAFgHAIgFQAIgFAMgCQAMgDAOAAIARAAIAAgKQAAgHgBgGQgCgGgDgDQgEgEgFgCQgGgCgIAAQgIAAgGACQgHACgFADIgJAEIgFADIgCgBIgCgCIgBgDIAAgEIABgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAGgFIALgEIAOgEQAHgBAGAAQAOAAAKADQAJAEAGAFQAGAGADAJQACAKAAALIAABVIgBACIgDACIgGAAIgFAAIgEgCIgBgCIAAgMQgIAIgKAFQgLAFgKAAQgKAAgIgDgAgGAIQgIABgEADQgFADgCAFQgCAFAAAFQAAAKAGAGQAGAGAMAAQAIAAAIgFQAIgEAIgKIAAgbIgUAAQgJAAgGACg");
	this.shape_75.setTransform(293.775,474.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgFBjIgDgBIgCgBIgBgCIAAi8IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAC8IgBACIgCABIgDABIgGAAIgFAAg");
	this.shape_76.setTransform(283.925,471.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgcBcQgLgDgHgEQgHgFgDgGQgDgGAAgIIABgJIADgIIAGgIIAIgHQgHgEgDgFQgDgFAAgHQAAgHADgHQAEgHAFgFQgFgFgCgHQgDgHAAgJQAAgLAEgIQAEgJAGgGQAHgGAJgDQAJgDALAAIAKAAIAJACIAnAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIABAIIgBAHQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAQAFAFACAGQACAGAAAHQAAALgDAJQgEAIgGAGQgHAGgJADQgJADgKAAQgIAAgHgCQgHgCgEgDIgEAGQgCADAAADQAAAFAFADQAFAEAHAAIAhABQAJABAIACQAIACAGAFQAFAEAEAGQADAGAAAJQAAAJgEAIQgDAHgIAHQgIAFgLAEQgMADgPAAQgPAAgLgCgAgdAoIgEAGIgDAGIAAAGQAAAJAJAFQAJAFARAAQAKAAAHgCQAHgDAEgDQAFgDACgFQACgEAAgFQAAgIgHgFQgHgEgLAAIgggBIgIAGgAgOhJQgFACgEAEQgDAEgCAFQgBAFAAAGQAAANAHAHQAHAHANAAQAGAAAFgCQAFgCADgEQAEgEABgFQACgFAAgGQAAgNgHgHQgHgHgNAAQgGAAgFACg");
	this.shape_77.setTransform(273.725,477.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVBCQgMgFgIgIQgIgJgEgNQgFgNAAgRQAAgPAFgNQAEgOAIgJQAIgJALgFQAMgFANAAQAPAAAKAFQALAFAGAIQAHAIAEALQADALAAANIAAADQAAAFgDACQgDADgDAAIhTAAQAAAKACAJQACAJAFAFQAFAGAIAEQAIADAKAAIARgBIAMgEIAIgDIAFgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBACIgFADIgKADIgOADIgRABQgPAAgLgEgAgNgwQgGAEgFAFQgEAGgDAHQgCAHAAAIIBEAAQABgSgJgLQgJgLgRAAQgHAAgHADg");
	this.shape_78.setTransform(253.125,474.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAlBjIgDgBIgCgBIgBgCIAAhLQAAgLgBgGQgCgGgDgFQgDgFgFgCQgGgDgHAAQgHAAgJAGQgJAHgKALIAABZIAAACIgCABIgDABIgGAAIgGAAIgEgBIgBgBIgBgCIAAi8IABgCIABgCIAEgBIAGAAIAGAAIADABIACACIAAACIAABMQAKgLALgFQAKgFAKAAQAMAAAJAEQAIAFAGAHQAFAHADAKQACAIAAAOIAABOIAAACIgCABIgEABIgFAAIgHAAg");
	this.shape_79.setTransform(238.35,471.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AABBTQgGgCgEgGQgFgFgCgIQgCgIAAgLIAAhKIgSAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgCgCAAgGIABgEIABgDIABgCIACAAIASAAIAAgeIABgCIABgBIAEgBIAGgBIAFABIADABIACABIAAACIAAAeIAhAAIACAAIACACIAAADIABAEQAAAGgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIghAAIAABGQAAANAEAIQAEAGAKAAIAGgBIAEgBIAEgBIACgBIACABIABAAIAAADIABAFIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDADIgFABIgGACIgHAAQgKAAgHgDg");
	this.shape_80.setTransform(225.625,473);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgcBBQgLgEgIgJQgIgJgEgNQgEgNAAgQQAAgOAFgNQAEgOAIgJQAIgKAMgEQAMgGAPAAQAQAAAMAFQAMAEAHAJQAIAKAEAMQAEANAAAQQAAAOgEAOQgEAMgIAKQgJAKgMAFQgMAFgPAAQgQAAgMgFgAgQgtQgIADgFAHQgFAHgCAJQgCAJAAAKQAAAKACAJQACAKAEAHQAFAGAHAEQAIAEAKAAQAKAAAIgDQAHgEAFgGQAFgHACgKQADgJAAgKQAAgKgCgJQgCgJgFgHQgEgHgIgEQgHgEgLgBQgKAAgHAFg");
	this.shape_81.setTransform(206.775,474.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AABBTQgGgCgEgGQgFgFgCgIQgCgIAAgLIAAhKIgSAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgCgCAAgGIABgEIABgDIABgCIACAAIASAAIAAgeIABgCIABgBIAEgBIAGgBIAFABIADABIACABIAAACIAAAeIAhAAIACAAIACACIAAADIABAEQAAAGgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIghAAIAABGQAAANAEAIQAEAGAKAAIAGgBIAEgBIAEgBIACgBIACABIABAAIAAADIABAFIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDADIgFABIgGACIgHAAQgKAAgHgDg");
	this.shape_82.setTransform(194.375,473);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAlBFIgDgBIgCgBIAAgCIAAhKQAAgLgCgGQgCgHgDgFQgEgFgEgCQgFgDgHAAQgIAAgJAGQgJAHgJAMIAABYIgBACIgCABIgEABIgFAAIgGAAIgEgBIgCgBIAAgCIAAh/IAAgCIACgBIAEgBIAFAAIAFAAIADABIACABIAAACIAAARQALgMALgFQAKgGAKAAQANAAAJAEQAIAFAGAHQAFAHACAKQADAJAAAOIAABNIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_83.setTransform(182.4,474.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFBeIgDgBIgCgBIgBgCIAAh+IABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAB+IgBACIgCABIgDABIgGAAIgFAAgAgKhEQgDgDAAgIQAAgJADgCQADgDAHgBQAIABADADQADACAAAIQAAAJgDACQgDADgIABQgHAAgDgDg");
	this.shape_84.setTransform(171.425,472);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ABOBFIgFgBIgBgBIgBgCIAAhNIgBgOQgBgHgEgFQgDgFgEgCQgGgDgGAAQgIAAgIAGQgJAHgJAMIAABYIgBACIgCABIgDABIgGAAIgEAAIgEgBIgCgBIAAgCIAAhNQgBgIgBgGQgCgHgDgFQgDgFgFgCQgFgDgGAAQgIAAgIAGQgJAHgJAMIAABYIgBACIgCABIgDABIgGAAIgGAAIgDgBIgCgBIAAgCIAAh/IAAgCIACgBIADgBIAGAAIAEAAIAEABIABABIABACIAAARQALgMAJgFQALgGAKAAQAIAAAGACIALAFQAGADABAFQAEAEADAGIALgMIAMgHIAKgFIAKgBQANAAAHAEQAJAFAFAHQAGAHABAKQADAJAAALIAABQIgBACIgCABIgDABIgGAAIgFAAg");
	this.shape_85.setTransform(150,474.525);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgVBCQgMgFgIgIQgIgJgEgNQgFgNAAgRQAAgPAFgNQAEgOAIgJQAIgJALgFQAMgFANAAQAPAAAKAFQALAFAGAIQAHAIAEALQADALAAANIAAADQAAAFgDACQgDADgDAAIhTAAQAAAKACAJQACAJAFAFQAFAGAIAEQAIADAKAAIARgBIAMgEIAIgDIAFgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBACIgFADIgKADIgOADIgRABQgPAAgLgEgAgNgwQgGAEgFAFQgEAGgDAHQgCAHAAAIIBEAAQABgSgJgLQgJgLgRAAQgHAAgHADg");
	this.shape_86.setTransform(131.125,474.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAlBjIgDgBIgCgBIAAgCIAAhLQgBgLgBgGQgCgGgDgFQgEgFgFgCQgFgDgGAAQgJAAgIAGQgJAHgJALIAABZIgBACIgCABIgEABIgFAAIgGAAIgEgBIgCgBIAAgCIAAi8IAAgCIACgCIAEgBIAGAAIAFAAIAEABIACACIABACIAABMQAKgLAKgFQAKgFAJAAQANAAAJAEQAIAFAGAHQAFAHACAKQADAIAAAOIAABOIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_87.setTransform(116.35,471.525);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AABBTQgGgCgEgGQgFgFgCgIQgCgIAAgLIAAhKIgSAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgCgCAAgGIABgEIABgDIABgCIACAAIASAAIAAgeIABgCIABgBIAEgBIAGgBIAFABIADABIACABIAAACIAAAeIAhAAIACAAIACACIAAADIABAEQAAAGgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIghAAIAABGQAAANAEAIQAEAGAKAAIAGgBIAEgBIAEgBIACgBIACABIABAAIAAADIABAFIgBAGQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgDADIgFABIgGACIgHAAQgKAAgHgDg");
	this.shape_88.setTransform(103.625,473);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AguBfIgGAAIgDgCIgCgBIgBgCIAAixIABgCIACgBIADgBIAFAAIAFAAIADABIACABIAAACIAAARIALgKIALgIQAFgDAGgBQAFgBAGAAQAOgBAKAGQAKAGAGAJQAGAJADAMQADANAAAOQAAARgEAMQgEANgGAJQgIAKgKAFQgKAEgOAAIgJgBIgJgDIgKgGIgJgJIAABAIgBACIgCABIgDACIgGAAgAgFhIIgJAEIgKAIIgKAMIAAAxQAJAMAJAGQAJAHAIAAQAJAAAHgFQAGgEAEgHQAEgHACgIQABgJAAgJQAAgJgBgKQgCgIgDgHQgEgIgGgEQgGgEgJAAIgIABg");
	this.shape_89.setTransform(85.225,477.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgcBBQgLgEgIgJQgIgJgEgNQgEgNAAgQQAAgOAFgNQAEgOAIgJQAIgKAMgEQAMgGAPAAQAQAAAMAFQAMAEAHAJQAIAKAEAMQAEANAAAQQAAAOgEAOQgEAMgIAKQgJAKgMAFQgMAFgPAAQgQAAgMgFgAgQgtQgIADgFAHQgFAHgCAJQgCAJAAAKQAAAKACAJQACAKAEAHQAFAGAHAEQAIAEAKAAQAKAAAIgDQAHgEAFgGQAFgHACgKQADgJAAgKQAAgKgCgJQgCgJgFgHQgEgHgIgEQgHgEgLgBQgKAAgHAFg");
	this.shape_90.setTransform(69.525,474.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgeBFIgEgBIgCgBIAAgCIAAh/IAAgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIAAATIAKgNIAIgHIAIgEIAIgBIAEAAIAFABIAFABIACACIACABIAAACIAAADIAAAFIAAAFIAAADIgBACIgCABIgDgBIgEgBIgEgBIgGgBIgHABQgDACgEADQgDADgEAGIgJANIAABTIAAACIgCABIgEABIgFAAIgGAAg");
	this.shape_91.setTransform(58.125,474.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag8BbQgEAAgCgCQgDgCAAgGIAAiiQAAgGADgCQACgBAEgBIApAAQAXAAAQAHQARAFALAMQALAMAGAQQAFAQAAAVQAAAXgGASQgGARgLANQgMALgRAGQgRAFgXAAgAgtBHIAZAAQASAAALgEQAMgFAIgJQAIgJAEgNQAEgOAAgSQAAgPgEgMQgDgNgIgKQgIgJgMgFQgLgFgTgBIgZAAg");
	this.shape_92.setTransform(43.875,472.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgOAQQgEgDAAgMQAAgMAEgEQAEgFAKAAQALAAAEAFQAEADAAAMQAAAMgEAEQgFAFgKAAQgKAAgEgFg");
	this.shape_93.setTransform(649.1,440.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape_94.setTransform(642.925,433.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_95.setTransform(626.625,433.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgFgHgDgKQgCgKAAgOIAAhbIgXAAQgDAAgBgDQgBgDAAgGIAAgGIABgEIACgCIACAAIAXAAIAAgmIAAgCIACgCIAEgBIAHgBIAIABIAEABIACACIABACIAAAmIAoAAIADAAIACACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQAAAQAEAJQAFAIAMAAIAHgBIAGgCIAEgBIAEgBIACABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgFADIgFACIgIABIgIABQgNAAgJgDg");
	this.shape_96.setTransform(611.8,431.725);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggBTQgJgDgIgGQgHgGgEgJQgEgJAAgMQAAgNAFgJQAGgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgBgGgFgFQgEgEgHgDQgHgDgKABQgJgBgJADQgJADgGADIgLAFQgEADgCAAIgDgBIgCgCIgBgEIAAgFIAAgGQABgDADgCIAIgFIANgGIARgEQAJgCAIAAQAQAAAMAEQAMADAIAJQAHAHADAKQAEAMAAAPIAABqQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgIAAIgGAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgQQgKAKgNAHQgNAGgNAAQgMAAgLgEgAgIAJQgJACgGAEQgGAEgDAGQgCAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAKgGAKgMIAAghIgYAAQgMAAgIACg");
	this.shape_97.setTransform(597.25,433.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AA0BUIgJAAIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgDIgghxIAAgCIgBACIgeBxIgCADIgEACIgFABIgJAAIgJAAIgGgBIgDgCIgCgDIguiVIgBgFIAAgDIAAgCIADgBIAEgBIAHAAIAIAAIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABACIAmCCIAAABIABgBIAjiCIABgCIACgCIAFgBIAGAAIAHAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIABABIAmCDIAAABIABgBIAliCIACgCIACgCIAFgBIAHAAIAHAAIAEABIACABIAAACIAAADIgBAFIgvCVIgBADIgDACIgGABIgJAAg");
	this.shape_98.setTransform(576.675,433.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgRB7IgFgBIgCgCIgBgCIAAiKIgWAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgCABgGIAAgGIABgEIABgCIADAAIAWAAIAAgRQAAgQADgMQAEgMAGgIQAGgIAJgDQAJgDAOAAIALABIAJACIAEADIADACIABAEIAAAGIgBAGIAAADIgBABIgDAAIgDAAIgEgCIgGgBIgIgBQgHAAgEACQgFABgDAGQgDAEgBAHQgCAHAAAKIAAASIAkAAIACAAIACACIACAEIAAAGQAAAGgCACQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgkAAIAACKIAAACIgCACIgEABIgHAAIgHAAg");
	this.shape_99.setTransform(550.65,429.85);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgjBRQgPgGgJgLQgJgLgGgQQgEgPAAgVQAAgSAFgQQAFgRAKgLQAKgMAPgHQAPgGAUAAQATAAAPAGQAOAGAJALQAKALAGAQQAEAQAAATQAAATgFAQQgFAQgKAMQgLALgPAIQgPAGgTAAQgUAAgOgGgAgVg5QgJAFgGAIQgHAIgCALQgDAMAAANQAAAMACAMQADAMAFAIQAGAJAJAEQAKAGANAAQANgBAJgEQAJgEAGgJQAHgIACgLQADgMAAgOQAAgMgCgLQgDgMgFgIQgGgJgJgEQgJgGgOAAQgNABgJAEg");
	this.shape_100.setTransform(535.15,433.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_101.setTransform(508.525,433.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhAB1IgFgBIgCgCIgBgCIAAjcIABgDIACgCIAEAAIAGgBIAGABIAEAAIACACIABADIAAAVIAOgNQAGgFAHgEQAHgEAHgBQAGgCAIAAQARAAAMAGQAMAHAIAMQAIALADAQQAEAPAAARQAAAVgFAQQgEAQgJAMQgJALgNAGQgMAHgRAAQgGAAgGgCQgGgBgFgDQgGgDgGgFIgMgKIAABPIgBACIgCACIgEABIgHAAIgHAAgAgHhaIgLAGQgGADgGAGIgNAPIAAA+QAMAOALAIQALAIALAAQALAAAHgGQAIgFAFgJQAFgIACgKQADgLAAgLQAAgMgCgMQgCgLgFgJQgEgJgIgFQgHgFgMAAIgKABg");
	this.shape_102.setTransform(490.725,436.775);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgdB0IgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgEIAVg3IgDgDIgBgDIg5iWIgCgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgCIAIAAIAIAAIAFABIADACIABAEIAtB+IAAAAIAsh/IACgEIAEgCIAJAAIAIAAIAFACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBAEIg4CdIgVA6QgBADgEACQgFABgIAAIgIAAg");
	this.shape_103.setTransform(472.6,436.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AABBoQgHgEgGgGQgGgHgCgKQgDgKAAgOIAAhbIgWAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQgCgDAAgGIABgGIABgEIACgCIADAAIAVAAIAAgmIABgCIACgCIAEgBIAHgBIAIABIADABIADACIABACIAAAmIAoAAIACAAIADACIABAEIAAAGQgBAGgBADQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAIgoAAIAABXQgBAQAFAJQAFAIAMAAIAIgBIAFgCIAFgBIACgBIADABIABABIABADIAAAGIgBAIQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgEADIgHACIgIABIgHABQgNAAgJgDg");
	this.shape_104.setTransform(458.15,431.725);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_105.setTransform(435.275,433.75);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAuBVIgEgBIgCgBIgBgDIAAhbQAAgOgCgIQgCgIgEgGQgEgGgHgDQgGgEgJAAQgJAAgLAIQgLAIgMAPIAABtIgBADIgCABIgEABIgHABIgIgBIgEgBIgDgBIAAgDIAAidIAAgCIADgCIAEgBIAGAAIAGAAIAFABIABACIABACIAAAVQAOgPANgHQANgHAMAAQAQAAALAGQALAFAGAJQAIAJACAMQADAMAAARIAABfIgBADIgCABIgEABIgHABIgIgBg");
	this.shape_106.setTransform(417,433.625);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgjBRQgPgGgJgLQgJgLgGgQQgEgPAAgVQAAgSAFgQQAFgRAKgLQAKgMAPgHQAQgGATAAQATAAAPAGQAOAGAJALQALALAEAQQAFAQAAATQAAATgFAQQgFAQgKAMQgKALgQAIQgPAGgTAAQgTAAgPgGgAgVg5QgJAFgGAIQgGAIgDALQgDAMAAANQAAAMADAMQACAMAFAIQAGAJAJAEQAJAGAOAAQANgBAJgEQAJgEAGgJQAHgIACgLQADgMAAgOQAAgMgCgLQgDgMgFgIQgGgJgJgEQgKgGgNAAQgNABgJAEg");
	this.shape_107.setTransform(398,433.75);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("ABgBVIgFgBIgCgBIgBgDIAAhfQAAgKgCgIQgBgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgNAPIAABtIAAADIgDABIgEABIgHABIgGgBIgFgBIgCgBIgBgDIAAhfQAAgKgBgIQgCgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgMAPIAABtIgBADIgCABIgFABIgHABIgHgBIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAVQANgPANgHQAMgHANAAQAKAAAIADQAIACAGAEQAGAEADAGQAEAGADAHIAPgPQAHgGAHgEQAGgDAHgCQAGgCAGAAQAPAAALAGQAKAFAHAJQAGAJADAMQACAMAAANIAABjIAAADIgDABIgEABIgHABIgHgBg");
	this.shape_108.setTransform(366.025,433.625);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgjBRQgPgGgJgLQgJgLgGgQQgEgPAAgVQAAgSAFgQQAFgRAKgLQAKgMAPgHQAPgGAUAAQATAAAPAGQAOAGAJALQALALAFAQQAEAQAAATQAAATgFAQQgFAQgKAMQgLALgPAIQgPAGgTAAQgUAAgOgGgAgVg5QgJAFgGAIQgGAIgDALQgDAMAAANQAAAMACAMQADAMAFAIQAGAJAJAEQAKAGANAAQAMgBAKgEQAJgEAGgJQAHgIACgLQADgMAAgOQAAgMgCgLQgDgMgFgIQgGgJgJgEQgJgGgOAAQgNABgJAEg");
	this.shape_109.setTransform(342.1,433.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAXQAGgJAGgGQAGgGAEgEQAFgDAFgBQAFgCAFAAIAFABIAGAAIAGACIAEACIABACIABACIAAADIAAAHIAAAGIgBAEIgBADIgCAAIgEAAIgEgCIgGgCIgHAAQgEAAgEABQgFACgEAEQgEAEgFAHIgLAQIAABnIgBADIgCABIgFABIgHABIgHgBg");
	this.shape_110.setTransform(327.975,433.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgRB7IgFgBIgCgCIAAgCIAAiKIgXAAQgCAAgCgDQgCgCABgGIAAgGIABgEIABgCIADAAIAXAAIAAgRQAAgQACgMQADgMAHgIQAGgIAJgDQAJgDAOAAIAMABIAJACIADADIADACIABAEIAAAGIgBAGIAAADIgCABIgCAAIgCAAIgFgCIgGgBIgIgBQgHAAgEACQgGABgCAGQgDAEgBAHQgBAHgBAKIAAASIAkAAIACAAIACACIACAEIAAAGQAAAGgCACQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgkAAIAACKIAAACIgCACIgEABIgHAAIgHAAg");
	this.shape_111.setTransform(315.65,429.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_112.setTransform(292.525,433.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AglB1QgNgHgHgLQgIgMgDgPQgEgQAAgRQAAgVAFgQQAEgQAJgLQAIgMANgGQANgGAQAAQANAAAMAGQALAGALAMIAAhcIABgDIACgBIAFgBIAHgBIAHABIAFABIACABIABADIAADpIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAgVQgNANgNAIQgOAIgPAAQgRAAgMgHgAgUgTQgIAFgEAJQgFAHgDALQgCALAAAMQAAALACAMQACALAEAJQAFAJAIAGQAHAFAMAAIAKgCQAFgBAGgEQAFgEAGgGQAHgGAGgIIAAg/QgLgOgLgIQgLgHgLAAQgLAAgIAFg");
	this.shape_113.setTransform(273.725,430.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgfBTQgKgDgIgGQgHgGgEgJQgEgJAAgMQAAgNAGgJQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgEgHgDQgHgDgKABQgJgBgJADQgIADgHADIgLAFQgEADgCAAIgDgBIgCgCIgBgEIAAgFIAAgGQABgDADgCIAHgFIAOgGIARgEQAIgCAJAAQAQAAAMAEQAMADAIAJQAHAHADAKQAEAMAAAPIAABqQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgIAAIgGAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgQQgKAKgNAHQgMAGgOAAQgMAAgKgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgMIAAghIgYAAQgMAAgJACg");
	this.shape_114.setTransform(255.6,433.75);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("ABgBVIgFgBIgCgBIgBgDIAAhfQAAgKgCgIQgBgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgNAPIAABtIAAADIgDABIgEABIgHABIgGgBIgFgBIgCgBIgBgDIAAhfQAAgKgBgIQgCgIgEgGQgEgGgGgDQgGgEgIAAQgKAAgKAIQgKAIgMAPIAABtIgBADIgCABIgFABIgHABIgHgBIgEgBIgDgBIAAgDIAAidIAAgCIACgCIAEgBIAHAAIAGAAIAEABIACACIABACIAAAVQANgPANgHQAMgHANAAQAKAAAIADQAIACAGAEQAGAEADAGQAEAGADAHIAPgPQAHgGAHgEQAGgDAHgCQAGgCAGAAQAPAAALAGQAKAFAHAJQAGAJADAMQACAMAAANIAABjIAAADIgDABIgEABIgHABIgHgBg");
	this.shape_115.setTransform(233.175,433.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgGB7IgEgBIgDgCIgBgDIAAjpIABgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBIAGgBIAHABIAEABIACACIACACIAADpIgCADIgCACIgEABIgHAAIgGAAg");
	this.shape_116.setTransform(206.5,429.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGB7IgFgBIgCgCIAAgDIAAjpIAAgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAFgBIAGgBIAHABIAFABIACACIABACIAADpIgBADIgCACIgFABIgHAAIgGAAg");
	this.shape_117.setTransform(198.25,429.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgIgGgEgJQgEgJAAgMQAAgNAGgJQAFgKALgGQAJgGAPgDQAPgEARAAIAWAAIAAgMQAAgJgCgIQgCgGgEgFQgEgEgHgDQgHgDgKABQgJgBgJADQgIADgHADIgLAFQgEADgCAAIgDgBIgCgCIgBgEIAAgFIAAgGQABgDADgCIAHgFIAOgGIARgEQAIgCAJAAQAQAAAMAEQAMADAIAJQAHAHADAKQAEAMAAAPIAABqQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgIAAIgGAAIgFgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgQQgKAKgNAHQgNAGgNAAQgMAAgKgEgAgJAJQgIACgGAEQgFAEgDAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgMIAAghIgYAAQgMAAgJACg");
	this.shape_118.setTransform(184.95,433.75);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgVBVIgOgDIgKgEIgGgEQgCgCgBgDIgBgIIABgGIAAgEIACgCIACgBQACAAAEADIAJAFQAFADAJADQAHABAJABQAHgBAGgBQAGgBAEgEQAFgCADgGQABgEAAgHQAAgGgDgFQgDgEgGgEQgFgEgIgCIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgIAAgKQAAgJAEgJQADgJAIgGQAGgHAMgDQALgEANAAIAMABIAMADIAIADIAGADIACADIABADIABACIAAAFIAAAFIgBAEIgCACIgBAAIgFgBIgHgFIgMgEQgHgBgHAAQgHAAgGABQgFACgEADQgEADgBAEQgCAEAAAFQAAAHAEAFQADAEAGAEIALAGIAPAGIAPAHQAHACAGAGQAFAFAEAIQADAHAAAKQAAAMgEAJQgFAKgIAGQgJAHgLADQgLAEgNAAQgIAAgIgCg");
	this.shape_119.setTransform(161.6,433.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGB1IgEgBIgDgCIAAgCIAAidIAAgDIADgBIAEgBIAGgBIAHABIAFABIACABIABADIAACdIgBACIgCACIgFABIgHAAIgGAAgAgNhVQgEgDAAgKQAAgLAEgDQAEgEAJAAQAKAAAEAEQAEADAAAKQAAAKgEAEQgEAEgKAAQgJAAgEgEg");
	this.shape_120.setTransform(150.475,430.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_121.setTransform(129.225,433.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgLgFgQQgEgQAAgUQAAgXAFgQQAGgRAKgKQAKgMANgEQAOgGAOAAIAPABIANAFQAGABAFADIAHAGIADADIABADIAAADIABAGQAAAHgCADQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQgCAAgEgCIgJgHQgFgDgHgEQgIgDgKAAQgUAAgLARQgLAQAAAdQAAAPADANQADALAFAHQAGAIAIAEQAHADALABQAKAAAHgEQAIgDAGgDIAJgHQAEgDACAAIACABIABACIABAEIAAAGIAAAGIAAADIgBACIgDAEIgIAFIgMAGIgOAEQgIACgIAAQgQAAgNgGg");
	this.shape_122.setTransform(112.925,433.75);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgGB1IgEgBIgDgCIAAgCIAAidIAAgDIADgBIAEgBIAGgBIAHABIAFABIACABIABADIAACdIgBACIgCACIgFABIgHAAIgGAAgAgNhVQgEgDAAgKQAAgLAEgDQAEgEAJAAQAKAAAEAEQAEADAAAKQAAAKgEAEQgEAEgKAAQgJAAgEgEg");
	this.shape_123.setTransform(100.975,430.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgbBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgLQAKgMAOgGQAOgGAQAAQATAAANAGQANAGAIAKQAJAKAEAOQAEAOAAAPIAAAFQAAAGgEADQgDADgFAAIhnAAQAAANADAKQACALAHAHQAGAIAKAEQAKAEANABQALgBAJgBIAPgFIALgDIAGgCIACAAIACACIABADIAAAGIAAADIgBAEIAAACIgCACIgGADIgMAEIgSAEQgKACgLAAQgSAAgPgGgAgQg8QgIAFgGAGQgGAHgDAJQgCAJgBAJIBVAAQABgXgLgNQgKgNgVABQgKAAgIADg");
	this.shape_124.setTransform(79.725,433.75);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAuB7IgEgBIgCgCIgBgDIAAhcQAAgNgCgJQgCgHgEgGQgEgGgGgDQgHgDgIAAQgKAAgLAHQgLAIgMAOIAABuIgBADIgCACIgFABIgHAAIgGAAIgFgBIgCgCIgBgDIAAjpIABgCQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAFgBIAGgBIAHABIAFABIACACIABACIAABfQAMgOANgGQANgGAMAAQAPgBALAGQALAFAGAJQAHAJAEAMQACALAAASIAABfIAAADIgDACIgFABIgHAAIgHAAg");
	this.shape_125.setTransform(61.45,429.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgGByIgFgBIgCgCIgBgCIAAjFIhAAAIgDAAIgCgCIgBgEIAAgGIAAgGIABgEIACgDIADAAICdAAIADAAIACADIABAEIAAAGIAAAGIgBAEIgCACIgDAAIhAAAIAADFIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_126.setTransform(43.175,430.775);

	this.i_2 = new lib.Symbol3();
	this.i_2.name = "i_2";
	this.i_2.setTransform(928,521.75,1.3968,1.3968,0,0,0,52.1,43.4);
	this.i_2.alpha = 0.6992;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgMBIQgDgCABgDIAGgzIgqAeQgBAAAAABQgBAAAAAAQgBAAgBAAQAAgBgBAAQgDgCgEgHQgFgIAAgDQAAgEACgBIAwgVIgwgUQgCgBAAgDQAAgEAFgHQAEgIADgCQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAIAqAeIgGgzQgBgDADgBQAEgCAIAAQAJAAADACQADABgBADIgFAzIApgeQADgBADABQADACAEAIQAEAHABAEQAAADgCABIgwAUIAwAVQACABAAAEQgBADgEAIQgEAHgDACQgDACgDgCIgpgeIAFAzQABADgDACQgDABgJAAQgIAAgEgBg");
	this.shape_127.setTransform(924.4,26.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgzB6QgUgJgOgQQgOgQgGgYQgHgYAAggQAAgcAHgZQAIgYANgRQAPgRAWgJQAVgKAdAAQAbAAAVAJQAVAIAOAQQANAQAHAYQAHAXAAAfQAAAegIAYQgGAZgPASQgOARgWAJQgVAJgdAAQgcAAgVgIgAgjhcQgPAIgJAOQgJAOgFASQgDASAAAUQgBAVAEATQAEATAJANQAIAOAPAIQAPAHAWAAQAVAAAPgIQAPgJAJgNQAJgOAFgSQAEgTAAgUQAAgVgEgSQgFgTgIgOQgJgNgPgHQgPgIgWAAQgUAAgPAIg");
	this.shape_128.setTransform(901.25,34);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgsBTIgDAAIgBgCIgCgDIAAgEIAAgFIABgDIABgDIACgDIAigiIARgVIAKgQQAEgHACgHIABgLQAAgGgCgFQgCgEgEgEQgDgEgGgCQgEgCgGAAQgJAAgGACIgLAFIgIAEIgFADIgCgBIgBgCIAAgDIgBgEIAAgEIABgCIABgCIACgCIAFgEIAJgEIANgEQAHgBAHAAQAMAAAIADQAJADAGAGQAGAGADAIQADAHAAAJQAAAIgCAIQgBAIgFAJQgEAIgJALQgIALgOAPIgZAbIBHAAIACAAIABACIABADIAAAEIAAAEIgBADIgBACIgCAAg");
	this.shape_129.setTransform(881.45,42.075);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAB/IgHAAIgGgCQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgCIAAjaIhHAAIgCgBIgDgDIgBgEIgBgHIABgGIABgFIADgCIACgBICvAAIADABIACACIABAFIAAAGIAAAHIgBAEIgCADIgDABIhHAAIAADaIgBACIgDACIgFACIgIAAg");
	this.shape_130.setTransform(865.1,34.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgzB6QgVgJgNgQQgOgQgHgYQgGgYAAggQAAgcAHgZQAHgYAPgRQAOgRAWgJQAWgKAbAAQAdAAAUAJQAVAIANAQQAOAQAHAYQAHAXAAAfQAAAegHAYQgIAZgOASQgPARgVAJQgWAJgbAAQgdAAgVgIgAgjhcQgPAIgKAOQgIAOgEASQgFASAAAUQAAAVAEATQAEATAIANQAKAOAOAIQAPAHAWAAQAVAAAPgIQAPgJAKgNQAIgOAEgSQAEgTABgUQgBgVgEgSQgDgTgJgOQgJgNgPgHQgPgIgWAAQgUAAgPAIg");
	this.shape_131.setTransform(554.8,34);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgsBTIgCAAIgDgCIgBgDIgBgEIAAgFIABgDIACgDIADgDIAggiIASgVIALgQQADgHABgHIABgLQAAgGgCgFQgBgEgDgEQgEgEgFgCQgFgCgHAAQgHAAgHACIgLAFIgIAEIgFADIgBgBIgBgCIgBgDIAAgEIAAgEIAAgCIABgCIACgCIAGgEIAJgEIAMgEQAHgBAIAAQAKAAAKADQAIADAGAGQAGAGADAIQADAHAAAJQAAAIgBAIQgCAIgFAJQgEAIgIALQgJALgOAPIgZAbIBGAAIACAAIACACIABADIABAEIgBAEIgBADIgCACIgCAAg");
	this.shape_132.setTransform(535,42.075);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AhUB+QgEAAgEgDQgEgDAAgHIAAjhQAAgHAEgDQAEgDAEAAIA6AAQAfAAAXAIQAXAJAPAQQAPAPAIAXQAIAXAAAcQAAAggIAZQgJAYgQAQQgQAQgXAIQgYAIgfAAgAg/BiIAjAAQAYAAAQgGQAQgGAMgMQALgNAFgTQAGgTAAgYQAAgVgFgSQgFgRgLgNQgLgNgRgHQgPgIgaAAIgjAAg");
	this.shape_133.setTransform(516.875,34.025);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgzB6QgVgJgNgQQgOgQgGgYQgHgYAAggQAAgcAHgZQAHgYAOgRQAPgRAWgJQAWgKAbAAQAcAAAVAJQAVAIANAQQAPAQAGAYQAHAXAAAfQAAAegHAYQgIAZgOASQgPARgVAJQgWAJgbAAQgdAAgVgIgAgjhcQgPAIgKAOQgJAOgDASQgFASAAAUQABAVADATQAEATAJANQAJAOAOAIQAPAHAWAAQAVAAAPgIQAPgJAKgNQAIgOAFgSQADgTAAgUQAAgVgDgSQgEgTgJgOQgJgNgPgHQgPgIgVAAQgWAAgOAIg");
	this.shape_134.setTransform(205.95,34);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgrBTIgDAAIgDgCIgBgDIgBgEIAAgFIABgDIACgDIADgDIAggiIASgVIALgQQADgHABgHIABgLQAAgGgCgFQgBgEgEgEQgDgEgGgCQgEgCgHAAQgHAAgHACIgLAFIgIAEIgEADIgCgBIgBgCIgBgDIgBgEIAAgEIABgCIABgCIACgCIAFgEIAJgEIANgEQAHgBAHAAQALAAAKADQAIADAGAGQAGAGADAIQADAHAAAJQAAAIgBAIQgCAIgEAJQgFAIgJALQgIALgOAPIgZAbIBHAAIABAAIACACIABADIABAEIgBAEIgBADIgCACIgBAAg");
	this.shape_135.setTransform(186.15,42.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("ABKB/IgHAAIgGgBIgCgCIgBgCIAAhxIhyAAIAABxIgBACIgDACIgFABIgIAAIgIAAIgGgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgCIAAjyIABgDIACgCIAGgBIAIgBIAIABIAFABIADACIABADIAABlIByAAIAAhlIABgDIACgCIAGgBIAHgBIAIABIAGABIACACIABADIAADyIgBACIgCACIgGABIgIAAg");
	this.shape_136.setTransform(167.1,34);

	this.i_0 = new lib.Symbol3();
	this.i_0.name = "i_0";
	this.i_0.setTransform(782.75,498.85,1.3968,1.3968,0,0,0,52.1,43.4);
	this.i_0.alpha = 0.6992;

	this.i_1 = new lib.Symbol3();
	this.i_1.name = "i_1";
	this.i_1.setTransform(883.65,460.2,1.3968,1.3968,0,0,0,52.1,43.4);
	this.i_1.alpha = 0.6992;

	this.glass_2 = new lib.glass();
	this.glass_2.name = "glass_2";
	this.glass_2.setTransform(885,212.2,1,1,0,0,0,0,36.4);
	this.glass_2.alpha = 0.6992;

	this.glass_1 = new lib.glass();
	this.glass_1.name = "glass_1";
	this.glass_1.setTransform(536,212.2,1,1,0,0,0,0,36.4);
	this.glass_1.alpha = 0.6992;

	this.glass_0 = new lib.glass();
	this.glass_0.name = "glass_0";
	this.glass_0.setTransform(187,212.2,1,1,0,0,0,0,36.4);
	this.glass_0.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glass_0},{t:this.glass_1},{t:this.glass_2},{t:this.i_1},{t:this.i_0},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.i_2},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.ch_btn},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(558,308.1,465.6,286.1);
// library properties:
lib.properties = {
	id: 'CA6553225447074593F0FE7D210CA47E',
	width: 1072,
	height: 603,
	fps: 30,
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
an.compositions['CA6553225447074593F0FE7D210CA47E'] = {
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