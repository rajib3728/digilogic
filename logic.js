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
    var sel = document.getElementById("select").value;
    if(sel==0)
    {
        document.getElementById("result").value=a;
    }
    else
    {
        document.getElementById("result").value=b;
    }

}
function flipfloplogic()
{   
    var clk = document.getElementById("clock").value;
    var d = document.getElementById("dinput").value;
    if(clk==1)
    {
        document.getElementById("result").value=d;
    }
    else
    {
        document.getElementById("result").value="No Change";
    }   
}
