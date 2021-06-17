module.exports = {
  name:"davetler",
  code:`
  $color[GREEN]
  $author[Sorgulanan Kişi • $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
  $description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
    Toplam Daveti $sub[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]] (+$userInfo[real;$mentioned[1;yes]] Gerçek | -$userInfo[fake;$mentioned[1;yes]] Sahte)
  ]
  $footer[Sorgulayan $username;$authorAvatar]
  `
}