// Function to convert large numbers to abbreviated format
function abbreviateNumber(number) {
    const SI_SYMBOL = ["", "k", "M", "B", "T", "Q"];

    // what tier? (determines SI symbol)
    const tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return number;

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // round the scaled number
    const rounded = Math.round(scaled * 10) / 10;

    // format number and add suffix
    return rounded.toFixed(1).replace(/\.0$/, '') + suffix;
}


var shop = {};
shop.compileNum = genRanHex(16);
shop.findCost = (baseCost, costMultiplier, numOwned) =>
    Math.floor(baseCost * Math.pow(1 + costMultiplier, numOwned));

Object.entries(game.producers).forEach((producerNameData) => {
    let id = producerNameData[0];
    let data = producerNameData[1];

    let shopItemElement = document.createElement("div");
    shopItemElement.innerHTML = `
        <h1 class="buyOptionName">Loading your mother... this will only take 69.420 nanoseconds...</h1>
        <span class="buyOptionPrice">$69420 - 42069 SPS - 69 Owned</span>
    `;
    shopItemElement.classList.add("buyOption");
    shopItemElement.q(".buyOptionName").textContent = data.name;
    shopItemElement.q(".buyOptionPrice").textContent = `${abbreviateNumber(shop.findCost(data.baseCost, data.costMultiplier, data.owned))} sugar - ${data.sps} SPS - ${data.owned} Owned`;

    shopItemElement.id = shop.compileNum + "_buyOption_" + id;

    q("#buyMenu").appendChild(shopItemElement);

    shopItemElement.onclick = () => {
        let producerData = game.producers[id];
        let cost = shop.findCost(producerData.baseCost, producerData.costMultiplier, producerData.owned);
        if (game.sugar <= cost) showNotification("Not enough money for: '" + producerData.name + "'");

        game.sugar -= cost;
        game.producers[id].owned += 1;

        shop.update();
    };
});

shop.update = () => {
    Object.entries(game.producers).forEach((ee) => {
        let id = ee[0];
        let data = ee[1];
        let cost = shop.findCost(data.baseCost, data.costMultiplier, data.owned);

        let el = document.getElementById(shop.compileNum + "_buyOption_" + id);

        el.classList.add("buyOptionDisabled");
        if (game.sugar >= cost) el.classList.remove("buyOptionDisabled");

        el.q(".buyOptionName").textContent = data.name;
        el.q(".buyOptionPrice").textContent = `${abbreviateNumber(cost)} sugar - ${data.sps} SPS - ${data.owned} Owned`;
    });
};

render.renderFunctions.push(() => {
    shop.update();
});
