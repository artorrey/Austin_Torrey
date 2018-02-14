

$(document).ready(function() {
   $('form').submit(function() {
       var errors = false;




       var email = $('input[name=email]').val();
       var passWord = $('input[name=password]').val();
       var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;


       function checkEmail(email) {
           return re.test(email);

       }
       if (passWord.length < 8) {
           errors = true;
           $('.errors').html('Your password is too short');
       }
       if (!checkEmail(email)) {
           errors = true;
           $('.errors').html('You must enter a valid email');

       }


       if (errors == true) {
           return false;
       }

   });
});

// $(document).ready(function(){
//    $('form').submit(function(){
//        var error = false;
//
//        $('.errors').html('');
//
//       var email    = $('input[name=email]').val();
//       var password = $('input[name=password]').val();
//
//
// if(password.length < 8){
//     error = true;
//     $('.errors').html('Your password is too short.');
// }
// if(!checkEmail(email)){
//     error = true;
//     $('.errors').html('You must enter a valid email address.')
// }
//
// if(error == true){
//     return false;
// }
// function checkEmail(email) {
//     var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
//     return re.test(email);
// }
//    });
// });