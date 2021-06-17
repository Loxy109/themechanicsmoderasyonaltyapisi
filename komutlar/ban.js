module.exports = {
  name:"ban",
  code:`
  $if[$isNumber[$message[1]]==false]
  $color[GREEN]
  $author[$userTag[$mentioned[1]] Sunucudan Yasaklanmıştır;$userAvatar[$mentioned[1]]]
  $footer[Ban Sebebi $replaceText[*$noMentionMessage*;**;Belirtilmemiş];$authorAvatar]
  $ban[$mentioned[1];$replaceText[*$noMentionMessage*;**;Belirtilmemiş]]
  $onlyIf[$rolePosition[$highestRole]<$rolePosition[$highestRole[$mentioned[1]]];{color:RED}{author:Seninle Eşit Yada Üstte Olan Rolden Birisini Yasaklayamam !:$authorAvatar}]
  $onlyIf[$mentioned[1]!=;{color:RED}{author:Yasaklamam İçin Birini Etiketle Yada ID Gir:$authorAvatar}]
  $onlyPerms[ban;{color:RED}{author:Sunucuda \`Üyeleri Yasakla\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[ban;{color:RED}{author:Sunucuda \`Üyeleri Yasakla\` Yetkim Olmazsa Kullanıcıyı Yasaklayamam}]
  $endif
  $if[$isNumber[$message[1]]==true]
  $color[GREEN]
  $author[$userTag[$message[1]] Sunucudan Yasaklanmıştır;$userAvatar[$message[1]]]
  $footer[Ban Sebebi $replaceText[*$message[2]*;**;Belirtilmemiş];$authorAvatar]
  $ban[$message[1];$replaceText[*$message[2]*;**;Belirtilmemiş]]
  $onlyPerms[ban;{color:RED}{author:Sunucuda \`Üyeleri Yasakla\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[ban;{color:RED}{author:Sunucuda \`Üyeleri Yasakla\` Yetkim Olmazsa Kullanıcıyı Yasaklayamam}]
  $suppressErrors[{color:RED}{author:Böyle ID'li Birisi Bulunamadı !:$authorAvatar}]
  $endif
  `
}