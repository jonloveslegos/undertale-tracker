let undertale = {
	debug: false,
    name: "undertale",
    folder: "undertale",
    start_location: "room_area1",
    font: "Avenir",
    font_size: "28px",

	is_item_tracker: false,
    // Config texts
	config_name: "Undertale",
	config_randomizer_author: "Mewlif",
	config_randomizer_link: "https://archipelago.gg/tutorial/Undertale/setup/en",
	//config_tracker_author: "", 
	//config_tracker_link: "",

	// Tracker information
    locations: {
        // Cities
        room_area1:          {x: 10,  y: 120,  w: 8,  h: 8,  name: "Hub"},
        //room_area1_2:        {x: 10,  y: 20,  w: 8,  h: 8,  name: "Flowey Intro"},
        //room_ruins1:         {x: 20,  y: 20,  w: 8,  h: 8,  name: "Ruins 1"},
        //room_ruins2:         {x: 30,  y: 20,  w: 8,  h: 8,  name: "Ruins 2"},
        //room_ruins3:         {x: 40,  y: 20,  w: 8,  h: 8,  name: "Ruins 3"},
        //room_ruins4:         {x: 50,  y: 20,  w: 8,  h: 8,  name: "Ruins 4"},
        //room_ruins5:         {x: 10,  y: 30,  w: 8,  h: 8,  name: "Ruins 5"},
        //room_ruins6:         {x: 20,  y: 30,  w: 8,  h: 8,  name: "Ruins 6"},
        room_ruins7:         {x: 10,  y: 20,  w: 8,  h: 8,  name: "Ruins 7"},
        //room_ruins7A:        {x: 40,  y: 30,  w: 8,  h: 8,  name: "Ruins 7A"},
        //room_ruins8:         {x: 50,  y: 30,  w: 8,  h: 8,  name: "Ruins 8"},
        //room_ruins9:         {x: 10,  y: 40,  w: 8,  h: 8,  name: "Ruins 9"},
        //room_ruins10:        {x: 20,  y: 40,  w: 8,  h: 8,  name: "Ruins 10"},
        //room_ruins11:        {x: 30,  y: 40,  w: 8,  h: 8,  name: "Ruins 11"},
        //room_ruins12A:       {x: 40,  y: 40,  w: 8,  h: 8,  name: "Ruins 12A"},
        room_ruins12:        {x: 20,  y: 20,  w: 8,  h: 8,  name: "Ruins 12"},
        //room_ruins12B:       {x: 10,  y: 50,  w: 8,  h: 8,  name: "Ruins 12B"},
        //room_ruins13:        {x: 20,  y: 50,  w: 8,  h: 8,  name: "Ruins 13"},
        //room_ruins14:        {x: 30,  y: 50,  w: 8,  h: 8,  name: "Ruins 14"},
        room_ruins15A:       {x: 30,  y: 20,  w: 8,  h: 8,  name: "Ruins 15A"},
        room_ruins15B:       {x: 40,  y: 20,  w: 8,  h: 8,  name: "Ruins 15B"},
        room_ruins15C:       {x: 50,  y: 20,  w: 8,  h: 8,  name: "Ruins 15C"},
        room_ruins15D:       {x: 10,  y: 30,  w: 8,  h: 8,  name: "Ruins 15D"},
        room_ruins15E:       {x: 20,  y: 30,  w: 8,  h: 8,  name: "Ruins 15E"},
        room_ruins16:        {x: 30,  y: 30,  w: 8,  h: 8,  name: "Ruins 16"},
        //room_ruins17:        {x: 50,  y: 60,  w: 8,  h: 8,  name: "Ruins 17"},
        //room_ruins18OLD:     {x: 10,  y: 70,  w: 8,  h: 8,  name: "Ruins 18OLD"},
        //room_ruins19:        {x: 20,  y: 70,  w: 8,  h: 8,  name: "Ruins 19"},
        room_torhouse1:      {x: 40,  y: 30,  w: 8,  h: 8,  name: "Old Home 1"},
        //room_torhouse2:      {x: 40,  y: 70,  w: 8,  h: 8,  name: "Old Home 2"},
        room_torhouse3:      {x: 50,  y: 30,  w: 8,  h: 8,  name: "Old Home 3"},
        //room_torielroom:     {x: 10,  y: 80,  w: 8,  h: 8,  name: "Old Home Toriel Room"},
        //room_asrielroom:     {x: 20,  y: 80,  w: 8,  h: 8,  name: "Old Home Asriel Room"},
        //room_kitchen:        {x: 30,  y: 80,  w: 8,  h: 8,  name: "Old Home Kitchen"},
        //room_basement1:      {x: 40,  y: 80,  w: 8,  h: 8,  name: "Old Home Basement 1"},
        //room_basement2:      {x: 50,  y: 80,  w: 8,  h: 8,  name: "Old Home Basement 2"},
        //room_basement3:      {x: 10,  y: 90,  w: 8,  h: 8,  name: "Old Home Basement 3"},
        //room_basement4:      {x: 20,  y: 90,  w: 8,  h: 8,  name: "Old Home Basement 4"},
        //room_basement5:      {x: 30,  y: 90,  w: 8,  h: 8,  name: "Old Home Basement 5"},
        //room_ruinsexit:      {x: 40,  y: 90,  w: 8,  h: 8,  name: "Ruins Exit"},
        //room_tundra1:        {x: 60,  y: 20,  w: 8,  h: 8,  name: "Tundra 1"},
        //room_tundra2:        {x: 70,  y: 20,  w: 8,  h: 8,  name: "Tundra 2"},
        room_tundra3:        {x: 60,  y: 20,  w: 8,  h: 8,  name: "Tundra 3"},
        //room_tundra3A:       {x: 90,  y: 20,  w: 8,  h: 8,  name: "Tundra 3A"},
        //room_tundra4:        {x: 100,  y: 20,  w: 8,  h: 8,  name: "Tundra 4"},
        //room_tundra5:        {x: 60,  y: 30,  w: 8,  h: 8,  name: "Tundra 5"},
        room_tundra6:        {x: 70,  y: 20,  w: 8,  h: 8,  name: "Tundra 6"},
        //room_tundra6A:       {x: 80,  y: 30,  w: 8,  h: 8,  name: "Tundra 6A"},
        //room_tundra7:        {x: 90,  y: 30,  w: 8,  h: 8,  name: "Tundra 7"},
        room_tundra8:        {x: 80,  y: 20,  w: 8,  h: 8,  name: "Tundra 8"},
        //room_tundra8A:       {x: 60,  y: 40,  w: 8,  h: 8,  name: "Tundra 8A"},
        //room_tundra9:        {x: 70,  y: 40,  w: 8,  h: 8,  name: "Tundra 9"},
        //room_tundra_spaghetti:        {x: 80,  y: 40,  w: 8,  h: 8,  name: "Tundra Spaghetti"},
        //room_tundra_snowpuzz:        {x: 90,  y: 40,  w: 8,  h: 8,  name: "Tundra Snow Button Puzzle"},
        //room_tundra_xoxosmall:        {x: 100,  y: 40,  w: 8,  h: 8,  name: "Tundra Small XOXO Puzzle"},
        //room_tundra_xoxopuzz:        {x: 60,  y: 50,  w: 8,  h: 8,  name: "Tundra Big XOXO Puzzle"},
        //room_tundra_randoblock:        {x: 70,  y: 50,  w: 8,  h: 8,  name: "Tundra Fake Tile Puzzle"},
        //room_tundra_lesserdog:        {x: 80,  y: 50,  w: 8,  h: 8,  name: "Tundra Dog Sculpture"},
        //room_tundra_icehole:        {x: 90,  y: 50,  w: 8,  h: 8,  name: "Tundra Ice Hole"},
        room_tundra_iceentrance:        {x: 90,  y: 20,  w: 8,  h: 8,  name: "Tundra Sliding Puzzle"},
        //room_tundra_iceexit_new:        {x: 60,  y: 60,  w: 8,  h: 8,  name: "Tundra Warping Sans"},
        //room_tundra_iceexit:        {x: 70,  y: 60,  w: 8,  h: 8,  name: "Tundra Before Door"},
        //room_tundra_poffzone:        {x: 80,  y: 60,  w: 8,  h: 8,  name: "Tundra Snow Poff"},
        //room_tundra_dangerbridge:        {x: 90,  y: 60,  w: 8,  h: 8,  name: "Tundra Bridge"},
        room_tundra_town:        {x: 100,  y: 20,  w: 8,  h: 8,  name: "Tundra Lower Town"},
        //room_tundra_town2:        {x: 60,  y: 70,  w: 8,  h: 8,  name: "Tundra Upper Town"},
        //room_tundra_dock:        {x: 70,  y: 70,  w: 8,  h: 8,  name: "Tundra Dock"},
        //room_tundra_inn:        {x: 80,  y: 70,  w: 8,  h: 8,  name: "Tundra Inn"},
        //room_tundra_grillby:        {x: 90,  y: 70,  w: 8,  h: 8,  name: "Tundra Grillby"},
        //room_tundra_library:        {x: 100,  y: 70,  w: 8,  h: 8,  name: "Tundra Library"},
        room_tundra_sanshouse:        {x: 60,  y: 30,  w: 8,  h: 8,  name: "Tundra Paps House"},
        //room_tundra_paproom:        {x: 70,  y: 80,  w: 8,  h: 8,  name: "Tundra Paps Room"},
        //room_tundra_sansroom:        {x: 80,  y: 80,  w: 8,  h: 8,  name: "Tundra Sans Room"},
        //room_fogroom:        {x: 90,  y: 80,  w: 8,  h: 8,  name: "Tundra Exit"},
        //room_shop1:        {x: 100,  y: 80,  w: 8,  h: 8,  name: "Tundra Shop"},
        //room_water1:        {x: 110,  y: 20,  w: 8,  h: 8,  name: "Water 1"},
        //room_water2:        {x: 120,  y: 20,  w: 8,  h: 8,  name: "Water 2"},
        room_water3:        {x: 110,  y: 20,  w: 8,  h: 8,  name: "Water 3"},
        //room_water3A:        {x: 140,  y: 20,  w: 8,  h: 8,  name: "Water 3A"},
        //room_water4:        {x: 150,  y: 20,  w: 8,  h: 8,  name: "Water 4"},
        //room_water_bridgepuzz1:        {x: 110,  y: 30,  w: 8,  h: 8,  name: "Water Flower Puzzle 1"},
        room_water5:        {x: 120,  y: 20,  w: 8,  h: 8,  name: "Water 5"},
        //room_water5A:        {x: 130,  y: 30,  w: 8,  h: 8,  name: "Water 5A"},
        //room_water6:        {x: 140,  y: 30,  w: 8,  h: 8,  name: "Water 6"},
        //room_water7:        {x: 150,  y: 30,  w: 8,  h: 8,  name: "Water 7"},
        //room_water8:        {x: 110,  y: 40,  w: 8,  h: 8,  name: "Water 8"},
        //room_water9:        {x: 120,  y: 40,  w: 8,  h: 8,  name: "Water 9"},
        //room_water_savepoint1:        {x: 130,  y: 40,  w: 8,  h: 8,  name: "Water Savepoint 1"},
        room_water11:        {x: 130,  y: 20,  w: 8,  h: 8,  name: "Water 11"},
        //room_water_nicecream:        {x: 150,  y: 40,  w: 8,  h: 8,  name: "Water Nicecream"},
        room_water12:        {x: 140,  y: 20,  w: 8,  h: 8,  name: "Water 12"},
        //room_water_shoe:        {x: 120,  y: 50,  w: 8,  h: 8,  name: "Water Grass Shoes"},
        //room_water_bird:        {x: 130,  y: 50,  w: 8,  h: 8,  name: "Water Bird"},
        //room_water_onionsan:        {x: 140,  y: 50,  w: 8,  h: 8,  name: "Water Onionsan"},
        room_water14:        {x: 150,  y: 20,  w: 8,  h: 8,  name: "Water 14"},
        //room_water_piano:        {x: 110,  y: 60,  w: 8,  h: 8,  name: "Water Piano"},
        //room_water_statue:        {x: 120,  y: 60,  w: 8,  h: 8,  name: "Water Statue"},
        //room_water_prewaterfall:        {x: 130,  y: 60,  w: 8,  h: 8,  name: "Water Umbrella Pick-up"},
        //room_water_waterfall:        {x: 140,  y: 60,  w: 8,  h: 8,  name: "Water Rain 1"},
        //room_water_waterfall2:        {x: 150,  y: 60,  w: 8,  h: 8,  name: "Water Rain 2"},
        //room_water_waterfall3:        {x: 110,  y: 70,  w: 8,  h: 8,  name: "Water Rain 3"},
        //room_water_waterfall4:        {x: 120,  y: 70,  w: 8,  h: 8,  name: "Water Rain 4"},
        //room_water_preundyne:        {x: 130,  y: 70,  w: 8,  h: 8,  name: "Water Pre Undyne Chase 1"},
        //room_water_undynebridge:        {x: 140,  y: 70,  w: 8,  h: 8,  name: "Water Undyne Chase"},
        //room_water_trashzone1:        {x: 150,  y: 70,  w: 8,  h: 8,  name: "Water Trash Zone 1"},
        //room_water_trashsavepoint:        {x: 110,  y: 80,  w: 8,  h: 8,  name: "Water Trash Zone Save"},
        //room_water_trashzone2:        {x: 120,  y: 80,  w: 8,  h: 8,  name: "Water Trash Zone 2"},
        room_water_friendlyhub:        {x: 110,  y: 30,  w: 8,  h: 8,  name: "Water After Dummy"},
        //room_water_undyneyard:        {x: 140,  y: 80,  w: 8,  h: 8,  name: "Water Undyne Yard"},
        room_water_blookyard:        {x: 120,  y: 30,  w: 8,  h: 8,  name: "Water Blook Yard"},
        //room_water_blookhouse:        {x: 110,  y: 90,  w: 8,  h: 8,  name: "Water Blook House"},
        //room_water_hapstablook:        {x: 120,  y: 90,  w: 8,  h: 8,  name: "Water Hapsta House"},
        //room_water_farm:        {x: 130,  y: 90,  w: 8,  h: 8,  name: "Water Snail Race"},
        room_water_shop:        {x: 130,  y: 30,  w: 8,  h: 8,  name: "Water Outside Gerson"},
        //room_shop2:        {x: 150,  y: 90,  w: 8,  h: 8,  name: "Water Gerson Shop"},
        //room_water_dock:        {x: 110,  y: 100,  w: 8,  h: 8,  name: "Water Dock"},
        //room_water15:        {x: 120,  y: 100,  w: 8,  h: 8,  name: "Water 15"},
        room_water16:        {x: 140,  y: 30,  w: 8,  h: 8,  name: "Water 16"},
        //room_water_temvillage:        {x: 140,  y: 100,  w: 8,  h: 8,  name: "Water Tem Village"},
        //room_water17:        {x: 150,  y: 100,  w: 8,  h: 8,  name: "Water 17"},
        //room_water18:        {x: 110,  y: 110,  w: 8,  h: 8,  name: "Water 18"},
        //room_water19:        {x: 120,  y: 110,  w: 8,  h: 8,  name: "Water 19"},
        //room_water20:        {x: 130,  y: 110,  w: 8,  h: 8,  name: "Water 20"},
        //room_water21:        {x: 140,  y: 110,  w: 8,  h: 8,  name: "Water 21"},
        //room_water_undynefinal:        {x: 150,  y: 110,  w: 8,  h: 8,  name: "Water Undyne Fight"},
        //room_shop5:        {x: 110,  y: 120,  w: 8,  h: 8,  name: "Water Tem Shop"},
        //room_fire2:        {x: 160,  y: 20,  w: 8,  h: 8,  name: "Fire Undyne Water"},
        room_fire_prelab:        {x: 160,  y: 20,  w: 8,  h: 8,  name: "Fire Pre Lab"},
        //room_fire_dock:        {x: 180,  y: 20,  w: 8,  h: 8,  name: "Fire Dock"},
        room_fire_lab1:        {x: 170,  y: 20,  w: 8,  h: 8,  name: "Fire Lower Lab"},
        //room_fire_lab2:        {x: 200,  y: 20,  w: 8,  h: 8,  name: "Fire Upper Lab"},
        //room_fire3:        {x: 160,  y: 30,  w: 8,  h: 8,  name: "Fire 3"},
        //room_fire5:        {x: 170,  y: 30,  w: 8,  h: 8,  name: "Fire 5"},
        room_fire6:        {x: 180,  y: 20,  w: 8,  h: 8,  name: "Fire 6"},
        //room_fire6A:        {x: 190,  y: 30,  w: 8,  h: 8,  name: "Fire 6A"},
        //room_fire_lasers1:        {x: 200,  y: 30,  w: 8,  h: 8,  name: "Fire Lasers 1"},
        room_fire7:        {x: 190,  y: 20,  w: 8,  h: 8,  name: "Fire 7"},
        //room_fire8:        {x: 170,  y: 40,  w: 8,  h: 8,  name: "Fire 8"},
        //room_fire_shootguy_2:        {x: 180,  y: 40,  w: 8,  h: 8,  name: "Fire Shooter 2"},
        //room_fire9:        {x: 190,  y: 40,  w: 8,  h: 8,  name: "Fire 9"},
        //room_fire_shootguy_1:        {x: 200,  y: 40,  w: 8,  h: 8,  name: "Fire Shooter 1"},
        //room_fire_turn:        {x: 160,  y: 50,  w: 8,  h: 8,  name: "Fire Turn"},
        //room_fire_cookingshow:        {x: 170,  y: 50,  w: 8,  h: 8,  name: "Fire Cooking Show"},
        //room_fire_savepoint1:        {x: 180,  y: 50,  w: 8,  h: 8,  name: "Fire Save Hallway"},
        room_fire_elevator_r1:        {x: 200,  y: 20,  w: 8,  h: 8,  name: "Fire Elevator R1"},
        room_fire_elevator_r2:        {x: 160,  y: 30,  w: 8,  h: 8,  name: "Fire Elevator R2"},
        //room_fire_hotdog:        {x: 160,  y: 60,  w: 8,  h: 8,  name: "Fire Hotdog"},
        room_fire_walkandbranch:        {x: 170,  y: 30,  w: 8,  h: 8,  name: "Fire Outside So Sorry"},
        //room_fire_sorry:        {x: 180,  y: 60,  w: 8,  h: 8,  name: "Fire So Sorry"},
        //room_fire_apron:        {x: 190,  y: 60,  w: 8,  h: 8,  name: "Fire Apron"},
        //room_fire10:        {x: 200,  y: 60,  w: 8,  h: 8,  name: "Fire 10"},
        //room_fire_rpuzzle:        {x: 160,  y: 70,  w: 8,  h: 8,  name: "Fire Conveyor Puzzle 1"},
        //room_fire_mewmew2:        {x: 170,  y: 70,  w: 8,  h: 8,  name: "Fire Mew Mew Call"},
        //room_fire_boysnightout:        {x: 180,  y: 70,  w: 8,  h: 8,  name: "Fire Royal Guard Fight"},
        //room_fire_newsreport:        {x: 190,  y: 70,  w: 8,  h: 8,  name: "Fire News Report"},
        //room_fire_coreview2:        {x: 200,  y: 70,  w: 8,  h: 8,  name: "Fire Core View"},
        room_fire_elevator_l2:        {x: 180,  y: 30,  w: 8,  h: 8,  name: "Fire Elevator L2"},
        room_fire_elevator_l3:        {x: 190,  y: 30,  w: 8,  h: 8,  name: "Fire Elevator L3"},
        //room_fire_spidershop:        {x: 180,  y: 80,  w: 8,  h: 8,  name: "Fire Spider Shop"},
        room_fire_walkandbranch2:        {x: 200,  y: 30,  w: 8,  h: 8,  name: "Fire Door 2"},
        //room_fire_conveyorlaser:        {x: 200,  y: 80,  w: 8,  h: 8,  name: "Fire Conveyer Before Shooter"},
        //room_fire_shootguy_3:        {x: 160,  y: 90,  w: 8,  h: 8,  name: "Fire Shooter 3"},
        //room_fire_preshootguy4:        {x: 170,  y: 90,  w: 8,  h: 8,  name: "Fire Before Shooter 4"},
        //room_fire_shootguy_4:        {x: 180,  y: 90,  w: 8,  h: 8,  name: "Fire Shooter 4"},
        //room_fire_savepoint2:        {x: 190,  y: 90,  w: 8,  h: 8,  name: "Fire Before Muffet"},
        //room_fire_spider:        {x: 200,  y: 90,  w: 8,  h: 8,  name: "Fire Muffet"},
        //room_fire_pacing:        {x: 160,  y: 100,  w: 8,  h: 8,  name: "Fire Poster"},
        //room_fire_operatest:        {x: 170,  y: 100,  w: 8,  h: 8,  name: "Fire Opera"},
        //room_fire_multitile:        {x: 180,  y: 100,  w: 8,  h: 8,  name: "Fire Tile Puzzle"},
        room_fire_hotelfront_1:        {x: 160,  y: 40,  w: 8,  h: 8,  name: "Fire Nicecream Guy"},
        room_fire_hotelfront_2:        {x: 170,  y: 40,  w: 8,  h: 8,  name: "Fire Outside Hotel"},
        room_fire_hotellobby:        {x: 180,  y: 40,  w: 8,  h: 8,  name: "Fire Hotel Lobby"},
        //room_shop4:        {x: 170,  y: 110,  w: 8,  h: 8,  name: "Fire Hotel Shop"},
        //room_shop3:        {x: 180,  y: 110,  w: 8,  h: 8,  name: "Fire Bratty Catty Shop"},
        //room_fire_restaurant:        {x: 190,  y: 110,  w: 8,  h: 8,  name: "Fire Hotel Restaurant"},
        //room_fire_hoteldoors:        {x: 200,  y: 110,  w: 8,  h: 8,  name: "Fire Hotel Doors"},
        //room_fire_hotelbed:        {x: 160,  y: 120,  w: 8,  h: 8,  name: "Fire Hotel Bed"},
        room_fire_elevator_r3:        {x: 190,  y: 40,  w: 8,  h: 8,  name: "Fire Elevator R3"},
        //room_fire_precore:        {x: 180,  y: 120,  w: 8,  h: 8,  name: "Fire Pre Core"},
        room_fire_elevator_l1:        {x: 200,  y: 40,  w: 8,  h: 8,  name: "Fire Elevator L1"},
        room_fire_core1:        {x: 210,  y: 20,  w: 8,  h: 8,  name: "Core 1"},
        //room_fire_core2:        {x: 220,  y: 20,  w: 8,  h: 8,  name: "Core 2"},
        //room_fire_core3:        {x: 230,  y: 20,  w: 8,  h: 8,  name: "Core 3"},
        //room_fire_core4:        {x: 240,  y: 20,  w: 8,  h: 8,  name: "Core 4"},
        room_fire_core5:        {x: 220,  y: 20,  w: 8,  h: 8,  name: "Core 5"},
        //room_fire_core_freebattle:        {x: 210,  y: 30,  w: 8,  h: 8,  name: "Core Dead End Battle"},
        //room_fire_core_laserfun:        {x: 220,  y: 30,  w: 8,  h: 8,  name: "Core Laser Path"},
        room_fire_core_branch:        {x: 230,  y: 20,  w: 8,  h: 8,  name: "Core Branch Save"},
        //room_fire_core_bottomleft:        {x: 240,  y: 30,  w: 8,  h: 8,  name: "Core Bottom Left"},
        room_fire_core_left:        {x: 240,  y: 20,  w: 8,  h: 8,  name: "Core Left"},
        room_fire_core_topleft:        {x: 250,  y: 20,  w: 8,  h: 8,  name: "Core Top Left"},
        room_fire_core_top:        {x: 210,  y: 30,  w: 8,  h: 8,  name: "Core Top"},
        room_fire_core_topright:        {x: 220,  y: 30,  w: 8,  h: 8,  name: "Core Top Right"},
        room_fire_core_right:        {x: 230,  y: 30,  w: 8,  h: 8,  name: "Core Right"},
        //room_fire_core_bottomright:        {x: 250,  y: 40,  w: 8,  h: 8,  name: "Core Bottom Right"},
        room_fire_core_center:        {x: 240,  y: 30,  w: 8,  h: 8,  name: "Core Center"},
        //room_fire_shootguy_5:        {x: 220,  y: 50,  w: 8,  h: 8,  name: "Core Shooter"},
        //room_fire_core_treasureleft:        {x: 230,  y: 50,  w: 8,  h: 8,  name: "Core Left Trash"},
        //room_fire_core_treasureright:        {x: 240,  y: 50,  w: 8,  h: 8,  name: "Core Right Trash"},
        //room_fire_core_warrior:        {x: 250,  y: 50,  w: 8,  h: 8,  name: "Core Warrior Path"},
        //room_fire_core_bridge:        {x: 210,  y: 60,  w: 8,  h: 8,  name: "Core Bridge"},
        room_fire_core_premett:        {x: 250,  y: 30,  w: 8,  h: 8,  name: "Core Pre Mettaton"},
        //room_fire_core_metttest:        {x: 230,  y: 60,  w: 8,  h: 8,  name: "Core Mettaton"},
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        room_area1: {
            aaaa00:                                                      {x: 317, y: 129 },
			aaaa10:                                                      {x: 399, y: 130 },
			aaaa20:                                                      {x: 478, y: 132 },
			aaaa30:                                                      {x: 553, y: 130 },
			aaaa40:                                                      {x: 633, y: 130 },
			aaaa0:                                                      {x: 313, y: 174 },
			aaaa1:                                                      {x: 391, y: 175 },
			aaaa2:                                                      {x: 469, y: 178 },
			aaaa3:                                                      {x: 562, y: 181 },
			aaaa4:                                                      {x: 632, y: 173 },
        },
        room_area1_2: {
			aaaa0:                                                      {x: 153, y: 386 },
			aaaa1:                                                      {x: 157, y: 180 },
        },
        room_ruins1: {
			aaaa0:                                                      {x: 160, y: 427 },
			aaaa1:                                                      {x: 157, y: 113 },
        },
        room_ruins2: {
			aaaa0:                                                      {x: 158, y: 206 },
			aaaa1:                                                      {x: 140, y: 79 },
        },
        room_ruins3: {
			aaaa0:                                                      {x: 140, y: 200 },
			aaaa1:                                                      {x: 708, y: 147 },
        },
        room_ruins4: {
			aaaa0:                                                      {x: 29, y: 154 },
			aaaa1:                                                      {x: 162, y: 75 },
        },
        room_ruins5: {
			aaaa0:                                                      {x: 166, y: 194 },
			aaaa1:                                                      {x: 1168, y: 107 },
        },
        room_ruins6: {
			aaaa0:                                                      {x: 36, y: 112 },
			aaaa1:                                                      {x: 2463, y: 107 },
        },
        room_ruins7: {
			aaaa0:                                                      {x: 31, y: 97 },
			aaaa1:                                                      {x: 157, y: 74 },
			aaaa2:                                                      {x: 291, y: 348},
        },
        room_ruins7A: {
			aaaa0:                                                      {x: 157, y: 197},
			//it_candy1:                                                      {x: 124, y: 103, item: "event" },
			//it_candy2:                                                      {x: 141, y: 102, item: "event" },
			//it_candy3:                                                      {x: 173, y: 106, item: "event" },
			//it_candy4:                                                      {x: 190, y: 106, item: "event" },
        },
        room_ruins8: {
			aaaa0:                                                      {x: 31, y: 107 },
			aaaa1:                                                      {x: 286, y: 111 },
        },
        room_ruins9: {
			aaaa0:                                                      {x: 28, y: 108 },
			aaaa1:                                                      {x: 449, y: 112 },
        },
        room_ruins10:         {
			aaaa0:                                                      {x: 6, y: 117 },
			aaaa1:                                                      {x: 561, y: 236 },
},
        room_ruins11:         {
			aaaa2:                                                      {x: 8, y: 137 },
			aaaa3:                                                      {x: 544, y: 138 },
},
        room_ruins12A:         {
			aaaa4:                                                      {x: 7, y: 138 },
			aaaa5:                                                      {x: 310, y: 140 },
},
        room_ruins12:         {
			aaaa0:                                                      {x: 8, y: 137 },
			aaaa1:                                                      {x: 215, y: 76 },
			aaaa2:                                                      {x: 305, y: 138 },
},
        room_ruins12B:         {
			aaaa0:                                                      {x: 4, y: 138 },
			//aaaa1:                                                      {x: 130, y: 101, item: "event" },
			//aaaa2:                                                      {x: 191, y: 94, item: "event" },
},
        room_ruins13:         {
			aaaa0:                                                      {x: 161, y: 289 },
			aaaa1:                                                      {x: 620, y: 179 },
},
        room_ruins14:         {
			aaaa0:                                                      {x: 10, y: 113 },
			aaaa1:                                                      {x: 615, y: 171 },
			//aaaa2:                                                      {x: 182, y: 666, item: "event" },
},
        room_ruins15A:         {
			aaaa0:                                                      {x: 9, y: 172 },
			aaaa1:                                                      {x: 259, y: 424 },
			aaaa2:                                                      {x: 155, y: 94 },
},
        room_ruins15B:         {
			aaaa0:                                                      {x: 4, y: 333 },
			aaaa1:                                                      {x: 256, y: 104 },
			aaaa2:                                                      {x: 210, y: 423 },
},
        room_ruins15C:         {
			aaaa0:                                                      {x: 137, y: 112 },
			aaaa1:                                                      {x: 351, y: 338 },
			aaaa2:                                                      {x: 170, y: 424 },
},
        room_ruins15D:         {
			aaaa0:                                                      {x: 134, y: 425 },
			aaaa1:                                                      {x: 374, y: 179 },
			aaaa2:                                                      {x: 275, y: 425 },
},
        room_ruins15E:         {
			aaaa0:                                                      {x: 159, y: 67 },
			aaaa1:                                                      {x: 69, y: 178 },
			aaaa2:                                                      {x: 163, y: 180 },
			aaaa3:                                                      {x: 254, y: 180 },
},
        room_ruins16:        {
			aaaa0:                                                      {x: 4, y: 287 },
			aaaa1:                                                      {x: 289, y: 67 },
			aaaa2:                                                      {x: 571, y: 298 },
},
        room_ruins17:       {
			aaaa0:                                                      {x: 16, y: 139 },
			aaaa1:                                                      {x: 152, y: 71 },
},
        room_ruins18OLD:       {
			aaaa0:                                                      {x: 155, y: 230 },
			//aaaa1:                                                      {x: 49, y: 193, item:"event" },
},
        room_ruins19:         {
			aaaa0:                                                      {x: 157, y: 529 },
			aaaa1:                                                      {x: 152, y: 171 },
},
        room_torhouse1:        {
			aaaa0:                                                      {x: 154, y: 231 },
			aaaa1:                                                      {x: -3, y: 178 },
			aaaa2:                                                      {x: 202, y: 115 },
			aaaa3:                                                      {x: 307, y: 184 },
},
        room_torhouse2:        {
			aaaa0:                                                      {x: 68, y: 44 },
			aaaa1:                                                      {x: 301, y: 163 },
},
        room_torhouse3:         {
			aaaa0:                                                      {x: 1, y: 157 },
			aaaa1:                                                      {x: 165, y: 131 },
			aaaa2:                                                      {x: 372, y: 134 },
},
        room_torielroom:         {
			aaaa0:                                                      {x: 116, y: 230 },
},
        room_asrielroom:         {
			aaaa0:                                                      {x: 207, y: 221 },
			//aaaa1:                                                      {x: 130, y: 136, item:"event" },
},
        room_kitchen:         {
			aaaa0:                                                      {x: 62, y: 229 },
},
        room_basement1:      {
			aaaa0:                                                      {x: 42, y: 105 },
			aaaa1:                                                      {x: 471, y: 136 },
},
        room_basement2:         {
			aaaa0:                                                      {x: 14, y: 139 },
			aaaa1:                                                      {x: 482, y: 138 },
},
        room_basement3:       {
			aaaa0:                                                      {x: 12, y: 156 },
			aaaa1:                                                      {x: 166, y: 21 },
},
        room_basement4:         {
			aaaa0:                                                      {x: 154, y: 228 },
			aaaa1:                                                      {x: 157, y: 68 },
			//aaaa2:                                                      {x: 158, y: 119, item:"event" },
},
        room_basement5:         {
			aaaa0:                                                      {x: 164, y: 1614 },
			aaaa1:                                                      {x: 150, y: 81 },
},
        room_ruinsexit:         {
			aaaa0:                                                      {x: 160, y: 411 },
			aaaa1:                                                      {x: 157, y: 157 },
},
        room_tundra1:        {
			aaaa0:                                                      {x: 39, y: 150 },
			aaaa1:                                                      {x: 432, y: 187 },
},
        room_tundra2:     {
			aaaa0:                                                      {x: 26, y: 185 },
			aaaa1:                                                      {x: 2683, y: 184 },
},
        room_tundra3:      {
			aaaa0:                                                      {x: 8, y: 183 },
			aaaa1:                                                      {x: 206, y: 5 },
			aaaa2:                                                      {x: 386, y: 168 },
},
        room_tundra3A:     {
			aaaa0:                                                      {x: 151, y: 234 },
},
        room_tundra4:    {
			aaaa0:                                                      {x: 11, y: 167 },
			aaaa1:                                                      {x: 535, y: 181 },
},
        room_tundra5:       {
			aaaa0:                                                      {x: 8, y: 179 },
			aaaa1:                                                      {x: 442, y: 179 },
},
        room_tundra6:      {
			aaaa0:                                                      {x: 9, y: 175 },
			aaaa1:                                                      {x: 333, y: 12 },
			aaaa2:                                                      {x: 599, y: 158 },
},
        room_tundra6A:      {
			aaaa0:                                                      {x: 145, y: 226 },
			//aaaa1:                                                      {x: 150, y: 60,item:"event" },
},
        room_tundra7:       {
			aaaa0:                                                      {x: 9, y: 138 },
			aaaa1:                                                      {x: 307, y: 139 },
},
        room_tundra8:       {
			aaaa0:                                                      {x: 11, y: 140 },
			aaaa1:                                                      {x: 737, y: 99 },
			aaaa2:                                                      {x: 738, y: 446 },
			//aaaa3:                                                      {x: 115, y: 61 ,item:"event"},
},
        room_tundra8A:      {
			aaaa0:                                                      {x: 4, y: 144 },
},
        room_tundra9:        {
			aaaa0:                                                      {x: 15, y: 147 },
			aaaa1:                                                      {x: 306, y: 145 },
},
        room_tundra_spaghetti:      {
			aaaa0:                                                      {x: 6, y: 146 },
			aaaa1:                                                      {x: 315, y: 151 },
},
        room_tundra_snowpuzz:        {
			aaaa0:                                                      {x: 6, y: 144 },
			aaaa1:                                                      {x: 459, y: 554 },
},
        room_tundra_xoxosmall:        {
			aaaa0:                                                      {x: 119, y: 10 },
			aaaa1:                                                      {x: 485, y: 127 },
},
        room_tundra_xoxopuzz:        {
			aaaa0:                                                      {x: 17, y: 124 },
			aaaa1:                                                      {x: 792, y: 123 },
},
        room_tundra_randoblock:      {
			aaaa0:                                                      {x: 10, y: 116 },
			aaaa1:                                                      {x: 307, y: 152 },
},
        room_tundra_lesserdog:      {
			aaaa0:                                                      {x: 9, y: 154 },
			aaaa1:                                                      {x: 536, y: 126 },
},
        room_tundra_icehole:       {
			aaaa0:                                                      {x: 35, y: 9 },
},
        room_tundra_iceentrance:    {
			aaaa0:                                                      {x: 6, y: 128 },
			aaaa1:                                                      {x: 41, y: 220 },
			aaaa2:                                                      {x: 853, y: 229 },
			aaaa3:                                                      {x: 927, y: 106 },
},
        room_tundra_iceexit_new:        {
			aaaa0:                                                      {x: 18, y: 120 },
			aaaa1:                                                      {x: 521, y: 17 },
},
        room_tundra_iceexit:       {
			aaaa0:                                                      {x: 579, y: 119 },
			aaaa1:                                                      {x: 463, y: 89 },
},
        room_tundra_poffzone:      {
			aaaa0:                                                      {x: 8, y: 109 },
			aaaa1:                                                      {x: 541, y: 155 },
},
        room_tundra_dangerbridge:      {
			aaaa0:                                                      {x: 19, y: 155 },
			aaaa1:                                                      {x: 1019, y: 140 },
},
        room_tundra_town:        {
			aaaa0:                                                      {x: 9, y: 132 },
			aaaa1:                                                      {x: 462, y: 99 },
			aaaa2:                                                      {x: 627, y: 108 },
			aaaa3:                                                      {x: 1323, y: 88 },
			aaaa4:                                                      {x: 1613, y: 17 },
			aaaa5:                                                      {x: 1844, y: 81 },
			aaaa6:                                                      {x: 2239, y: 116 },
			aaaa7:                                                      {x: 2659, y: 149 },
},
        room_tundra_town2:       {
			aaaa0:                                                      {x: 214, y: 216 },
			aaaa1:                                                      {x: 224, y: 6 },
},
        room_tundra_dock:      {
			aaaa0:                                                      {x: 147, y: 223 },
},
        room_tundra_inn:       {
			aaaa0:                                                      {x: 138, y: 221 },
},
        room_tundra_grillby:       {
			aaaa0:                                                      {x: 173, y: 226 },
},
        room_tundra_library:       {
			aaaa0:                                                      {x: 163, y: 223 },
},
        room_tundra_sanshouse:      {
			aaaa0:                                                      {x: 236, y: 229 },
			aaaa1:                                                      {x: 231, y: 121 },
			aaaa2:                                                      {x: 257, y: 43 },
			aaaa3:                                                      {x: 49, y: 48 },
},
        room_tundra_paproom:       {
			aaaa0:                                                      {x: 220, y: 223 },
},
        room_tundra_sansroom:       {
			aaaa0:                                                      {x: 87, y: 225 },
},
        room_fogroom:        {
			aaaa0:                                                      {x: 6, y: 144 },
			aaaa1:                                                      {x: 878, y: 143 },
},
        room_shop1:        {
			aaaa0:                                                      {x: 253, y: 200 },
			//aaaa1:                                                      {x: 44, y: 136,item:"event" },
			//aaaa2:                                                      {x: 43, y: 156,item:"event" },
			//aaaa3:                                                      {x: 45, y: 186,item:"event" },
			//aaaa4:                                                      {x: 41, y: 219 ,item:"event"},
},
        room_water1:        {
			aaaa0:                                                      {x: 13, y: 151 },
			aaaa1:                                                      {x: 622, y: 152 },
},
        room_water2:     {
			aaaa0:                                                      {x: 11, y: 145 },
			aaaa1:                                                      {x: 308, y: 144 },
},
        room_water3:      {
			aaaa0:                                                      {x: 12, y: 128 },
			aaaa1:                                                      {x: 569, y: 129 },
			aaaa2:                                                      {x: 300, y: 43 },
},
        room_water3A:        {
			aaaa0:                                                      {x: 142, y: 225 },
			//aaaa1:                                                      {x: 130, y: 104,item:"event" },
},
        room_water4:      {
			aaaa0:                                                      {x: 14, y: 292 },
			aaaa1:                                                      {x: 546, y: 295 },
},
        room_water_bridgepuzz1:       {
			aaaa0:                                                      {x: 12, y: 152 },
			aaaa1:                                                      {x: 507, y: 146 },
},
        room_water5:        {
			aaaa0:                                                      {x: 19, y: 365 },
			aaaa1:                                                      {x: 491, y: 416 },
			aaaa2:                                                      {x: 127, y: 93 },
},
        room_water5A:      {
			aaaa0:                                                      {x: 7, y: 185 },
			//aaaa1:                                                      {x: 162, y: 132 ,item:"event"},
},
        room_water6:      {
			aaaa0:                                                      {x: 120, y: 359 },
			aaaa1:                                                      {x: 510, y: 98 },
},
        room_water7:       {
			aaaa0:                                                      {x: 142, y: 315 },
			aaaa1:                                                      {x: 1088, y: 152 },
},
        room_water8:       {
			aaaa0:                                                      {x: 18, y: 189 },
			aaaa1:                                                      {x: 2073, y: 213 },
},
        room_water9:       {
			aaaa0:                                                      {x: 12, y: 139 },
			aaaa1:                                                      {x: 827, y: 139 },
},
        room_water_savepoint1:     {
			aaaa0:                                                      {x: 5, y: 132 },
			aaaa1:                                                      {x: 308, y: 136 },
},
        room_water11:       {
			aaaa0:                                                      {x: 17, y: 134 },
			aaaa1:                                                      {x: 301, y: 88 },
			aaaa2:                                                      {x: 476, y: 324 },
			aaaa3:                                                      {x: 650, y: 154 },
},
        room_water_nicecream:   {
			aaaa0:                                                      {x: 156, y: 432 },
			//aaaa1:                                                      {x: 81, y: 127 ,item:"event"},
		//	aaaa2:                                                      {x: 238, y: 128 ,item:"event"},
			//aaaa3:                                                      {x: 117, y: 124 ,item:"event"},
},
        room_water12:      {
			aaaa0:                                                      {x: 391, y: 15 },
			aaaa1:                                                      {x: 10, y: 461 },
			aaaa2:                                                      {x: 1015, y: 33 },
},
        room_water_shoe:     {
			aaaa0:                                                      {x: 303, y: 126 },
		//	aaaa1:                                                      {x: 150, y: 128 ,item:"event"},
},
        room_water_bird:       {
			aaaa0:                                                      {x: 16, y: 125 },
			aaaa1:                                                      {x: 306, y: 131 },
},
        room_water_onionsan:     {
			aaaa0:                                                      {x: 112, y: 223 },
			aaaa1:                                                      {x: 1187, y: 145 },
},
        room_water14:       {
			aaaa0:                                                      {x: 11, y: 139 },
			aaaa1:                                                      {x: 270, y: 29 },
			aaaa2:                                                      {x: 712, y: 140 },
},
        room_water_piano:      {
			aaaa0:                                                      {x: 143, y: 225 },
},
        room_water_statue:       {
			aaaa0:                                                      {x: 5, y: 133 },
			aaaa1:                                                      {x: 303, y: 137 },
},
        room_water_prewaterfall:        {
			aaaa0:                                                      {x: 17, y: 139 },
			aaaa1:                                                      {x: 315, y: 148 },
},
        room_water_waterfall:       {
			aaaa0:                                                      {x: 8, y: 145 },
			aaaa1:                                                      {x: 1550, y: 214 },
},
        room_water_waterfall2:     {
			aaaa0:                                                      {x: 299, y: 922 },
			aaaa1:                                                      {x: 151, y: 21 },
},
        room_water_waterfall3:       {
			aaaa0:                                                      {x: 25, y: 182 },
			aaaa1:                                                      {x: 1343, y: 183 },
},
        room_water_waterfall4:       {
			aaaa0:                                                      {x: 15, y: 130 },
			aaaa1:                                                      {x: 496, y: 87 },
},
        room_water_preundyne:       {
			aaaa0:                                                      {x: 14, y: 80 },
			aaaa1:                                                      {x: 712, y: 88 },
},
        room_water_undynebridge:        {
			aaaa0:                                                      {x: 26, y: 105 },
},
        room_water_trashzone1:       {
			aaaa0:                                                      {x: 790, y: 122 },
},
        room_water_trashsavepoint:       {
			aaaa0:                                                      {x: 13, y: 119 },
			aaaa1:                                                      {x: 307, y: 123 },
},
        room_water_trashzone2:       {
			aaaa0:                                                      {x: 9, y: 792 },
		//	aaaa1:                                                      {x: 222, y: 322 ,item:"event"},
		//	aaaa2:                                                      {x: 283, y: 354 ,item:"event"},
			//aaaa3:                                                      {x: 231, y: 392,item:"event" },
			aaaa4:                                                      {x: 184, y: 46 },
},
        room_water_friendlyhub:       {
			aaaa0:                                                      {x: 16, y: 117 },
			aaaa1:                                                      {x: 313, y: 222 },
			aaaa2:                                                      {x: 146, y: 30 },
			aaaa3:                                                      {x: 319, y: 31 },
			aaaa4:                                                      {x: 471, y: 28 },
			aaaa5:                                                      {x: 608, y: 108 },
},
        room_water_undyneyard:        {
			aaaa0:                                                      {x: 149, y: 233 },
},
        room_water_blookyard:        {
			aaaa1:                                                      {x: 148, y: 234 },
			aaaa2:                                                      {x: 125, y: 127 },
			aaaa3:                                                      {x: 180, y: 128 },
			aaaa4:                                                      {x: 311, y: 118 },
},
        room_water_blookhouse:        {
			aaaa0:                                                      {x: 79, y: 232 },
},
        room_water_hapstablook:        {
			aaaa0:                                                      {x: 147, y: 232 },
		//	aaaa1:                                                      {x: 73, y: 135,item:"event" },
			//aaaa2:                                                      {x: 106, y: 118,item:"event" },
			//aaaa3:                                                      {x: 135, y: 138,item:"event" },
			//aaaa4:                                                      {x: 162, y: 115 ,item:"event"},
			//aaaa5:                                                      {x: 189, y: 146,item:"event" },
			//aaaa6:                                                      {x: 216, y: 122,item:"event" },
},
        room_water_farm:        {
			aaaa0:                                                      {x: 173, y: 217 },
			aaaa1:                                                      {x: 27, y: 140 },
},
        room_water_shop:        {
			aaaa0:                                                      {x: 16, y: 140 },
			aaaa1:                                                      {x: 170, y: 233 },
			aaaa2:                                                      {x: 155, y: 95 },
			aaaa3:                                                      {x: 302, y: 138 },
},
        room_shop2:        {
			aaaa0:                                                      {x: 251, y: 197 },
			//aaaa1:                                                      {x: 27, y: 138,item:"event"  },
			//aaaa2:                                                      {x: 28, y: 161,item:"event"  },
		//	aaaa3:                                                      {x: 29, y: 196 ,item:"event" },
			//aaaa4:                                                      {x: 31, y: 216 ,item:"event" },
},
        room_water_dock:        {
			aaaa0:                                                      {x: 154, y: 31 },
},
        room_water15:        {
			aaaa0:                                                      {x: 24, y: 133 },
			aaaa1:                                                      {x: 991, y: 130 },
},
        room_water16:        {
			aaaa0:                                                      {x: 13, y: 119 },
			aaaa1:                                                      {x: 524, y: 621 },
			aaaa2:                                                      {x: 591, y: 153 },
},
        room_water_temvillage:       {
			aaaa0:                                                      {x: 54, y: 16 },
			aaaa1:                                                      {x: 330, y: 130 },
},
        room_shop5: {
			aaaa0:                                                      {x: 249, y: 199 },
		//	aaaa1:                                                      {x: 24, y: 136 ,item:"event"},
		//	aaaa2:                                                      {x: 22, y: 164 ,item:"event"},
		//	aaaa3:                                                      {x: 27, y: 197 ,item:"event"},
			//aaaa4:                                                      {x: 21, y: 226 ,item:"event"},
},
        room_water17:        {
			aaaa0:                                                      {x: 12, y: 111 },
			aaaa1:                                                      {x: 628, y: 309 },
},
        room_water18:        {
			aaaa0:                                                      {x: 17, y: 130 },
			aaaa1:                                                      {x: 350, y: 23 },
},
        room_water19:        {
			aaaa0:                                                      {x: 144, y: 608 },
			aaaa1:                                                      {x: 308, y: 134 },
},
        room_water20:        {
			aaaa0:                                                      {x: 11, y: 128 },
			aaaa1:                                                      {x: 593, y: 127 },
},
        room_water21:       {
			aaaa0:                                                      {x: 9, y: 144 },
			aaaa1:                                                      {x: 306, y: 146 },
},
        room_water_undynefinal:       {
			aaaa0:                                                      {x: 8, y: 663 },
},
        room_fire2:        {
			aaaa0:                                                      {x: 302, y: 119 },
},
        room_fire_prelab:      {
			aaaa0:                                                      {x: 11, y: 118 },
			aaaa1:                                                      {x: 208, y: 228 },
			aaaa2:                                                      {x: 203, y: 16 },
			aaaa3:                                                      {x: 488, y: 140 },
},
        room_fire_dock:      {
			aaaa0:                                                      {x: 146, y: 8 },
},
        room_fire_lab1:       {
			aaaa0:                                                      {x: 23, y: 162 },
			aaaa1:                                                      {x: 674, y: 4 },
			aaaa2:                                                      {x: 1077, y: 133 },
},
        room_fire_lab2:       {
			aaaa0:                                                      {x: 436, y: 230 },
},
        room_fire3:        {
			aaaa0:                                                      {x: 58, y: 234 },
			aaaa1:                                                      {x: 417, y: 9 },
},
        room_fire5:       {
			aaaa0:                                                      {x: 145, y: 1610 },
			aaaa1:                                                      {x: 156, y: 10 },
},
        room_fire6:       {
			aaaa0:                                                      {x: 103, y: 430 },
			aaaa1:                                                      {x: 766, y: 427 },
			aaaa2:                                                      {x: 329, y: 14 },
},
        room_fire6A:        {
			aaaa0:                                                      {x: 290, y: 15 },
			//aaaa1:                                                      {x: 140, y: 101 ,item:"event"},
},
        room_fire_lasers1:    {
			aaaa0:                                                      {x: 129, y: 223 },
			aaaa1:                                                      {x: 1149, y: 127 },
},
        room_fire7:      {
			aaaa0:                                                      {x: 14, y: 458 },
			aaaa1:                                                      {x: 16, y: 267 },
			aaaa2:                                                      {x: 243, y: 117 },
			aaaa3:                                                      {x: 506, y: 266 },
},
        room_fire8:       {
			aaaa0:                                                      {x: 340, y: 124 },
			aaaa1:                                                      {x: 181, y: 83 },
},
        room_fire_shootguy_2:      {
			aaaa0:                                                      {x: 164, y: 226 },
},
        room_fire9:     {
			aaaa0:                                                      {x: 17, y: 126 },
			aaaa1:                                                      {x: 176, y: 91 },
},
        room_fire_shootguy_1:     {
			aaaa0:                                                      {x: 157, y: 225 },
},
        room_fire_turn:        {
			aaaa0:                                                      {x: 171, y: 222 },
			aaaa1:                                                      {x: 772, y: 106 },
},
        room_fire_cookingshow:       {
			aaaa0:                                                      {x: 35, y: 361 },
			aaaa1:                                                      {x: 618, y: 365 },
},
        room_fire_savepoint1:       {
			aaaa0:                                                      {x: 16, y: 165 },
			aaaa1:                                                      {x: 687, y: 166 },
},
        room_fire_elevator_r1:        {
			aaaa0:                                                      {x: 12, y: 167 },
},
        room_fire_elevator_r2:        {
			aaaa0:                                                      {x: 16, y: 124 },
},
        room_fire_hotdog:        {
			aaaa0:                                                      {x: 9, y: 128 },
			aaaa1:                                                      {x: 302, y: 128 },
			//aaaa2:                                                      {x: 82, y: 79,item:"event" },
			//aaaa3:                                                      {x: 91, y: 63 ,item:"event"},
			//aaaa4:                                                      {x: 110, y: 47 ,item:"event"},
			//aaaa5:                                                      {x: 138, y: 60 ,item:"event"},
			//aaaa6:                                                      {x: 150, y: 79,item:"event" },
},
        room_fire_walkandbranch:     {
			aaaa0:                                                      {x: 9, y: 128 },
			aaaa1:                                                      {x: 227, y: 219 },
			aaaa2:                                                      {x: 802, y: 132 },
			aaaa3:                                                      {x: 239, y: 10 },
},
        room_fire_sorry:       {
			aaaa0:                                                      {x: 171, y: 224 },
},
        room_fire_apron:       {
			aaaa0:                                                      {x: 142, y: 18 },
			//aaaa1:                                                      {x: 90, y: 111,item:"event" },
},
        room_fire10:       {
			aaaa0:                                                      {x: 33, y: 131 },
			aaaa1:                                                      {x: 809, y: 130 },
},
        room_fire_rpuzzle:       {
			aaaa0:                                                      {x: 14, y: 162 },
			aaaa1:                                                      {x: 597, y: 285 },
},
        room_fire_mewmew2:       {
			aaaa0:                                                      {x: 20, y: 146 },
			aaaa1:                                                      {x: 502, y: 153 },
},
        room_fire_boysnightout:       {
			aaaa0:                                                      {x: 592, y: 345 },
			aaaa1:                                                      {x: 601, y: 120 },
},
        room_fire_newsreport:        {
			aaaa0:                                                      {x: 47, y: 294 },
			aaaa1:                                                      {x: 908, y: 14 },
},
        room_fire_coreview2:       {
			aaaa0:                                                      {x: 15, y: 168 },
			aaaa1:                                                      {x: 631, y: 222 },
},
        room_fire_elevator_l2:       {
			aaaa0:                                                      {x: 298, y: 165 },
},
        room_fire_elevator_l3:       {
			aaaa0:                                                      {x: 298, y: 125 },
},
        room_fire_spidershop:       {
			aaaa0:                                                      {x: 14, y: 129 },
			aaaa1:                                                      {x: 461, y: 126 },
},
        room_fire_walkandbranch2:       {
			aaaa0:                                                      {x: 9, y: 332 },
			aaaa1:                                                      {x: 374, y: 644 },
			aaaa2:                                                      {x: 773, y: 134 },
			aaaa3:                                                      {x: 368, y: 11 },
},
        room_fire_conveyorlaser:       {
			aaaa0:                                                      {x: 155, y: 25 },
			aaaa1:                                                      {x: 848, y: 93 },
},
        room_fire_shootguy_3:      {
			aaaa0:                                                      {x: 173, y: 229 },
},
        room_fire_preshootguy4:       {
			aaaa0:                                                      {x: 171, y: 309 },
			aaaa1:                                                      {x: 167, y: 89 },
},
        room_fire_shootguy_4:      {
			aaaa0:                                                      {x: 169, y: 232 },
},
        room_fire_savepoint2:       {
			aaaa0:                                                      {x: 89, y: 229 },
			aaaa1:                                                      {x: 480, y: 166 },
},
        room_fire_spider:        {
			aaaa0:                                                      {x: 21, y: 185 },
			aaaa1:                                                      {x: 1001, y: 182 },
},
        room_fire_pacing:       {
			aaaa0:                                                      {x: 23, y: 178 },
			aaaa1:                                                      {x: 306, y: 176 },
},
        room_fire_operatest:      {
			aaaa0:                                                      {x: 4, y: 289 },
			aaaa1:                                                      {x: 312, y: 289 },
},
        room_fire_multitile:       {
			aaaa0:                                                      {x: 1244, y: 26 },
},
        room_fire_hotelfront_1:      {
			aaaa0:                                                      {x: 15, y: 143 },
			aaaa1:                                                      {x: 259, y: 219 },
			aaaa2:                                                      {x: 511, y: 155 },
			aaaa3:                                                      {x: 242, y: 17 },
},
        room_fire_hotelfront_2:       {
			aaaa0:                                                      {x: 237, y: 378 },
			aaaa1:                                                      {x: 229, y: 189 },
			aaaa2:                                                      {x: 419, y: 49 },
},
        room_fire_hotellobby:      {
			aaaa0:                                                      {x: 201, y: 102 },
			aaaa1:                                                      {x: 290, y: 240 },
			aaaa2:                                                      {x: 486, y: 384 },
			aaaa3:                                                      {x: 201, y: 580 },
			aaaa4:                                                      {x: 13, y: 381 },
},
        room_shop4:       {
			aaaa0:                                                      {x: 248, y: 199 },
			//aaaa1:                                                      {x: 28, y: 135,item:"event" },
			//aaaa2:                                                      {x: 27, y: 152,item:"event" },
			//aaaa3:                                                      {x: 29, y: 184,item:"event" },
			//aaaa4:                                                      {x: 31, y: 213,item:"event" },
},
        room_shop3:       {
			aaaa0:                                                      {x: 248, y: 199 },
			//aaaa1:                                                      {x: 28, y: 135,item:"event" },
			//aaaa2:                                                      {x: 27, y: 152,item:"event" },
			//aaaa3:                                                      {x: 29, y: 184,item:"event" },
			//aaaa4:                                                      {x: 31, y: 213,item:"event" },
},
        room_fire_restaurant:      {
			aaaa0:                                                      {x: 991, y: 168 },
},
        room_fire_hoteldoors:       {
			aaaa0:                                                      {x: 10, y: 181 },
			aaaa1:                                                      {x: 205, y: 129 },
},
        room_fire_hotelbed:        {
			aaaa0:                                                      {x: 162, y: 231 },
},
        room_fire_elevator_r3:      {
			aaaa0:                                                      {x: 11, y: 124 },
},
        room_fire_precore:        {
			aaaa0:                                                      {x: 159, y: 545 },
			aaaa1:                                                      {x: 160, y: 101 },
},
        room_fire_elevator_l1:        {
			aaaa0:                                                      {x: 255, y: 232 },
},
        room_fire_core1:     {
			aaaa0:                                                      {x: 159, y: 290 },
			aaaa1:                                                      {x: 161, y: 118 },
			aaaa2:                                                      {x: 44, y: 67 },
			aaaa3:                                                      {x: 277, y: 66 },
},
        room_fire_core2:    {
			aaaa0:                                                      {x: 160, y: 328 },
},
        room_fire_core3:      {
			aaaa0:                                                      {x: 156, y: 403 },
			aaaa1:                                                      {x: 155, y: 95 },
},
        room_fire_core4:       {
			aaaa0:                                                      {x: 144, y: 221 },
			aaaa1:                                                      {x: 659, y: 134 },
},
        room_fire_core5:       {
			aaaa0:                                                      {x: 9, y: 128 },
			aaaa1:                                                      {x: 146, y: 12 },
			aaaa2:                                                      {x: 299, y: 133 },
},
        room_fire_core_freebattle:       {
			aaaa0:                                                      {x: 156, y: 225 },
},
        room_fire_core_laserfun:      {
			aaaa0:                                                      {x: 9, y: 122 },
			aaaa1:                                                      {x: 1089, y: 12 },
},
        room_fire_core_branch:        {
			aaaa0:                                                      {x: 143, y: 220 },
			aaaa1:                                                      {x: 9, y: 108 },
			aaaa2:                                                      {x: 154, y: 20 },
			aaaa3:                                                      {x: 304, y: 114 },
},
        room_fire_core_bottomleft:      {
			aaaa0:                                                      {x: 299, y: 120 },
			aaaa1:                                                      {x: 147, y: 9 },
},
        room_fire_core_left:       {
			aaaa0:                                                      {x: 8, y: 112 },
			aaaa1:                                                      {x: 146, y: 229 },
			aaaa2:                                                      {x: 147, y: 13 },
},
        room_fire_core_topleft:       {
			aaaa0:                                                      {x: 146, y: 229 },
			aaaa1:                                                      {x: 308, y: 120 },
			aaaa2:                                                      {x: 149, y: 12 },
},
        room_fire_core_top:       {
			aaaa0:                                                      {x: 146, y: 230 },
			aaaa1:                                                      {x: 9, y: 119 },
			aaaa2:                                                      {x: 146, y: 15 },
			aaaa3:                                                      {x: 302, y: 113 },
},
        room_fire_core_topright:        {
			aaaa0:                                                      {x: 157, y: 226 },
			aaaa1:                                                      {x: 21, y: 119 },
			aaaa2:                                                      {x: 154, y: 21 },
},
        room_fire_core_right:       {
			aaaa0:                                                      {x: 146, y: 228 },
			aaaa1:                                                      {x: 16, y: 125 },
			aaaa2:                                                      {x: 143, y: 12 },
			aaaa3:                                                      {x: 308, y: 117 },
},
        room_fire_core_bottomright:        {
			aaaa0:                                                      {x: 10, y: 117 },
			aaaa1:                                                      {x: 145, y: 8 },
},
        room_fire_core_center:       {
			aaaa0:                                                      {x: 304, y: 120 },
			aaaa1:                                                      {x: 149, y: 227 },
			aaaa2:                                                      {x: 151, y: 11 },
},
        room_fire_shootguy_5:       {
			aaaa0:                                                      {x: 298, y: 193 },
},
        room_fire_core_treasureleft:        {
			aaaa0:                                                      {x: 146, y: 231 },
			//aaaa1:                                                      {x: 148, y: 108,item:"event" },
},
        room_fire_core_treasureright:       {
			aaaa0:                                                      {x: 150, y: 234 },
},
        room_fire_core_warrior:       {
			aaaa0:                                                      {x: 108, y: 227 },
},
        room_fire_core_bridge:     {
			aaaa0:                                                      {x: 21, y: 118 },
			aaaa1:                                                      {x: 595, y: 111 },
},
        room_fire_core_premett:     {
			aaaa0:                                                      {x: 9, y: 113 },
			aaaa1:                                                      {x: 157, y: 89 },
			aaaa2:                                                      {x: 241, y: 93 },
},
        room_fire_core_metttest:      {
			aaaa0:                                                      {x: 165, y: 983 },
},
        template: {

        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["corridor",    0], ["dead_end", null]],
        [["items",      0]]
        //[["item_event", 0], ["item_checked", null]]
    ],
    progress: [
        //[["feather_badge", 0]]
    ],
    modifiers: [
        [["#ce4069"],  ["#ff9c54"], ["#f3d23b"], ["#743683"], ["#654321"], ["#014f01"]],
    [["#4d90d5"], ["#74cec0"],   ["#90c12c"],  ["#ec8fe6"],   ["#5a5366"],  ["#00146b"]]
	],
};