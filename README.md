# vSort
vSort is a simple jQuery plugin for making lists sortable with a handle

 less than 1.4kB including css (minimized)
 
[<img width="360" height="208" src="https://cloud.githubusercontent.com/assets/4730683/6038591/5ba438ce-ac84-11e4-9e7b-f96a9ba02a8e.png" alt="Screenshot">](http://code.mgvz.com/vSort/)

[Demo](http://code.mgvz.com/vSort/) Tested in IE8, FireFox, Chrome

To include vSort plugin
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.vSort.min.js"></script>
```

To run a javascript code after sorting is done
```html
data-callback="alert('list order modified')"
```

Sample code
```html
<style>
    #demo {background:#E2E2E2;border:2px solid red;}
    .sortitem{background:#fff;border:2px solid #ccc;padding-left:20px;}
    .sortitem .sorthandle{position:absolute;top:5px;bottom:5px;left:3px;width:8px;display:none;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAB3RJTUUH3wIDBycZ/Cj09AAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAAWSURBVHjaY2DABhoaGupBGMRmYiAEAKo2BAFbROu9AAAAAElFTkSuQmCC');}
    .sortitem:hover .sorthandle{display:block;}
</style>
<!-- sort container -->
<div id="demo" data-callback="alert('list order modified')">
    <div class="sortitem"> <!-- sort item -->
        <span class="sorthandle"> </span> <!-- sort handle -->
        111111<br>111111
    </div>
    <div class="sortitem">
        <span class="sorthandle"> </span>
        222222<br>222222<br>222222
    </div>
    <div class="sortitem">
        <span class="sorthandle"> </span>
        333333<br>333333<br>333333<br>333333
    </div>
</div>
```

To update vSort-lists after new items are added to sort container
```javascript
$(document).vSort();
```
