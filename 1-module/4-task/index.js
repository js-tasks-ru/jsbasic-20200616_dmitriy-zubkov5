/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let text = str.toLowerCase();
  if (text.includes(`xxx`) || text.includes(`1xbet`)) {
    return true;
  } else {
    return false;
  }
};

