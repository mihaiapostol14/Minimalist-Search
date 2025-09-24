const input = document.getElementById('searchInput')
const button = document.getElementById('searchBtn')

function handleSearch() {
  const query = input.value.trim()
  if (query) {
    console.log('Search query:', query)
  } else {
    console.log('Input is empty')
  }
}

button.addEventListener('click', handleSearch)

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleSearch()
  }
})
