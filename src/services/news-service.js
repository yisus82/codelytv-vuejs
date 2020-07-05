import md5 from 'md5';

export const getArticles = (query = 'javascript') => {
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=popularity&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
  return fetch(url).then((response) => response.json()).then((data) => data.articles)
    .then((articles) => articles.reduce((acc, article) => {
      const key = md5(article.url);
      return [{ key, ...article }, ...acc];
    }, []));
};

export const getArticle = (key, query = 'javascript') => getArticles(query).then((articles) => articles.find((article) => article.key === key));

export default { getArticles, getArticle };
