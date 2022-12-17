import React from 'react';
import Hero from '../../components/Hero';
import ServicesByUs from './components/ServicesByUs';
import Technologies from './../../components/Technologies';

export default function Services() {
    return (
        <>
            <Hero
                page="SERVICES"
                title="Lets Go Digital"
                subTitle="Our craft is the fusion of tech, value and success. We've been building products that ignite customers and spark creative engagement."
            />
            <ServicesByUs />
            <Technologies />
        </>
    )
}
