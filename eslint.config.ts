import { defineConfig } from "eslint/config"

import { baseConfig, restrictEnvAccess } from "@newyolk/eslint-config/base"
import { reactConfig } from "@newyolk/eslint-config/react"

export default defineConfig({ ignores: ["dist/**"] }, baseConfig, reactConfig, restrictEnvAccess)
