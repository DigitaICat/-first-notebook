let AddRequest = document.querySelector ("#create_request");
let main = document.querySelector ("main");
let mainElement = main.firstElementChild;
let count = 1;
const titleArchive = [];
const textArchive = [];
let DivAddRequest = document.querySelector("#DivBtnCreate");
let request = document.createElement("script");
let dialog = document.createElement("dialog");
let form = document.createElement("form");
let InputName = document.createElement("input");
let InputMain = document.createElement("input");
let LabelName = document.createElement("label");
let LabelMain = document.createElement("label");
let BtnCreate = document.createElement("button");
let BtnClose = document.createElement("button");
let DivClose = document.createElement("div");
let DivCreate = document.createElement("div");
let name = document.createElement("h2");
let description = document.createElement("h3");
DivClose.classList.add("DivClose");
//dialog.classList.add("note");
BtnClose.id = ("BtnClose");
BtnCreate.id = ("AddSection");
InputName.id = ("InputName");
InputMain.id = ("InputMain");
LabelName.id = ("LabelName");
LabelMain.id = ("LabelMain");
name.id = ("name");
description.id = ("description");
DivCreate.id = ("DivCreate");
InputName.name = ("InputName");
InputMain.name = ("InputMain");
BtnClose.textContent = ("X");
name.textContent = "Note title";
description.textContent = "Note";
let AddSection = BtnCreate;
main.append(dialog);
dialog.append(DivClose);
DivClose.append(BtnClose);
dialog.append(form);
form.append(name);
form.append(InputName);
form.append(description);
form.append(InputMain);
form.append(DivCreate);
DivCreate.append(BtnCreate);
BtnCreate.textContent = "create";
BtnClose.addEventListener("click", function (event) {
    event.preventDefault();
    dialog.close();
})
AddSection.addEventListener("click", function (event) { 
    event.preventDefault();
    //let number = count;
    let inputTitleValue = InputName.value;
    let inputMainValue = InputMain.value;
    titleArchive.push(inputTitleValue);
    textArchive.push(inputMainValue);
    let section = document.createElement("section");
    section.id = (`section${count}`);
    section.classList.add("note");
    DivAddRequest.after(section);
    let SectionHeder = document.createElement("h3");
    let SectionDivDel = document.createElement("div");
    let SectionDel = document.createElement("button");
    let SectioBodu = document.createElement("p");
    SectionDel.classList.add("BtnClose");
    SectionDivDel.classList.add("DivClose");
    SectionHeder.textContent = titleArchive[titleArchive.length - 1];
    SectioBodu.textContent = textArchive[textArchive.length - 1];
    section.append(SectionDivDel);
    SectionDivDel.append(SectionDel);
    section.append(SectionHeder);
    section.append(SectioBodu);
    SectionDel.textContent = ("X");
    SectionDel.addEventListener("click", function (event) {
        event.preventDefault();
        section.remove();
    })
    dialog.close();
    count++;
})
AddRequest.addEventListener("click", function () {
    dialog.showModal();
})

