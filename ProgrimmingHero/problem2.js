function sendNotification(email) {
  let regex = /[a-z0-9]@{1,2}gmail|yahoo|email.com/;
    if (regex.test(email)) {
        let lth = email.length;
        let fname = '';
        let Ename = '';
        for (let i = 0; lth > i; i++){
            if (email[i] == '@') {
                fname = email.slice(0, i);
                Ename = email.slice(i+1,);
            }
        }
        return ` ${fname} sent you an email from ${Ename}`;
    } else {
        return 'Invalid Input';
 }
}

//function call
sendNotification("mdhabib@gmail.com");

// console.log(sendNotification("habib@gmail.com"));
