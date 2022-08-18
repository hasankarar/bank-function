



document.getElementById('btn_deposit').addEventListener('click', function () {
    const newDepositeAmount = getInputFieldValueId('input_deposit');
    const previousDopositeAmount = getElementValueId('deposit_total');
    const totaDepositelAmount = previousDopositeAmount + newDepositeAmount;
    setElementAmount('deposit_total', totaDepositelAmount);
    const previousBalanceAmount = getElementValueId('balace_total');
    const totalBalanceAmoutAfetr = previousBalanceAmount + newDepositeAmount
    setElementAmount('balace_total', totalBalanceAmoutAfetr);

});

