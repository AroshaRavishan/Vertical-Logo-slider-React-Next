'use client';
import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const partners = [
    { src: 'https://www.tutorialspoint.com/green/images/logo.png', alt: 'Tutorials Point' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png', alt: 'IBM' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', alt: 'Amazon' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png', alt: 'Netflix' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', alt: 'Apple' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png', alt: 'HP' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png', alt: 'OpenAI' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png', alt: 'NASA' },
    { src: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg', alt: 'NVIDIA' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png', alt: 'Intel' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png', alt: 'Facebook' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg', alt: 'Twitter' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png', alt: 'YouTube' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png', alt: 'Airbnb' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png', alt: 'Spotify' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png', alt: 'Mozilla Firefox' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png', alt: 'Slack' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png', alt: 'LinkedIn' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png', alt: 'Reddit' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png', alt: 'McDonald\'s' }
];

const Logo = () => {
    const SplideOptions = {
        type: 'loop',
        direction: 'ttb',
        height: '5rem',
        arrows: false,
        drag: 'flase',
        focus: 'center',
        wheel: false,
        autoplay: true,
        interval: 3000,
        speed: 1000,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        pauseOnHover: false,
        resetProgress: false,
        autoStart: true,
    };

    const intervalOffsets = [0, 2000, 4000, 1000];

    // Function to shuffle an array
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // Function to divide partners into groups and shuffle each group
    const getShuffledGroups = () => {
        const groupSize = Math.ceil(partners.length / 6);
        const shuffledPartners = shuffleArray(partners);
        return [
            shuffleArray(shuffledPartners.slice(0, groupSize)),
            shuffleArray(shuffledPartners.slice(groupSize, groupSize * 2)),
            shuffleArray(shuffledPartners.slice(groupSize * 2, groupSize * 3)),
            shuffleArray(shuffledPartners.slice(groupSize * 3)),
        ];
    };

    // State to hold shuffled partner groups for each Splide instance
    const [partnerGroups, setPartnerGroups] = useState(getShuffledGroups());

    useEffect(() => {
        // Update partner groups when the component mounts
        setPartnerGroups(getShuffledGroups());

        // Set up an interval to reshuffle partner groups every 30 seconds
        const reshuffleInterval = setInterval(() => {
            setPartnerGroups(getShuffledGroups());
        }, 30000);

        // Clean up the interval on component unmount
        return () => clearInterval(reshuffleInterval);
    }, []);

    return (
        <div className='container'>
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 h-[100px]">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-bottom border-right"></div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 h-[100px]">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                <div className="col-span-1 lg:col-span-10 border-left flex items-center justify-center border-bottom border-right">
                    <p className="text-base sm:text-xl text-black-800 font-normal text-center">Growing together: Companies thriving with our support</p>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 h-auto">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                {/* Four Sliders */}
                <div className="col-span-1 lg:col-span-10 border-left border-bottom border-right py-2">
                    <div className="flex lg:grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center">
                        {partnerGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className={`lg:col-span-1 ${groupIndex > 1 ? 'hidden lg:block' : ''}`}>
                                <Splide options={{ ...SplideOptions, interval: 3000 + intervalOffsets[groupIndex] }}>
                                    {group.map((partner, idx) => (
                                        <SplideSlide key={idx}>
                                            <div className="flex my-3 lg:my-5 mx-4 justify-center">
                                                <img src={partner.src} alt={partner.alt} className="w-auto h-[36px] object-contain" />
                                            </div>
                                        </SplideSlide>
                                    ))}
                                </Splide>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
        </div>
    );
};

export default Logo;
