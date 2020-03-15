import actionTypes from "../constants/actionTypes";

function newsItemReceived(newsItem) {
  return {
    type: actionTypes.NEWSITEM_RECEIVED,
    newsItem: newsItem
  };
}

function newsReceived(news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  };
}

/* export function fetchNews(fakeNews) {
  return dispatch => {
    dispatch(newsReceived(fakeNews));
  };
} */

export function fetchNews(fakeNews) {
  // debugger;
  console.log("presend");
  return dispatch => {
    return fetch(`http://localhost:5000/news`).then(response => {
      console.log(response);
    });
  };
}

export function fetchNewsItem(fakeNewsItem) {
  return dispatch => {
    dispatch(newsItemReceived(fakeNewsItem));
  };
}
