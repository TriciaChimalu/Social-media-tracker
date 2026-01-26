
import {IconBrandInstagram,IconBrandWhatsapp,  IconBrandX,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandTwitter} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';




function SelectApp(){
    const navigate = useNavigate()

    const[apps,setApps] =useState([
    {id:1,name:"Instagram", icon :IconBrandInstagram,selected:false },
       {id:2,name:"X(twitter)", icon :IconBrandX,selected:false },
        {id:3,name:"Facebook", icon :IconBrandFacebook,selected:false },
         {id:4,name:"Youtube", icon :IconBrandYoutube,selected:false },
          {id:5,name:"Tiktok", icon :IconBrandTiktok,selected:false },
           {id:6,name:"Whatsapp", icon :IconBrandWhatsapp,selected:false },
       



        ]);
function handleAppClick(appId){
    setApps(apps.map(app => 
        app.id === appId ? {...app,selected:!app.selected} : app
    )


)
}
function handleContinue(){
    const selected = apps.filter(app => app.selected);
    localStorage.setItem('selectedApps',JSON.stringify(selected))

    //navigate to daily logger page
    navigate('/daily-logger')
}

 return(
       

        <div>
            <h1>Select Apps to Track</h1>

        {apps.map((app) => {
            const Icon = app.icon;
           return(
            <div key={app.id}
            onClick={() => handleAppClick(app.id)}>
                <Icon/>
                <p>{app.name}</p>
                {app.selected && <span>✔</span>}
            </div>
           )
        })}

        <button disabled={apps.filter(app => app.selected).length === 0}
            onClick={handleContinue}>Continue</button>
 

     
</div>

)
}

export default SelectApp