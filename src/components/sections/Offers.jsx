import React, { useContext } from 'react'

// components 
import Title from '../Title'

// page components 
import OffersCard from '../page-components/OffersCard'

import { offerList, moreOffersList } from '../../database/OfferList'
import { ThemeContext } from '../context/themeContext'

export default function Offers({ offersRef, showOffers, handleShowOffers }) {
  const { theme } = useContext(ThemeContext)
  return (
    <section ref={offersRef} className='container-md p-2'>
            <Title classes={"subtitle text-center mb-4"} text="Here's what you get"/>
            <div className={`offers-container ${theme} fadeIn`}>
              
              {offerList.map((offer, index) => (<OffersCard 
              key={index}
              icon_1={offer.icon_1}
              title={offer.title}
              text={offer.text}
              >
              </OffersCard>
              ))}
            </div>
            {showOffers && (<div className={`offers-container ${theme} fadeIn`}>
              {moreOffersList.map((offer, index) => (<OffersCard 
              key={index}
              icon_1={offer.icon_1}
              title={offer.title}
              text={offer.text}
              >
              </OffersCard>
              ))}
            </div>
            )}
            <span 
            onClick={handleShowOffers}
            style={{cursor: "pointer", textDecoration: "underline"}}
            >
              <h4 className={`text-center text-primary mt-2 ${theme}`}>
                {showOffers ? "Less" : "More..."}
              </h4>
            </span>
          </section>
  )
}
