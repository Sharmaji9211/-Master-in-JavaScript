const targetBtn_about = document.querySelectorAll('a');
console.log(targetBtn_about);

targetBtn_about.forEach(link => {
    console.log(link);
    let pageHTML = link.innerText.replace(/\s+/g, '_'); // replaces spaces with underscores
    let BASE_URL = "http://127.0.0.1:5500/news_website/eventHandling/pages/";

    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default link behavior

        window.open(BASE_URL + pageHTML, '_blank'); // open in a new tab
    });
});
