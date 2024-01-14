const API_KEY = 'eNFWsbnnPg5Q3OzPhunGcfHuNsFuXE26VPN8HaPC';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
    try{
        const urlToRequest= `${API_URL}?api_key=${API_KEY}${
            typeof urlParams !== 'undefined' && urlParams?.length > 0 
            ? urlParams 
            : ''}`
        
        console.log("urlToRequest: "+urlToRequest);

        const response= await fetch(
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && urlParams?.length > 0 
                ? urlParams 
                : ''}`,
        );

        const data = await response.json();
        return Promise.resolve(data);
    }catch(error){
        return Promise.reject(error);
    }
}