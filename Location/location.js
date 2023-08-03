let toggleBtn = document.querySelector(".toggle-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let barsMark = document.querySelector(".fa-bars");
let closeMark = document.querySelector(".fa-xmark");

closeMark.style.display = "none";
console.log("hi");
let open = false;

function toggleMenu() {
	if (open == false) {
		closeMark.style.display = "inline-block";
		barsMark.style.display = "none";
		mobileMenu.style.top = "20vh";
		open = true;
	} else {
		closeMark.style.display = "none";
		barsMark.style.display = "inline-block";
		mobileMenu.style.top = "-200vh";
		open = false;
	}
}

toggleBtn.addEventListener("click", toggleMenu);
// footer
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML += ` ${currentYear}`;
  });
// calendar dropdown

var startDate = new Date(2023,8,2);
        console.log(startDate.toLocaleString());
        var el = document.getElementById("DatePickerButtonInput");

        // option configuration syntax        
        let dpn = new  DatePickerNative({            
            element: el,
            activeDate: startDate,
            // + or - 5 days - optional
            min: 5,
            max: 5,
            onDateChanged: function(dt, event) {
                // update date display
                showDate(dt,"ActiveDate");
                console.log(dt.toLocaleString()," Callback date value");

                // element gets a dateValue property
                var el = document.getElementById("DatePickerButtonInput");
                console.log(el.dateValue.toLocaleString()," Date on control");

                // date control value
                //console.log(DateFormatter.formatDate(dpn.options.activeDate,"dw MMM dd, yyyy")," instance.option.activeDate");
            }        
        });

           
         // assign initial display value on page launch
         showDate(startDate,"ActiveDate");
         
        var elInput = document.getElementById("DatePickerInput");

         // parameter syntax - Standard Date Input control
         new DatePickerNative({ 
            element: elInput, 
            activeDate: startDate,                  
            onDateChanged: function(dt, event, instance) {
                showDate(dt, "ActiveDateInput");
                console.log(dt.toLocaleString()," Callback date value Date Input control");
            }        
        });
        showDate(startDate,"ActiveDateInput");


        // display helper
         function showDate(dt,elId) {
            var sdt = dt.toLocaleString();
            document.getElementById(elId).innerText = sdt;
        }                  



// ------------------


function DatePickerNative(el, initialDate, onDateChanged) {
    var _this = this;
    var opt = null;
    
    if (typeof el == "string")
    {
        if (el === "uninitialize") {
            uninitialize();
            return;
        }
        el = document.getElementById(el);
        if (!el) {
            throw new Error("Invalid element provided. Provide either an DOM Element or an id string to an element.");            
        }
    }
    
    if (el.element) {        
        opt = el;  // assume options object was passed
    }
    else {
        opt =  {
            element: el,
            onDateChanged: onDateChanged,
            activeDate: initialDate,
            min: "",  // number as string
            max: ""   // number as string     
        };        
    }
    this.options = opt;

    function intialize(opt) {
        if(typeof opt.activeDate != 'object')
            opt.activeDate = new Date();

        if (opt.element) {
            opt.element.addEventListener("change",datePickerUnbind);     
            datePickerBind(opt.element,opt.activeDate, opt.onDateChanged);
        }
    }    

    function uninitialize(){
        opt.element.removeEventListener("change",datePickerUnbind);        
    }
    
    function datePickerBind(element, dt) {        
        var newDate = localToGmtDate(dt);
        
        opt.element.dateValue = dt;   // original date        
        opt.element.value = newDate;

        if (opt.min)
            opt.element.min = normalizeMin(opt.min);        
        if (opt.max)
            opt.element.max = normalizeMax(opt.max);
    }
    
    function datePickerUnbind(event) {        
        var dt = event.target.valueAsDate;
        let newDate =  utcToLocalDate(dt);
        
        opt.element.dateValue = newDate;
        opt.activeDate = newDate;

        if(opt.onDateChanged){
            opt.onDateChanged(newDate, event, _this);
        }
    }

    function localToGmtDate(localDate) {
        return localDate && new Date(localDate.getTime()-(localDate.getTimezoneOffset()*60*1000)).toISOString().split('T')[0];        
    }
    
    function utcToLocalDate(utcDate) {
        return new Date(utcDate.getTime()+(utcDate.getTimezoneOffset()*60*1000));        
    }

    function normalizeMin(minVal) {    
        if (typeof minVal === "string")
            return minVal;

        if (typeof minVal === "number") {
            let dt = new Date();
            dt = new Date(dt.setDate(dt.getDate() - minVal));
            minVal = dt;
        }

        return localToGmtDate(minVal);
    }

    function normalizeMax(maxVal) {
        if (typeof maxVal === "string") {            
            return maxVal;
        }

        let dt = new Date();
        if (typeof maxVal === "number") {
           dt = new Date();
           dt = new Date(dt.setDate(dt.getDate() + maxVal));
           maxVal = dt;
        }

        return localToGmtDate(maxVal);
    }

    intialize(opt);                
    return _this;
}