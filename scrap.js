const fetch = require('node-fetch');
const cheerio = require('cheerio');

// (async function fetchData(){
//             const data = await fetch('https://www.uonbi.ac.ke/news', {
//                 mode: 'no-cors'
//             });
//             console.log(data);
//             const $ = cheerio.load(await data.text());
//             let x = [];
//             $('.thumbnail')
//                 .get()
//                 .map(repo => {
//                     const $repo = $(repo);
//                     const title = $repo.find('a').text();
//                     const image = $repo.find('img').attr('src');
//                     const content = $repo.find('.field-content').text();
//                     const combo = [title, image, content];
//                     // console.log(combo);
//                     x.push(combo);
//                     return combo;
//                 });
//             console.log(x);
//         })();
(async function test(){
    const data = await fetch('https://github.com/trending');
    const $ = cheerio.load(await data.text());
    console.log($('.repo-list li'));
    await $('.repo-list li')
      .get()
      .map(repo => {
        const $repo = $(repo);
        const title = $repo.find('h3').text();
        console.log(title);
        return title;
      });
})();