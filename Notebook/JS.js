let AddRequest = document.querySelector ("#create_request");
let main = document.querySelector ("main");
let mainElement = main.firstElementChild;
let count = 1;
let request = document.createElement("script");
    AddRequest.addEventListener("click", function () {
        let dialog = document.createElement("dialog");
        let form = document.createElement("form");
        let InputName = document.createElement("input");
        let InputMain = document.createElement("input");
        let LabelName = document.createElement("label");
        let LabelMain = document.createElement("label");
        let btnCreate = document.createElement("button");
        dialog.classList.add("note");
        btnCreate.id = ("add");
        let add = document.querySelector("#add");
        main.append(dialog);
        dialog.append(form);
        form.append(InputName);
        form.append(InputMain);
        dialog.append(btnCreate); 
        btnCreate.textContent = "create";
        dialog.showModal();

    })
    add.addEventListener("click", function () { 
        let section = document.createElement("section");
        section.id = (`section${count}`);
        section.classList.add("note");
        add.after(section);
        let SectionHeder = document.createElement("h3");
        let SectionDel = document.createElement("button");
        let SectioBodu = document.createElement("p");

        section.append(SectionHeder);
        section.append(SectionDel);
        section.append(SectioBodu);
        count++;
    })