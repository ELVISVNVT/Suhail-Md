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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_43_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVreFRXZER6c21lSlp0MUVpaEVNVVA3YU9XN1doOFVpOXIwb1UzbTRxa009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImI1WmF1TkEzUU91WFItMzhaVVUtWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDdlOGQwYTQtZmMwYi00Njg1LWEyMWMtNzliNDgwNzg0MTEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgNjgsXG4gICAgICA2NSxcbiAgICAgIDIxNCxcbiAgICAgIDE5NyxcbiAgICAgIDIxMSxcbiAgICAgIDE4OCxcbiAgICAgIDEwMixcbiAgICAgIDYzLFxuICAgICAgMTMsXG4gICAgICAyMDcsXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgMTkxLFxuICAgICAgMTQ0LFxuICAgICAgMjAxLFxuICAgICAgMjI5LFxuICAgICAgNCxcbiAgICAgIDcwLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDAsXG4gICAgICAyMTAsXG4gICAgICA5NCxcbiAgICAgIDIwNyxcbiAgICAgIDI0NCxcbiAgICAgIDYsXG4gICAgICAyMSxcbiAgICAgIDE2NixcbiAgICAgIDEyNyxcbiAgICAgIDExLFxuICAgICAgNTMsXG4gICAgICAxMzIsXG4gICAgICA2MyxcbiAgICAgIDE4LFxuICAgICAgMTA2LFxuICAgICAgMjQsXG4gICAgICAxMzcsXG4gICAgICAzOSxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA4TTRIMjlKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjg5MTk4MzQzODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUxODI3MjYxODEwNDE6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy83Zyt3R0VNbVB6N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTMDMzQ0NjaUVIVHFySjZLdjlTakVmdkRaL1dvOU9mM1IvY3c1a0pIMXpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktCN3ZVN2lFR0dZSXh6R01aSytqQzBsQ2FWOHg5b1ZseENjY2o0eFZLU2ZKM21BdEJNUVFIM1J5M2Z6bGlPM08ra1Nwb01qZkw0NU5wc2pVam0wQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJDSmFmOG9RKzRqRXFSWUtvSWM5a2IxbjdTZ1ZzZnhtbitWSFFjQ0JQVmkxdUZBazdNOWxzUUNwRjZUR2JPU0xHUnZBd011czRBZmhqcXhlcUNOa0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODkxOTgzNDM4OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NjA5NzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
