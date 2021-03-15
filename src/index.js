module.exports = function check(str, bracketsConfig) {
  for (let j = 0; j < bracketsConfig.length; j++) {
        let arr = bracketsConfig[j];
        let openhooks = arr[0];
        let closehooks = arr[1];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == openhooks && str[i + 1] == closehooks) {
                str = str.substr(0, i) + str.substr(i + 2);
                i = -1;
                j = -1;
                continue;
            }
        }
    }
    return str.length === 0;
}
