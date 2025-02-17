'use client';

import { Form, Input, Button, Textarea } from "@heroui/react";
import React from "react";

const ContactUsForm = () => {
    const [action, setAction] = React.useState(null);
    return (
        <Form
            className="w-full flex flex-col gap-4 p-2"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                setAction(`submit ${JSON.stringify(data)}`);
            }}
        >
            <Input
                className="w-full"
                isRequired
                errorMessage="Please enter a valid name"
                label="Name"
                labelPlacement="outside"
                name="name"
                placeholder="Enter your name"
                type="text"
            />
            <Input
                className="w-full"
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
            />
            
            <Textarea 
                className="w-full" 
                name="description"
                label="Description" 
                placeholder="Enter your description" />

            <div className="flex gap-2 flex justify-end">
                <Button color="primary" type="submit">
                    Submit
                </Button>
                <Button type="reset" variant="flat">
                    Reset
                </Button>
            </div>
            {action && (
                <div className="text-small text-default-500">
                    Action: <code>{action}</code>
                </div>
            )}
        </Form>
    );
}

export default ContactUsForm;