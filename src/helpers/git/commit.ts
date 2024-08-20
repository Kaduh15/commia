import { git } from './instance'

export async function commit(message: string): Promise<void> {
  try {
    await git.commit(message)
  } catch (e) {
    console.log('Failed to commit')
    console.error(e)
  }
}
