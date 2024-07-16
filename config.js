const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vnvt:vnvt@cluster0.0vrbzsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22891983438";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWG02NC9zclIrN2ZJaXdYeng0RDFGS2JqdTZ3bFVuSTdDYUZlejNYVjFocz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmRENG1Td0ZTVkdGVkRuRnlkLVNLd1wiLFxuICBcInBob25lSWRcIjogXCJlODE2ZDllNS1lZmNiLTQ4MTMtYWRhZi0zMzIwMmE4YmM3MThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMjI0LFxuICAgICAgMTI3LFxuICAgICAgMjQ5LFxuICAgICAgMTgxLFxuICAgICAgMTEwLFxuICAgICAgMTQwLFxuICAgICAgMjQ4LFxuICAgICAgNzgsXG4gICAgICAxNzAsXG4gICAgICA3MCxcbiAgICAgIDM4LFxuICAgICAgODUsXG4gICAgICAxNTAsXG4gICAgICAxMjksXG4gICAgICA4MyxcbiAgICAgIDIyOCxcbiAgICAgIDI3LFxuICAgICAgMTI2LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTU4LFxuICAgICAgMTgzLFxuICAgICAgOTEsXG4gICAgICAxOTQsXG4gICAgICAyMDUsXG4gICAgICA0LFxuICAgICAgMzAsXG4gICAgICA0NCxcbiAgICAgIDE3OSxcbiAgICAgIDE1OSxcbiAgICAgIDE4NCxcbiAgICAgIDI1LFxuICAgICAgMTc3LFxuICAgICAgMTA5LFxuICAgICAgMTg2LFxuICAgICAgMjQzLFxuICAgICAgMTkzLFxuICAgICAgNzgsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0RIUFpQS0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODkxOTgzNDM4OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTE4MjcyNjE4MTA0MTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPLzdnK3dHRUplWTJyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlMwMzNDQ2NpRUhUcXJKNkt2OVNqRWZ2RFovV285T2YzUi9jdzVrSkgxek09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN2F5VmdOSjFOdEthaXpseGV4R1NDV3dUYm5Xb203clltSldFVW1sZ2tiTnhwcCthVjZCbFBmK2ZQOExFQjc0SmpPUHJIdGtqRnFRcHhrWDAyTVA3QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRFRKQ21GZGlBdlU2OGdoazg4TGpsRkpna0IxSDVIOUV4NWIzWTNCT1h2Z0d3NUFteFpQK1VKMUZUd3hPTy9ub1BibHRkT0FtdzZlMUszQXdVbFlZQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTE5ODM0Mzg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0MjI5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtNN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS003Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNStjRnhVUStzQmVsTmdIZlVUU2ZjTENMUFdqaWtUSzRET3hoVmVFcVFITT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM3MTcwMTU5LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-qOVgkEXpQIJH51k7uEybT3BlbkFJShrl2dODfLF27ahrQ1VU",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
