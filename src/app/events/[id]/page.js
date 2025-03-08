'use client';

import EventTimeline from "@/app/components/EventTimeline";

const GalleryPage = () => {

    const EventDetails = {
        title: 'శ్రీ కనకదుర్గా ఆలయ విగ్రహ ప్రాణప్రతిష్ఠ మహోత్సవం',
        description: 'ఓం శ్రీ మాత్రే నమః శ్రీ కనకదుర్గా మహాదేవి అమ్మవారి ఆలయ విగ్రహ ప్రాణప్రతిష్ఠ మహోత్సవం 21-ఏప్రిల్-2024న అత్యంత వైభవంగా జరిగింది. ఈ పవిత్ర కార్యక్రమం కాపుశెట్టి వారి కుటుంబం మరియు కోలమూరు గ్రామ ప్రజల సహకారంతో ఘనంగా నిర్వహించబడింది. ఈ మహోత్సవ వేళల్లో ప్రతిఘట్టం ఆధ్యాత్మిక వైభవాన్ని ప్రతిఫలించింది. ఆ అందమైన రమణీయ దృశ్యాలు మీరు ఎక్కడ ఆస్వాదించవచ్చు.',
        date: 'April 21, 2024',
        images: [
            {
                id: 1,
                title: 'Event 1',
                description: 'This is the description for Event 1.',
                date: 'January 1, 2023',
                image: '/images/events/opening/1.jpg',
            },
            {
                id: 2,
                title: 'Event 2',
                description: 'This is the description for Event 2.',
                date: 'February 15, 2023',
                image: '/images/events/opening/2.jpg',
            },
            {
                id: 3,
                title: 'Event 3',
                description: 'This is the description for Event 3.',
                date: 'March 30, 2023',
                image: '/images/events/opening/3.jpg',
            }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div>
                <h2>{EventDetails.title}</h2>
                <p>{EventDetails.description}</p>
                <p>{EventDetails.date}</p>
            </div>
            <EventTimeline eventDetails={EventDetails} />
        </div>
    );
};

export default GalleryPage;