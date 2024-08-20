import { getState } from './get-state'

export async function hasState(): Promise<boolean> {
  const status = await getState()
  return status.files.length > 0
}
