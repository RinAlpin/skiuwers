const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
WAMessageProto,
relayWAMessage,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
processTicksAndRejections,
ECONNABORTED,
apikey,
WA_DEAFULT_EPHEMERAL,
DataView,
TypedArray,
device,
Browser
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const gcrevoked = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
const { spawn, exec, execSync } = require("child_process")
const { color } = require('./lib/color')
const clc = require('chalk')
const { version, bugs } = require('./package.json')

require('./index.js')
nocache('./index.js', module => console.log(`${module} has been changed!`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} has been changed!`))
require('./setting.json')
nocache('./setting.json', module => console.log(`${module} has been changed!`))
require('./device.json')
nocache('./device.json', module => console.log(`${module} has been changed!`))

const starts = async (skiuwers = new WAConnection()) => {
skiuwers.logger.level = 'warn'
skiuwers.version = [2, 2140, 50]
skiuwers.browserDescription = [" skiuwers ","EDGE","94.0.992.5"]
console.log(banner.string) 
skiuwers.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan scan qr nya ke whatsapp web'))
})

fs.existsSync('./skiuwers.json') && skiuwers.loadAuthInfo('./skiuwers.json')
skiuwers.on('connecting', () => {
start('2', 'SUBSCRIBE YOUTUBE SKIUWERS >_<')
})
skiuwers.on('open', () => {
success('2', 'Connected')
setTimeout( () => {
console.log(color(`Berhasil login ke whatsapp web\n`, 'aqua'))
console.log(color(`================================================`, 'red'))
console.log(color(`[ ☭ ]        Made With Creator BotWea      [ ☭ ]` ,'yellow'))
console.log(color(`================================================`, 'red'))
console.log(color(`[•]`, 'yellow'), color(`Creator : ${setting.ownername}`, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Number : ${setting.ownerNumber} `, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Status : Online`, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Note : Subscribe youtube skiuwers`, 'green'))
console.log(color(`================================================`, 'red'))
}, 1000)    		    	     	
}) 
await skiuwers.connect({timeoutMs: 30*1000})
fs.writeFileSync('./skiuwers.json', JSON.stringify(skiuwers.base64EncodedAuthInfo(), null, '\t'))
  
skiuwers.on('chat-update', async (message) => {
require('./index.js')(skiuwers, message)
})

skiuwers.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
skiuwers.sendMessage(call, `Maaf , Bot tidak menerima panggilan apapun [ ! ] \nNlpn | Vc | Spam | Sarkas = Block permanen`, MessageType.text)
setTimeout(() => {
skiuwers.blockUser(call, "add")
}, 10000)
})
skiuwers.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
skiuwers.on (`CB:action,,battery`, json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
isBattre = batterylevel + "%"
isCharge = json[2][0][1].live
})

skiuwers.on('group-participants-update', async (anu) => {
console.log(anu)
if (welcome == false) return
try {
//ppuser = await skiuwers.getProfilePicture(m.sender);
rip = {"key": { "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6285945300923-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷  ${setting.botname}\n▷    ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const mdata = await skiuwers.groupMetadata(anu.jid)
console.log(anu)
const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm')
const groupMet = await skiuwers.groupMetadata(anu.jid);
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);
memeg = mdata.participants.length;
num = anu.participants[0];
if (anu.action == "add" && !num.includes(skiuwers.user.jid)) {
let v = skiuwers.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = v.vname || v.notify || num.split("@")[0];
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ WELCOME IN GROUP ❳
│
├⊙ Group : ${mdata.subject}
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ Enjoy your life | Just fun >_<
`
skiuwers.sendMessage(mdata.id, teks, MessageType.text, {quoted: rip})
}
if (anu.action == "remove" && !num.includes(skiuwers.user.jid)) {
let w = skiuwers.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = w.vname || w.notify || num.split("@")[0];
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ LEAVE FROM GROUP ❳
│ 
├⊙ Group : ${mdata.subject}
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ Goodbye | Don't back again >_<
`
skiuwers.sendMessage(mdata.id, teks, MessageType.text, {quoted: rip})
}
else if (anu.action == 'promote') {
const mdata = await skiuwers.groupMetadata(anu.jid)
num = anu.participants[0]
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ PROMOTE DETECTED ❳
│
├⊙ Group : ${mdata.subject}	
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ You do not believe, please see for yourself. 
`
skiuwers.sendMessage(mdata.id, teks, MessageType.text, {quoted: rip})
}
else if (anu.action == 'demote') {
num = anu.participants[0]
const mdata = await skiuwers.groupMetadata(anu.jid)
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ DEMOTE DETECTED ❳
│
├⊙ Group : ${mdata.subject}	
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ You do not believe, please see for yourself.
`
skiuwers.sendMessage(mdata.id, teks, MessageType.text, {quoted: rip})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

skiuwers.on('group-update', async (anu) => {
skiuuu = {"key": { "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6285945300923-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷  ${setting.botname}\n▷    ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
  metdata = await skiuwers.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = `
「 GROUP OPENED 」

Group telah dibuka oleh admin [ ! ]
`
skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu})
console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
}
else if(anu.announce == 'true'){
teks = `
「 GROUP CLOSED 」

Group telah ditutup oleh admin [ ! ]
`
skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu})
console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = `
「 GROUP DESCRIPTION CHANGE 」

Deskripsi group telah diubah oleh admin [ ! ]
`
skiuwers.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: skiuuu})
console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
}
else if(anu.restrict == 'false'){
teks = `
「 GROUP SETTING CHANGE 」

Edit group info telah dibuka untuk member [ ! ]
`
skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu})
console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
}
else if(anu.restrict == 'true'){
teks = `
「 GROUP SETTING CHANGE 」

Edit group info telah ditutup untuk member [ ! ]
`
skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu})
console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
}
})

skiuwers.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

const type = Object.keys(m.message)[0] 
skiuwers.sendMessage(m.key.remoteJid, `
⊙─❲ ANTI DELETE TERDETEKSI ❳
│
├⊙ Name : @${m.participant.split("@")[0]}
├⊙ Day : ${week} ${calender}
├⊙ Time :  ${jam}
└⊙ Type : ${type}

`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
skiuwers.copyNForward(m.key.remoteJid, m.message)
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()