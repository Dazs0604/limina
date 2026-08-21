document.documentElement.classList.add('splash-lock');
            // ---------- Countries ----------
            const COUNTRIES = [{
                code: "KR",
                flag: "🇰🇷",
                name: "Korea",
                cuisine: "Korean",
                cur: "KRW",
                sym: "₩",
                rate: 1,
                dec: 0,
                greet: "안녕하세요!",
                note: "the OG dopamine-site cuisine — sweet, spicy &amp; soulful.",
                tags: ["spicy ok", "comfort"]
            }, {
                code: "US",
                flag: "🇺🇸",
                name: "USA",
                cuisine: "American",
                cur: "USD",
                sym: "$",
                rate: 0.00074,
                dec: 2,
                greet: "Hello!",
                note: "big, bold &amp; unapologetically cheesy.",
                tags: ["big portions", "cheesy"]
            }, {
                code: "JP",
                flag: "🇯🇵",
                name: "Japan",
                cuisine: "Japanese",
                cur: "JPY",
                sym: "¥",
                rate: 0.108,
                dec: 0,
                greet: "こんにちは!",
                note: "delicate, precise &amp; deeply cozy.",
                tags: ["umami", "cozy"]
            }, {
                code: "IN",
                flag: "🇮🇳",
                name: "India",
                cuisine: "Indian",
                cur: "INR",
                sym: "₹",
                rate: 0.062,
                dec: 0,
                greet: "नमस्ते!",
                note: "rich, fragrant &amp; gloriously spiced.",
                tags: ["aromatic", "spicy"]
            }, {
                code: "FR",
                flag: "🇫🇷",
                name: "France",
                cuisine: "French",
                cur: "EUR",
                sym: "€",
                rate: 0.00069,
                dec: 2,
                greet: "Bonjour!",
                note: "buttery, elegant &amp; a little fancy.",
                tags: ["buttery", "elegant"]
            }, {
                code: "IT",
                flag: "🇮🇹",
                name: "Italy",
                cuisine: "Italian",
                cur: "EUR",
                sym: "€",
                rate: 0.00069,
                dec: 2,
                greet: "Ciao!",
                note: "carbs, cheese &amp; pure joy.",
                tags: ["carby", "comforting"]
            }, {
                code: "MX",
                flag: "🇲🇽",
                name: "Mexico",
                cuisine: "Mexican",
                cur: "MXN",
                sym: "$",
                rate: 0.0142,
                dec: 0,
                greet: "¡Hola!",
                note: "zesty, fiery &amp; full of fiesta.",
                tags: ["zesty", "fiery"]
            }, {
                code: "BR",
                flag: "🇧🇷",
                name: "Brazil",
                cuisine: "Brazilian",
                cur: "BRL",
                sym: "R$",
                rate: 0.00405,
                dec: 2,
                greet: "Olá!",
                note: "smoky, hearty &amp; sunshine on a plate.",
                tags: ["hearty", "sunny"]
            }, {
                code: "TH",
                flag: "🇹🇭",
                name: "Thailand",
                cuisine: "Thai",
                cur: "THB",
                sym: "฿",
                rate: 0.0268,
                dec: 0,
                greet: "สวัสดี!",
                note: "sweet-sour-spicy in perfect balance.",
                tags: ["balanced", "spicy"]
            }, {
                code: "DE",
                flag: "🇩🇪",
                name: "Germany",
                cuisine: "German",
                cur: "EUR",
                sym: "€",
                rate: 0.00069,
                dec: 2,
                greet: "Hallo!",
                note: "hearty, crispy &amp; seriously filling.",
                tags: ["hearty", "crispy"]
            }, {
                code: "CN",
                flag: "🇨🇳",
                name: "China",
                cuisine: "Chinese",
                cur: "CNY",
                sym: "¥",
                rate: 0.0053,
                dec: 0,
                greet: "你好!",
                note: "bold, savory &amp; wok-fired comfort.",
                tags: ["savory", "comfort"]
            }, {
                code: "VN",
                flag: "🇻🇳",
                name: "Vietnam",
                cuisine: "Vietnamese",
                cur: "VND",
                sym: "₫",
                rate: 18.8,
                dec: 0,
                greet: "Xin chào!",
                note: "fresh herbs, deep broth &amp; perfect balance.",
                tags: ["fresh herbs", "brothy"]
            }, ];

            // ---------- Option templates ----------
            const TPL = {
                SPICY: [["Spice", [["Mild", 0], ["Medium", 0], ["Spicy 🌶️", 500], ["Inferno 🔥", 900]], 1], ["Size", [["Solo", 0], ["Sharing", 3000]], 0], ["Add-on", [["None", 0], ["Extra sauce", 500], ["Cheese 🧀", 1500]], 0]],
                HEARTY: [["Portion", [["Regular", 0], ["Large", 2500]], 0], ["Add", [["Just the dish", 0], ["Extra side", 2000], ["Make it a combo", 3500]], 0]],
                SWEET: [["Size", [["For one", 0], ["To share", 3000]], 0], ["Topping", [["Classic", 0], ["Extra fruit 🍓", 1500], ["Ice cream 🍨", 1200]], 0]],
                FRESH: [["Size", [["Single", 0], ["Double", 2500]], 0], ["Extra", [["None", 0], ["Dipping sauce", 500], ["Make it spicy 🌶️", 400]], 0]],
            };
            const DESCS = {
                SPICY: "Bold, saucy &amp; made to order.",
                HEARTY: "Comforting, filling &amp; full of flavor.",
                SWEET: "A sweet little reward.",
                FRESH: "Light, fresh &amp; snackable.",
            };

            // ---------- Per-country menus [name, img, basePriceKRW, cat, tpl, badge] ----------
            const DISHES = {
                KR: [["Bibimbap", "images/kr-0.jpg", 9000, "main", "HEARTY", "best"], ["Tteokbokki", "images/kr-1.jpg", 5000, "street", "SPICY", "hot"], ["Korean Fried Chicken", "images/kr-2.jpg", 11000, "main", "SPICY"], ["Japchae", "images/kr-3.jpg", 8000, "main", "HEARTY"], ["Kimbap", "images/kr-4.jpg", 4000, "street", "FRESH"], ["Bingsu", "images/kr-5.jpg", 7000, "sweet", "SWEET", "new"], ["Bulgogi", "images/kr-6.jpg", 10000, "main", "HEARTY"], ["Sundubu Jjigae", "images/kr-7.jpg", 8500, "main", "SPICY"], ["Samgyeopsal", "images/kr-8.jpg", 12000, "main", "HEARTY", "best"], ["Hotteok", "images/kr-9.jpg", 4000, "sweet", "SWEET"], ],
                US: [["Cheeseburger", "images/us-0.jpg", 9000, "main", "HEARTY", "best"], ["Buffalo Wings", "images/us-1.jpg", 9500, "street", "SPICY", "hot"], ["Mac & Cheese", "images/us-2.jpg", 7000, "main", "HEARTY"], ["Pancakes", "images/us-3.jpg", 6000, "sweet", "SWEET"], ["Hot Dog", "images/us-4.jpg", 5000, "street", "FRESH"], ["Apple Pie", "images/us-5.jpg", 6500, "sweet", "SWEET", "new"], ["BBQ Ribs", "images/us-6.jpg", 12000, "main", "HEARTY", "best"], ["Caesar Salad", "images/us-7.jpg", 7000, "main", "FRESH"], ["Clam Chowder", "images/us-8.jpg", 8000, "main", "HEARTY"], ["Glazed Donuts", "images/us-9.jpg", 5000, "sweet", "SWEET"], ],
                JP: [["Sushi Platter", "images/jp-0.jpg", 12000, "main", "FRESH", "best"], ["Ramen", "images/jp-1.jpg", 9000, "main", "SPICY", "hot"], ["Tonkatsu", "images/jp-2.jpg", 10000, "main", "HEARTY"], ["Takoyaki", "images/jp-3.jpg", 6000, "street", "SPICY"], ["Tempura", "images/jp-4.jpg", 8500, "main", "FRESH"], ["Gyoza", "images/jp-5.jpg", 6000, "street", "FRESH", "new"], ["Udon", "images/jp-6.jpg", 8000, "main", "HEARTY"], ["Onigiri", "images/jp-7.jpg", 4000, "street", "FRESH"], ["Katsu Curry", "images/jp-8.jpg", 9500, "main", "SPICY", "best"], ["Mochi", "images/jp-9.jpg", 5000, "sweet", "SWEET"], ["Omakase", "images/jp-10.jpg", 18000, "main", "FRESH", "new"], ],
                IN: [["Butter Chicken", "images/in-0.jpg", 10000, "main", "SPICY", "best"], ["Biryani", "images/in-1.jpg", 9500, "main", "SPICY", "hot"], ["Masala Dosa", "images/in-2.jpg", 7000, "main", "FRESH"], ["Samosa", "images/in-3.jpg", 4000, "street", "SPICY"], ["Paneer Tikka", "images/in-4.jpg", 8000, "main", "SPICY"], ["Gulab Jamun", "images/in-5.jpg", 5000, "sweet", "SWEET", "new"], ["Chole Bhature", "images/in-6.jpg", 7000, "main", "SPICY"], ["Palak Paneer", "images/in-7.jpg", 8500, "main", "SPICY"], ["Pani Puri", "images/in-8.jpg", 4000, "street", "SPICY", "best"], ["Jalebi", "images/in-9.jpg", 4500, "sweet", "SWEET"], ],
                FR: [["Croissant", "images/fr-0.jpg", 4500, "street", "FRESH", "best"], ["Croque Monsieur", "images/fr-1.jpg", 8000, "main", "HEARTY"], ["Ratatouille", "images/fr-2.jpg", 9000, "main", "HEARTY"], ["Crepe", "images/fr-3.jpg", 6000, "sweet", "SWEET", "hot"], ["Macarons", "images/fr-4.jpg", 6500, "sweet", "SWEET"], ["Quiche", "images/fr-5.jpg", 7500, "main", "HEARTY", "new"], ["Beef Bourguignon", "images/fr-6.jpg", 12000, "main", "HEARTY", "best"], ["French Onion Soup", "images/fr-7.jpg", 8000, "main", "HEARTY"], ["Baguette Sandwich", "images/fr-8.jpg", 6500, "street", "FRESH"], ["Éclair", "images/fr-9.jpg", 5500, "sweet", "SWEET"], ],
                IT: [["Margherita Pizza", "images/it-0.jpg", 11000, "main", "HEARTY", "best"], ["Carbonara", "images/it-1.jpg", 10000, "main", "HEARTY", "hot"], ["Lasagne", "images/it-2.jpg", 10500, "main", "HEARTY"], ["Risotto", "images/it-3.jpg", 9500, "main", "HEARTY"], ["Tiramisu", "images/it-4.jpg", 6500, "sweet", "SWEET", "new"], ["Gelato", "images/it-5.jpg", 5000, "sweet", "SWEET"], ["Spaghetti Bolognese", "images/it-6.jpg", 10000, "main", "HEARTY", "best"], ["Bruschetta", "images/it-7.jpg", 6000, "street", "FRESH"], ["Gnocchi", "images/it-8.jpg", 9000, "main", "HEARTY"], ["Cannoli", "images/it-9.jpg", 5500, "sweet", "SWEET"], ],
                MX: [["Tacos", "images/mx-0.jpg", 7000, "street", "SPICY", "best"], ["Burrito", "images/mx-1.jpg", 8500, "main", "SPICY", "hot"], ["Quesadilla", "images/mx-2.jpg", 7500, "street", "SPICY"], ["Guacamole", "images/mx-3.jpg", 5500, "street", "FRESH"], ["Enchiladas", "images/mx-4.jpg", 9000, "main", "SPICY"], ["Churros", "images/mx-5.jpg", 5500, "sweet", "SWEET", "new"], ["Nachos", "images/mx-6.jpg", 6500, "street", "SPICY"], ["Tamales", "images/mx-7.jpg", 7000, "main", "SPICY"], ["Elote", "images/mx-8.jpg", 5000, "street", "SPICY", "best"], ["Flan", "images/mx-9.jpg", 5000, "sweet", "SWEET"], ],
                BR: [["Feijoada", "images/br-0.jpg", 10000, "main", "HEARTY", "best"], ["Pao de Queijo", "images/br-1.jpg", 4500, "street", "FRESH", "hot"], ["Brigadeiro", "images/br-2.jpg", 4000, "sweet", "SWEET"], ["Coxinha", "images/br-3.jpg", 5000, "street", "FRESH"], ["Moqueca", "images/br-4.jpg", 11000, "main", "SPICY"], ["Acai Bowl", "images/br-5.jpg", 7500, "sweet", "SWEET", "new"], ["Picanha", "images/br-6.jpg", 13000, "main", "HEARTY", "best"], ["Pastel", "images/br-7.jpg", 5000, "street", "FRESH"], ["Churrasco", "images/br-8.jpg", 13000, "main", "HEARTY"], ["Quindim", "images/br-9.jpg", 4500, "sweet", "SWEET"], ],
                TH: [["Pad Thai", "images/th-0.jpg", 8000, "main", "SPICY", "best"], ["Green Curry", "images/th-1.jpg", 9000, "main", "SPICY", "hot"], ["Tom Yum", "images/th-2.jpg", 8500, "main", "SPICY"], ["Mango Sticky Rice", "images/th-3.jpg", 6000, "sweet", "SWEET", "new"], ["Som Tam", "images/th-4.jpg", 6500, "street", "SPICY"], ["Massaman Curry", "images/th-5.jpg", 9500, "main", "SPICY"], ["Spring Rolls", "images/th-6.jpg", 5500, "street", "FRESH"], ["Thai Fried Rice", "images/th-7.jpg", 7500, "main", "SPICY"], ["Chicken Satay", "images/th-8.jpg", 7000, "street", "SPICY", "best"], ["Thai Iced Tea", "images/th-9.jpg", 4000, "sweet", "SWEET"], ],
                DE: [["Bratwurst", "images/de-0.jpg", 7000, "street", "HEARTY", "best"], ["Schnitzel", "images/de-1.jpg", 11000, "main", "HEARTY", "hot"], ["Currywurst", "images/de-2.jpg", 6500, "street", "SPICY"], ["Pretzel", "images/de-3.jpg", 4000, "street", "FRESH"], ["Sauerbraten", "images/de-4.jpg", 11500, "main", "HEARTY"], ["Black Forest Cake", "images/de-5.jpg", 6500, "sweet", "SWEET", "new"], ["Käsespätzle", "images/de-6.jpg", 8000, "main", "HEARTY", "best"], ["Rouladen", "images/de-7.jpg", 11000, "main", "HEARTY"], ["Frankfurter", "images/de-8.jpg", 5500, "street", "HEARTY"], ["Apple Strudel", "images/de-9.jpg", 5500, "sweet", "SWEET"], ],
                CN: [["Dumplings", "images/cn-0.jpg", 6000, "street", "FRESH", "best"], ["Kung Pao Chicken", "images/cn-1.jpg", 9000, "main", "SPICY", "hot"], ["Sweet & Sour Pork", "images/cn-2.jpg", 9500, "main", "HEARTY"], ["Spring Rolls", "images/cn-3.jpg", 5000, "street", "FRESH"], ["Chow Mein", "images/cn-4.jpg", 8000, "main", "HEARTY"], ["Fried Rice", "images/cn-5.jpg", 7500, "main", "HEARTY"], ["Peking Duck", "images/cn-6.jpg", 12000, "main", "HEARTY", "best"], ["Mapo Tofu", "images/cn-7.jpg", 8000, "main", "SPICY"], ["Steamed Bao Buns", "images/cn-8.jpg", 6000, "street", "FRESH", "new"], ["Egg Tart", "images/cn-9.jpg", 4500, "sweet", "SWEET"], ],
                VN: [["Pho", "images/vn-0.jpg", 9000, "main", "HEARTY", "best"], ["Banh Mi", "images/vn-1.jpg", 5500, "street", "FRESH", "hot"], ["Goi Cuon", "images/vn-2.jpg", 5000, "street", "FRESH"], ["Bun Bo Hue", "images/vn-3.jpg", 9500, "main", "SPICY"], ["Com Tam", "images/vn-4.jpg", 8500, "main", "HEARTY"], ["Banh Xeo", "images/vn-5.jpg", 7500, "main", "FRESH"], ["Bun Cha", "images/vn-6.jpg", 9000, "main", "HEARTY", "best"], ["Cha Gio", "images/vn-7.jpg", 5500, "street", "FRESH"], ["Vietnamese Iced Coffee", "images/vn-8.jpg", 4500, "sweet", "SWEET", "new"], ["Egg Coffee", "images/vn-9.jpg", 5000, "sweet", "SWEET"], ],
            };

            const FILTERS = [["all", "All 🍽️"], ["main", "Mains 🍛"], ["street", "Street &amp; snacks 🥟"], ["sweet", "Sweet 🍰"]];
            const CAT_EMOJI = {
                main: "🍛",
                street: "🥟",
                sweet: "🍰"
            };
            const BADGE_TXT = {
                hot: "🔥 HOT",
                new: "✨ NEW",
                best: "⭐ BEST"
            };

            // ---------- State ----------
            let country = COUNTRIES[0];
            let activeFilter = "all";
            let searchTerm = "";

            // ---------- Display currency (independent of the chosen cuisine) ----------
            const CURRENCIES = [{
                cur: "KRW",
                sym: "₩",
                rate: 1,
                dec: 0,
                flag: "🇰🇷"
            }, {
                cur: "USD",
                sym: "$",
                rate: 0.00074,
                dec: 2,
                flag: "🇺🇸"
            }, {
                cur: "GBP",
                sym: "£",
                rate: 0.00059,
                dec: 2,
                flag: "🇬🇧"
            }, {
                cur: "EUR",
                sym: "€",
                rate: 0.00069,
                dec: 2,
                flag: "🇪🇺"
            }, {
                cur: "JPY",
                sym: "¥",
                rate: 0.108,
                dec: 0,
                flag: "🇯🇵"
            }, {
                cur: "INR",
                sym: "₹",
                rate: 0.062,
                dec: 0,
                flag: "🇮🇳"
            }, {
                cur: "CNY",
                sym: "¥",
                rate: 0.0053,
                dec: 0,
                flag: "🇨🇳"
            }, {
                cur: "CAD",
                sym: "C$",
                rate: 0.00101,
                dec: 2,
                flag: "🇨🇦"
            }, {
                cur: "AUD",
                sym: "A$",
                rate: 0.00112,
                dec: 2,
                flag: "🇦🇺"
            }];
            let curOverride = null;
            // user-chosen display currency code, or null = follow the cuisine
            let disp = COUNTRIES[0];
            // active display currency {sym,rate,dec,cur}
            let geoCur = null;
            // soft currency from IP geo — used only if the visitor hasn't manually picked
            // Countries with no cuisine of their own → still localise the currency by IP
            const CC_TO_CUR = {
                GB: "GBP",
                CA: "CAD",
                AU: "AUD",
                NZ: "AUD",
                IE: "EUR",
                ES: "EUR",
                NL: "EUR",
                PT: "EUR",
                BE: "EUR",
                AT: "EUR",
                FI: "EUR",
                GR: "EUR",
                LU: "EUR"
            };
            function applyDisp() {
                const code = curOverride || geoCur;
                disp = code ? (CURRENCIES.find(c => c.cur === code) || country) : country;
                const el = document.getElementById("navFlagCode");
                if (el)
                    el.textContent = disp.cur;
                // Keep the nav flag in step with the money on screen: a chosen display currency shows its own
                // flag, otherwise fall back to the flag of the kitchen you're browsing.
                const em = document.getElementById("navFlagEmoji");
                if (em)
                    em.textContent = (code && disp.flag) ? disp.flag : country.flag;
                const fs = document.getElementById("freeSticker");
                if (fs)
                    fs.textContent = money(0) + " forever";
                document.querySelectorAll(".cur-opt").forEach(o => o.setAttribute("aria-pressed", o.dataset.cur === disp.cur ? "true" : "false"));
            }

            // ---------- Money ----------
            function money(krw) {
                const v = krw * disp.rate;
                if (disp.dec === 0)
                    return disp.sym + Math.round(v).toLocaleString();
                return disp.sym + Number(v.toFixed(disp.dec)).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }
            // Imaginary rider-tip tiers — shown in the visitor's selected currency, rounded to a pleasant local number.
            const TIP_TIERS = [["🪙", 1000], ["💵", 5000], ["💖", 10000]];
            function niceTip(krw) {
                let v = krw * disp.rate;
                const step = v >= 5000 ? 1000 : v >= 1000 ? 500 : v >= 100 ? 50 : v >= 20 ? 5 : 1;
                v = Math.max(step, Math.round(v / step) * step);
                return disp.sym + v.toLocaleString();
            }
            // ---------- Real-app dish helpers (deterministic per dish, so ratings/discounts stay stable) ----------
            const NONVEG = /(chicken|beef|pork|duck|burger|bbq|rib|wing|hot dog|katsu|tonkatsu|bulgogi|samgyeop|sausage|bratwurst|schnitzel|frankfurter|currywurst|rouladen|sauerbraten|picanha|churrasco|feijoada|moqueca|satay|tom yum|fish|prawn|shrimp|sushi|tuna|salmon|\begg\b|lamb|meat|ham|tikka|biryani|clam|seafood|carbonara|bolognese|gyoza|takoyaki|tempura|caesar|chowder|onigiri|kimbap|bourguignon)/i;
            function isVeg(name) {
                return !NONVEG.test(name);
            }
            function _hash(s) {
                let h = 5381;
                for (let i = 0; i < s.length; i++)
                    h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
                return h;
            }
            function dishMeta(id) {
                const h = _hash(id);
                const rating = (40 + h % 9) / 10;
                // 4.0–4.8
                const count = (h >>> 3) % 2 ? 200 + ((h >>> 4) % 3300) : 1100 + ((h >>> 4) % 9000);
                // ratings count (>>> unsigned, avoids negatives)
                const off = [10, 15, 20, 25, 30, 40][h % 6];
                // discount %
                return {
                    rating: rating.toFixed(1),
                    count,
                    off
                };
            }
            function kcount(n) {
                return n >= 1000 ? (Math.round(n / 100) / 10).toString().replace(/\.0$/, "") + "K+" : String(n);
            }
            function wasPrice(krw, off) {
                return money(Math.round(krw / (1 - off / 100)));
            }
            // ---------- Recipes (the food never came — so here's how to make it). Only dishes listed here show the 📖 icon. ----------
            // ---- Geo-targeted meal-kit affiliates (Awin). Keyed by the visitor's REAL country (IP via /cdn-cgi/trace), not the chosen currency. ----
            // Countries not listed here fall back to the cookbook. Dinnerly AU (awinmid=104513) kept as a backup if we ever switch AU.
            const MEALKIT = {
                DE: {
                    brand: "Marley Spoon",
                    url: "https://tidd.ly/4ezslK4",
                    deal: "35% off your first box",
                    flag: "🇩🇪"
                },
                AU: {
                    brand: "Marley Spoon",
                    url: "https://www.awin1.com/cread.php?awinmid=104515&awinaffid=2956733",
                    deal: "40% off your first box",
                    flag: "🇦🇺"
                }
            };
            function mealKit() {
                return MEALKIT[window._geoCC] || null;
            }
            // returns the meal-kit for the visitor's country, or null → cookbook
            function wireMealKit() {
                const mk = mealKit();
                if (!mk)
                    return;
                const h = document.getElementById("heroAlt");
                if (h) {
                    h.href = mk.url;
                    h.target = "_blank";
                    h.rel = "noopener";
                    h.textContent = `🚚 Skip the wait — get it really delivered (${mk.deal}) →`;
                }
                const c2 = document.getElementById("cookbookH2");
                if (c2)
                    c2.textContent = "Done pretending? Get real food — tonight 🚚";
                const cp = document.getElementById("cookbookP");
                if (cp)
                    cp.innerHTML = `The food never comes here — but <b>${mk.brand}</b> brings fresh, pre-portioned ingredients + easy recipes to your door. Cook a real dinner in <b>~20 minutes</b> — no shopping, skip or cancel anytime. ${mk.deal}, so trying it costs less than one takeaway. 🛵💨`;
                const cb = document.getElementById("cookbookBtn");
                if (cb) {
                    cb.href = mk.url;
                    cb.textContent = `🥘 Claim ${mk.deal} → ${mk.flag}`;
                }
                const ft = document.getElementById("cookbookFeat");
                if (ft)
                    ft.textContent = "Fresh ingredients · easy recipes · delivered to your door · cancel anytime";
            }
            // The "while you wait" / "delivered" offer block — FREE recipes for exactly what they ordered,
            // plus a soft geo meal-kit CTA for monetization. No more cookbook (those recipes are already free here).
            function offerBlock(ctx, order) {
                const mk = mealKit();
                const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
                const dishes = ((order && order.dishes) || []).filter(x => RECIPES[x.id]);
                const pills = dishes.length ? `<div class="ro-recipes">${dishes.map(x => `<button class="ro-recipe" type="button" data-id="${esc(x.id)}" data-name="${esc(x.name)}" data-img="${esc(x.img)}">📖 ${x.name}</button>`).join("")}</div>` : `<a class="ro-btn ro-mini" href="/recipes/">🍳 Browse all 121 free recipes →</a>`;
                const head = ctx === 'wait' ? `<h4>While you wait — here's how to make it 🍳</h4><p>The food never comes… but the <b>recipes are real & free</b>. Tap your dish for step-by-step — ready in ~20 min, easy on your body <b>and</b> your wallet. 💸</p>` : `<h4>The food never came… so here's how to make it 🍳</h4><p>Real, <b>free</b> recipes for exactly what you ordered. Cook it in ~20 min — healthier than takeaway and way kinder to your wallet. 💸</p>`;
                return `<div class="recipe-offer">
          <span class="ro-tag">${ctx === 'wait' ? "Can't wait? 🍳" : "Still hungry? 🍳"}</span>
          ${head}
          ${pills}
          ${mk ? `<a class="ro-btn ro-mini" href="${mk.url}" target="_blank" rel="noopener">😋 Don't feel like cooking? Get it delivered — ${mk.deal} →</a>` : ''}
          <small>${mk ? 'Free recipes above · or skip the cooking 🛵💨' : 'Tap a dish for the full recipe 🍳'}</small>
        </div>`;
            }
            const RECIPES = {
                "KR-0": {
                    t: "20 min",
                    s: "Serves 1",
                    ing: ["1 big bowl warm cooked rice (short-grain is best)", "1 egg", "1 small carrot, cut into matchsticks", "2 handfuls spinach", "¼ cucumber, thinly sliced + a pinch of salt", "100g beef mince or mushrooms (optional)", "Sauce: 2 tbsp gochujang, 1 tsp sesame oil, 1 tsp sugar, 1 tsp water", "toasted sesame seeds + extra sesame oil"],
                    steps: ["Stir the sauce together until the sugar dissolves — taste it: sweet-spicy, not raw-hot. Add ½ tsp vinegar if you like tang.", "Salt the cucumber slices and let them sit 5 min, then squeeze dry — this keeps the bowl from going watery.", "Blanch spinach 30 seconds in boiling water, squeeze VERY dry, season with a drop of sesame oil and salt.", "Stir-fry the carrot 1–2 min until just bendy; if using beef, fry it hot with 1 tsp soy until browned.", "Fry the egg in a little oil until the edges are crispy but the yolk is still runny — the yolk is your second sauce.", "Pile warm rice in a bowl and arrange every topping in its own little wedge (that's the bibim look), egg in the middle.", "Bring it to the table pretty, then destroy it: add the sauce and mix hard for a full 30 seconds. Every grain should turn orange."]
                },
                "KR-1": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["350g cylinder rice cakes (tteok)", "2 cups water or anchovy stock (stock = deeper flavour)", "2 tbsp gochujang", "1 tbsp gochugaru (Korean chilli flakes)", "1 tbsp sugar + 1 tbsp soy sauce", "2 sheets fish cake, sliced (optional but classic)", "2 spring onions, cut in batons", "1 boiled egg (optional)"],
                    steps: ["If the rice cakes are refrigerated and hard, soak them in warm water 10–15 min so they cook evenly.", "Whisk gochujang, gochugaru, sugar and soy into the water and bring to a boil in a wide pan.", "Add the rice cakes (and fish cake); simmer on medium 8–10 min, stirring often so nothing sticks to the bottom.", "You're done when the sauce coats the back of a spoon and the cakes are soft with a chewy centre — it thickens fast at the end, so don't walk away.", "Too thick? Splash in water. Not sweet enough? Another ½ tbsp sugar — tteokbokki should be sweet-heat, not just heat.", "Stir in the spring onions (and halved egg) and rest 2 minutes off the heat — the sauce clings best warm, not boiling."]
                },
                "KR-2": {
                    t: "40 min",
                    s: "Serves 2",
                    ing: ["500g chicken wings or boneless thigh chunks", "½ cup cornstarch (potato starch = even crispier)", "½ tsp salt + ½ tsp baking powder", "oil for deep-frying (about 3cm deep)", "Sauce: 3 tbsp gochujang, 2 tbsp honey, 1 tbsp soy, 1 tbsp ketchup", "2 cloves garlic, grated + 1 tsp sesame seeds"],
                    steps: ["Pat the chicken very dry, then toss with salt, baking powder and cornstarch until every piece looks dusty, not wet.", "Heat the oil to 170°C (a pinch of flour should fizz instantly). Fry in small batches 7–8 min until pale gold. Don't crowd the pan — the temperature drops and the crunch dies.", "Rest the chicken 5 min on a rack. This is not optional: the double-fry is the whole secret.", "Fry again hotter (185°C) for 2–3 min until deep golden and audibly crackly.", "Meanwhile simmer the sauce ingredients 2 min until glossy and just thickened.", "Toss the chicken in the sauce at the last second and serve immediately — sauced Korean fried chicken waits for no one. Sprinkle sesame."]
                },
                "US-0": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["250g ground beef, 20% fat (fat = flavour, don't go lean)", "2 soft potato or brioche buns", "2 slices American cheese (it melts best — today is not the day for fancy cheese)", "salt + coarse black pepper", "2 tbsp butter for the buns", "pickles + thin-sliced onion", "Sauce: 2 tbsp mayo + 1 tbsp ketchup + 1 tsp mustard + chopped pickle"],
                    steps: ["Butter the bun halves and toast them cut-side down in the pan until golden. Set aside.", "Divide the beef into 2 loose balls. Don't knead, don't season yet — overworked beef turns bouncy.", "Get a dry cast-iron or heavy pan SMOKING hot — 2 full minutes on max heat.", "Drop the balls in and smash them flat and thin with a spatula for 10 seconds. Salt and pepper the tops generously.", "Leave them alone for 2 minutes until the edges go lacy and dark — that crust is the entire point of a smash burger.", "Flip once, cheese on immediately, 45 more seconds. Want it extra melty? Add a tsp of water to the pan and cover for 20 sec.", "Build: sauce on the bottom bun, pickles, onion, patty, top bun. Eat within 5 minutes. It will drip. That's correct."]
                },
                "US-2": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["200g macaroni", "1.5 cups milk + 1 cup water", "1.5 cups grated cheddar", "1 tbsp butter", "salt + black pepper"],
                    steps: ["Simmer pasta in the milk+water+salt, stirring often, 10–12 min until creamy.", "Off the heat, stir in butter, then cheese a handful at a time.", "Add lots of pepper; loosen with milk if thick.", "Eat immediately — it waits for no one."]
                },
                "JP-1": {
                    t: "20 min",
                    s: "Serves 1",
                    ing: ["1 pack fresh or instant ramen noodles (bin the flavour sachet)", "2 cups (500ml) good chicken stock", "1 tbsp soy sauce + 1 tsp sesame oil", "1 tsp miso paste", "1 clove garlic + a thumb of ginger, grated", "1 egg", "toppings: spring onion, corn, nori, a knob of butter, leftover pork if you have it"],
                    steps: ["Jammy egg first: lower the egg into boiling water for exactly 6½ minutes, then straight into iced water. Peel when cool.", "Simmer the stock with the garlic and ginger for 5 min so it actually tastes of something.", "Kill the heat, then whisk in miso, soy and sesame oil. Never boil miso — it goes flat and loses its aroma.", "Cook the noodles in separate boiling water 30–60 sec less than the pack says, then drain well. Cooking them in the broth turns it starchy and dull.", "Noodles into the bowl, hot broth over. Work fast — ramen is a race against soggy.", "Halve the egg on top, pile on the toppings, add the butter for a tonkotsu-ish richness. Slurping is correct technique."]
                },
                "JP-8": {
                    t: "35 min",
                    s: "Serves 2",
                    ing: ["2 chicken breasts or 4 boneless thigh fillets", "salt + pepper, ¼ cup flour, 1 beaten egg, 1½ cups panko", "oil for shallow frying", "Curry: 1 onion + 1 carrot, chopped, 1 tbsp butter", "2 tbsp curry powder + 1 tbsp flour", "2 cups chicken stock + 1 tsp soy + 1 tsp honey", "steamed rice"],
                    steps: ["Start the curry: soften the onion and carrot in butter 5–6 min, stir in curry powder and flour for 1 minute to cook out the raw taste.", "Add the stock gradually, stirring, with the soy and honey. Simmer 10 min until it thickens to a gravy that coats a spoon. Blend smooth or leave chunky — both are legitimate.", "Butterfly the chicken breasts so they're even, season, then bread: flour, egg, then PRESS into panko.", "Shallow-fry 3–4 min per side at 170°C until deep golden. Rest 3 minutes on a rack — the rest keeps the juice in when you slice.", "Slice the katsu into strips (one clean stroke each) so the crust doesn't shatter.", "Rice on one side of the plate, katsu leaning on it, curry flooded over the rice half only — the crust stays crisp until the last bite. That's the katsu-curry geometry."]
                },
                "IN-0": {
                    t: "35 min",
                    s: "Serves 3",
                    ing: ["400g chicken thigh, cut in big cubes", "Marinade: 3 tbsp yogurt, 1 tbsp ginger-garlic paste, 1 tsp chilli powder, 1 tsp garam masala, squeeze of lime", "3 tbsp butter + 1 tbsp oil", "1 large onion, finely chopped", "1 cup tomato passata", "1 tsp each cumin, paprika, garam masala", "½ cup cream + 1 tsp sugar", "fresh coriander + one more knob of butter to finish"],
                    steps: ["Massage the marinade into the chicken. Even 15 minutes helps; overnight is glorious.", "Sear the chicken in 1 tbsp butter + the oil over high heat until charred at the edges but not cooked through. Set aside — those charred bits are your tandoor substitute.", "In the same pan, soften the onion in 2 tbsp butter for 5–6 min until golden, not just translucent.", "Add the spices for 30 seconds until fragrant, then the passata. Simmer 8–10 min until it darkens and the butter starts separating at the edges — that's when the raw tomato taste is gone.", "Return the chicken, simmer gently 5 min to cook through, then stir in the cream and sugar and warm WITHOUT boiling.", "Taste: rich, gently sweet, mildly spiced. Finish with the last knob of butter and coriander. Serve with naan or rice — and use the naan as a spoon like everyone secretly does."]
                },
                "IT-1": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["200g spaghetti", "100g pancetta or guanciale (bacon works), cut into little batons", "2 whole eggs + 1 extra yolk", "50g pecorino or parmesan, finely grated, plus extra", "a scandalous amount of coarse black pepper", "NO cream. Really. None."],
                    steps: ["Boil the spaghetti in well-salted water. Before draining, SAVE A FULL MUG of the cloudy pasta water — it's the sauce's secret ingredient.", "While the pasta cooks, fry the pancetta from a cold pan on medium until the fat renders and it's crisp, about 5 min. Kill the heat.", "Whisk the eggs, yolk, cheese and lots of pepper in a bowl until it looks like wet sand.", "The drained pasta goes into the pancetta pan (heat still OFF); toss in the fat for 30 seconds and let the sizzling stop.", "Pour in the egg mix while tossing fast, adding splashes of pasta water until it becomes a glossy cream that coats every strand. Residual heat cooks it; direct heat scrambles it — the pan must never go back on the flame.", "Serve instantly with more cheese and pepper. Silky = you nailed it. Scrambled = call it 'breakfast pasta' and try again tomorrow."]
                },
                "MX-2": {
                    t: "8 min",
                    s: "Serves 1",
                    ing: ["2 tortillas", "1.5 cups grated melty cheese", "optional: chicken, beans, jalapeños", "salsa + sour cream to dip"],
                    steps: ["Dry pan on medium; lay a tortilla, cover with cheese (+ fillings).", "Top with the 2nd tortilla, press gently.", "2 min until golden, flip carefully, 2 min more until molten.", "Slide out, cut into triangles, dip everything."]
                },
                "TH-0": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["200g flat dried rice noodles (5mm)", "2 eggs", "200g prawns or firm tofu cubes", "Sauce: 3 tbsp tamarind paste, 2 tbsp fish sauce, 2 tbsp palm or brown sugar", "2 cloves garlic, chopped", "2 big handfuls bean sprouts + 3 spring onions in batons", "¼ cup roasted peanuts, crushed + lime wedges + chilli flakes"],
                    steps: ["Soak the noodles in hot-tap-temperature water about 20 min, until bendy but still too firm to eat. They finish cooking in the pan — pre-boiled noodles turn to mush.", "Stir the sauce together until the sugar dissolves. Taste it: sour first, then salty, then sweet.", "Get a wok or big pan properly hot with 2 tbsp oil. Fry the prawns/tofu until just done and push to one side.", "Garlic in for 10 seconds, then crack in the eggs, scramble roughly, and let them set slightly.", "Add the drained noodles and the sauce; toss constantly 2–3 min. Still stiff? Splash of water and keep tossing until chewy-soft.", "Throw in the sprouts and spring onion for 30 seconds — they should stay crunchy.", "Plate, blanket with crushed peanuts, and serve with lime and chilli flakes so everyone tunes their own."]
                },
                "FR-1": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["4 slices bread", "4 slices ham", "1.5 cups grated gruyère", "1 tbsp butter + 1 tbsp flour + 1 cup milk", "mustard + nutmeg"],
                    steps: ["White sauce: melt butter, stir flour 1 min, whisk in milk until thick; add nutmeg + a little cheese.", "Butter bread; build bread → mustard → ham → cheese → bread.", "Spread white sauce on top, blanket with remaining cheese.", "Grill/broil 4–5 min until bubbling and golden."]
                },
                "CN-1": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["300g chicken thigh, cut in 2cm cubes", "Marinade: 1 tbsp soy, 1 tsp cornstarch, 1 tsp Shaoxing wine (or dry sherry)", "8–10 dried red chillies, snipped, seeds shaken out", "½ cup roasted peanuts", "3 cloves garlic + a thumb of ginger, sliced", "3 spring onions: whites in chunks, greens saved for the end", "Sauce: 2 tbsp soy, 1 tbsp black or rice vinegar, 1 tbsp sugar, 1 tsp cornstarch, 3 tbsp water", "1 tsp Sichuan peppercorns (optional — but they're the tingle)"],
                    steps: ["Toss the chicken in the marinade and let it sit 10 min while you chop everything else. Stir-fries end fast — everything must be ready before the pan gets hot.", "Stir the sauce in a cup until the cornstarch disappears.", "Heat 2 tbsp oil in a wok on high until it shimmers. Chicken in a single layer, no touching for 1 min, then stir-fry until golden, about 3 min. Remove.", "Lower to medium; toast the chillies (and Sichuan peppercorns) in the oil 30 sec until darkened and fragrant — not black, or the whole dish tastes burnt.", "Garlic, ginger and spring onion whites in for 30 seconds, then the chicken back in, then the sauce poured down the side of the wok.", "It thickens in about 30 seconds. Toss in the peanuts and spring onion greens, one last toss, straight onto rice. Sweet, sour, hot and tingly — all at once."]
                },
                "KR-3": {
                    t: "30 min",
                    s: "Serves 2",
                    ing: ["200g sweet-potato glass noodles (dangmyeon)", "150g beef strips or sliced mushrooms", "2 handfuls spinach", "1 carrot + ½ onion, in thin strips", "2 cloves garlic, minced", "Sauce: 4 tbsp soy, 2 tbsp sugar, 2 tbsp sesame oil", "toasted sesame seeds", "1 egg (optional, for ribbons on top)"],
                    steps: ["Boil the noodles 6–7 min until springy, drain, rinse in cold water, and snip a few times with scissors — full-length noodles are a workout to eat.", "Toss the warm noodles with HALF the sauce right away so they drink it in while you cook the rest.", "Blanch the spinach 30 sec, squeeze dry, season with a pinch of salt and sesame oil.", "Stir-fry the carrot and onion 2 min until just softened; then the beef (or mushrooms) with the garlic until browned.", "Everything into one big bowl with the remaining sauce; toss with your hands (gloves or clean hands — a spoon can't do it justice).", "Taste: it should be sweet-savoury and glossy. More soy if flat, more sugar if sharp. Finish with sesame seeds and egg ribbons if using. Serve warm or room temp — japchae is famously good both ways."]
                },
                "KR-4": {
                    t: "35 min",
                    s: "Serves 2",
                    ing: ["2 cups cooked short-grain rice, still warm", "1 tsp sesame oil + ½ tsp salt (for the rice)", "4 sheets gimbap nori", "1 carrot, in thin strips, quickly stir-fried", "2 handfuls spinach, blanched and squeezed", "2 eggs, made into a thick omelette and sliced into strips", "4 strips pickled yellow radish (danmuji — the crunchy soul of gimbap)", "ham or canned tuna with a little mayo (optional)", "extra sesame oil for shining the rolls"],
                    steps: ["Season the warm rice with sesame oil and salt; let it cool to just-warm. Hot rice makes the nori shrivel.", "Lay nori shiny-side DOWN. Spread a thin, even layer of rice over ¾ of the sheet — thin is the skill here; thick rolls burst.", "Line up your fillings in one neat row across the middle: radish, carrot, spinach, egg, ham/tuna.", "Roll from the rice end, tucking the fillings in with your fingers on the first turn — that first tuck decides everything. Keep it TIGHT.", "Seal the bare nori edge with a dab of water. Rub the finished roll with a little sesame oil so it gleams.", "Cut with your sharpest knife, wiping the blade with a wet cloth between cuts — a sticky knife squashes the rolls. Aim for 1.5cm coins.", "Eat the ugly end pieces yourself immediately. Cook's tax."]
                },
                "KR-5": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["3 cups milk, frozen in ice-cube trays (do this the night before)", "4 tbsp condensed milk, plus more for drizzling", "2 tbsp red bean paste (optional but classic)", "fresh fruit: strawberries, mango, banana", "mochi bits or rice cakes, cubed", "a few crushed nuts or misugaru powder (optional)"],
                    steps: ["Freeze the milk in cube trays at least 6 hours ahead — milk ice is what makes bingsu creamy instead of crunchy.", "Blitz the frozen milk cubes in a strong blender or food processor in short pulses until it turns into fluffy snow. Don't over-blend into a smoothie.", "Work fast: pile the milk snow high in chilled bowls.", "Drizzle generously with condensed milk — this is not the moment for restraint.", "Top with red bean paste, fruit and mochi bits.", "Serve with two spoons and an agreement about who gets the last strawberry. It melts fast — eat faster."]
                },
                "KR-6": {
                    t: "30 min",
                    s: "Serves 3",
                    ing: ["400g beef, sliced paper-thin (ribeye or sirloin; freeze 30 min to slice thinner)", "Marinade: 4 tbsp soy, 2 tbsp sugar, 1 tbsp sesame oil, ½ grated pear or apple, 3 cloves garlic, black pepper", "½ onion, sliced", "2 spring onions, in batons", "1 tsp oil for the pan", "sesame seeds + lettuce leaves for wrapping"],
                    steps: ["Whisk the marinade — the grated pear isn't garnish, its enzymes tenderise the beef and give bulgogi its signature sweetness.", "Massage it into the beef with the onion and marinate 15 min minimum (2 hours = restaurant level).", "Get a wide pan VERY hot with a little oil. Bulgogi wants to sear, not stew.", "Cook the beef in 2–3 batches in a single layer, 1–2 min per batch, until the edges caramelise. Crowd the pan and it boils in its own juice — grey and sad.", "Return everything for a final 30 seconds with the spring onions.", "Sprinkle sesame, serve over rice or wrap in lettuce with a dab of ssamjang. The slightly-burnt sticky bits from the pan belong to the cook."]
                },
                "KR-7": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["1 tube (350g) silken/soft tofu — the wobbliest you can find", "100g pork mince or 6 shrimp (optional)", "1 tbsp gochugaru + 1 tsp gochujang", "1 tbsp oil + 1 tsp sesame oil", "3 cloves garlic, minced + ½ onion, chopped", "2 cups anchovy or chicken stock", "1 spring onion + 1 egg", "few slices of courgette or mushrooms (optional)", "fish sauce or salt, to season"],
                    steps: ["Heat both oils on medium and fry the garlic, onion (and pork if using) 2 min.", "Add gochugaru and gochujang; fry 30 seconds until the oil turns brick-red and smells toasty — burning it makes bitterness, so keep it moving.", "Pour in the stock, bring to a boil, and season with fish sauce or salt until it tastes a touch too strong — the tofu will mellow it.", "Scoop the silken tofu in with a spoon in big soft chunks. Don't stir hard — nudge. Simmer 5 min.", "Crack the egg into the centre, count to twenty, then kill the heat — it should still be runny when it hits the table.", "Spring onion on top; serve VIOLENTLY bubbling (in a stone pot if you have one) with rice on the side. The sound is part of the dish."]
                },
                "KR-8": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["400g thick-cut pork belly slices (1cm — ask the butcher)", "1 head of lettuce + perilla leaves if you can find them", "ssamjang (or mix 2 parts doenjang/miso : 1 part gochujang)", "4 cloves garlic, sliced", "kimchi", "salt + sesame oil dip (2 tbsp sesame oil + ½ tsp salt + pepper)", "steamed rice"],
                    steps: ["Bring the pork to room temperature and pat it dry — wet pork steams instead of crisping.", "Heat a heavy dry pan (or grill plate) on medium-high. No oil: the belly brings its own.", "Lay the slices flat and leave them 3–4 min per side until deep golden and crackly at the edges. Resist moving them around.", "Grill the garlic slices and kimchi in the rendered pork fat at the side of the pan — kimchi fried in pork fat is a religious experience.", "Snip everything into bite-size pieces with kitchen scissors, directly in the pan. This is the authentic tool.", "Build a ssam: lettuce in your palm, rice, pork, garlic, kimchi, dab of ssamjang. Fold into a parcel that is one bite. One. Bite. No matter the size. That's the rule."]
                },
                "KR-9": {
                    t: "90 min",
                    s: "Serves 4",
                    ing: ["2 cups (250g) flour + 1 tsp instant yeast + 1 tbsp sugar + ½ tsp salt", "¾ cup warm milk (comfortably warm, not hot)", "1 tbsp oil, plus more for frying", "Filling: ⅓ cup brown sugar + 1 tsp cinnamon + 2 tbsp crushed walnuts or peanuts"],
                    steps: ["Mix flour, yeast, sugar, salt, warm milk and oil into a soft, sticky dough. Knead 3 min, cover, and let it rise 1 hour until doubled.", "Mix the filling. Oil your hands — the dough is sticky and this is normal, not a mistake.", "Divide into 8 balls. Flatten one in your palm, add a heaping tablespoon of filling, and pinch the edges shut like a dumpling. Seal well or the sugar lava escapes.", "Heat 3 tbsp oil in a pan on medium. Place a ball seam-side DOWN, wait 30 seconds, then press it flat with a spatula (a hotteok press if you're fancy).", "Fry 2–3 min per side until deep golden. Lower the heat if they brown too fast — the sugar inside needs time to melt.", "Cool 2 minutes before biting. The filling is genuinely molten. Everyone ignores this warning exactly once."]
                },
                "US-1": {
                    t: "50 min",
                    s: "Serves 2",
                    ing: ["1kg chicken wings", "2 tbsp baking powder + salt", "½ cup hot sauce + 3 tbsp melted butter"],
                    steps: ["Pat wings dry, toss with baking powder and salt.", "Bake at 220C ~45 min until crisp, flipping once.", "Whisk hot sauce with melted butter.", "Toss the hot wings in the sauce; serve with ranch."]
                },
                "US-3": {
                    t: "20 min",
                    s: "Serves 3",
                    ing: ["1½ cups (190g) plain flour", "2 tbsp sugar + 2 tsp baking powder + ½ tsp salt", "1¼ cups (300ml) milk", "1 egg", "2 tbsp melted butter + more for the pan", "1 tsp vanilla (optional)", "maple syrup, enough to drown them"],
                    steps: ["Whisk the dry ingredients in one bowl; whisk milk, egg, butter and vanilla in another.", "Pour wet into dry and stir LAZILY — stop while small lumps remain. Smooth batter = tough pancakes.", "Rest the batter 5 min while the pan heats on medium. Butter should sizzle quietly, not brown instantly.", "Ladle about ¼ cup per pancake. Don't spread it — it finds its own shape.", "Flip exactly when bubbles cover the surface and the edges look set (about 2 min). One flip only, ever.", "45–60 seconds on side two. Stack them high, butter between layers if you're living right, syrup over everything."]
                },
                "US-4": {
                    t: "10 min",
                    s: "Serves 2",
                    ing: ["2 sausages", "2 buns", "ketchup, mustard, fried onions"],
                    steps: ["Simmer or grill the sausages until plump.", "Warm the buns.", "Nestle a sausage in each.", "Top with ketchup, mustard and onions."]
                },
                "US-5": {
                    t: "60 min",
                    s: "Serves 6",
                    ing: ["2 pie crusts", "5 apples, sliced", "¾ cup sugar, 1 tsp cinnamon, 1 tbsp flour", "knob of butter"],
                    steps: ["Toss apples with sugar, cinnamon and flour.", "Line a dish with crust, pile in apples, dot with butter.", "Top with the second crust, seal and slit.", "Bake at 200C ~45 min until golden."]
                },
                "US-6": {
                    t: "3 hrs",
                    s: "Serves 3",
                    ing: ["1 rack pork ribs", "2 tbsp BBQ rub", "1 cup BBQ sauce"],
                    steps: ["Rub the ribs and wrap in foil.", "Bake low at 150C for 2.5 hrs until tender.", "Unwrap, brush with BBQ sauce.", "Blast under the grill 5 min until sticky."]
                },
                "US-7": {
                    t: "12 min",
                    s: "Serves 2",
                    ing: ["1 romaine, chopped", "croutons + parmesan", "2 tbsp mayo, 1 tsp mustard, 1 anchovy, lemon, garlic"],
                    steps: ["Whisk mayo, mustard, mashed anchovy, lemon and garlic.", "Toss the romaine in the dressing.", "Add croutons and shaved parmesan.", "Crack over black pepper."]
                },
                "US-8": {
                    t: "30 min",
                    s: "Serves 4",
                    ing: ["2 cans clams (reserve juice)", "2 potatoes, diced", "1 onion + 2 rashers bacon", "1 cup cream + 1 tbsp flour"],
                    steps: ["Crisp the bacon, soften onion in the fat.", "Stir in flour, then clam juice and potatoes; simmer until soft.", "Add cream and the clams; warm through.", "Season and serve with crackers."]
                },
                "US-9": {
                    t: "2 hrs",
                    s: "Makes 12",
                    ing: ["2 cups flour, 1 tsp yeast, ¼ cup sugar", "½ cup warm milk, 1 egg, 2 tbsp butter", "glaze: icing sugar + milk"],
                    steps: ["Mix the dough and rise 1 hr; cut into rings.", "Rise again 30 min.", "Fry ~1 min per side until golden.", "Dip in the glaze while warm."]
                },
                "JP-0": {
                    t: "50 min",
                    s: "Serves 2",
                    ing: ["2 cups sushi rice (the short-grain kind — this is non-negotiable)", "Seasoning: 3 tbsp rice vinegar + 1 tbsp sugar + 1 tsp salt, warmed until dissolved", "sashimi-grade fish (salmon or tuna) — or cucumber, avocado, cooked prawn", "nori sheets", "wasabi + soy + pickled ginger", "a bowl of water with a splash of vinegar (for your hands)"],
                    steps: ["Rinse the rice until the water runs clear, cook it, then tip it into a wide bowl. Fold in the warm vinegar seasoning with a cutting motion while fanning it — you want shiny, seasoned grains, not mush.", "Let the rice cool to body temperature. Hot rice cooks the fish and tears the nori.", "Slice the fish across the grain into 1cm-thick pieces with your longest, sharpest knife — one confident pull per slice, no sawing.", "For nigiri: wet your hands, press ~20g of rice into a gentle oval (firm enough to hold, loose enough to fall apart in the mouth), swipe a fingertip of wasabi, lay the fish over.", "For rolls: nori shiny-side down, thin rice layer, fillings in a line, roll firmly with the mat, and slice with a wet blade.", "Arrange on a plate with ginger and wasabi. Dip fish-side (not rice-side) in soy — rice-side drinking soy is how rolls fall apart. Eat within the hour; sushi doesn't keep."]
                },
                "JP-2": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["2 pork loin steaks (2cm thick)", "salt + pepper", "¼ cup flour, 1 beaten egg, 1½ cups panko (real panko — regular breadcrumbs won't shatter)", "oil for shallow frying (1cm deep)", "tonkatsu sauce (or mix: 2 tbsp ketchup + 1 tbsp Worcestershire + 1 tsp soy)", "shredded raw cabbage + rice"],
                    steps: ["Snip the fat rim of each steak in a few places so it doesn't curl, pound lightly to even thickness, and season.", "Bread them in strict order: flour (shake off excess), egg, then PRESS into panko so it really sticks. A loose crumb falls off in the oil.", "Heat the oil to 170°C — a panko crumb should sizzle and float at once, not burn.", "Fry 3–4 min per side to deep golden. Turn ONCE only; fiddling knocks the crust off.", "Rest on a rack (not paper — paper steams the bottom soggy) for 3 minutes. The rest finishes the cooking.", "Slice into strips with one decisive stroke each, reassemble on the plate, and serve with the sauce, a mountain of raw cabbage and rice. The cabbage is not a garnish — it's the co-star."]
                },
                "JP-3": {
                    t: "30 min",
                    s: "Serves 2",
                    ing: ["Batter: 1 cup flour + 2 cups cold dashi + 1 egg + 1 tsp soy", "150g cooked octopus, in 1cm dice (or shrimp/cheese/sausage — no takoyaki police here)", "2 spring onions, finely chopped + 2 tbsp pickled red ginger, chopped", "tenkasu (tempura crumbs) if you have them", "takoyaki sauce (or tonkatsu sauce), Kewpie mayo, bonito flakes, aonori", "oil + a takoyaki pan (a cake-pop pan works in a pinch)"],
                    steps: ["Whisk the batter until thin and pourable — closer to crepe batter than pancake. Lumps out, then rest it 10 min.", "Heat the takoyaki pan on medium-high and brush EVERY hole generously with oil until it shimmers.", "Pour batter to overflowing — yes, over the edges of the holes, it's supposed to flood. Drop octopus, spring onion, ginger and tenkasu into each hole.", "Wait 2 min until the bottoms set, then run a skewer around each ball, tucking the overflow in as you flip it 90°. Uncooked batter spills into the hole and builds the sphere.", "Keep turning every 30–60 seconds for ~6 min until they're golden, round and crisp all over. The first batch is always ugly. Tradition.", "Sauce, mayo zigzag, bonito flakes (watch them dance), aonori. Serve molten — and warn people, because nobody ever waits."]
                },
                "JP-4": {
                    t: "25 min",
                    s: "Serves 2",
                    ing: ["8 large prawns, peeled, tails on, deveined", "veg: sweet potato rounds, green beans, sliced pumpkin or aubergine", "Batter: 1 cup plain flour + 1 cup ICE-COLD sparkling water + 1 egg yolk", "extra flour for dusting", "oil for deep frying", "Dip: ¼ cup dashi + 2 tbsp soy + 1 tbsp mirin, warmed (or just salt + lemon)"],
                    steps: ["Make 2–3 shallow cuts across the belly of each prawn and press it gently straight — this stops the dramatic curl.", "Get the oil to 180°C. Keep the sparkling water in the fridge until the last second: COLD batter hitting HOT oil is the entire physics of tempura.", "Make the batter at the last moment: yolk into the icy water, flour in, then stir with chopsticks about 5 times. It must stay lumpy with dry flour pockets. Smooth batter = doughnut coating.", "Dust everything lightly with flour, drag through the batter, and slide into the oil away from you.", "Fry in small batches: veg 2–3 min, prawns 1–2 min, until pale gold and whisper-crisp — tempura is blonde, not brown. Skim the crumbs between batches.", "Drain on a rack, eat within minutes with the warm dip. Tempura has a shorter life than an ice cream in the sun."]
                },
                "JP-5": {
                    t: "40 min",
                    s: "Serves 3",
                    ing: ["24 gyoza wrappers", "250g pork mince (or finely chopped mushrooms)", "2 cups finely chopped cabbage + ½ tsp salt", "2 cloves garlic + a thumb of ginger, grated", "2 spring onions, minced", "1 tbsp soy + 1 tsp sesame oil + a pinch of sugar", "Dip: 2 tbsp soy + 1 tbsp rice vinegar + chilli oil"],
                    steps: ["Salt the chopped cabbage, wait 10 min, then squeeze the water out with your hands — wet cabbage = burst dumplings.", "Mix pork, cabbage, garlic, ginger, spring onion and seasonings; stir in ONE direction until sticky, about 1 min.", "Put a teaspoon (no more!) of filling in a wrapper, wet the edge with a finger, fold and pinch 4–5 pleats. Ugly ones taste identical.", "Heat 1 tbsp oil in a lidded pan on medium-high; line the gyoza up flat-side down and fry 2–3 min until the bottoms are deep gold.", "Pour in ¼ cup water, slam the lid on, and steam 4–5 min until the wrappers turn translucent.", "Lid off for a final minute to re-crisp the bottoms. Serve crispy-side up with the dip. Count how many each person eats — there will be disputes."]
                },
                "JP-6": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["2 portions udon (frozen sanuki udon is genuinely the best kind you can buy)", "3 cups dashi (or water + dashi powder — no shame)", "2 tbsp soy sauce + 1 tbsp mirin + ½ tsp sugar", "2 spring onions, finely sliced", "tempura bits (tenkasu), a soft egg, or fish cake slices to top", "shichimi chilli powder at the table"],
                    steps: ["Warm the dashi with soy, mirin and sugar; bring it just to a simmer and taste — it should be gentle and savoury, a broth you could drink all day.", "Cook the udon in a SEPARATE pot of plain boiling water (frozen ones need just 1–2 min), then drain. Cooking them in the broth clouds it with starch.", "Rinse the noodles briefly under hot water to remove surface starch — this keeps them slippery-bouncy, which is the whole point of udon.", "Noodles into deep bowls, hot broth over the top.", "Top with spring onion and whatever you love — tenkasu for crunch, a jammy egg for luxury.", "Shichimi on top, slurp loudly. In Japan that's a compliment to the cook, and the cook is you."]
                },
                "JP-7": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["2 cups cooked short-grain rice, warm (freshly cooked shapes best)", "fillings: canned tuna mixed with 1 tbsp mayo, or umeboshi plum, or flaked grilled salmon", "2 sheets nori, cut into wide strips", "salt", "a small bowl of water"],
                    steps: ["Wet both hands in the water and rub a generous pinch of salt across your palms — the salt goes on your hands, not in the rice. That's the traditional seasoning trick.", "Scoop a tennis-ball of warm rice, press a deep dimple in the middle, and drop in a teaspoon of filling.", "Fold the rice over the filling and squeeze gently into a triangle: cup one hand into a roof shape, rotate, press. Three rotations usually does it.", "Press firm enough to survive being held, loose enough that it crumbles pleasantly when bitten. Squeezing hard makes rice bullets.", "Wrap the bottom with a nori strip — added just before eating so it stays crisp.", "Eat warm, or wrap for later — onigiri is Japan's original portable lunch and it survives backpacks better than any sandwich."]
                },
                "JP-9": {
                    t: "30 min",
                    s: "Serves 4",
                    ing: ["1 cup (120g) glutinous rice flour (mochiko/shiratamako — regular rice flour will NOT work)", "¾ cup water + 3 tbsp sugar", "½ cup cornstarch, toasted 1 min in a dry pan (for dusting)", "Filling: red bean paste rolled into 8 balls, or 8 small scoops of ice cream frozen HARD"],
                    steps: ["If doing ice cream: scoop 8 small balls onto a tray and freeze until rock solid, at least 1 hour. Soft ice cream is game over.", "Whisk rice flour, water and sugar smooth in a microwave-safe bowl. Cover loosely.", "Microwave 1 min, stir with a wet spatula, 1 min more, stir again — it's done when translucent, glossy and stretchy like slime you'd actually want to eat.", "Tip it onto a surface generously dusted with the toasted cornstarch. Dust the top too. Let it cool 5 min — it's molten glue at first.", "Divide into 8, flatten each into a palm-size disc with dusted hands, wrap around a filling ball and pinch sealed. Work fast with ice cream.", "Dust off the excess starch. Red bean ones keep a day at room temp; ice cream ones go back in the freezer 30 min and are best eaten slightly softened, 5 min out."]
                },
                "JP-10": {
                    t: "45 min",
                    s: "Serves 2",
                    ing: ["seasoned sushi rice", "3–5 kinds of sashimi-grade fish", "wasabi + soy sauce", "pickled ginger", "optional: tamago, ikura, sea urchin"],
                    steps: ["Be your own chef: plan the order — start light (white fish), build to rich (tuna, salmon, uni).", "Press small ovals of warm rice; brush each with a little soy.", "Lay one slice of fish over each piece; add a dab of wasabi.", "Serve just one or two pieces at a time, freshest first — that's the omakase way.", "Finish with tamago or a hand roll, and a cup of green tea."]
                },
                "IN-1": {
                    t: "75 min",
                    s: "Serves 4",
                    ing: ["2 cups basmati rice, rinsed until the water runs clear", "400g chicken thigh, big pieces", "Marinade: 1 cup yogurt, 2 tbsp ginger-garlic paste, 2 tbsp biryani masala, 1 tsp turmeric, 1 tsp chilli, salt", "2 onions, thinly sliced and fried golden (birista)", "a handful each of mint + coriander leaves", "¼ cup warm milk + a big pinch of saffron", "4 tbsp ghee", "whole spices: 2 bay leaves, 4 cardamom pods, 1 cinnamon stick"],
                    steps: ["Marinate the chicken at least 30 min (overnight is better). Soak the rinsed rice 20 min. Steep the saffron in the warm milk.", "Fry the sliced onions in ghee until deep golden and crisp — 10 patient minutes. Save half for layering.", "Boil a big pot of heavily salted water with the whole spices; cook the rice ONLY to 70% done (the grain still has a firm white core, about 5–6 min). Drain.", "Spread the marinated chicken (with all its marinade) on the bottom of a heavy pot. Layer: half the rice, half the onions and herbs, the rest of the rice, the rest of the onions and herbs, then the saffron milk and 2 tbsp ghee over the top.", "Seal the lid tight (foil under the lid works) and cook: 5 min on medium to build steam, then 25 min on the LOWEST heat. No peeking — the trapped steam (dum) is doing the cooking.", "Rest 10 min off the heat, then open and dig from the bottom up so every plate gets chicken, saffron rice and crispy onion. The slightly crusted bottom layer is the prize."]
                },
                "IN-2": {
                    t: "30 min",
                    s: "Makes 6",
                    ing: ["3 cups dosa batter (store-bought is totally fine)", "3 boiled potatoes, roughly mashed", "1 onion, sliced thin", "1 tsp mustard seeds + 10 curry leaves", "½ tsp turmeric + ¾ tsp salt", "3 tbsp ghee or oil", "coconut chutney, to serve"],
                    steps: ["Heat 1 tbsp ghee, pop the mustard seeds (they'll jump — that's good), add curry leaves for 10 seconds.", "Add the onion, cook 3 min until golden. Stir in turmeric, salt and the potatoes. Your filling is done — taste it, it should already make you happy.", "Heat a flat pan on medium-high. Sprinkle water — if it dances, you're ready.", "Pour ⅓ cup batter in the centre and spread it outward in circles with the ladle. If the first one tears, that's the rule, not you.", "Drizzle 1 tsp ghee around the edge. Wait 2 min — no flipping — until it's golden and lifts by itself.", "Put a line of potato in the middle, fold both sides over, done. Serve hot with chutney. You just made a dosa on your first try."]
                },
                "IN-3": {
                    t: "60 min",
                    s: "Makes 8",
                    ing: ["2 cups flour + ¾ tsp salt + 4 tbsp oil", "about ½ cup cold water", "3 boiled potatoes, crumbled", "½ cup peas", "1 tsp cumin seeds + 1 tsp garam masala + ¾ tsp salt", "a handful of chopped coriander", "oil for frying"],
                    steps: ["Rub the 4 tbsp oil into the flour with your fingers, then add water bit by bit to make a firm dough. Rest it 30 min — it needs the nap.", "Fry cumin in 1 tbsp oil for 20 seconds, add peas, potatoes, garam masala and salt. Mash a little, mix in coriander, and let it cool.", "Roll the dough into 4 balls, then flat ovals. Cut each in half — every half becomes one samosa.", "Fold a half into a cone, wet the edge to glue it. Fill with potato, pinch the top shut tight.", "Fry on LOW heat 12–15 min until deep golden. Low and slow is the whole secret — fast frying makes soft shells.", "Let them sit 5 min (they get crispier as they cool). Dip in any chutney or even ketchup — no judgement here."]
                },
                "IN-4": {
                    t: "40 min",
                    s: "Serves 2",
                    ing: ["250g paneer, in big cubes", "½ cup thick yogurt", "1 tbsp ginger-garlic paste", "1 tsp garam masala + 1 tsp chilli powder + ¾ tsp salt", "1 tbsp lemon juice", "1 green pepper + 1 onion, in squares", "1 tbsp butter"],
                    steps: ["Mix the yogurt with all the spices and lemon — this is your marinade, and it should taste bold.", "Gently coat the paneer, pepper and onion in it. Wait 20 min (or up to 4 hours — more time, more flavour).", "Thread onto skewers, or just lay everything on a tray if skewers feel like homework.", "Grill at 240°C or pan-fry on high, about 2 min per side, until the corners char a little. Char = flavour, not burnt.", "Brush with butter in the last minute. Watch it turn glossy like the restaurant version.", "Squeeze lemon on top and eat hot. The crispy yogurt bits stuck to the pan are the chef's reward."]
                },
                "IN-5": {
                    t: "50 min",
                    s: "Makes 16",
                    ing: ["1 cup milk powder", "3 tbsp flour + ¼ tsp baking soda", "2 tbsp melted ghee", "4–6 tbsp milk", "Syrup: 2 cups sugar + 2 cups water + 6 cardamom pods", "ghee or oil for frying"],
                    steps: ["Make the syrup first: boil sugar, water and cardamom 5 min, then keep it warm on the lowest flame.", "Mix milk powder, flour and soda. Add the ghee, then milk spoon by spoon until a soft dough forms. Stop mixing the second it comes together.", "Roll 16 small balls with greased hands. Smooth them well — smooth now means no cracks later.", "Fry on LOW heat (the balls should rise slowly, not shoot up). Stir gently 7–8 min until deep brown.", "Drop them straight into the warm syrup. Walk away for 30 minutes — they'll drink it up and double in size.", "Serve warm. Soft, syrupy, melts in the mouth — and yes, you made these from milk powder."]
                },
                "IN-6": {
                    t: "60 min",
                    s: "Serves 3",
                    ing: ["2 cups chickpeas, soaked overnight (or 3 cups canned)", "2 onions + 3 tomatoes, chopped", "1 tbsp ginger-garlic paste", "2 tbsp chole masala + 1 tsp cumin seeds + salt", "1 black tea bag (trust us — it makes the colour)", "Bhature: 2 cups flour + ¼ cup yogurt + ½ tsp baking powder + 1 tsp sugar + water", "oil for frying"],
                    steps: ["Cook the chickpeas with the tea bag until soft (20 min pressure cooker, 10 min if canned). Remove the bag, keep the water.", "Mix the bhature dough — soft, not sticky. Cover it and let it rest somewhere warm while you cook.", "Fry cumin, then onions until golden (6 min). Add ginger-garlic, then tomatoes and masala until the oil peeks out at the edges.", "Add chickpeas + 1½ cups of their water. Simmer 15 min, mash a few against the pot to thicken. Dark, thick, done.", "Roll the dough into 6 ovals. Fry one at a time in hot oil — press gently and watch it balloon. That moment never gets old.", "Eat right away with raw onion and lemon. Hands, not forks. This is the rule."]
                },
                "IN-7": {
                    t: "35 min",
                    s: "Serves 3",
                    ing: ["400g spinach", "250g paneer, cubed", "1 onion + 2 tomatoes, chopped", "1 tbsp ginger-garlic paste", "1 tsp cumin seeds + ½ tsp garam masala + salt", "2 tbsp butter + 2 tbsp cream"],
                    steps: ["Boil the spinach 1 minute, then dunk it in cold water. This one trick keeps your curry bright green instead of army green.", "Blend it into a rough purée — a little texture is good.", "Fry cumin in butter, add onion for 5 min, then ginger-garlic, then tomatoes until soft.", "Pour in the spinach and simmer just 3 min. Short is the point — long boiling steals the colour back.", "Add the paneer cubes and warm them through for 2 min. Swirl in the cream.", "Squeeze of lemon, done. Scoop it up with naan, roti or rice — it loves them all equally."]
                },
                "IN-8": {
                    t: "40 min",
                    s: "Serves 4",
                    ing: ["30 ready-made puri shells (everyone buys them, seriously)", "1 bunch coriander + ½ bunch mint", "2 green chillies + a thumb of ginger", "1 tsp roasted cumin + ½ tsp black salt + juice of 1 lime", "3 cups cold water", "2 boiled potatoes + ½ cup chickpeas", "tamarind chutney"],
                    steps: ["Blend the coriander, mint, chillies, ginger and lime with 1 cup water until smooth.", "Add the spices, black salt and the rest of the water. Chill it. Taste — it should be a spicy-sour slap, in the best way.", "Mash the potatoes with the chickpeas. That's the filling, done.", "Line everything up: shells, filling, chutney, and the pani with a small ladle.", "Crack a hole in a shell's top with your thumb, spoon in filling, a drop of chutney, then flood it with pani.", "In your mouth whole, immediately — you have 10 seconds before it leaks. It's a race and everyone wins."]
                },
                "IN-9": {
                    t: "45 min",
                    s: "Makes 20",
                    ing: ["1 cup flour + 1 tbsp cornstarch + ¼ tsp turmeric", "¾ cup yogurt + ¼ cup water", "¼ tsp baking soda", "Syrup: 1½ cups sugar + ¾ cup water + 6 cardamom pods + 1 tsp lemon juice", "oil for frying", "a squeeze bottle (or a zip bag with a corner snipped)"],
                    steps: ["Whisk flour, cornstarch, turmeric, yogurt and water into a thick batter. Let it sit 2 hours — patience makes the tang.", "Boil the syrup ingredients 6 min until slightly sticky. Keep it warm.", "Stir the soda into the batter, load your bottle. The batter should fall in a slow ribbon.", "Pipe spirals into 170°C oil, 3 rounds each. The first few will look like modern art — keep going, spiral #4 clicks.", "Fry 2 min per side until crisp, then dunk in the warm syrup for 30 seconds a side.", "Eat hot, whole, while it's still crackly. Syrup on your chin means you did it right."]
                },
                "FR-0": {
                    t: "varies",
                    s: "Makes 8",
                    ing: ["bread dough (flour, yeast, milk)", "lots of cold butter", "egg wash"],
                    steps: ["Make a dough and chill.", "Encase a butter block; do 3 fold-and-roll turns, chilling between.", "Cut triangles and roll into crescents; prove until puffy.", "Egg-wash and bake at 200C until golden and flaky."]
                },
                "FR-2": {
                    t: "55 min",
                    s: "Serves 4",
                    ing: ["aubergine, courgette, pepper, tomato", "onion + garlic", "olive oil + herbs de Provence"],
                    steps: ["Make a tomato-onion-garlic sauce in the base of a dish.", "Slice the veg thin and fan them over the top.", "Drizzle oil, scatter herbs, cover with paper.", "Bake at 190C ~45 min until tender."]
                },
                "FR-3": {
                    t: "25 min",
                    s: "Serves 3",
                    ing: ["1 cup flour, 2 eggs, 1.25 cups milk", "1 tbsp melted butter", "filling: sugar-lemon or chocolate"],
                    steps: ["Whisk a thin smooth batter; rest 20 min.", "Swirl a thin layer onto a hot buttered pan.", "Flip when the edges lift; 30 sec more.", "Fill and fold into quarters."]
                },
                "FR-4": {
                    t: "40 min",
                    s: "Makes 20",
                    ing: ["1 cup ground almonds + 1.5 cups icing sugar", "3 egg whites + ¼ cup sugar", "filling: ganache or buttercream"],
                    steps: ["Sift the almonds and icing sugar.", "Whip the whites to a stiff meringue, then fold in the almond mix.", "Pipe rounds, tap the tray, rest 30 min until skinned.", "Bake at 150C ~14 min; sandwich with filling."]
                },
                "FR-5": {
                    t: "50 min",
                    s: "Serves 6",
                    ing: ["1 shortcrust pastry", "3 eggs + 1 cup cream", "bacon + cheese", "onion"],
                    steps: ["Blind-bake the pastry case 15 min.", "Scatter in cooked bacon, onion and cheese.", "Whisk eggs and cream with seasoning; pour in.", "Bake at 180C ~30 min until just set."]
                },
                "FR-6": {
                    t: "3 hrs",
                    s: "Serves 4",
                    ing: ["800g beef chuck", "bacon, onion, carrot, garlic", "2 cups red wine + stock", "mushrooms"],
                    steps: ["Brown the beef in batches; set aside.", "Soften bacon and veg, then return the beef.", "Add wine and stock; simmer covered 2.5 hrs.", "Add fried mushrooms near the end; reduce to a glossy sauce."]
                },
                "FR-7": {
                    t: "60 min",
                    s: "Serves 4",
                    ing: ["4 onions, thinly sliced", "2 tbsp butter", "4 cups beef stock + splash wine", "baguette + gruyere"],
                    steps: ["Cook the onions in butter LOW for 40 min until deep brown.", "Add wine and stock; simmer 20 min.", "Ladle into bowls, float toasted baguette on top.", "Pile on gruyere and grill until bubbling."]
                },
                "FR-8": {
                    t: "8 min",
                    s: "Serves 1",
                    ing: ["1 baguette", "ham + brie", "butter", "cornichons / lettuce"],
                    steps: ["Split the baguette and butter generously.", "Layer ham and brie.", "Add cornichons or greens.", "Press and slice."]
                },
                "FR-9": {
                    t: "50 min",
                    s: "Makes 10",
                    ing: ["choux: water, butter, flour, eggs", "filling: pastry cream", "chocolate glaze"],
                    steps: ["Make choux: boil water and butter, beat in flour, then eggs.", "Pipe logs and bake at 200C until hollow and crisp.", "Fill with pastry cream.", "Dip the tops in chocolate glaze."]
                },
                "IT-0": {
                    t: "30 min",
                    s: "Serves 2",
                    ing: ["400g pizza dough (store-bought is fine — but it MUST be at room temperature)", "½ cup passata", "1 clove garlic, grated + a pinch of salt + 1 tsp olive oil", "125g fresh mozzarella, torn and drained on paper towel", "fresh basil leaves", "olive oil + semolina or flour for dusting"],
                    steps: ["Put a pizza stone or an upside-down baking tray on the top shelf and crank the oven to its absolute maximum (250°C+) for a full 30 min. A cold surface is why home pizza disappoints.", "Stir the garlic, salt and olive oil into the passata. That's the whole sauce — no cooking.", "Stretch the room-temperature dough by hand on a floured surface, pressing from the centre outwards. Leave the edge fat. Never use a rolling pin — it kills the bubbles.", "Sauce in a thin layer — 3 tbsp maximum. Too much sauce = soggy middle. Scatter the drained mozzarella. Nothing else yet.", "Slide it onto the screaming-hot tray and bake 7–10 min until the crust is leopard-spotted and the cheese bubbles.", "Basil and a swirl of olive oil go on AFTER the oven (basil burns black inside). Slice, and accept that you'll be making this weekly now."]
                },
                "IT-2": {
                    t: "2 hrs",
                    s: "Serves 6",
                    ing: ["500g beef mince", "1 onion + 1 carrot + 1 celery stick, diced small", "2 tbsp tomato paste + 700g passata", "½ cup milk (sounds weird, works wonders)", "Béchamel: 4 tbsp butter + 4 tbsp flour + 3 cups milk + a pinch of nutmeg", "250g lasagne sheets (no-boil is fine)", "100g parmesan, grated"],
                    steps: ["Soften the veg in olive oil, 8 min. Add the beef and brown it properly — 6 min, let it catch a little. Browned bits = flavour.", "Add tomato paste, passata, milk and 1 tsp salt. Simmer on low 45 min. Go do something else; the pot is working.", "Béchamel: melt butter, stir in flour 1 min, add milk bit by bit while whisking. 3 min later you have white silk. Nutmeg in.", "Layer in a baking dish: thin ragù first, then sheets → ragù → béchamel → parmesan. Repeat 4 times, end with béchamel and lots of cheese.", "Bake at 180°C for 35–40 min until golden and bubbling at the corners.", "Now the hardest step: wait 15 minutes before cutting. It rewards you with clean, proud slices instead of soup."]
                },
                "IT-3": {
                    t: "35 min",
                    s: "Serves 2",
                    ing: ["1½ cups arborio rice (don't rinse it — the starch is the sauce)", "5 cups warm stock, kept on the stove", "1 small onion, diced fine", "½ cup white wine", "3 tbsp butter + 2 tbsp olive oil", "60g parmesan, grated"],
                    steps: ["Keep the stock warm in a pot next to you — you'll be visiting it a lot.", "Soften the onion in oil and half the butter, 4 min, no browning.", "Add the rice and stir 2 min until the edges look glassy. It'll smell faintly nutty — that's your cue.", "Wine in, stir until it disappears. Then add stock one ladle at a time, stirring, waiting until each is absorbed. About 18 min. Put music on.", "Taste at 16 min: soft with a tiny bite in the middle = perfect. It should flow like slow lava, not stand like mash.", "Off the heat, beat in the rest of the butter and all the parmesan. That final stir is where the creaminess comes from. Serve immediately, feel fancy."]
                },
                "IT-4": {
                    t: "30 min",
                    s: "Serves 6",
                    ing: ["250g mascarpone, at room temperature", "3 fresh eggs, yolks and whites separated", "⅓ cup sugar", "1 cup strong coffee, cooled", "20 ladyfinger biscuits", "2 tbsp cocoa powder"],
                    steps: ["Whisk the yolks with the sugar until pale and creamy, about 2 min. Fold in the mascarpone gently.", "Whip the whites to firm peaks, then fold them in softly. The fluff is the whole dessert — protect it.", "Dip each biscuit in the coffee for ONE second per side. Count it. They keep soaking after you stop.", "Layer: biscuits, half the cream, biscuits again, the rest of the cream.", "Fridge for 4 hours minimum — overnight if you can bear it. This is when it becomes tiramisu.", "Dust with cocoa right before serving. First bite quiet, second bite someone asks for the recipe."]
                },
                "IT-5": {
                    t: "5 hrs",
                    s: "Serves 4",
                    ing: ["2 cups whole milk + 1 cup cream", "¾ cup sugar, split in half", "4 egg yolks", "2 tsp vanilla (or 100g melted dark chocolate)", "a pinch of salt"],
                    steps: ["Warm the milk, cream and half the sugar until it steams. No boiling — just hot.", "Whisk the yolks with the other half of the sugar until pale. Pour the hot milk in slowly, whisking the whole time.", "Back on low heat, stir until it thickens enough to coat a spoon, about 5 min. If you can draw a line on the spoon with your finger, it's ready.", "Stir in vanilla (or chocolate) and salt, then chill it completely — 2 hours. Cold base = creamy gelato, warm base = ice crystals.", "Churn in a machine 20 min. No machine? Freeze in a tray and beat with a fork every 30 min, 4 times. Works honestly fine.", "Freeze 1 hour more, then take it out 10 min before scooping. That's the silky window. You made real gelato."]
                },
                "IT-6": {
                    t: "60 min",
                    s: "Serves 4",
                    ing: ["400g spaghetti", "400g beef mince", "1 onion + 1 carrot + 1 celery stick, diced small", "2 tbsp tomato paste + 400g passata", "½ cup milk", "2 tbsp olive oil + salt + pepper", "parmesan for the summit"],
                    steps: ["Cook the diced veg in oil on medium for 8 min until soft and sweet. Don't rush this — it's the base of everything.", "Turn up the heat, add the beef, and brown it for real: 6 min, breaking it up, letting it catch here and there.", "Stir in the tomato paste, then passata, milk and 1 tsp salt.", "Simmer on the lowest heat for 40 min. Stir when you walk past. The sauce is ready when it's thick and the top glistens.", "Cook the spaghetti in salty water until al dente. Scoop out a mug of the water before draining.", "Toss the pasta in the sauce pan with a splash of that water for one minute. Mountain of parmesan on top. Buonissimo — and you barely tried."]
                },
                "IT-7": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["4 thick slices of crusty bread", "3 ripe tomatoes, diced", "1 clove garlic, cut in half", "6 basil leaves", "2 tbsp olive oil + flaky salt"],
                    steps: ["Salt the diced tomatoes and let them drain in a sieve for 10 min. This one step separates bruschetta from sad wet bread.", "Mix the tomatoes with the olive oil and half the basil.", "Toast the bread until properly golden and crunchy.", "While it's hot, rub each slice with the cut garlic — the toast grates it into pure perfume.", "Pile the tomatoes on at the last moment, drizzle a little more oil.", "Top with the rest of the basil and flaky salt. Eat standing up within 5 minutes. That's the authentic posture."]
                },
                "IT-8": {
                    t: "60 min",
                    s: "Serves 3",
                    ing: ["4 floury potatoes (about 800g) — bake them, don't boil", "1 cup flour + extra for dusting", "1 egg yolk", "¾ tsp salt", "4 tbsp butter + 10 sage leaves + parmesan"],
                    steps: ["Bake the potatoes at 200°C for 1 hour. Baking keeps them dry, and dry potato is the secret to light gnocchi.", "Scoop the flesh while hot, mash it fine, and let the steam escape for 5 min.", "Add salt, flour and the yolk. Knead for only 30 seconds — the less you touch it, the softer they'll be.", "Roll into thumb-thick ropes, cut into little pillows. Press a fork on top if you want the classic ridges.", "Boil in salted water. When they float, count 30 seconds, then scoop them out.", "Melt the butter with sage until it smells nutty, toss the gnocchi in, shower with parmesan. Pillowy. You'll be proud."]
                },
                "IT-9": {
                    t: "30 min",
                    s: "Makes 12",
                    ing: ["cannoli shells", "ricotta + icing sugar", "chocolate chips + pistachio"],
                    steps: ["Drain the ricotta well, beat with icing sugar.", "Fold in chocolate chips.", "Pipe into the shells from both ends.", "Dip the ends in pistachio; eat soon so they stay crisp."]
                },
                "MX-0": {
                    t: "25 min",
                    s: "Serves 3",
                    ing: ["9 small corn tortillas (thin ones? double up — take 18)", "400g beef mince or chicken thigh, chopped small", "1 onion: half chopped for cooking, half minced raw for topping", "2 cloves garlic + 1 tsp cumin + 1 tsp smoked paprika + ½ tsp chilli or chipotle", "a big handful of fresh coriander, chopped", "2 limes, cut in wedges", "salsa or hot sauce", "salt"],
                    steps: ["Fry the cooking-half of the onion in a little oil for 3 min, then add garlic and spices for 30 seconds — until your kitchen smells like a taquería.", "Add the meat, break it up, and cook on HIGH until the juices evaporate and the edges start to catch and crisp, 8–10 min. Salt at the end. Crispy bits > grey mince.", "Warm each tortilla 30 seconds per side in a dry hot pan until soft and puffed in spots. Stack under a clean towel to keep warm.", "Taco math: meat first, then raw onion + coriander, then salsa. No cheese, no lettuce — this is the street style, and it's better.", "Squeeze lime over EVERYTHING. The lime is not decoration; it's load-bearing.", "Serve 3 per person and put the pan in the middle for refills — someone will want a fourth."]
                },
                "MX-1": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["large flour tortilla", "rice + beans", "meat or veg", "cheese, salsa, guac"],
                    steps: ["Warm the tortilla so it folds.", "Layer rice, beans, meat and cheese down the middle.", "Add salsa and guac.", "Fold in the sides and roll tight; sear seam-down."]
                },
                "MX-3": {
                    t: "10 min",
                    s: "Serves 4",
                    ing: ["3 ripe avocados", "½ onion + 1 tomato, diced", "lime + coriander", "chilli + salt"],
                    steps: ["Mash the avocado, leaving some chunks.", "Stir in onion, tomato and coriander.", "Add lime juice and chopped chilli.", "Salt to taste; eat with chips immediately."]
                },
                "MX-4": {
                    t: "35 min",
                    s: "Serves 3",
                    ing: ["tortillas", "cooked chicken", "red enchilada sauce", "cheese"],
                    steps: ["Dip tortillas in warm sauce.", "Fill with chicken, roll up, place seam-down in a dish.", "Pour over more sauce and cheese.", "Bake at 190C ~20 min until bubbling."]
                },
                "MX-5": {
                    t: "25 min",
                    s: "Makes 12",
                    ing: ["dough: water, butter, flour, egg", "oil for frying", "cinnamon sugar"],
                    steps: ["Make a thick dough: boil water and butter, beat in flour, then egg.", "Pipe straight into hot oil through a star tip.", "Fry until golden and crisp.", "Roll in cinnamon sugar; dip in chocolate."]
                },
                "MX-6": {
                    t: "15 min",
                    s: "Serves 3",
                    ing: ["tortilla chips", "grated cheese", "jalapeños + beans", "salsa, sour cream, guac"],
                    steps: ["Spread chips on a tray.", "Scatter cheese, beans and jalapeños.", "Bake or grill until the cheese melts.", "Top with salsa, sour cream and guac."]
                },
                "MX-7": {
                    t: "90 min",
                    s: "Makes 12",
                    ing: ["masa harina + broth + lard", "corn husks, soaked", "filling: pork in red sauce"],
                    steps: ["Beat masa with lard and broth into a spreadable dough.", "Spread onto a husk, add filling, fold into a parcel.", "Stand upright in a steamer.", "Steam ~1 hr until the masa pulls away cleanly."]
                },
                "MX-8": {
                    t: "15 min",
                    s: "Serves 4",
                    ing: ["corn on the cob", "mayo + crema", "cotija cheese", "chilli powder + lime"],
                    steps: ["Grill the corn until charred.", "Slather with mayo and crema.", "Roll in crumbled cotija.", "Dust with chilli and squeeze over lime."]
                },
                "MX-9": {
                    t: "70 min",
                    s: "Serves 8",
                    ing: ["1 cup sugar (for caramel)", "4 eggs", "1 can condensed + 1 can evaporated milk", "vanilla"],
                    steps: ["Melt sugar to a caramel and pour into the mould.", "Blend eggs, both milks and vanilla.", "Pour over the caramel; bake in a water bath at 160C ~50 min.", "Chill, then flip out."]
                },
                "BR-0": {
                    t: "2 hrs",
                    s: "Serves 6",
                    ing: ["2 cups black beans, soaked", "pork (sausage, ribs, bacon)", "onion + garlic + bay", "orange to serve"],
                    steps: ["Cook the beans until soft.", "Brown the meats, then add onion, garlic and bay.", "Combine with the beans; simmer 1 hr until thick.", "Serve with rice, greens and orange slices."]
                },
                "BR-1": {
                    t: "30 min",
                    s: "Makes 16",
                    ing: ["2 cups tapioca flour", "1 cup milk + ⅓ cup oil", "2 eggs", "1.5 cups grated cheese"],
                    steps: ["Boil the milk and oil, then stir into the tapioca flour.", "Cool slightly, beat in eggs and cheese into a sticky dough.", "Roll into balls.", "Bake at 190C ~20 min until puffed and golden."]
                },
                "BR-2": {
                    t: "20 min",
                    s: "Makes 20",
                    ing: ["1 can condensed milk", "2 tbsp cocoa", "1 tbsp butter", "chocolate sprinkles"],
                    steps: ["Cook condensed milk, cocoa and butter on low, stirring.", "Cook until it pulls away from the pan.", "Cool, then roll into balls with buttered hands.", "Coat in sprinkles."]
                },
                "BR-3": {
                    t: "45 min",
                    s: "Makes 12",
                    ing: ["shredded chicken", "dough cooked in chicken broth", "cream cheese", "breadcrumbs"],
                    steps: ["Make a stiff dough by cooking flour into hot broth.", "Wrap chicken and cheese in dough; shape like a teardrop.", "Coat in egg, then breadcrumbs.", "Deep-fry until deep golden."]
                },
                "BR-4": {
                    t: "30 min",
                    s: "Serves 3",
                    ing: ["white fish or prawns", "coconut milk", "tomato, onion, pepper, garlic", "lime + coriander + palm oil"],
                    steps: ["Layer onion, tomato and pepper in a pot.", "Lay the fish on top; season with lime and garlic.", "Pour over coconut milk and a little palm oil.", "Simmer gently 20 min; finish with coriander."]
                },
                "BR-5": {
                    t: "10 min",
                    s: "Serves 1",
                    ing: ["frozen acai pulp", "½ banana + splash juice", "granola", "fruit + honey"],
                    steps: ["Blend acai with banana and a little juice until thick.", "Pour into a bowl.", "Top with granola and sliced fruit.", "Drizzle with honey."]
                },
                "BR-6": {
                    t: "25 min",
                    s: "Serves 4",
                    ing: ["1 picanha (rump cap)", "coarse salt", "garlic (optional)"],
                    steps: ["Score the fat cap and salt generously.", "Sear fat-side down first to render.", "Grill to a deep crust, medium-rare inside.", "Rest, then slice against the grain."]
                },
                "BR-7": {
                    t: "30 min",
                    s: "Makes 8",
                    ing: ["thin pastel dough sheets", "filling: cheese or minced beef", "oil for frying"],
                    steps: ["Spoon filling onto a dough rectangle.", "Fold over and seal the edges with a fork.", "Deep-fry until blistered and crisp.", "Drain and eat hot."]
                },
                "BR-8": {
                    t: "30 min",
                    s: "Serves 4",
                    ing: ["beef skewers (sirloin, sausage)", "coarse salt", "chimichurri (optional)"],
                    steps: ["Salt the meat and thread onto skewers.", "Grill over high heat, turning, for a charred crust.", "Slice off the cooked outer layer; return to the heat.", "Serve with chimichurri."]
                },
                "BR-9": {
                    t: "50 min",
                    s: "Serves 8",
                    ing: ["10 egg yolks", "1 cup sugar", "1 cup grated coconut", "2 tbsp butter"],
                    steps: ["Whisk yolks, sugar, coconut and melted butter.", "Pour into a buttered, sugared mould.", "Bake in a water bath at 170C ~40 min until set and golden.", "Cool, then turn out."]
                },
                "TH-1": {
                    t: "25 min",
                    s: "Serves 3",
                    ing: ["2 tbsp green curry paste", "1 can coconut milk", "chicken + aubergine", "fish sauce, sugar, basil"],
                    steps: ["Fry the curry paste in a little thick coconut cream.", "Add chicken, then the rest of the coconut milk.", "Add aubergine, fish sauce and sugar; simmer until tender.", "Finish with Thai basil; serve with rice."]
                },
                "TH-2": {
                    t: "25 min",
                    s: "Serves 3",
                    ing: ["stock", "lemongrass, galangal, lime leaves", "prawns + mushrooms", "chilli, lime, fish sauce"],
                    steps: ["Simmer stock with lemongrass, galangal and lime leaves.", "Add mushrooms and prawns; cook until pink.", "Season with fish sauce, lime and chilli.", "It should be hot, sour and aromatic."]
                },
                "TH-3": {
                    t: "30 min",
                    s: "Serves 2",
                    ing: ["1 cup glutinous rice, soaked", "1 cup coconut milk + sugar + salt", "1 ripe mango"],
                    steps: ["Steam the soaked sticky rice ~20 min.", "Warm coconut milk with sugar and a pinch of salt.", "Stir most of it into the hot rice; rest 15 min.", "Serve with sliced mango and the rest of the sauce."]
                },
                "TH-4": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["green papaya, shredded", "tomato + green beans + peanuts", "garlic + chilli", "lime, fish sauce, palm sugar"],
                    steps: ["Pound garlic and chilli in a mortar.", "Add lime, fish sauce and palm sugar.", "Bruise in tomato, beans and papaya.", "Toss with peanuts; serve cold."]
                },
                "TH-5": {
                    t: "75 min",
                    s: "Serves 4",
                    ing: ["2 tbsp massaman paste", "1 can coconut milk", "beef + potato + onion", "peanuts, tamarind, fish sauce"],
                    steps: ["Fry the paste in coconut cream.", "Add beef and brown, then the coconut milk.", "Add potato, onion, peanuts, tamarind and fish sauce.", "Simmer LOW ~1 hr until the beef is tender."]
                },
                "TH-6": {
                    t: "35 min",
                    s: "Makes 12",
                    ing: ["spring roll wrappers", "cabbage, carrot, glass noodles", "garlic + soy", "oil for frying"],
                    steps: ["Stir-fry the shredded veg with garlic and soy; cool.", "Roll tightly in wrappers, seal with a flour paste.", "Deep-fry until golden and crisp.", "Serve with sweet chilli sauce."]
                },
                "TH-7": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["3 cups cold cooked rice", "1 egg + prawns or chicken", "garlic + onion", "soy + fish sauce, lime"],
                    steps: ["Scramble the egg in a hot wok, add protein.", "Add garlic and onion, then the cold rice.", "Season with soy and fish sauce, tossing on high heat.", "Finish with spring onion and lime."]
                },
                "TH-8": {
                    t: "25 min",
                    s: "Serves 3",
                    ing: ["chicken strips", "coconut milk + turmeric + curry powder", "peanut sauce"],
                    steps: ["Marinate chicken in coconut milk, turmeric and curry powder.", "Thread onto skewers.", "Grill until charred and cooked.", "Serve with warm peanut sauce."]
                },
                "TH-9": {
                    t: "10 min",
                    s: "Serves 2",
                    ing: ["strong brewed Thai tea", "sugar", "condensed + evaporated milk", "ice"],
                    steps: ["Brew the tea strong and sweeten while hot.", "Cool it down.", "Fill a glass with ice and pour over the tea.", "Top with the milks and stir to swirl."]
                },
                "DE-0": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["bratwurst sausages", "bread roll", "mustard", "sauerkraut"],
                    steps: ["Simmer or grill the bratwurst until browned.", "Warm the roll.", "Tuck the sausage in.", "Top with mustard and sauerkraut."]
                },
                "DE-1": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["pork or veal cutlets", "flour, egg, breadcrumbs", "oil + butter", "lemon"],
                    steps: ["Pound the cutlets thin.", "Coat: flour, egg, then breadcrumbs.", "Shallow-fry in lots of butter, spooning over, until golden.", "Serve with a lemon wedge."]
                },
                "DE-2": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["bratwurst", "ketchup + tomato paste", "curry powder + paprika", "sugar"],
                    steps: ["Fry the sausage, then slice it.", "Simmer ketchup, paste, sugar and spices into a sauce.", "Pour the curry sauce over the sliced sausage.", "Dust with extra curry powder; serve with fries."]
                },
                "DE-3": {
                    t: "90 min",
                    s: "Makes 8",
                    ing: ["bread dough", "baking-soda bath", "coarse salt"],
                    steps: ["Shape the dough into pretzel knots.", "Dip briefly in a hot baking-soda bath (this gives the brown skin).", "Sprinkle with coarse salt.", "Bake at 220C until deep brown."]
                },
                "DE-4": {
                    t: "3 hrs",
                    s: "Serves 4",
                    ing: ["beef roast", "vinegar + wine marinade", "onion, carrot, spices", "gingersnaps to thicken"],
                    steps: ["Marinate the beef in vinegar, wine and spices 2-3 days.", "Brown, then braise in the marinade ~3 hrs.", "Strain the liquid; thicken with crushed gingersnaps.", "Slice the beef and serve in the sauce."]
                },
                "DE-5": {
                    t: "90 min",
                    s: "Serves 8",
                    ing: ["chocolate sponge", "cherries + kirsch", "whipped cream", "chocolate shavings"],
                    steps: ["Bake and slice the chocolate sponge into layers.", "Soak with cherry syrup (and kirsch).", "Layer with cream and cherries.", "Cover in cream and chocolate shavings."]
                },
                "DE-6": {
                    t: "30 min",
                    s: "Serves 3",
                    ing: ["flour + eggs + milk batter", "grated cheese", "fried onions"],
                    steps: ["Make a thick batter; scrape into boiling water to form little dumplings.", "Drain when they float.", "Layer the spätzle with cheese until melted.", "Pile on crispy fried onions."]
                },
                "DE-7": {
                    t: "2 hrs",
                    s: "Serves 4",
                    ing: ["thin beef slices", "mustard, bacon, pickle, onion", "stock + red wine"],
                    steps: ["Spread beef with mustard; lay on bacon, pickle and onion.", "Roll up and secure with a toothpick.", "Brown, then braise in stock and wine ~1.5 hrs.", "Reduce the liquid into a gravy."]
                },
                "DE-8": {
                    t: "10 min",
                    s: "Serves 2",
                    ing: ["frankfurter sausages", "bread roll", "mustard"],
                    steps: ["Gently heat the frankfurters in hot (not boiling) water.", "Warm the roll.", "Add the sausage.", "Serve with mustard."]
                },
                "DE-9": {
                    t: "50 min",
                    s: "Serves 6",
                    ing: ["thin strudel/filo pastry", "apples + sugar + cinnamon", "raisins + breadcrumbs", "butter"],
                    steps: ["Toss apples with sugar, cinnamon and raisins.", "Brush pastry with butter, scatter breadcrumbs, add apples.", "Roll up tightly.", "Brush with butter and bake at 190C until golden."]
                },
                "CN-0": {
                    t: "40 min",
                    s: "Makes 24",
                    ing: ["dumpling wrappers", "pork mince + cabbage", "ginger, garlic, soy, sesame oil", "spring onion"],
                    steps: ["Mix mince with chopped cabbage and seasonings.", "Spoon into wrappers, wet the edge and pleat shut.", "Boil until they float, or pan-fry then steam.", "Dip in black vinegar and soy."]
                },
                "CN-2": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["pork, cubed + cornstarch", "pepper + pineapple + onion", "ketchup + vinegar + sugar"],
                    steps: ["Coat the pork in cornstarch and fry until crisp.", "Stir-fry pepper, onion and pineapple.", "Add a sauce of ketchup, vinegar and sugar; bubble.", "Toss in the crispy pork to glaze."]
                },
                "CN-3": {
                    t: "35 min",
                    s: "Makes 12",
                    ing: ["spring roll wrappers", "cabbage + carrot + beansprouts", "garlic + soy", "oil for frying"],
                    steps: ["Stir-fry the veg with garlic and soy; cool.", "Roll tightly, seal with flour paste.", "Deep-fry until golden and crisp.", "Serve with sweet chilli or soy."]
                },
                "CN-4": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["egg noodles", "chicken or veg", "cabbage, carrot, spring onion", "soy + oyster sauce + sesame oil"],
                    steps: ["Boil the noodles and drain.", "Stir-fry protein, then the veg, on high heat.", "Add noodles and the sauces.", "Toss until coated and a little charred."]
                },
                "CN-5": {
                    t: "15 min",
                    s: "Serves 2",
                    ing: ["3 cups COLD day-old cooked rice (fresh rice = fried porridge)", "2 eggs, beaten", "100g ham, chicken or shrimp, diced (optional)", "½ cup frozen peas + diced carrot", "2 spring onions, chopped", "1½ tbsp soy sauce + 1 tsp sesame oil", "2 cloves garlic, chopped", "2 tbsp neutral oil"],
                    steps: ["Break the cold rice apart with wet hands until there are zero clumps. This 60 seconds decides everything.", "Heat 1 tbsp oil in a wok on high; scramble the eggs until just set and still glossy. Remove.", "Rest of the oil in: garlic for 10 seconds, then the meat and veg for 1–2 min.", "Rice in. Spread it flat and LET IT SIT 30 seconds to catch heat, then toss. Repeat — press, wait, toss. That's how you get toasty wok flavour without a restaurant burner.", "Soy sauce around the edge of the wok so it sizzles and toasts, then the sesame oil, then the egg back in — break it up as you toss.", "Spring onions for the last 15 seconds, done. Every grain separate, a little chewy, faintly smoky. Day-old rice forgives everything else."]
                },
                "CN-6": {
                    t: "varies",
                    s: "Serves 4",
                    ing: ["duck", "honey glaze", "thin pancakes", "cucumber, spring onion, hoisin"],
                    steps: ["Air-dry the glazed duck for crisp skin (overnight is best).", "Roast until lacquered and crisp.", "Carve the skin and meat.", "Wrap in pancakes with hoisin, cucumber and spring onion."]
                },
                "CN-7": {
                    t: "20 min",
                    s: "Serves 2",
                    ing: ["1 box soft tofu, cubed", "pork mince", "doubanjiang + chilli + Sichuan pepper", "garlic, soy, cornstarch"],
                    steps: ["Fry the mince, then the doubanjiang and aromatics until red and fragrant.", "Add stock and the tofu; simmer gently.", "Thicken with a cornstarch slurry.", "Top with Sichuan pepper and spring onion."]
                },
                "CN-8": {
                    t: "varies",
                    s: "Makes 8",
                    ing: ["bao dough (flour, yeast, sugar)", "filling: pork belly or veg", "hoisin, cucumber, spring onion"],
                    steps: ["Make and prove the soft dough.", "Roll discs and fold over a square of paper.", "Steam 10 min until pillowy.", "Open and fill with braised pork, hoisin and cucumber."]
                },
                "CN-9": {
                    t: "30 min",
                    s: "Makes 10",
                    ing: ["tart pastry cases", "2 eggs + ½ cup sugar", "¾ cup hot water + evaporated milk", "vanilla"],
                    steps: ["Dissolve sugar in hot water, cool; whisk in eggs and milk.", "Strain the custard for silkiness.", "Pour into the pastry cases.", "Bake at 200C ~15 min until just set with a wobble."]
                },
                "VN-0": {
                    t: "2 hr",
                    s: "Serves 2",
                    ing: ["500g beef bones (marrow + knuckle)", "300g beef brisket", "300g flat rice noodles (banh pho)", "1 large onion, halved", "5cm ginger, halved lengthways", "Spices: 2 star anise, 1 cinnamon stick, 3 cloves, 1 tsp coriander seeds", "1 tbsp fish sauce + 1 tsp sugar (rock sugar is ideal)", "To serve: thinly sliced raw sirloin, bean sprouts, Thai basil, lime, chilli, spring onion"],
                    steps: ["Parboil the bones for 10 min in boiling water, then tip the water away and rinse both the bones and the pot. Skipping this is exactly why homemade pho turns out grey and cloudy.", "Char the onion and ginger directly over a gas flame or under a hot grill until blackened in patches. That smoky sweetness IS the flavour of pho — it is not an optional garnish step.", "Toast the spices dry in a pan for 1 min until fragrant, then tie them in a cloth or tea strainer so you are not fishing star anise out of someone's bowl later.", "Cover the bones and brisket with 2.5L cold water, add the charred onion, ginger and spice bundle, and bring to a bare simmer — never a rolling boil, which emulsifies the fat and clouds everything.", "Simmer uncovered for 2 hrs, skimming the grey foam off the surface every 20 min for the first hour. Clear broth is a skimming job, nothing more mysterious than that.", "Pull the brisket out at about 1½ hrs and slice it thin against the grain. Season the broth at the very END with fish sauce and sugar, because it concentrates as it reduces.", "Soak the rice noodles in hot water until just floppy, then dunk them in boiling water for 20 seconds and drain hard.", "Noodles into the bowl, raw sirloin fanned over the top, then pour the broth over boiling hot — it cooks the beef in the bowl in about 15 seconds.", "Herbs, sprouts, lime and chilli go on at the table by the person eating. Pho is assembled twice: once by the cook, once by whoever gets the bowl."]
                },
                "VN-1": {
                    t: "20 min",
                    s: "Makes 2",
                    ing: ["2 short baguettes (light and thin-crusted, not heavy sourdough)", "150g roast pork or pork belly, sliced", "2 tbsp pork or chicken liver pâté", "3 tbsp mayonnaise", "Pickle: 1 carrot + ½ daikon, cut into matchsticks", "Pickle liquid: 3 tbsp rice vinegar, 2 tbsp sugar, ½ tsp salt, 4 tbsp warm water", "½ cucumber in long batons, coriander sprigs, sliced chilli", "a few dashes of Maggi seasoning or light soy"],
                    steps: ["Make the pickle first: dissolve the sugar and salt in the warm water and vinegar, add the carrot and daikon, and leave at least 15 min. It should taste sharp AND sweet — this is the entire balance of the sandwich.", "Warm the baguettes in a hot oven for 4–5 min until the crust crackles, then let them cool for 2 min. Warm-but-not-hot is the goal; trapped steam turns the crumb chewy.", "Split lengthways leaving a hinge, and pull out a little of the soft interior so the filling has somewhere to sit instead of squeezing out.", "Pâté on one side, mayo on the other, edge to edge. Do not go light here — this is not a health sandwich.", "Layer in the pork, then a generous pile of pickle squeezed free of liquid, then cucumber, coriander and chilli.", "Dash the Maggi seasoning straight onto the bread before closing, press the whole thing firmly shut, and eat immediately."]
                },
                "VN-2": {
                    t: "25 min",
                    s: "Makes 8",
                    ing: ["8 round rice paper wrappers (22cm)", "100g rice vermicelli, cooked and cooled", "8 cooked prawns, halved lengthways", "150g boiled pork belly, thinly sliced (optional)", "lettuce leaves, mint, coriander, garlic chives", "Dip: 3 tbsp hoisin + 1 tbsp peanut butter + 2 tbsp warm water", "crushed peanuts and sliced chilli to finish"],
                    steps: ["Have everything cooked, cooled and lined up in front of you before the first wrapper touches water. Rice paper waits for nobody.", "Dip a wrapper in warm — not hot — water for about 2 seconds only. It should still feel slightly stiff when you lay it down, because it keeps softening on the board. Over-soaked paper tears every single time.", "Place lettuce and a small nest of vermicelli on the third of the wrapper nearest you, with herbs on top.", "Fold the near edge up over the filling, fold in both sides, then roll once, tightly.", "Before the final roll, lay two prawn halves cut-side down on the bare paper, then finish rolling. They show through pink from the outside, which is the whole point of the dish.", "Whisk the hoisin, peanut butter and warm water into a smooth dip and scatter the peanuts over. Serve within the hour — refrigerated rolls go hard and cloudy."]
                },
                "VN-3": {
                    t: "1 hr 30 min",
                    s: "Serves 4",
                    ing: ["1 pork hock or 500g pork bones", "300g beef shank", "2 stalks lemongrass, bruised", "1 tbsp shrimp paste (mam ruoc) stirred into ½ cup hot water", "Chilli oil: 2 tbsp oil, 1 tbsp chilli flakes, 1 tbsp minced lemongrass, 2 cloves garlic", "1 tbsp fish sauce + 1 tsp sugar", "400g thick round rice noodles", "To serve: shredded cabbage or banana blossom, bean sprouts, lime, sliced onion, coriander"],
                    steps: ["Parboil the bones and hock for 10 min, discard that water and rinse everything. Same rule as pho — deal with the grey scum now or drink cloudy soup later.", "Simmer the bones, shank and bruised lemongrass in 2.5L water for about 1 hr 15 min, skimming as you go. Pull the shank once tender and slice it thin.", "Let the shrimp paste settle in the hot water, then pour only the clear liquid into the broth and leave the grit behind. This funk is what makes it bun bo hue instead of just spicy pho — do not skip it, but do not tip the sediment in either.", "Fry the chilli oil ingredients gently for 2 min until the oil runs deep red and smells of lemongrass rather than burnt garlic.", "Stir most of the chilli oil into the broth, season with the fish sauce and sugar, and taste for the balance you want: spicy, deeply savoury, faintly sweet behind it.", "Cook the thick noodles until just tender. They are rounder and chewier than pho noodles and need a couple of minutes longer than you would expect.", "Bowl up noodles, sliced shank and hock meat, ladle the boiling broth over, and spoon the reserved chilli oil on top. The cabbage and herbs go on at the table."]
                },
                "VN-4": {
                    t: "40 min",
                    s: "Serves 2",
                    ing: ["2 pork chops or thin-cut pork shoulder steaks", "Marinade: 2 tbsp fish sauce, 2 tbsp sugar, 1 tbsp soy, 3 cloves garlic grated, 1 tbsp oil, 1 tsp black pepper", "1½ cups broken rice (or jasmine rice)", "Nuoc cham: 3 tbsp fish sauce, 3 tbsp sugar, 5 tbsp warm water, 2 tbsp lime juice, 1 clove garlic, 1 chilli", "1 fried egg per person", "sliced cucumber and tomato", "2 spring onions + 2 tbsp hot oil"],
                    steps: ["Marinate the pork for at least 30 min, overnight if you can. The sugar is what gives you those lacquered dark edges, so resist the urge to cut it back.", "Rinse the broken rice twice and cook it with slightly less water than usual — broken grains drink faster, and you want fluffy rather than sticky.", "Grill or pan-fry the pork over high heat for 3–4 min a side and let it char in patches. Chase colour here, not gentle even cooking; the marinade is meant to catch.", "Rest the pork for 5 min before slicing. This is the step that decides whether the juices stay in the meat or run out onto the board.", "Stir the nuoc cham until the sugar has fully dissolved, then taste: sweet, salty and sour in roughly equal measure, and thin enough to pour by the spoonful.", "Pour the hot oil over the sliced spring onion to make a quick scallion oil, and spoon it over the rice.", "Plate the rice, pork, a fried egg with a crisp lacy edge, cucumber and tomato, then pour nuoc cham over everything. The dish is designed to be eaten wet."]
                },
                "VN-5": {
                    t: "35 min",
                    s: "Makes 4",
                    ing: ["Batter: 1 cup rice flour, 2 tbsp cornstarch, 1 tsp turmeric, ½ tsp salt", "1 cup coconut milk + 1 cup cold water", "1 spring onion, sliced", "150g pork belly, thinly sliced", "12 prawns, peeled", "2 big handfuls bean sprouts", "oil for frying", "To serve: lettuce, mint, perilla and nuoc cham"],
                    steps: ["Whisk the batter and let it rest 30 min. It should be thinner than pancake batter — closer to single cream. Thin batter is the only route to a lacy, crisp crepe.", "Get a non-stick or well-seasoned pan properly hot with a good slick of oil. An under-heated pan gives you a pale, floppy banh xeo and there is no recovering from it.", "Fry a few slices of pork and some prawns in the pan first, until just cooked and lightly browned.", "Stir the batter again (turmeric settles fast), pour in a thin ladleful, and immediately swirl the pan to spread it as wide as it will go.", "Add a handful of bean sprouts to one half, cover the pan, and cook 2 min so the sprouts steam while the base crisps underneath.", "Uncover and keep frying, drizzling a little more oil around the rim, until the edges are deep gold and lift away audibly crisp — another 2–3 min. Patience at this stage is the whole difference between a crepe and a great one.", "Fold it in half like an omelette and serve at once. Eat it by tearing off pieces, wrapping them in lettuce with herbs, and dunking in nuoc cham."]
                },
                "VN-6": {
                    t: "40 min",
                    s: "Serves 2",
                    ing: ["300g pork mince (20% fat — lean mince makes bouncy patties)", "150g pork belly, thinly sliced", "Marinade: 2 tbsp fish sauce, 1 tbsp sugar, 1 tbsp honey, 3 cloves garlic, 2 shallots minced, 1 tsp pepper", "Dipping broth: 4 tbsp fish sauce, 4 tbsp sugar, 4 tbsp rice vinegar, 1½ cups warm water", "½ green papaya or 1 carrot, thinly sliced", "200g rice vermicelli, cooked and cooled", "lettuce, mint, coriander, perilla, sliced garlic and chilli"],
                    steps: ["Mix the marinade and split it between the mince and the belly slices. Leave both for 30 min minimum.", "Shape the mince into loose flat patties about 1cm thick, handling them as little as possible. Compressed patties turn springy and rubbery.", "Grill the patties and belly over charcoal if you possibly can, otherwise under a very hot grill, 3–4 min a side until properly charred at the edges. The smoke is half of this dish.", "Make the dipping broth warm rather than hot: dissolve the sugar in the warm water first, then add the fish sauce and vinegar. Taste it — it should be mild enough to drink, because you effectively will.", "Drop the sliced papaya or carrot into the broth to pickle while the pork finishes grilling.", "Slide the hot grilled pork straight into the bowl of broth and let it sit and soak. This is the step people leave out, and it is the entire idea of bun cha.", "Serve the bowl of pork-in-broth alongside the cold noodles and a mountain of herbs. Dunk noodles and herbs into the broth bowl a chopstickful at a time."]
                },
                "VN-7": {
                    t: "45 min",
                    s: "Makes 12",
                    ing: ["12 rice paper or spring roll wrappers", "250g pork mince", "100g prawns, chopped", "50g glass noodles, soaked and cut short", "1 small carrot, grated and squeezed dry", "1 wood ear mushroom, soaked and chopped", "1 shallot minced + 1 egg + 1 tbsp fish sauce + pepper", "oil for deep frying"],
                    steps: ["Squeeze the grated carrot properly dry, then mix everything for the filling in one bowl. Wet filling steams the wrapper from the inside and splits it open in the oil.", "Roll them tightly and thinly. Fat rolls burn on the outside before the pork in the middle is cooked. Seal the last edge with a dab of water.", "Rest the rolls seam-side down on a rack for 10 min so the wrappers dry slightly and firm up.", "Fry twice. First at 150°C for 6–7 min until pale and cooked through, then lift them out and rest 5 min.", "Second fry at 180°C for about 2 min until blistered and deep gold. This is what makes them shatter when bitten instead of bending.", "Drain them standing upright on a rack, never flat on paper towel where the underside goes soft. Serve with nuoc cham and lettuce for wrapping."]
                },
                "VN-8": {
                    t: "10 min",
                    s: "Serves 1",
                    ing: ["2–3 tbsp dark-roast coarsely ground coffee (Vietnamese robusta if you can get it)", "2–3 tbsp sweetened condensed milk", "1 phin filter (or a very small French press)", "boiling water, just off the boil", "a tall glass of ice"],
                    steps: ["Spoon the condensed milk into the glass first, before any coffee goes near it. It is the base of the drink, not a topping.", "Add the coffee to the phin, level it flat, and rest the press filter on top without screwing it down hard.", "Bloom it first: pour in just 2 tbsp of hot water and wait 30 seconds for the grounds to swell. Skip this and the brew runs straight through, thin and sour.", "Top up the phin, cap it, and let it drip. It should take 4–5 minutes — if it pours through in one go, the grind is too coarse or the filter is not seated properly.", "Stir the hot coffee into the condensed milk until completely combined and glossy, with no pale streaks left.", "Fill a separate tall glass with ice and pour the sweet coffee over it. Pouring hot coffee onto ice in the mixing glass just melts it and waters the drink down."]
                },
                "VN-9": {
                    t: "10 min",
                    s: "Serves 1",
                    ing: ["1 shot of strong dark-roast coffee (a phin brew or espresso both work)", "1 very fresh egg yolk", "2 tbsp sweetened condensed milk", "¼ tsp vanilla and a tiny pinch of salt (optional)", "a small heatproof glass or mug", "a bowl of hot water to stand the glass in"],
                    steps: ["Brew the coffee first and pour it into the serving glass, then stand that glass in a bowl of hot water. Egg coffee goes cold fast and the water bath is how cafés in Hanoi keep it hot while you drink.", "Separate the yolk cleanly. Any white that sneaks into the bowl and the foam will never thicken properly — it goes thin and bubbly instead of glossy.", "Whisk the yolk with the condensed milk (and vanilla, if using) hard for 3–4 minutes. An electric whisk gets there in about 90 seconds and saves your arm entirely.", "Keep going until it roughly triples in volume and turns pale, thick and mousse-like — lift the whisk and it should hold a soft peak. Under-whisked foam just sinks into the coffee and you have sweet coffee, not egg coffee.", "Spoon the foam gently over the hot coffee so it sits on top as a distinct layer. Do not pour and stir — the two layers are the entire experience.", "Serve immediately, still sitting in its warm water bath, with a spoon. Eat the foam off the top first, then stir what is left through the coffee."]
                }
            };
            function openRecipe(d) {
                const r = RECIPES[d.id];
                if (!r)
                    return;
                track('recipe_open', {
                    dish: d.name || d.id
                });
                const mk = mealKit();
                recipeSheet.innerHTML = `
      <button class="x-btn" type="button" style="position:absolute;right:14px;top:14px;z-index:3;" id="recipeClose">✕</button>
      <div class="rcp-hero"><img src="${d.img}" alt="${d.name}" onerror="this.style.display='none'"></div>
      <h3>${d.name}</h3>
      <div class="rcp-meta"><span>⏱️ ${r.t}</span><span>🍽️ ${r.s}</span></div>
      <p class="rcp-note">The food never came… so here's how to make it 🍳</p>
      <div class="rcp-sec"><b>🛒 Grab</b><p class="rcp-hint">Tap ingredients to tick them off ✔️</p><ul>${r.ing.map(i => `<li>${i}</li>`).join("")}</ul></div>
      <div class="rcp-sec"><b>👩‍🍳 Make it</b><ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>
      <a class="rcp-deliver" href="${mk ? mk.url : "#menu"}" ${mk ? 'target="_blank" rel="noopener"' : 'id="rcpOrder"'}>${mk ? `🚚 Too hungry to cook? Get it delivered — ${mk.deal} →` : "🍽️ Too hungry to cook? Order it instead →"}</a>`;
                recipeSheet.querySelector("#recipeClose").onclick = closeRecipe;
                recipeSheet.querySelectorAll(".rcp-sec ul li").forEach(li => li.onclick = () => li.classList.toggle("done"));
                const ord = recipeSheet.querySelector("#rcpOrder");
                if (ord)
                    ord.onclick = () => {
                        closeRecipe();
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                    ;
                openModal(recipeModal);
            }
            function closeRecipe() {
                recipeModal.classList.remove("show");
                const behind = trModal.classList.contains("show") || coModal.classList.contains("show") || drawer.classList.contains("show") || custModal.classList.contains("show") || courierModal.classList.contains("show");
                if (!behind)
                    overlay.classList.remove("show");
            }
            // Localized rider names + delivery addresses (so it feels native per country, not Indian everywhere)
            const RIDER_NAMES = {
                KR: ["Min-jun", "Seo-yeon", "Ji-ho", "Ha-eun"],
                US: ["Jacob", "Ashley", "Marcus", "Emily"],
                JP: ["Haruto", "Yui", "Sota", "Aoi"],
                IN: ["Rahul", "Priya", "Amit", "Sneha"],
                FR: ["Lucas", "Camille", "Hugo", "Léa"],
                IT: ["Marco", "Giulia", "Luca", "Sofia"],
                MX: ["Mateo", "Sofía", "Diego", "Valeria"],
                BR: ["João", "Ana", "Pedro", "Beatriz"],
                TH: ["Somchai", "Anong", "Niran", "Kanya"],
                DE: ["Lukas", "Hanna", "Jonas", "Lena"]
            };
            const ADDR = {
                KR: "404 Cravings-ro, Gangnam, Seoul",
                US: "404 Hungry St, Brooklyn, NY",
                JP: "4-0-4 Dōgenzaka, Shibuya, Tokyo",
                IN: "404 Bhukkad Marg, Bandra, Mumbai",
                FR: "404 Rue de la Faim, Paris",
                IT: "Via della Fame 404, Roma",
                MX: "Calle Antojo 404, CDMX",
                BR: "Rua da Fome 404, São Paulo",
                TH: "404 Soi Aroi, Watthana, Bangkok",
                DE: "Hungerstraße 404, Berlin"
            };
            function pickRider(code, seed) {
                const a = RIDER_NAMES[code] || RIDER_NAMES.US;
                return a[_hash(String(seed || code)) % a.length];
            }

            // ---------- Region picker (nav-bar flag dropdown) ----------
            const flagBtn = document.getElementById("navFlag");
            const flagMenu = document.getElementById("flagMenu");
            COUNTRIES.forEach(c => {
                const b = document.createElement("button");
                b.type = "button";
                b.className = "flag-opt";
                b.setAttribute("role", "option");
                b.dataset.code = c.code;
                b.innerHTML = `<span class="fo-emoji">${c.flag}</span><span class="fo-name">${c.name}</span><span class="fo-cur">${c.cur}</span>`;
                b.addEventListener("click", () => {
                    setCountry(c.code, true);
                    closeFlagMenu();
                }
                );
                flagMenu.appendChild(b);
            }
            );

            // Currency chips — display currency, independent of the chosen cuisine
            const curSec = document.createElement("div");
            curSec.className = "cur-sec";
            curSec.innerHTML = '<div class="cur-lbl">💱 Prices in</div><div class="cur-row"></div>';
            const curRow = curSec.querySelector(".cur-row");
            CURRENCIES.forEach(c => {
                const b = document.createElement("button");
                b.type = "button";
                b.className = "cur-opt";
                b.dataset.cur = c.cur;
                b.setAttribute("aria-pressed", "false");
                b.textContent = c.sym + " " + c.cur;
                b.addEventListener("click", e => {
                    e.stopPropagation();
                    setCurrency(c.cur);
                    closeFlagMenu();
                }
                );
                curRow.appendChild(b);
            }
            );
            flagMenu.appendChild(curSec);
            function setCurrency(cur) {
                curOverride = cur;
                try {
                    localStorage.setItem("fnc_cur", cur);
                } catch (e) {}
                applyDisp();
                renderMenu();
                renderTrending();
                renderDishOfDay();
                renderCart();
                if (coModal && coModal.classList.contains("show"))
                    renderCheckout();
            }

            function openFlagMenu() {
                flagMenu.hidden = false;
                flagBtn.setAttribute("aria-expanded", "true");
            }
            function closeFlagMenu() {
                flagMenu.hidden = true;
                flagBtn.setAttribute("aria-expanded", "false");
            }
            function toggleFlagMenu() {
                flagMenu.hidden ? openFlagMenu() : closeFlagMenu();
            }
            flagBtn.addEventListener("click", e => {
                e.stopPropagation();
                toggleFlagMenu();
            }
            );
            document.addEventListener("click", e => {
                if (!flagMenu.hidden && !flagMenu.contains(e.target))
                    closeFlagMenu();
            }
            );
            document.addEventListener("keydown", e => {
                if (e.key === "Escape")
                    closeFlagMenu();
            }
            );

            function setCountry(code, manual) {
                country = COUNTRIES.find(c => c.code === code) || COUNTRIES[0];
                if (manual) {
                    window._regionLocked = true;
                    try {
                        localStorage.setItem("fnc_region", country.code);
                    } catch (e) {}
                }
                const sig = DISHES[country.code][0];
                document.getElementById("heroGreet").innerHTML = `${country.greet} Craving something? ${country.flag}`;
                document.getElementById("heroImg").src = sig[1];
                document.getElementById("heroImg").alt = sig[0];
                document.getElementById("heroCap").textContent = `${sig[0]} · ${country.name}`;
                document.getElementById("navFlagEmoji").textContent = country.flag;
                applyDisp();
                document.getElementById("menuTitle").innerHTML = `World food hall 🌍`;
                flagMenu.querySelectorAll(".flag-opt").forEach(o => o.setAttribute("aria-selected", o.dataset.code === country.code));
                renderMenu();
                renderTrending();
                renderDishOfDay();
                renderCart();
            }

            // ---------- Filters ----------
            const filtersEl = document.getElementById("filters");
            FILTERS.forEach( ([key,label]) => {
                const b = document.createElement("button");
                b.className = "filter" + (key === "all" ? " active" : "");
                b.type = "button";
                b.innerHTML = label;
                b.addEventListener("click", () => {
                    activeFilter = key;
                    [...filtersEl.children].forEach(x => x.classList.remove("active"));
                    b.classList.add("active");
                    renderMenu();
                }
                );
                filtersEl.appendChild(b);
            }
            );

            // ---------- Search + cuisine category circles ----------
            const searchInput = document.getElementById("dishSearch");
            if (searchInput)
                searchInput.addEventListener("input", () => {
                    searchTerm = searchInput.value.trim().toLowerCase();
                    renderMenu();
                }
                );
            const catCircles = document.getElementById("catCircles");
            if (catCircles) {
                COUNTRIES.forEach(co => {
                    const b = document.createElement("button");
                    b.type = "button";
                    b.className = "cat-circle";
                    b.innerHTML = `<span class="cc-emoji">${co.flag}</span><span class="cc-name">${co.cuisine}</span>`;
                    b.addEventListener("click", () => {
                        searchTerm = "";
                        if (searchInput)
                            searchInput.value = "";
                        activeFilter = "all";
                        [...filtersEl.children].forEach( (x, i) => x.classList.toggle("active", i === 0));
                        renderMenu();
                        const sec = document.getElementById("cuisine-" + co.code);
                        if (sec)
                            sec.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                    }
                    );
                    catCircles.appendChild(b);
                }
                );
            }

            // ---------- Menu: all cuisines on one page ----------
            const menuGrid = document.getElementById("menuGrid");
            function buildCard(d) {
                const groups = TPL[d.tpl];
                const sel = groups.map(g => g[2]);
                const total = () => d.base + groups.reduce( (t, g, gi) => t + g[1][sel[gi]][1], 0);
                const veg = isVeg(d.name);
                const meta = dishMeta(d.id);
                const eta = 18 + (_hash(d.id) % 18);
                const badgeHtml = d.badge ? `<span class="badge ${d.badge}">${BADGE_TXT[d.badge]}</span>` : (meta.rating >= 4.5 ? `<span class="badge best">★ Bestseller</span>` : "");
                const card = document.createElement("article");
                card.className = "card";
                card.innerHTML = `
      <div class="plate" data-emoji="${CAT_EMOJI[d.cat]}">
        <img loading="lazy" src="${d.img}" alt="${d.name}" onerror="this.parentNode.classList.add('noimg');this.remove()">
        <span class="veg ${veg ? '' : 'nonveg'}" title="${veg ? 'Veg' : 'Non-veg'}"></span>
        ${badgeHtml}
        ${RECIPES[d.id] ? '<button class="recipe-btn" type="button" title="See the recipe" aria-label="See the recipe">📖 Recipe</button>' : ''}
      </div>
      <div class="card-body">
        <h3>${d.name}</h3>
        <div class="rating-row"><span class="stars">★ ${meta.rating}</span><small>(${kcount(meta.count)})</small><span class="dot">·</span><small>${eta} min</small></div>
        <p class="desc">${DESCS[d.tpl]}</p>
        <div class="price-row">
          <div class="price-block">
            <span class="amt">${money(total())}</span>
            <span class="amt-was">${wasPrice(total(), meta.off)}</span>
            <span class="off">${meta.off}% OFF</span>
          </div>
          <button class="add" type="button">ADD<i>+</i></button>
        </div>
      </div>`;
                card.querySelector(".add").addEventListener("click", () => openCustomize(d));
                const rcpBtn = card.querySelector(".recipe-btn");
                if (rcpBtn)
                    rcpBtn.addEventListener("click", e => {
                        e.stopPropagation();
                        openRecipe(d);
                    }
                    );
                return card;
            }
            // Real-app dish customization bottom sheet — spice / size / add-ons + quantity
            function openCustomize(d) {
                const groups = TPL[d.tpl];
                const sel = groups.map(g => g[2]);
                const meta = dishMeta(d.id)
                  , veg = isVeg(d.name);
                let qty = 1;
                const line = () => d.base + groups.reduce( (t, g, gi) => t + g[1][sel[gi]][1], 0);
                function render() {
                    custSheet.innerHTML = `
        <button class="x-btn" type="button" style="position:absolute;right:14px;top:14px;z-index:3;" data-x>✕</button>
        <div class="cust-hero">
          <img src="${d.img}" alt="${d.name}" onerror="this.style.display='none'">
          <h3><span class="veg ${veg ? '' : 'nonveg'}" style="position:static;display:inline-grid;vertical-align:middle;margin-right:7px;box-shadow:none;"></span>${d.name}</h3>
          <div class="rating-row" style="justify-content:center;"><span class="stars">★ ${meta.rating}</span><small>(${kcount(meta.count)})</small></div>
          <p class="desc">${DESCS[d.tpl]}</p>
        </div>
        ${groups.map( (g, gi) => `
          <div class="cust-group">
            <div class="cust-glabel">${g[0]}</div>
            ${g[1].map( ([label,delta], oi) => `
              <label class="cust-opt ${sel[gi] === oi ? 'sel' : ''}">
                <span class="cust-radio"></span>
                <span class="cust-otext">${label}</span>
                <span class="cust-odelta">${delta > 0 ? '+ ' + money(delta) : ''}</span>
                <input type="radio" name="g${gi}" ${sel[gi] === oi ? 'checked' : ''} data-g="${gi}" data-o="${oi}" hidden>
              </label>`).join("")}
          </div>`).join("")}
        <div class="cust-foot">
          <div class="cust-qty"><button type="button" data-q="-1" aria-label="Less">−</button><span>${qty}</span><button type="button" data-q="1" aria-label="More">+</button></div>
          <button class="btn btn-primary cust-add" type="button" data-add>Add ${qty} · ${money(line() * qty)}</button>
        </div>`;
                    custSheet.querySelector("[data-x]").onclick = closeCust;
                    custSheet.querySelectorAll("input[type=radio]").forEach(r => r.onchange = () => {
                        sel[+r.dataset.g] = +r.dataset.o;
                        render();
                    }
                    );
                    custSheet.querySelectorAll("[data-q]").forEach(b => b.onclick = () => {
                        qty = Math.max(1, qty + (+b.dataset.q));
                        render();
                    }
                    );
                    custSheet.querySelector("[data-add]").onclick = () => {
                        const opts = groups.map( (g, gi) => g[1][sel[gi]][0]).join(" · ");
                        for (let i = 0; i < qty; i++)
                            addToCart({
                                id: d.id,
                                name: d.name,
                                img: d.img,
                                krw: line(),
                                opts
                            });
                        showAddToast(d, qty, money(line() * qty));
                        closeCust();
                    }
                    ;
                }
                render();
                openModal(custModal);
            }
            function closeCust() {
                custModal.classList.remove("show");
                const behind = trModal.classList.contains("show") || coModal.classList.contains("show") || drawer.classList.contains("show");
                if (!behind)
                    overlay.classList.remove("show");
            }
            function renderMenu() {
                menuGrid.innerHTML = "";
                COUNTRIES.forEach(co => {
                    const dishes = DISHES[co.code].map( (d, i) => ({
                        name: d[0],
                        img: d[1],
                        base: d[2],
                        cat: d[3],
                        tpl: d[4],
                        badge: d[5],
                        id: co.code + "-" + i
                    })).filter(d => (activeFilter === "all" || d.cat === activeFilter) && (!searchTerm || d.name.toLowerCase().includes(searchTerm)));
                    if (!dishes.length)
                        return;
                    const eta = 20 + (_hash(co.code) % 15);
                    const sec = document.createElement("div");
                    sec.className = "cuisine";
                    sec.id = "cuisine-" + co.code;
                    sec.innerHTML = `<div class="cuisine-head"><div class="ch-title"><h3>${co.flag} ${co.cuisine} kitchen</h3><span class="cuisine-greet">${co.greet}</span></div><span class="deliv-badge">🛵 ${eta}–${eta + 10} min · <b>FREE</b></span></div><div class="cuisine-grid"></div>`;
                    const grid = sec.querySelector(".cuisine-grid");
                    dishes.forEach(d => grid.appendChild(buildCard(d)));
                    menuGrid.appendChild(sec);
                }
                );
                if (!menuGrid.children.length) {
                    menuGrid.innerHTML = `<div class="no-results">😋 No dishes match “${searchTerm}”.<br><small>Try “pizza”, “ramen”, “taco”, “sushi”…</small></div>`;
                }
            }
            // ---------- Dish of the Day (rotates daily, same for everyone, changes each day) ----------
            function dishOfDay() {
                const day = Math.floor(Date.now() / 86400000);
                const all = [];
                COUNTRIES.forEach(co => DISHES[co.code].forEach( (d, i) => all.push({
                    co,
                    d,
                    i
                })));
                const p = all[day % all.length];
                return {
                    name: p.d[0],
                    img: p.d[1],
                    base: p.d[2],
                    cat: p.d[3],
                    tpl: p.d[4],
                    badge: p.d[5],
                    id: p.co.code + "-" + p.i,
                    co: p.co
                };
            }
            function renderDishOfDay() {
                const wrap = document.getElementById("dishOfDayWrap");
                if (!wrap)
                    return;
                const d = dishOfDay();
                wrap.innerHTML = `<div class="dod-card">
      <div class="dod-img"><img loading="lazy" src="${d.img}" alt="${d.name}" onerror="this.style.opacity=0">${RECIPES[d.id] ? '<button class="recipe-btn" type="button" title="See the recipe" aria-label="See the recipe">📖 Recipe</button>' : ''}</div>
      <div class="dod-body">
        <span class="dod-tag">🎰 Dish of the Day</span>
        <h3>${d.co.flag} ${d.name}</h3>
        <p>${DESCS[d.tpl]}</p>
        <div class="dod-foot"><span class="dod-price">${money(d.base)}</span><button class="btn btn-primary dod-btn" type="button">Crave it →</button></div>
      </div>
    </div>`;
                const b = wrap.querySelector(".dod-btn");
                if (b)
                    b.onclick = () => openCustomize(d);
                const rb = wrap.querySelector(".recipe-btn");
                if (rb)
                    rb.onclick = e => {
                        e.stopPropagation();
                        openRecipe(d);
                    }
                    ;
            }
            // "Trending now" horizontal rail — the bestseller/hot dishes across all cuisines
            function renderTrending() {
                const rail = document.getElementById("trendRail");
                if (!rail)
                    return;
                rail.innerHTML = "";
                const picks = [];
                COUNTRIES.forEach(co => DISHES[co.code].forEach( (d, i) => {
                    if (d[5] === "best" || d[5] === "hot")
                        picks.push({
                            name: d[0],
                            img: d[1],
                            base: d[2],
                            cat: d[3],
                            tpl: d[4],
                            badge: d[5],
                            id: co.code + "-" + i
                        });
                }
                ));
                picks.sort( (a, b) => _hash(a.id) - _hash(b.id));
                picks.slice(0, 12).forEach(d => rail.appendChild(buildCard(d)));
            }

            // ---------- Toast ----------
            let toastT;
            const toastEl = document.getElementById("toast");
            function showToast(msg) {
                toastEl.textContent = msg;
                toastEl.classList.add("show");
                clearTimeout(toastT);
                toastT = setTimeout( () => toastEl.classList.remove("show"), 1800);
            }
            function showAddToast(d, qty, priceLabel) {
                // rich add-to-cart toast: dish photo + name + price
                toastEl.innerHTML = `<img src="${d.img}" alt=""><span class="t-txt"><b>${qty > 1 ? qty + "× " : ""}${d.name}</b><small>added to tray · ${priceLabel} ✓</small></span>`;
                toastEl.classList.add("show");
                clearTimeout(toastT);
                toastT = setTimeout( () => toastEl.classList.remove("show"), 1900);
            }
            function track(name, params) {
                try {
                    if (typeof gtag === "function")
                        gtag('event', name, params || {});
                } catch (e) {}
            }
            // GA4 events — engagement + funnel visibility, no PII

            // ---------- "Share your craving" — generates a 9:16 photo-collage card from the order ----------
            function _loadImg(src) {
                return new Promise(res => {
                    const im = new Image();
                    im.crossOrigin = "anonymous";
                    im.onload = () => res(im);
                    im.onerror = () => res(null);
                    im.src = src;
                }
                );
            }
            function _rr(c, x, y, w, h, r) {
                c.beginPath();
                c.moveTo(x + r, y);
                c.arcTo(x + w, y, x + w, y + h, r);
                c.arcTo(x + w, y + h, x, y + h, r);
                c.arcTo(x, y + h, x, y, r);
                c.arcTo(x, y, x + w, y, r);
                c.closePath();
            }
            async function buildCravingCard(order) {
                const W = 1080
                  , H = 1920
                  , cv = document.createElement("canvas");
                cv.width = W;
                cv.height = H;
                const c = cv.getContext("2d");
                const g = c.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, "#FFF3F0");
                g.addColorStop(1, "#FFDCD0");
                c.fillStyle = g;
                c.fillRect(0, 0, W, H);
                c.textAlign = "center";
                c.font = "800 66px 'Poppins',system-ui,sans-serif";
                c.fillStyle = "#43303A";
                c.fillText(`${order.flag || "🍽️"} my craving`, W / 2, 190);
                c.font = "700 34px 'Poppins',system-ui,sans-serif";
                c.fillStyle = "#9A8088";
                c.fillText(`${order.cuisine || "a feast"}${order.no ? " · " + order.no : ""}`, W / 2, 248);
                const imgs = order.imgs || [];
                const loaded = (await Promise.all(imgs.map(_loadImg))).filter(Boolean);
                const gridY = 300
                  , areaX = 90
                  , areaW = 900
                  , gap = 26;
                const cols = loaded.length <= 1 ? 1 : 2
                  , rows = Math.max(1, Math.ceil(loaded.length / cols));
                const cell = (areaW - gap * (cols - 1)) / cols
                  , gridH = rows * cell + gap * Math.max(0, rows - 1);
                if (loaded.length) {
                    loaded.forEach( (im, i) => {
                        const col = i % cols
                          , row = Math.floor(i / cols)
                          , dx = areaX + col * (cell + gap)
                          , dy = gridY + row * (cell + gap);
                        c.save();
                        _rr(c, dx, dy, cell, cell, 40);
                        c.clip();
                        const s = Math.max(cell / im.width, cell / im.height)
                          , iw = im.width * s
                          , ih = im.height * s;
                        c.drawImage(im, dx + (cell - iw) / 2, dy + (cell - ih) / 2, iw, ih);
                        c.restore();
                    }
                    );
                } else {
                    c.save();
                    _rr(c, areaX, gridY, areaW, areaW, 40);
                    c.fillStyle = "#FFE7E1";
                    c.fill();
                    c.restore();
                    c.font = "260px system-ui";
                    c.fillStyle = "#F25C54";
                    c.fillText("🍽️", W / 2, gridY + areaW / 2 + 90);
                }
                const sy = gridY + (loaded.length ? gridH : areaW) + 150;
                const sym = ((order.total || "").match(/^[^\d]+/) || [""])[0];
                c.save();
                c.translate(W / 2, sy);
                c.rotate(-0.05);
                const pw = 760
                  , ph = 156;
                c.shadowColor = "rgba(242,92,84,.35)";
                c.shadowBlur = 44;
                c.shadowOffsetY = 16;
                _rr(c, -pw / 2, -ph / 2, pw, ph, 78);
                c.fillStyle = "#F25C54";
                c.fill();
                c.shadowColor = "transparent";
                c.fillStyle = "#fff";
                c.textBaseline = "middle";
                c.font = "800 50px 'Poppins',system-ui,sans-serif";
                c.fillText(`ordered ${order.total || "a feast"} · paid ${sym}0 😌`, 0, 0);
                c.restore();
                c.textBaseline = "alphabetic";
                c.font = "800 46px 'Poppins',system-ui,sans-serif";
                c.fillStyle = "#2E7D5B";
                c.fillText("the food never comes 🛵💨", W / 2, sy + 205);
                c.font = "900 60px 'Poppins',system-ui,sans-serif";
                c.fillStyle = "#F25C54";
                c.fillText("FoodNeverComes", W / 2, H - 150);
                c.font = "700 38px 'Poppins',system-ui,sans-serif";
                c.fillStyle = "#9A8088";
                c.fillText("foodnevercomes.com", W / 2, H - 92);
                return await new Promise(res => cv.toBlob(res, "image/png"));
            }
            let cravingPrep = null;
            // {file, text} pre-built for the currently-shown order so share() fires inside the user gesture
            function prepareCraving(order) {
                const text = `I ordered ${order.total || "a feast"} of ${order.cuisine || ""} food and paid nothing 😌 The food never comes — but the dopamine does. foodnevercomes.com`;
                cravingPrep = {
                    file: null,
                    text
                };
                buildCravingCard(order).then(b => {
                    if (b && cravingPrep)
                        cravingPrep.file = new File([b],"my-craving-foodnevercomes.png",{
                            type: "image/png"
                        });
                }
                ).catch( () => {}
                );
            }
            async function shareCraving() {
                const p = cravingPrep;
                if (!p) {
                    showToast("😅 One sec — try again");
                    return;
                }
                track('share_craving');
                try {
                    if (p.file && navigator.canShare && navigator.canShare({
                        files: [p.file]
                    })) {
                        await navigator.share({
                            files: [p.file],
                            text: p.text
                        });
                        return;
                    }
                    if (navigator.share) {
                        await navigator.share({
                            text: p.text,
                            url: "https://foodnevercomes.com"
                        });
                        return;
                    }
                } catch (e) {
                    if (e && e.name === "AbortError")
                        return;
                }
                // user dismissed the share sheet — not an error
                if (p.file) {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(p.file);
                    a.download = p.file.name;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    setTimeout( () => URL.revokeObjectURL(a.href), 5000);
                }
                try {
                    await navigator.clipboard.writeText(p.text);
                    showToast(p.file ? "📸 Image saved · caption copied!" : "📋 Caption copied!");
                } catch (e) {
                    showToast(p.file ? "📸 Craving image saved!" : "📋 Share text ready!");
                }
            }

            // ---------- "Daily Craving" email capture (POSTs to Netlify Forms; reusable + only succeeds on res.ok) ----------
            function subscribeCraving(email) {
                const body = new URLSearchParams({
                    "form-name": "craving-newsletter",
                    email
                }).toString();
                return fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body
                }).then(res => {
                    if (!res.ok)
                        throw new Error("submit failed");
                    return true;
                }
                );
                // FIX: real failures no longer show "success"
            }
            (function() {
                const f = document.getElementById("signupForm");
                if (!f)
                    return;
                f.addEventListener("submit", e => {
                    e.preventDefault();
                    const email = (f.querySelector('[name="email"]') || {}).value || "";
                    const btn = f.querySelector('button[type="submit"]');
                    if (btn) {
                        btn.disabled = true;
                        btn.textContent = "Signing up…";
                    }
                    subscribeCraving(email).then( () => {
                        f.innerHTML = '<p class="signup-thanks">🎉 You\'re in! Your first craving lands soon.</p>';
                        showToast("🧡 Subscribed — talk soon!");
                    }
                    ).catch( () => {
                        if (btn) {
                            btn.disabled = false;
                            btn.textContent = "Sign me up";
                        }
                        showToast("😅 Hmm, that didn't go through — try again");
                    }
                    );
                }
                );
            }
            )();

            // =========================================================
            //  CART → CHECKOUT → DELIVERY TRACKING
            // =========================================================
            const DELIVERY_FEE = 3000
              , FREE_OVER = 30000;
            const cart = [];
            const overlay = document.getElementById("overlay");
            // ---------- Lock page scroll while any modal/drawer is open (fixes mobile popup scroll-through) ----------
            let _lockY = 0;
            function lockBody() {
                if (document.body.classList.contains("mlock"))
                    return;
                _lockY = window.scrollY || window.pageYOffset || 0;
                document.body.style.top = (-_lockY) + "px";
                document.body.classList.add("mlock");
            }
            function unlockBody() {
                if (!document.body.classList.contains("mlock"))
                    return;
                document.body.classList.remove("mlock");
                document.body.style.top = "";
                var de = document.documentElement
                  , pb = de.style.scrollBehavior;
                de.style.scrollBehavior = "auto";
                window.scrollTo(0, _lockY);
                de.style.scrollBehavior = pb;
            }
            new MutationObserver(function() {
                overlay.classList.contains("show") ? lockBody() : unlockBody();
            }
            ).observe(overlay, {
                attributes: true,
                attributeFilter: ["class"]
            });
            const drawer = document.getElementById("cartDrawer");
            const coModal = document.getElementById("checkoutModal");
            const coSheet = document.getElementById("checkoutSheet");
            const trModal = document.getElementById("trackModal");
            const trSheet = document.getElementById("trackSheet");
            const custModal = document.getElementById("custModal");
            const custSheet = document.getElementById("custSheet");
            const courierModal = document.getElementById("courierModal");
            const courierSheet = document.getElementById("courierSheet");
            const recipeModal = document.getElementById("recipeModal");
            const recipeSheet = document.getElementById("recipeSheet");
            const pill = document.getElementById("cartPill");
            let trackTimer = null;

            function addToCart(d) {
                const key = d.id + "|" + d.opts;
                const hit = cart.find(c => c.key === key);
                if (hit)
                    hit.qty++;
                else
                    cart.push({
                        key,
                        id: d.id,
                        name: d.name,
                        img: d.img,
                        krw: d.krw,
                        opts: d.opts,
                        qty: 1
                    });
                track('add_to_cart', {
                    dish: d.name
                });
                updatePill(true);
                renderCart();
            }
            function changeQty(key, dl) {
                const it = cart.find(c => c.key === key);
                if (!it)
                    return;
                it.qty += dl;
                if (it.qty <= 0)
                    cart.splice(cart.indexOf(it), 1);
                updatePill();
                renderCart();
            }
            function cartCount() {
                return cart.reduce( (n, c) => n + c.qty, 0);
            }
            function subtotal() {
                return cart.reduce( (s, c) => s + c.krw * c.qty, 0);
            }
            function fee() {
                return cart.length === 0 ? 0 : (subtotal() >= FREE_OVER ? 0 : DELIVERY_FEE);
            }
            function taxes() {
                return cart.length ? Math.round(subtotal() * 0.05) : 0;
            }
            // imaginary taxes & charges, for a real-looking bill
            function grand() {
                return subtotal() + fee() + taxes();
            }
            function updatePill(bump) {
                const n = cartCount()
                  , hist = loadOrders().length;
                const countEl = document.getElementById("cartCount");
                const label = document.getElementById("pillLabel");
                const totalEl = document.getElementById("cartTotal");
                const cta = document.getElementById("pillIcon");
                if (n > 0) {
                    countEl.textContent = n;
                    countEl.style.display = "";
                    label.textContent = n === 1 ? "item in tray" : "items in tray";
                    totalEl.textContent = "· " + money(grand());
                    cta.textContent = "View Cart 🛒 ›";
                } else {
                    countEl.textContent = hist;
                    countEl.style.display = hist ? "" : "none";
                    label.textContent = hist ? ("past order" + (hist > 1 ? "s" : "")) : "";
                    totalEl.textContent = "";
                    cta.textContent = "View Orders 📜 ›";
                }
                pill.classList.toggle("empty", n === 0 && hist === 0);
                // hide only when nothing at all
                if (bump) {
                    pill.classList.remove("bump");
                    void pill.offsetWidth;
                    pill.classList.add("bump");
                }
            }

            function renderCart() {
                const box = document.getElementById("cartItems")
                  , foot = document.getElementById("cartFoot");
                if (cart.length === 0) {
                    box.innerHTML = `<div class="cart-empty"><span class="em">🍽️</span>Your tray is empty.<br>Go crave something!</div>` + historyHTML() + passportHTML();
                    foot.innerHTML = "";
                    wireHistory();
                    return;
                }
                box.innerHTML = cart.map(c => `
      <div class="ci">
        <img class="ci-em" loading="lazy" src="${c.img}" alt="${c.name}" onerror="this.style.visibility='hidden'">
        <div class="ci-mid">
          <b>${c.name}</b>
          <div class="ci-opts">${c.opts}</div>
          <div class="qty">
            <button type="button" data-dec="${c.key}" aria-label="Remove one">−</button>
            <span>${c.qty}</span>
            <button type="button" data-inc="${c.key}" aria-label="Add one">+</button>
          </div>
        </div>
        <div class="ci-price">${money(c.krw * c.qty)}</div>
      </div>`).join("") + historyHTML() + passportHTML();
                foot.innerHTML = `
      <div class="tot-row"><span>Subtotal</span><span>${money(subtotal())}</span></div>
      <div class="tot-row"><span>Delivery fee</span><span>${fee() === 0 ? "<s>" + money(DELIVERY_FEE) + "</s> FREE 🎉" : money(fee())}</span></div>
      <div class="tot-row"><span>Taxes &amp; charges</span><span>${money(taxes())}</span></div>
      <div class="tot-row grand"><span>To pay</span><span>${money(grand())}</span></div>
      <button class="btn btn-primary" type="button" id="goCheckout">Proceed to Checkout · ${money(grand())} 🚀</button>`;
                box.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => changeQty(b.dataset.inc, 1));
                box.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => changeQty(b.dataset.dec, -1));
                document.getElementById("goCheckout").onclick = openCheckout;
                wireHistory();
            }

            function openDrawer() {
                renderCart();
                overlay.classList.add("show");
                drawer.classList.add("show");
            }
            function openModal(el) {
                overlay.classList.add("show");
                el.classList.add("show");
            }
            function closeAll() {
                if (trackTimer) {
                    clearInterval(trackTimer);
                    trackTimer = null;
                }
                overlay.classList.remove("show");
                drawer.classList.remove("show");
                coModal.classList.remove("show");
                trModal.classList.remove("show");
                custModal.classList.remove("show");
                courierModal.classList.remove("show");
                recipeModal.classList.remove("show");
            }
            pill.addEventListener("click", openDrawer);
            document.getElementById("navOrders").addEventListener("click", e => {
                e.preventDefault();
                openDrawer();
            }
            );
            overlay.addEventListener("click", () => {
                closeAll();
            }
            );
            document.addEventListener("keydown", e => {
                if (e.key === "Escape") {
                    closeAll();
                }
            }
            );
            document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closeAll));

            function openCheckout() {
                if (cart.length === 0)
                    return;
                drawer.classList.remove("show");
                renderCheckout();
                openModal(coModal);
            }
            function orderSummaryHTML() {
                return `<div class="osum"><h4>🧾 Your order</h4>
      ${cart.map(c => `<div class="or"><span>${c.qty}× ${c.name}</span><span>${money(c.krw * c.qty)}</span></div>`).join("")}
      <div class="or muted"><span>Delivery</span><span>${fee() === 0 ? "Free 🎉" : money(fee())}</span></div>
      <div class="or tot"><span>Total</span><span>${money(grand())}</span></div></div>`;
            }
            function renderCheckout() {
                const sub = subtotal()
                  , tx = taxes()
                  , df = fee();
                const mrp = Math.round(sub * 1.22)
                  , disc = mrp - sub
                  , saved = disc + (df === 0 ? DELIVERY_FEE : 0);
                const addr = getAddr()
                  , card4 = getCardLast4();
                coSheet.innerHTML = `
      <button class="x-btn" type="button" style="float:right" data-x>✕</button>
      <h3>🧾 Checkout</h3>
      <div class="co-block co-addr-block">
        <div class="co-row"><span class="co-ic">🏠</span><div><b>Deliver to Home</b><small>${addr}</small></div><button class="co-edit" type="button" id="editAddr">Change</button></div>
        <div class="co-row"><span class="co-ic">⏱️</span><div><b>Delivery in 25–35 min</b><small>Standard · contactless drop available</small></div></div>
      </div>
      ${orderSummaryHTML()}
      <div class="co-block bill">
        <b class="co-h">Bill details</b>
        <div class="bl"><span>Item total</span><span>${money(mrp)}</span></div>
        <div class="bl save"><span>Item discount</span><span>− ${money(disc)}</span></div>
        <div class="bl"><span>Delivery fee</span><span>${df === 0 ? '<s>' + money(DELIVERY_FEE) + '</s> FREE' : money(df)}</span></div>
        <div class="bl"><span>Taxes &amp; charges</span><span>${money(tx)}</span></div>
        <div class="bl grand"><span>To Pay</span><span>${money(grand())}</span></div>
        <div class="bl-save">🎉 You saved ${money(saved)} on this order — and you'll pay ${disp.sym}0</div>
      </div>
      <div class="co-block co-card-block">
        <div class="co-row"><span class="co-ic">💳</span><div><b>Pay with •••• ${card4}</b><small>🔒 Imaginary card · you are never charged</small></div><button class="co-edit" type="button" id="editCard">Change</button></div>
      </div>
      <button class="btn btn-primary co-cta" type="button" id="placeOrder">Place Order · ${money(grand())} 🎉<small>the food won't come — but the dopamine will 🧠</small></button>
      <button class="btn btn-ghost" type="button" id="backCart" style="margin-top:10px;width:100%;">← Back to tray</button>`;
                coSheet.querySelector("[data-x]").onclick = closeAll;
                coSheet.querySelector("#backCart").onclick = () => {
                    coModal.classList.remove("show");
                    openDrawer();
                }
                ;
                coSheet.querySelector("#placeOrder").onclick = placeOrder;
                coSheet.querySelector("#editAddr").onclick = showAddrEditor;
                coSheet.querySelector("#editCard").onclick = showCardEditor;
            }
            function getAddr() {
                try {
                    return localStorage.getItem("fnc_addr") || ADDR[country.code] || ADDR.US;
                } catch (e) {
                    return ADDR[country.code] || ADDR.US;
                }
            }
            function getCardLast4() {
                try {
                    return localStorage.getItem("fnc_card4") || "4242";
                } catch (e) {
                    return "4242";
                }
            }
            function showAddrEditor() {
                const block = coSheet.querySelector(".co-addr-block");
                if (!block)
                    return;
                block.innerHTML = `<b class="co-h">📍 Delivery address</b>
      <input class="co-input" id="addrInput" value="${getAddr().replace(/"/g, '&quot;')}" placeholder="Flat · street · area">
      <div class="co-edit-actions"><button class="btn btn-ghost" type="button" id="aCancel">Cancel</button><button class="btn btn-primary" type="button" id="aSave">Save address</button></div>`;
                block.querySelector("#aSave").onclick = () => {
                    const v = block.querySelector("#addrInput").value.trim();
                    if (v) {
                        try {
                            localStorage.setItem("fnc_addr", v);
                        } catch (e) {}
                        showToast("📍 Address saved");
                    }
                    renderCheckout();
                }
                ;
                block.querySelector("#aCancel").onclick = renderCheckout;
                block.querySelector("#addrInput").focus();
            }
            function showCardEditor() {
                const block = coSheet.querySelector(".co-card-block");
                if (!block)
                    return;
                block.innerHTML = `<b class="co-h">💳 Card number</b>
      <input class="co-input" id="cardInput" inputmode="numeric" maxlength="19" value="4242 4242 4242 ${getCardLast4()}" placeholder="•••• •••• •••• ••••">
      <small class="co-note">🔒 It's imaginary — you're never charged. Please don't enter a real card.</small>
      <div class="co-edit-actions"><button class="btn btn-ghost" type="button" id="cCancel">Cancel</button><button class="btn btn-primary" type="button" id="cSave">Save card</button></div>`;
                block.querySelector("#cSave").onclick = () => {
                    const v = block.querySelector("#cardInput").value.replace(/\D/g, "");
                    const l4 = v.slice(-4) || "4242";
                    try {
                        localStorage.setItem("fnc_card4", l4);
                    } catch (e) {}
                    showToast("💳 Card saved (still imaginary!)");
                    renderCheckout();
                }
                ;
                block.querySelector("#cCancel").onclick = renderCheckout;
                block.querySelector("#cardInput").focus();
            }

            // ---------- notifications ----------
            function askNotif() {
                if (!("Notification"in window))
                    return;
                if (Notification.permission === "default") {
                    Notification.requestPermission().then( () => {
                        if (window._refreshNotifBox)
                            window._refreshNotifBox();
                    }
                    );
                }
            }
            function notify(title, body) {
                if (("Notification"in window) && Notification.permission === "granted") {
                    try {
                        new Notification(title,{
                            body,
                            lang: "en"
                        });
                    } catch (e) {}
                }
            }

            // ---------- order history (browser storage) ----------
            const ORDERS_KEY = "fnc_orders";
            function loadOrders() {
                try {
                    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
                } catch (e) {
                    return [];
                }
            }
            function saveOrder(o) {
                const a = loadOrders();
                a.unshift(o);
                try {
                    localStorage.setItem(ORDERS_KEY, JSON.stringify(a.slice(0, 20)));
                } catch (e) {}
            }
            function clearOrders() {
                try {
                    localStorage.removeItem(ORDERS_KEY);
                } catch (e) {}
                renderCart();
                updatePill();
            }
            function markOrderDone(no) {
                updateOrder(no, {
                    done: true
                });
            }
            function updateOrder(no, patch) {
                const a = loadOrders();
                const o = a.find(x => x.no === no);
                if (o) {
                    Object.assign(o, patch);
                    try {
                        localStorage.setItem(ORDERS_KEY, JSON.stringify(a));
                    } catch (e) {}
                }
            }
            function historyHTML() {
                const o = loadOrders();
                if (!o.length)
                    return "";
                const live = o.filter(x => !x.done).length;
                return `<details class="acc"${live ? " open" : ""}><summary><span>📜 Past cravings</span><em>${live ? live + " live · " : ""}${o.length}</em></summary><div class="hist"><div class="hist-h"><span></span><button type="button" id="clrHist">clear</button></div>
      ${o.map( (x, i) => `<button class="hist-row" type="button" data-reopen="${i}"><span>${x.no} · ${x.flag} ${x.cuisine}</span><span>${x.total}</span><small>${x.items} · ${x.date} · ${x.done ? "✅ delivered — tap to view" : "🛵 in progress — tap to track"}</small></button>`).join("")}</div></details>`;
            }
            // Floating "on the way" chip — so people can browse & order MORE food while a delivery runs.
            // Hidden whenever any modal/drawer is open (overlay showing) so it never disturbs the existing flow.
            function tickRideChip() {
                const chip = document.getElementById("rideChip");
                if (!chip)
                    return;
                const o = loadOrders().find(x => !x.done && x.placedAt && x.durSecs);
                let hidden = "";
                try {
                    hidden = localStorage.getItem("fnc_chipHide") || "";
                } catch (e) {}
                if (!o || o.no === hidden || overlay.classList.contains("show")) {
                    chip.classList.remove("show");
                    return;
                }
                const rem = Math.max(0, Math.round(o.durSecs - (Date.now() - o.placedAt) / 1000));
                const c = pickCourier(o.no);
                chip.innerHTML = (rem > 0 ? `<span class="rc-e">${c.e}</span><span><b>${String(Math.floor(rem / 60)).padStart(2, "0")}:${String(rem % 60).padStart(2, "0")}</b><small>on the way — tap to track</small></span>` : `<span class="rc-e">🎉</span><span><b>Arrived!</b><small>tap to open your order</small></span>`) + `<span class="rc-x" data-x>✕</span>`;
                chip.classList.add("show");
            }
            setInterval(tickRideChip, 1000);
            document.getElementById("rideChip").onclick = (e) => {
                const o = loadOrders().find(x => !x.done && x.placedAt && x.durSecs);
                if (e.target && e.target.dataset && e.target.dataset.x !== undefined) {
                    // ✕ tapped — dismiss the bubble for THIS order only
                    if (o) {
                        try {
                            localStorage.setItem("fnc_chipHide", o.no);
                        } catch (e2) {}
                    }
                    document.getElementById("rideChip").classList.remove("show");
                    return;
                }
                if (o)
                    startTracking(o.total, o);
                // resumes live tracking, or jumps straight to Delivered if it finished
            }
            ;
            function wireHistory() {
                const ch = document.getElementById("clrHist");
                if (ch)
                    ch.onclick = clearOrders;
                document.querySelectorAll("[data-reopen]").forEach(b => b.onclick = () => {
                    const o = loadOrders()[+b.dataset.reopen];
                    if (!o)
                        return;
                    drawer.classList.remove("show");
                    if (o.done)
                        renderDelivered(o);
                        // completed → show the delivered recap, no countdown
                    else
                        startTracking(o.total, o);
                    // unfinished → resume tracking
                }
                );
            }

            function placeOrder() {
                const total = money(grand());
                const itemsTxt = cart.map(c => `${c.qty}× ${c.name}`).join(", ");
                const imgs = [...new Set(cart.map(c => c.img).filter(Boolean))].slice(0, 4);
                // dish photos for the shareable collage
                const dishes = [...new Map(cart.map(c => [c.id, {
                    id: c.id,
                    name: c.name,
                    img: c.img
                }])).values()].filter(x => x.id);
                // unique ordered dishes → free recipe pills later
                const order = {
                    no: "#FNC" + (1000 + Math.floor(Math.random() * 9000)),
                    total,
                    items: itemsTxt,
                    imgs,
                    dishes,
                    done: false,
                    placedAt: Date.now(),
                    durSecs: (2 + Math.floor(Math.random() * 3)) * 60,
                    // fixed delivery clock — wall-time based, survives backgrounding
                    flag: country.flag,
                    cuisine: country.cuisine,
                    date: new Date().toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                };
                const cuisineCodes = [...new Set(cart.map(c => (c.id || "").split("-")[0]).filter(Boolean))];
                addCollected("fnc_cuisines", cuisineCodes);
                // track cuisine collection
                addCollected("fnc_couriers", pickCourier(order.no).n);
                // track courier collection
                const _hr = new Date().getHours();
                // lifetime stats for badges (before cart is cleared)
                bumpStats({
                    orders: 1,
                    night: (_hr >= 0 && _hr < 5) ? 1 : 0,
                    sweet: cart.filter(c => dishField(c.id, 3) === "sweet").length,
                    spicy: cart.filter(c => dishField(c.id, 4) === "SPICY").length
                });
                track('place_order', {
                    cuisine: country.cuisine,
                    items: cart.length
                });
                askNotif();
                saveOrder(order);
                // persist to history immediately so it's never lost
                cart.length = 0;
                updatePill();
                renderCart();
                coModal.classList.remove("show");
                startTracking(total, order);
                checkAchievements(false);
                // celebrate any badges this order just unlocked
            }

            // ---------- Courier Roulette — a random delivery creature per order (with rare drops) ----------
            const COURIERS = [{
                e: "🐢",
                n: "Tony the Turtle",
                l: "speed-walking your order… ETA: eventually 🐢"
            }, {
                e: "🐇",
                n: "Hopscotch the Rabbit",
                l: "SPRINTING 🥕💨 (might overshoot your house)"
            }, {
                e: "🐌",
                n: "Gary the Snail",
                l: "left the kitchen… arriving in 3–5 business years"
            }, {
                e: "🐈",
                n: "Whiskers the Cat",
                l: "got distracted by a cardboard box 📦, rerouting…"
            }, {
                e: "🐕",
                n: "Biscuit the Dog",
                l: "on the way! …saw another dog. brb 🐕"
            }, {
                e: "🦦",
                n: "Otis the Otter",
                l: "floating over on his back, snack on his tummy"
            }, {
                e: "🦥",
                n: "Sid the Sloth",
                l: "has begun to consider moving 🦥"
            }, {
                e: "🐦",
                n: "Pidge the Pigeon",
                l: "airborne! may detour for breadcrumbs"
            }, {
                e: "🐝",
                n: "Buzz the Bee",
                l: "bee-lining straight to your door 🐝"
            }, {
                e: "🦊",
                n: "Foxy the Fox",
                l: "taking the cleverest route 🦊"
            }, {
                e: "🐼",
                n: "Bao the Panda",
                l: "rolling downhill to save energy 🐼"
            }, {
                e: "🐸",
                n: "Hopper the Frog",
                l: "leaping puddle to puddle 🐸"
            }, {
                e: "🦔",
                n: "Pokey the Hedgehog",
                l: "slow and prickly, but reliable 🦔"
            }, {
                e: "🐧",
                n: "Waddles the Penguin",
                l: "sliding on his belly for max speed 🐧"
            }, {
                e: "🦆",
                n: "Quackers the Duck",
                l: "waddling with purpose 🦆"
            }, {
                e: "🐹",
                n: "Nibbles the Hamster",
                l: "powered by one very fast wheel 🐹"
            }, {
                e: "🦉",
                n: "Professor Owl",
                l: "delivering with wisdom (and talons) 🦉"
            }, ];
            const RARE_COURIERS = [{
                e: "🐉",
                n: "Dragon Express",
                l: "your food arrives slightly toasted 🔥",
                rare: 1
            }, {
                e: "🛸",
                n: "The UFO",
                l: "beaming your order across the galaxy 👽",
                rare: 1
            }, {
                e: "🦄",
                n: "Sparkle the Unicorn",
                l: "delivering via rainbow 🌈",
                rare: 1
            }, {
                e: "🚀",
                n: "Rocket Courier",
                l: "reentry in 3… 2… 1… 🚀",
                rare: 1
            }, {
                e: "🧚",
                n: "Pixie Express",
                l: "sprinkling flavor dust on the way ✨",
                rare: 1
            }, {
                e: "🐳",
                n: "Moby the Whale",
                l: "making a splash with your order 🌊",
                rare: 1
            }, {
                e: "🦖",
                n: "Rex Delivery",
                l: "RAWR means 'food's coming' 🦖",
                rare: 1
            }, {
                e: "🧞",
                n: "Genie Rush",
                l: "your wish is being delivered 🧞",
                rare: 1
            }, ];
            function pickCourier(seed) {
                const h = _hash("courier|" + String(seed || "x"));
                if (h % 14 === 0)
                    return RARE_COURIERS[(h >>> 4) % RARE_COURIERS.length];
                // >>> = unsigned shift (>> went negative → undefined index → crash)
                return COURIERS[(h >>> 2) % COURIERS.length];
            }
            // ---------- Live delivery events + collections (localStorage) ----------
            const KITCHEN_EVENTS = [// before pickup — the courier waits at the restaurant while the kitchen cooks
            "waiting outside the kitchen, sniffing the air 👃", "the chef is doing a dramatic taste test 👨‍🍳", "heard your food sizzling through the door 🔥", "practicing the handoff so nothing spills 🤹", "peeking through the kitchen window 👀", "the chef added a secret ingredient (it's love) 💛", "helmet on. mirror check. still waiting. ⛑️", "stretching for the ride of their life 🧘", "arguing with another courier about the best route 🗺️", "your sauce is getting its final swirl 🥣", "plating… replating… perfecting 🍽️", "the kitchen smells so good they teared up 🥲", "double-checking: extra napkins? extra napkins. 🧻", "the chef high-fived them. it's almost time 🙌", "reading the menu like it's a thriller 📖", "the wok just did a backflip 🍳", "gave the chef a thumbs up through the glass 👍", "guarding your order from other hungry couriers 🛡️", "the fries are getting their golden tan 🍟", "someone said 'extra crispy' and the kitchen cheered 🎉", "your order smells better than their weekend plans 🌟", "polishing the delivery box like a trophy 🏆", "the soup is doing tiny happy bubbles 🫧", "chef whispered 'this one's special' 🤫", "the rice is getting fluffed to perfection 🍚", "chef tasted it. chef smiled. 😊", "your order just got a pep talk 💬", "the onions are caramelizing dramatically 🧅", "someone rang the 'order up' bell early. chaos. 🔔", "the garlic hit the pan — the whole street knows 🧄", "courier is doing warm-up laps around the block 🏃", "the sauce is being stirred counterclockwise (secret) 🌀", "chef is plating like it's a cooking show finale 📺", "the steam curled into a little heart 💨", "courier just learned your order by heart 🧠", "the pan did a little flame trick 🔥", "extra sauce packet secured 🎒", "the kitchen radio is playing bangers 📻", "chef's hat fell off from pure passion 👨‍🍳", "your order is the kitchen's favorite today 🏅", "courier is guarding the pickup shelf like a hawk 🦅", "the cheese is melting in slow motion 🧀", "a taste-test spoon was deployed 🥄", "the whole kitchen did a group high-five 🙌", "your order got double-wrapped for the journey 🎁", "courier is reading the address like a treasure map 🗺️", "the chili count was triple-checked 🌶️", "the grill marks are perfectly parallel 📏", "chef whispered good luck to your food 🍀", "the lid was lifted for a dramatic sniff 👃", "your order is being seasoned from a great height 🧂", "courier is polishing their horn. beep beep. 📯", "the kitchen door swung open dramatically 🚪", "your food is getting a warm blanket of foil 🛌", "the fryer just applauded 👏", "chef is naming the dumplings. don't get attached. 🥟", "courier practiced saying your name 🗣️", "the broth has reached maximum coziness 🍲", "a rogue pea was recaptured 🫛", "your order passed quality control with honors 🎓", "the kitchen cat inspected the bag (approved) 🐈", "courier is stretching their thumbs for the doorbell 👍", "the noodles passed the wall-throw test (kidding) 🍝", "chef did the pan flip. everyone clapped. 👏", "your order is being escorted to the counter 💂", "the bag got a little sticker of approval 🏷️", "courier zipped their jacket. it's serious now. 🧥", "the kitchen timer is doing its final countdown ⏲️", "your sauce got a bodyguard 🕶️", "the herbs were sprinkled like confetti 🎊", "chef checked the order twice, like santa 🎅", "the wok is singing its victory song 🎵", "courier's scooter is warming up: vroom vroom 🛵", "your order just took its graduation photo 📸", "the napkins are folded like tiny swans 🦢", "chef gave the plate a tiny kiss (hygienically) 😘", "your food is doing final stretches 🧘", "the oven made a happy ding 🛎️", "courier triple-knotted their shoelaces 👟", "the soup got one last loving stir 🥣", "your order's aroma has its own fan club now 🌬️", "the courier and the chef fist-bumped. it's time. 👊", "chef is guarding the recipe with their life 🔐", "your order was declared 'too beautiful to cover' 😭", "the courier saluted the chef. the chef saluted back. 🫡", "breaking: your food smells incredible 📰", "the sesame seeds landed perfectly. all of them. 🎯", "your order is riding the counter like a VIP 🛄", "the kitchen's plants leaned in to look 🪴", "chef says it needs one more minute of love ⏳", "the spice dial was set to 'just right' 🎚️", "your drink is getting its ice counted 🧊", "a spoon was licked. a new spoon was fetched. 🥄", "the courier's bag is preheated for maximum coziness 🔥", "your order made the dishwasher jealous 🍽️", "the chef hummed. that means it's perfect. 🎼", "your food is posing for the kitchen's wall of fame 🖼️", "the garnish landed like a tiny crown 👑", "courier checked the weather: 100% chance of delicious 🌤️", "the kitchen lights dimmed for the final plating 💡", ];
            const EVENTS = [// after pickup — on the road (old + new deliberately interleaved so no order shows an all-old streak)
            "stuck at a red light that doesn't exist 🚦", "waved at a grandma. she waved back 👵", "drafting behind a city bus for speed 🚌", "singing your order a little song 🎶", "paused to admire a passing snail 🐌", "hit every green light — suspiciously lucky 🍀", "checked the bag. everything's still delicious ✅", "raced a kid on a tricycle. lost. 🚲", "got distracted by a cardboard box 📦", "your drink did a little slosh. handled it. 🥤", "took the scenic route (accidentally) 🌆", "pigeons demanded a toll. negotiated. 🕊️", "took shelter from imaginary rain 🌧️", "did a totally unnecessary but cool drift 🏍️", "smelled your food. stayed strong. 💪", "got complimented on their helmet 🪖", "your food is judging your life choices 🥡", "a cat is now following the delivery 🐈", "jumped a puddle like an action movie 🎬", "your food waved at another order's food 👋", "honking at a duck crossing the road 🦆", "overtook a pizza guy. personal victory. 🍕", "the GPS said 'trust me' 🤖", "your food is enjoying the breeze 🌬️", "took a 'shortcut' (it was not shorter) 🧭", "stopped to let ducklings cross. worth it. 🐥", "a traffic cone had it out for them 🚧", "took a speed bump with grace and style 🦢", "a fry tried to escape — recaptured 🍟", "the wind is doing 20% of the work 🌪️", "high-fived a kid at a crosswalk ✋", "your noodles are doing tiny wiggles 🍜", "quick power nap. for science. 😴", "found a shortcut. a real one this time. ⚡", "got cheered on by a street cat 🐱", "dodged a rogue shopping cart 🛒", "stopped for a selfie with your order 📸", "the moon is watching over your order 🌙", "practiced the doorbell speech: 'enjoy!' 🎤", "your order got a compliment from a stranger 😌", "small wheelie for morale 🤸", "the streetlights are turning on just for them ✨", "carried your order like royalty 👑", "almost took the wrong turn. almost. 😅", "told your food a secret. it's safe. 🤐", "negotiating with a very slow crosswalk signal 🚸", "a pigeon is riding shotgun now 🐦", "overtook two buses and a dream 🚌", "obeying the speed limit heroically 🚓", "a roundabout tried to keep them forever 🌀", "found the one pothole. survived. 🕳️", "waved at a traffic camera 📷", "the crossing guard gave them a nod of respect 🫡", "took the bridge for the view 🌉", "a taxi honked. they honked back louder. 📢", "entered the street of good smells 🌮", "the alley cat gave directions. trusting it. 🐈‍⬛", "two green lights in a row. unstoppable. 🟢", "a sprinkler tried its best. missed. 💦", "the town clock chimed. very cinematic. 🕰️", "took the cobblestone street — bumpy but stylish 🧱", "a balloon floated by. didn't follow it. growth. 🎈", "your order is now on the fast road 🛣️", "night mode activated: headlight ON 🔦", "a street performer juggled. they juggled respect back. 🤹", "the fountain splashed a little too close ⛲", "leaned into a corner like a movie star 🎥", "a bakery tried to lure them in. resisted. 🥐", "the wind changed. dramatic scarf moment. 🧣", "passing the flower market — smells confusing now 💐", "a skateboarder nodded. they nodded back. 🛹", "your order just crossed the river 🌊", "another light turned green just for them 🚦", "took the tunnel. echoed a happy yell. 📣", "avoided the street with all the stairs 🪜", "a squirrel is pacing them. it's not a race. it's a race. 🐿️", "three ducks saluted from the pond 🦆", "a golden retriever believes in them 🐕", "the neighborhood owl approved this delivery 🦉", "a butterfly landed on the bag. +10 style 🦋", "a hedgehog waved from a bush 🦔", "the pigeons formed an escort squad 🐦", "a snail cheered. it took a while. 🐌", "a cat judged them from a window. normal. 🐱", "a frog gave a thumbs up (somehow) 🐸", "a horse said 'neigh'. they said 'yes'. 🐴", "bees checked the order for honey. none. moved on. 🐝", "a seagull eyed the fries. DENIED. 🦅", "a turtle offered a shortcut. politely declined. 🐢", "a firefly is lighting the way ✨", "a fox winked from the alley 🦊", "a puppy chased them for two blocks of joy 🐶", "a parrot repeated the delivery address. helpful! 🦜", "a raccoon offered to 'hold' the bag. no. 🦝", "a swan escort through the park. majestic. 🦢", "a chipmunk cheered with full cheeks 🐿️", "a lizard did a push-up in support 🦎", "a crab walked alongside. sideways. obviously. 🦀", "an ant colony gave way. respect. 🐜", "a goat ate a flyer about your order 🐐", "your dumplings are cuddling for warmth 🥟", "the sauce packet is doing sudoku 🧩", "your fries organized a tiny choir 🍟", "the rice is holding its shape out of pride 🍚", "your soup is practicing being calm 🧘", "the chopsticks are having a sword fight ⚔️", "your dessert is saving itself for last. discipline. 🍰", "the napkins are ready for anything 🧻", "your drink's ice is telling cool stories 🧊", "the fortune cookie already knows how this ends 🥠", "your noodles measured themselves: still long 📏", "the garlic bread is radiating confidence 🥖", "your salad is staying crisp under pressure 🥗", "the cheese stretched. just to show off. 🧀", "your taco is holding it together. barely. 🌮", "the pickles are gossiping about the onions 🥒", "your burger is doing breathing exercises 🍔", "the wasabi is plotting something. stay alert. 🟢", "your spring rolls rolled a little tighter 😤", "the lemon wedge is feeling zesty 🍋", "your curry is humming with flavor 🍛", "the sushi is meditating in formation 🍣", "your pizza slices are holding hands 🍕", "the hot sauce asked for a seatbelt 🌶️", "your bao buns are extra fluffy today ☁️", "feeling like the main character right now 🎬", "hummed your order's theme song 🎵", "did mental math: worth it. 🧮", "remembered your street from a dream 💭", "made a promise to the wind: no delays 🌬️", "their cape (jacket) is flapping heroically 🦸", "practiced a cool arrival pose 🕺", "gave themselves a pep talk. it worked. 💪", "is 100% focused. 10% distracted. math unclear. 🤔", "saw their reflection. winked. 😉", "whispered 'almost there' to the bag 🤫", "took a deep breath of victory air 😤", "is telling your order about the neighborhood 🏘️", "feels the dopamine building. yours AND theirs. 🧠", "rehearsed the handoff: smooth as butter 🧈", "decided today is a good day 🌞", "gave a thumbs up to no one in particular 👍", "is riding with excellent posture. very rare. 🪑", "counted the blocks left: not many! 🔢", "unlocked personal best: smoothest left turn 🏆", "a cloud shaped like your order floated by ☁️", "the sunset is doing its best work 🌇", "riding through golden hour like a postcard 🌅", "a rainbow appeared. taking full credit. 🌈", "dodged exactly one (1) leaf 🍂", "the breeze smells like dinner time 🌆", "stars are aligning. literally. ⭐", "the moonlight is following them home 🌙", "a puddle reflected their determination 💧", "fog rolled in. dramatic entrance secured. 🌫️", "the streetlamps flickered hello 💡", "wind at their back — nature approves 🍃", "it almost rained. it apologized. 🌦️", "a snowflake landed and instantly melted. summer. ❄️", "thunder grumbled far away. not today. ⛈️", "the GPS rerouted. they ignored it. correct call. 🗺️", "phone at 1%? the mission continues 🔋", "the map app said 'wow, nice pace' 📱", "bluetooth connected to pure determination 🎧", "the ETA improved. witnesses everywhere. ⏱️", "took a shortcut the algorithm fears 🤖", "airplane mode? no. delivery mode. ✈️", "the speedometer blushed 😳", "traffic report: everyone else. not them. 📻", "their smartwatch says 'legend' ⌚", "passed a mirror shop. 12 riders waved. 🪞", "a kid pointed and said 'cool'. career peak. 🧒", "your neighbor's wifi said hello 📶", "delivered a compliment on the way. multitasking. 💬", "the bag is at optimal snuggle temperature 🌡️", "someone's grandma offered them soup. so kind. so no. 🍲", "spotted your street sign. heart rate: excited 🪧", "the doorbell is being mentally prepared 🔔", "your welcome mat has been notified 🚪", "the elevator has been reserved (emotionally) 🛗", "checked the apartment number twice. then once more. 🔢", "a wind chime played their arrival music 🎐", "the last corner has been conquered 🏁", "your food can smell home from here 🏠", "final stretch — engaging delivery mode 🚀", "passed a fortune teller: 'great meal ahead' 🔮", "a mime described your order. beautifully. 🎭", "joined a parade briefly. left with honor. 🎺", "a jogger raced them uphill. results classified. 🏃", "photobombed a tourist's picture 📸", "helped an old lady cross the street (10 points) 👵", "returned a lost balloon to a child 🎈", "the ice cream truck played their song 🍦", "found a coin. heads. lucky delivery. 🪙", "high-fived a statue. it felt right. 🗿", "a street musician dedicated a song to your order 🎸", "rang a bicycle bell in solidarity 🔔", "did the 'I know where I'm going' nod 🧭", "passed the library quietly. respect. 🤫", "a barber waved with scissors. carefully. ✂️", "smelled someone else's dinner. yours is better. 😌", "a window shopper rated the delivery 5 stars ⭐", "took the flower street for the aroma bonus 🌸", "a chess player in the park said 'checkmate'. unrelated. ♟️", "the fruit stand guy tossed them an imaginary apple 🍎", "your order is aging like fine wine (2 minutes) 🍷", "practiced saying 'here's your order!' in 3 tones 🎙️", "the bag did a tiny drumroll 🥁", "passed a gym. waved at the treadmills. 🏋️", "another puddle was jumped. gracefully-ish. 💦", "the neighborhood watch approved this route 👀", "a paper airplane escorted them one block ✈️", "someone yelled 'nice scooter!' — day made 🛵", "the last speed bump has been defeated 🛡️", "your building just appeared on the horizon 🏢", "a garden gnome winked. probably. 🧙", "the corner shop cat blinked approval 🐈", "carried the bag like a sleeping baby 👶", "a delivery legend was spotted: them 🏅", "the street made a runway of green lights 🛫", "quietly proud of that last turn 😌", "a bus stop crowd watched in awe 🚏", "your order waved at a school bus 🚌", "the horizon called: they're almost home 🌄", "a sparrow delivered moral support 🐦", "counted down the house numbers 🏠", "the kickstand is getting nervous (soon!) 🦵", "a leaf blower saluted with a gust 🍃", "someone watered plants nearby. refreshing vibes. 🪴", "a crossing kid said 'that's the food guy!' 🌟", "the last red light turned green early 🟢", "your street smells like victory 🏆", "a neighbor's dog announced the arrival 📢", "the bag hummed happily over the last bump 🎵", "spotted your door. locked in. 🎯", "a windowsill pie nodded in respect 🥧", "double-checked the order one last time ✅", "the scooter purred like it knows 🛵", "your mailbox waved (it was the wind) 📬", "final corner drift: optional. done anyway. 🏍️", "a hopscotch grid was respected, not skipped 🎲", "the porch light turned on like a stage 💡", "your order started its landing checklist 🛬", "they can see your window now 🪟", "arrival imminent — happiness loading 📊", ];
            function loadCollected(key) {
                try {
                    return JSON.parse(localStorage.getItem(key)) || [];
                } catch (e) {
                    return [];
                }
            }
            function addCollected(key, vals) {
                const s = new Set(loadCollected(key));
                (Array.isArray(vals) ? vals : [vals]).forEach(v => {
                    if (v)
                        s.add(v);
                }
                );
                try {
                    localStorage.setItem(key, JSON.stringify([...s]));
                } catch (e) {}
                return [...s];
            }
            function showCouriers() {
                const caught = loadCollected("fnc_couriers");
                const all = COURIERS.concat(RARE_COURIERS);
                courierSheet.innerHTML = `
      <button class="x-btn" type="button" style="position:absolute;right:14px;top:14px;z-index:3;" id="courierClose">✕</button>
      <h3>🃏 Your Couriers</h3>
      <p style="color:var(--muted);font-weight:700;margin:4px 0 14px;">Caught ${caught.length}/${all.length} — collect them all by ordering! (✨ = rare)</p>
      <div class="courier-grid">${all.map(c => {
                    const got = caught.includes(c.n);
                    return `<div class="courier-cell${got ? ' got' : ''}${c.rare ? ' rare' : ''}"><span class="cc-e">${got ? c.e : '❓'}</span><span class="cc-n">${got ? c.n : '???'}</span></div>`;
                }
                ).join("")}</div>`;
                courierSheet.querySelector("#courierClose").onclick = closeCouriers;
                openModal(courierModal);
            }
            function closeCouriers() {
                courierModal.classList.remove("show");
                const behind = trModal.classList.contains("show") || coModal.classList.contains("show") || drawer.classList.contains("show") || custModal.classList.contains("show");
                if (!behind)
                    overlay.classList.remove("show");
            }
            // Map route variants along the same street grid — restaurant & home move per order, so the map feels alive.
            // Each entry: d = route path, rest/home = pin anchors (route start/end), rl/hl = label chip positions.
            const ROUTES = [{
                d: "M42,180 L98,180 Q110,180 110,164 L110,126 Q110,120 122,120 L234,120 Q246,120 246,106 L246,66 Q246,50 264,50 L316,50",
                rest: [42, 180],
                rl: [13, 190],
                home: [316, 50],
                hl: [298, 2]
            }, {
                d: "M316,180 L258,180 Q246,180 246,164 L246,134 Q246,120 234,120 L122,120 Q110,120 110,106 L110,76 Q110,62 96,62 L42,62",
                rest: [316, 180],
                rl: [276, 190],
                home: [42, 62],
                hl: [13, 80]
            }, {
                d: "M42,62 L96,62 Q110,62 110,76 L110,106 Q110,120 122,120 L234,120 Q246,120 246,134 L246,164 Q246,180 258,180 L316,180",
                rest: [42, 62],
                rl: [13, 74],
                home: [316, 180],
                hl: [298, 192]
            }, {
                d: "M110,180 L110,136 Q110,120 126,120 L300,120 Q316,120 316,104 L316,62",
                rest: [110, 180],
                rl: [76, 190],
                home: [316, 62],
                hl: [298, 8]
            }, {
                d: "M246,62 L246,104 Q246,120 230,120 L126,120 Q110,120 110,136 L110,164 Q110,180 96,180 L42,180",
                rest: [246, 62],
                rl: [258, 14],
                home: [42, 180],
                hl: [13, 190]
            }, {
                d: "M316,62 L262,62 Q246,62 246,78 L246,104 Q246,120 230,120 L54,120 Q42,120 42,134 L42,180",
                rest: [316, 62],
                rl: [250, 14],
                home: [42, 180],
                hl: [13, 190]
            }, ];
            // Tapping 📞 call — a different excuse every time
            const CALL_LINES = ["📞 Your rider can't pick up — they don't exist 😅", "📞 Ringing… ringing… reality declined the call 📵", "📞 The rider answered with a paw. hung up immediately. 🐾", "📞 'Sorry, driving!' …they are also imaginary 🛵", "📞 Voicemail: 'leave a craving after the beep' 🔔", "📞 Call failed — turns out phones need a real rider 🤷", "📞 The bee picked up. it was all buzzing. no info. 🐝", "📞 They can't talk right now — they're busy being fictional 🎭", "📞 You called. somewhere, an emoji felt loved. 💛", "📞 The line is busy comforting another hungry human 🫂", "📞 Your rider's phone is a drawing of a phone 🖍️", "📞 Signal lost in the imaginary tunnel 🚇", "📞 They answered! …in animal sounds. no subtitles. 🐒", "📞 The call connected to the moon by mistake 🌙", "📞 'New phone, who's this?' — your imaginary rider 📱", "📞 This line is for cravings-related emergencies only. this qualifies. ✅", ];
            // Mid-ride drama scenes — a guest character shows up on the map and a 3-line story plays in the ticker.
            // t:"meet" = the rider actually STOPS on the map while the guest walks up; t:"race" = the rival (same
            // animal as your courier!) chases right behind. Only ~45% of orders get a scene, so it stays special.
            const DRAMAS = [{
                t: "meet",
                g: "💃",
                lines: ["spotted their girlfriend on the way 💃", "quick hug. very quick. okay bye! 🤗", "back on the road, blushing 😊"]
            }, {
                t: "meet",
                g: "👵",
                lines: ["oh no — it's their mom 👵", "getting scolded for wasting time 😤", "promised to visit on sunday. released. 🙏"]
            }, {
                t: "meet",
                g: "🍟",
                lines: ["pulled over somewhere quiet… 🤫", "wait — are they eating a fry?! 🍟", "'just checking freshness.' sure. 😒"]
            }, {
                t: "meet",
                g: "🐶",
                lines: ["a very good boy demands pets 🐶", "petting break (mandatory) 🫴", "the dog approves your order. onward! ✅"]
            }, {
                t: "meet",
                g: "👮",
                lines: ["pulled over by the snack police 👮", "license and delivery registration, please 📋", "let off with a warning: 'drive deliciously' ✅"]
            }, {
                t: "race",
                g: "SAME",
                lines: ["a rival courier appeared — same species, old grudge 😠", "it's a race now. it was always a race. 🏁", "won by a noodle. literally. 🍜"]
            }, ];
            function startTracking(totalLabel, order) {
                const orderNo = order.no;
                const R = ROUTES[(_hash("route|" + orderNo) >>> 1) % ROUTES.length];
                const hasDrama = ((_hash("drama?" + orderNo) >>> 2) % 100) < 45;
                const DRAMA = DRAMAS[(_hash("drama|" + orderNo) >>> 2) % DRAMAS.length];
                // Wall-clock based timing: duration + start time are fixed & persisted, so the
                // countdown reflects REAL elapsed time even if the tab was backgrounded/closed.
                if (!order.durSecs) {
                    order.durSecs = (2 + Math.floor(Math.random() * 3)) * 60;
                    updateOrder(orderNo, {
                        durSecs: order.durSecs
                    });
                }
                // backfill legacy orders
                if (!order.placedAt) {
                    order.placedAt = Date.now();
                    updateOrder(orderNo, {
                        placedAt: order.placedAt
                    });
                }
                const totalSecs = order.durSecs;
                const etaMin = Math.round(totalSecs / 60);
                const courier = pickCourier(orderNo);
                const remainingNow = () => Math.max(0, totalSecs - Math.floor((Date.now() - order.placedAt) / 1000));
                // If the (imaginary) ride already finished while we were away, jump straight to Delivered.
                if (remainingNow() <= 0) {
                    markOrderDone(orderNo);
                    renderDelivered(order);
                    return;
                }
                let remaining = remainingNow()
                  , pickedNotified = false;
                const STAGES = [[0, "Order confirmed", "✅"], [0.10, "Kitchen is cooking your food", "🍳"], [0.45, "Rider picked up your order", "🛵"], [0.92, "Almost at your door", "🏠"]];
                const PICKUP = STAGES[2][0];
                // the rider leaves the restaurant only at this point — map + events stay in sync with the stage list
                const evOff = _hash("ev|" + orderNo);
                // per-order offset so every order surfaces different event lines
                const sceneStart = PICKUP + (0.30 + ((_hash("scene|" + orderNo) >>> 3) % 16) / 100) * (1 - PICKUP);
                // drama hits 30–45% into the ride
                const sceneEnd = Math.min(0.90, sceneStart + 33 / totalSecs);
                // ~3 ticker lines, always ends before arrival
                trSheet.innerHTML = `
      <button class="x-btn" type="button" id="trClose" style="position:absolute;right:14px;top:14px;z-index:3;">✕</button>
      <h3>${courier.e} On the way!</h3>
      <p style="color:var(--muted);font-weight:700;margin:4px 0 6px;">Order ${orderNo} · "paid" ${totalLabel}</p>
      <div class="track">
        <svg class="fakemap" viewBox="0 0 360 220" role="img" aria-label="Live map tracking your delivery">
          <rect x="0" y="0" width="360" height="220" fill="#EAEDED"/>
          <!-- water -->
          <path d="M0,0 H132 C112,26 138,48 104,66 C78,80 44,76 0,92 Z" fill="#A9D6EF"/>
          <text x="30" y="32" font-size="8.5" fill="#5E97B0" font-style="italic" font-family="sans-serif">Riverside</text>
          <!-- park -->
          <path d="M250,150 Q250,135 270,135 H332 Q348,135 348,156 V198 Q348,212 328,212 H268 Q250,212 250,194 Z" fill="#C6E7C7"/>
          <text x="274" y="180" font-size="8.5" fill="#6AA06E" font-family="sans-serif">City Park</text>
          <!-- road casings -->
          <g stroke="#DCE1E3" stroke-linecap="round" fill="none">
            <path stroke-width="14" d="M-10,120 H372"/><path stroke-width="14" d="M110,-10 V232"/><path stroke-width="14" d="M246,-10 V232"/>
            <path stroke-width="10" d="M-10,62 H372"/><path stroke-width="10" d="M-10,180 H372"/>
            <path stroke-width="9" d="M42,-10 V232"/><path stroke-width="9" d="M316,-10 V232"/>
          </g>
          <!-- roads -->
          <g stroke="#FFFFFF" stroke-linecap="round" fill="none">
            <path stroke-width="10.5" d="M-10,120 H372"/><path stroke-width="10.5" d="M110,-10 V232"/><path stroke-width="10.5" d="M246,-10 V232"/>
            <path stroke-width="6.5" d="M-10,62 H372"/><path stroke-width="6.5" d="M-10,180 H372"/>
            <path stroke-width="5.5" d="M42,-10 V232"/><path stroke-width="5.5" d="M316,-10 V232"/>
          </g>
          <!-- city blocks -->
          <g fill="#E1E5E3">
            <rect x="122" y="72" width="48" height="38" rx="3"/><rect x="182" y="72" width="52" height="38" rx="3"/>
            <rect x="122" y="130" width="48" height="40" rx="3"/><rect x="182" y="130" width="52" height="40" rx="3"/>
            <rect x="258" y="72" width="46" height="38" rx="3"/>
          </g>
          <!-- delivery route (white casing + brand line) — varies per order -->
          <path d="${R.d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>
          <path id="trRoad" d="${R.d}" fill="none" stroke="#F25C54" stroke-width="5.5" stroke-linecap="round"/>
          <!-- restaurant pin (anchored at route start) -->
          <g transform="translate(${R.rest[0]},${R.rest[1]})">
            <path d="M0,6 C-9,6 -15,-1 -15,-10 C-15,-21 0,-32 0,-32 C0,-32 15,-21 15,-10 C15,-1 9,6 0,6 Z" fill="#43303A"/>
            <circle cx="0" cy="-11" r="9.5" fill="#fff"/><text x="0" y="-7" font-size="11" text-anchor="middle">🍴</text>
          </g>
          <!-- home pin (anchored at route end) -->
          <g transform="translate(${R.home[0]},${R.home[1]})">
            <path d="M0,4 C-9,4 -15,-3 -15,-12 C-15,-23 0,-34 0,-34 C0,-34 15,-23 15,-12 C15,-3 9,4 0,4 Z" fill="#16A085"/>
            <circle cx="0" cy="-13" r="9.5" fill="#fff"/><text x="0" y="-9" font-size="11" text-anchor="middle">🏠</text>
          </g>
          <!-- labels -->
          <g font-family="sans-serif" font-weight="800" font-size="9">
            <rect x="${R.rl[0]}" y="${R.rl[1]}" width="62" height="15" rx="7" fill="#fff"/><text x="${R.rl[0] + 6}" y="${R.rl[1] + 11}" fill="#43303A">Restaurant</text>
            <rect x="${R.hl[0]}" y="${R.hl[1]}" width="40" height="15" rx="7" fill="#fff"/><text x="${R.hl[0] + 6}" y="${R.hl[1] + 11}" fill="#43303A">Home</text>
          </g>
          <!-- rider -->
          <circle id="trPulse" class="pulse-dot" cx="${R.rest[0]}" cy="${R.rest[1]}" r="5" fill="#F25C54"/>
          <text id="trRider" x="${R.rest[0]}" y="${R.rest[1]}" font-size="18" text-anchor="middle" dominant-baseline="central">${courier.e}</text>
          <!-- drama guest (girlfriend/mom/dog/…) — appears beside the rider mid-ride -->
          <text id="trGuest" font-size="16" text-anchor="middle" dominant-baseline="central" opacity="0" style="transition:opacity .5s;"></text>
        </svg>
        <div class="eta-card">
          <div class="eta-top">
            <div><div class="eta-big">Arriving in ~${etaMin} min</div><div class="eta-sub">Order ${orderNo} · <span id="trTime">--:--</span> left<small id="trLabel"></small></div></div>
            <div class="eta-mins">${etaMin}<small>MIN</small></div>
          </div>
          <div class="eta-bar"><span id="trBar"></span></div>
        </div>
        <div class="rider-card">
          <div class="rider-av" style="background:var(--cream);font-size:1.4rem;">${courier.e}</div>
          <div class="rider-info"><b>${courier.n} is on the way${courier.rare ? ' <span class="rare-badge">✨ RARE ✨</span>' : ''}</b><small>${courier.l}</small></div>
          <button class="rider-call" type="button" id="trCall" aria-label="Call your rider">📞</button>
        </div>
        <div class="tr-event" id="trEvent"></div>
        <ul class="stages" id="trStages">${STAGES.map( (s, i) => `<li data-i="${i}"><span class="sdot">${s[2]}</span>${s[1]}</li>`).join("")}</ul>
        <div class="ww-divider"><span>WHILE YOU WAIT</span></div>
        ${offerBlock('wait', order)}
        <div id="trNotif"></div>
        <button class="btn btn-ghost" type="button" id="trShare" style="width:100%;margin-top:4px;">📸 Share your craving</button>
        <div class="tip-cta" id="trTipBox">
          <small>🛵 Send your rider a fun tip while you wait — it's imaginary, keep your money!</small>
          <div class="tip-chips">
            ${TIP_TIERS.map( ([emoji,krw]) => {
                    const l = niceTip(krw);
                    return `<button class="tip-chip" type="button" data-tip="${l}">${emoji} ${l}</button>`;
                }
                ).join("")}
          </div>
        </div>
      </div>`;
                openModal(trModal);
                prepareCraving(order);
                // pre-build the shareable collage
                trSheet.querySelector("#trClose").onclick = closeAll;
                // close the map popup
                const trShareBtn = trSheet.querySelector("#trShare");
                if (trShareBtn)
                    trShareBtn.onclick = shareCraving;
                const trCallBtn = trSheet.querySelector("#trCall");
                if (trCallBtn)
                    trCallBtn.onclick = () => showToast(CALL_LINES[Math.floor(Math.random() * CALL_LINES.length)]);
                trSheet.querySelectorAll(".ro-recipe").forEach(b => b.onclick = () => openRecipe({
                    id: b.dataset.id,
                    name: b.dataset.name,
                    img: b.dataset.img
                }));
                trSheet.querySelectorAll(".tip-chip").forEach(b => b.onclick = () => {
                    const amt = b.dataset.tip;
                    trSheet.querySelector("#trTipBox").innerHTML = `<div class="tip-thanks">🧡 You tipped the rider ${amt}! They did a happy little wheelie 🛵💨<small>Totally imaginary — your wallet's safe. Thanks for the good vibes!</small></div>
        <div class="tip-cta" style="margin-top:14px;">
          <small>Loved the dopamine? Our sister project helps you quit the habits that don't love you back. 🙏</small>
          <a class="donate-link" id="trDonate" href="https://rewireheaven.com" target="_blank" rel="noopener" style="display:inline-block;">🧠 Try RewireHeaven</a>
        </div>`;
                    // bring the thank-you + donate prompt into view so it isn't hidden below the fold
                    requestAnimationFrame( () => trSheet.querySelector("#trTipBox").scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    }));
                }
                );
                const rider = trSheet.querySelector("#trRider")
                  , timeEl = trSheet.querySelector("#trTime")
                  , lis = [...trSheet.querySelectorAll("#trStages li")]
                  , notifBox = trSheet.querySelector("#trNotif")
                  , evEl = trSheet.querySelector("#trEvent")
                  , guestEl = trSheet.querySelector("#trGuest");
                const road = trSheet.querySelector("#trRoad")
                  , roadLen = road ? road.getTotalLength() : 0
                  , pulse = trSheet.querySelector("#trPulse");

                function refreshNotifBox() {
                    if (!("Notification"in window)) {
                        notifBox.innerHTML = "";
                        return;
                    }
                    if (Notification.permission === "granted") {
                        notifBox.innerHTML = `<div class="demo-note">🔔 Alerts on — we'll ping you the second it "arrives".</div>`;
                    } else if (Notification.permission === "denied") {
                        notifBox.innerHTML = `<div class="notif-ask">🔕 Notifications are blocked. Enable them in your browser's site settings to get a delivery ping.</div>`;
                    } else {
                        notifBox.innerHTML = `<div class="notif-ask">🔔 Want a ping when it "arrives"?<br><button class="btn btn-primary" type="button" id="enableNotif" style="padding:9px 18px;font-size:.9rem;">Turn on alerts</button></div>`;
                        const b = notifBox.querySelector("#enableNotif");
                        if (b)
                            b.onclick = askNotif;
                    }
                }
                window._refreshNotifBox = refreshNotifBox;
                refreshNotifBox();

                function paint() {
                    remaining = remainingNow();
                    // always re-derive from the real clock — immune to timer throttling/pausing
                    const frac = 1 - remaining / totalSecs;
                    timeEl.textContent = String(Math.floor(remaining / 60)).padStart(2, "0") + ":" + String(remaining % 60).padStart(2, "0");
                    const _bar = trSheet.querySelector("#trBar");
                    if (_bar)
                        _bar.style.width = Math.max(5, Math.min(100, Math.round(frac * 100))) + "%";
                    const inScene = hasDrama && frac >= sceneStart && frac < sceneEnd;
                    if (evEl) {
                        const el = totalSecs - remaining;
                        if (frac < PICKUP) {
                            // kitchen phase — the courier is waiting at the restaurant
                            evEl.textContent = el < 6 ? ("📍 " + courier.n + " arrived at the restaurant") : ("📍 " + courier.n + " " + KITCHEN_EVENTS[(evOff + Math.floor(el / 11)) % KITCHEN_EVENTS.length]);
                        } else if (inScene) {
                            // drama scene — 3-line story while the guest is on the map
                            const si = Math.min(DRAMA.lines.length - 1, Math.floor((frac - sceneStart) * totalSecs / 11));
                            evEl.textContent = "📍 " + courier.n + " — " + DRAMA.lines[si];
                        } else {
                            // road phase
                            const rel = Math.floor(el - PICKUP * totalSecs);
                            evEl.textContent = rel < 6 ? ("📍 " + courier.n + " picked up your order") : ("📍 " + courier.n + " " + EVENTS[(evOff + Math.floor(rel / 11)) % EVENTS.length]);
                        }
                    }
                    if (roadLen) {
                        // Rider waits at the restaurant until pickup, then rides the full route.
                        // During a "meet" drama the rider genuinely STOPS on the map — road time is remapped
                        // around the scene window so the arrival still lands exactly on the countdown.
                        let rf;
                        const pauses = hasDrama && DRAMA.t === "meet";
                        if (frac <= PICKUP)
                            rf = 0;
                        else if (!pauses)
                            rf = (frac - PICKUP) / (1 - PICKUP);
                        else {
                            const mv = (sceneStart - PICKUP) + (1 - sceneEnd);
                            // total moving time (scene excluded)
                            if (frac < sceneStart)
                                rf = (frac - PICKUP) / mv;
                            else if (frac < sceneEnd)
                                rf = (sceneStart - PICKUP) / mv;
                                // parked mid-route
                            else
                                rf = ((sceneStart - PICKUP) + (frac - sceneEnd)) / mv;
                        }
                        rf = Math.max(0, Math.min(1, rf));
                        const pt = road.getPointAtLength(rf * roadLen);
                        rider.setAttribute("x", pt.x);
                        rider.setAttribute("y", pt.y);
                        const pf = rf === 0 ? 0 : Math.min(1, rf + 0.12);
                        const pp = road.getPointAtLength(pf * roadLen);
                        if (pulse) {
                            pulse.setAttribute("cx", pp.x);
                            pulse.setAttribute("cy", pp.y);
                        }
                        if (guestEl) {
                            // the drama guest is ON the road: walks up to the parked rider, or chases in a race
                            guestEl.setAttribute("opacity", inScene ? "1" : "0");
                            if (inScene) {
                                guestEl.textContent = DRAMA.g === "SAME" ? courier.e : DRAMA.g;
                                const prog = (frac - sceneStart) / (sceneEnd - sceneStart);
                                // 0→1 through the scene
                                const gd = DRAMA.t === "race" ? rf - 0.055 : rf + Math.max(0.022, 0.10 - prog * 0.25);
                                const gp = road.getPointAtLength(Math.max(0, Math.min(1, gd)) * roadLen);
                                guestEl.setAttribute("x", gp.x);
                                guestEl.setAttribute("y", gp.y - 2);
                            }
                        }
                    }
                    let active = 0;
                    STAGES.forEach( (s, i) => {
                        if (frac >= s[0])
                            active = i;
                    }
                    );
                    lis.forEach( (li, i) => {
                        li.classList.toggle("done", i < active);
                        li.classList.toggle("active", i === active);
                    }
                    );
                    if (active >= 2 && !pickedNotified) {
                        pickedNotified = true;
                        notify("🛵 On its way!", `Order ${orderNo} — your rider just grabbed your (imaginary) food.`);
                    }
                }
                paint();
                if (trackTimer)
                    clearInterval(trackTimer);
                trackTimer = setInterval( () => {
                    if (remainingNow() <= 0) {
                        clearInterval(trackTimer);
                        trackTimer = null;
                        deliver();
                        return;
                    }
                    paint();
                }
                , 1000);
                // When the tab is refocused, the throttled timer may be stale — repaint (and finish if due) right away.
                if (window._trCleanup)
                    window._trCleanup();
                // drop any listener from a previous tracking session
                const onVis = () => {
                    if (document.visibilityState !== "visible")
                        return;
                    if (!trackTimer)
                        return;
                    if (remainingNow() <= 0) {
                        clearInterval(trackTimer);
                        trackTimer = null;
                        deliver();
                    } else
                        paint();
                }
                ;
                document.addEventListener("visibilitychange", onVis);
                window._trCleanup = () => {
                    document.removeEventListener("visibilitychange", onVis);
                    window._trCleanup = null;
                }
                ;

                function deliver() {
                    window._refreshNotifBox = null;
                    if (window._trCleanup)
                        window._trCleanup();
                    trackTimer = null;
                    markOrderDone(orderNo);
                    // remember it completed
                    renderCart();
                    renderDelivered(order);
                    track('order_delivered', {
                        cuisine: order.cuisine
                    });
                    notify("🎉 Delivered!", `Your FoodNeverComes order ${orderNo} "arrived". Dopamine delivered — wallet untouched. 🧠`);
                }
            }

            // delivered recap screen (also used when re-opening a completed order)
            function renderDelivered(order) {
                const collected = loadCollected("fnc_cuisines");
                trSheet.innerHTML = `
      <button class="x-btn" type="button" id="trClose" style="position:absolute;right:14px;top:14px;z-index:3;">✕</button>
      <div class="track" style="padding:10px 0;">
        <div class="delivered-badge">🎉</div>
        <h3 style="margin-top:6px;">Delivered! …well, virtually 😋</h3>
        <p style="color:var(--muted);font-weight:700;margin:8px 0 4px;">Order ${order.no} "arrived". The food never comes — but you got the dopamine and kept every coin. 💸</p>
        <p style="color:var(--muted);font-weight:700;margin:0 0 8px;font-size:.9rem;">${order.flag} ${order.items} · ${order.total} · ${order.date}</p>
        <p style="font-family:var(--font-d);font-weight:800;color:var(--mint);font-size:1.2rem;margin:6px 0 14px;">Crisis averted. Wallet intact. 🧠🧡</p>
        <div class="collect-card">
          <b>🏆 Cuisines collected · ${collected.length}/${COUNTRIES.length}</b>
          <div class="collect-flags">${COUNTRIES.map(c => `<span class="cflag${collected.includes(c.code) ? ' got' : ''}" title="${c.cuisine}">${c.flag}</span>`).join("")}</div>
          ${collected.length >= COUNTRIES.length ? `<small>🎉 You collected every cuisine — absolute legend.</small>` : `<small>Order from ${COUNTRIES.length - collected.length} more to collect them all! 🌍</small>`}
          <button class="collect-couriers" type="button" id="trCouriers">🃏 Couriers caught: ${loadCollected("fnc_couriers").length}/${COURIERS.length + RARE_COURIERS.length} →</button>
        </div>
        ${offerBlock('done', order)}
        <button class="btn btn-primary" type="button" id="trShare" style="width:100%;margin-bottom:10px;">📸 Share your craving</button>
        <div class="sheet-actions"><button class="btn btn-ghost" type="button" id="trReorder">Order again 🍽️</button><button class="btn btn-ghost" type="button" id="trDone">Done</button></div>
      </div>`;
                prepareCraving(order);
                // pre-build the shareable collage
                trSheet.querySelector("#trClose").onclick = closeAll;
                const dShareBtn = trSheet.querySelector("#trShare");
                if (dShareBtn)
                    dShareBtn.onclick = shareCraving;
                trSheet.querySelector("#trDone").onclick = closeAll;
                trSheet.querySelector("#trReorder").onclick = () => {
                    closeAll();
                    document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                    });
                }
                ;
                const ccB = trSheet.querySelector("#trCouriers");
                if (ccB)
                    ccB.onclick = showCouriers;
                trSheet.querySelectorAll(".ro-recipe").forEach(b => b.onclick = () => openRecipe({
                    id: b.dataset.id,
                    name: b.dataset.name,
                    img: b.dataset.img
                }));
                openModal(trModal);
                setTimeout( () => iosInstallCard(true), 2200);
                // dopamine peak — best moment to suggest install (iOS Safari only, capped)
            }

            // ---------- "cravings satisfied" counter (no database, time-based) ----------
            // Grows steadily from a launch seed so it feels alive & global, plus your own orders.
            // It's an honest illusion for a dopamine site — a real shared total would need a server.
            (function() {
                const el = document.getElementById("cravingCount");
                const LAUNCH = Date.UTC(2026, 5, 1);
                // June 1, 2026
                const SEED = 20000
                  , PER_SEC = 0.21;
                // ~18k/day growth
                const liveCount = () => SEED + Math.floor(Math.max(0, (Date.now() - LAUNCH) / 1000) * PER_SEC) + loadOrders().length;
                const target = liveCount();
                let shown = Math.max(SEED, target - 80);
                // animate the last stretch on load
                const fmt = n => n.toLocaleString();
                const tick = () => {
                    if (shown < target) {
                        shown += Math.ceil((target - shown) / 12);
                        if (shown > target)
                            shown = target;
                    }
                    el.textContent = fmt(shown);
                    if (shown < target)
                        requestAnimationFrame(tick);
                }
                ;
                tick();
                setInterval( () => {
                    const t = liveCount();
                    if (t > shown) {
                        shown = t;
                        el.textContent = fmt(shown);
                    }
                }
                , 5000);
                // keep ticking live
                window._bumpCount = () => {
                    shown += 1;
                    el.textContent = fmt(shown);
                }
                ;
            }
            )();

            // ---------- iOS install helper card ----------
            // Rules: never on page-open. Auto-shows only after a delivered order or streak day 2+,
            // max 2 times ever, never inside in-app browsers, never for installed users.
            // Tapping "Install app" always shows it (that's an explicit ask).
            const IOS_DEVICE = /iphone|ipad|ipod/i.test(navigator.userAgent);
            const IN_APP_BROWSER = /instagram|fbav|fban|fb_iab|micromessenger|musical_ly|bytedance|ttwebview|snapchat|\bline\//i.test(navigator.userAgent);
            function pwaInstalled() {
                try {
                    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true || localStorage.getItem("fnc_installed") === "1";
                } catch (e) {
                    return false;
                }
            }
            function iosInstallCard(auto) {
                if (!IOS_DEVICE || pwaInstalled())
                    return;
                if (auto && IN_APP_BROWSER)
                    return;
                // never interrupt Instagram/WeChat visitors
                const el = document.getElementById("iosSheet");
                if (el === null || el.classList.contains("show"))
                    return;
                if (auto) {
                    let n = 0;
                    try {
                        n = +localStorage.getItem("fnc_iosCard") || 0;
                    } catch (e) {}
                    if (n >= 2)
                        return;
                    try {
                        localStorage.setItem("fnc_iosCard", String(n + 1));
                    } catch (e) {}
                }
                el.innerHTML = IN_APP_BROWSER ? `
      <h4>🐱 One quick step first</h4>
      <p>This in-app browser can't install apps.</p>
      <ol><li>Tap ⋯ at the top right</li><li>Choose "Open in external browser"</li><li>Then tap Install app again</li></ol>
      <button class="is-ok" type="button">Got it!</button>` : `
      <h4>🐱 Keep your kitten safe!</h4>
      <p>Add FoodNeverComes to your home screen — your streak and badges will never get lost.</p>
      <ol><li>Tap the Share button below <svg viewBox="0 0 24 24" width="15" height="15" style="vertical-align:-2px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V3M8 7l4-4 4 4"/><path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"/></svg></li><li>Tap "Add to Home Screen"</li></ol>
      <button class="is-ok" type="button">Got it!</button>`;
                el.querySelector(".is-ok").onclick = () => el.classList.remove("show");
                setTimeout( () => el.classList.add("show"), 30);
                // next tick so the slide-up transition runs from the off-screen position
            }

            // ---------- PWA: add to home screen ----------
            (function() {
                if ("serviceWorker"in navigator) {
                    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch( () => {}
                    ));
                }
                const btn = document.getElementById("installBtn");
                if (!btn)
                    return;
                const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
                const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
                let deferred = null;
                if (standalone)
                    return;
                // already installed — keep the button hidden
                window.addEventListener("beforeinstallprompt", (e) => {
                    // Android/Chrome/Edge/desktop
                    e.preventDefault();
                    deferred = e;
                    btn.classList.add("show");
                }
                );
                if (isIOS)
                    btn.classList.add("show");
                // iOS Safari never fires the event → show the button + give Share instructions on tap
                btn.addEventListener("click", async () => {
                    if (deferred) {
                        deferred.prompt();
                        await deferred.userChoice;
                        deferred = null;
                        btn.classList.remove("show");
                        return;
                    }
                    if (isIOS) {
                        iosInstallCard(false);
                        return;
                    }
                    showToast('✅ Open your browser menu → "Install app"');
                }
                );
                window.addEventListener("appinstalled", () => {
                    btn.classList.remove("show");
                    try {
                        localStorage.setItem("fnc_installed", "1");
                    } catch (e) {}
                    try {
                        if (typeof gtag === "function")
                            gtag('event', 'pwa_install');
                    } catch (e) {}
                    showToast("🎉 Installed! Find FoodNeverComes on your home screen");
                }
                );
            }
            )();

            // ---------- splash / loading screen ----------
            (function() {
                const splash = document.getElementById("splash");
                if (!splash) {
                    document.documentElement.classList.remove("splash-lock");
                    return;
                }
                const START = performance.now()
                  , MIN = 1400
                  , MAX = 5000;
                // show long enough to enjoy the bounce
                let done = false;
                function dismiss() {
                    if (done)
                        return;
                    done = true;
                    const wait = Math.max(0, MIN - (performance.now() - START));
                    // honour the minimum on-screen time
                    setTimeout( () => {
                        splash.classList.add("hide");
                        document.documentElement.classList.remove("splash-lock");
                        setTimeout( () => splash.remove(), 600);
                    }
                    , wait);
                }
                if (document.readyState === "complete")
                    dismiss();
                else
                    window.addEventListener("load", dismiss);
                setTimeout(dismiss, MAX);
                // safety: never trap the user if an asset stalls
            }
            )();

            // ---------- init ----------
            // Region: remembered manual choice → else default to Korea instantly → else soft geo-detect (still freely changeable).
            (function initRegion() {
                let saved = null;
                try {
                    saved = localStorage.getItem("fnc_region");
                } catch (e) {}
                try {
                    const _sc = localStorage.getItem("fnc_cur");
                    if (_sc && CURRENCIES.some(c => c.cur === _sc))
                        curOverride = _sc;
                } catch (e) {}
                try {
                    const _qc = (new URLSearchParams(location.search).get("cur") || "").toUpperCase();
                    if (_qc && CURRENCIES.some(c => c.cur === _qc)) {
                        curOverride = _qc;
                        localStorage.setItem("fnc_cur", _qc);
                    }
                } catch (e) {}
                // ?cur=GBP for testing + shareable links
                if (saved && COUNTRIES.some(c => c.code === saved)) {
                    window._regionLocked = true;
                    setCountry(saved);
                } else
                    setCountry("KR");
                // instant default — nothing waits on the network
                // Always detect the REAL country via Cloudflare's free /cdn-cgi/trace (no key, no rate limit).
                // Used for meal-kit geo-targeting (delivers to where you ARE) + soft currency if the user hasn't picked.
                fetch("/cdn-cgi/trace").then(r => r.text()).then(t => {
                    const m = t.match(/loc=([A-Z]{2})/)
                      , cc = m && m[1];
                    if (cc) {
                        window._geoCC = cc;
                        wireMealKit();
                        if (window.applyAutoLang)
                            window.applyAutoLang(cc);
                    }
                    // AU/DE meal-kit + (China only) Chinese language
                    if (!window._regionLocked && cc) {
                        if (COUNTRIES.some(c => c.code === cc))
                            setCountry(cc);
                            // has a cuisine → switch cuisine + currency
                        else if (!curOverride && CC_TO_CUR[cc]) {
                            geoCur = CC_TO_CUR[cc];
                            applyDisp();
                            renderMenu();
                            renderTrending();
                            renderDishOfDay();
                            renderCart();
                        }
                        // no cuisine → at least localise the currency
                    }
                }
                ).catch( () => {}
                );
            }
            )();
            updatePill();

            // ---------- Achievements + Foodie Passport (100% localStorage — no backend) ----------
            const ACHIEVEMENTS = [{
                id: "first",
                e: "🍽️",
                n: "First Craving",
                d: "Place your first order",
                got: s => s.orders >= 1
            }, {
                id: "five",
                e: "🖐️",
                n: "Regular",
                d: "Place 5 orders",
                got: s => s.orders >= 5
            }, {
                id: "streak3",
                e: "🔥",
                n: "On a Roll",
                d: "Reach a 3-day streak",
                got: s => s.best >= 3
            }, {
                id: "streak7",
                e: "🏆",
                n: "7-Day Legend",
                d: "Reach a 7-day streak",
                got: s => s.best >= 7
            }, {
                id: "globe",
                e: "🌍",
                n: "Globetrotter",
                d: "Try 5 different cuisines",
                got: s => s.cuisines >= 5
            }, {
                id: "world",
                e: "👑",
                n: "World Tour",
                d: "Collect all 12 cuisines",
                got: s => s.cuisines >= COUNTRIES.length
            }, {
                id: "night",
                e: "🦉",
                n: "Night Owl",
                d: "Crave between midnight–5am",
                got: s => s.night >= 1
            }, {
                id: "sweet",
                e: "🍰",
                n: "Sweet Tooth",
                d: "Order 3 desserts",
                got: s => s.sweet >= 3
            }, {
                id: "spicy",
                e: "🌶️",
                n: "Spice Lord",
                d: "Order 3 spicy dishes",
                got: s => s.spicy >= 3
            }, {
                id: "rare",
                e: "🦄",
                n: "Lucky Catch",
                d: "Catch a rare courier",
                got: s => s.rareCourier
            }, {
                id: "couriers",
                e: "🃏",
                n: "Courier Collector",
                d: "Catch 8 couriers",
                got: s => s.couriers >= 8
            }, ];
            function loadStats() {
                try {
                    return JSON.parse(localStorage.getItem("fnc_stats")) || {};
                } catch (e) {
                    return {};
                }
            }
            function bumpStats(patch) {
                const s = loadStats();
                for (const k in patch)
                    s[k] = (s[k] || 0) + patch[k];
                try {
                    localStorage.setItem("fnc_stats", JSON.stringify(s));
                } catch (e) {}
            }
            function dishField(id, idx) {
                const p = String(id || "").split("-");
                const a = DISHES[p[0]] && DISHES[p[0]][+p[1]];
                return a ? a[idx] : "";
            }
            function achState() {
                const stats = loadStats();
                const couriersArr = loadCollected("fnc_couriers");
                const rareNames = RARE_COURIERS.map(c => c.n);
                let best = 0;
                try {
                    best = +localStorage.getItem("fnc_best") || 0;
                } catch (e) {}
                return {
                    orders: stats.orders || 0,
                    night: stats.night || 0,
                    sweet: stats.sweet || 0,
                    spicy: stats.spicy || 0,
                    cuisines: loadCollected("fnc_cuisines").length,
                    couriers: couriersArr.length,
                    rareCourier: couriersArr.some(n => rareNames.includes(n)),
                    best
                };
            }
            function checkAchievements(silent) {
                const s = achState()
                  , have = new Set(loadCollected("fnc_badges"))
                  , newly = [];
                ACHIEVEMENTS.forEach(a => {
                    if (a.got(s) && !have.has(a.id)) {
                        have.add(a.id);
                        newly.push(a);
                    }
                }
                );
                if (newly.length) {
                    addCollected("fnc_badges", newly.map(a => a.id));
                    if (!silent)
                        newly.forEach( (a, i) => setTimeout( () => showToast(`🏅 Badge unlocked — ${a.e} ${a.n}!`), i * 1500));
                }
                return newly;
            }
            function passportHTML() {
                try {
                    const cuis = loadCollected("fnc_cuisines")
                      , have = new Set(loadCollected("fnc_badges"));
                    const stamps = COUNTRIES.map(c => `<span class="pp-stamp${cuis.includes(c.code) ? ' got' : ''}" title="${c.cuisine}">${c.flag}</span>`).join("");
                    const left = COUNTRIES.length - cuis.length;
                    const badges = ACHIEVEMENTS.map(a => `<div class="pp-badge${have.has(a.id) ? '' : ' lock'}" title="${a.d}"><span class="pp-be">${a.e}</span><span class="pp-bn">${a.n}</span></div>`).join("");
                    return `<details class="acc"><summary><span>🎒 Foodie Passport</span><em>${cuis.length}/${COUNTRIES.length}</em></summary><div class="passport">
      <div class="pp-stamps">${stamps}</div>
      <div class="pp-msg">${left > 0 ? `Order from ${left} more ${left === 1 ? 'cuisine' : 'cuisines'} to collect them all! 🌍` : `🎉 Every cuisine collected — absolute legend!`}</div>
    </div></details>
    <details class="acc"><summary><span>🏅 Badges</span><em>${ACHIEVEMENTS.filter(a => have.has(a.id)).length}/${ACHIEVEMENTS.length}</em></summary><div class="passport">
      <div class="pp-badges">${badges}</div>
    </div></details>`;
                } catch (e) {
                    return "";
                }
                // ACHIEVEMENTS const not ready during very first boot render — passport shows once drawer is opened
            }

            // ---------- Daily Craving streak (100% localStorage — no database, no signup) ----------
            function streakMood(s) {
                // you RAISE the cat — it only ever gets happier, never sad/sick (no guilt, on-brand)
                if (s >= 30)
                    return {
                        face: "👑😻",
                        word: "Streak royalty — your cat rules the kitchen! 👑"
                    };
                if (s >= 14)
                    return {
                        face: "😻✨",
                        word: "Your cat is OBSESSED with you 💞"
                    };
                if (s >= 7)
                    return {
                        face: "😻",
                        word: "A whole week — kitty LOVES you! 💗"
                    };
                if (s >= 3)
                    return {
                        face: "😸",
                        word: "Kitty's so happy you keep coming back!"
                    };
                if (s >= 2)
                    return {
                        face: "😺",
                        word: "Your kitten is settling in 😌"
                    };
                return {
                    face: "🐱",
                    word: "A kitten adopted you! Visit tomorrow to raise it 🐾"
                };
            }
            function initDailyCraving() {
                const box = document.getElementById("dailyCrave");
                if (!box)
                    return;
                const dayKey = d => d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
                const today = new Date()
                  , tKey = dayKey(today);
                const yd = new Date(today);
                yd.setDate(yd.getDate() - 1);
                const yKey = dayKey(yd);
                let streak = 0
                  , best = 0
                  , last = "";
                try {
                    streak = +localStorage.getItem("fnc_streak") || 0;
                    best = +localStorage.getItem("fnc_best") || 0;
                    last = localStorage.getItem("fnc_craveDate") || "";
                } catch (e) {}
                if (last !== tKey) {
                    // first visit today → update the streak
                    streak = (last === yKey) ? streak + 1 : 1;
                    // continued yesterday? +1, else reset to 1
                    best = Math.max(best, streak);
                    try {
                        localStorage.setItem("fnc_streak", streak);
                        localStorage.setItem("fnc_best", best);
                        localStorage.setItem("fnc_craveDate", tKey);
                    } catch (e) {}
                    track('streak_day', {
                        day: streak
                    });
                    if (streak >= 2)
                        setTimeout( () => iosInstallCard(true), 2600);
                    // day 2+ — they now have a streak worth protecting (iOS Safari only, capped)
                }
                const m = streakMood(streak);
                let dots = "";
                for (let i = 0; i < 7; i++) {
                    dots += `<span class="sb-dot${i < Math.min(streak, 7) ? ' on' : ''}"></span>`;
                }
                box.innerHTML = `
      <span class="sb-cat" title="${m.word}">${m.face}</span>
      <div class="sb-info">
        <div class="sb-top"><span class="sb-num">🔥 ${streak}</span> day streak <span class="sb-dots">${dots}</span></div>
        <div class="sb-word">${m.word} &nbsp;·&nbsp; Best <b>${best}</b> 🏆</div>
      </div>`;
                box.hidden = false;
            }
            initDailyCraving();
            // one-time silent backfill so existing users get badges they already earned (no toast spam), then check for new ones
            try {
                if (!localStorage.getItem("fnc_badges_init")) {
                    checkAchievements(true);
                    localStorage.setItem("fnc_badges_init", "1");
                }
            } catch (e) {}
            checkAchievements(false);
    (function() {
        var b = document.getElementById('nxBar');
        if (!b) return;
        try {
            if (localStorage.getItem('nxBarHide') === '1') {
                b.remove();
                return;
            }
        } catch (e) {}
        document.getElementById('nxBarX').addEventListener('click', function() {
            b.remove();
            try {
                localStorage.setItem('nxBarHide', '1');
            } catch (e) {}
        });
    })();
            (function() {
                const ZH = {
                    // nav
                    "💱 Prices in": "💱 显示货币",
                    "Food hall": "美食广场",
                    "Recipes": "食谱",
                    "How it works": "玩法",
                    "About": "关于",
                    "Support us": "支持我们",
                    "📜 Orders": "📜 订单",
                    "❤️ Donate": "❤️ 打赏",
                    "📖 Recipes": "📖 食谱",
                    "🧠 Blog": "🧠 博客",
                    "💛 About": "💛 关于",
                    // deliver bar + hero
                    "DELIVER TO · 12 min": "送达地址 · 12 分钟",
                    "Home — find me food ▾": "家 — 帮我找吃的 ▾",
                    "Search 12 cuisines…": "搜索 12 国美食…",
                    "Search 12 cuisines...": "搜索 12 国美食…",
                    "🧠 a dopamine site · order &amp; never pay": "🧠 多巴胺小站 · 下单永不付款",
                    "🧠 a dopamine site · order & never pay": "🧠 多巴胺小站 · 下单永不付款",
                    "The original fake food delivery experience: browse mouth-watering dishes from 12 countries, fill your cart, check out, and watch a rider race to your door. The food never comes — but the dopamine does. ✨": "原版假外卖体验：浏览来自 12 个国家的诱人美食，装满购物车、结账，看骑手飞奔到你家门口。食物永远不会来——但多巴胺会。✨",
                    "Start craving 🍽️": "开始点餐 🍽️",
                    "⬇️ Install app": "⬇️ 安装到桌面",
                    "😋 or skip the wait — grab the free recipe →": "😋 等不及？拿走免费食谱 →",
                    "Follow": "关注",
                    "cravings satisfied · 0 spent · and counting 🧠": "次馋意已被满足 · 花费 0 · 持续增长 🧠",
                    "Free forever — 🧠 quitting a bad habit? try RewireHeaven": "永久免费 — 🧠 想戒掉坏习惯？试试 RewireHeaven",
                    // promos
                    "FREE delivery": "免配送费",
                    "no minimum · no catch": "无门槛 · 无套路",
                    "🛵 the food's free too (it's fake)": "🛵 食物也免费（因为是假的）",
                    // menu
                    "Step 01 · The (free) menu": "第一步 · （免费）菜单",
                    "World food hall 🌍": "世界美食广场 🌍",
                    "Spice it, top it, size it. Prices update live — and stay imaginary.": "选辣度、加配料、挑分量。价格实时更新——但永远是虚拟的。",
                    "🔥 Trending now": "🔥 正在热卖",
                    "what everyone's craving": "大家都在馋的",
                    "ADD": "加入",
                    // how it works
                    "Step 02 · The dopamine loop": "第二步 · 多巴胺循环",
                    "How the hit works 🧠": "快感从何而来 🧠",
                    "Three taps to a guilt-free reward.": "三步，无负担的快乐。",
                    "Fill your cart": "装满购物车",
                    "Pile on dishes from anywhere in the world. Customize every option. Watch the total climb — it's monopoly money.": "尽情添加来自世界各地的菜品，自定义每个选项，看着总价飙升——反正是虚拟货币。",
                    "“Pay” in one tap": "一键“付款”",
                    "Card details are pre-filled with a fake card. No account, no charge, no real number — ever.": "卡号已预填为虚拟卡。无需注册、不会扣款、永远不用真实卡号。",
                    "Track the rider": "追踪骑手",
                    "Get the live countdown and a delivery ping. Then “Delivered!” lands — and so does the dopamine.": "查看实时倒计时和送达提醒。当“已送达！”弹出时——多巴胺也随之而来。",
                    // support
                    "Still hungry? Make it yourself 🧑‍🍳": "还饿吗？自己动手做 🧑‍🍳",
                    "🍳 Browse all 121 free recipes →": "🍳 浏览全部 121 道免费食谱 →",
                    "Trying to quit something? 🧠": "想戒掉某个习惯？🧠",
                    "🧠 Visit RewireHeaven →": "🧠 去看看 RewireHeaven →",
                    "From the same corner of the internet: RewireHeaven is a free, anonymous app for quitting any bad habit — public pledges, streaks, and a 10-minute urge interceptor. No signup, no payment, no real names.": "来自同一个互联网角落：RewireHeaven 是一个免费匿名的戒瘾应用 — 公开承诺、连续打卡、10 分钟冲动拦截器。无需注册、无需付费、不用真名。",
                    "Read: why willpower is a losing bet →": "阅读：为什么光靠意志力注定失败 →",
                    "🧠 Try RewireHeaven": "🧠 试试 RewireHeaven",
                    // drawer + cart
                    "🍱 Your tray": "🍱 你的餐盘",
                    "Your tray is empty.": "你的餐盘是空的。",
                    "Go crave something!": "去馋点什么吧！",
                    "Subtotal": "小计",
                    "Delivery fee": "配送费",
                    "Taxes &amp; charges": "税费",
                    "Taxes & charges": "税费",
                    "To pay": "应付",
                    "To Pay": "应付",
                    // customize – descriptions
                    "Bold, saucy &amp; made to order.": "浓郁、酱香、现点现做。",
                    "Comforting, filling &amp; full of flavor.": "暖心、管饱、滋味十足。",
                    "A sweet little reward.": "甜甜的小奖励。",
                    "Light, fresh &amp; snackable.": "清爽、新鲜、随手就能吃。",
                    // customize – groups + options
                    "Spice": "辣度",
                    "Size": "分量",
                    "Add-on": "加料",
                    "Portion": "份量",
                    "Add": "附加",
                    "Topping": "配料",
                    "Extra": "额外",
                    "Mild": "微辣",
                    "Medium": "中辣",
                    "Spicy 🌶️": "辣 🌶️",
                    "Inferno 🔥": "超辣 🔥",
                    "Solo": "单人",
                    "Sharing": "分享装",
                    "None": "不加",
                    "Extra sauce": "加酱",
                    "Cheese 🧀": "芝士 🧀",
                    "Regular": "标准",
                    "Large": "大份",
                    "Just the dish": "只要主菜",
                    "Extra side": "加配菜",
                    "Make it a combo": "做成套餐",
                    "For one": "单人份",
                    "To share": "分享份",
                    "Classic": "经典",
                    "Extra fruit 🍓": "加水果 🍓",
                    "Ice cream 🍨": "加冰淇淋 🍨",
                    "Single": "单份",
                    "Double": "双份",
                    "Dipping sauce": "蘸酱",
                    "Make it spicy 🌶️": "加辣 🌶️",
                    // checkout
                    "🧾 Your order": "🧾 你的订单",
                    "Delivery": "配送",
                    "Total": "合计",
                    "🧾 Checkout": "🧾 结账",
                    "Deliver to Home": "送达到家",
                    "Change": "修改",
                    "Delivery in 25–35 min": "25–35 分钟送达",
                    "Standard · contactless drop available": "标准 · 可无接触配送",
                    "Bill details": "账单明细",
                    "Item total": "商品总额",
                    "Item discount": "商品折扣",
                    "🔒 Imaginary card · you are never charged": "🔒 虚拟卡 · 永不扣款",
                    "the food won't come — but the dopamine will 🧠": "食物不会来——但多巴胺会 🧠",
                    "← Back to tray": "← 返回餐盘",
                    "📍 Delivery address": "📍 配送地址",
                    "Cancel": "取消",
                    "Save address": "保存地址",
                    "FREE": "免费",
                    // tracking
                    "MIN": "分钟",
                    "Order confirmed": "订单已确认",
                    "Kitchen is cooking your food": "厨房正在烹饪",
                    "Rider picked up your order": "骑手已取餐",
                    "Almost at your door": "即将到达",
                    "WHILE YOU WAIT": "等待的时候",
                    "📸 Share your craving": "📸 分享你的馋意",
                    "✨ RARE ✨": "✨ 稀有 ✨",
                    "🛵 Send your rider a fun tip while you wait — it's imaginary, keep your money!": "🛵 等餐时给骑手来点有趣的小费吧——纯属虚拟，钱还是你的！",
                    "Can't wait? 🍳": "等不及？🍳",
                    "Still hungry? 🍳": "还饿吗？🍳",
                    "Tap a dish for the full recipe 🍳": "点击菜品查看完整食谱 🍳",
                    "Less than one takeaway to try · cancel anytime 🛵💨": "试一次还不到一份外卖钱 · 随时取消 🛵💨",
                    // delivered
                    "Delivered! …well, virtually 😋": "已送达！……好吧，是虚拟的 😋",
                    "Crisis averted. Wallet intact. 🧠🧡": "危机解除，钱包完好。🧠🧡",
                    "Order again 🍽️": "再点一次 🍽️",
                    "Done": "完成",
                    // recipe modal
                    "The food never came… so here's how to make it 🍳": "食物没有来……所以教你自己做 🍳",
                    "🛒 Grab": "🛒 备料",
                    "👩‍🍳 Make it": "👩‍🍳 开做",
                    "🍽️ Too hungry to cook? Order it instead →": "🍽️ 太饿不想做？直接下单 →",
                    // passport + badges
                    "🎒 Foodie Passport": "🎒 美食护照",
                    "🏅 Badges": "🏅 徽章",
                    "First Craving": "初次馋意",
                    "Regular ": "常客",
                    "On a Roll": "渐入佳境",
                    "7-Day Legend": "七日传奇",
                    "Globetrotter": "环球美食家",
                    "World Tour": "环游世界",
                    "Night Owl": "夜猫子",
                    "Sweet Tooth": "甜食控",
                    "Spice Lord": "嗜辣王",
                    "Lucky Catch": "幸运捕获",
                    "Courier Collector": "骑手收藏家",
                    // streak cat
                    "day streak": "天连胜",
                    "A kitten adopted you! Visit tomorrow to raise it 🐾": "一只小猫认领了你！明天再来把它养大 🐾",
                    "Your kitten is settling in 😌": "小猫正在适应 😌",
                    "Kitty's so happy you keep coming back!": "猫咪很开心你常回来！",
                    "A whole week — kitty LOVES you! 💗": "整整一周——猫咪超爱你！💗",
                    "Your cat is OBSESSED with you 💞": "你的猫已经离不开你了 💞",
                    "Streak royalty — your cat rules the kitchen! 👑": "连胜王者——你的猫掌管厨房！👑",
                    // footer
                    "All the dopamine of ordering, none of the spending. 🧠🧡": "点餐的全部多巴胺，零花费。🧠🧡",
                    "🍳 Free recipes for every dish": "🍳 每道菜都有免费食谱",
                    "🍽️ Order (it never comes)": "🍽️ 下单（永远不会来）",
                    "Privacy": "隐私",
                    "Terms": "条款",
                    "Contact": "联系我们",
                    // dish descriptions (decoded & — the rendered text node has "&", not "&amp;")
                    "Bold, saucy & made to order.": "浓郁、酱香、现点现做。",
                    "Comforting, filling & full of flavor.": "暖心、管饱、滋味十足。",
                    "Light, fresh & snackable.": "清爽、新鲜、随手就能吃。",
                    // badges + card bits
                    "🔥 HOT": "🔥 热门",
                    "✨ NEW": "✨ 新品",
                    "⭐ BEST": "⭐ 招牌",
                    "★ Bestseller": "★ 招牌热卖",
                    "📖 Recipe": "📖 食谱",
                    "Crave it →": "馋它 →",
                    // filters
                    "All 🍽️": "全部 🍽️",
                    "Mains 🍛": "主食 🍛",
                    "Street & snacks 🥟": "街头小吃 🥟",
                    "Street &amp; snacks 🥟": "街头小吃 🥟",
                    "Sweet 🍰": "甜点 🍰",
                    // orders bar
                    "View Orders 📜 ›": "查看订单 📜 ›",
                    "past order": "历史订单",
                    "past orders": "历史订单",
                    // courier lines
                    "speed-walking your order… ETA: eventually 🐢": "正大步走着送餐… 预计：迟早会到 🐢",
                    "SPRINTING 🥕💨 (might overshoot your house)": "狂奔中 🥕💨（可能冲过头）",
                    "left the kitchen… arriving in 3–5 business years": "已离开厨房… 预计 3–5 个工作年送达",
                    "got distracted by a cardboard box 📦, rerouting…": "被一个纸箱吸引了 📦，正在重新规划路线…",
                    "on the way! …saw another dog. brb 🐕": "在路上！…又看到一只狗。马上回来 🐕",
                    "floating over on his back, snack on his tummy": "仰躺着漂过来，零食放在肚皮上",
                    "has begun to consider moving 🦥": "已经开始考虑要不要动了 🦥",
                    "airborne! may detour for breadcrumbs": "已起飞！可能为面包屑绕个路",
                    "bee-lining straight to your door 🐝": "正笔直飞向你家门口 🐝",
                    "your food arrives slightly toasted 🔥": "你的餐会微微烤焦 🔥",
                    "beaming your order across the galaxy 👽": "正穿越银河传送你的订单 👽",
                    "delivering via rainbow 🌈": "正通过彩虹配送 🌈",
                    "reentry in 3… 2… 1… 🚀": "再入大气层 3… 2… 1… 🚀",
                    "taking the cleverest route 🦊": "正走最机智的路线 🦊",
                    "rolling downhill to save energy 🐼": "顺着下坡滚过来省力气 🐼",
                    "leaping puddle to puddle 🐸": "一个水坑一个水坑地跳过来 🐸",
                    "slow and prickly, but reliable 🦔": "慢吞吞刺乎乎，但很靠谱 🦔",
                    "sliding on his belly for max speed 🐧": "用肚皮滑行，追求极速 🐧",
                    "waddling with purpose 🦆": "摇摇摆摆但目标坚定 🦆",
                    "powered by one very fast wheel 🐹": "由一个转得飞快的轮子驱动 🐹",
                    "delivering with wisdom (and talons) 🦉": "用智慧（和爪子）配送 🦉",
                    "sprinkling flavor dust on the way ✨": "一路撒着美味魔法粉 ✨",
                    "making a splash with your order 🌊": "带着你的订单破浪而来 🌊",
                    "RAWR means 'food's coming' 🦖": "RAWR 的意思是“食物来了” 🦖",
                    "your wish is being delivered 🧞": "你的愿望正在配送中 🧞",
                    // dish names
                    "Bibimbap": "韩式拌饭",
                    "Tteokbokki": "辣炒年糕",
                    "Korean Fried Chicken": "韩式炸鸡",
                    "Japchae": "韩式杂菜",
                    "Kimbap": "紫菜包饭",
                    "Bingsu": "韩式刨冰",
                    "Bulgogi": "韩式烤牛肉",
                    "Sundubu Jjigae": "嫩豆腐汤",
                    "Samgyeopsal": "烤五花肉",
                    "Hotteok": "韩式糖饼",
                    "Cheeseburger": "芝士汉堡",
                    "Buffalo Wings": "水牛城辣鸡翅",
                    "Mac & Cheese": "芝士通心粉",
                    "Pancakes": "美式松饼",
                    "Hot Dog": "热狗",
                    "Apple Pie": "苹果派",
                    "BBQ Ribs": "烟熏烤肋排",
                    "Caesar Salad": "凯撒沙拉",
                    "Clam Chowder": "蛤蜊浓汤",
                    "Glazed Donuts": "糖霜甜甜圈",
                    "Sushi Platter": "寿司拼盘",
                    "Ramen": "拉面",
                    "Tonkatsu": "炸猪排",
                    "Takoyaki": "章鱼烧",
                    "Tempura": "天妇罗",
                    "Gyoza": "日式煎饺",
                    "Udon": "乌冬面",
                    "Onigiri": "饭团",
                    "Katsu Curry": "咖喱炸猪排饭",
                    "Mochi": "麻薯",
                    "Omakase": "主厨精选",
                    "🐱 Keep your kitten safe!": "🐱 保护你的小猫！",
                    "Add FoodNeverComes to your home screen — your streak and badges will never get lost.": "把 FoodNeverComes 添加到主屏幕——你的连续打卡和徽章永远不会丢失。",
                    "Tap the Share button below": "点击下方的分享按钮",
                    "Tap \"Add to Home Screen\"": "点击“添加到主屏幕”",
                    "Got it!": "知道了！",
                    "🐱 One quick step first": "🐱 先做一小步",
                    "This in-app browser can't install apps.": "应用内浏览器无法安装应用。",
                    "Tap ⋯ at the top right": "点击右上角的 ⋯",
                    "Choose \"Open in external browser\"": "选择“在浏览器中打开”",
                    "Then tap Install app again": "然后再点一次“安装应用”",
                    "Butter Chicken": "黄油鸡",
                    "Biryani": "印度香饭",
                    "Masala Dosa": "玛萨拉多萨",
                    "Samosa": "咖喱角",
                    "Paneer Tikka": "印式烤奶酪",
                    "Gulab Jamun": "玫瑰蜜糖球",
                    "Chole Bhature": "鹰嘴豆配炸饼",
                    "Palak Paneer": "菠菜奶酪",
                    "Pani Puri": "印度脆球",
                    "Jalebi": "印度糖耳朵",
                    "Croissant": "牛角包",
                    "Croque Monsieur": "法式火腿芝士三明治",
                    "Ratatouille": "普罗旺斯杂烩",
                    "Crepe": "可丽饼",
                    "Macarons": "马卡龙",
                    "Quiche": "法式咸派",
                    "Beef Bourguignon": "勃艮第红酒炖牛肉",
                    "French Onion Soup": "法式洋葱汤",
                    "Baguette Sandwich": "法棍三明治",
                    "Éclair": "闪电泡芙",
                    "Margherita Pizza": "玛格丽特披萨",
                    "Carbonara": "奶油培根意面",
                    "Lasagne": "千层面",
                    "Risotto": "意式烩饭",
                    "Tiramisu": "提拉米苏",
                    "Gelato": "意式手工冰淇淋",
                    "Spaghetti Bolognese": "博洛尼亚肉酱意面",
                    "Bruschetta": "意式烤面包片",
                    "Gnocchi": "意式土豆团子",
                    "Cannoli": "西西里奶酪卷",
                    "Tacos": "塔可",
                    "Burrito": "墨西哥卷饼",
                    "Quesadilla": "芝士夹饼",
                    "Guacamole": "牛油果酱",
                    "Enchiladas": "安吉拉达卷",
                    "Churros": "吉事果",
                    "Nachos": "墨西哥玉米片",
                    "Tamales": "墨西哥玉米粽",
                    "Elote": "墨西哥烤玉米",
                    "Flan": "焦糖布丁",
                    "Feijoada": "巴西黑豆炖肉",
                    "Pao de Queijo": "巴西芝士球",
                    "Brigadeiro": "巴西巧克力球",
                    "Coxinha": "巴西炸鸡丸",
                    "Moqueca": "巴西海鲜炖菜",
                    "Acai Bowl": "巴西莓果碗",
                    "Picanha": "巴西烤牛肉",
                    "Pastel": "巴西炸饺",
                    "Churrasco": "巴西烤肉",
                    "Quindim": "椰香蛋黄糕",
                    "Pad Thai": "泰式炒河粉",
                    "Green Curry": "青咖喱",
                    "Tom Yum": "冬阴功汤",
                    "Mango Sticky Rice": "芒果糯米饭",
                    "Som Tam": "青木瓜沙拉",
                    "Massaman Curry": "玛莎曼咖喱",
                    "Spring Rolls": "春卷",
                    "Thai Fried Rice": "泰式炒饭",
                    "Chicken Satay": "沙嗲鸡肉串",
                    "Thai Iced Tea": "泰式冰奶茶",
                    "Bratwurst": "德式香肠",
                    "Schnitzel": "炸肉排",
                    "Currywurst": "咖喱香肠",
                    "Pretzel": "德式扭结面包",
                    "Sauerbraten": "德式炖牛肉",
                    "Black Forest Cake": "黑森林蛋糕",
                    "Käsespätzle": "芝士面疙瘩",
                    "Rouladen": "德式牛肉卷",
                    "Frankfurter": "法兰克福肠",
                    "Apple Strudel": "苹果卷",
                    "Dumplings": "饺子",
                    "Kung Pao Chicken": "宫保鸡丁",
                    "Sweet & Sour Pork": "糖醋里脊",
                    "Chow Mein": "炒面",
                    "Fried Rice": "炒饭",
                    "Peking Duck": "北京烤鸭",
                    "Mapo Tofu": "麻婆豆腐",
                    "Steamed Bao Buns": "包子",
                    "Egg Tart": "蛋挞"
                };
                const ZH_RX = [[/^Arriving in ~(\d+) min$/, "约 $1 分钟后送达"], [/^Add (\d+) · (.+)$/, "加入 $1 · $2"], [/^Proceed to Checkout · (.+) 🚀$/, "去结账 · $1 🚀"], [/^Place Order · (.+) 🎉$/, "下单 · $1 🎉"], [/^Pay with •••• (.+)$/, "使用 •••• $1 付款"], [/^(.+) is on the way$/, "$1 正在路上"], [/^🏆 Cuisines collected · (\d+)\/(\d+)$/, "🏆 已收集菜系 · $1/$2"], [/^Order from (\d+) more to collect them all! 🌍$/, "再点 $1 个就能全部集齐！🌍"], [/^🃏 Couriers caught: (\d+)\/(\d+) →$/, "🃏 已捕获骑手：$1/$2 →"], [/^(\d+) days in a row — don't break it!$/, "连续 $1 天——别断了！"], [/^🎉 You saved (.+) on this order — and you'll pay (.+)$/, "🎉 本单已省 $1 —— 你只需支付 $2"], [/^(\d+)% OFF$/, "立减 $1%"], [/^(\d+) min$/, "$1 分钟"], [/^🛵 (\d+)[–-](\d+) min ·$/, "🛵 $1–$2 分钟 ·"]];
                const ZH_SUB = [// substrings inside a larger node (greeting, "{flag} {cuisine} kitchen", "📍 {courier} {event}")
                ["Craving something?", "想吃点什么？"], ["Korean kitchen", "韩国厨房"], ["American kitchen", "美式厨房"], ["Japanese kitchen", "日本厨房"], ["Indian kitchen", "印度厨房"], ["French kitchen", "法式厨房"], ["Italian kitchen", "意大利厨房"], ["Mexican kitchen", "墨西哥厨房"], ["Brazilian kitchen", "巴西厨房"], ["Thai kitchen", "泰国厨房"], ["German kitchen", "德式厨房"], ["Chinese kitchen", "中式厨房"], ["stuck at a red light that doesn't exist 🚦", "卡在了一个不存在的红灯前 🚦"], ["paused to admire a passing snail 🐌", "停下来欣赏路过的蜗牛 🐌"], ["got distracted by a cardboard box 📦", "被一个纸箱吸引了 📦"], ["took shelter from imaginary rain 🌧️", "躲起来避想象中的雨 🌧️"], ["your food is judging your life choices 🥡", "你的食物正在评判你的人生选择 🥡"], ["honking at a duck crossing the road 🦆", "对着过马路的鸭子按喇叭 🦆"], ["took a 'shortcut' (it was not shorter) 🧭", "抄了条“近路”（其实更远）🧭"], ["a fry tried to escape — recaptured 🍟", "一根薯条想逃跑——已被抓回 🍟"], ["quick power nap. for science. 😴", "快速打个盹，为了科学。😴"], ["stopped for a selfie with your order 📸", "停下来和你的订单自拍 📸"], ["arrived at the restaurant", "已到达餐厅"], ["picked up your order", "已取到你的订单"], ["waiting outside the kitchen, sniffing the air 👃", "在厨房门口等着，使劲闻香味 👃"], ["the chef is doing a dramatic taste test 👨‍🍳", "大厨正在戏剧性地试味 👨‍🍳"], ["heard your food sizzling through the door 🔥", "隔着门都听到你的餐在滋滋作响 🔥"], ["practicing the handoff so nothing spills 🤹", "正在练习交接动作，保证不洒 🤹"], ["peeking through the kitchen window 👀", "正扒着厨房窗户偷看 👀"], ["the chef added a secret ingredient (it's love) 💛", "大厨加了神秘配料（是爱）💛"], ["helmet on. mirror check. still waiting. ⛑️", "头盔戴好。照过镜子。还在等。⛑️"], ["stretching for the ride of their life 🧘", "正在拉伸，准备此生最重要的一程 🧘"], ["arguing with another courier about the best route 🗺️", "和另一位骑手争论哪条路线最快 🗺️"], ["your sauce is getting its final swirl 🥣", "你的酱汁正在做最后的搅拌 🥣"], ["plating… replating… perfecting 🍽️", "摆盘…重新摆盘…追求完美 🍽️"], ["the kitchen smells so good they teared up 🥲", "厨房太香了，骑手都感动哭了 🥲"], ["double-checking: extra napkins? extra napkins. 🧻", "反复确认：多拿纸巾了吗？拿了。🧻"], ["the chef high-fived them. it's almost time 🙌", "大厨和骑手击了个掌。快好了 🙌"], ["waved at a grandma. she waved back 👵", "向一位奶奶挥手。奶奶也挥了 👵"], ["drafting behind a city bus for speed 🚌", "跟在公交车后面借风提速 🚌"], ["singing your order a little song 🎶", "正在给你的订单唱小曲 🎶"], ["hit every green light — suspiciously lucky 🍀", "一路绿灯——运气好得可疑 🍀"], ["checked the bag. everything's still delicious ✅", "检查了餐袋。一切依然美味 ✅"], ["raced a kid on a tricycle. lost. 🚲", "和骑三轮车的小孩比赛。输了。🚲"], ["your drink did a little slosh. handled it. 🥤", "你的饮料晃了一下。稳住了。🥤"], ["took the scenic route (accidentally) 🌆", "走了观光路线（不小心的）🌆"], ["pigeons demanded a toll. negotiated. 🕊️", "鸽子拦路收费。谈妥了。🕊️"], ["did a totally unnecessary but cool drift 🏍️", "来了个毫无必要但很帅的漂移 🏍️"], ["smelled your food. stayed strong. 💪", "闻到了你的餐。忍住了。💪"], ["got complimented on their helmet 🪖", "头盔被路人夸了 🪖"], ["a cat is now following the delivery 🐈", "一只猫加入了配送队伍 🐈"], ["jumped a puddle like an action movie 🎬", "像动作片一样飞跃水坑 🎬"], ["your food waved at another order's food 👋", "你的食物和别人的订单打了个招呼 👋"], ["reading the menu like it's a thriller 📖", "像读悬疑小说一样研究菜单 📖"], ["the wok just did a backflip 🍳", "炒锅刚翻了个后空翻 🍳"], ["gave the chef a thumbs up through the glass 👍", "隔着玻璃给大厨点了个赞 👍"], ["guarding your order from other hungry couriers 🛡️", "正在保护你的订单不被其他饿骑手觊觎 🛡️"], ["the fries are getting their golden tan 🍟", "薯条正在晒出金黄色 🍟"], ["someone said 'extra crispy' and the kitchen cheered 🎉", "有人喊了句“要特脆”，全厨房都欢呼了 🎉"], ["your order smells better than their weekend plans 🌟", "你的订单闻起来比骑手的周末计划还香 🌟"], ["polishing the delivery box like a trophy 🏆", "把外卖箱擦得像奖杯一样亮 🏆"], ["the soup is doing tiny happy bubbles 🫧", "汤正冒着开心的小泡泡 🫧"], ["chef whispered 'this one's special' 🤫", "大厨小声说：“这单很特别” 🤫"], ["the rice is getting fluffed to perfection 🍚", "米饭正被打松到完美状态 🍚"], ["chef tasted it. chef smiled. 😊", "大厨尝了一口。大厨笑了。😊"], ["your order just got a pep talk 💬", "你的订单刚接受了赛前动员 💬"], ["the onions are caramelizing dramatically 🧅", "洋葱正在戏剧性地焦糖化 🧅"], ["someone rang the 'order up' bell early. chaos. 🔔", "有人提前敲了出餐铃。全乱了。🔔"], ["the garlic hit the pan — the whole street knows 🧄", "蒜下锅了——整条街都知道了 🧄"], ["courier is doing warm-up laps around the block 🏃", "骑手正绕着街区做热身跑 🏃"], ["the sauce is being stirred counterclockwise (secret) 🌀", "酱汁正被逆时针搅拌（秘方）🌀"], ["chef is plating like it's a cooking show finale 📺", "大厨摆盘摆得像烹饪节目总决赛 📺"], ["the steam curled into a little heart 💨", "蒸汽卷成了一个小爱心 💨"], ["courier just learned your order by heart 🧠", "骑手已经把你的订单背下来了 🧠"], ["the pan did a little flame trick 🔥", "锅刚表演了个火焰小魔术 🔥"], ["extra sauce packet secured 🎒", "额外酱包已确保到位 🎒"], ["the kitchen radio is playing bangers 📻", "厨房的收音机正放着神曲 📻"], ["chef's hat fell off from pure passion 👨‍🍳", "大厨的帽子因为太投入而掉了 👨‍🍳"], ["your order is the kitchen's favorite today 🏅", "你的订单是厨房今天的最爱 🏅"], ["courier is guarding the pickup shelf like a hawk 🦅", "骑手像老鹰一样盯着取餐架 🦅"], ["the cheese is melting in slow motion 🧀", "芝士正在慢动作融化 🧀"], ["a taste-test spoon was deployed 🥄", "试味勺已出动 🥄"], ["the whole kitchen did a group high-five 🙌", "全厨房集体击掌 🙌"], ["your order got double-wrapped for the journey 🎁", "你的订单被双层包装护航 🎁"], ["courier is reading the address like a treasure map 🗺️", "骑手正像看藏宝图一样研究地址 🗺️"], ["the chili count was triple-checked 🌶️", "辣椒数量已三次核对 🌶️"], ["the grill marks are perfectly parallel 📏", "烤痕完美平行 📏"], ["chef whispered good luck to your food 🍀", "大厨对你的食物说了声好运 🍀"], ["the lid was lifted for a dramatic sniff 👃", "锅盖被掀开，深深闻了一口 👃"], ["your order is being seasoned from a great height 🧂", "你的订单正被从高处撒盐调味 🧂"], ["courier is polishing their horn. beep beep. 📯", "骑手在擦喇叭。滴滴。📯"], ["the kitchen door swung open dramatically 🚪", "厨房门戏剧性地弹开了 🚪"], ["your food is getting a warm blanket of foil 🛌", "你的食物盖上了温暖的锡纸小被子 🛌"], ["the fryer just applauded 👏", "炸锅刚刚鼓掌了 👏"], ["chef is naming the dumplings. don't get attached. 🥟", "大厨在给饺子起名字。别有感情。🥟"], ["courier practiced saying your name 🗣️", "骑手练习了一下怎么念你的名字 🗣️"], ["the broth has reached maximum coziness 🍲", "汤已达到最高治愈度 🍲"], ["a rogue pea was recaptured 🫛", "一颗逃跑的豌豆已被抓回 🫛"], ["your order passed quality control with honors 🎓", "你的订单以优异成绩通过质检 🎓"], ["the kitchen cat inspected the bag (approved) 🐈", "厨房的猫检查了餐袋（已批准）🐈"], ["courier is stretching their thumbs for the doorbell 👍", "骑手在给按门铃的大拇指做拉伸 👍"], ["the noodles passed the wall-throw test (kidding) 🍝", "面条通过了甩墙测试（开玩笑的）🍝"], ["chef did the pan flip. everyone clapped. 👏", "大厨表演了颠锅。全场鼓掌。👏"], ["your order is being escorted to the counter 💂", "你的订单正被护送到取餐台 💂"], ["the bag got a little sticker of approval 🏷️", "餐袋得到了一枚小小的认证贴纸 🏷️"], ["courier zipped their jacket. it's serious now. 🧥", "骑手拉上了外套拉链。要动真格了。🧥"], ["the kitchen timer is doing its final countdown ⏲️", "厨房计时器进入最后倒计时 ⏲️"], ["your sauce got a bodyguard 🕶️", "你的酱汁配了一名保镖 🕶️"], ["the herbs were sprinkled like confetti 🎊", "香草像彩纸一样被撒下 🎊"], ["chef checked the order twice, like santa 🎅", "大厨像圣诞老人一样把订单查了两遍 🎅"], ["the wok is singing its victory song 🎵", "炒锅正唱着胜利之歌 🎵"], ["courier's scooter is warming up: vroom vroom 🛵", "骑手的小电驴在热身：呜呜 🛵"], ["your order just took its graduation photo 📸", "你的订单刚拍完毕业照 📸"], ["the napkins are folded like tiny swans 🦢", "纸巾被叠成了小天鹅 🦢"], ["chef gave the plate a tiny kiss (hygienically) 😘", "大厨隔空亲了一下盘子（很卫生）😘"], ["your food is doing final stretches 🧘", "你的食物在做最后的拉伸 🧘"], ["the oven made a happy ding 🛎️", "烤箱开心地叮了一声 🛎️"], ["courier triple-knotted their shoelaces 👟", "骑手把鞋带打了三重结 👟"], ["the soup got one last loving stir 🥣", "汤得到了最后一次深情搅拌 🥣"], ["your order's aroma has its own fan club now 🌬️", "你订单的香气已经有粉丝团了 🌬️"], ["the courier and the chef fist-bumped. it's time. 👊", "骑手和大厨碰了拳。时间到了。👊"], ["chef is guarding the recipe with their life 🔐", "大厨在用生命守护配方 🔐"], ["your order was declared 'too beautiful to cover' 😭", "你的订单被评为“美到不忍心盖盖子” 😭"], ["the courier saluted the chef. the chef saluted back. 🫡", "骑手向大厨敬礼。大厨回礼。🫡"], ["breaking: your food smells incredible 📰", "突发：你的食物香得离谱 📰"], ["the sesame seeds landed perfectly. all of them. 🎯", "芝麻粒全部完美落位。一粒不差。🎯"], ["your order is riding the counter like a VIP 🛄", "你的订单像 VIP 一样滑过取餐台 🛄"], ["the kitchen's plants leaned in to look 🪴", "厨房的绿植都凑过来看了 🪴"], ["chef says it needs one more minute of love ⏳", "大厨说还需要多一分钟的爱 ⏳"], ["the spice dial was set to 'just right' 🎚️", "辣度旋钮已调到“刚刚好” 🎚️"], ["your drink is getting its ice counted 🧊", "你的饮料正在被数冰块 🧊"], ["a spoon was licked. a new spoon was fetched. 🥄", "有人舔了勺子。已换新勺子。🥄"], ["the courier's bag is preheated for maximum coziness 🔥", "骑手的保温箱已预热到最舒适温度 🔥"], ["your order made the dishwasher jealous 🍽️", "你的订单让洗碗机都嫉妒了 🍽️"], ["the chef hummed. that means it's perfect. 🎼", "大厨哼歌了。那代表完美。🎼"], ["your food is posing for the kitchen's wall of fame 🖼️", "你的食物正在为厨房荣誉墙拍照 🖼️"], ["the garnish landed like a tiny crown 👑", "点缀像一顶小王冠一样落下 👑"], ["courier checked the weather: 100% chance of delicious 🌤️", "骑手查了天气：100% 概率美味 🌤️"], ["the kitchen lights dimmed for the final plating 💡", "厨房调暗了灯光，进行最终摆盘 💡"], ["overtook a pizza guy. personal victory. 🍕", "超了个送披萨的。个人的胜利。🍕"], ["the GPS said 'trust me' 🤖", "导航说：“相信我” 🤖"], ["your food is enjoying the breeze 🌬️", "你的食物正在享受微风 🌬️"], ["stopped to let ducklings cross. worth it. 🐥", "停下来让小鸭子过马路。值了。🐥"], ["a traffic cone had it out for them 🚧", "一个路锥跟骑手过不去 🚧"], ["took a speed bump with grace and style 🦢", "优雅而潇洒地过了减速带 🦢"], ["the wind is doing 20% of the work 🌪️", "风承担了 20% 的工作量 🌪️"], ["high-fived a kid at a crosswalk ✋", "在斑马线和小朋友击了个掌 ✋"], ["your noodles are doing tiny wiggles 🍜", "你的面条正在轻轻晃动 🍜"], ["found a shortcut. a real one this time. ⚡", "找到一条近路。这次是真的。⚡"], ["got cheered on by a street cat 🐱", "被一只流浪猫加油打气 🐱"], ["dodged a rogue shopping cart 🛒", "躲过了一辆失控的购物车 🛒"], ["the moon is watching over your order 🌙", "月亮正守护着你的订单 🌙"], ["practiced the doorbell speech: 'enjoy!' 🎤", "练习按门铃时要说的话：“请慢用！” 🎤"], ["your order got a compliment from a stranger 😌", "你的订单被路人夸了 😌"], ["small wheelie for morale 🤸", "翘了个小前轮，鼓舞士气 🤸"], ["the streetlights are turning on just for them ✨", "路灯为骑手一盏盏亮起 ✨"], ["carried your order like royalty 👑", "像捧着王室餐点一样捧着你的订单 👑"], ["almost took the wrong turn. almost. 😅", "差点拐错弯。差点。😅"], ["told your food a secret. it's safe. 🤐", "跟你的食物说了个秘密。放心，保密。🤐"], ["spotted their girlfriend on the way 💃", "在路上看到了女朋友 💃"], ["quick hug. very quick. okay bye! 🤗", "快速抱了一下。非常快。好了再见！🤗"], ["back on the road, blushing 😊", "重新上路，脸还红着 😊"], ["oh no — it's their mom 👵", "糟了——是骑手的妈妈 👵"], ["getting scolded for wasting time 😤", "正因为浪费时间挨骂 😤"], ["promised to visit on sunday. released. 🙏", "保证周日回家看她。放行了。🙏"], ["pulled over somewhere quiet… 🤫", "在安静的角落停了下来… 🤫"], ["wait — are they eating a fry?! 🍟", "等等——他是在偷吃薯条吗？！🍟"], ["'just checking freshness.' sure. 😒", "“只是检查一下新鲜度。”信你才怪。😒"], ["a very good boy demands pets 🐶", "一只超乖的狗狗要求摸摸 🐶"], ["petting break (mandatory) 🫴", "撸狗休息（强制的）🫴"], ["the dog approves your order. onward! ✅", "狗狗批准了你的订单。继续出发！✅"], ["pulled over by the snack police 👮", "被零食警察拦下了 👮"], ["license and delivery registration, please 📋", "请出示驾照和外卖运送证 📋"], ["let off with a warning: 'drive deliciously' ✅", "警告后放行：“请美味驾驶” ✅"], ["a rival courier appeared — same species, old grudge 😠", "宿敌骑手出现了——同一物种，旧仇未了 😠"], ["added to tray", "已加入托盘"], ["Tap ingredients to tick them off ✔️", "点击食材即可打勾 ✔️"], ["on the way — tap to track", "配送中——点击追踪"], ["tap to open your order", "点击查看你的订单"], ["Arrived!", "已送达！"], ["Past cravings", "历史订单"], ["negotiating with a very slow crosswalk signal 🚸", "正在和一个超慢的人行灯谈判 🚸"], ["a pigeon is riding shotgun now 🐦", "一只鸽子坐上了副驾 🐦"], ["overtook two buses and a dream 🚌", "超过了两辆公交和一个梦想 🚌"], ["obeying the speed limit heroically 🚓", "英勇地遵守着限速 🚓"], ["a roundabout tried to keep them forever 🌀", "一个环岛想把骑手永远留下 🌀"], ["found the one pothole. survived. 🕳️", "找到了那个唯一的坑。活下来了。🕳️"], ["waved at a traffic camera 📷", "对着交通摄像头挥了挥手 📷"], ["the crossing guard gave them a nod of respect 🫡", "交通协管员向骑手致敬点头 🫡"], ["took the bridge for the view 🌉", "为了风景特意走了桥 🌉"], ["a taxi honked. they honked back louder. 📢", "出租车按了喇叭。骑手按得更响。📢"], ["entered the street of good smells 🌮", "进入了香味一条街 🌮"], ["the alley cat gave directions. trusting it. 🐈‍⬛", "巷子里的猫指了路。选择相信。🐈‍⬛"], ["two green lights in a row. unstoppable. 🟢", "连续两个绿灯。势不可挡。🟢"], ["a sprinkler tried its best. missed. 💦", "洒水器尽力了。没喷到。💦"], ["the town clock chimed. very cinematic. 🕰️", "城市钟声敲响。非常电影感。🕰️"], ["took the cobblestone street — bumpy but stylish 🧱", "走了石板路——颠簸但有型 🧱"], ["a balloon floated by. didn't follow it. growth. 🎈", "一只气球飘过。没有跟着走。成长了。🎈"], ["your order is now on the fast road 🛣️", "你的订单驶上了快速路 🛣️"], ["night mode activated: headlight ON 🔦", "夜间模式启动：车灯已开 🔦"], ["a street performer juggled. they juggled respect back. 🤹", "街头艺人抛了球。骑手回抛了敬意。🤹"], ["the fountain splashed a little too close ⛲", "喷泉溅得有点太近了 ⛲"], ["leaned into a corner like a movie star 🎥", "像电影明星一样压弯过弯 🎥"], ["a bakery tried to lure them in. resisted. 🥐", "一家面包店试图引诱骑手。忍住了。🥐"], ["the wind changed. dramatic scarf moment. 🧣", "风向变了。围巾戏剧性地飘起。🧣"], ["passing the flower market — smells confusing now 💐", "路过花市——现在气味有点混乱 💐"], ["a skateboarder nodded. they nodded back. 🛹", "滑板少年点了头。骑手也点了头。🛹"], ["your order just crossed the river 🌊", "你的订单刚过了河 🌊"], ["another light turned green just for them 🚦", "又一个灯专门为骑手变绿了 🚦"], ["took the tunnel. echoed a happy yell. 📣", "穿过隧道。开心地喊了一嗓子有回声。📣"], ["avoided the street with all the stairs 🪜", "避开了全是台阶的那条街 🪜"], ["a squirrel is pacing them. it's not a race. it's a race. 🐿️", "一只松鼠在跟骑手并排跑。不是比赛。就是比赛。🐿️"], ["three ducks saluted from the pond 🦆", "三只鸭子在池塘边行礼 🦆"], ["a golden retriever believes in them 🐕", "一只金毛坚定地相信着骑手 🐕"], ["the neighborhood owl approved this delivery 🦉", "社区猫头鹰批准了这单配送 🦉"], ["a butterfly landed on the bag. +10 style 🦋", "一只蝴蝶落在餐袋上。时尚值+10 🦋"], ["a hedgehog waved from a bush 🦔", "一只刺猬从灌木丛里挥手 🦔"], ["the pigeons formed an escort squad 🐦", "鸽子们组成了护卫队 🐦"], ["a snail cheered. it took a while. 🐌", "一只蜗牛欢呼了。用了好一会儿。🐌"], ["a cat judged them from a window. normal. 🐱", "一只猫从窗口审视骑手。正常操作。🐱"], ["a frog gave a thumbs up (somehow) 🐸", "一只青蛙竖了个大拇指（不知道怎么做到的）🐸"], ["a horse said 'neigh'. they said 'yes'. 🐴", "一匹马说“嘶”。骑手说“对”。🐴"], ["bees checked the order for honey. none. moved on. 🐝", "蜜蜂检查了订单有没有蜂蜜。没有。飞走了。🐝"], ["a seagull eyed the fries. DENIED. 🦅", "一只海鸥盯上了薯条。被拒绝。🦅"], ["a turtle offered a shortcut. politely declined. 🐢", "一只乌龟提议抄近路。礼貌拒绝了。🐢"], ["a firefly is lighting the way ✨", "一只萤火虫在前面照路 ✨"], ["a fox winked from the alley 🦊", "一只狐狸在巷口眨了眨眼 🦊"], ["a puppy chased them for two blocks of joy 🐶", "一只小狗开心地追了两个街区 🐶"], ["a parrot repeated the delivery address. helpful! 🦜", "一只鹦鹉复述了配送地址。帮大忙了！🦜"], ["a raccoon offered to 'hold' the bag. no. 🦝", "一只浣熊主动要“帮忙拿”餐袋。不行。🦝"], ["a swan escort through the park. majestic. 🦢", "天鹅护送穿过公园。气势非凡。🦢"], ["a chipmunk cheered with full cheeks 🐿️", "一只花栗鼠鼓着腮帮子欢呼 🐿️"], ["a lizard did a push-up in support 🦎", "一只蜥蜴做了个俯卧撑以示支持 🦎"], ["a crab walked alongside. sideways. obviously. 🦀", "一只螃蟹并排走着。横着走。当然。🦀"], ["an ant colony gave way. respect. 🐜", "蚂蚁大军让了路。敬意。🐜"], ["a goat ate a flyer about your order 🐐", "一只山羊吃掉了关于你订单的传单 🐐"], ["your dumplings are cuddling for warmth 🥟", "你的饺子们正抱团取暖 🥟"], ["the sauce packet is doing sudoku 🧩", "酱包正在做数独 🧩"], ["your fries organized a tiny choir 🍟", "你的薯条组了一个小合唱团 🍟"], ["the rice is holding its shape out of pride 🍚", "米饭出于骄傲保持着形状 🍚"], ["your soup is practicing being calm 🧘", "你的汤正在练习保持平静 🧘"], ["the chopsticks are having a sword fight ⚔️", "筷子们正在比剑 ⚔️"], ["your dessert is saving itself for last. discipline. 🍰", "你的甜点把自己留到最后。自律。🍰"], ["the napkins are ready for anything 🧻", "纸巾已做好万全准备 🧻"], ["your drink's ice is telling cool stories 🧊", "你饮料里的冰块在讲很酷的故事 🧊"], ["the fortune cookie already knows how this ends 🥠", "幸运饼干早就知道结局了 🥠"], ["your noodles measured themselves: still long 📏", "你的面条量了量自己：还是很长 📏"], ["the garlic bread is radiating confidence 🥖", "蒜香面包散发着自信 🥖"], ["your salad is staying crisp under pressure 🥗", "你的沙拉顶住压力保持爽脆 🥗"], ["the cheese stretched. just to show off. 🧀", "芝士拉丝了。纯属炫技。🧀"], ["your taco is holding it together. barely. 🌮", "你的塔可正在努力不散架。勉强撑住。🌮"], ["the wasabi is plotting something. stay alert. 🟢", "芥末在密谋什么。保持警惕。🟢"], ["your spring rolls rolled a little tighter 😤", "你的春卷把自己卷得更紧了 😤"], ["the lemon wedge is feeling zesty 🍋", "柠檬角感觉很有活力 🍋"], ["your curry is humming with flavor 🍛", "你的咖喱正哼着风味小曲 🍛"], ["the sushi is meditating in formation 🍣", "寿司正列队冥想 🍣"], ["your pizza slices are holding hands 🍕", "你的披萨切片们手牵着手 🍕"], ["the hot sauce asked for a seatbelt 🌶️", "辣酱要求系安全带 🌶️"], ["your bao buns are extra fluffy today ☁️", "你的包子今天格外蓬松 ☁️"], ["feeling like the main character right now 🎬", "此刻感觉自己是主角 🎬"], ["hummed your order's theme song 🎵", "哼起了你订单的主题曲 🎵"], ["did mental math: worth it. 🧮", "心算了一下：值得。🧮"], ["remembered your street from a dream 💭", "在梦里见过你这条街 💭"], ["made a promise to the wind: no delays 🌬️", "向风许诺：绝不迟到 🌬️"], ["their cape (jacket) is flapping heroically 🦸", "骑手的披风（外套）英勇地飘着 🦸"], ["practiced a cool arrival pose 🕺", "练习了一个很酷的到达姿势 🕺"], ["gave themselves a pep talk. it worked. 💪", "给自己打了打气。起作用了。💪"], ["is 100% focused. 10% distracted. math unclear. 🤔", "100% 专注。10% 分心。数学不太对。🤔"], ["saw their reflection. winked. 😉", "看到了自己的倒影。眨了下眼。😉"], ["whispered 'almost there' to the bag 🤫", "对餐袋轻声说“快到了” 🤫"], ["took a deep breath of victory air 😤", "深吸了一口胜利的空气 😤"], ["is telling your order about the neighborhood 🏘️", "正在给你的订单介绍这个街区 🏘️"], ["feels the dopamine building. yours AND theirs. 🧠", "感觉多巴胺在积累。你的和骑手的。🧠"], ["rehearsed the handoff: smooth as butter 🧈", "排练了交接动作：丝般顺滑 🧈"], ["decided today is a good day 🌞", "决定今天是个好日子 🌞"], ["gave a thumbs up to no one in particular 👍", "对着空气竖了个大拇指 👍"], ["is riding with excellent posture. very rare. 🪑", "骑行姿势非常标准。极其罕见。🪑"], ["counted the blocks left: not many! 🔢", "数了数剩下的街区：不多了！🔢"], ["unlocked personal best: smoothest left turn 🏆", "解锁个人最佳：最丝滑左转 🏆"], ["a cloud shaped like your order floated by ☁️", "一朵长得像你订单的云飘过 ☁️"], ["the sunset is doing its best work 🌇", "晚霞正在拿出最好的状态 🌇"], ["riding through golden hour like a postcard 🌅", "像明信片一样穿行在黄金时刻 🌅"], ["a rainbow appeared. taking full credit. 🌈", "彩虹出现了。骑手揽下全部功劳。🌈"], ["dodged exactly one (1) leaf 🍂", "精准躲过了一（1）片落叶 🍂"], ["the breeze smells like dinner time 🌆", "微风里有晚饭的味道 🌆"], ["stars are aligning. literally. ⭐", "星星正在排成一线。字面意义上。⭐"], ["the moonlight is following them home 🌙", "月光一路跟着骑手回家 🌙"], ["a puddle reflected their determination 💧", "一个水坑倒映出骑手的决心 💧"], ["fog rolled in. dramatic entrance secured. 🌫️", "起雾了。戏剧性登场已锁定。🌫️"], ["the streetlamps flickered hello 💡", "路灯闪了闪打招呼 💡"], ["wind at their back — nature approves 🍃", "顺风了——大自然表示认可 🍃"], ["it almost rained. it apologized. 🌦️", "差点下雨。雨道歉了。🌦️"], ["a snowflake landed and instantly melted. summer. ❄️", "一片雪花落下并立刻融化。夏天。❄️"], ["thunder grumbled far away. not today. ⛈️", "雷声在远处嘟囔。今天不行。⛈️"], ["the GPS rerouted. they ignored it. correct call. 🗺️", "导航重新规划了路线。骑手无视了。判断正确。🗺️"], ["phone at 1%? the mission continues 🔋", "手机只剩 1%？任务继续 🔋"], ["the map app said 'wow, nice pace' 📱", "地图 App 说“哇，好快的配速” 📱"], ["bluetooth connected to pure determination 🎧", "蓝牙连接到了纯粹的决心 🎧"], ["the ETA improved. witnesses everywhere. ⏱️", "预计送达时间提前了。众目睽睽。⏱️"], ["took a shortcut the algorithm fears 🤖", "抄了一条算法都害怕的近路 🤖"], ["airplane mode? no. delivery mode. ✈️", "飞行模式？不。配送模式。✈️"], ["the speedometer blushed 😳", "速度表都脸红了 😳"], ["traffic report: everyone else. not them. 📻", "路况报告：堵的是别人。不是骑手。📻"], ["their smartwatch says 'legend' ⌚", "骑手的智能手表显示“传奇” ⌚"], ["passed a mirror shop. 12 riders waved. 🪞", "路过镜子店。12 个骑手同时挥手。🪞"], ["a kid pointed and said 'cool'. career peak. 🧒", "一个小孩指着说“好酷”。职业生涯巅峰。🧒"], ["your neighbor's wifi said hello 📶", "你邻居的 WiFi 打了个招呼 📶"], ["delivered a compliment on the way. multitasking. 💬", "顺路送出了一句赞美。多线程工作。💬"], ["the bag is at optimal snuggle temperature 🌡️", "餐袋达到了最佳拥抱温度 🌡️"], ["someone's grandma offered them soup. so kind. so no. 🍲", "有位奶奶要请骑手喝汤。好暖心。但不行。🍲"], ["spotted your street sign. heart rate: excited 🪧", "看到你的街牌了。心率：兴奋 🪧"], ["the doorbell is being mentally prepared 🔔", "正在心理准备按门铃 🔔"], ["your welcome mat has been notified 🚪", "你的门垫已收到通知 🚪"], ["the elevator has been reserved (emotionally) 🛗", "电梯已被（在心里）预定 🛗"], ["checked the apartment number twice. then once more. 🔢", "门牌号核对了两遍。然后又一遍。🔢"], ["a wind chime played their arrival music 🎐", "一串风铃奏响了到达音乐 🎐"], ["the last corner has been conquered 🏁", "最后一个转角已被征服 🏁"], ["your food can smell home from here 🏠", "你的食物已经能闻到家的味道了 🏠"], ["final stretch — engaging delivery mode 🚀", "最后冲刺——配送模式全开 🚀"], ["passed a fortune teller: 'great meal ahead' 🔮", "路过算命摊：“前方有美餐” 🔮"], ["a mime described your order. beautifully. 🎭", "一位哑剧演员比划了你的订单。非常传神。🎭"], ["joined a parade briefly. left with honor. 🎺", "短暂加入了一场游行。光荣退出。🎺"], ["a jogger raced them uphill. results classified. 🏃", "一位晨跑者和骑手比了段上坡。结果保密。🏃"], ["photobombed a tourist's picture 📸", "乱入了游客的照片 📸"], ["helped an old lady cross the street (10 points) 👵", "扶老奶奶过了马路（加 10 分）👵"], ["returned a lost balloon to a child 🎈", "把走丢的气球还给了小朋友 🎈"], ["the ice cream truck played their song 🍦", "冰淇淋车放起了骑手的主题曲 🍦"], ["found a coin. heads. lucky delivery. 🪙", "捡到一枚硬币。正面。幸运配送。🪙"], ["high-fived a statue. it felt right. 🗿", "和雕像击了个掌。感觉很对。🗿"], ["a street musician dedicated a song to your order 🎸", "街头音乐人为你的订单献了一首歌 🎸"], ["rang a bicycle bell in solidarity 🔔", "按响车铃以示声援 🔔"], ["did the 'I know where I'm going' nod 🧭", "做了个“我认路”的点头 🧭"], ["passed the library quietly. respect. 🤫", "安静地路过图书馆。尊重。🤫"], ["a barber waved with scissors. carefully. ✂️", "理发师拿着剪刀挥手。很小心地。✂️"], ["smelled someone else's dinner. yours is better. 😌", "闻到了别人家的晚饭。你的更香。😌"], ["a window shopper rated the delivery 5 stars ⭐", "一位橱窗购物者给这单配送打了五星 ⭐"], ["took the flower street for the aroma bonus 🌸", "为了香气加成走了花街 🌸"], ["a chess player in the park said 'checkmate'. unrelated. ♟️", "公园下棋的大爷喊了声“将军”。无关。♟️"], ["the fruit stand guy tossed them an imaginary apple 🍎", "水果摊老板抛来一个想象中的苹果 🍎"], ["your order is aging like fine wine (2 minutes) 🍷", "你的订单像好酒一样陈化中（2 分钟）🍷"], ["practiced saying 'here's your order!' in 3 tones 🎙️", "用三种语气练习了“您的外卖到了！” 🎙️"], ["the bag did a tiny drumroll 🥁", "餐袋打了一小段鼓点 🥁"], ["passed a gym. waved at the treadmills. 🏋️", "路过健身房。向跑步机们挥手。🏋️"], ["another puddle was jumped. gracefully-ish. 💦", "又跳过一个水坑。算是优雅吧。💦"], ["the neighborhood watch approved this route 👀", "社区巡逻队批准了这条路线 👀"], ["a paper airplane escorted them one block ✈️", "一架纸飞机护送了一个街区 ✈️"], ["someone yelled 'nice scooter!' — day made 🛵", "有人喊“车真帅！”——今天值了 🛵"], ["the last speed bump has been defeated 🛡️", "最后一个减速带已被击败 🛡️"], ["your building just appeared on the horizon 🏢", "你的楼刚出现在地平线上 🏢"], ["a garden gnome winked. probably. 🧙", "一个花园小矮人眨了眨眼。大概吧。🧙"], ["the corner shop cat blinked approval 🐈", "街角小卖部的猫眨眼表示认可 🐈"], ["carried the bag like a sleeping baby 👶", "像抱着熟睡的婴儿一样抱着餐袋 👶"], ["a delivery legend was spotted: them 🏅", "有人目击了一位配送传奇：就是骑手本人 🏅"], ["the street made a runway of green lights 🛫", "整条街的绿灯排成了跑道 🛫"], ["quietly proud of that last turn 😌", "为刚才那个转弯默默骄傲 😌"], ["a bus stop crowd watched in awe 🚏", "公交站的人群投来敬佩的目光 🚏"], ["your order waved at a school bus 🚌", "你的订单向校车挥了挥手 🚌"], ["the horizon called: they're almost home 🌄", "地平线来电：骑手快到了 🌄"], ["a sparrow delivered moral support 🐦", "一只麻雀送来了精神支持 🐦"], ["counted down the house numbers 🏠", "正在倒数门牌号 🏠"], ["the kickstand is getting nervous (soon!) 🦵", "脚撑开始紧张了（快了！）🦵"], ["a leaf blower saluted with a gust 🍃", "吹叶机用一阵风致敬 🍃"], ["someone watered plants nearby. refreshing vibes. 🪴", "附近有人在浇花。清新的氛围。🪴"], ["a crossing kid said 'that's the food guy!' 🌟", "过马路的小孩说“是送吃的的！” 🌟"], ["the last red light turned green early 🟢", "最后一个红灯提前变绿了 🟢"], ["your street smells like victory 🏆", "你的街道闻起来像胜利 🏆"], ["a neighbor's dog announced the arrival 📢", "邻居家的狗宣布了骑手的到来 📢"], ["the bag hummed happily over the last bump 🎵", "餐袋在最后一个颠簸上开心地哼了一声 🎵"], ["spotted your door. locked in. 🎯", "看到你家门了。锁定目标。🎯"], ["a windowsill pie nodded in respect 🥧", "窗台上的派点头致意 🥧"], ["double-checked the order one last time ✅", "最后又核对了一遍订单 ✅"], ["the scooter purred like it knows 🛵", "小电驴发出了心领神会的呼噜声 🛵"], ["your mailbox waved (it was the wind) 📬", "你的邮箱挥了挥手（其实是风）📬"], ["final corner drift: optional. done anyway. 🏍️", "最后一个弯的漂移：非必需。但还是漂了。🏍️"], ["a hopscotch grid was respected, not skipped 🎲", "认真绕过了跳房子格子，没有踩 🎲"], ["the porch light turned on like a stage 💡", "门廊灯像舞台灯一样亮起 💡"], ["your order started its landing checklist 🛬", "你的订单开始了降落检查清单 🛬"], ["they can see your window now 🪟", "骑手已经能看到你家窗户了 🪟"], ["arrival imminent — happiness loading 📊", "即将到达——幸福感加载中 📊"], ["📞 Your rider can't pick up — they don't exist 😅", "📞 骑手无法接听——他们并不存在 😅"], ["📞 Ringing… ringing… reality declined the call 📵", "📞 响铃中…响铃中…现实拒接了 📵"], ["📞 The rider answered with a paw. hung up immediately. 🐾", "📞 骑手用爪子接了电话。立刻挂断了。🐾"], ["📞 'Sorry, driving!' …they are also imaginary 🛵", "📞 “抱歉，开车呢！”…而且他们也是想象出来的 🛵"], ["📞 Voicemail: 'leave a craving after the beep' 🔔", "📞 语音信箱：“听到哔声后请留下您的馋” 🔔"], ["📞 Call failed — turns out phones need a real rider 🤷", "📞 呼叫失败——原来打电话需要一个真实的骑手 🤷"], ["📞 The bee picked up. it was all buzzing. no info. 🐝", "📞 蜜蜂接了。全是嗡嗡声。没有有效信息。🐝"], ["📞 They can't talk right now — they're busy being fictional 🎭", "📞 骑手现在不方便——忙着当虚构人物呢 🎭"], ["📞 You called. somewhere, an emoji felt loved. 💛", "📞 你打了电话。某处的一个表情符号感受到了爱。💛"], ["📞 The line is busy comforting another hungry human 🫂", "📞 线路正忙着安慰另一个饿肚子的人类 🫂"], ["📞 Your rider's phone is a drawing of a phone 🖍️", "📞 骑手的手机是一张手机的画 🖍️"], ["📞 Signal lost in the imaginary tunnel 🚇", "📞 信号消失在了想象的隧道里 🚇"], ["📞 They answered! …in animal sounds. no subtitles. 🐒", "📞 接通了！…全是动物叫声。没有字幕。🐒"], ["📞 The call connected to the moon by mistake 🌙", "📞 电话误接到了月球 🌙"], ["📞 'New phone, who's this?' — your imaginary rider 📱", "📞 “新手机，哪位？”——你想象中的骑手 📱"], ["📞 This line is for cravings-related emergencies only. this qualifies. ✅", "📞 本线路仅受理馋类紧急事件。你这个算。✅"], ["it's a race now. it was always a race. 🏁", "现在是比赛了。从来都是比赛。🏁"], ["won by a noodle. literally. 🍜", "以一根面条的优势获胜。字面意义上。🍜"]];
                function tNode(node) {
                    const v = node.nodeValue;
                    if (!v)
                        return;
                    const k = v.trim();
                    if (!k)
                        return;
                    if (ZH[k]) {
                        node.nodeValue = v.replace(k, ZH[k]);
                        return;
                    }
                    var qm = k.match(/^(\d+)× (.+)$/);
                    if (qm && ZH[qm[2]]) {
                        node.nodeValue = v.replace(k, qm[1] + "× " + ZH[qm[2]]);
                        return;
                    }
                    // "2× Bibimbap" → "2× 韩式拌饭"
                    for (let i = 0; i < ZH_RX.length; i++) {
                        if (ZH_RX[i][0].test(k)) {
                            node.nodeValue = v.replace(k, k.replace(ZH_RX[i][0], ZH_RX[i][1]));
                            return;
                        }
                    }
                    for (let i = 0; i < ZH_SUB.length; i++) {
                        if (v.indexOf(ZH_SUB[i][0]) > -1)
                            node.nodeValue = node.nodeValue.split(ZH_SUB[i][0]).join(ZH_SUB[i][1]);
                    }
                }
                function walk(root) {
                    try {
                        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
                        const a = [];
                        let n;
                        while (n = w.nextNode())
                            a.push(n);
                        a.forEach(tNode);
                    } catch (e) {}
                }
                // Lazy-load recipe ingredient/step translations (zh only) so the in-app 📖 recipe popup shows Chinese.
                function loadRecipeLines() {
                    if (window._zhLinesDone || typeof RECIPES === "undefined")
                        return;
                    window._zhLinesDone = true;
                    const sc = document.createElement("script");
                    sc.src = "/recipes-zh.js";
                    sc.onload = function() {
                        try {
                            const Z = window.ZH_RECIPES || {};
                            Object.keys(Z).forEach(function(id) {
                                const en = RECIPES[id]
                                  , zh = Z[id];
                                if (!en || !zh)
                                    return;
                                (en.ing || []).forEach(function(s, i) {
                                    if (zh.ing && zh.ing[i])
                                        ZH[s] = zh.ing[i];
                                });
                                (en.steps || []).forEach(function(s, i) {
                                    if (zh.steps && zh.steps[i])
                                        ZH[s] = zh.steps[i];
                                });
                            });
                            walk(document.body);
                        } catch (e) {}
                    }
                    ;
                    document.head.appendChild(sc);
                }
                function applyZh() {
                    walk(document.body);
                    const s = document.getElementById("dishSearch");
                    if (s)
                        s.placeholder = "搜索菜品——披萨、拉面、塔可……";
                    const h1 = document.querySelector(".hero h1");
                    if (h1 && !h1.dataset.zh) {
                        h1.dataset.zh = "1";
                        h1.innerHTML = '点单，<span class="pop">不付钱</span>。';
                    }
                    document.documentElement.lang = "zh-CN";
                    loadRecipeLines();
                    if (!window._zhObs) {
                        window._zhObs = new MutationObserver(function(ms) {
                            ms.forEach(function(m) {
                                m.addedNodes.forEach(function(nd) {
                                    if (nd.nodeType === 3)
                                        tNode(nd);
                                    else if (nd.nodeType === 1)
                                        walk(nd);
                                });
                            });
                        }
                        );
                        window._zhObs.observe(document.body, {
                            childList: true,
                            subtree: true
                        });
                    }
                }
                function showToggle(cur) {
                    if (document.getElementById("langTog"))
                        return;
                    const b = document.createElement("button");
                    b.id = "langTog";
                    b.type = "button";
                    b.textContent = cur === "zh" ? "EN" : "中文";
                    b.style.cssText = "position:fixed;right:12px;bottom:12px;z-index:1300;background:#fff;border:2px solid var(--line,#F0DCD4);color:var(--text,#43303A);font-weight:800;font-family:var(--font-d,sans-serif);font-size:.9rem;padding:9px 15px;border-radius:999px;box-shadow:0 8px 22px -8px rgba(67,48,58,.4);cursor:pointer;";
                    b.onclick = function() {
                        try {
                            localStorage.setItem("fnc_lang", cur === "zh" ? "en" : "zh");
                        } catch (e) {}
                        location.reload();
                    }
                    ;
                    (document.body || document.documentElement).appendChild(b);
                }
                let saved = null;
                try {
                    saved = localStorage.getItem("fnc_lang");
                } catch (e) {}
                try {
                    var qp = new URLSearchParams(location.search).get("lang");
                    if (qp === "zh" || qp === "en") {
                        saved = qp;
                        localStorage.setItem("fnc_lang", qp);
                    }
                } catch (e) {}
                // ?lang=zh / ?lang=en for testing + shareable links
                // Called by the geo detector once the country is known.
                window.applyAutoLang = function(cc) {
                    let lang = saved;
                    if (!lang && cc === "CN")
                        lang = "zh";
                    // auto-Chinese for China only, and only if the user hasn't already chosen
                    if (cc === "CN" || lang === "zh") {
                        // the toggle is shown ONLY to China users / people on 中文
                        if (lang === "zh") {
                            applyZh();
                        }
                        showToggle(lang === "zh" ? "zh" : "en");
                    }
                }
                ;
                // Returning visitor who already picked 中文 — apply right away without waiting for geo.
                if (saved === "zh") {
                    if (document.readyState === "loading")
                        document.addEventListener("DOMContentLoaded", function() {
                            applyZh();
                            showToggle("zh");
                        });
                    else {
                        applyZh();
                        showToggle("zh");
                    }
                }
            }
            )();