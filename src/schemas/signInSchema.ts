import { z } from "zod";

export const signInSchema = z.object({
  // identifier is a better word than email, used more in production. That's it
  identifier: z.string(),
  password: z.string(),
});
