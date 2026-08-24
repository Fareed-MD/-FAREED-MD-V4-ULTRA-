module.exports = { name: 'owner', execute: async(sock, msg) => { await sock.sendMessage(msg.key.remoteJid, { text: `👑 Owner: Fareed Bhatti\n📞 923415064640\n🤖 Project: Fareed-MD V4` }); } }
