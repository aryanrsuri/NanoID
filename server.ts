import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { nid } from "./nid.ts";

const handler = async (_request: Request): Promise<Response> => {
  const nanoID = nid();
  const jsonnid = JSON.stringify(nanoID);
  console.log(jsonnid);
  return new Response(jsonnid, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);
