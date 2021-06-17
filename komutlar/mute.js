module.exports = {
  name:"mute",
  code:`
  $if[$message[1]==at]
  $giveRoles[$mentioned[1];$getServerVar[mute]]
  $channelSendMessage[$channelID;{author:Kullanıcıya Mute Atıldı:$authorAvatar}{color:RED}{thumbnail:$userAvatar[$mentioned[1]]}{description:
  Mute Atılan Kişi $userTag[$mentioned[1]]
  
  Çıkarmak İçin !mute çıkar @kişi}]
 
 $channelSendMessage[$getServerVar[mutelog];{author:Kullanıcıya Mute Atıldı:$authorAvatar}{color:RED}{thumbnail:$userAvatar[$mentioned[1]]}{description:
  Mute Atılan Kişi $userTag[$mentioned[1]]
  }]
  $onlyIf[$mentioned[1]!=;Mute Atılacak Kişiyi Etiketle !]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olmazsa Kullanıcıya Mute Atamam}]
  $onlyIf[$getServerVar[mute]!=yok;{color:RED}{author:Mute Rolü Ayarlı Değil !muteayarla Kullanınız:$authorAvatar}]
 
  $endif
  
  $if[$message[1]==çıkar]
  $takeRoles[$mentioned[1];$getServerVar[mute]]
  $channelSendMessage[$channelID;{footer:Kullanıcıdan Mute Alındı:$authorAvatar}{color:GREEN}{author:
  Muteden Çıkarılan Kişi $userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}]
  
  $channelSendMessage[$getServerVar[mutelog];{author:Kullanıcıya Mute Atıldı:$authorAvatar}{color:GREEN}{thumbnail:$userAvatar[$mentioned[1]]}{description:
  $userTag[$mentioned[1]] Kişisinin Mutesi Kaldırıldı !
  }]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[mute]]!=false;Kişi Muteli Değil !]
    $onlyIf[$mentioned[1]!=;Muteden Çıkarılacak Kişiyi Etiketle !]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olmazsa Kullanıcıyı Muteden Çıkaramam}]
  $onlyIf[$getServerVar[mute]!=yok;{color:RED}{author:Mute Rolü Ayarlı Değil !mute Kullanınız:$authorAvatar}]
  $elseIf[$message[1]==]
  Kullanılabilir Seçenekler
  !mute <at/çıkar> @kullanıcı
  $endelseIf
  $endif
  `
}