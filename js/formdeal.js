//讀取list資料,並條列印出
//function formdeal_historyfilled(data,id)
function formdeal_historydetailfilled(data,id){
	var target = $('#'+id);
	var arr_cnt =  [0,0,0,0,0];//for case 1~4
	var arr_name =  ['x','肉品','海鮮','蔬菜','乾貨'];//for case 1~4
	var _collapsible = "";
  for(key in data){
		var nextId = (parseInt(target.attr('data-cnt')))+1;
		var listtype = parseInt(data[key].listType);
		target.attr('data-cnt',nextId);
		switch(listtype){
		case 1://肉品
		
		break;
		case 2://海鮮

		break;
		case 3://蔬菜
		
		break;
		case 4://乾貨
		
		break;
		default:
		arr_cnt[0]--;
		alert('db err [item_error]type ='+listtype);
		break;
		}
		arr_cnt[listtype]++;
		//$('#'+id+'-'+listtype+' span ui-li-count').text(arr_cnt[listtype]).enhanceWithin().listview( "refresh" );
		$('#'+id+'-'+listtype+' .ui-li-count').not('.inner-count').text(arr_cnt[listtype]).enhanceWithin();
		var content = "<li>"+data[key].listName+"<span class='ui-li-count inner-count'>x"+data[key].itemAmount+"</span></li>"
		console.log(content);
		$('#'+id+'-'+listtype+' ul').append(content).listview( "refresh" );
		
		//var meta =  "data-id='"+data.id+"'  data-amount='"+data[key].itemAmount+"'";

  }
  
  		//mobile jquery refresh
		//mobile jquery refresh end
}//END

//讀取list資料,並條列印出
//function formdeal_historyfilled(data,id)
function formdeal_historydetailclean(id){
	var target = $('#'+id +' ul');
	var target2 = $('#'+id +' .ui-li-count');
	target2.text(0).enhanceWithin();
	target.empty().collapsible();
}//END

//讀取book資料,並條列印出
//function formdeal_historyfilled(data,id)
function formdeal_historyfilled(data,id){
		//console.log('data{JSON}');
		//console.log(data);
		var target = $('#'+id);
  for(key in data){
	if("batchId" in data[key]){//確定正確格式(!可能會拖慢速度
		target.append($('<li/>').append("<a href=\"#\"><b>"+data[key].batchName+"</b></a><a id=\""+'history-list-'+data[key].batchId+"\" href=\"#purchase\" data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\">Purchase album</a>"));
		eventhandler_history_sidebtn('history-list-'+data[key].batchId);
	}
  }
  		//mobile jquery refresh
	target.listview().listview('refresh');
		//mobile jquery refresh end
}//END//讀取book資料,並條列印出
//function formdeal_optionfilled(data,id,type)
function formdeal_optionfilled(data,id,type){
		//console.log('data{JSON}');
		//console.log(data);
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
	//var meta =  "data-name='"+data.name+"' data-type='"+data.type+"' data-amount='"+data.amount+"' data-unit='"+data.unit+"'";
	var meta =  "data-id='"+data.id+"'  data-amount='"+data.amount+"'";
	//var content = "<div "+meta+" id='divset"+nextId+"' class=\"ui-block-a\"><div class=\"ui-corner-all ui-btn ui-shadow\" style=\"height:15px\">"+data.name+" x" + data.amount + "</div></div>";/*ui-corner-all ui-btn*/
	var content = "<li><a href=\"#\">";
	content += "<b>"+data.name+" x"+data.amount+"</b>";
	content += "</a><a data-switch=\"on\" id=\"set1-fix-"+nextId+"\"  href=\"#\"></a>";
	content += "<div class=\"del-btns\">";
	content += "<a  data-switch=\"on\" id=\"set1-del-"+nextId+"\" href=\"#\" class=\"ui-btn ui-icon-delete ui-btn-icon-notext\" title=\"delete\">";
	content += "</a></div></li>";
	$( "#set1" ).append( content ).listview('refresh');
	eventhandler_tab1_del("set1-del-"+nextId);
	eventhandler_tab1_fix("set1-fix-"+nextId);
	//eventhandler_tab1_taphold("divset"+nextId);
		//mobile jquery refresh
		//mobile jquery refresh end "
}//END

/*
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
*/

function formdeal_buttonadd2(data){
	var nextId = (parseInt($('#set2').attr('data-cnt')))+1;
	$('#set2').attr('data-cnt',nextId);
	var meta =  "data-id='"+data.id+"'  data-amount='"+data.amount+"'";
	var content = "<li><a href=\"#\" class=\"set2-custom\">";
	content += "<input "+meta+" name=\"checkbox-2\" id=\"checkbox-2-"+nextId+"\"  type=\"checkbox\" />";
	content += "<label for=\"checkbox-2-"+nextId+"\">"+data.name+" x" + data.amount + "</label>";
	content += "</a><a data-switch=\"off\" data-total=\"-1\" id=\"ckbox2-sidebtn-"+nextId+"\" class=\"ui-nodisc-icon\" href=\"#\"></a></li>";
	$( "#set2" ).append( content ).enhanceWithin().listview('refresh');
	eventhandler_ckbox2_sidebtn("ckbox2-sidebtn-"+nextId);
}//END

function formdeal_checkbox2change(array){
		for(k in array){
			var _cnt = parseInt(array[k].split("-")[2]);
			//$("#"+array[k]).html('text-decoration').enhanceWithin(); 
			$("#"+array[k]).checkboxradio('disable');
			$("label[for='"+$("#"+array[k]).attr('id')+"']").append('(已購買)').enhanceWithin();
			$("#item-3-"+_cnt).show();
			$("#checkbox-2-"+_cnt).show();
			$("#ckbox2-sidebtn-"+_cnt).attr('data-switch','on');
			$("#ckbox2-sidebtn-"+_cnt).removeClass('ui-nodisc-icon').addClass('ui-icon');
			$("#set1-del-"+_cnt).removeClass('ui-icon').addClass('ui-nodisc-icon');
			$("#set1-del-"+_cnt).attr('data-switch','off');
			$("#set1-fix-"+_cnt).removeClass('ui-icon').addClass('ui-nodisc-icon');
			$("#set1-fix-"+_cnt).attr('data-switch','off');
		}//
		//mobile jquery refresh
		//mobile jquery refresh end
}//END

function formdeal_jqm_iconchange(id,fromIcon,toIcon){
		//$("#"+array[k]).html('text-decoration').enhanceWithin(); 
		$("#"+id).removeClass(fromIcon).addClass(toIcon).enhanceWithin();
}//END

function formdeal_inputclear(id){
		//console.log('data{JSON}');
		$('#'+id).val('');
  		//mobile jquery refresh
		//mobile jquery refresh end
//END
}