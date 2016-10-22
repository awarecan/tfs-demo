function Control(selectType, selector, ele) {
    if (ele) {
        this.ele = ele;
        return;
    }

    this.selectType = selectType;
    this.selector = selector;
    if (selector) {
        switch (selectType.toLowerCase()) {
            case "id":
                this.locator = by.id(selector);
                break;
            case "name":
                this.locator = by.name(selector);
                break;
            case "linktext":
                this.locator = by.linkText(selector);
                break;
            case "xpath":
                this.locator = by.xpath(selector);
                break;
            case "tagname":
                this.locator = by.tagName(selector);
                break;
            case "css":
                this.locator = by.css(selector);
                break;
            case "js":
                this.locator = by.js(selector);
                break;
            case "partiallinktext":
                this.locator = by.partialLinkText(selector);
                break;
            case "binding":
                this.locator = by.binding(selector);
                break;
            case "exactbinding":
                this.locator = by.exactBinding(selector);
                break;
            case "model":
                this.locator = by.model(selector);
                break;
            case "buttontext":
                this.locator = by.buttonText(selector);
                break;
            case "partialbuttontext":
                this.locator = by.partialButtonText(selector);
                break;

            case "csscontainingtext":
                this.locator = by.cssContainingText(selector[0], selector[1]);
                break;

            case "repeater":
                this.locator = by.repeater(selector);
                break;
            case "exactrepeater":
                this.locator = by.exactRepeater(selector);
                break;
            case "options":
                this.locator = by.options(selector);
                break;
            case "deepcss":
                this.locator = by.deepCss(selector);
                break;

            case "classname":
                this.locator = by.className(selector);
                break;
            default:
                this.locator = by.id(selector);
        }
        this.ele = element(this.locator);
    }
}
Control.prototype.equals = function (a, b) {
    return this.ele.equals(a, b);
};
Control.prototype.getDriver = function () {
    return this.ele.getDriver();
};
Control.prototype.getId = function () {
    this.waitPresent();
    return this.ele.getId();
};
Control.prototype.findElement = function (locator) {
    return this.ele.findElement(locator);
};
Control.prototype.isElementPresent = function (locator) {
    return this.ele.isElementPresent(locator);
};
Control.prototype.isPresent = function () {
    return this.ele.isPresent();
};
Control.prototype.click = function () {
    this.waitPresent();
    return this.ele.click();
};
Control.prototype.sendKeys = function (keys) {
    this.waitPresent();
    return this.ele.sendKeys(keys);
};
Control.prototype.getTagName = function () {
    this.waitPresent();
    return this.ele.getTagName();
};
Control.prototype.getCssValue = function (cssStyleProperty) {
    this.waitPresent();
    return this.ele.getCssValue(cssStyleProperty);
};
Control.prototype.getAttribute = function (attributeName) {
    this.waitPresent();
    return this.ele.getAttribute(attributeName);
};
Control.prototype.getText = function () {
    this.waitPresent();
    return this.ele.getText();
};
Control.prototype.getSize = function () {
    this.waitPresent();
    return this.ele.getSize();
};
Control.prototype.getLocation = function () {
    this.waitPresent();
    return this.ele.getLocation();
};
Control.prototype.isEnabled = function () {
    this.waitPresent();
    return this.ele.isEnabled();
};
Control.prototype.isSelected = function () {
    this.waitPresent();
    return this.ele.isSelected();
};
Control.prototype.submit = function () {
    this.waitPresent();
    return this.ele.submit();
};
Control.prototype.clear = function () {
    this.waitPresent();
    return this.ele.clear();
};
Control.prototype.isDisplayed = function () {
    this.waitPresent();
    return this.ele.isDisplayed();
};
Control.prototype.getOuterHtml = function () {
    this.waitPresent();
    return this.ele.getOuterHtml();
};
Control.prototype.getInnerHtml = function () {
    this.waitPresent();
    return this.ele.getInnerHtml();
};

Control.prototype.waitPresent = function (timeoutInSeconds) {
    var timeoutInSeconds = timeoutInSeconds || 60;
    
    var self = this;
    if (self.locator) {
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(self.locator);
        }, timeoutInSeconds * 1000);
    }
};

Control.prototype.constructor = Control;

module.exports = Control;