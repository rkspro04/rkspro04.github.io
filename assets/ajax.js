$(document).ready(function(){
    $('form').on('submit', ()=>{
        let itemtxt = $('form input');
        let item = {text: itemtxt.val(), id: 0};  
        $.ajax({
            type: 'POST',
            url: '/',
            data: item,
            success: function(data){

                location.reload();
            }
        });

        return false;
    });

    $('.delete').on('click', function(){
        let item = $(this).parent();
        let idurl = item.attr('id');
        console.log(idurl);
         $.ajax({
           type: 'DELETE',
           url: '/' + idurl,
           success: function(data){
             //do something with the data via front-end framework
             location.reload();
           }
         });
   
         return false;
   
     });
    
});