import React from 'react';
import { Tabs } from 'antd';
import "./App.css";
import SelectableGrid from "./Components/SelectableGrid";
import IntersectionObserver from "./Components/IntersectionObserver";
import Multiselect from './Components/Multiselect';
import Filesystem from "./Components/Filesystem"
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Selectable Grid',
    children: <SelectableGrid/>,
  },
  {
    key: '2',
    label: 'Intersection Observer',
    children: <IntersectionObserver />,
  },
  {
    key: '3',
    label: 'MultiSelect',
    children: <Multiselect />,
  },
  {
    key: '3',
    label: 'File System',
    children: <Filesystem />,
  },
];
const App = () => (
  <div className='App'>
    <Tabs defaultActiveKey="3" items={items} onChange={onChange} />
  </div>
);
export default App;