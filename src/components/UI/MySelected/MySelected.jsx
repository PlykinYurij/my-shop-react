import React from "react"

const MySelected = ({ value, onChange, descriptions, options }) => {
    return (
        <div>
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option value={""} disabled>{descriptions}</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    )
}

export default MySelected