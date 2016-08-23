/**
 * Created by Apple on 16/8/23.
 */
function mainFactory(){
    return {
        "say":function(){
            console.log("Main Hello World!!!")
        }
    }
}

module.exports = mainFactory;