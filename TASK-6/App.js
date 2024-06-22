import React from 'react';
import Gallery from './gallery';
import './styles.css';

import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import e from './images/e.jpg';
import f from './images/f.jpg';
import g from './images/g.jpg';
import h from './images/h.jpg';
import i from './images/i.jpg';
import j from './images/j.jpg';
import k from './images/k.jpg';
import l from './images/l.jpg';
import m from './images/m.jpg';
import n from './images/n.jpg';
import o from './images/o.jpg';
import p from './images/p.jpg';
import q from './images/q.jpg';
import r from './images/r.jpg';
import s from './images/s.jpg';
import t from './images/t.jpg';

const App = () => {
    const images = [
        {url: a, name: 'Image 1'},
        {url: b, name: 'Image 2'},
        {url: c, name: 'Image 3'},
        {url: d, name: 'Image 4'},
        {url: e, name: 'Image 5'},
        {url: f, name: 'Image 6'},
        {url: g, name: 'Image 7'},
        {url: h, name: 'Image 8'},
        {url: i, name: 'Image 9'},
        {url: j, name: 'Image 10'},
        {url: k, name: 'Image 11'},
        {url: l, name: 'Image 12'},
        {url: m, name: 'Image 13'},
        {url: n, name: 'Image 14'},
        {url: o, name: 'Image 15'},
        {url: p, name: 'Image 16'},
        {url: q, name: 'Image 17'},
        {url: r, name: 'Image 18'},
        {url: s, name: 'Image 19'},
        {url: t, name: 'Image 20'},
    ];

    return (
        <div>
            <h1>GALLERY</h1>
            <Gallery images={images} />
        </div>
    );
};

export default App;
