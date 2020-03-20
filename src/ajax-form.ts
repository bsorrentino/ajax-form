
type FormData = {
    [id:string]:string
}

// @see
// https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho
// https://www.codementor.io/ayushgupta/vanilla-js-web-components-chguq8goz
export class AjaxFormElement extends HTMLElement {

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

    private _submit( event:Event ) {
        if (event) {
            event.preventDefault();
        }

        console.log( event )

        
        if( this._form ) {

            const data = this._serializeFormToJson()
            
            console.dir( data )

            fetch( this._form.action, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    //redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                .then( res => {
                    console.dir( res )
                })
                .catch( err => {
                    console.error( err )
                })

        }
        

    }

    private _reset( event:Event ) {
        if (event) {
            event.preventDefault();
          }

          console.log( event )
      
    }
    private _init() {
        if( this._form ) {
            console.log( 'init' )
            this._form.addEventListener('submit',  ev => this._submit(ev) )
            this._form.addEventListener('reset', ev => this._reset(ev) )
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
    console.error( err );
}