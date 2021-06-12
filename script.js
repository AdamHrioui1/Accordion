const accodion_header = document.querySelectorAll(".accodion_header");
const accordion_content = document.querySelectorAll(".content");

accodion_header.forEach(accordion => {
    accordion.addEventListener("click", (e) => {

        accordion_content.forEach( content => {
            if(content.classList.contains("active") && e.target.nextElementSibling !== content){
                content.classList.remove("active"); 
            }
            console.log(e.target.nextElementSibling, e.target.nextElementSibling !== content);
        });
        console.log(" ");

        const content = accordion.nextElementSibling;
        content.classList.toggle("active");
    })
});