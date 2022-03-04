import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CallsModal } from '../components/CallsModal';
import { ContactsModal } from '../components/ContactsModal';
import { DialogContent } from '../components/DialogContent';
import { ProfileModal } from '../components/ProfileModal';
import { SettingsModal } from '../components/SettingsModal';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <DialogContent />
            <ProfileModal />
            <CallsModal />
            <ContactsModal />
            <SettingsModal />
        </div>
    );
};
