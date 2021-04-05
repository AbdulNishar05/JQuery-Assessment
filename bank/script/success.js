$(document).ready(function()
{

   
    var name=localStorage.getItem("current");

    $("#name").html("welcome "+name);
    console.log(name);

    $("#acc").accordion();

   $("#butdebit").click(function()
   {
       var bal=Number($("#debit").val());
       var cur=Number(giveamount());
       if(cur>bal)
       {
        var curr=cur-bal;
        update(name,curr,"debit");  
        console.log("debited");
        alert("debit successfully");
       }else
       {
           alert("Not have that much balance");
       }
   })
    $("#showbal").click(function()
    {
        var cur=giveamount();
        $("#di").html(cur);
    })
    $("#butlogout").click(function()
    {
        alert("need programming language to logout properly now");
        window.location.href="index.html";
    })
    $("#butsend").click(function()
    {
        var bal=$("#sendamt").val();
        var user2=$("#send").val();
        console.log(bal+" "+user2);
        if(user2!=="" && !isNaN(bal))
        {
            var ar=JSON.parse(localStorage.getItem("user"))||[];
            console.log("correct");
            for(let i=0;i<ar.length;i++)
            {
               
                
                var obj=ar[i];
                var c1=obj.user1;
                var c2=obj.user2;
                var bal1=giveamount();
                console.log("amount "+bal1);
                if(c1==user2 || c2==user2 )
                {
                  
                   
                   if(Number(bal1)>Number(bal))
                   {
                        var sender=Number(obj.amount)+Number(bal);
                        console.log(sender);
                        update(user2,sender,"credit");
                        var curr=Number(giveamount())+Number(bal);
                        update(name,curr,"debit");  
                        console.log("sent");
                        alert("sent successfully");

                   }else
                   {
                    alert("Your current balance Low");
                   }
    
                }else
                {
                    alert("UserName doesnt exist");
                    return;
                }
            }
        }else
        {
            alert("balance must be number");
        }
       
    })

})
function giveamount()
{
    var ar=JSON.parse(localStorage.getItem("user"))||[];
    var name=localStorage.getItem("current");
    var bal;
    for(let i=0;i<ar.length;i++)
        {
           
            
            var obj=ar[i];
            var c1=obj.user1;
            var c2=obj.user2;
            if(c1==name || c2==name )
            {
               
                bal=obj.amount;
                break;
            }
        }
       return bal;
}

function update(a,b,c)
{
    var ar=JSON.parse(localStorage.getItem("user"))||[];
    console.log(a+" "+b);
    var bal;
    for(let i=0;i<ar.length;i++)
        {
           
            
            var obj=ar[i];
            var c1=obj.user1;
            var c2=obj.user2;
            if(c1==a || c2==a )
            {
               
                ar[i].amount=b;
                break;
               
            }
        }
        localStorage.setItem("user",JSON.stringify(ar));
       return bal;
}
function dip(a)
{
    if(a==0)
    {
        $("#current").html(giveamount()).show();
    }else
    {
        $("#current").hide();
    }
    
}
function dip1(a)
{
    if(a==0)
    {
        $("#current1").html(giveamount()).show();
    }else
    {
        $("#current1").hide();
    }
    
}