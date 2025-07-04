import React from 'react';
import ReactDOM from 'react-dom/client';
import PipelineBoard from './components/PipelineBoard';
import ChatInbox from './components/ChatInbox';
import ContactProfile from './components/ContactProfile';

const App = () => (
  <div>
    <h1>CRM Dashboard</h1>
    <PipelineBoard />
    <ChatInbox />
    <ContactProfile />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
