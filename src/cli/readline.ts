import * as nodeReadline from 'readline';
import { stdin as input, stdout as output } from "node:process";

export const readline = async (message: string): Promise<string> =>
  new Promise((res) => {
    const rl = nodeReadline.createInterface({ input, output });
    rl.question(message, res);
  });
