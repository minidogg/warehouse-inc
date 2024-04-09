import { newsData } from './data/news.js';

function updateNews(totalSugar) {
    let selectedNews = newsData.find(item => totalSugar < item.threshold);

    if (!selectedNews) {
        selectedNews = newsData[newsData.length - 1];
    }

    const newsFeedElement = document.getElementById('newsFeed');
    newsFeedElement.innerText = selectedNews.content;
}