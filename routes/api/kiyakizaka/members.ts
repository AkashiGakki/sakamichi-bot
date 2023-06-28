import { kMember } from '@/lib/kiyaki'

export default eventHandler(async () => {
  const store = await useStorage('kiyaki')
  await store.setItem('techi', { techi: 'Hirate Yurina' })

  return kMember()
})
