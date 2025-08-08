import "./features/partyfinder";
import Data from "./util/data";
import Config from "./Config";

register("command", () => Config.openGUI()).setName("sbd").setAliases(["sbdo", "sbdoverlay"]);

register("command", () => {
  const debugData = JSON.stringify(Data.debug.req, null, 2);
  console.log(debugData);
  ChatLib.chat(debugData);
}).setName("sbdebug");