// import axios
import axios from "axios";

// function to fetch randomCatImage data
export async function fetchRandomCatImage() {
    try {
        // make a GET request to catAPI
        const response = await
            axios.get('https://cataas.com/cat?json=true');

        // check if the HTTP request was successful
        if (response.status !== 200) {
            throw new Error("Network response was not ok");
        }

        // Access the response data
        const catData = response.data;
        const catImageContainer = document.getElementById("cat-image-container");
        if (catData._id) {
            const catImage = document.createElement("img");
            catImage.src = `https://cataas.com/cat/${catData._id}`;
            catImage.alt = 'Random Cat';
            catImageContainer.appendChild(catImage);
        }

    } catch (error) {
        console.error("Axios error:", error);
        throw error; // rethrow the error for the caller to handle
    }
}