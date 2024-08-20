import { git } from './instance'

export async function isRepositoryGit(): Promise<boolean> {
  return git.checkIsRepo()
}
