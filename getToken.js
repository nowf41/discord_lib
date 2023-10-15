const fs = require('fs');
const { checkIsExist, readFile } = require('./fs.js');
exports.getToken = function(tokenFilePath = 'token.txt'){
    if(checkIsExist(tokenFilePath)){
        return readFile(tokenFilePath);
    }else{
        return false;
    }
};