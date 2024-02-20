import { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : prevCounter));
    }, 40);
    return () => clearInterval(intervalId);
  }, []); 
  useEffect(() => {
    
    const bodyK = document.querySelector('body')
    if(counter !== 100){
      bodyK.classList.add('overflow-none')
    } else{
      bodyK.classList.remove('overflow-none')
    }
  },[counter])

  return (<>
    {
        counter !== 100 ? <div className='loader'>
            <svg width="889" height="300" viewBox="0 0 889 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                <path d="M230.113 266.441H264.161V269.942C264.161 278.376 261.148 285.506 255.111 291.346C249.015 297.115 240.943 300 230.88 300C220.818 300 211.978 296.592 205.289 289.787C198.542 282.912 195.169 274.572 195.169 264.789C195.169 255.006 198.542 246.666 205.289 239.779C211.966 232.974 220.504 229.566 230.88 229.566C237.104 229.566 242.885 231.09 248.201 234.138C253.459 237.185 257.507 241.233 260.369 246.293L254.331 249.795C252.191 245.642 249.015 242.338 244.793 239.872C240.57 237.406 235.941 236.173 230.88 236.173C222.319 236.173 215.374 238.93 210.058 244.444C204.673 250.027 201.986 256.797 201.986 264.777C201.986 272.757 204.673 279.539 210.058 285.111C215.374 290.624 222.319 293.381 230.88 293.381C238.535 293.381 244.665 291.474 249.271 287.647C253.808 283.75 256.437 278.829 257.158 272.862H230.113V266.441Z" fill="white"/>
                <path d="M359.512 298.836H351.73L335.77 271.593H316.704V298.836H309.899V230.729H337.143C342.714 230.729 347.519 232.741 351.543 236.754C355.568 240.779 357.581 245.572 357.581 251.155C357.581 255.82 356.185 259.949 353.393 263.509C350.729 267.01 347.228 269.406 342.889 270.709L359.523 298.825L359.512 298.836ZM337.131 237.15H316.704V265.172H337.131C340.888 265.172 344.099 263.811 346.763 261.089C349.426 258.239 350.752 254.924 350.752 251.167C350.752 247.41 349.426 244.036 346.763 241.244C344.099 238.522 340.888 237.161 337.131 237.161V237.15Z" fill="white"/>
                <path d="M459.632 289.786C452.827 296.591 444.487 300 434.622 300C424.758 300 416.429 296.591 409.613 289.786C402.808 282.842 399.399 274.513 399.399 264.788C399.399 255.064 402.808 246.688 409.613 239.883C416.418 233.009 424.758 229.565 434.622 229.565C444.487 229.565 452.815 233.009 459.632 239.883C466.437 246.688 469.845 254.994 469.845 264.788C469.845 274.583 466.437 282.853 459.632 289.786ZM414.394 285.122C419.838 290.636 426.584 293.392 434.634 293.392C442.684 293.392 449.419 290.636 454.874 285.122C460.318 279.608 463.052 272.826 463.052 264.788C463.052 256.75 460.33 250.062 454.874 244.548C449.43 238.976 442.684 236.184 434.634 236.184C426.584 236.184 419.849 238.976 414.394 244.548C408.95 250.062 406.216 256.809 406.216 264.788C406.216 272.768 408.938 279.608 414.394 285.122Z" fill="white"/>
                <path d="M514.118 275.676V230.729H520.923V275.676C520.923 281.19 522.563 285.517 525.832 288.67C529.101 291.822 533.626 293.393 539.407 293.393C545.188 293.393 549.702 291.822 552.982 288.67C556.251 285.529 557.891 281.19 557.891 275.676V230.729H564.696V275.676C564.696 283.075 562.358 288.972 557.693 293.381C552.959 297.79 546.863 300 539.407 300C531.951 300 525.844 297.801 521.121 293.381C516.456 288.972 514.118 283.063 514.118 275.676Z" fill="white"/>
                <path d="M613.354 230.729H637.678C643.773 230.729 648.868 232.776 652.951 236.859C657.034 240.942 659.082 246.037 659.082 252.132C659.082 258.228 657.034 263.323 652.951 267.406C648.868 271.489 643.773 273.536 637.678 273.536H620.16V298.836H613.354V230.729ZM620.16 267.115H637.678C641.889 267.115 645.367 265.719 648.089 262.927C650.881 260.135 652.277 256.541 652.277 252.132C652.277 247.724 650.881 244.222 648.089 241.43C645.367 238.581 641.889 237.15 637.678 237.15H620.16V267.115Z" fill="white"/>
                <path d="M0 171.252V0.197662H30.5467V171.252H0Z" fill="white"/>
                <path d="M226.041 0.197662V171.252H195.494V62.2682L165.436 85.2422L140.508 104.552L115.58 85.2422L85.5213 62.2682V171.252H54.9746V0.197662L85.5213 23.6602L140.508 65.9324L195.494 23.6602L226.041 0.197662Z" fill="white"/>
                <path d="M415.417 171.252H381.206L365.572 140.706L328.186 67.3981L290.799 140.706L275.165 171.252H240.954L256.588 140.706L328.186 0.197662L399.783 140.706L415.417 171.252Z" fill="white"/>
                <path d="M751.233 171.252H717.022L701.389 140.706L664.002 67.3981L626.615 140.706L610.981 171.252H576.771L592.404 140.706L664.002 0.197662L735.6 140.706L751.233 171.252Z" fill="white"/>
                <path d="M888.321 0.441895V30.9886H818.189V171.497H787.643V30.9886H717.511V0.441895H888.321Z" fill="white"/>
                <path d="M559.589 170.741H529.112L493.307 108.542H460.411V170.741H432.598V0H500.333C515.49 0 528.309 5.36254 538.79 16.0993C549.434 26.5103 554.75 39.4339 554.75 54.8817C554.75 65.7813 551.644 75.7386 545.432 84.7654C539.22 93.7922 531.124 100.341 521.12 104.401L559.577 170.741H559.589ZM500.322 26.3474H460.411V79.2865H500.322C507.731 79.2865 514.025 76.518 519.189 70.9926C524.343 65.4672 526.704 59.7906 526.704 51.8224C526.704 45.948 524.354 40.1667 519.189 34.6297C514.025 29.1043 507.731 26.3358 500.322 26.3358V26.3474Z" fill="white"/>
                </g>
            </svg>
            <h2 className='loader_process'>{counter}%</h2>
        </div> : <></>
    }
  </>);
};

export default LoadingComponent;
