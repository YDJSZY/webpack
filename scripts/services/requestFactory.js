/**
 * Created by Apple on 16/8/23.
 */
function requestFactory(){
    return {
        "get":function(){
            console.log("This get request!!!")
        }
    }
}

module.exports = requestFactory;