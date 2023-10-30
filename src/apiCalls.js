export const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(!response.ok) {
        throw new Error("Sorry, we're experiencing server problems, please try again later.")
      }
      return response.json()
    })
}