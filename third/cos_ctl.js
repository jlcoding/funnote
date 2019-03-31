const Config = require('./../core/config')
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');

/**
 *  Usage:
 *  new CosCtl().upload('123.txt', '/home/jl/空白文档2.txt');
 *  new CosCtl().info('123.txt');
 *  new CosCtl().download('123.txt');
 * 
 */
class CosCtl {
    
    constructor() {
        this.cosClient = new COS({
            SecretId: Config.Cos.SecretId,
            SecretKey: Config.Cos.SecretKey
        });
    }

    /**
     * 文件信息
     * @param {string} key cos文件路径
     * @param {*} handle 回调函数(err, data)
     */
    info(key, handle) {
        var params = {
            Bucket : Config.Cos.Bucket,        /* 必须 */
            Region : Config.Cos.Region,        /* 必须 */
            Key : key,            /* 必须 */
            // IfModifiedSince : 'STRING_VALUE'    /* 非必须 */
        };
        
        this.cosClient.headObject(params, handle);
    }

    /**
     * 
     * @param {string} key cos文件路径
     * @param {string} path 本地文件路径
     * @param {function} handle 回调函数(err, data)
     */
    upload(key, path, handle) {
        this.cosClient.putObject({
            Bucket : Config.Cos.Bucket,        /* 必须 */
            Region : Config.Cos.Region,        /* 必须 */
            Key : key,                           /* 必须 */
            Body: fs.createReadStream(path),           /* 必须 */
            onProgress: function (progressData) {
                console.log(progressData);
            },
        }, handle);
    }

    download(key) {
        var params = {
            Bucket : Config.Cos.Bucket,        /* 必须 */
            Region : Config.Cos.Region,        /* 必须 */
            Key : key,                            /* 必须 */
            // ResponseContentType : 'STRING_VALUE',            /* 非必须 */
            // ResponseContentLanguage : 'STRING_VALUE',        /* 非必须 */
            // ResponseExpires : 'STRING_VALUE',                /* 非必须 */
            // ResponseCacheControl : 'STRING_VALUE',            /* 非必须 */
            // ResponseContentDisposition : 'STRING_VALUE',    /* 非必须 */
            // ResponseContentEncoding : 'STRING_VALUE',        /* 非必须 */
            // Range : 'STRING_VALUE',                            /* 非必须 */
            // IfModifiedSince : 'STRING_VALUE',                /* 非必须 */
            Output : '/home/jl/test123.txt'        /* 必须 */
        };
        
        this.cosClient.getObject(params, function(err, data) {
            if(err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
}

new CosCtl().info('1234.txt', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
