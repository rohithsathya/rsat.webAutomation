var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = function(RED) {
    function launch(config) {
        RED.nodes.createNode(this,config);
        var node = this;
       node.on('input',function(msg){
            var driver = msg.driver;
            driver.quit();
            msg.driver = null;
            node.send(msg);

       });



        
    }
    RED.nodes.registerType("close-website",launch);
}