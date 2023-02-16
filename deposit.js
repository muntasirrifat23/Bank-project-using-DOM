document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFeild = document.getElementById('d-field');
    const depositString = depositFeild.value;
    const deposit = parseFloat(depositString);

    const depositT = document.getElementById('d-total');
    const depositTotalString = depositT.innerText;
    const depositTotal = parseFloat(depositTotalString);

    depositFeild.value = '';

    const currentDeposit = (deposit + depositTotal);
    depositT.innerText = currentDeposit;

    const balaceTotal = document.getElementById('b-total');
    const balanceAmountString = balaceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    const currentBalance = (balanceAmount + deposit);
    balaceTotal.innerText = currentBalance;
})