import type { CollectiblesData } from "./types";

export const yakuza6: CollectiblesData = {
  appId: 1388590,
  categories: [
  {
    slug: "stray-cats",
    title: { ko: "길고양이 19마리 — 모든 위치와 좋아하는 캔", en: "Stray Cats — All 19 Locations & Favorite Cans" },
    summary: { ko: "서브스토리 No.21 「네코카페에 어서 오세요」를 클리어한 뒤 카무로초 9마리 + 오노미치 10마리를 모두 포획해 네코카페에 영입합니다. 좋아하는 캔을 들고 가면 포획 성공률이 높아집니다.", en: "After clearing substory No.21 \"Welcome to the Cat Cafe\", capture all 9 Kamurocho cats and 10 Onomichi cats. Bring each cat's favorite can to boost capture success." },
    tips: [
        { ko: "2장 이후 SNS와 트러블 미션이 풀린 다음에야 일부 고양이가 출현합니다. 출현 포인트는 한 지역 안에서 2~3곳 랜덤이므로 한 자리에서 안 보이면 인근을 한 바퀴 돌아보세요.", en: "Some cats only appear after SNS / trouble missions open in Chapter 2. Each cat has 2-3 random spawn points within its region — sweep the area if not visible on first visit." },
        { ko: "캔은 편의점·돈키호테·네코카페에서 구입할 수 있습니다. 좋아하는 캔을 잘못 골라도 카운트는 오르지만 도망 확률이 커집니다.", en: "Cans sell at convenience stores, Don Quijote, and the Cat Cafe. Wrong cans still count but raise escape chance." },
        { ko: "각 지역 지도에 고양이 출현 지점이 번호로 표시돼 있습니다. 지도 번호는 카드 번호와 일치하며, 한 번호당 2~3곳의 랜덤 출현 지점이 찍혀 있습니다.", en: "Each region map marks cat spawn points by number; map numbers match the card numbers, with 2-3 random spawn spots shown per cat." },
    ],
    source: { label: "펑키게임 — 용과 같이 6 고양이 찾기", url: "https://funkygame.tistory.com/2273" },
    groups: [
    {
      title: { ko: "카무로초 — 9마리", en: "Kamurocho — 9 Cats" },
      mapImage: "/yakuza-6-cats/kamurocho.jpg",
      items: [
      {
        number: 1,
        title: { ko: "비올라", en: "Viola" },
        location: { ko: "카무로초 — 천하일 거리 뉴 세레나 뒤편 근처", en: "Kamurocho — behind New Serena on Tenkaichi Street" },
        reward: { ko: "「가다랑어 포! 인생은 풍미」", en: "Bonito Flakes \"Life Is All About Umami\"" },
      },
      {
        number: 2,
        title: { ko: "무사시", en: "Musashi" },
        location: { ko: "카무로초 — 천하일 거리 SPIDER's 근처", en: "Kamurocho — near SPIDER's on Tenkaichi Street" },
        reward: { ko: "「가다랑어 포! 인생은 풍미」", en: "Bonito Flakes \"Life Is All About Umami\"" },
      },
      {
        number: 3,
        title: { ko: "코테츠", en: "Kotetsu" },
        location: { ko: "카무로초 — 천하일 거리 뒷골목 근처", en: "Kamurocho — back alley off Tenkaichi Street" },
        reward: { ko: "「노릇하게 구운 비프 미소」", en: "Roasted Beef in Miso Sauce" },
      },
      {
        number: 4,
        title: { ko: "후쿠", en: "Fuku" },
        location: { ko: "카무로초 — 에비스야 앞 거리 동쪽 방향", en: "Kamurocho — east along the street in front of Ebisuya" },
        reward: { ko: "「치즈가 든 연어 파테」", en: "Salmon Pâté with Cheese" },
      },
      {
        number: 5,
        title: { ko: "밀크", en: "Milk" },
        location: { ko: "카무로초 — 천량 거리에서 서쪽으로 꺾어 들어간 곳 근처", en: "Kamurocho — just west off Senryo Avenue" },
        reward: { ko: "「수제풍 치킨 거친 손질」", en: "Hand-Shredded Homestyle Chicken" },
      },
      {
        number: 6,
        title: { ko: "시즈쿠", en: "Shizuku" },
        location: { ko: "카무로초 — 중도 거리 뒷골목 근처", en: "Kamurocho — back alley off Nakamichi Street" },
        reward: { ko: "「생식감 참치 플레이크 세트」", en: "Fresh-Textured Tuna Flake Feast" },
      },
      {
        number: 7,
        title: { ko: "레온", en: "Leon" },
        location: { ko: "카무로초 — 미레니움 타워 앞 근처", en: "Kamurocho — in front of Millennium Tower" },
        reward: { ko: "「치즈가 든 연어 파테」", en: "Salmon Pâté with Cheese" },
      },
      {
        number: 8,
        title: { ko: "마롱", en: "Marron" },
        location: { ko: "카무로초 — 라이잡 앞 길, 살짝 서쪽 방향 근처", en: "Kamurocho — slightly west along the street in front of RIZAP" },
        reward: { ko: "「수제풍 치킨 거친 손질」", en: "Hand-Shredded Homestyle Chicken" },
      },
      {
        number: 9,
        title: { ko: "빅토리아", en: "Victoria" },
        location: { ko: "카무로초 — 어린이 공원 근처", en: "Kamurocho — near the Children's Park" },
        reward: { ko: "「극상 참다랑어 볼살 골드」", en: "Premium Tuna Cheek Gold" },
      },
      ],
    },
    {
      title: { ko: "오노미치 — 10마리", en: "Onomichi — 10 Cats" },
      mapImage: "/yakuza-6-cats/onomichi.jpg",
      items: [
      {
        number: 10,
        title: { ko: "토라", en: "Tora" },
        location: { ko: "오노미치 — 신사 경내 근처", en: "Onomichi — within the shrine grounds" },
        reward: { ko: "「노릇하게 구운 비프 미소」", en: "Roasted Beef in Miso Sauce" },
      },
      {
        number: 11,
        title: { ko: "나나", en: "Nana" },
        location: { ko: "오노미치 — 류난 신사 뒷길 근처", en: "Onomichi — back path behind Ryunan Shrine" },
        reward: { ko: "「생식감 참치 플레이크 세트」", en: "Fresh-Textured Tuna Flake Feast" },
      },
      {
        number: 12,
        title: { ko: "타마", en: "Tama" },
        location: { ko: "오노미치 — 묘지 아래쪽 근처", en: "Onomichi — just below the cemetery" },
        reward: { ko: "「치즈가 든 연어 파테」", en: "Salmon Pâté with Cheese" },
      },
      {
        number: 13,
        title: { ko: "히메", en: "Hime" },
        location: { ko: "오노미치 — 로프웨이 승강장 근처", en: "Onomichi — near the ropeway station" },
        reward: { ko: "「수제풍 치킨 거친 손질」", en: "Hand-Shredded Homestyle Chicken" },
      },
      {
        number: 14,
        title: { ko: "미케", en: "Mike" },
        location: { ko: "오노미치 — 인가이 센터가이 안쪽", en: "Onomichi — deep inside Jingai Center-gai" },
        reward: { ko: "「생식감 참치 플레이크 세트」", en: "Fresh-Textured Tuna Flake Feast" },
      },
      {
        number: 15,
        title: { ko: "린", en: "Rin" },
        location: { ko: "오노미치 — 수군 아파트 근처", en: "Onomichi — near the Suigun Apartments" },
        reward: { ko: "「흰살생선과 시라코보시 무침」", en: "White Fish Tossed with Dried Milt" },
      },
      {
        number: 16,
        title: { ko: "쿠로", en: "Kuro" },
        location: { ko: "오노미치 — 중화소바 쥬만고쿠 근처", en: "Onomichi — near Chuka Soba Jumangoku" },
        reward: { ko: "「치즈가 든 연어 파테」", en: "Salmon Pâté with Cheese" },
      },
      {
        number: 17,
        title: { ko: "시로", en: "Shiro" },
        location: { ko: "오노미치 — 시시도 동쪽에서 북쪽으로 이어지는 좁은 골목", en: "Onomichi — narrow alley running north from east of Shishido" },
        reward: { ko: "「수제풍 치킨 거친 손질」", en: "Hand-Shredded Homestyle Chicken" },
      },
      {
        number: 18,
        title: { ko: "코코", en: "Coco" },
        location: { ko: "오노미치 — 하나노쿠보 좁은 골목 끝", en: "Onomichi — end of a narrow alley in Hananokubo" },
        reward: { ko: "「흰살생선과 시라코보시 무침」", en: "White Fish Tossed with Dried Milt" },
      },
      {
        number: 19,
        title: { ko: "카이", en: "Kai" },
        location: { ko: "오노미치 — 하나노쿠보, 오타후쿠야 근처", en: "Onomichi — near Otafukuya in Hananokubo" },
        reward: { ko: "「수제풍 치킨 거친 손질」, 「노릇하게 구운 비프 미소」, 「극상 참다랑어 볼살 골드」", en: "Hand-Shredded Homestyle Chicken, Roasted Beef in Miso Sauce, Premium Tuna Cheek Gold" },
      },
      ],
    },
    ],
  },
  ],
};
