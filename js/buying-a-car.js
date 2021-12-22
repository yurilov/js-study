function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth,
) {
  let savings = 0;
  let m = 0;
  let percent = percentLossByMonth;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  if (startPriceOld >= startPriceNew) {
    return [0, startPriceOld - startPriceNew];
  }
  for (m; ; m += 1) {
    if (m % 2 === 0 && m !== 0) {
      percent += 0.5;
    }
    if (m >= 1) {
      priceOld -= (priceOld * percent) / 100;
      priceNew -= (priceNew * percent) / 100;
    }

    savings = priceOld + savingperMonth * m;
    if (savings >= priceNew) {
      break;
    }
  }

  return [m, Math.round(savings - priceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
