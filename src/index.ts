import * as a1lib from "alt1";
import ChatboxReader from "alt1/chatbox";
import * as OCR from "alt1/ocr";
import { ImgRefData } from "alt1/base";

import { ActionbarReader } from "alt1/ability";
import BuffReader from "alt1/buffs";

import stringSimilarity from "string-similarity";
import { io, Socket } from "socket.io-client";

import "./index.html";
import "./appconfig.json";
import "./icon.png";
import "./css/style.css";

// ################# RDT mater data definition #################

interface RDTItem {
  id: number;
  name: string;
  img: string;
  ge_id: number;
}

interface DropEntry {
  time: string;
  itemName: string;
  quantity: number;
  method: "Slayer" | "Seren";
}

interface MethodData {
  id: string;
  hits: number;
  qty: number;
  img: string;
}

interface DropData {
  log?: DropEntry[];
  slayer?: Record<string, MethodData>;
  seren?: Record<string, MethodData>;
}

type ExactValue = number | { cur: number; max: number } | null;

interface BarData {
  hp: number;
  dren: number;
  pray: number;
  sum: number;
  exacthp: ExactValue;
  exactdren: ExactValue;
  exactpray: ExactValue;
  exactsum: ExactValue;
}

const rdtMaster: RDTItem[] = [
  { id: 1, name: "Uncut dragonstone", img: "1.png", ge_id: 1631 },
  { id: 2, name: "Loop half of a key", img: "2.png", ge_id: 987 },
  { id: 3, name: "Tooth half of a key", img: "3.png", ge_id: 985 },
  { id: 4, name: "Huge plated rune salvage", img: "4.png", ge_id: 47316 },
  { id: 5, name: "Magic logs", img: "5.png", ge_id: 1513 },
  { id: 6, name: "Rune arrowheads", img: "6.png", ge_id: 44 },
  { id: 7, name: "Soft clay", img: "7.png", ge_id: 1761 },
  { id: 8, name: "Small bladed orikalkum salvage", img: "8.png", ge_id: 52945 },
  { id: 9, name: "Catalytic anima stone", img: "9.png", ge_id: 54019 },
  { id: 10, name: "Teak plank", img: "10.png", ge_id: 8780 },
  { id: 11, name: "Dragon bones", img: "11.png", ge_id: 536 },
  { id: 12, name: "Dragon helm", img: "12.png", ge_id: 1149 },
  { id: 13, name: "Dragon longsword", img: "13.png", ge_id: 1305 },
  { id: 14, name: "Off-hand dragon longsword", img: "14.png", ge_id: 25740 },
  { id: 15, name: "Molten glass", img: "15.png", ge_id: 1775 },
  { id: 16, name: "Runite stone spirit", img: "16.png", ge_id: 44808 },
  { id: 17, name: "Raw lobster", img: "17.png", ge_id: 377 },
  { id: 18, name: "Shield left half", img: "18.png", ge_id: 2366 },
  { id: 19, name: "Dragon spear", img: "19.png", ge_id: 1249 },
  { id: 20, name: "Yew logs", img: "20.png", ge_id: 1515 },
  { id: 21, name: "Super restore (4)", img: "21.png", ge_id: 3024 },
  { id: 22, name: "Prayer potion (4)", img: "22.png", ge_id: 2434 },
  { id: 23, name: "Raw rocktail", img: "23.png", ge_id: 15270 },
  { id: 24, name: "Mahogany plank", img: "24.png", ge_id: 8782 },
  { id: 25, name: "Magic seed", img: "25.png", ge_id: 5316 },
  { id: 26, name: "Water talisman", img: "26.png", ge_id: 1444 },
  { id: 27, name: "Battlestaff", img: "27.png", ge_id: 1391 },
  { id: 28, name: "Hardened dragon bones", img: "28.png", ge_id: 4834 },
  { id: 29, name: "Onyx bolt tips", img: "29.png", ge_id: 9185 },
  { id: 30, name: "Ciku seed", img: "30.png", ge_id: 48769 },
  { id: 31, name: "Golden dragonfruit seed", img: "31.png", ge_id: 48764 },
  { id: 32, name: "Uncut diamond", img: "32.png", ge_id: 1617 },
  { id: 33, name: "Soul rune", img: "33.png", ge_id: 566 },
  { id: 34, name: "Light animica stone spirit", img: "34.png", ge_id: 44810 },
  { id: 35, name: "Dark animica stone spirit", img: "35.png", ge_id: 44811 },
  { id: 36, name: "Primal stone spirit", img: "36.png", ge_id: 57174 },
  { id: 37, name: "Crystal key", img: "37.png", ge_id: 989 },
  { id: 38, name: "White berries", img: "38.png", ge_id: 239 },
  { id: 39, name: "Ectoplasm", img: "39.png", ge_id: 55336 },
  {
    id: 40,
    name: "Medium spiky orikalkum salvage",
    img: "40.png",
    ge_id: 51103,
  },
  {
    id: 41,
    name: "Large blunt necronium salvage",
    img: "41.png",
    ge_id: 53507,
  },
  { id: 42, name: "Wine of Saradomin", img: "42.png", ge_id: 592 },
  { id: 43, name: "Aura refresh", img: "43.png", ge_id: 0 },
  {
    id: 44,
    name: "Distraction & Diversion reset token (daily)",
    img: "44.png",
    ge_id: 0,
  },
  {
    id: 45,
    name: "Distraction & Diversion reset token (weekly)",
    img: "45.png",
    ge_id: 0,
  },
  {
    id: 46,
    name: "Distraction & Diversion reset token (monthly)",
    img: "46.png",
    ge_id: 0,
  },
  { id: 47, name: "Vecna skull", img: "47.png", ge_id: 20667 },
  { id: 48, name: "Cheese+tom batta", img: "48.png", ge_id: 2259 },
  { id: 49, name: "Blurberry Special", img: "49.png", ge_id: 2064 },
  { id: 50, name: "Hazelmere's signet ring", img: "hsr.png", ge_id: 39814 },
];

let method: "Slayer" | "Seren" | undefined;

if (window.alt1) {
  alt1.identifyAppUrl("./appconfig.json");
} else {
  let addappurl = `alt1://addapp/${
    new URL("./appconfig.json", document.location.href).href
  }`;
  document.querySelector(
    "body"
  ).innerHTML = `Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1`;
}

const currData = {
  elderOverload: false,
  darkness: false,
  aura: false,
  bonfireBoost: false,
  prayerRenewActive: false,
  soulSplit: false,
  corruption: false,
};

// ################# Chatbox reader area #################

const chatBoxColor = a1lib.mixColor(105, 105, 105);

const reader = new ChatboxReader();
reader.readargs = {
  colors: [
    a1lib.mixColor(255, 111, 0), // LOTD
    a1lib.mixColor(0, 255, 255), // seren spirit
  ],
};

let findChat = setInterval(function () {
  if (!window.alt1) {
    clearInterval(findChat);
    return;
  }
  if (reader.pos === null) reader.find();
  else {
    clearInterval(findChat);
    alt1.overLayRect(
      chatBoxColor,
      reader.pos.mainbox.rect.x,
      reader.pos.mainbox.rect.y,
      reader.pos.mainbox.rect.width,
      reader.pos.mainbox.rect.height,
      2000,
      3
    );
    loadStorageData();
    loadEvents();
    connectWebSocket();
    setInterval(function () {
      readChat();
    }, 600);
  }
}, 1000);

function addItem(
  time: string,
  itemName: string,
  quantity: number,
  method: "Slayer" | "Seren"
): void {
  if (time.length < 9) {
    time =
      new Date().toISOString().replace(/[:]/g, "-").split("T")[0] + " " + time;
  }

  const names = rdtMaster.map((item) => item.name);
  const match = stringSimilarity.findBestMatch(itemName, names);
  const bestMatch = match.bestMatch;

  if (bestMatch.rating > 0.5) {
    const foundItem = rdtMaster.find((item) => item.name === bestMatch.target);
    if (!foundItem) return;

    const id = foundItem.id;
    const dropData = loadDropData();
    const master = rdtMaster.find((item) => item.id === id);
    if (!master) return;

    console.log(`Item: ${itemName} found in master data as ${master.name}`);

    if (!dropData.log) dropData.log = [];
    dropData.log.push({ time, itemName, quantity, method });

    const rightNm = master.name;

    const target =
      method === "Slayer" ? (dropData.slayer ||= {}) : (dropData.seren ||= {});

    if (!target[rightNm]) {
      target[rightNm] = {
        id: master.id.toString(),
        hits: 0,
        qty: 0,
        img: master.img,
      };
    }

    target[rightNm].hits += 1;
    target[rightNm].qty += quantity;

    saveDropData(dropData);
    updateDropTable(dropData);
    pushToWS(dropData);
  } else {
    console.log(`Item semelhante a "${itemName}" não encontrado.`);
  }
}

function readChat(): void {
  const opts = reader.read() || [];

  for (let i = 0; i < opts.length; i++) {
    let chat = opts[i].text;
    if (chat.charAt(0) !== "[" && i > 0) {
      chat = opts[i - 1].text + " " + chat;
    }

    if (chat.trim().length > 0) {
      let match: RegExpMatchArray | null;

      if ((match = chat.match(/\[(.*?)\].*?receive:\s(\d+)\s+x\s+(.*)\./))) {
        method = "Slayer";
      } else if (
        (match = chat.match(
          /\[(.*?)\].*?Seren spirit gifts you:\s(\d+)\s+x\s+(.*)/
        ))
      ) {
        method = "Seren";
      }

      if (match) {
        const [_, time, qtyStr, itemName] = match;
        const quantity = parseInt(qtyStr, 10);
        if (method) addItem(time, itemName, quantity, method);
      }
    }
  }
}

// ################# actionbar reader area #################

const actionBarColor = a1lib.mixColor(157, 173, 251);

const actionbar = new ActionbarReader();

let findBar = setInterval(function () {
  if (!window.alt1) {
    clearInterval(findBar);
    return;
  }
  if (actionbar.pos === null) actionbar.find();
  else {
    clearInterval(findBar);
    alt1.overLayRect(
      actionBarColor,
      actionbar.pos.x,
      actionbar.pos.y,
      400,
      30,
      2000,
      3
    );
    setInterval(function () {
      readBar();
    }, 600);
  }
}, 1000);

function readBar() {
  // pushActionBar(actionbar.read());
  const data = {
    ...actionbar.read(),
    buffs: currData,
  } as any;
  pushActionBar(data);
}

// ################# buffs reader area #################

const buffBarColor = a1lib.mixColor(4, 192, 0);

const buffs = new BuffReader();

buffs.debuffs = false;

var buffImages = a1lib.webpackImages({
  elderOverload: require("./img/Elder_Overload-noborder.data.png"),
  darkness: require("./img/Darkness-noborder.data.png"),
  aura: require("./img/Aura-noborder.data.png"),
  bonfireBoost: require("./img/Bonfire_Boost-noborder.data.png"),
  prayerRenewActive: require("./img/Prayer_Renew_Active-noborder.data.png"),
  soulSplit: require("./img/Soul_Split-noborder.data.png"),
  corruption: require("./img/corruption.data.png"),
});

let findBuffs = setInterval(function () {
  if (!window.alt1) {
    clearInterval(findBuffs);
    return;
  }
  if (buffs.pos === null) buffs.find();
  else {
    clearInterval(findBuffs);
    alt1.overLayRect(buffBarColor, buffs.pos.x, buffs.pos.y, 300, 80, 2000, 2);
    setInterval(function () {
      readBuffs();
    }, 1000);
  }
}, 1000);

function readBuffs() {
  const buffsReader = buffs.read();
  const threshold = 100;

  for (let testid in buffImages) {
    const img = new ImgRefData(buffImages[testid]);
    const imgdata = img.toData();
    imgdata.show();

    let found = false;

    for (const buff of buffsReader) {
      const result = buff.countMatch(imgdata, false);

      if (result.passed > threshold) {
        found = true;
        currData[testid] = true;
        // console.log(`✅ '${testid}'`);
        break;
      }
    }

    if (!found) {
      currData[testid] = false;
      // console.log(`❌ '${testid}'`);
    }
  }
}

// ######### localStorage #########

const STORAGE_KEY = "rdtDrops";

function loadDropData(): DropData {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveDropData(data: DropData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadStorageData(): void {
  const data = loadDropData();
  const { log, ...rest } = data;
  updateDropTable(rest);
}

// ######### HTML #########

function updateDropTable(data: Partial<DropData>): void {
  const tbody_slayer = document.getElementById(
    "lootTableBodySlayer"
  ) as HTMLTableSectionElement;
  const tbody_seren = document.getElementById(
    "lootTableBodySeren"
  ) as HTMLTableSectionElement;
  const progress = document.getElementById("progress") as HTMLProgressElement;
  const label = document.getElementById("progressLabel") as HTMLElement;

  tbody_slayer.innerHTML = "";
  tbody_seren.innerHTML = "";

  let totalRdtRolls = 0;

  const fillTable = (
    tbody: HTMLTableSectionElement,
    tableData?: Record<string, MethodData>
  ) => {
    if (!tableData) return;
    for (const [item, { hits, qty }] of Object.entries(tableData)) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item}</td><td>${hits}</td><td>${qty}</td>`;
      tbody.appendChild(row);
      totalRdtRolls += hits;
    }
  };

  fillTable(tbody_slayer, data.slayer);
  fillTable(tbody_seren, data.seren);

  if (progress && label) {
    progress.value = totalRdtRolls;
    label.textContent = `${totalRdtRolls.toLocaleString()} / 16,000`;
  }
}

function loadEvents() {
  const modal = document.getElementById("confirmModal");

  document.getElementById("resetButton").addEventListener("click", () => {
    modal.style.display = "block";
  });
  document.getElementById("refreshButton").addEventListener("click", () => {
    pushToWS(loadDropData());
    loadStorageData();
  });

  document.getElementById("confirmReset").addEventListener("click", () => {
    modal.style.display = "none";

    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      localStorage.setItem(STORAGE_KEY + "_bkp", data);
    }
    localStorage.removeItem(STORAGE_KEY);
    loadStorageData();
    pushToWS(loadDropData());
  });

  document.getElementById("cancelReset").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // data export button
  document.getElementById("exportButton").addEventListener("click", () => {
    const data = loadDropData();

    const log = data.log;

    if (!log || log.length === 0) {
      console.warn("No data to export.");
      return;
    }

    const headers = Object.keys(log[0]);
    const csvRows = [];

    csvRows.push(headers.join(","));

    log.forEach((entry) => {
      const values = headers.map((header) => {
        const val = entry[header];
        return `${String(val).replace(/"/g, '""')}`;
      });
      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    const isoString = new Date().toISOString().replace(/[:]/g, "-");

    a.download = `rdt_tracker_${isoString.slice(0, 19)}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  });

  // data import button
  document.getElementById("importButton")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";

    input.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result !== "string") return;

        const lines = result.trim().split("\n");
        const headers = lines[0]
          .split(",")
          .map((h) => h.trim().replace(/^"|"$/g, ""));

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i]
            .split(",")
            .map((v) => v.trim().replace(/^"|"$/g, ""));

          const entry: Record<string, string> = {};
          headers.forEach((key, index) => {
            entry[key] = values[index];
          });

          const time = entry["time"];
          const itemName = entry["itemName"];
          const quantity = parseInt(entry["quantity"]);
          const method = entry["method"] as "Slayer" | "Seren";

          if (
            !time ||
            !itemName ||
            isNaN(quantity) ||
            !["Slayer", "Seren"].includes(method)
          ) {
            console.warn("Linha inválida ignorada:", entry);
            continue;
          }

          addItem(time, itemName, quantity, method);
        }
      };

      reader.readAsText(file);
    });

    input.click();
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");

      document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.classList.toggle("active", btn === button));

      document
        .querySelectorAll(".tab-content")
        .forEach((content) =>
          content.classList.toggle("active", content.id === tab)
        );
    });
  });
}

// ######### Websocket #########
let socket: Socket;
const token = "meu_token_secreto";

function connectWebSocket(): void {
  // const ws_url = "https://rdt-tracker-server.onrender.com";
  const ws_url = "http://localhost:3000";
  socket = io(ws_url, {
    query: { token },
  });

  socket.on("connect", () => {
    console.log("Conectado. Validando token...");
  });

  socket.on("disconnect", () => {
    console.log("Desconectado.");
  });
}

function pushToWS(data: DropData): void {
  if (!socket || socket.disconnected) {
    connectWebSocket();
  }

  socket.emit("updateInventory", data);
}

function pushActionBar(data: BarData): void {
  if (!socket || socket.disconnected) {
    connectWebSocket();
  }

  socket.emit("updateCurrentStats", data);
}
