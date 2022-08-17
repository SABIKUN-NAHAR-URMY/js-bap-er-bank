document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const newWithdrawFieldValue = parseFloat(withdrawFieldValueString);

    if(isNaN(newWithdrawFieldValue ))
    {
        alert('Please provide a number');
        return;
    }
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValueString = withdrawTotal.innerText;
    const previousWithdrawTotalValue = parseFloat(withdrawTotalValueString);

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withdrawField.value = '';
    if(newWithdrawFieldValue > previousBalanceTotal){
        alert('Baap er bank a eto taka nai!');
        return;
    }

    const currentWithdrawTotal = newWithdrawFieldValue + previousWithdrawTotalValue;
    withdrawTotal.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawFieldValue;
    balanceTotalElement.innerText = currentBalanceTotal;
    
})