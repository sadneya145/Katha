// touristData.js
export const touristData = [
    {
        id: 'MH',
        name: 'Maharashtra',
        latLng: [19.7515, 75.7139],
        touristSpots: [
            { 
                name: 'Ajanta Caves', 
                latLng: [20.5519, 75.7033], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Ajanta Caves are famous for their ancient Buddhist rock-cut temples and monasteries.',
                link: 'https://en.wikipedia.org/wiki/Ajanta_Caves'
            },
            { 
                name: 'Ellora Caves', 
                latLng: [20.0269, 75.1793], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Ellora Caves are known for their remarkable cave temples carved out of rock.',
                link: 'https://en.wikipedia.org/wiki/Ellora_Caves'
            },
            { 
                name: 'Sinhagad Fort', 
                latLng: [18.3669, 73.7558], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Sinhagad Fort is a historic fort offering panoramic views and a rich history.',
                link: 'https://en.wikipedia.org/wiki/Sinhagad'
            },
            { 
                name: 'Shirdi Temple', 
                latLng: [19.7667, 74.4774], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Shirdi Temple is dedicated to Sai Baba, a revered spiritual leader.',
                link: 'https://en.wikipedia.org/wiki/Shirdi'
            },
            { 
                name: 'Elephanta Caves', 
                latLng: [18.9608, 72.8838], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Elephanta Caves are known for their Hindu and Buddhist rock-cut sculptures.',
                link: 'https://en.wikipedia.org/wiki/Elephanta_Caves'
            }
            , // Additional spots
            { 
                name: 'Gateway of India', 
                latLng: [18.9220, 72.8347], 
                iconUrl: 'https://img.icons8.com/?size=100&id=48930&format=png&color=000000',
                info: 'The Gateway of India is a historic monument in Mumbai, built to commemorate the visit of King George V and Queen Mary.',
                link: 'https://en.wikipedia.org/wiki/Gateway_of_India'
            },
            { 
                name: 'Haji Ali Dargah', 
                latLng: [18.9982, 72.8347], 
                iconUrl: 'https://img.icons8.com/?size=100&id=47035&format=png&color=000000',
                info: 'Haji Ali Dargah is a mosque and dargah (tomb) situated on an islet off the coast of Mumbai.',
                link: 'https://en.wikipedia.org/wiki/Haji_Ali_Dargah'
            },
            { 
                name: 'Marine Drive', 
                latLng: [18.9366, 72.8199], 
                iconUrl: 'https://img.icons8.com/?size=100&id=51135&format=png&color=000000',
                info: 'Marine Drive is a 3.6 km long boulevard in South Mumbai, known for its scenic view of the Arabian Sea.',
                link: 'https://en.wikipedia.org/wiki/Marine_Drive'
            },
            { 
                name: 'Raja Dinkar Kelkar Museum', 
                latLng: [18.5179, 73.8563], 
                iconUrl: 'https://img.icons8.com/?size=100&id=47938&format=png&color=000000',
                info: 'The Raja Dinkar Kelkar Museum in Pune showcases a collection of artifacts from various periods of Indian history.',
                link: 'https://en.wikipedia.org/wiki/Raja_Dinkar_Kelkar_Museum'
            },
            { 
                name: 'Lonavala', 
                latLng: [18.7511, 73.4072], 
                iconUrl: 'https://img.icons8.com/?size=100&id=50533&format=png&color=000000',
                info: 'Lonavala is a popular hill station known for its lush green landscapes, waterfalls, and pleasant weather.',
                link: 'https://en.wikipedia.org/wiki/Lonavala'
            }
        ],
        details: {
            location: 'Western India',
            language: 'Marathi, Hindi, English',
            festival: 'Ganesh Chaturthi',
            famousLocation: 'Shirdi Temple',
            funFact: 'Maharashtra is the wealthiest state in India.',
            link: 'https://en.wikipedia.org/wiki/Maharashtra',
            
        },
    },
    {
        id: 'UK',
        name: 'Uttarakhand',
        latLng: [30.0668, 79.0193],
        touristSpots: [
            { 
                name: 'Haridwar', 
                latLng: [29.9554, 78.1642], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Haridwar is a sacred city on the banks of the Ganges known for its ghats.',
                link: 'https://en.wikipedia.org/wiki/Haridwar'
            },
            { 
                name: 'Rishikesh', 
                latLng: [30.0869, 78.2676], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Rishikesh is famous for its yoga centers and the iconic Laxman Jhula bridge.',
                link: 'https://en.wikipedia.org/wiki/Rishikesh'
            },
            { 
                name: 'Nainital', 
                latLng: [29.3796, 79.4549], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Nainital is a picturesque hill station known for its beautiful lake.',
                link: 'https://en.wikipedia.org/wiki/Nainital'
            },
            { 
                name: 'Mussoorie', 
                latLng: [30.4593, 78.0678], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Mussoorie, known as the Queen of the Hills, offers stunning views and colonial architecture.',
                link: 'https://en.wikipedia.org/wiki/Mussoorie'
            }
        ],
        details: {
            location: 'Northern India',
            language: 'Hindi, Garhwali, Kumaoni',
            festival: 'Kumbh Mela',
            famousLocation: 'Haridwar',
            funFact: 'Uttarakhand is known for its spiritual significance and natural beauty.',
            link: 'https://en.wikipedia.org/wiki/Uttarakhand',
        },
    },
    {
        id: 'GJ',
        name: 'Gujarat',
        latLng: [22.2587, 71.1924],
        touristSpots: [
            { 
                name: 'Gir National Park', 
                latLng: [21.1516, 70.2500], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Gir National Park is famous for its Asiatic lions and diverse wildlife.',
                link: 'https://en.wikipedia.org/wiki/Gir_National_Park'
            },
            { 
                name: 'Somnath Temple', 
                latLng: [20.8883, 70.4004], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Somnath Temple is an ancient and revered Hindu temple dedicated to Lord Shiva.',
                link: 'https://en.wikipedia.org/wiki/Somnath_Temple'
            },
            { 
                name: 'Rani ki Vav', 
                latLng: [23.5731, 72.2083], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Rani ki Vav is a stepwell with exquisite carvings, reflecting medieval architecture.',
                link: 'https://en.wikipedia.org/wiki/Rani_ki_Vav'
            },
            { 
                name: 'Gira Falls', 
                latLng: [21.0180, 73.0607], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Gira Falls is a scenic waterfall located amidst dense forest.',
                link: 'https://en.wikipedia.org/wiki/Gira_Falls'
            }
        ],
        details: {
            location: 'Western India',
            language: 'Gujarati, Hindi, English',
            festival: 'Navratri',
            famousLocation: 'Gir National Park',
            funFact: 'Gujarat is known for its diverse culture and significant historical landmarks.',
            link: 'https://en.wikipedia.org/wiki/Gujarat',
        },
    },
    {
        id: 'TG',
        name: 'Telangana',
        latLng: [17.2784, 78.4784],
        touristSpots: [
            { 
                name: 'Charminar', 
                latLng: [17.3616, 78.4747], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Charminar is a historic monument and mosque, a symbol of Hyderabad.',
                link: 'https://en.wikipedia.org/wiki/Charminar'
            },
            { 
                name: 'Ramoji Film City', 
                latLng: [17.2376, 78.7084], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Ramoji Film City is one of the largest film cities in the world with various attractions.',
                link: 'https://en.wikipedia.org/wiki/Ramoji_Film_City'
            },
            { 
                name: 'Golconda Fort', 
                latLng: [17.4036, 77.0319], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Golconda Fort is known for its grand architecture and historical significance.',
                link: 'https://en.wikipedia.org/wiki/Golconda_Fort'
            },
            { 
                name: 'Warangal Fort', 
                latLng: [17.9784, 79.6144], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Warangal Fort is an ancient fortification known for its intricate architecture and history.',
                link: 'https://en.wikipedia.org/wiki/Warangal_Fort'
            }
        ],
        details: {
            location: 'Southern India',
            language: 'Telugu, Urdu, Hindi',
            festival: 'Bathukamma',
            famousLocation: 'Charminar',
            funFact: 'Telangana is known for its rich history and vibrant culture.',
            link: 'https://en.wikipedia.org/wiki/Telangana',
        },
    },
    {
        id: 'JK',
        name: 'Jammu & Kashmir',
        latLng: [33.7782, 76.5762],
        touristSpots: [
            { 
                name: 'Srinagar', 
                latLng: [34.0836, 74.7973], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Srinagar is known for its beautiful gardens, houseboats, and the Dal Lake.',
                link: 'https://en.wikipedia.org/wiki/Srinagar'
            },
            { 
                name: 'Gulmarg', 
                latLng: [34.0584, 74.4462], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Gulmarg is famous for its lush green meadows and is a popular skiing destination.',
                link: 'https://en.wikipedia.org/wiki/Gulmarg'
            },
            { 
                name: 'Pahalgam', 
                latLng: [34.1956, 75.3206], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Pahalgam is a beautiful hill station known for its scenic views and outdoor activities.',
                link: 'https://en.wikipedia.org/wiki/Pahalgam'
            },
            { 
                name: 'Amarnath Temple', 
                latLng: [34.2904, 75.4960], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Amarnath Temple is a sacred Hindu shrine dedicated to Lord Shiva, located in a cave.',
                link: 'https://en.wikipedia.org/wiki/Amarnath'
            }
        ],
        details: {
            location: 'Northern India',
            language: 'Kashmiri, Urdu, Hindi',
            festival: 'Shivratri',
            famousLocation: 'Srinagar',
            funFact: 'Jammu & Kashmir is known for its breathtaking landscapes and unique cultural heritage.',
            link: 'https://en.wikipedia.org/wiki/Jammu_and_Kashmir',
        },
    },

    {
        id: 'IN-AN',
        name: 'Andaman and Nicobar Islands',
        latLng: [11.7401, 92.6586], // Example coordinates for the center of Andaman and Nicobar Islands
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Bay of Bengal',
            language: 'Hindi, English',
            festival: 'Island Tourism Festival',
            famousLocation: 'Cellular Jail',
            funFact: 'The Andaman and Nicobar Islands are renowned for their pristine beaches and diverse marine life.',
            link: 'https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands',
        },
        touristSpots: [
            { 
                name: 'Radhanagar Beach', 
                latLng: [11.5826, 92.5645], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Pristine beach with turquoise waters.', 
                link: 'https://en.wikipedia.org/wiki/Radhanagar_Beach' 
            },
            { 
                name: 'Ross Island', 
                latLng: [11.6380, 92.7026], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Historical ruins from the British colonial era.', 
                link: 'https://en.wikipedia.org/wiki/Ross_Island_(Andaman)' 
            }
        ]
    },
    {
        id: 'IN-AP',
        name: 'Andhra Pradesh',
        latLng: [15.9129, 79.7400], // Example coordinates for the center of Andhra Pradesh
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Southern India',
            language: 'Telugu',
            festival: 'Sankranti',
            famousLocation: 'Tirupati Temple',
            funFact: 'Known for its spicy cuisine and rich cultural heritage.',
            link: 'https://en.wikipedia.org/wiki/Andhra_Pradesh',
        },
        touristSpots: [
            { 
                name: 'Tirupati Temple', 
                latLng: [13.6491, 79.3832], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'One of the most visited pilgrimage centers.', 
                link: 'https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala' 
            },
            { 
                name: 'Araku Valley', 
                latLng: [18.3185, 82.7765], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Scenic hill station known for coffee plantations.', 
                link: 'https://en.wikipedia.org/wiki/Araku_Valley' 
            }
        ]
    },
    {
        id: 'IN-AR',
        name: 'Arunachal Pradesh',
        latLng: [27.1044, 93.2613], // Example coordinates for the center of Arunachal Pradesh
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'North-Eastern India',
            language: 'Hindi, Arunachali languages',
            festival: 'Losar',
            famousLocation: 'Tawang Monastery',
            funFact: 'Famous for its diverse tribal cultures and scenic beauty.',
            link: 'https://en.wikipedia.org/wiki/Arunachal_Pradesh',
        },
        touristSpots: [
            { 
                name: 'Tawang Monastery', 
                latLng: [27.5522, 91.9824], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'The largest monastery in India.', 
                link: 'https://en.wikipedia.org/wiki/Tawang_Monastery' 
            },
            { 
                name: 'Sela Pass', 
                latLng: [27.0728, 91.7380], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'High-altitude pass offering breathtaking views.', 
                link: 'https://en.wikipedia.org/wiki/Sela_Pass' 
            }
        ]
    },
    {
        id: 'IN-AS',
        name: 'Assam',
        latLng: [26.2006, 92.9376], // Example coordinates for the center of Assam
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'North-Eastern India',
            language: 'Assamese',
            festival: 'Bihu',
            famousLocation: 'Kaziranga National Park',
            funFact: 'Assam is known for its tea gardens and one-horned rhinoceroses.',
            link: 'https://en.wikipedia.org/wiki/Assam',
        },
        touristSpots: [
            { 
                name: 'Kaziranga National Park', 
                latLng: [26.6522, 93.1770], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Home to the largest population of one-horned rhinos.', 
                link: 'https://en.wikipedia.org/wiki/Kaziranga_National_Park' 
            },
            { 
                name: 'Majuli Island', 
                latLng: [26.8315, 93.5814], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'World’s largest river island.', 
                link: 'https://en.wikipedia.org/wiki/Majuli' 
            }
        ]
    },
    {
        id: 'IN-BR',
        name: 'Bihar',
        latLng: [25.0961, 85.3131], // Example coordinates for the center of Bihar
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Eastern India',
            language: 'Hindi, Bhojpuri',
            festival: 'Chhath Puja',
            famousLocation: 'Bodh Gaya',
            funFact: 'Bihar is home to ancient educational centers like Nalanda University.',
            link: 'https://en.wikipedia.org/wiki/Bihar',
        },
        touristSpots: [
            { 
                name: 'Bodh Gaya', 
                latLng: [24.6962, 84.9915], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Where Buddha attained enlightenment.', 
                link: 'https://en.wikipedia.org/wiki/Bodh_Gaya' 
            },
            { 
                name: 'Nalanda University', 
                latLng: [25.1554, 85.4336], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Ancient center of higher learning.', 
                link: 'https://en.wikipedia.org/wiki/Nalanda' 
            }
        ]
    },
    {
        id: 'IN-CH',
        name: 'Chandigarh',
        latLng: [30.7333, 76.7794], // Example coordinates for the center of Chandigarh
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Northern India',
            language: 'Hindi, Punjabi',
            festival: 'Rose Festival',
            famousLocation: 'Rock Garden',
            funFact: 'Designed by Le Corbusier, Chandigarh is known for its urban planning.',
            link: 'https://en.wikipedia.org/wiki/Chandigarh',
        },
        touristSpots: [
            { 
                name: 'Rock Garden', 
                latLng: [30.7473, 76.7907], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'A garden built from industrial and urban waste.', 
                link: 'https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh' 
            },
            { 
                name: 'Sukhna Lake', 
                latLng: [30.7328, 76.8018], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'An artificial reservoir popular for boat rides.', 
                link: 'https://en.wikipedia.org/wiki/Sukhna_Lake' 
            }
        ]
    },
    {
        id: 'IN-CT',
        name: 'Chhattisgarh',
        latLng: [21.2787, 81.8661], // Example coordinates for the center of Chhattisgarh
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Central India',
            language: 'Chhattisgarhi, Hindi',
            festival: 'Bastar Dussehra',
            famousLocation: 'Chitrakote Falls',
            funFact: 'Chhattisgarh is known for its rich tribal culture and lush forests.',
            link: 'https://en.wikipedia.org/wiki/Chhattisgarh',
        },
        touristSpots: [
            { 
                name: 'Chitrakote Falls', 
                latLng: [20.3206, 81.9827], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Often referred to as the "Niagara of India."', 
                link: 'https://en.wikipedia.org/wiki/Chitrakote_Falls' 
            },
            { 
                name: 'Kanger Valley National Park', 
                latLng: [20.2091, 81.5952], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Home to unique flora and fauna, including rare species.', 
                link: 'https://en.wikipedia.org/wiki/Kanger_Valley_National_Park' 
            }
        ]
    },
    {
        id: 'IN-DN',
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        latLng: [20.3974, 73.1194], // Example coordinates for the center of Dadra and Nagar Haveli and Daman and Diu
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Western India',
            language: 'Gujarati, Hindi',
            festival: 'Vautha Mela',
            famousLocation: 'Daman Fort',
            funFact: 'Known for its beautiful beaches and historical forts.',
            link: 'https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu',
        },
        touristSpots: [
            { 
                name: 'Daman Fort', 
                latLng: [20.3974, 73.1194], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Historical fort with Portuguese architecture.', 
                link: 'https://en.wikipedia.org/wiki/Daman_Fort' 
            },
            { 
                name: 'Jampore Beach', 
                latLng: [20.3974, 73.1194], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'A serene beach known for its calm waters.', 
                link: 'https://en.wikipedia.org/wiki/Jampore_Beach' 
            }
        ]
    },
    // {
    //     id: 'IN-DD',
    //     name: 'Dadra and Nagar Haveli',
    //     latLng: [20.3974, 73.1194], // Example coordinates for the center of Dadra and Nagar Haveli
    //     iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
    //     details: {
    //         location: 'Western India',
    //         language: 'Gujarati, Hindi',
    //         festival: 'Holi',
    //         famousLocation: 'Silvassa',
    //         funFact: 'Known for its scenic landscapes and vibrant cultural festivals.',
    //         link: 'https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli',
    //     },
    //     touristSpots: [
    //         { 
    //             name: 'Silvassa', 
    //             latLng: [20.3974, 73.1194], 
    //             iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
    //             info: 'Known for its beautiful gardens and parks.', 
    //             link: 'https://en.wikipedia.org/wiki/Silvassa' 
    //         },
    //         { 
    //             name: 'Vasona Lion Safari', 
    //             latLng: [20.3974, 73.1194], 
    //             iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
    //             info: 'A safari park dedicated to Asiatic lions.', 
    //             link: 'https://en.wikipedia.org/wiki/Vasona_Lion_Safari' 
    //         }
    //     ]
    // },
    {
        id: 'IN-DL',
        name: 'Delhi',
        latLng: [28.6139, 77.2090], // Coordinates for the center of Delhi
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Northern India',
            language: 'Hindi, English',
            festival: 'Diwali',
            famousLocation: 'Red Fort',
            funFact: 'Delhi is known for its rich history and vibrant street food culture.',
            link: 'https://en.wikipedia.org/wiki/Delhi',
        },
        touristSpots: [
            { 
                name: 'Red Fort', 
                latLng: [28.6562, 77.2410], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Historical fortification and UNESCO World Heritage Site.', 
                link: 'https://en.wikipedia.org/wiki/Red_Fort' 
            },
            { 
                name: 'Qutub Minar', 
                latLng: [28.5244, 77.1855], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'The tallest brick minaret in the world.', 
                link: 'https://en.wikipedia.org/wiki/Qutub_Minar' 
            }
        ]
    },
    {
        id: 'IN-GA',
        name: 'Goa',
        latLng: [15.2993, 74.1240], // Example coordinates for the center of Goa
        iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', // State icon URL
        details: {
            location: 'Western India',
            language: 'Konkani',
            festival: 'Carnival',
            famousLocation: 'Baga Beach',
            funFact: 'Goa is famous for its beaches, Portuguese heritage, and vibrant nightlife.',
            link: 'https://en.wikipedia.org/wiki/Goa',
        },
        touristSpots: [
            { 
                name: 'Baga Beach', 
                latLng: [15.5524, 73.7778], 
                iconUrl: 'https://img.icons8.com/?size=100&id=24640&format=png&color=000000',
                info: 'Popular beach known for its nightlife and water sports.', 
                link: 'https://en.wikipedia.org/wiki/Baga_Beach' 
            },
            { 
                name: 'Fort Aguada', 
                latLng: [15.5361, 73.8083], 
                iconUrl: 'https://img.icons8.com/?size=100&id=49261&format=png&color=000000',
                info: 'Historic Portuguese fort with panoramic views.', 
                link: 'https://en.wikipedia.org/wiki/Fort_Aguada' 
            }
        ]
    }
];


export default touristData;
