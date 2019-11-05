function Account(name, balance){
  this.name = name,
  this.balance = balance
}


Account.prototype.deposit = function(){

}


$(document).ready(function () {
    $('#registerAccount').submit(function (event) {
        event.preventDefault();
        let accountName = $('#accountName').val();
        let initialDeposit = parseInt($('#initialDeposit').val());
        $('#registerAccount').hide();
        $('#accountFunds').show();
        $('.displayBalance').show();
        let depositAmt = $('#funds')

        var account = new Account(accountName, initialDeposit);

        console.log(account);


    })
});
