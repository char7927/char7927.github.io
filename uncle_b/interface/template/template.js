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


(lib.response_text = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#990000").s().p("AgSDEQgIgCgFgFQgEgEgCgIQgCgJAAgLQAAgMACgIQACgIAEgFQAFgFAIgCQAHgCALgBQALABAIACQAIACAFAFQAEAFACAIQACAIAAAMQAAALgCAJQgCAIgEAEQgFAFgIACQgIACgLAAQgLAAgHgCgAgOBWIgKgDQgDgBgBgDQgCgCAAgDIgHkAQAAgEACgDQABgDAEgBQAFgCAIgBIARgBIATABQAHABAEACQAFABACADQACADgBAEIgHEAQAAADgCACQgBADgDABIgKADIgPAAIgOAAg");
	this.shape.setTransform(129.9,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgSDEQgIgCgFgFQgEgEgCgIQgCgJAAgLQAAgMACgIQACgIAEgFQAFgFAIgCQAHgCALgBQALABAIACQAIACAFAFQAEAFACAIQACAIAAAMQAAALgCAJQgCAIgEAEQgFAFgIACQgIACgLAAQgLAAgHgCgAgOBWIgKgDQgDgBgBgDQgCgCAAgDIgHkAQAAgEACgDQABgDAEgBQAFgCAIgBIARgBIATABQAHABAEACQAFABACADQACADgBAEIgHEAQAAADgCACQgBADgDABIgKADIgPAAIgOAAg");
	this.shape_1.setTransform(111,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgSDEQgIgCgFgFQgEgEgCgIQgCgJAAgLQAAgMACgIQACgIAEgFQAFgFAIgCQAHgCALgBQALABAIACQAIACAFAFQAEAFACAIQACAIAAAMQAAALgCAJQgCAIgEAEQgFAFgIACQgIACgLAAQgLAAgHgCgAgOBWIgKgDQgDgBgBgDQgCgCAAgDIgHkAQAAgEACgDQABgDAEgBQAFgCAIgBIARgBIATABQAHABAEACQAFABACADQACADgBAEIgHEAQAAADgCACQgBADgDABIgKADIgPAAIgOAAg");
	this.shape_2.setTransform(92.1,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AhFC9QgUgLgNgTQgNgTgFgZQgGgaAAgcQAAghAHgcQAHgaAOgSQAOgUAVgJQAVgLAaAAQAVAAARAJQARAJARAQIAAiJQAAgDACgCQABgCAFgCIAKgCIASgBIARABIALACQAEACABACQACACAAADIAAFzQAAADgBACIgFADIgJADIgPAAIgOAAQgGgBgEgCIgFgDQgBgCAAgDIAAgcQgUAVgVAMQgWALgZAAQgdAAgTgLgAgZgRQgKAIgGAKQgHALgCAPQgEAOAAAPQAAAQADAPQADAPAGAMQAFALAKAIQAJAGAPAAQAHAAAHgCQAGgBAIgGQAHgEAIgIIAQgTIAAhUQgPgSgOgLQgOgJgOgBQgOAAgKAHg");
	this.shape_3.setTransform(65.325,36.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AgvCGQgagIgQgSQgRgRgJgbQgIgaAAgjQAAghAIgbQAKgbAQgTQARgSAYgLQAYgKAdABQAfgBAXAKQAXAJAOARQAPARAGAWQAHAXAAAbIAAAKQAAAMgFAHQgHAGgKAAIiZAAQAAARAFAMQADANAJAKQAIAJANAFQANAFASAAQASAAAOgDQAOgDALgDIARgGQAHgCAEAAIAFABIACADQACADAAAEIAAAMIAAALIgBAHIgCAGIgCADQgCADgIADIgWAHIgdAFQgRADgSAAQghAAgZgJgAgThWQgKAFgHAJQgHAJgDALQgEAMgBAOIBqAAQABgegNgRQgNgSgbAAQgNAAgJAFg");
	this.shape_4.setTransform(35.85,42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("Ag+CMIgKgDQgFgBgBgCQgCgDAAgCIAAj8QAAgDABgBQACgDADgBIAKgCIAPgBIAPABIAJACQADABABADQACABAAADIAAAgQAKgOAJgKQAHgJAIgFQAIgGAIgBQAIgDAIAAIAIABIAJABIAIACIAFADIACADIABAFIABAIIAAARIAAARQgBAGgBAEIgDAFIgFABIgFAAIgGgDIgIgCIgJgBQgGAAgGACQgGADgGAFQgHAFgHAJQgGAIgIANIAACcIgBAFIgGADQgEACgHABIgRAAIgSAAg");
	this.shape_5.setTransform(12.425,42.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AgvCGQgagIgRgSQgQgRgJgbQgIgaAAgjQAAghAIgbQAJgbARgTQARgSAYgLQAYgKAdABQAfgBAXAKQAXAJAOARQAOARAHAWQAHAXAAAbIAAAKQAAAMgGAHQgFAGgLAAIiZAAQAAARAFAMQADANAIAKQAJAJANAFQANAFARAAQATAAAPgDQAOgDAKgDIARgGQAHgCAEAAIAEABIADADQACADAAAEIAAAMIAAALIgBAHIgCAGIgCADQgDADgHADIgWAHIgdAFQgRADgSAAQghAAgZgJgAgThWQgKAFgHAJQgHAJgDALQgEAMgBAOIBqAAQABgegNgRQgNgSgbAAQgMAAgKAFg");
	this.shape_6.setTransform(-13.9,42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("Ag+C6QgXgGgOgJQgPgJgGgMQgHgNAAgPQAAgJACgJQADgIAFgIQAFgIAGgHIAQgOQgMgGgHgLQgHgLAAgOQAAgRAIgMQAIgOALgLQgJgKgGgOQgGgOAAgUQAAgXAIgRQAIgSAOgLQANgNAUgFQASgIAYAAQALABALABIAUAEIBQAAQAFAAADAGQADAHAAAPQAAANgDAGQgDAHgFAAIgdAAQAFAHAEAIQACAJAAAJQAAAXgIARQgGAQgOAMQgOAMgUAGQgTAGgXABQgMAAgLgEQgLgDgGgDQgDADgDAGQgDAEAAAGQAAAIAIAFQAGAFAOABIA8ACQAWABAQAGQARAEAMAKQAMAKAFANQAHANAAARQgBASgHARQgJARgRAMQgQAMgYAIQgZAGghAAQggAAgXgEgAguBWQgFAFgCAEQgDAFgBAEIgBAJQAAAOAOAHQAPAIAZgBQAQAAALgCQALgEAGgFQAHgGAEgGQACgHAAgHQAAgNgKgHQgLgGgRgBIgygBIgLAKgAgZiJQgHAEgFAGQgGAHgCAIQgDAHAAAJQAAAUAMALQALALAUAAQAKAAAHgDQAJgEAFgGQAFgGADgIQACgHAAgJQAAgVgLgKQgMgMgTAAQgKAAgJADg");
	this.shape_7.setTransform(-42.35,47.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("Ag+C6QgWgGgPgJQgOgJgHgMQgHgNAAgPQAAgJACgJQADgIAFgIQAFgIAGgHIAPgOQgMgGgGgLQgHgLAAgOQAAgRAIgMQAIgOALgLQgJgKgGgOQgGgOAAgUQAAgXAIgRQAHgSAOgLQAOgNATgFQATgIAYAAQALABALABIAUAEIBQAAQAFAAADAGQADAHAAAPQAAANgDAGQgDAHgFAAIgeAAQAHAHACAIQADAJAAAJQAAAXgHARQgIAQgOAMQgNAMgTAGQgUAGgXABQgMAAgLgEQgLgDgGgDQgDADgDAGQgDAEAAAGQAAAIAHAFQAIAFAMABIA9ACQAVABARAGQASAEALAKQALAKAHANQAFANAAARQABASgJARQgIARgQAMQgRAMgZAIQgZAGgfAAQghAAgXgEgAgvBWQgEAFgDAEQgDAFAAAEIgBAJQAAAOAOAHQAOAIAbgBQAPAAALgCQALgEAHgFQAGgGADgGQADgHAAgHQAAgNgKgHQgLgGgRgBIgygBIgMAKgAgYiJQgJAEgFAGQgFAHgDAIQgCAHAAAJQAAAUALALQAMALAUAAQAJAAAJgDQAHgEAGgGQAFgGADgIQACgHAAgJQABgVgMgKQgLgMgUAAQgLAAgHADg");
	this.shape_8.setTransform(-69.85,47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgRDBIgKgDQgEgBgCgCQgCgDAAgCIAAj7QAAgDACgCQACgCAEgCQAEgBAGgBIARgBIARABQAHABAEABQAEACACACQABACABADIAAD7IgCAFIgGADQgEACgHABIgRAAIgRAAgAggh+QgIgHAAgVQAAgWAIgHQAJgJAXAAQAYAAAJAIQAIAIAAAVQAAAWgJAHQgJAJgXgBQgXABgJgJg");
	this.shape_9.setTransform(-90.5,37.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("Ag+CMIgKgDQgFgBgBgCQgCgDAAgCIAAj8QAAgDABgBQACgDADgBIAKgCIAPgBIAPABIAJACQADABABADQACABAAADIAAAgQAKgOAJgKQAHgJAIgFQAIgGAIgBQAIgDAIAAIAIABIAJABIAIACIAFADIACADIABAFIABAIIAAARIAAARQgBAGgBAEIgDAFIgFABIgFAAIgGgDIgIgCIgJgBQgGAAgGACQgGADgGAFQgHAFgHAJQgGAIgIANIAACcIgBAFIgGADQgEACgHABIgRAAIgSAAg");
	this.shape_10.setTransform(-106.575,42.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgBCoQgQgGgKgLQgKgLgFgRQgFgRAAgXIAAiBIgeAAQgGAAgCgGQgDgHAAgQIABgOQAAgFACgDQABgEACgBQACgCADAAIAeAAIAAg4QAAgDACgCQABgCAEgCIAMgCIARgBIAQABIALACQAEACABACQACACAAADIAAA4IA3AAIAFACQACABACAEQABADABAFIAAAOQAAAQgCAHQgDAGgGAAIg3AAIAAB2QAAAUAHALQAGAKARAAIAKgBIAIgCIAGgCIAFgBIADABIACAEIACAIIAAANIgBATQgCAGgCADIgIAFIgLAEIgPACIgPABQgWAAgOgFg");
	this.shape_11.setTransform(-128.775,39.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AgvCGQgagIgQgSQgRgRgJgbQgIgaAAgjQAAghAIgaQAKgcAQgTQARgSAYgLQAYgKAdAAQAfAAAXAKQAXAJAOARQAPAQAGAXQAHAXAAAbIAAAKQAAAMgGAHQgGAGgKAAIiZAAQAAARAFAMQADAOAJAJQAIAJANAFQANAEASABQASgBAOgCQAOgCALgEIARgGQAHgCAEAAIAFAAIACAEQACADAAAEIAAAMIAAALIgBAHIgCAFIgCAFQgCABgIAEIgWAHIgdAFQgRACgSABQghAAgZgJgAgThWQgKAFgHAJQgHAIgDAMQgEAMgBAOIBqAAQABgegNgRQgNgSgbAAQgNAAgJAFg");
	this.shape_12.setTransform(100.65,-30.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgnCNQgMgDgLgDQgKgDgHgEIgKgGQgDgDgBgGQgCgGAAgNIAAgNIACgIQABgEACAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQADABAHAEIAPAHQAIAFANADQAMADAPAAQAKAAAGgBQAHgCAGgEQAFgEADgGQADgFAAgHQAAgJgFgGQgFgGgJgEIgTgJIgVgJQgMgEgLgHQgLgGgJgIQgJgJgEgNQgGgMAAgTQAAgRAHgPQAIgQAMgKQAOgMATgFQATgHAXAAQAMAAALACIAUAFQAJACAHADIAJAFIADAEIACAFIABAIIABALIgBAMIgCAIIgCAEIgEABIgIgDIgOgGIgSgHQgLgDgNAAQgKAAgGACQgHACgFAEQgEADgCAGQgDAFAAAFQAAAJAFAFQAGAHAJAEQAHAEAMAEIAWAJQAMAFALAGQALAHAJAHQAJAKAFANQAGALgBASQABAWgJAQQgHARgPAKQgPALgUAGQgVAFgWABQgOAAgNgCg");
	this.shape_13.setTransform(74.7,-30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("ABECMQgHgBgEgCIgGgDIgBgFIAAiQQAAgRgDgLQgDgLgFgHQgFgIgIgEQgIgEgLAAQgMAAgOAKQgOAKgPATIAACnIgCAFIgGADQgEACgHABIgRAAIgRAAIgLgDQgEgBgCgCQgCgDAAgCIAAj8QAAgDACgBQABgDAEgBIAKgCIAOgBIAPABIAJACQADABACADQABABAAADIAAAeQAVgXAWgLQAVgMAXAAQAaAAASAJQARAIALAPQALAPAFATQAFAUAAAbIAACbIgCAFIgGADIgKADIgSAAIgRAAg");
	this.shape_14.setTransform(47.525,-30.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("Ag9CFQgZgJgQgSQgQgSgIgaQgIgaAAgiQAAgeAIgbQAJgbARgTQARgTAbgLQAZgLAiAAQAiAAAZAKQAZAJAQASQARASAHAaQAIAaAAAiQAAAfgIAaQgJAbgRATQgRAUgaAKQgaALgiAAQgiAAgZgKgAgahPQgMAGgIALQgHALgEAQQgEAQAAATQAAASADAQQADAPAHAMQAHAMAMAHQAMAFARAAQAQABALgGQAMgGAIgLQAIgLADgQQAEgQAAgUQAAgRgDgQQgDgQgHgMQgHgLgMgHQgMgGgRAAQgPAAgMAGg");
	this.shape_15.setTransform(16.275,-30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AhsC+IgKgDQgFgBgBgDQgCgCAAgDIAAlfQAAgDABgCQACgDADgBIAKgCIAOgBIAPABIAJACQADABACADQABACAAADIAAAdQALgLALgJQALgIALgGQALgGALgDQALgDANAAQAcAAAUALQATALANATQAMATAGAZQAFAaAAAcQAAAigHAaQgHAbgOATQgOATgVAKQgUAKgbAAQgLAAgIgCQgJgCgJgEQgJgFgIgGQgJgHgJgJIAAB3QAAADgBACQgCADgEABIgLADIgRABIgSgBgAgJh+QgHABgIAFIgPANQgHAHgJAMIAABTQAPASAOAKQANALAOAAQAOAAAKgHQAKgIAGgLQAGgKADgPQADgOAAgPQAAgQgCgPQgDgPgFgLQgGgMgKgHQgJgHgPAAQgGAAgGADg");
	this.shape_16.setTransform(-14.125,-25.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AgnCNQgMgDgLgDQgKgDgHgEIgKgGQgDgDgCgGQgBgGAAgNIAAgNIACgIQABgEACAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQADABAHAEIAPAHQAIAFANADQAMADAPAAQAKAAAGgBQAHgCAGgEQAFgEADgGQADgFAAgHQAAgJgFgGQgFgGgJgEIgTgJIgVgJQgMgEgLgHQgLgGgJgIQgJgJgEgNQgGgMAAgTQAAgRAHgPQAIgQAMgKQAOgMATgFQATgHAXAAQAMAAALACIAUAFQAJACAHADIAJAFIADAEIACAFIABAIIABALIgBAMIgCAIIgCAEIgEABIgIgDIgOgGIgSgHQgLgDgNAAQgKAAgGACQgHACgFAEQgEADgCAGQgDAFAAAFQAAAJAFAFQAGAHAJAEQAHAEAMAEIAWAJQAMAFALAGQALAHAJAHQAJAKAFANQAGALgBASQABAWgJAQQgHARgPAKQgPALgUAGQgVAFgWABQgOAAgNgCg");
	this.shape_17.setTransform(-41.85,-30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AgvCGQgagIgQgSQgSgRgHgbQgJgaAAgjQAAghAJgaQAJgcAQgTQARgSAYgLQAYgKAdAAQAfAAAXAKQAWAJAPARQAPAQAGAXQAHAXAAAbIAAAKQAAAMgFAHQgHAGgKAAIiZAAQAAARAEAMQAEAOAJAJQAIAJANAFQANAEASABQASgBAOgCQAOgCALgEIARgGQAHgCAEAAIAFAAIACAEQACADAAAEIAAAMIAAALIgBAHIgBAFIgDAFQgDABgIAEIgVAHIgdAFQgQACgTABQggAAgagJgAgUhWQgJAFgHAJQgHAIgEAMQgDAMgBAOIBqAAQABgegNgRQgNgSgbAAQgMAAgLAFg");
	this.shape_18.setTransform(-68.2,-30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("ABMC4QgIgBgDgCQgFgBgBgDIgDgGIghhRQgGgOgGgKQgFgMgHgGQgGgIgKgEQgIgDgNAAIgWAAIAACLQgBADgCACIgFAEIgMADIgSAAIgSAAIgMgDIgGgEIgBgFIAAlMQAAgMAGgGQAHgFAJAAIBfAAIAXABIARABQAWADARAIQASAHANANQAMAMAHARQAGARAAAVQAAATgEAQQgFAOgKAMQgIAMgOAJQgNAHgSAGQAJAEAHAGQAIAGAGAHIAMATIALAXIAfBJIAFAPIACAIQAAADgCACQgBACgDABQgFACgIABIgWAAIgTAAgAg8gWIAmAAQAPAAALgEQAMgEAIgHQAIgGAEgLQAEgJAAgMQAAgSgIgNQgJgMgSgFIgMgCIgUgBIghAAg");
	this.shape_19.setTransform(-97.75,-34.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.response_text, new cjs.Rectangle(-140.4,-73.8,280.8,147.6), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drggr, new cjs.Rectangle(-10,-10,20,20), null);


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


(lib.response_text_mc = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Layer_1
	this.instance = new lib.response_text();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.4,-73.8,280.8,147.6);


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
		//the line with trigger response is the response
		//you can set the sensitivity and the duration - will get stored as a cookie
		//the cookie also determines the type of input - not perfect, but contains the code that can be adapted.
		this.blendshapes = {browDownLeft: 1,browDownRight: 2,browInnerUp: 3,browOuterUpLeft: 4,browOuterUpRight: 5,cheekPuff: 6,cheekSquintLeft: 7,cheekSquintRight: 8,eyeBlinkLeft: 9,eyeBlinkRight: 10,eyeLookDownLeft: 11,eyeLookDownRight: 12,eyeLookInLeft: 13,eyeLookInRight: 14,eyeLookOutLeft: 15,eyeLookOutRight: 16,eyeLookUpLeft: 17,eyeLookUpRight: 18,eyeSquintLeft: 19,eyeSquintRight: 20,eyeWideLeft: 21,eyeWideRight: 22,jawForward: 23,jawLeft: 24,jawOpen: 25,jawRight: 26,mouthClose: 27,mouthDimpleLeft: 28,mouthDimpleRight: 29,mouthFrownLeft: 30,mouthFrownRight: 31,mouthFunnel: 32,mouthLeft: 33,mouthLowerDownLeft: 34,mouthLowerDownRight: 35,mouthPressLeft: 36,mouthPressRight: 37,mouthPucker: 38,mouthRight: 39,mouthRollLower: 40,mouthRollUpper: 41,mouthShrugLower: 42,mouthShrugUpper: 43,mouthSmileLeft: 44,mouthSmileRight: 45,mouthStretchLeft: 46,mouthStretchRight: 47,mouthUpperUpLeft: 48,mouthUpperUpRight: 49,noseSneerLeft: 50,noseSneerRight: 51};
		this.isSetup = false;
		this.canvas_width = 1024;
		this.canvas_height = 576;
		this.calibratng = false;
		this.calibratng_text = '';
		this.calib_default = {typ:'bs',id:25,thrsh:0.02,duratn:25};
		this.calib_info = new Object();
		this.line = new createjs.Shape();
		this.line.graphics.setStrokeStyle(10);
		this.rline = new createjs.Shape();
		this.rline.graphics.setStrokeStyle(10);
		this.rline_vals = [50,1,0,this.calib_default.thrsh,this.calib_default.duratn,0];//[default pixel size,min,max,threshhld,duratn,count]
		this.allLandmarks = null;
		this.reslt = null;
		this.resltSetInterval = null;
		this.kd = null;
		this.cal_dur = false;
		this.landmark_list = ['FACE_LANDMARKS_LIPS','FACE_LANDMARKS_RIGHT_EYE','FACE_LANDMARKS_LEFT_EYE','FACE_LANDMARKS_FACE_OVAL','FACE_LANDMARKS_RIGHT_IRIS','FACE_LANDMARKS_LEFT_IRIS'];
		
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
		}
		//https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker for link to list of blendshapes
		this.drawResponse = function() {
			//console.log(document.cookie);
			rd = this.reslt.faceBlendshapes[0]['categories'][this.calib_info.id]['score'];
			this.rline_vals[1] = Math.min(rd,this.rline_vals[1]);
			this.rline_vals[2] = Math.max(rd,this.rline_vals[2]);
			rd_frac = (rd-this.rline_vals[1])/(this.rline_vals[2]-this.rline_vals[1]);
			rd_cal_frac = (this.rline_vals[3]-this.rline_vals[1])/(this.rline_vals[2]-this.rline_vals[1]);
			this.drggr.x = this.input_frame.x + Math.max(0,(rd_cal_frac * ((this.canvas_height/2)-this.rline_vals[0]))+this.rline_vals[0])/2;
			max_radius = Math.max(0,((this.canvas_height/2)-this.rline_vals[0])+this.rline_vals[0]);
			mov_radius = (rd_frac * Math.max(0,((this.canvas_height/2)-this.rline_vals[0]))+this.rline_vals[0]);
			cal_radius = Math.max(0,(rd_cal_frac * ((this.canvas_height/2)-this.rline_vals[0]))+this.rline_vals[0]);
			this.rline.graphics.clear();
			this.rline.graphics.beginStroke("black");
			if(mov_radius < cal_radius) {
				col_string = "rgb(255,0,0)";
				this.rline_vals[5] = 0;
			}else{
				col_string = "rgb(0,255,0)";
				this.rline_vals[5] ++;
				if(this.rline_vals[5] == this.rline_vals[4]) {
					console.log('trigger activity');
					this.response_mc.play();
				}else if(this.rline_vals[5] > this.rline_vals[4]) {
					col_string = "rgb(100,100,0)";
				}
			}
			this.rline.graphics.beginFill(col_string);
			this.rline.graphics.drawCircle(this.canvas_width/2,this.canvas_height/2,mov_radius);
			this.rline.graphics.endStroke();
			this.rline.graphics.endFill();
			this.rline.graphics.beginStroke("black");
			this.rline.graphics.drawCircle(this.canvas_width/2,this.canvas_height/2,max_radius);
			this.rline.graphics.endStroke();
			this.rline.graphics.beginStroke('green');
			this.rline.graphics.drawCircle(this.canvas_width/2,this.canvas_height/2,cal_radius);
			this.rline.graphics.endStroke();
			this.cal_txt.text = (this.rline_vals[3]).toFixed(5);
			this.dur_txt.text = (this.rline_vals[4]).toFixed(0);
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
		this.calibrt = function(e) {
			this.calibratng = true;
			posx = Math.min(Math.max(e.stageX/stage.scale,this.input_frame.x + this.rline_vals[0]/2),this.input_frame.x+this.canvas_height/4);
			this.drggr.x = posx;
			this.rline_vals[3] = this.rline_vals[1]+((((2*(posx-this.input_frame.x))-this.rline_vals[0])/((this.canvas_height/2)-this.rline_vals[0]))*(this.rline_vals[2]-this.rline_vals[1]));
			this.cal_txt.text = (this.rline_vals[3]).toFixed(5);
		}
		this.calibrtEnd = function() {
			console.log('end');
			if(this.kd !== null) {
				document.removeEventListener("keydown",this.kd);
				this.kd = null;
				this.calibratng_text = '';
			}
			this.calib_info.thrsh = this.rline_vals[3];
			this.calib_info.duratn = this.rline_vals[4];
			cookie_obj = new Object();
			cookie_obj['thrsh_'+this.calib_info.typ+'_'+this.calib_info.id] = this.calib_info.thrsh;
			cookie_obj['duratn_'+this.calib_info.typ+'_'+this.calib_info.id] = this.calib_info.duratn;
			document.cookie = JSON.stringify(cookie_obj);
			this.calibratng = false;
			this.cal_dur = false;
		}
		this.calibrtText = function(e) {
			console.log(e);
			if(this.calibratng == false) {
				this.calibratng = true;
				if(this.kd === null) {
					document.addEventListener("keydown",this.kd = this.handleKeyPress.bind(this));
				}
			}else{
				this.calibrtEnd();
			}
		}
		this.calibrtDur = function(e) {
			console.log('duratn');
			if(this.calibratng == false) {
				this.cal_dur = true;
				this.calibrtText(e);
			}else{
				this.calibrtEnd();
			}
		}
		this.handleKeyPress = function(e) {
			if(isNaN(e.key) == false || e.key == '.') {
				this.calibratng_text += e.key;
				if(this.cal_dur) {
					ind = 4;
					this.dur_txt.text = this.calibratng_text;
				}else{
					ind = 3;
					this.cal_txt.text = this.calibratng_text;
				}
				this.rline_vals[ind] = Number(this.calibratng_text);
			}else if(e.key == 'Enter') {
				this.calibrtEnd();
			}
		}
		this.setup = function() {
			this.video_frame.addChild(this.line);
			this.input_frame.addChild(this.rline);
			this.drggr.addEventListener('pressmove',this.calibrt.bind(this));
			this.drggr.addEventListener('pressup', this.calibrtEnd.bind(this));
			this.cal_btn.addEventListener('click',this.calibrtText.bind(this));
			this.dur_btn.addEventListener('click', this.calibrtDur.bind(this));
			this.cal_txt.mouseEnabled = false;
			this.dur_txt.mouseEnabled = false;
			gotQuery = window.location.search;
			console.log(gotQuery);
			gotQueryParams = new URLSearchParams(window.location.search);
			console.log(gotQueryParams);
			if(gotQueryParams.get('typ') == 'bs') {
				this.calib_default.typ = 'bs';
				this.calib_default.id = gotQueryParams.get('id');
			}
			console.log('there is no cookie',document.cookie=='');
			if(document.cookie != '') {//check if cookie property exists
				gotCookie = JSON.parse(document.cookie);
				console.log('found cookie',gotCookie);
				this.calib_info.typ = this.calib_default.typ;
				this.calib_info.id = this.calib_default.id;
				this.rline_vals[3] = this.calib_info.thrsh = gotCookie["thrsh_"+this.calib_default.typ+"_"+this.calib_default.id];
				this.rline_vals[4] = this.calib_info.duratn = gotCookie["duratn_"+this.calib_default.typ+"_"+this.calib_default.id];
			}else{
				this.calib_info = JSON.parse(JSON.stringify(this.calib_default));
			}
			this.resltSetInterval = setInterval(function() {
				if(this.reslt !== null) {
					this.drawLandmarker();
					if(this.calibratng == false) {
						this.drawResponse();
					}
				}
			}.bind(this),20);
			this.isSetup = true;
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// calibration_and_response_mcs
	this.response_mc = new lib.response_text_mc();
	this.response_mc.name = "response_mc";
	this.response_mc.setTransform(512,288);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape.setTransform(1138.375,540.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABVBMIgEgBIgCgBIgBgDIAAhUQAAgJgBgHQgCgIgDgFQgEgFgFgDQgFgDgHAAQgJAAgJAHQgJAHgLANIAABhIgBADIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgDIAAhUQAAgJgCgHQgBgIgEgFQgDgFgFgDQgGgDgHAAQgJAAgJAHQgJAHgLANIAABhIAAADIgCABIgEABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIABACIABACIAAASQAMgNALgGQALgGAMAAQAIAAAHACQAHACAGAEQAFADADAFQADAFADAHQAHgIAGgFIAMgJIAMgFIALgBQAOAAAJAFQAJAEAGAIQAFAIADALQACALAAALIAABYIAAADIgCABIgEABIgHAAIgGAAg");
	this.shape_1.setTransform(1119.425,540.575);

	this.dur_txt = new cjs.Text("", "32px 'Calibri'");
	this.dur_txt.name = "dur_txt";
	this.dur_txt.lineHeight = 41;
	this.dur_txt.lineWidth = 63;
	this.dur_txt.parent = this;
	this.dur_txt.setTransform(1038.75,523.25);

	this.dur_btn = new lib.background_box();
	this.dur_btn.name = "dur_btn";
	this.dur_btn.setTransform(1067.5,538.55,1.423,1,0,0,0,24.2,25);

	this.cal_txt = new cjs.Text("", "32px 'Calibri'");
	this.cal_txt.name = "cal_txt";
	this.cal_txt.lineHeight = 41;
	this.cal_txt.lineWidth = 123;
	this.cal_txt.parent = this;
	this.cal_txt.setTransform(1038.75,300.65);

	this.cal_btn = new lib.background_box();
	this.cal_btn.name = "cal_btn";
	this.cal_btn.setTransform(1096.25,320.15,2.6158,1,0,0,0,24.2,25);

	this.drggr = new lib.drggr();
	this.drggr.name = "drggr";
	this.drggr.setTransform(1280,432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.drggr},{t:this.cal_btn},{t:this.cal_txt},{t:this.dur_btn},{t:this.dur_txt},{t:this.shape_1},{t:this.shape},{t:this.response_mc}]}).wait(1));

	// background
	this.video_frame = new lib.video_location();
	this.video_frame.name = "video_frame";
	this.video_frame.setTransform(1280.05,144,0.5,0.5,0,0,0,512.1,288);

	this.big_frame = new lib.video_location();
	this.big_frame.name = "big_frame";
	this.big_frame.setTransform(512,288,1,1,0,0,0,512,288);

	this.input_frame = new lib.video_location();
	this.input_frame.name = "input_frame";
	this.input_frame.setTransform(1280.05,432,0.5,0.5,0,0,0,512.1,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.input_frame},{t:this.big_frame},{t:this.video_frame}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(768,288,768,288);
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