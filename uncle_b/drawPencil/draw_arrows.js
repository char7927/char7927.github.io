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


(lib.screen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen, new cjs.Rectangle(-1,-1,1922,1082), null);


(lib.pencl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAynFQAAALgOAIQgPAIgUAAQgUAAgPgIQgOgIgBgLQABgLAOgIQAPgIAUAAQAUAAAPAIQAOAIAAALgAjFnEIAAgCQAAgsA6ggQA6ggBRAAQBSAAA6AgQA6AgAAAsIAAACQgBAsg5AgQg6AghSAAQhRAAg6ggQg5gggBgsgAC6EKIh9DIIg9BhIg5heIAogaIAbAnIAzgQADGnEIAAKoQAAASgLARQgBABAAACQgPAUgfARQg6AghSAAQhRAAg6ggQgbgOgOgRAg5HVIh7jFQgHgJgEgKQgGgMAAgNIAAqo");
	this.shape.setTransform(0,-56.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFCC33","#FF9966"],[0,1],0,0,0,0,0,21.3).s().p("AgTBFIgoAaIh7jEQAOARAaAOQA7AgBRAAQBRAAA7ggQAegRAPgUIh8DHIg0AQg");
	this.shape_1.setTransform(0.25,-18.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066FF","#3333CC"],[0,1],-19.8,0,19.8,0).s().p("AiLFqQgbgPgOgRQgHgJgEgJQgGgMAAgOIAAqnQABAsA5AfQA6AgBRABQBSgBA6ggQA5gfABgsIAAKnQAAATgLAQIgCADQgOAVgfARQg6AghSAAQhRAAg6ggg");
	this.shape_2.setTransform(0,-62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6GsIAogaIAaAnIA0gQIg8BhgAgjnbQgOgIgBgLQABgLAOgIQAOgIAVAAQATAAAPAIQAPAIAAALQAAALgPAIQgPAIgTAAQgVAAgOgIg");
	this.shape_3.setTransform(0.15,-52.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFCC33","#FF9966"],[0,1],0,0,0,0,0,19.8).s().p("AiLBNQg5gggBgsIAAgBQAAgsA6ggQA6ggBRAAQBSAAA6AgQA6AgAAAsIAAABQgBAsg5AgQg6AghSAAQhRAAg6gggAghgSQgPAIgBAKQABAMAPAHQAOAJAUgBQAUABAOgJQAPgHAAgMQAAgKgPgIQgOgIgUAAQgUAAgOAIg");
	this.shape_4.setTransform(0,-101.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pencl, new cjs.Rectangle(-20.8,-113.6,41.6,114.6), null);


// stage content:
(lib.draw_arrows = function(mode,startPosition,loop,reversed) {
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
		this.lastPos = [0,0];
		this.drawDist = 5;
		this.drawIt = function() {
			var dist = math.distance(this.lastPos,[this.stage.mouseX, this.stage.mouseY]);
			this.lastPos = [this.stage.mouseX, this.stage.mouseY];
			if(dist > 0) {
				//pick direction
				var newx = this.pencil.x + (Math.sin(this.pencil.rotation*(Math.PI/180))*this.drawDist);
				var newy = this.pencil.y - (Math.cos(this.pencil.rotation*(Math.PI/180))*this.drawDist);
				this.line.graphics.beginStroke('black');
				this.line.graphics.moveTo(this.pencil.x,this.pencil.y).lineTo(newx,newy).endStroke();
				this.pencil.x = newx;
				this.pencil.y = newy;
			}else{
				this.pencil.rotation += 0.3;
			}
		}
		this.setup = function() {
			this.pencil.x = 960;
			this.pencil.y = 540;
			this.line = new createjs.Shape();
			this.line.graphics.setStrokeStyle(2);
			this.scrn.addChild(this.line);
			this.scanInterval = setInterval(function() {
				this.drawIt();
			}.bind(this),20);
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pencil = new lib.pencl();
	this.pencil.name = "pencil";
	this.pencil.setTransform(683.6,603.35);

	this.timeline.addTween(cjs.Tween.get(this.pencil).wait(1));

	// Layer_3
	this.scrn = new lib.screen();
	this.scrn.name = "scrn";
	this.scrn.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.scrn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959.5,539.5,961,541);
// library properties:
lib.properties = {
	id: '2C44EB81F1F3B04F9D058ED101A16F96',
	width: 1920,
	height: 1080,
	fps: 12,
	color: "#CCCCCC",
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
an.compositions['2C44EB81F1F3B04F9D058ED101A16F96'] = {
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