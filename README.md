# ajax-form

webcomponent to submit from data through ajax request

## Features

* Lightweight webcomponent, no framework, no dependencies, just one javascript (see `dist` folder) 
* On submit, form's data are formatted as JSON object and sent through `POST` call without redirect 

## Usage

```html

    <h2>ajax-form element demo</h2>

    <ajax-form>
        <form slot="form" action="/post">
            <input type="hidden" name="name" value="myname" >
            <input type="text" name="value" />
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
### POST Call specification

the POST call is performed using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) below there are the parameters' values used by this component

name | value | description 
---- | ---- | ----
body | json object with input element as attribute `[name:value]` | An object or null to set request's body.
cache | `'default'` | A string indicating how the request will interact with the browser's cache to set request's cache.
headers | `{'Content-Type': 'application/json'}` | A Headers object, an object literal, or an array of two-item arrays to set request's headers.
method | `'POST'` | A string to set request's method.
referrerPolicy | `'no-referrer'`|   A referrer policy to set request's referrerPolicy.
integrity | not provided| A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
keepalive | not provided |  A boolean to set request's keepalive.
credentials | not provided | A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
mode: | not provided | A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
redirect | not provided | A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
referrer | not provided |  A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
signal | not provided | An AbortSignal to set request's signal.

## TO DO

* Improve configurability

