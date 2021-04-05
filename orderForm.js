$(document).ready(function () {
     var count = 1;
     var rows = [1];
     var showTable = false;
     var table = $('#table');
     var tableBody = $('#table-body');
     if (showTable) {
          table.css('display', 'block');
     } else {
          table.css('display', 'none');
     }
     $('#add').click(function () {
          count = count + 1;
          rows.push(count);
          var head = $('#order-head');
          var div = "<div id='order-row-" + count + "' class='row'>";
          var row = $('#order-row-1').html();
          row = row.replace(/1/g, count);
          row = row + '<button type="button" class="del-btn" value="' + count + '">x</button>';
          div = div + row;
          div = div + '</div>'
          head.append(div);
     });

     $(document).on('click', '.del-btn', function (e) {
          let id = $(e.currentTarget).val();
          var removeDivID = "order-row-" + id;
          let index = rows.indexOf(parseInt(id));
          rows.splice(index, 1);
          $('#' + removeDivID).remove();
     });

     $('#submit').click(function () {
          var product = [];
          var ids = [];
          tableBody.html('');
          for (let i = 0; i < rows.length; i++) {
               var id = $('#pro-id' + rows[i]).val();
               var name = $('#pro-name' + rows[i]).val();
               var category = $('#pro-category' + rows[i]).val();
               var quantity = parseInt($('#quantity' + rows[i]).val());
               var avail = $('#yes' + rows[i]).is(':checked');
               var notAvail = $('#no' + rows[i]).is(':checked');
               var choices = [];
               $.each($("input[name='discounts" + rows[i] + "']:checked"), function () {
                    choices.push($(this).val());
               });

               if (choices.length === 0) choices = ['NA'];
               var obj = { id: id, name: name, category: category, quanity: quantity, avail: avail, notAvail: notAvail, discounts: choices }
               var found = false;
               if (!ids.includes(id)) {
                    ids.push(id);
                    product.push(obj);
               } else {
                    for (var x in product) {
                         if (product[x].id === id && product[x].avail === avail) {
                              let c = product[x].discounts.concat(choices);
                              let unique_array = removeDuplicates(c);
                              if (unique_array.includes('NA') && unique_array.length > 1) {
                                   unique_array.splice(unique_array.indexOf('NA'), 1);
                              }
                              product[x] = {
                                   id: id, name: name,
                                   category: category,
                                   quanity: product[x].quanity + quantity,
                                   avail: avail,
                                   notAvail: notAvail,
                                   discounts: unique_array
                              };
                              found = true;
                              break;
                         } else if (product[x].id === id && product[x].notAvail === notAvail) {
                              let c = product[x].discounts.concat(choices);
                              let unique_array = removeDuplicates(c);
                              if (unique_array.length !== 1) {
                                   unique_array.splice(unique_array.indexOf('NA'), 1);
                              }
                              product[x] = {
                                   id: id, name: name,
                                   category: category,
                                   quanity: product[x].quanity + quantity,
                                   avail: avail,
                                   notAvail: notAvail,
                                   discounts: unique_array
                              };
                              found = true;
                              break;
                         }
                    }
                    if (!found) product.push(obj);
               }
          }
          for (let y in product) {
               let index = 1;
               var row = '<tr>';
               row = row + "<td>" + product[y].id + "</td>";
               row = row + "<td>" + product[y].name + "</td>";
               row = row + "<td>" + product[y].category + "</td>";
               row = row + "<td>" + product[y].quanity + "</td>";
               if (product[y].avail) {
                    row = row + "<td>Yes</td>";
               } else if (product[y].notAvail) {
                    row = row + "<td>No</td>";
               }
               row = row + "<td>" + product[y].discounts + "</td></tr>";
               console.log(row);
               tableBody.append(row);
          }
          table.css('display', 'block');
     });

     function removeDuplicates(arr) {
          let unique_array = []
          for (let i = 0; i < arr.length; i++) {
               if (unique_array.indexOf(arr[i]) == -1) {
                    unique_array.push(arr[i])
               }
          }
          return unique_array
     }
     function fillInputs(id, name, avail, notAvail, discounts) {
          if (id === '' && name === '' && (avail === false || notAvail === false || discounts === false)) {
               alert('please fill the inputs');
               tableBody.innerHTML = '';
               table.style.display = 'none';
               return false;
          } else {
               return true;
          }
     }
     $('#reset').click(function () {
          for (let i = 1; i < rows.length; i++) {
               $("#order-row-" + rows[i]).remove();
          }
          rows = [1];
          table.css('display', 'none');
          tableBody.html('');
          $('#pro-id1').val('');
          $('#pro-name1').val('');
          $('#quantity1').val('');
          $('#pro-category1').prop('selectedIndex', 0);;
          $('#yes1').prop('checked', false);
          $('#no1').prop('checked', false);
          $("input[name='discounts1']:checkbox").prop('checked', false);

     });
});
