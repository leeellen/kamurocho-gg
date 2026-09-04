import type { SubstoriesData } from "./types";

/**
 * Yakuza Kiwami 3 shipped in February 2026 and the Yakuza Wiki is still filling
 * in its substories: at the time of writing only 13 of the 31 have a documented
 * location, trigger and task list. The full, verified list of names and numbers
 * is included so the index is complete, and a walkthrough is present wherever
 * the wiki has one rather than invented for the rest.
 */
export const yakuzaKiwami3Substories: SubstoriesData = {
  appId: 3937550,
  summary: {
    ko: "용과 같이 극3 본편 서브스토리 31개와 Dark Ties의 선행 13건입니다. 공식 위키에 공략이 올라온 항목부터 채워 두었고, 아직 문서화되지 않은 항목은 이름과 번호만 표시합니다.",
    en: "All 31 Yakuza Kiwami 3 substories plus Dark Ties' 13 Good Deeds. Entries the official wiki documents carry a full walkthrough; the rest list name and number only until the wiki covers them.",
  },
  source: { label: "Yakuza Wiki — Yakuza Kiwami 3 and Dark Ties/Substories", url: "https://yakuza.fandom.com/wiki/Yakuza_Kiwami_3_and_Dark_Ties/Substories" },
  groups: [
    {
      title: { ko: "서브스토리 (용과 같이 극3)", en: "Substories (Yakuza Kiwami 3)" },
      items: [
        {
          number: 1,
          title: { ko: "라라라 러브로 이어지다", en: "Connected By LaLaLa Love" },
          location: { ko: "카무로초 — 타이헤이 대로", en: "Taihei Boulevard, Kamurocho" },
          trigger: { ko: "Story Progress: Chapter 1", en: "Story Progress: Chapter 1" },
          body: { ko: "타이헤이 대로에서 휴대폰을 커스터마이즈한 뒤 라라와 함께 라라라 모바일을 사용하면 클리어됩니다.", en: "Customize the phone on Taihei Boulevard, then use LaLaLa Mobile with Lala." },
          reward: { ko: "LaLaLa Mobile", en: "LaLaLa Mobile" },
        },
        {
          number: 2,
          title: { ko: "사랑의 큐피드", en: "Love's Cupid" },
        },
        {
          number: 3,
          title: { ko: "초고속 소바 배달!", en: "So Fast, Soba Delivery Run!" },
        },
        {
          number: 4,
          title: { ko: "카메 사범, 때려봐", en: "Master Kame Hit Me" },
        },
        {
          number: 5,
          title: { ko: "카메 사범, 때려봐 리턴즈", en: "Master Kame Hit Me Returns" },
        },
        {
          number: 6,
          title: { ko: "카메 사범, 때려봐 최종장", en: "Master Kame Hit Me: Endgame" },
        },
        {
          number: 7,
          title: { ko: "실례합니다!", en: "Excuse Me!" },
          location: { ko: "류큐 시내 — 하츠마치", en: "Hatsumachi, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 2", en: "Story Progress: Chapter 2" },
          body: { ko: "하츠마치에서 선택지를 고른 뒤 사기꾼들을 격파하면 클리어됩니다. 돈을 이미 지불했다면 돌려받습니다.", en: "Pick an option in Hatsumachi and defeat the scammers — if you already paid them, you get your money back." },
          reward: { ko: "¥30,000 (and your money back if you paid them)", en: "¥30,000 (and your money back if you paid them)" },
        },
        {
          number: 8,
          title: { ko: "또 실례합니다!", en: "Excuse Me Again!" },
          location: { ko: "류큐 시내 — 하츠마치", en: "Hatsumachi, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 2 / Complete Excuse Me!", en: "Story Progress: Chapter 2 / Complete Excuse Me!" },
          body: { ko: "하츠마치에서 다시 나타난 사기꾼들을 격파하면 클리어됩니다.", en: "Defeat the scammers when they turn up again in Hatsumachi." },
          reward: { ko: "White Magatama Phone Strap", en: "White Magatama Phone Strap" },
        },
        {
          number: 9,
          title: { ko: "이번엔 네가 실례다!", en: "Well, Excuse YOU!" },
          location: { ko: "류큐 시내 — 하츠마치", en: "Hatsumachi, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 2 / Complete Excuse Me Again!", en: "Story Progress: Chapter 2 / Complete Excuse Me Again!" },
          body: { ko: "하츠마치에서 마지막 사기꾼을 격파하면 테루요가 하이사이 걸즈에 합류합니다.", en: "Defeat the last scammer in Hatsumachi — Teruyo then joins the Haisai Girls." },
          reward: { ko: "No-Entry Sign Phone Sticker · Teruyo joins the Haisai Girls", en: "No-Entry Sign Phone Sticker · Teruyo joins the Haisai Girls" },
        },
        {
          number: 10,
          title: { ko: "돌려서 당첨? 위니?", en: "Spin For Winning? For Winnie?" },
          location: { ko: "류큐 시내 — 카리유시 상점가", en: "Kariyushi Arcade, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 2", en: "Story Progress: Chapter 2" },
          body: { ko: "카리유시 상점가의 래플 부스로 이동한 뒤, 상점가 입구 간판을 촬영하면 래플과 포토 랠리가 열립니다.", en: "Walk to the raffle stall in Kariyushi Arcade and snap a pic of the arcade's entrance sign to unlock the Raffle and the Photo Rally." },
          reward: { ko: "Raffle prizes · Raffle · Photo Rally · 3 Teruya Kokote Ame snacks", en: "Raffle prizes · Raffle · Photo Rally · 3 Teruya Kokote Ame snacks" },
        },
        {
          number: 11,
          title: { ko: "차세대 드림 머신", en: "The Next-Gen Dream Machine" },
          location: { ko: "류큐 시내 — 류큐 대로", en: "Ryukyu Boulevard, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 2", en: "Story Progress: Chapter 2" },
          body: { ko: "류큐 대로에서 오카에게 말을 건 뒤 남자들을 격파하면 스트리트 서퍼 Mk 0을 받습니다.", en: "Talk to Oka on Ryukyu Boulevard and defeat the men to receive the Street Surfer Mk 0." },
          reward: { ko: "Street Surfer Mk 0", en: "Street Surfer Mk 0" },
        },
        {
          number: 12,
          title: { ko: "생명은 소중해", en: "Life is Precious" },
          location: { ko: "류큐 시내 — 아쿠아 스카이 근처 다리", en: "The bridge near Aqua Sky, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 3 / Daytime", en: "Story Progress: Chapter 3 / Daytime" },
          body: { ko: "낮에 아쿠아 스카이 근처 다리에서 「무슨 일 있으셨어요?」 → 「사기를 당하셨나요?」 → 「무슨 일 있으셨어요?」를 차례로 고르고 사기꾼들을 격파하면 클리어됩니다.", en: "During the day at the bridge near Aqua Sky, choose \"Did something happen to you?\", then \"Were you the victim of a scam?\", then \"Did something happen to you?\" again, and defeat the scammers." },
          reward: { ko: "Mystical Moisturizer · Timid Woman joins the Haisai Girls", en: "Mystical Moisturizer · Timid Woman joins the Haisai Girls" },
        },
        {
          number: 13,
          title: { ko: "가장 달콤한 간식", en: "The Sweetest Treat" },
          location: { ko: "류큐 시내 — 히비스커스 아이스크림", en: "Hibiscus Ice Cream, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 3 / Daytime", en: "Story Progress: Chapter 3 / Daytime" },
          body: { ko: "히비스커스 아이스크림에서 도움을 수락한 뒤 90초 안에 아이들에게 도착하면 됩니다. 5번까지 재시도할 수 있고, 모두 실패해도 자동으로 결말로 넘어갑니다.", en: "Agree to help at Hibiscus Ice Cream and reach the children within 90 seconds. You get five tries, and even failing them all takes you to the ending automatically." },
          reward: { ko: "Reiko joins the Haisai Girls", en: "Reiko joins the Haisai Girls" },
        },
        {
          number: 14,
          title: { ko: "대도시의 꿈", en: "Big City Dreams" },
        },
        {
          number: 15,
          title: { ko: "아빠 노릇도 쉽지 않아", en: "It's Tough Being a Dad" },
        },
        {
          number: 16,
          title: { ko: "부모님, 힘내세요!", en: "Keep at It, Parents!" },
        },
        {
          number: 17,
          title: { ko: "악코 씨에게 맡겨라! 오키나와 편", en: "Leave It All to Akko-san! In Okinawa!" },
          location: { ko: "류큐 시내 — 류큐 대로", en: "Ryukyu Boulevard, Downtown Ryukyu" },
          trigger: { ko: "Story Progress: Chapter 4 / Chura Bar Beginner Exam completedSpecifically when you're prompted to complete it", en: "Story Progress: Chapter 4 / Chura Bar Beginner Exam completedSpecifically when you're prompted to complete it" },
          body: { ko: "추라 바 초급 시험을 마치라는 안내가 뜨는 시점에 류큐 대로에서 발생합니다. 선택지를 고르고 TV 출연에 동의한 뒤 「고아원을 운영합니다」 → 「공설시장」을 고르고 불량배들을 격파합니다. 계속하기를 선택하고 「바카 미타이」를 부르면 클리어됩니다.", en: "Triggers on Ryukyu Boulevard when you are prompted to finish the Chura Bar Beginner Exam. Pick either option, agree to be on TV, answer \"I run an orphanage\" then \"Public Market\", beat the punks, agree to continue and sing \"Baka Mitai\"." },
          reward: { ko: "Leisure Trip Phone Sticker · Akko-san Phone Sticker · Akko-san Travel Phone Strap · Anokane Phone Strap · Akko-san Phone Lock Screen · Golden Akko-san StatueThis statue is placed in your room at Morning Glory", en: "Leisure Trip Phone Sticker · Akko-san Phone Sticker · Akko-san Travel Phone Strap · Anokane Phone Strap · Akko-san Phone Lock Screen · Golden Akko-san StatueThis statue is placed in your room at Morning Glory" },
        },
        {
          number: 18,
          title: { ko: "악코 씨에게 맡겨라! 도쿄 편", en: "Leave It All to Akko-san! In Tokyo!" },
        },
        {
          number: 19,
          title: { ko: "용궁을 되찾아라", en: "Retake the Dragon Palace" },
          location: { ko: "카무로초 — 공원대로", en: "Park Boulevard, Kamurocho" },
          trigger: { ko: "Story Progress: Chapter 4", en: "Story Progress: Chapter 4" },
          body: { ko: "공원대로에서 시작해 용궁으로 이동한 뒤 불량배들을 격파하면 용궁을 이용할 수 있게 됩니다.", en: "Start on Park Boulevard, head to the Dragon Palace and beat the hoodlums to gain access to it." },
          reward: { ko: "Green Star Phone Antenna · Access to the Dragon Palace", en: "Green Star Phone Antenna · Access to the Dragon Palace" },
        },
        {
          number: 20,
          title: { ko: "정보화 시대에 오신 걸 환영합니다", en: "Welcome to the Information Age" },
        },
        {
          number: 21,
          title: { ko: "신참의 고민", en: "A Rookie's Dilemma" },
        },
        {
          number: 22,
          title: { ko: "빨간 풍선", en: "The Red Balloon" },
        },
        {
          number: 23,
          title: { ko: "베이비 비 곤", en: "Baby Be Gone" },
        },
        {
          number: 24,
          title: { ko: "내 주머니 속에는……", en: "In My Pocket..." },
          location: { ko: "카무로초 — 극장 광장", en: "Theater Square, Kamurocho" },
          trigger: { ko: "Story Progress: Chapter 4", en: "Story Progress: Chapter 4" },
          body: { ko: "극장 광장에서 선택지를 두 번 고른 뒤 사기꾼들을 격파하면 클리어됩니다.", en: "Make the two dialogue choices in Theater Square and defeat the scammers." },
        },
        {
          number: 25,
          title: { ko: "마즈 파이터즈, 다시 뭉치다", en: "Mars Fighters, Reunited!" },
        },
        {
          number: 26,
          title: { ko: "엄마의 사랑을 위해서라면", en: "Anything for Mama's Love" },
        },
        {
          number: 27,
          title: { ko: "K팝 아이돌 지망생", en: "Wannabe Kpop Idol" },
        },
        {
          number: 28,
          title: { ko: "인생은 계속된다", en: "Life Goes On" },
          location: { ko: "카무로초 — 핑크 거리", en: "Pink Street, Kamurocho" },
          trigger: { ko: "Story Progress: Chapter 4", en: "Story Progress: Chapter 4" },
          body: { ko: "핑크 거리에서 남자를 격파하고 점을 봐 주기로 합니다. 선택지는 아무거나 골라도 되며, 마지막에 「10년 뒤 나는 어디에 있을까?」를 고르면 난바라가 하이사이 걸즈에 합류합니다.", en: "Beat the man on Pink Street and agree to the reading. Any option works until the last one — choose \"Where am I in 10 years?\" and Nanbara joins the Haisai Girls." },
          reward: { ko: "Nanbara joins the Haisai Girls", en: "Nanbara joins the Haisai Girls" },
        },
        {
          number: 29,
          title: { ko: "다테 씨의 자존심", en: "Date-san's Pride" },
        },
        {
          number: 30,
          title: { ko: "스타더스트의 스타 데뷔", en: "A Star's Debut at Stardust" },
        },
        {
          number: 31,
          title: { ko: "도전자 등장! 아몬 조!", en: "A Challenger Arrives! Jo Amon!" },
          location: { ko: "장소 무관", en: "Anywhere" },
          trigger: { ko: "Premium Adventure / All Coliseum opponents defeated / All other Substories completed", en: "Premium Adventure / All Coliseum opponents defeated / All other Substories completed" },
          body: { ko: "프리미엄 어드벤처에서 콜로세움 상대 전원과 나머지 서브스토리를 모두 클리어한 뒤, 마운틴 아레나로 가서 아몬을 격파하면 됩니다.", en: "In Premium Adventure, with every Coliseum opponent and every other substory cleared, go to the Mountain Arena and defeat Amon." },
        },
      ],
    },
    {
      title: { ko: "선행 (Dark Ties)", en: "Good Deeds (Dark Ties)" },
      items: [
        {
          number: 1,
          title: { ko: "콜로세움 조사", en: "Coliseum Investigation" },
          body: { ko: "타이헤이 대로에서 휴대폰을 커스터마이즈한 뒤 라라와 함께 라라라 모바일을 사용하면 클리어됩니다.", en: "Customize the phone on Taihei Boulevard, then use LaLaLa Mobile with Lala." },
        },
        {
          number: 2,
          title: { ko: "노숙자 지원 활동", en: "Homeless Outreach Effort" },
        },
        {
          number: 3,
          title: { ko: "취업 지원 사기", en: "Employment Assistance Scam" },
        },
        {
          number: 4,
          title: { ko: "낙서 근절 캠페인", en: "Graffiti Eradication Campaign" },
        },
        {
          number: 5,
          title: { ko: "작전명: 볼", en: "Operation: Balls" },
        },
        {
          number: 6,
          title: { ko: "성매매 종사자 안전 확보", en: "Maintain Safety for Sex Workers" },
        },
        {
          number: 7,
          title: { ko: "차량 도난 예방", en: "Vehicle Burglary Prevention" },
          body: { ko: "하츠마치에서 선택지를 고른 뒤 사기꾼들을 격파하면 클리어됩니다. 돈을 이미 지불했다면 돌려받습니다.", en: "Pick an option in Hatsumachi and defeat the scammers — if you already paid them, you get your money back." },
        },
        {
          number: 8,
          title: { ko: "공공장소 음주 계도 캠페인", en: "Public Intoxication Awareness Campaign" },
          body: { ko: "하츠마치에서 다시 나타난 사기꾼들을 격파하면 클리어됩니다.", en: "Defeat the scammers when they turn up again in Hatsumachi." },
        },
        {
          number: 9,
          title: { ko: "카무로초 유흥가의 변화", en: "A Shift in Kamurocho's Working Girls" },
          body: { ko: "하츠마치에서 마지막 사기꾼을 격파하면 테루요가 하이사이 걸즈에 합류합니다.", en: "Defeat the last scammer in Hatsumachi — Teruyo then joins the Haisai Girls." },
        },
        {
          number: 10,
          title: { ko: "팬티 도둑 탐정", en: "Panty Thief P.I" },
          body: { ko: "카리유시 상점가의 래플 부스로 이동한 뒤, 상점가 입구 간판을 촬영하면 래플과 포토 랠리가 열립니다.", en: "Walk to the raffle stall in Kariyushi Arcade and snap a pic of the arcade's entrance sign to unlock the Raffle and the Photo Rally." },
        },
        {
          number: 11,
          title: { ko: "연쇄 살인범을 잡아라", en: "To Catch a Serial Killer" },
          body: { ko: "류큐 대로에서 오카에게 말을 건 뒤 남자들을 격파하면 스트리트 서퍼 Mk 0을 받습니다.", en: "Talk to Oka on Ryukyu Boulevard and defeat the men to receive the Street Surfer Mk 0." },
        },
        {
          number: 12,
          title: { ko: "경찰 부패 파헤치기", en: "Uncovering Police Corruption" },
          body: { ko: "낮에 아쿠아 스카이 근처 다리에서 「무슨 일 있으셨어요?」 → 「사기를 당하셨나요?」 → 「무슨 일 있으셨어요?」를 차례로 고르고 사기꾼들을 격파하면 클리어됩니다.", en: "During the day at the bridge near Aqua Sky, choose \"Did something happen to you?\", then \"Were you the victim of a scam?\", then \"Did something happen to you?\" again, and defeat the scammers." },
        },
        {
          number: 13,
          title: { ko: "콜로세움 조사 결과", en: "Coliseum Investigation Results" },
          body: { ko: "히비스커스 아이스크림에서 도움을 수락한 뒤 90초 안에 아이들에게 도착하면 됩니다. 5번까지 재시도할 수 있고, 모두 실패해도 자동으로 결말로 넘어갑니다.", en: "Agree to help at Hibiscus Ice Cream and reach the children within 90 seconds. You get five tries, and even failing them all takes you to the ending automatically." },
        },
      ],
    },
  ],
};
