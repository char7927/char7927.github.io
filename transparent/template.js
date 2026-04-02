(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"template_atlas_1", frames: [[0,0,571,374]]}
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



(lib.Bitmap3 = function() {
	this.initialize(ss["template_atlas_1"]);
	this.gotoAndStop(0);
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
	this.shape.graphics.f("#000000").s().p("EhjmBLAQgLAAgGgJQgIgKAAgOMAAAiU9QAAgOAIgJQAGgKALAAMDHNAAAQALAAAHAKQAHAJAAAOMAAACU9QAAAOgHAKQgHAJgLAAgEhjNBJ9MDGbAAAMAAAiT5MjGbAAAg");
	this.shape.setTransform(640,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(239,231,218,0)").s().p("Ehj/BLAMAAAiV/MDH/AAAMAAACV/g");
	this.shape_1.setTransform(640,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.video_location, new cjs.Rectangle(0,0,1280,960), null);


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
	this.shape.graphics.f("#00FFFF").s().p("AkXBzIAAjlIIvAAIAADlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-28,-11.5,56,23), null);


(lib.Btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(102,51,0,0.298)").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(-3.5,-3.5,7,7), null);


// stage content:
(lib.template = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
		this.landmark_lines = [	['left_brow',285,336,296,334,293,300,334,295,285],
								['right_brow',55,107,66,105,63,70,105,65,55],
			
								['left_eye',263,249,390,373,374,380,381,382,362,398,384,385,386,387,388,466,263],
								['right_eye',33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246,33],
								['left_lid',414,286,258,257,259,260,467,263,466,388,387,386,385,384,398,362,414],
								['right_lid',190,56,28,27,29,30,247,33,246,161,160,159,158,157,173,190],
								['left_lid_w',414, 286, 258],
								['right_lid_w',190, 56, 28],
								['left_lash',263,466,388,387,386,385,384,398],
								['right_lash',33,246,161,160,159,158,157,173],
								['left_eye_outer_l',255,339],
								['left_inner_eye_shadow',286, 398, 362, 382, 381, 253, 252, 256, 341, 463, 414, 286],
								['right_inner_eye_shadow',56, 190, 243, 112, 26, 22, 155, 133, 173, 56],
								['left_outer_eye_shadow',467, 342, 445, 444, 443, 258, 257, 259, 260, 467],
								['right_outer_eye_shadow',56, 222, 223, 224, 225, 124, 113, 30, 29, 27, 28, 56],
								
								['nostrils_line',60, 75, 59, 166, 79, 239, 238, 242, 141, 94, 370, 462, 458, 459, 309, 392, 289, 305, 290],
								['left_nostril_line',460, 294, 331, 279, 360],
								['right_nostril_line',240, 64, 102, 49, 131],
								['left_nose_line',441, 413, 464, 357],
								['right_nose_line',236, 174, 188],
								['mid_nose_line',51, 5, 281],
			
								['mid_nose_shadow_blunt',240, 64, 48, 115, 220, 45, 4, 275, 440, 344, 278, 294, 460, 290, 462, 370, 94, 141, 242, 60, 240],
								['mid_nose_shadow_point',240, 64, 48, 115, 220, 44, 1, 274, 440, 344, 278, 294, 460, 290, 462, 370, 94, 141, 242, 60, 240],
								['button_nose',281, 275, 4, 45, 51, 5, 281],
								['left_nose_shadow',295, 285, 417, 351, 248, 363, 360,279,331,358,423,429, 420, 399, 412, 465, 413, 441, 295],
								['right_nose_shadow',55, 193, 122, 196, 3, 134, 131, 174, 188, 245, 189, 221, 65, 55],
								['mid_nose_shadow',363, 248, 195, 3, 134, 51, 5, 281, 363],	
								['glabella',417, 168, 193, 55, 8, 285, 417],
								
								['left_cheek_light',423, 371, 329, 450, 449, 448, 261, 446, 265, 340, 346, 347, 330, 266, 423],
								['right_cheek_light',203, 142, 100, 230, 229, 228, 31, 226, 35,111, 117, 118, 101, 36, 203],
								['dimple',186, 57, 43],
			
								['both_lips',61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185,61],
								['both_lips_inline',78,95,88,178,87,14,317,402,318,324,308,415,310,311,312,13,82,81,80,191,78],
								['upper_lip',78, 62, 76, 61,185, 40, 39, 37, 0, 267, 269, 270,409, 291, 292, 308, 415, 310, 311, 312, 13, 82, 81, 80, 191, 78],
								['lower_lip',17, 84, 181, 91, 146, 61, 76, 62, 78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 292, 306, 291, 375, 321, 405, 314, 17],
								['teeth',415, 310, 311, 312, 13, 82, 81, 80, 191, 415],
								['lower_lip_light',324, 319, 403, 316, 15, 86, 179, 89, 95, 88, 178, 87, 14, 317, 402, 318, 324],
								['lower_lip_shadow',291, 306, 307, 320, 314, 17, 84, 90, 77, 76, 61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291],
								['upper_lip_shadow',268, 13, 38, 41, 42, 183, 76, 62, 78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308, 292, 306, 407, 272, 271, 268],
								
								['chin',313, 17, 83, 18, 313],
								['hband',251, 333, 337, 108, 104, 21, 54, 103, 67, 109, 10, 338, 297, 332, 284, 251]
								];
		this.isSetup = false;
		this.canvas_width = 1280;
		this.canvas_height = 960;
		this.reslt = null;
		this.line = new createjs.Shape();
		this.line.graphics.setStrokeStyle(10);
		this.btns = [];
		this.show = 1;
		this.faceColour = ['211,178,158','202,163,139','182,141,116'];
		this.lipColour = ['212,170,191','166,95,109','127,51,50'];
		
		this.landmark_list = [	['FACE_LANDMARKS_TESSELATION',2,this.faceColour[1],1],
								['FACE_LANDMARKS_TESSELATION',1,this.faceColour[1],1,3],
								['hband',0,'0,0,0',1],
								['left_brow',0,'0,0,0',1],['right_brow',0,'0,0,0',1],
								['left_eye',0,'255,255,255',1],['right_eye',0,'255,255,255',1],['FACE_LANDMARKS_RIGHT_IRIS',0,'59,8,0',1],['FACE_LANDMARKS_LEFT_IRIS',0,'59,8,0',1],
								['left_lid',0,this.faceColour[1],1],['right_lid',0,this.faceColour[1],1],
								['left_inner_eye_shadow',0,this.faceColour[2],0.8],['right_inner_eye_shadow',0,this.faceColour[2],0.8],
								['left_outer_eye_shadow',0,this.faceColour[2],0.8],['right_outer_eye_shadow',0,this.faceColour[2],0.8],
								['left_cheek_light',0,this.faceColour[0],0.5],['right_cheek_light',0,this.faceColour[0],0.5],
								['mid_nose_shadow_blunt',0,this.faceColour[2],0.5],['mid_nose_shadow_point',0,this.faceColour[2],1],['button_nose',0,this.faceColour[0],1],['left_nose_shadow',0,this.faceColour[2],0.7],['mid_nose_shadow',0,this.faceColour[2],0.3],['right_nose_shadow',0,this.faceColour[2],0.5],['glabella',0,this.faceColour[2],0.2],
								['both_lips_inline',0,'0,0,0',1],['teeth',0,'255,255,255',1],
								['upper_lip',0,this.lipColour[1],1],['lower_lip',0,this.lipColour[1],1],['upper_lip_shadow',0,this.lipColour[2],0.5],['lower_lip_shadow',0,this.lipColour[2],0.7],['lower_lip_light',0,this.lipColour[0],0.7],
								['chin',0,this.faceColour[2],1],
								['left_eye',1,'0,0,0',1,3],['right_eye',1,'0,0,0',1,3],['left_lash',1,'0,0,0',1,5],['right_lash',1,'0,0,0',1,5],
								['left_lid_w',1,'0,0,0',1,1],['right_lid_w',1,'0,0,0',1,1],
								['nostrils_line',1,'0,0,0',1,1],['left_nostril_line',1,'0,0,0',1,1],['right_nostril_line',1,'0,0,0',1,1],['left_nose_line',1,'0,0,0',1,1],['right_nose_line',1,'0,0,0',1,1],['mid_nose_line',1,'0,0,0',1,1],
								['upper_lip',1,'0,0,0',1,1],['lower_lip',1,'0,0,0',1,1],
								//['hband_right',0,'0,0,0',1]
								];
		
		this.drawLandmarker = function() {
			if(this.show == 1) {
				this.line.graphics.clear();
				//console.log(this.allLandmarks['FACE_LANDMARKS_RIGHT_EYEBROW']);
				for(var i=0; i<this.landmark_list.length; i++) {
					var shp = this.allLandmarks[this.landmark_list[i][0]];
					//console.log('rgba('+this.landmark_list[i][2]+','+String(this.landmark_list[i][3])+')');
					var col = 'rgba('+this.landmark_list[i][2]+','+String(this.landmark_list[i][3])+')';
					if(this.landmark_list[i][1] == 0) {
						this.line.graphics.beginFill(col);
						this.line.graphics.moveTo(this.reslt.faceLandmarks[0][shp[0].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[0].start].y*(this.canvas_height));
						for(j=0; j<shp.length; j++) {
							this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[j].end].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[j].end].y*(this.canvas_height));
						}
						this.line.graphics.endFill();
					}else if(this.landmark_list[i][1] == 1) {
						this.line.graphics.beginStroke(col);
						this.line.graphics.setStrokeStyle(this.landmark_list[i][4]);
						for(j=0; j<shp.length; j++) {
							this.line.graphics.moveTo(this.reslt.faceLandmarks[0][shp[j].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[j].start].y*(this.canvas_height));
							this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[j].end].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[j].end].y*(this.canvas_height));
						}
						this.line.graphics.endStroke();
					}else{
						for(k=0; k<this.allLandmarks[this.landmark_list[i][0]].length; k+=3) {//make the shape for face
							this.line.graphics.beginFill(col);
							this.line.graphics.moveTo(this.reslt.faceLandmarks[0][shp[k].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[k].start].y*(this.canvas_height));
							this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[k+1].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[k+1].start].y*(this.canvas_height));
							this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[k+2].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[k+2].start].y*(this.canvas_height));
							this.line.graphics.lineTo(this.reslt.faceLandmarks[0][shp[k].start].x*(this.canvas_width),this.reslt.faceLandmarks[0][shp[k].start].y*(this.canvas_height));
							this.line.graphics.endFill();
						}
					}
				}
			}
			this.placeHijab();
		}
		this.placeHijab = function() {
			
		}
		//https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker for link to list of blendshapes
		this.holdLandmarks = function(FLm) {
			console.log('here');
			this.allLandmarks = FLm;
			for(var i=0; i<this.landmark_lines.length; i++) {
				this.allLandmarks[this.landmark_lines[i][0]] = this.createLandmark(this.landmark_lines[i]);
			}
			for(var b=0; b<this.btns.length; b++) {
				this.btns[b].id = this.allLandmarks['FACE_LANDMARKS_TESSELATION'][b].start;
				this.btns[b].addEventListener('click', function() {
					console.log(this.id);
				}.bind(this.btns[b]));
			}
		}
		this.createLandmark = function(arr) {
			var rarr = [];
			for(var i=2; i<arr.length; i++) {
				rarr.push({'start': arr[i-1], 'end': arr[i]});
			}
			return rarr;
		}
		this.useVision = function(reslt) {	
			if(this.isSetup) {
				if(reslt.faceLandmarks.length > 0) {
					this.reslt = reslt;
				}
			}
		}
		this.setup = function() {
			this.video_frame.addChild(this.line);
			for(var i=0; i<2556; i++) {
				var btn = new lib.Btn();
				this.btns.push(btn);
				this.video_frame.addChild(btn);
			}
			this.ps_btn.addEventListener('click',function() {
				this.show *= -1;
			}.bind(this));
			this.resltSetInterval = setInterval(function() {
				if(this.reslt !== null) {
					this.drawLandmarker();
				}
			}.bind(this),20);
			this.isSetup = true;
		}
		this.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// background
	this.video_frame = new lib.video_location();
	this.video_frame.name = "video_frame";
	this.video_frame.setTransform(480,120,0.5,0.5,0,0,180,320,240);

	this.timeline.addTween(cjs.Tween.get(this.video_frame).wait(1));

	// calibration_and_response_mcs
	this.ps_btn = new lib.Symbol3();
	this.ps_btn.name = "ps_btn";
	this.ps_btn.setTransform(589.35,444.8);

	this.instance = new lib.Bitmap3();
	this.instance.setTransform(720.95,-34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AWgAAQAALpmmIQQmmIPpUAAQpTAAmnoPQmloQAArpQAArpGloPQGnoPJTAAQJUAAGmIPQGmIPAALpg");
	this.shape.setTransform(320,694.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336600").s().p("Av5T5QmmoQAArpQAArpGmoPQGloPJUAAQJUAAGmIPQGmIPAALpQAALpmmIQQmmIPpUAAQpUAAmloPg");
	this.shape_1.setTransform(320,694.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.ps_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,206,972,670);
// library properties:
lib.properties = {
	id: 'A5DAF1077428514688E1025C51996AE9',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/template_atlas_1.png?1766918681468", id:"template_atlas_1"}
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