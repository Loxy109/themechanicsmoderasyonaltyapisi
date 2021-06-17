var fs = require('fs') 
const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  token:"NzgwNzM4MDQ2MDU1Mjg0Nzk2.X7zc9w.6868z9F40SIuMfg-EV_KExNve68", //buraya token yazmayın .env de TOKEN yazan kısmın altı boş olmakta onun altına bot token yazmanız yeterlidir
  prefix: "!",
  mobile: true,//burayı false yaparsanız botunuz telefonda olarak gözükmez böyle durursa telefonda gözükür (hawli durur)
  fetchInvites: true//buraya ellemeyin
})

bot.onMessage()
bot.onJoined()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed
  })
} 

bot.variables({
  capsengel:"kapalı",
  spamengel:"kapalı",
  spam:"-1",
  jail:"yok",
  jailroller:"",
  jaillog:"yok",
  mute:"yok",
  otorol:"yok",
  otorollog:"yok",
  gkanal:"yok",
  çkanal:"yok",
  xpdeğer:"1",
  xp:"0",
  level:"0",
  sonrakixp:"500",
  levelsistemi:"kapalı",
  levellog:"",
  mesajlog:"yok",
  mutelog:"yok",
  banlog:"yok"
})

bot.command({
  name:"eval",
  code:`
  $eval[$message]
  $argsCheck[>1;Deneyeceğim Kodu Yazmalısın !]
  $onlyForIDs[$botOwnerID;Üzgünüm Bu Geliştiricim Olan $userTag[$botOwnerID] Kişisine Özeldir !]
  `
})
bot.command({
  name:"$alwaysExecute",
  code:` 
  $deletecommand
  $deleteIn[3s]
  $color[RED]
  $author[Lütfen Büyük Harf Kullanmayınız !;$authorAvatar]
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=50;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[capsengel]!=kapalı;]
  $suppressErrors
  `,
  nonPrefixed: true
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $setUserVar[spam;-1;$authorID]
  $wait[15s]
  $setUserVar[spam;$sum[$getUserVar[spam;$authorID];1];$authorID]
  `
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $deleteIn[3s]
  $color[RED]
  $author[Spam Yapmayı Kes Yoksa Atılacaksın !$userTag[$authorID];$authorAvatar]
  $onlyIf[$getUserVar[spam;$authorID]>2;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[spamengel]!=kapalı;]
  `
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $dm[$authorID]
  $getServerInvite Sunucusundan Yasağın Kaldırıldı Birdaha Yapma !
  $wait[1m]
  $ban[$authorID;Spam Yapmaya Devam Etti !]
  $channelSendMessage[$channelID;{color:RED}{author:$userTag[$authorID] Spam Yaptığı Devam Ettiği İçin Yasaklandı 1 Dakika Sonra Açılacaktır:$authorAvatar}]
  $onlyIf[$getUserVar[spam;$authorID]>5;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[spamengel]!=kapalı;]
  $onlyBotPerms[ban;{color:RED}{author:Ban Yetkim Olmadığı İçin Kullanıcı Yasaklanamadı !:$userAvatar[$clientID]}]  `
})

bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        $userTag[$authorID] Sunucuya Katıldı.
$roleName[$getServerVar[otorol]] Rolü Başarıyla Verildi
$membersCount Kişiyiz :tada:
        $onlyIf[$getServerVar[otorollog]!=kapat]
        $onlyBotPerms[manageroles;{color:RED}{author:Bende Rolleri Yönet Yetkisi Yok !:$authorAvatar}]
        $onlyIf[$isBot[$authorID]!=true;]
        `
})
bot.joinCommand({
        channel: "$getServerVar[gkanal]",
        code: `
        <@$authorID> Hoşgeldin !.
Seni Davet Eden Kişi $userTag[$userInfo[inviter]] Kişinin Toplam Daveti $userInfo[real;$userInfo[inviter]]
        $suppressErrors[$userTag[$authorID] Kişisini Kim Davet Etti Bulamıyorum]
        `
        })

bot.leaveCommand({
        channel: "$getServerVar[çkanal]",
        code: `
        $username#$discriminator Ayrıldı !.
Seni Davet Eden Kişi $userTag[$userInfo[inviter]] Kişinin Toplam Daveti $userInfo[real;$userInfo[inviter]] 
        $suppressErrors[$userTag[$authorID] Kişisini Kim Davet Etti Bulamıyorum]
    `
})
bot.onLeave()

bot.command({
  name:"$alwaysExecute",
  code:`$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getUserVar[xpdeğer;$authorID]];$authorID]
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]`
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $cooldown[5s]
  🎉 Level Atlandı !
  🎉 Şuanki Levelin $sum[$getUserVar[level;$authorID];1]
  🎉 Tebrikler <@$authorID>
  
  $setUserVar[level;$sum[$getUserVar[level;$authorID];1];$authorID]
  $setUserVar[sonrakixp;$multi[$getUserVar[sonrakixp;$authorID];2];$authorID]
  $setUserVar[xpdeğer;$sum[$getUserVar[xpdeğer;$authorID];1];$authorID]
  
  
  $channelSendMessage[$getServerVar[levellog];{author:BİRİSİ LEVEL ATLADI:$authorAvatar} {description:Level Atlayan Kişi = <@$authorID>
  Şuanki Leveli = $sum[$getUserVar[level;$authorID];1]
  Şuanki XP Değeri = $sum[$getUserVar[xpdeğer;$authorID];1]
  Sonraki Levelin XP Değeri = $multi[$getUserVar[sonrakixp;$authorID];2]
  
  Şuanki XP'si = $getUserVar[xp;$authorID]}]
  
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]
  $onlyIf[$getUserVar[xp;$authorID]>$getUserVar[sonrakixp;$authorID];]
  `
})

bot.updateCommand({
        channel: "$getServerVar[mesajlog]", 
        code: `
        $color[YELLOW]
        $addTimestamp
        $footer[Yapan Kişi $userTag[$authorID];$authorAvatar]
        $author[Mesaj Düzenlendi !;$authorAvatar]
        $description[
        Mesajın Eski Hali:
        \`\`\`$oldMessage\`\`\`
        
        ====
        
        Yeni Mesaj:
        \`\`\`$message\`\`\`
        
        [Mesaja Git](https://discord.com/channels/$guildID/$channelUsed/$messageID)]
        
        `
})
bot.onMessageUpdate()
bot.deletedCommand({
    channel: "$getServerVar[mesajlog]",
    code: `
    $color[RED]
        $addTimestamp
        $footer[Yapan Kişi $userTag[$authorID];$authorAvatar]
        $author[Mesaj Silindi !;$authorAvatar]
        $description[
        Silinen Mesaj:
        \`\`\`$message\`\`\`
        
        [Mesaja Git](https://discord.com/channels/$guildID/$channelUsed/$messageID)]`
})
bot.onMessageDelete()
bot.banAddCommand({ 
channel: "$getServerVar[banlog]",
code: `
$color[RED]
        $addTimestamp
        $footer[Yapan Kişi Denetimde Bulunur !]
        $author[Sunucudan Birisi Yasaklandı !;$authorAvatar]
        $description[$thumbnail[$authorAvatar]
        Yasaklanan Kişi: \`$userTag[$authorID]\`
        
        Sebebi: \`$getBanReason[$authorID;$guildID]\`
        ]
`
})
bot.onBanAdd()
bot.banRemoveCommand({ 
channel: "$getServerVar[banlog]",
code: `$color[GREEN]
        $addTimestamp
        $footer[Yapan Kişi Denetimde Bulunur !]
        $author[Sunucudan Birisinin Yasağı Kaldırıldı !;$authorAvatar]
        $description[$thumbnail[$authorAvatar]
        Yasağı Kaldırılan Kişi: \`$userTag[$authorID]\`
        
        ]`
})
bot.onBanRemove()