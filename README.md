# ajax-form

webcomponent to submit from data through ajax request

## Features

* Lightweight webcomponent, no framework, no dependencies, just one javascript (see `dist` folder) 
* On submit, form's data are formatted as JSON object and sent through `POST` call without redirect 

## Usage

```html

    <h2>ajax-form element demo</h2>

    <ajax-form>
        <form action="/post">
            <input type="hidden" id="name" value="myname" >
            <input type="text" id="value" />
            <input type="submit" text="Submit" />
        </form>    
    </ajax-form>
```

### Events

event name | description | event detail
---- | ---- | ---
`ajax-form.error` | raised on submission error |  `Error` 
`ajax-form.result` | raised on submission success  | [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

### Handling Event 

```javascript
        document.addEventListener( 'ajax-form.result', function( ev ) {
            console.dir( ev.detail );

            if( !ev.detail.ok) {
                alert( ev.detail.statusText )
            }
            else {
                ev.detail.text().then( function(text) {
                    alert( text );
                })

            }
        })
        document.addEventListener( 'ajax-form.error', function( ev ) {
            console.dir( ev.detail );
            alert( ev.detail.message )
        })

```