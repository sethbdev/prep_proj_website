// ==> Creating <section> tags, appending to body, assigning id's

function sectionCreator() {
    for (let i = 0; i < 3; i++) {
        const section = document.createElement("section");
        document.body.appendChild(section);
    } 
}
sectionCreator();

const sectionSetIdHtml = document.getElementsByTagName("section")[0];
sectionSetIdHtml.setAttribute("id", "html");

const sectionSetIdCss = document.getElementsByTagName("section")[1];
sectionSetIdCss.setAttribute("id", "css");

const sectionSetIdJavascript = document.getElementsByTagName("section")[2];
sectionSetIdJavascript.setAttribute("id", "javascript");

function divCreateHtml() {
    const div = document.createElement("div");
    document.querySelector("section#html").appendChild(div);
}
divCreateHtml();

function divCreateCss() {
    const div = document.createElement("div");
    document.querySelector("section#css").appendChild(div);
}
divCreateCss();

function divCreateJavascript() {
    const div = document.createElement("div");
    document.querySelector("section#javascript").appendChild(div);
}
divCreateJavascript();

function pCreateHtml() {
    const p = document.createElement("p");
    document.querySelector("section#html div").appendChild(p);
    const htmlP = document.querySelector("section#html div p");
    htmlP.innerHTML = "HTML";
}
pCreateHtml();

function pCreateCss() {
    const p = document.createElement("p");
    document.querySelector("section#css div").appendChild(p);
    const htmlP = document.querySelector("section#css div p");
    htmlP.innerHTML = "CSS";
}
pCreateCss();

function pCreateJavascript() {
    const p = document.createElement("p");
    document.querySelector("section#javascript div").appendChild(p);
    const htmlP = document.querySelector("section#javascript div p");
    htmlP.innerHTML = "JavaScript";
}
pCreateJavascript();



/*function divCreator () {
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div")
        document.querySelector("section#html").appendChild(div)
    }
}*/

/*
const createSection = document.createElement("section");
document.body.appendChild(createSection);
const sectionSetIdJavaScript = document.getElementsByTagName("section")[2];
sectionSetIdJavaScript.setAttribute("id", "javascript")
*/

/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);
*/