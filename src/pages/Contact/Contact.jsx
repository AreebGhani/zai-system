import React from 'react';
import Hero from "../../components/Hero";
import Cards from "./components/Cards"
import Form from './components/Form';
import OurWork from './components/OurWork';

export default function Contact() {
    return (
        <>
            <Hero
                page="Contact Us"
                title="GET IN TOUCH"
                subTitle="We enjoy building products that ignite customers and spark creative engagement."
            />
            <Cards />
            <Form />
            <OurWork />
        </>
    )
}
