const trs = document.querySelectorAll('#fixtures > div > table > tbody > tr.match-on');
const ths = document.querySelectorAll('#fixtures > div > table > tbody > tr.hda-header > td:nth-child(5)'); 

trs.forEach(function(e) {
  try {
    let one = e.querySelectorAll(':scope > td:nth-child(5) > p > span')[0].innerHTML;
    let two = e.querySelectorAll(':scope > td:nth-child(6) > p > span')[0].innerHTML;
    
    if (one.includes('/')) one = fractionToDecimal(one) + 1;
    else one = Number.parseFloat(one);

    if (two.includes('/')) two = fractionToDecimal(two) + 1;
    else two = Number.parseFloat(two);

    const res = ((100 / one) + (100 / two)).toFixed(2);
   
    const td = document.createElement('td');
    td.innerHTML = `<p class="participant-name participant-name-draw"><span class="beta-footnote bold">${res}</span></p>`;
    
    const container = e.querySelectorAll(':scope > td:nth-child(6)')[0];
    container.parentNode.insertBefore(td, container.nextSibling);
  } catch {
    console.log(`Error getting inputs for row ${i}`);
  }
});

ths.forEach(function(e) {
  const td = document.createElement('td');
  td.className = 'bet-headers beta-caption1';
  td.innerHTML = 'Total';
  e.parentNode.insertBefore(td, e);
});

function fractionToDecimal(fr) {
  const split = fr.split('/');
  return parseInt(split[0], 10) / parseInt(split[1], 10);
}