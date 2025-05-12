addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const response = await fetch(request)
    return response
  } catch (e) {
    return new Response('Error: ' + e.message, { status: 500 })
  }
}