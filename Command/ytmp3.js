const axios = require('axios');
module.exports = { name: 'ytmp3', aliases: ['song'], execute: async(sock, msg, args) => {
const from = msg.key.remoteJid;
const url = args[0];
if(!url) return sock.sendMessage(from, { text: `Usage: yahytmp3 https://youtube.com/watch?v=xxx` });
await sock.sendMessage(from, { text: '🎵 MP3 download kar raha hun...' });
try {
const res = await axios.get(`https://api.agatz.xyz/api/ytmp3?url=${url}`);
await sock.sendMessage(from, { audio: { url: res.data.url }, mimetype: 'audio/mpeg', fileName: res.data.title + '.mp3' });
} catch(e) { await sock.sendMessage(from, { text: '❌ Link galat hai ya error hai' }); }
} }
