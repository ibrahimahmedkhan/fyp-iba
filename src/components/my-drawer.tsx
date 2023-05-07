import React from 'react';
import {
  AdminPanelSettings, BarChart, Logout, PieChart, Settings, SsidChart,
} from '@mui/icons-material';
import DrawerTab from '@/components/drawer-tab';


export default function MyDrawer() {
  return (
    <div style={{
      width: '14em',
      height: '100%',
      backgroundColor: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '2em',
      paddingTop: '6em',
      // flex: 1,

    }}
    >
      {/* your sidebar content goes here */}
      <DrawerTab icon={<PieChart />} text="Statistics" />
      <DrawerTab icon={<BarChart />} text="Intersection" />
      <DrawerTab icon={<SsidChart />} text="LiveFeed" />
      <DrawerTab icon={<AdminPanelSettings />} text="Admin" />
      <DrawerTab icon={<Settings />} text="Settings" />
      <DrawerTab icon={<Logout />} text="Sign out" />

    </div>
  );
}
