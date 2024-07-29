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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICA4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxSXFhbTNSR29IUzIwZ0g1bGpVaEVQU2pqckNnbnJKWGt4UEZDUG1DMUpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIUTUwMXZ5T1M1NmVqY3JwOVE5a2t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY0ZWI5NDFkLTBjMzgtNDAwMi1hYzJjLThjNDczMjliN2VlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNTMsXG4gICAgICA2NSxcbiAgICAgIDE5NSxcbiAgICAgIDI1MSxcbiAgICAgIDE1OSxcbiAgICAgIDI0MixcbiAgICAgIDgxLFxuICAgICAgMjQ3LFxuICAgICAgNDksXG4gICAgICAxLFxuICAgICAgMTAsXG4gICAgICAyMDQsXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICAxNzYsXG4gICAgICAyOSxcbiAgICAgIDIxLFxuICAgICAgMjI1LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNTEsXG4gICAgICAyMTksXG4gICAgICAxODQsXG4gICAgICAxODgsXG4gICAgICAxODksXG4gICAgICAxMzMsXG4gICAgICAxMDIsXG4gICAgICAxOTQsXG4gICAgICAxMTMsXG4gICAgICAyMDksXG4gICAgICA1OCxcbiAgICAgIDIxOCxcbiAgICAgIDQwLFxuICAgICAgMjI0LFxuICAgICAgOTYsXG4gICAgICAyMzgsXG4gICAgICA3NSxcbiAgICAgIDQ3LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREo4RFpDQTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODkxOTgzNDM4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTE4MjcyNjE4MTA0MTo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ2lzOWNCRVBuY243VUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFUT2Q2NTl2RDNLNiszNGw4NVFNbGpWZ0g1N0xjcW1DNkFhMmNIajV4R0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmxRN1NzVDFqSlV6dU4yYjNMSkllYk4zbzZ5c0QvTXVXNmFvc0hzbUM3M1MycHBCbjBZMlFLdWtVTWMrTkRDUDlqNzFicUJoTTVHT0N3YW45ZGdSQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidklTY1RMb09Db2RFdVYrRldrRjNPanZxaTJiZmJSUVB6cThHRDBmRlJSVUt1MDRkeUN1cENKcWIxQVdrbVd6Qlc0WHFCWSt3M1F4L0pyR1MwVzdsQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTE5ODM0Mzg6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4MTU5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdDWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0NYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV012VisyS21JcXR3a3JDdmt6Wjc0VHBpYUdGOWNjaGdBUkZQd1gvSDRSbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTE3Mjc3MjgsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzIxMjI2NjAzMjg5XCJ9Igp9"  // PUT your SESSION_ID 


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
