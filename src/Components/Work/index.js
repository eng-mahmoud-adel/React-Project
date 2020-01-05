import React, { Component } from 'react';
import axios from 'axios';
import {WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc} from'./style.js';

class Work extends Component {

    state= {
        works: []
    }

    componentDidMount() {
        axios.get("js/data.json").then(response => this.setState({works: response.data.works}));
    }

    render() {

        const works= this.state.works;
        const WorkItem= works.map(item => {
            return (
                <WorkPart key= {item.id} first= {item.id}>
                        <Icon className= {item.icon_name}></Icon>
                        <PartTitle>{item.title}</PartTitle>
                        <Line />
                        <PartDesc>
                            {item.body}
                        </PartDesc>
                    </WorkPart>
            )
        })


        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {WorkItem}
                </div>
            </WorkSection>
        )
    }
}

export default Work;