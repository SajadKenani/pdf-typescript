"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
var _envCore = require("@t3-oss/env-core");
var _zod = require("zod");
const env = exports.env = (0, _envCore.createEnv)({
  server: {
    EMAIL_SERVER: _zod.z.string().min(1),
    EMAIL_FROM: _zod.z.string().min(1),
    EMAIL_PASSWORD: _zod.z.string().min(1),
    VERCEL_ENV: _zod.z.string().optional()
  },
  clientPrefix: "NEXT_PUBLIC_",
  client: {},
  runtimeEnv: {
    EMAIL_SERVER: process.env.EMAIL_SERVER,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    VERCEL_ENV: process.env.VERCEL_ENV
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === "lint"
});