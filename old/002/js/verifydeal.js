function verifydeal_option(id){
	if("" == $("#"+id+" option:selected").val()){
		return false;
	}else{
		return true;
	}
}
function verifydeal_radio(name){
	if("" == $("input[name="+name+"]:checked").val()){
		return false;
	}else{
		return true;
	}
}
function verifydeal_input(id){
	if("" == $("#"+id).val()){
		return false;
	}else{
		return true;
	}
}
//