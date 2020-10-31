function require(module) {
    console.log('Require Module === ', module);
    if (module === "react") return React;
    if (module === "react-dom") return ReactDOM;
    if (module === "react-router-dom") return ReactRouterDOM;
    if (module === "rxjs") return rxjs; // RxJS 5.x
    if (module === "RxJs") return Rx;   // RxJS 6.x
}
