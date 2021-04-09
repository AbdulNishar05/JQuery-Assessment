$(document).ready(function () {
     totalBalance =1000;
    const userDeposit = $("#userDeposit");
    
    
    var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
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
                localStorage.clear();
                localStorage.setItem("userBalance", JSON.stringify(arr))
                console.log(arr);      
            });
        })