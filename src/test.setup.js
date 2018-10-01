import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import jsdom from "jsdom";
global.fetch = require("jest-fetch-mock");


function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM("<!doctype html><html><body></body></html>", { url: "http://localhost/" });
    const { window } = dom;

    global.dom = dom;
    global.window = window;
    global.document = window.document;
    global.navigator = {
        userAgent: "node.js"
    };
    copyProps(window, global);
}

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === "undefined")
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

setUpDomEnvironment();

global.fetch = require("jest-fetch-mock");
global.sinon = require("sinon");
global.jsdom = jsdom;





Enzyme.configure({ adapter: new Adapter() });

