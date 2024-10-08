//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349066658797";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0d2YjhRMlZocFdiZTdVbTNHdGVtMlJCbjlmVEtxZ2NUUkRYL2hBQ1EyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0p2dWNpbFAwd1greTRjaFVlYnUzbVdXZTlkUGF1eUorb3ErZ29wNTdXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRjZjMlN5dldkRTNXOGRkUDNzVlA1UkZidFJnR3lBSGNIa2dUcHhrTFhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NVhtRHVuazhYRzViNVZNdGl5eUF2WVh1azJaeXUyYWlPc3k3eW5BQUdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQK0U1QWV1NmlUSlBGdU9XNGY2RWhwODA4MjYvZFVaVkZYZzlDTmw1azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5xMGt1SDBBZ0NNOW5xWkdISjFBUjRsZ2p6T2NvYnVXZFc3bTBOcEwrVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dUeWljemx5eFA1TkZLMEo2eXhjdCtYUU9ibVBuT2VkS05MU1EzRUhXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdQZDRuSUh2Sk4yaWZYWEJIVmlVd1ZiNWQzejc4RFY5Z0tLUDRYUXNRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB2bmF3TUdQYTZQKzQ1L1BjdXhpODJaYnpZSG94RGpKeTBReExIUjRqMVR4SVR2WWFTR2oxVjVBbVBDbEtEdGRmbCttMW1Wd05pNTlMZjFwRTVHeGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJkTldvVDJ3UVY3bVkxK2pWQTFsek1pb1ZaUlJ6cUNVL3g1YkR3eEdXNy84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjY2NTg3OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjUzRTNGQzI4NERDNTU3RkJCNEJEMkJBNkEwOUUzNkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODQwMTg4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUEphOTVnSHVTSi1scDExOFlzZjh5USIsInBob25lSWQiOiI1YmI2NTAwNy0xNDYzLTQ5MDEtYThhOS01MzdkNDQwMGUxOWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmxNUVAzSzFQUVNaNTZydHNBOXQwdXF1WHFJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFN3NqbkFmT3B5Sm91SmxwcERZVy9jdllFbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBRlNRR1k1ViIsIm1lIjp7ImlkIjoiMjM0OTA2NjY1ODc5NzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNwb3RsZXNzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKektqWmtDRU02amxiZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0UXlrZ2JNYW81ZmJxQmk1TDV4emt2NWgyVVUwemlsZXRkMFFOTnNsZkVVPSIsImFjY291bnRTaWduYXR1cmUiOiJRMVlJM0kwaVhiRjVZOXZmaUVhVXp2clYreDlxWEljVlE0bWFqcEdFSHBobThsd2IxeTBENkRaM3c5RE5vS1hnN1RCeTFocFlVYkFVakluVFJPVENDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicTFJdlJ4azRGUnpjVGNUU1BvRTloVFdmVytHSmdQZmYvYlFyaHNSMFJXU005MGg4TWtxMXNhS1h4V2hpUHhhUDBTcFUzenBjd1AvNG8wTG1Qa283aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY2NjU4Nzk3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlVNcElHekdxT1gyNmdZdVMrY2M1TCtZZGxGTk00cFhyWGRFRFRiSlh4RiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQwMTg4NH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
