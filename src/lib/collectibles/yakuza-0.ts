import type { CollectiblesData } from "./types";

export const yakuza0: CollectiblesData = {
  appId: 2988580,
  categories: [
  {
    slug: "telephone-cards",
    title: { ko: "텔레폰 카드 90종 — 30명 × A·B·C", en: "Telephone Cards (90 total — 30 actresses × A/B/C)" },
    summary: { ko: "키류 편 카무로초 45장 + 마지마 편 소텐보리 45장. 한 명당 A·B·C 3종을 모두 수집해 컬렉터에게 보여주면 한 세트당 500만 엔을 받습니다. A→B→C 순서로 회수해야 표시되는 점에 주의하세요.", en: "Kiryu (Kamurocho) holds 45 cards, Majima (Sotenbori) holds 45. Each actress has A/B/C — bring all three to the collector for ¥5,000,000 per complete set. Cards must be collected in A→B→C order to appear." },
    tips: [
        { ko: "카드 워처를 장비하면 광나는 카드 위치가 미니맵에 떠 회수가 훨씬 수월합니다. 키류는 핑크 거리 뒤 컬렉터, 마지마는 소텐보리 동쪽 컬렉터에게 제출하세요.", en: "Equip the Card Watcher to mark shining cards on the minimap. Hand sets to Kiryu's collector behind Pink St. (Akimoto) or Majima's collector east of Sotenbori." },
        { ko: "세트 5장 보상 외에도 「절륜의 아키모토」 친구 호감도가 올라가며 추가 보상이 따라옵니다.", en: "Beyond the ¥5M payout, completing sets raises affinity with collector Akimoto for additional rewards." },
    ],
    source: [
      { label: "펑키게임 — 전화카드 (카무로쵸)", url: "https://funkygame.tistory.com/1804" },
      { label: "펑키게임 — 전화카드 (소텐보리)", url: "https://funkygame.tistory.com/1805" },
    ],
  },
  {
    slug: "video-clips",
    title: { ko: "비디오 — 간다라 비디오 가게 + 특별 클립 해금", en: "Video — Gandara Shop + Special Clip Unlocks" },
    summary: { ko: "용과 같이 0의 비디오 콘텐츠는 「간다라(ガンダーラ)」 비디오 가게에서 진행됩니다. 일반 이미지 비디오를 반복 시청하면 점원과의 호감도가 오르고, 특정 조건을 만족시키면 서브스토리 + 특별 클립이 해금됩니다. 30종 일괄 수집 시스템은 없으며, 핵심은 호감도 + 사이드 트리거입니다.", en: "Y0's video content lives at the Gandara (ガンダーラ) video shop. Watching standard image videos repeatedly raises affinity with the clerk; specific triggers unlock substories + special clips. There is no flat 30-clip checklist — what matters is affinity + side triggers." },
    tips: [
        { ko: "간다라 소텐보리점에서 처음 비디오를 보면 서브스토리가 자동 발생. 점원과의 절(絆) 게이지가 함께 오릅니다.", en: "First viewing at Sotenbori Gandara auto-triggers a substory + starts the clerk's bond gauge." },
        { ko: "천량 거리 북쪽 간다라에서 이미지 비디오 3회 시청 후 입장하면 서브스토리 「비디오 걸」 발생.", en: "Watch any image video 3 times at the Senryo St. North Gandara then re-enter to trigger substory 'Video Girl'." },
        { ko: "점원 절 게이지가 90 이상일 때 비디오 시청 → 오디세이 창고 앞 흰 옷 여성과 대화 → M스토어 쇼후쿠초점에서 「오뎅 모듬」 구매 → 여성에게 전달 → 「예의 비디오(例のビデオ)」 입수.", en: "Affinity 90+: watch a video → talk to the white-dressed woman in front of the Odyssey warehouse → buy 'Oden Assortment' at M-Store Shofukucho → give it to her → obtain the 'Special Video'." },
    ],
    source: { label: "龍が如く0 攻略 — ガンダーラ・ビデオ", url: "https://spwiki.net/ryuzero/" },
    items: [
      {
        number: 1,
        title: { ko: "간다라 소텐보리점 — 첫 비디오 + 서브스토리", en: "Gandara Sotenbori — First Video + Substory" },
        location: { ko: "소텐보리 — 동쪽 골목", en: "Sotenbori — east alley" },
        body: { ko: "마지마 편 장 진행 후 입장 가능. 첫 비디오 시청 시 서브스토리 자동 발생.", en: "Accessible during Majima chapters. First viewing auto-triggers the venue substory." },
      },
      {
        number: 2,
        title: { ko: "간다라 천량 거리 북점 — 「비디오 걸」 서브스토리", en: "Gandara Senryo North — 'Video Girl' substory" },
        location: { ko: "카무로초 — 천량 거리 북쪽", en: "Kamurocho — Senryo St. North" },
        body: { ko: "키류 편. 이미지 비디오를 3회 시청한 뒤 점내 재입장 시 서브스토리 시작.", en: "Kiryu side. Watch any image video 3 times, then re-enter the shop." },
      },
      {
        number: 3,
        title: { ko: "점원 호감도 → 90 도달 시 특수 이벤트", en: "Clerk Affinity 90 → Special Event" },
        location: { ko: "간다라 양 지점", en: "Either Gandara branch" },
        body: { ko: "같은 이미지 비디오 반복 시청으로도 호감도 상승. 호감도 90 이상에서 다음 시청 시 컷신 트리거.", en: "Repeated viewings (even the same video) raise affinity. At 90+, the next viewing triggers a cutscene." },
      },
      {
        number: 4,
        title: { ko: "오디세이 창고 앞 흰 옷 여성 대화", en: "White-Dressed Woman at Odyssey Warehouse" },
        location: { ko: "소텐보리 — 오디세이 창고", en: "Sotenbori — Odyssey warehouse" },
        body: { ko: "특수 이벤트 후 등장. 「오뎅 모듬」을 요청하니 M스토어 쇼후쿠초점에서 구매해 전달.", en: "Appears after the special event. Buy 'Oden Assortment' at M-Store Shofukucho and bring it." },
      },
      {
        number: 5,
        title: { ko: "예의 비디오 — 최종 보상", en: "Special Video — Final Reward" },
        location: { ko: "간다라 (예의 비디오로 재시청)", en: "Gandara (replay 'Special Video')" },
        body: { ko: "오뎅 전달 후 받는 「예의 비디오」를 가지고 간다라에서 시청. 컴플리트 리스트 + 사이드 보상 발생.", en: "After receiving the 'Special Video', return to Gandara to watch it — completes the side reward + Completion List entry." },
        reward: { ko: "컴플리트 리스트 항목 + 절륜 친구 라인 활성화", en: "Completion List entry + bond friendship line activated" },
      },
    ],
  },
  ],
};
