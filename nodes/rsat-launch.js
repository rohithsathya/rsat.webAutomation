var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = function(RED) {
    function launch(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
        driver.get(config.url);
        driver.wait(until.elementLocated(By.tagName('body')),100000).then(el=>{
            msg.driver = driver;
            node.send(msg);

        });

        
    }
    RED.nodes.registerType("rsat-launch",launch);
}