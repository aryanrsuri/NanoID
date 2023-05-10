import { a } from "./a.ts";
export const nid = (s = 21) => {
  const bytes: Uint8Array = crypto.getRandomValues(new Uint8Array(s));
  let id = "";
  while (s--) id += a[bytes[s] & 63];
  return id;
};
