const fsPromise = require('fs').promises;
const filePath = './encryptedFile.txt';
const crypto = require('crypto');
const algo = 'aes-256-cbc';
const initVector = 'NA3t4567hytkCV2o';
const secKey = 'REtgV24bDB7xQYoMuypiBASMEaJbc59=';


fsPromise.readFile(filePath,{encoding:'utf8'})
.then((data) =>{
    
    console.log(data);
    console.log('read sucessfully')
    let decipher = crypto.createDecipheriv(algo,secKey,initVector);
    let decryptedData = decipher.update(data,'hex','utf8');
    decryptedData += decipher.final('utf8');
    console.log(decryptedData);

    fsPromise.writeFile('message.txt',decryptedData)
    .then(data =>{
        console.log('written')
    })
    .catch(err =>{
        console.log('guy you don pass this rubbish',err)
    })

})
.catch(err =>{
    console.log('no try my hand todayoooo',err)
})
