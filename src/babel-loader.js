const loaderUtils = require('loader-utils')

function babel_loader(source) {
    const { presets }=loaderUtils.getOptions(this)
    //需要返回异步数据
    const callBack=this.async();
    //异步解析es6
    babel.transform(source,{  
        presets
    },function(err,result){
        //解析完成
        callBack(err,result.code)
    })
}
module.exports = babel_loader;
