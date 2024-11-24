// BASE CREATE BY Ruztan
// Recode FallZx

// Osaragi V1.0
// YT: QyuuNee

require("../setting/settings")
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const newowner = JSON.parse(fs.readFileSync('./all/database/owner.json'))
module.exports = async (osaragi, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { Client } = require('ssh2');
const fsx = require("fs-extra")
const jam = moment.tz('Asia/Makassar').format('HH:mm:ss')
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await osaragi.decodeJid(osaragi.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const sender = m.key.fromMe ? (osaragi.user.id.split(':')[0]+'@s.whatsapp.net' || osaragi.user.id) : (m.key.participant || m.key.remoteJid)
const groupMetadata = m.isGroup ? await osaragi.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('../all/function.js')
const { ssweb, igstalk, tts, mediafire, ytmp3 } = require("../scrape/screaper.js")
const { remini } = require('../scrape/remini.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("../all/converter.js")
const b = fs.readFileSync("./media/menu.mp3")
//const isPremium = premium.includes(m.sender)*/
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('../all/security/adiwajs')
const config = require('../all/security/adiwConfig')
async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, osaragi.authState.creds.pairingCode);
            await reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}
//database
//const AntiSpam = db.data.antispam
/////////////////////////////////////////////////////////////////////////

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}
async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
          
main();
if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(osaragi.authState.creds.pairingCode);
}
if (!fs.existsSync('./all/approval')) {
osaragi.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'Connect lost!\nHarap Mendapatkan persetujuan dari QyuuNee*' })
fs.writeFileSync('./all/approval', '', 'utf8');
}
//=========== MESSAGE ===========//
/*if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), color(`\nFROM`, `blue`), color(`${senderNumber}`, `cyan`), color(`Text :`, `blue`), color(`🗣️ ${cmd}`, `white`))
}*/
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 FROM`, `blue`), color(`${senderNumber}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 TEXT :`), color(`🗣️ ${cmd}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 WAKTU :`), color(`${jam}`, `cyan`), color(`\n---------------------------`, `green`))
}

osaragi.autoshalat = osaragi.autoshalat ? osaragi.autoshalat : {}
    let id = m.chat
    if (id in osaragi.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        osaragi.autoshalat[id] = [
            osaragi.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./media/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete osaragi.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
//========= FAKE QUOTED =========//
const reply = (teks) => {
osaragi.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363202832071259@newsletter',
               newsletterName: "🕊️ Giveaway (^^)/~~~",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `✿ おさらぎ 1.0 - LOLO ✿`,
        body: `Sewa? Chat Owner :3`,
        thumbnailUrl: `https://files.catbox.moe/sri4cd.jpg`,
        sourceUrl: "https://wa.me/6285656715298",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: qkontak })}
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "Osaragi" }}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Terimakasih telah order"}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `Osaragi`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285656715298:+62 856-5671-5298\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Osaragi"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//========== FUNCTION ===========//
var ppuser
try {
ppuser = await osaragi.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
/*for (let ruztanX of imagenya){
if (budy === ruztanX) {
let imagebuffy = fs.readFileSync(`./testi/${ruztanX}.jpg`)
osaragi.sendImage(m.chat, result, '', m)
osaragi.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}*/

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

    async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
    }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

switch (command) {
case "menu":{
const owned = owner + "@s.whatsapp.net"
let awal = `▧ 「 *I N F O  B O T* 」
    
   ☍ Creator : *@${owned.split("@")[0]}*
   ☍ Runtime : *${runtime(process.uptime())}*
   ☍ Mode Bot : *${osaragi.public ? `Public Mode` : `Self Mode`}*

▧ 「 *I N F O  U S E R* 」

   ☍ Name : *${pushname}*
   ☍ Number : *${m.sender.split('@')[0]}*
   ☍ Status : *${isCreator ? "Owner 🥶" : "User ⭐"}*
   
▧ 「 *S U B - M E N U* 」
│ ∘  aimenu ( *Chat/Image AI* )
│ ∘  ownermenu ( *Menu Owner* )
│ ∘  groupmenu ( *Menu Grup* )
│ ∘  downloadmenu ( *Menu Download* )
│ ∘  searchmenu ( *Menu Pencarian* )
│ ∘  toolsmenu ( *Menu Alat* )
╰──────────────━`
osaragi.sendMessage(m.chat, {
       image: { url: 'https://files.catbox.moe/toymu7.jpg'},
       caption: awal,
    contextInfo: {
      mentionedJid: [m.sender, owned],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true, 
        title: `👋🏻 Hai ${pushname}`,
        body: "✿ おさらぎ 1.0 - LOLO ✿",
        thumbnailUrl: thumb,
        sourceUrl: "https://chat.whatsapp.com/K0XFp2vrMCQ0k1h1Kj7ikh",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
await sleep(1500)
osaragi.sendMessage(m.chat, { audio: b, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })
}
break
case "searchmenu":{
let menu = `
┏ ⪻ 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮 ≫
┃- spotify
┃- pin
┃- ttstalk
┃- vtuber
┃- webtoon
┃- film
┃- filmsearch
┃- anilist
┃- play
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "downloadmenu":{
let menu = `
┏ ⪻ 𝐃𝐨𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
┃- igdl
┃- gdrive
┃- igmp4
┃- tiktok
┃- tt2
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case "aimenu":{
let menu = `
┏ ⪻ 𝐀𝐢 𝐌𝐞𝐧𝐮 ≫
┃- turbo
┃- txt2img
┃- morphic
┃- aio2
┃- gpt4
┃- autoai ( Character-AI )
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "ownermenu":{
let menu = `
┏ ⪻ 𝐎𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
┃- block
┃- unblock
┃- addfile2
┃- autoread
┃- setppbot
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "toolsmenu":{
let menu = `
┏ ⪻ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮 ≫
┃- remini/hd
┃- faketweet
┃- nglspam
┃- tr
┃- trackip
┃- spam-pairing
┃- get
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "groupmenu":{
let menu = `
┏ ⪻ 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 ≫
┃- welcome
┃- statusgc
┃- hidetag
┃- kick
┃- delete
┃- demote
┃- promote
┃- open
┃- close 
┃- kickall
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

    case 'readchange': case 'autoread':{
if (!isCreator) return 
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
    }
        break

case 'play': {
    if (!text) return reply(`Contoh: ${prefix + command} sephia`);
    reply("loanjing")
    try {
        const search = require("yt-search");
        const { youtube } = require("btch-downloader");
        const axios = require("axios");

        async function getBuffer(url) {
            const res = await axios({
                method: 'get',
                url,
                responseType: 'arraybuffer'
            });
            return res.data;
        }

        const look = await search(text);
        const convert = look.videos[0];
        if (!convert) return reply('Audio Tidak Ditemukan');
        if (convert.seconds >= 3600) {
            return reply('Audio is longer than 1 hour!');
        }

        let audioUrl;
        try {
            audioUrl = await youtube(convert.url);
        } catch (e) {
            reply("Retrying...");
            audioUrl = await youtube(convert.url);
        }

        const thumbBuffer = await getBuffer(convert.thumbnail);
        await osaragi.sendMessage(m.chat, {
            audio: {
                url: audioUrl.mp3 // Menggunakan audio secara langsung
            },
            mimetype: 'audio/mpeg', // MIME Type tetap
            ptt: false, // Set false jika bukan audio push-to-talk
            jpegThumbnail: thumbBuffer, // Tambahkan thumbnail
            caption: `🎵 *${convert.title}*\n📽 *Source*: ${convert.url}`
        }, {
            quoted: m
        });
    } catch (e) {
        reply(`*Error:* ${e.message}`);
    }
};
break;
case 'block':
if (!isCreator) return reply(mess.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await osaragi.updateBlockStatus(users, "block")
reply(`Sukses block user`)
} else {
reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await 
