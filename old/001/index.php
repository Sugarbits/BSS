<!DOCTYPE html> 
<meta charset="utf-8" /> 
<html>
<head>
	<title>Page Title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
</head>

<body>
	<div data-role="page">
		<div data-role="header"><h1>Page Title</h1>
				<div data-role="tabs" id="tabs"><!--total-->
		 <div data-role="navbar">
		  <ul>
			<li><a href="#one" data-ajax="false">one</a></li>
			<li><a href="#two" data-ajax="false">two</a></li>
			<li><a href="#tree" data-ajax="false">three</a></li>
		  </ul>
		  </div>
		


		  <div data-role="controlgroup" data-type="horizontal" data-mini="true">
			<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-plus ui-btn-b">Add</a>
			<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Delete</a>
			<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-grid ui-btn-b">More</a>
		</div>
		<div role="main" class="ui-content">
			<div id="one" class="ui-body-d ui-content">
				<h1>First tab contents</h1>
					<p>第一步的頁面</p>
					<div style="border-bottom-width:0;" data-role="fieldcontain">	
					<label for="text-name">名稱</label>
					<input  style="text-align: left" type="text" name="text-name" id="text-basic" value="">
					<label for="text-amount">數量</label>
					<input  style="text-align: left" type="text" name="text-amount" id="text-basic" value="">
					<label for="text-unit">單位</label>
					<input  style="text-align: left" type="text" name="text-unit" id="text-basic" value="">
					<div class="ui-field-contain">
						<fieldset data-role="controlgroup" data-type="horizontal">
						<legend>種類</legend>
							<input type="radio" name="radio-choice-h-1" id="r1a" value="a">
							<label for="r1a">肉品</label>
							<input type="radio" name="radio-choice-h-1" id="r1b" value="b">
							<label for="r1b">海鮮</label>
							<input type="radio" name="radio-choice-h-1" id="r1c" value="c">
							<label for="r1c">蔬菜</label>
							<input type="radio" name="radio-choice-h-1" id="r1d" value="d">
							<label for="r1d">乾貨</label>
						</fieldset>
					</div>
				</div>
			</div>
			<div id="two">
				<h1>Second tab contents</h1>
					<p>第二步的頁面</p>
					<div style="border-bottom-width:0;" data-role="fieldcontain">	
					<label for="text-basic">名稱</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<label for="text-basic">數量</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<label for="text-basic">單位</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<div class="ui-field-contain">
						<fieldset data-role="controlgroup" data-type="horizontal">
						<legend>種類</legend>
							<input type="radio" name="radio-choice-h-2" id="r2a" value="a">
							<label for="r2a">肉品</label>
							<input type="radio" name="radio-choice-h-2" id="r2b" value="b">
							<label for="r2b">海鮮</label>
							<input type="radio" name="radio-choice-h-2" id="r2c" value="c">
							<label for="r2c">蔬菜</label>
							<input type="radio" name="radio-choice-h-2" id="r2d" value="d">
							<label for="r2d">乾貨</label>
						</fieldset>
					</div>
				</div>
			</div>
			<div id="tree">
				<h1>Third tab contents</h1>
					<p>第三步的頁面</p>
					<div style="border-bottom-width:0;" data-role="fieldcontain">	
					<label for="text-basic">名稱</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<label for="text-basic">數量</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<label for="text-basic">單位</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="">
					<div class="ui-field-contain">
						<fieldset data-role="controlgroup" data-type="horizontal">
						<legend>種類</legend>
							<input type="radio" name="radio-choice-h-3" id="r3a" value="a">
							<label for="r3a">肉品</label>
							<input type="radio" name="radio-choice-h-3" id="r3b" value="b">
							<label for="r3b">海鮮</label>
							<input type="radio" name="radio-choice-h-3" id="r3c" value="c">
							<label for="r3c">蔬菜</label>
							<input type="radio" name="radio-choice-h-3" id="r3d" value="d">
							<label for="r3d">乾貨</label>
						</fieldset>
					</div>
				</div>
			</div>


		</div>
	</div><!--total end-->
	<div data-role="footer"><h4>Page Footer</h4></div>
	</div>
</body>
</html>