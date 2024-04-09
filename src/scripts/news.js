function updateNews(totalSugar) {
    let selectedNews = newsData.find(item => totalSugar < item.threshold);

    if (!selectedNews) {
        selectedNews = newsData[newsData.length - 1];
    }

    console.log(selectedNews)

    const newsFeedElement = document.getElementById('newsFeed');
    newsFeedElement.innerText = selectedNews.content;
}

const newsData = [
    { threshold: 100, content: "News for users with less than 100 sugar" },
    { threshold: 500, content: "News for users with more than 500 sugar" },
];