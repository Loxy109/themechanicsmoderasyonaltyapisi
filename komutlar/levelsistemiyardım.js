module.exports = {
  name:"levelyardım",
  code:`
  $color[GREEN]
  $description[$thumbnail[$authorAvatar]
  !levelsistemi | <aç/kapat> Level Sistemini Açmanıza Yarar
  
  !rank Kişinin Durumunu Gösterir
  
  !ekle @kişi <level/xp/xpdeğer/sonrakixp> | Belirtilen Miktarda Kişiye Belirtilmiş Şey Eklenir
  
  !levellog <#yeni log kanalı> | Log Kanalı Ayarlarsınız Herşey Buraya Atılır (isteğe bağlıdır)
  ]
  
  $onlyIf[$message==;]
  `
}