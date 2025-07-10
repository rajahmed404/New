module.exports.config = {
  name: "info",
  version: "1.0.0",
  permission: 0,
  credits: "nayan",
  prefix: true,
  description: "",
  category: "prefix",
  usages: "",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
  hours = Math.floor(time / (60 * 60)),
  minutes = Math.floor((time % (60 * 60)) / 60),
  seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

var callback = () => api.sendMessage({body:`
--------------------------------------------
না্ঁম্ঁ       : রা্ঁই্ঁসা্ঁ আ্ঁক্তা্ঁর মি্ঁম্ঁ
ফে্ঁস্ঁবু্ঁক্ঁ : পি্ঁচ্ছি্ঁ মি্ঁম্ঁ
ধর্ম       : ই্ঁস্ঁলা্ঁম্ঁ
জে্ঁলা্ঁ: ন্ঁড়া্ঁই্ঁল্ঁ স্ঁদ্ঁর্ঁ থা্ঁনা্ঁ
প্ঁরা্ঁ লে্ঁখা্ঁ: ক্লা্ঁস্ঁ এ্ঁই্ঁট্ঁ  
𝐆𝐞𝐧𝐝𝐞𝐫.   : মে্ঁয়ে্ঁ
ব্ঁয়্ঁস্ঁ           : ১৬ +
রি্ঁলে্ঁশ্ঁন্ঁ  : সি্ঁঙ্গে্ল্ঁ  
কা্ঁজ্ঁ        : ফ্রী্ঁ ফা্ঁয়া্ঁর্ঁ খে্ঁলা্ঁ 
𝐆𝐦𝐚𝐢𝐥       : ******@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+88017********
টে্ঁলি্ঁগ্রা্ঁফ্ঁ   : t. না্ঁই্ঁ /*********
ফে্ঁস্ঁবু্ঁক্ঁ লিংক  : https://www.facebook.com/100080837633857`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
  fs.unlinkSync(__dirname + "/cache/1.png"));  
    return request(encodeURI(`https://graph.facebook.com/100080837633857/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 };
