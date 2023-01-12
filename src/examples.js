const updateNode = (nodeId, newProperties) => {
    let updatedData = {...treeData};
    let updated = false;
    const traverse = (node) => {
      if (node.id === nodeId) {
          updatedData = {...node, ...newProperties}
          updated = true;
      } else if (node.children && !updated) {
          node.children = node.children.map(child => traverse(child));
      }
      return updatedData;
    }
    updatedData = traverse(updatedData);
    if(updated){
      setTreeData(updatedData);
    }
  }

  const options = [
    { value: 'in', label: 'In' },
    { value: 'equal', label: 'Equal' },
    { value: 'lessThan', label: 'Less Than' },
  ];
  
  const App = () => {
    //...
    return (
      <div>
        <Case caseData={caseData} updateCase={updateCase} options={options} />
      </div>
    );
  }

  import React, { useState } from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  import Select from '@material-ui/core/Select';
  import MenuItem from '@material-ui/core/MenuItem';
  import FormControl from '@material-ui/core/FormControl';
  
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
  const Case = ({ caseData, updateCase, options }) => {
    const classes = useStyles();
    const [condition, setCondition] = useState(caseData.condition);
    const [result, setResult] = useState(caseData.result);
    const [isDefault, setIsDefault] = useState(caseData.isDefault);
  
    const handleUpdate = () => {
      updateCase({ condition, result, isDefault });
    }
  
    return (
      <div>
        <FormControl className={classes.formControl}>
          <Select
            value={condition}
            onChange={e => setCondition(e.target.value)}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Result"
          value={result}
          onChange={e => setResult(e.target.value)}
        />
        <TextField
          label="Default"
          value={isDefault}
          onChange={e => setIsDefault(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    );
  }
  
  export default Case;

  import React, { useState } from 'react';

const Case = ({ caseData, updateCase }) => {
  const [condition, setCondition] = useState(caseData.condition);
  const [result, setResult] = useState(caseData.result);
  const [isDefault, setIsDefault] = useState(caseData.isDefault);

  const handleUpdate = () => {
    updateCase({ condition, result, isDefault });
  }

  return (
    <div>
      <input
        type="text"
        value={condition}
        onChange={e => setCondition(e.target.value)}
      />
      <input
        type="text"
        value={result}
        onChange={e => setResult(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isDefault}
        onChange={e => setIsDefault(e.target.checked)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Case;

import React, { useState } from 'react';
import TreeGraph from 'react-tree-graph';

const App = () => {
  const [treeData, setTreeData] = useState({
    name: 'Root',
    children: [
      { name: 'all' },
      { name: 'any' },
      { name: 'case' }
    ]
  });

  const addNode = (nodeType) => {
    setTreeData({
      ...treeData,
      children: [...treeData.children, { name: nodeType }]
    });
  }

  const removeNode = (nodeType) => {
    setTreeData({
      ...treeData,
      children: treeData.children.filter(node => node.name !== nodeType)
    });
  }

  const updateNode = (nodeType, newProperties) => {
    setTreeData({
      ...treeData,
      children: treeData.children.map(node => {
        if (node.name === nodeType) {
          return { ...node, ...newProperties };
        }
        return node;
      })
    });
  }

  return (
    <div>
      <TreeGraph data={treeData} />
      <button onClick={() => addNode('newType')}>Add Node</button>
      <button onClick={() => removeNode('any')}>Remove Node</button>
      <button onClick={() => updateNode('all', { value: 'updatedValue' })}>Update Node</button>
    </div>
  );
}

export default App;

const removeNode = (nodeId) => {
    let updatedData = {...treeData};
    let removed = false;
    const traverse = (node) => {
      if (node.id === nodeId) {
          removed = true;
          return null;
      } else if (node.children && !removed) {
          node.children = node.children.map(child => traverse(child)).filter(child => child !== null);
      }
      return node;
    }
    updatedData = traverse(updatedData);
    if(removed){
      setTreeData(updatedData);
    }
  }
  