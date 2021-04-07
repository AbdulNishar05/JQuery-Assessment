
$(document).ready(function () {
     var first = "a", second = "b", option = "c";
     $("#input").keypress(function (e) {
          var keyCode = e.which;
          if ((keyCode < 47 || keyCode > 58)) {
               return false;
          }
     });

     $(".numBtn").click(function () {
          $("#input").val($("#input").val() + $(this).val());
     });

     $(".clrBtn").click(function () {
          $("#input").val("");
     });

     $("#addition").click(function () {
          let val = $("#input").val();
          if (val == "") {
               alert("enter value first");
          }
          else {
               first = val;
               $("#input").val("");
               option = "+";

          }
     })
     $("#subtraction").click(function () {
          let val = $("#input").val();
          if (val == "") {
               alert("enter value first");
          }

          else {

               first = val;
               $("#input").val("");
               option = "-";
          }


     })
     $("#multiply").click(function () {
          let val = $("#input").val();
          if (val == "") {
               alert("enter value first");
          } else {
               first = val;
               $("#input").val("");
               option = "*";


          }
     })
     $("#divide").click(function () {
          let val = $("#input").val();
          if (val == "") {
               alert("enter value first");
          }
          else {
               first = val;
               $("#input").val("");
               option = "/";


          }
     });
     $("#modulo").click(function () {
          let val = $("#input").val();
          if (val == "") {
               alert("enter value first");
          } else {
               first = val;
               $("#input").val("");
               option = "%";

          }
     });

     $(".calBtn").click(function () {
          {
               var val = $("#input").val();

               if (first != "a" && option != "c" && val != "") {
                    switch (option) {
                         case "+":

                              second = val;
                              $("#input").val(Number(first) + Number(second));

                              break;
                         case "-":
                              second = val;
                              $("#input").val(Number(first) - Number(second));

                              break;
                         case "*":
                              second = val;
                              $("#input").val(Number(first) * Number(second));

                              break;
                         case "/":
                              second = val;
                              $("#input").val(Number(first) / Number(second));
                              break;
                         case "%":
                              second = val;
                              $("#input").val(Number(first) % Number(second));
                    }
                    option = "c";
               }
          }
     });

     $(".delBtn").click(function () {
          var value1 = $("#input");
          var value2 = $("#input").val();
          value2 = value2.substring(0, value2.length - 1);
          value1.val(value2);
     });
     $(".optBtn").click(function () {
          $("#input").val($("#input").val() + $(this).val());
     });

});
