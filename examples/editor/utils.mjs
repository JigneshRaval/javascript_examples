// https://v8.dev/features/dynamic-import
// Default export
export default () => {
    console.log('Hi from the default export!');
};

// Named export `doStuff`
export const doStuff = () => {
    console.log('Doing stuff…');
};

// Named export `doStuff`
export const loadPageInto = (node) => {
    console.log('Doing stuff...', node);
    node.innerHTML ="Hi From Module Method"
};
