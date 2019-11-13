// https://v8.dev/features/dynamic-import
// Default export
export default () => {
    console.log('Hi from the default export!');
};

// Named export `doStuff`
export const doStuff = () => {
    console.log('Doing stuff…');
};
