import React from 'react';
import './sales.css';

const Sales = () => {
    const resources = [
        { name: 'AUDI Q5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisCTsfSdITzf5nUooS_23fnBGFQRRtZMu1A&s',link:'https://www.cardekho.com/searchresult?q=BENZ' },
        { name: 'VOLVO XC90', imageUrl: 'https://getwallpapers.com/wallpaper/full/e/3/a/1370956-skyline-car-wallpaper-1920x1200-picture.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ' },
        {name: 'BMW X5', imageUrl: 'https://wallpaperset.com/w/full/b/d/7/75761.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ'},
        { name: 'SAFARI', imageUrl: 'https://cdn.wallpapersafari.com/89/22/WjHOZU.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ' },
        { name: 'ROLLS-ROYCE GHOST', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/5/51/641/mansory-rolls-royce-wraith-4k-hd-for-pc-wallpaper-preview.jpg' ,link:'https://www.cardekho.com/searchresult?q=BENZ'},
        { name: 'ASTON MARTIN', imageUrl: 'https://million-wallpapers.ru/wallpapers/1/55/446833406137138/exhibition-model-of-a-nissan-car.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ' },
        { name: 'BMW X7', imageUrl: 'https://www.teahub.io/photos/full/37-370720_black-wallpaper-bmw-car.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ'},
        { name: 'FERRARI', imageUrl: 'https://www.teahub.io/photos/full/37-370420_bmw-i8-black-car-wallpaper-data-src-bmw.jpg',link:'https://www.cardekho.com/searchresult?q=BENZ' },
        { name: 'ROLLS-ROYCE CULLINAN', imageUrl: 'https://i.pinimg.com/736x/30/34/99/303499cf93d5059f5c3d6fc48d84dd0a.jpg' ,link:'https://www.cardekho.com/searchresult?q=BENZ'},
    ];
    return (
        <div className="health-resources">
            <h1></h1>
            <div className="resources-list">
                {resources.map((resource, index) => (
                    <div key={index} className="resource-card">
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <img src={resource.imageUrl} alt={resource.name} className="resource-image" />
                            <h2>{resource.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;