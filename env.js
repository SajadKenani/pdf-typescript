import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
export const env = createEnv({
    server: {
        EMAIL_SERVER: z.string().min(1),
        EMAIL_FROM: z.string().min(1),
        EMAIL_PASSWORD: z.string().min(1),
        VERCEL_ENV: z.string().optional(),
    },
    clientPrefix: "NEXT_PUBLIC_",
    client: {},
    runtimeEnv: {
        EMAIL_SERVER: process.env.EMAIL_SERVER,
        EMAIL_FROM: process.env.EMAIL_FROM,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
        VERCEL_ENV: process.env.VERCEL_ENV,
    },
    skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === "lint",
});
