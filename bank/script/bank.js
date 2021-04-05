var mark1=0,mark2=0;
window.onbeforeunload = function() { alert("thats impossible") };
$(document).ready(function()
{
    var a=true,b=true,c=true;
    $("#show1").click(
        function()
        {
            if(a==true)
            {
                $("#pass1").attr("type","text");
                $("#show1").attr("value","hide");
                a=false;

            }else
            {

            $("#pass1").attr("type","password");
            $("#show1").attr("value","show");
            a=true;
            }
        }
    )
    $("#show2").click(
        function()
        {
            if(b==true)
            {
                $("#pass2").attr("type","text");
                $("#show2").attr("value","hide");
                b=false;

            }else
            {

            $("#pass2").attr("type","password");
            $("#show2").attr("value","show");
            b=true;
            }
        }
    )
    $("#userCheck1").click(
        function()
        {
            var ar=JSON.parse(localStorage.getItem("user"))||[];
            let user1=$("#userId1").val();
            
            for(let i=0;i<ar.length;i++)
            {
                var obj=ar[i];
                
                var c1=obj.user1;
                var c2=obj.user2;
                if(c1==user1 || c2==user1 )
                {
                    alert("user name already exist");
                    $("#userId1").val("");
                    return;
                }
            }
           
        }
    )
    $("#login").click(function()
    {
        var ar=JSON.parse(localStorage.getItem("user"))||[];
            let user1=$("#checkuser").val();
            var pas=$("#checkpass").val();
            for(let i=0;i<ar.length;i++)
            {
                var obj=ar[i];
                
                var c1=obj.user1;
                var c2=obj.user2;

                var c3=obj.pass1;
                var c4=obj.pass2;
                if((c1==user1 && c3==pas)||( c2==user1 && c4==pas) )
                {
                    localStorage.setItem("current",user1);
                    console.log("welcome");
                    window.location.href="success.html";
                }else
                {
                    alert("User Name or Password Incorrect");
                }
            }
    })
    $("#loginshow").click(function()
    {
        if(c==true)
            {
                $("#checkpass").attr("type","text");
                $("#loginshow").attr("value","hide");
                c=false;

            }else
            {

            $("#checkpass").attr("type","password");
            $("#loginshow").attr("value","show");
            c=true;
            }
    })
    $("#userCheck2").click(
        function()
        {
            let user2=$("#userId2").val();
            var ar=JSON.parse(localStorage.getItem("user"))||[];
         
            for(let i=0;i<ar.length;i++)
            {
               
                
                var obj=ar[i];
                var c1=obj.user1;
                var c2=obj.user2;
                if(c1==user2 || c2==user2 )
                {
                    alert("user name already exist");
                    $("#userId2").val("");
                    return;
                }
            }
        }
    )
    $("#register").click(function()
    {
        let user1=$("#userId1").val();
        let user2=$("#userId2").val();
        let pass1=$("#pass1").val();
        let pass2=$("#pass2").val();
       
        console.log(mark1);
       
        console.log(mark2);
        if(user1!="" && user2!="" && mark1=="1" && mark2=="1")
        {
            let id=Date.now();
            var use={
                user1:user1,
                user2:user2,
                pass1:pass1,
                pass2:pass2,
                amount:"1000"

            };
        
            
            var ar=JSON.parse(localStorage.getItem("user"))||[];
            ar.push(use);
            localStorage.setItem("user",JSON.stringify(ar));
            alert("successfully registerd");

        }else
        {
            alert("fill the proper details");
            return;
        }
    })

})

function points(a)
{
    if(a==1)
    {
        var input=$("#pass1").val();
        var li=$("ul a");
  li.eq(0).hide();
    if((/\W/).test(input))
    {
        li.eq(0).hide();
    }else
    {
        li.eq(0).show();
    }
    if((/[A-Z]/).test(input))
    {
        li.eq(1).hide();
    }else
    {
        li.eq(1).show();
    }
    if((/[a-z]/).test(input))
    {
        li.eq(2).hide();
    }else
    {
        li.eq(2).show();
    }
    if((/\d/).test(input))
    {
        li.eq(3).hide();
    }else
    {
        li.eq(3).show();
    }
    if(input.length>6)
    {
       
        li.eq(4).hide();
    }else
    {
        li.eq(4).show();
    }
    var loop=$("ul a");
    var count=0
    for(let i=0;i<loop.length;i++)
    {
        if(loop.eq(i).is(":hidden"))
        {
            
        }else
        {
            count=1;
            break;
        }
    }
    if(count==0 && a==1)
    {
        $("#mark1").html("&#10004");
        mark1=1;
    }else
    {
        $("#mark1").html("&#10006");
        mark1=0;
    }
    console.log("mar "+mark1);
    }
    else{
        var input=$("#pass2").val();
        var li=$("ul a");
  li.eq(0).hide();
    if((/\W/).test(input))
    {
        li.eq(0).hide();
    }else
    {
        li.eq(0).show();
    }
    if((/[A-Z]/).test(input))
    {
        li.eq(1).hide();
    }else
    {
        li.eq(1).show();
    }
    if((/[a-z]/).test(input))
    {
        li.eq(2).hide();
    }else
    {
        li.eq(2).show();
    }
    if((/\d/).test(input))
    {
        li.eq(3).hide();
    }else
    {
        li.eq(3).show();
    }
    if(input.length>6)
    {
       
        li.eq(4).hide();
    }else
    {
        li.eq(4).show();
    }
    var loop=$("ul a");
    var count=0
    for(let i=0;i<loop.length;i++)
    {
        if(loop.eq(i).is(":hidden"))
        {
            
        }else
        {
            count=1;
            break;
        }
    }
     
    if(count==0 && a==2)
    {
        $("#mark2").html("&#10004");
        mark2=1;
    }else
    {
        $("#mark2").html("&#10006");
        mark2=0;
    }
    console.log("mar "+mark2);
    }

  

}