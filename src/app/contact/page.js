import React from "react";
import { motion } from "framer-motion";

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";
import ContactUsForm from "../components/ContactUsForm";

export const metadata = {
    title: 'Contact Us',
    description: 'Reach out to us via our Contact Us page.',
};

export default function App() {
    return (
        <div>
            <ContactUsForm />
        </div>
    );
}

