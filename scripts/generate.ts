import { fromVault } from 'fumadocs-obsidian';

const OBSIDIAN_PUBLISH_DIR = process.env.OBSIDIAN_PUBLISH_DIR;

if (!OBSIDIAN_PUBLISH_DIR) {
  throw new Error("OBSIDIAN_PUBLISH_DIR is not set");
}

await fromVault({
  dir: OBSIDIAN_PUBLISH_DIR,
  out: {
    contentDir: "content",
    publicDir: "public",
  },
});

