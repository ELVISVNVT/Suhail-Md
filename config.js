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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_49_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIis3MkxHNDhCNjN1MUZveUpaamVTRDdnbCtJS0NYOUlEdWowZlpJTjJ1cEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRUUTJmcUgwVFVpSk1UZFRrNzd5NkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzYzOWIwNTItOTUxMy00MzMwLThlZDAtZmJiYWRlYTYyMjJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTU5LFxuICAgICAgOTUsXG4gICAgICAxMjgsXG4gICAgICAxNDYsXG4gICAgICAxNSxcbiAgICAgIDIyMSxcbiAgICAgIDc1LFxuICAgICAgMTcxLFxuICAgICAgNDksXG4gICAgICAxODcsXG4gICAgICAxMzAsXG4gICAgICA2MixcbiAgICAgIDY1LFxuICAgICAgOTAsXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICAyMjIsXG4gICAgICAxNDMsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgNDcsXG4gICAgICAyMTUsXG4gICAgICAyMTUsXG4gICAgICAxODIsXG4gICAgICAxMTUsXG4gICAgICAxMjMsXG4gICAgICA2NyxcbiAgICAgIDc0LFxuICAgICAgMjQ3LFxuICAgICAgMjU1LFxuICAgICAgMTYwLFxuICAgICAgNDEsXG4gICAgICAzNSxcbiAgICAgIDE3LFxuICAgICAgNDUsXG4gICAgICAyMzEsXG4gICAgICAyMjIsXG4gICAgICA4NSxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RFRIWEUyN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTE5ODM0Mzg6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTgyNzI2MTgxMDQxOjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDaXM5Y0JFSWl3MTdVR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMVRPZDY1OXZEM0s2KzM0bDg1UU1salZnSDU3TGNxbUM2QWEyY0hqNXhHST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYbDB6MTV1S1ZTdndrcWJTMmVNdERVazFkcU5jaGFiVlhIMktHUCtGZkpYeUNkK2tuWGRwMytMQW5hN3R0bmIycGd1akRicXpqNVdBR0N2dzdqYURCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXd2ZVRmgxMkIvbXdmVUFKUjhySlJEUlJKYlVwT1hnbXZQMk9yMklaL3FZOE1MbUVzajRhL0VVSmg3Rm9rVE5rOFZmbG1tWFRrdGozRDlQRm93T25oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MTk4MzQzODo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTkzMzU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0NYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQ1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXTXZWKzJLbUlxdHdrckN2a3paNzRUcGlhR0Y5Y2NoZ0FSRlB3WC9INFJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1MTcyNzcyOCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjY2MDMyODlcIn0iCn0="  // PUT your SESSION_ID 


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
