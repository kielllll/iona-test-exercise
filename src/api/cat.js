import axios from 'axios'
import { resolve } from '../utils/resolve'

// TODO: Update as env var if necessary
const API_KEY = '8859bd87-8011-4c6e-8c6c-1a79723ef5e7'

export const listCatBreed = async () =>
  resolve(
    axios
      .get(`https://api.thecatapi.com/v1/breeds?api_key${API_KEY}`)
      .then((res) => res.data)
  )

export const listCatsByBreed = async (breedId, page = 1) =>
  resolve(
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?page=${page}&limit=10&breed_id=${breedId}&api_key${API_KEY}`
      )
      .then((res) => res.data)
  )

export const getCatDetails = async (image) =>
  resolve(
    axios
      .get(
        `https://api.thecatapi.com/v1/images/${image}?&api_key${API_KEY}`
      )
      .then((res) => res.data)
  )
