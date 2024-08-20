#!/usr/bin/env node

import { Command } from 'commander'
import packageJson from '../package.json'
import * as commands from './commands'

const program = new Command()

program
  .version(packageJson.version)
  .description('Uma CLI que cria mensagens de commit usando IA')

for (const command of Object.values(commands)) {
  command(program)
}

export default program
