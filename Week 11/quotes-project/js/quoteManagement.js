//CRUD on quotes
import { getItems, deleteItem } from "./myLib/fetchUtils.js"
const quoteURL = `${import.meta.env.VITE_APP_URL}/quotes`
//GET Quotes
async function loadQuotes() {
  try {
    const quotes = await getItems(quoteURL)
    console.log(quotes)
    return quotes
  } catch (error) {
    alert(`Quote: ${error}`)
  }
}
//Create Quote
async function addQuote(item) {
  try {
    const addedQuote = await addItem(quoteURL, item)
    return addedQuote
  } catch (error) {
    alert(`Quote: ${error}`)
  }
}
//Edit Quote
//Delete Quote
async function deleteQuote(id) {
  try{
    const removeId = await deleteItem(quoteURL, id)
    return removeId
  } catch(error){
    alert(`Quote: ${error}`)
  }
}
  

export { loadQuotes, addQuote, deleteQuote }