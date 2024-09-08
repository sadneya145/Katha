import React, { useState, useEffect } from 'react';
import './SubBoxes.css'; // Import your custom CSS file
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import sub1 from '../../Assets/sub_box1.webp';
import sub2 from '../../Assets/sub_box2.webp';
import sub3 from '../../Assets/sub_box3.webp';
import sub4 from '../../Assets/sub_box4.webp';

// Carousel component for displaying subscription box images with auto-slide
const Carousel = () => {
    const images = [sub2, sub4, sub3, sub1];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="carousel">
            <button className="left-arrow" onClick={prevSlide}>❮</button>
            <button className="right-arrow" onClick={nextSlide}>❯</button>
            {images.map((img, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && <img src={img} alt={`box-${index}`} className="carousel-image" />}
                </div>
            ))}
        </div>
    );
};

// New section explaining what a subscription box is
const SubscriptionBoxExplanation = () => {
    return (
        <div className="subscription-box-explanation">
            <h2>What is a Subscription Box?</h2>
            <p>
                A subscription box is a curated package of products that is delivered to your doorstep on a regular basis.
                Each box contains a selection of items centered around a specific theme or interest.
                Subscription boxes offer a convenient way to discover new products and enjoy a personalized experience.
                With Katha's subscription boxes, you can explore India's diverse culture and heritage through hand-picked items, including traditional snacks, books, accessories, and skincare products.
                It's like receiving a little piece of India in a box every month!
            </p>
        </div>
    );
};

// New section explaining the company's motive
const CompanyMotive = () => {
    return (
        <div className="company-motive">
            <h2>Our Mission</h2>
            <p>
                At <strong>Katha</strong>, we believe that India's rich cultural heritage deserves to be celebrated and shared with the world.
                Our subscription boxes are curated to offer you a piece of India's traditions, from hand-picked books to natural spices
                and skincare products. We aim to promote and preserve India's diverse culture by providing an authentic and immersive
                experience in every box. Join us on this journey and discover the essence of India, one box at a time.
            </p>
        </div>
    );
};

// Cards component for displaying different types of subscription boxes
const Cards = () => {
    const boxes = [
        { name: 'Food Box', description: 'A curated selection of India’s finest snacks.', img: 'https://m.media-amazon.com/images/I/81ZX-dvnU1L.jpg' },
        { name: 'Books Box', description: 'Discover new stories with hand-picked books.', img: 'https://thebigbookbox.com/wp-content/uploads/2024/01/Thebigbookbox_2.jpg' },
        { name: 'Accessories Box', description: 'Traditional and trendy accessories.', img: 'https://www.thegivingtree.in/wp-content/uploads/2022/11/India-in-a-box-Classic-3.png' },
        { name: 'Skincare Box', description: 'Natural skincare products from Indian brands.', img: 'https://m.media-amazon.com/images/I/916tlsQN9hL._AC_UF1000,1000_QL80_.jpg' },
        { name: 'Spices Box', description: 'Natural spices from all over India.', img: 'https://i.etsystatic.com/7169689/r/il/a5b8c0/3613673039/il_570xN.3613673039_ruen.jpg' },
        { name: 'Mixed Box- Small', description: 'A small delightful mix of all categories.', img: sub3 },
        { name: 'Mixed Box- Medium', description: 'A medium sized delightful mix of all categories.', img: sub1 },
        { name: 'Mixed Box- Large', description: 'A large delightful mix of all categories.', img: sub2 },
    ];

    return (
        <div className="cards">
            {boxes.map((box, index) => (
                <div key={index} className="card">
                    <img src={box.img} alt={box.name} className="card-img" />
                    <div className="card-content">
                        <h3>{box.name}</h3>
                        <p>{box.description}</p>
                        <button>Order now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SubBoxes = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <Header />
            <Carousel />
            <SubscriptionBoxExplanation /> {/* New section added here */}
            <CompanyMotive />
            <Cards />
            <Footer />
        </div>
    );
};

export default SubBoxes;