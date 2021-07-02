import { NavBar } from "../navBars/NavBar";
export const Page =({children})=>{
    return (
        <main>
            <NavBar/>
            {children}
        </main>
    )

}