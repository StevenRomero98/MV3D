// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"Yami_SkipTitle","status":true,"description":"Skip the title scene for testing purpose.","parameters":{}},
{"name":"QPlus","status":false,"description":"<QPlus> (Should go above all Q Plugins)\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QMovement","status":false,"description":"<QMovement>\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"true","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"30\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[\"{\\\"ID\\\":\\\"tile\\\",\\\"Type\\\":\\\"box\\\",\\\"Width\\\":\\\"48\\\",\\\"Height\\\":\\\"48\\\",\\\"Offset X\\\":\\\"0\\\",\\\"Offset Y\\\":\\\"0\\\"}\"]","Debug Settings":"","Show Colliders":"false"}},
{"name":"QM+Followers","status":false,"description":"<QMFollowers>\nQMovement Addon: Adds follower support","parameters":{}},
{"name":"QPathfind","status":false,"description":"<QPathfind>\nA* Pathfinding algorithm","parameters":{"Diagonals":"true","Any Angle":"true","Intervals":"100","Smart Wait":"60","Dash on Mouse":"true"}},
{"name":"AltimitMovement","status":false,"description":"Vector-based character movement and collision","parameters":{"player":"","player_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","player_circular_movement":"true","":"","followers":"","followers_distance":"1.50","followers_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","followers_circular_movement":"true","vehicles":"","vehicles_boat_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.333' />\"","vehicles_ship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.5' />\"","vehicles_airship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.25' />\"","event":"","event_character_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","event_tile_collider_list":"\"<rect x='0' y='0' width='1' height='1' />\"","presets":"[]","move_route":"","move_route_align_grid":"true","input_config":"","input_config_enable_touch_mouse":"true","input_config_gamepad_mode":"3","play_test":"","play_test_collision_mesh_caching":"false"}},
{"name":"YEP_SaveCore","status":false,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"babylon","status":true,"description":"Javascript 3D rendering engine","parameters":{}},
{"name":"mv3d","status":true,"description":"3D rendering in RPG Maker MV with babylon.js\nversion 0.5","parameters":{"options":"","renderDist":"30","mipmap":"true","mipmapOption":"true","3dMenu":"SUBMENU","graphics":"","antialiasing":"true","fov":"65","edgefix":"0.5","alphatest":"0.51","lightLimit":"8","map":"","enabledDefault":"true","cellSize":"12","unloadCells":"false","eventsUpdateNear":"true","fog":"","fogColor":"black","fogNear":"20.0","fogFar":"30.0","input":"","WASD":"true","dir8Movement":"Diagonal Smart","keyboardPitch":"true","keyboardTurn":"QE","keyboardStrafe":"QE","turnIncrement":"45","yawSpeed":"90","pitchSpeed":"90","stairThresh":"0.10","walkOffEdge":"false","walkOnEvents":"true","gravity":"8.00","tileconfig":"","wallHeight":"2.0","tableHeight":"0.33","fringeHeight":"2.0","ceilingHeight":"2.0","layerDist":"0.0100","animDelay":"333","regions":"[\"{\\\"regionId\\\":\\\"1\\\",\\\"conf\\\":\\\"height(1)\\\"}\",\"{\\\"regionId\\\":\\\"2\\\",\\\"conf\\\":\\\"height(2)\\\"}\",\"{\\\"regionId\\\":\\\"3\\\",\\\"conf\\\":\\\"height(3)\\\"}\",\"{\\\"regionId\\\":\\\"4\\\",\\\"conf\\\":\\\"height(4)\\\"}\",\"{\\\"regionId\\\":\\\"5\\\",\\\"conf\\\":\\\"height(5)\\\"}\",\"{\\\"regionId\\\":\\\"6\\\",\\\"conf\\\":\\\"height(6)\\\"}\",\"{\\\"regionId\\\":\\\"7\\\",\\\"conf\\\":\\\"height(7)\\\"}\",\"{\\\"regionId\\\":\\\"8\\\",\\\"conf\\\":\\\"height(8)\\\"}\",\"{\\\"regionId\\\":\\\"16\\\",\\\"conf\\\":\\\"height(-0.5)\\\"}\",\"{\\\"regionId\\\":\\\"17\\\",\\\"conf\\\":\\\"height(-1)\\\"}\",\"{\\\"regionId\\\":\\\"18\\\",\\\"conf\\\":\\\"height(-2)\\\"}\",\"{\\\"regionId\\\":\\\"24\\\",\\\"conf\\\":\\\"depth(0.5)\\\"}\",\"{\\\"regionId\\\":\\\"25\\\",\\\"conf\\\":\\\"depth(1)\\\"}\",\"{\\\"regionId\\\":\\\"40\\\",\\\"conf\\\":\\\"height(0),shape(slope)\\\"}\",\"{\\\"regionId\\\":\\\"41\\\",\\\"conf\\\":\\\"height(1),shape(slope)\\\"}\"]","ttags":"[\"{\\\"terrainTag\\\":\\\"1\\\",\\\"conf\\\":\\\"shape(xcross),height(1),fringe(0)\\\"}\",\"{\\\"terrainTag\\\":\\\"2\\\",\\\"conf\\\":\\\"shape(fence),height(1)\\\"}\"]","characters":"","heightTrigger":"true","eventCharDefaults":"shadow(0.8,4),shape(sprite),scale(1)","eventObjDefaults":"shadow(0),shape(sprite),scale(1)","eventTileDefaults":"shadow(0),shape(flat),scale(1)","eventHeight":"2.0","boatSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false),height(-0.16)\",\"big\":\"false\"}","shipSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(2),bush(false)\",\"big\":\"false\"}","airshipSettings":"{\"conf\":\"shadow(1,6),shape(sprite),scale(3),bush(false)\",\"height\":\"2.0\",\"big\":\"false\",\"bushLanding\":\"false\"}","allowGlide":"true","spriteOffset":"0.90","assets":"","shadowTexture":"shadow","alphaMask":"bushAlpha","errorTexture":"errorTexture","requiredImages":""}},
{"name":"mv3d-patreon","status":false,"description":"Premium features for MV3D\nversion 0.3.10","parameters":{"shadow":"","dynShadowEnabled":"true","defShadowQuality":"MEDIUM","softShadows":"true","abnormal":"true","postProcessing":"","alphaFog":"0.1000"}}
];
