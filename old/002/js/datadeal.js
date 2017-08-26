var _URL={
		insert: "mysql/insert.php",
		select: "mysql/select.php",
		test: "mysql/test.php",
		NONE: ""
};

//get list
function datadeal_select(){
		//console.log("<f>"+arguments.callee.name);//doesn't work in strict mode & Safari browser.
		var scriptUrl = _URL.select;
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
		console.log(result);
		return result;
	//alert(typedata+"\n"+namedata+"\n"+unitdata+"\n");	
	}else{
	$( "#form-errmsg-5" ).popup( "open" );
	console.log("<f>"+arguments.callee.name+"exit");
	}
}
//END

//從 checkbox-2 得到
function datadeal_checkbox2get(name){
//return $("input:checkbox:checked[name="+name+"]").map(function() { return $(this).val(); }).get();
return $("input:checkbox:checked[name="+name+"]:not([disabled])").map(function() { return $(this).attr('id'); }).get();
}