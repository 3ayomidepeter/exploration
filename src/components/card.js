import React from 'react'
import { MdLocationOn } from 'react-icons/md';


export default function Card(props) {
    return (
        <div className='container'>
            <div className='card-container'>
                <div className='img-container'>
                    <img src={props.datum.imgUrl} alt='japan map' className='card-image' />
                </div>
                <div className='content'>
                    <span className='loca'><MdLocationOn /></span>
                    <span className='country'>{props.datum.location}</span>
                    <span className='map'><a href={props.datum.map}>View on Google Map</a></span>
                    <h1 className='map-loation'>{props.datum.title}</h1>
                    <h3 className='date'>{props.datum.date}</h3>
                    <p className='paragraph'>{props.datum.description}</p>
                </div>

            </div>
        </div>
    )
}
