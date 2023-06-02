// 请求 url - > html（信息）  -> 解析html
const https = require("https");
const cheerio = require("cheerio");
const fs = require("fs");
export function crawler(params) {
  const { url } = params;
  https.get("https://top.baidu.com/board", function (res) {
    let html = "";
    res.on("data", function (chunk) {
      html += chunk;
    });
    // 拼接完成
    res.on("end", function () {
      const $ = cheerio.load(html);
      let allFilms = [];
      $(".item-wrap_2oCLZ .active-item_1Em2h .content-pos_1fT0H").each(
        function () {
          const title = $(".c-single-text-ellipsis", this).text();
          console.log(title);
          allFilms.push({
            title,
          });
        }
      );
      fs.writeFile("./baidu.json", JSON.stringify(allFilms), function (err) {
        console.log(err);
        if (!err) {
          console.log("文件写入完毕");
        }
      });
    });
  });
}
