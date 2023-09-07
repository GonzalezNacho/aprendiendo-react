import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect (() => {
        if (!fact) return
        
        const threeFirtsWord = fact.split(' ', 3).join(' ')
        
        fetch(`https://cataas.com/cat/says/${threeFirtsWord}?json=true`)
        .then(res => res.json())
        .then ( response => {
            const { url } = response
            setImageUrl(url)
        })

    },[fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` } 
}