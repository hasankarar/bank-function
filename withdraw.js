

document.getElementById('btn_withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueId('withdrawField');
    const previousWithdrawAmount = getElementValueId('withdraw_total');
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setElementAmount('withdraw_total', currentWithdrawTotal);


    const previousWithdrawBalance = getElementValueId('balace_total');
    const totalBalanceAfterWithdraw = previousWithdrawBalance - newWithdrawAmount;
    setElementAmount('balace_total', totalBalanceAfterWithdraw);





});