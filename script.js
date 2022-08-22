/* ==> My weakest link at present is JavaScript so I am going
        to use this project opportunity to create as much of 
        this project site in JavaScript. Intent is to have
        code sections: HTML, CSS, JavaScript. Will have each
        section started with a comment.
*/

// ====> HTML portion of code
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

// ==> Creating div's to style

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

// ==> Creating paragraphs for link placeholders

function pCreateHtml() {
    const p = document.createElement("p");
    document.querySelector("section#html div").appendChild(p);
    const htmlP = document.querySelector("section#html div p");
    htmlP.innerHTML = "HTML";
    htmlP.className = "pTag";
}
pCreateHtml();

function pCreateCss() {
    const p = document.createElement("p");
    document.querySelector("section#css div").appendChild(p);
    const htmlP = document.querySelector("section#css div p");
    htmlP.innerHTML = "CSS";
    htmlP.className = "pTag";
}
pCreateCss();

function pCreateJavascript() {
    const p = document.createElement("p");
    document.querySelector("section#javascript div").appendChild(p);
    const htmlP = document.querySelector("section#javascript div p");
    htmlP.innerHTML = "JavaScript";
    htmlP.className = "pTag";
}
pCreateJavascript();

// ====> CSS portion of code
// ==> Style time

const paraTags = document.querySelectorAll(".pTag");
paraTags.forEach(pTag => {
    pTag.style.color = "#EEFBFB";
});



// ====> JavaScript portion of code
// ==>