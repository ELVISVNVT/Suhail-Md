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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVhQVC8raUtTVllRaWFlSUg0b0VDSnZNNks4c3lhRSt0Q1VoR3VEOTlOZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNHZuSVRTaWFTMWlWeGg0Y0JRQkVQZ1wiLFxuICBcInBob25lSWRcIjogXCIzZDRjMjRiNS1kZTAwLTRiZDctOWU0ZC0wN2MwODFhNzBiYTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMjMsXG4gICAgICA4NyxcbiAgICAgIDE4NixcbiAgICAgIDEzLFxuICAgICAgMTgsXG4gICAgICA4MSxcbiAgICAgIDU4LFxuICAgICAgMTc4LFxuICAgICAgOTIsXG4gICAgICAzNCxcbiAgICAgIDE4MixcbiAgICAgIDcxLFxuICAgICAgMjIwLFxuICAgICAgMTQwLFxuICAgICAgMTc0LFxuICAgICAgNzcsXG4gICAgICAxODAsXG4gICAgICAxOTksXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDIyMCxcbiAgICAgIDI0OCxcbiAgICAgIDc1LFxuICAgICAgNDgsXG4gICAgICAxMSxcbiAgICAgIDIxMixcbiAgICAgIDEyMixcbiAgICAgIDQxLFxuICAgICAgMTM2LFxuICAgICAgMTE4LFxuICAgICAgMjE2LFxuICAgICAgMjYsXG4gICAgICAxODAsXG4gICAgICAxMDYsXG4gICAgICAyMTcsXG4gICAgICAyNDgsXG4gICAgICAxNzAsXG4gICAgICAyNDQsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0RlQyUFRGSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTE5ODM0Mzg6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTgyNzI2MTgxMDQxOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vN2crd0dFSzdZMkxRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUzAzM0NDY2lFSFRxcko2S3Y5U2pFZnZEWi9XbzlPZjNSL2N3NWtKSDF6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaU252MFdvWUV0UGVxOUdRVTZsSkg4VVdSbGlBVURLak1kWVhVUW43dmw3WC95SVRpc3RVdkZja1p1UnZja1hpYWV2WGJsRlVBMGo3T092NmZQcmxBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMcDhrY3NHNU12Y2NrOGtBNEJ0ZTlON0syLzRzejUrNkoxc1NlN1oyazZrTGFXN2I2djB5TzNzTERqaEFta3hGQmdJS2dwa2N0dlJkVXdJV3pOQ1hnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MTk4MzQzODozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTE3NzQ2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
