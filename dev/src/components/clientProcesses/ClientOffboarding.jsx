import React from "react";
import HeatMap from "./HeatMap";
import dataProcess from "./data"

const ClientOffboarding = () => {
  const [regionalData, setRegionalData] = React.useState([])
  const [activeQuery, setActiveQuery] = React.useState("Hubs")
  const [activeQueryMethod, setActiveQueryMethod] = React.useState("Closures")

  React.useEffect(() => {
    const regions = dataProcess.filter((item) => item.Region === activeQuery)
    setRegionalData(regions)
  }, [activeQuery]);
  const handleChange = (event) => {
    setActiveQuery(event.target.value)
  }
  const handleType = (event) => {
    setActiveQueryMethod(event.target.value)
  }
  return (
    <HeatMap
      activeQuery={activeQuery}
      data={regionalData}
      handleChange={handleChange}
      activeQueryMethod={activeQueryMethod}
      handleType={handleType}
    />
  )
}


export default ClientOffboarding;