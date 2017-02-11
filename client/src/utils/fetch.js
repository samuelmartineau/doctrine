export function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    return response.json().then((result) => {
      error.response = result
      throw error
    })
  }
}

export function parseJSON (response) {
  return response.json()
}
