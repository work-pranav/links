import pfp from "./assets/Pranav-pfp-sq.jpg"
import logo from "./assets/pranav-logo.svg"
import {Name, Description, Links} from "./data"

const LinkComponent = ({content, btnlink}: {content: string, btnlink: string}) => {
  return (
    <a href={btnlink} target="_blank" className="rounded-xl border-2 border-[#a369f4] shadow-custom-purple py-3 hover:shadow-none hover:translate-y-1 transition text-center font-medium text-lg">
      {content}
    </a>
  )
}

function App() {
  return (
    <div className="font-medium p-5 max-w-xl mx-auto">
      <div className="rounded-full relative">
        <img src={pfp} alt="pfp-pranav-goel" className="w-3/5 rounded-full mx-auto border border-[#a369f4] ring-2 ring-offset-2 ring-[#a369f4]" />
        <p className="font-medium absolute p-1.5 left-0 right-0 font-bold mx-auto w-32 text-center bottom-0.5 bg-white rounded-md border-2 border-[#a369f4] shadow-custom-purple-short text-lg">{Name}</p>
        <img src={logo} alt="pranav-stuff-logo.svg" className="absolute w-14 right-0 top-0" />
      </div>
      <p className="-my-6 mx-3 p-3 text-center pt-8 rounded-3xl border-2 border-[#a369f4] shadow-custom-purple -bottom-[8.5rem] font-normal -z-10">I'm a multidisciplinary designer specializing in 2D, 3D, AR, VFX, and interactive experiences, with <span className="font-medium"> 6+ years of professional experience.</span> My work has contributed to projects for brands including <span className="font-medium">Pepsi, Bacardi, UCB, Patrón, and others,</span> driven by a passion for creating meaningful experiences that leave a lasting impact.</p>
      <div className="my-6"> 
        <div className="p-5 px-10 flex flex-col w-full gap-3">
          {Links.map(({title, link}, idx) => <LinkComponent content={title} btnlink={link} key={idx} />)}
        </div>
      </div>
    </div>
  )
}

export default App
