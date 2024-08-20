import { git } from './instance'

export async function hasState(): Promise<boolean> {
  const status = await git.status()
  return status.files.length > 0
}
