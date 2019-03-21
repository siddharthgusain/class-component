import React from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
    summer:{
        text:'Lets go to Beach',
        iconName:'sun'
    },
    winter:{
        text:'It is Chilly',
        iconName:'snowflake'
    }
}
const getSeason = (lat,month)=>{

    if(month>3 && month<9){
       return  lat > 0 ? 'summer':'winter';
    }
    else{
        return lat>0 ? 'winter':'summer';
    }
}

const SeasonDisplay = (props)=>{
    
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=seasonConfig[season];

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive icon ${iconName}`} />
        <h1>{text}</h1>
        <i className={`icon-right massive icon ${iconName}`} />
        
    </div>
    );
}


export default SeasonDisplay; 