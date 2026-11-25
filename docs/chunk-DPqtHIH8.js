import{A as de,B as ot,C as Xd,D as be,E as at,F as ji$1,G as tt,I as kn,J as zn,K as xo$1,L as le,M as ea,N as ge,O as ce,P as ia,R as na,S as Vr$1,T as aa,U as so,V as ro,W as sr$1,Y as zr$1,_ as St,a as Fi,b as Ur$1,c as Je,d as Nr$1,f as On,g as Sn,h as Sd,i as En,j as dr$1,k as co$1,l as Lr$1,m as Rr$1,n as Co$1,o as Id,p as P,q as yn,r as Ct$1,s as In,t as An,u as Nd,v as Tr$1,w as Zt$1,x as Vd,y as Ue,z as oa}from"./chunk-CJb4hRgP.js";import{$ as TG,$t as jr$1,A as Kd,An as rM,At as bb,B as Oy,Bn as ve,C as Ib,Ct as Zt$2,D as Jd,Dn as qn,Dt as b,E as Jc,Et as ae,F as My,Ft as dH,G as Q,Gn as xe,Gt as gi,Hn as wh,Ht as fe,I as Ny,In as tE,It as dT,J as Qy,Jt as hS,K as Q_,Kn as xy,Kt as gv,L as OE,Ln as tf,Lt as dn,M as Ky,Mn as sE,Mt as by,N as La$1,O as Jn,On as qr$1,Ot as bC,P as Ly,Pn as sf,Pt as ct,Q as T,Qn as zr$2,Qt as jb,R as Ob,Rn as uo$1,Rt as ef,S as Hy,St as Zn,Tn as qd,Tt as _b,Un as wo$1,Ut as fl,V as P$1,Vn as wd,Vt as fT,W as Py,Wn as xE,Wt as gH,X as Rz,Xn as z,Xt as iT,Y as Rs$1,Yn as ye,Yt as he$1,Z as Sb,_ as Ga$1,_t as Yd,a as Ba$1,an as lH,b as Ha$1,bt as Yy,cn as lo$1,ct as Vi,dn as mS,dt as X,en as jt,et as TI,f as Fc,fn as mT,ft as Xd$1,g as G,gn as ne,h as Fy,hn as nE,ht as Y,in as kh,j as Kv,jn as rv,kn as r8,kt as ba$1,l as Eo$1,ln as m,lt as Wd,m as Ft,mn as n8,mt as Xy,n as A,nt as Te$1,o as Cb,on as lT,p as Fr$1,pn as me,pt as Xn,q as Qe,qt as h,rn as kb,rt as Ty,s as Cy,sn as ln$1,st as Va$1,t as $r$1,tt as Tb,un as mH,v as Gn,vn as of,vt as Yg,w as Ih,wn as pt,wt as Zy,xn as pa$1,xt as Z,yn as ot$1,z as Op,zn as v,zt as ev}from"./main-5QGLOBX7.js";var Be=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var Yt=class extends Be{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,a,o,s){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=a,this.bindings=o||null,this.directives=s||null}};var Bt=class extends Be{templateRef;viewContainerRef;context;injector;constructor(i,t,e,a){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Li=class extends Be{element;constructor(i){super(),this.element=i instanceof pt?i.nativeElement:i}};var Zt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Yt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Bt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Li)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ve=class extends Zt{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,a=e.get(qn,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,a=i.injector||this._defaultInjector||ae.NULL,o=a.get(Q,e.injector);t=gv(i.component,{elementInjector:a,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(a=>this.outletElement.appendChild(a)),e.detectChanges(),this.setDisposeFn(()=>{let a=t.indexOf(e);a!==-1&&t.remove(a)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Jt=(()=>{class n extends Zt{_moduleRef=h(qn,{optional:!0});_document=h(z);_viewContainerRef=h(ln$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new me;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,a=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let a=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(a,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>a.parentNode?.replaceChild(e,a))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(a){return(t||(t=Yg(n)))(a||n)}})();static ɵdir=dn({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Cy]})}return n})();var ze=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({})}return n})();var io=20;var ai=(()=>{class n{_ngZone=h(ve);_platform=h(P);_renderer=h(Gn).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Y;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=io){return this._platform.isBrowser?new A(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let a=t>0?this._scrolled.pipe(OE(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):b()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let a=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(xe(o=>!o||a.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((a,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let a=ot(e),o=t.getElementRef().nativeElement;do if(a==o)return!0;while(a=a.parentElement);return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var no=20;var Ce=(()=>{class n{_platform=h(P);_listeners;_viewportSize=null;_change=new Y;_document=h(z);constructor(){let t=h(ve),e=h(Gn).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,a),e.listen(`window`,`orientationchange`,a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:a}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+a,right:t.left+e,height:a,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),a=t.documentElement,o=a.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||a.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||a.scrollLeft||0}}change(t=no){return t>0?this._change.pipe(OE(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var ni=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({})}return n})();var ji=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[Kv,ni,Kv,ni]})}return n})();var sa=Sd();function Se(n){return new oi(n.get(Ce),n.get(z))}var oi=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Vd(-this._previousScrollPosition.left),i.style.top=Vd(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,a=t.style,o=e.scrollBehavior||``,s=a.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),sa&&(e.scrollBehavior=a.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),sa&&(e.scrollBehavior=o,a.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function ua(n,i){return new ri(n.get(ai),n.get(ve),n.get(Ce),i)}var ri=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,a){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(xe(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Fe=class{enable(){}disable(){}attach(){}};function Wi(n,i){return i.some(t=>{let e=n.bottom<t.top,a=n.top>t.bottom,o=n.right<t.left,s=n.left>t.right;return e||a||o||s})}function ca(n,i){return i.some(t=>{let e=n.top<t.top,a=n.bottom>t.bottom,o=n.left<t.left,s=n.right>t.right;return e||a||o||s})}function mi(n,i){return new si(n.get(ai),n.get(Ce),n.get(ve),i)}var si=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,a){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:a}=this._viewportRuler.getViewportSize();Wi(t,[{width:e,height:a,bottom:a,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var _a=(()=>{class n{_injector=h(ae);noop=()=>new Fe;close=t=>ua(this._injector,t);block=()=>Se(this._injector);reposition=t=>mi(this._injector,t);static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var Vt=class{positionStrategy;scrollStrategy=new Fe;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var ci=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var ga=(()=>{class n{_attachedOverlays=[];_document=h(z);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,a){return a.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var va=(()=>{class n extends ga{_ngZone=h(ve);_renderer=h(Gn).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let a=e.length-1;a>-1;a--){let o=e[a];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var fa=(()=>{class n extends ga{_platform=h(P);_ngZone=h(ve);_renderer=h(Gn).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,a),o.listen(e,`click`,this._clickListener,a),o.listen(e,`auxclick`,this._clickListener,a),o.listen(e,`contextmenu`,this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=at(t)};_clickListener=t=>{let e=at(t),a=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let c=o[s],h=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,t,h))){if(la(c.overlayElement,e)||la(c.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();function la(n,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var ya=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Xn({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var hi=(()=>{class n{_platform=h(P);_containerElement;_document=h(z);_styleLoader=h(Q_);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Nd()){let a=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),Nd()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(ya)}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var Xi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,a){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,a)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ui(n){return n&&n.nodeType===1}var Hi=X([]);var ke=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Y;_attachments=new Y;_detachments=new Y;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Y;_outsidePointerEvents=new Y;_afterNextRenderRef;constructor(i,t,e,a,o,s,c,h,g,_=!1,E,j){this._portalOutlet=i,this._host=t,this._pane=e,this._config=a,this._ngZone=o,this._keyboardDispatcher=s,this._document=c,this._location=h,this._outsideClickDispatcher=g,this._animationsDisabled=_,this._injector=E,this._renderer=j,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Z(()=>{Hi.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=wd(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Z(()=>{Hi.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Z(()=>{Hi.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=m(m({},this._config),i),this._updateElementSize()}setDirection(i){this._config=P$1(m({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Vd(this._config.width),i.height=Vd(this._config.height),i.minWidth=Vd(this._config.minWidth),i.minHeight=Vd(this._config.minHeight),i.maxWidth=Vd(this._config.maxWidth),i.maxHeight=Vd(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ui(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Xi(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let a=An(t||[]).filter(o=>!!o);a.length&&(e?i.classList.add(...a):i.classList.remove(...a))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=wd(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var da=`cdk-overlay-connected-position-bounding-box`;var ao=/([A-Za-z%]+)$/;function pi(n,i){return new li(i,n.get(Ce),n.get(z),n.get(P),n.get(hi))}var li=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Y;_resizeSubscription=ne.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,a,o){this._viewportRuler=t,this._document=e,this._platform=a,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(da),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,a=this._containerRect,o=[],s;for(let c of this._preferredPositions){let h=this._getOriginPoint(i,a,c),g=this._getOverlayPoint(h,t,c),_=this._getOverlayFit(g,t,e,c);if(_.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,h);return}if(this._canFitWithFlexibleDimensions(_,g,e)){o.push({position:c,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,c)});continue}(!s||s.overlayFit.visibleArea<_.visibleArea)&&(s={overlayFit:_,overlayPoint:g,originPoint:h,position:c,overlayRect:t})}if(o.length){let c=null,h=-1;for(let g of o){let _=g.boundingBoxRect.width*g.boundingBoxRect.height*(g.position.weight||1);_>h&&(h=_,c=g)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&he(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(da),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof pt?this._origin.nativeElement:Ui(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let a;if(e.originX==`center`)a=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,c=this._isRtl()?i.left:i.right;a=e.originX==`start`?s:c}t.left<0&&(a-=t.left);let o;return e.originY==`center`?o=i.top+i.height/2:o=e.originY==`top`?i.top:i.bottom,t.top<0&&(o-=t.top),{x:a,y:o}}_getOverlayPoint(i,t,e){let a;e.overlayX==`center`?a=-t.width/2:e.overlayX===`start`?a=this._isRtl()?-t.width:0:a=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:i.x+a,y:i.y+o}}_getOverlayFit(i,t,e,a){let o=ha(t),{x:s,y:c}=i,h=this._getOffset(a,`x`),g=this._getOffset(a,`y`);h&&(s+=h),g&&(c+=g);let _=0-s,E=s+o.width-e.width,j=0-c,ht=c+o.height-e.height,yt=this._subtractOverflows(o.width,_,E),Pt=this._subtractOverflows(o.height,j,ht),dn=yt*Pt;return{visibleArea:dn,isCompletelyWithinViewport:o.width*o.height===dn,fitsInViewportVertically:Pt===o.height,fitsInViewportHorizontally:yt==o.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let a=e.bottom-t.y,o=e.right-t.x,s=ma(this._overlayRef.getConfig().minHeight),c=ma(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||s!=null&&s<=a,g=i.fitsInViewportHorizontally||c!=null&&c<=o;return h&&g}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let a=ha(t),o=this._viewportRect,s=Math.max(i.x+a.width-o.width,0),c=Math.max(i.y+a.height-o.height,0),h=Math.max(o.top-e.top-i.y,0),g=Math.max(o.left-e.left-i.x,0),_=0,E=0;return a.width<=o.width?_=g||-s:_=i.x<this._getViewportMarginStart()?o.left-e.left-i.x:0,a.height<=o.height?E=h||-c:E=i.y<this._getViewportMarginTop()?o.top-e.top-i.y:0,this._previousPushAmount={x:_,y:E},{x:i.x+_,y:i.y+E}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!oo(this._lastScrollVisibility,e)){let a=new ci(i,e);this._positionChanges.next(a)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,a=i.overlayY;i.overlayX===`center`?e=`center`:this._isRtl()?e=i.overlayX===`start`?`right`:`left`:e=i.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${a}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,a=this._isRtl(),o,s,c;if(t.overlayY===`top`)s=i.y,o=e.height-s+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)c=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-c+this._getViewportMarginTop();else{let ht=Math.min(e.bottom-i.y+e.top,i.y),yt=this._lastBoundingBoxSize.height;o=ht*2,s=i.y-ht,o>yt&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-yt/2)}let h=t.overlayX===`start`&&!a||t.overlayX===`end`&&a,g=t.overlayX===`end`&&!a||t.overlayX===`start`&&a,_,E,j;if(g)j=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),_=i.x-this._getViewportMarginStart();else if(h)E=i.x,_=e.right-i.x-this._getViewportMarginEnd();else{let ht=Math.min(e.right-i.x+e.left,i.x),yt=this._lastBoundingBoxSize.width;_=ht*2,E=i.x-ht,_>yt&&!this._isInitialRender&&!this._growAfterOpen&&(E=i.x-yt/2)}return{top:s,left:E,bottom:c,right:j,width:_,height:o}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left=`0`,a.bottom=a.right=`auto`,a.maxHeight=a.maxWidth=``,a.width=a.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;a.width=Vd(e.width),a.height=Vd(e.height),a.top=Vd(e.top)||`auto`,a.bottom=Vd(e.bottom)||`auto`,a.left=Vd(e.left)||`auto`,a.right=Vd(e.right)||`auto`,t.overlayX===`center`?a.alignItems=`center`:a.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?a.justifyContent=`center`:a.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(a.maxHeight=Vd(o)),s&&(a.maxWidth=Vd(s))}this._lastBoundingBoxSize=e,he(this._boundingBox.style,a)}_resetBoundingBoxStyles(){he(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){he(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let e={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(a){let _=this._viewportRuler.getViewportScrollPosition();he(e,this._getExactOverlayY(t,i,_)),he(e,this._getExactOverlayX(t,i,_))}else e.position=`static`;let c=``,h=this._getOffset(t,`x`),g=this._getOffset(t,`y`);h&&(c+=`translateX(${h}px) `),g&&(c+=`translateY(${g}px)`),e.transform=c.trim(),s.maxHeight&&(a?e.maxHeight=Vd(s.maxHeight):o&&(e.maxHeight=``)),s.maxWidth&&(a?e.maxWidth=Vd(s.maxWidth):o&&(e.maxWidth=``)),he(this._pane.style,e)}_getExactOverlayY(i,t,e){let a={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),i.overlayY===`bottom`)a.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else a.top=Vd(o.y);return a}_getExactOverlayX(i,t,e){let a={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)a.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else a.left=Vd(o.x);return a}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ca(i,e),isOriginOutsideView:Wi(i,e),isOverlayClipped:ca(t,e),isOverlayOutsideView:Wi(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,a)=>e-Math.max(a,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&An(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof pt)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let e=t.getBoundingClientRect();return i&&(t.style.display=``),e}};function he(n,i){for(let t in i)Object.hasOwn(i,t)&&(n[t]=i[t]);return n}function ma(n){if(typeof n!=`number`&&n!=null){let[i,t]=n.split(ao);return!t||t===`px`?parseFloat(i):null}return n||null}function ha(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function oo(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var pa=`cdk-global-overlay-wrapper`;function te(n){return new di}var di=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(pa),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:a,height:o,maxWidth:s,maxHeight:c}=this._overlayRef.getConfig(),h=(a===`100%`||a===`100vw`)&&(!s||s===`100%`||s===`100vw`),g=(o===`100%`||o===`100vh`)&&(!c||c===`100%`||c===`100vh`),_=this._xPosition,E=this._xOffset,j=this._overlayRef.getConfig().direction===`rtl`,ht=``,yt=``,Pt=``;h?Pt=`flex-start`:_===`center`?(Pt=`center`,j?yt=E:ht=E):j?_===`left`||_===`end`?(Pt=`flex-end`,ht=E):(_===`right`||_===`start`)&&(Pt=`flex-start`,yt=E):_===`left`||_===`start`?(Pt=`flex-start`,ht=E):(_===`right`||_===`end`)&&(Pt=`flex-end`,yt=E),i.position=this._cssPosition,i.marginLeft=h?`0`:ht,i.marginTop=g?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?`0`:yt,t.justifyContent=Pt,t.alignItems=g?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(pa),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var ba=(()=>{class n{_injector=h(ae);global(){return te()}flexibleConnectedTo(t){return pi(this._injector,t)}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var wa=new v(`OVERLAY_DEFAULT_CONFIG`);function ee(n,i){n.get(Q_).load(ya);let t=n.get(hi),e=n.get(z),a=n.get(St),o=n.get(jt),s=n.get(rM),c=n.get(jr$1,null,{optional:!0})||n.get(Gn).createRenderer(null,null),h=new Vt(i),g=n.get(wa,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||s.value,!e.body||!(`showPopover`in e.body)?h.usePopover=!1:h.usePopover=i?.usePopover??g;let _=e.createElement(`div`),E=e.createElement(`div`);_.id=a.getId(`cdk-overlay-`),_.classList.add(`cdk-overlay-pane`),E.appendChild(_),h.usePopover&&(E.setAttribute(`popover`,`manual`),E.classList.add(`cdk-overlay-popover`));let j=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Ui(j)?j.after(E):j?.type===`parent`?j.element.appendChild(E):t.getContainerElement().appendChild(E),new ke(new Ve(_,o,n),E,_,h,n.get(ve),n.get(va),e,n.get(qr$1),n.get(fa),i?.disableAnimations??n.get(TI,null,{optional:!0})===`NoopAnimations`,n.get(Q),c)}var xa=(()=>{class n{scrollStrategies=h(_a);_positionBuilder=h(ba);_injector=h(ae);create(t){return ee(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var Le=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({providers:[xa],imports:[Kv,ze,ji,ji]})}return n})();var Yi=new v(`MAT_MENU_PANEL`);var je=(()=>{class n{_isAnchor;_elementRef=h(pt);_document=h(z);_focusMonitor=h(En);_parentMenu=h(Yi,{optional:!0});_changeDetectorRef=h(Ga$1);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new Y;_focused=new Y;_highlighted=!1;_triggersSubmenu=!1;constructor(){h(Q_).load(Rr$1),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let a=0;a<e.length;a++)e[a].remove();return t.textContent?.trim()||``}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],e=[`mat-icon, [matMenuItemIcon]`,`*`];function a(o,s){o&1&&(kh(),ba$1(0,`svg`,2),Ba$1(1,`polygon`,3),Wd())}return Xn({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(s,c){s&1&&Va$1(`click`,function(g){return c._checkDisabled(g)})(`mouseenter`,function(){return c._handleMouseEnter()}),s&2&&(Jn(`role`,c.role)(`tabindex`,c._getTabIndex())(`aria-disabled`,c._getAriaDisabled())(`disabled`,c._getDisabled()),Ha$1(`mat-mdc-menu-item-highlighted`,c._highlighted)(`mat-mdc-menu-item-submenu-trigger`,c._triggersSubmenu)(`mat-mdc-menu-item-disabled`,c.disabled)(`mat-mdc-menu-item-disabled-interactive`,c.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,zr$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zr$2],disableRipple:[2,`disableRipple`,`disableRipple`,zr$2]},exportAs:[`matMenuItem`],ngContentSelectors:e,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(s,c){s&1&&(Kd(t),Xd$1(0),ba$1(1,`span`,0),Xd$1(2,1),Wd(),Ba$1(3,`div`,1),Ib(4,a,2,0,`svg`,2)),s&2&&(bC(3),My(`matRippleDisabled`,c.disableRipple||c.disabled)(`matRippleTrigger`,c._getHostElement()),bC(),Cb(c._triggersSubmenu?4:-1))},dependencies:[Xd],encapsulation:2})})()}return n})();var co=new v(`MatMenuContent`);var lo=new v(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Gi=`_mat-menu-enter`;var ui=`_mat-menu-exit`;var Ie=(()=>{class n{_elementRef=h(pt);_changeDetectorRef=h(Ga$1);_injector=h(ae);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ct$1();_allItems;_directDescendantItems=new pa$1;_classList={};_panelAnimationState=`void`;_animationDone=new Y;_isAnimating=X(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let e=this._previousPanelClass,a=m({},this._classList);e&&e.length&&e.split(` `).forEach(o=>{a[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(` `).forEach(o=>{a[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=a}_previousPanelClass=``;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new me;close=this.closed;panelId=h(St).getId(`mat-menu-panel-`);constructor(){let t=h(lo);this.overlayPanelClass=t.overlayPanelClass||``,this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new In(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(t=>t.disabled&&!t.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Jc(this._directDescendantItems),fe(t=>xE(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState===`enter`&&e.activeItem?._hasFocus()){let a=t.toArray(),o=Math.max(0,Math.min(a.length-1,e.activeItemIndex||0));a[o]&&!a[o].disabled?e.setActiveItem(o):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Jc(this._directDescendantItems),fe(e=>xE(...e.map(a=>a._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,a=this._keyManager;switch(e){case 27:Nr$1(t)||(t.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(e===38||e===40)&&a.setFocusOrigin(`keyboard`),a.onKeydown(t);return}}focusFirstItem(t=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=wd(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let a=this._keyManager;a.setFocusOrigin(t).setFirstItemActive(),!a.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=P$1(m({},this._classList),{"mat-menu-before":t===`before`,"mat-menu-after":t===`after`,"mat-menu-above":e===`above`,"mat-menu-below":e===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===ui;(e||t===Gi)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Gi||t===ui)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?`enter`:`void`,t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ui),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Gi:ui)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Jc(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`];function e(a,o){if(a&1){let s=Ob();qd(0,`div`,0),Oy(`click`,function(){Ih(s);let h=kb();return wh(h.closed.emit(`click`))})(`animationstart`,function(h){Ih(s);let g=kb();return wh(g._onAnimationStart(h.animationName))})(`animationend`,function(h){Ih(s);let g=kb();return wh(g._onAnimationDone(h.animationName))})(`animationcancel`,function(h){Ih(s);let g=kb();return wh(g._onAnimationDone(h.animationName))}),qd(1,`div`,1),Xd$1(2),Yd()()}if(a&2){let s=kb();ef(s._classList),Ha$1(`mat-menu-panel-animations-disabled`,s._animationsDisabled)(`mat-menu-panel-exit-animation`,s._panelAnimationState===`void`)(`mat-menu-panel-animating`,s._isAnimating()),xy(`id`,s.panelId),Jn(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby||null)(`aria-describedby`,s.ariaDescribedby||null)}}return Xn({type:n,selectors:[[`mat-menu`]],contentQueries:function(o,s,c){if(o&1&&Jd(c,co,5)(c,je,5)(c,je,4),o&2){let h;Ly(h=Fy())&&(s.lazyContent=h.first),Ly(h=Fy())&&(s._allItems=h),Ly(h=Fy())&&(s.items=h)}},viewQuery:function(o,s){if(o&1&&Py(Fr$1,5),o&2){let c;Ly(c=Fy())&&(s.templateRef=c.first)}},hostVars:3,hostBindings:function(o,s){o&2&&Jn(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,zr$2],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,a=>a==null?null:zr$2(a)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[rv([{provide:Yi,useExisting:n}])],ngContentSelectors:t,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(o,s){o&1&&(Kd(),Ty(0,e,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return n})();var mo=new v(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(ae);return()=>mi(n)}});var Me=/* @__PURE__ */ new WeakMap;var ho=(()=>{class n{_canHaveBackdrop;_element=h(pt);_viewContainerRef=h(ln$1);_menuItemInstance=h(je,{optional:!0,self:!0});_dir=h(rM,{optional:!0});_focusMonitor=h(En);_ngZone=h(ve);_injector=h(ae);_scrollStrategy=h(mo);_changeDetectorRef=h(Ga$1);_animationsDisabled=Ct$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ne.EMPTY;_menuCloseSubscription=ne.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e===`click`||e===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=h(Yi,{optional:!0});this._parentMaterialMenu=e instanceof Ie?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Me.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let a=Me.get(e);Me.set(e,this),a&&a!==this&&a._closeMenu();let o=this._createOverlay(e),s=o.getConfig(),c=s.positionStrategy;this._setPosition(e,c),this._canHaveBackdrop?s.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:s.hasBackdrop=e.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),e instanceof Ie&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(wo$1(e.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,a=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),a instanceof Ie&&this._ownsMenu(a)?(this._pendingRemoval=a._animationDone.pipe(ot$1(1)).subscribe(()=>{e.detach(),Me.has(a)||a.lazyContent?.detach()}),a._setIsOpen(!1)):(e.detach(),a?.lazyContent?.detach()),a&&this._ownsMenu(a)&&Me.delete(a),this.restoreFocus&&(t===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=ee(this._injector,e),this._overlayRef.keydownEvents().subscribe(a=>{this._menu instanceof Ie&&this._menu._handleKeydown(a)})}return this._overlayRef}_getOverlayConfig(t){return new Vt({positionStrategy:pi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:t.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(a=>{this._ngZone.run(()=>{let o=a.connectionPair.overlayX===`start`?`after`:`before`,s=a.connectionPair.overlayY===`top`?`below`:`above`;t.setPositionClasses(o,s)})})}_setPosition(t,e){let[a,o]=t.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,c]=t.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[h,g]=[s,c],[_,E]=[a,o],j=0;if(this._triggersSubmenu()){if(E=a=t.xPosition===`before`?`start`:`end`,o=_=a===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ht=this._parentMaterialMenu.items.first;this._parentInnerPadding=ht?ht._getHostElement().offsetTop:0}j=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(h=s===`top`?`bottom`:`top`,g=c===`top`?`bottom`:`top`);e.withPositions([{originX:a,originY:h,overlayX:_,overlayY:s,offsetY:j},{originX:o,originY:h,overlayX:E,overlayY:s,offsetY:j},{originX:a,originY:g,overlayX:_,overlayY:c,offsetY:-j},{originX:o,originY:g,overlayX:E,overlayY:c,offsetY:-j}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:b(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(s=>this._menuOpen&&s!==this._menuItemInstance)):b();return xE(t,a,o,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Bt(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Me.get(t)===this}_triggerIsAriaDisabled(){return zr$2(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(e){La$1()};static ɵdir=dn({type:n})}return n})();var Ma=(()=>{class n extends ho{_cleanupTouchstart;_hoverSubscription=ne.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new me;onMenuOpen=this.menuOpened;menuClosed=new me;onMenuClose=this.menuClosed;constructor(){super(!0);let t=h(jr$1);this._cleanupTouchstart=t.listen(this._element.nativeElement,`touchstart`,e=>{ce(e)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){de(t)||(this._openedBy=t.button===0?`mouse`:void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(e===39&&this.dir===`ltr`||e===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(e,a){e&1&&Va$1(`click`,function(s){return a._handleClick(s)})(`mousedown`,function(s){return a._handleMousedown(s)})(`keydown`,function(s){return a._handleKeydown(s)}),e&2&&Jn(`aria-haspopup`,a.menu?`menu`:null)(`aria-expanded`,a.menuOpen)(`aria-controls`,a.menuOpen?a.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Cy]})}return n})();var Ia=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[Vr$1,Le,Kv,ni]})}return n})();var uo=Math.pow(2,31)-1;var He=class{_overlayRef;instance;containerInstance;_afterDismissed=new Y;_afterOpened=new Y;_onAction=new Y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,t){this._overlayRef=t,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,uo))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Na=new v(`MatSnackBarData`);var Ne=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var _o=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var go=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var vo=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var fo=(()=>{class n{snackBarRef=h(He);data=h(Na);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,a){if(e&1){let o=Ob();ba$1(0,`div`,1)(1,`button`,2),Va$1(`click`,function(){Ih(o);let c=kb();return wh(c.action())}),iT(2),Wd()()}if(e&2){let o=kb();bC(2),tf(` `,o.data.action,` `)}}return Xn({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(a,o){a&1&&(ba$1(0,`div`,0),iT(1),Wd(),Ib(2,t,3,1,`div`,1)),a&2&&(bC(),tf(` `,o.data.message,`
`),bC(),Cb(o.hasAction?2:-1))},dependencies:[Lr$1,_o,go,vo],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return n})();var qi=`_mat-snack-bar-enter`;var $i=`_mat-snack-bar-exit`;var yo=(()=>{class n extends Zt{_ngZone=h(ve);_elementRef=h(pt);_changeDetectorRef=h(Ga$1);_platform=h(P);_animationsDisabled=Ct$1();snackBarConfig=h(Ne);_document=h(z);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=h(ae);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Y;_onExit=new Y;_onEnter=new Y;_animationState=`void`;_live;_label;_role;_liveElementId=h(St).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===$i?this._completeExit():t===qi&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?wd(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(qi)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(qi)},200)))}exit(){return this._destroyed?b(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?wd(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd($i)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd($i),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let a=this._label.nativeElement,o=`mdc-snackbar__label`;a.classList.toggle(o,!a.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<e.length;a++){let o=e[a],s=o.getAttribute(`aria-owns`);this._trackedModals.add(o),s?s.indexOf(t)===-1&&o.setAttribute(`aria-owns`,s+` `+t):o.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute(`aria-owns`);if(e){let a=e.replace(this._liveElementId,``).trim();a.length>0?t.setAttribute(`aria-owns`,a):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector(`[aria-hidden]`),a=t.querySelector(`[aria-live]`);if(e&&a){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(o=document.activeElement),e.removeAttribute(`aria-hidden`),a.appendChild(e),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`label`];function e(a,o){}return Xn({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,s){if(o&1&&Py(Jt,7)(t,7),o&2){let c;Ly(c=Fy())&&(s._portalOutlet=c.first),Ly(c=Fy())&&(s._label=c.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,s){o&1&&Va$1(`animationend`,function(h){return s.onAnimationEnd(h.animationName)})(`animationcancel`,function(h){return s.onAnimationEnd(h.animationName)}),o&2&&Ha$1(`mat-snack-bar-container-enter`,s._animationState===`visible`)(`mat-snack-bar-container-exit`,s._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!s._animationsDisabled)},features:[Cy],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,s){o&1&&(ba$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),by(4,e,0,0,`ng-template`,4),Wd(),Ba$1(5,`div`),Wd()()),o&2&&(bC(5),Jn(`aria-live`,s._live)(`role`,s._role)(`id`,s._liveElementId))},dependencies:[Jt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var bo=new v(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new Ne});var Ea=(()=>{class n{_live=h(Co$1);_injector=h(ae);_breakpointObserver=h(so);_parentSnackBar=h(n,{optional:!0,skipSelf:!0});_defaultConfig=h(bo);_animationsDisabled=Ct$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=fo;snackBarContainerComponent=yo;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e=``,a){let o=m(m({},this._defaultConfig),a);return o.data={message:t,action:e},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector,o=ae.create({parent:a||this._injector,providers:[{provide:Ne,useValue:e}]}),s=new Yt(this.snackBarContainerComponent,e.viewContainerRef,o),c=t.attach(s);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let a=m(m(m({},new Ne),this._defaultConfig),e),o=this._createOverlay(a),s=this._attachSnackBarContainer(o,a),c=new He(s,o);if(t instanceof Fr$1){let h=new Bt(t,null,{$implicit:a.data,snackBarRef:c});c.instance=s.attachTemplatePortal(h)}else{let g=new Yt(t,void 0,this._createInjector(a,c));c.instance=s.attachComponentPortal(g).instance}return this._breakpointObserver.observe(Id.HandsetPortrait).pipe(wo$1(o.detachments())).subscribe(h=>{o.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),a.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(c,a),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new Vt;e.direction=t.direction;let a=te(this._injector),o=t.direction===`rtl`,s=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!o||t.horizontalPosition===`end`&&o,c=!s&&t.horizontalPosition!==`center`;return s?a.left(`0`):c?a.right(`0`):a.centerHorizontally(),t.verticalPosition===`top`?a.top(`0`):a.bottom(`0`),e.positionStrategy=a,e.disableAnimations=this._animationsDisabled,ee(this._injector,e)}_createInjector(t,e){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ae.create({parent:a||this._injector,providers:[{provide:He,useValue:e},{provide:Na,useValue:t.data}]})}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var vi=class n{events(i,t,e){let a=`${Te$1(i)}/events?token=${encodeURIComponent(t)}`;return new A(o=>{e(`connecting`);let s=new EventSource(a);return s.onopen=()=>e(`open`),s.onerror=()=>{if(s.readyState===EventSource.CLOSED){e(`closed`);o.error({code:`UNKNOWN`,status:-1,message:`Strumień zdarzeń został zamknięty`})}else e(`connecting`)},s.addEventListener(`state`,c=>{try{o.next({type:`state`,data:JSON.parse(c.data)})}catch{console.error(`Niepoprawne dane zdarzenia state`,c.data)}}),s.addEventListener(`room-closed`,()=>{o.next({type:`room-closed`}),o.complete()}),()=>{s.close(),e(`closed`)}})}static ɵfac=function(t){return new(t||n)};static ɵprov=T({token:n,factory:n.ɵfac,providedIn:`root`})};var gt=class n{api=h(nE);roomEvents=h(vi);sessions=h(sE);snackBar=h(Ea);router=h(uo$1);code=X(``);view=X(`loading`);state=X(null);me=X(null);connection=X(`closed`);errorMessage=X(``);busy=X(!1);now=X(Date.now());settingsOpen=X(!1);playedQuestions=X(this.sessions.playedQuestions);scenarios=X(null);scenarios$;round=of(()=>this.state()?.round??null);myId=of(()=>this.me()?.playerId??this.session?.playerId??null);isHost=of(()=>!!this.state()&&this.state().hostId===this.myId());playersById=of(()=>new Map((this.state()?.players??[]).map(i=>[i.id,i])));ranked=of(()=>{let i=this.state();if(!i)return[];if(!i.ranking.length)return i.players;let t=this.playersById();return i.ranking.map(e=>t.get(e)).filter(Boolean)});myDeadline=of(()=>{let i=this.round(),t=this.myId(),e=t&&i?.blitzIds.includes(t)?i.blitzEndsAt:null;return this.me()?.myDeadline??e??null});secondsLeft=of(()=>{let i=this.myDeadline()??this.round()?.phaseEndsAt;return i?Math.max(0,Math.ceil((Date.parse(i)-this.now())/1e3)):null});phaseSeconds=of(()=>{let i=this.round()?.phase;if(i===`CARDS`)return this.state()?.settings?.cardSeconds??lo$1.DEFAULT_SETTINGS.cardSeconds;if(i===`VA_BANQUE_PICK`)return lo$1.VA_BANQUE_PICK_SECONDS;if(i===`COPY_PICK`)return lo$1.COPY_PICK_SECONDS;let t=this.state()?.settings?.betSeconds??30;return this.round()?.event===`BLITZ`||!!this.myDeadline()?Math.min(t,lo$1.BLITZ_BET_SECONDS):t});session=null;clockOffset=0;closed=!1;autoJoinTried=!1;eventsSub=null;restartTimer=null;meRequest=0;constructor(){let i=setInterval(()=>this.now.set(Date.now()+this.clockOffset),250),t=()=>{document.visibilityState===`visible`&&this.view()===`room`&&this.refresh()};document.addEventListener(`visibilitychange`,t),h(ye).onDestroy(()=>{clearInterval(i),document.removeEventListener(`visibilitychange`,t),this.stopEvents()})}nick(i){return i&&this.playersById().get(i)?.nick||`?`}enter(i){this.stopEvents(),this.code.set(Vi(i)),this.state.set(null),this.me.set(null),this.errorMessage.set(``),this.session=this.sessions.get(this.code()),this.session?this.load():this.sessions.nick&&!this.autoJoinTried?(this.autoJoinTried=!0,this.join(this.sessions.nick)):this.view.set(`join`)}join(i){let t=i.trim();this.view.set(`loading`),this.api.joinRoom(this.code(),t).subscribe({next:e=>{this.sessions.nick=t,this.session={code:this.code(),playerId:e.playerId,playerToken:e.playerToken},this.sessions.save(this.session),this.load()},error:e=>{e.code===`ROOM_NOT_FOUND`?this.fail(TG(e)):(this.errorMessage.set(TG(e)),this.view.set(`join`))}})}retry(){this.enter(this.code())}saveSettings(i){this.sessions.settings=i,this.api.updateSettings(this.code(),i).subscribe({next:t=>this.applyState(t),error:t=>this.toast(TG(t))})}startGame(i){this.sessions.settings=i;let t=i.scenario??this.state()?.settings.scenario,e=t?this.sessions.playedQuestionIds(t):[];this.run(this.api.startGame(this.code(),i,e))}loadScenarios(){return this.scenarios$??=this.api.scenarios().pipe(he$1(i=>this.scenarios.set(i)),Qe(()=>(this.scenarios$=void 0,b([]))),Op(1)),this.scenarios$}resetPlayedQuestions(i){let t=this.sessions.playedQuestionIds(i);this.sessions.setPlayedQuestionIds(i,[]),this.playedQuestions.set(this.sessions.playedQuestions),this.snackBar.open(`Wyczyszczono historię pytań zestawu`,`Cofnij`,{duration:6e3}).onAction().subscribe(()=>{let e=this.sessions.playedQuestionIds(i);this.sessions.setPlayedQuestionIds(i,[.../* @__PURE__ */ new Set([...t,...e])]),this.playedQuestions.set(this.sessions.playedQuestions)})}playAgain(){this.run(this.api.returnToLobby(this.code()))}addBots(i){this.run(this.api.addBots(this.code(),i))}nextRound(){this.run(this.api.nextRound(this.code()))}playCard(i,t){this.run(this.api.playCard(this.code(),i,t))}passCard(){this.run(this.api.passCard(this.code()))}pickVaBanqueTarget(i){this.run(this.api.pickVaBanqueTarget(this.code(),i))}placeBet(i){this.run(this.api.placeBet(this.code(),i))}withdrawBet(){this.run(this.api.withdrawBet(this.code()))}copyBet(i){this.run(this.api.copyBet(this.code(),i))}keepBet(){this.run(this.api.keepBet(this.code()))}closeRoom(){this.busy.set(!0),this.api.closeRoom(this.code()).pipe(Zt$2(()=>this.busy.set(!1))).subscribe({next:()=>this.onClosed(),error:i=>this.toast(TG(i))})}get savedSettings(){return this.sessions.settings}load(){this.api.getState(this.code()).subscribe({next:i=>{this.applyState(i),this.view.set(`room`),this.startEvents()},error:i=>this.onLoadError(i)})}refresh(){this.api.getState(this.code()).subscribe({next:i=>this.applyState(i),error:i=>this.onLoadError(i)})}onLoadError(i){i.code===`UNAUTHORIZED`?(this.sessions.remove(this.code()),this.session=null,this.stopEvents(),this.sessions.nick?this.join(this.sessions.nick):(this.errorMessage.set(TG(i)),this.view.set(`join`))):i.code===`ROOM_NOT_FOUND`?(this.sessions.remove(this.code()),this.fail(TG(i))):this.fail(TG(i))}applyState(i){let t=this.state();t&&i.version<t.version||(this.clockOffset=Date.parse(i.serverTime)-Date.now(),this.now.set(Date.now()+this.clockOffset),this.state.set(i),this.rememberQuestion(i),(!t||t.version!==i.version||!this.me())&&this.refreshMe())}refreshMe(){let i=++this.meRequest;this.api.getMe(this.code()).subscribe({next:t=>{i===this.meRequest&&this.me.set(t)},error:()=>{}})}startEvents(){if(this.eventsSub||!this.session)return;let i=!1;this.eventsSub=this.roomEvents.events(this.code(),this.session.playerToken,t=>{this.connection.set(t),t===`open`&&(i&&this.refresh(),i=!0)}).subscribe({next:t=>t.type===`state`?this.applyState(t.data):this.onClosed(),error:()=>{this.eventsSub=null,this.restartTimer=setTimeout(()=>{this.restartTimer=null,this.view()===`room`&&(this.refresh(),this.startEvents())},lo$1.EVENTS_RESTART_DELAY_MS)}})}stopEvents(){this.eventsSub?.unsubscribe(),this.eventsSub=null,this.restartTimer&&(clearTimeout(this.restartTimer),this.restartTimer=null)}onClosed(){this.stopEvents(),this.sessions.remove(this.code()),this.closed||(this.closed=!0,this.toast(`Pokój został zamknięty`),this.router.navigateByUrl(`/`))}fail(i){this.stopEvents(),this.errorMessage.set(i),this.view.set(`error`)}run(i){this.busy.set(!0),i.pipe(Zt$2(()=>this.busy.set(!1))).subscribe({next:t=>this.applyState(t),error:t=>{this.toast(TG(t)),this.refresh()}})}rememberQuestion(i){let t=i.round?.question.id,e=i.settings.scenario;t&&e&&i.hostId===this.myId()&&this.sessions.addPlayedQuestion(e,t)&&this.playedQuestions.set(this.sessions.playedQuestions)}toast(i){this.snackBar.open(i,`OK`,{duration:4e3})}static ɵfac=function(t){return new(t||n)};static ɵprov=T({token:n,factory:n.ɵfac})};var wo=(n,i)=>i.id;function xo(n,i){if(n&1&&(ba$1(0,`span`,1),iT(1),Wd()),n&2){let t=kb().$index;bC(),tf(``,t+1,`.`)}}function Co(n,i){n&1&&(ba$1(0,`span`,3),iT(1,`(host)`),Wd())}function ko(n,i){n&1&&(ba$1(0,`span`,4),iT(1,`(ty)`),Wd())}function So(n,i){if(n&1&&(ba$1(0,`mat-icon`,8),iT(1),Wd()),n&2){let t=i.$implicit,e=kb(3);My(`title`,e.cardInfo[t].name),bC(),Yy(e.cardInfo[t].icon)}}function Mo(n,i){if(n&1&&(ba$1(0,`span`,5),Tb(1,So,2,2,`mat-icon`,8,bb),Wd()),n&2){let t=kb().$implicit,e=kb();Jn(`aria-label`,`Karty: `+e.cardNames(t)),bC(),_b(t.cards)}}function Io(n,i){if(n&1&&(ba$1(0,`span`,9),iT(1),Wd()),n&2){let e=i[kb().$implicit.id];Ha$1(`zero`,!e),bC(),Yy(e===void 0?`—`:`+`+e)}}function No(n,i){if(n&1&&(ba$1(0,`span`,7),iT(1),Wd()),n&2){let t=kb().$implicit;bC(),Yy(t.score)}}function Eo(n,i){if(n&1&&(ba$1(0,`li`),Ib(1,xo,2,1,`span`,1),ba$1(2,`span`,2),iT(3),Wd(),Ib(4,Co,2,0,`span`,3),Ib(5,ko,2,0,`span`,4),Ib(6,Mo,3,1,`span`,5),Ib(7,Io,2,3,`span`,6),Ib(8,No,2,1,`span`,7),Wd()),n&2){let t,e=i.$implicit,a=kb();Ha$1(`me`,e.id===a.store.myId())(`winner`,a.highlightIds().includes(e.id)),bC(),Cb(a.showScores()?1:-1),bC(2),Yy(e.nick),bC(),Cb(a.showHost()&&e.isHost?4:-1),bC(),Cb(e.id===a.store.myId()?5:-1),bC(),Cb(a.showCards()&&e.cards.length?6:-1),bC(),Cb((t=a.gains())?7:-1,t),bC(),Cb(a.showScores()?8:-1)}}var ie=class n{store=h(gt);players=gi.required();showScores=gi(!1);showHost=gi(!1);highlightIds=gi([]);gains=gi(null);showCards=gi(!1);cardInfo=lo$1.CARDS;cardNames(i){return i.cards.map(t=>lo$1.CARDS[t].name).join(`, `)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-player-list`]],inputs:{players:[1,`players`],showScores:[1,`showScores`],showHost:[1,`showHost`],highlightIds:[1,`highlightIds`],gains:[1,`gains`],showCards:[1,`showCards`]},decls:3,vars:4,consts:[[3,`me`,`winner`],[1,`place`],[1,`nick`],[1,`tag`],[1,`you`],[`role`,`img`,1,`cards`],[1,`gain`,3,`zero`],[1,`score`],[`aria-hidden`,`true`,3,`title`],[1,`gain`]],template:function(t,e){t&1&&(ba$1(0,`ol`),Tb(1,Eo,9,11,`li`,0,wo),Wd()),t&2&&(Ha$1(`ranked`,e.showScores())(`compact`,e.gains()),bC(),_b(e.players()))},dependencies:[r8,n8],styles:[`@charset "UTF-8";ol[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;background:var(--%NS%mat-sys-surface-container)}li.me[_ngcontent-%COMP%]{outline:1px solid var(--%NS%mat-sys-primary);outline-offset:-1px}li.winner[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container)}.place[_ngcontent-%COMP%]{width:24px;color:var(--%NS%mat-sys-on-surface-variant)}.nick[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-large)}.tag[_ngcontent-%COMP%], .you[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-medium)}.cards[_ngcontent-%COMP%]{display:inline-flex;gap:2px;color:var(--%NS%mat-sys-on-surface-variant)}.cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.score[_ngcontent-%COMP%]{margin-left:auto;font:var(--%NS%mat-sys-title-medium)}.gain[_ngcontent-%COMP%]{margin-left:auto;min-width:32px;text-align:right;font:var(--%NS%mat-sys-label-medium);color:var(--%NS%mat-sys-primary)}.gain.zero[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.gain[_ngcontent-%COMP%] + .score[_ngcontent-%COMP%]{margin-left:0;width:40px;text-align:right}.ranked[_ngcontent-%COMP%]{--%NS%scale: 1.25}.ranked[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%], .ranked[_ngcontent-%COMP%]   .nick[_ngcontent-%COMP%]{font-size:calc(var(--%NS%mat-sys-body-large-size) * var(--%NS%scale));line-height:calc(var(--%NS%mat-sys-body-large-line-height) * var(--%NS%scale))}.ranked[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%], .ranked[_ngcontent-%COMP%]   .gain[_ngcontent-%COMP%]{font-size:calc(var(--%NS%mat-sys-label-medium-size) * var(--%NS%scale));line-height:calc(var(--%NS%mat-sys-label-medium-line-height) * var(--%NS%scale))}.ranked[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{font-size:calc(var(--%NS%mat-sys-title-medium-size) * var(--%NS%scale));line-height:calc(var(--%NS%mat-sys-title-medium-line-height) * var(--%NS%scale))}.ranked.compact[_ngcontent-%COMP%]{--%NS%scale: 1.125}.compact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 12px}.ranked[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{width:calc(24px * var(--%NS%scale))}.ranked[_ngcontent-%COMP%]   .gain[_ngcontent-%COMP%]{min-width:calc(32px * var(--%NS%scale))}.ranked[_ngcontent-%COMP%]   .gain[_ngcontent-%COMP%] + .score[_ngcontent-%COMP%]{width:calc(40px * var(--%NS%scale))}`]})};var Ro=()=>[];function Oo(n,i){if(n&1){let t=Ob();ba$1(0,`button`,5),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.store.playAgain())}),ba$1(1,`mat-icon`),iT(2,`replay`),Wd(),iT(3,` Zagraj ponownie `),Wd()}if(n&2){let t=kb();My(`disabled`,t.store.busy())}}function To(n,i){n&1&&(ba$1(0,`p`,4),iT(1,`Host może rozpocząć kolejną grę.`),Wd())}var fi=class n{store=h(gt);winners=of(()=>(this.store.state()?.winnerIds??[]).map(i=>this.store.nick(i)).join(`, `));iWon=of(()=>(this.store.state()?.winnerIds??[]).includes(this.store.myId()??``));static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-finished`]],decls:11,vars:7,consts:[[1,`winner`],[1,`app-scroll`],[3,`players`,`showScores`,`highlightIds`],[`matButton`,`filled`,3,`disabled`],[1,`hint`],[`matButton`,`filled`,3,`click`,`disabled`]],template:function(t,e){t&1&&(ba$1(0,`div`,0)(1,`mat-icon`),iT(2,`emoji_events`),Wd(),ba$1(3,`h2`),iT(4),Wd(),ba$1(5,`p`),iT(6),Wd()(),ba$1(7,`div`,1),Ba$1(8,`app-player-list`,2),Wd(),Ib(9,Oo,4,1,`button`,3)(10,To,2,0,`p`,4)),t&2&&(bC(4),Yy(e.winners()),bC(2),Yy(e.iWon()?`Wygrywasz!`:`wygrywa grę`),bC(2),My(`players`,e.store.ranked())(`showScores`,!0)(`highlightIds`,e.store.state()?.winnerIds??mT(6,Ro)),bC(),Cb(e.store.isHost()?9:10))},dependencies:[zr$1,Lr$1,r8,n8,ie],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}.winner[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .hint[_ngcontent-%COMP%]{flex:none}.winner[_ngcontent-%COMP%]{text-align:center;padding-top:8px;color:var(--%NS%mat-sys-primary)}.winner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px}.winner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-large);margin:0}.winner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--%NS%mat-sys-on-surface-variant)}.hint[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%mat-sys-on-surface-variant);margin:0}`]})};var Re=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ki=(()=>{class n extends Zt{_elementRef=h(pt);_focusTrapFactory=h(xo$1);_config;_interactivityChecker=h(co$1);_ngZone=h(ve);_focusMonitor=h(En);_renderer=h(jr$1);_changeDetectorRef=h(Ga$1);_injector=h(ae);_platform=h(P);_document=h(z);_portalOutlet;_focusTrapped=new Y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=h(Re,{optional:!0})||new Re,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),s(),t.removeAttribute(`tabindex`)},o=this._renderer.listen(t,`blur`,a),s=this._renderer.listen(t,`mousedown`,a)})),t.focus(e)}_focusByCssSelector(t,e){let a=this._elementRef.nativeElement.querySelector(t);a&&this._forceFocus(a,e)}_trapFocus(t){this._isDestroyed||wd(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let a=ro(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=ro();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ro()))}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,a){}return Xn({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(a,o){if(a&1&&Py(Jt,7),a&2){let s;Ly(s=Fy())&&(o._portalOutlet=s.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(a,o){a&2&&Jn(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[Cy],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&by(0,t,0,0,`ng-template`,0)},dependencies:[Jt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var We=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Nr$1(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,t=``){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}};var Do=new v(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=h(ae);return()=>Se(n)}});var Po=new v(`DialogData`);var Ao=new v(`DefaultDialogConfig`);function Bo(n){let i=X(n),t=new me;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var Ra=(()=>{class n{_injector=h(ae);_defaultOptions=h(Ao,{optional:!0});_parentDialog=h(n,{optional:!0,skipSelf:!0});_overlayContainer=h(hi);_idGenerator=h(St);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Y;_afterOpenedAtThisLevel=new Y;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=h(Do);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Eo$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Jc(void 0)));open(t,e){let a=this._defaultOptions||new Re;e=m(m({},a),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),s=ee(this._injector,o),c=new We(s,e),h=this._attachContainer(s,c,e);if(c.containerInstance=h,!this.openDialogs.length){let g=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(ot$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(g)}):this._hideNonDialogContentFromAssistiveTechnology(g)}return this._attachDialogContent(t,c,h,e),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){Qi(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Qi(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Qi(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Vt({positionStrategy:t.positionStrategy||te().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,a){let o=a.injector||a.viewContainerRef?.injector,s=[{provide:Re,useValue:a},{provide:We,useValue:e},{provide:ke,useValue:t}],c;a.container?typeof a.container==`function`?c=a.container:(c=a.container.type,s.push(...a.container.providers(a))):c=Ki;let h=new Yt(c,a.viewContainerRef,ae.create({parent:o||this._injector,providers:s}));return t.attach(h).instance}_attachDialogContent(t,e,a,o){if(t instanceof Fr$1){let s=this._createInjector(o,e,a,void 0),c={$implicit:o.data,dialogRef:e};o.templateContext&&(c=m(m({},c),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),a.attachTemplatePortal(new Bt(t,null,c,s))}else{let s=this._createInjector(o,e,a,this._injector),c=a.attachComponentPortal(new Yt(t,o.viewContainerRef,s,null,o.bindings));e.componentRef=c,e.componentInstance=c.instance}}_createInjector(t,e,a,o){let s=t.injector||t.viewContainerRef?.injector,c=[{provide:Po,useValue:t.data},{provide:We,useValue:e}];return t.providers&&(typeof t.providers==`function`?c.push(...t.providers(e,t,a)):c.push(...t.providers)),t.direction&&(!s||!s.get(rM,null,{optional:!0}))&&c.push({provide:rM,useValue:Bo(t.direction)}),ae.create({parent:s||o,providers:c})}_removeOpenDialog(t,e){let a=this.openDialogs.indexOf(t);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute(`aria-hidden`,o):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let a=e.length-1;a>-1;a--){let o=e[a];o!==t&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();function Qi(n,i){let t=n.length;for(;t--;)i(n[t])}var Oa=`_mat-bottom-sheet-enter`;var Ta=`_mat-bottom-sheet-exit`;var Vo=(()=>{class n extends Ki{_breakpointSubscription;_animationsDisabled=Ct$1();_animationState=`void`;_animationStateChanged=new me;_destroyed=!1;constructor(){super();let t=h(so);this._breakpointSubscription=t.observe([Id.Medium,Id.Large,Id.XLarge]).subscribe(()=>{let e=this._elementRef.nativeElement.classList;e.toggle(`mat-bottom-sheet-container-medium`,t.isMatched(Id.Medium)),e.toggle(`mat-bottom-sheet-container-large`,t.isMatched(Id.Large)),e.toggle(`mat-bottom-sheet-container-xlarge`,t.isMatched(Id.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(Oa))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(Ta))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,e,a){if(a===this._elementRef.nativeElement){let o=e===Oa;(o||e===Ta)&&this._animationStateChanged.emit({toState:o?`visible`:`hidden`,phase:t?`start`:`done`})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,a){}return Xn({type:n,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(a,o){a&1&&Va$1(`animationstart`,function(c){return o._handleAnimationEvent(!0,c.animationName,c.target)})(`animationend`,function(c){return o._handleAnimationEvent(!1,c.animationName,c.target)})(`animationcancel`,function(c){return o._handleAnimationEvent(!1,c.animationName,c.target)}),a&2&&(Jn(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-label`,o._config.ariaLabel),Ha$1(`mat-bottom-sheet-container-animations-enabled`,!o._animationsDisabled)(`mat-bottom-sheet-container-enter`,o._animationState===`visible`)(`mat-bottom-sheet-container-exit`,o._animationState===`hidden`))},features:[Cy],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&by(0,t,0,0,`ng-template`,0)},dependencies:[Jt],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));
  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));
  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Ji=new v(`MatBottomSheetData`);var Zi=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var Oe=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new Y;_result;_closeFallbackTimeout;constructor(i,t,e){this._ref=i,this.containerInstance=e,this.disableClose=t.disableClose,e._animationStateChanged.pipe(xe(a=>a.phase===`done`&&a.toState===`visible`),ot$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(xe(a=>a.phase===`done`&&a.toState===`hidden`),ot$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),i.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),xE(this.backdropClick(),this.keydownEvents().pipe(xe(a=>a.keyCode===27))).subscribe(a=>{!this.disableClose&&(a.type!==`keydown`||!Nr$1(a))&&(a.preventDefault(),this.dismiss())})}dismiss(i){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(xe(t=>t.phase===`start`),ot$1(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=i,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var zo=new v(`mat-bottom-sheet-default-options`);var oe=(()=>{class n{_injector=h(ae);_parentBottomSheet=h(n,{optional:!0,skipSelf:!0});_animationsDisabled=Ct$1();_defaultOptions=h(zo,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=h(Ra);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,e){let a=m(m({},this._defaultOptions||new Zi),e),o;return this._dialog.open(t,P$1(m({},a),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:Vo,scrollStrategy:a.scrollStrategy||Se(this._injector),positionStrategy:te(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:o}),providers:(s,c,h)=>(o=new Oe(s,a,h),[{provide:Oe,useValue:o},{provide:Ji,useValue:a.data}])})),o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===o&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(e){return new(e||n)};static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var an=new v(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var tn=new v(`MatChipAvatar`);var Da=new v(`MatChipLeadingIcon`);var Pa=new v(`MatChipTrailingIcon`);var Aa=new v(`MatChipEdit`);var Ba=new v(`MatChipRemove`);var on=new v(`MatChip`);var Va=(()=>{class n{_elementRef=h(pt);_parentChip=h(on);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){h(Q_).load(Rr$1),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(e,a){e&2&&(Jn(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),Ha$1(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,zr$2],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:gH(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var za=(()=>{class n extends Va{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Yg(n)))(a||n)}})();static ɵdir=dn({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(e,a){e&1&&Va$1(`click`,function(s){return a._handleClick(s)})(`keydown`,function(s){return a._handleKeydown(s)}),e&2&&(Jn(`tabindex`,a._getTabindex()),Ha$1(`mdc-evolution-chip__action--presentational`,!1))},features:[Cy]})}return n})();var Fa=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],hostAttrs:[`role`,`img`,1,`mat-mdc-chip-avatar`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--primary`],features:[rv([{provide:tn,useExisting:n}])]})}return n})();var en=(()=>{class n{_changeDetectorRef=h(Ga$1);_elementRef=h(pt);_tagName=h(lH);_ngZone=h(ve);_focusMonitor=h(En);_globalRippleOptions=h(On,{optional:!0});_document=h(z);_onFocus=new Y;_onBlur=new Y;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ct$1();_allAvatars;_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=h(St).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new me;destroyed=new me;basicChipAttrName=`mat-basic-chip`;avatar;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=h(Tr$1);_injector=h(ae);constructor(){let t=h(Q_);t.load(Rr$1),t.load(Rz),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=xE(this._allAvatars.changes,this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasLeadingGraphic(){return!!(this.leadingIcon||this.avatar)}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let a=e._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``],[`mat-chip-leading-icon`],[``,`matChipLeadingIcon`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],e=[`*`,`mat-chip-avatar, [matChipAvatar], mat-chip-leading-icon, [matChipLeadingIcon]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(s,c){s&1&&(ba$1(0,`span`,3),Xd$1(1,1),Wd())}function o(s,c){s&1&&(ba$1(0,`span`,7),Xd$1(1,2),Wd())}return Xn({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(c,h,g){if(c&1&&Jd(g,tn,5)(g,Da,5)(g,Aa,5)(g,Pa,5)(g,Ba,5)(g,tn,5)(g,Da,5)(g,Pa,5)(g,Aa,5)(g,Ba,5),c&2){let _;Ly(_=Fy())&&(h.avatar=_.first),Ly(_=Fy())&&(h.leadingIcon=_.first),Ly(_=Fy())&&(h.editIcon=_.first),Ly(_=Fy())&&(h.trailingIcon=_.first),Ly(_=Fy())&&(h.removeIcon=_.first),Ly(_=Fy())&&(h._allAvatars=_),Ly(_=Fy())&&(h._allLeadingIcons=_),Ly(_=Fy())&&(h._allTrailingIcons=_),Ly(_=Fy())&&(h._allEditIcons=_),Ly(_=Fy())&&(h._allRemoveIcons=_)}},viewQuery:function(c,h){if(c&1&&Py(za,5),c&2){let g;Ly(g=Fy())&&(h.primaryAction=g.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:33,hostBindings:function(c,h){c&1&&Va$1(`keydown`,function(_){return h._handleKeydown(_)}),c&2&&(xy(`id`,h.id),Jn(`role`,h.role)(`aria-label`,h.ariaLabel),ef(`mat-`+(h.color||`primary`)),Ha$1(`mdc-evolution-chip`,!h._isBasicChip)(`mdc-evolution-chip--disabled`,h.disabled)(`mdc-evolution-chip--with-trailing-action`,h._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,h._hasLeadingGraphic())(`mdc-evolution-chip--with-primary-icon`,h.leadingIcon||h.avatar)(`mdc-evolution-chip--with-avatar`,h.avatar)(`mat-mdc-chip-with-avatar`,h.avatar)(`mat-mdc-chip-with-leading-icon`,h.leadingIcon)(`mat-mdc-chip-highlighted`,h.highlighted)(`mat-mdc-chip-disabled`,h.disabled)(`mat-mdc-basic-chip`,h._isBasicChip)(`mat-mdc-standard-chip`,!h._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,h._hasTrailingIcon())(`_mat-animation-noopable`,h._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,zr$2],highlighted:[2,`highlighted`,`highlighted`,zr$2],disableRipple:[2,`disableRipple`,`disableRipple`,zr$2],disabled:[2,`disabled`,`disabled`,zr$2]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[rv([{provide:on,useExisting:n}])],ngContentSelectors:e,decls:9,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(c,h){c&1&&(Kd(t),Ba$1(0,`span`,0),ba$1(1,`span`,1)(2,`span`,2),Ib(3,a,2,0,`span`,3),ba$1(4,`span`,4),Xd$1(5),Ba$1(6,`span`,5),Wd(),Ba$1(7,`span`,6),Wd()(),Ib(8,o,2,0,`span`,7)),c&2&&(bC(3),Cb(h._hasLeadingGraphic()?3:-1),bC(5),Cb(h._hasTrailingIcon()?8:-1))},dependencies:[Va],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-leading-icon {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-leading-icon,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}
.mat-mdc-standard-chip .mat-mdc-chip-avatar {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var rn=(()=>{class n extends en{_defaultOptions=h(an,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=t,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(t){this._setSelectedState(t,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new me;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(t=!1){return this._setSelectedState(!this.selected,t,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon||this.avatar?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(t,e,a){t!==this.selected&&(this._selected=t,a&&this.selectionChange.emit({source:this,isUserInput:e,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Yg(n)))(a||n)}})();static ɵcmp=(function(){let t=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``],[`mat-chip-leading-icon`],[``,`matChipLeadingIcon`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],e=[`*`,`mat-chip-avatar, [matChipAvatar], mat-chip-leading-icon, [matChipLeadingIcon]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(s,c){s&1&&(ba$1(0,`span`,3),Xd$1(1,1),ba$1(2,`span`,8),kh(),ba$1(3,`svg`,9),Ba$1(4,`path`,10),Wd()()())}function o(s,c){s&1&&(ba$1(0,`span`,7),Xd$1(1,2),Wd())}return Xn({type:n,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:39,hostBindings:function(c,h){c&2&&(xy(`id`,h.id),Jn(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,h.role),Ha$1(`mdc-evolution-chip`,!h._isBasicChip)(`mdc-evolution-chip--filter`,!h._isBasicChip)(`mdc-evolution-chip--selectable`,!h._isBasicChip)(`mat-mdc-chip-selected`,h.selected)(`mat-mdc-chip-multiple`,h._chipListMultiple)(`mat-mdc-chip-disabled`,h.disabled)(`mat-mdc-chip-with-avatar`,h.avatar)(`mat-mdc-chip-with-leading-icon`,h.leadingIcon)(`mdc-evolution-chip--disabled`,h.disabled)(`mdc-evolution-chip--selected`,h.selected)(`mdc-evolution-chip--selecting`,!h._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,h._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,h.leadingIcon||h.avatar)(`mdc-evolution-chip--with-primary-graphic`,h._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,h.avatar)(`mat-mdc-chip-highlighted`,h.highlighted)(`mat-mdc-chip-with-trailing-icon`,h._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,zr$2],selected:[2,`selected`,`selected`,zr$2]},outputs:{selectionChange:`selectionChange`},features:[rv([{provide:en,useExisting:n},{provide:on,useExisting:n}]),Cy],ngContentSelectors:e,decls:9,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(c,h){c&1&&(Kd(t),Ba$1(0,`span`,0),ba$1(1,`span`,1)(2,`button`,2),Ib(3,a,5,0,`span`,3),ba$1(4,`span`,4),Xd$1(5),Ba$1(6,`span`,5)(7,`span`,6),Wd()()(),Ib(8,o,2,0,`span`,7)),c&2&&(bC(2),My(`_allowFocusWhenDisabled`,!0),Jn(`aria-description`,h.ariaDescription)(`aria-label`,h.ariaLabel)(`aria-selected`,h.ariaSelected),bC(),Cb(h._hasLeadingGraphic()?3:-1),bC(5),Cb(h._hasTrailingIcon()?8:-1))},dependencies:[za],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-leading-icon {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-leading-icon,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}
.mat-mdc-standard-chip .mat-mdc-chip-avatar {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var Fo=(()=>{class n{_elementRef=h(pt);_changeDetectorRef=h(Ga$1);_dir=h(rM,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Y;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new pa$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Jc(null),fe(()=>xE(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains(`mat-mdc-chip`))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Jc(this._chips)).subscribe(t=>{let e=[];t.forEach(a=>a._getActions().forEach(o=>e.push(o))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new In(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(wo$1(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(wo$1(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Jc(null),wo$1(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(wo$1(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),o=t.chip._hasFocus(),s=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),c=o||s;this._isValidIndex(a)&&c&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return Xn({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(a,o,s){if(a&1&&Jd(s,en,5),a&2){let c;Ly(c=Fy())&&(o._chips=c)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(a,o){a&1&&Va$1(`keydown`,function(c){return o._handleKeydown(c)}),a&2&&Jn(`role`,o.role)},inputs:{disabled:[2,`disabled`,`disabled`,zr$2],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:gH(e)]},ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(Kd(),qd(0,`div`,0),Xd$1(1),Yd())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var nn=class{source;value;constructor(i,t){this.source=i,this.value=t}};var Lo={provide:ji$1,useExisting:Rs$1(()=>sn),multi:!0};var sn=(()=>{class n extends Fo{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=h(an,{optional:!0});get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._syncListboxProperties()}_multiple=!1;get selected(){let t=this._chips.toArray().filter(e=>e.selected);return this.multiple?t:t[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(t){this._selectable=t,this._syncListboxProperties()}_selectable=!0;compareWith=(t,e)=>t===e;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(t=>t.selectionChange)}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}get value(){return this._value}set value(t){this._chips&&this._chips.length&&this._setSelectionByValue(t,!1),this._value=t}_value;change=new me;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Jc(null),wo$1(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(wo$1(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(wo$1(this._destroyed)).subscribe(t=>{this.multiple||this._chips.forEach(e=>{e!==t.source&&e._setSelectedState(!1,!1,!1)}),t.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let t=this._getFirstSelectedChip();t&&!t.disabled?t.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(t){t!=null?this.value=t:this.value=void 0}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_setSelectionByValue(t,e=!0){this._clearSelection(),Array.isArray(t)?t.forEach(a=>this._selectValue(a,e)):this._selectValue(t,e)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(t){t.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let t=null;Array.isArray(this.selected)?t=this.selected.map(e=>e.value):t=this.selected?this.selected.value:void 0,this._value=t,this.change.emit(new nn(this,t)),this._onChange(t),this._changeDetectorRef.markForCheck()}_clearSelection(t){this._chips.forEach(e=>{e!==t&&e.deselect()})}_selectValue(t,e){let a=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,t));return a&&(e?a.selectViaInteraction():a.select()),a}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(t=>{t._chipListMultiple=this.multiple,t.chipListSelectable=this._selectable,t._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,t._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(t){return!1}static ɵfac=(()=>{let t;return function(a){return(t||(t=Yg(n)))(a||n)}})();static ɵcmp=(function(){return Xn({type:n,selectors:[[`mat-chip-listbox`]],contentQueries:function(a,o,s){if(a&1&&Jd(s,rn,5),a&2){let c;Ly(c=Fy())&&(o._chips=c)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(a,o){a&1&&Va$1(`focus`,function(){return o.focus()})(`blur`,function(){return o._blur()})(`keydown`,function(c){return o._keydown(c)}),a&2&&(xy(`tabIndex`,o.disabled||o.empty?-1:o.tabIndex),Jn(`role`,o.role)(`aria-required`,o.role?o.required:null)(`aria-disabled`,o.disabled.toString())(`aria-multiselectable`,o.multiple)(`aria-orientation`,o.ariaOrientation),Ha$1(`mat-mdc-chip-list-disabled`,o.disabled)(`mat-mdc-chip-list-required`,o.required))},inputs:{multiple:[2,`multiple`,`multiple`,zr$2],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,zr$2],compareWith:`compareWith`,required:[2,`required`,`required`,zr$2],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,zr$2],value:`value`},outputs:{change:`change`},features:[rv([Lo]),Cy],ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(Kd(),qd(0,`div`,0),Xd$1(1),Yd())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var La=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({providers:[ea,{provide:an,useValue:{separatorKeyCodes:[13]}}],imports:[Vr$1,Kv]})}return n})();var ja=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=Zt$1(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Zt$1(t)}_inset=!1;static ɵfac=function(e){return new(e||n)};static ɵcmp=Xn({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(e,a){e&2&&(Jn(`aria-orientation`,a.vertical?`vertical`:`horizontal`),Ha$1(`mat-divider-vertical`,a.vertical)(`mat-divider-horizontal`,!a.vertical)(`mat-divider-inset`,a.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(e,a){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var Ha=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[Kv]})}return n})();var Wa=(()=>{class n{labelPosition=`after`;static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return Xn({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(a,o){a&2&&Ha$1(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,o){a&1&&(Kd(),Xd$1(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return n})();var Wo=new v(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var yi=class{source;checked;constructor(i,t){this.source=i,this.checked=t}};var cn=(()=>{class n{_elementRef=h(pt);_focusMonitor=h(En);_changeDetectorRef=h(Ga$1);defaults=h(Wo);_injector=h(ae);_signalFormField=null;_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new yi(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ct$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new me;toggleChange=new me;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(Q_).load(Rr$1);let t=h(new $r$1(`tabindex`),{optional:!0}),e=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=e.color||`accent`,this.id=this._uniqueId=h(St).getId(`mat-mdc-slide-toggle-`),this.hideIcon=e.hideIcon??!1,this.disabledInteractive=e.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(Ur$1,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t===`keyboard`||t===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new yi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`switch`],e=[`*`];function a(o,s){o&1&&(ba$1(0,`span`,11),kh(),ba$1(1,`svg`,13),Ba$1(2,`path`,14),Wd(),ba$1(3,`svg`,15),Ba$1(4,`path`,16),Wd()())}return Xn({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(s,c){if(s&1&&Py(t,5),s&2){let h;Ly(h=Fy())&&(c._switchElement=h.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(s,c){s&2&&(xy(`id`,c.id),Jn(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),ef(c.color?`mat-`+c.color:``),Ha$1(`mat-mdc-slide-toggle-focused`,c._focused)(`mat-mdc-slide-toggle-checked`,c.checked)(`mat-slide-toggle-full-width`,c.fullWidth)(`_mat-animation-noopable`,c._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,zr$2],color:`color`,disabled:[2,`disabled`,`disabled`,zr$2],fullWidth:[2,`fullWidth`,`fullWidth`,zr$2],disableRipple:[2,`disableRipple`,`disableRipple`,zr$2],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:gH(o)],checked:[2,`checked`,`checked`,zr$2],hideIcon:[2,`hideIcon`,`hideIcon`,zr$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zr$2]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[rv([{provide:ji$1,useExisting:Rs$1(()=>n),multi:!0},{provide:le,useExisting:n,multi:!0}]),Zn],ngContentSelectors:e,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(s,c){if(s&1&&(Kd(),ba$1(0,`div`,1)(1,`button`,2,0),Va$1(`click`,function(){return c._handleClick()}),Ba$1(3,`div`,3)(4,`span`,4),ba$1(5,`span`,5)(6,`span`,6)(7,`span`,7),Ba$1(8,`span`,8),Wd(),ba$1(9,`span`,9),Ba$1(10,`span`,10),Wd(),Ib(11,a,5,0,`span`,11),Wd()()(),ba$1(12,`label`,12),Va$1(`click`,function(g){return g.stopPropagation()}),Xd$1(13),Wd()()),s&2){let h=jb(2);My(`labelPosition`,c.labelPosition),bC(),Ha$1(`mdc-switch--selected`,c.checked)(`mdc-switch--unselected`,!c.checked)(`mdc-switch--checked`,c.checked)(`mdc-switch--disabled`,c.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,c.disabledInteractive),My(`tabIndex`,c.disabled&&!c.disabledInteractive?-1:c.tabIndex)(`disabled`,c.disabled&&!c.disabledInteractive),Jn(`id`,c.buttonId)(`name`,c.name)(`aria-label`,c.ariaLabel)(`aria-labelledby`,c._getAriaLabelledBy())(`aria-describedby`,c.ariaDescribedby)(`aria-required`,c.required||null)(`aria-checked`,c.checked)(`aria-disabled`,c.disabled&&c.disabledInteractive?`true`:null),bC(9),My(`matRippleTrigger`,h)(`matRippleDisabled`,c.disableRipple||c.disabled)(`matRippleCentered`,!0),bC(),Cb(c.hideIcon?-1:11),bC(),My(`for`,c.buttonId),Jn(`id`,c._labelId)}},dependencies:[Xd,Wa],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return n})();var Xa=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[cn,Kv]})}return n})();var N=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(N||{});var Te=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Te||{});var ln=new v(`_MatSlider`);var Ua=new v(`_MatSliderThumb`);var Uo=new v(`_MatSliderRangeThumb`);var Ga=new v(`_MatSliderVisualThumb`);var Go=(()=>{class n{_cdr=h(Ga$1);_ngZone=h(ve);_slider=h(ln);_renderer=h(jr$1);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=h(pt).nativeElement;_platform=h(P);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,a=this._renderer;this._listenerCleanups=[a.listen(e,`pointermove`,this._onPointerMove),a.listen(e,`pointerdown`,this._onDragStart),a.listen(e,`pointerup`,this._onDragEnd),a.listen(e,`pointerleave`,this._onMouseLeave),a.listen(e,`focus`,this._onFocus),a.listen(e,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),a=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=a,a?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(t){return t?.state===tt.FADING_IN||t?.state===tt.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===N.START?N.END:N.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===N.START?N.END:N.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`knob`],e=[`valueIndicatorContainer`];function a(o,s){if(o&1&&(ba$1(0,`div`,2,1)(2,`div`,5)(3,`span`,6),iT(4),Wd()()()),o&2){let c=kb();bC(4),Yy(c.valueIndicatorText)}}return Xn({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(s,c){if(s&1&&Py(Xd,5)(t,5)(e,5),s&2){let h;Ly(h=Fy())&&(c._ripple=h.first),Ly(h=Fy())&&(c._knob=h.first),Ly(h=Fy())&&(c._valueIndicatorContainer=h.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[rv([{provide:Ga,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(s,c){s&1&&(Ib(0,a,5,1,`div`,2),Ba$1(1,`div`,3,0)(3,`div`,4)),s&2&&(Cb(c.discrete?0:-1),bC(3),My(`matRippleDisabled`,!0))},dependencies:[Xd],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})})()}return n})();var bi=(()=>{class n{_ngZone=h(ve);_cdr=h(Ga$1);_elementRef=h(pt);_dir=h(rM,{optional:!0});_globalRippleOptions=h(On,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(N.END),a=this._getInput(N.START);e&&(e.disabled=this._disabled),a&&(a.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(N.END),a=this._getInput(N.START),o=e.value,s=a.value;a.min=t.new,e.min=Math.max(t.new,a.value),a.max=Math.min(e.max,e.value),a._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,a):this._onTranslateXChangeBySideEffect(a,e),o!==e.value&&this._onValueChange(e),s!==a.value&&this._onValueChange(a)}_updateMinNonRange(t){let e=this._getInput(N.END);if(e){let a=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),a!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(N.END),a=this._getInput(N.START),o=e.value,s=a.value;e.max=t.new,a.max=Math.min(t.new,e.value),e.min=a.value,e._updateWidthInactive(),a._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(a,e):this._onTranslateXChangeBySideEffect(e,a),o!==e.value&&this._onValueChange(e),s!==a.value&&this._onValueChange(a)}_updateMaxNonRange(t){let e=this._getInput(N.END);if(e){let a=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),a!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(N.END),e=this._getInput(N.START),a=t.value,o=e.value,s=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<s?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),a!==t.value&&this._onValueChange(t),o!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(N.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks=[];_noopAnimations=Ct$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=of(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=h(P);constructor(){h(Q_).load(Rr$1);let t=this._isRtl();mH(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(N.END),e=this._getInput(N.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let a=this._getThumb(N.END);this._rippleRadius=a._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(N.END),e=this._getInput(N.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(N.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(N.START)._isActive||this._getThumb(N.END)._isActive}_getValue(t=N.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(N.START)?._skipUIUpdate||this._getInput(N.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(N.END),e=this._getInput(N.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(N.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(N.START),e=this._getInput(N.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),a=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),a._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===N.END?N.END:N.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute(`aria-valuetext`,e),this.discrete){t.thumbPosition===N.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let a=this._getThumb(t.thumbPosition);e.length<3?a._hostElement.classList.add(`mdc-slider__thumb--short-value`):a._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let t=this._getInput(N.END),e=this._getInput(N.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,a=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*a}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let a=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-e.translateX}px`,transformOrigin:`right`,transform:`scaleX(${a})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${a})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||!this._cachedWidth||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),a=Math.max(Math.round((e-this.min)/t),0)+1,o=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?a++:o++,this._tickMarks=Array(a).fill(Te.ACTIVE).concat(Array(o).fill(Te.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),a=this._getValue(N.START),o=Math.max(Math.round((a-this.min)/t),0),s=Math.max(Math.round((e-a)/t)+1,0),c=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(o).fill(Te.INACTIVE).concat(Array(s).fill(Te.ACTIVE),Array(c).fill(Te.INACTIVE))}_getInput(t){if(t===N.END&&this._input)return this._input;if(this._inputs?.length)return t===N.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===N.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(t,e){let a=e.width/2,o=e.x+a,s=e.y+a,c=t.clientX-o,h=t.clientY-s;return Math.pow(c,2)+Math.pow(h,2)<Math.pow(a,2)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`trackActive`],e=[`*`];function a(h,g){if(h&1&&Ba$1(0,`div`),h&2){let _=g.$implicit,E=g.$index,j=kb(3);ef(_===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),Hy(`transform`,j._calcTickMarkTransform(E))}}function o(h,g){if(h&1&&Tb(0,a,1,4,`div`,8,Sb),h&2){let _=kb(2);_b(_._tickMarks)}}function s(h,g){if(h&1&&(ba$1(0,`div`,6,1),Ib(2,o,2,0),Wd()),h&2){let _=kb();bC(2),Cb(_._cachedWidth?2:-1)}}function c(h,g){if(h&1&&Ba$1(0,`mat-slider-visual-thumb`,7),h&2){let _=kb();My(`discrete`,_.discrete)(`thumbPosition`,1)(`valueIndicatorText`,_.startValueIndicatorText)}}return Xn({type:n,selectors:[[`mat-slider`]],contentQueries:function(g,_,E){if(g&1&&Jd(E,Ua,5)(E,Uo,4),g&2){let j;Ly(j=Fy())&&(_._input=j.first),Ly(j=Fy())&&(_._inputs=j)}},viewQuery:function(g,_){if(g&1&&Py(t,5)(Ga,5),g&2){let E;Ly(E=Fy())&&(_._trackActive=E.first),Ly(E=Fy())&&(_._thumbs=E)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(g,_){g&2&&(ef(`mat-`+(_.color||`primary`)),Ha$1(`mdc-slider--range`,_._isRange)(`mdc-slider--disabled`,_.disabled)(`mdc-slider--discrete`,_.discrete)(`mdc-slider--tick-marks`,_.showTickMarks)(`_mat-animation-noopable`,_._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,zr$2],discrete:[2,`discrete`,`discrete`,zr$2],showTickMarks:[2,`showTickMarks`,`showTickMarks`,zr$2],min:[2,`min`,`min`,gH],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,zr$2],max:[2,`max`,`max`,gH],step:[2,`step`,`step`,gH],displayWith:`displayWith`},exportAs:[`matSlider`],features:[rv([{provide:ln,useExisting:n}])],ngContentSelectors:e,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(g,_){g&1&&(Kd(),Xd$1(0),ba$1(1,`div`,2),Ba$1(2,`div`,3),ba$1(3,`div`,4),Ba$1(4,`div`,5,0),Wd(),Ib(6,s,3,1,`div`,6),Wd(),Ib(7,c,1,3,`mat-slider-visual-thumb`,7),Ba$1(8,`mat-slider-visual-thumb`,7)),g&2&&(bC(6),Cb(_.showTickMarks?6:-1),bC(),Cb(_._isRange?7:-1),bC(),My(`discrete`,_.discrete)(`thumbPosition`,2)(`valueIndicatorText`,_.endValueIndicatorText))},dependencies:[Go],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();var Yo={provide:ji$1,useExisting:Rs$1(()=>Xe),multi:!0};var Xe=(()=>{class n{_ngZone=h(ve);_elementRef=h(pt);_cdr=h(Ga$1);_slider=h(ln);_platform=h(P);_listenerCleanups;get value(){return gH(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+``;if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new me;dragStart=new me;dragEnd=new me;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=N.END;get min(){return gH(this._hostElement.min,0)}set min(t){this._hostElement.min=t+``,this._cdr.detectChanges()}get max(){return gH(this._hostElement.max,0)}set max(t){this._hostElement.max=t+``,this._cdr.detectChanges()}get step(){return gH(this._hostElement.step,0)}set step(t){this._hostElement.step=t+``,this._cdr.detectChanges()}get disabled(){return zr$2(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=X(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new Y;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=h(jr$1);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),t.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),t.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,a=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),c=this._slider._isRtl()?1-e/a:e/a,g=Math.round(c*s)/s*(this._slider.max-this._slider.min)+this._slider.min,_=Math.round(g/o)*o;if(_===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=_,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,a=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,a),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(e){return new(e||n)};static ɵdir=dn({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(e,a){e&1&&Va$1(`change`,function(){return a._onChange()})(`input`,function(){return a._onInput()})(`blur`,function(){return a._onBlur()})(`focus`,function(){return a._onFocus()}),e&2&&Jn(`aria-valuetext`,a._valuetext())},inputs:{value:[2,`value`,`value`,gH]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[rv([Yo,{provide:Ua,useExisting:n}])]})}return n})();var wi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[Vr$1,Kv]})}return n})();var qa=(n,i)=>i.id;function qo(n,i){n&1&&(ba$1(0,`span`,2),iT(1,`w tej rundzie`),Wd())}function $o(n,i){if(n&1&&(ba$1(0,`li`)(1,`mat-icon`),iT(2),Wd(),ba$1(3,`div`)(4,`strong`),iT(5),Ib(6,qo,2,0,`span`,2),Wd(),ba$1(7,`p`),iT(8),Wd()()()),n&2){let t=i.$implicit,e=kb(2),a=e.data.active.includes(t.id);Ha$1(`off`,!a)(`current`,t.id===e.data.current),bC(2),Yy(t.icon),bC(3),tf(` `,t.name,` `),bC(),Cb(t.id===e.data.current?6:-1),bC(2),Yy(t.description)}}function Qo(n,i){if(n&1&&(ba$1(0,`ul`),Tb(1,$o,9,8,`li`,1,qa),Wd()),n&2){let t=kb();bC(),_b(t.events)}}function Ko(n,i){n&1&&(ba$1(0,`h2`,3),iT(1,`Karty`),Wd())}function Zo(n,i){if(n&1&&(ba$1(0,`li`)(1,`mat-icon`),iT(2),Wd(),ba$1(3,`div`)(4,`strong`),iT(5),ba$1(6,`span`,2),iT(7),Wd()(),ba$1(8,`p`),iT(9),Wd()()()),n&2){let t=i.$implicit,e=kb(2),a=!!e.data.available&&!e.data.available.includes(t.id);Ha$1(`off`,a),bC(2),Yy(t.icon),bC(3),tf(` `,t.name,` `),bC(2),Yy(t.target===`other`?`na innego gracza`:`na siebie`),bC(2),Yy(t.description)}}function Jo(n,i){if(n&1&&(Ib(0,Ko,2,0,`h2`,3),ba$1(1,`ul`,4),Tb(2,Zo,10,6,`li`,5,qa),Wd()),n&2){let t=kb();Cb(t.data.cardsOnly?-1:0),bC(2),_b(t.cards)}}var Ct=class n{data=h(Ji);sheetRef=h(Oe);events=Object.keys(lo$1.EVENTS).map(i=>m({id:i},lo$1.EVENTS[i]));cards=(this.data.cards??[]).map(i=>m({id:i},lo$1.CARDS[i]));static open(i,t,e,a){i.open(n,{data:{active:t,current:e,cards:a}})}static openCards(i,t,e){i.open(n,{data:{active:[],cards:t,available:e,cardsOnly:!0}})}static openAllCards(i,t){n.openCards(i,Object.keys(lo$1.CARDS),t)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-event-info`]],decls:8,vars:3,consts:[[`matIconButton`,``,`aria-label`,`Zamknij`,3,`click`],[3,`off`,`current`],[1,`tag`],[1,`cards-title`],[1,`cards`],[3,`off`]],template:function(t,e){t&1&&(ba$1(0,`header`)(1,`h2`),iT(2),Wd(),ba$1(3,`button`,0),Va$1(`click`,function(){return e.sheetRef.dismiss()}),ba$1(4,`mat-icon`),iT(5,`close`),Wd()()(),Ib(6,Qo,3,0,`ul`),Ib(7,Jo,4,1)),t&2&&(bC(2),Yy(e.data.cardsOnly?`Karty`:`Eventy`),bC(4),Cb(e.data.cardsOnly?-1:6),bC(),Cb(e.cards.length?7:-1))},dependencies:[zr$1,zn,r8,n8],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:8px}header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-right:-12px}h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:8px 0}.cards-title[_ngcontent-%COMP%]{margin-top:20px}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}li[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:flex-start}li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;color:var(--%NS%mat-sys-primary)}li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);color:var(--%NS%mat-sys-on-surface)}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0 0;font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant)}li.current[_ngcontent-%COMP%]{margin:0 -12px;padding:8px 12px;border-radius:12px;background:var(--%NS%mat-sys-tertiary-container)}li.current[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], li.current[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], li.current[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], li.current[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-tertiary-container)}li.off[_ngcontent-%COMP%]{opacity:.5}li.off[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.off)   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-tertiary)}.tag[_ngcontent-%COMP%]{margin-left:4px;font:var(--%NS%mat-sys-label-small);color:var(--%NS%mat-sys-on-surface-variant)}`]})};var $a=(n,i)=>i.id;function tr(n,i){if(n&1&&(ba$1(0,`span`,7)(1,`mat-icon`,8),iT(2),Wd()()),n&2){let t=i.$implicit;Ha$1(`off`,!t.active),My(`title`,t.name),Jn(`aria-label`,t.name+(t.active?``:` — wyłączony`)),bC(2),Yy(t.icon)}}function er(n,i){if(n&1&&(ba$1(0,`span`,7)(1,`mat-icon`,8),iT(2),Wd()()),n&2){let t=i.$implicit;Ha$1(`off`,!t.active),My(`title`,t.name),Jn(`aria-label`,t.name+(t.active?``:` — wyłączona`)),bC(2),Yy(t.icon)}}var xi=class n{bottomSheet=h(oe);settings=gi.required();scenarioName=gi(null);eventsEnabled=of(()=>this.settings().eventChance>0&&this.settings().events.length>0);eventIcons=of(()=>Object.keys(lo$1.EVENTS).map(i=>P$1(m({id:i},lo$1.EVENTS[i]),{active:this.eventsEnabled()&&this.settings().events.includes(i)})));cardIcons=of(()=>Object.keys(lo$1.CARDS).map(i=>P$1(m({id:i},lo$1.CARDS[i]),{active:this.settings().cards.includes(i)})));showEvents(){Ct.open(this.bottomSheet,this.eventsEnabled()?this.settings().events:[])}showCards(){Ct.openAllCards(this.bottomSheet,this.settings().cards)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-settings-summary`]],inputs:{settings:[1,`settings`],scenarioName:[1,`scenarioName`]},decls:44,vars:7,consts:[[1,`events`],[`type`,`button`,`aria-label`,`Eventy — opisy eventów`,1,`app-info-label`,3,`click`],[1,`event-icons`],[`role`,`img`,1,`event`,3,`off`,`title`],[`type`,`button`,`aria-label`,`Karty — opisy kart`,1,`app-info-label`,3,`click`],[1,`flag`],[`role`,`img`],[`role`,`img`,1,`event`,3,`title`],[`aria-hidden`,`true`]],template:function(t,e){t&1&&(ba$1(0,`h2`),iT(1,`Ustawienia gry`),Wd(),ba$1(2,`dl`)(3,`dt`),iT(4,`Zestaw pytań`),Wd(),ba$1(5,`dd`),iT(6),Wd(),ba$1(7,`dt`),iT(8,`Rundy`),Wd(),ba$1(9,`dd`),iT(10),Wd(),ba$1(11,`dt`),iT(12,`Czas na zakład`),Wd(),ba$1(13,`dd`),iT(14),Wd(),ba$1(15,`dt`),iT(16,`Czas na wybór karty`),Wd(),ba$1(17,`dd`),iT(18),Wd(),ba$1(19,`dt`),iT(20,`Szansa na event`),Wd(),ba$1(21,`dd`),iT(22),Wd(),ba$1(23,`dt`,0)(24,`button`,1),Va$1(`click`,function(){return e.showEvents()}),iT(25,` Eventy `),ba$1(26,`mat-icon`),iT(27,`info`),Wd()()(),ba$1(28,`dd`,2),Tb(29,tr,3,5,`span`,3,$a),Wd(),ba$1(31,`dt`,0)(32,`button`,4),Va$1(`click`,function(){return e.showCards()}),iT(33,` Karty `),ba$1(34,`mat-icon`),iT(35,`info`),Wd()()(),ba$1(36,`dd`,2),Tb(37,er,3,5,`span`,3,$a),Wd(),ba$1(39,`dt`),iT(40,`Mnożnik x2 w ostatniej rundzie`),Wd(),ba$1(41,`dd`,5)(42,`mat-icon`,6),iT(43),Wd()()()),t&2&&(bC(6),Yy(e.scenarioName()??e.settings().scenario??`—`),bC(4),Yy(e.settings().rounds),bC(4),tf(``,e.settings().betSeconds,` s`),bC(4),tf(``,e.settings().cardSeconds,` s`),bC(4),Yy(e.eventsEnabled()?e.settings().eventChance+`%`:`—`),bC(7),_b(e.eventIcons()),bC(8),_b(e.cardIcons()),bC(5),Jn(`aria-label`,e.settings().lastRoundDouble?`tak`:`nie`),bC(),Yy(e.settings().lastRoundDouble?`check`:`close`))},dependencies:[zr$1,r8,n8],styles:[`[_nghost-%COMP%]{display:block}h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:8px 0}dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;column-gap:16px;row-gap:4px;margin:0;font:var(--%NS%mat-sys-body-medium)}dt[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}dd[_ngcontent-%COMP%]{margin:0;text-align:right;color:var(--%NS%mat-sys-on-surface)}.events[_ngcontent-%COMP%]{display:flex;align-items:center}.flag[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.flag[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.event-icons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:8px}.event[_ngcontent-%COMP%]{position:relative;display:inline-flex}.event[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.event.off[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);opacity:.5}.event.off[_ngcontent-%COMP%]:after{content:"";position:absolute;left:-2px;right:-2px;top:50%;height:2px;border-radius:1px;background:currentColor;transform:rotate(-45deg)}`]})};var ir=()=>[];var nr=(n,i)=>i.id;function ar(n,i){if(n&1){let t=Ob();ba$1(0,`mat-chip-option`,22),Va$1(`selectionChange`,function(a){let o=Ih(t).$implicit,s=kb(3);return wh(a.isUserInput&&a.selected&&s.update(`scenario`,o.id))}),iT(1),Wd()}if(n&2){let t=i.$implicit,e=kb(3);My(`selected`,e.settings().scenario===t.id)(`selectable`,e.settings().scenario!==t.id),bC(),Zy(` `,t.name,` · `,t.count,` `)}}function or(n,i){n&1&&(ba$1(0,`label`),iT(1,`Zestaw pytań`),Wd(),ba$1(2,`mat-chip-listbox`,20),Tb(3,ar,2,4,`mat-chip-option`,21,nr),Wd()),n&2&&(bC(3),_b(i))}function rr(n,i){n&1&&(ba$1(0,`p`,13),iT(1,`Pytania z Twoich gier nie wracają w kolejnych, dopóki w zestawie są nowe.`),Wd())}function sr(n,i){n&1&&(ba$1(0,`p`,13),iT(1,`Pytania idą po kolei — kolejna gra zaczyna od pierwszego niezagranego.`),Wd())}function cr(n,i){if(n&1){let t=Ob();ba$1(0,`div`,23)(1,`label`),iT(2,` Zagrane pytania `),ba$1(3,`strong`),iT(4),Wd()(),ba$1(5,`button`,24),Va$1(`click`,function(){let a=Ih(t),o=kb(2);return wh(o.store.resetPlayedQuestions(a.id))}),ba$1(6,`mat-icon`),iT(7,`restart_alt`),Wd(),iT(8,` Resetuj `),Wd()(),Ib(9,rr,2,0,`p`,13)(10,sr,2,0,`p`,13)}if(n&2){let t=i,e=kb(2);bC(4),Zy(``,e.playedCount(),` / `,t.count),bC(),My(`disabled`,!e.playedCount()),bC(4),Cb(t.random?9:10)}}function lr(n,i){if(n&1){let t=Ob();ba$1(0,`mat-chip-option`,25),Va$1(`selectionChange`,function(a){let o=Ih(t).$implicit,s=kb(2);return wh(a.isUserInput&&s.toggleEvent(o,a.selected))}),ba$1(1,`mat-icon`,26),iT(2),Wd(),iT(3),Wd()}if(n&2){let t=i.$implicit,e=kb(2);My(`selected`,e.settings().events.includes(t)),bC(2),Yy(e.eventInfo[t].icon),bC(),tf(` `,e.eventInfo[t].name,` `)}}function dr(n,i){if(n&1){let t=Ob();ba$1(0,`mat-chip-option`,25),Va$1(`selectionChange`,function(a){let o=Ih(t).$implicit,s=kb(2);return wh(a.isUserInput&&s.toggleCard(o,a.selected))}),ba$1(1,`mat-icon`,26),iT(2),Wd(),iT(3),Wd()}if(n&2){let t=i.$implicit,e=kb(2);My(`selected`,e.settings().cards.includes(t)),bC(2),Yy(e.cardInfo[t].icon),bC(),tf(` `,e.cardInfo[t].name,` `)}}function mr(n,i){if(n&1){let t=Ob();ba$1(0,`section`,4),Ib(1,or,5,0),Ib(2,cr,11,4),Ba$1(3,`mat-divider`),ba$1(4,`label`),iT(5,`Liczba rund `),ba$1(6,`strong`),iT(7),Wd()(),ba$1(8,`mat-slider`,7)(9,`input`,8,0),Va$1(`input`,function(){Ih(t);let a=jb(10),o=kb();return wh(o.update(`rounds`,a.valueAsNumber))}),Wd()(),Ba$1(11,`mat-divider`),ba$1(12,`label`),iT(13,`Czas na zakład `),ba$1(14,`strong`),iT(15),Wd()(),ba$1(16,`mat-slider`,9)(17,`input`,8,1),Va$1(`input`,function(){Ih(t);let a=jb(18),o=kb();return wh(o.update(`betSeconds`,a.valueAsNumber))}),Wd()(),Ba$1(19,`mat-divider`),ba$1(20,`label`),iT(21,`Szansa na event `),ba$1(22,`strong`),iT(23),Wd()(),ba$1(24,`mat-slider`,10)(25,`input`,8,2),Va$1(`input`,function(){Ih(t);let a=jb(26),o=kb();return wh(o.update(`eventChance`,a.valueAsNumber))}),Wd()(),ba$1(27,`div`,11)(28,`button`,12),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.showEvents())}),iT(29),ba$1(30,`mat-icon`),iT(31,`info`),Wd()()(),ba$1(32,`p`,13),iT(33,`W każdej rundzie z podaną szansą losowany jest jeden z wybranych eventów.`),Wd(),ba$1(34,`mat-chip-listbox`,14),Tb(35,lr,4,3,`mat-chip-option`,15,bb),Wd(),Ba$1(37,`mat-divider`),ba$1(38,`label`),iT(39,`Czas na wybór karty `),ba$1(40,`strong`),iT(41),Wd()(),ba$1(42,`mat-slider`,16)(43,`input`,8,3),Va$1(`input`,function(){Ih(t);let a=jb(44),o=kb();return wh(o.update(`cardSeconds`,a.valueAsNumber))}),Wd()(),ba$1(45,`div`,11)(46,`button`,17),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.showCards())}),iT(47),ba$1(48,`mat-icon`),iT(49,`info`),Wd()()(),ba$1(50,`p`,13),iT(51,`Każdy gracz dostaje na start po jednej sztuce każdej wybranej karty.`),Wd(),ba$1(52,`mat-chip-listbox`,18),Tb(53,dr,4,3,`mat-chip-option`,15,bb),Wd(),Ba$1(55,`mat-divider`),ba$1(56,`mat-slide-toggle`,19),Va$1(`change`,function(a){Ih(t);let o=kb();return wh(o.update(`lastRoundDouble`,a.checked))}),iT(57,` Mnożnik x2 punktów w ostatniej rundzie `),Wd()()}if(n&2){let t,e,a=kb();bC(),Cb((t=a.store.scenarios())?1:-1,t),bC(),Cb((e=a.scenario())?2:-1,e),bC(5),Yy(a.settings().rounds),bC(2),My(`value`,a.settings().rounds),bC(6),tf(``,a.settings().betSeconds,` s`),bC(2),My(`value`,a.settings().betSeconds),bC(6),tf(``,a.settings().eventChance,`%`),bC(2),My(`value`,a.settings().eventChance),bC(4),tf(` Eventy w losowaniu · `,a.settings().events.length,` `),bC(6),_b(a.allEvents),bC(6),tf(``,a.settings().cardSeconds,` s`),bC(2),My(`value`,a.settings().cardSeconds),bC(4),tf(` Karty graczy · `,a.settings().cards.length,` `),bC(6),_b(a.allCards),bC(3),My(`checked`,a.settings().lastRoundDouble)}}function hr(n,i){if(n&1&&(ba$1(0,`p`,30),iT(1),Wd()),n&2){let t=kb(2);bC(),tf(`Do gry potrzeba co najmniej `,t.minPlayers,` graczy`)}}function pr(n,i){if(n&1&&Ba$1(0,`app-settings-summary`,31),n&2){let t=kb(2);My(`settings`,i)(`scenarioName`,t.roomScenarioName())}}function ur(n,i){if(n&1&&(ba$1(0,`section`,27)(1,`h2`),iT(2),Wd(),ba$1(3,`div`,28),Ba$1(4,`app-player-list`,29),Wd(),Ib(5,hr,2,1,`p`,30),Wd(),Ib(6,pr,1,2,`app-settings-summary`,31)),n&2){let t,e=kb();bC(2),tf(`Gracze · `,e.store.state()?.players?.length),bC(2),My(`players`,e.store.state()?.players??mT(5,ir))(`showHost`,!0),bC(),Cb(e.missingPlayers()>0?5:-1),bC(),Cb((t=e.store.state()?.settings)?6:-1,t)}}function _r(n,i){if(n&1){let t=Ob();ba$1(0,`button`,24),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.store.addBots(10))}),ba$1(1,`mat-icon`),iT(2,`smart_toy`),Wd(),iT(3,` Dodaj 10 botów (dev) `),Wd()}if(n&2){let t=kb(2);My(`disabled`,t.store.busy())}}function gr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,35),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.store.settingsOpen.set(!0))}),ba$1(1,`mat-icon`),iT(2,`tune`),Wd(),iT(3,` Ustawienia gry `),Wd()}}function vr(n,i){if(n&1){let t=Ob();ba$1(0,`div`,5),Ib(1,_r,4,1,`button`,32),Ib(2,gr,4,0,`button`,33),ba$1(3,`button`,34),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.start())}),ba$1(4,`mat-icon`),iT(5,`play_arrow`),Wd(),iT(6,` Rozpocznij grę `),Wd()()}if(n&2){let t=kb();bC(),Cb(t.devBots&&!t.store.settingsOpen()?1:-1),bC(),Cb(t.store.settingsOpen()?-1:2),bC(),My(`disabled`,t.missingPlayers()>0||t.store.busy())}}function fr(n,i){n&1&&(ba$1(0,`p`,6),iT(1,`Czekamy, aż host rozpocznie grę…`),Wd())}var yr=400;var Ci=class n{store=h(gt);bottomSheet=h(oe);devBots=!Fc.production;minPlayers=lo$1.MIN_PLAYERS;eventInfo=lo$1.EVENTS;allEvents=Object.keys(lo$1.EVENTS);cardInfo=lo$1.CARDS;allCards=Object.keys(lo$1.CARDS);settings=X(this.initialSettings());missingPlayers=of(()=>Math.max(0,this.minPlayers-(this.store.state()?.players.length??0)));scenario=of(()=>this.findScenario(this.settings().scenario));playedCount=of(()=>this.store.playedQuestions()[this.settings().scenario??``]?.length??0);roomScenarioName=of(()=>this.findScenario(this.store.state()?.settings.scenario)?.name??null);saveTimer;constructor(){this.store.settingsOpen.set(!1);let i=this.store.isHost();this.store.loadScenarios().pipe(Fi()).subscribe(t=>{i&&(t.length&&!t.some(e=>e.id===this.settings().scenario)&&this.settings.update(e=>P$1(m({},e),{scenario:t[0].id})),this.store.saveSettings(this.settings()))}),h(ye).onDestroy(()=>clearTimeout(this.saveTimer))}findScenario(i){return this.store.scenarios()?.find(t=>t.id===i)??null}initialSettings(){let i=this.store.savedSettings;return P$1(m(m({},lo$1.DEFAULT_SETTINGS),i),{events:(i.events??lo$1.DEFAULT_SETTINGS.events).filter(t=>t in lo$1.EVENTS),cards:(i.cards??lo$1.DEFAULT_SETTINGS.cards).filter(t=>t in lo$1.CARDS)})}update(i,t){this.settings.update(e=>P$1(m({},e),{[i]:t})),clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.store.saveSettings(this.settings()),yr)}toggleEvent(i,t){let e=this.settings().events;this.update(`events`,this.allEvents.filter(a=>a===i?t:e.includes(a)))}toggleCard(i,t){let e=this.settings().cards;this.update(`cards`,this.allCards.filter(a=>a===i?t:e.includes(a)))}showEvents(){Ct.open(this.bottomSheet,this.settings().events)}showCards(){Ct.openAllCards(this.bottomSheet,this.settings().cards)}start(){clearTimeout(this.saveTimer),this.store.startGame(this.settings())}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-lobby`]],decls:4,vars:2,consts:[[`rounds`,``],[`betSeconds`,``],[`eventChance`,``],[`cardSeconds`,``],[1,`settings`],[1,`actions`],[1,`hint`,`wait`],[`min`,`3`,`max`,`30`,`step`,`1`],[`matSliderThumb`,``,3,`input`,`value`],[`min`,`10`,`max`,`120`,`step`,`5`],[`min`,`0`,`max`,`100`,`step`,`10`],[1,`events-label`],[`type`,`button`,`aria-label`,`Eventy w losowaniu — opisy eventów`,1,`app-info-label`,3,`click`],[1,`note`],[`multiple`,``,`aria-label`,`Eventy w losowaniu`,1,`events`],[3,`selected`],[`min`,`5`,`max`,`60`,`step`,`5`],[`type`,`button`,`aria-label`,`Karty graczy — opisy kart`,1,`app-info-label`,3,`click`],[`multiple`,``,`aria-label`,`Karty graczy`,1,`events`],[3,`change`,`checked`],[`aria-label`,`Zestaw pytań`,1,`events`],[3,`selected`,`selectable`],[3,`selectionChange`,`selected`,`selectable`],[1,`questions`],[`matButton`,``,3,`click`,`disabled`],[3,`selectionChange`,`selected`],[`matChipAvatar`,``],[1,`players`],[1,`app-scroll`],[3,`players`,`showHost`],[1,`hint`],[1,`summary`,3,`settings`,`scenarioName`],[`matButton`,``,3,`disabled`],[`matButton`,`tonal`],[`matButton`,`filled`,3,`click`,`disabled`],[`matButton`,`tonal`,3,`click`]],template:function(t,e){t&1&&(Ib(0,mr,58,13,`section`,4)(1,ur,7,6),Ib(2,vr,7,3,`div`,5)(3,fr,2,0,`p`,6)),t&2&&(Cb(e.store.isHost()&&e.store.settingsOpen()?0:1),bC(2),Cb(e.store.isHost()?2:3))},dependencies:[zr$1,Lr$1,La,Fa,sn,rn,Ha,ja,r8,n8,Xa,cn,wi,bi,Xe,ie,xi],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:12px}h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:8px 0}.players[_ngcontent-%COMP%]{flex:1 1 0;min-height:120px;display:flex;flex-direction:column}.players[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{flex:none}.players[_ngcontent-%COMP%]   .app-scroll[_ngcontent-%COMP%]{flex:0 1 auto}.players[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{flex:none;margin:8px 0 0;text-align:center}.settings[_ngcontent-%COMP%]{flex:1 0 auto;display:flex;flex-direction:column}.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant)}.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface)}.settings[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{display:block;width:auto;margin-bottom:4px}.settings[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]{margin:8px 0 4px}.settings[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{margin:2px 0 0;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.settings[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:8px 0 12px}.settings[_ngcontent-%COMP%]   .questions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.settings[_ngcontent-%COMP%]   .questions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1}.settings[_ngcontent-%COMP%]   .events-label[_ngcontent-%COMP%]{display:flex;font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant)}.summary[_ngcontent-%COMP%]{flex:none}.hint[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.wait[_ngcontent-%COMP%]{flex:none;text-align:center;margin:8px 0}.actions[_ngcontent-%COMP%]{flex:none;display:flex;flex-direction:column;gap:8px}`]})};var br=new v(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var Ka=(()=>{class n{_elementRef=h(pt);_ngZone=h(ve);_changeDetectorRef=h(Ga$1);_renderer=h(jr$1);_cleanupTransitionEnd;constructor(){let t=kn(),e=h(br,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=Qa(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Qa(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new me;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,a){e&1&&Ny(0,`div`,2)}return Xn({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(a,o){a&2&&(Jn(`aria-valuenow`,o._isIndeterminate()?null:o.value)(`mode`,o.mode),ef(`mat-`+o.color),Ha$1(`_mat-animation-noopable`,o._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!o._isNoopAnimation)(`mdc-linear-progress--indeterminate`,o._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,gH],bufferValue:[2,`bufferValue`,`bufferValue`,gH],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(a,o){a&1&&(qd(0,`div`,0),Ny(1,`div`,1),Ib(2,t,1,0,`div`,2),Yd(),qd(3,`div`,3),Ny(4,`span`,4),Yd(),qd(5,`div`,5),Ny(6,`span`,4),Yd()),a&2&&(bC(),Hy(`flex-basis`,o._getBufferBarFlexBasis()),bC(),Cb(o.mode===`buffer`?2:-1),bC(),Hy(`transform`,o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return n})();function Qa(n,i=0,t=100){return Math.max(i,Math.min(t,n))}var Za=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ft({type:n});static ɵinj=ct({imports:[Kv]})}return n})();function xr(n,i){if(n&1&&(ba$1(0,`div`,1)(1,`span`,4),iT(2),Wd(),ba$1(3,`span`),iT(4),Wd(),ba$1(5,`span`),iT(6),Wd()()),n&2){let t=i.$implicit;bC(2),tf(`Zakład gracza `,t.nick),bC(2),Yy(t.bet.onA),bC(2),Yy(t.bet.onB)}}function Cr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,8),Va$1(`click`,function(){let a=Ih(t).$index,o=kb(2);return wh(o.allInChoice.set(a===0?0:1))}),ba$1(1,`span`,9),iT(2),Wd(),ba$1(3,`span`,10),iT(4),Wd()()}if(n&2){let t=i.$implicit,e=i.$index,a=kb(2);Ha$1(`selected`,a.allInChoice()===e),My(`disabled`,a.disabled()||a.locked()),bC(2),Yy(t),bC(2),Yy(a.allInChoice()===e?100:0)}}function kr(n,i){if(n&1&&(ba$1(0,`p`,5),iT(1,`Musisz postawić wszystko na jedną odpowiedź.`),Wd(),ba$1(2,`div`,6),Tb(3,Cr,5,5,`button`,7,Sb),Wd()),n&2){let t=kb();bC(3),_b(t.answers())}}function Sr(n,i){if(n&1){let t=Ob();ba$1(0,`div`,6)(1,`button`,11),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.pick(0))}),ba$1(2,`span`,9),iT(3),Wd(),ba$1(4,`span`,10),iT(5),Wd()(),ba$1(6,`button`,11),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.pick(100))}),ba$1(7,`span`,9),iT(8),Wd(),ba$1(9,`span`,10),iT(10),Wd()()(),ba$1(11,`mat-slider`,12)(12,`input`,13,0),Va$1(`input`,function(){Ih(t);let a=jb(13),o=kb();return wh(o.set(a.valueAsNumber))}),Wd()()}if(n&2){let t=kb();bC(),Hy(`--%NS%level`,t.level(t.onA()))(`--%NS%dim`,t.dim(t.onA())),Ha$1(`disabled`,t.disabled())(`clickable`,!t.disabled()&&!t.locked()),Jn(`aria-disabled`,t.disabled()||t.locked()),bC(2),Yy(t.answers()[0]),bC(2),Yy(t.onA()),bC(),Hy(`--%NS%level`,t.level(t.onB()))(`--%NS%dim`,t.dim(t.onB())),Ha$1(`disabled`,t.disabled())(`clickable`,!t.disabled()&&!t.locked()),Jn(`aria-disabled`,t.disabled()||t.locked()),bC(2),Yy(t.answers()[1]),bC(2),Yy(t.onB()),bC(),My(`disabled`,t.disabled()||t.locked()),bC(),My(`value`,t.onB()),Jn(`aria-label`,`Punkty na: `+t.answers()[1])}}function Mr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,14),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.place())}),ba$1(1,`mat-icon`),iT(2,`check`),Wd(),iT(3,` Postaw `),Wd()}if(n&2){let t=kb();My(`disabled`,!t.canPlace())}}function Ir(n,i){if(n&1){let t=Ob();ba$1(0,`button`,15),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.changed.emit())}),ba$1(1,`mat-icon`),iT(2,`edit`),Wd(),iT(3,` Zmień `),Wd()}if(n&2){let t=kb();My(`disabled`,t.disabled())}}var ki=class n{answers=gi.required();allIn=gi(!1);disabled=gi(!1);bet=gi(null);canChange=gi(!1);openBets=gi([]);placed=dH();changed=dH();betKey=of(()=>{let i=this.bet();return i?`${i.onA}/${i.onB}`:null});onB=sf({source:this.betKey,computation:(i,t)=>this.bet()?.onB??t?.value??50});onA=of(()=>100-this.onB());allInChoice=sf({source:this.betKey,computation:(i,t)=>{let e=this.bet();return e?e.onA===100?0:1:t?.value??null}});locked=of(()=>!!this.bet());canPlace=of(()=>!this.disabled()&&!this.locked()&&(!this.allIn()||this.allInChoice()!==null));level(i){return Math.max(0,(i-50)/50)}dim(i){return Math.max(0,(50-i)/50)}set(i){this.onB.set(i)}pick(i){!this.disabled()&&!this.locked()&&this.onB.set(i)}place(){this.canPlace()&&(this.allIn()?this.placed.emit(this.allInChoice()===0?{onA:100,onB:0}:{onA:0,onB:100}):this.placed.emit({onA:this.onA(),onB:this.onB()}))}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-bet-panel`]],inputs:{answers:[1,`answers`],allIn:[1,`allIn`],disabled:[1,`disabled`],bet:[1,`bet`],canChange:[1,`canChange`],openBets:[1,`openBets`]},outputs:{placed:`placed`,changed:`changed`},decls:6,vars:2,consts:[[`thumb`,``],[1,`open-bet`],[`matButton`,`filled`,1,`place`,3,`disabled`],[`matButton`,`outlined`,1,`place`,3,`disabled`],[1,`owner`],[1,`must`],[1,`answers`],[1,`answer`,3,`selected`,`disabled`],[1,`answer`,3,`click`,`disabled`],[1,`text`],[1,`points`],[1,`answer`,3,`click`],[`min`,`0`,`max`,`100`,`step`,`5`,3,`disabled`],[`matSliderThumb`,``,3,`input`,`value`],[`matButton`,`filled`,1,`place`,3,`click`,`disabled`],[`matButton`,`outlined`,1,`place`,3,`click`,`disabled`]],template:function(t,e){t&1&&(Tb(0,xr,7,3,`div`,1,Sb),Ib(2,kr,5,0)(3,Sr,14,25),Ib(4,Mr,4,1,`button`,2)(5,Ir,4,1,`button`,3)),t&2&&(_b(e.openBets()),bC(2),Cb(e.allIn()?2:3),bC(2),Cb(e.locked()?e.canChange()?5:-1:4))},dependencies:[zr$1,Lr$1,r8,n8,wi,bi,Xe],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;gap:8px}.must[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-error);text-align:center}.answers[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px}.open-bet[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:-4px;font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-tertiary)}.open-bet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:4px}.open-bet[_ngcontent-%COMP%]   .owner[_ngcontent-%COMP%]{grid-column:1/-1;margin-bottom:-4px;font:var(--%NS%mat-sys-label-large)}.answer[_ngcontent-%COMP%]{--%NS%level: 0;--%NS%pct: calc(var(--%NS%level) * 100%);--%NS%dim: 0;display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 8px;border:2px solid color-mix(in srgb,var(--%NS%mat-sys-primary) var(--%NS%pct),var(--%NS%mat-sys-outline-variant));border-radius:16px;background:color-mix(in srgb,var(--%NS%mat-sys-primary-container) var(--%NS%pct),var(--%NS%mat-sys-surface-container));color:color-mix(in srgb,var(--%NS%mat-sys-on-primary-container) var(--%NS%pct),var(--%NS%mat-sys-on-surface));font:inherit;opacity:calc(1 - var(--%NS%dim) * .3);transition:border-color .15s,background-color .15s,color .15s,opacity .15s}.answer.selected[_ngcontent-%COMP%]{--%NS%level: 1}.answer[_ngcontent-%COMP%]:disabled, .answer.disabled[_ngcontent-%COMP%]{opacity:.6;transition:border-color .15s,background-color .15s,color .15s,opacity .2s ease-out .4s}button.answer[_ngcontent-%COMP%]{cursor:default}button.answer[_ngcontent-%COMP%]:enabled:not([aria-disabled=true]), button.answer.clickable[_ngcontent-%COMP%]{cursor:pointer}.text[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-large);text-align:center}.points[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-medium)}mat-slider[_ngcontent-%COMP%]{display:block;width:auto}.place[_ngcontent-%COMP%]{margin-top:4px}@media(max-height:680px){.answer[_ngcontent-%COMP%]{padding:8px;gap:0}.text[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-medium)}.points[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small)}.place[_ngcontent-%COMP%]{margin-top:0}}`]})};var Ja=(n,i)=>i.id;function Nr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,9),Va$1(`click`,function(){let a=Ih(t).$implicit,o=kb(2);return wh(o.selectCard(a.id))}),ba$1(1,`mat-icon`),iT(2),Wd(),ba$1(3,`span`,10),iT(4),Wd()()}if(n&2){let t=i.$implicit,e=kb(2);Ha$1(`selected`,e.card()===t.id),My(`disabled`,e.store.busy()),Jn(`aria-pressed`,e.card()===t.id),bC(2),Yy(t.icon),bC(2),Yy(t.name)}}function Er(n,i){if(n&1){let t=Ob();ba$1(0,`button`,13),Va$1(`click`,function(){let a=Ih(t).$implicit,o=kb(3);return wh(o.selectTarget(a.id))}),iT(1),Wd()}if(n&2){let t=i.$implicit,e=kb(3);Ha$1(`selected`,e.target()===t.id),My(`disabled`,e.store.busy()),Jn(`aria-pressed`,e.target()===t.id),bC(),tf(` `,t.nick,` `)}}function Rr(n,i){if(n&1&&(ba$1(0,`h3`),iT(1,`Na kogo?`),Wd(),ba$1(2,`div`,11),Tb(3,Er,2,5,`button`,12,Ja),Wd()),n&2){let t=kb(2);bC(3),_b(t.others())}}function Or(n,i){if(n&1){let t=Ob();ba$1(0,`section`,0)(1,`h3`,2),iT(2,` Zagrasz kartę? `),ba$1(3,`button`,3),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.showCards())}),ba$1(4,`mat-icon`),iT(5,`info`),Wd()()(),ba$1(6,`div`,4),Tb(7,Nr,5,6,`button`,5,Ja),Wd(),Ib(9,Rr,5,0),ba$1(10,`div`,6)(11,`button`,7),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.play())}),ba$1(12,`mat-icon`),iT(13,`style`),Wd(),iT(14),Wd(),ba$1(15,`button`,8),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.store.passCard())}),ba$1(16,`mat-icon`),iT(17,`block`),Wd(),iT(18,` Pas `),Wd()()()}if(n&2){let t=kb();bC(7),_b(t.hand()),bC(2),Cb(t.needsTarget()?9:-1),bC(2),My(`disabled`,t.store.busy()||!t.canPlay()),bC(3),tf(` `,t.playLabel(),` `),bC(),My(`disabled`,t.store.busy())}}function Tr(n,i){if(n&1&&(ba$1(0,`mat-icon`),iT(1),Wd(),iT(2,` Zagrywasz: `),ba$1(3,`strong`),iT(4),Wd()),n&2){let t=i;bC(),Yy(t.icon),bC(3),Yy(t.text)}}function Dr(n,i){n&1&&(ba$1(0,`mat-icon`),iT(1,`block`),Wd(),iT(2,` Pasujesz w tej rundzie `))}function Pr(n,i){if(n&1&&(ba$1(0,`p`,1),Ib(1,Tr,5,2)(2,Dr,3,0),Wd()),n&2){let t,e=kb();bC(),Cb((t=e.myChoice())?1:2,t)}}var Si=class n{store=h(gt);cards=lo$1.CARDS;bottomSheet=h(oe);me=this.store.me;hand=of(()=>(this.me()?.hand??[]).map(i=>m({id:i},lo$1.CARDS[i])));others=of(()=>(this.store.round()?.participantIds??[]).filter(i=>i!==this.store.myId()).map(i=>({id:i,nick:this.store.nick(i)})));roundKey=of(()=>`${this.store.round()?.number}:${this.store.round()?.tiebreak}`);card=sf({source:this.roundKey,computation:()=>null});target=sf({source:this.roundKey,computation:()=>null});needsTarget=of(()=>{let i=this.card();return!!i&&lo$1.CARDS[i].target===`other`});canPlay=of(()=>!!this.card()&&(!this.needsTarget()||!!this.target()));playLabel=of(()=>{let i=this.card();if(!i)return`Wybierz kartę`;if(this.needsTarget()&&!this.target())return`Wybierz gracza`;let t=lo$1.CARDS[i].name;return this.needsTarget()?`Zagraj ${t} na ${this.store.nick(this.target())}`:`Zagraj ${t}`});myChoice=of(()=>{let i=this.me()?.myCard;if(!i)return null;let t=lo$1.CARDS[i.card];return{icon:t.icon,text:t.target===`other`?`${t.name} na ${this.store.nick(i.targetId)}`:t.name}});showCards(){Ct.openCards(this.bottomSheet,this.store.state()?.settings?.cards??[],this.me()?.hand??[])}selectCard(i){this.card.update(t=>t===i?null:i),this.target.set(null)}selectTarget(i){this.target.update(t=>t===i?null:i)}play(){let i=this.card();i&&this.canPlay()&&this.store.playCard(i,this.needsTarget()?this.target():null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-card-phase`]],decls:2,vars:1,consts:[[1,`pick`],[1,`decided`],[1,`title`],[`matIconButton`,``,`aria-label`,`Opisy kart`,1,`info`,3,`click`],[1,`cards`],[`type`,`button`,1,`card`,3,`selected`,`disabled`],[1,`buttons`],[`matButton`,`filled`,3,`click`,`disabled`],[`matButton`,`outlined`,3,`click`,`disabled`],[`type`,`button`,1,`card`,3,`click`,`disabled`],[1,`name`],[1,`choices`],[`type`,`button`,1,`choice`,3,`selected`,`disabled`],[`type`,`button`,1,`choice`,3,`click`,`disabled`]],template:function(t,e){if(t&1&&Ib(0,Or,19,4,`section`,0)(1,Pr,3,1,`p`,1),t&2){let a=e.me();Cb(a?.canPlayCard?0:a?.cardDecided?1:-1)}},dependencies:[zr$1,Lr$1,zn,r8,n8],styles:[`[_nghost-%COMP%]{display:block}.pick[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}h3[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:4px 0}.title[_ngcontent-%COMP%]{display:flex;align-items:center}.info[_ngcontent-%COMP%]{--%NS%mat-icon-button-state-layer-size: 28px;width:28px;height:28px;padding:2px;margin:-4px 0 -4px 2px;color:var(--%NS%mat-sys-on-surface-variant)}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}.card[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;align-items:center;column-gap:8px;row-gap:2px;min-width:0;min-height:44px;padding:8px 12px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface-container);color:var(--%NS%mat-sys-on-surface);text-align:left;cursor:pointer}.card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--%NS%mat-sys-tertiary)}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{min-width:0;font:var(--%NS%mat-sys-label-large);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-tertiary);background:var(--%NS%mat-sys-tertiary-container);color:var(--%NS%mat-sys-on-tertiary-container)}.card.selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:inherit}.card[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.choices[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px}.choice[_ngcontent-%COMP%]{min-width:0;min-height:44px;padding:8px 12px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface-container);color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-label-large);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.choice.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container)}.choice[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:4px}.decided[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:6px;margin:0;color:var(--%NS%mat-sys-on-surface-variant);text-align:center}.decided[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none}.decided[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface)}`]})};var Ar=(n,i)=>i.key;var to=(n,i)=>i.id;function Br(n,i){if(n&1&&iT(0),n&2){let t=kb();tf(` `,t.revealed()?`Koniec dogrywki`:`Dogrywka`,` `)}}function Vr(n,i){if(n&1&&iT(0),n&2){let t=kb(),e=fT(0);Qy(` `,t.revealed()?`Koniec rundy`:`Runda`,` `,e.number,` / `,e.totalRounds,` `)}}function zr(n,i){if(n&1&&(ba$1(0,`span`,13)(1,`mat-icon`),iT(2,`timer`),Wd(),iT(3),Wd()),n&2){let t=kb();Ha$1(`urgent`,t.store.secondsLeft()<=5),bC(3),tf(``,t.store.secondsLeft(),` s `)}}function Fr(n,i){if(n&1&&Ba$1(0,`mat-progress-bar`,4),n&2){let t=kb();My(`value`,t.timerPercent())}}function Lr(n,i){n&1&&iT(0),n&2&&tf(` · `,i.text,` `)}function jr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,14),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.openEventInfo())}),ba$1(1,`mat-icon`),iT(2),Wd(),ba$1(3,`span`,15)(4,`strong`),iT(5),Wd(),Ib(6,Lr,1,1),Wd(),ba$1(7,`mat-icon`,16),iT(8,`info`),Wd()()}if(n&2){let t,e=i,a=kb();Ha$1(`mine`,a.eventStatus()?.mine),bC(2),Yy(e.icon),bC(3),Yy(e.name),bC(),Cb((t=a.eventStatus())?6:-1,t)}}function Hr(n,i){if(n&1&&(ba$1(0,`li`)(1,`mat-icon`,18),iT(2),Wd(),ba$1(3,`span`),iT(4),Wd()()),n&2){let t=i.$implicit;Ha$1(`mine`,t.mine),Jn(`aria-label`,t.name+`: `+t.text),bC(2),Yy(t.icon),bC(2),Yy(t.text)}}function Wr(n,i){if(n&1&&(ba$1(0,`ul`,7),Tb(1,Hr,5,5,`li`,17,Ar),Wd()),n&2){let t=kb();bC(),_b(t.playedCards())}}function Xr(n,i){if(n&1&&(ba$1(0,`div`,20)(1,`span`,21),iT(2),Wd(),ba$1(3,`span`,22),iT(4),Wd(),ba$1(5,`span`,21),iT(6),Wd()()),n&2){let t=kb(2).$implicit;bC(2),Yy(t.bet.onA),bC(2),Yy(t.label),bC(2),Yy(t.bet.onB)}}function Ur(n,i){if(n&1&&(ba$1(0,`span`,22),iT(1),Wd(),ba$1(2,`span`,21),iT(3),Wd(),ba$1(4,`span`,21),iT(5),Wd()),n&2){let t=kb(2).$implicit;bC(),Yy(t.label),bC(2),Yy(t.bet.onA),bC(2),Yy(t.bet.onB)}}function Gr(n,i){if(n&1&&Ib(0,Xr,7,3,`div`,20)(1,Ur,6,3),n&2){let t=kb().$implicit;Cb(t.inline?0:1)}}function Yr(n,i){if(n&1&&Ib(0,Gr,2,1),n&2){let t=kb(2);Cb(t.revealed()?-1:0)}}function qr(n,i){if(n&1&&(ba$1(0,`div`,23),iT(1),Wd()),n&2){let t=i.$implicit,e=i.$index,a=kb(2),o=fT(0);Ha$1(`correct`,a.revealed()&&o.result?.correct===e)(`wrong`,a.revealed()&&o.result?.correct!==e),bC(),tf(` `,t,` `)}}function $r(n,i){if(n&1&&(ba$1(0,`div`,11),Tb(1,Yr,1,1,null,null,Sb),Tb(3,qr,2,5,`div`,19,Sb),Wd()),n&2){let t=kb(),e=fT(0);bC(),_b(t.betsAbove()),bC(2),_b(e.question.answers)}}function Qr(n,i){n&1&&Ba$1(0,`app-card-phase`)}function Kr(n,i){if(n&1){let t=Ob();ba$1(0,`button`,27),Va$1(`click`,function(){let a=Ih(t).$implicit,o=kb(3);return wh(o.toggleVaBanqueChoice(a.id))}),iT(1),Wd()}if(n&2){let t=i.$implicit,e=kb(3);Ha$1(`selected`,e.vaBanqueChoice()===t.id),My(`disabled`,e.store.busy()),Jn(`aria-pressed`,e.vaBanqueChoice()===t.id),bC(),tf(` `,t.nick,` `)}}function Zr(n,i){if(n&1&&(ba$1(0,`section`,24)(1,`h3`),iT(2,`Kto gra va banque?`),Wd(),ba$1(3,`div`,25),Tb(4,Kr,2,5,`button`,26,to),Wd()()),n&2){let t=kb(2);bC(4),_b(t.others())}}function Jr(n,i){if(n&1&&Ib(0,Zr,6,0,`section`,24),n&2){kb();let t=fT(1);Cb(t?.canPickTarget?0:-1)}}function ts(n,i){if(n&1&&(ba$1(0,`span`,28),iT(1),Wd(),ba$1(2,`span`,29),iT(3),Wd(),ba$1(4,`span`,28),iT(5),Wd()),n&2){let t=kb().$implicit,e=fT(0);bC(),Yy(e?.onA??``),bC(2),Yy(t.nick),bC(2),Yy(e?.onB??``)}}function es(n,i){if(n&1&&iT(0),n&2){let t=kb().$implicit;tf(` `,t.nick,` `)}}function is(n,i){if(n&1){let t=Ob();ev(0),ba$1(1,`button`,27),Va$1(`click`,function(){let a=Ih(t).$implicit,o=kb(3);return wh(o.toggleCopyChoice(a.id))}),Ib(2,ts,6,3)(3,es,1,1),Wd()}if(n&2){let t=i.$implicit,e=kb(3),a=dT(e.copyBetOf(t.id));bC(),Ha$1(`selected`,e.copyChoice()===t.id),My(`disabled`,e.store.busy()),Jn(`aria-pressed`,e.copyChoice()===t.id)(`aria-label`,a?t.nick+`: `+a.onA+` na A, `+a.onB+` na B`:t.nick),bC(),Cb(e.seesCopyBets()?2:3)}}function ns(n,i){if(n&1&&(ba$1(0,`section`,24)(1,`h3`),iT(2,`Chcesz kogoś skopiować?`),Wd(),ba$1(3,`div`,25),Tb(4,is,4,7,`button`,26,to),Wd()()),n&2){let t=kb(2);bC(3),Ha$1(`with-bets`,t.seesCopyBets()),bC(),_b(t.others())}}function as(n,i){if(n&1&&Ib(0,ns,6,2,`section`,24),n&2){kb();let t=fT(1);Cb(t?.canCopy?0:-1)}}function os(n,i){if(n&1){let t=Ob();ba$1(0,`button`,32),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.openCardInfo())}),ba$1(1,`mat-icon`),iT(2,`info`),Wd(),iT(3,` Informacje o kartach `),Wd()}}function rs(n,i){if(n&1&&(Ba$1(0,`app-player-list`,30),Ib(1,os,4,0,`button`,31)),n&2){let t=kb();My(`players`,t.store.ranked())(`showScores`,!0)(`gains`,t.gains())(`showCards`,!0),bC(),Cb(t.gameCards().length?1:-1)}}function ss(n,i){n&1&&(ba$1(0,`p`,33),iT(1,`Czekamy na wybór kart…`),Wd())}function cs(n,i){if(n&1&&(Ib(0,ss,2,0,`p`,33),ba$1(1,`p`,34),iT(2),Wd()),n&2){kb();let t=fT(0),e=fT(1);Cb(e?.canPlayCard?-1:0),bC(2),Zy(`Zdecydowało `,t.cardDoneIds.length,` / `,t.cardPlayerIds.length)}}function ls(n,i){if(n&1){let t=Ob();ba$1(0,`button`,36),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.confirmVaBanque())}),ba$1(1,`mat-icon`),iT(2,`casino`),Wd(),iT(3),Wd()}if(n&2){let t=kb(2);My(`disabled`,t.store.busy()||!t.vaBanqueChoice()),bC(3),tf(` `,t.vaBanqueChoice()?t.store.nick(t.vaBanqueChoice())+` gra va banque`:`Wybierz gracza wyżej`,` `)}}function ds(n,i){if(n&1&&(ba$1(0,`p`,33),iT(1),Wd()),n&2){let t=kb(2),e=fT(0);bC(),tf(`Czekamy na wybór `,t.store.nick(e.vaBanqueChooserId),`…`)}}function ms(n,i){if(n&1&&Ib(0,ls,4,2,`button`,35)(1,ds,2,1,`p`,33),n&2){kb();let t=fT(1);Cb(t?.canPickTarget?0:1)}}function hs(n,i){if(n&1){let t=Ob();ba$1(0,`p`,37),iT(1),Wd(),ba$1(2,`app-bet-panel`,38),Va$1(`placed`,function(a){Ih(t);let o=kb(2);return wh(o.place(a))}),Wd()}if(n&2){let t=kb(2),e=fT(0),a=fT(1);bC(),Yy(t.openBetHint()),bC(),My(`answers`,e.question.answers)(`allIn`,a?.mustGoAllIn??!1)(`disabled`,t.store.busy())}}function ps(n,i){if(n&1&&(ba$1(0,`p`,33),iT(1),Wd()),n&2){let t=kb(2);bC(),tf(`Obstawia jawnie: `,t.openBettorsWaiting(),`…`)}}function us(n,i){n&1&&(ba$1(0,`p`,33),iT(1,`Czekamy na pozostałe jawne zakłady…`),Wd())}function _s(n,i){if(n&1&&Ib(0,hs,3,4)(1,ps,2,1,`p`,33)(2,us,2,0,`p`,33),n&2){let t=kb(),e=fT(1);Cb(e?.canBet?0:t.openBettorsWaiting()?1:2)}}function gs(n,i){if(n&1){let t=Ob();ba$1(0,`app-bet-panel`,40),Va$1(`placed`,function(a){Ih(t);let o=kb(2);return wh(o.place(a))})(`changed`,function(){Ih(t);let a=kb(2);return wh(a.store.withdrawBet())}),Wd()}if(n&2){let t=kb(2),e=fT(0),a=fT(1);My(`answers`,e.question.answers)(`allIn`,a?.mustGoAllIn??!1)(`bet`,a?.myBet??null)(`canChange`,a?.canChangeBet??!1)(`openBets`,t.openBetsForMe())(`disabled`,t.store.busy())}}function vs(n,i){n&1&&(ba$1(0,`p`,33),iT(1,`Nie grasz w tej rundzie — kibicujesz.`),Wd())}function fs(n,i){if(n&1&&(Ib(0,gs,1,6,`app-bet-panel`,39)(1,vs,2,0,`p`,33),ba$1(2,`p`,34),iT(3),Wd()),n&2){let t=kb(),e=fT(0);Cb(t.showPanel()?0:1),bC(3),Zy(`Obstawiło `,e.betPlayerIds.length,` / `,e.participantIds.length)}}function ys(n,i){if(n&1){let t=Ob();ba$1(0,`button`,36),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.confirmCopy())}),ba$1(1,`mat-icon`),iT(2,`content_copy`),Wd(),iT(3),Wd(),ba$1(4,`button`,41),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.store.keepBet())}),ba$1(5,`mat-icon`),iT(6,`check`),Wd(),iT(7,` Zostaję przy swoim `),Wd()}if(n&2){let t=kb(2);My(`disabled`,t.store.busy()||!t.copyChoice()),bC(3),tf(` `,t.copyChoice()?`Przejmij zakład `+t.store.nick(t.copyChoice()):`Wybierz gracza wyżej`,` `),bC(),My(`disabled`,t.store.busy())}}function bs(n,i){if(n&1&&(ba$1(0,`p`,33),iT(1),Wd()),n&2){let t=kb(2);bC(),tf(`O przejęciu zakładu decyduje: `,t.copyActorsWaiting(),`…`)}}function ws(n,i){n&1&&(ba$1(0,`p`,33),iT(1,`Czekamy na pozostałe decyzje o kopii…`),Wd())}function xs(n,i){if(n&1&&Ib(0,ys,8,3)(1,bs,2,1,`p`,33)(2,ws,2,0,`p`,33),n&2){let t=kb(),e=fT(1);Cb(e?.canCopy?0:t.copyActorsWaiting()?1:2)}}function Cs(n,i){if(n&1){let t=Ob();ba$1(0,`button`,36),Va$1(`click`,function(){Ih(t);let a=kb(2);return wh(a.store.nextRound())}),iT(1),ba$1(2,`mat-icon`),iT(3,`arrow_forward`),Wd()()}if(n&2){let t=kb(2),e=fT(0);My(`disabled`,t.store.busy()),bC(),tf(` `,t.lastRegular()||e.tiebreak?`Dalej`:`Następna runda`,` `)}}function ks(n,i){n&1&&(ba$1(0,`p`,33),iT(1,`Czekamy, aż host przejdzie dalej…`),Wd())}function Ss(n,i){if(n&1&&Ib(0,Cs,4,2,`button`,35)(1,ks,2,0,`p`,33),n&2){let t=kb();Cb(t.store.isHost()?0:1)}}var Mi=class n{store=h(gt);bottomSheet=h(oe);round=of(()=>this.store.round());me=this.store.me;event=of(()=>{let i=this.round().event;return i?lo$1.EVENTS[i]:null});revealed=of(()=>this.round().phase===`REVEALED`);answersVisible=of(()=>{let i=this.round().phase;return i!==`CARDS`&&i!==`VA_BANQUE_PICK`});eventStatus=of(()=>{let i=this.round(),t=this.store.myId(),e=a=>this.store.nick(a);switch(i.event){case`VA_BANQUE`:return i.vaBanqueTargetId?i.vaBanqueTargetId===t?{text:`Musisz zagrać all-in!`,mine:!0}:{text:`${e(i.vaBanqueTargetId)} musi gra\u0107 va banque`,mine:!1}:i.vaBanqueChooserId===t?{text:`Wybierz, kto gra all-in`,mine:!0}:{text:`${e(i.vaBanqueChooserId)} wybiera, kto gra all-in`,mine:!1};case`DOUBLE`:return{text:`Punkty ×2`,mine:!1};case`OPEN_BET`:{let a=i.openBettorIds[0]??null;return a===t?{text:`Musisz obstawić jawnie!`,mine:!0}:{text:`${e(a)} obstawia jawnie`,mine:!1}}case`BLIND_COPY`:{let a=i.copyActorIds[0]??null;return i.phase===`COPY_PICK`?a===t?{text:`Przejmij czyjś zakład albo zostań przy swoim`,mine:!0}:{text:`${e(a)} decyduje o kopii`,mine:!1}:a===t?{text:`Obstaw — po zakładach możesz przejąć czyjś`,mine:!0}:{text:`${e(a)} po zak\u0142adach mo\u017Ce przej\u0105\u0107 czyj\u015B zak\u0142ad`,mine:!1}}case`ALL_IN`:return{text:`Wszyscy grają all-in!`,mine:!0};case`BLITZ`:return{text:`Tylko ${this.store.phaseSeconds()} s na zak\u0142ad!`,mine:!1};default:return null}});playedCards=of(()=>{let i=this.store.myId();return this.round().playedCards.map(t=>{let e=lo$1.CARDS[t.card],a=e.target===`other`?`${this.store.nick(t.playerId)} \u2192 ${this.store.nick(t.targetId)}`:this.store.nick(t.playerId);return{key:`${t.playerId}:${t.card}`,icon:e.icon,name:e.name,text:`${a}: ${e.effect}`,mine:t.targetId===i}})});others=of(()=>this.round().participantIds.filter(i=>i!==this.store.myId()).map(i=>({id:i,nick:this.store.nick(i)})));timerPercent=of(()=>{let i=this.store.secondsLeft();return i===null?0:100*i/this.store.phaseSeconds()});showPanel=of(()=>{let i=this.me(),t=this.round().phase;return!i||t!==`OPEN_BET`&&t!==`BETTING`?!1:i.canBet||t===`BETTING`&&!!i.myBet});openBetsForMe=of(()=>{let i=this.store.myId(),t=this.round().openBets,e=this.round().phase===`BETTING`?this.me()?.seenBets??{}:{};return[...Object.entries(t).filter(([a])=>a!==i).map(([a,o])=>({nick:this.store.nick(a),bet:o,secret:!1})),...Object.entries(e).filter(([a])=>!(a in t)).map(([a,o])=>({nick:this.store.nick(a),bet:o,secret:!0}))]});openBetHint=of(()=>{let i=this.store.myId(),t=this.round();return t.event===`OPEN_BET`&&t.openBettorIds[0]===i?`Obstawiasz jawnie — wszyscy zobaczą Twój zakład.`:`Obstawiasz pierwszy \u2014 Tw\xF3j zak\u0142ad zobaczy: ${t.playedCards.filter(a=>a.card===`PEEK`&&a.targetId===i).map(a=>this.store.nick(a.playerId)).join(`, `)}.`});copyBetOf=i=>this.me()?.seenBets?.[i]??null;seesCopyBets=of(()=>this.round().phase===`COPY_PICK`&&Object.keys(this.me()?.seenBets??{}).length>0);openBettorsWaiting=of(()=>this.round().openBettorIds.filter(i=>i!==this.store.myId()&&!this.round().betPlayerIds.includes(i)).map(i=>this.store.nick(i)).join(`, `));copyActorsWaiting=of(()=>this.round().copyActorIds.filter(i=>i!==this.store.myId()).map(i=>this.store.nick(i)).join(`, `));betsAbove=of(()=>{let i=this.me();return this.round().phase===`COPY_PICK`&&i?.canCopy&&i.myBet?[{label:`Twój zakład`,bet:i.myBet,inline:!0}]:this.openBetsForMe().map(t=>({label:`Zak\u0142ad gracza ${t.nick}`,bet:t.bet,inline:!1}))});phaseKey=of(()=>`${this.round().number}:${this.round().tiebreak}:${this.round().phase}`);vaBanqueChoice=sf({source:this.phaseKey,computation:()=>null});copyChoice=sf({source:this.phaseKey,computation:()=>null});lastRegular=of(()=>!this.round().tiebreak&&this.round().number>=this.round().totalRounds);gains=of(()=>{let i=this.round().result;return i?Object.fromEntries(Object.entries(i.players).map(([t,e])=>[t,e.gain])):null});gameCards=of(()=>this.store.state()?.settings?.cards??[]);openCardInfo(){Ct.openCards(this.bottomSheet,this.gameCards(),this.me()?.hand??[])}openEventInfo(){let i=this.store.state()?.settings;Ct.open(this.bottomSheet,i?.events??[],this.round().event,i?.cards??[])}place(i){this.store.placeBet(i)}toggleVaBanqueChoice(i){this.vaBanqueChoice.update(t=>t===i?null:i)}confirmVaBanque(){let i=this.vaBanqueChoice();i&&this.store.pickVaBanqueTarget(i)}toggleCopyChoice(i){this.copyChoice.update(t=>t===i?null:i)}confirmCopy(){let i=this.copyChoice();i&&this.store.copyBet(i)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-round`]],decls:29,vars:12,consts:[[1,`head`],[1,`top`],[1,`round-no`],[1,`timer`,3,`urgent`],[`mode`,`determinate`,3,`value`],[1,`content`,`app-scroll`],[`type`,`button`,1,`event`,3,`mine`],[1,`played`],[1,`question`],[1,`category`],[1,`text`],[1,`answers`],[1,`actions`],[1,`timer`],[`type`,`button`,1,`event`,3,`click`],[1,`label`],[1,`info`],[3,`mine`],[`aria-hidden`,`true`],[1,`answer`,3,`correct`,`wrong`],[1,`bet-row`],[1,`open-points`],[1,`open-points`,`owner`],[1,`answer`],[1,`pick`],[1,`choices`],[`type`,`button`,1,`choice`,3,`selected`,`disabled`],[`type`,`button`,1,`choice`,3,`click`,`disabled`],[1,`choice-bet`],[1,`choice-nick`],[3,`players`,`showScores`,`gains`,`showCards`],[`matButton`,``,1,`card-info`],[`matButton`,``,1,`card-info`,3,`click`],[1,`waiting`],[1,`progress`],[`matButton`,`filled`,3,`disabled`],[`matButton`,`filled`,3,`click`,`disabled`],[1,`hint`],[3,`placed`,`answers`,`allIn`,`disabled`],[3,`answers`,`allIn`,`bet`,`canChange`,`openBets`,`disabled`],[3,`placed`,`changed`,`answers`,`allIn`,`bet`,`canChange`,`openBets`,`disabled`],[`matButton`,`outlined`,3,`click`,`disabled`]],template:function(t,e){if(t&1&&(ev(0)(1),ba$1(2,`header`,0)(3,`div`,1)(4,`span`,2),Ib(5,Br,1,1)(6,Vr,1,3),Wd(),Ib(7,zr,4,3,`span`,3),Wd(),Ib(8,Fr,1,1,`mat-progress-bar`,4),Wd(),ba$1(9,`div`,5),Ib(10,jr,9,5,`button`,6),Ib(11,Wr,3,0,`ul`,7),ba$1(12,`div`,8)(13,`span`,9),iT(14),Wd(),ba$1(15,`p`,10),iT(16),Wd(),Ib(17,$r,5,0,`div`,11),Wd(),Ib(18,Qr,1,0,`app-card-phase`)(19,Jr,1,1)(20,as,1,1)(21,rs,2,5),Wd(),ba$1(22,`footer`,12),Ib(23,cs,3,3)(24,ms,2,1)(25,_s,3,1)(26,fs,4,3)(27,xs,3,1)(28,Ss,2,1),Wd()),t&2){let a,o,s,c=dT(e.round());bC(),dT(e.me()),bC(4),Cb(c.tiebreak?5:6),bC(2),Cb(e.store.secondsLeft()!==null?7:-1),bC(),Cb(e.store.secondsLeft()!==null?8:-1),bC(2),Cb((a=!e.revealed()&&e.event())?10:-1,a),bC(),Cb(!e.revealed()&&e.playedCards().length?11:-1),bC(3),Yy(c.question.category),bC(2),Yy(c.question.text),bC(),Cb(e.answersVisible()&&(!e.showPanel()||e.revealed())?17:-1),bC(),Cb((o=c.phase)===`CARDS`?18:o===`VA_BANQUE_PICK`?19:o===`COPY_PICK`?20:o===`REVEALED`?21:-1),bC(5),Cb((s=c.phase)===`CARDS`?23:s===`VA_BANQUE_PICK`?24:s===`OPEN_BET`?25:s===`BETTING`?26:s===`COPY_PICK`?27:s===`REVEALED`?28:-1)}},dependencies:[zr$1,Lr$1,r8,n8,Za,Ka,ki,Si,ie],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:12px}.head[_ngcontent-%COMP%]{flex:none;display:flex;flex-direction:column;gap:6px}.top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font:var(--%NS%mat-sys-title-medium)}.timer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.timer.urgent[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.card-info[_ngcontent-%COMP%]{flex:none;align-self:center;--%NS%mat-button-text-label-text-color: var(--%NS%mat-sys-on-surface-variant)}.actions[_ngcontent-%COMP%]{flex:none;display:flex;flex-direction:column;gap:8px}.actions[_ngcontent-%COMP%]:empty{display:none}.event[_ngcontent-%COMP%]{flex:none;display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:none;border-radius:20px;background:var(--%NS%mat-sys-tertiary-container);color:var(--%NS%mat-sys-on-tertiary-container);font:var(--%NS%mat-sys-body-medium);text-align:left;cursor:pointer}.event[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;font-size:20px;width:20px;height:20px}.event[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.event[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{opacity:.7}.event.mine[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-tertiary);color:var(--%NS%mat-sys-on-tertiary);font-weight:700}.played[_ngcontent-%COMP%]{flex:none;list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.played[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:16px;background:var(--%NS%mat-sys-tertiary-container);color:var(--%NS%mat-sys-on-tertiary-container);font:var(--%NS%mat-sys-body-small);overflow-wrap:anywhere}.played[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;font-size:18px;width:18px;height:18px}.played[_ngcontent-%COMP%]   li.mine[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-tertiary);color:var(--%NS%mat-sys-on-tertiary);font-weight:700}.question[_ngcontent-%COMP%]{padding:16px;border-radius:16px;background:var(--%NS%mat-sys-surface-container-high)}.category[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);color:var(--%NS%mat-sys-primary);text-transform:uppercase}.text[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small);margin:4px 0 0;overflow-wrap:anywhere}.answers[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}.answer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;gap:6px;padding:10px;border-radius:12px;background:var(--%NS%mat-sys-surface-container);min-width:0;overflow-wrap:anywhere}.answer.correct[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container)}.answer.wrong[_ngcontent-%COMP%]{opacity:.5}.open-points[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:-4px;font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-tertiary)}.open-points.owner[_ngcontent-%COMP%]{grid-column:1/-1;font:var(--%NS%mat-sys-label-large)}.bet-row[_ngcontent-%COMP%]{grid-column:1/-1;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;margin-bottom:-4px}.bet-row[_ngcontent-%COMP%]   .open-points[_ngcontent-%COMP%]{margin-bottom:0}.bet-row[_ngcontent-%COMP%]   .open-points[_ngcontent-%COMP%]:first-child{justify-content:flex-start;padding-left:10px}.bet-row[_ngcontent-%COMP%]   .open-points[_ngcontent-%COMP%]:last-child{justify-content:flex-end;padding-right:10px}.bet-row[_ngcontent-%COMP%]   .open-points.owner[_ngcontent-%COMP%]{grid-column:auto}.hint[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-error);text-align:center}.pick[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.choices[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px}.choice[_ngcontent-%COMP%]{min-width:0;min-height:44px;padding:8px 12px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface-container);color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-label-large);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.choice.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container)}.choice.selected[_ngcontent-%COMP%]   .choice-bet[_ngcontent-%COMP%]{color:inherit}.choice[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.choices.with-bets[_ngcontent-%COMP%]{grid-template-columns:1fr}.choices.with-bets[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}.choices.with-bets[_ngcontent-%COMP%]   .choice-bet[_ngcontent-%COMP%]:first-child{justify-self:start}.choices.with-bets[_ngcontent-%COMP%]   .choice-bet[_ngcontent-%COMP%]:last-child{justify-self:end}.choice-nick[_ngcontent-%COMP%]{min-width:0;overflow:hidden;text-overflow:ellipsis}.choice-bet[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-tertiary)}h3[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:4px 0}.waiting[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%mat-sys-on-surface-variant);margin:0}@media(max-height:680px){[_nghost-%COMP%], .content[_ngcontent-%COMP%]{gap:8px}.question[_ngcontent-%COMP%]{padding:12px}.text[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}}`]})};function Ms(n,i){if(n&1){let t=Ob();ba$1(0,`button`,11),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.store.settingsOpen.set(!1))}),ba$1(1,`mat-icon`),iT(2,`arrow_back`),Wd()()}}function Is(n,i){n&1&&(ba$1(0,`a`,5)(1,`mat-icon`),iT(2,`arrow_back`),Wd()())}function Ns(n,i){n&1&&(ba$1(0,`span`,12),iT(1,`·`),Wd(),iT(2,` Ustawienia `))}function Es(n,i){n&1&&(ba$1(0,`span`,8)(1,`mat-icon`),iT(2,`wifi_off`),Wd(),iT(3,` Łączenie…`),Wd())}function Rs(n,i){if(n&1){let t=Ob();ba$1(0,`button`,13)(1,`mat-icon`),iT(2,`more_vert`),Wd()(),ba$1(3,`mat-menu`,null,0)(5,`button`,14),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.store.closeRoom())}),ba$1(6,`mat-icon`),iT(7,`close`),Wd(),iT(8,` Zamknij pokój `),Wd()()}if(n&2){let t=jb(4),e=kb();My(`matMenuTriggerFor`,t),bC(5),My(`disabled`,e.store.busy())}}function Os(n,i){n&1&&(ba$1(0,`div`,9),Ba$1(1,`mat-spinner`,15),Wd())}function Ts(n,i){if(n&1&&(ba$1(0,`p`,18),iT(1),Wd()),n&2){let t=kb(2);bC(),Yy(t.store.errorMessage())}}function Ds(n,i){if(n&1){let t=Ob();ba$1(0,`div`,10)(1,`h2`),iT(2),Wd(),ba$1(3,`mat-form-field`,16)(4,`mat-label`),iT(5,`Twój nick`),Wd(),ba$1(6,`input`,17),hS(),Xy(`ngModelChange`,function(a){Ih(t);let o=kb();return lT(o.nick,a)||(o.nick=a),wh(a)}),Va$1(`keyup.enter`,function(){Ih(t);let a=kb();return wh(a.join())}),Wd()(),Ib(7,Ts,2,1,`p`,18),ba$1(8,`button`,19),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.join())}),iT(9,`Dołącz`),Wd()()}if(n&2){let t=kb();bC(2),tf(`Dołącz do pokoju `,t.store.code()),bC(4),Ky(`ngModel`,t.nick),My(`maxlength`,t.nickMaxLength),mS(),bC(),Cb(t.store.errorMessage()?7:-1),bC(),My(`disabled`,!t.nickValid)}}function Ps(n,i){if(n&1){let t=Ob();ba$1(0,`div`,9)(1,`mat-icon`,20),iT(2,`error`),Wd(),ba$1(3,`p`),iT(4),Wd(),ba$1(5,`div`,21)(6,`button`,22),Va$1(`click`,function(){Ih(t);let a=kb();return wh(a.store.retry())}),iT(7,`Spróbuj ponownie`),Wd(),ba$1(8,`a`,23),iT(9,`Strona główna`),Wd()()()}if(n&2){let t=kb();bC(4),Yy(t.store.errorMessage())}}function As(n,i){n&1&&Ba$1(0,`app-lobby`)}function Bs(n,i){n&1&&Ba$1(0,`app-round`)}function Vs(n,i){n&1&&Ba$1(0,`app-finished`)}function zs(n,i){if(n&1&&Ib(0,As,1,0,`app-lobby`)(1,Bs,1,0,`app-round`)(2,Vs,1,0,`app-finished`),n&2){let t,e=kb();Cb((t=e.store.state()?.status)===`LOBBY`?0:t===`IN_GAME`?1:t===`FINISHED`?2:-1)}}var eo=class n{store=h(gt);code=gi.required();nickMaxLength=20;nick=X(h(sE).nick);inSettings=of(()=>this.store.settingsOpen()&&this.store.view()===`room`&&this.store.isHost()&&this.store.state()?.status===`LOBBY`);constructor(){fl(()=>{let i=this.code();Z(()=>this.store.enter(i))})}get nickValid(){let i=this.nick().trim();return i.length>0&&i.length<=20}join(){this.nickValid&&this.store.join(this.nick())}static ɵfac=function(t){return new(t||n)};static ɵcmp=Xn({type:n,selectors:[[`app-room`]],inputs:{code:[1,`code`]},features:[rv([gt])],decls:16,vars:6,consts:[[`menu`,`matMenu`],[1,`room`],[1,`bar`],[1,`side`],[`matIconButton`,``,`aria-label`,`Wróć do listy graczy`],[`matIconButton`,``,`routerLink`,`/`,`aria-label`,`Wyjdź`],[1,`code`],[1,`side`,`end`],[1,`connecting`,`app-delayed`,`app-pulse`],[1,`center`],[1,`center`,`form`],[`matIconButton`,``,`aria-label`,`Wróć do listy graczy`,3,`click`],[1,`dot`],[`matIconButton`,``,`aria-label`,`Menu hosta`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`,`disabled`],[`diameter`,`48`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`matInput`,``,3,`ngModelChange`,`keyup.enter`,`ngModel`,`maxlength`],[1,`error`],[`matButton`,`filled`,3,`click`,`disabled`],[1,`big`],[1,`actions`],[`matButton`,`tonal`,3,`click`],[`matButton`,``,`routerLink`,`/`]],template:function(t,e){if(t&1&&(ba$1(0,`div`,1)(1,`header`,2)(2,`div`,3),Ib(3,Ms,3,0,`button`,4)(4,Is,3,0,`a`,5),Wd(),ba$1(5,`h1`,6),iT(6),Ib(7,Ns,3,0),Wd(),ba$1(8,`div`,7),Ib(9,Es,4,0,`span`,8),Ib(10,Rs,9,2),Wd()(),ba$1(11,`main`),Ib(12,Os,2,0,`div`,9)(13,Ds,10,5,`div`,10)(14,Ps,10,1,`div`,9)(15,zs,3,1),Wd()()),t&2){let a;bC(3),Cb(e.inSettings()?3:4),bC(3),tf(` Pokój `,e.store.code(),` `),bC(),Cb(e.inSettings()?7:-1),bC(2),Cb(e.store.view()===`room`&&e.store.connection()!==`open`?9:-1),bC(),Cb(e.store.view()===`room`&&e.store.isHost()?10:-1),bC(2),Cb((a=e.store.view())===`loading`?12:a===`join`?13:a===`error`?14:a===`room`?15:-1)}},dependencies:[dr$1,Ue,sr$1,yn,Sn,zr$1,Lr$1,zn,ge,Je,be,r8,n8,ia,na,Ia,Ie,je,Ma,oa,aa,tE,fi,Ci,Mi],styles:[`[_nghost-%COMP%]{display:block;height:100%}.room[_ngcontent-%COMP%]{height:100%;max-width:560px;margin:0 auto;display:flex;flex-direction:column}.bar[_ngcontent-%COMP%]{flex:none;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:4px;padding:4px 8px;min-width:0}.side[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;min-width:0}.side.end[_ngcontent-%COMP%]{justify-content:flex-end}.code[_ngcontent-%COMP%]{margin:0;font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-primary);white-space:nowrap}.code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin:0 4px;color:var(--%NS%mat-sys-on-surface-variant)}.connecting[_ngcontent-%COMP%]{--%NS%app-delay: 1.5s;display:flex;align-items:center;gap:4px;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small);white-space:nowrap}.connecting[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;color:var(--%NS%mat-sys-error)}main[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding:0 16px 16px;overflow-y:auto}main[_ngcontent-%COMP%] > app-lobby[_ngcontent-%COMP%], main[_ngcontent-%COMP%] > app-round[_ngcontent-%COMP%], main[_ngcontent-%COMP%] > app-finished[_ngcontent-%COMP%]{flex:1;min-height:0}.center[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center}.form[_ngcontent-%COMP%]{align-items:stretch}.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.big[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--%NS%mat-sys-on-surface-variant)}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error);margin:0}`]})};export{eo as Room};