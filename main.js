const apiUrl = 'https://res.cloudinary.com/des3si8bs/raw/upload/v1679912721/drinks_y1vudo.json';

let data;
    (async()=>{
        let tempData = await fetch(apiUrl);
        data = await tempData.json();
    
    })();

    function print(){
        console.log(data);
    }
