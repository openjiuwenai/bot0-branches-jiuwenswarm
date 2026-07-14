/**
 * SessionSidebar 组件
 *
 * 会话侧边栏，显示会话列表
 */

import { useTranslation } from 'react-i18next';
import './SessionSidebar.css';

type MainNavKey = 'chat' | 'history';

interface SessionSidebarProps {
  activeNav: MainNavKey;
  onNavigate: (nav: MainNavKey) => void;
  appVersion: string;
}

export function SessionSidebar({
  activeNav,
  onNavigate,
  appVersion,
}: SessionSidebarProps) {
  const { t } = useTranslation();
  return (
    <aside className="nav flex flex-col">
      <div className="session-sidebar-group-title session-sidebar-group-title--uppercase">
        {t('nav.chat')}
      </div>
      <div className="space-y-1 mb-4">
        <button
          onClick={() => onNavigate('chat')}
          className={`nav-item w-full ${activeNav === 'chat' ? 'active' : ''}`}
        >
          <svg className="w-4 h-4 nav-item__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {t('nav.chat')}
        </button>
        <button
          onClick={() => onNavigate('history')}
          className={`nav-item w-full ${activeNav === 'history' ? 'active' : ''}`}
        >
          <svg className="w-4 h-4 nav-item__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5M3.05 13A9 9 0 1 0 6 5.3L3 8" />
          </svg>
          {t('nav.history')}
        </button>
      </div>

      <div className="flex-1" />

      <div className="pt-4 mt-4 border-t border-border text-xs text-text-muted">
        <div className="px-2.5">
          <span>{t('version', { version: appVersion })}</span>
        </div>
      </div>
    </aside>
  );
}
