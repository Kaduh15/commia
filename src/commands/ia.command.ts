import { generateText } from 'ai'
import { Command } from 'commander'
import { ollama } from 'ollama-ai-provider'
import {
  commit,
  getDiffStaged,
  getState,
  isRepositoryGit,
} from '../helpers/git'
import { StatusResult } from 'simple-git'

export async function iaCommand(program: Command) {
  program
    .command('ia')
    .description(
      'Generate a commit message based on the current repository diff',
    )
    .option('--lang <lang>', 'Language of the commit message', 'en-US')
    .option('--model <model>', 'Model to use for generating text', 'llama3.1')
    .action(async (options) => {
      console.time('start')
      const { lang = 'en-US', model: modelOption = 'llama3.1' } = options

      if (!(await isRepositoryGit())) {
        console.error('Not a git repository')
        return
      }

      const status = await getState()
      if (!status.files.length || !status.staged.length) {
        console.error('No changes detected')
        return
      }

      const diff = (await getDiffStaged()) || generateDiffSummary(status)

      const prompt = createPrompt(diff, lang)
      const model = ollama(modelOption)

      const message = await generateText({ model, prompt })

      if (!message) {
        console.error('Failed to generate a commit message')
        return
      }

      console.log(message.text)
      await commit(message.text)
      console.timeEnd('start')
    })
}

function generateDiffSummary(status: StatusResult): string {
  const summary: string[] = []

  summary.push('Staged files:', ...status.staged)
  if (status.created.length) summary.push('\nCreated files:', ...status.created)
  if (status.deleted.length)
    summary.push('\nDeleted files:', ...status.deleted.map((file) => file))

  return summary.join('\n')
}

function createPrompt(diff: string, lang: string): string {
  return `
    Generate a commit message using the following diff as context. Ensure the message adheres to conventional commit guidelines and includes relevant emojis.

    Example format:
      # initial commit
      🚀 feat: add new feature
      
      Detailed description of the commit.

      - Specific change details
      - Additional relevant information
      # end of commit message

    Diff: ${diff}

    ${lang ? `Please write the commit message in ${lang}.` : ''}

    return only the commit message and nothing else.
  `
}
