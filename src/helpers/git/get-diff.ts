import { git } from './instance'

export async function getDiff() {
  const diff = await git.diff()
  return diff
}
