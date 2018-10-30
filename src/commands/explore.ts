import * as Discord from "discord.js";
import { playerService } from "../services/playerService";
import { Adventure } from "../interfaces/adventure";

import * as adventures from "../../data/adventures.json";
import { getTimeStampFormated } from "../utils/time";
import { EXPLORATION_MAX_LEVEL } from "../utils/consts";

/**
 * Send user user to farm(Get gold, xp, and equips)
 * @param msg Discord last message related to the command
 * @param level difficult of the farm field. How bigger the number, harder is the field.
 * The amount of gold, xp received by the user increases according to the value of the level
 */
export function explore(msg: Discord.Message, level: number) {
  if (level > 0 && level <= EXPLORATION_MAX_LEVEL) {
    playerService.findbyUserID(msg.author.id).then(player => {
      if (player !== null) {
        const adv: Adventure = adventures[level];

        if (adv === undefined) {
          msg.channel.send("Hmmm, the informed adventure does not exist ");
          return;
        }

        player.adventure = adv;
        player.adventureStartedTime = getTimeStampFormated();

        playerService.updatePlayer(player).then(() => {
          msg.channel.send("Send player to explore " + adv.name) +
            ". Good Farmning!";
        });
      }
    });
  } else {
    msg.channel.send(
      "You must choose a number between 1 and " +
        EXPLORATION_MAX_LEVEL +
        " to send your "
    );
  }
}
