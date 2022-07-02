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

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

function _0x4a38(_0x43ea59,_0x43099b){var _0x3fcfab=_0x3fcf();return _0x4a38=function(_0x4a38fe,_0x85cba3){_0x4a38fe=_0x4a38fe-0xe3;var _0x2567d2=_0x3fcfab[_0x4a38fe];return _0x2567d2;},_0x4a38(_0x43ea59,_0x43099b);}function _0x3fcf(){var _0x12505c=['2044721fcjnUf','224fVlQci','location','822940VoaCcj','113754lAKGWK','5392470FFJGKy','ytname','128502NJBUDH','3868614pNmGaR','50HLEKgk','socialm','𝗧𝚯𝗫𝗜𝗖\x20𝗧𝗨𝗥𝗕𝚯','India,\x20TamilNadu,\x20Coimbatore','916380260672','1182515MOAsZX','GitHub:\x20TURBOHYPER','YT:\x20Turbo\x20Mods','4JJMshw','ownername'];_0x3fcf=function(){return _0x12505c;};return _0x3fcf();}var _0x5f1650=_0x4a38;(function(_0x5a421c,_0x2b5723){var _0x3e764a=_0x4a38,_0x5bd0dd=_0x5a421c();while(!![]){try{var _0x3d5361=-parseInt(_0x3e764a(0xed))/0x1+parseInt(_0x3e764a(0xf3))/0x2*(parseInt(_0x3e764a(0xee))/0x3)+-parseInt(_0x3e764a(0xe8))/0x4*(parseInt(_0x3e764a(0xe5))/0x5)+-parseInt(_0x3e764a(0xf2))/0x6+parseInt(_0x3e764a(0xea))/0x7+-parseInt(_0x3e764a(0xeb))/0x8*(-parseInt(_0x3e764a(0xf1))/0x9)+parseInt(_0x3e764a(0xef))/0xa;if(_0x3d5361===_0x2b5723)break;else _0x5bd0dd['push'](_0x5bd0dd['shift']());}catch(_0x134846){_0x5bd0dd['push'](_0x5bd0dd['shift']());}}}(_0x3fcf,0x73ef8),global['owner']=[_0x5f1650(0xe4)],global[_0x5f1650(0xe9)]=_0x5f1650(0xf5),global[_0x5f1650(0xf0)]=_0x5f1650(0xe7),global[_0x5f1650(0xf4)]=_0x5f1650(0xe6),global[_0x5f1650(0xec)]=_0x5f1650(0xe3));

var _0x458443=_0x45c9;(function(_0x3dfec6,_0xda2168){var _0xbeb7a6=_0x45c9,_0x5976ca=_0x3dfec6();while(!![]){try{var _0xd2c92e=parseInt(_0xbeb7a6(0x1de))/0x1*(parseInt(_0xbeb7a6(0x1d9))/0x2)+parseInt(_0xbeb7a6(0x1ce))/0x3+parseInt(_0xbeb7a6(0x1da))/0x4*(-parseInt(_0xbeb7a6(0x1dc))/0x5)+parseInt(_0xbeb7a6(0x1e0))/0x6+-parseInt(_0xbeb7a6(0x1c8))/0x7+-parseInt(_0xbeb7a6(0x1d0))/0x8*(parseInt(_0xbeb7a6(0x1cc))/0x9)+parseInt(_0xbeb7a6(0x1c6))/0xa;if(_0xd2c92e===_0xda2168)break;else _0x5976ca['push'](_0x5976ca['shift']());}catch(_0x12472e){_0x5976ca['push'](_0x5976ca['shift']());}}}(_0x2dac,0xa829e),global[_0x458443(0x1cb)]=_0x458443(0x1d1),global['websitex']=_0x458443(0x1db),global[_0x458443(0x1ca)]=fs[_0x458443(0x1cf)](_0x458443(0x1c9)),global['packname']=_0x458443(0x1d1),global[_0x458443(0x1c3)]=_0x458443(0x1d7),global[_0x458443(0x1dd)]='💖',global[_0x458443(0x1df)]='🌹',global[_0x458443(0x1cd)]=[_0x458443(0x1d5)],global[_0x458443(0x1d6)]=['916380260672'],global[_0x458443(0x1d2)]='\x20𝗧𝚯𝗫𝗜𝗖\x20𝗧𝗨𝗥𝗕𝚯',global[_0x458443(0x1d4)]=_0x458443(0x1c7),global[_0x458443(0x1d3)]=_0x458443(0x1c4),global[_0x458443(0x1d8)]=_0x458443(0x1c5));function _0x45c9(_0x1ab593,_0x27557b){var _0x2dace2=_0x2dac();return _0x45c9=function(_0x45c9f6,_0x5cd126){_0x45c9f6=_0x45c9f6-0x1c3;var _0x4b4468=_0x2dace2[_0x45c9f6];return _0x4b4468;},_0x45c9(_0x1ab593,_0x27557b);}function _0x2dac(){var _0x26686a=['vidmenu','botname','13257UolQEL','ownertag','1654347fsAxgt','readFileSync','4184GqOZOw','𝗧𝚯𝗫𝗜𝗖\x20₪\x20𝚫𝗟𝗘𝗫𝚫','watermark','linkz1','botscript','916380260672','ownernummenu','𝗧𝚯𝗫𝗜𝗖\x20𝗧𝗨𝗥𝗕𝚯','linkz2','2GPlUTt','136inFzOm','https://github.com/TURBOHYPER','186665uVuVPk','themeemoji','1234465koiIGS','reactmoji','8019228viaUZW','author','https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp','https://chat.whatsapp.com/GsgzyBU8Vld0YCNnFrBAQt','4878670uIgoxJ','https://github.com/TURBOHYPER/Toxic-Alexa-V3','6172740stDGnd','./TurboMedia/theme/alexa.mp4'];_0x2dac=function(){return _0x26686a;};return _0x2dac();}

var _0x3d6924=_0x17c9;function _0x17c9(_0x4be760,_0x4a0bff){var _0x1ddc02=_0x1ddc();return _0x17c9=function(_0x17c916,_0x34c20b){_0x17c916=_0x17c916-0x9a;var _0x5cbeee=_0x1ddc02[_0x17c916];return _0x5cbeee;},_0x17c9(_0x4be760,_0x4a0bff);}function _0x1ddc(){var _0x4bd9b7=['log0','75iCbOdQ','36910LQCIPY','4004xhsWFq','297508yFPrnj','readFileSync','8bCmBuB','2942612DzPazC','./TurboMedia/theme/alexa.jpg','16LSFJvG','err4r','2551262lodeXe','25215iWKyFw','5877459McRSke','152688yixzlX','thum'];_0x1ddc=function(){return _0x4bd9b7;};return _0x1ddc();}(function(_0x1627f2,_0x5a3164){var _0x5ae529=_0x17c9,_0x2d3aed=_0x1627f2();while(!![]){try{var _0x57ae9f=-parseInt(_0x5ae529(0xa5))/0x1+parseInt(_0x5ae529(0x9a))/0x2*(parseInt(_0x5ae529(0x9d))/0x3)+parseInt(_0x5ae529(0xa8))/0x4+-parseInt(_0x5ae529(0xa2))/0x5*(parseInt(_0x5ae529(0x9f))/0x6)+-parseInt(_0x5ae529(0x9c))/0x7*(parseInt(_0x5ae529(0xa7))/0x8)+-parseInt(_0x5ae529(0x9e))/0x9+parseInt(_0x5ae529(0xa3))/0xa*(parseInt(_0x5ae529(0xa4))/0xb);if(_0x57ae9f===_0x5a3164)break;else _0x2d3aed['push'](_0x2d3aed['shift']());}catch(_0x2e33ff){_0x2d3aed['push'](_0x2d3aed['shift']());}}}(_0x1ddc,0x6dc88),global[_0x3d6924(0xa0)]=fs[_0x3d6924(0xa6)](_0x3d6924(0xa9)),global[_0x3d6924(0xa1)]=fs[_0x3d6924(0xa6)](_0x3d6924(0xa9)),global[_0x3d6924(0x9b)]=fs[_0x3d6924(0xa6)](_0x3d6924(0xa9)),global['thumb']=fs[_0x3d6924(0xa6)](_0x3d6924(0xa9)));
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
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Aᴅᴍɪɴ',
    botAdmin: 'Bᴏᴛ Mᴜsᴛ Bᴇ Aᴅᴍɪɴ Fɪʀsᴛ',
    owner: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Oᴡɴᴇʀ',
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
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
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
