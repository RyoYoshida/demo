webpackJsonp([1],{"6Bnm":function(e,t){},B1eT:function(e,t){},HXES:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),s=n("mvHQ"),i=n.n(s),r=n("woOf"),a=n.n(r),d=n("Gu7T"),c=n.n(d),l=n("d7EF"),u=n.n(l),h={name:"IdeaEdge",props:{start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}},id:Number},data:function(){return{show:{delete:!1}}},computed:{pathStyle:function(){return{stroke:"rgb(0, 0, 0)",strokeWidth:2.73205,fill:"none"}},arrowStyle:function(){return{stroke:"rgb(0, 0, 0)",strokeWidth:10,fill:"none"}},arrowTransform:function(){var e=this.caculateCenterPoint(),t=u()(e,2);return"translate("+t[0]+", "+t[1]+") rotate("+this.caculateRotation()+")"},dAttr:function(){var e=this.start[0],t=this.start[1],n=this.end[0],o=this.end[1];return"M "+e+", "+t+" C "+e+", "+t+", "+n+", "+o+", "+n+", "+o}},methods:{edgeMouseOver:function(){this.id&&(this.show.delete=!0)},edgeMouseLeave:function(){this.show.delete=!1},caculateCenterPoint:function(){var e=(this.end[0]-this.start[0])/2,t=(this.end[1]-this.start[1])/2;return[this.start[0]+e,this.start[1]+t]},caculateRotation:function(){var e=180*-Math.atan2(this.end[0]-this.start[0],this.end[1]-this.start[1])/Math.PI;return e<0?e+360:e},deleteEdge:function(){this.$emit("deleteEdge")}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{on:{mouseover:e.edgeMouseOver,mouseleave:e.edgeMouseLeave}},[n("path",{style:e.pathStyle,attrs:{d:e.dAttr}}),e._v(" "),e.show.delete?n("a",{on:{click:e.deleteEdge}},[n("text",{attrs:{"text-anchor":"middle",transform:e.arrowTransform,"font-size":"40"}},[e._v("×")])]):n("path",{style:e.arrowStyle,attrs:{d:"M -2 -1 L 0 5 L 2 -1 z",transform:e.arrowTransform}})])},staticRenderFns:[]};var g=n("VU/8")(h,f,!1,function(e){n("bZZd")},"data-v-6b40e4aa",null).exports,p={name:"IdeaEdgeNode",props:{id:{type:Number,default:1e3,validator:function(e){return"number"==typeof e}},x:{type:Number,default:0,validator:function(e){return"number"==typeof e}},y:{type:Number,default:0,validator:function(e){return"number"==typeof e}},type:{type:String,default:"Default"},label:{type:String,default:"input name"},options:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140}}}},data:function(){return{edit:!1}},directives:{focus:{inserted:function(e){e.focus()}}},computed:{nodePosition:function(){return{top:this.options.centerY+this.y*this.options.scale+"px",left:this.options.centerX+this.x*this.options.scale+"px",transform:"scale("+this.options.scale+")"}},changeText:{get:function(){return this.label},set:function(e){this.$emit("update:label",e)}}},methods:{nodeClick:function(e){if(!0!==this.edit){var t=e.target||e.srcElement;t.className.indexOf("node-port port-index-1")<0&&t.className.indexOf("node-port port-index-2")<0&&t.className.indexOf("node-port port-index-3")<0&&t.className.indexOf("node-port port-index-4")<0&&this.$emit("nodeSelected",e),e.preventDefault()}},nodeMouseOver:function(e){console.log("ノードにマウス乗った");for(var t=e.currentTarget.children,n=0;n<t.length;n++)t[n].style.visibility="visible";e.preventDefault()},portMouseDown:function(e){console.log("ポートをクリックした",e.target.getAttribute("portId"));this.$emit("edgingStart",{portId:e.target.getAttribute("portId"),x:e.screenX,y:e.screenX});e.preventDefault()},portMouseUp:function(e){console.log("ポートでマウス離した",e.target.getAttribute("portId")),!0===e.shiftKey?this.$emit("reverseEdgingStop",e.target.getAttribute("portId")):this.$emit("edgingStop",e.target.getAttribute("portId"));for(var t=e.currentTarget.children,n=0;n<t.length;n++)t[n].style.visibility="hidden";e.preventDefault()},editText:function(e){this.edit=!0}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"idea-edge-node",class:{selected:e.options.selected===e.id},style:e.nodePosition,on:{mousedown:e.nodeClick,mouseover:e.nodeMouseOver}},[n("div",{staticClass:"node-port port-index-1",attrs:{portId:"1"},on:{mousedown:e.portMouseDown,mouseup:e.portMouseUp}}),e._v(" "),n("div",{staticClass:"node-port port-index-2",attrs:{portId:"2"},on:{mousedown:e.portMouseDown,mouseup:e.portMouseUp}}),e._v(" "),n("div",{staticClass:"node-port port-index-3",attrs:{portId:"3"},on:{mousedown:e.portMouseDown,mouseup:e.portMouseUp}}),e._v(" "),n("div",{staticClass:"node-port port-index-4",attrs:{portId:"4"},on:{mousedown:e.portMouseDown,mouseup:e.portMouseUp}}),e._v(" "),e.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:e.changeText,expression:"changeText"},{name:"focus",rawName:"v-focus"},{name:"shortkey",rawName:"v-shortkey.avoid",modifiers:{avoid:!0}}],attrs:{type:"text"},domProps:{value:e.changeText},on:{blur:function(t){e.edit=!1},input:function(t){t.target.composing||(e.changeText=t.target.value)}}}):n("div",{staticClass:"node-label",domProps:{textContent:e._s(e.label)}})])},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(e){n("HXES")},"data-v-14a4a9fa",null).exports,y={name:"IdeaEdgeLayer",props:{start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}},id:Number},data:function(){return{show:{delete:!1}}},computed:{pathStyle:function(){return{stroke:"rgb(0, 0, 0)",strokeWidth:3,fill:"none"}},crossMarkPosition:function(){var e=this.markPosition(),t=u()(e,2);return[t[0],t[1]]},dAttr:function(){var e=this.start[0],t=this.start[1],n=this.end[0],o=this.end[1];return"M "+e+", "+t+" C "+e+", "+t+", "+n+", "+o+", "+n+", "+o}},methods:{layerMouseOver:function(){this.id&&(this.show.delete=!0)},markPosition:function(){return this.start[0]<10?[this.start[0]+10,this.start[1]+13]:this.start[1]<10?[this.start[0],this.start[1]+22]:void 0},layerMouseLeave:function(){this.show.delete=!1},deleteLayer:function(){this.$emit("deleteLayer"),console.log("レイヤーを削除するよ")}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{on:{mouseover:e.layerMouseOver,mouseleave:e.layerMouseLeave}},[n("path",{style:e.pathStyle,attrs:{d:e.dAttr}}),e._v(" "),e.show.delete?n("a",{on:{click:e.deleteLayer}},[n("text",{attrs:{"text-anchor":"middle","font-size":"40",x:e.crossMarkPosition[0],y:e.crossMarkPosition[1]}},[e._v("×")])]):e._e()])},staticRenderFns:[]};var x=n("VU/8")(y,b,!1,function(e){n("Olp4")},"data-v-794bf5f6",null).exports,k={name:"IdeaEdge",props:{id:Number,start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}}},computed:{rectStyle:function(){return{stroke:"rgb(0, 0, 0)",strokeWidth:1,fill:"rgb("+(230+Math.round(25*Math.random()))+", "+(230+Math.round(25*Math.random()))+", "+(230+Math.round(25*Math.random()))+")"}}},methods:{}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("g",[t("rect",{style:this.rectStyle,attrs:{x:this.start[0],y:this.start[1],width:this.end[0],height:this.end[1]}})])},staticRenderFns:[]};function E(e,t){var n=t.pageX||t.clientX+document.documentElement.scrollLeft,o=t.pageY||t.clientY+document.documentElement.scrollTop,s=function(e){var t=e.getBoundingClientRect(),n=window.pageYOffset,o=window.pageXOffset,s=t.top+n,i=t.left+o;return{top:Math.round(s),left:Math.round(i)}}(e);return[n-s.left,o-s.top]}var P={components:{IdeaEdge:g,IdeaEdgeNode:v,IdeaEdgeLayer:x,IdeaEdgeLayerBlock:n("VU/8")(k,D,!1,function(e){n("B1eT")},"data-v-30453ad5",null).exports},name:"IdeaEdgeField",props:{scene:{type:Object,default:function(){return{centerX:512,scale:1,centerY:374,nodes:[],edges:[],layers:[],blocks:[]}}},height:{type:Number,default:480},width:{type:Number,dafault:640},newNodeType:{type:String,default:"0"},newNodeLabel:{type:String,default:""},nodeCategory:{type:Object,default:function(){return{}}},cachedSaveDatas:{type:Object,default:function(){return{}}}},data:function(){return{action:{edging:!1,dragging:!1,scrolling:!1,dragginglayer:!1,selected:0,copied:0},mouse:{x:0,y:0,lastX:0,lastY:0},draggingEdge:null,rootNodeOffset:{top:0,left:0},globalVar:"copyNode",undoSaveDatas:[],redoSaveDatas:[]}},mounted:function(){this.$nextTick(function(){this.addNode(-300,-300),console.log("ノード1が作成されました",this.scene.nodes[0].id),this.addNode(100,100),console.log("ノード2が作成されました",this.scene.nodes[1].id),this.addEdge(1,"4",2,"1")}),this.rootNodeOffset.top=this.$el?this.$el.offsetTop:0,this.rootNodeOffset.left=this.$el?this.$el.offsetLeft:0,console.log("mounted",this.rootNodeOffset.top,this.rootNodeOffset.left)},computed:{nodeOptions:function(){return{centerY:this.scene.centerY,centerX:this.scene.centerX,scale:this.scene.scale,offsetTop:this.rootNodeOffset.top,offsetLeft:this.rootNodeOffset.left,selected:this.action.selected}},lines:function(){var e=this,t=this.scene.edges.map(function(t){var n=e.findNodeID(t.from),o=e.findNodeID(t.to),s=void 0,i=void 0,r=void 0,a=void 0,d=void 0,c=void 0;if(s=e.scene.centerX+n.x,i=e.scene.centerY+n.y,"1"===t.fromPort){var l=e.getPortPosition("top",s,i),h=u()(l,2);a=h[0],r=h[1]}else if("2"===t.fromPort){var f=e.getPortPosition("left",s,i),g=u()(f,2);a=g[0],r=g[1]}else if("3"===t.fromPort){var p=e.getPortPosition("right",s,i),m=u()(p,2);a=m[0],r=m[1]}else if("4"===t.fromPort){var v=e.getPortPosition("bottom",s,i),y=u()(v,2);a=y[0],r=y[1]}if(s=e.scene.centerX+o.x,i=e.scene.centerY+o.y,"1"===t.toPort){var b=e.getPortPosition("top",s,i),x=u()(b,2);d=x[0],c=x[1]}else if("2"===t.toPort){var k=e.getPortPosition("left",s,i),D=u()(k,2);d=D[0],c=D[1]}else if("3"===t.toPort){var E=e.getPortPosition("right",s,i),P=u()(E,2);d=P[0],c=P[1]}else if("4"===t.toPort){var S=e.getPortPosition("bottom",s,i),N=u()(S,2);d=N[0],c=N[1]}return{start:[a,r],end:[d,c],id:t.id}});if(this.draggingEdge){var n,o,s=void 0,i=void 0,r=this.findNodeID(this.draggingEdge.from);if(n=this.scene.centerX+r.x,o=this.scene.centerY+r.y,"1"===this.draggingEdge.fromPort){var a=this.getPortPosition("top",n,o),d=u()(a,2);i=d[0],s=d[1]}else if("2"===this.draggingEdge.fromPort){var c=this.getPortPosition("left",n,o),l=u()(c,2);i=l[0],s=l[1]}else if("3"===this.draggingEdge.fromPort){var h=this.getPortPosition("right",n,o),f=u()(h,2);i=f[0],s=f[1]}else if("4"===this.draggingEdge.fromPort){var g=this.getPortPosition("bottom",n,o),p=u()(g,2);i=p[0],s=p[1]}t.push({start:[i,s],end:[this.draggingEdge.mx,this.draggingEdge.my]})}return t},layerLines:function(){var e=this.scene.layers.map(function(e){var t,n;return t=e.x,n=e.y,0===e.x?{start:[t,n],end:[t+1024,n],id:e.id}:0===e.y?{start:[t,n],end:[t,n+768],id:e.id}:void 0});return e},blocks:function(){var e=this.scene.blocks.map(function(e){return{start:[e.x,e.y],end:[e.w,e.h],id:e.id}});return e}},methods:{findNodeID:function(e){return this.scene.nodes.find(function(t){return e===t.id})},getPortPosition:function(e,t,n){return"top"===e?[t+90,n]:"left"===e?[t,n+11]:"right"===e?[t+180,n+11]:"bottom"===e?[t+90,n+22]:void 0},mouseDown:function(e){var t=e.target||e.srcElement;if((t===this.$el||t.matches("svg, svg *"))&&1===e.which){this.action.scrolling=!0;var n=E(this.$el,e),o=u()(n,2);this.mouse.lastX=o[0],this.mouse.lastY=o[1],this.action.selected=null}if(this.$emit("fieldClick",e),"node-port"!==e.target.classList[0]){for(var s=document.getElementsByClassName("node-port"),i=0;i<s.length;i++)s[i].style.visibility="hidden";(e.offsetX<5&&"node-label"!==e.target.className&&"input"!==e.target.localName||e.offsetY<5&&"node-label"!==e.target.className&&"input"!==e.target.localName)&&this.layerStart({startX:e.offsetX,startY:e.offsetY})}},mouseMove:function(e){if(this.action.edging){var t=E(this.$el,e),n=u()(t,2);this.mouse.x=n[0],this.mouse.y=n[1];var o=[this.mouse.x,this.mouse.y];this.draggingEdge.mx=o[0],this.draggingEdge.my=o[1]}if(this.action.dragging){this.mouse.x=e.pageX||e.clientX+document.documentElement.scrollLeft,this.mouse.y=e.pageY||e.clientY+document.documentElement.scrollTop;var s=this.mouse.x-this.mouse.lastX,i=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.moveSelectedNode(s,i)}if(this.action.scrolling){var r=E(this.$el,e),a=u()(r,2);this.mouse.x=a[0],this.mouse.y=a[1];var d=this.mouse.x-this.mouse.lastX,c=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.scene.centerX+=d,this.scene.centerY+=c}},mouseUp:function(e){var t=e.target||e.srcElement;this.$el.contains(t)&&("string"!=typeof t.className||t.className.indexOf("node-port")<0)&&(this.draggingEdge=null),this.action.edging=!1,this.action.dragging=null,this.action.scrolling=!1},onShortKeyPressed:function(e){var t=this;switch(e.srcKey){case"nodeDelete":this.onDeleteKeyPressed();break;case"nodeCopy":if(!(this.action.selected>0))return;this.action.copied=this.action.selected,this.copyNode=this.scene.nodes.find(function(e){return e.id===t.action.copied}),console.log("コピーする","label:",this.copyNode.label),console.log("コピーする","id:",this.copyNode.id),console.log("コピーする","x:",this.copyNode.x),console.log("コピーする","y",this.copyNode.y);break;case"nodePaste":if(void 0===this.copyNode)return;this.addCopyNode(this.copyNode);break;case"nodeEdit":if(console.log("編集するよ","selected:",this.action.selected),this.action.selected>0){var n=this.$refs.Child.find(function(e){return e.id===t.action.selected});console.log("selectedNodeData:",n),n.edit=!0}break;case"undo":this.redoSaveDatas.push(this.createSaveData());var o=this.undoSaveDatas.pop();if(console.log("undoJsonData:",o),void 0===o)return;var s=JSON.parse(o);console.log("undoData:",s),this.linkingData(s);break;case"redo":console.log("redoSaveDatas:",this.redoSaveDatas),this.undoSaveDatas.push(this.createSaveData());var i=this.redoSaveDatas.pop();if(console.log("redoJsonData:",i),void 0===i)return;var r=JSON.parse(i);console.log("redoData:",r),this.linkingData(r)}},linkingData:function(e){this.scene.nodes=e.nodes,this.scene.edges=e.edges,this.scene.layers=e.layers,this.scene.blocks=e.blocks},createSaveData:function(){return i()({nodes:this.scene.nodes,edges:this.scene.edges,layers:this.scene.layers,blocks:this.scene.blocks})},onDeleteKeyPressed:function(e){this.deleteNode(this.action.selected)},deleteNode:function(e){this.scene.nodes=this.scene.nodes.filter(function(t){return t.id!==e}),this.scene.edges=this.scene.edges.filter(function(t){return t.from!==e&&t.to!==e}),this.$emit("nodeDelete",e)},edgingStart:function(e,t){this.action.edging=!0;var n=t.portId,o=void 0,s=void 0;"1"===n?(o=e.x+this.scene.centerX+90,s=e.y+this.scene.centerY):"2"===n?(o=e.x+this.scene.centerX,s=e.y+this.scene.centerY+11):"3"===n?(o=e.x+this.scene.centerX+180,s=e.y+this.scene.centerY+11):"4"===n&&(o=e.x+this.scene.centerX+90,s=e.y+this.scene.centerY+22),this.draggingEdge={from:e.id,fromPort:n,mx:o,my:s}},edgingStop:function(e,t){var n=this;if((this.undoSaveDatas.push(this.createSaveData()),this.draggingEdge&&this.draggingEdge.from!==e)&&!this.scene.edges.find(function(t){return t.from===n.draggingEdge.from&&t.to===e})){var o={id:Math.max.apply(Math,[0].concat(c()(this.scene.edges.map(function(e){return e.id}))))+1,from:this.draggingEdge.from,fromPort:this.draggingEdge.fromPort,to:e,toPort:t};console.log("id:"+o.id,"from:"+o.from,"fromPort:"+o.fromPort,"to:"+o.to,"toPort:"+o.toPort),this.scene.edges.push(o),this.$emit("edgeAdded",o)}this.draggingEdge=null},reverseEdgingStop:function(e,t){var n=this;if((this.undoSaveDatas.push(this.createSaveData()),this.draggingEdge&&this.draggingEdge.from!==e)&&!this.scene.edges.find(function(t){return t.from===n.draggingEdge.from&&t.to===e})){var o={id:Math.max.apply(Math,[0].concat(c()(this.scene.edges.map(function(e){return e.id}))))+1,from:e,fromPort:t,to:this.draggingEdge.from,toPort:this.draggingEdge.fromPort};console.log("id:"+o.id,"from:"+o.from,"fromPort:"+o.fromPort,"to:"+o.to,"toPort:"+o.toPort),this.scene.edges.push(o),this.$emit("edgeAdded",o)}this.draggingEdge=null},edgeDelete:function(e){this.scene.edges.find(function(t){return t.id===e})&&(this.scene.edges=this.scene.edges.filter(function(t){return t.id!==e}),this.$emit("edgeDelete",e))},layerDelete:function(e){this.scene.layers.find(function(t){return t.id===e})&&(this.scene.layers=this.scene.layers.filter(function(t){return t.id!==e}),this.refreshBlocks())},moveSelectedNode:function(e,t){var n=this,o=this.scene.nodes.findIndex(function(e){return e.id===n.action.dragging}),s=this.scene.nodes[o].x+e/this.scene.scale,i=this.scene.nodes[o].y+t/this.scene.scale;this.$set(this.scene.nodes,o,a()(this.scene.nodes[o],{x:s,y:i}))},nodeSelected:function(e,t){for(var n=this.$children.map(function(e){return e}),o=0;o<n.length;o++)!0===n[o].edit&&(n[o].edit=!1);this.action.dragging=e,this.action.selected=e,this.$emit("nodeClick",e),this.mouse.lastX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouse.lastY=t.pageY||t.clientY+document.documentElement.scrollTop},onDblClick:function(e){var t=this;if(console.log("ダブルクリックしたよ",e.offsetX,e.offsetY),this.action.selected>0){var n=this.$refs.Child.find(function(e){return e.id===t.action.selected});console.log("selectedNodeData:",n),n.edit=!0}else{var o=e.offsetX-this.scene.centerX,s=e.offsetY-this.scene.centerY;this.addNode(o,s)}},addNode:function(e,t){this.undoSaveDatas.push(this.createSaveData());var n={id:Math.max.apply(Math,[0].concat(c()(this.scene.nodes.map(function(e){return e.id}))))+1,x:e,y:t,type:"parent",label:this.newNodeLabel?this.newNodeLabel:"New Note"};this.scene.nodes.push(n)},addCopyNode:function(e){this.undoSaveDatas.push(this.createSaveData()),console.log("コピーノード追加");var t={id:Math.max.apply(Math,[0].concat(c()(this.scene.nodes.map(function(e){return e.id}))))+1,x:e.x+30,y:e.y+30,type:e.type,label:e.label};this.scene.nodes.push(t)},addEdge:function(e,t,n,o){this.undoSaveDatas.push(this.createSaveData());var s={id:Math.max.apply(Math,[0].concat(c()(this.scene.edges.map(function(e){return e.id}))))+1,from:e,fromPort:t,to:n,toPort:o};this.scene.edges.push(s)},layerStart:function(e){this.undoSaveDatas.push(this.createSaveData()),this.action.draggingLayer=!0;var t=Math.max.apply(Math,[0].concat(c()(this.scene.layers.map(function(e){return e.id})))),n=e.startX;n<10&&(n=0);var o=e.startY;o<10&&(o=0);var s={id:t+1,x:n,y:o};console.log("newLayer:",s),this.scene.layers.push(s),this.refreshBlocks()},addBlock:function(e,t,n,o){this.undoSaveDatas.push(this.createSaveDatas());var s={id:Math.max.apply(Math,[0].concat(c()(this.scene.blocks.map(function(e){return e.id}))))+1,x:e,y:t,w:n,h:o};console.log("newBlock:",s),this.scene.blocks.push(s)},refreshBlocks:function(){this.undoSaveDatas.push(this.createSaveDatas()),this.scene.blocks=[];var e=this.scene.layers.filter(function(e){return 0==e.y}).map(function(e){return e.x});e.unshift(0),e.push(1024);var t=this.scene.layers.filter(function(e){return 0==e.x}).map(function(e){return e.y});t.unshift(0),t.push(768);for(var n=0;n<e.length-1;n++)for(var o=0;o<t.length-1;o++){var s=e[n],i=t[parseInt(o+1/e.length)],r=e[n+1]-s,a=t[parseInt(o+1/e.length)+1]-i;console.log(s,i,r,a),this.addBlock(s,i,r,a)}}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{nodeDelete:["del"],nodeCopy:["ctrl","c"],nodePaste:["ctrl","v"],nodeEdit:["f2"],undo:["ctrl","z"],redo:["ctrl","y"]},expression:"{\n    nodeDelete: ['del'],\n    nodeCopy: ['ctrl', 'c'],\n    nodePaste: ['ctrl', 'v'],\n    nodeEdit: ['f2'],\n    undo: ['ctrl', 'z'],\n    redo: ['ctrl', 'y']\n  }"}],staticClass:"field-container",on:{mousedown:e.mouseDown,mousemove:e.mouseMove,mouseup:e.mouseUp,shortkey:function(t){return e.onShortKeyPressed(t)},dblclick:function(t){return e.onDblClick(t)}}},[n("svg",{attrs:{width:e.width+"px",height:e.height+"px"}},[e._l(e.blocks,function(t,o){return n("IdeaEdgeLayerBlock",e._b({key:"block"+o},"IdeaEdgeLayerBlock",t,!1,!0))}),e._v(" "),e._l(e.layerLines,function(t,o){return n("IdeaEdgeLayer",e._b({key:"layer"+o,on:{deleteLayer:function(n){return e.layerDelete(t.id)}}},"IdeaEdgeLayer",t,!1,!0))}),e._v(" "),e._l(e.lines,function(t,o){return n("IdeaEdge",e._b({key:"edge"+o,on:{deleteEdge:function(n){return e.edgeDelete(t.id)}}},"IdeaEdge",t,!1,!0))})],2),e._v(" "),e._l(e.scene.nodes,function(t,o){return n("IdeaEdgeNode",e._b({key:"node"+o,ref:"Child",refInFor:!0,attrs:{options:e.nodeOptions},on:{edgingStart:function(n){return e.edgingStart(t,n)},edgingStop:function(n){return e.edgingStop(t.id,n)},reverseEdgingStop:function(n){return e.reverseEdgingStop(t.id,n)},nodeSelected:function(n){return e.nodeSelected(t.id,n)}}},"IdeaEdgeNode",t,!1,!0))})],2)},staticRenderFns:[]};var N={name:"app",components:{IdeaEdgeField:n("VU/8")(P,S,!1,function(e){n("Ok8K")},"data-v-1a9ff668",null).exports},data:function(){return{scene:{centerX:512,centerY:374,scale:1,nodes:[],edges:[],layers:[],blocks:[]},newNodeType:0,newNodeLabel:"",nodeCategory:["parent","child"]}},methods:{fieldClick:function(e){console.log("フィールドをクリックしたよ"),console.log("field Click, event:",e)},nodeClick:function(e){console.log("node click",e)},nodeDelete:function(e){console.log("ノードを削除したよ"),console.log("node delete",e)},edgeDelete:function(e){console.log("エッジを削除したよ"),console.log("edge delete",e)},edgeAdded:function(e){console.log("エッジを加えたよ"),console.log("new edge added:",e)},save:function(){var e=this.createSaveData();console.log(e),this.$cookies.set("saveData",e)},reload:function(){console.log("読込するよ");var e=this.$cookies.get("saveData");console.log(e),this.applySaveData(e)},createSaveData:function(){return i()({nodes:this.scene.nodes,edges:this.scene.edges,layers:this.scene.layers,blocks:this.scene.blocks})},applySaveData:function(e){this.scene.nodes=e.nodes,this.scene.edges=e.edges,this.scene.layers=e.layers,this.scene.blocks=e.blocks},unimplementedAlert:function(){alert("未実装です")}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("div",{staticClass:"title-area"},[n("a",{attrs:{href:"/","th:href":"@{/}"}},[e._v("Idea Edge")])]),e._v(" "),n("div",{staticClass:"idea-edge-wrapper"},[n("div",{staticClass:"button-area"},[n("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.save()}}},[e._v("SAVE")]),e._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.reload()}}},[e._v("LOAD")])],1)]),e._v(" "),n("IdeaEdgeField",{attrs:{scene:e.scene,height:768,width:1024},on:{"update:scene":function(t){e.scene=t},nodeClick:e.nodeClick,nodeDelete:e.nodeDelete,edgeDelete:e.edgeDelete,edgeAdded:e.edgeAdded,fieldClick:e.fieldClick,createSaveData:e.createSaveData}})],1)],1)},staticRenderFns:[]};var M=n("VU/8")(N,w,!1,function(e){n("6Bnm")},null,null).exports,I=n("3EgV"),_=n.n(I),C=n("ppUw"),X=n.n(C);o.default.config.productionTip=!1,o.default.use(_.a);t.default=new _.a({});o.default.use(n("m0IH")),o.default.use(X.a),new o.default({el:"#app",vuetify:new _.a(O),render:function(e){return e(M)}});var O={theme:{dark:!0,themes:{light:{primary:"..."},dark:{primary:"..."}}}}},Ok8K:function(e,t){},Olp4:function(e,t){},bZZd:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3d972008cff113eab531.js.map