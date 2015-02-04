//hide trap sign
//when user clicks on image, reveal trap sign

$(document).ready(function() {
    /*use the css class in html doc - in this case "warning"*/ 
    $('.warning').hide();
    $('.image').on('click', function(){
       $('.warning')/*.show('slow')*/.fadeToggle('slow'); 
    });

})