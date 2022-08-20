import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './index';
import HospitalIcon from '../Sidebar/usurp-logo.png';
import './ChatFunction.css';
import styled from 'styled-components';

const List__Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    background: var(--primary-color);
    width: 240px;
    height: 100vh;
    margin-left: 0px;
  
`;
const Header = styled.div`
    padding-left: 16px;
    height: 62px;

`;
const SideBarr = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30"/>

            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <Header>
        <p className="channel-list__header__text" >Chat Room</p>
    </Header>

    
);

const ChannelListContainer = () => {
  return (
    <>
        
        <List__Wrapper>
            <CompanyHeader/>
            <ChannelSearch/>
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listPorps) => (
                    <TeamChannelList
                        {...listPorps}
                        type="team"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type="team"
                    />
                )}           
            
            
            />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listPorps) => (
                    <TeamChannelList
                        {...listPorps}
                        type="messaging"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type="messaging"
                    />
                )}           
            
            
            />
        </List__Wrapper>
    </>
  );
};

export default ChannelListContainer;