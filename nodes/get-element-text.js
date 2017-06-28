var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = function(RED) {
    function launch(config) {
        RED.nodes.createNode(this,config);
        var node = this;
       node.on('input',function(msg){
            var driver = msg.driver;

            driver.wait(until.elementsLocated(By.xpath(config.xpath)),5000).then(el=>{
                driver.findElement(By.xpath(config.xpath)).getText().then(function(textValue){
                    if(!msg["output"]){
                        msg["output"] ={};
                    }
                    msg.output[config.variable]=textValue;
                    node.send(msg);
                });
            });
       });



        
    }
    RED.nodes.registerType("get-element-text",launch);
}