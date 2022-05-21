import { CommandInteraction, Message, MessageContextMenuInteraction, UserContextMenuInteraction } from "discord.js"

const OWNER_STRING = '935932557013426176'

type main = {
    /**
     * Checks if the provided message or interaction's author is the owner of the bot.
     * @param obj The message or interaction to check.
     * @returns {boolean} Whether or not the provided message or interaction's author is the owner of the bot.
     */
    isOwner: (obj: Message | CommandInteraction | UserContextMenuInteraction | MessageContextMenuInteraction) => boolean,

    /**
     * The owner's id
     */
    owner: string,

    /**
     * Checks the size of the provided object
     */
    size: (obj: Record<string, any>) => number,
}

const malachite: main = {
    isOwner: (obj) => {
        if (obj instanceof Message) {
            return obj.author.id === OWNER_STRING
        } else {
            return obj.user.id === OWNER_STRING
        };
    },
    owner: OWNER_STRING,
    size: (obj) => Object.keys(obj).length,
}

const { isOwner, owner, size } = malachite 

export { isOwner, owner, size }
export default malachite