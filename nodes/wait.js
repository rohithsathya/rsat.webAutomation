var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = function(RED) {
    function launch(config) {
        RED.nodes.createNode(this,config);
        var node = this;
       node.on('input',function(msg){
            var driver = msg.driver;

            if(config.until =="elementLocated"){
                driver.wait(until.elementLocated(By.xpath(config.xpath)),config.timeout).then(el=>{
                    console.log("element located, so stoped waitingG");
                     node.send(msg);
                })
            }

           

       });



        
    }
    RED.nodes.registerType("wait",launch);
}