var calcTip = () => {
  let totalBill = document.getElementById("totalbill").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let totalPeople = document.getElementById("totalPeople").value;
  let totalTip = (totalBill * serviceQuality) / totalPeople;
};

document.getElementById("calculate").onclick = () => {};
