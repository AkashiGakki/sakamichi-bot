export default defineEventHandler(() => {
  return `
    <h2>Sakamichi Data Info API Serve</h2>
    <ul>
      <li><div>Nogizaka</div></li>
      <ul>
      <li><a href="/api/nogizaka/members">members</a></li>
      </ul>

      <li><div>Kiyakizaka</div></li>
      <ul>
      <li><a href="/api/kiyakizaka/members">members</a></li>
      </ul>

      <li><div>Hinatazaka</div></li>
      <ul>
      <li><a href="/api/hinatazaka/members">members</a></li>
      </ul>

      <li><div>Sakurazaka</div></li>
      <ul>
      <li><a href="/api/sakurazaka/members">members</a></li>
      </ul>
    </ul>
  `
})
