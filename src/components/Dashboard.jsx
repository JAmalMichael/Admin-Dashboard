import React, {useState, useEffect} from 'react'
import './Styles/dashboard.css'
import Cards from './Cards';
import Report from './Report';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News';
import Footer from './Footer';

function Dashboard() {
        const [cards, setCards] = useState({});

        const fetchData = () => {
            fetch('https://jamalmichael.github.io/api/cards.json')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
            .catch(e => console.log(e.message));
        }

        useEffect(() => {
            fetchData();
        }, [])

  return (
    <section className='dashboard section'>
     <div className='row'>
            <div className="col-lg-8">
                <div className='row'>
                    {
                        cards && cards.length>0 &&
                        cards.map(card => <Cards key={card._id} card={card}/>)
                    }
                    <div className='col-12'>
                        <Report />
                    </div>
                    <div className='col-12'>
                    <RecentSales />
                    </div>
                    <div className='col-12'>
                        <TopSelling />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                    <WebTraffic />
                    <News />
            </div>
     </div>
     <Footer className=" sm:ml-0"/>
    </section>

  )
}

export default Dashboard