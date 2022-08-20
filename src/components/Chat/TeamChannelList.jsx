import React from "react";


const TeamChannelList = ({ children, error=false, loading, type }) => {
    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list__error">
                <p className="team-channel-list__message">
                    Connection error, please wait a while and try again...
                </p>
            </div>
        ) : null;
    }
    
    if(loading) {
        return(
            <div className="team-channel-list__error">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} Loading...
                </p>
            </div>
           
        )
    }

    return ( 
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Messages'}
                </p>
            </div>
            {children}
        </div>
  )
}

export default TeamChannelList;