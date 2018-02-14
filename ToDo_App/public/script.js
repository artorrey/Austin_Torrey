/**
 * Created by Austin and Erik on 11/22/16.
 */

// var url = "https://todoapp-v-2.herokuapp.com/todos";
var url = "http://localhost:3000/todos/";

// AJAX STUFF

$('document').ready(function(){

    $.ajax({
        "url" : url,
        "method": "GET"

        // automatically gets JSON data
    })
        .fail(function(obj, err) {
            console.log( "Something wrong. Err is " + err );
            return false;
        })
        .done(function(obj){
            // console.log(obj)
            // removes all pre-existing to do s, e.g. sample to do s
            // $('ul').empty();

            // loop over each list item
            obj.forEach(function(o){
                // console.log(o);

                var className = o.completed ? " class="+"'completed'" : "";
                // We need to hide the id of the todo in the li element, so we may
                // retrieve it later and call the api with the /:id call
                $('ul').append(
                    "<li" + className + " " + "data-id='"+ o.id+ "'>" +
                    "<span>" +
                    "<i class='fa fa-times fa-2x'></i>" +
                    "</span> " +
                    o.description +
                    "</li>"
                );
            })
        });



});
    //ajax post method
$('input').keypress(function(event){
    if(event.which===13) {
        var enteredText = $(this).val();
        var todoItem = {'description':enteredText,'completed':false};
        $.ajax({
            type:'POST',
            // added http URL
            url:'http://localhost:3000/todos',
            data:JSON.stringify(todoItem),
            contentType:'application/json'
        })
            .done(function() {
                //
                location.reload()
            });
    }
});

    //ajax completed/put method
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
    $.ajax({
        type: 'PUT',
        url:'http://localhost:3000/todos',
        data:{'completed':true},
        contentType: 'application/json'
    })
        // .done(function() {
        //     location.reload()
        // });
    });

    //remove/delete method
$('ul').on('click', 'span', function(event){
    $(this).parent().remove();

});