import type { Config } from 'jest'
import defaults from './jest.config'

const config: Config = {
  testMatch: ['**/*.spec.ts'],
  transform: defaults.transform
}

export default config
