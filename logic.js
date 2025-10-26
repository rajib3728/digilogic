function andlogic()
{
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if((a==1)&&(b==1))
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    }
    else
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    }
}

}
function orlogic()
{
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {    
    if((a==1)||(b==1))
    {
       document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    }
    else
    {
       document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    }
}
}
function notlogic()
{
    var a = document.getElementById("inputA").value;
    if( a=="" || isNaN(a) || (a!=0 && a!=1) )
    {
        alert("Please enter a valid binary input (0 or 1).");
        return;
    }
    else
    {
    if(a==1)
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    }

    else
    {
      document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";  
    }
}  
}
function nandlogic()
{  

    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if((a==1)&&(b==1))
    {
       document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    }   
    else
    {
       document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    } 
}      
}
function norlogic()
{   
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;    
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if((a==0)&&(b==0))
    {
       document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    }
    else
    {
         document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    }
}
}
function xorlogic()
{
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value; 
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {   
    if(a!=b)
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    }
    else
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    } 
}  
}
function xnorlogic()
{   
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }   
    else
    {
    if(a==b)
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="greenyellow";
    }
    else
    {
        document.getElementsByClassName("stat")[0].style.backgroundColor="red";
    } 
}  
}
function multiplexerlogic()
{
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;    
    var sel = document.getElementById("inputC").value.split(",");
  

    if( a=="" || b=="" || isNaN(a) || isNaN(b) || (a!=0 && a!=1) || (b!=0 && b!=1) || sel.length!=4 )
    {
        alert("Please enter valid binary inputs (0 or 1) or syntax.");
        return;
    }
    else
    {
    if(a==0 && b==0)
    {
        document.getElementById("result").innerHTML=sel[0];
    }
    else if(a==0 && b==1)
    {
        document.getElementById("result").innerHTML=sel[1];
    }
    else if(a==1 && b==0)
    {
        document.getElementById("result").innerHTML=sel[2];
    }   
    else
    {
        document.getElementById("result").innerHTML=sel[3];
    }
}

}
function flipfloplogic()
{   
    
    var d = document.getElementById("dinput").value;
    var clk = document.getElementById("signal").textContent;

    if( d=="" || isNaN(d) || (d!=0 && d!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if(clk=="HIGH")
    {
        document.getElementById("result").innerHTML=d;
    }
    else
    {
        document.getElementById("result").innerHTML="No Change";
    }   
    }

}

const signal = document.getElementById("signal");
const freqRange = document.getElementById("freqRange");
const freqLabel = document.getElementById("freqLabel");
const canvas = document.getElementById("waveform");
const ctx = canvas.getContext("2d");

let isHigh = false;
let frequency = parseFloat(freqRange.value);
let interval = 1000 / frequency / 2;
let waveform = [];

function updateSignal() {
  isHigh = !isHigh;
  signal.textContent = isHigh ? "HIGH" : "LOW";
  signal.className = isHigh ? "high" : "low";

  waveform.push(isHigh ? 1 : 0);
  if (waveform.length > canvas.width / 10) waveform.shift();
  drawWaveform();
}

function drawWaveform() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  waveform.forEach((level, i) => {
    const x = i * 10;
    const y = level ? 30 : 120;
    ctx.lineTo(x, y);
    ctx.lineTo(x + 10, y);
  });

  ctx.strokeStyle = "#0f0";
  ctx.lineWidth = 2;
  ctx.stroke();
}

let timer = setInterval(updateSignal, interval);

freqRange.addEventListener("input", () => {
  frequency = parseFloat(freqRange.value);
  freqLabel.textContent = `${frequency}Hz`;
  clearInterval(timer);
  interval = 1000 / frequency / 2;
  timer = setInterval(updateSignal, interval);
});

function daclogic()
{
    var s0= document.getElementById("inputA").value;
    var s1= document.getElementById("inputB").value;
    var s2= document.getElementById("inputC").value;

    if( s0=="" || s1=="" || s2=="" || isNaN(s0) || isNaN(s1) || isNaN(s2) || (s0!=0 && s0!=1) || (s1!=0 && s1!=1) || (s2!=0 && s2!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    var decimalValue = (s2 * 4) + (s1 * 2) + (s0 * 1);
  
    document.getElementById("result").innerHTML = "Analog Value: " + decimalValue;
    }
}
function adclogic()
{
    var analogInput = document.getElementById("inputC").value;  
    if( analogInput=="" || isNaN(analogInput) || analogInput<0  )
    {
        alert("Please enter a valid analog input (0-7).");
        return;
    }
    else
    {
        function convertDecimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        // Base case: Return "0" if the number is 0
        return "0";
    } else {
        // Recursive case: Divide the number by 2, 
        //append the remainder to the result of the recursive call
        return convertDecimalToBinary(
            Math.floor(decimalNumber / 2)) + (decimalNumber % 2);

    }
}
    var binaryValue = convertDecimalToBinary(analogInput);
    document.getElementById("result").innerHTML = "Digital Output: " + binaryValue;
    }   
}












