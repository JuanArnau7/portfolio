import { useEffect, useState } from "react"
import styled from "styled-components"
// import { Dispatch } from "react"

const Switch = (props) => {

    const dark = localStorage.getItem("theme")
    const [position, setPosition] = useState(false)

    const changePosition = () =>{
        setPosition(!position)
    };

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
    const ambas = () =>{
        changePosition()
        changeMode()
    }
    return(
        <>

        {/* <Contenedor>
        
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            
            </p>
            
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
            </p>

        </Contenedor> */}
        {/* <p>dark/light mode</p> */}
        <SwitchBGC>

        <ButtonSwitch
        onClick={()=>ambas()}
        position={position}
        ></ButtonSwitch>
        </SwitchBGC>
        </>
    )
}


export default Switch;

// const Contenedor = styled.div`
// display: flex;
// height: 45px;
// width: 45px;

// /* position: ; */
// /* margin: 5px; */
// /* padding: 5px; */
// `

const ButtonSwitch = styled.button`
position: absolute;
cursor: pointer;
bottom: 5px;
left: ${({position}) => (position ? "35px" : "5px")};
width: 25px;
height: 25px;
border: none;
border-radius: 50%;
background-color: #fff;
transition: 0.4s all ease-in;
outline: none;
`
const SwitchBGC = styled.div`
position: relative;
width: 65px;
height: 35px;
border-radius: 30px;
background-color: #ff2301;
transition: 1s all ease-in;
`