# vSort

To include vSort plugin

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.vSort.min.js"></script>

To run a javascript code after sorting is done

    data-callback="alert('list order modified')"
 
Sample code

    <!-- sort container -->
    <div data-callback="alert('list order modified')">
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

To update vSort-lists after new items are added to sort container

    $(document).vSort();

