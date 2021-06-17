module.exports = {
  name:"levelsistemi",
  code:`
  Level Sistemi $replaceText[$replaceText[$message[1];aç;Açıldı.Eğer LOG Ayarlamak İsterseniz !levellog #kanal Yazabilirsiniz;-1];kapat;Kapatılmıştır.Açmak İçin Tekrar !levelsistemi aç Yazmanız Yeterlidir;-1]
  $setServerVar[levelsistemi;$replaceText[$replaceText[$message[1];aç;açık;-1];kapat;kapalı;-1]]
  $replaceText[$replaceText[$message[1];aç;;-1];kapat;$resetServerVar[levellog];-1]
  $onlyIf[$checkContains[$message[1];aç;kapat]!=false;Yanlış Girdiniz ! Kullanım !levelsistemi aç/kapat]
   $onlyIf[$message!=;Kullanım !levelsistemi aç/kapat]
  `
}