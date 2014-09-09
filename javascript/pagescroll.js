function pageScroll() {
    	window.scrollBy(0,5); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}

function redirect(x) {
    	//document.URL(x);
	//window.location.assign(x);
	location.replace(x);
}



function validatenum() {
    return;
    }


function validatenum2(fld) {
    
    var ff= document.getElementById(fld);
    var ll= ff.value.length;
    var i=0;
    var chr="";
    var id=0;
    if (ll > 0) {
	chr= ff.value.substr(ll-1, 1);
	if (chr == " ") {
	    // Chop off the final blank
	    ff.value= ff.value.substr(0,ll-1);
	    id = ff.tabIndex; // will be tabindexnnn
	    var elems= document.getElementsByTagName("input");
	    for(i=0; i< elems.length ; i++){
		if (elems[i].tabIndex == (1 + id)) {
		    elems[i].focus();
		    elems[i].select();
		    elems[i].focus();
		    return;
		    }
		}
	    for(i=0; i< elems.length ; i++){
		if (elems[i].tabIndex == 1){
		    elems[i].focus();
		    return;
		    }
		}
	    }
	return; // not a blank
	}
    return; // length zero
    }

