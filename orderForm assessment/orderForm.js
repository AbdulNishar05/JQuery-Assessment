$(document).ready(() => {
     var rowCount = 1;
     var rows = [1];
     var displayTable = false;
     var table = $('#table');
     var tableBody = $('#table-body');
     if (displayTable) {
         table.css('display', 'block');
     } else {
         table.css('display', 'none');
     }
     $('#add').click(() => {
         rowCount += 1;
         rows.push(rowCount);
         var head = $('#order-head');
         var div = "<div id='order-row-" + rowCount + "' class='row'>";
         var row = $('#order-row-1').html();
         row = row.replace(/1/g, rowCount);
         row += '<button type="button" class="del-btn" value="' + rowCount + '">x</button>';
         div += row;
         div += '</div>'
         head.append(div);
     });
 
     $(document).on('click', '.del-btn', (event) => {
         let id = $(event.currentTarget).val();
         var removeDivID = "order-row-" + id;
         let index = rows.indexOf(parseInt(id));
         rows.splice(index, 1);
         $('#' + removeDivID).remove();
     });
     $('.form').submit(function (event) {
          event.preventDefault();
          $('.form').find('textarea, input').each(function () {
               if (!$(this).prop('required')) {
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
             $.each($("input[name='discounts" + rows[i] + "']:checked"), function(){            
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
         for (let z in product) {
             let index = 1;
             var row = '<tr>';
             row += "<td>" + product[z].id + "</td>";
             row += "<td>" + product[z].name + "</td>";
             row += "<td>" + product[z].category + "</td>";
             row += "<td>" + product[z].quanity + "</td>";
             if (product[z].avail) {
                 row += "<td>Yes</td>";
             } else if (product[z].notAvail) {
                 row += "<td>No</td>";
             }
             row += "<td>" + product[z].discounts + "</td></tr>";
             console.log(row);
             tableBody.append(row);
         }
         table.css('display','block')
     };
     });
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
    
     $('#clear').click(() => {
         for (let i = 1; i < rows.length; i++) {
             $("#order-row-" + rows[i]).remove();
         }
         rows = [1];
         table.css('display','none');
         tableBody.html('');
         $('#pro-id1').val('');
         $('#pro-name1').val('');
         $('#quantity1').val('');
         $('#pro-category1').prop('selectedIndex', 0);;
         $('#yes1').prop('checked',false);
         $('#no1').prop('checked',false);
         $("input[name='discounts1']:checkbox").prop('checked',false);
 
     });
 });
 
