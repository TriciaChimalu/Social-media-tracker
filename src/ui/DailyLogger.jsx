import { useState } from "react";

function DailyLogger(){
    const [selectedApps,SetselectedApps] = useState(function(){
        const savedApps = localStorage.getItem('selectedApps');
        return savedApps ? JSON.parse(savedApps) : []
    })

    return(
        <div>
            {selectedApps.map(app =>(
                <div key={app.id}>{app.name}</div>
            ))}
        </div>
    )
}

export default DailyLogger