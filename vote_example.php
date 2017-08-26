<!DOCTYPE html> 
<meta charset="utf-8" /> 
<html>
<head>
	<title>Page Title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" href="css/vote_example.css" /><!--自訂義-->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
</head>

<body>
<div data-role="page">
    <div data-role="content">
        <ul class="has-vote-btns" data-role="listview" data-split-icon="bars" data-split-theme="d">
            <li> 
                <a href="#">
                    <h3>Line Item 1</h3>
                    <p>Sub title 1</p>
                </a>
                <a href="#"></a>
                <div class="vote-btns"> 
                    <a href="#" class="ui-btn ui-icon-arrow-u ui-btn-icon-notext" title="Like"></a>
                    <a href="#" class="ui-btn ui-icon-arrow-d ui-btn-icon-notext" title="Dislike"></a>
                </div>
            </li>
            <li> <a href="#">
                    <b>Line Item 2</b>
				  </a>
<a href="#"></a>
                <div class="del-btns">
					<a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext" title="delete"></a>
                </div>
            </li>
            <li> <a href="#">
                    <b>Line Item 2</b>
				  </a>
<a href="#"></a>
                <div class="del-btns">
					<a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext" title="delete"></a>
                </div>
            </li>
        </ul>
     
	 <ul class="has-del-btns" data-role="listview" data-split-icon="bars" data-split-theme="d">

            <li> <a href="#">
                    <b>Line Item 2</b>
				  </a>
<a href="#"></a>
                <div class="del-btns">
					<a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext" title="delete"></a>
                </div>
            </li>
            <li> <a href="#">
                    <b>Line Item 2</b>
				  </a>
<a href="#"></a>
                <div class="del-btns">
					<a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext" title="delete"></a>
                </div>
            </li>
        </ul>


    </div>
</div>
</body>
</html>
<script>
 //$(window).load(function(){

//});
</script>