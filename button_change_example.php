<!DOCTYPE html> 
<meta charset="utf-8" /> 
<html>
<head>
	<title>Page Title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" href="css/test.css" /><!--自訂義-->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
</head>

<body>
<div data-role="page">
    <div data-role="content">
 <!--<form>
        <fieldset>-->
            <ul id="set" data-role="listview" data-split-icon="info" data-split-theme="a" data-inset="true">
                <li>
                    <a href="#" class="set2-custom">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1">checkbox 1</label>
                    </a>
                    <a id='test1' href="#" data-switch="on"></a>
                </li>
                <li>
                    <a href="#" class="set2-custom">
                        <input type="checkbox" name="cb2" id="cb2" />
                        <label for="cb2">checkbox 2</label>
                    </a>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#" class="set2-custom">
                        <input type="checkbox" name="cb3" id="cb3" />
                        <label for="cb3">checkbox 3</label>
                    </a>
                    <a href="#"></a>
                </li>
            </ul>
        <!--</fieldset>
 </form>-->

    </div>
</div>
</body>
</html>
<script>
 $(window).load(function(){

 $('#test1').on("click",(function() {
		//alert('');
        //  $(this).buttonMarkup({theme: 'b'});
       /* $(this).find('span.ui-btn').buttonMarkup({
		icon: "star",
		theme: 'b'
		});*/
		$(this).removeClass('ui-icon-info ui-btn-a').addClass('ui-icon-star')/*.enhanceWithin()*/;
		$(this).buttonMarkup({
			theme: 'b'
			}).enhanceWithin();
$("set").listview("refresh");
  }));
	
});
</script>