const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

export const getImageUrlWhitTrheeFirstFacts = async ({ fact }) => {
    const threeFirtsWord = fact.split(' ', 3).join(' ')
        
    const res = await fetch(`https://cataas.com/cat/says/${threeFirtsWord}?json=true`)
    const response = await res.json()
    const { url } = response
    return url
}