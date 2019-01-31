import axios from "axios"

export const GET_DATA_SWAPI = "GET_DATA_SWAPI"
export const fetchDataStarWars = () => {
  return {
    type: GET_DATA_SWAPI,
    payload: getDataStarWarsAll()
  }
}

const getDataStarWarsAll = async () => {
  const dataSwapiOne = await getDataSwapiOne()
  const dataSwapiTwo = await getDataSwapiTwo(dataSwapiOne)
  const dataSwapiThree = await getDataSwapiThree(dataSwapiTwo)
  return dataSwapiThree
}

const getDataSwapiOne = () => {
  return axios
    .get("https://swapi.co/api/people/1/")
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}

const getDataSwapiTwo = data => {
  return axios
    .get("https://swapi.co/api/people/2/")
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}

const getDataSwapiThree = data => {
  return axios
    .get("https://swapi.co/api/people/3/")
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}
