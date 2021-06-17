module.exports = {
  name:"kick",
  code:`
  $color[GREEN]
  $author[$userTag[$mentioned[1]] Sunucudan Atılmıştır;$userAvatar[$mentioned[1]]]
  $footer[Atılma Sebebi $replaceText[*$noMentionMessage*;**;Belirtilmemiş];$authorAvatar]
  $kick[$mentioned[1];$replaceText[*$noMentionMessage*;**;Belirtilmemiş]]
  $onlyIf[$rolePosition[$highestRole]<$rolePosition[$highestRole[$mentioned[1]]];{color:RED}{author:Seninle Eşit Yada Üstte Olan Rolden Birisini Atamam !:$authorAvatar}]
  $onlyIf[$mentioned[1]!=;{color:RED}{author:Atmam İçin Birini Etiketle:$authorAvatar}]
  $onlyPerms[kick;{color:RED}{author:Sunucuda \`Üyeleri At\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[kick;{color:RED}{author:Sunucuda \`Üyeleri At\` Yetkim Olmazsa Kullanıcıyı Atamam}]
  $suppressErrors[{color:RED}{author:Kişi Sunucuda Değil !:$authorAvatar}]
  `
}