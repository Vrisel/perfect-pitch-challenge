(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6,8,9,10],{290:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("e94c6cc6",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("1d880873",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);n(96),n(50);var r=n(306),o={props:{frequency:{type:Number,required:!0},buttonText:{type:String,default:"다시 듣기"},playOnRender:{type:Boolean,default:!0},step:{type:Number,default:0}},data:function(){return{disabled:!1,synth:void 0}},watch:{step:function(){this.playOnRender&&this.generateSound()}},mounted:function(){var t=this;this.$nextTick((function(){t.synth=new r.a({volume:-3}).toDestination(),t.playOnRender&&t.generateSound()}))},destroyed:function(){this.synth.dispose()},methods:{generateSound:function(){var t=this;this.disabled=!0,setTimeout((function(){t.disabled=!1}),3e3),this.synth.triggerAttackRelease(this.frequency,2)}}},c=n(72),l=n(97),d=n.n(l),h=n(360),v=n(341),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{type:"button",disabled:t.disabled},on:{click:t.generateSound}},[t._t("default",(function(){return[t._v("\n    "+t._s(t.buttonText)+"\n    "),n("v-icon",[t._v("mdi-volume-high")])]}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VIcon:v.a})},295:function(t,e,n){"use strict";n(290)},296:function(t,e,n){var r=n(43)(!1);r.push([t.i,".key[data-v-a230ce36]{text-transform:none;min-width:0!important;align-items:flex-end;font-size:inherit}.key.white-key[data-v-a230ce36]{width:3.9167em;height:calc(var(--height)*1);color:#000;background-color:#fff}.key.black-key[data-v-a230ce36]{width:2em;height:calc(var(--height)*0.65517);color:#fff;background-color:#000;position:absolute;z-index:1;transform:translateX(-50%)}.black-key.v-btn--disabled[data-v-a230ce36]:disabled{background-color:#a0a0a0!important}.black-key[data-v-a230ce36]:hover{opacity:1;background-color:#555!important}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e);n(96),n(46),n(6),n(62),n(63),n(22);var r={props:{includeAccidentals:{type:Boolean,default:!1},disabled:{type:Array,default:function(){return[]}},octave:{type:[Number,String],default:""},answerFunction:{type:Function,required:!0}},computed:{noteCandidates:function(){var t=this;return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((function(e){return e+t.octave}))},isDisabled:function(){var t=this;return this.noteCandidates.reduce((function(e,n){return e[n]=!t.includeAccidentals&&n.includes("#")||t.disabled.includes(n),e}),{})}},methods:{colorClasses:function(t){var e=t.includes("#"),n=[e?"black-key":"white-key"],r=/[-]?\d+$/.exec(t);return r?(r[0]<4?(n.push("blue--text"),e&&n.push("text--lighten-2")):r[0]>4&&(n.push("red--text"),e&&n.push("text--lighten-2")),n):n}}},o=(n(295),n(72)),c=n(97),l=n.n(c),d=n(360),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.noteCandidates,(function(e){return n("v-btn",{key:e,staticClass:"key",class:t.colorClasses(e),attrs:{disabled:t.isDisabled[e]},on:{click:function(n){return t.answerFunction(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),1)}),[],!1,null,"a230ce36",null);e.default=component.exports;l()(component,{VBtn:d.a})},299:function(t,e,n){"use strict";n(292)},300:function(t,e,n){var r=n(43)(!1);r.push([t.i,".keyboard-1[data-v-0b90a0cc],.keyboard-2[data-v-0b90a0cc],.keyboard-3[data-v-0b90a0cc]{font-size:12px}.keyboard-1[data-v-0b90a0cc]{--height:12em}.keyboard-2[data-v-0b90a0cc]{--height:96.66667px}.keyboard-3[data-v-0b90a0cc]{--height:72.5px}",""]),t.exports=r},301:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("63c9496b",content,!0,{sourceMap:!1})},302:function(t,e,n){var r=n(43)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},307:function(t,e,n){"use strict";n.r(e);n(96);var r={props:{value:{type:Boolean,default:!1},isCorrect:{type:Boolean,required:!0},wrongAnswers:{type:Number,default:0}},data:function(){return{snackbar:this.value,timeout:2e3}},watch:{value:function(t){this.timeout=t?2e3:0,this.snackbar=t},snackbar:function(t){this.snackbar=t,this.$emit("input",t)}}},o=n(72),c=n(97),l=n.n(c),d=n(13),h=(n(62),n(50),n(301),n(303)),v=n(291),f=n(98),m=n(305),_=n(298),k=n(73),x=n(7),w=n(31),y=Object(k.a)(h.a,v.a,m.a,Object(_.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(x.d)(n+footer+r),paddingLeft:Object(x.d)(o),paddingRight:Object(x.d)(c),paddingTop:Object(x.d)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(w.e)("auto-height",this),0==this.timeout&&Object(w.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(x.h)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(d.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(x.h)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:h.a.options.computed.classes.call(this),style:h.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.timeout,bottom:"",vertical:"",color:t.isCorrect?"success":"error","content-class":"text-center mr-0"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._t("default",(function(){return[t.isCorrect?[t._v("정답😆")]:[t._v("\n      아까워요😢\n      "),t.wrongAnswers?[n("br"),t._v("\n        (남은 기회 "+t._s(3-t.wrongAnswers)+"번)\n      ")]:t._e()]]}))],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VSnackbar:y})},308:function(t,e,n){"use strict";n.r(e);n(96);var r={props:{mode:{type:String,default:"normal"},currentLevel:{type:Number,default:1},maxLevel:{type:Number,default:1},allot:{type:Number,default:0},minNote:{type:String,required:!0},maxNote:{type:String,required:!0},includeAccidentals:{type:Boolean,default:!1}}},o=n(72),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-center align-center mb-4"},[n("h1",{staticClass:"mr-3 border pa-3"},[t._t("level",(function(){return["survival"===t.mode?[t._v("서바이벌")]:[t._v("레벨 "+t._s(t.currentLevel+"/"+t.maxLevel))]]}))],2),t._v(" "),n("div",{staticClass:"mb-0"},["survival"!==t.mode?n("p",{staticClass:"mb-0"},[t._v("배점: "+t._s(t.allot)+"점")]):t._e(),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n      음 범위:\n      "),n("span",{class:{"blue--text":"C3"===t.minNote}},[t._v("\n        "+t._s(t.minNote)+"\n      ")]),t._v("\n      ~\n      "),n("span",{class:{"red--text":"B5"===t.maxNote}},[t._v("\n        "+t._s(t.maxNote)+"\n      ")])]),t._v(" "),n("p",{staticClass:"mb-0",class:{"red--text":t.includeAccidentals}},[t._v("\n      검은건반\n      "+t._s(t.includeAccidentals?"":"비")+"포함\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(96);var r=void 0,o={props:{isFirstLevel:{type:Boolean,default:!0},levelSteps:{type:Number,default:10},btnColor:{type:String,default:""},btnFunction:{type:Function,default:function(){return r.$emit("click")}}}},c=n(72),l=n(97),d=n.n(l),h=n(360),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[t.isFirstLevel?[t._t("default",(function(){return[n("p",{staticClass:"mb-2"},[t._v("\n        레벨 당 "),n("strong",[t._v(t._s(t.levelSteps)+"문제")]),t._v("가 출제됩니다.\n      ")])]})),t._v(" "),t._m(0)]:t._t("levelup",(function(){return[t._m(1)]})),t._v(" "),n("v-btn",{attrs:{"x-large":"",block:"",color:t.btnColor},on:{click:t.btnFunction}},[t._v(" 시작! ")])],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      ※만약 시작해도 아무 소리도 나지 않는다면 "),n("strong",[t._v("새로고침")]),t._v("을\n      해주세요.\n      "),n("br"),t._v("\n      단, 진행 상황은 초기화됩니다.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("레벨 업!")]),t._v(" "),n("br"),t._v("\n      위쪽에서 바뀐 조건을 확인해주세요.\n    ")])}],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a})},310:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(96),n(22),n(124),n(45),n(62),n(63),{inheritAttrs:!1,props:{pitch:{type:Number,default:440},mode:{type:String,default:"normal"},minNote:{type:String,required:!0},maxNote:{type:String,required:!0},includeAccidentals:{type:Boolean,required:!0},isCorrect:{type:Function,required:!0},stopGame:{type:Function,required:!0}},data:function(){return{step:1,answer:this.randomNote(this.minNote,this.maxNote,this.includeAccidentals),disabled:[]}},computed:{frequency:function(){return this.pitch*Math.pow(2,this.noteToInt(this.answer)/12)},octaves:function(){if("hard"!==this.mode)return[""];var t=parseInt(this.minNote.match(/^[A-G][b#]?([-]?\d+$)/)[1])||4,e=parseInt(this.maxNote.match(/^[A-G][b#]?([-]?\d+$)/)[1])||4;if(t>e)throw new Error("옥타브 범위 오류");for(var n=[],i=t;i<=e;i++)n.push(i);return n}},methods:{checkAnswer:function(t){t===this.answer?(this.isCorrect(!0),this.nextAnswer(),this.step+=1,this.disabled=[t]):t===this.answer.slice(0,-1)?(this.isCorrect(!0),this.nextAnswer(),this.step+=1,this.disabled=[]):(this.$set(this.disabled,this.disabled.length,t),this.isCorrect(!1))},nextAnswer:function(){for(var t;t=this.randomNote(this.minNote,this.maxNote,this.includeAccidentals),this.answer===t;);this.answer=t},randomNote:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.noteToInt(t),o=this.noteToInt(e),c=r+Math.round(Math.random()*(o-r)),l=this.intToNote(c);if(!n&&l.includes("#")){if(r===o)throw new Error("범위 오류");c+=c<o?1:-1,l=this.intToNote(c)}return l},noteToInt:function(t){try{var e=t.match(/(^[A-G][b#]?)([-]?\d+)$/).slice(1,3),n=Object(r.a)(e,2),o=n[0],c=n[1];return{C:-9,D:-7,E:-5,F:-4,G:-2,A:0,B:2}[o.charAt(0)]+("#"===o.charAt(1)?1:"b"===o.charAt(1)?-1:0)+12*(c-4)}catch(t){throw new Error("노트 입력 오류")}},intToNote:function(t){var e=(t%12+12)%12,n=Math.floor(t/12)+(e<3?4:5);return["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"][e]+n},confirmStop:function(){confirm("챌린지를 중단하고 결과를 확인하시겠습니까?")&&this.stopGame()}}}),c=o,l=(n(299),n(72)),d=n(97),h=n.n(d),v=n(360),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PlayButton",{staticClass:"float-right my-2",attrs:{"play-on-render":!0,frequency:t.frequency,step:t.step,"button-text":"다시 듣기"}}),t._v(" "),n("div",{staticClass:"clearfix mb-4"}),t._v(" "),t._l(t.octaves,(function(e){return n("PianoButtons",{key:e,staticClass:"my-3",class:"keyboard-"+t.octaves.length,attrs:{octave:e,"include-accidentals":t.includeAccidentals,disabled:t.disabled,"answer-function":function(e){return t.checkAnswer(e)}}})})),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{color:"secondary"},on:{click:t.confirmStop}},[t._v("\n    그만하기\n  ")])],2)}),[],!1,null,"0b90a0cc",null);e.default=component.exports;h()(component,{PlayButton:n(293).default,PianoButtons:n(297).default}),h()(component,{VBtn:v.a})},311:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(64),n(96),n(30),n(22),{props:{mode:{type:String,default:"normal"},pitch:{type:Number,required:!0},score:{type:Number,required:!0},wrongSum:{type:Number,required:!0}},computed:{shareUrl:function(){return"https://vrisel.github.io/perfect-pitch-challenge"},resultText:function(){var t="";switch(this.mode){case"normal":t="🎼일반";break;case"hard":t="🔥하드";break;case"survival":t="🧨서바이벌"}return"".concat(t," 모드(").concat(this.pitch,"㎐ 피치)에서 ").concat(this.score,"점 획득!")},shareText:function(){return"[🎹절대음감 챌린지] ".concat(this.resultText,"\n")+"도전해보기⏩"}},methods:{shareGame:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===navigator.share||!1!==/[Ww]indows?/.test(navigator.userAgent)){e.next=5;break}return e.next=3,navigator.share({text:t.shareText,url:t.shareUrl});case 3:e.next=6;break;case 5:navigator.clipboard.writeText("".concat(t.shareText," ").concat(t.shareUrl)).then((function(){return alert("공유 메시지가 복사되었습니다!")})).catch((function(){return alert("공유 메시지를 복사하는 과정에서 오류가 발생했습니다.")}));case 6:case"end":return e.stop()}}),e)})))()},goHome:function(){confirm("결과가 초기화됩니다. 첫 화면으로 돌아가시겠습니까?")&&this.$router.push("/")}}}),c=n(72),l=n(97),d=n.n(l),h=n(360),v=n(288),f=n(341),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex flex-column text-center"},[n("h1",{staticClass:"mb-4"},[t._v("🎊최종결과🎊")]),t._v(" "),n("p",[t._v(t._s(t.resultText))]),t._v(" "),n("v-btn",{attrs:{"x-large":""},on:{click:t.shareGame}},[t._v("\n    결과 공유하기\n    "),n("v-icon",[t._v("mdi-share-variant")])],1),t._v(" "),n("v-btn",{staticClass:"mt-12 align-self-end",attrs:{color:"secondary"},on:{click:t.goHome}},[n("v-icon",[t._v("mdi-home")]),t._v("\n    처음으로\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VContainer:v.a,VIcon:f.a})},357:function(t,e,n){"use strict";n.r(e);n(46),n(6),n(51),n(36),n(50);var r=n(0),o={name:"ChallengePage",asyncData:function(t){var e=t.query;return{pitch:parseInt(e.pitch)||440}},data:function(){return{currentLevel:1,currentStep:1,wrongAnswers:[],beforeLevel:!0,finished:!1,alertActive:!1,isCorrect:!1,levelSteps:10,levels:[{allot:2,minNote:"C4",maxNote:"B4",includeAccidentals:!1},{allot:3,minNote:"C4",maxNote:"B4",includeAccidentals:!0},{allot:3,minNote:"C4",maxNote:"B5",includeAccidentals:!1},{allot:4,minNote:"C4",maxNote:"B5",includeAccidentals:!0},{allot:4,minNote:"C3",maxNote:"B5",includeAccidentals:!1},{allot:5,minNote:"C3",maxNote:"B5",includeAccidentals:!0}]}},head:function(){return{title:"현재 점수: ".concat(this.currentScore,"점")}},computed:{maxLevel:function(){return this.levels.length},allots:function(){return this.levels.map((function(t){return t.allot}))},maxScore:function(){for(var t=0,i=0;i<this.currentLevel-1;i++)t+=this.allots[i]*this.levelSteps;return t+=this.allots[this.currentLevel-1]*(this.currentStep-1)||0},currentScore:function(){return this.maxScore-this.wrongSum},wrongSum:function(){return this.wrongAnswers.reduce((function(t,e){return t+e}),0)}},created:function(){this.wrongAnswers=Array.from({length:this.maxLevel},(function(){return 0}))},methods:{gotAnswer:function(t){var e=this;this.alertActive=!1,setTimeout((function(){t?(e.isCorrect=!0,e.alertActive=!0,e.currentStep>=e.levelSteps?(e.currentStep=1,e.currentLevel+=1,e.currentLevel<=e.maxLevel?e.showLevelDivider():e.showResult()):e.currentStep+=1):(e.isCorrect=!1,e.alertActive=!0,r.a.set(e.wrongAnswers,e.currentLevel-1,e.wrongAnswers[e.currentLevel-1]+1))}),1)},showLevelDivider:function(){this.beforeLevel=!0},showResult:function(){this.finished=!0}}},c=n(72),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"d-flex flex-column justify-center"},[t.finished?n("ChallengeResult",{attrs:{pitch:t.pitch,score:t.currentScore,"wrong-sum":t.wrongSum}}):[n("ChallengeStatus",t._b({attrs:{mode:"normal","current-level":t.currentLevel,"max-level":t.maxLevel}},"ChallengeStatus",t.levels[t.currentLevel-1],!1)),t._v(" "),n("p",{staticClass:"mb-4 text-center"},[t._v("\n      현재 점수: "+t._s(t.currentScore+" / "+t.maxScore)+"점\n      "),n("br"),t._v("\n      틀린 개수: "+t._s(t.wrongSum)+"개\n    ")]),t._v(" "),t.beforeLevel?n("ChallengeBeforeLevel",{attrs:{"is-first-level":1===t.currentLevel,"level-steps":t.levelSteps,"btn-color":"green white--text","btn-function":function(){t.beforeLevel=!1}}}):n("div",[n("p",{staticClass:"float-left mb-0"},[t._v("\n        현재 문제: "+t._s(t.currentStep+" / "+t.levelSteps)+"\n        "),n("br"),t._v("\n        피치(Pitch): "+t._s(t.pitch)+"㎐ A\n      ")]),t._v(" "),n("ChallengeGame",t._b({attrs:{pitch:t.pitch,mode:"normal","is-correct":function(e){return t.gotAnswer(e)},"stop-game":function(){return t.showResult()}}},"ChallengeGame",t.levels[t.currentLevel-1],!1))],1)],t._v(" "),n("AnswerAlert",{attrs:{"is-correct":t.isCorrect},model:{value:t.alertActive,callback:function(e){t.alertActive=e},expression:"alertActive"}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChallengeStatus:n(308).default,ChallengeBeforeLevel:n(309).default,ChallengeGame:n(310).default,ChallengeResult:n(311).default,AnswerAlert:n(307).default})}}]);