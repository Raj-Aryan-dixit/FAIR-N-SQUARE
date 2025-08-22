import { serve } from "inngest/next";
import { inngest } from "../../../lib/inngest/client.js";
import { helloWorld } from "../../../lib/inngest/function.js";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld, // <-- This is where you'll always add all your functions
  ],
});
