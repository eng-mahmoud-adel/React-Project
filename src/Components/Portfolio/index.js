import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, Span, Overlay, OverlaySpan, ImageWrapper, Image} from './style.js';

const Portfolio = () => {

    const [images,  setImages]= useState([]);

    useEffect(() => {
        axios.get("js/data.json").then(response => setImages(response.data.portfolio))
    }, []);

    const PortfolioImages= images.map(item => {
        return (
            <ImageWrapper key= {item.id}>
                    <Image src= {item.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
        )
    })

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active= "active">All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
    )
}

export default Portfolio;