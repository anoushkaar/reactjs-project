import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [isSmallTrue, setIsSmallTrue] = useState(true);
  const [isCapsTrue, setIsCapsTrue] = useState(false);
  const [isNumbersTrue, setIsNumbersTrue] = useState(false);
  const [isSymbolsTrue, setIsSymbolsTrue] = useState(false);
  const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(10);

  function passwordGenerator() {
    let passAlphabets = "";

    if (isSmallTrue) {
      passAlphabets += smallAlphabets;
    }
    if (isCapsTrue) {
      passAlphabets += capitalAlphabets;
    }
    if (isNumbersTrue) {
      passAlphabets += numbers;
    }
    if (isSymbolsTrue) {
      passAlphabets += symbols;
    }

    console.log("passAlphabets : ", passAlphabets);
    if (passAlphabets == "") {
      setPassword("");
      return;
    }

    let generatedPassword = "";

    for (let index = 0; index < rangeValue; index++) {
      let randomIndex = Math.floor(Math.random() * passAlphabets.length);
      generatedPassword += passAlphabets[randomIndex];
    }

    setPassword(generatedPassword);
  }
  useEffect(() => {
    passwordGenerator();
  }, [rangeValue, isSmallTrue, isCapsTrue, isNumbersTrue, isSymbolsTrue]);

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-900">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl w-full border border-white/20">
          <h1 className="text-4xl font-bold text-center mb-10 text-white">
            Password Generator
          </h1>
          <div className="flex flex-row gap-4 mb-8">
            <div className="flex-1 bg-white/20 p-4 rounded-xl text-sm border border-white/30 flex items-center justify-between gap-4">
              <h2 className="text-xl text-white flex-1">{password}</h2>
              <CopyToClipboard
                text={password}
                onCopy={() => toast.success("password copied.")}
              >
                <button className="px-4 py-2 text-white rounded-xl cursor-pointer hover:bg-gray-500 transition-all duration-1000 whitespace-nowrap">
                  <Copy />
                </button>
              </CopyToClipboard>
            </div>
            <button
              className="px-6 py-2 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
              onClick={passwordGenerator}
            >
              Generate
            </button>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Character Types
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all">
                <input
                  type="checkbox"
                  id="smallAlphabets"
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={() => setIsSmallTrue(!isSmallTrue)}
                  checked={isSmallTrue}
                />
                <span className="text-lg font-medium">a-z</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all">
                <input
                  type="checkbox"
                  id="capsAlphabets"
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={() => setIsCapsTrue(!isCapsTrue)}
                  checked={isCapsTrue}
                />
                <span className="text-lg font-medium">A-Z</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all">
                <input
                  type="checkbox"
                  id="numbers"
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={() => setIsNumbersTrue(!isNumbersTrue)}
                  checked={isNumbersTrue}
                />
                <span className="text-lg font-medium">0-9</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all">
                <input
                  type="checkbox"
                  id="symbols"
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={() => setIsSymbolsTrue(!isSymbolsTrue)}
                  checked={isSymbolsTrue}
                />
                <span className="text-lg font-medium">!@#$</span>
              </label>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Password Length
            </h3>
            <div className="flex items-center gap-5">
              <input
                type="range"
                min={4}
                max={20}
                className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
              />
              <span className="text-lg font-bold text-white bg-blue-600 px-4 py-2 rounded-lg text-center">
                {rangeValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
