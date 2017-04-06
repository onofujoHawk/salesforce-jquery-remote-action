$(document).ready(function(){
  /* message close transition */
  $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
      ;
    })
  ;

  /* required field form */
  $('.field.example form')
  .form({
    on: 'blur',
    fields: {
      address: {
        identifier  : 'address',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a value'
          }
        ]
      }
    }
  });

});
