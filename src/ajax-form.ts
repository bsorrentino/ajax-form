
type FormData = {
    [id:string]:string
}

// @see
// https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho

export class AjaxFormElement extends HTMLElement {

    /*
    static get observedAttributes() {
        return ['method', 'mode'];
    }
    
    get method():string {   
        return this.getAttribute('method') || 'POST';
    }

    set method( value:string ) {
        this.setAttribute( 'method', value );
    }

    get mode():string {   
        return this.getAttribute('onError') || 'cors';
    }

    set mode( value:string ) {
        this.setAttribute( 'mode', value );
    }

    attributeChangedCallback(name:string, oldValue:string, newValue:string) { 

        console.log( name, oldValue, newValue)
    }
    */

    private _form?:HTMLFormElement

    constructor() {
        super()

        //this.attachShadow( { mode: 'open'} )
        //this.shadowRoot?.appendChild( this.template.content.cloneNode(true) )

    }

    private _serializeFormToJson():FormData|null {
        if( !this._form ) {
            return null
        }

        let result:FormData = {}
        this._form.childNodes.forEach( node => {

            if( node.nodeType === this.ELEMENT_NODE && node.nodeName === 'INPUT' ) {

                const input = node as HTMLInputElement

                if( input.id.length > 0 ) {
                    result[input.id] = input.value
                }
            } 
        })

        return result

    }

    private _fire( event:string, data:any, bubbles = true ) {
        this.dispatchEvent(new CustomEvent(event , {bubbles: bubbles, detail: data} ));
    }

    public submit( event?:Event ) {
        if (event) {
            event.preventDefault();
        }

        console.log( event )

        
        if( this._form ) {

            const data = this._serializeFormToJson()
            
            //console.dir( data )

            try  {
                fetch( this._form.action, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    //mode: 'cors', // no-cors, *cors, same-origin
                    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    //redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                .then( res => this._fire(  (!res.ok) ? 'ajax-form.error' : 'ajax-form.success', { message:res.statusText, res:res } ))
                .catch( err => this._fire( 'ajax-form.error', { message:err.message, err:err} ))

            }
            catch( err ) {
                this._fire( 'ajax-form.error',  { message:err.message, err:err}  );
            }

        }
        
        return false

    }

    public reset( event?:Event ) {
        if (event) {
            event.preventDefault();
          }

          console.log( event )
          if( this._form ) {
              this._form.reset()
          }
      
    }
    private _init() {
        if( this._form ) {
            console.log( 'init' )
            this._form.addEventListener('submit',  ev => this.submit(ev) )
            this._form.addEventListener('reset', ev => this.reset(ev) )
        }
    }

    connectedCallback () {

        const observer = new MutationObserver( (mutations) => {
            const result = mutations.find( record => record.addedNodes[0].nodeName === 'FORM' )
            if( result ) {
                this._form = result.addedNodes[0] as HTMLFormElement
                this._init()
            }  
            observer.disconnect()        
        });

        observer.observe( this , { childList:true } )

      }

    get template():HTMLTemplateElement {
        const template = document.createElement('template');

        template.innerHTML = `
          <slot></slot>
        `;

        return template
    } 
}

try {

    customElements.define('ajax-form', AjaxFormElement);

} catch (err) {
    console.dir( err );
}