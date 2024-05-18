import React from 'react'

export default function Alertx(props) {
    // Check if alertMsg is null before accessing its properties
    if (!props.alertMsg) {
        return null; // or render some default message
    }
    return (
        <div>
            <div className="bg-blue-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
                <p className="font-bold">{props.alertMsg.type}</p>
                <p className="text-sm">{props.alertMsg.messege}</p>
            </div>
        </div>
    )
}
