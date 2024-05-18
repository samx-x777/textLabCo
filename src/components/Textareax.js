import React, { useEffect, useState } from 'react'

export default function Textareax(props) {
    const [textValue, setTextValue] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    const [readTime, setReadTime] = useState(0);

    const clickUpper = () => {
        // setTextValue(textValue.toUpperCase())
        if (textValue.replace(/\s+/ ,'') === '') {
            props.setAlert(null)
            props.alertm2("Fill the area before using")
        }
        else {
            setTextValue(textValue.toUpperCase())
            props.alertm1("Conerted to Uppercase", "Success")
        }
    }
    const clickLower = () => {
        if (textValue.replace(/\s+/ ,'') === '') {
            props.setAlert(null)
            props.alertm2("Fill the area before using")
        }
        else {
            setTextValue(textValue.toLowerCase())
            props.alertm1("Conerted to Lowercase", "Success")
        }
    }
    const clickClear = () => {
        setTextValue('')
        if (textValue === '') {
            props.setAlert(null)
            props.alertm2("Fill the area before using")
        }
        else {
            props.alertm1("Container Cleared", "Success")
        }
    }
    const onTextchange = (event) => {
        setTextValue(event.target.value);
    }

    useEffect(() => {
        //Here /\s/ means spaces, tabs, or line breaks charecters and + means all spaces, tabs, or line breaks
        const words = textValue.split(/\s+/).filter(word => word !== '');
        setWordCount(words.length);
        //Here /\s/ means spaces, tabs, or line breaks charecters and g is a flag means globally spaces, tabs, or line breaks
        setLetterCount(textValue.replace(/\s/g, '').length);
        // const trimmedText = textValue.trim();
        // const letterCount = trimmedText.length;
        // setLetterCount(letterCount)
        setReadTime(0.25 * textValue.replace(/\s/g, '').length);
    }, [textValue]); //Here it tells React that the effect should re-run whenever the value of textValue changes.

    // const [textValue, setText] = useState()
    return (
        <div>
            <div className="textareax w-full h-[25rem] flex flex-col justify-center items-center gap-5">
                <div className="textx1 w-[500px] h-8">
                    <label htmlFor="message" className={`block mb-2 text-3xl font-medium ${ props.mode === 'black' ? ' dark:text-white' : ' dark:text-black'}`}>{props.textanalyze}</label>
                </div>
                <textarea id="message" rows="10" value={textValue} onChange={onTextchange} className={`block p-2.5 w-[500px] text-sm text-gray-900 resize-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-${props.mode === 'black' ? "700" : "300"} dark:border-gray-600 dark:placeholder-gray-400 dark:text-${props.mode === 'black' ? "white" : "black"} dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Write your thoughts here..."></textarea>
                <div className="buttonx1 w-[500px] h-10 flex items-center flex-row gap-5">
                    <button className="text-white bg-blue-500 p-2 rounded-lg text-sm font-semibold hover:bg-blue-800 hover:text-slate-400" onClick={clickUpper}>Convert to UpperCase</button>
                    <button className='text-white bg-blue-500 p-2 rounded-lg text-sm font-semibold hover:bg-blue-800 hover:text-slate-400' onClick={clickLower}>Convert to LowerCase</button>
                    <button className='text-white bg-blue-500 p-2 rounded-lg text-sm font-semibold hover:bg-blue-800 hover:text-slate-400' onClick={clickClear}>Clear</button>
                </div>
            </div>
            <div className="w-full h-40 flex flex-col items-center">
                <div className={`previewx w-[500px] h-56 font-medium flex flex-col gap-5 ${ props.mode === 'black' ? 'text-white' : 'text-black'}`}>
                    <div className="text-progress flex flex-row gap-5">
                        <p>
                            Container word <span className='text-green-500'>{wordCount}</span>
                        </p>
                        <p>
                            Container letters <span className='text-green-500'>{letterCount}</span>
                        </p>
                        <p>
                            Read time <span className='text-green-500'>{readTime} sec</span>
                        </p>
                    </div>
                    <div className="previewx1 w-[500px] h-10 text-2xl font-medium">
                        <p className='tecxt-black'>
                            Preview
                        </p>
                    </div>
                    <div className='previewx2 w-[500px] h-32 overflow-y-auto scrollbar-hide border-2 border-blue-700 rounded-lg text-slate-500'>
                        <p>
                            {textValue}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//copy
// // Create a temporary textarea element
// const textarea = document.createElement('textarea');
// // Set the value of the textarea to the text content
// textarea.value = textValue;
// // Append the textarea to the DOM
// document.body.appendChild(textarea);
// // Select the text inside the textarea
// textarea.select();
// // Execute the copy command
// document.execCommand('copy');
// // Remove the textarea from the DOM
// document.body.removeChild(textarea);
