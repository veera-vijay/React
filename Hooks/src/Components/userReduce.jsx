import React, { useReducer } from 'react';

// 1. Initial State
const initialState = { count: 0 };

// 2. Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function SimpleCounter() {
  // 3. useReducer Hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={styles.container}>
      <h2>🔢 Simple Counter with useReducer</h2>
      <h1 style={styles.count}>{state.count}</h1>
      
      <div style={styles.buttonGroup}>
        <button 
          style={{...styles.button, background: '#ff4444'}}
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -1
        </button>
        
        <button 
          style={{...styles.button, background: '#FF9800'}}
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
        
        <button 
          style={{...styles.button, background: '#4CAF50'}}
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +1
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    border: '2px solid #2196F3',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  count: {
    fontSize: '64px',
    margin: '20px 0',
    color: '#2196F3'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default SimpleCounter;