import React from 'react'
import { ConfigColoursType } from '../../../types/configColoursType'

type ConfigurationButtonsProps = {
 configuration:ConfigColoursType;
	setConfiguration: React.Dispatch<React.SetStateAction<ConfigColoursType>>;
}

const ConfigurationButtons = ({configuration, setConfiguration}:ConfigurationButtonsProps) => {
  return (
    <div className="fixed bottom-10 right-10 text-white flex flex-col gap-3 ">
        <button disabled={configuration === "black"} className={`${configuration === "black" ? "scale-110" : ""} hover:opacity-75  h-10 w-10 bg-black rounded-full border border-1 border-yellow-700`} onClick={() => setConfiguration("black")}/>
        <button disabled={configuration === "silver"} className={`${configuration === "silver" ? "scale-110" : ""} hover:opacity-75  h-10 w-10 bg-stone-500 rounded-full border border-1 border-yellow-700`} onClick={() => setConfiguration("silver")} />
        <button disabled={configuration === "white"} className={`${configuration === "white" ? "scale-110" : ""} hover:opacity-75  h-10 w-10 bg-white rounded-full border border-1 border-yellow-700`} onClick={() => setConfiguration("white")}/>
    </div>
  )
}

export default ConfigurationButtons