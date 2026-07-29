// Garden Gnome Software - Skin
// Pano2VR 8.0.1/22530
// Filename: feather_box.ggsk
// Generated 2026-07-29T11:02:51Z

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('opt_theme', 0, "#d141b9", { ignoreInState: 1  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_share_container', 1, 70.00, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_thumbnails', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_vis_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_landscape', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('model_loading', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	var pano=player;
	player.setApiVersion(7);
	this.rasterizeHTML = player.getRasterizeHTML();
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	me.fontsLoaded=0;
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i,hs,el,els,elo,ela,geometry,material;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	this._=function(text, params) {
		return player._(text, params);
	}
	
	player.setMargins({'left': {'value': 0, 'unit': 'px'}, 'top': {'value': 0, 'unit': 'px'}, 'right': {'value': 0, 'unit': 'px'}, 'bottom': {'value': 0, 'unit': 'px'}});
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		if (player.is3dModel()) {
			let hg = player.get3dHotspotGroup();
			if (hg) {
				let startObject = null;
				if (startElement !== undefined && startElement != me.divSkin) {
					if (startElement.ggId) {
						hg.traverse(function(el) {
							if (el.userData && el.userData.ggId === startElement.ggId) {
								startObject = el;
							}
						});
					}
				} else {
					startObject = hg;
				}
				if (startObject) {
					startObject.traverse(function(el) {
						if (el.userData && el.userData.ggUpdatePosition) {
							el.userData.ggUpdatePosition();
						}
					});
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	
	this.getClassStyles = function(className) {
		className = '.' + className;
		for (let sheet of document.styleSheets) {
			try {
				for (let rule of sheet.cssRules || sheet.rules) {
					if (rule.selectorText === className) {
						return rule.style;
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: ", e);
			}
		}
		return null;
	};
	this.paintTextDivToCanvas = function(el, stylesString, textureHeightFromEl, autoSize, scrollbar, measureOnly) {
		if (measureOnly === undefined) measureOnly = false;
		const skinStyles = skin.getClassStyles('ggskin');
		const skinTextStyles = skin.getClassStyles('ggskin_text');
		const skinStylesString = skinStyles ? skinStyles.cssText : '';
		const skinTextStylesString = skinTextStyles ? skinTextStyles.cssText : '';
		let elementStylesString = '';
		if (Array.isArray(el.userData.cssClasses)) {
			el.userData.cssClasses.forEach(function(className) {
				const classStyles = skin.getClassStyles(className);
				if (classStyles) {
					elementStylesString += classStyles.cssText;
				}
			});
		}
		const outerDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		textDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		textDiv.style = skinStylesString + skinTextStylesString + elementStylesString + stylesString;
		textDiv.innerHTML = el.userData.ggText;
		textDiv.style.position = 'absolute';
		textDiv.style.left = '0px';
		textDiv.style.top = '0px';
		const styleTag = document.createElement('style');
		styleTag.type = 'text/css';
		styleTag.appendChild(document.createTextNode("@font-face { font-family: 'Hepta Slab'; font-style: normal; font-weight: 500; src: local(''), url('fonts/hepta-slab-latin-500.woff2') format('woff2'); } @font-face { font-family: 'Karla'; font-style: normal; font-weight: 300; src: local(''), url('fonts/karla-latin-300.woff2') format('woff2'); } @font-face { font-family: 'Karla'; font-style: normal; font-weight: 700; src: local(''), url('fonts/karla-latin-700.woff2') format('woff2'); }"));
		outerDiv.appendChild(styleTag);
		outerDiv.appendChild(textDiv);
		document.body.appendChild(outerDiv);
		el.userData.boxWidthCanv = textDiv.clientWidth;
		el.userData.totalHeightCanv = textDiv.clientHeight;
		elStyle = window.getComputedStyle(textDiv);
		const lineHeight = elStyle.lineHeight;
		if (lineHeight !== 'normal') {
			el.userData.lineHeight = parseFloat(lineHeight);
		} else {
			el.userData.lineHeight = parseFloat(elStyle.fontSize) * 1.2;
		}
		if (measureOnly) {
			document.body.removeChild(outerDiv);
			return;
		}
		var canv = el.userData.tmpCanvas;
		var ctx = el.userData.tmpCanvasContext;
		canv.width = textDiv.clientWidth * 2;
		canv.height = textDiv.clientHeight * 2;
		ctx.clearRect(0, 0, canv.width, canv.height);
		if (autoSize) {
			el.userData.boxHeightCanv = el.userData.totalHeightCanv;
		} else {
			el.userData.boxHeightCanv = el.userData.height;
		}
		if (scrollbar && textDiv.clientHeight > el.userData.height) {
			el.userData.textCanvas.width = el.userData.width * 2;
		} else {
			el.userData.textCanvas.width = el.userData.boxWidthCanv * 2;
		}
		el.userData.textCanvas.height = el.userData.boxHeightCanv * 2;
		this.rasterizeHTML.drawHTML(outerDiv.innerHTML, canv, {zoom: 2, baseUrl: player.getBasePath() }).then((renderResult) => {
			el.userData.ggTextureFromCanvas();
		}, (err) => {
			console.error('Error rendering HTML to canvas:', err);
		});
		document.body.removeChild(outerDiv);
	};
	this.rectMaxRadius = function(el) {
		return Math.min(el.userData.width / 2.0 + (el.userData.borderWidth.left + el.userData.borderWidth.right) / 2.0, el.userData.height / 2.0 + (el.userData.borderWidth.top + el.userData.borderWidth.bottom) / 2.0);
	}
	this.rectCalcBorderRadiiInnerShape = function(el) {
		let maxRad = skin.rectMaxRadius(el);
		let bwTopLeft = (el.userData.borderWidth.top + el.userData.borderWidth.left) / 2.0;
		let brTopLeft = Math.max(el.userData.borderRadius.topLeft - bwTopLeft, 0.0);
		brTopLeft = Math.min(brTopLeft, maxRad - bwTopLeft);
		let bwTopRight = (el.userData.borderWidth.top + el.userData.borderWidth.right) / 2.0;
		let brTopRight = Math.max(el.userData.borderRadius.topRight - bwTopRight, 0.0);
		brTopRight = Math.min(brTopRight, maxRad - bwTopRight);
		let bwBottomRight = (el.userData.borderWidth.bottom + el.userData.borderWidth.right) / 2.0;
		let brBottomRight = Math.max(el.userData.borderRadius.bottomRight - bwBottomRight, 0.0);
		brBottomRight = Math.min(brBottomRight, maxRad - bwBottomRight);
		let bwBottomLeft = (el.userData.borderWidth.bottom + el.userData.borderWidth.left) / 2.0;
		let brBottomLeft = Math.max(el.userData.borderRadius.bottomLeft - bwBottomLeft, 0.0);
		brBottomLeft = Math.min(brBottomLeft, maxRad - bwBottomLeft);
		el.userData.borderRadiusInnerShape = {
			topLeft: brTopLeft,
			topRight: brTopRight,
			bottomRight: brBottomRight,
			bottomLeft: brBottomLeft
		};
	}
	this.rectHasRoundedCorners = function(el) {
		return (el.userData.borderRadius.topLeft > 0 || el.userData.borderRadius.topRight > 0 || el.userData.borderRadius.bottomRight > 0 || el.userData.borderRadius.bottomLeft > 0);
	}
	this.disposeGeometryAndMaterial = function(el) {
		if (el.geometry) el.geometry.dispose();
		el.geometry = null;
		if (el.material) el.material.dispose();
	}
	this.removeChildren = function(el, filter) {
		if (filter === undefined) filter ='^.*$';
		const pattern = new RegExp(filter);
		for (let i = el.children.length - 1; i >= 0; i--) {
			let child = el.children[i];
			if (pattern.test(child.name)) {
				if (child.isMesh) {
					skin.disposeGeometryAndMaterial(child);
				}
				el.remove(child);
			}
		}
	};
	this.getDepthFrom = function(root, object) {
		let depth = 0;
		let current = object;
		while (current && current !== root) {
			if (current.userData && current.userData.hasOwnProperty('ggId')) depth++;
			current = current.parent;
		}
		return current === root ? depth : -1;
	};
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.addSkin=function() {
		var hs='';
		var el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_image_popup') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_video_youtube_popup') == false)) && 
				((player.getVariableValue('vis_video_vimeo_popup') == false)) && 
				((player.getVariableValue('vis_video_file_popup') == false)) && 
				((player.getVariableValue('vis_video_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_phone_thumbs = {};
		me._variable_vis_phone_thumbs.ggCurrentLogicState = -1;
		me._variable_vis_phone_thumbs.logicBlock = function() {
			var newLogicState_vis_phone_thumbs;
			if (
				((player.getVariableValue('toggle_vis_thumbs') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_phone_thumbs = 0;
			}
			else {
				newLogicState_vis_phone_thumbs = -1;
			}
			if (me._variable_vis_phone_thumbs.ggCurrentLogicState != newLogicState_vis_phone_thumbs) {
				me._variable_vis_phone_thumbs.ggCurrentLogicState = newLogicState_vis_phone_thumbs;
				if (me._variable_vis_phone_thumbs.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_phone_thumbs', true);
				}
				else {
					player.setVariableValue('vis_phone_thumbs', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_width_share_container = {};
		me._variable_width_share_container.ggCurrentLogicState = -1;
		me._variable_width_share_container.logicBlock = function() {
			var newConditionsTrue_width_share_container = [];
			var delta = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTrue_width_share_container.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTrue_width_share_container.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTrue_width_share_container.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTrue_width_share_container.push(3);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newConditionsTrue_width_share_container.push(4);
			}
			if (JSON.stringify(me._variable_width_share_container.ggConditionsTrue) != JSON.stringify(newConditionsTrue_width_share_container)) {
				me._variable_width_share_container.ggConditionsTrue = newConditionsTrue_width_share_container;
				if (me._variable_width_share_container.ggConditionsTrue.includes(0)) {
					delta += 38;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(1)) {
					delta += 12;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(2)) {
					delta += 38;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(3)) {
					delta += 12;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(4)) {
					delta += 38;
				}
				player.setVariableValue('width_share_container', 70.00 + delta);
			}
		}
		me._variable_vis_thumbnails = {};
		me._variable_vis_thumbnails.ggCurrentLogicState = -1;
		me._variable_vis_thumbnails.logicBlock = function() {
			var newLogicState_vis_thumbnails;
			if (
				((player.getVariableValue('toggle_vis_thumbs') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicState_vis_thumbnails = 0;
			}
			else {
				newLogicState_vis_thumbnails = -1;
			}
			if (me._variable_vis_thumbnails.ggCurrentLogicState != newLogicState_vis_thumbnails) {
				me._variable_vis_thumbnails.ggCurrentLogicState = newLogicState_vis_thumbnails;
				if (me._variable_vis_thumbnails.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_thumbnails', true);
				}
				else {
					player.setVariableValue('vis_thumbnails', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_landscape = {};
		me._variable_resp_phone_landscape.ggCurrentLogicState = -1;
		me._variable_resp_phone_landscape.logicBlock = function() {
			var newLogicState_resp_phone_landscape;
			if (
				((player.getViewerSize(true).height <= 620))
			)
			{
				newLogicState_resp_phone_landscape = 0;
			}
			else {
				newLogicState_resp_phone_landscape = -1;
			}
			if (me._variable_resp_phone_landscape.ggCurrentLogicState != newLogicState_resp_phone_landscape) {
				me._variable_resp_phone_landscape.ggCurrentLogicState = newLogicState_resp_phone_landscape;
				if (me._variable_resp_phone_landscape.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_landscape', true);
				}
				else {
					player.setVariableValue('resp_phone_landscape', false);
				}
			}
		}
		el=me._button_container=document.createElement('div');
		el.ggId="button_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_container.style.transition='';
				if (me._button_container.ggCurrentLogicStateVisible == 0) {
					me._button_container.style.visibility="hidden";
					me._button_container.ggVisible=false;
				}
				else {
					me._button_container.style.visibility=(Number(me._button_container.style.opacity)>0||!me._button_container.style.opacity)?'inherit':'hidden';
					me._button_container.ggVisible=true;
				}
			}
		}
		me._button_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails=document.createElement('div');
		el.ggId="btn_thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbnails.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbnails.style.visibility=(Number(me._btn_thumbnails.style.opacity)>0||!me._btn_thumbnails.style.opacity)?'inherit':'hidden';
					me._btn_thumbnails.ggVisible=true;
				}
				else {
					me._btn_thumbnails.style.visibility="hidden";
					me._btn_thumbnails.ggVisible=false;
				}
			}
		}
		me._btn_thumbnails.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_thumbnails'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_thumbnails.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_thumbnails.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_thumbnails.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_thumbnails.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_thumbnails.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_thumbnails.onclick=function (e) {
			player.setVariableValue('toggle_vis_thumbs', !player.getVariableValue('toggle_vis_thumbs'));
			me._node_cloner_phone.ggText="";
			me._node_cloner_phone.ggUpdate([]);
			skin.updateSize(skin.divSkin);
		}
		me._btn_thumbnails.onmouseenter=function (e) {
			me.elementMouseOver['btn_thumbnails']=true;
			me._btn_thumbnails.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails.onmouseleave=function (e) {
			me.elementMouseOver['btn_thumbnails']=false;
			me._btn_thumbnails.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon=document.createElement('div');
		els=me._btn_thumbnails_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxjaXJjbGUgY3g9IjE4Ii'+
			'BjeT0iMTgiIGZpbGw9Im5vbmUiIHI9IjEuNSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxjaXJjbGUgY3g9IjI4LjUiIGN5PSIxOCIgZmlsbD0ibm9uZSIgcj0iMS41IiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGNpcmNsZSBjeD0iNy41IiBjeT0iMTgiIGZpbGw9Im5vbmUiIHI9IjEuNSIgc3Ryb2tl'+
			'PSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_thumbnails_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbnails.appendChild(me._btn_thumbnails_icon);
		me._button_container.appendChild(me._btn_thumbnails);
		el=me._btn_fullscreen=document.createElement('div');
		el.ggId="btn_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._btn_fullscreen.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_fullscreen.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_fullscreen.style.right=(25+deltaX) + 'px';
					me._btn_fullscreen.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen.style.visibility=(Number(me._btn_fullscreen.style.opacity)>0||!me._btn_fullscreen.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen.ggVisible=true;
				}
				else {
					me._btn_fullscreen.style.visibility="hidden";
					me._btn_fullscreen.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_fullscreen'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_fullscreen.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_fullscreen.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_fullscreen.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_fullscreen.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['btn_fullscreen']=true;
			me._btn_fullscreen.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['btn_fullscreen']=false;
			me._btn_fullscreen.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen_exit=document.createElement('div');
		els=me._btn_fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjYsMjEgMTUsMjEgJiN4YTsmI3g5OzE1LDMwICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjMwLDE1IDIxLDE1ICYjeGE7JiN4OTsyMSw2ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxsaW5lIGZpbGw9Im5vbmUiIHN0cm9r'+
			'ZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjEiIHgyPSIzMS41IiB5MT0iMTUiIHkyPSI0LjUiLz4KIDxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iNC41IiB4Mj0iMTUiIHkxPSIzMS41IiB5Mj0iMjEiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_exit";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_exit.style.transition='';
				if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_exit.style.visibility=(Number(me._btn_fullscreen_exit.style.opacity)>0||!me._btn_fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_exit.ggVisible=true;
				}
				else {
					me._btn_fullscreen_exit.style.visibility="hidden";
					me._btn_fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_exit);
		el=me._btn_fullscreen_enter=document.createElement('div');
		els=me._btn_fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjIyLjUsNC41ICAgMzEuNSw0LjUgMzEuNSwxMy41ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjEzLjUsMzEuNSAgIDQuNSwzMS41IDQuNSwyMi41ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxsaW5lIGZpbGw9Im5vbmUi'+
			'IHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMzEuNSIgeDI9IjIxIiB5MT0iNC41IiB5Mj0iMTUiLz4KIDxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iNC41IiB4Mj0iMTUiIHkxPSIzMS41IiB5Mj0iMjEiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_enter";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_enter.style.transition='';
				if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_enter.style.visibility="hidden";
					me._btn_fullscreen_enter.ggVisible=false;
				}
				else {
					me._btn_fullscreen_enter.style.visibility=(Number(me._btn_fullscreen_enter.style.opacity)>0||!me._btn_fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._btn_fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_enter);
		me._button_container.appendChild(me._btn_fullscreen);
		el=me._btn_languages=document.createElement('div');
		el.ggId="btn_languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_languages.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_languages.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_languages.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_languages.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_languages.style.right=(25+deltaX) + 'px';
					me._btn_languages.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_languages.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggCurrentLogicStateVisible == 0) {
					me._btn_languages.style.visibility=(Number(me._btn_languages.style.opacity)>0||!me._btn_languages.style.opacity)?'inherit':'hidden';
					me._btn_languages.ggVisible=true;
				}
				else {
					me._btn_languages.style.visibility="hidden";
					me._btn_languages.ggVisible=false;
				}
			}
		}
		me._btn_languages.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_languages'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_languages.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_languages.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_languages.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_languages.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages.onmouseenter=function (e) {
			me.elementMouseOver['btn_languages']=true;
			me._btn_languages.logicBlock_backgroundcolor();
		}
		me._btn_languages.onmouseleave=function (e) {
			me.elementMouseOver['btn_languages']=false;
			me._btn_languages.logicBlock_backgroundcolor();
		}
		me._btn_languages.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_languages_icon=document.createElement('div');
		els=me._btn_languages_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iOC40IiB4Mj0iMTcuNiIgeTE9IjExLjMiIHkyPSIxMS4zIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3'+
			'BhY2l0eToxIiB4MT0iMTMiIHgyPSIxMyIgeTE9IjguMyIgeTI9IjExLjMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIgICAxNy44LDI2LjYgMjIuNCwxNS45IDI3LDI2LjYgICIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZW'+
			'NhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTguNiIgeDI9IjI2LjIiIHkxPSIyNC43IiB5Mj0iMjQuNyIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_languages_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_languages_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_languages_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_languages.appendChild(me._btn_languages_icon);
		me._button_container.appendChild(me._btn_languages);
		el=me._btn_gyro=document.createElement('div');
		el.ggId="btn_gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._btn_gyro.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_gyro.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_gyro.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_gyro.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_gyro.style.right=(25+deltaX) + 'px';
					me._btn_gyro.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro.style.visibility=(Number(me._btn_gyro.style.opacity)>0||!me._btn_gyro.style.opacity)?'inherit':'hidden';
					me._btn_gyro.ggVisible=true;
				}
				else {
					me._btn_gyro.style.visibility="hidden";
					me._btn_gyro.ggVisible=false;
				}
			}
		}
		me._btn_gyro.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_gyro'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_gyro.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_gyro.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_gyro.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_gyro.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._btn_gyro.onmouseenter=function (e) {
			me.elementMouseOver['btn_gyro']=true;
			me._btn_gyro.logicBlock_backgroundcolor();
		}
		me._btn_gyro.onmouseleave=function (e) {
			me.elementMouseOver['btn_gyro']=false;
			me._btn_gyro.logicBlock_backgroundcolor();
		}
		me._btn_gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_gyro_on_icon=document.createElement('div');
		els=me._btn_gyro_on_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yXzFfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOCIgcng9IjE2LjUiIHJ5PSI2LjEiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxOC4xIiBjeT0iMTcuOSIgcng9IjE2LjYiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIxOCIgeTI9IjE4Ii8+Cjwvc3ZnPgo=';
		me._btn_gyro_on_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_on_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_on_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro_on_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_on_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_on_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_on_icon.style.transition='';
				if (me._btn_gyro_on_icon.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_on_icon.style.visibility="hidden";
					me._btn_gyro_on_icon.ggVisible=false;
				}
				else {
					me._btn_gyro_on_icon.style.visibility=(Number(me._btn_gyro_on_icon.style.opacity)>0||!me._btn_gyro_on_icon.style.opacity)?'inherit':'hidden';
					me._btn_gyro_on_icon.ggVisible=true;
				}
			}
		}
		me._btn_gyro_on_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro.appendChild(me._btn_gyro_on_icon);
		el=me._btn_gyro_off_icon=document.createElement('div');
		els=me._btn_gyro_off_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjUiIHgyPSIzNC41IiB5MT0iMS41IiB5Mj0iMzQuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._btn_gyro_off_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_off_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_off_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro_off_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_off_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_off_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_off_icon.style.transition='';
				if (me._btn_gyro_off_icon.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_off_icon.style.visibility=(Number(me._btn_gyro_off_icon.style.opacity)>0||!me._btn_gyro_off_icon.style.opacity)?'inherit':'hidden';
					me._btn_gyro_off_icon.ggVisible=true;
				}
				else {
					me._btn_gyro_off_icon.style.visibility="hidden";
					me._btn_gyro_off_icon.ggVisible=false;
				}
			}
		}
		me._btn_gyro_off_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro.appendChild(me._btn_gyro_off_icon);
		me._button_container.appendChild(me._btn_gyro);
		el=me._btn_vr=document.createElement('div');
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_vr.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_vr.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_vr.style.right=(25+deltaX) + 'px';
					me._btn_vr.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_vr'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_vr.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_vr.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_vr.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseenter=function (e) {
			me.elementMouseOver['btn_vr']=true;
			me._btn_vr.logicBlock_backgroundcolor();
		}
		me._btn_vr.onmouseleave=function (e) {
			me.elementMouseOver['btn_vr']=false;
			me._btn_vr.logicBlock_backgroundcolor();
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_vr_icon=document.createElement('div');
		els=me._btn_vr_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik02LDEyLj'+
			'doMjQmI3hhOyYjeDk7YzEuNywwLDMsMS4xLDMsMi43djkuNGMwLDEuNy0xLjMsMy0zLDNoLTQuNmMtMS4xLDAtMi4xLTAuNi0yLjctMS42bC0yLjYtNC41Yy0wLjMtMC42LTEtMS0xLjctMWgtMC45Yy0wLjcsMC0xLjMsMC40LTEuNiwwLjkmI3hhOyYjeDk7bC0yLjgsNC42Yy0wLjYsMC45LTEuNiwxLjUtMi42LDEuNUg2Yy0xLjcsMC0zLTEuMy0zLTN2LTkuNEMzLDEzLjgsNC4zLDEyLjcsNiwxMi43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9'+
			'IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjEzLjIsMTIuNyAmI3hhOyYjeDk7MTMuMiw0LjIgMjIuOCw0LjIgMjIuOCwxMi43ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_vr_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_vr_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_vr_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_vr.appendChild(me._btn_vr_icon);
		me._button_container.appendChild(me._btn_vr);
		el=me._btn_audio=document.createElement('div');
		el.ggId="btn_audio";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._btn_audio.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_audio.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_audio.style.right=(25+deltaX) + 'px';
					me._btn_audio.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggCurrentLogicStateVisible == 0) {
					me._btn_audio.style.visibility=(Number(me._btn_audio.style.opacity)>0||!me._btn_audio.style.opacity)?'inherit':'hidden';
					me._btn_audio.ggVisible=true;
				}
				else {
					me._btn_audio.style.visibility="hidden";
					me._btn_audio.ggVisible=false;
				}
			}
		}
		me._btn_audio.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_audio'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_audio.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_audio.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_audio.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_audio.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_audio.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._btn_audio.onmouseenter=function (e) {
			me.elementMouseOver['btn_audio']=true;
			me._btn_audio.logicBlock_backgroundcolor();
		}
		me._btn_audio.onmouseleave=function (e) {
			me.elementMouseOver['btn_audio']=false;
			me._btn_audio.logicBlock_backgroundcolor();
		}
		me._btn_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_audio_on=document.createElement('div');
		els=me._btn_audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMTYuNSw3LjUgJiN4YTsmI3g5OzksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBhdGggZD0iTTI4LjYsNy40JiN4YTsmI3g5O2M1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJv'+
			'dW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._btn_audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_on.style.transition='';
				if (me._btn_audio_on.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_on.style.visibility=(Number(me._btn_audio_on.style.opacity)>0||!me._btn_audio_on.style.opacity)?'inherit':'hidden';
					me._btn_audio_on.ggVisible=true;
				}
				else {
					me._btn_audio_on.style.visibility="hidden";
					me._btn_audio_on.ggVisible=false;
				}
			}
		}
		me._btn_audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio.appendChild(me._btn_audio_on);
		el=me._btn_audio_off=document.createElement('div');
		els=me._btn_audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMTYuNSw3LjUgJiN4YTsmI3g5OzksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIzNC41IiB4Mj0iMjUuNSIgeTE9IjEzLjUiIHkyPSIyMi41'+
			'Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI1LjUiIHgyPSIzNC41IiB5MT0iMTMuNSIgeTI9IjIyLjUiLz4KPC9zdmc+Cg==';
		me._btn_audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_off.style.transition='';
				if (me._btn_audio_off.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_off.style.visibility="hidden";
					me._btn_audio_off.ggVisible=false;
				}
				else {
					me._btn_audio_off.style.visibility=(Number(me._btn_audio_off.style.opacity)>0||!me._btn_audio_off.style.opacity)?'inherit':'hidden';
					me._btn_audio_off.ggVisible=true;
				}
			}
		}
		me._btn_audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio.appendChild(me._btn_audio_off);
		me._button_container.appendChild(me._btn_audio);
		el=me._btn_share=document.createElement('div');
		el.ggId="btn_share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._btn_share.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_share.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_share.style.right=(25+deltaX) + 'px';
					me._btn_share.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggCurrentLogicStateVisible == 0) {
					me._btn_share.style.visibility=(Number(me._btn_share.style.opacity)>0||!me._btn_share.style.opacity)?'inherit':'hidden';
					me._btn_share.ggVisible=true;
				}
				else {
					me._btn_share.style.visibility="hidden";
					me._btn_share.ggVisible=false;
				}
			}
		}
		me._btn_share.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_share'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_share.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_share.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_share.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_share.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_share.onmouseenter=function (e) {
			me.elementMouseOver['btn_share']=true;
			me._btn_share.logicBlock_backgroundcolor();
		}
		me._btn_share.onmouseleave=function (e) {
			me.elementMouseOver['btn_share']=false;
			me._btn_share.logicBlock_backgroundcolor();
		}
		me._btn_share.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_btns_container=document.createElement('div');
		el.ggId="share_btns_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 6px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 138px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_btns_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_btns_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_copy=document.createElement('div');
		els=me._btn_copy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0xNi41LD'+
			'EzLjVIMzAmI3hhOyYjeDk7YzEuNywwLDMsMS4zLDMsM1YzMGMwLDEuNy0xLjMsMy0zLDNIMTYuNWMtMS43LDAtMy0xLjMtMy0zVjE2LjVDMTMuNSwxNC44LDE0LjgsMTMuNSwxNi41LDEzLjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBhdGggZD0iTTcuNSwyMi41SDYmI3hhOyYjeDk7Yy0xLjcsMC0zLTEuMy0zLTNWNmMwLTEuNywxLjMtMywzLTNoMTMuNWMxLjcsMCwzLDEuMywzLDN2MS41IiBmaWxsPSJub25lIiBzdHJv'+
			'a2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8L3N2Zz4K';
		me._btn_copy__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_copy";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_copy.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_copy.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_copy.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_copy.style.transition='left 0s, top 0s';
				if (me._btn_copy.ggConditionsTruePosition.includes(0)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(1)) {
					deltaX += 12;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(2)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(3)) {
					deltaX += 12;
					deltaY += 0;
				}
					me._btn_copy.style.left=(0+deltaX) + 'px';
					me._btn_copy.style.top = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaY) + 'px)';
			}
		}
		me._btn_copy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_copy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_copy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_copy.style.transition='left 0s, top 0s';
				if (me._btn_copy.ggCurrentLogicStateVisible == 0) {
					me._btn_copy.style.visibility=(Number(me._btn_copy.style.opacity)>0||!me._btn_copy.style.opacity)?'inherit':'hidden';
					me._btn_copy.ggVisible=true;
				}
				else {
					me._btn_copy.style.visibility="hidden";
					me._btn_copy.ggVisible=false;
				}
			}
		}
		me._btn_copy.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._btn_copy.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_copy);
		el=me._btn_twitter=document.createElement('div');
		els=me._btn_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI4IDI4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkMTQxYjk7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._btn_twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_twitter";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_twitter.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_twitter.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_twitter.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_twitter.style.transition='left 0s, top 0s';
				if (me._btn_twitter.ggConditionsTruePosition.includes(0)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_twitter.ggConditionsTruePosition.includes(1)) {
					deltaX += 12;
					deltaY += 0;
				}
					me._btn_twitter.style.left=(0+deltaX) + 'px';
					me._btn_twitter.style.top = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaY) + 'px)';
			}
		}
		me._btn_twitter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_twitter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_twitter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_twitter.style.transition='left 0s, top 0s';
				if (me._btn_twitter.ggCurrentLogicStateVisible == 0) {
					me._btn_twitter.style.visibility=(Number(me._btn_twitter.style.opacity)>0||!me._btn_twitter.style.opacity)?'inherit':'hidden';
					me._btn_twitter.ggVisible=true;
				}
				else {
					me._btn_twitter.style.visibility="hidden";
					me._btn_twitter.ggVisible=false;
				}
			}
		}
		me._btn_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._btn_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_twitter);
		el=me._btn_facebook=document.createElement('div');
		els=me._btn_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0yNywzaC'+
			'00LjUmI3hhOyYjeDk7QzE4LjQsMywxNSw2LjQsMTUsMTAuNVYxNWgtNC41djZIMTV2MTJoNlYyMWg0LjVsMS41LTZoLTZ2LTQuNUMyMSw5LjcsMjEuNyw5LDIyLjUsOUgyN1YzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_facebook";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_facebook.style.transition='';
				if (me._btn_facebook.ggCurrentLogicStateVisible == 0) {
					me._btn_facebook.style.visibility=(Number(me._btn_facebook.style.opacity)>0||!me._btn_facebook.style.opacity)?'inherit':'hidden';
					me._btn_facebook.ggVisible=true;
				}
				else {
					me._btn_facebook.style.visibility="hidden";
					me._btn_facebook.ggVisible=false;
				}
			}
		}
		me._btn_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._btn_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_facebook);
		me._btn_share.appendChild(me._share_btns_container);
		el=me._btn_share_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_share_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share_icon_container.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + player.getPan() + "," + player.getTilt() + "," + player.getFov() + ",4";
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
			}
		}
		me._btn_share_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_share_icon=document.createElement('div');
		els=me._btn_share_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxjaXJjbGUgY3g9IjI2Lj'+
			'IiIGN5PSI3LjUiIGZpbGw9Im5vbmUiIHI9IjQuNSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxjaXJjbGUgY3g9IjguMiIgY3k9IjE4IiBmaWxsPSJub25lIiByPSI0LjUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8Y2lyY2xlIGN4PSIyNi4yIiBjeT0iMjguNSIgZmlsbD0ibm9uZSIgcj0iNC41IiBz'+
			'dHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIxMi4xIiB4Mj0iMjIuMyIgeTE9IjIwLjMiIHkyPSIyNi4yIi8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbm'+
			'Vqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjIyLjMiIHgyPSIxMi4xIiB5MT0iOS44IiB5Mj0iMTUuNyIvPgo8L3N2Zz4K';
		me._btn_share_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_share_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_share_icon_container.appendChild(me._btn_share_icon);
		me._btn_share.appendChild(me._btn_share_icon_container);
		me._button_container.appendChild(me._btn_share);
		el=me._btn_info=document.createElement('div');
		el.ggId="btn_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('opt_maps') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('opt_maps') == true)) || 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStatePosition == 0) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='calc(50% - 50px)';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 1) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='calc(50% - 50px)';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 2) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='160px';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 3) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='90px';
				}
				else {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='20px';
				}
			}
		}
		me._btn_info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_floorplans') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_info.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateSize == 0) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 1) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 2) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 3) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else {
					me._btn_info.style.width='50px';
					me._btn_info.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
			}
		}
		me._btn_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateVisible == 0) {
					me._btn_info.style.visibility=(Number(me._btn_info.style.opacity)>0||!me._btn_info.style.opacity)?'inherit':'hidden';
					me._btn_info.ggVisible=true;
				}
				else {
					me._btn_info.style.visibility="hidden";
					me._btn_info.ggVisible=false;
				}
			}
		}
		me._btn_info.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_info'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_info.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_info.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_info.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_info.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_info.onmouseenter=function (e) {
			me.elementMouseOver['btn_info']=true;
			me._btn_info.logicBlock_backgroundcolor();
		}
		me._btn_info.onmouseleave=function (e) {
			me.elementMouseOver['btn_info']=false;
			me._btn_info.logicBlock_backgroundcolor();
		}
		me._btn_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 70px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._info_text.appendChild(me._info_text_body);
		el=me._info_text_headline=document.createElement('div');
		els=me._info_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_headline";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._info_text.appendChild(me._info_text_headline);
		me._btn_info.appendChild(me._info_text);
		el=me._btn_info_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_info_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_info') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 300ms ease-out 750ms';
				}
				me._info_text.style.opacity='1';
				me._info_text.style.visibility=me._info_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_info') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_title_phone.ggUpdateText();
				me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_text_phone.ggUpdateText();
				me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._btn_info_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon=document.createElement('div');
		els=me._btn_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE4IiByPSIxNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIyNCIgeTI9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTgiIHgyPSIxOCIgeTE9IjEyIiB5Mj0iMTIiLz4KPC9zdmc+Cg==';
		me._btn_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_icon_container.appendChild(me._btn_info_icon);
		me._btn_info.appendChild(me._btn_info_icon_container);
		me._button_container.appendChild(me._btn_info);
		el=me._btn_floorplan=document.createElement('div');
		el.ggId="btn_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_floorplan.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStatePosition == 0) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='calc(50% - 120px)';
				}
				else if (me._btn_floorplan.ggCurrentLogicStatePosition == 1) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='calc(50% - 50px)';
				}
				else if (me._btn_floorplan.ggCurrentLogicStatePosition == 2) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='90px';
				}
				else {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='20px';
				}
			}
		}
		me._btn_floorplan.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_maps') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_floorplan.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateSize == 0) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 1) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 2) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 3) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else {
					me._btn_floorplan.style.width='50px';
					me._btn_floorplan.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
			}
		}
		me._btn_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan.style.visibility=(Number(me._btn_floorplan.style.opacity)>0||!me._btn_floorplan.style.opacity)?'inherit':'hidden';
					me._btn_floorplan.ggVisible=true;
				}
				else {
					me._btn_floorplan.style.visibility="hidden";
					me._btn_floorplan.ggVisible=false;
				}
			}
		}
		me._btn_floorplan.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_floorplan'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_floorplan.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_floorplan.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_floorplan.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_floorplan.onmouseenter=function (e) {
			me.elementMouseOver['btn_floorplan']=true;
			me._btn_floorplan.logicBlock_backgroundcolor();
		}
		me._btn_floorplan.onmouseleave=function (e) {
			me.elementMouseOver['btn_floorplan']=false;
			me._btn_floorplan.logicBlock_backgroundcolor();
		}
		me._btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan.appendChild(me._floorplan);
		el=me._btn_floorplan_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_floorplan_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 300ms ease-out 750ms';
				}
				me._floorplan.style.opacity='1';
				me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
				if (me._floorplan.ggMapNotLoaded && me._floorplan.ggInitMap) {
					me._floorplan.ggInitMap(false);
					me._floorplan.ggInitMapMarkers(true);
				}
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', true);
			}
		}
		me._btn_floorplan_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon=document.createElement('div');
		els=me._btn_floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMS41LDkgMS41LDMzICYjeGE7JiN4OTsxMiwyNyAyNCwzMyAzNC41LDI3IDM0LjUsMyAyNCw5IDEyLDMgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMyIgeTI9IjI3Ii8+CiA8'+
			'bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI0IiB4Mj0iMjQiIHkxPSI5IiB5Mj0iMzMiLz4KPC9zdmc+Cg==';
		me._btn_floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_floorplan_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan_icon_container.appendChild(me._btn_floorplan_icon);
		me._btn_floorplan.appendChild(me._btn_floorplan_icon_container);
		me._button_container.appendChild(me._btn_floorplan);
		el=me._btn_map=document.createElement('div');
		el.ggId="btn_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_floorplans') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_map.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_map.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateSize == 0) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 1) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 2) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 3) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else {
					me._btn_map.style.width='50px';
					me._btn_map.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
			}
		}
		me._btn_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateVisible == 0) {
					me._btn_map.style.visibility=(Number(me._btn_map.style.opacity)>0||!me._btn_map.style.opacity)?'inherit':'hidden';
					me._btn_map.ggVisible=true;
				}
				else {
					me._btn_map.style.visibility="hidden";
					me._btn_map.ggVisible=false;
				}
			}
		}
		me._btn_map.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_map'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_map.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_map.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_map.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_map.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_map.onmouseenter=function (e) {
			me.elementMouseOver['btn_map']=true;
			me._btn_map.logicBlock_backgroundcolor();
		}
		me._btn_map.onmouseleave=function (e) {
			me.elementMouseOver['btn_map']=false;
			me._btn_map.logicBlock_backgroundcolor();
		}
		me._btn_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._map);
		el=me._map_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="map_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		el.userData=el;
		hs ='';
		hs+='height : 13px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_timer.ggIsActive=function() {
			return (me._map_timer.ggTimestamp + me._map_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_timer.style.transition='';
				if (me._map_timer.ggCurrentLogicStateVisible == 0) {
					me._map_timer.style.visibility="hidden";
					me._map_timer.ggVisible=false;
				}
				else {
					me._map_timer.style.visibility=(Number(me._map_timer.style.opacity)>0||!me._map_timer.style.opacity)?'inherit':'hidden';
					me._map_timer.ggVisible=true;
				}
			}
		}
		me._map_timer.ggDeactivate=function () {
			if (me._map.ggFitBounds) me._map.ggFitBounds(true);
		}
		me._map_timer.ggCurrentLogicStateVisible = -1;
		me._map_timer.ggUpdateConditionTimer=function () {
			me._map_timer.logicBlock_visible();
		}
		me._map_timer.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._map_timer);
		el=me._btn_map_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_map_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._map_timer.ggTimeout=Number("0.9") * 1000.0;
				me._map_timer.ggTimestamp=skin.ggCurrentTime;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_map') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 300ms ease-out 750ms';
				}
				me._map.style.opacity='1';
				me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
				if (me._map.ggMapNotLoaded && me._map.ggInitMap) {
					me._map.ggInitMap(false);
					me._map.ggInitMapMarkers(true);
				}
			}
			if (
				(
					((player.getVariableValue('vis_map') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', true);
			}
		}
		me._btn_map_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon=document.createElement('div');
		els=me._btn_map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE1IiByPSI0LjUiLz4KPC9zdmc+Cg==';
		me._btn_map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_map_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map_icon_container.appendChild(me._btn_map_icon);
		me._btn_map.appendChild(me._btn_map_icon_container);
		me._button_container.appendChild(me._btn_map);
		me.divSkin.appendChild(me._button_container);
		el=me._button_container_phone=document.createElement('div');
		el.ggId="button_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_container_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_container_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_container_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_container_phone.style.transition='';
				if (me._button_container_phone.ggCurrentLogicStateVisible == 0) {
					me._button_container_phone.style.visibility=(Number(me._button_container_phone.style.opacity)>0||!me._button_container_phone.style.opacity)?'inherit':'hidden';
					me._button_container_phone.ggVisible=true;
				}
				else {
					me._button_container_phone.style.visibility="hidden";
					me._button_container_phone.ggVisible=false;
				}
			}
		}
		me._button_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_phone=document.createElement('div');
		el.ggId="btn_thumbnails_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_thumbnails_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbnails_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbnails_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbnails_phone.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbnails_phone.style.visibility=(Number(me._btn_thumbnails_phone.style.opacity)>0||!me._btn_thumbnails_phone.style.opacity)?'inherit':'hidden';
					me._btn_thumbnails_phone.ggVisible=true;
				}
				else {
					me._btn_thumbnails_phone.style.visibility="hidden";
					me._btn_thumbnails_phone.ggVisible=false;
				}
			}
		}
		me._btn_thumbnails_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_thumbnails_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_thumbnails_phone.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_thumbnails_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_thumbnails_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_thumbnails_phone.onclick=function (e) {
			player.setVariableValue('toggle_vis_thumbs', true);
			me._node_cloner_phone.ggText="";
			me._node_cloner_phone.ggUpdate([]);
			skin.updateSize(skin.divSkin);
		}
		me._btn_thumbnails_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_thumbnails_phone']=true;
			me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_thumbnails_phone']=false;
			me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon_phone=document.createElement('div');
		els=me._btn_thumbnails_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxjaXJjbGUgY3g9IjE4Ii'+
			'BjeT0iMTgiIGZpbGw9Im5vbmUiIHI9IjEuNSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxjaXJjbGUgY3g9IjI4LjUiIGN5PSIxOCIgZmlsbD0ibm9uZSIgcj0iMS41IiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGNpcmNsZSBjeD0iNy41IiBjeT0iMTgiIGZpbGw9Im5vbmUiIHI9IjEuNSIgc3Ryb2tl'+
			'PSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_thumbnails_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbnails_phone.appendChild(me._btn_thumbnails_icon_phone);
		me._button_container_phone.appendChild(me._btn_thumbnails_phone);
		el=me._btn_languages_phone=document.createElement('div');
		el.ggId="btn_languages_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_languages_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._btn_languages_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_languages_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_languages_phone.style.left=(20+deltaX) + 'px';
					me._btn_languages_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_languages_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_languages_phone.style.visibility=(Number(me._btn_languages_phone.style.opacity)>0||!me._btn_languages_phone.style.opacity)?'inherit':'hidden';
					me._btn_languages_phone.ggVisible=true;
				}
				else {
					me._btn_languages_phone.style.visibility="hidden";
					me._btn_languages_phone.ggVisible=false;
				}
			}
		}
		me._btn_languages_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_languages_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_languages_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_languages_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_languages_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_languages_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_languages_phone.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_languages_phone']=true;
			me._btn_languages_phone.logicBlock_backgroundcolor();
		}
		me._btn_languages_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_languages_phone']=false;
			me._btn_languages_phone.logicBlock_backgroundcolor();
		}
		me._btn_languages_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_languages_icon_phone=document.createElement('div');
		els=me._btn_languages_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iOC40IiB4Mj0iMTcuNiIgeTE9IjExLjMiIHkyPSIxMS4zIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3'+
			'BhY2l0eToxIiB4MT0iMTMiIHgyPSIxMyIgeTE9IjguMyIgeTI9IjExLjMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIgICAxNy44LDI2LjYgMjIuNCwxNS45IDI3LDI2LjYgICIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZW'+
			'NhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTguNiIgeDI9IjI2LjIiIHkxPSIyNC43IiB5Mj0iMjQuNyIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_languages_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_languages_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_languages_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_languages_phone.appendChild(me._btn_languages_icon_phone);
		me._button_container_phone.appendChild(me._btn_languages_phone);
		el=me._btn_fullscreen_phone=document.createElement('div');
		el.ggId="btn_fullscreen_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_fullscreen_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_fullscreen_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_fullscreen_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_fullscreen_phone.style.left=(20+deltaX) + 'px';
					me._btn_fullscreen_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_fullscreen_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_phone.style.visibility=(Number(me._btn_fullscreen_phone.style.opacity)>0||!me._btn_fullscreen_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_phone.ggVisible=true;
				}
				else {
					me._btn_fullscreen_phone.style.visibility="hidden";
					me._btn_fullscreen_phone.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_fullscreen_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_fullscreen_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_fullscreen_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_fullscreen_phone.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_fullscreen_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_fullscreen_phone']=true;
			me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_fullscreen_phone']=false;
			me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen_exit_phone=document.createElement('div');
		els=me._btn_fullscreen_exit_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjYsMjEgMTUsMjEgJiN4YTsmI3g5OzE1LDMwICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjMwLDE1IDIxLDE1ICYjeGE7JiN4OTsyMSw2ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxsaW5lIGZpbGw9Im5vbmUiIHN0cm9r'+
			'ZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjEiIHgyPSIzMS41IiB5MT0iMTUiIHkyPSI0LjUiLz4KIDxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iNC41IiB4Mj0iMTUiIHkxPSIzMS41IiB5Mj0iMjEiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_exit_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_exit_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_exit_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen_exit_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_exit_phone.style.transition='';
				if (me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_exit_phone.style.visibility=(Number(me._btn_fullscreen_exit_phone.style.opacity)>0||!me._btn_fullscreen_exit_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_exit_phone.ggVisible=true;
				}
				else {
					me._btn_fullscreen_exit_phone.style.visibility="hidden";
					me._btn_fullscreen_exit_phone.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_exit_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen_phone.appendChild(me._btn_fullscreen_exit_phone);
		el=me._btn_fullscreen_enter_phone=document.createElement('div');
		els=me._btn_fullscreen_enter_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjIyLjUsNC41ICYjeGE7JiN4OTszMS41LDQuNSAzMS41LDEzLjUgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHBvaW50cz0iMTMuNSwzMS41ICYjeGE7JiN4OTs0LjUsMzEuNSA0LjUsMjIuNSAiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8'+
			'bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjMxLjUiIHgyPSIyMSIgeTE9IjQuNSIgeTI9IjE1Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjQuNSIgeDI9IjE1IiB5MT0iMzEuNSIgeTI9IjIxIi8+Cjwvc3ZnPgo=';
		me._btn_fullscreen_enter_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_enter_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_enter_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_fullscreen_enter_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_enter_phone.style.transition='';
				if (me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_enter_phone.style.visibility="hidden";
					me._btn_fullscreen_enter_phone.ggVisible=false;
				}
				else {
					me._btn_fullscreen_enter_phone.style.visibility=(Number(me._btn_fullscreen_enter_phone.style.opacity)>0||!me._btn_fullscreen_enter_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_enter_phone.ggVisible=true;
				}
			}
		}
		me._btn_fullscreen_enter_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen_phone.appendChild(me._btn_fullscreen_enter_phone);
		me._button_container_phone.appendChild(me._btn_fullscreen_phone);
		el=me._btn_gyro_phone=document.createElement('div');
		el.ggId="btn_gyro_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._btn_gyro_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_gyro_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_gyro_phone.style.left=(20+deltaX) + 'px';
					me._btn_gyro_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_gyro_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_phone.style.visibility=(Number(me._btn_gyro_phone.style.opacity)>0||!me._btn_gyro_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_phone.ggVisible=true;
				}
				else {
					me._btn_gyro_phone.style.visibility="hidden";
					me._btn_gyro_phone.ggVisible=false;
				}
			}
		}
		me._btn_gyro_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_gyro_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_gyro_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_gyro_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_gyro_phone.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._btn_gyro_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_gyro_phone']=true;
			me._btn_gyro_phone.logicBlock_backgroundcolor();
		}
		me._btn_gyro_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_gyro_phone']=false;
			me._btn_gyro_phone.logicBlock_backgroundcolor();
		}
		me._btn_gyro_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_gyro_on_icon_phone=document.createElement('div');
		els=me._btn_gyro_on_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yXzFfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOCIgcng9IjE2LjUiIHJ5PSI2LjEiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxOC4xIiBjeT0iMTcuOSIgcng9IjE2LjYiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIxOCIgeTI9IjE4Ii8+Cjwvc3ZnPgo=';
		me._btn_gyro_on_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_on_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_on_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro_on_icon_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_on_icon_phone.style.transition='';
				if (me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_on_icon_phone.style.visibility="hidden";
					me._btn_gyro_on_icon_phone.ggVisible=false;
				}
				else {
					me._btn_gyro_on_icon_phone.style.visibility=(Number(me._btn_gyro_on_icon_phone.style.opacity)>0||!me._btn_gyro_on_icon_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_on_icon_phone.ggVisible=true;
				}
			}
		}
		me._btn_gyro_on_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro_phone.appendChild(me._btn_gyro_on_icon_phone);
		el=me._btn_gyro_off_icon_phone=document.createElement('div');
		els=me._btn_gyro_off_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojZDE0MWI5O3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjUiIHgyPSIzNC41IiB5MT0iMS41IiB5Mj0iMzQuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._btn_gyro_off_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_off_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_off_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_gyro_off_icon_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_off_icon_phone.style.transition='';
				if (me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_off_icon_phone.style.visibility=(Number(me._btn_gyro_off_icon_phone.style.opacity)>0||!me._btn_gyro_off_icon_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_off_icon_phone.ggVisible=true;
				}
				else {
					me._btn_gyro_off_icon_phone.style.visibility="hidden";
					me._btn_gyro_off_icon_phone.ggVisible=false;
				}
			}
		}
		me._btn_gyro_off_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro_phone.appendChild(me._btn_gyro_off_icon_phone);
		me._button_container_phone.appendChild(me._btn_gyro_phone);
		el=me._btn_vr_phone=document.createElement('div');
		el.ggId="btn_vr_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_vr_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_vr_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_vr_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_vr_phone.style.left=(20+deltaX) + 'px';
					me._btn_vr_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_vr_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_vr_phone.style.visibility=(Number(me._btn_vr_phone.style.opacity)>0||!me._btn_vr_phone.style.opacity)?'inherit':'hidden';
					me._btn_vr_phone.ggVisible=true;
				}
				else {
					me._btn_vr_phone.style.visibility="hidden";
					me._btn_vr_phone.ggVisible=false;
				}
			}
		}
		me._btn_vr_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_vr_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_vr_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_vr_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_vr_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_vr_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_vr_phone.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_vr_phone']=true;
			me._btn_vr_phone.logicBlock_backgroundcolor();
		}
		me._btn_vr_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_vr_phone']=false;
			me._btn_vr_phone.logicBlock_backgroundcolor();
		}
		me._btn_vr_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_vr_icon_phone=document.createElement('div');
		els=me._btn_vr_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik02LDEyLj'+
			'doMjQmI3hhOyYjeDk7YzEuNywwLDMsMS4xLDMsMi43djkuNGMwLDEuNy0xLjMsMy0zLDNoLTQuNmMtMS4xLDAtMi4xLTAuNi0yLjctMS42bC0yLjYtNC41Yy0wLjMtMC42LTEtMS0xLjctMWgtMC45Yy0wLjcsMC0xLjMsMC40LTEuNiwwLjkmI3hhOyYjeDk7bC0yLjgsNC42Yy0wLjYsMC45LTEuNiwxLjUtMi42LDEuNUg2Yy0xLjcsMC0zLTEuMy0zLTN2LTkuNEMzLDEzLjgsNC4zLDEyLjcsNiwxMi43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9'+
			'IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjEzLjIsMTIuNyAmI3hhOyYjeDk7MTMuMiw0LjIgMjIuOCw0LjIgMjIuOCwxMi43ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_vr_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_vr_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_vr_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_vr_phone.appendChild(me._btn_vr_icon_phone);
		me._button_container_phone.appendChild(me._btn_vr_phone);
		el=me._btn_audio_phone=document.createElement('div');
		el.ggId="btn_audio_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._btn_audio_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_audio_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_audio_phone.style.left=(20+deltaX) + 'px';
					me._btn_audio_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_audio_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_phone.style.visibility=(Number(me._btn_audio_phone.style.opacity)>0||!me._btn_audio_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_phone.ggVisible=true;
				}
				else {
					me._btn_audio_phone.style.visibility="hidden";
					me._btn_audio_phone.ggVisible=false;
				}
			}
		}
		me._btn_audio_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_audio_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_audio_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_audio_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_audio_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_audio_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_audio_phone.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._btn_audio_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_audio_phone']=true;
			me._btn_audio_phone.logicBlock_backgroundcolor();
		}
		me._btn_audio_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_audio_phone']=false;
			me._btn_audio_phone.logicBlock_backgroundcolor();
		}
		me._btn_audio_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_audio_on_phone=document.createElement('div');
		els=me._btn_audio_on_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMTYuNSw3LjUgJiN4YTsmI3g5OzksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBhdGggZD0iTTI4LjYsNy40JiN4YTsmI3g5O2M1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJv'+
			'dW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._btn_audio_on_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_on_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_on_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio_on_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_on_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_on_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_on_phone.style.transition='';
				if (me._btn_audio_on_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_on_phone.style.visibility=(Number(me._btn_audio_on_phone.style.opacity)>0||!me._btn_audio_on_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_on_phone.ggVisible=true;
				}
				else {
					me._btn_audio_on_phone.style.visibility="hidden";
					me._btn_audio_on_phone.ggVisible=false;
				}
			}
		}
		me._btn_audio_on_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio_phone.appendChild(me._btn_audio_on_phone);
		el=me._btn_audio_off_phone=document.createElement('div');
		els=me._btn_audio_off_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMTYuNSw3LjUgJiN4YTsmI3g5OzksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIzNC41IiB4Mj0iMjUuNSIgeTE9IjEzLjUiIHkyPSIyMi41'+
			'Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI1LjUiIHgyPSIzNC41IiB5MT0iMTMuNSIgeTI9IjIyLjUiLz4KPC9zdmc+Cg==';
		me._btn_audio_off_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_off_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_off_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_audio_off_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_off_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_off_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_off_phone.style.transition='';
				if (me._btn_audio_off_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_off_phone.style.visibility="hidden";
					me._btn_audio_off_phone.ggVisible=false;
				}
				else {
					me._btn_audio_off_phone.style.visibility=(Number(me._btn_audio_off_phone.style.opacity)>0||!me._btn_audio_off_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_off_phone.ggVisible=true;
				}
			}
		}
		me._btn_audio_off_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio_phone.appendChild(me._btn_audio_off_phone);
		me._button_container_phone.appendChild(me._btn_audio_phone);
		el=me._btn_share_phone=document.createElement('div');
		el.ggId="btn_share_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._btn_share_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_share_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_share_phone.style.left=(20+deltaX) + 'px';
					me._btn_share_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_share_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_share_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_share_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_share_phone.style.visibility=(Number(me._btn_share_phone.style.opacity)>0||!me._btn_share_phone.style.opacity)?'inherit':'hidden';
					me._btn_share_phone.ggVisible=true;
				}
				else {
					me._btn_share_phone.style.visibility="hidden";
					me._btn_share_phone.ggVisible=false;
				}
			}
		}
		me._btn_share_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_share_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_share_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_share_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_share_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_share_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_share_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_share_phone']=true;
			me._btn_share_phone.logicBlock_backgroundcolor();
		}
		me._btn_share_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_share_phone']=false;
			me._btn_share_phone.logicBlock_backgroundcolor();
		}
		me._btn_share_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_btns_container_phone=document.createElement('div');
		el.ggId="share_btns_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 138px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_btns_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_btns_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_copy_phone=document.createElement('div');
		els=me._btn_copy_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0xNi41LD'+
			'EzLjVIMzAmI3hhOyYjeDk7YzEuNywwLDMsMS4zLDMsM1YzMGMwLDEuNy0xLjMsMy0zLDNIMTYuNWMtMS43LDAtMy0xLjMtMy0zVjE2LjVDMTMuNSwxNC44LDE0LjgsMTMuNSwxNi41LDEzLjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBhdGggZD0iTTcuNSwyMi41SDYmI3hhOyYjeDk7Yy0xLjcsMC0zLTEuMy0zLTNWNmMwLTEuNywxLjMtMywzLTNoMTMuNWMxLjcsMCwzLDEuMywzLDN2MS41IiBmaWxsPSJub25lIiBzdHJv'+
			'a2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8L3N2Zz4K';
		me._btn_copy_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_copy_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_copy_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_copy_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_copy_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_copy_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_copy_phone.style.transition='left 0s, top 0s';
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 12;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 12;
				}
					me._btn_copy_phone.style.left = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._btn_copy_phone.style.top=(0+deltaY) + 'px';
			}
		}
		me._btn_copy_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_copy_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_copy_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_copy_phone.style.transition='left 0s, top 0s';
				if (me._btn_copy_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_copy_phone.style.visibility=(Number(me._btn_copy_phone.style.opacity)>0||!me._btn_copy_phone.style.opacity)?'inherit':'hidden';
					me._btn_copy_phone.ggVisible=true;
				}
				else {
					me._btn_copy_phone.style.visibility="hidden";
					me._btn_copy_phone.ggVisible=false;
				}
			}
		}
		me._btn_copy_phone.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._btn_copy_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_copy_phone);
		el=me._btn_twitter_phone=document.createElement('div');
		els=me._btn_twitter_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI4IDI4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkMTQxYjk7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._btn_twitter_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_twitter_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_twitter_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_twitter_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_twitter_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_twitter_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_twitter_phone.style.transition='left 0s, top 0s';
				if (me._btn_twitter_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_twitter_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 12;
				}
					me._btn_twitter_phone.style.left = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._btn_twitter_phone.style.top=(0+deltaY) + 'px';
			}
		}
		me._btn_twitter_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_twitter_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_twitter_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_twitter_phone.style.transition='left 0s, top 0s';
				if (me._btn_twitter_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_twitter_phone.style.visibility=(Number(me._btn_twitter_phone.style.opacity)>0||!me._btn_twitter_phone.style.opacity)?'inherit':'hidden';
					me._btn_twitter_phone.ggVisible=true;
				}
				else {
					me._btn_twitter_phone.style.visibility="hidden";
					me._btn_twitter_phone.ggVisible=false;
				}
			}
		}
		me._btn_twitter_phone.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._btn_twitter_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_twitter_phone);
		el=me._btn_facebook_phone=document.createElement('div');
		els=me._btn_facebook_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0yNywzaC'+
			'00LjUmI3hhOyYjeDk7QzE4LjQsMywxNSw2LjQsMTUsMTAuNVYxNWgtNC41djZIMTV2MTJoNlYyMWg0LjVsMS41LTZoLTZ2LTQuNUMyMSw5LjcsMjEuNyw5LDIyLjUsOUgyN1YzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._btn_facebook_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_facebook_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_facebook_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_facebook_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_facebook_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_facebook_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_facebook_phone.style.transition='';
				if (me._btn_facebook_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_facebook_phone.style.visibility=(Number(me._btn_facebook_phone.style.opacity)>0||!me._btn_facebook_phone.style.opacity)?'inherit':'hidden';
					me._btn_facebook_phone.ggVisible=true;
				}
				else {
					me._btn_facebook_phone.style.visibility="hidden";
					me._btn_facebook_phone.ggVisible=false;
				}
			}
		}
		me._btn_facebook_phone.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._btn_facebook_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_facebook_phone);
		me._btn_share_phone.appendChild(me._share_btns_container_phone);
		el=me._btn_share_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_share_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
		}
		me._btn_share_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_share_icon_phone=document.createElement('div');
		els=me._btn_share_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxjaXJjbGUgY3g9IjI2Lj'+
			'IiIGN5PSI3LjUiIGZpbGw9Im5vbmUiIHI9IjQuNSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxjaXJjbGUgY3g9IjguMiIgY3k9IjE4IiBmaWxsPSJub25lIiByPSI0LjUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8Y2lyY2xlIGN4PSIyNi4yIiBjeT0iMjguNSIgZmlsbD0ibm9uZSIgcj0iNC41IiBz'+
			'dHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIxMi4xIiB4Mj0iMjIuMyIgeTE9IjIwLjMiIHkyPSIyNi4yIi8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbm'+
			'Vqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjIyLjMiIHgyPSIxMi4xIiB5MT0iOS44IiB5Mj0iMTUuNyIvPgo8L3N2Zz4K';
		me._btn_share_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_share_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 38px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_share_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_share_icon_container_phone.appendChild(me._btn_share_icon_phone);
		me._btn_share_phone.appendChild(me._btn_share_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_share_phone);
		el=me._btn_map_phone=document.createElement('div');
		el.ggId="btn_map_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (JSON.stringify(me._btn_map_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_map_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_map_phone.style.left=(20+deltaX) + 'px';
					me._btn_map_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_map_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_map_phone.style.visibility=(Number(me._btn_map_phone.style.opacity)>0||!me._btn_map_phone.style.opacity)?'inherit':'hidden';
					me._btn_map_phone.ggVisible=true;
				}
				else {
					me._btn_map_phone.style.visibility="hidden";
					me._btn_map_phone.ggVisible=false;
				}
			}
		}
		me._btn_map_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_map_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_map_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_map_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_map_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_map_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_map_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_map_phone']=true;
			me._btn_map_phone.logicBlock_backgroundcolor();
		}
		me._btn_map_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_map_phone']=false;
			me._btn_map_phone.logicBlock_backgroundcolor();
		}
		me._btn_map_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_map_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_map', true);
		}
		me._btn_map_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon_phone=document.createElement('div');
		els=me._btn_map_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE1IiByPSI0LjUiLz4KPC9zdmc+Cg==';
		me._btn_map_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_map_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map_icon_container_phone.appendChild(me._btn_map_icon_phone);
		me._btn_map_phone.appendChild(me._btn_map_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_map_phone);
		el=me._btn_floorplan_phone=document.createElement('div');
		el.ggId="btn_floorplan_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (JSON.stringify(me._btn_floorplan_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_floorplan_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(7)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_floorplan_phone.style.left=(20+deltaX) + 'px';
					me._btn_floorplan_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_floorplan_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan_phone.style.visibility=(Number(me._btn_floorplan_phone.style.opacity)>0||!me._btn_floorplan_phone.style.opacity)?'inherit':'hidden';
					me._btn_floorplan_phone.ggVisible=true;
				}
				else {
					me._btn_floorplan_phone.style.visibility="hidden";
					me._btn_floorplan_phone.ggVisible=false;
				}
			}
		}
		me._btn_floorplan_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_floorplan_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_floorplan_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_floorplan_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_floorplan_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_floorplan_phone']=true;
			me._btn_floorplan_phone.logicBlock_backgroundcolor();
		}
		me._btn_floorplan_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_floorplan_phone']=false;
			me._btn_floorplan_phone.logicBlock_backgroundcolor();
		}
		me._btn_floorplan_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_floorplan_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_floorplan', true);
		}
		me._btn_floorplan_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon_phone=document.createElement('div');
		els=me._btn_floorplan_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iMS41LDkgMS41LDMzICYjeGE7JiN4OTsxMiwyNyAyNCwzMyAzNC41LDI3IDM0LjUsMyAyNCw5IDEyLDMgIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMyIgeTI9IjI3Ii8+CiA8'+
			'bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNkMTQxYjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI0IiB4Mj0iMjQiIHkxPSI5IiB5Mj0iMzMiLz4KPC9zdmc+Cg==';
		me._btn_floorplan_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_floorplan_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan_icon_container_phone.appendChild(me._btn_floorplan_icon_phone);
		me._btn_floorplan_phone.appendChild(me._btn_floorplan_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_floorplan_phone);
		el=me._btn_info_phone=document.createElement('div');
		el.ggId="btn_info_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newConditionsTruePosition.push(8);
			}
			if (JSON.stringify(me._btn_info_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_info_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(7)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(8)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_info_phone.style.left=(20+deltaX) + 'px';
					me._btn_info_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_info_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_info_phone.style.visibility=(Number(me._btn_info_phone.style.opacity)>0||!me._btn_info_phone.style.opacity)?'inherit':'hidden';
					me._btn_info_phone.ggVisible=true;
				}
				else {
					me._btn_info_phone.style.visibility="hidden";
					me._btn_info_phone.ggVisible=false;
				}
			}
		}
		me._btn_info_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_info_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_info_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_info_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_info_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_info_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_info_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_info_phone']=true;
			me._btn_info_phone.logicBlock_backgroundcolor();
		}
		me._btn_info_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_info_phone']=false;
			me._btn_info_phone.logicBlock_backgroundcolor();
		}
		me._btn_info_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_info_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', true);
				me._info_popup_title_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_title_phone.ggUpdateText();
			me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
				me._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_text_phone.ggUpdateText();
			me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
		}
		me._btn_info_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon_phone=document.createElement('div');
		els=me._btn_info_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE4IiByPSIxNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIyNCIgeTI9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTgiIHgyPSIxOCIgeTE9IjEyIiB5Mj0iMTIiLz4KPC9zdmc+Cg==';
		me._btn_info_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_info_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_icon_container_phone.appendChild(me._btn_info_icon_phone);
		me._btn_info_phone.appendChild(me._btn_info_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_info_phone);
		me.divSkin.appendChild(me._button_container_phone);
		el=me._safe_area_project_title_phone=document.createElement('div');
		el.ggId="safe_area_project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_project_title_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._project_title_phone=document.createElement('div');
		els=me._project_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text hepta_slab shadow_title";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(209,65,185,1);';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 110px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._project_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title_phone.style.transition='';
				if (me._project_title_phone.ggCurrentLogicStateVisible == 0) {
					me._project_title_phone.style.visibility=(Number(me._project_title_phone.style.opacity)>0||!me._project_title_phone.style.opacity)?'inherit':'hidden';
					me._project_title_phone.ggVisible=true;
				}
				else {
					me._project_title_phone.style.visibility="hidden";
					me._project_title_phone.ggVisible=false;
				}
			}
		}
		me._project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_project_title_phone.appendChild(me._project_title_phone);
		me.divSkin.appendChild(me._safe_area_project_title_phone);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text hepta_slab shadow_title";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(209,65,185,1);';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 125px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 60px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_info') == true)) || 
				((player.getVariableValue('vis_map') == true)) || 
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._project_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._project_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._project_title.style.transition='width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateSize == 0) {
					me._project_title.style.width='calc(70% - 75px)';
					me._project_title.style.height='75px';
					skin.updateSize(me._project_title);
				}
				else {
					me._project_title.style.width='calc(100% - 125px)';
					me._project_title.style.height='75px';
					skin.updateSize(me._project_title);
				}
			}
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._thumbnail_scroller=document.createElement('div');
		els=me._thumbnail_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='margin-top : -51.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosX = (me._thumbnail_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
			me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller.ggScrollPosX >= me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller.ggScrollPosX <= 0)) {
					me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosY = (me._thumbnail_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
			me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller.ggScrollPosY >= me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller.ggScrollPosY <= 0)) {
					me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
				me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller.ggInInteraction = false;
			setTimeout(function() { me._thumbnail_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller__content.mousetouchmove = e => {
			if (!me._thumbnail_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbnail_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller.ggDragStartY) > 10) me._thumbnail_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller.ggDragLastX) * me._thumbnail_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller.ggDragLastY) * me._thumbnail_scroller.ggVPercentVisible;
			me._thumbnail_scroller.ggDragInertiaX = -diffX;
			me._thumbnail_scroller.ggDragInertiaY = -diffY;
			me._thumbnail_scroller.ggDragLastX = eventX;
			me._thumbnail_scroller.ggDragLastY = eventY;
			me._thumbnail_scroller.ggScrollByX(-diffX);
			me._thumbnail_scroller.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = me._thumbnail_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.ggDragLastY = me._thumbnail_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._thumbnail_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbnail_scroller.contentMouseupListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbnail_scroller.contentTouchendListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbnail_scroller.contentMousemoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbnail_scroller.contentTouchmoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbnail_scroller.pointerupListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbnail_scroller.pointermoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		}
		elHorScrollBg = me._thumbnail_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 700px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 700px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._thumbnail_scroller.ggScrollPosX = 0;
		me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastX = e.clientX;
			document.addEventListener('mouseup', me._thumbnail_scroller.horMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller.horMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller.horMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller.horMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			});
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.horTouchEnd = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller.horTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller.horTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller.horPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller.horPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller.horTouchendListener = function() { me._thumbnail_scroller.horTouchEnd(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller.horPointerupListener = function() { me._thumbnail_scroller.horTouchEnd(); });
			}
			me._thumbnail_scroller.horTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller.horTouchmoveListener = function(e) { me._thumbnail_scroller.horTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller.horPointermoveListener = function(e) { me._thumbnail_scroller.horTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_scroller.ggScrollByXSmooth(30 * me._thumbnail_scroller.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='height : 130px;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_scroller.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller.style.visibility=(Number(me._thumbnail_scroller.style.opacity)>0||!me._thumbnail_scroller.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller.ggVisible=true;
				}
				else {
					me._thumbnail_scroller.style.visibility="hidden";
					me._thumbnail_scroller.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_scroller.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_scroller.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_scroller.style.visibility=me._thumbnail_scroller.ggVisible?'inherit':'hidden';
					me._thumbnail_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_scroller.style.opacity == 0.0) { me._thumbnail_scroller.style.visibility="hidden"; } }, 305);
					me._thumbnail_scroller.style.opacity=0;
				}
			}
		}
		me._thumbnail_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggHorScrollVisible = false;
				}
				if(me._thumbnail_scroller.ggHorScrollVisible) {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
					if (me._thumbnail_scroller.ggVertScrollVisible) {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width - me._thumbnail_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width;
					}
					me._thumbnail_scroller__horScrollBg.style.width = me._thumbnail_scroller.ggAvailableWidth + 'px';
					me._thumbnail_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_scroller.ggHPercentVisible > 1.0) me._thumbnail_scroller.ggHPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollWidth = Math.round(me._thumbnail_scroller__horScrollBg.offsetWidth * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller__horScrollFg.style.width = me._thumbnail_scroller.ggScrollWidth + 'px';
					me._thumbnail_scroller.ggScrollPosX = me._thumbnail_scroller.ggScrollPosXPercent * me._thumbnail_scroller.ggAvailableWidth;
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
					if (me._thumbnail_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
						me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
					me._thumbnail_scroller.ggScrollPosX = 0;
					me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller);
					me._thumbnail_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 182;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (!nodeData['tags'] || nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_scroller__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_scroller);
		el=me._languages_popup=document.createElement('div');
		el.ggId="languages_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._languages_popup.ggCurrentLogicStateAlpha == 0) {
					me._languages_popup.style.visibility=me._languages_popup.ggVisible?'inherit':'hidden';
					me._languages_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages_popup.style.opacity == 0.0) { me._languages_popup.style.visibility="hidden"; } }, 305);
					me._languages_popup.style.opacity=0;
				}
			}
		}
		me._languages_popup.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['languages_popup'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._languages_popup.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._languages_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._languages_popup.ggCurrentLogicStateBackgroundColor == 0) {
					me._languages_popup.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._languages_popup.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._languages_popup.onmouseenter=function (e) {
			me.elementMouseOver['languages_popup']=true;
			me._languages_popup.logicBlock_backgroundcolor();
		}
		me._languages_popup.onmouseleave=function (e) {
			me.elementMouseOver['languages_popup']=false;
			me._languages_popup.logicBlock_backgroundcolor();
		}
		me._languages_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 21px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 139px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller.ggInInteraction = false;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			if (!me._languages_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._languages_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._languages_scroller.contentMouseupListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._languages_scroller.contentTouchendListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._languages_scroller.contentMousemoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._languages_scroller.contentTouchmoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._languages_scroller.pointerupListener = function() { me._languages_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._languages_scroller.pointermoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 110px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 110px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._languages_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._languages_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._languages_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._languages_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._languages_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._languages_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._languages_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._languages_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._languages_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._languages_scroller.vertTouchendListener = function() { me._languages_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._languages_scroller.vertPointerupListener = function() { me._languages_scroller.vertTouchend(); });
			}
			me._languages_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._languages_scroller.vertTouchmoveListener = function(e) { me._languages_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._languages_scroller.vertPointermoveListener = function(e) { me._languages_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 110px;';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._languages_scroller.ggScrollPosY / me._languages_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 5;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 5;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 22;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._languages_popup.appendChild(me._languages_scroller);
		el=me._languages_close=document.createElement('div');
		els=me._languages_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iI2MyZTgxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSIxOCIgeDI9IjYiIHkxPSI2IiB5Mj0iMTgiLz4KIDxsaW5lIHgxPSI2IiB4Mj0iMTgiIHkxPSI2IiB5Mj0iMTgiLz4KPC9zdmc+Cg==';
		me._languages_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_close.onclick=function (e) {
			player.setVariableValue('vis_languages', false);
		}
		me._languages_close.ggUpdatePosition=function (useTransition) {
		}
		me._languages_popup.appendChild(me._languages_close);
		me.divSkin.appendChild(me._languages_popup);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screen_tint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screen_tint.style.transition='opacity 300ms ease 0ms';
				if (me._screen_tint.ggCurrentLogicStateAlpha == 0) {
					me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
					me._screen_tint.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screen_tint.style.opacity == 0.0) { me._screen_tint.style.visibility="hidden"; } }, 305);
					me._screen_tint.style.opacity=0;
				}
			}
		}
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_youtube_popup', false);
			player.setVariableValue('vis_video_vimeo_popup', false);
			player.setVariableValue('vis_video_file_popup', false);
			player.setVariableValue('vis_video_url_popup', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._ht_info_popup=document.createElement('div');
		el.ggId="ht_info_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((300px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((350px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._ht_info_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup.style.visibility=me._ht_info_popup.ggVisible?'inherit':'hidden';
					me._ht_info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup.style.opacity == 0.0) { me._ht_info_popup.style.visibility="hidden"; } }, 305);
					me._ht_info_popup.style.opacity=0;
				}
			}
		}
		me._ht_info_popup.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_popup'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_popup.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._ht_info_popup.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_popup.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_info_popup.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_info_popup.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_popup']=true;
			me._ht_info_popup.logicBlock_backgroundcolor();
		}
		me._ht_info_popup.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_popup']=false;
			me._ht_info_popup.logicBlock_backgroundcolor();
		}
		me._ht_info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_close=document.createElement('div');
		els=me._ht_info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSIxOCIgeDI9IjYiIHkxPSI2IiB5Mj0iMTgiLz4KIDxsaW5lIHgxPSI2IiB4Mj0iMTgiIHkxPSI2IiB5Mj0iMTgiLz4KPC9zdmc+Cg==';
		me._ht_info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup.appendChild(me._ht_info_popup_close);
		el=me._info_popup_text=document.createElement('div');
		els=me._info_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup.appendChild(me._info_popup_text);
		el=me._info_popup_title=document.createElement('div');
		els=me._info_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup.appendChild(me._info_popup_title);
		me.divSkin.appendChild(me._ht_info_popup);
		el=me._ht_video_popup=document.createElement('div');
		el.ggId="ht_video_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_video_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup.style.transition='';
				if (me._ht_video_popup.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup.style.visibility=(Number(me._ht_video_popup.style.opacity)>0||!me._ht_video_popup.style.opacity)?'inherit':'hidden';
					me._ht_video_popup.ggVisible=true;
				}
				else {
					me._ht_video_popup.style.visibility="hidden";
					me._ht_video_popup.ggVisible=false;
				}
			}
		}
		me._ht_video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_popup_title=document.createElement('div');
		els=me._ht_video_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_popup_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_video_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_title);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 10%;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((3px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#3c3c3c';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-13px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 2 + 1) * percent);
					playheadpos += -13;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13.5px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(209,65,185,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._ht_video_popup.appendChild(me._video_controller);
		me.divSkin.appendChild(me._ht_video_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off_bg=document.createElement('div');
		el.ggId="sounds_off_bg";
		el.ggDx=70;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 0px 27px 27px 0px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 70px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['sounds_off_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_off_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_off_bg.style.transition='background-color 100ms ease 0ms';
				if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_off_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._sounds_off_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._sounds_off_bg.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.setVariableValue('toggle_audio', false);
		}
		me._sounds_off_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_off_bg']=true;
			me._sounds_off_bg.logicBlock_backgroundcolor();
		}
		me._sounds_off_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_off_bg']=false;
			me._sounds_off_bg.logicBlock_backgroundcolor();
		}
		me._sounds_off_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNkMTQxYjk7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzNC41IiB4Mj0iMjUuNSIgeTE9IjEzLjUiIHkyPSIyMi41Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjUuNSIgeDI9IjM0LjUiIHkxPSIxMy41IiB5Mj0iMjIuNSIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_off_bg.appendChild(me._sounds_off);
		me._sounds_splashscreen.appendChild(me._sounds_off_bg);
		el=me._sounds_on_bg=document.createElement('div');
		el.ggId="sounds_on_bg";
		el.ggDx=-70;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 27px 0px 0px 27px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) - 70px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['sounds_on_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_on_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_on_bg.style.transition='background-color 100ms ease 0ms';
				if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_on_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._sounds_on_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._sounds_on_bg.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_on_bg']=true;
			me._sounds_on_bg.logicBlock_backgroundcolor();
		}
		me._sounds_on_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_on_bg']=false;
			me._sounds_on_bg.logicBlock_backgroundcolor();
		}
		me._sounds_on_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNkMTQxYjk7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiLz4KPC9zdmc+Cg==';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_on_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_on_bg);
		el=me._sounds_splashscreen_border=document.createElement('div');
		el.ggId="sounds_splashscreen_border";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 27px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((280px + 2px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 2px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_border.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_border);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('toggle_vis_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_floorplan', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2QxNDFiOTtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOSIgeDI9IjI3IiB5MT0iOSIgeTI9IjI3Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 50px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -87px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 174px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone.ggInInteraction = false;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			if (!me._thumbnail_scroller_phone.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbnail_scroller_phone__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.ggInInteraction = true;
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbnail_scroller_phone.contentMouseupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbnail_scroller_phone.contentTouchendListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbnail_scroller_phone.contentMousemoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbnail_scroller_phone.contentTouchmoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbnail_scroller_phone.pointerupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbnail_scroller_phone.pointermoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			}
			me._thumbnail_scroller_phone.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (!nodeData['tags'] || nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._floorplan_el_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((3px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 1) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13.5px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(209,65,185,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._model_load_spinner=document.createElement('div');
		els=me._model_load_spinner__img=document.createElement('img');
		els.className='ggskin ggskin_image';
		hs=basePath + 'images/model_load_spinner.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="model_load_spinner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 120px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._model_load_spinner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._model_load_spinner.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._model_load_spinner.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._model_load_spinner.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStatePosition == 0) {
					me._model_load_spinner.style.left='25px';
					me._model_load_spinner.style.bottom='calc(100% - 95px)';
				}
				else {
					me._model_load_spinner.style.left='25px';
					me._model_load_spinner.style.bottom='20px';
				}
			}
		}
		me._model_load_spinner.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateSize != newLogicStateSize) {
				me._model_load_spinner.ggCurrentLogicStateSize = newLogicStateSize;
				me._model_load_spinner.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateSize == 0) {
					me._model_load_spinner.style.width='75px';
					me._model_load_spinner.style.height='75px';
					skin.updateSize(me._model_load_spinner);
				}
				else {
					me._model_load_spinner.style.width='120px';
					me._model_load_spinner.style.height='120px';
					skin.updateSize(me._model_load_spinner);
				}
			}
		}
		me._model_load_spinner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('model_loading') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._model_load_spinner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._model_load_spinner.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateVisible == 0) {
					me._model_load_spinner.style.visibility=(Number(me._model_load_spinner.style.opacity)>0||!me._model_load_spinner.style.opacity)?'inherit':'hidden';
					me._model_load_spinner.ggVisible=true;
				}
				else {
					me._model_load_spinner.style.visibility="hidden";
					me._model_load_spinner.ggVisible=false;
				}
			}
		}
		me._model_load_spinner.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._model_load_spinner);
		el=me._local_fonts=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._button_container.logicBlock_visible();
		me.elementMouseOver['btn_thumbnails']=false;
		me._btn_thumbnails.logicBlock_visible();
		me._btn_thumbnails.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_fullscreen']=false;
		me._btn_fullscreen.logicBlock_position();
		me._btn_fullscreen.logicBlock_visible();
		me._btn_fullscreen.logicBlock_backgroundcolor();
		me._btn_fullscreen_exit.logicBlock_visible();
		me._btn_fullscreen_enter.logicBlock_visible();
		me.elementMouseOver['btn_languages']=false;
		me._btn_languages.logicBlock_position();
		me._btn_languages.logicBlock_visible();
		me._btn_languages.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_gyro']=false;
		me._btn_gyro.logicBlock_position();
		me._btn_gyro.logicBlock_visible();
		me._btn_gyro.logicBlock_backgroundcolor();
		me._btn_gyro_on_icon.logicBlock_visible();
		me._btn_gyro_off_icon.logicBlock_visible();
		me.elementMouseOver['btn_vr']=false;
		me._btn_vr.logicBlock_position();
		me._btn_vr.logicBlock_visible();
		me._btn_vr.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_audio']=false;
		me._btn_audio.logicBlock_position();
		me._btn_audio.logicBlock_visible();
		me._btn_audio.logicBlock_backgroundcolor();
		me._btn_audio_on.logicBlock_visible();
		me._btn_audio_off.logicBlock_visible();
		me.elementMouseOver['btn_share']=false;
		me._btn_share.logicBlock_position();
		me._btn_share.logicBlock_visible();
		me._btn_share.logicBlock_backgroundcolor();
		me._btn_copy.logicBlock_position();
		me._btn_copy.logicBlock_visible();
		me._btn_twitter.logicBlock_position();
		me._btn_twitter.logicBlock_visible();
		me._btn_facebook.logicBlock_visible();
		me.elementMouseOver['btn_info']=false;
		me._btn_info.logicBlock_position();
		me._btn_info.logicBlock_size();
		me._btn_info.logicBlock_visible();
		me._btn_info.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_floorplan']=false;
		me._btn_floorplan.logicBlock_position();
		me._btn_floorplan.logicBlock_size();
		me._btn_floorplan.logicBlock_visible();
		me._btn_floorplan.logicBlock_backgroundcolor();
		me._floorplan.ggInitMap=function() {};
		me._floorplan.ggInitMapMarkers=function() {};
		me._floorplan.ggClearMap=function() {};
		me.elementMouseOver['btn_map']=false;
		me._btn_map.logicBlock_size();
		me._btn_map.logicBlock_visible();
		me._btn_map.logicBlock_backgroundcolor();
		me._map.ggInitMap=function() {};
		me._map.ggInitMapMarkers=function() {};
		me._map.ggClearMap=function() {};
		me._map_timer.logicBlock_visible();
		me._button_container_phone.logicBlock_visible();
		me.elementMouseOver['btn_thumbnails_phone']=false;
		me._btn_thumbnails_phone.logicBlock_visible();
		me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_languages_phone']=false;
		me._btn_languages_phone.logicBlock_position();
		me._btn_languages_phone.logicBlock_visible();
		me._btn_languages_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_fullscreen_phone']=false;
		me._btn_fullscreen_phone.logicBlock_position();
		me._btn_fullscreen_phone.logicBlock_visible();
		me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		me._btn_fullscreen_exit_phone.logicBlock_visible();
		me._btn_fullscreen_enter_phone.logicBlock_visible();
		me.elementMouseOver['btn_gyro_phone']=false;
		me._btn_gyro_phone.logicBlock_position();
		me._btn_gyro_phone.logicBlock_visible();
		me._btn_gyro_phone.logicBlock_backgroundcolor();
		me._btn_gyro_on_icon_phone.logicBlock_visible();
		me._btn_gyro_off_icon_phone.logicBlock_visible();
		me.elementMouseOver['btn_vr_phone']=false;
		me._btn_vr_phone.logicBlock_position();
		me._btn_vr_phone.logicBlock_visible();
		me._btn_vr_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_audio_phone']=false;
		me._btn_audio_phone.logicBlock_position();
		me._btn_audio_phone.logicBlock_visible();
		me._btn_audio_phone.logicBlock_backgroundcolor();
		me._btn_audio_on_phone.logicBlock_visible();
		me._btn_audio_off_phone.logicBlock_visible();
		me.elementMouseOver['btn_share_phone']=false;
		me._btn_share_phone.logicBlock_position();
		me._btn_share_phone.logicBlock_visible();
		me._btn_share_phone.logicBlock_backgroundcolor();
		me._btn_copy_phone.logicBlock_position();
		me._btn_copy_phone.logicBlock_visible();
		me._btn_twitter_phone.logicBlock_position();
		me._btn_twitter_phone.logicBlock_visible();
		me._btn_facebook_phone.logicBlock_visible();
		me.elementMouseOver['btn_map_phone']=false;
		me._btn_map_phone.logicBlock_position();
		me._btn_map_phone.logicBlock_visible();
		me._btn_map_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_floorplan_phone']=false;
		me._btn_floorplan_phone.logicBlock_position();
		me._btn_floorplan_phone.logicBlock_visible();
		me._btn_floorplan_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_info_phone']=false;
		me._btn_info_phone.logicBlock_position();
		me._btn_info_phone.logicBlock_visible();
		me._btn_info_phone.logicBlock_backgroundcolor();
		me._project_title_phone.logicBlock_visible();
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible();
		me._thumbnail_scroller.logicBlock_visible();
		me._thumbnail_scroller.logicBlock_alpha();
		me.elementMouseOver['languages_popup']=false;
		me._languages_popup.logicBlock_alpha();
		me._languages_popup.logicBlock_backgroundcolor();
		me._screen_tint.logicBlock_alpha();
		me.elementMouseOver['ht_info_popup']=false;
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_popup.logicBlock_backgroundcolor();
		me._ht_video_popup.logicBlock_visible();
		me._video_controller.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off_bg']=false;
		me._sounds_off_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['sounds_on_bg']=false;
		me._sounds_on_bg.logicBlock_backgroundcolor();
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		pano.on("modelloadstarted", () => { pano.setVariableValue("model_loading", true); });
pano.on("modelloaded", () => { pano.setVariableValue("model_loading", false); });
		me._model_load_spinner.logicBlock_position();
		me._model_load_spinner.logicBlock_size();
		me._model_load_spinner.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			me._btn_info.logicBlock_visible();
			me._btn_info_phone.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_phone_thumbs.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._variable_vis_thumbnails.logicBlock();
			me._button_container.logicBlock_visible();
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_position();
			me._btn_gyro.logicBlock_visible();
			me._btn_gyro_on_icon.logicBlock_visible();
			me._btn_gyro_off_icon.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_audio.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_share.logicBlock_position();
			me._btn_share.logicBlock_visible();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_facebook.logicBlock_visible();
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_map.logicBlock_visible();
			me._map_timer.logicBlock_visible();
			me._button_container_phone.logicBlock_visible();
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_gyro_on_icon_phone.logicBlock_visible();
			me._btn_gyro_off_icon_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
			me._btn_facebook_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._languages_popup.logicBlock_alpha();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._screen_tint.logicBlock_alpha();
			me._ht_info_popup.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._model_load_spinner.logicBlock_position();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_phone_thumbs.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._variable_vis_thumbnails.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			if (player.transitionsDisabled) {
				me._button_container.style.transition='none';
			} else {
				me._button_container.style.transition='all 500ms ease-out 800ms';
			}
			me._button_container.style.opacity='1';
			me._button_container.style.visibility=me._button_container.ggVisible?'inherit':'hidden';
			me._button_container.logicBlock_visible();
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_position();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_position();
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_audio.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_share.logicBlock_position();
			me._btn_share.logicBlock_visible();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_facebook.logicBlock_visible();
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_map.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._button_container_phone.style.transition='none';
			} else {
				me._button_container_phone.style.transition='all 500ms ease-out 800ms';
			}
			me._button_container_phone.style.opacity='1';
			me._button_container_phone.style.visibility=me._button_container_phone.ggVisible?'inherit':'hidden';
			me._button_container_phone.logicBlock_visible();
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_position();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
			me._btn_facebook_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.ggUpdatePosition();
			if (
				(
					((player.getVariableValue('opt_thumbnails') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('toggle_vis_thumbs', true);
			}
			me._thumbnail_scroller.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_alpha();
			me._languages_popup.logicBlock_alpha();
			me._languages_scroller.ggUpdatePosition();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._screen_tint.logicBlock_alpha();
			me._ht_info_popup.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._model_load_spinner.logicBlock_position();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
			me._btn_fullscreen_exit_phone.logicBlock_visible();
			me._btn_fullscreen_enter_phone.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
			me._btn_fullscreen_exit_phone.logicBlock_visible();
			me._btn_fullscreen_enter_phone.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('gyrochanged', function(event) {
			me._btn_gyro_on_icon.logicBlock_visible();
			me._btn_gyro_off_icon.logicBlock_visible();
			me._btn_gyro_on_icon_phone.logicBlock_visible();
			me._btn_gyro_off_icon_phone.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_gyro.logicBlock_position();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_model_loading', function(event) {
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_gyro.logicBlock_position();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_map.logicBlock_size();
			me._btn_info_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_maps', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_map.logicBlock_visible();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._btn_share.logicBlock_visible();
			me._btn_share_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_twitter.logicBlock_position();
			me._btn_facebook.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_facebook_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_phone_thumbs.logicBlock();
			me._variable_vis_thumbnails.logicBlock();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
		});
		player.addListener('varchanged_resp_phone_landscape', function(event) {
			me._button_container.logicBlock_visible();
			me._button_container_phone.logicBlock_visible();
			me._model_load_spinner.logicBlock_position();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
		});
		player.addListener('varchanged_toggle_vis_thumbs', function(event) {
			me._variable_vis_phone_thumbs.logicBlock();
			me._variable_vis_thumbnails.logicBlock();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._btn_info.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._ht_info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_floorplan.logicBlock_position();
			me._btn_map.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_share', function(event) {
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share.style.transition='none';
				} else {
					me._btn_share.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share.style.width = '' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
				me._btn_share.style.height = '50px';
				var that = me;
				var el = me._btn_share;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share.style.transition='none';
				} else {
					me._btn_share.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share.style.width = '50px';
				me._btn_share.style.height = '50px';
				var that = me;
				var el = me._btn_share;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container.style.transition='none';
				} else {
					me._share_btns_container.style.transition='all 200ms ease-out 500ms';
				}
				me._share_btns_container.style.opacity='1';
				me._share_btns_container.style.visibility=me._share_btns_container.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container.style.transition='none';
				} else {
					me._share_btns_container.style.transition='all 200ms ease-out 0ms';
				}
				me._share_btns_container.style.opacity='0';
				me._share_btns_container.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share_phone.style.transition='none';
				} else {
					me._btn_share_phone.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share_phone.style.width = '50px';
				me._btn_share_phone.style.height = '' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
				var that = me;
				var el = me._btn_share_phone;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share_phone);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share_phone.style.transition='none';
				} else {
					me._btn_share_phone.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share_phone.style.width = '50px';
				me._btn_share_phone.style.height = '50px';
				var that = me;
				var el = me._btn_share_phone;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share_phone);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container_phone.style.transition='none';
				} else {
					me._share_btns_container_phone.style.transition='all 200ms ease-out 500ms';
				}
				me._share_btns_container_phone.style.opacity='1';
				me._share_btns_container_phone.style.visibility=me._share_btns_container_phone.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container_phone.style.transition='none';
				} else {
					me._share_btns_container_phone.style.transition='all 200ms ease-out 0ms';
				}
				me._share_btns_container_phone.style.opacity='0';
				me._share_btns_container_phone.style.visibility='hidden';
			}
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_visible();
			me._btn_share.logicBlock_visible();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_visible();
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnail_scroller.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.83,sy:0.83,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('toggle_vis_thumbs', false);
		}
		me._thumbnail_image_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=true;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=false;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._thumbnail_image_phone.ggNodeId;
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #d141b9;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._thumbnail_image_phone.ggNodeId;
		}
		me._thumbnail_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone.style.visibility=me._thumbnail_border_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone.style.opacity == 0.0) { me._thumbnail_border_phone.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_border_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._thumbnail_image_phone.ggNodeId;
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_visited_phone);
		me.__div.appendChild(me._thumbnail_image_phone);
		me.elementMouseOver['thumbnail_image_phone']=false;
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(209,65,185,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me.elementMouseOver['language_title']=false;
		me._language_title.logicBlock_textcolor();
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image);
		el=me._thumbnail_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbnail_tint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0.392157)";
				}
				else {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint.onclick=function (e) {
			if (me._thumbnail_tint.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 200ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 205);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_title);
		el=me._thumbnail_border=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #d141b9;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbnail_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border.style.visibility=me._thumbnail_border.ggVisible?'inherit':'hidden';
					me._thumbnail_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border.style.opacity == 0.0) { me._thumbnail_border.style.visibility="hidden"; } }, 105);
					me._thumbnail_border.style.opacity=0;
				}
			}
		}
		me._thumbnail_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_border);
		me.__div.appendChild(me._thumbnail_tint);
		el=me._thumbnail_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbnail_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited.style.transition='';
				if (me._thumbnail_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited.style.visibility=(Number(me._thumbnail_visited.style.opacity)>0||!me._thumbnail_visited.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited.ggVisible=true;
				}
				else {
					me._thumbnail_visited.style.visibility="hidden";
					me._thumbnail_visited.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited);
		me.elementMouseOver['thumbnail_tint']=false;
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited.logicBlock_visible();
				me._thumbnail_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_pin";
		el.ggDx=22;
		el.ggDy=-186;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 22px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) - 186px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._pin_tooltip=document.createElement('div');
		els=me._pin_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pin_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='bottom : -24px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='min-width: 50px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 29px 5px 5px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pin_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pin_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._pin_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._pin_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._pin_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pin_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pin_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pin_tooltip.style.transition='';
				if (me._pin_tooltip.ggCurrentLogicStateVisible == 0) {
					me._pin_tooltip.style.visibility="hidden";
					me._pin_tooltip.ggVisible=false;
				}
				else {
					me._pin_tooltip.style.visibility=(Number(me._pin_tooltip.style.opacity)>0||!me._pin_tooltip.style.opacity)?'inherit':'hidden';
					me._pin_tooltip.ggVisible=true;
				}
			}
		}
		me._pin_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_tooltip);
		el=me._pin_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/pin_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="pin_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pin_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._pin_anim.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.ggParameter.sx=1;me._pin_tooltip.ggParameter.sy=1;
			me._pin_tooltip.style.transform=parameterToTransform(me._pin_tooltip.ggParameter);
			setTimeout(function() {skin.updateSize(me._pin_tooltip);}, 250);
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.style.opacity='1';
			me._pin_tooltip.style.visibility=me._pin_tooltip.ggVisible?'inherit':'hidden';
			me.elementMouseOver['pin_anim']=true;
		}
		me._pin_anim.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.ggParameter.sx=0.7;me._pin_tooltip.ggParameter.sy=0.7;
			me._pin_tooltip.style.transform=parameterToTransform(me._pin_tooltip.ggParameter);
			setTimeout(function() {skin.updateSize(me._pin_tooltip);}, 250);
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.style.opacity='0';
			me._pin_tooltip.style.visibility='hidden';
			me.elementMouseOver['pin_anim']=false;
		}
		me._pin_anim.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_anim);
		me._pin_tooltip.logicBlock_visible();
		me._pin_anim.ggLottie.loop = false;
		me._pin_anim.addEventListener('mouseenter', function() {
			me._pin_anim.ggLottie.stop();
			me._pin_anim.ggLottie.setDirection(1);
			me._pin_anim.ggLottie.play();
		});
		me._pin_anim.ggLottie.addEventListener('complete', function() {
			if(me._pin_anim.ggLottie.currentFrame == 0) {
				me._pin_anim.ggLottie.setDirection(1);
			}
		});
		me._pin_anim.addEventListener('mouseleave', function() {
			me._pin_anim.ggLottie.setDirection(-1);
			me._pin_anim.ggLottie.play();
		});
		me.elementMouseOver['pin_anim']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._pin_tooltip.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._pin_tooltip.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._pin_tooltip.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_node__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node.visible = (v>0 && me._ht_node.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_node';
		el.userData.x = -4.18;
		el.userData.y = 2.97;
		el.translateZ(0.000);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.000;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 0;
		el.userData.renderOrder = 0;
		el.userData.isVisible = function() {
			let vis = me._ht_node.visible
			let parentEl = me._ht_node.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node.userData.opacity = v;
			v = v * me._ht_node.userData.parentOpacity;
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node.userData.parentOpacity = v;
			v = v * me._ht_node.userData.opacity
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node = el;
		el.userData.ggId="ht_node";
		me._ht_node.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
			me._ht_node.visible=((!me._ht_node.material && Number(me._ht_node.userData.opacity>0)) || (me._ht_node.material && Number(me._ht_node.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node.userData.visible=true;
				}
				else {
			me._ht_node.visible=false;
			player.repaint();
			me._ht_node.userData.visible=false;
				}
			}
		}
		me._ht_node.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_node.ggCurrentLogicStateZIndex == 0) {
					me._ht_node.userData.zIndexCurrent = 1;
			me._ht_node.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_node) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = false;
						obj.material.depthWrite = false;
					} else {
						obj.material.transparent = true;
					}
				}
			});
			player.repaint();
				}
				else {
					me._ht_node.userData.zIndexCurrent = -10000;
			me._ht_node.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_node) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = true;
						obj.material.depthWrite = true;
					} else {
						obj.material.transparent = obj.userData.hasOwnProperty('transparentIn3d') ? obj.userData.transparentIn3d : false;
					}
				}
			});
			player.repaint();
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.hasOwnClickAction = true;
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
			me._ht_node.logicBlock_zindex();
		}
		me._ht_node.userData.ontouchend=function (e) {
			me._ht_node.logicBlock_zindex();
		}
		me._ht_node.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
			me._ht_node.logicBlock_zindex();
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#505050'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 40;
		el.userData.height = 40;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_node_bg.visible
			let parentEl = me._ht_node_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_bg.userData.opacity = v;
			v = v * me._ht_node_bg.userData.parentOpacity;
			if (me._ht_node_bg.userData.setOpacityInternal) me._ht_node_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_bg.children.length; i++) {
				let child = me._ht_node_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_bg.userData.parentOpacity = v;
			v = v * me._ht_node_bg.userData.opacity
			if (me._ht_node_bg.userData.setOpacityInternal) me._ht_node_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_bg.children.length; i++) {
				let child = me._ht_node_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 14;
		el.userData.borderRadius.default.topRight = 14;
		el.userData.borderRadius.default.bottomRight = 14;
		el.userData.borderRadius.default.bottomLeft = 14;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_bg);
			if (skin.rectHasRoundedCorners(me._ht_node_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_node_bg.userData.backgroundColorAlpha = 1;
		me._ht_node_bg.userData.borderColorAlpha = 1;
		me._ht_node_bg.userData.setOpacityInternal = function(v) {
			me._ht_node_bg.material.opacity = v * me._ht_node_bg.userData.backgroundColorAlpha;
			if (me._ht_node_bg.userData.ggSubElement) {
				me._ht_node_bg.userData.ggSubElement.material.opacity = v
				me._ht_node_bg.userData.ggSubElement.visible = (v>0 && me._ht_node_bg.userData.visible);
			}
			me._ht_node_bg.visible = (v>0 && me._ht_node_bg.userData.visible);
		}
		me._ht_node_bg.userData.setBackgroundColor = function(v) {
			me._ht_node_bg.material.color = v;
		}
		me._ht_node_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_bg.userData.backgroundColorAlpha = v;
			me._ht_node_bg.userData.setOpacity(me._ht_node_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 14, 14, 14, 14);
		el.userData.ggId="ht_node_bg";
		me._ht_node_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.userData.transitionValue_scale = {x: 2.5, y: 2.5, z: 1.0};
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_node_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_bg.scale.set(transition_scale.startScale.x + (me._ht_node_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_node_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_node_bg.position.x = (me._ht_node_bg.position.x - me._ht_node_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_node_bg.userData.curScaleOffX = scaleOffX;
							me._ht_node_bg.position.y = (me._ht_node_bg.position.y - me._ht_node_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_node_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_node_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_node_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_bg.scale.set(transition_scale.startScale.x + (me._ht_node_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_node_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_node_bg.position.x = (me._ht_node_bg.position.x - me._ht_node_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_node_bg.userData.curScaleOffX = scaleOffX;
							me._ht_node_bg.position.y = (me._ht_node_bg.position.y - me._ht_node_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_node_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_node_bg.visible=false;
			player.repaint();
			me._ht_node_bg.userData.visible=false;
				}
				else {
			me._ht_node_bg.visible=((!me._ht_node_bg.material && Number(me._ht_node_bg.userData.opacity>0)) || (me._ht_node_bg.material && Number(me._ht_node_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_bg.userData.visible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg'] == true)) && 
				((player.get3dModelType() != 2))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me.elementMouseOver['ht_node_bg'] == true)) && 
				((player.get3dModelType() == 2))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((player.get3dModelType() != 2))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#464646');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 0.470588;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 100;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
				else if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 1) {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#323232');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 1;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 100;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
				else if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 2) {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#505050');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 0.392157;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 100;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
				else {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#505050');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 1;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 100;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
			}
		}
		me._ht_node_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_icon_visited.logicBlock_visible();
			me._ht_node_icon.logicBlock_visible();
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.userData.ontouchend=function (e) {
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_icon_visited.logicBlock_visible();
			me._ht_node_icon.logicBlock_visible();
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Group();
		el.userData.setOpacityInState = function(stateGroup, opacity) {
			stateGroup.traverse(function(child) {
				if (child.material) {
					child.material.opacity = child.userData.svgOpacity * opacity;
					child.material.transparent = player.get3dModelType() != 2 || (child.material.opacity < 1.0);
				}
			});
		}
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_icon_visited.userData.svgGroupNormal) me._ht_node_icon_visited.userData.setOpacityInState(me._ht_node_icon_visited.userData.svgGroupNormal, v);
			if (me._ht_node_icon_visited.userData.svgGroupOver) me._ht_node_icon_visited.userData.setOpacityInState(me._ht_node_icon_visited.userData.svgGroupOver, v);
			if (me._ht_node_icon_visited.userData.svgGroupActive) me._ht_node_icon_visited.userData.setOpacityInState(me._ht_node_icon_visited.userData.svgGroupActive, v);
			me._ht_node_icon_visited.visible = (v>0 && me._ht_node_icon_visited.userData.visible);
		}
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 25;
		el.userData.height = 25;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_icon_visited';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_node_icon_visited.visible
			let parentEl = me._ht_node_icon_visited.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_icon_visited.userData.opacity = v;
			v = v * me._ht_node_icon_visited.userData.parentOpacity;
			if (me._ht_node_icon_visited.userData.setOpacityInternal) me._ht_node_icon_visited.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon_visited.children.length; i++) {
				let child = me._ht_node_icon_visited.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_icon_visited.userData.parentOpacity = v;
			v = v * me._ht_node_icon_visited.userData.opacity
			if (me._ht_node_icon_visited.userData.setOpacityInternal) me._ht_node_icon_visited.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon_visited.children.length; i++) {
				let child = me._ht_node_icon_visited.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_icon_visited = el;
		clickTargetGeometry = new THREE.PlaneGeometry(25 / 100.0, 25 / 100.0, 5, 5 );
		clickTargetGeometry.name = 'ht_node_icon_visited_clickTargetGeometry';
		clickTargetMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, transparent: true } );
		clickTargetMaterial.name = 'ht_node_icon_visited_clickTargetMaterial';
		me._ht_node_icon_visited.userData.clickTarget = new THREE.Mesh( clickTargetGeometry, clickTargetMaterial );
		me._ht_node_icon_visited.userData.clickTarget.name = 'ht_node_icon_visited_clickTarget';
		me._ht_node_icon_visited.userData.clickTarget.userData.clickInvisible = true;
		me._ht_node_icon_visited.userData.clickTarget.visible = false;
		me._ht_node_icon_visited.add(me._ht_node_icon_visited.userData.clickTarget);
		(async() => {
			let group = await player.loadSvg3D(basePath + 'images/ht_node_icon_visited.svg', me._ht_node_icon_visited.userData.width / 100.0, me._ht_node_icon_visited.userData.height / 100.0);
			me._ht_node_icon_visited.add(group);
			me._ht_node_icon_visited.userData.svgGroupNormal = group;
			me._ht_node_icon_visited.userData.setOpacityInState(group, me._ht_node_icon_visited.userData.opacity);
			player.repaint(3);
		})();
		el.userData.createGeometry = function() {};
		el.userData.ggId="ht_node_icon_visited";
		me._ht_node_icon_visited.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon_visited.ggElementNodeId()) == true)) && 
				((me.elementMouseOver['ht_node_bg'] == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_icon_visited.ggCurrentLogicStateVisible == 0) {
			me._ht_node_icon_visited.visible=((!me._ht_node_icon_visited.material && Number(me._ht_node_icon_visited.userData.opacity>0)) || (me._ht_node_icon_visited.material && Number(me._ht_node_icon_visited.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_icon_visited.userData.visible=true;
				}
				else {
			me._ht_node_icon_visited.visible=false;
			player.repaint();
			me._ht_node_icon_visited.userData.visible=false;
				}
			}
		}
		me._ht_node_icon_visited.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_icon_visited']=true;
		}
		me._ht_node_icon_visited.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_icon_visited']=false;
		}
		me._ht_node_icon_visited.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_icon_visited);
		el = new THREE.Group();
		el.userData.setOpacityInState = function(stateGroup, opacity) {
			stateGroup.traverse(function(child) {
				if (child.material) {
					child.material.opacity = child.userData.svgOpacity * opacity;
					child.material.transparent = player.get3dModelType() != 2 || (child.material.opacity < 1.0);
				}
			});
		}
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_icon.userData.svgGroupNormal) me._ht_node_icon.userData.setOpacityInState(me._ht_node_icon.userData.svgGroupNormal, v);
			if (me._ht_node_icon.userData.svgGroupOver) me._ht_node_icon.userData.setOpacityInState(me._ht_node_icon.userData.svgGroupOver, v);
			if (me._ht_node_icon.userData.svgGroupActive) me._ht_node_icon.userData.setOpacityInState(me._ht_node_icon.userData.svgGroupActive, v);
			me._ht_node_icon.visible = (v>0 && me._ht_node_icon.userData.visible);
		}
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 25;
		el.userData.height = 25;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_node_icon.visible
			let parentEl = me._ht_node_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_icon.userData.opacity = v;
			v = v * me._ht_node_icon.userData.parentOpacity;
			if (me._ht_node_icon.userData.setOpacityInternal) me._ht_node_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon.children.length; i++) {
				let child = me._ht_node_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_icon.userData.parentOpacity = v;
			v = v * me._ht_node_icon.userData.opacity
			if (me._ht_node_icon.userData.setOpacityInternal) me._ht_node_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon.children.length; i++) {
				let child = me._ht_node_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_icon = el;
		clickTargetGeometry = new THREE.PlaneGeometry(25 / 100.0, 25 / 100.0, 5, 5 );
		clickTargetGeometry.name = 'ht_node_icon_clickTargetGeometry';
		clickTargetMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, transparent: true } );
		clickTargetMaterial.name = 'ht_node_icon_clickTargetMaterial';
		me._ht_node_icon.userData.clickTarget = new THREE.Mesh( clickTargetGeometry, clickTargetMaterial );
		me._ht_node_icon.userData.clickTarget.name = 'ht_node_icon_clickTarget';
		me._ht_node_icon.userData.clickTarget.userData.clickInvisible = true;
		me._ht_node_icon.userData.clickTarget.visible = false;
		me._ht_node_icon.add(me._ht_node_icon.userData.clickTarget);
		(async() => {
			let group = await player.loadSvg3D(basePath + 'images/ht_node_icon.svg', me._ht_node_icon.userData.width / 100.0, me._ht_node_icon.userData.height / 100.0);
			me._ht_node_icon.add(group);
			me._ht_node_icon.userData.svgGroupNormal = group;
			me._ht_node_icon.userData.setOpacityInState(group, me._ht_node_icon.userData.opacity);
			player.repaint(3);
		})();
		el.userData.createGeometry = function() {};
		el.userData.ggId="ht_node_icon";
		me._ht_node_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon.ggElementNodeId()) == true)) || 
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_icon.ggCurrentLogicStateVisible == 0) {
			me._ht_node_icon.visible=false;
			player.repaint();
			me._ht_node_icon.userData.visible=false;
				}
				else {
			me._ht_node_icon.visible=((!me._ht_node_icon.material && Number(me._ht_node_icon.userData.opacity>0)) || (me._ht_node_icon.material && Number(me._ht_node_icon.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_icon.userData.visible=true;
				}
			}
		}
		me._ht_node_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_icon']=true;
		}
		me._ht_node_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_icon']=false;
		}
		me._ht_node_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_icon);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.28);
		el.scale.set(0.33, 0.33, 1.0);
		el.userData.width = 300;
		el.userData.height = 45;
		el.userData.scale = {x: 0.33, y: 0.33, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_title';
		el.userData.x = 0;
		el.userData.y = -0.28;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_node_title.visible
			let parentEl = me._ht_node_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_title.userData.opacity = v;
			v = v * me._ht_node_title.userData.parentOpacity;
			if (me._ht_node_title.userData.setOpacityInternal) me._ht_node_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_title.children.length; i++) {
				let child = me._ht_node_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_title.userData.parentOpacity = v;
			v = v * me._ht_node_title.userData.opacity
			if (me._ht_node_title.userData.setOpacityInternal) me._ht_node_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_title.children.length; i++) {
				let child = me._ht_node_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_title);
			if (skin.rectHasRoundedCorners(me._ht_node_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_node_title.userData.backgroundColorAlpha = 1;
		me._ht_node_title.userData.borderColorAlpha = 1;
		me._ht_node_title.userData.setOpacityInternal = function(v) {
			me._ht_node_title.material.opacity = v;
			if (me._ht_node_title.userData.hasScrollbar) {
				me._ht_node_title.userData.scrollbar.material.opacity = v;
				me._ht_node_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_node_title.userData.ggSubElement) {
				me._ht_node_title.userData.ggSubElement.material.opacity = v
				me._ht_node_title.userData.ggSubElement.visible = (v>0 && me._ht_node_title.userData.visible);
			}
			me._ht_node_title.visible = (v>0 && me._ht_node_title.userData.visible);
		}
		me._ht_node_title.userData.setBackgroundColor = function(v) {
			me._ht_node_title.material.color = v;
		}
		me._ht_node_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_title.userData.backgroundColorAlpha = v;
			me._ht_node_title.userData.setOpacity(me._ht_node_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['hepta_slab', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 600;
		canvas.height = 90;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_node_title;
			var canv = me._ht_node_title.userData.textCanvas;
			var ctx = me._ht_node_title.userData.textCanvasContext;
			var tmpCanv = me._ht_node_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_node_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_node_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_node_title.userData.boxWidthCanv / 100.0;
		height = me._ht_node_title.userData.boxHeightCanv / 100.0;
		me._ht_node_title.userData.width = me._ht_node_title.userData.boxWidthCanv;
		me._ht_node_title.userData.height = me._ht_node_title.userData.boxHeightCanv;
		me._ht_node_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_node_title, 0, 28);
		me._ht_node_title.position.x = newPos.x;
		me._ht_node_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_node_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_node_title.material.map) {
				me._ht_node_title.material.map.dispose();
			}
			me._ht_node_title.material.map = textTexture;
			me._ht_node_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_node_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_node_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 21px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_node_title.userData.textColor + ' !important;', false, true, false);
			me._ht_node_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_node_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_node_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_node_title";
		me._ht_node_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					var newPos = skin.getElementVrPosition(me._ht_node_title, 0, -28);
					me._ht_node_title.position.x = newPos.x;
					me._ht_node_title.position.y = newPos.y;
				}
				else {
					var elPos = skin.getElementVrPosition(me._ht_node_title, 0, 28);
					me._ht_node_title.position.x = elPos.x;
					me._ht_node_title.position.y = elPos.y;
				}
			}
		}
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_title.userData.transitions.length; i++) {
						if (me._ht_node_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_title.userData.transitions[i].interval);
							me._ht_node_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_title.material ? me._ht_node_title.material.opacity : me._ht_node_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_title.userData.transitions.splice(me._ht_node_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_title.userData.transitions.length; i++) {
						if (me._ht_node_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_title.userData.transitions[i].interval);
							me._ht_node_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_title.material ? me._ht_node_title.material.opacity : me._ht_node_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_title.userData.transitions.splice(me._ht_node_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_node_title.userData.ggUpdateText(true);
		}
		me._ht_node_bg.add(me._ht_node_title);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(0.32, 0.32, 1.0);
		el.userData.width = 120;
		el.userData.height = 120;
		el.userData.scale = {x: 0.32, y: 0.32, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 41;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 41;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 41;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 41;
		el.name = 'ht_node_thumb';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.150);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_thumb.material) me._ht_node_thumb.material.opacity = v;
			me._ht_node_thumb.visible = (v>0 && me._ht_node_thumb.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._ht_node_thumb.visible
			let parentEl = me._ht_node_thumb.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_thumb.userData.opacity = v;
			v = v * me._ht_node_thumb.userData.parentOpacity;
			if (me._ht_node_thumb.userData.setOpacityInternal) me._ht_node_thumb.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_thumb.children.length; i++) {
				let child = me._ht_node_thumb.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_thumb.userData.parentOpacity = v;
			v = v * me._ht_node_thumb.userData.opacity
			if (me._ht_node_thumb.userData.setOpacityInternal) me._ht_node_thumb.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_thumb.children.length; i++) {
				let child = me._ht_node_thumb.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_thumb = el;
		loader = new THREE.TextureLoader();
		el.userData.ggNodeId=nodeId;
		texture = loader.load(basePath + 'images/ht_node_thumb_' + nodeId + '.jpg');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_thumb_material';
		el.material = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_thumb;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		let width = me._ht_node_thumb.userData.width / 100.0;
		let height = me._ht_node_thumb.userData.height / 100.0;
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_thumb.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_thumb.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_thumb.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_thumb.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_thumb_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
		el.geometry = geometry;
		}
		el.userData.createGeometry(41, 41, 41, 41);
		el.userData.ggId="ht_node_thumb";
		me._ht_node_thumb.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.userData.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			return this.userData.ggNodeId;
		}
		me._ht_node_thumb.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_thumb.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_thumb.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_thumb.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_thumb.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_thumb.userData.transitions.length; i++) {
						if (me._ht_node_thumb.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_thumb.userData.transitions[i].interval);
							me._ht_node_thumb.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_thumb.material ? me._ht_node_thumb.material.opacity : me._ht_node_thumb.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_thumb.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_thumb.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_thumb.userData.transitions.splice(me._ht_node_thumb.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_thumb.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_thumb.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_thumb.userData.transitions.length; i++) {
						if (me._ht_node_thumb.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_thumb.userData.transitions[i].interval);
							me._ht_node_thumb.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_thumb.material ? me._ht_node_thumb.material.opacity : me._ht_node_thumb.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_thumb.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_thumb.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_thumb.userData.transitions.splice(me._ht_node_thumb.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_thumb.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_thumb.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_thumb']=true;
		}
		me._ht_node_thumb.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_thumb']=false;
		}
		me._ht_node_thumb.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_thumb);
		me._ht_node.add(me._ht_node_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_node_custom_image.visible
			let parentEl = me._ht_node_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_custom_image.userData.opacity = v;
			v = v * me._ht_node_custom_image.userData.parentOpacity;
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_custom_image.userData.parentOpacity = v;
			v = v * me._ht_node_custom_image.userData.opacity
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_custom_image);
		}
		me._ht_node_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_node_custom_image.userData.borderColorAlpha = 1;
		me._ht_node_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_node_custom_image.userData.ggSubElement) {
				me._ht_node_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_node_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_node_custom_image.userData.visible);
			}
			me._ht_node_custom_image.visible = (v>0 && me._ht_node_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 50;
		currentHeight = 50;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_node_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_node_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_node_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_node_custom_image_subElementMaterial';
				me._ht_node_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_node_custom_image.userData.ggUpdatePosition();
				me._ht_node_custom_image.userData.ggText = extUrl;
				me._ht_node_custom_image.userData.setOpacity(me._ht_node_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_node_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_node_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 50;
		el.userData.clientHeight = 50;
		el.userData.ggId="ht_node_custom_image";
		me._ht_node_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_node_custom_image.visible=((!me._ht_node_custom_image.material && Number(me._ht_node_custom_image.userData.opacity>0)) || (me._ht_node_custom_image.material && Number(me._ht_node_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=true;
				}
				else {
			me._ht_node_custom_image.visible=false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_node_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_custom_image']=true;
		}
		me._ht_node_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_custom_image']=false;
		}
		me._ht_node_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.userData.clientWidth;
			var parentHeight = me._ht_node_custom_image.userData.clientHeight;
			var img = me._ht_node_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_node_custom_image_imgGeometry';
			}
		}
		me._ht_node.add(me._ht_node_custom_image);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_zindex();
		me._ht_node_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_icon_visited.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_icon_visited']=false;
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_icon']=false;
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_title.userData.setOpacity(0.00);
			me._ht_node_title.userData.ggUpdateText(true);
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_thumb.userData.setOpacity(0.00);
		me.elementMouseOver['ht_node_thumb']=false;
		me._ht_node_thumb.logicBlock_alpha();
		me._ht_node_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_custom_image']=false;
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_bg.logicBlock_backgroundcolor();
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
					me._ht_node_title.userData.ggUpdateText();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__obj = me._ht_node;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 82px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateZIndex == 0) {
					me._ht_node.style.zIndex = 1;
				}
				else {
					me._ht_node.style.zIndex = 'auto';
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
			me._ht_node.logicBlock_zindex();
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
			me._ht_node.logicBlock_zindex();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #505050;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.ggParameter.sx = 2.5;
					me._ht_node_bg.ggParameter.sy = 2.5;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
				else {
					me._ht_node_bg.ggParameter.sx = 1;
					me._ht_node_bg.ggParameter.sy = 1;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
			}
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg'] == true)) && 
				((player.get3dModelType() != 2))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me.elementMouseOver['ht_node_bg'] == true)) && 
				((player.get3dModelType() == 2))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((player.get3dModelType() != 2))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.style.backgroundColor="rgba(70,70,70,0.470588)";
				}
				else if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 1) {
					me._ht_node_bg.style.backgroundColor="rgba(50,50,50,1)";
				}
				else if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 2) {
					me._ht_node_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
				else {
					me._ht_node_bg.style.backgroundColor="rgba(80,80,80,1)";
				}
			}
		}
		me._ht_node_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_icon_visited.logicBlock_visible();
			me._ht_node_icon.logicBlock_visible();
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_icon_visited.logicBlock_visible();
			me._ht_node_icon.logicBlock_visible();
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_icon_visited=document.createElement('div');
		els=me._ht_node_icon_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0xNy40LD'+
			'YuMSYjeGE7JiN4OTtjMC42LDEuMiwwLjksMi41LDAuOSwzLjljMCw0LjYtMy43LDguMy04LjMsOC4zUzEuNywxNC42LDEuNywxMFM1LjQsMS43LDEwLDEuN2MxLjUsMCwyLjksMC40LDQuMSwxLjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8cGF0aCBkPSJNMTQuOCw4LjYmI3hhOyYjeDk7QzE0LjksOS4xLDE1LDkuNSwxNSwxMGMwLDIuOC0yLjIsNS01LDVzLTUtMi4yLTUtNXMyLjItNSw1LTUiIGZpbGw9Im5vbmUiIHN0cm9r'+
			'ZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiBmaWxsPSJub25lIiByPSIxLjciIHN0cm9rZT0iI2QxNDFiOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIxOC4yLDIuMSAmI3hhOyYjeDk7MTMuNiw2LjcgMTIuMSw1LjIgIiBzdHJva2U9IiNkMTQxYjkiIH'+
			'N0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8L3N2Zz4K';
		me._ht_node_icon_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon_visited.ggElementNodeId()) == true)) && 
				((me.elementMouseOver['ht_node_bg'] == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon_visited.style.transition='';
				if (me._ht_node_icon_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon_visited.style.visibility=(Number(me._ht_node_icon_visited.style.opacity)>0||!me._ht_node_icon_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_icon_visited.ggVisible=true;
				}
				else {
					me._ht_node_icon_visited.style.visibility="hidden";
					me._ht_node_icon_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_icon_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon_visited);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXRhcmdldCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjZDE0MWI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIvPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPgo8L3N2Zz4K';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon.ggElementNodeId()) == true)) || 
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon.style.transition='';
				if (me._ht_node_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon.style.visibility="hidden";
					me._ht_node_icon.ggVisible=false;
				}
				else {
					me._ht_node_icon.style.visibility=(Number(me._ht_node_icon.style.opacity)>0||!me._ht_node_icon.style.opacity)?'inherit':'hidden';
					me._ht_node_icon.ggVisible=true;
				}
			}
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.33,sy:0.33,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 28px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					me._ht_node_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -28px)';
				}
				else {
					me._ht_node_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_title.style.top='calc(50% - ((0px + 0px) / 2) + 28px)';
				}
			}
		}
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 305);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_title);
		el=me._ht_node_thumb=document.createElement('div');
		els=me._ht_node_thumb__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_thumb_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 41px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.32,sy:0.32,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_thumb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_thumb.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_thumb.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_thumb.style.transition='opacity 300ms ease 0ms';
				if (me._ht_node_thumb.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_thumb.style.visibility=me._ht_node_thumb.ggVisible?'inherit':'hidden';
					me._ht_node_thumb.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_thumb.style.opacity == 0.0) { me._ht_node_thumb.style.visibility="hidden"; } }, 305);
					me._ht_node_thumb.style.opacity=0;
				}
			}
		}
		me._ht_node_thumb.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_thumb);
		me._ht_node.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_zindex();
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_thumb.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_bg.logicBlock_backgroundcolor();
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				hotspotTemplates['SkinHotspotClass_ht_node'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node'].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	me.addSkinHotspot3d=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_node__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node__3d'].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._map_timer.ggUpdateConditionTimer();
		if (me._map_timer.ggLastIsActive!=me._map_timer.ggIsActive()) {
			me._map_timer.ggLastIsActive=me._map_timer.ggIsActive();
			if (me._map_timer.ggLastIsActive) {
			} else {
				if (me._map.ggFitBounds) me._map.ggFitBounds(true);
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family:"Hepta Slab", serif; font-size: 14px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-bottom: 0.2em } .ggmarkdown { white-space: normal; } .hepta_slab { font-family: "Hepta Slab", serif; } .karla { font-family: "Karla", sans-serif; line-height: 1.3 } .glow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.7)); } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 500; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-500.woff2") format("woff2"); } @font-face { font-family: "Karla"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/karla-latin-300.woff2") format("woff2"); } @font-face { font-family: "Karla"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/karla-latin-700.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		if (me.fontsLoaded < 3) {
			me.updateSize(me.divSkin);
			me.fontsLoaded++;
		}
	}
};