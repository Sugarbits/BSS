function eventhandler_radio(){
    $('input[type=radio][name=radio-choice-h-1]').on("change",(function() {
	var _var = $( "input[name=radio-choice-h-1]:checked" ).val();
	var id = 'select-name-1';
	//alert(_var);
        if (_var == '') {
            alert("null");
        }else{
            //alert(":"+id+":"+_var);
			formdeal_optionfilled(JSON.parse(datadeal_select()),id,_var);
        }
		})
    );
}
//$('選擇子').on("事件",(function() {...}));
function eventhandler_option(){
    $('#select-name-1').on("change",(function() {
	var _var = $( "#select-name-1 option:selected" ).attr('value');
	var _unit = $( "#select-name-1 option:selected" ).attr('data-unit');
	var id = 'text-unit-1';
	//alert(_var);
        if (_var == '') {
            alert("null");
        }else{
            //alert(":"+id+":"+_var);
			formdeal_inputfilled(id,_unit);
        }
		})
    );
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_addbuttton(){
    $('#add').on("click",(function() {
	var nextId = (parseInt($('#add').attr('data-cnt')))+1;
	$('#add').attr('data-cnt',nextId);
	//var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Section " + nextId + "</h3><p>I am the collapsible content in a set so this feels like an accordion. I am hidden by default because I have the 'collapsed' state; you need to expand the header to see me.</p></div>";
	var content = "<div class='ui-grid-solo'><button class='ui-btn' id='set"+nextId+"'>Section " + nextId + "</button></div>";
	$( "#set" ).append( content ).collapsibleset( "refresh" );
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab1_addbuttton(){
    $('#tab1-add').on("click",(function() {
		var _name = $('#select-name-1 option:selected').text();
		var _id = $('#select-name-1').val();
		var _name = $('#select-name-1 option:selected').text();
		var _type = $( "input[name=radio-choice-h-1]:checked" ).val();
		var _amount = $( "#text-amount-1" ).val();
		var _unit = $( "#text-unit-1" ).val();
		var _data = {
			id:_id,
			name:_name,
			type:_type,
			amount:_amount,
			unit:_unit
		};
		if(true == verifydeal_radio('radio-choice-h-1') && verifydeal_option('select-name-1') && verifydeal_input('text-amount-1') && verifydeal_input('text-unit-1')){
			formdeal_buttonadd1(_data);
			formdeal_buttonadd2(_data);
			$(".ui-popup").popup( "close" );
		}else{
		//$( "#form-errmsg-1" ).popup( "open" );
		alert("資料填寫不完整");
		//
		;
		}
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab2_popupbutton(){
    $('#tab2-pupbtn1-1').on("click",(function() {
	var _aid = $('#popupTotal').attr('data-aid');
		/*var _data = {
			name:_name,
			type:_type,
			amount:_amount,
			unit:_unit
		};*/
		if(true ==  verifydeal_input('text-total-2')){
			var _total = parseInt($( "#text-total-2" ).val());
			$("#"+_aid).attr('data-total',_total);
			$('#popupTotal').popup( "close" );
		}else{
		//alert('click #tab2-pupbtn1-1 exit');
		//$( "#form-errmsg-1" ).popup( "open" );
		$('#popupTotal').popup( "close" );
		}
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab2_popup2button1(){
    $('#tab2-pupbtn2-1').on("click",(function() {
	//alert('Y');
	var obj = (datadeal_invert_checkbox2get('checkbox-2'));
	datadeal_itemInsert(JSON.stringify(obj));
	//datadeal_itemInsert();
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab2_popup2button2(){
    $('#tab2-pupbtn2-2').on("click",(function() {
	//alert('N');
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab2_addbuttton(){
    $('#tab2-add').on("click",(function() {
		var idArray = (datadeal_checkbox2get('checkbox-2'));
		formdeal_checkbox2change(idArray);
	}));
}

//$('選擇子').on("事件",(function() {...}));
function eventhandler_tab2_sendbuttton(){
    $('#tab2-send').on("click",(function() {
		var itemObjSize = (datadeal_invert_checkbox2get('checkbox-2')).length;;
		var itemDisSize = $("input:checkbox:checked[name=checkbox-2]:disabled").length;//計算disabled總數
		var itemAllSize = $("input:checkbox[name=checkbox-2]").length;//計算總數
		
		//a：總項目 d：選項目 o：填項目
		/*情況組合 
		[1] (a=0 || d==0)  
		[非1-1]、 (o==0) 
		[非1-1]、 (o==0) 
		*/
		if(itemAllSize == 0 || itemDisSize == 0){
			alert('無項目');
		}else{
			//if(itemObjSize.length !== itemDisSize){
			if(itemObjSize== 0){
				alert('全部未填寫');
			}else{
				$('#popupSendText').text('未勾選或是填寫者，將不會被儲存');
				$( "#popupSend" ).popup( "open" );
				
			}
			
		}
		/*else if(itemObjSize=== itemAllSize && itemObjSize>0){
			$('#popupSendText').text('儲存後資料將被清除');
		}else if(itemObjSize=== itemAllSize && itemObjSize>0){
			$('#popupSendText').text('系統偵測到未填寫的，儲存後資料將被清除');
		}*/
		//alert(itemAllSize+','+itemObjSize)
		 
	}));
}

//$('選擇子').on("事件",(function() {...}));
//http://stackoverflow.com/questions/18485493/jquery-mobile-change-switch-theme-on-listview-data-split-icon
function eventhandler_ckbox2_sidebtn(id){
    $('#'+id).on("click",(function() {
		if(true == verifydeal_switch(id)){
		var _cnt = parseInt((id).split("-")[2]);
			//alert($(this).closest("li").attr('data-unit'));
			//$("#ckbox2-sidebtn-"+_cnt).attr('data-theme','e').enhanceWithin();
		  $( "#popupTotal" ).attr('data-aid',id);//give val to #popupTotal  data-aid
		  $( "#popupTotal" ).popup( "open" );
		}else{
			alert("未啟用");
		}
	}));
}

function eventhandler_tab1_taphold(id){
//$( "#"+id ).bind( "taphold", tapholdHandler_tab1(id) );//
	$( "#"+id ).bind( "taphold", function(){
		alert(id);
	});
}

function eventhandler_tab1_del(id){
	$( "#"+id ).on("click",(function() {
		if(true == verifydeal_switch(id)){
		var _cnt = parseInt((id).split("-")[2]);
		$(this).closest("li").animate({
				opacity: 'hide', // animate slideUp
				right: '500px',  // slide left
				}, 350, 'linear', function() {
			$(this).remove();
		});
		$("set1").listview("refresh");
		$( "#checkbox-2-"+_cnt ).parent().remove().enhanceWithin();//要連外面包層一齊刪掉 div ui-checkbox
		$( "#item-3-"+_cnt ).remove().enhanceWithin();
		}else{
			alert("已購買禁用");
		}
	}));

}

function eventhandler_tab1_fix(id){
	$( "#"+id ).on("click",(function() {
		if(true == verifydeal_switch(id)){
			alert('fix');
		}else{
			alert("已購買禁用");
		}
	}));
}

function eventhandler_popup2(id){
	$( "#"+id ).bind({
   popupafteropen: function() {
   //alert('open');
		var _aid = $(this).attr('data-aid');
		var _val = parseInt($("#"+_aid).attr('data-total'));
		$('#'+_aid).buttonMarkup({theme: 'b'});
		//alert('val:'+_val);
	if(-1 == _val){
			$('#popupTotalText').html('輸入總價');
			//$('#tab2-pupbtn1-1').removeClass('ui-icon-edit').addClass('ui-icon-check').enhanceWithin();
			
		}else{
			$('#popupTotalText').html('修改總價');
			formdeal_inputfilled('text-total-2',_val);
			//$('#tab2-pupbtn1-1').removeClass('ui-icon-check').addClass('ui-icon-edit').enhanceWithin();
		}
		
		$("set2").listview("refresh");
	},
    popupafterclose: function() {
	//alert('close');
		//var _aid = $('popupTotal').attr('data-aid');
		var _aid = $(this).attr('data-aid');
		var _val = parseInt($("#"+_aid).attr('data-total'));
	//	$("#"+$(this).attr('data-aid'));
	if(-1 == _val){
		;
		}else{
		formdeal_jqm_iconchange(_aid,'ui-icon-info','ui-icon-star');
		}
		$('#'+_aid).buttonMarkup({theme: 'a'});
		$("set2").listview("refresh");
		formdeal_inputclear('text-total-2');
	}
});
	
}

function eventhandler_popupsend(id){
	  $( "#"+id ).bind({
       popupafteropen: function(event, ui) { 
                var date = new Date();
				console.log('送出表單開啟觸發eventhandler_popupsend')
       }
    });
	
}