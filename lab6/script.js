function openNews(category) {
    const modal = document.getElementById("news-modal");
    const newsTitle = document.getElementById("news-title");
    const newsContent = document.getElementById("news-content");

    let content = "";

    if (category === "politics") {
        newsTitle.textContent = "Політика";
        content = `
            <p>Останні новини у світі політики. Дізнайтеся про найважливіші події!</p>
            <video controls width="90%">
                <source src="lab4/video1.mp4" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
            <video controls width="90%">
                <source src="lab4/videoplayback.m4a" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
        `;
    } else if (category === "sports") {
        newsTitle.textContent = "Спорт";
        content = `
            <p>Спортивні події та результати матчів.</p>
            <video controls width="90%">
                <source src="lab6/img/sport-big.jpg" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
            <video controls width="90%">
                <source src="lab6/img/sport.jpg" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
        `;
    } else if (category === "technology") {
        newsTitle.textContent = "Технології";
        content = `
            <p>Новини світу технологій: штучний інтелект, інновації та наукові відкриття.</p>
            <video controls width="90%">
                <source src="lab6/img/news2.jpg" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
            <video controls width="90%">
                <source src="lab6/img/novini.jpg" type="video/mp4">
                Ваш браузер не підтримує відео.
            </video>
        `;
    }

    newsContent.innerHTML = content;
    modal.style.display = "block";
}

function closeNews() {
    document.getElementById("news-modal").style.display = "none";
}
