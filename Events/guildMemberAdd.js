const config = new require('../config.json');

module.exports = async (client, Discord, member) => {
  const { createCanvas, loadImage, Canvas } = require('canvas');

  //AUTO ROLE
  const role = member.guild.roles.cache.find((role) => role.name === '「🚻」 Miembro');
  member.roles.add(role);


  //JOIN MESSAGE CANVA
  const canvas = createCanvas(1200, 600);
  const ctx = canvas.getContext('2d');


  //Background
  const background = await loadImage('./images/welcome.png');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  canvas.registerFont('../fonts/OCER.TTF', {family: 'OCR'});

  //Letras de bienvenida
  ctx.font = '48px "OCR"';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(`¡Bienvenido a MysthicArk!`, canvas.width / 2, canvas.height / 3.6);

  ctx.font = '48px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(`Disfruta la estadía`, canvas.width / 2, canvas.height / 1.3);

  //Avatar Display
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.clip();


  const avatar = await loadImage(member.user.displayAvatarURL({size: 1024}).replace(".webp", ".png"));
  ctx.drawImage(avatar, canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200);

  const attachmentFile = new Discord.AttachmentBuilder(canvas.toBuffer(), {name: 'welcome.png'});

  const channel = client.channels.cache.get(config.channelWelcome);
  if(!channel) return console.log("El canal no existe.");

  channel.send({
    files: [attachmentFile]
  });
};