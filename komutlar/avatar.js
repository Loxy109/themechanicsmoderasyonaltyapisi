module.exports = {
  name:"avatar",
  code:`
  $footer[Sorgulayan Kişi: $userTag[$authorID];$authorAvatar]
  $color[GREEN]
  $author[$userTag[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $description[
  Avatar İndirme Seçenekleri;
  $replaceText[$replaceText[$checkContains[$userAvatar[$mentioned[1;yes]];.gif];true;[GİF HD]($userAvatar[$mentioned[1;yes]])];false;[WEBP HD]($userAvatar[$mentioned[1;yes]]) | [PNG HD]($replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png]) | [JPG HD]($replaceText[$userAvatar[$mentioned[1;yes]];.webp;.jpg])]
  ]
  $image[$userAvatar[$mentioned[1;yes]]]
  $dateStamp`
}