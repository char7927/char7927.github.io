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

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00CCFF","rgba(255,255,255,0)"],[0.784,1],0,0,0,0,0,6.4).s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00CCFF","rgba(255,255,255,0)"],[0.784,1],0,0,0,0,0,9.7).s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00CCFF","rgba(255,255,255,0)"],[0.784,1],0,0,0,0,0,13).s().p("AhVBXQglgkABgzQgBgxAlgkQAkglAxABQAzgBAkAlQAjAkAAAxQAAAzgjAkQgkAjgzAAQgxAAgkgjg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00CCFF","rgba(255,255,255,0)"],[0.784,1],0,0,0,0,0,16.2).s().p("AhsBtQgtguAAg/QAAg+AtguQAugtA+AAQA/AAAuAtQAtAuAAA+QAAA/gtAuQguAtg/AAQg+AAgugtg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00CCFF","rgba(255,255,255,0)"],[0.784,1],0,0,0,0,0,19.5).s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA1A2AABMQAABNg1A2Qg2A1hNAAQhMAAg2g1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-18.4,36.9,36.9);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnQnBIOhAAQBkAAAABkIAAK8QAABkhkAAIuhAAQhkAAAAhkIAAq8QAAhkBkAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF66CC").s().p("AnQHCQhkABAAhlIAAq8QAAhjBkgBIOhAAQBkABAABjIAAK8QAABlhkgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-57.5,-46,115,92.1), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4NnBMAwbAAAQBkAAAABkIAAK8QAABkhkAAMgwbAAAQhkAAAAhkIAAq8QAAhkBkAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC33").s().p("A4NHCQhkABAAhlIAAq8QAAhjBkgBMAwbAAAQBkABAABjIAAK8QAABlhkgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-166,-46,332,92.1), null);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AqxnBIVjAAQBkAAAABkIAAK8QAABkhkAAI1jAAQhkAAAAhkIAAq8QAAhkBkAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AqxHCQhkABAAhlIAAq8QAAhjBkgBIVjAAQBkABAABjIAAK8QAABlhkgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-80,-46,160,92.1), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AotnBIRbAAQBkAAAABkIAAK8QAABkhkAAIxbAAQhkAAAAhkIAAq8QAAhkBkAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AotHCQhkABAAhlIAAq8QAAhjBkgBIRbAAQBkABAABjIAAK8QAABlhkgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-66.8,-46,133.6,92.1), null);


(lib.samplecopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AA2AAIg1AAIAAA2AABAAIg2AAAABg1IAAA1");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ABdAAQAAAngbAbQgbAbgnAAQgmAAgbgbQgbgbAAgnQAAgmAbgbQAbgbAmAAQAnAAAbAbQAbAbAAAmg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FFCC").s().p("AhBBCQgbgbAAgnQAAglAbgcQAcgbAlAAQAnAAAbAbQAbAcAAAlQAAAngbAbQgbAbgnAAQglAAgcgbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.samplecopy, new cjs.Rectangle(-10.3,-10.3,20.6,20.6), null);


(lib.sample = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABdAAQAAAngbAbQgbAbgnAAQgmAAgbgbQgbgbAAgnQAAgmAbgbQAbgbAmAAQAnAAAbAbQAbAbAAAmg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFCC").s().p("AhBBCQgbgbAAgnQAAglAbgcQAcgbAlAAQAnAAAbAbQAbAcAAAlQAAAngbAbQgbAbgnAAQglAAgcgbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sample, new cjs.Rectangle(-10.3,-10.3,20.6,20.6), null);


(lib.ms_equipment = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape.setTransform(285.7,72.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_1.setTransform(285.7,58.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_2.setTransform(285.7,43.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_3.setTransform(285.7,28.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_4.setTransform(285.7,14.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_5.setTransform(285.7,-0.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_6.setTransform(285.7,-15.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_7.setTransform(285.7,-29.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_8.setTransform(285.7,-44.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_9.setTransform(285.7,-59.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("ABqg/IjTB/");
	this.shape_10.setTransform(285.7,-74.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,1).p("ADJskIDCixAGFskIjKC6AJHvVIjCCxMAk6AAAIGoAAQBnAABJBJQBKBKAABnIAARQQAABohKBJQhJBJhnAAImoAAMgk+AAAIjGC2ADFMgIDGi1AJHJrIjGC1EAq/gMkIAAZEEgiCAMgImeAAQhoAAhJhJQhJhJAAhoIAAmKIpGAAIAAk8IJGAAIAAmKQAAhnBJhKQBJhJBoAAIGeAAIAAKNA1pskIAAKNEgiCgMkIMZAAIYyAAA1pCTIAAKNIsZAAEgiCACTIAAKNAAApqIDJi6ADFMgI4uAAAAAPWIDFi2");
	this.shape_11.setTransform(0.025,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(204,204,204,0.4)").s().p("EAq/AMiIAA5DIGoAAQBnAABJBJQBKBJAABoIAARPQAABohKBJQhJBJhnAAgAGBMiIDGi1Ii8AAIjGC1I4uAAIAAqNIAAKNIsZAAIAAqNIAAKNImeAAQhoAAhJhJQhJhJAAhoIAAmKIpGAAIAAk8IJGAAIAAmJQAAhoBJhJQBJhJBoAAIGeAAIAAKNIAAqNIMZAAIYyAAIjJC6IC7AAIDKi6MAk6AAAIAAZDgA1piUIAAqNg");
	this.shape_12.setTransform(0.025,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ms_equipment, new cjs.Rectangle(-344.4,-100.1,688.9,200.3), null);


// stage content:
(lib.mass_spec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,10,11,19,20,50,51,65];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.sample_meth = function() {
			this.play();
		}
		this.sample_el = this.sample.addEventListener('click',this.sample_meth.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
		this.sample.removeEventListener('click',this.sample_el);
		this.b1_el = this.b1.addEventListener('click',this.sample_meth.bind(this));
	}
	this.frame_2 = function() {
		this.b1.removeEventListener('click',this.b1_el);
	}
	this.frame_10 = function() {
		this.stop();
		this.b2_el = this.b2.addEventListener('click',this.sample_meth.bind(this));
	}
	this.frame_11 = function() {
		this.b2.removeEventListener('click',this.b2_el);
	}
	this.frame_19 = function() {
		this.stop();
		this.b3_el = this.b3.addEventListener('click',this.sample_meth.bind(this));
	}
	this.frame_20 = function() {
		this.b3.removeEventListener('click',this.b3_el);
	}
	this.frame_50 = function() {
		this.stop();
		this.b4_el = this.b4.addEventListener('click',this.sample_meth.bind(this));
	}
	this.frame_51 = function() {
		this.b4.removeEventListener('click',this.b4_el);
	}
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(8).call(this.frame_10).wait(1).call(this.frame_11).wait(8).call(this.frame_19).wait(1).call(this.frame_20).wait(30).call(this.frame_50).wait(1).call(this.frame_51).wait(14).call(this.frame_65).wait(1));

	// sample_copy
	this.instance = new lib.samplecopy();
	this.instance.setTransform(342.6,363,0.6166,0.6138,0,0,0,0.2,0.5);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(941.4,363.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},39).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:0,regY:0,x:347.5376,y:362.7},0).wait(1).to({x:353.0018},0).wait(1).to({x:358.8927},0).wait(1).to({x:365.2101},0).wait(1).to({x:371.9543},0).wait(1).to({x:379.125},0).wait(1).to({x:386.7224},0).wait(1).to({x:394.7465},0).wait(1).to({x:403.1971},0).wait(1).to({x:412.0744},0).wait(1).to({x:421.3784},0).wait(1).to({x:431.1089},0).wait(1).to({x:441.2662},0).wait(1).to({regX:0.2,regY:0.5,x:451.95,y:363},0).to({x:933.1},39).wait(1).to({x:941.2},0).to({_off:true},1).wait(1));

	// sample_copy
	this.instance_2 = new lib.samplecopy();
	this.instance_2.setTransform(342.85,345.9,0.6166,0.6138,0,0,0,0.6,0.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(941.4,346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({regX:0,regY:0,x:351.6707,y:345.65},0).wait(1).to({x:361.5862},0).wait(1).to({x:372.2466},0).wait(1).to({x:383.6517},0).wait(1).to({x:395.8017},0).wait(1).to({x:408.6966},0).wait(1).to({x:422.3362},0).wait(1).to({x:436.7207},0).wait(1).to({regX:0.6,regY:0.4,x:452.2,y:345.9},0).to({x:933.35},31).wait(1).to({x:941.45},0).to({_off:true},1).wait(14));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape.setTransform(123.125,386.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGB6IgEgBIgDgCIAAgCIAAjpIAAgCQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAACIAADpIAAACIgDACIgEABIgHAAIgGAAg");
	this.shape_1.setTransform(110.125,382.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5B1IgHAAIgEgBIgDgCIAAgDIAAjbIAAgCIACgCIAEgBIAGAAIAGAAIAEABIACACIABACIAAAVIAOgMQAGgGAHgDQAHgEAHgCQAGgCAIAAQARAAAMAHQAMAHAIALQAHAMAEAPQADAPAAASQAAAUgEAQQgEAQgJAMQgJALgNAGQgMAHgRAAQgGAAgGgCQgGgBgFgDQgGgDgGgFIgMgKIAABOIAAADIgDACIgEABIgHAAgAgHhZQgFACgGADIgMAKIgNAOIAAA+QAMAOALAIQALAIALAAQALAAAHgGQAIgFAFgJQAFgIACgKQADgLAAgLQAAgMgCgLQgCgMgFgIQgEgJgIgFQgHgGgLAAQgFAAgGACg");
	this.shape_2.setTransform(97.075,389.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABfBVIgEgBIgDgCIAAgCIAAhfQAAgKgCgIQgCgIgEgGQgEgGgFgDQgGgDgIgBQgKAAgKAIQgLAIgMAPIAABtIAAACIgDACIgEABIgHAAIgGAAIgFgBIgCgCIgBgCIAAhfQAAgKgBgIQgCgIgEgGQgEgGgGgDQgGgDgIgBQgKAAgKAIQgKAIgMAPIAABtIgBACIgCACIgEABIgIAAIgHAAIgEgBIgCgCIgBgCIAAidIABgBIACgCIAEgBIAGgBIAHABIADABIADACIAAABIAAAWQANgQANgHQAMgGANgBQAKAAAIADQAIACAGAEQAGAEADAGIAHANIAPgPIANgKQAHgDAGgBQAGgDAHAAQAPAAAKAGQALAGAGAJQAGAIADANQADALAAAOIAABiIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_3.setTransform(72.925,385.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_4.setTransform(49.475,386.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBzQgJgCgIgDQgIgDgFgDIgHgFIgDgFIgBgJIABgGIABgEIABgDIADAAQACAAAFADIALAGQAHAEAKADQAKADANAAQAJAAAIgDQAIgCAGgFQAGgFADgHQADgHAAgJQAAgKgEgGQgFgHgHgFQgHgGgJgEIgSgJIgTgJQgJgFgHgHQgHgIgFgJQgEgKAAgOQAAgOAFgLQAFgMAJgHQAJgIANgEQANgEAOAAIAPACIAOADIAMAFIAHAFIACACIABADIABADIAAAGIAAAFIgBAEIgCADIgCABQgCAAgEgDIgKgFIgOgGQgIgDgKAAQgJAAgHADQgHADgEAEQgFAEgCAGQgDAFAAAHQAAAJAFAHQAEAHAIAFQAHAGAJAEIASAJIATAKQAJAEAHAHQAIAHAEAKQAFAKAAAOQAAAQgGAMQgGAMgLAJQgKAJgOAEQgOAFgPAAQgMAAgKgCg");
	this.shape_5.setTransform(33.125,383.075);

	this.sample = new lib.sample();
	this.sample.name = "sample";
	this.sample.setTransform(78.05,354.4,1.1951,1.1951,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sample},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.sample}]},1).to({state:[{t:this.sample}]},8).to({state:[]},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.sample).wait(1).to({x:242.95},0).to({x:320.65},8).to({_off:true},1).wait(56));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_6.setTransform(991.275,161.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBVIgEgBIgCgBIgBgDIAAhbQAAgNgCgJQgCgIgEgGQgEgGgHgDQgGgDgJgBQgJAAgLAJQgLAHgMAPIAABtIgBADIgCABIgEABIgIAAIgHAAIgEgBIgCgBIgBgDIAAidIABgBIACgCIAEgBIAGgBIAHABIADABIADACIAAABIAAAVQANgOAOgIQANgHAMAAQAQABALAFQALAGAGAIQAHAJADANQADALAAARIAABfIgBADIgCABIgFABIgHAAIgHAAg");
	this.shape_7.setTransform(974.925,161.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjBRQgOgGgKgLQgKgLgEgQQgFgQAAgUQAAgSAFgQQAFgQAKgMQAKgMAPgGQAPgHATAAQAUAAAOAGQAPAGAJALQAKALAFAQQAFAQAAATQAAATgGAQQgFAQgKAMQgKALgPAHQgPAHgTAAQgTAAgPgGgAgVg5QgJAFgGAIQgGAIgDAMQgDALAAANQAAANACALQADALAFAJQAGAIAJAFQAKAFANAAQAMAAAKgEQAJgFAGgIQAGgIADgMQADgLAAgOQAAgMgDgLQgCgLgGgJQgFgIgJgFQgKgFgOAAQgMAAgJAEg");
	this.shape_8.setTransform(956.075,161.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGB0IgEgBIgDgBIAAgDIAAicIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAACIAACcIAAADIgDABIgEABIgHABIgGgBgAgNhUQgEgEAAgKQAAgKAEgEQAEgEAJAAQAKAAAEAEQAEAEAAAKQAAAKgEADQgEAEgKAAQgJAAgEgDg");
	this.shape_9.setTransform(942.475,158.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgBgDAAgGIAAgGIABgDQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACAAIAWAAIAAgmIABgCIACgCIAFgBIAHAAIAHAAIADABIADACIAAACIAAAmIApAAIACAAIACADIABADIAAAGQAAAGgBADQgCADgCAAIgpAAIAABXQAAAQAFAIQAFAJAMAAIAHgBIAGgCIAEgBIADgBIACAAIABACIABADIAAAFIAAAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_10.setTransform(1010.275,113.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgMgFgPQgEgPAAgVQAAgWAFgRQAGgRAKgLQAKgKAOgFQAMgGAQABQAHAAAHABQAHABAGADQAGACAFACIAHAGIACADIABADIABAEIAAAFQAAAHgBACQgCAEgCAAQgCAAgEgEIgJgGQgFgEgHgDQgIgCgKAAQgUAAgLAQQgLAQAAAdQAAAPADAMQACAMAGAHQAGAIAIADQAHAEALAAQAJAAAIgDIANgHIAJgGQAEgEADAAIABABIACADIABAEIAAAGIAAAFIgBAEIgBACIgCADIgIAGIgMAGIgOAEIgQABQgQAAgNgFg");
	this.shape_11.setTransform(997.2,115.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_12.setTransform(980.375,115.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQgCAAgCgDQgBgDAAgGIAAgGIABgDQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACAAIAWAAIAAgmIABgCIACgCIAFgBIAHAAIAHAAIADABIADACIAAACIAAAmIApAAIACAAIACADIABADIAAAGQAAAGgBADQgCADgCAAIgpAAIAABXQAAAQAFAIQAFAJAMAAIAHgBIAGgCIAEgBIADgBIACAAIABACIABADIAAAFIAAAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_13.setTransform(965.575,113.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_14.setTransform(951.025,115.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhLBxQgEAAgDgCQgEgDAAgHIAAjJQAAgHAEgCQADgDAEAAIAzAAQAdAAAUAHQAUAIAOAOQAOAOAHAVQAHAUAAAaQAAAcgHAWQgIAWgOAPQgPAOgVAHQgVAHgcAAgAg4BYIAfAAQAWAAAOgFQAOgGAKgLQAKgLAFgRQAFgRAAgWQAAgSgEgQQgFgQgJgMQgKgLgPgHQgOgGgXAAIgfAAg");
	this.shape_15.setTransform(931.825,112.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaCaIgEgCIgBgCIABgEQAQgjAIglQAHglAAglQAAglgHglQgIglgRgjIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAFgBIAGgBIAGABIAEAAIACABIABACQARAkAKAmQALAmAAAmQAAAUgDATQgCATgFAUQgFATgHASQgHASgJASIgBABIgDABIgEABIgFAAIgHAAg");
	this.shape_16.setTransform(874.65,160.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_17.setTransform(862.225,161.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_18.setTransform(848.225,161.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_19.setTransform(832.175,161.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABfBVIgEgBIgDgBIAAgDIAAhfQAAgKgCgIQgCgIgEgGQgEgGgFgDQgGgDgIgBQgKAAgKAJQgLAHgMAPIAABtIAAADIgDABIgEABIgHAAIgGAAIgFgBIgCgBIgBgDIAAhfQAAgKgBgIQgCgIgEgGQgEgGgGgDQgGgDgIgBQgKAAgKAJQgKAHgMAPIAABtIgBADIgCABIgEABIgIAAIgHAAIgEgBIgCgBIgBgDIAAidIABgBIACgCIAEgBIAGgBIAHABIADABIADACIAAABIAAAVQANgOANgIQAMgHANAAQAKABAIACQAIACAGAEQAGAFADAFIAHANIAPgPIANgKQAHgDAGgCQAGgCAHAAQAPABAKAFQALAGAGAIQAGAJADANQADALAAAOIAABiIgBADIgCABIgFABIgHAAIgHAAg");
	this.shape_20.setTransform(809.825,161.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcB0IgFgCIgBgDIABgEIAVg3IgDgDIgBgDIg4iVIgCgGQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAEgBIAIgBIAJABIAEABIADACIACAEIAsB9IAAAAIAsh+QAAgEACgBIAFgBIAIgBIAIABIAFABIABAEIgBAFIg4CcIgVA6QgBACgDADIgOABIgHAAg");
	this.shape_21.setTransform(779.15,164.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIB6QgHgBgGgEIgMgIIgNgMIAAATIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIAAgCIAAjpIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAHgBIAHABIAEABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAACIAABeQAHgHAHgFIANgIIAMgEQAGgCAHAAQARAAAMAHQAMAHAIAMQAHALAEAOQADAQAAARQAAAUgEARQgEAQgJAMQgJALgMAGQgNAHgQAAQgHAAgGgCgAgHgWQgFABgGAEIgMAKQgGAFgHAIIAAA/QAMAOALAIQALAIALAAQALAAAIgGQAIgFAEgIQAFgJACgLQADgLAAgLQAAgMgCgLQgCgMgFgHQgEgJgIgFQgHgGgMAAIgKACg");
	this.shape_22.setTransform(762.375,157.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgHgLgEgQQgDgPAAgRQgBgVAEgQQAFgQAJgLQAIgMANgGQANgGAQAAQANAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADoIgBADIgBACIgFAAIgFABIgHgBIgDAAIgDgCIgBgDIAAgUQgMANgNAIQgOAHgPAAQgRAAgMgHgAgUgTQgIAFgFAJQgEAHgCALQgDALAAALQAAAMACAMQACALAEAJQAFAJAIAFQAHAFAMAAIAKgBQAFgCAFgDIAMgKQAGgGAHgIIAAg/QgMgOgLgIQgLgHgKAAQgLAAgIAFg");
	this.shape_23.setTransform(734.45,157.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_24.setTransform(716.475,161.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQgCAAgCgDQgBgDAAgGIAAgGIABgDQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACAAIAWAAIAAgmIABgCIACgCIAFgBIAHAAIAHAAIADABIADACIAAACIAAAmIApAAIACAAIACADIABADIAAAGQAAAGgBADQgCADgCAAIgpAAIAABXQAAAQAFAIQAFAJAMAAIAHgBIAGgCIAEgBIADgBIACAAIABACIABADIAAAFIAAAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_25.setTransform(701.675,159.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVBQQgNgFgJgKQgJgMgFgPQgEgPAAgVQAAgXAFgQQAGgRAKgLQAKgKAOgGQANgEAPAAQAHgBAHACQAHABAGACQAGACAEAEIAIAFIACADIABADIABAEIAAAFQAAAHgBACQgCADgCABQgDgBgDgDIgJgGQgFgDgHgDQgIgDgKgBQgUABgLAQQgLAQAAAdQAAAPADAMQACALAGAIQAGAIAIAEQAHADALAAQAKABAHgEIANgHIAJgHQAEgDACAAIACABIACACIABAFIAAAFIAAAGIgBADIgBADIgDADIgHAGIgMAFIgOAFIgQABQgQABgNgHg");
	this.shape_26.setTransform(688.6,161.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_27.setTransform(671.775,161.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRB7IgEgBIgDgCIAAgDIAAiIIgXAAQgCAAgCgEQgBgCAAgHIAAgFIABgEIACgCIACgBIAXAAIAAgQQAAgQADgMQADgMAGgIQAGgHAJgDQAJgEANAAIAMABIAJADIAEACIACACIABAFIAAAFIAAAFIgBAEIgBACIgCAAIgDAAIgEgDIgGgBIgJgBQgGAAgFACQgEACgDAEQgDAFgBAHIgBARIAAARIAjAAIACABIACACIABAEIABAFQAAAHgCACQgCAEgCAAIgjAAIAACIIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_28.setTransform(658.825,157.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgRB7IgEgBIgDgCIAAgDIAAiIIgXAAQgCAAgCgEQgBgCAAgHIAAgFIABgEIACgCIACgBIAXAAIAAgQQAAgQADgMQADgMAGgIQAGgHAJgDQAJgEANAAIAMABIAJADIAEACIACACIABAFIAAAFIAAAFIgBAEIgBACIgCAAIgDAAIgEgDIgGgBIgJgBQgGAAgFACQgEACgDAEQgDAFgBAHIgBARIAAARIAjAAIACABIACACIABAEIABAFQAAAHgCACQgCAEgCAAIgjAAIAACIIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_29.setTransform(648.325,157.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_30.setTransform(633.525,161.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgIgLgDgQQgEgPABgRQAAgVADgQQAFgQAJgLQAIgMANgGQANgGAQAAQANAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAHAAIAFABIADACIABACIAADoIgBADIgCACIgFAAIgFABIgGgBIgFAAIgCgCIgBgDIAAgUQgMANgNAIQgOAHgPAAQgRAAgMgHgAgUgTQgIAFgFAJQgEAHgDALQgCALAAALQAAAMACAMQACALAEAJQAFAJAHAFQAIAFAMAAIAKgBQAFgCAFgDIAMgKQAGgGAHgIIAAg/QgMgOgLgIQgLgHgKAAQgLAAgIAFg");
	this.shape_31.setTransform(607.45,157.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_32.setTransform(589.525,161.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_33.setTransform(571.625,161.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag5B1IgHAAIgEgBIgDgCIAAgDIAAjbIAAgCIACgCIAEgBIAGAAIAGAAIAEABIACACIABACIAAAVIAOgMQAGgGAHgDQAHgEAHgCQAGgCAIAAQARAAAMAHQAMAHAIALQAHAMAEAPQADAPAAASQAAAUgEAQQgEAQgJAMQgJALgNAGQgMAHgRAAQgGAAgGgCQgGgBgFgDQgGgDgGgFIgMgKIAABOIAAADIgDACIgEABIgHAAgAgHhZQgFACgGADIgMAKIgNAOIAAA+QAMAOALAIQALAIALAAQALAAAHgGQAIgFAFgJQAFgIACgKQADgLAAgLQAAgMgCgLQgCgMgFgIQgEgJgIgFQgHgGgLAAQgFAAgGACg");
	this.shape_34.setTransform(553.875,164.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_35.setTransform(536.875,161.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAOCaIgEgBIgCgBIgBgBQgJgSgHgSQgHgSgGgTQgFgUgCgTQgCgTAAgUQAAgTADgTQACgUAFgSQAFgTAIgTQAGgSAJgSIABgCIACgBIADAAIAHgBIAHABIADABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAADQgRAjgHAlQgIAlAAAlQAAAlAIAlQAIAlAQAjIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDACIgHAAIgGAAg");
	this.shape_36.setTransform(524.55,160.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQgCAAgCgDQgBgDAAgGIAAgGIABgDQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACAAIAWAAIAAgmIABgCIACgCIAFgBIAHAAIAHAAIADABIADACIAAACIAAAmIApAAIACAAIACADIABADIAAAGQAAAGgBADQgCADgCAAIgpAAIAABXQAAAQAFAIQAFAJAMAAIAHgBIAGgCIAEgBIADgBIACAAIABACIABADIAAAFIAAAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_37.setTransform(726.175,113.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRB7IgEgBIgDgCIAAgDIAAiJIgXAAQgCAAgCgCQgBgDAAgGIAAgGIABgDIACgDIACgBIAXAAIAAgQQAAgQADgMQADgMAGgIQAGgHAJgEQAJgDANAAIAMABIAJACIAEADIACADIABADIAAAHIAAAEIgBAEIgBACIgCAAIgDAAIgEgCIgGgCIgJgBQgGAAgFACQgEACgDAEQgDAFgBAHIgBARIAAARIAjAAIACABIACADIABADIABAGQAAAGgCADQgCACgCAAIgjAAIAACJIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_38.setTransform(715.475,111.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGB0IgEgBIgDgBIAAgDIAAicIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAACIAACcIAAADIgDABIgEABIgHABIgGgBgAgNhUQgEgEAAgKQAAgKAEgEQAEgEAJAAQAKAAAEAEQAEAEAAAKQAAAKgEADQgEAEgKAAQgJAAgEgDg");
	this.shape_39.setTransform(705.425,112.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmBVIgEgBIgCgCIgBgCIAAidIABgCIABgBIAFgBIAGgBIAHABIADABIADABIAAACIAAAYIAMgQQAFgGAFgDQAFgEAFgBIAKgCIAFABIAGABIAGACIAEABIABACIAAACIABAEIAAAGIgBAGIAAAFIgBACIgCAAIgEAAIgEgBIgGgCIgHgBQgFAAgEACQgEACgFADIgIALIgMAQIAABnIAAACIgCACIgFABIgHAAIgHAAg");
	this.shape_40.setTransform(696.1,115.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhLBxQgEAAgDgCQgEgDAAgHIAAjJQAAgHAEgCQADgDAEAAIAzAAQAdAAAUAHQAUAIAOAOQAOAOAHAVQAHAUAAAaQAAAcgHAWQgIAWgOAPQgPAOgVAHQgVAHgcAAgAg4BYIAfAAQAWAAAOgFQAOgGAKgLQAKgLAFgRQAFgRAAgWQAAgSgEgQQgFgQgJgMQgKgLgPgHQgOgGgXAAIgfAAg");
	this.shape_41.setTransform(678.475,112.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaCaIgEgCIgBgCIABgEQAQgjAIglQAHglAAglQAAglgHglQgIglgQgjIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIADgBIAHgBIAGABIAEAAIACABIABACQASAkAJAmQALAmAAAmQAAAUgDATQgCATgFAUQgFATgHASQgHASgJASIgBABIgDABIgEABIgFAAIgHAAg");
	this.shape_42.setTransform(479.75,160.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_43.setTransform(465.375,161.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkBxQgNgDgIgFQgJgGgEgIQgDgIAAgJIAAgLQACgFADgFIAHgKIAKgIQgJgFgEgGQgEgHAAgIQAAgKAEgIQAFgIAGgHQgFgGgDgJQgEgIABgLQAAgOAEgKQAFgLAIgHQAIgIALgEQAMgEANAAIAMABIAMACIAwAAQADAAABADQABADAAAGQAAAGgBADQgCADgCAAIgXAAQAGAGACAIQADAHAAAIQAAAOgEAKQgFALgIAHQgIAIgMADQgKAEgNAAQgKAAgIgCQgJgDgFgEIgFAHQgCAEAAAFQAAAGAGAEQAGAEAJAAIAoACQAMAAAKADQAJADAIAGQAGAFAFAIQADAHAAALQABALgFAJQgEAKgKAIQgJAHgOAEQgPAFgTAAQgTAAgOgEgAgkAyIgGAHQgCAEgBADIgBAHQAAAMAMAGQALAGAWAAQAMAAAIgDQAJgCAGgFQAFgEADgFQACgGAAgGQAAgKgJgFQgIgGgOAAIgogCIgJAJgAgShbQgHADgDAFQgFAFgCAGQgCAHAAAHQAAAPAJAJQAJAJAQAAQAIAAAFgDQAHgCAEgFQAEgFACgGQACgHAAgHQAAgQgJgJQgIgJgPAAQgJAAgGADg");
	this.shape_44.setTransform(448.35,164.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmBVIgEgBIgCgBIgBgDIAAidIABgBIACgCIADgBIAHgBIAHABIADABIACACIABABIAAAYIAMgQQAGgGAEgDQAFgEAFgBIAKgCIAFABIAGABIAGACIADABIACACIABACIAAAEIAAAGIAAAGIgBAEIgBADIgDABIgDgBIgFgBIgFgDIgHAAQgFAAgDABQgFADgEADIgJALIgLAQIAABnIgBADIgDABIgDABIgIAAIgHAAg");
	this.shape_45.setTransform(435.25,161.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_46.setTransform(418.875,161.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuB6IgEgBIgCgBIgBgDIAAhcQAAgNgCgJQgCgHgEgGQgEgGgHgDQgGgDgJAAQgJgBgLAJQgLAHgMAOIAABuIgBADIgCABIgEABIgIAAIgHAAIgEgBIgCgBIgBgDIAAjpIABgCQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAEgBIAHgBIAIABIAEABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIABACIAABeQAMgMANgHQANgGALgBQAQABALAFQALAGAGAIQAHAJADANQADAKAAARIAABgIgBADIgCABIgFABIgHAAIgHAAg");
	this.shape_47.setTransform(401.475,157.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgVBQQgNgFgJgKQgJgMgFgPQgEgPAAgVQAAgXAGgQQAFgRAKgLQAKgKAOgGQANgEAOAAQAIgBAHACQAHABAGACQAGACAEAEIAHAFIADADIACADIAAAEIABAFQAAAHgCACQgCADgCABQgDgBgDgDIgJgGQgFgDgIgDQgHgDgKgBQgUABgLAQQgLAQAAAdQAAAPADAMQADALAFAIQAGAIAIAEQAHADAKAAQALABAHgEIAOgHIAJgHQADgDACAAIACABIACACIABAFIAAAFIAAAGIAAADIgBADIgEADIgHAGIgMAFIgOAFIgQABQgQABgNgHg");
	this.shape_48.setTransform(384.6,161.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcB0IgFgCIgBgDIAAgEIAXg3IgEgDIgCgDIg3iVIgCgGQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAEgBIAIgBIAIABIAGABIACACIABAEIAsB9IABAAIArh+QACgEABgBIAFgBIAIgBIAIABIAFABIABAEIgBAFIg4CcIgUA6QgCACgEADIgNABIgHAAg");
	this.shape_49.setTransform(360.5,164.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIB6QgHgBgGgEIgMgIIgNgMIAAATIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIAAgCIAAjpIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAHgBIAHABIAEABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAACIAABeQAHgHAHgFIANgIIAMgEQAGgCAHAAQARAAAMAHQAMAHAIAMQAHALAEAOQADAQAAARQAAAUgEARQgEAQgJAMQgJALgMAGQgNAHgQAAQgHAAgGgCgAgHgWQgFABgGAEIgMAKQgGAFgHAIIAAA/QAMAOALAIQALAIALAAQALAAAIgGQAIgFAEgIQAFgJACgLQADgLAAgLQAAgMgCgLQgCgMgFgHQgEgJgIgFQgHgGgMAAIgKACg");
	this.shape_50.setTransform(343.725,157.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAPCaIgFgBIgCgBIgBgBQgJgSgHgSQgIgSgFgTQgFgUgCgTQgCgTAAgUQAAgTADgTQACgUAGgSQAEgTAIgTQAGgSAJgSIABgCIABgBIAEAAIAHgBIAHABIADABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAADQgRAjgHAlQgIAlAAAlQAAAlAIAlQAIAlAQAjIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDACIgHAAIgFAAg");
	this.shape_51.setTransform(328.45,160.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_52.setTransform(467.075,115.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgBgDAAgGIAAgGIABgDQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACAAIAWAAIAAgmIABgCIACgCIAFgBIAHAAIAHAAIADABIADACIAAACIAAAmIApAAIACAAIACADIABADIAAAGQAAAGgBADQgCADgCAAIgpAAIAABXQAAAQAFAIQAFAJAMAAIAHgBIAGgCIAEgBIADgBIACAAIABACIABADIAAAFIAAAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_53.setTransform(452.275,113.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_54.setTransform(437.825,115.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgmBVIgEgBIgDgCIAAgCIAAidIAAgCIADgBIADgBIAHgBIAHABIADABIACABIABACIAAAYIAMgQQAGgGAEgDQAFgEAFgBIAKgCIAFABIAGABIAGACIADABIACACIABACIAAAEIAAAGIAAAGIgBAFIgBACIgDAAIgDAAIgFgBIgFgCIgHgBQgFAAgDACQgFACgEADIgJALIgLAQIAABnIgBACIgDACIgDABIgIAAIgHAAg");
	this.shape_55.setTransform(425.25,115.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_56.setTransform(408.975,115.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGB6IgEgBIgDgCIAAgCIAAjpIAAgCQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAACIAADpIAAACIgDACIgEABIgHAAIgGAAg");
	this.shape_57.setTransform(395.975,111.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_58.setTransform(382.875,115.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgMgFgPQgEgPAAgVQAAgWAGgRQAFgRAKgLQAKgKAOgFQANgGAOABQAIAAAHABQAHABAGADQAGACAEACIAHAGIADADIACADIAAAEIABAFQAAAHgCACQgCAEgCAAQgDAAgDgEIgJgGQgFgEgIgDQgHgCgKAAQgUAAgLAQQgLAQAAAdQAAAPADAMQADAMAFAHQAGAIAIADQAHAEAKAAQALAAAHgDIAOgHIAJgGQADgEACAAIACABIACADIABAEIAAAGIAAAFIAAAEIgBACIgEADIgHAGIgMAGIgOAEIgQABQgQAAgNgFg");
	this.shape_59.setTransform(366.6,115.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgMgFgPQgEgPAAgVQAAgWAFgRQAGgRAKgLQAKgKAOgFQANgGAPABQAHAAAHABQAHABAGADQAGACAEACIAIAGIACADIABADIABAEIAAAFQAAAHgBACQgCAEgCAAQgCAAgEgEIgJgGQgFgEgHgDQgIgCgKAAQgUAAgLAQQgLAQAAAdQAAAPADAMQACAMAGAHQAGAIAIADQAHAEALAAQAKAAAHgDIANgHIAJgGQAEgEADAAIABABIACADIABAEIAAAGIAAAFIgBAEIgBACIgCADIgIAGIgMAGIgOAEIgQABQgQAAgNgFg");
	this.shape_60.setTransform(351.45,115.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ABKByIgFgBIgCgCIgCgCIgTg3IhdAAIgTA2IgBADIgDACIgEABIgIAAIgJAAIgEgCQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAIABgHIBMjRIACgDIADgCIAGgBIAIAAIAJAAIAGABIADACIACADIBMDSIACAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgJAAIgJAAgAgoAeIBOAAIgnhwg");
	this.shape_61.setTransform(333.2938,112.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_62.setTransform(276.025,163.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_63.setTransform(260.075,163.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGB0IgEgBIgDgBIAAgDIAAicIAAgCQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAACIAACcIAAADIgDABIgEABIgHABIgGgBgAgNhUQgEgEAAgKQAAgKAEgEQAEgEAJAAQAKAAAEAEQAEAEAAAKQAAAKgEADQgEAEgKAAQgJAAgEgDg");
	this.shape_64.setTransform(248.975,159.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgmBVIgEgBIgDgBIAAgDIAAicIAAgCIACgDIAFgBIAGAAIAGAAIAEABIACADIABACIAAAWIAMgPQAGgGAEgDQAFgDAFgCIAKgCIAFABIAGABIAGABIADACIACACIAAACIABADIAAAHIgBAHIAAADIgBADIgCABIgEgBIgFgCIgFgCIgHAAQgEAAgEABQgFADgEAEIgJAKIgMARIAABmIAAADIgDABIgDABIgIAAIgHAAg");
	this.shape_65.setTransform(239.65,162.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgjBRQgOgGgKgLQgKgLgEgQQgFgQAAgUQAAgSAFgQQAFgQAKgMQAKgMAPgGQAPgHATAAQAUAAAOAGQAPAGAJALQAKALAFAQQAFAQAAATQAAATgGAQQgFAQgKAMQgKALgPAHQgPAHgTAAQgTAAgPgGgAgVg5QgJAFgGAIQgGAIgDAMQgDALAAANQAAANACALQADALAFAJQAGAIAJAFQAKAFANAAQAMAAAKgEQAJgFAGgIQAGgIADgMQADgLAAgOQAAgMgDgLQgCgLgGgJQgFgIgJgFQgKgFgOAAQgMAAgJAEg");
	this.shape_66.setTransform(222.975,163.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag5B1IgHAAIgEgBIgDgCIAAgDIAAjbIAAgCIACgCIAEgBIAGAAIAGAAIAEABIACACIABACIAAAVIAOgMQAGgGAHgDQAHgEAHgCQAGgCAIAAQARAAAMAHQAMAHAIALQAHAMAEAPQADAPAAASQAAAUgEAQQgEAQgJAMQgJALgNAGQgMAHgRAAQgGAAgGgCQgGgBgFgDQgGgDgGgFIgMgKIAABOIAAADIgDACIgEABIgHAAgAgHhZQgFACgGADIgMAKIgNAOIAAA+QAMAOALAIQALAIALAAQALAAAHgGQAIgFAFgJQAFgIACgKQADgLAAgLQAAgMgCgLQgCgMgFgIQgEgJgIgFQgHgGgLAAQgFAAgGACg");
	this.shape_67.setTransform(204.575,166.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfBTQgLgDgHgGQgHgGgEgJQgEgJAAgLQAAgOAGgJQAFgKAKgGQALgGAOgDQAPgEARAAIAWAAIAAgMQAAgJgCgHQgCgHgEgFQgEgEgHgDQgHgCgKAAQgKAAgIADQgJACgGADIgLAGIgGACIgDgBIgBgCIgCgDIAAgFIABgHQAAgCADgDIAIgFIANgGIARgEQAIgCAJAAQARAAALAEQAMAEAIAIQAHAHADALQAEALAAAPIAABpQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEACIgHAAIgHAAIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgQQgKALgNAGQgNAHgNAAQgMAAgKgEgAgIAJQgJACgGAEQgGAEgCAGQgDAFAAAHQAAAMAIAIQAIAHAOAAQAKAAAKgGQAJgGALgLIAAgiIgZAAQgLAAgIACg");
	this.shape_68.setTransform(185.575,163.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAABUIgHAAIgHgBIgDgCIgBgDIg2iVIgBgDIgBgDIAAgBIABgCIACgCIAEgBIAHAAIAIAAIAFABIADACIABACIAsCBIAAACIAAgCIAtiBIABgCIACgCIAFgBIAIAAIAGAAIAFABIABACIABACIAAACIgBABIAAACIAAACIg2CVIgCADIgEACIgFABIgJAAg");
	this.shape_69.setTransform(169.95,163.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABUB3IgKgFIgNgIIgRgNIgQALQgIAFgJADQgJAEgJACQgKACgMAAQgLAAgKgCQgKgCgIgDQgJgEgGgGQgHgFgFgGQgEgIgDgIQgCgIAAgKQAAgLACgIQADgIAGgJQAFgIAJgIQAJgGANgIIgMgRQgFgHgDgIQgEgGgBgGIgBgMQAAgLADgKQAEgKAIgIQAIgHANgEQANgFASAAQAPAAALAEQALACAIAHQAHAGAEAIQADAJAAALQAAAKgDAJQgDAJgIAHQgHAJgLAHQgLAJgQAIIANAOIAOAQIAPAPIAQAPIAGgLIAFgNIADgNIABgPIAAgFIABgDIACgBIAEgCIAHAAIAHAAIAEABIADACIAAADIAAAEQAAAKgBAJIgFASQgDAJgEAJQgEAIgGAHIAOALIAKAGIAHAEIAEABIAEAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACADIAAAGIAAAIIAAADIgCADIgEACIgHAAIgIgBgAg5AVQgGAFgDAFQgEAGgBAFQgCAGAAAHQAAAIADAIQADAIAGAFQAGAGAJADQAJACAMAAIAOgBIAMgEIALgGIALgIIgSgQIgRgRIgQgRIgOgQQgJAFgGAGgAgihdQgHADgEAEQgEAEgCAFQgCAFAAAFIACAKQABAFADAFIAGAMIAKANIAVgMIANgNQAFgFADgGQACgFAAgGQAAgFgCgFQgCgFgEgDQgEgEgFgCQgGgCgJAAQgJAAgGACg");
	this.shape_70.setTransform(269.275,113.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgbBRQgOgFgKgLQgKgLgFgQQgFgQAAgVQAAgUAFgQQAFgQAKgLQAKgLAOgGQAOgHAQAAQATAAANAGQANAGAIAKQAJAKAEAOQADAOAAAPIAAAFQAAAGgDADQgDADgFAAIhnAAQAAANADALQADAKAGAIQAGAHAKAEQAKAEANAAQALAAAJgCIAPgEIALgEIAGgCIACABIACACIAAADIABAFIAAAEIgBADIgBADIgBACIgGADIgMAEIgSAEQgJACgMAAQgSAAgPgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAJgBAKIBVAAQABgXgLgNQgKgNgVAAQgKAAgIAEg");
	this.shape_71.setTransform(239.725,116.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgVBVIgNgDIgLgEIgGgEQgCgCgBgDIgBgJIABgFIABgEIABgCIACgBQACAAAEADIAJAFIANAFQAIACAKAAQAGAAAGgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgGgDgFQgDgEgGgEIgNgGIgNgGIgPgHQgHgCgFgGQgGgFgDgIQgEgHAAgLQAAgJAEgJQADgIAIgGQAHgHALgEQAKgEAOAAIAMABIAMADIAIAEIAGADIACACIABADIABADIAAAFIAAAFIgBADIgCACIgCABIgEgCIgIgEIgLgEQgGgCgJAAQgGAAgGACQgFABgEADQgDADgCAFQgCAEAAAFQAAAGADAFQAEAFAGADIALAHIAPAFIAPAHIANAIQAFAFAEAHQADAIAAAKQAAAMgEAKQgFAJgIAGQgIAHgMADQgLAEgNAAQgIAAgIgCg");
	this.shape_72.setTransform(223.825,116.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGB0IgEgBIgDgBIAAgDIAAicIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAGgBIAHABIAEABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAACIAACcIAAADIgDABIgEABIgHABIgGgBgAgNhUQgEgEAAgKQAAgKAEgEQAEgEAJAAQAKAAAEAEQAEAEAAAKQAAAKgEADQgEAEgKAAQgJAAgEgDg");
	this.shape_73.setTransform(212.725,113.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAuBVIgEgBIgCgBIgBgDIAAhbQAAgNgCgJQgCgIgEgGQgEgGgHgDQgGgDgJgBQgJAAgLAJQgLAHgMAPIAABtIgBADIgCABIgEABIgIAAIgHAAIgEgBIgCgBIgBgDIAAidIABgBIACgCIAEgBIAGgBIAHABIADABIADACIAAABIAAAVQANgOAOgHQANgIAMAAQAQABALAFQALAGAGAIQAHAJADANQADALAAARIAABfIgBADIgCABIgFABIgHAAIgHAAg");
	this.shape_74.setTransform(199.225,116.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgjBRQgOgGgKgLQgKgLgEgQQgFgQAAgUQAAgSAFgQQAFgQAKgMQAKgMAPgGQAPgHATAAQAUAAAOAGQAPAGAJALQAKALAFAQQAFAQAAATQAAATgGAQQgFAQgKAMQgKALgPAHQgPAHgTAAQgTAAgPgGgAgVg5QgJAFgGAIQgGAIgDAMQgDALAAANQAAANACALQADALAFAJQAGAIAJAFQAKAFANAAQAMAAAKgEQAJgFAGgIQAGgIADgMQADgLAAgOQAAgMgDgLQgCgLgGgJQgFgIgJgFQgKgFgOAAQgMAAgJAEg");
	this.shape_75.setTransform(180.325,116.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgGByIgEgBIgDgCIgBgCIAAjZIABgCIADgCIAEgBIAGAAIAIAAIAEABIACACIABACIAADZIgBACIgCACIgEABIgIAAIgGAAg");
	this.shape_76.setTransform(166.35,113.875);

	this.instance_4 = new lib.ms_equipment();
	this.instance_4.setTransform(618.6,354.4,1.1951,1.1951,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(66));

	// Layer_2
	this.b4 = new lib.Symbol4();
	this.b4.name = "b4";
	this.b4.setTransform(969.3,138.65,1.1951,1.1951);

	this.b3 = new lib.Symbol3();
	this.b3.name = "b3";
	this.b3.setTransform(699.35,138.65,1.1951,1.1951);

	this.b2 = new lib.Symbol2();
	this.b2.name = "b2";
	this.b2.setTransform(403.05,138.75,1.1951,1.1951,0,0,0,0.1,0.1);

	this.b1 = new lib.Symbol1();
	this.b1.name = "b1";
	this.b1.setTransform(224.6,138.65,1.1951,1.1951);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_77.setTransform(1023.675,570.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAABOIgEAAIgCgBIgCgBIAAgCIAAhoIAAgBIACgBIACgBIAEAAIAEAAIADABIACABIABABIAABoIgBACIgCABIgDABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAADADQACACAAAHQAAAHgCACQgEACgGAAQgGAAgCgCg");
	this.shape_78.setTransform(1017.1,569.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAjBSIgEAAIgDgBIgCgCIAAgBIAAg+QAAgIgCgGQgBgEgDgEQgCgFgFgBQgEgCgFAAQgHAAgHAEQgHAGgIAJIAABJIgBABIgBACIgDABIgFAAIgEAAIgDgBIgCgCIAAgBIAAibIAAgBIACgBIADgCIAEAAIAFAAIADACIABABIABABIAAA/QAIgIAJgFQAIgEAHAAQALAAAHADQAHAEAFAGQAEAGACAIQACAHAAALIAABAIAAABIgCACIgDABIgFAAg");
	this.shape_79.setTransform(1008.175,568.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgOA5IgJgCIgHgDIgEgDIgCgDIAAgGIAAgDIABgDIABgCIABAAIAEACIAGADIAJAEQAFACAGAAIAIgCIAHgDIAFgFQABgDAAgEQAAgFgCgDIgGgGIgJgDIgIgFIgKgDIgIgGQgEgEgCgFQgDgFAAgGQAAgHADgFQACgGAFgFQAFgEAHgCQAHgDAJAAIAIABIAIACIAFACIAEACIACACIAAACIABACIAAACIAAAEIgBADIgBABIgBAAIgDgBIgGgCIgHgEQgEgBgGAAQgEAAgDABQgEABgCADIgEAEIgBAHQAAAEACADQACADAEACQAEADAEACIAJADIAKAFQAFABAEAEQADAEADAEQACAFAAAHQAAAIgDAGQgDAGgFAFQgGAEgHACQgIACgIAAIgLAAg");
	this.shape_80.setTransform(991.825,571.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAjA5IgEAAIgDgBIgCgBIAAgCIAAg8QAAgJgCgGQgBgFgDgEQgCgEgFgCQgEgCgFAAQgHAAgHAFQgHAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAFAAIACABIACABIAAABIAAAOQAJgKAJgEQAIgFAIAAQALAAAHAEQAHADAFAGQAEAGACAIQACAIAAALIAAA/IAAACIgCABIgDABIgFAAg");
	this.shape_81.setTransform(980.975,571.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWA2QgLgEgGgHQgGgIgDgKQgDgLAAgNQgBgMAEgLQADgLAHgHQAGgIAKgEQALgEAMgBQANAAAJAEQAKAEAHAHQAGAIADAKQADAKAAAOQABALgEALQgDALgHAIQgGAIgLAFQgKADgMAAQgNABgJgEgAgNglQgHADgDAFQgFAFgCAIQgBAHAAAJQgBAIACAIQABAIAFAFQADAGAHADQAFADAJAAQAJAAAFgDQAHgDAEgFQAEgGACgHQABgHAAgKQABgHgCgIQgBgIgFgFQgDgGgGgDQgHgEgIAAQgJAAgFAEg");
	this.shape_82.setTransform(968.4,571.35);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAABOIgEAAIgDgBIgBgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIAEABIABABIAAABIAABoIAAACIgBABIgEABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAACADQADACAAAHQAAAHgDACQgCACgHAAQgGAAgCgCg");
	this.shape_83.setTransform(959.35,569.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAjA5IgEAAIgDgBIgCgBIAAgCIAAg8QAAgJgCgGQgBgFgDgEQgCgEgFgCQgEgCgFAAQgHAAgHAFQgHAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAFAAIACABIACABIAAABIAAAOQAJgKAJgEQAIgFAIAAQALAAAHAEQAHADAFAGQAEAGACAIQACAIAAALIAAA/IAAACIgCABIgDABIgFAAg");
	this.shape_84.setTransform(945.075,571.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgSA2QgJgEgHgGQgHgIgDgKQgDgLAAgOQAAgNADgLQAEgLAGgHQAHgIAJgDQAJgEALgBQAMABAJAEQAJADAFAHQAGAHADAJQACAJAAAKIAAADQAAAEgCACQgCACgDAAIhEAAQAAAIABAHQACAHAEAFQAEAGAHACQAGADAJAAIANgBIAKgDIAHgCIAFgCIABABIABABIABACIAAADIAAAEIgBABIAAACIgBABIgEADIgIACIgMACIgOABQgMABgKgEgAgLgnQgFACgEAFQgDAFgCAFQgCAHAAAGIA4AAQAAgQgHgIQgHgJgOAAQgGABgGACg");
	this.shape_85.setTransform(932.775,571.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAjBSIgEAAIgDgBIgCgCIAAgBIAAg+QAAgIgCgGQgBgEgDgEQgCgFgFgBQgEgCgFAAQgHAAgHAEQgHAGgIAJIAABJIgBABIgBACIgDABIgFAAIgEAAIgDgBIgCgCIAAgBIAAibIAAgBIACgBIADgCIAEAAIAFAAIADACIABABIABABIAAA/QAIgIAJgFQAIgEAHAAQALAAAHADQAHAEAFAGQAEAGACAIQACAHAAALIAABAIAAABIgCACIgDABIgFAAg");
	this.shape_86.setTransform(920.675,568.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAjA4IgHAAIgDgBIgDgBIgBgCIgVhLIAAgCIAAACIgUBLIgCACIgCABIgEABIgGAAIgGAAIgEgBIgBgBIgBgCIgghjIAAgDIgBgCIABgBIACgBIADgBIAEAAIAGAAIACABIACABIABABIAZBXIAAABIAAgBIAYhXIABgBIABgBIADgBIAEAAIAEAAIAEABIABABIABABIAZBXIAAABIAAgBIAZhXIABgBIACgBIACgBIAGAAIAEAAIADABIABABIABABIgBACIgBADIgfBjIgBACIgCABIgEABIgFAAg");
	this.shape_87.setTransform(905.8,571.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZBOQgHgFgFgIQgGgHgCgLQgCgJAAgMQAAgOACgLQAEgKAFgHQAGgIAJgEQAIgEALAAQAIAAAIAEQAIAEAHAHIAAg9IAAgBIACgBIADgBIAEAAIAGAAIACABIACABIAAABIAACbIAAACIgCABIgCAAIgEAAIgEAAIgDAAIgBgBIgBgCIAAgOQgIAJgJAFQgJAFgKAAQgLAAgJgEgAgNgMQgFADgDAGQgDAFgCAHIgBAPIABAPQABAIADAGQADAGAFADQAFAEAIAAIAHgCIAGgDIAIgGIAJgKIAAgqQgIgJgHgEQgIgGgGAAQgIAAgFAEg");
	this.shape_88.setTransform(1038.65,537.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_89.setTransform(1026.725,539.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_90.setTransform(1016.825,538.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgOA2QgIgEgHgHQgFgHgEgLQgDgKABgOQgBgOAEgMQAEgKAHgIQAHgGAIgEQAJgDAJAAIALAAIAIADIAHAEIAFACIABADIABACIABADIAAADIgBAHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAIgFgEIgJgEQgFgCgHAAQgNAAgHALQgIAKAAATQAAAKACAIQADAHADAGQAEAFAFADQAFACAHAAQAGAAAGgCIAIgFIAGgEIAEgDIABABIABACIABADIAAADIAAAEIAAACIgBACIgBACIgGAEIgIAEIgJADIgLABQgKAAgJgEg");
	this.shape_91.setTransform(1008.1,539.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_92.setTransform(996.975,539.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEQAAAEgBACQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_93.setTransform(987.075,538.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_94.setTransform(977.425,539.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgZBOQgHgFgFgIQgGgHgCgLQgDgJABgMQAAgOACgLQAEgKAFgHQAGgIAJgEQAIgEALAAQAIAAAIAEQAHAEAIAHIAAg9IAAgBIACgBIADgBIAEAAIAFAAIADABIACABIABABIAACbIgBACIgCABIgCAAIgEAAIgEAAIgDAAIgBgBIgBgCIAAgOQgIAJgJAFQgJAFgJAAQgMAAgJgEgAgNgMQgFADgDAGQgDAFgCAHIgCAPIACAPQABAIADAGQADAGAFADQAFAEAIAAIAHgCIAHgDIAHgGIAJgKIAAgqQgIgJgHgEQgHgGgIAAQgGAAgGAEg");
	this.shape_95.setTransform(964.95,537.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_96.setTransform(949.425,538.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAjA5IgEAAIgDgBIgCgBIAAgCIAAg8QAAgJgCgGQgBgFgDgEQgCgEgFgCQgEgCgFAAQgHAAgHAFQgHAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAFAAIACABIACABIAAABIAAAOQAJgKAJgEQAIgFAIAAQALAAAHAEQAHADAFAGQAEAGACAIQACAIAAALIAAA/IAAACIgCABIgDABIgFAAg");
	this.shape_97.setTransform(939.625,539.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_98.setTransform(927.325,539.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgUA5IgFAAIgDgBIgBgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIADABIACABIAAABIAAAQIAIgLQADgEADgCIAHgDIAGgBIAEAAIAEABIAEABIACABIABABIABACIAAACIAAAEIAAAFIgBACIAAACIgCAAIgDAAIgCgBIgFgBIgEgBIgGABIgFAEIgGAHIgIALIAABEIAAACIgBABIgEABIgEAAg");
	this.shape_99.setTransform(918.25,539.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgUA5IgFAAIgCgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIADABIACABIAAABIAAAQIAIgLQAEgEACgCIAHgDIAHgBIADAAIAEABIAEABIACABIABABIAAACIAAACIAAAEIAAAFIAAACIgBACIgBAAIgCAAIgDgBIgFgBIgEgBIgGABIgGAEIgFAHIgHALIAABEIgBACIgBABIgEABIgEAAg");
	this.shape_100.setTransform(909.95,539.725);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgZA1QgHgDgEgGQgFgGgBgIQgCgIAAgLIAAg/IAAgCIACgBIADgBIAEAAIAFAAIADABIABABIABACIAAA8QAAAJABAGQACAFACAEQADAEAEACQAEACAGAAQAGAAAIgFQAHgFAIgKIAAhIIAAgCIACgBIADgBIAEAAIAFAAIADABIACABIAAACIAABoIAAABIgCACIgCAAIgFAAIgEAAIgDAAIgBgCIAAgBIAAgOQgJAKgJAEQgJAFgIAAQgKAAgIgEg");
	this.shape_101.setTransform(898.875,539.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQBIQgMgEgJgKQgIgKgEgNQgFgPAAgSQAAgSAFgOQAFgPAJgKQAIgLANgFQAMgGANAAQAHAAAGACIAMADIAJAEQAEADACACIACABIAAACIABADIAAAEIAAAEIgBADIgBABIgCABIgEgCIgIgGQgEgCgHgCQgHgDgJAAQgKAAgHAEQgIAEgGAIQgGAIgDALQgEAMAAANQAAAOADALQADALAGAIQAGAHAJAEQAHAEALAAQAJAAAGgDIAMgEIAIgGIAFgCIABAAIABACIAAADIABAEIAAADIgBADIgBACIgBABIgFAFIgJAEIgNAEQgHACgJAAQgOgBgLgFg");
	this.shape_102.setTransform(886.525,537.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("ABEA5IgEAAIgDgBIgCgBIAAgCIAAg/QAAgGgCgGQgBgFgCgEQgDgEgEgCQgEgCgFAAQgHAAgHAFQgGAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgBgBIgBgCIAAg/IgBgMQgBgFgDgEQgCgEgEgCQgEgCgGAAQgGAAgHAFQgHAFgIAKIAABIIAAACIgCABIgDABIgEAAIgFAAIgDgBIgBgBIgBgCIAAhoIAAgBIACgBIADgBIAEAAIAEAAIADABIABABIAAABIAAAOQAJgKAJgEQAIgFAJAAQAGAAAFACIAJAEIAGAGQADAEACAFIAKgKIAJgGQAEgDAFgBIAIgBQAKAAAHAEQAHADAEAGQAEAGACAIQACAIAAAJIAABBIgBACIgBABIgDABIgFAAg");
	this.shape_103.setTransform(717.275,539.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgZA1QgHgDgEgGQgFgGgBgIQgCgIAAgLIAAg/IAAgCIACgBIADgBIAEAAIAFAAIADABIABABIABACIAAA8QAAAJABAGQACAFACAEQADAEAEACQAEACAGAAQAGAAAIgFQAHgFAIgKIAAhIIAAgCIACgBIADgBIAEAAIAFAAIADABIACABIAAACIAABoIAAABIgCACIgCAAIgFAAIgEAAIgDAAIgBgCIAAgBIAAgOQgJAKgJAEQgJAFgIAAQgKAAgIgEg");
	this.shape_104.setTransform(701.525,539.875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZA1QgHgDgEgGQgFgGgBgIQgCgIAAgLIAAg/IAAgCIACgBIADgBIAEAAIAFAAIADABIABABIABACIAAA8QAAAJABAGQACAFACAEQADAEAEACQAEACAGAAQAGAAAIgFQAHgFAIgKIAAhIIAAgCIACgBIADgBIAEAAIAFAAIADABIACABIAAACIAABoIAAABIgCACIgCAAIgFAAIgEAAIgDAAIgBgCIAAgBIAAgOQgJAKgJAEQgJAFgIAAQgKAAgIgEg");
	this.shape_105.setTransform(689.025,539.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgOA2QgJgEgFgHQgHgHgCgLQgDgKAAgOQAAgOADgMQAEgKAGgIQAIgGAJgEQAIgDAJAAIAKAAIAJADIAHAEIAEACIADADIABACIAAADIAAADIgBAHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgHgEIgIgEQgFgCgHAAQgMAAgIALQgHAKAAATQAAAKABAIQADAHADAGQAEAFAGADQAEACAHAAQAGAAAFgCIAJgFIAGgEIAEgDIACABIABACIAAADIABADIgBAEIAAACIgBACIgCACIgEAEIgJAEIgJADIgKABQgLAAgJgEg");
	this.shape_106.setTransform(677.85,539.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgVA3QgGgCgFgDQgFgFgCgFQgDgGAAgJQAAgIAEgHQADgGAHgEQAHgEAKgCQAJgCAMAAIAOAAIAAgJQAAgFgBgFQgBgFgDgDQgDgDgFgBQgEgCgHAAQgGAAgGACIgKADIgHAEIgEACIgCAAIgBgCIgBgDIAAgCIABgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgDIAJgEIALgDIALAAQALgBAIADQAIADAFAEQAFAFACAHQACAIAAAKIAABFIgBADIgCABIgFAAIgFAAIgDgBIAAgDIAAgKQgHAIgJADQgIAFgJAAQgIAAgHgDgAgFAGIgKAEQgEADgBADQgCAEAAAFQAAAIAFAFQAFAEAJAAQAHAAAHgDQAGgEAHgIIAAgWIgQAAQgIgBgFACg");
	this.shape_107.setTransform(666.525,539.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAABMIgDAAIgDAAIgDgBIgBgBIgCgBIAAgBIgyiMIgBgEIABgCIAEgBIAGAAIAFAAIADABIACABIABABIAqB/IAAAAIAqh+IABgCIACgBIADgBIAGAAIAFAAIADABIABACIgBAEIgyCMIgBACIgCABIgEABIgGAAg");
	this.shape_108.setTransform(655.675,537.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZBOQgHgFgFgIQgFgHgDgLQgCgJAAgMQAAgOADgLQADgKAFgHQAGgIAJgEQAIgEALAAQAIAAAIAEQAIAEAHAHIAAg9IAAgBIACgBIADgBIAEAAIAGAAIACABIACABIAAABIAACbIAAACIgCABIgCAAIgEAAIgEAAIgDAAIgBgBIgBgCIAAgOQgIAJgJAFQgJAFgKAAQgLAAgJgEgAgNgMQgFADgDAGQgDAFgCAHIgBAPQgBAHACAIQABAIADAGQADAGAFADQAFAEAIAAIAHgCIAGgDIAIgGIAJgKIAAgqQgIgJgHgEQgIgGgGAAQgIAAgFAEg");
	this.shape_109.setTransform(459.05,537.35);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAABRIgDAAIgDAAIgCgBIgBgCIAAibIABgCIACAAIADgBIADAAIAFAAIACABIACAAIAAACIAACbIAAACIgCABIgCAAIgFAAg");
	this.shape_110.setTransform(450.35,537.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_111.setTransform(441.625,539.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAABOIgEAAIgCgBIgCgBIAAgCIAAhoIAAgBIACgBIACgBIAEAAIAEAAIADABIACABIABABIAABoIgBACIgCABIgDABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAADADQACACAAAHQAAAHgCACQgEACgGAAQgGAAgCgCg");
	this.shape_112.setTransform(433,537.625);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgGBSIgFAAIgDgBIgBgBIgBgCIAAhaIgPAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgCgCAAgFIAAgDIACgDIABgBIABgBIAPAAIAAgKQAAgLACgIQACgIAEgFQAFgFAFgCQAGgDAIAAIAIABIAHACIACABIABACIABACIAAAFIAAADIgBACIAAABIgCAAIgBAAIgEgBIgEgCIgFAAQgEAAgDABQgEACgBADIgDAIIgBALIAAALIAXAAIACABIACABIABADIAAADIgBAHQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgXAAIAABaIAAACIgCABIgCABIgEAAg");
	this.shape_113.setTransform(426.95,537.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgOA2QgIgEgHgHQgGgHgDgLQgCgKAAgOQAAgOADgMQAEgKAGgIQAIgGAIgEQAJgDAJAAIAKAAIAJADIAHAEIAFACIACADIAAACIABADIAAADIgBAHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAIgFgEIgJgEQgFgCgHAAQgNAAgHALQgHAKgBATQAAAKACAIQACAHAEAGQAEAFAFADQAFACAHAAQAGAAAGgCIAIgFIAGgEIAEgDIACABIAAACIABADIAAADIAAAEIAAACIgBACIgBACIgGAEIgIAEIgJADIgLABQgKAAgJgEg");
	this.shape_114.setTransform(412.65,539.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAABOIgDAAIgEgBIgBgBIgBgCIAAhoIABgBIABgBIAEgBIADAAIAFAAIACABIACABIAAABIAABoIAAACIgCABIgCABIgFAAgAgJg4QgCgCAAgHQAAgHACgCQADgDAGAAQAHAAACADQADACAAAHQAAAHgDACQgDACgGAAQgGAAgDgCg");
	this.shape_115.setTransform(404.7,537.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUA5IgFAAIgDgBIgBgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIADABIACABIAAABIAAAQIAIgLQADgEADgCIAHgDIAGgBIAEAAIAEABIAEABIACABIABABIABACIAAACIAAAEIAAAFIgBACIAAACIgCAAIgDAAIgCgBIgFgBIgEgBIgGABIgFAEIgGAHIgHALIAABEIgBACIgBABIgEABIgEAAg");
	this.shape_116.setTransform(398.5,539.725);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgCAAgEIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEQAAAEgBACQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_117.setTransform(389.475,538.475);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgOA2QgJgEgFgHQgHgHgCgLQgDgKgBgOQABgOAEgMQADgKAGgIQAIgGAJgEQAIgDAKAAIAKAAIAIADIAHAEIAEACIACADIACACIAAADIAAADIgBAHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgHgEIgIgEQgFgCgGAAQgNAAgIALQgIAKABATQAAAKACAIQACAHADAGQAEAFAGADQAEACAHAAQAHAAAEgCIAJgFIAHgEIADgDIABABIACACIAAADIABADIgBAEIAAACIgBACIgCACIgEAEIgIAEIgKADIgKABQgLAAgJgEg");
	this.shape_118.setTransform(380.75,539.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgSA2QgJgDgHgIQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMADIgOABQgMAAgKgEgAgLgnQgFADgEAEQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOABQgGAAgGACg");
	this.shape_119.setTransform(369.575,539.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAABRIgEAAIgCAAIgCgBIgBgCIAAibIABgCIACAAIACgBIAEAAIAFAAIACABIACAAIABACIAACbIgBACIgCABIgCAAIgFAAg");
	this.shape_120.setTransform(360.9,537.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AghBLQgDAAgCgCQgDgBAAgEIAAiGQAAgFADgBQACgCADAAIBGAAIACAAIABACIABACIAAAEIAAAEIgBACIgBABIgCABIg6AAIAAAwIAyAAIACAAIABABIAAADIABAEIgBACIAAADIgBACIgCAAIgyAAIAAA2IA7AAIACABIABABIABACIAAAEIAAAEIgBACIgBACIgCAAg");
	this.shape_121.setTransform(352.7,537.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgOA5IgJgDIgHgCIgEgDIgCgDIAAgGIAAgEIABgCIABgBIABAAIAEABIAGADIAJAEQAFABAGAAIAIAAIAHgEIAFgFQABgDAAgFQAAgEgCgDIgGgFIgJgFIgIgDIgKgFIgIgFQgEgEgCgEQgDgGAAgHQAAgGADgGQACgFAFgEQAFgEAHgDQAHgDAJABIAIAAIAIABIAFADIAEACIACACIAAABIABACIAAAEIAAADIgBACIgBACIgBAAIgDgBIgGgDIgHgCQgEgCgGAAQgEAAgDACQgEABgCABIgEAGIgBAFQAAAFACADQACADAEADQAEACAEABIAJAFIAKAEQAFACAEADQADADADAGQACAEAAAHQAAAIgDAHQgDAFgFAFQgGAFgHABQgIADgIAAIgLgBg");
	this.shape_122.setTransform(256.125,572.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAABOIgEAAIgDgBIgBgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIAEABIABABIABABIAABoIgBACIgBABIgEABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAADADQACACAAAHQAAAHgCACQgDACgHAAQgGAAgCgCg");
	this.shape_123.setTransform(248.7,570.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAjBRIgEAAIgDAAIgCgBIAAgCIAAg9QAAgKgCgFQgBgFgDgEQgCgDgFgDQgEgCgFAAQgHAAgHAGQgHAFgIAIIAABKIgBACIgBABIgDAAIgFAAIgEAAIgDAAIgCgBIAAgCIAAibIAAgCIACgBIADAAIAEAAIAFAAIADAAIABABIABACIAAA/QAIgIAJgFQAIgEAHAAQALAAAHAEQAHADAFAGQAEAGACAIQACAHAAALIAABAIAAACIgCABIgDAAIgFAAg");
	this.shape_124.setTransform(239.775,570.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgCAAgEIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEQAAAEgBACQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_125.setTransform(229.275,571.325);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgSA2QgJgEgHgHQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEACIgIADIgMADIgOABQgMAAgKgEgAgLgnQgFACgEAFQgDAEgCAHQgCAFAAAHIA4AAQAAgPgHgJQgHgJgOABQgGAAgGACg");
	this.shape_126.setTransform(214.125,572.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAAA4IgFAAIgDgBIgDgBIgBgCIgkhjIAAgCIgBgCIAAgBIABgCIABgBIADAAIAFAAIAFAAIADAAIACACIABABIAcBWIAAABIABgBIAdhWIABgBIACgCIADAAIAFAAIAEAAIADAAIACACIAAABIAAACIAAABIAAABIgBABIgkBjIgBACIgDABIgDABIgGAAg");
	this.shape_127.setTransform(203,572.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgSA2QgJgEgHgHQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABAAIABACIABACIAAAEIAAACIgBACIAAACIgBABIgEACIgIADIgMADIgOABQgMAAgKgEgAgLgnQgFACgEAFQgDAEgCAHQgCAFAAAHIA4AAQAAgPgHgJQgHgJgOABQgGAAgGACg");
	this.shape_128.setTransform(191.775,572.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAABOIgEAAIgDgBIgBgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAEAAIAEABIABABIABABIAABoIgBACIgBABIgEABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAADADQACACAAAHQAAAHgCACQgDACgHAAQgGAAgCgCg");
	this.shape_129.setTransform(183.1,570.475);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAjBRIgEAAIgDAAIgCgBIAAgCIAAg9QAAgKgCgFQgBgFgDgEQgCgDgFgDQgEgCgFAAQgHAAgHAGQgHAFgIAIIAABKIgBACIgBABIgDAAIgFAAIgEAAIgDAAIgCgBIAAgCIAAibIAAgCIACgBIADAAIAEAAIAFAAIADAAIABABIABACIAAA/QAIgIAJgFQAIgEAHAAQALAAAHAEQAHADAFAGQAEAGACAIQACAHAAALIAABAIAAACIgCABIgDAAIgFAAg");
	this.shape_130.setTransform(174.175,570.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgOA2QgJgEgFgHQgHgHgCgLQgDgKgBgOQABgOAEgMQADgKAGgIQAIgGAJgEQAIgEAKABIAJABIAJACIAHAEIAEACIACADIACACIAAADIAAADIgBAHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgHgEIgIgEQgFgCgGAAQgNAAgIALQgIAKABATQAAAKACAIQACAHADAGQAEAFAGADQAEACAHAAQAHAAAEgCIAJgFIAHgEIADgDIABABIACACIAAADIABADIgBAEIAAACIgBACIgCACIgEAEIgIAEIgKADIgKABQgLAAgJgEg");
	this.shape_131.setTransform(162.95,572.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVA3QgGgCgFgDQgFgFgCgFQgDgHAAgIQAAgIAEgHQADgGAHgEQAHgEAKgCQAJgCAMAAIAOAAIAAgJQAAgFgBgFQgBgFgDgDQgDgDgFgBQgEgCgHAAQgGAAgGACIgKADIgHAEIgEACIgCAAIgBgCIgBgDIAAgDIABgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAFgDIAJgEIALgCIALgBQALgBAIADQAIADAFAEQAFAFACAHQACAIAAAKIAABFIgBADIgCABIgFAAIgFAAIgDgBIAAgDIAAgKQgHAIgJADQgIAEgJABQgIAAgHgDgAgFAGIgKAEQgEADgBADQgCAEAAAFQAAAIAFAFQAFAEAJAAQAHAAAHgDQAGgEAHgIIAAgWIgQAAQgIgBgFACg");
	this.shape_132.setTransform(151.675,572.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgXA2QgJgEgHgIQgGgGgDgLQgEgLAAgNQABgMADgLQADgLAHgHQAHgIAKgEQAJgFANAAQANAAAKAEQAJAEAGAHQAHAHAEALQADAKAAAOQgBALgDALQgDALgHAIQgHAIgJAFQgLADgMAAQgNAAgKgDgAgOgmQgFADgFAGQgDAFgCAIQgCAIgBAIQAAAIACAIQABAIAEAFQAEAGAGADQAHAEAIgBQAIAAAHgCQAGgDAEgGQAEgFABgIQADgHAAgKQAAgHgCgIQgCgIgDgFQgEgGgGgDQgGgDgKgBQgIAAgGADg");
	this.shape_133.setTransform(251.6,541.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_134.setTransform(241.375,539.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgZBOQgHgFgFgHQgFgIgDgKQgDgKABgMQAAgOACgKQAEgKAFgIQAGgIAJgEQAIgEALAAQAIAAAIAEQAHAEAIAIIAAg9IAAgCIACgBIADgBIAEAAIAFAAIADABIACABIABACIAACaIgBABIgCACIgCAAIgEAAIgEAAIgDAAIgBgCIgBgBIAAgOQgIAJgJAFQgJAFgJAAQgMAAgJgEgAgNgMQgFADgDAGQgDAFgCAHIgBAOIABARQABAHADAGQADAFAFAEQAFAEAIAAIAHgBIAHgEIAHgGIAJgKIAAgqQgIgIgHgGQgHgEgIAAQgGgBgGAEg");
	this.shape_135.setTransform(225.6,538.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgSA2QgJgEgHgGQgHgIgDgKQgDgLAAgOQAAgNADgLQAEgLAGgHQAHgIAJgDQAJgFALAAQAMAAAJAFQAJADAFAHQAGAGADAKQACAJAAAKIAAADQAAAEgCACQgCACgDAAIhEAAQAAAIABAIQACAGAEAFQAEAGAHACQAGADAJAAIANgBIAKgDIAHgCIAFgCIABABIABABIABACIAAADIAAAEIgBACIAAABIgBABIgEACIgIADIgMACIgOABQgMAAgKgDgAgLgnQgFACgEAFQgDAFgCAFQgCAHAAAGIA4AAQAAgPgHgJQgHgIgOgBQgGABgGACg");
	this.shape_136.setTransform(213.675,541.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgOA5IgJgCIgHgDIgEgDIgCgDIAAgGIAAgDIABgDIABgCIABAAIAEACIAGAEIAJADQAFABAGAAIAIgBIAHgDIAFgFQABgDAAgEQAAgFgCgDIgGgGIgJgDIgIgFIgKgDIgIgGQgEgEgCgFQgDgFAAgGQAAgHADgGQACgFAFgFQAFgEAHgCQAHgDAJAAIAIABIAIACIAFACIAEACIACACIAAABIABADIAAACIAAAEIgBADIgBABIgBABIgDgCIgGgDIgHgDQgEgBgGAAQgEAAgDABQgEABgCACIgEAFIgBAHQAAAEACADQACADAEACQAEADAEACIAJAEIAKAEQAFABAEAEQADAEADAEQACAFAAAHQAAAIgDAHQgDAFgFAFQgGAFgHACQgIABgIAAIgLAAg");
	this.shape_137.setTransform(203.125,541.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZA1QgHgDgEgGQgFgGgBgIQgCgIAAgLIAAg/IAAgCIACgBIADgBIAEAAIAFAAIADABIABABIABACIAAA8QAAAJABAGQACAFACAEQADAEAEACQAEACAGAAQAGAAAIgFQAHgFAIgKIAAhIIAAgCIACgBIADgBIAEAAIAFAAIADABIACABIAAACIAABoIAAABIgCACIgCAAIgFAAIgEAAIgDAAIgBgCIAAgBIAAgOQgJAKgJAEQgJAFgIAAQgKAAgIgEg");
	this.shape_138.setTransform(192.225,541.175);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgSA2QgJgEgHgGQgHgIgDgKQgDgLAAgOQAAgNADgLQAEgLAGgHQAHgIAJgDQAJgFALAAQAMAAAJAFQAJADAFAHQAGAGADAKQACAJAAAKIAAADQAAAEgCACQgCACgDAAIhEAAQAAAIABAIQACAGAEAFQAEAGAHACQAGADAJAAIANgBIAKgDIAHgCIAFgCIABABIABABIABACIAAADIAAAEIgBACIAAABIgBABIgEACIgIADIgMACIgOABQgMAAgKgDgAgLgnQgFACgEAFQgDAFgCAFQgCAHAAAGIA4AAQAAgPgHgJQgHgIgOgBQgGABgGACg");
	this.shape_139.setTransform(174.625,541.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgUA5IgFAAIgCgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAFAAIACABIABABIAAABIAAAQIAJgLQADgEADgCIAHgDIAHgBIADAAIAEABIAEABIACABIABABIAAACIAAACIAAAEIAAAFIAAACIgBACIgBAAIgCAAIgEgBIgEgBIgEgBIgFABIgHAEIgFAHIgHALIAABEIgBACIgCABIgDABIgEAAg");
	this.shape_140.setTransform(165.55,541.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgVA4QgGgDgFgEQgFgEgCgGQgDgFAAgIQAAgJAEgGQADgHAHgEQAHgEAKgCQAJgCAMAAIAOAAIAAgIQAAgHgBgEQgBgFgDgDQgDgDgFgCQgEgBgHAAQgGAAgGABIgKAFIgHADIgEACIgCgBIgBgBIgBgCIAAgEIABgEQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAIAFgEIAJgDIALgEIALgBQALAAAIADQAIACAFAFQAFAFACAIQACAHAAAKIAABGIgBACIgCABIgFAAIgFAAIgDgBIAAgCIAAgLQgHAHgJAFQgIADgJAAQgIAAgHgBgAgFAGQgGABgEADQgEACgBAFQgCADAAAFQAAAIAFAFQAFAFAJgBQAHAAAHgDQAGgEAHgIIAAgXIgQAAQgIABgFABg");
	this.shape_141.setTransform(154.575,541.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgOA5IgJgDIgHgCIgEgDIgCgDIAAgGIAAgEIABgCIABgBIABAAIAEABIAGADIAJAEQAFABAGABIAIgBIAHgEIAFgFQABgDAAgFQAAgEgCgDIgGgFIgJgFIgIgDIgKgFIgIgFQgEgDgCgFQgDgGAAgHQAAgGADgFQACgGAFgEQAFgFAHgCQAHgDAJABIAIAAIAIACIAFACIAEACIACACIAAACIABABIAAADIAAAEIgBACIgBACIgBAAIgDgBIgGgCIgHgDQgEgCgGAAQgEAAgDACQgEABgCACIgEAEIgBAGQAAAFACADQACADAEADQAEACAEACIAJADIAKAFQAFACAEADQADADADAGQACAEAAAHQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgIABIgLgBg");
	this.shape_142.setTransform(287.425,509.55);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgYBOQgJgFgFgIQgEgHgDgLQgCgKAAgLQgBgOADgLQAEgKAFgHQAGgIAJgEQAIgEALAAQAIAAAIAEQAIAEAHAIIAAg+IABgBIABgBIADgBIAFAAIAEAAIADABIACABIABABIAACbIgBACIgBABIgDABIgEAAIgEAAIgDgBIgBgBIgBgCIAAgOQgIAJgJAFQgJAFgJAAQgMAAgIgEgAgNgMQgFAEgDAFQgEAFgBAHIgCAPIACAPQABAIADAGQADAGAFAEQAFADAIAAIAGgCIAIgDIAIgGIAIgKIAAgqQgIgJgHgEQgHgGgIAAQgGABgGADg");
	this.shape_143.setTransform(276.2,507.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXA2QgKgEgGgHQgGgIgEgKQgDgKAAgOQABgMADgKQADgLAHgIQAHgIAJgFQAKgDANAAQANgBAJAEQALAEAFAHQAHAIADAKQAEALAAANQAAALgEAMQgDAKgHAIQgHAIgKAEQgKAEgMABQgNAAgKgEgAgOglQgGADgEAFQgDAGgDAHQgCAHAAAJQABAJABAHQACAHADAGQAEAGAGADQAHADAIABQAJAAAFgEQAHgDAEgFQAEgFABgIQACgIAAgJQAAgIgBgHQgBgIgEgFQgEgGgGgDQgGgDgJAAQgIAAgHADg");
	this.shape_144.setTransform(264,509.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAjBSIgEAAIgDgBIgCgBIAAgCIAAg9QAAgKgCgFQgBgFgDgEQgCgEgFgCQgEgCgFAAQgHAAgHAGQgHAFgIAIIAABKIgBACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIAAgCIAAibIAAgCIACAAIADgBIAEAAIAFAAIADABIABAAIABACIAAA/QAIgIAJgFQAIgEAHAAQALAAAHAEQAHADAFAGQAEAGACAIQACAHAAALIAABAIAAACIgCABIgDABIgFAAg");
	this.shape_145.setTransform(251.575,507);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_146.setTransform(241.075,508.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgSA2QgJgEgHgHQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABABIABABIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMACIgOACQgMAAgKgEgAgLgnQgFACgEAFQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOAAQgGAAgGADg");
	this.shape_147.setTransform(231.375,509.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("ABEA5IgEAAIgDgBIgCgBIAAgCIAAg/QAAgGgCgGQgBgFgCgEQgDgEgEgCQgEgCgFAAQgHAAgHAFQgGAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgBgBIgBgCIAAg/IgBgMQgBgFgDgEQgCgEgEgCQgEgCgGAAQgGAAgHAFQgHAFgIAKIAABIIAAACIgCABIgDABIgEAAIgFAAIgDgBIgBgBIgBgCIAAhoIAAgBIACgBIADgBIAEAAIAEAAIADABIABABIAAABIAAAOQAJgKAJgEQAIgFAJAAQAGAAAFACIAJAEIAGAGQADAEACAFIAKgKIAJgGQAEgDAFgBIAIgBQAKAAAHAEQAHADAEAGQAEAGACAIQACAIAAAJIAABBIgBACIgBABIgDABIgFAAg");
	this.shape_148.setTransform(215.925,509.475);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AABBFQgFgDgEgEQgDgEgCgHQgCgHAAgJIAAg8IgPAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgGIAAgEIABgCIABgCIACAAIAOAAIAAgZIABgCIABgBIADgBIAFAAIAFAAIABABIACABIAAACIAAAZIAbAAIACAAIABACIABACIAAAEIgBAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgbAAIAAA5QAAALAEAGQADAFAIAAIAFAAIAEgBIACgBIADgBIABAAIABABIAAADIAAADIAAAFIgCADIgCACIgFACIgFAAIgFABQgIAAgGgCg");
	this.shape_149.setTransform(196.775,508.225);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAjA5IgEAAIgDgBIgCgBIAAgCIAAg8QAAgJgCgGQgBgFgDgEQgCgEgFgCQgEgCgFAAQgHAAgHAFQgHAFgIAKIAABIIgBACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIAAgCIAAhoIAAgBIABgBIADgBIAEAAIAFAAIACABIACABIAAABIAAAOQAJgKAJgEQAIgFAIAAQALAAAHAEQAHADAFAGQAEAGACAIQACAIAAALIAAA/IAAACIgCABIgDABIgFAAg");
	this.shape_150.setTransform(186.975,509.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgSA2QgJgEgHgHQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABABIABABIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMACIgOACQgMAAgKgEgAgLgnQgFACgEAFQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOAAQgGAAgGADg");
	this.shape_151.setTransform(174.675,509.55);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgUA5IgEAAIgEgBIgBgBIgBgCIAAhoIAAgBIACgBIADgBIAEAAIAFAAIACABIABABIAAABIAAAQIAJgLQAEgEACgCIAHgDIAGgBIAEAAIAEABIAEABIACABIABABIABACIAAACIAAAEIAAAFIgBACIAAACIgCAAIgDAAIgDgBIgDgBIgFgBIgGABIgFAEIgGAHIgIALIAABEIAAACIgCABIgCABIgFAAg");
	this.shape_152.setTransform(165.6,509.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgSA2QgJgEgHgHQgHgHgDgLQgDgKAAgPQAAgMADgKQAEgLAGgIQAHgHAJgFQAJgDALAAQAMAAAJADQAJAEAFAHQAGAGADAKQACAIAAALIAAAEQAAADgCACQgCACgDAAIhEAAQAAAJABAGQACAHAEAGQAEAEAHAEQAGACAJAAIANgBIAKgDIAHgDIAFgBIABABIABABIABACIAAAEIAAACIgBACIAAACIgBABIgEADIgIACIgMACIgOACQgMAAgKgEgAgLgnQgFACgEAFQgDAEgCAHQgCAFAAAHIA4AAQAAgQgHgIQgHgJgOAAQgGAAgGADg");
	this.shape_153.setTransform(154.775,509.55);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgGBSIgFAAIgDgBIgBgBIgBgCIAAhaIgPAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgCgGIAAgEIACgDIABgBIABAAIAPAAIAAgLQAAgLACgIQACgIAEgFQAFgFAFgDQAGgCAIAAIAIABIAHABIACACIABACIABACIAAAFIAAADIgBACIAAABIgCAAIgBAAIgEgBIgDgCIgGAAQgEAAgDABQgEACgCADIgCAHIgBAMIAAAMIAXAAIACAAIACABIABADIAAAEIgBAGQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgXAAIAABaIAAACIgCABIgCABIgEAAg");
	this.shape_154.setTransform(146.15,506.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgGBSIgFAAIgDgBIgBgBIgBgCIAAhaIgPAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgGIAAgEIABgDIABgBIABAAIAPAAIAAgLQAAgLACgIQACgIAEgFQAEgFAGgDQAGgCAIAAIAIABIAGABIADACIABACIACACIAAAFIgBADIgBACIAAABIgCAAIgCAAIgCgBIgFgCIgFAAQgEAAgDABQgDACgDADIgCAHIgBAMIAAAMIAXAAIADAAIABABIABADIAAAEIgBAGQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgXAAIAABaIAAACIgBABIgDABIgEAAg");
	this.shape_155.setTransform(139.15,506.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAABOIgEAAIgCgBIgCgBIAAgCIAAhoIAAgBIACgBIACgBIAEAAIAEAAIADABIACABIABABIAABoIgBACIgCABIgDABIgEAAgAgIg4QgDgCAAgHQAAgHADgCQACgDAGAAQAHAAADADQACACAAAHQAAAHgCACQgEACgGAAQgGAAgCgCg");
	this.shape_156.setTransform(132.4,507.375);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgxBLQgDAAgDgCQgCgBAAgFIAAiGQAAgEACgBQADgCADAAIAiAAQASAAAOAEQANAGAKAJQAIAKAFANQAFAOAAARQAAATgFAOQgFAOgJAKQgKAKgOAFQgOAEgTAAgAglA6IAVAAQAOAAAJgDQAKgEAHgHQAGgHAEgLQADgMAAgOQAAgMgDgLQgDgLgHgIQgGgHgKgEQgJgFgQAAIgUAAg");
	this.shape_157.setTransform(122.75,507.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(66));

	// Layer_5
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgHBHIgFgCQgCgCgBgEIgBgJIABgIQABgEACgCQACgCADgBIAHgBIAIABQADABACACIADAGIABAIIgBAJIgDAGIgFACIgIABIgHgBgAgHgkIgFgDQgCgCgBgEIgBgIIABgJQABgDACgCIAFgEIAHgBIAIABIAFAEIADAFIABAJIgBAIIgDAGIgFADIgIABIgHgBg");
	this.shape_158.setTransform(820.2,36.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AghBMIgFgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIACACIAAACIAAAUIALgOIAJgIIAJgEIAJgBIAEAAIAFABIAGABIADACIABABIABACIAAADIAAAGIAAAGIgBADIgBADIgCAAIgDAAIgEgCIgFgBIgGgBQgEAAgDACQgEABgFAEQgDADgEAGIgKAPIAABbIgBADIgCABIgEABIgHAAIgFAAg");
	this.shape_159.setTransform(811,36.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_160.setTransform(796.525,36.375);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AACBcQgIgDgFgGQgFgGgCgIQgCgKAAgMIAAhRIgTAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQgBgDAAgGIAAgFIABgDIADgCIACAAIATAAIAAgiIAAgCIACgBIAFgBIAGgBIAGABIADABIACABIABACIAAAiIAkAAIACAAIACACIAAADIABAFQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgkAAIAABOQAAAOAEAIQAEAHALAAIAHgBIAFgBIAEgCIACAAIACAAIABABIAAADIABAFIgBAHIgCAEIgDACIgGACIgHABIgHABQgLAAgHgDg");
	this.shape_161.setTransform(783.35,34.575);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_162.setTransform(770.425,36.375);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("ABVBMIgEgBIgCgBIgBgDIAAhUQAAgJgBgHQgCgIgDgFQgEgFgFgDQgFgDgHAAQgJAAgJAHQgJAHgLANIAABhIgBADIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgDIAAhUQAAgJgCgHQgBgIgEgFQgDgFgFgDQgGgDgHAAQgJAAgJAHQgJAHgLANIAABhIAAADIgCABIgEABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIABACIABACIAAASQAMgNALgGQALgGAMAAQAIAAAHACQAHACAGAEQAFADADAFQADAFADAHQAHgIAGgFIAMgJIAMgFIALgBQAOAAAJAFQAJAEAGAIQAFAIADALQACALAAALIAABYIAAADIgCABIgEABIgHAAIgGAAg");
	this.shape_163.setTransform(749.775,36.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgfBIQgNgFgIgKQgJgKgEgOQgEgOAAgSQAAgQAEgOQAFgPAJgKQAJgLANgGQAOgFARAAQARAAANAFQANAFAIAKQAJAKAEAOQAEAOAAARQAAARgEAOQgFAPgJAKQgJALgNAFQgOAGgQAAQgSAAgNgFgAgSgzQgJAEgFAIQgFAHgDAKQgCALAAALQAAALACAKQACAKAFAIQAFAIAIAEQAIAFAMAAQALAAAJgFQAIgEAFgHQAGgHACgKQADgLAAgMQAAgKgCgKQgCgLgFgHQgFgIgJgEQgIgFgMAAQgLAAgIAEg");
	this.shape_164.setTransform(728.475,36.375);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgiBMIgDgBIgDgBIAAgDIAAiLIAAgCIADgCIADgBIAGAAIAFAAIAEABIACACIAAACIAAAUIALgOIAIgIIAJgEIAJgBIAGAAIAEABIAGABIADACIABABIABACIAAADIAAAGIAAAGIgBADIgBADIgCAAIgDAAIgEgCIgFgBIgGgBQgEAAgEACQgDABgFAEQgDADgFAGIgKAPIAABbIAAADIgCABIgEABIgGAAIgHAAg");
	this.shape_165.setTransform(715.9,36.275);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AACBcQgHgDgGgGQgEgGgDgIQgCgKAAgMIAAhRIgTAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgCgDAAgGIAAgFIACgDIACgCIACAAIATAAIAAgiIAAgCIACgBIAFgBIAGgBIAGABIADABIACABIABACIAAAiIAkAAIACAAIACACIABADIAAAFQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgkAAIAABOQAAAOAEAIQAEAHALAAIAHgBIAFgBIAEgCIACAAIACAAIABABIABADIAAAFIAAAHIgDAEIgDACIgGACIgGABIgIABQgLAAgHgDg");
	this.shape_166.setTransform(703.8,34.575);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgTBIQgMgFgHgJQgIgKgEgOQgFgOAAgSQABgUAFgPQAEgPAJgJQAKgKAMgEQAMgFAMAAQAHAAAGABIAMADIAJAFIAGAFIADADIABACIABAEIAAAEQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQgDAAgDgCIgHgGIgMgGQgGgCgJAAQgRAAgLAOQgJAOgBAaQAAAOADAKQACAKAFAHQAGAHAHAEQAGADAKAAQAIAAAHgDIAMgGIAIgGQADgDACAAIACABIACACIABAEIAAAFIAAAFIgBADIgBACIgDADIgHAFIgKAFIgMAEQgIABgHAAQgOAAgMgFg");
	this.shape_167.setTransform(692.1,36.375);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_168.setTransform(677.175,36.375);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Ag5BoIgEgBIgCgCIgBgCIAAjDIABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAATIAMgMQAGgFAGgDQAGgDAHgCQAFgBAHAAQAPAAALAGQALAGAHAKQAGAKADAOQAEAOAAAPQAAASgEAOQgEAPgIAKQgIAKgLAGQgMAFgOAAQgGAAgFgBQgFgBgFgDIgKgHIgLgJIAABGIgBACIgCACIgEABIgGAAIgGAAgAgGhQQgFACgFADQgFADgFAGIgMAMIAAA3QALANAJAHQAKAHAJAAQAKAAAHgFQAHgEAEgIQAFgIACgJQACgJAAgKQAAgLgCgKQgBgKgFgIQgDgIgHgEQgHgFgKAAIgJABg");
	this.shape_169.setTransform(661.325,39.075);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_170.setTransform(646.175,36.375);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_171.setTransform(626.425,36.375);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_172.setTransform(613.925,36.375);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_173.setTransform(599.575,36.375);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("ABVBMIgEgBIgCgBIgBgDIAAhUQAAgJgBgHQgCgIgDgFQgEgFgFgDQgFgDgHAAQgJAAgJAHQgJAHgLANIAABhIgBADIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgDIAAhUQAAgJgCgHQgBgIgEgFQgDgFgFgDQgGgDgHAAQgJAAgJAHQgJAHgLANIAABhIAAADIgCABIgEABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIABACIABACIAAASQAMgNALgGQALgGAMAAQAIAAAHACQAHACAGAEQAFADADAFQADAFADAHQAHgIAGgFIAMgJIAMgFIALgBQAOAAAJAFQAJAEAGAIQAFAIADALQACALAAALIAABYIAAADIgCABIgEABIgHAAIgGAAg");
	this.shape_174.setTransform(579.625,36.275);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_175.setTransform(551.425,36.375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AApBMIgEgBIgBgBIgBgDIAAhRQAAgMgCgHQgCgIgDgFQgEgFgGgDQgGgDgHAAQgJAAgKAHQgJAHgLANIAABhIAAADIgCABIgFABIgGAAIgGAAIgEgBIgCgBIgBgDIAAiLIABgCIACgCIAEgBIAFAAIAGAAIADABIACACIABACIAAASQALgNAMgGQAMgGALAAQAOAAAKAFQAKAEAFAIQAHAIACALQADALAAAPIAABUIgBADIgCABIgEABIgHAAIgGAAg");
	this.shape_176.setTransform(528.6,36.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgFBoIgEgBIgCgBIgBgDIAAiLIABgCIACgCIAEgBIAFAAIAGAAIAEABIACACIABACIAACLIgBADIgCABIgEABIgGAAIgFAAgAgMhLQgDgEAAgIQAAgKADgDQAEgDAIAAQAJAAAEADQADADAAAJQAAAJgEAEQgDADgJAAQgIAAgEgDg");
	this.shape_177.setTransform(516.475,33.475);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_178.setTransform(499.275,36.375);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_179.setTransform(485.075,36.375);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgFBtIgEgBIgCgBIgBgDIAAjPIABgDIACgBIAEgBIAFAAIAGAAIAEABIACABIABADIAADPIgBADIgCABIgEABIgGAAIgFAAg");
	this.shape_180.setTransform(473.475,32.975);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag5BoIgEgBIgCgCIgBgCIAAjDIABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAATIAMgMQAGgFAGgDQAGgDAHgCQAFgBAHAAQAPAAALAGQALAGAHAKQAGAKADAOQAEAOAAAPQAAASgEAOQgEAPgIAKQgIAKgLAGQgMAFgOAAQgGAAgFgBQgFgBgFgDIgKgHIgLgJIAABGIgBACIgCACIgEABIgGAAIgGAAgAgGhQQgFACgFADQgFADgFAGIgMAMIAAA3QALANAJAHQAKAHAJAAQAKAAAHgFQAHgEAEgIQAFgIACgJQACgJAAgKQAAgLgCgKQgBgKgFgIQgDgIgHgEQgHgFgKAAIgJABg");
	this.shape_181.setTransform(461.875,39.075);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ABVBMIgEgBIgCgBIgBgDIAAhUQAAgJgBgHQgCgIgDgFQgEgFgFgDQgFgDgHAAQgJAAgJAHQgJAHgLANIAABhIgBADIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgDIAAhUQAAgJgCgHQgBgIgEgFQgDgFgFgDQgGgDgHAAQgJAAgJAHQgJAHgLANIAABhIAAADIgCABIgEABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIAEgBIAFAAIAGAAIAEABIABACIABACIAAASQAMgNALgGQALgGAMAAQAIAAAHACQAHACAGAEQAFADADAFQADAFADAHQAHgIAGgFIAMgJIAMgFIALgBQAOAAAJAFQAJAEAGAIQAFAIADALQACALAAALIAABYIAAADIgCABIgEABIgHAAIgGAAg");
	this.shape_182.setTransform(440.275,36.275);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_183.setTransform(419.325,36.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_184.setTransform(405.825,36.375);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgfBIQgNgFgIgKQgJgKgEgOQgEgOAAgSQAAgQAEgOQAFgPAJgKQAJgLANgGQAOgFARAAQARAAANAFQANAFAIAKQAJAKAEAOQAEAOAAARQAAARgEAOQgFAPgJAKQgJALgNAFQgOAGgQAAQgSAAgNgFgAgSgzQgJAEgFAIQgFAHgDAKQgCALAAALQAAALACAKQACAKAFAIQAFAIAIAEQAIAFAMAAQALAAAJgFQAIgEAFgHQAGgHACgKQADgLAAgMQAAgKgCgKQgCgLgFgHQgFgIgJgEQgIgFgMAAQgLAAgIAEg");
	this.shape_185.setTransform(383.875,36.375);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AABBcQgHgDgEgGQgFgGgDgIQgCgKAAgMIAAhRIgTAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQgBgDAAgGIAAgFIABgDIADgCIACAAIATAAIAAgiIABgCIABgBIAFgBIAGgBIAGABIADABIACABIABACIAAAiIAkAAIACAAIACACIAAADIABAFQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgkAAIAABOQAAAOAEAIQAEAHAMAAIAGgBIAFgBIAEgCIACAAIACAAIABABIAAADIABAFIgBAHIgCAEIgDACIgGACIgHABIgHABQgLAAgIgDg");
	this.shape_186.setTransform(370.15,34.575);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_187.setTransform(351.525,36.375);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAqBMIgEgBIgDgBIgBgDIAAhRQABgMgCgHQgCgIgEgFQgDgFgGgDQgGgDgHAAQgJAAgJAHQgKAHgLANIAABhIgBADIgCABIgDABIgHAAIgGAAIgEgBIgCgBIAAgDIAAiLIAAgCIACgCIADgBIAGAAIAGAAIAEABIABACIAAACIAAASQAMgNANgGQALgGALAAQAOAAAKAFQAJAEAHAIQAFAIADALQACALAAAPIAABUIAAADIgCABIgEABIgGAAIgGAAg");
	this.shape_188.setTransform(336.95,36.275);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_189.setTransform(320.525,36.375);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("Ag5BoIgEgBIgCgCIgBgCIAAjDIABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAATIAMgMQAGgFAGgDQAGgDAHgCQAFgBAHAAQAPAAALAGQALAGAHAKQAGAKADAOQAEAOAAAPQAAASgEAOQgEAPgIAKQgIAKgLAGQgMAFgOAAQgGAAgFgBQgFgBgFgDIgKgHIgLgJIAABGIgBACIgCACIgEABIgGAAIgGAAgAgGhQQgFACgFADQgFADgFAGIgMAMIAAA3QALANAJAHQAKAHAJAAQAKAAAHgFQAHgEAEgIQAFgIACgJQACgJAAgKQAAgLgCgKQgBgKgFgIQgDgIgHgEQgHgFgKAAIgJABg");
	this.shape_190.setTransform(304.675,39.075);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("Ag5BoIgEgBIgCgCIgBgCIAAjDIABgCIACgCIADgBIAFAAIAGAAIADABIACACIABACIAAATIAMgMQAGgFAGgDQAGgDAHgCQAFgBAHAAQAPAAALAGQALAGAHAKQAGAKADAOQAEAOAAAPQAAASgEAOQgEAPgIAKQgIAKgLAGQgMAFgOAAQgGAAgFgBQgFgBgFgDIgKgHIgLgJIAABGIgBACIgCACIgEABIgGAAIgGAAgAgGhQQgFACgFADQgFADgFAGIgMAMIAAA3QALANAJAHQAKAHAJAAQAKAAAHgFQAHgEAEgIQAFgIACgJQACgJAAgKQAAgLgCgKQgBgKgFgIQgDgIgHgEQgHgFgKAAIgJABg");
	this.shape_191.setTransform(287.875,39.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_192.setTransform(270.875,36.375);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAqBtIgFgBIgCgBIgBgDIAAhSQAAgMgBgHQgCgHgEgFQgDgFgGgDQgGgDgHAAQgJAAgJAHQgKAHgLAMIAABiIgBADIgBABIgEABIgHAAIgGAAIgEgBIgCgBIgBgDIAAjPIABgDIACgBIAEgBIAGAAIAHAAIAEABIABABIABADIAABUQAMgMALgGQALgFAKAAQAPAAAJAFQAJAEAHAIQAFAIADALQACAKABAPIAABVIgBADIgCABIgEABIgHAAIgFAAg");
	this.shape_193.setTransform(255.3,32.975);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AACBcQgHgDgGgGQgEgGgDgIQgCgKAAgMIAAhRIgUAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgCgDAAgGIAAgFIACgDIACgCIABAAIAUAAIAAgiIAAgCIACgBIAFgBIAGgBIAGABIADABIACABIABACIAAAiIAkAAIACAAIACACIABADIAAAFQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgkAAIAABOQAAAOAEAIQAEAHALAAIAHgBIAFgBIAEgCIACAAIACAAIABABIABADIAAAFIAAAHIgDAEIgDACIgGACIgGABIgIABQgLAAgHgDg");
	this.shape_194.setTransform(234,34.575);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgcBKQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAFgJAJgFQAJgGANgCQANgDAQAAIATAAIAAgLQAAgIgCgHQgBgGgEgEQgEgEgGgCQgGgCgJAAQgJAAgHACIgOAFIgJAFQgEACgCAAIgCAAIgCgCIgBgDIAAgFIABgGQAAgCACgCIAHgFIAMgFIAPgEIAPgBQAPAAALADQALAEAGAGQAHAHADAKQADAKAAANIAABeQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDACIgGAAIgHAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgPQgJAKgLAGQgLAFgMAAQgLAAgJgDgAgHAIQgIACgFADQgGAEgCAFQgCAFAAAGQAAALAHAHQAGAGANAAQAJAAAJgFQAIgFAKgLIAAgeIgWAAQgKAAgHACg");
	this.shape_195.setTransform(221.075,36.375);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AApBtIgDgBIgCgBIgBgDIAAhSQAAgMgCgHQgCgHgDgFQgEgFgGgDQgGgDgHAAQgJAAgKAHQgJAHgLAMIAABiIAAADIgCABIgFABIgGAAIgGAAIgEgBIgCgBIgBgDIAAjPIABgDIACgBIAEgBIAGAAIAGAAIAFABIACABIAAADIAABUQAMgMAKgGQAMgFAKAAQAPAAAJAFQAKAEAFAIQAHAIACALQADAKAAAPIAABVIgBADIgCABIgEABIgHAAIgGAAg");
	this.shape_196.setTransform(205.5,32.975);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAvBLIgJAAIgFgBIgDgCIgBgCIgdhlIAAgCIAAACIgcBlIgCACIgCACIgGABIgHAAIgIAAIgGgBIgCgCIgBgCIgqiFIgBgEIAAgDIABgCIABgBIAFgBIAFAAIAHAAIAFABIACACIABACIAiBzIAAABIABgBIAehzIABgCIADgCIADgBIAGAAIAGAAIAEABIACABIAAADIAjBzIAAABIAAgBIAhhzIACgCIABgCIAEgBIAHAAIAGAAIAEABIABABIABACIAAADIgCAEIgoCFIgCACIgDACIgFABIgHAAg");
	this.shape_197.setTransform(185.6,36.375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_198.setTransform(158.925,36.375);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgYBIQgNgEgJgKQgJgKgEgOQgFgOAAgTQAAgRAFgPQAFgOAJgKQAIgLANgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJADAMQAEANAAANIAAAFQAAAFgDADQgDACgEAAIhcAAQAAAMACAJQADAKAFAGQAGAHAJAEQAIADAMAAQAKAAAIgBQAIgCAGgCIAJgEIAGgBIABAAIACACIAAADIABAFIAAADIgBADIgBACIgBACIgFADIgLADIgPAEQgJABgKAAQgRAAgNgFgAgOg1QgIAEgFAGQgEAGgDAIQgDAIAAAIIBMAAQAAgUgJgMQgKgLgSAAQgJAAgHADg");
	this.shape_199.setTransform(143.025,36.375);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgSBMIgNgDIgJgEIgFgDQgCgCgBgDIgBgHIABgFIABgDIABgCIACgBIAFACIAIAFIAMAFQAHACAIAAQAGAAAFgCIAJgEQAEgDACgEQACgEAAgGQAAgGgCgEIgJgHIgLgGIgMgFIgNgGQgGgCgFgFQgFgFgDgGQgDgHAAgKQAAgIADgHQADgIAHgGQAGgFAKgEQAJgDAMAAIALABIALACIAHADIAFADIACACIABACIABADIAAAEIAAAFIgBADIgCACIgBAAIgEgBIgHgEIgKgEQgGgBgHAAQgGAAgFABQgFACgDACQgDADgCAEQgBAEAAAEQAAAGADAEQADAEAFAEIAKAFIANAFIANAGQAHADAFAEQAFAFADAGQADAHAAAJQAAALgEAIQgEAJgHAGQgIAFgKADQgKADgLAAIgOgBg");
	this.shape_200.setTransform(128.825,36.375);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgfBIQgNgFgIgKQgJgKgEgOQgEgOAAgSQAAgQAEgOQAFgPAJgKQAJgLANgGQAOgFARAAQARAAANAFQANAFAIAKQAJAKAEAOQAEAOAAARQAAARgEAOQgFAPgJAKQgJALgNAFQgOAGgQAAQgSAAgNgFgAgSgzQgJAEgFAIQgFAHgDAKQgCALAAALQAAALACAKQACAKAFAIQAFAIAIAEQAIAFAMAAQALAAAJgFQAIgEAFgHQAGgHACgKQADgLAAgMQAAgKgCgKQgCgLgFgHQgFgIgJgEQgIgFgMAAQgLAAgIAEg");
	this.shape_201.setTransform(106.875,36.375);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AACBcQgHgDgGgGQgEgGgDgIQgCgKAAgMIAAhRIgUAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgCgDAAgGIAAgFIACgDIACgCIABAAIAUAAIAAgiIAAgCIACgBIAFgBIAGgBIAGABIADABIACABIABACIAAAiIAkAAIACAAIACACIABADIAAAFQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgkAAIAABOQAAAOAEAIQAEAHALAAIAHgBIAFgBIAEgCIACAAIACAAIABABIABADIAAAFIAAAHIgDAEIgDACIgGACIgGABIgIABQgLAAgHgDg");
	this.shape_202.setTransform(93.15,34.575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAlBtIgFgBIgCgBIgDgDIg6hOIAABOIgBADIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgDIAAjPIABgDIACgBIAEgBIAGAAIAGAAIAEABIACABIABADIAAB+IA0g6IADgCIADgCIAFgBIAGAAIAHAAIAEABIACABIABADIgBADIgDAFIgyAyIA4BKIADAEIABADIgBACIgCACIgEABIgHAAIgHAAg");
	this.shape_203.setTransform(74.425,32.975);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgTBIQgMgFgHgJQgIgKgEgOQgEgOgBgSQAAgUAGgPQAFgPAIgJQAKgKAMgEQALgFANAAQAHAAAHABIALADIAJAFIAHAFIACADIABACIAAAEIABAEQAAAGgCADQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgDgCIgHgGIgMgGQgGgCgJAAQgRAAgLAOQgKAOAAAaQABAOACAKQADAKAEAHQAGAHAHAEQAGADAJAAQAJAAAHgDIAMgGIAIgGQADgDACAAIACABIABACIABAEIAAAFIAAAFIAAADIgBACIgDADIgHAFIgKAFIgMAEQgIABgHAAQgOAAgMgFg");
	this.shape_204.setTransform(59.65,36.375);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgFBoIgEgBIgCgBIgBgDIAAiLIABgCIACgCIAEgBIAFAAIAGAAIAEABIACACIABACIAACLIgBADIgCABIgEABIgGAAIgFAAgAgMhLQgDgEAAgIQAAgKADgDQAEgDAIAAQAJAAAEADQADADAAAJQAAAJgEAEQgDADgJAAQgIAAgEgDg");
	this.shape_205.setTransform(49.025,33.475);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgFBtIgEgBIgCgBIgBgDIAAjPIABgDIACgBIAEgBIAFAAIAGAAIAEABIACABIABADIAADPIgBADIgCABIgEABIgGAAIgFAAg");
	this.shape_206.setTransform(41.675,32.975);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgWBhQgQgGgLgNQgMgNgFgTQgHgTAAgZQAAgXAHgVQAGgTAMgNQAMgOAQgIQARgGASgBQAKAAAHACIAQAEQAHADAFADQAGADACACIACAEIACACIABADIAAAGIAAAEIgBAFIgCABIgCABQgDAAgEgCIgKgIQgGgDgIgDQgJgDgNAAQgOAAgJAFQgLAGgJAKQgIALgEAOQgEAPAAATQAAATAEAPQAEAPAIAKQAIAJAMAGQAJAFAPAAQAMAAAJgDQAJgDAGgEIALgHQAEgCACAAIACAAIACACIAAADIABAHIgBAEIAAADIgBACIgDADIgGAFIgNAHQgHACgKACQgJACgMAAQgSABgQgHg");
	this.shape_207.setTransform(29.8,33.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(0.5,1,1).p("EA7TAGeIAApFAQZGeIFJtQEg7SABwIO2oiA0DitQAAB3h4AAIlnAAIllAAQh4AAAAh3A7ig2IAAHp");
	this.shape_208.setTransform(583.1,478.825);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(4,1,1).p("ATKmmIAANOEA6MgFaIhmIoA+TlaIAAL1Eg6LgFaILwL1");
	this.shape_209.setTransform(597,227.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]}).wait(66));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(555,312.9,503.70000000000005,274.1);
// library properties:
lib.properties = {
	id: '81E485EC49603C45BF70AC20C48FD829',
	width: 1072,
	height: 603,
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
an.compositions['81E485EC49603C45BF70AC20C48FD829'] = {
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