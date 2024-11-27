
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext'; 
import './rental.css';

const servicesData=[
    {
        title: 'BMW X5',
        icon: faCar,
        description: 'Maintain your car and increase its performance with regular servicing from Bosch Car Service.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'BMW X6',
        icon: faCar,
        description: 'When you feel your car is overused, or you are planning a long road trip, our stem-to-stern check points will ensure to identify any damage or faults.',
        price: '₹50000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'BMW X7',
        icon: faCar,
        description: 'Bosch Car Service recommends giving your vehicle a thorough vehicle check-up at the changing of the seasons.',
        price: '₹50000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'AUDI Q5',
        icon: faCar,
        description: 'A simple battery check from Bosch Car Service will help you avoid the inconvenience of a dead battery.',
        price: '₹5000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'AUDI Q6',
        icon: faCar,
        description: 'A simple battery check from Bosch Car Service will help you avoid the inconvenience of a dead battery.',
        price: '₹5000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'AUDI Q7',
        icon: faCar,
        description: 'Bosch Car Service is able to provide the full spectrum of electrical and electronic service, from diagnosing and repairing problems with the computerised system on your vehicle.',
        price: '₹5000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ROLLS-ROYCE GHOST',
        icon: faCar,
        description: 'A computerized car diagnostic check from Bosch Car Service will give you a true picture of how your vehicle is running.',
        price: '₹100000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ROLLS-ROYCE CULLINAM',
        icon: faCar,
        description: 'An oil and filter change might seem like a routine service, but requesting it from Bosch Car Service has some major advantages.',
        price: '₹100000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ROLLS-ROYCE PHANTOM ',
        icon: faCar,
        description: 'Brake repair and maintenance at a Bosch Car Service workshop is guaranteed to ensure safety.',
        price: '₹100000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ROLLS-ROYCE SPECTRE',
        icon: faCar,
        description: 'You can trust the specialists at Bosch Car Service to diagnose and repair problems with any electronic safety system in your vehicle.',
        price: '₹100000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ROMA',
        icon: faCar,
        description: 'You can trust the specialists at Bosch Car Service to diagnose and repair problems with any electronic safety system in your vehicle.',
        price: '₹5000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'ADVENTURE PLUS',
        icon: faCar,
        description: 'Trust us with your car repairs or servicing and enjoy the benefits of having a world-class service provider.',
        price: '₹1500',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'MODEL X',
        icon: faCar,
        description: 'When you ask Bosch Car Service to replace your tyres, we provide a lot of extra value.',
        price: '₹20000',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'GLA SUV',
        icon:faCar,
        description: 'The Bosch Car Service experts will be pleased to service your car air conditioning system to ensure a pleasant temperature while you are on the move.',
        price: '₹2500',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    
 
];

const Services = () => {
   
    const { addToCart } = useCart();
    const handleAddToCart = (service) => {
        
        addToCart(service);
    };

    return (
        <div className="repair-container">
            <header className="repair-header">
                <h1 className='heading'>Car Rental</h1>
            </header>
            <div className="car"><h3><b>BMW</b></h3></div>
          
            <section className="repair-content">
                {servicesData.slice(0,3).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>AUDI </b></h3></div>
            <section className="repair-content">
                {servicesData.slice(3,6).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() =>handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>ROLLS-ROYCE</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(6,8).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>SKODA</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(8,10).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>FERRARI</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(10,11).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>SAFARI</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(11,12).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>TESLA</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(12,13).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
            <div className="car"><h3><b>BENZ</b></h3></div>
            <section className="repair-content">
                {servicesData.slice(13,14).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart (service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
           
            {/* Repeat similar sections for other service categories */}
        </div>
    );
}

export default Services;
