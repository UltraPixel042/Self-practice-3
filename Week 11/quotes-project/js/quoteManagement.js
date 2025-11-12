//CRUD on quotes
import { getItems } from "./myLib/fetchUtils.js"
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
async function deleteQuote() {
  try{
    const removeId = deleteItem(quoteURL, id)
    return removeId
  } catch(error){
    alert(`Quote: ${error}`)
  }
}
//Create Quote
//Edit Quote
//Delete Quote

export { loadQuotes, deleteQuote }