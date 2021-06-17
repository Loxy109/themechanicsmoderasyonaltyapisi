module.exports = {
  name:"ayarlar",
  code:`
  $color[GREEN]
  $description[$thumbnail[$authorAvatar]
  Caps-Engel: $replaceText[$replaceText[$getServerVar[capsengel];kapalı;Bu Sistem Kapalıdır ❌];açık;Bu Sistem Açıktır :white_check_mark:]
  Spam-Engel: $replaceText[$replaceText[$getServerVar[capsengel];kapalı;Bu Sistem Kapalıdır ❌];açık;Bu Sistem Açıktır :white_check_mark:]
    
  Jail Durumu: $replaceText[$replaceText[$checkCondition[$getServerVar[jail]!=yok];false;Bu Sistem Kapalıdır ❌];true;Bu Sistem Açıktır :white_check_mark:
  *Ayarlanmış Jail Rolü: <@&$getServerVar[jail]>
  Ayarlanmış Jail Log Kanalı: <#$getServerVar[jaillog]>*] 
  
  Mute Durumu: $replaceText[$replaceText[$checkCondition[$getServerVar[mute]!=yok];false;Bu Sistem Kapalıdır ❌];true;Bu Sistem Açıktır :white_check_mark:
  *Ayarlanmış Mute Rolü: <@&$getServerVar[mute]>
  Ayarlanmış Mute Log Kanalı: <#$getServerVar[mutelog]>*] 
  
  Otorol Durumu: $replaceText[$replaceText[$checkCondition[$getServerVar[otorol]!=yok];false;Bu Sistem Kapalıdır ❌];true;Bu Sistem Açıktır :white_check_mark:
  *Ayarlanmış Otorol Rolü: <@&$getServerVar[otorol]>
  Ayarlanmış Otorol Kanalı: <#$getServerVar[otorollog]>*] 
  
  Davet Sistemi: $replaceText[$replaceText[$checkCondition[$getServerVar[gkanal]$getServerVar[çkanal]!=yokyok];false;Bu Sistem Kapalıdır ❌];true;Bu Sistem Açıktır :white_check_mark:
  *Ayarlanmış Giriş Kanalı: <#$getServerVar[gkanal]>
  Ayarlanmış Çıkış Kanalı: <#$getServerVar[çkanal]>*] 
  
  Level Sistemi: $replaceText[$replaceText[$getServerVar[levelsistemi];kapalı;Bu Sistem Kapalıdır ❌];açık;Bu Sistem Açıktır :white_check_mark:
  *Ayarlanmış XP Değeri: $getServerVar[xpdeğer]
  Ayarlanmış Log Kanalı: <#$getServerVar[levellog]>*]
  
  Mesaj Log: $replaceText[$replaceText[$checkCondition[$getServerVar[mesajlog]!=];false;Ayarlanmamış ❌];true; <#$getServerVar[mesajlog]> Olarak Ayarlanmış :white_check_mark:]
  
  Ban Log: $replaceText[$replaceText[$checkCondition[$getServerVar[banlog]!=];false;Ayarlanmamış ❌];true; <#$getServerVar[banlog]> Olarak Ayarlanmış :white_check_mark:]
  
  ]
  
  `
}