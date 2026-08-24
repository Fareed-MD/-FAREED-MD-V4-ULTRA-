const axios = require('axios');
module.exports = { name: 'fb', aliases: ['facebook'], execute: async(sock, msg, args) => {
const from = msg.key.remoteJid;
const url = args[0];
if(!url) return sock.sendMessage(from, { text: `Usage: yahfb https://facebook.com/watch?v=xxx` });
await sock.sendMessage(from, { text: '📘 Facebook video download kar raha hun...' });
try {
const res = await axios.get(`https://api.agatz.xyz/api/fb?url=${url}`);
await sock.sendMessage(from, { video: { url: res.data.data.sd }, caption: `📘 FB Download\n\n👨‍💻 Project by Fareed Bhatti` });
} catch(e) { await sock.sendMessage(from, { text: '❌ FB link error' }); }
} }
