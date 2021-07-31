import React from 'react';
import PopularLanguage from '../PopularLanguage';

const ToptenList = () => {
  const { topTen } = PopularLanguage();
  return (
    <div className="topten mt-4">
      <h4>Topten Language</h4>
      <ol className="list">
        {topTen.map((data) => (
          <li className="list-item" key={data.name}>
            {data.name} is Spoken in {data.count} country
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToptenList;
