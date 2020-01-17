import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as expressSession from 'express-session';
import * as fs from 'fs';
import {Product} from './types';

const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
}));
app.use(bodyParser.json());
app.use(expressSession({
    secret: 'why does the meme look like it was stuck in a microwave',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
    },
}));

let products: Array<Product> = new Array<Product>();

function loadProducts() {
    products = JSON.parse(fs.readFileSync(path.join(__dirname, '/assets/products/products.json'), 'utf8'));
}

app.get('/api/products', (req, res) => {
    loadProducts();
    res.json(products);
});

app.get('/api/shopping-cart', (req, res) => {
    if (req.session.cart == undefined) {
        req.session.cart = <Product[]>[];
    }

    res.json(req.session.cart);
});

app.post('/api/shopping-cart', (req, res) => {
    if (req.session.cart == undefined) {
        req.session.cart = <Product[]>[];
    }
    req.session.cart = <Product[]>[
        ...req.session.cart,
        <Product>req.body
    ];

    res.sendStatus(200);
});

app.post('/api/shopping-cart/empty', (req, res) => {
    if (req.body.form.firstname !== '' &&
        req.body.form.lastname !== '' &&
        req.body.form.email !== '' &&
        req.body.form.email.match('[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}')
    ) {
        req.session.cart = [];
        res.sendStatus(200);
    } else {
        res.sendStatus(422);
    }
});

app.post('/api/shopping-cart/remove-item', (req, res) => {
    removeItemFromCart(<Product>req.body, req);

    res.sendStatus(200);
});

/* libs & assets */
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/spectre', express.static(path.join(__dirname, '..', '/node_modules/spectre.css/dist')));

app.listen(8080, () => console.log('server is up and running'));

function removeItemFromCart(product: Product, req) {
    let index = 0;
    for (let productInCart of req.session.cart) {
        if (productInCart.name === product.name) {
            req.session.cart.splice(index, 1);
            break;
        }
        index++;
    }
}
