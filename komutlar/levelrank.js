module.exports = {
  name:"rank",
  code:`
  $color[RANDOM]
  $author[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] Kişisinin Bilgisi;$userAvatar[$mentioned[1;yes]]]
  $description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
  Şuanki Leveli = $getUserVar[level;$mentioned[1;yes]]
  Şuanki XP'si = $getUserVar[xp;$mentioned[1;yes]]
  XP Değeri = $getUserVar[xpdeğer;$mentioned[1;yes]]
  Sonraki Seviyesinin Değeri = $getUserVar[sonrakixp;$mentioned[1;yes]]]
  $footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
  $addTimestamp
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]
  `
}