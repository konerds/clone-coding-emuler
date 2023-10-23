const App = () => {
    return <div className={`${process.env.NODE_ENV !== 'production' ? 'debug-screens' : ''}`}>Hello World!</div>;
};

export default App;
