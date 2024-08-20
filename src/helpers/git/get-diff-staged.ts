import { git } from './instance'

export async function getDiffStaged() {
  const diff = await git.diff(['--staged'])
  return diff
}
