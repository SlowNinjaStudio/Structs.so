
/*
 * Human Readable Time
 *
 * Displays the first-most important sections only.
 */
export function WattToString(amount, wattHours = false) {

  let divider = ' '

  let resultAmount = amount;
  let resultPostfix = 'Watt';
  let resultPostfixScale = 'Watt';

  if (Math.abs(amount) > 1000000000000) { //Terawatt
    resultPostfix = 'TW'
    resultPostfixScale = 'Terawatt';
    resultAmount = parseFloat(amount / 1000000000000).toFixed(3);

  } else if (Math.abs(amount) > 1000000000) { //Gigawatt
    resultPostfix = 'GW'
    resultPostfixScale = 'Gigawatt';
    resultAmount = parseFloat(amount / 1000000000).toFixed(3);

  } else if (Math.abs(amount) > 1000000) { //Megawatt
    resultPostfix = 'MW'
    resultPostfixScale = 'Megawatt';
    resultAmount = parseFloat(amount / 1000000).toFixed(3);

  } else if (Math.abs(amount) > 1000) { //Kilowatt
    resultPostfix = 'kW'
    resultPostfixScale = 'Kilowatt';
    resultAmount = parseFloat(amount / 1000).toFixed(3);

  }

  const wattHoursPostfix = (wattHours) ? '/h' : ''

  return '<span class="watt-amount" title="' + amount + divider + 'watt">' + resultAmount + '</span>' + divider + '<span class="watt-amount-postfix" title="' + resultPostfixScale + '">' + resultPostfix + wattHoursPostfix + '</span>';
}
