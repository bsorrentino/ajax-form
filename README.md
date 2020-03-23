# ajax-form

webcomponent to submit from data through ajax request

## Features

* Lightweight webcomponent, no framework, no dependencies, just one javascript (see `dist` folder) 
* On submit, form's data are formatted as JSON object and sent through POST call without redirect 

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
`ajax-form.error` | raised on submission error |  `{ message:function, err?:Error, res?:Response }` 
`ajax-form.success` | raised on submission success  | `{ message:function, res:Response }`

### Handling Event 

```javascript
    document.addEventListener( 'ajax-form.error', function( event ) {
        console.dir( event );
        alert( event.detail.message() )
    })

```