const axios = require('axios');
module.exports = { name: 'tiktok', aliases: ['tt'], execute: async(sock, msg, args) => {
const from = msg.key.remoteJid;
const url = args[0];
if(!url) return sock.sendMessage(from, { text: `Usage: yahtiktok https://tiktok.com/@xxx/video/xxx` });
await sock.sendMessage(from, { text: '📱 TikTok video download ho rahi hai...' });
try {
const res = await axios.get(`https://api.agatz.xyz/api/tiktok?url=${url}`);
await sock.sendMessage(from, { video: { url: res.data.play }, caption: `📱 TikTok Download\n\n👨‍💻 Project by Fareed Bhatti` });
} catch(e) { await sock.sendMessage(from, { text: '❌ TikTok link error' }); }
} }
