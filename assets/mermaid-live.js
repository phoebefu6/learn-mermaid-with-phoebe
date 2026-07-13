/* learn-mermaid-with-phoebe - live diagram engine
   Every .mmd block on the page is REAL mermaid source, rendered in the browser
   by the same library the course teaches. Tabs flip between the rendered SVG
   and the source; copy grabs the source; the rocket opens mermaid.live. */

import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
  theme: "base",
  fontFamily: "'Inter', 'Avenir Next', 'Segoe UI', sans-serif",
  themeVariables: {
    primaryColor: "#FFEFF5",
    primaryTextColor: "#291B24",
    primaryBorderColor: "#D6246E",
    secondaryColor: "#FFF7E6",
    secondaryBorderColor: "#F59E0B",
    tertiaryColor: "#FDF7FA",
    tertiaryBorderColor: "#FF9EBF",
    lineColor: "#C05585",
    textColor: "#291B24",
    noteBkgColor: "#FFF7E6",
    noteBorderColor: "#F59E0B",
    actorBkg: "#FFEFF5",
    actorBorder: "#D6246E",
    actorLineColor: "#D9C6D2",
    signalColor: "#291B24",
    labelBoxBkgColor: "#FFEFF5",
    labelBoxBorderColor: "#D6246E",
    clusterBkg: "#FDF7FA",
    clusterBorder: "#F2E6EE",
    edgeLabelBackground: "#FFFFFF",
    pie1: "#D6246E", pie2: "#FF3670", pie3: "#FF9EBF", pie4: "#F59E0B",
    pie5: "#FBBF24", pie6: "#8E1146", pie7: "#FFD9E6", pie8: "#806A78",
    git0: "#D6246E", git1: "#F59E0B", git2: "#FF3670", git3: "#8E1146",
    gitBranchLabel0: "#FFFFFF", gitBranchLabel1: "#3A2400",
    tagLabelBackground: "#FFF7E6", tagLabelBorder: "#F59E0B",
    fillType0: "#FFEFF5", fillType1: "#FFF7E6", fillType2: "#FFD9E6",
    fillType3: "#FDE9CF", fillType4: "#FFC7DB", fillType5: "#FCE1B8"
  },
  gantt: { barHeight: 22, barGap: 6, topPadding: 46, leftPadding: 110 }
});

function liveEditorUrl(code) {
  try {
    var state = JSON.stringify({
      code: code,
      mermaid: JSON.stringify({ theme: "default" }),
      autoSync: true,
      updateDiagram: true
    });
    var b64 = btoa(unescape(encodeURIComponent(state)));
    return "https://mermaid.live/edit#base64:" + b64;
  } catch (e) { return null; }
}

var blocks = Array.prototype.slice.call(document.querySelectorAll(".mmd"));
blocks.forEach(function (block, idx) {
  var srcEl = block.querySelector(".mmd-src");
  if (!srcEl) return;
  var code = srcEl.textContent.replace(/^\n+|\s+$/g, "");
  var caption = block.getAttribute("data-caption") || "";

  block.innerHTML = "";

  var bar = document.createElement("div");
  bar.className = "mmd-bar";
  var dot = document.createElement("span");
  dot.className = "mmd-dot";
  var title = document.createElement("span");
  title.className = "mmd-title";
  title.textContent = "live mermaid";
  var tabs = document.createElement("div");
  tabs.className = "mmd-tabs";
  var tabR = document.createElement("button");
  tabR.type = "button"; tabR.className = "on"; tabR.textContent = "Rendered";
  var tabC = document.createElement("button");
  tabC.type = "button"; tabC.textContent = "Code";
  tabs.appendChild(tabR); tabs.appendChild(tabC);

  var copyBtn = document.createElement("button");
  copyBtn.type = "button"; copyBtn.className = "mmd-copy"; copyBtn.textContent = "Copy";
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(code).then(function () {
      copyBtn.textContent = "Copied ✓";
      setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
    });
  });

  bar.appendChild(dot); bar.appendChild(title); bar.appendChild(tabs); bar.appendChild(copyBtn);

  var live = liveEditorUrl(code);
  if (live) {
    var launch = document.createElement("a");
    launch.className = "mmd-launch"; launch.href = live;
    launch.target = "_blank"; launch.rel = "noopener";
    launch.textContent = "Edit on mermaid.live ↗";
    bar.appendChild(launch);
  }

  var panelR = document.createElement("div");
  panelR.className = "mmd-panel mmd-render";
  var panelC = document.createElement("pre");
  panelC.className = "mmd-panel mmd-code";
  panelC.textContent = code;
  panelC.hidden = true;

  block.appendChild(bar);
  block.appendChild(panelR);
  block.appendChild(panelC);
  if (caption) {
    var cap = document.createElement("div");
    cap.className = "mmd-cap";
    cap.textContent = caption;
    block.appendChild(cap);
  }

  tabR.addEventListener("click", function () {
    tabR.classList.add("on"); tabC.classList.remove("on");
    panelR.hidden = false; panelC.hidden = true;
  });
  tabC.addEventListener("click", function () {
    tabC.classList.add("on"); tabR.classList.remove("on");
    panelC.hidden = false; panelR.hidden = true;
  });

  mermaid.render("mmdlive" + idx, code).then(function (out) {
    panelR.innerHTML = out.svg;
    var svg = panelR.querySelector("svg");
    if (svg) { svg.removeAttribute("height"); svg.style.maxWidth = "100%"; }
    block.classList.add("mmd-ok");
  }).catch(function (err) {
    block.classList.add("mmd-err");
    panelR.innerHTML = "";
    var msg = document.createElement("div");
    msg.className = "mmd-errbox";
    msg.textContent = "Diagram failed to render here (offline or CDN blocked) - flip to Code, it is the real source.";
    panelR.appendChild(msg);
    /* eslint-disable no-console */
    console.warn("mermaid render failed for block", idx, err);
  });
});
