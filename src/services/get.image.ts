import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();

const getImage = async(breed: string) : Promise<string>=> {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${breed}&page=1&client_id=${process.env.UNSPLASH_KEY}`);
        const number: number = Math.floor(Math.random()*10);
        const image: string = response.data.results[number]?.urls.full;
        console.log(response.data.results[number]);
        if (!image){
            return 'https://media.istockphoto.com/id/513228693/nl/foto/funny-dog-face.jpg?s=612x612&w=0&k=20&c=MaQmRS5XU3Yv1l2KE-XXtM90q3WPj_2edYK1GTqJO_o='
        } return image;
    
}

export {getImage};