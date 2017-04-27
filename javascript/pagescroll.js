function leaderScroll() {
	x = window.innerHeight; // Total window available
	x -= document.getElementById("tablebody").offsetTop; // Subtract already written
	x -= 50; // Leave 50px at bottom
	document.getElementById("tablebody").style.height = x; // Resize

	// Check width of elements with scrollbar
	elem1 = document.getElementById("tablehead").clientWidth;
	elem2 = document.getElementById("tablebody").clientWidth;
	document.getElementById("tablebody").style.width = elem1;
	document.getElementById("tablehead").style.width = elem2;

	// First delay is two seconds
	tm = document.getElementById("initial").innerHTML;
	tm = parseFloat(tm).toFixed(3);
	tm *= 1000;
	scrolldelay = setTimeout('tableScroll()', tm); 
}

function tableScroll(){
	pixel = document.getElementById("scrollpixel").innerHTML;
	pixel = parseInt(pixel);
	document.getElementById("tablebody").scrollTop += pixel;
	delay = document.getElementById("scrolltime").innerHTML;
	delay = parseFloat(delay);
	delay *= 1000;
   	scrolldelay = setTimeout('tableScroll()',delay); // scrolls every 100 milliseconds
}

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
	    } // end or j loop
	return; // not a blank
	}
    return; // length zero
    }

function inputpink(field){
	field.style.background = "pink";
	}

function inputwhite(field){
	field.style.background = "white";
	}

