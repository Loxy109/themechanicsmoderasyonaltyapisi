module.exports = {
  name:"levellog",
  code:`
  Ayarlanan LOG Kanalı \`\`$channelName[$mentionedChannels[1]]\`\`
  Artık Buraya Level Atlayanların Detayı Verilecektir.
  $setServerVar[levellog;$mentionedChannels[1]]
  
  
  $suppressErrors[Böyle Bir Kanal Bulamadım Lütfen Tekrar Deneyiniz.]
  $onlyIf[$message!=;Bir Kanal Girmelisin !]
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;Level Sistemini Açmadan LOG Kanalını Ayarlayamazsın !]
  `
}