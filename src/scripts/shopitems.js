var registeringProducers = {}
function addProducer(name,data){
    registeringProducers[name] = data
}
function registerProducers(){
    Object.keys(game.producers).forEach(key=>{
        registeringProducers[key].owned = game.producers[key].owned
        console.log(registeringProducers[key])
    })
    game.producers = registeringProducers
}

function loadShopItems() {
    /*Producer schema, expect that once a save is started and gets the producer it won't change.
    "interalId":{
        "name":"Some name",
        "sps":1, //sugar per second
        "pickup":0.5, //how much sugar you can pick up
        "autopickup": 0, //how much sugar is picked up automatically every second
        "owned":0,
        "baseCost":1,
        "costMultiplier": .5,
        "metadata":{someData:someData}
    }
    */

    // ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING // -- too bad, -Melon :)

    addProducer("handWorking", {
        "name": "Working By Hand",
        "sps": 1,
        "pickup": 1,
        "autopickup": 1,
        "owned": 0,
        "baseCost": 1,
        "costMultiplier": 0.3,
        "description":"Back in my day, we had to make our sugar with our barehands!",
        "metadata": {}
    });

    addProducer("deliveryTruck", {
        "name": "Delivery Truck",
        "sps": 1.4,
        "pickup": 0,
        "autopickup": 0,
        "owned": 0,
        "baseCost": 10,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("collectingCrew", {
        "name": "Collecting Crew",
        "sps": 0.5,
        "pickup": 2,
        "autopickup": 0.3,
        "owned": 0,
        "baseCost": 20,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("ladders", {
        "name": "Ladders",
        "sps": 2.5,
        "pickup": 0,
        "autopickup": 0,
        "owned": 0,
        "baseCost": 50,
        "costMultiplier": 0.4,
        "metadata": {}
    });

    addProducer("forklift", {
        "name": "Forklift",
        "sps": 0.2,
        "pickup": 4,
        "autopickup": 1,
        "owned": 0,
        "baseCost": 200,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("childLabor", {
        "name": "Child Labor",
        "sps": 1,
        "pickup": 6,
        "autopickup": 1.5,
        "owned": 0,
        "baseCost": 1500,
        "costMultiplier": 0.6,
        "metadata": {}
    });

    addProducer("artificialFarms", {
        "name": "Artificial Farms",
        "sps": 5,
        "pickup": 20,
        "autopickup": 0,
        "owned": 0,
        "baseCost": 10000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("machinery", {
        "name": "Machinery",
        "sps": 10,
        "pickup": 50,
        "autopickup": 5,
        "owned": 0,
        "baseCost": 50000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("conveyor", {
        "name": "Conveyor",
        "sps": 0,
        "pickup": 1,
        "autopickup": 80,
        "owned": 0,
        "baseCost": 80000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("smallStartups", {
        "name": "Small Startups",
        "sps": 20,
        "pickup": 10,
        "autopickup": 20,
        "owned": 0,
        "baseCost": 200000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("flourFactories", {
        "name": "Flour Factories",
        "sps": 15,
        "pickup": 30,
        "autopickup": 25,
        "owned": 0,
        "baseCost": 500000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("wheatFarm", {
        "name": "Wheat Farm",
        "sps": 25,
        "pickup": 25,
        "autopickup": 30,
        "owned": 0,
        "baseCost": 700000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("chocolateFactory", {
        "name": "Chocolate Factory",
        "sps": 40,
        "pickup": 40,
        "autopickup": 35,
        "owned": 0,
        "baseCost": 1000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("cacaoFarm", {
        "name": "Cacao Farm",
        "sps": 30,
        "pickup": 20,
        "autopickup": 40,
        "owned": 0,
        "baseCost": 800000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    addProducer("sugarPlantation", {
        "name": "Sugar Plantation",
        "sps": 60,
        "pickup": 50,
        "autopickup": 45,
        "owned": 0,
        "baseCost": 1500000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("sugarRefinery", {
        "name": "Sugar Refinery",
        "sps": 100,
        "pickup": 80,
        "autopickup": 60,
        "owned": 0,
        "baseCost": 3000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("candyFactory", {
        "name": "Candy Factory",
        "sps": 150,
        "pickup": 120,
        "autopickup": 80,
        "owned": 0,
        "baseCost": 6000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("sugarEmpire", {
        "name": "Sugar Empire",
        "sps": 300,
        "pickup": 200,
        "autopickup": 150,
        "owned": 0,
        "baseCost": 12000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("sweetMegaCorp", {
        "name": "Sweet MegaCorp",
        "sps": 500,
        "pickup": 300,
        "autopickup": 250,
        "owned": 0,
        "baseCost": 25000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("sugarExtravaganza", {
        "name": "Sugar Extravaganza",
        "sps": 1000,
        "pickup": 600,
        "autopickup": 500,
        "owned": 0,
        "baseCost": 50000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("sugarHeaven", {
        "name": "Sugar Heaven",
        "sps": 2000,
        "pickup": 1200,
        "autopickup": 1000,
        "owned": 0,
        "baseCost": 100000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    addProducer("SugarHarvester", {
        "name": "Sugar Harvester",
        "sps": 4000,
        "pickup": 3000,
        "autopickup": 2500,
        "owned": 0,
        "baseCost": 200000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("SweetenerFactory", {
        "name": "Sweetener Factory",
        "sps": 8000,
        "pickup": 6000,
        "autopickup": 5000,
        "owned": 0,
        "baseCost": 400000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("SugarMonopoly", {
        "name": "Sugar Monopoly",
        "sps": 16000,
        "pickup": 12000,
        "autopickup": 10000,
        "owned": 0,
        "baseCost": 800000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("CandyKingdom", {
        "name": "Candy Kingdom",
        "sps": 32000,
        "pickup": 24000,
        "autopickup": 20000,
        "owned": 0,
        "baseCost": 1600000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("SugarGalaxy", {
        "name": "Sugar Galaxy",
        "sps": 64000,
        "pickup": 48000,
        "autopickup": 40000,
        "owned": 0,
        "baseCost": 3200000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("CandyUniverse", {
        "name": "Candy Universe",
        "sps": 128000,
        "pickup": 96000,
        "autopickup": 80000,
        "owned": 0,
        "baseCost": 6400000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    
    addProducer("SugarCosmos", {
        "name": "Sugar Cosmos",
        "sps": 256000,
        "pickup": 192000,
        "autopickup": 160000,
        "owned": 0,
        "baseCost": 12800000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });

    addProducer("SugarSupremacy", {
        "name": "Sugar Supremacy",
        "sps": 8192000,
        "pickup": 6144000,
        "autopickup": 5120000,
        "owned": 0,
        "baseCost": 409600000000,
        "costMultiplier": 0.7,
        "metadata": {}
    });
    registerProducers()
}