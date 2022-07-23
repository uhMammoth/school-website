import React from 'react'
import Bottom from '../assets/calenderbottom.jpg';
import { createPopper } from "@popperjs/core";
import Grad from '../assets/grad.jpg'

/*  dropdown bar  */
const Dropdown = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {placement: "bottom-start"});
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {setDropdownPopoverShow(false);
  };
  let bgColor;
  color === "white"
    ? (bgColor = "bgblue")
    : (bgColor = "bg-" + color + "-500");
  return (
  <><img src={Bottom} alt='students using laptop together' className='sticky top-0 w-full h-40' /> 
    <div className=" pt-2 w-full flex flex-wrap">
      <div className=" w-full  px-4">
        <div className=" relative inline-flex align-middle w-full">
          <button className={ "yellow w-full font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " + bgColor} type="button" ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();}}>{color === "yellow" ? "Choose a Counselor" : "Choose a Counselor"}
          </button>
          <div ref={popoverDropdownRef} className= { (dropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "covid " : bgColor + " ") + "nav text-base z-50 float-left py-2 list-none text-left rounded shadow-2xl mt-1" } style={{ minWidth: "12rem" }}>
            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}>Emily Cortez:  Academic</a>

            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}>Mitchelle Hamm:  Mental Health</a>
              
            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}>Alex Garcia: Addiction</a>

            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}>Marc Nguyenn: Careers</a>
              
            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}> Aaron Carter:  Academic</a>

            <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
            <a href="#pablo" className={ "rblue py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")}
            onClick={e => e.preventDefault()}>First Available Counselor</a>
          </div>
        </div>
      </div>
    </div>

    <div className='nav '>
      <div className='nav rblue h-40'>'Calender here'</div>
      <div className='nav rblue h-32'>'Info-bar here'</div>
      <div class="text-left my-3 px-5 text-lg rblue">1.. 2.. 3.. That's it!</div>
      <div class="mb-3 px-5 text-sm text-left indent-6 rblue">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates.</div>
      <img src={Grad} alt='graduates throwing graduation caps' className='sticky bottom-0 w-full h-40' />
    </div></>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white"/>
    </>
  );
}

