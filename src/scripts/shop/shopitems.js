var registeringProducers = {};

/**
 * Adds a producer to the list of registering producers.
 * @param {string} name - The unique identifier for the producer.
 * @param {object} data - The data for the producer.
 */
function addProducer(name, data) {
  registeringProducers[name] = data;
}

/**
 * Registers the producers by copying their owned count and metadata
 * from the game producers to the registering producers.
 */
function registerProducers() {
  Object.keys(game.producers).forEach((key) => {
    registeringProducers[key].owned = game.producers[key].owned;
    registeringProducers[key].metadata = game.producers[key].metadata;

    // console.log(registeringProducers[key]);
  });
  game.producers = registeringProducers;
}

function loadShopItems() {
  /*
  Producer schema, expect that once a save is started and gets the producer it won't change.
  "internalId": {
      "name": "Some name",
      "sps": 1, // sugar per second
      "pickup": 0.5, // how much sugar you can pick up
      "autopickup": 0, // how much sugar is picked up automatically every second
      "owned": 0,
      "baseCost": 1,
      "costMultiplier": 0.5,
      "description": "Description of the producer",
      "metadata": { someData: someData }
  }
  */

  // ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING // -- too bad, -Melon :)

  addProducer("handWorking", {
    name: "Working By Hand",
    sps: 1,
    pickup: 1,
    autopickup: 1,
    owned: 0,
    baseCost: 1,
    costMultiplier: 0.3,
    description: "Back in my day, we had to make our sugar with our barehands!",
    metadata: {},
  });

  addProducer("deliveryTruck", {
    name: "Delivery Truck",
    sps: 2,
    pickup: 0,
    autopickup: 0,
    owned: 0,
    baseCost: 10,
    costMultiplier: 0.6,
    description: "A truck to deliver large amounts of sugar.",
    metadata: {},
  });

  addProducer("collectingCrew", {
    name: "Collecting Crew",
    sps: 3,
    pickup: 2,
    autopickup: 1,
    owned: 0,
    baseCost: 25,
    costMultiplier: 0.7,
    description: "A crew dedicated to collecting sugar efficiently.",
    metadata: {},
  });

  addProducer("ladders", {
    name: "Ladders",
    sps: 5,
    pickup: 0,
    autopickup: 0,
    owned: 0,
    baseCost: 50,
    costMultiplier: 0.8,
    description: "Use ladders to reach higher sugar deposits.",
    metadata: {},
  });

  addProducer("forklift", {
    name: "Forklift",
    sps: 10,
    pickup: 4,
    autopickup: 2,
    owned: 0,
    baseCost: 100,
    costMultiplier: 0.9,
    description: "A forklift to carry larger amounts of sugar.",
    metadata: {},
  });

  addProducer("childLabor", {
    name: "Child Labor",
    sps: 20,
    pickup: 6,
    autopickup: 3,
    owned: 0,
    baseCost: 500,
    costMultiplier: 1.0,
    description: "Utilize child labor for increased productivity.",
    metadata: {},
  });

  addProducer("artificialFarms", {
    name: "Artificial Farms",
    sps: 50,
    pickup: 10,
    autopickup: 5,
    owned: 0,
    baseCost: 2000,
    costMultiplier: 1.1,
    description: "High-tech farms producing large amounts of sugar.",
    metadata: {},
  });

  addProducer("machinery", {
    name: "Machinery",
    sps: 100,
    pickup: 20,
    autopickup: 10,
    owned: 0,
    baseCost: 8000,
    costMultiplier: 1.2,
    description: "Advanced machinery for automated sugar production.",
    metadata: {},
  });

  addProducer("conveyor", {
    name: "Conveyor",
    sps: 200,
    pickup: 5,
    autopickup: 20,
    owned: 0,
    baseCost: 32000,
    costMultiplier: 1.3,
    description: "Conveyors for streamlined sugar collection.",
    metadata: {},
  });

  addProducer("smallStartups", {
    name: "Small Startups",
    sps: 400,
    pickup: 10,
    autopickup: 30,
    owned: 0,
    baseCost: 128000,
    costMultiplier: 1.4,
    description: "Innovative startups entering the sugar industry.",
    metadata: {},
  });

  addProducer("flourFactories", {
    name: "Flour Factories",
    sps: 800,
    pickup: 20,
    autopickup: 40,
    owned: 0,
    baseCost: 512000,
    costMultiplier: 1.5,
    description: "Factories producing sugar from flour.",
    metadata: {},
  });

  addProducer("wheatFarm", {
    name: "Wheat Farm",
    sps: 1600,
    pickup: 40,
    autopickup: 80,
    owned: 0,
    baseCost: 2048000,
    costMultiplier: 1.6,
    description: "Farms dedicated to growing sugar wheat.",
    metadata: {},
  });

  addProducer("chocolateFactory", {
    name: "Chocolate Factory",
    sps: 3200,
    pickup: 80,
    autopickup: 160,
    owned: 0,
    baseCost: 8192000,
    costMultiplier: 1.7,
    description: "Factories turning sugar into delicious chocolate.",
    metadata: {},
  });

  addProducer("cacaoFarm", {
    name: "Cacao Farm",
    sps: 6400,
    pickup: 160,
    autopickup: 320,
    owned: 0,
    baseCost: 32768000,
    costMultiplier: 1.8,
    description: "Farms dedicated to growing cacao for sugar production.",
    metadata: {},
  });

  addProducer("sugarPlantation", {
    name: "Sugar Plantation",
    sps: 12800,
    pickup: 320,
    autopickup: 640,
    owned: 0,
    baseCost: 131072000,
    costMultiplier: 1.9,
    description: "Large plantations for massive sugar production.",
    metadata: {},
  });

  addProducer("sugarRefinery", {
    name: "Sugar Refinery",
    sps: 25600,
    pickup: 640,
    autopickup: 1280,
    owned: 0,
    baseCost: 524288000,
    costMultiplier: 2.0,
    description: "Refineries processing raw sugar into refined products.",
    metadata: {},
  });

  addProducer("candyFactory", {
    name: "Candy Factory",
    sps: 51200,
    pickup: 1280,
    autopickup: 2560,
    owned: 0,
    baseCost: 2097152000,
    costMultiplier: 2.1,
    description: "Factories producing various sugary candies.",
    metadata: {},
  });

  addProducer("sugarEmpire", {
    name: "Sugar Empire",
    sps: 102400,
    pickup: 2560,
    autopickup: 5120,
    owned: 0,
    baseCost: 8388608000,
    costMultiplier: 2.2,
    description: "An empire built on the foundation of sugar production.",
    metadata: {},
  });

  addProducer("sweetMegaCorp", {
    name: "Sweet MegaCorp",
    sps: 204800,
    pickup: 5120,
    autopickup: 10240,
    owned: 0,
    baseCost: 33554432000,
    costMultiplier: 2.3,
    description: "A mega corporation dominating the sugar industry.",
    metadata: {},
  });

  addProducer("sugarExtravaganza", {
    name: "Sugar Extravaganza",
    sps: 409600,
    pickup: 10240,
    autopickup: 20480,
    owned: 0,
    baseCost: 134217728000,
    costMultiplier: 2.4,
    description: "An extravaganza of sugar production and collection.",
    metadata: {},
  });

  addProducer("sugarHeaven", {
    name: "Sugar Heaven",
    sps: 819200,
    pickup: 20480,
    autopickup: 40960,
    owned: 0,
    baseCost: 536870912000,
    costMultiplier: 2.5,
    description: "A heavenly place where sugar flows endlessly.",
    metadata: {},
  });

  addProducer("sugarHarvester", {
    name: "Sugar Harvester",
    sps: 1638400,
    pickup: 40960,
    autopickup: 81920,
    owned: 0,
    baseCost: 2147483648000,
    costMultiplier: 2.6,
    description: "Harvesters working tirelessly to collect sugar.",
    metadata: {},
  });

  addProducer("sweetenerFactory", {
    name: "Sweetener Factory",
    sps: 3276800,
    pickup: 81920,
    autopickup: 163840,
    owned: 0,
    baseCost: 8589934592000,
    costMultiplier: 2.7,
    description: "Factories producing artificial sweeteners.",
    metadata: {},
  });

  addProducer("sugarMonopoly", {
    name: "Sugar Monopoly",
    sps: 6553600,
    pickup: 163840,
    autopickup: 327680,
    owned: 0,
    baseCost: 34359738368000,
    costMultiplier: 2.8,
    description: "A monopoly controlling the entire sugar market.",
    metadata: {},
  });

  addProducer("candyKingdom", {
    name: "Candy Kingdom",
    sps: 13107200,
    pickup: 327680,
    autopickup: 655360,
    owned: 0,
    baseCost: 137438953472000,
    costMultiplier: 2.9,
    description: "A kingdom where candy is the primary currency.",
    metadata: {},
  });

  addProducer("sugarGalaxy", {
    name: "Sugar Galaxy",
    sps: 26214400,
    pickup: 655360,
    autopickup: 1310720,
    owned: 0,
    baseCost: 549755813888000,
    costMultiplier: 3.0,
    description: "A galaxy filled with stars made of sugar.",
    metadata: {},
  });

  addProducer("candyUniverse", {
    name: "Candy Universe",
    sps: 52428800,
    pickup: 1310720,
    autopickup: 2621440,
    owned: 0,
    baseCost: 2199023255552000,
    costMultiplier: 3.1,
    description: "A universe where candy reigns supreme.",
    metadata: {},
  });

  addProducer("sugarCosmos", {
    name: "Sugar Cosmos",
    sps: 104857600,
    pickup: 2621440,
    autopickup: 5242880,
    owned: 0,
    baseCost: 8796093022208000,
    costMultiplier: 3.2,
    description: "The entire cosmos dedicated to sugar.",
    metadata: {},
  });

  addProducer("sugarSupremacy", {
    name: "Sugar Supremacy",
    sps: 209715200,
    pickup: 5242880,
    autopickup: 10485760,
    owned: 0,
    baseCost: 35184372088832000,
    costMultiplier: 3.3,
    description: "Supreme dominance over all sugar production.",
    metadata: {},
  });

  registerProducers();
}
