import React, { useState, useEffect } from 'react'
import ClientDataChart from './ClientDataChart'


const Chart = (props) => {
  const clientData = [
    {
      "year": "2016",
      "onboardedBRs": 209580,
      "offboardedBRs": 54587,
      "onboardedFiles": 99999,
      "offboardedFiles": 3710
    },
    {
      "year": "2017",
      "onboardedBRs": 208784,
      "offboardedBRs": 85594,
      "onboardedFiles": 55546,
      "offboardedFiles": 17207
    },
    {
      "year": "2018",
      "onboardedBRs": 126741,
      "offboardedBRs": 135488,
      "onboardedFiles": 24927,
      "offboardedFiles": 37428
    },
    {
      "year": "2019",
      "onboardedBRs": 105810,
      "offboardedBRs": 113295,
      "onboardedFiles": 27242,
      "offboardedFiles": 44397
    },
    {
      "year": "2020",
      "onboardedBRs": 42651,
      "offboardedBRs": 39507,
      "onboardedFiles": 6520,
      "offboardedFiles": 14604
    }
  ]

  const [activeQuery, setActiveQuery] = useState('2020');
  const [typeQuery, setTypeQuery] = useState('BRData');
  const [data, setData] = useState([]);
  const [clientDataComparison, setDataComparison] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')


  useEffect(() => {
    // fetch(`http://localhost:8080/client/${activeQuery}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setData(data);
    //     setLoading(false);
    //   })

    //   .catch((error) => {
    //     if (activeQuery !== "2018/2019") {
    //       setError(error)
    //     }

    //   });

    const search = (activeQuery, clientData) => {

      for (var i = 0; i < clientData.length; i++) {
        if (clientData[i].year === activeQuery) {
          setData(clientData[i]);
        }

      }
    }

    search(activeQuery, clientData)
  }, [activeQuery]);

  useEffect(() => {

    setDataComparison(clientData);
    setLoading(false);

  }, []);

  return (

    <div>

      {loading && <p>Chart loading...</p>}
      {error && <p>{error.message}</p>}

      <ClientDataChart
        activeQuery={activeQuery}
        typeQuery={typeQuery}
        setQuery={setActiveQuery}
        setTypeQuery={setTypeQuery}
        data={data}
        dataComparison={clientDataComparison}
      />
    </div>
  )
}

export default Chart;