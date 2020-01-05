import Styled from 'styled-components';

export const AboutSection= Styled.div`
    height: 500px;
    background: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    `

export const AboutInfo= Styled.div`
    padding-top: 50px;
    width: 50%;
    float: right;
    `

export const InfoTitle= Styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 0;
    `

export const Span= Styled.span`
    font-weight: normal
    `

export const InfoDir= Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    margin-top: 0;
    `

export const InfoDesc= Styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    margin-top: 0;
    `

export const Anchor= Styled.a`
    text-decoration: none
    `