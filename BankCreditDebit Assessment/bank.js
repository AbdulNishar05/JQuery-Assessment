$(document).ready(function () {
     totalBalance =1000;
    const userDeposit = $("#userDeposit");
    
    var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
     document.getElementById("balance").innerHTML=arr[arr.length-1];
    if(arr.length==0){
        var arr = []
        arr.push(totalBalance);
        localStorage.setItem("userBalance", JSON.stringify(arr));
       
    }
    console.log(arr);

    

    $("#btnDeposit").click(function () {
                var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
                var lastAmount = arr[arr.length-1]
                var amount = Number(userDeposit.val())
                lastAmount  +=  amount;
                arr.push(lastAmount);
                document.getElementById("balance").innerHTML=arr[arr.length-1];
                localStorage.clear();
                localStorage.setItem("userBalance", JSON.stringify(arr))
                console.log(arr); 

    });

    $("#btnWithdraw").click(function () {
        var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
                var lastAmount = arr[arr.length-1]
                var amount = Number(userDeposit.val())
                lastAmount  -=  amount;
                arr.push(lastAmount);
                document.getElementById("balance").innerHTML=arr[arr.length-1];
                localStorage.clear();
                localStorage.setItem("userBalance", JSON.stringify(arr))
                console.log(arr);      
            });
        })
       
