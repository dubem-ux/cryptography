const fsPromise = require('fs').promises;
const filePath = './index.txt';

fsPromise.writeFile(filePath,'To graduate and theoritically sound students who can compete favourably anywhere in the world and who can be self-reliant and innovative using the latest technologies')
.then(data =>{
    console.log('i have successfully written',data);

    fsPromise.readFile(filePath,{encoding:'utf-8'})
    .then(data =>{
        console.log('i have read',data)

        //encrypt the data
        const crypto = require('crypto');
        const algo = 'aes-256-cbc';
        const initVector = 'NA3t4567hytkCV2o';
        const secKey = 'REtgV24bDB7xQYoMuypiBASMEaJbc59=';
        console.log(secKey);
        const cipher = crypto.createCipheriv(algo,secKey,initVector);
        const message = data;
        console.log(data)
        let encryptedData = cipher.update(message,'utf-8','hex');
        encryptedData += cipher.final('hex')
        console.log('Encrypted Data:',encryptedData);

        let decipher = crypto.createDecipheriv(algo,secKey,initVector);
        let decryptedData = decipher.update(encryptedData,'hex','utf8');
        decryptedData += decipher.final('utf8');
        console.log(decryptedData);

        fsPromise.writeFile('./encryptedFile.txt',encryptedData)
        .then(data =>{
            console.log('i wrote successfully')
        })
        .catch(err =>{
            console.log('no dey fall my hand guy')
        })
    })

    .catch(err =>{
        console.log('guy u fucked up')
    })
})

.catch(err =>{
    console.log('there was an error which is',err);
});



