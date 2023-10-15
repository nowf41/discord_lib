const fs = require('fs');

//ファイルの存在確認.
exports.checkIsExist = function(filePath){
    let isExist = false;
    try {
        fs.statSync(filePath);
        isExist = true;
    } catch(e) {
        isExist = false;
    } finally {
        return isExist;
    }
};

//ファイルの読み出し.
exports.readFile = function(filePath, charactorCode = 'utf-8'){
    let content = new String();
    try{
        content = fs.readFileSync(filePath, charactorCode);
    } catch(e) {
        return false;
    }
    return content;
};