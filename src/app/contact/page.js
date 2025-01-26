import React from "react";
import ContactUsForm from "../components/ContactUsForm";

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

export const metadata = {
    title: 'Contact Us',
    description: 'Reach out to us via our Contact Us page.',
};

export default function App() {
    return (
        <div className="pt-8-container mx-auto px-4 py-8">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex gap-3">
                    <p className="text-lg">Please contact us for any queries or support.</p>
                </CardHeader>
                <CardBody>
                    <ContactUsForm />
                </CardBody>
            </Card>
        </div>
    );
}

