    const inputMin = document.getElementById("minInput");
    const inputMax = document.getElementById("maxInput");
    const main = document.getElementById("Table");
    const btnOne = document.getElementById("btnReset");
    const btnTwo = document.getElementById("btnRefresh");


    inputMin.value = 1;
    inputMax.value = 100;

const create = function () {            
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    
    for (let x = 1; x <= 100; x++) {     
    
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + x);    

        if (x < inputMin.value || x > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (x % 3 === 0 && x % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(x + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "FIZZBUZZ");   

            } else if (x % 3 === 0) {
                newPar.appendChild(document.createTextNode(x + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "FIZZ");

            } else if (x % 5 === 0) {
                newPar.appendChild(document.createTextNode(x + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "BUZZ");

            } else {
                newPar.appendChild(document.createTextNode(x));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();
 

    inputMin.onkeyup = function (e) {
        this.value = inputMin.value.replace(/^(0*)/, "");
        if (inputMin.value >= 1 && inputMin.value <= 100) {
            this.value = inputMin.value;
        } else if (inputMin.value.length === 0) {
            inputMin.value = null;
        } else {
            inputMin.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
    

    inputMax.onkeyup = function (e) {
        this.value = inputMax.value.replace(/^(0*)/, "");
        if (inputMax.value >= 1 && inputMax.value <= 100) {
            this.value = inputMax.value;
        } else if (inputMax.value.length === 0) {
            inputMax.value = null;
            
        } else {
            inputMax.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };


    btnOne.onclick = function() {
        inputMin.value = "";
        inputMax.value = "";
        create();
    };
    
    btnTwo.onclick = function() {
        inputMin.value = 1;
        inputMax.value = 100;
        create();
    };


    $(document).ready(function(){ $("#btnThree").click(function(){ 
        $(".num, .BUZZ, .FIZZBUZZ").toggle();
      });
    });

    $(document).ready(function(){ $("#btnFour").click(function(){ 
        $(".num, .FIZZ, .FIZZBUZZ").toggle();
      });
    });

    $(document).ready(function(){ $("#btnFive").click(function(){ 
        $(".num, .BUZZ, .FIZZ").toggle();
      });
    });
