const HELPERS = {};

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

HELPERS.guid = () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

module.exports = HELPERS;
