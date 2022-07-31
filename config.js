//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Turbo Bot Inc. Toxic-Alexa Md
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe ya
//codes copy kar ke apne script me dal rhe
//hai to, description me  ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put s youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//


const fs = require("fs")
const chalk = require("chalk")

//auto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//don't change this
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['918270026275','916380260672'] //you can add multiple number
global.ownername = "𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯"
global.ytname = "YT: Turbo Mods" //ur yt chanel name
global.socialm = "GitHub: TURBOHYPER" //ur github or insta name
global.location = "India, TamilNadu, Coimbatore" //ur location

//bot bombdy
global.botname = "𝗧𝚯𝗫𝗜𝗖 ₪ 𝚫𝗟𝗘𝗫𝚫" //ur bot name
global.websitex = "https://github.com/TURBOHYPER" //ur website
global.vidmenu = fs.readFileSync("./TurboMedia/theme/alexa.mp4") //gif and video menu
global.packname = "𝗧𝚯𝗫𝗜𝗖 ₪ 𝚫𝗟𝗘𝗫𝚫"
global.author = "𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯"
global.themeemoji = "💖"
global.reactmoji = "🌹"
global.ownertag = ['916380260672'] //ur owner number
global.ownernummenu = ['916380260672'] //ur owner number in menu and all
global.watermark = " 𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯" //ur watermark
global.botscript = "https://github.com/TURBOHYPER/Toxic-Alexa_V3"
global.linkz1 = "https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp"
global.linkz2 = "https://chat.whatsapp.com/GsgzyBU8Vld0YCNnFrBAQt"

//Bot theme media
global.thum = fs.readFileSync("./TurboMedia/theme/alexa.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./TurboMedia/theme/alexa.jpg") //ur logo pic
global.err4r = fs.readFileSync("./TurboMedia/theme/alexa.jpg") //ur error pic
global.thumb = fs.readFileSync("./TurboMedia/theme/alexa.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = false
global.prefa = ['','!','.','🐦','🐤','😽']
global.mess = {
    success: 'Done✓',
    admin: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Aᴅᴍɪɴ',
    botAdmin: 'Bᴏᴛ Mᴜsᴛ Bᴇ Aᴅᴍɪɴ Fɪʀsᴛ',
    owner: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Oᴡɴᴇʀ',
    rent: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Tᴜʀʙᴏ Mᴏᴅs Aɴᴅ Oᴡɴᴇʀ',
    group: 'Fᴇᴀᴛᴜʀᴇ Usᴇᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘs',
    private: 'Fᴇᴀᴛᴜʀᴇs Usᴇᴅ Oɴʟʏ Fᴏʀ Pʀɪᴠᴀᴛᴇ Cʜᴀᴛ',
    bot: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Iɴ Oɴʟʏ Fᴏʀ Tʜᴇ Bᴏᴛ Nᴜᴍʙᴇʀ',
    wait: 'Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ...',
    linkm: 'Pʟᴇᴀsᴇ Eɴᴛᴇʀ Tʜᴇ Lɪɴᴋ',
    error: 'Error',
    ban: 'You Have Been Banned By The Owner, If You Want To Be UnBanned, Contact Owner.',
    nsfw: 'The Nsfw Feature Has Not Been Activated, Please Contact The Admin To Activate',
    banChat: 'The Bot Was Banned In This Group, Please Contact The Owner To UnBan'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by zenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// don't change this if you want this api key give credits
global.APIKeys = {
	'https://zenzapis.xyz': '2ebe79bcf6ca',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
