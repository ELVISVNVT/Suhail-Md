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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVWbXpheEdoVUJyUHFQeWZnMXFPSDlQMFVFQ0trNlBCSjhZWU5sZTRoYjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI4OTE5ODM0MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRFNzk2RjM1ODU3NkZBQTFBQ0UxNDhBRjBDQ0JCNkI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyNjY3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyODkxOTgzNDM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3OEU5NEEyNjBENjdCMjI1NjE5MDZGN0U4MDU0NUM5RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMjY2NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjE3WGMwVGNUYWVPVk5tMGl2Y0d0UVwiLFxuICBcInBob25lSWRcIjogXCI0MTJlYzU4MC00YWQ5LTRhM2ItYjZjZi0zNGIzYmYyYTk1NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICA5MSxcbiAgICAgIDg4LFxuICAgICAgNjEsXG4gICAgICAxMTQsXG4gICAgICAyMDQsXG4gICAgICAxNDEsXG4gICAgICAyMTQsXG4gICAgICAxMDcsXG4gICAgICAxNTQsXG4gICAgICAxNzMsXG4gICAgICAxODQsXG4gICAgICA0NyxcbiAgICAgIDEzMCxcbiAgICAgIDEyNCxcbiAgICAgIDc0LFxuICAgICAgNjEsXG4gICAgICA4NixcbiAgICAgIDEyMSxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAyMTYsXG4gICAgICAxMTUsXG4gICAgICAxMDksXG4gICAgICAxNSxcbiAgICAgIDYyLFxuICAgICAgMjAxLFxuICAgICAgMTI5LFxuICAgICAgMjQ1LFxuICAgICAgODcsXG4gICAgICAyNDYsXG4gICAgICAyMDIsXG4gICAgICAxNDcsXG4gICAgICA3NSxcbiAgICAgIDIzLFxuICAgICAgOTgsXG4gICAgICA5MyxcbiAgICAgIDEzMixcbiAgICAgIDIyNixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTIxMUtNTFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODkxOTgzNDM4OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTE4MjcyNjE4MTA0MTo1MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJWTlZUXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENpczljQkVLcXIzN1FHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxVE9kNjU5dkQzSzYrMzRsODVRTWxqVmdINTdMY3FtQzZBYTJjSGo1eEdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlCcWgxQTE4aHR3YWJpMXpXcFlycW5kZTBha3hxOWdMdjVETkxwZjdQNWJLWW9uc3lyZTVZTkMzUGZ2Qk5ESjd1d1g5UjJmQ0prM1JRR3NIOXQ1NkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNhWklaVDNrVWRrbjB1bUpWRjNMNEJaWm5FejJSY25ZS1BlRFFjaFhDdmpTRFFTMjJJTkR2SkJmZE95dHhYam8vdU9mblEyQUJEa0hRUEdKTExsbmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODkxOTgzNDM4OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMjY2NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHQ1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdDWC5qc29uIjogIntcImtleURhdGFcIjpcIldNdlYrMkttSXF0d2tyQ3Zrelo3NFRwaWFHRjljY2hnQVJGUHdYL0g0Um89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUxNzI3NzI4LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIyNjYwMzI4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
