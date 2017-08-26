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
		var _type = $( "input[name=radio-choice-h-1]:checked" ).val();
		var _amount = $( "#text-amount-1" ).val();
		var _unit = $( "#text-unit-1" ).val();
		var _data = {
			name:_name,
			type:_type,
			amount:_amount,
			unit:_unit
		};
		if(true == verifydeal_radio('radio-choice-h-1') && verifydeal_option('select-name-1') && verifydeal_input('text-amount-1')){
			formdeal_buttonadd1(_data);
			formdeal_buttonadd2(_data);
			formdeal_buttonadd3(_data);
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
function eventhandler_tab2_addbuttton(){
    $('#tab2-add').on("click",(function() {
		var idArray = (datadeal_checkbox2get('checkbox-2'));
		formdeal_checkbox2change(idArray);
	}));
}

function eventhandler_tab3_auto(fromId,toId,val){
$("#"+fromId).on("change",(function() {
	var _var = $( "#"+toId ).attr('value',parseInt($("#"+fromId).val())*val);
	//alert(_var);
		})
    );
}