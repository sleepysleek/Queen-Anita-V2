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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9RTUpyamJkditBcE5pV3c2S0RpRFpwbXNnRUU1WGdCSmlReWVYUi8yWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHArS3hvQmpyYS9OUmJwclFBS1FMSXRDN2J4eUJkQ2UvNmJGemprZEVrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUGM2R3dwOW1sVEZNU2pNbzQ3ZUZOZTArZmdqR2pLZnBsY0dvVi9VSDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEUnFQbnJWNExKRjF4ZURaTmtBQ2p6dmJvdmJLNGVVZEU2akJ5ZWdWTzAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFQ3ZlNFgrcm9adm5EN2R5aW4xMkFMQWZISTRHMFhNckQ4QmxDdmVJRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzdE5pa0cxTEdFK3k5ZDlaL25SQ3EvOWtCdzVwRmMrc3NScmlkWDNVZ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpCQUd0eGNabTZROGRIZTVMbjRLaDhzL2RPL1NIYTRnTEs5bEU2QjYzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmk0RHBSeGpvZWNFYUVvKytJYU4rMTlza3ZhNGk5ZWVUTldrbS80bkdFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1hOTZpb1AzUjZHUVI3TWVsYWZPQ21OMzNCZ1pKWEtkZmpCbFd6a09JL05xblJYcEdkNEdkcVg4MzFWNERYdWhET3JUaE1QT0ZTakM4R0V3bi9mS0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoicWdwQTRqWXlIWjFIVWQ3aElBaFZJSy9oQzNqQ01HakRuRlF2b3IrVmJIWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDY2NjU4Nzk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBNEE0MUM3NDY0REU1NTE1QzQxQjA4RkJBMkREOTgxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg0MTI5ODV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjY2NTg3OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzg3REIwQTM5M0EzOTk0MDZCODdCRTczMUI0MTRGODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODQxMjk4Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2NjY1ODc5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RjgxQjIzNENGMjcxNzREOEZCQjY2REY1RUZEMzkxQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NDEyOTg4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDY2NjU4Nzk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjREQ0VEODgwNzMzQTg5ODVBQUQzMDA2NDkwMUE2MzRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg0MTI5ODh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNPc0Nhb0Z3UWhxYjNsUFFRQUJubVEiLCJwaG9uZUlkIjoiNTViMTY5MzEtZWY4NC00ZmRkLWI4N2YtMmY3OGU0ZTkwZTcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRRbWdzcGZxT2s5M0dVTjc5dzQ3NHFJaWp3cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRng1cjdoTHkvQ1MyL1RaZUhncno4bGl1a1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjk4V0RKUk0iLCJtZSI6eyJpZCI6IjIzNDkwNjY2NTg3OTc6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2VKeTRJRkVLcjZsYmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHdmalRtNlZuS3JMdzcwMlNkaWVTWkczUHhCb0g1cWFadEIzQlVyd1BqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjl3ekRJTis4aGdJaFVScGpMVGJEdkVCcWp2bUNCZ3dmSEtNTG5OQ2haMDJBb2pQTm9LRTVxQ1JQZGtDcythL2RmOS95QjJXKzdQeDc2ajk4OEptQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkJYOStJbXZVeWJVd0s5aW9VbUw2VGtCUTE0VVVBZlF1NnFsKzMrZ3h6cWlJRnNRMWVjV1Y4a1JWbjlUR0N3ZUU2UWJpb1I3TzRXY3ZibnBYSmlmUkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2NjY1ODc5Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE4SDQwNXVsWnlxeThPOU5rbllua21SdHo4UWFCK2FtbWJRZHdWSzhENHkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg0MTI5ODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1dOIn0="
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
