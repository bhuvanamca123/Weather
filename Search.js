//import { WeatherContext } from './App';

export const Search = ({ setCode }) => {
  
  const handleClick = (apiResponse) => {
    // Some API call returning the actual code value here //
    setCode(apiResponse)
  }
  
  return (
    <input
      onClick={() => handleClick("01n")}
      type="button"
      value="Change city"
    />
  )
}