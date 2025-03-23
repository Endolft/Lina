import React, { useEffect } from 'react';
import { useAppContext } from '@/common/context';
import { useRouter } from 'next/router';
import SideBar from '../components/SideBar';
import { TabKey } from '../components/SideBar/SideBar';

/**
 * Wraps a screen component with the Tab Navigator component.
 * @param {React.FC} Component - Screen component to be wrapped.
 * @param {string} tab - Key of the tab to be selected.
 * @param {Array<any>} tabs - Array of tabs to be rendered.
 * @param {string} prefix - Prefix for the context or route.
 * @returns {React.FC} Wrapped component.
 */
const withSideBar = (Component: React.FC, tab: TabKey) => {
  const TabWrapper: React.FC = (props) => {
    return (
      <div className="flex h-screen w-full" key="sidebar">
        <SideBar TabKey={tab} />
        <Component {...props} />
      </div>
    );
  };

  return TabWrapper;
};

// Wrappers for specific tabs.
export const withClientSideBar = (Component: React.FC, tab: TabKey) =>
  withSideBar(Component, tab);

export default withSideBar;
