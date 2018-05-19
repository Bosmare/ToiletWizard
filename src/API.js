import 'isomorphic-fetch'

const statusHelper = response => (
  response.status >= 200 && response.status < 300
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText))
)

const logAndReturn = data => {
  console.log(data)
  return data
}

export const getAllToilets = () => {
  fetch('https://toilets.freska.io/toilets')
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(logAndReturn)
}