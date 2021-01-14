import React, { Component } from 'react'

import StyledTitle from './StyledTitle'
import data from '../data/Services'


export default class Services extends Component {
    render() {
        return (
            <section className="services">
                <StyledTitle title="services"/>
                <div className="services-center">
                    {data.map(item=>{
                        const {id, icon, title, info} = item
                        return(
                            <article key={id} className="service">
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <p>{info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
