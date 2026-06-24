#!/usr/bin/env node
import { installSkill, globalSkillsDir, localSkillsDir, isInstalled, detectProjectDir } from '../lib/install.js'
import { existsSync } from 'fs'
import { join } from 'path'

const args = process.argv.slice(2)
const isPostinstall = args.includes('--postinstall')
const isLocal = args.includes('--local') || args.includes('-l')
const isGlobal = args.includes('--global') || args.includes('-g')
const isHelp = args.includes('--help') || args.includes('-h')

if (isHelp) {
  console.log(`
  @utopia-studio/pitch-deck — install the /pitch-deck skill into Claude Code

  Usage:
    npx @utopia-studio/pitch-deck            Install globally (~/.claude/skills/)
    npx @utopia-studio/pitch-deck --local    Install into .claude/skills/ in this project
    npx @utopia-studio/pitch-deck --global   Install globally (default)

  After installing, open any Claude Code session and type /pitch-deck to start.
`)
  process.exit(0)
}

// postinstall: only install locally if .claude/ already exists in project root
// (avoids polluting random node_modules installs)
if (isPostinstall) {
  const projectDir = detectProjectDir()
  const localDir = localSkillsDir(projectDir)
  const hasClaudeDir = existsSync(join(projectDir, '.claude'))
  if (hasClaudeDir) {
    const dest = installSkill(localDir)
    console.log(`  ✓ /pitch-deck skill installed → ${dest}`)
    console.log(`    Open Claude Code and type /pitch-deck to start.`)
  }
  process.exit(0)
}

const targetDir = isLocal ? localSkillsDir(detectProjectDir()) : globalSkillsDir()

try {
  const dest = installSkill(targetDir)
  console.log(`\n  ✓ /pitch-deck skill installed`)
  console.log(`    Location: ${dest}`)
  console.log(`\n  Open Claude Code in any project and type:\n\n    /pitch-deck\n`)
} catch (err) {
  console.error(`\n  ✗ Install failed: ${err.message}`)
  console.error(`    Try running with elevated permissions or use --local\n`)
  process.exit(1)
}
