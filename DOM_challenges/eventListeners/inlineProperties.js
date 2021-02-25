let content = document.getElementById('content');
let showMore = document.getElementById('show-more');

showMore.onclick = () => {
    if (content.className == ""){
    content.className = "open";
    showMore.textContent = "Collapse";

    }
    else
    {
        content.className = "";
        showMore.textContent = "Expand";
    }

    // We can even use content.classList.toggle('open');
}