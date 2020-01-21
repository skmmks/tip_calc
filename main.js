var calcTip = () => {
  let totalBill = document.getElementById("totalbill").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let totalPeople = document.getElementById("totalPeople").value;
  let totalTip = (totalBill * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
};

document.getElementById("calculate").onclick = () => {};
