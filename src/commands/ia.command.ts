import { Command } from 'commander'
import { getDiff, hasState, isRepositoryGit } from '../helpers/git'

export async function iaCommand(program: Command) {
  program
    .command('ia')
    .description('Get the diff of the current repository')
    .action(async () => {
      const isRepo = await isRepositoryGit()
      if (!isRepo) {
        console.error('Not a git repository')
        return
      }

      const status = await hasState()
      if (!status) {
        console.error('No changes detected')
        return
      }

      const diff = await getDiff()
      console.log(diff)
    })
}
