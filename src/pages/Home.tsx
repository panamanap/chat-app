import React from 'react';
import { DialogContent } from '../components/DialogContent';
import { ProfileModal } from '../components/ProfileModal';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <DialogContent />
            <ProfileModal />
        </div>
    );
};
