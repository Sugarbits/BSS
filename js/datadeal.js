var _URL={
		insert: "mysql/insert.php",
		itemInsert: "mysql/itemInsert.php",
		batchInsert: "mysql/batchInsert.php",
		listtypeSelect: "mysql/listtypeSelect.php",
		listbatchSelect: "mysql/listbatchSelect.php",
		batchitemSelect: "mysql/batchitemSelect.php",
		select: "mysql/select.php",
		test: "mysql/test.php",
		NONE: ""
};

//get list
function datadeal_listbatchSelect(){
		//console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
		var scriptUrl = _URL.listbatchSelect;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		return result;
}
//END
//get item
function datadeal_batchitemSelect(itemBatchid){
		//console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
		var scriptUrl = _URL.batchitemSelect;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{itemBatchid:itemBatchid},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		//console.log(result);
		return result;
}
//END
//get list
function datadeal_listtypeSelect(){
		//console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
		var scriptUrl = _URL.listtypeSelect;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		return result;
}
//END 

//get list
function datadeal_Select(){
		//console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
		var scriptUrl = _URL.listtypeSelect;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		return result;
}
//END 

// insert list
function datadeal_insert(type,name,unit){
console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
//typedata=$( "input:checkbox[name="+type+"]:checked" ).val();
typedata=$( "input[name="+type+"]:checked" ).val();
namedata=$( "#"+name+"" ).val();
unitdata=$( "#"+unit+"" ).val();
	//alert(type+"\n"+name+"\n"+unit+"\n");
	//alert(typedata+"\n"+namedata+"\n"+unitdata+"\n");	
if( (typedata != undefined) && (namedata != "") && (unitdata != ""))
	{
	var scriptUrl = _URL.insert;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{listType: typedata,listName: namedata,listUnit: unitdata},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		//console.log(result);
		return result;
	//alert(typedata+"\n"+namedata+"\n"+unitdata+"\n");	
	}else{
	$( "#form-errmsg-5" ).popup( "open" );
	console.log("<f>"+arguments.callee.name+"exit");
	}
}
//END

// insert item
function datadeal_itemInsert(str,batchId){
console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
//typedata=$( "input:checkbox[name="+type+"]:checked" ).val();


	var scriptUrl = _URL.itemInsert;
		$.ajax({
			url: scriptUrl,
			type: 'post',
			data:{content: str,itemBatchid : batchId},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		return result;
	//alert(typedata+"\n"+namedata+"\n"+unitdata+"\n");	
	
}
//END
// insert batch
function datadeal_batchInsert(batchName,batchDate,batchSp){
console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
//typedata=$( "input:checkbox[name="+type+"]:checked" ).val();


	var scriptUrl = _URL.batchInsert;
		$.ajax({
			url: scriptUrl,
			type: 'get',
			data:{batchName: batchName,batchDate: batchDate,batchSp: batchSp},
			dataType: 'html',
			async: false,
			success: function(data) {
				result = data;
			} 
		});
		console.log(result);
		return result;
	//alert(typedata+"\n"+namedata+"\n"+unitdata+"\n");	
	
}
//END

//從 checkbox-2 得到
function datadeal_checkbox2get(name){
//return $("input:checkbox:checked[name="+name+"]").map(function() { return $(this).val(); }).get();
return $("input:checkbox:checked[name="+name+"]:not([disabled])").map(function() { return $(this).attr('id'); }).get();
}

//從 checkbox-2 得到(但要disabled，表示抓到已完成的)
function datadeal_invert_checkbox2get(name){
//return $("input:checkbox:checked[name="+name+"]").map(function() { return $(this).val(); }).get();

return $("input:checkbox:checked[name="+name+"]:disabled").map(function() {
	var object={
		id:"",
		amount:0,
		total:0,
	};
	var _num = parseInt($(this).attr('id').split('-')[2]);
	object.id = $(this).attr('data-id'); 
	object.amount = $(this).attr('data-amount');
	
	if(-1 == $("#ckbox2-sidebtn-"+_num).attr('data-total')){
		formdeal_jqm_iconchange("ckbox2-sidebtn-"+_num,'ui-icon-info','ui-icon-alert');//formdeal use
		//偵測到未填寫的不回傳
	}else{
		object.total = $("#ckbox2-sidebtn-"+_num).attr('data-total');
		return object;
	}
	}).get();
}

