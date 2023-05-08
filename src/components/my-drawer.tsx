import React from 'react';
import {
  AdminPanelSettings, BarChart, Logout, PieChart, Settings, SsidChart,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
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
      textAlign: 'center',
    }}
    >
      <Image src="/trafficLight.png" alt="Traffic light" width={60} height={60} />
      <Link href="/statistics">
        <DrawerTab icon={<PieChart />} text="Statistics" />
      </Link>
      <Link href="/intersection">
        <DrawerTab icon={<BarChart />} text="Intersection" />
      </Link>
      <Link href="/livefeed">
        <DrawerTab icon={<SsidChart />} text="LiveFeed" />
      </Link>
      <Link href="/admin">
        <DrawerTab icon={<AdminPanelSettings />} text="Admin" />
      </Link>
      <DrawerTab icon={<Settings />} text="Settings" />
      <DrawerTab icon={<Logout />} text="Sign out" />

    </div>
  );
}
