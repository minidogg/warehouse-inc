/*
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
    { threshold: 1, content: "Your Sugar is crap" },
    { threshold: 500, content: "People love your sugar!" },
];
*/