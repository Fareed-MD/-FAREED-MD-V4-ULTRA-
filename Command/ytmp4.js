const axios = require('axios');
module.exports = { name: 'ytmp4', aliases: ['video'], execute: async(sock, msg, args) => {
const from = msg.key.remoteJid;
const url = args[0];
if(!url) return sock.sendMessage(from, { text: `Usage: yahytmp4 https://youtube.com/watch?v=xxx` });
await sock.sendMessage(from, { text: '🎬 MP4 download kar raha hun...' });
try {
const res = await axios.get(`https://api.agatz.xyz/api/ytmp4?url=${url}`);
await sock.sendMessage(from, { video: { url: res.data.url }, caption: res.data.data.title + '\n\n👨‍💻 Project by Fareed Bhatti' });
} catch(e) { await sock.sendMessage(from, { text: '❌ Link galat hai ya error hai' }); }
} }
