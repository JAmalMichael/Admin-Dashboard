import React, {useState, useEffect} from 'react'
import './Styles/news.css'
import CardFilter from './CardFilter';
import NewsPosition from './NewsPosition';

function News() {

    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        try {
            fetch('https://jamalmichael.github.io/api/news.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='card'>
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body pb-0">
        <h5 className="card-title">
            News <span>| {filter} </span>
        </h5>

        <div className="news">
        
        {news &&
            news.length > 0 && 
            news.map(item => <NewsPosition key={item._id} item={item} /> )}
            </div>
        </div>
    </div>
  )
}

export default News