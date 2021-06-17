module.exports = {
  name:"jail",
  code:`
  $if[$message[1]==at]
  $giveRoles[$mentioned[1];$getServerVar[jail]]
  $wait[2s]
  $takeRoles[$mentioned[1];$joinSplitText[;]]
  $textSplit[$userRoles[$mentioned[1];ids];, ]
  $onlyIf[$userRoles[$mentioned[1]]!=;$giveRoles[$mentioned[1];$getServerVar[jail]]]
  $wait[1s]
  $channelSendMessage[$channelID;{author:Kullanıcı Jail'e Atıldı:$authorAvatar}{color:RED}{thumbnail:$userAvatar[$mentioned[1]]}{description:  
  Jail'e Atılan Kişi $userTag[$mentioned[1]]
  
  Çıkarmak İçin !jail çıkar @kişi}]
  $channelSendMessage[$getServerVar[jaillog];{thumbnail:$userAvatar[$mentioned[1]]}{description:Selam <@$mentioned[1]> Görünüşe Göre Kuralları Çiğnemiş Gibisin.
  
  Yetkili = <@$authorID> Tarafından Jail İşlemi Uygulandı.
  Bütün Rollerine El Konuldu.
  Açtırmak İçin Atan Kişiyle Konuş !}{color:GREEN}]
  $setUserVar[jailroller;$userRoles[$mentioned[1];ids];$mentioned[1]]
  $onlyIf[$mentioned[1]!=;Jail'e Atılacak Kişiyi Etiketle !]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olmazsa Kullanıcıyı Jaile Atamam}]
  $onlyIf[$getServerVar[jail]!=yok;{color:RED}{author:Jail Rolü Ayarlı Değil !jailayarla Kullanınız:$authorAvatar}]
 
  $endif
  
  $if[$message[1]==çıkar]
  $setUserVar[jailroller;;$mentioned[1]]
  $wait[1s]
  $giveRoles[$mentioned[1];$joinSplitText[;]]
  $textSplit[$getUserVar[jailroller;$mentioned[1]];, ]
  $onlyIf[$getUserVar[jailroller;$mentioned[1]]!=;]
  $wait[1s]
  $takeRoles[$mentioned[1];$getServerVar[jail]]
  $wait[1s]
  $channelSendMessage[$channelID;{author:Kullanıcı Jailden Çıkartıldı:$authorAvatar}{color:GREEN}{description:
  Jailden Çıkarılan Kişi $userTag[$mentioned[1]]}{thumbnail:$userAvatar[$mentioned[1]]}]
  $channelSendMessage[$getServerVar[jaillog];{thumbnail:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> Kişisinin Jaili Çıkarıldı !.
  
  Yetkili = <@$authorID> Tarafından UnJail İşlemi Uygulandı.
  Bütün Rollerine El Konuldu.
  Açtırmak İçin Atan Kişiyle Konuş !}{color:GREEN}]
  
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[jail]]!=false;Kişi Jail'de Bulunmamaktadır !]
    $onlyIf[$mentioned[1]!=;Jailden Çıkarılacak Kişiyi Etiketle !]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olmazsa Kullanıcıyı Jailden Çıkaramam}]
  $onlyIf[$getServerVar[jail]!=yok;{color:RED}{author:Jail Rolü Ayarlı Değil !jailayarla Kullanınız:$authorAvatar}]
  $elseIf[$message[1]==]
  Kullanılabilir Seçenekler
  !jail <at/çıkar> @kullanıcı
  $endelseIf
  $endif
  `
}