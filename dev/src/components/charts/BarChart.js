import React, { useState, useEffect } from 'react'
import ClientDataChart from './ClientDataChart'


const Chart = (props) => {
  const [activeQuery, setActiveQuery] = useState('2020');
  const [typeQuery, setTypeQuery] = useState('BRData');
  const [clientData, setData] = useState([]);
  const [clientDataComparison, setDataComparison] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')


  useEffect(() => {
    fetch(`http://localhost:5000/client/${activeQuery}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })

      .catch((error) => {
        if (activeQuery !== "2018/2019") {
          setError(error)
        }

      });
  }, [activeQuery]);

  useEffect(() => {
    fetch("http://localhost:5000/client")
      .then(res => res.json())
      .then(data => {
        setDataComparison(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
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
        data={clientData}
        dataComparison={clientDataComparison}
      />
    </div>
  )
}

export default Chart;