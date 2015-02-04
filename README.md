# vSort

To update vSort-lists after new item is added

    $(document).vSort();

To run a javascript code after sorting is done

    data-callback="alert('hi')"
 
Scripts
=======
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.vSort.min.js"></script>

    <ul data-callback="alert('list order modified')">
        <li class="sortitem"><span class="sorthandle"> </span>111111<br>111111</li>
        <li class="sortitem"><span class="sorthandle"> </span>222222<br>222222<br>222222</li>
        <li class="sortitem"><span class="sorthandle"> </span>333333<br>333333<br>333333<br>333333</li>
    </ul>
