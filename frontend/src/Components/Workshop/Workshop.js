import React from 'react';
import './Workshop.css'; // Import your custom CSS file
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import mapsImage from '../../Assets/map.png';

// Carousel component
const Carousel = ({ images }) => {
    const [current, setCurrent] = React.useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="carousel">
            <button className="left-arrow" onClick={prevSlide}>❮</button>
            <button className="right-arrow" onClick={nextSlide}>❯</button>
            {images.map((img, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && <img src={img} alt={`slide-${index}`} className="carousel-image" />}
                </div>
            ))}
        </div>
    );
};

// Cards component to display previous workshops
const WorkshopCards = () => {
    const workshops = [
        { name: 'Art Workshop', description: 'Exploring Indian traditional art forms.', img: 'https://images.moneycontrol.com/static-mcnews/2024/01/Ghoda-1-580x435.jpg' },
        { name: 'Handicraft Workshop', description: 'Learn the craft of India’s artisans.', img: 'https://img.etimg.com/thumb/msid-92678996,width-640,height-480,imgsize-149298,resizemode-4/indian-traditional-handicrafts.jpg' },
        { name: 'Book Reading', description: 'Sharing stories from Indian authors.', img: 'https://www.easternbooks.co.uk/indian.jpg' },
        { name: 'Dance Workshop', description: 'Experience traditional Indian dance.', img: 'https://media.ipassio.com/media/blog/indian-traditional-dance-forms-that-the-world-looks-up-to/blog_icon/indian-traditional-dance-forms-that-the-world-looks-up-to.webp' },
    ];

    return (
        <div className="workshop-cards">
            {workshops.map((workshop, index) => (
                <div key={index} className="workshop-card">
                    <img src={workshop.img} alt={workshop.name} className="workshop-card-img" />
                    <div className="workshop-card-content">
                        <h3>{workshop.name}</h3>
                        <p>{workshop.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const NextWorkshop = () => {
    return (
        <div className="next-workshop">
            <div className="workshop-info">
                <h2><strong>Upcoming Workshop: Pottery and Clay Art</strong></h2>
                <p><strong>Date:</strong> 15th October, 2024</p>
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Location:</strong> Kala Ghoda, Mumbai</p>
                <p>
                    Join us for an immersive experience with traditional Indian pottery at the historic Kala Ghoda precinct in Mumbai.
                    This workshop will take you through the rich heritage of Indian pottery techniques, including hand-building and wheel-throwing.
                    Our experienced artisans will guide you through the process of creating your own clay art, from shaping and molding to glazing and firing.
                    Whether you're a beginner or have some experience, this workshop offers a unique opportunity to explore and appreciate the artistry of Indian ceramics.
                    All materials will be provided, and you’ll leave with your own handmade pottery piece and a deeper understanding of this ancient craft.
                </p>
            </div>
            <div className="workshop-map">
                <a href="https://www.google.com/maps/dir//Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400001/@18.9298428,72.826559,15.87z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7d1c49f5d2d63:0xea3b16943edca7ce!2m2!1d72.8330849!2d18.9307214?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <img src={mapsImage} alt="Google Maps location" />
                </a>
            </div>
        </div>
    );
};


const Workshop = () => {
    // Replace with actual image paths
    const carouselImages = [
        'https://indiafoundation.in/wp-content/uploads/2016/07/Banner-Image-1.jpg',
        'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/02/08/Pictures/reporter-hindustan-festival-kalaghoda-february-volunteers-aneesha_dc9b1d22-ed68-11e6-b62a-376882c41036.JPG',
        'https://authindia.com/wp-content/uploads/2023/02/Indian-weaver.jpg',
        'https://www.mod.gov.in/sites/default/files/2023-01/Pic%204.JPG',
        'https://thedailyguardian.com/wp-content/uploads/2024/01/2-1-3-scaled.jpg'

    ];

    return (
        <div>
            <Header />
            <div className="workshop-carousel">
                <Carousel images={carouselImages} />
            </div>
            <div className="workshop-mission">
                <h2><strong>Our Mission</strong></h2>
                <p>
                    At <strong>Katha</strong>, our mission is to preserve and promote India’s rich and diverse cultural heritage through engaging and educational workshops. We are dedicated to reviving and celebrating traditional art forms and crafts that have been passed down through generations. By offering a range of workshops that cover various aspects of Indian culture, including art, handicrafts, literature, and dance, we aim to provide a platform where enthusiasts and practitioners can come together to learn, create, and share their passion for these timeless traditions.
                    Our workshops are designed to not only teach the techniques and skills involved but also to immerse participants in the stories and cultural significance behind each craft.
                </p><br /><br /><br /><br />
                <h3><strong>About Our Workshops</strong></h3>
            </div>

            <WorkshopCards />
            <NextWorkshop />
            <Footer />
        </div>
    );
};

export default Workshop;