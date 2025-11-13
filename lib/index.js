import chalk from "chalk";
import makeWASocket from './Socket/index.js';

console.log(chalk.magentaBright.bold("\n🎋 Modified Baileys 7.X 🎋\n"));
//console.log(chalk.whiteBright("This is an altered or forked version of Baileys Whiskey, if it has errors or anything else, we are not responsible.\n"));
//console.log(chalk.redBright(`⚠️ We clarify that this version is modified exclusively for the "NAMI" bot. Any use you try to give it and it fails does not mean that Baileys is not bad, you are just using it wrong and not for the bot that has been modified.\n`));
//console.log(chalk.gray("------------------------------\n"));

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';

export { makeWASocket };
export default makeWASocket;
