/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY__REST = 40;
  let RENT__COST = 0;

  if (days <= 2) {
    RENT__COST = days * DAILY__REST;
  }

  if (days >= 3 && days < 7) {
    RENT__COST = days * DAILY__REST - 20;
  }

  if (days >= 7) {
    RENT__COST = days * DAILY__REST - 50;
  }

  return RENT__COST;
}

module.exports = calculateRentalCost;
