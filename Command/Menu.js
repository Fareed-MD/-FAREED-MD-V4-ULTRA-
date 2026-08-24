module.exports = { name: 'menu', aliases: ['help'], execute: async(sock, msg, args, isOwner, PREFIX, CHANNEL) => { 
const menu = `╭───〔 *FAREED-MD V4 ULTRA* 〕───⬣
│ 👑 Owner: Fareed Bhatti
│ 📞 923415064640
│ ⚡ Session: boss_MD
│ 📌 Prefix: ${PREFIX}
│ 📢 ${CHANNEL}
╰───────────────⬣

╭───〔 *AI* 〕───⬣
│ ${PREFIX}ai ${PREFIX}imagine ${PREFIX}voice ${PREFIX}gpt
╰───────────────⬣
╭───〔 *Fun* 〕───⬣
│ ${PREFIX}joke ${PREFIX}shayari ${PREFIX}angry ${PREFIX}fact ${PREFIX}quote ${PREFIX}islamic
╰───────────────⬣
╭───〔 *Games* 〕───⬣
│ ${PREFIX}truth ${PREFIX}dare ${PREFIX}coin ${PREFIX}guess
╰───────────────⬣
╭───〔 *Tools* 〕───⬣
│ ${PREFIX}sticker ${PREFIX}toimg ${PREFIX}weather ${PREFIX}url ${PREFIX}ss
╰───────────────⬣
╭───〔 *Group* 〕───⬣
│ ${PREFIX}kick ${PREFIX}promote ${PREFIX}tagall ${PREFIX}hide
╰───────────────⬣
╭───〔 *Owner* 〕───⬣
│ ${PREFIX}broadcast ${PREFIX}ban ${PREFIX}ping ${PREFIX}eval
╰───────────────⬣

╭───〔 *CREDIT* 〕───⬣
│ 👨‍💻 Project by: Fareed Bhatti
│ 🤖 Bot Name: Fareed-MD V4
╰───────────────⬣`;
await sock.sendMessage(msg.key.remoteJid, { text: menu }); } }
