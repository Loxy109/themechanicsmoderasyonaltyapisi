module.exports = {
  name:"yardım",
  code:`
  $color[GREEN]
  $description[$thumbnail[$authorAvatar]
  !capsengel <aç/kapat> | Yazılan Cümlenin %50'si Büyük Harf İçeriyorsa Otomatik Olarak Siler
  !capsengel <aç/kapat> | Kişi 15 Saniye İçinde 3 Kez Yazarsa Uyarır 5 Kez Yazarsa 1 Dakikalık Ban İşlemine Tabi Edilir
  
  !jailayarla <kapat/@rol etiket> - !jail <at/çıkar> @kişi | Ayarlanan Rolü Kullanıcıya Verip Tüm Rolleri Alınır.Çıkarıldığınıda Rolleri Geri Verilir
  
  !muteayarla <kapat/@rol etiket> - !mute <at/çıkar> @kişi | Ayarlanan Rolü Odalarda Mesaj Yazması Engelli Olması Lazım Çünkü Bu Sadece Ayarlanan Rolü Verir
  
  !ban <Kullanıcı ID/@kişi> | Etiketlenen Kişiyi Sunucudan Yasaklar - ID'si Giren Kişiye Force-Ban Atar
  
  !kick @kişi | Etiketlenen Kişiyi Sunucudan Atar
  
  !avatar <(isteğe bağlı) @kişi> | Etiketlediğiniz Kişinin Avatarını Ve İndirme Linkini Verir (Etiket Atmaz İseniz Kendi Avatarınızı)
  
  !otorol | Eğer Kapat Yazarsanız Açık Olan Sistem Kapanır / Yeni Rol ve Kanal Etiketlediğinizde Otorol Ayarlanmış Olur
  
  !davetlog <gkanal/çkanal> | Ayarlanan Kanal Kimin Gelip Kimin Davet Ettiğini ve O kişinin kaç daveti olduğunu gösterir
  !davetlerim <(isteğe bağlı)@kişi> | Etiketlediğininiz Kişinin davet bilgisini gösterir | Etiket atmadığınız taktirde sizin davet sayınızı gösterir
  
  !kilitle <(isteğe bağlı)#kanal> <süre> | Belirlenen Süre Kanalı Kilitli Tutar (@everyone Yetkisine Kapatır)
  
  !levelyardım Yazarak Detaylı Bilgi Alın
  
  !ayarlar Bunu Kullandığınızda Ayarlanabilir Komutların Aktif Deaktif Ve Ayarlanmış Şekilleri Gösterilir
  ]
  
  $onlyIf[$message==;]
  `
}