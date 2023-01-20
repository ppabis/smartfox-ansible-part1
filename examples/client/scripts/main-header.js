// THIS IS JUST A HEADER OF THE ORIGINAL FILE
// COPY AND PASTE IT APPROPRIATELY IN THE ORIGINAL FILE

//------------------------------------
// Constants
//------------------------------------
var LOBBY_ROOM_NAME = "Tris";
var GAME_ROOMS_GROUP_NAME = "default";

//var EXTENSION_ID = "Tris-JS";
//var EXTENSIONS_CLASS = "TrisExtension.js";

// Comment above EXTENSION_ID and EXTENSION_CLASS constants and
// uncomment the following to use the Java version of the Tris Extension
var EXTENSION_ID = "Tris";
var EXTENSIONS_CLASS = "sfs2x.extensions.games.tris.TrisExtension";


//------------------------------------
// Vars
//------------------------------------
var sfs = null;

var currentPrivateChat;
var privateChats;

var inGame = false;

function init()
{
	trace("Application started");

	// Create configuration object
	var config = {};
	config.host = "smartfox.loc";
	config.port = 8443;
	config.zone = "Tris";
	config.debug = true;
	config.useSSL = true;