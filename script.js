// ====== 질문 데이터 ======
// scale: 1(왼쪽) ~ 5(오른쪽)
const SECTIONS = [
  {
    id: "CI",
    title: "개념 vs 문제 축 (C / I)",
    left: "C",
    right: "I",
    questions: [
      ["새로운 단원을 시작할 때", "A. 개념서를 처음부터 정독한다 (C)", "B. 문제를 풀며 필요한 개념을 찾아본다 (I)"],
      ["문제를 틀렸을 때", "A. 개념 정의부터 다시 확인한다 (C)", "B. 해설의 풀이 흐름을 본다 (I)"],
      ["암기할 내용이 많을 때", "A. 구조를 먼저 정리한다 (C)", "B. 문제에 반복 노출시키며 익힌다 (I)"],
      ["시험 직전 공부 방식은", "A. 개념 노트를 다시 본다 (C)", "B. 실전 문제를 더 푼다 (I)"],
      ["개념 이해가 안 될 때", "A. 교과서·정리본을 다시 본다 (C)", "B. 문제 예시를 여러 개 본다 (I)"],
      ["처음 보는 문제 유형에 대해", "A. 관련 개념부터 떠올린다 (C)", "B. 일단 접근해본다 (I)"],
      ["공부가 잘 안될 때", "A. 개념이 흔들린다고 느낀다 (C)", "B. 문제 감각이 떨어졌다고 느낀다 (I)"],
      ["공부 계획을 세울 때", "A. 개념 범위 기준으로 나눈다 (C)", "B. 문제 세트 기준으로 나눈다 (I)"],
      ["오답 정리 방식은", "A. 개념 단위로 묶는다 (C)", "B. 문제 유형별로 묶는다 (I)"],
      ["가장 불안한 상황은", "A. 개념을 정확히 설명 못 할 때 (C)", "B. 문제를 못 풀 때 (I)"]
    ]
  },
  {
    id: "SM",
    title: "안정 vs 변형 축 (S / M)",
    left: "S",
    right: "M",
    questions: [
      ["공부 루틴은", "A. 항상 비슷한 방식이 좋다 (S)", "B. 조금씩 바뀌는 게 좋다 (M)"],
      ["문제 유형이 바뀌면", "A. 당황하는 편이다 (S)", "B. 오히려 흥미가 생긴다 (M)"],
      ["모의고사 난이도 변화에 대해", "A. 안정적인 시험이 좋다 (S)", "B. 변별력 있는 시험이 좋다 (M)"],
      ["공부 자료 선택 기준은", "A. 검증된 자료 (S)", "B. 새로운 자료도 시도 (M)"],
      ["실전에서", "A. 익숙한 패턴이 편하다 (S)", "B. 변형 문제에 강하다 (M)"],
      ["시험장에서 더 흔들리는 건", "A. 예상보다 어려울 때 (S)", "B. 예상보다 쉬울 때 (M)"],
      ["공부 중 가장 싫은 건", "A. 갑작스러운 방식 변화 (S)", "B. 계속 똑같은 반복 (M)"],
      ["새로운 풀이를 보면", "A. 기존 방식이 낫다고 느낀다 (S)", "B. 써보고 싶다 (M)"],
      ["계획이 틀어지면", "A. 다시 원래대로 맞춘다 (S)", "B. 그에 맞게 바꾼다 (M)"],
      ["시험 전략은", "A. 실수 줄이기 (S)", "B. 점수 극대화 (M)"]
    ]
  },
  {
    id: "DE",
    title: "데이터 vs 직관 축 (D / E)",
    left: "D",
    right: "E",
    questions: [
      ["문제 접근 시", "A. 조건과 수치를 먼저 본다 (D)", "B. 전체 흐름을 먼저 본다 (E)"],
      ["헷갈리는 문제는", "A. 근거를 하나씩 따진다 (D)", "B. 느낌상 답을 좁힌다 (E)"],
      ["선지 판단 기준은", "A. 명확한 근거 (D)", "B. 어색함/자연스러움 (E)"],
      ["계산·자료가 많을수록", "A. 오히려 편하다 (D)", "B. 부담된다 (E)"],
      ["시간 부족 시", "A. 정확한 문제만 푼다 (D)", "B. 감으로라도 넓게 건드린다 (E)"],
      ["실수 원인은", "A. 계산/조건 누락 (D)", "B. 흐름 놓침 (E)"],
      ["설명을 들을 때", "A. 근거가 중요하다 (D)", "B. 맥락이 중요하다 (E)"],
      ["풀이를 설명한다면", "A. 단계별로 설명 (D)", "B. 한 번에 요약 (E)"],
      ["문제를 고를 때", "A. 확실한 문제부터 (D)", "B. 느낌 오는 문제부터 (E)"],
      ["시험 후 후회는", "A. 계산 실수 (D)", "B. 직관 무시 (E)"]
    ]
  },
  {
    id: "RF",
    title: "루틴 vs 유연 축 (R / F)",
    left: "R",
    right: "F",
    questions: [
      ["하루 공부 계획은", "A. 정해진 대로 간다 (R)", "B. 상황에 따라 바꾼다 (F)"],
      ["컨디션이 안 좋을 때", "A. 계획은 지킨다 (R)", "B. 조정한다 (F)"],
      ["공부 시간 분배는", "A. 고정 비율 (R)", "B. 그날그날 다름 (F)"],
      ["예상보다 진도가 느리면", "A. 밀어붙인다 (R)", "B. 조정한다 (F)"],
      ["계획표를 보면", "A. 빈칸이 불안하다 (R)", "B. 여유가 필요하다 (F)"],
      ["장기 계획은", "A. 자세할수록 좋다 (R)", "B. 큰 틀만 있으면 된다 (F)"],
      ["공부 중 끌리는 과목이 생기면", "A. 계획대로 다른 과목 (R)", "B. 그 과목 더 한다 (F)"],
      ["시험 전날은", "A. 정해진 루틴 (R)", "B. 컨디션 우선 (F)"],
      ["공부가 안 될 때", "A. 루틴 문제 (R)", "B. 상황 문제 (F)"],
      ["성적 변화가 생기면", "A. 계획 점검 (R)", "B. 방향 전환 (F)"]
    ]
  }
];

const STORE_KEY = "studycrack_tamgu_mbti_answers_v2";

// ====== Flatten (한 페이지 한 문항) ======
function flattenSections() {
  const list = [];
  SECTIONS.forEach((sec) => {
    sec.questions.forEach((q, idx) => {
      list.push({
        sectionId: sec.id,
        sectionTitle: sec.title,
        left: sec.left,
        right: sec.right,
        qIndexInSection: idx,
        title: q[0],
        a: q[1],
        b: q[2]
      });
    });
  });
  return list;
}

const FLAT = flattenSections(); // 총 40문항
let cursor = 0;

// answers: key = "CI_1" 같은 형태
const answers = {};

// ====== DOM ======
const $survey = document.getElementById("survey");
const $results = document.getElementById("results");

const $progressText = document.getElementById("progressText");
const $axisText = document.getElementById("axisText");
const $sectionTitle = document.getElementById("sectionTitle");
const $qTitle = document.getElementById("qTitle");
const $qSub = document.getElementById("qSub");
const $leftLabel = document.getElementById("leftLabel");
const $rightLabel = document.getElementById("rightLabel");
const $dots = document.getElementById("dots");

const $metricGrid = document.getElementById("metricGrid");
const $typeCode = document.getElementById("typeCode");
const $typeTag = document.getElementById("typeTag");

const $btnPrev = document.getElementById("btnPrev");
const $btnNext = document.getElementById("btnNext");
const $btnSave = document.getElementById("btnSave");
const $btnLoad = document.getElementById("btnLoad");
const $btnReset = document.getElementById("btnReset");

const $btnBack = document.getElementById("btnBack");
const $btnCopy = document.getElementById("btnCopy");

// ====== helpers ======
function qId(sectionId, idxInSection) {
  return `${sectionId}_${idxInSection + 1}`;
}
function currentKey() {
  const item = FLAT[cursor];
  return qId(item.sectionId, item.qIndexInSection);
}
function axisLabel(sec) {
  const map = {
    CI: "C ↔ I",
    SM: "S ↔ M",
    DE: "D ↔ E",
    RF: "R ↔ F"
  };
  return map[sec] || `${sec}`;
}

// ====== Render one question ======
function renderQuestion() {
  const item = FLAT[cursor];
  const key = currentKey();

  $progressText.textContent = `${cursor + 1} / ${FLAT.length}`;
  $axisText.textContent = axisLabel(item.sectionId);
  $sectionTitle.textContent = item.sectionTitle;

  $qTitle.textContent = `${cursor + 1}. ${item.title}`;
  $qSub.innerHTML = `${item.a}<br>${item.b}`;

  $leftLabel.textContent = item.left;
  $rightLabel.textContent = item.right;

  // dots 생성
  $dots.innerHTML = "";
  for (let v = 1; v <= 5; v++) {
    const dot = document.createElement("label");
    dot.className = "dot";
    dot.title = `${v}점`;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = key;
    input.value = String(v);

    // 기존 응답 반영
    if (answers[key] === v) {
      input.checked = true;
      dot.classList.add("checked");
    }

    input.addEventListener("change", () => {
      // checked 스타일 갱신
      $dots.querySelectorAll(".dot").forEach((el) => el.classList.remove("checked"));
      dot.classList.add("checked");
      answers[key] = v;
    });

    dot.appendChild(input);
    $dots.appendChild(dot);
  }

  // 버튼 상태
  $btnPrev.disabled = cursor === 0;
  $btnPrev.style.opacity = cursor === 0 ? ".55" : "1";

  $btnNext.textContent = cursor === FLAT.length - 1 ? "결과 보기" : "다음";
}

// ====== Navigation with validation ======
function requireAnswerOrAlert() {
  const key = currentKey();
  if (!answers[key]) {
    alert("질문에 응답해주세요");
    return false;
  }
  return true;
}

$btnPrev.addEventListener("click", () => {
  if (cursor === 0) return;
  cursor -= 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$btnNext.addEventListener("click", () => {
  // ✅ 무응답 차단
  if (!requireAnswerOrAlert()) return;

  if (cursor === FLAT.length - 1) {
    // 마지막 → 결과
    showResults();
    return;
  }

  cursor += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== Save/Load/Reset ======
$btnSave.addEventListener("click", () => {
  localStorage.setItem(STORE_KEY, JSON.stringify({ answers, cursor }));
  alert("임시저장 완료!");
});

$btnLoad.addEventListener("click", () => {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return alert("저장된 응답이 없습니다.");
  const data = JSON.parse(raw);

  // 복원
  Object.keys(answers).forEach((k) => delete answers[k]);
  Object.assign(answers, data.answers || {});
  cursor = typeof data.cursor === "number" ? Math.min(Math.max(0, data.cursor), FLAT.length - 1) : 0;

  alert("불러오기 완료!");
  renderQuestion();
});

$btnReset.addEventListener("click", () => {
  if (!confirm("정말 전체 응답을 초기화할까요?")) return;
  Object.keys(answers).forEach((k) => delete answers[k]);
  localStorage.removeItem(STORE_KEY);
  cursor = 0;
  alert("초기화 완료!");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== Scoring (좌+우=100%) ======
// 문항 응답 r(1~5)
// rightRatio = (r-1)/4  -> 0..1
// leftRatio  = 1-rightRatio
//
// 축별 평균 비율을 구하고, %는 반드시 합 100.0 되도록 "퍼밀"로 처리
function calcScores() {
  const out = {};
  SECTIONS.forEach((sec) => {
    let rightSumRatio = 0;
    const n = sec.questions.length;

    for (let i = 0; i < n; i++) {
      const key = qId(sec.id, i);
      const r = answers[key];
      if (!r) throw new Error(`Missing answer: ${key}`);

      const right = (Number(r) - 1) / 4; // 0..1
      rightSumRatio += right;
    }

    const rightAvg = rightSumRatio / n;      // 0..1
    const leftAvg = 1 - rightAvg;            // 0..1

    // 퍼밀(1000단위)로 만든 뒤 합이 정확히 1000이 되게 처리
    let rightPermil = Math.round(rightAvg * 1000);
    if (rightPermil < 0) rightPermil = 0;
    if (rightPermil > 1000) rightPermil = 1000;
    const leftPermil = 1000 - rightPermil;

    const rightPct = rightPermil / 10; // 소수 1자리
    const leftPct = leftPermil / 10;

    const winner = rightPermil > leftPermil ? sec.right : sec.left;

    out[sec.id] = {
      axisTitle: sec.title,
      left: sec.left,
      right: sec.right,
      leftPct,
      rightPct,
      winner,
      rightPermil,
      leftPermil
    };
  });
  return out;
}

function typeFromScores(scores) {
  const order = ["CI", "SM", "DE", "RF"];
  return order.map((k) => scores[k].winner).join("");
}

function shortTag(scores) {
  const map = {
    C: "개념정리 선호",
    I: "문제풀이 선호",
    S: "안정 루틴 선호",
    M: "변형 적응 선호",
    D: "근거/데이터 선호",
    E: "맥락/직관 선호",
    R: "계획/루틴 중심",
    F: "상황/유연 중심"
  };
  const code = typeFromScores(scores);
  const parts = code.split("").map((c) => map[c]).filter(Boolean);
  return parts.slice(0, 2).join(" · ");
}

// ====== Results UI ======
function renderResults(scores) {
  $metricGrid.innerHTML = "";

  const axisList = [
    { id: "CI", label: "개념(C) ↔ 문제(I)" },
    { id: "SM", label: "안정(S) ↔ 변형(M)" },
    { id: "DE", label: "데이터(D) ↔ 직관(E)" },
    { id: "RF", label: "루틴(R) ↔ 유연(F)" }
  ];

  axisList.forEach((ax) => {
    const s = scores[ax.id];

    const card = document.createElement("div");
    card.className = "metric";

    const head = document.createElement("div");
    head.className = "metric-head";

    const name = document.createElement("div");
    name.className = "axis-name";
    name.textContent = ax.label;

    const type = document.createElement("div");
    type.className = "axis-type";
    type.textContent = `우세: ${s.winner}`;

    head.appendChild(name);
    head.appendChild(type);

    const barwrap = document.createElement("div");
    barwrap.className = "barwrap";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = "0%";
    barwrap.appendChild(bar);

    const pair = document.createElement("div");
    pair.className = "pair";
    pair.innerHTML = `<span><b>${s.left}</b> ${s.leftPct.toFixed(1)}%</span><span><b>${s.right}</b> ${s.rightPct.toFixed(1)}%</span>`;

    card.appendChild(head);
    card.appendChild(barwrap);
    card.appendChild(pair);

    $metricGrid.appendChild(card);

    requestAnimationFrame(() => {
      bar.style.width = `${s.rightPct}%`;
    });
  });

  const code = typeFromScores(scores);
  $typeCode.textContent = code;
  $typeTag.textContent = shortTag(scores) || "요약 생성됨";
}

function showResults() {
  // 마지막에서만 오지만, 혹시라도 전체 응답 검증
  for (const sec of SECTIONS) {
    for (let i = 0; i < sec.questions.length; i++) {
      const key = qId(sec.id, i);
      if (!answers[key]) {
        alert("질문에 응답해주세요");
        // 해당 질문 위치로 이동
        cursor = FLAT.findIndex((x) => qId(x.sectionId, x.qIndexInSection) === key);
        if (cursor < 0) cursor = 0;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
  }

  const scores = calcScores();
  renderResults(scores);

  $survey.classList.add("hidden");
  $results.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$btnBack.addEventListener("click", () => {
  $results.classList.add("hidden");
  $survey.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$btnCopy.addEventListener("click", async () => {
  // 결과 복사 (현재 answers 기준)
  try {
    const scores = calcScores();
    const code = typeFromScores(scores);

    const lines = [];
    lines.push(`탐구 MBTI: ${code}`);
    ["CI", "SM", "DE", "RF"].forEach((k) => {
      const s = scores[k];
      lines.push(`${s.left} ${s.leftPct.toFixed(1)}% / ${s.right} ${s.rightPct.toFixed(1)}% (우세: ${s.winner})`);
    });

    const text = lines.join("\n");
    await navigator.clipboard.writeText(text);
    alert("클립보드에 복사했어요!");
  } catch (e) {
    alert("복사에 실패했어요. (브라우저 권한/환경 확인)");
  }
});

// 초기 렌더
renderQuestion();
