# SAKAMICHI-BOT

> ☂️ Sakamichi Group Members Data Info Serve.

## `Nogizaka46`/`Kiyakizaka46`/`Hinatazaka46`/`Sakurazaka46`

```ts
fetch('api/nogizaka/members')

fetch('api/nogizaka/member/:unique')

fetch('api/nogizaka/member', {
  unique: 'id' | 'name' | 'nickname' | 'romanized' | 'kana',
  filters?: keyof Member[]
})
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
