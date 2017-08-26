<!DOCTYPE html> 
<meta charset="utf-8" /> 
<html>
<head>
	<title>Page Title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" href="css/sp.css" /><!--自訂義-->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
</head>

<body>
	<div data-role="page">

		<div data-role="header"><h1>Page Title</h1>

		</div>
				<div data-role="controlgroup" data-type="horizontal">
   <select>
      <option>$</option>
      <option>€</option>
      <option>£</option>
      <option>¥</option>
      <option>₩</option>
      <option>₹</option>
   </select>
   <input id="currency-controlgroup" type="text" data-wrapper-class="controlgroup-textinput ui-btn">
   <button>.00</button>
</div>
<div data-role="controlgroup" data-type="horizontal">
<button style="width:150px">牛腱</button>
   <input  maxlength="5" style="width:75px" id="currency-controlgroup" type="text" data-wrapper-class="controlgroup-textinput ui-btn">
   <button>x8</button>
    <input style="width:75px" id="currency-controlgroup" type="text" data-wrapper-class="controlgroup-textinput ui-btn">
</div>
	</div><!--total end-->


	<div data-role="footer"><h4>Page Footer</h4></div>
	</div>
</body>
</html>
<script>
   $(window).load(function(){
   });
</script>