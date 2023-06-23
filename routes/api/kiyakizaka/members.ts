import { kMember } from '@/utils/kiyaki'

export default eventHandler(async () => {
  const store = await useStorage('kiyaki')
  await store.setItem('techi', { techi: 'Hirate Yurina' })

  return kMember()
})
