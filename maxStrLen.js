/**
 * 计算最长字串长度
 * @param {} str 
 */
function StringStrLength(str) {
  let max = 0;

  let maxStr = [];

  let oldArr = [];

  const strArr = str.split('');

  strArr.forEach((item, index) => {
    if (maxStr.indexOf(item) === -1) {
      maxStr.push(item);

      if (maxStr.length > max) {
        max = maxStr.length;
      }
    } else {
      maxStr = [item];
      let tempItem = oldArr.pop();
      while (tempItem !== item) {
        maxStr.unshift(tempItem);
        tempItem = oldArr.pop();
      }
    }
    oldArr = [...maxStr];
  });

  return max;
}

const res = StringStrLength('pwwkewwwey');
console.log(res);
