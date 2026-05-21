/** Strip tistory/blog footer noise from scraped warukuma text. */
export function stripBlogGarbage(text) {
  if (!text) return "";
  let t = text;
  const cuts = [
    /공유하기[\s\S]*/,
    /게시글 관리[\s\S]*/,
    /저작자표시[\s\S]*/,
    /'게임공략[\s\S]*/,
    /TAG\s*:[\s\S]*/,
    /본문과 관련 있는 내용으로[\s\S]*/,
    /<!--[\s\S]*/,
    /data-description="[\s\S]*/,
  ];
  for (const re of cuts) t = t.replace(re, "");
  return t.replace(/\s+/g, " ").trim();
}

const JP_RE = /[\u3040-\u30fa\u30fc-\u30ff\u4e00-\u9fff]/;

export function hasJapanese(text) {
  return Boolean(text && JP_RE.test(text));
}

/** Light-touch Korean polish for scraped guide prose. */
export function polishKorean(text) {
  if (!text) return "";
  return text
    .replace(/서브 스토리가 개시된다/g, "서브 스토리가 시작된다")
    .replace(/서브 스토리가 개시 된다/g, "서브 스토리가 시작된다")
    .replace(/서브 스토리가 개시/g, "서브 스토리가 시작")
    .replace(/배틀이/g, "전투가")
    .replace(/배틀/g, "전투")
    .replace(/클리어 된다/g, "완료된다")
    .replace(/클리어 하/g, "완료하")
    .replace(/클리어/g, "완료")
    .replace(/공략 내용\s*/g, "")
    .replace(/쓰러트리도록 하자/g, "쓰러뜨리면 된다")
    .replace(/쓰러트리/g, "쓰러뜨리")
    .replace(/【맵\s*(\d+)】/g, "【맵 $1】")
    .replace(/\s+/g, " ")
    .trim();
}

const PARTICLE_RULES = [
  [/第二章/g, "제2장"],
  [/第三章/g, "제3장"],
  [/第四章/g, "제4장"],
  [/第五章/g, "제5장"],
  [/第六章/g, "제6장"],
  [/第七章/g, "제7장"],
  [/第八章/g, "제8장"],
  [/第九章/g, "제9장"],
  [/第十章/g, "제10장"],
  [/第([0-9]+)章/g, "제$1장"],
  [/の/g, " "],
  [/を/g, " "],
  [/に/g, " "],
  [/で/g, " "],
  [/と/g, " "],
  [/が/g, " "],
  [/は/g, " "],
  [/へ/g, " "],
  [/から/g, " "],
  [/まで/g, " "],
  [/という/g, " "],
  [/する/g, "한다"],
  [/した/g, "했다"],
  [/される/g, "된다"],
  [/ない/g, "않다"],
  [/ある/g, "있다"],
  [/いる/g, "있다"],
  [/なる/g, "된다"],
  [/れる/g, "된다"],
  [/って/g, " "],
  [/て/g, " "],
  [/た/g, " "],
  [/だ/g, " "],
];

/** Glossary-based JP → KO for wiki fallback (not literary translation). */
export function translateJpToKo(text) {
  if (!text) return "";
  let t = stripBlogGarbage(text);
  const rules = [
    [/第([0-9一二三四五六七八九十]+)章/g, "제$1장"],
    [/最終章/g, "최종장"],
    [/第二章/g, "제2장"],
    [/第三章/g, "제3장"],
    [/第四章/g, "제4장"],
    [/第五章/g, "제5장"],
    [/第六章/g, "제6장"],
    [/第七章/g, "제7장"],
    [/第八章/g, "제8장"],
    [/第九章/g, "제9장"],
    [/第十章/g, "제10장"],
    [/桐生/g, "키류"],
    [/真島/g, "마지마"],
    [/サブストーリー/g, "서브 스토리"],
    [/攻略/g, "공략"],
    [/発生時期/g, "발생 시기"],
    [/報酬/g, "보상"],
    [/選択肢/g, "선택지"],
    [/正解/g, "정답"],
    [/バトル/g, "전투"],
    [/マップ/g, "맵"],
    [/近づく/g, "가까이 가면"],
    [/話しかける/g, "말을 건다"],
    [/倒す/g, "쓰러뜨린다"],
    [/クリア/g, "완료"],
    [/アパートへ帰る時/g, "아파트로 돌아갈 때"],
    [/白いスーツ購入後/g, "흰 슈트 구입 후"],
    [/神室町/g, "카무로초"],
    [/蒼天堀/g, "소텐보리"],
    [/武器『([^』]+)』/g, "무기 「$1」"],
    [/アクセサリー『([^』]+)』/g, "액세서리 「$1」"],
    [/を雇える/g, "을 고용할 수 있게 된다"],
    [/を入手/g, "을 입수"],
    [/を受け取り/g, "을 받는다"],
    [/を除き全部攻略する/g, "을 제외하고 모두 완료하면"],
    [/最終決戦前/g, "최종 결전 전"],
  ];
  for (const [re, rep] of rules) t = t.replace(re, rep);
  for (const [re, rep] of PARTICLE_RULES) t = t.replace(re, rep);
  return polishKorean(t.replace(/\s+/g, " ").trim());
}

export function cleanKoField(text, { allowTranslate = true } = {}) {
  let t = stripBlogGarbage(text);
  t = polishKorean(t);
  if (hasJapanese(t) && allowTranslate) t = translateJpToKo(t);
  return t;
}
