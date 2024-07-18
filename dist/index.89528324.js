class e extends HTMLElement{get bubbles(){return!!JSON.parse(this.getAttribute("event-bubbles")||"true")}set bubbles(e){this.setAttribute("event-bubbles",String(e))}static get observedAttributes(){return["event-bubbles"]}attributeChangedCallback(e,t,r){console.log(e,t,r)}constructor(){super(),this.appendChild(this.template.content.cloneNode(!0))}_serializeFormToJson(){if(!this._form)return null;let e={},t=r=>{r.nodeType===this.ELEMENT_NODE&&("INPUT"===r.nodeName||"SELECT"===r.nodeName?r.name.length>0&&(e[r.name]=r.value):r.childNodes.forEach(t))};return this._form.childNodes.forEach(t),e}_fire(e,t){let r=this.bubbles;console.log(r),this.dispatchEvent(new CustomEvent(e,{bubbles:r,detail:t}))}submit(){if(!this._form)return;let e=this._form.reportValidity();console.log("valid",e),e&&this._onSubmit()}_onSubmit(e){if(!this._form)return;e&&e.preventDefault();let t=this._serializeFormToJson();try{fetch(this._form.action,{method:"POST",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then(e=>this._fire("ajax-form.result",e)).catch(e=>this._fire("ajax-form.error",e))}catch(e){this._fire("ajax-form.error",e)}}reset(e){e&&e.preventDefault(),console.log(e),this._form&&this._form.reset()}_init(){this._form&&(console.log("init"),this._form.addEventListener("submit",e=>this._onSubmit(e)),this._form.addEventListener("reset",e=>this.reset(e)))}connectedCallback(){let e=new MutationObserver(t=>{let r=t.find(e=>"FORM"===e.addedNodes[0].nodeName);r&&(console.debug("MutationObserver",r),this._form=r.addedNodes[0],this._init()),e.disconnect()});e.observe(this,{childList:!0})}disconnectedCallback(){}get template(){let e=document.createElement("template");return e.innerHTML=`
          <slot name="form"></slot>
        `,e}}try{customElements.define("ajax-form",e)}catch(e){console.dir(e)}
//# sourceMappingURL=index.89528324.js.map
