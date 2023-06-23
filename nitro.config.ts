import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  alias: {
    '@': process.cwd(),
  }
});
