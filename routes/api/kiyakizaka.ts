export default eventHandler(async () => {
  const store = await useStorage('kiyaki')
  await store.setItem('techi', { techi: 'Hirate Yurina' })

  const techi = await store.getItem('techi')
  console.log('techi:', techi)

  return {
    'kiyakizaka': true,
    techi
  }
})
