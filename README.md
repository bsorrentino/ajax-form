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