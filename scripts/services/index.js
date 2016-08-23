/**
 * Created by Apple on 16/8/23.
 */
function indexFactory(){
    return {
        "say":function(){
            console.log("Index Hello World!!!")
        }
    }
}

module.exports = indexFactory;