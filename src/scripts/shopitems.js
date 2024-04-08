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
    addProperty(game.producers,"deliveryTruck",{
        "name":"Delivery Truck",
        "sps":1.1, //sugar per second
        "pickup":0, //how much sugar you can pick up
        "autopickup": 0, //how much sugar is picked up automatically every second
        "owned":0,
        "baseCost":2,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"collectingCrew",{
        "name":"Collecting Crew",
        "sps": .2, //sugar per second
        "pickup": 2, //how much sugar you can pick up
        "autopickup": .5, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":16,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"forklift",{
        "name":"Forklift",
        "sps": .1, //sugar per second
        "pickup": 4, //how much sugar you can pick up
        "autopickup": 6, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":256,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"childLabor",{
        "name":"Child Labor",
        "sps": 8, //sugar per second
        "pickup": 6, //how much sugar you can pick up
        "autopickup": 12, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":1334,
        "costMultiplier":.6,
        "metadata":{}
    });

    addProperty(game.producers,"artificialFarms",{
        "name":"Artificial Farms",
        "sps": 12, //sugar per second
        "pickup": 15, //how much sugar you can pick up
        "autopickup": 10, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":8000,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"machinery",{
        "name":"Machinery",
        "sps": 50, //sugar per second
        "pickup": 50, //how much sugar you can pick up
        "autopickup": 50, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":25000,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"conveyor",{
        "name":"Conveyor",
        "sps": 0, //sugar per second
        "pickup": 1, //how much sugar you can pick up
        "autopickup": 80, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":30000,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"smallStartups",{
        "name":"Small Startups",
        "sps": 120, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"FlourFactories",{
        "name":"Flour Factories",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"WheatFarm",{
        "name":"Wheat Farm",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"chocolate",{
        "name":"Chocolate",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"CaocoFarm",{
        "name":"CaocoFarm",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"smallStartups",{
        "name":"Small Startups",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"smallStartups",{
        "name":"Small Startups",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 

    addProperty(game.producers,"smallStartups",{
        "name":"Small Startups",
        "sps": 80, //sugar per second
        "pickup": 20, //how much sugar you can pick up
        "autopickup": 60, //how much sugar is picked up automatically every second
        "owned": 0,
        "baseCost":200000,
        "costMultiplier":.7,
        "metadata":{}
    }); 
}