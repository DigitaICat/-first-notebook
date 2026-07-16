let add = document.querySelector("#create");
let main = document.querySelector("main");
let mainElement = main.firstElementChild;
let count = 1;
    add.addEventListener("click", function () { 
        let section = document.createElement("section");
        section.id = (`section${count}`);
        section.classList.add("note");
        add.after(section);
        let SectionHeder = document.createElement("h3");
        let SectioBodu = document.createElement("p");
        let Sectiondel = document.createElement("button");
        count++;
    })