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

## Process Resolve

### `nogi`

- [x] 1. fetch office website data and save to JSON
- [ ] 2. data cleaning -> split && remove redundant fields
- [ ] 3. collect && fetch wiki site and merge data
- [ ] 4. nitro cache data
- [ ] 5. design API

### `kiyaki` / `hinata` / `sakura`

- [ ] 1. collect member's name map to wiki URL with JSON
- [ ] 2. fetch && data clearing
- [ ] 3. nitor cache data
- [ ] 4. continue to use API design

### Info Field Interface

```ts
interface Member {
  // preset
  code: string
  name: string
  romanized: string
  kana?: string
  cate: string
  img?: string
  birthday: string
  constellation?: string
  blood?: string

  // customized
  id: string
  nickname: string
  zh_name: string
  age: number
  height: number
  active: boolean
  citizenship: string
  birthplace: string
}
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
