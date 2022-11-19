import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
    const host = 'http://localhost:8080';
    const linkRx = /href="(.+?)"/ig;
    const results = content.matchAll(linkRx);
    return Array.from(results).map((r) => r[1])
        .map((rawLink) => new URL(rawLink, host).toString());
};

// BEGIN (write your solution here)
const checker = async (url) => {
    const response = await axios.get(url);
    const links = extractLinks(response.data);
    const request = (link) => axios.get(link).then(() => null).catch(() => link);
    const promises = links.map(request);
    const results = await Promise.all(promises);
    return results.filter((result) => result !== null);
};
// END

// TEACHER SOLUTION
export default async (initialLink) => {
    // запрашиваем страницу по ссылке
    const response = await axios.get(initialLink);
    // извлекаем массив всех ссылок на странице
    const links = extractLinks(response.data);
    // функция, возвращающая ссылку, если запрос по ней оказался неудачным
    // при удачном запросе она возвращает null
    const request = (link) => axios.get(link).then(() => null).catch(() => link);
    // отправляем запросы ко всем ссылкам
    const promises = links.map(request);
    // получаем массив, состоящий из битых ссылок и значений null
    const results = await Promise.all(promises);
    // отсеиваем null
    return results.filter((result) => result !== null);
}
// END