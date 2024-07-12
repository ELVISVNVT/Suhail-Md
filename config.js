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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_53_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxmV0xVNHZKMFV5bkNzZTdhNkhnR2J3SUpqZm5sYXZkQ29lZ0pqMTJpazQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIno2cW1oX2lnU01Xc2dzaU9KZlM3QlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ5MTYxNDMtNzUxZC00NThlLWJiZDgtNDQyZTdjNzAzOGFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDU1LFxuICAgICAgMTkzLFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDEyMyxcbiAgICAgIDE4OSxcbiAgICAgIDEzNixcbiAgICAgIDMsXG4gICAgICAxMjksXG4gICAgICAyMDMsXG4gICAgICA4MixcbiAgICAgIDE3NyxcbiAgICAgIDMxLFxuICAgICAgMTQ2LFxuICAgICAgMjM4LFxuICAgICAgMTMwLFxuICAgICAgMTcsXG4gICAgICA4OCxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE5NCxcbiAgICAgIDEwLFxuICAgICAgMTEzLFxuICAgICAgMTI4LFxuICAgICAgMTc2LFxuICAgICAgMTA1LFxuICAgICAgNDcsXG4gICAgICAxMDEsXG4gICAgICA1NixcbiAgICAgIDIyNCxcbiAgICAgIDE2NCxcbiAgICAgIDIxMSxcbiAgICAgIDEzMyxcbiAgICAgIDEwOCxcbiAgICAgIDIzMSxcbiAgICAgIDY1LFxuICAgICAgMTIsXG4gICAgICAzNyxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRZQjNZRzFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjg5MTk4MzQzODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUxODI3MjYxODEwNDE6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy83Zyt3R0VQRGF4YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTMDMzQ0NjaUVIVHFySjZLdjlTakVmdkRaL1dvOU9mM1IvY3c1a0pIMXpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImExUVlWVndJSWJ3b0xGUDhURm5jWkl1dWV2Qlk1d0hnZ0F4SDJxbWRuZlVNM2R5TVlCaHRkTjYvY250RXpPamFDSkhmR1J0WFpoWjJVWU00amk2VEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBXdys0ajdYeko0RW95ZGoxYStaeFFGS05kNDY0NnprNG1VL2c3SGVXbXpudnAreE5DUXNQbzRJckRIV3EzZ3dMU2x0SGFmUm8yRktoQStJcHJ3RmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODkxOTgzNDM4OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MDY3NzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
