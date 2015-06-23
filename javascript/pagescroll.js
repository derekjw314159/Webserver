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
	for (j=0 ; j<ll ; j++){
	    chr= ff.value.substr(j, 1);
	    if (chr == "(" || chr==")" ) {
		ff.value=ff.value.substr(j-1,ll-j-1)
		return;
		}
	    if (chr == " ") {
		// Chop off the final blank
		ff.value= ff.value.substr(0, j);
		id = ff.tabIndex; // will be tabindexnnn
		var elems= document.getElementsByTagName("input");
		for(i=0; i< elems.length ; i++){
		    if (elems[i].tabIndex == (1 + id)) {
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
	    }
	return; // not a blank
	}
    return; // length zero
    }

