# 스팀 커뮤니티 가이드 ↔ DB 가이드 1:1 매칭 감사 보고

전체 한국어 가이드: **801**

## 상태 요약

| 상태 | 건수 | 설명 |
|---|---:|---|
| match | 654 | DB 내용이 소스의 핵심 수치/명사를 보존함 |
| no-source-section | 133 | 소스 가이드가 해당 업적을 별도 섹션으로 다루지 않음(섹션 단위 prose만 있음). DB는 업적 메타데이터 기반으로 자체 생성 |
| no-source-html | 9 | 소스가 Steam 외 사이트(PowerPyx/GameFAQs/nightlygamingbinge) — HTML 캐시 미보유 |
| all-numbers-missing | 5 | 소스에 등장하는 수치(회수·횟수·매치 수 등)가 DB 가이드에 누락. 대부분 '모두'·'끝까지' 같은 표현으로 일반화된 경우 |

## 게임별 매칭률

| 게임 | match | 전체 | 매칭률 |
|---|---:|---:|---:|
| Yakuza: Like a Dragon | 62 | 63 | 98.4% |
| Like a Dragon: Infinite Wealth | 72 | 74 | 97.3% |
| Yakuza Kiwami 2 | 57 | 59 | 96.6% |
| Yakuza 5 Remastered | 51 | 56 | 91.1% |
| Like a Dragon: Pirate Yakuza in Hawaii | 56 | 62 | 90.3% |
| Yakuza 6: The Song of Life | 51 | 59 | 86.4% |
| Like a Dragon Gaiden: The Man Who Erased His Name | 53 | 62 | 85.5% |
| Yakuza Kiwami | 46 | 55 | 83.6% |
| Yakuza 4 Remastered | 39 | 47 | 83.0% |
| Like a Dragon: Ishin! | 46 | 56 | 82.1% |
| Lost Judgment | 46 | 56 | 82.1% |
| Yakuza 0 Director's Cut | 41 | 55 | 74.5% |
| Judgment | 34 | 47 | 72.3% |
| Yakuza 3 Remastered | 0 | 50 | 0.0% |

## 주요 이슈 (all-numbers-missing) 상위 표본

### Like a Dragon: Pirate Yakuza in Hawaii — Goodbye, Old Me

소스: https://steamcommunity.com/sharedfiles/filedetails/?id=3433394597

소스 누락 수치: `all source numbers absent in db: 20`

```
[source]
Obtain 20 types of clothing items. Most of these are found in shops or as minigame point rewards, some can be found in bunches of 3-4 in crates around Hawaii.

[db]
의류 20종 입수 **지금 해야 할 일:** - 서로 다른 의류 아이템을 20종 모으세요. - 대부분은 하와이의 의류 상점이나 미니게임 포인트 보상으로 구할 수 있습니다. - 하와이 곳곳에 놓인 상자에서도 한 번에 3~4벌씩 무더기로 발견되는 경우가 있으니 탐색을 빠뜨리지 마세요.
```

### Like a Dragon: Pirate Yakuza in Hawaii — Fashionista

소스: https://steamcommunity.com/sharedfiles/filedetails/?id=3433394597

소스 누락 수치: `source has numbers 50, db has none; all source numbers absent in db: 50`

```
[source]
Obtain 50 types of clothing items.

[db]
의류 50종 입수 **지금 해야 할 일:** - 서로 다른 의류 아이템을 50종 모으세요. - 상점 신규 입고, 미니게임 보상, 보물 상자 등 모든 입수처를 빠짐없이 확인하세요. **주의할 점:** - 색만 다른 동일 모델은 별개 종류로 카운트되지 않을 수 있으니 신규 모델 위주로 모으세요.
```

### Yakuza 0 Director's Cut — Lucky Star

소스: https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839

소스 누락 수치: `source has numbers 10, db has none; all source numbers absent in db: 10`

```
[source]
by getting a top-grade (10-star) item. Unless you are extremely unlucky, this achievement is a non-issue. For your interest, here's a table on what you can get out of the Dream Machines: 10.000 Yen100.000 Yen1.000.000 YenCharismatic PhotoCandyBaiken's Chain (Majima)Carbon Fiber (Majima)CannonBallbusterEnokitakeCharismatic AutobiographyCleaving PoleExtra Spiked Tires (Kiryu)Expired Lunch SetCrimson Bead (Majima)FirecrackerFighter's BindingExpired Lunch SetGold ChampagneKara KappaGodslayer Charm (Majima)Jet Black Jacket (Majima)MatsutakeGodspeed Motor Mark II (Kiryu)Mandarin OrangeQuality Iron (Majima)Golden Rifle (Majima)Mega Drive Stuffed ToySecret Stash BindingMatsutakeObsidian (Majima)Side Stabilizer 2.0 (Kiryu)Mega Drive Stuffed ToyRubber (Majima)Slime SprayMilitary Explosive (Majima)Special BaitSpark 15000VPearl (Majima)Staminan XXTauriner++Quality Fabric (Majima)Steel Shin GuardsToughness EmperorScotch WhiskeySturdy Wood (Majima)Ultra Soft Tires (Kiryu)ShiitakeTop-Grade BaitShishido's SickleToughness ZZSilver Ingot (Majima)Softshell TurtleSpiked Taiko SticksSteel Business CardSuperalloy BatSwiss WatchTauriner MaximumToughness Infinity (Majima)Ultra Godspeed Gears (Kiryu)

[db]
드림 머신 최상급 아이템 획득 **지금 해야 할 일:** - 카무로초와 소텐보리 곳곳의 드림 머신을 돌리세요. - 한 번 사용한 기계는 일정 시간 쿨다운에 들어가니, 다른 지역의 기계로 이동해 계속 시도하세요. - 드림 머신에서 최상급 등급의 아이템이 나오는 순간 업적이 해금됩니다. **주의할 점:** - 운 요소가 강한 콘텐츠라 후반에 자금이 여유 있을 때 도전하는 편이 안전합니다.
```

### Yakuza 4 Remastered — Akiyama the Hoarder

소스: https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402

소스 누락 수치: `source has numbers 10, db has none; all source numbers absent in db: 10`

```
[source]
Earn 1,000,000 yen playing as Akiyama. Self explanatory. I recommend using cheat items with Tanimura to earn 10,000 casino points for the “Tanimura the Gambler” achievement. Then, exchange those points for Platinum Plates, but don’t sell them yet. Switch over to Akiyama and sell the plates with him. This way, you can unlock both achievements efficiently in one go.

[db]
아키야마로 1,000,000엔 획득 **지금 해야 할 일:** - 아키야마 편 진행 중 일반 전투와 서브스토리 보상으로 누적 1,000,000엔을 모으세요. - 거액 보상이 걸린 서브스토리를 우선적으로 정리하면 효율이 좋습니다. - 누적 획득액이 1,000,000엔에 도달하면 업적이 해금됩니다. **주의할 점:** - 타니무라 편에서 치트 아이템으로 카지노 포인트 10,000을 모은 뒤 플래티넘 접시로 교환해 두고, 아키야마로 교체 후 매각하면 두 업적을 한 번에 노릴 수 있습니다.
```

### Yakuza 4 Remastered — Tanimura the Gambler

소스: https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402

소스 누락 수치: `source has numbers 10000, db has none; all source numbers absent in db: 10000`

```
[source]
Acquire 10,000 casino points playing as Tanimura. Self explanatory. Just use cheat items and you'll get 10,000 points relatively quickly. Refer to this guide for information on cheat items: Gambling Cheat Items[gamefaqs.gamespot.com]

[db]
타니무라로 카지노 포인트 10,000 획득 **지금 해야 할 일:** - 타니무라 편의 카지노에서 바카라, 블랙잭, 룰렛 등을 플레이해 칩을 모으세요. - 모은 칩을 카지노 포인트로 교환해 누적 10,000P를 채우면 업적이 해금됩니다. - 치트 아이템(투시 안경 등)을 활용하면 비교적 빠르게 10,000P에 도달할 수 있습니다.
```

## no-source-section 표본

- **Like a Dragon Gaiden: The Man Who Erased His Name** / The Man Who Had Too Many Hobbies (api: MINIGAME_ALL)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / To Train in Death (api: TRAINING_B)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / The World's Strongest (api: AMON)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / The Man Who Erased His Name (api: MAIN_STORY_05)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / To Train in Life (api: TRAINING_A)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / The Man Who Knew Too Much (api: MAIN_STORY_03)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / The Laughing Man (api: MAIN_STORY_04)
- **Like a Dragon: Ishin!** / The Gods Smile Upon Thee (api: ACHIEVEMENT_SHOUJINMOKUROKU_5)
- **Like a Dragon: Ishin!** / That Was Close! (api: CLEAR_CHAPTER6)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / To Train Beyond (api: TRAINING_C)
- **Like a Dragon: Ishin!** / The Gods Sing Thy Praises (api: ACHIEVEMENT_SHOUJINMOKUROKU_50)
- **Like a Dragon: Ishin!** / The Bottom Drops Out (api: CLEAR_CHAPTER8)
- **Like a Dragon Gaiden: The Man Who Erased His Name** / The Dragon of Dojima (api: PLATINUM)
- **Like a Dragon: Ishin!** / The Abyss Stares Back (api: ENTER_DUNGEON_3)
- **Like a Dragon: Ishin!** / The Man Who Does It All (api: PLAY_ALL_PLAYSPOT)

## no-source-html (외부 소스)

- Like a Dragon: Pirate Yakuza in Hawaii / Island Adventurer → https://kamurocho.gg/curated
- Judgment / The Final Nail → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
- Yakuza 6: The Song of Life / Dandling Dragon → https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements
- Judgment / Oh Look, a Cat! → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
- Judgment / The Art of Conversation → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
- Judgment / I'll Make it Double → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
- Judgment / Way Too Thorough! → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
- Judgment / Professional Password Presenter → https://nightlygamingbinge.com/judgment-chapter-8s-correct-dialog-choices/
- Judgment / Hung Jury → https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/
