(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,10],{290:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("e94c6cc6",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("1d880873",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);n(96),n(50);var r=n(306),o={props:{frequency:{type:Number,required:!0},buttonText:{type:String,default:"다시 듣기"},playOnRender:{type:Boolean,default:!0},step:{type:Number,default:0}},data:function(){return{disabled:!1,synth:void 0}},watch:{step:function(){this.playOnRender&&this.generateSound()}},mounted:function(){var t=this;this.$nextTick((function(){t.synth=new r.a({volume:-3}).toDestination(),t.playOnRender&&t.generateSound()}))},destroyed:function(){this.synth.dispose()},methods:{generateSound:function(){var t=this;this.disabled=!0,setTimeout((function(){t.disabled=!1}),3e3),this.synth.triggerAttackRelease(this.frequency,2)}}},c=n(72),d=n(97),l=n.n(d),h=n(360),f=n(341),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{type:"button",disabled:t.disabled},on:{click:t.generateSound}},[t._t("default",(function(){return[t._v("\n    "+t._s(t.buttonText)+"\n    "),n("v-icon",[t._v("mdi-volume-high")])]}))],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:f.a})},295:function(t,e,n){"use strict";n(290)},296:function(t,e,n){var r=n(43)(!1);r.push([t.i,".key[data-v-a230ce36]{text-transform:none;min-width:0!important;align-items:flex-end;font-size:inherit}.key.white-key[data-v-a230ce36]{width:3.9167em;height:calc(var(--height)*1);color:#000;background-color:#fff}.key.black-key[data-v-a230ce36]{width:2em;height:calc(var(--height)*0.65517);color:#fff;background-color:#000;position:absolute;z-index:1;transform:translateX(-50%)}.black-key.v-btn--disabled[data-v-a230ce36]:disabled{background-color:#a0a0a0!important}.black-key[data-v-a230ce36]:hover{opacity:1;background-color:#555!important}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e);n(96),n(46),n(6),n(62),n(63),n(22);var r={props:{includeAccidentals:{type:Boolean,default:!1},disabled:{type:Array,default:function(){return[]}},octave:{type:[Number,String],default:""},answerFunction:{type:Function,required:!0}},computed:{noteCandidates:function(){var t=this;return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((function(e){return e+t.octave}))},isDisabled:function(){var t=this;return this.noteCandidates.reduce((function(e,n){return e[n]=!t.includeAccidentals&&n.includes("#")||t.disabled.includes(n),e}),{})}},methods:{colorClasses:function(t){var e=t.includes("#"),n=[e?"black-key":"white-key"],r=/[-]?\d+$/.exec(t);return r?(r[0]<4?(n.push("blue--text"),e&&n.push("text--lighten-2")):r[0]>4&&(n.push("red--text"),e&&n.push("text--lighten-2")),n):n}}},o=(n(295),n(72)),c=n(97),d=n.n(c),l=n(360),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.noteCandidates,(function(e){return n("v-btn",{key:e,staticClass:"key",class:t.colorClasses(e),attrs:{disabled:t.isDisabled[e]},on:{click:function(n){return t.answerFunction(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),1)}),[],!1,null,"a230ce36",null);e.default=component.exports;d()(component,{VBtn:l.a})},299:function(t,e,n){"use strict";n(292)},300:function(t,e,n){var r=n(43)(!1);r.push([t.i,".keyboard-1[data-v-0b90a0cc],.keyboard-2[data-v-0b90a0cc],.keyboard-3[data-v-0b90a0cc]{font-size:12px}.keyboard-1[data-v-0b90a0cc]{--height:12em}.keyboard-2[data-v-0b90a0cc]{--height:96.66667px}.keyboard-3[data-v-0b90a0cc]{--height:72.5px}",""]),t.exports=r},310:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(96),n(22),n(124),n(45),n(62),n(63),{inheritAttrs:!1,props:{pitch:{type:Number,default:440},mode:{type:String,default:"normal"},minNote:{type:String,required:!0},maxNote:{type:String,required:!0},includeAccidentals:{type:Boolean,required:!0},isCorrect:{type:Function,required:!0},stopGame:{type:Function,required:!0}},data:function(){return{step:1,answer:this.randomNote(this.minNote,this.maxNote,this.includeAccidentals),disabled:[]}},computed:{frequency:function(){return this.pitch*Math.pow(2,this.noteToInt(this.answer)/12)},octaves:function(){if("hard"!==this.mode)return[""];var t=parseInt(this.minNote.match(/^[A-G][b#]?([-]?\d+$)/)[1])||4,e=parseInt(this.maxNote.match(/^[A-G][b#]?([-]?\d+$)/)[1])||4;if(t>e)throw new Error("옥타브 범위 오류");for(var n=[],i=t;i<=e;i++)n.push(i);return n}},methods:{checkAnswer:function(t){t===this.answer?(this.isCorrect(!0),this.nextAnswer(),this.step+=1,this.disabled=[t]):t===this.answer.slice(0,-1)?(this.isCorrect(!0),this.nextAnswer(),this.step+=1,this.disabled=[]):(this.$set(this.disabled,this.disabled.length,t),this.isCorrect(!1))},nextAnswer:function(){for(var t;t=this.randomNote(this.minNote,this.maxNote,this.includeAccidentals),this.answer===t;);this.answer=t},randomNote:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.noteToInt(t),o=this.noteToInt(e),c=r+Math.round(Math.random()*(o-r)),d=this.intToNote(c);if(!n&&d.includes("#")){if(r===o)throw new Error("범위 오류");c+=c<o?1:-1,d=this.intToNote(c)}return d},noteToInt:function(t){try{var e=t.match(/(^[A-G][b#]?)([-]?\d+)$/).slice(1,3),n=Object(r.a)(e,2),o=n[0],c=n[1];return{C:-9,D:-7,E:-5,F:-4,G:-2,A:0,B:2}[o.charAt(0)]+("#"===o.charAt(1)?1:"b"===o.charAt(1)?-1:0)+12*(c-4)}catch(t){throw new Error("노트 입력 오류")}},intToNote:function(t){var e=(t%12+12)%12,n=Math.floor(t/12)+(e<3?4:5);return["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"][e]+n},confirmStop:function(){confirm("챌린지를 중단하고 결과를 확인하시겠습니까?")&&this.stopGame()}}}),c=o,d=(n(299),n(72)),l=n(97),h=n.n(l),f=n(360),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PlayButton",{staticClass:"float-right my-2",attrs:{"play-on-render":!0,frequency:t.frequency,step:t.step,"button-text":"다시 듣기"}}),t._v(" "),n("div",{staticClass:"clearfix mb-4"}),t._v(" "),t._l(t.octaves,(function(e){return n("PianoButtons",{key:e,staticClass:"my-3",class:"keyboard-"+t.octaves.length,attrs:{octave:e,"include-accidentals":t.includeAccidentals,disabled:t.disabled,"answer-function":function(e){return t.checkAnswer(e)}}})})),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{color:"secondary"},on:{click:t.confirmStop}},[t._v("\n    그만하기\n  ")])],2)}),[],!1,null,"0b90a0cc",null);e.default=component.exports;h()(component,{PlayButton:n(293).default,PianoButtons:n(297).default}),h()(component,{VBtn:f.a})}}]);