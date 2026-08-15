import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    // Password generation logic would go here
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()-+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    if (passwordRef.current) {
      passwordRef.current.select();
      // document.execCommand("copy");
    }
  }, [password]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white">Password Generator</h1>
      <div className="w-full max-w-md mx-auto p-4 shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden md-4">
          <input
            type="text"
            className="w-full px-3 py-1 text-gray-700 outline-none"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
           /> 
           <button className="outline-none bg-blue-700 text-white px-3 py-0 " onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="mt-4 flex items-center gap-x-1">
            <input 
            type="range"
            min="2"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer dark:bg-gray-700"
             /><label className=" text-white">Length: {length}</label>

             <input className="ml-2" 
             defaultChecked={numberAllowed}
             id="numberInput"
             type="checkbox"  
             onChange={() => setNumberAllowed((prev)=>!prev)}
             />
            <label htmlFor="numberInput" className="text-white">Numbers</label>
            
            <input  className="ml-2"
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev)=>!prev)}
            />
            <label htmlFor="characterInput" className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
