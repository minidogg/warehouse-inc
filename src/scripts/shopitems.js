function loadShopItems() {
    /*Producer schema, expect that once a save is started and gets the producer it won't change.
        "interalId":{
            "name":"Some name",
            "sps":1, //sugar per second
            "pickup":0.5, //how much sugar you can pick up
            "owned":0,
            "baseCost":1,
            "costMultiplier": .5,
            "metadata":{someData:someData}
        }
    */

    // ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING
    addProperty(game.producers,"deliveryTruck",{
        "name":"Delivery Truck",
        "sps":1.1, //sugar per second
        "pickup":0.5, //how much sugar you can pick up
        "owned":0,
        "baseCost":2,
        "costMultiplier":.7,
        "metadata":{}
    });

    addProperty(game.producers,"collectingCrew",{
        "name":"Collecting Crew",
        "sps": 0.2, //sugar per second
        "pickup": 2, //how much sugar you can pick up
        "owned":0,
        "baseCost":16,
        "costMultiplier":.7,
        "metadata":{}
    });
}