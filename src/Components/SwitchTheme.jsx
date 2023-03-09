import { useEffect } from "react"
// import { Dispatch } from "react"

const Switch = () => {

    const dark = localStorage.getItem("theme")

    useEffect(() => {
		if(dark){
			async function darkTheme(){
                document.documentElement.classList.add('dark')
			}
			darkTheme()
		}
	}, [dark])
	



    const changeMode = () => {
    if(!localStorage.theme){
        darkActivated()
    } else {
        darkDisabled()
    }
    }
    
    const darkActivated = () => {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    }

    const darkDisabled = () => {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
    }

    return(
        <div className="p-1">
        <button 
        type="button" 
        className=""
        onClick={changeMode}>
            Dark Mode
        </button>
        </div>
    )
}


export default Switch;
