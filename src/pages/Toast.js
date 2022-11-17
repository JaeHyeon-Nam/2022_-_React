import { useEffect } from "react";

function Toast({ setToast, text }) {

  useEffect(() => {

    // const timer = setTimeout(()=>{
    //     setToast(true);
    // },7000);
    // clearTimeout(timer);

    const timer = setTimeout(() => {
      setToast(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div>
      <p>{text}</p> 
    </div>
  );
}

export default Toast;