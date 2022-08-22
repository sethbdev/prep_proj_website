/* ==> My weakest link at present is JavaScript so I am going
        to use this project opportunity to create as much of 
        this project site in JavaScript. Intent is to have
        code sections: HTML, CSS, JavaScript. Will have each
        section started with a comment.
*/

// ====> HTML portion of code
// ==> Creating <section> tags, appending to body, assigning id's

const section = document.createElement("section");
document.body.appendChild(section);


const sectionSetId = document.getElementsByTagName("section")[0];
sectionSetId.setAttribute("id", "topics");

// ==> Creating div's to style

function divCreate() {
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        document.getElementById("topics").appendChild(div);
}}
divCreate();

function hCreateHtml() {
    const h = document.createElement("h2");
    const divSelect = document.getElementById("topics");
    divSelect.firstChild.appendChild(h);
    headSelect = document.querySelector("div h2");
    headSelect.innerHTML = "<a href='./resourcePages/htmlResources.html'>HTML</a>";
    document.querySelector("a:link").style.color = "#EEFBFB";
}
hCreateHtml();

function hCreateCss() {
    const h = document.createElement("h2");
    const divSelect = document.querySelector("#topics :nth-child(2)");
    divSelect.append(h)
    headSelect = document.querySelector("#topics :nth-child(2) h2");
    headSelect.innerHTML = "<a href='./resourcePages/cssResources.html'>CSS</a>";
    document.querySelector("a:link").style.color = "#EEFBFB";
}
hCreateCss();

function hCreateJs() {
    const h = document.createElement("h2");
    const divSelect = document.querySelector("#topics :nth-child(3)");
    divSelect.append(h)
    headSelect = document.querySelector("#topics :nth-child(3) h2");
    headSelect.innerHTML = "<a href='./resourcePages/jsResources.html'>JavaScript</a>";
    document.querySelector("a:link").style.color = "#EEFBFB";
}
hCreateJs();

function setIdHtml () {
    const hSelect = document.querySelector("#topics :nth-child(1) h2");
    hSelect.setAttribute("id", "html");
}
setIdHtml();

function setIdCss () {
    const hSelect = document.querySelector("#topics :nth-child(2) h2");
    hSelect.setAttribute("id", "css");
}
setIdCss();

function setIdJs () {
    const hSelect = document.querySelector("#topics :nth-child(3) h2");
    hSelect.setAttribute("id", "js");
}
setIdJs();

document.getElementById("html").style.borderStyle = "solid";
document.getElementById("css").style.borderStyle = "solid";
document.getElementById("js").style.borderStyle = "solid";

// ====> JavaScript Event Listeners

const borderEventH = document.getElementById("html");
const borderEventC = document.getElementById("css");
const borderEventJ = document.getElementById("js");

// ==> HTML header border event

borderEventH.addEventListener("mouseover", highlightB, false);
borderEventH.addEventListener("mouseout", highlightC, false);

function highlightB () {
    borderEventH.style.borderColor = "orange";
}

function highlightC () {
    borderEventH.style.borderColor = "#EEFBFB"
}

// ==> CSS header border event

borderEventC.addEventListener("mouseover", highlightD, false);
borderEventC.addEventListener("mouseout", highlightE, false);

function highlightD () {
    borderEventC.style.borderColor = "orange";
}

function highlightE () {
    borderEventC.style.borderColor = "#EEFBFB"
}
