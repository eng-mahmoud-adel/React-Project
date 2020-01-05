import React, { Component } from 'react';
import {SocialSection, Social, Icon, SocialDesc, Span, SpanInfo} from './style.js';
import axios from 'axios';

class SocialMedia extends Component {

    state= {
        social: []
    }

    componentDidMount() {
        axios.get("js/data.json").then(response => {
            this.setState({social: response.data.social})
        });
    }

    render() {

        const {social}= this.state;
        const socialItem= social.map(item => {
            return(
                    <Social key= {item.id} item= {item.id}>
                        <Icon className= {item.icon}></Icon>
                        <SocialDesc>
                            <Span>{item.title}</Span>
                            <SpanInfo>{item.body}</SpanInfo>
                        </SocialDesc>
                    </Social>
            )
        })

        return (
            <SocialSection>
                {socialItem}
            </SocialSection>
        )
    }
}

export default SocialMedia;