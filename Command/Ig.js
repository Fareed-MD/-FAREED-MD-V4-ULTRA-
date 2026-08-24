const axios = require('axios');
module.exports = { name: 'ig', aliases: ['insta'], execute: async(sock, msg, args) => {
const from = msg.key.remoteJid;
const url = args[0];
if(!url) return sock.sendMessage(from, { text: `Usage: yahig https://instagram.com/reel/xxx` });
await sock.sendMessage(from, { text: '📸 Instagram video download kar raha hun...' });
try {
const res = await axios.get(`https://api.agatz.xyz/api/ig?url=${url}`);
const data = res.data;
if(data.video) {
await sock.sendMessage(from, { video: { url: data.video }, caption: `📸 IG Download\n\n👨‍💻 Project by Fareed Bhatti` });
} else if(data.image) {
await sock.sendMessage(from, { image: { url: data.image }, caption: `📸 IG Download\n👨‍💻 Project by Fareed Bhatti` });
}
} catch(e) { await sock.sendMessage(from, { text: '❌ IG link error. Private na ho' }); }
} }
