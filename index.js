function search() {
    let searchValue = document.getElementById("search").value;
    let api_key = "mMxdX7EPsGLOBgKNpMcCvxbZTrd575RY";
    document.getElementById("container").innerHTML = "";

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchValue}&limit=5`)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            try {
                for (let i = 0; i < json.data.length; i++) {
                    let url = json.data[i].images.original.url;
                    document.getElementById("container").innerHTML += `<img src="${url}">`;
                }
                if (!json.data.length) {
                    throw new Error("Задан пустой запрос");
                }
            } catch (error) {
                alert(error.message);
            }
        })

    // .catch(err => console.log(err));
}