import { createContext,useContext } from "react";

export const ThemeContext =createContext({
    themeMode : "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})// we are creating contexts here which are the global storehouses. These stores can be accessed by everyone

export const ThemeProvider =ThemeContext.Provider// this helps us to make the store available for everyone to use. wherever we want to use these global variables we would send the ThemeContext.Provider to wrap the component

export default function useTheme(){
    return useContext(ThemeContext)
}// this functuon is exported to ensure the fields from the stores are accesible at an easier rate and in a legible format