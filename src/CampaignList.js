import React, { useState, useEffect } from 'react';
//import { getCampaigns } from '../services/api';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      //const data = [aa,bb,cc,dd,ff]
      //await getCampaigns();
     // setCampaigns();
    };
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1>Donation Campaigns</h1>

    </div>
  );
};

export default CampaignList;
