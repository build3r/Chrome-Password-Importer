var pm = PasswordManagerImpl.getInstance();
var pl = pm.getSavedPasswordList(extractPasswords);
var count;
function extractPasswords(list) {
    count = list.length
    for (item in list) {
        getPass(list[item]);
    }
}
function getPass(acctObj) {
    var prmise = pm.getPlaintextPassword(acctObj['id'], function(){});
    prmise.then( function(value) {
        printDetails(acctObj, value)
    });
}
var details = []
function printDetails(acctObj, pass) {
    details.push({
        "hostname": acctObj['loginPair']['urls']['origin'],
        "username": acctObj['loginPair']['username'],
        "password": pass
      });
      count--;
      if(count<=0) {
        console.log(JSON.stringify(details));
      }
}
