document.getElementById('btn-withdraw').addEventListener('click', function(){
    const wField = document.getElementById('w-field');
    const wAmountString = wField.value;
    const wAmount = parseFloat(wAmountString);
    const wTotalEle = document.getElementById('w-total');
    const wTotalString = wTotalEle.innerText;
    const wTotal = parseFloat(wTotalString);

    wField.value = '';

    const currentWithdraw = (wAmount + wTotal);
    wTotalEle.innerText = currentWithdraw;

    const bTotal = document.getElementById('b-total');
    const balanceAmountString = bTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    const currentBalance = (balanceAmount - wAmount);
    bTotal.innerText = currentBalance;
})