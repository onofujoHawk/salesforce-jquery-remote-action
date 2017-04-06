$(document).ready(function(){
  console.clear();
  console.log('DOM Initialized.');

  getAccountCityRemoteAction();
});

function getAccountCityRemoteAction(){
  var acctName = $('acctSearch').val();
  Visualforce.remoting.Manager.invokeAction(
    '{!$RemoteAction.AccountCtrl.getAccountCity}',
    acctName,
    function(result, event){
      if (event, status){
        if (result != null){
          $('#acctMessage').css('display', 'block').addClass('info')
            .append('<div class="header" id="header">Address found!</div>');
          $('#acctAddressDisplay').html(result.BillingStreet + '-' + result.BillingCity);
        } else {
          $('#acctMessage').css('display', 'block').addClass('warning');
          $('#acctAddressDisplay').html('No data found!');
        } else if (event.type === 'exception'){
          $('#acctMessage').css('display', 'block').addClass('negative')
            .append('<div class="header" id="header">Exception!</div>');
          $('#acctAddressDisplay').html(event.message);
        } else {
          $('#acctMessage').css('display', 'block').addClass('negative')
            .append('<div class="header" id="header">Exception!</div>');
          $('#acctAddressDisplay').html(event.message);
        }
      }
    }, {
      escape: false,
      timeout: 120000,
      buffer: false
    }
  );
}
