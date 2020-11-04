"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.use('/public', express_1.default.static(__dirname + '/public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(serve_favicon_1.default(path_1.default.join(__dirname, '../public', 'favicon.ico')));
const target = path_1.default.join(__dirname, '../public', 'index.html');
app.set('view engine', 'html');
app.get('/', (_req, res) => {
    res.send(target);
});
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map