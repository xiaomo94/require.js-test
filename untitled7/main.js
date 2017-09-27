/**
 * Created by xiaomo on 17/6/22.
 */


require.config({
    paths: {
        "moduleAAA": "js/moduleA"
    }
});

require(['moduleAAA'], function (moduleA){
    // some code here

    console.log("加载A模块");

    console.log(moduleA.add(5,6));

});