const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039115923";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_41_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICA2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsOUZNeFQ2SE9qNnFQY0FPWldwbUU2NDEySGFTZUpJdHlmb01RSmpScE40PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5MnNLVkxTRlFYT2Q1QXVvdlIteDhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjOTcyNjg2LWYzYjQtNGUyMC1iY2I2LWY3YjE4MjAwNDZjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA0OCxcbiAgICAgIDE2NCxcbiAgICAgIDE5NixcbiAgICAgIDE3MixcbiAgICAgIDE5NixcbiAgICAgIDIzMixcbiAgICAgIDE3LFxuICAgICAgMjUxLFxuICAgICAgMjUyLFxuICAgICAgNDgsXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDEwOCxcbiAgICAgIDE3MCxcbiAgICAgIDE3NyxcbiAgICAgIDEzMSxcbiAgICAgIDgyLFxuICAgICAgMTIsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTksXG4gICAgICA0OSxcbiAgICAgIDExNixcbiAgICAgIDEwNCxcbiAgICAgIDEwNyxcbiAgICAgIDE3MSxcbiAgICAgIDI1NCxcbiAgICAgIDI0NCxcbiAgICAgIDE3OSxcbiAgICAgIDEyMyxcbiAgICAgIDE1OCxcbiAgICAgIDEyNSxcbiAgICAgIDI0MixcbiAgICAgIDI1LFxuICAgICAgMjQ4LFxuICAgICAgMTA4LFxuICAgICAgMTAzLFxuICAgICAgNTUsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSExRMzE0MldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzkxMTU5MjM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NTExMzI3NTAwNzAzMjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ3Y3K1FCRUk2QXU3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVPU1V5a2NpR2VYTWVhdUZxTW4wNkVlaE96RHpSdDNpSlVPcmdMcmhxRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzhuQUdheWE4c2VsN2VINmYzZ01kOTJHcmNKL25HcFJBcGxWT2x2Z2N2RUxZdW8yREJVYlJHL1h3YVBzQjBlOFBBakFLWlc4ZjE2U0JVZ252dVAvQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1kreVVROWNxOXZsSEh5RVNNeHByL3J0d0ZXYnRKMS85anBYbjM2Vm5ObzVlMHljS3pLUTAxSG5ZWHdKTXJmbGpJV29BdmpXL2hTTFlrcHNTUk41anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzOTExNTkyMzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzI4NDY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
