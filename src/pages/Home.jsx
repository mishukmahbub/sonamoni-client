import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';
import FAQ from '../components/FAQ';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    // racing cars
    const [racingCars, setRacingCars] = useState([]);
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/getToysBySubCategory/racing-cars`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRacingCars(data);
            });
    }, []);
    // city cars
    const [cityCars, setCityCars] = useState([]);
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/getToysBySubCategory/city-cars`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCityCars(data);
            });
    }, []);
    // off road cars
    const [offRoadCars, setOffRoadCars] = useState([]);
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/getToysBySubCategory/off-road-cars`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOffRoadCars(data);
            });
    }, []);
    return (
        <>
            {/* Banner */}
            <div className="flex flex-col gap-8 md:flex-row-reverse justify-center items-center bg-primary rounded-md my-10 py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
                        Discover Exciting Toy Cars
                    </h2>
                    <p className="mt-2 text-base leading-6 sm:text-lg sm:leading-7">
                        Unleash Your Child's Imagination with our Wide Range of Toy Cars
                    </p>
                </div>
                <div className="flex-1">
                    <img src="https://images.pexels.com/photos/163768/car-toy-childhood-child-163768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="toy-cars" className="h-96 w-full rounded-md" />
                </div>
            </div>

            {/* gallery */}
            <h2 className='font-extrabold text-4xl text-center my-10'>Gallery</h2>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/132539/pexels-photo-132539.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/68256/pexels-photo-68256.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" />
                </div>
            </div>

            {/* car detail */}
            <h2 className='font-extrabold text-4xl text-center my-10'>Shop by Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Racing Cars</Tab>
                    <Tab>City Cars</Tab>
                    <Tab>Off-Road Cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            racingCars.map(car => <CarCard
                                key={car._id}
                                car={car}
                            ></CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            cityCars.map(car => <CarCard
                                key={car._id}
                                car={car}
                            ></CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            offRoadCars.map(car => <CarCard
                                key={car._id}
                                car={car}
                            ></CarCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>

            {/* blog */}
            <div>
                <h2 className='font-extrabold text-4xl text-center my-10'>Our Blog</h2>
                <div className="hero bg-base-200" style={{ backgroundImage: `url("https://images.pexels.com/photos/68256/pexels-photo-68256.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hey there</h1>
                            <p className="py-6">Want to learn about all the toy cars in our website? Browse our blog now!</p>
                            <Link to='/blog'><button className="btn btn-primary">Go to Blog</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ */}
            <h2 className='font-extrabold text-4xl text-center my-10'>FAQ</h2>
            <div className='my-10'>
                <FAQ></FAQ>
            </div>
        </>
    );
};

export default Home;