import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS
import './Calendar.css'; // Import custom styles
import CalPopup from './CalPopup'; // Import the popup component

const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const festivals = {
        "2024-01-12": {
            name: "Makar Sankranti",
            info: "A Hindu festival dedicated to the Sun God, marking the transition of the Sun into Capricorn."
        },
        "2024-01-25": {
            name: "Republic Day",
            info: "A national holiday in India celebrating the adoption of the Constitution."
        },
        "2024-02-13": {
            name: "Maha Shivaratri",
            info: "A Hindu festival celebrated annually in honor of Lord Shiva."
        },
        "2024-03-08": {
            name: "Holi",
            info: "The festival of colors, celebrating the arrival of spring and the victory of good over evil."
        },
        "2024-03-28": {
            name: "Good Friday",
            info: "A Christian holiday commemorating the crucifixion of Jesus Christ."
        },
        "2024-04-13": {
            name: "Baisakhi",
            info: "A harvest festival celebrated in the Punjab region by Sikhs and Hindus."
        },
        "2024-04-20": {
            name: "Ramadan Eid",
            info: "The festival marking the end of Ramadan, the holy month of fasting in Islam."
        },
        "2024-05-14": {
            name: "Buddha Purnima",
            info: "A Buddhist festival that marks the birth, enlightenment, and death of Gautama Buddha."
        },
        "2024-07-18": {
            name: "Rath Yatra",
            info: "A Hindu festival associated with Lord Jagannath, celebrated by pulling chariots through the streets."
        },
        "2024-08-14": {
            name: "Independence Day",
            info: "A national holiday in India celebrating the country's independence from British rule."
        },
        "2024-08-28": {
            name: "Raksha Bandhan",
            info: "A Hindu festival celebrating the bond between brothers and sisters."
        },
        "2024-09-06": {
            name: "Ganesh Chaturthi",
            info: "A Hindu festival celebrating the birth of Lord Ganesha, the god of wisdom and prosperity."
        },
        "2024-09-17": {
            name: "Vishwakarma Puja",
            info: "A Hindu festival honoring Vishwakarma, the divine architect."
        },
        "2024-10-01": {
            name: "Gandhi Jayanti",
            info: "A national holiday to celebrate the birthday of Mahatma Gandhi."
        },
        "2024-10-12": {
            name: "Dussehra",
            info: "A Hindu festival celebrating the victory of Lord Rama over Ravana."
        },
        "2024-11-01": {
            name: "Karwa Chauth",
            info: "A Hindu festival where married women fast for the well-being of their husbands."
        },
        "2024-11-11": {
            name: "Diwali",
            info: "The festival of lights, celebrating the victory of light over darkness."
        },
        "2024-11-24": {
            name: "Guru Nanak Jayanti",
            info: "A Sikh festival celebrating the birth of Guru Nanak, the founder of Sikhism."
        },
        "2024-12-24": {
            name: "Christmas",
            info: "A Christian holiday celebrating the birth of Jesus Christ."
        },
        "2024-12-31": {
            name: "New Year's Eve",
            info: "The last day of the year, celebrated with parties and fireworks."
        }
    };

    const handleDateClick = (date) => {
        const formattedDate = date.toISOString().split('T')[0]; // Ensure the date is formatted as YYYY-MM-DD
        if (festivals[formattedDate]) {
            setSelectedDate(formattedDate);
            setShowPopup(true);
        }
    };

    return (
        <div className="calendar-container">
            <Calendar
                onChange={handleDateClick}
                value={new Date()}
                tileContent={({ date }) => {
                    const formattedDate = date.toISOString().split('T')[0];
                    return festivals[formattedDate] ? <p>{festivals[formattedDate].name}</p> : null;
                }}
            />
            {showPopup && (
                <CalPopup
                    festivalName={festivals[selectedDate].name}
                    festivalInfo={festivals[selectedDate].info}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}

export default MyCalendar;