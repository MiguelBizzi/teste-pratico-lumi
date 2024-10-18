export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.REACT_APP_API_URL
  console.log('baseUrl', baseUrl)

  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
