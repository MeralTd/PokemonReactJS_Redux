import React from 'react';
import Fetch from './Fetch';
import CardsList from './CardsList';
import CardsSearch from './CardsSearch';
import { filterName } from '../selectors';

const Cards = ({location}) => {
  return (
    <Fetch 
      type="cards"
      query={location.search}
      render={({ data, isLoading, filter, showModal,openedModal }) => (
        <div className="container">
          { 
            (data.cards && data.cards.length > 0) 
              && <CardsSearch set={data.cards[0].set} />
          }
          <CardsList 
            data={filterName(data.cards, filter.cardName)} 
            filter={filter} 
            isLoading={isLoading} 
            showModal={showModal}
            openedModal={openedModal}
          />
        </div>
      )} 
    />
  );
};

export default Cards;