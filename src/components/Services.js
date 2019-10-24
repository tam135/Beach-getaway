import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Services extends Component {
                 state = {
                   services: [
                     {
                       icons: <FaCocktail />,
                       title: "Free cocktails",
                       info:
                         "It's vacation time, so reward yourself with free cocktails! In the spirit of relaxation, we’ve rounded up some simple drinks with no more than four ingredients."
                     },
                     {
                       icons: <FaHiking />,
                       title: "Endless Hiking",
                       info:
                         "Had a little too much to eat and drink? Don't worry, there are endless opportunities for hiking near all of your resorts."
                     },
                     {
                       icons: <FaShuttleVan />,
                       title: "Free shuttles",
                       info:
                         "Don't spend a dime on Ubers or Taxis because we provide free shuttles anywhere within a 5 mile radius"
                     },
                     {
                       icons: <FaBeer />,
                       title: "Best beers",
                       info:
                         "A great beer satisfies on many levels. It quenches the thirst, electrifies your taste buds and also calms the nerves. We have the best beers around."
                     }
                   ]
                 };

                 render() {
                   return (
                     <div>
                       <section className="services">
                         <Title title="services" />
                         <div className="services-center">
                           {this.state.services.map((item, index) => {
                             return (
                               <article key={index} className="service">
                                 <span>{item.icons}</span>
                                 <h6>{item.title}</h6>
                                 <p>{item.info}</p>
                               </article>
                             );
                           })}
                         </div>
                       </section>
                     </div>
                   );
                 }
               }
