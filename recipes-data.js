// recipes-data.js
// 所有菜谱数据，key 与 URL 参数一致（如 recipe.html?dish=bbq-ribs）

const RECIPES_DATA = {

    // ===== 韩式 (Korean) =====
    "bibimbap": {
        title: "Bibimbap",
        cuisine: "Korean",
        time: "20 min",
        servings: "Serves 1",
        image: "/images/kr-0.jpg",
        description: "A classic Korean mixed rice bowl with vegetables, beef, and spicy gochujang sauce.",
        ingredients: ["1 big bowl warm cooked rice (short-grain is best)", "1 egg", "1 small carrot, cut into matchsticks", "2 handfuls spinach", "¼ cucumber, thinly sliced + a pinch of salt", "100g beef mince or mushrooms (optional)", "Sauce: 2 tbsp gochujang, 1 tsp sesame oil, 1 tsp sugar, 1 tsp water", "toasted sesame seeds + extra sesame oil"],
        steps: ["Stir the sauce together until the sugar dissolves — taste it: sweet-spicy, not raw-hot. Add ½ tsp vinegar if you like tang.", "Salt the cucumber slices and let them sit 5 min, then squeeze dry — this keeps the bowl from going watery.", "Blanch spinach 30 seconds in boiling water, squeeze VERY dry, season with a drop of sesame oil and salt.", "Stir-fry the carrot 1–2 min until just bendy; if using beef, fry it hot with 1 tsp soy until browned.", "Fry the egg in a little oil until the edges are crispy but the yolk is still runny — the yolk is your second sauce.", "Pile warm rice in a bowl and arrange every topping in its own little wedge (that's the bibim look), egg in the middle.", "Bring it to the table pretty, then destroy it: add the sauce and mix hard for a full 30 seconds. Every grain should turn orange."]
    },
    "tteokbokki": {
        title: "Tteokbokki",
        cuisine: "Korean",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/kr-1.jpg",
        description: "Spicy Korean rice cakes — sweet, chewy, and addictive.",
        ingredients: ["350g cylinder rice cakes (tteok)", "2 cups water or anchovy stock (stock = deeper flavour)", "2 tbsp gochujang", "1 tbsp gochugaru (Korean chilli flakes)", "1 tbsp sugar + 1 tbsp soy sauce", "2 sheets fish cake, sliced (optional but classic)", "2 spring onions, cut in batons", "1 boiled egg (optional)"],
        steps: ["If the rice cakes are refrigerated and hard, soak them in warm water 10–15 min so they cook evenly.", "Whisk gochujang, gochugaru, sugar and soy into the water and bring to a boil in a wide pan.", "Add the rice cakes (and fish cake); simmer on medium 8–10 min, stirring often so nothing sticks to the bottom.", "You're done when the sauce coats the back of a spoon and the cakes are soft with a chewy centre — it thickens fast at the end, so don't walk away.", "Too thick? Splash in water. Not sweet enough? Another ½ tbsp sugar — tteokbokki should be sweet-heat, not just heat.", "Stir in the spring onions (and halved egg) and rest 2 minutes off the heat — the sauce clings best warm, not boiling."]
    },
    "korean-fried-chicken": {
        title: "Korean Fried Chicken",
        cuisine: "Korean",
        time: "40 min",
        servings: "Serves 2",
        image: "/images/kr-2.jpg",
        description: "Crispy, double-fried Korean chicken with a sweet-spicy glaze.",
        ingredients: ["500g chicken wings or boneless thigh chunks", "½ cup cornstarch (potato starch = even crispier)", "½ tsp salt + ½ tsp baking powder", "oil for deep-frying (about 3cm deep)", "Sauce: 3 tbsp gochujang, 2 tbsp honey, 1 tbsp soy, 1 tbsp ketchup", "2 cloves garlic, grated + 1 tsp sesame seeds"],
        steps: ["Pat the chicken very dry, then toss with salt, baking powder and cornstarch until every piece looks dusty, not wet.", "Heat the oil to 170°C (a pinch of flour should fizz instantly). Fry in small batches 7–8 min until pale gold. Don't crowd the pan — the temperature drops and the crunch dies.", "Rest the chicken 5 min on a rack. This is not optional: the double-fry is the whole secret.", "Fry again hotter (185°C) for 2–3 min until deep golden and audibly crackly.", "Meanwhile simmer the sauce ingredients 2 min until glossy and just thickened.", "Toss the chicken in the sauce at the last second and serve immediately — sauced Korean fried chicken waits for no one. Sprinkle sesame."]
    },
    "japchae": {
        title: "Japchae",
        cuisine: "Korean",
        time: "30 min",
        servings: "Serves 2",
        image: "/images/kr-3.jpg",
        description: "Sweet and savoury glass noodles with vegetables and beef.",
        ingredients: ["200g sweet-potato glass noodles (dangmyeon)", "150g beef strips or sliced mushrooms", "2 handfuls spinach", "1 carrot + ½ onion, in thin strips", "2 cloves garlic, minced", "Sauce: 4 tbsp soy, 2 tbsp sugar, 2 tbsp sesame oil", "toasted sesame seeds", "1 egg (optional, for ribbons on top)"],
        steps: ["Boil the noodles 6–7 min until springy, drain, rinse in cold water, and snip a few times with scissors — full-length noodles are a workout to eat.", "Toss the warm noodles with HALF the sauce right away so they drink it in while you cook the rest.", "Blanch the spinach 30 sec, squeeze dry, season with a pinch of salt and sesame oil.", "Stir-fry the carrot and onion 2 min until just softened; then the beef (or mushrooms) with the garlic until browned.", "Everything into one big bowl with the remaining sauce; toss with your hands (gloves or clean hands — a spoon can't do it justice).", "Taste: it should be sweet-savoury and glossy. More soy if flat, more sugar if sharp. Finish with sesame seeds and egg ribbons if using. Serve warm or room temp — japchae is famously good both ways."]
    },
    "kimbap": {
        title: "Kimbap",
        cuisine: "Korean",
        time: "35 min",
        servings: "Serves 2",
        image: "/images/kr-4.jpg",
        description: "Korean seaweed rice rolls filled with vegetables and egg.",
        ingredients: ["2 cups cooked short-grain rice, still warm", "1 tsp sesame oil + ½ tsp salt (for the rice)", "4 sheets gimbap nori", "1 carrot, in thin strips, quickly stir-fried", "2 handfuls spinach, blanched and squeezed", "2 eggs, made into a thick omelette and sliced into strips", "4 strips pickled yellow radish (danmuji — the crunchy soul of gimbap)", "ham or canned tuna with a little mayo (optional)", "extra sesame oil for shining the rolls"],
        steps: ["Season the warm rice with sesame oil and salt; let it cool to just-warm. Hot rice makes the nori shrivel.", "Lay nori shiny-side DOWN. Spread a thin, even layer of rice over ¾ of the sheet — thin is the skill here; thick rolls burst.", "Line up your fillings in one neat row across the middle: radish, carrot, spinach, egg, ham/tuna.", "Roll from the rice end, tucking the fillings in with your fingers on the first turn — that first tuck decides everything. Keep it TIGHT.", "Seal the bare nori edge with a dab of water. Rub the finished roll with a little sesame oil so it gleams.", "Cut with your sharpest knife, wiping the blade with a wet cloth between cuts — a sticky knife squashes the rolls. Aim for 1.5cm coins.", "Eat the ugly end pieces yourself immediately. Cook's tax."]
    },
    "bingsu": {
        title: "Bingsu",
        cuisine: "Korean",
        time: "15 min (plus freezing)",
        servings: "Serves 2",
        image: "/images/kr-5.jpg",
        description: "Korean shaved milk ice with sweet toppings — a refreshing dessert.",
        ingredients: ["3 cups milk, frozen in ice-cube trays (do this the night before)", "4 tbsp condensed milk, plus more for drizzling", "2 tbsp red bean paste (optional but classic)", "fresh fruit: strawberries, mango, banana", "mochi bits or rice cakes, cubed", "a few crushed nuts or misugaru powder (optional)"],
        steps: ["Freeze the milk in cube trays at least 6 hours ahead — milk ice is what makes bingsu creamy instead of crunchy.", "Blitz the frozen milk cubes in a strong blender or food processor in short pulses until it turns into fluffy snow. Don't over-blend into a smoothie.", "Work fast: pile the milk snow high in chilled bowls.", "Drizzle generously with condensed milk — this is not the moment for restraint.", "Top with red bean paste, fruit and mochi bits.", "Serve with two spoons and an agreement about who gets the last strawberry. It melts fast — eat faster."]
    },
    "bulgogi": {
        title: "Bulgogi",
        cuisine: "Korean",
        time: "30 min (plus marinating)",
        servings: "Serves 3",
        image: "/images/kr-6.jpg",
        description: "Korean BBQ beef with a sweet soy marinade — grilled to perfection.",
        ingredients: ["400g beef, sliced paper-thin (ribeye or sirloin; freeze 30 min to slice thinner)", "Marinade: 4 tbsp soy, 2 tbsp sugar, 1 tbsp sesame oil, ½ grated pear or apple, 3 cloves garlic, black pepper", "½ onion, sliced", "2 spring onions, in batons", "1 tsp oil for the pan", "sesame seeds + lettuce leaves for wrapping"],
        steps: ["Whisk the marinade — the grated pear isn't garnish, its enzymes tenderise the beef and give bulgogi its signature sweetness.", "Massage it into the beef with the onion and marinate 15 min minimum (2 hours = restaurant level).", "Get a wide pan VERY hot with a little oil. Bulgogi wants to sear, not stew.", "Cook the beef in 2–3 batches in a single layer, 1–2 min per batch, until the edges caramelise. Crowd the pan and it boils in its own juice — grey and sad.", "Return everything for a final 30 seconds with the spring onions.", "Sprinkle sesame, serve over rice or wrap in lettuce with a dab of ssamjang. The slightly-burnt sticky bits from the pan belong to the cook."]
    },
    "sundubu-jjigae": {
        title: "Sundubu Jjigae",
        cuisine: "Korean",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/kr-7.jpg",
        description: "A spicy, bubbling Korean soft tofu stew.",
        ingredients: ["1 tube (350g) silken/soft tofu — the wobbliest you can find", "100g pork mince or 6 shrimp (optional)", "1 tbsp gochugaru + 1 tsp gochujang", "1 tbsp oil + 1 tsp sesame oil", "3 cloves garlic, minced + ½ onion, chopped", "2 cups anchovy or chicken stock", "1 spring onion + 1 egg", "few slices of courgette or mushrooms (optional)", "fish sauce or salt, to season"],
        steps: ["Heat both oils on medium and fry the garlic, onion (and pork if using) 2 min.", "Add gochugaru and gochujang; fry 30 seconds until the oil turns brick-red and smells toasty — burning it makes bitterness, so keep it moving.", "Pour in the stock, bring to a boil, and season with fish sauce or salt until it tastes a touch too strong — the tofu will mellow it.", "Scoop the silken tofu in with a spoon in big soft chunks. Don't stir hard — nudge. Simmer 5 min.", "Crack the egg into the centre, count to twenty, then kill the heat — it should still be runny when it hits the table.", "Spring onion on top; serve VIOLENTLY bubbling (in a stone pot if you have one) with rice on the side. The sound is part of the dish."]
    },
    "samgyeopsal": {
        title: "Samgyeopsal",
        cuisine: "Korean",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/kr-8.jpg",
        description: "Grilled pork belly — a Korean BBQ classic, wrapped in lettuce.",
        ingredients: ["400g thick-cut pork belly slices (1cm — ask the butcher)", "1 head of lettuce + perilla leaves if you can find them", "ssamjang (or mix 2 parts doenjang/miso : 1 part gochujang)", "4 cloves garlic, sliced", "kimchi", "salt + sesame oil dip (2 tbsp sesame oil + ½ tsp salt + pepper)", "steamed rice"],
        steps: ["Bring the pork to room temperature and pat it dry — wet pork steams instead of crisping.", "Heat a heavy dry pan (or grill plate) on medium-high. No oil: the belly brings its own.", "Lay the slices flat and leave them 3–4 min per side until deep golden and crackly at the edges. Resist moving them around.", "Grill the garlic slices and kimchi in the rendered pork fat at the side of the pan — kimchi fried in pork fat is a religious experience.", "Snip everything into bite-size pieces with kitchen scissors, directly in the pan. This is the authentic tool.", "Build a ssam: lettuce in your palm, rice, pork, garlic, kimchi, dab of ssamjang. Fold into a parcel that is one bite. One. Bite. No matter the size. That's the rule."]
    },
    "hotteok": {
        title: "Hotteok",
        cuisine: "Korean",
        time: "90 min (includes rising)",
        servings: "Serves 4",
        image: "/images/kr-9.jpg",
        description: "Sweet Korean pancakes filled with cinnamon sugar and nuts.",
        ingredients: ["2 cups (250g) flour + 1 tsp instant yeast + 1 tbsp sugar + ½ tsp salt", "¾ cup warm milk (comfortably warm, not hot)", "1 tbsp oil, plus more for frying", "Filling: ⅓ cup brown sugar + 1 tsp cinnamon + 2 tbsp crushed walnuts or peanuts"],
        steps: ["Mix flour, yeast, sugar, salt, warm milk and oil into a soft, sticky dough. Knead 3 min, cover, and let it rise 1 hour until doubled.", "Mix the filling. Oil your hands — the dough is sticky and this is normal, not a mistake.", "Divide into 8 balls. Flatten one in your palm, add a heaping tablespoon of filling, and pinch the edges shut like a dumpling. Seal well or the sugar lava escapes.", "Heat 3 tbsp oil in a pan on medium. Place a ball seam-side DOWN, wait 30 seconds, then press it flat with a spatula (a hotteok press if you're fancy).", "Fry 2–3 min per side until deep golden. Lower the heat if they brown too fast — the sugar inside needs time to melt.", "Cool 2 minutes before biting. The filling is genuinely molten. Everyone ignores this warning exactly once."]
    },

    // ===== 美式 (American) =====
    "cheeseburger": {
        title: "Cheeseburger",
        cuisine: "American",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/us-0.jpg",
        description: "A classic American smash burger with gooey cheese.",
        ingredients: ["250g ground beef, 20% fat (fat = flavour, don't go lean)", "2 soft potato or brioche buns", "2 slices American cheese (it melts best — today is not the day for fancy cheese)", "salt + coarse black pepper", "2 tbsp butter for the buns", "pickles + thin-sliced onion", "Sauce: 2 tbsp mayo + 1 tbsp ketchup + 1 tsp mustard + chopped pickle"],
        steps: ["Butter the bun halves and toast them cut-side down in the pan until golden. Set aside.", "Divide the beef into 2 loose balls. Don't knead, don't season yet — overworked beef turns bouncy.", "Get a dry cast-iron or heavy pan SMOKING hot — 2 full minutes on max heat.", "Drop the balls in and smash them flat and thin with a spatula for 10 seconds. Salt and pepper the tops generously.", "Leave them alone for 2 minutes until the edges go lacy and dark — that crust is the entire point of a smash burger.", "Flip once, cheese on immediately, 45 more seconds. Want it extra melty? Add a tsp of water to the pan and cover for 20 sec.", "Build: sauce on the bottom bun, pickles, onion, patty, top bun. Eat within 5 minutes. It will drip. That's correct."]
    },
    "buffalo-wings": {
        title: "Buffalo Wings",
        cuisine: "American",
        time: "50 min",
        servings: "Serves 2",
        image: "/images/us-1.jpg",
        description: "Classic spicy buffalo chicken wings with tangy sauce.",
        ingredients: ["1kg chicken wings", "2 tbsp baking powder + salt", "½ cup hot sauce + 3 tbsp melted butter"],
        steps: ["Pat wings dry, toss with baking powder and salt.", "Bake at 220C ~45 min until crisp, flipping once.", "Whisk hot sauce with melted butter.", "Toss the hot wings in the sauce; serve with ranch."]
    },
    "mac-and-cheese": {
        title: "Mac & Cheese",
        cuisine: "American",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/us-2.jpg",
        description: "Creamy, cheesy macaroni — the ultimate comfort food.",
        ingredients: ["200g macaroni", "1.5 cups milk + 1 cup water", "1.5 cups grated cheddar", "1 tbsp butter", "salt + black pepper"],
        steps: ["Simmer pasta in the milk+water+salt, stirring often, 10–12 min until creamy.", "Off the heat, stir in butter, then cheese a handful at a time.", "Add lots of pepper; loosen with milk if thick.", "Eat immediately — it waits for no one."]
    },
    "pancakes": {
        title: "Pancakes",
        cuisine: "American",
        time: "20 min",
        servings: "Serves 3",
        image: "/images/us-3.jpg",
        description: "Fluffy American pancakes — perfect for a weekend breakfast.",
        ingredients: ["1½ cups (190g) plain flour", "2 tbsp sugar + 2 tsp baking powder + ½ tsp salt", "1¼ cups (300ml) milk", "1 egg", "2 tbsp melted butter + more for the pan", "1 tsp vanilla (optional)", "maple syrup, enough to drown them"],
        steps: ["Whisk the dry ingredients in one bowl; whisk milk, egg, butter and vanilla in another.", "Pour wet into dry and stir LAZILY — stop while small lumps remain. Smooth batter = tough pancakes.", "Rest the batter 5 min while the pan heats on medium. Butter should sizzle quietly, not brown instantly.", "Ladle about ¼ cup per pancake. Don't spread it — it finds its own shape.", "Flip exactly when bubbles cover the surface and the edges look set (about 2 min). One flip only, ever.", "45–60 seconds on side two. Stack them high, butter between layers if you're living right, syrup over everything."]
    },
    "hot-dog": {
        title: "Hot Dog",
        cuisine: "American",
        time: "10 min",
        servings: "Serves 2",
        image: "/images/us-4.jpg",
        description: "Classic American hot dog with your favourite toppings.",
        ingredients: ["2 sausages", "2 buns", "ketchup, mustard, fried onions"],
        steps: ["Simmer or grill the sausages until plump.", "Warm the buns.", "Nestle a sausage in each.", "Top with ketchup, mustard and onions."]
    },
    "apple-pie": {
        title: "Apple Pie",
        cuisine: "American",
        time: "60 min",
        servings: "Serves 6",
        image: "/images/us-5.jpg",
        description: "Classic American apple pie with a flaky crust.",
        ingredients: ["2 pie crusts", "5 apples, sliced", "¾ cup sugar, 1 tsp cinnamon, 1 tbsp flour", "knob of butter"],
        steps: ["Toss apples with sugar, cinnamon and flour.", "Line a dish with crust, pile in apples, dot with butter.", "Top with the second crust, seal and slit.", "Bake at 200C ~45 min until golden."]
    },
    "bbq-ribs": {
        title: "BBQ Ribs",
        cuisine: "American",
        time: "3 hrs",
        servings: "Serves 3",
        image: "/images/us-6.jpg",
        description: "Tender, sticky BBQ ribs — slow-cooked and grilled to perfection.",
        ingredients: ["1 rack pork ribs", "2 tbsp BBQ rub", "1 cup BBQ sauce"],
        steps: ["Rub the ribs and wrap in foil.", "Bake low at 150C for 2.5 hrs until tender.", "Unwrap, brush with BBQ sauce.", "Blast under the grill 5 min until sticky."]
    },
    "caesar-salad": {
        title: "Caesar Salad",
        cuisine: "American",
        time: "12 min",
        servings: "Serves 2",
        image: "/images/us-7.jpg",
        description: "Classic Caesar salad with crunchy croutons and parmesan.",
        ingredients: ["1 romaine, chopped", "croutons + parmesan", "2 tbsp mayo, 1 tsp mustard, 1 anchovy, lemon, garlic"],
        steps: ["Whisk mayo, mustard, mashed anchovy, lemon and garlic.", "Toss the romaine in the dressing.", "Add croutons and shaved parmesan.", "Crack over black pepper."]
    },
    "clam-chowder": {
        title: "Clam Chowder",
        cuisine: "American",
        time: "30 min",
        servings: "Serves 4",
        image: "/images/us-8.jpg",
        description: "Creamy New England clam chowder with potatoes and bacon.",
        ingredients: ["2 cans clams (reserve juice)", "2 potatoes, diced", "1 onion + 2 rashers bacon", "1 cup cream + 1 tbsp flour"],
        steps: ["Crisp the bacon, soften onion in the fat.", "Stir in flour, then clam juice and potatoes; simmer until soft.", "Add cream and the clams; warm through.", "Season and serve with crackers."]
    },
    "glazed-donuts": {
        title: "Glazed Donuts",
        cuisine: "American",
        time: "2 hrs",
        servings: "Makes 12",
        image: "/images/us-9.jpg",
        description: "Classic glazed donuts — soft, fluffy, and irresistibly sweet.",
        ingredients: ["2 cups flour, 1 tsp yeast, ¼ cup sugar", "½ cup warm milk, 1 egg, 2 tbsp butter", "glaze: icing sugar + milk"],
        steps: ["Mix the dough and rise 1 hr; cut into rings.", "Rise again 30 min.", "Fry ~1 min per side until golden.", "Dip in the glaze while warm."]
    },

    // ===== 日式 (Japanese) =====
    "sushi-platter": {
        title: "Sushi Platter",
        cuisine: "Japanese",
        time: "50 min",
        servings: "Serves 2",
        image: "/images/jp-0.jpg",
        description: "Classic Japanese sushi — make nigiri and rolls at home.",
        ingredients: ["2 cups sushi rice (the short-grain kind — this is non-negotiable)", "Seasoning: 3 tbsp rice vinegar + 1 tbsp sugar + 1 tsp salt, warmed until dissolved", "sashimi-grade fish (salmon or tuna) — or cucumber, avocado, cooked prawn", "nori sheets", "wasabi + soy + pickled ginger", "a bowl of water with a splash of vinegar (for your hands)"],
        steps: ["Rinse the rice until the water runs clear, cook it, then tip it into a wide bowl. Fold in the warm vinegar seasoning with a cutting motion while fanning it — you want shiny, seasoned grains, not mush.", "Let the rice cool to body temperature. Hot rice cooks the fish and tears the nori.", "Slice the fish across the grain into 1cm-thick pieces with your longest, sharpest knife — one confident pull per slice, no sawing.", "For nigiri: wet your hands, press ~20g of rice into a gentle oval (firm enough to hold, loose enough to fall apart in the mouth), swipe a fingertip of wasabi, lay the fish over.", "For rolls: nori shiny-side down, thin rice layer, fillings in a line, roll firmly with the mat, and slice with a wet blade.", "Arrange on a plate with ginger and wasabi. Dip fish-side (not rice-side) in soy — rice-side drinking soy is how rolls fall apart. Eat within the hour; sushi doesn't keep."]
    },
    "ramen": {
        title: "Ramen",
        cuisine: "Japanese",
        time: "20 min",
        servings: "Serves 1",
        image: "/images/jp-1.jpg",
        description: "A comforting bowl of ramen with rich broth and jammy egg.",
        ingredients: ["1 pack fresh or instant ramen noodles (bin the flavour sachet)", "2 cups (500ml) good chicken stock", "1 tbsp soy sauce + 1 tsp sesame oil", "1 tsp miso paste", "1 clove garlic + a thumb of ginger, grated", "1 egg", "toppings: spring onion, corn, nori, a knob of butter, leftover pork if you have it"],
        steps: ["Jammy egg first: lower the egg into boiling water for exactly 6½ minutes, then straight into iced water. Peel when cool.", "Simmer the stock with the garlic and ginger for 5 min so it actually tastes of something.", "Kill the heat, then whisk in miso, soy and sesame oil. Never boil miso — it goes flat and loses its aroma.", "Cook the noodles in separate boiling water 30–60 sec less than the pack says, then drain well. Cooking them in the broth turns it starchy and dull.", "Noodles into the bowl, hot broth over. Work fast — ramen is a race against soggy.", "Halve the egg on top, pile on the toppings, add the butter for a tonkotsu-ish richness. Slurping is correct technique."]
    },
    "tonkatsu": {
        title: "Tonkatsu",
        cuisine: "Japanese",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/jp-2.jpg",
        description: "Crispy breaded pork cutlet — a Japanese comfort food classic.",
        ingredients: ["2 pork loin steaks (2cm thick)", "salt + pepper", "¼ cup flour, 1 beaten egg, 1½ cups panko (real panko — regular breadcrumbs won't shatter)", "oil for shallow frying (1cm deep)", "tonkatsu sauce (or mix: 2 tbsp ketchup + 1 tbsp Worcestershire + 1 tsp soy)", "shredded raw cabbage + rice"],
        steps: ["Snip the fat rim of each steak in a few places so it doesn't curl, pound lightly to even thickness, and season.", "Bread them in strict order: flour (shake off excess), egg, then PRESS into panko so it really sticks. A loose crumb falls off in the oil.", "Heat the oil to 170°C — a panko crumb should sizzle and float at once, not burn.", "Fry 3–4 min per side to deep golden. Turn ONCE only; fiddling knocks the crust off.", "Rest on a rack (not paper — paper steams the bottom soggy) for 3 minutes. The rest finishes the cooking.", "Slice into strips with one decisive stroke each, reassemble on the plate, and serve with the sauce, a mountain of raw cabbage and rice. The cabbage is not a garnish — it's the co-star."]
    },
    "takoyaki": {
        title: "Takoyaki",
        cuisine: "Japanese",
        time: "30 min",
        servings: "Serves 2",
        image: "/images/jp-3.jpg",
        description: "Crispy, golden octopus balls — a Japanese street food favourite.",
        ingredients: ["Batter: 1 cup flour + 2 cups cold dashi + 1 egg + 1 tsp soy", "150g cooked octopus, in 1cm dice (or shrimp/cheese/sausage — no takoyaki police here)", "2 spring onions, finely chopped + 2 tbsp pickled red ginger, chopped", "tenkasu (tempura crumbs) if you have them", "takoyaki sauce (or tonkatsu sauce), Kewpie mayo, bonito flakes, aonori", "oil + a takoyaki pan (a cake-pop pan works in a pinch)"],
        steps: ["Whisk the batter until thin and pourable — closer to crepe batter than pancake. Lumps out, then rest it 10 min.", "Heat the takoyaki pan on medium-high and brush EVERY hole generously with oil until it shimmers.", "Pour batter to overflowing — yes, over the edges of the holes, it's supposed to flood. Drop octopus, spring onion, ginger and tenkasu into each hole.", "Wait 2 min until the bottoms set, then run a skewer around each ball, tucking the overflow in as you flip it 90°. Uncooked batter spills into the hole and builds the sphere.", "Keep turning every 30–60 seconds for ~6 min until they're golden, round and crisp all over. The first batch is always ugly. Tradition.", "Sauce, mayo zigzag, bonito flakes (watch them dance), aonori. Serve molten — and warn people, because nobody ever waits."]
    },
    "tempura": {
        title: "Tempura",
        cuisine: "Japanese",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/jp-4.jpg",
        description: "Light and crispy Japanese tempura — prawns and vegetables.",
        ingredients: ["8 large prawns, peeled, tails on, deveined", "veg: sweet potato rounds, green beans, sliced pumpkin or aubergine", "Batter: 1 cup plain flour + 1 cup ICE-COLD sparkling water + 1 egg yolk", "extra flour for dusting", "oil for deep frying", "Dip: ¼ cup dashi + 2 tbsp soy + 1 tbsp mirin, warmed (or just salt + lemon)"],
        steps: ["Make 2–3 shallow cuts across the belly of each prawn and press it gently straight — this stops the dramatic curl.", "Get the oil to 180°C. Keep the sparkling water in the fridge until the last second: COLD batter hitting HOT oil is the entire physics of tempura.", "Make the batter at the last moment: yolk into the icy water, flour in, then stir with chopsticks about 5 times. It must stay lumpy with dry flour pockets. Smooth batter = doughnut coating.", "Dust everything lightly with flour, drag through the batter, and slide into the oil away from you.", "Fry in small batches: veg 2–3 min, prawns 1–2 min, until pale gold and whisper-crisp — tempura is blonde, not brown. Skim the crumbs between batches.", "Drain on a rack, eat within minutes with the warm dip. Tempura has a shorter life than an ice cream in the sun."]
    },
    "gyoza": {
        title: "Gyoza",
        cuisine: "Japanese",
        time: "40 min",
        servings: "Serves 3",
        image: "/images/jp-5.jpg",
        description: "Japanese pan-fried dumplings with a juicy pork filling.",
        ingredients: ["24 gyoza wrappers", "250g pork mince (or finely chopped mushrooms)", "2 cups finely chopped cabbage + ½ tsp salt", "2 cloves garlic + a thumb of ginger, grated", "2 spring onions, minced", "1 tbsp soy + 1 tsp sesame oil + a pinch of sugar", "Dip: 2 tbsp soy + 1 tbsp rice vinegar + chilli oil"],
        steps: ["Salt the chopped cabbage, wait 10 min, then squeeze the water out with your hands — wet cabbage = burst dumplings.", "Mix pork, cabbage, garlic, ginger, spring onion and seasonings; stir in ONE direction until sticky, about 1 min.", "Put a teaspoon (no more!) of filling in a wrapper, wet the edge with a finger, fold and pinch 4–5 pleats. Ugly ones taste identical.", "Heat 1 tbsp oil in a lidded pan on medium-high; line the gyoza up flat-side down and fry 2–3 min until the bottoms are deep gold.", "Pour in ¼ cup water, slam the lid on, and steam 4–5 min until the wrappers turn translucent.", "Lid off for a final minute to re-crisp the bottoms. Serve crispy-side up with the dip. Count how many each person eats — there will be disputes."]
    },
    "udon": {
        title: "Udon",
        cuisine: "Japanese",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/jp-6.jpg",
        description: "Thick, chewy Japanese noodles in a savoury broth.",
        ingredients: ["2 portions udon (frozen sanuki udon is genuinely the best kind you can buy)", "3 cups dashi (or water + dashi powder — no shame)", "2 tbsp soy sauce + 1 tbsp mirin + ½ tsp sugar", "2 spring onions, finely sliced", "tempura bits (tenkasu), a soft egg, or fish cake slices to top", "shichimi chilli powder at the table"],
        steps: ["Warm the dashi with soy, mirin and sugar; bring it just to a simmer and taste — it should be gentle and savoury, a broth you could drink all day.", "Cook the udon in a SEPARATE pot of plain boiling water (frozen ones need just 1–2 min), then drain. Cooking them in the broth clouds it with starch.", "Rinse the noodles briefly under hot water to remove surface starch — this keeps them slippery-bouncy, which is the whole point of udon.", "Noodles into deep bowls, hot broth over the top.", "Top with spring onion and whatever you love — tenkasu for crunch, a jammy egg for luxury.", "Shichimi on top, slurp loudly. In Japan that's a compliment to the cook, and the cook is you."]
    },
    "onigiri": {
        title: "Onigiri",
        cuisine: "Japanese",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/jp-7.jpg",
        description: "Japanese rice balls — simple, portable, and comforting.",
        ingredients: ["2 cups cooked short-grain rice, warm (freshly cooked shapes best)", "fillings: canned tuna mixed with 1 tbsp mayo, or umeboshi plum, or flaked grilled salmon", "2 sheets nori, cut into wide strips", "salt", "a small bowl of water"],
        steps: ["Wet both hands in the water and rub a generous pinch of salt across your palms — the salt goes on your hands, not in the rice. That's the traditional seasoning trick.", "Scoop a tennis-ball of warm rice, press a deep dimple in the middle, and drop in a teaspoon of filling.", "Fold the rice over the filling and squeeze gently into a triangle: cup one hand into a roof shape, rotate, press. Three rotations usually does it.", "Press firm enough to survive being held, loose enough that it crumbles pleasantly when bitten. Squeezing hard makes rice bullets.", "Wrap the bottom with a nori strip — added just before eating so it stays crisp.", "Eat warm, or wrap for later — onigiri is Japan's original portable lunch and it survives backpacks better than any sandwich."]
    },
    "katsu-curry": {
        title: "Katsu Curry",
        cuisine: "Japanese",
        time: "35 min",
        servings: "Serves 2",
        image: "/images/jp-8.jpg",
        description: "Crispy breaded chicken cutlet with rich Japanese curry.",
        ingredients: ["2 chicken breasts or 4 boneless thigh fillets", "salt + pepper, ¼ cup flour, 1 beaten egg, 1½ cups panko", "oil for shallow frying", "Curry: 1 onion + 1 carrot, chopped, 1 tbsp butter", "2 tbsp curry powder + 1 tbsp flour", "2 cups chicken stock + 1 tsp soy + 1 tsp honey", "steamed rice"],
        steps: ["Start the curry: soften the onion and carrot in butter 5–6 min, stir in curry powder and flour for 1 minute to cook out the raw taste.", "Add the stock gradually, stirring, with the soy and honey. Simmer 10 min until it thickens to a gravy that coats a spoon. Blend smooth or leave chunky — both are legitimate.", "Butterfly the chicken breasts so they're even, season, then bread: flour, egg, then PRESS into panko.", "Shallow-fry 3–4 min per side at 170°C until deep golden. Rest 3 minutes on a rack — the rest keeps the juice in when you slice.", "Slice the katsu into strips (one clean stroke each) so the crust doesn't shatter.", "Rice on one side of the plate, katsu leaning on it, curry flooded over the rice half only — the crust stays crisp until the last bite. That's the katsu-curry geometry."]
    },
    "mochi": {
        title: "Mochi",
        cuisine: "Japanese",
        time: "30 min",
        servings: "Serves 4",
        image: "/images/jp-9.jpg",
        description: "Soft, chewy Japanese rice cakes with sweet fillings.",
        ingredients: ["1 cup (120g) glutinous rice flour (mochiko/shiratamako — regular rice flour will NOT work)", "¾ cup water + 3 tbsp sugar", "½ cup cornstarch, toasted 1 min in a dry pan (for dusting)", "Filling: red bean paste rolled into 8 balls, or 8 small scoops of ice cream frozen HARD"],
        steps: ["If doing ice cream: scoop 8 small balls onto a tray and freeze until rock solid, at least 1 hour. Soft ice cream is game over.", "Whisk rice flour, water and sugar smooth in a microwave-safe bowl. Cover loosely.", "Microwave 1 min, stir with a wet spatula, 1 min more, stir again — it's done when translucent, glossy and stretchy like slime you'd actually want to eat.", "Tip it onto a surface generously dusted with the toasted cornstarch. Dust the top too. Let it cool 5 min — it's molten glue at first.", "Divide into 8, flatten each into a palm-size disc with dusted hands, wrap around a filling ball and pinch sealed. Work fast with ice cream.", "Dust off the excess starch. Red bean ones keep a day at room temp; ice cream ones go back in the freezer 30 min and are best eaten slightly softened, 5 min out."]
    },
    "omakase": {
        title: "Omakase",
        cuisine: "Japanese",
        time: "45 min",
        servings: "Serves 2",
        image: "/images/jp-10.jpg",
        description: "Chef's choice sushi — an elegant Japanese dining experience.",
        ingredients: ["seasoned sushi rice", "3–5 kinds of sashimi-grade fish", "wasabi + soy sauce", "pickled ginger", "optional: tamago, ikura, sea urchin"],
        steps: ["Be your own chef: plan the order — start light (white fish), build to rich (tuna, salmon, uni).", "Press small ovals of warm rice; brush each with a little soy.", "Lay one slice of fish over each piece; add a dab of wasabi.", "Serve just one or two pieces at a time, freshest first — that's the omakase way.", "Finish with tamago or a hand roll, and a cup of green tea."]
    },

    // ===== 印度 (Indian) =====
    "butter-chicken": {
        title: "Butter Chicken",
        cuisine: "Indian",
        time: "35 min",
        servings: "Serves 3",
        image: "/images/in-0.jpg",
        description: "Rich, creamy, mildly spiced butter chicken — a North Indian classic.",
        ingredients: ["400g chicken thigh, cut in big cubes", "Marinade: 3 tbsp yogurt, 1 tbsp ginger-garlic paste, 1 tsp chilli powder, 1 tsp garam masala, squeeze of lime", "3 tbsp butter + 1 tbsp oil", "1 large onion, finely chopped", "1 cup tomato passata", "1 tsp each cumin, paprika, garam masala", "½ cup cream + 1 tsp sugar", "fresh coriander + one more knob of butter to finish"],
        steps: ["Massage the marinade into the chicken. Even 15 minutes helps; overnight is glorious.", "Sear the chicken in 1 tbsp butter + the oil over high heat until charred at the edges but not cooked through. Set aside — those charred bits are your tandoor substitute.", "In the same pan, soften the onion in 2 tbsp butter for 5–6 min until golden, not just translucent.", "Add the spices for 30 seconds until fragrant, then the passata. Simmer 8–10 min until it darkens and the butter starts separating at the edges — that's when the raw tomato taste is gone.", "Return the chicken, simmer gently 5 min to cook through, then stir in the cream and sugar and warm WITHOUT boiling.", "Taste: rich, gently sweet, mildly spiced. Finish with the last knob of butter and coriander. Serve with naan or rice — and use the naan as a spoon like everyone secretly does."]
    },
    "biryani": {
        title: "Biryani",
        cuisine: "Indian",
        time: "75 min",
        servings: "Serves 4",
        image: "/images/in-1.jpg",
        description: "Fragrant Indian rice dish with tender chicken and aromatic spices.",
        ingredients: ["2 cups basmati rice, rinsed until the water runs clear", "400g chicken thigh, big pieces", "Marinade: 1 cup yogurt, 2 tbsp ginger-garlic paste, 2 tbsp biryani masala, 1 tsp turmeric, 1 tsp chilli, salt", "2 onions, thinly sliced and fried golden (birista)", "a handful each of mint + coriander leaves", "¼ cup warm milk + a big pinch of saffron", "4 tbsp ghee", "whole spices: 2 bay leaves, 4 cardamom pods, 1 cinnamon stick"],
        steps: ["Marinate the chicken at least 30 min (overnight is better). Soak the rinsed rice 20 min. Steep the saffron in the warm milk.", "Fry the sliced onions in ghee until deep golden and crisp — 10 patient minutes. Save half for layering.", "Boil a big pot of heavily salted water with the whole spices; cook the rice ONLY to 70% done (the grain still has a firm white core, about 5–6 min). Drain.", "Spread the marinated chicken (with all its marinade) on the bottom of a heavy pot. Layer: half the rice, half the onions and herbs, the rest of the rice, the rest of the onions and herbs, then the saffron milk and 2 tbsp ghee over the top.", "Seal the lid tight (foil under the lid works) and cook: 5 min on medium to build steam, then 25 min on the LOWEST heat. No peeking — the trapped steam (dum) is doing the cooking.", "Rest 10 min off the heat, then open and dig from the bottom up so every plate gets chicken, saffron rice and crispy onion. The slightly crusted bottom layer is the prize."]
    },
    "masala-dosa": {
        title: "Masala Dosa",
        cuisine: "Indian",
        time: "30 min",
        servings: "Makes 6",
        image: "/images/in-2.jpg",
        description: "Crispy South Indian crepe with spiced potato filling.",
        ingredients: ["3 cups dosa batter (store-bought is totally fine)", "3 boiled potatoes, roughly mashed", "1 onion, sliced thin", "1 tsp mustard seeds + 10 curry leaves", "½ tsp turmeric + ¾ tsp salt", "3 tbsp ghee or oil", "coconut chutney, to serve"],
        steps: ["Heat 1 tbsp ghee, pop the mustard seeds (they'll jump — that's good), add curry leaves for 10 seconds.", "Add the onion, cook 3 min until golden. Stir in turmeric, salt and the potatoes. Your filling is done — taste it, it should already make you happy.", "Heat a flat pan on medium-high. Sprinkle water — if it dances, you're ready.", "Pour ⅓ cup batter in the centre and spread it outward in circles with the ladle. If the first one tears, that's the rule, not you.", "Drizzle 1 tsp ghee around the edge. Wait 2 min — no flipping — until it's golden and lifts by itself.", "Put a line of potato in the middle, fold both sides over, done. Serve hot with chutney. You just made a dosa on your first try."]
    },
    "samosa": {
        title: "Samosa",
        cuisine: "Indian",
        time: "60 min",
        servings: "Makes 8",
        image: "/images/in-3.jpg",
        description: "Crispy Indian pastries with spiced potato and pea filling.",
        ingredients: ["2 cups flour + ¾ tsp salt + 4 tbsp oil", "about ½ cup cold water", "3 boiled potatoes, crumbled", "½ cup peas", "1 tsp cumin seeds + 1 tsp garam masala + ¾ tsp salt", "a handful of chopped coriander", "oil for frying"],
        steps: ["Rub the 4 tbsp oil into the flour with your fingers, then add water bit by bit to make a firm dough. Rest it 30 min — it needs the nap.", "Fry cumin in 1 tbsp oil for 20 seconds, add peas, potatoes, garam masala and salt. Mash a little, mix in coriander, and let it cool.", "Roll the dough into 4 balls, then flat ovals. Cut each in half — every half becomes one samosa.", "Fold a half into a cone, wet the edge to glue it. Fill with potato, pinch the top shut tight.", "Fry on LOW heat 12–15 min until deep golden. Low and slow is the whole secret — fast frying makes soft shells.", "Let them sit 5 min (they get crispier as they cool). Dip in any chutney or even ketchup — no judgement here."]
    },
    "paneer-tikka": {
        title: "Paneer Tikka",
        cuisine: "Indian",
        time: "40 min",
        servings: "Serves 2",
        image: "/images/in-4.jpg",
        description: "Grilled paneer with aromatic Indian spices.",
        ingredients: ["250g paneer, in big cubes", "½ cup thick yogurt", "1 tbsp ginger-garlic paste", "1 tsp garam masala + 1 tsp chilli powder + ¾ tsp salt", "1 tbsp lemon juice", "1 green pepper + 1 onion, in squares", "1 tbsp butter"],
        steps: ["Mix the yogurt with all the spices and lemon — this is your marinade, and it should taste bold.", "Gently coat the paneer, pepper and onion in it. Wait 20 min (or up to 4 hours — more time, more flavour).", "Thread onto skewers, or just lay everything on a tray if skewers feel like homework.", "Grill at 240°C or pan-fry on high, about 2 min per side, until the corners char a little. Char = flavour, not burnt.", "Brush with butter in the last minute. Watch it turn glossy like the restaurant version.", "Squeeze lemon on top and eat hot. The crispy yogurt bits stuck to the pan are the chef's reward."]
    },
    "gulab-jamun": {
        title: "Gulab Jamun",
        cuisine: "Indian",
        time: "50 min",
        servings: "Makes 16",
        image: "/images/in-5.jpg",
        description: "Soft, syrupy Indian dough balls — a beloved dessert.",
        ingredients: ["1 cup milk powder", "3 tbsp flour + ¼ tsp baking soda", "2 tbsp melted ghee", "4–6 tbsp milk", "Syrup: 2 cups sugar + 2 cups water + 6 cardamom pods", "ghee or oil for frying"],
        steps: ["Make the syrup first: boil sugar, water and cardamom 5 min, then keep it warm on the lowest flame.", "Mix milk powder, flour and soda. Add the ghee, then milk spoon by spoon until a soft dough forms. Stop mixing the second it comes together.", "Roll 16 small balls with greased hands. Smooth them well — smooth now means no cracks later.", "Fry on LOW heat (the balls should rise slowly, not shoot up). Stir gently 7–8 min until deep brown.", "Drop them straight into the warm syrup. Walk away for 30 minutes — they'll drink it up and double in size.", "Serve warm. Soft, syrupy, melts in the mouth — and yes, you made these from milk powder."]
    },
    "chole-bhature": {
        title: "Chole Bhature",
        cuisine: "Indian",
        time: "60 min",
        servings: "Serves 3",
        image: "/images/in-6.jpg",
        description: "Spicy chickpea curry with fluffy fried bread.",
        ingredients: ["2 cups chickpeas, soaked overnight (or 3 cups canned)", "2 onions + 3 tomatoes, chopped", "1 tbsp ginger-garlic paste", "2 tbsp chole masala + 1 tsp cumin seeds + salt", "1 black tea bag (trust us — it makes the colour)", "Bhature: 2 cups flour + ¼ cup yogurt + ½ tsp baking powder + 1 tsp sugar + water", "oil for frying"],
        steps: ["Cook the chickpeas with the tea bag until soft (20 min pressure cooker, 10 min if canned). Remove the bag, keep the water.", "Mix the bhature dough — soft, not sticky. Cover it and let it rest somewhere warm while you cook.", "Fry cumin, then onions until golden (6 min). Add ginger-garlic, then tomatoes and masala until the oil peeks out at the edges.", "Add chickpeas + 1½ cups of their water. Simmer 15 min, mash a few against the pot to thicken. Dark, thick, done.", "Roll the dough into 6 ovals. Fry one at a time in hot oil — press gently and watch it balloon. That moment never gets old.", "Eat right away with raw onion and lemon. Hands, not forks. This is the rule."]
    },
    "palak-paneer": {
        title: "Palak Paneer",
        cuisine: "Indian",
        time: "35 min",
        servings: "Serves 3",
        image: "/images/in-7.jpg",
        description: "Creamy paneer in a vibrant spinach gravy.",
        ingredients: ["400g spinach", "250g paneer, cubed", "1 onion + 2 tomatoes, chopped", "1 tbsp ginger-garlic paste", "1 tsp cumin seeds + ½ tsp garam masala + salt", "2 tbsp butter + 2 tbsp cream"],
        steps: ["Boil the spinach 1 minute, then dunk it in cold water. This one trick keeps your curry bright green instead of army green.", "Blend it into a rough purée — a little texture is good.", "Fry cumin in butter, add onion for 5 min, then ginger-garlic, then tomatoes until soft.", "Pour in the spinach and simmer just 3 min. Short is the point — long boiling steals the colour back.", "Add the paneer cubes and warm them through for 2 min. Swirl in the cream.", "Squeeze of lemon, done. Scoop it up with naan, roti or rice — it loves them all equally."]
    },
    "pani-puri": {
        title: "Pani Puri",
        cuisine: "Indian",
        time: "40 min",
        servings: "Serves 4",
        image: "/images/in-8.jpg",
        description: "Crispy hollow shells filled with spicy, tangy water — a street food icon.",
        ingredients: ["30 ready-made puri shells (everyone buys them, seriously)", "1 bunch coriander + ½ bunch mint", "2 green chillies + a thumb of ginger", "1 tsp roasted cumin + ½ tsp black salt + juice of 1 lime", "3 cups cold water", "2 boiled potatoes + ½ cup chickpeas", "tamarind chutney"],
        steps: ["Blend the coriander, mint, chillies, ginger and lime with 1 cup water until smooth.", "Add the spices, black salt and the rest of the water. Chill it. Taste — it should be a spicy-sour slap, in the best way.", "Mash the potatoes with the chickpeas. That's the filling, done.", "Line everything up: shells, filling, chutney, and the pani with a small ladle.", "Crack a hole in a shell's top with your thumb, spoon in filling, a drop of chutney, then flood it with pani.", "In your mouth whole, immediately — you have 10 seconds before it leaks. It's a race and everyone wins."]
    },
    "jalebi": {
        title: "Jalebi",
        cuisine: "Indian",
        time: "45 min",
        servings: "Makes 20",
        image: "/images/in-9.jpg",
        description: "Crispy, syrupy Indian sweets in a spiral shape.",
        ingredients: ["1 cup flour + 1 tbsp cornstarch + ¼ tsp turmeric", "¾ cup yogurt + ¼ cup water", "¼ tsp baking soda", "Syrup: 1½ cups sugar + ¾ cup water + 6 cardamom pods + 1 tsp lemon juice", "oil for frying", "a squeeze bottle (or a zip bag with a corner snipped)"],
        steps: ["Whisk flour, cornstarch, turmeric, yogurt and water into a thick batter. Let it sit 2 hours — patience makes the tang.", "Boil the syrup ingredients 6 min until slightly sticky. Keep it warm.", "Stir the soda into the batter, load your bottle. The batter should fall in a slow ribbon.", "Pipe spirals into 170°C oil, 3 rounds each. The first few will look like modern art — keep going, spiral #4 clicks.", "Fry 2 min per side until crisp, then dunk in the warm syrup for 30 seconds a side.", "Eat hot, whole, while it's still crackly. Syrup on your chin means you did it right."]
    },

    // ===== 法式 (French) =====
    "croissant": {
        title: "Croissant",
        cuisine: "French",
        time: "varies",
        servings: "Makes 8",
        image: "/images/fr-0.jpg",
        description: "Classic French croissant — flaky, buttery, and irresistible.",
        ingredients: ["bread dough (flour, yeast, milk)", "lots of cold butter", "egg wash"],
        steps: ["Make a dough and chill.", "Encase a butter block; do 3 fold-and-roll turns, chilling between.", "Cut triangles and roll into crescents; prove until puffy.", "Egg-wash and bake at 200C until golden and flaky."]
    },
    "croque-monsieur": {
        title: "Croque Monsieur",
        cuisine: "French",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/fr-1.jpg",
        description: "The ultimate French ham and cheese sandwich, gratinéed to perfection.",
        ingredients: ["4 slices bread", "4 slices ham", "1.5 cups grated gruyère", "1 tbsp butter + 1 tbsp flour + 1 cup milk", "mustard + nutmeg"],
        steps: ["White sauce: melt butter, stir flour 1 min, whisk in milk until thick; add nutmeg + a little cheese.", "Butter bread; build bread → mustard → ham → cheese → bread.", "Spread white sauce on top, blanket with remaining cheese.", "Grill/broil 4–5 min until bubbling and golden."]
    },
    "ratatouille": {
        title: "Ratatouille",
        cuisine: "French",
        time: "55 min",
        servings: "Serves 4",
        image: "/images/fr-2.jpg",
        description: "Provençal vegetable stew — the taste of summer.",
        ingredients: ["aubergine, courgette, pepper, tomato", "onion + garlic", "olive oil + herbs de Provence"],
        steps: ["Make a tomato-onion-garlic sauce in the base of a dish.", "Slice the veg thin and fan them over the top.", "Drizzle oil, scatter herbs, cover with paper.", "Bake at 190C ~45 min until tender."]
    },
    "crepe": {
        title: "Crepe",
        cuisine: "French",
        time: "25 min",
        servings: "Serves 3",
        image: "/images/fr-3.jpg",
        description: "Thin, delicate French pancakes — sweet or savoury.",
        ingredients: ["1 cup flour, 2 eggs, 1.25 cups milk", "1 tbsp melted butter", "filling: sugar-lemon or chocolate"],
        steps: ["Whisk a thin smooth batter; rest 20 min.", "Swirl a thin layer onto a hot buttered pan.", "Flip when the edges lift; 30 sec more.", "Fill and fold into quarters."]
    },
    "macarons": {
        title: "Macarons",
        cuisine: "French",
        time: "40 min",
        servings: "Makes 20",
        image: "/images/fr-4.jpg",
        description: "Delicate French almond meringue cookies with creamy filling.",
        ingredients: ["1 cup ground almonds + 1.5 cups icing sugar", "3 egg whites + ¼ cup sugar", "filling: ganache or buttercream"],
        steps: ["Sift the almonds and icing sugar.", "Whip the whites to a stiff meringue, then fold in the almond mix.", "Pipe rounds, tap the tray, rest 30 min until skinned.", "Bake at 150C ~14 min; sandwich with filling."]
    },
    "quiche": {
        title: "Quiche",
        cuisine: "French",
        time: "50 min",
        servings: "Serves 6",
        image: "/images/fr-5.jpg",
        description: "Classic French quiche with bacon, cheese, and creamy egg filling.",
        ingredients: ["1 shortcrust pastry", "3 eggs + 1 cup cream", "bacon + cheese", "onion"],
        steps: ["Blind-bake the pastry case 15 min.", "Scatter in cooked bacon, onion and cheese.", "Whisk eggs and cream with seasoning; pour in.", "Bake at 180C ~30 min until just set."]
    },
    "beef-bourguignon": {
        title: "Beef Bourguignon",
        cuisine: "French",
        time: "3 hrs",
        servings: "Serves 4",
        image: "/images/fr-6.jpg",
        description: "Classic French beef stew braised in red wine.",
        ingredients: ["800g beef chuck", "bacon, onion, carrot, garlic", "2 cups red wine + stock", "mushrooms"],
        steps: ["Brown the beef in batches; set aside.", "Soften bacon and veg, then return the beef.", "Add wine and stock; simmer covered 2.5 hrs.", "Add fried mushrooms near the end; reduce to a glossy sauce."]
    },
    "french-onion-soup": {
        title: "French Onion Soup",
        cuisine: "French",
        time: "60 min",
        servings: "Serves 4",
        image: "/images/fr-7.jpg",
        description: "Rich, savoury onion soup topped with melted cheese.",
        ingredients: ["4 onions, thinly sliced", "2 tbsp butter", "4 cups beef stock + splash wine", "baguette + gruyere"],
        steps: ["Cook the onions in butter LOW for 40 min until deep brown.", "Add wine and stock; simmer 20 min.", "Ladle into bowls, float toasted baguette on top.", "Pile on gruyere and grill until bubbling."]
    },
    "baguette-sandwich": {
        title: "Baguette Sandwich",
        cuisine: "French",
        time: "8 min",
        servings: "Serves 1",
        image: "/images/fr-8.jpg",
        description: "Classic French baguette with ham and brie.",
        ingredients: ["1 baguette", "ham + brie", "butter", "cornichons / lettuce"],
        steps: ["Split the baguette and butter generously.", "Layer ham and brie.", "Add cornichons or greens.", "Press and slice."]
    },
    "eclair": {
        title: "Éclair",
        cuisine: "French",
        time: "50 min",
        servings: "Makes 10",
        image: "/images/fr-9.jpg",
        description: "Classic French pastry — choux filled with cream and topped with chocolate.",
        ingredients: ["choux: water, butter, flour, eggs", "filling: pastry cream", "chocolate glaze"],
        steps: ["Make choux: boil water and butter, beat in flour, then eggs.", "Pipe logs and bake at 200C until hollow and crisp.", "Fill with pastry cream.", "Dip the tops in chocolate glaze."]
    },

    // ===== 意大利 (Italian) =====
    "margherita-pizza": {
        title: "Margherita Pizza",
        cuisine: "Italian",
        time: "30 min",
        servings: "Serves 2",
        image: "/images/it-0.jpg",
        description: "Classic Italian pizza with tomato, mozzarella, and basil.",
        ingredients: ["400g pizza dough (store-bought is fine — but it MUST be at room temperature)", "½ cup passata", "1 clove garlic, grated + a pinch of salt + 1 tsp olive oil", "125g fresh mozzarella, torn and drained on paper towel", "fresh basil leaves", "olive oil + semolina or flour for dusting"],
        steps: ["Put a pizza stone or an upside-down baking tray on the top shelf and crank the oven to its absolute maximum (250°C+) for a full 30 min. A cold surface is why home pizza disappoints.", "Stir the garlic, salt and olive oil into the passata. That's the whole sauce — no cooking.", "Stretch the room-temperature dough by hand on a floured surface, pressing from the centre outwards. Leave the edge fat. Never use a rolling pin — it kills the bubbles.", "Sauce in a thin layer — 3 tbsp maximum. Too much sauce = soggy middle. Scatter the drained mozzarella. Nothing else yet.", "Slide it onto the screaming-hot tray and bake 7–10 min until the crust is leopard-spotted and the cheese bubbles.", "Basil and a swirl of olive oil go on AFTER the oven (basil burns black inside). Slice, and accept that you'll be making this weekly now."]
    },
    "carbonara": {
        title: "Carbonara",
        cuisine: "Italian",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/it-1.jpg",
        description: "Classic Roman pasta with eggs, cheese, and pancetta — no cream!",
        ingredients: ["200g spaghetti", "100g pancetta or guanciale (bacon works), cut into little batons", "2 whole eggs + 1 extra yolk", "50g pecorino or parmesan, finely grated, plus extra", "a scandalous amount of coarse black pepper", "NO cream. Really. None."],
        steps: ["Boil the spaghetti in well-salted water. Before draining, SAVE A FULL MUG of the cloudy pasta water — it's the sauce's secret ingredient.", "While the pasta cooks, fry the pancetta from a cold pan on medium until the fat renders and it's crisp, about 5 min. Kill the heat.", "Whisk the eggs, yolk, cheese and lots of pepper in a bowl until it looks like wet sand.", "The drained pasta goes into the pancetta pan (heat still OFF); toss in the fat for 30 seconds and let the sizzling stop.", "Pour in the egg mix while tossing fast, adding splashes of pasta water until it becomes a glossy cream that coats every strand. Residual heat cooks it; direct heat scrambles it — the pan must never go back on the flame.", "Serve instantly with more cheese and pepper. Silky = you nailed it. Scrambled = call it 'breakfast pasta' and try again tomorrow."]
    },
    "lasagne": {
        title: "Lasagne",
        cuisine: "Italian",
        time: "2 hrs",
        servings: "Serves 6",
        image: "/images/it-2.jpg",
        description: "Classic Italian layered pasta with ragù, béchamel, and cheese.",
        ingredients: ["500g beef mince", "1 onion + 1 carrot + 1 celery stick, diced small", "2 tbsp tomato paste + 700g passata", "½ cup milk (sounds weird, works wonders)", "Béchamel: 4 tbsp butter + 4 tbsp flour + 3 cups milk + a pinch of nutmeg", "250g lasagne sheets (no-boil is fine)", "100g parmesan, grated"],
        steps: ["Soften the veg in olive oil, 8 min. Add the beef and brown it properly — 6 min, let it catch a little. Browned bits = flavour.", "Add tomato paste, passata, milk and 1 tsp salt. Simmer on low 45 min. Go do something else; the pot is working.", "Béchamel: melt butter, stir in flour 1 min, add milk bit by bit while whisking. 3 min later you have white silk. Nutmeg in.", "Layer in a baking dish: thin ragù first, then sheets → ragù → béchamel → parmesan. Repeat 4 times, end with béchamel and lots of cheese.", "Bake at 180°C for 35–40 min until golden and bubbling at the corners.", "Now the hardest step: wait 15 minutes before cutting. It rewards you with clean, proud slices instead of soup."]
    },
    "risotto": {
        title: "Risotto",
        cuisine: "Italian",
        time: "35 min",
        servings: "Serves 2",
        image: "/images/it-3.jpg",
        description: "Creamy Italian rice dish — rich and comforting.",
        ingredients: ["1½ cups arborio rice (don't rinse it — the starch is the sauce)", "5 cups warm stock, kept on the stove", "1 small onion, diced fine", "½ cup white wine", "3 tbsp butter + 2 tbsp olive oil", "60g parmesan, grated"],
        steps: ["Keep the stock warm in a pot next to you — you'll be visiting it a lot.", "Soften the onion in oil and half the butter, 4 min, no browning.", "Add the rice and stir 2 min until the edges look glassy. It'll smell faintly nutty — that's your cue.", "Wine in, stir until it disappears. Then add stock one ladle at a time, stirring, waiting until each is absorbed. About 18 min. Put music on.", "Taste at 16 min: soft with a tiny bite in the middle = perfect. It should flow like slow lava, not stand like mash.", "Off the heat, beat in the rest of the butter and all the parmesan. That final stir is where the creaminess comes from. Serve immediately, feel fancy."]
    },
    "tiramisu": {
        title: "Tiramisu",
        cuisine: "Italian",
        time: "30 min (plus chilling)",
        servings: "Serves 6",
        image: "/images/it-4.jpg",
        description: "Classic Italian dessert with coffee-soaked biscuits and mascarpone.",
        ingredients: ["250g mascarpone, at room temperature", "3 fresh eggs, yolks and whites separated", "⅓ cup sugar", "1 cup strong coffee, cooled", "20 ladyfinger biscuits", "2 tbsp cocoa powder"],
        steps: ["Whisk the yolks with the sugar until pale and creamy, about 2 min. Fold in the mascarpone gently.", "Whip the whites to firm peaks, then fold them in softly. The fluff is the whole dessert — protect it.", "Dip each biscuit in the coffee for ONE second per side. Count it. They keep soaking after you stop.", "Layer: biscuits, half the cream, biscuits again, the rest of the cream.", "Fridge for 4 hours minimum — overnight if you can bear it. This is when it becomes tiramisu.", "Dust with cocoa right before serving. First bite quiet, second bite someone asks for the recipe."]
    },
    "gelato": {
        title: "Gelato",
        cuisine: "Italian",
        time: "5 hrs",
        servings: "Serves 4",
        image: "/images/it-5.jpg",
        description: "Rich, creamy Italian ice cream — silky and intense.",
        ingredients: ["2 cups whole milk + 1 cup cream", "¾ cup sugar, split in half", "4 egg yolks", "2 tsp vanilla (or 100g melted dark chocolate)", "a pinch of salt"],
        steps: ["Warm the milk, cream and half the sugar until it steams. No boiling — just hot.", "Whisk the yolks with the other half of the sugar until pale. Pour the hot milk in slowly, whisking the whole time.", "Back on low heat, stir until it thickens enough to coat a spoon, about 5 min. If you can draw a line on the spoon with your finger, it's ready.", "Stir in vanilla (or chocolate) and salt, then chill it completely — 2 hours. Cold base = creamy gelato, warm base = ice crystals.", "Churn in a machine 20 min. No machine? Freeze in a tray and beat with a fork every 30 min, 4 times. Works honestly fine.", "Freeze 1 hour more, then take it out 10 min before scooping. That's the silky window. You made real gelato."]
    },
    "spaghetti-bolognese": {
        title: "Spaghetti Bolognese",
        cuisine: "Italian",
        time: "60 min",
        servings: "Serves 4",
        image: "/images/it-6.jpg",
        description: "Classic Italian meat sauce served over spaghetti.",
        ingredients: ["400g spaghetti", "400g beef mince", "1 onion + 1 carrot + 1 celery stick, diced small", "2 tbsp tomato paste + 400g passata", "½ cup milk", "2 tbsp olive oil + salt + pepper", "parmesan for the summit"],
        steps: ["Cook the diced veg in oil on medium for 8 min until soft and sweet. Don't rush this — it's the base of everything.", "Turn up the heat, add the beef, and brown it for real: 6 min, breaking it up, letting it catch here and there.", "Stir in the tomato paste, then passata, milk and 1 tsp salt.", "Simmer on the lowest heat for 40 min. Stir when you walk past. The sauce is ready when it's thick and the top glistens.", "Cook the spaghetti in salty water until al dente. Scoop out a mug of the water before draining.", "Toss the pasta in the sauce pan with a splash of that water for one minute. Mountain of parmesan on top. Buonissimo — and you barely tried."]
    },
    "bruschetta": {
        title: "Bruschetta",
        cuisine: "Italian",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/it-7.jpg",
        description: "Toasted bread with fresh tomato, basil, and olive oil.",
        ingredients: ["4 thick slices of crusty bread", "3 ripe tomatoes, diced", "1 clove garlic, cut in half", "6 basil leaves", "2 tbsp olive oil + flaky salt"],
        steps: ["Salt the diced tomatoes and let them drain in a sieve for 10 min. This one step separates bruschetta from sad wet bread.", "Mix the tomatoes with the olive oil and half the basil.", "Toast the bread until properly golden and crunchy.", "While it's hot, rub each slice with the cut garlic — the toast grates it into pure perfume.", "Pile the tomatoes on at the last moment, drizzle a little more oil.", "Top with the rest of the basil and flaky salt. Eat standing up within 5 minutes. That's the authentic posture."]
    },
    "gnocchi": {
        title: "Gnocchi",
        cuisine: "Italian",
        time: "60 min",
        servings: "Serves 3",
        image: "/images/it-8.jpg",
        description: "Soft Italian potato dumplings — pillowy and comforting.",
        ingredients: ["4 floury potatoes (about 800g) — bake them, don't boil", "1 cup flour + extra for dusting", "1 egg yolk", "¾ tsp salt", "4 tbsp butter + 10 sage leaves + parmesan"],
        steps: ["Bake the potatoes at 200°C for 1 hour. Baking keeps them dry, and dry potato is the secret to light gnocchi.", "Scoop the flesh while hot, mash it fine, and let the steam escape for 5 min.", "Add salt, flour and the yolk. Knead for only 30 seconds — the less you touch it, the softer they'll be.", "Roll into thumb-thick ropes, cut into little pillows. Press a fork on top if you want the classic ridges.", "Boil in salted water. When they float, count 30 seconds, then scoop them out.", "Melt the butter with sage until it smells nutty, toss the gnocchi in, shower with parmesan. Pillowy. You'll be proud."]
    },
    "cannoli": {
        title: "Cannoli",
        cuisine: "Italian",
        time: "30 min",
        servings: "Makes 12",
        image: "/images/it-9.jpg",
        description: "Crispy Italian pastry shells filled with sweet ricotta.",
        ingredients: ["cannoli shells", "ricotta + icing sugar", "chocolate chips + pistachio"],
        steps: ["Drain the ricotta well, beat with icing sugar.", "Fold in chocolate chips.", "Pipe into the shells from both ends.", "Dip the ends in pistachio; eat soon so they stay crisp."]
    },

    // ===== 墨西哥 (Mexican) =====
    "tacos": {
        title: "Tacos",
        cuisine: "Mexican",
        time: "25 min",
        servings: "Serves 3",
        image: "/images/mx-0.jpg",
        description: "Authentic Mexican street tacos with your choice of filling.",
        ingredients: ["9 small corn tortillas (thin ones? double up — take 18)", "400g beef mince or chicken thigh, chopped small", "1 onion: half chopped for cooking, half minced raw for topping", "2 cloves garlic + 1 tsp cumin + 1 tsp smoked paprika + ½ tsp chilli or chipotle", "a big handful of fresh coriander, chopped", "2 limes, cut in wedges", "salsa or hot sauce", "salt"],
        steps: ["Fry the cooking-half of the onion in a little oil for 3 min, then add garlic and spices for 30 seconds — until your kitchen smells like a taquería.", "Add the meat, break it up, and cook on HIGH until the juices evaporate and the edges start to catch and crisp, 8–10 min. Salt at the end. Crispy bits > grey mince.", "Warm each tortilla 30 seconds per side in a dry hot pan until soft and puffed in spots. Stack under a clean towel to keep warm.", "Taco math: meat first, then raw onion + coriander, then salsa. No cheese, no lettuce — this is the street style, and it's better.", "Squeeze lime over EVERYTHING. The lime is not decoration; it's load-bearing.", "Serve 3 per person and put the pan in the middle for refills — someone will want a fourth."]
    },
    "burrito": {
        title: "Burrito",
        cuisine: "Mexican",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/mx-1.jpg",
        description: "Big, hearty burrito filled with rice, beans, and meat.",
        ingredients: ["large flour tortilla", "rice + beans", "meat or veg", "cheese, salsa, guac"],
        steps: ["Warm the tortilla so it folds.", "Layer rice, beans, meat and cheese down the middle.", "Add salsa and guac.", "Fold in the sides and roll tight; sear seam-down."]
    },
    "quesadilla": {
        title: "Quesadilla",
        cuisine: "Mexican",
        time: "8 min",
        servings: "Serves 1",
        image: "/images/mx-2.jpg",
        description: "Crispy, cheesy tortilla — ready in minutes.",
        ingredients: ["2 tortillas", "1.5 cups grated melty cheese", "optional: chicken, beans, jalapeños", "salsa + sour cream to dip"],
        steps: ["Dry pan on medium; lay a tortilla, cover with cheese (+ fillings).", "Top with the 2nd tortilla, press gently.", "2 min until golden, flip carefully, 2 min more until molten.", "Slide out, cut into triangles, dip everything."]
    },
    "guacamole": {
        title: "Guacamole",
        cuisine: "Mexican",
        time: "10 min",
        servings: "Serves 4",
        image: "/images/mx-3.jpg",
        description: "Creamy, fresh guacamole — the perfect dip.",
        ingredients: ["3 ripe avocados", "½ onion + 1 tomato, diced", "lime + coriander", "chilli + salt"],
        steps: ["Mash the avocado, leaving some chunks.", "Stir in onion, tomato and coriander.", "Add lime juice and chopped chilli.", "Salt to taste; eat with chips immediately."]
    },
    "enchiladas": {
        title: "Enchiladas",
        cuisine: "Mexican",
        time: "35 min",
        servings: "Serves 3",
        image: "/images/mx-4.jpg",
        description: "Rolled tortillas with chicken and cheese, baked in enchilada sauce.",
        ingredients: ["tortillas", "cooked chicken", "red enchilada sauce", "cheese"],
        steps: ["Dip tortillas in warm sauce.", "Fill with chicken, roll up, place seam-down in a dish.", "Pour over more sauce and cheese.", "Bake at 190C ~20 min until bubbling."]
    },
    "churros": {
        title: "Churros",
        cuisine: "Mexican",
        time: "25 min",
        servings: "Makes 12",
        image: "/images/mx-5.jpg",
        description: "Crispy, sugary Spanish/Mexican fried dough.",
        ingredients: ["dough: water, butter, flour, egg", "oil for frying", "cinnamon sugar"],
        steps: ["Make a thick dough: boil water and butter, beat in flour, then egg.", "Pipe straight into hot oil through a star tip.", "Fry until golden and crisp.", "Roll in cinnamon sugar; dip in chocolate."]
    },
    "nachos": {
        title: "Nachos",
        cuisine: "Mexican",
        time: "15 min",
        servings: "Serves 3",
        image: "/images/mx-6.jpg",
        description: "Loaded tortilla chips with melted cheese and toppings.",
        ingredients: ["tortilla chips", "grated cheese", "jalapeños + beans", "salsa, sour cream, guac"],
        steps: ["Spread chips on a tray.", "Scatter cheese, beans and jalapeños.", "Bake or grill until the cheese melts.", "Top with salsa, sour cream and guac."]
    },
    "tamales": {
        title: "Tamales",
        cuisine: "Mexican",
        time: "90 min",
        servings: "Makes 12",
        image: "/images/mx-7.jpg",
        description: "Steamed corn dough with savoury filling — a Mexican tradition.",
        ingredients: ["masa harina + broth + lard", "corn husks, soaked", "filling: pork in red sauce"],
        steps: ["Beat masa with lard and broth into a spreadable dough.", "Spread onto a husk, add filling, fold into a parcel.", "Stand upright in a steamer.", "Steam ~1 hr until the masa pulls away cleanly."]
    },
    "elote": {
        title: "Elote",
        cuisine: "Mexican",
        time: "15 min",
        servings: "Serves 4",
        image: "/images/mx-8.jpg",
        description: "Mexican street corn with mayo, cheese, and chilli.",
        ingredients: ["corn on the cob", "mayo + crema", "cotija cheese", "chilli powder + lime"],
        steps: ["Grill the corn until charred.", "Slather with mayo and crema.", "Roll in crumbled cotija.", "Dust with chilli and squeeze over lime."]
    },
    "flan": {
        title: "Flan",
        cuisine: "Mexican",
        time: "70 min",
        servings: "Serves 8",
        image: "/images/mx-9.jpg",
        description: "Creamy caramel custard — a classic Mexican dessert.",
        ingredients: ["1 cup sugar (for caramel)", "4 eggs", "1 can condensed + 1 can evaporated milk", "vanilla"],
        steps: ["Melt sugar to a caramel and pour into the mould.", "Blend eggs, both milks and vanilla.", "Pour over the caramel; bake in a water bath at 160C ~50 min.", "Chill, then flip out."]
    },

    // ===== 巴西 (Brazilian) =====
    "feijoada": {
        title: "Feijoada",
        cuisine: "Brazilian",
        time: "2 hrs",
        servings: "Serves 6",
        image: "/images/br-0.jpg",
        description: "Brazil's national dish — a hearty black bean and pork stew.",
        ingredients: ["2 cups black beans, soaked", "pork (sausage, ribs, bacon)", "onion + garlic + bay", "orange to serve"],
        steps: ["Cook the beans until soft.", "Brown the meats, then add onion, garlic and bay.", "Combine with the beans; simmer 1 hr until thick.", "Serve with rice, greens and orange slices."]
    },
    "pao-de-queijo": {
        title: "Pao de Queijo",
        cuisine: "Brazilian",
        time: "30 min",
        servings: "Makes 16",
        image: "/images/br-1.jpg",
        description: "Brazilian cheese bread — puffy, chewy, and addictive.",
        ingredients: ["2 cups tapioca flour", "1 cup milk + ⅓ cup oil", "2 eggs", "1.5 cups grated cheese"],
        steps: ["Boil the milk and oil, then stir into the tapioca flour.", "Cool slightly, beat in eggs and cheese into a sticky dough.", "Roll into balls.", "Bake at 190C ~20 min until puffed and golden."]
    },
    "brigadeiro": {
        title: "Brigadeiro",
        cuisine: "Brazilian",
        time: "20 min",
        servings: "Makes 20",
        image: "/images/br-2.jpg",
        description: "Brazilian chocolate truffles — a beloved sweet treat.",
        ingredients: ["1 can condensed milk", "2 tbsp cocoa", "1 tbsp butter", "chocolate sprinkles"],
        steps: ["Cook condensed milk, cocoa and butter on low, stirring.", "Cook until it pulls away from the pan.", "Cool, then roll into balls with buttered hands.", "Coat in sprinkles."]
    },
    "coxinha": {
        title: "Coxinha",
        cuisine: "Brazilian",
        time: "45 min",
        servings: "Makes 12",
        image: "/images/br-3.jpg",
        description: "Crispy Brazilian chicken croquettes.",
        ingredients: ["shredded chicken", "dough cooked in chicken broth", "cream cheese", "breadcrumbs"],
        steps: ["Make a stiff dough by cooking flour into hot broth.", "Wrap chicken and cheese in dough; shape like a teardrop.", "Coat in egg, then breadcrumbs.", "Deep-fry until deep golden."]
    },
    "moqueca": {
        title: "Moqueca",
        cuisine: "Brazilian",
        time: "30 min",
        servings: "Serves 3",
        image: "/images/br-4.jpg",
        description: "Brazilian seafood stew with coconut milk.",
        ingredients: ["white fish or prawns", "coconut milk", "tomato, onion, pepper, garlic", "lime + coriander + palm oil"],
        steps: ["Layer onion, tomato and pepper in a pot.", "Lay the fish on top; season with lime and garlic.", "Pour over coconut milk and a little palm oil.", "Simmer gently 20 min; finish with coriander."]
    },
    "acai-bowl": {
        title: "Acai Bowl",
        cuisine: "Brazilian",
        time: "10 min",
        servings: "Serves 1",
        image: "/images/br-5.jpg",
        description: "Energising acai berry bowl with granola and fruit.",
        ingredients: ["frozen acai pulp", "½ banana + splash juice", "granola", "fruit + honey"],
        steps: ["Blend acai with banana and a little juice until thick.", "Pour into a bowl.", "Top with granola and sliced fruit.", "Drizzle with honey."]
    },
    "picanha": {
        title: "Picanha",
        cuisine: "Brazilian",
        time: "25 min",
        servings: "Serves 4",
        image: "/images/br-6.jpg",
        description: "Brazilian-style grilled beef rump cap.",
        ingredients: ["1 picanha (rump cap)", "coarse salt", "garlic (optional)"],
        steps: ["Score the fat cap and salt generously.", "Sear fat-side down first to render.", "Grill to a deep crust, medium-rare inside.", "Rest, then slice against the grain."]
    },
    "pastel": {
        title: "Pastel",
        cuisine: "Brazilian",
        time: "30 min",
        servings: "Makes 8",
        image: "/images/br-7.jpg",
        description: "Crispy Brazilian fried pastries with savoury fillings.",
        ingredients: ["thin pastel dough sheets", "filling: cheese or minced beef", "oil for frying"],
        steps: ["Spoon filling onto a dough rectangle.", "Fold over and seal the edges with a fork.", "Deep-fry until blistered and crisp.", "Drain and eat hot."]
    },
    "churrasco": {
        title: "Churrasco",
        cuisine: "Brazilian",
        time: "30 min",
        servings: "Serves 4",
        image: "/images/br-8.jpg",
        description: "Brazilian-style grilled meat skewers.",
        ingredients: ["beef skewers (sirloin, sausage)", "coarse salt", "chimichurri (optional)"],
        steps: ["Salt the meat and thread onto skewers.", "Grill over high heat, turning, for a charred crust.", "Slice off the cooked outer layer; return to the heat.", "Serve with chimichurri."]
    },
    "quindim": {
        title: "Quindim",
        cuisine: "Brazilian",
        time: "50 min",
        servings: "Serves 8",
        image: "/images/br-9.jpg",
        description: "Brazilian coconut custard with a glossy top.",
        ingredients: ["10 egg yolks", "1 cup sugar", "1 cup grated coconut", "2 tbsp butter"],
        steps: ["Whisk yolks, sugar, coconut and melted butter.", "Pour into a buttered, sugared mould.", "Bake in a water bath at 170C ~40 min until set and golden.", "Cool, then turn out."]
    },

    // ===== 泰国 (Thai) =====
    "pad-thai": {
        title: "Pad Thai",
        cuisine: "Thai",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/th-0.jpg",
        description: "Sweet, sour, salty, spicy — the perfect Thai street food.",
        ingredients: ["200g flat dried rice noodles (5mm)", "2 eggs", "200g prawns or firm tofu cubes", "Sauce: 3 tbsp tamarind paste, 2 tbsp fish sauce, 2 tbsp palm or brown sugar", "2 cloves garlic, chopped", "2 big handfuls bean sprouts + 3 spring onions in batons", "¼ cup roasted peanuts, crushed + lime wedges + chilli flakes"],
        steps: ["Soak the noodles in hot-tap-temperature water about 20 min, until bendy but still too firm to eat. They finish cooking in the pan — pre-boiled noodles turn to mush.", "Stir the sauce together until the sugar dissolves. Taste it: sour first, then salty, then sweet.", "Get a wok or big pan properly hot with 2 tbsp oil. Fry the prawns/tofu until just done and push to one side.", "Garlic in for 10 seconds, then crack in the eggs, scramble roughly, and let them set slightly.", "Add the drained noodles and the sauce; toss constantly 2–3 min. Still stiff? Splash of water and keep tossing until chewy-soft.", "Throw in the sprouts and spring onion for 30 seconds — they should stay crunchy.", "Plate, blanket with crushed peanuts, and serve with lime and chilli flakes so everyone tunes their own."]
    },
    "green-curry": {
        title: "Green Curry",
        cuisine: "Thai",
        time: "25 min",
        servings: "Serves 3",
        image: "/images/th-1.jpg",
        description: "Fragrant Thai green curry with chicken and vegetables.",
        ingredients: ["2 tbsp green curry paste", "1 can coconut milk", "chicken + aubergine", "fish sauce, sugar, basil"],
        steps: ["Fry the curry paste in a little thick coconut cream.", "Add chicken, then the rest of the coconut milk.", "Add aubergine, fish sauce and sugar; simmer until tender.", "Finish with Thai basil; serve with rice."]
    },
    "tom-yum": {
        title: "Tom Yum",
        cuisine: "Thai",
        time: "25 min",
        servings: "Serves 3",
        image: "/images/th-2.jpg",
        description: "Hot and sour Thai soup with prawns and mushrooms.",
        ingredients: ["stock", "lemongrass, galangal, lime leaves", "prawns + mushrooms", "chilli, lime, fish sauce"],
        steps: ["Simmer stock with lemongrass, galangal and lime leaves.", "Add mushrooms and prawns; cook until pink.", "Season with fish sauce, lime and chilli.", "It should be hot, sour and aromatic."]
    },
    "mango-sticky-rice": {
        title: "Mango Sticky Rice",
        cuisine: "Thai",
        time: "30 min",
        servings: "Serves 2",
        image: "/images/th-3.jpg",
        description: "Sweet, creamy mango sticky rice — a Thai dessert classic.",
        ingredients: ["1 cup glutinous rice, soaked", "1 cup coconut milk + sugar + salt", "1 ripe mango"],
        steps: ["Steam the soaked sticky rice ~20 min.", "Warm coconut milk with sugar and a pinch of salt.", "Stir most of it into the hot rice; rest 15 min.", "Serve with sliced mango and the rest of the sauce."]
    },
    "som-tam": {
        title: "Som Tam",
        cuisine: "Thai",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/th-4.jpg",
        description: "Spicy, tangy Thai green papaya salad.",
        ingredients: ["green papaya, shredded", "tomato + green beans + peanuts", "garlic + chilli", "lime, fish sauce, palm sugar"],
        steps: ["Pound garlic and chilli in a mortar.", "Add lime, fish sauce and palm sugar.", "Bruise in tomato, beans and papaya.", "Toss with peanuts; serve cold."]
    },
    "massaman-curry": {
        title: "Massaman Curry",
        cuisine: "Thai",
        time: "75 min",
        servings: "Serves 4",
        image: "/images/th-5.jpg",
        description: "Rich, mild Thai curry with beef, potatoes, and peanuts.",
        ingredients: ["2 tbsp massaman paste", "1 can coconut milk", "beef + potato + onion", "peanuts, tamarind, fish sauce"],
        steps: ["Fry the paste in coconut cream.", "Add beef and brown, then the coconut milk.", "Add potato, onion, peanuts, tamarind and fish sauce.", "Simmer LOW ~1 hr until the beef is tender."]
    },
    "spring-rolls": {
        title: "Spring Rolls",
        cuisine: "Thai",
        time: "35 min",
        servings: "Makes 12",
        image: "/images/th-6.jpg",
        description: "Crispy Thai spring rolls with vegetable filling.",
        ingredients: ["spring roll wrappers", "cabbage, carrot, glass noodles", "garlic + soy", "oil for frying"],
        steps: ["Stir-fry the shredded veg with garlic and soy; cool.", "Roll tightly in wrappers, seal with a flour paste.", "Deep-fry until golden and crisp.", "Serve with sweet chilli sauce."]
    },
    "thai-fried-rice": {
        title: "Thai Fried Rice",
        cuisine: "Thai",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/th-7.jpg",
        description: "Fragrant Thai-style fried rice with prawns or chicken.",
        ingredients: ["3 cups cold cooked rice", "1 egg + prawns or chicken", "garlic + onion", "soy + fish sauce, lime"],
        steps: ["Scramble the egg in a hot wok, add protein.", "Add garlic and onion, then the cold rice.", "Season with soy and fish sauce, tossing on high heat.", "Finish with spring onion and lime."]
    },
    "chicken-satay": {
        title: "Chicken Satay",
        cuisine: "Thai",
        time: "25 min",
        servings: "Serves 3",
        image: "/images/th-8.jpg",
        description: "Grilled chicken skewers with creamy peanut sauce.",
        ingredients: ["chicken strips", "coconut milk + turmeric + curry powder", "peanut sauce"],
        steps: ["Marinate chicken in coconut milk, turmeric and curry powder.", "Thread onto skewers.", "Grill until charred and cooked.", "Serve with warm peanut sauce."]
    },
    "thai-iced-tea": {
        title: "Thai Iced Tea",
        cuisine: "Thai",
        time: "10 min",
        servings: "Serves 2",
        image: "/images/th-9.jpg",
        description: "Sweet, creamy Thai iced tea — a refreshing drink.",
        ingredients: ["strong brewed Thai tea", "sugar", "condensed + evaporated milk", "ice"],
        steps: ["Brew the tea strong and sweeten while hot.", "Cool it down.", "Fill a glass with ice and pour over the tea.", "Top with the milks and stir to swirl."]
    },

    // ===== 德国 (German) =====
    "bratwurst": {
        title: "Bratwurst",
        cuisine: "German",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/de-0.jpg",
        description: "Classic German bratwurst with mustard and sauerkraut.",
        ingredients: ["bratwurst sausages", "bread roll", "mustard", "sauerkraut"],
        steps: ["Simmer or grill the bratwurst until browned.", "Warm the roll.", "Tuck the sausage in.", "Top with mustard and sauerkraut."]
    },
    "schnitzel": {
        title: "Schnitzel",
        cuisine: "German",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/de-1.jpg",
        description: "Crispy, golden, thin-cut pork or veal — German comfort food.",
        ingredients: ["pork or veal cutlets", "flour, egg, breadcrumbs", "oil + butter", "lemon"],
        steps: ["Pound the cutlets thin.", "Coat: flour, egg, then breadcrumbs.", "Shallow-fry in lots of butter, spooning over, until golden.", "Serve with a lemon wedge."]
    },
    "currywurst": {
        title: "Currywurst",
        cuisine: "German",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/de-2.jpg",
        description: "Classic German sausage with curry-spiced ketchup.",
        ingredients: ["bratwurst", "ketchup + tomato paste", "curry powder + paprika", "sugar"],
        steps: ["Fry the sausage, then slice it.", "Simmer ketchup, paste, sugar and spices into a sauce.", "Pour the curry sauce over the sliced sausage.", "Dust with extra curry powder; serve with fries."]
    },
    "pretzel": {
        title: "Pretzel",
        cuisine: "German",
        time: "90 min",
        servings: "Makes 8",
        image: "/images/de-3.jpg",
        description: "Soft, chewy German pretzels with a salty crust.",
        ingredients: ["bread dough", "baking-soda bath", "coarse salt"],
        steps: ["Shape the dough into pretzel knots.", "Dip briefly in a hot baking-soda bath (this gives the brown skin).", "Sprinkle with coarse salt.", "Bake at 220C until deep brown."]
    },
    "sauerbraten": {
        title: "Sauerbraten",
        cuisine: "German",
        time: "3 hrs",
        servings: "Serves 4",
        image: "/images/de-4.jpg",
        description: "German pot roast with a sweet-sour sauce.",
        ingredients: ["beef roast", "vinegar + wine marinade", "onion, carrot, spices", "gingersnaps to thicken"],
        steps: ["Marinate the beef in vinegar, wine and spices 2-3 days.", "Brown, then braise in the marinade ~3 hrs.", "Strain the liquid; thicken with crushed gingersnaps.", "Slice the beef and serve in the sauce."]
    },
    "black-forest-cake": {
        title: "Black Forest Cake",
        cuisine: "German",
        time: "90 min",
        servings: "Serves 8",
        image: "/images/de-5.jpg",
        description: "Classic German chocolate cake with cherries and cream.",
        ingredients: ["chocolate sponge", "cherries + kirsch", "whipped cream", "chocolate shavings"],
        steps: ["Bake and slice the chocolate sponge into layers.", "Soak with cherry syrup (and kirsch).", "Layer with cream and cherries.", "Cover in cream and chocolate shavings."]
    },
    "kasespatzle": {
        title: "Käsespätzle",
        cuisine: "German",
        time: "30 min",
        servings: "Serves 3",
        image: "/images/de-6.jpg",
        description: "German cheese noodles with crispy fried onions.",
        ingredients: ["flour + eggs + milk batter", "grated cheese", "fried onions"],
        steps: ["Make a thick batter; scrape into boiling water to form little dumplings.", "Drain when they float.", "Layer the spätzle with cheese until melted.", "Pile on crispy fried onions."]
    },
    "rouladen": {
        title: "Rouladen",
        cuisine: "German",
        time: "2 hrs",
        servings: "Serves 4",
        image: "/images/de-7.jpg",
        description: "German beef rolls with bacon, pickles, and onion.",
        ingredients: ["thin beef slices", "mustard, bacon, pickle, onion", "stock + red wine"],
        steps: ["Spread beef with mustard; lay on bacon, pickle and onion.", "Roll up and secure with a toothpick.", "Brown, then braise in stock and wine ~1.5 hrs.", "Reduce the liquid into a gravy."]
    },
    "frankfurter": {
        title: "Frankfurter",
        cuisine: "German",
        time: "10 min",
        servings: "Serves 2",
        image: "/images/de-8.jpg",
        description: "Classic German frankfurter with mustard.",
        ingredients: ["frankfurter sausages", "bread roll", "mustard"],
        steps: ["Gently heat the frankfurters in hot (not boiling) water.", "Warm the roll.", "Add the sausage.", "Serve with mustard."]
    },
    "apple-strudel": {
        title: "Apple Strudel",
        cuisine: "German",
        time: "50 min",
        servings: "Serves 6",
        image: "/images/de-9.jpg",
        description: "Classic German pastry filled with apples and cinnamon.",
        ingredients: ["thin strudel/filo pastry", "apples + sugar + cinnamon", "raisins + breadcrumbs", "butter"],
        steps: ["Toss apples with sugar, cinnamon and raisins.", "Brush pastry with butter, scatter breadcrumbs, add apples.", "Roll up tightly.", "Brush with butter and bake at 190C until golden."]
    },

    // ===== 中国 (Chinese) =====
    "dumplings": {
        title: "Dumplings",
        cuisine: "Chinese",
        time: "40 min",
        servings: "Makes 24",
        image: "/images/cn-0.jpg",
        description: "Classic Chinese dumplings with pork and cabbage filling.",
        ingredients: ["dumpling wrappers", "pork mince + cabbage", "ginger, garlic, soy, sesame oil", "spring onion"],
        steps: ["Mix mince with chopped cabbage and seasonings.", "Spoon into wrappers, wet the edge and pleat shut.", "Boil until they float, or pan-fry then steam.", "Dip in black vinegar and soy."]
    },
    "kung-pao-chicken": {
        title: "Kung Pao Chicken",
        cuisine: "Chinese",
        time: "25 min",
        servings: "Serves 2",
        image: "/images/cn-1.jpg",
        description: "Sweet, sour, hot and tingly — the classic Sichuan stir-fry.",
        ingredients: ["300g chicken thigh, cut in 2cm cubes", "Marinade: 1 tbsp soy, 1 tsp cornstarch, 1 tsp Shaoxing wine (or dry sherry)", "8–10 dried red chillies, snipped, seeds shaken out", "½ cup roasted peanuts", "3 cloves garlic + a thumb of ginger, sliced", "3 spring onions: whites in chunks, greens saved for the end", "Sauce: 2 tbsp soy, 1 tbsp black or rice vinegar, 1 tbsp sugar, 1 tsp cornstarch, 3 tbsp water", "1 tsp Sichuan peppercorns (optional — but they're the tingle)"],
        steps: ["Toss the chicken in the marinade and let it sit 10 min while you chop everything else. Stir-fries end fast — everything must be ready before the pan gets hot.", "Stir the sauce in a cup until the cornstarch disappears.", "Heat 2 tbsp oil in a wok on high until it shimmers. Chicken in a single layer, no touching for 1 min, then stir-fry until golden, about 3 min. Remove.", "Lower to medium; toast the chillies (and Sichuan peppercorns) in the oil 30 sec until darkened and fragrant — not black, or the whole dish tastes burnt.", "Garlic, ginger and spring onion whites in for 30 seconds, then the chicken back in, then the sauce poured down the side of the wok.", "It thickens in about 30 seconds. Toss in the peanuts and spring onion greens, one last toss, straight onto rice. Sweet, sour, hot and tingly — all at once."]
    },
    "sweet-and-sour-pork": {
        title: "Sweet & Sour Pork",
        cuisine: "Chinese",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/cn-2.jpg",
        description: "Classic Chinese sweet and sour pork with pineapple.",
        ingredients: ["pork, cubed + cornstarch", "pepper + pineapple + onion", "ketchup + vinegar + sugar"],
        steps: ["Coat the pork in cornstarch and fry until crisp.", "Stir-fry pepper, onion and pineapple.", "Add a sauce of ketchup, vinegar and sugar; bubble.", "Toss in the crispy pork to glaze."]
    },
    "spring-rolls-chinese": {
        title: "Spring Rolls (Chinese)",
        cuisine: "Chinese",
        time: "35 min",
        servings: "Makes 12",
        image: "/images/cn-3.jpg",
        description: "Crispy Chinese spring rolls with vegetable filling.",
        ingredients: ["spring roll wrappers", "cabbage + carrot + beansprouts", "garlic + soy", "oil for frying"],
        steps: ["Stir-fry the veg with garlic and soy; cool.", "Roll tightly, seal with flour paste.", "Deep-fry until golden and crisp.", "Serve with sweet chilli or soy."]
    },
    "chow-mein": {
        title: "Chow Mein",
        cuisine: "Chinese",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/cn-4.jpg",
        description: "Quick Chinese stir-fried noodles with vegetables.",
        ingredients: ["egg noodles", "chicken or veg", "cabbage, carrot, spring onion", "soy + oyster sauce + sesame oil"],
        steps: ["Boil the noodles and drain.", "Stir-fry protein, then the veg, on high heat.", "Add noodles and the sauces.", "Toss until coated and a little charred."]
    },
    "fried-rice": {
        title: "Fried Rice",
        cuisine: "Chinese",
        time: "15 min",
        servings: "Serves 2",
        image: "/images/cn-5.jpg",
        description: "Classic Chinese fried rice — the ultimate leftover transformation.",
        ingredients: ["3 cups COLD day-old cooked rice (fresh rice = fried porridge)", "2 eggs, beaten", "100g ham, chicken or shrimp, diced (optional)", "½ cup frozen peas + diced carrot", "2 spring onions, chopped", "1½ tbsp soy sauce + 1 tsp sesame oil", "2 cloves garlic, chopped", "2 tbsp neutral oil"],
        steps: ["Break the cold rice apart with wet hands until there are zero clumps. This 60 seconds decides everything.", "Heat 1 tbsp oil in a wok on high; scramble the eggs until just set and still glossy. Remove.", "Rest of the oil in: garlic for 10 seconds, then the meat and veg for 1–2 min.", "Rice in. Spread it flat and LET IT SIT 30 seconds to catch heat, then toss. Repeat — press, wait, toss. That's how you get toasty wok flavour without a restaurant burner.", "Soy sauce around the edge of the wok so it sizzles and toasts, then the sesame oil, then the egg back in — break it up as you toss.", "Spring onions for the last 15 seconds, done. Every grain separate, a little chewy, faintly smoky. Day-old rice forgives everything else."]
    },
    "peking-duck": {
        title: "Peking Duck",
        cuisine: "Chinese",
        time: "varies",
        servings: "Serves 4",
        image: "/images/cn-6.jpg",
        description: "Iconic Chinese dish with crisp skin and thin pancakes.",
        ingredients: ["duck", "honey glaze", "thin pancakes", "cucumber, spring onion, hoisin"],
        steps: ["Air-dry the glazed duck for crisp skin (overnight is best).", "Roast until lacquered and crisp.", "Carve the skin and meat.", "Wrap in pancakes with hoisin, cucumber and spring onion."]
    },
    "mapo-tofu": {
        title: "Mapo Tofu",
        cuisine: "Chinese",
        time: "20 min",
        servings: "Serves 2",
        image: "/images/cn-7.jpg",
        description: "Sichuan classic — spicy, numbing tofu with pork mince.",
        ingredients: ["1 box soft tofu, cubed", "pork mince", "doubanjiang + chilli + Sichuan pepper", "garlic, soy, cornstarch"],
        steps: ["Fry the mince, then the doubanjiang and aromatics until red and fragrant.", "Add stock and the tofu; simmer gently.", "Thicken with a cornstarch slurry.", "Top with Sichuan pepper and spring onion."]
    },
    "steamed-bao-buns": {
        title: "Steamed Bao Buns",
        cuisine: "Chinese",
        time: "varies",
        servings: "Makes 8",
        image: "/images/cn-8.jpg",
        description: "Fluffy steamed buns filled with pork or vegetables.",
        ingredients: ["bao dough (flour, yeast, sugar)", "filling: pork belly or veg", "hoisin, cucumber, spring onion"],
        steps: ["Make and prove the soft dough.", "Roll discs and fold over a square of paper.", "Steam 10 min until pillowy.", "Open and fill with braised pork, hoisin and cucumber."]
    },
    "egg-tart": {
        title: "Egg Tart",
        cuisine: "Chinese",
        time: "30 min",
        servings: "Makes 10",
        image: "/images/cn-9.jpg",
        description: "Creamy, silky egg tarts — a Cantonese favourite.",
        ingredients: ["tart pastry cases", "2 eggs + ½ cup sugar", "¾ cup hot water + evaporated milk", "vanilla"],
        steps: ["Dissolve sugar in hot water, cool; whisk in eggs and milk.", "Strain the custard for silkiness.", "Pour into the pastry cases.", "Bake at 200C ~15 min until just set with a wobble."]
    },

    // ===== 越南 (Vietnamese) =====
    "pho": {
        title: "Pho",
        cuisine: "Vietnamese",
        time: "2 hr",
        servings: "Serves 2",
        image: "/images/vn-0.jpg",
        description: "Vietnamese beef noodle soup — clear broth, fresh herbs, pure comfort.",
        ingredients: ["500g beef bones (marrow + knuckle)", "300g beef brisket", "300g flat rice noodles (banh pho)", "1 large onion, halved", "5cm ginger, halved lengthways", "Spices: 2 star anise, 1 cinnamon stick, 3 cloves, 1 tsp coriander seeds", "1 tbsp fish sauce + 1 tsp sugar (rock sugar is ideal)", "To serve: thinly sliced raw sirloin, bean sprouts, Thai basil, lime, chilli, spring onion"],
        steps: ["Parboil the bones for 10 min in boiling water, then tip the water away and rinse both the bones and the pot. Skipping this is exactly why homemade pho turns out grey and cloudy.", "Char the onion and ginger directly over a gas flame or under a hot grill until blackened in patches. That smoky sweetness IS the flavour of pho — it is not an optional garnish step.", "Toast the spices dry in a pan for 1 min until fragrant, then tie them in a cloth or tea strainer so you are not fishing star anise out of someone's bowl later.", "Cover the bones and brisket with 2.5L cold water, add the charred onion, ginger and spice bundle, and bring to a bare simmer — never a rolling boil, which emulsifies the fat and clouds everything.", "Simmer uncovered for 2 hrs, skimming the grey foam off the surface every 20 min for the first hour. Clear broth is a skimming job, nothing more mysterious than that.", "Pull the brisket out at about 1½ hrs and slice it thin against the grain. Season the broth at the very END with fish sauce and sugar, because it concentrates as it reduces.", "Soak the rice noodles in hot water until just floppy, then dunk them in boiling water for 20 seconds and drain hard.", "Noodles into the bowl, raw sirloin fanned over the top, then pour the broth over boiling hot — it cooks the beef in the bowl in about 15 seconds.", "Herbs, sprouts, lime and chilli go on at the table by the person eating. Pho is assembled twice: once by the cook, once by whoever gets the bowl."]
    },
    "banh-mi": {
        title: "Banh Mi",
        cuisine: "Vietnamese",
        time: "20 min",
        servings: "Makes 2",
        image: "/images/vn-1.jpg",
        description: "Crispy Vietnamese baguette sandwich with savoury fillings.",
        ingredients: ["2 short baguettes (light and thin-crusted, not heavy sourdough)", "150g roast pork or pork belly, sliced", "2 tbsp pork or chicken liver pâté", "3 tbsp mayonnaise", "Pickle: 1 carrot + ½ daikon, cut into matchsticks", "Pickle liquid: 3 tbsp rice vinegar, 2 tbsp sugar, ½ tsp salt, 4 tbsp warm water", "½ cucumber in long batons, coriander sprigs, sliced chilli", "a few dashes of Maggi seasoning or light soy"],
        steps: ["Make the pickle first: dissolve the sugar and salt in the warm water and vinegar, add the carrot and daikon, and leave at least 15 min. It should taste sharp AND sweet — this is the entire balance of the sandwich.", "Warm the baguettes in a hot oven for 4–5 min until the crust crackles, then let them cool for 2 min. Warm-but-not-hot is the goal; trapped steam turns the crumb chewy.", "Split lengthways leaving a hinge, and pull out a little of the soft interior so the filling has somewhere to sit instead of squeezing out.", "Pâté on one side, mayo on the other, edge to edge. Do not go light here — this is not a health sandwich.", "Layer in the pork, then a generous pile of pickle squeezed free of liquid, then cucumber, coriander and chilli.", "Dash the Maggi seasoning straight onto the bread before closing, press the whole thing firmly shut, and eat immediately."]
    },
    "goi-cuon": {
        title: "Goi Cuon",
        cuisine: "Vietnamese",
        time: "25 min",
        servings: "Makes 8",
        image: "/images/vn-2.jpg",
        description: "Fresh Vietnamese spring rolls with prawns, pork, and herbs.",
        ingredients: ["8 round rice paper wrappers (22cm)", "100g rice vermicelli, cooked and cooled", "8 cooked prawns, halved lengthways", "150g boiled pork belly, thinly sliced (optional)", "lettuce leaves, mint, coriander, garlic chives", "Dip: 3 tbsp hoisin + 1 tbsp peanut butter + 2 tbsp warm water", "crushed peanuts and sliced chilli to finish"],
        steps: ["Have everything cooked, cooled and lined up in front of you before the first wrapper touches water. Rice paper waits for nobody.", "Dip a wrapper in warm — not hot — water for about 2 seconds only. It should still feel slightly stiff when you lay it down, because it keeps softening on the board. Over-soaked paper tears every single time.", "Place lettuce and a small nest of vermicelli on the third of the wrapper nearest you, with herbs on top.", "Fold the near edge up over the filling, fold in both sides, then roll once, tightly.", "Before the final roll, lay two prawn halves cut-side down on the bare paper, then finish rolling. They show through pink from the outside, which is the whole point of the dish.", "Whisk the hoisin, peanut butter and warm water into a smooth dip and scatter the peanuts over. Serve within the hour — refrigerated rolls go hard and cloudy."]
    },
    "bun-bo-hue": {
        title: "Bun Bo Hue",
        cuisine: "Vietnamese",
        time: "1 hr 30 min",
        servings: "Serves 4",
        image: "/images/vn-3.jpg",
        description: "Spicy Vietnamese beef noodle soup from Hue.",
        ingredients: ["1 pork hock or 500g pork bones", "300g beef shank", "2 stalks lemongrass, bruised", "1 tbsp shrimp paste (mam ruoc) stirred into ½ cup hot water", "Chilli oil: 2 tbsp oil, 1 tbsp chilli flakes, 1 tbsp minced lemongrass, 2 cloves garlic", "1 tbsp fish sauce + 1 tsp sugar", "400g thick round rice noodles", "To serve: shredded cabbage or banana blossom, bean sprouts, lime, sliced onion, coriander"],
        steps: ["Parboil the bones and hock for 10 min, discard that water and rinse everything. Same rule as pho — deal with the grey scum now or drink cloudy soup later.", "Simmer the bones, shank and bruised lemongrass in 2.5L water for about 1 hr 15 min, skimming as you go. Pull the shank once tender and slice it thin.", "Let the shrimp paste settle in the hot water, then pour only the clear liquid into the broth and leave the grit behind. This funk is what makes it bun bo hue instead of just spicy pho — do not skip it, but do not tip the sediment in either.", "Fry the chilli oil ingredients gently for 2 min until the oil runs deep red and smells of lemongrass rather than burnt garlic.", "Stir most of the chilli oil into the broth, season with the fish sauce and sugar, and taste for the balance you want: spicy, deeply savoury, faintly sweet behind it.", "Cook the thick noodles until just tender. They are rounder and chewier than pho noodles and need a couple of minutes longer than you would expect.", "Bowl up noodles, sliced shank and hock meat, ladle the boiling broth over, and spoon the reserved chilli oil on top. The cabbage and herbs go on at the table."]
    },
    "com-tam": {
        title: "Com Tam",
        cuisine: "Vietnamese",
        time: "40 min",
        servings: "Serves 2",
        image: "/images/vn-4.jpg",
        description: "Vietnamese broken rice with grilled pork and egg.",
        ingredients: ["2 pork chops or thin-cut pork shoulder steaks", "Marinade: 2 tbsp fish sauce, 2 tbsp sugar, 1 tbsp soy, 3 cloves garlic grated, 1 tbsp oil, 1 tsp black pepper", "1½ cups broken rice (or jasmine rice)", "Nuoc cham: 3 tbsp fish sauce, 3 tbsp sugar, 5 tbsp warm water, 2 tbsp lime juice, 1 clove garlic, 1 chilli", "1 fried egg per person", "sliced cucumber and tomato", "2 spring onions + 2 tbsp hot oil"],
        steps: ["Marinate the pork for at least 30 min, overnight if you can. The sugar is what gives you those lacquered dark edges, so resist the urge to cut it back.", "Rinse the broken rice twice and cook it with slightly less water than usual — broken grains drink faster, and you want fluffy rather than sticky.", "Grill or pan-fry the pork over high heat for 3–4 min a side and let it char in patches. Chase colour here, not gentle even cooking; the marinade is meant to catch.", "Rest the pork for 5 min before slicing. This is the step that decides whether the juices stay in the meat or run out onto the board.", "Stir the nuoc cham until the sugar has fully dissolved, then taste: sweet, salty and sour in roughly equal measure, and thin enough to pour by the spoonful.", "Pour the hot oil over the sliced spring onion to make a quick scallion oil, and spoon it over the rice.", "Plate the rice, pork, a fried egg with a crisp lacy edge, cucumber and tomato, then pour nuoc cham over everything. The dish is designed to be eaten wet."]
    },
    "banh-xeo": {
        title: "Banh Xeo",
        cuisine: "Vietnamese",
        time: "35 min",
        servings: "Makes 4",
        image: "/images/vn-5.jpg",
        description: "Crispy Vietnamese crepe with pork, prawns, and bean sprouts.",
        ingredients: ["Batter: 1 cup rice flour, 2 tbsp cornstarch, 1 tsp turmeric, ½ tsp salt", "1 cup coconut milk + 1 cup cold water", "1 spring onion, sliced", "150g pork belly, thinly sliced", "12 prawns, peeled", "2 big handfuls bean sprouts", "oil for frying", "To serve: lettuce, mint, perilla and nuoc cham"],
        steps: ["Whisk the batter and let it rest 30 min. It should be thinner than pancake batter — closer to single cream. Thin batter is the only route to a lacy, crisp crepe.", "Get a non-stick or well-seasoned pan properly hot with a good slick of oil. An under-heated pan gives you a pale, floppy banh xeo and there is no recovering from it.", "Fry a few slices of pork and some prawns in the pan first, until just cooked and lightly browned.", "Stir the batter again (turmeric settles fast), pour in a thin ladleful, and immediately swirl the pan to spread it as wide as it will go.", "Add a handful of bean sprouts to one half, cover the pan, and cook 2 min so the sprouts steam while the base crisps underneath.", "Uncover and keep frying, drizzling a little more oil around the rim, until the edges are deep gold and lift away audibly crisp — another 2–3 min. Patience at this stage is the whole difference between a crepe and a great one.", "Fold it in half like an omelette and serve at once. Eat it by tearing off pieces, wrapping them in lettuce with herbs, and dunking in nuoc cham."]
    },
    "bun-cha": {
        title: "Bun Cha",
        cuisine: "Vietnamese",
        time: "40 min",
        servings: "Serves 2",
        image: "/images/vn-6.jpg",
        description: "Vietnamese grilled pork patties with vermicelli and herbs.",
        ingredients: ["300g pork mince (20% fat — lean mince makes bouncy patties)", "150g pork belly, thinly sliced", "Marinade: 2 tbsp fish sauce, 1 tbsp sugar, 1 tbsp honey, 3 cloves garlic, 2 shallots minced, 1 tsp pepper", "Dipping broth: 4 tbsp fish sauce, 4 tbsp sugar, 4 tbsp rice vinegar, 1½ cups warm water", "½ green papaya or 1 carrot, thinly sliced", "200g rice vermicelli, cooked and cooled", "lettuce, mint, coriander, perilla, sliced garlic and chilli"],
        steps: ["Mix the marinade and split it between the mince and the belly slices. Leave both for 30 min minimum.", "Shape the mince into loose flat patties about 1cm thick, handling them as little as possible. Compressed patties turn springy and rubbery.", "Grill the patties and belly over charcoal if you possibly can, otherwise under a very hot grill, 3–4 min a side until properly charred at the edges. The smoke is half of this dish.", "Make the dipping broth warm rather than hot: dissolve the sugar in the warm water first, then add the fish sauce and vinegar. Taste it — it should be mild enough to drink, because you effectively will.", "Drop the sliced papaya or carrot into the broth to pickle while the pork finishes grilling.", "Slide the hot grilled pork straight into the bowl of broth and let it sit and soak. This is the step people leave out, and it is the entire idea of bun cha.", "Serve the bowl of pork-in-broth alongside the cold noodles and a mountain of herbs. Dunk noodles and herbs into the broth bowl a chopstickful at a time."]
    },
    "cha-gio": {
        title: "Cha Gio",
        cuisine: "Vietnamese",
        time: "45 min",
        servings: "Makes 12",
        image: "/images/vn-7.jpg",
        description: "Crispy Vietnamese spring rolls with pork and prawns.",
        ingredients: ["12 rice paper or spring roll wrappers", "250g pork mince", "100g prawns, chopped", "50g glass noodles, soaked and cut short", "1 small carrot, grated and squeezed dry", "1 wood ear mushroom, soaked and chopped", "1 shallot minced + 1 egg + 1 tbsp fish sauce + pepper", "oil for deep frying"],
        steps: ["Squeeze the grated carrot properly dry, then mix everything for the filling in one bowl. Wet filling steams the wrapper from the inside and splits it open in the oil.", "Roll them tightly and thinly. Fat rolls burn on the outside before the pork in the middle is cooked. Seal the last edge with a dab of water.", "Rest the rolls seam-side down on a rack for 10 min so the wrappers dry slightly and firm up.", "Fry twice. First at 150°C for 6–7 min until pale and cooked through, then lift them out and rest 5 min.", "Second fry at 180°C for about 2 min until blistered and deep gold. This is what makes them shatter when bitten instead of bending.", "Drain them standing upright on a rack, never flat on paper towel where the underside goes soft. Serve with nuoc cham and lettuce for wrapping."]
    },
    "vietnamese-iced-coffee": {
        title: "Vietnamese Iced Coffee",
        cuisine: "Vietnamese",
        time: "10 min",
        servings: "Serves 1",
        image: "/images/vn-8.jpg",
        description: "Strong, sweet Vietnamese iced coffee — a daily ritual.",
        ingredients: ["2–3 tbsp dark-roast coarsely ground coffee (Vietnamese robusta if you can get it)", "2–3 tbsp sweetened condensed milk", "1 phin filter (or a very small French press)", "boiling water, just off the boil", "a tall glass of ice"],
        steps: ["Spoon the condensed milk into the glass first, before any coffee goes near it. It is the base of the drink, not a topping.", "Add the coffee to the phin, level it flat, and rest the press filter on top without screwing it down hard.", "Bloom it first: pour in just 2 tbsp of hot water and wait 30 seconds for the grounds to swell. Skip this and the brew runs straight through, thin and sour.", "Top up the phin, cap it, and let it drip. It should take 4–5 minutes — if it pours through in one go, the grind is too coarse or the filter is not seated properly.", "Stir the hot coffee into the condensed milk until completely combined and glossy, with no pale streaks left.", "Fill a separate tall glass with ice and pour the sweet coffee over it. Pouring hot coffee onto ice in the mixing glass just melts it and waters the drink down."]
    },
    "egg-coffee": {
        title: "Egg Coffee",
        cuisine: "Vietnamese",
        time: "10 min",
        servings: "Serves 1",
        image: "/images/vn-9.jpg",
        description: "Creamy Vietnamese egg coffee — a Hanoi specialty.",
        ingredients: ["1 shot of strong dark-roast coffee (a phin brew or espresso both work)", "1 very fresh egg yolk", "2 tbsp sweetened condensed milk", "¼ tsp vanilla and a tiny pinch of salt (optional)", "a small heatproof glass or mug", "a bowl of hot water to stand the glass in"],
        steps: ["Brew the coffee first and pour it into the serving glass, then stand that glass in a bowl of hot water. Egg coffee goes cold fast and the water bath is how cafés in Hanoi keep it hot while you drink.", "Separate the yolk cleanly. Any white that sneaks into the bowl and the foam will never thicken properly — it goes thin and bubbly instead of glossy.", "Whisk the yolk with the condensed milk (and vanilla, if using) hard for 3–4 minutes. An electric whisk gets there in about 90 seconds and saves your arm entirely.", "Keep going until it roughly triples in volume and turns pale, thick and mousse-like — lift the whisk and it should hold a soft peak. Under-whisked foam just sinks into the coffee and you have sweet coffee, not egg coffee.", "Spoon the foam gently over the hot coffee so it sits on top as a distinct layer. Do not pour and stir — the two layers are the entire experience.", "Serve immediately, still sitting in its warm water bath, with a spoon. Eat the foam off the top first, then stir what is left through the coffee."]
    }
};
