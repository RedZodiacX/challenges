export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hSye4iD9woRDAkZ6oUmkTWjo1O26hL83&q=${encodeURIComponent(category)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));

    return gifs;
};
