
function checkDigitsInName(name) {
    if (typeof (name) == 'string') {
        let chak = /(\{|\}|\(|\)|\[|\])/;
        if (chak.test(name)) {
            return "Invalid input"
        } else {
           let regex = /[0-9]/;
           return regex.test(name); 
        };
        
    } else {
        return 'Input must be String';
  }
}
//function call
checkDigitsInName("habib");
// console.log(checkDigitsInName("hab1ib"));

