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
	<script src="js/datadeal.js"></script><!--自訂義-->
	<script src="js/formdeal.js"></script><!--自訂義-->
	<script src="js/eventhandler.js"></script><!--自訂義-->
	<script src="js/verifydeal.js"></script><!--自訂義-->
</head>

<body>
	<div data-role="page">
		<div data-role="header"><h1>Page Title</h1>
		</div>
				<div data-role="tabs" id="tabs"><!--total-->
		 <div data-role="navbar">
		  <ul>
			<li><a href="#tab1" data-ajax="false">歷史</a></li>
			<li><a href="#tab2" data-ajax="false">新增</a></li>
			<li><a href="#tab3" data-ajax="false">確認</a></li>
			<li><a href="#tab4" data-ajax="false">算錢</a></li>
			<li><a href="#tab5" data-ajax="false">設置</a></li>
		  </ul>
		  </div>
		<div role="main" class="ui-content">
			<div id="tab1" class="ui-body-d ui-content">
				<h1>歷史紀錄</h1>
					<div style="border-bottom-width:0;" data-role="fieldcontain">	
					</div>
					<fieldset class="custom-fieldset" data-role="controlgroup" data-type="horizontal">
					<legend>種類</legend>
							<input type="radio"  name="radio-choice-h-3" id="r3a" value="1" disabled>
							<label for="r3a">肉品</label>
							<input type="radio" name="radio-choice-h-3" id="r3b" value="2" disabled>
							<label for="r3b">海鮮</label>
							<input type="radio" name="radio-choice-h-3" id="r3c" value="3" disabled>
							<label for="r3c">蔬菜</label>
							<input type="radio" name="radio-choice-h-3" id="r3d" value="4" disabled>
							<label for="r3d">乾貨</label>
						</fieldset>
					<label for="text-basic">名稱</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="=新增欄位的名稱" disabled>
					<label for="text-basic">數量</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="=確認欄位的數量" disabled>
					<label for="text-basic">單位</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="=新增欄位的單位" disabled>
					<label for="text-basic">金錢單位</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="" >
					<label for="text-basic">金錢總計</label>
					<input  style="text-align: left" type="text" name="text-basic" id="text-basic" value="" >
					
			</div>
			<div id="tab2" class="ui-body-d ui-content">
				<h1>新增清單</h1>
				<!--<button type="button" data-icon="gear" data-iconpos="right" data-mini="true" data-inline="true" id="add" data-cnt="0">Add</button>-->
				<div data-role="collapsibleset" data-content-theme="a" data-iconpos="right" id="set1" data-cnt="0">
				</div>
				<div style="border-bottom-width:0;" data-role="fieldcontain">
				<div class="ui-grid-solo">
					<div class="ui-block-a">
						<a href="#popupLogin" data-rel="popup" data-position-to="window"  class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-left"  data-transition="pop">&nbsp;</a>
						<!--<a href="#popupLogin" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-plus ui-btn-icon-left" data-transition="pop"></a>-->
					</div>
				</div>
					<div  data-history="false"  data-role="popup" id="popupLogin" data-theme="a" class="ui-corner-all">
						<!--<form>-->
							<div style="padding:10px 20px;">
								<h3>Please sign in</h3>
									<div class="ui-field-contain">
										<fieldset data-role="controlgroup" data-type="horizontal">
										<legend>種類</legend>
										<input type="radio" name="radio-choice-h-1" id="r1a" value="1">
										<label for="r1a">肉品</label>
										<input type="radio" name="radio-choice-h-1" id="r1b" value="2">
										<label for="r1b">海鮮</label>
										<input type="radio" name="radio-choice-h-1" id="r1c" value="3">
										<label for="r1c">蔬菜</label>
										<input type="radio" name="radio-choice-h-1" id="r1d" value="4">
										<label for="r1d">乾貨</label>
										</fieldset>
									</div>	
								<label for="select-name-1" class="select">名稱</label>
								<select name="select-name-1" id="select-name-1" data-native-menu="false">
									<option>請選擇</option>
								</select>
								<label for="text-amount-1">數量</label>
								<input  style="text-align: left" type="number" pattern="[0-9]*" name="number" id="text-amount-1" value="">
									<label for="text-unit-1">單位</label>
								<input  style="text-align: left" type="text" name="text-unit-1" id="text-unit-1" value="" readonly>
								<div data-role="controlgroup" data-type="horizontal" data-mini="false">
								
								<button id='tab1-add' class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-check ui-btn-b"></button>
								<!--<button id='tab1-add' class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b"></button>-->
								<!--<div data-role="popup" id="form-errmsg-1" class="ui-content" style="max-width:280px">
									<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
									<p>請填寫完整再送出</p>
								</div>-->
								</div>
								</div>
								
						<!--</form>-->
					</div>	

				</div>
			</div>
			
			<div id="tab3">
				<h1>確認清單</h1>
					<form>
						<fieldset data-role="controlgroup"  id="set2" data-cnt="0">
						</fieldset>
					</form>
				<div data-role="controlgroup" data-type="horizontal" data-mini="true">
					<a href="#" id="tab2-add" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-check ui-btn-b">OK</a>
					<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Cancel</a>
				</div>
			</div>
			<div id="tab4">
				<h1>計算金錢</h1>
					<div style="border-bottom-width:0;" data-role="fieldcontain">	
						
				<div data-role="collapsibleset" data-content-theme="a" data-iconpos="right" id="set3" data-cnt="0">
				</div>
						
					<div class="ui-field-contain">
					</div>
				</div>
				<div data-role="controlgroup" data-type="horizontal" data-mini="true">
				<!--	<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-check ui-btn-b">OK</a>
					<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Clear</a>-->
					<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-grid ui-btn-b">More</a>
				</div>
			</div>
			<div id="tab5">
				<h1>數據設置</h1>
					<div style="border-bottom-width:0;" data-role="fieldcontain">
						<fieldset data-role="controlgroup" data-type="horizontal">
						<legend>種類</legend>
							<input type="radio" name="radio-choice-h-4" id="r4a" value="1">
							<label for="r4a">肉品</label>
							<input type="radio" name="radio-choice-h-4" id="r4b" value="2">
							<label for="r4b">海鮮</label>
							<input type="radio" name="radio-choice-h-4" id="r4c" value="3">
							<label for="r4c">蔬菜</label>
							<input type="radio" name="radio-choice-h-4" id="r4d" value="4">
							<label for="r4d">乾貨</label>
						</fieldset>					
					<label for="text-name">名稱</label>
					<input  id="text-name" style="text-align: left" type="text" name="text-name"value="">
					<label for="text-basic">單位</label>
					<input  id="text-unit" style="text-align: left" type="text" name="text-unit"  value="">
					<div class="ui-field-contain">

					</div>
					<div data-role="popup" id="form-errmsg-5" class="ui-content" style="max-width:280px">
						<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
						<p>請填寫完整再送出</p>
					</div>
							<div data-role="controlgroup" data-type="horizontal" data-mini="true">
								<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-check ui-btn-b"  onclick="datadeal_insert('radio-choice-h-4','text-name','text-unit');">Add</a>
								<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Clear</a>
								<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-grid ui-btn-b">More</a>
							</div>
				</div>
			</div>


		</div>
	</div><!--total end-->
	<div data-role="footer"><h4>Page Footer</h4></div>
</body>
</html>
<script>
   $(window).load(function(){
      eventhandler_radio();
      eventhandler_option();
	  eventhandler_addbuttton();
	  eventhandler_tab1_addbuttton();
	  eventhandler_tab2_addbuttton();
   });
</script>