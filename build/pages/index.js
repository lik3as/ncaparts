import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
var Home = function () {
    return (_jsx(_Fragment, { children: _jsx("h1", { children: "P\u00E1gina Inicial com typescript " }) }));
};
var Contador = function () {
    var _a = useState(1), contador = _a[0], setContador = _a[1];
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (_jsxs("div", { children: [_jsx("div", { children: contador }), _jsx("button", { onClick: adicionarContador, children: "Adicionar" })] }));
};
export default Home;
