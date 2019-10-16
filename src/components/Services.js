import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Services extends Component {
    state = {
        services: [
            {
                icons:<FaCocktail/>,
                title:'Free cocktails',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore vel ut repudiandae quidem voluptatem officiis odit.'
            },
            {
                icons:<FaHiking/>,
                title:'Endless Hiking',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore vel ut repudiandae quidem voluptatem officiis odit.'
            },
            {
                icons:<FaShuttleVan/>,
                title:'Free shuttles',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore vel ut repudiandae quidem voluptatem officiis odit.'
            },
            {
                icons:<FaBeer/>,
                title:'Best beers',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore vel ut repudiandae quidem voluptatem officiis odit.'
            },
        ]
    }

    render() {
        return (
          <div>
            <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.services.map((item, index) => {
                      return <article key={index} className="service">
                          <span>{item.icons}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                      </article>
                  })}
              </div>
            </section>
          </div>
        );
    }
}
