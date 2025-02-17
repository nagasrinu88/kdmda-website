import React from "react";
import ContactUsForm from "../components/ContactUsForm";

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

export const metadata = {
    title: 'Contact Us',
    description: 'Reach out to us via our Contact Us page.',
};

export default function App() {
    return (

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Image src="/images/contact-us.jpg" alt="Contact Us" className="w-full h-auto" />
            </div>
            <div className="flex justify-end border-l-2">
                <ContactUsForm />
            </div>
        </div>


    );
}

