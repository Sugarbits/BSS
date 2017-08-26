//讀取book資料,並條列印出
//function formdeal_optionfilled(data,id,type)
function formdeal_optionfilled(data,id,type){
		//console.log('data{JSON}');
		console.log(data);
		$('#'+id).empty(); 
		formdeal_inputclear('text-unit-1');
  for(key in data){
	if(("listId" in data[key]) && (data[key].listType == type)){//確定正確格式(!可能會拖慢速度
		$('#'+id).append("<option data-unit="+data[key].listUnit+" value="+data[key].listId+">"+data[key].listName+"</option>");
	}
  }
  		//mobile jquery refresh
		var myselect = $( '#'+id);
		myselect[0].selectedIndex = -1;
		myselect.selectmenu( "refresh" );
		//mobile jquery refresh end
}//END
//function formdeal_inputfilled(id,str)
function formdeal_inputfilled(id,str){
		//console.log('data{JSON}');
		console.log(str);
		$('#'+id).val(str);
  		//mobile jquery refresh
		//mobile jquery refresh end
}//END
//function formdeal_inputfilled(id,str)
function formdeal_buttonadd1(data){
//<input='button' class='ui-btn' id='set"+nextId+"' value='"+data.name+" x" + data.amount + "'/>
	var nextId = (parseInt($('#set1').attr('data-cnt')))+1;
	$('#set1').attr('data-cnt',nextId);
	//var content = "<div class='ui-grid-solo' data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' id='divset"+nextId+"'><div class='ui-block-a'><input type='button' class='ui-btn' value='More'></div></div>";
	var content = "<div class=\"ui-grid-solo\"  data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' id='divset"+nextId+"'>";
	content += "<div class=\"ui-block-a\"><a href=\"#\" class=\"ui-btn ui-shadow ui-corner-all\">"+data.name+" x" + data.amount + "</a></div>";
	content += "</div>";
	$( "#set1" ).append( content ).collapsibleset( "refresh" );
		//mobile jquery refresh
		//mobile jquery refresh end
}//END
//function formdeal_inputfilled(id,str)
function formdeal_buttonadd2(data){
//<input='button' class='ui-btn' id='set"+nextId+"' value='"+data.name+" x" + data.amount + "'/>
	var nextId = (parseInt($('#set2').attr('data-cnt')))+1;
	$('#set2').attr('data-cnt',nextId);
	//var content = "<div class='ui-grid-solo' data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' id='divset"+nextId+"'><div class='ui-block-a'><input type='button' class='ui-btn' value='More'></div></div>";
	var meta =  " data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' ";
	var content = "<input class='custom' type=\"checkbox\" name=\"checkbox-2\" id=\"checkbox-2-"+nextId+"\" value=\""+data.name+","+data.type+","+data.amount+","+data.unit+"\"><label for=\"checkbox-2-"+nextId+"\">"+data.name+" x" + data.amount + "</label>";
	$( "#set2" ).append( content ).enhanceWithin();
	//$("div").trigger('create');
							
		//mobile jquery refresh
		//mobile jquery refresh end
}//END
function formdeal_buttonadd3(data){
//<input='button' class='ui-btn' id='set"+nextId+"' value='"+data.name+" x" + data.amount + "'/>
	var nextId = (parseInt($('#set3').attr('data-cnt')))+1;
	$('#set3').attr('data-cnt',nextId);
	//var content = "<div class='ui-grid-solo' data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' id='divset"+nextId+"'><div class='ui-block-a'><input type='button' class='ui-btn' value='More'></div></div>";
	var meta =  " data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"' ";
	var content = "<div style=\"display:none;\" id=\"item-3-"+nextId+"\" data-role=\"controlgroup\" data-type=\"horizontal\">";
	content += "<button style=\"width:100px\">"+data.name+"</button>";
	content += "<input  maxlength=\"5\" style=\"width:75px\" id=\"unitmoney-3-"+nextId+"\" type=\"text\" data-wrapper-class=\"controlgroup-textinput ui-btn\">";
	content += "<button style=\"width:50px\">x"+data.amount+"</button>";
	content += "<input style=\"width:75px\" id=\"totalmoney-3-"+nextId+"\" type=\"text\" data-wrapper-class=\"controlgroup-textinput ui-btn\" readonly>";
	//content +=  "<a href=\"#\" class=\"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext\">Icon only</a>";
	content += "</div>"; 
	$( "#set3" ).append( content ).enhanceWithin();
	eventhandler_tab3_auto("unitmoney-3-"+nextId+"","totalmoney-3-"+nextId+"",parseInt(data.amount));
	//$("div").trigger('create');
							
		//mobile jquery refresh
		//mobile jquery refresh end
}//END
function formdeal_checkbox2change(array){
//<input='button' class='ui-btn' id='set"+nextId+"' value='"+data.name+" x" + data.amount + "'/>
		for(k in array){
			//$("#"+array[k]).html('text-decoration').enhanceWithin(); 
			$("#"+array[k]).checkboxradio('disable');
			$("label[for='"+$("#"+array[k]).attr('id')+"']").append('(已購買)').enhanceWithin();
			$("#item-3-"+array[k].split("-")[2]).show();
		}//.attr('disabled',true)
		//mobile jquery refresh
		//mobile jquery refresh end
}//END
function formdeal_inputclear(id){
		//console.log('data{JSON}');
		$('#'+id).val('');
  		//mobile jquery refresh
		//mobile jquery refresh end
//END
}