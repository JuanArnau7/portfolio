import { useEffect, useState } from "react"
// import { Dispatch } from "react"
import styled from "styled-components"

const SwitchLang = () => {
    
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

    return(
        <>

        <Contenedor>



            {/* <p>EN</p> */}

        <SwitchBGC>

        {/* <p className="botonesen"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-language" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 5h7" />
            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
            <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
            <path d="M12 20l4 -9l4 9" />
            <path d="M19.1 18h-6.2" />
            </svg></p> */}
        <ButtonSwitch
        onClick={()=>changePosition()}
        position={position}
        ></ButtonSwitch>
        </SwitchBGC>
        </Contenedor>
        </>
    )
}


export default SwitchLang;

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

const Contenedor = styled.div`
display:flex;
margin: 0px;
padding: 0px;
`
