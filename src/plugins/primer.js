import '@primer/css/dist/primer.css';
import '@primer/css/dist/primer';

const octicons = require('@primer/octicons')

export default function ({app}, inject) {
    inject('octicons', octicons)
}
