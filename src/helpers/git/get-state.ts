import { git } from './instance'

export async function getState() {
  const state = git.status()

  return state
}
