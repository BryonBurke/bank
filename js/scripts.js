function Account(name, balance){
  this.name = name,
  this.balance = balance
}


Account.prototype.deposit = function(amount){
  return this.balance += amount;
  console.log(balance);
}

$(document).ready(function () {
  $('#depositBtn').click(function(){
    // account.deposit();
  });
  $('#withdrawBtntBtn').click(function(){
    console.log('Withdraw clicked!');
  });
    $('#registerAccount').submit(function (event) {
        event.preventDefault();
        let accountName = $('#accountName').val();
        let initialDeposit = parseInt($('#initialDeposit').val());
        $('#registerAccount').hide();
        $('#accountFunds').show();
        $('.displayBalance').show();
        let depositAmt = parseInt($('#depositAmt').val());
        let withdrawalAmt = parseInt($('#withdrawalAmt').val());

        var account = new Account(accountName, initialDeposit);

        console.log(account);
        // account.deposit(depositAmt);

    })
});
