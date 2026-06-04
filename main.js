/* ═══════════════════════════════════════════════
   PJUCalc — main.js (OFFLINE / CLIENT-SIDE)
   Menyatukan fungsi main.js asli dengan logika dari app.py
═══════════════════════════════════════════════ */

// ── DATA SNI (Diimpor dari app.py) ──
const SNI_ROAD_CLASSES = {
    "arteri_primer": {"label": "Arteri Primer", "E_avg": 15, "E_min_range": 11, "E_max_range": 20, "E_min": 4, "g1": "0.14-0.20", "note": "Sistem menerus dan parsial. SON/LED dianjurkan."},
    "arteri_sekunder": {"label": "Arteri Sekunder", "E_avg": 15, "E_min_range": 11, "E_max_range": 20, "E_min": 4, "g1": "0.14-0.20", "note": "Sistem menerus dan parsial. SON/LED dianjurkan."},
    "kolektor_primer": {"label": "Kolektor Primer", "E_avg": 5, "E_min_range": 3, "E_max_range": 7, "E_min": 2, "g1": "0.14", "note": "Sistem menerus dan parsial. SON/MBF/LED diizinkan."},
    "kolektor_sekunder": {"label": "Kolektor Sekunder", "E_avg": 5, "E_min_range": 3, "E_max_range": 7, "E_min": 2, "g1": "0.14", "note": "Sistem menerus dan parsial. SON/MBF/LED diizinkan."},
    "lokal_primer": {"label": "Lokal Primer", "E_avg": 3, "E_min_range": 2, "E_max_range": 5, "E_min": 1, "g1": "0.10", "note": "Sistem menerus dan parsial. TL/MBF/LED diizinkan."},
    "lokal_sekunder": {"label": "Lokal Sekunder", "E_avg": 3, "E_min_range": 2, "E_max_range": 5, "E_min": 1, "g1": "0.10", "note": "Sistem menerus dan parsial. TL/MBF/LED diizinkan."},
    "bebas_hambatan": {"label": "Bebas Hambatan / Tol", "E_avg": 17, "E_min_range": 15, "E_max_range": 20, "E_min": 5, "g1": "0.14-0.20", "note": "Sistem menerus WAJIB. SON/LED dianjurkan."},
    "layang_terowongan": {"label": "Layang / Terowongan", "E_avg": 22, "E_min_range": 20, "E_max_range": 25, "E_min": 8, "g1": "0.20", "note": "Sistem menerus WAJIB. Bergradasi di ujung."},
    "trotoar": {"label": "Trotoar", "E_avg": 2, "E_min_range": 1, "E_max_range": 4, "E_min": 0.5, "g1": "0.10", "note": "Mengacu SNI Trotoar."}
};

const LAMP_TYPES = {
    "led_40w":  {"label":"LED 40W","watt":40,"lumen":4800,"efficacy":120,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":850000,"sni_type":"LED*"},
    "led_60w":  {"label":"LED 60W","watt":60,"lumen":7800,"efficacy":130,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":1200000,"sni_type":"LED*"},
    "led_80w":  {"label":"LED 80W","watt":80,"lumen":10400,"efficacy":130,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":1550000,"sni_type":"LED*"},
    "led_100w": {"label":"LED 100W","watt":100,"lumen":13500,"efficacy":135,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":1900000,"sni_type":"LED*"},
    "led_150w": {"label":"LED 150W","watt":150,"lumen":20000,"efficacy":133,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":2800000,"sni_type":"LED*"},
    "led_200w": {"label":"LED 200W","watt":200,"lumen":27000,"efficacy":135,"CRI":70,"CCT":"5700K","lifespan_hours":50000,"mf":0.80,"harga_unit":3500000,"sni_type":"LED*"},
    "son_70w":  {"label":"SON 70W","watt":70,"lumen":6500,"efficacy":110,"CRI":25,"CCT":"2100K","lifespan_hours":20000,"mf":0.70,"harga_unit":480000,"sni_type":"SON"},
    "son_150w": {"label":"SON 150W","watt":150,"lumen":16500,"efficacy":110,"CRI":25,"CCT":"2100K","lifespan_hours":20000,"mf":0.70,"harga_unit":750000,"sni_type":"SON"},
    "son_250w": {"label":"SON 250W","watt":250,"lumen":27500,"efficacy":110,"CRI":25,"CCT":"2100K","lifespan_hours":20000,"mf":0.70,"harga_unit":1050000,"sni_type":"SON"},
    "son_400w": {"label":"SON 400W","watt":400,"lumen":44000,"efficacy":110,"CRI":25,"CCT":"2100K","lifespan_hours":20000,"mf":0.70,"harga_unit":1400000,"sni_type":"SON"},
    "sox_35w":  {"label":"SOX 35W","watt":35,"lumen":4550,"efficacy":130,"CRI":0,"CCT":"1800K","lifespan_hours":10000,"mf":0.75,"harga_unit":380000,"sni_type":"SOX"},
    "sox_55w":  {"label":"SOX 55W","watt":55,"lumen":7700,"efficacy":140,"CRI":0,"CCT":"1800K","lifespan_hours":10000,"mf":0.75,"harga_unit":450000,"sni_type":"SOX"},
    "sox_90w":  {"label":"SOX 90W","watt":90,"lumen":13500,"efficacy":150,"CRI":0,"CCT":"1800K","lifespan_hours":10000,"mf":0.75,"harga_unit":580000,"sni_type":"SOX"},
    "sox_135w": {"label":"SOX 135W","watt":135,"lumen":22500,"efficacy":167,"CRI":0,"CCT":"1800K","lifespan_hours":10000,"mf":0.75,"harga_unit":720000,"sni_type":"SOX"},
    "sox_180w": {"label":"SOX 180W","watt":180,"lumen":31500,"efficacy":175,"CRI":0,"CCT":"1800K","lifespan_hours":10000,"mf":0.75,"harga_unit":850000,"sni_type":"SOX"},
    "mbf_125w": {"label":"MBF/U 125W","watt":125,"lumen":6000,"efficacy":50,"CRI":45,"CCT":"4000K","lifespan_hours":24000,"mf":0.65,"harga_unit":320000,"sni_type":"MBF/U"},
    "mbf_250w": {"label":"MBF/U 250W","watt":250,"lumen":13000,"efficacy":52,"CRI":45,"CCT":"4000K","lifespan_hours":24000,"mf":0.65,"harga_unit":520000,"sni_type":"MBF/U"},
    "mbf_400w": {"label":"MBF/U 400W","watt":400,"lumen":22000,"efficacy":55,"CRI":45,"CCT":"4000K","lifespan_hours":24000,"mf":0.65,"harga_unit":720000,"sni_type":"MBF/U"}
};

const TABEL9_SNI = {"sox_35w":{4:[32,32,32,null,null,null,null,null],5:[35,35,35,35,35,34,32,null],6:[42,40,38,36,33,31,30,29]},"sox_55w":{6:[42,40,38,36,33,32,30,28]},"sox_90w":{8:{"6lux":[60,60,58,55,52,50,48,46],"10lux":[36,35,35,33,31,30,29,28]}},"sox_135w":{10:{"20lux":[46,45,45,44,43,41,40,39],"20lux_b":[null,null,25,24,23,22,21,20]}},"sox_180w":{10:{"30lux":[null,null,37,36,35,33,32,31],"30lux_b":[null,null,null,null,22,21,20,20]}},"son_70w":{6:{"6lux":[48,47,46,44,43,41,39,37],"6lux_b":[34,33,32,31,30,28,26,24]}},"son_150w":{8:[null,null,48,47,45,43,41,39]},"son_250w":{10:{"20lux":[null,null,null,null,55,53,50,47],"20lux_b":[null,null,36,35,33,32,30,28]}},"son_400w":{12:[null,null,null,null,39,38,37,36]},"mbf_125w":{5:[33,32,32,31,30,29,28,27],6:[34,33,32,31,30,28,26,24]},"mbf_250w":{8:[null,null,48,47,45,43,41,39]},"mbf_400w":{10:[null,null,36,35,33,32,30,28]}};
const TABEL9_ELUX = {"sox_35w":{4:3.5,5:3.5,6:3.5},"sox_55w":{6:6.0},"sox_90w":{8:{"6lux":6.0,"10lux":10.0}},"sox_135w":{10:{"20lux":20.0,"20lux_b":20.0}},"sox_180w":{10:{"30lux":30.0,"30lux_b":30.0}},"son_70w":{6:{"6lux":6.0,"6lux_b":6.0}},"son_150w":{8:10.0},"son_250w":{10:{"20lux":20.0,"20lux_b":20.0}},"son_400w":{12:30.0},"mbf_125w":{5:3.5,6:6.0},"mbf_250w":{8:10.0},"mbf_400w":{10:20.0}};

const POLE_HEIGHTS = {"4m":{"label":"4 m","height":4,"harga_unit":1200000},"5m":{"label":"5 m","height":5,"harga_unit":1600000},"6m":{"label":"6 m","height":6,"harga_unit":1800000},"7m":{"label":"7 m","height":7,"harga_unit":2200000},"8m":{"label":"8 m","height":8,"harga_unit":2500000},"9m":{"label":"9 m","height":9,"harga_unit":2800000},"10m":{"label":"10 m","height":10,"harga_unit":3200000},"12m":{"label":"12 m","height":12,"harga_unit":4000000},"14m":{"label":"14 m","height":14,"harga_unit":5000000}};

const CURVE_FACTORS = {"lurus":1.00,"r305":0.75,"outer":0.70,"inner":0.55};
const ARRANGEMENT_LABELS = {"single_side":"Satu Sisi / Kiri-Kanan","staggered":"Selang-Seling (Zigzag)","opposite":"Berhadapan","median":"Median (Tengah Jalan)"};

const OPTIONS = { road_classes: SNI_ROAD_CLASSES, lamp_types: LAMP_TYPES, pole_heights: POLE_HEIGHTS };

// ── State ──
let segments = [];
let segmentCounter = 0;
let lastResult = null;

let canvasState = {
  pxPerMeter: 2,
  minPxPerMeter: 0.05,
  maxPxPerMeter: 20,
  data: null,
};

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  bindUI();
  updateSNIInfo();
  addSegment("straight");
});

// ── Bind UI ──
function bindUI() {
  document.getElementById("road_class").addEventListener("change", updateSNIInfo);
  document.getElementById("btn_recommend").addEventListener("click", autoRecommend);
  document.getElementById("btn_calculate").addEventListener("click", calculate);
  document.getElementById("btn_export_json").addEventListener("click", exportJSON);
  document.getElementById("btn_export_csv").addEventListener("click", exportCSV);
  document.getElementById("btn_export_print").addEventListener("click", doPrint);
  document.getElementById("btn_zoom_in").addEventListener("click", () => zoomCanvas(1.5));
  document.getElementById("btn_zoom_out").addEventListener("click", () => zoomCanvas(1/1.5));
  document.getElementById("btn_zoom_fit").addEventListener("click", zoomFit);
  document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => addSegment(btn.dataset.type));
  });

  const vp = document.getElementById("canvas_viewport");
  let dragging = false, startX = 0, startSL = 0;
  vp.addEventListener("mousedown", e => { dragging = true; startX = e.pageX; startSL = vp.scrollLeft; });
  window.addEventListener("mouseup", () => { dragging = false; });
  window.addEventListener("mousemove", e => {
    if (!dragging) return;
    vp.scrollLeft = startSL - (e.pageX - startX);
  });
}

// ── SNI Info Box ──
function updateSNIInfo() {
  const cls = document.getElementById("road_class").value;
  const sni = OPTIONS.road_classes[cls];
  if (!sni) return;
  const box = document.getElementById("sni_info");
  box.querySelector(".sni-row:nth-child(1) strong").textContent = `${sni.E_min_range}–${sni.E_max_range} lux (avg ${sni.E_avg})`;
  box.querySelector(".sni-row:nth-child(2) strong").textContent = `${sni.E_min} lux`;
  box.querySelector(".sni-row:nth-child(3) strong").textContent = sni.g1;
  const noteEl = document.getElementById("sni_note");
  if (noteEl) noteEl.querySelector("span").textContent = sni.note || "";
}

// ── Segment Management ──
function addSegment(type) {
  const id = ++segmentCounter;
  segments.push({ id, type, name: defaultName(type, id) });
  renderSegments();
}
function deleteSegment(id) {
  segments = segments.filter(s => s.id !== id);
  renderSegments();
}
function defaultName(type, id) {
  return ({ straight:"Jalan Lurus", taper:"Jalan Taper", curve:"Tikungan", intersection:"Persimpangan" }[type] || type) + " " + id;
}
function typeName(type) {
  return { straight:"Lurus", taper:"Taper", curve:"Tikungan", intersection:"Persimpangan" }[type] || type;
}

function renderSegments() {
  const container = document.getElementById("segments_list");
  container.innerHTML = "";
  segments.forEach(seg => {
    const div = document.createElement("div");
    div.className = "segment-card";
    div.innerHTML = `
      <div class="segment-card-header">
        <span class="seg-type-badge badge-${seg.type}">${typeName(seg.type)}</span>
        <button class="seg-delete" onclick="deleteSegment(${seg.id})">✕</button>
      </div>
      ${segmentFields(seg)}`;
    container.appendChild(div);
  });
}

function segmentFields(seg) {
  const id = seg.id;
  if (seg.type === "intersection") {
    return `
      <div class="field-row">
        <div class="field-group">
          <label class="seg-label">Lebar Jalan (m)</label>
          <input type="number" id="seg_${id}_width_start" value="${seg.width_start||7}" min="3" max="50" step="0.5">
        </div>
        <div class="field-group">
          <label class="seg-label">Tipe Persimpangan</label>
          <select id="seg_${id}_intersection_type">
            <option value="4way">4 Arah (+)</option>
            <option value="3way">3 Arah (T)</option>
            <option value="roundabout">Bundaran</option>
          </select>
        </div>
      </div>`;
  }
  const showEnd = seg.type === "taper";
  return `
    <div class="field-row">
      <div class="field-group">
        <label class="seg-label">Panjang (m)</label>
        <input type="number" id="seg_${id}_length" value="${seg.length||500}" min="10" max="100000" step="10">
      </div>
      <div class="field-group">
        <label class="seg-label">Lebar ${showEnd?'Awal ':''}(m)</label>
        <input type="number" id="seg_${id}_width_start" value="${seg.width_start||7}" min="2" max="50" step="0.5">
      </div>
    </div>
    ${showEnd ? `
    <div class="field-group">
      <label class="seg-label">Lebar Akhir (m)</label>
      <input type="number" id="seg_${id}_width_end" value="${seg.width_end||14}" min="2" max="50" step="0.5">
    </div>` : ""}`;
}

function collectSegments() {
  return segments.map(seg => {
    const id = seg.id;
    const gv = key => { const el = document.getElementById(`seg_${id}_${key}`); return el ? parseFloat(el.value)||0 : 0; };
    const gs = key => { const el = document.getElementById(`seg_${id}_${key}`); return el ? el.value : ""; };
    const obj = { id, type: seg.type, name: seg.name };
    if (seg.type !== "intersection") {
      obj.length      = gv("length")      || 500;
      obj.width_start = gv("width_start") || 7;
      obj.width_end   = seg.type === "taper" ? (gv("width_end")||14) : obj.width_start;
    } else {
      obj.width_start      = gv("width_start") || 7;
      obj.intersection_type = gs("intersection_type") || "4way";
    }
    return obj;
  });
}

// ── CORE MATH ENGINE (Dari app.py Python) ──
function calcUf(pole_height, road_width, arrangement) {
  const r = road_width / pole_height;
  let uf = 0.30;
  if (r <= 0.5) uf = 0.55;
  else if (r <= 0.8) uf = 0.52;
  else if (r <= 1.0) uf = 0.48;
  else if (r <= 1.3) uf = 0.44;
  else if (r <= 1.6) uf = 0.40;
  else if (r <= 2.0) uf = 0.35;
  if (arrangement === "opposite") uf *= 1.05;
  else if (arrangement === "single_side") uf *= 0.85;
  else if (arrangement === "median") uf *= 1.10;
  return Math.min(uf, 0.60);
}

function calcSpacing(lamp_key, lamp, pole_height, road_width, arrangement, E_target) {
  if (road_width <= 11) {
    const tbl = TABEL9_SNI[lamp_key];
    if (tbl && tbl[pole_height]) {
      const rows = tbl[pole_height];
      const w_idx = Math.min(Math.max(Math.round(road_width) - 4, 0), 7);
      if (!Array.isArray(rows)) {
        let best_sub_key = null, best_sp = null, best_e = null;
        for (const [sub_key, row_list] of Object.entries(rows)) {
          if (w_idx < row_list.length && row_list[w_idx] !== null) {
            const e_val = TABEL9_ELUX[lamp_key]?.[pole_height];
            const e_lux = (e_val && typeof e_val === 'object') ? (e_val[sub_key] || 0) : (e_val || 0);
            if (best_sp === null) {
              best_sub_key = sub_key; best_sp = row_list[w_idx]; best_e = e_lux;
            } else if (e_lux >= E_target && best_e < E_target) {
              best_sub_key = sub_key; best_sp = row_list[w_idx]; best_e = e_lux;
            } else if (e_lux >= E_target && best_e >= E_target && e_lux < best_e) {
              best_sub_key = sub_key; best_sp = row_list[w_idx]; best_e = e_lux;
            }
          }
        }
        if (best_sp !== null) return [Math.round(best_sp * 10) / 10, `Tabel 9 SNI (${best_sub_key})`, best_e];
      } else if (Array.isArray(rows) && w_idx < rows.length && rows[w_idx] !== null) {
        return [Math.round(rows[w_idx] * 10) / 10, "Tabel 9 SNI", TABEL9_ELUX[lamp_key]?.[pole_height] || 0];
      }
    }
  }
  const uf = calcUf(pole_height, road_width, arrangement);
  let sp = (lamp.lumen * uf * lamp.mf) / (E_target * road_width);
  sp = Math.min(Math.max(sp, 10), pole_height * 4);
  const Ea = Math.round(((lamp.lumen * uf * lamp.mf) / (sp * road_width)) * 100) / 100;
  return [Math.round(sp * 10) / 10, "Formula UF/MF", Ea];
}

function calcSegmentData(seg, sni, lamp, lamp_key, pole, arrangement, curve_factor) {
  const ph = pole.height;
  if (seg.type === "intersection") {
    const w = parseFloat(seg.width_start || 7);
    const itype = seg.intersection_type || "4way";
    const area = itype === "4way" ? w*w : (itype === "3way" ? w*w*0.75 : Math.PI*Math.pow(w*1.5, 2));
    const Ei = sni.E_avg * 1.5;
    let np = Math.max(Math.ceil((Ei * area) / (lamp.lumen * 0.45 * lamp.mf)), itype === "3way" ? 3 : 4);
    const Ea = ((np * lamp.lumen * 0.45 * lamp.mf) / area).toFixed(2);
    return { type:"Persimpangan", length:0, width_start:w, width_end:w, spacing:0, total_poles:parseInt(np), E_actual:parseFloat(Ea), E_required:parseFloat(Ei.toFixed(1)), E_required_range:`${Ei.toFixed(1)} lux`, compliant:parseFloat(Ea)>=Ei, zones:null, method:"E×1.5", curve_factor:1.0 };
  }
  
  const len = parseFloat(seg.length||200), ws = parseFloat(seg.width_start||7), we = parseFloat(seg.width_end||ws);
  if (seg.type === "taper") {
    const n_zones = Math.max(1, Math.ceil(len / 50));
    let zones = [], total = 0, method_lbl = "";
    for (let i=0; i<n_zones; i++) {
      const w = ws + (we - ws) * (i + 0.5) / n_zones;
      const zl = len / n_zones;
      const [sp_awal, method, e_tbl9] = calcSpacing(lamp_key, lamp, ph, w, arrangement, sni.E_avg);
      method_lbl = method;
      const sp_final = Math.max(Math.round(sp_awal * curve_factor * 10)/10, 10);
      let np = Math.ceil(zl / sp_final) + 1;
      if (arrangement !== "single_side") np *= 2;
      let Ea = method.startsWith("Tabel") ? (sp_final > 0 ? (e_tbl9 * (sp_awal / sp_final)) : e_tbl9) : ((lamp.lumen * calcUf(ph, w, arrangement) * lamp.mf) / (sp_final * w));
      zones.push({ zone:i+1, length:parseFloat(zl.toFixed(1)), width_start:parseFloat((ws+(we-ws)*i/n_zones).toFixed(1)), width_end:parseFloat((ws+(we-ws)*(i+1)/n_zones).toFixed(1)), spacing:sp_final, poles:np, E_actual:parseFloat(Ea.toFixed(2)) });
      total += np;
    }
    const mid_ea = zones[Math.floor(zones.length/2)]?.E_actual || 0;
    return { type:"Taper", length:len, width_start:ws, width_end:we, spacing:zones[0].spacing, total_poles:total, E_actual:mid_ea, E_required_range:`${sni.E_min_range}–${sni.E_max_range}`, E_required:sni.E_min_range, compliant:mid_ea>=sni.E_min_range, zones:zones, method:method_lbl, curve_factor:curve_factor };
  }

  const [sp_awal, method, e_tbl9] = calcSpacing(lamp_key, lamp, ph, ws, arrangement, sni.E_avg);
  const sp_final = Math.max(Math.round(sp_awal * curve_factor * 10)/10, 10);
  let np = Math.ceil(len / sp_final) + 1;
  if (arrangement !== "single_side") np *= 2;
  let Ea = method.startsWith("Tabel") ? (sp_final > 0 ? (e_tbl9 * (sp_awal / sp_final)) : e_tbl9) : ((lamp.lumen * calcUf(ph, ws, arrangement) * lamp.mf) / (sp_final * ws));
  return { type:seg.type==="curve"?"Tikungan":"Lurus", length:len, width_start:ws, width_end:we, spacing:sp_final, total_poles:np, E_actual:parseFloat(Ea.toFixed(2)), E_required_range:`${sni.E_min_range}–${sni.E_max_range}`, E_required:sni.E_min_range, compliant:parseFloat(Ea.toFixed(2))>=sni.E_min_range, zones:null, method:method, curve_factor:curve_factor };
}

function runCalculation(payload) {
  const sni = OPTIONS.road_classes[payload.road_class];
  const lamp = OPTIONS.lamp_types[payload.lamp_key];
  const pole = OPTIONS.pole_heights[payload.pole_key];
  const cf = CURVE_FACTORS[payload.curve_type] || 1.0;
  
  let results = [];
  payload.segments.forEach((seg, i) => {
    let r = calcSegmentData(seg, sni, lamp, payload.lamp_key, pole, payload.arrangement, cf);
    r.segment_id = seg.id || i+1;
    r.segment_name = seg.name || `Segmen ${i+1}`;
    results.push(r);
  });

  const tp = results.reduce((a,b)=>a+b.total_poles, 0);
  const tl = results.reduce((a,b)=>a+(b.length||0), 0);
  const kw = tp * lamp.watt / 1000;
  const biaya_total = (tp*lamp.harga_unit) + (tp*pole.harga_unit) + (tl*35000*1.1) + (tp*500000);

  return {
    segments: results,
    summary: { total_poles:tp, total_length:tl, lamp:{...lamp, key:payload.lamp_key}, pole:{...pole, key:payload.pole_key}, road_class:sni, arrangement:payload.arrangement, curve_type:payload.curve_type, curve_factor:cf, biaya_lampu:tp*lamp.harga_unit, biaya_tiang:tp*pole.harga_unit, biaya_kabel:tl*35000*1.1, biaya_instalasi:tp*500000, biaya_total:biaya_total, daya_total_kw:parseFloat(kw.toFixed(2)), kwh_per_bulan:parseFloat((kw*12*30).toFixed(1)), biaya_listrik_bln: kw*12*30*1699 },
    metadata: { generated_at: new Date().toLocaleString('id-ID'), standard: "SNI 7391:2008 (Client-Side)" }
  };
}

// ── Auto Recommend (Offline Override) ──
function autoRecommend() {
  const btn = document.getElementById("btn_recommend");
  btn.textContent = "Mencari..."; btn.disabled = true;
  
  setTimeout(() => {
    const segs = collectSegments();
    const width = segs.find(s => s.width_start)?.width_start || 7;
    const rc = document.getElementById("road_class").value;
    const curve = document.getElementById("curve_type").value;
    const sni = OPTIONS.road_classes[rc];
    const cf = CURVE_FACTORS[curve] || 1.0;
    
    let best = null, minScore = Infinity;
    for (const [lk, lamp] of Object.entries(OPTIONS.lamp_types)) {
      for (const [pk, pole] of Object.entries(OPTIONS.pole_heights)) {
        for (const arr of ["single_side", "staggered", "opposite", "median"]) {
          if (arr === "single_side" && width > pole.height * 1.5) continue;
          if (arr === "staggered" && width > pole.height * 2.0) continue;
          if (arr === "median" && width > pole.height * 2.5) continue;
          if (arr === "opposite" && width > pole.height * 3.0) continue;
          
          let [sp, method, e_tbl9] = calcSpacing(lk, lamp, pole.height, width, arr, sni.E_avg);
          let fsp = Math.max(Math.round(sp*cf*10)/10, 10);
          let Ea = method.startsWith("Tabel") ? (fsp>0?e_tbl9*(sp/fsp):e_tbl9) : (lamp.lumen*calcUf(pole.height,width,arr)*lamp.mf)/(fsp*width);
          
          if (Ea >= sni.E_min_range && Ea <= sni.E_max_range * 2.0) {
            let np = Math.ceil(1000/fsp) * (arr!=="single_side"&&arr!=="median"?2:1);
            let score = (np*lamp.harga_unit) + (np*pole.harga_unit) + ((np*lamp.watt/1000)*12*30*12*1699);
            if (score < minScore) { minScore = score; best = { lk, pk, arr, reason:`Lampu ${lamp.label} · Tiang ${pole.label} · ${arr} · Jarak e=${fsp}m · ${Ea.toFixed(1)} lux (${method}).` }; }
          }
        }
      }
    }
    
    if (best) {
      document.getElementById("lamp_key").value = best.lk;
      document.getElementById("pole_key").value = best.pk;
      document.getElementById("arrangement").value = best.arr;
      document.getElementById("rec_hint").textContent = best.reason;
    } else {
      document.getElementById("rec_hint").textContent = "⚠ Tidak ada kombinasi SNI ideal untuk kondisi jalan ekstrim ini.";
    }
    btn.innerHTML = `<svg viewBox="0 0 20 20" fill="none"><path d="M10 2l2.4 4.8L18 8l-4 3.9 1 5.6L10 15l-5 2.5 1-5.6L2 8l5.6-.2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg> Auto-Rekomendasikan (Tabel 9 SNI)`;
    btn.disabled = false;
  }, 100);
}

// ── Calculate (Offline Override) ──
function calculate() {
  if (!segments.length) { alert("Tambahkan minimal satu segmen jalan."); return; }
  const btn = document.getElementById("btn_calculate");
  btn.textContent = "Menghitung..."; btn.disabled = true;

  const payload = {
    road_class:  document.getElementById("road_class").value,
    lamp_key:    document.getElementById("lamp_key").value,
    pole_key:    document.getElementById("pole_key").value,
    arrangement: document.getElementById("arrangement").value,
    curve_type:  document.getElementById("curve_type").value,
    segments:    collectSegments(),
  };

  setTimeout(() => {
    try {
      const data = runCalculation(payload);
      lastResult = { payload, result: data };
      renderResults(data);
    } catch(e) {
      alert("Error kalkulasi: " + e.message);
    } finally {
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M14 3h7m0 0v7m0-7L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Hitung Kebutuhan PJU`;
      btn.disabled = false;
    }
  }, 100);
}

// ── Render Results & Canvas (Sama Persis Kodingan Lama) ──
function renderResults(data) {
  document.getElementById("empty_state").style.display  = "none";
  document.getElementById("results_area").style.display = "block";
  const s = data.summary;

  document.getElementById("kpi_grid").innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Total Titik Lampu</div>
      <div class="kpi-value">${s.total_poles.toLocaleString("id")}</div>
      <div class="kpi-unit">unit tiang lampu</div>
    </div>
    <div class="kpi-card blue">
      <div class="kpi-label">Total Panjang Jalan</div>
      <div class="kpi-value">${s.total_length >= 1000 ? (s.total_length/1000).toFixed(2) : s.total_length.toLocaleString("id")}</div>
      <div class="kpi-unit">${s.total_length >= 1000 ? "km" : "meter"}</div>
    </div>
    <div class="kpi-card green">
      <div class="kpi-label">Daya Total</div>
      <div class="kpi-value">${s.daya_total_kw}</div>
      <div class="kpi-unit">kW — ${s.kwh_per_bulan.toLocaleString("id")} kWh/bln</div>
    </div>
    <div class="kpi-card red">
      <div class="kpi-label">Estimasi Anggaran</div>
      <div class="kpi-value">${shortRupiah(s.biaya_total)}</div>
      <div class="kpi-unit">total investasi awal</div>
    </div>`;

  const warns = data.segments.filter(seg => seg.compliant === false);
  const warnBar = document.getElementById("sni_warn_bar");
  if (warns.length) {
    warnBar.style.display = "block";
    warnBar.innerHTML = `⚠ ${warns.length} segmen tidak memenuhi E minimum SNI 7391:2008 (Tabel 3):<br>${warns.map(w => `• ${w.segment_name}: E aktual ${w.E_actual} lux < E min SNI ${w.E_required} lux`).join("<br>")}`;
  } else warnBar.style.display = "none";

  const tbody = document.getElementById("segment_tbody");
  tbody.innerHTML = "";
  data.segments.forEach(seg => {
    const ok = seg.compliant !== false;
    tbody.innerHTML += `
      <tr>
        <td>${seg.segment_name}</td><td>${seg.type}</td>
        <td>${seg.length?seg.length+"m":"—"}</td>
        <td>${seg.width_start}m${seg.width_end && seg.width_end!==seg.width_start?"→"+seg.width_end+"m":""}</td>
        <td>${seg.spacing?seg.spacing+"m":"Var"}</td><td>${seg.curve_factor||"1.00"}</td>
        <td><strong>${seg.total_poles.toLocaleString("id")}</strong></td>
        <td>${seg.E_actual?seg.E_actual+" lux":"—"}</td>
        <td>${seg.E_required_range||"—"}</td><td>${seg.method||"—"}</td>
        <td class="${ok?"badge-ok":"badge-warn"}">${ok?"✓ OK":"⚠ Cek"}</td>
      </tr>`;
  });

  document.getElementById("cost_breakdown").innerHTML = `
    <div class="cost-grid">
      <div class="cost-row"><span>Lampu (${s.total_poles.toLocaleString("id")} unit)</span><strong>${rupiah(s.biaya_lampu)}</strong></div>
      <div class="cost-row"><span>Tiang & Pondasi</span><strong>${rupiah(s.biaya_tiang)}</strong></div>
      <div class="cost-row"><span>Kabel & Jaringan</span><strong>${rupiah(s.biaya_kabel)}</strong></div>
      <div class="cost-row"><span>Instalasi & Komisioning</span><strong>${rupiah(s.biaya_instalasi)}</strong></div>
    </div>
    <div class="cost-total"><span>TOTAL INVESTASI AWAL</span><strong>${rupiah(s.biaya_total)}</strong></div>
    <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div class="cost-row"><span>Biaya Listrik / Bulan</span><strong>${rupiah(s.biaya_listrik_bln)}</strong></div>
      <div class="cost-row"><span>Konsumsi / Bulan</span><strong>${s.kwh_per_bulan.toLocaleString("id")} kWh</strong></div>
    </div>`;

  const lamp = s.lamp, pole = s.pole;
  document.getElementById("tech_info").innerHTML = `
    <div class="tech-grid">
      <div class="tech-item"><label>Lampu</label><span>${lamp.label}</span></div>
      <div class="tech-item"><label>Lumen Output</label><span>${lamp.lumen.toLocaleString("id")} lm</span></div>
      <div class="tech-item"><label>MF (Pemeliharaan)</label><span>${lamp.mf}</span></div>
      <div class="tech-item"><label>Tinggi Tiang</label><span>${pole.label}</span></div>
      <div class="tech-item"><label>Kelas Jalan</label><span>${s.road_class.label}</span></div>
      <div class="tech-item"><label>Standar Acuan</label><span>SNI 7391:2008</span></div>
    </div>`;

  canvasState.data = data;
  zoomFit();
}

function zoomFit() {
  if (!canvasState.data) return;
  const totalLen = canvasState.data.segments.reduce((a,s)=>a+(s.length||0),0) || 600;
  const vp = document.getElementById("canvas_viewport");
  const pxPerM = Math.min(((vp.clientWidth||800)-60)/totalLen, canvasState.maxPxPerMeter);
  canvasState.pxPerMeter = Math.max(pxPerM, canvasState.minPxPerMeter);
  drawRoadCanvas(canvasState.data);
}

function zoomCanvas(factor) {
  canvasState.pxPerMeter = Math.min(canvasState.maxPxPerMeter, Math.max(canvasState.minPxPerMeter, canvasState.pxPerMeter * factor));
  if (canvasState.data) drawRoadCanvas(canvasState.data);
}

function drawRoadCanvas(data) {
  const canvas = document.getElementById("road_canvas"), ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1, H = 240, PAD = 28;
  const segs = data.segments, totalLen = segs.reduce((a,s)=>a+(s.length||0),0) || 600;
  const PPM = canvasState.pxPerMeter, roadPxW = totalLen * PPM;
  const W = Math.max(roadPxW + PAD*2 + (segs.filter(s=>s.type==="Persimpangan").length*80), 400);

  canvas.width = W*dpr; canvas.height = H*dpr; canvas.style.width = W+"px"; canvas.style.height = H+"px"; ctx.scale(dpr, dpr);
  ctx.fillStyle = "#090c10"; ctx.fillRect(0,0,W,H);
  
  const roadH = 96, roadY = H/2 - roadH/2, arr = data.summary.arrangement;
  let curX = PAD;

  segs.forEach((seg, si) => {
    const segPxW = seg.length ? seg.length * PPM : 80;
    if (seg.type === "Persimpangan") drawIntersection(ctx, curX, segPxW, roadY, roadH, seg, H);
    else drawRoadSegment(ctx, curX, roadY, segPxW, roadH, seg, arr, PPM, H);
    if (si < segs.length - 1) { ctx.save(); ctx.setLineDash([3,4]); ctx.strokeStyle="#2a3050"; ctx.beginPath(); ctx.moveTo(curX+segPxW, 0); ctx.lineTo(curX+segPxW, H); ctx.stroke(); ctx.restore(); }
    curX += segPxW;
  });

  updateScaleInfo(PPM, totalLen);
  buildRuler(PPM, W - PAD*2, totalLen);
}

function drawRoadSegment(ctx, sx, roadY, segW, roadH, seg, arr, PPM, H) {
  const midY = roadY + roadH/2;
  ctx.fillStyle = "#1e293b"; ctx.fillRect(sx, 3, segW, roadY - 5);
  ctx.fillRect(sx, roadY+roadH+2, segW, H-roadY-roadH-16);
  ctx.fillStyle = "#111520"; ctx.fillRect(sx, roadY, segW, roadH);

  ctx.save(); ctx.globalAlpha = 0.15; ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(sx, roadY+2); ctx.lineTo(sx+segW, roadY+2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx, roadY+roadH-2); ctx.lineTo(sx+segW, roadY+roadH-2); ctx.stroke();
  ctx.restore();

  ctx.save(); ctx.setLineDash([Math.max(12, PPM*5), Math.max(8, PPM*3)]); ctx.strokeStyle = "#2a5a38"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(sx, midY); ctx.lineTo(sx+segW, midY); ctx.stroke(); ctx.restore();

  const spacingPx = (seg.spacing||30) * PPM;
  if (spacingPx > 0) {
    let pc = 0;
    for (let x = sx + Math.min(spacingPx*0.5, segW*0.05); x < sx+segW-2 && pc < seg.total_poles; x += spacingPx) {
      if (arr === "staggered") drawPole(ctx, x, pc%2===0?roadY-14:roadY+roadH+14, pc%2===0, roadY, roadH, spacingPx);
      else if (arr === "opposite") { drawPole(ctx,x,roadY-14,true,roadY,roadH,spacingPx); drawPole(ctx,x,roadY+roadH+14,false,roadY,roadH,spacingPx); }
      else if (arr === "single_side") drawPole(ctx, x, roadY-14, true, roadY, roadH, spacingPx);
      else drawPole(ctx, x, midY, true, roadY, roadH, spacingPx);
      pc++;
    }
  }
}

function drawIntersection(ctx, sx, segW, roadY, roadH, seg, H) {
  const cx = sx+segW/2, cy = H/2, rad = Math.min(segW*0.38, roadH*0.42);
  ctx.fillStyle = "#15172a"; ctx.beginPath(); ctx.arc(cx, cy, rad*1.5, 0, Math.PI*2); ctx.fill();
  const corners = [[-0.72,-0.72],[0.72,-0.72],[0.72,0.72],[-0.72,0.72]];
  corners.forEach(([dx,dy]) => drawPole(ctx, cx+dx*rad*1.25, cy+dy*rad*1.25, cy+dy*rad*1.25 < H/2, roadY, roadH, 0));
}

function drawPole(ctx, x, y, isTop, roadY, roadH, spacingPx) {
  const lampY = y, coneBot = isTop ? roadY+roadH : roadY, spread = Math.abs(coneBot-lampY)*0.5;
  ctx.save(); ctx.globalAlpha = 0.065; ctx.fillStyle = "#f0c040";
  ctx.beginPath(); ctx.moveTo(x+6, isTop?lampY+4:lampY-4); ctx.lineTo(x+6-spread, coneBot); ctx.lineTo(x+6+spread, coneBot); ctx.fill();
  const glowR = Math.min(Math.max(spacingPx*0.35, 10), 60);
  const g = ctx.createRadialGradient(x+6, lampY, 0, x+6, lampY, glowR);
  g.addColorStop(0, "rgba(240,192,64,.3)"); g.addColorStop(1, "rgba(240,192,64,0)");
  ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x+6, lampY, glowR, 0, Math.PI*2); ctx.fill(); ctx.restore();
  ctx.strokeStyle = "#8090a8"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, isTop?y+18:y-18); ctx.lineTo(x, y); ctx.stroke();
  ctx.fillStyle = "#c0c8d8"; ctx.beginPath(); ctx.arc(x+6, isTop?y-5:y+5, 3, 0, Math.PI*2); ctx.fill();
}

function updateScaleInfo(PPM, totalLen) {
  const el = document.getElementById("scale_info");
  if (el) el.textContent = `Skala: 1m = ${PPM.toFixed(2)}px | Total: ${totalLen}m`;
}
function buildRuler(PPM, totalPx, totalLen) {
  const ruler = document.getElementById("canvas_ruler");
  if (!ruler) return;
  ruler.innerHTML = ""; ruler.style.width = (totalPx+56)+"px";
  const interval = totalLen > 5000 ? 1000 : (totalLen > 1000 ? 500 : (totalLen > 100 ? 100 : 10));
  for (let m=0; m<=totalLen; m+=interval) {
    const mark = document.createElement("div"); mark.className = "ruler-mark"; mark.style.left = (m*PPM+28)+"px";
    mark.innerHTML = `<div class="tick"></div><div class="label">${m}m</div>`; ruler.appendChild(mark);
  }
}

// ── Export Override (Client-Side) ──
function exportJSON() {
  if (!lastResult) return;
  const a = document.createElement("a");
  a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(lastResult, null, 2));
  a.download = `PJU_Laporan_${dateStr()}.json`; a.click();
}

function exportCSV() {
  if (!lastResult) return;
  let csv = "\ufeffLAPORAN PJU,SNI 7391:2008\n\nSegmen,Panjang(m),Lebar(m),Jarak(m),Jml Tiang,E Aktual,E SNI,Status\n";
  lastResult.result.segments.forEach(seg => {
    csv += `"${seg.segment_name}",${seg.length||0},${seg.width_start},${seg.spacing||0},${seg.total_poles},"${seg.E_actual} lux","${seg.E_required} lux","${seg.compliant?'OK':'Cek'}"\n`;
  });
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
  a.download = `PJU_Laporan_${dateStr()}.csv`; a.click();
}

function doPrint() { window.print(); }
function rupiah(n) { return "Rp " + Math.round(n).toLocaleString("id"); }
function shortRupiah(n) { return n>=1e9 ? "Rp "+(n/1e9).toFixed(1)+" M" : (n>=1e6 ? "Rp "+(n/1e6).toFixed(0)+" Jt" : rupiah(n)); }
function dateStr() { return new Date().toISOString().slice(0,10).replace(/-/g,""); }