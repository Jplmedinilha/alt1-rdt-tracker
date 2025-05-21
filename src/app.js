const rdtMaster = [
  { id: 1, name: "Uncut dragonstone", img: "1.png" },
  { id: 2, name: "Loop half of a key", img: "2.png" },
  { id: 3, name: "Tooth half of a key", img: "3.png" },
  { id: 4, name: "Huge plated rune salvage", img: "4.png" },
  { id: 5, name: "Magic logs", img: "5.png" },
  { id: 6, name: "Rune arrowheads", img: "6.png" },
  { id: 7, name: "Soft clay", img: "7.png" },
  { id: 8, name: "Small bladed orikalkum salvage", img: "8.png" },
  { id: 9, name: "Catalytic anima stone", img: "9.png" },
  { id: 10, name: "Teak plank", img: "10.png" },
  { id: 11, name: "Dragon bones", img: "11.png" },
  { id: 12, name: "Dragon helm", img: "12.png" },
  { id: 13, name: "Dragon longsword", img: "13.png" },
  { id: 14, name: "Off-hand dragon longsword", img: "14.png" },
  { id: 15, name: "Molten glass", img: "15.png" },
  { id: 16, name: "Runite stone spirit", img: "16.png" },
  { id: 17, name: "Raw lobster", img: "17.png" },
  { id: 18, name: "Shield left half", img: "18.png" },
  { id: 19, name: "Dragon spear", img: "19.png" },
  { id: 20, name: "Yew logs", img: "20.png" },
  { id: 21, name: "Super restore (4)", img: "21.png" },
  { id: 22, name: "Prayer potion (4)", img: "22.png" },
  { id: 23, name: "Raw rocktail", img: "23.png" },
  { id: 24, name: "Mahogany plank", img: "24.png" },
  { id: 25, name: "Magic seed", img: "25.png" },
  { id: 26, name: "Water talisman", img: "26.png" },
  { id: 27, name: "Battlestaff", img: "27.png" },
  { id: 28, name: "Hardened dragon bones", img: "28.png" },
  { id: 29, name: "Onyx bolt tips", img: "29.png" },
  { id: 30, name: "Ciku seed", img: "30.png" },
  { id: 31, name: "Golden dragonfruit seed", img: "31.png" },
  { id: 32, name: "Uncut diamond", img: "32.png" },
  { id: 33, name: "Soul rune", img: "33.png" },
  { id: 34, name: "Light animica stone spirit", img: "34.png" },
  { id: 35, name: "Dark animica stone spirit", img: "35.png" },
  { id: 36, name: "Primal stone spirit", img: "36.png" },
  { id: 37, name: "Crystal key", img: "37.png" },
  { id: 38, name: "White berries", img: "38.png" },
  { id: 39, name: "Ectoplasm", img: "39.png" },
  { id: 40, name: "Medium spiky orikalkum salvage", img: "40.png" },
  { id: 41, name: "Large blunt necronium salvage", img: "41.png" },
  { id: 42, name: "Wine of Saradomin", img: "42.png" },
  { id: 43, name: "Aura refresh", img: "43.png" },
  {
    id: 44,
    name: "Distraction & Diversion reset token (daily)",
    img: "44.png",
  },
  {
    id: 45,
    name: "Distraction & Diversion reset token (weekly)",
    img: "45.png",
  },
  {
    id: 46,
    name: "Distraction & Diversion reset token (monthly)",
    img: "46.png",
  },
  { id: 47, name: "Vecna skull", img: "47.png" },
  { id: 48, name: "Cheese+tom batta", img: "48.png" },
  { id: 49, name: "Blurberry Special", img: "49.png" },
  { id: 50, name: "Hazelmere's signet ring", img: "50.png" },
];

// ######### alt 1 settings #########

A1lib.identifyApp("appconfig.json");

const chatBoxColor = A1lib.mixColor(105, 105, 105);

let reader = new Chatbox.default();
reader.readargs = {
  colors: [
    A1lib.mixColor(255, 111, 0), // LOTD
    A1lib.mixColor(0, 255, 255), // seren spirit
  ],
  backwards: true,
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
    }, 300);
  }
}, 1000);

let hpLevel = null;

let findHP = setInterval(function () {
  if (!window.alt1) {
    clearInterval(findHP);
    return;
  }
  if (hpLevel === null) {
    ImageData.fromBase64(function (result) {
      var imgs = a1lib.bindfullscreen();
      hpLevel = a1lib.findsubimg(imgs, result)[0];
    }, "iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEXSURBVDhPlZCxTgJBFEXnK3Bm3V3ATSyYuJEIjGAcCoIbKUxMTNTOgvArdn4DnZWFUfkNf4DEwpraWMAlb2Dd2VkkWtziZc4972XYSXKB8eUBFiO5ys1+lpHE11CiHXEMIoHv4WaGwq4TXXicn1dz81SHeL87LDA2x8aDbAs9zPpZXDidXcaIHs+iguRTBzl4U2yGuuy+W8mLmsJAfwmxPyIdljC3z/6nKO2xmifwYF9FW5oCH3W+NcQsWqXsj2QYIOY7eFJe7iq36Ma+hrosljFa/i7qnsDzWkabtsnsa6hDXaZ0D41K2cgagcDr8WrTbzJb8qKE6VCXJVe3UHtVnJZDdAIfRz7HRHEDu7JUQnlT3LDUoe4SywKyJO/urWgAAAAASUVORK5CYII=");
  } else {
    clearInterval(findHP);

    alt1.overLayRect(
      chatBoxColor,
      hpLevel.x - 10,
      hpLevel.y - 10,
      120,
      30,
      2000,
      3
    );

    setInterval(function () {
      readHP(hpLevel.x - 10, hpLevel.y - 10, 120, 30);
    }, 300);
  }
}, 1000);

// [
//   {
//       "text": "[16:08:52] You feel the effects of the Luck of the Dwarves relic power.",
//       "fragments": [
//           {
//               "color": [
//                   255,
//                   255,
//                   255
//               ],
//               "index": -1,
//               "text": "[",
//               "xstart": 4,
//               "xend": 8
//           },
//           {
//               "text": "16:08:52",
//               "color": [
//                   127,
//                   169,
//                   255
//               ],
//               "index": 0,
//               "xstart": 8,
//               "xend": 58
//           },
//           {
//               "text": "]",
//               "color": [
//                   255,
//                   255,
//                   255
//               ],
//               "index": 1,
//               "xstart": 58,
//               "xend": 62
//           },
//           {
//               "text": " You feel the effects of the Luck of the Dwarves relic power.",
//               "color": [
//                   255,
//                   111,
//                   0
//               ],
//               "index": 2,
//               "xstart": 65,
//               "xend": 397
//           }
//       ],
//       "basey": 954
//   },
//   {
//       "text": "You receive: 1 x Huge plated rune salvage.",
//       "fragments": [
//           {
//               "text": "You receive: 1 x Huge plated rune salvage.",
//               "color": [
//                   255,
//                   111,
//                   0
//               ],
//               "index": 0,
//               "xstart": 4,
//               "xend": 246
//           }
//       ],
//       "basey": 970
//   }
// ]
// Chat: [16:08:52] You feel the effects of the Luck of the Dwarves relic power. You receive: 1 x Huge plated rune salvage.

function readChat() {
  let opts = reader.read() || [];

  for (const a in opts) {
    const chat =
      opts[a].text.charAt(0) == "["
        ? opts[a].text
        : opts[a - 1].text + " " + opts[a].text;

    if (chat.trim().length > 0) {
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
        const time = match[1];
        const quantity = parseInt(match[2]);
        const itemName = match[3];
        console.log({ time, quantity, itemName });
        console.log(opts);
        addItem(time, itemName, quantity, method);
      }
    }
  }
}

// ######### localStorage #########

const STORAGE_KEY = "rdtDrops";

function loadDropData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveDropData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addItem(time, itemName, quantity, method) {
  if (time.length < 9)
    time =
      new Date().toISOString().replace(/[:]/g, "-").split("T")[0] + " " + time;
  const names = rdtMaster.map((item) => item.name);

  const match = stringSimilarity.findBestMatch(itemName, names);
  const bestMatch = match.bestMatch;
  if (bestMatch.rating > 0.5) {
    const foundItem = rdtMaster.find((item) => item.name === bestMatch.target);
    const id = foundItem.id;

    const dropData = loadDropData();

    const master = rdtMaster.find((item) => item.id === id);
    console.log(`Item: ${itemName} found in master data as ${master.name}`);

    if (!dropData.log) dropData.log = [];

    const rightNm = master.name;

    dropData.log.push({ time, itemName, quantity, method });

    if (method == "Slayer") {
      if (!dropData.slayer) dropData.slayer = {};

      if (!dropData.slayer[rightNm]) {
        dropData.slayer[rightNm] = {
          id: master.id,
          hits: 0,
          qty: 0,
          img: master.img,
        };
      }

      dropData.slayer[rightNm].hits += 1;
      dropData.slayer[rightNm].qty += quantity;
    } else if (method == "Seren") {
      if (!dropData.seren) dropData.seren = {};

      if (!dropData.seren[rightNm]) {
        dropData.seren[rightNm] = {
          id: master.id,
          hits: 0,
          qty: 0,
          img: master.img,
        };
      }

      dropData.seren[rightNm].hits += 1;
      dropData.seren[rightNm].qty += quantity;
    }

    saveDropData(dropData);
    updateDropTable(dropData);
    pushToWS(dropData);
  } else {
    console.log(`Item semelhante a "${itemName}" não encontrado.`);
  }
}

// ######### HTML #########

function updateDropTable(data) {
  const tbody_slayer = document.getElementById("lootTableBodySlayer");
  const tbody_seren = document.getElementById("lootTableBodySeren");
  const progress = document.getElementById("progress");
  const label = document.getElementById("progressLabel");

  tbody_slayer.innerHTML = "";
  tbody_seren.innerHTML = "";
  let totalRdtRolls = 0;

  const fillTable = (tbody, tableData) => {
    if (!tableData || typeof tableData !== "object") return;

    for (const [item, { hits = 0, qty = 0 }] of Object.entries(tableData)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item}</td>
        <td>${hits}</td>
        <td>${qty}</td>
      `;
      tbody.appendChild(row);
      totalRdtRolls += hits;
    }
  };

  fillTable(tbody_slayer, data?.slayer);
  fillTable(tbody_seren, data?.seren);

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
  document.getElementById("importButton").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";

    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.trim().split("\n");
        const headers = lines[0]
          .split(",")
          .map((h) => h.trim().replace(/^"|"$/g, ""));

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i]
            .split(",")
            .map((v) => v.trim().replace(/^"|"$/g, ""));
          const entry = {};
          headers.forEach((key, index) => {
            entry[key] = values[index];
          });

          const time = entry.time;
          const itemName = entry.itemName;
          const quantity = parseInt(entry.quantity);
          const method = entry.method;

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

function loadStorageData() {
  const data = loadDropData();
  const { log, ...rest } = data;
  updateDropTable(rest);
}

// ######### Websocket #########
const token = "meu_token_secreto";
let socket;
let queue = [];

// const ws_url = "https://rdt-tracker-server.onrender.com";
const ws_url = "https://rdt-tracker-server-jk22.onrender.com";
// const ws_url = "http://10.18.60.60:3000";

function connectWebSocket() {
  socket = io(ws_url, {
    query: {
      token: token,
    },
  });

  socket.on("connect", () => {
    console.log("Conectado. Validando token...");
  });

  socket.on("disconnect", () => {
    authenticated = false;
  });
}

function pushToWS(data) {
  if (!socket || socket.disconnected) {
    connectWebSocket();
  }

  socket.emit("updateInventory", data);
}

// ################ action bar reader ##############
function readHP(x, y, w, h) {
  console.log(a1lib.readString(a1lib.getregion(x, y, w, h)));
}
