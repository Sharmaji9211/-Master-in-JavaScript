const targetBtn_about = document.querySelectorAll('a');
console.log(targetBtn_about);

targetBtn_about.forEach(link => {
    console.log(link);
    let pageHTML = link.innerText; // corrected this line
    let BASE_URL = "http://127.0.0.1:5500/dom_manupulation/pages/";

    link.addEventListener('click', () => {  // corrected 'onclick' to 'click'
        // e.preventDefault(); // prevent default link behavior

        // location.href = BASE_URL + pageHTML+".html";
        window.open(BASE_URL + pageHTML, '_blank');
    });
});
