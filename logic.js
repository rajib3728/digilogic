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
function multiplexorlogic()
{
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;    
    var sel = document.getElementById("inputC").value.split(",");

    if( a=="" || b=="" || sel=="" || isNaN(a) || isNaN(b) || isNaN(sel) || (a!=0 && a!=1) || (b!=0 && b!=1) || sel.length!=4 )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if(a==0 && b==0)
    {
        document.getElementById("result").value=sel[0];
    }
    else if(a==0 && b==1)
    {
        document.getElementById("result").value=sel[1];
    }
    else if(a==1 && b==0)
    {
        document.getElementById("result").value=sel[2];
    }   
    else
    {
        document.getElementById("result").value=sel[3];
    }
}

}
function flipfloplogic()
{   
    var clk = document.getElementById("clock").value;
    var d = document.getElementById("dinput").value;
    if( clk=="" || d=="" || isNaN(clk) || isNaN(d) || (clk!=0 && clk!=1) || (d!=0 && d!=1) )
    {
        alert("Please enter valid binary inputs (0 or 1).");
        return;
    }
    else
    {
    if(clk==1)
    {
        document.getElementById("result").value=d;
    }
    else
    {
        document.getElementById("result").value="No Change";
    }   
    }
}



