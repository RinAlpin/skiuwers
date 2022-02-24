
///====================================================/// 
/*
  ⊙ Base : Self-Bot°©2K22
  ⊙ Library : Baileys [latest] 
  ⊙ Browser : Microsoft Edge
  
  ⊙ THX CREATOR BOTWEA 
  ⊙ THX PENYEDIA REST API 
  ⊙ THX PENYEDIA MODULE
  ⊙ THX PENGGUNA BOTWEA 
*/
///====================================================///

const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
WAMessageProto,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const simple = require("./lib/simple.js");
const qrcode = require("qrcode-terminal")
const WAConnection = simple.WAConnection(_WAConnection)
const rip = new WAConnection()
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const util = require('util')
const axios = require("axios")
const cheerio = require('cheerio') 
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const { recognize } = require('./lib/ocr')
const translate = require('@vitalets/google-translate-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const tik = require('tiktok-scraper-without-watermark')
const fakeUa = require('fake-useragent')
const ig = require('insta-fetcher')
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const { y2mateA, y2mateV } = require('./lib/y2mate')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');
const brainly = require('brainly-scraper')
const ms = require('parse-ms')
const toMs = require('ms')
const crypto = require('crypto')
const cron = require('node-cron');
const yts = require('yt-search')
const Math_js = require('mathjs')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, aiovideodl, upload } = require('./lib/ytdl')
const { webp2mp4File } = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { convertSticker } = require("./lib/swm.js")
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const { wikiSearch } = require('./lib/wiki.js')
const setGelud = require('./lib/gameGelud.js')
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const device = JSON.parse(fs.readFileSync('./device.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const _prem = require("./lib/premium");
const game = require("./lib/game");

//=================================================//

const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const tox = JSON.parse(fs.readFileSync('./database/tox.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const antibadword = JSON.parse(fs.readFileSync('./database/antibadword.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

//=================================================//

ownerNumber = setting.ownerNumber // edit di setting.json
botNumber = setting.botNumber // edit di setting.json
targetpc  = setting.ownerNumber // edit di setting.json
ownername  = setting.ownername // edit di setting.json
botname = setting.botname // edit di setting.json
prefix = setting.prefix // edit di setting.json
prefa = setting.prefix // edit di setting.json
fake  = setting.fake // edit di setting.json
cr = setting.cr // edit di setting.json 
thumb = setting.thumb // edit di setting.json
fthumb = setting.fakethumb // edit di setting.json
img = setting.img // edit di setting.json
limitCount = setting.limit // edit di setting.json
gamewaktu = setting.gamewaktu // edit di setting.json
lolkey = setting.lolkey // https://api.lolhuman.xyz
apiku = 'skiuwers' // https://api-skiuwers.herokuapp.com/api
xteam ='1479b3ed05807e26'
zekskey ='k0HaixxdxcPVPCcnBBR00VLlKYu'
creator = 'X-Arip͘⁴̅⁰͍⁴̵〆' // Jangan diubah 
ownerr = '6287776101997' // jangan diubah
developer = 'Zeeone OFC' // Jangan diubah 
numbernye = '0' // jangan diubah
waktu = '-' // jangan diubah
alasan = '-' // jangan diubah
petik = '```' // jangan diubah
hit_today = [] // jangan diubah
blocked = [] // jangan diubah
msgId="B826873620DD5947E683E3ABE663F263" // jangan diubah

//=================================================//

menusimple = device.menusimple // edit di device.json
single = device.single // edit di device.json
antitags = device.antitags // edit di device.json
antical = device.antical // edit di device.json
antitoxic = device.antitoxic // edit di device.json
banChats = device.banChats // edit di device.json
offline = device.offline // edit di device.json
multi = device.multi // edit di device.json
nopref = device.nopref // edit di device.json
antidel = device.antidel // edit di device.json
readGc = device.readGc  // edit di device.json
readPc = device.readPc  // edit di device.json
autoketik = device.autoketik // edit di device.json
autorekam = device.autorekam // edit di device.json
welcome = device.welcome // edit di device.json
autobio = device.autobio // edit di device.json

//=================================================//

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, time, serials) => {
const obj = { id: userid, name: sender, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

cron.schedule('0 0 * * *', () => {
const reset = []
console.log('Reset Limit')
_limit = reset
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
console.log('Done')
skiuwers.sendMessage(setting.ownerNumber[0], "Reset Limit Harian", MessageType.text)
}, {
scheduled: true,
timezone: 'Asia/Jakarta'
})

const nebal = (angka) => {
return Math.floor(angka)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

//=================================================//

module.exports = skiuwers = async (skiuwers, rip) => {
try {
if (!rip.hasNewMessage) return
rip = rip.messages.all()[0]
if (!rip.message) return
if (rip.key && rip.key.remoteJid == 'status@broadcast') return
global.prefix
global.blocked
m = simple.smsg(skiuwers, rip)
let { mentioned } = m
baileys = m.isBaileys
rip.message = (Object.keys(rip.message)[0] === 'ephemeralMessage') ? rip.message.ephemeralMessage.message : rip.message
const content = JSON.stringify(rip.message)
const from = rip.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(rip.message)[0]
const cmd = (type === 'conversation' && rip.message.conversation) ? rip.message.conversation : (type == 'imageMessage') && rip.message.imageMessage.caption ? rip.message.imageMessage.caption : (type == 'videoMessage') && rip.message.videoMessage.caption ? rip.message.videoMessage.caption : (type == 'extendedTextMessage') && rip.message.extendedTextMessage.text ? rip.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '.'  
} else {
if (nopref){
prefix = ''
} else {
if(single){
prefix = prefa
}
}
}
body = (type === 'conversation' && rip.message.conversation.startsWith(prefix)) ? rip.message.conversation : (type == 'imageMessage') && rip.message.imageMessage.caption.startsWith(prefix) ? rip.message.imageMessage.caption : (type == 'videoMessage') && rip.message.videoMessage.caption.startsWith(prefix) ? rip.message.videoMessage.caption : (type == 'extendedTextMessage') && rip.message.extendedTextMessage.text.startsWith(prefix) ? rip.message.extendedTextMessage.text : ''
body = (type === 'conversation' && rip.message.conversation) ? rip.message.conversation : (type == 'imageMessage') && rip.message.imageMessage.caption ? rip.message.imageMessage.caption : (type == 'videoMessage') && rip.message.videoMessage.caption ? rip.message.videoMessage.caption : (type == 'extendedTextMessage') && rip.message.extendedTextMessage.text ? rip.message.extendedTextMessage.text : (type == 'listResponseMessage') && rip.message.listResponseMessage.selectedDisplayText ? rip.message.listResponseMessage.selectedDisplayText : (type == 'listMessage') && rip.message.listMessage.description ? rip.message.listMessage.description : (type == 'listResponseMessage') && rip.message.listResponseMessage.singleSelectReply.selectedRowId ? rip.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'listResponseMessage') && rip.message.listResponseMessage.title ? rip.message.listResponseMessage.title : (type == 'buttonsResponseMessage') && rip.message.buttonsResponseMessage.selectedButtonId ? rip.message.buttonsResponseMessage.selectedButtonId : (type == 'buttonsMessage') && rip.message.buttonsMessage.contentText ? rip.message.buttonsMessage.contentText : ''
budy = (type === 'conversation') ? rip.message.conversation : (type === 'extendedTextMessage') ? rip.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? rip.message.conversation : (type === 'extendedTextMessage') ? rip.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && rip.message.conversation) ? rip.message.conversation : (type == 'imageMessage') && rip.message.imageMessage.caption ? rip.message.imageMessage.caption : (type == 'videoMessage') && rip.message.videoMessage.caption ? rip.message.videoMessage.caption : (type == 'extendedTextMessage') && rip.message.extendedTextMessage.text ? rip.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const anon = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
hit_today.push(command)
const antibot = rip.isBaileys
const q = args.join(' ')
const arg = args.join(' ')
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏"
const botNumber = skiuwers.user.jid
const botNumberss = skiuwers.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
const ownerNumberr = [`${targetpc}@s.whatsapp.net`] 
const creatorNumber = [`${ownerr}@s.whatsapp.net`]
const sender = rip.key.fromMe ? skiuwers.user.jid : isGroup ? rip.participant : rip.key.remoteJid
const senderNumber = sender.split("@")[0]
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender)
const isCreator = creatorNumber.includes(sender)
const totalchat = await skiuwers.chats.all()
const groupMetadata = isGroup ? await skiuwers.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isRegistered = checkRegisteredUser(sender)
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const isPremium = _prem.checkPremiumUser(sender,premium)
_prem.expiredCheck(premium)
const mentionByTag = type == "extendedTextMessage" && rip.message.extendedTextMessage.contextInfo != null ? rip.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && rip.message.extendedTextMessage.contextInfo != null ? rip.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isBanned = ban.includes(sender)
const banner = ["1","2","3","4","5","6","7"]
const pictban = banner[Math.floor(Math.random() * banner.length)]
const binner = ["ftroli","ftoko","fkontak","fvideo","flocation","fdocument","fvoice","fsticker","finvite","fgif"]
const fakebin = binner[Math.floor(Math.random() * binner.length)]
const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2022 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
const srchh = rateee[Math.floor(Math.random() * rateee.length)]
const tescuk = ["0@s.whatsapp.net"]
const conts = rip.key.fromMe ? skiuwers.user.jid : skiuwers.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = rip.key.fromMe ? skiuwers.user.name : conts.notify || conts.vname || conts.name || '-'
const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariRaya = new Date('Jan 12, 2022 07:00:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = "Minggu"; limitAdd(sender, limit)
break;
case 1: hari = "Senin"; limitAdd(sender, limit)
break;
case 2: hari = "Selasa"; limitAdd(sender, limit)
break;
case 3: hari = "Rabu"; limitAdd(sender, limit)
break;
case 4: hari = "Kamis"; limitAdd(sender, limit)
break;
case 5: hari = "Jum`at"; limitAdd(sender, limit)
break;
case 6: hari = "Sabtu"; limitAdd(sender, limit)
break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; limitAdd(sender, limit)
break;
case 1: bulan1 = "Februari"; limitAdd(sender, limit)
break;
case 2: bulan1 = "Maret"; limitAdd(sender, limit)
break;
case 3: bulan1 = "April"; limitAdd(sender, limit)
break;
case 4: bulan1 = "Mei"; limitAdd(sender, limit)
break;
case 5: bulan1 = "Juni"; limitAdd(sender, limit)
break;
case 6: bulan1 = "Juli"; limitAdd(sender, limit)
break;
case 7: bulan1 = "Agustus"; limitAdd(sender, limit)
break;
case 8: bulan1 = "September"; limitAdd(sender, limit)
break;
case 9: bulan1 = "Oktober"; limitAdd(sender, limit)
break;
case 10: bulan1 = "November"; limitAdd(sender, limit)
break;
case 11: bulan1 = "Desember"; limitAdd(sender, limit)
break;
}
var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
var tgl = new Date();
detik = tgl.getSeconds();
menit = tgl.getMinutes();
jam = tgl.getHours();
var ampm = jam >= 12 ? 'PM' : 'AM';
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapannya2 = `Night 🌒 ${pushname}`
}
if(time2 < "19:00:00"){
var ucapannya2 = `Night 🌙 ${pushname}`
}
if(time2 < "18:00:00"){
var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
if(time2 < "15:00:00"){
var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
if(time2 < "10:00:00"){
var ucapannya2 = `Morning 🌄 ${pushname}`
}
if(time2 < "05:00:00"){
var ucapannya2 = `Morning 🌅 ${pushname}`
}

// AUTO BIO
function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
if (autobio){
if (autobio === false) return 
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptimer = clockString(_uptime);
await skiuwers.setStatus(`Runtime ${uptimer} `).catch((_) => _);
settingstatus = new Date() * 1;
}}
// AUTO REKAM & AUTO KETIK
if (autorekam) {
if (autorekam === false) return
await skiuwers.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await skiuwers.updatePresence(from, Presence.composing)
}
// AUTO READ GROUP 
var chats = await skiuwers.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await skiuwers.chatRead(jid)
})
// AUTO READ PRIVATE 
var chatss = await skiuwers.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await skiuwers.chatRead(jid)
})
 
mess = {
wait: '```SEDANG DI PROSES 「 ⏳ 」```',
success: '```BERHASIL 「 √ 」```',
wrongFormat: '```GAGAL 「 X 」```',
limit: '```MAAF LIMIT KAMU TELAH HABIS 「 ! 」```',
error: {
stick: '```FORMAT ERROR 「 ! 」```',
Iv: '```LINK ERROR 「 ! 」```'
},
only: {
bot: '```BOT NOT ADMIN```',
admin: '```JUST ONLY ADMIN```',
owner: '```JUST ONLY OWNER```',
premium: '```JUST ONLY PREMIUM```', 
group: '```JUST ONLY CHAT GROUP```',
private: '```JUST ONLY CHAT PRIVATE```',
banned: '```YOU HAVE BEEN IN BANNED```',
}
}

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Arip͘⁴̅⁰͍⁴̵〆︎\n'
            + 'ORG:Owner;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6287776101997:+62 8777-6101-997\n'
            + 'EMAIL;type=INTERNET:ItsMeArip@gmail.com\n'
            + 'URL:https://youtube.com/c/ItsMeArip\n'
            + 'END:VCARD'

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

function monospace(string) {
return '```' + string + '```'
}   

const hideTag = async function(from, text){
let anu = await skiuwers.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
skiuwers.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
} 

const add = function(from, orangnya){
for (let i of orangnya){
skiuwers.groupAdd(from, [i])
}
}

const kickk = function(from, orangnya){
for (let i of orangnya){
skiuwers.groupRemove(from, [i])
}
}

const dm = function(from, orangnya){
for (let i of orangnya){
skiuwers.groupDemoteAdmin(from, [i])
}
}
const pm = function(from, orangnya){
for (let i of orangnya){
skiuwers.groupMakeAdmin(from, [i])
}
}

const sendMess = (hehe, teks) => {
skiuwers.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? skiuwers.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: rip, contextInfo: { "mentionedJid": memberr } })
}

// FAKE REPLY
const reply = (teks) => {
skiuwers.sendMessage(from, teks, text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})

}

// FAKE GC
const fakegc = (teks) => {
skiuwers.sendMessage(from, teks, text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨`,"body": `${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.grub}`}}})
}

// FAKE YOUTUBE
const fakeyt = (teks) => {
skiuwers.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 999,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${ucapannya2} ✨` ,
"body": `${day} - ${myMonths[bulan]} - ${year}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/B33WmMH/cae1f19d4f17.jpg",
"mediaUrl": "https://youtu.be/GhiF_cgKOYY",
"thumbnail": fs.readFileSync('./image/fake.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : rip})
}

// FAKE STATUS
const fakestatus = (teks) => {
skiuwers.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": fake,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync(`image/${thumb}`),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
})
}

// FAKE THUMBNAIL
const fakethumb = (teks, yes) => {
skiuwers.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/fake.jpg`),quoted:rip,caption:yes})
}
const fakegroup = (teks) => {
skiuwers.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287776101997-1604595598@g.us" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": fake,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
})
}

// FAKE TOKO
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287776101997-1604595598@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`image/${thumb}`) //Gambarnye
},
"title": `${ownername}`, 
"description": "SELF BOT", 
"currencyCode": "IDR",
"priceAmount1000": "10.000.000.000",
"retailerId": 'BOT WEA',
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

// FAKE TROLI
const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6287776101997-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷ ${setting.botname}\n▷   ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

// FAKE BROADCAST
const fakebc ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6287776101997-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷ [ BROADCAST ]\n▷ ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

// FAKE GC LINK
const fgclink = (teks) => {
skiuwers.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"
},
message: {
"groupInviteMessage": {
"groupJid": "6287776101997-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "skiuwersbot", 
"caption": `${ucapannya2} ✨`,
'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
}
}
}
})
}

// FAKE VIDEO
const fvideo = (teks) => {
skiuwers.sendMessage(from, teks, text, {
quoted: {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287776101997-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"ONE DEV",
"h": `Hmm`,
'seconds': '99999', 
'caption': `${ucapannya2} ✨`,
'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
}
}
}
})
}

// FAKE LOCATION
const flocation = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${ucapannya2} ✨`,
jpegThumbnail: fs.readFileSync(`image/${thumb}`)
}
}
}

// FAKE DOCUMENT
const fdocument = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${ucapannya2} ✨`,
jpegThumbnail: fs.readFileSync(`image/${thumb}`)
}
}
}

// FAKE GROUP INVITE
const finvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6287776101997-1616169743@g.us",
"inviteCode": `${ucapannya2} ✨`,
"groupName": `${ucapannya2} ✨`,
"caption": `${ucapannya2} ✨`,
'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
}
}
}

// FAKE STICKER
const fsticker = {
"key": {
"participant": `0@s.whatsapp.net`,
"remoteJid": "6287776101997-1613049930@g.us",
"fromMe": false,
"id": "3B64558B07848BD81108C1D14712018E"
},
"message": {
"stickerMessage": {
"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
"pngThumbnail": fs.readFileSync(`image/${thumb}`),
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
"fileLength": "60206",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
}

// FAKE GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287776101997-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${ucapannya2} ✨`,
"h": `${ucapannya2} ✨`,
'duration': '99999', 
'gifback': 'true', 
'caption': `${ucapannya2} ✨`,
'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
}
}
} 

// FAKE VN 
const fvoice = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287776101997-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "99999",
"ptt": "true"
}
} 
}

// BUG TROLI 
const bugtrol = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287776101997@s.whatsapp.net" } : {}) 
},
"message": {
"orderMessage": {
"orderId": "359531915900587",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${ownername}`,
"orderTitle": `${ownername}`,
"sellerJid": "6287776101997@s.whatsapp.net",
"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
}}}

const fakeitem = (teks) => {
skiuwers.sendMessage(from, teks, text, {
quoted: {
key:{
fromMe:false,
participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6287776101997-1604595598@g.us" }: {})
},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":666,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const fakedoc = (teks) => {  
skiuwers.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6287776101997-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "SKIUWERS", "fileLength": "36", "pageCount": 0, "fileName": `skiuwersbot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}

const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6287776101997-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  

const skiuwersuhuy = (pesan, tipe, target, target2) => {
skiuwers.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "6287776101997-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
}

const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6287776101997-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}

//====================================================//

// BUTTON TEXT
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
skiuwers.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//Button Image Tembus PS
const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
const mediaxxaa = await skiuwers.prepareMessage(id, kma, MessageType.image, {thumbnail: kma, quoted: rip})
mhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
//mhan = await skiuwers.prepareMessage(from, kma, video)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
skiuwers.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button Video Tembus PS
const sendButVid = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
const mediaxxaa = await skiuwers.prepareMessage(id, kma, MessageType.video, {thumbnail: kma, quoted: rip})
mhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
//mhan = await skiuwers.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
skiuwers.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button Lokasi Tembus PS
const sendButLoc = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
const mediaxxaa = await skiuwers.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
mhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
//mhan = await skiuwers.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
skiuwers.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// SEND BUG
const sendBug = async (target) => {
await skiuwers.relayWAMessage(
skiuwers.prepareMessageFromContent(
target,
skiuwers.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}

//====================================================//

// VERIFICATION
altar = `USER NOT VERIFICATION [ ! ] 

Ketik ${prefix}verify atau tekan command dibawah `
const verify = (altar) => {
buttonss =
[
{buttonId: `${prefix}verify`, buttonText: {displayText: '𝚅𝙴𝚁𝙸𝙵𝙸𝙺𝙰𝚂𝙸'}, type: 1},
]
buttonMessagee = {contentText: altar,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })}
// PENYEWA
nyewa = `[ Undangan Group WhatsApp ]

• 5K / PERMINGGU
• 15K / PERBULAN
• 35K / PERMANEN
`
const tersewa = (nyewa) => {
buttonss =
[
{buttonId: `${prefix}sewa`, buttonText: {displayText: '𝚂𝙴𝚆𝙰'}, type: 1},
{buttonId: `${prefix}info`, buttonText: {displayText: '𝙸𝙽𝙵𝙾'}, type: 1},
]
buttonMessagee = {contentText: nyewa,footerText: `© All Creator BotWea | ${ownername}` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })}
// TERSEWAKAN
if (budy.includes("https://chat.whatsapp.com/")) {
if (isGroup) return
if (isCreator) return 
if (isOwner) return 
if (rip.key.fromMe) return 
tersewa(nyewa)
}
// ANTI LINK GROUP 
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isCreator) return 
if (isOwner) return 
if (rip.key.fromMe) return 
if (isGroupAdmins) return 
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`「 ANTI LINK TERDETEKSI 」

Kamu mengirimkan link di grup chat [ ! ]
Maaf kamu akan di kick >_<
`)
setTimeout(() => {
skiuwers.groupRemove(from, [kic])
}, 3000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 2000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 1000)
}
// ANTI VIRTEX GROUP 
if (budy.length > 2000) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isCreator) return 
if (isOwner) return 
if (rip.key.fromMe) return 
if (isGroupAdmins) return 
var kice = `${sender.split("@")[0]}@s.whatsapp.net`
reply('TANDAI TELAH DIBACA\n'.repeat(420))
reply(`「 ANTI VIRUS TERDETEKSI 」

Kamu mengirimkan virus di grup chat [ ! ] 
Maaf kamu akan di kick >_<
`)
setTimeout(() => {
skiuwers.groupRemove(from, [kice])
}, 3000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 2000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 1000)
}
// ANTI TOXIC CHAT
for (let kemem of tox)
if (budy.includes(kemem)) {
if (isGroup) return
if (isCreator) return 
if (isOwner) return 
if (rip.key.fromMe) return 
if (antitoxic === false) return
skiuwers.updatePresence(from, Presence.composing)
var kac = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`「 ANTI TOXIC TERDETEKSI 」

Kamu mengirimkan kata-kata toxic di chat [ ! ]
Maaf kamu akan di block >_<
`)
setTimeout(() => {
skiuwers.blockUser(kac, "add")
}, 3000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 2000)
setTimeout(() => {
skiuwers.updatePresence(from, Presence.composing)
}, 1000)
}

//====================================================//

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
skiuwers.sendMessage(to, media, MessageType.sticker,{quoted:rip})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};

download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
skiuwers.sendMessage(to, media, type, { quoted: rip, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
} 

async function sendFileFromUrl(from, url, caption, rip, men) {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime === "application/pdf"){
type = MessageType.document
mime = Mimetype.pdf
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
return skiuwers.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: rip, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
}

const textImg = (teks) => {
return skiuwers.sendMessage(from, teks, text, {quoted: rip, thumbnail: fs.readFileSync(`image/${thumb}`)})
}

const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
skiuwers.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
skiuwers.sendMessage(from, hasil, type, options).catch(e => {
skiuwers.sendMessage(from, { url : link }, type, options).catch(e => {
reply('ERROR [ ! ]')
console.log(e)
})
})
})
})
}

//====================================================//
/*
// GELUD BOT WHATSAPP
*/
if (fs.existsSync(`./media/${from}.json`)) {

gelutSkuy = setGelud(`${from}`)

if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {

if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)

gelutSkuy.status = true

rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]

winR = rand0m[Math.floor(Math.random() * rand0m.length)]

fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))

starGame = `👑 Gelud Game 🤙🏻 



Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}

• Pemenangnya adalah [ @${winR} ] `

skiuwers.sendMessage(from, starGame, text, {quoted: fkontak, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})

fs.unlinkSync("./media/" + from + ".json");

} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {

skiuwers.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻

• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: fkontak, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})

fs.unlinkSync("./media/" + from + ".json");

}

}

cekafk(afk)
if (!rip.key.remoteJid.endsWith('@g.us') && offline){
if (!rip.key.fromMe){
if (isAfk(rip.key.remoteJid)) return
addafk(rip.key.remoteJid)
heheh = ms(Date.now() - waktu) 
skiuwers.sendMessage(rip.key.remoteJid,`Bot Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${setting.ownerNumber}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
}
}   

if (rip.key.remoteJid.endsWith('@g.us') && offline) {
if (!rip.key.fromMe){
if (rip.message.extendedTextMessage != undefined){
if (rip.message.extendedTextMessage.contextInfo != undefined){
if (rip.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of rip.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${setting.ownerNumber}@s.whatsapp.net`){
if (isAfk(rip.key.remoteJid)) return
addafk(rip.key.remoteJid)
heheh = ms(Date.now() - waktu)
skiuwers.sendMessage(rip.key.remoteJid,`Bot Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${setting.ownerNumber}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
}
}
}
}
}
}
}

//====================================================//

const getpc = async function(totalchat){
let pc = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await skiuwers.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  
let ii = []
let giid = []
for (mem of totalchat){
ii.push(mem.jid)
}
for (id of ii){
if (id && id.includes('g.us')){
giid.push(id)
}
}

const timestampi = speed();
const latensii = speed() - timestampi
const latensiii = `${latensii.toFixed(4)} _Second_`
const ini_gcchat = `${giid.length}`
const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
skiuwers.sendMessage(from, teks, sticker, { quoted: fgclink })
}

//====================================================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isImage = type === 'imageMessage'
const isVideo = type === 'videoMessage'

//====================================================//

//if (!isGroup && isCmd) {console.log(color('[ PRIVATE ]'), color(moment(rip.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'red'))}
//if (!isGroup && isCmd) console.log(color('[ PRIVATE ]', 'green'), color(`${command} [${args.length}]`, 'red'), color('from', 'green'), color(time, 'red'), color('Name:', 'green'), color(pushname, 'yellow'), color('Number:', 'red'), color(sender.split('@')[0], 'green')) 
//if (isCmd && isGroup) {console.log(color('[ GROUP ]'), color(moment(rip.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'red'), color('from', 'green'), color(`${pushname}`, 'yellow'), color('in', 'green'), color(`${groupName}`, 'red'))}
//if (isCmd && isGroup) console.log(color('[ GROUP ]', 'green'), color(`${command} [${args.length}]`, 'red'), color('from', 'green'), color(time, 'red'), color('Name:', 'green'), color(pushname, 'yellow'), color('in', 'red'), color(`${groupName}`, 'green'), color('Number:', 'yellow'), color(sender.split('@')[0], 'red'))

if (!isGroup && isCmd) console.log(color(`================================================`, 'red'))
if (!isGroup && isCmd) console.log(color('[ TEXT ]', 'red'), color('[ EXECUTION ]','yellow'), color('[ PRIVATE ]','green'))
if (!isGroup && isCmd) console.log(color(`================================================`, 'yellow'))
if (!isGroup && isCmd) console.log(color(`[•]`, 'red'), color('Name :', 'yellow'), color(pushname, 'green'))
if (!isGroup && isCmd) console.log(color(`[•]`, 'red'), color('Number :', 'yellow'), color(sender.split('@')[0], 'green'))
if (!isGroup && isCmd) console.log(color(`[•]`, 'red'), color('Command :', 'yellow'), color(`${command} [${args.length}]`, 'green'))
if (!isGroup && isCmd) console.log(color(`[•]`, 'red'), color('Time :', 'yellow'), color(time, 'green'))
if (!isGroup && isCmd) console.log(color(`================================================`, 'green'))

if (isCmd && isGroup) console.log(color(`================================================`, 'red'))
if (isCmd && isGroup) console.log(color('[ TEXT ]', 'red'), color('[ EXECUTION ]','yellow'), color('[ GROUP ]','green'))
if (isCmd && isGroup) console.log(color(`================================================`, 'yellow'))
if (isCmd && isGroup) console.log(color(`[•]`, 'red'), color('Name :', 'yellow'), color(pushname, 'green'))
if (isCmd && isGroup) console.log(color(`[•]`, 'red'), color('Number :', 'yellow'), color(sender.split('@')[0], 'green'))
if (isCmd && isGroup) console.log(color(`[•]`, 'red'), color('Group :', 'yellow'), color(`${groupName}`, 'green'))
if (isCmd && isGroup) console.log(color(`[•]`, 'red'), color('Command :', 'yellow'), color(`${command} [${args.length}]`, 'green'))
if (isCmd && isGroup) console.log(color(`[•]`, 'red'), color('Time :', 'yellow'), color(time, 'green'))
if (isCmd && isGroup) console.log(color(`================================================`, 'green'))
if (!rip.key.fromMe && !isOwner && !isCreator && banChats === true) return
if (antibot === true) return
switch (command) { 
case prefix+ 'button': 
case prefix+ 'allmenu': 
case prefix+ 'listmenu': 
case prefix+ 'menu':
case prefix+ 'help':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second`:'Not Premium'
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
blan = `${getBalance(sender, balance)}`
if (menusimple == true) pi = skiuwers.prepareMessageFromContent(from, {
"listMessage": {
//"title":  ``,
"description": `
 Hi 👋🏻 ${pushname} ✨🌻 \n`,
"buttonText": "SELECT HERE",
"footerText": `Teruntuk pengguna silahkan membaca rules\nserta syarat dan ketentuan cara penggunaan\n\n© All Creator BotWea | ${ownername}`,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": "◉ Terms And Conditions",
"rows": [
{
"title": "[ ◉ ] RULES",
"description": "Choose this to use the command",
"rowId": `${prefix}rules`
}]},
{
"title": "◉ Information Device",
"rows": [
{
"title": "[ ◉ ] INFORMATION",
"description": "Choose this to use the command",
"rowId": `${prefix}info`
}]},
{
"title": "◉ Additional Arrangements",
"rows": [
{
"title": "[ ◉ ] SETTING MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}setting`
}]},
{
"title": "◉ Just Only Owner",
"rows": [
{
"title": "[ ◉ ] OWNER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}ownermenu`
}]},
{
"title": "◉ Just Only Admin",
"rows": [
{
"title": "[ ◉ ] GROUP MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}groupmenu`
}]},
{
"title": "◉ Just Only Shopping",
"rows": [
{
"title": "[ ◉ ] SHOP MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}shopmenu`
}]},
{
"title": "◉ Menu ke-1",
"rows": [
{
"title": "[ ◉ ] OTHER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}othermenu`
}]},
{
"title": "◉ Menu ke-2",
"rows": [
{
"title": "[ ◉ ] DOWNLOAD MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}downloadmenu`
}]},
{
"title": "◉ Menu ke-3",
"rows": [
{
"title": "[ ◉ ] SEARCHING MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}searchingmenu`
}]},
{
"title": "◉ Menu ke-4",
"rows": [
{
"title": "[ ◉ ] CONVERT MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}convertmenu`
}]},
{
"title": "◉ Menu ke-5",
"rows": [
{
"title": "[ ◉ ] MAKER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}makermenu`
}]},
{
"title": "◉ Menu ke-6",
"rows": [
{
"title": "[ ◉ ] FUN MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}funmenu`
}]},
{
"title": "◉ Menu ke-7",
"rows": [
{
"title": "[ ◉ ] STORAGE MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}storagemenu`
}]},
]
}}, {quoted:ftroli})
skiuwers.relayWAMessage(pi, {waitForAck: true})
if (menusimple == false) pi = skiuwers.prepareMessageFromContent(from, {
"listMessage": {
//"title":  ``,
"description": `
⊙─❲ INFO USER ❳
│
├─⊙ Name : ${pushname}
├─⊙ Number : wa.me/${sender.split("@")[0]}
├─⊙ Status : ${premm}
├─⊙ Limit : ${limm}
└─⊙ Balance : $${blan}

⊙─❲ LIST MENU ❳
│
├─⊙ ${prefix}makermenu
├─⊙ ${prefix}convertmenu
├─⊙ ${prefix}searchingmenu
├─⊙ ${prefix}downloadmenu
├─⊙ ${prefix}funmenu
├─⊙ ${prefix}othermenu
├─⊙ ${prefix}storagemenu
├─⊙ ${prefix}shopmenu
├─⊙ ${prefix}groupmenu
└─⊙ ${prefix}ownermenu

⊙─❲ ABOUT ❳
│
├─⊙ ${prefix}mutualan
├─⊙ ${prefix}anonymous
├─⊙ ${prefix}profile
├─⊙ ${prefix}request
├─⊙ ${prefix}creator
├─⊙ ${prefix}owner
├─⊙ ${prefix}rules
├─⊙ ${prefix}donasi
├─⊙ ${prefix}sewa
└─⊙ ${prefix}info 

⊙─❲ MEDIATOR ❳
│
├─⊙ ${setting.wb}
├─⊙ ${setting.yt}
├─⊙ ${setting.gt}
└─⊙ ${setting.ig} \n `,
"buttonText": "SELECT HERE",
"footerText": `Teruntuk pengguna silahkan membaca rules\nserta syarat dan ketentuan cara penggunaan\n\n© All Creator BotWea | ${ownername}`,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": "◉ Terms And Conditions",
"rows": [
{
"title": "[ ◉ ] RULES",
"description": "Choose this to use the command",
"rowId": `${prefix}rules`
}]},
{
"title": "◉ Information Device",
"rows": [
{
"title": "[ ◉ ] INFORMATION",
"description": "Choose this to use the command",
"rowId": `${prefix}info`
}]},
{
"title": "◉ Additional Arrangements",
"rows": [
{
"title": "[ ◉ ] SETTING MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}setting`
}]},
{
"title": "◉ Just Only Owner",
"rows": [
{
"title": "[ ◉ ] OWNER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}ownermenu`
}]},
{
"title": "◉ Just Only Admin",
"rows": [
{
"title": "[ ◉ ] GROUP MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}groupmenu`
}]},
{
"title": "◉ Just Only Shopping",
"rows": [
{
"title": "[ ◉ ] SHOP MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}shopmenu`
}]},
{
"title": "◉ Menu ke-1",
"rows": [
{
"title": "[ ◉ ] OTHER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}othermenu`
}]},
{
"title": "◉ Menu ke-2",
"rows": [
{
"title": "[ ◉ ] DOWNLOAD MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}downloadmenu`
}]},
{
"title": "◉ Menu ke-3",
"rows": [
{
"title": "[ ◉ ] SEARCHING MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}searchingmenu`
}]},
{
"title": "◉ Menu ke-4",
"rows": [
{
"title": "[ ◉ ] CONVERT MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}convertmenu`
}]},
{
"title": "◉ Menu ke-5",
"rows": [
{
"title": "[ ◉ ] MAKER MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}makermenu`
}]},
{
"title": "◉ Menu ke-6",
"rows": [
{
"title": "[ ◉ ] FUN MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}funmenu`
}]},
{
"title": "◉ Menu ke-7",
"rows": [
{
"title": "[ ◉ ] STORAGE MENU",
"description": "Choose this to use the command",
"rowId": `${prefix}storagemenu`
}]},
]
}}, {quoted:ftroli})
skiuwers.relayWAMessage(pi, {waitForAck: true})
break

case prefix+'xyz':
xyz = 'https://i.ibb.co/kynNYTh/fake.jpg'
teks = `TESTIMONI`
skiuwers.sendMessage(from, await getBuffer(xyz), image, {quoted: ftoko, caption: teks })
break

case prefix+'ownermenu':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks =`
⊙─❲ OWNER MENU ❳
│
├─⊙ ${prefix}on
├─⊙ ${prefix}off
├─⊙ ${prefix}join
├─⊙ ${prefix}out
├─⊙ ${prefix}self
├─⊙ ${prefix}public
├─⊙ ${prefix}ban
├─⊙ ${prefix}unban
├─⊙ ${prefix}listban
├─⊙ ${prefix}listtoxic
├─⊙ ${prefix}addtoxic
├─⊙ ${prefix}bcimage
├─⊙ ${prefix}bcvideo
├─⊙ ${prefix}bcaudio
├─⊙ ${prefix}bcsticker
├─⊙ ${prefix}bcgif
├─⊙ ${prefix}bcgc
├─⊙ ${prefix}bcpc
├─⊙ ${prefix}bcall
├─⊙ ${prefix}upswteks
├─⊙ ${prefix}upswimage
├─⊙ ${prefix}upswvideo
├─⊙ ${prefix}readall
├─⊙ ${prefix}clearall
├─⊙ ${prefix}kickall
├─⊙ ${prefix}outall
├─⊙ ${prefix}deletepc
├─⊙ ${prefix}setting
├─⊙ ${prefix}culik <id-group>
├─⊙ ${prefix}term <code>
├─⊙ > <code>
└─⊙ $ <code>

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+'grupmenu':  
case prefix+'groupmenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks =`
⊙─❲ GROUP MENU ❳
│
├─⊙ ${prefix}group <button>
├─⊙ ${prefix}setgroup <button>
├─⊙ ${prefix}gc <buka/tutup>
├─⊙ ${prefix}bukagc <time>
├─⊙ ${prefix}tutupgc <time>
├─⊙ ${prefix}antilink <1/0>
├─⊙ ${prefix}antivirtex <1/0>
├─⊙ ${prefix}setnamagc <teks>
├─⊙ ${prefix}setdeskgc <teks>
├─⊙ ${prefix}setppgc <reply>
├─⊙ ${prefix}delete <reply>
├─⊙ ${prefix}totalpesan
├─⊙ ${prefix}caripesan
├─⊙ ${prefix}listgroup
├─⊙ ${prefix}listadmin 
├─⊙ ${prefix}infogroup
├─⊙ ${prefix}groupwa
├─⊙ ${prefix}add
├─⊙ ${prefix}kick
├─⊙ ${prefix}getpic
├─⊙ ${prefix}getnum
├─⊙ ${prefix}getname
├─⊙ ${prefix}getbio
├─⊙ ${prefix}promote
├─⊙ ${prefix}demote
├─⊙ ${prefix}linkgc
├─⊙ ${prefix}resetlink
├─⊙ ${prefix}hedsot
├─⊙ ${prefix}sider
├─⊙ ${prefix}kontag
├─⊙ ${prefix}sticktag
├─⊙ ${prefix}totag
├─⊙ ${prefix}tagall
└─⊙ ${prefix}hidetag

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+ 'setting': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = `
⊙─❲ SETTING ❳
│
├─⊙ ${prefix}mode
├─⊙ ${prefix}setmenu
├─⊙ ${prefix}setgroup
├─⊙ ${prefix}setthumb
├─⊙ ${prefix}setfakeimg
├─⊙ ${prefix}setreply
├─⊙ ${prefix}setprefix
├─⊙ ${prefix}setbiobot
├─⊙ ${prefix}setnamabot
├─⊙ ${prefix}setppbot
├─⊙ ${prefix}setnamagc
├─⊙ ${prefix}setdeskgc 
├─⊙ ${prefix}setppgc
├─⊙ ${prefix}settarget
├─⊙ ${prefix}setlimit
├─⊙ ${prefix}resetlimit
├─⊙ ${prefix}setbio <on/off>
├─⊙ ${prefix}welcome <on/off>
├─⊙ ${prefix}readpc <on/off>
├─⊙ ${prefix}readgc <on/off>
├─⊙ ${prefix}autorekam <on/off>
├─⊙ ${prefix}autoketik <on/off>
├─⊙ ${prefix}anticall <on/off>
├─⊙ ${prefix}antitag <on/off>
├─⊙ ${prefix}antilink <on/off>
├─⊙ ${prefix}antivirtex <on/off>
├─⊙ ${prefix}antitoxic <on/off>
└─⊙ ${prefix}antidelete <on/off>

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+'shopmenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ SHOP MENU ❳
│
├─⊙ ${prefix}buylimit
├─⊙ ${prefix}buyprem
├─⊙ ${prefix}tflimit
├─⊙ ${prefix}tfbalance
├─⊙ ${prefix}listlimit
├─⊙ ${prefix}listbalance
├─⊙ ${prefix}addprem
├─⊙ ${prefix}dellprem
├─⊙ ${prefix}listprem
└─⊙ ${prefix}cekprem

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+'funmenu':   
case prefix+'gamemenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ FUN MENU ❳
│
├─⊙ ${prefix}gantengcek
├─⊙ ${prefix}cantikcek
├─⊙ ${prefix}jadiancek
├─⊙ ${prefix}seberapagay
├─⊙ ${prefix}seberapalesby
├─⊙ ${prefix}bisakah
├─⊙ ${prefix}kapankah
├─⊙ ${prefix}apakah
├─⊙ ${prefix}hobby
├─⊙ ${prefix}rate
├─⊙ ${prefix}suit
├─⊙ ${prefix}slot
├─⊙ ${prefix}truth
├─⊙ ${prefix}dare
└─⊙ ${prefix}gelud

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+'downloadmenu':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ DOWNLOAD MENU ❳
│
├─⊙ ${prefix}play <button>
├─⊙ ${prefix}tiktok <button>
├─⊙ ${prefix}ytmp3 <link>
├─⊙ ${prefix}ytmp4 <link>
├─⊙ ${prefix}playmp3 <query>
├─⊙ ${prefix}playmp4 <query>
├─⊙ ${prefix}tiktokvideo <link>
├─⊙ ${prefix}tiktokaudio <link>
├─⊙ ${prefix}mediafire <link>
├─⊙ ${prefix}twitter <link>
├─⊙ ${prefix}facebook <link>
└─⊙ ${prefix}instagram <link>

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break
case prefix+'makermenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ MAKER MENU ❳
│
├─⊙ ${prefix}sticker
├─⊙ ${prefix}swm <author|packname>
├─⊙ ${prefix}take <author|packname>
├─⊙ ${prefix}emoji <satu emoticon>
├─⊙ ${prefix}nuliskanan
├─⊙ ${prefix}nuliskiri
├─⊙ ${prefix}foliokanan
└─⊙ ${prefix}foliokiri

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break
case prefix+'othermenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ OTHER MENU ❳
│
├─⊙ ${prefix}hbd
├─⊙ ${prefix}tarot
├─⊙ ${prefix}pantun
├─⊙ ${prefix}faktaunik
├─⊙ ${prefix}artinama
├─⊙ ${prefix}ramalpasangan
├─⊙ ${prefix}ceritahoror
├─⊙ ${prefix}ceritapendek
├─⊙ ${prefix}cecan
├─⊙ ${prefix}cogan
├─⊙ ${prefix}asupan
├─⊙ ${prefix}darkjokes
├─⊙ ${prefix}kalkulator
├─⊙ ${prefix}fakedata
├─⊙ ${prefix}getcode
└─⊙ ${prefix}fdeface

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+'searchingmenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ SEARCHING MENU ❳
│
├─⊙ ${prefix}yts <query>
├─⊙ ${prefix}lirik <query> 
├─⊙ ${prefix}brainly <query>
├─⊙ ${prefix}wikipedia <query>
├─⊙ ${prefix}google <query>
├─⊙ ${prefix}news <query>
├─⊙ ${prefix}beasiswa <query>
├─⊙ ${prefix}anime <query>
├─⊙ ${prefix}otaku <query>
├─⊙ ${prefix}komiku <query>
├─⊙ ${prefix}pinterest <query>
├─⊙ ${prefix}playstrore <query>
├─⊙ ${prefix}ytsearch <query>
├─⊙ ${prefix}ghstalk <username>
└─⊙ ${prefix}igstalk <username>

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break
case prefix+'storagemenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ STORAGE MENU ❳
│
├─⊙ ${prefix}addstik 
├─⊙ ${prefix}addimg 
├─⊙ ${prefix}addvid 
├─⊙ ${prefix}addvn 
├─⊙ ${prefix}delstik 
├─⊙ ${prefix}delimg 
├─⊙ ${prefix}delvid 
├─⊙ ${prefix}delvn 
├─⊙ ${prefix}getstik 
├─⊙ ${prefix}getimg 
├─⊙ ${prefix}getvid 
├─⊙ ${prefix}getvn 
├─⊙ ${prefix}liststick
├─⊙ ${prefix}listimg
├─⊙ ${prefix}listvid
└─⊙ ${prefix}listvn

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break
case prefix+'convertmenu':   
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isCreator && !isOwner && !isRegistered) return verify(altar)
teks =`
⊙─❲ CONVERT MENU ❳
│
├─⊙ ${prefix}tr
├─⊙ ${prefix}tts
├─⊙ ${prefix}ocr
├─⊙ ${prefix}toimg 
├─⊙ ${prefix}tomp3 
├─⊙ ${prefix}tomp4 
├─⊙ ${prefix}robot 
├─⊙ ${prefix}gemuk 
├─⊙ ${prefix}balik 
├─⊙ ${prefix}bass 
├─⊙ ${prefix}slow 
├─⊙ ${prefix}fast 
├─⊙ ${prefix}reverse 
├─⊙ ${prefix}tourl 
├─⊙ ${prefix}imgtourl 
└─⊙ ${prefix}imagetourl 

⊙   All Creator BotWea © 2K22   ⊙\n`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+ 'tes': 
case prefix+ 'mode': 
case prefix+ 'status':
case prefix+ 'speed':
case prefix+ 'ping':
case prefix+ 'runtime':
case prefix+ 'device': 
case prefix+ 'perangkat':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
skitime = process.uptime()
const timestamp = speed();
const latensi = speed() - timestamp
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString('utf-8')
const teks = child.replace(/Memory:/, "Ram:")
const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
})
teks = `
⊙─❲ MODE BOT ❳
│
├─⊙ Baterai : ${isBattre} 
├─⊙ Charger : ${isCharge === 'true' ? 'Yes' : 'No'}  
├─⊙ Status  : ${offline ? 'Offline' : 'Online'} 
├─⊙ Mode  : ${banChats ? 'Self-Mode' : 'Public-Mode'} 
├─⊙ Speed : ${latensi.toFixed(4)} Second 
└─⊙ Runtime : ${kyun(skitime)} 
`
buttonss =
[
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: ftroli,sendEphemeral: true })
break

case prefix+ 'setmenu':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe && !isCreator && !isOwner) return reply(mess.only.owner)
if (args[0] == 'simple') {
menusimple = true
reply('*Berhasil mengubah tampilan menu ke simple!*')
} else if (args[0] == 'original') {
menusimple = false
reply('*Berhasil mengubah tampilan menu ke original!*')
} else {
sendButMessage(from, `\nSilahkan pilih command dibawah\n`,
 `© All Creator BotWea | ${ownername}`, 
[
{buttonId: `${prefix}setmenu simple`, buttonText: {displayText: '𝚂𝙸𝙼𝙿𝙴𝙻'}, type: 1},
{buttonId: `${prefix}setmenu original`, buttonText: {displayText: '𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻'}, type: 1},
]
)
}
break

case prefix+ 'setgroup': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
teks = `[ ⚙️ ] SET GROUP

[•] Link group | Menampilkan link group
[•] Reset link | Mereset ulang link group
[•] Info group | Menampilkan deskripsi group
`
buttonss =
[
{buttonId: `${prefix}linkgc`, buttonText: {displayText: '𝙻𝙸𝙽𝙺 𝙶𝚁𝙾𝚄𝙿'}, type: 1},
{buttonId: `${prefix}resetlink`, buttonText: {displayText: '𝚁𝙴𝚂𝙴𝚃 𝙻𝙸𝙽𝙺'}, type: 1},
{buttonId: `${prefix}infogroup`, buttonText: {displayText: '𝙸𝙽𝙵𝙾 𝙶𝚁𝙾𝚄𝙿'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: ftroli,sendEphemeral: true })
break

case prefix+ 'group': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
teks = `[ ⚙️ ] MODE GROUP

[•] Open | Untuk membuka group
[•] Close | Untuk menutup group
`
buttonss =
[
{buttonId: `${prefix}grup buka`, buttonText: {displayText: '𝙾𝙿𝙴𝙽'}, type: 1},
{buttonId: `${prefix}grup tutup`, buttonText: {displayText: '𝙲𝙻𝙾𝚂𝙴'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: ftroli,sendEphemeral: true })
break

case prefix+'profil':  
case prefix+'profile':
case prefix+'limit': 
case prefix+'balance': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
const premmm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
const serialUserr = createSerial(20)
limmm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
blann = `${getBalance(sender, balance)}`
let p1 = await skiuwers.getStatus(sender)
teks = `
⊙─❲ PROFILE USER ❳
│
├⊙ Name : ${pushname}
├⊙ Number : wa.me/${sender.split("@")[0]}
├⊙ Status : ${premmm}
├⊙ Limit : ${limmm}
└⊙ Balance : $${blann}

Limit akan di reset setiap jam 12 malam [ ! ]
`
buttonss =
[
{buttonId: `${prefix}anonymous`, buttonText: {displayText: 'ANONYMOUS'}, type: 1},
{buttonId: `${prefix}mutualan`, buttonText: {displayText: 'MUTUALAN'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,
"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })
break

case prefix+'info':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = skiuwers.user.phone
anu = process.uptime()
heheh = ms(Date.now() - waktu) 
teks = `
⊙─❲ INFORMATION ❳
│
├⊙ Creator : ${ownername}
├⊙ Browser : Microsoft Edge 
├⊙ Library : Baileys [ latest ]
├⊙ Runtime : ${kyun(anu)}
├⊙ Date : ${thisDay}, ${day} ${myMonths[bulan]} ${year}
├⊙ Time : ${timuu} WIB
├⊙ Time : ${wita} WITA
├⊙ Time : ${wit} WIT
├⊙ Mode : ${banChats ? 'Self-Mode' : 'Public-Mode'}
├⊙ Status : ${offline ? 'Offline' : 'Online'}
└⊙ Prefix : [ ${prefix} ]

⊙─❲ BOT STATISTIC ❳
│
├⊙ Total User : ${_registered.length}
├⊙ Total Hit : ${hit_today.length}
├⊙ Total Banned : ${ban.length}
├⊙ Total Block : ${blocked.length}
├⊙ Personal Chat : ${totalchat.length - giid.length}
├⊙ Group Chat : ${giid.length}
├⊙ Total Chat : ${totalchat.length}
└⊙ Speed : ${latensii.toFixed(4)} Second

⊙─❲ PHONE STATISTIC ❳
│
├⊙ Wa Whatsapp : ${wa_version}
├⊙ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├⊙ MCC : ${mcc}
├⊙ MNC : ${mnc}
├⊙ OS Version : ${os_version}
├⊙ Merk Hp : ${device_manufacturer}
└⊙ Versi Hp : ${device_model}

⊙─❲ DEVICE BOT ❳
│
├⊙ [ ${antitags ? 'True' : 'False'} ] Anti Tag
├⊙ [ ${autobio ? 'True' : 'False'} ] Auto Bio
├⊙ [ ${welcome ? 'True' : 'False'} ] Welcome
├⊙ [ ${isAntiLink ? 'True' : 'False'} ] Anti Link 
├⊙ [ ${isAntiVirtex ? 'True' : 'False'} ] Anti Virtex 
├⊙ [ ${antitoxic ? 'True' : 'False'} ] Anti Toxic 
├⊙ [ ${antical ? 'True' : 'False'} ] Anti Call 
├⊙ [ ${antidel ? 'True' : 'False'} ] Anti Delete 
├⊙ [ ${autoketik ? 'True' : 'False'} ] Auto Ketik 
├⊙ [ ${autorekam ? 'True' : 'False'} ] Auto Rekam 
├⊙ [ ${readGc ? 'True' : 'False'} ] Read GC 
└⊙ [ ${readPc ? 'True' : 'False'} ] Read PC 

⊙─❲ THANKS TO ALL ❳
│
├⊙ ItsMeArip
├⊙ ZeeoneOFC
├⊙ Ruls X Irhul
├⊙ Ferdiz-AFK
├⊙ FatihArridho
├⊙ ChokyBitch
├⊙ Creator BotWea
├⊙ Penyedia Apikey
├⊙ Penyedia Module
└⊙ Pengguna BotWea
`
buttonss =
[
{buttonId: `${prefix}gcbot`, buttonText: {displayText: '𝙶𝚁𝙾𝚄𝙿 𝙱𝙾𝚃'}, type: 1},
{buttonId: `${prefix}sewa`, buttonText: {displayText: '𝚂𝙴𝚆𝙰 𝙱𝙾𝚃'}, type: 1},
{buttonId: `${prefix}creator`, buttonText: {displayText: '𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙱𝙾𝚃'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: ftroli,sendEphemeral: true })
break
case prefix+ 'github':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = `Link : https://github.com/ItsMeArip`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `X-M4rh03 (@ItsMeArip) \n• Github profile and repositories `,"body": `Follow me on github`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `https://github.com/ItsMeArip`}}})
break
case prefix+ 'insta':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = `Link : https://instagram.com/xyzitsme__`
skiuwers.sendMessage(from, teks, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `R I P (@arip404_) \n• Instagram photos and videos`,"body": `Follow me on instagram`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `https://instagram.com/xyzitsme__`}}})
break
case prefix+ 'youtube':
case prefix+ 'ytchannel':
case prefix+ 'youtubechannel':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = `Link : https://youtube.com/c/ItsMeArip`
fakeyt(teks)
break
case prefix+ 'api':
case prefix+ 'apikey': 
case prefix+ 'apiku':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
reply('Apikey : https://api-skiuwers.herokuapp.com/api')
break
case prefix+ 'sc':
case prefix+ 'source': 
case prefix+ 'sourcecode':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
reply('Sourcecode : https://github.com/skiuwers')
break
case prefix+ 'gcbot':
case prefix+ 'grupbot':
case prefix+ 'groupbot':
case prefix+ 'linkgrupbot':
case prefix+ 'linkgroupbot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = `Silahkan bergabung di group whatsapp\n\n© All Creator BotWea | ${ownername}  `
skiuwers.sendMessage(from, teks, text, {quoted: fkontak, contextInfo:{"externalAdReply":{"title": `${botname}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.grub}`}}})
break
case prefix+'creator':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
let conarray = []
ownerContact = ['6287776101997','0']
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
var vname = skiuwers.contacts[i] != undefined ? skiuwers.contacts[i].vname || skiuwers.contacts[i].notify : await skiuwers.getName(i)
conarray.push({
"displayName": 'X-Arip͘⁴̅⁰͍⁴̵〆',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${skiuwers.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:ItsMeArip@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/c/ItsMeArip\nitem3.X-ABLabel:Subscribe\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
hehe = await skiuwers.sendMessage(from, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray  
}, 'contactsArrayMessage',{ quoted: fkontak})
iniowner = ` 
const Key = ["ItsMeArip"]
if (Key.includes("Rip")) {
reply("√")
}
 `
buttonss =
[
{buttonId: `${prefix}insta arip404_`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼'}, type: 1},
{buttonId: `${prefix}github ItsMeArip`, buttonText: {displayText: '𝙶𝙸𝚃𝙷𝚄𝙱'}, type: 1},
{buttonId: `${prefix}youtube`, buttonText: {displayText: '𝚈𝙾𝚄𝚃𝚄𝙱𝙴'}, type: 1},
]
buttonMessagee = {
contentText: iniowner,
footerText: `© All Creator BotWea | ${ownername}\n` ,
buttons: buttonss,
headerType: 1
}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,
"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })
break
case prefix+'owner':  
ocr = args.join('')
owr = ocr.split('|')[0] 
nah = ocr.split('|')[1]
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
skiuwers.sendMessage(from, {displayname: "Arip͘⁴̅⁰͍⁴̵〆", vcard: vcard}, MessageType.contact ,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
"title": `X-M4rh03 (@ItsMeArip) `,
"body": `Github profile and repositories`,
"previewType": "PHOTO",
"thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
"thumbnail": fs.readFileSync(`image/fake.jpg`),
"sourceUrl": `https://github.com/ItsMeArip`
},mentionedJid:[sender]}, quoted : ftroli})
break

case prefix+ 'iklan':
case prefix+ 'sewa':
case prefix+ 'sewabot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
infoo = `
⊙ SEWA BOT 
│
├⊙ SEWA : 5K/GRUP [ MINGGU ]
├⊙ SEWA : 15K/GRUP [ BULAN ]
└⊙ SEWA : 35K/GRUP [ PERMANEN ]

⊙ KEUNTUNGAN SEWA BOT 
│
├⊙ BISA MEMASUKAN BOT KE GROUP
└⊙ BISA MENGGUNAKAN FITUR PREMIUM \n`
buttonss =
[
{buttonId: `${prefix}payment`, buttonText: {displayText: 'PAYMENT'}, type: 1},
]
buttonMessagee = {
contentText: infoo,
footerText: `© All Creator BotWea | ${ownername}\n` ,
buttons: buttonss,
headerType: 1
}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,
"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })
break

case prefix+ 'ovo':
case prefix+ 'dana':
case prefix+ 'gopay':
case prefix+ 'pulsa':
case prefix+ 'payment':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
gambar = fs.readFileSync('./image/fake.jpg')
sendButLoc(from, `
⊙ Pembayaran Melalui OVO
│
└⊙ Via ovo : ${setting.ovo}

⊙ Pembayaran Melalui DANA
│
└⊙ Via dana : ${setting.dana}

⊙ Pembayaran Melalui GOPAY
│
└⊙ Via dana : ${setting.gopay}

⊙ Pembayaran Melalui PULSA
│
└⊙ Via pulsa : ${setting.pulsa}

Sistem : Transfer - Masukin Bot - Done
Silahkan Chat Owner | Kirim Bukti Transfer \n`,
`© All Creator BotWea | ${ownername}\n`, gambar,  [
{buttonId: `${prefix}owner`,buttonText: {displayText: `𝙾𝚆𝙽𝙴𝚁`},type: 1},
], {quoted:rip})
break

case prefix+ 'donate':
case prefix+ 'donasi':
case prefix+ 'sedekah':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
donate = ` 
⊙ DONATION FROM YOU
│
├⊙ OVO - ${setting.pulsa}
├⊙ DANA - ${setting.gopay}
├⊙ GOPAY - ${setting.ovo}
└⊙ PULSA - ${setting.dana}

⊙ Thanks supportnya kawan :)\n`
skiuwers.sendMessage(from, donate, text, {quoted: rip, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6287776101997-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

case prefix+ 's&k':
case prefix+ 'rules':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
teks = ` 
⊙─❲ SYARAT & KETENTUAN ❳
│
├⊙ Dilarang Spam Botnya
├⊙ Dilarang Eksploitasi Botnya
├⊙ [ Vc | Tlpn | Sarkas | Rasis ]
├⊙ Melanggar [ ? ] Auto Banned
└⊙ Melanggar [ ? ] Block Permanen
`
buttonss =
[
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1},
] 
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,
"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })
break

case prefix+ 'request':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!q) return reply(`Penggunaan : ${prefix}request ini request atau opsi saya kak`)
const cfrr = body.slice(8)
if (cfrr.length > 200) return skiuwers.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 200 Teks', messageType.text, {quoted: rip})
var nomor = rip.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
skiuwers.sendMessage('6287776101997@s.whatsapp.net', options, text, {quoted: rip})
skiuwers.sendMessage('6287776101997@s.whatsapp.net', options, text, {quoted: rip})
skiuwers.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, options, text, {quoted: rip})
reply('REQUEST ANDA TELAH SAMPAI KE OWNER | REQUESTS PALSU ATAU MAIN² TIDAK AKAN DITANGGAPI.')
limitAdd(sender, limit)
break

/*++++++++++++++++++++++++++
+++++++++INFORMATION+++++++
+++++++++++++++++++++++++++*/

case prefix+ 'antitag':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === 'on') {
if (antitags === true) return reply('```TRUE```')
antitags = true
reply(mess.success)
} else if (args[0] === 'off') {
if (antitags === false) return reply('```FALSE```')
antitags = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI TAG`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antitag on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antitag off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'setbio':
case prefix+ 'autobio':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] == 'on') {
if (autobio == true) return reply('```TRUE```')
autobio = true
reply(mess.success)
} else if (args[0] == 'off') {
if (autobio == false) return reply('```FALSE```')
autobio = false
reply(mess.success)
} else {
sendButMessage(from, `MODE AUTO BIO`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}autobio on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}autobio off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'toxic':
case prefix+ 'antitoxic':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (antitoxic === true) return reply('```TRUE```')
antitoxic = true
reply(mess.success)
} else if (args[0] === "off") {
if (antitoxic === false) return reply('```FALSE```')
antitoxic = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI TOXIC`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antitoxic on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antitoxic off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'readGC':
case prefix+ 'readgc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (readGc === true) return reply('```TRUE```')
readGc = true
reply(mess.success)
} else if (args[0] === "off") {
if (readGc === false) return reply('```FALSE```')
readGc = false
reply(mess.success)
} else {
sendButMessage(from, `MODE READ GC`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}readgc on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}readgc off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'readPC':
case prefix+ 'readpc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (readPc === true) return reply('```TRUE```')
readPc = true
reply(mess.success)
} else if (args[0] === "off") {
if (readPc === false) return reply('```FALSE```')
readPc = false
reply(mess.success)
} else {
sendButMessage(from, `MODE READ PC`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}readpc on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}readpc off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+'autoketik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (autoketik === true) return reply('```TRUE```')
autoketik = true
reply(mess.success)
} else if (args[0] === "off") {
if (autoketik === false) return reply('```FALSE```')
autoketik = false
reply(mess.success)
} else {
sendButMessage(from, `MODE AUTO KETIK`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}autoketik on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}autoketik off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+'autorekam':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (autorekam === true) return reply('```TRUE```')
autorekam = true
reply(mess.success)
} else if (args[0] === "off") {
if (autorekam === false) return reply('```FALSE```')
autorekam = false
reply(mess.success)
} else {
sendButMessage(from, `MODE AUTO REKAM`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}autorekam on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}autorekam off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'antitroli':
case prefix+ 'antitroligc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (antitrol === true) return reply('```TRUE```')
antitrol = true
reply(mess.success)
} else if (args[0] === "off") {
if (bugc === false) return reply('```FALSE```')
antitrol = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI TROLI`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antitroli on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antitroli off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'antibug':
case prefix+ 'antibuggc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (bugc === true) return reply('```TRUE```')
bugc = true
reply(mess.success)
} else if (args[0] === "off") {
if (bugc === false) return reply('```FALSE```')
bugc = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI BUG`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antibug on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antibug off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'antidelete':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (antidel === true) return reply('```TRUE```')
antidel = true
reply(mess.success)
} else if (args[0] === "off") {
if (antidel === false) return reply('```FALSE```')
antidel = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI DELETE`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antidelete on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antidelete off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'anticall':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] === "on") {
if (antical === true) return reply('```TRUE```')
antical = true
reply(mess.success)
} else if (args[0] === "off") {
if (antical === false) return reply('```FALSE```')
antical = false
reply(mess.success)
} else {
sendButMessage(from, `MODE ANTI CALL`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}anticall on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}anticall off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'welcome':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args[0] == "on") {
if (welcome == true) return reply('```TRUE```')
welcome = true
reply(mess.success)
} else if (args[0] == "off") {
if (welcome == false) return reply('```FALSE```')
welcome = false
reply(mess.success)
} else {
sendButMessage(from, `MODE WELCOME`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}welcome on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}welcome off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ 'antivirtex':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (args[0] == "on") {
if (isAntiVirtex) return reply('```TRUE```')
antivirtex.push(from);
fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
reply(mess.success)
} else if (args[0] == "off") {
if (isAntiVirtex) return reply('```FALSE```')
antivirtex.splice(from, 1);
fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
reply(mess.success)
} else if (!q) {
sendButMessage(from, `MODE ANTI VIRTEX`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antivirtex on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antivirtex off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;
case prefix+ "antilink":
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (args[0] == "on") {
if (isAntiLink) return reply('```TRUE```')
antilink.push(from);
fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink));
reply(mess.success)
} else if (args[0] == "off") {
if (isAntiLink) return reply('```FALSE```')
antilink.splice(from, 1);
fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink));
reply(mess.success)
} else if (!q) {
sendButMessage(from, `MODE ANTI LINK`, `\nSilahkan pilih salah satu`, [
{buttonId: `${prefix}antilink on`,buttonText: {displayText: `𝙾𝙽`},type: 1},
{buttonId: `${prefix}antilink off`,buttonText: {displayText: `𝙾𝙵𝙵`},type: 1},
])
}
break;

//]=====> GRUP MENU <=====[//
//]=====> GROUP MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'carigroup':
case prefix+ 'carigrup':
case prefix+ 'carigc':
case prefix+ 'groupwa':
case prefix+ 'grupwa':
case prefix+ 'groupwa':
case prefix+ 'gcwa':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '⬣ GROUP WA SEARCH\n\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break 
case prefix+ 'towame':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
if (rip.message.extendedTextMessage != undefined){
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`wa.me/`+mentioned.split("@")[0])
} else {
reply(`Penggunaan ${prefix}towame @tag atau reply`)
}
break
case prefix+ 'wame':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
limitAdd(sender, limit)
break

case prefix+ 'getname': case prefix+ 'getnama':
try {
getnem = skiuwers.getName(rip.quoted.sender)
reply(`${getnem}`)
} catch {
reply('Reply pesan atau tag member')
}
break

case prefix+ 'getstatus': case prefix+ 'getbio':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
if (rip.message.extendedTextMessage != undefined){
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await skiuwers.getStatus(`${mentioned}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Not Found")
} 
} else {
reply('Reply pesan atau tag member')
}
break
case prefix+ 'getpic': case prefix+ 'getpp': case prefix+ 'getprofile':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
if (rip.message.extendedTextMessage === undefined || rip.message.extendedTextMessage === null) return
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await skiuwers.getProfilePicture(mentioned)
} catch {
pp = `${imagebb}`
}
buffer = await getBuffer(pp)
skiuwers.sendMessage(from, buffer, image, {quoted: rip, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumb, contextInfo:{mentionedJid:[mentioned]}})
}
break
case prefix+ 'getnum': case prefix+ 'getnomor': case prefix+ 'getnumber':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
//if (!isGroup) return reply(mess.only.group)
if (rip.message.extendedTextMessage === undefined || rip.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`wa.me/+${mentioned.split('@')[0]}`)
break

case prefix+'ps':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply(`Kirim perintah : ${prefix}ps waktu\n\n*List Waktu Pesan Sementara*\n90h = 90hari\n7h = 7hari\n1h = 1hari\n\n*Untuk mematikan ketik :* ${prefix}ps off`)
if (args[0].toLowerCase() === '90h'){
skiuwers.toggleDisappearingMessages(m.chat, 1*2160*60*60)
} else if (args[0].toLowerCase() === '7h'){
skiuwers.toggleDisappearingMessages(m.chat, 1*168*60*60)
} else if (args[0].toLowerCase() === '1h'){
skiuwers.toggleDisappearingMessages(m.chat, 1*24*60*60)
} else if (args[0].toLowerCase() === 'off'){
skiuwers.toggleDisappearingMessages(m.chat, 0)
}
break

case prefix+ 'totalpesan':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
let id = from
let mCount = {}
let totalM = 0
await skiuwers.loadAllMessages(id, rip => {
let user = rip.key.fromMe ? skiuwers.user.jid : rip.participant ? rip.participant : id.includes('g.us') ? '' : id
if (!user) return
if (user in mCount) mCount[user]++
else mCount[user] = 1
totalM++
}, 1000)
let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
let pesan = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n')
skiuwers.sendMessage(from, `${totalM} pesan terakhir\n${pesan}`, text, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
}
break

case prefix+'grup':
case prefix+'gc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (args[0] === 'buka') {
skiuwers.sendMessage(from, `*「 SUKSES MEMBUKA GRUP 」*`, MessageType.text)
skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
await skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, true)
skiuwers.sendMessage(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text)
}
break

case prefix+'gcname':
case prefix+'setnama':
case prefix+'setnamagc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
await skiuwers.groupUpdateSubject(from, `${args.join(' ')}`)
reply(`*「 CHANGE TO 」*\n\n${args.join(' ')}`)
break

case prefix+'gcdesk':
case prefix+'setdesk':
case prefix+'setdeskgc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
await skiuwers.groupUpdateDescription(from, `${args.join(' ')}`)
reply(`*「 CHANGE TO 」*\n\n${args.join(' ')}`)
break

case prefix+ 'setppgc':
case prefix+ 'setppgrup':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (isQuotedImage) { 
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
let media = await skiuwers.downloadMediaMessage(encmedia)
skiuwers.updateProfilePicture(from, media)
//.then((res) => reply(jsonformat(res)))
//.catch((err) => reply(jsonformat(err)))
} else if (isQuotedSticker){
if (rip.message.videoMessage) return reply('Error Bro Wkwkwk')
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Error')
buffer = fs.readFileSync(ran)
skiuwers.updateProfilePicture(from, buffer)
fs.unlinkSync(ran)
})
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
reply('```SUKSES```')
}
break

case prefix+ 'bukagc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik")}
setTimeout( () => {
skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, timer)
break

case prefix+ 'tutupgc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik")}
setTimeout( () => {
skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, true)
}, timer)
break

case prefix+'add':
try {
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (rip.message.extendedTextMessage === null || rip.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await skiuwers.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
} else {
entah = rip.message.extendedTextMessage.contextInfo.participant
response = await skiuwers.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
}
} catch {
return 
}
break

case prefix+'kick': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
kickk(from, mentionUser)
break

case prefix+'hedsot':
case prefix+'headsot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
kickk(from, mentionUser)
break

case prefix+ 'dm':
case prefix+ 'demote':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
dm(from, mentionUser)
break
case prefix+ 'pm':
case prefix+ 'promote':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
pm(from, mentionUser)
break

case prefix+ 'delete': 
case prefix+ 'del': 
case prefix+ 'd':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isQuotedReply) return reply(`Reply pesan dari bot!`)
skiuwers.deleteMessage(from, { id: rip.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case prefix+ 'q': case prefix+'ulang':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!m.quoted) return reply('reply pesan!')
var jpio = skiuwers.serializeM(await m.getQuotedObj())
if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
await jpio.quoted.copyNForward(m.chat, true)
break

case prefix+ 'caripesan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply('Pesannya yang mau dicari apa?')
let v = await skiuwers.searchMessages(q,from,10,1)
let s = v.messages
let el = s.filter(v => v.message)
el.shift()
try {
if(el[0].message.conversation == undefined) return
reply(`Ditemukan ${el.length} pesan`)
await sleep(3000)
for(let i = 0; i < el.length; i++) {
await skiuwers.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
}
} catch(e){
reply('Pesan tidak ditemukan!')
}   
break

case prefix+'tagall':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `⊙ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case prefix+ 'spam':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.admin)
if (!m.quoted) return reply(`reply pesanya`)

if (args.length < 1) return reply(`Penggunaan : ${prefix}spam 15`)

if (args[0] > 100) return reply(`Maximal 100`)

let jml = args[0]

for(let i=0;i<jml;i++){

m.quoted.copyNForward(m.chat, true)

}
break
case prefix+ 'tag': 
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isPremium && !rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins ) return reply(mess.only.premium)
if (rip.message.extendedTextMessage === undefined || rip.message.extendedTextMessage === null) {
hideTag(from, `${q}`) 
} else {  
quotedText = rip.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
}
break

case prefix+ 'hidetag':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isGroup) return reply(mess.only.group)
var value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: rip
}
//skiuwers.sendMessage(from, optionshidetag, text)
skiuwers.sendMessage(from, optionshidetag, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨\n${thisDay}, ${day} ${myMonths[bulan]} ${year}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
break

case prefix+ 'serlok':
case prefix+ 'serloc':
case prefix+ 'sharelocation':
case prefix+ 'bagikanlokasi':
if (!rip.key.fromMe && !isRegistered) return reply(mess.only.user)
if (!rip.key.fromMe) return fakestatus('OWNER ONLY')
if (!q) return reply(`Penggunaan : ${prefix}serlok lokasi|alamat`)
var kntl = body.slice(8)
var nama = kntl.split("|")[0];
var impostor = kntl.split("|")[1];
skiuwers.sendMessage(from, { name: `${nama}`,address: `${impostor}`}, MessageType.location)
break

case prefix+ 'kontag':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isGroup) return reply(mess.only.group)
pe = args.join('')
entah = pe.split('|')[0]
nah = pe.split('|')[1]
if (isNaN(entah)) return reply('Invalid phone number');
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${nah}\n`
+ `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
+ 'END:VCARD'.trim()
skiuwers.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
break

case prefix+ 'sticktag':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isGroup) return reply(mess.only.group)
if ((isMedia && !rip.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: rip
}
ini_buffer = fs.readFileSync(file)
skiuwers.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*Reply sticker yang sudah dikirim*`)
}
break

case prefix+ 'totag':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe && !isOwner && !isCreator && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isGroup) return reply(mess.only.group)
if ((isMedia && !rip.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: rip
}
ini_buffer = fs.readFileSync(file)
skiuwers.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !rip.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: rip
}
ini_buffer = fs.readFileSync(file)
skiuwers.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !rip.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: rip
}
ini_buffer = fs.readFileSync(file)
skiuwers.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !rip.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await skiuwers.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: rip
}
ini_buffer = fs.readFileSync(file)
skiuwers.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
}
break

case prefix+'listadmin':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case prefix+'listgc':
case prefix+'listgroup':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
ingfoo = await getGroup(totalchat)
teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case prefix+ 'resetlink':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
linkgc = await skiuwers.revokeInvite(from)
yeh = `LINK GROUP BERHASIL DI RESET\n\n*GROUP NAME* : \n*${groupName}*`
skiuwers.sendMessage(from, yeh, text, {quoted: rip})
break

case prefix+'infogc':
case prefix+'infogroup':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
try {
ppimg = await skiuwers.getProfilePicture(from)
} catch {
ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
}
let buf = await getBuffer(ppimg)
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `
⊙ *Nama Grup :* ${groupName}

⊙ *Owner Grup* : @${groupOwner.split('@')[0]}

⊙ *Jumlah Admin :* ${groupAdmins.length}

⊙ *Jumlah Member :* ${groupMembers.length}

⊙ *Anti Link :* ${isAntiLink ? 'True' : 'False'}

⊙ *Anti Virtex :* ${isAntiVirtex ? 'True' : 'False'}

⊙ *Deskripsi :* \n${groupDesc}\n
`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}]`
}
skiuwers.sendMessage(from, buf, image, {quoted: rip, caption: teks})
break

case prefix+'inspect':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
try {
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.Iv)
if (!q) return reply('```Masukkan link groupnya```')
cos = args[0]
var net = cos.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('pastikan itu link https://whatsapp.com/')
jids = []
let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await skiuwers.query({ 
json: ["query", "invite",net],
expect200:true })
let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
for ( let y of participants) {
par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
}
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
skiuwers.sendMessage(from,par,text,{quoted:rip,contextInfo:{mentionedJid:jids}})
} catch {
reply('Link error')
}
break

case prefix+'creategroup':
case prefix+'creategrup':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
argza = arg.split('|')
if (rip.message.extendedTextMessage != undefined){
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid
for (let i = 0; i < mentioned.length; i++){
anu = []
anu.push(mentioned[i])
}
skiuwers.groupCreate(argza[0], anu)
reply(`Sukes membuat grup:\n${argza}`)
}
break

case prefix+ "listonline": 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
try {
let online = [
...Object.keys(skiuwers.chats.get(id).presences),
skiuwers.user.jid,
];
skiuwers.reply(
m.chat,
"「 LIST ONLINE 」\n" +
online.map((v) => "▢ @" + v.replace(/@.+/, "")).join`\n` +
"\n",
m,
{
contextInfo: { mentionedJid: online },
}
);
} catch (e) {
m.reply("");
}
break;

case prefix+'nyimak':
case prefix+'sider':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
//if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
shape = '✓ '
infom = await skiuwers.messageInfo(from, rip.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break   

case prefix+ 'linkgc': 
case prefix+ 'linkgrup': 
case prefix+ 'linkgroup': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
linkgc = await skiuwers.groupInviteCode (from)
yeh = `LINK GROUP \nhttps://chat.whatsapp.com/${linkgc}\n\n*${groupName}*`
skiuwers.sendMessage(from, yeh, text, {quoted: rip})
break

case prefix+ 'kontak':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!isOwner && !isCreator && !rip.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
pe = args.join(' ') 
entah = pe.split('|')[0]
nah = pe.split('|')[1]
if (isNaN(entah)) return reply('Invalid phone number');
vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${nah}\n`
+ `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
+ 'END:VCARD'.trim()
skiuwers.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
break


//]=====> GAME MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+'truth':

const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']

const ttrth = trut[Math.floor(Math.random() * trut.length)]

logotruth = await getBuffer('https://telegra.ph/file/f69b58216b0c109107952.jpg')

sendButLoc(from,  `[${pushname}] \n\n${ttrth}`, `© All Creator BotWea | ${ownername}`, logotruth,  [

{

buttonId: `${prefix}truth`,

buttonText: {

displayText: `TRUTH`,

},

type: 1,

},

{

buttonId: `${prefix}dare`,

buttonText: {

displayText: `DARE`,

},

type: 1,

},

], {quoted:rip})

break



case prefix+'dare':

const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']

const der = dare[Math.floor(Math.random() * dare.length)]

logodare = await getBuffer('https://telegra.ph/file/407800b89e1b077c3aae9.jpg')

sendButLoc(from,  `[${pushname}] \n\n${der}`, `© All Creator BotWea | ${ownername}`, logodare,  [

{

buttonId: `${prefix}truth`,

buttonText: {

displayText: `TRUTH`,

},

type: 1,

},

{

buttonId: `${prefix}dare`,
buttonText: {

displayText: `DARE`,

},

type: 1,

},

], {quoted:rip})

break

case prefix+ 'gelud':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
if (rip.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!rip.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud

[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`
skiuwers.sendMessage(from, starGame, text, {quoted: rip, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
limitAdd(sender, limit)
break

case prefix+'delsesigelud':
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./media/' + from + '.json')) {
fs.unlinkSync('./media/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
} else {
reply('Tidak ada sesi yang berlangsung')
}
break

case prefix+ 'slot':
case prefix+ 'jackpot':
if (isBanned) return reply(mess.only.banned)
//if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : ?? :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
hadi = randomNomor(30)
if (somtoyy== '🍌 : 🍌 : 🍌') {
pisang = await getBuffer('https://telegra.ph/file/f8828cf7745a6ffcfa4fe.jpg')

bp = await sendButLoc(from, `Gift : $${hadi} Balance 💰`,
`© All Creator BotWea | ${ownername}`, pisang,  [

{

buttonId: `${prefix}slot`,

buttonText: {

displayText: `JACKPOT`,

},

type: 1,

},

], {quoted:rip})
addBalance(sender, hadi, balance)
} else if (somtoyy == '🍒 : 🍒 : 🍒') {
ceri = await getBuffer('https://telegra.ph/file/4aa2f4c312f8fe8c34a0b.jpg')
bp = await sendButLoc(from, `Gift : $${hadi} Balance 💰`,
`© All Creator BotWea | ${ownername}`, ceri,  [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `JACKPOT`,
},
type: 1,
},
], {quoted:rip})
addBalance(sender, hadi, balance)
} else if (somtoyy == '🔔 : 🔔 : 🔔') {
lonceng = await getBuffer('https://telegra.ph/file/ca422dd8a525703f40c64.jpg')
bp = await sendButLoc(from, `Gift : $${hadi} Balance 💰`,
`© All Creator BotWea | ${ownername}`, lonceng,  [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `JACKPOT`,
},
type: 1,
},
], {quoted:rip})
addBalance(sender, hadi, balance)
} else if (somtoyy == '🍐 : 🍐 : 🍐') {
alvokat = await getBuffer('https://telegra.ph/file/aa5dbcb5070814dc371e9.jpg')
bp = await sendButLoc(from, `Gift : $${hadi} Balance 💰`,
`© All Creator BotWea | ${ownername}`, alvokat,  [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `JACKPOT`,
},
type: 1,
},
], {quoted:rip})
addBalance(sender, hadi, balance)
} else if (somtoyy == '🍇 : 🍇 : 🍇') {
anggur = await getBuffer('https://telegra.ph/file/4c9ae4c9ae8f47ca5f250.jpg')
bp = await sendButLoc(from, `Gift : $${hadi} Balance 💰`,
`© All Creator BotWea | ${ownername}`, anggur,  [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `JACKPOT`,
},
type: 1,
},
], {quoted:rip})
addBalance(sender, hadi, balance)
} else {
oklose = await getBuffer('https://telegra.ph/file/166a1b4d9e8a095b2d087.jpg')
bp = await sendButLoc(from, `You will not get the prize 💥`,
`© All Creator BotWea | ${ownername}`, oklose,  [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `JACKPOT`,
},
type: 1,
},
], {quoted:rip})
}
break

case prefix+ 'suit':
if (isBanned) return reply(mess.only.banned)
//if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
let suit = ["gunting", "batu", "kertas"];

let isSuit = suit.includes(q)

if (isSuit){

let suit1 = suit[Math.floor(Math.random() * (suit.length))]

let hadi = randomNomor(30)

if (q === suit[0]){

if (suit1 === "gunting"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nGames draw ⚔️\nYou will not get the prize 💥`)

} else if (suit1 === "batu"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nYou lose 💣\nYou will not get the prize 💥`)

} else {

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nCongrats you winner 🏆\nGift : $${hadi} Balance 💰`)

addBalance(sender, hadi, balance)

}

} else if (q === suit[1]){

if (suit1 === "batu"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nGames draw ⚔️\nYou will not get the prize 💥`)

} else if (suit1 === "kertas"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nYou lose 💣\nYou will not get the prize 💥`)

} else {

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nCongrats you winner 🏆\nGift : $${hadi} Balance 💰`)

addBalance(sender, hadi, balance)

}

} else if (q === suit[2]){

if (suit1 === "kertas"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nGames draw ⚔️\nYou will not get the prize 💥`)

} else if (suit1 === "gunting"){

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nYou lose 💣\nYou will not get the prize 💥`)

} else {

reply(`RESULTS \n\n[ • ] ${pushname} ${q}\n[ • ] Komputer  ${suit1}\n\nCongrats you winner 🏆\nGift : $${hadi} Balance 💰`)

addBalance(sender, hadi, balance)

}

}

} else {
suitter = await getBuffer('https://telegra.ph/file/f8056054af49c4ce7d619.jpg')
bp = await sendButLoc(from, `\nSilahkan pilih command dibawah\n`,
`© All Creator BotWea | ${ownername}`, suitter,  [
{buttonId: `${prefix}suit batu`, buttonText: {displayText: 'BATU'}, type: 1},
{buttonId: `${prefix}suit kertas`, buttonText: {displayText: 'KERTAS'}, type: 1},
{buttonId: `${prefix}suit gunting`, buttonText: {displayText: 'GUNTING'}, type: 1},
], {quoted:rip})
}
break

case prefix+ 'dadu':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isGroup) return reply(mess.only.private)
var dadu =["⚀","⚁","⚂","⚃","⚄","⚅",]
const duda = dadu[Math.floor(Math.random() * dadu.length)]
skiuwers.sendMessage(from, '[DADU]\n\n' + duda , text, { quoted: ftoko })
break

//]=====> DOWNLOAD MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'play':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!arg && !m.quoted) return reply('Masukan judul atau reply judul lagunya')
if (arg) {
const playy = await axios.get(`https://cililitan.herokuapp.com/api/ytsearch?q=${encodeURI(arg)}`)
const mulaikah = playy.data.result[0]
const {title, thumbnail, link, id} = mulaikah
const captions = `
⊙ *Title* : ${title}
⊙ *Link* : ${link}

Silahkan pilih satu satu format yang akan di downlod dan tunggu file media akan dikirim mungkin butuh beberapa menit [ ⏳ ]`
gambar = await getBuffer(thumbnail)
gbutsan = 
[
{buttonId: `${prefix}video ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
{buttonId: `${prefix}audio ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'},
]
mhan = await skiuwers.prepareMessage('0@s.whatsapp.net', {name: botname, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
contentText: captions,
footerText: `© All Creator BotWea | ${setting.ownername}`,
buttons: gbutsan,
headerType: 'LOCATION'
}
skiuwers.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: rip})
} else if (!arg) {
const playy = await axios.get(`https://cililitan.herokuapp.com/api/ytsearch?q=${m.quoted.text}`)
console.log(playy)
const mulaikah = playy.data.result[0]
console.log(mulaikah)
const {title, thumbnail, link, id} = mulaikah
reply(mess.wait)
const captions = `
⊙ *Title* : ${title}
⊙ *Link* : ${link}

Silahkan pilih satu satu format yang akan di downlod dan tunggu file media akan dikirim mungkin butuh beberapa menit [ ⏳ ]`
gambar = await getBuffer(thumbnail)
gbutsan = 
[
{buttonId: `${prefix}video ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
{buttonId: `${prefix}audio ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'},
]
mhan = await skiuwers.prepareMessage('0@s.whatsapp.net', {name: botname, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
contentText: captions,
footerText: `© All Creator BotWea | ${setting.ownername}`,
buttons: gbutsan,
headerType: 'LOCATION'
}
skiuwers.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: rip})
} 
limitAdd(sender, limit)
break

case prefix+'audio':
case prefix+'ytmp3':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 0) return reply('Link Nya Mana?')
if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(mess.lv)
try {
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 20000) return reply('UKURAN FILE TERLALU BESAR')
reply(mess.wait)
sendFile(dl_link, audio, {mimetype: 'audio/mp4',quoted:rip})
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
limitAdd(sender, limit)
}
limitAdd(sender, limit)
break
case prefix+'video':
case prefix+'ytmp4':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 0) return reply('Link Nya Mana?')
if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(mess.lv)
try {
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 20000) return reply('UKURAN FILE TERLALU BESAR')
reply(mess.wait)
sendFile(dl_link, video, {mimetype: 'video/mp4',quoted:rip})
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
limitAdd(sender, limit)
}
limitAdd(sender, limit)
break

case prefix+ 'playmp4':{
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Kirim perintah *${prefix + command} <query>*`)
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 20000) return sendFileFromUrl(from, thumb, `
UKURAN FILE TERLALU BESAR [ ! ]

⊙ Title : ${title}
⊙ Link : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link, silahkan melanjutkan melalui link yang telah disertakan.`, rip)
const playmp4 = `
「  YOUTUBE PLAY VIDEO 」

⊙ Title : ${title}
⊙ Size : ${filesize}
⊙ Upload : ${yut.videos[0].ago}
⊙ Viewers : ${yut.videos[0].views}
⊙ Duration : ${yut.videos[0].timestamp}
⊙ Link : ${yut.videos[0].url}

Silahkan menunggu file media akan dikirim mungkin butuh beberapa menit [ ⏳ ]`
sendFileFromUrl(from, thumb, playmp4, rip)
sendFile(dl_link, video, {mimetype: 'video/mp4',quoted:rip})
})
})
}
limitAdd(sender, limit)
break
case prefix+ 'playmp3':{
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Kirim perintah *${prefix + command} <query>*`)
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 20000) return sendFileFromUrl(from, thumb, `
UKURAN FILE TERLALU BESAR [ ! ]

⊙ Title : ${title}
⊙ Link : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link, silahkan melanjutkan melalui link yang telah disertakan.`, rip)
const playmp3 = `
「  YOUTUBE PLAY AUDIO 」

⊙ Title : ${title}
⊙ Size : ${filesize}
⊙ Upload : ${yut.videos[0].ago}
⊙ Viewers : ${yut.videos[0].views}
⊙ Duration : ${yut.videos[0].timestamp}
⊙ Link : ${yut.videos[0].url}

Silahkan menunggu file media akan dikirim mungkin butuh beberapa menit [ ⏳ ]`
sendFileFromUrl(from, thumb, playmp3, rip)
sendFile(dl_link, audio, {mimetype: 'audio/mp4',quoted:rip})
})
})
}
limitAdd(sender, limit)
break

case prefix+'download':
case prefix+'ttnowm':
case prefix+'tiktoknowm':
case prefix+'twitter':
case prefix+'facebook':
case prefix+'twittervideo':
case prefix+'instagramvideo':
case prefix+'facebookvideo':
case prefix+'pinterestvideo':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 0) return reply(`Kirim perintah *${prefix + command} <link>*`)
reply(mess.wait)
henn = args[0]

var Linktod = henn.split('https://')[1]

if (!Linktod) return reply('Link tidak valid')

const aio = async (link) => {

return new Promise((resolve, reject) => {

axios({

url: 'https://aiovideodl.ml/',

method: 'GET',

headers: {

"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",

"cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"

}

}).then((src) => {

let a = cheerio.load(src.data)

let token = a('#token').attr('value')

const options = {

method: 'POST',

url: `https://aiovideodl.ml/wp-json/aio-dl/video-data/`,

headers: {

"content-type": "application/x-www-form-urlencoded; charset=UTF-8",

"user-agent": fakeUa(),

"cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"

},

formData: {

url: link,

token: token

}

};

request(options, async function(error, response, body) {

if (error) throw new Error(error);

//console.log(JSON.parse(body))

const $ = cheerio.load(body)

res = JSON.parse(body)

res.creator = 'Fajar Ihsana'

resolve(res);

});

})

})

}

data = await aio(`${args[0]}`)

sendMediaURL(from,data.medias[0].url)
}
limitAdd(sender, limit)
break

//sendFileFromUrl(res[0].link, document, {quoted: rip, mimetype: 'audio/mp3', filename:'audio.mp3'})
//skiuwers.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: rip })

case prefix+'mediafire':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 0) return reply('Link Nya Mana? ')
if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link tidak valid')
reply(mess.wait)
const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}
teks = args.join(' ')
res = await mediafireDl(teks)
result = `「  *MEDIA FIRE*  」\n
⊙ *Nama :* ${res[0].nama}
⊙ *Ukuran :* ${res[0].size}
⊙ *Link :* ${res[0].link}\n

_*Tunggu Proses Upload Media*_`
reply(result)
skiuwers.sendMessage(from, await getBuffer(res[0].link), document, {
mimetype: res[0].mime,
filename: res[0].nama,
quoted: rip
})
limitAdd(sender, limit)
break

case prefix+'instagram':
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
reply(mess.wait)
hx.igdl(args[0])
.then(async(result) => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
skiuwers.sendMessage(from,link,video,{quoted: rip,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
skiuwers.sendMessage(from,link,image,{quoted: rip,caption: `Type : ${i.type}`})  
}
}
});
limitAdd(sender, limit)
break

case prefix+ 'tiktok':
case prefix+ 'tiktokdownload':
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Linknya?')
var initiktok = `
Jika tidak muncul silahkan download di telegam bot
Link telegram : https://t.me/tiktokdownloadrobot

*SILAHKAN PILIH FORMAT DOWNLOAD DIBAWAH*`
oks = fs.readFileSync(`./image/${fthumb}`)
mhan = await skiuwers.prepareMessage(from, oks, image, {thumbnail:null})
gbutsan = [
{buttonId: `${prefix}tiktokvideo ${(args[0])}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `${prefix}tiktokaudio ${(args[0])}`, buttonText: {displayText: 'AUDIO'}, type: 1}]
gbutttonan = {imageMessage: mhan.message.imageMessage,contentText: `${initiktok}`,footerText: `© All Creator BotWea | ${setting.ownername}`,buttons: gbutsan,headerType: 4}
await skiuwers.sendMessage(from, gbutttonan, MessageType.buttonsMessage, {caption: `${initiktok}`,"contextInfo": {mentionedJid: [sender]}, quoted : rip })
limitAdd(sender, limit)
break

case prefix+ 'ttwm': 
case prefix+ 'ttvideo': 
case prefix+ 'tiktokwm':
case prefix+ 'tiktokvideo':
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
async function tiktok(Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
url: "https://ttdownloader.com/",
method: "GET",
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(respon => {
var $ =cheerio.load(respon.data)
token = $('#token').attr('value')
axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(res => {
ch = cheerio.load(res.data)
result = {
status: res.status,
result: {
nowm: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
wm: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
}
}
resolve(result)
console.log(result)
}).catch(reject)
}).catch(reject)
})
}
ttvideo = await tiktok(q)
sendFile(ttvideo.result.wm, video, {quoted : rip, thumbnail: fthumb, caption:'Nih kak >_<'})
limitAdd(sender, limit)
break
case prefix+ 'ttaudio':
case prefix+ 'tiktokaudio':
case prefix+ 'tiktokmusik':
if (isBanned) return reply(mess.only.banned)
if (isGroup) return reply(mess.only.private)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
const UserAgent = () => {
ossss = [
'Macintosh; Intel Mac OS X 10_15_7',
'Macintosh; Intel Mac OS X 10_15_5',
'Macintosh; Intel Mac OS X 10_11_6',
'Macintosh; Intel Mac OS X 10_11_5',
'Windows NT 10.0; Win64; x64',
'Windows NT 10.0',
];
return `Mozilla/5.0 (${ossss[Math.floor(Math.random() * ossss.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(
Math.random() * 3,
) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}
async function tiktokmusic(URL) {
return new Promise(async (resolve, reject) => {
GDF = await axios.get('https://www.tiktok.com/')
Cookie = "ttwid=1%7C5UyITGuqEDXVZHtmtbU-7V35lTk8--iB6IjJuxRKPTs%7C1625390616%7C62c0b171e938115d5940a9af40c377000bc616cc7b25dfd76557913951585606; Domain=.tiktok.com; Path=/; Expires=Mon, 04 Jul 2022 09:23:36 GMT; HttpOnlytt_webid_v2=6980999485653632513; path=/; expires=Mon, 04 Jul 2022 09:23:37 GMT; domain=.tiktok.com; samesite=none; secure; httponlytt_webid=6980999485653632513; path=/; expires=Mon, 04 Jul 2022 09:23:37 GMT; domain=.tiktok.com; samesite=none; secure; httponlytt_csrf_token=9u_ml89_dULuOD6oMp_zTH06; path=/; domain=.tiktok.com; samesite=lax; secure; httponly"
axios.get(URL, {
headers: {
'user-agent': UserAgent(),
'Cookie': Cookie
}
})
.then(({ data }) => {
var $ =cheerio.load(data)
ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
console.log(meta)
resolve({meta})
})
})
}
anu = await tiktokmusic(q)
ani = await getBuffer(anu.meta.music.playUrl)
skiuwers.sendMessage(from, ani, audio, {quoted: rip, mimetype:'audio/mp3', filename:'tiktok.mp3'})
limitAdd(sender, limit)
break

//------------------< STALKER >-------------------//

case prefix+ 'igstalk':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q) return reply('Usernamenya?')
reply(mess.wait)
const tod = await fetchJson(`https://fdz-app.herokuapp.com/api/stalkig?username=${q}`);
console.log(`${args.join(' ')}`)
ten = `${tod.picurl}`
teks = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ \`\`\`INSTAGRAM PROFILE\`\`\`
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Link : https://instagram.com/${args.join('')}\`\`\`
\`\`\`▢ Username :  ${tod.username}\`\`\`
\`\`\`▢ Full Name : ${tod.fullname}\`\`\`
\`\`\`▢ Followers : ${tod.followers}\`\`\`
\`\`\`▢ Following : ${tod.following}\`\`\`
\`\`\`▢ Private : ${tod.private_user ? 'null' : 'No'}\`\`\`
\`\`\`▢ Verified : ${tod.verified_user ? 'null' : 'No'}\`\`\`
\`\`\`▢ total post : ${tod.post}\`\`\`
\`\`\`▢ Prof account : ${tod.professional_account ? 'null' : 'No'}\`\`\`
\`\`\`▢ kategori account : ${tod.category_name}\`\`\`
\`\`\`▢ Bio : ${tod.bio}\`\`\`
\`\`\`▢ External link : ${tod.external_url}\`\`\`
`
sendMediaURL(from,ten,teks)
limitAdd(sender, limit)
break
case prefix+'ghstalk': 
case prefix+'githubstalk': 
case prefix+'ghuser':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
reply(mess.wait)
axios.get(`https://api.github.com/users/${args[0]}`)
.then((res) => res.data)
.then((res) =>{
let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
let txt = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ \`\`\`GITHUB PROFILE\`\`\`
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${login}\`\`\`
\`\`\`▢ Name : ${name}\`\`\`
\`\`\`▢ Followers : ${followers}\`\`\`
\`\`\`▢ Following : ${following}\`\`\`
\`\`\`▢ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Public Gists : ${public_gists}\`\`\`
\`\`\`▢ Public Repos : ${public_repos}\`\`\`
\`\`\`▢ Twitter : ${twitter_username}\`\`\`
\`\`\`▢ Email : ${email}\`\`\`
\`\`\`▢ Location : ${location}\`\`\`
\`\`\`▢ Blog : ${blog}\`\`\`
\`\`\`▢ Link : ${html_url}\`\`\`
\`\`\`▢ Bio : ${bio} \`\`\`
`
sendFileFromUrl(from, avatar_url, txt, rip)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(setting.ownerNumber, 'GH Stalk Error : ' + err)
console.log(color('[GH Stalk]', 'red'), err)
reply(mess.error.api)
})
}
limitAdd(sender, limit)
break

case prefix+'tiktokstalk':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q)return reply(`Penggunaan : ${prefix}tiktokstalk skiuwers`)
reply(mess.wait)
ttst = await fetchJson(`http://api-skiuwers.herokuapp.com/tiktokstalk?query=${q}`)
ig = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ \`\`\`TIKTOK PROFILE\`\`\`
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username :  ${ttst.username}\`\`\`
\`\`\`▢ Nick Name : ${ttst.nickname}\`\`\`
\`\`\`▢ Video : ${ttst.videoCount}\`\`\`
\`\`\`▢ Likes : ${ttst.likes}\`\`\`
\`\`\`▢ Followers : ${ttst.follower}\`\`\`
\`\`\`▢ Following : ${ttst.following}\`\`\`
\`\`\`▢ Bio : ${ttst.bio}\`\`\`
 `
buff = await getBuffer(ttst.prof_pic)
skiuwers.sendMessage(from, buff, image,{quoted:rip,caption:ig})
limitAdd(sender, limit)
break

//]=====> CONVERT MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'robot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
encmedial = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await skiuwers.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
skiuwers.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 3467900999999, ptt:true, quoted: rip})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case prefix+ 'gemuk': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
encmediaz = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await skiuwers.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
skiuwers.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 3467900999999, quoted:rip})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case prefix+ 'balik': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
encmediau = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await skiuwers.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
skiuwers.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 3467900999999, quoted:rip})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case prefix+ 'bass': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
encmediao = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await skiuwers.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
skiuwers.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 3467900999999, quoted:rip})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'tobass':   
case prefix+ 'mp3bass':   
case prefix+ 'bassmp3':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Penggunaan ${prefix}bass <angka> \nContoh : ${prefix}bass 94`)
encmediao = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await skiuwers.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=${q}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
skiuwers.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 3467900999999, quoted:rip})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'tts': 
case prefix+ 'translate': 
try {if (args.length > 50) return reply('```Error, Teks Terlalu Panjang!```')
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (rip.message.extendedTextMessage === undefined || rip.message.extendedTextMessage === null) {
const gtts = require('./lib/gtts')(args[0])
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 50
? reply('```Error, Teks Terlalu Panjang!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
skiuwers.sendMessage(from, buff, audio, {quoted: rip, ptt:true})
fs.unlinkSync(rano)
})
})
} else {
const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
dtt = rip.message.extendedTextMessage.contextInfo.quotedMessage.conversation
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 50
? reply('```Error, Teks Terlalu Panjang!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
skiuwers.sendMessage(from, buff, audio, {quoted: rip, ptt: true, duration: 3467900999999, quoted:rip})
fs.unlinkSync(rano)
})
})
}
} catch (e) {
reply(`${e}`)
}
limitAdd(sender, limit)
break

case prefix+ 'toimg':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply atau tag stiker nya lord!')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
console.log(err)
if (err) return reply('Yah gagal, coba ulangi\nmungkin stiker yang kakak reply stiker gif^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'```Nih gambarnya :V```')
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+'tomp4':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker && !isQuotedAudio) return reply('Reply medianya!')
let encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
if (rip.message.conversation === true){
let outGif = getRandom('.gif')
let outMp4 = getRandom('.mp4')
exec(`convert ${media} ${outGif}`, (err) => {
if (err) {
console.log(err)
fs.unlinkSync(media)
return reply(`Error bruh`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
fs.unlinkSync(media)
fs.unlinkSync(outGif)
return reply(`Error`)
}
skiuwers.sendVideo(from, fs.readFileSync(outMp4), 'Nih', rip)
.then(() => {
fs.unlinkSync(outMp4)
limitAdd(sender, limit)
})
})
})
} else {
reply(mess.wait)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal :V')
skiuwer.sendMessage(from, fs.readFileSync(ran), image, {quoted: rip, caption: 'NIH'})
limitAdd(sender,  limit)
fs.unlinkSync(ran)
})
}
}
limitAdd(sender, limit)
break

case prefix+ 'tomp3':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply('Reply medianya!')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
skiuwers.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: rip })
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'fast':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply('Reply videonya!')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rip })
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'slow':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply('Reply videonya!')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rip })
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'reverse':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply('```Reply videonya!```')
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rip })
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

case prefix+ 'filetourl': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
var imgbb = require('imgbb-uploader')
if (isQuotedAudio) {
ger = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await skiuwers.downloadAndSaveMediaMessage(ger)
Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`Url : ${Okelor.display_url}`
reply(teks)
} else if (isQuotedImage) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
reply(mess.wait)
owgi = await skiuwers.downloadAndSaveMediaMessage(ger)
qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`Url : ${qbc.display_url}`
reply(teks)
} else if (isQuotedVideo) {
ger = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
reply(mess.wait)
owgi = await skiuwers.downloadAndSaveMediaMessage(ger)
ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`Url : ${ffff.display_url}`
reply(teks)
} else if (isQuotedSticker) {
ger = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await skiuwers.downloadAndSaveMediaMessage(ger)
vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`Url : ${vrr.display_url}`
reply(teks)
}
limitAdd(sender, limit)
break

case prefix+ 'tourl':
case prefix+ 'videotourl':
case prefix+ 'imagetourl':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !rip.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
reply(mess.wait)
owgi = await skiuwers.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
limitAdd(sender, limit)
break

case prefix+ 'imgtourl':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !rip.message.videoMessage || isQuotedImage ) && args.length == 0) {
var imgbb = require('imgbb-uploader')
ger = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip 
reply(mess.wait)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading image...'))
owgi = await  skiuwers.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
teks = `Link : ${anu.display_url}`
reply(teks)
.catch((e)=>{reply(`Error [ x ] `)})
} else {
reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
}
}
limitAdd(sender, limit)
break

case prefix+'shortlink':{
if (!isUrl(q)) return reply(`Kirim perintah ${prefix + command} *https://link*`)
anu = await fetchJson(`https://shortlink.fatiharridho.my.id/api/?key=nezc1QupZyUP&url=${q}`)
let txt = `*_🐨 URL Ori_* : ${q}
*_🐼 Shortlink_* : ${anu.short}`
reply(txt)
}
break

//]=====> FUN MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+'ramalpasangan':
const namayouu = q.split('|')[0] ? q.split('|')[0] : q
const namashee = q.split('|')[1] ? q.split('|')[1] : ''
if (!namayouu && !namashee) return reply(`kirim perintah ${prefix}ramalpasangan namakamu|namadia`)
axios.get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${namayouu}&nama2=${namashee}&proses=+Submit%21+`)
.then(({ data }) => {
var $ = cheerio.load(data)
var progress = 'https://www.primbon.com/' + $('#body > img').attr('src')
var isi = $('#body').text().split(namashee)[1].replace('< Hitung Kembali', '').split('\n')[0]
var posi = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ', '')
var nega = isi.split('Sisi Negatif Anda: ')[1]
var res = {
result: {
nama1: namayouu,
nama2: namashee,
thumb: progress,
positif: posi,
negatif: nega
}
}
var resultramalan = `「 *HASIL-RAMALAN* 」

• Nama: ${res.result.nama1}
• Pasangan: ${res.result.nama2}
• Positif: ${res.result.positif}
• Negatif: ${res.result.negatif}
`
reply(mess.wait)
sendFileFromUrl(from, res.result.thumb, resultramalan, rip)
}).catch((err) => {
sendMess(ownerNumber, 'RamalPasangan Error : ' + err)
console.log(color('[RamalPasangan]', 'red'), err)
reply(mess.error.api)
})
limitAdd(sender, limit)
break

case prefix+'gantengcek':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
mentions(tejs, [aku.jid, cintax.jid], true)
limitAdd(sender, limit)
break

case prefix+'cantikcek':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
mentions(gejs, [aku.jid, cintax.jid], true)
limitAdd(sender, limit)
break

case prefix+'jadiancek':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let vejs = `Ciee yang lagi jadian! \n*@${aku.jid.split('@')[0]}* 🖤 @${cintax.jid.split('@')[0]}\nSemoga Langgeng ya :V`
mentions(vejs, [aku.jid, cintax.jid], true)
limitAdd(sender, limit)
break

case prefix+'seberapagay':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
const ga = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const y = ga[Math.floor(Math.random() * ga.length)]
skiuwers.sendMessage(from, 'Pertanyaan : seberapa gay ' + q + '\n\nJawaban : ' + y + '%', text, { quoted: rip })
limitAdd(sender, limit)
break

case prefix+'seberapalesby':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
const les = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const cok = les[Math.floor(Math.random() * les.length)]
skiuwers.sendMessage(from, 'Pertanyaan : seberapa lesby ' + q + '\n\nJawaban : ' + cok + '%', text, { quoted: rip })
limitAdd(sender, limit)
break

case prefix+'rate':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
const ra = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const te = ra[Math.floor(Math.random() * ra.length)]
skiuwers.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: rip })
limitAdd(sender, limit)
break

case prefix+'hobby':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isGroup)return reply(mess.only.group)
const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
skiuwers.sendMessage(from, 'Pertanyaan : hobby ' + q + '\n\nJawaban : ' + by, text, { quoted: rip })
limitAdd(sender, limit)
break

//]=====> MAKER MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'tulis':

case prefix+ 'nulis':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Usage*: ${prefix}nulis nama&kelas&nomo&kata\n*Penggunaan*: ${prefix}nulis udin&20&17&blablabla`)

var bodi = args.join(" ")

var nama = bodi.split("&")[0];

var kelas = bodi.split("&")[1];

var no = bodi.split("&")[2];

var aksarane = bodi.split("&")[3];

reply(mess.wait)
rakz = await getBuffer(`https://fdz-app.herokuapp.com/api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)

skiuwers.sendMessage(from, rakz, image, { quoted: rip ,thumbnail: Buffer.alloc(0) });

limitAdd(sender, limit)
break;

case prefix+ 'nuliskiri':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Textnya mana ?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${q}&apikey=hardianto`)
anu = await getBuffer(kon)
skiuwers.sendMessage(from, anu, image, { quoted: rip, thumbnail: fs.readFileSync('./image/fake.jpg')})
limitAdd(sender, limit)
break
case prefix+ 'nuliskanan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Textnya mana ?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=hardianto`)
anu = await getBuffer(kon)
skiuwers.sendMessage(from, anu, image, { quoted: rip, thumbnail: fs.readFileSync('./image/fake.jpg')})
limitAdd(sender, limit)
break
case prefix+ 'foliokanan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Textnya mana ?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${q}&apikey=hardianto`)
anu = await getBuffer(kon)
skiuwers.sendMessage(from, anu, image, { quoted: rip, thumbnail: fs.readFileSync('./image/fake.jpg')})
limitAdd(sender, limit)
break
case prefix+ 'foliokiri':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Textnya mana ?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${q}&apikey=hardianto`)
anu = await getBuffer(kon)
skiuwers.sendMessage(from, anu, image, { quoted: rip, thumbnail: fs.readFileSync('./image/fake.jpg')})
limitAdd(sender, limit)
break

case prefix+ 'stickergif':
case prefix+ 'stikergif':
case prefix+ 'sticker': 
case prefix+ 'stiker':
case prefix+ 'sg':
case prefix+ 's':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !rip.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(`./${media}`)
reply('error')
})
.on('end', function () {
console.log('Finish')
skiuwers.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: rip})
fs.unlinkSync(`./${media}`)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && rip.message.videoMessage.seconds < 11 || isQuotedVideo && rip.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(`./${media}`)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
skiuwers.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: rip})
fs.unlinkSync(`./${media}`)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
limitAdd(sender, limit)
break

case prefix+ 'exif':
case prefix+ 'take':
case prefix+ 'colong':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply(mess.error.stick)
encmedia = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${setting.packname01}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${setting.packname02}`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, skiuwers, rip, from)
limitAdd(sender, limit)
break

case prefix+ 'stikerwm':
case prefix+ 'stickerwm':
case prefix+ 'swm':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
pe = args.join(' ')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
if (isMedia && !rip.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
skiuwers.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: rip })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
.on('exit', () => {
skiuwers.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: rip })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && rip.message.videoMessage.seconds < 11 || isQuotedVideo && rip.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
skiuwers.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: rip })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
.on('exit', () => {
skiuwers.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: rip })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)
} else {
reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
limitAdd(sender, limit)
break

case prefix+ 'emoji':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
console.log(teks)
})
limitAdd(sender, limit)
break

//]=====> OTHER MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'hitung': 
case prefix+ 'kalkulator': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
var mtk = body.slice(8)
teks = `[ *KALKULATOR* ]\n\nHasil dari :\n${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
limitAdd(sender, limit)
break

case prefix+ 'cerpen':
case prefix+ 'ceritapendek':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/cerpen.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
reply(`*Tittle*: ${randKey.result.title}\n\n*Creator*: ${randKey.result.creator}\n\n*Cerpen*: ${randKey.result.cerpen}`)
limitAdd(sender, limit)
break

case prefix+'tarot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/tarot.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = 
[
{buttonId:`${prefix}tarot`,buttonText:{displayText:`NEXT`},type:1},
]
imageMsg = ( await skiuwers.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', 
{thumbnail: Buffer.alloc(0)})).message.imageMessage,
buttonsMessage = {footerText:`© All Creator BotWea | ${ownername}\n`, imageMessage: imageMsg,
contentText:`*Title* : ${randKey.result.title}\n\n*Desc* : ${randKey.result.desc}\n\n*Situasi* : ${randKey.result.story}\n`,
buttons,headerType:4},
prep = await skiuwers.prepareMessageFromContent(from,{buttonsMessage},
{quoted: rip})
skiuwers.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
limitAdd(sender, limit)
break

case prefix+'ceritahoror':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/horor.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = 
[
{buttonId:`${prefix}ceritahoror`,buttonText:{displayText:`NEXT`},type:1},
]
imageMsg = ( await skiuwers.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', 
{thumbnail: Buffer.alloc(0)})).message.imageMessage,
buttonsMessage = {footerText:`© All Creator BotWea | ${ownername}\n`, imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Story*: ${randKey.result.story}`,
buttons,headerType:4},
prep = await skiuwers.prepareMessageFromContent(from,{buttonsMessage},
{quoted: rip})
skiuwers.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
limitAdd(sender, limit)
break

case prefix+'cecan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
buttons = 
[
{buttonId:`${prefix}cecan`,buttonText:{displayText:`CECAN`},type:1},
{buttonId:`${prefix}cogan`,buttonText:{displayText:`COGAN`},type:1},
]
imageMsg = ( await skiuwers.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', 
{thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`© All Creator BotWea | ${ownername}\n`, imageMessage: imageMsg,
contentText:`Klik Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,
buttons,headerType:4}
prep = await skiuwers.prepareMessageFromContent(from,{buttonsMessage},
{quoted: rip})
skiuwers.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
limitAdd(sender, limit)
break

case prefix+'cogan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
buttons = 
[
{buttonId:`${prefix}cecan`,buttonText:{displayText:`CECAN`},type:1},
{buttonId:`${prefix}cogan`,buttonText:{displayText:`COGAN`},type:1},
]
imageMsg = ( await skiuwers.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', 
{thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`© All Creator BotWea | ${ownername}\n`, imageMessage: imageMsg,
contentText:`Klik Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,
buttons,headerType:4}
prep = await skiuwers.prepareMessageFromContent(from,{buttonsMessage},
{quoted: rip})
skiuwers.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
limitAdd(sender, limit)
break

case prefix+ 'asupan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
data = fs.readFileSync('./lib/asupan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
asup = await getBuffer(randKey.result)
skiuwers.sendMessage(from, asup, video, { quoted:  rip, mimetype : 'video/mp4', caption: 'ASUPAN BUAT KAUM TOXIC'})
limitAdd(sender, limit)
break

case prefix+ 'darkjokes':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
darkjus = await getBuffer(randKey.result)
skiuwers.sendMessage(from, darkjus, image, { quoted:  rip, caption: 'DARK JOKES BUAT KAUM TOXIC'})
limitAdd(sender, limit)
break

case prefix+'hbd': 
case prefix+'kelahiran': 
case prefix+'zodiak': 
case prefix+'cekzodiak': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
let textus = args.join(" ")
if (!q) return reply(`Penggunaan : 2002 02 25`)
const zodiak = [
["Capricorn\n\nExplanation : Kaprikornus adalah salah satu dari rasi bintang zodiak. Biasanya dikenal sebagai Capricorn, khususnya dalam astrologi. Rasi ini melambangkan kambing bertanduk, sekalipun kadang banyak yang menyebutnya kambing laut.\n\nLambang zodiak Capricorn adalah kambing laut atau capricornus. Capricornus adalah makhluk mitologi di mana tubuh bagian depan berbentuk kambing dan tubuh bagian belakang berbentuk ikan. Namun, zodiak Capricorn juga sering dilambangkan sebagai kambing gunung, hewan dengan 4 kakinya yang kuat untuk terus jalan menuju puncak. Para Capricorn yang lahir pada 22 Desember - 20 Januari adalah orang-orang yang punya dedikasi tinggi terhadap karier mereka serta memiliki sikap disiplin dan keinginan yang besar untuk sukses. Pencapaian adalah segalanya. Sayangnya, kambing yang ambisius ini kurang peka dengan kondisi sekelilingnya, begitu juga Capricorn yang sering dinilai dingin meski dia tengah memikirkan banyak hal.", new Date(1970, 0, 1)],
["Aquarius\n\nExplanation : Aquarius adalah zodiak kesebelas dari dua belas tanda-tanda zodiak astrologi dan itu berasal dari konstelasi yang mempunyai nama yang sama, yaitu konstelasi Aquarius. Individu yang lahir ketika matahari berada di tanda ini dikenal sebagai, Pembawa Air. Sebuah rasi zodiak yang terletak di daerah katulistiwa langit. Matahari melewati rasi ini dari pertengahan Februari hingga pertengahan April.\n\nLambang zodiak Aquarius adalah seorang lak-laki yang sedang menumpahkan air dari wadah yang dia bawa. Lambang tersebut menggambarkan bahwa Aquarian adalah orang yang dermawan dan rela meluangkan waktu mereka untuk orang di sekelilingnya. Kepribadiannya yang santai membuat dia sangat mudah menyesuaikan diri di lingkungan baru, persis seperti air yang selalu mengikuti bentuk wadahnya. Namun emosi orang yang lahir pada 21 Januari - 19 Februari akan cepat ‘mendidih’ ketika pendapat mereka nggak dihargai.", new Date(1970, 0, 20)],
["Pisces\n\nExplanation : Pises (Ikan) adalah suatu zodiak rasi bintang berada antara Akuarius di sebelah barat dan Aries di sebelah timur. Dalam Zodiak, individu yang memiliki bintang Pises, terlahir pada 19 Februari hingga 20 Maret, ketika Matahari ada pada bintang Pisces.\n\nLambang zodiak Aquarius adalah seorang lak-laki yang sedang menumpahkan air dari wadah yang dia bawa. Lambang tersebut menggambarkan bahwa Aquarian adalah orang yang dermawan dan rela meluangkan waktu mereka untuk orang di sekelilingnya. Kepribadiannya yang santai membuat dia sangat mudah menyesuaikan diri di lingkungan baru, persis seperti air yang selalu mengikuti bentuk wadahnya. Namun emosi orang yang lahir pada 21 Januari - 19 Februari akan cepat ‘mendidih’ ketika pendapat mereka nggak dihargai.", new Date(1970, 1, 19)],
["Aries\n\nExplanation : Aries adalah rasi Zodiak pertama, yang mencakup 30 derajat pertama bujur langit. Di bawah zodiak tropis, Matahari transit di rasi ini umumnya antara 20 Maret sampai 20 April setiap tahunnya. Durasi waktu ini persis bulan pertama Kalender Persia.\n\nAries dilambangkan dengan kambing jantan yang suka mencari tantangan dan punya energi yang besar. Pada zaman kepercayaan kuno, kambing jantan adalah simbol kepemimpinan, keberanian dan kekuasaan. Orang yang lahir di bawah rasi bintang zodiak yang lahir pada 21 Maret - 19 April ini punya sifat seperti api, selalu bersemangat dan berdarah panas. Dia cenderung nggak punya rasa takut dan suka membela temannya. Namun karena emosinya yang sering meluap-luap, mereka terkesan temperamental dan sulit bersabar.", new Date(1970, 2, 21)],
["Taurus\n\nExplanation : Taurus adalah tanda astrologi kedua di zodiak. Zodiak Ini mencakup tingkat ke 30-60 zodiak, antara 27,25 dan 54,75 derajat bujur langit. Di bawah zodiak tropikal, matahari transit daerah ini pada 20 April sampai 20 Mei setiap tahun.\n\nBanteng merupakan lambang zodiak Taurus. Nggak banyak orang yang tahu bahwa banteng sebenarnya punya jiwa yang tenang. Namun jika mereka merasa terganggu, mereka nggak ragu untuk mengejarmu. Orang yang lahir antara tanggal 21 April - 20 Mei punya hasrat untuk memegang kendali dalam lingkungan. Namun di balik sosoknya yang berpendirian, mereka sangat menikmati kesenangan seperti seks dan barang-barang mewah. Dia akan bekerja keras untuk memenuhi kebutuhannya yang mahal tersebut. Taurus adalah zodiak yang penyabar, namun jangan terus pancing mereka kalau kamu nggak mau diserang.", new Date(1970, 3, 21)],
["Gemini\n\nExplanation : Gemini adalah zodiak ketiga yang berasal dari konstelasi Gemini. Di bawah zodiak tropis, matahari transit tanda ini antara 21 Mei dan 21 Juni. Gemini diwakili oleh si Kembar Castor dan Pollux. simbol kembar ini didasarkan pada Dioscuri, dua manusia yang diberikan bersama kekuatan dewa setelah kematian mereka.\n\nGemini yang berlambang anak kembar membuat mereka kurang suka melakukan banyak hal seorang diri. Baginya, komunikasi adalah hal yang terpenting dalam hidup dan mereka suka berbagi ide kepada orang lain. Mengobrol dengan orang yang lahir di tanggal 21 Mei - 21 Juni memang menyenangkan karena dia tahu banyak hal dan punya selera humor yang baik, namun kadang Gemini terkesan menyebalkan karena mereka suka cari-cari perhatian.", new Date(1970, 4, 21)],
["Cancer\n\nExplanation : Kanser adalah zodiak keempat yang berasal dari konstelasi Cancer. Zodiak ini mencakup 90° 120° dari zodiak, antara 90° dan 120° dari tata koordinat langit.\n\nKepiting adalah lambang zodiak Cancer. Meski ukurannya kecil, kepiting adalah salah satu hewan yang selalu membawa rumahnya kemanapun dia pergi. Hal tersebut merupakan cerminan dari karakter zodiak di tanggal 22 Juni - 22 Juli yang dekat dengan keluarga dan loyal kepada teman-temannya. Cara berjalan kepiting yang menyamping sesuai dengan prinsip orang Cancer; dia akan memilih jalan alternatif lain (selain berjalan lurus) untuk mencapai tujuannya. Hati-hati, Cancer akan mencapitmu kalau sedang moody.", new Date(1970, 5, 22)],
["Leo\n\nExplanation : Leo, adalah tanda zodiak ke 5, berasal dari konstelasi Leo. Muncul setelah Kanser dan sebelum Virgo. Pada zodiak tropis, Matahari transit konstelasi ini pada 23 Juli sampai 22 Agustus.\n\nLeo merupakan zodiak dengan lambang singa, sang raja hutan. Leo memiliki kepribadian yang rileks namun punya rasa percaya diri yang besar. Karena terbiasa memimpin, maka zodiak yang berada di tanggal 23 Juli - 23 Agustus tersebut kurang bisa bekerja secara maksimal ketika dia berada di bawah pimpinan orang lain. Karena mereka adalah ‘raja’, mereka paling benci ketika merasa nggak dihargai. Sebagai raja yang baik, Leo selalu bersikap jujur apapun situasinya. Namun karena percaya dirinya yang begitu tinggi, dia terlihat seperti raja yang angkuh.", new Date(1970, 6, 23)],
["Virgo\n\nExplanation : Virgo adalah tanda astrologi keenam dalam Zodiak. Tanda ini mencakup 150-180 derajat zodiak. Di bawah zodiak tropis, Matahari transit area ini rata-rata antara 23 Agustus dan 22 September, dan Matahari transit rasi bintang Virgo dari sekitar 16 September hingga 30 Oktober.\n\nPerempuan adalah lambang zodiak Virgo. Para Virgorian punya pikiran yang sangat dalam. Mereka tampak tenang dan sopan dari luar, namun selalu ada banyak hal di dalam pikirannya. Seperti perempuan yang suka kerapian, orang yang lahir di tanggal 24 Agustus - 22 September adalah pribadi yang detail-oriented dan suka membantu orang yang membutuhkan. Namun, kadang obsesi yang mereka punya tentang kesehatan dan kebersihan dianggap berlebihan bagi orang di sekitarnya.", new Date(1970, 7, 23)],
["Libra\n\nExplanation : Libra adalah zodiak ketujuh. Zodiak ini mencakup 180°–210° garis bujur. Pada zodiak tropis, matahari transit zodiak ini pada tanggal 23 September dan 23 Oktober, dan pada zodiak sideris, matahari berada di konstelasi ini dari 31 Oktober hingga 22 November.\n\nLibra yang berlambang timbangan bukanlah tanpa alasan. Orang berzodiak Libra sangat membutuhkan keseimbangan dalam hidupnya antara karier dan kehidupan pribadi, begitu juga dengan kesehatan emosional dan fisik. Kadang, orang yang lahir di tanggal 23 September - 23 Oktober merasa ragu dalam mengambil keputusan karena mereka harus menimbang-timbang tentang pilihan mana yang paling berbobot. Libra paling benci melihat orang lain kesusahan, namun sikapnya yang lambat dalam mengambil keputusan membuat dia terkesan malas.", new Date(1970, 8, 23)],
["Scorpio\n\nExplanation : Skorpio adalah bintang kedelapan dari daftar zodiak. Bintang ini berada diurutan 210-240 zodiak, antara 207,25 dan 234,75 derajat bujur langit.\n\nZodiak Scorpio memiliki lambang kalajengking. Nggak ada yang berani menghadapi seekor kalajengking yang agresif ketika dia merasa terusik. Para Scorpio yang lahir tanggal 24 Oktober - 22 November sangat menikmati kesendiriannya, dan mereka akan kecewa jika mereka nggak bisa mendapatkannya. Diam-diam, Scorpio juga punya jiwa kepemimpinan yang tinggi dan pandai menyelesaikan masalah. Meski demikian, Scorpio kadang merasa pesimis dan melihat banyak hal sebagai ancaman.", new Date(1970, 9, 23)],
["Sagittarius\n\nExplanation : Sagitarius adalah zodiak kesembilan dalam urutan di tabel zodiak. Di langit, zodiak ini membentang di antara 240 derajat dan 269 derajat dari sistem koordinat ekliptika. Dalam zodiak tropis, Matahari transit di daerah ini dari 23 November sampai 21 Desember setiap tahun.\n\nLambang zodiak Sagitarius adalah centaur. Centaur adalah makhluk mitologi berbentuk setengah manusia dan setengah kuda yang selalu membawa panah. Ke mana panah itu berakhir, centaur akan mengikutinya. Para Sagitarian yang lahir pada 23 November - 21 Desember sangat suka traveling, belajar hal dan bertemu orang baru. Kebebasan untuk berkelana adalah kunci kebahagiaan zodiak ini, di mana sebuah rutinitas dipandang sebagai sesuatu yang amat membosankan. Pemikiran orang Sagitarius kadang terlalu tinggi dan mengalami kesulitan untuk meraihnya.", new Date(1970, 10, 22)],
["Capricorn\n\nExplanation : Kaprikornus adalah salah satu dari rasi bintang zodiak. Biasanya dikenal sebagai Capricorn, khususnya dalam astrologi. Rasi ini melambangkan kambing bertanduk, sekalipun kadang banyak yang menyebutnya kambing laut.\n\nLambang zodiak Capricorn adalah kambing laut atau capricornus. Capricornus adalah makhluk mitologi di mana tubuh bagian depan berbentuk kambing dan tubuh bagian belakang berbentuk ikan. Namun, zodiak Capricorn juga sering dilambangkan sebagai kambing gunung, hewan dengan 4 kakinya yang kuat untuk terus jalan menuju puncak. Para Capricorn yang lahir pada 22 Desember - 20 Januari adalah orang-orang yang punya dedikasi tinggi terhadap karier mereka serta memiliki sikap disiplin dan keinginan yang besar untuk sukses. Pencapaian adalah segalanya. Sayangnya, kambing yang ambisius ini kurang peka dengan kondisi sekelilingnya, begitu juga Capricorn yang sering dinilai dingin meski dia tengah memikirkan banyak hal.", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const ini_tahun = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age
const teksh = `
Birth : ${birth.join('-')}

Upcoming hbd : ${birthday.join('-')}

Age : ${cekusia}

Zodiak : ${zodiac}
`.trim()
reply(teksh)
limitAdd(sender, limit)
break

case prefix+'ocr':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !rip.message.videoMessage || isQuotedImage) && args.length == 0) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
const mediax = await skiuwers.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
await recognize(mediax, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(mediax)
})
.catch(err => {
fs.unlinkSync(mediax)
})
} else {
reply(`kirim foto dengan caption ${prefix}ocr`)
}
limitAdd(sender, limit)
break

case prefix+'tr':
case prefix+'translate':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks]/reply pesan dengan ${prefix}tr kodebahasa\nPenggunaan : ${prefix}tr id I hate you`)
if(!args[0]) return reply(`Masukkan kode bahasanya`)
try{
if(!args[1]){
if(rip.message.conversation) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks]/reply pesan dengan ${prefix}tr kodebahasa\nPenggunaan : ${prefix}tr id I hate you`)
tra = await translate(rip.message.extendedTextMessage.contextInfo.quotedMessage.conversation, {to:args[0]})
console.log(tra)
reply(tra.text)
}
else{
codelang = args[0]
tra = await translate(body.slice(4+codelang.length), {to:codelang})
console.log(tra)
reply(tra.text)
}
}catch(e){
reply('Error')
}
limitAdd(sender, limit)
break

case prefix+ 'get':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
limitAdd(sender, limit)
break

case prefix+ 'artinama':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Apa yang mau dicari?')
anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join(' ')}`, {method: 'get'})
reply('Arti Nama :\n\n'+anu.result)
limitAdd(sender, limit)
break

case prefix+'lirik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('lagu apa?')
let song = await hx.lirik(q)
sendMediaURL(from,song.thumb,song.lirik)
limitAdd(sender, limit)
break

case prefix+ 'jahil':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
var gh = args.join('')
mentioned = rip.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
skiuwers.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
limitAdd(sender, limit)
break

case prefix+ 'settarget':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!rip.key.fromMe) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!rip.key.fromMe) return 
if(!q) return reply(`${prefix}settarget 628xxxxx`)
targetpc = args[0]
reply(`Succes Mengganti target jahil pc : ${targetpc}`)
limitAdd(sender, limit)
break

case prefix+ 'jahilpc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`${prefix}jahilpc teks target|teks lu bro`)
jids = `${targetpc}@s.whatsapp.net` // nomer target
var split = args.join(' ').replace(/@|\d/gi, '').split('|')
var taged = rip.message.extendedTextMessage.contextInfo.mentionedJid[0]
var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
const responye = await skiuwers.sendMessage(jids, `${split[1]}`, MessageType.text, options)
await skiuwers.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
limitAdd(sender, limit)
break

case prefix+ 'faktaunik':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji ripanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
fakeitem(`Fakta Unik : ${ran_faktau}`)
}
limitAdd(sender, limit)
break
case prefix+ 'pantun':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
fakeitem(`Pantun : \n${ran_pantun}`)
}
limitAdd(sender, limit)
break

case prefix+ 'fakedata':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/fdata.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let o = await skiuwers.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*KUMPULAN FAKE DATA ( PALSU )*\n\n*NAMA*: ${randKey.result.name}\n*BIRTHDAY*: ${randKey.result.birthday}\n*ADDRESS*: ${randKey.result.address}\n*CITY*: ${randKey.result.city}\n*REGION*: ${randKey.result.region}\n*COUNTRY*: ${randKey.result.country}\n*ZIP*: ${randKey.result.zip}\n*PHONE NUMBER*: ${randKey.result.phone_number}\n*USERNAME*: ${randKey.result.username}\n*PASSWORD*: ${randKey.result.password}\n*EMAIL*: ${randKey.result.email}`,
"description": `.`,
"footerText": "Ingat, Jangan Menyalah gunakan Data",
"buttons": [
{buttonId: 'SELANJUTNYA', buttonText: {displayText: 'SELANJUTNYA'}, type: 1}
],
headerType: 1
},
}, {quoted: rip}) 
await skiuwers.relayWAMessage(o)
limitAdd(sender, limit)
break

//]=====> SEARCHING MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'beasiswa':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/beasiswa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let ok = await skiuwers.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*INFORMASI BEASISWA*`,
"description": `.`,
"footerText": `${randKey.title}\n${randKey.link}\n\n${randKey2.title}\n${randKey2.link}\n\n${randKey3.title}\n${randKey3.link}`,
"buttons": [
{buttonId: 'CARI LAGI', buttonText: {displayText: 'CARI LAGI'}, type: 1}
],
headerType: 1
},
}, {quoted: rip}) 
await skiuwers.relayWAMessage(ok)
limitAdd(sender, limit)
break

case prefix+'news':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
data = fs.readFileSync('./lib/berita.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
oo = await skiuwers.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*TITLE*: ${randKey.result.title}\n\n*AUTHOR*: ${randKey.result.author}\n\n*PUBLIS*: ${randKey.result.publishedAt}\n\n*CONTENT*: ${randKey.result.content}\n\n*DESKRIPSI*: ${randKey.result.description}\n\n*LINK*: ${randKey.result.url}`,
"description": `.`,
"footerText": "BREAKING NEWS",
"buttons": [
{buttonId: 'NEWS', buttonText: {displayText: 'NEWS'}, type: 1}
],
headerType: 1
},
}, {quoted: rip}) 
await skiuwers.relayWAMessage(oo)
limitAdd(sender, limit)
break
/*
case prefix+ 'film':
data = fs.readFileSync('./lib/film.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`SEARCHING`,buttonText:{displayText:`SEARCHING`},type:1}]
imageMsg = ( await skiuwers.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'RANDOM - FILM', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Views*: ${randKey.result.views}\n\n*Duration*: ${randKey.result.duration}\n\n*Genre*: ${randKey.result.genre}\n\n*Tahun*: ${randKey.result.tahun}\n\n*Ratting*: ${randKey.result.rating}\n\n*Link*: ${randKey.result.link}\n\n*Actors*: ${randKey.result.actors}\n\n*Location*: ${randKey.result.location}\n\n*Release*: ${randKey.result.date_release}\n\n*Language*: ${randKey.result.language}\n\n*Link Download*: ${randKey.result.link_dl}`,buttons,headerType:4}
prep = await skiuwers.prepareMessageFromContent(from,{buttonsMessage},{quoted: rip})
skiuwers.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
limitAdd(sender, limit)
break
*/
case prefix+'otaku':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isGroup) return reply(mess.only.private)
if(!q) return reply(`judulnya?\n${prefix}otaku mao gakuin`)
let anime = await hx.otakudesu(q)
rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
ram = await getBuffer(anime.img)
skiuwers.sendMessage(from,ram,image,{quoted:rip,caption:rem})
limitAdd(sender, limit)
break

case prefix+'komiku':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isGroup) return reply(mess.only.private)
if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
let komik = await hx.komiku(q)
result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
sendMediaURL(from, komik.image,result)
limitAdd(sender, limit)
break  

case prefix+ 'anime':
case prefix+ 'randomanime': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isGroup) return reply(mess.only.private)
reply(mess.wait)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
skiuwers.sendMessage(from,media,image,{quoted:rip,caption:'Nih animenya!!!\nDasar wibu :V'})
}
)
.catch((error) => {
console.log(error); 
}
)
});
limitAdd(sender, limit)
break

case prefix+ 'googleimage':
if (!q) return reply(mess.wrongFormat)
ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
if(q == undefined || q == ' ') return reply(`Hasil pencarian : ${q} tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n⊙═════════════════⊙\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
skiuwers.sendMessage(from, ss, image, {caption: vars, quoted : rip, thumbnail: Buffer.alloc(0) })
}).catch(e => {
console.log(e)
reply(`${e}`)
})
limitAdd(sender, limit)
break

case prefix+'pinterest':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('Masukkan query')
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await skiuwers.sendMessage(from,di,image,{quoted: rip})
limitAdd(sender, limit)
break

case prefix+'playstore':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('Mau cari apa?')
let play = await hx.playstore(q)
let store = '⊙─────────────────────⊙\n'
for (let i of play){
store += `\n「 *PLAY STORE* 」

⊙ *Nama* : ${i.name}
⊙ *Link* : ${i.link}\n
⊙ *Dev* : ${i.developer}
⊙ *Link Dev* : ${i.link_dev}\n⊙─────────────────────⊙`
}
reply(store)
limitAdd(sender, limit)
break

case prefix+ 'google':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Penggunaan : ${prefix}google  Apa itu googlegoogle?`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = '⊙ 「 GOOGLE 」\n\n'
for (var x of get_result) {
ini_txt += `⊙ Title : ${x.title}\n`
ini_txt += `⊙ Link : ${x.link}\n`
ini_txt += `⊙ Desc : ${x.desc}\n\n`

}
reply(ini_txt)
limitAdd(sender, limit)
break

case prefix+ 'wiki':
case prefix+ 'wikipedia':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `⊙ 「 WIKIPEDIA 」

⊙ Judul : ${res[0].judul}
⊙ Wiki  : ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: rip, caption: result}).catch(e => {
  reply(result)
})
limitAdd(sender, limit)
break

case prefix+ 'ytsearch':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
try {
var aramas = await yts(srch);
} catch {
return await skiuwers.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '⊙ Title: ' + video.title + '\n'
ytresult += '⊙ Link: ' + video.url + '\n'
ytresult += '⊙ Durasi: ' + video.timestamp + '\n'
ytresult += '⊙ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += `⊙ Hasil pencarian : ${args}\n`
await fakethumb(tbuff,ytresult)
limitAdd(sender, limit)
break

case prefix+ 'getcode':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !rip.key.fromMe) return reply(mess.only.owner)
if (!rip.key.fromMe) return 
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
limitAdd(sender, limit)
break

case prefix+ 'brainly':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Pertanyaan apa')
brien = args.join(' ')
brainly(`${brien}`).then(res => {
teks = '⊙───────────────────────⊙\n'
for (let Y of res.data) {
teks += `\n*「 _BRAINLY_ 」*\n\n*⊙ Pertanyaan:* ${Y.pertanyaan}\n\n*⊙ Jawaban:* ${Y.jawaban[0].text}\n⊙──────────────────⊙\n`
}
skiuwers.sendMessage(from, teks, text,{quoted:rip,detectLinks: false})
})  
limitAdd(sender, limit)
break

//]=====> STORAGE MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'delvideo': case prefix+ 'deletevideo': case prefix+ 'delvid':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q) return reply(`Nama Video Yang Mau Di Hapus Apa Lord?`)
try {
fs.unlinkSync(`./temp/video/${q}.webp`)
let delvideo = videonye.indexOf(q)
videonye.splice(delvideo, 1)
fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
reply(`Succes Menghapus Video ${q}!`)
await sleep(5000)
} catch (err) {
reply(`Gagal Menghapus Video ${q}!`)
}
limitAdd(sender, limit)
break
case prefix+ 'delaudio': case prefix+ 'delvn': case prefix+ 'deletevn':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
try {
fs.unlinkSync(`./temp/audio/${q}.mp3`)
let delaudio = audionye.indexOf(q)
audionye.splice(delaudio, 1)
fs.writeFileSync('./temp/audio.json', JSON.stringify(audionye))
reply(`Succes Menghapus Audio ${q}!`)
await sleep(5000)
} catch (err) {
console.log(err)
reply(`Gagal Menghapus Audio ${q}!`)
}
limitAdd(sender, limit)
break
case prefix+ 'delimage': case prefix+ 'deleteimage': case prefix+ 'delfoto': case prefix+ 'delimg':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
try {
fs.unlinkSync(`./temp/foto/${q}.webp`)
let delimage = imagenye.indexOf(q)
imagenye.splice(delimage, 1)
fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
reply(`Succes Menghapus Image ${q}!`)
await sleep(5000)
} catch (err) {
reply(`Gagal Menghapus Image ${q}!`)
}
limitAdd(sender, limit)
break 
case prefix+ 'delstik': case prefix+ 'delstick': case prefix+ 'delsticker': case prefix+ 'delstiker':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
try {
fs.unlinkSync(`./temp/stick/${q}.webp`)
let delstik = setiker.indexOf(q)
setiker.splice(delstik, 1)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
reply(`Succes Menghapus sticker ${q}!`)
await sleep(5000)
} catch (err) {
reply(`Gagal Menghapus sticker ${q}!`)
}
limitAdd(sender, limit)
break

case prefix+'addstik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!isQuotedSticker) return reply('```Reply stiker nya```')
svst = body.slice(9)
if (!svst) return reply('```Nama sticker nya apa?```')
boij = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
limitAdd(sender, limit)
break
case prefix+'addimg':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!isQuotedImage) return reply('```Reply imagenya```')
clara = body.slice(8)
if (!clara) return reply('```Nama imagenya apa```')
keya = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(keya)
imagenye.push(`${svst}`)
fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
reply(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
limitAdd(sender, limit)
break
case prefix+'addvid':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!isQuotedVideo) return reply('```Reply vidionya```')
svst = body.slice(8)
if (!svst) return reply('```Nama vidionya apa```')
keya = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(keya)
imagenye.push(`${svst}`)
fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
reply(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
limitAdd(sender, limit)
break
case prefix+'addvn':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
if (!isQuotedAudio) return reply('```Reply vnnya```')
svst = body.slice(7)
if (!svst) return reply('```Nama audionya apa```')
keya = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(keya)
audionye.push(`${svst}`)
fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
reply( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
limitAdd(sender, limit)
break

case prefix+'getstik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
namastc = body.slice(9)
try {
result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
skiuwers.sendMessage(from, result, sticker,{quoted: rip})
} catch {
reply('Pack tidak terdaftar')
}
limitAdd(sender, limit)
break
case prefix+'getimg':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
skiuwers.sendMessage(from, buffer, image, { quoted: rip, caption: `Result From Database : ${namastc}.jpeg` })
} catch {
reply('```Pack tidak terdaftar```')
}
limitAdd(sender, limit)
break
case prefix+'getvid':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
skiuwers.sendMessage(from, buffer, video, { quoted: rip, caption: `Result From Database : ${namastc}.mp4` })
} catch {
reply('```Pack tidak terdaftar```')
}
limitAdd(sender, limit)
break
case prefix+'getvn':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
namastc = body.slice(7)
try {
buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
skiuwers.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: rip, ptt: true })
} catch {
reply('```Pack tidak terdaftar```')
}
limitAdd(sender, limit)
break

case prefix+'listvid':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}* `
skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: rip, contextInfo: { "mentionedJid": videonye } })
limitAdd(sender, limit)
break
case prefix+'liststik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: rip, contextInfo: { "mentionedJid": setiker } })
limitAdd(sender, limit)
break
case prefix+'listimg':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
teks = '*Image list :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*`
skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: rip, contextInfo: { "mentionedJid": imagenye } })
limitAdd(sender, limit)
break
case prefix+'listvn':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isOwner && !isCreator && !isPremium) return reply(mess.only.premium)
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: rip, contextInfo: { "mentionedJid": audionye } })
limitAdd(sender, limit)
break

//]=====> SHOP MENU <=====[//

//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+'tfbalance':
case prefix+'giftbalance':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q)return reply(`Penggunaan : ${prefix}giftbalance @tag 10`)
bal = q.split(" ")[1]
const tag2 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addBalance(tag2, nebal(bal), balance)
reply('Succes')
break

case prefix+'tf':
case prefix+'tflimit':
case prefix+'giftlimit':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q)return reply(`Penggunaan : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('Succes')
break

case prefix+'buylimit':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $10 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 10)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}
break

case prefix+'addprem':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q)return reply(`*Format Error!*\n\n*Penggunaan :*\n• *${prefix}addprem @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
break

case prefix+'dellprem':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
delp = ban.indexOf(delprem)
premium.splice(delp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`BERHASIL MENGHAPUS USER PREMIUM`)
break

case prefix+ 'buyprem': 
case prefix+ 'beliprem':
if (isPremium) return reply('```TRUE```')
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (getLimit(sender, limitCount, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
_prem.addPremiumUser(`${sender}`, `3d`, premium)
sendButMessage(from, `*Sekarang Akun Kamu Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
{
buttonId: `${prefix}cekprem`,
buttonText: {
displayText: `CEK PREMIUM`,
},
type: 1,
}]);
limitAdd(sender, 1000)
break

case prefix+'cekprem': 
case prefix+'cekpremium':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isPremium) return reply('```FALSE```')
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
try {
ppimg = await skiuwers.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*── 「 PREMIUM USER 」──*  
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
its = await getBuffer (ppimg)
skiuwers.sendMessage(from, teks, text, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: rip, caption: teks
})
break

case prefix+'listbalance': 
case prefix+'topbalance':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
skiuwers.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──* \n\n⊙ Total : ${balance.length}\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `⊙ *ID :* @${i.id.split("@")[0]}\n⊙ Balance : ${bl}\n\n`
}
mentions(txot, mebn, true)
}
break

case prefix+ 'listlimit':
case prefix+ 'toplimit':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
let txot = `*── 「 TOP  LIMIT 」 ──* \n\n⊙ Total : ${limit.length}\n\n`
let mebn = [];
for (let i of limit){
mebn.push(i.id)
let bl = (i.limit)
txot += `⊙ *ID :* @${i.id.split("@")[0]}\n⊙ *Limit :* ${bl}\n\n`
}
mentions(txot, mebn, true)
}
break

case prefix+'listprem':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
skiuwers.updatePresence(from, Presence.composing)
let txt = `*── 「 LIST PREMIUM 」 ──* \n\n⊙ Total : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `⊙ *ID :* @${i.id.split("@")[0]}\n⊙ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
  }
mentions(txt, men, true)
break

//]=====> OWNER MENU <=====[//
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\
//=========================================================\\

case prefix+ 'upswteks':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Isi teksnya!')
skiuwers.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Sukses Up story wea teks ${q}`)
break

case prefix+ 'upswimage':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (isQuotedImage) {
const swsw = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
cihcih = await skiuwers.downloadMediaMessage(swsw)
skiuwers.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
skiuwers.sendMessage(from, bur, text, { quoted: rip })
} else {
reply('```Reply gambarnya!```')
}
break

case prefix+ 'upswvideo':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip
cihcih = await skiuwers.downloadMediaMessage(swsw)
skiuwers.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
skiuwers.sendMessage(from, bur, text, { quoted: rip })
} else {
reply('```Reply videonya!```')
}
break

case prefix+'culik':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('_*MASUKIN ID GRUPNYA*_')
let skiuuu = []
for (let i of groupMembers) {
skiuuu.push(i.jid)
}
skiuwers.groupAdd(args[0], skiuuu)
break

case prefix+ 'pspc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`Kirim perintah : ${prefix}pspc on/off`)
if (args[0].toLowerCase() === 'on'){
anupc = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anupc) {
skiuwers.toggleDisappearingMessages(_.jid, 1*24*3600)
}
await reply(`Berhasil mengaktifkan pesan sementara ${anupc.length} pribadi chat`)
} else if (args[0].toLowerCase() === 'off'){
anupcc = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anupcc) {
skiuwers.toggleDisappearingMessages(_.jid, 0)
}
await reply(`Berhasil menonaktifkan pesan sementara ${anupcc.length} pribadi chat`)
}
break

case prefix+ 'psgc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`Kirim perintah : ${prefix}pspc on/off`)
if (args[0].toLowerCase() === 'on'){
anugc = await skiuwers.chats.all().filter(v => v.jid.endsWith('c.us'))
for (let _ of anugc) {
skiuwers.toggleDisappearingMessages(_.jid, 1*24*3600)
}
await reply(`Berhasil mengaktifkan pesan sementara ${anupc.length} pribadi chat`)
} else if (args[0].toLowerCase() === 'off'){
anugcc = await skiuwers.chats.all().filter(v => v.jid.endsWith('c.us'))
for (let _ of anugcc) {
skiuwers.toggleDisappearingMessages(_.jid, 0)
}
await reply(`Berhasil menonaktifkan pesan sementara ${anupcc.length} pribadi chat`)
}
break

case prefix+ 'deletepc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
skiuwers.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`Berhasil menghapus ${anu.length} chat personal`)
break
case prefix+ 'deletegc':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
ane = await skiuwers.chats.all().filter(v => v.jid.endsWith('c.us'))
for (let _ of ane) {
skiuwers.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`Berhasil menghapus ${ane.length} chat group`)
break

case prefix+ 'restart':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
const cmdse = 'pm2 restart main'
reply('Restart')
await exec(cmdse, (err, stdout) => {
if (err) return skiuwers.sendMessage(from, `${err}`, text, { quoted: rip })
if (stdout) {
reply('Restart')
}
})
console.log(stdout)
break

case prefix+ 'addtoxic':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply( `Kirim perintah ${prefix}addtoxic [kata kasar]. contoh ${prefix}addtoxic bego`)
const bw = body.slice(10)
tox.push(bw)
fs.writeFileSync('./database/tox.json', JSON.stringify(tox))
reply('Success Menambahkan Toxic Word!')
break

case  prefix+'ban':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${bnnd} telah dibanned!`)
break

case  prefix+'unban':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ya} telah di unban!`)
break

case prefix+ 'listtoxic':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
let lbw = `Ini adalah list toxic word\nTotal : ${tox.length}\n\n`
for (let i of tox) {
lbw += `• ${i.replace()}\n`
}
await reply(lbw)
break

case prefix+ 'blocklist':
case prefix+ 'listblock':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
teks = 'List Block :\n'
for (let block of blocked) {
teks += `ID @${block.split('@')[0]}\n\n`
}
teks += `Total : ${blocked.length}`
skiuwers.sendMessage(from, teks.trim(), extendedText, {quoted: rip, contextInfo: {"mentionedJid": blocked}})
break 

case prefix+ 'banlist':
case prefix+ 'listban':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
ben = 'List Banned :\n\n'
for (let banned of ban) {
ben += `ID @${banned.split('@')[0]}\n`
}
ben += `Total : ${ban.length}`
skiuwers.sendMessage(from, ben.trim(), extendedText, {quoted: rip, contextInfo: {"mentionedJid": ban}})
break

case prefix+ 'block':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
skiuwers.blockUser (`${body.slice(7)}@s.whatsapp.net`, "add")
skiuwers.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@s.whatsapp.net`, text)
break

case prefix+ 'unblock':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
skiuwers.blockUser (`${body.slice(9)}@s.whatsapp.net`, "remove")
skiuwers.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@s.whatsapp.net`, text)
break 

case prefix+ 'readmore':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('teks nya mana om?')
var kls = body.slice(9)
var has = kls.split("/")[0];
if (args.length < 1) return reply(mess.wait)
skiuwers.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎` , text, { quoted: rip })
break
/*
case prefix+ 'resetlimit':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
//var obj = ('[]')
//fs.writeFileSync('./database/limit.json', JSON.stringify(obj, null, '\t'))
skiuwers.updatePresence(from, Presence.avaible)
fs.writeFileSync('./database/limit.json', JSON.stringify([]))
console.log('Done')
reply(`LIMIT BERHASIL DI RESET`)
await sleep(5000)
break
*/
case prefix+ 'resetlimit':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
var reset2 = []
_limit = reset2
console.log('Hang tight, it\'s time to reset') 
fs.writeFileSync('./database/limit.json', JSON.stringify([]))
skiuwers.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, 'Sukses Reset Limit Ner', text)
}  
await sleep(5000)
break

case prefix+ 'outall':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
let totalgroup = skiuwers.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of totalgroup) {
sendMess(id, 'Byee', null)
await sleep(3000)
skiuwers.groupLeave(id)
}
break

case prefix+ 'kickall': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
for (let i of groupMembers) {
await kickMember(from, [i.jid])
}
break

case prefix+'readall':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
var chats = await skiuwers.chats.all()
chats.map( async ({ jid }) => {
await skiuwers.chatRead(jid)
})
ldr = (`Berhasil membaca ${chats.length} Chat !`)
await skiuwers.sendMessage(from, ldr, MessageType.text, {quoted: ftroli})
console.log(chats.length)
break

case prefix+'clearall':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
let chiit = await skiuwers.chats.all()
for (let i of chiit){
skiuwers.modifyChat(i.jid, 'delete', {
includeStarred: false
})
}
reply('```SUKSES```')
}
break

case prefix+'bc':
case prefix+'bcall':
case prefix+'broadcast':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('```TEXT?```')
ini_bc = args.join(' ')
anu = await skiuwers.chats.all()
if (isMedia && !rip.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
} else {
for (let _ of anu) {
skiuwers.sendMessage(_.jid, `${ini_bc}`, text, { contextInfo: {"forwardingScore":999,"isForwarded":false},sendEphemeral: true, quoted: fkontak })
}
//skiuwers.sendMessage(_.jid, bc, {quoted: ftroli,caption: `*[ BROADCAST ]*\n\n${body.slice(4)}`})
reply('```SUKSES BROADCAST```')
}
break

case prefix+ 'bcprivate': 

case prefix+ 'bcpersonal': 

case prefix+ 'bcpc': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('```TEXT?```')
ini_bc = args.join(' ')

var chatz = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))

for (let _ of chatz) {

skiuwers.sendMessage(_.jid, `${ini_bc}`, text, { contextInfo: {"forwardingScore":999,"isForwarded":false},sendEphemeral: true, quoted: fakebc })

}

reply(`SUKSES BROADCAST PERSONAL CHAT\n\nTotal : ${chatz.length} Chats`)

break

case prefix+ 'bcgroup': 

case prefix+ 'bcgrup': 

case prefix+ 'bcgc': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('```TEXT?```')
var group = await skiuwers.groupMetadata(from)

var member = group['participants']

var mem = []

member.map(async adm => {

mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

})
ini_bc = args.join(' ')

var groupz = await skiuwers.chats.all().filter(v => v.jid.endsWith('g.us'))

let count = 0

for (let _ of groupz) {

//skiuwers.sendMessage(_.jid, `${ini_bc}`, text, { contextInfo: {"forwardingScore":999,"isForwarded":false},sendEphemeral: true, quoted: fakebc })
skiuwers.sendMessage(_.jid, `${ini_bc}`, text,  {quoted:ftroli, contextInfo:{"externalAdReply":{"title": `${botname}`,"body": `SUBSCRIBE YOUTUBE CHANNEL`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.grub}`}}})

}

reply(`SUKSES BROADCAST GROUP\n\nTotal : ${groupz.length} Groups`)

break

case prefix+ 'bcaudio':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !rip.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: fakebc,caption: `\n\n${body.slice(9)}`})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcsticker':
case prefix+'bcstick':
case prefix+'bcstik':
case prefix+'bcgif':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !rip.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, sticker, {quoted: fakebc})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcvideo':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !rip.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, video, {quoted: fakebc,caption: `\n\n${body.slice(9)}`})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcimage':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('```TEXT?```')
bcc = await skiuwers.chats.all().filter(v => v.jid.endsWith('g.us'))

if (isMedia && !rip.message.imageMessage || isQuotedImage) {

let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip

let media = await skiuwers.downloadMediaMessage(encmedia)

for (let i of bcc){

skiuwers.sendMessage(i.jid, media, image, {quoted: fakebc,caption: `\n\n${body.slice(9)}`})

}
reply('```SUKSES BROADCAST```')
}
break

case prefix+ 'bcpcaudio':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
if (isMedia && !rip.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: fakebc,caption: `\n\n${body.slice(9)}`})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcpcsticker':
case prefix+'bcpcstick':
case prefix+'bcpcstik':
case prefix+'bcpcgif':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
if (isMedia && !rip.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, sticker, {quoted: fakebc})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcpcvideo':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
if (isMedia && !rip.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rip
bc = await skiuwers.downloadMediaMessage(encmedia)
for (let _ of anu) {
skiuwers.sendMessage(_.jid, bc, video, {quoted: fakebc,caption: `\n\n${body.slice(9)}`})
}
reply('```SUKSES BROADCAST```')
}
break

case prefix+'bcpcimage':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('```TEXT?```')
bcc = await skiuwers.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))

if (isMedia && !rip.message.imageMessage || isQuotedImage) {

let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rip

let media = await skiuwers.downloadMediaMessage(encmedia)

for (let i of bcc){

skiuwers.sendMessage(i.jid, media, image, {quoted: fakebc,caption: `\n\n${body.slice(9)}`})

}
reply('```SUKSES BROADCAST```')
}
break

case prefix+ 'on':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
offline = false
reply(' ```ANDA TELAH ONLINE``` ')
break
 
case prefix+ 'off':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
offline = true
waktu = Date.now()
anuu = args.join(' ') ? args.join(' ') : 'TIDUR'
alasan = anuu
reply(' ```ANDA TELAH OFFLINE``` ')
break   

case prefix+'out': 
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
skiuwers.groupLeave (from) 
}, 2000)
setTimeout( () => {
skiuwers.updatePresence(from, Presence.composing) 
reply('```AKU PAMIT```')
}, 0)
break

case prefix+ 'endgroup':{
if (!isOwner && !rip.key.fromMe) return   
let endgroup = skiuwers.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of endgroup) {
sendMess(id, 'Hi', null)
await sleep(3000)
skiuwers.groupLeave(id)
}
}
break

case prefix+ 'endgrup':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
skiuwers.groupLeave(from)
}, 2000)
setTimeout( () => {
skiuwers.endGroup(from)
}, 1000) // 1000 = 1s,
reply('*Byee*')
}
break

case prefix+ 'public':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (banChats === false) return reply('```PUBLIC```')
//var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
banChats = false
reply(`「 *PUBLIC-MODE* 」`)
break

case prefix+ 'self':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (banChats === true) return reply('```SELF```')
uptime = process.uptime()
//var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
banChats = true
reply(`「 *SELF-MODE* 」`)
break

case prefix+ 'setnamabot':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Kirim perintah ${prefix}setnamabot <query>\n\nContoh : ${prefix}setnamabot skiuwers`)
skiuwers.updateProfileName(q)
.then((res) => reply('Sukses'))
.catch((err) => reply('Error'))
}
break

case prefix+ 'setbiobot':{
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Kirim perintah ${prefix}setbiobot <query>\n\nContoh : ${prefix}setbiobot skiuwers`)
skiuwers.setStatus(q)
.then((res) => reply('Sukses'))
.catch((err) => reply('Error'))
}
break

case prefix+ 'setppbot':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(rip).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await skiuwers.downloadAndSaveMediaMessage(enmedia)
await skiuwers.updateProfilePicture(botNumber, media)
reply('```SUKSES```')
break
/*
case prefix+ 'setmenu':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`*Penggunaan :* ${prefix}setreply faketoko\n\nList : \n • ftroli\n • ftoko\n • fkontak\n • fvideo\n • flocation\n • fdocument\n • fvoice\n • fsticker\n • finvite\n • fgif \n`)
tetew = q
reply(`Succes Mengganti Conversation Fake : ${tetew}`)
break
*/
case prefix+ 'setreply':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`*Penggunaan :* ${prefix}setreply ItsMeArip`)
fake = q
reply(`Succes Mengganti Conversation Fake : ${fake}`)
break

case prefix+ 'setlimit':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
limitCount = q
reply(`Succes Mengganti Limit : ${q}`)
break

case prefix+ 'setprefix':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`*Penggunaan :*\n • ${prefix}setprefix multi\n • ${prefix}setprefix nopref\n • ${prefix}setprefix #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}
break

case prefix+ 'setthumb': 
case prefix+ 'setthumbnail':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
boij = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(boij)
fs.writeFileSync('./image/thumbnail.jpg', delb)
matanecok = fs.readFileSync('./image/thumbnail.jpg')
await sleep(5000)
reply(`Sukses`)
break

case prefix+ 'setfake': 
case prefix+ 'setfakeimg': 
case prefix+ 'setfakeimage':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
boij = JSON.parse(JSON.stringify(rip).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await skiuwers.downloadMediaMessage(boij)
fs.writeFileSync('./image/fake.jpg', delb)
matanecok = fs.readFileSync('./image/fake.jpg')
await sleep(5000)
reply(`Sukses`)
break

case prefix+ 'join':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
hen = args[0]
if (!q) return reply('Masukan link group')
var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return reply('pastikan link sudah benar!')
var response = await skiuwers.acceptInvite(codeInvite)
reply('```SUKSES JOIN GRUP```')
} catch {
reply('```LINK ERROR [ ! ]```')
}
break

case prefix+ 'term':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(mess.wrongFormat)
exec(q, (err, stdout) => {
if (err) return reply(`${botname} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
break 

case prefix+ 'return':
case prefix+ 'cek':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
return skiuwers.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: rip})
break

/*
// REGISTERED | USER VERIFICATION
*/

case prefix+ 'daftar': case prefix+ 'verify':{
if (isBanned) return reply(mess.only.banned)
if (isRegistered) return reply('KAMU SUDAH MELAKUKAN VERIFIKASI')
const serialUser = createSerial(20)
veri = sender
addRegisteredUser(sender, pushname, time, serialUser)
teks = `
⊙─❲ SUCCES VERIFICATION ❳
│
├⊙ Name : ${pushname}
├⊙ Number : wa.me/${sender.split("@")[0]}
├⊙ Time : ${time}
├⊙ Serial : ${serialUser}
└⊙ Verified : ${_registered.length}
`
//skiuwers.sendMessage(from, captnya, text, {quoted:fkontak, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ✨`,"body": `${setting.fake}`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fake.jpg`),"sourceUrl": `${setting.fakereply}`}}})
buttonss =
[
{buttonId: `${prefix}button`, buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: `${prefix}profile`, buttonText: {displayText: 'PROFILE'}, type: 1},
{buttonId: `${prefix}s&k`, buttonText: {displayText: 'SYARAT & KETENTUAN'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })}
break

/*
// MUTUALAN BOT WHATSAPP
*/

case prefix+ 'mutualan':
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isGroup) return reply(mess.only.private)
anugnumb = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
teks = ` 
Pasangan Ditemukan 🎭
wa.me/${anugnumb}

Next — Temukan Pasangan Baru 🌐`
buttonss =
[
{buttonId: `${prefix}mutualan`, buttonText: {displayText: 'NEXT ➡️'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,
"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })
break

/*
// FITUR ANONYMOUS BOT WHATSAPP
*/

//ANONYMOUS	
case prefix+ 'anonymous': {
if (isGroup) return reply(mess.only.private)
this.anonymous = this.anonymous ? this.anonymous : {}
teks = `Welcome To Anonymous Chat 🎭\n\n${prefix}start - Search Partner\n${prefix}next - Skip Sesi Anonymous\n${prefix}leave - Keluar Sesi Anonymous\n`
buttonss =
[
{buttonId: `${prefix}start`, buttonText: {displayText: 'START'}, type: 1},
{buttonId: `${prefix}next`, buttonText: {displayText: 'NEXT'}, type: 1},
{buttonId: `${prefix}leave`, buttonText: {displayText: 'LEAVE'}, type: 1},
]
buttonMessagee = {contentText: teks,footerText: `© All Creator BotWea | ${ownername}\n` ,buttons: buttonss,headerType: 1}
skiuwers.sendMessage(from, buttonMessagee, MessageType.buttonsMessage,{caption: 'BOTWEA © 2K22',"contextInfo": {text: 'hi',"forwardingScore": 999,isForwarded: true,sendEphemeral: true,"mentionedJid" : [sender]},quoted: fkontak,sendEphemeral: true })}
break
case prefix+ 'mulai': case prefix+ 'start': {
if (isGroup) return reply(mess.only.private)
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
skiuwers.sendMessage(m.chat, `_Kamu masih berada di dalam anonymous chat, menunggu partner_`, text)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await sendMess(room.a, `_Partner Ditemukan_ 🎭`)
room.b = m.sender
room.state = 'CHATTING'
await sendMess(room.b, `_Partner Ditemukan_ 🎭`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await sendMess(m.chat, `_Menunggu Partner_  🌐`)
}
break
}
case prefix+ 'next': case prefix+ 'lanjut': {
if (isGroup) return reply(mess.only.private)
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
await skiuwers.sendMessage(m.chat, `_Kamu sedang tidak berada di dalam anonymous chat_  🌐`, text)
throw false
}
let other = romeo.other(m.sender)
if (other) skiuwers.sendMessage(other, `_Partner meninggalkan chat_ 🎭`, text)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await skiuwers.sendMessage(room.a, `_Partner Ditemukan_ 🎭`, text)
room.b = m.sender
room.state = 'CHATTING'
await skiuwers.sendMessage(room.b, `_Partner Ditemukan_ 🎭`, text)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await skiuwers.sendMessage(m.chat, `_Menunggu Partner_  🌐`, text)
}
break
}
case prefix+ 'keluar': case prefix+ 'leave': {
if (isGroup) return reply(mess.only.private)
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
skiuwers.sendMessage(m.chat, `_Kamu tidak sedang berada di anonymous chat_  🌐`, text)
throw false
}
m.reply('_Sukses Keluar Dari Anonymous Chat_ 🎭')
let other = room.other(m.sender)
if (other) await sendMess(other, `_Partner meninggalkan chat_  🌐`, text)
delete this.anonymous[room.id]
if (command === 'leave') 
if (command === 'keluar') 
break
}
/*
// END FROM CASE || AKHIR DARI SEGALA CASE
*/
//====================================================//
/*
// ANTI TAGS
*/
default:
const listTag = [`${setting.botNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
const partiNum = (type === 'extendedTextMessage') ? rip.message.extendedTextMessage.contextInfo.participant : ''
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (rip.key.fromMe) return
if (!isGroup) return
sendNye = fs.readFileSync('./stik/tagtag.webp')
skiuwers.sendMessage(from, sendNye, sticker, {quoted: fkontak, contextInfo:{forwardingScore: 999, isForwarded: true}})
}
if (budy.includes(`@${setting.botNumber}`)) {
if (antitags === false) return
if (rip.key.fromMe) return
if (!isGroup) return
sendNye = fs.readFileSync('./stik/ngetag.webp')
skiuwers.sendMessage(from, sendNye, sticker, {quoted: fkontak, contextInfo:{forwardingScore: 999, isForwarded: true}})
}

//====================================================//

if (messagesC.includes("menu")) {
if (rip.key.fromMe) return
reply(`Ketik ${prefix}menu untuk mengakses >_<`)
}
if (budy == "P") {
if (rip.key.fromMe) return
reply(`Ketik ${prefix}menu untuk mengakses >_<`)
}
if (budy == "p") {
if (rip.key.fromMe) return
reply(`Ketik ${prefix}menu untuk mengakses >_<`)
}
if (messagesC.includes("assalamualaikum")) {
if (rip.key.fromMe) return
teks = `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
_wa'alaikumussalam wr.wb._`
reply(teks)
}
if (messagesC.includes("pagi")) {
if (rip.key.fromMe) return
reply(`Oke mantap`)
}
if (messagesC.includes("siang")) {
if (rip.key.fromMe) return
reply(`Oke mantap`)
}
if (messagesC.includes("sore")) {
if (rip.key.fromMe) return
reply(`Oke mantap`)
}
if (messagesC.includes("malam")) {
if (rip.key.fromMe) return
reply(`Oke mantap`)
}
if (messagesC.includes("botnya")) {
if (rip.key.fromMe) return
const s = fs.readFileSync('./stik/tag.webp')
skiuwers.sendMessage(from, s, sticker, {quoted: fkontak})
}
if (messagesC.includes("bot")) {
if (rip.key.fromMe) return
const s = fs.readFileSync('./stik/tag.webp')
skiuwers.sendMessage(from, s, sticker, {quoted: fkontak})
}

//====================================================//

if (messagesC.includes("bisakah")){
const bisa = ['Tentu saja bisa! Kamu adalah orang paling homky', 'Gak bisa tod awokawok', 'Hmm gua ga tau ya, coba tanyakan sama google', 'Ya nda tau kok tanya saya', 'Bisa ga ya?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
skiuwers.sendMessage(from, 'Pertanyaan : Bisakah ' + q + '\n\nJawaban : ' + keh, text, { quoted: rip })
}

if (messagesC.includes("kapankah")){
const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
skiuwers.sendMessage(from, 'Pertanyaan : Kapan ' + q + '\n\nJawaban : ' + koh, text, { quoted: rip })
}

if (messagesC.includes("apakah")){
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'YNTKTS', 'Nanya apa?', 'Nanya siapa si?', 'Mungkin', 'Pertanyaan yang bodoh', 'Nanya kok ke saya', 'Saya harus jawab apa?', 'Bisa iya bisa ngga','Saya ga mau jawab, gimana dong?', 'Yang sopan dong kalau bertanya', 'Ulangi bro gak paham']
const kah = apa[Math.floor(Math.random() * apa.length)]
skiuwers.sendMessage(from, 'Pertanyaan : Apakah ' + q + '\n\nJawaban : ' + kah, text, { quoted: rip })
}

/*
// EVAL || FROM END
*/
if (budy.startsWith('$')){
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${botname} : ~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
try {
function Res(res) {
ev = JSON.stringify(res, null, 2)
al = util.format(ev)
if (ev == undefined){
al = util.format(ev)
}
return reply(`${al}`)
}
reply(util.format(eval(`(async () => { ${q} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}}
if (budy.startsWith('>')){
try {
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
return skiuwers.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: rip})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (isBanned) return reply(mess.only.banned)
if (!rip.key.fromMe && !isRegistered) return verify(altar)
if (!isOwner && !isCreator && !rip.key.fromMe) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

//====================================================//
/*
// ANONYMOUS CHAT BOT WHATSAPP
*/
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const match = (prefix instanceof RegExp ? // RegExp Mode?
[[prefix.exec(m.text), prefix]] :
Array.isArray(prefix) ? // Array?
prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof prefix === 'string' ? // String?
[[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
}
if (!isOwner && !isCreator && !rip.key.fromMe && budy != undefined) {
} else {
console.log(color('[ TEXT ]', 'red'), color('[ EXECUTION ]','yellow'), color('[ CREATOR ]','green'))
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
}
//console.log(e)
}
}
/*
// AKHIR DARI SEGALA BATAS KEMAMPUAN MANUSIA 
*/


