import { cpSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { homedir } from 'os'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SKILL_NAME = 'pitch-deck'
const SKILL_SRC = resolve(__dirname, '..', 'skill')

export function globalSkillsDir() {
  return join(homedir(), '.claude', 'skills')
}

export function localSkillsDir(cwd = process.cwd()) {
  return join(cwd, '.claude', 'skills')
}

export function installSkill(targetDir) {
  const dest = join(targetDir, SKILL_NAME)
  mkdirSync(dest, { recursive: true })
  cpSync(SKILL_SRC, dest, { recursive: true, force: true })
  return dest
}

export function isInstalled(targetDir) {
  return existsSync(join(targetDir, SKILL_NAME, 'SKILL.md'))
}

export function detectProjectDir() {
  // Walk up from cwd looking for a .claude/ or package.json to identify project root
  let dir = process.cwd()
  while (true) {
    if (existsSync(join(dir, '.claude')) || existsSync(join(dir, 'package.json'))) {
      return dir
    }
    const parent = resolve(dir, '..')
    if (parent === dir) return process.cwd()
    dir = parent
  }
}
