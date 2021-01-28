function handleProductUpdate(isIncrease, counterId, priceId, price) {
  const phoneCount = document.getElementById(counterId);
  const phoneCountNum = parseInt(phoneCount.value);
  var newPhoneCount = 0;
  if (isIncrease == true) {
    newPhoneCount = phoneCountNum + 1;
  } else if (isIncrease == false && phoneCountNum > 0) {
    newPhoneCount = phoneCountNum - 1;
  }
  phoneCount.value = newPhoneCount;
  const phonePriceTotal = newPhoneCount * price;
  document.getElementById(priceId).innerText = phonePriceTotal;
  getTotalPrice();
}

/* ---------------------------------------------------------------------
                     Case Event Handler                                  
-------------------------------------------------------------------------- */
function getTotalPrice() {
  const phoneCountNum = inputValueToNumber("phoneCount");
  const caseCountNum = inputValueToNumber("caseCount");

  const totalPrice = phoneCountNum * 1240 + caseCountNum * 59;
  document.getElementById("sub-total").innerText = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.05);
  console.log(totalPrice);
  document.getElementById("tax").innerText = "$" + tax;

  const grandTotal = tax + totalPrice;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function inputValueToNumber(productId) {
  const inputValueString = document.getElementById(productId);
  const inputValueNumber = parseFloat(inputValueString.value);
  return inputValueNumber;
}
