const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const cors = require('cors');
app.use(cors({  // cors 문제 해결 npm i cors  
    origin: 'https://o-dt.vercel.app'// *: 모든도메인 허용
}));

app.get('/', function(req, res) {
    const options = {
        url:"https://search.naver.com/search.naver?where=view&sm=tab_jum&query=%EA%B0%95%EB%AC%B8+%EC%98%A4%EB%93%AF+%ED%95%B4%EC%82%B0%EB%AC%BC",
        method: 'GET',
        encoding: 'utf-8'
    }
    request(options, (err, response, body)=>{
        const $ = cheerio.load(body);
        const listLen = $("div._more_contents_event_base ul").children('li');
        const $articleList = $("div._more_contents_event_base ul.lst_total li");
        const dataList =[];
        for(let i=0;i<listLen.length;i++){ 
          const taglen = $articleList.eq(i).find("div.total_tag_area").children('a');
          const $tagList = $articleList.eq(i).find("div.total_tag_area a");
          const tagList=[];
          for(let j=0;j<taglen.length;j++){
            tagList.push($tagList.eq(j).find('span.txt').text());
          }
          dataList.push({
            id:i,
            title:$articleList.eq(i).find("a.total_tit").text(),
            createAt:$articleList.eq(i).find("span.sub_time").text(),
            description:$articleList.eq(i).find("div.dsc_txt").text(),
            link:$articleList.eq(i).find("a.total_tit").attr("href"),
            img:$articleList.eq(i).find("img.thumb").attr("src"),
            tags:tagList,
          })
        }
        res.status(200).send(dataList);
    })
});



app.listen(process.env.PORT || 3000);