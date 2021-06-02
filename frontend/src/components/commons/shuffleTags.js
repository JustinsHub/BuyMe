const tags = ["mediterranean", "italian", "european", "greek"] //put in an array and randomize to come out as string in commons


const shuffleTags = (tags) => {
    const sortTags = tags.sort(() => Math.random() - 0.5)
    return sortTags.shift()
}

const ourRandomTags = shuffleTags(tags)

export default ourRandomTags