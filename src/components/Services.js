import React, { Component } from 'react'
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
}
    render() {
        return (
            <section className="services">
               <Title title='Services'/>
               <div className="services-center">
                    
                    
               </div>
            </section>
        )
    }
}
