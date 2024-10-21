export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.REACT_APP_API_URL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
